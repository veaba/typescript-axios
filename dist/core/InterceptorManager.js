"use strict";
/***********************
 * @name TS todo
 * @author Jo.gel
 * @date 2019/8/20 0020
 ***********************/
Object.defineProperty(exports, "__esModule", { value: true });
var InterceptorManager = /** @class */ (function () {
    function InterceptorManager() {
        this.handlers = [];
    }
    InterceptorManager.prototype.use = function (fulfilled, rejected) {
    };
    InterceptorManager.prototype.eject = function (id) {
    };
    InterceptorManager.prototype.forEach = function (fn) {
    };
    return InterceptorManager;
}());
exports.default = InterceptorManager;
