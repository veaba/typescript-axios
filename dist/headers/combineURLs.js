"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/***********************
 * @desc 通过组合指定的URL创建新的URL
 * @name TS
 * @author Jo.gel
 * @date 2019/8/20 0020
 * @param {string} baseURL
 * @param {string} relativeURL
 * @returns {string}
 ***********************/
exports.default = (function (baseURL, relativeURL) {
    return relativeURL ?
        baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
});
