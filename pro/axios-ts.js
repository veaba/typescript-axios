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
        if (config.transport) {
            transport = config.transport;
        }
        else if (config.maxRedirects === 0) {
            transport = isHttpsProxy ? https_1.default : http_1.default;
        }
        else {
            if (config.maxRedirects) {
                options.maxRedirects = config.maxRedirects;
            }
            transport = isHttpsProxy ? httpsFollow : httpFollow;
        }
        if (config.maxContentLength && config.maxContentLength > -1) {
            options.maxBodyLength = config.maxContentLength;
        }
        // 创建request
        // request,为什么这里入参一个具名函数
        var req = transport.request(options, function (res) {
            // bug todo 这里应该有一个config 的！！！!!
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
                config: config,
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
// const axios: any = new Axios(defaults);
var axios = createInstance(defaults_1.default);
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
x.get('http://127.0.0.1:8080')
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
    // 扁平化headers
    config.headers = __assign({}, config.headers.conmon || {}, config.headers[config.method] || {}, config.headers || {});
    // 后期抽离method作为公共变量
    utils_1.forEach(['delete', 'get', 'post', 'put', 'patch', 'common'], function (method) {
        delete config.headers[method];
    });
    var adapter = config.adapter || defaults_1.default.adapter;
    return adapter(config)
        .then(function (response) {
        throwIfCancellationRequested(config);
        // 转换response Data
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
        var httpAdapter_1 = __webpack_require__(/*! ./adapters/http */ "./src/adapters/http.ts").httpAdapter;
        adapter = httpAdapter_1;
    }
    else if (typeof XMLHttpRequest !== 'undefined') {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19kZWJ1Z0AzLjIuNkBkZWJ1Zy9zcmMvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2RlYnVnQDMuMi42QGRlYnVnL3NyYy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19kZWJ1Z0AzLjIuNkBkZWJ1Zy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19kZWJ1Z0AzLjIuNkBkZWJ1Zy9zcmMvbm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2ZvbGxvdy1yZWRpcmVjdHNAMS43LjBAZm9sbG93LXJlZGlyZWN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2lzLWJ1ZmZlckAyLjAuM0Bpcy1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19tc0AyLjEuMkBtcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlcnMvaHR0cC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlcnMveGhyLnRzIiwid2VicGFjazovLy8uL3NyYy9heGlvcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FuY2VsL0NhbmNlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FuY2VsL0NhbmNlbFRva2VuLnRzIiwid2VicGFjazovLy8uL3NyYy9jYW5jZWwvaXNDYW5jZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvQXhpb3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2NyZWF0ZUVycm9yLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2Rpc3BhdGNoUmVxdWVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9lbmhhbmNlRXJyb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvbWVyZ2VDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvc2V0dGxlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3RyYW5zZm9ybURhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlZmF1bHRzLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWFkZXJzL2J1aWxkVVJMLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWFkZXJzL2NvbWJpbmVVUkxzLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWFkZXJzL2Nvb2tpZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlYWRlcnMvaXNBYnNvbHV0ZVVSTC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVhZGVycy9pc1VSTFNhbWVPcmlnaW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlYWRlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVhZGVycy9wYXJzZUhlYWRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlYWRlcnMvc3ByZWFkLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXNzZXJ0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaHR0cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3RyZWFtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidHR5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXRpbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInpsaWJcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FB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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVDQUF1QyxFQUFFO0FBQy9ELEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QiwyQkFBMkI7QUFDbEQ7Ozs7Ozs7Ozs7OztBQ2piQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGNBQWM7QUFDekIsV0FBVyxPQUFPO0FBQ2xCLFlBQVksTUFBTTtBQUNsQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqS2E7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLG1CQUFPLENBQUMsZ0NBQVU7QUFDaEMsNEJBQTRCLG1CQUFPLENBQUMsZ0JBQUs7QUFDekMsNkJBQTZCLG1CQUFPLENBQUMsa0JBQU07QUFDM0MsOEJBQThCLG1CQUFPLENBQUMsb0JBQU87QUFDN0MsNkJBQTZCLG1CQUFPLENBQUMsa0JBQU07QUFDM0MsaUNBQWlDLG1CQUFPLENBQUMsc0RBQXFCO0FBQzlELG9DQUFvQyxtQkFBTyxDQUFDLHNEQUFxQjtBQUNqRSxxQ0FBcUMsbUJBQU8sQ0FBQyx3REFBc0I7QUFDbkUsK0JBQStCLG1CQUFPLENBQUMsNENBQWdCO0FBQ3ZELHlDQUF5QyxtQkFBTyxDQUFDLDBGQUFrQjtBQUNuRTtBQUNBO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLDBDQUFvQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNkUsb0JBQW9CLEVBQUU7QUFDbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFlBQVk7QUFDekI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7O0FDL1BhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLGdDQUFVO0FBQ2hDLCtCQUErQixtQkFBTyxDQUFDLDRDQUFnQjtBQUN2RCxpQ0FBaUMsbUJBQU8sQ0FBQyxzREFBcUI7QUFDOUQscUNBQXFDLG1CQUFPLENBQUMsOERBQXlCO0FBQ3RFLHdDQUF3QyxtQkFBTyxDQUFDLG9FQUE0QjtBQUM1RSxvQ0FBb0MsbUJBQU8sQ0FBQyxzREFBcUI7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0lBQXNJO0FBQ3RJLGdJQUFnSTtBQUNoSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1CQUFPLENBQUMsb0RBQW9CLEVBQUU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7QUNqSmE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELE9BQU87QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCw4QkFBOEIsbUJBQU8sQ0FBQyx5Q0FBYztBQUNwRCxpQ0FBaUMsbUJBQU8sQ0FBQyxxQ0FBWTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLHNDQUFzQztBQUNoRjtBQUNBO0FBQ0EsNEJBQTRCLDRDQUE0QyxxQkFBcUIsbUJBQU8sQ0FBQywrQ0FBaUIsR0FBRyxFQUFFLEVBQUU7QUFDN0gsaUNBQWlDLDRDQUE0QyxxQkFBcUIsbUJBQU8sQ0FBQyx5REFBc0IsR0FBRyxFQUFFLEVBQUU7QUFDdkksOEJBQThCLDRDQUE0QyxxQkFBcUIsbUJBQU8sQ0FBQyxtREFBbUIsR0FBRyxFQUFFLEVBQUU7QUFDakk7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNENBQTRDLHFCQUFxQixtQkFBTyxDQUFDLGlEQUFrQixHQUFHLEVBQUUsRUFBRTtBQUM5SCx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUM3RGE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNqQmE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELCtCQUErQixtQkFBTyxDQUFDLHdDQUFVO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQzVCYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNUYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsT0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCwyQ0FBMkMsbUJBQU8sQ0FBQyw4REFBc0I7QUFDekUsb0NBQW9DLG1CQUFPLENBQUMsZ0RBQWU7QUFDM0QsaUNBQWlDLG1CQUFPLENBQUMsc0RBQXFCO0FBQzlELHdDQUF3QyxtQkFBTyxDQUFDLHdEQUFtQjtBQUNuRSxVQUFVLG1CQUFPLENBQUMsMENBQW9CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RTtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFdBQVcsNkJBQTZCO0FBQy9FO0FBQ0E7QUFDQSx1Q0FBdUMsV0FBVywwQkFBMEI7QUFDNUU7QUFDQTtBQUNBLHVDQUF1QyxXQUFXLDJCQUEyQjtBQUM3RTtBQUNBO0FBQ0EsdUNBQXVDLFdBQVcsOEJBQThCO0FBQ2hGO0FBQ0E7QUFDQSx1Q0FBdUMsV0FBVyx1Q0FBdUM7QUFDekY7QUFDQTtBQUNBLHVDQUF1QyxXQUFXLHNDQUFzQztBQUN4RjtBQUNBO0FBQ0EsdUNBQXVDLFdBQVcsd0NBQXdDO0FBQzFGO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUMvRmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLGdDQUFVO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDMUNhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELHFDQUFxQyxtQkFBTyxDQUFDLGtEQUFnQjtBQUM3RDtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdkJhO0FBQ2I7QUFDQTtBQUNBLGdEQUFnRCxPQUFPO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELHNDQUFzQyxtQkFBTyxDQUFDLG9EQUFpQjtBQUMvRCxpQ0FBaUMsbUJBQU8sQ0FBQyxvREFBb0I7QUFDN0Qsc0NBQXNDLG1CQUFPLENBQUMsZ0VBQTBCO0FBQ3hFLG9DQUFvQyxtQkFBTyxDQUFDLDREQUF3QjtBQUNwRSxjQUFjLG1CQUFPLENBQUMsZ0NBQVU7QUFDaEMsaUNBQWlDLG1CQUFPLENBQUMsc0NBQWE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsNkJBQTZCLHFDQUFxQyxzQkFBc0I7QUFDeEg7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcEVhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbENhO0FBQ2I7QUFDQTtBQUNBLGdEQUFnRCxPQUFPO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLGdDQUFVO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsY0FBYztBQUMzQyw2QkFBNkIsY0FBYztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQy9EYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsb0NBQW9DLG1CQUFPLENBQUMsZ0RBQWU7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RCYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLGdDQUFVO0FBQ2hDO0FBQ0E7QUFDQSxnQkFBZ0IsY0FBYztBQUM5QixtQkFBbUIsTUFBTTtBQUN6QixlQUFlLGVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwQmE7QUFDYjtBQUNBO0FBQ0EsZ0RBQWdELE9BQU87QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsY0FBYyxtQkFBTyxDQUFDLCtCQUFTO0FBQy9CLDRDQUE0QyxtQkFBTyxDQUFDLDJFQUErQjtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUJBQU8sQ0FBQywrQ0FBaUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsbUJBQU8sQ0FBQyw2Q0FBZ0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0ZBQWtGO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwwQ0FBMEM7QUFDMUMsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDMUdhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsY0FBYyxtQkFBTyxDQUFDLGdDQUFVO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0RhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2RZO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsY0FBYyxtQkFBTyxDQUFDLGdDQUFVO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBOEU7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQsYUFBYTtBQUNiO0FBQ0Esa0VBQWtFLHdCQUF3QjtBQUMxRjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsRUFBRTtBQUN2QyxtQ0FBbUMsYUFBYSxFQUFFO0FBQ2xELHVDQUF1QyxFQUFFO0FBQ3pDO0FBQ0EsS0FBSzs7Ozs7Ozs7Ozs7OztBQ3hDUTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYTtBQUNiO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNaWTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGNBQWMsbUJBQU8sQ0FBQyxnQ0FBVTtBQUNoQyxhQUFhLG1CQUFPLENBQUMsa0JBQU07QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7Ozs7Ozs7Ozs7OztBQ25EUTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxjQUFjLG1CQUFPLENBQUMsZ0NBQVU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoQmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxjQUFjLG1CQUFPLENBQUMsZ0NBQVU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDakRZO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBLFdBQVcsU0FBUztBQUNwQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzNCYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsbUJBQU8sQ0FBQywrQkFBUztBQUMvQzs7Ozs7Ozs7Ozs7OztBQ1ZhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFFQUFXO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxPQUFPO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN0TEEsbUM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsZ0M7Ozs7Ozs7Ozs7O0FDQUEsZ0M7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoiYXhpb3MtdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuLyoqXG4gKiBUaGlzIGlzIHRoZSB3ZWIgYnJvd3NlciBpbXBsZW1lbnRhdGlvbiBvZiBgZGVidWcoKWAuXG4gKi9cbmV4cG9ydHMubG9nID0gbG9nO1xuZXhwb3J0cy5mb3JtYXRBcmdzID0gZm9ybWF0QXJncztcbmV4cG9ydHMuc2F2ZSA9IHNhdmU7XG5leHBvcnRzLmxvYWQgPSBsb2FkO1xuZXhwb3J0cy51c2VDb2xvcnMgPSB1c2VDb2xvcnM7XG5leHBvcnRzLnN0b3JhZ2UgPSBsb2NhbHN0b3JhZ2UoKTtcbi8qKlxuICogQ29sb3JzLlxuICovXG5cbmV4cG9ydHMuY29sb3JzID0gWycjMDAwMENDJywgJyMwMDAwRkYnLCAnIzAwMzNDQycsICcjMDAzM0ZGJywgJyMwMDY2Q0MnLCAnIzAwNjZGRicsICcjMDA5OUNDJywgJyMwMDk5RkYnLCAnIzAwQ0MwMCcsICcjMDBDQzMzJywgJyMwMENDNjYnLCAnIzAwQ0M5OScsICcjMDBDQ0NDJywgJyMwMENDRkYnLCAnIzMzMDBDQycsICcjMzMwMEZGJywgJyMzMzMzQ0MnLCAnIzMzMzNGRicsICcjMzM2NkNDJywgJyMzMzY2RkYnLCAnIzMzOTlDQycsICcjMzM5OUZGJywgJyMzM0NDMDAnLCAnIzMzQ0MzMycsICcjMzNDQzY2JywgJyMzM0NDOTknLCAnIzMzQ0NDQycsICcjMzNDQ0ZGJywgJyM2NjAwQ0MnLCAnIzY2MDBGRicsICcjNjYzM0NDJywgJyM2NjMzRkYnLCAnIzY2Q0MwMCcsICcjNjZDQzMzJywgJyM5OTAwQ0MnLCAnIzk5MDBGRicsICcjOTkzM0NDJywgJyM5OTMzRkYnLCAnIzk5Q0MwMCcsICcjOTlDQzMzJywgJyNDQzAwMDAnLCAnI0NDMDAzMycsICcjQ0MwMDY2JywgJyNDQzAwOTknLCAnI0NDMDBDQycsICcjQ0MwMEZGJywgJyNDQzMzMDAnLCAnI0NDMzMzMycsICcjQ0MzMzY2JywgJyNDQzMzOTknLCAnI0NDMzNDQycsICcjQ0MzM0ZGJywgJyNDQzY2MDAnLCAnI0NDNjYzMycsICcjQ0M5OTAwJywgJyNDQzk5MzMnLCAnI0NDQ0MwMCcsICcjQ0NDQzMzJywgJyNGRjAwMDAnLCAnI0ZGMDAzMycsICcjRkYwMDY2JywgJyNGRjAwOTknLCAnI0ZGMDBDQycsICcjRkYwMEZGJywgJyNGRjMzMDAnLCAnI0ZGMzMzMycsICcjRkYzMzY2JywgJyNGRjMzOTknLCAnI0ZGMzNDQycsICcjRkYzM0ZGJywgJyNGRjY2MDAnLCAnI0ZGNjYzMycsICcjRkY5OTAwJywgJyNGRjk5MzMnLCAnI0ZGQ0MwMCcsICcjRkZDQzMzJ107XG4vKipcbiAqIEN1cnJlbnRseSBvbmx5IFdlYktpdC1iYXNlZCBXZWIgSW5zcGVjdG9ycywgRmlyZWZveCA+PSB2MzEsXG4gKiBhbmQgdGhlIEZpcmVidWcgZXh0ZW5zaW9uIChhbnkgRmlyZWZveCB2ZXJzaW9uKSBhcmUga25vd25cbiAqIHRvIHN1cHBvcnQgXCIlY1wiIENTUyBjdXN0b21pemF0aW9ucy5cbiAqXG4gKiBUT0RPOiBhZGQgYSBgbG9jYWxTdG9yYWdlYCB2YXJpYWJsZSB0byBleHBsaWNpdGx5IGVuYWJsZS9kaXNhYmxlIGNvbG9yc1xuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuXG5mdW5jdGlvbiB1c2VDb2xvcnMoKSB7XG4gIC8vIE5COiBJbiBhbiBFbGVjdHJvbiBwcmVsb2FkIHNjcmlwdCwgZG9jdW1lbnQgd2lsbCBiZSBkZWZpbmVkIGJ1dCBub3QgZnVsbHlcbiAgLy8gaW5pdGlhbGl6ZWQuIFNpbmNlIHdlIGtub3cgd2UncmUgaW4gQ2hyb21lLCB3ZSdsbCBqdXN0IGRldGVjdCB0aGlzIGNhc2VcbiAgLy8gZXhwbGljaXRseVxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnByb2Nlc3MgJiYgKHdpbmRvdy5wcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicgfHwgd2luZG93LnByb2Nlc3MuX19ud2pzKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIEludGVybmV0IEV4cGxvcmVyIGFuZCBFZGdlIGRvIG5vdCBzdXBwb3J0IGNvbG9ycy5cblxuXG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvKGVkZ2V8dHJpZGVudClcXC8oXFxkKykvKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSAvLyBJcyB3ZWJraXQ/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE2NDU5NjA2LzM3Njc3M1xuICAvLyBkb2N1bWVudCBpcyB1bmRlZmluZWQgaW4gcmVhY3QtbmF0aXZlOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QtbmF0aXZlL3B1bGwvMTYzMlxuXG5cbiAgcmV0dXJuIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuV2Via2l0QXBwZWFyYW5jZSB8fCAvLyBJcyBmaXJlYnVnPyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zOTgxMjAvMzc2NzczXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5jb25zb2xlICYmICh3aW5kb3cuY29uc29sZS5maXJlYnVnIHx8IHdpbmRvdy5jb25zb2xlLmV4Y2VwdGlvbiAmJiB3aW5kb3cuY29uc29sZS50YWJsZSkgfHwgLy8gSXMgZmlyZWZveCA+PSB2MzE/XG4gIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvVG9vbHMvV2ViX0NvbnNvbGUjU3R5bGluZ19tZXNzYWdlc1xuICB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvZmlyZWZveFxcLyhcXGQrKS8pICYmIHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApID49IDMxIHx8IC8vIERvdWJsZSBjaGVjayB3ZWJraXQgaW4gdXNlckFnZW50IGp1c3QgaW4gY2FzZSB3ZSBhcmUgaW4gYSB3b3JrZXJcbiAgdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2FwcGxld2Via2l0XFwvKFxcZCspLyk7XG59XG4vKipcbiAqIENvbG9yaXplIGxvZyBhcmd1bWVudHMgaWYgZW5hYmxlZC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblxuZnVuY3Rpb24gZm9ybWF0QXJncyhhcmdzKSB7XG4gIGFyZ3NbMF0gPSAodGhpcy51c2VDb2xvcnMgPyAnJWMnIDogJycpICsgdGhpcy5uYW1lc3BhY2UgKyAodGhpcy51c2VDb2xvcnMgPyAnICVjJyA6ICcgJykgKyBhcmdzWzBdICsgKHRoaXMudXNlQ29sb3JzID8gJyVjICcgOiAnICcpICsgJysnICsgbW9kdWxlLmV4cG9ydHMuaHVtYW5pemUodGhpcy5kaWZmKTtcblxuICBpZiAoIXRoaXMudXNlQ29sb3JzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGMgPSAnY29sb3I6ICcgKyB0aGlzLmNvbG9yO1xuICBhcmdzLnNwbGljZSgxLCAwLCBjLCAnY29sb3I6IGluaGVyaXQnKTsgLy8gVGhlIGZpbmFsIFwiJWNcIiBpcyBzb21ld2hhdCB0cmlja3ksIGJlY2F1c2UgdGhlcmUgY291bGQgYmUgb3RoZXJcbiAgLy8gYXJndW1lbnRzIHBhc3NlZCBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIHRoZSAlYywgc28gd2UgbmVlZCB0b1xuICAvLyBmaWd1cmUgb3V0IHRoZSBjb3JyZWN0IGluZGV4IHRvIGluc2VydCB0aGUgQ1NTIGludG9cblxuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGFzdEMgPSAwO1xuICBhcmdzWzBdLnJlcGxhY2UoLyVbYS16QS1aJV0vZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgaWYgKG1hdGNoID09PSAnJSUnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW5kZXgrKztcblxuICAgIGlmIChtYXRjaCA9PT0gJyVjJykge1xuICAgICAgLy8gV2Ugb25seSBhcmUgaW50ZXJlc3RlZCBpbiB0aGUgKmxhc3QqICVjXG4gICAgICAvLyAodGhlIHVzZXIgbWF5IGhhdmUgcHJvdmlkZWQgdGhlaXIgb3duKVxuICAgICAgbGFzdEMgPSBpbmRleDtcbiAgICB9XG4gIH0pO1xuICBhcmdzLnNwbGljZShsYXN0QywgMCwgYyk7XG59XG4vKipcbiAqIEludm9rZXMgYGNvbnNvbGUubG9nKClgIHdoZW4gYXZhaWxhYmxlLlxuICogTm8tb3Agd2hlbiBgY29uc29sZS5sb2dgIGlzIG5vdCBhIFwiZnVuY3Rpb25cIi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblxuZnVuY3Rpb24gbG9nKCkge1xuICB2YXIgX2NvbnNvbGU7XG5cbiAgLy8gVGhpcyBoYWNrZXJ5IGlzIHJlcXVpcmVkIGZvciBJRTgvOSwgd2hlcmVcbiAgLy8gdGhlIGBjb25zb2xlLmxvZ2AgZnVuY3Rpb24gZG9lc24ndCBoYXZlICdhcHBseSdcbiAgcmV0dXJuICh0eXBlb2YgY29uc29sZSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGNvbnNvbGUpKSA9PT0gJ29iamVjdCcgJiYgY29uc29sZS5sb2cgJiYgKF9jb25zb2xlID0gY29uc29sZSkubG9nLmFwcGx5KF9jb25zb2xlLCBhcmd1bWVudHMpO1xufVxuLyoqXG4gKiBTYXZlIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuXG5mdW5jdGlvbiBzYXZlKG5hbWVzcGFjZXMpIHtcbiAgdHJ5IHtcbiAgICBpZiAobmFtZXNwYWNlcykge1xuICAgICAgZXhwb3J0cy5zdG9yYWdlLnNldEl0ZW0oJ2RlYnVnJywgbmFtZXNwYWNlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4cG9ydHMuc3RvcmFnZS5yZW1vdmVJdGVtKCdkZWJ1ZycpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHsvLyBTd2FsbG93XG4gICAgLy8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG4gIH1cbn1cbi8qKlxuICogTG9hZCBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHJldHVybiB7U3RyaW5nfSByZXR1cm5zIHRoZSBwcmV2aW91c2x5IHBlcnNpc3RlZCBkZWJ1ZyBtb2Rlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuXG5mdW5jdGlvbiBsb2FkKCkge1xuICB2YXIgcjtcblxuICB0cnkge1xuICAgIHIgPSBleHBvcnRzLnN0b3JhZ2UuZ2V0SXRlbSgnZGVidWcnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHt9IC8vIFN3YWxsb3dcbiAgLy8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG4gIC8vIElmIGRlYnVnIGlzbid0IHNldCBpbiBMUywgYW5kIHdlJ3JlIGluIEVsZWN0cm9uLCB0cnkgdG8gbG9hZCAkREVCVUdcblxuXG4gIGlmICghciAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2VudicgaW4gcHJvY2Vzcykge1xuICAgIHIgPSBwcm9jZXNzLmVudi5ERUJVRztcbiAgfVxuXG4gIHJldHVybiByO1xufVxuLyoqXG4gKiBMb2NhbHN0b3JhZ2UgYXR0ZW1wdHMgdG8gcmV0dXJuIHRoZSBsb2NhbHN0b3JhZ2UuXG4gKlxuICogVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBzYWZhcmkgdGhyb3dzXG4gKiB3aGVuIGEgdXNlciBkaXNhYmxlcyBjb29raWVzL2xvY2Fsc3RvcmFnZVxuICogYW5kIHlvdSBhdHRlbXB0IHRvIGFjY2VzcyBpdC5cbiAqXG4gKiBAcmV0dXJuIHtMb2NhbFN0b3JhZ2V9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5cbmZ1bmN0aW9uIGxvY2Fsc3RvcmFnZSgpIHtcbiAgdHJ5IHtcbiAgICAvLyBUVk1MS2l0IChBcHBsZSBUViBKUyBSdW50aW1lKSBkb2VzIG5vdCBoYXZlIGEgd2luZG93IG9iamVjdCwganVzdCBsb2NhbFN0b3JhZ2UgaW4gdGhlIGdsb2JhbCBjb250ZXh0XG4gICAgLy8gVGhlIEJyb3dzZXIgYWxzbyBoYXMgbG9jYWxTdG9yYWdlIGluIHRoZSBnbG9iYWwgY29udGV4dC5cbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlO1xuICB9IGNhdGNoIChlcnJvcikgey8vIFN3YWxsb3dcbiAgICAvLyBYWFggKEBRaXgtKSBzaG91bGQgd2UgYmUgbG9nZ2luZyB0aGVzZT9cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY29tbW9uJykoZXhwb3J0cyk7XG52YXIgZm9ybWF0dGVycyA9IG1vZHVsZS5leHBvcnRzLmZvcm1hdHRlcnM7XG4vKipcbiAqIE1hcCAlaiB0byBgSlNPTi5zdHJpbmdpZnkoKWAsIHNpbmNlIG5vIFdlYiBJbnNwZWN0b3JzIGRvIHRoYXQgYnkgZGVmYXVsdC5cbiAqL1xuXG5mb3JtYXR0ZXJzLmogPSBmdW5jdGlvbiAodikge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gJ1tVbmV4cGVjdGVkSlNPTlBhcnNlRXJyb3JdOiAnICsgZXJyb3IubWVzc2FnZTtcbiAgfVxufTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogVGhpcyBpcyB0aGUgY29tbW9uIGxvZ2ljIGZvciBib3RoIHRoZSBOb2RlLmpzIGFuZCB3ZWIgYnJvd3NlclxuICogaW1wbGVtZW50YXRpb25zIG9mIGBkZWJ1ZygpYC5cbiAqL1xuZnVuY3Rpb24gc2V0dXAoZW52KSB7XG4gIGNyZWF0ZURlYnVnLmRlYnVnID0gY3JlYXRlRGVidWc7XG4gIGNyZWF0ZURlYnVnLmRlZmF1bHQgPSBjcmVhdGVEZWJ1ZztcbiAgY3JlYXRlRGVidWcuY29lcmNlID0gY29lcmNlO1xuICBjcmVhdGVEZWJ1Zy5kaXNhYmxlID0gZGlzYWJsZTtcbiAgY3JlYXRlRGVidWcuZW5hYmxlID0gZW5hYmxlO1xuICBjcmVhdGVEZWJ1Zy5lbmFibGVkID0gZW5hYmxlZDtcbiAgY3JlYXRlRGVidWcuaHVtYW5pemUgPSByZXF1aXJlKCdtcycpO1xuICBPYmplY3Qua2V5cyhlbnYpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGNyZWF0ZURlYnVnW2tleV0gPSBlbnZba2V5XTtcbiAgfSk7XG4gIC8qKlxuICAqIEFjdGl2ZSBgZGVidWdgIGluc3RhbmNlcy5cbiAgKi9cblxuICBjcmVhdGVEZWJ1Zy5pbnN0YW5jZXMgPSBbXTtcbiAgLyoqXG4gICogVGhlIGN1cnJlbnRseSBhY3RpdmUgZGVidWcgbW9kZSBuYW1lcywgYW5kIG5hbWVzIHRvIHNraXAuXG4gICovXG5cbiAgY3JlYXRlRGVidWcubmFtZXMgPSBbXTtcbiAgY3JlYXRlRGVidWcuc2tpcHMgPSBbXTtcbiAgLyoqXG4gICogTWFwIG9mIHNwZWNpYWwgXCIlblwiIGhhbmRsaW5nIGZ1bmN0aW9ucywgZm9yIHRoZSBkZWJ1ZyBcImZvcm1hdFwiIGFyZ3VtZW50LlxuICAqXG4gICogVmFsaWQga2V5IG5hbWVzIGFyZSBhIHNpbmdsZSwgbG93ZXIgb3IgdXBwZXItY2FzZSBsZXR0ZXIsIGkuZS4gXCJuXCIgYW5kIFwiTlwiLlxuICAqL1xuXG4gIGNyZWF0ZURlYnVnLmZvcm1hdHRlcnMgPSB7fTtcbiAgLyoqXG4gICogU2VsZWN0cyBhIGNvbG9yIGZvciBhIGRlYnVnIG5hbWVzcGFjZVxuICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2UgVGhlIG5hbWVzcGFjZSBzdHJpbmcgZm9yIHRoZSBmb3IgdGhlIGRlYnVnIGluc3RhbmNlIHRvIGJlIGNvbG9yZWRcbiAgKiBAcmV0dXJuIHtOdW1iZXJ8U3RyaW5nfSBBbiBBTlNJIGNvbG9yIGNvZGUgZm9yIHRoZSBnaXZlbiBuYW1lc3BhY2VcbiAgKiBAYXBpIHByaXZhdGVcbiAgKi9cblxuICBmdW5jdGlvbiBzZWxlY3RDb2xvcihuYW1lc3BhY2UpIHtcbiAgICB2YXIgaGFzaCA9IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5hbWVzcGFjZS5sZW5ndGg7IGkrKykge1xuICAgICAgaGFzaCA9IChoYXNoIDw8IDUpIC0gaGFzaCArIG5hbWVzcGFjZS5jaGFyQ29kZUF0KGkpO1xuICAgICAgaGFzaCB8PSAwOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlRGVidWcuY29sb3JzW01hdGguYWJzKGhhc2gpICUgY3JlYXRlRGVidWcuY29sb3JzLmxlbmd0aF07XG4gIH1cblxuICBjcmVhdGVEZWJ1Zy5zZWxlY3RDb2xvciA9IHNlbGVjdENvbG9yO1xuICAvKipcbiAgKiBDcmVhdGUgYSBkZWJ1Z2dlciB3aXRoIHRoZSBnaXZlbiBgbmFtZXNwYWNlYC5cbiAgKlxuICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VcbiAgKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAgKiBAYXBpIHB1YmxpY1xuICAqL1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZURlYnVnKG5hbWVzcGFjZSkge1xuICAgIHZhciBwcmV2VGltZTtcblxuICAgIGZ1bmN0aW9uIGRlYnVnKCkge1xuICAgICAgLy8gRGlzYWJsZWQ/XG4gICAgICBpZiAoIWRlYnVnLmVuYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgdmFyIHNlbGYgPSBkZWJ1ZzsgLy8gU2V0IGBkaWZmYCB0aW1lc3RhbXBcblxuICAgICAgdmFyIGN1cnIgPSBOdW1iZXIobmV3IERhdGUoKSk7XG4gICAgICB2YXIgbXMgPSBjdXJyIC0gKHByZXZUaW1lIHx8IGN1cnIpO1xuICAgICAgc2VsZi5kaWZmID0gbXM7XG4gICAgICBzZWxmLnByZXYgPSBwcmV2VGltZTtcbiAgICAgIHNlbGYuY3VyciA9IGN1cnI7XG4gICAgICBwcmV2VGltZSA9IGN1cnI7XG4gICAgICBhcmdzWzBdID0gY3JlYXRlRGVidWcuY29lcmNlKGFyZ3NbMF0pO1xuXG4gICAgICBpZiAodHlwZW9mIGFyZ3NbMF0gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIC8vIEFueXRoaW5nIGVsc2UgbGV0J3MgaW5zcGVjdCB3aXRoICVPXG4gICAgICAgIGFyZ3MudW5zaGlmdCgnJU8nKTtcbiAgICAgIH0gLy8gQXBwbHkgYW55IGBmb3JtYXR0ZXJzYCB0cmFuc2Zvcm1hdGlvbnNcblxuXG4gICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgYXJnc1swXSA9IGFyZ3NbMF0ucmVwbGFjZSgvJShbYS16QS1aJV0pL2csIGZ1bmN0aW9uIChtYXRjaCwgZm9ybWF0KSB7XG4gICAgICAgIC8vIElmIHdlIGVuY291bnRlciBhbiBlc2NhcGVkICUgdGhlbiBkb24ndCBpbmNyZWFzZSB0aGUgYXJyYXkgaW5kZXhcbiAgICAgICAgaWYgKG1hdGNoID09PSAnJSUnKSB7XG4gICAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5kZXgrKztcbiAgICAgICAgdmFyIGZvcm1hdHRlciA9IGNyZWF0ZURlYnVnLmZvcm1hdHRlcnNbZm9ybWF0XTtcblxuICAgICAgICBpZiAodHlwZW9mIGZvcm1hdHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHZhciB2YWwgPSBhcmdzW2luZGV4XTtcbiAgICAgICAgICBtYXRjaCA9IGZvcm1hdHRlci5jYWxsKHNlbGYsIHZhbCk7IC8vIE5vdyB3ZSBuZWVkIHRvIHJlbW92ZSBgYXJnc1tpbmRleF1gIHNpbmNlIGl0J3MgaW5saW5lZCBpbiB0aGUgYGZvcm1hdGBcblxuICAgICAgICAgIGFyZ3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICBpbmRleC0tO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgfSk7IC8vIEFwcGx5IGVudi1zcGVjaWZpYyBmb3JtYXR0aW5nIChjb2xvcnMsIGV0Yy4pXG5cbiAgICAgIGNyZWF0ZURlYnVnLmZvcm1hdEFyZ3MuY2FsbChzZWxmLCBhcmdzKTtcbiAgICAgIHZhciBsb2dGbiA9IHNlbGYubG9nIHx8IGNyZWF0ZURlYnVnLmxvZztcbiAgICAgIGxvZ0ZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgIH1cblxuICAgIGRlYnVnLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcbiAgICBkZWJ1Zy5lbmFibGVkID0gY3JlYXRlRGVidWcuZW5hYmxlZChuYW1lc3BhY2UpO1xuICAgIGRlYnVnLnVzZUNvbG9ycyA9IGNyZWF0ZURlYnVnLnVzZUNvbG9ycygpO1xuICAgIGRlYnVnLmNvbG9yID0gc2VsZWN0Q29sb3IobmFtZXNwYWNlKTtcbiAgICBkZWJ1Zy5kZXN0cm95ID0gZGVzdHJveTtcbiAgICBkZWJ1Zy5leHRlbmQgPSBleHRlbmQ7IC8vIERlYnVnLmZvcm1hdEFyZ3MgPSBmb3JtYXRBcmdzO1xuICAgIC8vIGRlYnVnLnJhd0xvZyA9IHJhd0xvZztcbiAgICAvLyBlbnYtc3BlY2lmaWMgaW5pdGlhbGl6YXRpb24gbG9naWMgZm9yIGRlYnVnIGluc3RhbmNlc1xuXG4gICAgaWYgKHR5cGVvZiBjcmVhdGVEZWJ1Zy5pbml0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjcmVhdGVEZWJ1Zy5pbml0KGRlYnVnKTtcbiAgICB9XG5cbiAgICBjcmVhdGVEZWJ1Zy5pbnN0YW5jZXMucHVzaChkZWJ1Zyk7XG4gICAgcmV0dXJuIGRlYnVnO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICB2YXIgaW5kZXggPSBjcmVhdGVEZWJ1Zy5pbnN0YW5jZXMuaW5kZXhPZih0aGlzKTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIGNyZWF0ZURlYnVnLmluc3RhbmNlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gZXh0ZW5kKG5hbWVzcGFjZSwgZGVsaW1pdGVyKSB7XG4gICAgcmV0dXJuIGNyZWF0ZURlYnVnKHRoaXMubmFtZXNwYWNlICsgKHR5cGVvZiBkZWxpbWl0ZXIgPT09ICd1bmRlZmluZWQnID8gJzonIDogZGVsaW1pdGVyKSArIG5hbWVzcGFjZSk7XG4gIH1cbiAgLyoqXG4gICogRW5hYmxlcyBhIGRlYnVnIG1vZGUgYnkgbmFtZXNwYWNlcy4gVGhpcyBjYW4gaW5jbHVkZSBtb2Rlc1xuICAqIHNlcGFyYXRlZCBieSBhIGNvbG9uIGFuZCB3aWxkY2FyZHMuXG4gICpcbiAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICAqIEBhcGkgcHVibGljXG4gICovXG5cblxuICBmdW5jdGlvbiBlbmFibGUobmFtZXNwYWNlcykge1xuICAgIGNyZWF0ZURlYnVnLnNhdmUobmFtZXNwYWNlcyk7XG4gICAgY3JlYXRlRGVidWcubmFtZXMgPSBbXTtcbiAgICBjcmVhdGVEZWJ1Zy5za2lwcyA9IFtdO1xuICAgIHZhciBpO1xuICAgIHZhciBzcGxpdCA9ICh0eXBlb2YgbmFtZXNwYWNlcyA9PT0gJ3N0cmluZycgPyBuYW1lc3BhY2VzIDogJycpLnNwbGl0KC9bXFxzLF0rLyk7XG4gICAgdmFyIGxlbiA9IHNwbGl0Lmxlbmd0aDtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgaWYgKCFzcGxpdFtpXSkge1xuICAgICAgICAvLyBpZ25vcmUgZW1wdHkgc3RyaW5nc1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbmFtZXNwYWNlcyA9IHNwbGl0W2ldLnJlcGxhY2UoL1xcKi9nLCAnLio/Jyk7XG5cbiAgICAgIGlmIChuYW1lc3BhY2VzWzBdID09PSAnLScpIHtcbiAgICAgICAgY3JlYXRlRGVidWcuc2tpcHMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMuc3Vic3RyKDEpICsgJyQnKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjcmVhdGVEZWJ1Zy5uYW1lcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcyArICckJykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBjcmVhdGVEZWJ1Zy5pbnN0YW5jZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpbnN0YW5jZSA9IGNyZWF0ZURlYnVnLmluc3RhbmNlc1tpXTtcbiAgICAgIGluc3RhbmNlLmVuYWJsZWQgPSBjcmVhdGVEZWJ1Zy5lbmFibGVkKGluc3RhbmNlLm5hbWVzcGFjZSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAqIERpc2FibGUgZGVidWcgb3V0cHV0LlxuICAqXG4gICogQGFwaSBwdWJsaWNcbiAgKi9cblxuXG4gIGZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gICAgY3JlYXRlRGVidWcuZW5hYmxlKCcnKTtcbiAgfVxuICAvKipcbiAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIG1vZGUgbmFtZSBpcyBlbmFibGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gICpcbiAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICogQGFwaSBwdWJsaWNcbiAgKi9cblxuXG4gIGZ1bmN0aW9uIGVuYWJsZWQobmFtZSkge1xuICAgIGlmIChuYW1lW25hbWUubGVuZ3RoIC0gMV0gPT09ICcqJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdmFyIGk7XG4gICAgdmFyIGxlbjtcblxuICAgIGZvciAoaSA9IDAsIGxlbiA9IGNyZWF0ZURlYnVnLnNraXBzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBpZiAoY3JlYXRlRGVidWcuc2tpcHNbaV0udGVzdChuYW1lKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMCwgbGVuID0gY3JlYXRlRGVidWcubmFtZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGlmIChjcmVhdGVEZWJ1Zy5uYW1lc1tpXS50ZXN0KG5hbWUpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvKipcbiAgKiBDb2VyY2UgYHZhbGAuXG4gICpcbiAgKiBAcGFyYW0ge01peGVkfSB2YWxcbiAgKiBAcmV0dXJuIHtNaXhlZH1cbiAgKiBAYXBpIHByaXZhdGVcbiAgKi9cblxuXG4gIGZ1bmN0aW9uIGNvZXJjZSh2YWwpIHtcbiAgICBpZiAodmFsIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIHJldHVybiB2YWwuc3RhY2sgfHwgdmFsLm1lc3NhZ2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuXG4gIGNyZWF0ZURlYnVnLmVuYWJsZShjcmVhdGVEZWJ1Zy5sb2FkKCkpO1xuICByZXR1cm4gY3JlYXRlRGVidWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0dXA7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIERldGVjdCBFbGVjdHJvbiByZW5kZXJlciAvIG53anMgcHJvY2Vzcywgd2hpY2ggaXMgbm9kZSwgYnV0IHdlIHNob3VsZFxuICogdHJlYXQgYXMgYSBicm93c2VyLlxuICovXG5pZiAodHlwZW9mIHByb2Nlc3MgPT09ICd1bmRlZmluZWQnIHx8IHByb2Nlc3MudHlwZSA9PT0gJ3JlbmRlcmVyJyB8fCBwcm9jZXNzLmJyb3dzZXIgPT09IHRydWUgfHwgcHJvY2Vzcy5fX253anMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Jyb3dzZXIuanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9ub2RlLmpzJyk7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cbnZhciB0dHkgPSByZXF1aXJlKCd0dHknKTtcblxudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG4vKipcbiAqIFRoaXMgaXMgdGhlIE5vZGUuanMgaW1wbGVtZW50YXRpb24gb2YgYGRlYnVnKClgLlxuICovXG5cblxuZXhwb3J0cy5pbml0ID0gaW5pdDtcbmV4cG9ydHMubG9nID0gbG9nO1xuZXhwb3J0cy5mb3JtYXRBcmdzID0gZm9ybWF0QXJncztcbmV4cG9ydHMuc2F2ZSA9IHNhdmU7XG5leHBvcnRzLmxvYWQgPSBsb2FkO1xuZXhwb3J0cy51c2VDb2xvcnMgPSB1c2VDb2xvcnM7XG4vKipcbiAqIENvbG9ycy5cbiAqL1xuXG5leHBvcnRzLmNvbG9ycyA9IFs2LCAyLCAzLCA0LCA1LCAxXTtcblxudHJ5IHtcbiAgLy8gT3B0aW9uYWwgZGVwZW5kZW5jeSAoYXMgaW4sIGRvZXNuJ3QgbmVlZCB0byBiZSBpbnN0YWxsZWQsIE5PVCBsaWtlIG9wdGlvbmFsRGVwZW5kZW5jaWVzIGluIHBhY2thZ2UuanNvbilcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuICB2YXIgc3VwcG9ydHNDb2xvciA9IHJlcXVpcmUoJ3N1cHBvcnRzLWNvbG9yJyk7XG5cbiAgaWYgKHN1cHBvcnRzQ29sb3IgJiYgKHN1cHBvcnRzQ29sb3Iuc3RkZXJyIHx8IHN1cHBvcnRzQ29sb3IpLmxldmVsID49IDIpIHtcbiAgICBleHBvcnRzLmNvbG9ycyA9IFsyMCwgMjEsIDI2LCAyNywgMzIsIDMzLCAzOCwgMzksIDQwLCA0MSwgNDIsIDQzLCA0NCwgNDUsIDU2LCA1NywgNjIsIDYzLCA2OCwgNjksIDc0LCA3NSwgNzYsIDc3LCA3OCwgNzksIDgwLCA4MSwgOTIsIDkzLCA5OCwgOTksIDExMiwgMTEzLCAxMjgsIDEyOSwgMTM0LCAxMzUsIDE0OCwgMTQ5LCAxNjAsIDE2MSwgMTYyLCAxNjMsIDE2NCwgMTY1LCAxNjYsIDE2NywgMTY4LCAxNjksIDE3MCwgMTcxLCAxNzIsIDE3MywgMTc4LCAxNzksIDE4NCwgMTg1LCAxOTYsIDE5NywgMTk4LCAxOTksIDIwMCwgMjAxLCAyMDIsIDIwMywgMjA0LCAyMDUsIDIwNiwgMjA3LCAyMDgsIDIwOSwgMjE0LCAyMTUsIDIyMCwgMjIxXTtcbiAgfVxufSBjYXRjaCAoZXJyb3IpIHt9IC8vIFN3YWxsb3cgLSB3ZSBvbmx5IGNhcmUgaWYgYHN1cHBvcnRzLWNvbG9yYCBpcyBhdmFpbGFibGU7IGl0IGRvZXNuJ3QgaGF2ZSB0byBiZS5cblxuLyoqXG4gKiBCdWlsZCB1cCB0aGUgZGVmYXVsdCBgaW5zcGVjdE9wdHNgIG9iamVjdCBmcm9tIHRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMuXG4gKlxuICogICAkIERFQlVHX0NPTE9SUz1ubyBERUJVR19ERVBUSD0xMCBERUJVR19TSE9XX0hJRERFTj1lbmFibGVkIG5vZGUgc2NyaXB0LmpzXG4gKi9cblxuXG5leHBvcnRzLmluc3BlY3RPcHRzID0gT2JqZWN0LmtleXMocHJvY2Vzcy5lbnYpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAvXmRlYnVnXy9pLnRlc3Qoa2V5KTtcbn0pLnJlZHVjZShmdW5jdGlvbiAob2JqLCBrZXkpIHtcbiAgLy8gQ2FtZWwtY2FzZVxuICB2YXIgcHJvcCA9IGtleS5zdWJzdHJpbmcoNikudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9fKFthLXpdKS9nLCBmdW5jdGlvbiAoXywgaykge1xuICAgIHJldHVybiBrLnRvVXBwZXJDYXNlKCk7XG4gIH0pOyAvLyBDb2VyY2Ugc3RyaW5nIHZhbHVlIGludG8gSlMgdmFsdWVcblxuICB2YXIgdmFsID0gcHJvY2Vzcy5lbnZba2V5XTtcblxuICBpZiAoL14oeWVzfG9ufHRydWV8ZW5hYmxlZCkkL2kudGVzdCh2YWwpKSB7XG4gICAgdmFsID0gdHJ1ZTtcbiAgfSBlbHNlIGlmICgvXihub3xvZmZ8ZmFsc2V8ZGlzYWJsZWQpJC9pLnRlc3QodmFsKSkge1xuICAgIHZhbCA9IGZhbHNlO1xuICB9IGVsc2UgaWYgKHZhbCA9PT0gJ251bGwnKSB7XG4gICAgdmFsID0gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICB2YWwgPSBOdW1iZXIodmFsKTtcbiAgfVxuXG4gIG9ialtwcm9wXSA9IHZhbDtcbiAgcmV0dXJuIG9iajtcbn0sIHt9KTtcbi8qKlxuICogSXMgc3Rkb3V0IGEgVFRZPyBDb2xvcmVkIG91dHB1dCBpcyBlbmFibGVkIHdoZW4gYHRydWVgLlxuICovXG5cbmZ1bmN0aW9uIHVzZUNvbG9ycygpIHtcbiAgcmV0dXJuICdjb2xvcnMnIGluIGV4cG9ydHMuaW5zcGVjdE9wdHMgPyBCb29sZWFuKGV4cG9ydHMuaW5zcGVjdE9wdHMuY29sb3JzKSA6IHR0eS5pc2F0dHkocHJvY2Vzcy5zdGRlcnIuZmQpO1xufVxuLyoqXG4gKiBBZGRzIEFOU0kgY29sb3IgZXNjYXBlIGNvZGVzIGlmIGVuYWJsZWQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5cbmZ1bmN0aW9uIGZvcm1hdEFyZ3MoYXJncykge1xuICB2YXIgbmFtZSA9IHRoaXMubmFtZXNwYWNlLFxuICAgICAgdXNlQ29sb3JzID0gdGhpcy51c2VDb2xvcnM7XG5cbiAgaWYgKHVzZUNvbG9ycykge1xuICAgIHZhciBjID0gdGhpcy5jb2xvcjtcbiAgICB2YXIgY29sb3JDb2RlID0gXCJcXHgxQlszXCIgKyAoYyA8IDggPyBjIDogJzg7NTsnICsgYyk7XG4gICAgdmFyIHByZWZpeCA9IFwiICBcIi5jb25jYXQoY29sb3JDb2RlLCBcIjsxbVwiKS5jb25jYXQobmFtZSwgXCIgXFx4MUJbMG1cIik7XG4gICAgYXJnc1swXSA9IHByZWZpeCArIGFyZ3NbMF0uc3BsaXQoJ1xcbicpLmpvaW4oJ1xcbicgKyBwcmVmaXgpO1xuICAgIGFyZ3MucHVzaChjb2xvckNvZGUgKyAnbSsnICsgbW9kdWxlLmV4cG9ydHMuaHVtYW5pemUodGhpcy5kaWZmKSArIFwiXFx4MUJbMG1cIik7XG4gIH0gZWxzZSB7XG4gICAgYXJnc1swXSA9IGdldERhdGUoKSArIG5hbWUgKyAnICcgKyBhcmdzWzBdO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERhdGUoKSB7XG4gIGlmIChleHBvcnRzLmluc3BlY3RPcHRzLmhpZGVEYXRlKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSArICcgJztcbn1cbi8qKlxuICogSW52b2tlcyBgdXRpbC5mb3JtYXQoKWAgd2l0aCB0aGUgc3BlY2lmaWVkIGFyZ3VtZW50cyBhbmQgd3JpdGVzIHRvIHN0ZGVyci5cbiAqL1xuXG5cbmZ1bmN0aW9uIGxvZygpIHtcbiAgcmV0dXJuIHByb2Nlc3Muc3RkZXJyLndyaXRlKHV0aWwuZm9ybWF0LmFwcGx5KHV0aWwsIGFyZ3VtZW50cykgKyAnXFxuJyk7XG59XG4vKipcbiAqIFNhdmUgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5cbmZ1bmN0aW9uIHNhdmUobmFtZXNwYWNlcykge1xuICBpZiAobmFtZXNwYWNlcykge1xuICAgIHByb2Nlc3MuZW52LkRFQlVHID0gbmFtZXNwYWNlcztcbiAgfSBlbHNlIHtcbiAgICAvLyBJZiB5b3Ugc2V0IGEgcHJvY2Vzcy5lbnYgZmllbGQgdG8gbnVsbCBvciB1bmRlZmluZWQsIGl0IGdldHMgY2FzdCB0byB0aGVcbiAgICAvLyBzdHJpbmcgJ251bGwnIG9yICd1bmRlZmluZWQnLiBKdXN0IGRlbGV0ZSBpbnN0ZWFkLlxuICAgIGRlbGV0ZSBwcm9jZXNzLmVudi5ERUJVRztcbiAgfVxufVxuLyoqXG4gKiBMb2FkIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHJldHVybnMgdGhlIHByZXZpb3VzbHkgcGVyc2lzdGVkIGRlYnVnIG1vZGVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5cbmZ1bmN0aW9uIGxvYWQoKSB7XG4gIHJldHVybiBwcm9jZXNzLmVudi5ERUJVRztcbn1cbi8qKlxuICogSW5pdCBsb2dpYyBmb3IgYGRlYnVnYCBpbnN0YW5jZXMuXG4gKlxuICogQ3JlYXRlIGEgbmV3IGBpbnNwZWN0T3B0c2Agb2JqZWN0IGluIGNhc2UgYHVzZUNvbG9yc2AgaXMgc2V0XG4gKiBkaWZmZXJlbnRseSBmb3IgYSBwYXJ0aWN1bGFyIGBkZWJ1Z2AgaW5zdGFuY2UuXG4gKi9cblxuXG5mdW5jdGlvbiBpbml0KGRlYnVnKSB7XG4gIGRlYnVnLmluc3BlY3RPcHRzID0ge307XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZXhwb3J0cy5pbnNwZWN0T3B0cyk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgZGVidWcuaW5zcGVjdE9wdHNba2V5c1tpXV0gPSBleHBvcnRzLmluc3BlY3RPcHRzW2tleXNbaV1dO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9jb21tb24nKShleHBvcnRzKTtcbnZhciBmb3JtYXR0ZXJzID0gbW9kdWxlLmV4cG9ydHMuZm9ybWF0dGVycztcbi8qKlxuICogTWFwICVvIHRvIGB1dGlsLmluc3BlY3QoKWAsIGFsbCBvbiBhIHNpbmdsZSBsaW5lLlxuICovXG5cbmZvcm1hdHRlcnMubyA9IGZ1bmN0aW9uICh2KSB7XG4gIHRoaXMuaW5zcGVjdE9wdHMuY29sb3JzID0gdGhpcy51c2VDb2xvcnM7XG4gIHJldHVybiB1dGlsLmluc3BlY3QodiwgdGhpcy5pbnNwZWN0T3B0cykucmVwbGFjZSgvXFxzKlxcblxccyovZywgJyAnKTtcbn07XG4vKipcbiAqIE1hcCAlTyB0byBgdXRpbC5pbnNwZWN0KClgLCBhbGxvd2luZyBtdWx0aXBsZSBsaW5lcyBpZiBuZWVkZWQuXG4gKi9cblxuXG5mb3JtYXR0ZXJzLk8gPSBmdW5jdGlvbiAodikge1xuICB0aGlzLmluc3BlY3RPcHRzLmNvbG9ycyA9IHRoaXMudXNlQ29sb3JzO1xuICByZXR1cm4gdXRpbC5pbnNwZWN0KHYsIHRoaXMuaW5zcGVjdE9wdHMpO1xufTtcblxuIiwidmFyIHVybCA9IHJlcXVpcmUoXCJ1cmxcIik7XG52YXIgVVJMID0gdXJsLlVSTDtcbnZhciBodHRwID0gcmVxdWlyZShcImh0dHBcIik7XG52YXIgaHR0cHMgPSByZXF1aXJlKFwiaHR0cHNcIik7XG52YXIgYXNzZXJ0ID0gcmVxdWlyZShcImFzc2VydFwiKTtcbnZhciBXcml0YWJsZSA9IHJlcXVpcmUoXCJzdHJlYW1cIikuV3JpdGFibGU7XG52YXIgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJmb2xsb3ctcmVkaXJlY3RzXCIpO1xuXG4vLyBSRkM3MjMxwqc0LjIuMTogT2YgdGhlIHJlcXVlc3QgbWV0aG9kcyBkZWZpbmVkIGJ5IHRoaXMgc3BlY2lmaWNhdGlvbixcbi8vIHRoZSBHRVQsIEhFQUQsIE9QVElPTlMsIGFuZCBUUkFDRSBtZXRob2RzIGFyZSBkZWZpbmVkIHRvIGJlIHNhZmUuXG52YXIgU0FGRV9NRVRIT0RTID0geyBHRVQ6IHRydWUsIEhFQUQ6IHRydWUsIE9QVElPTlM6IHRydWUsIFRSQUNFOiB0cnVlIH07XG5cbi8vIENyZWF0ZSBoYW5kbGVycyB0aGF0IHBhc3MgZXZlbnRzIGZyb20gbmF0aXZlIHJlcXVlc3RzXG52YXIgZXZlbnRIYW5kbGVycyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5bXCJhYm9ydFwiLCBcImFib3J0ZWRcIiwgXCJlcnJvclwiLCBcInNvY2tldFwiLCBcInRpbWVvdXRcIl0uZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnRIYW5kbGVyc1tldmVudF0gPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgdGhpcy5fcmVkaXJlY3RhYmxlLmVtaXQoZXZlbnQsIGFyZyk7XG4gIH07XG59KTtcblxuLy8gQW4gSFRUUChTKSByZXF1ZXN0IHRoYXQgY2FuIGJlIHJlZGlyZWN0ZWRcbmZ1bmN0aW9uIFJlZGlyZWN0YWJsZVJlcXVlc3Qob3B0aW9ucywgcmVzcG9uc2VDYWxsYmFjaykge1xuICAvLyBJbml0aWFsaXplIHRoZSByZXF1ZXN0XG4gIFdyaXRhYmxlLmNhbGwodGhpcyk7XG4gIG9wdGlvbnMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycyB8fCB7fTtcbiAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnM7XG4gIHRoaXMuX2VuZGVkID0gZmFsc2U7XG4gIHRoaXMuX2VuZGluZyA9IGZhbHNlO1xuICB0aGlzLl9yZWRpcmVjdENvdW50ID0gMDtcbiAgdGhpcy5fcmVkaXJlY3RzID0gW107XG4gIHRoaXMuX3JlcXVlc3RCb2R5TGVuZ3RoID0gMDtcbiAgdGhpcy5fcmVxdWVzdEJvZHlCdWZmZXJzID0gW107XG5cbiAgLy8gU2luY2UgaHR0cC5yZXF1ZXN0IHRyZWF0cyBob3N0IGFzIGFuIGFsaWFzIG9mIGhvc3RuYW1lLFxuICAvLyBidXQgdGhlIHVybCBtb2R1bGUgaW50ZXJwcmV0cyBob3N0IGFzIGhvc3RuYW1lIHBsdXMgcG9ydCxcbiAgLy8gZWxpbWluYXRlIHRoZSBob3N0IHByb3BlcnR5IHRvIGF2b2lkIGNvbmZ1c2lvbi5cbiAgaWYgKG9wdGlvbnMuaG9zdCkge1xuICAgIC8vIFVzZSBob3N0bmFtZSBpZiBzZXQsIGJlY2F1c2UgaXQgaGFzIHByZWNlZGVuY2VcbiAgICBpZiAoIW9wdGlvbnMuaG9zdG5hbWUpIHtcbiAgICAgIG9wdGlvbnMuaG9zdG5hbWUgPSBvcHRpb25zLmhvc3Q7XG4gICAgfVxuICAgIGRlbGV0ZSBvcHRpb25zLmhvc3Q7XG4gIH1cblxuICAvLyBBdHRhY2ggYSBjYWxsYmFjayBpZiBwYXNzZWRcbiAgaWYgKHJlc3BvbnNlQ2FsbGJhY2spIHtcbiAgICB0aGlzLm9uKFwicmVzcG9uc2VcIiwgcmVzcG9uc2VDYWxsYmFjayk7XG4gIH1cblxuICAvLyBSZWFjdCB0byByZXNwb25zZXMgb2YgbmF0aXZlIHJlcXVlc3RzXG4gIHZhciBzZWxmID0gdGhpcztcbiAgdGhpcy5fb25OYXRpdmVSZXNwb25zZSA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgIHNlbGYuX3Byb2Nlc3NSZXNwb25zZShyZXNwb25zZSk7XG4gIH07XG5cbiAgLy8gQ29tcGxldGUgdGhlIFVSTCBvYmplY3Qgd2hlbiBuZWNlc3NhcnlcbiAgaWYgKCFvcHRpb25zLnBhdGhuYW1lICYmIG9wdGlvbnMucGF0aCkge1xuICAgIHZhciBzZWFyY2hQb3MgPSBvcHRpb25zLnBhdGguaW5kZXhPZihcIj9cIik7XG4gICAgaWYgKHNlYXJjaFBvcyA8IDApIHtcbiAgICAgIG9wdGlvbnMucGF0aG5hbWUgPSBvcHRpb25zLnBhdGg7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgb3B0aW9ucy5wYXRobmFtZSA9IG9wdGlvbnMucGF0aC5zdWJzdHJpbmcoMCwgc2VhcmNoUG9zKTtcbiAgICAgIG9wdGlvbnMuc2VhcmNoID0gb3B0aW9ucy5wYXRoLnN1YnN0cmluZyhzZWFyY2hQb3MpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFBlcmZvcm0gdGhlIGZpcnN0IHJlcXVlc3RcbiAgdGhpcy5fcGVyZm9ybVJlcXVlc3QoKTtcbn1cblJlZGlyZWN0YWJsZVJlcXVlc3QucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShXcml0YWJsZS5wcm90b3R5cGUpO1xuXG4vLyBXcml0ZXMgYnVmZmVyZWQgZGF0YSB0byB0aGUgY3VycmVudCBuYXRpdmUgcmVxdWVzdFxuUmVkaXJlY3RhYmxlUmVxdWVzdC5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAoZGF0YSwgZW5jb2RpbmcsIGNhbGxiYWNrKSB7XG4gIC8vIFdyaXRpbmcgaXMgbm90IGFsbG93ZWQgaWYgZW5kIGhhcyBiZWVuIGNhbGxlZFxuICBpZiAodGhpcy5fZW5kaW5nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwid3JpdGUgYWZ0ZXIgZW5kXCIpO1xuICB9XG5cbiAgLy8gVmFsaWRhdGUgaW5wdXQgYW5kIHNoaWZ0IHBhcmFtZXRlcnMgaWYgbmVjZXNzYXJ5XG4gIGlmICghKHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiBkYXRhID09PSBcIm9iamVjdFwiICYmIChcImxlbmd0aFwiIGluIGRhdGEpKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcImRhdGEgc2hvdWxkIGJlIGEgc3RyaW5nLCBCdWZmZXIgb3IgVWludDhBcnJheVwiKTtcbiAgfVxuICBpZiAodHlwZW9mIGVuY29kaW5nID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjYWxsYmFjayA9IGVuY29kaW5nO1xuICAgIGVuY29kaW5nID0gbnVsbDtcbiAgfVxuXG4gIC8vIElnbm9yZSBlbXB0eSBidWZmZXJzLCBzaW5jZSB3cml0aW5nIHRoZW0gZG9lc24ndCBpbnZva2UgdGhlIGNhbGxiYWNrXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9pc3N1ZXMvMjIwNjZcbiAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgLy8gT25seSB3cml0ZSB3aGVuIHdlIGRvbid0IGV4Y2VlZCB0aGUgbWF4aW11bSBib2R5IGxlbmd0aFxuICBpZiAodGhpcy5fcmVxdWVzdEJvZHlMZW5ndGggKyBkYXRhLmxlbmd0aCA8PSB0aGlzLl9vcHRpb25zLm1heEJvZHlMZW5ndGgpIHtcbiAgICB0aGlzLl9yZXF1ZXN0Qm9keUxlbmd0aCArPSBkYXRhLmxlbmd0aDtcbiAgICB0aGlzLl9yZXF1ZXN0Qm9keUJ1ZmZlcnMucHVzaCh7IGRhdGE6IGRhdGEsIGVuY29kaW5nOiBlbmNvZGluZyB9KTtcbiAgICB0aGlzLl9jdXJyZW50UmVxdWVzdC53cml0ZShkYXRhLCBlbmNvZGluZywgY2FsbGJhY2spO1xuICB9XG4gIC8vIEVycm9yIHdoZW4gd2UgZXhjZWVkIHRoZSBtYXhpbXVtIGJvZHkgbGVuZ3RoXG4gIGVsc2Uge1xuICAgIHRoaXMuZW1pdChcImVycm9yXCIsIG5ldyBFcnJvcihcIlJlcXVlc3QgYm9keSBsYXJnZXIgdGhhbiBtYXhCb2R5TGVuZ3RoIGxpbWl0XCIpKTtcbiAgICB0aGlzLmFib3J0KCk7XG4gIH1cbn07XG5cbi8vIEVuZHMgdGhlIGN1cnJlbnQgbmF0aXZlIHJlcXVlc3RcblJlZGlyZWN0YWJsZVJlcXVlc3QucHJvdG90eXBlLmVuZCA9IGZ1bmN0aW9uIChkYXRhLCBlbmNvZGluZywgY2FsbGJhY2spIHtcbiAgLy8gU2hpZnQgcGFyYW1ldGVycyBpZiBuZWNlc3NhcnlcbiAgaWYgKHR5cGVvZiBkYXRhID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjYWxsYmFjayA9IGRhdGE7XG4gICAgZGF0YSA9IGVuY29kaW5nID0gbnVsbDtcbiAgfVxuICBlbHNlIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNhbGxiYWNrID0gZW5jb2Rpbmc7XG4gICAgZW5jb2RpbmcgPSBudWxsO1xuICB9XG5cbiAgLy8gV3JpdGUgZGF0YSBpZiBuZWVkZWQgYW5kIGVuZFxuICBpZiAoIWRhdGEpIHtcbiAgICB0aGlzLl9lbmRlZCA9IHRoaXMuX2VuZGluZyA9IHRydWU7XG4gICAgdGhpcy5fY3VycmVudFJlcXVlc3QuZW5kKG51bGwsIG51bGwsIGNhbGxiYWNrKTtcbiAgfVxuICBlbHNlIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGN1cnJlbnRSZXF1ZXN0ID0gdGhpcy5fY3VycmVudFJlcXVlc3Q7XG4gICAgdGhpcy53cml0ZShkYXRhLCBlbmNvZGluZywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5fZW5kZWQgPSB0cnVlO1xuICAgICAgY3VycmVudFJlcXVlc3QuZW5kKG51bGwsIG51bGwsIGNhbGxiYWNrKTtcbiAgICB9KTtcbiAgICB0aGlzLl9lbmRpbmcgPSB0cnVlO1xuICB9XG59O1xuXG4vLyBTZXRzIGEgaGVhZGVyIHZhbHVlIG9uIHRoZSBjdXJyZW50IG5hdGl2ZSByZXF1ZXN0XG5SZWRpcmVjdGFibGVSZXF1ZXN0LnByb3RvdHlwZS5zZXRIZWFkZXIgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgdGhpcy5fb3B0aW9ucy5oZWFkZXJzW25hbWVdID0gdmFsdWU7XG4gIHRoaXMuX2N1cnJlbnRSZXF1ZXN0LnNldEhlYWRlcihuYW1lLCB2YWx1ZSk7XG59O1xuXG4vLyBDbGVhcnMgYSBoZWFkZXIgdmFsdWUgb24gdGhlIGN1cnJlbnQgbmF0aXZlIHJlcXVlc3RcblJlZGlyZWN0YWJsZVJlcXVlc3QucHJvdG90eXBlLnJlbW92ZUhlYWRlciA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGRlbGV0ZSB0aGlzLl9vcHRpb25zLmhlYWRlcnNbbmFtZV07XG4gIHRoaXMuX2N1cnJlbnRSZXF1ZXN0LnJlbW92ZUhlYWRlcihuYW1lKTtcbn07XG5cbi8vIEdsb2JhbCB0aW1lb3V0IGZvciBhbGwgdW5kZXJseWluZyByZXF1ZXN0c1xuUmVkaXJlY3RhYmxlUmVxdWVzdC5wcm90b3R5cGUuc2V0VGltZW91dCA9IGZ1bmN0aW9uIChtc2VjcywgY2FsbGJhY2spIHtcbiAgaWYgKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5vbmNlKFwidGltZW91dFwiLCBjYWxsYmFjayk7XG4gIH1cblxuICBpZiAodGhpcy5zb2NrZXQpIHtcbiAgICBzdGFydFRpbWVyKHRoaXMsIG1zZWNzKTtcbiAgfVxuICBlbHNlIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5fY3VycmVudFJlcXVlc3Qub25jZShcInNvY2tldFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzdGFydFRpbWVyKHNlbGYsIG1zZWNzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHRoaXMub25jZShcInJlc3BvbnNlXCIsIGNsZWFyVGltZXIpO1xuICB0aGlzLm9uY2UoXCJlcnJvclwiLCBjbGVhclRpbWVyKTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uIHN0YXJ0VGltZXIocmVxdWVzdCwgbXNlY3MpIHtcbiAgY2xlYXJUaW1lb3V0KHJlcXVlc3QuX3RpbWVvdXQpO1xuICByZXF1ZXN0Ll90aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgcmVxdWVzdC5lbWl0KFwidGltZW91dFwiKTtcbiAgfSwgbXNlY3MpO1xufVxuXG5mdW5jdGlvbiBjbGVhclRpbWVyKCkge1xuICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dCk7XG59XG5cbi8vIFByb3h5IGFsbCBvdGhlciBwdWJsaWMgQ2xpZW50UmVxdWVzdCBtZXRob2RzXG5bXG4gIFwiYWJvcnRcIiwgXCJmbHVzaEhlYWRlcnNcIiwgXCJnZXRIZWFkZXJcIixcbiAgXCJzZXROb0RlbGF5XCIsIFwic2V0U29ja2V0S2VlcEFsaXZlXCIsXG5dLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICBSZWRpcmVjdGFibGVSZXF1ZXN0LnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudFJlcXVlc3RbbWV0aG9kXShhLCBiKTtcbiAgfTtcbn0pO1xuXG4vLyBQcm94eSBhbGwgcHVibGljIENsaWVudFJlcXVlc3QgcHJvcGVydGllc1xuW1wiYWJvcnRlZFwiLCBcImNvbm5lY3Rpb25cIiwgXCJzb2NrZXRcIl0uZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlZGlyZWN0YWJsZVJlcXVlc3QucHJvdG90eXBlLCBwcm9wZXJ0eSwge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fY3VycmVudFJlcXVlc3RbcHJvcGVydHldOyB9LFxuICB9KTtcbn0pO1xuXG4vLyBFeGVjdXRlcyB0aGUgbmV4dCBuYXRpdmUgcmVxdWVzdCAoaW5pdGlhbCBvciByZWRpcmVjdClcblJlZGlyZWN0YWJsZVJlcXVlc3QucHJvdG90eXBlLl9wZXJmb3JtUmVxdWVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gTG9hZCB0aGUgbmF0aXZlIHByb3RvY29sXG4gIHZhciBwcm90b2NvbCA9IHRoaXMuX29wdGlvbnMucHJvdG9jb2w7XG4gIHZhciBuYXRpdmVQcm90b2NvbCA9IHRoaXMuX29wdGlvbnMubmF0aXZlUHJvdG9jb2xzW3Byb3RvY29sXTtcbiAgaWYgKCFuYXRpdmVQcm90b2NvbCkge1xuICAgIHRoaXMuZW1pdChcImVycm9yXCIsIG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIHByb3RvY29sIFwiICsgcHJvdG9jb2wpKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBJZiBzcGVjaWZpZWQsIHVzZSB0aGUgYWdlbnQgY29ycmVzcG9uZGluZyB0byB0aGUgcHJvdG9jb2xcbiAgLy8gKEhUVFAgYW5kIEhUVFBTIHVzZSBkaWZmZXJlbnQgdHlwZXMgb2YgYWdlbnRzKVxuICBpZiAodGhpcy5fb3B0aW9ucy5hZ2VudHMpIHtcbiAgICB2YXIgc2NoZW1lID0gcHJvdG9jb2wuc3Vic3RyKDAsIHByb3RvY29sLmxlbmd0aCAtIDEpO1xuICAgIHRoaXMuX29wdGlvbnMuYWdlbnQgPSB0aGlzLl9vcHRpb25zLmFnZW50c1tzY2hlbWVdO1xuICB9XG5cbiAgLy8gQ3JlYXRlIHRoZSBuYXRpdmUgcmVxdWVzdFxuICB2YXIgcmVxdWVzdCA9IHRoaXMuX2N1cnJlbnRSZXF1ZXN0ID1cbiAgICAgICAgbmF0aXZlUHJvdG9jb2wucmVxdWVzdCh0aGlzLl9vcHRpb25zLCB0aGlzLl9vbk5hdGl2ZVJlc3BvbnNlKTtcbiAgdGhpcy5fY3VycmVudFVybCA9IHVybC5mb3JtYXQodGhpcy5fb3B0aW9ucyk7XG5cbiAgLy8gU2V0IHVwIGV2ZW50IGhhbmRsZXJzXG4gIHJlcXVlc3QuX3JlZGlyZWN0YWJsZSA9IHRoaXM7XG4gIGZvciAodmFyIGV2ZW50IGluIGV2ZW50SGFuZGxlcnMpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChldmVudCkge1xuICAgICAgcmVxdWVzdC5vbihldmVudCwgZXZlbnRIYW5kbGVyc1tldmVudF0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIEVuZCBhIHJlZGlyZWN0ZWQgcmVxdWVzdFxuICAvLyAoVGhlIGZpcnN0IHJlcXVlc3QgbXVzdCBiZSBlbmRlZCBleHBsaWNpdGx5IHdpdGggUmVkaXJlY3RhYmxlUmVxdWVzdCNlbmQpXG4gIGlmICh0aGlzLl9pc1JlZGlyZWN0KSB7XG4gICAgLy8gV3JpdGUgdGhlIHJlcXVlc3QgZW50aXR5IGFuZCBlbmQuXG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgYnVmZmVycyA9IHRoaXMuX3JlcXVlc3RCb2R5QnVmZmVycztcbiAgICAoZnVuY3Rpb24gd3JpdGVOZXh0KGVycm9yKSB7XG4gICAgICAvLyBPbmx5IHdyaXRlIGlmIHRoaXMgcmVxdWVzdCBoYXMgbm90IGJlZW4gcmVkaXJlY3RlZCB5ZXRcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAocmVxdWVzdCA9PT0gc2VsZi5fY3VycmVudFJlcXVlc3QpIHtcbiAgICAgICAgLy8gUmVwb3J0IGFueSB3cml0ZSBlcnJvcnNcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHNlbGYuZW1pdChcImVycm9yXCIsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBXcml0ZSB0aGUgbmV4dCBidWZmZXIgaWYgdGhlcmUgYXJlIHN0aWxsIGxlZnRcbiAgICAgICAgZWxzZSBpZiAoaSA8IGJ1ZmZlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgdmFyIGJ1ZmZlciA9IGJ1ZmZlcnNbaSsrXTtcbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgICAgIGlmICghcmVxdWVzdC5maW5pc2hlZCkge1xuICAgICAgICAgICAgcmVxdWVzdC53cml0ZShidWZmZXIuZGF0YSwgYnVmZmVyLmVuY29kaW5nLCB3cml0ZU5leHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBFbmQgdGhlIHJlcXVlc3QgaWYgYGVuZGAgaGFzIGJlZW4gY2FsbGVkIG9uIHVzXG4gICAgICAgIGVsc2UgaWYgKHNlbGYuX2VuZGVkKSB7XG4gICAgICAgICAgcmVxdWVzdC5lbmQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0oKSk7XG4gIH1cbn07XG5cbi8vIFByb2Nlc3NlcyBhIHJlc3BvbnNlIGZyb20gdGhlIGN1cnJlbnQgbmF0aXZlIHJlcXVlc3RcblJlZGlyZWN0YWJsZVJlcXVlc3QucHJvdG90eXBlLl9wcm9jZXNzUmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgLy8gU3RvcmUgdGhlIHJlZGlyZWN0ZWQgcmVzcG9uc2VcbiAgaWYgKHRoaXMuX29wdGlvbnMudHJhY2tSZWRpcmVjdHMpIHtcbiAgICB0aGlzLl9yZWRpcmVjdHMucHVzaCh7XG4gICAgICB1cmw6IHRoaXMuX2N1cnJlbnRVcmwsXG4gICAgICBoZWFkZXJzOiByZXNwb25zZS5oZWFkZXJzLFxuICAgICAgc3RhdHVzQ29kZTogcmVzcG9uc2Uuc3RhdHVzQ29kZSxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFJGQzcyMzHCpzYuNDogVGhlIDN4eCAoUmVkaXJlY3Rpb24pIGNsYXNzIG9mIHN0YXR1cyBjb2RlIGluZGljYXRlc1xuICAvLyB0aGF0IGZ1cnRoZXIgYWN0aW9uIG5lZWRzIHRvIGJlIHRha2VuIGJ5IHRoZSB1c2VyIGFnZW50IGluIG9yZGVyIHRvXG4gIC8vIGZ1bGZpbGwgdGhlIHJlcXVlc3QuIElmIGEgTG9jYXRpb24gaGVhZGVyIGZpZWxkIGlzIHByb3ZpZGVkLFxuICAvLyB0aGUgdXNlciBhZ2VudCBNQVkgYXV0b21hdGljYWxseSByZWRpcmVjdCBpdHMgcmVxdWVzdCB0byB0aGUgVVJJXG4gIC8vIHJlZmVyZW5jZWQgYnkgdGhlIExvY2F0aW9uIGZpZWxkIHZhbHVlLFxuICAvLyBldmVuIGlmIHRoZSBzcGVjaWZpYyBzdGF0dXMgY29kZSBpcyBub3QgdW5kZXJzdG9vZC5cbiAgdmFyIGxvY2F0aW9uID0gcmVzcG9uc2UuaGVhZGVycy5sb2NhdGlvbjtcbiAgaWYgKGxvY2F0aW9uICYmIHRoaXMuX29wdGlvbnMuZm9sbG93UmVkaXJlY3RzICE9PSBmYWxzZSAmJlxuICAgICAgcmVzcG9uc2Uuc3RhdHVzQ29kZSA+PSAzMDAgJiYgcmVzcG9uc2Uuc3RhdHVzQ29kZSA8IDQwMCkge1xuICAgIC8vIEFib3J0IHRoZSBjdXJyZW50IHJlcXVlc3RcbiAgICB0aGlzLl9jdXJyZW50UmVxdWVzdC5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLl9jdXJyZW50UmVxdWVzdC5vbihcImVycm9yXCIsIG5vb3ApO1xuICAgIHRoaXMuX2N1cnJlbnRSZXF1ZXN0LmFib3J0KCk7XG5cbiAgICAvLyBSRkM3MjMxwqc2LjQ6IEEgY2xpZW50IFNIT1VMRCBkZXRlY3QgYW5kIGludGVydmVuZVxuICAgIC8vIGluIGN5Y2xpY2FsIHJlZGlyZWN0aW9ucyAoaS5lLiwgXCJpbmZpbml0ZVwiIHJlZGlyZWN0aW9uIGxvb3BzKS5cbiAgICBpZiAoKyt0aGlzLl9yZWRpcmVjdENvdW50ID4gdGhpcy5fb3B0aW9ucy5tYXhSZWRpcmVjdHMpIHtcbiAgICAgIHRoaXMuZW1pdChcImVycm9yXCIsIG5ldyBFcnJvcihcIk1heCByZWRpcmVjdHMgZXhjZWVkZWQuXCIpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBSRkM3MjMxwqc2LjQ6IEF1dG9tYXRpYyByZWRpcmVjdGlvbiBuZWVkcyB0byBkb25lIHdpdGhcbiAgICAvLyBjYXJlIGZvciBtZXRob2RzIG5vdCBrbm93biB0byBiZSBzYWZlIFvigKZdLFxuICAgIC8vIHNpbmNlIHRoZSB1c2VyIG1pZ2h0IG5vdCB3aXNoIHRvIHJlZGlyZWN0IGFuIHVuc2FmZSByZXF1ZXN0LlxuICAgIC8vIFJGQzcyMzHCpzYuNC43OiBUaGUgMzA3IChUZW1wb3JhcnkgUmVkaXJlY3QpIHN0YXR1cyBjb2RlIGluZGljYXRlc1xuICAgIC8vIHRoYXQgdGhlIHRhcmdldCByZXNvdXJjZSByZXNpZGVzIHRlbXBvcmFyaWx5IHVuZGVyIGEgZGlmZmVyZW50IFVSSVxuICAgIC8vIGFuZCB0aGUgdXNlciBhZ2VudCBNVVNUIE5PVCBjaGFuZ2UgdGhlIHJlcXVlc3QgbWV0aG9kXG4gICAgLy8gaWYgaXQgcGVyZm9ybXMgYW4gYXV0b21hdGljIHJlZGlyZWN0aW9uIHRvIHRoYXQgVVJJLlxuICAgIHZhciBoZWFkZXI7XG4gICAgdmFyIGhlYWRlcnMgPSB0aGlzLl9vcHRpb25zLmhlYWRlcnM7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgIT09IDMwNyAmJiAhKHRoaXMuX29wdGlvbnMubWV0aG9kIGluIFNBRkVfTUVUSE9EUykpIHtcbiAgICAgIHRoaXMuX29wdGlvbnMubWV0aG9kID0gXCJHRVRcIjtcbiAgICAgIC8vIERyb3AgYSBwb3NzaWJsZSBlbnRpdHkgYW5kIGhlYWRlcnMgcmVsYXRlZCB0byBpdFxuICAgICAgdGhpcy5fcmVxdWVzdEJvZHlCdWZmZXJzID0gW107XG4gICAgICBmb3IgKGhlYWRlciBpbiBoZWFkZXJzKSB7XG4gICAgICAgIGlmICgvXmNvbnRlbnQtL2kudGVzdChoZWFkZXIpKSB7XG4gICAgICAgICAgZGVsZXRlIGhlYWRlcnNbaGVhZGVyXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIERyb3AgdGhlIEhvc3QgaGVhZGVyLCBhcyB0aGUgcmVkaXJlY3QgbWlnaHQgbGVhZCB0byBhIGRpZmZlcmVudCBob3N0XG4gICAgaWYgKCF0aGlzLl9pc1JlZGlyZWN0KSB7XG4gICAgICBmb3IgKGhlYWRlciBpbiBoZWFkZXJzKSB7XG4gICAgICAgIGlmICgvXmhvc3QkL2kudGVzdChoZWFkZXIpKSB7XG4gICAgICAgICAgZGVsZXRlIGhlYWRlcnNbaGVhZGVyXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFBlcmZvcm0gdGhlIHJlZGlyZWN0ZWQgcmVxdWVzdFxuICAgIHZhciByZWRpcmVjdFVybCA9IHVybC5yZXNvbHZlKHRoaXMuX2N1cnJlbnRVcmwsIGxvY2F0aW9uKTtcbiAgICBkZWJ1ZyhcInJlZGlyZWN0aW5nIHRvXCIsIHJlZGlyZWN0VXJsKTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuX29wdGlvbnMsIHVybC5wYXJzZShyZWRpcmVjdFVybCkpO1xuICAgIHRoaXMuX2lzUmVkaXJlY3QgPSB0cnVlO1xuICAgIHRoaXMuX3BlcmZvcm1SZXF1ZXN0KCk7XG5cbiAgICAvLyBEaXNjYXJkIHRoZSByZW1haW5kZXIgb2YgdGhlIHJlc3BvbnNlIHRvIGF2b2lkIHdhaXRpbmcgZm9yIGRhdGFcbiAgICByZXNwb25zZS5kZXN0cm95KCk7XG4gIH1cbiAgZWxzZSB7XG4gICAgLy8gVGhlIHJlc3BvbnNlIGlzIG5vdCBhIHJlZGlyZWN0OyByZXR1cm4gaXQgYXMtaXNcbiAgICByZXNwb25zZS5yZXNwb25zZVVybCA9IHRoaXMuX2N1cnJlbnRVcmw7XG4gICAgcmVzcG9uc2UucmVkaXJlY3RzID0gdGhpcy5fcmVkaXJlY3RzO1xuICAgIHRoaXMuZW1pdChcInJlc3BvbnNlXCIsIHJlc3BvbnNlKTtcblxuICAgIC8vIENsZWFuIHVwXG4gICAgdGhpcy5fcmVxdWVzdEJvZHlCdWZmZXJzID0gW107XG4gIH1cbn07XG5cbi8vIFdyYXBzIHRoZSBrZXkvdmFsdWUgb2JqZWN0IG9mIHByb3RvY29scyB3aXRoIHJlZGlyZWN0IGZ1bmN0aW9uYWxpdHlcbmZ1bmN0aW9uIHdyYXAocHJvdG9jb2xzKSB7XG4gIC8vIERlZmF1bHQgc2V0dGluZ3NcbiAgdmFyIGV4cG9ydHMgPSB7XG4gICAgbWF4UmVkaXJlY3RzOiAyMSxcbiAgICBtYXhCb2R5TGVuZ3RoOiAxMCAqIDEwMjQgKiAxMDI0LFxuICB9O1xuXG4gIC8vIFdyYXAgZWFjaCBwcm90b2NvbFxuICB2YXIgbmF0aXZlUHJvdG9jb2xzID0ge307XG4gIE9iamVjdC5rZXlzKHByb3RvY29scykuZm9yRWFjaChmdW5jdGlvbiAoc2NoZW1lKSB7XG4gICAgdmFyIHByb3RvY29sID0gc2NoZW1lICsgXCI6XCI7XG4gICAgdmFyIG5hdGl2ZVByb3RvY29sID0gbmF0aXZlUHJvdG9jb2xzW3Byb3RvY29sXSA9IHByb3RvY29sc1tzY2hlbWVdO1xuICAgIHZhciB3cmFwcGVkUHJvdG9jb2wgPSBleHBvcnRzW3NjaGVtZV0gPSBPYmplY3QuY3JlYXRlKG5hdGl2ZVByb3RvY29sKTtcblxuICAgIC8vIEV4ZWN1dGVzIGEgcmVxdWVzdCwgZm9sbG93aW5nIHJlZGlyZWN0c1xuICAgIHdyYXBwZWRQcm90b2NvbC5yZXF1ZXN0ID0gZnVuY3Rpb24gKGlucHV0LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgICAgLy8gUGFyc2UgcGFyYW1ldGVyc1xuICAgICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICB2YXIgdXJsU3RyID0gaW5wdXQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaW5wdXQgPSB1cmxUb09wdGlvbnMobmV3IFVSTCh1cmxTdHIpKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgICBpbnB1dCA9IHVybC5wYXJzZSh1cmxTdHIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChVUkwgJiYgKGlucHV0IGluc3RhbmNlb2YgVVJMKSkge1xuICAgICAgICBpbnB1dCA9IHVybFRvT3B0aW9ucyhpbnB1dCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2sgPSBvcHRpb25zO1xuICAgICAgICBvcHRpb25zID0gaW5wdXQ7XG4gICAgICAgIGlucHV0ID0geyBwcm90b2NvbDogcHJvdG9jb2wgfTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhbGxiYWNrID0gb3B0aW9ucztcbiAgICAgICAgb3B0aW9ucyA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIC8vIFNldCBkZWZhdWx0c1xuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBtYXhSZWRpcmVjdHM6IGV4cG9ydHMubWF4UmVkaXJlY3RzLFxuICAgICAgICBtYXhCb2R5TGVuZ3RoOiBleHBvcnRzLm1heEJvZHlMZW5ndGgsXG4gICAgICB9LCBpbnB1dCwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLm5hdGl2ZVByb3RvY29scyA9IG5hdGl2ZVByb3RvY29scztcblxuICAgICAgYXNzZXJ0LmVxdWFsKG9wdGlvbnMucHJvdG9jb2wsIHByb3RvY29sLCBcInByb3RvY29sIG1pc21hdGNoXCIpO1xuICAgICAgZGVidWcoXCJvcHRpb25zXCIsIG9wdGlvbnMpO1xuICAgICAgcmV0dXJuIG5ldyBSZWRpcmVjdGFibGVSZXF1ZXN0KG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgLy8gRXhlY3V0ZXMgYSBHRVQgcmVxdWVzdCwgZm9sbG93aW5nIHJlZGlyZWN0c1xuICAgIHdyYXBwZWRQcm90b2NvbC5nZXQgPSBmdW5jdGlvbiAoaW5wdXQsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgICB2YXIgcmVxdWVzdCA9IHdyYXBwZWRQcm90b2NvbC5yZXF1ZXN0KGlucHV0LCBvcHRpb25zLCBjYWxsYmFjayk7XG4gICAgICByZXF1ZXN0LmVuZCgpO1xuICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgfTtcbiAgfSk7XG4gIHJldHVybiBleHBvcnRzO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZnVuY3Rpb24gbm9vcCgpIHsgLyogZW1wdHkgKi8gfVxuXG4vLyBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9ibG9iL21hc3Rlci9saWIvaW50ZXJuYWwvdXJsLmpzXG5mdW5jdGlvbiB1cmxUb09wdGlvbnModXJsT2JqZWN0KSB7XG4gIHZhciBvcHRpb25zID0ge1xuICAgIHByb3RvY29sOiB1cmxPYmplY3QucHJvdG9jb2wsXG4gICAgaG9zdG5hbWU6IHVybE9iamVjdC5ob3N0bmFtZS5zdGFydHNXaXRoKFwiW1wiKSA/XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgdXJsT2JqZWN0Lmhvc3RuYW1lLnNsaWNlKDEsIC0xKSA6XG4gICAgICB1cmxPYmplY3QuaG9zdG5hbWUsXG4gICAgaGFzaDogdXJsT2JqZWN0Lmhhc2gsXG4gICAgc2VhcmNoOiB1cmxPYmplY3Quc2VhcmNoLFxuICAgIHBhdGhuYW1lOiB1cmxPYmplY3QucGF0aG5hbWUsXG4gICAgcGF0aDogdXJsT2JqZWN0LnBhdGhuYW1lICsgdXJsT2JqZWN0LnNlYXJjaCxcbiAgICBocmVmOiB1cmxPYmplY3QuaHJlZixcbiAgfTtcbiAgaWYgKHVybE9iamVjdC5wb3J0ICE9PSBcIlwiKSB7XG4gICAgb3B0aW9ucy5wb3J0ID0gTnVtYmVyKHVybE9iamVjdC5wb3J0KTtcbiAgfVxuICByZXR1cm4gb3B0aW9ucztcbn1cblxuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB3cmFwKHsgaHR0cDogaHR0cCwgaHR0cHM6IGh0dHBzIH0pO1xubW9kdWxlLmV4cG9ydHMud3JhcCA9IHdyYXA7XG4iLCIvKiFcbiAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXJcbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgb2JqLmNvbnN0cnVjdG9yICE9IG51bGwgJiZcbiAgICB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopXG59XG4iLCIvKipcbiAqIEhlbHBlcnMuXG4gKi9cblxudmFyIHMgPSAxMDAwO1xudmFyIG0gPSBzICogNjA7XG52YXIgaCA9IG0gKiA2MDtcbnZhciBkID0gaCAqIDI0O1xudmFyIHcgPSBkICogNztcbnZhciB5ID0gZCAqIDM2NS4yNTtcblxuLyoqXG4gKiBQYXJzZSBvciBmb3JtYXQgdGhlIGdpdmVuIGB2YWxgLlxuICpcbiAqIE9wdGlvbnM6XG4gKlxuICogIC0gYGxvbmdgIHZlcmJvc2UgZm9ybWF0dGluZyBbZmFsc2VdXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSB2YWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEB0aHJvd3Mge0Vycm9yfSB0aHJvdyBhbiBlcnJvciBpZiB2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIG51bWJlclxuICogQHJldHVybiB7U3RyaW5nfE51bWJlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih2YWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcbiAgaWYgKHR5cGUgPT09ICdzdHJpbmcnICYmIHZhbC5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHBhcnNlKHZhbCk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUodmFsKSkge1xuICAgIHJldHVybiBvcHRpb25zLmxvbmcgPyBmbXRMb25nKHZhbCkgOiBmbXRTaG9ydCh2YWwpO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAndmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSB2YWxpZCBudW1iZXIuIHZhbD0nICtcbiAgICAgIEpTT04uc3RyaW5naWZ5KHZhbClcbiAgKTtcbn07XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGBzdHJgIGFuZCByZXR1cm4gbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlKHN0cikge1xuICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgaWYgKHN0ci5sZW5ndGggPiAxMDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG1hdGNoID0gL14oLT8oPzpcXGQrKT9cXC4/XFxkKykgKihtaWxsaXNlY29uZHM/fG1zZWNzP3xtc3xzZWNvbmRzP3xzZWNzP3xzfG1pbnV0ZXM/fG1pbnM/fG18aG91cnM/fGhycz98aHxkYXlzP3xkfHdlZWtzP3x3fHllYXJzP3x5cnM/fHkpPyQvaS5leGVjKFxuICAgIHN0clxuICApO1xuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuID0gcGFyc2VGbG9hdChtYXRjaFsxXSk7XG4gIHZhciB0eXBlID0gKG1hdGNoWzJdIHx8ICdtcycpLnRvTG93ZXJDYXNlKCk7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3llYXJzJzpcbiAgICBjYXNlICd5ZWFyJzpcbiAgICBjYXNlICd5cnMnOlxuICAgIGNhc2UgJ3lyJzpcbiAgICBjYXNlICd5JzpcbiAgICAgIHJldHVybiBuICogeTtcbiAgICBjYXNlICd3ZWVrcyc6XG4gICAgY2FzZSAnd2Vlayc6XG4gICAgY2FzZSAndyc6XG4gICAgICByZXR1cm4gbiAqIHc7XG4gICAgY2FzZSAnZGF5cyc6XG4gICAgY2FzZSAnZGF5JzpcbiAgICBjYXNlICdkJzpcbiAgICAgIHJldHVybiBuICogZDtcbiAgICBjYXNlICdob3Vycyc6XG4gICAgY2FzZSAnaG91cic6XG4gICAgY2FzZSAnaHJzJzpcbiAgICBjYXNlICdocic6XG4gICAgY2FzZSAnaCc6XG4gICAgICByZXR1cm4gbiAqIGg7XG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgY2FzZSAnbWludXRlJzpcbiAgICBjYXNlICdtaW5zJzpcbiAgICBjYXNlICdtaW4nOlxuICAgIGNhc2UgJ20nOlxuICAgICAgcmV0dXJuIG4gKiBtO1xuICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgY2FzZSAnc2Vjcyc6XG4gICAgY2FzZSAnc2VjJzpcbiAgICBjYXNlICdzJzpcbiAgICAgIHJldHVybiBuICogcztcbiAgICBjYXNlICdtaWxsaXNlY29uZHMnOlxuICAgIGNhc2UgJ21pbGxpc2Vjb25kJzpcbiAgICBjYXNlICdtc2Vjcyc6XG4gICAgY2FzZSAnbXNlYyc6XG4gICAgY2FzZSAnbXMnOlxuICAgICAgcmV0dXJuIG47XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBTaG9ydCBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRTaG9ydChtcykge1xuICB2YXIgbXNBYnMgPSBNYXRoLmFicyhtcyk7XG4gIGlmIChtc0FicyA+PSBkKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBkKSArICdkJztcbiAgfVxuICBpZiAobXNBYnMgPj0gaCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gaCkgKyAnaCc7XG4gIH1cbiAgaWYgKG1zQWJzID49IG0pIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG0pICsgJ20nO1xuICB9XG4gIGlmIChtc0FicyA+PSBzKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBzKSArICdzJztcbiAgfVxuICByZXR1cm4gbXMgKyAnbXMnO1xufVxuXG4vKipcbiAqIExvbmcgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10TG9uZyhtcykge1xuICB2YXIgbXNBYnMgPSBNYXRoLmFicyhtcyk7XG4gIGlmIChtc0FicyA+PSBkKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIGQsICdkYXknKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gaCkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBoLCAnaG91cicpO1xuICB9XG4gIGlmIChtc0FicyA+PSBtKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIG0sICdtaW51dGUnKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gcykge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBzLCAnc2Vjb25kJyk7XG4gIH1cbiAgcmV0dXJuIG1zICsgJyBtcyc7XG59XG5cbi8qKlxuICogUGx1cmFsaXphdGlvbiBoZWxwZXIuXG4gKi9cblxuZnVuY3Rpb24gcGx1cmFsKG1zLCBtc0FicywgbiwgbmFtZSkge1xuICB2YXIgaXNQbHVyYWwgPSBtc0FicyA+PSBuICogMS41O1xuICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG4pICsgJyAnICsgbmFtZSArIChpc1BsdXJhbCA/ICdzJyA6ICcnKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBAbmFtZSBUU1xyXG4gKiBAYXV0aG9yIEpvLmdlbFxyXG4gKiBAZGF0ZSAyMDE5LzgvMTkgMDAxOVxyXG4gKioqKioqKioqKioqKioqKioqKioqKiovXHJcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xyXG52YXIgdXJsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInVybFwiKSk7XHJcbnZhciBodHRwXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImh0dHBcIikpO1xyXG52YXIgaHR0cHNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiaHR0cHNcIikpO1xyXG52YXIgemxpYl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJ6bGliXCIpKTtcclxudmFyIGJ1aWxkVVJMXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2hlYWRlcnMvYnVpbGRVUkxcIikpO1xyXG52YXIgY3JlYXRlRXJyb3JfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vY29yZS9jcmVhdGVFcnJvclwiKSk7XHJcbnZhciBlbmhhbmNlRXJyb3JfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vY29yZS9lbmhhbmNlRXJyb3JcIikpO1xyXG52YXIgc2V0dGxlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2NvcmUvc2V0dGxlXCIpKTtcclxudmFyIGZvbGxvd19yZWRpcmVjdHNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZm9sbG93LXJlZGlyZWN0c1wiKSk7XHJcbnZhciBodHRwRm9sbG93ID0gZm9sbG93X3JlZGlyZWN0c18xLmRlZmF1bHQuaHR0cDtcclxudmFyIGh0dHBzRm9sbG93ID0gZm9sbG93X3JlZGlyZWN0c18xLmRlZmF1bHQuaHR0cHM7XHJcbnZhciBwa2cgPSByZXF1aXJlKCcuLi8uLi9wYWNrYWdlLmpzb24nKTtcclxudmFyIGlzSHR0cHMgPSAvaHR0cHM6Py87XHJcbmV4cG9ydHMuaHR0cEFkYXB0ZXIgPSBmdW5jdGlvbiBodHRwQWRhcHRlcihjb25maWcpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaEh0dHBSZXF1ZXN0KHJlc29sdmVQcm9taXNlLCByZWplY3RQcm9taXNlKSB7XHJcbiAgICAgICAgdmFyIHRpbWVyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHZhciByZXNvbHZlID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICAgICAgICAgIHJlc29sdmVQcm9taXNlKHZhbHVlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciByZWplY3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgICAgICAgICAgcmVqZWN0UHJvbWlzZSh2YWx1ZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgZGF0YSA9IGNvbmZpZy5kYXRhO1xyXG4gICAgICAgIHZhciBoZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XHJcbiAgICAgICAgLy8g6K6+572uIFVzZXItQWdlbnQg5p+Q5Lqb5pyN5Yqh6ZyA6KaBXHJcbiAgICAgICAgLy8g5Y+q5pyJ5Zyo6YWN572u5Lit5rKh5pyJ6K6+572u5aS05paH5Lu25pe25omN6K6+572u5aS05paH5Lu2XHJcbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9heGlvcy9heGlvcy9pc3N1ZXMvNjlcclxuICAgICAgICBpZiAoIWhlYWRlcnNbJ1VzZXItQWdlbnQnXSAmJiAhaGVhZGVyc1sndXNlci1hZ2VudCddKSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnNbJ1VzZXItQWdlbnQnXSA9ICdheGlvcy8nICsgcGtnLnZlcnNpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkYXRhICYmICF1dGlsc18xLmlzU3RyZWFtKGRhdGEpKSB7XHJcbiAgICAgICAgICAgIGlmIChCdWZmZXIuaXNCdWZmZXIoZGF0YSkpIHtcclxuICAgICAgICAgICAgICAgIC8vIOS7gOS5iOmDveayoeWBmlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHV0aWxzXzEuaXNBcnJheUJ1ZmZlcihkYXRhKSkge1xyXG4gICAgICAgICAgICAgICAgZGF0YSA9IEJ1ZmZlci5mcm9tKG5ldyBVaW50OEFycmF5KGRhdGEpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh1dGlsc18xLmlzU3RyaW5nKGRhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhID0gQnVmZmVyLmZyb20oZGF0YSwgJ3V0Zi04Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGNyZWF0ZUVycm9yXzEuZGVmYXVsdCgnRGF0YSBhZnRlciB0cmFuc2Zvcm1hdGlvbiBtdXN0IGJlIGEgc3RyaW5nLCBhbiBBcnJheUJ1ZmZlciwgYSBCdWZmZXIsIG9yIGEgU3RyZWFtJywgY29uZmlnKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8g5re75YqgQ29udGVudC1UeXBlIGhlYWRlciDlpoLmnpwgZGF0YSDlrZjlnKhcclxuICAgICAgICAgICAgaGVhZGVyc1snQ29udGVudC1MZW5ndGgnXSA9IGRhdGEubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXHJcbiAgICAgICAgdmFyIGF1dGggPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgLy8g5aaC5p6c6YWN572u5paH5Lu25byA5ZCv5o6I5p2DXHJcbiAgICAgICAgaWYgKGNvbmZpZy5hdXRoKSB7XHJcbiAgICAgICAgICAgIHZhciB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xyXG4gICAgICAgICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcclxuICAgICAgICAgICAgYXV0aCA9IHVzZXJuYW1lICsgJzonICsgcGFzc3dvcmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOino+aekFVSTFxyXG4gICAgICAgIHZhciBwYXJzZWQgPSB1cmxfMS5kZWZhdWx0LnBhcnNlKGNvbmZpZy51cmwpO1xyXG4gICAgICAgIHZhciBwcm90b2NvbCA9IHBhcnNlZC5wcm90b2NvbCB8fCAnaHR0cDonO1xyXG4gICAgICAgIGlmICghYXV0aCAmJiBwYXJzZWQuYXV0aCkge1xyXG4gICAgICAgICAgICB2YXIgdXJsQXV0aCA9IHBhcnNlZC5hdXRoLnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgICAgIHZhciB1cmxVc2VybmFtZSA9IHVybEF1dGhbMF0gfHwgJyc7XHJcbiAgICAgICAgICAgIHZhciB1cmxQYXNzd29yZCA9IHVybEF1dGhbMV0gfHwgJyc7XHJcbiAgICAgICAgICAgIGF1dGggPSB1cmxVc2VybmFtZSArICc6JyArIHVybFBhc3N3b3JkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlpoLmnpzlrZjlnKhhdXRo5YmH5Yiq6ZmkIO+8iOaZuumanOaQnOeLl+i8uOWFpeazle+8jOeCuuS7gOm6vOmAmeijoeaJk+WHuuS6hue5gemrlO+8n++8ie+8jOWIh+aPm+WIsFFR5bCN6Kmx5qGG5bCx6K6K5oiQ5LqG57Ch6auUXHJcbiAgICAgICAgaWYgKGF1dGgpXHJcbiAgICAgICAgICAgIGRlbGV0ZSBoZWFkZXJzLkF1dGhvcml6YXRpb247XHJcbiAgICAgICAgdmFyIGlzSHR0cHNSZXF1ZXN0ID0gaXNIdHRwcy50ZXN0KHByb3RvY29sKTtcclxuICAgICAgICB2YXIgYWdlbnQgPSBpc0h0dHBzUmVxdWVzdCA/IGNvbmZpZy5odHRwc0FnZW50IDogY29uZmlnLmh0dHBBZ2VudDtcclxuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgcGF0aDogYnVpbGRVUkxfMS5kZWZhdWx0KHBhcnNlZC5wYXRoLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplcikucmVwbGFjZSgvXlxcPy8sICcnKSxcclxuICAgICAgICAgICAgbWV0aG9kOiBjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXHJcbiAgICAgICAgICAgIGFnZW50OiBhZ2VudCxcclxuICAgICAgICAgICAgYXV0aDogYXV0aFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8g5aaC5p6c5pivc29ja2V0IOi3r+W+kVxyXG4gICAgICAgIGlmIChjb25maWcuc29ja2V0UGF0aClcclxuICAgICAgICAgICAgb3B0aW9ucy5zb2NrZXRQYXRoID0gY29uZmlnLnNvY2tldFBhdGg7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuaG9zdG5hbWUgPSBwYXJzZWQuaG9zdG5hbWU7XHJcbiAgICAgICAgICAgIG9wdGlvbnMucG9ydCA9IHBhcnNlZC5wb3J0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDkuI3lrZjlnKjku6PnkIZcclxuICAgICAgICB2YXIgcHJveHkgPSBjb25maWcucHJveHk7XHJcbiAgICAgICAgaWYgKCFwcm94eSAmJiBwcm94eSAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdmFyIHByb3h5RW52ID0gcHJvdG9jb2wuc2xpY2UoMCwgLTEpICsgJ19wcm94eSc7XHJcbiAgICAgICAgICAgIHZhciBwcm94eVVybCA9IHByb2Nlc3MuZW52W3Byb3h5RW52XSB8fCBwcm9jZXNzLmVudltwcm94eUVudi50b1VwcGVyQ2FzZSgpXTtcclxuICAgICAgICAgICAgLy8g5a2Y5Zyo5Luj55CGdXJsXHJcbiAgICAgICAgICAgIGlmIChwcm94eVVybCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhcnNlZFByb3h5VXJsID0gdXJsXzEuZGVmYXVsdC5wYXJzZShwcm94eVVybCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbm9Qcm94eUVudiA9IHByb2Nlc3MuZW52Lm5vX3Byb3h5IHx8IHByb2Nlc3MuZW52Lk5PX1BST1hZO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNob3VsZFByb3h5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIOayoeacieS7o+eQhueOr+Wig1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vUHJveHlFbnYpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbm9Qcm94eSA9IG5vUHJveHlFbnYuc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0udHJpbSgpOyB9KSB8fCAnJztcclxuICAgICAgICAgICAgICAgICAgICBzaG91bGRQcm94eSA9ICFub1Byb3h5LnNvbWUoZnVuY3Rpb24gcHJveHlNYXRjaChwcm94eUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwcm94eUVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm94eUVsZW1lbnQgPT09ICcqJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJveHlFbGVtZW50WzBdID09PSAnLicgJiYgcGFyc2VkLmhvc3RuYW1lLnN1YnN0cihwYXJzZWQuaG9zdG5hbWUubGVuZ3RoIC0gcHJveHlFbGVtZW50Lmxlbmd0aCkgPT09IHByb3h5RWxlbWVudCAmJiBwcm94eUVsZW1lbnQubWF0Y2goL1xcLi9nKS5sZW5ndGggPT09IHBhcnNlZC5ob3N0bmFtZS5tYXRjaCgvXFwuL2cpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlZC5ob3N0bmFtZSA9PT0gcHJveHlFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8g5bqU6K+l5Luj55CGXHJcbiAgICAgICAgICAgICAgICBpZiAoc2hvdWxkUHJveHkpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm94eSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9zdDogcGFyc2VkUHJveHlVcmwuaG9zdG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3Q6IHBhcnNlZFByb3h5VXJsLnBvcnRcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOWtmOWcqGF1dGhcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VkUHJveHlVcmwuYXV0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJveHlVcmxBdXRoID0gcGFyc2VkUHJveHlVcmwuYXV0aC5zcGxpdChcIjpcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5LmF1dGggPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogcHJveHlVcmxBdXRoWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHByb3h5VXJsQXV0aFsxXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5a2Y5Zyo5Luj55CGXHJcbiAgICAgICAgaWYgKHByb3h5KSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuaG9zdG5hbWUgPSBwcm94eS5ob3N0O1xyXG4gICAgICAgICAgICBvcHRpb25zLmhvc3QgPSBwcm94eS5ob3N0O1xyXG4gICAgICAgICAgICBvcHRpb25zLmhlYWRlcnMuaG9zdCA9IHBhcnNlZC5ob3N0bmFtZSArIChwYXJzZWQucG9ydCA/IFwiOlwiICsgcGFyc2VkLnBvc3QgOiBcIlwiKTtcclxuICAgICAgICAgICAgb3B0aW9ucy5wb3J0ID0gcHJveHkucG9ydDtcclxuICAgICAgICAgICAgb3B0aW9ucy5wYXRoID0gcHJvdG9jb2wgKyAnLy8nICsgcGFyc2VkLmhvc3RuYW1lICsgKHBhcnNlZC5wb3J0ID8gJzonICsgcGFyc2VkLnBvcnQgOiBcIlwiKSArIG9wdGlvbnMucGF0aDtcclxuICAgICAgICAgICAgLy8g5Z+656GA5Luj55CG5o6I5p2DXHJcbiAgICAgICAgICAgIGlmIChwcm94eS5hdXRoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYmFzZTY0ID0gQnVmZmVyLmZyb20ocHJveHkuYXV0aC51c2VybmFtZSArICc6JyArIHByb3h5LmF1dGgucGFzc3dvcmQsICd1dGY4JykudG9TdHJpbmcoJ2Jhc2U2NCcpO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5oZWFkZXJzWydQcm94eS1BdXRob3JpemF0aW9uJ10gPSAnQmFzaWMnICsgYmFzZTY0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB0cmFuc3BvcnQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdmFyIGlzSHR0cHNQcm94eSA9IGlzSHR0cHNSZXF1ZXN0ICYmIChwcm94eSA/IGlzSHR0cHMudGVzdChwcm94eS5wcm90b2NvbCkgOiB0cnVlKTtcclxuICAgICAgICBpZiAoY29uZmlnLnRyYW5zcG9ydCkge1xyXG4gICAgICAgICAgICB0cmFuc3BvcnQgPSBjb25maWcudHJhbnNwb3J0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjb25maWcubWF4UmVkaXJlY3RzID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRyYW5zcG9ydCA9IGlzSHR0cHNQcm94eSA/IGh0dHBzXzEuZGVmYXVsdCA6IGh0dHBfMS5kZWZhdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5tYXhSZWRpcmVjdHMpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMubWF4UmVkaXJlY3RzID0gY29uZmlnLm1heFJlZGlyZWN0cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cmFuc3BvcnQgPSBpc0h0dHBzUHJveHkgPyBodHRwc0ZvbGxvdyA6IGh0dHBGb2xsb3c7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb25maWcubWF4Q29udGVudExlbmd0aCAmJiBjb25maWcubWF4Q29udGVudExlbmd0aCA+IC0xKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMubWF4Qm9keUxlbmd0aCA9IGNvbmZpZy5tYXhDb250ZW50TGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDliJvlu7pyZXF1ZXN0XHJcbiAgICAgICAgLy8gcmVxdWVzdCzkuLrku4DkuYjov5nph4zlhaXlj4LkuIDkuKrlhbflkI3lh73mlbBcclxuICAgICAgICB2YXIgcmVxID0gdHJhbnNwb3J0LnJlcXVlc3Qob3B0aW9ucywgZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAvLyBidWcgdG9kbyDov5nph4zlupTor6XmnInkuIDkuKpjb25maWcg55qE77yB77yB77yBISFcclxuICAgICAgICAgICAgaWYgKHJlcS5hYm9ydGVkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAvLyDlpoLmnpzpnIDopoHvvIzpgI/mmI7lnLDop6PljovnvKnlk43lupTkuLvkvZNcclxuICAgICAgICAgICAgdmFyIHN0cmVhbSA9IHJlcztcclxuICAgICAgICAgICAgc3dpdGNoIChyZXMuaGVhZGVyc1snY29udGVudC1lbmNvZGluZyddKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdnemlwJzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2NvbXByZXNzJzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2RlZmxhdGUnOlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFkZCB0aGUgdW56aXBwZXIgdG8gdGhlIGJvZHkgc3RyZWFtIHByb2Nlc3NpbmcgcGlwZWxpbmVcclxuICAgICAgICAgICAgICAgICAgICBzdHJlYW0gPSAocmVzLnN0YXR1c0NvZGUgPT09IDIwNCkgPyBzdHJlYW0gOiBzdHJlYW0ucGlwZSh6bGliXzEuZGVmYXVsdC5jcmVhdGVVbnppcCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIGNvbnRlbnQtZW5jb2RpbmcgaW4gb3JkZXIgdG8gbm90IGNvbmZ1c2UgZG93bnN0cmVhbSBvcGVyYXRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHJlcy5oZWFkZXJzWydjb250ZW50LWVuY29kaW5nJ107XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8g5aaC5p6c6YeN5a6a5ZCR77yM6L+U5Zue5pyA5ZCO5LiA5Liq6K+35rGCXHJcbiAgICAgICAgICAgIHZhciBsYXN0UmVxdWVzdCA9IHJlcy5yZXEgfHwgcmVxO1xyXG4gICAgICAgICAgICAvL+S9v+eUqGludGVyZmFjZVxyXG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHJlcy5zdGF0dXNDb2RlLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzVGV4dDogcmVzLnN0YXR1c01lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiByZXMuaGVhZGVycyxcclxuICAgICAgICAgICAgICAgIGNvbmZpZzogY29uZmlnLFxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdDogbGFzdFJlcXVlc3RcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUgPT09ICdzdHJlYW0nKSB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhID0gc3RyZWFtO1xyXG4gICAgICAgICAgICAgICAgc2V0dGxlXzEuZGVmYXVsdChyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXNwb25zZUJ1ZmZlcl8xID0gW107XHJcbiAgICAgICAgICAgICAgICAvLyBjaHVua+eahOexu+Wei+aYryBVaW50OEFycmF5XHJcbiAgICAgICAgICAgICAgICBzdHJlYW0ub24oJ2RhdGEnLCBmdW5jdGlvbiAoY2h1bmspIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZUJ1ZmZlcl8xLnB1c2goY2h1bmspO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB0aGUgY29udGVudCBsZW5ndGggaXMgbm90IG92ZXIgdGhlIG1heENvbnRlbnRMZW5ndGggaWYgc3BlY2lmaWVkXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5tYXhDb250ZW50TGVuZ3RoID4gLTEgJiYgQnVmZmVyLmNvbmNhdChyZXNwb25zZUJ1ZmZlcl8xKS5sZW5ndGggPiBjb25maWcubWF4Q29udGVudExlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJlYW0uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoY3JlYXRlRXJyb3JfMS5kZWZhdWx0KCdtYXhDb250ZW50TGVuZ3RoIHNpemUgb2YgJyArIGNvbmZpZy5tYXhDb250ZW50TGVuZ3RoICsgJyBleGNlZWRlZCcsIGNvbmZpZywgbnVsbCwgbGFzdFJlcXVlc3QpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHN0cmVhbS5vbignZXJyb3InLCBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcS5hYm9ydGVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVuaGFuY2VFcnJvcl8xLmRlZmF1bHQoZXJyLCBjb25maWcsIG51bGwsIGxhc3RSZXF1ZXN0KSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHN0cmVhbS5vbignZW5kJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXNwb25zZURhdGEgPSBCdWZmZXIuY29uY2F0KHJlc3BvbnNlQnVmZmVyXzEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnYXJyYXlidWZmZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlRGF0YSA9IHJlc3BvbnNlRGF0YS50b1N0cmluZyhjb25maWcucmVzcG9uc2VFbmNvZGluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEgPSByZXNwb25zZURhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGxlXzEuZGVmYXVsdChyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8g5aSE55CG6ZSZ6K+vXHJcbiAgICAgICAgcmVxLm9uKCdlcnJvcicsIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgaWYgKHJlcS5hYm9ydGVkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICByZWplY3QoZW5oYW5jZUVycm9yXzEuZGVmYXVsdChlcnIsIGNvbmZpZywgbnVsbCwgcmVxKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8g5aSE55CG6K+35rGC6LaF5pe2XHJcbiAgICAgICAgaWYgKGNvbmZpZy50aW1lb3V0KSB7XHJcbiAgICAgICAgICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXEuYWJvcnRlZCgpOyAvL+e7iOatolxyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yXzEuZGVmYXVsdCgndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnLCByZXEpKTtcclxuICAgICAgICAgICAgfSwgY29uZmlnLnRpbWVvdXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlj5bmtoh0b2tlbiAsdGVzdOWmguaenOeUqOaIt+mFjee9ruS6hui/memHjO+8jOS8vOS5juWcqOS9v+eUqHNldFRpbWVJbnRlcnZhbCDlh7rnjrDlhoXlrZjov4fovb3nmoTpl67popjvvIzku6XliY3lnKjlvIDlj5Hml7blgJnpgYfliLBcclxuICAgICAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi5wcm9taXNlLnRoZW4oZnVuY3Rpb24gKGNhbmNlbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcS5hYm9ydGVkKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIHJlcS5hYm9ydCgpO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGNhbmNlbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlj5HpgIHor7fmsYJcclxuICAgICAgICBpZiAodXRpbHNfMS5pc1N0cmVhbShkYXRhKSkge1xyXG4gICAgICAgICAgICBkYXRhLm9uKCdlcnJvcicsIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlbmhhbmNlRXJyb3JfMS5kZWZhdWx0KGVyciwgY29uZmlnLCBudWxsLCByZXEpKTtcclxuICAgICAgICAgICAgfSkucGlwZShyZXEpOyAvLyDnnIvnnIvov5nkuKpzdHJlYW0g55qEcGlwZeeUqOazlVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJlcS5lbmQoZGF0YSk7XHJcbiAgICB9KTtcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIEBuYW1lIFRTXHJcbiAqIEBhdXRob3IgSm8uZ2VsXHJcbiAqIEBkYXRlIDIwMTkvOC8xOSAwMDE5XHJcbiAqKioqKioqKioqKioqKioqKioqKioqKi9cclxudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XHJcbnZhciBzZXR0bGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vY29yZS9zZXR0bGVcIikpO1xyXG52YXIgYnVpbGRVUkxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vaGVhZGVycy9idWlsZFVSTFwiKSk7XHJcbnZhciBwYXJzZUhlYWRlcnNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vaGVhZGVycy9wYXJzZUhlYWRlcnNcIikpO1xyXG52YXIgaXNVUkxTYW1lT3JpZ2luXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2hlYWRlcnMvaXNVUkxTYW1lT3JpZ2luXCIpKTtcclxudmFyIGNyZWF0ZUVycm9yXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2NvcmUvY3JlYXRlRXJyb3JcIikpO1xyXG5leHBvcnRzLnhockFkYXB0ZXIgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKGNvbmZpZykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICB2YXIgcmVxdWVzdERhdGEgPSBjb25maWcuZGF0YTtcclxuICAgICAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSBjb25maWcuaGVhZGVycztcclxuICAgICAgICBpZiAodXRpbHNfMS5pc0Zvcm1EYXRhKHJlcXVlc3REYXRhKSkge1xyXG4gICAgICAgICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyDorqnmtY/op4jlmajmnaXorr7nva7lroNcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAvLyBIVFRQIGJhc2ljIOaOiOadg1xyXG4gICAgICAgIGlmIChjb25maWcuYXV0aCkge1xyXG4gICAgICAgICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcclxuICAgICAgICAgICAgdmFyIHBhc3N3b3JkID0gY29uZmlnLmF1dGgucGFzc3dvcmQgfHwgJyc7XHJcbiAgICAgICAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTsgLy9idG9hPz9cclxuICAgICAgICB9XHJcbiAgICAgICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkxfMS5kZWZhdWx0KGNvbmZpZy51cmwsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKSwgdHJ1ZSk7XHJcbiAgICAgICAgLy8g6K6+572u6K+35rGC6LaF5pe25q+r56eSXHJcbiAgICAgICAgcmVxdWVzdC50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XHJcbiAgICAgICAgLy8g55uR5ZCscmVhZHkg54q25oCBXHJcbiAgICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghcmVxdWVzdCB8fCByZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIC8vIFRoZSByZXF1ZXN0IG9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxyXG4gICAgICAgICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxyXG4gICAgICAgICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xyXG4gICAgICAgICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XHJcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAvLyDlh4blpIflk43lupRcclxuICAgICAgICAgICAgdmFyIHJlc3BvbnNlSGVhZGVycyA9ICdnZXRBTExSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgPyBwYXJzZUhlYWRlcnNfMS5kZWZhdWx0KHJlcXVlc3QuZ2V0QUxMUmVzcG9uc2VIZWFkZXJzKCkpIDogbnVsbDsgLy8gcGFyc2VIZWFkZXJcclxuICAgICAgICAgICAgdmFyIHJlc3BvbnNlRGF0YSA9ICFjb25maWcucmVzcG9uc2VUeXBlIHx8IGNvbmZpZy5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JyA/IHJlcXVlc3QucmVzcG9uc2VUeXBlIDogcmVxdWVzdC5yZXNwb25zZTsgLy8/P+i/mXJlcXVlc3Qg5Li65ZWl6L+Y5pyJ5LiA5LiqcmVzcG9uc2VcclxuICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0ge1xyXG4gICAgICAgICAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyxcclxuICAgICAgICAgICAgICAgIHN0YXR1c1RleHQ6IHJlcXVlc3Quc3RhdHVzVGV4dCxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcclxuICAgICAgICAgICAgICAgIGNvbmZpZzogY29uZmlnLFxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdDogcmVxdWVzdFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBzZXR0bGVfMS5kZWZhdWx0KHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAvLyDmuIXnkIbor7fmsYJcclxuICAgICAgICAgICAgcmVxdWVzdCA9IG51bGw7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyDlpITnkIbmtY/op4jlmajor7fmsYLlj5bmtojvvIjkuI7miYvliqjlj5bmtojnm7jlj43vvIlcclxuICAgICAgICByZXF1ZXN0Lm9uYWJvcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghcmVxdWVzdClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yXzEuZGVmYXVsdCgnUmVxdWVzdCBhYm9ydGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJywgcmVxdWVzdCkpO1xyXG4gICAgICAgICAgICAvLyDmuIXnkIboq4vmsYJcclxuICAgICAgICAgICAgcmVxdWVzdCA9IG51bGw7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyDlpITnkIbkvY7nuqfnvZHnu5zplJnor69cclxuICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIOecn+ato+eahOmUmeivr+iiq+a1j+iniOWZqOmakOiXj+i1t+adpVxyXG4gICAgICAgICAgICAvLyBPbkVycm9y5Y+q5bqU5Zyo572R57uc6ZSZ6K+v5pe26Kem5Y+R44CCXHJcbiAgICAgICAgICAgIHJlamVjdChjcmVhdGVFcnJvcl8xLmRlZmF1bHQoJ05ldHdvcmsgRXJyb3InLCBjb25maWcsIG51bGwsIHJlcXVlc3QpKTtcclxuICAgICAgICAgICAgLy8g5riF55CG6KuL5rGCXHJcbiAgICAgICAgICAgIHJlcXVlc3QgPSBudWxsO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8g5aSE55CG6LaF5pe2XHJcbiAgICAgICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJlamVjdChjcmVhdGVFcnJvcl8xLmRlZmF1bHQoJ3RpbWVvdXQgb2YgJyArIGNvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJywgcmVxdWVzdCkpO1xyXG4gICAgICAgICAgICAvLyDmuIXnkIboq4vmsYJcclxuICAgICAgICAgICAgcmVxdWVzdCA9IG51bGw7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyDmt7vliqAgWFNSRiBoZWFkZXJcclxuICAgICAgICAvLyDlj6rmnInlnKjmoIflh4bmtY/op4jlmajnjq/looPkuK3ov5DooYzml7bvvIzmiY3og73miafooYzmraTmk43kvZzjgIJcclxuICAgICAgICAvLyDlsKTlhbbmmK/lpoLmnpzmiJHku6zmmK/kuIDkuKp3ZWIgd29ya2Vy77yM5oiW6ICF5pivcmVhY3QtbmF0aXZlXHJcbiAgICAgICAgaWYgKHV0aWxzXzEuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSkge1xyXG4gICAgICAgICAgICB2YXIgY29va2llcyA9IHJlcXVpcmUoJy4uL2hlYWRlcnMvY29va2llcycpOyAvLyB0ZXN05aaC5L2V6K6p5a6D5pS55oiQ5Li6aW1wb3J077yf6L+Z5LiqbW9kdWxl5piv5LiA5Liq56uL5Y2z5omn6KGM5Ye95pWwXHJcbiAgICAgICAgICAgIC8vIGFkZCB4c3JmIGhlYWRlclxyXG4gICAgICAgICAgICB2YXIgeHNyZlZhbHVlID0gKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgfHwgaXNVUkxTYW1lT3JpZ2luXzEuZGVmYXVsdChjb25maWcudXJsKSAmJiBjb25maWcueHNyZkNvb2tpZU5hbWUgPyBjb29raWVzLnJlYWQoY29uZmlnLnhzcmZDb29raWVOYW1lKSA6IHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgIGlmICh4c3JmVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5re75YqgaGVhZGVycyDliLAgcmVxdWVzdFxyXG4gICAgICAgIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4gcmVxdWVzdCkge1xyXG4gICAgICAgICAgICB1dGlsc18xLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdERhdGEgPT09ICd1bmRlZmluZWQnICYmIGtleS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWmguaenGRhdGEg5pivdW5kZWZpbmVk77yM5YiZ56e76ZmkIENvbnRlbnQtVHlwZVxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5ZCm5YiZ5bCGaGVhZGVyIOa3u+WKoOWIsHJlcXVlc3RcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5aaC5p6c6ZyA6KaB77yM5re75Yqg5bim5Yet5o2u55qE6K+35rGCXHJcbiAgICAgICAgaWYgKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMpIHtcclxuICAgICAgICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlpoLmnpzpnIDopoHvvIzlkJHor7fmsYLmt7vliqByZXNwb25zZVR5cGVcclxuICAgICAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDmtY/op4jlmajlvJXlj5HnmoTpooTmnJ9kb21FeGNlcHRpb27kuI54bWxodHRwUmVxdWVzdOe6p+WIqzLkuI3lhbzlrrnjgIJcclxuICAgICAgICAgICAgICAgIC8vIOS9huaYr++8jOWvueS6juKAnGpzb27igJ3nsbvlnovvvIzov5nlj6/ku6XooqvnpoHmraLvvIzlm6DkuLrlroPlj6/ku6XnlLHpu5jorqTnmoTigJx0cmFuc2Zvcm1SZXNwb25zZeKAneWHveaVsOino+aekOOAglxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUgIT09ICdqc29uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5b+F6KaB5pe25aSE55CG6L+b5bqmXHJcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcub25Eb3dubG9hZFByb2Nlc3MgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9jZXNzJywgY29uZmlnLm9uRG93bmxvYWRQcm9jZXNzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5bm26Z2e5omA5pyJ5rWP6KeI5Zmo6YO95pSv5oyBdXBsb2Fk5LqL5Lu2XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xyXG4gICAgICAgICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gYnVnIOi2heaXtjQ45Liq5bCP5pe277yM5piv5ZCm5Lya5a+86Ie05YaF5a2Y5rOE5ryPXHJcbiAgICAgICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xyXG4gICAgICAgICAgICAvLyDlpITnkIbms6jplIBcclxuICAgICAgICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXF1ZXN0KVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdChjYW5jZWwpO1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdCA9IG51bGw7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVxdWVzdERhdGEgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmVxdWVzdERhdGEgPSBudWxsO1xyXG4gICAgICAgIC8vIOWPkemAgXJlcXVlc3RcclxuICAgICAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xyXG4gICAgfSk7XHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG4vKipcclxuICogQGRlc2MgQXhpb3Mg5YWl5Y+j5paH5Lu2XHJcbiAqL1xyXG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgQXhpb3NfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb3JlL0F4aW9zXCIpKTtcclxudmFyIGRlZmF1bHRzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vZGVmYXVsdHNcIikpO1xyXG4vKipcclxuICogQGRlc2Mg5Yib5bu6QXhpb3Mg5a6e5L6LXHJcbiAqXHJcbiAqL1xyXG52YXIgY3JlYXRlSW5zdGFuY2UgPSBmdW5jdGlvbiAoZGVmYXVsdENvbmZpZykge1xyXG4gICAgcmV0dXJuIG5ldyBBeGlvc18xLmRlZmF1bHQoZGVmYXVsdENvbmZpZyk7XHJcbn07XHJcbi8vIOWIm+W7uuimgeWvvOWHuueahOm7mOiupOWunuS+i1xyXG4vLyBjb25zdCBheGlvczogYW55ID0gbmV3IEF4aW9zKGRlZmF1bHRzKTtcclxudmFyIGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHNfMS5kZWZhdWx0KTtcclxuLy8g5pq06Zyy57G7QXhpb3NcclxuYXhpb3MuQXhpb3MgPSBBeGlvc18xLmRlZmF1bHQ7XHJcbi8vIOeUqOS6juWIm+W7uuaWsOWunuS+i+eahOW3peWOguaooeW8j+WHveaVsFxyXG5heGlvcy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcclxuICAgIHJldHVybiBuZXcgQXhpb3NfMS5kZWZhdWx0KF9fYXNzaWduKHt9LCBheGlvcy5kZWZhdWx0cywgaW5zdGFuY2VDb25maWcgfHwge30pKTtcclxufTtcclxuLy8g5pq06ZyyIGF4aW9zIOeahENhbmNlbCAmIENhbmNlbFRva2VuXHJcbmF4aW9zLkNhbmNlbCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gX19pbXBvcnRTdGFyKHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbCcpKTsgfSk7IH07XHJcbmF4aW9zLkNhbmNlbFRva2VuID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBfX2ltcG9ydFN0YXIocmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsVG9rZW4nKSk7IH0pOyB9O1xyXG5heGlvcy5pc0NhbmNlbCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gX19pbXBvcnRTdGFyKHJlcXVpcmUoJy4vY2FuY2VsL2lzQ2FuY2VsJykpOyB9KTsgfTtcclxuLy8g5pq06ZyyIGFsbC9zcHJlYWQg5bmy5Zib55qE77yfXHJcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIChwcm9taXNlcykge1xyXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcclxufTtcclxuYXhpb3Muc3ByZWFkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBfX2ltcG9ydFN0YXIocmVxdWlyZSgnLi9oZWFkZXJzL3NwcmVhZCcpKTsgfSk7IH07XHJcbnZhciB4ID0gYXhpb3MuY3JlYXRlKHt9KTtcclxueC5nZXQoJ2h0dHA6Ly8xMjcuMC4wLjE6ODA4MCcpXHJcbiAgICAudGhlbihmdW5jdGlvbiAoeCkge1xyXG4gICAgY29uc29sZS5pbmZvKFwicmVzOlwiLCB4KTtcclxufSlcclxuICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmluZm8oXCJlcnItMTE6XCIsIGVycik7XHJcbn0pO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBheGlvcztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbi8qKlxyXG4gKiBAZGVzYyBgQ2FuY2VsYCDlvJXlj5HnmoTlj5bmtojlr7nosaFcclxuICogQGNsYXNzXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXHJcbiAqL1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBDYW5jZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDYW5jZWwobWVzc2FnZSkge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgICAgICAgdGhpcy5fX0NBTkNFTF9fID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIENhbmNlbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICdDYW5jZWwgJyArICh0aGlzLm1lc3NhZ2UgPyAnOicgKyB0aGlzLm1lc3NhZ2UgOiBcIlwiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQ2FuY2VsO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBDYW5jZWw7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBDYW5jZWxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9DYW5jZWxcIikpO1xyXG4vKipcclxuICogQGRlc2MgYENhbmNlbFRva2VuYOaYr+WPr+eUqOS6juivt+axguWPlua2iOaTjeS9nOeahOWvueixoeOAglxyXG4gKiBAY2xhc3NcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXhlY3V0b3Ig5omn6KGM5Zmo5Ye95pWwXHJcbiAqL1xyXG52YXIgQ2FuY2VsVG9rZW4gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDYW5jZWxUb2tlbihleGVjdXRvcikge1xyXG4gICAgICAgIHZhciByZXNvbHZlUHJvbWlzZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xyXG4gICAgICAgICAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcztcclxuICAgICAgICBleGVjdXRvcihmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgICAgICAgICAvLyDlt7Lor7fmsYLlj5bmtohcclxuICAgICAgICAgICAgaWYgKHRva2VuLnJlYXNvbilcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgdG9rZW4ucmVhc29uID0gbmV3IENhbmNlbF8xLmRlZmF1bHQobWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQ2FuY2VsVG9rZW47XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IENhbmNlbFRva2VuO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuLyoqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIEBhdXRob3IgSm8uZ2VsXHJcbiAqIEBkYXRlIDIwMTkvOC8yMCAwMDIwXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKi9cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5mdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl9fQ0FOQ0VMX18pO1xyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IGlzQ2FuY2VsO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuLyoqXHJcbiAqIEBkZXNjIEF4aW9zIGNvcmUgY29kZVxyXG4gKiAqL1xyXG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIEludGVyY2VwdG9yTWFuYWdlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0ludGVyY2VwdG9yTWFuYWdlclwiKSk7XHJcbnZhciBtZXJnZUNvbmZpZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21lcmdlQ29uZmlnXCIpKTtcclxudmFyIGJ1aWxkVVJMXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2hlYWRlcnMvYnVpbGRVUkxcIikpO1xyXG52YXIgZGlzcGF0Y2hSZXF1ZXN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vZGlzcGF0Y2hSZXF1ZXN0XCIpKTtcclxudmFyIHBrZyA9IHJlcXVpcmUoJy4uLy4uL3BhY2thZ2UuanNvbicpO1xyXG4vKipcclxuICogQGRlc2Mg5Yib5bu65LiA5LiqQXhpb3PmlrDlrp7kvoss5LulZXM2IGNsYXNzIOaWueW8j+WjsOaYjlxyXG4gKlxyXG4gKiAqL1xyXG52YXIgQXhpb3MgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBBeGlvcyhpbnN0YW5jZUNvbmZpZykge1xyXG4gICAgICAgIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcclxuICAgICAgICB0aGlzLmludGVyY2VwdG9ycyA9IHtcclxuICAgICAgICAgICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcl8xLmRlZmF1bHQoKSxcclxuICAgICAgICAgICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXJfMS5kZWZhdWx0KClcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEF4aW9zLnByb3RvdHlwZSwgXCJ2ZXJzaW9uXCIsIHtcclxuICAgICAgICAvLyDkv53miqRheGlvcyB2ZXJzaW9uXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwa2cudmVyc2lvbiB8fCAnJztcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOWmguaenOWwneivleWOu+iuvue9ru+8jOWImeaKm+WHuumUmeivr1xyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBcIkNhbid0IHNldHRpbmcgdGhlIEF4aW9zIHZlcnNpb25cIjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gKGNvbmZpZykge1xyXG4gICAgICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgICAgICBjb25maWcgPSBtZXJnZUNvbmZpZ18xLmRlZmF1bHQodGhpcy5kZWZhdWx0cywgY29uZmlnKTtcclxuICAgICAgICBjb25maWcubWV0aG9kID0gY29uZmlnLm1ldGhvZCA/IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKSA6ICdnZXQnOyAvL+m7mOiupGdldCzlubbovazmjaLlsI/lhpltZXRob2TlrZfmrrVcclxuICAgICAgICAvLyDov57mjqXmi6bmiKrlmajkuK3pl7Tku7ZcclxuICAgICAgICB2YXIgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0XzEuZGVmYXVsdCwgdW5kZWZpbmVkXTtcclxuICAgICAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xyXG4gICAgICAgIC8vIOWQkeesrOS4gOmhuea3u+WKoFxyXG4gICAgICAgIHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QuZm9yRWFjaChmdW5jdGlvbiB1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xyXG4gICAgICAgICAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIOWQkeWQjumdoua3u+WKoFxyXG4gICAgICAgIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XHJcbiAgICAgICAgICAgIGNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgd2hpbGUgKGNoYWluLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICBBeGlvcy5wcm90b3R5cGUuZ2V0VXJpID0gZnVuY3Rpb24gKGNvbmZpZykge1xyXG4gICAgICAgIGNvbmZpZyA9IG1lcmdlQ29uZmlnXzEuZGVmYXVsdCh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xyXG4gICAgICAgIHJldHVybiBidWlsZFVSTF8xLmRlZmF1bHQoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLnJlcGxhY2UoL15cXD8vLCAnJyk7XHJcbiAgICB9O1xyXG4gICAgQXhpb3MucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uICh1cmwsIGNvbmZpZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QoX19hc3NpZ24oe30sIGNvbmZpZywgeyBtZXRob2Q6ICdkZWxldGUnLCB1cmw6IHVybCB9KSk7XHJcbiAgICB9O1xyXG4gICAgQXhpb3MucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICh1cmwsIGNvbmZpZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QoX19hc3NpZ24oe30sIGNvbmZpZywgeyBtZXRob2Q6ICdnZXQnLCB1cmw6IHVybCB9KSk7XHJcbiAgICB9O1xyXG4gICAgQXhpb3MucHJvdG90eXBlLmhlYWQgPSBmdW5jdGlvbiAodXJsLCBjb25maWcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KF9fYXNzaWduKHt9LCBjb25maWcsIHsgbWV0aG9kOiAnaGVhZCcsIHVybDogdXJsIH0pKTtcclxuICAgIH07XHJcbiAgICBBeGlvcy5wcm90b3R5cGUub3B0aW9ucyA9IGZ1bmN0aW9uICh1cmwsIGNvbmZpZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QoX19hc3NpZ24oe30sIGNvbmZpZywgeyBtZXRob2Q6ICdvcHRpb25zJywgdXJsOiB1cmwgfSkpO1xyXG4gICAgfTtcclxuICAgIEF4aW9zLnByb3RvdHlwZS5wb3N0ID0gZnVuY3Rpb24gKHVybCwgZGF0YSwgY29uZmlnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChfX2Fzc2lnbih7fSwgY29uZmlnLCB7IG1ldGhvZDogJ3Bvc3QnLCB1cmw6IHVybCwgZGF0YTogZGF0YSB9KSk7XHJcbiAgICB9O1xyXG4gICAgQXhpb3MucHJvdG90eXBlLnB1dCA9IGZ1bmN0aW9uICh1cmwsIGRhdGEsIGNvbmZpZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QoX19hc3NpZ24oe30sIGNvbmZpZywgeyBtZXRob2Q6ICdwdXQnLCB1cmw6IHVybCwgZGF0YTogZGF0YSB9KSk7XHJcbiAgICB9O1xyXG4gICAgQXhpb3MucHJvdG90eXBlLnBhdGNoID0gZnVuY3Rpb24gKHVybCwgZGF0YSwgY29uZmlnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChfX2Fzc2lnbih7fSwgY29uZmlnLCB7IG1ldGhvZDogJ3BhdGNoJywgdXJsOiB1cmwsIGRhdGE6IGRhdGEgfSkpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBBeGlvcztcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gQXhpb3M7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBAZGVzYyAg5oum5oiq5Zmo566h55CG5ZmoXHJcbiAqIEBhdXRob3IgSm8uZ2VsXHJcbiAqIEBkYXRlIDIwMTkvOC8yMCAwMDIwXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKi9cclxudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XHJcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBJbnRlcmNlcHRvck1hbmFnZXIoKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlcnMgPSBbXTtcclxuICAgIH1cclxuICAgIEludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZXJzLnB1c2goe1xyXG4gICAgICAgICAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcclxuICAgICAgICAgICAgcmVqZWN0ZWQ6IHJlamVjdGVkXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjIOS7juWghuagiOS4reWIoOmZpOaLpuaIquWZqFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGlkIOeUsWDov5Tlm57nmoRJROS9v+eUqGBcclxuICAgICAqICovXHJcbiAgICBJbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKVxyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDov63ku6PmiYDmnInms6jlhoznmoTmi6bmiKrlmahcclxuICAgICAqIOi/meenjeaWueazleWvueS6jui3s+i/h1xyXG4gICAgICog5Y+v6IO95bey5oiQ5Li6YG51bGxg55qE5oum5oiq5Zmo6LCD55SoYGVqZWN0YOOAglxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm4g6LCD55So5q+P5Liq5oum5oiq5Zmo55qE5Ye95pWwXHJcbiAgICAgKiAqL1xyXG4gICAgSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGZuKSB7XHJcbiAgICAgICAgdXRpbHNfMS5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcclxuICAgICAgICAgICAgaWYgKGggIT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICBmbihoKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gSW50ZXJjZXB0b3JNYW5hZ2VyO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBJbnRlcmNlcHRvck1hbmFnZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG4vKioqKioqKioqKioqKioqKioqKioqKipcclxuICogQGF1dGhvciBKby5nZWxcclxuICogQGRhdGUgMjAxOS84LzE5IDAwMTlcclxuICoqKioqKioqKioqKioqKioqKioqKioqL1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBlbmhhbmNlRXJyb3JfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9lbmhhbmNlRXJyb3JcIikpO1xyXG4vKipcclxuICogQGRlc2Mg5L2/55So5oyH5a6a55qE5raI5oGv44CB6YWN572u44CB6ZSZ6K+v5Luj56CB44CB6K+35rGC5ZKM5ZON5bqU5Yib5bu66ZSZ6K+v5Ye95pWwXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWdcclxuICogQHBhcmFtIHtzdHJpbmd9IGNvZGVcclxuICogQHBhcmFtIHtvYmplY3R9IHJlcXVlc3RcclxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlXHJcbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXHJcbiAqICovXHJcbmZ1bmN0aW9uIGNyZWF0ZUVycm9yKG1lc3NhZ2UsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcclxuICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcclxuICAgIHJldHVybiBlbmhhbmNlRXJyb3JfMS5kZWZhdWx0KGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKTtcclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVFcnJvcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgdHJhbnNmb3JtRGF0YV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3RyYW5zZm9ybURhdGFcIikpO1xyXG52YXIgaXNDYW5jZWxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vY2FuY2VsL2lzQ2FuY2VsXCIpKTtcclxudmFyIGlzQWJzb2x1dGVVUkxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vaGVhZGVycy9pc0Fic29sdXRlVVJMXCIpKTtcclxudmFyIGNvbWJpbmVVUkxzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2hlYWRlcnMvY29tYmluZVVSTHNcIikpO1xyXG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcclxudmFyIGRlZmF1bHRzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2RlZmF1bHRzXCIpKTtcclxuLyoqXHJcbiAqIEBkZXNjIHRocm93cyDlpoLmnpzor7fmsYJjYW5jZWzvvIzliJnmipvlh7rkuIDkuKpjYW5jZWxcclxuICogKi9cclxuZnVuY3Rpb24gdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpIHtcclxuICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcclxuICAgICAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBAZGVzYyDkvb/nlKjphY3nva7nmoTpgILphY3lmajlsIbor7fmsYLliIbmtL7liLDmnI3liqHlmajjgIJcclxuICogKi9cclxuZnVuY3Rpb24gZGlzcGF0Y2hSZXF1ZXN0KGNvbmZpZykge1xyXG4gICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xyXG4gICAgLy8g5pSv5oyBYmFzZVVSTCBjb25maWdcclxuICAgIGlmIChjb25maWcuYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTF8xLmRlZmF1bHQoY29uZmlnLnVybCkpIHtcclxuICAgICAgICBjb25maWcudXJsID0gY29tYmluZVVSTHNfMS5kZWZhdWx0KGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcclxuICAgIH1cclxuICAgIC8vIOehruS/nWhlYWRlcnMg5a2Y5ZyoXHJcbiAgICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xyXG4gICAgLy8g6L2s5o2icmVxdWVzdCBkYXRhXHJcbiAgICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGFfMS5kZWZhdWx0KGNvbmZpZy5kYXRhLCBjb25maWcuaGVhZGVycywgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3QpO1xyXG4gICAgLy8g5omB5bmz5YyWaGVhZGVyc1xyXG4gICAgY29uZmlnLmhlYWRlcnMgPSBfX2Fzc2lnbih7fSwgY29uZmlnLmhlYWRlcnMuY29ubW9uIHx8IHt9LCBjb25maWcuaGVhZGVyc1tjb25maWcubWV0aG9kXSB8fCB7fSwgY29uZmlnLmhlYWRlcnMgfHwge30pO1xyXG4gICAgLy8g5ZCO5pyf5oq956a7bWV0aG9k5L2c5Li65YWs5YWx5Y+Y6YePXHJcbiAgICB1dGlsc18xLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLCBmdW5jdGlvbiAobWV0aG9kKSB7XHJcbiAgICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XHJcbiAgICB9KTtcclxuICAgIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHNfMS5kZWZhdWx0LmFkYXB0ZXI7XHJcbiAgICByZXR1cm4gYWRhcHRlcihjb25maWcpXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xyXG4gICAgICAgIC8vIOi9rOaNonJlc3BvbnNlIERhdGFcclxuICAgICAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YV8xLmRlZmF1bHQocmVzcG9uc2UuZGF0YSwgcmVzcG9uc2UuaGVhZGVycywgY29uZmlnLnRyYW5zZnJvbVJlc3BvbnNlKTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9KVxyXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVhc29uKSB7XHJcbiAgICAgICAgaWYgKCFpc0NhbmNlbF8xLmRlZmF1bHQocmVhc29uKSkge1xyXG4gICAgICAgICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XHJcbiAgICAgICAgICAgIC8vIOi9rOaNonJlc3BvbnNlIGRhdGFcclxuICAgICAgICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24ucmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YV8xLmRlZmF1bHQocmVhc29uLnJlc3BvbnNlLmRhdGEsIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzLCBjb25maWcudHJhbnNmcm9tUmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gZGlzcGF0Y2hSZXF1ZXN0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKioqKioqKioqKioqKioqKioqKioqKipcclxuICogQGRlc2Mg6ZSZ6K+v5aKe5by6566h55CGXHJcbiAqIEBhdXRob3IgSm8uZ2VsXHJcbiAqIEBkYXRlIDIwMTkvOC8xOSAwMDE5XHJcbiAqKioqKioqKioqKioqKioqKioqKioqKi9cclxuZnVuY3Rpb24gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XHJcbiAgICBlcnJvci5jb25maWcgPSBjb25maWc7XHJcbiAgICBpZiAoY29kZSlcclxuICAgICAgICBlcnJvci5jb2RlID0gY29kZTtcclxuICAgIGVycm9yLnJlcXVlc3QgPSByZXF1ZXN0O1xyXG4gICAgZXJyb3IucmVzcG9uZSA9IHJlc3BvbnNlO1xyXG4gICAgZXJyb3IuaXNBeGlvcnNFcnJvciA9IHRydWU7XHJcbiAgICBlcnJvci50b0pTT04gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLy8g5qCH5YeGXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICAvLyBNaWNyb3NvZnRcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIG51bWJlcjogdGhpcy5udW1iZXIsXHJcbiAgICAgICAgICAgIC8vIE1vemlsbGFcclxuICAgICAgICAgICAgZmlsZW5hbWU6IHRoaXMuZmlsZW5hbWUsXHJcbiAgICAgICAgICAgIGxpbmVOdW1iZXI6IHRoaXMubGluZU51bWJlcixcclxuICAgICAgICAgICAgY29sdW1uTnVtYmVyOiB0aGlzLmNvbHVtbk51bWJlcixcclxuICAgICAgICAgICAgc3RhY2s6IHRoaXMuc3RhY2ssXHJcbiAgICAgICAgICAgIC8vIEF4aW9zXHJcbiAgICAgICAgICAgIGNvbmZpZzogdGhpcy5jb25maWcsXHJcbiAgICAgICAgICAgIGNvZGU6IHRoaXMuY29kZVxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGVycm9yO1xyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IGVuaGFuY2VFcnJvcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKioqKioqKioqKioqKioqKioqKioqKipcclxuICogQGRlc2Mg5ZCI5bm2Y29uZmlnXHJcbiAqIEBhdXRob3IgSm8uZ2VsXHJcbiAqIEBkYXRlIDIwMTkvOC8yMCAwMDIwXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKi9cclxudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XHJcbi8qKlxyXG4gKiBAcGFyYW0gY29uZmlnMiBjb25maWcyIOWQiOW5tuWIsGNvbmZpZzFcclxuICogQHBhcmFtIGNvbmZpZzEg5bCGY29uZmlnMuWQiOW5tui/m+adpVxyXG4gKiAqL1xyXG5mdW5jdGlvbiBtZXJnZUNvbmZpZyhjb25maWcxLCBjb25maWcyKSB7XHJcbiAgICBpZiAoY29uZmlnMSA9PT0gdm9pZCAwKSB7IGNvbmZpZzEgPSB7fTsgfVxyXG4gICAgaWYgKGNvbmZpZzIgPT09IHZvaWQgMCkgeyBjb25maWcyID0ge307IH1cclxuICAgIGNvbmZpZzIgPSBjb25maWcyIHx8IHt9O1xyXG4gICAgdmFyIGNvbmZpZyA9IHt9O1xyXG4gICAgdXRpbHNfMS5mb3JFYWNoKFsndXJsJywgJ21ldGhvZCcsICdwYXJhbXMnLCAnZGF0YSddLCBmdW5jdGlvbiB2YWx1ZUZyb21Db25maWcyKHByb3ApIHtcclxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB1dGlsc18xLmZvckVhY2goWydoZWFkZXJzJywgJ2F1dGgnLCAncHJveHknXSwgZnVuY3Rpb24gbWVyZ2VEZWVwUHJvcGVydGllcyhwcm9wKSB7XHJcbiAgICAgICAgLy8gdGVzdOi/memHjOS9v+eUqO+8muino+aehOaTjeS9nOespu+8jOmcgOimgeW+hemqjOivgVxyXG4gICAgICAgIGlmICh1dGlsc18xLmlzT2JqZWN0KGNvbmZpZzJbcHJvcF0pKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZ1twcm9wXSA9IF9fYXNzaWduKHt9LCBjb25maWcxW3Byb3BdLCBjb25maWcyW3Byb3BdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHV0aWxzXzEuaXNPYmplY3QoY29uZmlnMVtwcm9wXSkpIHtcclxuICAgICAgICAgICAgY29uZmlnW3Byb3BdID0gX19hc3NpZ24oe30sIGNvbmZpZzFbcHJvcF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY29uZmlnMVtwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMVtwcm9wXTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHV0aWxzXzEuZm9yRWFjaChbJ2Jhc2VVUkwnLCAndHJhbnNmb3JtUmVxdWVzdCcsICd0cmFuc2Zvcm1SZXNwb25zZScsICdwYXJhbXNTZXJpYWxpemVyJyxcclxuICAgICAgICAndGltZW91dCcsICd3aXRoQ3JlZGVudGlhbHMnLCAnYWRhcHRlcicsICdyZXNwb25zZVR5cGUnLCAneHNyZkNvb2tpZU5hbWUnLFxyXG4gICAgICAgICd4c3JmSGVhZGVyTmFtZScsICdvblVwbG9hZFByb2Nlc3MnLCAnb25Eb3dubG9hZFByb2dyZXNzJywgJ21heENvbnRlbnRMZW5ndGgnLFxyXG4gICAgICAgICd2YWxpZGF0ZVN0YXR1cycsICdtYXhSZWRpcmVjdHMnLCAnaHR0cEFnZW50JywgJ2h0dHBzQWdlbnQnLCAnY2FuY2VsVG9rZW4nLFxyXG4gICAgICAgICdzb2NrZXRQYXRoJ1xyXG4gICAgXSwgZnVuY3Rpb24gZGVmYXVsdFRvQ29uZmlnMihwcm9wKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY29uZmlnMVtwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMVtwcm9wXTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBjb25maWc7XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gbWVyZ2VDb25maWc7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBjcmVhdGVFcnJvcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NyZWF0ZUVycm9yXCIpKTtcclxuLyoqXHJcbiAqIFJlc29sdmUgb3IgcmVqZWN0IGEgUHJvbWlzZSBiYXNlZCBvbiByZXNwb25zZSBzdGF0dXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgQSBmdW5jdGlvbiB0aGF0IHJlamVjdHMgdGhlIHByb21pc2UuXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xyXG4gICAgdmFyIHZhbGlkYXRlU3RhdHVzID0gcmVzcG9uc2UuY29uZmlnLnZhbGlkYXRlU3RhdHVzO1xyXG4gICAgaWYgKHZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcclxuICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJlamVjdChjcmVhdGVFcnJvcl8xLmRlZmF1bHQoJ1JlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgJyArIHJlc3BvbnNlLnN0YXR1cywgcmVzcG9uc2UuY29uZmlnLCBudWxsLCByZXNwb25zZS5yZXF1ZXN0LCByZXNwb25zZSkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHNldHRsZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIEBhdXRob3IgSm8uZ2VsXHJcbiAqIEBkYXRlIDIwMTkvOC8yMCAwMDIwXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKi9cclxudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XHJcbi8qKlxyXG4gKiBAZGVzYyDovazmjaLor7fmsYLmiJblk43lupTnmoTmlbDmja5cclxuICogQHBhcmFtIGRhdGEge09iamVjdHxTdHJpbmd9IOimgei9rOaNoueahOaVsOaNrlxyXG4gKiBAcGFyYW0gaGVhZGVycyB7QXJyYXl9IOivt+axguaIluWTjeW6lOeahOWktFxyXG4gKiBAcGFyYW0gZm5zIHtBcnJheXxGdW5jdGlvbn3ljZXkuKrlh73mlbDmiJblh73mlbDmlbDnu4RcclxuICogQHJldHVybnMgKiDovazmjaLlkI7nmoTmlbDmja4gdG9kb1xyXG4gKiAqL1xyXG5mdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGRhdGEsIGhlYWRlcnMsIGZucykge1xyXG4gICAgdXRpbHNfMS5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XHJcbiAgICAgICAgZGF0YSA9IGZuKGRhdGEsIGhlYWRlcnMpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSB0cmFuc2Zvcm1EYXRhO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XHJcbnZhciBub3JtYWxpemVIZWFkZXJOYW1lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vaGVhZGVycy9ub3JtYWxpemVIZWFkZXJOYW1lXCIpKTtcclxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xyXG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcbn07XHJcbi8vIOiuvue9rkNvbnRlbnQgVHlwZe+8jOWmguaenOayoeacieiuvue9rueahOivnSDnmoTlh73mlbBcclxuZnVuY3Rpb24gc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsIHZhbHVlKSB7XHJcbiAgICBpZiAoIXV0aWxzXzEuaXNVbmRlZmluZWQoaGVhZGVycykgJiYgdXRpbHNfMS5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcclxuICAgICAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xyXG4gICAgfVxyXG59XHJcbi8vIOiOt+WPlum7mOiupOeahOmAgumFjeWZqFxyXG4vLyB0b2RvIOi/meWdl+WcsOaWueeahHJlcXVpcmUg5oCO5LmI5Y67566A5YaZ5aW954K55ZGi77yfXHJcbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xyXG4gICAgdmFyIGFkYXB0ZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAvLyDpkojlr7lub2RlLmpz77yM5Y2V5p+Q56eN5oOF5Ya15LiLcHJvY2VzcyDmmK9bb2JqZWN0IG9iamVjdF1cclxuICAgIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocHJvY2VzcykgPT09ICdbb2JqZWN0IHByb2Nlc3NdJykge1xyXG4gICAgICAgIHZhciBodHRwQWRhcHRlcl8xID0gcmVxdWlyZSgnLi9hZGFwdGVycy9odHRwJykuaHR0cEFkYXB0ZXI7XHJcbiAgICAgICAgYWRhcHRlciA9IGh0dHBBZGFwdGVyXzE7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgLy8g6ZKI5a+55rWP6KeI5Zmo5L2/55SoWEhSIOmAgumFjeWZqFxyXG4gICAgICAgIHZhciB4aHJBZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy94aHInKS54aHJBZGFwdGVyO1xyXG4gICAgICAgIGFkYXB0ZXIgPSB4aHJBZGFwdGVyO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFkYXB0ZXI7XHJcbn1cclxuLy8g5aOw5piOZGVmYXVsdHMg5a+56LGhXHJcbnZhciBkZWZhdWx0cyA9IHtcclxuICAgIGFkYXB0ZXI6IGdldERlZmF1bHRBZGFwdGVyKCksXHJcbiAgICAvLyByZXF1ZXN06L2s5o2i5ZmoXHJcbiAgICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhLCBoZWFkZXJzKSB7XHJcbiAgICAgICAgICAgIG5vcm1hbGl6ZUhlYWRlck5hbWVfMS5kZWZhdWx0KGhlYWRlcnMsICdBY2NlcHQnKTtcclxuICAgICAgICAgICAgbm9ybWFsaXplSGVhZGVyTmFtZV8xLmRlZmF1bHQoaGVhZGVycywgJ0NvbnRlbnQtVHlwZScpO1xyXG4gICAgICAgICAgICAvLyDnrKblkIhmb3JtRGF0YSBBcnJheUJ1ZmZlciBTdHJlYW0gRmlsZSBCbG9iIOWImei/lOWbnmRhdGHmnKzkvZNcclxuICAgICAgICAgICAgaWYgKHV0aWxzXzEuaXNGb3JtRGF0YShkYXRhKSB8fFxyXG4gICAgICAgICAgICAgICAgdXRpbHNfMS5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XHJcbiAgICAgICAgICAgICAgICB1dGlsc18xLmlzQnVmZmVyKGRhdGEpIHx8XHJcbiAgICAgICAgICAgICAgICB1dGlsc18xLmlzU3RyZWFtKGRhdGEpIHx8XHJcbiAgICAgICAgICAgICAgICB1dGlsc18xLmlzRmlsZShkYXRhKSB8fFxyXG4gICAgICAgICAgICAgICAgdXRpbHNfMS5pc0Jsb2IoZGF0YSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIOWmguaenOaYr0FycmF5QnVmZmVyVmlld1xyXG4gICAgICAgICAgICBpZiAodXRpbHNfMS5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcclxuICAgICAgICAgICAgaWYgKHV0aWxzXzEuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcclxuICAgICAgICAgICAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh1dGlsc18xLmlzT2JqZWN0KGRhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldC11dGYtOCcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH1dLFxyXG4gICAgLy8gcmVzcG9uc2Ug6L2s5o2i5ZmoXHJcbiAgICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XSxcclxuICAgIC8qXHJcbiAgICAqIOiuvue9rui2heaXtueahOavq+enklxyXG4gICAgKiDorr7nva7kuLow5YiZ5rKh5pyJ5Yib5bu66LaF5pe2XHJcbiAgICAqICovXHJcbiAgICB0aW1lb3V0OiAwLFxyXG4gICAgeHNyZkNvb2tpZU5hbWU6ICdYU1JGLVRPS0VOJyxcclxuICAgIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcclxuICAgIG1heENvbnRlbnRMZW5ndGg6IC0xLFxyXG4gICAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xyXG4gICAgICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcclxuICAgIH1cclxufTtcclxuZGVmYXVsdHMuaGVhZGVycyA9IHtcclxuICAgIGNvbW1vbjoge1xyXG4gICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbix0ZXh0L3BsYWluLCovKidcclxuICAgIH1cclxufTtcclxudXRpbHNfMS5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XHJcbiAgICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcclxufSk7XHJcbnV0aWxzXzEuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcclxuICAgIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IF9fYXNzaWduKHt9LCBERUZBVUxUX0NPTlRFTlRfVFlQRSk7XHJcbn0pO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBkZWZhdWx0cztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XHJcbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcclxuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKVxyXG4gICAgICAgIC5yZXBsYWNlKC8lNDAvZ2ksICdAJylcclxuICAgICAgICAucmVwbGFjZSgvJTNBL2dpLCAnOicpXHJcbiAgICAgICAgLnJlcGxhY2UoLyUyNC9nLCAnJCcpXHJcbiAgICAgICAgLnJlcGxhY2UoLyUyQy9naSwgJywnKVxyXG4gICAgICAgIC5yZXBsYWNlKC8lMjAvZywgJysnKVxyXG4gICAgICAgIC5yZXBsYWNlKC8lNUIvZ2ksICdbJylcclxuICAgICAgICAucmVwbGFjZSgvJTVEL2dpLCAnXScpO1xyXG59XHJcbi8qKlxyXG4gKiBAZGVzYyDpgJrov4flnKjmnKvlsL7pmYTliqDlj4LmlbDmnaXmnoTlu7pVUkxcclxuICogQHBhcmFtIHVybFxyXG4gKiBAcGFyYW0gcGFyYW1zXHJcbiAqIEBwYXJhbSBwYXJhbXNTZXJpYWxpemVyXHJcbiAqL1xyXG5mdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcywgcGFyYW1zU2VyaWFsaXplcikge1xyXG4gICAgaWYgKCFwYXJhbXMpXHJcbiAgICAgICAgcmV0dXJuIHVybDtcclxuICAgIHZhciBzZXJpYWxpemVkUGFyYW1zID0gdW5kZWZpbmVkO1xyXG4gICAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcclxuICAgICAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodXRpbHNfMS5pc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMpKSB7XHJcbiAgICAgICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtcy50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdmFyIHBhcnRzXzEgPSBbXTtcclxuICAgICAgICB1dGlsc18xLmZvckVhY2gocGFyYW1zLCBmdW5jdGlvbiBzZXJpYWxpemUodmFsLCBrZXkpIHtcclxuICAgICAgICAgICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJylcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKHV0aWxzXzEuaXNBcnJheSh2YWwpKSB7XHJcbiAgICAgICAgICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFsID0gW3ZhbF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdXRpbHNfMS5mb3JFYWNoKHZhbCwgZnVuY3Rpb24gcGFyc2VWYWx1ZSh2KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXRpbHNfMS5pc0RhdGUodikpIHtcclxuICAgICAgICAgICAgICAgICAgICB2ID0gdi50b0lTT1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodXRpbHNfMS5pc09iamVjdCh2KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHBhcnRzXzEucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0c18xLmpvaW4oJyYnKTtcclxuICAgIH1cclxuICAgIGlmIChzZXJpYWxpemVkUGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGhhc2hNYXJrSW5kZXggPSB1cmwuaW5kZXhPZignIycpO1xyXG4gICAgICAgIGlmIChoYXNoTWFya0luZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwuc2xpY2UoMCwgaGFzaE1hcmtJbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcclxuICAgIH1cclxuICAgIHJldHVybiB1cmw7XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gYnVpbGRVUkw7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBAZGVzYyDpgJrov4fnu4TlkIjmjIflrprnmoRVUkzliJvlu7rmlrDnmoRVUkxcclxuICogQGF1dGhvciBKby5nZWxcclxuICogQGRhdGUgMjAxOS84LzIwIDAwMjBcclxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkxcclxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAqKioqKioqKioqKioqKioqKioqKioqKi9cclxuZXhwb3J0cy5kZWZhdWx0ID0gKGZ1bmN0aW9uIChiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xyXG4gICAgcmV0dXJuIHJlbGF0aXZlVVJMXHJcbiAgICAgICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcclxuICAgICAgICA6IGJhc2VVUkw7XHJcbn0pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gKHV0aWxzXzEuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XHJcbiAgICAvLyDmoIflh4bmtY/op4jlmahlbnZz5pSv5oyB5paH5qGjLmNvb2tpZVxyXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29va2llID0gW107XHJcbiAgICAgICAgICAgICAgICBjb29raWUucHVzaChuYW1lICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodXRpbHNfMS5pc051bWJlcihleHBpcmVzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdleHBpcmVzPScgKyBuZXcgRGF0ZShleHBpcmVzKS50b1VUQ1N0cmluZygpKTsgLy8g5rqQ56CB6L+Z6YeM5pivaGl0b0dNVFN0cmluZ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzXzEuaXNTdHJpbmcocGF0aCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodXRpbHNfMS5pc1N0cmluZyhkb21haW4pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29va2llLnB1c2goJ2RvbWFpbj0nICsgZG9tYWluKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb29raWUucHVzaCgnc2VjdXJlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cCgnKF58O1xcXFxzKikoJyArIG5hbWUgKyAnKT0oW147XSopJykpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9KSgpIDpcclxuICAgIC8vIOmdnuagh+WHhua1j+iniOWZqGVudu+8iHdlYiB3b3JrZXJz77yMcmVhY3QgbmF0aXZl77yJ57y65LmP5omA6ZyA55qE5pSv5oyB44CCXHJcbiAgICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHsgfSxcclxuICAgICAgICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZCgpIHsgcmV0dXJuIG51bGw7IH0sXHJcbiAgICAgICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkgeyB9LFxyXG4gICAgICAgIH07XHJcbiAgICB9KSgpKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBAZGVzYyDlhbblrp4gbm9kZeeOr+Wig+eahHBhdGguaXNBYnNvbHV0ZSDkuZ/mmK/mj5DkvpvkuobkuIDkuKrmlrnms5XnmoRcclxuICogQGRlc2Mg5Yik5pat5piv5ZCm57ud5a+56Lev5b6EXHJcbiAqIEBhdXRob3IgSm8uZ2VsXHJcbiAqIEBkYXRlIDIwMTkvOC8yMCAwMDIwXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqKioqKioqKioqKioqKioqKioqKioqKi9cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmRlZmF1bHQgPSAoZnVuY3Rpb24gKHVybCkge1xyXG4gICAgcmV0dXJuIC9eKFthLXpdW2EtelxcZFxcK1xcLVxcLl0qOik/XFwvXFwvL2kudGVzdCh1cmwpO1xyXG59KTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XHJcbnZhciB1dGlsXzEgPSByZXF1aXJlKFwidXRpbFwiKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gKHV0aWxzXzEuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XHJcbiAgICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3RcclxuICAgIC8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxyXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcclxuICAgICAgICB2YXIgbXNpZSA9IC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcbiAgICAgICAgdmFyIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgIHZhciBvcmlnaW5VUkwgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQGRlc2Mg6Kej5p6QdXJsXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xyXG4gICAgICAgICAgICB2YXIgaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgaWYgKG1zaWUpIHtcclxuICAgICAgICAgICAgICAgIC8vIElF6ZyA6KaB6K6+572u5Lik5qyh5bGe5oCn5p2l6KeE6IyD5YyW5bGe5oCnXHJcbiAgICAgICAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcclxuICAgICAgICAgICAgICAgIGhyZWYgPSB1cmxQYXJzaW5nTm9kZS5ocmVmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xyXG4gICAgICAgICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxyXG4gICAgICAgICAgICAgICAgcHJvdG9jb2w6IHVybFBhcnNpbmdOb2RlLnByb3RvY29sID8gdXJsUGFyc2luZ05vZGUucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcclxuICAgICAgICAgICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXHJcbiAgICAgICAgICAgICAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXHJcbiAgICAgICAgICAgICAgICBoYXNoOiB1cmxQYXJzaW5nTm9kZS5oYXNoID8gdXJsUGFyc2luZ05vZGUuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnLFxyXG4gICAgICAgICAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxyXG4gICAgICAgICAgICAgICAgcG9ydDogdXJsUGFyc2luZ05vZGUucG9ydCxcclxuICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAodXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpID8gdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOiAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBvcmlnaW5VUkwgPSByZXNvbHZlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAZGVzYyDnoa7lrppVUkzmmK/lkKbkuI7lvZPliY3kvY3nva7lhbHkuqvlkIzkuIDmupBcclxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcmVxdWVzdFVSTFxyXG4gICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbihyZXF1ZXN0VVJMKSB7XHJcbiAgICAgICAgICAgIHZhciBwYXJzZWQgPSAodXRpbF8xLmlzU3RyaW5nKHJlcXVlc3RVUkwpKSA/IHJlc29sdmVVUkwocmVxdWVzdFVSTCkgOiByZXF1ZXN0VVJMO1xyXG4gICAgICAgICAgICByZXR1cm4gKHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0pKCkgOlxyXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9O1xyXG4gICAgfSkpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuLyoqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIEBuYW1lIFRTIEZJTEVcclxuICogQGF1dGhvciBKby5nZWxcclxuICogQGRhdGUgMjAxOS84LzE5IDAwMTkg5LiK5Y2IIDExOjMxXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKi9cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcclxuZnVuY3Rpb24gbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCBub3JtYWxpemVkTmFtZSkge1xyXG4gICAgdXRpbHNfMS5mb3JFYWNoKGhlYWRlcnMsIGZ1bmN0aW9uIHByb2Nlc3NIZWFkZXIodmFsdWUsIG5hbWUpIHtcclxuICAgICAgICBpZiAobmFtZSAhPT0gbm9ybWFsaXplZE5hbWUgJiYgbmFtZS50b0xvd2VyQ2FzZSgpID09PSBub3JtYWxpemVkTmFtZS50b1VwcGVyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IG5vcm1hbGl6ZUhlYWRlck5hbWU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xyXG4vLyBub2Rl5b+955Wl5YW26YeN5aSN6aG555qE5aS0XHJcbi8vIGMuZi4gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnNcclxudmFyIGlnbm9yZUR1cGxpY2F0ZU9mID0gW1xyXG4gICAgJ2FnZScsICdhdXRob3JpemF0aW9uJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ2NvbnRlbnQtdHlwZScsICdldGFnJyxcclxuICAgICdleHBpcmVzJywgJ2Zyb20nLCAnaG9zdCcsICdpZi1tb2RpZmllZC1zaW5jZScsICdpZi11bm1vZGlmaWVkLXNpbmNlJyxcclxuICAgICdsYXN0LW1vZGlmaWVkJywgJ2xvY2F0aW9uJywgJ21heC1mb3J3YXJkcycsICdwcm94eS1hdXRob3JpemF0aW9uJyxcclxuICAgICdyZWZlcmVyJywgJ3JldHJ5LWFmdGVyJywgJ3VzZXItYWdlbnQnXHJcbl07XHJcbi8qKlxyXG4gKiAgUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxyXG4gKiBgYGBqc1xyXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxyXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cclxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxyXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxyXG4gKiBgYGBcclxuICogQHBhcmFtIHtzdHJpbmd9IGhlYWRlcnMg6ZyA6KaB6Kej5p6Q55qESGVhZGVyc1xyXG4gKiBAcmV0dXJucyB7b2JqZWN0fSDmiopIZWFkZXLop6PmnpDkuLrlr7nosaFcclxuICovXHJcbmV4cG9ydHMuZGVmYXVsdCA9IChmdW5jdGlvbiAoaGVhZGVycykge1xyXG4gICAgdmFyIHBhcnNlZCA9IHt9O1xyXG4gICAgdmFyIGtleSA9IHVuZGVmaW5lZDtcclxuICAgIHZhciB2YWwgPSB1bmRlZmluZWQ7XHJcbiAgICB2YXIgaSA9IHVuZGVmaW5lZDtcclxuICAgIGlmICghaGVhZGVycylcclxuICAgICAgICByZXR1cm4gcGFyc2VkO1xyXG4gICAgdXRpbHNfMS5mb3JFYWNoKGhlYWRlcnMuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiBwYXJzZXIobGluZSkge1xyXG4gICAgICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcclxuICAgICAgICBrZXkgPSB1dGlsc18xLnRyaW0obGluZS5zdWJzdHIoMCwgaSkpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgdmFsID0gdXRpbHNfMS50cmltKGxpbmUuc3Vic3RyKGkgKyAxKSk7XHJcbiAgICAgICAgaWYgKGtleSkge1xyXG4gICAgICAgICAgICBpZiAocGFyc2VkW2tleV0gJiYgaWdub3JlRHVwbGljYXRlT2YuaW5kZXhPZihrZXkpID49IDApXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGlmIChrZXkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZi5pbmRleE9mKGtleSkgPj0gMClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSAnc2V0LWNvb2tpZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJzZWRba2V5XSA9IChwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldIDogW10pLmNvbmNhdChbdmFsXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcGFyc2VkO1xyXG59KTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqXHJcbiAqIEBkZXNjIOeUqOS6juiwg+eUqOWHveaVsOWSjOaJqeWxleWPguaVsOaVsOe7hOeahOivreazlee7k+aehOOAglxyXG4gKiDluLjop4HnmoTnlKjkvosgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWBcclxuICpcclxuICogYGBganNcclxuICogZnVuY3Rpb24gZih4LHkseil7fVxyXG4gKiBjb25zdCBhcmdzPVsxLDIsM11cclxuICogZi5hcHBseShudWxsLGFyZ3MpXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiDkvb/nlKhgc3ByZWFkYCDph43lhpnmraTkvotcclxuICpcclxuICogYGBganNcclxuICogc3ByZWFkKGZ1bmN0aW9uKHgseSx6KXt9KShbMSwyLDNdKVxyXG4gKiBgYGBcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcclxuICogQHJldHVybiB7RnVuY3Rpb259XHJcbiAqXHJcbiAqICovXHJcbmZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIHdhcnAoYXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFycik7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHNwcmVhZDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIEBhdXRob3IgSm8uZ2VsXHJcbiAqIEBkYXRlIDIwMTkvOC8yOSAwMDI5XHJcbiAqKioqKioqKioqKioqKioqKioqKioqKi9cclxudmFyIGF4aW9zXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vYXhpb3NcIikpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBheGlvc18xLmRlZmF1bHQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKkBkZXNjIGF4aW9zIOW3peWFt+exu+WHveaVsFxyXG4gKlxyXG4gKi9cclxudmFyIGlzX2J1ZmZlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJpcy1idWZmZXJcIikpO1xyXG5leHBvcnRzLmlzQnVmZmVyID0gaXNfYnVmZmVyXzEuZGVmYXVsdDtcclxuLyoqXHJcbiAqIEBkZXNjIOWIpOaWreWAvOaYr+WQpuaYr+aVsOe7hFxyXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsXHJcbiAqIEByZXR1cm5zIHtib29sZWFufSDmmK/mlbDnu4QsdHJ1Ze+8jOWQpuWImWZhbHNlXHJcbiAqL1xyXG5mdW5jdGlvbiBpc0FycmF5KHZhbCkge1xyXG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcclxufVxyXG5leHBvcnRzLmlzQXJyYXkgPSBpc0FycmF5O1xyXG4vKipcclxuICogQGRlc2Mg5Yik5pat5piv5ZCm5pivQXJyYXlCdWZmZXJcclxuICogQHBhcmFtIHZhbFxyXG4gKiBAcmV0dXJucyDmmK8g5YiZdHJ1Ze+8jOWQpuWImWZhbHNlXHJcbiAqL1xyXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyKHZhbCkge1xyXG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcclxufVxyXG5leHBvcnRzLmlzQXJyYXlCdWZmZXIgPSBpc0FycmF5QnVmZmVyO1xyXG4vKipcclxuICogQGRlc2Mg5Yik5pat5piv5ZCmZm9ybURhdGFcclxuICovXHJcbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsKSB7XHJcbiAgICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XHJcbn1cclxuZXhwb3J0cy5pc0Zvcm1EYXRhID0gaXNGb3JtRGF0YTtcclxuLyoqXHJcbiAqIEBkZXNjIOWIpOaWrXZhbOaYr+WQpuaYr0FycmF5QnVmZmVy55qE6KeG5Zu+XHJcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWxcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcclxuICAgIHZhciByZXN1bHQ7XHJcbiAgICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcpICYmIChBcnJheUJ1ZmZlci5pc1ZpZXcpKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXN1bHQgPSB2YWwgJiYgdmFsLmJ1ZmZlciAmJiAodmFsLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuZXhwb3J0cy5pc0FycmF5QnVmZmVyVmlldyA9IGlzQXJyYXlCdWZmZXJWaWV3O1xyXG4vKipcclxuICogQGRlc2Mg5Yik5pat5a2X56ym5LiyXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWxcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqXHJcbiAqL1xyXG5mdW5jdGlvbiBpc1N0cmluZyh2YWwpIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcclxufVxyXG5leHBvcnRzLmlzU3RyaW5nID0gaXNTdHJpbmc7XHJcbi8qKlxyXG4gKiBAZGVzYyDliKTmlq3mmK/mlbDlrZfnsbvlnotcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5mdW5jdGlvbiBpc051bWJlcih2YWwpIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcclxufVxyXG5leHBvcnRzLmlzTnVtYmVyID0gaXNOdW1iZXI7XHJcbi8qKlxyXG4gKiBAZGVzYyDliKTmlq3mmK91bmRlZmluZWTnsbvlnotcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWwpIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcclxufVxyXG5leHBvcnRzLmlzVW5kZWZpbmVkID0gaXNVbmRlZmluZWQ7XHJcbi8qKlxyXG4gKiBAZGVzYyDliKTmlq3mmK/lkKbmmK9vYmplY3RcclxuICpcclxuICovXHJcbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xyXG4gICAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0JztcclxufVxyXG5leHBvcnRzLmlzT2JqZWN0ID0gaXNPYmplY3Q7XHJcbi8qKlxyXG4gKiBAZGVzYyDliKTmlq3mmK9EYXRl57G75Z6LXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xyXG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xyXG59XHJcbmV4cG9ydHMuaXNEYXRlID0gaXNEYXRlO1xyXG4vKipcclxuICogQGRlc2Mg5Yik5pat5pivZmlsZSDnsbvlnotcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XHJcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGaWxlXSc7XHJcbn1cclxuZXhwb3J0cy5pc0ZpbGUgPSBpc0ZpbGU7XHJcbi8qKlxyXG4gKiBAZGVzYyDliKTmlq3mmK9ibG9i57G75Z6LXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gaXNCbG9iKHZhbCkge1xyXG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQmxvYl0nO1xyXG59XHJcbmV4cG9ydHMuaXNCbG9iID0gaXNCbG9iO1xyXG4vKipcclxuICogQGRlc2Mg5Yik5pat5pivZnVuY3Rpb25cclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xyXG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcclxufVxyXG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xyXG4vKipcclxuICogQGRlc2Mg5Yik5patc3RyZWFtXHJcbiAqL1xyXG5mdW5jdGlvbiBpc1N0cmVhbSh2YWwpIHtcclxuICAgIHJldHVybiBpc09iamVjdCh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnBpcGUpO1xyXG59XHJcbmV4cG9ydHMuaXNTdHJlYW0gPSBpc1N0cmVhbTtcclxuLyoqXHJcbiAqIEBkZXNjIOWIpOaWreaYr1VSTCBTZWFyY2ggUGFyYW1zXHJcbiAqXHJcbiAqL1xyXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcclxuICAgIHJldHVybiAodHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXMpO1xyXG59XHJcbmV4cG9ydHMuaXNVUkxTZWFyY2hQYXJhbXMgPSBpc1VSTFNlYXJjaFBhcmFtcztcclxuLyoqXHJcbiAqIEBkZXNjIOWIoOmZpOW8gOWni+WIsOe7k+adn+eahOWkmuS9meepuueZvVxyXG4gKi9cclxuZnVuY3Rpb24gdHJpbShzdHIpIHtcclxuICAgIHJldHVybiAoc3RyIHx8ICcnKS5yZXBsYWNlKC9eXFxzKi8sICcnKS5yZXBsYWNlKC9cXHMqJC8sICcnKTtcclxufVxyXG5leHBvcnRzLnRyaW0gPSB0cmltO1xyXG4vKipcclxuICogQGRlc2Mg5qOA5p+l5piv5ZCm5YWB6K645Zyo5qCH5YeG55qE5rWP6KeI5Zmo5LiKXHJcbiAqL1xyXG5mdW5jdGlvbiBpc1N0YW5kYXJkQnJvd3NlckVudigpIHtcclxuICAgIGlmICgodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcpICYmIChuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJyB8fCBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05hdGl2ZVNjcmlwdCcgfHwgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOUycpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKTtcclxufVxyXG5leHBvcnRzLmlzU3RhbmRhcmRCcm93c2VyRW52ID0gaXNTdGFuZGFyZEJyb3dzZXJFbnY7XHJcbi8qKlxyXG4gKiBAZGVzYyDov63ku6PkuLrmr4/kuKrpobnosIPnlKjlh73mlbDnmoTmlbDnu4TmiJblr7nosaHjgIJcclxuICog5aaC5p6c4oCcb2Jq4oCd5piv5LiA5Liq5pWw57uE77yM5YiZ6LCD55So5pWw57uE5Zue6LCD77yM5Lyg6YCS5q+P5Liq6aG555qE5YC844CB57Si5byV5ZKM5a6M5pW05pWw57uE44CCXHJcbiAqIOWmguaenOKAnG9iauKAneaYr+S4gOS4quWvueixoe+8jOWImeWwhuiwg+eUqOWbnuiwg+adpeS8oOmAkuavj+S4quWxnuaAp+eahOWAvOOAgemUruWSjOWujOaVtOWvueixoeOAglxyXG4gKlxyXG4gKiBAcGFyYW0gb2JqIOimgei/reS7o+eahOWvueixoVxyXG4gKiBAcGFyYW0gZm4g5Li65q+P5Liq6aG56LCD55So55qE5Zue6LCDXHJcbiAqXHJcbiAqL1xyXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcclxuICAgIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyDlvLrliLbovazmjaLmlbDnu4TvvIzlpoLmnpzkuI3mmK/mlbDnu4TnmoTor51cclxuICAgIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIG9iaiA9IFtvYmpdO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzQXJyYXkob2JqKSkge1xyXG4gICAgICAgIC8vIOi/reS7o+aVsOe7hFxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtpXSwgaSwgb2JqKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICAvLyDov63ku6Plr7nosaFrZXlcclxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5mb3JFYWNoID0gZm9yRWFjaDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXNzZXJ0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3RyZWFtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInR0eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXRpbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ6bGliXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=