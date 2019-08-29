/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_debug@3.2.6@debug/src/browser.js":
/*!********************************************************!*\
  !*** ./node_modules/_debug@3.2.6@debug/src/browser.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
/**
 * Colors.
 */

exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */
// eslint-disable-next-line complexity

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
    return true;
  } // Internet Explorer and Edge do not support colors.


  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  } // Is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */


function formatArgs(args) {
  args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);

  if (!this.useColors) {
    return;
  }

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit'); // The final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into

  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if (match === '%%') {
      return;
    }

    index++;

    if (match === '%c') {
      // We only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });
  args.splice(lastC, 0, c);
}
/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */


function log() {
  var _console;

  // This hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return (typeof console === "undefined" ? "undefined" : _typeof(console)) === 'object' && console.log && (_console = console).log.apply(_console, arguments);
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */


function save(namespaces) {
  try {
    if (namespaces) {
      exports.storage.setItem('debug', namespaces);
    } else {
      exports.storage.removeItem('debug');
    }
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */


function load() {
  var r;

  try {
    r = exports.storage.getItem('debug');
  } catch (error) {} // Swallow
  // XXX (@Qix-) should we be logging these?
  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */


function localstorage() {
  try {
    // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
    // The Browser also has localStorage in the global context.
    return localStorage;
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
}

module.exports = __webpack_require__(/*! ./common */ "./node_modules/_debug@3.2.6@debug/src/common.js")(exports);
var formatters = module.exports.formatters;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (error) {
    return '[UnexpectedJSONParseError]: ' + error.message;
  }
};



/***/ }),

/***/ "./node_modules/_debug@3.2.6@debug/src/common.js":
/*!*******************************************************!*\
  !*** ./node_modules/_debug@3.2.6@debug/src/common.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */
function setup(env) {
  createDebug.debug = createDebug;
  createDebug.default = createDebug;
  createDebug.coerce = coerce;
  createDebug.disable = disable;
  createDebug.enable = enable;
  createDebug.enabled = enabled;
  createDebug.humanize = __webpack_require__(/*! ms */ "./node_modules/_ms@2.1.2@ms/index.js");
  Object.keys(env).forEach(function (key) {
    createDebug[key] = env[key];
  });
  /**
  * Active `debug` instances.
  */

  createDebug.instances = [];
  /**
  * The currently active debug mode names, and names to skip.
  */

  createDebug.names = [];
  createDebug.skips = [];
  /**
  * Map of special "%n" handling functions, for the debug "format" argument.
  *
  * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
  */

  createDebug.formatters = {};
  /**
  * Selects a color for a debug namespace
  * @param {String} namespace The namespace string for the for the debug instance to be colored
  * @return {Number|String} An ANSI color code for the given namespace
  * @api private
  */

  function selectColor(namespace) {
    var hash = 0;

    for (var i = 0; i < namespace.length; i++) {
      hash = (hash << 5) - hash + namespace.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }

    return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
  }

  createDebug.selectColor = selectColor;
  /**
  * Create a debugger with the given `namespace`.
  *
  * @param {String} namespace
  * @return {Function}
  * @api public
  */

  function createDebug(namespace) {
    var prevTime;

    function debug() {
      // Disabled?
      if (!debug.enabled) {
        return;
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var self = debug; // Set `diff` timestamp

      var curr = Number(new Date());
      var ms = curr - (prevTime || curr);
      self.diff = ms;
      self.prev = prevTime;
      self.curr = curr;
      prevTime = curr;
      args[0] = createDebug.coerce(args[0]);

      if (typeof args[0] !== 'string') {
        // Anything else let's inspect with %O
        args.unshift('%O');
      } // Apply any `formatters` transformations


      var index = 0;
      args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
        // If we encounter an escaped % then don't increase the array index
        if (match === '%%') {
          return match;
        }

        index++;
        var formatter = createDebug.formatters[format];

        if (typeof formatter === 'function') {
          var val = args[index];
          match = formatter.call(self, val); // Now we need to remove `args[index]` since it's inlined in the `format`

          args.splice(index, 1);
          index--;
        }

        return match;
      }); // Apply env-specific formatting (colors, etc.)

      createDebug.formatArgs.call(self, args);
      var logFn = self.log || createDebug.log;
      logFn.apply(self, args);
    }

    debug.namespace = namespace;
    debug.enabled = createDebug.enabled(namespace);
    debug.useColors = createDebug.useColors();
    debug.color = selectColor(namespace);
    debug.destroy = destroy;
    debug.extend = extend; // Debug.formatArgs = formatArgs;
    // debug.rawLog = rawLog;
    // env-specific initialization logic for debug instances

    if (typeof createDebug.init === 'function') {
      createDebug.init(debug);
    }

    createDebug.instances.push(debug);
    return debug;
  }

  function destroy() {
    var index = createDebug.instances.indexOf(this);

    if (index !== -1) {
      createDebug.instances.splice(index, 1);
      return true;
    }

    return false;
  }

  function extend(namespace, delimiter) {
    return createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
  }
  /**
  * Enables a debug mode by namespaces. This can include modes
  * separated by a colon and wildcards.
  *
  * @param {String} namespaces
  * @api public
  */


  function enable(namespaces) {
    createDebug.save(namespaces);
    createDebug.names = [];
    createDebug.skips = [];
    var i;
    var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
    var len = split.length;

    for (i = 0; i < len; i++) {
      if (!split[i]) {
        // ignore empty strings
        continue;
      }

      namespaces = split[i].replace(/\*/g, '.*?');

      if (namespaces[0] === '-') {
        createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
      } else {
        createDebug.names.push(new RegExp('^' + namespaces + '$'));
      }
    }

    for (i = 0; i < createDebug.instances.length; i++) {
      var instance = createDebug.instances[i];
      instance.enabled = createDebug.enabled(instance.namespace);
    }
  }
  /**
  * Disable debug output.
  *
  * @api public
  */


  function disable() {
    createDebug.enable('');
  }
  /**
  * Returns true if the given mode name is enabled, false otherwise.
  *
  * @param {String} name
  * @return {Boolean}
  * @api public
  */


  function enabled(name) {
    if (name[name.length - 1] === '*') {
      return true;
    }

    var i;
    var len;

    for (i = 0, len = createDebug.skips.length; i < len; i++) {
      if (createDebug.skips[i].test(name)) {
        return false;
      }
    }

    for (i = 0, len = createDebug.names.length; i < len; i++) {
      if (createDebug.names[i].test(name)) {
        return true;
      }
    }

    return false;
  }
  /**
  * Coerce `val`.
  *
  * @param {Mixed} val
  * @return {Mixed}
  * @api private
  */


  function coerce(val) {
    if (val instanceof Error) {
      return val.stack || val.message;
    }

    return val;
  }

  createDebug.enable(createDebug.load());
  return createDebug;
}

module.exports = setup;



/***/ }),

/***/ "./node_modules/_debug@3.2.6@debug/src/index.js":
/*!******************************************************!*\
  !*** ./node_modules/_debug@3.2.6@debug/src/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */
if (typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs) {
  module.exports = __webpack_require__(/*! ./browser.js */ "./node_modules/_debug@3.2.6@debug/src/browser.js");
} else {
  module.exports = __webpack_require__(/*! ./node.js */ "./node_modules/_debug@3.2.6@debug/src/node.js");
}



/***/ }),

/***/ "./node_modules/_debug@3.2.6@debug/src/node.js":
/*!*****************************************************!*\
  !*** ./node_modules/_debug@3.2.6@debug/src/node.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies.
 */
var tty = __webpack_require__(/*! tty */ "tty");

var util = __webpack_require__(/*! util */ "util");
/**
 * This is the Node.js implementation of `debug()`.
 */


exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];

try {
  // Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
  // eslint-disable-next-line import/no-extraneous-dependencies
  var supportsColor = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'supports-color'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

  if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
    exports.colors = [20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221];
  }
} catch (error) {} // Swallow - we only care if `supports-color` is available; it doesn't have to be.

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */


exports.inspectOpts = Object.keys(process.env).filter(function (key) {
  return /^debug_/i.test(key);
}).reduce(function (obj, key) {
  // Camel-case
  var prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, function (_, k) {
    return k.toUpperCase();
  }); // Coerce string value into JS value

  var val = process.env[key];

  if (/^(yes|on|true|enabled)$/i.test(val)) {
    val = true;
  } else if (/^(no|off|false|disabled)$/i.test(val)) {
    val = false;
  } else if (val === 'null') {
    val = null;
  } else {
    val = Number(val);
  }

  obj[prop] = val;
  return obj;
}, {});
/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
  return 'colors' in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
}
/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */


function formatArgs(args) {
  var name = this.namespace,
      useColors = this.useColors;

  if (useColors) {
    var c = this.color;
    var colorCode = "\x1B[3" + (c < 8 ? c : '8;5;' + c);
    var prefix = "  ".concat(colorCode, ";1m").concat(name, " \x1B[0m");
    args[0] = prefix + args[0].split('\n').join('\n' + prefix);
    args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + "\x1B[0m");
  } else {
    args[0] = getDate() + name + ' ' + args[0];
  }
}

function getDate() {
  if (exports.inspectOpts.hideDate) {
    return '';
  }

  return new Date().toISOString() + ' ';
}
/**
 * Invokes `util.format()` with the specified arguments and writes to stderr.
 */


function log() {
  return process.stderr.write(util.format.apply(util, arguments) + '\n');
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */


function save(namespaces) {
  if (namespaces) {
    process.env.DEBUG = namespaces;
  } else {
    // If you set a process.env field to null or undefined, it gets cast to the
    // string 'null' or 'undefined'. Just delete instead.
    delete process.env.DEBUG;
  }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */


function load() {
  return process.env.DEBUG;
}
/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */


function init(debug) {
  debug.inspectOpts = {};
  var keys = Object.keys(exports.inspectOpts);

  for (var i = 0; i < keys.length; i++) {
    debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
  }
}

module.exports = __webpack_require__(/*! ./common */ "./node_modules/_debug@3.2.6@debug/src/common.js")(exports);
var formatters = module.exports.formatters;
/**
 * Map %o to `util.inspect()`, all on a single line.
 */

formatters.o = function (v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts).replace(/\s*\n\s*/g, ' ');
};
/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */


formatters.O = function (v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts);
};



/***/ }),

/***/ "./node_modules/_follow-redirects@1.7.0@follow-redirects/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/_follow-redirects@1.7.0@follow-redirects/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var url = __webpack_require__(/*! url */ "url");
var URL = url.URL;
var http = __webpack_require__(/*! http */ "http");
var https = __webpack_require__(/*! https */ "https");
var assert = __webpack_require__(/*! assert */ "assert");
var Writable = __webpack_require__(/*! stream */ "stream").Writable;
var debug = __webpack_require__(/*! debug */ "./node_modules/_debug@3.2.6@debug/src/index.js")("follow-redirects");

// RFC7231§4.2.1: Of the request methods defined by this specification,
// the GET, HEAD, OPTIONS, and TRACE methods are defined to be safe.
var SAFE_METHODS = { GET: true, HEAD: true, OPTIONS: true, TRACE: true };

// Create handlers that pass events from native requests
var eventHandlers = Object.create(null);
["abort", "aborted", "error", "socket", "timeout"].forEach(function (event) {
  eventHandlers[event] = function (arg) {
    this._redirectable.emit(event, arg);
  };
});

// An HTTP(S) request that can be redirected
function RedirectableRequest(options, responseCallback) {
  // Initialize the request
  Writable.call(this);
  options.headers = options.headers || {};
  this._options = options;
  this._ended = false;
  this._ending = false;
  this._redirectCount = 0;
  this._redirects = [];
  this._requestBodyLength = 0;
  this._requestBodyBuffers = [];

  // Since http.request treats host as an alias of hostname,
  // but the url module interprets host as hostname plus port,
  // eliminate the host property to avoid confusion.
  if (options.host) {
    // Use hostname if set, because it has precedence
    if (!options.hostname) {
      options.hostname = options.host;
    }
    delete options.host;
  }

  // Attach a callback if passed
  if (responseCallback) {
    this.on("response", responseCallback);
  }

  // React to responses of native requests
  var self = this;
  this._onNativeResponse = function (response) {
    self._processResponse(response);
  };

  // Complete the URL object when necessary
  if (!options.pathname && options.path) {
    var searchPos = options.path.indexOf("?");
    if (searchPos < 0) {
      options.pathname = options.path;
    }
    else {
      options.pathname = options.path.substring(0, searchPos);
      options.search = options.path.substring(searchPos);
    }
  }

  // Perform the first request
  this._performRequest();
}
RedirectableRequest.prototype = Object.create(Writable.prototype);

// Writes buffered data to the current native request
RedirectableRequest.prototype.write = function (data, encoding, callback) {
  // Writing is not allowed if end has been called
  if (this._ending) {
    throw new Error("write after end");
  }

  // Validate input and shift parameters if necessary
  if (!(typeof data === "string" || typeof data === "object" && ("length" in data))) {
    throw new Error("data should be a string, Buffer or Uint8Array");
  }
  if (typeof encoding === "function") {
    callback = encoding;
    encoding = null;
  }

  // Ignore empty buffers, since writing them doesn't invoke the callback
  // https://github.com/nodejs/node/issues/22066
  if (data.length === 0) {
    if (callback) {
      callback();
    }
    return;
  }
  // Only write when we don't exceed the maximum body length
  if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
    this._requestBodyLength += data.length;
    this._requestBodyBuffers.push({ data: data, encoding: encoding });
    this._currentRequest.write(data, encoding, callback);
  }
  // Error when we exceed the maximum body length
  else {
    this.emit("error", new Error("Request body larger than maxBodyLength limit"));
    this.abort();
  }
};

// Ends the current native request
RedirectableRequest.prototype.end = function (data, encoding, callback) {
  // Shift parameters if necessary
  if (typeof data === "function") {
    callback = data;
    data = encoding = null;
  }
  else if (typeof encoding === "function") {
    callback = encoding;
    encoding = null;
  }

  // Write data if needed and end
  if (!data) {
    this._ended = this._ending = true;
    this._currentRequest.end(null, null, callback);
  }
  else {
    var self = this;
    var currentRequest = this._currentRequest;
    this.write(data, encoding, function () {
      self._ended = true;
      currentRequest.end(null, null, callback);
    });
    this._ending = true;
  }
};

// Sets a header value on the current native request
RedirectableRequest.prototype.setHeader = function (name, value) {
  this._options.headers[name] = value;
  this._currentRequest.setHeader(name, value);
};

// Clears a header value on the current native request
RedirectableRequest.prototype.removeHeader = function (name) {
  delete this._options.headers[name];
  this._currentRequest.removeHeader(name);
};

// Global timeout for all underlying requests
RedirectableRequest.prototype.setTimeout = function (msecs, callback) {
  if (callback) {
    this.once("timeout", callback);
  }

  if (this.socket) {
    startTimer(this, msecs);
  }
  else {
    var self = this;
    this._currentRequest.once("socket", function () {
      startTimer(self, msecs);
    });
  }

  this.once("response", clearTimer);
  this.once("error", clearTimer);

  return this;
};

function startTimer(request, msecs) {
  clearTimeout(request._timeout);
  request._timeout = setTimeout(function () {
    request.emit("timeout");
  }, msecs);
}

function clearTimer() {
  clearTimeout(this._timeout);
}

// Proxy all other public ClientRequest methods
[
  "abort", "flushHeaders", "getHeader",
  "setNoDelay", "setSocketKeepAlive",
].forEach(function (method) {
  RedirectableRequest.prototype[method] = function (a, b) {
    return this._currentRequest[method](a, b);
  };
});

// Proxy all public ClientRequest properties
["aborted", "connection", "socket"].forEach(function (property) {
  Object.defineProperty(RedirectableRequest.prototype, property, {
    get: function () { return this._currentRequest[property]; },
  });
});

// Executes the next native request (initial or redirect)
RedirectableRequest.prototype._performRequest = function () {
  // Load the native protocol
  var protocol = this._options.protocol;
  var nativeProtocol = this._options.nativeProtocols[protocol];
  if (!nativeProtocol) {
    this.emit("error", new Error("Unsupported protocol " + protocol));
    return;
  }

  // If specified, use the agent corresponding to the protocol
  // (HTTP and HTTPS use different types of agents)
  if (this._options.agents) {
    var scheme = protocol.substr(0, protocol.length - 1);
    this._options.agent = this._options.agents[scheme];
  }

  // Create the native request
  var request = this._currentRequest =
        nativeProtocol.request(this._options, this._onNativeResponse);
  this._currentUrl = url.format(this._options);

  // Set up event handlers
  request._redirectable = this;
  for (var event in eventHandlers) {
    /* istanbul ignore else */
    if (event) {
      request.on(event, eventHandlers[event]);
    }
  }

  // End a redirected request
  // (The first request must be ended explicitly with RedirectableRequest#end)
  if (this._isRedirect) {
    // Write the request entity and end.
    var i = 0;
    var self = this;
    var buffers = this._requestBodyBuffers;
    (function writeNext(error) {
      // Only write if this request has not been redirected yet
      /* istanbul ignore else */
      if (request === self._currentRequest) {
        // Report any write errors
        /* istanbul ignore if */
        if (error) {
          self.emit("error", error);
        }
        // Write the next buffer if there are still left
        else if (i < buffers.length) {
          var buffer = buffers[i++];
          /* istanbul ignore else */
          if (!request.finished) {
            request.write(buffer.data, buffer.encoding, writeNext);
          }
        }
        // End the request if `end` has been called on us
        else if (self._ended) {
          request.end();
        }
      }
    }());
  }
};

// Processes a response from the current native request
RedirectableRequest.prototype._processResponse = function (response) {
  // Store the redirected response
  if (this._options.trackRedirects) {
    this._redirects.push({
      url: this._currentUrl,
      headers: response.headers,
      statusCode: response.statusCode,
    });
  }

  // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
  // that further action needs to be taken by the user agent in order to
  // fulfill the request. If a Location header field is provided,
  // the user agent MAY automatically redirect its request to the URI
  // referenced by the Location field value,
  // even if the specific status code is not understood.
  var location = response.headers.location;
  if (location && this._options.followRedirects !== false &&
      response.statusCode >= 300 && response.statusCode < 400) {
    // Abort the current request
    this._currentRequest.removeAllListeners();
    this._currentRequest.on("error", noop);
    this._currentRequest.abort();

    // RFC7231§6.4: A client SHOULD detect and intervene
    // in cyclical redirections (i.e., "infinite" redirection loops).
    if (++this._redirectCount > this._options.maxRedirects) {
      this.emit("error", new Error("Max redirects exceeded."));
      return;
    }

    // RFC7231§6.4: Automatic redirection needs to done with
    // care for methods not known to be safe […],
    // since the user might not wish to redirect an unsafe request.
    // RFC7231§6.4.7: The 307 (Temporary Redirect) status code indicates
    // that the target resource resides temporarily under a different URI
    // and the user agent MUST NOT change the request method
    // if it performs an automatic redirection to that URI.
    var header;
    var headers = this._options.headers;
    if (response.statusCode !== 307 && !(this._options.method in SAFE_METHODS)) {
      this._options.method = "GET";
      // Drop a possible entity and headers related to it
      this._requestBodyBuffers = [];
      for (header in headers) {
        if (/^content-/i.test(header)) {
          delete headers[header];
        }
      }
    }

    // Drop the Host header, as the redirect might lead to a different host
    if (!this._isRedirect) {
      for (header in headers) {
        if (/^host$/i.test(header)) {
          delete headers[header];
        }
      }
    }

    // Perform the redirected request
    var redirectUrl = url.resolve(this._currentUrl, location);
    debug("redirecting to", redirectUrl);
    Object.assign(this._options, url.parse(redirectUrl));
    this._isRedirect = true;
    this._performRequest();

    // Discard the remainder of the response to avoid waiting for data
    response.destroy();
  }
  else {
    // The response is not a redirect; return it as-is
    response.responseUrl = this._currentUrl;
    response.redirects = this._redirects;
    this.emit("response", response);

    // Clean up
    this._requestBodyBuffers = [];
  }
};

// Wraps the key/value object of protocols with redirect functionality
function wrap(protocols) {
  // Default settings
  var exports = {
    maxRedirects: 21,
    maxBodyLength: 10 * 1024 * 1024,
  };

  // Wrap each protocol
  var nativeProtocols = {};
  Object.keys(protocols).forEach(function (scheme) {
    var protocol = scheme + ":";
    var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
    var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);

    // Executes a request, following redirects
    wrappedProtocol.request = function (input, options, callback) {
      // Parse parameters
      if (typeof input === "string") {
        var urlStr = input;
        try {
          input = urlToOptions(new URL(urlStr));
        }
        catch (err) {
          /* istanbul ignore next */
          input = url.parse(urlStr);
        }
      }
      else if (URL && (input instanceof URL)) {
        input = urlToOptions(input);
      }
      else {
        callback = options;
        options = input;
        input = { protocol: protocol };
      }
      if (typeof options === "function") {
        callback = options;
        options = null;
      }

      // Set defaults
      options = Object.assign({
        maxRedirects: exports.maxRedirects,
        maxBodyLength: exports.maxBodyLength,
      }, input, options);
      options.nativeProtocols = nativeProtocols;

      assert.equal(options.protocol, protocol, "protocol mismatch");
      debug("options", options);
      return new RedirectableRequest(options, callback);
    };

    // Executes a GET request, following redirects
    wrappedProtocol.get = function (input, options, callback) {
      var request = wrappedProtocol.request(input, options, callback);
      request.end();
      return request;
    };
  });
  return exports;
}

/* istanbul ignore next */
function noop() { /* empty */ }

// from https://github.com/nodejs/node/blob/master/lib/internal/url.js
function urlToOptions(urlObject) {
  var options = {
    protocol: urlObject.protocol,
    hostname: urlObject.hostname.startsWith("[") ?
      /* istanbul ignore next */
      urlObject.hostname.slice(1, -1) :
      urlObject.hostname,
    hash: urlObject.hash,
    search: urlObject.search,
    pathname: urlObject.pathname,
    path: urlObject.pathname + urlObject.search,
    href: urlObject.href,
  };
  if (urlObject.port !== "") {
    options.port = Number(urlObject.port);
  }
  return options;
}

// Exports
module.exports = wrap({ http: http, https: https });
module.exports.wrap = wrap;


/***/ }),

/***/ "./node_modules/_is-buffer@2.0.3@is-buffer/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/_is-buffer@2.0.3@is-buffer/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}


/***/ }),

/***/ "./node_modules/_ms@2.1.2@ms/index.js":
/*!********************************************!*\
  !*** ./node_modules/_ms@2.1.2@ms/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: version, scripts, devDependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"version\":\"0.19.1\",\"scripts\":{\"dev\":\"webpack -w\",\"test\":\"node ./test/test.js\"},\"devDependencies\":{\"@types/follow-redirects\":\"^1.5.0\",\"@types/is-buffer\":\"^2.0.0\",\"@types/node\":\"^12.7.2\",\"follow-redirects\":\"^1.7.0\",\"is-buffer\":\"^2.0.3\",\"ts-loader\":\"^6.0.4\",\"typescript\":\"^3.5.3\",\"webpack\":\"^4.39.2\",\"webpack-cli\":\"^3.3.7\"}}");

/***/ }),

/***/ "./src/adapters/http.ts":
/*!******************************!*\
  !*** ./src/adapters/http.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/***********************
 * @name TS
 * @author Jo.gel
 * @date 2019/8/19 0019
 ***********************/
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
var url_1 = __importDefault(__webpack_require__(/*! url */ "url"));
var http_1 = __importDefault(__webpack_require__(/*! http */ "http"));
var https_1 = __importDefault(__webpack_require__(/*! https */ "https"));
var zlib_1 = __importDefault(__webpack_require__(/*! zlib */ "zlib"));
var buildURL_1 = __importDefault(__webpack_require__(/*! ../headers/buildURL */ "./src/headers/buildURL.ts"));
var createError_1 = __importDefault(__webpack_require__(/*! ../core/createError */ "./src/core/createError.ts"));
var enhanceError_1 = __importDefault(__webpack_require__(/*! ../core/enhanceError */ "./src/core/enhanceError.ts"));
var settle_1 = __importDefault(__webpack_require__(/*! ../core/settle */ "./src/core/settle.ts"));
var follow_redirects_1 = __importDefault(__webpack_require__(/*! follow-redirects */ "./node_modules/_follow-redirects@1.7.0@follow-redirects/index.js"));
var httpFollow = follow_redirects_1.default.http;
var httpsFollow = follow_redirects_1.default.https;
var pkg = __webpack_require__(/*! ../../package.json */ "./package.json");
var isHttps = /https:?/;
function httpAdapter(config) {
    return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {
        var timer;
        var resolve = function (value) {
            clearTimeout(timer);
            resolvePromise(value);
        };
        var reject = function (value) {
            clearTimeout(timer);
            rejectPromise(value);
        };
        var data = config.data;
        var headers = config.headers;
        // 设置 User-Agent 某些服务需要
        // 只有在配置中没有设置头文件时才设置头文件
        // See https://github.com/axios/axios/issues/69
        if (!headers['User-Agent'] && !headers['user-agent']) {
            headers['User-Agent'] = 'axios/' + pkg.version;
        }
        if (data && !utils_1.isStream(data)) {
            if (Buffer.isBuffer(data)) {
                // 什么都没做
            }
            else if (utils_1.isArrayBuffer(data)) {
                data = Buffer.from(new Uint8Array(data));
            }
            else if (utils_1.isString(data)) {
                data = Buffer.from(data, 'utf-8');
            }
            else {
                return reject(createError_1.default('Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream', config));
            }
            // 添加Content-Type header 如果 data 存在
            headers['Content-Length'] = data.length;
        }
        // HTTP basic authentication
        var auth = undefined;
        // 如果配置文件开启授权
        if (config.auth) {
            var username = config.auth.username || '';
            var password = config.auth.password || '';
            auth = username + ':' + password;
        }
        // 解析URL
        var parsed = url_1.default.parse(config.url);
        var protocol = parsed.protocol || 'http:';
        if (!auth && parsed.auth) {
            var urlAuth = parsed.auth.split(':');
            var urlUsername = urlAuth[0] || '';
            var urlPassword = urlAuth[1] || '';
            auth = urlUsername + ':' + urlPassword;
        }
        // 如果存在auth則刪除 （智障搜狗輸入法，為什麼這裡打出了繁體？），切換到QQ對話框就變成了簡體
        if (auth)
            delete headers.Authorization;
        var isHttpsRequest = isHttps.test(protocol);
        var agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;
        var options = {
            path: buildURL_1.default(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, ''),
            method: config.method.toUpperCase(),
            headers: headers,
            agent: agent,
            auth: auth
        };
        // 如果是socket 路徑
        if (config.socketPath)
            options.socketPath = config.socketPath;
        else {
            options.hostname = parsed.hostname;
            options.port = parsed.port;
        }
        // 不存在代理
        var proxy = config.proxy;
        if (!proxy && proxy !== false) {
            var proxyEnv = protocol.slice(0, -1) + '_proxy';
            var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
            // 存在代理url
            if (proxyUrl) {
                var parsedProxyUrl = url_1.default.parse(proxyUrl);
                var noProxyEnv = process.env.no_proxy || process.env.NO_PROXY;
                var shouldProxy = true;
                // 没有代理环境
                if (noProxyEnv) {
                    var noProxy = noProxyEnv.split(',').map(function (item) { return item.trim(); }) || '';
                    shouldProxy = !noProxy.some(function proxyMatch(proxyElement) {
                        if (!proxyElement)
                            return false;
                        if (proxyElement === '*')
                            return true;
                        if (proxyElement[0] === '.' && parsed.hostname.substr(parsed.hostname.length - proxyElement.length) === proxyElement && proxyElement.match(/\./g).length === parsed.hostname.match(/\./g).length) {
                            return true;
                        }
                        return parsed.hostname === proxyElement;
                    });
                }
                // 应该代理
                if (shouldProxy) {
                    proxy = {
                        host: parsedProxyUrl.hostname,
                        post: parsedProxyUrl.port
                    };
                    // 如果存在auth
                    if (parsedProxyUrl.auth) {
                        var proxyUrlAuth = parsedProxyUrl.auth.split(":");
                        proxy.auth = {
                            username: proxyUrlAuth[0],
                            password: proxyUrlAuth[1],
                        };
                    }
                }
            }
        }
        // 存在代理
        if (proxy) {
            options.hostname = proxy.host;
            options.host = proxy.host;
            options.headers.host = parsed.hostname + (parsed.port ? ":" + parsed.post : "");
            options.port = proxy.port;
            options.path = protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : "") + options.path;
            // 基础代理授权
            if (proxy.auth) {
                var base64 = Buffer.from(proxy.auth.username + ':' + proxy.auth.password, 'utf8').toString('base64');
                options.headers['Proxy-Authorization'] = 'Basic' + base64;
            }
        }
        var transport = undefined;
        var isHttpsProxy = isHttpsRequest && (proxy ? isHttps.test(proxy.protocol) : true);
        if (config.transport)
            transport = config.transport;
        else if (config.maxRedirects === 0)
            transport = isHttpsProxy ? https_1.default : http_1.default;
        else {
            if (config.maxRedirects)
                options.maxRedirects = config.maxRedirects;
            transport = isHttpsProxy ? httpsFollow : httpFollow;
        }
        if (config.maxContentLength && config.maxContentLength > -1) {
            options.maxBodyLength = config.maxContentLength;
        }
        // 创建request
        // request,为什么这里入参一个具名函数
        var req = transport.request(options, function (res) {
            if (req.aborted)
                return;
            // 如果需要，透明地解压缩响应主体
            var stream = res;
            switch (res.headers['content-encoding']) {
                case 'gzip':
                case 'compress':
                case 'deflate':
                    // add the unzipper to the body stream processing pipeline
                    stream = (res.statusCode === 204) ? stream : stream.pipe(zlib_1.default.createUnzip());
                    // remove the content-encoding in order to not confuse downstream operations
                    delete res.headers['content-encoding'];
                    break;
            }
            // 如果重定向，返回最后一个请求
            var lastRequest = res.req || req;
            //使用interface
            var response = {
                status: res.statusCode,
                statusText: res.statusMessage,
                headers: res.headers,
                config: res.config,
                request: lastRequest
            };
            if (config.responseType === 'stream') {
                response.data = stream;
                settle_1.default(resolve, reject, response);
            }
            else {
                var responseBuffer_1 = [];
                // chunk的类型是 Uint8Array
                stream.on('data', function (chunk) {
                    responseBuffer_1.push(chunk);
                    // make sure the content length is not over the maxContentLength if specified
                    if (config.maxContentLength > -1 && Buffer.concat(responseBuffer_1).length > config.maxContentLength) {
                        stream.destroy();
                        reject(createError_1.default('maxContentLength size of ' + config.maxContentLength + ' exceeded', config, null, lastRequest));
                    }
                });
                stream.on('error', function (err) {
                    if (req.aborted)
                        return;
                    reject(enhanceError_1.default(err, config, null, lastRequest));
                });
                stream.on('end', function () {
                    var responseData = Buffer.concat(responseBuffer_1);
                    if (config.responseType !== 'arraybuffer') {
                        responseData = responseData.toString(config.responseEncoding);
                    }
                    response.data = responseData;
                    settle_1.default(resolve, reject, response);
                });
            }
        });
        // 处理错误
        req.on('error', function (err) {
            if (req.aborted)
                return;
            reject(enhanceError_1.default(err, config, null, req));
        });
        // 处理请求超时
        if (config.timeout) {
            timer = setTimeout(function () {
                req.aborted(); //终止
                reject(createError_1.default('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', req));
            }, config.timeout);
        }
        // 取消token ,test如果用户配置了这里，似乎在使用setTimeInterval 出现内存过载的问题，以前在开发时候遇到
        if (config.cancelToken) {
            config.cancelToken.promise.then(function (cancel) {
                if (req.aborted)
                    return;
                req.abort();
                reject(cancel);
            });
        }
        // 发送 请求
        if (utils_1.isStream(data)) {
            data.on('error', function (err) {
                reject(enhanceError_1.default(err, config, null, req));
            }).pipe(req); // 看看这个stream 的pipe用法
        }
        else
            req.end(data);
    });
}
exports.default = httpAdapter;


