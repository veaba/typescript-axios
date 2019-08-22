"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/***********************
 * @name TS
 * @author Jo.gel
 * @date 2019/8/20 0020
 ***********************/
var utils_1 = require("../utils");
/**
 * @desc 转换请求或响应的数据
 *
 * */
function transformData(data, headers, fns) {
    utils_1.forEach(fns, function transform(fn) {
        data = fn(data, headers);
    });
    return data;
}
exports.default = transformData;
