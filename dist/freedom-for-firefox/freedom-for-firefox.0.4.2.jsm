/**
 * This is freedom.js. - https://freedomjs.org
 *
 * Copyright 2014 The freedom.js authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * @license apache2.0
 * @see https://freedomjs.org
 */
 
require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var Promise = require("./promise/promise").Promise;
var polyfill = require("./promise/polyfill").polyfill;
exports.Promise = Promise;
exports.polyfill = polyfill;
},{"./promise/polyfill":5,"./promise/promise":6}],2:[function(require,module,exports){
"use strict";
/* global toString */

var isArray = require("./utils").isArray;
var isFunction = require("./utils").isFunction;

/**
  Returns a promise that is fulfilled when all the given promises have been
  fulfilled, or rejected if any of them become rejected. The return promise
  is fulfilled with an array that gives all the values in the order they were
  passed in the `promises` array argument.

  Example:

  ```javascript
  var promise1 = RSVP.resolve(1);
  var promise2 = RSVP.resolve(2);
  var promise3 = RSVP.resolve(3);
  var promises = [ promise1, promise2, promise3 ];

  RSVP.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `RSVP.all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  var promise1 = RSVP.resolve(1);
  var promise2 = RSVP.reject(new Error("2"));
  var promise3 = RSVP.reject(new Error("3"));
  var promises = [ promise1, promise2, promise3 ];

  RSVP.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @for RSVP
  @param {Array} promises
  @param {String} label
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
*/
function all(promises) {
  /*jshint validthis:true */
  var Promise = this;

  if (!isArray(promises)) {
    throw new TypeError('You must pass an array to all.');
  }

  return new Promise(function(resolve, reject) {
    var results = [], remaining = promises.length,
    promise;

    if (remaining === 0) {
      resolve([]);
    }

    function resolver(index) {
      return function(value) {
        resolveAll(index, value);
      };
    }

    function resolveAll(index, value) {
      results[index] = value;
      if (--remaining === 0) {
        resolve(results);
      }
    }

    for (var i = 0; i < promises.length; i++) {
      promise = promises[i];

      if (promise && isFunction(promise.then)) {
        promise.then(resolver(i), reject);
      } else {
        resolveAll(i, promise);
      }
    }
  });
}

exports.all = all;
},{"./utils":10}],3:[function(require,module,exports){
(function (process,global){
"use strict";
var browserGlobal = (typeof window !== 'undefined') ? window : {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var local = (typeof global !== 'undefined') ? global : (this === undefined? window:this);

// node
function useNextTick() {
  return function() {
    process.nextTick(flush);
  };
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function() {
    node.data = (iterations = ++iterations % 2);
  };
}

function useSetTimeout() {
  return function() {
    local.setTimeout(flush, 1);
  };
}

var queue = [];
function flush() {
  for (var i = 0; i < queue.length; i++) {
    var tuple = queue[i];
    var callback = tuple[0], arg = tuple[1];
    callback(arg);
  }
  queue = [];
}

var scheduleFlush;

// Decide what async method to use to triggering processing of queued callbacks:
if (typeof process !== 'undefined' && {}.toString.call(process) === '[object process]') {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else {
  scheduleFlush = useSetTimeout();
}

function asap(callback, arg) {
  var length = queue.push([callback, arg]);
  if (length === 1) {
    // If length is 1, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    scheduleFlush();
  }
}

exports.asap = asap;
}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"_process":40}],4:[function(require,module,exports){
"use strict";
var config = {
  instrument: false
};

function configure(name, value) {
  if (arguments.length === 2) {
    config[name] = value;
  } else {
    return config[name];
  }
}

exports.config = config;
exports.configure = configure;
},{}],5:[function(require,module,exports){
(function (global){
"use strict";
/*global self*/
var RSVPPromise = require("./promise").Promise;
var isFunction = require("./utils").isFunction;

function polyfill() {
  var local;

  if (typeof global !== 'undefined') {
    local = global;
  } else if (typeof window !== 'undefined' && window.document) {
    local = window;
  } else {
    local = self;
  }

  var es6PromiseSupport = 
    "Promise" in local &&
    // Some of these methods are missing from
    // Firefox/Chrome experimental implementations
    "resolve" in local.Promise &&
    "reject" in local.Promise &&
    "all" in local.Promise &&
    "race" in local.Promise &&
    // Older version of the spec had a resolver object
    // as the arg rather than a function
    (function() {
      var resolve;
      new local.Promise(function(r) { resolve = r; });
      return isFunction(resolve);
    }());

  if (!es6PromiseSupport) {
    local.Promise = RSVPPromise;
  }
}

exports.polyfill = polyfill;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./promise":6,"./utils":10}],6:[function(require,module,exports){
"use strict";
var config = require("./config").config;
var configure = require("./config").configure;
var objectOrFunction = require("./utils").objectOrFunction;
var isFunction = require("./utils").isFunction;
var now = require("./utils").now;
var all = require("./all").all;
var race = require("./race").race;
var staticResolve = require("./resolve").resolve;
var staticReject = require("./reject").reject;
var asap = require("./asap").asap;

var counter = 0;

config.async = asap; // default async is asap;

function Promise(resolver) {
  if (!isFunction(resolver)) {
    throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
  }

  if (!(this instanceof Promise)) {
    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
  }

  this._subscribers = [];

  invokeResolver(resolver, this);
}

function invokeResolver(resolver, promise) {
  function resolvePromise(value) {
    resolve(promise, value);
  }

  function rejectPromise(reason) {
    reject(promise, reason);
  }

  try {
    resolver(resolvePromise, rejectPromise);
  } catch(e) {
    rejectPromise(e);
  }
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value, error, succeeded, failed;

  if (hasCallback) {
    try {
      value = callback(detail);
      succeeded = true;
    } catch(e) {
      failed = true;
      error = e;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (handleThenable(promise, value)) {
    return;
  } else if (hasCallback && succeeded) {
    resolve(promise, value);
  } else if (failed) {
    reject(promise, error);
  } else if (settled === FULFILLED) {
    resolve(promise, value);
  } else if (settled === REJECTED) {
    reject(promise, value);
  }
}

var PENDING   = void 0;
var SEALED    = 0;
var FULFILLED = 1;
var REJECTED  = 2;

function subscribe(parent, child, onFulfillment, onRejection) {
  var subscribers = parent._subscribers;
  var length = subscribers.length;

  subscribers[length] = child;
  subscribers[length + FULFILLED] = onFulfillment;
  subscribers[length + REJECTED]  = onRejection;
}

function publish(promise, settled) {
  var child, callback, subscribers = promise._subscribers, detail = promise._detail;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    invokeCallback(settled, child, callback, detail);
  }

  promise._subscribers = null;
}

Promise.prototype = {
  constructor: Promise,

  _state: undefined,
  _detail: undefined,
  _subscribers: undefined,

  then: function(onFulfillment, onRejection) {
    var promise = this;

    var thenPromise = new this.constructor(function() {});

    if (this._state) {
      var callbacks = arguments;
      config.async(function invokePromiseCallback() {
        invokeCallback(promise._state, thenPromise, callbacks[promise._state - 1], promise._detail);
      });
    } else {
      subscribe(this, thenPromise, onFulfillment, onRejection);
    }

    return thenPromise;
  },

  'catch': function(onRejection) {
    return this.then(null, onRejection);
  }
};

Promise.all = all;
Promise.race = race;
Promise.resolve = staticResolve;
Promise.reject = staticReject;

function handleThenable(promise, value) {
  var then = null,
  resolved;

  try {
    if (promise === value) {
      throw new TypeError("A promises callback cannot return that same promise.");
    }

    if (objectOrFunction(value)) {
      then = value.then;

      if (isFunction(then)) {
        then.call(value, function(val) {
          if (resolved) { return true; }
          resolved = true;

          if (value !== val) {
            resolve(promise, val);
          } else {
            fulfill(promise, val);
          }
        }, function(val) {
          if (resolved) { return true; }
          resolved = true;

          reject(promise, val);
        });

        return true;
      }
    }
  } catch (error) {
    if (resolved) { return true; }
    reject(promise, error);
    return true;
  }

  return false;
}

function resolve(promise, value) {
  if (promise === value) {
    fulfill(promise, value);
  } else if (!handleThenable(promise, value)) {
    fulfill(promise, value);
  }
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) { return; }
  promise._state = SEALED;
  promise._detail = value;

  config.async(publishFulfillment, promise);
}

function reject(promise, reason) {
  if (promise._state !== PENDING) { return; }
  promise._state = SEALED;
  promise._detail = reason;

  config.async(publishRejection, promise);
}

function publishFulfillment(promise) {
  publish(promise, promise._state = FULFILLED);
}

function publishRejection(promise) {
  publish(promise, promise._state = REJECTED);
}

exports.Promise = Promise;
},{"./all":2,"./asap":3,"./config":4,"./race":7,"./reject":8,"./resolve":9,"./utils":10}],7:[function(require,module,exports){
"use strict";
/* global toString */
var isArray = require("./utils").isArray;

/**
  `RSVP.race` allows you to watch a series of promises and act as soon as the
  first promise given to the `promises` argument fulfills or rejects.

  Example:

  ```javascript
  var promise1 = new RSVP.Promise(function(resolve, reject){
    setTimeout(function(){
      resolve("promise 1");
    }, 200);
  });

  var promise2 = new RSVP.Promise(function(resolve, reject){
    setTimeout(function(){
      resolve("promise 2");
    }, 100);
  });

  RSVP.race([promise1, promise2]).then(function(result){
    // result === "promise 2" because it was resolved before promise1
    // was resolved.
  });
  ```

  `RSVP.race` is deterministic in that only the state of the first completed
  promise matters. For example, even if other promises given to the `promises`
  array argument are resolved, but the first completed promise has become
  rejected before the other promises became fulfilled, the returned promise
  will become rejected:

  ```javascript
  var promise1 = new RSVP.Promise(function(resolve, reject){
    setTimeout(function(){
      resolve("promise 1");
    }, 200);
  });

  var promise2 = new RSVP.Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error("promise 2"));
    }, 100);
  });

  RSVP.race([promise1, promise2]).then(function(result){
    // Code here never runs because there are rejected promises!
  }, function(reason){
    // reason.message === "promise2" because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  @method race
  @for RSVP
  @param {Array} promises array of promises to observe
  @param {String} label optional string for describing the promise returned.
  Useful for tooling.
  @return {Promise} a promise that becomes fulfilled with the value the first
  completed promises is resolved with if the first completed promise was
  fulfilled, or rejected with the reason that the first completed promise
  was rejected with.
*/
function race(promises) {
  /*jshint validthis:true */
  var Promise = this;

  if (!isArray(promises)) {
    throw new TypeError('You must pass an array to race.');
  }
  return new Promise(function(resolve, reject) {
    var results = [], promise;

    for (var i = 0; i < promises.length; i++) {
      promise = promises[i];

      if (promise && typeof promise.then === 'function') {
        promise.then(resolve, reject);
      } else {
        resolve(promise);
      }
    }
  });
}

exports.race = race;
},{"./utils":10}],8:[function(require,module,exports){
"use strict";
/**
  `RSVP.reject` returns a promise that will become rejected with the passed
  `reason`. `RSVP.reject` is essentially shorthand for the following:

  ```javascript
  var promise = new RSVP.Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  var promise = RSVP.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @for RSVP
  @param {Any} reason value that the returned promise will be rejected with.
  @param {String} label optional string for identifying the returned promise.
  Useful for tooling.
  @return {Promise} a promise that will become rejected with the given
  `reason`.
*/
function reject(reason) {
  /*jshint validthis:true */
  var Promise = this;

  return new Promise(function (resolve, reject) {
    reject(reason);
  });
}

exports.reject = reject;
},{}],9:[function(require,module,exports){
"use strict";
function resolve(value) {
  /*jshint validthis:true */
  if (value && typeof value === 'object' && value.constructor === this) {
    return value;
  }

  var Promise = this;

  return new Promise(function(resolve) {
    resolve(value);
  });
}

exports.resolve = resolve;
},{}],10:[function(require,module,exports){
"use strict";
function objectOrFunction(x) {
  return isFunction(x) || (typeof x === "object" && x !== null);
}

function isFunction(x) {
  return typeof x === "function";
}

function isArray(x) {
  return Object.prototype.toString.call(x) === "[object Array]";
}

// Date.now is not available in browsers < IE9
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now#Compatibility
var now = Date.now || function() { return new Date().getTime(); };


exports.objectOrFunction = objectOrFunction;
exports.isFunction = isFunction;
exports.isArray = isArray;
exports.now = now;
},{}],11:[function(require,module,exports){
/*! JSON.minify()
	v0.1.3-a (c) Kyle Simpson
	MIT License
*/

module.exports = function(json) {
	
	var tokenizer = /"|(\/\*)|(\*\/)|(\/\/)|\n|\r/g,
		in_string = false,
		in_multiline_comment = false,
		in_singleline_comment = false,
		tmp, tmp2, new_str = [], ns = 0, from = 0, lc, rc
	;
	
	tokenizer.lastIndex = 0;
	
	while (tmp = tokenizer.exec(json)) {
		lc = RegExp.leftContext;
		rc = RegExp.rightContext;
		if (!in_multiline_comment && !in_singleline_comment) {
			tmp2 = lc.substring(from);
			if (!in_string) {
				tmp2 = tmp2.replace(/(\n|\r|\s)*/g,"");
			}
			new_str[ns++] = tmp2;
		}
		from = tokenizer.lastIndex;
		
		if (tmp[0] == "\"" && !in_multiline_comment && !in_singleline_comment) {
			tmp2 = lc.match(/(\\)*$/);
			if (!in_string || !tmp2 || (tmp2[0].length % 2) == 0) {	// start of string with ", or unescaped " character found to end string
				in_string = !in_string;
			}
			from--; // include " character in next catch
			rc = json.substring(from);
		}
		else if (tmp[0] == "/*" && !in_string && !in_multiline_comment && !in_singleline_comment) {
			in_multiline_comment = true;
		}
		else if (tmp[0] == "*/" && !in_string && in_multiline_comment && !in_singleline_comment) {
			in_multiline_comment = false;
		}
		else if (tmp[0] == "//" && !in_string && !in_multiline_comment && !in_singleline_comment) {
			in_singleline_comment = true;
		}
		else if ((tmp[0] == "\n" || tmp[0] == "\r") && !in_string && !in_multiline_comment && in_singleline_comment) {
			in_singleline_comment = false;
		}
		else if (!in_multiline_comment && !in_singleline_comment && !(/\n|\r|\s/.test(tmp[0]))) {
			new_str[ns++] = tmp[0];
		}
	}
	new_str[ns++] = rc;
	return new_str.join("");
};


},{}],12:[function(require,module,exports){
(function (process){
/*globals process, console */
/*jslint indent:2,sloppy:true, node:true */
var util = require('../../src/util');

/**
 * A freedom.js logging provider that logs to chrome, firefox, and node consoles.
 * @Class Logger_console
 * @constructor
 * @private
 * @param {App} app The application creating this provider, in practice unset.
 */
var Logger_console = function (app) {
  this.level = (app.config && app.config.debug) || 'log';
  this.console = (app.config && app.config.global.console);
  util.handleEvents(this);
};


/**
 * Logging levels, for filtering output.
 * @private
 * @static
 */
Logger_console.level = {
  "debug": 0,
  "info": 1,
  "log": 2,
  "warn": 3,
  "error": 4
};

/**
 * Print a message with appropriate formatting.
 * @method print
 */
Logger_console.prototype.print = function (severity, source, msg) {
  var arr = msg;
  if (typeof this.console === 'undefined' ||
      this.console.freedom === true) {
    return;
  }
  if (typeof arr === 'string') {
    arr = [arr];
  }
  
  if (Logger_console.level[this.level] !== undefined &&
      Logger_console.level[severity] < Logger_console.level[this.level]) {
    return;
  }
  
  if (typeof process !== 'undefined' &&
      {}.toString.call(process) === '[object process]' && source) {
    arr.unshift('\x1B[39m');
    arr.unshift('\x1B[31m' + source);
    /*jslint nomen: true*/
  } else if (this.console.__mozillaConsole__ && source) {
    arr.unshift(source.toUpperCase());
    /*jslint nomen: false*/
  } else if (source) {
    arr.unshift('color: red');
    arr.unshift('%c ' + source);
  }
  if (!this.console[severity] && this.console.log) {
    severity = 'log';
  }
  this.console[severity].apply(this.console, arr);
};

/**
 * Log a message to the console.
 * @param {String} source The source of the message.
 * @param {String} msg The message to log.
 * @method log
 */
Logger_console.prototype.log = function (source, msg, continuation) {
  this.print('log', source, msg);
  continuation();
};

/**
 * Log a message to the console with debug priority.
 * @param {String} source The source of the message.
 * @param {String} msg The message to log.
 * @method log
 */
Logger_console.prototype.debug = function (source, msg, continuation) {
  this.print('debug', source, msg);
  continuation();
};

/**
 * Log a message to the console with info priority.
 * @param {String} source The source of the message.
 * @param {String} msg The message to log.
 * @method log
 */
Logger_console.prototype.info = function (source, msg, continuation) {
  this.print('info', source, msg);
  continuation();
};

/**
 * Log a message to the console with warn priority.
 * @param {String} source The source of the message.
 * @param {String} msg The message to log.
 * @method log
 */
Logger_console.prototype.warn = function (source, msg, continuation) {
  this.print('warn', source, msg);
  continuation();
};

/**
 * Log a message to the console with error priority.
 * @param {String} source The source of the message.
 * @param {String} msg The message to log.
 * @method log
 */
Logger_console.prototype.error = function (source, msg, continuation) {
  this.print('error', source, msg);
  continuation();
};

/** REGISTER PROVIDER **/
exports.provider = Logger_console;
exports.name = 'core.console';

}).call(this,require('_process'))
},{"../../src/util":38,"_process":40}],13:[function(require,module,exports){
/*jslint indent:2,sloppy:true, node:true */

var util = require('../../src/util');

var unAttachedChannels = {};
var allocateChannel = function (dataChannel) {
  var id = util.getId();
  unAttachedChannels[id] = dataChannel;
  return id;
};

var RTCDataChannelAdapter = function (app, dispatchEvents, id) {
  this.dispatchEvent = dispatchEvents;
  if (!unAttachedChannels[id]) {
    console.warn('Invalid ID, creating acting on unattached DataChannel');
    var Connection = require('./core.rtcpeerconnection').provider,
      provider = new Connection();
    id = provider.createDataChannel();
    provider.close();
  }

  this.channel = unAttachedChannels[id];
  delete unAttachedChannels[id];

  this.events = [
    'onopen',
    'onerror',
    'onclose',
    'onmessage'
  ];
  this.manageEvents(true);
};

// Attach or detach listeners for events against the connection.
RTCDataChannelAdapter.prototype.manageEvents = function (attach) {
  this.events.forEach(function (event) {
    if (attach) {
      this[event] = this[event].bind(this);
      this.channel[event] = this[event];
    } else {
      delete this.channel[event];
    }
  }.bind(this));
};

RTCDataChannelAdapter.prototype.getLabel = function (callback) {
  callback(this.channel.label);
};

RTCDataChannelAdapter.prototype.getOrdered = function (callback) {
  callback(this.channel.ordered);
};

RTCDataChannelAdapter.prototype.getMaxPacketLifeTime = function (callback) {
  callback(this.channel.maxPacketLifeTime);
};

RTCDataChannelAdapter.prototype.getMaxRetransmits = function (callback) {
  callback(this.channel.maxRetransmits);
};

RTCDataChannelAdapter.prototype.getProtocol = function (callback) {
  callback(this.channel.protocol);
};

RTCDataChannelAdapter.prototype.getNegotiated = function (callback) {
  callback(this.channel.negotiated);
};

RTCDataChannelAdapter.prototype.getId = function (callback) {
  callback(this.channel.id);
};

RTCDataChannelAdapter.prototype.getReadyState = function (callback) {
  callback(this.channel.readyState);
};

RTCDataChannelAdapter.prototype.getBufferedAmount = function (callback) {
  callback(this.channel.bufferedAmount);
};

RTCDataChannelAdapter.prototype.getBinaryType = function (callback) {
  callback(this.channel.binaryType);
};
RTCDataChannelAdapter.prototype.setBinaryType = function (binaryType, callback) {
  this.channel.binaryType = binaryType;
  callback();
};

RTCDataChannelAdapter.prototype.send = function (text, callback) {
  this.channel.send(text);
  callback();
};

RTCDataChannelAdapter.prototype.sendBuffer = function (buffer, callback) {
  this.channel.send(buffer);
  callback();
};

RTCDataChannelAdapter.prototype.close = function (callback) {
  if (!this.channel) {
    return callback();
  }
  this.manageEvents(false);
  this.channel.close();
  callback();
};

RTCDataChannelAdapter.prototype.onopen = function (event) {
  this.dispatchEvent('onopen', event.message);
};

RTCDataChannelAdapter.prototype.onerror = function (event) {
  this.dispatchEvent('onerror', {
    errcode: event.type,
    message: event.message
  });
};

RTCDataChannelAdapter.prototype.onclose = function (event) {
  this.dispatchEvent('onclose', event.message);
};

RTCDataChannelAdapter.prototype.onmessage = function (event) {
  if (typeof event.data === 'string') {
    this.dispatchEvent('onmessage', {text: event.data});
  } else {
    this.dispatchEvent('onmessage', {buffer: event.data});
  }
};

exports.name = "core.rtcdatachannel";
exports.provider = RTCDataChannelAdapter;
exports.allocate = allocateChannel;

},{"../../src/util":38,"./core.rtcpeerconnection":14}],14:[function(require,module,exports){
/*jslint indent:2,sloppy:true, node:true */

var adapter = require('webrtc-adapter');
var RTCPeerConnection = adapter.RTCPeerConnection;
var RTCSessionDescription = adapter.RTCSessionDescription;
var RTCIceCandidate = adapter.RTCIceCandidate;

var DataChannel = require('./core.rtcdatachannel');

var RTCPeerConnectionAdapter = function (app, dispatchEvent, configuration) {
  this.dispatchEvent = dispatchEvent;
  this.connection = new RTCPeerConnection(configuration);

  this.events = [
    'ondatachannel',
    'onnegotiationneeded',
    'onicecandidate',
    'onsignalingstatechange',
    'onaddstream',
    'onremovestream',
    'oniceconnectionstatechange'
  ];
  this.manageEvents(true);
};

// Attach or detach listeners for events against the connection.
RTCPeerConnectionAdapter.prototype.manageEvents = function (attach) {
  this.events.forEach(function (event) {
    if (attach) {
      this[event] = this[event].bind(this);
      this.connection[event] = this[event];
    } else if (this.connection) {
      delete this.connection[event];
    }
  }.bind(this));
};

RTCPeerConnectionAdapter.prototype.createOffer = function (constraints, callback) {
  this.connection.createOffer(callback, callback.bind({}, undefined), constraints);
};

RTCPeerConnectionAdapter.prototype.createAnswer = function (callback) {
  this.connection.createAnswer(callback, callback.bind({}, undefined));
};

RTCPeerConnectionAdapter.prototype.setLocalDescription = function (description, callback) {
  this.connection.setLocalDescription(new RTCSessionDescription(description),
    callback,
    callback.bind({}, undefined));
};

RTCPeerConnectionAdapter.prototype.getLocalDescription = function (callback) {
  callback(this.connection.localDescription);
};

RTCPeerConnectionAdapter.prototype.setRemoteDescription = function (description, callback) {
  this.connection.setRemoteDescription(new RTCSessionDescription(description),
    callback,
    callback.bind({}, undefined));
};

RTCPeerConnectionAdapter.prototype.getRemoteDescription = function (callback) {
  callback(this.connection.remoteDescription);
};

RTCPeerConnectionAdapter.prototype.getSignalingState = function (callback) {
  callback(this.connection.signalingState);
};

RTCPeerConnectionAdapter.prototype.updateIce = function (configuration, callback) {
  this.connection.updateIce(configuration);
  callback();
};

RTCPeerConnectionAdapter.prototype.addIceCandidate = function (candidate, callback) {
  this.connection.addIceCandidate(new RTCIceCandidate(candidate),
    callback,
    callback.bind({}, undefined));
};

RTCPeerConnectionAdapter.prototype.getIceGatheringState = function (callback) {
  callback(this.connection.iceGatheringState);
};

RTCPeerConnectionAdapter.prototype.getIceConnectionState = function (callback) {
  callback(this.connection.iceConnectionState);
};

RTCPeerConnectionAdapter.prototype.getConfiguration = function (callback) {
  var configuration = this.connection.getConfiguration();
  callback(configuration);
};

RTCPeerConnectionAdapter.prototype.getLocalStreams = function (callback) {
  callback(undefined, {
    errcode: -1,
    message: "Not Implemented"
  });
};

RTCPeerConnectionAdapter.prototype.getRemoteStreams = function (callback) {
  callback(undefined, {
    errcode: -1,
    message: "Not Implemented"
  });
};

RTCPeerConnectionAdapter.prototype.getStreamById = function (id, callback) {
  callback(undefined, {
    errcode: -1,
    message: "Not Implemented"
  });
};

RTCPeerConnectionAdapter.prototype.addStream = function (id, callback) {
  callback(undefined, {
    errcode: -1,
    message: "Not Implemented"
  });
};

RTCPeerConnectionAdapter.prototype.removeStream = function (id, callback) {
  callback(undefined, {
    errcode: -1,
    message: "Not Implemented"
  });
};

RTCPeerConnectionAdapter.prototype.close = function (callback) {
  if (!this.connection) {
    return callback();
  }
  this.manageEvents(false);
  try {
    this.connection.close();
    callback();
  } catch (e) {
    callback(undefined, {
      errcode: e.name,
      message: e.message
    });
  }
};

RTCPeerConnectionAdapter.prototype.createDataChannel = function (label, dataChannelDict, callback) {
  var id = DataChannel.allocate(this.connection.createDataChannel(label, dataChannelDict));
  callback(id);
};

RTCPeerConnectionAdapter.prototype.getStats = function (callback) {
  this.connection.getStats(callback, callback.bind(this, undefined));
};

RTCPeerConnectionAdapter.prototype.ondatachannel = function (event) {
  var id = DataChannel.allocate(event.channel);
  this.dispatchEvent('ondatachannel', {channel: id});
};

RTCPeerConnectionAdapter.prototype.onnegotiationneeded = function (event) {
  console.warn('on negotiation eeded');
  this.dispatchEvent('onnegotiationneeded', event.message);
};

RTCPeerConnectionAdapter.prototype.onicecandidate = function (event) {
  var msg;
  if (event.candidate && event.candidate.candidate) {
    msg = {
      candidate: {
        candidate: event.candidate.candidate,
        sdpMid: event.candidate.sdpMid,
        sdpMLineIndex: event.candidate.sdpMLineIndex
      }
    };
  } else {
    msg = {
      candidate: null
    };
  }
  this.dispatchEvent('onicecandidate', msg);
};
  
RTCPeerConnectionAdapter.prototype.onsignalingstatechange = function (event) {
  this.dispatchEvent('onsignalingstatechange', event.message);
};
  
RTCPeerConnectionAdapter.prototype.onaddstream = function (event) {
  //TODO: provide ID of allocated stream.
  this.dispatchEvent('onaddstream', event.stream);
};
  
RTCPeerConnectionAdapter.prototype.onremovestream = function (event) {
  //TODO: provide ID of deallocated stream.
  this.dispatchEvent('onremovestream', event.stream);
};
  
RTCPeerConnectionAdapter.prototype.oniceconnectionstatechange = function (event) {
  this.dispatchEvent('oniceconnectionstatechange', event.message);
};
  

exports.name = "core.rtcpeerconnection";
exports.provider = RTCPeerConnectionAdapter;

},{"./core.rtcdatachannel":13,"webrtc-adapter":41}],15:[function(require,module,exports){
/*jslint indent:2,white:true,sloppy:true,node:true */
var EventInterface = require('../../src/proxy/eventInterface');
var Consumer = require('../../src/consumer');
var util = require('../../src/util');

/**
 * Core freedom services available to all modules.
 * Created by the environment helper in response to a 'core' request.
 * @Class Core_unprivileged
 * @constructor
 * @param {Manager} manager The manager this core is connected with.
 * @private
 */
var Core_unprivileged = function(manager, postMessage) {
  this.manager = manager;
  this.debug = this.manager.debug;
};

Core_unprivileged.unboundChannels = {};

Core_unprivileged.contextId = undefined;

/**
 * Create a custom channel.
 * Returns the structure {channel: Proxy, identifier: Object},
 * where the identifier can be 'redeemed' by another module or provider using
 * bind channel, at which point the deferred object will resolve with a channel
 * between the two endpoints.
 * @method createChannel
 * @params {Function} continuation Method to call with the cosntructed structure.
 */
Core_unprivileged.prototype.createChannel = function(continuation) {
  var proxy = new Consumer(EventInterface, this.manager.debug),
      id = util.getId(),
      chan = this.getChannel(proxy);
  this.manager.setup(proxy);

  if (this.manager.delegate && this.manager.toDelegate.core) {
    this.manager.emit(this.manager.delegate, {
      type: 'Delegation',
      request: 'handle',
      flow: 'core',
      message: {
        type: 'register',
        id: id
      }
    });
  }
  Core_unprivileged.unboundChannels[id] = {
    local: true,
    proxy: proxy
  };

  proxy.once('start', this.getChannel.bind(this, proxy));

  continuation({
    channel: chan,
    identifier: id
  });
};

Core_unprivileged.prototype.getChannel = function(proxy) {
  var iface = proxy.getProxyInterface(),
      chan = iface();
  chan.close = iface.close;
  chan.onClose = iface.onClose;
  iface.onClose(chan, function() {
    proxy.doClose();
  });
  return chan;
};

/**
 * Receive a message from another core instance.
 * Note: Core_unprivileged is not registered on the hub. it is a provider,
 *     as it's location and name would indicate. This function is called by
 *     port-app to relay messages up to higher levels.  More generally, the
 *     messages emitted by the core to 'this.manager.emit(this.mananage.delegate'
 *     Should be onMessaged to the controlling core.
 * @param {String} source The source of the message.
 * @param {Object} msg The messsage from an isolated core provider.
 */
Core_unprivileged.prototype.onMessage = function(source, msg) {
  if (msg.type === 'register') {
    Core_unprivileged.unboundChannels[msg.id] = {
      remote: true,
      resolve: msg.reply,
      source: source
    };
  } else if (msg.type === 'clear') {
    delete Core_unprivileged.unboundChannels[msg.id];
  } else if (msg.type === 'bind') {
    if (Core_unprivileged.unboundChannels[msg.id]) {
      this.bindChannel(msg.id, function() {}, source);
    }
  }
};

/**
 * Bind a custom channel.
 * Creates a proxy interface to the custom channel, which will be bound to
 * the proxy obtained through an earlier createChannel call.
 * channel to a proxy.
 * @method bindChannel
 * @param {Object} identifier An identifier obtained through createChannel.
 * @param {Function} continuation A function to be called with the proxy.
 */
Core_unprivileged.prototype.bindChannel = function(identifier, continuation, source) {
  var toBind = Core_unprivileged.unboundChannels[identifier],
      newSource = !source;

  // when bindChannel is called directly, source will be undefined.
  // When it is propogated by onMessage, a source for binding will already exist.
  if (newSource) {
    this.debug.debug('making local proxy for core binding');
    source = new Consumer(EventInterface, this.debug);
    this.manager.setup(source);
  }

  // If this is a known identifier and is in the same context, binding is easy.
  if (toBind && toBind.local) {
    this.debug.debug('Binding a channel to port on this hub:' + source);
    this.manager.createLink(source, identifier, toBind.proxy, 'default');
    delete Core_unprivileged.unboundChannels[identifier];
    if (this.manager.delegate && this.manager.toDelegate.core) {
      this.manager.emit(this.manager.delegate, {
        type: 'Delegation',
        request: 'handle',
        flow: 'core',
        message: {
          type: 'clear',
          id: identifier
        }
      });
    }
  } else if (toBind && toBind.remote) {
    this.debug.debug('Binding a channel into a module.');
    this.manager.createLink(
        source,
        newSource ? 'default' : identifier,
        toBind.source,
        identifier);
    toBind.resolve({
      type: 'Bind Channel',
      request:'core',
      flow: 'core',
      message: {
        type: 'bind',
        id: identifier
      }
    });
    delete Core_unprivileged.unboundChannels[identifier];
  } else if (this.manager.delegate && this.manager.toDelegate.core) {
    this.debug.info('delegating channel bind for an unknown ID:' + identifier);
    this.manager.emit(this.manager.delegate, {
      type: 'Delegation',
      request: 'handle',
      flow: 'core',
      message: {
        type: 'bind',
        id: identifier
      }
    });
    source.once('start', function(p, cb) {
      cb(this.getChannel(p));
    }.bind(this, source, continuation));
    this.manager.createLink(source,
        'default',
        this.manager.hub.getDestination(this.manager.delegate),
        identifier);
    delete Core_unprivileged.unboundChannels[identifier];
    return;
  } else {
    this.debug.warn('Asked to bind unknown channel: ' + identifier);
    this.debug.log(Core_unprivileged.unboundChannels);
    continuation();
    return;
  }

  if (source.getInterface) {
    continuation(this.getChannel(source));
  } else {
    continuation();
  }
};

/**
 * Get the ID of the current freedom.js context.  Provides an
 * array of module URLs, the lineage of the current context.
 * When not in an application context, the ID is the lineage
 * of the current View.
 * @method getId
 * @param {Function} callback The function called with ID information.
 */
Core_unprivileged.prototype.getId = function(callback) {
  // TODO: make sure contextID is properly frozen.
  callback(Core_unprivileged.contextId);
};

/**
 * Get a logger for logging to the freedom.js logger. Provides a
 * log object with an interface similar to the standard javascript console,
 * which logs via debug.
 * @method getLogger
 * @param {String} name The name of the logger, used as its 'source'
 * @param {Function} callback The function to call with the logger.
 */
Core_unprivileged.prototype.getLogger = function(name, callback) {
  callback(this.manager.debug.getLogger(name));
};

/**
 * Set the ID of the current freedom.js context.
 * @method setId
 * @private
 * @param {String[]} id The lineage of the current context.
 */
Core_unprivileged.prototype.setId = function(id) {
  Core_unprivileged.contextId = id;
};

exports.provider = Core_unprivileged;
exports.name = "core";

},{"../../src/consumer":23,"../../src/proxy/eventInterface":35,"../../src/util":38}],16:[function(require,module,exports){
/*globals console */
/*jslint indent:2,white:true,sloppy:true, node:true */
var util = require('../../src/util');

/**
 * A minimal provider implementing the core.echo interface for interaction with
 * custom channels.  Primarily used for testing the robustness of the custom
 * channel implementation.
 * @Class Echo_unprivileged
 * @constructor
 * @param {Module} mod The module creating this provider.
 */
var Echo_unprivileged = function(mod, dispatchEvent) {
  this.mod = mod;
  this.dispatchEvent = dispatchEvent;
  util.handleEvents(this);

  // The Core object for managing channels.
  this.mod.once('core', function(Core) {
    this.core = new Core();
  }.bind(this));
  this.mod.emit(this.mod.controlChannel, {
    type: 'core request delegated to echo',
    request: 'core'
  });
};

/**
 * Setup the provider to echo on a specific proxy. Subsequent messages
 * From the custom channel bound here will be re-emitted as a message
 * from the provider.  Subsequent messages to the provider will be
 * emitted on the bound channel.
 * @param {Object} proxy The identifier for the custom channel to bind.
 * @param {Function} continuation Function to call when setup is complete.
 * @method setup
 */
Echo_unprivileged.prototype.setup = function(proxy, continuation) {
  continuation();
  if (!this.core) {
    this.dispatchEvent('message', 'no core available to setup proxy with at echo');
    return;
  }

  this.core.bindChannel(proxy, function(chan) {
    if (this.chan) {
      this.chan.close();
    }
    this.chan = chan;
    this.chan.onClose(function() {
      delete this.chan;
    }.bind(this));
    this.dispatchEvent('message', 'channel bound to echo');
    this.chan.on('message', function(m) {
      this.dispatchEvent('message', 'from custom channel: ' + m);
    }.bind(this));
  }.bind(this));
};

/**
 * Send a message to the bound custom channel.
 * @param {String} str The string to send.
 * @param {Function} continuation Function to call when sending is complete.
 * @method send
 */
Echo_unprivileged.prototype.send = function(str, continuation) {
  continuation();
  if (this.chan) {
    this.chan.emit('message', str);
  } else {
    this.dispatchEvent('message', 'no channel available');
  }
};

exports.provider = Echo_unprivileged;
exports.name = "core.echo";

},{"../../src/util":38}],17:[function(require,module,exports){
/*globals console */
/*jslint indent:2,white:true,sloppy:true,node:true */

/**
 * An oAuth meta-provider allowing multiple platform-dependant
 * oAuth implementations to serve as the redirectURL for an oAuth flow.
 * The core implementations are provided in providers/oauth, and are
 * supplemented in platform-dependent repositories.
 *
 */
var OAuth = function(mod, dispatchEvent) {
  this.mod = mod;
  this.dispatchEvent = dispatchEvent;
};

OAuth.handlers = [];

/**
 * Register an oAuth handler.
 *
 * @method register
 * @param {Function(String[], OAuth)} handler
 * @private
 */
OAuth.register = function(handler) {
  OAuth.handlers.push(handler);
};

/**
 * Indicate the initention to initiate an oAuth flow, allowing an appropriate
 * oAuth provider to begin monitoring for redirection.
 *
 * @method initiateOAuth
 * @param {String[]} redirectURIs oAuth redirection URIs registered with the
 *     provider.
 * @param {Function} continuation Function to call when sending is complete.
 * @returns {{redirect:String, state:String}} The chosen redirect URI, and
 *     State to pass to the URI on completion of oAuth.
 */
OAuth.prototype.initiateOAuth = function(redirectURIs, continuation) {
  var promise, i;
  for (i = 0; i < OAuth.handlers.length; i += 1) {
    promise = OAuth.handlers[i](redirectURIs, this);
    if (promise) {
      return promise.then(continuation);
    }
  }
  continuation(null, {
    'errcode': 'UNKNOWN',
    'message': 'No requested redirects can be handled.'
  });
};

exports.register = OAuth.register;
exports.provider = OAuth;
exports.name = 'core.oauth';

},{}],18:[function(require,module,exports){
/*globals console, RTCPeerConnection, webkitRTCPeerConnection */
/*globals mozRTCPeerConnection, RTCSessionDescription, RTCIceCandidate */
/*globals mozRTCSessionDescription, mozRTCIceCandidate */
/*globals ArrayBuffer, Blob */
/*jslint indent:2,sloppy:true,node:true */
/**
 * DataPeer - a class that wraps peer connections and data channels.
 */
// TODO: check that Handling of pranswer is treated appropriately.
var SimpleDataPeerState = {
  DISCONNECTED: 'DISCONNECTED',
  CONNECTING: 'CONNECTING',
  CONNECTED: 'CONNECTED'
};

function SimpleDataPeer(peerName, stunServers, dataChannelCallbacks, mocks) {
  var constraints,
    config,
    i;
  this.peerName = peerName;
  this.channels = {};
  this.dataChannelCallbacks = dataChannelCallbacks;
  this.onConnectedQueue = [];

  if (typeof mocks.RTCPeerConnection !== "undefined") {
    this.RTCPeerConnection = mocks.RTCPeerConnection;
  } else if (typeof webkitRTCPeerConnection !== "undefined") {
    this.RTCPeerConnection = webkitRTCPeerConnection;
  } else if (typeof mozRTCPeerConnection !== "undefined") {
    this.RTCPeerConnection = mozRTCPeerConnection;
  } else {
    throw new Error("This environment does not appear to support RTCPeerConnection");
  }

  if (typeof mocks.RTCSessionDescription !== "undefined") {
    this.RTCSessionDescription = mocks.RTCSessionDescription;
  } else if (typeof RTCSessionDescription !== "undefined") {
    this.RTCSessionDescription = RTCSessionDescription;
  } else if (typeof mozRTCSessionDescription !== "undefined") {
    this.RTCSessionDescription = mozRTCSessionDescription;
  } else {
    throw new Error("This environment does not appear to support RTCSessionDescription");
  }

  if (typeof mocks.RTCIceCandidate !== "undefined") {
    this.RTCIceCandidate = mocks.RTCIceCandidate;
  } else if (typeof RTCIceCandidate !== "undefined") {
    this.RTCIceCandidate = RTCIceCandidate;
  } else if (typeof mozRTCIceCandidate !== "undefined") {
    this.RTCIceCandidate = mozRTCIceCandidate;
  } else {
    throw new Error("This environment does not appear to support RTCIceCandidate");
  }


  constraints = {
    optional: [{DtlsSrtpKeyAgreement: true}]
  };
  // A way to speak to the peer to send SDP headers etc.
  this.sendSignalMessage = null;

  this.pc = null;  // The peer connection.
  // Get TURN servers for the peer connection.
  config = {iceServers: []};
  for (i = 0; i < stunServers.length; i += 1) {
    config.iceServers.push({
      'url' : stunServers[i]
    });
  }
  this.pc = new this.RTCPeerConnection(config, constraints);
  // Add basic event handlers.
  this.pc.addEventListener("icecandidate",
                            this.onIceCallback.bind(this));
  this.pc.addEventListener("negotiationneeded",
                            this.onNegotiationNeeded.bind(this));
  this.pc.addEventListener("datachannel",
                            this.onDataChannel.bind(this));
  this.pc.addEventListener("signalingstatechange", function () {
    // TODO: come up with a better way to detect connection.  We start out
    // as "stable" even before we are connected.
    // TODO: this is not fired for connections closed by the other side.
    // This will be fixed in m37, at that point we should dispatch an onClose
    // event here for freedom.transport to pick up.
    if (this.pc.signalingState === "stable") {
      this.pcState = SimpleDataPeerState.CONNECTED;
      this.onConnectedQueue.map(function (callback) { callback(); });
    }
  }.bind(this));
  // This state variable is used to fake offer/answer when they are wrongly
  // requested and we really just need to reuse what we already have.
  this.pcState = SimpleDataPeerState.DISCONNECTED;

  // Note: to actually do something with data channels opened by a peer, we
  // need someone to manage "datachannel" event.
}

SimpleDataPeer.prototype.createOffer = function (constaints, continuation) {
  this.pc.createOffer(continuation, function () {
    console.error('core.peerconnection createOffer failed.');
  }, constaints);
};

SimpleDataPeer.prototype.runWhenConnected = function (func) {
  if (this.pcState === SimpleDataPeerState.CONNECTED) {
    func();
  } else {
    this.onConnectedQueue.push(func);
  }
};

SimpleDataPeer.prototype.send = function (channelId, message, continuation) {
  this.channels[channelId].send(message);
  continuation();
};

SimpleDataPeer.prototype.openDataChannel = function (channelId, continuation) {
  var dataChannel = this.pc.createDataChannel(channelId, {});
  dataChannel.onopen = function () {
    this.addDataChannel(channelId, dataChannel);
    continuation();
  }.bind(this);
  dataChannel.onerror = function (err) {
    //@(ryscheng) todo - replace with errors that work across the interface
    console.error(err);
    continuation(undefined, err);
  };
  // Firefox does not fire "negotiationneeded", so we need to
  // negotate here if we are not connected.
  // See https://bugzilla.mozilla.org/show_bug.cgi?id=840728
  if (typeof mozRTCPeerConnection !== "undefined" &&
      this.pcState === SimpleDataPeerState.DISCONNECTED) {
    this.negotiateConnection();
  }
};

SimpleDataPeer.prototype.closeChannel = function (channelId) {
  if (this.channels[channelId] !== undefined) {
    this.channels[channelId].close();
    delete this.channels[channelId];
  }
};

SimpleDataPeer.prototype.getBufferedAmount = function (channelId,
                                                       continuation) {
  if (this.channels[channelId] !== undefined) {
    var dataChannel = this.channels[channelId];
    return dataChannel.bufferedAmount;
  }
  throw new Error("No channel with id: " + channelId);
};

SimpleDataPeer.prototype.setSendSignalMessage = function (sendSignalMessageFn) {
  this.sendSignalMessage = sendSignalMessageFn;
};

// Handle a message send on the signalling channel to this peer.
SimpleDataPeer.prototype.handleSignalMessage = function (messageText) {
  //console.log(this.peerName + ": " + "handleSignalMessage: \n" + messageText);
  var json = JSON.parse(messageText),
    ice_candidate;

  // TODO: If we are offering and they are also offerring at the same time,
  // pick the one who has the lower randomId?
  // (this.pc.signalingState == "have-local-offer" && json.sdp &&
  //    json.sdp.type == "offer" && json.sdp.randomId < this.localRandomId)
  if (json.sdp) {
    // Set the remote description.
    this.pc.setRemoteDescription(
      new this.RTCSessionDescription(json.sdp),
      // Success
      function () {
        //console.log(this.peerName + ": setRemoteDescription succeeded");
        if (this.pc.remoteDescription.type === "offer") {
          this.pc.createAnswer(this.onDescription.bind(this),
                               console.error);
        }
      }.bind(this),
      // Failure
      function (e) {
        console.error(this.peerName + ": " +
            "setRemoteDescription failed:", e);
      }.bind(this)
    );
  } else if (json.candidate) {
    // Add remote ice candidate.
    //console.log(this.peerName + ": Adding ice candidate: " + JSON.stringify(json.candidate));
    ice_candidate = new this.RTCIceCandidate(json.candidate);
    this.pc.addIceCandidate(ice_candidate);
  } else {
    console.warn(this.peerName + ": " +
        "handleSignalMessage got unexpected message: ", messageText);
  }
};

// Connect to the peer by the signalling channel.
SimpleDataPeer.prototype.negotiateConnection = function () {
  this.pcState = SimpleDataPeerState.CONNECTING;
  this.pc.createOffer(
    this.onDescription.bind(this),
    function (e) {
      console.error(this.peerName + ": " +
          "createOffer failed: ", e.toString());
      this.pcState = SimpleDataPeerState.DISCONNECTED;
    }.bind(this)
  );
};

SimpleDataPeer.prototype.isClosed = function () {
  return !this.pc || this.pc.signalingState === "closed";
};

SimpleDataPeer.prototype.close = function () {
  if (!this.isClosed()) {
    this.pc.close();
  }
  //console.log(this.peerName + ": " + "Closed peer connection.");
};

SimpleDataPeer.prototype.addDataChannel = function (channelId, channel) {
  var callbacks = this.dataChannelCallbacks;
  this.channels[channelId] = channel;

  if (channel.readyState === "connecting") {
    channel.onopen = callbacks.onOpenFn.bind(this, channel, {label: channelId});
  }

  channel.onclose = callbacks.onCloseFn.bind(this, channel, {label: channelId});

  channel.onmessage = callbacks.onMessageFn.bind(this, channel,
                                                 {label: channelId});

  channel.onerror = callbacks.onErrorFn.bind(this, channel, {label: channel});
};

// When we get our description, we set it to be our local description and
// send it to the peer.
SimpleDataPeer.prototype.onDescription = function (description) {
  if (this.sendSignalMessage) {
    this.pc.setLocalDescription(
      description,
      function () {
        //console.log(this.peerName + ": setLocalDescription succeeded");
        this.sendSignalMessage(JSON.stringify({'sdp': description}));
      }.bind(this),
      function (e) {
        console.error(this.peerName + ": " +
            "setLocalDescription failed:", e);
      }.bind(this)
    );
  } else {
    console.error(this.peerName + ": " +
        "_onDescription: _sendSignalMessage is not set, so we did not " +
            "set the local description. ");
  }
};

SimpleDataPeer.prototype.onNegotiationNeeded = function (e) {
  //console.log(this.peerName + ": " + "onNegotiationNeeded",
  //            JSON.stringify(this._pc), e);
  if (this.pcState !== SimpleDataPeerState.DISCONNECTED) {
    // Negotiation messages are falsely requested for new data channels.
    //   https://code.google.com/p/webrtc/issues/detail?id=2431
    // This code is a hack to simply reset the same local and remote
    // description which will trigger the appropriate data channel open event.
    // TODO: fix/remove this when Chrome issue is fixed.
    var logSuccess = function (op) {
      return function () {
        //console.log(this.peerName + ": " + op + " succeeded ");
      }.bind(this);
    }.bind(this),
      logFail = function (op) {
        return function (e) {
          //console.log(this.peerName + ": " + op + " failed: " + e);
        }.bind(this);
      }.bind(this);
    if (this.pc.localDescription && this.pc.remoteDescription &&
        this.pc.localDescription.type === "offer") {
      this.pc.setLocalDescription(this.pc.localDescription,
                                   logSuccess("setLocalDescription"),
                                   logFail("setLocalDescription"));
      this.pc.setRemoteDescription(this.pc.remoteDescription,
                                    logSuccess("setRemoteDescription"),
                                    logFail("setRemoteDescription"));
    } else if (this.pc.localDescription && this.pc.remoteDescription &&
        this.pc.localDescription.type === "answer") {
      this.pc.setRemoteDescription(this.pc.remoteDescription,
                                    logSuccess("setRemoteDescription"),
                                    logFail("setRemoteDescription"));
      this.pc.setLocalDescription(this.pc.localDescription,
                                   logSuccess("setLocalDescription"),
                                   logFail("setLocalDescription"));
    } else {
      console.error(this.peerName + ', onNegotiationNeeded failed');
    }
    return;
  }
  this.negotiateConnection();
};

SimpleDataPeer.prototype.onIceCallback = function (event) {
  if (event.candidate) {
    // Send IceCandidate to peer.
    //console.log(this.peerName + ": " + "ice callback with candidate", event);
    if (this.sendSignalMessage) {
      this.sendSignalMessage(JSON.stringify({'candidate': event.candidate}));
    } else {
      console.warn(this.peerName + ": " + "_onDescription: _sendSignalMessage is not set.");
    }
  }
};

SimpleDataPeer.prototype.onSignalingStateChange = function () {
  //console.log(this.peerName + ": " + "onSignalingStateChange: ", this._pc.signalingState);
  if (this.pc.signalingState === "stable") {
    this.pcState = SimpleDataPeerState.CONNECTED;
    this.onConnectedQueue.map(function (callback) { callback(); });
  }
};

SimpleDataPeer.prototype.onDataChannel = function (event) {
  this.addDataChannel(event.channel.label, event.channel);
  // RTCDataChannels created by a RTCDataChannelEvent have an initial
  // state of open, so the onopen event for the channel will not
  // fire. We need to fire the onOpenDataChannel event here
  // http://www.w3.org/TR/webrtc/#idl-def-RTCDataChannelState

  // Firefox channels do not have an initial state of "open"
  // See https://bugzilla.mozilla.org/show_bug.cgi?id=1000478
  if (event.channel.readyState === "open") {
    this.dataChannelCallbacks.onOpenFn(event.channel,
                                       {label: event.channel.label});
  }
};

// _signallingChannel is a channel for emitting events back to the freedom Hub.
function PeerConnection(portModule, dispatchEvent,
                        RTCPeerConnection, RTCSessionDescription,
                        RTCIceCandidate) {
  // Channel for emitting events to consumer.
  this.dispatchEvent = dispatchEvent;

  // a (hopefully unique) ID for debugging.
  this.peerName = "p" + Math.random();

  // This is the portApp (defined in freedom/src/port-app.js). A way to speak
  // to freedom.
  this.freedomModule = portModule;

  // For tests we may mock out the PeerConnection and
  // SessionDescription implementations
  this.RTCPeerConnection = RTCPeerConnection;
  this.RTCSessionDescription = RTCSessionDescription;
  this.RTCIceCandidate = RTCIceCandidate;

  // This is the a channel to send signalling messages.
  this.signallingChannel = null;

  // The DataPeer object for talking to the peer.
  this.peer = null;

  // The Core object for managing channels.
  this.freedomModule.once('core', function (Core) {
    this.core = new Core();
  }.bind(this));
  this.freedomModule.emit(this.freedomModule.controlChannel, {
    type: 'core request delegated to peerconnection',
    request: 'core'
  });
}

// Start a peer connection using the given freedomChannelId as the way to
// communicate with the peer. The argument |freedomChannelId| is a way to speak
// to an identity provide to send them SDP headers negotiate the address/port to
// setup the peer to peerConnection.
//
// options: {
//   peerName: string,   // For pretty printing messages about this peer.
//   debug: boolean           // should we add extra
// }
PeerConnection.prototype.setup = function (signallingChannelId, peerName,
                                           stunServers, initiateConnection,
                                           continuation) {
  this.peerName = peerName;
  var mocks = {RTCPeerConnection: this.RTCPeerConnection,
               RTCSessionDescription: this.RTCSessionDescription,
               RTCIceCandidate: this.RTCIceCandidate},
    self = this,
    dataChannelCallbacks = {
      // onOpenFn is called at the point messages will actually get through.
      onOpenFn: function (dataChannel, info) {
        self.dispatchEvent("onOpenDataChannel",
                         { channelId: info.label});
      },
      onCloseFn: function (dataChannel, info) {
        self.dispatchEvent("onCloseDataChannel",
                         { channelId: info.label});
      },
      // Default on real message prints it to console.
      onMessageFn: function (dataChannel, info, event) {
        if (event.data instanceof ArrayBuffer) {
          self.dispatchEvent('onReceived', {
            'channelLabel': info.label,
            'buffer': event.data
          });
        } else if (event.data instanceof Blob) {
          self.dispatchEvent('onReceived', {
            'channelLabel': info.label,
            'binary': event.data
          });
        } else if (typeof (event.data) === 'string') {
          self.dispatchEvent('onReceived', {
            'channelLabel': info.label,
            'text': event.data
          });
        }
      },
      // Default on error, prints it.
      onErrorFn: function (dataChannel, info, err) {
        console.error(dataChannel.peerName + ": dataChannel(" +
                      dataChannel.dataChannel.label + "): error: ", err);
      }
    },
    channelId,
    openDataChannelContinuation;

  this.peer = new SimpleDataPeer(this.peerName, stunServers,
                                 dataChannelCallbacks, mocks);

  // Setup link between Freedom messaging and _peer's signalling.
  // Note: the signalling channel should only be sending receiveing strings.
  this.core.bindChannel(signallingChannelId, function (channel) {
    this.signallingChannel = channel;
    this.peer.setSendSignalMessage(function (msg) {
      this.signallingChannel.emit('message', msg);
    }.bind(this));
    this.signallingChannel.on('message',
        this.peer.handleSignalMessage.bind(this.peer));
    this.signallingChannel.emit('ready');
    if (!initiateConnection) {
      this.peer.runWhenConnected(continuation);
    }
  }.bind(this));

  if (initiateConnection) {
    // Setup a connection right away, then invoke continuation.
    console.log(this.peerName + ' initiating connection');
    channelId = 'hello' + Math.random().toString();
    openDataChannelContinuation = function (success, error) {
      if (error) {
        continuation(undefined, error);
      } else {
        this.closeDataChannel(channelId, continuation);
      }
    }.bind(this);
    this.openDataChannel(channelId, openDataChannelContinuation);
  }
};

PeerConnection.prototype.createOffer = function (constraints, continuation) {
  this.peer.createOffer(constraints, continuation);
};

// TODO: delay continuation until the open callback from _peer is called.
PeerConnection.prototype.openDataChannel = function (channelId, continuation) {
  this.peer.openDataChannel(channelId, continuation);
};

PeerConnection.prototype.closeDataChannel = function (channelId, continuation) {
  this.peer.closeChannel(channelId);
  continuation();
};

// Called to send a message over the given datachannel to a peer. If the data
// channel doesn't already exist, the DataPeer creates it.
PeerConnection.prototype.send = function (sendInfo, continuation) {
  var objToSend = sendInfo.text || sendInfo.buffer || sendInfo.binary;
  if (typeof objToSend === 'undefined') {
    console.error("No valid data to send has been provided.", sendInfo);
    return;
  }
  //DEBUG
  // objToSend = new ArrayBuffer(4);
  //DEBUG
  this.peer.send(sendInfo.channelLabel, objToSend, continuation);
};

PeerConnection.prototype.getBufferedAmount = function (channelId, continuation) {
  continuation(this.peer.getBufferedAmount(channelId));
};

PeerConnection.prototype.close = function (continuation) {
  if (this.peer.isClosed()) {
    // Peer already closed, run continuation without dispatching event.
    continuation();
    return;
  }
  this.peer.close();
  this.dispatchEvent("onClose");
  continuation();
};

exports.provider = PeerConnection;
exports.name = 'core.peerconnection';

},{}],19:[function(require,module,exports){
/*globals document */
/*jslint indent:2,sloppy:true,node:true */
var util = require('../../src/util');

/**
 * A freedom.js view is the interface for user interaction.
 * A view exists as an iFrame, which is shown to the user in some way.
 * communication between the view and the freedom.js module is performed
 * through the HTML5 postMessage mechanism, which this provider translates
 * to freedom.js message events.
 * @Class View_unprivileged
 * @constructor
 * @private
 * @param {port.Module} caller The module creating this provider.
 * @param {Function} dispatchEvent Function to call to emit events.
 */
var View_unprivileged = function (caller, dispatchEvent) {
  this.dispatchEvent = dispatchEvent;
  this.host = null;
  this.win = null;
  this.module = caller;
  util.handleEvents(this);
};

/**
 * Ask for this view to open a specific location, either a File relative to
 * the loader, or an explicit code location.
 * @method open
 * @param {String} name The identifier of the view. Used to choose attachment.
 * @param {Object} what What UI to load.
 * @param {Function} continuation Function to call when view is loaded.
 */
View_unprivileged.prototype.open = function (name, what, continuation) {
  this.host = document.createElement("div");
  this.host.style.width = "100%";
  this.host.style.height = "100%";
  this.host.style.display = "relative";

  var container = document.body,
    config = this.module.manifest.views,
    root,
    frame;
  if (config && config[name] && document.getElementById(name)) {
    container = document.getElementById(name);
  }

  container.appendChild(this.host);
  root = this.host;
  // TODO(willscott): Support shadow root as available.
  // if (this.host['webkitCreateShadowRoot']) {
  //   root = this.host['webkitCreateShadowRoot']();
  // }
  frame = document.createElement("iframe");
  frame.setAttribute("sandbox", "allow-scripts allow-forms");
  if (what.file) {
    this.module.resource.get(this.module.manifestId, what.file).then(
      function (fname) {
        this.finishOpen(root, frame, fname, continuation);
      }.bind(this)
    );
  } else if (what.code) {
    this.finishOpen(root, frame, "data:text/html;charset=utf-8," + what.code,
                    continuation);
  } else {
    continuation(false);
  }
};

View_unprivileged.prototype.finishOpen = function (root, frame, src,
    continuation) {
  frame.src = src;
  frame.style.width = "100%";
  frame.style.height = "100%";
  frame.style.border = "0";
  frame.style.background = "transparent";
  root.appendChild(frame);

  this.module.config.global.addEventListener('message',
      this.onMessage.bind(this), true);

  this.win = frame;
  continuation();
};

View_unprivileged.prototype.show = function (continuation) {
  continuation();
};

View_unprivileged.prototype.postMessage = function (args, continuation) {
  this.win.contentWindow.postMessage(args, '*');
  continuation();
};

View_unprivileged.prototype.close = function (continuation) {
  if (this.host) {
    this.host.parentNode.removeChild(this.host);
    this.host = null;
  }
  if (this.win) {
    this.module.config.global.removeEventListener('message',
        this.onMessage.bind(this), true);
    this.win = null;
  }
  continuation();
};

View_unprivileged.prototype.onMessage = function (m) {
  if (m.source === this.win.contentWindow) {
    this.dispatchEvent('message', m.data);
  }
};

exports.provider = View_unprivileged;
exports.name = 'core.view';

},{"../../src/util":38}],20:[function(require,module,exports){
/*globals WebSocket, ArrayBuffer, Blob, Uint8Array, console */
/*jslint sloppy:true, node:true */

var WSHandle = null;
var nodeStyle = false;

/**
 * A WebSocket core provider
 *
 * @param {port.Module} module The Module requesting this provider
 * @param {Function} dispatchEvent Function to dispatch events.
 * @param {String} url The Remote URL to connect with.
 * @param {String[]} protocols SubProtocols to open.
 * @param {WebSocket?} socket An alternative socket class to use.
 */
var WS = function (module, dispatchEvent, url, protocols, socket) {
  var WSImplementation = null,
    error;
  this.isNode = nodeStyle;
  if (typeof socket !== 'undefined') {
    WSImplementation = socket;
  } else if (WSHandle !== null) {
    WSImplementation = WSHandle;
  } else if (typeof WebSocket !== 'undefined') {
    WSImplementation = WebSocket;
  } else {
    console.error('Platform does not support WebSocket');
  }

  this.dispatchEvent = dispatchEvent;
  try {
    if (protocols) {
      this.websocket = new WSImplementation(url, protocols);
    } else {
      this.websocket = new WSImplementation(url);
    }
    this.websocket.binaryType = 'arraybuffer';
  } catch (e) {
    error = {};
    if (e instanceof SyntaxError) {
      error.errcode = 'SYNTAX';
    } else {
      error.errcode = e.name;
    }
    error.message = e.message;
    dispatchEvent('onError', error);
    return;
  }

  if (this.isNode) {
    this.websocket.on('message', this.onMessage.bind(this));
    this.websocket.on('open', this.onOpen.bind(this));
    // node.js websocket implementation not compliant
    this.websocket.on('close', this.onClose.bind(this, {
      code: 0,
      reason: 'UNKNOWN',
      wasClean: true
    }));
    this.websocket.on('error', this.onError.bind(this));
  } else {
    this.websocket.onopen = this.onOpen.bind(this);
    this.websocket.onclose = this.onClose.bind(this);
    this.websocket.onmessage = this.onMessage.bind(this);
    this.websocket.onerror = this.onError.bind(this);
  }
};

WS.prototype.send = function (data, continuation) {
  var toSend = data.text || data.binary || data.buffer,
    errcode,
    message;

  if (toSend) {
    try {
      // For node.js, we have to do weird buffer stuff
      if (this.isNode && toSend instanceof ArrayBuffer) {
        this.websocket.send(
          new Uint8Array(toSend),
          { binary: true },
          this.onError.bind(this)
        );
      } else {
        this.websocket.send(toSend);
      }
    } catch (e) {
      if (e instanceof SyntaxError) {
        errcode = "SYNTAX";
      } else {
        errcode = "INVALID_STATE";
      }
      message = e.message;
    }
  } else {
    errcode = "BAD_SEND";
    message = "No text, binary, or buffer data found.";
  }

  if (errcode) {
    continuation(undefined, {
      errcode: errcode,
      message: message
    });
  } else {
    continuation();
  }
};

WS.prototype.getReadyState = function (continuation) {
  continuation(this.websocket.readyState);
};

WS.prototype.getBufferedAmount = function (continuation) {
  continuation(this.websocket.bufferedAmount);
};

WS.prototype.close = function (code, reason, continuation) {
  try {
    if (code && reason) {
      this.websocket.close(code, reason);
    } else {
      this.websocket.close();
    }
    continuation();
  } catch (e) {
    var errorCode;
    if (e instanceof SyntaxError) {
      errorCode = "SYNTAX";
    } else {
      errorCode = "INVALID_ACCESS";
    }
    continuation(undefined, {
      errcode: errorCode,
      message: e.message
    });
  }
};

WS.prototype.onOpen = function (event) {
  this.dispatchEvent('onOpen');
};

WS.prototype.onMessage = function (event, flags) {
  var data = {};
  if (this.isNode && flags && flags.binary) {
    data.buffer = new Uint8Array(event).buffer;
  } else if (this.isNode) {
    data.text = event;
  } else if (typeof ArrayBuffer !== 'undefined' && event.data instanceof ArrayBuffer) {
    data.buffer = event.data;
  } else if (typeof Blob !== 'undefined' && event.data instanceof Blob) {
    data.binary = event.data;
  } else if (typeof event.data === 'string') {
    data.text = event.data;
  }
  this.dispatchEvent('onMessage', data);
};

WS.prototype.onError = function (event) {
  // Nothing to pass on
  // See: http://stackoverflow.com/a/18804298/300539
  this.dispatchEvent('onError');
};

WS.prototype.onClose = function (event) {
  this.dispatchEvent('onClose',
                     {code: event.code,
                      reason: event.reason,
                      wasClean: event.wasClean});
};

exports.provider = WS;
exports.name = 'core.websocket';
exports.setSocket = function(impl, isNode) {
  WSHandle = impl;
  nodeStyle = isNode;
};

},{}],21:[function(require,module,exports){
/*jslint indent:2,white:true,node:true,sloppy:true */
var PromiseCompat = require('es6-promise').Promise;

/**
 * The API registry for freedom.js.  Used to look up requested APIs,
 * and provides a bridge for core APIs to act like normal APIs.
 * @Class API
 * @param {Debug} debug The debugger to use for logging.
 * @constructor
 */
var Api = function(debug) {
  this.debug = debug;
  this.apis = {};
  this.providers = {};
  this.waiters = {};
};

/**
 * Get an API.
 * @method get
 * @param {String} api The API name to get.
 * @returns {{name:String, definition:API}} The API if registered.
 */
Api.prototype.get = function(api) {
  if (!this.apis[api]) {
    return false;
  }
  return {
    name: api,
    definition: this.apis[api]
  };
};

/**
 * Set an API to a definition.
 * @method set
 * @param {String} name The API name.
 * @param {API} definition The JSON object defining the API.
 */
Api.prototype.set = function(name, definition) {
  this.apis[name] = definition;
};

/**
 * Register a core API provider.
 * @method register
 * @param {String} name the API name.
 * @param {Function} constructor the function to create a provider for the API.
 * @param {String?} style The style the provider is written in. Valid styles
 *   are documented in fdom.port.Provider.prototype.getInterface. Defaults to
 *   provideAsynchronous
 */
Api.prototype.register = function(name, constructor, style) {
  var i;

  this.providers[name] = {
    constructor: constructor,
    style: style || 'provideAsynchronous'
  };

  if (this.waiters[name]) {
    for (i = 0; i < this.waiters[name].length; i += 1) {
      this.waiters[name][i].resolve(constructor.bind({},
          this.waiters[name][i].from));
    }
    delete this.waiters[name];
  }
};

/**
 * Get a core API connected to a given FreeDOM module.
 * @method getCore
 * @param {String} name the API to retrieve.
 * @param {port.App} from The instantiating App.
 * @returns {Promise} A promise of a fdom.App look-alike matching
 * a local API definition.
 */
Api.prototype.getCore = function(name, from) {
  return new PromiseCompat(function(resolve, reject) {
    if (this.apis[name]) {
      if (this.providers[name]) {
        resolve(this.providers[name].constructor.bind({}, from));
      } else {
        if (!this.waiters[name]) {
          this.waiters[name] = [];
        }
        this.waiters[name].push({
          resolve: resolve,
          reject: reject,
          from: from
        });
      }
    } else {
      this.debug.warn('Api.getCore asked for unknown core: ' + name);
      reject(null);
    }
  }.bind(this));
};

/**
 * Get the style in which a core API is written.
 * This method is guaranteed to know the style of a provider returned from
 * a previous getCore call, and so does not use promises.
 * @method getInterfaceStyle
 * @param {String} name The name of the provider.
 * @returns {String} The coding style, as used by
 *   fdom.port.Provider.prototype.getInterface.
 */
Api.prototype.getInterfaceStyle = function(name) {
  if (this.providers[name]) {
    return this.providers[name].style;
  } else {
    this.debug.warn('Api.getInterfaceStyle for unknown provider: ' + name);
    return undefined;
  }
};

/**
 * Defines the apis module and provider registry.
 */
module.exports = Api;

},{"es6-promise":undefined}],22:[function(require,module,exports){
(function (__dirname){
/*jslint indent:2,node:true */
var includeFolder = undefined;
var minify = require('node-json-minify');

var util = require('./util');

var Bundle = function () {
  'use strict';
  var found;
  this.interfaces = [];
  /*jslint nomen: true */
  try {
    found = (function(){var self={},fs = require('fs');
self.console = "{\n  \"name\": \"console\",\n  \"api\": {\n    // Log(source, message)\n    \"log\": {\"type\": \"method\", \"value\": [\"string\", \"string\"]},\n    \"debug\": {\"type\": \"method\", \"value\": [\"string\", \"string\"]},\n    \"info\": {\"type\": \"method\", \"value\": [\"string\", \"string\"]},\n    \"warn\": {\"type\": \"method\", \"value\": [\"string\", \"string\"]},\n    \"error\": {\"type\": \"method\", \"value\": [\"string\", \"string\"]}\n  }\n}\n";
self.coreConsole = "{\n  \"name\": \"core.console\",\n  \"api\": {\n    // Log(source, message)\n    \"log\": {\"type\": \"method\", \"value\": [\"string\", \"string\"]},\n    \"debug\": {\"type\": \"method\", \"value\": [\"string\", \"string\"]},\n    \"info\": {\"type\": \"method\", \"value\": [\"string\", \"string\"]},\n    \"warn\": {\"type\": \"method\", \"value\": [\"string\", \"string\"]},\n    \"error\": {\"type\": \"method\", \"value\": [\"string\", \"string\"]}\n  }\n}\n";
self.coreEcho = "{\n  \"name\": \"core.echo\",\n  \"api\": {\n    \"setup\": {\"type\": \"method\", \"value\": [\"string\"]},\n    \"send\": {\"type\": \"method\", \"value\": [\"string\"]},\n    \"message\": {\"type\": \"event\", \"value\": \"string\"}\n  }\n}";
self.core = "{\n  \"name\": \"core\",\n  \"api\": {\n    \"createChannel\": {\"type\": \"method\", \"value\": [], \"ret\": {\n      \"channel\": \"proxy\",\n      \"identifier\": \"string\"\n    }},\n    \"bindChannel\": {\"type\": \"method\", \"value\": [\"string\"], \"ret\": \"proxy\"},\n    \"getId\": {\"type\": \"method\", \"value\": [], \"ret\": [\"array\", \"string\"]},\n    \"getLogger\": {\"type\": \"method\", \"value\": [\"string\"], \"ret\": \"proxy\"}\n  }\n}\n";
self.coreOauth = "{\n  \"name\": \"core.oauth\",\n  \"api\": {\n    /**\n     * An oAuth event has occured\n     * @return {String} The URL received by the oAuth provider.\n     **/\n    \"oAuthEvent\": {\n      \"type\": \"event\",\n      \"value\": \"string\"\n    },\n  \n    /**\n     * Express interest in initiating an oAuth flow.\n     *\n     * @method initiateOAuth\n     * @param {String[]} Valid oAuth redirect URLs for your application.\n     * @returns {{redirect:String, state:String}} A chosen redirect URI, and\n     *     state which will be monitored for oAuth redirection, if one is\n     *     available.\n     */\n    \"initiateOAuth\": {\n      \"type\": \"method\",\n      \"value\": [[\"array\", \"string\"]],\n      \"ret\": {\n        \"redirect\": \"string\",\n        \"state\": \"string\"\n      },\n      \"err\": {\n        \"errcode\": \"string\",\n        \"message\": \"string\"\n      }\n    }\n  }\n}\n";
self.corePeerconnection = "{\n  \"name\": \"core.peerconnection\",\n  \"api\": {\n    // Setup the link to the peer and options for this peer connection.\n    \"setup\": {\n      \"type\": \"method\",\n      \"value\": [\n        // The freedom.js channel identifier used to setup a signalling chanel.\n        \"string\",\n        // The peerName, used debugging and console messages.\n        \"string\",\n        // The list of STUN servers to use.\n        // The format of a single entry is stun:HOST:PORT, where HOST\n        // and PORT are a stun server hostname and port, respectively.\n        [\"array\", \"string\"],\n        // Whether to immediately initiate a connection before fulfilling return\n        // promise.\n        \"boolean\"\n      ]\n    },\n  \n    // Send a message to the peer.\n    \"send\": {\"type\": \"method\", \"value\": [{\n      // Data channel id. If provided, will be used as the channel label.\n      // The behavior is undefined if the channel label doesn't exist.\n      \"channelLabel\": \"string\",\n      // One of the bellow should be defined; this is the data to send.\n      \"text\": \"string\",\n      \"binary\": \"blob\",\n      \"buffer\": \"buffer\"\n    }]},\n  \n    // Called when we get a message from the peer.\n    \"onReceived\": {\"type\": \"event\", \"value\": {\n      // The label/id of the data channel.\n      \"channelLabel\": \"string\",\n      // One the below will be specified.\n      \"text\": \"string\",\n      \"binary\": \"blob\",\n      \"buffer\": \"buffer\"\n    }},\n  \n    // Open the data channel with this label.\n    \"openDataChannel\": {\"type\": \"method\", \"value\": [\"string\"]},\n    // Close the data channel with this label.\n    \"closeDataChannel\": {\"type\": \"method\", \"value\": [\"string\"]},\n  \n    // A channel with this id has been opened.\n    \"onOpenDataChannel\": {\"type\": \"event\", \"value\": {\"channelId\": \"string\"}},\n    // The channale with this id has been closed.\n    \"onCloseDataChannel\": {\"type\": \"event\", \"value\": {\"channelId\": \"string\"}},\n  \n    // Returns the number of bytes that have queued using \"send\", but not\n    // yet sent out. Currently just exposes:\n    // http://www.w3.org/TR/webrtc/#widl-RTCDataChannel-bufferedAmount\n    \"getBufferedAmount\": {\"type\": \"method\",\n                          \"value\": [\"string\"],\n                          \"ret\": \"number\"},\n  \n    // Returns local SDP headers from createOffer.\n    \"getInfo\": {\"type\": \"method\", \"value\": [], \"ret\": \"string\"},\n  \n    \"createOffer\": {\n      \"type\": \"method\",\n      \"value\": [{\n        // Optional :RTCOfferOptions object.\n        \"offerToReceiveVideo\": \"number\",\n        \"offerToReceiveAudio\": \"number\",\n        \"voiceActivityDetection\": \"boolean\",\n        \"iceRestart\": \"boolean\"\n      }],\n      \"ret\": {\n        // Fulfills with a :RTCSessionDescription\n        \"type\": \"string\",  // Should always be \"offer\".\n        \"sdp\": \"string\"\n      }\n    },\n  \n    // Close the peer connection.\n    \"close\": {\"type\": \"method\", \"value\": []},\n    // The peer connection has been closed.\n    \"onClose\": {\"type\": \"event\", \"value\": {}}\n  }\n}\n";
self.coreRtcdatachannel = "{\n  \"name\": \"core.rtcdatachannel\",\n  // API follows http://w3c.github.io/webrtc-pc/\n  \"api\": {\n\n    \"constructor\": {\n      // Numeric ID retreaved from core.rtcpeerconnection.createDataChannel\n      // or from an ondatachannel event.\n      \"value\": [\"string\"]\n    },\n\n    \"getLabel\": {\"type\": \"method\", \"value\": [], \"ret\": \"string\"},\n    \"getOrdered\": {\"type\": \"method\", \"value\": [], \"ret\": \"boolean\"},\n    \"getMaxPacketLifeTime\": {\"type\": \"method\", \"value\": [], \"ret\": \"number\"},\n    \"getMaxRetransmits\": {\"type\": \"method\", \"value\": [], \"ret\": \"number\"},\n    \"getProtocol\": {\"type\": \"method\", \"value\": [], \"ret\": \"string\"},\n    \"getNegotiated\": {\"type\": \"method\", \"value\": [], \"ret\": \"boolean\"},\n    \"getId\": {\"type\": \"method\", \"value\": [], \"ret\": \"number\"},\n    \"getReadyState\": {\"type\": \"method\", \"value\": [], \"ret\": \"string\"},\n    \"getBufferedAmount\": {\"type\": \"method\", \"value\": [], \"ret\": \"number\"},\n\n    \"onopen\": {\"type\": \"event\", \"value\": []},\n    \"onerror\": {\"type\": \"event\", \"value\": []},\n    \"onclose\": {\"type\": \"event\", \"value\": []},\n    \"close\": {\"type\": \"method\", \"value\": []},\n    \"onmessage\": {\"type\": \"event\", \"value\": {\n      \"text\": \"string\",\n      \"binary\": \"buffer\"\n    }},\n    \"getBinaryType\": {\"type\": \"method\", \"value\": [], \"ret\": \"string\"},\n    \"setBinaryType\": {\"type\": \"method\", \"value\": [\"string\"]},\n    \"send\": {\"type\": \"method\", \"value\": [\"string\"]},\n    // Note: renamed from 'send' to handle the overloaded type.\n    \"sendBuffer\": {\"type\": \"method\", \"value\": [\"buffer\"]}\n  }\n}\n";
self.coreRtcpeerconnection = "{\n  \"name\": \"core.rtcpeerconnection\",\n  // API follows http://w3c.github.io/webrtc-pc/\n  \"api\": {\n    // Arguments: iceServers, iceTransports, peerIdentity\n    // Deviation from spec: iceServers, and iceServers.urls when specified must\n    // be an array, even if only 1 is specified.\n    \"constructor\": {\n      \"value\": [{\n        \"iceServers\": [\"array\", {\n          \"urls\": [\"array\", \"string\"],\n          \"username\": \"string\",\n          \"credential\": \"string\"\n        }],\n        \"iceTransports\": \"string\",\n        \"peerIdentity\": \"string\"\n      }]\n    },\n\n    // Per http://w3c.github.io/webrtc-pc/#idl-def-RTCOfferOptions\n    \"createOffer\": {\"type\": \"method\", \"value\": [{\n      \"mandatory\": {\n        \"OfferToReceiveAudio\": \"number\",\n        \"OfferToReceiveVideo\": \"number\"\n      }, \"optional\": [\"array\",{\n        \"OfferToReceiveAudio\": \"number\",\n        \"OfferToReceiveVideo\": \"number\",\n        \"IceRestart\": \"boolean\",\n        \"VoiceActivityDetection\": \"boolean\",\n        \"DtlsSrtpKeyAgreement\": \"boolean\",\n        \"RtpDataChannels\": \"boolean\"\n      }]\n    }], \"ret\": {\n      \"type\": \"string\",\n      \"sdp\": \"string\"\n    }},\n    \"createAnswer\": {\"type\": \"method\", \"value\": [], \"ret\": {\n      \"type\": \"string\",\n      \"sdp\": \"string\"\n    }},\n\n    // Per http://w3c.github.io/webrtc-pc/#idl-def-RTCSessionDescription\n    \"setLocalDescription\": {\"type\": \"method\", \"value\": [{\n      \"type\": \"string\",\n      \"sdp\": \"string\"\n    }]},\n    \"getLocalDescription\": {\"type\": \"method\", \"value\": [], \"ret\": {\n      \"type\": \"string\",\n      \"sdp\": \"string\"\n    }},\n    \"setRemoteDescription\": {\"type\": \"method\", \"value\": [{\n      \"type\": \"string\",\n      \"sdp\": \"string\"\n    }], \"ret\": {}},\n    \"getRemoteDescription\": {\"type\": \"method\", \"value\": [], \"ret\": {\n      \"type\": \"string\",\n      \"sdp\": \"string\"\n    }},\n\n    // Per http://w3c.github.io/webrtc-pc/#idl-def-RTCSignalingState\n    \"getSignalingState\": {\"type\": \"method\", \"value\": [], \"ret\": \"string\"},\n\n    // Per http://w3c.github.io/webrtc-pc/#idl-def-RTCConfiguration\n    // Deviation from spec matches that of constructor.\n    \"updateIce\": {\"type\": \"method\", \"value\": [[\"array\", {\n        \"urls\": [\"array\", \"string\"],\n        \"username\": \"string\",\n        \"credential\": \"string\"\n      }], \"string\", \"string\"], \"ret\": {}},\n\n    // Per http://w3c.github.io/webrtc-pc/#idl-def-RTCIceCandidate\n    \"addIceCandidate\": {\"type\": \"method\", \"value\": [{\n      \"candidate\": \"string\",\n      \"sdpMid\": \"string\",\n      \"sdpMLineIndex\": \"number\"\n    }], \"ret\": {}},\n\n    \"getIceGatheringState\": {\"type\": \"method\", \"value\": [], \"ret\": \"string\"},\n    \"getIceConnectionState\": {\"type\": \"method\", \"value\": [], \"ret\": \"string\"},\n\n    \"getConfiguration\": {\"type\": \"method\", \"value\": [], \"ret\": {\n      \"iceServers\": [\"array\", {\n        \"urls\": [\"array\", \"string\"],\n        \"username\": \"string\",\n        \"credential\": \"string\"\n      }],\n      \"iceTransports\": \"string\",\n      \"peerIdentity\": \"string\"\n    }},\n\n    // Numbers for stream API are IDs with which to make core.mediastream.\n    \"getLocalStreams\": {\"type\": \"method\", \"value\": [], \"ret\": [\"array\", \"string\"]},\n    \"getRemoteStreams\": {\"type\": \"method\", \"value\": [], \"ret\": [\"array\", \"string\"]},\n    \"getStreamById\": {\"type\": \"method\", \"value\": [\"string\"], \"ret\": \"string\"},\n    \"addStream\": {\"type\": \"method\", \"value\": [\"string\"], \"ret\": {}},\n    \"removeStream\": {\"type\": \"method\", \"value\": [\"string\"], \"ret\": {}},\n\n    \"close\": {\"type\": \"method\", \"value\": [], \"ret\": {}},\n\n    // Per http://w3c.github.io/webrtc-pc/#idl-def-RTCDataChannelInit\n    // Note: Numbers are IDs used to create core.datachannel objects.\n    \"createDataChannel\": {\"type\": \"method\", \"value\": [\"string\", {\n      \"ordered\": \"boolean\",\n      \"maxPacketLifeTime\": \"number\",\n      \"maxRetransmits\": \"number\",\n      \"protocol\": \"string\",\n      \"negotiated\": \"boolean\",\n      \"id\": \"number\"\n    }], \"ret\": \"string\"},\n    //Note: only reports channels opened by the remote peer.\n    \"ondatachannel\": {\"type\": \"event\", \"value\": {\n      \"channel\": \"string\"\n    }},\n\n    //TODO: Support DTMF Extension.\n    //\"createDTMFSender\": {},\n\n    //per http://w3c.github.io/webrtc-pc/#idl-def-RTCStatsCallback\n    //Number if sepecified represents a core.mediastreamtrack.\n    //Returned object is a serialization of the RTCStatsReport.\n    \"getStats\": {\"type\": \"method\", \"value\": [\"string\"], \"ret\":\"object\"},\n\n    //TODO: Support Identity Extension.\n    /*\n    \"setIdentityProvider\": {},\n    \"getIdentityAssertion\": {},\n    \"getPeerIdentity\": {},\n    \"onidentityresult\": {\"type\": \"event\", \"value\": []},\n    \"onpeeridentity\":{\"type\": \"event\", \"value\": []},\n    \"onidpassertionerror\":{\"type\": \"event\", \"value\": []},\n    \"onidpvalidationerror\":{\"type\": \"event\", \"value\": []},\n    */\n\n    \"onnegotiationneeded\": {\"type\": \"event\", \"value\": []},\n    \"onicecandidate\": {\"type\": \"event\", \"value\": {\n      \"candidate\": {\n        \"candidate\": \"string\",\n        \"sdpMid\": \"string\",\n        \"sdpMLineIndex\": \"number\"\n      }\n    }},\n    \"onsignalingstatechange\": {\"type\": \"event\", \"value\": []},\n    \"onaddstream\": {\"type\": \"event\", \"value\": {\n      \"stream\": \"number\"\n    }},\n    \"onremovestream\": {\"type\": \"event\", \"value\": {\n      \"stream\": \"number\"\n    }},\n    \"oniceconnectionstatechange\": {\"type\": \"event\", \"value\": []}\n  }\n}\n";
self.coreStorage = "{\n  \"name\": \"core.storage\",\n  \"api\": {\n    \"keys\": {\"type\": \"method\", \"value\": [], \"ret\": [\"array\", \"string\"]},\n    \"get\": {\"type\": \"method\", \"value\": [\"string\"], \"ret\": \"string\"},\n    \"set\": {\"type\": \"method\", \"value\": [\"string\", \"string\"], \"ret\": \"string\"},\n    \"remove\": {\"type\": \"method\", \"value\": [\"string\"], \"ret\": \"string\"},\n    \"clear\": {\"type\": \"method\", \"value\": []}\n  }\n}";
self.coreTcpsocket = "{\n  \"name\": \"core.tcpsocket\",\n  \"api\": {\n    // Sockets may be constructed bound to a pre-existing id, as in the case of\n    // interacting with a socket accpeted by a server.  If no Id is specified, a\n    // new socket will be created, which can be either connect'ed or listen'ed.\n    \"constructor\": {\n      \"value\": [\"number\"]\n    },\n  \n    // Get info about a socket.  Tells you whether the socket is active and\n    // available host information.\n    \"getInfo\": {\n      \"type\": \"method\",\n      \"value\": [],\n      \"ret\": {\n        \"connected\": \"boolean\",\n        \"localAddress\": \"string\",\n        \"localPort\": \"number\",\n        \"peerAddress\": \"string\",\n        \"peerPort\": \"number\"\n      }\n    },\n  \n    /** \n     * error codes and default messages that may be returned on failures.\n     */\n    \"ERRCODE\": {\"type\": \"constant\", \"value\": {\n      /** GENERAL **/\n      \"SUCCESS\": \"Success!\",\n      // Unknown\n      \"UNKNOWN\": \"Unknown error\",\n      \n      // Socket is already connected\n      \"ALREADY_CONNECTED\": \"Socket already connected\",\n      // Invalid Argument, client error\n      \"INVALID_ARGUMENT\": \"Invalid argument\",\n      // Connection timed out.\n      \"TIMED_OUT\": \"Timed out\",\n      // Operation cannot complete because socket is not connected.\n      \"NOT_CONNECTED\": \"Socket not connected\",\n      // Socket reset because of change in network state.\n      \"NETWORK_CHANGED\": \"Network changed\",\n      // Connection closed\n      \"CONNECTION_CLOSED\": \"Connection closed gracefully\",\n      // Connection Reset\n      \"CONNECTION_RESET\": \"Connection reset\",\n      // Connection Refused\n      \"CONNECTION_REFUSED\": \"Connection refused\",\n      // Generic Failure\n      \"CONNECTION_FAILED\": \"Connection failed\"\n    }},\n    \n    // Close a socket. Will Fail if the socket is not connected or already\n    // closed.\n    \"close\": {\n      \"type\": \"method\",\n      \"value\": [],\n      \"err\": {\n        \"errcode\": \"string\",\n        \"message\": \"string\"\n      }\n    },\n  \n    // Receive notification that the socket has disconnected.\n    \"onDisconnect\": {\"type\": \"event\", \"value\": {\n      \"errcode\": \"string\",\n      \"message\": \"string\"\n    }},\n  \n    // Connect to a host and port.\n    // Fails with an error if connection fails.\n    \"connect\": {\n      \"type\": \"method\",\n      \"value\": [\"string\", \"number\"],\n      \"err\": {\n        \"errcode\": \"string\",\n        \"message\": \"string\"\n      }\n    },\n  \n    // Upgrades a socket to TLS, expected to be invoked after connect.\n    \"secure\": {\n      \"type\": \"method\",\n      \"value\": [],\n      \"err\": {\n        \"errcode\": \"string\",\n        \"message\": \"string\"\n      }\n    },\n  \n    // Prepares a socket for becoming secure after the next read event.\n    // See details at\n    // https://github.com/freedomjs/freedom/wiki/prepareSecure-API-Usage\n    // This should be called one read prior to calling .secure, e.g. in XMPP\n    // this should be called before sending \"starttls\", then after a \"proceed\"\n    // message is read .secure should be called.\n    \"prepareSecure\": {\n      \"type\": \"method\",\n      \"value\": [],\n      \"err\": {\n        \"errcode\": \"string\",\n        \"message\": \"string\"\n      }\n    },\n  \n    // Write buffer data to a socket.\n    // Fails with an error if write fails.\n    \"write\": {\n      \"type\": \"method\",\n      \"value\": [\"buffer\"],\n      \"err\": {\n        \"errcode\": \"string\",\n        \"message\": \"string\"\n      }\n    },\n  \n    // Receive data on a connected socket.\n    \"onData\": {\n      \"type\": \"event\",\n      \"value\": {\"data\": \"buffer\"}\n    },\n  \n    // Listen as a server at a specified host and port.\n    // After calling listen the client should listen for 'onConnection' events.\n    // Fails with an error if errors occur while binding or listening.\n    \"listen\": {\n      \"type\": \"method\",\n      \"value\": [\"string\", \"number\"],\n      \"err\": {\n        \"errcode\": \"string\",\n        \"message\": \"string\"\n      }\n    },\n  \n    // Receive a connection.\n    // The socket parameter may be used to construct a new socket.\n    // Host and port information provide information about the remote peer.\n    \"onConnection\": {\"type\": \"event\", \"value\": {\n      \"socket\": \"number\",\n      \"host\": \"string\",\n      \"port\": \"number\"\n    }}\n  }\n}\n";
self.coreUdpsocket = "// A UDP socket.\n// Generally, to use you just need to call bind() at which point onData\n// events will start to flow. Note that bind() should only be called\n// once per instance.\n{\n  \"name\": \"core.udpsocket\",\n  \"api\": {\n    /** \n     * error codes and default messages that may be returned on failures.\n     */\n    \"ERRCODE\": {\"type\": \"constant\", \"value\": {\n      /** GENERAL **/\n      \"SUCCESS\": \"Success!\",\n      // Unknown\n      \"UNKNOWN\": \"Unknown error\",\n      \n      // Socket is already bound\n      \"ALREADY_BOUND\": \"Socket already bound\",\n      // Invalid Argument, client error\n      \"INVALID_ARGUMENT\": \"Invalid argument\",\n      // Socket reset because of change in network state.\n      \"NETWORK_CHANGED\": \"Network changed\",\n      // Failure to send data\n      \"SNED_FAILED\": \"Send failed\"\n    }},\n  \n    // Creates a socket, binds it to an interface and port and listens for\n    // messages, dispatching each message as on onData event.\n    // Returns on success, or fails with an error on failure.\n    \"bind\": {\n      \"type\": \"method\",\n      \"value\": [\n        // Interface (address) on which to bind.\n        \"string\",\n        // Port on which to bind.\n        \"number\"\n      ],\n      \"ret\": [],\n      \"err\": {\n        \"errcode\": \"string\",\n        \"message\": \"string\"\n      }\n    },\n  \n    // Retrieves the state of the socket.\n    // Returns an object with the following properties:\n    //  - localAddress: the socket's local address, if bound\n    //  - localPort: the socket's local port, if bound\n    \"getInfo\": {\"type\": \"method\", \"value\": [], \"ret\": {\n      \"localAddress\": \"string\",\n      \"localPort\": \"number\"\n    }},\n  \n    // Sends data to a server.\n    // The socket must be bound.\n    // Returns an integer indicating the number of bytes written, with no\n    // guarantee that the remote side received the data.\n    \"sendTo\": {\n      \"type\": \"method\",\n      \"value\": [\n        // Data to send.\n        \"buffer\",\n        // Destination address.\n        \"string\",\n        // Destination port.\n        \"number\"\n      ],\n      \"ret\": \"number\",\n      \"err\": {\n        \"errcode\": \"string\",\n        \"message\": \"string\"\n      }\n    },\n  \n    // Releases all resources associated with this socket.\n    // No-op if the socket is not bound.\n    \"destroy\": {\"type\": \"method\", \"value\": []},\n  \n    // Called once for each message received on this socket, once it's\n    // been successfully bound.\n    \"onData\": {\n      \"type\": \"event\",\n      \"value\": {\n        // Zero means success, any other \"value\" is implementation-dependent.\n        \"resultCode\": \"number\",\n        // Address from which data was received.\n        \"address\": \"string\",\n        // Port from which data was received.\n        \"port\": \"number\",\n        // Data received.\n        \"data\": \"buffer\"\n      }\n    }\n  }\n}\n";
self.coreView = "{\n  \"name\": \"core.view\",\n  \"api\": {\n    \"open\": {\"type\": \"method\", \"value\": [\"string\", {\n      \"file\": \"string\",\n      \"code\": \"string\"\n    }]},\n    \"show\": {\"type\": \"method\", \"value\": []},\n    \"close\": {\"type\": \"method\", \"value\": []},\n    \"postMessage\": {\"type\": \"method\", \"value\": [\"object\"]},\n  \n    \"message\": {\"type\": \"event\", \"value\": \"object\"},\n    \"onClose\": {\"type\": \"event\", \"value\": []}\n  }\n}\n";
self.coreWebsocket = "{\n  \"name\": \"core.websocket\",\n  \"api\": {\n    // Constructs new websocket. Errors in construction are passed on\n    // through the onError event.\n    \"constructor\": {\"value\": [\n      // URL to connect through\n      \"string\",\n      // Protocols\n      [\"array\", \"string\"]\n    ]},\n    // Send the data to the other side of this connection. Only one of\n    // the entries in the dictionary that is passed will be sent.\n    \"send\": {\n      \"type\": \"method\",\n      \"value\": [{\n        \"text\": \"string\",\n        \"binary\": \"blob\",\n        \"buffer\": \"buffer\"\n      }],\n      \"err\": {\n        \"errcode\": \"string\",\n        \"message\": \"string\"\n      }\n    },\n    \"getReadyState\": {\n      \"type\": \"method\",\n      \"value\": [],\n      // 0 -> CONNECTING\n      // 1 -> OPEN\n      // 2 -> CLOSING\n      // 3 -> CLOSED\n      \"ret\": \"number\"\n    },\n    \"getBufferedAmount\": {\"type\": \"method\",\n                          \"value\": [\"string\"],\n                          \"ret\": \"number\"},\n    \"close\": {\n      \"type\": \"method\",\n      // The first argument is a status code from\n      // https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent\n      \"value\": [\"number\", \"string\"],\n      \"err\": {\n        \"errcode\": \"string\",\n        \"message\": \"string\"\n      }\n    },\n    \"onMessage\": {\n      \"type\": \"event\",\n      // The data will be stored in one of the keys,\n      // corresponding with the \"type\" received\n      \"value\": {\n        \"text\": \"string\",\n        \"binary\": \"blob\",\n        \"buffer\": \"buffer\"\n      }\n    },\n    \"onOpen\": {\n      \"type\": \"event\",\n      \"value\": []\n    },\n    \"onError\": {\n      \"type\": \"event\",\n      \"value\": {\n        \"errcode\": \"string\",\n        \"message\": \"string\"\n      }\n    },\n    \"onClose\": {\n      \"type\": \"event\",\n      // \"value\"s given by WebSockets spec:\n      // http://www.w3.org/TR/websockets/#closeevent\n      \"value\": {\n        \"code\": \"number\",\n        \"reason\": \"string\",\n        \"wasClean\": \"boolean\"\n      }\n    }\n  }\n}\n";
self.social = "/**\n * SOCIAL API\n *\n * API for connecting to social networks and messaging of users.\n * An instance of a social provider encapsulates a single user logging into\n * a single network.\n *\n * This API distinguishes between a \"user\" and a \"client\". A client is a\n * user's point of access to the social provider. Thus, a user that has\n * multiple connections to a provider (e.g., on multiple devices or in multiple\n * browsers) has multiple clients.\n *\n * The semantics of some properties are defined by the specific provider, e.g.:\n * - Edges in the social network (who is on your roster)\n * - Reliable message passing (or unreliable)\n * - In-order message delivery (or out of order)\n * - Persistent clientId - Whether your clientId changes between logins when\n *    connecting from the same device\n *\n * A <client_state>, used in this API, is defined as:\n * - Information related to a specific client of a user\n * - Use cases: \n *   - Returned on changes for friends or my instance in 'onClientState'\n *   - Returned in a global list from 'getClients'\n * {\n *   // Mandatory\n *   'userId': 'string',      // Unique ID of user (e.g. alice@gmail.com)\n *   'clientId': 'string',    // Unique ID of client\n *                            // (e.g. alice@gmail.com/Android-23nadsv32f)\n *   'status': 'string',      // Status of the client. 'STATUS' member.\n *   'lastUpdated': 'number', // Timestamp of the last time client_state was updated\n *   'lastSeen': 'number'     // Timestamp of the last seen time of this device.\n *                            // Note: 'lastSeen' DOES NOT trigger an 'onClientState' event\n * }\n * \n * A <user_profile>, used in this API, is defined as:\n * - Information related to a specific user (profile information)\n * - Use cases:\n *   - Returned on changes for friends or myself in 'onUserProfile'\n *   - Returned in a global list from 'getUsers'\n * {\n *   // Mandatory\n *   \"userId\": \"string\",    // Unique ID of user (e.g. alice@gmail.com)\n *   \"lastUpdated\": \"number\"  // Timestamp of last change to the profile\n *   // Optional\n *   \"name\": \"string\",      // Name (e.g. Alice)\n *   \"url\": \"string\",       // Homepage URL\n *   \"imageData\": \"string\", // URI of a profile image.\n * }\n **/\n{\n  \"name\": \"social\",\n  \"api\": {\n    /** \n     * error codes and default messages that may be returned on failures.\n     */\n    \"ERRCODE\": {\"type\": \"constant\", \"value\": {\n      /** GENERAL **/\n      \"SUCCESS\": \"Success!\",\n      // Unknown\n      \"UNKNOWN\": \"Unknown error\",\n      // User is currently offline\n      \"OFFLINE\": \"User is currently offline\",\n      // Improper parameters\n      \"MALFORMEDPARAMETERS\": \"Parameters are malformed\",\n  \n      /** LOGIN **/\n      // Error authenticating to the server (e.g. invalid credentials)\n      \"LOGIN_BADCREDENTIALS\": \"Error authenticating with server\",\n      // Error with connecting to the server\n      \"LOGIN_FAILEDCONNECTION\": \"Error connecting to server\",\n      // User is already logged in\n      \"LOGIN_ALREADYONLINE\": \"User is already logged in\",\n  \n      /** SENDMESSAGE **/\n      // Message sent to invalid destination (e.g. not in user's roster)\n      \"SEND_INVALIDDESTINATION\": \"Message sent to an invalid destination\"\n    }},\n    \n    /**\n     * List of possible statuses for <client_state>.status\n     **/\n    \"STATUS\": {\"type\": \"constant\", \"value\": {\n      // Not logged in\n      \"OFFLINE\": \"OFFLINE\",\n      // This client runs the same freedom.js app as you and is online\n      \"ONLINE\": \"ONLINE\",\n      // This client is online, but does not run the same app (chat client)\n      // (i.e. can be useful to invite others to your freedom.js app)\n      \"ONLINE_WITH_OTHER_APP\": \"ONLINE_WITH_OTHER_APP\"\n    }},\n  \n    /**\n     * Log into the network (See below for parameters)\n     * e.g. social.login(Object options)\n     *\n     * @method login\n     * @param {Object} loginOptions - See below\n     * @return {Object} <client_state>\n     **/\n    \"login\": {\n      \"type\": \"method\",\n      \"value\": [{\n        // Optional\n        \"agent\": \"string\",         // Name of the application\n        \"version\": \"string\",       // Version of application\n        \"url\": \"string\",           // URL of application\n        \"interactive\": \"boolean\",  // Allow user interaction from provider.\n                                   // If not set, interpreted as true.\n        \"rememberLogin\": \"boolean\" // Cache login credentials. If not set,\n                                   // interpreted as true.\n      }],\n      \"ret\": {                       // <client_state>, defined above.\n        \"userId\": \"string\",\n        \"clientId\": \"string\",\n        \"status\": \"string\",\n        \"lastUpdated\": \"number\",\n        \"lastSeen\": \"number\"\n      },\n      \"err\": {\n        \"errcode\": \"string\",\n        \"message\": \"string\"\n      }\n    },\n  \n    /**\n     * Clears cached credentials of the provider.\n     *\n     * @method clearCachedCredentials\n     * @return nothing\n     **/\n    \"clearCachedCredentials\": {\"type\": \"method\", \"value\": []},\n  \n    /**\n     * Get <client_state>s that have been observed.\n     * The provider implementation may act as a client, in which case its\n     * <client_state> will be in this list.\n     * getClients may not represent an entire roster, since it may not be\n     * enumerable.\n     * \n     * @method getClients\n     * @return {Object} { \n     *    \"clientId1\": <client_state>,\n     *    \"clientId2\": <client_state>,\n     *     ...\n     * } List of <client_state>s indexed by clientId\n     *   On failure, rejects with an error code.\n     **/\n    \"getClients\": {\n      \"type\": \"method\",\n      \"value\": [],\n      \"ret\": \"object\",\n      \"err\": {\n        \"errcode\": \"string\",\n        \"message\": \"string\"\n      }\n    },\n  \n    /**\n     * Get <user_profile>s that have been observed.\n     * The provider implementation may act as a client, in which case its\n     * <user_profile> will be in this list.\n     * getUsers may not represent an entire roster, since it may not be\n     * enumerable.\n     *\n     * @method getUsers\n     * @return {Object} { \n     *    \"userId1\": <user_profile>,\n     *    \"userId2\": <user_profile>,\n     *     ...\n     * } List of <user_profile>s indexed by userId\n     *   On failure, rejects with an error code.\n     **/\n    \"getUsers\": {\n      \"type\": \"method\",\n      \"value\": [],\n      \"ret\": \"object\",\n      \"err\": {\n        \"errcode\": \"string\",\n        \"message\": \"string\"\n      }\n    },\n  \n    /** \n     * Send a message.\n     * Destination may be a userId or a clientId. If it is a userId, all clients\n     * for that user should receive the message.\n     * \n     * @method sendMessage\n     * @param {String} destination_id The userId or clientId to send to\n     * @param {String} message The message to send.\n     * @return nothing\n     *  On failure, rejects with an error code\n     **/\n    \"sendMessage\": {\n      \"type\": \"method\",\n      \"value\": [\"string\", \"string\"],\n      \"err\": {\n        \"errcode\": \"string\",\n        \"message\": \"string\"\n      }\n    },\n  \n    /**\n     * Log out of the network.\n     * \n     * @method logout\n     * @return nothing\n     *  On failure, rejects with an error code\n     **/\n    \"logout\": {\n      \"type\": \"method\",\n      \"value\": [],\n      \"err\": {\n        \"errcode\": \"string\",\n        \"message\": \"string\"\n      }\n    },\n  \n    /**\n     * Receive an incoming message.\n     **/\n    \"onMessage\": {\"type\": \"event\", \"value\": {\n      \"from\": {               // <client_state>, defined above.\n        \"userId\": \"string\",\n        \"clientId\": \"string\",\n        \"status\": \"string\",\n        \"lastUpdated\": \"number\",\n        \"lastSeen\": \"number\"\n      },\n      \"message\": \"string\"     // message contents\n    }},\n  \n    /**\n     * Receive a change to a <user_profile>.\n     **/\n    \"onUserProfile\": {\"type\": \"event\", \"value\": { // <user_profile>, defined above.\n      \"userId\": \"string\",\n      \"lastUpdated\": \"number\",\n      \"name\": \"string\",\n      \"url\": \"string\",\n      \"imageData\": \"string\"\n    }},\n  \n    /**\n     * Receive a change to a <client_state>.\n     **/\n    \"onClientState\": {\"type\": \"event\", \"value\": { // <client_state>, defined above.\n      \"userId\": \"string\",\n      \"clientId\": \"string\",\n      \"status\": \"string\",\n      \"lastUpdated\": \"number\",\n      \"lastSeen\": \"number\"\n    }}\n  }\n}\n";
self.storage = "/**\r\n * STORAGE API\r\n *\r\n * API for Persistent Storage\r\n * Exposes a key-value get/put interface\r\n **/\r\n{\r\n  \"name\": \"storage\",\r\n  \"api\": {\r\n    /** \r\n     * List of scopes that can preferred when accessing storage.\r\n    **/\r\n    \"scope\": {\"type\": \"constant\", \"value\": {\r\n      // Storage should only last while the app is active.\r\n      \"SESSION\": 0,\r\n      // Storage should be limited to host the app is bound to.\r\n      \"DEVICE_LOCAL\": 1,\r\n      // Storage should be synchronized between user devices.\r\n      \"USER_LOCAL\": 2,\r\n      // Storage should be synchronized across users.\r\n      \"SHARED\": 3\r\n    }},\r\n  \r\n    /** \r\n     * error codes and default messages that may be returned on failures.\r\n     */\r\n    \"ERRCODE\": {\"type\": \"constant\", \"value\": {\r\n      /** GENERAL **/\r\n      \"SUCCESS\": \"Success!\",\r\n      // Unknown\r\n      \"UNKNOWN\": \"Unknown error\",\r\n      // Database not ready\r\n      \"OFFLINE\": \"Database not reachable\",\r\n      // Improper parameters\r\n      \"MALFORMEDPARAMETERS\": \"Parameters are malformed\"\r\n    }},\r\n  \r\n    /**\r\n     * Create a storage provider.\r\n     * @param {Object} options\r\n     *    scope {storage.scope} The preferred storage scope.\r\n     * @constructor\r\n     */\r\n    \"constructor\": { \"value\": [{\r\n      \"scope\": \"number\"\r\n    }]},\r\n  \r\n    /**\r\n     * Fetch an array of all keys\r\n     * e.g. storage.keys() => [string]\r\n     *\r\n     * @method keys\r\n     * @return an array with all keys in the store \r\n     **/\r\n    \"keys\": {\r\n      \"type\": \"method\",\r\n      \"value\": [],\r\n      \"ret\": [\"array\", \"string\"],\r\n      \"err\": {\r\n        \"errcode\": \"string\",\r\n        \"message\": \"string\"\r\n      }\r\n    },\r\n  \r\n    /**\r\n     * Fetch a value for a key\r\n     * e.g. storage.get(String key) => string\r\n     *\r\n     * @method get\r\n     * @param {String} key - key to fetch\r\n     * @return {String} Returns a string with the value, null if doesn't exist\r\n     **/\r\n    \"get\": {\r\n      \"type\": \"method\",\r\n      \"value\": [\"string\"],\r\n      \"ret\": \"string\",\r\n      \"err\": {\r\n        \"errcode\": \"string\",\r\n        \"message\": \"string\"\r\n      }\r\n    },\r\n  \r\n    /**\r\n     * Sets a value to a key\r\n     * e.g. storage.set(String key, String value)\r\n     *\r\n     * @method set\r\n     * @param {String} key - key of value to set\r\n     * @param {String} value - value\r\n     * @return {String} previous value of key if there was one.\r\n     **/\r\n    \"set\": {\r\n      \"type\": \"method\",\r\n      \"value\": [\"string\", \"string\"],\r\n      \"ret\": \"string\",\r\n      \"err\": {\r\n        \"errcode\": \"string\",\r\n        \"message\": \"string\"\r\n      }\r\n    },\r\n    \r\n    /**\r\n     * Removes a single key\r\n     * e.g. storage.remove(String key)\r\n     *\r\n     * @method remove\r\n     * @param {String} key - key to remove\r\n     * @return {String} previous value of key if there was one.\r\n     **/\r\n    \"remove\": {\r\n      \"type\": \"method\",\r\n      \"value\": [\"string\"],\r\n      \"ret\": \"string\",\r\n      \"err\": {\r\n        \"errcode\": \"string\",\r\n        \"message\": \"string\"\r\n      }\r\n    },\r\n    \r\n    /**\r\n     * Removes all data from storage\r\n     * e.g. storage.clear()\r\n     *\r\n     * @method clear\r\n     * @return nothing\r\n     **/\r\n    \"clear\": {\r\n      \"type\": \"method\",\r\n      \"value\": [],\r\n      \"ret\": [],\r\n      \"err\": {\r\n        \"errcode\": \"string\",\r\n        \"message\": \"string\"\r\n      }\r\n    }\r\n  }\r\n}\r\n";
self.storebuffer = "\r\n/**\r\n * STORAGE API\r\n *\r\n * API for Persistent Storage\r\n * Exposes a key-value get/put interface\r\n **/\r\n{\r\n  \"name\": \"storebuffer\",\r\n  \"api\": {\r\n    /** \r\n     * List of scopes that can preferred when accessing storage.\r\n    **/\r\n    \"scope\": {\"type\": \"constant\", \"value\": {\r\n      // Storage should only last while the app is active.\r\n      \"SESSION\": 0,\r\n      // Storage should be limited to host the app is bound to.\r\n      \"DEVICE_LOCAL\": 1,\r\n      // Storage should be synchronized between user devices.\r\n      \"USER_LOCAL\": 2,\r\n      // Storage should be synchronized across users.\r\n      \"SHARED\": 3\r\n    }},\r\n  \r\n    /** \r\n     * error codes and default messages that may be returned on failures.\r\n     */\r\n    \"ERRCODE\": {\"type\": \"constant\", \"value\": {\r\n      /** GENERAL **/\r\n      \"SUCCESS\": \"Success!\",\r\n      // Unknown\r\n      \"UNKNOWN\": \"Unknown error\",\r\n      // Database not ready\r\n      \"OFFLINE\": \"Database not reachable\",\r\n      // Improper parameters\r\n      \"MALFORMEDPARAMETERS\": \"Parameters are malformed\"\r\n    }},\r\n  \r\n    /**\r\n     * Create a storage provider.\r\n     * @param {Object} options\r\n     *    scope {storage.scope} The preferred storage scope.\r\n     * @constructor\r\n     */\r\n    \"constructor\": { \"value\": [{\r\n      \"scope\": \"number\"\r\n    }]},\r\n  \r\n    /**\r\n     * Fetch an array of all keys\r\n     * e.g. storage.keys() => [string]\r\n     *\r\n     * @method keys\r\n     * @return an array with all keys in the store \r\n     **/\r\n    \"keys\": {\r\n      \"type\": \"method\",\r\n      \"value\": [],\r\n      \"ret\": [\"array\", \"string\"],\r\n      \"err\": {\r\n        \"errcode\": \"string\",\r\n        \"message\": \"string\"\r\n      }\r\n    },\r\n  \r\n    /**\r\n     * Fetch a value for a key\r\n     * e.g. storage.get(String key) => string\r\n     *\r\n     * @method get\r\n     * @param {String} key - key to fetch\r\n     * @return {ArrayBuffer} Returns value, null if doesn't exist\r\n     **/\r\n    \"get\": {\r\n      \"type\": \"method\",\r\n      \"value\": [\"string\"],\r\n      \"ret\": \"buffer\",\r\n      \"err\": {\r\n        \"errcode\": \"string\",\r\n        \"message\": \"string\"\r\n      }\r\n    },\r\n  \r\n    /**\r\n     * Sets a value to a key\r\n     * e.g. storage.set(String key, String value)\r\n     *\r\n     * @method set\r\n     * @param {String} key - key of value to set\r\n     * @param {ArrayBuffer} value - value\r\n     * @return {String} previous value of key if there was one.\r\n     **/\r\n    \"set\": {\r\n      \"type\": \"method\",\r\n      \"value\": [\"string\", \"buffer\"],\r\n      \"ret\": \"buffer\",\r\n      \"err\": {\r\n        \"errcode\": \"string\",\r\n        \"message\": \"string\"\r\n      }\r\n    },\r\n    \r\n    /**\r\n     * Removes a single key\r\n     * e.g. storage.remove(String key)\r\n     *\r\n     * @method remove\r\n     * @param {String} key - key to remove\r\n     * @return {String} previous value of key if there was one.\r\n     **/\r\n    \"remove\": {\r\n      \"type\": \"method\",\r\n      \"value\": [\"string\"],\r\n      \"ret\": \"buffer\",\r\n      \"err\": {\r\n        \"errcode\": \"string\",\r\n        \"message\": \"string\"\r\n      }\r\n    },\r\n    \r\n    /**\r\n     * Removes all data from storage\r\n     * e.g. storage.clear()\r\n     *\r\n     * @method clear\r\n     * @return nothing\r\n     **/\r\n    \"clear\": {\r\n      \"type\": \"method\",\r\n      \"value\": [],\r\n      \"ret\": [],\r\n      \"err\": {\r\n        \"errcode\": \"string\",\r\n        \"message\": \"string\"\r\n      }\r\n    }\r\n  }\r\n}\r\n";
self.transport = "/**\n * TRANSPORT API\n *\n * API for peer-to-peer communication\n * Useful for sending large binary data between instances\n **/\n{\n  \"name\": \"transport\",\n  \"api\": {\n    /** \n     * error codes and default messages that may be returned on failures.\n     */\n    \"ERRCODE\": {\"type\": \"constant\", \"value\": {\n      /** GENERAL **/\n      \"SUCCESS\": \"Success!\",\n      // Unknown\n      \"UNKNOWN\": \"Unknown error\",\n      // Database not ready\n      \"OFFLINE\": \"Not reachable\",\n      // Improper parameters\n      \"MALFORMEDPARAMETERS\": \"Parameters are malformed\"\n    }},\n  \n    /**\n     * Prepare a P2P connection with initialization parameters\n     * Takes in a signalling pathway (freedom.js channel), which is used\n     * by the transport provider to send/receive signalling messages\n     * to the other side of the P2P connection for setup.\n     *\n     * @method setup\n     * @param {String} name - give this connection a name for logging\n     * @param {Proxy} channel - signalling channel\n     * @return nothing.\n     **/\n    \"setup\": {\n      \"type\": \"method\",\n      \"value\": [\"string\", \"proxy\"],\n      \"ret\": [],\n      \"err\": {\n        \"errcode\": \"string\",\n        \"message\": \"string\"\n      }\n    },\n  \n    /**\n     * Send binary data to the peer\n     * All data is labelled with a string tag\n     * Any data sent with the same tag is sent in order,\n     * but there is no guarantees between tags\n     *\n     * @method send\n     * @param {string} tag\n     * @param {buffer} data\n     * @return nothing\n     **/\n    \"send\": {\n      \"type\": \"method\",\n      \"value\": [\"string\", \"buffer\"],\n      \"ret\": [],\n      \"err\": {\n        \"errcode\": \"string\",\n        \"message\": \"string\"\n      }\n    },\n  \n    /**\n     * Close the connection. Any data queued for sending, or in the\n     * process of sending, may be dropped. If the state of the promse of\n     * the send method is \"pending\" then the data for that send call may\n     * be sending or queued.\n     * \n     * @method close\n     * @return nothing\n     **/\n    \"close\": {\n      \"type\": \"method\",\n      \"value\": [],\n      \"ret\": [],\n      \"err\": {\n        \"errcode\": \"string\",\n        \"message\": \"string\"\n      }\n    },\n  \n    /**\n     * Event on incoming data (ArrayBuffer)\n     **/\n    \"onData\": {\n      \"type\": \"event\",\n      \"value\": {\n        \"tag\": \"string\",\n        \"data\": \"buffer\"\n      }\n    },\n  \n    /**\n     * Event on successful closing of the connection\n     **/\n    \"onClose\": {\n      \"type\": \"event\",\n      \"value\": []\n    }\n  }\n}\n";
return self})();
  } catch (e) {
    // pass.
  }
  /*jslint nomen: false */
  util.eachProp(found, function (json) {
    this.interfaces.push(JSON.parse(minify(json)));
  }.bind(this));
};


exports.register = function (providers, registry) {
  'use strict';
  var bundle = new Bundle();
  bundle.interfaces.forEach(function (api) {
    if (api && api.name && api.api) {
      registry.set(api.name, api.api);
    }
  });

  providers.forEach(function (provider) {
    if (provider.name) {
      registry.register(provider.name, provider.provider, provider.style);
    }
  });
};

}).call(this,"/node_modules/freedom/src")
},{"./util":38,"fs":39,"node-json-minify":11}],23:[function(require,module,exports){
/*globals Blob, ArrayBuffer, DataView */
/*jslint indent:2, node:true, sloppy:true */
var util = require('./util');

/**
 * A freedom port for a user-accessable api.
 * @class Consumer
 * @implements Port
 * @uses handleEvents
 * @param {Object} interfaceCls The api interface exposed by this consumer.
 * @param {Debug} debug The debugger to use for logging.
 * @constructor
 */
var Consumer = function (interfaceCls, debug) {
  this.id = Consumer.nextId();
  this.interfaceCls = interfaceCls;
  this.debug = debug;
  util.handleEvents(this);
  
  this.ifaces = {};
  this.closeHandlers = {};
  this.errorHandlers = {};
  this.emits = {};
};

/**
 * Receive incoming messages for this consumer.
 * @method onMessage
 * @param {String} source The source of the message.
 * @param {Object} message The received message.
 */
Consumer.prototype.onMessage = function (source, message) {
  if (source === 'control' && message.reverse) {
    this.emitChannel = message.channel;
    this.emit(this.emitChannel, {
      type: 'channel announcement',
      channel: message.reverse
    });
    this.emit('start');
  } else if (source === 'control' && message.type === 'setup') {
    this.controlChannel = message.channel;
  } else if (source === 'control' && message.type === 'close') {
    delete this.controlChannel;
    this.doClose();
  } else {
    if (!this.emitChannel && message.channel) {
      this.emitChannel = message.channel;
      this.emit('start');
      return;
    }
    if (message.type === 'close' && message.to) {
      this.teardown(message.to);
      return;
    }
    if (message.type === 'error') {
      this.error(message.to, message.message);
      return;
    }
    if (message.to) {
      if (this.emits[message.to]) {
        this.emits[message.to]('message', message.message);
      } else {
        this.debug.warn('Could not deliver message, no such interface: ' + message.to);
      }
    } else {
      var msg = message.message;
      util.eachProp(this.emits, function (iface) {
        iface('message', message.message);
      });
    }
  }
};

/**
 * Create a consumer.Interface associated with this consumer.
 * An interface is returned, which is supplied with important control of the
 * api via constructor arguments: (bound below in getInterfaceConstructor)
 * 
 * onMsg: function(binder) sets the function to call when messages for this
 *    interface arrive on the channel,
 * emit: function(msg) allows this interface to emit messages,
 * id: string is the Identifier for this interface.
 * @method getInterface
 */
Consumer.prototype.getInterface = function () {
  var Iface = this.getInterfaceConstructor(),
    args = Array.prototype.slice.call(arguments, 0);
  if (args.length) {
    Iface = Iface.bind.apply(Iface, [Iface].concat(args));
  }
  return new Iface();
};

/**
 * Create a function that can be used to get interfaces from this api consumer
 * from a user-visible point.
 * @method getProxyInterface
 */
Consumer.prototype.getProxyInterface = function () {
  var func = function (p) {
    var args = Array.prototype.slice.call(arguments, 1);
    if (args.length > 0) {
      return p.getInterface.apply(p, args);
    } else {
      return p.getInterface();
    }
  }.bind({}, this);

  func.close = function (iface) {
    if (iface) {
      util.eachProp(this.ifaces, function (candidate, id) {
        if (candidate === iface) {
          this.teardown(id);
          this.emit(this.emitChannel, {
            type: 'close',
            to: id
          });
          return true;
        }
      }.bind(this));
    } else {
      // Close the channel.
      this.doClose();
    }
  }.bind(this);

  func.onClose = function (iface, handler) {
    if (typeof iface === 'function' && handler === undefined) {
      // Add an on-channel-closed handler.
      this.once('close', iface);
      return;
    }

    util.eachProp(this.ifaces, function (candidate, id) {
      if (candidate === iface) {
        if (this.closeHandlers[id]) {
          this.closeHandlers[id].push(handler);
        } else {
          this.closeHandlers[id] = [handler];
        }
        return true;
      }
    }.bind(this));
  }.bind(this);

  func.onError = function (iface, handler) {
    if (typeof iface === 'function' && handler === undefined) {
      this.on('error', iface);
      return;
    }
    util.eachProp(this.ifaces, function (candidate, id) {
      if (candidate === iface) {
        if (this.errorHandlers[id]) {
          this.errorHandlers[id].push(handler);
        } else {
          this.errorHandlers[id] = [handler];
        }
        return true;
      }
    }.bind(this));
  }.bind(this);
  
  return func;
};

/**
 * Provides a bound class for creating a consumer.Interface associated
 * with this api. This partial level of construction can be used
 * to allow the consumer to be used as a provider for another API.
 * @method getInterfaceConstructor
 * @private
 */
Consumer.prototype.getInterfaceConstructor = function () {
  var id = Consumer.nextId();
  return this.interfaceCls.bind(
    {},
    function (id, obj, binder) {
      this.ifaces[id] = obj;
      this.emits[id] = binder;
    }.bind(this, id),
    this.doEmit.bind(this, id),
    this.debug
  );
};

/**
 * Emit a message on the channel once setup is complete.
 * @method doEmit
 * @private
 * @param {String} to The ID of the flow sending the message.
 * @param {Object} msg The message to emit
 * @param {Boolean} all Send message to all recipients.
 */
Consumer.prototype.doEmit = function (to, msg, all) {
  if (all) {
    to = false;
  }
  if (this.emitChannel) {
    this.emit(this.emitChannel, {to: to, type: 'message', message: msg});
  } else {
    this.once('start', this.doEmit.bind(this, to, msg));
  }
};

/**
 * Teardown a single interface of this api.
 * @method teardown
 * @param {String} id The id of the interface to tear down.
 */
Consumer.prototype.teardown = function (id) {
  delete this.emits[id];
  if (this.closeHandlers[id]) {
    util.eachProp(this.closeHandlers[id], function (prop) {
      prop();
    });
  }
  delete this.ifaces[id];
  delete this.closeHandlers[id];
  delete this.errorHandlers[id];
};

/**
 * Handle a message error reported to this api.
 * @method error
 * @param {String?} id The id of the interface where the error occured.
 * @param {Object} message The message which failed, if relevant.
 */
Consumer.prototype.error = function (id, message) {
  if (id && this.errorHandlers[id]) {
    util.eachProp(this.errorHandlers[id], function (prop) {
      prop(message);
    });
  } else if (!id) {
    this.emit('error', message);
  }
};


/**
 * Close / teardown the flow this api terminates.
 * @method doClose
 */
Consumer.prototype.doClose = function () {
  if (this.controlChannel) {
    this.emit(this.controlChannel, {
      type: 'Channel Closing',
      request: 'close'
    });
  }

  util.eachProp(this.emits, function (emit, id) {
    this.teardown(id);
  }.bind(this));

  this.emit('close');
  this.off();

  this.emitChannel = null;
};

/**
 * Get the textual description of this port.
 * @method toString
 * @return The description of this port.
 */
Consumer.prototype.toString = function () {
  if (this.emitChannel) {
    return "[Consumer " + this.emitChannel + "]";
  } else {
    return "[unbound Consumer]";
  }
};

/**
 * Get the next ID for an api channel.
 * @method nextId
 * @static
 * @private
 */
Consumer.nextId = function () {
  if (!Consumer.id) {
    Consumer.id = 1;
  }
  return (Consumer.id += 1);
};

/**
 * Convert a structured data structure into a message stream conforming to
 * a template and an array of binary data elements.
 * @static
 * @method messageToPortable
 * @param {Object} template The template to conform to
 * @param {Object} value The instance of the data structure to confrom
 * @param {Debug} debug A debugger for errors.
 * @return {{text: Object, binary: Array}} Separated data streams.
 */
Consumer.messageToPortable = function (template, value, debug) {
  var externals = [],
    message = Consumer.conform(template, value, externals, true, debug);
  return {
    text: message,
    binary: externals
  };
};

/**
 * Convert Structured Data streams into a data structure conforming to a
 * template.
 * @static
 * @method portableToMessage
 * @param {Object} template The template to conform to
 * @param {{text: Object, binary: Array}} streams The streams to conform
 * @param {Debug} debug A debugger for errors.
 * @return {Object} The data structure matching the template.
 */
Consumer.portableToMessage = function (template, streams, debug) {
  return Consumer.conform(template, streams.text, streams.binary, false, debug);
};

/**
 * Force a collection of values to look like the types and length of an API
 * template.
 * @static
 * @method conform
 * @param {Object} template The template to conform to
 * @param {Object} from The value to conform
 * @param {Array} externals Listing of binary elements in the template
 * @param {Boolean} Whether to to separate or combine streams.
 * @aparam {Debug} debug A debugger for errors.
 */
Consumer.conform = function (template, from, externals, separate, debug) {
  /* jshint -W086 */
  if (typeof (from) === 'function') {
    //from = undefined;
    //throw "Trying to conform a function";
    return undefined;
  } else if (typeof (from) === 'undefined') {
    return undefined;
  } else if (from === null) {
    return null;
  } else if (template === undefined) {
    debug.error("Message discarded for not matching declared type!", from);
    return undefined;
  }

  switch (template) {
  case 'string':
    return String('') + from;
  case 'number':
    return Number(1) * from;
  case 'boolean':
    return Boolean(from === true);
  case 'object':
    // TODO(willscott): Allow removal if sandboxing enforces this.
    if (typeof from === 'undefined') {
      return undefined;
    } else {
      return JSON.parse(JSON.stringify(from));
    }
  case 'blob':
    if (separate) {
      if (from instanceof Blob) {
        externals.push(from);
        return externals.length - 1;
      } else {
        debug.error('conform expecting Blob, but saw ' + (typeof from));
        externals.push(new Blob([]));
        return externals.length - 1;
      }
    } else {
      return externals[from];
    }
  case 'buffer':
    if (separate) {
      externals.push(Consumer.makeArrayBuffer(from, debug));
      return externals.length - 1;
    } else {
      return Consumer.makeArrayBuffer(externals[from], debug);
    }
  case 'proxy':
    return from;
  }
  var val, i;
  if (Array.isArray(template) && from !== undefined) {
    val = [];
    i = 0;
    if (template.length === 2 && template[0] === 'array') {
      //console.log("template is array, value is " + JSON.stringify(value));
      for (i = 0; i < from.length; i += 1) {
        val.push(Consumer.conform(template[1], from[i], externals,
                                  separate, debug));
      }
    } else {
      for (i = 0; i < template.length; i += 1) {
        if (from[i] !== undefined) {
          val.push(Consumer.conform(template[i], from[i], externals,
                                    separate, debug));
        } else {
          val.push(undefined);
        }
      }
    }
    return val;
  } else if (typeof template === 'object' && from !== undefined) {
    val = {};
    util.eachProp(template, function (prop, name) {
      if (from[name] !== undefined) {
        val[name] = Consumer.conform(prop, from[name], externals, separate,
                                     debug);
      }
    });
    return val;
  }
  debug.error('Unknown template provided: ' + template);
};

/**
 * Make a thing into an Array Buffer
 * @static
 * @method makeArrayBuffer
 * @param {Object} thing
 * @param {Debug} debug A debugger in case of errors.
 * @return {ArrayBuffer} An Array Buffer
 */
Consumer.makeArrayBuffer = function (thing, debug) {
  if (!thing) {
    return new ArrayBuffer(0);
  }

  if (thing instanceof ArrayBuffer) {
    return thing;
  } else if (thing.constructor.name === "ArrayBuffer" &&
      typeof thing.prototype === "undefined") {
    // Workaround for webkit origin ownership issue.
    // https://github.com/UWNetworksLab/freedom/issues/28
    return new DataView(thing).buffer;
  } else {
    debug.error('expecting ArrayBuffer, but saw ' +
        (typeof thing) + ': ' + JSON.stringify(thing));
    return new ArrayBuffer(0);
  }
};

/**
 * Recursively traverse a [nested] object and freeze its keys from being
 * writable. Note, the result can have new keys added to it, but existing ones
 * cannot be  overwritten. Doesn't do anything for arrays or other collections.
 *
 * @method recursiveFreezeObject
 * @static
 * @param {Object} obj - object to be frozen
 * @return {Object} obj
 **/
Consumer.recursiveFreezeObject = function (obj) {
  var k, ret = {};
  if (typeof obj !== 'object') {
    return obj;
  }
  for (k in obj) {
    if (obj.hasOwnProperty(k)) {
      Object.defineProperty(ret, k, {
        value: Consumer.recursiveFreezeObject(obj[k]),
        writable: false,
        enumerable: true
      });
    }
  }
  return ret;
};

module.exports = Consumer;

},{"./util":38}],24:[function(require,module,exports){
/*jslint indent:2, node:true, sloppy:true */
var util = require('./util');

/**
 * A freedom entry point for debugging.
 * @uses handleEvents
 * @implements Port
 * @constructor
 */
var Debug = function (logger) {
  this.id = 'debug';
  this.emitChannel = false;
  this.config = false;
  util.handleEvents(this);
};

/**
 * Provide a textual description of this port.
 * @method toString
 * @return {String} the textual description.
 */
Debug.prototype.toString = function () {
  return '[Console]';
};

/**
 * Register a logger for outputting debugging messages.
 * @method setLogger
 * @param {Console} logger The logger to register
 */
Debug.prototype.setLogger = function (logger) {
  if (this.logger) {
    this.info('Replacing Logger.');
  }
  this.logger = logger;
  this.emit('logger');
};

/**
 * Handler for receiving messages sent to the debug port.
 * These messages are used to retreive config for exposing console.
 * @method onMessage
 * @param {String} source the source identifier for the message.
 * @param {Object} message the received message.
 */
Debug.prototype.onMessage = function (source, message) {
  if (source === 'control' && message.channel && !this.emitChannel) {
    this.emitChannel = message.channel;
    this.config = message.config;
    if (!this.config.global.console) {
      this.config.global.console = this.getLogger('Console');
    }
    this.emit('ready');
  }
};

/**
 * Dispatch a debug message with arbitrary severity.
 * All debug messages are routed through the manager, to allow for delegation.
 * @method format
 * @param {String} severity the severity of the message.
 * @param {String} source The location of message.
 * @param {String[]} args The contents of the message.
 * @private
 */
Debug.prototype.format = function (severity, source, args) {
  var i, alist = [], argarr;
  if (typeof args === "string" && source) {
    try {
      argarr = JSON.parse(args);
      if (argarr instanceof Array) {
        args = argarr;
      }
    } catch (e) {
      // pass.
    }
  }

  if (typeof args === "string") {
    alist.push(args);
  } else {
    for (i = 0; i < args.length; i += 1) {
      alist.push(args[i]);
    }
  }
  if (!this.emitChannel) {
    this.on('ready', this.format.bind(this, severity, source, alist));
    return;
  }
  this.emit(this.emitChannel, {
    severity: severity,
    source: source,
    quiet: true,
    request: 'debug',
    msg: JSON.stringify(alist)
  });
};

/**
 * Print received messages on the console.
 * This is called by the manager in response to an emission from format.
 * @method print
 * @param {Object} message The message emitted by {@see format} to print.
 */
Debug.prototype.print = function (message) {
  if (!this.logger) {
    this.once('logger', this.print.bind(this, message));
    return;
  }

  var args, arr = [], i = 0;
  args = JSON.parse(message.msg);
  if (typeof args === "string") {
    arr.push(args);
  } else {
    while (args[i] !== undefined) {
      arr.push(args[i]);
      i += 1;
    }
  }
  this.logger[message.severity].call(this.logger, message.source, arr, function () {});
};

/**
 * Print a log message to the console.
 * @method log
 */
Debug.prototype.log = function () {
  this.format('log', undefined, arguments);
};

/**
 * Print an info message to the console.
 * @method log
 */
Debug.prototype.info = function () {
  this.format('info', undefined, arguments);
};

/**
 * Print a debug message to the console.
 * @method log
 */
Debug.prototype.debug = function () {
  this.format('debug', undefined, arguments);
};

/**
 * Print a warning message to the console.
 * @method warn
 */
Debug.prototype.warn = function () {
  this.format('warn', undefined, arguments);
};

/**
 * Print an error message to the console.
 * @method error
 */
Debug.prototype.error = function () {
  this.format('error', undefined, arguments);
};

/**
 * Get a logger that logs messages prefixed by a given name.
 * @method getLogger
 * @param {String} name The prefix for logged messages.
 * @returns {Console} A console-like object.
 */
Debug.prototype.getLogger = function (name) {
  var log = function (severity, source) {
    var args = Array.prototype.splice.call(arguments, 2);
    this.format(severity, source, args);
  },
    logger = {
      freedom: true,
      debug: log.bind(this, 'debug', name),
      info: log.bind(this, 'info', name),
      log: log.bind(this, 'log', name),
      warn: log.bind(this, 'warn', name),
      error: log.bind(this, 'error', name)
    };
  return logger;
};

module.exports = Debug;

},{"./util":38}],25:[function(require,module,exports){
(function (global){
/*jslint indent:2,node:true */
var PromiseCompat = require('es6-promise').Promise;

var Api = require('./api');
var Debug = require('./debug');
var Hub = require('./hub');
var Manager = require('./manager');
var Policy = require('./policy');
var ProxyBinder = require('./proxybinder');
var Resource = require('./resource');
var util = require('./util');
var Bundle = require('./bundle');

var freedomGlobal;
var getGlobal = function () {
  'use strict';
  
  // Node.js
  if (typeof global !== 'undefined' && global.prototype === undefined) {
    freedomGlobal = global;
  // Browsers
  } else {
    setTimeout(function () {
      freedomGlobal = this;
    }, 0);
  }
};
getGlobal();

/**
 * Create a new freedom context.
 * @param {Object} context Information about the local context.
 * @see {util/workerEntry.js}
 * @param {String} manifest The manifest to load.
 * @param {Object} config Configuration keys set by the user.
 * @returns {Promise} A promise for the module defined in the manifest.
 */
var setup = function (context, manifest, config) {
  'use strict';
  var debug = new Debug(),
    hub = new Hub(debug),
    resource = new Resource(debug),
    api = new Api(debug),
    manager = new Manager(hub, resource, api),
    binder = new ProxyBinder(manager),
    policy,
    site_cfg = {
      'debug': 'log',
      'manifest': manifest,
      'moduleContext': (!context || typeof (context.isModule) === "undefined") ?
          util.isModuleContext() :
          context.isModule
    },
    link,
    Port;
  Bundle.register(context.providers, api);
  resource.register(context.resolvers || []);


  if (config) {
    util.mixin(site_cfg, config, true);
  }
  site_cfg.global = freedomGlobal;
  if (context) {
    util.mixin(site_cfg, context, true);
  }

  return new PromiseCompat(function (resolve, reject) {
    if (site_cfg.moduleContext) {
      Port = site_cfg.portType;
      link = new Port('Outbound', resource);
      manager.setup(link);

      // Delay debug messages until delegation to the parent context is setup.
      manager.once('delegate', manager.setup.bind(manager, debug));
    } else {
      manager.setup(debug);
      policy = new Policy(manager, resource, site_cfg);

      var fallbackLogger, getIface;
      fallbackLogger = function (message) {
        api.getCore('core.console', debug).then(function (Logger) {
          debug.setLogger(new Logger());
          if (message) {
            debug.error(message);
          }
        });
      };
      getIface = function (manifest) {
        return resource.get(site_cfg.location, manifest).then(
          function (canonical_manifest) {
            return policy.get([], canonical_manifest);
          }
        ).then(function (instance) {
          manager.setup(instance);
          return binder.bindDefault(instance, api, instance.manifest);
        });
      };

      if (site_cfg.logger) {
        getIface(site_cfg.logger).then(function (iface) {
          if (iface.external.api !== 'console') {
            fallbackLogger("Unwilling to use logger with unknown API:",
              iface.external.api);
          } else {
            debug.setLogger(iface.external());
          }
        }, fallbackLogger);
      } else {
        fallbackLogger();
      }

      getIface(site_cfg.manifest).then(function (iface) {
        return iface.external;
      }, function (err) {
        debug.error('Failed to retrieve manifest: ' + err);
        throw err;
      }).then(resolve, reject);
    }

    hub.emit('config', site_cfg);
  });
};

module.exports = setup;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./api":21,"./bundle":22,"./debug":24,"./hub":26,"./manager":29,"./policy":32,"./proxybinder":36,"./resource":37,"./util":38,"es6-promise":undefined}],26:[function(require,module,exports){
/*jslint indent:2,sloppy:true,node:true */
var util = require('./util');

/**
 * Defines fdom.Hub, the core message hub between freedom modules.
 * Incomming messages from apps are sent to hub.onMessage()
 * @class Hub
 * @param {Debug} debug Logger for debugging.
 * @constructor
 */
var Hub = function (debug) {
  this.debug = debug;
  this.config = {};
  this.apps = {};
  this.routes = {};
  this.unbound = [];

  util.handleEvents(this);
  this.on('config', function (config) {
    util.mixin(this.config, config);
  }.bind(this));
};

/**
 * Handle an incoming message from a freedom app.
 * @method onMessage
 * @param {String} source The identifiying source of the message.
 * @param {Object} message The sent message.
 */
Hub.prototype.onMessage = function (source, message) {
  var destination = this.routes[source], type;
  if (!destination || !destination.app) {
    this.debug.warn("Message dropped from unregistered source " + source);
    return;
  }

  if (!this.apps[destination.app]) {
    this.debug.warn("Message dropped to destination " + destination.app);
    return;
  }

  // The firehose tracing all internal freedom.js messages.
  if (!message.quiet && !destination.quiet && this.config && this.config.trace) {
    type = message.type;
    if (message.type === 'message' && message.message &&
        message.message.action === 'method') {
      type = 'method.' + message.message.type;
    } else if (message.type === 'method' && message.message &&
        message.message.type === 'method') {
      type = 'return.' + message.message.name;
    } else if (message.type === 'message' && message.message &&
        message.message.type === 'event') {
      type = 'event.' + message.message.name;
    }
    this.debug.debug(this.apps[destination.source].toString() +
        " -" + type + "-> " +
        this.apps[destination.app].toString() + "." + destination.flow);
  }

  this.apps[destination.app].onMessage(destination.flow, message);
};

/**
 * Get the local destination port of a flow.
 * @method getDestination
 * @param {String} source The flow to retrieve.
 * @return {Port} The destination port.
 */
Hub.prototype.getDestination = function (source) {
  var destination = this.routes[source];
  if (!destination) {
    return null;
  }
  return this.apps[destination.app];
};

/**
 * Get the local source port of a flow.
 * @method getSource
 * @param {Port} source The flow identifier to retrieve.
 * @return {Port} The source port.
 */
Hub.prototype.getSource = function (source) {
  if (!source) {
    return false;
  }
  if (!this.apps[source.id]) {
    this.debug.warn("No registered source '" + source.id + "'");
    return false;
  }
  return this.apps[source.id];
};

/**
 * Register a destination for messages with this hub.
 * @method register
 * @param {Port} app The Port to register.
 * @param {Boolean} [force] Whether to override an existing port.
 * @return {Boolean} Whether the app was registered.
 */
Hub.prototype.register = function (app, force) {
  if (!this.apps[app.id] || force) {
    this.apps[app.id] = app;
    return true;
  } else {
    return false;
  }
};

/**
 * Deregister a destination for messages with the hub.
 * Note: does not remove associated routes. As such, deregistering will
 * prevent the installation of new routes, but will not distrupt existing
 * hub routes.
 * @method deregister
 * @param {Port} app The Port to deregister
 * @return {Boolean} Whether the app was deregistered.
 */
Hub.prototype.deregister = function (app) {
  if (!this.apps[app.id]) {
    return false;
  }
  delete this.apps[app.id];
  return true;
};

/**
 * Install a new route in the hub.
 * @method install
 * @param {Port} source The source of the route.
 * @param {Port} destination The destination of the route.
 * @param {String} flow The flow where the destination will receive messages.
 * @param {Boolean} quiet Whether messages on this route should be suppressed.
 * @return {String} A routing source identifier for sending messages.
 */
Hub.prototype.install = function (source, destination, flow, quiet) {
  source = this.getSource(source);
  if (!source) {
    return;
  }
  if (!destination) {
    this.debug.warn("Unwilling to generate blackhole flow from " + source.id);
    return;
  }

  var route = this.generateRoute();
  this.routes[route] = {
    app: destination,
    flow: flow,
    source: source.id,
    quiet: quiet
  };
  if (typeof source.on === 'function') {
    source.on(route, this.onMessage.bind(this, route));
  }

  return route;
};

/**
 * Uninstall a hub route.
 * @method uninstall
 * @param {Port} source The source of the route.
 * @param {String} flow The route to uninstall.
 * @return {Boolean} Whether the route was able to be uninstalled.
 */
Hub.prototype.uninstall = function (source, flow) {
  source = this.getSource(source);
  if (!source) {
    return;
  }

  var route = this.routes[flow];
  if (!route) {
    return false;
  } else if (route.source !== source.id) {
    this.debug.warn("Flow " + flow + " does not belong to port " + source.id);
    return false;
  }

  delete this.routes[flow];
  if (typeof source.off === 'function') {
    source.off(route);
  }
  return true;
};

/**
 * Generate a unique routing identifier.
 * @method generateRoute
 * @return {String} a routing source identifier.
 * @private
 */
Hub.prototype.generateRoute = function () {
  return util.getId();
};

module.exports = Hub;

},{"./util":38}],27:[function(require,module,exports){
/*jslint indent:2, node:true, sloppy:true */
var util = require('./util');

/**
 * A link connects two freedom hubs. This is an abstract class
 * providing common functionality of translating control channels,
 * and integrating config information.
 * @class Link
 * @implements Port
 * @constructor
 */
var Link = function (name, resource) {
  this.id = 'Link' + Math.random();
  this.name = name;
  this.resource = resource;
  this.config = {};
  this.src = null;

  util.handleEvents(this);
  util.mixin(this, Link.prototype);
};

/**
 * Receive messages from the hub to this port.
 * Manages startup, and passes others to 'deliverMessage' implemented
 * in derived classes.
 * @method onMessage
 * @param {String} flow the channel/flow of the message.
 * @param {Object} message The Message.
 */
Link.prototype.onMessage = function (flow, message) {
  if (flow === 'control' && !this.controlChannel) {
    if (!this.controlChannel && message.channel) {
      this.controlChannel = message.channel;
      util.mixin(this.config, message.config);
      this.start();
    }
  } else {
    this.deliverMessage(flow, message);
  }
};

/**
 * Register a handler to alert of errors on this port.
 * @method addErrorHandler
 * @param {Function} handler Method to call with errors.
 */
Link.prototype.addErrorHandler = function (handler) {
  this.onError = handler;
};

/**
 * Report an error on this link.
 * @method onerror
 * @param {Error} err The error that occurred.
 */
Link.prototype.onError = function (err) {
  //Filled in by addErrorHandler
};

/**
 * Emit messages to the the hub, mapping control channels.
 * @method emitMessage
 * @param {String} flow the flow to emit the message on.
 * @param {Object} messgae The message to emit.
 */
Link.prototype.emitMessage = function (flow, message) {
  if (flow === 'control' && this.controlChannel) {
    flow = this.controlChannel;
  }
  this.emit(flow, message);
};

module.exports = Link;

},{"./util":38}],28:[function(require,module,exports){
/*globals Worker */
/*jslint indent:2, white:true, node:true, sloppy:true, browser:true */
var Link = require('../link');

/**
 * A port providing message transport between two freedom contexts via Worker.
 * @class Worker
 * @extends Link
 * @uses handleEvents
 * @constructor
 */
var WorkerLink = function(id, resource) {
  Link.call(this, id, resource);
  if (id) {
    this.id = id;
  }
};

/**
 * Start this port by listening or creating a worker.
 * @method start
 * @private
 */
WorkerLink.prototype.start = function() {
  if (this.config.moduleContext) {
    this.setupListener();
  } else {
    this.setupWorker();
  }
};

/**
 * Stop this port by destroying the worker.
 * @method stop
 * @private
 */
WorkerLink.prototype.stop = function() {
  // Function is determined by setupListener or setupFrame as appropriate.
};

/**
 * Get the textual description of this port.
 * @method toString
 * @return {String} the description of this port.
 */
WorkerLink.prototype.toString = function() {
  return "[Worker " + this.id + "]";
};

/**
 * Set up a global listener to handle incoming messages to this
 * freedom.js context.
 * @method setupListener
 */
WorkerLink.prototype.setupListener = function() {
  var onMsg = function(msg) {
    this.emitMessage(msg.data.flow, msg.data.message);
  }.bind(this);
  this.obj = this.config.global;
  this.obj.addEventListener('message', onMsg, true);
  this.stop = function() {
    this.obj.removeEventListener('message', onMsg, true);
    delete this.obj;
  };
  this.emit('started');
  this.obj.postMessage("Ready For Messages");
};

/**
 * Set up a worker with an isolated freedom.js context inside.
 * @method setupWorker
 */
WorkerLink.prototype.setupWorker = function() {
  var worker,
    blob,
    self = this;
  worker = new Worker(this.config.source + '#' + this.id);

  worker.addEventListener('error', function(err) {
    this.onError(err);
  }.bind(this), true);
  worker.addEventListener('message', function(worker, msg) {
    if (!this.obj) {
      this.obj = worker;
      this.emit('started');
      return;
    }
    this.emitMessage(msg.data.flow, msg.data.message);
  }.bind(this, worker), true);
  this.stop = function() {
    worker.terminate();
    if (this.obj) {
      delete this.obj;
    }
  };
};

/**
 * Receive messages from the hub to this port.
 * Received messages will be emitted from the other side of the port.
 * @method deliverMessage
 * @param {String} flow the channel/flow of the message.
 * @param {Object} message The Message.
 */
WorkerLink.prototype.deliverMessage = function(flow, message) {
  if (flow === 'control' && message.type === 'close' &&
      message.channel === 'control') {
    this.stop();
  } else {
    if (this.obj) {
      this.obj.postMessage({
        flow: flow,
        message: message
      });
    } else {
      this.once('started', this.onMessage.bind(this, flow, message));
    }
  }
};

module.exports = WorkerLink;


},{"../link":27}],29:[function(require,module,exports){
/*jslint indent:2,node:true,sloppy:true */
var util = require('./util');
var ModuleInternal = require('./moduleinternal');

/**
 * A freedom port which manages the control plane of of changing hub routes.
 * @class Manager
 * @implements Port
 * @param {Hub} hub The routing hub to control.
 * @param {Resource} resource The resource manager for the runtime.
 * @param {Api} api The API manager for the runtime.
 * @constructor
 */
var Manager = function (hub, resource, api) {
  this.id = 'control';
  this.config = {};
  this.controlFlows = {};
  this.dataFlows = {};
  this.dataFlows[this.id] = [];
  this.reverseFlowMap = {};

  this.debug = hub.debug;
  this.hub = hub;
  this.resource = resource;
  this.api = api;

  this.delegate = null;
  this.toDelegate = {};
  
  this.hub.on('config', function (config) {
    util.mixin(this.config, config);
    this.emit('config');
  }.bind(this));
  
  util.handleEvents(this);
  this.hub.register(this);
};

/**
 * Provide a textual description of this port.
 * @method toString
 * @return {String} the description of this port.
 */
Manager.prototype.toString = function () {
  return "[Local Controller]";
};

/**
 * Process messages sent to this port.
 * The manager, or 'control' destination handles several types of messages,
 * identified by the request property.  The actions are:
 * 1. debug. Prints the message to the console.
 * 2. link. Creates a link between the source and a provided destination port.
 * 3. environment. Instantiate a module environment defined in ModuleInternal.
 * 4. delegate. Routes a defined set of control messages to another location.
 * 5. resource. Registers the source as a resource resolver.
 * 6. core. Generates a core provider for the requester.
 * 7. close. Tears down routes involing the requesting port.
 * 8. unlink. Tears down a route from the requesting port.
 * @method onMessage
 * @param {String} flow The source identifier of the message.
 * @param {Object} message The received message.
 */
Manager.prototype.onMessage = function (flow, message) {
  var reverseFlow = this.controlFlows[flow], origin;
  if (!reverseFlow) {
    this.debug.warn("Unknown message source: " + flow);
    return;
  }
  origin = this.hub.getDestination(reverseFlow);

  if (this.delegate && reverseFlow !== this.delegate &&
      this.toDelegate[flow]) {
    // Ship off to the delegee
    this.emit(this.delegate, {
      type: 'Delegation',
      request: 'handle',
      quiet: true,
      flow: flow,
      message: message
    });
    return;
  }

  if (message.request === 'debug') {
    this.debug.print(message);
    return;
  }

  if (message.request === 'link') {
    this.createLink(origin, message.name, message.to, message.overrideDest);
  } else if (message.request === 'environment') {
    this.createLink(origin, message.name, new ModuleInternal(this));
  } else if (message.request === 'delegate') {
    // Initate Delegation.
    if (this.delegate === null) {
      this.delegate = reverseFlow;
    }
    this.toDelegate[message.flow] = true;
    this.emit('delegate');
  } else if (message.request === 'resource') {
    this.resource.addResolver(message.args[0]);
    this.resource.addRetriever(message.service, message.args[1]);
  } else if (message.request === 'core') {
    if (this.core && reverseFlow === this.delegate) {
      (new this.core()).onMessage(origin, message.message);
      return;
    }
    this.getCore(function (to, core) {
      this.hub.onMessage(to, {
        type: 'core',
        core: core
      });
    }.bind(this, reverseFlow));
  } else if (message.request === 'close') {
    this.destroy(origin);
  } else if (message.request === 'unlink') {
    this.removeLink(origin, message.to);
  } else {
    this.debug.warn("Unknown control request: " + message.request);
    this.debug.log(JSON.stringify(message));
    return;
  }
};

/**
 * Get the port messages will be routed to given its id.
 * @method getPort
 * @param {String} portId The ID of the port.
 * @returns {fdom.Port} The port with that ID.
 */
Manager.prototype.getPort = function (portId) {
  return this.hub.getDestination(this.controlFlows[portId]);
};

/**
 * Set up a port with the hub.
 * @method setup
 * @param {Port} port The port to register.
 */
Manager.prototype.setup = function (port) {
  if (!port.id) {
    this.debug.warn("Refusing to setup unidentified port ");
    return false;
  }

  if (this.controlFlows[port.id]) {
    this.debug.warn("Refusing to re-initialize port " + port.id);
    return false;
  }

  if (!this.config.global) {
    this.once('config', this.setup.bind(this, port));
    return;
  }

  this.hub.register(port);
  var flow = this.hub.install(this, port.id, "control"),
    reverse = this.hub.install(port, this.id, port.id);
  this.controlFlows[port.id] = flow;
  this.dataFlows[port.id] = [reverse];
  this.reverseFlowMap[flow] = reverse;
  this.reverseFlowMap[reverse] = flow;

  if (port.lineage) {
    this.emit('moduleAdd', {id: port.id, lineage: port.lineage});
  }
  
  this.hub.onMessage(flow, {
    type: 'setup',
    channel: reverse,
    config: this.config
  });

  return true;
};

/**
 * Tear down a port on the hub.
 * @method destroy
 * @apram {Port} port The port to unregister.
 */
Manager.prototype.destroy = function (port) {
  if (!port.id) {
    this.debug.warn("Unable to tear down unidentified port");
    return false;
  }

  if (port.lineage) {
    this.emit('moduleRemove', {id: port.id, lineage: port.lineage});
  }

  // Remove the port.
  delete this.controlFlows[port.id];

  // Remove associated links.
  var i;
  for (i = this.dataFlows[port.id].length - 1; i >= 0; i -= 1) {
    this.removeLink(port, this.dataFlows[port.id][i]);
  }

  // Remove the port.
  delete this.dataFlows[port.id];
  this.hub.deregister(port);
};

/**
 * Create a link between two ports.  Links are created in both directions,
 * and a message with those capabilities is sent to the source port.
 * @method createLink
 * @param {Port} port The source port.
 * @param {String} name The flow for messages from destination to port.
 * @param {Port} destination The destination port.
 * @param {String} [destName] The flow name for messages to the destination.
 * @param {Boolean} [toDest] Tell the destination about the link.
 */
Manager.prototype.createLink = function (port, name, destination, destName,
                                         toDest) {
  if (!this.config.global) {
    this.once('config',
      this.createLink.bind(this, port, name, destination, destName));
    return;
  }
  
  if (!this.controlFlows[port.id]) {
    this.debug.warn('Unwilling to link from non-registered source.');
    return;
  }

  if (!this.controlFlows[destination.id]) {
    if (this.setup(destination) === false) {
      this.debug.warn('Could not find or setup destination.');
      return;
    }
  }
  var quiet = destination.quiet || false,
    outgoingName = destName || 'default',
    outgoing = this.hub.install(port, destination.id, outgoingName, quiet),
    reverse;

  // Recover the port so that listeners are installed.
  destination = this.hub.getDestination(outgoing);
  reverse = this.hub.install(destination, port.id, name, quiet);

  this.reverseFlowMap[outgoing] = reverse;
  this.dataFlows[port.id].push(outgoing);
  this.reverseFlowMap[reverse] = outgoing;
  this.dataFlows[destination.id].push(reverse);

  if (toDest) {
    this.hub.onMessage(this.controlFlows[destination.id], {
      type: 'createLink',
      name: outgoingName,
      channel: reverse,
      reverse: outgoing
    });
  } else {
    this.hub.onMessage(this.controlFlows[port.id], {
      name: name,
      type: 'createLink',
      channel: outgoing,
      reverse: reverse
    });
  }
};

/**
 * Remove a link between to ports. The reverse link will also be removed.
 * @method removeLink
 * @param {Port} port The source port.
 * @param {String} name The flow to be removed.
 */
Manager.prototype.removeLink = function (port, name) {
  var reverse = this.hub.getDestination(name),
    rflow = this.reverseFlowMap[name],
    i;

  if (!reverse || !rflow) {
    this.debug.warn("Could not find metadata to remove flow: " + name);
    return;
  }

  if (this.hub.getDestination(rflow).id !== port.id) {
    this.debug.warn("Source port does not own flow " + name);
    return;
  }

  // Notify ports that a channel is closing.
  i = this.controlFlows[port.id];
  if (i) {
    this.hub.onMessage(i, {
      type: 'close',
      channel: name
    });
  }
  i = this.controlFlows[reverse.id];
  if (i) {
    this.hub.onMessage(i, {
      type: 'close',
      channel: rflow
    });
  }

  // Uninstall the channel.
  this.hub.uninstall(port, name);
  this.hub.uninstall(reverse, rflow);

  delete this.reverseFlowMap[name];
  delete this.reverseFlowMap[rflow];
  this.forgetFlow(reverse.id, rflow);
  this.forgetFlow(port.id, name);
};

/**
 * Forget the flow from id with a given name.
 * @method forgetFlow
 * @private
 * @param {String} id The port ID of the source.
 * @param {String} name The flow name.
 */
Manager.prototype.forgetFlow = function (id, name) {
  var i;
  if (this.dataFlows[id]) {
    for (i = 0; i < this.dataFlows[id].length; i += 1) {
      if (this.dataFlows[id][i] === name) {
        this.dataFlows[id].splice(i, 1);
        break;
      }
    }
  }
};

/**
 * Get the core freedom.js API active on the current hub.
 * @method getCore
 * @private
 * @param {Function} cb Callback to fire with the core object.
 */
Manager.prototype.getCore = function (cb) {
  if (this.core) {
    cb(this.core);
  } else {
    this.api.getCore('core', this).then(function (core) {
      this.core = core;
      cb(this.core);
    }.bind(this));
  }
};

module.exports = Manager;

},{"./moduleinternal":31,"./util":38}],30:[function(require,module,exports){
/*jslint indent:2,node:true,sloppy:true */
var util = require('./util');
var Provider = require('./provider');

/**
 * The external Port face of a module on a hub.
 * @class Module
 * @extends Port
 * @param {String} manifestURL The manifest this module loads.
 * @param {String[]} creator The lineage of creation for this module.
 * @param {Policy} Policy The policy loader for dependencies.
 * @constructor
 */
var Module = function (manifestURL, manifest, creator, policy) {
  this.api = policy.api;
  this.policy = policy;
  this.resource = policy.resource;
  this.debug = policy.debug;

  this.config = {};

  this.id = manifestURL + Math.random();
  this.manifestId = manifestURL;
  this.manifest = manifest;
  this.lineage = [this.manifestId].concat(creator);

  this.quiet = this.manifest.quiet || false;

  this.externalPortMap = {};
  this.internalPortMap = {};
  this.dependantChannels = [];
  this.started = false;

  util.handleEvents(this);
};

/**
 * Receive a message for the Module.
 * @method onMessage
 * @param {String} flow The origin of the message.
 * @param {Object} message The message received.
 */
Module.prototype.onMessage = function (flow, message) {
  if (flow === 'control') {
    if (message.type === 'setup') {
      this.controlChannel = message.channel;
      util.mixin(this.config, message.config);
      this.emit(this.controlChannel, {
        type: 'Core Provider',
        request: 'core'
      });
      this.start();
      return;
    } else if (message.type === 'createLink' && message.channel) {
      this.debug.debug(this + 'got create link for ' + message.name);
      this.externalPortMap[message.name] = message.channel;
      if (this.internalPortMap[message.name] === undefined) {
        this.internalPortMap[message.name] = false;
      }
      var msg = {
        type: 'default channel announcement',
        channel: message.reverse
      };
      if (this.manifest.dependencies &&
          this.manifest.dependencies[message.name]) {
        msg.api = this.manifest.dependencies[message.name].api;
      }
      this.emit(message.channel, msg);
      return;
    } else if (message.core) {
      this.core = new message.core();
      this.emit('core', message.core);
      return;
    } else if (message.type === 'close') {
      // Closing channel.
      if (message.channel === 'control') {
        this.stop();
      }
      this.deregisterFlow(message.channel, false);
    } else {
      this.port.onMessage(flow, message);
    }
  } else {
    if ((this.externalPortMap[flow] === false ||
        !this.externalPortMap[flow]) && message.channel) {
      this.debug.debug(this + 'handling channel announcement for ' + flow);
      this.externalPortMap[flow] = message.channel;
      if (this.internalPortMap[flow] === undefined) {
        this.internalPortMap[flow] = false;

        // New incoming connection attempts should get routed to modInternal.
        if (this.manifest.provides && this.modInternal) {
          this.port.onMessage(this.modInternal, {
            type: 'Connection',
            channel: flow,
            api: message.api
          });
        } else if (this.manifest.provides) {
          this.once('modInternal', function (flow, api) {
            this.port.onMessage(this.modInternal, {
              type: 'Connection',
              channel: flow,
              api: api
            });
          }.bind(this, flow, message.api));
        // First connection retains legacy mapping as 'default'.
        } else if (!this.externalPortMap['default'] && message.channel) {
          this.externalPortMap['default'] = message.channel;
          this.once('internalChannelReady', function (flow) {
            this.internalPortMap[flow] = this.internalPortMap['default'];
          }.bind(this, flow));
        }
      }
      return;
    } else if (!this.started) {
      this.once('start', this.onMessage.bind(this, flow, message));
    } else {
      if (this.internalPortMap[flow] === false) {
        console.warn('waiting on internal channel for msg');
        this.once('internalChannelReady', this.onMessage.bind(this, flow, message));
      } else if (!this.internalPortMap[flow]) {
        this.debug.error('Unexpected message from ' + flow);
        return;
      } else {
        this.port.onMessage(this.internalPortMap[flow], message);
      }
    }
  }
};

/**
 * Clean up after a flow which is no longer used / needed.
 * @method deregisterFLow
 * @param {String} flow The flow to remove mappings for.
 * @param {Boolean} internal If the flow name is the internal identifier.
 * @returns {Boolean} Whether the flow was successfully deregistered.
 * @private
 */
Module.prototype.deregisterFlow = function (flow, internal) {
  var key,
    map = internal ? this.internalPortMap : this.externalPortMap;
  // TODO: this is inefficient, but seems less confusing than a 3rd
  // reverse lookup map.
  for (key in map) {
    if (map[key] === flow) {
      if (internal) {
        this.emit(this.controlChannel, {
          type: 'Channel Teardown',
          request: 'unlink',
          to: this.externalPortMap[key]
        });
      } else {
        this.port.onMessage('control', {
          type: 'close',
          channel: this.internalPortMap[key]
        });
      }
      delete this.externalPortMap[key];
      delete this.internalPortMap[key];

      // When there are still non-dependant channels, keep running
      for (key in this.externalPortMap) {
        if (this.externalPortMap.hasOwnProperty(key)) {
          if (this.dependantChannels.indexOf(key) < 0) {
            return true;
          }
        }
      }
      // Otherwise shut down the module.
      this.stop();
      return true;
    }
  }
  return false;
};

/**
 * Attempt to start the module once the remote freedom context
 * exists.
 * @method start
 * @private
 */
Module.prototype.start = function () {
  var Port;
  if (this.started || this.port) {
    return false;
  }
  if (this.controlChannel) {
    this.loadLinks();
    Port = this.config.portType;
    this.port = new Port(this.manifest.name, this.resource);
    // Listen to all port messages.
    this.port.on(this.emitMessage.bind(this));
    this.port.addErrorHandler(function (err) {
      this.debug.warn('Module Failed', err);
      this.stop();
    }.bind(this));
    // Tell the local port to ask us for help.
    this.port.onMessage('control', {
      channel: 'control',
      config: this.config
    });

    // Tell the remote location to delegate debugging.
    this.port.onMessage('control', {
      type: 'Redirect',
      request: 'delegate',
      flow: 'debug'
    });
    this.port.onMessage('control', {
      type: 'Redirect',
      request: 'delegate',
      flow: 'core'
    });
    
    // Tell the container to instantiate the counterpart to this external view.
    this.port.onMessage('control', {
      type: 'Environment Configuration',
      request: 'environment',
      name: 'ModInternal'
    });
  }
};

/**
 * Stop the module when it is no longer needed, and tear-down state.
 * @method stop
 * @private
 */
Module.prototype.stop = function () {
  if (!this.started) {
    return;
  }
  if (this.port) {
    this.port.off();
    this.port.onMessage('control', {
      type: 'close',
      channel: 'control'
    });
    this.port.stop();
    delete this.port;
  }
  this.started = false;
};

/**
 * Textual Description of the Port
 * @method toString
 * @return {String} The description of this Port.
 */
Module.prototype.toString = function () {
  return "[Module " + this.manifest.name + "]";
};

/**
 * Intercept messages as they arrive from the module,
 * mapping them between internal and external flow names.
 * @method emitMessage
 * @param {String} name The destination the module wants to send to.
 * @param {Object} message The message to send.
 * @private
 */
Module.prototype.emitMessage = function (name, message) {
  if (this.internalPortMap[name] === false && message.channel) {
    this.internalPortMap[name] = message.channel;
    this.emit('internalChannelReady');
    return;
  }
  // Terminate debug redirection requested in start().
  if (name === 'control') {
    if (message.flow === 'debug' && message.message) {
      this.debug.format(message.message.severity,
          message.message.source || this.toString(),
          message.message.msg);
    } else if (message.flow === 'core' && message.message) {
      if (!this.core) {
        this.once('core', this.emitMessage.bind(this, name, message));
        return;
      }
      if (message.message.type === 'register') {
        message.message.reply = this.port.onMessage.bind(this.port, 'control');
        this.externalPortMap[message.message.id] = false;
      }
      this.core.onMessage(this, message.message);
    } else if (message.name === 'ModInternal' && !this.modInternal) {
      this.modInternal = message.channel;
      this.port.onMessage(this.modInternal, {
        type: 'Initialization',
        id: this.manifestId,
        appId: this.id,
        manifest: this.manifest,
        lineage: this.lineage,
        channel: message.reverse
      });
      this.emit('modInternal');
    } else if (message.type === 'createLink') {
      this.internalPortMap[message.name] = message.channel;
      this.port.onMessage(message.channel, {
        type: 'channel announcement',
        channel: message.reverse
      });
      this.emit('internalChannelReady');
    } else if (message.type === 'close') {
      this.deregisterFlow(message.channel, true);
    }
  } else if (name === 'ModInternal' && message.type === 'ready' && !this.started) {
    this.started = true;
    this.emit('start');
  } else if (name === 'ModInternal' && message.type === 'resolve') {
    this.resource.get(this.manifestId, message.data).then(function (id, data) {
      this.port.onMessage(this.modInternal, {
        type: 'resolve response',
        id: id,
        data: data
      });
    }.bind(this, message.id), function () {
      this.debug.warn('Error Resolving URL for Module.');
    }.bind(this));
  } else {
    this.emit(this.externalPortMap[name], message);
  }
  return false;
};

/**
 * Request the external routes used by this module.
 * @method loadLinks
 * @private
 */
Module.prototype.loadLinks = function () {
  var i, channels = ['default'], name, dep,
    finishLink = function (dep, name, provider) {
      var style = this.api.getInterfaceStyle(name);
      dep.getInterface()[style](provider);
    };
  if (this.manifest.permissions) {
    for (i = 0; i < this.manifest.permissions.length; i += 1) {
      name = this.manifest.permissions[i];
      if (channels.indexOf(name) < 0 && name.indexOf('core.') === 0) {
        channels.push(name);
        this.dependantChannels.push(name);
        dep = new Provider(this.api.get(name).definition, this.debug);
        this.api.getCore(name, this).then(finishLink.bind(this, dep, name));

        this.emit(this.controlChannel, {
          type: 'Core Link to ' + name,
          request: 'link',
          name: name,
          to: dep
        });
      }
    }
  }
  if (this.manifest.dependencies) {
    util.eachProp(this.manifest.dependencies, function (desc, name) {
      if (channels.indexOf(name) < 0) {
        channels.push(name);
        this.dependantChannels.push(name);
      }
      this.resource.get(this.manifestId, desc.url).then(function (url) {
        this.policy.get(this.lineage, url).then(function (dep) {
          this.updateEnv(name, dep.manifest);
          this.emit(this.controlChannel, {
            type: 'Link to ' + name,
            request: 'link',
            name: name,
            overrideDest: name + '.' + this.id,
            to: dep
          });
        }.bind(this), function (err) {
          this.debug.warn('failed to load dep: ', name, err);
        }.bind(this));
      }.bind(this));
    }.bind(this));
  }
  // Note that messages can be synchronous, so some ports may already be bound.
  for (i = 0; i < channels.length; i += 1) {
    this.externalPortMap[channels[i]] = this.externalPortMap[channels[i]] || false;
    this.internalPortMap[channels[i]] = false;
  }
};

/**
 * Update the module environment with information about a dependent manifest.
 * @method updateEnv
 * @param {String} dep The dependency
 * @param {Object} manifest The manifest of the dependency
 */
Module.prototype.updateEnv = function (dep, manifest) {
  if (!manifest) {
    return;
  }
  if (!this.modInternal) {
    this.once('modInternal', this.updateEnv.bind(this, dep, manifest));
    return;
  }
  
  var metadata;

  // Decide if/what other properties should be exported.
  // Keep in sync with ModuleInternal.updateEnv
  metadata = {
    name: manifest.name,
    icon: manifest.icon,
    description: manifest.description,
    api: manifest.api
  };
  
  this.port.onMessage(this.modInternal, {
    type: 'manifest',
    name: dep,
    manifest: metadata
  });
};

module.exports = Module;

},{"./provider":33,"./util":38}],31:[function(require,module,exports){
/*jslint indent:2, node:true,sloppy:true */
var PromiseCompat = require('es6-promise').Promise;

var ApiInterface = require('./proxy/apiInterface');
var Provider = require('./provider');
var ProxyBinder = require('./proxybinder');
var util = require('./util');

/**
 * The internal logic for module setup, which makes sure the public
 * facing exports have appropriate properties, and load user scripts.
 * @class ModuleInternal
 * @extends Port
 * @param {Port} manager The manager in this module to use for routing setup.
 * @constructor
 */
var ModuleInternal = function (manager) {
  this.config = {};
  this.manager = manager;
  this.debug = manager.debug;
  this.binder = new ProxyBinder(this.manager);
  this.api = this.manager.api;
  this.manifests = {};
  this.providers = {};
  
  this.id = 'ModuleInternal';
  this.pendingPorts = 0;
  this.requests = {};

  util.handleEvents(this);
};

/**
 * Message handler for this port.
 * This port only handles two messages:
 * The first is its setup from the manager, which it uses for configuration.
 * The second is from the module controller (fdom.port.Module), which provides
 * the manifest info for the module.
 * @method onMessage
 * @param {String} flow The detination of the message.
 * @param {Object} message The message.
 */
ModuleInternal.prototype.onMessage = function (flow, message) {
  if (flow === 'control') {
    if (!this.controlChannel && message.channel) {
      this.controlChannel = message.channel;
      util.mixin(this.config, message.config);
    }
  } else if (flow === 'default' && !this.appId) {
    // Recover the ID of this module:
    this.port = this.manager.hub.getDestination(message.channel);
    this.externalChannel = message.channel;
    this.appId = message.appId;
    this.lineage = message.lineage;

    var objects = this.mapProxies(message.manifest);

    this.generateEnv(message.manifest, objects).then(function () {
      return this.loadLinks(objects);
    }.bind(this)).then(this.loadScripts.bind(this, message.id,
        message.manifest.app.script));
  } else if (flow === 'default' && this.requests[message.id]) {
    this.requests[message.id](message.data);
    delete this.requests[message.id];
  } else if (flow === 'default' && message.type === 'manifest') {
    this.emit('manifest', message);
    this.updateManifest(message.name, message.manifest);
  } else if (flow === 'default' && message.type === 'Connection') {
    // Multiple connections can be made to the default provider.
    if (message.api && this.providers[message.api]) {
      this.manager.createLink(this.providers[message.api], message.channel,
                             this.port, message.channel);
    } else if (this.defaultPort &&
               (message.api === this.defaultPort.api || !message.api)) {
      this.manager.createLink(this.defaultPort, message.channel,
                              this.port, message.channel);
    } else {
      this.once('start', this.onMessage.bind(this, flow, message));
    }
  }
};

/**
 * Get a textual description of this Port.
 * @method toString
 * @return {String} a description of this Port.
 */
ModuleInternal.prototype.toString = function () {
  return "[Environment Helper]";
};

/**
 * Generate an externaly visisble namespace
 * @method generateEnv
 * @param {Object} manifest The manifest of the module.
 * @param {Object[]} items Other interfaces to load.
 * @returns {Promise} A promise when the external namespace is visible.
 * @private
 */
ModuleInternal.prototype.generateEnv = function (manifest, items) {
  return this.binder.bindDefault(this.port, this.api, manifest, true).then(
    function (binding) {
      var i = 0;
      binding.port.api = binding.external.api;
      this.defaultPort = binding.port;
      if (binding.external.api) {
        for (i = 0; i < items.length; i += 1) {
          if (items[i].name === binding.external.api && items[i].def.provides) {
            items.splice(i, 1);
            break;
          }
        }
      }
      this.config.global.freedom = binding.external;
    }.bind(this)
  );
};

/**
 * Attach a proxy to the externally visible namespace.
 * @method attach
 * @param {String} name The name of the proxy.
 * @param {Boolean} provides If this proxy is a provider.
 * @param {ProxyInterface} proxy The proxy to attach.
 * @param {String} api The API the proxy implements.
 * @private.
 */
ModuleInternal.prototype.attach = function (name, provides, proxy) {
  var exp = this.config.global.freedom;
  
  if (provides) {
    this.providers[name] = proxy.port;
  }

  if (!exp[name]) {
    exp[name] = proxy.external;
    if (this.manifests[name]) {
      exp[name].manifest = this.manifests[name];
    }
  }

  this.pendingPorts -= 1;
  if (this.pendingPorts === 0) {
    this.emit('start');
  }
};

/**
 * Request a set of proxy interfaces, and bind them to the external
 * namespace.
 * @method loadLinks
 * @param {Object[]} items Descriptors of the proxy ports to load.
 * @private
 * @returns {Promise} Promise for when all links are loaded.
 */
//TODO(willscott): promise should be chained, rather than going through events.
ModuleInternal.prototype.loadLinks = function (items) {
  var i, proxy, provider, core,
    manifestPredicate = function (name, flow, msg) {
      return flow === 'manifest' && msg.name === name;
    },
    onManifest = function (item, msg) {
      var definition = {
        name: item.api
      };
      if (!msg.manifest.api || !msg.manifest.api[item.api]) {
        definition.definition = null;
      } else {
        definition.definition = msg.manifest.api[item.api];
      }
      this.binder.getExternal(this.port, item.name, definition).then(
        this.attach.bind(this, item.name, false)
      );
    }.bind(this),
    promise = new PromiseCompat(function (resolve, reject) {
      this.once('start', resolve);
    }.bind(this));

  for (i = 0; i < items.length; i += 1) {
    if (items[i].api && !items[i].def) {
      if (this.manifests[items[i].name]) {
        onManifest(items[i], {
          manifest: this.manifests[items[i].name]
        });
      } else {
        this.once(manifestPredicate.bind({}, items[i].name),
                  onManifest.bind(this, items[i]));
      }
    } else {
      this.binder.getExternal(this.port, items[i].name, items[i].def).then(
        this.attach.bind(this, items[i].name, items[i].def &&
                         items[i].def.provides)
      );
    }
    this.pendingPorts += 1;
  }
  
  // Allow resolution of files by parent.
  this.manager.resource.addResolver(function (manifest, url, resolve) {
    var id = util.getId();
    this.requests[id] = resolve;
    this.emit(this.externalChannel, {
      type: 'resolve',
      id: id,
      data: url
    });
    return true;
  }.bind(this));

  // Attach Core.
  this.pendingPorts += 1;

  core = this.api.get('core').definition;
  provider = new Provider(core, this.debug);
  this.manager.getCore(function (CoreProv) {
    new CoreProv(this.manager).setId(this.lineage);
    provider.getInterface().provideAsynchronous(CoreProv);
  }.bind(this));

  this.emit(this.controlChannel, {
    type: 'Link to core',
    request: 'link',
    name: 'core',
    to: provider
  });
  
  this.binder.getExternal(provider, 'default', {
    name: 'core',
    definition: core
  }).then(
    this.attach.bind(this, 'core', false)
  );


//  proxy = new Proxy(ApiInterface.bind({}, core), this.debug);
//  this.manager.createLink(provider, 'default', proxy);
//  this.attach('core', {port: pr, external: proxy});

  if (this.pendingPorts === 0) {
    this.emit('start');
  }

  return promise;
};

/**
 * Update the exported manifest of a dependency.
 * Sets it internally if not yet exported, or attaches the property if it
 * is loaded after the module has started (we don't delay start to retreive
 * the manifest of the dependency.)
 * @method updateManifest
 * @param {String} name The Dependency
 * @param {Object} manifest The manifest of the dependency
 */
ModuleInternal.prototype.updateManifest = function (name, manifest) {
  var exp = this.config.global.freedom;

  if (exp && exp[name]) {
    exp[name].manifest = manifest;
  } else {
    this.manifests[name] = manifest;
  }
};

/**
 * Determine which proxy ports should be exposed by this module.
 * @method mapProxies
 * @param {Object} manifest the module JSON manifest.
 * @return {Object[]} proxy descriptors defined in the manifest.
 */
ModuleInternal.prototype.mapProxies = function (manifest) {
  var proxies = [], seen = ['core'], i, obj;
  
  if (manifest.permissions) {
    for (i = 0; i < manifest.permissions.length; i += 1) {
      obj = {
        name: manifest.permissions[i],
        def: undefined
      };
      obj.def = this.api.get(obj.name);
      if (seen.indexOf(obj.name) < 0 && obj.def) {
        proxies.push(obj);
        seen.push(obj.name);
      }
    }
  }
  
  if (manifest.dependencies) {
    util.eachProp(manifest.dependencies, function (desc, name) {
      obj = {
        name: name,
        api: desc.api
      };
      if (seen.indexOf(name) < 0) {
        if (desc.api) {
          obj.def = this.api.get(desc.api);
        }
        proxies.push(obj);
        seen.push(name);
      }
    }.bind(this));
  }
  
  if (manifest.provides) {
    for (i = 0; i < manifest.provides.length; i += 1) {
      obj = {
        name: manifest.provides[i],
        def: undefined
      };
      obj.def = this.api.get(obj.name);
      if (obj.def) {
        obj.def.provides = true;
      } else if (manifest.api && manifest.api[obj.name]) {
        obj.def = {
          name: obj.name,
          definition: manifest.api[obj.name],
          provides: true
        };
      } else {
        this.debug.warn('Module will not provide "' + obj.name +
          '", since no declaration can be found.');
        /*jslint continue:true*/
        continue;
      }
      /*jslint continue:false*/
      if (seen.indexOf(obj.name) < 0) {
        proxies.push(obj);
        seen.push(obj.name);
      }
    }
  }

  return proxies;
};

/**
 * Load external scripts into this namespace.
 * @method loadScripts
 * @param {String} from The URL of this modules's manifest.
 * @param {String[]} scripts The URLs of the scripts to load.
 */
ModuleInternal.prototype.loadScripts = function (from, scripts) {
  // TODO(salomegeo): add a test for failure.
  var importer = function (script, resolve, reject) {
    try {
      this.config.global.importScripts(script);
      resolve(true);
    } catch (e) {
      reject(e);
    }
  }.bind(this),
    scripts_count,
    load;
  if (typeof scripts === 'string') {
    scripts_count = 1;
  } else {
    scripts_count = scripts.length;
  }

  load = function (next) {
    if (next === scripts_count) {
      this.emit(this.externalChannel, {
        type: "ready"
      });
      return;
    }

    var script;
    if (typeof scripts === 'string') {
      script = scripts;
    } else {
      script = scripts[next];
    }

    this.manager.resource.get(from, script).then(function (url) {
      this.tryLoad(importer, url).then(function () {
        load(next + 1);
      }.bind(this));
    }.bind(this));
  }.bind(this);



  if (!this.config.global.importScripts) {
    importer = function (url, resolve, reject) {
      var script = this.config.global.document.createElement('script');
      script.src = url;
      script.addEventListener('load', resolve, true);
      this.config.global.document.body.appendChild(script);
    }.bind(this);
  }

  load(0);
};

/**
 * Attempt to load resolved scripts into the namespace.
 * @method tryLoad
 * @private
 * @param {Function} importer The actual import function
 * @param {String[]} urls The resoved URLs to load.
 * @returns {Promise} completion of load
 */
ModuleInternal.prototype.tryLoad = function (importer, url) {
  return new PromiseCompat(importer.bind({}, url)).then(function (val) {
    return val;
  }, function (e) {
    this.debug.warn(e.stack);
    this.debug.error("Error loading " + url, e);
    this.debug.error("If the stack trace is not useful, see https://" +
        "github.com/freedomjs/freedom/wiki/Debugging-Script-Parse-Errors");
  }.bind(this));
};

module.exports = ModuleInternal;

},{"./provider":33,"./proxy/apiInterface":34,"./proxybinder":36,"./util":38,"es6-promise":undefined}],32:[function(require,module,exports){
/*globals XMLHttpRequest */
/*jslint indent:2,white:true,node:true,sloppy:true */
var PromiseCompat = require('es6-promise').Promise;
var Module = require('./module');
var util = require('./util');

/**
 * The Policy registry for freedom.js.  Used to look up modules and provide
 * migration and coallesing of execution.
 * @Class Policy
 * @param {Manager} manager The manager of the active runtime.
 * @param {Resource} resource The resource loader of the active runtime.
 * @param {Object} config The local config.
 * @constructor
 */
var Policy = function(manager, resource, config) {
  this.api = manager.api;
  this.debug = manager.debug;
  this.location = config.location;
  this.resource = resource;

  this.config = config;
  this.runtimes = [];
  this.policies = [];
  this.pending = {};
  util.handleEvents(this);

  this.add(manager, config.policy);
  this.runtimes[0].local = true;
};

/**
 * The policy a runtime is expected to have unless it specifies
 * otherwise.
 * TODO: consider making static
 * @property defaultPolicy
 */
Policy.prototype.defaultPolicy = {
  background: false, // Can this runtime run 'background' modules?
  interactive: true // Is there a view associated with this runtime?
  // TODO: remaining runtime policy.
};

/**
 * The constraints a code modules is expected to have unless it specifies
 * otherwise.
 * TODO: consider making static
 * @property defaultConstraints
 */
Policy.prototype.defaultConstraints = {
  isolation: "always", // values: always, app, never
  placement: "local" // values: local, stable, redundant
  // TODO: remaining constraints, express platform-specific dependencies.
};

/**
 * Resolve a module from its canonical URL.
 * Reponds with the promise of a port representing the module, 
 * @method get
 * @param {String[]} lineage The lineage of the requesting module.
 * @param {String} id The canonical ID of the module to get.
 * @returns {Promise} A promise for the local port towards the module.
 */
Policy.prototype.get = function(lineage, id) {
  
  // Make sure that a module isn't getting located twice at the same time.
  // This is resolved by delaying if it until we see it in a 'moduleAdd' event.
  if (this.pending[id]) {
    return new PromiseCompat(function (resolve, reject) {
      this.once('placed', function(l, i) {
        this.get(l, i).then(resolve, reject);
      }.bind(this, lineage, id));
    }.bind(this));
  } else {
    this.pending[id] = true;
  }

  return this.loadManifest(id).then(function(manifest) {
    var constraints = this.overlay(this.defaultConstraints, manifest.constraints),
        runtime = this.findDestination(lineage, id, constraints),
        portId;
    if (runtime.local) {
      portId = this.isRunning(runtime, id, lineage,
                             constraints.isolation !== 'never');
      if(constraints.isolation !== 'always' && portId) {
        this.debug.info('Reused port ' + portId);
        delete this.pending[id];
        this.emit('placed');
        return runtime.manager.getPort(portId);
      } else {
        return new Module(id, manifest, lineage, this);
      }
    } else {
      // TODO: Create a port to go to the remote runtime.
      this.debug.error('Unexpected location selected for module placement');
      return false;
    }
  }.bind(this), function(err) {
    this.debug.error('Policy Error Resolving ' + id, err);
    throw(err);
  }.bind(this));
};

/**
 * Find the runtime destination for a module given its constraints and the
 * module creating it.
 * @method findDestination
 * @param {String[]} lineage The identity of the module creating this module.
 * @param {String] id The canonical url of the module
 * @param {Object} constraints Constraints for the module.
 * @returns {Object} The element of this.runtimes where the module should run.
 */
Policy.prototype.findDestination = function(lineage, id, constraints) {
  var i;

  // Step 1: if an instance already exists, the m
  if (constraints.isolation !== 'always') {
    for (i = 0; i < this.policies.length; i += 1) {
      if (this.isRunning(this.runtimes[i], id, lineage,
                         constraints.isolation !== 'never')) {
        return this.runtimes[i];
      }
    }
  }

  // Step 2: if the module wants stability, it may need to be remote.
  if (constraints.placement === 'local') {
    return this.runtimes[0];
  } else if (constraints.placement === 'stable') {
    for (i = 0; i < this.policies.length; i += 1) {
      if (this.policies[i].background) {
        return this.runtimes[i];
      }
    }
  }

  // Step 3: if the module needs longevity / interactivity, it may want to be remote.
  return this.runtimes[0];
};

/**
 * Determine if a known runtime is running an appropriate instance of a module.
 * @method isRunning
 * @param {Object} runtime The runtime to check.
 * @param {String} id The module to look for.
 * @param {String[]} from The identifier of the requesting module.
 * @param {Boolean} fullMatch If the module needs to be in the same app.
 * @returns {String|Boolean} The Module id if it is running, or false if not.
 */
Policy.prototype.isRunning = function(runtime, id, from, fullMatch) {
  var i = 0, j = 0, okay;
  for (i = 0; i < runtime.modules.length; i += 1) {
    if (fullMatch && runtime.modules[i].length === from.length + 1) {
      okay = true;
      for (j = 0; j < from.length; j += 1) {
        if (runtime.modules[i][j + 1].indexOf(from[j]) !== 0) {
          okay = false;
          break;
        }
      }
      if (runtime.modules[i][0].indexOf(id) !== 0) {
        okay = false;
      }

      if (okay) {
        return runtime.modules[i][0];
      }
    } else if (!fullMatch && runtime.modules[i][0].indexOf(id) === 0) {
      return runtime.modules[i][0];
    }
  }
  return false;
};

/**
 * Get a promise of the manifest for a module ID.
 * @method loadManifest
 * @param {String} manifest The canonical ID of the manifest
 * @returns {Promise} Promise for the json contents of the manifest.
 */
Policy.prototype.loadManifest = function(manifest) {
  return this.resource.getContents(manifest).then(function(data) {
    var resp = {};
    try {
      return JSON.parse(data);
    } catch(err) {
      this.debug.error("Failed to load " + manifest + ": " + err);
      throw new Error("No Manifest Available");
    }
  }.bind(this));
};

/**
 * Add a runtime to keep track of in this policy.
 * @method add
 * @param {fdom.port} port The port to use for module lifetime info
 * @param {Object} policy The policy of the runtime.
 */
Policy.prototype.add = function(port, policy) {
  var runtime = {
    manager: port,
    modules: []
  };
  this.runtimes.push(runtime);
  this.policies.push(this.overlay(this.defaultPolicy, policy));

  port.on('moduleAdd', function(runtime, info) {
    var lineage = [];
    lineage = lineage.concat(info.lineage);
    lineage[0] = info.id;
    runtime.modules.push(lineage);
    if (this.pending[info.lineage[0]]) {
      delete this.pending[info.lineage[0]];
      this.emit('placed');
    }
  }.bind(this, runtime));
  port.on('moduleRemove', function(runtime, info) {
    var lineage = [], i, modFingerprint;
    lineage = lineage.concat(info.lineage);
    lineage[0] = info.id;
    modFingerprint = lineage.toString();

    for (i = 0; i < runtime.modules.length; i += 1) {
      if (runtime.modules[i].toString() === modFingerprint) {
        runtime.modules.splice(i, 1);
        return;
      }
    }
    this.debug.warn('Unknown module to remove: ', info.id);
  }.bind(this, runtime));
};

/**
 * Overlay a specific policy or constraint instance on default settings.
 * TODO: consider making static.
 * @method overlay
 * @private
 * @param {Object} base The default object
 * @param {Object} overlay The superceeding object
 * @returns {Object} A new object with base parameters when not set in overlay.
 */
Policy.prototype.overlay = function(base, overlay) {
  var ret = {};

  util.mixin(ret, base);
  if (overlay) {
    util.mixin(ret, overlay, true);
  }
  return ret;
};

module.exports = Policy;

},{"./module":30,"./util":38,"es6-promise":undefined}],33:[function(require,module,exports){
/*jslint indent:2, node:true, sloppy:true, browser:true */
var Consumer = require('./consumer');
var util = require('./util');

/**
 * A freedom port for a user-accessable provider.
 * @class Provider
 * @implements Port
 * @uses handleEvents
 * @param {Object} def The interface of the provider.
 * @param {Debug} debug The debugger to use for logging.
 * @contructor
 */
var Provider = function (def, debug) {
  this.id = Consumer.nextId();
  util.handleEvents(this);
  this.debug = debug;
  
  this.definition = def;
  this.mode = Provider.mode.synchronous;
  this.channels = {};
  this.iface = null;
  this.providerCls = null;
  this.providerInstances = {};
};

/**
 * Provider modes of operation.
 * @property mode
 * @static
 * @type number
 */
Provider.mode = {
  synchronous: 0,
  asynchronous: 1,
  promises: 2
};

/**
 * Receive external messages for the provider.
 * @method onMessage
 * @param {String} source the source identifier of the message.
 * @param {Object} message The received message.
 */
Provider.prototype.onMessage = function (source, message) {
  if (source === 'control' && message.reverse) {
    this.channels[message.name] = message.channel;
    this.emit(message.channel, {
      type: 'channel announcement',
      channel: message.reverse
    });
    this.emit('start');
  } else if (source === 'control' && message.type === 'setup') {
    this.controlChannel = message.channel;
  } else if (source === 'control' && message.type === 'close') {
    if (message.channel === this.controlChannel) {
      delete this.controlChannel;
    }
    this.close();
  } else {
    if (!this.channels[source] && message.channel) {
      this.channels[source] = message.channel;
      this.emit('start');
      return;
    } else if (!this.channels[source]) {
      this.debug.warn('Message from unconfigured source: ' + source);
      return;
    }

    if (message.type === 'close' && message.to) {
      delete this.providerInstances[source][message.to];
    } else if (message.to && this.providerInstances[source] &&
               this.providerInstances[source][message.to]) {
      message.message.to = message.to;
      this.providerInstances[source][message.to](message.message);
    } else if (message.to && message.message &&
        message.message.type === 'construct') {
      var args = Consumer.portableToMessage(
          (this.definition.constructor && this.definition.constructor.value) ?
              this.definition.constructor.value : [],
          message.message,
          this.debug
        );
      if (!this.providerInstances[source]) {
        this.providerInstances[source] = {};
      }
      this.providerInstances[source][message.to] = this.getProvider(source, message.to, args);
    } else {
      this.debug.warn(this.toString() + ' dropping message ' +
          JSON.stringify(message));
    }
  }
};

/**
 * Close / teardown the flow this provider terminates.
 * @method close
 */
Provider.prototype.close = function () {
  if (this.controlChannel) {
    this.emit(this.controlChannel, {
      type: 'Provider Closing',
      request: 'close'
    });
    delete this.controlChannel;
  }
  this.emit('close');

  this.providerInstances = {};
  this.emitChannel = null;
};

/**
 * Get an interface to expose externally representing this port.
 * Providers are registered with the port using either
 * provideSynchronous or provideAsynchronous depending on the desired
 * return interface.
 * @method getInterface
 * @return {Object} The external interface of this Provider.
 */
Provider.prototype.getInterface = function () {
  if (this.iface) {
    return this.iface;
  } else {
    this.iface = {
      provideSynchronous: function (prov) {
        this.providerCls = prov;
        this.mode = Provider.mode.synchronous;
      }.bind(this),
      provideAsynchronous: function (prov) {
        this.providerCls = prov;
        this.mode = Provider.mode.asynchronous;
      }.bind(this),
      providePromises: function (prov) {
        this.providerCls = prov;
        this.mode = Provider.mode.promises;
      }.bind(this),
      close: function () {
        this.close();
      }.bind(this)
    };

    util.eachProp(this.definition, function (prop, name) {
      switch (prop.type) {
      case "constant":
        Object.defineProperty(this.iface, name, {
          value: Consumer.recursiveFreezeObject(prop.value),
          writable: false
        });
        break;
      }
    }.bind(this));

    return this.iface;
  }
};

/**
 * Create a function that can be used to get interfaces from this provider from
 * a user-visible point.
 * @method getProxyInterface
 */
Provider.prototype.getProxyInterface = function () {
  var func = function (p) {
    return p.getInterface();
  }.bind({}, this);

  func.close = function (iface) {
    if (iface) {
      util.eachProp(this.ifaces, function (candidate, id) {
        if (candidate === iface) {
          this.teardown(id);
          this.emit(this.emitChannel, {
            type: 'close',
            to: id
          });
          return true;
        }
      }.bind(this));
    } else {
      // Close the channel.
      this.close();
    }
  }.bind(this);

  func.onClose = function (iface, handler) {
    if (typeof iface === 'function' && handler === undefined) {
      // Add an on-channel-closed handler.
      this.once('close', iface);
      return;
    }

    util.eachProp(this.ifaces, function (candidate, id) {
      if (candidate === iface) {
        if (this.handlers[id]) {
          this.handlers[id].push(handler);
        } else {
          this.handlers[id] = [handler];
        }
        return true;
      }
    }.bind(this));
  }.bind(this);

  return func;
};

/**
 * Get a new instance of the registered provider.
 * @method getProvider
 * @param {String} source The port this instance is interactign with.
 * @param {String} identifier the messagable address for this provider.
 * @param {Array} args Constructor arguments for the provider.
 * @return {Function} A function to send messages to the provider.
 */
Provider.prototype.getProvider = function (source, identifier, args) {
  if (!this.providerCls) {
    this.debug.warn('Cannot instantiate provider, since it is not provided');
    return null;
  }

  var events = {},
    dispatchEvent,
    BoundClass,
    instance;

  util.eachProp(this.definition, function (prop, name) {
    if (prop.type === 'event') {
      events[name] = prop;
    }
  });

  dispatchEvent = function (src, ev, id, name, value) {
    if (ev[name]) {
      var streams = Consumer.messageToPortable(ev[name].value, value,
                                                   this.debug);
      this.emit(this.channels[src], {
        type: 'message',
        to: id,
        message: {
          name: name,
          type: 'event',
          text: streams.text,
          binary: streams.binary
        }
      });
    }
  }.bind(this, source, events, identifier);

  // this is all to say: new providerCls(dispatchEvent, args[0], args[1],...)
  BoundClass = this.providerCls.bind.apply(this.providerCls,
      [this.providerCls, dispatchEvent].concat(args || []));
  instance = new BoundClass();

  return function (port, src, msg) {
    if (msg.action === 'method') {
      if (typeof this[msg.type] !== 'function') {
        port.debug.warn("Provider does not implement " + msg.type + "()!");
        return;
      }
      var prop = port.definition[msg.type],
        debug = port.debug,
        args = Consumer.portableToMessage(prop.value, msg, debug),
        ret = function (src, msg, prop, resolve, reject) {
          var streams = Consumer.messageToPortable(prop.ret, resolve,
                                                       debug);
          this.emit(this.channels[src], {
            type: 'method',
            to: msg.to,
            message: {
              to: msg.to,
              type: 'method',
              reqId: msg.reqId,
              name: msg.type,
              text: streams.text,
              binary: streams.binary,
              error: reject
            }
          });
        }.bind(port, src, msg, prop);
      if (!Array.isArray(args)) {
        args = [args];
      }
      if (port.mode === Provider.mode.synchronous) {
        try {
          ret(this[msg.type].apply(this, args));
        } catch (e) {
          ret(undefined, e.message);
        }
      } else if (port.mode === Provider.mode.asynchronous) {
        this[msg.type].apply(instance, args.concat(ret));
      } else if (port.mode === Provider.mode.promises) {
        this[msg.type].apply(this, args).then(ret, ret.bind({}, undefined));
      }
    }
  }.bind(instance, this, source);
};

/**
 * Get a textual description of this port.
 * @method toString
 * @return {String} the description of this port.
 */
Provider.prototype.toString = function () {
  if (this.emitChannel) {
    return "[Provider " + this.emitChannel + "]";
  } else {
    return "[unbound Provider]";
  }
};

module.exports = Provider;

},{"./consumer":23,"./util":38}],34:[function(require,module,exports){
/*jslint indent:2, white:true, node:true, sloppy:true, browser:true */
var PromiseCompat = require('es6-promise').Promise;

var util = require('../util');
var Consumer = require('../consumer');

var ApiInterface = function(def, onMsg, emit, debug) {
  var inflight = {},
      events = null,
      emitter = null,
      reqId = 0,
      args = arguments;

  util.eachProp(def, function(prop, name) {
    switch(prop.type) {
    case 'method':
      this[name] = function() {
        // Note: inflight should be registered before message is passed
        // in order to prepare for synchronous in-window pipes.
        var thisReq = reqId,
            promise = new PromiseCompat(function(resolve, reject) {
              inflight[thisReq] = {
                resolve:resolve,
                reject:reject,
                template: prop.ret
              };
            }),
            streams = Consumer.messageToPortable(prop.value,
                Array.prototype.slice.call(arguments, 0),
                debug);
        reqId += 1;
        emit({
          action: 'method',
          type: name,
          reqId: thisReq,
          text: streams.text,
          binary: streams.binary
        });
        return promise;
      };
      break;
    case 'event':
      if(!events) {
        util.handleEvents(this);
        emitter = this.emit;
        delete this.emit;
        events = {};
      }
      events[name] = prop;
      break;
    case 'constant':
      Object.defineProperty(this, name, {
        value: Consumer.recursiveFreezeObject(prop.value),
        writable: false
      });
      break;
    }
  }.bind(this));

  onMsg(this, function(type, msg) {
    if (type === 'close') {
      this.off();
      delete this.inflight;
      return;
    }
    if (!msg) {
      return;
    }
    if (msg.type === 'method') {
      if (inflight[msg.reqId]) {
        var resolver = inflight[msg.reqId],
            template = resolver.template;
        delete inflight[msg.reqId];
        if (msg.error) {
          resolver.reject(msg.error);
        } else {
          resolver.resolve(Consumer.portableToMessage(template, msg, debug));
        }
      } else {
        debug.error('Incoming message claimed to be an RPC ' +
                         'returning for unregistered call', msg.reqId);
      }
    } else if (msg.type === 'event') {
      if (events[msg.name]) {
        emitter(msg.name, Consumer.portableToMessage(events[msg.name].value,
                msg, debug));
      }
    }
  }.bind(this));

  args = Consumer.messageToPortable(
      (def.constructor && def.constructor.value) ? def.constructor.value : [],
      Array.prototype.slice.call(args, 4),
      debug);

  emit({
    type: 'construct',
    text: args.text,
    binary: args.binary
  });
};

module.exports = ApiInterface;

},{"../consumer":23,"../util":38,"es6-promise":undefined}],35:[function(require,module,exports){
/*jslint indent:2, white:true, node:true, sloppy:true, browser:true */
var util = require('../util');

var EventInterface = function(onMsg, emit, debug) {
  util.handleEvents(this);
  
  onMsg(this, function(emit, type, msg) {
    emit(msg.type, msg.message);
  }.bind(this, this.emit));

  this.emit = function(emitter, type, msg) {
    emitter({type: type, message: msg}, true);
  }.bind({}, emit);
};

module.exports = EventInterface;

},{"../util":38}],36:[function(require,module,exports){
/*jslint indent:2, node:true */
var PromiseCompat = require('es6-promise').Promise;

var ApiInterface = require('./proxy/apiInterface');
var EventInterface = require('./proxy/eventInterface');
var Consumer = require('./consumer');
var Provider = require('./provider');

/**
 * A Proxy Binder manages the external interface, and creates one of
 * the different types of objects exposed by freedom either as a global
 * within a worker / module context, or returned by an external call to
 * create a freedom runtime.
 * @Class ProxyBinder
 * @param {Manager} manager The manager for the active runtime.
 */
var ProxyBinder = function (manager) {
  'use strict';
  this.manager = manager;
};

/**
 * Create a proxy for a freedom port, and return it once loaded.
 * @method getExternal
 * @param {Port} port The port for the proxy to communicate with.
 * @param {String} name The name of the proxy.
 * @param {Object} [definition] The definition of the API to expose.
 * @param {String} definition.name The name of the API.
 * @param {Object} definition.definition The definition of the API.
 * @param {Boolean} definition.provides Whether this is a consumer or provider.
 * @returns {Promise} A promise for the active proxy interface.
 */
ProxyBinder.prototype.getExternal = function (port, name, definition) {
  'use strict';
  var proxy, api;
  return new PromiseCompat(function (resolve, reject) {
    if (definition) {
      api = definition.name;
      if (definition.provides) {
        proxy = new Provider(definition.definition, this.manager.debug);
      } else {
        proxy = new Consumer(ApiInterface.bind({},
            definition.definition),
            this.manager.debug);
      }
    } else {
      proxy = new Consumer(EventInterface, this.manager.debug);
    }

    proxy.once('start', function () {
      var iface = proxy.getProxyInterface();
      if (api) {
        iface.api = api;
      }
      resolve({
        port: proxy,
        external: iface
      });
    });

    this.manager.createLink(port, name, proxy);
  }.bind(this));
};

/**
 * Bind the default proxy for a freedom port.
 * @method bindDefault
 * @param {Port} port The port for the proxy to communicate with.
 * @param {Api} api The API loader with API definitions.
 * @param {Object} manifest The manifest of the module to expose.
 * @param {Boolean} internal Whether the interface is for inside the module.
 * @returns {Promise} A promise for a proxy interface.
 * @private
 */
ProxyBinder.prototype.bindDefault = function (port, api, manifest, internal) {
  'use strict';
  var metadata = {
    name: manifest.name,
    icon: manifest.icon,
    description: manifest.description
  }, def;

  if (manifest['default']) {
    def = api.get(manifest['default']);
    if (!def && manifest.api && manifest.api[manifest['default']]) {
      def = {
        name: manifest['default'],
        definition: manifest.api[manifest['default']]
      };
    }
    if (internal && manifest.provides &&
        manifest.provides.indexOf(manifest['default']) !== false) {
      def.provides = true;
    } else if (internal) {
      api.debug.warn("default API not provided, " +
                     "are you missing a provides key in your manifest?");
    }
  }

  return this.getExternal(port, 'default', def).then(
    function (metadata, info) {
      info.external.manifest = metadata;
      return info;
    }.bind(this, metadata)
  );
};

module.exports = ProxyBinder;

},{"./consumer":23,"./provider":33,"./proxy/apiInterface":34,"./proxy/eventInterface":35,"es6-promise":undefined}],37:[function(require,module,exports){
/*globals XMLHttpRequest */
/*jslint indent:2,node:true,sloppy:true */
var PromiseCompat = require('es6-promise').Promise;

var util = require('./util');

/**
 * The Resource registry for FreeDOM.  Used to look up requested Resources,
 * and provide lookup and migration of resources.
 * @Class Resource
 * @param {Debug} debug The logger to use for debugging.
 * @constructor
 */
var Resource = function (debug) {
  this.debug = debug;
  this.files = {};
  this.resolvers = [this.httpResolver, this.nullResolver];
  this.contentRetrievers = {
    'http': this.xhrRetriever,
    'https': this.xhrRetriever,
    'chrome-extension': this.xhrRetriever,
    'resource': this.xhrRetriever,
    'chrome': this.xhrRetriever,
    'app': this.xhrRetriever,
    'manifest': this.manifestRetriever
  };
};

/**
 * Resolve a resurce URL requested from a module.
 * @method get
 * @param {String} manifest The canonical address of the module requesting.
 * @param {String} url The resource to get.
 * @returns {Promise} A promise for the resource address.
 */
Resource.prototype.get = function (manifest, url) {
  var key = JSON.stringify([manifest, url]);
  
  return new PromiseCompat(function (resolve, reject) {
    if (this.files[key]) {
      resolve(this.files[key]);
    } else {
      this.resolve(manifest, url).then(function (key, resolve, address) {
        this.files[key] = address;
        //fdom.debug.log('Resolved ' + key + ' to ' + address);
        resolve(address);
      }.bind(this, key, resolve), reject);
    }
  }.bind(this));
};

/**
 * Get the contents of a resource.
 * @method getContents
 * @param {String} url The resource to read.
 * @returns {Promise} A promise for the resource contents.
 */
Resource.prototype.getContents = function (url) {
  return new PromiseCompat(function (resolve, reject) {
    var prop;
    if (!url) {
      this.debug.warn("Asked to get contents of undefined URL.");
      return reject();
    }
    for (prop in this.contentRetrievers) {
      if (this.contentRetrievers.hasOwnProperty(prop)) {
        if (url.indexOf(prop + "://") === 0) {
          return this.contentRetrievers[prop].call(this, url, resolve, reject);
        } else if (url.indexOf("://") === -1 && prop === "null") {
          return this.contentRetrievers[prop].call(this, url, resolve, reject);
        }
      }
    }
    reject();
  }.bind(this));
};

/**
 * Return a promise that resolves when the first of an array of promises
 * resolves, or rejects after all promises reject. Can be thought of as
 * the missing 'Promise.any' - race is no good, since early rejections
 * preempt a subsequent resolution.
 * @private
 * @static
 * @method FirstPromise
 * @param {Promise[]} Promises to select from
 * @returns {Promise} Promise resolving with a value from arguments.
 */
var firstPromise = function(promises) {
  return new PromiseCompat(function(resolve, reject) {
    var errors = [];
    promises.forEach(function(promise) {
      promise.then(resolve, function(err) {
        errors.push(err);
        if (errors.length === promises.length) {
          reject(errors);
        }
      });
    });
  });
};

/**
 * Resolve a resource using known resolvers. Unlike get, resolve does
 * not cache resolved resources.
 * @method resolve
 * @private
 * @param {String} manifest The module requesting the resource.
 * @param {String} url The resource to resolve;
 * @returns {Promise} A promise for the resource address.
 */
Resource.prototype.resolve = function (manifest, url) {
  return new PromiseCompat(function (resolve, reject) {
    var promises = [];
    if (url === undefined) {
      return reject();
    }
    util.eachReverse(this.resolvers, function (resolver) {
      promises.push(new PromiseCompat(resolver.bind({}, manifest, url)));
    }.bind(this));
    firstPromise(promises).then(resolve, function() {
      reject('No resolvers to handle url: ' + JSON.stringify([manifest, url]));
    });
  }.bind(this));
};

/**
 * Register resolvers: code that knows how to get resources
 * needed by the runtime. A resolver will be called with four
 * arguments: the absolute manifest of the requester, the
 * resource being requested, and a resolve / reject pair to
 * fulfill a promise.
 * @method addResolver
 * @param {Function} resolver The resolver to add.
 */
Resource.prototype.addResolver = function (resolver) {
  this.resolvers.push(resolver);
};

/**
 * Register retrievers: code that knows how to load resources
 * needed by the runtime. A retriever will be called with a URL
 * to retrieve with a protocol that it is able to handle.
 * @method addRetriever
 * @param {String} proto The protocol to register for.
 * @param {Function} retriever The retriever to add.
 */
Resource.prototype.addRetriever = function (proto, retriever) {
  if (this.contentRetrievers[proto]) {
    this.debug.warn("Unwilling to override file retrieval for " + proto);
    return;
  }
  this.contentRetrievers[proto] = retriever;
};

/**
 * Register external resolvers and retreavers
 * @method register
 * @param {{"proto":String, "resolver":Function, "retreaver":Function}[]}
 *     resolvers The list of retreivers and resolvers.
 */
Resource.prototype.register = function (resolvers) {
  if (!resolvers.length) {
    return;
  }

  resolvers.forEach(function (item) {
    if (item.resolver) {
      this.addResolver(item.resolver);
    } else if (item.proto && item.retriever) {
      this.addRetriever(item.proto, item.retriever);
    }
  }.bind(this));
};

/**
 * Determine if a URL is an absolute URL of a given Scheme.
 * @method hasScheme
 * @static
 * @private
 * @param {String[]} protocols Whitelisted protocols
 * @param {String} URL the URL to match.
 * @returns {Boolean} If the URL is an absolute example of one of the schemes.
 */
Resource.hasScheme = function (protocols, url) {
  var i;
  for (i = 0; i < protocols.length; i += 1) {
    if (url.indexOf(protocols[i] + "://") === 0) {
      return true;
    }
  }
  return false;
};

/**
 * Remove './' and '../' from a URL
 * Required because Chrome Apps for Mobile (cca) doesn't understand
 * XHR paths with these relative components in the URL.
 * @method removeRelativePath
 * @param {String} url The URL to modify
 * @returns {String} url without './' and '../'
 **/
Resource.removeRelativePath = function (url) {
  var idx = url.indexOf("://") + 3,
    stack,
    toRemove,
    result;
  // Remove all instances of /./
  url = url.replace(/\/\.\//g, "/");
  //Weird bug where in cca, manifest starts with 'chrome:////'
  //This forces there to only be 2 slashes
  while (url.charAt(idx) === "/") {
    url = url.slice(0, idx) + url.slice(idx + 1, url.length);
  }

  // Advance to next /
  idx = url.indexOf("/", idx);
  // Removing ../
  stack = url.substr(idx + 1).split("/");
  while (stack.indexOf("..") !== -1) {
    toRemove = stack.indexOf("..");
    if (toRemove === 0) {
      stack.shift();
    } else {
      stack.splice((toRemove - 1), 2);
    }
  }
  
  //Rebuild string
  result = url.substr(0, idx);
  for (idx = 0; idx < stack.length; idx += 1) {
    result += "/" + stack[idx];
  }
  return result;
};

/**
 * Resolve URLs which can be accessed using standard HTTP requests.
 * @method httpResolver
 * @private
 * @param {String} manifest The Manifest URL.
 * @param {String} url The URL to resolve.
 * @param {Function} resolve The promise to complete.
 * @param {Function} reject The promise to reject.
 * @returns {Boolean} True if the URL could be resolved.
 */
Resource.prototype.httpResolver = function (manifest, url, resolve, reject) {
  var protocols = ["http", "https", "chrome", "chrome-extension", "resource",
                   "app"],
    dirname,
    protocolIdx,
    pathIdx,
    path,
    base,
    result;

  if (Resource.hasScheme(protocols, url)) {
    resolve(Resource.removeRelativePath(url));
    return true;
  }
  
  if (!manifest) {
    reject();
    return false;
  }
  if (Resource.hasScheme(protocols, manifest) &&
      url.indexOf("://") === -1) {
    dirname = manifest.substr(0, manifest.lastIndexOf("/"));
    protocolIdx = dirname.indexOf("://");
    pathIdx = protocolIdx + 3 + dirname.substr(protocolIdx + 3).indexOf("/");
    path = dirname.substr(pathIdx);
    base = dirname.substr(0, pathIdx);
    if (url.indexOf("/") === 0) {
      resolve(Resource.removeRelativePath(base + url));
    } else {
      resolve(Resource.removeRelativePath(base + path + "/" + url));
    }
    return true;
  }
  reject();
};

/**
 * Resolve URLs which are self-describing.
 * @method nullResolver
 * @private
 * @param {String} manifest The Manifest URL.
 * @param {String} url The URL to resolve.
 * @param {Function} resolve The promise to complete.
 * @param {Function} reject The promise to reject.
 * @returns {Boolean} True if the URL could be resolved.
 */
Resource.prototype.nullResolver = function (manifest, url, resolve, reject) {
  var protocols = ["manifest"];
  if (Resource.hasScheme(protocols, url)) {
    resolve(url);
    return true;
  } else if (url.indexOf('data:') === 0) {
    resolve(url);
    return true;
  }
  reject();
};

/**
 * Retrieve manifest content from a self-descriptive manifest url.
 * These urls are used to reference a manifest without requiring subsequent,
 * potentially non-CORS requests.
 * @method manifestRetriever
 * @private
 * @param {String} manifest The Manifest URL
 * @param {Function} resolve The promise to complete.
 * @param {Function} reject The promise to reject.
 */
Resource.prototype.manifestRetriever = function (manifest, resolve, reject) {
  var data;
  try {
    data = manifest.substr(11);
    JSON.parse(data);
    resolve(data);
  } catch (e) {
    this.debug.warn("Invalid manifest URL referenced:" + manifest);
    reject();
  }
};

/**
 * Retrieve resource contents using an XHR request.
 * @method xhrRetriever
 * @private
 * @param {String} url The resource to fetch.
 * @param {Function} resolve The promise to complete.
 * @param {Function} reject The promise to reject.
 */
Resource.prototype.xhrRetriever = function (url, resolve, reject) {
  var ref = new XMLHttpRequest();
  ref.addEventListener("readystatechange", function (resolve, reject) {
    if (ref.readyState === 4 && ref.responseText) {
      resolve(ref.responseText);
    } else if (ref.readyState === 4) {
      this.debug.warn("Failed to load file " + url + ": " + ref.status);
      reject(ref.status);
    }
  }.bind(this, resolve, reject), false);
  ref.overrideMimeType("application/json");
  ref.open("GET", url, true);
  ref.send();
};

module.exports = Resource;

},{"./util":38,"es6-promise":undefined}],38:[function(require,module,exports){
/*globals crypto, WebKitBlobBuilder, Blob, URL */
/*globals webkitURL, Uint8Array, Uint16Array, ArrayBuffer */
/*jslint indent:2,white:true,browser:true,node:true,sloppy:true */

/**
 * Utility method used within the freedom Library.
 * @class util
 * @static
 */
var util = {};


/**
 * Helper function for iterating over an array backwards. If the func
 * returns a true value, it will break out of the loop.
 * @method eachReverse
 * @static
 */
util.eachReverse = function(ary, func) {
  if (ary) {
    var i;
    for (i = ary.length - 1; i > -1; i -= 1) {
      if (ary[i] && func(ary[i], i, ary)) {
        break;
      }
    }
  }
};

/**
 * @method hasProp
 * @static
 */
util.hasProp = function(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};

/**
 * Cycles over properties in an object and calls a function for each
 * property value. If the function returns a truthy value, then the
 * iteration is stopped.
 * @method eachProp
 * @static
 */
util.eachProp = function(obj, func) {
  var prop;
  for (prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if (func(obj[prop], prop)) {
        break;
      }
    }
  }
};

/**
 * Simple function to mix in properties from source into target,
 * but only if target does not already have a property of the same name.
 * This is not robust in IE for transferring methods that match
 * Object.prototype names, but the uses of mixin here seem unlikely to
 * trigger a problem related to that.
 * @method mixin
 * @static
 */
util.mixin = function(target, source, force) {
  if (source) {
    util.eachProp(source, function (value, prop) {
      if (force || !util.hasProp(target, prop)) {
        target[prop] = value;
      }
    });
  }
  return target;
};

/**
 * Get a unique ID.
 * @method getId
 * @static
 */
util.getId = function() {
  var guid = 'guid',
      domain = 12,
      buffer;
  // Chrome / Firefox.
  if (typeof crypto === 'object' && crypto.getRandomValues) {
    buffer = new Uint8Array(domain);
    crypto.getRandomValues(buffer);
    util.eachReverse(buffer, function(n) {
      guid += '-' + n;
    });
  // Node
  } else if (typeof crypto === 'object' && crypto.randomBytes) {
    buffer = crypto.randomBytes(domain);
    util.eachReverse(buffer, function(n) {
      guid += '-' + n;
    });
  } else {
    while (domain > 0) {
      guid += '-' + Math.ceil(255 * Math.random());
      domain -= 1;
    }
  }

  return guid;
};

/**
 * Encode a string into a binary array buffer, by treating each character as a
 * utf16 encoded character - the native javascript encoding.
 * @method str2ab
 * @static
 * @param {String} str The string to encode.
 * @returns {ArrayBuffer} The encoded string.
 */
util.str2ab = function(str) {
  var length = str.length,
      buffer = new ArrayBuffer(length * 2), // 2 bytes for each char
      bufferView = new Uint16Array(buffer),
      i;
  for (i = 0; i < length; i += 1) {
    bufferView[i] = str.charCodeAt(i);
  }

  return buffer;
};

/**
 * Convert an array buffer containing an encoded string back into a string.
 * @method ab2str
 * @static
 * @param {ArrayBuffer} buffer The buffer to unwrap.
 * @returns {String} The decoded buffer.
 */
util.ab2str = function(buffer) {
  return String.fromCharCode.apply(null, new Uint16Array(buffer));
};

/**
 * Add 'on' and 'emit' methods to an object, which act as a light weight
 * event handling structure.
 * @class handleEvents
 * @static
 */
util.handleEvents = function(obj) {
  var eventState = {
    multiple: {},
    maybemultiple: [],
    single: {},
    maybesingle: []
  }, filter, push;

  /**
   * Filter a list based on a predicate. The list is filtered in place, with
   * selected items removed and returned by the function.
   * @method
   * @param {Array} list The list to filter
   * @param {Function} predicate The method to run on each item.
   * @returns {Array} Selected items
   */
  filter = function(list, predicate) {
    var ret = [], i;

    if (!list || !list.length) {
      return [];
    }

    for (i = list.length - 1; i >= 0; i -= 1) {
      if (predicate(list[i])) {
        ret.push(list.splice(i, 1));
      }
    }
    return ret;
  };

  /**
   * Enqueue a handler for a specific type.
   * @method
   * @param {String} to The queue ('single' or 'multiple') to queue on.
   * @param {String} type The type of event to wait for.
   * @param {Function} handler The handler to enqueue.
   */
  push = function(to, type, handler) {
    if (typeof type === 'function') {
      this['maybe' + to].push([type, handler]);
    } else if (this[to][type]) {
      this[to][type].push(handler);
    } else {
      this[to][type] = [handler];
    }
  };

  /**
   * Register a method to be executed when an event of a specific type occurs.
   * @method on
   * @param {String|Function} type The type of event to register against.
   * @param {Function} handler The handler to run when the event occurs.
   */
  obj.on = push.bind(eventState, 'multiple');

  /**
   * Register a method to be execute the next time an event occurs.
   * @method once
   * @param {String|Function} type The type of event to wait for.
   * @param {Function} handler The handler to run the next time a matching event
   *     is raised.
   */
  obj.once = push.bind(eventState, 'single');

  /**
   * Emit an event on this object.
   * @method emit
   * @param {String} type The type of event to raise.
   * @param {Object} data The payload of the event.
   */
  obj.emit = function(type, data) {
    var i, queue;
    if (this.multiple[type]) {
      for (i = 0; i < this.multiple[type].length; i += 1) {
        if (this.multiple[type][i](data) === false) {
          return;
        }
      }
    }
    if (this.single[type]) {
      queue = this.single[type];
      this.single[type] = [];
      for (i = 0; i < queue.length; i += 1) {
        queue[i](data);
      }
    }
    for (i = 0; i < this.maybemultiple.length; i += 1) {
      if (this.maybemultiple[i][0](type, data)) {
        this.maybemultiple[i][1](data);
      }
    }
    for (i = this.maybesingle.length - 1; i >= 0; i -= 1) {
      if (this.maybesingle[i][0](type, data)) {
        queue = this.maybesingle.splice(i, 1);
        queue[0][1](data);
      }
    }
  }.bind(eventState);

  /**
   * Remove an event handler
   * @method off
   * @param {String} type The type of event to remove.
   * @param {Function?} handler The handler to remove.
   */
  obj.off = function(type, handler) {
    if (!type) {
      this.multiple = {};
      this.maybemultiple = [];
      this.single = {};
      this.maybesingle = [];
      return;
    }

    if (typeof type === 'function') {
      filter(this.maybesingle, function(item) {
        return item[0] === type && (!handler || item[1] === handler);
      });
      filter(this.maybemultiple, function(item) {
        return item[0] === type && (!handler || item[1] === handler);
      });
    }

    if (!handler) {
      delete this.multiple[type];
      delete this.single[type];
    } else {
      filter(this.multiple[type], function(item) {
        return item === handler;
      });
      filter(this.single[type], function(item) {
        return item === handler;
      });
    }
  }.bind(eventState);
};

/**
 * When run without a window, or specifically requested.
 * Note: Declaration can be redefined in forceModuleContext below.
 * @method isModuleContext
 * @for util
 * @static
 */
/*!@preserve StartModuleContextDeclaration*/
util.isModuleContext = function() {
  return (typeof document === 'undefined');
};

/**
 * Get a Blob object of a string.
 * Polyfills implementations which don't have a current Blob constructor, like
 * phantomjs.
 * @method getBlob
 * @static
 */
util.getBlob = function(data, type) {
  if (typeof Blob !== 'function' && typeof WebKitBlobBuilder !== 'undefined') {
    var builder = new WebKitBlobBuilder();
    builder.append(data);
    return builder.getBlob(type);
  } else {
    return new Blob([data], {type: type});
  }
};

/**
 * Find all scripts on the given page.
 * @method scripts
 * @static
 */
util.scripts = function(global) {
  return global.document.getElementsByTagName('script');
};

module.exports = util;

},{}],39:[function(require,module,exports){

},{}],40:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],41:[function(require,module,exports){
/*jslint node:true*/
/*globals RTCPeerConnection, mozRTCPeerConnection, webkitRTCPeerConnection */
/*globals RTCSessionDescription, mozRTCSessionDescription */
/*globals RTCIceCandidate, mozRTCIceCandidate */
'use strict';

var myRTCPeerConnection = null;
var myRTCSessionDescription = null;
var myRTCIceCandidate = null;

var renameIceURLs = function (config) {
  if (!config) {
    return;
  }
  if (!config.iceServers) {
    return config;
  }
  config.iceServers.forEach(function (server) {
    server.url = server.urls;
    delete server.urls;
  });
  return config;
};

// Unify PeerConnection Object.
if (typeof RTCPeerConnection !== 'undefined') {
  myRTCPeerConnection = RTCPeerConnection;
} else if (typeof mozRTCPeerConnection !== 'undefined') {
  // Firefox uses 'url' rather than 'urls' for RTCIceServer.urls
  myRTCPeerConnection = function (configuration, constraints) {
    return new mozRTCPeerConnection(renameIceURLs(configuration), constraints);
  };
} else if (typeof webkitRTCPeerConnection !== 'undefined') {
  myRTCPeerConnection = webkitRTCPeerConnection;
}

// Unify SessionDescrption Object.
if (typeof RTCSessionDescription !== 'undefined') {
  myRTCSessionDescription = RTCSessionDescription;
} else if (typeof mozRTCSessionDescription !== 'undefined') {
  myRTCSessionDescription = mozRTCSessionDescription;
}

// Unify IceCandidate Object.
if (typeof RTCIceCandidate !== 'undefined') {
  myRTCIceCandidate = RTCIceCandidate;
} else if (typeof mozRTCIceCandidate !== 'undefined') {
  myRTCIceCandidate = mozRTCIceCandidate;
}

exports.RTCPeerConnection = myRTCPeerConnection;
exports.RTCSessionDescription = myRTCSessionDescription;
exports.RTCIceCandidate = myRTCIceCandidate;

},{}],42:[function(require,module,exports){
try {
  const socketTransportService = Components.classes["@mozilla.org/network/socket-transport-service;1"]
        .getService(Components.interfaces.nsISocketTransportService);
  const mainThread = Components.classes["@mozilla.org/thread-manager;1"].getService().mainThread;
} catch (e) {
  // Components is not defined in web workers,
  // but we don't need this ClientSocket in a worker.
}

/*
 * Waits for data/disconnect on a nsIAsyncInputStream
 * stream. ClientSocket isn't used as the callback to exporting
 * onInputStreamReady into the public API of ClientSocket.
 */
function nsIInputStreamCallback(clientSocket) {
  if (!(this instanceof nsIInputStreamCallback)) {
    return new nsIInputStreamCallback(clientSocket);
  }
  this.socket = clientSocket;
  clientSocket.rawInputStream.asyncWait(this, 0, 0, mainThread);
}

nsIInputStreamCallback.prototype.onInputStreamReady = function(stream) {
  var bytesAvailable;
  var binaryReader = this.socket.binaryReader;
  try {
    bytesAvailable = binaryReader.available();
  } catch (e) {
    if (this.socket.onConnect) {
      this.socket.onConnect(undefined, {
        errcode: 'CONNECTION_FAILED',
        message: 'Firefox Connection Failed: ' + e.name
      });
      delete this.socket.onConnect;
    }
    // The error name is NS_BASE_STREAM_CLOSED if the connection
    // closed normally.
    if (e.name !== 'NS_BASE_STREAM_CLOSED') {
      console.warn(e);
    }
    this.socket.close();
    return;
  }
  if (this.socket.onConnect) {
    this.socket.onConnect();
    delete this.socket.onConnect;
  }

  var lineData = binaryReader.readByteArray(bytesAvailable);
  var buffer = ArrayBuffer(lineData.length);
  var typedBuffer = new Uint8Array(buffer);
  typedBuffer.set(lineData);
  var socketTransportService = Components.classes["@mozilla.org/network/socket-transport-service;1"]
        .getService(Components.interfaces.nsISocketTransportService);
  if (typeof this.socket.onData === 'function') {
    this.socket.onData(typedBuffer);
  } else {
    // Save data until we have a handler.
    this.socket._waitingData.push(typedBuffer);
  }
  this.socket.rawInputStream.asyncWait(this, 0, 0, mainThread);
};

function ClientSocket(incomingTransport) {
  if (!(this instanceof ClientSocket)) {
    return new ClientSocket(incomingTransport);
  }
  if (typeof incomingTransport !== 'undefined') {
    this._setupTransport(incomingTransport);
  }
  this._waitingData = [];
}

ClientSocket.prototype._setupTransport = function(transport) {
  this.transport = transport;

  // Set up readers
  this.binaryReader = Components.classes["@mozilla.org/binaryinputstream;1"].createInstance(Components.interfaces.nsIBinaryInputStream);
  this.rawInputStream = this.transport.openInputStream(0,0,0);
  this.binaryReader.setInputStream(this.rawInputStream);

  new nsIInputStreamCallback(this);

  // set up writers
  this.outputStream = transport.openOutputStream(0, 0, 0);

  // set up on connect handler
  this.transport.setEventSink(this, mainThread);
};

ClientSocket.prototype.connect = function(hostname, port, startTls, continuation) {
  if (typeof this.transport !== 'undefined') {
    return continuation(undefined, {
      errcode: 'ALREADY_CONNECTED ',
      message: 'Socket already connected'
    });
  }
  this.onConnect = continuation;

  var socketTypes = startTls ? ['starttls'] : [null];
  var numSocketTypes = startTls ? 1 : 0;
  var transport = socketTransportService.createTransport(socketTypes,
                                                         numSocketTypes,
                                                         hostname,
                                                         port,
                                                         null);
  this._setupTransport(transport);
  this.socketType = 'tcp';
};

// Called due to the setEventSync call.
ClientSocket.prototype.onTransportStatus = function (transport, status) {
  if (status == Components.interfaces.nsISocketTransport.STATUS_CONNECTED_TO &&
     this.onConnect) {
    this.onConnect();
    delete this.onConnect;
  }
};

// TODO: This writ is happening async, so result should be returned async
ClientSocket.prototype.write = function(data) {
  var stringData = this.arrayBufferToString(data);
  this.outputStream.write(stringData, stringData.length);
};

ClientSocket.prototype.close = function() {
  this.binaryReader.close(0);
  this.rawInputStream.close(0);
  if (this.transport) {
    this.transport.close(0);
  }
  // Delete transport so getInfo doesn't think we are connected
  delete this.transport; 
  if (typeof this.onDisconnect === 'function') {
    this.onDisconnect();
  }
};

ClientSocket.prototype.getInfo = function() {
  var transport = this.transport;

  if (typeof transport === 'undefined') {
    return {socketType: this.socketType,
            connected: false};
  }
  var nsINetAddrPeer = transport.getScriptablePeerAddr();
  var nsINetAddrLocal = transport.getScriptableSelfAddr();
  var info = {connected: true,
              peerAddress: nsINetAddrPeer.address,
              peerPort: nsINetAddrPeer.port,
              localAddress: nsINetAddrLocal.address,
              localPort: nsINetAddrLocal.port};
  return info;
  
};

ClientSocket.prototype.setOnDataListener = function(listener) {
  while (this._waitingData.length > 0) {
    listener(this._waitingData.shift());
  }
  this.onData = listener;
};

ClientSocket.prototype.arrayBufferToString = function(buf) {
  return String.fromCharCode.apply(null, new Uint8Array(buf));
};

module.exports = ClientSocket;
},{}],43:[function(require,module,exports){
/*globals console, Components, FileUtils, Services*/
/*jslint indent:2,white:true,sloppy:true */
var dbConn = null;
if (typeof Components !== 'undefined') {
  /* Per: https://developer.mozilla.org/en-US/docs/Storage */
  Components.utils['import']("resource://gre/modules/Services.jsm");
  Components.utils['import']("resource://gre/modules/FileUtils.jsm");

  var file = FileUtils.getFile("ProfD", ["freedom.sqlite"]);
  dbConn = Services.storage.openDatabase(file);
  dbConn.executeSimpleSQL("CREATE TABLE IF NOT EXISTS store (key text primay key, value blob)");
} else {
  console.warn('Storage running in unsuported context.');
}

/**
 * A storage provider using firefox's sqlite storage.
 * @constructor
 */
var Storage_ffox = function(channel, dispatch) {
  this.dispatchEvents = dispatch;
  this.channel = channel;
};

/**
 * Get the keys currently stored in storage.
 * @method keys
 * @param {Function} continuation Function to call with array of keys.
 */
Storage_ffox.prototype.keys = function(continuation) {
  var statement = dbConn.createStatement("SELECT key FROM store"),
      ret = false,
      keys = [];
  statement.executeAsync({
    handleResult: function(r) {
      var row;
      for (row = r.getNextRow(); row; row = r.getNextRow()) {
        keys.push(row.getResultByName("key"));
      }
    },
    handleError: function(err) {
      ret = true;
      continuation(undefined, {
        "errcode": "UNKNOWN",
        "message": err.message
      });
    },
    handleCompletion: function(reason) {
      if (ret) {return;}
      if (reason !== Components.interfaces.mozIStorageStatementCallback.REASON_FINISHED) {
        continuation(undefined, {
          "errcode": "UNKNOWN",
          "message": "Query completed with reason: " + reason
        });
      } else {
        continuation(keys);
      }
    }
  });
};

/**
 * Get an item from storage.
 * @method get
 * @param {String} key The key to get
 * @param {Function} continuation The function to call with the data of the key,
 *   or null if the key does not exist.
 */
Storage_ffox.prototype.get = function(key, continuation) {
  var statement = dbConn.createStatement("SELECT value FROM store where key=:k"),
      ret = false,
      params = statement.newBindingParamsArray(),
      param = params.newBindingParams();
  param.bindByName("k", key);
  params.addParams(param);
  statement.bindParameters(params);

  statement.executeAsync({
    handleResult: function(r) {
      var row;
      for (row = r.getNextRow(); row; row = r.getNextRow()) {
        if (!ret) {
          ret = row.getResultByName("value");
          continuation(ret);
        }
      }
    },
    handleError: function(err) {
      if (!ret) {
        ret = true;
        continuation(undefined, {
          "errcode": "UNKNOWN",
          "message": err.message
        });
      }
    },
    handleCompletion: function(reason) {
      if (!ret) {
        if (reason === Components.interfaces.mozIStorageStatementCallback.REASON_FINISHED) {
            continuation(null);
        } else {
          continuation(undefined, {
            "errcode": "UNKNOWN",
            "message": "Query finished with reason: " + reason
          });
        }
      }
    }
  });
};

/**
 * Set an item in the store.
 * @param {String} key The key to set.
 * @param {String} value The data to set for the key.
 * @param {Function} continuation Function to call when the data is stored.
 */
Storage_ffox.prototype.set = function(key, value, continuation) {
  this.get(key, function(val, err) {
    if (err) {
      return continuation(undefined, err);
    }

    var statement, params, param;

    if (val !== value && val === null) {
      statement = dbConn.createStatement("INSERT INTO store VALUES(:k,:v)");
      params = statement.newBindingParamsArray();
      param = params.newBindingParams();
      param.bindByName("k", key);
      param.bindByName("v", value);
      params.addParams(param);
      statement.bindParameters(params);

      statement.execute();
      statement.reset();
      continuation(val);
    } else if (val !== value) {
      statement = dbConn.createStatement("UPDATE store SET value=:v where key=:k");
      params = statement.newBindingParamsArray();
      param = params.newBindingParams();
      param.bindByName("k", key);
      param.bindByName("v", value);
      params.addParams(param);
      statement.bindParameters(params);

      statement.execute();
      statement.reset();
      continuation(val);
    } else {
      // No need to update.
      continuation(val);
    }
  });
};

/**
 * Remove a key from the store.
 * @method remove
 * @param {String} key The key to remove
 * @param {Function} continuation Function to call when key is removed.
 */
Storage_ffox.prototype.remove = function(key, continuation) {
  // console.log('storage_chrome: removing ' + key);
  this.get(key, function(val, err) {
    if (err) {
      return continuation(undefined, err);
    }

    var statement = dbConn.createStatement("DELETE FROM store WHERE key=:k"),
        params = statement.newBindingParamsArray(),
        param = params.newBindingParams();
    param.bindByName("k", key);
    params.addParams(param);
    statement.bindParameters(params);

    statement.execute();
    statement.reset();
    continuation(val);
  });
};

/**
 * Reset the store
 * @method clear
 * @param {Function} continuation Function to call when store is reset.
 */
Storage_ffox.prototype.clear = function(continuation) {
  // console.log('storage_chrome: clear all');
  dbConn.executeSimpleSQL("DELETE FROM store");
  continuation();
};

/** REGISTER PROVIDER **/
exports.provider = Storage_ffox;
exports.name = 'core.storage';
},{}],44:[function(require,module,exports){
var ClientSocket = require('./client_socket');
var ServerSocket = require('./server_socket');

function Socket_firefox(channel, dispatchEvent, socketId) {
  var incommingConnections = Socket_firefox.incommingConnections;
  this.dispatchEvent = dispatchEvent;
  this.socketId = socketId;
  if (socketId in incommingConnections) {
    this.clientSocket = incommingConnections[socketId];
    delete incommingConnections[socketId];
    this.clientSocket.setOnDataListener(this._onData.bind(this));
  }
}

Socket_firefox.incommingConnections = {};
Socket_firefox.socketNumber = 1;

Socket_firefox.prototype.getInfo = function(continuation) {
  if(this.clientSocket) {
    continuation(this.clientSocket.getInfo());
  }
};

Socket_firefox.prototype.close = function(continuation) {
  if(this.clientSocket) {
    this.clientSocket.close();
  }
  continuation();
};

// TODO: handle failures.
Socket_firefox.prototype.connect = function(hostname, port, continuation) {
  this.clientSocket = new ClientSocket();
  this.clientSocket.setOnDataListener(this._onData.bind(this));
  this.clientSocket.connect(hostname, port, false, continuation);
  this.hostname = hostname;
  this.port = port;
};

Socket_firefox.prototype.prepareSecure = function(continuation) {
  continuation();
};

// TODO: handle failures.
Socket_firefox.prototype.secure = function(continuation) {
  if (!this.hostname || !this.port || !this.clientSocket) {
    continuation(undefined, {
      "errcode": "SOCKET_NOT_CONNECTED",
      "message": "Cannot Secure Not Connected Socket"
    });
    return;
  }
  // Create a new ClientSocket (nsISocketTransport) object for the existing
  // hostname and port, using type 'starttls'.  This will upgrade the existing
  // connection to TLS, rather than create a new connection.
  // TODO: check to make sure this doesn't result in weird race conditions if
  // we have 2 pieces of code both trying to connect to the same hostname/port
  // and do a starttls flow (e.g. if there are 2 instances of a GTalk social
  // provider that are both trying to connect to GTalk simultaneously with
  // different logins).
  this.clientSocket = new ClientSocket();
  this.clientSocket.setOnDataListener(this._onData.bind(this));
  this.clientSocket.connect(this.hostname, this.port, true);
  continuation();
};

Socket_firefox.prototype.write = function(buffer, continuation) {
  if (this.clientSocket) {
    this.clientSocket.write(buffer);
    continuation();
  }
};

Socket_firefox.prototype.listen = function(host, port, continuation) {
  this.serverSocket = new ServerSocket(host, port);
  this.host = host;
  this.port = port;
  this.serverSocket.onConnect = this._onConnect.bind(this);
  this.serverSocket.listen();
  continuation();
};

Socket_firefox.prototype._onData = function(buffer) {
  this.dispatchEvent("onData",
                     {data: buffer.buffer});
};

Socket_firefox.prototype._onConnect = function(clientSocket) {
  var socketNumber = Socket_firefox.socketNumber++;
  Socket_firefox.incommingConnections[socketNumber] = clientSocket;
  this.dispatchEvent("onConnection", { socket: socketNumber,
                                       host: this.host,
                                       port: this.port
                                     });
  
};

/** REGISTER PROVIDER **/
exports.provider = Socket_firefox;
exports.api = "core.tcpsocket";

},{"./client_socket":42,"./server_socket":46}],45:[function(require,module,exports){
function UDP_Firefox(channel, dispatchEvent) {
  this.dispatchEvent = dispatchEvent;
  // http://dxr.mozilla.org/mozilla-central/source/netwerk/base/public/nsIUDPSocket.idl
  this._nsIUDPSocket = Components.classes["@mozilla.org/network/udp-socket;1"]
    .createInstance(Components.interfaces.nsIUDPSocket);
}

UDP_Firefox.prototype.bind = function(address, port, continuation) {
  if (port < 1) {
    port = -1;
  }
  try {
    this._nsIUDPSocket.init(port, false);
    this._nsIUDPSocket.asyncListen(new nsIUDPSocketListener(this));
    continuation(0);
  } catch (e) {
    continuation(-1);
  }
};

UDP_Firefox.prototype.getInfo = function(continuation) {
  var returnValue = {
    localAddress: "127.0.0.1",
    localPort: this._nsIUDPSocket
  };
  continuation(returnValue);
};

UDP_Firefox.prototype.sendTo = function(buffer, address, port, continuation) {
  var asArray = [];
  var view = new Uint8Array(buffer);
  for (var i = 0; i < buffer.byteLength; i++) {
    asArray.push(view[i]);
  }
  var bytesWritten = this._nsIUDPSocket.send(address,
                                             port,
                                             asArray,
                                             asArray.length);
  continuation(bytesWritten);
};

UDP_Firefox.prototype.destroy = function(continuation) {
  this._nsIUDPSocket.close();
  continuation();
};

function nsIUDPSocketListener(udpSocket) {
  this._udpSocket = udpSocket;
}

nsIUDPSocketListener.prototype.onPacketReceived = function(nsIUDPSocket,
                                                           message) {
  var eventData = {
    resultCode: 0,
    address: message.fromAddr.address,
    port: message.fromAddr.port,
    data: this.str2ab(message.data)
  };
  this._udpSocket.dispatchEvent("onData",
                                eventData);
};

nsIUDPSocketListener.prototype.onStopListening = function(nsIUDPSocket,
                                                          status) {
};

nsIUDPSocketListener.prototype.str2ab = function(str) {
  var buf = new ArrayBuffer(str.length); 
  var bufView = new Uint8Array(buf);
  for (var i=0, strLen=str.length; i<strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
};

/** REGISTER PROVIDER **/
exports.provider = UDP_Firefox;
exports.api = "core.udpsocket";

},{}],46:[function(require,module,exports){
var ClientSocket = require('./client_socket');

function nsIServerSocketListener(serverSocket) {
  if (!(this instanceof nsIServerSocketListener)) {
    return new nsIServerSocketListener(serverSocket);
  }
  this.serverSocket = serverSocket;
}

nsIServerSocketListener.prototype.onSocketAccepted = function(nsiServerSocket, transport) {
  var clientSocket = new ClientSocket(transport);
  if(typeof this.serverSocket.onConnect === 'function') {
    this.serverSocket.onConnect(clientSocket);
  }
};

nsIServerSocketListener.prototype.onStopListening = function(nsiServerSocket, status) {
};

// Address is currently ignored, as it is not possible to specify a
// listening address in Firefox.
function ServerSocket(address, port, backlog) {
  if (!(this instanceof ServerSocket)) {
    return new ServerSocket(address, port, backlog);
  }
  if (typeof backlog !== 'number') {
    backlog = -1;
  }
  this.nsIServerSocket = Components.classes["@mozilla.org/network/server-socket;1"]
    .createInstance(Components.interfaces.nsIServerSocket);
  this.nsIServerSocket.init(port, 0, backlog);
}

ServerSocket.prototype.listen = function() {
  this.nsIServerSocket.asyncListen(new nsIServerSocketListener(this));
};

ServerSocket.prototype.disconnect = function() {
  this.nsIServerSocket.close();
};

ServerSocket.prototype.getInfo = function() {
  var nsIServerSocket = this.nsIServerSocket;
  var port = nsIServerSocket.port;
  var localAddress = '127.0.0.1';
  var socketType = 'tcp';
  var info = {socketType: socketType,
              localAddress: localAddress,
              localPort: port};
  return info;
};

module.exports = ServerSocket;

},{"./client_socket":42}],47:[function(require,module,exports){
(function (global){
var providers = [
  require('freedom/providers/core/core.unprivileged'),
  require('freedom/providers/core/echo.unprivileged'),
  require('freedom/providers/core/console.unprivileged'),
  require('freedom/providers/core/peerconnection.unprivileged'),
  require('freedom/providers/core/core.rtcpeerconnection'),
  require('freedom/providers/core/core.rtcdatachannel'),
  require('../providers/core.tcpsocket'),
  require('../providers/core.udpsocket'),
  require('../providers/core.storage'),
  require('freedom/providers/core/view.unprivileged'),
  require('freedom/providers/core/websocket.unprivileged')
];

var oauth = require('freedom/providers/core/oauth');
//TODO: oauth
//require('../providers/oauth').register(oauth);
providers.push(oauth);


// When included as a jsm file.
if (typeof Components !== 'undefined') {
  Components.utils.import("resource://gre/modules/devtools/Console.jsm");
  Components.utils.import("resource://gre/modules/Timer.jsm");
  Components.utils.import('resource://gre/modules/Services.jsm');
  XMLHttpRequest = Components.Constructor("@mozilla.org/xmlextras/xmlhttprequest;1", "nsIXMLHttpRequest");

  var hiddenWindow = Services.appShell.hiddenDOMWindow;
  mozRTCPeerConnection = hiddenWindow.mozRTCPeerConnection;
  mozRTCSessionDescription = hiddenWindow.mozRTCSessionDescription;
  mozRTCIceCandidate = hiddenWindow.mozRTCIceCandidate;
  // Replace Blob with blob that has prototype defined.
  // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1007318
  Blob = hiddenWindow.Blob;
  WebSocket = hiddenWindow.WebSocket;
  Components.utils.importGlobalProperties(['URL']);

  freedom = require('freedom/src/entry').bind({}, {
    location: "resource://",
    portType: require('freedom/src/link/worker'),
    source: Components.stack.filename,
    providers: providers,
    isModule: false
  });
  EXPORTED_SYMBOLS = ["freedom"];
} else {
  // When loaded in a worker.
  require('freedom/src/entry')({
    isModule: true,
    portType: require('freedom/src/link/worker'),
    providers: providers,
    global: global
  });
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../providers/core.storage":43,"../providers/core.tcpsocket":44,"../providers/core.udpsocket":45,"freedom/providers/core/console.unprivileged":12,"freedom/providers/core/core.rtcdatachannel":13,"freedom/providers/core/core.rtcpeerconnection":14,"freedom/providers/core/core.unprivileged":15,"freedom/providers/core/echo.unprivileged":16,"freedom/providers/core/oauth":17,"freedom/providers/core/peerconnection.unprivileged":18,"freedom/providers/core/view.unprivileged":19,"freedom/providers/core/websocket.unprivileged":20,"freedom/src/entry":25,"freedom/src/link/worker":28}],"es6-promise":[function(require,module,exports){
if (typeof Components !== 'undefined') {
  // In JSM
  Components.utils.import("resource://gre/modules/Promise.jsm");

  exports.Promise = Promise;
} else {
  // In Web Worker
  // Note: Uses full path in es6 to prevent recursion.
  exports.Promise = require('es6-promise/dist/commonjs/main').Promise;
}
},{"es6-promise/dist/commonjs/main":1}]},{},[47]);
