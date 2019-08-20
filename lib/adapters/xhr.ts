/***********************
 * @name TS
 * @author Jo.gel
 * @date 2019/8/19 0019
 ***********************/
import {
    isArray,
    isArrayBuffer,
    isArrayaBufferView,
    isBlob,
    isBuffer,
    isDate,
    isFile,
    isFormData,
    isFunction,
    isNumber,
    isObject,
    isStandardBrowserEnv,
    isStream,
    isString,
    isUndefined,
    forEach,
    isURLSearchParams,
    trim
} from '.././utils'
import settle from '../core/settle'
import createError from '../core/createError';
import buildURL from '../headers/buildURL';
import parseHeader from '../headers/parseHeaders'
import isURLSameOrigin from '../headers/isURLSameOrigin'
import cookies from '../headers/cookies';


export default function xhrAdapter(config: any) {
    return new Promise((resolve: any, reject: any) => {
        let requestData = config.data;
        const requestHeaders = config.headers

        if (isFormData(requestData)) {
            delete requestHeaders['Content-Type']; // 让浏览器来设置它
        }

        let request: any = new XMLHttpRequest()

        // HTTP basic 授权

        if (config.auth) {
            const username = config.auth.username || ''
            const password = config.auth.password || ''
            requestHeaders.Authorization = 'Basic' + btoa(username + ':' + password) //btoa??
        }
        request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true)

        // 设置请求超时毫秒
        request.timeout = config.timeout

        // 监听ready 状态
        request.onreadystatechange = () => {
            if (!request || request.readyState !== 4) return


            // The request errored out and we didn't get a response, this will be
            // handled by onerror instead
            // With one exception: request that using file: protocol, most browsers
            // will return status as 0 even though it's a successful request
            if (request.status === 0 && (request.responseURL && request.responseURL.indexOf('file:') === 0)) return

            // 准备响应
            const responseHeaders = 'getALLResponseHeaders' in request ? parseHeader(request.getALLResponseHeaders()) : null //todo parseHeader
            const responseData = !config.responseType || config.responseType === 'text' ? request.responseType : request.response;//??这request 为啥还有一个response

            let response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config,
                request
            }

            settle(resolve, reject, response)

            // 清理请求
            request = null
        }

        // 处理浏览器请求取消（与手动取消相反）
        request.onabort = () => {
            if (!request) return

            reject(createError('Request aborted', config, 'ECONNABORTED', request))

            // 清理請求
            request = null
        }

        // 处理低级网络错误
        request.onerror = () => {
            // 真正的错误被浏览器隐藏起来
            // OnError只应在网络错误时触发。
            reject(createError('Network Error', config, null, request))
            // 清理請求
            request = null
        }

        // 处理超时
        request.ontimeout = () => {
            reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', request))
            // 清理請求
            request = null

        }

        // 添加 XSRF header
        // 只有在标准浏览器环境中运行时，才能执行此操作。
        // 尤其是如果我们是一个web worker，或者是react-native
        if (isStandardBrowserEnv()) {
            let cookies = require('../headers/cookies') // todo 如何让它改成为import？这个module是一个立即执行函数
            // import cookies from '../headers/cookies'

            console.log(cookies)

            // add xsrf header
            let xsrfValue = (config.withCredentials || isURLSameOrigin(config.url) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined)
            if (xsrfValue) {
                requestHeaders[config.xsrfHeaderName] = xsrfValue
            }
        }

        // 添加headers 到 request

        if('setRequestHeader' in request){
            forEach(requestHeaders,function setRequestHeader(val:string,key:string){
                if(typeof requestData==='undefined' && key.toLowerCase()==='content-type'){
                    // 如果data 是undefined，则移除 Content-Type
                    delete requestHeaders[key]
                }else{
                    // 否则将header 添加到request
                    request.setRequestHeader(key,val)
                }
            })
        }

        // 如果需要，添加带凭据的请求
        if(config.withCredentials){
            request.withCredentials=true
        }

        // 如果需要，向请求添加responseType
        if(config.responseType){
            try{
                request.responseType=config.responseType
            } catch(e){
                // 浏览器引发的预期domException与xmlhttpRequest级别2不兼容。
                // 但是，对于“json”类型，这可以被禁止，因为它可以由默认的“transformResponse”函数解析。
                if(config.responseType!=='json'){
                    throw e
                }
            }
        }

        // 必要时处理进度
        if(typeof config.onDownloadProcess==='function'){
            request.addEventListener('process',config.onDownloadProcess)
        }
        // 并非所有浏览器都支持upload事件
        if(typeof config.onUploadProgress==='function'&&request.upload){
            request.upload.addEventListener('progress',config.onUploadProgress)
        }
        // bug 超时48个小时，是否会导致内存泄漏
        if(config.cancelToken){
            // 处理注销
            config.cancelToken.promise.then(function onCanceled(cancel:any){
                if(!request) return

                request.abort()
                reject(cancel)
                request=null
            })
        }
        if(requestData===undefined) requestData=null

        // 发送request
        request.send(requestData)
    })
}