/***/ }),

/***/ "./src/adapters/xhr.ts":
/*!*****************************!*\
  !*** ./src/adapters/xhr.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/***********************
 * @name TS
 * @author Jo.gel
 * @date 2019/8/19 0019
 ***********************/
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
var settle_1 = __importDefault(__webpack_require__(/*! ../core/settle */ "./src/core/settle.ts"));
var buildURL_1 = __importDefault(__webpack_require__(/*! ../headers/buildURL */ "./src/headers/buildURL.ts"));
var parseHeaders_1 = __importDefault(__webpack_require__(/*! ../headers/parseHeaders */ "./src/headers/parseHeaders.ts"));
var isURLSameOrigin_1 = __importDefault(__webpack_require__(/*! ../headers/isURLSameOrigin */ "./src/headers/isURLSameOrigin.ts"));
var createError_1 = __importDefault(__webpack_require__(/*! ../core/createError */ "./src/core/createError.ts"));
function xhrAdapter(config) {
    return new Promise(function (resolve, reject) {
        var requestData = config.data;
        var requestHeaders = config.headers;
        if (utils_1.isFormData(requestData)) {
            delete requestHeaders['Content-Type']; // 让浏览器来设置它
        }
        var request = new XMLHttpRequest();
        // HTTP basic 授权
        if (config.auth) {
            var username = config.auth.username || '';
            var password = config.auth.password || '';
            requestHeaders.Authorization = 'Basic' + btoa(username + ':' + password); //btoa??
        }
        request.open(config.method.toUpperCase(), buildURL_1.default(config.url, config.params, config.paramsSerializer), true);
        // 设置请求超时毫秒
        request.timeout = config.timeout;
        // 监听ready 状态
        request.onreadystatechange = function () {
            if (!request || request.readyState !== 4)
                return;
            // The request errored out and we didn't get a response, this will be
            // handled by onerror instead
            // With one exception: request that using file: protocol, most browsers
            // will return status as 0 even though it's a successful request
            if (request.status === 0 && (request.responseURL && request.responseURL.indexOf('file:') === 0))
                return;
            // 准备响应
            var responseHeaders = 'getALLResponseHeaders' in request ? parseHeaders_1.default(request.getALLResponseHeaders()) : null; // parseHeader
            var responseData = !config.responseType || config.responseType === 'text' ? request.responseType : request.response; //??这request 为啥还有一个response
            var response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config: config,
                request: request
            };
            settle_1.default(resolve, reject, response);
            // 清理请求
            request = null;
        };
        // 处理浏览器请求取消（与手动取消相反）
        request.onabort = function () {
            if (!request)
                return;
            reject(createError_1.default('Request aborted', config, 'ECONNABORTED', request));
            // 清理請求
            request = null;
        };
        // 处理低级网络错误
        request.onerror = function () {
            // 真正的错误被浏览器隐藏起来
            // OnError只应在网络错误时触发。
            reject(createError_1.default('Network Error', config, null, request));
            // 清理請求
            request = null;
        };
        // 处理超时
        request.ontimeout = function () {
            reject(createError_1.default('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', request));
            // 清理請求
            request = null;
        };
        // 添加 XSRF header
        // 只有在标准浏览器环境中运行时，才能执行此操作。
        // 尤其是如果我们是一个web worker，或者是react-native
        if (utils_1.isStandardBrowserEnv()) {
            var cookies = __webpack_require__(/*! ../headers/cookies */ "./src/headers/cookies.ts"); // test如何让它改成为import？这个module是一个立即执行函数
            // import cookies from '../headers/cookies'
            // console.log(cookies)
            // add xsrf header
            var xsrfValue = (config.withCredentials || isURLSameOrigin_1.default(config.url) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined);
            if (xsrfValue) {
                requestHeaders[config.xsrfHeaderName] = xsrfValue;
            }
        }
        // 添加headers 到 request
        if ('setRequestHeader' in request) {
            utils_1.forEach(requestHeaders, function setRequestHeader(val, key) {
                if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
                    // 如果data 是undefined，则移除 Content-Type
                    delete requestHeaders[key];
                }
                else {
                    // 否则将header 添加到request
                    request.setRequestHeader(key, val);
                }
            });
        }
        // 如果需要，添加带凭据的请求
        if (config.withCredentials) {
            request.withCredentials = true;
        }
        // 如果需要，向请求添加responseType
        if (config.responseType) {
            try {
                request.responseType = config.responseType;
            }
            catch (e) {
                // 浏览器引发的预期domException与xmlhttpRequest级别2不兼容。
                // 但是，对于“json”类型，这可以被禁止，因为它可以由默认的“transformResponse”函数解析。
                if (config.responseType !== 'json') {
                    throw e;
                }
            }
        }
        // 必要时处理进度
        if (typeof config.onDownloadProcess === 'function') {
            request.addEventListener('process', config.onDownloadProcess);
        }
        // 并非所有浏览器都支持upload事件
        if (typeof config.onUploadProgress === 'function' && request.upload) {
            request.upload.addEventListener('progress', config.onUploadProgress);
        }
        // bug 超时48个小时，是否会导致内存泄漏
        if (config.cancelToken) {
            // 处理注销
            config.cancelToken.promise.then(function onCanceled(cancel) {
                if (!request)
                    return;
                request.abort();
                reject(cancel);
                request = null;
            });
        }
        if (requestData === undefined)
            requestData = null;
        // 发送request
        request.send(requestData);
    });
}
exports.default = xhrAdapter;


/***/ }),

/***/ "./src/axios.ts":
/*!**********************!*\
  !*** ./src/axios.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @desc Axios 入口文件
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Axios_1 = __importDefault(__webpack_require__(/*! ./core/Axios */ "./src/core/Axios.ts"));
var defaults_1 = __importDefault(__webpack_require__(/*! ./defaults */ "./src/defaults.ts"));
/**
 * @desc 创建Axios 实例
 *
 */
var createInstance = function (defaultConfig) {
    return new Axios_1.default(defaultConfig);
};
// 创建要导出的默认实例
var axios = new Axios_1.default(defaults_1.default);
// const axios: any = createInstance(defaults);
// 暴露类Axios
axios.Axios = Axios_1.default;
// 用于创建新实例的工厂模式函数
axios.create = function create(instanceConfig) {
    return new Axios_1.default(__assign({}, axios.defaults, instanceConfig || {}));
};
// 暴露 axios 的Cancel & CancelToken
axios.Cancel = function () { return Promise.resolve().then(function () { return __importStar(__webpack_require__(/*! ./cancel/Cancel */ "./src/cancel/Cancel.ts")); }); };
axios.CancelToken = function () { return Promise.resolve().then(function () { return __importStar(__webpack_require__(/*! ./cancel/CancelToken */ "./src/cancel/CancelToken.ts")); }); };
axios.isCancel = function () { return Promise.resolve().then(function () { return __importStar(__webpack_require__(/*! ./cancel/isCancel */ "./src/cancel/isCancel.ts")); }); };
// 暴露 all/spread 干嘛的？
axios.all = function (promises) {
    return Promise.all(promises);
};
axios.spread = function () { return Promise.resolve().then(function () { return __importStar(__webpack_require__(/*! ./headers/spread */ "./src/headers/spread.ts")); }); };
var x = axios.create({});
x.get('http://baidu.com', { data: { kw: "baidu" } })
    .then(function (x) {
    console.info("res:", x);
})
    .catch(function (err) {
    console.info("err:", err);
});
exports.default = axios;


/***/ }),

/***/ "./src/cancel/Cancel.ts":
/*!******************************!*\
  !*** ./src/cancel/Cancel.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @desc `Cancel` 引发的取消对象
 * @class
 * @param {string} message
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Cancel = /** @class */ (function () {
    function Cancel(message) {
        this.message = message;
        this.__CANCEL__ = true;
    }
    Cancel.prototype.toString = function () {
        return 'Cancel ' + (this.message ? ':' + this.message : "");
    };
    return Cancel;
}());
exports.default = Cancel;


/***/ }),

/***/ "./src/cancel/CancelToken.ts":
/*!***********************************!*\
  !*** ./src/cancel/CancelToken.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Cancel_1 = __importDefault(__webpack_require__(/*! ./Cancel */ "./src/cancel/Cancel.ts"));
/**
 * @desc `CancelToken`是可用于请求取消操作的对象。
 * @class
 * @param {Function} executor 执行器函数
 */
var CancelToken = /** @class */ (function () {
    function CancelToken(executor) {
        var resolvePromise = undefined;
        this.promise = new Promise(function (resolve) {
            resolvePromise = resolve;
        });
        var token = this;
        executor(function (message) {
            // 已请求取消
            if (token.reason)
                return;
            token.reason = new Cancel_1.default(message);
            resolvePromise(token.reason);
        });
    }
    return CancelToken;
}());
exports.default = CancelToken;


/***/ }),

/***/ "./src/cancel/isCancel.ts":
/*!********************************!*\
  !*** ./src/cancel/isCancel.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***********************
 * @author Jo.gel
 * @date 2019/8/20 0020
 ***********************/
Object.defineProperty(exports, "__esModule", { value: true });
function isCancel(value) {
    return !!(value && value.__CANCEL__);
}
exports.default = isCancel;


/***/ }),

/***/ "./src/core/Axios.ts":
/*!***************************!*\
  !*** ./src/core/Axios.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @desc Axios core code
 * */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var InterceptorManager_1 = __importDefault(__webpack_require__(/*! ./InterceptorManager */ "./src/core/InterceptorManager.ts"));
var mergeConfig_1 = __importDefault(__webpack_require__(/*! ./mergeConfig */ "./src/core/mergeConfig.ts"));
var buildURL_1 = __importDefault(__webpack_require__(/*! ../headers/buildURL */ "./src/headers/buildURL.ts"));
var dispatchRequest_1 = __importDefault(__webpack_require__(/*! ./dispatchRequest */ "./src/core/dispatchRequest.ts"));
var pkg = __webpack_require__(/*! ../../package.json */ "./package.json");
/**
 * @desc 创建一个Axios新实例,以es6 class 方式声明
 *
 * */
var Axios = /** @class */ (function () {
    function Axios(instanceConfig) {
        this.defaults = instanceConfig;
        this.interceptors = {
            request: new InterceptorManager_1.default(),
            response: new InterceptorManager_1.default()
        };
    }
    Object.defineProperty(Axios.prototype, "version", {
        // 保护axios version
        get: function () {
            return pkg.version || '';
        },
        // 如果尝试去设置，则抛出错误
        set: function (val) {
            throw "Can't setting the Axios version";
        },
        enumerable: true,
        configurable: true
    });
    Axios.prototype.request = function (config) {
        config = config || {};
        config = mergeConfig_1.default(this.defaults, config);
        console.info('haha:\n', config);
        config.method = config.method ? config.method.toLowerCase() : 'get'; //默认get,并转换小写method字段
        // 连接拦截器中间件
        var chain = [dispatchRequest_1.default, undefined];
        var promise = Promise.resolve(config);
        // 向第一项添加
        this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
            chain.unshift(interceptor.fulfilled, interceptor.rejected);
        });
        // 向后面添加
        this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
            chain.push(interceptor.fulfilled, interceptor.rejected);
        });
        console.info("chain:", chain);
        while (chain.length) {
            promise = promise.then(chain.shift(), chain.shift());
        }
        return promise;
    };
    Axios.prototype.getUri = function (config) {
        config = mergeConfig_1.default(this.defaults, config);
        return buildURL_1.default(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
    };
    Axios.prototype.delete = function (url, config) {
        return this.request(__assign({}, config, { method: 'delete', url: url }));
    };
    Axios.prototype.get = function (url, config) {
        return this.request(__assign({}, config, { method: 'get', url: url }));
    };
    Axios.prototype.head = function (url, config) {
        return this.request(__assign({}, config, { method: 'head', url: url }));
    };
    Axios.prototype.options = function (url, config) {
        return this.request(__assign({}, config, { method: 'options', url: url }));
    };
    Axios.prototype.post = function (url, data, config) {
        return this.request(__assign({}, config, { method: 'post', url: url, data: data }));
    };
    Axios.prototype.put = function (url, data, config) {
        return this.request(__assign({}, config, { method: 'put', url: url, data: data }));
    };
    Axios.prototype.patch = function (url, data, config) {
        return this.request(__assign({}, config, { method: 'patch', url: url, data: data }));
    };
    return Axios;
}());
exports.default = Axios;


/***/ }),

/***/ "./src/core/InterceptorManager.ts":
/*!****************************************!*\
  !*** ./src/core/InterceptorManager.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/***********************
 * @desc  拦截器管理器
 * @author Jo.gel
 * @date 2019/8/20 0020
 ***********************/
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
var InterceptorManager = /** @class */ (function () {
    function InterceptorManager() {
        this.handlers = [];
        this.handlers = [];
    }
    InterceptorManager.prototype.use = function (fulfilled, rejected) {
        this.handlers.push({
            fulfilled: fulfilled,
            rejected: rejected
        });
        return this.handlers.length - 1;
    };
    /**
     * @desc 从堆栈中删除拦截器
     * @param {Number} id 由`返回的ID使用`
     * */
    InterceptorManager.prototype.eject = function (id) {
        if (this.handlers[id])
            this.handlers[id] = null;
    };
    /**
     * 迭代所有注册的拦截器
     * 这种方法对于跳过
     * 可能已成为`null`的拦截器调用`eject`。
     * @param {Function} fn 调用每个拦截器的函数
     * */
    InterceptorManager.prototype.forEach = function (fn) {
        utils_1.forEach(this.handlers, function forEachHandler(h) {
            if (h !== null)
                fn(h);
        });
    };
    return InterceptorManager;
}());
exports.default = InterceptorManager;


/***/ }),

/***/ "./src/core/createError.ts":
/*!*********************************!*\
  !*** ./src/core/createError.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***********************
 * @author Jo.gel
 * @date 2019/8/19 0019
 ***********************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var enhanceError_1 = __importDefault(__webpack_require__(/*! ./enhanceError */ "./src/core/enhanceError.ts"));
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


/***/ }),

/***/ "./src/core/dispatchRequest.ts":
/*!*************************************!*\
  !*** ./src/core/dispatchRequest.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var transformData_1 = __importDefault(__webpack_require__(/*! ./transformData */ "./src/core/transformData.ts"));
var isCancel_1 = __importDefault(__webpack_require__(/*! ../cancel/isCancel */ "./src/cancel/isCancel.ts"));
var isAbsoluteURL_1 = __importDefault(__webpack_require__(/*! ../headers/isAbsoluteURL */ "./src/headers/isAbsoluteURL.ts"));
var combineURLs_1 = __importDefault(__webpack_require__(/*! ../headers/combineURLs */ "./src/headers/combineURLs.ts"));
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
var defaults_1 = __importDefault(__webpack_require__(/*! ../defaults */ "./src/defaults.ts"));
/**
 * @desc throws 如果请求cancel，则抛出一个cancel
 * */
function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
        config.cancelToken.throwIfRequested();
    }
}
/**
 * @desc 使用配置的适配器将请求分派到服务器。
 * */
function dispatchRequest(config) {
    console.info("使用配置的适配器将请求分派到服务器。:\n", config);
    throwIfCancellationRequested(config);
    // 支持baseURL config
    if (config.baseURL && !isAbsoluteURL_1.default(config.url)) {
        config.url = combineURLs_1.default(config.baseURL, config.url);
    }
    // 确保headers 存在
    config.headers = config.headers || {};
    // todo 这里的data 为什么丢失了？？
    console.info("为什么丢失:", config.data);
    // 转换request data
    config.data = transformData_1.default(config.data, config.headers, config.transformRequest);
    console.info("此时的config：", config);
    // 扁平化headers
    config.headers = __assign({}, config.headers.conmon || {}, config.headers[config.method] || {}, config.headers || {});
    // 后期抽离method作为公共变量
    utils_1.forEach(['delete', 'get', 'post', 'put', 'patch', 'common'], function (method) {
        delete config.headers[method];
    });
    // console.info("config:",config);
    // console.info("defaults:",defaults);
    var adapter = config.adapter || defaults_1.default.adapter;
    return adapter(config)
        .then(function (response) {
        throwIfCancellationRequested(config);
        // 转换数据是不是出了点问题 TODO
        console.info("response11::", response);
        // 转换response Date
        response.data = transformData_1.default(response.data, response.headers, config.transfromResponse);
        return response;
    })
        .catch(function (reason) {
        if (!isCancel_1.default(reason)) {
            throwIfCancellationRequested(config);
            // 转换response data
            if (reason && reason.response) {
                reason.response.data = transformData_1.default(reason.response.data, reason.response.headers, config.transfromResponse);
            }
        }
        return Promise.reject(reason);
    });
}
exports.default = dispatchRequest;


/***/ }),

/***/ "./src/core/enhanceError.ts":
/*!**********************************!*\
  !*** ./src/core/enhanceError.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/***********************
 * @desc 错误增强管理
 * @author Jo.gel
 * @date 2019/8/19 0019
 ***********************/
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


/***/ }),

/***/ "./src/core/mergeConfig.ts":
/*!*********************************!*\
  !*** ./src/core/mergeConfig.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
/***********************
 * @desc 合并config
 * @author Jo.gel
 * @date 2019/8/20 0020
 ***********************/
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
/**
 * @param config2 config2 合并到config1
 * @param config1 将config2合并进来
 * */
function mergeConfig(config1, config2) {
    if (config1 === void 0) { config1 = {}; }
    if (config2 === void 0) { config2 = {}; }
    config2 = config2 || {};
    var config = {};
    utils_1.forEach(['url', 'method', 'params', 'data'], function valueFromConfig2(prop) {
        if (typeof config2[prop] !== 'undefined') {
            config[prop] = config2[prop];
        }
    });
    utils_1.forEach(['headers', 'auth', 'proxy'], function mergeDeepProperties(prop) {
        // test这里使用：解构操作符，需要待验证
        if (utils_1.isObject(config2[prop])) {
            config[prop] = __assign({}, config1[prop], config2[prop]);
        }
        else if (typeof config2[prop] !== 'undefined') {
            config[prop] = config2[prop];
        }
        else if (utils_1.isObject(config1[prop])) {
            config[prop] = __assign({}, config1[prop]);
        }
        else if (typeof config1[prop] !== 'undefined') {
            config[prop] = config1[prop];
        }
    });
    utils_1.forEach(['baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
        'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
        'xsrfHeaderName', 'onUploadProcess', 'onDownloadProgress', 'maxContentLength',
        'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken',
        'socketPath'
    ], function defaultToConfig2(prop) {
        if (typeof config2[prop] !== 'undefined') {
            config[prop] = config2[prop];
        }
        else if (typeof config1[prop] !== 'undefined') {
            config[prop] = config1[prop];
        }
    });
    return config;
}
exports.default = mergeConfig;


/***/ }),

/***/ "./src/core/settle.ts":
/*!****************************!*\
  !*** ./src/core/settle.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createError_1 = __importDefault(__webpack_require__(/*! ./createError */ "./src/core/createError.ts"));
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


/***/ }),

/***/ "./src/core/transformData.ts":
/*!***********************************!*\
  !*** ./src/core/transformData.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/***********************
 * @author Jo.gel
 * @date 2019/8/20 0020
 ***********************/
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
/**
 * @desc 转换请求或响应的数据
 * @param data {Object|String} 要转换的数据
 * @param headers {Array} 请求或响应的头
 * @param fns {Array|Function}单个函数或函数数组
 * @returns * 转换后的数据 todo
 * */
function transformData(data, headers, fns) {
    utils_1.forEach(fns, function transform(fn) {
        data = fn(data, headers);
    });
    return data;
}
exports.default = transformData;


/***/ }),

/***/ "./src/defaults.ts":
/*!*************************!*\
  !*** ./src/defaults.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
var normalizeHeaderName_1 = __importDefault(__webpack_require__(/*! ./headers/normalizeHeaderName */ "./src/headers/normalizeHeaderName.ts"));
var DEFAULT_CONTENT_TYPE = {
    'Content-Type': 'application/x-www-form-urlencoded'
};
// 设置Content Type，如果没有设置的话 的函数
function setContentTypeIfUnset(headers, value) {
    if (!utils_1.isUndefined(headers) && utils_1.isUndefined(headers['Content-Type'])) {
        headers['Content-Type'] = value;
    }
}
// 获取默认的适配器
function getDefaultAdapter() {
    var adapter = undefined;
    // 针对node.js，单某种情况下process 是[object object]
    if (typeof process !== "undefined" && Object.prototype.toString.call(process) === '[object process]') {
        console.info('is Node js?');
        adapter = function () { return Promise.resolve().then(function () { return __importStar(__webpack_require__(/*! ./adapters/http */ "./src/adapters/http.ts")); }); };
    }
    else if (typeof XMLHttpRequest !== 'undefined') {
        console.info('is browser');
        // 针对浏览器使用XHR 适配器
        adapter = function () { return Promise.resolve().then(function () { return __importStar(__webpack_require__(/*! ./adapters/xhr */ "./src/adapters/xhr.ts")); }); };
    }
    else {
        adapter = function () { return Promise.resolve().then(function () { return __importStar(__webpack_require__(/*! ./adapters/http */ "./src/adapters/http.ts")); }); };
        console.info('无法捕捉到意外的适配器~~~~~');
    }
    return adapter;
}
// 声明defaults 对象
var defaults = {
    adapter: getDefaultAdapter(),
    // request转换器
    transformRequest: [function transformRequest(data, headers) {
            normalizeHeaderName_1.default(headers, 'Accept');
            normalizeHeaderName_1.default(headers, 'Content-Type');
            console.info('这个DATA:', data);
            // 符合formData ArrayBuffer Stream File Blob 则返回data本体
            if (utils_1.isFormData(data) ||
                utils_1.isArrayBuffer(data) ||
                utils_1.isBuffer(data) ||
                utils_1.isStream(data) ||
                utils_1.isFile(data) ||
                utils_1.isBlob(data)) {
                return data;
            }
            // 如果是ArrayBufferView
            if (utils_1.isArrayBufferView(data))
                return data.buffer;
            if (utils_1.isURLSearchParams(data)) {
                setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
                return data.toString;
            }
            if (utils_1.isObject(data)) {
                setContentTypeIfUnset(headers, 'application/json;charset-utf-8');
                return JSON.stringify(data);
            }
            return data;
        }],
    // response 转换器
    transformResponse: [function transformResponse(data) {
            console.info('响应data：', data);
            if (typeof data === 'string') {
                try {
                    data = JSON.parse(data);
                }
                catch (e) {
                    return data;
                }
            }
        }],
    /*
    * 设置超时的毫秒
    * 设置为0则没有创建超时
    * */
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
    }
};
defaults.headers = {
    common: {
        'Accept': 'application/json,text/plain,*/*'
    }
};
utils_1.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
    defaults.headers[method] = {};
});
utils_1.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
    defaults.headers[method] = __assign({}, DEFAULT_CONTENT_TYPE);
});
exports.default = defaults;


/***/ }),

/***/ "./src/headers/buildURL.ts":
/*!*********************************!*\
  !*** ./src/headers/buildURL.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
function encode(val) {
    return encodeURIComponent(val)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/gi, ',')
        .replace(/%20/g, '+')
        .replace(/%5B/gi, '[')
        .replace(/%5D/gi, ']');
}
/**
 * @desc 通过在末尾附加参数来构建URL
 * @param url
 * @param params
 * @param paramsSerializer
 */
function buildURL(url, params, paramsSerializer) {
    if (!params)
        return url;
    var serializedParams = undefined;
    if (paramsSerializer) {
        serializedParams = paramsSerializer(params);
    }
    else if (utils_1.isURLSearchParams(params)) {
        serializedParams = params.toString();
    }
    else {
        var parts_1 = [];
        utils_1.forEach(params, function serialize(val, key) {
            if (val === null || typeof val === 'undefined')
                return;
            if (utils_1.isArray(val)) {
                key = key + '[]';
            }
            else {
                val = [val];
            }
            utils_1.forEach(val, function parseValue(v) {
                if (utils_1.isDate(v)) {
                    v = v.toISOString();
                }
                else if (utils_1.isObject(v)) {
                    v = JSON.stringify(v);
                }
                parts_1.push(encode(key) + '=' + encode(v));
            });
        });
        serializedParams = parts_1.join('&');
    }
    if (serializedParams) {
        var hashMarkIndex = url.indexOf('#');
        if (hashMarkIndex !== -1) {
            url = url.slice(0, hashMarkIndex);
        }
        url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }
    return url;
}
exports.default = buildURL;


/***/ }),

/***/ "./src/headers/combineURLs.ts":
/*!************************************!*\
  !*** ./src/headers/combineURLs.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/***********************
 * @desc 通过组合指定的URL创建新的URL
 * @author Jo.gel
 * @date 2019/8/20 0020
 * @param {string} baseURL
 * @param {string} relativeURL
 * @returns {string}
 ***********************/
exports.default = (function (baseURL, relativeURL) {
    return relativeURL
        ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
        : baseURL;
});


/***/ }),

/***/ "./src/headers/cookies.ts":
/*!********************************!*\
  !*** ./src/headers/cookies.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
exports.default = (utils_1.isStandardBrowserEnv() ?
    // 标准浏览器envs支持文档.cookie
    (function standardBrowserEnv() {
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
    (function nonStandardBrowserEnv() {
        return {
            write: function write() { },
            read: function read() { return null; },
            remove: function remove() { },
        };
    })());


/***/ }),

/***/ "./src/headers/isAbsoluteURL.ts":
/*!**************************************!*\
  !*** ./src/headers/isAbsoluteURL.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***********************
 * @desc 其实 node环境的path.isAbsolute 也是提供了一个方法的
 * @desc 判断是否绝对路径
 * @author Jo.gel
 * @date 2019/8/20 0020
 * @param {string} url
 * @returns {boolean}
 ***********************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (url) {
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
});


/***/ }),

/***/ "./src/headers/isURLSameOrigin.ts":
/*!****************************************!*\
  !*** ./src/headers/isURLSameOrigin.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
var util_1 = __webpack_require__(/*! util */ "util");
exports.default = (utils_1.isStandardBrowserEnv() ?
    // Standard browser envs have full support of the APIs needed to test
    // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
        var msie = /(msie|trident)/i.test(navigator.userAgent);
        var urlParsingNode = document.createElement('a');
        var originURL = undefined;
        /**
         * @desc 解析url
         *
         */
        function resolveURL(url) {
            var href = url;
            if (msie) {
                // IE需要设置两次属性来规范化属性
                urlParsingNode.setAttribute('href', href);
                href = urlParsingNode.href;
            }
            urlParsingNode.setAttribute('href', href);
            // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
            return {
                href: urlParsingNode.href,
                protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
                host: urlParsingNode.host,
                search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
                hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
                hostname: urlParsingNode.hostname,
                port: urlParsingNode.port,
                pathname: (urlParsingNode.pathname.charAt(0) === '/') ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
            };
        }
        originURL = resolveURL(window.location.href);
        /**
         * @desc 确定URL是否与当前位置共享同一源
         * @param {string} requestURL
         * @returns {boolean}
         *
         */
        return function isURLSameOrigin(requestURL) {
            var parsed = (util_1.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
            return (parsed.protocol === originURL.protocol && parsed.host === originURL.host);
        };
    })() :
    (function nonStandardBrowserEnv() {
        return function isURLSameOrigin() {
            return true;
        };
    }));


/***/ }),

/***/ "./src/headers/normalizeHeaderName.ts":
/*!********************************************!*\
  !*** ./src/headers/normalizeHeaderName.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***********************
 * @name TS FILE
 * @author Jo.gel
 * @date 2019/8/19 0019 上午 11:31
 ***********************/
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
function normalizeHeaderName(headers, normalizedName) {
    utils_1.forEach(headers, function processHeader(value, name) {
        if (name !== normalizedName && name.toLowerCase() === normalizedName.toUpperCase()) {
            headers[normalizedName] = value;
            delete headers[name];
        }
    });
}
exports.default = normalizeHeaderName;


/***/ }),

/***/ "./src/headers/parseHeaders.ts":
/*!*************************************!*\
  !*** ./src/headers/parseHeaders.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
// node忽略其重复项的头
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
    'age', 'authorization', 'content-length', 'content-type', 'etag',
    'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
    'last-modified', 'location', 'max-forwards', 'proxy-authorization',
    'referer', 'retry-after', 'user-agent'
];
/**
 *  Parse headers into an object
 * ```js
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 * @param {string} headers 需要解析的Headers
 * @returns {object} 把Header解析为对象
 */
exports.default = (function (headers) {
    var parsed = {};
    var key = undefined;
    var val = undefined;
    var i = undefined;
    if (!headers)
        return parsed;
    utils_1.forEach(headers.split('\n'), function parser(line) {
        i = line.indexOf(':');
        key = utils_1.trim(line.substr(0, i)).toLowerCase();
        val = utils_1.trim(line.substr(i + 1));
        if (key) {
            if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0)
                return;
            if (key) {
                if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0)
                    return;
                if (key === 'set-cookie') {
                    parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
                }
                else {
                    parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
                }
            }
        }
    });
    return parsed;
});


/***/ }),

/***/ "./src/headers/spread.ts":
/*!*******************************!*\
  !*** ./src/headers/spread.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @desc 用于调用函数和扩展参数数组的语法结构。
 * 常见的用例 `Function.prototype.apply`
 *
 * ```js
 * function f(x,y,z){}
 * const args=[1,2,3]
 * f.apply(null,args)
 *
 * ```
 * 使用`spread` 重写此例
 *
 * ```js
 * spread(function(x,y,z){})([1,2,3])
 * ```
 * @param {Function} callback
 * @return {Function}
 *
 * */
