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
exports.httpAdapter = function httpAdapter(config) {
    return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {
        var timer = undefined;
        var resolve = function (value) {
            clearTimeout(timer);
            resolvePromise(value);
        };
        var reject = function (value) {
            clearTimeout(timer);
            rejectPromise(value);
        };
        var data = config.data;
        console.info('44:', data);
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
        else if (config.maxRedirects === 0) {
            transport = isHttpsProxy ? https_1.default : http_1.default;
        }
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
            // bug todo 这里应该有一个config 的！！！!!
            console.log('====', res.config, '=====');
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
            console.log('开始在这里丢失了response-config：', res.config);
            //使用interface
            var response = {
                status: res.statusCode,
                statusText: res.statusMessage,
                headers: res.headers,
                config: res.config,
                request: lastRequest
            };
            if (config.responseType === 'stream') {
                console.info('218:', response.data);
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
                    console.info('244:', response.data);
                    settle_1.default(resolve, reject, response);
                });
            }
        });
        // 处理错误
        req.on('error', function (err) {
            if (req.aborted)
                return;
            console.info("处理错误:", err);
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
        // 发送请求
        if (utils_1.isStream(data)) {
            data.on('error', function (err) {
                reject(enhanceError_1.default(err, config, null, req));
            }).pipe(req); // 看看这个stream 的pipe用法
        }
        else
            req.end(data);
    });
};


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
exports.xhrAdapter = function xhrAdapter(config) {
    return new Promise(function (resolve, reject) {
        var requestData = config.data;
        console.info('22:', config);
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
            // The request ored out and we didn't get a response, this will be
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
};


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
x.get('http://183.131.202.13:8081', { data: { query: { kw: "baidu" } } })
    .then(function (x) {
    console.info("res:", x);
})
    .catch(function (err) {
    console.info("err-11:", err);
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
    throwIfCancellationRequested(config);
    // 支持baseURL config
    if (config.baseURL && !isAbsoluteURL_1.default(config.url)) {
        config.url = combineURLs_1.default(config.baseURL, config.url);
    }
    // 确保headers 存在
    config.headers = config.headers || {};
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
        console.info('xxxL:', response);
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
    // console.log("*999:",response)
    // todo response 没有config！！！
    console.log("response.config:", response.config);
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
// todo 这块地方的require 怎么去简写好点呢？
function getDefaultAdapter() {
    var adapter = undefined;
    // 针对node.js，单某种情况下process 是[object object]
    if (typeof process !== "undefined" && Object.prototype.toString.call(process) === '[object process]') {
        console.info('is NodeJs');
        var httpAdapter_1 = __webpack_require__(/*! ./adapters/http */ "./src/adapters/http.ts").httpAdapter;
        adapter = httpAdapter_1;
        adapter()
            .then(function (x) {
            console.info("x:", x);
        })
            .catch(function (err) {
            console.info("err:", err);
        });
        console.info('===================');
    }
    else if (typeof XMLHttpRequest !== 'undefined') {
        console.info('is browser');
        // 针对浏览器使用XHR 适配器
        var xhrAdapter = __webpack_require__(/*! ./adapters/xhr */ "./src/adapters/xhr.ts").xhrAdapter;
        adapter = xhrAdapter;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19kZWJ1Z0AzLjIuNkBkZWJ1Zy9zcmMvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2RlYnVnQDMuMi42QGRlYnVnL3NyYy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19kZWJ1Z0AzLjIuNkBkZWJ1Zy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19kZWJ1Z0AzLjIuNkBkZWJ1Zy9zcmMvbm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2ZvbGxvdy1yZWRpcmVjdHNAMS43LjBAZm9sbG93LXJlZGlyZWN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2lzLWJ1ZmZlckAyLjAuM0Bpcy1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19tc0AyLjEuMkBtcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlcnMvaHR0cC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlcnMveGhyLnRzIiwid2VicGFjazovLy8uL3NyYy9heGlvcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FuY2VsL0NhbmNlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FuY2VsL0NhbmNlbFRva2VuLnRzIiwid2VicGFjazovLy8uL3NyYy9jYW5jZWwvaXNDYW5jZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvQXhpb3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2NyZWF0ZUVycm9yLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2Rpc3BhdGNoUmVxdWVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9lbmhhbmNlRXJyb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvbWVyZ2VDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvc2V0dGxlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3RyYW5zZm9ybURhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlZmF1bHRzLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWFkZXJzL2J1aWxkVVJMLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWFkZXJzL2NvbWJpbmVVUkxzLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWFkZXJzL2Nvb2tpZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlYWRlcnMvaXNBYnNvbHV0ZVVSTC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVhZGVycy9pc1VSTFNhbWVPcmlnaW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlYWRlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVhZGVycy9wYXJzZUhlYWRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlYWRlcnMvc3ByZWFkLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXNzZXJ0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaHR0cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3RyZWFtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidHR5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXRpbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInpsaWJcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FB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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVDQUF1QyxFQUFFO0FBQy9ELEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsT0FBTztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdExBLG1DOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGdDOzs7Ozs7Ozs7OztBQ0FBLGdDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6ImF4aW9zLXRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbi8qKlxuICogVGhpcyBpcyB0aGUgd2ViIGJyb3dzZXIgaW1wbGVtZW50YXRpb24gb2YgYGRlYnVnKClgLlxuICovXG5leHBvcnRzLmxvZyA9IGxvZztcbmV4cG9ydHMuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5leHBvcnRzLnNhdmUgPSBzYXZlO1xuZXhwb3J0cy5sb2FkID0gbG9hZDtcbmV4cG9ydHMudXNlQ29sb3JzID0gdXNlQ29sb3JzO1xuZXhwb3J0cy5zdG9yYWdlID0gbG9jYWxzdG9yYWdlKCk7XG4vKipcbiAqIENvbG9ycy5cbiAqL1xuXG5leHBvcnRzLmNvbG9ycyA9IFsnIzAwMDBDQycsICcjMDAwMEZGJywgJyMwMDMzQ0MnLCAnIzAwMzNGRicsICcjMDA2NkNDJywgJyMwMDY2RkYnLCAnIzAwOTlDQycsICcjMDA5OUZGJywgJyMwMENDMDAnLCAnIzAwQ0MzMycsICcjMDBDQzY2JywgJyMwMENDOTknLCAnIzAwQ0NDQycsICcjMDBDQ0ZGJywgJyMzMzAwQ0MnLCAnIzMzMDBGRicsICcjMzMzM0NDJywgJyMzMzMzRkYnLCAnIzMzNjZDQycsICcjMzM2NkZGJywgJyMzMzk5Q0MnLCAnIzMzOTlGRicsICcjMzNDQzAwJywgJyMzM0NDMzMnLCAnIzMzQ0M2NicsICcjMzNDQzk5JywgJyMzM0NDQ0MnLCAnIzMzQ0NGRicsICcjNjYwMENDJywgJyM2NjAwRkYnLCAnIzY2MzNDQycsICcjNjYzM0ZGJywgJyM2NkNDMDAnLCAnIzY2Q0MzMycsICcjOTkwMENDJywgJyM5OTAwRkYnLCAnIzk5MzNDQycsICcjOTkzM0ZGJywgJyM5OUNDMDAnLCAnIzk5Q0MzMycsICcjQ0MwMDAwJywgJyNDQzAwMzMnLCAnI0NDMDA2NicsICcjQ0MwMDk5JywgJyNDQzAwQ0MnLCAnI0NDMDBGRicsICcjQ0MzMzAwJywgJyNDQzMzMzMnLCAnI0NDMzM2NicsICcjQ0MzMzk5JywgJyNDQzMzQ0MnLCAnI0NDMzNGRicsICcjQ0M2NjAwJywgJyNDQzY2MzMnLCAnI0NDOTkwMCcsICcjQ0M5OTMzJywgJyNDQ0NDMDAnLCAnI0NDQ0MzMycsICcjRkYwMDAwJywgJyNGRjAwMzMnLCAnI0ZGMDA2NicsICcjRkYwMDk5JywgJyNGRjAwQ0MnLCAnI0ZGMDBGRicsICcjRkYzMzAwJywgJyNGRjMzMzMnLCAnI0ZGMzM2NicsICcjRkYzMzk5JywgJyNGRjMzQ0MnLCAnI0ZGMzNGRicsICcjRkY2NjAwJywgJyNGRjY2MzMnLCAnI0ZGOTkwMCcsICcjRkY5OTMzJywgJyNGRkNDMDAnLCAnI0ZGQ0MzMyddO1xuLyoqXG4gKiBDdXJyZW50bHkgb25seSBXZWJLaXQtYmFzZWQgV2ViIEluc3BlY3RvcnMsIEZpcmVmb3ggPj0gdjMxLFxuICogYW5kIHRoZSBGaXJlYnVnIGV4dGVuc2lvbiAoYW55IEZpcmVmb3ggdmVyc2lvbikgYXJlIGtub3duXG4gKiB0byBzdXBwb3J0IFwiJWNcIiBDU1MgY3VzdG9taXphdGlvbnMuXG4gKlxuICogVE9ETzogYWRkIGEgYGxvY2FsU3RvcmFnZWAgdmFyaWFibGUgdG8gZXhwbGljaXRseSBlbmFibGUvZGlzYWJsZSBjb2xvcnNcbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcblxuZnVuY3Rpb24gdXNlQ29sb3JzKCkge1xuICAvLyBOQjogSW4gYW4gRWxlY3Ryb24gcHJlbG9hZCBzY3JpcHQsIGRvY3VtZW50IHdpbGwgYmUgZGVmaW5lZCBidXQgbm90IGZ1bGx5XG4gIC8vIGluaXRpYWxpemVkLiBTaW5jZSB3ZSBrbm93IHdlJ3JlIGluIENocm9tZSwgd2UnbGwganVzdCBkZXRlY3QgdGhpcyBjYXNlXG4gIC8vIGV4cGxpY2l0bHlcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wcm9jZXNzICYmICh3aW5kb3cucHJvY2Vzcy50eXBlID09PSAncmVuZGVyZXInIHx8IHdpbmRvdy5wcm9jZXNzLl9fbndqcykpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSBkbyBub3Qgc3VwcG9ydCBjb2xvcnMuXG5cblxuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goLyhlZGdlfHRyaWRlbnQpXFwvKFxcZCspLykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gLy8gSXMgd2Via2l0PyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNjQ1OTYwNi8zNzY3NzNcbiAgLy8gZG9jdW1lbnQgaXMgdW5kZWZpbmVkIGluIHJlYWN0LW5hdGl2ZTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LW5hdGl2ZS9wdWxsLzE2MzJcblxuXG4gIHJldHVybiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLldlYmtpdEFwcGVhcmFuY2UgfHwgLy8gSXMgZmlyZWJ1Zz8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzk4MTIwLzM3Njc3M1xuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuY29uc29sZSAmJiAod2luZG93LmNvbnNvbGUuZmlyZWJ1ZyB8fCB3aW5kb3cuY29uc29sZS5leGNlcHRpb24gJiYgd2luZG93LmNvbnNvbGUudGFibGUpIHx8IC8vIElzIGZpcmVmb3ggPj0gdjMxP1xuICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1Rvb2xzL1dlYl9Db25zb2xlI1N0eWxpbmdfbWVzc2FnZXNcbiAgdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2ZpcmVmb3hcXC8oXFxkKykvKSAmJiBwYXJzZUludChSZWdFeHAuJDEsIDEwKSA+PSAzMSB8fCAvLyBEb3VibGUgY2hlY2sgd2Via2l0IGluIHVzZXJBZ2VudCBqdXN0IGluIGNhc2Ugd2UgYXJlIGluIGEgd29ya2VyXG4gIHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9hcHBsZXdlYmtpdFxcLyhcXGQrKS8pO1xufVxuLyoqXG4gKiBDb2xvcml6ZSBsb2cgYXJndW1lbnRzIGlmIGVuYWJsZWQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5cbmZ1bmN0aW9uIGZvcm1hdEFyZ3MoYXJncykge1xuICBhcmdzWzBdID0gKHRoaXMudXNlQ29sb3JzID8gJyVjJyA6ICcnKSArIHRoaXMubmFtZXNwYWNlICsgKHRoaXMudXNlQ29sb3JzID8gJyAlYycgOiAnICcpICsgYXJnc1swXSArICh0aGlzLnVzZUNvbG9ycyA/ICclYyAnIDogJyAnKSArICcrJyArIG1vZHVsZS5leHBvcnRzLmh1bWFuaXplKHRoaXMuZGlmZik7XG5cbiAgaWYgKCF0aGlzLnVzZUNvbG9ycykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBjID0gJ2NvbG9yOiAnICsgdGhpcy5jb2xvcjtcbiAgYXJncy5zcGxpY2UoMSwgMCwgYywgJ2NvbG9yOiBpbmhlcml0Jyk7IC8vIFRoZSBmaW5hbCBcIiVjXCIgaXMgc29tZXdoYXQgdHJpY2t5LCBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG90aGVyXG4gIC8vIGFyZ3VtZW50cyBwYXNzZWQgZWl0aGVyIGJlZm9yZSBvciBhZnRlciB0aGUgJWMsIHNvIHdlIG5lZWQgdG9cbiAgLy8gZmlndXJlIG91dCB0aGUgY29ycmVjdCBpbmRleCB0byBpbnNlcnQgdGhlIENTUyBpbnRvXG5cbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxhc3RDID0gMDtcbiAgYXJnc1swXS5yZXBsYWNlKC8lW2EtekEtWiVdL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgIGlmIChtYXRjaCA9PT0gJyUlJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGluZGV4Kys7XG5cbiAgICBpZiAobWF0Y2ggPT09ICclYycpIHtcbiAgICAgIC8vIFdlIG9ubHkgYXJlIGludGVyZXN0ZWQgaW4gdGhlICpsYXN0KiAlY1xuICAgICAgLy8gKHRoZSB1c2VyIG1heSBoYXZlIHByb3ZpZGVkIHRoZWlyIG93bilcbiAgICAgIGxhc3RDID0gaW5kZXg7XG4gICAgfVxuICB9KTtcbiAgYXJncy5zcGxpY2UobGFzdEMsIDAsIGMpO1xufVxuLyoqXG4gKiBJbnZva2VzIGBjb25zb2xlLmxvZygpYCB3aGVuIGF2YWlsYWJsZS5cbiAqIE5vLW9wIHdoZW4gYGNvbnNvbGUubG9nYCBpcyBub3QgYSBcImZ1bmN0aW9uXCIuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5cbmZ1bmN0aW9uIGxvZygpIHtcbiAgdmFyIF9jb25zb2xlO1xuXG4gIC8vIFRoaXMgaGFja2VyeSBpcyByZXF1aXJlZCBmb3IgSUU4LzksIHdoZXJlXG4gIC8vIHRoZSBgY29uc29sZS5sb2dgIGZ1bmN0aW9uIGRvZXNuJ3QgaGF2ZSAnYXBwbHknXG4gIHJldHVybiAodHlwZW9mIGNvbnNvbGUgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihjb25zb2xlKSkgPT09ICdvYmplY3QnICYmIGNvbnNvbGUubG9nICYmIChfY29uc29sZSA9IGNvbnNvbGUpLmxvZy5hcHBseShfY29uc29sZSwgYXJndW1lbnRzKTtcbn1cbi8qKlxuICogU2F2ZSBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblxuZnVuY3Rpb24gc2F2ZShuYW1lc3BhY2VzKSB7XG4gIHRyeSB7XG4gICAgaWYgKG5hbWVzcGFjZXMpIHtcbiAgICAgIGV4cG9ydHMuc3RvcmFnZS5zZXRJdGVtKCdkZWJ1ZycsIG5hbWVzcGFjZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHBvcnRzLnN0b3JhZ2UucmVtb3ZlSXRlbSgnZGVidWcnKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7Ly8gU3dhbGxvd1xuICAgIC8vIFhYWCAoQFFpeC0pIHNob3VsZCB3ZSBiZSBsb2dnaW5nIHRoZXNlP1xuICB9XG59XG4vKipcbiAqIExvYWQgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZ30gcmV0dXJucyB0aGUgcHJldmlvdXNseSBwZXJzaXN0ZWQgZGVidWcgbW9kZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblxuZnVuY3Rpb24gbG9hZCgpIHtcbiAgdmFyIHI7XG5cbiAgdHJ5IHtcbiAgICByID0gZXhwb3J0cy5zdG9yYWdlLmdldEl0ZW0oJ2RlYnVnJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7fSAvLyBTd2FsbG93XG4gIC8vIFhYWCAoQFFpeC0pIHNob3VsZCB3ZSBiZSBsb2dnaW5nIHRoZXNlP1xuICAvLyBJZiBkZWJ1ZyBpc24ndCBzZXQgaW4gTFMsIGFuZCB3ZSdyZSBpbiBFbGVjdHJvbiwgdHJ5IHRvIGxvYWQgJERFQlVHXG5cblxuICBpZiAoIXIgJiYgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmICdlbnYnIGluIHByb2Nlc3MpIHtcbiAgICByID0gcHJvY2Vzcy5lbnYuREVCVUc7XG4gIH1cblxuICByZXR1cm4gcjtcbn1cbi8qKlxuICogTG9jYWxzdG9yYWdlIGF0dGVtcHRzIHRvIHJldHVybiB0aGUgbG9jYWxzdG9yYWdlLlxuICpcbiAqIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2Ugc2FmYXJpIHRocm93c1xuICogd2hlbiBhIHVzZXIgZGlzYWJsZXMgY29va2llcy9sb2NhbHN0b3JhZ2VcbiAqIGFuZCB5b3UgYXR0ZW1wdCB0byBhY2Nlc3MgaXQuXG4gKlxuICogQHJldHVybiB7TG9jYWxTdG9yYWdlfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuXG5mdW5jdGlvbiBsb2NhbHN0b3JhZ2UoKSB7XG4gIHRyeSB7XG4gICAgLy8gVFZNTEtpdCAoQXBwbGUgVFYgSlMgUnVudGltZSkgZG9lcyBub3QgaGF2ZSBhIHdpbmRvdyBvYmplY3QsIGp1c3QgbG9jYWxTdG9yYWdlIGluIHRoZSBnbG9iYWwgY29udGV4dFxuICAgIC8vIFRoZSBCcm93c2VyIGFsc28gaGFzIGxvY2FsU3RvcmFnZSBpbiB0aGUgZ2xvYmFsIGNvbnRleHQuXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsvLyBTd2FsbG93XG4gICAgLy8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2NvbW1vbicpKGV4cG9ydHMpO1xudmFyIGZvcm1hdHRlcnMgPSBtb2R1bGUuZXhwb3J0cy5mb3JtYXR0ZXJzO1xuLyoqXG4gKiBNYXAgJWogdG8gYEpTT04uc3RyaW5naWZ5KClgLCBzaW5jZSBubyBXZWIgSW5zcGVjdG9ycyBkbyB0aGF0IGJ5IGRlZmF1bHQuXG4gKi9cblxuZm9ybWF0dGVycy5qID0gZnVuY3Rpb24gKHYpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuICdbVW5leHBlY3RlZEpTT05QYXJzZUVycm9yXTogJyArIGVycm9yLm1lc3NhZ2U7XG4gIH1cbn07XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIFRoaXMgaXMgdGhlIGNvbW1vbiBsb2dpYyBmb3IgYm90aCB0aGUgTm9kZS5qcyBhbmQgd2ViIGJyb3dzZXJcbiAqIGltcGxlbWVudGF0aW9ucyBvZiBgZGVidWcoKWAuXG4gKi9cbmZ1bmN0aW9uIHNldHVwKGVudikge1xuICBjcmVhdGVEZWJ1Zy5kZWJ1ZyA9IGNyZWF0ZURlYnVnO1xuICBjcmVhdGVEZWJ1Zy5kZWZhdWx0ID0gY3JlYXRlRGVidWc7XG4gIGNyZWF0ZURlYnVnLmNvZXJjZSA9IGNvZXJjZTtcbiAgY3JlYXRlRGVidWcuZGlzYWJsZSA9IGRpc2FibGU7XG4gIGNyZWF0ZURlYnVnLmVuYWJsZSA9IGVuYWJsZTtcbiAgY3JlYXRlRGVidWcuZW5hYmxlZCA9IGVuYWJsZWQ7XG4gIGNyZWF0ZURlYnVnLmh1bWFuaXplID0gcmVxdWlyZSgnbXMnKTtcbiAgT2JqZWN0LmtleXMoZW52KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBjcmVhdGVEZWJ1Z1trZXldID0gZW52W2tleV07XG4gIH0pO1xuICAvKipcbiAgKiBBY3RpdmUgYGRlYnVnYCBpbnN0YW5jZXMuXG4gICovXG5cbiAgY3JlYXRlRGVidWcuaW5zdGFuY2VzID0gW107XG4gIC8qKlxuICAqIFRoZSBjdXJyZW50bHkgYWN0aXZlIGRlYnVnIG1vZGUgbmFtZXMsIGFuZCBuYW1lcyB0byBza2lwLlxuICAqL1xuXG4gIGNyZWF0ZURlYnVnLm5hbWVzID0gW107XG4gIGNyZWF0ZURlYnVnLnNraXBzID0gW107XG4gIC8qKlxuICAqIE1hcCBvZiBzcGVjaWFsIFwiJW5cIiBoYW5kbGluZyBmdW5jdGlvbnMsIGZvciB0aGUgZGVidWcgXCJmb3JtYXRcIiBhcmd1bWVudC5cbiAgKlxuICAqIFZhbGlkIGtleSBuYW1lcyBhcmUgYSBzaW5nbGUsIGxvd2VyIG9yIHVwcGVyLWNhc2UgbGV0dGVyLCBpLmUuIFwiblwiIGFuZCBcIk5cIi5cbiAgKi9cblxuICBjcmVhdGVEZWJ1Zy5mb3JtYXR0ZXJzID0ge307XG4gIC8qKlxuICAqIFNlbGVjdHMgYSBjb2xvciBmb3IgYSBkZWJ1ZyBuYW1lc3BhY2VcbiAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlIFRoZSBuYW1lc3BhY2Ugc3RyaW5nIGZvciB0aGUgZm9yIHRoZSBkZWJ1ZyBpbnN0YW5jZSB0byBiZSBjb2xvcmVkXG4gICogQHJldHVybiB7TnVtYmVyfFN0cmluZ30gQW4gQU5TSSBjb2xvciBjb2RlIGZvciB0aGUgZ2l2ZW4gbmFtZXNwYWNlXG4gICogQGFwaSBwcml2YXRlXG4gICovXG5cbiAgZnVuY3Rpb24gc2VsZWN0Q29sb3IobmFtZXNwYWNlKSB7XG4gICAgdmFyIGhhc2ggPSAwO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuYW1lc3BhY2UubGVuZ3RoOyBpKyspIHtcbiAgICAgIGhhc2ggPSAoaGFzaCA8PCA1KSAtIGhhc2ggKyBuYW1lc3BhY2UuY2hhckNvZGVBdChpKTtcbiAgICAgIGhhc2ggfD0gMDsgLy8gQ29udmVydCB0byAzMmJpdCBpbnRlZ2VyXG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZURlYnVnLmNvbG9yc1tNYXRoLmFicyhoYXNoKSAlIGNyZWF0ZURlYnVnLmNvbG9ycy5sZW5ndGhdO1xuICB9XG5cbiAgY3JlYXRlRGVidWcuc2VsZWN0Q29sb3IgPSBzZWxlY3RDb2xvcjtcbiAgLyoqXG4gICogQ3JlYXRlIGEgZGVidWdnZXIgd2l0aCB0aGUgZ2l2ZW4gYG5hbWVzcGFjZWAuXG4gICpcbiAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlXG4gICogQHJldHVybiB7RnVuY3Rpb259XG4gICogQGFwaSBwdWJsaWNcbiAgKi9cblxuICBmdW5jdGlvbiBjcmVhdGVEZWJ1ZyhuYW1lc3BhY2UpIHtcbiAgICB2YXIgcHJldlRpbWU7XG5cbiAgICBmdW5jdGlvbiBkZWJ1ZygpIHtcbiAgICAgIC8vIERpc2FibGVkP1xuICAgICAgaWYgKCFkZWJ1Zy5lbmFibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHZhciBzZWxmID0gZGVidWc7IC8vIFNldCBgZGlmZmAgdGltZXN0YW1wXG5cbiAgICAgIHZhciBjdXJyID0gTnVtYmVyKG5ldyBEYXRlKCkpO1xuICAgICAgdmFyIG1zID0gY3VyciAtIChwcmV2VGltZSB8fCBjdXJyKTtcbiAgICAgIHNlbGYuZGlmZiA9IG1zO1xuICAgICAgc2VsZi5wcmV2ID0gcHJldlRpbWU7XG4gICAgICBzZWxmLmN1cnIgPSBjdXJyO1xuICAgICAgcHJldlRpbWUgPSBjdXJyO1xuICAgICAgYXJnc1swXSA9IGNyZWF0ZURlYnVnLmNvZXJjZShhcmdzWzBdKTtcblxuICAgICAgaWYgKHR5cGVvZiBhcmdzWzBdICE9PSAnc3RyaW5nJykge1xuICAgICAgICAvLyBBbnl0aGluZyBlbHNlIGxldCdzIGluc3BlY3Qgd2l0aCAlT1xuICAgICAgICBhcmdzLnVuc2hpZnQoJyVPJyk7XG4gICAgICB9IC8vIEFwcGx5IGFueSBgZm9ybWF0dGVyc2AgdHJhbnNmb3JtYXRpb25zXG5cblxuICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgIGFyZ3NbMF0gPSBhcmdzWzBdLnJlcGxhY2UoLyUoW2EtekEtWiVdKS9nLCBmdW5jdGlvbiAobWF0Y2gsIGZvcm1hdCkge1xuICAgICAgICAvLyBJZiB3ZSBlbmNvdW50ZXIgYW4gZXNjYXBlZCAlIHRoZW4gZG9uJ3QgaW5jcmVhc2UgdGhlIGFycmF5IGluZGV4XG4gICAgICAgIGlmIChtYXRjaCA9PT0gJyUlJykge1xuICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgfVxuXG4gICAgICAgIGluZGV4Kys7XG4gICAgICAgIHZhciBmb3JtYXR0ZXIgPSBjcmVhdGVEZWJ1Zy5mb3JtYXR0ZXJzW2Zvcm1hdF07XG5cbiAgICAgICAgaWYgKHR5cGVvZiBmb3JtYXR0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB2YXIgdmFsID0gYXJnc1tpbmRleF07XG4gICAgICAgICAgbWF0Y2ggPSBmb3JtYXR0ZXIuY2FsbChzZWxmLCB2YWwpOyAvLyBOb3cgd2UgbmVlZCB0byByZW1vdmUgYGFyZ3NbaW5kZXhdYCBzaW5jZSBpdCdzIGlubGluZWQgaW4gdGhlIGBmb3JtYXRgXG5cbiAgICAgICAgICBhcmdzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgaW5kZXgtLTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgIH0pOyAvLyBBcHBseSBlbnYtc3BlY2lmaWMgZm9ybWF0dGluZyAoY29sb3JzLCBldGMuKVxuXG4gICAgICBjcmVhdGVEZWJ1Zy5mb3JtYXRBcmdzLmNhbGwoc2VsZiwgYXJncyk7XG4gICAgICB2YXIgbG9nRm4gPSBzZWxmLmxvZyB8fCBjcmVhdGVEZWJ1Zy5sb2c7XG4gICAgICBsb2dGbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgICB9XG5cbiAgICBkZWJ1Zy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG4gICAgZGVidWcuZW5hYmxlZCA9IGNyZWF0ZURlYnVnLmVuYWJsZWQobmFtZXNwYWNlKTtcbiAgICBkZWJ1Zy51c2VDb2xvcnMgPSBjcmVhdGVEZWJ1Zy51c2VDb2xvcnMoKTtcbiAgICBkZWJ1Zy5jb2xvciA9IHNlbGVjdENvbG9yKG5hbWVzcGFjZSk7XG4gICAgZGVidWcuZGVzdHJveSA9IGRlc3Ryb3k7XG4gICAgZGVidWcuZXh0ZW5kID0gZXh0ZW5kOyAvLyBEZWJ1Zy5mb3JtYXRBcmdzID0gZm9ybWF0QXJncztcbiAgICAvLyBkZWJ1Zy5yYXdMb2cgPSByYXdMb2c7XG4gICAgLy8gZW52LXNwZWNpZmljIGluaXRpYWxpemF0aW9uIGxvZ2ljIGZvciBkZWJ1ZyBpbnN0YW5jZXNcblxuICAgIGlmICh0eXBlb2YgY3JlYXRlRGVidWcuaW5pdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY3JlYXRlRGVidWcuaW5pdChkZWJ1Zyk7XG4gICAgfVxuXG4gICAgY3JlYXRlRGVidWcuaW5zdGFuY2VzLnB1c2goZGVidWcpO1xuICAgIHJldHVybiBkZWJ1ZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgdmFyIGluZGV4ID0gY3JlYXRlRGVidWcuaW5zdGFuY2VzLmluZGV4T2YodGhpcyk7XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBjcmVhdGVEZWJ1Zy5pbnN0YW5jZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGV4dGVuZChuYW1lc3BhY2UsIGRlbGltaXRlcikge1xuICAgIHJldHVybiBjcmVhdGVEZWJ1Zyh0aGlzLm5hbWVzcGFjZSArICh0eXBlb2YgZGVsaW1pdGVyID09PSAndW5kZWZpbmVkJyA/ICc6JyA6IGRlbGltaXRlcikgKyBuYW1lc3BhY2UpO1xuICB9XG4gIC8qKlxuICAqIEVuYWJsZXMgYSBkZWJ1ZyBtb2RlIGJ5IG5hbWVzcGFjZXMuIFRoaXMgY2FuIGluY2x1ZGUgbW9kZXNcbiAgKiBzZXBhcmF0ZWQgYnkgYSBjb2xvbiBhbmQgd2lsZGNhcmRzLlxuICAqXG4gICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAgKiBAYXBpIHB1YmxpY1xuICAqL1xuXG5cbiAgZnVuY3Rpb24gZW5hYmxlKG5hbWVzcGFjZXMpIHtcbiAgICBjcmVhdGVEZWJ1Zy5zYXZlKG5hbWVzcGFjZXMpO1xuICAgIGNyZWF0ZURlYnVnLm5hbWVzID0gW107XG4gICAgY3JlYXRlRGVidWcuc2tpcHMgPSBbXTtcbiAgICB2YXIgaTtcbiAgICB2YXIgc3BsaXQgPSAodHlwZW9mIG5hbWVzcGFjZXMgPT09ICdzdHJpbmcnID8gbmFtZXNwYWNlcyA6ICcnKS5zcGxpdCgvW1xccyxdKy8pO1xuICAgIHZhciBsZW4gPSBzcGxpdC5sZW5ndGg7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGlmICghc3BsaXRbaV0pIHtcbiAgICAgICAgLy8gaWdub3JlIGVtcHR5IHN0cmluZ3NcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIG5hbWVzcGFjZXMgPSBzcGxpdFtpXS5yZXBsYWNlKC9cXCovZywgJy4qPycpO1xuXG4gICAgICBpZiAobmFtZXNwYWNlc1swXSA9PT0gJy0nKSB7XG4gICAgICAgIGNyZWF0ZURlYnVnLnNraXBzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzLnN1YnN0cigxKSArICckJykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3JlYXRlRGVidWcubmFtZXMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMgKyAnJCcpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgY3JlYXRlRGVidWcuaW5zdGFuY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaW5zdGFuY2UgPSBjcmVhdGVEZWJ1Zy5pbnN0YW5jZXNbaV07XG4gICAgICBpbnN0YW5jZS5lbmFibGVkID0gY3JlYXRlRGVidWcuZW5hYmxlZChpbnN0YW5jZS5uYW1lc3BhY2UpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgKiBEaXNhYmxlIGRlYnVnIG91dHB1dC5cbiAgKlxuICAqIEBhcGkgcHVibGljXG4gICovXG5cblxuICBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgIGNyZWF0ZURlYnVnLmVuYWJsZSgnJyk7XG4gIH1cbiAgLyoqXG4gICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBtb2RlIG5hbWUgaXMgZW5hYmxlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAqXG4gICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAqIEBhcGkgcHVibGljXG4gICovXG5cblxuICBmdW5jdGlvbiBlbmFibGVkKG5hbWUpIHtcbiAgICBpZiAobmFtZVtuYW1lLmxlbmd0aCAtIDFdID09PSAnKicpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHZhciBpO1xuICAgIHZhciBsZW47XG5cbiAgICBmb3IgKGkgPSAwLCBsZW4gPSBjcmVhdGVEZWJ1Zy5za2lwcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgaWYgKGNyZWF0ZURlYnVnLnNraXBzW2ldLnRlc3QobmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDAsIGxlbiA9IGNyZWF0ZURlYnVnLm5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBpZiAoY3JlYXRlRGVidWcubmFtZXNbaV0udGVzdChuYW1lKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLyoqXG4gICogQ29lcmNlIGB2YWxgLlxuICAqXG4gICogQHBhcmFtIHtNaXhlZH0gdmFsXG4gICogQHJldHVybiB7TWl4ZWR9XG4gICogQGFwaSBwcml2YXRlXG4gICovXG5cblxuICBmdW5jdGlvbiBjb2VyY2UodmFsKSB7XG4gICAgaWYgKHZhbCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICByZXR1cm4gdmFsLnN0YWNrIHx8IHZhbC5tZXNzYWdlO1xuICAgIH1cblxuICAgIHJldHVybiB2YWw7XG4gIH1cblxuICBjcmVhdGVEZWJ1Zy5lbmFibGUoY3JlYXRlRGVidWcubG9hZCgpKTtcbiAgcmV0dXJuIGNyZWF0ZURlYnVnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldHVwO1xuXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBEZXRlY3QgRWxlY3Ryb24gcmVuZGVyZXIgLyBud2pzIHByb2Nlc3MsIHdoaWNoIGlzIG5vZGUsIGJ1dCB3ZSBzaG91bGRcbiAqIHRyZWF0IGFzIGEgYnJvd3Nlci5cbiAqL1xuaWYgKHR5cGVvZiBwcm9jZXNzID09PSAndW5kZWZpbmVkJyB8fCBwcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicgfHwgcHJvY2Vzcy5icm93c2VyID09PSB0cnVlIHx8IHByb2Nlc3MuX19ud2pzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9icm93c2VyLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbm9kZS5qcycpO1xufVxuXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG52YXIgdHR5ID0gcmVxdWlyZSgndHR5Jyk7XG5cbnZhciB1dGlsID0gcmVxdWlyZSgndXRpbCcpO1xuLyoqXG4gKiBUaGlzIGlzIHRoZSBOb2RlLmpzIGltcGxlbWVudGF0aW9uIG9mIGBkZWJ1ZygpYC5cbiAqL1xuXG5cbmV4cG9ydHMuaW5pdCA9IGluaXQ7XG5leHBvcnRzLmxvZyA9IGxvZztcbmV4cG9ydHMuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5leHBvcnRzLnNhdmUgPSBzYXZlO1xuZXhwb3J0cy5sb2FkID0gbG9hZDtcbmV4cG9ydHMudXNlQ29sb3JzID0gdXNlQ29sb3JzO1xuLyoqXG4gKiBDb2xvcnMuXG4gKi9cblxuZXhwb3J0cy5jb2xvcnMgPSBbNiwgMiwgMywgNCwgNSwgMV07XG5cbnRyeSB7XG4gIC8vIE9wdGlvbmFsIGRlcGVuZGVuY3kgKGFzIGluLCBkb2Vzbid0IG5lZWQgdG8gYmUgaW5zdGFsbGVkLCBOT1QgbGlrZSBvcHRpb25hbERlcGVuZGVuY2llcyBpbiBwYWNrYWdlLmpzb24pXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbiAgdmFyIHN1cHBvcnRzQ29sb3IgPSByZXF1aXJlKCdzdXBwb3J0cy1jb2xvcicpO1xuXG4gIGlmIChzdXBwb3J0c0NvbG9yICYmIChzdXBwb3J0c0NvbG9yLnN0ZGVyciB8fCBzdXBwb3J0c0NvbG9yKS5sZXZlbCA+PSAyKSB7XG4gICAgZXhwb3J0cy5jb2xvcnMgPSBbMjAsIDIxLCAyNiwgMjcsIDMyLCAzMywgMzgsIDM5LCA0MCwgNDEsIDQyLCA0MywgNDQsIDQ1LCA1NiwgNTcsIDYyLCA2MywgNjgsIDY5LCA3NCwgNzUsIDc2LCA3NywgNzgsIDc5LCA4MCwgODEsIDkyLCA5MywgOTgsIDk5LCAxMTIsIDExMywgMTI4LCAxMjksIDEzNCwgMTM1LCAxNDgsIDE0OSwgMTYwLCAxNjEsIDE2MiwgMTYzLCAxNjQsIDE2NSwgMTY2LCAxNjcsIDE2OCwgMTY5LCAxNzAsIDE3MSwgMTcyLCAxNzMsIDE3OCwgMTc5LCAxODQsIDE4NSwgMTk2LCAxOTcsIDE5OCwgMTk5LCAyMDAsIDIwMSwgMjAyLCAyMDMsIDIwNCwgMjA1LCAyMDYsIDIwNywgMjA4LCAyMDksIDIxNCwgMjE1LCAyMjAsIDIyMV07XG4gIH1cbn0gY2F0Y2ggKGVycm9yKSB7fSAvLyBTd2FsbG93IC0gd2Ugb25seSBjYXJlIGlmIGBzdXBwb3J0cy1jb2xvcmAgaXMgYXZhaWxhYmxlOyBpdCBkb2Vzbid0IGhhdmUgdG8gYmUuXG5cbi8qKlxuICogQnVpbGQgdXAgdGhlIGRlZmF1bHQgYGluc3BlY3RPcHRzYCBvYmplY3QgZnJvbSB0aGUgZW52aXJvbm1lbnQgdmFyaWFibGVzLlxuICpcbiAqICAgJCBERUJVR19DT0xPUlM9bm8gREVCVUdfREVQVEg9MTAgREVCVUdfU0hPV19ISURERU49ZW5hYmxlZCBub2RlIHNjcmlwdC5qc1xuICovXG5cblxuZXhwb3J0cy5pbnNwZWN0T3B0cyA9IE9iamVjdC5rZXlzKHByb2Nlc3MuZW52KS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gL15kZWJ1Z18vaS50ZXN0KGtleSk7XG59KS5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwga2V5KSB7XG4gIC8vIENhbWVsLWNhc2VcbiAgdmFyIHByb3AgPSBrZXkuc3Vic3RyaW5nKDYpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXyhbYS16XSkvZywgZnVuY3Rpb24gKF8sIGspIHtcbiAgICByZXR1cm4gay50b1VwcGVyQ2FzZSgpO1xuICB9KTsgLy8gQ29lcmNlIHN0cmluZyB2YWx1ZSBpbnRvIEpTIHZhbHVlXG5cbiAgdmFyIHZhbCA9IHByb2Nlc3MuZW52W2tleV07XG5cbiAgaWYgKC9eKHllc3xvbnx0cnVlfGVuYWJsZWQpJC9pLnRlc3QodmFsKSkge1xuICAgIHZhbCA9IHRydWU7XG4gIH0gZWxzZSBpZiAoL14obm98b2ZmfGZhbHNlfGRpc2FibGVkKSQvaS50ZXN0KHZhbCkpIHtcbiAgICB2YWwgPSBmYWxzZTtcbiAgfSBlbHNlIGlmICh2YWwgPT09ICdudWxsJykge1xuICAgIHZhbCA9IG51bGw7XG4gIH0gZWxzZSB7XG4gICAgdmFsID0gTnVtYmVyKHZhbCk7XG4gIH1cblxuICBvYmpbcHJvcF0gPSB2YWw7XG4gIHJldHVybiBvYmo7XG59LCB7fSk7XG4vKipcbiAqIElzIHN0ZG91dCBhIFRUWT8gQ29sb3JlZCBvdXRwdXQgaXMgZW5hYmxlZCB3aGVuIGB0cnVlYC5cbiAqL1xuXG5mdW5jdGlvbiB1c2VDb2xvcnMoKSB7XG4gIHJldHVybiAnY29sb3JzJyBpbiBleHBvcnRzLmluc3BlY3RPcHRzID8gQm9vbGVhbihleHBvcnRzLmluc3BlY3RPcHRzLmNvbG9ycykgOiB0dHkuaXNhdHR5KHByb2Nlc3Muc3RkZXJyLmZkKTtcbn1cbi8qKlxuICogQWRkcyBBTlNJIGNvbG9yIGVzY2FwZSBjb2RlcyBpZiBlbmFibGVkLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuXG5mdW5jdGlvbiBmb3JtYXRBcmdzKGFyZ3MpIHtcbiAgdmFyIG5hbWUgPSB0aGlzLm5hbWVzcGFjZSxcbiAgICAgIHVzZUNvbG9ycyA9IHRoaXMudXNlQ29sb3JzO1xuXG4gIGlmICh1c2VDb2xvcnMpIHtcbiAgICB2YXIgYyA9IHRoaXMuY29sb3I7XG4gICAgdmFyIGNvbG9yQ29kZSA9IFwiXFx4MUJbM1wiICsgKGMgPCA4ID8gYyA6ICc4OzU7JyArIGMpO1xuICAgIHZhciBwcmVmaXggPSBcIiAgXCIuY29uY2F0KGNvbG9yQ29kZSwgXCI7MW1cIikuY29uY2F0KG5hbWUsIFwiIFxceDFCWzBtXCIpO1xuICAgIGFyZ3NbMF0gPSBwcmVmaXggKyBhcmdzWzBdLnNwbGl0KCdcXG4nKS5qb2luKCdcXG4nICsgcHJlZml4KTtcbiAgICBhcmdzLnB1c2goY29sb3JDb2RlICsgJ20rJyArIG1vZHVsZS5leHBvcnRzLmh1bWFuaXplKHRoaXMuZGlmZikgKyBcIlxceDFCWzBtXCIpO1xuICB9IGVsc2Uge1xuICAgIGFyZ3NbMF0gPSBnZXREYXRlKCkgKyBuYW1lICsgJyAnICsgYXJnc1swXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREYXRlKCkge1xuICBpZiAoZXhwb3J0cy5pbnNwZWN0T3B0cy5oaWRlRGF0ZSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHJldHVybiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkgKyAnICc7XG59XG4vKipcbiAqIEludm9rZXMgYHV0aWwuZm9ybWF0KClgIHdpdGggdGhlIHNwZWNpZmllZCBhcmd1bWVudHMgYW5kIHdyaXRlcyB0byBzdGRlcnIuXG4gKi9cblxuXG5mdW5jdGlvbiBsb2coKSB7XG4gIHJldHVybiBwcm9jZXNzLnN0ZGVyci53cml0ZSh1dGlsLmZvcm1hdC5hcHBseSh1dGlsLCBhcmd1bWVudHMpICsgJ1xcbicpO1xufVxuLyoqXG4gKiBTYXZlIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuXG5mdW5jdGlvbiBzYXZlKG5hbWVzcGFjZXMpIHtcbiAgaWYgKG5hbWVzcGFjZXMpIHtcbiAgICBwcm9jZXNzLmVudi5ERUJVRyA9IG5hbWVzcGFjZXM7XG4gIH0gZWxzZSB7XG4gICAgLy8gSWYgeW91IHNldCBhIHByb2Nlc3MuZW52IGZpZWxkIHRvIG51bGwgb3IgdW5kZWZpbmVkLCBpdCBnZXRzIGNhc3QgdG8gdGhlXG4gICAgLy8gc3RyaW5nICdudWxsJyBvciAndW5kZWZpbmVkJy4gSnVzdCBkZWxldGUgaW5zdGVhZC5cbiAgICBkZWxldGUgcHJvY2Vzcy5lbnYuREVCVUc7XG4gIH1cbn1cbi8qKlxuICogTG9hZCBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHJldHVybiB7U3RyaW5nfSByZXR1cm5zIHRoZSBwcmV2aW91c2x5IHBlcnNpc3RlZCBkZWJ1ZyBtb2Rlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuXG5mdW5jdGlvbiBsb2FkKCkge1xuICByZXR1cm4gcHJvY2Vzcy5lbnYuREVCVUc7XG59XG4vKipcbiAqIEluaXQgbG9naWMgZm9yIGBkZWJ1Z2AgaW5zdGFuY2VzLlxuICpcbiAqIENyZWF0ZSBhIG5ldyBgaW5zcGVjdE9wdHNgIG9iamVjdCBpbiBjYXNlIGB1c2VDb2xvcnNgIGlzIHNldFxuICogZGlmZmVyZW50bHkgZm9yIGEgcGFydGljdWxhciBgZGVidWdgIGluc3RhbmNlLlxuICovXG5cblxuZnVuY3Rpb24gaW5pdChkZWJ1Zykge1xuICBkZWJ1Zy5pbnNwZWN0T3B0cyA9IHt9O1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGV4cG9ydHMuaW5zcGVjdE9wdHMpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGRlYnVnLmluc3BlY3RPcHRzW2tleXNbaV1dID0gZXhwb3J0cy5pbnNwZWN0T3B0c1trZXlzW2ldXTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY29tbW9uJykoZXhwb3J0cyk7XG52YXIgZm9ybWF0dGVycyA9IG1vZHVsZS5leHBvcnRzLmZvcm1hdHRlcnM7XG4vKipcbiAqIE1hcCAlbyB0byBgdXRpbC5pbnNwZWN0KClgLCBhbGwgb24gYSBzaW5nbGUgbGluZS5cbiAqL1xuXG5mb3JtYXR0ZXJzLm8gPSBmdW5jdGlvbiAodikge1xuICB0aGlzLmluc3BlY3RPcHRzLmNvbG9ycyA9IHRoaXMudXNlQ29sb3JzO1xuICByZXR1cm4gdXRpbC5pbnNwZWN0KHYsIHRoaXMuaW5zcGVjdE9wdHMpLnJlcGxhY2UoL1xccypcXG5cXHMqL2csICcgJyk7XG59O1xuLyoqXG4gKiBNYXAgJU8gdG8gYHV0aWwuaW5zcGVjdCgpYCwgYWxsb3dpbmcgbXVsdGlwbGUgbGluZXMgaWYgbmVlZGVkLlxuICovXG5cblxuZm9ybWF0dGVycy5PID0gZnVuY3Rpb24gKHYpIHtcbiAgdGhpcy5pbnNwZWN0T3B0cy5jb2xvcnMgPSB0aGlzLnVzZUNvbG9ycztcbiAgcmV0dXJuIHV0aWwuaW5zcGVjdCh2LCB0aGlzLmluc3BlY3RPcHRzKTtcbn07XG5cbiIsInZhciB1cmwgPSByZXF1aXJlKFwidXJsXCIpO1xudmFyIFVSTCA9IHVybC5VUkw7XG52YXIgaHR0cCA9IHJlcXVpcmUoXCJodHRwXCIpO1xudmFyIGh0dHBzID0gcmVxdWlyZShcImh0dHBzXCIpO1xudmFyIGFzc2VydCA9IHJlcXVpcmUoXCJhc3NlcnRcIik7XG52YXIgV3JpdGFibGUgPSByZXF1aXJlKFwic3RyZWFtXCIpLldyaXRhYmxlO1xudmFyIGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwiZm9sbG93LXJlZGlyZWN0c1wiKTtcblxuLy8gUkZDNzIzMcKnNC4yLjE6IE9mIHRoZSByZXF1ZXN0IG1ldGhvZHMgZGVmaW5lZCBieSB0aGlzIHNwZWNpZmljYXRpb24sXG4vLyB0aGUgR0VULCBIRUFELCBPUFRJT05TLCBhbmQgVFJBQ0UgbWV0aG9kcyBhcmUgZGVmaW5lZCB0byBiZSBzYWZlLlxudmFyIFNBRkVfTUVUSE9EUyA9IHsgR0VUOiB0cnVlLCBIRUFEOiB0cnVlLCBPUFRJT05TOiB0cnVlLCBUUkFDRTogdHJ1ZSB9O1xuXG4vLyBDcmVhdGUgaGFuZGxlcnMgdGhhdCBwYXNzIGV2ZW50cyBmcm9tIG5hdGl2ZSByZXF1ZXN0c1xudmFyIGV2ZW50SGFuZGxlcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuW1wiYWJvcnRcIiwgXCJhYm9ydGVkXCIsIFwiZXJyb3JcIiwgXCJzb2NrZXRcIiwgXCJ0aW1lb3V0XCJdLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGV2ZW50SGFuZGxlcnNbZXZlbnRdID0gZnVuY3Rpb24gKGFyZykge1xuICAgIHRoaXMuX3JlZGlyZWN0YWJsZS5lbWl0KGV2ZW50LCBhcmcpO1xuICB9O1xufSk7XG5cbi8vIEFuIEhUVFAoUykgcmVxdWVzdCB0aGF0IGNhbiBiZSByZWRpcmVjdGVkXG5mdW5jdGlvbiBSZWRpcmVjdGFibGVSZXF1ZXN0KG9wdGlvbnMsIHJlc3BvbnNlQ2FsbGJhY2spIHtcbiAgLy8gSW5pdGlhbGl6ZSB0aGUgcmVxdWVzdFxuICBXcml0YWJsZS5jYWxsKHRoaXMpO1xuICBvcHRpb25zLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgfHwge307XG4gIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xuICB0aGlzLl9lbmRlZCA9IGZhbHNlO1xuICB0aGlzLl9lbmRpbmcgPSBmYWxzZTtcbiAgdGhpcy5fcmVkaXJlY3RDb3VudCA9IDA7XG4gIHRoaXMuX3JlZGlyZWN0cyA9IFtdO1xuICB0aGlzLl9yZXF1ZXN0Qm9keUxlbmd0aCA9IDA7XG4gIHRoaXMuX3JlcXVlc3RCb2R5QnVmZmVycyA9IFtdO1xuXG4gIC8vIFNpbmNlIGh0dHAucmVxdWVzdCB0cmVhdHMgaG9zdCBhcyBhbiBhbGlhcyBvZiBob3N0bmFtZSxcbiAgLy8gYnV0IHRoZSB1cmwgbW9kdWxlIGludGVycHJldHMgaG9zdCBhcyBob3N0bmFtZSBwbHVzIHBvcnQsXG4gIC8vIGVsaW1pbmF0ZSB0aGUgaG9zdCBwcm9wZXJ0eSB0byBhdm9pZCBjb25mdXNpb24uXG4gIGlmIChvcHRpb25zLmhvc3QpIHtcbiAgICAvLyBVc2UgaG9zdG5hbWUgaWYgc2V0LCBiZWNhdXNlIGl0IGhhcyBwcmVjZWRlbmNlXG4gICAgaWYgKCFvcHRpb25zLmhvc3RuYW1lKSB7XG4gICAgICBvcHRpb25zLmhvc3RuYW1lID0gb3B0aW9ucy5ob3N0O1xuICAgIH1cbiAgICBkZWxldGUgb3B0aW9ucy5ob3N0O1xuICB9XG5cbiAgLy8gQXR0YWNoIGEgY2FsbGJhY2sgaWYgcGFzc2VkXG4gIGlmIChyZXNwb25zZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5vbihcInJlc3BvbnNlXCIsIHJlc3BvbnNlQ2FsbGJhY2spO1xuICB9XG5cbiAgLy8gUmVhY3QgdG8gcmVzcG9uc2VzIG9mIG5hdGl2ZSByZXF1ZXN0c1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHRoaXMuX29uTmF0aXZlUmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICBzZWxmLl9wcm9jZXNzUmVzcG9uc2UocmVzcG9uc2UpO1xuICB9O1xuXG4gIC8vIENvbXBsZXRlIHRoZSBVUkwgb2JqZWN0IHdoZW4gbmVjZXNzYXJ5XG4gIGlmICghb3B0aW9ucy5wYXRobmFtZSAmJiBvcHRpb25zLnBhdGgpIHtcbiAgICB2YXIgc2VhcmNoUG9zID0gb3B0aW9ucy5wYXRoLmluZGV4T2YoXCI/XCIpO1xuICAgIGlmIChzZWFyY2hQb3MgPCAwKSB7XG4gICAgICBvcHRpb25zLnBhdGhuYW1lID0gb3B0aW9ucy5wYXRoO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIG9wdGlvbnMucGF0aG5hbWUgPSBvcHRpb25zLnBhdGguc3Vic3RyaW5nKDAsIHNlYXJjaFBvcyk7XG4gICAgICBvcHRpb25zLnNlYXJjaCA9IG9wdGlvbnMucGF0aC5zdWJzdHJpbmcoc2VhcmNoUG9zKTtcbiAgICB9XG4gIH1cblxuICAvLyBQZXJmb3JtIHRoZSBmaXJzdCByZXF1ZXN0XG4gIHRoaXMuX3BlcmZvcm1SZXF1ZXN0KCk7XG59XG5SZWRpcmVjdGFibGVSZXF1ZXN0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoV3JpdGFibGUucHJvdG90eXBlKTtcblxuLy8gV3JpdGVzIGJ1ZmZlcmVkIGRhdGEgdG8gdGhlIGN1cnJlbnQgbmF0aXZlIHJlcXVlc3RcblJlZGlyZWN0YWJsZVJlcXVlc3QucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gKGRhdGEsIGVuY29kaW5nLCBjYWxsYmFjaykge1xuICAvLyBXcml0aW5nIGlzIG5vdCBhbGxvd2VkIGlmIGVuZCBoYXMgYmVlbiBjYWxsZWRcbiAgaWYgKHRoaXMuX2VuZGluZykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIndyaXRlIGFmdGVyIGVuZFwiKTtcbiAgfVxuXG4gIC8vIFZhbGlkYXRlIGlucHV0IGFuZCBzaGlmdCBwYXJhbWV0ZXJzIGlmIG5lY2Vzc2FyeVxuICBpZiAoISh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgZGF0YSA9PT0gXCJvYmplY3RcIiAmJiAoXCJsZW5ndGhcIiBpbiBkYXRhKSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJkYXRhIHNob3VsZCBiZSBhIHN0cmluZywgQnVmZmVyIG9yIFVpbnQ4QXJyYXlcIik7XG4gIH1cbiAgaWYgKHR5cGVvZiBlbmNvZGluZyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgY2FsbGJhY2sgPSBlbmNvZGluZztcbiAgICBlbmNvZGluZyA9IG51bGw7XG4gIH1cblxuICAvLyBJZ25vcmUgZW1wdHkgYnVmZmVycywgc2luY2Ugd3JpdGluZyB0aGVtIGRvZXNuJ3QgaW52b2tlIHRoZSBjYWxsYmFja1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvaXNzdWVzLzIyMDY2XG4gIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIE9ubHkgd3JpdGUgd2hlbiB3ZSBkb24ndCBleGNlZWQgdGhlIG1heGltdW0gYm9keSBsZW5ndGhcbiAgaWYgKHRoaXMuX3JlcXVlc3RCb2R5TGVuZ3RoICsgZGF0YS5sZW5ndGggPD0gdGhpcy5fb3B0aW9ucy5tYXhCb2R5TGVuZ3RoKSB7XG4gICAgdGhpcy5fcmVxdWVzdEJvZHlMZW5ndGggKz0gZGF0YS5sZW5ndGg7XG4gICAgdGhpcy5fcmVxdWVzdEJvZHlCdWZmZXJzLnB1c2goeyBkYXRhOiBkYXRhLCBlbmNvZGluZzogZW5jb2RpbmcgfSk7XG4gICAgdGhpcy5fY3VycmVudFJlcXVlc3Qud3JpdGUoZGF0YSwgZW5jb2RpbmcsIGNhbGxiYWNrKTtcbiAgfVxuICAvLyBFcnJvciB3aGVuIHdlIGV4Y2VlZCB0aGUgbWF4aW11bSBib2R5IGxlbmd0aFxuICBlbHNlIHtcbiAgICB0aGlzLmVtaXQoXCJlcnJvclwiLCBuZXcgRXJyb3IoXCJSZXF1ZXN0IGJvZHkgbGFyZ2VyIHRoYW4gbWF4Qm9keUxlbmd0aCBsaW1pdFwiKSk7XG4gICAgdGhpcy5hYm9ydCgpO1xuICB9XG59O1xuXG4vLyBFbmRzIHRoZSBjdXJyZW50IG5hdGl2ZSByZXF1ZXN0XG5SZWRpcmVjdGFibGVSZXF1ZXN0LnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbiAoZGF0YSwgZW5jb2RpbmcsIGNhbGxiYWNrKSB7XG4gIC8vIFNoaWZ0IHBhcmFtZXRlcnMgaWYgbmVjZXNzYXJ5XG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgY2FsbGJhY2sgPSBkYXRhO1xuICAgIGRhdGEgPSBlbmNvZGluZyA9IG51bGw7XG4gIH1cbiAgZWxzZSBpZiAodHlwZW9mIGVuY29kaW5nID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjYWxsYmFjayA9IGVuY29kaW5nO1xuICAgIGVuY29kaW5nID0gbnVsbDtcbiAgfVxuXG4gIC8vIFdyaXRlIGRhdGEgaWYgbmVlZGVkIGFuZCBlbmRcbiAgaWYgKCFkYXRhKSB7XG4gICAgdGhpcy5fZW5kZWQgPSB0aGlzLl9lbmRpbmcgPSB0cnVlO1xuICAgIHRoaXMuX2N1cnJlbnRSZXF1ZXN0LmVuZChudWxsLCBudWxsLCBjYWxsYmFjayk7XG4gIH1cbiAgZWxzZSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBjdXJyZW50UmVxdWVzdCA9IHRoaXMuX2N1cnJlbnRSZXF1ZXN0O1xuICAgIHRoaXMud3JpdGUoZGF0YSwgZW5jb2RpbmcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuX2VuZGVkID0gdHJ1ZTtcbiAgICAgIGN1cnJlbnRSZXF1ZXN0LmVuZChudWxsLCBudWxsLCBjYWxsYmFjayk7XG4gICAgfSk7XG4gICAgdGhpcy5fZW5kaW5nID0gdHJ1ZTtcbiAgfVxufTtcblxuLy8gU2V0cyBhIGhlYWRlciB2YWx1ZSBvbiB0aGUgY3VycmVudCBuYXRpdmUgcmVxdWVzdFxuUmVkaXJlY3RhYmxlUmVxdWVzdC5wcm90b3R5cGUuc2V0SGVhZGVyID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gIHRoaXMuX29wdGlvbnMuaGVhZGVyc1tuYW1lXSA9IHZhbHVlO1xuICB0aGlzLl9jdXJyZW50UmVxdWVzdC5zZXRIZWFkZXIobmFtZSwgdmFsdWUpO1xufTtcblxuLy8gQ2xlYXJzIGEgaGVhZGVyIHZhbHVlIG9uIHRoZSBjdXJyZW50IG5hdGl2ZSByZXF1ZXN0XG5SZWRpcmVjdGFibGVSZXF1ZXN0LnByb3RvdHlwZS5yZW1vdmVIZWFkZXIgPSBmdW5jdGlvbiAobmFtZSkge1xuICBkZWxldGUgdGhpcy5fb3B0aW9ucy5oZWFkZXJzW25hbWVdO1xuICB0aGlzLl9jdXJyZW50UmVxdWVzdC5yZW1vdmVIZWFkZXIobmFtZSk7XG59O1xuXG4vLyBHbG9iYWwgdGltZW91dCBmb3IgYWxsIHVuZGVybHlpbmcgcmVxdWVzdHNcblJlZGlyZWN0YWJsZVJlcXVlc3QucHJvdG90eXBlLnNldFRpbWVvdXQgPSBmdW5jdGlvbiAobXNlY3MsIGNhbGxiYWNrKSB7XG4gIGlmIChjYWxsYmFjaykge1xuICAgIHRoaXMub25jZShcInRpbWVvdXRcIiwgY2FsbGJhY2spO1xuICB9XG5cbiAgaWYgKHRoaXMuc29ja2V0KSB7XG4gICAgc3RhcnRUaW1lcih0aGlzLCBtc2Vjcyk7XG4gIH1cbiAgZWxzZSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHRoaXMuX2N1cnJlbnRSZXF1ZXN0Lm9uY2UoXCJzb2NrZXRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgc3RhcnRUaW1lcihzZWxmLCBtc2Vjcyk7XG4gICAgfSk7XG4gIH1cblxuICB0aGlzLm9uY2UoXCJyZXNwb25zZVwiLCBjbGVhclRpbWVyKTtcbiAgdGhpcy5vbmNlKFwiZXJyb3JcIiwgY2xlYXJUaW1lcik7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5mdW5jdGlvbiBzdGFydFRpbWVyKHJlcXVlc3QsIG1zZWNzKSB7XG4gIGNsZWFyVGltZW91dChyZXF1ZXN0Ll90aW1lb3V0KTtcbiAgcmVxdWVzdC5fdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIHJlcXVlc3QuZW1pdChcInRpbWVvdXRcIik7XG4gIH0sIG1zZWNzKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJUaW1lcigpIHtcbiAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpO1xufVxuXG4vLyBQcm94eSBhbGwgb3RoZXIgcHVibGljIENsaWVudFJlcXVlc3QgbWV0aG9kc1xuW1xuICBcImFib3J0XCIsIFwiZmx1c2hIZWFkZXJzXCIsIFwiZ2V0SGVhZGVyXCIsXG4gIFwic2V0Tm9EZWxheVwiLCBcInNldFNvY2tldEtlZXBBbGl2ZVwiLFxuXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgUmVkaXJlY3RhYmxlUmVxdWVzdC5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRSZXF1ZXN0W21ldGhvZF0oYSwgYik7XG4gIH07XG59KTtcblxuLy8gUHJveHkgYWxsIHB1YmxpYyBDbGllbnRSZXF1ZXN0IHByb3BlcnRpZXNcbltcImFib3J0ZWRcIiwgXCJjb25uZWN0aW9uXCIsIFwic29ja2V0XCJdLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWRpcmVjdGFibGVSZXF1ZXN0LnByb3RvdHlwZSwgcHJvcGVydHksIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2N1cnJlbnRSZXF1ZXN0W3Byb3BlcnR5XTsgfSxcbiAgfSk7XG59KTtcblxuLy8gRXhlY3V0ZXMgdGhlIG5leHQgbmF0aXZlIHJlcXVlc3QgKGluaXRpYWwgb3IgcmVkaXJlY3QpXG5SZWRpcmVjdGFibGVSZXF1ZXN0LnByb3RvdHlwZS5fcGVyZm9ybVJlcXVlc3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIExvYWQgdGhlIG5hdGl2ZSBwcm90b2NvbFxuICB2YXIgcHJvdG9jb2wgPSB0aGlzLl9vcHRpb25zLnByb3RvY29sO1xuICB2YXIgbmF0aXZlUHJvdG9jb2wgPSB0aGlzLl9vcHRpb25zLm5hdGl2ZVByb3RvY29sc1twcm90b2NvbF07XG4gIGlmICghbmF0aXZlUHJvdG9jb2wpIHtcbiAgICB0aGlzLmVtaXQoXCJlcnJvclwiLCBuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBwcm90b2NvbCBcIiArIHByb3RvY29sKSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gSWYgc3BlY2lmaWVkLCB1c2UgdGhlIGFnZW50IGNvcnJlc3BvbmRpbmcgdG8gdGhlIHByb3RvY29sXG4gIC8vIChIVFRQIGFuZCBIVFRQUyB1c2UgZGlmZmVyZW50IHR5cGVzIG9mIGFnZW50cylcbiAgaWYgKHRoaXMuX29wdGlvbnMuYWdlbnRzKSB7XG4gICAgdmFyIHNjaGVtZSA9IHByb3RvY29sLnN1YnN0cigwLCBwcm90b2NvbC5sZW5ndGggLSAxKTtcbiAgICB0aGlzLl9vcHRpb25zLmFnZW50ID0gdGhpcy5fb3B0aW9ucy5hZ2VudHNbc2NoZW1lXTtcbiAgfVxuXG4gIC8vIENyZWF0ZSB0aGUgbmF0aXZlIHJlcXVlc3RcbiAgdmFyIHJlcXVlc3QgPSB0aGlzLl9jdXJyZW50UmVxdWVzdCA9XG4gICAgICAgIG5hdGl2ZVByb3RvY29sLnJlcXVlc3QodGhpcy5fb3B0aW9ucywgdGhpcy5fb25OYXRpdmVSZXNwb25zZSk7XG4gIHRoaXMuX2N1cnJlbnRVcmwgPSB1cmwuZm9ybWF0KHRoaXMuX29wdGlvbnMpO1xuXG4gIC8vIFNldCB1cCBldmVudCBoYW5kbGVyc1xuICByZXF1ZXN0Ll9yZWRpcmVjdGFibGUgPSB0aGlzO1xuICBmb3IgKHZhciBldmVudCBpbiBldmVudEhhbmRsZXJzKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIHJlcXVlc3Qub24oZXZlbnQsIGV2ZW50SGFuZGxlcnNbZXZlbnRdKTtcbiAgICB9XG4gIH1cblxuICAvLyBFbmQgYSByZWRpcmVjdGVkIHJlcXVlc3RcbiAgLy8gKFRoZSBmaXJzdCByZXF1ZXN0IG11c3QgYmUgZW5kZWQgZXhwbGljaXRseSB3aXRoIFJlZGlyZWN0YWJsZVJlcXVlc3QjZW5kKVxuICBpZiAodGhpcy5faXNSZWRpcmVjdCkge1xuICAgIC8vIFdyaXRlIHRoZSByZXF1ZXN0IGVudGl0eSBhbmQgZW5kLlxuICAgIHZhciBpID0gMDtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGJ1ZmZlcnMgPSB0aGlzLl9yZXF1ZXN0Qm9keUJ1ZmZlcnM7XG4gICAgKGZ1bmN0aW9uIHdyaXRlTmV4dChlcnJvcikge1xuICAgICAgLy8gT25seSB3cml0ZSBpZiB0aGlzIHJlcXVlc3QgaGFzIG5vdCBiZWVuIHJlZGlyZWN0ZWQgeWV0XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKHJlcXVlc3QgPT09IHNlbGYuX2N1cnJlbnRSZXF1ZXN0KSB7XG4gICAgICAgIC8vIFJlcG9ydCBhbnkgd3JpdGUgZXJyb3JzXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICBzZWxmLmVtaXQoXCJlcnJvclwiLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gV3JpdGUgdGhlIG5leHQgYnVmZmVyIGlmIHRoZXJlIGFyZSBzdGlsbCBsZWZ0XG4gICAgICAgIGVsc2UgaWYgKGkgPCBidWZmZXJzLmxlbmd0aCkge1xuICAgICAgICAgIHZhciBidWZmZXIgPSBidWZmZXJzW2krK107XG4gICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgICAgICBpZiAoIXJlcXVlc3QuZmluaXNoZWQpIHtcbiAgICAgICAgICAgIHJlcXVlc3Qud3JpdGUoYnVmZmVyLmRhdGEsIGJ1ZmZlci5lbmNvZGluZywgd3JpdGVOZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gRW5kIHRoZSByZXF1ZXN0IGlmIGBlbmRgIGhhcyBiZWVuIGNhbGxlZCBvbiB1c1xuICAgICAgICBlbHNlIGlmIChzZWxmLl9lbmRlZCkge1xuICAgICAgICAgIHJlcXVlc3QuZW5kKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KCkpO1xuICB9XG59O1xuXG4vLyBQcm9jZXNzZXMgYSByZXNwb25zZSBmcm9tIHRoZSBjdXJyZW50IG5hdGl2ZSByZXF1ZXN0XG5SZWRpcmVjdGFibGVSZXF1ZXN0LnByb3RvdHlwZS5fcHJvY2Vzc1Jlc3BvbnNlID0gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gIC8vIFN0b3JlIHRoZSByZWRpcmVjdGVkIHJlc3BvbnNlXG4gIGlmICh0aGlzLl9vcHRpb25zLnRyYWNrUmVkaXJlY3RzKSB7XG4gICAgdGhpcy5fcmVkaXJlY3RzLnB1c2goe1xuICAgICAgdXJsOiB0aGlzLl9jdXJyZW50VXJsLFxuICAgICAgaGVhZGVyczogcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgIHN0YXR1c0NvZGU6IHJlc3BvbnNlLnN0YXR1c0NvZGUsXG4gICAgfSk7XG4gIH1cblxuICAvLyBSRkM3MjMxwqc2LjQ6IFRoZSAzeHggKFJlZGlyZWN0aW9uKSBjbGFzcyBvZiBzdGF0dXMgY29kZSBpbmRpY2F0ZXNcbiAgLy8gdGhhdCBmdXJ0aGVyIGFjdGlvbiBuZWVkcyB0byBiZSB0YWtlbiBieSB0aGUgdXNlciBhZ2VudCBpbiBvcmRlciB0b1xuICAvLyBmdWxmaWxsIHRoZSByZXF1ZXN0LiBJZiBhIExvY2F0aW9uIGhlYWRlciBmaWVsZCBpcyBwcm92aWRlZCxcbiAgLy8gdGhlIHVzZXIgYWdlbnQgTUFZIGF1dG9tYXRpY2FsbHkgcmVkaXJlY3QgaXRzIHJlcXVlc3QgdG8gdGhlIFVSSVxuICAvLyByZWZlcmVuY2VkIGJ5IHRoZSBMb2NhdGlvbiBmaWVsZCB2YWx1ZSxcbiAgLy8gZXZlbiBpZiB0aGUgc3BlY2lmaWMgc3RhdHVzIGNvZGUgaXMgbm90IHVuZGVyc3Rvb2QuXG4gIHZhciBsb2NhdGlvbiA9IHJlc3BvbnNlLmhlYWRlcnMubG9jYXRpb247XG4gIGlmIChsb2NhdGlvbiAmJiB0aGlzLl9vcHRpb25zLmZvbGxvd1JlZGlyZWN0cyAhPT0gZmFsc2UgJiZcbiAgICAgIHJlc3BvbnNlLnN0YXR1c0NvZGUgPj0gMzAwICYmIHJlc3BvbnNlLnN0YXR1c0NvZGUgPCA0MDApIHtcbiAgICAvLyBBYm9ydCB0aGUgY3VycmVudCByZXF1ZXN0XG4gICAgdGhpcy5fY3VycmVudFJlcXVlc3QucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgdGhpcy5fY3VycmVudFJlcXVlc3Qub24oXCJlcnJvclwiLCBub29wKTtcbiAgICB0aGlzLl9jdXJyZW50UmVxdWVzdC5hYm9ydCgpO1xuXG4gICAgLy8gUkZDNzIzMcKnNi40OiBBIGNsaWVudCBTSE9VTEQgZGV0ZWN0IGFuZCBpbnRlcnZlbmVcbiAgICAvLyBpbiBjeWNsaWNhbCByZWRpcmVjdGlvbnMgKGkuZS4sIFwiaW5maW5pdGVcIiByZWRpcmVjdGlvbiBsb29wcykuXG4gICAgaWYgKCsrdGhpcy5fcmVkaXJlY3RDb3VudCA+IHRoaXMuX29wdGlvbnMubWF4UmVkaXJlY3RzKSB7XG4gICAgICB0aGlzLmVtaXQoXCJlcnJvclwiLCBuZXcgRXJyb3IoXCJNYXggcmVkaXJlY3RzIGV4Y2VlZGVkLlwiKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gUkZDNzIzMcKnNi40OiBBdXRvbWF0aWMgcmVkaXJlY3Rpb24gbmVlZHMgdG8gZG9uZSB3aXRoXG4gICAgLy8gY2FyZSBmb3IgbWV0aG9kcyBub3Qga25vd24gdG8gYmUgc2FmZSBb4oCmXSxcbiAgICAvLyBzaW5jZSB0aGUgdXNlciBtaWdodCBub3Qgd2lzaCB0byByZWRpcmVjdCBhbiB1bnNhZmUgcmVxdWVzdC5cbiAgICAvLyBSRkM3MjMxwqc2LjQuNzogVGhlIDMwNyAoVGVtcG9yYXJ5IFJlZGlyZWN0KSBzdGF0dXMgY29kZSBpbmRpY2F0ZXNcbiAgICAvLyB0aGF0IHRoZSB0YXJnZXQgcmVzb3VyY2UgcmVzaWRlcyB0ZW1wb3JhcmlseSB1bmRlciBhIGRpZmZlcmVudCBVUklcbiAgICAvLyBhbmQgdGhlIHVzZXIgYWdlbnQgTVVTVCBOT1QgY2hhbmdlIHRoZSByZXF1ZXN0IG1ldGhvZFxuICAgIC8vIGlmIGl0IHBlcmZvcm1zIGFuIGF1dG9tYXRpYyByZWRpcmVjdGlvbiB0byB0aGF0IFVSSS5cbiAgICB2YXIgaGVhZGVyO1xuICAgIHZhciBoZWFkZXJzID0gdGhpcy5fb3B0aW9ucy5oZWFkZXJzO1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXNDb2RlICE9PSAzMDcgJiYgISh0aGlzLl9vcHRpb25zLm1ldGhvZCBpbiBTQUZFX01FVEhPRFMpKSB7XG4gICAgICB0aGlzLl9vcHRpb25zLm1ldGhvZCA9IFwiR0VUXCI7XG4gICAgICAvLyBEcm9wIGEgcG9zc2libGUgZW50aXR5IGFuZCBoZWFkZXJzIHJlbGF0ZWQgdG8gaXRcbiAgICAgIHRoaXMuX3JlcXVlc3RCb2R5QnVmZmVycyA9IFtdO1xuICAgICAgZm9yIChoZWFkZXIgaW4gaGVhZGVycykge1xuICAgICAgICBpZiAoL15jb250ZW50LS9pLnRlc3QoaGVhZGVyKSkge1xuICAgICAgICAgIGRlbGV0ZSBoZWFkZXJzW2hlYWRlcl07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEcm9wIHRoZSBIb3N0IGhlYWRlciwgYXMgdGhlIHJlZGlyZWN0IG1pZ2h0IGxlYWQgdG8gYSBkaWZmZXJlbnQgaG9zdFxuICAgIGlmICghdGhpcy5faXNSZWRpcmVjdCkge1xuICAgICAgZm9yIChoZWFkZXIgaW4gaGVhZGVycykge1xuICAgICAgICBpZiAoL15ob3N0JC9pLnRlc3QoaGVhZGVyKSkge1xuICAgICAgICAgIGRlbGV0ZSBoZWFkZXJzW2hlYWRlcl07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBQZXJmb3JtIHRoZSByZWRpcmVjdGVkIHJlcXVlc3RcbiAgICB2YXIgcmVkaXJlY3RVcmwgPSB1cmwucmVzb2x2ZSh0aGlzLl9jdXJyZW50VXJsLCBsb2NhdGlvbik7XG4gICAgZGVidWcoXCJyZWRpcmVjdGluZyB0b1wiLCByZWRpcmVjdFVybCk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLl9vcHRpb25zLCB1cmwucGFyc2UocmVkaXJlY3RVcmwpKTtcbiAgICB0aGlzLl9pc1JlZGlyZWN0ID0gdHJ1ZTtcbiAgICB0aGlzLl9wZXJmb3JtUmVxdWVzdCgpO1xuXG4gICAgLy8gRGlzY2FyZCB0aGUgcmVtYWluZGVyIG9mIHRoZSByZXNwb25zZSB0byBhdm9pZCB3YWl0aW5nIGZvciBkYXRhXG4gICAgcmVzcG9uc2UuZGVzdHJveSgpO1xuICB9XG4gIGVsc2Uge1xuICAgIC8vIFRoZSByZXNwb25zZSBpcyBub3QgYSByZWRpcmVjdDsgcmV0dXJuIGl0IGFzLWlzXG4gICAgcmVzcG9uc2UucmVzcG9uc2VVcmwgPSB0aGlzLl9jdXJyZW50VXJsO1xuICAgIHJlc3BvbnNlLnJlZGlyZWN0cyA9IHRoaXMuX3JlZGlyZWN0cztcbiAgICB0aGlzLmVtaXQoXCJyZXNwb25zZVwiLCByZXNwb25zZSk7XG5cbiAgICAvLyBDbGVhbiB1cFxuICAgIHRoaXMuX3JlcXVlc3RCb2R5QnVmZmVycyA9IFtdO1xuICB9XG59O1xuXG4vLyBXcmFwcyB0aGUga2V5L3ZhbHVlIG9iamVjdCBvZiBwcm90b2NvbHMgd2l0aCByZWRpcmVjdCBmdW5jdGlvbmFsaXR5XG5mdW5jdGlvbiB3cmFwKHByb3RvY29scykge1xuICAvLyBEZWZhdWx0IHNldHRpbmdzXG4gIHZhciBleHBvcnRzID0ge1xuICAgIG1heFJlZGlyZWN0czogMjEsXG4gICAgbWF4Qm9keUxlbmd0aDogMTAgKiAxMDI0ICogMTAyNCxcbiAgfTtcblxuICAvLyBXcmFwIGVhY2ggcHJvdG9jb2xcbiAgdmFyIG5hdGl2ZVByb3RvY29scyA9IHt9O1xuICBPYmplY3Qua2V5cyhwcm90b2NvbHMpLmZvckVhY2goZnVuY3Rpb24gKHNjaGVtZSkge1xuICAgIHZhciBwcm90b2NvbCA9IHNjaGVtZSArIFwiOlwiO1xuICAgIHZhciBuYXRpdmVQcm90b2NvbCA9IG5hdGl2ZVByb3RvY29sc1twcm90b2NvbF0gPSBwcm90b2NvbHNbc2NoZW1lXTtcbiAgICB2YXIgd3JhcHBlZFByb3RvY29sID0gZXhwb3J0c1tzY2hlbWVdID0gT2JqZWN0LmNyZWF0ZShuYXRpdmVQcm90b2NvbCk7XG5cbiAgICAvLyBFeGVjdXRlcyBhIHJlcXVlc3QsIGZvbGxvd2luZyByZWRpcmVjdHNcbiAgICB3cmFwcGVkUHJvdG9jb2wucmVxdWVzdCA9IGZ1bmN0aW9uIChpbnB1dCwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICAgIC8vIFBhcnNlIHBhcmFtZXRlcnNcbiAgICAgIGlmICh0eXBlb2YgaW5wdXQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgdmFyIHVybFN0ciA9IGlucHV0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlucHV0ID0gdXJsVG9PcHRpb25zKG5ldyBVUkwodXJsU3RyKSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgICAgaW5wdXQgPSB1cmwucGFyc2UodXJsU3RyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoVVJMICYmIChpbnB1dCBpbnN0YW5jZW9mIFVSTCkpIHtcbiAgICAgICAgaW5wdXQgPSB1cmxUb09wdGlvbnMoaW5wdXQpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrID0gb3B0aW9ucztcbiAgICAgICAgb3B0aW9ucyA9IGlucHV0O1xuICAgICAgICBpbnB1dCA9IHsgcHJvdG9jb2w6IHByb3RvY29sIH07XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBjYWxsYmFjayA9IG9wdGlvbnM7XG4gICAgICAgIG9wdGlvbnMgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXQgZGVmYXVsdHNcbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgbWF4UmVkaXJlY3RzOiBleHBvcnRzLm1heFJlZGlyZWN0cyxcbiAgICAgICAgbWF4Qm9keUxlbmd0aDogZXhwb3J0cy5tYXhCb2R5TGVuZ3RoLFxuICAgICAgfSwgaW5wdXQsIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5uYXRpdmVQcm90b2NvbHMgPSBuYXRpdmVQcm90b2NvbHM7XG5cbiAgICAgIGFzc2VydC5lcXVhbChvcHRpb25zLnByb3RvY29sLCBwcm90b2NvbCwgXCJwcm90b2NvbCBtaXNtYXRjaFwiKTtcbiAgICAgIGRlYnVnKFwib3B0aW9uc1wiLCBvcHRpb25zKTtcbiAgICAgIHJldHVybiBuZXcgUmVkaXJlY3RhYmxlUmVxdWVzdChvcHRpb25zLCBjYWxsYmFjayk7XG4gICAgfTtcblxuICAgIC8vIEV4ZWN1dGVzIGEgR0VUIHJlcXVlc3QsIGZvbGxvd2luZyByZWRpcmVjdHNcbiAgICB3cmFwcGVkUHJvdG9jb2wuZ2V0ID0gZnVuY3Rpb24gKGlucHV0LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgICAgdmFyIHJlcXVlc3QgPSB3cmFwcGVkUHJvdG9jb2wucmVxdWVzdChpbnB1dCwgb3B0aW9ucywgY2FsbGJhY2spO1xuICAgICAgcmVxdWVzdC5lbmQoKTtcbiAgICAgIHJldHVybiByZXF1ZXN0O1xuICAgIH07XG4gIH0pO1xuICByZXR1cm4gZXhwb3J0cztcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmZ1bmN0aW9uIG5vb3AoKSB7IC8qIGVtcHR5ICovIH1cblxuLy8gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvYmxvYi9tYXN0ZXIvbGliL2ludGVybmFsL3VybC5qc1xuZnVuY3Rpb24gdXJsVG9PcHRpb25zKHVybE9iamVjdCkge1xuICB2YXIgb3B0aW9ucyA9IHtcbiAgICBwcm90b2NvbDogdXJsT2JqZWN0LnByb3RvY29sLFxuICAgIGhvc3RuYW1lOiB1cmxPYmplY3QuaG9zdG5hbWUuc3RhcnRzV2l0aChcIltcIikgP1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgIHVybE9iamVjdC5ob3N0bmFtZS5zbGljZSgxLCAtMSkgOlxuICAgICAgdXJsT2JqZWN0Lmhvc3RuYW1lLFxuICAgIGhhc2g6IHVybE9iamVjdC5oYXNoLFxuICAgIHNlYXJjaDogdXJsT2JqZWN0LnNlYXJjaCxcbiAgICBwYXRobmFtZTogdXJsT2JqZWN0LnBhdGhuYW1lLFxuICAgIHBhdGg6IHVybE9iamVjdC5wYXRobmFtZSArIHVybE9iamVjdC5zZWFyY2gsXG4gICAgaHJlZjogdXJsT2JqZWN0LmhyZWYsXG4gIH07XG4gIGlmICh1cmxPYmplY3QucG9ydCAhPT0gXCJcIikge1xuICAgIG9wdGlvbnMucG9ydCA9IE51bWJlcih1cmxPYmplY3QucG9ydCk7XG4gIH1cbiAgcmV0dXJuIG9wdGlvbnM7XG59XG5cbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gd3JhcCh7IGh0dHA6IGh0dHAsIGh0dHBzOiBodHRwcyB9KTtcbm1vZHVsZS5leHBvcnRzLndyYXAgPSB3cmFwO1xuIiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIG9iai5jb25zdHJ1Y3RvciAhPSBudWxsICYmXG4gICAgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuIiwiLyoqXG4gKiBIZWxwZXJzLlxuICovXG5cbnZhciBzID0gMTAwMDtcbnZhciBtID0gcyAqIDYwO1xudmFyIGggPSBtICogNjA7XG52YXIgZCA9IGggKiAyNDtcbnZhciB3ID0gZCAqIDc7XG52YXIgeSA9IGQgKiAzNjUuMjU7XG5cbi8qKlxuICogUGFyc2Ugb3IgZm9ybWF0IHRoZSBnaXZlbiBgdmFsYC5cbiAqXG4gKiBPcHRpb25zOlxuICpcbiAqICAtIGBsb25nYCB2ZXJib3NlIGZvcm1hdHRpbmcgW2ZhbHNlXVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gdmFsXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAdGhyb3dzIHtFcnJvcn0gdGhyb3cgYW4gZXJyb3IgaWYgdmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSBudW1iZXJcbiAqIEByZXR1cm4ge1N0cmluZ3xOdW1iZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odmFsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWw7XG4gIGlmICh0eXBlID09PSAnc3RyaW5nJyAmJiB2YWwubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBwYXJzZSh2YWwpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInICYmIGlzRmluaXRlKHZhbCkpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5sb25nID8gZm10TG9uZyh2YWwpIDogZm10U2hvcnQodmFsKTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3ZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgdmFsaWQgbnVtYmVyLiB2YWw9JyArXG4gICAgICBKU09OLnN0cmluZ2lmeSh2YWwpXG4gICk7XG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBgc3RyYCBhbmQgcmV0dXJuIG1pbGxpc2Vjb25kcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZShzdHIpIHtcbiAgc3RyID0gU3RyaW5nKHN0cik7XG4gIGlmIChzdHIubGVuZ3RoID4gMTAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBtYXRjaCA9IC9eKC0/KD86XFxkKyk/XFwuP1xcZCspICoobWlsbGlzZWNvbmRzP3xtc2Vjcz98bXN8c2Vjb25kcz98c2Vjcz98c3xtaW51dGVzP3xtaW5zP3xtfGhvdXJzP3xocnM/fGh8ZGF5cz98ZHx3ZWVrcz98d3x5ZWFycz98eXJzP3x5KT8kL2kuZXhlYyhcbiAgICBzdHJcbiAgKTtcbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbiA9IHBhcnNlRmxvYXQobWF0Y2hbMV0pO1xuICB2YXIgdHlwZSA9IChtYXRjaFsyXSB8fCAnbXMnKS50b0xvd2VyQ2FzZSgpO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICd5ZWFycyc6XG4gICAgY2FzZSAneWVhcic6XG4gICAgY2FzZSAneXJzJzpcbiAgICBjYXNlICd5cic6XG4gICAgY2FzZSAneSc6XG4gICAgICByZXR1cm4gbiAqIHk7XG4gICAgY2FzZSAnd2Vla3MnOlxuICAgIGNhc2UgJ3dlZWsnOlxuICAgIGNhc2UgJ3cnOlxuICAgICAgcmV0dXJuIG4gKiB3O1xuICAgIGNhc2UgJ2RheXMnOlxuICAgIGNhc2UgJ2RheSc6XG4gICAgY2FzZSAnZCc6XG4gICAgICByZXR1cm4gbiAqIGQ7XG4gICAgY2FzZSAnaG91cnMnOlxuICAgIGNhc2UgJ2hvdXInOlxuICAgIGNhc2UgJ2hycyc6XG4gICAgY2FzZSAnaHInOlxuICAgIGNhc2UgJ2gnOlxuICAgICAgcmV0dXJuIG4gKiBoO1xuICAgIGNhc2UgJ21pbnV0ZXMnOlxuICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgY2FzZSAnbWlucyc6XG4gICAgY2FzZSAnbWluJzpcbiAgICBjYXNlICdtJzpcbiAgICAgIHJldHVybiBuICogbTtcbiAgICBjYXNlICdzZWNvbmRzJzpcbiAgICBjYXNlICdzZWNvbmQnOlxuICAgIGNhc2UgJ3NlY3MnOlxuICAgIGNhc2UgJ3NlYyc6XG4gICAgY2FzZSAncyc6XG4gICAgICByZXR1cm4gbiAqIHM7XG4gICAgY2FzZSAnbWlsbGlzZWNvbmRzJzpcbiAgICBjYXNlICdtaWxsaXNlY29uZCc6XG4gICAgY2FzZSAnbXNlY3MnOlxuICAgIGNhc2UgJ21zZWMnOlxuICAgIGNhc2UgJ21zJzpcbiAgICAgIHJldHVybiBuO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cbi8qKlxuICogU2hvcnQgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10U2hvcnQobXMpIHtcbiAgdmFyIG1zQWJzID0gTWF0aC5hYnMobXMpO1xuICBpZiAobXNBYnMgPj0gZCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gZCkgKyAnZCc7XG4gIH1cbiAgaWYgKG1zQWJzID49IGgpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGgpICsgJ2gnO1xuICB9XG4gIGlmIChtc0FicyA+PSBtKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBtKSArICdtJztcbiAgfVxuICBpZiAobXNBYnMgPj0gcykge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gcykgKyAncyc7XG4gIH1cbiAgcmV0dXJuIG1zICsgJ21zJztcbn1cblxuLyoqXG4gKiBMb25nIGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdExvbmcobXMpIHtcbiAgdmFyIG1zQWJzID0gTWF0aC5hYnMobXMpO1xuICBpZiAobXNBYnMgPj0gZCkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBkLCAnZGF5Jyk7XG4gIH1cbiAgaWYgKG1zQWJzID49IGgpIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgaCwgJ2hvdXInKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gbSkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBtLCAnbWludXRlJyk7XG4gIH1cbiAgaWYgKG1zQWJzID49IHMpIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgcywgJ3NlY29uZCcpO1xuICB9XG4gIHJldHVybiBtcyArICcgbXMnO1xufVxuXG4vKipcbiAqIFBsdXJhbGl6YXRpb24gaGVscGVyLlxuICovXG5cbmZ1bmN0aW9uIHBsdXJhbChtcywgbXNBYnMsIG4sIG5hbWUpIHtcbiAgdmFyIGlzUGx1cmFsID0gbXNBYnMgPj0gbiAqIDEuNTtcbiAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBuKSArICcgJyArIG5hbWUgKyAoaXNQbHVyYWwgPyAncycgOiAnJyk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKioqKioqKioqKioqKioqKioqKioqKipcclxuICogQG5hbWUgVFNcclxuICogQGF1dGhvciBKby5nZWxcclxuICogQGRhdGUgMjAxOS84LzE5IDAwMTlcclxuICoqKioqKioqKioqKioqKioqKioqKioqL1xyXG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcclxudmFyIHVybF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJ1cmxcIikpO1xyXG52YXIgaHR0cF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJodHRwXCIpKTtcclxudmFyIGh0dHBzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImh0dHBzXCIpKTtcclxudmFyIHpsaWJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiemxpYlwiKSk7XHJcbnZhciBidWlsZFVSTF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9oZWFkZXJzL2J1aWxkVVJMXCIpKTtcclxudmFyIGNyZWF0ZUVycm9yXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2NvcmUvY3JlYXRlRXJyb3JcIikpO1xyXG52YXIgZW5oYW5jZUVycm9yXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2NvcmUvZW5oYW5jZUVycm9yXCIpKTtcclxudmFyIHNldHRsZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9jb3JlL3NldHRsZVwiKSk7XHJcbnZhciBmb2xsb3dfcmVkaXJlY3RzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImZvbGxvdy1yZWRpcmVjdHNcIikpO1xyXG52YXIgaHR0cEZvbGxvdyA9IGZvbGxvd19yZWRpcmVjdHNfMS5kZWZhdWx0Lmh0dHA7XHJcbnZhciBodHRwc0ZvbGxvdyA9IGZvbGxvd19yZWRpcmVjdHNfMS5kZWZhdWx0Lmh0dHBzO1xyXG52YXIgcGtnID0gcmVxdWlyZSgnLi4vLi4vcGFja2FnZS5qc29uJyk7XHJcbnZhciBpc0h0dHBzID0gL2h0dHBzOj8vO1xyXG5leHBvcnRzLmh0dHBBZGFwdGVyID0gZnVuY3Rpb24gaHR0cEFkYXB0ZXIoY29uZmlnKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hIdHRwUmVxdWVzdChyZXNvbHZlUHJvbWlzZSwgcmVqZWN0UHJvbWlzZSkge1xyXG4gICAgICAgIHZhciB0aW1lciA9IHVuZGVmaW5lZDtcclxuICAgICAgICB2YXIgcmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgICAgICByZXNvbHZlUHJvbWlzZSh2YWx1ZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgcmVqZWN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICAgICAgICAgIHJlamVjdFByb21pc2UodmFsdWUpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGRhdGEgPSBjb25maWcuZGF0YTtcclxuICAgICAgICBjb25zb2xlLmluZm8oJzQ0OicsIGRhdGEpO1xyXG4gICAgICAgIHZhciBoZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XHJcbiAgICAgICAgLy8g6K6+572uIFVzZXItQWdlbnQg5p+Q5Lqb5pyN5Yqh6ZyA6KaBXHJcbiAgICAgICAgLy8g5Y+q5pyJ5Zyo6YWN572u5Lit5rKh5pyJ6K6+572u5aS05paH5Lu25pe25omN6K6+572u5aS05paH5Lu2XHJcbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9heGlvcy9heGlvcy9pc3N1ZXMvNjlcclxuICAgICAgICBpZiAoIWhlYWRlcnNbJ1VzZXItQWdlbnQnXSAmJiAhaGVhZGVyc1sndXNlci1hZ2VudCddKSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnNbJ1VzZXItQWdlbnQnXSA9ICdheGlvcy8nICsgcGtnLnZlcnNpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkYXRhICYmICF1dGlsc18xLmlzU3RyZWFtKGRhdGEpKSB7XHJcbiAgICAgICAgICAgIGlmIChCdWZmZXIuaXNCdWZmZXIoZGF0YSkpIHtcclxuICAgICAgICAgICAgICAgIC8vIOS7gOS5iOmDveayoeWBmlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHV0aWxzXzEuaXNBcnJheUJ1ZmZlcihkYXRhKSkge1xyXG4gICAgICAgICAgICAgICAgZGF0YSA9IEJ1ZmZlci5mcm9tKG5ldyBVaW50OEFycmF5KGRhdGEpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh1dGlsc18xLmlzU3RyaW5nKGRhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhID0gQnVmZmVyLmZyb20oZGF0YSwgJ3V0Zi04Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGNyZWF0ZUVycm9yXzEuZGVmYXVsdCgnRGF0YSBhZnRlciB0cmFuc2Zvcm1hdGlvbiBtdXN0IGJlIGEgc3RyaW5nLCBhbiBBcnJheUJ1ZmZlciwgYSBCdWZmZXIsIG9yIGEgU3RyZWFtJywgY29uZmlnKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8g5re75YqgQ29udGVudC1UeXBlIGhlYWRlciDlpoLmnpwgZGF0YSDlrZjlnKhcclxuICAgICAgICAgICAgaGVhZGVyc1snQ29udGVudC1MZW5ndGgnXSA9IGRhdGEubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXHJcbiAgICAgICAgdmFyIGF1dGggPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgLy8g5aaC5p6c6YWN572u5paH5Lu25byA5ZCv5o6I5p2DXHJcbiAgICAgICAgaWYgKGNvbmZpZy5hdXRoKSB7XHJcbiAgICAgICAgICAgIHZhciB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xyXG4gICAgICAgICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcclxuICAgICAgICAgICAgYXV0aCA9IHVzZXJuYW1lICsgJzonICsgcGFzc3dvcmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOino+aekFVSTFxyXG4gICAgICAgIHZhciBwYXJzZWQgPSB1cmxfMS5kZWZhdWx0LnBhcnNlKGNvbmZpZy51cmwpO1xyXG4gICAgICAgIHZhciBwcm90b2NvbCA9IHBhcnNlZC5wcm90b2NvbCB8fCAnaHR0cDonO1xyXG4gICAgICAgIGlmICghYXV0aCAmJiBwYXJzZWQuYXV0aCkge1xyXG4gICAgICAgICAgICB2YXIgdXJsQXV0aCA9IHBhcnNlZC5hdXRoLnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgICAgIHZhciB1cmxVc2VybmFtZSA9IHVybEF1dGhbMF0gfHwgJyc7XHJcbiAgICAgICAgICAgIHZhciB1cmxQYXNzd29yZCA9IHVybEF1dGhbMV0gfHwgJyc7XHJcbiAgICAgICAgICAgIGF1dGggPSB1cmxVc2VybmFtZSArICc6JyArIHVybFBhc3N3b3JkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlpoLmnpzlrZjlnKhhdXRo5YmH5Yiq6ZmkIO+8iOaZuumanOaQnOeLl+i8uOWFpeazle+8jOeCuuS7gOm6vOmAmeijoeaJk+WHuuS6hue5gemrlO+8n++8ie+8jOWIh+aPm+WIsFFR5bCN6Kmx5qGG5bCx6K6K5oiQ5LqG57Ch6auUXHJcbiAgICAgICAgaWYgKGF1dGgpXHJcbiAgICAgICAgICAgIGRlbGV0ZSBoZWFkZXJzLkF1dGhvcml6YXRpb247XHJcbiAgICAgICAgdmFyIGlzSHR0cHNSZXF1ZXN0ID0gaXNIdHRwcy50ZXN0KHByb3RvY29sKTtcclxuICAgICAgICB2YXIgYWdlbnQgPSBpc0h0dHBzUmVxdWVzdCA/IGNvbmZpZy5odHRwc0FnZW50IDogY29uZmlnLmh0dHBBZ2VudDtcclxuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgcGF0aDogYnVpbGRVUkxfMS5kZWZhdWx0KHBhcnNlZC5wYXRoLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplcikucmVwbGFjZSgvXlxcPy8sICcnKSxcclxuICAgICAgICAgICAgbWV0aG9kOiBjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXHJcbiAgICAgICAgICAgIGFnZW50OiBhZ2VudCxcclxuICAgICAgICAgICAgYXV0aDogYXV0aFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8g5aaC5p6c5pivc29ja2V0IOi3r+W+kVxyXG4gICAgICAgIGlmIChjb25maWcuc29ja2V0UGF0aClcclxuICAgICAgICAgICAgb3B0aW9ucy5zb2NrZXRQYXRoID0gY29uZmlnLnNvY2tldFBhdGg7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuaG9zdG5hbWUgPSBwYXJzZWQuaG9zdG5hbWU7XHJcbiAgICAgICAgICAgIG9wdGlvbnMucG9ydCA9IHBhcnNlZC5wb3J0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDkuI3lrZjlnKjku6PnkIZcclxuICAgICAgICB2YXIgcHJveHkgPSBjb25maWcucHJveHk7XHJcbiAgICAgICAgaWYgKCFwcm94eSAmJiBwcm94eSAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdmFyIHByb3h5RW52ID0gcHJvdG9jb2wuc2xpY2UoMCwgLTEpICsgJ19wcm94eSc7XHJcbiAgICAgICAgICAgIHZhciBwcm94eVVybCA9IHByb2Nlc3MuZW52W3Byb3h5RW52XSB8fCBwcm9jZXNzLmVudltwcm94eUVudi50b1VwcGVyQ2FzZSgpXTtcclxuICAgICAgICAgICAgLy8g5a2Y5Zyo5Luj55CGdXJsXHJcbiAgICAgICAgICAgIGlmIChwcm94eVVybCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhcnNlZFByb3h5VXJsID0gdXJsXzEuZGVmYXVsdC5wYXJzZShwcm94eVVybCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbm9Qcm94eUVudiA9IHByb2Nlc3MuZW52Lm5vX3Byb3h5IHx8IHByb2Nlc3MuZW52Lk5PX1BST1hZO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNob3VsZFByb3h5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIOayoeacieS7o+eQhueOr+Wig1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vUHJveHlFbnYpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbm9Qcm94eSA9IG5vUHJveHlFbnYuc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0udHJpbSgpOyB9KSB8fCAnJztcclxuICAgICAgICAgICAgICAgICAgICBzaG91bGRQcm94eSA9ICFub1Byb3h5LnNvbWUoZnVuY3Rpb24gcHJveHlNYXRjaChwcm94eUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwcm94eUVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm94eUVsZW1lbnQgPT09ICcqJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJveHlFbGVtZW50WzBdID09PSAnLicgJiYgcGFyc2VkLmhvc3RuYW1lLnN1YnN0cihwYXJzZWQuaG9zdG5hbWUubGVuZ3RoIC0gcHJveHlFbGVtZW50Lmxlbmd0aCkgPT09IHByb3h5RWxlbWVudCAmJiBwcm94eUVsZW1lbnQubWF0Y2goL1xcLi9nKS5sZW5ndGggPT09IHBhcnNlZC5ob3N0bmFtZS5tYXRjaCgvXFwuL2cpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlZC5ob3N0bmFtZSA9PT0gcHJveHlFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8g5bqU6K+l5Luj55CGXHJcbiAgICAgICAgICAgICAgICBpZiAoc2hvdWxkUHJveHkpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm94eSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9zdDogcGFyc2VkUHJveHlVcmwuaG9zdG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3Q6IHBhcnNlZFByb3h5VXJsLnBvcnRcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOWtmOWcqGF1dGhcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VkUHJveHlVcmwuYXV0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJveHlVcmxBdXRoID0gcGFyc2VkUHJveHlVcmwuYXV0aC5zcGxpdChcIjpcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5LmF1dGggPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogcHJveHlVcmxBdXRoWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHByb3h5VXJsQXV0aFsxXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5a2Y5Zyo5Luj55CGXHJcbiAgICAgICAgaWYgKHByb3h5KSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuaG9zdG5hbWUgPSBwcm94eS5ob3N0O1xyXG4gICAgICAgICAgICBvcHRpb25zLmhvc3QgPSBwcm94eS5ob3N0O1xyXG4gICAgICAgICAgICBvcHRpb25zLmhlYWRlcnMuaG9zdCA9IHBhcnNlZC5ob3N0bmFtZSArIChwYXJzZWQucG9ydCA/IFwiOlwiICsgcGFyc2VkLnBvc3QgOiBcIlwiKTtcclxuICAgICAgICAgICAgb3B0aW9ucy5wb3J0ID0gcHJveHkucG9ydDtcclxuICAgICAgICAgICAgb3B0aW9ucy5wYXRoID0gcHJvdG9jb2wgKyAnLy8nICsgcGFyc2VkLmhvc3RuYW1lICsgKHBhcnNlZC5wb3J0ID8gJzonICsgcGFyc2VkLnBvcnQgOiBcIlwiKSArIG9wdGlvbnMucGF0aDtcclxuICAgICAgICAgICAgLy8g5Z+656GA5Luj55CG5o6I5p2DXHJcbiAgICAgICAgICAgIGlmIChwcm94eS5hdXRoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYmFzZTY0ID0gQnVmZmVyLmZyb20ocHJveHkuYXV0aC51c2VybmFtZSArICc6JyArIHByb3h5LmF1dGgucGFzc3dvcmQsICd1dGY4JykudG9TdHJpbmcoJ2Jhc2U2NCcpO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5oZWFkZXJzWydQcm94eS1BdXRob3JpemF0aW9uJ10gPSAnQmFzaWMnICsgYmFzZTY0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB0cmFuc3BvcnQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdmFyIGlzSHR0cHNQcm94eSA9IGlzSHR0cHNSZXF1ZXN0ICYmIChwcm94eSA/IGlzSHR0cHMudGVzdChwcm94eS5wcm90b2NvbCkgOiB0cnVlKTtcclxuICAgICAgICBpZiAoY29uZmlnLnRyYW5zcG9ydClcclxuICAgICAgICAgICAgdHJhbnNwb3J0ID0gY29uZmlnLnRyYW5zcG9ydDtcclxuICAgICAgICBlbHNlIGlmIChjb25maWcubWF4UmVkaXJlY3RzID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRyYW5zcG9ydCA9IGlzSHR0cHNQcm94eSA/IGh0dHBzXzEuZGVmYXVsdCA6IGh0dHBfMS5kZWZhdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5tYXhSZWRpcmVjdHMpXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLm1heFJlZGlyZWN0cyA9IGNvbmZpZy5tYXhSZWRpcmVjdHM7XHJcbiAgICAgICAgICAgIHRyYW5zcG9ydCA9IGlzSHR0cHNQcm94eSA/IGh0dHBzRm9sbG93IDogaHR0cEZvbGxvdztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbmZpZy5tYXhDb250ZW50TGVuZ3RoICYmIGNvbmZpZy5tYXhDb250ZW50TGVuZ3RoID4gLTEpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5tYXhCb2R5TGVuZ3RoID0gY29uZmlnLm1heENvbnRlbnRMZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOWIm+W7unJlcXVlc3RcclxuICAgICAgICAvLyByZXF1ZXN0LOS4uuS7gOS5iOi/memHjOWFpeWPguS4gOS4quWFt+WQjeWHveaVsFxyXG4gICAgICAgIHZhciByZXEgPSB0cmFuc3BvcnQucmVxdWVzdChvcHRpb25zLCBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIC8vIGJ1ZyB0b2RvIOi/memHjOW6lOivpeacieS4gOS4qmNvbmZpZyDnmoTvvIHvvIHvvIEhIVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnPT09PScsIHJlcy5jb25maWcsICc9PT09PScpO1xyXG4gICAgICAgICAgICBpZiAocmVxLmFib3J0ZWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIC8vIOWmguaenOmcgOimge+8jOmAj+aYjuWcsOino+WOi+e8qeWTjeW6lOS4u+S9k1xyXG4gICAgICAgICAgICB2YXIgc3RyZWFtID0gcmVzO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHJlcy5oZWFkZXJzWydjb250ZW50LWVuY29kaW5nJ10pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2d6aXAnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnY29tcHJlc3MnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnZGVmbGF0ZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYWRkIHRoZSB1bnppcHBlciB0byB0aGUgYm9keSBzdHJlYW0gcHJvY2Vzc2luZyBwaXBlbGluZVxyXG4gICAgICAgICAgICAgICAgICAgIHN0cmVhbSA9IChyZXMuc3RhdHVzQ29kZSA9PT0gMjA0KSA/IHN0cmVhbSA6IHN0cmVhbS5waXBlKHpsaWJfMS5kZWZhdWx0LmNyZWF0ZVVuemlwKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgY29udGVudC1lbmNvZGluZyBpbiBvcmRlciB0byBub3QgY29uZnVzZSBkb3duc3RyZWFtIG9wZXJhdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcmVzLmhlYWRlcnNbJ2NvbnRlbnQtZW5jb2RpbmcnXTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDlpoLmnpzph43lrprlkJHvvIzov5Tlm57mnIDlkI7kuIDkuKror7fmsYJcclxuICAgICAgICAgICAgdmFyIGxhc3RSZXF1ZXN0ID0gcmVzLnJlcSB8fCByZXE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCflvIDlp4vlnKjov5nph4zkuKLlpLHkuoZyZXNwb25zZS1jb25maWfvvJonLCByZXMuY29uZmlnKTtcclxuICAgICAgICAgICAgLy/kvb/nlKhpbnRlcmZhY2VcclxuICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0ge1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiByZXMuc3RhdHVzQ29kZSxcclxuICAgICAgICAgICAgICAgIHN0YXR1c1RleHQ6IHJlcy5zdGF0dXNNZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogcmVzLmhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICBjb25maWc6IHJlcy5jb25maWcsXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0OiBsYXN0UmVxdWVzdFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3N0cmVhbScpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbygnMjE4OicsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YSA9IHN0cmVhbTtcclxuICAgICAgICAgICAgICAgIHNldHRsZV8xLmRlZmF1bHQocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2VCdWZmZXJfMSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgLy8gY2h1bmvnmoTnsbvlnovmmK8gVWludDhBcnJheVxyXG4gICAgICAgICAgICAgICAgc3RyZWFtLm9uKCdkYXRhJywgZnVuY3Rpb24gKGNodW5rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VCdWZmZXJfMS5wdXNoKGNodW5rKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBtYWtlIHN1cmUgdGhlIGNvbnRlbnQgbGVuZ3RoIGlzIG5vdCBvdmVyIHRoZSBtYXhDb250ZW50TGVuZ3RoIGlmIHNwZWNpZmllZFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25maWcubWF4Q29udGVudExlbmd0aCA+IC0xICYmIEJ1ZmZlci5jb25jYXQocmVzcG9uc2VCdWZmZXJfMSkubGVuZ3RoID4gY29uZmlnLm1heENvbnRlbnRMZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyZWFtLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yXzEuZGVmYXVsdCgnbWF4Q29udGVudExlbmd0aCBzaXplIG9mICcgKyBjb25maWcubWF4Q29udGVudExlbmd0aCArICcgZXhjZWVkZWQnLCBjb25maWcsIG51bGwsIGxhc3RSZXF1ZXN0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzdHJlYW0ub24oJ2Vycm9yJywgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXEuYWJvcnRlZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlbmhhbmNlRXJyb3JfMS5kZWZhdWx0KGVyciwgY29uZmlnLCBudWxsLCBsYXN0UmVxdWVzdCkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzdHJlYW0ub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2VEYXRhID0gQnVmZmVyLmNvbmNhdChyZXNwb25zZUJ1ZmZlcl8xKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSAhPT0gJ2FycmF5YnVmZmVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZURhdGEgPSByZXNwb25zZURhdGEudG9TdHJpbmcoY29uZmlnLnJlc3BvbnNlRW5jb2RpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhID0gcmVzcG9uc2VEYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbygnMjQ0OicsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldHRsZV8xLmRlZmF1bHQocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIOWkhOeQhumUmeivr1xyXG4gICAgICAgIHJlcS5vbignZXJyb3InLCBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXEuYWJvcnRlZClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgY29uc29sZS5pbmZvKFwi5aSE55CG6ZSZ6K+vOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICByZWplY3QoZW5oYW5jZUVycm9yXzEuZGVmYXVsdChlcnIsIGNvbmZpZywgbnVsbCwgcmVxKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8g5aSE55CG6K+35rGC6LaF5pe2XHJcbiAgICAgICAgaWYgKGNvbmZpZy50aW1lb3V0KSB7XHJcbiAgICAgICAgICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXEuYWJvcnRlZCgpOyAvL+e7iOatolxyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yXzEuZGVmYXVsdCgndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnLCByZXEpKTtcclxuICAgICAgICAgICAgfSwgY29uZmlnLnRpbWVvdXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlj5bmtoh0b2tlbiAsdGVzdOWmguaenOeUqOaIt+mFjee9ruS6hui/memHjO+8jOS8vOS5juWcqOS9v+eUqHNldFRpbWVJbnRlcnZhbCDlh7rnjrDlhoXlrZjov4fovb3nmoTpl67popjvvIzku6XliY3lnKjlvIDlj5Hml7blgJnpgYfliLBcclxuICAgICAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi5wcm9taXNlLnRoZW4oZnVuY3Rpb24gKGNhbmNlbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcS5hYm9ydGVkKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIHJlcS5hYm9ydCgpO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGNhbmNlbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlj5HpgIHor7fmsYJcclxuICAgICAgICBpZiAodXRpbHNfMS5pc1N0cmVhbShkYXRhKSkge1xyXG4gICAgICAgICAgICBkYXRhLm9uKCdlcnJvcicsIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlbmhhbmNlRXJyb3JfMS5kZWZhdWx0KGVyciwgY29uZmlnLCBudWxsLCByZXEpKTtcclxuICAgICAgICAgICAgfSkucGlwZShyZXEpOyAvLyDnnIvnnIvov5nkuKpzdHJlYW0g55qEcGlwZeeUqOazlVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJlcS5lbmQoZGF0YSk7XHJcbiAgICB9KTtcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIEBuYW1lIFRTXHJcbiAqIEBhdXRob3IgSm8uZ2VsXHJcbiAqIEBkYXRlIDIwMTkvOC8xOSAwMDE5XHJcbiAqKioqKioqKioqKioqKioqKioqKioqKi9cclxudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XHJcbnZhciBzZXR0bGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vY29yZS9zZXR0bGVcIikpO1xyXG52YXIgYnVpbGRVUkxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vaGVhZGVycy9idWlsZFVSTFwiKSk7XHJcbnZhciBwYXJzZUhlYWRlcnNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vaGVhZGVycy9wYXJzZUhlYWRlcnNcIikpO1xyXG52YXIgaXNVUkxTYW1lT3JpZ2luXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2hlYWRlcnMvaXNVUkxTYW1lT3JpZ2luXCIpKTtcclxudmFyIGNyZWF0ZUVycm9yXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2NvcmUvY3JlYXRlRXJyb3JcIikpO1xyXG5leHBvcnRzLnhockFkYXB0ZXIgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKGNvbmZpZykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICB2YXIgcmVxdWVzdERhdGEgPSBjb25maWcuZGF0YTtcclxuICAgICAgICBjb25zb2xlLmluZm8oJzIyOicsIGNvbmZpZyk7XHJcbiAgICAgICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XHJcbiAgICAgICAgaWYgKHV0aWxzXzEuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcclxuICAgICAgICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzWydDb250ZW50LVR5cGUnXTsgLy8g6K6p5rWP6KeI5Zmo5p2l6K6+572u5a6DXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgLy8gSFRUUCBiYXNpYyDmjojmnYNcclxuICAgICAgICBpZiAoY29uZmlnLmF1dGgpIHtcclxuICAgICAgICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XHJcbiAgICAgICAgICAgIHZhciBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkIHx8ICcnO1xyXG4gICAgICAgICAgICByZXF1ZXN0SGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0Jhc2ljJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7IC8vYnRvYT8/XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlcXVlc3Qub3Blbihjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCksIGJ1aWxkVVJMXzEuZGVmYXVsdChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xyXG4gICAgICAgIC8vIOiuvue9ruivt+axgui2heaXtuavq+enklxyXG4gICAgICAgIHJlcXVlc3QudGltZW91dCA9IGNvbmZpZy50aW1lb3V0O1xyXG4gICAgICAgIC8vIOebkeWQrHJlYWR5IOeKtuaAgVxyXG4gICAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIXJlcXVlc3QgfHwgcmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAvLyBUaGUgcmVxdWVzdCBvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcclxuICAgICAgICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcclxuICAgICAgICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcclxuICAgICAgICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxyXG4gICAgICAgICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDAgJiYgKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy8g5YeG5aSH5ZON5bqUXHJcbiAgICAgICAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QUxMUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ID8gcGFyc2VIZWFkZXJzXzEuZGVmYXVsdChyZXF1ZXN0LmdldEFMTFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7IC8vIHBhcnNlSGVhZGVyXHJcbiAgICAgICAgICAgIHZhciByZXNwb25zZURhdGEgPSAhY29uZmlnLnJlc3BvbnNlVHlwZSB8fCBjb25maWcucmVzcG9uc2VUeXBlID09PSAndGV4dCcgPyByZXF1ZXN0LnJlc3BvbnNlVHlwZSA6IHJlcXVlc3QucmVzcG9uc2U7IC8vPz/ov5lyZXF1ZXN0IOS4uuWVpei/mOacieS4gOS4qnJlc3BvbnNlXHJcbiAgICAgICAgICAgIHZhciByZXNwb25zZSA9IHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcclxuICAgICAgICAgICAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1c1RleHQsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICBjb25maWc6IGNvbmZpZyxcclxuICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgc2V0dGxlXzEuZGVmYXVsdChyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgLy8g5riF55CG6K+35rGCXHJcbiAgICAgICAgICAgIHJlcXVlc3QgPSBudWxsO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8g5aSE55CG5rWP6KeI5Zmo6K+35rGC5Y+W5raI77yI5LiO5omL5Yqo5Y+W5raI55u45Y+N77yJXHJcbiAgICAgICAgcmVxdWVzdC5vbmFib3J0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIXJlcXVlc3QpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIHJlamVjdChjcmVhdGVFcnJvcl8xLmRlZmF1bHQoJ1JlcXVlc3QgYWJvcnRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsIHJlcXVlc3QpKTtcclxuICAgICAgICAgICAgLy8g5riF55CG6KuL5rGCXHJcbiAgICAgICAgICAgIHJlcXVlc3QgPSBudWxsO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8g5aSE55CG5L2O57qn572R57uc6ZSZ6K+vXHJcbiAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyDnnJ/mraPnmoTplJnor6/ooqvmtY/op4jlmajpmpDol4/otbfmnaVcclxuICAgICAgICAgICAgLy8gT25FcnJvcuWPquW6lOWcqOe9kee7nOmUmeivr+aXtuinpuWPkeOAglxyXG4gICAgICAgICAgICByZWplY3QoY3JlYXRlRXJyb3JfMS5kZWZhdWx0KCdOZXR3b3JrIEVycm9yJywgY29uZmlnLCBudWxsLCByZXF1ZXN0KSk7XHJcbiAgICAgICAgICAgIC8vIOa4heeQhuiri+axglxyXG4gICAgICAgICAgICByZXF1ZXN0ID0gbnVsbDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIOWkhOeQhui2heaXtlxyXG4gICAgICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZWplY3QoY3JlYXRlRXJyb3JfMS5kZWZhdWx0KCd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsIHJlcXVlc3QpKTtcclxuICAgICAgICAgICAgLy8g5riF55CG6KuL5rGCXHJcbiAgICAgICAgICAgIHJlcXVlc3QgPSBudWxsO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8g5re75YqgIFhTUkYgaGVhZGVyXHJcbiAgICAgICAgLy8g5Y+q5pyJ5Zyo5qCH5YeG5rWP6KeI5Zmo546v5aKD5Lit6L+Q6KGM5pe277yM5omN6IO95omn6KGM5q2k5pON5L2c44CCXHJcbiAgICAgICAgLy8g5bCk5YW25piv5aaC5p6c5oiR5Lus5piv5LiA5Liqd2ViIHdvcmtlcu+8jOaIluiAheaYr3JlYWN0LW5hdGl2ZVxyXG4gICAgICAgIGlmICh1dGlsc18xLmlzU3RhbmRhcmRCcm93c2VyRW52KCkpIHtcclxuICAgICAgICAgICAgdmFyIGNvb2tpZXMgPSByZXF1aXJlKCcuLi9oZWFkZXJzL2Nvb2tpZXMnKTsgLy8gdGVzdOWmguS9leiuqeWug+aUueaIkOS4umltcG9ydO+8n+i/meS4qm1vZHVsZeaYr+S4gOS4queri+WNs+aJp+ihjOWHveaVsFxyXG4gICAgICAgICAgICAvLyBpbXBvcnQgY29va2llcyBmcm9tICcuLi9oZWFkZXJzL2Nvb2tpZXMnXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvb2tpZXMpXHJcbiAgICAgICAgICAgIC8vIGFkZCB4c3JmIGhlYWRlclxyXG4gICAgICAgICAgICB2YXIgeHNyZlZhbHVlID0gKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgfHwgaXNVUkxTYW1lT3JpZ2luXzEuZGVmYXVsdChjb25maWcudXJsKSAmJiBjb25maWcueHNyZkNvb2tpZU5hbWUgPyBjb29raWVzLnJlYWQoY29uZmlnLnhzcmZDb29raWVOYW1lKSA6IHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgIGlmICh4c3JmVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5re75YqgaGVhZGVycyDliLAgcmVxdWVzdFxyXG4gICAgICAgIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4gcmVxdWVzdCkge1xyXG4gICAgICAgICAgICB1dGlsc18xLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdERhdGEgPT09ICd1bmRlZmluZWQnICYmIGtleS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWmguaenGRhdGEg5pivdW5kZWZpbmVk77yM5YiZ56e76ZmkIENvbnRlbnQtVHlwZVxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5ZCm5YiZ5bCGaGVhZGVyIOa3u+WKoOWIsHJlcXVlc3RcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5aaC5p6c6ZyA6KaB77yM5re75Yqg5bim5Yet5o2u55qE6K+35rGCXHJcbiAgICAgICAgaWYgKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMpIHtcclxuICAgICAgICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlpoLmnpzpnIDopoHvvIzlkJHor7fmsYLmt7vliqByZXNwb25zZVR5cGVcclxuICAgICAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDmtY/op4jlmajlvJXlj5HnmoTpooTmnJ9kb21FeGNlcHRpb27kuI54bWxodHRwUmVxdWVzdOe6p+WIqzLkuI3lhbzlrrnjgIJcclxuICAgICAgICAgICAgICAgIC8vIOS9huaYr++8jOWvueS6juKAnGpzb27igJ3nsbvlnovvvIzov5nlj6/ku6XooqvnpoHmraLvvIzlm6DkuLrlroPlj6/ku6XnlLHpu5jorqTnmoTigJx0cmFuc2Zvcm1SZXNwb25zZeKAneWHveaVsOino+aekOOAglxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUgIT09ICdqc29uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5b+F6KaB5pe25aSE55CG6L+b5bqmXHJcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcub25Eb3dubG9hZFByb2Nlc3MgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9jZXNzJywgY29uZmlnLm9uRG93bmxvYWRQcm9jZXNzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5bm26Z2e5omA5pyJ5rWP6KeI5Zmo6YO95pSv5oyBdXBsb2Fk5LqL5Lu2XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xyXG4gICAgICAgICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gYnVnIOi2heaXtjQ45Liq5bCP5pe277yM5piv5ZCm5Lya5a+86Ie05YaF5a2Y5rOE5ryPXHJcbiAgICAgICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xyXG4gICAgICAgICAgICAvLyDlpITnkIbms6jplIBcclxuICAgICAgICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXF1ZXN0KVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdChjYW5jZWwpO1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdCA9IG51bGw7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVxdWVzdERhdGEgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmVxdWVzdERhdGEgPSBudWxsO1xyXG4gICAgICAgIC8vIOWPkemAgXJlcXVlc3RcclxuICAgICAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xyXG4gICAgfSk7XHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG4vKipcclxuICogQGRlc2MgQXhpb3Mg5YWl5Y+j5paH5Lu2XHJcbiAqL1xyXG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgQXhpb3NfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb3JlL0F4aW9zXCIpKTtcclxudmFyIGRlZmF1bHRzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vZGVmYXVsdHNcIikpO1xyXG4vKipcclxuICogQGRlc2Mg5Yib5bu6QXhpb3Mg5a6e5L6LXHJcbiAqXHJcbiAqL1xyXG52YXIgY3JlYXRlSW5zdGFuY2UgPSBmdW5jdGlvbiAoZGVmYXVsdENvbmZpZykge1xyXG4gICAgcmV0dXJuIG5ldyBBeGlvc18xLmRlZmF1bHQoZGVmYXVsdENvbmZpZyk7XHJcbn07XHJcbi8vIOWIm+W7uuimgeWvvOWHuueahOm7mOiupOWunuS+i1xyXG52YXIgYXhpb3MgPSBuZXcgQXhpb3NfMS5kZWZhdWx0KGRlZmF1bHRzXzEuZGVmYXVsdCk7XHJcbi8vIGNvbnN0IGF4aW9zOiBhbnkgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XHJcbi8vIOaatOmcsuexu0F4aW9zXHJcbmF4aW9zLkF4aW9zID0gQXhpb3NfMS5kZWZhdWx0O1xyXG4vLyDnlKjkuo7liJvlu7rmlrDlrp7kvovnmoTlt6XljoLmqKHlvI/lh73mlbBcclxuYXhpb3MuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGluc3RhbmNlQ29uZmlnKSB7XHJcbiAgICByZXR1cm4gbmV3IEF4aW9zXzEuZGVmYXVsdChfX2Fzc2lnbih7fSwgYXhpb3MuZGVmYXVsdHMsIGluc3RhbmNlQ29uZmlnIHx8IHt9KSk7XHJcbn07XHJcbi8vIOaatOmcsiBheGlvcyDnmoRDYW5jZWwgJiBDYW5jZWxUb2tlblxyXG5heGlvcy5DYW5jZWwgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9faW1wb3J0U3RhcihyZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWwnKSk7IH0pOyB9O1xyXG5heGlvcy5DYW5jZWxUb2tlbiA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gX19pbXBvcnRTdGFyKHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbFRva2VuJykpOyB9KTsgfTtcclxuYXhpb3MuaXNDYW5jZWwgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9faW1wb3J0U3RhcihyZXF1aXJlKCcuL2NhbmNlbC9pc0NhbmNlbCcpKTsgfSk7IH07XHJcbi8vIOaatOmcsiBhbGwvc3ByZWFkIOW5suWYm+eahO+8n1xyXG5heGlvcy5hbGwgPSBmdW5jdGlvbiAocHJvbWlzZXMpIHtcclxuICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbn07XHJcbmF4aW9zLnNwcmVhZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gX19pbXBvcnRTdGFyKHJlcXVpcmUoJy4vaGVhZGVycy9zcHJlYWQnKSk7IH0pOyB9O1xyXG52YXIgeCA9IGF4aW9zLmNyZWF0ZSh7fSk7XHJcbnguZ2V0KCdodHRwOi8vMTgzLjEzMS4yMDIuMTM6ODA4MScsIHsgZGF0YTogeyBxdWVyeTogeyBrdzogXCJiYWlkdVwiIH0gfSB9KVxyXG4gICAgLnRoZW4oZnVuY3Rpb24gKHgpIHtcclxuICAgIGNvbnNvbGUuaW5mbyhcInJlczpcIiwgeCk7XHJcbn0pXHJcbiAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgY29uc29sZS5pbmZvKFwiZXJyLTExOlwiLCBlcnIpO1xyXG59KTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gYXhpb3M7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG4vKipcclxuICogQGRlc2MgYENhbmNlbGAg5byV5Y+R55qE5Y+W5raI5a+56LGhXHJcbiAqIEBjbGFzc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxyXG4gKi9cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgQ2FuY2VsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ2FuY2VsKG1lc3NhZ2UpIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4gICAgICAgIHRoaXMuX19DQU5DRUxfXyA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBDYW5jZWwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAnQ2FuY2VsICcgKyAodGhpcy5tZXNzYWdlID8gJzonICsgdGhpcy5tZXNzYWdlIDogXCJcIik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENhbmNlbDtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gQ2FuY2VsO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgQ2FuY2VsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vQ2FuY2VsXCIpKTtcclxuLyoqXHJcbiAqIEBkZXNjIGBDYW5jZWxUb2tlbmDmmK/lj6/nlKjkuo7or7fmsYLlj5bmtojmk43kvZznmoTlr7nosaHjgIJcclxuICogQGNsYXNzXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIOaJp+ihjOWZqOWHveaVsFxyXG4gKi9cclxudmFyIENhbmNlbFRva2VuID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ2FuY2VsVG9rZW4oZXhlY3V0b3IpIHtcclxuICAgICAgICB2YXIgcmVzb2x2ZVByb21pc2UgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXM7XHJcbiAgICAgICAgZXhlY3V0b3IoZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgLy8g5bey6K+35rGC5Y+W5raIXHJcbiAgICAgICAgICAgIGlmICh0b2tlbi5yZWFzb24pXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWxfMS5kZWZhdWx0KG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIENhbmNlbFRva2VuO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBDYW5jZWxUb2tlbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBAYXV0aG9yIEpvLmdlbFxyXG4gKiBAZGF0ZSAyMDE5LzgvMjAgMDAyMFxyXG4gKioqKioqKioqKioqKioqKioqKioqKiovXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZnVuY3Rpb24gaXNDYW5jZWwodmFsdWUpIHtcclxuICAgIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBpc0NhbmNlbDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbi8qKlxyXG4gKiBAZGVzYyBBeGlvcyBjb3JlIGNvZGVcclxuICogKi9cclxudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBJbnRlcmNlcHRvck1hbmFnZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9JbnRlcmNlcHRvck1hbmFnZXJcIikpO1xyXG52YXIgbWVyZ2VDb25maWdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tZXJnZUNvbmZpZ1wiKSk7XHJcbnZhciBidWlsZFVSTF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9oZWFkZXJzL2J1aWxkVVJMXCIpKTtcclxudmFyIGRpc3BhdGNoUmVxdWVzdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2Rpc3BhdGNoUmVxdWVzdFwiKSk7XHJcbnZhciBwa2cgPSByZXF1aXJlKCcuLi8uLi9wYWNrYWdlLmpzb24nKTtcclxuLyoqXHJcbiAqIEBkZXNjIOWIm+W7uuS4gOS4qkF4aW9z5paw5a6e5L6LLOS7pWVzNiBjbGFzcyDmlrnlvI/lo7DmmI5cclxuICpcclxuICogKi9cclxudmFyIEF4aW9zID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQXhpb3MoaW5zdGFuY2VDb25maWcpIHtcclxuICAgICAgICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XHJcbiAgICAgICAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXJfMS5kZWZhdWx0KCksXHJcbiAgICAgICAgICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyXzEuZGVmYXVsdCgpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBeGlvcy5wcm90b3R5cGUsIFwidmVyc2lvblwiLCB7XHJcbiAgICAgICAgLy8g5L+d5oqkYXhpb3MgdmVyc2lvblxyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcGtnLnZlcnNpb24gfHwgJyc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDlpoLmnpzlsJ3or5Xljrvorr7nva7vvIzliJnmipvlh7rplJnor69cclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgdGhyb3cgXCJDYW4ndCBzZXR0aW5nIHRoZSBBeGlvcyB2ZXJzaW9uXCI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBBeGlvcy5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIChjb25maWcpIHtcclxuICAgICAgICBjb25maWcgPSBjb25maWcgfHwge307XHJcbiAgICAgICAgY29uZmlnID0gbWVyZ2VDb25maWdfMS5kZWZhdWx0KHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XHJcbiAgICAgICAgY29uZmlnLm1ldGhvZCA9IGNvbmZpZy5tZXRob2QgPyBjb25maWcubWV0aG9kLnRvTG93ZXJDYXNlKCkgOiAnZ2V0JzsgLy/pu5jorqRnZXQs5bm26L2s5o2i5bCP5YaZbWV0aG9k5a2X5q61XHJcbiAgICAgICAgLy8g6L+e5o6l5oum5oiq5Zmo5Lit6Ze05Lu2XHJcbiAgICAgICAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdF8xLmRlZmF1bHQsIHVuZGVmaW5lZF07XHJcbiAgICAgICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcclxuICAgICAgICAvLyDlkJHnrKzkuIDpobnmt7vliqBcclxuICAgICAgICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcclxuICAgICAgICAgICAgY2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyDlkJHlkI7pnaLmt7vliqBcclxuICAgICAgICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xyXG4gICAgICAgICAgICBjaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihjaGFpbi5zaGlmdCgpLCBjaGFpbi5zaGlmdCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgQXhpb3MucHJvdG90eXBlLmdldFVyaSA9IGZ1bmN0aW9uIChjb25maWcpIHtcclxuICAgICAgICBjb25maWcgPSBtZXJnZUNvbmZpZ18xLmRlZmF1bHQodGhpcy5kZWZhdWx0cywgY29uZmlnKTtcclxuICAgICAgICByZXR1cm4gYnVpbGRVUkxfMS5kZWZhdWx0KGNvbmZpZy51cmwsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKS5yZXBsYWNlKC9eXFw/LywgJycpO1xyXG4gICAgfTtcclxuICAgIEF4aW9zLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAodXJsLCBjb25maWcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KF9fYXNzaWduKHt9LCBjb25maWcsIHsgbWV0aG9kOiAnZGVsZXRlJywgdXJsOiB1cmwgfSkpO1xyXG4gICAgfTtcclxuICAgIEF4aW9zLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAodXJsLCBjb25maWcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KF9fYXNzaWduKHt9LCBjb25maWcsIHsgbWV0aG9kOiAnZ2V0JywgdXJsOiB1cmwgfSkpO1xyXG4gICAgfTtcclxuICAgIEF4aW9zLnByb3RvdHlwZS5oZWFkID0gZnVuY3Rpb24gKHVybCwgY29uZmlnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChfX2Fzc2lnbih7fSwgY29uZmlnLCB7IG1ldGhvZDogJ2hlYWQnLCB1cmw6IHVybCB9KSk7XHJcbiAgICB9O1xyXG4gICAgQXhpb3MucHJvdG90eXBlLm9wdGlvbnMgPSBmdW5jdGlvbiAodXJsLCBjb25maWcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KF9fYXNzaWduKHt9LCBjb25maWcsIHsgbWV0aG9kOiAnb3B0aW9ucycsIHVybDogdXJsIH0pKTtcclxuICAgIH07XHJcbiAgICBBeGlvcy5wcm90b3R5cGUucG9zdCA9IGZ1bmN0aW9uICh1cmwsIGRhdGEsIGNvbmZpZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QoX19hc3NpZ24oe30sIGNvbmZpZywgeyBtZXRob2Q6ICdwb3N0JywgdXJsOiB1cmwsIGRhdGE6IGRhdGEgfSkpO1xyXG4gICAgfTtcclxuICAgIEF4aW9zLnByb3RvdHlwZS5wdXQgPSBmdW5jdGlvbiAodXJsLCBkYXRhLCBjb25maWcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KF9fYXNzaWduKHt9LCBjb25maWcsIHsgbWV0aG9kOiAncHV0JywgdXJsOiB1cmwsIGRhdGE6IGRhdGEgfSkpO1xyXG4gICAgfTtcclxuICAgIEF4aW9zLnByb3RvdHlwZS5wYXRjaCA9IGZ1bmN0aW9uICh1cmwsIGRhdGEsIGNvbmZpZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QoX19hc3NpZ24oe30sIGNvbmZpZywgeyBtZXRob2Q6ICdwYXRjaCcsIHVybDogdXJsLCBkYXRhOiBkYXRhIH0pKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQXhpb3M7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEF4aW9zO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKioqKioqKioqKioqKioqKioqKioqKipcclxuICogQGRlc2MgIOaLpuaIquWZqOeuoeeQhuWZqFxyXG4gKiBAYXV0aG9yIEpvLmdlbFxyXG4gKiBAZGF0ZSAyMDE5LzgvMjAgMDAyMFxyXG4gKioqKioqKioqKioqKioqKioqKioqKiovXHJcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xyXG52YXIgSW50ZXJjZXB0b3JNYW5hZ2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gSW50ZXJjZXB0b3JNYW5hZ2VyKCkge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlcnMgPSBbXTtcclxuICAgICAgICB0aGlzLmhhbmRsZXJzID0gW107XHJcbiAgICB9XHJcbiAgICBJbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIChmdWxmaWxsZWQsIHJlamVjdGVkKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVycy5wdXNoKHtcclxuICAgICAgICAgICAgZnVsZmlsbGVkOiBmdWxmaWxsZWQsXHJcbiAgICAgICAgICAgIHJlamVjdGVkOiByZWplY3RlZFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzYyDku47loIbmoIjkuK3liKDpmaTmi6bmiKrlmahcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpZCDnlLFg6L+U5Zue55qESUTkvb/nlKhgXHJcbiAgICAgKiAqL1xyXG4gICAgSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5lamVjdCA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIGlmICh0aGlzLmhhbmRsZXJzW2lkXSlcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICog6L+t5Luj5omA5pyJ5rOo5YaM55qE5oum5oiq5ZmoXHJcbiAgICAgKiDov5nnp43mlrnms5Xlr7nkuo7ot7Pov4dcclxuICAgICAqIOWPr+iDveW3suaIkOS4umBudWxsYOeahOaLpuaIquWZqOiwg+eUqGBlamVjdGDjgIJcclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIOiwg+eUqOavj+S4quaLpuaIquWZqOeahOWHveaVsFxyXG4gICAgICogKi9cclxuICAgIEludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChmbikge1xyXG4gICAgICAgIHV0aWxzXzEuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XHJcbiAgICAgICAgICAgIGlmIChoICE9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgZm4oaCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEludGVyY2VwdG9yTWFuYWdlcjtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gSW50ZXJjZXB0b3JNYW5hZ2VyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuLyoqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIEBhdXRob3IgSm8uZ2VsXHJcbiAqIEBkYXRlIDIwMTkvOC8xOSAwMDE5XHJcbiAqKioqKioqKioqKioqKioqKioqKioqKi9cclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgZW5oYW5jZUVycm9yXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vZW5oYW5jZUVycm9yXCIpKTtcclxuLyoqXHJcbiAqIEBkZXNjIOS9v+eUqOaMh+WumueahOa2iOaBr+OAgemFjee9ruOAgemUmeivr+S7o+eggeOAgeivt+axguWSjOWTjeW6lOWIm+W7uumUmeivr+WHveaVsFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZVxyXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2RlXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSByZXF1ZXN0XHJcbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZVxyXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxyXG4gKiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVFcnJvcihtZXNzYWdlLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XHJcbiAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XHJcbiAgICByZXR1cm4gZW5oYW5jZUVycm9yXzEuZGVmYXVsdChlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSk7XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlRXJyb3I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHRyYW5zZm9ybURhdGFfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi90cmFuc2Zvcm1EYXRhXCIpKTtcclxudmFyIGlzQ2FuY2VsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2NhbmNlbC9pc0NhbmNlbFwiKSk7XHJcbnZhciBpc0Fic29sdXRlVVJMXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2hlYWRlcnMvaXNBYnNvbHV0ZVVSTFwiKSk7XHJcbnZhciBjb21iaW5lVVJMc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9oZWFkZXJzL2NvbWJpbmVVUkxzXCIpKTtcclxudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XHJcbnZhciBkZWZhdWx0c18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9kZWZhdWx0c1wiKSk7XHJcbi8qKlxyXG4gKiBAZGVzYyB0aHJvd3Mg5aaC5p6c6K+35rGCY2FuY2Vs77yM5YiZ5oqb5Ye65LiA5LiqY2FuY2VsXHJcbiAqICovXHJcbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XHJcbiAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XHJcbiAgICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogQGRlc2Mg5L2/55So6YWN572u55qE6YCC6YWN5Zmo5bCG6K+35rGC5YiG5rS+5Yiw5pyN5Yqh5Zmo44CCXHJcbiAqICovXHJcbmZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcclxuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcclxuICAgIC8vIOaUr+aMgWJhc2VVUkwgY29uZmlnXHJcbiAgICBpZiAoY29uZmlnLmJhc2VVUkwgJiYgIWlzQWJzb2x1dGVVUkxfMS5kZWZhdWx0KGNvbmZpZy51cmwpKSB7XHJcbiAgICAgICAgY29uZmlnLnVybCA9IGNvbWJpbmVVUkxzXzEuZGVmYXVsdChjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XHJcbiAgICB9XHJcbiAgICAvLyDnoa7kv51oZWFkZXJzIOWtmOWcqFxyXG4gICAgY29uZmlnLmhlYWRlcnMgPSBjb25maWcuaGVhZGVycyB8fCB7fTtcclxuICAgIC8vIOi9rOaNonJlcXVlc3QgZGF0YVxyXG4gICAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhXzEuZGVmYXVsdChjb25maWcuZGF0YSwgY29uZmlnLmhlYWRlcnMsIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0KTtcclxuICAgIGNvbnNvbGUuaW5mbyhcIuatpOaXtueahGNvbmZpZ++8mlwiLCBjb25maWcpO1xyXG4gICAgLy8g5omB5bmz5YyWaGVhZGVyc1xyXG4gICAgY29uZmlnLmhlYWRlcnMgPSBfX2Fzc2lnbih7fSwgY29uZmlnLmhlYWRlcnMuY29ubW9uIHx8IHt9LCBjb25maWcuaGVhZGVyc1tjb25maWcubWV0aG9kXSB8fCB7fSwgY29uZmlnLmhlYWRlcnMgfHwge30pO1xyXG4gICAgLy8g5ZCO5pyf5oq956a7bWV0aG9k5L2c5Li65YWs5YWx5Y+Y6YePXHJcbiAgICB1dGlsc18xLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLCBmdW5jdGlvbiAobWV0aG9kKSB7XHJcbiAgICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XHJcbiAgICB9KTtcclxuICAgIC8vIGNvbnNvbGUuaW5mbyhcImNvbmZpZzpcIixjb25maWcpO1xyXG4gICAgLy8gY29uc29sZS5pbmZvKFwiZGVmYXVsdHM6XCIsZGVmYXVsdHMpO1xyXG4gICAgdmFyIGFkYXB0ZXIgPSBjb25maWcuYWRhcHRlciB8fCBkZWZhdWx0c18xLmRlZmF1bHQuYWRhcHRlcjtcclxuICAgIHJldHVybiBhZGFwdGVyKGNvbmZpZylcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XHJcbiAgICAgICAgLy8g6L2s5o2i5pWw5o2u5piv5LiN5piv5Ye65LqG54K56Zeu6aKYIFRPRE9cclxuICAgICAgICBjb25zb2xlLmluZm8oXCJyZXNwb25zZTExOjpcIiwgcmVzcG9uc2UpO1xyXG4gICAgICAgIC8vIOi9rOaNonJlc3BvbnNlIERhdGVcclxuICAgICAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YV8xLmRlZmF1bHQocmVzcG9uc2UuZGF0YSwgcmVzcG9uc2UuaGVhZGVycywgY29uZmlnLnRyYW5zZnJvbVJlc3BvbnNlKTtcclxuICAgICAgICBjb25zb2xlLmluZm8oJ3h4eEw6JywgcmVzcG9uc2UpO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZWFzb24pIHtcclxuICAgICAgICBpZiAoIWlzQ2FuY2VsXzEuZGVmYXVsdChyZWFzb24pKSB7XHJcbiAgICAgICAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcclxuICAgICAgICAgICAgLy8g6L2s5o2icmVzcG9uc2UgZGF0YVxyXG4gICAgICAgICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhXzEuZGVmYXVsdChyZWFzb24ucmVzcG9uc2UuZGF0YSwgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMsIGNvbmZpZy50cmFuc2Zyb21SZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBkaXNwYXRjaFJlcXVlc3Q7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBAZGVzYyDplJnor6/lop7lvLrnrqHnkIZcclxuICogQGF1dGhvciBKby5nZWxcclxuICogQGRhdGUgMjAxOS84LzE5IDAwMTlcclxuICoqKioqKioqKioqKioqKioqKioqKioqL1xyXG5mdW5jdGlvbiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcclxuICAgIGVycm9yLmNvbmZpZyA9IGNvbmZpZztcclxuICAgIGlmIChjb2RlKVxyXG4gICAgICAgIGVycm9yLmNvZGUgPSBjb2RlO1xyXG4gICAgZXJyb3IucmVxdWVzdCA9IHJlcXVlc3Q7XHJcbiAgICBlcnJvci5yZXNwb25lID0gcmVzcG9uc2U7XHJcbiAgICBlcnJvci5pc0F4aW9yc0Vycm9yID0gdHJ1ZTtcclxuICAgIGVycm9yLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAvLyDmoIflh4ZcclxuICAgICAgICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgIC8vIE1pY3Jvc29mdFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgbnVtYmVyOiB0aGlzLm51bWJlcixcclxuICAgICAgICAgICAgLy8gTW96aWxsYVxyXG4gICAgICAgICAgICBmaWxlbmFtZTogdGhpcy5maWxlbmFtZSxcclxuICAgICAgICAgICAgbGluZU51bWJlcjogdGhpcy5saW5lTnVtYmVyLFxyXG4gICAgICAgICAgICBjb2x1bW5OdW1iZXI6IHRoaXMuY29sdW1uTnVtYmVyLFxyXG4gICAgICAgICAgICBzdGFjazogdGhpcy5zdGFjayxcclxuICAgICAgICAgICAgLy8gQXhpb3NcclxuICAgICAgICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyxcclxuICAgICAgICAgICAgY29kZTogdGhpcy5jb2RlXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZXJyb3I7XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gZW5oYW5jZUVycm9yO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBAZGVzYyDlkIjlubZjb25maWdcclxuICogQGF1dGhvciBKby5nZWxcclxuICogQGRhdGUgMjAxOS84LzIwIDAwMjBcclxuICoqKioqKioqKioqKioqKioqKioqKioqL1xyXG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcclxuLyoqXHJcbiAqIEBwYXJhbSBjb25maWcyIGNvbmZpZzIg5ZCI5bm25YiwY29uZmlnMVxyXG4gKiBAcGFyYW0gY29uZmlnMSDlsIZjb25maWcy5ZCI5bm26L+b5p2lXHJcbiAqICovXHJcbmZ1bmN0aW9uIG1lcmdlQ29uZmlnKGNvbmZpZzEsIGNvbmZpZzIpIHtcclxuICAgIGlmIChjb25maWcxID09PSB2b2lkIDApIHsgY29uZmlnMSA9IHt9OyB9XHJcbiAgICBpZiAoY29uZmlnMiA9PT0gdm9pZCAwKSB7IGNvbmZpZzIgPSB7fTsgfVxyXG4gICAgY29uZmlnMiA9IGNvbmZpZzIgfHwge307XHJcbiAgICB2YXIgY29uZmlnID0ge307XHJcbiAgICB1dGlsc18xLmZvckVhY2goWyd1cmwnLCAnbWV0aG9kJywgJ3BhcmFtcycsICdkYXRhJ10sIGZ1bmN0aW9uIHZhbHVlRnJvbUNvbmZpZzIocHJvcCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHV0aWxzXzEuZm9yRWFjaChbJ2hlYWRlcnMnLCAnYXV0aCcsICdwcm94eSddLCBmdW5jdGlvbiBtZXJnZURlZXBQcm9wZXJ0aWVzKHByb3ApIHtcclxuICAgICAgICAvLyB0ZXN06L+Z6YeM5L2/55So77ya6Kej5p6E5pON5L2c56ym77yM6ZyA6KaB5b6F6aqM6K+BXHJcbiAgICAgICAgaWYgKHV0aWxzXzEuaXNPYmplY3QoY29uZmlnMltwcm9wXSkpIHtcclxuICAgICAgICAgICAgY29uZmlnW3Byb3BdID0gX19hc3NpZ24oe30sIGNvbmZpZzFbcHJvcF0sIGNvbmZpZzJbcHJvcF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodXRpbHNfMS5pc09iamVjdChjb25maWcxW3Byb3BdKSkge1xyXG4gICAgICAgICAgICBjb25maWdbcHJvcF0gPSBfX2Fzc2lnbih7fSwgY29uZmlnMVtwcm9wXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjb25maWcxW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBjb25maWdbcHJvcF0gPSBjb25maWcxW3Byb3BdO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdXRpbHNfMS5mb3JFYWNoKFsnYmFzZVVSTCcsICd0cmFuc2Zvcm1SZXF1ZXN0JywgJ3RyYW5zZm9ybVJlc3BvbnNlJywgJ3BhcmFtc1NlcmlhbGl6ZXInLFxyXG4gICAgICAgICd0aW1lb3V0JywgJ3dpdGhDcmVkZW50aWFscycsICdhZGFwdGVyJywgJ3Jlc3BvbnNlVHlwZScsICd4c3JmQ29va2llTmFtZScsXHJcbiAgICAgICAgJ3hzcmZIZWFkZXJOYW1lJywgJ29uVXBsb2FkUHJvY2VzcycsICdvbkRvd25sb2FkUHJvZ3Jlc3MnLCAnbWF4Q29udGVudExlbmd0aCcsXHJcbiAgICAgICAgJ3ZhbGlkYXRlU3RhdHVzJywgJ21heFJlZGlyZWN0cycsICdodHRwQWdlbnQnLCAnaHR0cHNBZ2VudCcsICdjYW5jZWxUb2tlbicsXHJcbiAgICAgICAgJ3NvY2tldFBhdGgnXHJcbiAgICBdLCBmdW5jdGlvbiBkZWZhdWx0VG9Db25maWcyKHByb3ApIHtcclxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjb25maWcxW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBjb25maWdbcHJvcF0gPSBjb25maWcxW3Byb3BdO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGNvbmZpZztcclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBtZXJnZUNvbmZpZztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGNyZWF0ZUVycm9yXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY3JlYXRlRXJyb3JcIikpO1xyXG4vKipcclxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cclxuICpcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBBIGZ1bmN0aW9uIHRoYXQgcmVzb2x2ZXMgdGhlIHByb21pc2UuXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cclxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cclxuICovXHJcbmZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIio5OTk6XCIscmVzcG9uc2UpXHJcbiAgICAvLyB0b2RvIHJlc3BvbnNlIOayoeaciWNvbmZpZ++8ge+8ge+8gVxyXG4gICAgY29uc29sZS5sb2coXCJyZXNwb25zZS5jb25maWc6XCIsIHJlc3BvbnNlLmNvbmZpZyk7XHJcbiAgICB2YXIgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XHJcbiAgICBpZiAodmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xyXG4gICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yXzEuZGVmYXVsdCgnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLCByZXNwb25zZS5jb25maWcsIG51bGwsIHJlc3BvbnNlLnJlcXVlc3QsIHJlc3BvbnNlKSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gc2V0dGxlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKioqKioqKioqKioqKioqKioqKioqKipcclxuICogQGF1dGhvciBKby5nZWxcclxuICogQGRhdGUgMjAxOS84LzIwIDAwMjBcclxuICoqKioqKioqKioqKioqKioqKioqKioqL1xyXG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcclxuLyoqXHJcbiAqIEBkZXNjIOi9rOaNouivt+axguaIluWTjeW6lOeahOaVsOaNrlxyXG4gKiBAcGFyYW0gZGF0YSB7T2JqZWN0fFN0cmluZ30g6KaB6L2s5o2i55qE5pWw5o2uXHJcbiAqIEBwYXJhbSBoZWFkZXJzIHtBcnJheX0g6K+35rGC5oiW5ZON5bqU55qE5aS0XHJcbiAqIEBwYXJhbSBmbnMge0FycmF5fEZ1bmN0aW9ufeWNleS4quWHveaVsOaIluWHveaVsOaVsOe7hFxyXG4gKiBAcmV0dXJucyAqIOi9rOaNouWQjueahOaVsOaNriB0b2RvXHJcbiAqICovXHJcbmZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgaGVhZGVycywgZm5zKSB7XHJcbiAgICB1dGlsc18xLmZvckVhY2goZm5zLCBmdW5jdGlvbiB0cmFuc2Zvcm0oZm4pIHtcclxuICAgICAgICBkYXRhID0gZm4oZGF0YSwgaGVhZGVycyk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBkYXRhO1xyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHRyYW5zZm9ybURhdGE7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcclxudmFyIG5vcm1hbGl6ZUhlYWRlck5hbWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9oZWFkZXJzL25vcm1hbGl6ZUhlYWRlck5hbWVcIikpO1xyXG52YXIgREVGQVVMVF9DT05URU5UX1RZUEUgPSB7XHJcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxufTtcclxuLy8g6K6+572uQ29udGVudCBUeXBl77yM5aaC5p6c5rKh5pyJ6K6+572u55qE6K+dIOeahOWHveaVsFxyXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgdmFsdWUpIHtcclxuICAgIGlmICghdXRpbHNfMS5pc1VuZGVmaW5lZChoZWFkZXJzKSAmJiB1dGlsc18xLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xyXG4gICAgICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XHJcbiAgICB9XHJcbn1cclxuLy8g6I635Y+W6buY6K6k55qE6YCC6YWN5ZmoXHJcbi8vIHRvZG8g6L+Z5Z2X5Zyw5pa555qEcmVxdWlyZSDmgI7kuYjljrvnroDlhpnlpb3ngrnlkaLvvJ9cclxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XHJcbiAgICB2YXIgYWRhcHRlciA9IHVuZGVmaW5lZDtcclxuICAgIC8vIOmSiOWvuW5vZGUuanPvvIzljZXmn5Dnp43mg4XlhrXkuItwcm9jZXNzIOaYr1tvYmplY3Qgb2JqZWN0XVxyXG4gICAgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSBcInVuZGVmaW5lZFwiICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKSB7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKCdpcyBOb2RlSnMnKTtcclxuICAgICAgICB2YXIgaHR0cEFkYXB0ZXJfMSA9IHJlcXVpcmUoJy4vYWRhcHRlcnMvaHR0cCcpLmh0dHBBZGFwdGVyO1xyXG4gICAgICAgIGFkYXB0ZXIgPSBodHRwQWRhcHRlcl8xO1xyXG4gICAgICAgIGFkYXB0ZXIoKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmluZm8oXCJ4OlwiLCB4KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmluZm8oXCJlcnI6XCIsIGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKCc9PT09PT09PT09PT09PT09PT09Jyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKCdpcyBicm93c2VyJyk7XHJcbiAgICAgICAgLy8g6ZKI5a+55rWP6KeI5Zmo5L2/55SoWEhSIOmAgumFjeWZqFxyXG4gICAgICAgIHZhciB4aHJBZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy94aHInKS54aHJBZGFwdGVyO1xyXG4gICAgICAgIGFkYXB0ZXIgPSB4aHJBZGFwdGVyO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFkYXB0ZXI7XHJcbn1cclxuLy8g5aOw5piOZGVmYXVsdHMg5a+56LGhXHJcbnZhciBkZWZhdWx0cyA9IHtcclxuICAgIGFkYXB0ZXI6IGdldERlZmF1bHRBZGFwdGVyKCksXHJcbiAgICAvLyByZXF1ZXN06L2s5o2i5ZmoXHJcbiAgICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhLCBoZWFkZXJzKSB7XHJcbiAgICAgICAgICAgIG5vcm1hbGl6ZUhlYWRlck5hbWVfMS5kZWZhdWx0KGhlYWRlcnMsICdBY2NlcHQnKTtcclxuICAgICAgICAgICAgbm9ybWFsaXplSGVhZGVyTmFtZV8xLmRlZmF1bHQoaGVhZGVycywgJ0NvbnRlbnQtVHlwZScpO1xyXG4gICAgICAgICAgICAvLyDnrKblkIhmb3JtRGF0YSBBcnJheUJ1ZmZlciBTdHJlYW0gRmlsZSBCbG9iIOWImei/lOWbnmRhdGHmnKzkvZNcclxuICAgICAgICAgICAgaWYgKHV0aWxzXzEuaXNGb3JtRGF0YShkYXRhKSB8fFxyXG4gICAgICAgICAgICAgICAgdXRpbHNfMS5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XHJcbiAgICAgICAgICAgICAgICB1dGlsc18xLmlzQnVmZmVyKGRhdGEpIHx8XHJcbiAgICAgICAgICAgICAgICB1dGlsc18xLmlzU3RyZWFtKGRhdGEpIHx8XHJcbiAgICAgICAgICAgICAgICB1dGlsc18xLmlzRmlsZShkYXRhKSB8fFxyXG4gICAgICAgICAgICAgICAgdXRpbHNfMS5pc0Jsb2IoZGF0YSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIOWmguaenOaYr0FycmF5QnVmZmVyVmlld1xyXG4gICAgICAgICAgICBpZiAodXRpbHNfMS5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcclxuICAgICAgICAgICAgaWYgKHV0aWxzXzEuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcclxuICAgICAgICAgICAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh1dGlsc18xLmlzT2JqZWN0KGRhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldC11dGYtOCcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH1dLFxyXG4gICAgLy8gcmVzcG9uc2Ug6L2s5o2i5ZmoXHJcbiAgICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcclxuICAgICAgICAgICAgY29uc29sZS5pbmZvKCflk43lupRkYXRh77yaJywgZGF0YSk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfV0sXHJcbiAgICAvKlxyXG4gICAgKiDorr7nva7otoXml7bnmoTmr6vnp5JcclxuICAgICog6K6+572u5Li6MOWImeayoeacieWIm+W7uui2heaXtlxyXG4gICAgKiAqL1xyXG4gICAgdGltZW91dDogMCxcclxuICAgIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXHJcbiAgICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXHJcbiAgICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcclxuICAgIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcclxuICAgICAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XHJcbiAgICB9XHJcbn07XHJcbmRlZmF1bHRzLmhlYWRlcnMgPSB7XHJcbiAgICBjb21tb246IHtcclxuICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sdGV4dC9wbGFpbiwqLyonXHJcbiAgICB9XHJcbn07XHJcbnV0aWxzXzEuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xyXG4gICAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XHJcbn0pO1xyXG51dGlsc18xLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XHJcbiAgICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSBfX2Fzc2lnbih7fSwgREVGQVVMVF9DT05URU5UX1RZUEUpO1xyXG59KTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gZGVmYXVsdHM7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xyXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XHJcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbClcclxuICAgICAgICAucmVwbGFjZSgvJTQwL2dpLCAnQCcpXHJcbiAgICAgICAgLnJlcGxhY2UoLyUzQS9naSwgJzonKVxyXG4gICAgICAgIC5yZXBsYWNlKC8lMjQvZywgJyQnKVxyXG4gICAgICAgIC5yZXBsYWNlKC8lMkMvZ2ksICcsJylcclxuICAgICAgICAucmVwbGFjZSgvJTIwL2csICcrJylcclxuICAgICAgICAucmVwbGFjZSgvJTVCL2dpLCAnWycpXHJcbiAgICAgICAgLnJlcGxhY2UoLyU1RC9naSwgJ10nKTtcclxufVxyXG4vKipcclxuICogQGRlc2Mg6YCa6L+H5Zyo5pyr5bC+6ZmE5Yqg5Y+C5pWw5p2l5p6E5bu6VVJMXHJcbiAqIEBwYXJhbSB1cmxcclxuICogQHBhcmFtIHBhcmFtc1xyXG4gKiBAcGFyYW0gcGFyYW1zU2VyaWFsaXplclxyXG4gKi9cclxuZnVuY3Rpb24gYnVpbGRVUkwodXJsLCBwYXJhbXMsIHBhcmFtc1NlcmlhbGl6ZXIpIHtcclxuICAgIGlmICghcGFyYW1zKVxyXG4gICAgICAgIHJldHVybiB1cmw7XHJcbiAgICB2YXIgc2VyaWFsaXplZFBhcmFtcyA9IHVuZGVmaW5lZDtcclxuICAgIGlmIChwYXJhbXNTZXJpYWxpemVyKSB7XHJcbiAgICAgICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtc1NlcmlhbGl6ZXIocGFyYW1zKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHV0aWxzXzEuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSkge1xyXG4gICAgICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXMudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHZhciBwYXJ0c18xID0gW107XHJcbiAgICAgICAgdXRpbHNfMS5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XHJcbiAgICAgICAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGlmICh1dGlsc18xLmlzQXJyYXkodmFsKSkge1xyXG4gICAgICAgICAgICAgICAga2V5ID0ga2V5ICsgJ1tdJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhbCA9IFt2YWxdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHV0aWxzXzEuZm9yRWFjaCh2YWwsIGZ1bmN0aW9uIHBhcnNlVmFsdWUodikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzXzEuaXNEYXRlKHYpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdiA9IHYudG9JU09TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHV0aWxzXzEuaXNPYmplY3QodikpIHtcclxuICAgICAgICAgICAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwYXJ0c18xLnB1c2goZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodikpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFydHNfMS5qb2luKCcmJyk7XHJcbiAgICB9XHJcbiAgICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xyXG4gICAgICAgIHZhciBoYXNoTWFya0luZGV4ID0gdXJsLmluZGV4T2YoJyMnKTtcclxuICAgICAgICBpZiAoaGFzaE1hcmtJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgdXJsID0gdXJsLnNsaWNlKDAsIGhhc2hNYXJrSW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXJsO1xyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IGJ1aWxkVVJMO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKioqKioqKioqKioqKioqKioqKioqKipcclxuICogQGRlc2Mg6YCa6L+H57uE5ZCI5oyH5a6a55qEVVJM5Yib5bu65paw55qEVVJMXHJcbiAqIEBhdXRob3IgSm8uZ2VsXHJcbiAqIEBkYXRlIDIwMTkvOC8yMCAwMDIwXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTFxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gKioqKioqKioqKioqKioqKioqKioqKiovXHJcbmV4cG9ydHMuZGVmYXVsdCA9IChmdW5jdGlvbiAoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcclxuICAgIHJldHVybiByZWxhdGl2ZVVSTFxyXG4gICAgICAgID8gYmFzZVVSTC5yZXBsYWNlKC9cXC8rJC8sICcnKSArICcvJyArIHJlbGF0aXZlVVJMLnJlcGxhY2UoL15cXC8rLywgJycpXHJcbiAgICAgICAgOiBiYXNlVVJMO1xyXG59KTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XHJcbmV4cG9ydHMuZGVmYXVsdCA9ICh1dGlsc18xLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xyXG4gICAgLy8g5qCH5YeG5rWP6KeI5ZmoZW52c+aUr+aMgeaWh+ahoy5jb29raWVcclxuICAgIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvb2tpZSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzXzEuaXNOdW1iZXIoZXhwaXJlcykpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9VVENTdHJpbmcoKSk7IC8vIOa6kOeggei/memHjOaYr2hpdG9HTVRTdHJpbmdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh1dGlsc18xLmlzU3RyaW5nKHBhdGgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29va2llLnB1c2goJ3BhdGg9JyArIHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzXzEuaXNTdHJpbmcoZG9tYWluKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VjdXJlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoJyhefDtcXFxccyopKCcgKyBuYW1lICsgJyk9KFteO10qKScpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAobWF0Y2ggPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pIDogbnVsbCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud3JpdGUobmFtZSwgJycsIERhdGUubm93KCkgLSA4NjQwMDAwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSkoKSA6XHJcbiAgICAvLyDpnZ7moIflh4bmtY/op4jlmahlbnbvvIh3ZWIgd29ya2Vyc++8jHJlYWN0IG5hdGl2Ze+8iee8uuS5j+aJgOmcgOeahOaUr+aMgeOAglxyXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoKSB7IH0sXHJcbiAgICAgICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQoKSB7IHJldHVybiBudWxsOyB9LFxyXG4gICAgICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHsgfSxcclxuICAgICAgICB9O1xyXG4gICAgfSkoKSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG4vKioqKioqKioqKioqKioqKioqKioqKipcclxuICogQGRlc2Mg5YW25a6eIG5vZGXnjq/looPnmoRwYXRoLmlzQWJzb2x1dGUg5Lmf5piv5o+Q5L6b5LqG5LiA5Liq5pa55rOV55qEXHJcbiAqIEBkZXNjIOWIpOaWreaYr+WQpue7neWvuei3r+W+hFxyXG4gKiBAYXV0aG9yIEpvLmdlbFxyXG4gKiBAZGF0ZSAyMDE5LzgvMjAgMDAyMFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKioqKioqKioqKioqKioqKioqKioqKiovXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gKGZ1bmN0aW9uICh1cmwpIHtcclxuICAgIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcclxufSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xyXG52YXIgdXRpbF8xID0gcmVxdWlyZShcInV0aWxcIik7XHJcbmV4cG9ydHMuZGVmYXVsdCA9ICh1dGlsc18xLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xyXG4gICAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XHJcbiAgICAvLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cclxuICAgIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XHJcbiAgICAgICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG4gICAgICAgIHZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICB2YXIgb3JpZ2luVVJMID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBkZXNjIOino+aekHVybFxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcclxuICAgICAgICAgICAgdmFyIGhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgIGlmIChtc2llKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJRemcgOimgeiuvue9ruS4pOasoeWxnuaAp+adpeinhOiMg+WMluWxnuaAp1xyXG4gICAgICAgICAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XHJcbiAgICAgICAgICAgICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcclxuICAgICAgICAgICAgLy8gdXJsUGFyc2luZ05vZGUgcHJvdmlkZXMgdGhlIFVybFV0aWxzIGludGVyZmFjZSAtIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcclxuICAgICAgICAgICAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXHJcbiAgICAgICAgICAgICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxyXG4gICAgICAgICAgICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxyXG4gICAgICAgICAgICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcclxuICAgICAgICAgICAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcclxuICAgICAgICAgICAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXHJcbiAgICAgICAgICAgICAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSA/IHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lIDogJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQGRlc2Mg56Gu5a6aVVJM5piv5ZCm5LiO5b2T5YmN5L2N572u5YWx5Lqr5ZCM5LiA5rqQXHJcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHJlcXVlc3RVUkxcclxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xyXG4gICAgICAgICAgICB2YXIgcGFyc2VkID0gKHV0aWxfMS5pc1N0cmluZyhyZXF1ZXN0VVJMKSkgPyByZXNvbHZlVVJMKHJlcXVlc3RVUkwpIDogcmVxdWVzdFVSTDtcclxuICAgICAgICAgICAgcmV0dXJuIChwYXJzZWQucHJvdG9jb2wgPT09IG9yaWdpblVSTC5wcm90b2NvbCAmJiBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3QpO1xyXG4gICAgICAgIH07XHJcbiAgICB9KSgpIDpcclxuICAgIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfTtcclxuICAgIH0pKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBAbmFtZSBUUyBGSUxFXHJcbiAqIEBhdXRob3IgSm8uZ2VsXHJcbiAqIEBkYXRlIDIwMTkvOC8xOSAwMDE5IOS4iuWNiCAxMTozMVxyXG4gKioqKioqKioqKioqKioqKioqKioqKiovXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgbm9ybWFsaXplZE5hbWUpIHtcclxuICAgIHV0aWxzXzEuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVyKHZhbHVlLCBuYW1lKSB7XHJcbiAgICAgICAgaWYgKG5hbWUgIT09IG5vcm1hbGl6ZWROYW1lICYmIG5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbm9ybWFsaXplZE5hbWUudG9VcHBlckNhc2UoKSkge1xyXG4gICAgICAgICAgICBoZWFkZXJzW25vcm1hbGl6ZWROYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBub3JtYWxpemVIZWFkZXJOYW1lO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcclxuLy8gbm9kZeW/veeVpeWFtumHjeWkjemhueeahOWktFxyXG4vLyBjLmYuIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzXHJcbnZhciBpZ25vcmVEdXBsaWNhdGVPZiA9IFtcclxuICAgICdhZ2UnLCAnYXV0aG9yaXphdGlvbicsICdjb250ZW50LWxlbmd0aCcsICdjb250ZW50LXR5cGUnLCAnZXRhZycsXHJcbiAgICAnZXhwaXJlcycsICdmcm9tJywgJ2hvc3QnLCAnaWYtbW9kaWZpZWQtc2luY2UnLCAnaWYtdW5tb2RpZmllZC1zaW5jZScsXHJcbiAgICAnbGFzdC1tb2RpZmllZCcsICdsb2NhdGlvbicsICdtYXgtZm9yd2FyZHMnLCAncHJveHktYXV0aG9yaXphdGlvbicsXHJcbiAgICAncmVmZXJlcicsICdyZXRyeS1hZnRlcicsICd1c2VyLWFnZW50J1xyXG5dO1xyXG4vKipcclxuICogIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcclxuICogYGBganNcclxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcclxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXHJcbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcclxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcclxuICogYGBgXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBoZWFkZXJzIOmcgOimgeino+aekOeahEhlYWRlcnNcclxuICogQHJldHVybnMge29iamVjdH0g5oqKSGVhZGVy6Kej5p6Q5Li65a+56LGhXHJcbiAqL1xyXG5leHBvcnRzLmRlZmF1bHQgPSAoZnVuY3Rpb24gKGhlYWRlcnMpIHtcclxuICAgIHZhciBwYXJzZWQgPSB7fTtcclxuICAgIHZhciBrZXkgPSB1bmRlZmluZWQ7XHJcbiAgICB2YXIgdmFsID0gdW5kZWZpbmVkO1xyXG4gICAgdmFyIGkgPSB1bmRlZmluZWQ7XHJcbiAgICBpZiAoIWhlYWRlcnMpXHJcbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcclxuICAgIHV0aWxzXzEuZm9yRWFjaChoZWFkZXJzLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcclxuICAgICAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XHJcbiAgICAgICAga2V5ID0gdXRpbHNfMS50cmltKGxpbmUuc3Vic3RyKDAsIGkpKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIHZhbCA9IHV0aWxzXzEudHJpbShsaW5lLnN1YnN0cihpICsgMSkpO1xyXG4gICAgICAgIGlmIChrZXkpIHtcclxuICAgICAgICAgICAgaWYgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mLmluZGV4T2Yoa2V5KSA+PSAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAoa2V5KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VkW2tleV0gJiYgaWdub3JlRHVwbGljYXRlT2YuaW5kZXhPZihrZXkpID49IDApXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkW2tleV0gPSAocGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSA6IFtdKS5jb25jYXQoW3ZhbF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHBhcnNlZDtcclxufSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKlxyXG4gKiBAZGVzYyDnlKjkuo7osIPnlKjlh73mlbDlkozmianlsZXlj4LmlbDmlbDnu4TnmoTor63ms5Xnu5PmnoTjgIJcclxuICog5bi46KeB55qE55So5L6LIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgXHJcbiAqXHJcbiAqIGBgYGpzXHJcbiAqIGZ1bmN0aW9uIGYoeCx5LHope31cclxuICogY29uc3QgYXJncz1bMSwyLDNdXHJcbiAqIGYuYXBwbHkobnVsbCxhcmdzKVxyXG4gKlxyXG4gKiBgYGBcclxuICog5L2/55SoYHNwcmVhZGAg6YeN5YaZ5q2k5L6LXHJcbiAqXHJcbiAqIGBgYGpzXHJcbiAqIHNwcmVhZChmdW5jdGlvbih4LHkseil7fSkoWzEsMiwzXSlcclxuICogYGBgXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXHJcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxyXG4gKlxyXG4gKiAqL1xyXG5mdW5jdGlvbiBzcHJlYWQoY2FsbGJhY2spIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiB3YXJwKGFycikge1xyXG4gICAgICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBzcHJlYWQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBAYXV0aG9yIEpvLmdlbFxyXG4gKiBAZGF0ZSAyMDE5LzgvMjkgMDAyOVxyXG4gKioqKioqKioqKioqKioqKioqKioqKiovXHJcbnZhciBheGlvc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2F4aW9zXCIpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gYXhpb3NfMS5kZWZhdWx0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICpAZGVzYyBheGlvcyDlt6Xlhbfnsbvlh73mlbBcclxuICpcclxuICovXHJcbnZhciBpc19idWZmZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiaXMtYnVmZmVyXCIpKTtcclxuZXhwb3J0cy5pc0J1ZmZlciA9IGlzX2J1ZmZlcl8xLmRlZmF1bHQ7XHJcbi8qKlxyXG4gKiBAZGVzYyDliKTmlq3lgLzmmK/lkKbmmK/mlbDnu4RcclxuICogQHBhcmFtIHtPYmplY3R9IHZhbFxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0g5piv5pWw57uELHRydWXvvIzlkKbliJlmYWxzZVxyXG4gKi9cclxuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcclxuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XHJcbn1cclxuZXhwb3J0cy5pc0FycmF5ID0gaXNBcnJheTtcclxuLyoqXHJcbiAqIEBkZXNjIOWIpOaWreaYr+WQpuaYr0FycmF5QnVmZmVyXHJcbiAqIEBwYXJhbSB2YWxcclxuICogQHJldHVybnMg5pivIOWImXRydWXvvIzlkKbliJlmYWxzZVxyXG4gKi9cclxuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcclxuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSc7XHJcbn1cclxuZXhwb3J0cy5pc0FycmF5QnVmZmVyID0gaXNBcnJheUJ1ZmZlcjtcclxuLyoqXHJcbiAqIEBkZXNjIOWIpOaWreaYr+WQpmZvcm1EYXRhXHJcbiAqL1xyXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xyXG4gICAgcmV0dXJuICh0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSAmJiAodmFsIGluc3RhbmNlb2YgRm9ybURhdGEpO1xyXG59XHJcbmV4cG9ydHMuaXNGb3JtRGF0YSA9IGlzRm9ybURhdGE7XHJcbi8qKlxyXG4gKiBAZGVzYyDliKTmlq12YWzmmK/lkKbmmK9BcnJheUJ1ZmZlcueahOinhuWbvlxyXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XHJcbiAgICB2YXIgcmVzdWx0O1xyXG4gICAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnKSAmJiAoQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xyXG4gICAgICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmVzdWx0ID0gdmFsICYmIHZhbC5idWZmZXIgJiYgKHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmV4cG9ydHMuaXNBcnJheUJ1ZmZlclZpZXcgPSBpc0FycmF5QnVmZmVyVmlldztcclxuLyoqXHJcbiAqIEBkZXNjIOWIpOaWreWtl+espuS4slxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKlxyXG4gKi9cclxuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7XHJcbn1cclxuZXhwb3J0cy5pc1N0cmluZyA9IGlzU3RyaW5nO1xyXG4vKipcclxuICogQGRlc2Mg5Yik5pat5piv5pWw5a2X57G75Z6LXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcic7XHJcbn1cclxuZXhwb3J0cy5pc051bWJlciA9IGlzTnVtYmVyO1xyXG4vKipcclxuICogQGRlc2Mg5Yik5pat5pivdW5kZWZpbmVk57G75Z6LXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCc7XHJcbn1cclxuZXhwb3J0cy5pc1VuZGVmaW5lZCA9IGlzVW5kZWZpbmVkO1xyXG4vKipcclxuICogQGRlc2Mg5Yik5pat5piv5ZCm5pivb2JqZWN0XHJcbiAqXHJcbiAqL1xyXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcclxuICAgIHJldHVybiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XHJcbn1cclxuZXhwb3J0cy5pc09iamVjdCA9IGlzT2JqZWN0O1xyXG4vKipcclxuICogQGRlc2Mg5Yik5pat5pivRGF0Zeexu+Wei1xyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmZ1bmN0aW9uIGlzRGF0ZSh2YWwpIHtcclxuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcclxufVxyXG5leHBvcnRzLmlzRGF0ZSA9IGlzRGF0ZTtcclxuLyoqXHJcbiAqIEBkZXNjIOWIpOaWreaYr2ZpbGUg57G75Z6LXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gaXNGaWxlKHZhbCkge1xyXG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRmlsZV0nO1xyXG59XHJcbmV4cG9ydHMuaXNGaWxlID0gaXNGaWxlO1xyXG4vKipcclxuICogQGRlc2Mg5Yik5pat5pivYmxvYuexu+Wei1xyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmZ1bmN0aW9uIGlzQmxvYih2YWwpIHtcclxuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcclxufVxyXG5leHBvcnRzLmlzQmxvYiA9IGlzQmxvYjtcclxuLyoqXHJcbiAqIEBkZXNjIOWIpOaWreaYr2Z1bmN0aW9uXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcclxuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XHJcbn1cclxuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcclxuLyoqXHJcbiAqIEBkZXNjIOWIpOaWrXN0cmVhbVxyXG4gKi9cclxuZnVuY3Rpb24gaXNTdHJlYW0odmFsKSB7XHJcbiAgICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcclxufVxyXG5leHBvcnRzLmlzU3RyZWFtID0gaXNTdHJlYW07XHJcbi8qKlxyXG4gKiBAZGVzYyDliKTmlq3mmK9VUkwgU2VhcmNoIFBhcmFtc1xyXG4gKlxyXG4gKi9cclxuZnVuY3Rpb24gaXNVUkxTZWFyY2hQYXJhbXModmFsKSB7XHJcbiAgICByZXR1cm4gKHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnKSAmJiAodmFsIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zKTtcclxufVxyXG5leHBvcnRzLmlzVVJMU2VhcmNoUGFyYW1zID0gaXNVUkxTZWFyY2hQYXJhbXM7XHJcbi8qKlxyXG4gKiBAZGVzYyDliKDpmaTlvIDlp4vliLDnu5PmnZ/nmoTlpJrkvZnnqbrnmb1cclxuICovXHJcbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XHJcbiAgICByZXR1cm4gKHN0ciB8fCAnJykucmVwbGFjZSgvXlxccyovLCAnJykucmVwbGFjZSgvXFxzKiQvLCAnJyk7XHJcbn1cclxuZXhwb3J0cy50cmltID0gdHJpbTtcclxuLyoqXHJcbiAqIEBkZXNjIOajgOafpeaYr+WQpuWFgeiuuOWcqOagh+WHhueahOa1j+iniOWZqOS4ilxyXG4gKi9cclxuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XHJcbiAgICBpZiAoKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnKSAmJiAobmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScgfHwgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOYXRpdmVTY3JpcHQnIHx8IG5hdmlnYXRvci5wcm9kdWN0ID09PSAnTlMnKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyk7XHJcbn1cclxuZXhwb3J0cy5pc1N0YW5kYXJkQnJvd3NlckVudiA9IGlzU3RhbmRhcmRCcm93c2VyRW52O1xyXG4vKipcclxuICogQGRlc2Mg6L+t5Luj5Li65q+P5Liq6aG56LCD55So5Ye95pWw55qE5pWw57uE5oiW5a+56LGh44CCXHJcbiAqIOWmguaenOKAnG9iauKAneaYr+S4gOS4quaVsOe7hO+8jOWImeiwg+eUqOaVsOe7hOWbnuiwg++8jOS8oOmAkuavj+S4qumhueeahOWAvOOAgee0ouW8leWSjOWujOaVtOaVsOe7hOOAglxyXG4gKiDlpoLmnpzigJxvYmrigJ3mmK/kuIDkuKrlr7nosaHvvIzliJnlsIbosIPnlKjlm57osIPmnaXkvKDpgJLmr4/kuKrlsZ7mgKfnmoTlgLzjgIHplK7lkozlrozmlbTlr7nosaHjgIJcclxuICpcclxuICogQHBhcmFtIG9iaiDopoHov63ku6PnmoTlr7nosaFcclxuICogQHBhcmFtIGZuIOS4uuavj+S4qumhueiwg+eUqOeahOWbnuiwg1xyXG4gKlxyXG4gKi9cclxuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XHJcbiAgICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8g5by65Yi26L2s5o2i5pWw57uE77yM5aaC5p6c5LiN5piv5pWw57uE55qE6K+dXHJcbiAgICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcclxuICAgICAgICBvYmogPSBbb2JqXTtcclxuICAgIH1cclxuICAgIGlmIChpc0FycmF5KG9iaikpIHtcclxuICAgICAgICAvLyDov63ku6PmlbDnu4RcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgLy8g6L+t5Luj5a+56LGha2V5XHJcbiAgICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xyXG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xyXG4gICAgICAgICAgICAgICAgZm4uY2FsbChudWxsLCBvYmpba2V5XSwga2V5LCBvYmopO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZm9yRWFjaCA9IGZvckVhY2g7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFzc2VydFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0cmVhbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0dHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV0aWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiemxpYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9