"use strict";
/**todo
 *
 *
 */
// declare var URLSearchParams:any
/**
 * @desc 判断值是否是数组
 * @param {Object} val
 * @returns {boolean} 是数组,true，否则false
 */
function isArray(val) {
    return toString.call(val) === '[object Array]';
}
/**
 * @desc 判断是否是ArrayBuffer
 * @param val
 * @returns 是 则true，否则false
 */
function isArrayaBuffer(val) {
    return toString.call(val) === '[object ArrayBuffer]';
}
/**
 * @desc 判断是否formData
 */
function isFormData(val) {
    return (typeof FormData !== 'undefined') && (val instanceof FormData);
}
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
/**
 * @desc 判断字符串
 * @param {string} val
 * @returns {boolean}
 *
 */
function isString(val) {
    return typeof val === 'string';
}
/**
 * @desc 判断是数字类型
 * @returns {boolean}
 */
function isNumber(val) {
    return typeof val === 'number';
}
/**
 * @desc 判断是undefined类型
 * @returns {boolean}
 */
function isUndefined(val) {
    return typeof val === 'undefined';
}
/**
 * @desc 判断是否是object
 *
 */
function isObject(val) {
    return val !== null && typeof val === 'object';
}
/**
 * @desc 判断是Date类型
 * @returns {boolean}
 */
function isDate(val) {
    return toString.call(val) === '[object Date]';
}
/**
 * @desc 判断是file 类型
 * @returns {boolean}
 */
function isFile(val) {
    return toString.call(val) === '[object File]';
}
/**
 * @desc 判断是blob类型
 * @returns {boolean}
 */
function isBlob(val) {
    return toString.call(val) === '[object Blob]';
}
/**
 * @desc 判断是function
 * @returns {boolean}
 */
function isFunction(val) {
    return toString.call(val) === '[object Function]';
}
/**
 * @desc 判断stream
 */
function isStream(val) {
    return isObject(val) && isFunction(val.pipe);
}
/**
 * @desc 判断是URL Search Params
 *
 */
function isURLSearchParams(val) {
    return (typeof URLSearchParams !== 'undefined') && (val instanceof URLSearchParams);
}
/**
 * @desc 删除开始到结束的多余空白
 */
function trim(str) {
    return (str || '').replace(/^\s*/, '').replace(/\s*$/), '';
}
