"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/***********************
 * @name TS
 * @author Jo.gel
 * @date 2019/8/19 0019
 ***********************/
var utils_1 = require(".././utils");
var url_1 = __importDefault(require("url"));
var http_1 = __importDefault(require("http"));
var https_1 = __importDefault(require("https"));
var zlib_1 = __importDefault(require("zlib"));
var buildURL_1 = __importDefault(require("../headers/buildURL"));
var createError_1 = __importDefault(require("../core/createError"));
var enhanceError_1 = __importDefault(require("../core/enhanceError"));
var settle_1 = __importDefault(require("../core/settle"));
var follow_redirects_1 = __importDefault(require("follow-redirects"));
var httpFollow = follow_redirects_1.default.http;
var httpsFollow = follow_redirects_1.default.https;
var pkg = require('../../package.json');
var isHttps = /https:?/;
// todo
function httpAdapter(config) {
    return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {
        var timer;
        var resolve = function (value) {
            clearTimeout(timer);
            resolvePromise(value);
        };
        var reject = function (value) {
            clearTimeout(timer);
            rejectPromise(value);
        };
        var data = config.data;
        var headers = config.headers;
        // 设置 User-Agent 某些服务需要
        // 只有在配置中没有设置头文件时才设置头文件
        // See https://github.com/axios/axios/issues/69
        if (!headers['User-Agent'] && !headers['user-agent']) {
            headers['User-Agent'] = 'axios/' + pkg.version;
        }
        if (data && !utils_1.isStream(data)) {
            if (Buffer.isBuffer(data)) {
                // 什么都没做
            }
            else if (utils_1.isArrayBuffer(data)) {
                data = Buffer.from(new Uint8Array(data));
            }
            else if (utils_1.isString(data)) {
                data = Buffer.from(data, 'utf-8');
            }
            else {
                // todo
                return reject(createError_1.default('Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream', config));
            }
            // 添加Content-Type header 如果 data 存在
            headers['Content-Length'] = data.length; //todo 怎么确保这个length存在？
        }
        // HTTP basic authentication
        var auth = undefined;
        // 如果配置文件开启授权
        if (config.auth) {
            var username = config.auth.username || '';
            var password = config.auth.password || '';
            auth = username + ':' + password;
        }
        // 解析URL
        var parsed = url_1.default.parse(config.url);
        var protocol = parsed.protocol || 'http:';
        if (!auth && parsed.auth) {
            var urlAuth = parsed.auth.split(':');
            var urlUsername = urlAuth[0] || '';
            var urlPassword = urlAuth[1] || '';
            auth = urlUsername + ':' + urlPassword;
        }
        // 如果存在auth則刪除 （智障搜狗輸入法，為什麼這裡打出了繁體？），切換到QQ對話框就變成了簡體
        if (auth)
            delete headers.Authorization;
        var isHttpsRequest = isHttps.test(protocol);
        var agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;
        // todo 
        var options = {
            path: buildURL_1.default(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, ''),
            method: config.method.toUpperCase(),
            headers: headers,
            agent: agent,
            auth: auth
        };
        // 如果是socket 路徑
        if (config.socketPath)
            options.socketPath = config.socketPath;
        else {
            options.hostname = parsed.hostname;
            options.port = parsed.port;
        }
        // 不存在代理
        var proxy = config.proxy;
        if (!proxy && proxy !== false) {
            var proxyEnv = protocol.slice(0, -1) + '_proxy';
            var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
            // 存在代理url
            if (proxyUrl) {
                // todo 应该给interface todo ?
                var parsedProxyUrl = url_1.default.parse(proxyUrl);
                var noProxyEnv = process.env.no_proxy || process.env.NO_PROXY;
                var shouldProxy = true;
                // 没有代理环境
                if (noProxyEnv) {
                    var noProxy = noProxyEnv.split(',').map(function (item) { return item.trim(); }) || '';
                    shouldProxy = !noProxy.some(function proxyMatch(proxyElement) {
                        if (!proxyElement)
                            return false;
                        if (proxyElement === '*')
                            return true;
                        if (proxyElement[0] === '.' && parsed.hostname.substr(parsed.hostname.length - proxyElement.length) === proxyElement && proxyElement.match(/\./g).length === parsed.hostname.match(/\./g).length) {
                            return true;
                        }
                        return parsed.hostname === proxyElement;
                    });
                }
                // 应该代理
                if (shouldProxy) {
                    proxy = {
                        host: parsedProxyUrl.hostname,
                        post: parsedProxyUrl.port
                    };
                    // 如果存在auth
                    if (parsedProxyUrl.auth) {
                        var proxyUrlAuth = parsedProxyUrl.auth.split(":");
                        proxy.auth = {
                            username: proxyUrlAuth[0],
                            password: proxyUrlAuth[1],
                        };
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
                var base64 = Buffer.from(proxy.auth.username + ':' + proxy.auth.password, 'utf8').toString('base64');
                options.headers['Proxy-Authorization'] = 'Basic' + base64;
            }
        }
        var transport = undefined;
        var isHttpsProxy = isHttpsRequest && (proxy ? isHttps.test(proxy.protocol) : true);
        if (config.transport)
            transport = config.transport;
        else if (config.maxRedirects === 0)
            transport = isHttpsProxy ? https_1.default : http_1.default; //todo
        else {
            if (config.maxRedirects)
                options.maxRedirects = config.maxRedirects;
            transport = isHttpsProxy ? httpsFollow : httpFollow; // todo 
        }
        if (config.maxContentLength && config.maxContentLength > -1) {
            options.maxBodyLength = config.maxContentLength;
        }
        // 创建request
        // request,todo 为什么这里入参一个具名函数
        var req = transport.request(options, function (res) {
            if (req.aborted)
                return;
            // 如果需要，透明地解压缩响应主体
            var stream = res;
            switch (res.headers['content-encoding']) {
                case 'gzip':
                case 'compress':
                case 'deflate':
                    // add the unzipper to the body stream processing pipeline
                    stream = (res.statusCode === 204) ? stream : stream.pipe(zlib_1.default.createUnzip());
                    // remove the content-encoding in order to not confuse downstream operations
                    delete res.headers['content-encoding'];
                    break;
            }
            // 如果重定向，返回最后一个请求
            var lastRequest = res.req || req;
            // TODO 使用interface
            var response = {
                status: res.statusCode,
                statusText: res.statusMessage,
                headers: res.headers,
                config: res.config,
                request: lastRequest
            };
            if (config.responseType === 'stream') {
                response.data = stream;
                settle_1.default(resolve, reject, response);
            }
            else {
                var responseBuffer_1 = [];
                // todo chunk是什么类型的？ Uint8Array
                stream.on('data', function (chunk) {
                    responseBuffer_1.push(chunk);
                    // make sure the content length is not over the maxContentLength if specified
                    if (config.maxContentLength > -1 && Buffer.concat(responseBuffer_1).length > config.maxContentLength) {
                        stream.destroy();
                        reject(createError_1.default('maxContentLength size of ' + config.maxContentLength + ' exceeded', config, null, lastRequest));
                    }
                });
                stream.on('error', function (err) {
                    if (req.aborted)
                        return;
                    reject(enhanceError_1.default(err, config, null, lastRequest));
                });
                stream.on('end', function () {
                    var responseData = Buffer.concat(responseBuffer_1);
                    if (config.responseType !== 'arraybuffer') {
                        responseData = responseData.toString(config.responseEncoding);
                    }
                    response.data = responseData;
                    settle_1.default(resolve, reject, response);
                });
            }
        });
        // 处理错误
        req.on('error', function (err) {
            if (req.aborted)
                return;
            reject(enhanceError_1.default(err, config, null, req));
        });
        // 处理请求超时
        if (config.timeout) {
            timer = setTimeout(function () {
                req.aborted(); //终止
                reject(createError_1.default('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', req));
            }, config.timeout);
        }
        // 取消token todo ，如果用户配置了这里，似乎在使用setTimetInterval 出现内存过载的问题，以前在开发时候遇到
        if (config.cancelToken) {
            config.cancelToken.promise.then(function (cancel) {
                if (req.aborted)
                    return;
                req.abort();
                reject(cancel);
            });
        }
        // 发送 请求
        if (utils_1.isStream(data)) {
            data.on('error', function (err) {
                reject(enhanceError_1.default(err, config, null, req));
            }).pipe(req); // 看看这个stream 的pipe用法
        }
        else
            req.end(data);
    });
}
exports.default = httpAdapter;
