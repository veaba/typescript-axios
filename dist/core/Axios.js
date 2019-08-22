"use strict";
/**
 * @desc Axios core code
 * */
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
var InterceptorManager_1 = __importDefault(require("./InterceptorManager"));
var mergeConfig_1 = __importDefault(require("./mergeConfig"));
var buildURL_1 = __importDefault(require("../headers/buildURL"));
var dispatchRequest_1 = __importDefault(require("./dispatchRequest"));
/**
 * @desc 创建一个Axios新实例,以es6 class 方式声明
 *
 * */
var Axios = /** @class */ (function () {
    function Axios(instanceConfig) {
        this.defaults = instanceConfig;
        this.interceptors = {
            request: new InterceptorManager_1.default(),
            response: new InterceptorManager_1.default()
        };
    }
    // todo
    Axios.prototype.request = function (config) {
        config = config || {};
        config = mergeConfig_1.default(this.defaults, config);
        config.method = config.method ? config.method.toLowerCase() : 'get'; //默认get
        // 连接拦截器中间件
        var chain = [dispatchRequest_1.default, undefined];
        var promise = Promise.resolve(config);
        // 向第一项添加
        this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
            chain.unshift(interceptor.fulfilled, interceptor.rejected);
        });
        // 向后面添加
        this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
            chain.push(interceptor.fulfilled, interceptor.rejected);
        });
        while (chain.length) {
            promise = promise.then(chain.shift(), chain.shift());
        }
        return promise;
    };
    Axios.prototype.getUri = function (config) {
        config = mergeConfig_1.default(this.defaults, config);
        return buildURL_1.default(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
    };
    Axios.prototype.delete = function (url, config) {
        return this.request(__assign({}, config, { method: 'delete', url: url }));
    };
    Axios.prototype.get = function (url, config) {
        return this.request(__assign({}, config, { method: 'get', url: url }));
    };
    Axios.prototype.head = function (url, config) {
        return this.request(__assign({}, config, { method: 'head', url: url }));
    };
    Axios.prototype.options = function (url, config) {
        return this.request(__assign({}, config, { method: 'options', url: url }));
    };
    Axios.prototype.post = function (url, data, config) {
        return this.request(__assign({}, config, { method: 'post', url: url, data: data }));
    };
    Axios.prototype.put = function (url, data, config) {
        return this.request(__assign({}, config, { method: 'put', url: url, data: data }));
    };
    Axios.prototype.patch = function (url, data, config) {
        return this.request(__assign({}, config, { method: 'patch', url: url, data: data }));
    };
    return Axios;
}());
exports.default = Axios;
