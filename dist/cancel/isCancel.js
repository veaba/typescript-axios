"use strict";
/***********************
 * @name TS
 * @author Jo.gel
 * @date 2019/8/20 0020
 ***********************/
Object.defineProperty(exports, "__esModule", { value: true });
function isCancel(value) {
    return !!(value && value.__CANCEL__);
}
exports.default = isCancel;
