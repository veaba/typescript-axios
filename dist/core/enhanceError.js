"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/***********************
 * @name TS
 * @author Jo.gel
 * @date 2019/8/19 0019
 ***********************/
// todo 如何简写？
// todo 重写error 错误的interface
function enhanceError(error, config, code, request, response) {
    error.config = config;
    if (code)
        error.code = code;
    error.request = request;
    error.respone = response;
    error.isAxiorsError = true;
    error.toJSON = function () {
        return {
            // 标准
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            filename: this.filename,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: this.config,
            code: this.code
        };
    };
    return error;
}
exports.default = enhanceError;