function spread(callback) {
    return function warp(arr) {
        return callback.apply(null, arr);
    };
}
exports.default = spread;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/***********************
 * @author Jo.gel
 * @date 2019/8/29 0029
 ***********************/
var axios_1 = __importDefault(__webpack_require__(/*! ./axios */ "./src/axios.ts"));
exports.default = axios_1.default;


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *@desc axios 工具类函数
 *
 */
var is_buffer_1 = __importDefault(__webpack_require__(/*! is-buffer */ "./node_modules/_is-buffer@2.0.3@is-buffer/index.js"));
exports.isBuffer = is_buffer_1.default;
/**
 * @desc 判断值是否是数组
 * @param {Object} val
 * @returns {boolean} 是数组,true，否则false
 */
function isArray(val) {
    return toString.call(val) === '[object Array]';
}
exports.isArray = isArray;
/**
 * @desc 判断是否是ArrayBuffer
 * @param val
 * @returns 是 则true，否则false
 */
function isArrayBuffer(val) {
    return toString.call(val) === '[object ArrayBuffer]';
}
exports.isArrayBuffer = isArrayBuffer;
/**
 * @desc 判断是否formData
 */
function isFormData(val) {
    return (typeof FormData !== 'undefined') && (val instanceof FormData);
}
exports.isFormData = isFormData;
/**
 * @desc 判断val是否是ArrayBuffer的视图
 * @param {Object} val
 * @returns {boolean}
 */
function isArrayBufferView(val) {
    var result;
    if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
        result = ArrayBuffer.isView(val);
    }
    else {
        result = val && val.buffer && (val.buffer instanceof ArrayBuffer);
    }
    return result;
}
exports.isArrayBufferView = isArrayBufferView;
/**
 * @desc 判断字符串
 * @param {string} val
 * @returns {boolean}
 *
 */
function isString(val) {
    return typeof val === 'string';
}
exports.isString = isString;
/**
 * @desc 判断是数字类型
 * @returns {boolean}
 */
function isNumber(val) {
    return typeof val === 'number';
}
exports.isNumber = isNumber;
/**
 * @desc 判断是undefined类型
 * @returns {boolean}
 */
function isUndefined(val) {
    return typeof val === 'undefined';
}
exports.isUndefined = isUndefined;
/**
 * @desc 判断是否是object
 *
 */
function isObject(val) {
    return val !== null && typeof val === 'object';
}
exports.isObject = isObject;
/**
 * @desc 判断是Date类型
 * @returns {boolean}
 */
function isDate(val) {
    return toString.call(val) === '[object Date]';
}
exports.isDate = isDate;
/**
 * @desc 判断是file 类型
 * @returns {boolean}
 */
function isFile(val) {
    return toString.call(val) === '[object File]';
}
exports.isFile = isFile;
/**
 * @desc 判断是blob类型
 * @returns {boolean}
 */
function isBlob(val) {
    return toString.call(val) === '[object Blob]';
}
exports.isBlob = isBlob;
/**
 * @desc 判断是function
 * @returns {boolean}
 */
function isFunction(val) {
    return toString.call(val) === '[object Function]';
}
exports.isFunction = isFunction;
/**
 * @desc 判断stream
 */
function isStream(val) {
    return isObject(val) && isFunction(val.pipe);
}
exports.isStream = isStream;
/**
 * @desc 判断是URL Search Params
 *
 */
function isURLSearchParams(val) {
    return (typeof URLSearchParams !== 'undefined') && (val instanceof URLSearchParams);
}
exports.isURLSearchParams = isURLSearchParams;
/**
 * @desc 删除开始到结束的多余空白
 */
function trim(str) {
    return (str || '').replace(/^\s*/, '').replace(/\s*$/, '');
}
exports.trim = trim;
/**
 * @desc 检查是否允许在标准的浏览器上
 */
function isStandardBrowserEnv() {
    if ((typeof navigator !== 'undefined') && (navigator.product === 'ReactNative' || navigator.product === 'NativeScript' || navigator.product === 'NS')) {
        return false;
    }
    return (typeof window !== 'undefined' && typeof document !== 'undefined');
}
exports.isStandardBrowserEnv = isStandardBrowserEnv;
/**
 * @desc 迭代为每个项调用函数的数组或对象。
 * 如果“obj”是一个数组，则调用数组回调，传递每个项的值、索引和完整数组。
 * 如果“obj”是一个对象，则将调用回调来传递每个属性的值、键和完整对象。
 *
 * @param obj 要迭代的对象
 * @param fn 为每个项调用的回调
 *
 */
function forEach(obj, fn) {
    if (obj === null || typeof obj === 'undefined') {
        return;
    }
    // 强制转换数组，如果不是数组的话
    if (typeof obj !== 'object') {
        obj = [obj];
    }
    if (isArray(obj)) {
        // 迭代数组
        for (var i = 0, l = obj.length; i < l; i++) {
            fn.call(null, obj[i], i, obj);
        }
    }
    else {
        // 迭代对象key
        for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                fn.call(null, obj[key], key, obj);
            }
        }
    }
}
exports.forEach = forEach;


