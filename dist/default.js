"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var normalizeHeaderName_1 = __importDefault(require("./headers/normalizeHeaderName"));
var DEFAULT_CONTENT_TYPE = {
    'Content-Type': 'application/x-www-form-urlencoded'
};
// 设置Content Type，如果没有设置的话 的函数
function setContentTypeIfUnset(headers, value) {
    if (!utils_1.isUndefined(headers) && utils_1.isUndefined(headers['Content-Type'])) {
        headers['Content-Type'] = value;
    }
}
// 获取默认的适配器
function getDetaulAdapter() {
    var adapter = undefined;
    // 针对node.js
    if (typeof process !== "undefined" && Object.prototype.toString.call(process) === '[object process]') {
        adapter = function () { return Promise.resolve().then(function () { return __importStar(require('./adapters/http')); }); }; //todo
    }
    else if (typeof XMLHttpRequest !== 'undefined') {
        // 针对浏览器使用XHR 适配器
        adapter = function () { return Promise.resolve().then(function () { return __importStar(require('./adapters/xhr')); }); }; //todo
    }
    return adapter;
}
// 声明defaults 对象
var defaults = {
    adapter: getDetaulAdapter(),
    // request转换器
    transformRequest: [function transformRequest(data, headers) {
            normalizeHeaderName_1.default(headers, 'Accept');
            normalizeHeaderName_1.default(headers, 'Content-Type');
            // 符合formData ArrayBuffer Stream File Blob 则返回data本体
            if (utils_1.isFormData(data) ||
                utils_1.isArrayBuffer(data) ||
                utils_1.isBuffer(data) ||
                utils_1.isStream(data) ||
                utils_1.isFile(data) ||
                utils_1.isBlob(data)) {
                return data;
            }
            // 如果是ArrayBufferView
            if (utils_1.isArrayaBufferView(data))
                return data.buffer;
            if (utils_1.isURLSearchParams(data)) {
                setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
                return data.toString;
            }
            if (utils_1.isObject(data)) {
                setContentTypeIfUnset(headers, 'application/json;charset-utf-8');
                return JSON.stringify(data);
            }
            return data;
        }],
    // response 转换器
    transformResponse: [function transformResponse(data) {
            if (typeof data === 'string') {
                try {
                    data = JSON.parse(data);
                }
                catch (e) {
                    return data;
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
    validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
    }
};
defaults.headers = {
    common: {
        'Accept': 'application/json,text/plain,*/*'
    }
};
utils_1.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
    defaults.headers[method] = {};
});
utils_1.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
    defaults.headers[method] = __assign({}, DEFAULT_CONTENT_TYPE);
});
exports.default = defaults;
