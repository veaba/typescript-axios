/***********************
 * @name TS
 * @author Jo.gel
 * @date 2019/8/19 0019
 ***********************/
import {
    isArrayBuffer,
    isStream,
    isString,
} from '../utils'

import url from 'url'
import http from 'http'
import https from 'https'
import zlib from 'zlib'
import buildURL from '../headers/buildURL'
import createError from '../core/createError'
import enhanceError from '../core/enhanceError'
import settle from '../core/settle'
import {Options} from '../interface'

import followRedirects from 'follow-redirects'

const httpFollow = followRedirects.http;
const httpsFollow = followRedirects.https;


const pkg = require('../../package.json');
const isHttps = /https:?/;

export const httpAdapter = function httpAdapter(config: any) {
    return new Promise(function dispatchHttpRequest(resolvePromise: any, rejectPromise: any) {
        let timer: any = undefined;
        const resolve = (value: any) => {
            clearTimeout(timer);
            resolvePromise(value)
        };
        const reject = (value: any) => {
            clearTimeout(timer);
            rejectPromise(value)
        };

        let data: any = config.data;
        console.info('请求的data：',data);
        const headers = config.headers;

        // 设置 User-Agent 某些服务需要
        // 只有在配置中没有设置头文件时才设置头文件
        // See https://github.com/axios/axios/issues/69
        if (!headers['User-Agent'] && !headers['user-agent']) {
            headers['User-Agent'] = 'axios/' + pkg.version
        }

        if (data && !isStream(data)) {
            if (Buffer.isBuffer(data)) {
                // 什么都没做
            } else if (isArrayBuffer(data)) {
                data = Buffer.from(new Uint8Array(data))
            } else if (isString(data)) {
                data = Buffer.from(data, 'utf-8')
            } else {
                return reject(createError(
                    'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
                    config
                ))
            }
            // 添加Content-Type header 如果 data 存在
            headers['Content-Length'] = data.length
        }



        // HTTP basic authentication
        let auth: any = undefined;

        // 如果配置文件开启授权
        if (config.auth) {
            const username: string = config.auth.username || '';
            const password: string = config.auth.password || '';
            auth = username + ':' + password
        }

        // 解析URL
        const parsed: any = url.parse(config.url);
        const protocol = parsed.protocol || 'http:';

        if (!auth && parsed.auth) {
            const urlAuth: string[] = parsed.auth.split(':');
            const urlUsername = urlAuth[0] || '';
            const urlPassword = urlAuth[1] || '';
            auth = urlUsername + ':' + urlPassword
        }

        // 如果存在auth則刪除 （智障搜狗輸入法，為什麼這裡打出了繁體？），切換到QQ對話框就變成了簡體
        if (auth) delete headers.Authorization;

        const isHttpsRequest = isHttps.test(protocol);
        const agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;

        const options: Options = {
            path: buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, ''),
            method: config.method.toUpperCase(),
            headers,
            agent,
            auth
        };

        // 如果是socket 路徑
        if (config.socketPath) options.socketPath = config.socketPath;
        else {
            options.hostname = parsed.hostname;
            options.port = parsed.port
        }

        // 不存在代理
        let proxy: any = config.proxy;
        if (!proxy && proxy !== false) {
            const proxyEnv = protocol.slice(0, -1) + '_proxy';
            const proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
            // 存在代理url
            if (proxyUrl) {
                const parsedProxyUrl: any = url.parse(proxyUrl);
                const noProxyEnv = process.env.no_proxy || process.env.NO_PROXY;
                let shouldProxy: boolean = true;

                // 没有代理环境
                if (noProxyEnv) {
                    const noProxy: any = noProxyEnv.split(',').map(item => item.trim()) || '';
                    shouldProxy = !noProxy.some(function proxyMatch(proxyElement: any) {
                        if (!proxyElement) return false;
                        if (proxyElement === '*') return true;
                        if (proxyElement[0] === '.' && parsed.hostname.substr(parsed.hostname.length - proxyElement.length) === proxyElement && proxyElement.match(/\./g).length === parsed.hostname.match(/\./g).length) {
                            return true
                        }
                        return parsed.hostname === proxyElement
                    })
                }
                // 应该代理
                if (shouldProxy) {
                    proxy = {
                        host: parsedProxyUrl.hostname,
                        post: parsedProxyUrl.port
                    };

                    // 如果存在auth
                    if (parsedProxyUrl.auth) {
                        const proxyUrlAuth = parsedProxyUrl.auth.split(":");
                        proxy.auth = {
                            username: proxyUrlAuth[0],
                            password: proxyUrlAuth[1],
                        }
                    }
                }
            }
        }

        // 存在代理
        if (proxy) {
            options.hostname = proxy.host;
            options.host = proxy.host;
            options.headers.host = parsed.hostname + (parsed.port ? ":" + parsed.post : "");
            options.port = proxy.port;
            options.path = protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : "") + options.path;

            // 基础代理授权
            if (proxy.auth) {
                const base64 = Buffer.from(proxy.auth.username + ':' + proxy.auth.password, 'utf8').toString('base64');
                options.headers['Proxy-Authorization'] = 'Basic' + base64
            }
        }

        let transport: any = undefined;
        const isHttpsProxy = isHttpsRequest && (proxy ? isHttps.test(proxy.protocol) : true);
        if (config.transport){
			transport = config.transport;
		} else if (config.maxRedirects === 0) {
            transport = isHttpsProxy ? https : http;
        } else {
            if (config.maxRedirects) {
				options.maxRedirects = config.maxRedirects;
			}
            transport = isHttpsProxy ? httpsFollow : httpFollow
        }
        if (config.maxContentLength && config.maxContentLength > -1) {
            options.maxBodyLength = config.maxContentLength
        }


		console.log("transport:",transport);


        // 创建request
        // request,为什么这里入参一个具名函数
        const req = transport.request(options, (res: any) => {
            // bug todo 这里应该有一个config 的！！！!!
            console.log('bug 出现的位置！！！');
            console.log('====',res.config,'=====');
            if (req.aborted) return;

            // 如果需要，透明地解压缩响应主体
            let stream = res;
            switch (res.headers['content-encoding']) {
                case 'gzip':
                case 'compress':
                case 'deflate':
                    // add the unzipper to the body stream processing pipeline
                    stream = (res.statusCode === 204) ? stream : stream.pipe(zlib.createUnzip());

                    // remove the content-encoding in order to not confuse downstream operations
                    delete res.headers['content-encoding'];
                    break
            }

            // 如果重定向，返回最后一个请求
            const lastRequest = res.req || req;


            console.log('开始在这里丢失了response-config：',res.config);
            //使用interface
            const response: any = {
                status: res.statusCode,
                statusText: res.statusMessage,
                headers: res.headers,
                config: res.config,
                request: lastRequest
            };

            if (config.responseType === 'stream') {
                console.info('218:',response.data);
                response.data = stream;
                settle(resolve, reject, response)
            } else {
                const responseBuffer: Uint8Array[] = [];
                // chunk的类型是 Uint8Array
                stream.on('data', (chunk: any) => {
                    responseBuffer.push(chunk);

                    // make sure the content length is not over the maxContentLength if specified
                    if (config.maxContentLength > -1 && Buffer.concat(responseBuffer).length > config.maxContentLength) {
                        stream.destroy();
                        reject(createError('maxContentLength size of ' + config.maxContentLength + ' exceeded', config, null, lastRequest))
                    }
                });
                stream.on('error', (err: any) => {
                    if (req.aborted) return;
                    reject(enhanceError(err, config, null, lastRequest))
                });
                stream.on('end', () => {
                    let responseData: any = Buffer.concat(responseBuffer);
                    if (config.responseType !== 'arraybuffer') {
                        responseData = responseData.toString(config.responseEncoding)
                    }

                    response.data = responseData;
                    console.info('244:',response.data);
                    settle(resolve, reject, response)
                })
            }
        });
        // 处理错误
        req.on('error', (err: any) => {
            if (req.aborted) return;
            console.info("处理错误:",err);
            reject(enhanceError(err, config, null, req))

        });

        // 处理请求超时
        if (config.timeout) {
            timer = setTimeout(() => {
                req.aborted();//终止
                reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', req))
            }, config.timeout)
        }
        // 取消token ,test如果用户配置了这里，似乎在使用setTimeInterval 出现内存过载的问题，以前在开发时候遇到
        if (config.cancelToken) {
            config.cancelToken.promise.then((cancel: any) => {
                if (req.aborted) return;
                req.abort();
                reject(cancel)
            })
        }
        // 发送请求
        if (isStream(data)) {
            data.on('error', (err: any) => {
                reject(enhanceError(err, config, null, req))
            }).pipe(req)// 看看这个stream 的pipe用法
        } else req.end(data)

    })
};
