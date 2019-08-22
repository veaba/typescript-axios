import {
    // isArray,
    isArrayBuffer,
    isArrayaBufferView,
    isBlob,
    isBuffer,
    // isDate,
    isFile,
    isFormData,
    // isFunction,
    // isNumber,
    isObject,
    // isStandardBrowserEnv,
    isStream,
    isUndefined,
    forEach,
    isURLSearchParams,
    // trim
} from './utils'

import normalizeHeaderName from './headers/normalizeHeaderName'

import {Defaults} from './interface'

const DEFAULT_CONTENT_TYPE = {
    'Content-Type': 'application/x-www-form-urlencoded'
};

// 设置Content Type，如果没有设置的话 的函数
function setContentTypeIfUnset(headers: any, value: string) {
    if (!isUndefined(headers) && isUndefined(headers['Content-Type'])) {
        headers['Content-Type'] = value
    }
}

// 获取默认的适配器
function getDetaulAdapter() {
    let adapter: any = undefined;
    // 针对node.js
    if (typeof process !== "undefined" && Object.prototype.toString.call(process) === '[object process]') {
        adapter = () => import('./adapters/http') //todo
    } else if (typeof XMLHttpRequest !== 'undefined') {
        // 针对浏览器使用XHR 适配器
        adapter = () => import('./adapters/xhr') //todo
    }
    return adapter
}


// 声明defaults 对象
const defaults: Defaults = {
    adapter: getDetaulAdapter(),
    // request转换器
    transformRequest: [function transformRequest(data: any, headers: any) {
        normalizeHeaderName(headers, 'Accept');
        normalizeHeaderName(headers, 'Content-Type');
        // 符合formData ArrayBuffer Stream File Blob 则返回data本体
        if (isFormData(data) ||
            isArrayBuffer(data) ||
            isBuffer(data) ||
            isStream(data) ||
            isFile(data) ||
            isBlob(data)
        ) {
            return data
        }

        // 如果是ArrayBufferView
        if (isArrayaBufferView(data)) return data.buffer;

        if (isURLSearchParams(data)) {
            setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
            return data.toString
        }
        if (isObject(data)) {
            setContentTypeIfUnset(headers, 'application/json;charset-utf-8');
            return JSON.stringify(data)
        }
        return data

    }],
    // response 转换器
    transformResponse: [function transformResponse(data: any) {
        if (typeof data === 'string') {
            try {
                data = JSON.parse(data)
            } catch (e) {
                return data
            }
        }
    }],

    /*
    * 设置超时的毫秒
    * 设置为0则没有创建超时
    * */
    timeout: 0,

    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',

    maxContentLength: -1,

    validateStatus: function validateStatus(status: number) {
        return status >= 200 && status < 300
    }
};

defaults.headers = {
    common: {
        'Accept': 'application/json,text/plain,*/*'
    }
};

forEach(['delete', 'get', 'head'], function forEachMethodNoData(method: string) {
    defaults.headers[method] = {}
});

forEach(['post', 'put', 'patch'], function forEachMethodWithData(method: string) {
    defaults.headers[method] = {...DEFAULT_CONTENT_TYPE}
});
export default defaults
