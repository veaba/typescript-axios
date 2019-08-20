"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
exports.default = (utils_1.isStandardBrowserEnv() ?
    // 标准浏览器envs支持文档.cookie
    (function standradBroserEnv() {
        return {
            write: function write(name, value, expires, path, domain, secure) {
                var cookie = [];
                cookie.push(name + '=' + encodeURIComponent(value));
                if (utils_1.isNumber(expires)) {
                    cookie.push('expires=' + new Date(expires).toUTCString()); // 源码这里是hitoGMTString
                }
                if (utils_1.isString(path)) {
                    cookie.push('path=' + path);
                }
                if (utils_1.isString(domain)) {
                    cookie.push('domain=' + domain);
                }
                if (secure === true) {
                    cookie.push('secure');
                }
                document.cookie = cookie.join('; ');
            },
            read: function read(name) {
                var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
                return (match ? decodeURIComponent(match[3]) : null);
            },
            remove: function remove(name) {
                this.write(name, '', Date.now() - 86400000);
            }
        };
    })() :
    // 非标准浏览器env（web workers，react native）缺乏所需的支持。
    (function nonStandradBroserEnv() {
        return {
            write: function write() { },
            read: function read() { return null; },
            remove: function remove() { },
        };
    })());