/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19kZWJ1Z0AzLjIuNkBkZWJ1Zy9zcmMvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2RlYnVnQDMuMi42QGRlYnVnL3NyYy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19kZWJ1Z0AzLjIuNkBkZWJ1Zy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19kZWJ1Z0AzLjIuNkBkZWJ1Zy9zcmMvbm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2ZvbGxvdy1yZWRpcmVjdHNAMS43LjBAZm9sbG93LXJlZGlyZWN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2lzLWJ1ZmZlckAyLjAuM0Bpcy1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19tc0AyLjEuMkBtcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlcnMvaHR0cC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlcnMveGhyLnRzIiwid2VicGFjazovLy8uL3NyYy9heGlvcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FuY2VsL0NhbmNlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FuY2VsL0NhbmNlbFRva2VuLnRzIiwid2VicGFjazovLy8uL3NyYy9jYW5jZWwvaXNDYW5jZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvQXhpb3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2NyZWF0ZUVycm9yLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2Rpc3BhdGNoUmVxdWVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9lbmhhbmNlRXJyb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvbWVyZ2VDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvc2V0dGxlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3RyYW5zZm9ybURhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlZmF1bHRzLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWFkZXJzL2J1aWxkVVJMLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWFkZXJzL2NvbWJpbmVVUkxzLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWFkZXJzL2Nvb2tpZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlYWRlcnMvaXNBYnNvbHV0ZVVSTC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVhZGVycy9pc1VSTFNhbWVPcmlnaW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlYWRlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVhZGVycy9wYXJzZUhlYWRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlYWRlcnMvc3ByZWFkLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXNzZXJ0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaHR0cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3RyZWFtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidHR5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXRpbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInpsaWJcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FB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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVDQUF1QyxFQUFFO0FBQy9ELEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QiwyQkFBMkI7QUFDbEQ7Ozs7Ozs7Ozs7OztBQ2piQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGNBQWM7QUFDekIsV0FBVyxPQUFPO0FBQ2xCLFlBQVksTUFBTTtBQUNsQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqS2E7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLG1CQUFPLENBQUMsZ0NBQVU7QUFDaEMsNEJBQTRCLG1CQUFPLENBQUMsZ0JBQUs7QUFDekMsNkJBQTZCLG1CQUFPLENBQUMsa0JBQU07QUFDM0MsOEJBQThCLG1CQUFPLENBQUMsb0JBQU87QUFDN0MsNkJBQTZCLG1CQUFPLENBQUMsa0JBQU07QUFDM0MsaUNBQWlDLG1CQUFPLENBQUMsc0RBQXFCO0FBQzlELG9DQUFvQyxtQkFBTyxDQUFDLHNEQUFxQjtBQUNqRSxxQ0FBcUMsbUJBQU8sQ0FBQyx3REFBc0I7QUFDbkUsK0JBQStCLG1CQUFPLENBQUMsNENBQWdCO0FBQ3ZELHlDQUF5QyxtQkFBTyxDQUFDLDBGQUFrQjtBQUNuRTtBQUNBO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLDBDQUFvQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNkUsb0JBQW9CLEVBQUU7QUFDbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxZQUFZO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNVBhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLGdDQUFVO0FBQ2hDLCtCQUErQixtQkFBTyxDQUFDLDRDQUFnQjtBQUN2RCxpQ0FBaUMsbUJBQU8sQ0FBQyxzREFBcUI7QUFDOUQscUNBQXFDLG1CQUFPLENBQUMsOERBQXlCO0FBQ3RFLHdDQUF3QyxtQkFBTyxDQUFDLG9FQUE0QjtBQUM1RSxvQ0FBb0MsbUJBQU8sQ0FBQyxzREFBcUI7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0lBQXNJO0FBQ3RJLGdJQUFnSTtBQUNoSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1CQUFPLENBQUMsb0RBQW9CLEVBQUU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwSmE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELE9BQU87QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCw4QkFBOEIsbUJBQU8sQ0FBQyx5Q0FBYztBQUNwRCxpQ0FBaUMsbUJBQU8sQ0FBQyxxQ0FBWTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLHNDQUFzQztBQUNoRjtBQUNBO0FBQ0EsNEJBQTRCLDRDQUE0QyxxQkFBcUIsbUJBQU8sQ0FBQywrQ0FBaUIsR0FBRyxFQUFFLEVBQUU7QUFDN0gsaUNBQWlDLDRDQUE0QyxxQkFBcUIsbUJBQU8sQ0FBQyx5REFBc0IsR0FBRyxFQUFFLEVBQUU7QUFDdkksOEJBQThCLDRDQUE0QyxxQkFBcUIsbUJBQU8sQ0FBQyxtREFBbUIsR0FBRyxFQUFFLEVBQUU7QUFDakk7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNENBQTRDLHFCQUFxQixtQkFBTyxDQUFDLGlEQUFrQixHQUFHLEVBQUUsRUFBRTtBQUM5SCx1QkFBdUI7QUFDdkIsMkJBQTJCLFFBQVEsY0FBYyxFQUFFO0FBQ25EO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQzdEYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ2pCYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsK0JBQStCLG1CQUFPLENBQUMsd0NBQVU7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDNUJhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1RhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxPQUFPO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELDJDQUEyQyxtQkFBTyxDQUFDLDhEQUFzQjtBQUN6RSxvQ0FBb0MsbUJBQU8sQ0FBQyxnREFBZTtBQUMzRCxpQ0FBaUMsbUJBQU8sQ0FBQyxzREFBcUI7QUFDOUQsd0NBQXdDLG1CQUFPLENBQUMsd0RBQW1CO0FBQ25FLFVBQVUsbUJBQU8sQ0FBQywwQ0FBb0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFdBQVcsNkJBQTZCO0FBQy9FO0FBQ0E7QUFDQSx1Q0FBdUMsV0FBVywwQkFBMEI7QUFDNUU7QUFDQTtBQUNBLHVDQUF1QyxXQUFXLDJCQUEyQjtBQUM3RTtBQUNBO0FBQ0EsdUNBQXVDLFdBQVcsOEJBQThCO0FBQ2hGO0FBQ0E7QUFDQSx1Q0FBdUMsV0FBVyx1Q0FBdUM7QUFDekY7QUFDQTtBQUNBLHVDQUF1QyxXQUFXLHNDQUFzQztBQUN4RjtBQUNBO0FBQ0EsdUNBQXVDLFdBQVcsd0NBQXdDO0FBQzFGO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNqR2E7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLGdDQUFVO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDMUNhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELHFDQUFxQyxtQkFBTyxDQUFDLGtEQUFnQjtBQUM3RDtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdkJhO0FBQ2I7QUFDQTtBQUNBLGdEQUFnRCxPQUFPO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELHNDQUFzQyxtQkFBTyxDQUFDLG9EQUFpQjtBQUMvRCxpQ0FBaUMsbUJBQU8sQ0FBQyxvREFBb0I7QUFDN0Qsc0NBQXNDLG1CQUFPLENBQUMsZ0VBQTBCO0FBQ3hFLG9DQUFvQyxtQkFBTyxDQUFDLDREQUF3QjtBQUNwRSxjQUFjLG1CQUFPLENBQUMsZ0NBQVU7QUFDaEMsaUNBQWlDLG1CQUFPLENBQUMsc0NBQWE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyw2QkFBNkIscUNBQXFDLHNCQUFzQjtBQUN4SDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7OztBQzVFYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xDYTtBQUNiO0FBQ0E7QUFDQSxnREFBZ0QsT0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyxnQ0FBVTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGNBQWM7QUFDM0MsNkJBQTZCLGNBQWM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMvRGE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELG9DQUFvQyxtQkFBTyxDQUFDLGdEQUFlO0FBQzNEO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0QmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyxnQ0FBVTtBQUNoQztBQUNBO0FBQ0EsZ0JBQWdCLGNBQWM7QUFDOUIsbUJBQW1CLE1BQU07QUFDekIsZUFBZSxlQUFlO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcEJhO0FBQ2I7QUFDQTtBQUNBLGdEQUFnRCxPQUFPO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsY0FBYyxtQkFBTyxDQUFDLCtCQUFTO0FBQy9CLDRDQUE0QyxtQkFBTyxDQUFDLDJFQUErQjtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsNENBQTRDLHFCQUFxQixtQkFBTyxDQUFDLCtDQUFpQixHQUFHLEVBQUUsRUFBRTtBQUNoSTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiw0Q0FBNEMscUJBQXFCLG1CQUFPLENBQUMsNkNBQWdCLEdBQUcsRUFBRSxFQUFFO0FBQy9IO0FBQ0E7QUFDQSwrQkFBK0IsNENBQTRDLHFCQUFxQixtQkFBTyxDQUFDLCtDQUFpQixHQUFHLEVBQUUsRUFBRTtBQUNoSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtGQUFrRjtBQUNsRjtBQUNBO0FBQ0E7QUFDQSxpRUFBaUU7QUFDakU7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwwQ0FBMEM7QUFDMUMsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDdEhhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsY0FBYyxtQkFBTyxDQUFDLGdDQUFVO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0RhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2RZO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsY0FBYyxtQkFBTyxDQUFDLGdDQUFVO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQsYUFBYTtBQUNiO0FBQ0Esa0VBQWtFLHdCQUF3QjtBQUMxRjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsRUFBRTtBQUN2QyxtQ0FBbUMsYUFBYSxFQUFFO0FBQ2xELHVDQUF1QyxFQUFFO0FBQ3pDO0FBQ0EsS0FBSzs7Ozs7Ozs7Ozs7OztBQ3hDUTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYTtBQUNiO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNaWTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGNBQWMsbUJBQU8sQ0FBQyxnQ0FBVTtBQUNoQyxhQUFhLG1CQUFPLENBQUMsa0JBQU07QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7Ozs7Ozs7Ozs7OztBQ25EUTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxjQUFjLG1CQUFPLENBQUMsZ0NBQVU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoQmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxjQUFjLG1CQUFPLENBQUMsZ0NBQVU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDakRZO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBLFdBQVcsU0FBUztBQUNwQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzNCYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsbUJBQU8sQ0FBQywrQkFBUztBQUMvQzs7Ozs7Ozs7Ozs7OztBQ1ZhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFFQUFXO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxPQUFPO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN0TEEsbUM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsZ0M7Ozs7Ozs7Ozs7O0FDQUEsZ0M7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoiYXhpb3MtdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuLyoqXG4gKiBUaGlzIGlzIHRoZSB3ZWIgYnJvd3NlciBpbXBsZW1lbnRhdGlvbiBvZiBgZGVidWcoKWAuXG4gKi9cbmV4cG9ydHMubG9nID0gbG9nO1xuZXhwb3J0cy5mb3JtYXRBcmdzID0gZm9ybWF0QXJncztcbmV4cG9ydHMuc2F2ZSA9IHNhdmU7XG5leHBvcnRzLmxvYWQgPSBsb2FkO1xuZXhwb3J0cy51c2VDb2xvcnMgPSB1c2VDb2xvcnM7XG5leHBvcnRzLnN0b3JhZ2UgPSBsb2NhbHN0b3JhZ2UoKTtcbi8qKlxuICogQ29sb3JzLlxuICovXG5cbmV4cG9ydHMuY29sb3JzID0gWycjMDAwMENDJywgJyMwMDAwRkYnLCAnIzAwMzNDQycsICcjMDAzM0ZGJywgJyMwMDY2Q0MnLCAnIzAwNjZGRicsICcjMDA5OUNDJywgJyMwMDk5RkYnLCAnIzAwQ0MwMCcsICcjMDBDQzMzJywgJyMwMENDNjYnLCAnIzAwQ0M5OScsICcjMDBDQ0NDJywgJyMwMENDRkYnLCAnIzMzMDBDQycsICcjMzMwMEZGJywgJyMzMzMzQ0MnLCAnIzMzMzNGRicsICcjMzM2NkNDJywgJyMzMzY2RkYnLCAnIzMzOTlDQycsICcjMzM5OUZGJywgJyMzM0NDMDAnLCAnIzMzQ0MzMycsICcjMzNDQzY2JywgJyMzM0NDOTknLCAnIzMzQ0NDQycsICcjMzNDQ0ZGJywgJyM2NjAwQ0MnLCAnIzY2MDBGRicsICcjNjYzM0NDJywgJyM2NjMzRkYnLCAnIzY2Q0MwMCcsICcjNjZDQzMzJywgJyM5OTAwQ0MnLCAnIzk5MDBGRicsICcjOTkzM0NDJywgJyM5OTMzRkYnLCAnIzk5Q0MwMCcsICcjOTlDQzMzJywgJyNDQzAwMDAnLCAnI0NDMDAzMycsICcjQ0MwMDY2JywgJyNDQzAwOTknLCAnI0NDMDBDQycsICcjQ0MwMEZGJywgJyNDQzMzMDAnLCAnI0NDMzMzMycsICcjQ0MzMzY2JywgJyNDQzMzOTknLCAnI0NDMzNDQycsICcjQ0MzM0ZGJywgJyNDQzY2MDAnLCAnI0NDNjYzMycsICcjQ0M5OTAwJywgJyNDQzk5MzMnLCAnI0NDQ0MwMCcsICcjQ0NDQzMzJywgJyNGRjAwMDAnLCAnI0ZGMDAzMycsICcjRkYwMDY2JywgJyNGRjAwOTknLCAnI0ZGMDBDQycsICcjRkYwMEZGJywgJyNGRjMzMDAnLCAnI0ZGMzMzMycsICcjRkYzMzY2JywgJyNGRjMzOTknLCAnI0ZGMzNDQycsICcjRkYzM0ZGJywgJyNGRjY2MDAnLCAnI0ZGNjYzMycsICcjRkY5OTAwJywgJyNGRjk5MzMnLCAnI0ZGQ0MwMCcsICcjRkZDQzMzJ107XG4vKipcbiAqIEN1cnJlbnRseSBvbmx5IFdlYktpdC1iYXNlZCBXZWIgSW5zcGVjdG9ycywgRmlyZWZveCA+PSB2MzEsXG4gKiBhbmQgdGhlIEZpcmVidWcgZXh0ZW5zaW9uIChhbnkgRmlyZWZveCB2ZXJzaW9uKSBhcmUga25vd25cbiAqIHRvIHN1cHBvcnQgXCIlY1wiIENTUyBjdXN0b21pemF0aW9ucy5cbiAqXG4gKiBUT0RPOiBhZGQgYSBgbG9jYWxTdG9yYWdlYCB2YXJpYWJsZSB0byBleHBsaWNpdGx5IGVuYWJsZS9kaXNhYmxlIGNvbG9yc1xuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuXG5mdW5jdGlvbiB1c2VDb2xvcnMoKSB7XG4gIC8vIE5COiBJbiBhbiBFbGVjdHJvbiBwcmVsb2FkIHNjcmlwdCwgZG9jdW1lbnQgd2lsbCBiZSBkZWZpbmVkIGJ1dCBub3QgZnVsbHlcbiAgLy8gaW5pdGlhbGl6ZWQuIFNpbmNlIHdlIGtub3cgd2UncmUgaW4gQ2hyb21lLCB3ZSdsbCBqdXN0IGRldGVjdCB0aGlzIGNhc2VcbiAgLy8gZXhwbGljaXRseVxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnByb2Nlc3MgJiYgKHdpbmRvdy5wcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicgfHwgd2luZG93LnByb2Nlc3MuX19ud2pzKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIEludGVybmV0IEV4cGxvcmVyIGFuZCBFZGdlIGRvIG5vdCBzdXBwb3J0IGNvbG9ycy5cblxuXG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvKGVkZ2V8dHJpZGVudClcXC8oXFxkKykvKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSAvLyBJcyB3ZWJraXQ/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE2NDU5NjA2LzM3Njc3M1xuICAvLyBkb2N1bWVudCBpcyB1bmRlZmluZWQgaW4gcmVhY3QtbmF0aXZlOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QtbmF0aXZlL3B1bGwvMTYzMlxuXG5cbiAgcmV0dXJuIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuV2Via2l0QXBwZWFyYW5jZSB8fCAvLyBJcyBmaXJlYnVnPyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zOTgxMjAvMzc2NzczXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5jb25zb2xlICYmICh3aW5kb3cuY29uc29sZS5maXJlYnVnIHx8IHdpbmRvdy5jb25zb2xlLmV4Y2VwdGlvbiAmJiB3aW5kb3cuY29uc29sZS50YWJsZSkgfHwgLy8gSXMgZmlyZWZveCA+PSB2MzE/XG4gIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvVG9vbHMvV2ViX0NvbnNvbGUjU3R5bGluZ19tZXNzYWdlc1xuICB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvZmlyZWZveFxcLyhcXGQrKS8pICYmIHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApID49IDMxIHx8IC8vIERvdWJsZSBjaGVjayB3ZWJraXQgaW4gdXNlckFnZW50IGp1c3QgaW4gY2FzZSB3ZSBhcmUgaW4gYSB3b3JrZXJcbiAgdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2FwcGxld2Via2l0XFwvKFxcZCspLyk7XG59XG4vKipcbiAqIENvbG9yaXplIGxvZyBhcmd1bWVudHMgaWYgZW5hYmxlZC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblxuZnVuY3Rpb24gZm9ybWF0QXJncyhhcmdzKSB7XG4gIGFyZ3NbMF0gPSAodGhpcy51c2VDb2xvcnMgPyAnJWMnIDogJycpICsgdGhpcy5uYW1lc3BhY2UgKyAodGhpcy51c2VDb2xvcnMgPyAnICVjJyA6ICcgJykgKyBhcmdzWzBdICsgKHRoaXMudXNlQ29sb3JzID8gJyVjICcgOiAnICcpICsgJysnICsgbW9kdWxlLmV4cG9ydHMuaHVtYW5pemUodGhpcy5kaWZmKTtcblxuICBpZiAoIXRoaXMudXNlQ29sb3JzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGMgPSAnY29sb3I6ICcgKyB0aGlzLmNvbG9yO1xuICBhcmdzLnNwbGljZSgxLCAwLCBjLCAnY29sb3I6IGluaGVyaXQnKTsgLy8gVGhlIGZpbmFsIFwiJWNcIiBpcyBzb21ld2hhdCB0cmlja3ksIGJlY2F1c2UgdGhlcmUgY291bGQgYmUgb3RoZXJcbiAgLy8gYXJndW1lbnRzIHBhc3NlZCBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIHRoZSAlYywgc28gd2UgbmVlZCB0b1xuICAvLyBmaWd1cmUgb3V0IHRoZSBjb3JyZWN0IGluZGV4IHRvIGluc2VydCB0aGUgQ1NTIGludG9cblxuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGFzdEMgPSAwO1xuICBhcmdzWzBdLnJlcGxhY2UoLyVbYS16QS1aJV0vZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgaWYgKG1hdGNoID09PSAnJSUnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW5kZXgrKztcblxuICAgIGlmIChtYXRjaCA9PT0gJyVjJykge1xuICAgICAgLy8gV2Ugb25seSBhcmUgaW50ZXJlc3RlZCBpbiB0aGUgKmxhc3QqICVjXG4gICAgICAvLyAodGhlIHVzZXIgbWF5IGhhdmUgcHJvdmlkZWQgdGhlaXIgb3duKVxuICAgICAgbGFzdEMgPSBpbmRleDtcbiAgICB9XG4gIH0pO1xuICBhcmdzLnNwbGljZShsYXN0QywgMCwgYyk7XG59XG4vKipcbiAqIEludm9rZXMgYGNvbnNvbGUubG9nKClgIHdoZW4gYXZhaWxhYmxlLlxuICogTm8tb3Agd2hlbiBgY29uc29sZS5sb2dgIGlzIG5vdCBhIFwiZnVuY3Rpb25cIi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblxuZnVuY3Rpb24gbG9nKCkge1xuICB2YXIgX2NvbnNvbGU7XG5cbiAgLy8gVGhpcyBoYWNrZXJ5IGlzIHJlcXVpcmVkIGZvciBJRTgvOSwgd2hlcmVcbiAgLy8gdGhlIGBjb25zb2xlLmxvZ2AgZnVuY3Rpb24gZG9lc24ndCBoYXZlICdhcHBseSdcbiAgcmV0dXJuICh0eXBlb2YgY29uc29sZSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGNvbnNvbGUpKSA9PT0gJ29iamVjdCcgJiYgY29uc29sZS5sb2cgJiYgKF9jb25zb2xlID0gY29uc29sZSkubG9nLmFwcGx5KF9jb25zb2xlLCBhcmd1bWVudHMpO1xufVxuLyoqXG4gKiBTYXZlIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuXG5mdW5jdGlvbiBzYXZlKG5hbWVzcGFjZXMpIHtcbiAgdHJ5IHtcbiAgICBpZiAobmFtZXNwYWNlcykge1xuICAgICAgZXhwb3J0cy5zdG9yYWdlLnNldEl0ZW0oJ2RlYnVnJywgbmFtZXNwYWNlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4cG9ydHMuc3RvcmFnZS5yZW1vdmVJdGVtKCdkZWJ1ZycpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHsvLyBTd2FsbG93XG4gICAgLy8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG4gIH1cbn1cbi8qKlxuICogTG9hZCBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHJldHVybiB7U3RyaW5nfSByZXR1cm5zIHRoZSBwcmV2aW91c2x5IHBlcnNpc3RlZCBkZWJ1ZyBtb2Rlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuXG5mdW5jdGlvbiBsb2FkKCkge1xuICB2YXIgcjtcblxuICB0cnkge1xuICAgIHIgPSBleHBvcnRzLnN0b3JhZ2UuZ2V0SXRlbSgnZGVidWcnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHt9IC8vIFN3YWxsb3dcbiAgLy8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG4gIC8vIElmIGRlYnVnIGlzbid0IHNldCBpbiBMUywgYW5kIHdlJ3JlIGluIEVsZWN0cm9uLCB0cnkgdG8gbG9hZCAkREVCVUdcblxuXG4gIGlmICghciAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2VudicgaW4gcHJvY2Vzcykge1xuICAgIHIgPSBwcm9jZXNzLmVudi5ERUJVRztcbiAgfVxuXG4gIHJldHVybiByO1xufVxuLyoqXG4gKiBMb2NhbHN0b3JhZ2UgYXR0ZW1wdHMgdG8gcmV0dXJuIHRoZSBsb2NhbHN0b3JhZ2UuXG4gKlxuICogVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBzYWZhcmkgdGhyb3dzXG4gKiB3aGVuIGEgdXNlciBkaXNhYmxlcyBjb29raWVzL2xvY2Fsc3RvcmFnZVxuICogYW5kIHlvdSBhdHRlbXB0IHRvIGFjY2VzcyBpdC5cbiAqXG4gKiBAcmV0dXJuIHtMb2NhbFN0b3JhZ2V9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5cbmZ1bmN0aW9uIGxvY2Fsc3RvcmFnZSgpIHtcbiAgdHJ5IHtcbiAgICAvLyBUVk1MS2l0IChBcHBsZSBUViBKUyBSdW50aW1lKSBkb2VzIG5vdCBoYXZlIGEgd2luZG93IG9iamVjdCwganVzdCBsb2NhbFN0b3JhZ2UgaW4gdGhlIGdsb2JhbCBjb250ZXh0XG4gICAgLy8gVGhlIEJyb3dzZXIgYWxzbyBoYXMgbG9jYWxTdG9yYWdlIGluIHRoZSBnbG9iYWwgY29udGV4dC5cbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlO1xuICB9IGNhdGNoIChlcnJvcikgey8vIFN3YWxsb3dcbiAgICAvLyBYWFggKEBRaXgtKSBzaG91bGQgd2UgYmUgbG9nZ2luZyB0aGVzZT9cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY29tbW9uJykoZXhwb3J0cyk7XG52YXIgZm9ybWF0dGVycyA9IG1vZHVsZS5leHBvcnRzLmZvcm1hdHRlcnM7XG4vKipcbiAqIE1hcCAlaiB0byBgSlNPTi5zdHJpbmdpZnkoKWAsIHNpbmNlIG5vIFdlYiBJbnNwZWN0b3JzIGRvIHRoYXQgYnkgZGVmYXVsdC5cbiAqL1xuXG5mb3JtYXR0ZXJzLmogPSBmdW5jdGlvbiAodikge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gJ1tVbmV4cGVjdGVkSlNPTlBhcnNlRXJyb3JdOiAnICsgZXJyb3IubWVzc2FnZTtcbiAgfVxufTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogVGhpcyBpcyB0aGUgY29tbW9uIGxvZ2ljIGZvciBib3RoIHRoZSBOb2RlLmpzIGFuZCB3ZWIgYnJvd3NlclxuICogaW1wbGVtZW50YXRpb25zIG9mIGBkZWJ1ZygpYC5cbiAqL1xuZnVuY3Rpb24gc2V0dXAoZW52KSB7XG4gIGNyZWF0ZURlYnVnLmRlYnVnID0gY3JlYXRlRGVidWc7XG4gIGNyZWF0ZURlYnVnLmRlZmF1bHQgPSBjcmVhdGVEZWJ1ZztcbiAgY3JlYXRlRGVidWcuY29lcmNlID0gY29lcmNlO1xuICBjcmVhdGVEZWJ1Zy5kaXNhYmxlID0gZGlzYWJsZTtcbiAgY3JlYXRlRGVidWcuZW5hYmxlID0gZW5hYmxlO1xuICBjcmVhdGVEZWJ1Zy5lbmFibGVkID0gZW5hYmxlZDtcbiAgY3JlYXRlRGVidWcuaHVtYW5pemUgPSByZXF1aXJlKCdtcycpO1xuICBPYmplY3Qua2V5cyhlbnYpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGNyZWF0ZURlYnVnW2tleV0gPSBlbnZba2V5XTtcbiAgfSk7XG4gIC8qKlxuICAqIEFjdGl2ZSBgZGVidWdgIGluc3RhbmNlcy5cbiAgKi9cblxuICBjcmVhdGVEZWJ1Zy5pbnN0YW5jZXMgPSBbXTtcbiAgLyoqXG4gICogVGhlIGN1cnJlbnRseSBhY3RpdmUgZGVidWcgbW9kZSBuYW1lcywgYW5kIG5hbWVzIHRvIHNraXAuXG4gICovXG5cbiAgY3JlYXRlRGVidWcubmFtZXMgPSBbXTtcbiAgY3JlYXRlRGVidWcuc2tpcHMgPSBbXTtcbiAgLyoqXG4gICogTWFwIG9mIHNwZWNpYWwgXCIlblwiIGhhbmRsaW5nIGZ1bmN0aW9ucywgZm9yIHRoZSBkZWJ1ZyBcImZvcm1hdFwiIGFyZ3VtZW50LlxuICAqXG4gICogVmFsaWQga2V5IG5hbWVzIGFyZSBhIHNpbmdsZSwgbG93ZXIgb3IgdXBwZXItY2FzZSBsZXR0ZXIsIGkuZS4gXCJuXCIgYW5kIFwiTlwiLlxuICAqL1xuXG4gIGNyZWF0ZURlYnVnLmZvcm1hdHRlcnMgPSB7fTtcbiAgLyoqXG4gICogU2VsZWN0cyBhIGNvbG9yIGZvciBhIGRlYnVnIG5hbWVzcGFjZVxuICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2UgVGhlIG5hbWVzcGFjZSBzdHJpbmcgZm9yIHRoZSBmb3IgdGhlIGRlYnVnIGluc3RhbmNlIHRvIGJlIGNvbG9yZWRcbiAgKiBAcmV0dXJuIHtOdW1iZXJ8U3RyaW5nfSBBbiBBTlNJIGNvbG9yIGNvZGUgZm9yIHRoZSBnaXZlbiBuYW1lc3BhY2VcbiAgKiBAYXBpIHByaXZhdGVcbiAgKi9cblxuICBmdW5jdGlvbiBzZWxlY3RDb2xvcihuYW1lc3BhY2UpIHtcbiAgICB2YXIgaGFzaCA9IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5hbWVzcGFjZS5sZW5ndGg7IGkrKykge1xuICAgICAgaGFzaCA9IChoYXNoIDw8IDUpIC0gaGFzaCArIG5hbWVzcGFjZS5jaGFyQ29kZUF0KGkpO1xuICAgICAgaGFzaCB8PSAwOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlRGVidWcuY29sb3JzW01hdGguYWJzKGhhc2gpICUgY3JlYXRlRGVidWcuY29sb3JzLmxlbmd0aF07XG4gIH1cblxuICBjcmVhdGVEZWJ1Zy5zZWxlY3RDb2xvciA9IHNlbGVjdENvbG9yO1xuICAvKipcbiAgKiBDcmVhdGUgYSBkZWJ1Z2dlciB3aXRoIHRoZSBnaXZlbiBgbmFtZXNwYWNlYC5cbiAgKlxuICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VcbiAgKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAgKiBAYXBpIHB1YmxpY1xuICAqL1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZURlYnVnKG5hbWVzcGFjZSkge1xuICAgIHZhciBwcmV2VGltZTtcblxuICAgIGZ1bmN0aW9uIGRlYnVnKCkge1xuICAgICAgLy8gRGlzYWJsZWQ/XG4gICAgICBpZiAoIWRlYnVnLmVuYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgdmFyIHNlbGYgPSBkZWJ1ZzsgLy8gU2V0IGBkaWZmYCB0aW1lc3RhbXBcblxuICAgICAgdmFyIGN1cnIgPSBOdW1iZXIobmV3IERhdGUoKSk7XG4gICAgICB2YXIgbXMgPSBjdXJyIC0gKHByZXZUaW1lIHx8IGN1cnIpO1xuICAgICAgc2VsZi5kaWZmID0gbXM7XG4gICAgICBzZWxmLnByZXYgPSBwcmV2VGltZTtcbiAgICAgIHNlbGYuY3VyciA9IGN1cnI7XG4gICAgICBwcmV2VGltZSA9IGN1cnI7XG4gICAgICBhcmdzWzBdID0gY3JlYXRlRGVidWcuY29lcmNlKGFyZ3NbMF0pO1xuXG4gICAgICBpZiAodHlwZW9mIGFyZ3NbMF0gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIC8vIEFueXRoaW5nIGVsc2UgbGV0J3MgaW5zcGVjdCB3aXRoICVPXG4gICAgICAgIGFyZ3MudW5zaGlmdCgnJU8nKTtcbiAgICAgIH0gLy8gQXBwbHkgYW55IGBmb3JtYXR0ZXJzYCB0cmFuc2Zvcm1hdGlvbnNcblxuXG4gICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgYXJnc1swXSA9IGFyZ3NbMF0ucmVwbGFjZSgvJShbYS16QS1aJV0pL2csIGZ1bmN0aW9uIChtYXRjaCwgZm9ybWF0KSB7XG4gICAgICAgIC8vIElmIHdlIGVuY291bnRlciBhbiBlc2NhcGVkICUgdGhlbiBkb24ndCBpbmNyZWFzZSB0aGUgYXJyYXkgaW5kZXhcbiAgICAgICAgaWYgKG1hdGNoID09PSAnJSUnKSB7XG4gICAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5kZXgrKztcbiAgICAgICAgdmFyIGZvcm1hdHRlciA9IGNyZWF0ZURlYnVnLmZvcm1hdHRlcnNbZm9ybWF0XTtcblxuICAgICAgICBpZiAodHlwZW9mIGZvcm1hdHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHZhciB2YWwgPSBhcmdzW2luZGV4XTtcbiAgICAgICAgICBtYXRjaCA9IGZvcm1hdHRlci5jYWxsKHNlbGYsIHZhbCk7IC8vIE5vdyB3ZSBuZWVkIHRvIHJlbW92ZSBgYXJnc1tpbmRleF1gIHNpbmNlIGl0J3MgaW5saW5lZCBpbiB0aGUgYGZvcm1hdGBcblxuICAgICAgICAgIGFyZ3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICBpbmRleC0tO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgfSk7IC8vIEFwcGx5IGVudi1zcGVjaWZpYyBmb3JtYXR0aW5nIChjb2xvcnMsIGV0Yy4pXG5cbiAgICAgIGNyZWF0ZURlYnVnLmZvcm1hdEFyZ3MuY2FsbChzZWxmLCBhcmdzKTtcbiAgICAgIHZhciBsb2dGbiA9IHNlbGYubG9nIHx8IGNyZWF0ZURlYnVnLmxvZztcbiAgICAgIGxvZ0ZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgIH1cblxuICAgIGRlYnVnLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcbiAgICBkZWJ1Zy5lbmFibGVkID0gY3JlYXRlRGVidWcuZW5hYmxlZChuYW1lc3BhY2UpO1xuICAgIGRlYnVnLnVzZUNvbG9ycyA9IGNyZWF0ZURlYnVnLnVzZUNvbG9ycygpO1xuICAgIGRlYnVnLmNvbG9yID0gc2VsZWN0Q29sb3IobmFtZXNwYWNlKTtcbiAgICBkZWJ1Zy5kZXN0cm95ID0gZGVzdHJveTtcbiAgICBkZWJ1Zy5leHRlbmQgPSBleHRlbmQ7IC8vIERlYnVnLmZvcm1hdEFyZ3MgPSBmb3JtYXRBcmdzO1xuICAgIC8vIGRlYnVnLnJhd0xvZyA9IHJhd0xvZztcbiAgICAvLyBlbnYtc3BlY2lmaWMgaW5pdGlhbGl6YXRpb24gbG9naWMgZm9yIGRlYnVnIGluc3RhbmNlc1xuXG4gICAgaWYgKHR5cGVvZiBjcmVhdGVEZWJ1Zy5pbml0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjcmVhdGVEZWJ1Zy5pbml0KGRlYnVnKTtcbiAgICB9XG5cbiAgICBjcmVhdGVEZWJ1Zy5pbnN0YW5jZXMucHVzaChkZWJ1Zyk7XG4gICAgcmV0dXJuIGRlYnVnO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICB2YXIgaW5kZXggPSBjcmVhdGVEZWJ1Zy5pbnN0YW5jZXMuaW5kZXhPZih0aGlzKTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIGNyZWF0ZURlYnVnLmluc3RhbmNlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gZXh0ZW5kKG5hbWVzcGFjZSwgZGVsaW1pdGVyKSB7XG4gICAgcmV0dXJuIGNyZWF0ZURlYnVnKHRoaXMubmFtZXNwYWNlICsgKHR5cGVvZiBkZWxpbWl0ZXIgPT09ICd1bmRlZmluZWQnID8gJzonIDogZGVsaW1pdGVyKSArIG5hbWVzcGFjZSk7XG4gIH1cbiAgLyoqXG4gICogRW5hYmxlcyBhIGRlYnVnIG1vZGUgYnkgbmFtZXNwYWNlcy4gVGhpcyBjYW4gaW5jbHVkZSBtb2Rlc1xuICAqIHNlcGFyYXRlZCBieSBhIGNvbG9uIGFuZCB3aWxkY2FyZHMuXG4gICpcbiAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICAqIEBhcGkgcHVibGljXG4gICovXG5cblxuICBmdW5jdGlvbiBlbmFibGUobmFtZXNwYWNlcykge1xuICAgIGNyZWF0ZURlYnVnLnNhdmUobmFtZXNwYWNlcyk7XG4gICAgY3JlYXRlRGVidWcubmFtZXMgPSBbXTtcbiAgICBjcmVhdGVEZWJ1Zy5za2lwcyA9IFtdO1xuICAgIHZhciBpO1xuICAgIHZhciBzcGxpdCA9ICh0eXBlb2YgbmFtZXNwYWNlcyA9PT0gJ3N0cmluZycgPyBuYW1lc3BhY2VzIDogJycpLnNwbGl0KC9bXFxzLF0rLyk7XG4gICAgdmFyIGxlbiA9IHNwbGl0Lmxlbmd0aDtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgaWYgKCFzcGxpdFtpXSkge1xuICAgICAgICAvLyBpZ25vcmUgZW1wdHkgc3RyaW5nc1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbmFtZXNwYWNlcyA9IHNwbGl0W2ldLnJlcGxhY2UoL1xcKi9nLCAnLio/Jyk7XG5cbiAgICAgIGlmIChuYW1lc3BhY2VzWzBdID09PSAnLScpIHtcbiAgICAgICAgY3JlYXRlRGVidWcuc2tpcHMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMuc3Vic3RyKDEpICsgJyQnKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjcmVhdGVEZWJ1Zy5uYW1lcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcyArICckJykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBjcmVhdGVEZWJ1Zy5pbnN0YW5jZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpbnN0YW5jZSA9IGNyZWF0ZURlYnVnLmluc3RhbmNlc1tpXTtcbiAgICAgIGluc3RhbmNlLmVuYWJsZWQgPSBjcmVhdGVEZWJ1Zy5lbmFibGVkKGluc3RhbmNlLm5hbWVzcGFjZSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAqIERpc2FibGUgZGVidWcgb3V0cHV0LlxuICAqXG4gICogQGFwaSBwdWJsaWNcbiAgKi9cblxuXG4gIGZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gICAgY3JlYXRlRGVidWcuZW5hYmxlKCcnKTtcbiAgfVxuICAvKipcbiAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIG1vZGUgbmFtZSBpcyBlbmFibGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gICpcbiAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICogQGFwaSBwdWJsaWNcbiAgKi9cblxuXG4gIGZ1bmN0aW9uIGVuYWJsZWQobmFtZSkge1xuICAgIGlmIChuYW1lW25hbWUubGVuZ3RoIC0gMV0gPT09ICcqJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdmFyIGk7XG4gICAgdmFyIGxlbjtcblxuICAgIGZvciAoaSA9IDAsIGxlbiA9IGNyZWF0ZURlYnVnLnNraXBzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBpZiAoY3JlYXRlRGVidWcuc2tpcHNbaV0udGVzdChuYW1lKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMCwgbGVuID0gY3JlYXRlRGVidWcubmFtZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGlmIChjcmVhdGVEZWJ1Zy5uYW1lc1tpXS50ZXN0KG5hbWUpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvKipcbiAgKiBDb2VyY2UgYHZhbGAuXG4gICpcbiAgKiBAcGFyYW0ge01peGVkfSB2YWxcbiAgKiBAcmV0dXJuIHtNaXhlZH1cbiAgKiBAYXBpIHByaXZhdGVcbiAgKi9cblxuXG4gIGZ1bmN0aW9uIGNvZXJjZSh2YWwpIHtcbiAgICBpZiAodmFsIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIHJldHVybiB2YWwuc3RhY2sgfHwgdmFsLm1lc3NhZ2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuXG4gIGNyZWF0ZURlYnVnLmVuYWJsZShjcmVhdGVEZWJ1Zy5sb2FkKCkpO1xuICByZXR1cm4gY3JlYXRlRGVidWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0dXA7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIERldGVjdCBFbGVjdHJvbiByZW5kZXJlciAvIG53anMgcHJvY2Vzcywgd2hpY2ggaXMgbm9kZSwgYnV0IHdlIHNob3VsZFxuICogdHJlYXQgYXMgYSBicm93c2VyLlxuICovXG5pZiAodHlwZW9mIHByb2Nlc3MgPT09ICd1bmRlZmluZWQnIHx8IHByb2Nlc3MudHlwZSA9PT0gJ3JlbmRlcmVyJyB8fCBwcm9jZXNzLmJyb3dzZXIgPT09IHRydWUgfHwgcHJvY2Vzcy5fX253anMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Jyb3dzZXIuanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9ub2RlLmpzJyk7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cbnZhciB0dHkgPSByZXF1aXJlKCd0dHknKTtcblxudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG4vKipcbiAqIFRoaXMgaXMgdGhlIE5vZGUuanMgaW1wbGVtZW50YXRpb24gb2YgYGRlYnVnKClgLlxuICovXG5cblxuZXhwb3J0cy5pbml0ID0gaW5pdDtcbmV4cG9ydHMubG9nID0gbG9nO1xuZXhwb3J0cy5mb3JtYXRBcmdzID0gZm9ybWF0QXJncztcbmV4cG9ydHMuc2F2ZSA9IHNhdmU7XG5leHBvcnRzLmxvYWQgPSBsb2FkO1xuZXhwb3J0cy51c2VDb2xvcnMgPSB1c2VDb2xvcnM7XG4vKipcbiAqIENvbG9ycy5cbiAqL1xuXG5leHBvcnRzLmNvbG9ycyA9IFs2LCAyLCAzLCA0LCA1LCAxXTtcblxudHJ5IHtcbiAgLy8gT3B0aW9uYWwgZGVwZW5kZW5jeSAoYXMgaW4sIGRvZXNuJ3QgbmVlZCB0byBiZSBpbnN0YWxsZWQsIE5PVCBsaWtlIG9wdGlvbmFsRGVwZW5kZW5jaWVzIGluIHBhY2thZ2UuanNvbilcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuICB2YXIgc3VwcG9ydHNDb2xvciA9IHJlcXVpcmUoJ3N1cHBvcnRzLWNvbG9yJyk7XG5cbiAgaWYgKHN1cHBvcnRzQ29sb3IgJiYgKHN1cHBvcnRzQ29sb3Iuc3RkZXJyIHx8IHN1cHBvcnRzQ29sb3IpLmxldmVsID49IDIpIHtcbiAgICBleHBvcnRzLmNvbG9ycyA9IFsyMCwgMjEsIDI2LCAyNywgMzIsIDMzLCAzOCwgMzksIDQwLCA0MSwgNDIsIDQzLCA0NCwgNDUsIDU2LCA1NywgNjIsIDYzLCA2OCwgNjksIDc0LCA3NSwgNzYsIDc3LCA3OCwgNzksIDgwLCA4MSwgOTIsIDkzLCA5OCwgOTksIDExMiwgMTEzLCAxMjgsIDEyOSwgMTM0LCAxMzUsIDE0OCwgMTQ5LCAxNjAsIDE2MSwgMTYyLCAxNjMsIDE2NCwgMTY1LCAxNjYsIDE2NywgMTY4LCAxNjksIDE3MCwgMTcxLCAxNzIsIDE3MywgMTc4LCAxNzksIDE4NCwgMTg1LCAxOTYsIDE5NywgMTk4LCAxOTksIDIwMCwgMjAxLCAyMDIsIDIwMywgMjA0LCAyMDUsIDIwNiwgMjA3LCAyMDgsIDIwOSwgMjE0LCAyMTUsIDIyMCwgMjIxXTtcbiAgfVxufSBjYXRjaCAoZXJyb3IpIHt9IC8vIFN3YWxsb3cgLSB3ZSBvbmx5IGNhcmUgaWYgYHN1cHBvcnRzLWNvbG9yYCBpcyBhdmFpbGFibGU7IGl0IGRvZXNuJ3QgaGF2ZSB0byBiZS5cblxuLyoqXG4gKiBCdWlsZCB1cCB0aGUgZGVmYXVsdCBgaW5zcGVjdE9wdHNgIG9iamVjdCBmcm9tIHRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMuXG4gKlxuICogICAkIERFQlVHX0NPTE9SUz1ubyBERUJVR19ERVBUSD0xMCBERUJVR19TSE9XX0hJRERFTj1lbmFibGVkIG5vZGUgc2NyaXB0LmpzXG4gKi9cblxuXG5leHBvcnRzLmluc3BlY3RPcHRzID0gT2JqZWN0LmtleXMocHJvY2Vzcy5lbnYpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAvXmRlYnVnXy9pLnRlc3Qoa2V5KTtcbn0pLnJlZHVjZShmdW5jdGlvbiAob2JqLCBrZXkpIHtcbiAgLy8gQ2FtZWwtY2FzZVxuICB2YXIgcHJvcCA9IGtleS5zdWJzdHJpbmcoNikudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9fKFthLXpdKS9nLCBmdW5jdGlvbiAoXywgaykge1xuICAgIHJldHVybiBrLnRvVXBwZXJDYXNlKCk7XG4gIH0pOyAvLyBDb2VyY2Ugc3RyaW5nIHZhbHVlIGludG8gSlMgdmFsdWVcblxuICB2YXIgdmFsID0gcHJvY2Vzcy5lbnZba2V5XTtcblxuICBpZiAoL14oeWVzfG9ufHRydWV8ZW5hYmxlZCkkL2kudGVzdCh2YWwpKSB7XG4gICAgdmFsID0gdHJ1ZTtcbiAgfSBlbHNlIGlmICgvXihub3xvZmZ8ZmFsc2V8ZGlzYWJsZWQpJC9pLnRlc3QodmFsKSkge1xuICAgIHZhbCA9IGZhbHNlO1xuICB9IGVsc2UgaWYgKHZhbCA9PT0gJ251bGwnKSB7XG4gICAgdmFsID0gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICB2YWwgPSBOdW1iZXIodmFsKTtcbiAgfVxuXG4gIG9ialtwcm9wXSA9IHZhbDtcbiAgcmV0dXJuIG9iajtcbn0sIHt9KTtcbi8qKlxuICogSXMgc3Rkb3V0IGEgVFRZPyBDb2xvcmVkIG91dHB1dCBpcyBlbmFibGVkIHdoZW4gYHRydWVgLlxuICovXG5cbmZ1bmN0aW9uIHVzZUNvbG9ycygpIHtcbiAgcmV0dXJuICdjb2xvcnMnIGluIGV4cG9ydHMuaW5zcGVjdE9wdHMgPyBCb29sZWFuKGV4cG9ydHMuaW5zcGVjdE9wdHMuY29sb3JzKSA6IHR0eS5pc2F0dHkocHJvY2Vzcy5zdGRlcnIuZmQpO1xufVxuLyoqXG4gKiBBZGRzIEFOU0kgY29sb3IgZXNjYXBlIGNvZGVzIGlmIGVuYWJsZWQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5cbmZ1bmN0aW9uIGZvcm1hdEFyZ3MoYXJncykge1xuICB2YXIgbmFtZSA9IHRoaXMubmFtZXNwYWNlLFxuICAgICAgdXNlQ29sb3JzID0gdGhpcy51c2VDb2xvcnM7XG5cbiAgaWYgKHVzZUNvbG9ycykge1xuICAgIHZhciBjID0gdGhpcy5jb2xvcjtcbiAgICB2YXIgY29sb3JDb2RlID0gXCJcXHgxQlszXCIgKyAoYyA8IDggPyBjIDogJzg7NTsnICsgYyk7XG4gICAgdmFyIHByZWZpeCA9IFwiICBcIi5jb25jYXQoY29sb3JDb2RlLCBcIjsxbVwiKS5jb25jYXQobmFtZSwgXCIgXFx4MUJbMG1cIik7XG4gICAgYXJnc1swXSA9IHByZWZpeCArIGFyZ3NbMF0uc3BsaXQoJ1xcbicpLmpvaW4oJ1xcbicgKyBwcmVmaXgpO1xuICAgIGFyZ3MucHVzaChjb2xvckNvZGUgKyAnbSsnICsgbW9kdWxlLmV4cG9ydHMuaHVtYW5pemUodGhpcy5kaWZmKSArIFwiXFx4MUJbMG1cIik7XG4gIH0gZWxzZSB7XG4gICAgYXJnc1swXSA9IGdldERhdGUoKSArIG5hbWUgKyAnICcgKyBhcmdzWzBdO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERhdGUoKSB7XG4gIGlmIChleHBvcnRzLmluc3BlY3RPcHRzLmhpZGVEYXRlKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSArICcgJztcbn1cbi8qKlxuICogSW52b2tlcyBgdXRpbC5mb3JtYXQoKWAgd2l0aCB0aGUgc3BlY2lmaWVkIGFyZ3VtZW50cyBhbmQgd3JpdGVzIHRvIHN0ZGVyci5cbiAqL1xuXG5cbmZ1bmN0aW9uIGxvZygpIHtcbiAgcmV0dXJuIHByb2Nlc3Muc3RkZXJyLndyaXRlKHV0aWwuZm9ybWF0LmFwcGx5KHV0aWwsIGFyZ3VtZW50cykgKyAnXFxuJyk7XG59XG4vKipcbiAqIFNhdmUgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5cbmZ1bmN0aW9uIHNhdmUobmFtZXNwYWNlcykge1xuICBpZiAobmFtZXNwYWNlcykge1xuICAgIHByb2Nlc3MuZW52LkRFQlVHID0gbmFtZXNwYWNlcztcbiAgfSBlbHNlIHtcbiAgICAvLyBJZiB5b3Ugc2V0IGEgcHJvY2Vzcy5lbnYgZmllbGQgdG8gbnVsbCBvciB1bmRlZmluZWQsIGl0IGdldHMgY2FzdCB0byB0aGVcbiAgICAvLyBzdHJpbmcgJ251bGwnIG9yICd1bmRlZmluZWQnLiBKdXN0IGRlbGV0ZSBpbnN0ZWFkLlxuICAgIGRlbGV0ZSBwcm9jZXNzLmVudi5ERUJVRztcbiAgfVxufVxuLyoqXG4gKiBMb2FkIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHJldHVybnMgdGhlIHByZXZpb3VzbHkgcGVyc2lzdGVkIGRlYnVnIG1vZGVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5cbmZ1bmN0aW9uIGxvYWQoKSB7XG4gIHJldHVybiBwcm9jZXNzLmVudi5ERUJVRztcbn1cbi8qKlxuICogSW5pdCBsb2dpYyBmb3IgYGRlYnVnYCBpbnN0YW5jZXMuXG4gKlxuICogQ3JlYXRlIGEgbmV3IGBpbnNwZWN0T3B0c2Agb2JqZWN0IGluIGNhc2UgYHVzZUNvbG9yc2AgaXMgc2V0XG4gKiBkaWZmZXJlbnRseSBmb3IgYSBwYXJ0aWN1bGFyIGBkZWJ1Z2AgaW5zdGFuY2UuXG4gKi9cblxuXG5mdW5jdGlvbiBpbml0KGRlYnVnKSB7XG4gIGRlYnVnLmluc3BlY3RPcHRzID0ge307XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZXhwb3J0cy5pbnNwZWN0T3B0cyk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgZGVidWcuaW5zcGVjdE9wdHNba2V5c1tpXV0gPSBleHBvcnRzLmluc3BlY3RPcHRzW2tleXNbaV1dO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9jb21tb24nKShleHBvcnRzKTtcbnZhciBmb3JtYXR0ZXJzID0gbW9kdWxlLmV4cG9ydHMuZm9ybWF0dGVycztcbi8qKlxuICogTWFwICVvIHRvIGB1dGlsLmluc3BlY3QoKWAsIGFsbCBvbiBhIHNpbmdsZSBsaW5lLlxuICovXG5cbmZvcm1hdHRlcnMubyA9IGZ1bmN0aW9uICh2KSB7XG4gIHRoaXMuaW5zcGVjdE9wdHMuY29sb3JzID0gdGhpcy51c2VDb2xvcnM7XG4gIHJldHVybiB1dGlsLmluc3BlY3QodiwgdGhpcy5pbnNwZWN0T3B0cykucmVwbGFjZSgvXFxzKlxcblxccyovZywgJyAnKTtcbn07XG4vKipcbiAqIE1hcCAlTyB0byBgdXRpbC5pbnNwZWN0KClgLCBhbGxvd2luZyBtdWx0aXBsZSBsaW5lcyBpZiBuZWVkZWQuXG4gKi9cblxuXG5mb3JtYXR0ZXJzLk8gPSBmdW5jdGlvbiAodikge1xuICB0aGlzLmluc3BlY3RPcHRzLmNvbG9ycyA9IHRoaXMudXNlQ29sb3JzO1xuICByZXR1cm4gdXRpbC5pbnNwZWN0KHYsIHRoaXMuaW5zcGVjdE9wdHMpO1xufTtcblxuIiwidmFyIHVybCA9IHJlcXVpcmUoXCJ1cmxcIik7XG52YXIgVVJMID0gdXJsLlVSTDtcbnZhciBodHRwID0gcmVxdWlyZShcImh0dHBcIik7XG52YXIgaHR0cHMgPSByZXF1aXJlKFwiaHR0cHNcIik7XG52YXIgYXNzZXJ0ID0gcmVxdWlyZShcImFzc2VydFwiKTtcbnZhciBXcml0YWJsZSA9IHJlcXVpcmUoXCJzdHJlYW1cIikuV3JpdGFibGU7XG52YXIgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJmb2xsb3ctcmVkaXJlY3RzXCIpO1xuXG4vLyBSRkM3MjMxwqc0LjIuMTogT2YgdGhlIHJlcXVlc3QgbWV0aG9kcyBkZWZpbmVkIGJ5IHRoaXMgc3BlY2lmaWNhdGlvbixcbi8vIHRoZSBHRVQsIEhFQUQsIE9QVElPTlMsIGFuZCBUUkFDRSBtZXRob2RzIGFyZSBkZWZpbmVkIHRvIGJlIHNhZmUuXG52YXIgU0FGRV9NRVRIT0RTID0geyBHRVQ6IHRydWUsIEhFQUQ6IHRydWUsIE9QVElPTlM6IHRydWUsIFRSQUNFOiB0cnVlIH07XG5cbi8vIENyZWF0ZSBoYW5kbGVycyB0aGF0IHBhc3MgZXZlbnRzIGZyb20gbmF0aXZlIHJlcXVlc3RzXG52YXIgZXZlbnRIYW5kbGVycyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5bXCJhYm9ydFwiLCBcImFib3J0ZWRcIiwgXCJlcnJvclwiLCBcInNvY2tldFwiLCBcInRpbWVvdXRcIl0uZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnRIYW5kbGVyc1tldmVudF0gPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgdGhpcy5fcmVkaXJlY3RhYmxlLmVtaXQoZXZlbnQsIGFyZyk7XG4gIH07XG59KTtcblxuLy8gQW4gSFRUUChTKSByZXF1ZXN0IHRoYXQgY2FuIGJlIHJlZGlyZWN0ZWRcbmZ1bmN0aW9uIFJlZGlyZWN0YWJsZVJlcXVlc3Qob3B0aW9ucywgcmVzcG9uc2VDYWxsYmFjaykge1xuICAvLyBJbml0aWFsaXplIHRoZSByZXF1ZXN0XG4gIFdyaXRhYmxlLmNhbGwodGhpcyk7XG4gIG9wdGlvbnMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycyB8fCB7fTtcbiAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnM7XG4gIHRoaXMuX2VuZGVkID0gZmFsc2U7XG4gIHRoaXMuX2VuZGluZyA9IGZhbHNlO1xuICB0aGlzLl9yZWRpcmVjdENvdW50ID0gMDtcbiAgdGhpcy5fcmVkaXJlY3RzID0gW107XG4gIHRoaXMuX3JlcXVlc3RCb2R5TGVuZ3RoID0gMDtcbiAgdGhpcy5fcmVxdWVzdEJvZHlCdWZmZXJzID0gW107XG5cbiAgLy8gU2luY2UgaHR0cC5yZXF1ZXN0IHRyZWF0cyBob3N0IGFzIGFuIGFsaWFzIG9mIGhvc3RuYW1lLFxuICAvLyBidXQgdGhlIHVybCBtb2R1bGUgaW50ZXJwcmV0cyBob3N0IGFzIGhvc3RuYW1lIHBsdXMgcG9ydCxcbiAgLy8gZWxpbWluYXRlIHRoZSBob3N0IHByb3BlcnR5IHRvIGF2b2lkIGNvbmZ1c2lvbi5cbiAgaWYgKG9wdGlvbnMuaG9zdCkge1xuICAgIC8vIFVzZSBob3N0bmFtZSBpZiBzZXQsIGJlY2F1c2UgaXQgaGFzIHByZWNlZGVuY2VcbiAgICBpZiAoIW9wdGlvbnMuaG9zdG5hbWUpIHtcbiAgICAgIG9wdGlvbnMuaG9zdG5hbWUgPSBvcHRpb25zLmhvc3Q7XG4gICAgfVxuICAgIGRlbGV0ZSBvcHRpb25zLmhvc3Q7XG4gIH1cblxuICAvLyBBdHRhY2ggYSBjYWxsYmFjayBpZiBwYXNzZWRcbiAgaWYgKHJlc3BvbnNlQ2FsbGJhY2spIHtcbiAgICB0aGlzLm9uKFwicmVzcG9uc2VcIiwgcmVzcG9uc2VDYWxsYmFjayk7XG4gIH1cblxuICAvLyBSZWFjdCB0byByZXNwb25zZXMgb2YgbmF0aXZlIHJlcXVlc3RzXG4gIHZhciBzZWxmID0gdGhpcztcbiAgdGhpcy5fb25OYXRpdmVSZXNwb25zZSA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgIHNlbGYuX3Byb2Nlc3NSZXNwb25zZShyZXNwb25zZSk7XG4gIH07XG5cbiAgLy8gQ29tcGxldGUgdGhlIFVSTCBvYmplY3Qgd2hlbiBuZWNlc3NhcnlcbiAgaWYgKCFvcHRpb25zLnBhdGhuYW1lICYmIG9wdGlvbnMucGF0aCkge1xuICAgIHZhciBzZWFyY2hQb3MgPSBvcHRpb25zLnBhdGguaW5kZXhPZihcIj9cIik7XG4gICAgaWYgKHNlYXJjaFBvcyA8IDApIHtcbiAgICAgIG9wdGlvbnMucGF0aG5hbWUgPSBvcHRpb25zLnBhdGg7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgb3B0aW9ucy5wYXRobmFtZSA9IG9wdGlvbnMucGF0aC5zdWJzdHJpbmcoMCwgc2VhcmNoUG9zKTtcbiAgICAgIG9wdGlvbnMuc2VhcmNoID0gb3B0aW9ucy5wYXRoLnN1YnN0cmluZyhzZWFyY2hQb3MpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFBlcmZvcm0gdGhlIGZpcnN0IHJlcXVlc3RcbiAgdGhpcy5fcGVyZm9ybVJlcXVlc3QoKTtcbn1cblJlZGlyZWN0YWJsZVJlcXVlc3QucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShXcml0YWJsZS5wcm90b3R5cGUpO1xuXG4vLyBXcml0ZXMgYnVmZmVyZWQgZGF0YSB0byB0aGUgY3VycmVudCBuYXRpdmUgcmVxdWVzdFxuUmVkaXJlY3RhYmxlUmVxdWVzdC5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAoZGF0YSwgZW5jb2RpbmcsIGNhbGxiYWNrKSB7XG4gIC8vIFdyaXRpbmcgaXMgbm90IGFsbG93ZWQgaWYgZW5kIGhhcyBiZWVuIGNhbGxlZFxuICBpZiAodGhpcy5fZW5kaW5nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwid3JpdGUgYWZ0ZXIgZW5kXCIpO1xuICB9XG5cbiAgLy8gVmFsaWRhdGUgaW5wdXQgYW5kIHNoaWZ0IHBhcmFtZXRlcnMgaWYgbmVjZXNzYXJ5XG4gIGlmICghKHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiBkYXRhID09PSBcIm9iamVjdFwiICYmIChcImxlbmd0aFwiIGluIGRhdGEpKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcImRhdGEgc2hvdWxkIGJlIGEgc3RyaW5nLCBCdWZmZXIgb3IgVWludDhBcnJheVwiKTtcbiAgfVxuICBpZiAodHlwZW9mIGVuY29kaW5nID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjYWxsYmFjayA9IGVuY29kaW5nO1xuICAgIGVuY29kaW5nID0gbnVsbDtcbiAgfVxuXG4gIC8vIElnbm9yZSBlbXB0eSBidWZmZXJzLCBzaW5jZSB3cml0aW5nIHRoZW0gZG9lc24ndCBpbnZva2UgdGhlIGNhbGxiYWNrXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9pc3N1ZXMvMjIwNjZcbiAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgLy8gT25seSB3cml0ZSB3aGVuIHdlIGRvbid0IGV4Y2VlZCB0aGUgbWF4aW11bSBib2R5IGxlbmd0aFxuICBpZiAodGhpcy5fcmVxdWVzdEJvZHlMZW5ndGggKyBkYXRhLmxlbmd0aCA8PSB0aGlzLl9vcHRpb25zLm1heEJvZHlMZW5ndGgpIHtcbiAgICB0aGlzLl9yZXF1ZXN0Qm9keUxlbmd0aCArPSBkYXRhLmxlbmd0aDtcbiAgICB0aGlzLl9yZXF1ZXN0Qm9keUJ1ZmZlcnMucHVzaCh7IGRhdGE6IGRhdGEsIGVuY29kaW5nOiBlbmNvZGluZyB9KTtcbiAgICB0aGlzLl9jdXJyZW50UmVxdWVzdC53cml0ZShkYXRhLCBlbmNvZGluZywgY2FsbGJhY2spO1xuICB9XG4gIC8vIEVycm9yIHdoZW4gd2UgZXhjZWVkIHRoZSBtYXhpbXVtIGJvZHkgbGVuZ3RoXG4gIGVsc2Uge1xuICAgIHRoaXMuZW1pdChcImVycm9yXCIsIG5ldyBFcnJvcihcIlJlcXVlc3QgYm9keSBsYXJnZXIgdGhhbiBtYXhCb2R5TGVuZ3RoIGxpbWl0XCIpKTtcbiAgICB0aGlzLmFib3J0KCk7XG4gIH1cbn07XG5cbi8vIEVuZHMgdGhlIGN1cnJlbnQgbmF0aXZlIHJlcXVlc3RcblJlZGlyZWN0YWJsZVJlcXVlc3QucHJvdG90eXBlLmVuZCA9IGZ1bmN0aW9uIChkYXRhLCBlbmNvZGluZywgY2FsbGJhY2spIHtcbiAgLy8gU2hpZnQgcGFyYW1ldGVycyBpZiBuZWNlc3NhcnlcbiAgaWYgKHR5cGVvZiBkYXRhID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjYWxsYmFjayA9IGRhdGE7XG4gICAgZGF0YSA9IGVuY29kaW5nID0gbnVsbDtcbiAgfVxuICBlbHNlIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNhbGxiYWNrID0gZW5jb2Rpbmc7XG4gICAgZW5jb2RpbmcgPSBudWxsO1xuICB9XG5cbiAgLy8gV3JpdGUgZGF0YSBpZiBuZWVkZWQgYW5kIGVuZFxuICBpZiAoIWRhdGEpIHtcbiAgICB0aGlzLl9lbmRlZCA9IHRoaXMuX2VuZGluZyA9IHRydWU7XG4gICAgdGhpcy5fY3VycmVudFJlcXVlc3QuZW5kKG51bGwsIG51bGwsIGNhbGxiYWNrKTtcbiAgfVxuICBlbHNlIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGN1cnJlbnRSZXF1ZXN0ID0gdGhpcy5fY3VycmVudFJlcXVlc3Q7XG4gICAgdGhpcy53cml0ZShkYXRhLCBlbmNvZGluZywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5fZW5kZWQgPSB0cnVlO1xuICAgICAgY3VycmVudFJlcXVlc3QuZW5kKG51bGwsIG51bGwsIGNhbGxiYWNrKTtcbiAgICB9KTtcbiAgICB0aGlzLl9lbmRpbmcgPSB0cnVlO1xuICB9XG59O1xuXG4vLyBTZXRzIGEgaGVhZGVyIHZhbHVlIG9uIHRoZSBjdXJyZW50IG5hdGl2ZSByZXF1ZXN0XG5SZWRpcmVjdGFibGVSZXF1ZXN0LnByb3RvdHlwZS5zZXRIZWFkZXIgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgdGhpcy5fb3B0aW9ucy5oZWFkZXJzW25hbWVdID0gdmFsdWU7XG4gIHRoaXMuX2N1cnJlbnRSZXF1ZXN0LnNldEhlYWRlcihuYW1lLCB2YWx1ZSk7XG59O1xuXG4vLyBDbGVhcnMgYSBoZWFkZXIgdmFsdWUgb24gdGhlIGN1cnJlbnQgbmF0aXZlIHJlcXVlc3RcblJlZGlyZWN0YWJsZVJlcXVlc3QucHJvdG90eXBlLnJlbW92ZUhlYWRlciA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGRlbGV0ZSB0aGlzLl9vcHRpb25zLmhlYWRlcnNbbmFtZV07XG4gIHRoaXMuX2N1cnJlbnRSZXF1ZXN0LnJlbW92ZUhlYWRlcihuYW1lKTtcbn07XG5cbi8vIEdsb2JhbCB0aW1lb3V0IGZvciBhbGwgdW5kZXJseWluZyByZXF1ZXN0c1xuUmVkaXJlY3RhYmxlUmVxdWVzdC5wcm90b3R5cGUuc2V0VGltZW91dCA9IGZ1bmN0aW9uIChtc2VjcywgY2FsbGJhY2spIHtcbiAgaWYgKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5vbmNlKFwidGltZW91dFwiLCBjYWxsYmFjayk7XG4gIH1cblxuICBpZiAodGhpcy5zb2NrZXQpIHtcbiAgICBzdGFydFRpbWVyKHRoaXMsIG1zZWNzKTtcbiAgfVxuICBlbHNlIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5fY3VycmVudFJlcXVlc3Qub25jZShcInNvY2tldFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzdGFydFRpbWVyKHNlbGYsIG1zZWNzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHRoaXMub25jZShcInJlc3BvbnNlXCIsIGNsZWFyVGltZXIpO1xuICB0aGlzLm9uY2UoXCJlcnJvclwiLCBjbGVhclRpbWVyKTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uIHN0YXJ0VGltZXIocmVxdWVzdCwgbXNlY3MpIHtcbiAgY2xlYXJUaW1lb3V0KHJlcXVlc3QuX3RpbWVvdXQpO1xuICByZXF1ZXN0Ll90aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgcmVxdWVzdC5lbWl0KFwidGltZW91dFwiKTtcbiAgfSwgbXNlY3MpO1xufVxuXG5mdW5jdGlvbiBjbGVhclRpbWVyKCkge1xuICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dCk7XG59XG5cbi8vIFByb3h5IGFsbCBvdGhlciBwdWJsaWMgQ2xpZW50UmVxdWVzdCBtZXRob2RzXG5bXG4gIFwiYWJvcnRcIiwgXCJmbHVzaEhlYWRlcnNcIiwgXCJnZXRIZWFkZXJcIixcbiAgXCJzZXROb0RlbGF5XCIsIFwic2V0U29ja2V0S2VlcEFsaXZlXCIsXG5dLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICBSZWRpcmVjdGFibGVSZXF1ZXN0LnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudFJlcXVlc3RbbWV0aG9kXShhLCBiKTtcbiAgfTtcbn0pO1xuXG4vLyBQcm94eSBhbGwgcHVibGljIENsaWVudFJlcXVlc3QgcHJvcGVydGllc1xuW1wiYWJvcnRlZFwiLCBcImNvbm5lY3Rpb25cIiwgXCJzb2NrZXRcIl0uZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlZGlyZWN0YWJsZVJlcXVlc3QucHJvdG90eXBlLCBwcm9wZXJ0eSwge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fY3VycmVudFJlcXVlc3RbcHJvcGVydHldOyB9LFxuICB9KTtcbn0pO1xuXG4vLyBFeGVjdXRlcyB0aGUgbmV4dCBuYXRpdmUgcmVxdWVzdCAoaW5pdGlhbCBvciByZWRpcmVjdClcblJlZGlyZWN0YWJsZVJlcXVlc3QucHJvdG90eXBlLl9wZXJmb3JtUmVxdWVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gTG9hZCB0aGUgbmF0aXZlIHByb3RvY29sXG4gIHZhciBwcm90b2NvbCA9IHRoaXMuX29wdGlvbnMucHJvdG9jb2w7XG4gIHZhciBuYXRpdmVQcm90b2NvbCA9IHRoaXMuX29wdGlvbnMubmF0aXZlUHJvdG9jb2xzW3Byb3RvY29sXTtcbiAgaWYgKCFuYXRpdmVQcm90b2NvbCkge1xuICAgIHRoaXMuZW1pdChcImVycm9yXCIsIG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIHByb3RvY29sIFwiICsgcHJvdG9jb2wpKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBJZiBzcGVjaWZpZWQsIHVzZSB0aGUgYWdlbnQgY29ycmVzcG9uZGluZyB0byB0aGUgcHJvdG9jb2xcbiAgLy8gKEhUVFAgYW5kIEhUVFBTIHVzZSBkaWZmZXJlbnQgdHlwZXMgb2YgYWdlbnRzKVxuICBpZiAodGhpcy5fb3B0aW9ucy5hZ2VudHMpIHtcbiAgICB2YXIgc2NoZW1lID0gcHJvdG9jb2wuc3Vic3RyKDAsIHByb3RvY29sLmxlbmd0aCAtIDEpO1xuICAgIHRoaXMuX29wdGlvbnMuYWdlbnQgPSB0aGlzLl9vcHRpb25zLmFnZW50c1tzY2hlbWVdO1xuICB9XG5cbiAgLy8gQ3JlYXRlIHRoZSBuYXRpdmUgcmVxdWVzdFxuICB2YXIgcmVxdWVzdCA9IHRoaXMuX2N1cnJlbnRSZXF1ZXN0ID1cbiAgICAgICAgbmF0aXZlUHJvdG9jb2wucmVxdWVzdCh0aGlzLl9vcHRpb25zLCB0aGlzLl9vbk5hdGl2ZVJlc3BvbnNlKTtcbiAgdGhpcy5fY3VycmVudFVybCA9IHVybC5mb3JtYXQodGhpcy5fb3B0aW9ucyk7XG5cbiAgLy8gU2V0IHVwIGV2ZW50IGhhbmRsZXJzXG4gIHJlcXVlc3QuX3JlZGlyZWN0YWJsZSA9IHRoaXM7XG4gIGZvciAodmFyIGV2ZW50IGluIGV2ZW50SGFuZGxlcnMpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChldmVudCkge1xuICAgICAgcmVxdWVzdC5vbihldmVudCwgZXZlbnRIYW5kbGVyc1tldmVudF0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIEVuZCBhIHJlZGlyZWN0ZWQgcmVxdWVzdFxuICAvLyAoVGhlIGZpcnN0IHJlcXVlc3QgbXVzdCBiZSBlbmRlZCBleHBsaWNpdGx5IHdpdGggUmVkaXJlY3RhYmxlUmVxdWVzdCNlbmQpXG4gIGlmICh0aGlzLl9pc1JlZGlyZWN0KSB7XG4gICAgLy8gV3JpdGUgdGhlIHJlcXVlc3QgZW50aXR5IGFuZCBlbmQuXG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgYnVmZmVycyA9IHRoaXMuX3JlcXVlc3RCb2R5QnVmZmVycztcbiAgICAoZnVuY3Rpb24gd3JpdGVOZXh0KGVycm9yKSB7XG4gICAgICAvLyBPbmx5IHdyaXRlIGlmIHRoaXMgcmVxdWVzdCBoYXMgbm90IGJlZW4gcmVkaXJlY3RlZCB5ZXRcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAocmVxdWVzdCA9PT0gc2VsZi5fY3VycmVudFJlcXVlc3QpIHtcbiAgICAgICAgLy8gUmVwb3J0IGFueSB3cml0ZSBlcnJvcnNcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHNlbGYuZW1pdChcImVycm9yXCIsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBXcml0ZSB0aGUgbmV4dCBidWZmZXIgaWYgdGhlcmUgYXJlIHN0aWxsIGxlZnRcbiAgICAgICAgZWxzZSBpZiAoaSA8IGJ1ZmZlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgdmFyIGJ1ZmZlciA9IGJ1ZmZlcnNbaSsrXTtcbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgICAgIGlmICghcmVxdWVzdC5maW5pc2hlZCkge1xuICAgICAgICAgICAgcmVxdWVzdC53cml0ZShidWZmZXIuZGF0YSwgYnVmZmVyLmVuY29kaW5nLCB3cml0ZU5leHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBFbmQgdGhlIHJlcXVlc3QgaWYgYGVuZGAgaGFzIGJlZW4gY2FsbGVkIG9uIHVzXG4gICAgICAgIGVsc2UgaWYgKHNlbGYuX2VuZGVkKSB7XG4gICAgICAgICAgcmVxdWVzdC5lbmQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0oKSk7XG4gIH1cbn07XG5cbi8vIFByb2Nlc3NlcyBhIHJlc3BvbnNlIGZyb20gdGhlIGN1cnJlbnQgbmF0aXZlIHJlcXVlc3RcblJlZGlyZWN0YWJsZVJlcXVlc3QucHJvdG90eXBlLl9wcm9jZXNzUmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgLy8gU3RvcmUgdGhlIHJlZGlyZWN0ZWQgcmVzcG9uc2VcbiAgaWYgKHRoaXMuX29wdGlvbnMudHJhY2tSZWRpcmVjdHMpIHtcbiAgICB0aGlzLl9yZWRpcmVjdHMucHVzaCh7XG4gICAgICB1cmw6IHRoaXMuX2N1cnJlbnRVcmwsXG4gICAgICBoZWFkZXJzOiByZXNwb25zZS5oZWFkZXJzLFxuICAgICAgc3RhdHVzQ29kZTogcmVzcG9uc2Uuc3RhdHVzQ29kZSxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFJGQzcyMzHCpzYuNDogVGhlIDN4eCAoUmVkaXJlY3Rpb24pIGNsYXNzIG9mIHN0YXR1cyBjb2RlIGluZGljYXRlc1xuICAvLyB0aGF0IGZ1cnRoZXIgYWN0aW9uIG5lZWRzIHRvIGJlIHRha2VuIGJ5IHRoZSB1c2VyIGFnZW50IGluIG9yZGVyIHRvXG4gIC8vIGZ1bGZpbGwgdGhlIHJlcXVlc3QuIElmIGEgTG9jYXRpb24gaGVhZGVyIGZpZWxkIGlzIHByb3ZpZGVkLFxuICAvLyB0aGUgdXNlciBhZ2VudCBNQVkgYXV0b21hdGljYWxseSByZWRpcmVjdCBpdHMgcmVxdWVzdCB0byB0aGUgVVJJXG4gIC8vIHJlZmVyZW5jZWQgYnkgdGhlIExvY2F0aW9uIGZpZWxkIHZhbHVlLFxuICAvLyBldmVuIGlmIHRoZSBzcGVjaWZpYyBzdGF0dXMgY29kZSBpcyBub3QgdW5kZXJzdG9vZC5cbiAgdmFyIGxvY2F0aW9uID0gcmVzcG9uc2UuaGVhZGVycy5sb2NhdGlvbjtcbiAgaWYgKGxvY2F0aW9uICYmIHRoaXMuX29wdGlvbnMuZm9sbG93UmVkaXJlY3RzICE9PSBmYWxzZSAmJlxuICAgICAgcmVzcG9uc2Uuc3RhdHVzQ29kZSA+PSAzMDAgJiYgcmVzcG9uc2Uuc3RhdHVzQ29kZSA8IDQwMCkge1xuICAgIC8vIEFib3J0IHRoZSBjdXJyZW50IHJlcXVlc3RcbiAgICB0aGlzLl9jdXJyZW50UmVxdWVzdC5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLl9jdXJyZW50UmVxdWVzdC5vbihcImVycm9yXCIsIG5vb3ApO1xuICAgIHRoaXMuX2N1cnJlbnRSZXF1ZXN0LmFib3J0KCk7XG5cbiAgICAvLyBSRkM3MjMxwqc2LjQ6IEEgY2xpZW50IFNIT1VMRCBkZXRlY3QgYW5kIGludGVydmVuZVxuICAgIC8vIGluIGN5Y2xpY2FsIHJlZGlyZWN0aW9ucyAoaS5lLiwgXCJpbmZpbml0ZVwiIHJlZGlyZWN0aW9uIGxvb3BzKS5cbiAgICBpZiAoKyt0aGlzLl9yZWRpcmVjdENvdW50ID4gdGhpcy5fb3B0aW9ucy5tYXhSZWRpcmVjdHMpIHtcbiAgICAgIHRoaXMuZW1pdChcImVycm9yXCIsIG5ldyBFcnJvcihcIk1heCByZWRpcmVjdHMgZXhjZWVkZWQuXCIpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBSRkM3MjMxwqc2LjQ6IEF1dG9tYXRpYyByZWRpcmVjdGlvbiBuZWVkcyB0byBkb25lIHdpdGhcbiAgICAvLyBjYXJlIGZvciBtZXRob2RzIG5vdCBrbm93biB0byBiZSBzYWZlIFvigKZdLFxuICAgIC8vIHNpbmNlIHRoZSB1c2VyIG1pZ2h0IG5vdCB3aXNoIHRvIHJlZGlyZWN0IGFuIHVuc2FmZSByZXF1ZXN0LlxuICAgIC8vIFJGQzcyMzHCpzYuNC43OiBUaGUgMzA3IChUZW1wb3JhcnkgUmVkaXJlY3QpIHN0YXR1cyBjb2RlIGluZGljYXRlc1xuICAgIC8vIHRoYXQgdGhlIHRhcmdldCByZXNvdXJjZSByZXNpZGVzIHRlbXBvcmFyaWx5IHVuZGVyIGEgZGlmZmVyZW50IFVSSVxuICAgIC8vIGFuZCB0aGUgdXNlciBhZ2VudCBNVVNUIE5PVCBjaGFuZ2UgdGhlIHJlcXVlc3QgbWV0aG9kXG4gICAgLy8gaWYgaXQgcGVyZm9ybXMgYW4gYXV0b21hdGljIHJlZGlyZWN0aW9uIHRvIHRoYXQgVVJJLlxuICAgIHZhciBoZWFkZXI7XG4gICAgdmFyIGhlYWRlcnMgPSB0aGlzLl9vcHRpb25zLmhlYWRlcnM7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgIT09IDMwNyAmJiAhKHRoaXMuX29wdGlvbnMubWV0aG9kIGluIFNBRkVfTUVUSE9EUykpIHtcbiAgICAgIHRoaXMuX29wdGlvbnMubWV0aG9kID0gXCJHRVRcIjtcbiAgICAgIC8vIERyb3AgYSBwb3NzaWJsZSBlbnRpdHkgYW5kIGhlYWRlcnMgcmVsYXRlZCB0byBpdFxuICAgICAgdGhpcy5fcmVxdWVzdEJvZHlCdWZmZXJzID0gW107XG4gICAgICBmb3IgKGhlYWRlciBpbiBoZWFkZXJzKSB7XG4gICAgICAgIGlmICgvXmNvbnRlbnQtL2kudGVzdChoZWFkZXIpKSB7XG4gICAgICAgICAgZGVsZXRlIGhlYWRlcnNbaGVhZGVyXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIERyb3AgdGhlIEhvc3QgaGVhZGVyLCBhcyB0aGUgcmVkaXJlY3QgbWlnaHQgbGVhZCB0byBhIGRpZmZlcmVudCBob3N0XG4gICAgaWYgKCF0aGlzLl9pc1JlZGlyZWN0KSB7XG4gICAgICBmb3IgKGhlYWRlciBpbiBoZWFkZXJzKSB7XG4gICAgICAgIGlmICgvXmhvc3QkL2kudGVzdChoZWFkZXIpKSB7XG4gICAgICAgICAgZGVsZXRlIGhlYWRlcnNbaGVhZGVyXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFBlcmZvcm0gdGhlIHJlZGlyZWN0ZWQgcmVxdWVzdFxuICAgIHZhciByZWRpcmVjdFVybCA9IHVybC5yZXNvbHZlKHRoaXMuX2N1cnJlbnRVcmwsIGxvY2F0aW9uKTtcbiAgICBkZWJ1ZyhcInJlZGlyZWN0aW5nIHRvXCIsIHJlZGlyZWN0VXJsKTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuX29wdGlvbnMsIHVybC5wYXJzZShyZWRpcmVjdFVybCkpO1xuICAgIHRoaXMuX2lzUmVkaXJlY3QgPSB0cnVlO1xuICAgIHRoaXMuX3BlcmZvcm1SZXF1ZXN0KCk7XG5cbiAgICAvLyBEaXNjYXJkIHRoZSByZW1haW5kZXIgb2YgdGhlIHJlc3BvbnNlIHRvIGF2b2lkIHdhaXRpbmcgZm9yIGRhdGFcbiAgICByZXNwb25zZS5kZXN0cm95KCk7XG4gIH1cbiAgZWxzZSB7XG4gICAgLy8gVGhlIHJlc3BvbnNlIGlzIG5vdCBhIHJlZGlyZWN0OyByZXR1cm4gaXQgYXMtaXNcbiAgICByZXNwb25zZS5yZXNwb25zZVVybCA9IHRoaXMuX2N1cnJlbnRVcmw7XG4gICAgcmVzcG9uc2UucmVkaXJlY3RzID0gdGhpcy5fcmVkaXJlY3RzO1xuICAgIHRoaXMuZW1pdChcInJlc3BvbnNlXCIsIHJlc3BvbnNlKTtcblxuICAgIC8vIENsZWFuIHVwXG4gICAgdGhpcy5fcmVxdWVzdEJvZHlCdWZmZXJzID0gW107XG4gIH1cbn07XG5cbi8vIFdyYXBzIHRoZSBrZXkvdmFsdWUgb2JqZWN0IG9mIHByb3RvY29scyB3aXRoIHJlZGlyZWN0IGZ1bmN0aW9uYWxpdHlcbmZ1bmN0aW9uIHdyYXAocHJvdG9jb2xzKSB7XG4gIC8vIERlZmF1bHQgc2V0dGluZ3NcbiAgdmFyIGV4cG9ydHMgPSB7XG4gICAgbWF4UmVkaXJlY3RzOiAyMSxcbiAgICBtYXhCb2R5TGVuZ3RoOiAxMCAqIDEwMjQgKiAxMDI0LFxuICB9O1xuXG4gIC8vIFdyYXAgZWFjaCBwcm90b2NvbFxuICB2YXIgbmF0aXZlUHJvdG9jb2xzID0ge307XG4gIE9iamVjdC5rZXlzKHByb3RvY29scykuZm9yRWFjaChmdW5jdGlvbiAoc2NoZW1lKSB7XG4gICAgdmFyIHByb3RvY29sID0gc2NoZW1lICsgXCI6XCI7XG4gICAgdmFyIG5hdGl2ZVByb3RvY29sID0gbmF0aXZlUHJvdG9jb2xzW3Byb3RvY29sXSA9IHByb3RvY29sc1tzY2hlbWVdO1xuICAgIHZhciB3cmFwcGVkUHJvdG9jb2wgPSBleHBvcnRzW3NjaGVtZV0gPSBPYmplY3QuY3JlYXRlKG5hdGl2ZVByb3RvY29sKTtcblxuICAgIC8vIEV4ZWN1dGVzIGEgcmVxdWVzdCwgZm9sbG93aW5nIHJlZGlyZWN0c1xuICAgIHdyYXBwZWRQcm90b2NvbC5yZXF1ZXN0ID0gZnVuY3Rpb24gKGlucHV0LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgICAgLy8gUGFyc2UgcGFyYW1ldGVyc1xuICAgICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICB2YXIgdXJsU3RyID0gaW5wdXQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaW5wdXQgPSB1cmxUb09wdGlvbnMobmV3IFVSTCh1cmxTdHIpKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgICBpbnB1dCA9IHVybC5wYXJzZSh1cmxTdHIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChVUkwgJiYgKGlucHV0IGluc3RhbmNlb2YgVVJMKSkge1xuICAgICAgICBpbnB1dCA9IHVybFRvT3B0aW9ucyhpbnB1dCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2sgPSBvcHRpb25zO1xuICAgICAgICBvcHRpb25zID0gaW5wdXQ7XG4gICAgICAgIGlucHV0ID0geyBwcm90b2NvbDogcHJvdG9jb2wgfTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhbGxiYWNrID0gb3B0aW9ucztcbiAgICAgICAgb3B0aW9ucyA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIC8vIFNldCBkZWZhdWx0c1xuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBtYXhSZWRpcmVjdHM6IGV4cG9ydHMubWF4UmVkaXJlY3RzLFxuICAgICAgICBtYXhCb2R5TGVuZ3RoOiBleHBvcnRzLm1heEJvZHlMZW5ndGgsXG4gICAgICB9LCBpbnB1dCwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLm5hdGl2ZVByb3RvY29scyA9IG5hdGl2ZVByb3RvY29scztcblxuICAgICAgYXNzZXJ0LmVxdWFsKG9wdGlvbnMucHJvdG9jb2wsIHByb3RvY29sLCBcInByb3RvY29sIG1pc21hdGNoXCIpO1xuICAgICAgZGVidWcoXCJvcHRpb25zXCIsIG9wdGlvbnMpO1xuICAgICAgcmV0dXJuIG5ldyBSZWRpcmVjdGFibGVSZXF1ZXN0KG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgLy8gRXhlY3V0ZXMgYSBHRVQgcmVxdWVzdCwgZm9sbG93aW5nIHJlZGlyZWN0c1xuICAgIHdyYXBwZWRQcm90b2NvbC5nZXQgPSBmdW5jdGlvbiAoaW5wdXQsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgICB2YXIgcmVxdWVzdCA9IHdyYXBwZWRQcm90b2NvbC5yZXF1ZXN0KGlucHV0LCBvcHRpb25zLCBjYWxsYmFjayk7XG4gICAgICByZXF1ZXN0LmVuZCgpO1xuICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgfTtcbiAgfSk7XG4gIHJldHVybiBleHBvcnRzO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZnVuY3Rpb24gbm9vcCgpIHsgLyogZW1wdHkgKi8gfVxuXG4vLyBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9ibG9iL21hc3Rlci9saWIvaW50ZXJuYWwvdXJsLmpzXG5mdW5jdGlvbiB1cmxUb09wdGlvbnModXJsT2JqZWN0KSB7XG4gIHZhciBvcHRpb25zID0ge1xuICAgIHByb3RvY29sOiB1cmxPYmplY3QucHJvdG9jb2wsXG4gICAgaG9zdG5hbWU6IHVybE9iamVjdC5ob3N0bmFtZS5zdGFydHNXaXRoKFwiW1wiKSA/XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgdXJsT2JqZWN0Lmhvc3RuYW1lLnNsaWNlKDEsIC0xKSA6XG4gICAgICB1cmxPYmplY3QuaG9zdG5hbWUsXG4gICAgaGFzaDogdXJsT2JqZWN0Lmhhc2gsXG4gICAgc2VhcmNoOiB1cmxPYmplY3Quc2VhcmNoLFxuICAgIHBhdGhuYW1lOiB1cmxPYmplY3QucGF0aG5hbWUsXG4gICAgcGF0aDogdXJsT2JqZWN0LnBhdGhuYW1lICsgdXJsT2JqZWN0LnNlYXJjaCxcbiAgICBocmVmOiB1cmxPYmplY3QuaHJlZixcbiAgfTtcbiAgaWYgKHVybE9iamVjdC5wb3J0ICE9PSBcIlwiKSB7XG4gICAgb3B0aW9ucy5wb3J0ID0gTnVtYmVyKHVybE9iamVjdC5wb3J0KTtcbiAgfVxuICByZXR1cm4gb3B0aW9ucztcbn1cblxuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB3cmFwKHsgaHR0cDogaHR0cCwgaHR0cHM6IGh0dHBzIH0pO1xubW9kdWxlLmV4cG9ydHMud3JhcCA9IHdyYXA7XG4iLCIvKiFcbiAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXJcbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgb2JqLmNvbnN0cnVjdG9yICE9IG51bGwgJiZcbiAgICB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopXG59XG4iLCIvKipcbiAqIEhlbHBlcnMuXG4gKi9cblxudmFyIHMgPSAxMDAwO1xudmFyIG0gPSBzICogNjA7XG52YXIgaCA9IG0gKiA2MDtcbnZhciBkID0gaCAqIDI0O1xudmFyIHcgPSBkICogNztcbnZhciB5ID0gZCAqIDM2NS4yNTtcblxuLyoqXG4gKiBQYXJzZSBvciBmb3JtYXQgdGhlIGdpdmVuIGB2YWxgLlxuICpcbiAqIE9wdGlvbnM6XG4gKlxuICogIC0gYGxvbmdgIHZlcmJvc2UgZm9ybWF0dGluZyBbZmFsc2VdXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSB2YWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEB0aHJvd3Mge0Vycm9yfSB0aHJvdyBhbiBlcnJvciBpZiB2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIG51bWJlclxuICogQHJldHVybiB7U3RyaW5nfE51bWJlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih2YWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcbiAgaWYgKHR5cGUgPT09ICdzdHJpbmcnICYmIHZhbC5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHBhcnNlKHZhbCk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUodmFsKSkge1xuICAgIHJldHVybiBvcHRpb25zLmxvbmcgPyBmbXRMb25nKHZhbCkgOiBmbXRTaG9ydCh2YWwpO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAndmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSB2YWxpZCBudW1iZXIuIHZhbD0nICtcbiAgICAgIEpTT04uc3RyaW5naWZ5KHZhbClcbiAgKTtcbn07XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGBzdHJgIGFuZCByZXR1cm4gbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlKHN0cikge1xuICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgaWYgKHN0ci5sZW5ndGggPiAxMDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG1hdGNoID0gL14oLT8oPzpcXGQrKT9cXC4/XFxkKykgKihtaWxsaXNlY29uZHM/fG1zZWNzP3xtc3xzZWNvbmRzP3xzZWNzP3xzfG1pbnV0ZXM/fG1pbnM/fG18aG91cnM/fGhycz98aHxkYXlzP3xkfHdlZWtzP3x3fHllYXJzP3x5cnM/fHkpPyQvaS5leGVjKFxuICAgIHN0clxuICApO1xuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuID0gcGFyc2VGbG9hdChtYXRjaFsxXSk7XG4gIHZhciB0eXBlID0gKG1hdGNoWzJdIHx8ICdtcycpLnRvTG93ZXJDYXNlKCk7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3llYXJzJzpcbiAgICBjYXNlICd5ZWFyJzpcbiAgICBjYXNlICd5cnMnOlxuICAgIGNhc2UgJ3lyJzpcbiAgICBjYXNlICd5JzpcbiAgICAgIHJldHVybiBuICogeTtcbiAgICBjYXNlICd3ZWVrcyc6XG4gICAgY2FzZSAnd2Vlayc6XG4gICAgY2FzZSAndyc6XG4gICAgICByZXR1cm4gbiAqIHc7XG4gICAgY2FzZSAnZGF5cyc6XG4gICAgY2FzZSAnZGF5JzpcbiAgICBjYXNlICdkJzpcbiAgICAgIHJldHVybiBuICogZDtcbiAgICBjYXNlICdob3Vycyc6XG4gICAgY2FzZSAnaG91cic6XG4gICAgY2FzZSAnaHJzJzpcbiAgICBjYXNlICdocic6XG4gICAgY2FzZSAnaCc6XG4gICAgICByZXR1cm4gbiAqIGg7XG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgY2FzZSAnbWludXRlJzpcbiAgICBjYXNlICdtaW5zJzpcbiAgICBjYXNlICdtaW4nOlxuICAgIGNhc2UgJ20nOlxuICAgICAgcmV0dXJuIG4gKiBtO1xuICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgY2FzZSAnc2Vjcyc6XG4gICAgY2FzZSAnc2VjJzpcbiAgICBjYXNlICdzJzpcbiAgICAgIHJldHVybiBuICogcztcbiAgICBjYXNlICdtaWxsaXNlY29uZHMnOlxuICAgIGNhc2UgJ21pbGxpc2Vjb25kJzpcbiAgICBjYXNlICdtc2Vjcyc6XG4gICAgY2FzZSAnbXNlYyc6XG4gICAgY2FzZSAnbXMnOlxuICAgICAgcmV0dXJuIG47XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBTaG9ydCBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRTaG9ydChtcykge1xuICB2YXIgbXNBYnMgPSBNYXRoLmFicyhtcyk7XG4gIGlmIChtc0FicyA+PSBkKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBkKSArICdkJztcbiAgfVxuICBpZiAobXNBYnMgPj0gaCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gaCkgKyAnaCc7XG4gIH1cbiAgaWYgKG1zQWJzID49IG0pIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG0pICsgJ20nO1xuICB9XG4gIGlmIChtc0FicyA+PSBzKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBzKSArICdzJztcbiAgfVxuICByZXR1cm4gbXMgKyAnbXMnO1xufVxuXG4vKipcbiAqIExvbmcgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10TG9uZyhtcykge1xuICB2YXIgbXNBYnMgPSBNYXRoLmFicyhtcyk7XG4gIGlmIChtc0FicyA+PSBkKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIGQsICdkYXknKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gaCkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBoLCAnaG91cicpO1xuICB9XG4gIGlmIChtc0FicyA+PSBtKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIG0sICdtaW51dGUnKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gcykge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBzLCAnc2Vjb25kJyk7XG4gIH1cbiAgcmV0dXJuIG1zICsgJyBtcyc7XG59XG5cbi8qKlxuICogUGx1cmFsaXphdGlvbiBoZWxwZXIuXG4gKi9cblxuZnVuY3Rpb24gcGx1cmFsKG1zLCBtc0FicywgbiwgbmFtZSkge1xuICB2YXIgaXNQbHVyYWwgPSBtc0FicyA+PSBuICogMS41O1xuICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG4pICsgJyAnICsgbmFtZSArIChpc1BsdXJhbCA/ICdzJyA6ICcnKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBAbmFtZSBUU1xyXG4gKiBAYXV0aG9yIEpvLmdlbFxyXG4gKiBAZGF0ZSAyMDE5LzgvMTkgMDAxOVxyXG4gKioqKioqKioqKioqKioqKioqKioqKiovXHJcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xyXG52YXIgdXJsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInVybFwiKSk7XHJcbnZhciBodHRwXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImh0dHBcIikpO1xyXG52YXIgaHR0cHNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiaHR0cHNcIikpO1xyXG52YXIgemxpYl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJ6bGliXCIpKTtcclxudmFyIGJ1aWxkVVJMXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2hlYWRlcnMvYnVpbGRVUkxcIikpO1xyXG52YXIgY3JlYXRlRXJyb3JfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vY29yZS9jcmVhdGVFcnJvclwiKSk7XHJcbnZhciBlbmhhbmNlRXJyb3JfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vY29yZS9lbmhhbmNlRXJyb3JcIikpO1xyXG52YXIgc2V0dGxlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2NvcmUvc2V0dGxlXCIpKTtcclxudmFyIGZvbGxvd19yZWRpcmVjdHNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZm9sbG93LXJlZGlyZWN0c1wiKSk7XHJcbnZhciBodHRwRm9sbG93ID0gZm9sbG93X3JlZGlyZWN0c18xLmRlZmF1bHQuaHR0cDtcclxudmFyIGh0dHBzRm9sbG93ID0gZm9sbG93X3JlZGlyZWN0c18xLmRlZmF1bHQuaHR0cHM7XHJcbnZhciBwa2cgPSByZXF1aXJlKCcuLi8uLi9wYWNrYWdlLmpzb24nKTtcclxudmFyIGlzSHR0cHMgPSAvaHR0cHM6Py87XHJcbmZ1bmN0aW9uIGh0dHBBZGFwdGVyKGNvbmZpZykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoSHR0cFJlcXVlc3QocmVzb2x2ZVByb21pc2UsIHJlamVjdFByb21pc2UpIHtcclxuICAgICAgICB2YXIgdGltZXI7XHJcbiAgICAgICAgdmFyIHJlc29sdmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgICAgICAgICAgcmVzb2x2ZVByb21pc2UodmFsdWUpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIHJlamVjdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgICAgICByZWplY3RQcm9taXNlKHZhbHVlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBkYXRhID0gY29uZmlnLmRhdGE7XHJcbiAgICAgICAgdmFyIGhlYWRlcnMgPSBjb25maWcuaGVhZGVycztcclxuICAgICAgICAvLyDorr7nva4gVXNlci1BZ2VudCDmn5DkupvmnI3liqHpnIDopoFcclxuICAgICAgICAvLyDlj6rmnInlnKjphY3nva7kuK3msqHmnInorr7nva7lpLTmlofku7bml7bmiY3orr7nva7lpLTmlofku7ZcclxuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2F4aW9zL2F4aW9zL2lzc3Vlcy82OVxyXG4gICAgICAgIGlmICghaGVhZGVyc1snVXNlci1BZ2VudCddICYmICFoZWFkZXJzWyd1c2VyLWFnZW50J10pIHtcclxuICAgICAgICAgICAgaGVhZGVyc1snVXNlci1BZ2VudCddID0gJ2F4aW9zLycgKyBwa2cudmVyc2lvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRhdGEgJiYgIXV0aWxzXzEuaXNTdHJlYW0oZGF0YSkpIHtcclxuICAgICAgICAgICAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihkYXRhKSkge1xyXG4gICAgICAgICAgICAgICAgLy8g5LuA5LmI6YO95rKh5YGaXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodXRpbHNfMS5pc0FycmF5QnVmZmVyKGRhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhID0gQnVmZmVyLmZyb20obmV3IFVpbnQ4QXJyYXkoZGF0YSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHV0aWxzXzEuaXNTdHJpbmcoZGF0YSkpIHtcclxuICAgICAgICAgICAgICAgIGRhdGEgPSBCdWZmZXIuZnJvbShkYXRhLCAndXRmLTgnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoY3JlYXRlRXJyb3JfMS5kZWZhdWx0KCdEYXRhIGFmdGVyIHRyYW5zZm9ybWF0aW9uIG11c3QgYmUgYSBzdHJpbmcsIGFuIEFycmF5QnVmZmVyLCBhIEJ1ZmZlciwgb3IgYSBTdHJlYW0nLCBjb25maWcpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDmt7vliqBDb250ZW50LVR5cGUgaGVhZGVyIOWmguaenCBkYXRhIOWtmOWcqFxyXG4gICAgICAgICAgICBoZWFkZXJzWydDb250ZW50LUxlbmd0aCddID0gZGF0YS5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cclxuICAgICAgICB2YXIgYXV0aCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAvLyDlpoLmnpzphY3nva7mlofku7blvIDlkK/mjojmnYNcclxuICAgICAgICBpZiAoY29uZmlnLmF1dGgpIHtcclxuICAgICAgICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XHJcbiAgICAgICAgICAgIHZhciBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkIHx8ICcnO1xyXG4gICAgICAgICAgICBhdXRoID0gdXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g6Kej5p6QVVJMXHJcbiAgICAgICAgdmFyIHBhcnNlZCA9IHVybF8xLmRlZmF1bHQucGFyc2UoY29uZmlnLnVybCk7XHJcbiAgICAgICAgdmFyIHByb3RvY29sID0gcGFyc2VkLnByb3RvY29sIHx8ICdodHRwOic7XHJcbiAgICAgICAgaWYgKCFhdXRoICYmIHBhcnNlZC5hdXRoKSB7XHJcbiAgICAgICAgICAgIHZhciB1cmxBdXRoID0gcGFyc2VkLmF1dGguc3BsaXQoJzonKTtcclxuICAgICAgICAgICAgdmFyIHVybFVzZXJuYW1lID0gdXJsQXV0aFswXSB8fCAnJztcclxuICAgICAgICAgICAgdmFyIHVybFBhc3N3b3JkID0gdXJsQXV0aFsxXSB8fCAnJztcclxuICAgICAgICAgICAgYXV0aCA9IHVybFVzZXJuYW1lICsgJzonICsgdXJsUGFzc3dvcmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOWmguaenOWtmOWcqGF1dGjliYfliKrpmaQg77yI5pm66Zqc5pCc54uX6Ly45YWl5rOV77yM54K65LuA6bq86YCZ6KOh5omT5Ye65LqG57mB6auU77yf77yJ77yM5YiH5o+b5YiwUVHlsI3oqbHmoYblsLHorormiJDkuobnsKHpq5RcclxuICAgICAgICBpZiAoYXV0aClcclxuICAgICAgICAgICAgZGVsZXRlIGhlYWRlcnMuQXV0aG9yaXphdGlvbjtcclxuICAgICAgICB2YXIgaXNIdHRwc1JlcXVlc3QgPSBpc0h0dHBzLnRlc3QocHJvdG9jb2wpO1xyXG4gICAgICAgIHZhciBhZ2VudCA9IGlzSHR0cHNSZXF1ZXN0ID8gY29uZmlnLmh0dHBzQWdlbnQgOiBjb25maWcuaHR0cEFnZW50O1xyXG4gICAgICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBwYXRoOiBidWlsZFVSTF8xLmRlZmF1bHQocGFyc2VkLnBhdGgsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKS5yZXBsYWNlKC9eXFw/LywgJycpLFxyXG4gICAgICAgICAgICBtZXRob2Q6IGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcclxuICAgICAgICAgICAgYWdlbnQ6IGFnZW50LFxyXG4gICAgICAgICAgICBhdXRoOiBhdXRoXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyDlpoLmnpzmmK9zb2NrZXQg6Lev5b6RXHJcbiAgICAgICAgaWYgKGNvbmZpZy5zb2NrZXRQYXRoKVxyXG4gICAgICAgICAgICBvcHRpb25zLnNvY2tldFBhdGggPSBjb25maWcuc29ja2V0UGF0aDtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5ob3N0bmFtZSA9IHBhcnNlZC5ob3N0bmFtZTtcclxuICAgICAgICAgICAgb3B0aW9ucy5wb3J0ID0gcGFyc2VkLnBvcnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOS4jeWtmOWcqOS7o+eQhlxyXG4gICAgICAgIHZhciBwcm94eSA9IGNvbmZpZy5wcm94eTtcclxuICAgICAgICBpZiAoIXByb3h5ICYmIHByb3h5ICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB2YXIgcHJveHlFbnYgPSBwcm90b2NvbC5zbGljZSgwLCAtMSkgKyAnX3Byb3h5JztcclxuICAgICAgICAgICAgdmFyIHByb3h5VXJsID0gcHJvY2Vzcy5lbnZbcHJveHlFbnZdIHx8IHByb2Nlc3MuZW52W3Byb3h5RW52LnRvVXBwZXJDYXNlKCldO1xyXG4gICAgICAgICAgICAvLyDlrZjlnKjku6PnkIZ1cmxcclxuICAgICAgICAgICAgaWYgKHByb3h5VXJsKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFyc2VkUHJveHlVcmwgPSB1cmxfMS5kZWZhdWx0LnBhcnNlKHByb3h5VXJsKTtcclxuICAgICAgICAgICAgICAgIHZhciBub1Byb3h5RW52ID0gcHJvY2Vzcy5lbnYubm9fcHJveHkgfHwgcHJvY2Vzcy5lbnYuTk9fUFJPWFk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2hvdWxkUHJveHkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8g5rKh5pyJ5Luj55CG546v5aKDXHJcbiAgICAgICAgICAgICAgICBpZiAobm9Qcm94eUVudikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBub1Byb3h5ID0gbm9Qcm94eUVudi5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbS50cmltKCk7IH0pIHx8ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3VsZFByb3h5ID0gIW5vUHJveHkuc29tZShmdW5jdGlvbiBwcm94eU1hdGNoKHByb3h5RWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXByb3h5RWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3h5RWxlbWVudCA9PT0gJyonKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm94eUVsZW1lbnRbMF0gPT09ICcuJyAmJiBwYXJzZWQuaG9zdG5hbWUuc3Vic3RyKHBhcnNlZC5ob3N0bmFtZS5sZW5ndGggLSBwcm94eUVsZW1lbnQubGVuZ3RoKSA9PT0gcHJveHlFbGVtZW50ICYmIHByb3h5RWxlbWVudC5tYXRjaCgvXFwuL2cpLmxlbmd0aCA9PT0gcGFyc2VkLmhvc3RuYW1lLm1hdGNoKC9cXC4vZykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VkLmhvc3RuYW1lID09PSBwcm94eUVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyDlupTor6Xku6PnkIZcclxuICAgICAgICAgICAgICAgIGlmIChzaG91bGRQcm94eSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3h5ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3N0OiBwYXJzZWRQcm94eVVybC5ob3N0bmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdDogcGFyc2VkUHJveHlVcmwucG9ydFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5a2Y5ZyoYXV0aFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZWRQcm94eVVybC5hdXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm94eVVybEF1dGggPSBwYXJzZWRQcm94eVVybC5hdXRoLnNwbGl0KFwiOlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJveHkuYXV0aCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBwcm94eVVybEF1dGhbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogcHJveHlVcmxBdXRoWzFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlrZjlnKjku6PnkIZcclxuICAgICAgICBpZiAocHJveHkpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5ob3N0bmFtZSA9IHByb3h5Lmhvc3Q7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuaG9zdCA9IHByb3h5Lmhvc3Q7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuaGVhZGVycy5ob3N0ID0gcGFyc2VkLmhvc3RuYW1lICsgKHBhcnNlZC5wb3J0ID8gXCI6XCIgKyBwYXJzZWQucG9zdCA6IFwiXCIpO1xyXG4gICAgICAgICAgICBvcHRpb25zLnBvcnQgPSBwcm94eS5wb3J0O1xyXG4gICAgICAgICAgICBvcHRpb25zLnBhdGggPSBwcm90b2NvbCArICcvLycgKyBwYXJzZWQuaG9zdG5hbWUgKyAocGFyc2VkLnBvcnQgPyAnOicgKyBwYXJzZWQucG9ydCA6IFwiXCIpICsgb3B0aW9ucy5wYXRoO1xyXG4gICAgICAgICAgICAvLyDln7rnoYDku6PnkIbmjojmnYNcclxuICAgICAgICAgICAgaWYgKHByb3h5LmF1dGgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBiYXNlNjQgPSBCdWZmZXIuZnJvbShwcm94eS5hdXRoLnVzZXJuYW1lICsgJzonICsgcHJveHkuYXV0aC5wYXNzd29yZCwgJ3V0ZjgnKS50b1N0cmluZygnYmFzZTY0Jyk7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmhlYWRlcnNbJ1Byb3h5LUF1dGhvcml6YXRpb24nXSA9ICdCYXNpYycgKyBiYXNlNjQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHRyYW5zcG9ydCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB2YXIgaXNIdHRwc1Byb3h5ID0gaXNIdHRwc1JlcXVlc3QgJiYgKHByb3h5ID8gaXNIdHRwcy50ZXN0KHByb3h5LnByb3RvY29sKSA6IHRydWUpO1xyXG4gICAgICAgIGlmIChjb25maWcudHJhbnNwb3J0KVxyXG4gICAgICAgICAgICB0cmFuc3BvcnQgPSBjb25maWcudHJhbnNwb3J0O1xyXG4gICAgICAgIGVsc2UgaWYgKGNvbmZpZy5tYXhSZWRpcmVjdHMgPT09IDApXHJcbiAgICAgICAgICAgIHRyYW5zcG9ydCA9IGlzSHR0cHNQcm94eSA/IGh0dHBzXzEuZGVmYXVsdCA6IGh0dHBfMS5kZWZhdWx0O1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoY29uZmlnLm1heFJlZGlyZWN0cylcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMubWF4UmVkaXJlY3RzID0gY29uZmlnLm1heFJlZGlyZWN0cztcclxuICAgICAgICAgICAgdHJhbnNwb3J0ID0gaXNIdHRwc1Byb3h5ID8gaHR0cHNGb2xsb3cgOiBodHRwRm9sbG93O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29uZmlnLm1heENvbnRlbnRMZW5ndGggJiYgY29uZmlnLm1heENvbnRlbnRMZW5ndGggPiAtMSkge1xyXG4gICAgICAgICAgICBvcHRpb25zLm1heEJvZHlMZW5ndGggPSBjb25maWcubWF4Q29udGVudExlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5Yib5bu6cmVxdWVzdFxyXG4gICAgICAgIC8vIHJlcXVlc3Qs5Li65LuA5LmI6L+Z6YeM5YWl5Y+C5LiA5Liq5YW35ZCN5Ye95pWwXHJcbiAgICAgICAgdmFyIHJlcSA9IHRyYW5zcG9ydC5yZXF1ZXN0KG9wdGlvbnMsIGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcS5hYm9ydGVkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAvLyDlpoLmnpzpnIDopoHvvIzpgI/mmI7lnLDop6PljovnvKnlk43lupTkuLvkvZNcclxuICAgICAgICAgICAgdmFyIHN0cmVhbSA9IHJlcztcclxuICAgICAgICAgICAgc3dpdGNoIChyZXMuaGVhZGVyc1snY29udGVudC1lbmNvZGluZyddKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdnemlwJzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2NvbXByZXNzJzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2RlZmxhdGUnOlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFkZCB0aGUgdW56aXBwZXIgdG8gdGhlIGJvZHkgc3RyZWFtIHByb2Nlc3NpbmcgcGlwZWxpbmVcclxuICAgICAgICAgICAgICAgICAgICBzdHJlYW0gPSAocmVzLnN0YXR1c0NvZGUgPT09IDIwNCkgPyBzdHJlYW0gOiBzdHJlYW0ucGlwZSh6bGliXzEuZGVmYXVsdC5jcmVhdGVVbnppcCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIGNvbnRlbnQtZW5jb2RpbmcgaW4gb3JkZXIgdG8gbm90IGNvbmZ1c2UgZG93bnN0cmVhbSBvcGVyYXRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHJlcy5oZWFkZXJzWydjb250ZW50LWVuY29kaW5nJ107XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8g5aaC5p6c6YeN5a6a5ZCR77yM6L+U5Zue5pyA5ZCO5LiA5Liq6K+35rGCXHJcbiAgICAgICAgICAgIHZhciBsYXN0UmVxdWVzdCA9IHJlcy5yZXEgfHwgcmVxO1xyXG4gICAgICAgICAgICAvL+S9v+eUqGludGVyZmFjZVxyXG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHJlcy5zdGF0dXNDb2RlLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzVGV4dDogcmVzLnN0YXR1c01lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiByZXMuaGVhZGVycyxcclxuICAgICAgICAgICAgICAgIGNvbmZpZzogcmVzLmNvbmZpZyxcclxuICAgICAgICAgICAgICAgIHJlcXVlc3Q6IGxhc3RSZXF1ZXN0XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlID09PSAnc3RyZWFtJykge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YSA9IHN0cmVhbTtcclxuICAgICAgICAgICAgICAgIHNldHRsZV8xLmRlZmF1bHQocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2VCdWZmZXJfMSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgLy8gY2h1bmvnmoTnsbvlnovmmK8gVWludDhBcnJheVxyXG4gICAgICAgICAgICAgICAgc3RyZWFtLm9uKCdkYXRhJywgZnVuY3Rpb24gKGNodW5rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VCdWZmZXJfMS5wdXNoKGNodW5rKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBtYWtlIHN1cmUgdGhlIGNvbnRlbnQgbGVuZ3RoIGlzIG5vdCBvdmVyIHRoZSBtYXhDb250ZW50TGVuZ3RoIGlmIHNwZWNpZmllZFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25maWcubWF4Q29udGVudExlbmd0aCA+IC0xICYmIEJ1ZmZlci5jb25jYXQocmVzcG9uc2VCdWZmZXJfMSkubGVuZ3RoID4gY29uZmlnLm1heENvbnRlbnRMZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyZWFtLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yXzEuZGVmYXVsdCgnbWF4Q29udGVudExlbmd0aCBzaXplIG9mICcgKyBjb25maWcubWF4Q29udGVudExlbmd0aCArICcgZXhjZWVkZWQnLCBjb25maWcsIG51bGwsIGxhc3RSZXF1ZXN0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzdHJlYW0ub24oJ2Vycm9yJywgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXEuYWJvcnRlZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlbmhhbmNlRXJyb3JfMS5kZWZhdWx0KGVyciwgY29uZmlnLCBudWxsLCBsYXN0UmVxdWVzdCkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzdHJlYW0ub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2VEYXRhID0gQnVmZmVyLmNvbmNhdChyZXNwb25zZUJ1ZmZlcl8xKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSAhPT0gJ2FycmF5YnVmZmVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZURhdGEgPSByZXNwb25zZURhdGEudG9TdHJpbmcoY29uZmlnLnJlc3BvbnNlRW5jb2RpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhID0gcmVzcG9uc2VEYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldHRsZV8xLmRlZmF1bHQocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIOWkhOeQhumUmeivr1xyXG4gICAgICAgIHJlcS5vbignZXJyb3InLCBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXEuYWJvcnRlZClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgcmVqZWN0KGVuaGFuY2VFcnJvcl8xLmRlZmF1bHQoZXJyLCBjb25maWcsIG51bGwsIHJlcSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIOWkhOeQhuivt+axgui2heaXtlxyXG4gICAgICAgIGlmIChjb25maWcudGltZW91dCkge1xyXG4gICAgICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmVxLmFib3J0ZWQoKTsgLy/nu4jmraJcclxuICAgICAgICAgICAgICAgIHJlamVjdChjcmVhdGVFcnJvcl8xLmRlZmF1bHQoJ3RpbWVvdXQgb2YgJyArIGNvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJywgcmVxKSk7XHJcbiAgICAgICAgICAgIH0sIGNvbmZpZy50aW1lb3V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5Y+W5raIdG9rZW4gLHRlc3TlpoLmnpznlKjmiLfphY3nva7kuobov5nph4zvvIzkvLzkuY7lnKjkvb/nlKhzZXRUaW1lSW50ZXJ2YWwg5Ye6546w5YaF5a2Y6L+H6L2955qE6Zeu6aKY77yM5Lul5YmN5Zyo5byA5Y+R5pe25YCZ6YGH5YiwXHJcbiAgICAgICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xyXG4gICAgICAgICAgICBjb25maWcuY2FuY2VsVG9rZW4ucHJvbWlzZS50aGVuKGZ1bmN0aW9uIChjYW5jZWwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXEuYWJvcnRlZClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICByZXEuYWJvcnQoKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdChjYW5jZWwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5Y+R6YCBIOivt+axglxyXG4gICAgICAgIGlmICh1dGlsc18xLmlzU3RyZWFtKGRhdGEpKSB7XHJcbiAgICAgICAgICAgIGRhdGEub24oJ2Vycm9yJywgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVuaGFuY2VFcnJvcl8xLmRlZmF1bHQoZXJyLCBjb25maWcsIG51bGwsIHJlcSkpO1xyXG4gICAgICAgICAgICB9KS5waXBlKHJlcSk7IC8vIOeci+eci+i/meS4qnN0cmVhbSDnmoRwaXBl55So5rOVXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmVxLmVuZChkYXRhKTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IGh0dHBBZGFwdGVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKioqKioqKioqKioqKioqKioqKioqKipcclxuICogQG5hbWUgVFNcclxuICogQGF1dGhvciBKby5nZWxcclxuICogQGRhdGUgMjAxOS84LzE5IDAwMTlcclxuICoqKioqKioqKioqKioqKioqKioqKioqL1xyXG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcclxudmFyIHNldHRsZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9jb3JlL3NldHRsZVwiKSk7XHJcbnZhciBidWlsZFVSTF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9oZWFkZXJzL2J1aWxkVVJMXCIpKTtcclxudmFyIHBhcnNlSGVhZGVyc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9oZWFkZXJzL3BhcnNlSGVhZGVyc1wiKSk7XHJcbnZhciBpc1VSTFNhbWVPcmlnaW5fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vaGVhZGVycy9pc1VSTFNhbWVPcmlnaW5cIikpO1xyXG52YXIgY3JlYXRlRXJyb3JfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vY29yZS9jcmVhdGVFcnJvclwiKSk7XHJcbmZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIHZhciByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xyXG4gICAgICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xyXG4gICAgICAgIGlmICh1dGlsc18xLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1snQ29udGVudC1UeXBlJ107IC8vIOiuqea1j+iniOWZqOadpeiuvue9ruWug1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIC8vIEhUVFAgYmFzaWMg5o6I5p2DXHJcbiAgICAgICAgaWYgKGNvbmZpZy5hdXRoKSB7XHJcbiAgICAgICAgICAgIHZhciB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xyXG4gICAgICAgICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcclxuICAgICAgICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYycgKyBidG9hKHVzZXJuYW1lICsgJzonICsgcGFzc3dvcmQpOyAvL2J0b2E/P1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTF8xLmRlZmF1bHQoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLCB0cnVlKTtcclxuICAgICAgICAvLyDorr7nva7or7fmsYLotoXml7bmr6vnp5JcclxuICAgICAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcclxuICAgICAgICAvLyDnm5HlkKxyZWFkeSDnirbmgIFcclxuICAgICAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCFyZXF1ZXN0IHx8IHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXHJcbiAgICAgICAgICAgIC8vIGhhbmRsZWQgYnkgb25lcnJvciBpbnN0ZWFkXHJcbiAgICAgICAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXHJcbiAgICAgICAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcclxuICAgICAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAwICYmIChyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIC8vIOWHhuWkh+WTjeW6lFxyXG4gICAgICAgICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gJ2dldEFMTFJlc3BvbnNlSGVhZGVycycgaW4gcmVxdWVzdCA/IHBhcnNlSGVhZGVyc18xLmRlZmF1bHQocmVxdWVzdC5nZXRBTExSZXNwb25zZUhlYWRlcnMoKSkgOiBudWxsOyAvLyBwYXJzZUhlYWRlclxyXG4gICAgICAgICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIWNvbmZpZy5yZXNwb25zZVR5cGUgfHwgY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnID8gcmVxdWVzdC5yZXNwb25zZVR5cGUgOiByZXF1ZXN0LnJlc3BvbnNlOyAvLz8/6L+ZcmVxdWVzdCDkuLrllaXov5jmnInkuIDkuKpyZXNwb25zZVxyXG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXNUZXh0LFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgY29uZmlnOiBjb25maWcsXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHNldHRsZV8xLmRlZmF1bHQocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgIC8vIOa4heeQhuivt+axglxyXG4gICAgICAgICAgICByZXF1ZXN0ID0gbnVsbDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIOWkhOeQhua1j+iniOWZqOivt+axguWPlua2iO+8iOS4juaJi+WKqOWPlua2iOebuOWPje+8iVxyXG4gICAgICAgIHJlcXVlc3Qub25hYm9ydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCFyZXF1ZXN0KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICByZWplY3QoY3JlYXRlRXJyb3JfMS5kZWZhdWx0KCdSZXF1ZXN0IGFib3J0ZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnLCByZXF1ZXN0KSk7XHJcbiAgICAgICAgICAgIC8vIOa4heeQhuiri+axglxyXG4gICAgICAgICAgICByZXF1ZXN0ID0gbnVsbDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIOWkhOeQhuS9jue6p+e9kee7nOmUmeivr1xyXG4gICAgICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8g55yf5q2j55qE6ZSZ6K+v6KKr5rWP6KeI5Zmo6ZqQ6JeP6LW35p2lXHJcbiAgICAgICAgICAgIC8vIE9uRXJyb3Llj6rlupTlnKjnvZHnu5zplJnor6/ml7bop6blj5HjgIJcclxuICAgICAgICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yXzEuZGVmYXVsdCgnTmV0d29yayBFcnJvcicsIGNvbmZpZywgbnVsbCwgcmVxdWVzdCkpO1xyXG4gICAgICAgICAgICAvLyDmuIXnkIboq4vmsYJcclxuICAgICAgICAgICAgcmVxdWVzdCA9IG51bGw7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyDlpITnkIbotoXml7ZcclxuICAgICAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yXzEuZGVmYXVsdCgndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnLCByZXF1ZXN0KSk7XHJcbiAgICAgICAgICAgIC8vIOa4heeQhuiri+axglxyXG4gICAgICAgICAgICByZXF1ZXN0ID0gbnVsbDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIOa3u+WKoCBYU1JGIGhlYWRlclxyXG4gICAgICAgIC8vIOWPquacieWcqOagh+WHhua1j+iniOWZqOeOr+Wig+S4rei/kOihjOaXtu+8jOaJjeiDveaJp+ihjOatpOaTjeS9nOOAglxyXG4gICAgICAgIC8vIOWwpOWFtuaYr+WmguaenOaIkeS7rOaYr+S4gOS4qndlYiB3b3JrZXLvvIzmiJbogIXmmK9yZWFjdC1uYXRpdmVcclxuICAgICAgICBpZiAodXRpbHNfMS5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XHJcbiAgICAgICAgICAgIHZhciBjb29raWVzID0gcmVxdWlyZSgnLi4vaGVhZGVycy9jb29raWVzJyk7IC8vIHRlc3TlpoLkvZXorqnlroPmlLnmiJDkuLppbXBvcnTvvJ/ov5nkuKptb2R1bGXmmK/kuIDkuKrnq4vljbPmiafooYzlh73mlbBcclxuICAgICAgICAgICAgLy8gaW1wb3J0IGNvb2tpZXMgZnJvbSAnLi4vaGVhZGVycy9jb29raWVzJ1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb29raWVzKVxyXG4gICAgICAgICAgICAvLyBhZGQgeHNyZiBoZWFkZXJcclxuICAgICAgICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbl8xLmRlZmF1bHQoY29uZmlnLnVybCkgJiYgY29uZmlnLnhzcmZDb29raWVOYW1lID8gY29va2llcy5yZWFkKGNvbmZpZy54c3JmQ29va2llTmFtZSkgOiB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICBpZiAoeHNyZlZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0SGVhZGVyc1tjb25maWcueHNyZkhlYWRlck5hbWVdID0geHNyZlZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOa3u+WKoGhlYWRlcnMg5YiwIHJlcXVlc3RcclxuICAgICAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcclxuICAgICAgICAgICAgdXRpbHNfMS5mb3JFYWNoKHJlcXVlc3RIZWFkZXJzLCBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKHZhbCwga2V5KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3REYXRhID09PSAndW5kZWZpbmVkJyAmJiBrZXkudG9Mb3dlckNhc2UoKSA9PT0gJ2NvbnRlbnQtdHlwZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpxkYXRhIOaYr3VuZGVmaW5lZO+8jOWImeenu+mZpCBDb250ZW50LVR5cGVcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNba2V5XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWQpuWImeWwhmhlYWRlciDmt7vliqDliLByZXF1ZXN0XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOWmguaenOmcgOimge+8jOa3u+WKoOW4puWHreaNrueahOivt+axglxyXG4gICAgICAgIGlmIChjb25maWcud2l0aENyZWRlbnRpYWxzKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5aaC5p6c6ZyA6KaB77yM5ZCR6K+35rGC5re75YqgcmVzcG9uc2VUeXBlXHJcbiAgICAgICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gY29uZmlnLnJlc3BvbnNlVHlwZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgLy8g5rWP6KeI5Zmo5byV5Y+R55qE6aKE5pyfZG9tRXhjZXB0aW9u5LiOeG1saHR0cFJlcXVlc3TnuqfliKsy5LiN5YW85a6544CCXHJcbiAgICAgICAgICAgICAgICAvLyDkvYbmmK/vvIzlr7nkuo7igJxqc29u4oCd57G75Z6L77yM6L+Z5Y+v5Lul6KKr56aB5q2i77yM5Zug5Li65a6D5Y+v5Lul55Sx6buY6K6k55qE4oCcdHJhbnNmb3JtUmVzcG9uc2XigJ3lh73mlbDop6PmnpDjgIJcclxuICAgICAgICAgICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOW/heimgeaXtuWkhOeQhui/m+W6plxyXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9jZXNzID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigncHJvY2VzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvY2Vzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOW5tumdnuaJgOaciea1j+iniOWZqOmDveaUr+aMgXVwbG9hZOS6i+S7tlxyXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicgJiYgcmVxdWVzdC51cGxvYWQpIHtcclxuICAgICAgICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGJ1ZyDotoXml7Y0OOS4quWwj+aXtu+8jOaYr+WQpuS8muWvvOiHtOWGheWtmOazhOa8j1xyXG4gICAgICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcclxuICAgICAgICAgICAgLy8g5aSE55CG5rOo6ZSAXHJcbiAgICAgICAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi5wcm9taXNlLnRoZW4oZnVuY3Rpb24gb25DYW5jZWxlZChjYW5jZWwpIHtcclxuICAgICAgICAgICAgICAgIGlmICghcmVxdWVzdClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0LmFib3J0KCk7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoY2FuY2VsKTtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3QgPSBudWxsO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcclxuICAgICAgICAvLyDlj5HpgIFyZXF1ZXN0XHJcbiAgICAgICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHhockFkYXB0ZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG4vKipcclxuICogQGRlc2MgQXhpb3Mg5YWl5Y+j5paH5Lu2XHJcbiAqL1xyXG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgQXhpb3NfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb3JlL0F4aW9zXCIpKTtcclxudmFyIGRlZmF1bHRzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vZGVmYXVsdHNcIikpO1xyXG4vKipcclxuICogQGRlc2Mg5Yib5bu6QXhpb3Mg5a6e5L6LXHJcbiAqXHJcbiAqL1xyXG52YXIgY3JlYXRlSW5zdGFuY2UgPSBmdW5jdGlvbiAoZGVmYXVsdENvbmZpZykge1xyXG4gICAgcmV0dXJuIG5ldyBBeGlvc18xLmRlZmF1bHQoZGVmYXVsdENvbmZpZyk7XHJcbn07XHJcbi8vIOWIm+W7uuimgeWvvOWHuueahOm7mOiupOWunuS+i1xyXG52YXIgYXhpb3MgPSBuZXcgQXhpb3NfMS5kZWZhdWx0KGRlZmF1bHRzXzEuZGVmYXVsdCk7XHJcbi8vIGNvbnN0IGF4aW9zOiBhbnkgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XHJcbi8vIOaatOmcsuexu0F4aW9zXHJcbmF4aW9zLkF4aW9zID0gQXhpb3NfMS5kZWZhdWx0O1xyXG4vLyDnlKjkuo7liJvlu7rmlrDlrp7kvovnmoTlt6XljoLmqKHlvI/lh73mlbBcclxuYXhpb3MuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGluc3RhbmNlQ29uZmlnKSB7XHJcbiAgICByZXR1cm4gbmV3IEF4aW9zXzEuZGVmYXVsdChfX2Fzc2lnbih7fSwgYXhpb3MuZGVmYXVsdHMsIGluc3RhbmNlQ29uZmlnIHx8IHt9KSk7XHJcbn07XHJcbi8vIOaatOmcsiBheGlvcyDnmoRDYW5jZWwgJiBDYW5jZWxUb2tlblxyXG5heGlvcy5DYW5jZWwgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9faW1wb3J0U3RhcihyZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWwnKSk7IH0pOyB9O1xyXG5heGlvcy5DYW5jZWxUb2tlbiA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gX19pbXBvcnRTdGFyKHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbFRva2VuJykpOyB9KTsgfTtcclxuYXhpb3MuaXNDYW5jZWwgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9faW1wb3J0U3RhcihyZXF1aXJlKCcuL2NhbmNlbC9pc0NhbmNlbCcpKTsgfSk7IH07XHJcbi8vIOaatOmcsiBhbGwvc3ByZWFkIOW5suWYm+eahO+8n1xyXG5heGlvcy5hbGwgPSBmdW5jdGlvbiAocHJvbWlzZXMpIHtcclxuICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbn07XHJcbmF4aW9zLnNwcmVhZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gX19pbXBvcnRTdGFyKHJlcXVpcmUoJy4vaGVhZGVycy9zcHJlYWQnKSk7IH0pOyB9O1xyXG52YXIgeCA9IGF4aW9zLmNyZWF0ZSh7fSk7XHJcbnguZ2V0KCdodHRwOi8vYmFpZHUuY29tJywgeyBkYXRhOiB7IGt3OiBcImJhaWR1XCIgfSB9KVxyXG4gICAgLnRoZW4oZnVuY3Rpb24gKHgpIHtcclxuICAgIGNvbnNvbGUuaW5mbyhcInJlczpcIiwgeCk7XHJcbn0pXHJcbiAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgY29uc29sZS5pbmZvKFwiZXJyOlwiLCBlcnIpO1xyXG59KTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gYXhpb3M7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG4vKipcclxuICogQGRlc2MgYENhbmNlbGAg5byV5Y+R55qE5Y+W5raI5a+56LGhXHJcbiAqIEBjbGFzc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxyXG4gKi9cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgQ2FuY2VsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ2FuY2VsKG1lc3NhZ2UpIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4gICAgICAgIHRoaXMuX19DQU5DRUxfXyA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBDYW5jZWwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAnQ2FuY2VsICcgKyAodGhpcy5tZXNzYWdlID8gJzonICsgdGhpcy5tZXNzYWdlIDogXCJcIik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENhbmNlbDtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gQ2FuY2VsO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgQ2FuY2VsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vQ2FuY2VsXCIpKTtcclxuLyoqXHJcbiAqIEBkZXNjIGBDYW5jZWxUb2tlbmDmmK/lj6/nlKjkuo7or7fmsYLlj5bmtojmk43kvZznmoTlr7nosaHjgIJcclxuICogQGNsYXNzXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIOaJp+ihjOWZqOWHveaVsFxyXG4gKi9cclxudmFyIENhbmNlbFRva2VuID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ2FuY2VsVG9rZW4oZXhlY3V0b3IpIHtcclxuICAgICAgICB2YXIgcmVzb2x2ZVByb21pc2UgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXM7XHJcbiAgICAgICAgZXhlY3V0b3IoZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgLy8g5bey6K+35rGC5Y+W5raIXHJcbiAgICAgICAgICAgIGlmICh0b2tlbi5yZWFzb24pXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWxfMS5kZWZhdWx0KG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIENhbmNlbFRva2VuO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBDYW5jZWxUb2tlbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBAYXV0aG9yIEpvLmdlbFxyXG4gKiBAZGF0ZSAyMDE5LzgvMjAgMDAyMFxyXG4gKioqKioqKioqKioqKioqKioqKioqKiovXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZnVuY3Rpb24gaXNDYW5jZWwodmFsdWUpIHtcclxuICAgIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBpc0NhbmNlbDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbi8qKlxyXG4gKiBAZGVzYyBBeGlvcyBjb3JlIGNvZGVcclxuICogKi9cclxudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBJbnRlcmNlcHRvck1hbmFnZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9JbnRlcmNlcHRvck1hbmFnZXJcIikpO1xyXG52YXIgbWVyZ2VDb25maWdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tZXJnZUNvbmZpZ1wiKSk7XHJcbnZhciBidWlsZFVSTF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9oZWFkZXJzL2J1aWxkVVJMXCIpKTtcclxudmFyIGRpc3BhdGNoUmVxdWVzdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2Rpc3BhdGNoUmVxdWVzdFwiKSk7XHJcbnZhciBwa2cgPSByZXF1aXJlKCcuLi8uLi9wYWNrYWdlLmpzb24nKTtcclxuLyoqXHJcbiAqIEBkZXNjIOWIm+W7uuS4gOS4qkF4aW9z5paw5a6e5L6LLOS7pWVzNiBjbGFzcyDmlrnlvI/lo7DmmI5cclxuICpcclxuICogKi9cclxudmFyIEF4aW9zID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQXhpb3MoaW5zdGFuY2VDb25maWcpIHtcclxuICAgICAgICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XHJcbiAgICAgICAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXJfMS5kZWZhdWx0KCksXHJcbiAgICAgICAgICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyXzEuZGVmYXVsdCgpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBeGlvcy5wcm90b3R5cGUsIFwidmVyc2lvblwiLCB7XHJcbiAgICAgICAgLy8g5L+d5oqkYXhpb3MgdmVyc2lvblxyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcGtnLnZlcnNpb24gfHwgJyc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDlpoLmnpzlsJ3or5Xljrvorr7nva7vvIzliJnmipvlh7rplJnor69cclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgdGhyb3cgXCJDYW4ndCBzZXR0aW5nIHRoZSBBeGlvcyB2ZXJzaW9uXCI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBBeGlvcy5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIChjb25maWcpIHtcclxuICAgICAgICBjb25maWcgPSBjb25maWcgfHwge307XHJcbiAgICAgICAgY29uZmlnID0gbWVyZ2VDb25maWdfMS5kZWZhdWx0KHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKCdoYWhhOlxcbicsIGNvbmZpZyk7XHJcbiAgICAgICAgY29uZmlnLm1ldGhvZCA9IGNvbmZpZy5tZXRob2QgPyBjb25maWcubWV0aG9kLnRvTG93ZXJDYXNlKCkgOiAnZ2V0JzsgLy/pu5jorqRnZXQs5bm26L2s5o2i5bCP5YaZbWV0aG9k5a2X5q61XHJcbiAgICAgICAgLy8g6L+e5o6l5oum5oiq5Zmo5Lit6Ze05Lu2XHJcbiAgICAgICAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdF8xLmRlZmF1bHQsIHVuZGVmaW5lZF07XHJcbiAgICAgICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcclxuICAgICAgICAvLyDlkJHnrKzkuIDpobnmt7vliqBcclxuICAgICAgICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcclxuICAgICAgICAgICAgY2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyDlkJHlkI7pnaLmt7vliqBcclxuICAgICAgICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xyXG4gICAgICAgICAgICBjaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbyhcImNoYWluOlwiLCBjaGFpbik7XHJcbiAgICAgICAgd2hpbGUgKGNoYWluLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICBBeGlvcy5wcm90b3R5cGUuZ2V0VXJpID0gZnVuY3Rpb24gKGNvbmZpZykge1xyXG4gICAgICAgIGNvbmZpZyA9IG1lcmdlQ29uZmlnXzEuZGVmYXVsdCh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xyXG4gICAgICAgIHJldHVybiBidWlsZFVSTF8xLmRlZmF1bHQoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLnJlcGxhY2UoL15cXD8vLCAnJyk7XHJcbiAgICB9O1xyXG4gICAgQXhpb3MucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uICh1cmwsIGNvbmZpZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QoX19hc3NpZ24oe30sIGNvbmZpZywgeyBtZXRob2Q6ICdkZWxldGUnLCB1cmw6IHVybCB9KSk7XHJcbiAgICB9O1xyXG4gICAgQXhpb3MucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICh1cmwsIGNvbmZpZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QoX19hc3NpZ24oe30sIGNvbmZpZywgeyBtZXRob2Q6ICdnZXQnLCB1cmw6IHVybCB9KSk7XHJcbiAgICB9O1xyXG4gICAgQXhpb3MucHJvdG90eXBlLmhlYWQgPSBmdW5jdGlvbiAodXJsLCBjb25maWcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KF9fYXNzaWduKHt9LCBjb25maWcsIHsgbWV0aG9kOiAnaGVhZCcsIHVybDogdXJsIH0pKTtcclxuICAgIH07XHJcbiAgICBBeGlvcy5wcm90b3R5cGUub3B0aW9ucyA9IGZ1bmN0aW9uICh1cmwsIGNvbmZpZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QoX19hc3NpZ24oe30sIGNvbmZpZywgeyBtZXRob2Q6ICdvcHRpb25zJywgdXJsOiB1cmwgfSkpO1xyXG4gICAgfTtcclxuICAgIEF4aW9zLnByb3RvdHlwZS5wb3N0ID0gZnVuY3Rpb24gKHVybCwgZGF0YSwgY29uZmlnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChfX2Fzc2lnbih7fSwgY29uZmlnLCB7IG1ldGhvZDogJ3Bvc3QnLCB1cmw6IHVybCwgZGF0YTogZGF0YSB9KSk7XHJcbiAgICB9O1xyXG4gICAgQXhpb3MucHJvdG90eXBlLnB1dCA9IGZ1bmN0aW9uICh1cmwsIGRhdGEsIGNvbmZpZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QoX19hc3NpZ24oe30sIGNvbmZpZywgeyBtZXRob2Q6ICdwdXQnLCB1cmw6IHVybCwgZGF0YTogZGF0YSB9KSk7XHJcbiAgICB9O1xyXG4gICAgQXhpb3MucHJvdG90eXBlLnBhdGNoID0gZnVuY3Rpb24gKHVybCwgZGF0YSwgY29uZmlnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChfX2Fzc2lnbih7fSwgY29uZmlnLCB7IG1ldGhvZDogJ3BhdGNoJywgdXJsOiB1cmwsIGRhdGE6IGRhdGEgfSkpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBBeGlvcztcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gQXhpb3M7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBAZGVzYyAg5oum5oiq5Zmo566h55CG5ZmoXHJcbiAqIEBhdXRob3IgSm8uZ2VsXHJcbiAqIEBkYXRlIDIwMTkvOC8yMCAwMDIwXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKi9cclxudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XHJcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBJbnRlcmNlcHRvck1hbmFnZXIoKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlcnMgPSBbXTtcclxuICAgIH1cclxuICAgIEludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZXJzLnB1c2goe1xyXG4gICAgICAgICAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcclxuICAgICAgICAgICAgcmVqZWN0ZWQ6IHJlamVjdGVkXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjIOS7juWghuagiOS4reWIoOmZpOaLpuaIquWZqFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGlkIOeUsWDov5Tlm57nmoRJROS9v+eUqGBcclxuICAgICAqICovXHJcbiAgICBJbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKVxyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDov63ku6PmiYDmnInms6jlhoznmoTmi6bmiKrlmahcclxuICAgICAqIOi/meenjeaWueazleWvueS6jui3s+i/h1xyXG4gICAgICog5Y+v6IO95bey5oiQ5Li6YG51bGxg55qE5oum5oiq5Zmo6LCD55SoYGVqZWN0YOOAglxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm4g6LCD55So5q+P5Liq5oum5oiq5Zmo55qE5Ye95pWwXHJcbiAgICAgKiAqL1xyXG4gICAgSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGZuKSB7XHJcbiAgICAgICAgdXRpbHNfMS5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcclxuICAgICAgICAgICAgaWYgKGggIT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICBmbihoKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gSW50ZXJjZXB0b3JNYW5hZ2VyO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBJbnRlcmNlcHRvck1hbmFnZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG4vKioqKioqKioqKioqKioqKioqKioqKipcclxuICogQGF1dGhvciBKby5nZWxcclxuICogQGRhdGUgMjAxOS84LzE5IDAwMTlcclxuICoqKioqKioqKioqKioqKioqKioqKioqL1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBlbmhhbmNlRXJyb3JfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9lbmhhbmNlRXJyb3JcIikpO1xyXG4vKipcclxuICogQGRlc2Mg5L2/55So5oyH5a6a55qE5raI5oGv44CB6YWN572u44CB6ZSZ6K+v5Luj56CB44CB6K+35rGC5ZKM5ZON5bqU5Yib5bu66ZSZ6K+v5Ye95pWwXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWdcclxuICogQHBhcmFtIHtzdHJpbmd9IGNvZGVcclxuICogQHBhcmFtIHtvYmplY3R9IHJlcXVlc3RcclxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlXHJcbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXHJcbiAqICovXHJcbmZ1bmN0aW9uIGNyZWF0ZUVycm9yKG1lc3NhZ2UsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcclxuICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcclxuICAgIHJldHVybiBlbmhhbmNlRXJyb3JfMS5kZWZhdWx0KGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKTtcclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVFcnJvcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgdHJhbnNmb3JtRGF0YV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3RyYW5zZm9ybURhdGFcIikpO1xyXG52YXIgaXNDYW5jZWxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vY2FuY2VsL2lzQ2FuY2VsXCIpKTtcclxudmFyIGlzQWJzb2x1dGVVUkxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vaGVhZGVycy9pc0Fic29sdXRlVVJMXCIpKTtcclxudmFyIGNvbWJpbmVVUkxzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2hlYWRlcnMvY29tYmluZVVSTHNcIikpO1xyXG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcclxudmFyIGRlZmF1bHRzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2RlZmF1bHRzXCIpKTtcclxuLyoqXHJcbiAqIEBkZXNjIHRocm93cyDlpoLmnpzor7fmsYJjYW5jZWzvvIzliJnmipvlh7rkuIDkuKpjYW5jZWxcclxuICogKi9cclxuZnVuY3Rpb24gdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpIHtcclxuICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcclxuICAgICAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBAZGVzYyDkvb/nlKjphY3nva7nmoTpgILphY3lmajlsIbor7fmsYLliIbmtL7liLDmnI3liqHlmajjgIJcclxuICogKi9cclxuZnVuY3Rpb24gZGlzcGF0Y2hSZXF1ZXN0KGNvbmZpZykge1xyXG4gICAgY29uc29sZS5pbmZvKFwi5L2/55So6YWN572u55qE6YCC6YWN5Zmo5bCG6K+35rGC5YiG5rS+5Yiw5pyN5Yqh5Zmo44CCOlxcblwiLCBjb25maWcpO1xyXG4gICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xyXG4gICAgLy8g5pSv5oyBYmFzZVVSTCBjb25maWdcclxuICAgIGlmIChjb25maWcuYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTF8xLmRlZmF1bHQoY29uZmlnLnVybCkpIHtcclxuICAgICAgICBjb25maWcudXJsID0gY29tYmluZVVSTHNfMS5kZWZhdWx0KGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcclxuICAgIH1cclxuICAgIC8vIOehruS/nWhlYWRlcnMg5a2Y5ZyoXHJcbiAgICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xyXG4gICAgLy8gdG9kbyDov5nph4znmoRkYXRhIOS4uuS7gOS5iOS4ouWkseS6hu+8n++8n1xyXG4gICAgY29uc29sZS5pbmZvKFwi5Li65LuA5LmI5Lii5aSxOlwiLCBjb25maWcuZGF0YSk7XHJcbiAgICAvLyDovazmjaJyZXF1ZXN0IGRhdGFcclxuICAgIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YV8xLmRlZmF1bHQoY29uZmlnLmRhdGEsIGNvbmZpZy5oZWFkZXJzLCBjb25maWcudHJhbnNmb3JtUmVxdWVzdCk7XHJcbiAgICBjb25zb2xlLmluZm8oXCLmraTml7bnmoRjb25maWfvvJpcIiwgY29uZmlnKTtcclxuICAgIC8vIOaJgeW5s+WMlmhlYWRlcnNcclxuICAgIGNvbmZpZy5oZWFkZXJzID0gX19hc3NpZ24oe30sIGNvbmZpZy5oZWFkZXJzLmNvbm1vbiB8fCB7fSwgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sIGNvbmZpZy5oZWFkZXJzIHx8IHt9KTtcclxuICAgIC8vIOWQjuacn+aKveemu21ldGhvZOS9nOS4uuWFrOWFseWPmOmHj1xyXG4gICAgdXRpbHNfMS5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSwgZnVuY3Rpb24gKG1ldGhvZCkge1xyXG4gICAgICAgIGRlbGV0ZSBjb25maWcuaGVhZGVyc1ttZXRob2RdO1xyXG4gICAgfSk7XHJcbiAgICAvLyBjb25zb2xlLmluZm8oXCJjb25maWc6XCIsY29uZmlnKTtcclxuICAgIC8vIGNvbnNvbGUuaW5mbyhcImRlZmF1bHRzOlwiLGRlZmF1bHRzKTtcclxuICAgIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHNfMS5kZWZhdWx0LmFkYXB0ZXI7XHJcbiAgICByZXR1cm4gYWRhcHRlcihjb25maWcpXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xyXG4gICAgICAgIC8vIOi9rOaNouaVsOaNruaYr+S4jeaYr+WHuuS6hueCuemXrumimCBUT0RPXHJcbiAgICAgICAgY29uc29sZS5pbmZvKFwicmVzcG9uc2UxMTo6XCIsIHJlc3BvbnNlKTtcclxuICAgICAgICAvLyDovazmjaJyZXNwb25zZSBEYXRlXHJcbiAgICAgICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGFfMS5kZWZhdWx0KHJlc3BvbnNlLmRhdGEsIHJlc3BvbnNlLmhlYWRlcnMsIGNvbmZpZy50cmFuc2Zyb21SZXNwb25zZSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfSlcclxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlYXNvbikge1xyXG4gICAgICAgIGlmICghaXNDYW5jZWxfMS5kZWZhdWx0KHJlYXNvbikpIHtcclxuICAgICAgICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xyXG4gICAgICAgICAgICAvLyDovazmjaJyZXNwb25zZSBkYXRhXHJcbiAgICAgICAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGFfMS5kZWZhdWx0KHJlYXNvbi5yZXNwb25zZS5kYXRhLCByZWFzb24ucmVzcG9uc2UuaGVhZGVycywgY29uZmlnLnRyYW5zZnJvbVJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IGRpc3BhdGNoUmVxdWVzdDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIEBkZXNjIOmUmeivr+WinuW8uueuoeeQhlxyXG4gKiBAYXV0aG9yIEpvLmdlbFxyXG4gKiBAZGF0ZSAyMDE5LzgvMTkgMDAxOVxyXG4gKioqKioqKioqKioqKioqKioqKioqKiovXHJcbmZ1bmN0aW9uIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xyXG4gICAgZXJyb3IuY29uZmlnID0gY29uZmlnO1xyXG4gICAgaWYgKGNvZGUpXHJcbiAgICAgICAgZXJyb3IuY29kZSA9IGNvZGU7XHJcbiAgICBlcnJvci5yZXF1ZXN0ID0gcmVxdWVzdDtcclxuICAgIGVycm9yLnJlc3BvbmUgPSByZXNwb25zZTtcclxuICAgIGVycm9yLmlzQXhpb3JzRXJyb3IgPSB0cnVlO1xyXG4gICAgZXJyb3IudG9KU09OID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC8vIOagh+WHhlxyXG4gICAgICAgICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICAgICAgLy8gTWljcm9zb2Z0XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICBudW1iZXI6IHRoaXMubnVtYmVyLFxyXG4gICAgICAgICAgICAvLyBNb3ppbGxhXHJcbiAgICAgICAgICAgIGZpbGVuYW1lOiB0aGlzLmZpbGVuYW1lLFxyXG4gICAgICAgICAgICBsaW5lTnVtYmVyOiB0aGlzLmxpbmVOdW1iZXIsXHJcbiAgICAgICAgICAgIGNvbHVtbk51bWJlcjogdGhpcy5jb2x1bW5OdW1iZXIsXHJcbiAgICAgICAgICAgIHN0YWNrOiB0aGlzLnN0YWNrLFxyXG4gICAgICAgICAgICAvLyBBeGlvc1xyXG4gICAgICAgICAgICBjb25maWc6IHRoaXMuY29uZmlnLFxyXG4gICAgICAgICAgICBjb2RlOiB0aGlzLmNvZGVcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBlcnJvcjtcclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBlbmhhbmNlRXJyb3I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIEBkZXNjIOWQiOW5tmNvbmZpZ1xyXG4gKiBAYXV0aG9yIEpvLmdlbFxyXG4gKiBAZGF0ZSAyMDE5LzgvMjAgMDAyMFxyXG4gKioqKioqKioqKioqKioqKioqKioqKiovXHJcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xyXG4vKipcclxuICogQHBhcmFtIGNvbmZpZzIgY29uZmlnMiDlkIjlubbliLBjb25maWcxXHJcbiAqIEBwYXJhbSBjb25maWcxIOWwhmNvbmZpZzLlkIjlubbov5vmnaVcclxuICogKi9cclxuZnVuY3Rpb24gbWVyZ2VDb25maWcoY29uZmlnMSwgY29uZmlnMikge1xyXG4gICAgaWYgKGNvbmZpZzEgPT09IHZvaWQgMCkgeyBjb25maWcxID0ge307IH1cclxuICAgIGlmIChjb25maWcyID09PSB2b2lkIDApIHsgY29uZmlnMiA9IHt9OyB9XHJcbiAgICBjb25maWcyID0gY29uZmlnMiB8fCB7fTtcclxuICAgIHZhciBjb25maWcgPSB7fTtcclxuICAgIHV0aWxzXzEuZm9yRWFjaChbJ3VybCcsICdtZXRob2QnLCAncGFyYW1zJywgJ2RhdGEnXSwgZnVuY3Rpb24gdmFsdWVGcm9tQ29uZmlnMihwcm9wKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdXRpbHNfMS5mb3JFYWNoKFsnaGVhZGVycycsICdhdXRoJywgJ3Byb3h5J10sIGZ1bmN0aW9uIG1lcmdlRGVlcFByb3BlcnRpZXMocHJvcCkge1xyXG4gICAgICAgIC8vIHRlc3Tov5nph4zkvb/nlKjvvJrop6PmnoTmk43kvZznrKbvvIzpnIDopoHlvoXpqozor4FcclxuICAgICAgICBpZiAodXRpbHNfMS5pc09iamVjdChjb25maWcyW3Byb3BdKSkge1xyXG4gICAgICAgICAgICBjb25maWdbcHJvcF0gPSBfX2Fzc2lnbih7fSwgY29uZmlnMVtwcm9wXSwgY29uZmlnMltwcm9wXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh1dGlsc18xLmlzT2JqZWN0KGNvbmZpZzFbcHJvcF0pKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZ1twcm9wXSA9IF9fYXNzaWduKHt9LCBjb25maWcxW3Byb3BdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNvbmZpZzFbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzFbcHJvcF07XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB1dGlsc18xLmZvckVhY2goWydiYXNlVVJMJywgJ3RyYW5zZm9ybVJlcXVlc3QnLCAndHJhbnNmb3JtUmVzcG9uc2UnLCAncGFyYW1zU2VyaWFsaXplcicsXHJcbiAgICAgICAgJ3RpbWVvdXQnLCAnd2l0aENyZWRlbnRpYWxzJywgJ2FkYXB0ZXInLCAncmVzcG9uc2VUeXBlJywgJ3hzcmZDb29raWVOYW1lJyxcclxuICAgICAgICAneHNyZkhlYWRlck5hbWUnLCAnb25VcGxvYWRQcm9jZXNzJywgJ29uRG93bmxvYWRQcm9ncmVzcycsICdtYXhDb250ZW50TGVuZ3RoJyxcclxuICAgICAgICAndmFsaWRhdGVTdGF0dXMnLCAnbWF4UmVkaXJlY3RzJywgJ2h0dHBBZ2VudCcsICdodHRwc0FnZW50JywgJ2NhbmNlbFRva2VuJyxcclxuICAgICAgICAnc29ja2V0UGF0aCdcclxuICAgIF0sIGZ1bmN0aW9uIGRlZmF1bHRUb0NvbmZpZzIocHJvcCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNvbmZpZzFbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzFbcHJvcF07XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IG1lcmdlQ29uZmlnO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgY3JlYXRlRXJyb3JfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jcmVhdGVFcnJvclwiKSk7XHJcbi8qKlxyXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cclxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxyXG4gKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlLlxyXG4gKi9cclxuZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpIHtcclxuICAgIHZhciB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcclxuICAgIGlmICh2YWxpZGF0ZVN0YXR1cyB8fCB2YWxpZGF0ZVN0YXR1cyhyZXNwb25zZS5zdGF0dXMpKSB7XHJcbiAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZWplY3QoY3JlYXRlRXJyb3JfMS5kZWZhdWx0KCdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsIHJlc3BvbnNlLmNvbmZpZywgbnVsbCwgcmVzcG9uc2UucmVxdWVzdCwgcmVzcG9uc2UpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBzZXR0bGU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBAYXV0aG9yIEpvLmdlbFxyXG4gKiBAZGF0ZSAyMDE5LzgvMjAgMDAyMFxyXG4gKioqKioqKioqKioqKioqKioqKioqKiovXHJcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xyXG4vKipcclxuICogQGRlc2Mg6L2s5o2i6K+35rGC5oiW5ZON5bqU55qE5pWw5o2uXHJcbiAqIEBwYXJhbSBkYXRhIHtPYmplY3R8U3RyaW5nfSDopoHovazmjaLnmoTmlbDmja5cclxuICogQHBhcmFtIGhlYWRlcnMge0FycmF5fSDor7fmsYLmiJblk43lupTnmoTlpLRcclxuICogQHBhcmFtIGZucyB7QXJyYXl8RnVuY3Rpb2595Y2V5Liq5Ye95pWw5oiW5Ye95pWw5pWw57uEXHJcbiAqIEByZXR1cm5zICog6L2s5o2i5ZCO55qE5pWw5o2uIHRvZG9cclxuICogKi9cclxuZnVuY3Rpb24gdHJhbnNmb3JtRGF0YShkYXRhLCBoZWFkZXJzLCBmbnMpIHtcclxuICAgIHV0aWxzXzEuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xyXG4gICAgICAgIGRhdGEgPSBmbihkYXRhLCBoZWFkZXJzKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gdHJhbnNmb3JtRGF0YTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XHJcbnZhciBub3JtYWxpemVIZWFkZXJOYW1lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vaGVhZGVycy9ub3JtYWxpemVIZWFkZXJOYW1lXCIpKTtcclxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xyXG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcbn07XHJcbi8vIOiuvue9rkNvbnRlbnQgVHlwZe+8jOWmguaenOayoeacieiuvue9rueahOivnSDnmoTlh73mlbBcclxuZnVuY3Rpb24gc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsIHZhbHVlKSB7XHJcbiAgICBpZiAoIXV0aWxzXzEuaXNVbmRlZmluZWQoaGVhZGVycykgJiYgdXRpbHNfMS5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcclxuICAgICAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xyXG4gICAgfVxyXG59XHJcbi8vIOiOt+WPlum7mOiupOeahOmAgumFjeWZqFxyXG5mdW5jdGlvbiBnZXREZWZhdWx0QWRhcHRlcigpIHtcclxuICAgIHZhciBhZGFwdGVyID0gdW5kZWZpbmVkO1xyXG4gICAgLy8g6ZKI5a+5bm9kZS5qc++8jOWNleafkOenjeaDheWGteS4i3Byb2Nlc3Mg5pivW29iamVjdCBvYmplY3RdXHJcbiAgICBpZiAodHlwZW9mIHByb2Nlc3MgIT09IFwidW5kZWZpbmVkXCIgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXScpIHtcclxuICAgICAgICBjb25zb2xlLmluZm8oJ2lzIE5vZGUganM/Jyk7XHJcbiAgICAgICAgYWRhcHRlciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gX19pbXBvcnRTdGFyKHJlcXVpcmUoJy4vYWRhcHRlcnMvaHR0cCcpKTsgfSk7IH07XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKCdpcyBicm93c2VyJyk7XHJcbiAgICAgICAgLy8g6ZKI5a+55rWP6KeI5Zmo5L2/55SoWEhSIOmAgumFjeWZqFxyXG4gICAgICAgIGFkYXB0ZXIgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9faW1wb3J0U3RhcihyZXF1aXJlKCcuL2FkYXB0ZXJzL3hocicpKTsgfSk7IH07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhZGFwdGVyID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBfX2ltcG9ydFN0YXIocmVxdWlyZSgnLi9hZGFwdGVycy9odHRwJykpOyB9KTsgfTtcclxuICAgICAgICBjb25zb2xlLmluZm8oJ+aXoOazleaNleaNieWIsOaEj+WklueahOmAgumFjeWZqH5+fn5+Jyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYWRhcHRlcjtcclxufVxyXG4vLyDlo7DmmI5kZWZhdWx0cyDlr7nosaFcclxudmFyIGRlZmF1bHRzID0ge1xyXG4gICAgYWRhcHRlcjogZ2V0RGVmYXVsdEFkYXB0ZXIoKSxcclxuICAgIC8vIHJlcXVlc3TovazmjaLlmahcclxuICAgIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcclxuICAgICAgICAgICAgbm9ybWFsaXplSGVhZGVyTmFtZV8xLmRlZmF1bHQoaGVhZGVycywgJ0FjY2VwdCcpO1xyXG4gICAgICAgICAgICBub3JtYWxpemVIZWFkZXJOYW1lXzEuZGVmYXVsdChoZWFkZXJzLCAnQ29udGVudC1UeXBlJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbygn6L+Z5LiqREFUQTonLCBkYXRhKTtcclxuICAgICAgICAgICAgLy8g56ym5ZCIZm9ybURhdGEgQXJyYXlCdWZmZXIgU3RyZWFtIEZpbGUgQmxvYiDliJnov5Tlm55kYXRh5pys5L2TXHJcbiAgICAgICAgICAgIGlmICh1dGlsc18xLmlzRm9ybURhdGEoZGF0YSkgfHxcclxuICAgICAgICAgICAgICAgIHV0aWxzXzEuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxyXG4gICAgICAgICAgICAgICAgdXRpbHNfMS5pc0J1ZmZlcihkYXRhKSB8fFxyXG4gICAgICAgICAgICAgICAgdXRpbHNfMS5pc1N0cmVhbShkYXRhKSB8fFxyXG4gICAgICAgICAgICAgICAgdXRpbHNfMS5pc0ZpbGUoZGF0YSkgfHxcclxuICAgICAgICAgICAgICAgIHV0aWxzXzEuaXNCbG9iKGRhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDlpoLmnpzmmK9BcnJheUJ1ZmZlclZpZXdcclxuICAgICAgICAgICAgaWYgKHV0aWxzXzEuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5idWZmZXI7XHJcbiAgICAgICAgICAgIGlmICh1dGlsc18xLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04Jyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS50b1N0cmluZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodXRpbHNfMS5pc09iamVjdChkYXRhKSkge1xyXG4gICAgICAgICAgICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQtdXRmLTgnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9XSxcclxuICAgIC8vIHJlc3BvbnNlIOi9rOaNouWZqFxyXG4gICAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbygn5ZON5bqUZGF0Ye+8micsIGRhdGEpO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1dLFxyXG4gICAgLypcclxuICAgICog6K6+572u6LaF5pe255qE5q+r56eSXHJcbiAgICAqIOiuvue9ruS4ujDliJnmsqHmnInliJvlu7rotoXml7ZcclxuICAgICogKi9cclxuICAgIHRpbWVvdXQ6IDAsXHJcbiAgICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxyXG4gICAgeHNyZkhlYWRlck5hbWU6ICdYLVhTUkYtVE9LRU4nLFxyXG4gICAgbWF4Q29udGVudExlbmd0aDogLTEsXHJcbiAgICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xyXG4gICAgfVxyXG59O1xyXG5kZWZhdWx0cy5oZWFkZXJzID0ge1xyXG4gICAgY29tbW9uOiB7XHJcbiAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLHRleHQvcGxhaW4sKi8qJ1xyXG4gICAgfVxyXG59O1xyXG51dGlsc18xLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcclxuICAgIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xyXG59KTtcclxudXRpbHNfMS5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xyXG4gICAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0gX19hc3NpZ24oe30sIERFRkFVTFRfQ09OVEVOVF9UWVBFKTtcclxufSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IGRlZmF1bHRzO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcclxuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xyXG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpXHJcbiAgICAgICAgLnJlcGxhY2UoLyU0MC9naSwgJ0AnKVxyXG4gICAgICAgIC5yZXBsYWNlKC8lM0EvZ2ksICc6JylcclxuICAgICAgICAucmVwbGFjZSgvJTI0L2csICckJylcclxuICAgICAgICAucmVwbGFjZSgvJTJDL2dpLCAnLCcpXHJcbiAgICAgICAgLnJlcGxhY2UoLyUyMC9nLCAnKycpXHJcbiAgICAgICAgLnJlcGxhY2UoLyU1Qi9naSwgJ1snKVxyXG4gICAgICAgIC5yZXBsYWNlKC8lNUQvZ2ksICddJyk7XHJcbn1cclxuLyoqXHJcbiAqIEBkZXNjIOmAmui/h+WcqOacq+WwvumZhOWKoOWPguaVsOadpeaehOW7ulVSTFxyXG4gKiBAcGFyYW0gdXJsXHJcbiAqIEBwYXJhbSBwYXJhbXNcclxuICogQHBhcmFtIHBhcmFtc1NlcmlhbGl6ZXJcclxuICovXHJcbmZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XHJcbiAgICBpZiAoIXBhcmFtcylcclxuICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgdmFyIHNlcmlhbGl6ZWRQYXJhbXMgPSB1bmRlZmluZWQ7XHJcbiAgICBpZiAocGFyYW1zU2VyaWFsaXplcikge1xyXG4gICAgICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXNTZXJpYWxpemVyKHBhcmFtcyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh1dGlsc18xLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcclxuICAgICAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB2YXIgcGFydHNfMSA9IFtdO1xyXG4gICAgICAgIHV0aWxzXzEuZm9yRWFjaChwYXJhbXMsIGZ1bmN0aW9uIHNlcmlhbGl6ZSh2YWwsIGtleSkge1xyXG4gICAgICAgICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAodXRpbHNfMS5pc0FycmF5KHZhbCkpIHtcclxuICAgICAgICAgICAgICAgIGtleSA9IGtleSArICdbXSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YWwgPSBbdmFsXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB1dGlsc18xLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcclxuICAgICAgICAgICAgICAgIGlmICh1dGlsc18xLmlzRGF0ZSh2KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh1dGlsc18xLmlzT2JqZWN0KHYpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcGFydHNfMS5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHYpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcnRzXzEuam9pbignJicpO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlcmlhbGl6ZWRQYXJhbXMpIHtcclxuICAgICAgICB2YXIgaGFzaE1hcmtJbmRleCA9IHVybC5pbmRleE9mKCcjJyk7XHJcbiAgICAgICAgaWYgKGhhc2hNYXJrSW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHVybCA9IHVybC5zbGljZSgwLCBoYXNoTWFya0luZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVybDtcclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBidWlsZFVSTDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIEBkZXNjIOmAmui/h+e7hOWQiOaMh+WumueahFVSTOWIm+W7uuaWsOeahFVSTFxyXG4gKiBAYXV0aG9yIEpvLmdlbFxyXG4gKiBAZGF0ZSAyMDE5LzgvMjAgMDAyMFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkxcclxuICogQHJldHVybnMge3N0cmluZ31cclxuICoqKioqKioqKioqKioqKioqKioqKioqL1xyXG5leHBvcnRzLmRlZmF1bHQgPSAoZnVuY3Rpb24gKGJhc2VVUkwsIHJlbGF0aXZlVVJMKSB7XHJcbiAgICByZXR1cm4gcmVsYXRpdmVVUkxcclxuICAgICAgICA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKVxyXG4gICAgICAgIDogYmFzZVVSTDtcclxufSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSAodXRpbHNfMS5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cclxuICAgIC8vIOagh+WHhua1j+iniOWZqGVudnPmlK/mjIHmlofmoaMuY29va2llXHJcbiAgICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjb29raWUgPSBbXTtcclxuICAgICAgICAgICAgICAgIGNvb2tpZS5wdXNoKG5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcclxuICAgICAgICAgICAgICAgIGlmICh1dGlsc18xLmlzTnVtYmVyKGV4cGlyZXMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29va2llLnB1c2goJ2V4cGlyZXM9JyArIG5ldyBEYXRlKGV4cGlyZXMpLnRvVVRDU3RyaW5nKCkpOyAvLyDmupDnoIHov5nph4zmmK9oaXRvR01UU3RyaW5nXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodXRpbHNfMS5pc1N0cmluZyhwYXRoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdwYXRoPScgKyBwYXRoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh1dGlsc18xLmlzU3RyaW5nKGRvbWFpbikpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb29raWUucHVzaCgnZG9tYWluPScgKyBkb21haW4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdzZWN1cmUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKG1hdGNoID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSA6IG51bGwpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndyaXRlKG5hbWUsICcnLCBEYXRlLm5vdygpIC0gODY0MDAwMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH0pKCkgOlxyXG4gICAgLy8g6Z2e5qCH5YeG5rWP6KeI5ZmoZW5277yId2ViIHdvcmtlcnPvvIxyZWFjdCBuYXRpdmXvvInnvLrkuY/miYDpnIDnmoTmlK/mjIHjgIJcclxuICAgIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKCkgeyB9LFxyXG4gICAgICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcclxuICAgICAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7IH0sXHJcbiAgICAgICAgfTtcclxuICAgIH0pKCkpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuLyoqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIEBkZXNjIOWFtuWuniBub2Rl546v5aKD55qEcGF0aC5pc0Fic29sdXRlIOS5n+aYr+aPkOS+m+S6huS4gOS4quaWueazleeahFxyXG4gKiBAZGVzYyDliKTmlq3mmK/lkKbnu53lr7not6/lvoRcclxuICogQGF1dGhvciBKby5nZWxcclxuICogQGRhdGUgMjAxOS84LzIwIDAwMjBcclxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICoqKioqKioqKioqKioqKioqKioqKioqL1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IChmdW5jdGlvbiAodXJsKSB7XHJcbiAgICByZXR1cm4gL14oW2Etel1bYS16XFxkXFwrXFwtXFwuXSo6KT9cXC9cXC8vaS50ZXN0KHVybCk7XHJcbn0pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcclxudmFyIHV0aWxfMSA9IHJlcXVpcmUoXCJ1dGlsXCIpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSAodXRpbHNfMS5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cclxuICAgIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBoYXZlIGZ1bGwgc3VwcG9ydCBvZiB0aGUgQVBJcyBuZWVkZWQgdG8gdGVzdFxyXG4gICAgLy8gd2hldGhlciB0aGUgcmVxdWVzdCBVUkwgaXMgb2YgdGhlIHNhbWUgb3JpZ2luIGFzIGN1cnJlbnQgbG9jYXRpb24uXHJcbiAgICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xyXG4gICAgICAgIHZhciBtc2llID0gLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuICAgICAgICB2YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgdmFyIG9yaWdpblVSTCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAZGVzYyDop6PmnpB1cmxcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsKSB7XHJcbiAgICAgICAgICAgIHZhciBocmVmID0gdXJsO1xyXG4gICAgICAgICAgICBpZiAobXNpZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gSUXpnIDopoHorr7nva7kuKTmrKHlsZ7mgKfmnaXop4TojIPljJblsZ7mgKdcclxuICAgICAgICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xyXG4gICAgICAgICAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XHJcbiAgICAgICAgICAgIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXHJcbiAgICAgICAgICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxyXG4gICAgICAgICAgICAgICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcclxuICAgICAgICAgICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcclxuICAgICAgICAgICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXHJcbiAgICAgICAgICAgICAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXHJcbiAgICAgICAgICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxyXG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgPyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6ICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9yaWdpblVSTCA9IHJlc29sdmVVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBkZXNjIOehruWumlVSTOaYr+WQpuS4juW9k+WJjeS9jee9ruWFseS6q+WQjOS4gOa6kFxyXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSByZXF1ZXN0VVJMXHJcbiAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKHJlcXVlc3RVUkwpIHtcclxuICAgICAgICAgICAgdmFyIHBhcnNlZCA9ICh1dGlsXzEuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XHJcbiAgICAgICAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiYgcGFyc2VkLmhvc3QgPT09IG9yaWdpblVSTC5ob3N0KTtcclxuICAgICAgICB9O1xyXG4gICAgfSkoKSA6XHJcbiAgICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH07XHJcbiAgICB9KSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG4vKioqKioqKioqKioqKioqKioqKioqKipcclxuICogQG5hbWUgVFMgRklMRVxyXG4gKiBAYXV0aG9yIEpvLmdlbFxyXG4gKiBAZGF0ZSAyMDE5LzgvMTkgMDAxOSDkuIrljYggMTE6MzFcclxuICoqKioqKioqKioqKioqKioqKioqKioqL1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xyXG5mdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XHJcbiAgICB1dGlsc18xLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xyXG4gICAgICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgaGVhZGVyc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgZGVsZXRlIGhlYWRlcnNbbmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gbm9ybWFsaXplSGVhZGVyTmFtZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XHJcbi8vIG5vZGXlv73nlaXlhbbph43lpI3pobnnmoTlpLRcclxuLy8gYy5mLiBodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX21lc3NhZ2VfaGVhZGVyc1xyXG52YXIgaWdub3JlRHVwbGljYXRlT2YgPSBbXHJcbiAgICAnYWdlJywgJ2F1dGhvcml6YXRpb24nLCAnY29udGVudC1sZW5ndGgnLCAnY29udGVudC10eXBlJywgJ2V0YWcnLFxyXG4gICAgJ2V4cGlyZXMnLCAnZnJvbScsICdob3N0JywgJ2lmLW1vZGlmaWVkLXNpbmNlJywgJ2lmLXVubW9kaWZpZWQtc2luY2UnLFxyXG4gICAgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxyXG4gICAgJ3JlZmVyZXInLCAncmV0cnktYWZ0ZXInLCAndXNlci1hZ2VudCdcclxuXTtcclxuLyoqXHJcbiAqICBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XHJcbiAqIGBgYGpzXHJcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXHJcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxyXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXHJcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXHJcbiAqIGBgYFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gaGVhZGVycyDpnIDopoHop6PmnpDnmoRIZWFkZXJzXHJcbiAqIEByZXR1cm5zIHtvYmplY3R9IOaKikhlYWRlcuino+aekOS4uuWvueixoVxyXG4gKi9cclxuZXhwb3J0cy5kZWZhdWx0ID0gKGZ1bmN0aW9uIChoZWFkZXJzKSB7XHJcbiAgICB2YXIgcGFyc2VkID0ge307XHJcbiAgICB2YXIga2V5ID0gdW5kZWZpbmVkO1xyXG4gICAgdmFyIHZhbCA9IHVuZGVmaW5lZDtcclxuICAgIHZhciBpID0gdW5kZWZpbmVkO1xyXG4gICAgaWYgKCFoZWFkZXJzKVxyXG4gICAgICAgIHJldHVybiBwYXJzZWQ7XHJcbiAgICB1dGlsc18xLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XHJcbiAgICAgICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xyXG4gICAgICAgIGtleSA9IHV0aWxzXzEudHJpbShsaW5lLnN1YnN0cigwLCBpKSkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICB2YWwgPSB1dGlsc18xLnRyaW0obGluZS5zdWJzdHIoaSArIDEpKTtcclxuICAgICAgICBpZiAoa2V5KSB7XHJcbiAgICAgICAgICAgIGlmIChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZi5pbmRleE9mKGtleSkgPj0gMClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKGtleSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mLmluZGV4T2Yoa2V5KSA+PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZFtrZXldID0gKHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gOiBbXSkuY29uY2F0KFt2YWxdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBwYXJzZWQ7XHJcbn0pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICpcclxuICogQGRlc2Mg55So5LqO6LCD55So5Ye95pWw5ZKM5omp5bGV5Y+C5pWw5pWw57uE55qE6K+t5rOV57uT5p6E44CCXHJcbiAqIOW4uOingeeahOeUqOS+iyBgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5YFxyXG4gKlxyXG4gKiBgYGBqc1xyXG4gKiBmdW5jdGlvbiBmKHgseSx6KXt9XHJcbiAqIGNvbnN0IGFyZ3M9WzEsMiwzXVxyXG4gKiBmLmFwcGx5KG51bGwsYXJncylcclxuICpcclxuICogYGBgXHJcbiAqIOS9v+eUqGBzcHJlYWRgIOmHjeWGmeatpOS+i1xyXG4gKlxyXG4gKiBgYGBqc1xyXG4gKiBzcHJlYWQoZnVuY3Rpb24oeCx5LHope30pKFsxLDIsM10pXHJcbiAqIGBgYFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cclxuICpcclxuICogKi9cclxuZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gd2FycChhcnIpIHtcclxuICAgICAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gc3ByZWFkO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKioqKioqKioqKioqKioqKioqKioqKipcclxuICogQGF1dGhvciBKby5nZWxcclxuICogQGRhdGUgMjAxOS84LzI5IDAwMjlcclxuICoqKioqKioqKioqKioqKioqKioqKioqL1xyXG52YXIgYXhpb3NfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9heGlvc1wiKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IGF4aW9zXzEuZGVmYXVsdDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqQGRlc2MgYXhpb3Mg5bel5YW357G75Ye95pWwXHJcbiAqXHJcbiAqL1xyXG52YXIgaXNfYnVmZmVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImlzLWJ1ZmZlclwiKSk7XHJcbmV4cG9ydHMuaXNCdWZmZXIgPSBpc19idWZmZXJfMS5kZWZhdWx0O1xyXG4vKipcclxuICogQGRlc2Mg5Yik5pat5YC85piv5ZCm5piv5pWw57uEXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWxcclxuICogQHJldHVybnMge2Jvb2xlYW59IOaYr+aVsOe7hCx0cnVl77yM5ZCm5YiZZmFsc2VcclxuICovXHJcbmZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XHJcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheV0nO1xyXG59XHJcbmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XHJcbi8qKlxyXG4gKiBAZGVzYyDliKTmlq3mmK/lkKbmmK9BcnJheUJ1ZmZlclxyXG4gKiBAcGFyYW0gdmFsXHJcbiAqIEByZXR1cm5zIOaYryDliJl0cnVl77yM5ZCm5YiZZmFsc2VcclxuICovXHJcbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIodmFsKSB7XHJcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nO1xyXG59XHJcbmV4cG9ydHMuaXNBcnJheUJ1ZmZlciA9IGlzQXJyYXlCdWZmZXI7XHJcbi8qKlxyXG4gKiBAZGVzYyDliKTmlq3mmK/lkKZmb3JtRGF0YVxyXG4gKi9cclxuZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWwpIHtcclxuICAgIHJldHVybiAodHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJykgJiYgKHZhbCBpbnN0YW5jZW9mIEZvcm1EYXRhKTtcclxufVxyXG5leHBvcnRzLmlzRm9ybURhdGEgPSBpc0Zvcm1EYXRhO1xyXG4vKipcclxuICogQGRlc2Mg5Yik5patdmFs5piv5ZCm5pivQXJyYXlCdWZmZXLnmoTop4blm75cclxuICogQHBhcmFtIHtPYmplY3R9IHZhbFxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXJWaWV3KHZhbCkge1xyXG4gICAgdmFyIHJlc3VsdDtcclxuICAgIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcclxuICAgICAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJlc3VsdCA9IHZhbCAmJiB2YWwuYnVmZmVyICYmICh2YWwuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5leHBvcnRzLmlzQXJyYXlCdWZmZXJWaWV3ID0gaXNBcnJheUJ1ZmZlclZpZXc7XHJcbi8qKlxyXG4gKiBAZGVzYyDliKTmlq3lrZfnrKbkuLJcclxuICogQHBhcmFtIHtzdHJpbmd9IHZhbFxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICpcclxuICovXHJcbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xyXG59XHJcbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZztcclxuLyoqXHJcbiAqIEBkZXNjIOWIpOaWreaYr+aVsOWtl+exu+Wei1xyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInO1xyXG59XHJcbmV4cG9ydHMuaXNOdW1iZXIgPSBpc051bWJlcjtcclxuLyoqXHJcbiAqIEBkZXNjIOWIpOaWreaYr3VuZGVmaW5lZOexu+Wei1xyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnO1xyXG59XHJcbmV4cG9ydHMuaXNVbmRlZmluZWQgPSBpc1VuZGVmaW5lZDtcclxuLyoqXHJcbiAqIEBkZXNjIOWIpOaWreaYr+WQpuaYr29iamVjdFxyXG4gKlxyXG4gKi9cclxuZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XHJcbiAgICByZXR1cm4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xyXG59XHJcbmV4cG9ydHMuaXNPYmplY3QgPSBpc09iamVjdDtcclxuLyoqXHJcbiAqIEBkZXNjIOWIpOaWreaYr0RhdGXnsbvlnotcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XHJcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XHJcbn1cclxuZXhwb3J0cy5pc0RhdGUgPSBpc0RhdGU7XHJcbi8qKlxyXG4gKiBAZGVzYyDliKTmlq3mmK9maWxlIOexu+Wei1xyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmZ1bmN0aW9uIGlzRmlsZSh2YWwpIHtcclxuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcclxufVxyXG5leHBvcnRzLmlzRmlsZSA9IGlzRmlsZTtcclxuLyoqXHJcbiAqIEBkZXNjIOWIpOaWreaYr2Jsb2LnsbvlnotcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XHJcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBCbG9iXSc7XHJcbn1cclxuZXhwb3J0cy5pc0Jsb2IgPSBpc0Jsb2I7XHJcbi8qKlxyXG4gKiBAZGVzYyDliKTmlq3mmK9mdW5jdGlvblxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XHJcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xyXG59XHJcbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XHJcbi8qKlxyXG4gKiBAZGVzYyDliKTmlq1zdHJlYW1cclxuICovXHJcbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xyXG4gICAgcmV0dXJuIGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XHJcbn1cclxuZXhwb3J0cy5pc1N0cmVhbSA9IGlzU3RyZWFtO1xyXG4vKipcclxuICogQGRlc2Mg5Yik5pat5pivVVJMIFNlYXJjaCBQYXJhbXNcclxuICpcclxuICovXHJcbmZ1bmN0aW9uIGlzVVJMU2VhcmNoUGFyYW1zKHZhbCkge1xyXG4gICAgcmV0dXJuICh0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSAndW5kZWZpbmVkJykgJiYgKHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcyk7XHJcbn1cclxuZXhwb3J0cy5pc1VSTFNlYXJjaFBhcmFtcyA9IGlzVVJMU2VhcmNoUGFyYW1zO1xyXG4vKipcclxuICogQGRlc2Mg5Yig6Zmk5byA5aeL5Yiw57uT5p2f55qE5aSa5L2Z56m655m9XHJcbiAqL1xyXG5mdW5jdGlvbiB0cmltKHN0cikge1xyXG4gICAgcmV0dXJuIChzdHIgfHwgJycpLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xyXG59XHJcbmV4cG9ydHMudHJpbSA9IHRyaW07XHJcbi8qKlxyXG4gKiBAZGVzYyDmo4Dmn6XmmK/lkKblhYHorrjlnKjmoIflh4bnmoTmtY/op4jlmajkuIpcclxuICovXHJcbmZ1bmN0aW9uIGlzU3RhbmRhcmRCcm93c2VyRW52KCkge1xyXG4gICAgaWYgKCh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJykgJiYgKG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnIHx8IG5hdmlnYXRvci5wcm9kdWN0ID09PSAnTmF0aXZlU2NyaXB0JyB8fCBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05TJykpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpO1xyXG59XHJcbmV4cG9ydHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYgPSBpc1N0YW5kYXJkQnJvd3NlckVudjtcclxuLyoqXHJcbiAqIEBkZXNjIOi/reS7o+S4uuavj+S4qumhueiwg+eUqOWHveaVsOeahOaVsOe7hOaIluWvueixoeOAglxyXG4gKiDlpoLmnpzigJxvYmrigJ3mmK/kuIDkuKrmlbDnu4TvvIzliJnosIPnlKjmlbDnu4Tlm57osIPvvIzkvKDpgJLmr4/kuKrpobnnmoTlgLzjgIHntKLlvJXlkozlrozmlbTmlbDnu4TjgIJcclxuICog5aaC5p6c4oCcb2Jq4oCd5piv5LiA5Liq5a+56LGh77yM5YiZ5bCG6LCD55So5Zue6LCD5p2l5Lyg6YCS5q+P5Liq5bGe5oCn55qE5YC844CB6ZSu5ZKM5a6M5pW05a+56LGh44CCXHJcbiAqXHJcbiAqIEBwYXJhbSBvYmog6KaB6L+t5Luj55qE5a+56LGhXHJcbiAqIEBwYXJhbSBmbiDkuLrmr4/kuKrpobnosIPnlKjnmoTlm57osINcclxuICpcclxuICovXHJcbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBmbikge1xyXG4gICAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIOW8uuWItui9rOaNouaVsOe7hO+8jOWmguaenOS4jeaYr+aVsOe7hOeahOivnVxyXG4gICAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgb2JqID0gW29ial07XHJcbiAgICB9XHJcbiAgICBpZiAoaXNBcnJheShvYmopKSB7XHJcbiAgICAgICAgLy8g6L+t5Luj5pWw57uEXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIC8vIOi/reS7o+WvueixoWtleVxyXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcclxuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcclxuICAgICAgICAgICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLmZvckVhY2ggPSBmb3JFYWNoO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhc3NlcnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHJlYW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidHR5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dGlsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInpsaWJcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==