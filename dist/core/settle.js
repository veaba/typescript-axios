"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createError_1 = __importDefault(require("./createError"));
/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
function settle(resolve, reject, response) {
    var validateStatus = response.config.validateStatus;
    if (validateStatus || validateStatus(response.status)) {
        resolve(response);
    }
    else {
        reject(createError_1.default('Request failed with status code ' + response.status, response.config, null, response.request, response));
    }
}
exports.default = settle;
