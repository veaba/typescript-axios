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
Object.defineProperty(exports, "__esModule", { value: true });
var transformData_1 = __importDefault(require("./transformData"));
var isCancel_1 = __importDefault(require("../cancel/isCancel"));
var isAbsoluteURL_1 = __importDefault(require("../headers/isAbsoluteURL"));
var combineURLs_1 = __importDefault(require("../headers/combineURLs"));
var utils_1 = require("../utils");
var default_1 = __importDefault(require("../default"));
/**
 * @desc throws 如果请求cancel，则抛出一个cancel
 * */
function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
        config.cancelToken.throwIfRequested();
    }
}
/**
 * @desc 使用配置的适配器将请求分派到服务器。
 * */
function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    // 支持baseURL config
    if (config.baseURL && !isAbsoluteURL_1.default(config.url)) {
        config.url = combineURLs_1.default(config.baseURL, config.url);
    }
    // 确保headers 存在
    config.headers = config.headers || {};
    // 转换request data
    config.data = transformData_1.default(config.data, config.headers, config.transformRequest);
    // 扁平化headers
    config.headers = __assign({}, config.headers.conmon || {}, config.headers[config.method] || {}, config.headers || {});
    // TODO 后期抽离method作为公共变量
    utils_1.forEach(['delete', 'get', 'post', 'put', 'patch', 'common'], function (method) {
        delete config.headers[method];
    });
    var adapter = config.adapter || default_1.default.adapter;
    return adapter(config)
        .then(function (response) {
        throwIfCancellationRequested(config);
        // 转换response Date
        response.data = transformData_1.default(response.data, response.headers, config.transfromResponse);
        return response;
    })
        .catch(function (reason) {
        if (!isCancel_1.default(reason)) {
            throwIfCancellationRequested(config);
            // 转换response data
            if (reason && reason.response) {
                reason.response.data = transformData_1.default(reason.response.data, reason.response.headers, config.transfromResponse);
            }
        }
        return Promise.reject(reason);
    });
}
exports.default = dispatchRequest;
