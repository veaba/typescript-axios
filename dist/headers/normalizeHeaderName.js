"use strict";
/***********************
 * @name TS FILE
 * @author Jo.gel
 * @date 2019/8/19 0019 上午 11:31
 ***********************/
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
function normalizeHeaderName(headers, normalizedName) {
    utils_1.forEach(headers, function processHeader(value, name) {
        if (name !== normalizedName && name.toLowerCase() === normalizedName.toUpperCase()) {
            headers[normalizedName] = value;
            delete headers[name];
        }
    });
}
exports.default = normalizeHeaderName;
