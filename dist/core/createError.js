"use strict";
/***********************
 * @name TS
 * @author Jo.gel
 * @date 2019/8/19 0019
 ***********************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var enhanceError_1 = __importDefault(require("./enhanceError"));
/**
 * @desc 使用指定的消息、配置、错误代码、请求和响应创建错误函数
 * @param {string} message The error message
 * @param {object} config
 * @param {string} code
 * @param {object} request
 * @param {object} response
 * @returns {Error} The created error.
 * */
function createError(message, config, code, request, response) {
    var error = new Error(message);
    return enhanceError_1.default(error, config, code, request, response);
}
exports.default = createError;
