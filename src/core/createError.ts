/***********************
 * @name TS
 * @author Jo.gel
 * @date 2019/8/19 0019
 ***********************/

import enhanceError from './enhanceError'

/**
 * @desc 使用指定的消息、配置、错误代码、请求和响应创建错误函数
 * @param {string} message The error message
 * @param {object} config
 * @param {string} code
 * @param {object} request
 * @param {object} response
 * @returns {Error} The created error.
 * */

export default function createError(message: string, config: any, code?: any, request?: any, response?: any) {
    const error = new Error(message);
    return enhanceError(error, config, code, request, response)
}
