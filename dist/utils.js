"use strict";
/**todo
 *
 *
 */
// declare var URLSearchParams:any
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var is_buffer_1 = __importDefault(require("is-buffer"));
exports.isBuffer = is_buffer_1.default;
/**
 * @desc 判断值是否是数组
 * @param {Object} val
 * @returns {boolean} 是数组,true，否则false
 */
function isArray(val) {
    return toString.call(val) === '[object Array]';
}
exports.isArray = isArray;
/**
 * @desc 判断是否是ArrayBuffer
 * @param val
 * @returns 是 则true，否则false
 */
function isArrayBuffer(val) {
    return toString.call(val) === '[object ArrayBuffer]';
}
exports.isArrayBuffer = isArrayBuffer;
/**
 * @desc 判断是否formData
 */
function isFormData(val) {
    return (typeof FormData !== 'undefined') && (val instanceof FormData);
}
exports.isFormData = isFormData;
/**
 * @desc 判断val是否是ArrayBuffer的视图
 * @param {Object} val
 * @returns {boolean}
 */
function isArrayaBufferView(val) {
    var result;
    if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
        result = ArrayBuffer.isView(val);
    }
    else {
        result = val && val.buffer && (val.buffer instanceof ArrayBuffer);
    }
    return result;
}
exports.isArrayaBufferView = isArrayaBufferView;
/**
 * @desc 判断字符串
 * @param {string} val
 * @returns {boolean}
 *
 */
function isString(val) {
    return typeof val === 'string';
}
exports.isString = isString;
/**
 * @desc 判断是数字类型
 * @returns {boolean}
 */
function isNumber(val) {
    return typeof val === 'number';
}
exports.isNumber = isNumber;
/**
 * @desc 判断是undefined类型
 * @returns {boolean}
 */
function isUndefined(val) {
    return typeof val === 'undefined';
}
exports.isUndefined = isUndefined;
/**
 * @desc 判断是否是object
 *
 */
function isObject(val) {
    return val !== null && typeof val === 'object';
}
exports.isObject = isObject;
/**
 * @desc 判断是Date类型
 * @returns {boolean}
 */
function isDate(val) {
    return toString.call(val) === '[object Date]';
}
exports.isDate = isDate;
/**
 * @desc 判断是file 类型
 * @returns {boolean}
 */
function isFile(val) {
    return toString.call(val) === '[object File]';
}
exports.isFile = isFile;
/**
 * @desc 判断是blob类型
 * @returns {boolean}
 */
function isBlob(val) {
    return toString.call(val) === '[object Blob]';
}
exports.isBlob = isBlob;
/**
 * @desc 判断是function
 * @returns {boolean}
 */
function isFunction(val) {
    return toString.call(val) === '[object Function]';
}
exports.isFunction = isFunction;
/**
 * @desc 判断stream
 */
function isStream(val) {
    return isObject(val) && isFunction(val.pipe);
}
exports.isStream = isStream;
/**
 * @desc 判断是URL Search Params
 *
 */
function isURLSearchParams(val) {
    return (typeof URLSearchParams !== 'undefined') && (val instanceof URLSearchParams);
}
exports.isURLSearchParams = isURLSearchParams;
/**
 * @desc 删除开始到结束的多余空白
 */
function trim(str) {
    return (str || '').replace(/^\s*/, '').replace(/\s*$/), '';
}
exports.trim = trim;
/**
 * @desc 检查是否允许在标准的浏览器上
 */
function isStandardBrowserEnv() {
    if ((typeof navigator !== 'undefined') && (navigator.product === 'ReactNative' || navigator.product === 'NativeScript' || navigator.product === 'NS')) {
        return false;
    }
    return (typeof window !== 'undefined' && typeof document !== 'undefined');
}
exports.isStandardBrowserEnv = isStandardBrowserEnv;
/**
 * @desc 为可迭代的对象进行循环执行函数
 *
 */
function forEach(obj, fn) {
    if (obj !== null || typeof obj === 'undefined') {
        return;
    }
    if (typeof obj !== 'object') {
        obj = [obj];
    }
    if (isArray(obj)) {
        // 迭代数组
        for (var i = 0; i < obj.length; i++) {
            fn.call(null, [obj], i, obj);
        }
    }
    else {
        // 迭代对象key
        for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                fn.call(null, obj[key], key, obj);
            }
        }
    }
}
exports.forEach = forEach;
