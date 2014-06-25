/**
 * This is freedom.js. - https://freedomjs.org
 *
 * Copyright 2013 The freedom.js authors.
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
(function (global) {
  'use strict';
  (function freedom() {
    /* jshint -W069 */

    var freedom_src = '(function (global) {\'use strict\';(' + freedom + ')();})(this);';
    var fdom;

    if (typeof global['freedom'] !== 'undefined') {
      return;
    }

    /* jshint -W093 */
    /* jshint -W034 */
    if (typeof window === 'undefined') {
      var window = global;
    }
function SimpleDataPeer(peerName, stunServers, dataChannelCallbacks, mocks) {
    var constraints, config, i;
    if (this.peerName = peerName, this.channels = {}, this.dataChannelCallbacks = dataChannelCallbacks, 
    this.onConnectedQueue = [], "undefined" != typeof mocks.RTCPeerConnection) this.RTCPeerConnection = mocks.RTCPeerConnection; else if ("undefined" != typeof webkitRTCPeerConnection) this.RTCPeerConnection = webkitRTCPeerConnection; else {
        if ("undefined" == typeof mozRTCPeerConnection) throw new Error("This environment does not appear to support RTCPeerConnection");
        this.RTCPeerConnection = mozRTCPeerConnection;
    }
    if ("undefined" != typeof mocks.RTCSessionDescription) this.RTCSessionDescription = mocks.RTCSessionDescription; else if ("undefined" != typeof RTCSessionDescription) this.RTCSessionDescription = RTCSessionDescription; else {
        if ("undefined" == typeof mozRTCSessionDescription) throw new Error("This environment does not appear to support RTCSessionDescription");
        this.RTCSessionDescription = mozRTCSessionDescription;
    }
    if ("undefined" != typeof mocks.RTCIceCandidate) this.RTCIceCandidate = mocks.RTCIceCandidate; else if ("undefined" != typeof RTCIceCandidate) this.RTCIceCandidate = RTCIceCandidate; else {
        if ("undefined" == typeof mozRTCIceCandidate) throw new Error("This environment does not appear to support RTCIceCandidate");
        this.RTCIceCandidate = mozRTCIceCandidate;
    }
    for (constraints = {
        optional: [ {
            DtlsSrtpKeyAgreement: !0
        } ]
    }, // A way to speak to the peer to send SDP headers etc.
    this.sendSignalMessage = null, this.pc = null, // The peer connection.
    // Get TURN servers for the peer connection.
    config = {
        iceServers: []
    }, i = 0; i < stunServers.length; i += 1) config.iceServers.push({
        url: stunServers[i]
    });
    this.pc = new this.RTCPeerConnection(config, constraints), // Add basic event handlers.
    this.pc.addEventListener("icecandidate", this.onIceCallback.bind(this)), this.pc.addEventListener("negotiationneeded", this.onNegotiationNeeded.bind(this)), 
    this.pc.addEventListener("datachannel", this.onDataChannel.bind(this)), this.pc.addEventListener("signalingstatechange", function() {
        // TODO: come up with a better way to detect connection.  We start out
        // as "stable" even before we are connected.
        // TODO: this is not fired for connections closed by the other side.
        // This will be fixed in m37, at that point we should dispatch an onClose
        // event here for freedom.transport to pick up.
        "stable" === this.pc.signalingState && (this.pcState = SimpleDataPeerState.CONNECTED, 
        this.onConnectedQueue.map(function(callback) {
            callback();
        }));
    }.bind(this)), // This state variable is used to fake offer/answer when they are wrongly
    // requested and we really just need to reuse what we already have.
    this.pcState = SimpleDataPeerState.DISCONNECTED;
}

// _signallingChannel is a channel for emitting events back to the freedom Hub.
function PeerConnection(portModule, dispatchEvent, RTCPeerConnection, RTCSessionDescription, RTCIceCandidate) {
    // Channel for emitting events to consumer.
    this.dispatchEvent = dispatchEvent, // a (hopefully unique) ID for debugging.
    this.peerName = "p" + Math.random(), // This is the portApp (defined in freedom/src/port-app.js). A way to speak
    // to freedom.
    this.freedomModule = portModule, // For tests we may mock out the PeerConnection and
    // SessionDescription implementations
    this.RTCPeerConnection = RTCPeerConnection, this.RTCSessionDescription = RTCSessionDescription, 
    this.RTCIceCandidate = RTCIceCandidate, // This is the a channel to send signalling messages.
    this.signallingChannel = null, // The DataPeer object for talking to the peer.
    this.peer = null, // The Core object for managing channels.
    this.freedomModule.once("core", function(Core) {
        this.core = new Core();
    }.bind(this)), this.freedomModule.emit(this.freedomModule.controlChannel, {
        type: "core request delegated to peerconnection",
        request: "core"
    });
}

!function() {
    var define, requireModule, require, requirejs;
    !function() {
        var registry = {}, seen = {};
        define = function(name, deps, callback) {
            registry[name] = {
                deps: deps,
                callback: callback
            };
        }, requirejs = require = requireModule = function(name) {
            function resolve(child) {
                if ("." !== child.charAt(0)) return child;
                for (var parts = child.split("/"), parentBase = name.split("/").slice(0, -1), i = 0, l = parts.length; l > i; i++) {
                    var part = parts[i];
                    if (".." === part) parentBase.pop(); else {
                        if ("." === part) continue;
                        parentBase.push(part);
                    }
                }
                return parentBase.join("/");
            }
            if (requirejs._eak_seen = registry, seen[name]) return seen[name];
            if (seen[name] = {}, !registry[name]) throw new Error("Could not find module " + name);
            for (var exports, mod = registry[name], deps = mod.deps, callback = mod.callback, reified = [], i = 0, l = deps.length; l > i; i++) reified.push("exports" === deps[i] ? exports = {} : requireModule(resolve(deps[i])));
            var value = callback.apply(this, reified);
            return seen[name] = exports || value;
        };
    }(), define("promise/all", [ "./utils", "exports" ], function(__dependency1__, __exports__) {
        "use strict";
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
            if (!isArray(promises)) throw new TypeError("You must pass an array to all.");
            return new Promise(function(resolve, reject) {
                function resolver(index) {
                    return function(value) {
                        resolveAll(index, value);
                    };
                }
                function resolveAll(index, value) {
                    results[index] = value, 0 === --remaining && resolve(results);
                }
                var promise, results = [], remaining = promises.length;
                0 === remaining && resolve([]);
                for (var i = 0; i < promises.length; i++) promise = promises[i], promise && isFunction(promise.then) ? promise.then(resolver(i), reject) : resolveAll(i, promise);
            });
        }
        /* global toString */
        var isArray = __dependency1__.isArray, isFunction = __dependency1__.isFunction;
        __exports__.all = all;
    }), define("promise/asap", [ "exports" ], function(__exports__) {
        "use strict";
        // node
        function useNextTick() {
            return function() {
                process.nextTick(flush);
            };
        }
        function useMutationObserver() {
            var iterations = 0, observer = new BrowserMutationObserver(flush), node = document.createTextNode("");
            return observer.observe(node, {
                characterData: !0
            }), function() {
                node.data = iterations = ++iterations % 2;
            };
        }
        function useSetTimeout() {
            return function() {
                local.setTimeout(flush, 1);
            };
        }
        function flush() {
            for (var i = 0; i < queue.length; i++) {
                var tuple = queue[i], callback = tuple[0], arg = tuple[1];
                callback(arg);
            }
            queue = [];
        }
        function asap(callback, arg) {
            var length = queue.push([ callback, arg ]);
            1 === length && // If length is 1, that means that we need to schedule an async flush.
            // If additional callbacks are queued before the queue is flushed, they
            // will be processed by this flush that we are scheduling.
            scheduleFlush();
        }
        var scheduleFlush, browserGlobal = "undefined" != typeof window ? window : {}, BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver, local = "undefined" != typeof global ? global : void 0 === this ? window : this, queue = [];
        // Decide what async method to use to triggering processing of queued callbacks:
        scheduleFlush = "undefined" != typeof process && "[object process]" === {}.toString.call(process) ? useNextTick() : BrowserMutationObserver ? useMutationObserver() : useSetTimeout(), 
        __exports__.asap = asap;
    }), define("promise/config", [ "exports" ], function(__exports__) {
        "use strict";
        function configure(name, value) {
            return 2 !== arguments.length ? config[name] : void (config[name] = value);
        }
        var config = {
            instrument: !1
        };
        __exports__.config = config, __exports__.configure = configure;
    }), define("promise/polyfill", [ "./promise", "./utils", "exports" ], function(__dependency1__, __dependency2__, __exports__) {
        "use strict";
        function polyfill() {
            var local;
            local = "undefined" != typeof global ? global : "undefined" != typeof window && window.document ? window : self;
            var es6PromiseSupport = "Promise" in local && // Some of these methods are missing from
            // Firefox/Chrome experimental implementations
            "resolve" in local.Promise && "reject" in local.Promise && "all" in local.Promise && "race" in local.Promise && // Older version of the spec had a resolver object
            // as the arg rather than a function
            function() {
                var resolve;
                return new local.Promise(function(r) {
                    resolve = r;
                }), isFunction(resolve);
            }();
            es6PromiseSupport || (local.Promise = RSVPPromise);
        }
        /*global self*/
        var RSVPPromise = __dependency1__.Promise, isFunction = __dependency2__.isFunction;
        __exports__.polyfill = polyfill;
    }), define("promise/promise", [ "./config", "./utils", "./all", "./race", "./resolve", "./reject", "./asap", "exports" ], function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__, __dependency6__, __dependency7__, __exports__) {
        "use strict";
        // default async is asap;
        function Promise(resolver) {
            if (!isFunction(resolver)) throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
            if (!(this instanceof Promise)) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
            this._subscribers = [], invokeResolver(resolver, this);
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
            } catch (e) {
                rejectPromise(e);
            }
        }
        function invokeCallback(settled, promise, callback, detail) {
            var value, error, succeeded, failed, hasCallback = isFunction(callback);
            if (hasCallback) try {
                value = callback(detail), succeeded = !0;
            } catch (e) {
                failed = !0, error = e;
            } else value = detail, succeeded = !0;
            handleThenable(promise, value) || (hasCallback && succeeded ? resolve(promise, value) : failed ? reject(promise, error) : settled === FULFILLED ? resolve(promise, value) : settled === REJECTED && reject(promise, value));
        }
        function subscribe(parent, child, onFulfillment, onRejection) {
            var subscribers = parent._subscribers, length = subscribers.length;
            subscribers[length] = child, subscribers[length + FULFILLED] = onFulfillment, subscribers[length + REJECTED] = onRejection;
        }
        function publish(promise, settled) {
            for (var child, callback, subscribers = promise._subscribers, detail = promise._detail, i = 0; i < subscribers.length; i += 3) child = subscribers[i], 
            callback = subscribers[i + settled], invokeCallback(settled, child, callback, detail);
            promise._subscribers = null;
        }
        function handleThenable(promise, value) {
            var resolved, then = null;
            try {
                if (promise === value) throw new TypeError("A promises callback cannot return that same promise.");
                if (objectOrFunction(value) && (then = value.then, isFunction(then))) return then.call(value, function(val) {
                    return resolved ? !0 : (resolved = !0, void (value !== val ? resolve(promise, val) : fulfill(promise, val)));
                }, function(val) {
                    return resolved ? !0 : (resolved = !0, void reject(promise, val));
                }), !0;
            } catch (error) {
                return resolved ? !0 : (reject(promise, error), !0);
            }
            return !1;
        }
        function resolve(promise, value) {
            promise === value ? fulfill(promise, value) : handleThenable(promise, value) || fulfill(promise, value);
        }
        function fulfill(promise, value) {
            promise._state === PENDING && (promise._state = SEALED, promise._detail = value, 
            config.async(publishFulfillment, promise));
        }
        function reject(promise, reason) {
            promise._state === PENDING && (promise._state = SEALED, promise._detail = reason, 
            config.async(publishRejection, promise));
        }
        function publishFulfillment(promise) {
            publish(promise, promise._state = FULFILLED);
        }
        function publishRejection(promise) {
            publish(promise, promise._state = REJECTED);
        }
        var config = __dependency1__.config, objectOrFunction = (__dependency1__.configure, 
        __dependency2__.objectOrFunction), isFunction = __dependency2__.isFunction, all = (__dependency2__.now, 
        __dependency3__.all), race = __dependency4__.race, staticResolve = __dependency5__.resolve, staticReject = __dependency6__.reject, asap = __dependency7__.asap;
        config.async = asap;
        var PENDING = void 0, SEALED = 0, FULFILLED = 1, REJECTED = 2;
        Promise.prototype = {
            constructor: Promise,
            _state: void 0,
            _detail: void 0,
            _subscribers: void 0,
            then: function(onFulfillment, onRejection) {
                var promise = this, thenPromise = new this.constructor(function() {});
                if (this._state) {
                    var callbacks = arguments;
                    config.async(function() {
                        invokeCallback(promise._state, thenPromise, callbacks[promise._state - 1], promise._detail);
                    });
                } else subscribe(this, thenPromise, onFulfillment, onRejection);
                return thenPromise;
            },
            "catch": function(onRejection) {
                return this.then(null, onRejection);
            }
        }, Promise.all = all, Promise.race = race, Promise.resolve = staticResolve, Promise.reject = staticReject, 
        __exports__.Promise = Promise;
    }), define("promise/race", [ "./utils", "exports" ], function(__dependency1__, __exports__) {
        "use strict";
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
            if (!isArray(promises)) throw new TypeError("You must pass an array to race.");
            return new Promise(function(resolve, reject) {
                for (var promise, i = 0; i < promises.length; i++) promise = promises[i], promise && "function" == typeof promise.then ? promise.then(resolve, reject) : resolve(promise);
            });
        }
        /* global toString */
        var isArray = __dependency1__.isArray;
        __exports__.race = race;
    }), define("promise/reject", [ "exports" ], function(__exports__) {
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
            return new Promise(function(resolve, reject) {
                reject(reason);
            });
        }
        __exports__.reject = reject;
    }), define("promise/resolve", [ "exports" ], function(__exports__) {
        "use strict";
        function resolve(value) {
            /*jshint validthis:true */
            if (value && "object" == typeof value && value.constructor === this) return value;
            var Promise = this;
            return new Promise(function(resolve) {
                resolve(value);
            });
        }
        __exports__.resolve = resolve;
    }), define("promise/utils", [ "exports" ], function(__exports__) {
        "use strict";
        function objectOrFunction(x) {
            return isFunction(x) || "object" == typeof x && null !== x;
        }
        function isFunction(x) {
            return "function" == typeof x;
        }
        function isArray(x) {
            return "[object Array]" === Object.prototype.toString.call(x);
        }
        // Date.now is not available in browsers < IE9
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now#Compatibility
        var now = Date.now || function() {
            return new Date().getTime();
        };
        __exports__.objectOrFunction = objectOrFunction, __exports__.isFunction = isFunction, 
        __exports__.isArray = isArray, __exports__.now = now;
    }), requireModule("promise/polyfill").polyfill();
}(), /*globals fdom:true, Promise */
"undefined" == typeof fdom && (fdom = {});

/**
 * The API registry for FreeDOM.  Used to look up requested APIs,
 * and provides a bridge for core APIs to act like normal APIs.
 * @Class API
 * @constructor
 */
var Api = function() {
    this.apis = {}, this.providers = {}, this.waiters = {};
};

/**
 * Get an API.
 * @method get
 * @param {String} api The API name to get.
 * @returns {{name:String, definition:API}} The API if registered.
 */
Api.prototype.get = function(api) {
    return this.apis[api] ? {
        name: api,
        definition: this.apis[api]
    } : !1;
}, /**
 * Set an API to a definition.
 * @method set
 * @param {String} name The API name.
 * @param {API} definition The JSON object defining the API.
 */
Api.prototype.set = function(name, definition) {
    this.apis[name] = definition;
}, /**
 * Register a core API provider.
 * @method register
 * @param {String} name the API name.
 * @param {Function} constructor the function to create a provider for the API.
 */
Api.prototype.register = function(name, constructor) {
    var i;
    if (this.providers[name] = constructor, this.waiters[name]) {
        for (i = 0; i < this.waiters[name].length; i += 1) this.waiters[name][i][0](constructor.bind({}, this.waiters[name][i][2]));
        delete this.waiters[name];
    }
}, /**
 * Get a core API connected to a given FreeDOM module.
 * @method getCore
 * @param {String} name the API to retrieve.
 * @param {port.App} from The instantiating App.
 * @returns {Promise} A promise of a fdom.App look-alike matching
 * a local API definition.
 */
Api.prototype.getCore = function(name, from) {
    return new Promise(function(resolve, reject) {
        this.apis[name] ? this.providers[name] ? resolve(this.providers[name].bind({}, from)) : (this.waiters[name] || (this.waiters[name] = []), 
        this.waiters[name].push([ resolve, reject, from ])) : (fdom.debug.warn("Api.getCore asked for unknown core: " + name), 
        reject(null));
    }.bind(this));
}, /**
 * Defines fdom.apis for fdom module registry and core provider registation.
 */
fdom.apis = new Api(), /*globals fdom:true, Promise, document, location, console */
/**
 * @module freedom
 */
"undefined" == typeof fdom && (fdom = {}), /**
 * External freedom Setup.  global.freedom is set to the value returned by
 * setup (see preamble.js and postamble.js for that mechanism).  As a result,
 * this is the primary entry function for the freedom library.
 * @for util
 * @method setup
 * @param {Object} global The window / frame / worker context freedom is in.
 * @param {String} freedom_src The textual code of freedom, for replication.
 * @param {Object} config Overriding config for freedom.js
 * @static
 */
fdom.setup = function(global, freedom_src, config) {
    fdom.debug = new fdom.port.Debug();
    var link, hub = new fdom.Hub(), site_cfg = {
        debug: !0,
        stayLocal: !1,
        portType: "Worker",
        moduleContext: config && "undefined" != typeof config.isModule ? config.isModule : fdom.util.isModuleContext()
    }, manager = new fdom.port.Manager(hub), external = new fdom.port.Proxy(fdom.proxy.EventInterface);
    // Delay debug messages until delegation to the parent context is setup.
    // Configure against data-manifest.
    // Enable console.log from worker contexts.
    return manager.setup(external), site_cfg.moduleContext ? (config && fdom.util.mixin(site_cfg, config, !0), 
    site_cfg.global = global, site_cfg.src = freedom_src, link = new fdom.link[site_cfg.portType](), 
    manager.setup(link), manager.createLink(external, "default", link), manager.once("delegate", manager.setup.bind(manager, fdom.debug))) : (manager.setup(fdom.debug), 
    fdom.util.advertise(config ? config.advertise : void 0), "undefined" != typeof document && fdom.util.eachReverse(fdom.util.scripts(global), function(script) {
        var manifest = script.getAttribute("data-manifest"), source = script.src;
        if (manifest) {
            if (site_cfg.source = source, site_cfg.manifest = manifest, script.textContent.trim().length) try {
                fdom.util.mixin(site_cfg, JSON.parse(script.textContent), !0);
            } catch (e) {
                fdom.debug.warn("Failed to parse configuration: " + e);
            }
            return !0;
        }
    }), site_cfg.global = global, site_cfg.src = freedom_src, site_cfg.resources = fdom.resources, 
    config && fdom.util.mixin(site_cfg, config, !0), "undefined" != typeof location && (site_cfg.location = location.protocol + "//" + location.host + location.pathname), 
    site_cfg.policy = new fdom.Policy(manager, site_cfg), fdom.resources.get(site_cfg.location, site_cfg.manifest).then(function(root_mod) {
        site_cfg.policy.get([], root_mod).then(manager.createLink.bind(manager, external, "default"));
    }, function(err) {
        fdom.debug.error("Failed to retrieve manifest: " + err);
    })), hub.emit("config", site_cfg), "undefined" == typeof global.console && (global.console = fdom.debug), 
    external.getInterface();
}, /*globals fdom:true */
"undefined" == typeof fdom && (fdom = {}), /**
 * Defines fdom.Hub, the core message hub between freedom modules.
 * Incomming messages from apps are sent to hub.onMessage()
 * @class Hub
 * @constructor
 */
fdom.Hub = function() {
    this.route = Math.round(1e6 * Math.random()), this.config = {}, this.apps = {}, 
    this.routes = {}, this.unbound = [], fdom.util.handleEvents(this), this.on("config", function(config) {
        fdom.util.mixin(this.config, config);
    }.bind(this));
}, /**
 * Handle an incoming message from a freedom app.
 * @method onMessage
 * @param {String} source The identifiying source of the message.
 * @param {Object} message The sent message.
 */
fdom.Hub.prototype.onMessage = function(source, message) {
    var type, destination = this.routes[source];
    return destination && destination.app ? this.apps[destination.app] ? (message.quiet || (type = message.type, 
    "message" === message.type && message.message && "method" === message.message.action ? type = "method." + message.message.type : "method" === message.type && message.message && "method" === message.message.type ? type = "return." + message.message.name : "message" === message.type && message.message && "event" === message.message.type && (type = "event." + message.message.name), 
    fdom.debug.log(this.apps[destination.source].toString() + " -" + type + "-> " + this.apps[destination.app].toString() + "." + destination.flow)), 
    void this.apps[destination.app].onMessage(destination.flow, message)) : void fdom.debug.warn("Message dropped to destination " + destination.app) : void fdom.debug.warn("Message dropped from unregistered source " + source);
}, /**
 * Get the local destination port of a flow.
 * @method getDestination
 * @param {String} source The flow to retrieve.
 * @return {Port} The destination port.
 */
fdom.Hub.prototype.getDestination = function(source) {
    var destination = this.routes[source];
    return destination ? this.apps[destination.app] : null;
}, /**
 * Get the local source port of a flow.
 * @method getSource
 * @param {Port} source The flow identifier to retrieve.
 * @return {Port} The source port.
 */
fdom.Hub.prototype.getSource = function(source) {
    return source ? this.apps[source.id] ? this.apps[source.id] : (fdom.debug.warn("No registered source '" + source.id + "'"), 
    !1) : !1;
}, /**
 * Register a destination for messages with this hub.
 * @method register
 * @param {Port} app The Port to register.
 * @param {Boolean} [force] Whether to override an existing port.
 * @return {Boolean} Whether the app was registered.
 */
fdom.Hub.prototype.register = function(app, force) {
    return !this.apps[app.id] || force ? (this.apps[app.id] = app, !0) : !1;
}, /**
 * Deregister a destination for messages with the hub.
 * Note: does not remove associated routes. As such, deregistering will
 * prevent the installation of new routes, but will not distrupt existing
 * hub routes.
 * @method deregister
 * @param {Port} app The Port to deregister
 * @return {Boolean} Whether the app was deregistered.
 */
fdom.Hub.prototype.deregister = function(app) {
    return this.apps[app.id] ? (delete this.apps[app.id], !0) : !1;
}, /**
 * Install a new route in the hub.
 * @method install
 * @param {Port} source The source of the route.
 * @param {Port} destination The destination of the route.
 * @param {String} flow The flow where the destination will receive messages.
 * @return {String} A routing source identifier for sending messages.
 */
fdom.Hub.prototype.install = function(source, destination, flow) {
    if (source = this.getSource(source)) {
        if (!destination) return void fdom.debug.warn("Unwilling to generate blackhole flow from " + source.id);
        var route = this.generateRoute();
        return this.routes[route] = {
            app: destination,
            flow: flow,
            source: source.id
        }, "function" == typeof source.on && source.on(route, this.onMessage.bind(this, route)), 
        route;
    }
}, /**
 * Uninstall a hub route.
 * @method uninstall
 * @param {Port} source The source of the route.
 * @param {String} flow The route to uninstall.
 * @return {Boolean} Whether the route was able to be uninstalled.
 */
fdom.Hub.prototype.uninstall = function(source, flow) {
    if (source = this.getSource(source)) {
        var route = this.routes[flow];
        return route ? route.source !== source.id ? (fdom.debug.warn("Flow " + flow + " does not belong to port " + source.id), 
        !1) : (delete this.routes[flow], "function" == typeof source.off && source.off(route), 
        !0) : !1;
    }
}, /**
 * Generate a unique routing identifier.
 * @method generateRoute
 * @return {String} a routing source identifier.
 * @private
 */
fdom.Hub.prototype.generateRoute = function() {
    return this.route += 1;
}, /*globals fdom:true */
"undefined" == typeof fdom && (fdom = {}), /**
 * A link connects two freedom hubs. This is an abstract class
 * providing common functionality of translating control channels,
 * and integrating config information.
 * @class Link
 * @extends Port
 * @constructor
 */
fdom.Link = function() {
    this.id = "Link" + Math.random(), this.config = {}, this.src = null, fdom.util.handleEvents(this), 
    fdom.util.mixin(this, fdom.Link.prototype);
}, /**
 * Receive messages from the hub to this port.
 * Manages startup, and passes others to 'deliverMessage' implemented
 * in derived classes.
 * @method onMessage
 * @param {String} flow the channel/flow of the message.
 * @param {Object} message The Message.
 */
fdom.Link.prototype.onMessage = function(flow, message) {
    "control" !== flow || this.controlChannel ? this.deliverMessage(flow, message) : !this.controlChannel && message.channel && (this.controlChannel = message.channel, 
    fdom.util.mixin(this.config, message.config), this.start());
}, /**
 * Emit messages to the the hub, mapping control channels.
 * @method emitMessage
 * @param {String} flow the flow to emit the message on.
 * @param {Object} messgae The message to emit.
 */
fdom.Link.prototype.emitMessage = function(flow, message) {
    "control" === flow && this.controlChannel && (flow = this.controlChannel), this.emit(flow, message);
}, /*globals fdom:true, XMLHttpRequest, Promise */
"undefined" == typeof fdom && (fdom = {}), /**
 * The Policy registry for freedom.js.  Used to look up modules and provide
 * migration and coallesing of execution.
 * @Class Policy
 * @constructor
 */
fdom.Policy = function(manager, config) {
    this.location = config.location, this.config = config, this.runtimes = [], this.policies = [], 
    this.add(manager, config.policy), this.runtimes[0].local = !0;
}, /**
 * The policy a runtime is expected to have unless it specifies
 * otherwise.
 * TODO: consider making static
 * @property defaultPolicy
 */
fdom.Policy.prototype.defaultPolicy = {
    background: !1,
    // Can this runtime run 'background' modules?
    interactive: !0
}, /**
 * The constraints a code modules is expected to have unless it specifies
 * otherwise.
 * TODO: consider making static
 * @property defaultConstraints
 */
fdom.Policy.prototype.defaultConstraints = {
    isolation: "always",
    // values: always, app, never
    placement: "local"
}, /**
 * Resolve a module from its canonical URL.
 * Reponds with the promise of a port representing the module, 
 * @method get
 * @param {String[]} lineage The lineage of the requesting module.
 * @param {String} id The canonical ID of the module to get.
 * @returns {Promise} A promise for the local port towards the module.
 */
fdom.Policy.prototype.get = function(lineage, id) {
    return this.loadManifest(id).then(function(manifest) {
        var portId, constraints = this.overlay(this.defaultConstraints, manifest.constraints), runtime = this.findDestination(lineage, id, constraints);
        // TODO: Create a port to go to the remote runtime.
        return runtime.local ? (portId = this.isRunning(runtime, id, lineage, "never" !== constraints.isolation), 
        "always" !== constraints.isolation && portId ? (fdom.debug.log("Reused port " + portId), 
        runtime.manager.getPort(portId)) : new fdom.port.Module(id, manifest, lineage)) : (fdom.debug.error("Unexpected location selected for module placement"), 
        !1);
    }.bind(this), function(err) {
        return fdom.debug.error("Policy Error Resolving " + id, err), !1;
    });
}, /**
 * Find the runtime destination for a module given its constraints and the
 * module creating it.
 * @method findDestination
 * @param {String[]} lineage The identity of the module creating this module.
 * @param {String] id The canonical url of the module
 * @param {Object} constraints Constraints for the module.
 * @returns {Object} The element of this.runtimes where the module should run.
 */
fdom.Policy.prototype.findDestination = function(lineage, id, constraints) {
    var i;
    // Step 1: if an instance already exists, the m
    if ("always" !== constraints.isolation) for (i = 0; i < this.policies.length; i += 1) if (this.isRunning(this.runtimes[i], id, lineage, "never" !== constraints.isolation)) return this.runtimes[i];
    // Step 2: if the module wants stability, it may need to be remote.
    if ("local" === constraints.placement) return this.runtimes[0];
    if ("stable" === constraints.placement) for (i = 0; i < this.policies.length; i += 1) if (this.policies[i].background) return this.runtimes[i];
    // Step 3: if the module needs longevity / interactivity, it may want to be remote.
    return this.runtimes[0];
}, /**
 * Determine if a known runtime is running an appropriate instance of a module.
 * @method isRunning
 * @param {Object} runtime The runtime to check.
 * @param {String} id The module to look for.
 * @param {String[]} from The identifier of the requesting module.
 * @param {Boolean} fullMatch If the module needs to be in the same app.
 * @returns {String|Boolean} The Module id if it is running, or false if not.
 */
fdom.Policy.prototype.isRunning = function(runtime, id, from, fullMatch) {
    var okay, i = 0, j = 0;
    for (i = 0; i < runtime.modules.length; i += 1) if (fullMatch && runtime.modules[i].length === from.length + 1) {
        for (okay = !0, j = 0; j < from.length; j += 1) if (0 !== runtime.modules[i][j + 1].indexOf(from[j])) {
            okay = !1;
            break;
        }
        if (0 !== runtime.modules[i][0].indexOf(id) && (okay = !1), okay) return runtime.modules[i][0];
    } else if (!fullMatch && 0 === runtime.modules[i][0].indexOf(id)) return runtime.modules[i][0];
    return !1;
}, /**
 * Get a promise of the manifest for a module ID.
 * @method loadManifest
 * @param {String} manifest The canonical ID of the manifest
 * @returns {Promise} Promise for the json contents of the manifest.
 */
fdom.Policy.prototype.loadManifest = function(manifest) {
    return fdom.resources.getContents(manifest).then(function(data) {
        try {
            return JSON.parse(data);
        } catch (err) {
            return fdom.debug.warn("Failed to load " + this.manifestId + ": " + err), {};
        }
    });
}, /**
 * Add a runtime to keep track of in this policy.
 * @method add
 * @param {fdom.port} port The port to use for module lifetime info
 * @param {Object} policy The policy of the runtime.
 */
fdom.Policy.prototype.add = function(port, policy) {
    var runtime = {
        manager: port,
        modules: []
    };
    this.runtimes.push(runtime), this.policies.push(this.overlay(this.defaultPolicy, policy)), 
    port.on("moduleAdd", function(runtime, info) {
        var lineage = info.lineage;
        lineage[0] = info.id, runtime.modules.push(lineage);
    }.bind(this, runtime)), port.on("moduleRemove", function(runtime, info) {
        var i, modFingerprint, lineage = info.lineage;
        for (lineage[0] = info.id, modFingerprint = lineage.toString(), i = 0; i < runtime.modules.length; i += 1) if (runtime.modules[i].toString() === modFingerprint) return void runtime.modules.splice(i, 1);
        fdom.debug.warn("Unknown module to remove: ", info.id);
    }.bind(this, runtime));
}, /**
 * Overlay a specific policy or constraint instance on default settings.
 * TODO: consider making static.
 * @method overlay
 * @private
 * @param {Object} base The default object
 * @param {Object} overlay The superceeding object
 * @returns {Object} A new object with base parameters when not set in overlay.
 */
fdom.Policy.prototype.overlay = function(base, overlay) {
    var ret = {};
    return fdom.util.mixin(ret, base), overlay && fdom.util.mixin(ret, overlay, !0), 
    ret;
}, /*globals fdom:true */
"undefined" == typeof fdom && (fdom = {}), fdom.port = fdom.port || {}, /**
 * A freedom port providing debugging output to the console.
 * @uses handleEvents
 * @extends Port
 * @constructor
 */
fdom.port.Debug = function() {
    this.id = "debug", this.emitChannel = !1, this.console = null, this.config = !1, 
    fdom.util.handleEvents(this);
}, /**
 * Provide a textual description of this port.
 * @method toString
 * @return {String} the textual description.
 */
fdom.port.Debug.prototype.toString = function() {
    return "[Console]";
}, /**
 * Handler for receiving messages sent to the debug port.
 * These messages are used to retreive config for exposing console.
 * @method onMessage
 * @param {String} source the source identifier for the message.
 * @param {Object} message the received message.
 */
fdom.port.Debug.prototype.onMessage = function(source, message) {
    "control" === source && message.channel && !this.emitChannel && (this.emitChannel = message.channel, 
    this.config = message.config.debug, this.console = message.config.global.console, 
    this.emit("ready"));
}, /**
 * Dispatch a debug message with arbitrary severity.
 * @method format
 * @param {String} severity the severity of the message.
 * @param {String} source The location of message.
 * @param {String[]} args The contents of the message.
 * @private
 */
fdom.port.Debug.prototype.format = function(severity, source, args) {
    var i, alist = [];
    if ("string" == typeof args) alist.push(args); else for (i = 0; i < args.length; i += 1) alist.push(args[i]);
    return this.emitChannel ? void this.emit(this.emitChannel, {
        severity: severity,
        source: source,
        quiet: !0,
        request: "debug",
        msg: JSON.stringify(alist)
    }) : void this.on("ready", this.format.bind(this, severity, source, alist));
}, /**
 * Print received messages on the console.
 * @method print
 * @param {Object} message The message emitted by {@see format} to print.
 */
fdom.port.Debug.prototype.print = function(message) {
    var args, debug = Boolean(this.config), arr = [], i = 0;
    if ("string" == typeof this.config) for (debug = !1, args = this.config.split(" "), 
    i = 0; i < args.length; i += 1) if (0 === args[i].indexOf("source:")) {
        if (void 0 === message.source || message.source.indexOf(args[i].substr(7)) > -1) {
            debug = !0;
            break;
        }
    } else if (message.msg.indexOf(args[i]) > -1) {
        debug = !0;
        break;
    }
    if (debug && "undefined" != typeof this.console && this.console !== this) {
        if (args = JSON.parse(message.msg), "string" == typeof args) arr.push(args); else for (;void 0 !== args[i]; ) arr.push(args[i]), 
        i += 1;
        "undefined" != typeof process && message.source ? (arr.unshift("[39m"), arr.unshift("[31m" + message.source)) : this.console.__mozillaConsole__ && message.source ? arr.unshift(message.source.toUpperCase()) : message.source && (arr.unshift("color: red"), 
        arr.unshift("%c " + message.source)), !this.console[message.severity] && this.console.log && (message.severity = "log"), 
        this.console[message.severity].apply(this.console, arr);
    }
}, /**
 * Print a log message to the console.
 * @method log
 */
fdom.port.Debug.prototype.log = function() {
    this.format("log", void 0, arguments);
}, /**
 * Print a warning message to the console.
 * @method warn
 */
fdom.port.Debug.prototype.warn = function() {
    this.format("warn", void 0, arguments);
}, /**
 * Print an error message to the console.
 * @method error
 */
fdom.port.Debug.prototype.error = function() {
    this.format("error", void 0, arguments), this.console && this.console.error.apply(this.console, arguments);
}, /*globals fdom:true */
"undefined" == typeof fdom && (fdom = {}), fdom.port = fdom.port || {}, /**
 * A freedom port which manages the control plane of of changing hub routes.
 * @class Manager
 * @extends Port
 * @param {Hub} hub The routing hub to control.
 * @constructor
 */
fdom.port.Manager = function(hub) {
    this.id = "control", this.config = {}, this.controlFlows = {}, this.dataFlows = {}, 
    this.dataFlows[this.id] = [], this.reverseFlowMap = {}, this.hub = hub, this.delegate = null, 
    this.toDelegate = {}, this.hub.on("config", function(config) {
        fdom.util.mixin(this.config, config), this.emit("config");
    }.bind(this)), fdom.util.handleEvents(this), this.hub.register(this);
}, /**
 * Provide a textual description of this port.
 * @method toString
 * @return {String} the description of this port.
 */
fdom.port.Manager.prototype.toString = function() {
    return "[Local Controller]";
}, /**
 * Process messages sent to this port.
 * The manager, or 'control' destination handles several types of messages,
 * identified by the request property.  The actions are:
 * 1. debug. Prints the message to the console.
 * 2. link. Creates a link between the source and a provided destination port.
 * 3. port. Creates a link between the source and a described port type.
 * 4. delegate. Routes a defined set of control messages to another location.
 * 5. resource. Registers the source as a resource resolver.
 * 6. core. Generates a core provider for the requester.
 * 7. close. Tears down routes involing the requesting port.
 * 8. unlink. Tears down a route from the requesting port.
 * @method onMessage
 * @param {String} flow The source identifier of the message.
 * @param {Object} message The received message.
 */
fdom.port.Manager.prototype.onMessage = function(flow, message) {
    var origin, reverseFlow = this.controlFlows[flow];
    if (!reverseFlow) return void fdom.debug.warn("Unknown message source: " + flow);
    if (origin = this.hub.getDestination(reverseFlow), this.delegate && reverseFlow !== this.delegate && this.toDelegate[flow]) // Ship off to the delegee
    return void this.emit(this.delegate, {
        type: "Delegation",
        request: "handle",
        quiet: !0,
        flow: flow,
        message: message
    });
    if ("debug" === message.request) return void (this.config.debug && fdom.debug.print(message));
    if ("link" === message.request) this.createLink(origin, message.name, message.to, message.overrideDest); else if ("port" === message.request) message.exposeManager && (message.args = this), 
    this.createLink(origin, message.name, new fdom.port[message.service](message.args)); else if ("bindport" === message.request) this.createLink({
        id: message.id
    }, "custom" + message.port, new fdom.port[message.service](message.args), "default", !0); else if ("delegate" === message.request) // Initate Delegation.
    null === this.delegate && (this.delegate = reverseFlow), this.toDelegate[message.flow] = !0, 
    this.emit("delegate"); else if ("resource" === message.request) fdom.resources.addResolver(message.args[0]), 
    fdom.resources.addRetriever(message.service, message.args[1]); else if ("core" === message.request) {
        if (this.core && reverseFlow === this.delegate) return void new this.core().onMessage(origin, message.message);
        this.getCore(function(to, core) {
            this.hub.onMessage(to, {
                type: "core",
                core: core
            });
        }.bind(this, reverseFlow));
    } else if ("close" === message.request) this.destroy(origin); else {
        if ("unlink" !== message.request) return fdom.debug.warn("Unknown control request: " + message.request), 
        void fdom.debug.log(JSON.stringify(message));
        this.removeLink(origin, message.to);
    }
}, /**
 * Get the port messages will be routed to given its id.
 * @method getPort
 * @param {String} portId The ID of the port.
 * @returns {fdom.Port} The port with that ID.
 */
fdom.port.Manager.prototype.getPort = function(portId) {
    return this.hub.getDestination(this.controlFlows[portId]);
}, /**
 * Set up a port with the hub.
 * @method setup
 * @param {Port} port The port to register.
 */
fdom.port.Manager.prototype.setup = function(port) {
    if (!port.id) return fdom.debug.warn("Refusing to setup unidentified port "), !1;
    if (this.controlFlows[port.id]) return fdom.debug.warn("Refusing to re-initialize port " + port.id), 
    !1;
    if (!this.config.global) return void this.once("config", this.setup.bind(this, port));
    this.hub.register(port);
    var flow = this.hub.install(this, port.id, "control"), reverse = this.hub.install(port, this.id, port.id);
    return this.controlFlows[port.id] = flow, this.dataFlows[port.id] = [ reverse ], 
    this.reverseFlowMap[flow] = reverse, this.reverseFlowMap[reverse] = flow, port.lineage && this.emit("moduleAdd", {
        id: port.id,
        lineage: port.lineage
    }), this.hub.onMessage(flow, {
        type: "setup",
        channel: reverse,
        config: this.config
    }), !0;
}, /**
 * Tear down a port on the hub.
 * @method destroy
 * @apram {Port} port The port to unregister.
 */
fdom.port.Manager.prototype.destroy = function(port) {
    if (!port.id) return fdom.debug.warn("Unable to tear down unidentified port"), !1;
    port.lineage && this.emit("moduleRemove", {
        id: port.id,
        lineage: port.lineage
    }), // Remove the port.
    delete this.controlFlows[port.id];
    // Remove associated links.
    var i;
    for (i = this.dataFlows[port.id].length - 1; i >= 0; i -= 1) this.removeLink(port, this.dataFlows[port.id][i]);
    // Remove the port.
    delete this.dataFlows[port.id], this.hub.deregister(port);
}, /**
 * Create a link between two ports.  Links are created in both directions,
 * and a message with those capabilities is sent to the source port.
 * @method createLink
 * @param {Port} port The source port.
 * @param {String} name The flow for messages from destination to port.
 * @param {Port} destiantion The destination port.
 * @param {String} [destName] The flow name for messages to the destination.
 * @param {Boolean} [toDest] Tell the destination rather than source about the link.
 */
fdom.port.Manager.prototype.createLink = function(port, name, destination, destName, toDest) {
    if (!this.config.global) return void this.once("config", this.createLink.bind(this, port, name, destination, destName));
    if (!this.controlFlows[port.id]) return void fdom.debug.warn("Unwilling to link from non-registered source.");
    if (!this.controlFlows[destination.id] && this.setup(destination) === !1) return void fdom.debug.warn("Could not find or setup destination.");
    var reverse, outgoingName = destName || "default", outgoing = this.hub.install(port, destination.id, outgoingName);
    // Recover the port so that listeners are installed.
    destination = this.hub.getDestination(outgoing), reverse = this.hub.install(destination, port.id, name), 
    this.reverseFlowMap[outgoing] = reverse, this.dataFlows[port.id].push(outgoing), 
    this.reverseFlowMap[reverse] = outgoing, this.dataFlows[destination.id].push(reverse), 
    toDest ? this.hub.onMessage(this.controlFlows[destination.id], {
        type: "createLink",
        name: outgoingName,
        channel: reverse,
        reverse: outgoing
    }) : this.hub.onMessage(this.controlFlows[port.id], {
        name: name,
        type: "createLink",
        channel: outgoing,
        reverse: reverse
    });
}, /**
 * Remove a link between to ports. The reverse link will also be removed.
 * @method removeLink
 * @param {Port} port The source port.
 * @param {String} name The flow to be removed.
 */
fdom.port.Manager.prototype.removeLink = function(port, name) {
    var i, reverse = this.hub.getDestination(name), rflow = this.reverseFlowMap[name];
    // Notify ports that a channel is closing.
    // Uninstall the channel.
    return reverse && rflow ? this.hub.getDestination(rflow).id !== port.id ? void fdom.debug.warn("Source port does not own flow " + name) : (i = this.controlFlows[port.id], 
    i && this.hub.onMessage(i, {
        type: "close",
        channel: name
    }), i = this.controlFlows[reverse.id], i && this.hub.onMessage(i, {
        type: "close",
        channel: rflow
    }), this.hub.uninstall(port, name), this.hub.uninstall(reverse, rflow), delete this.reverseFlowMap[name], 
    delete this.reverseFlowMap[rflow], this.forgetFlow(reverse.id, rflow), void this.forgetFlow(port.id, name)) : void fdom.debug.warn("Could not find metadata to remove flow: " + name);
}, /**
 * Forget the flow from id with a given name.
 * @method forgetFlow
 * @private
 * @param {String} id The port ID of the source.
 * @param {String} name The flow name.
 */
fdom.port.Manager.prototype.forgetFlow = function(id, name) {
    var i;
    if (this.dataFlows[id]) for (i = 0; i < this.dataFlows[id].length; i += 1) if (this.dataFlows[id][i] === name) {
        this.dataFlows[id].splice(i, 1);
        break;
    }
}, /**
 * Get the core freedom.js API active on the current hub.
 * @method getCore
 * @private
 * @param {Function} cb Callback to fire with the core object.
 */
fdom.port.Manager.prototype.getCore = function(cb) {
    this.core ? cb(this.core) : fdom.apis.getCore("core", this).then(function(core) {
        this.core = core, cb(this.core);
    }.bind(this));
}, /*globals fdom:true */
"undefined" == typeof fdom && (fdom = {}), fdom.port = fdom.port || {}, /**
 * The external Port face of a module on a hub.
 * @class Module
 * @extends Port
 * @param {String} manifestURL The manifest this module loads.
 * @param {String[]} creator The lineage of creation for this module.
 * @constructor
 */
fdom.port.Module = function(manifestURL, manifest, creator) {
    this.config = {}, this.id = manifestURL + Math.random(), this.manifestId = manifestURL, 
    this.manifest = manifest, this.lineage = [ this.manifestId ].concat(creator), this.externalPortMap = {}, 
    this.internalPortMap = {}, this.started = !1, fdom.util.handleEvents(this);
}, /**
 * Receive a message for the Module.
 * @method onMessage
 * @param {String} flow The origin of the message.
 * @param {Object} message The message received.
 */
fdom.port.Module.prototype.onMessage = function(flow, message) {
    if ("control" === flow) {
        if ("setup" === message.type) return this.controlChannel = message.channel, fdom.util.mixin(this.config, message.config), 
        this.emit(this.controlChannel, {
            type: "Core Provider",
            request: "core"
        }), void this.start();
        if ("createLink" === message.type && message.channel) return this.externalPortMap[message.name] = message.channel, 
        void 0 === this.internalPortMap[message.name] && (this.internalPortMap[message.name] = !1), 
        void this.emit(message.channel, {
            type: "default channel announcement",
            channel: message.reverse
        });
        if (message.core) return this.core = new message.core(), void this.emit("core", message.core);
        "close" === message.type ? (// Closing channel.
        "control" === message.channel && this.stop(), this.deregisterFlow(message.channel, !1)) : this.port.onMessage(flow, message);
    } else {
        if ((this.externalPortMap[flow] === !1 || !this.externalPortMap[flow]) && message.channel) //console.log('handling channel announcement for ' + flow);
        // New incoming connection attempts should get routed to modInternal.
        return this.externalPortMap[flow] = message.channel, void (void 0 === this.internalPortMap[flow] && (this.internalPortMap[flow] = !1, 
        this.manifest.provides && this.modInternal ? this.port.onMessage(this.modInternal, {
            type: "Connection",
            channel: flow
        }) : this.manifest.provides ? this.once("modInternal", function(flow) {
            this.port.onMessage(this.modInternal, {
                type: "Connection",
                channel: flow
            });
        }.bind(this, flow)) : !this.externalPortMap["default"] && message.channel && (this.externalPortMap["default"] = message.channel, 
        this.once("internalChannelReady", function(flow) {
            this.internalPortMap[flow] = this.internalPortMap["default"];
        }.bind(this, flow)))));
        if (this.started) if (this.internalPortMap[flow] === !1) this.once("internalChannelReady", this.onMessage.bind(this, flow, message)); else {
            if (!this.internalPortMap[flow]) return void fdom.debug.error("Unexpected message from " + flow);
            this.port.onMessage(this.internalPortMap[flow], message);
        } else this.once("start", this.onMessage.bind(this, flow, message));
    }
}, /**
 * Clean up after a flow which is no longer used / needed.
 * @method deregisterFLow
 * @param {String} flow The flow to remove mappings for.
 * @param {Boolean} internal If the flow name is the internal identifier.
 * @returns {Boolean} Whether the flow was successfully deregistered.
 * @private
 */
fdom.port.Module.prototype.deregisterFlow = function(flow, internal) {
    var key, map = internal ? this.internalPortMap : this.externalPortMap;
    // TODO: this is inefficient, but seems less confusing than a 3rd
    // reverse lookup map.
    for (key in map) if (map[key] === flow) return internal ? this.emit(this.controlChannel, {
        type: "Channel Teardown",
        request: "unlink",
        to: this.externalPortMap[key]
    }) : this.port.onMessage("control", {
        type: "close",
        channel: this.internalPortMap[key]
    }), delete this.externalPortMap[key], delete this.internalPortMap[key], !0;
    return !1;
}, /**
 * Attempt to start the module once the remote freedom context
 * exists.
 * @method start
 * @private
 */
fdom.port.Module.prototype.start = function() {
    // Listen to all port messages.
    // Tell the local port to ask us for help.
    // Tell the remote location to delegate debugging.
    // Tell the container to instantiate the counterpart to this external view.
    return this.started || this.port ? !1 : void (this.controlChannel && (this.loadLinks(), 
    this.port = new fdom.link[this.config.portType](this.manifestId), this.port.on(this.emitMessage.bind(this)), 
    this.port.onMessage("control", {
        channel: "control",
        config: this.config
    }), this.port.onMessage("control", {
        type: "Redirect",
        request: "delegate",
        flow: "debug"
    }), this.port.onMessage("control", {
        type: "Redirect",
        request: "delegate",
        flow: "core"
    }), this.port.onMessage("control", {
        type: "Environment Configuration",
        request: "port",
        name: "ModInternal",
        service: "ModuleInternal",
        exposeManager: !0
    })));
}, /**
 * Stop the module when it is no longer needed, and tear-down state.
 * @method stop
 * @private
 */
fdom.port.Module.prototype.stop = function() {
    this.started && (this.port && (this.port.off(), this.port.onMessage("control", {
        type: "close",
        channel: "control"
    }), delete this.port), this.started = !1);
}, /**
 * Textual Description of the Port
 * @method toString
 * @return {String} The description of this Port.
 */
fdom.port.Module.prototype.toString = function() {
    return "[Module " + this.manifest.name + "]";
}, /**
 * Intercept messages as they arrive from the module,
 * mapping them between internal and external flow names.
 * @method emitMessage
 * @param {String} name The destination the module wants to send to.
 * @param {Object} message The message to send.
 * @private
 */
fdom.port.Module.prototype.emitMessage = function(name, message) {
    if (this.internalPortMap[name] === !1 && message.channel) return this.internalPortMap[name] = message.channel, 
    void this.emit("internalChannelReady");
    // Terminate debug redirection requested in start().
    if ("control" === name) if ("debug" === message.flow && message.message) fdom.debug.format(message.message.severity, this.toString(), message.message.msg); else if ("core" === message.flow && message.message) {
        if (!this.core) return void this.once("core", this.emitMessage.bind(this, name, message));
        "register" === message.message.type && (message.message.reply = this.port.onMessage.bind(this.port, "control"), 
        this.externalPortMap[message.message.id] = !1), this.core.onMessage(this, message.message);
    } else "ModInternal" !== message.name || this.modInternal ? "createLink" === message.type ? (// A design decision was that the default channel is
    // overridden when acting as a provider.
    this.manifest.provides && 0 === this.manifest.provides.indexOf(message.name) && (this.internalPortMap["default"] = message.channel), 
    this.internalPortMap[message.name] = message.channel, this.port.onMessage(message.channel, {
        type: "channel announcement",
        channel: message.reverse
    }), this.emit("internalChannelReady")) : "close" === message.type && this.deregisterFlow(message.channel, !0) : (this.modInternal = message.channel, 
    this.port.onMessage(this.modInternal, {
        type: "Initialization",
        id: this.manifestId,
        appId: this.id,
        manifest: this.manifest,
        lineage: this.lineage,
        channel: message.reverse
    }), this.emit("modInternal")); else "ModInternal" !== name || "ready" !== message.type || this.started ? "ModInternal" === name && "resolve" === message.type ? fdom.resources.get(this.manifestId, message.data).then(function(id, data) {
        this.port.onMessage(this.modInternal, {
            type: "resolve response",
            id: id,
            data: data
        });
    }.bind(this, message.id), function() {
        fdom.debug.warn("Error Resolving URL for Module.");
    }) : this.emit(this.externalPortMap[name], message) : (this.started = !0, this.emit("start"));
    return !1;
}, /**
 * Request the external routes used by this module.
 * @method loadLinks
 * @private
 */
fdom.port.Module.prototype.loadLinks = function() {
    var i, name, dep, channels = [ "default" ], finishLink = function(dep, provider) {
        dep.getInterface().provideAsynchronous(provider);
    };
    if (this.manifest.permissions) for (i = 0; i < this.manifest.permissions.length; i += 1) name = this.manifest.permissions[i], 
    channels.indexOf(name) < 0 && 0 === name.indexOf("core.") && (channels.push(name), 
    dep = new fdom.port.Provider(fdom.apis.get(name).definition), fdom.apis.getCore(name, this).then(finishLink.bind(this, dep)), 
    this.emit(this.controlChannel, {
        type: "Core Link to " + name,
        request: "link",
        name: name,
        to: dep
    }));
    // Note that messages can be synchronous, so some ports may already be bound.
    for (this.manifest.dependencies && fdom.util.eachProp(this.manifest.dependencies, function(desc, name) {
        channels.indexOf(name) < 0 && channels.push(name), fdom.resources.get(this.manifestId, desc.url).then(function(url) {
            this.config.policy.get(this.lineage, url).then(function(dep) {
                this.emit(this.controlChannel, {
                    type: "Link to " + name,
                    request: "link",
                    name: name,
                    overrideDest: name + "." + this.id,
                    to: dep
                });
            }.bind(this)), fdom.resources.getContents(url).then(this.updateEnv.bind(this, name));
        }.bind(this));
    }.bind(this)), i = 0; i < channels.length; i += 1) this.externalPortMap[channels[i]] = this.externalPortMap[channels[i]] || !1, 
    this.internalPortMap[channels[i]] = !1;
}, /**
 * Update the module environment with information about a dependent manifest.
 * @method updateEnv
 * @param {String} dep The dependency
 * @param {Object} manifest The manifest of the dependency
 */
fdom.port.Module.prototype.updateEnv = function(dep, manifest) {
    if (manifest) {
        this.modInternal || this.once("modInternal", this.updateEnv.bind(this, dep, manifest));
        // Decide if/what other properties should be exported.
        // Keep in sync with ModuleInternal.updateEnv
        var metadata = {
            name: manifest.name,
            icon: manifest.icon,
            description: manifest.description
        };
        this.port.onMessage(this.modInternal, {
            type: "manifest",
            name: dep,
            manifest: metadata
        });
    }
}, fdom.port.Module.prototype.serialize = function() {
    return JSON.serialize({
        manifestId: this.manifestId,
        externalPortMap: this.externalPortMap,
        internalPortMap: this.internalPortMap,
        manifest: this.manifest,
        controlChannel: this.controlChannel
    });
}, /*globals fdom:true, Promise */
"undefined" == typeof fdom && (fdom = {}), fdom.port = fdom.port || {}, /**
 * The internal logic for module setup, which makes sure the public
 * facing exports have appropriate properties, and load user scripts.
 * @class ModuleInternal
 * @extends Port
 * @param {Port} manager The manager in this module to use for routing setup.
 * @constructor
 */
fdom.port.ModuleInternal = function(manager) {
    this.config = {}, this.manager = manager, this.manifests = {}, this.id = "ModuleInternal-" + Math.random(), 
    this.pendingPorts = 0, this.requests = {}, this.defaultProvider = null, fdom.util.handleEvents(this);
}, /**
 * Message handler for this port.
 * This port only handles two messages:
 * The first is its setup from the manager, which it uses for configuration.
 * The second is from the module controller (fdom.port.Module), which provides
 * the manifest info for the module.
 * @method onMessage
 * @param {String} flow The detination of the message.
 * @param {Object} message The message.
 */
fdom.port.ModuleInternal.prototype.onMessage = function(flow, message) {
    if ("control" === flow) !this.controlChannel && message.channel && (this.controlChannel = message.channel, 
    fdom.util.mixin(this.config, message.config)); else if ("default" !== flow || this.appId) "default" === flow && this.requests[message.id] ? (this.requests[message.id](message.data), 
    delete this.requests[message.id]) : "default" === flow && "manifest" === message.type ? this.updateManifest(message.name, message.manifest) : "default" === flow && "Connection" === message.type && this.defaultProvider && this.manager.createLink(this.defaultProvider, message.channel, this.port, message.channel); else {
        // Recover the ID of this module:
        this.port = this.manager.hub.getDestination(message.channel), this.externalChannel = message.channel, 
        this.appId = message.appId, this.lineage = message.lineage;
        var objects = this.mapProxies(message.manifest);
        this.updateEnv(message.manifest), this.once("start", this.loadScripts.bind(this, message.id, message.manifest.app.script)), 
        this.loadLinks(objects);
    }
}, /**
 * Get a textual description of this Port.
 * @method toString
 * @return {String} a description of this Port.
 */
fdom.port.ModuleInternal.prototype.toString = function() {
    return "[Module Environment Helper]";
}, /**
 * Attach the manifest of the active module to the externally visible namespace.
 * @method updateEnv
 * @param {Object} manifest The manifest of the module.
 * @private
 */
fdom.port.ModuleInternal.prototype.updateEnv = function(manifest) {
    // Decide if/what other properties should be exported.
    // Keep in sync with Module.updateEnv
    var exp = this.config.global.freedom, metadata = {
        name: manifest.name,
        icon: manifest.icon,
        description: manifest.description
    };
    exp && (exp.manifest = metadata);
}, /**
 * Attach a proxy to the externally visible namespace.
 * @method attach
 * @param {String} name The name of the proxy.
 * @param {Proxy} proxy The proxy to attach.
 * @param {String} api The API the proxy implements.
 * @private.
 */
fdom.port.ModuleInternal.prototype.attach = function(name, proxy, api) {
    var exp = this.config.global.freedom;
    exp[name] || (exp[name] = proxy.getProxyInterface(), api && (exp[name].api = api), 
    this.manifests[name] && (exp[name].manifest = this.manifests[name])), this.pendingPorts -= 1, 
    0 === this.pendingPorts && this.emit("start");
}, /**
 * Request a set of proxy interfaces, and bind them to the external
 * namespace.
 * @method loadLinks
 * @param {Object[]} items Descriptors of the proxy ports to load.
 * @private
 */
fdom.port.ModuleInternal.prototype.loadLinks = function(items) {
    var i, proxy, provider, core, api;
    for (i = 0; i < items.length; i += 1) api = void 0, items[i].def ? (api = items[i].def.name, 
    items[i].provides ? (proxy = new fdom.port.Provider(items[i].def.definition), this.defaultProvider || (this.defaultProvider = proxy)) : proxy = new fdom.port.Proxy(fdom.proxy.ApiInterface.bind({}, items[i].def.definition))) : proxy = new fdom.port.Proxy(fdom.proxy.EventInterface), 
    proxy.once("start", this.attach.bind(this, items[i].name, proxy, api)), this.manager.createLink(this.port, items[i].name, proxy), 
    this.pendingPorts += 1;
    // Allow resolution of files by parent.
    fdom.resources.addResolver(function(manifest, url, resolve) {
        var id = Math.random();
        return this.requests[id] = resolve, this.emit(this.externalChannel, {
            type: "resolve",
            id: id,
            data: url
        }), !0;
    }.bind(this)), // Attach Core.
    this.pendingPorts += 1, core = fdom.apis.get("core").definition, provider = new fdom.port.Provider(core), 
    this.manager.getCore(function(CoreProv) {
        new CoreProv(this.manager).setId(this.lineage), provider.getInterface().provideAsynchronous(CoreProv);
    }.bind(this)), this.emit(this.controlChannel, {
        type: "Link to core",
        request: "link",
        name: "core",
        to: provider
    }), proxy = new fdom.port.Proxy(fdom.proxy.ApiInterface.bind({}, core)), this.manager.createLink(provider, "default", proxy), 
    this.attach("core", proxy), 0 === this.pendingPorts && this.emit("start");
}, /**
 * Update the exported manifest of a dependency.
 * Sets it internally if not yet exported, or attaches the property if it
 * is loaded after the module has started (we don't delay start to retreive
 * the manifest of the dependency.)
 * @method updateManifest
 * @param {String} name The Dependency
 * @param {Object} manifest The manifest of the dependency
 */
fdom.port.ModuleInternal.prototype.updateManifest = function(name, manifest) {
    var exp = this.config.global.freedom;
    exp[name] ? exp[name].manifest = manifest : this.manifests[name] = manifest;
}, /**
 * Determine which proxy ports should be exposed by this module.
 * @method mapProxies
 * @param {Object} manifest the module JSON manifest.
 * @return {Object[]} proxy descriptors defined in the manifest.
 */
fdom.port.ModuleInternal.prototype.mapProxies = function(manifest) {
    var i, obj, proxies = [], seen = [ "core" ];
    if (manifest.permissions) for (i = 0; i < manifest.permissions.length; i += 1) obj = {
        name: manifest.permissions[i],
        def: void 0
    }, obj.def = fdom.apis.get(obj.name), seen.indexOf(obj.name) < 0 && obj.def && (proxies.push(obj), 
    seen.push(obj.name));
    if (manifest.dependencies && fdom.util.eachProp(manifest.dependencies, function(desc, name) {
        obj = {
            name: name
        }, seen.indexOf(name) < 0 && (desc.api && (obj.def = fdom.apis.get(desc.api)), proxies.push(obj), 
        seen.push(name));
    }), manifest.provides) for (i = 0; i < manifest.provides.length; i += 1) obj = {
        name: manifest.provides[i],
        def: void 0,
        provides: !0
    }, obj.def = fdom.apis.get(obj.name), seen.indexOf(obj.name) < 0 && obj.def && (proxies.push(obj), 
    seen.push(obj.name));
    return proxies;
}, /**
 * Load external scripts into this namespace.
 * @method loadScripts
 * @param {String} from The URL of this modules's manifest.
 * @param {String[]} scripts The URLs of the scripts to load.
 */
fdom.port.ModuleInternal.prototype.loadScripts = function(from, scripts) {
    var i = 0, safe = !0, importer = function(script, resolve) {
        this.config.global.importScripts(script), resolve();
    }.bind(this), urls = [], outstanding = 0, load = function(url) {
        urls.push(url), outstanding -= 1, 0 === outstanding && (safe ? (this.emit(this.externalChannel, {
            type: "ready"
        }), this.tryLoad(importer, urls)) : this.tryLoad(importer, urls).then(function() {
            this.emit(this.externalChannel, {
                type: "ready"
            });
        }.bind(this)));
    }.bind(this);
    if (this.config.global.importScripts || (safe = !1, importer = function(url, resolve) {
        var script = this.config.global.document.createElement("script");
        script.src = url, script.addEventListener("load", resolve, !0), this.config.global.document.body.appendChild(script);
    }.bind(this)), "string" == typeof scripts) outstanding = 1, fdom.resources.get(from, scripts).then(load); else for (outstanding = scripts.length, 
    i = 0; i < scripts.length; i += 1) fdom.resources.get(from, scripts[i]).then(load);
}, /**
 * Attempt to load resolved scripts into the namespace.
 * @method tryLoad
 * @private
 * @param {Function} importer The actual import function
 * @param {String[]} urls The resoved URLs to load.
 * @returns {Promise} completion of load
 */
fdom.port.ModuleInternal.prototype.tryLoad = function(importer, urls) {
    var i, promises = [];
    try {
        for (i = 0; i < urls.length; i += 1) promises.push(new Promise(importer.bind({}, urls[i])));
    } catch (e) {
        fdom.debug.warn(e.stack), fdom.debug.error("Error loading " + urls[i], e), fdom.debug.error("If the stack trace is not useful, see https://github.com/UWNetworksLab/freedom/wiki/Debugging-Script-Parse-Errors");
    }
    return Promise.all(promises);
}, /*globals fdom:true */
"undefined" == typeof fdom && (fdom = {}), fdom.port = fdom.port || {}, /**
 * A freedom port for a user-accessable provider.
 * @class Provider
 * @extends Port
 * @uses handleEvents
 * @param {Object} def The interface of the provider.
 * @contructor
 */
fdom.port.Provider = function(def) {
    this.id = fdom.port.Proxy.nextId(), fdom.util.handleEvents(this), this.definition = def, 
    this.mode = fdom.port.Provider.mode.synchronous, this.channels = {}, this.iface = null, 
    this.providerCls = null, this.providerInstances = {};
}, /**
 * Provider modes of operation.
 * @property mode
 * @static
 * @type number
 */
fdom.port.Provider.mode = {
    synchronous: 0,
    asynchronous: 1,
    promises: 2
}, /**
 * Receive external messages for the provider.
 * @method onMessage
 * @param {String} source the source identifier of the message.
 * @param {Object} message The received message.
 */
fdom.port.Provider.prototype.onMessage = function(source, message) {
    if ("control" === source && message.reverse) this.channels[message.name] = message.channel, 
    this.emit(message.channel, {
        type: "channel announcement",
        channel: message.reverse
    }), this.emit("start"); else if ("control" === source && "setup" === message.type) this.controlChannel = message.channel; else if ("control" === source && "close" === message.type) message.channel === this.controlChannel && delete this.controlChannel, 
    this.close(); else {
        if (!this.channels[source] && message.channel) return this.channels[source] = message.channel, 
        void this.emit("start");
        if (!this.channels[source]) return void fdom.debug.warn("Message from unconfigured source: " + source);
        if ("close" === message.type && message.to) delete this.providerInstances[source][message.to]; else if (message.to && this.providerInstances[source] && this.providerInstances[source][message.to]) message.message.to = message.to, 
        this.providerInstances[source][message.to](message.message); else if (message.to && message.message && "construct" === message.message.type) {
            var args = fdom.proxy.portableToMessage(this.definition.constructor ? this.definition.constructor.value : [], message.message);
            this.providerInstances[source] || (this.providerInstances[source] = {}), this.providerInstances[source][message.to] = this.getProvider(source, message.to, args);
        } else fdom.debug.warn(this.toString() + " dropping message " + JSON.stringify(message));
    }
}, /**
 * Close / teardown the flow this provider terminates.
 * @method close
 */
fdom.port.Provider.prototype.close = function() {
    this.controlChannel && (this.emit(this.controlChannel, {
        type: "Provider Closing",
        request: "close"
    }), delete this.controlChannel), this.emit("close"), this.providerInstances = {}, 
    this.emitChannel = null;
}, /**
 * Get an interface to expose externally representing this port.
 * Providers are registered with the port using either
 * provideSynchronous or provideAsynchronous depending on the desired
 * return interface.
 * @method getInterface
 * @return {Object} The external interface of this Provider.
 */
fdom.port.Provider.prototype.getInterface = function() {
    return this.iface ? this.iface : (this.iface = {
        provideSynchronous: function(prov) {
            this.providerCls = prov, this.mode = fdom.port.Provider.mode.synchronous;
        }.bind(this),
        provideAsynchronous: function(prov) {
            this.providerCls = prov, this.mode = fdom.port.Provider.mode.asynchronous;
        }.bind(this),
        providePromises: function(prov) {
            this.providerCls = prov, this.mode = fdom.port.Provider.mode.promises;
        }.bind(this),
        close: function() {
            this.close();
        }.bind(this)
    }, fdom.util.eachProp(this.definition, function(prop, name) {
        switch (prop.type) {
          case "constant":
            Object.defineProperty(this.iface, name, {
                value: fdom.proxy.recursiveFreezeObject(prop.value),
                writable: !1
            });
        }
    }.bind(this)), this.iface);
}, /**
 * Create a function that can be used to get interfaces from this provider from
 * a user-visible point.
 * @method getProxyInterface
 */
fdom.port.Provider.prototype.getProxyInterface = function() {
    var func = function(p) {
        return p.getInterface();
    }.bind({}, this);
    return func.close = function(iface) {
        iface ? fdom.util.eachProp(this.ifaces, function(candidate, id) {
            return candidate === iface ? (this.teardown(id), this.emit(this.emitChannel, {
                type: "close",
                to: id
            }), !0) : void 0;
        }.bind(this)) : // Close the channel.
        this.close();
    }.bind(this), func.onClose = function(iface, handler) {
        // Add an on-channel-closed handler.
        return "function" == typeof iface && void 0 === handler ? void this.once("close", iface) : void fdom.util.eachProp(this.ifaces, function(candidate, id) {
            return candidate === iface ? (this.handlers[id] ? this.handlers[id].push(handler) : this.handlers[id] = [ handler ], 
            !0) : void 0;
        }.bind(this));
    }.bind(this), func;
}, /**
 * Get a new instance of the registered provider.
 * @method getProvider
 * @param {String} source The port this instance is interactign with.
 * @param {String} identifier the messagable address for this provider.
 * @param {Array} args Constructor arguments for the provider.
 * @return {Function} A function to send messages to the provider.
 */
fdom.port.Provider.prototype.getProvider = function(source, identifier, args) {
    if (!this.providerCls) return fdom.debug.warn("Cannot instantiate provider, since it is not provided"), 
    null;
    var dispatchEvent, BoundClass, instance, events = {};
    // this is all to say: new providerCls(dispatchEvent, args[0], args[1],...)
    return fdom.util.eachProp(this.definition, function(prop, name) {
        "event" === prop.type && (events[name] = prop);
    }), dispatchEvent = function(src, ev, id, name, value) {
        if (ev[name]) {
            var streams = fdom.proxy.messageToPortable(ev[name].value, value);
            this.emit(this.channels[src], {
                type: "message",
                to: id,
                message: {
                    name: name,
                    type: "event",
                    text: streams.text,
                    binary: streams.binary
                }
            });
        }
    }.bind(this, source, events, identifier), BoundClass = this.providerCls.bind.apply(this.providerCls, [ this.providerCls, dispatchEvent ].concat(args || [])), 
    instance = new BoundClass(), function(port, src, msg) {
        if ("method" === msg.action) {
            if ("function" != typeof this[msg.type]) return void fdom.debug.warn("Provider does not implement " + msg.type + "()!");
            var prop = port.definition[msg.type], args = fdom.proxy.portableToMessage(prop.value, msg), ret = function(src, msg, prop, resolve, reject) {
                var streams = fdom.proxy.messageToPortable(prop.ret, resolve);
                this.emit(this.channels[src], {
                    type: "method",
                    to: msg.to,
                    message: {
                        to: msg.to,
                        type: "method",
                        reqId: msg.reqId,
                        name: msg.type,
                        text: streams.text,
                        binary: streams.binary,
                        error: reject
                    }
                });
            }.bind(port, src, msg, prop);
            if (Array.isArray(args) || (args = [ args ]), port.mode === fdom.port.Provider.mode.synchronous) try {
                ret(this[msg.type].apply(this, args));
            } catch (e) {
                ret(void 0, e.message);
            } else port.mode === fdom.port.Provider.mode.asynchronous ? this[msg.type].apply(instance, args.concat(ret)) : port.mode === fdom.port.Provider.mode.promises && this[msg.type].apply(this, args).then(ret, ret.bind({}, void 0));
        }
    }.bind(instance, this, source);
}, /**
 * Get a textual description of this port.
 * @method toString
 * @return {String} the description of this port.
 */
fdom.port.Provider.prototype.toString = function() {
    return this.emitChannel ? "[Provider " + this.emitChannel + "]" : "[unbound Provider]";
}, /*globals fdom:true */
"undefined" == typeof fdom && (fdom = {}), fdom.port = fdom.port || {}, /**
 * A freedom port for a user-accessable proxy.
 * @class Proxy
 * @extends Port
 * @uses handleEvents
 * @param {Object} interfaceCls The proxy interface exposed by this proxy.
 * @constructor
 */
fdom.port.Proxy = function(interfaceCls) {
    this.id = fdom.port.Proxy.nextId(), this.interfaceCls = interfaceCls, fdom.util.handleEvents(this), 
    this.ifaces = {}, this.closeHandlers = {}, this.errorHandlers = {}, this.emits = {};
}, /**
 * Receive incoming messages for this proxy.
 * @method onMessage
 * @param {String} source The source of the message.
 * @param {Object} message The received message.
 */
fdom.port.Proxy.prototype.onMessage = function(source, message) {
    if ("control" === source && message.reverse) this.emitChannel = message.channel, 
    this.emit(this.emitChannel, {
        type: "channel announcement",
        channel: message.reverse
    }), this.emit("start"); else if ("control" === source && "setup" === message.type) this.controlChannel = message.channel; else if ("control" === source && "close" === message.type) delete this.controlChannel, 
    this.doClose(); else {
        if (!this.emitChannel && message.channel) return this.emitChannel = message.channel, 
        void this.emit("start");
        if ("close" === message.type && message.to) return void this.teardown(message.to);
        if ("error" === message.type) return void this.error(message.to, message.message);
        if (message.to) this.emits[message.to] ? this.emits[message.to]("message", message.message) : fdom.debug.warn("Could not deliver message, no such interface: " + message.to); else {
            {
                message.message;
            }
            fdom.util.eachProp(this.emits, function(iface) {
                iface("message", message.message);
            });
        }
    }
}, /**
 * Create a proxy.Interface associated with this proxy.
 * An interface is returned, which is supplied with important control of the
 * proxy via constructor arguments: (bound below in getInterfaceConstructor)
 * 
 * onMsg: function(binder) sets the function to call when messages for this
 *    interface arrive on the channel,
 * emit: function(msg) allows this interface to emit messages,
 * id: string is the Identifier for this interface.
 * @method getInterface
 */
fdom.port.Proxy.prototype.getInterface = function() {
    var Iface = this.getInterfaceConstructor(), args = Array.prototype.slice.call(arguments, 0);
    return new (Iface = Iface.bind.apply(Iface, [ Iface ].concat(args)))();
}, /**
 * Create a function that can be used to get interfaces from this proxy from
 * a user-visible point.
 * @method getProxyInterface
 */
fdom.port.Proxy.prototype.getProxyInterface = function() {
    var func = function(p) {
        var args = Array.prototype.slice.call(arguments, 1);
        return p.getInterface(args);
    }.bind({}, this);
    return func.close = function(iface) {
        iface ? fdom.util.eachProp(this.ifaces, function(candidate, id) {
            return candidate === iface ? (this.teardown(id), this.emit(this.emitChannel, {
                type: "close",
                to: id
            }), !0) : void 0;
        }.bind(this)) : // Close the channel.
        this.doClose();
    }.bind(this), func.onClose = function(iface, handler) {
        // Add an on-channel-closed handler.
        return "function" == typeof iface && void 0 === handler ? void this.once("close", iface) : void fdom.util.eachProp(this.ifaces, function(candidate, id) {
            return candidate === iface ? (this.closeHandlers[id] ? this.closeHandlers[id].push(handler) : this.closeHandlers[id] = [ handler ], 
            !0) : void 0;
        }.bind(this));
    }.bind(this), func.onError = function(iface, handler) {
        return "function" == typeof iface && void 0 === handler ? void this.on("error", iface) : void fdom.util.eachProp(this.ifaces, function(candidate, id) {
            return candidate === iface ? (this.errorHandlers[id] ? this.errorHandlers[id].push(handler) : this.errorHandlers[id] = [ handler ], 
            !0) : void 0;
        }.bind(this));
    }.bind(this), func;
}, /**
 * Provides a bound class for creating a proxy.Interface associated
 * with this proxy. This partial level of construction can be used
 * to allow the proxy to be used as a provider for another API.
 * @method getInterfaceConstructor
 * @private
 */
fdom.port.Proxy.prototype.getInterfaceConstructor = function() {
    var id = fdom.port.Proxy.nextId();
    return this.interfaceCls.bind({}, function(id, obj, binder) {
        this.ifaces[id] = obj, this.emits[id] = binder;
    }.bind(this, id), this.doEmit.bind(this, id));
}, /**
 * Emit a message on the channel once setup is complete.
 * @method doEmit
 * @private
 * @param {String} to The ID of the flow sending the message.
 * @param {Object} msg The message to emit
 * @param {Boolean} all Send message to all recipients.
 */
fdom.port.Proxy.prototype.doEmit = function(to, msg, all) {
    all && (to = !1), this.emitChannel ? this.emit(this.emitChannel, {
        to: to,
        type: "message",
        message: msg
    }) : this.once("start", this.doEmit.bind(this, to, msg));
}, /**
 * Teardown a single interface of this proxy.
 * @method teardown
 * @param {String} id The id of the interface to tear down.
 */
fdom.port.Proxy.prototype.teardown = function(id) {
    delete this.emits[id], this.closeHandlers[id] && fdom.util.eachProp(this.closeHandlers[id], function(prop) {
        prop();
    }), delete this.ifaces[id], delete this.closeHandlers[id], delete this.errorHandlers[id];
}, /**
 * Handle a message error reported to this proxy.
 * @method error
 * @param {String?} id The id of the interface where the error occured.
 * @param {Object} message The message which failed, if relevant.
 */
fdom.port.Proxy.prototype.error = function(id, message) {
    id && this.errorHandlers[id] ? fdom.util.eachProp(this.errorHandlers[id], function(prop) {
        prop(message);
    }) : id || this.emit("error", message);
}, /**
 * Close / teardown the flow this proxy terminates.
 * @method doClose
 */
fdom.port.Proxy.prototype.doClose = function() {
    this.controlChannel && this.emit(this.controlChannel, {
        type: "Channel Closing",
        request: "close"
    }), fdom.util.eachProp(this.emits, function(emit, id) {
        this.teardown(id);
    }.bind(this)), this.emit("close"), this.off(), this.emitChannel = null;
}, /**
 * Get the textual description of this port.
 * @method toString
 * @return The description of this port.
 */
fdom.port.Proxy.prototype.toString = function() {
    return this.emitChannel ? "[Proxy " + this.emitChannel + "]" : "[unbound Proxy]";
}, /**
 * Get the next ID for a proxy channel.
 * @method nextId
 * @static
 * @private
 */
fdom.port.Proxy.nextId = function() {
    return fdom.port.Proxy.id || (fdom.port.Proxy.id = 1), fdom.port.Proxy.id += 1;
}, /*globals fdom:true, XMLHttpRequest, Promise */
"undefined" == typeof fdom && (fdom = {});

/**
 * The Resource registry for FreeDOM.  Used to look up requested Resources,
 * and provide lookup and migration of resources.
 * @Class Resource
 * @constructor
 */
var Resource = function() {
    this.files = {}, this.resolvers = [ this.httpResolver, this.nullResolver ], this.contentRetrievers = {
        http: this.xhrRetriever,
        https: this.xhrRetriever,
        "chrome-extension": this.xhrRetriever,
        resource: this.xhrRetriever,
        chrome: this.xhrRetriever,
        manifest: this.manifestRetriever
    };
};

/**
 * Resolve a resurce URL requested from a module.
 * @method get
 * @param {String} manifest The canonical address of the module requesting.
 * @param {String} url The resource to get.
 * @returns {Promise} A promise for the resource address.
 */
Resource.prototype.get = function(manifest, url) {
    var key = JSON.stringify([ manifest, url ]);
    return new Promise(function(resolve, reject) {
        this.files[key] ? resolve(this.files[key]) : this.resolve(manifest, url).then(function(key, resolve, address) {
            this.files[key] = address, //fdom.debug.log('Resolved ' + key + ' to ' + address);
            resolve(address);
        }.bind(this, key, resolve), reject);
    }.bind(this));
}, /**
 * Get the contents of a resource.
 * @method getContents
 * @param {String} url The resource to read.
 * @returns {Promise} A promise for the resource contents.
 */
Resource.prototype.getContents = function(url) {
    return new Promise(function(resolve, reject) {
        var prop;
        if (!url) return fdom.debug.warn("Asked to get contents of undefined URL."), reject();
        for (prop in this.contentRetrievers) if (this.contentRetrievers.hasOwnProperty(prop) && 0 === url.indexOf(prop + "://")) return this.contentRetrievers[prop](url, resolve, reject);
        reject();
    }.bind(this));
}, /**
 * Resolve a resource using known resolvers. Unlike get, resolve does
 * not cache resolved resources.
 * @method resolve
 * @private
 * @param {String} manifest The module requesting the resource.
 * @param {String} url The resource to resolve;
 * @returns {Promise} A promise for the resource address.
 */
Resource.prototype.resolve = function(manifest, url) {
    return new Promise(function(resolve, reject) {
        var promises = [];
        //TODO this would be much cleaner if Promise.any existed
        return void 0 === url ? reject() : (fdom.util.eachReverse(this.resolvers, function(resolver) {
            promises.push(new Promise(resolver.bind({}, manifest, url)));
        }.bind(this)), void Promise.all(promises).then(function(values) {
            var i;
            for (i = 0; i < values.length; i += 1) if ("undefined" != typeof values[i] && values[i] !== !1) return void resolve(values[i]);
            reject("No resolvers to handle url: " + JSON.stringify([ manifest, url ]));
        }));
    }.bind(this));
}, /**
 * Register resolvers: code that knows how to get resources
 * needed by the runtime. A resolver will be called with four
 * arguments: the absolute manifest of the requester, the
 * resource being requested, and a resolve / reject pair to
 * fulfill a promise.
 * @method addResolver
 * @param {Function} resolver The resolver to add.
 */
Resource.prototype.addResolver = function(resolver) {
    this.resolvers.push(resolver);
}, /**
 * Register retrievers: code that knows how to load resources
 * needed by the runtime. A retriever will be called with a URL
 * to retrieve with a protocol that it is able to handle.
 * @method addRetriever
 * @param {String} proto The protocol to register for.
 * @param {Function} retriever The retriever to add.
 */
Resource.prototype.addRetriever = function(proto, retriever) {
    return this.contentRetrievers[proto] ? void fdom.debug.warn("Unwilling to override file retrieval for " + proto) : void (this.contentRetrievers[proto] = retriever);
}, /**
 * Determine if a URL is an absolute URL of a given Scheme.
 * @method hasScheme
 * @static
 * @private
 * @param {String[]} protocols Whitelisted protocols
 * @param {String} URL the URL to match.
 * @returns {Boolean} If the URL is an absolute example of one of the schemes.
 */
Resource.hasScheme = function(protocols, url) {
    var i;
    for (i = 0; i < protocols.length; i += 1) if (0 === url.indexOf(protocols[i] + "://")) return !0;
    return !1;
}, /**
 * Remove './' and '../' from a URL
 * Required because Chrome Apps for Mobile (cca) doesn't understand
 * XHR paths with these relative components in the URL.
 * @method removeRelativePath
 * @param {String} url The URL to modify
 * @returns {String} url without './' and '../'
 **/
Resource.removeRelativePath = function(url) {
    var stack, toRemove, result, idx = url.indexOf("://") + 3;
    //Weird bug where in cca, manifest starts with 'chrome:////'
    //This forces there to only be 2 slashes
    for (// Remove all instances of /./
    url = url.replace(/\/\.\//g, "/"); "/" === url.charAt(idx); ) url = url.slice(0, idx) + url.slice(idx + 1, url.length);
    for (// Advance to next /
    idx = url.indexOf("/", idx), // Removing ../
    stack = url.substr(idx + 1).split("/"); -1 !== stack.indexOf(".."); ) toRemove = stack.indexOf(".."), 
    0 === toRemove ? stack.shift() : stack.splice(toRemove - 1, 2);
    for (//Rebuild string
    result = url.substr(0, idx), idx = 0; idx < stack.length; idx += 1) result += "/" + stack[idx];
    return result;
}, /**
 * Resolve URLs which can be accessed using standard HTTP requests.
 * @method httpResolver
 * @private
 * @param {String} manifest The Manifest URL.
 * @param {String} url The URL to resolve.
 * @param {Function} resolve The promise to complete.
 * @param {Function} reject The promise to reject.
 * @returns {Boolean} True if the URL could be resolved.
 */
Resource.prototype.httpResolver = function(manifest, url, resolve) {
    var dirname, protocolIdx, pathIdx, path, base, protocols = [ "http", "https", "chrome", "chrome-extension", "resource" ];
    return Resource.hasScheme(protocols, url) ? (resolve(Resource.removeRelativePath(url)), 
    !0) : manifest && Resource.hasScheme(protocols, manifest) && -1 === url.indexOf("://") ? (dirname = manifest.substr(0, manifest.lastIndexOf("/")), 
    protocolIdx = dirname.indexOf("://"), pathIdx = protocolIdx + 3 + dirname.substr(protocolIdx + 3).indexOf("/"), 
    path = dirname.substr(pathIdx), base = dirname.substr(0, pathIdx), resolve(0 === url.indexOf("/") ? Resource.removeRelativePath(base + url) : Resource.removeRelativePath(base + path + "/" + url)), 
    !0) : (resolve(!1), !1);
}, /**
 * Resolve URLs which are self-describing.
 * @method nullResolver
 * @private
 * @param {String} manifest The Manifest URL.
 * @param {String} url The URL to resolve.
 * @param {Function} resolve The promise to complete.
 * @param {Function} reject The promise to reject.
 * @returns {Boolean} True if the URL could be resolved.
 */
Resource.prototype.nullResolver = function(manifest, url, resolve) {
    var protocols = [ "manifest", "data;base64" ];
    return Resource.hasScheme(protocols, url) ? (resolve(url), !0) : (resolve(!1), !1);
}, /**
 * Retrieve manifest content from a self-descriptive manifest url.
 * These urls are used to reference a manifest without requiring subsequent,
 * potentially non-CORS requests.
 * @method manifestRetriever
 * @private
 * @param {String} manifest The Manifest URL
 * @param {Function} resolve The promise to complete.
 * @param {Function} reject The promise to reject.
 */
Resource.prototype.manifestRetriever = function(manifest, resolve, reject) {
    var data;
    try {
        data = manifest.substr(11), JSON.parse(data), resolve(data);
    } catch (e) {
        fdom.debug.warn("Invalid manifest URL referenced:" + manifest), reject();
    }
}, /**
 * Retrieve resource contents using an XHR request.
 * @method xhrRetriever
 * @private
 * @param {String} url The resource to fetch.
 * @param {Function} resolve The promise to complete.
 * @param {Function} reject The promise to reject.
 */
Resource.prototype.xhrRetriever = function(url, resolve, reject) {
    var ref = new XMLHttpRequest();
    ref.addEventListener("readystatechange", function(resolve, reject) {
        4 === ref.readyState && ref.responseText ? resolve(ref.responseText) : 4 === ref.readyState && (fdom.debug.warn("Failed to load file " + url + ": " + ref.status), 
        reject(ref.status));
    }.bind({}, resolve, reject), !1), ref.overrideMimeType("application/json"), ref.open("GET", url, !0), 
    ref.send();
}, /**
 * Defines fdom.resources as a singleton registry for file management.
 */
fdom.resources = new Resource(), /*globals fdom:true, crypto, freedomcfg, WebKitBlobBuilder, Blob, URL */
/*globals webkitURL, Uint8Array */
"undefined" == typeof fdom && (fdom = {}), /**
 * Utility method used within the freedom Library.
 * @class util
 * @static
 */
fdom.util = {}, /**
 * Helper function for iterating over an array backwards. If the func
 * returns a true value, it will break out of the loop.
 * @method eachReverse
 * @static
 */
fdom.util.eachReverse = function(ary, func) {
    if (ary) {
        var i;
        for (i = ary.length - 1; i > -1 && (!ary[i] || !func(ary[i], i, ary)); i -= 1) ;
    }
}, /**
 * @method hasProp
 * @static
 */
fdom.util.hasProp = function(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}, /**
 * Cycles over properties in an object and calls a function for each
 * property value. If the function returns a truthy value, then the
 * iteration is stopped.
 * @method eachProp
 * @static
 */
fdom.util.eachProp = function(obj, func) {
    var prop;
    for (prop in obj) if (obj.hasOwnProperty(prop) && func(obj[prop], prop)) break;
}, /**
 * Simple function to mix in properties from source into target,
 * but only if target does not already have a property of the same name.
 * This is not robust in IE for transferring methods that match
 * Object.prototype names, but the uses of mixin here seem unlikely to
 * trigger a problem related to that.
 * @method mixin
 * @static
 */
fdom.util.mixin = function(target, source, force) {
    return source && fdom.util.eachProp(source, function(value, prop) {
        (force || !fdom.util.hasProp(target, prop)) && (target[prop] = value);
    }), target;
}, /**
 * Get a unique ID.
 * @method getId
 * @static
 */
fdom.util.getId = function() {
    var buffer, guid = "guid", domain = 12;
    if ("object" == typeof crypto) buffer = new Uint8Array(domain), crypto.getRandomValues(buffer), 
    fdom.util.eachReverse(buffer, function(n) {
        guid += "-" + n;
    }); else for (;domain > 0; ) guid += "-" + Math.ceil(255 * Math.random()), domain -= 1;
    return guid;
}, /**
 * Add 'on' and 'emit' methods to an object, which act as a light weight
 * event handling structure.
 * @class handleEvents
 * @static
 */
fdom.util.handleEvents = function(obj) {
    var filter, push, eventState = {
        multiple: {},
        maybemultiple: [],
        single: {},
        maybesingle: []
    };
    /**
   * Filter a list based on a predicate. The list is filtered in place, with
   * selected items removed and returned by the function.
   * @method
   * @param {Array} list The list to filter
   * @param {Function} predicate The method to run on each item.
   * @returns {Array} Selected items
   */
    filter = function(list, predicate) {
        var i, ret = [];
        if (!list || !list.length) return [];
        for (i = list.length - 1; i >= 0; i -= 1) predicate(list[i]) && ret.push(list.splice(i, 1));
        return ret;
    }, /**
   * Enqueue a handler for a specific type.
   * @method
   * @param {String} to The queue ('single' or 'multiple') to queue on.
   * @param {String} type The type of event to wait for.
   * @param {Function} handler The handler to enqueue.
   */
    push = function(to, type, handler) {
        "function" == typeof type ? this["maybe" + to].push([ type, handler ]) : this[to][type] ? this[to][type].push(handler) : this[to][type] = [ handler ];
    }, /**
   * Register a method to be executed when an event of a specific type occurs.
   * @method on
   * @param {String|Function} type The type of event to register against.
   * @param {Function} handler The handler to run when the event occurs.
   */
    obj.on = push.bind(eventState, "multiple"), /**
   * Register a method to be execute the next time an event occurs.
   * @method once
   * @param {String|Function} type The type of event to wait for.
   * @param {Function} handler The handler to run the next time a matching event
   *     is raised.
   */
    obj.once = push.bind(eventState, "single"), /**
   * Emit an event on this object.
   * @method emit
   * @param {String} type The type of event to raise.
   * @param {Object} data The payload of the event.
   */
    obj.emit = function(type, data) {
        var i, queue;
        if (this.multiple[type]) for (i = 0; i < this.multiple[type].length; i += 1) if (this.multiple[type][i](data) === !1) return;
        if (this.single[type]) for (queue = this.single[type], this.single[type] = [], i = 0; i < queue.length; i += 1) queue[i](data);
        for (i = 0; i < this.maybemultiple.length; i += 1) this.maybemultiple[i][0](type, data) && this.maybemultiple[i][1](data);
        for (i = this.maybesingle.length - 1; i >= 0; i -= 1) this.maybesingle[i][0](type, data) && (queue = this.maybesingle.splice(i, 1), 
        queue[0][1](data));
    }.bind(eventState), /**
   * Remove an event handler
   * @method off
   * @param {String} type The type of event to remove.
   * @param {Function?} handler The handler to remove.
   */
    obj.off = function(type, handler) {
        return type ? ("function" == typeof type && (filter(this.maybesingle, function(item) {
            return item[0] === type && (!handler || item[1] === handler);
        }), filter(this.maybemultiple, function(item) {
            return item[0] === type && (!handler || item[1] === handler);
        })), void (handler ? (filter(this.multiple[type], function(item) {
            return item === handler;
        }), filter(this.single[type], function(item) {
            return item === handler;
        })) : (delete this.multiple[type], delete this.single[type]))) : (this.multiple = {}, 
        this.maybemultiple = [], this.single = {}, void (this.maybesingle = []));
    }.bind(eventState);
}, /**
 * When run without a window, or specifically requested.
 * Note: Declaration can be redefined in forceModuleContext below.
 * @method isModuleContext
 * @for util
 * @static
 */
/*!@preserve StartModuleContextDeclaration*/
fdom.util.isModuleContext = function() {
    return "undefined" == typeof document;
}, /**
 * Provide a version of src where the 'isModuleContext' function will return
 * true. Used for creating module contexts which may not be able to determine
 * that they need to start up in that mode by themselves.
 * @method forceModuleContext
 * @static
 */
fdom.util.forceModuleContext = function(src) {
    var source, blob, definition = "function () { return true; }", idx = src.indexOf("StartModuleContextDeclaration"), funcidx = src.indexOf("function", idx);
    return -1 === idx || -1 === funcidx ? void fdom.debug.error("Unable to force mode, source is in unexpected condition.") : (source = src.substr(0, funcidx) + definition + " || " + src.substr(funcidx), 
    blob = fdom.util.getBlob(source, "text/javascript"), fdom.util.getURL(blob));
}, /**
 * Get a Blob object of a string.
 * Polyfills implementations which don't have a current Blob constructor, like
 * phantomjs.
 * @method getBlob
 * @static
 */
fdom.util.getBlob = function(data, type) {
    if ("function" != typeof Blob && "undefined" != typeof WebKitBlobBuilder) {
        var builder = new WebKitBlobBuilder();
        return builder.append(data), builder.getBlob(type);
    }
    return new Blob([ data ], {
        type: type
    });
}, /**
 * Get a URL of a blob object for inclusion in a frame.
 * Polyfills implementations which don't have a current URL object, like
 * phantomjs.
 * @method getURL
 * @static
 */
fdom.util.getURL = function(blob) {
    return "object" != typeof URL && "undefined" != typeof webkitURL ? webkitURL.createObjectURL(blob) : URL.createObjectURL(blob);
}, /**
 * When running in a priviledged context, honor a global
 * 'freedomcfg' function to allow registration of additional API providers.
 * @method advertise
 * @param {Boolean} force Advertise even if not in a priviledged context.
 * @static
 */
fdom.util.advertise = function(force) {
    // TODO: Determine a better mechanism than this whitelisting.
    "undefined" != typeof location ? "chrome-extension:" !== location.protocol && "chrome:" !== location.protocol && "resource:" !== location.protocol && !force || "undefined" == typeof freedomcfg || freedomcfg(fdom.apis.register.bind(fdom.apis)) : force && "undefined" != typeof freedomcfg && freedomcfg(fdom.apis.register.bind(fdom.apis));
}, /**
 * Find all scripts on the given page.
 * @method scripts
 * @static
 */
fdom.util.scripts = function(global) {
    return global.document.getElementsByTagName("script");
}, /*globals fdom:true */
"undefined" == typeof fdom && (fdom = {}), fdom.link = fdom.link || {}, /**
 * A port providing message transport between two freedom contexts in the same namespace.
 * Note that using a direct link does not provide the isolation that freedom.js
 * encourages. To that end it should be limited to a method for testing and not
 * used in production without some serious though about the implications of that decision.
 * @class Link.Direct
 * @extends Port
 * @uses handleEvents
 * @constructor
 */
fdom.link.Direct = function() {
    fdom.Link.call(this);
}, /**
 * Start this port.
 * @method start
 * @private
 */
fdom.link.Direct.prototype.start = function() {
    if (this.config.moduleContext) this.config.global.directLink.other = this, this.other = this.config.global.directLink, 
    this.other.emit("started"); else {
        this.config.global.directLink = this;
        // Keep fdom.debug connected to parent hub.
        var debug = fdom.debug, child = fdom.setup(this.config.global, void 0, {
            isModule: !0,
            portType: "Direct"
        });
        fdom.debug = debug, this.config.global.freedom = child;
    }
}, /**
 * Stop this port by deleting the frame.
 * @method stop
 * @private
 */
fdom.link.Direct.prototype.stop = function() {
    this === this.config.global.directLink && delete this.config.global.directLink, 
    delete this.other;
}, /**
 * Get the textual description of this port.
 * @method toString
 * @return {String} the description of this port.
 */
fdom.link.Direct.prototype.toString = function() {
    return "[Direct" + this.id + "]";
}, /**
 * Receive messages from the hub to this port.
 * Received messages will be emitted from the other side of the port.
 * @method deliverMessage
 * @param {String} flow the channel/flow of the message.
 * @param {Object} message The Message.
 */
fdom.link.Direct.prototype.deliverMessage = function(flow, message) {
    this.other ? (/* //- For Debugging Purposes -
    if (this === this.config.global.directLink) {
      console.warn('->[' + flow + '] ' + JSON.stringify(message));
    } else {
      console.warn('<-[' + flow + '] ' + JSON.stringify(message));
    }
    */
    "control" === flow && (flow = this.other.controlChannel), setTimeout(this.other.emit.bind(this.other, flow, message), 0)) : this.once("started", this.onMessage.bind(this, flow, message));
}, /*globals fdom:true */
"undefined" == typeof fdom && (fdom = {}), fdom.link = fdom.link || {}, /**
 * A port providing message transport between two freedom contexts via iFrames.
 * @class link.Frame
 * @extends Link
 * @uses handleEvents
 * @constructor
 */
fdom.link.Frame = function() {
    fdom.Link.call(this);
}, /**
 * Start this port by listening or creating a frame.
 * @method start
 * @private
 */
fdom.link.Frame.prototype.start = function() {
    this.config.moduleContext ? (this.config.global.DEBUG = !0, this.setupListener(), 
    this.src = "in") : (this.setupFrame(), this.src = "out");
}, /**
 * Stop this port by deleting the frame.
 * @method stop
 * @private
 */
fdom.link.Frame.prototype.stop = function() {}, /**
 * Get the textual description of this port.
 * @method toString
 * @return {String} the description of this port.
 */
fdom.link.Frame.prototype.toString = function() {
    return "[Frame" + this.id + "]";
}, /**
 * Set up a global listener to handle incoming messages to this
 * freedom.js context.
 * @method setupListener
 */
fdom.link.Frame.prototype.setupListener = function() {
    var onMsg = function(msg) {
        "in" !== msg.data.src && this.emitMessage(msg.data.flow, msg.data.message);
    }.bind(this);
    this.obj = this.config.global, this.obj.addEventListener("message", onMsg, !0), 
    this.stop = function() {
        this.obj.removeEventListener("message", onMsg, !0), delete this.obj;
    }, this.emit("started");
}, /**
 * Set up an iFrame with an isolated freedom.js context inside.
 * @method setupFrame
 */
fdom.link.Frame.prototype.setupFrame = function() {
    var frame, onMsg;
    frame = this.makeFrame(this.config.src, this.config.inject), document.body || document.appendChild(document.createElement("body")), 
    document.body.appendChild(frame), onMsg = function(frame, msg) {
        this.obj || (this.obj = frame, this.emit("started")), "out" !== msg.data.src && this.emitMessage(msg.data.flow, msg.data.message);
    }.bind(this, frame.contentWindow), frame.contentWindow.addEventListener("message", onMsg, !0), 
    this.stop = function() {
        frame.contentWindow.removeEventListener("message", onMsg, !0), this.obj && delete this.obj, 
        frame.src = "about:blank", document.body.removeChild(frame);
    };
}, /**
 * Make frames to replicate freedom isolation without web-workers.
 * iFrame isolation is non-standardized, and access to the DOM within frames
 * means that they are insecure. However, debugging of webworkers is
 * painful enough that this mode of execution can be valuable for debugging.
 * @method makeFrame
 */
fdom.link.Frame.prototype.makeFrame = function(src, inject) {
    var loader, blob, frame = document.createElement("iframe"), extra = "";
    // TODO(willscott): add sandboxing protection.
    // TODO(willscott): survive name mangling.
    return src = src.replace('portType: "Worker"', 'portType: "Frame"'), inject && (extra = '<script src="' + inject + '" onerror="throw new Error(\'Injection of ' + inject + " Failed!');\"></script>"), 
    loader = "<html>" + extra + '<script src="' + fdom.util.forceModuleContext(src) + '"></script></html>', 
    blob = fdom.util.getBlob(loader, "text/html"), frame.src = fdom.util.getURL(blob), 
    frame;
}, /**
 * Receive messages from the hub to this port.
 * Received messages will be emitted from the other side of the port.
 * @method deliverMessage
 * @param {String} flow the channel/flow of the message.
 * @param {Object} message The Message.
 */
fdom.link.Frame.prototype.deliverMessage = function(flow, message) {
    this.obj ? //fdom.debug.log('message sent to worker: ', flow, message);
    this.obj.postMessage({
        src: this.src,
        flow: flow,
        message: message
    }, "*") : this.once("started", this.onMessage.bind(this, flow, message));
}, /*globals fdom:true, Worker */
"undefined" == typeof fdom && (fdom = {}), fdom.link = fdom.link || {}, /**
 * A port providing message transport between two freedom contexts via Worker.
 * @class Worker
 * @extends Port
 * @uses handleEvents
 * @constructor
 */
fdom.link.Worker = function(id) {
    id && (this.manifest = id.substr(id.lastIndexOf("/") + 1)), fdom.Link.call(this);
}, /**
 * Start this port by listening or creating a worker.
 * @method start
 * @private
 */
fdom.link.Worker.prototype.start = function() {
    this.config.moduleContext ? this.setupListener() : this.setupWorker();
}, /**
 * Stop this port by destroying the worker.
 * @method stop
 * @private
 */
fdom.link.Worker.prototype.stop = function() {}, /**
 * Get the textual description of this port.
 * @method toString
 * @return {String} the description of this port.
 */
fdom.link.Worker.prototype.toString = function() {
    return "[Worker" + this.id + "]";
}, /**
 * Set up a global listener to handle incoming messages to this
 * freedom.js context.
 * @method setupListener
 */
fdom.link.Worker.prototype.setupListener = function() {
    var onMsg = function(msg) {
        this.emitMessage(msg.data.flow, msg.data.message);
    }.bind(this);
    this.obj = this.config.global, this.obj.addEventListener("message", onMsg, !0), 
    this.stop = function() {
        this.obj.removeEventListener("message", onMsg, !0), delete this.obj;
    }, this.emit("started");
}, /**
 * Set up a worker with an isolated freedom.js context inside.
 * @method setupWorker
 */
fdom.link.Worker.prototype.setupWorker = function() {
    var worker, blob;
    typeof window.Blob != typeof Function ? worker = new Worker(this.config.source) : (blob = new window.Blob([ this.config.src ], {
        type: "text/javascript"
    }), worker = new Worker(window.URL.createObjectURL(blob) + "#" + this.manifest)), 
    worker.addEventListener("error", function(err) {
        fdom.debug.error(err, this.toString());
    }, !0), worker.addEventListener("message", function(worker, msg) {
        this.obj || (this.obj = worker, this.emit("started")), this.emitMessage(msg.data.flow, msg.data.message);
    }.bind(this, worker), !0), this.stop = function() {
        worker.stop(), this.obj && delete this.obj;
    };
}, /**
 * Receive messages from the hub to this port.
 * Received messages will be emitted from the other side of the port.
 * @method deliverMessage
 * @param {String} flow the channel/flow of the message.
 * @param {Object} message The Message.
 */
fdom.link.Worker.prototype.deliverMessage = function(flow, message) {
    "control" === flow && "close" === message.type && "control" === message.channel ? this.stop() : this.obj ? //fdom.debug.log('message sent to worker: ', flow, message);
    this.obj.postMessage({
        flow: flow,
        message: message
    }) : this.once("started", this.onMessage.bind(this, flow, message));
}, /*globals fdom:true, Blob, ArrayBuffer, DataView, Promise */
"undefined" == typeof fdom && (fdom = {}), fdom.proxy = fdom.proxy || {}, fdom.proxy.ApiInterface = function(def, onMsg, emit) {
    var inflight = {}, events = null, emitter = null, reqId = 0, args = arguments;
    fdom.util.eachProp(def, function(prop, name) {
        switch (prop.type) {
          case "method":
            this[name] = function() {
                // Note: inflight should be registered before message is passed
                // in order to prepare for synchronous in-window pipes.
                var thisReq = reqId, promise = new Promise(function(resolve, reject) {
                    inflight[thisReq] = {
                        resolve: resolve,
                        reject: reject,
                        template: prop.ret
                    };
                }), streams = fdom.proxy.messageToPortable(prop.value, arguments);
                return reqId += 1, emit({
                    action: "method",
                    type: name,
                    reqId: thisReq,
                    text: streams.text,
                    binary: streams.binary
                }), promise;
            };
            break;

          case "event":
            events || (fdom.util.handleEvents(this), emitter = this.emit, delete this.emit, 
            events = {}), events[name] = prop;
            break;

          case "constant":
            Object.defineProperty(this, name, {
                value: fdom.proxy.recursiveFreezeObject(prop.value),
                writable: !1
            });
        }
    }.bind(this)), onMsg(this, function(type, msg) {
        if ("close" === type) return this.off(), void delete this.inflight;
        if (msg) if ("method" === msg.type) if (inflight[msg.reqId]) {
            var resolver = inflight[msg.reqId], template = resolver.template;
            delete inflight[msg.reqId], msg.error ? resolver.reject(msg.error) : resolver.resolve(fdom.proxy.portableToMessage(template, msg));
        } else fdom.debug.warn("Dropped response message with id " + msg.reqId); else "event" === msg.type && events[msg.name] && emitter(msg.name, fdom.proxy.portableToMessage(events[msg.name].value, msg));
    }.bind(this)), args = fdom.proxy.messageToPortable(def.constructor ? def.constructor.value : [], Array.prototype.slice.call(args, 3)), 
    emit({
        type: "construct",
        text: args.text,
        binary: args.binary
    });
}, /**
 * Convert a structured data structure into a message stream conforming to
 * a template and an array of binary data elements.
 * @static
 * @method messageToPortable
 * @param {Object} template The template to conform to
 * @param {Object} value The instance of the data structure to confrom
 * @return {{text: Object, binary: Array}} Separated data streams.
 */
fdom.proxy.messageToPortable = function(template, value) {
    var externals = [], message = fdom.proxy.conform(template, value, externals, !0);
    return {
        text: message,
        binary: externals
    };
}, /**
 * Convert Structured Data streams into a data structure conforming to a
 * template.
 * @static
 * @method portableToMessage
 * @param {Object} template The template to conform to
 * @param {{text: Object, binary: Array}} streams The streams to conform
 * @return {Object} The data structure matching the template.
 */
fdom.proxy.portableToMessage = function(template, streams) {
    return fdom.proxy.conform(template, streams.text, streams.binary, !1);
}, /**
 * Force a collection of values to look like the types and length of an API
 * template.
 * @static
 * @method conform
 * @param {Object} template The template to conform to
 * @param {Object} from The value to conform
 * @param {Array} externals Listing of binary elements in the template
 * @param {Boolean} Whether to to separate or combine streams.
 */
fdom.proxy.conform = function(template, from, externals, separate) {
    /* jshint -W086 */
    if ("function" == typeof from) //from = undefined;
    //throw "Trying to conform a function";
    return void 0;
    if ("undefined" == typeof from || void 0 === template) return void 0;
    if (null === from) return null;
    switch (template) {
      case "string":
        return String("") + from;

      case "number":
        return Number(1) * from;

      case "boolean":
        return Boolean(from === !0);

      case "object":
        // TODO(willscott): Allow removal if sandboxing enforces this.
        // TODO(willscott): Allow removal if sandboxing enforces this.
        return "undefined" == typeof from ? void 0 : JSON.parse(JSON.stringify(from));

      case "blob":
        return separate ? from instanceof Blob ? (externals.push(from), externals.length - 1) : (fdom.debug.warn("conform expecting Blob, sees " + typeof from), 
        externals.push(new Blob([])), externals.length - 1) : externals[from];

      case "buffer":
        return separate ? (externals.push(fdom.proxy.makeArrayBuffer(from)), externals.length - 1) : fdom.proxy.makeArrayBuffer(externals[from]);

      case "proxy":
        return from;
    }
    var val, i;
    if (Array.isArray(template) && void 0 !== from) {
        if (val = [], i = 0, 2 === template.length && "array" === template[0]) //console.log("template is array, value is " + JSON.stringify(value));
        for (i = 0; i < from.length; i += 1) val.push(fdom.proxy.conform(template[1], from[i], externals, separate)); else for (i = 0; i < template.length; i += 1) val.push(void 0 !== from[i] ? fdom.proxy.conform(template[i], from[i], externals, separate) : void 0);
        return val;
    }
    return "object" == typeof template && void 0 !== from ? (val = {}, fdom.util.eachProp(template, function(prop, name) {
        void 0 !== from[name] && (val[name] = fdom.proxy.conform(prop, from[name], externals, separate));
    }), val) : void fdom.debug.warn("Unknown template type: " + template);
}, /**
 * Make a thing into an Array Buffer
 * @static
 * @method makeArrayBuffer
 * @param {Object} thing
 * @return {ArrayBuffer} An Array Buffer
 */
fdom.proxy.makeArrayBuffer = function(thing) {
    return thing ? thing instanceof ArrayBuffer ? thing : "ArrayBuffer" === thing.constructor.name && "undefined" == typeof thing.prototype ? new DataView(thing).buffer : (fdom.debug.warn("expecting ArrayBuffer, but saw " + typeof thing + ": " + JSON.stringify(thing)), 
    new ArrayBuffer(0)) : new ArrayBuffer(0);
}, /**
 * Recursively traverse a [nested] object and freeze its keys from being
 * writable. Note, the result can have new keys added to it, but existing ones
 * cannot be  overwritten. Doesn't do anything for arrays or other collections.
 *
 * @method recursiveFreezeObject
 * @static
 * @param {Object} obj - object to be frozen
 * @return {Object} obj
 **/
fdom.proxy.recursiveFreezeObject = function(obj) {
    var k, ret = {};
    if ("object" != typeof obj) return obj;
    for (k in obj) obj.hasOwnProperty(k) && Object.defineProperty(ret, k, {
        value: fdom.proxy.recursiveFreezeObject(obj[k]),
        writable: !1,
        enumerable: !0
    });
    return ret;
}, /*globals fdom:true */
"undefined" == typeof fdom && (fdom = {}), fdom.proxy = fdom.proxy || {}, fdom.proxy.EventInterface = function(onMsg, emit) {
    fdom.util.handleEvents(this), onMsg(this, function(emit, type, msg) {
        emit(msg.type, msg.message);
    }.bind(this, this.emit)), this.emit = function(emitter, type, msg) {
        emitter({
            type: type,
            message: msg
        }, !0);
    }.bind({}, emit);
}, /*globals fdom:true */
fdom.apis.set("core", {
    createChannel: {
        type: "method",
        value: [],
        ret: {
            channel: "proxy",
            identifier: "string"
        }
    },
    bindChannel: {
        type: "method",
        value: [ "string" ],
        ret: "proxy"
    },
    getId: {
        type: "method",
        value: [],
        ret: [ "array", "string" ]
    }
}), fdom.apis.set("core.view", {
    open: {
        type: "method",
        value: [ "string", {
            file: "string",
            code: "string"
        } ]
    },
    show: {
        type: "method",
        value: []
    },
    close: {
        type: "method",
        value: []
    },
    postMessage: {
        type: "method",
        value: [ "object" ]
    },
    message: {
        type: "event",
        value: "object"
    },
    onClose: {
        type: "event",
        value: []
    }
}), fdom.apis.set("core.storage", {
    keys: {
        type: "method",
        value: [],
        ret: [ "array", "string" ]
    },
    get: {
        type: "method",
        value: [ "string" ],
        ret: "string"
    },
    set: {
        type: "method",
        value: [ "string", "string" ],
        ret: "string"
    },
    remove: {
        type: "method",
        value: [ "string" ],
        ret: "string"
    },
    clear: {
        type: "method",
        value: []
    }
}), // A TCP Socket.
fdom.apis.set("core.tcpsocket", {
    // Sockets may be constructed bound to a pre-existing id, as in the case of
    // interacting with a socket accpeted by a server.  If no Id is specified, a
    // new socket will be created, which can be either connect'ed or listen'ed.
    constructor: {
        value: [ "number" ]
    },
    // Get info about a socket.  Tells you whether the socket is active and
    // available host information.
    getInfo: {
        type: "method",
        value: [],
        ret: {
            connected: "boolean",
            localAddress: "string",
            localPort: "number",
            peerAddress: "string",
            peerPort: "number"
        }
    },
    // Close a socket. Will Fail if the socket is not connected or already
    // closed.
    close: {
        type: "method",
        value: [],
        err: {
            errcode: "string",
            message: "string"
        }
    },
    // Receive notification that the socket has disconnected.
    onDisconnect: {
        type: "event",
        value: {
            errcode: "string",
            message: "string"
        }
    },
    // Connect to a host and port.
    // Fails with an error if connection fails.
    connect: {
        type: "method",
        value: [ "string", "number" ],
        err: {
            errcode: "string",
            message: "string"
        }
    },
    // Write buffer data to a socket.
    // Fails with an error if write fails.
    write: {
        type: "method",
        value: [ "buffer" ],
        err: {
            errcode: "string",
            message: "string"
        }
    },
    // Receive data on a connected socket.
    onData: {
        type: "event",
        value: {
            data: "buffer"
        }
    },
    // Listen as a server at a specified host and port.
    // After calling listen the client should listen for 'onConnection' events.
    // Fails with an error if errors occur while binding or listening.
    listen: {
        type: "method",
        value: [ "string", "number" ],
        err: {
            errcode: "string",
            message: "string"
        }
    },
    // Receive a connection.
    // The socket parameter may be used to construct a new socket.
    // Host and port information provide information about the remote peer.
    onConnection: {
        type: "event",
        value: {
            socket: "number",
            host: "string",
            port: "number"
        }
    }
}), // A UDP socket.
// Generally, to use you just need to call bind() at which point onData
// events will start to flow. Note that bind() should only be called
// once per instance.
fdom.apis.set("core.udpsocket", {
    // Creates a socket, binds it to an interface and port and listens for
    // messages, dispatching each message as on onData event.
    // Returns an integer, with zero meaning success and any other value
    // being implementation-dependant.
    bind: {
        type: "method",
        value: [ // Interface (address) on which to bind.
        "string", // Port on which to bind.
        "number" ],
        ret: "number"
    },
    // Retrieves the state of the socket.
    // Returns an object with the following properties:
    //  - localAddress: the socket's local address, if bound
    //  - localPort: the socket's local port, if bound
    getInfo: {
        type: "method",
        value: [],
        ret: {
            localAddress: "string",
            localPort: "number"
        }
    },
    // Sends data to a server.
    // The socket must be bound.
    // Returns an integer indicating the number of bytes written, with no
    // guarantee that the remote side received the data.
    sendTo: {
        type: "method",
        value: [ // Data to send.
        "buffer", // Destination address.
        "string", // Destination port.
        "number" ],
        ret: "number"
    },
    // Releases all resources associated with this socket.
    // No-op if the socket is not bound.
    destroy: {
        type: "method",
        value: []
    },
    // Called once for each message received on this socket, once it's
    // been successfully bound.
    onData: {
        type: "event",
        value: {
            // Zero means success, any other value is implementation-dependent.
            resultCode: "number",
            // Address from which data was received.
            address: "string",
            // Port from which data was received.
            port: "number",
            // Data received.
            data: "buffer"
        }
    }
}), fdom.apis.set("core.runtime", {
    createApp: {
        type: "method",
        value: [ "string", "proxy" ]
    },
    resolve: {
        type: "method",
        value: [ "string", "string" ]
    },
    needFile: {
        type: "event",
        value: [ "string", "string" ]
    }
}), fdom.apis.set("core.echo", {
    setup: {
        type: "method",
        value: [ "string" ]
    },
    send: {
        type: "method",
        value: [ "string" ]
    },
    message: {
        type: "event",
        value: "string"
    }
}), fdom.apis.set("core.peerconnection", {
    // Setup the link to the peer and options for this peer connection.
    setup: {
        type: "method",
        value: [ // The freedom.js channel identifier used to setup a signalling chanel.
        "string", // The peerName, used debugging and console messages.
        "string", // The list of STUN servers to use.
        // The format of a single entry is stun:HOST:PORT, where HOST
        // and PORT are a stun server hostname and port, respectively.
        [ "array", "string" ], // Whether to immediately initiate a connection before fulfilling return
        // promise.
        "boolean" ]
    },
    // Send a message to the peer.
    send: {
        type: "method",
        value: [ {
            // Data channel id. If provided, will be used as the channel label.
            // The behavior is undefined if the channel label doesn't exist.
            channelLabel: "string",
            // One of the bellow should be defined; this is the data to send.
            text: "string",
            binary: "blob",
            buffer: "buffer"
        } ]
    },
    // Called when we get a message from the peer.
    onReceived: {
        type: "event",
        value: {
            // The label/id of the data channel.
            channelLabel: "string",
            // One the below will be specified.
            text: "string",
            binary: "blob",
            buffer: "buffer"
        }
    },
    // Open the data channel with this label.
    openDataChannel: {
        type: "method",
        value: [ "string" ]
    },
    // Close the data channel with this label.
    closeDataChannel: {
        type: "method",
        value: [ "string" ]
    },
    // A channel with this id has been opened.
    onOpenDataChannel: {
        type: "event",
        value: {
            channelId: "string"
        }
    },
    // The channale with this id has been closed.
    onCloseDataChannel: {
        type: "event",
        value: {
            channelId: "string"
        }
    },
    // Returns the number of bytes that have queued using 'send', but not
    // yet sent out. Currently just exposes:
    // http://www.w3.org/TR/webrtc/#widl-RTCDataChannel-bufferedAmount
    getBufferedAmount: {
        type: "method",
        value: [ "string" ],
        ret: "number"
    },
    // Returns local SDP headers from createOffer.
    getInfo: {
        type: "method",
        value: [],
        ret: "string"
    },
    // Returns interesting facts and figures about the current connection.
    // Exposes a subset of data obtained from getStats:
    //   http://www.w3.org/TR/webrtc/#dom-peerconnection-getstats
    // Fulfills once a connection has been established and stats are available.
    // Note: This is experimental because getStats() behaviour currently
    //       differs greatly between between browsers.
    getStats: {
        type: "method",
        value: [],
        ret: {
            // Address on which local WebRTC is listening.
            localAddress: "string",
            // Port on which local WebRTC is listening.
            localPort: "number",
            // Address on which remote peer is listening.
            remoteAddress: "string",
            // Port on which remote peer is listening.
            remotePort: "number"
        }
    },
    // Close the peer connection.
    close: {
        type: "method",
        value: []
    },
    // The peer connection has been closed.
    onClose: {
        type: "event",
        value: {}
    }
}), fdom.apis.set("core.websocket", {
    // Constructs new websocket. Errors in construction are passed on
    // through the onError event.
    constructor: {
        value: // URL to connect through
        [ "string", // Protocols
        [ "array", "string" ] ]
    },
    // Send the data to the other side of this connection. Only one of
    // the entries in the dictionary that is passed will be sent.
    send: {
        type: "method",
        value: [ {
            text: "string",
            binary: "blob",
            buffer: "buffer"
        } ],
        err: {
            errcode: "string",
            message: "string"
        }
    },
    getReadyState: {
        type: "method",
        value: [],
        // 0 -> CONNECTING
        // 1 -> OPEN
        // 2 -> CLOSING
        // 3 -> CLOSED
        ret: "number"
    },
    getBufferedAmount: {
        type: "method",
        value: [ "string" ],
        ret: "number"
    },
    close: {
        type: "method",
        // The first argument is a status code from
        // https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent
        value: [ "number", "string" ],
        err: {
            errcode: "string",
            message: "string"
        }
    },
    onMessage: {
        type: "event",
        // The data will be stored in one of the keys,
        // corresponding with the type received
        value: {
            text: "string",
            binary: "blob",
            buffer: "buffer"
        }
    },
    onOpen: {
        type: "event",
        value: []
    },
    onError: {
        type: "event",
        value: {
            errcode: "string",
            message: "string"
        }
    },
    onClose: {
        type: "event",
        // Values given by WebSockets spec:
        // http://www.w3.org/TR/websockets/#closeevent
        value: {
            code: "number",
            reason: "string",
            wasClean: "boolean"
        }
    }
}), /*globals fdom:true */
/**
 * SOCIAL API
 *
 * API for connecting to social networks and messaging of users.
 * An instance of a social provider encapsulates a single user logging into
 * a single network.
 *
 * This API distinguishes between a "user" and a "client". A client is a
 * user's point of access to the social provider. Thus, a user that has
 * multiple connections to a provider (e.g., on multiple devices or in multiple
 * browsers) has multiple clients.
 *
 * The semantics of some properties are defined by the specific provider, e.g.:
 * - Edges in the social network (who is on your roster)
 * - Reliable message passing (or unreliable)
 * - In-order message delivery (or out of order)
 * - Persistent clientId - Whether your clientId changes between logins when
 *    connecting from the same device
 *
 * A <client_state>, used in this API, is defined as:
 * - Information related to a specific client of a user
 * - Use cases: 
 *   - Returned on changes for friends or my instance in 'onClientState'
 *   - Returned in a global list from 'getClients'
 * {
 *   // Mandatory
 *   'userId': 'string',    // Unique ID of user (e.g. alice@gmail.com)
 *   'clientId': 'string',  // Unique ID of client
 *                          // (e.g. alice@gmail.com/Android-23nadsv32f)
 *   'status': 'string',    // Status of the client. 'STATUS' member.
 *   'timestamp': 'number'  // Timestamp of the last seen time of this device.
 * }
 * 
 * A <user_profile>, used in this API, is defined as:
 * - Information related to a specific user (profile information)
 * - Use cases:
 *   - Returned on changes for friends or myself in 'onUserProfile'
 *   - Returned in a global list from 'getUsers'
 * {
 *   // Mandatory
 *   'userId': 'string',    // Unique ID of user (e.g. alice@gmail.com)
 *   'timestamp': 'number'  // Timestamp of last change to the profile
 *   // Optional
 *   'name': 'string',      // Name (e.g. Alice)
 *   'url': 'string',       // Homepage URL
 *   'imageData': 'string', // URI of a profile image.
 * }
 **/
fdom.apis.set("social", {
    /** 
   * error codes and default messages that may be returned on failures.
   */
    ERRCODE: {
        type: "constant",
        value: {
            /** GENERAL **/
            SUCCESS: "Success!",
            // Unknown
            UNKNOWN: "Unknown error",
            // User is currently offline
            OFFLINE: "User is currently offline",
            /** LOGIN **/
            // Error authenticating to the server (e.g. invalid credentials)
            LOGIN_BADCREDENTIALS: "Error authenticating with server",
            // Error with connecting to the server
            LOGIN_FAILEDCONNECTION: "Error connecting to server",
            // User is already logged in
            LOGIN_ALREADYONLINE: "User is already logged in",
            /** SENDMESSAGE **/
            // Message sent to invalid destination (e.g. not in user's roster)
            SEND_INVALIDDESTINATION: "Message sent to an invalid destination"
        }
    },
    /**
   * List of possible statuses for <client_state>.status
   **/
    STATUS: {
        type: "constant",
        value: {
            // Not logged in
            OFFLINE: "OFFLINE",
            // This client runs the same freedom.js app as you and is online
            ONLINE: "ONLINE",
            // This client is online, but does not run the same app (chat client)
            // (i.e. can be useful to invite others to your freedom.js app)
            ONLINE_WITH_OTHER_APP: "ONLINE_WITH_OTHER_APP"
        }
    },
    /**
   * Log into the network (See below for parameters)
   * e.g. social.login(Object options)
   *
   * @method login
   * @param {Object} loginOptions - See below
   * @return {Object} <client_state>
   **/
    login: {
        type: "method",
        value: [ {
            // Optional
            agent: "string",
            // Name of the application
            version: "string",
            // Version of application
            url: "string",
            // URL of application
            interactive: "boolean",
            // Allow user interaction from provider.
            // If not set, interpreted as true.
            rememberLogin: "boolean"
        } ],
        ret: {
            // <client_state>, defined above.
            userId: "string",
            clientId: "string",
            status: "string",
            timestamp: "number"
        },
        err: {
            errcode: "string",
            message: "string"
        }
    },
    /**
   * Clears cached credentials of the provider.
   *
   * @method clearCachedCredentials
   * @return nothing
   **/
    clearCachedCredentials: {
        type: "method",
        value: []
    },
    /**
   * Get <client_state>s that have been observed.
   * The provider implementation may act as a client, in which case its
   * <client_state> will be in this list.
   * getClients may not represent an entire roster, since it may not be
   * enumerable.
   * 
   * @method getClients
   * @return {Object} { 
   *    'clientId1': <client_state>,
   *    'clientId2': <client_state>,
   *     ...
   * } List of <client_state>s indexed by clientId
   *   On failure, rejects with an error code.
   **/
    getClients: {
        type: "method",
        value: [],
        ret: "object",
        err: {
            errcode: "string",
            message: "string"
        }
    },
    /**
   * Get <user_profile>s that have been observed.
   * The provider implementation may act as a client, in which case its
   * <user_profile> will be in this list.
   * getUsers may not represent an entire roster, since it may not be
   * enumerable.
   *
   * @method getUsers
   * @return {Object} { 
   *    'userId1': <user_profile>,
   *    'userId2': <user_profile>,
   *     ...
   * } List of <user_profile>s indexed by userId
   *   On failure, rejects with an error code.
   **/
    getUsers: {
        type: "method",
        value: [],
        ret: "object",
        err: {
            errcode: "string",
            message: "string"
        }
    },
    /** 
   * Send a message.
   * Destination may be a userId or a clientId. If it is a userId, all clients
   * for that user should receive the message.
   * 
   * @method sendMessage
   * @param {String} destination_id The userId or clientId to send to
   * @param {String} message The message to send.
   * @return nothing
   *  On failure, rejects with an error code
   **/
    sendMessage: {
        type: "method",
        value: [ "string", "string" ],
        err: {
            errcode: "string",
            message: "string"
        }
    },
    /**
   * Log out of the network.
   * 
   * @method logout
   * @return nothing
   *  On failure, rejects with an error code
   **/
    logout: {
        type: "method",
        value: [],
        err: {
            errcode: "string",
            message: "string"
        }
    },
    /**
   * Receive an incoming message.
   **/
    onMessage: {
        type: "event",
        value: {
            from: {
                // <client_state>, defined above.
                userId: "string",
                clientId: "string",
                status: "string",
                timestamp: "number"
            },
            message: "string"
        }
    },
    /**
   * Receive a change to a <user_profile>.
   **/
    onUserProfile: {
        type: "event",
        value: {
            // <user_profile>, defined above.
            userId: "string",
            timestamp: "number",
            name: "string",
            url: "string",
            imageData: "string"
        }
    },
    /**
   * Receive a change to a <client_state>.
   **/
    onClientState: {
        type: "event",
        value: {
            // <client_state>, defined above.
            userId: "string",
            clientId: "string",
            status: "string",
            timestamp: "number"
        }
    }
}), /*globals fdom:true */
/**
 * STORAGE API
 *
 * API for Persistent Storage
 * Exposes a key-value get/put interface
 **/
fdom.apis.set("storage", {
    /** 
   * List of scopes that can preferred when accessing storage.
  **/
    scope: {
        type: "constant",
        value: {
            // Storage should only last while the app is active.
            SESSION: 0,
            // Storage should be limited to host the app is bound to.
            DEVICE_LOCAL: 1,
            // Storage should be synchronized between user devices.
            USER_LOCAL: 2,
            // Storage should be synchronized across users.
            SHARED: 3
        }
    },
    /**
   * Create a storage provider.
   * @param {Object} options
   *    scope {storage.scope} The preferred storage scope.
   * @constructor
   */
    constructor: {
        value: [ {
            scope: "number"
        } ]
    },
    /**
   * Fetch an array of all keys
   * e.g. storage.keys() => [string]
   *
   * @method keys
   * @return an array with all keys in the store 
   **/
    keys: {
        type: "method",
        value: [],
        ret: [ "array", "string" ]
    },
    /**
   * Fetch a value for a key
   * e.g. storage.get(String key) => string
   *
   * @method get
   * @param {String} key - key to fetch
   * @return {String} Returns a string with the value, null if doesn't exist
   **/
    get: {
        type: "method",
        value: [ "string" ],
        ret: "string"
    },
    /**
   * Sets a value to a key
   * e.g. storage.set(String key, String value)
   *
   * @method set
   * @param {String} key - key of value to set
   * @param {String} value - value
   * @return {String} previous value of key if there was one.
   **/
    set: {
        type: "method",
        value: [ "string", "string" ],
        ret: "string"
    },
    /**
   * Removes a single key
   * e.g. storage.remove(String key)
   *
   * @method remove
   * @param {String} key - key to remove
   * @return {String} previous value of key if there was one.
   **/
    remove: {
        type: "method",
        value: [ "string" ],
        ret: "string"
    },
    /**
   * Removes all data from storage
   * e.g. storage.clear()
   *
   * @method clear
   * @return nothing
   **/
    clear: {
        type: "method",
        value: []
    }
}), /*globals fdom:true */
/**
 * TRANSPORT API
 *
 * API for peer-to-peer communication
 * Useful for sending large binary data between instances
 **/
fdom.apis.set("transport", {
    /**
   * Prepare a P2P connection with initialization parameters
   * Takes in a signalling pathway (freedom.js channel), which is used
   * by the transport provider to send/receive signalling messages
   * to the other side of the P2P connection for setup.
   *
   * @method setup
   * @param {string} name - give this connection a name for logging
   * @param {proxy} channel - signalling channel
   * @return nothing.
   **/
    setup: {
        type: "method",
        value: [ "string", "proxy" ]
    },
    /**
   * Send binary data to the peer
   * All data is labelled with a string tag
   * Any data sent with the same tag is sent in order,
   * but there is no guarantees between tags
   *
   * @method send
   * @param {string} tag
   * @param {buffer} data
   * @return nothing
   **/
    send: {
        type: "method",
        value: [ "string", "buffer" ]
    },
    /**
   * Close the connection. Any data queued for sending, or in the
   * process of sending, may be dropped. If the state of the promse of
   * the send method is "pending" then the data for that send call may
   * be sending or queued.
   * 
   * @method close
   * @return nothing
   **/
    close: {
        type: "method",
        value: []
    },
    /**
   * Event on incoming data (ArrayBuffer)
   **/
    onData: {
        type: "event",
        value: {
            tag: "string",
            data: "buffer"
        }
    },
    /**
   * Event on successful closing of the connection
   **/
    onClose: {
        type: "event",
        value: []
    }
});

/*globals fdom:true */
/**
 * Core freedom services available to all modules.
 * Created by a local manager in response to a 'core' request.
 * @Class Core_unprivileged
 * @constructor
 * @param {Port.Manager} manager The manager this core is connected with.
 * @private
 */
var Core_unprivileged = function(manager) {
    this.manager = manager;
};

Core_unprivileged.unboundChannels = {}, Core_unprivileged.contextId = void 0, /**
 * Create a custom channel.
 * Returns the structure {channel: fdom.proxy.Deferred, identifier: Object},
 * where the identifier can be 'redeemed' by another module or provider using
 * bind channel, at which point the deferred object will resolve with a channel
 * between the two endpoints.
 * @method createChannel
 * @params {Function} continuation Method to call with the cosntructed structure.
 */
Core_unprivileged.prototype.createChannel = function(continuation) {
    var proxy = new fdom.port.Proxy(fdom.proxy.EventInterface), id = fdom.util.getId(), chan = this.getChannel(proxy);
    this.manager.setup(proxy), this.manager.delegate && this.manager.toDelegate.core && this.manager.emit(this.manager.delegate, {
        type: "Delegation",
        request: "handle",
        flow: "core",
        message: {
            type: "register",
            id: id
        }
    }), Core_unprivileged.unboundChannels[id] = {
        local: !0,
        proxy: proxy
    }, proxy.once("start", this.getChannel.bind(this, proxy)), continuation({
        channel: chan,
        identifier: id
    });
}, Core_unprivileged.prototype.getChannel = function(proxy) {
    var iface = proxy.getProxyInterface(), chan = iface();
    return chan.close = iface.close, chan.onClose = iface.onClose, iface.onClose(chan, function() {
        proxy.doClose();
    }), chan;
}, /**
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
    "register" === msg.type ? Core_unprivileged.unboundChannels[msg.id] = {
        remote: !0,
        resolve: msg.reply,
        source: source
    } : "clear" === msg.type ? delete Core_unprivileged.unboundChannels[msg.id] : "bind" === msg.type && Core_unprivileged.unboundChannels[msg.id] && this.bindChannel(msg.id, function() {}, source);
}, /**
 * Bind a custom channel.
 * Creates a proxy interface to the custom channel, which will be bound to
 * the proxy obtained through an earlier createChannel call.
 * channel to a proxy.
 * @method bindChannel
 * @param {Object} identifier An identifier obtained through createChannel.
 * @param {Function} continuation A function to be called with the proxy.
 */
Core_unprivileged.prototype.bindChannel = function(identifier, continuation, source) {
    var toBind = Core_unprivileged.unboundChannels[identifier], newSource = !source;
    // If this is a known identifier and is in the same context, binding is easy.
    if (// when bindChannel is called directly, source will be undefined.
    // When it is propogated by onMessage, a source for binding will already exist.
    newSource && (fdom.debug.log("making local proxy for core binding"), source = new fdom.port.Proxy(fdom.proxy.EventInterface), 
    this.manager.setup(source)), toBind && toBind.local) fdom.debug.log("doing local binding with " + source), 
    this.manager.createLink(source, identifier, toBind.proxy, "default"), delete Core_unprivileged.unboundChannels[identifier], 
    this.manager.delegate && this.manager.toDelegate.core && this.manager.emit(this.manager.delegate, {
        type: "Delegation",
        request: "handle",
        flow: "core",
        message: {
            type: "clear",
            id: identifier
        }
    }); else {
        if (!toBind || !toBind.remote) return this.manager.delegate && this.manager.toDelegate.core ? (fdom.debug.warn("delegating bind request for unseen ID:" + identifier), 
        this.manager.emit(this.manager.delegate, {
            type: "Delegation",
            request: "handle",
            flow: "core",
            message: {
                type: "bind",
                id: identifier
            }
        }), source.once("start", function(p, cb) {
            cb(this.getChannel(p));
        }.bind(this, source, continuation)), this.manager.createLink(source, "default", this.manager.hub.getDestination(this.manager.delegate), identifier), 
        void delete Core_unprivileged.unboundChannels[identifier]) : (fdom.debug.warn("Asked to bind unknown channel: " + identifier), 
        fdom.debug.log(Core_unprivileged.unboundChannels), void continuation());
        fdom.debug.log("doing remote binding downward"), this.manager.createLink(source, newSource ? "default" : identifier, toBind.source, identifier), 
        toBind.resolve({
            type: "Bind Channel",
            request: "core",
            flow: "core",
            message: {
                type: "bind",
                id: identifier
            }
        }), delete Core_unprivileged.unboundChannels[identifier];
    }
    source.getInterface ? continuation(this.getChannel(source)) : continuation();
}, /**
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
}, /**
 * Set the ID of the current freedom.js context.
 * @method setId
 * @private
 * @param {String[]} id The lineage of the current context.
 */
Core_unprivileged.prototype.setId = function(id) {
    Core_unprivileged.contextId = id;
}, fdom.apis.register("core", Core_unprivileged);

/*globals fdom:true, console */
/**
 * A minimal provider implementing the core.echo interface for interaction with
 * custom channels.  Primarily used for testing the robustness of the custom
 * channel implementation.
 * @Class Echo_unprivileged
 * @constructor
 * @param {Module} mod The module creating this provider.
 */
var Echo_unprivileged = function(mod, dispatchEvent) {
    fdom.debug.log("Echo Created!"), this.mod = mod, this.dispatchEvent = dispatchEvent, 
    fdom.util.handleEvents(this), // The Core object for managing channels.
    this.mod.once("core", function(Core) {
        this.core = new Core();
    }.bind(this)), this.mod.emit(this.mod.controlChannel, {
        type: "core request delegated to echo",
        request: "core"
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
    return continuation(), this.core ? void this.core.bindChannel(proxy, function(chan) {
        this.chan && this.chan.close(), this.chan = chan, this.chan.onClose(function() {
            delete this.chan;
        }.bind(this)), this.dispatchEvent("message", "channel bound to echo"), this.chan.on("message", function(m) {
            this.dispatchEvent("message", "from custom channel: " + m);
        }.bind(this));
    }.bind(this)) : void this.dispatchEvent("message", "no core available to setup proxy with at echo");
}, /**
 * Send a message to the bound custom channel.
 * @param {String} str The string to send.
 * @param {Function} continuation Function to call when sending is complete.
 * @method send
 */
Echo_unprivileged.prototype.send = function(str, continuation) {
    continuation(), this.chan ? this.chan.emit("message", str) : this.dispatchEvent("message", "no channel available");
}, fdom.apis.register("core.echo", Echo_unprivileged);

/*globals fdom:true, console, RTCPeerConnection, webkitRTCPeerConnection */
/*globals mozRTCPeerConnection, RTCSessionDescription, RTCIceCandidate */
/*globals mozRTCSessionDescription, mozRTCIceCandidate */
/*globals ArrayBuffer */
/**
 * DataPeer - a class that wraps peer connections and data channels.
 */
// TODO: check that Handling of pranswer is treated appropriately.
var SimpleDataPeerState = {
    DISCONNECTED: "DISCONNECTED",
    CONNECTING: "CONNECTING",
    CONNECTED: "CONNECTED"
};

SimpleDataPeer.prototype.runWhenConnected = function(func) {
    this.pcState === SimpleDataPeerState.CONNECTED ? func() : this.onConnectedQueue.push(func);
}, SimpleDataPeer.prototype.send = function(channelId, message, continuation) {
    this.channels[channelId].send(message), continuation();
}, SimpleDataPeer.prototype.openDataChannel = function(channelId, continuation) {
    var dataChannel = this.pc.createDataChannel(channelId, {});
    dataChannel.onopen = function() {
        this.addDataChannel(channelId, dataChannel), continuation();
    }.bind(this), dataChannel.onerror = function(err) {
        //@(ryscheng) todo - replace with errors that work across the interface
        console.error(err), continuation(void 0, err);
    }, // Firefox does not fire "negotiationneeded", so we need to
    // negotate here if we are not connected.
    // See https://bugzilla.mozilla.org/show_bug.cgi?id=840728
    "undefined" != typeof mozRTCPeerConnection && this.pcState === SimpleDataPeerState.DISCONNECTED && this.negotiateConnection();
}, SimpleDataPeer.prototype.closeChannel = function(channelId) {
    void 0 !== this.channels[channelId] && (this.channels[channelId].close(), delete this.channels[channelId]);
}, SimpleDataPeer.prototype.getBufferedAmount = function(channelId) {
    if (void 0 !== this.channels[channelId]) {
        var dataChannel = this.channels[channelId];
        return dataChannel.bufferedAmount;
    }
    throw new Error("No channel with id: " + channelId);
}, SimpleDataPeer.prototype.setSendSignalMessage = function(sendSignalMessageFn) {
    this.sendSignalMessage = sendSignalMessageFn;
}, // Handle a message send on the signalling channel to this peer.
SimpleDataPeer.prototype.handleSignalMessage = function(messageText) {
    //console.log(this.peerName + ": " + "handleSignalMessage: \n" + messageText);
    var json = JSON.parse(messageText);
    // TODO: If we are offering and they are also offerring at the same time,
    // pick the one who has the lower randomId?
    // (this.pc.signalingState == "have-local-offer" && json.sdp &&
    //    json.sdp.type == "offer" && json.sdp.randomId < this.localRandomId)
    if (json.sdp) // Set the remote description.
    this.pc.setRemoteDescription(new this.RTCSessionDescription(json.sdp), // Success
    function() {
        //console.log(this.peerName + ": setRemoteDescription succeeded");
        "offer" === this.pc.remoteDescription.type && this.pc.createAnswer(this.onDescription.bind(this), console.error);
    }.bind(this), // Failure
    function(e) {
        console.error(this.peerName + ": setRemoteDescription failed:", e);
    }.bind(this)); else if (json.candidate) {
        // Add remote ice candidate.
        //console.log(this.peerName + ": Adding ice candidate: " + JSON.stringify(json.candidate));
        var ice_candidate = new this.RTCIceCandidate(json.candidate);
        this.pc.addIceCandidate(ice_candidate);
    } else console.warn(this.peerName + ": handleSignalMessage got unexpected message: ", messageText);
}, // Connect to the peer by the signalling channel.
SimpleDataPeer.prototype.negotiateConnection = function() {
    this.pcState = SimpleDataPeerState.CONNECTING, this.pc.createOffer(this.onDescription.bind(this), function(e) {
        console.error(this.peerName + ": createOffer failed: ", e.toString()), this.pcState = SimpleDataPeerState.DISCONNECTED;
    }.bind(this));
}, SimpleDataPeer.prototype.isClosed = function() {
    return !this.pc || "closed" === this.pc.signalingState;
}, SimpleDataPeer.prototype.close = function() {
    this.isClosed() || this.pc.close();
}, SimpleDataPeer.prototype.addDataChannel = function(channelId, channel) {
    var callbacks = this.dataChannelCallbacks;
    this.channels[channelId] = channel, "connecting" === channel.readyState && (channel.onopen = callbacks.onOpenFn.bind(this, channel, {
        label: channelId
    })), channel.onclose = callbacks.onCloseFn.bind(this, channel, {
        label: channelId
    }), channel.onmessage = callbacks.onMessageFn.bind(this, channel, {
        label: channelId
    }), channel.onerror = callbacks.onErrorFn.bind(this, channel, {
        label: channel
    });
}, // When we get our description, we set it to be our local description and
// send it to the peer.
SimpleDataPeer.prototype.onDescription = function(description) {
    this.sendSignalMessage ? this.pc.setLocalDescription(description, function() {
        //console.log(this.peerName + ": setLocalDescription succeeded");
        this.sendSignalMessage(JSON.stringify({
            sdp: description
        }));
    }.bind(this), function(e) {
        console.error(this.peerName + ": setLocalDescription failed:", e);
    }.bind(this)) : console.error(this.peerName + ": _onDescription: _sendSignalMessage is not set, so we did not set the local description. ");
}, SimpleDataPeer.prototype.onNegotiationNeeded = function() {
    //console.log(this.peerName + ": " + "onNegotiationNeeded",
    //            JSON.stringify(this._pc), e);
    if (this.pcState !== SimpleDataPeerState.DISCONNECTED) {
        // Negotiation messages are falsely requested for new data channels.
        //   https://code.google.com/p/webrtc/issues/detail?id=2431
        // This code is a hack to simply reset the same local and remote
        // description which will trigger the appropriate data channel open event.
        // TODO: fix/remove this when Chrome issue is fixed.
        var logSuccess = function() {
            return function() {}.bind(this);
        }.bind(this), logFail = function() {
            return function() {}.bind(this);
        }.bind(this);
        return void (this.pc.localDescription && this.pc.remoteDescription && "offer" === this.pc.localDescription.type ? (this.pc.setLocalDescription(this.pc.localDescription, logSuccess("setLocalDescription"), logFail("setLocalDescription")), 
        this.pc.setRemoteDescription(this.pc.remoteDescription, logSuccess("setRemoteDescription"), logFail("setRemoteDescription"))) : this.pc.localDescription && this.pc.remoteDescription && "answer" === this.pc.localDescription.type ? (this.pc.setRemoteDescription(this.pc.remoteDescription, logSuccess("setRemoteDescription"), logFail("setRemoteDescription")), 
        this.pc.setLocalDescription(this.pc.localDescription, logSuccess("setLocalDescription"), logFail("setLocalDescription"))) : console.error(this.peerName + ", onNegotiationNeeded failed"));
    }
    this.negotiateConnection();
}, SimpleDataPeer.prototype.onIceCallback = function(event) {
    event.candidate && (// Send IceCandidate to peer.
    //console.log(this.peerName + ": " + "ice callback with candidate", event);
    this.sendSignalMessage ? this.sendSignalMessage(JSON.stringify({
        candidate: event.candidate
    })) : console.warn(this.peerName + ": _onDescription: _sendSignalMessage is not set."));
}, SimpleDataPeer.prototype.onSignalingStateChange = function() {
    //console.log(this.peerName + ": " + "onSignalingStateChange: ", this._pc.signalingState);
    "stable" === this.pc.signalingState && (this.pcState = SimpleDataPeerState.CONNECTED, 
    this.onConnectedQueue.map(function(callback) {
        callback();
    }));
}, SimpleDataPeer.prototype.onDataChannel = function(event) {
    this.addDataChannel(event.channel.label, event.channel), // RTCDataChannels created by a RTCDataChannelEvent have an initial
    // state of open, so the onopen event for the channel will not
    // fire. We need to fire the onOpenDataChannel event here
    // http://www.w3.org/TR/webrtc/#idl-def-RTCDataChannelState
    // Firefox channels do not have an initial state of "open"
    // See https://bugzilla.mozilla.org/show_bug.cgi?id=1000478
    "open" === event.channel.readyState && this.dataChannelCallbacks.onOpenFn(event.channel, {
        label: event.channel.label
    });
}, SimpleDataPeer.prototype.getStats = function(callback) {
    this.pcState === SimpleDataPeerState.CONNECTED ? this.pc.getStats(callback) : console.error(this.peerName + ": cannot call getStats until connected");
}, // Start a peer connection using the given freedomChannelId as the way to
// communicate with the peer. The argument |freedomChannelId| is a way to speak
// to an identity provide to send them SDP headers negotiate the address/port to
// setup the peer to peerConnection.
//
// options: {
//   peerName: string,   // For pretty printing messages about this peer.
//   debug: boolean           // should we add extra
// }
PeerConnection.prototype.setup = function(signallingChannelId, peerName, stunServers, initiateConnection, continuation) {
    this.peerName = peerName;
    var mocks = {
        RTCPeerConnection: this.RTCPeerConnection,
        RTCSessionDescription: this.RTCSessionDescription,
        RTCIceCandidate: this.RTCIceCandidate
    }, self = this, dataChannelCallbacks = {
        // onOpenFn is called at the point messages will actually get through.
        onOpenFn: function(dataChannel, info) {
            self.dispatchEvent("onOpenDataChannel", info.label);
        },
        onCloseFn: function(dataChannel, info) {
            self.dispatchEvent("onCloseDataChannel", {
                channelId: info.label
            });
        },
        // Default on real message prints it to console.
        onMessageFn: function(dataChannel, info, event) {
            event.data instanceof ArrayBuffer ? self.dispatchEvent("onReceived", {
                channelLabel: info.label,
                buffer: event.data
            }) : event.data instanceof Blob ? self.dispatchEvent("onReceived", {
                channelLabel: info.label,
                binary: event.data
            }) : "string" == typeof event.data && self.dispatchEvent("onReceived", {
                channelLabel: info.label,
                text: event.data
            });
        },
        // Default on error, prints it.
        onErrorFn: function(dataChannel, info, err) {
            console.error(dataChannel.peerName + ": dataChannel(" + dataChannel.dataChannel.label + "): error: ", err);
        }
    };
    if (this.peer = new SimpleDataPeer(this.peerName, stunServers, dataChannelCallbacks, mocks), 
    // Setup link between Freedom messaging and _peer's signalling.
    // Note: the signalling channel should only be sending receiveing strings.
    this.core.bindChannel(signallingChannelId, function(channel) {
        this.signallingChannel = channel, this.peer.setSendSignalMessage(function(msg) {
            this.signallingChannel.emit("message", msg);
        }.bind(this)), this.signallingChannel.on("message", this.peer.handleSignalMessage.bind(this.peer)), 
        this.signallingChannel.emit("ready"), initiateConnection || this.peer.runWhenConnected(continuation);
    }.bind(this)), initiateConnection) {
        // Setup a connection right away, then invoke continuation.
        console.log(this.peerName + " initiating connection");
        var channelId = "hello" + Math.random().toString(), openDataChannelContinuation = function(success, error) {
            error ? continuation(void 0, error) : this.closeDataChannel(channelId, continuation);
        }.bind(this);
        this.openDataChannel(channelId, openDataChannelContinuation);
    }
}, // TODO: delay continuation until the open callback from _peer is called.
PeerConnection.prototype.openDataChannel = function(channelId, continuation) {
    this.peer.openDataChannel(channelId, continuation);
}, PeerConnection.prototype.closeDataChannel = function(channelId, continuation) {
    this.peer.closeChannel(channelId), continuation();
}, // Called to send a message over the given datachannel to a peer. If the data
// channel doesn't already exist, the DataPeer creates it.
PeerConnection.prototype.send = function(sendInfo, continuation) {
    var objToSend = sendInfo.text || sendInfo.buffer || sendInfo.binary;
    //DEBUG
    // objToSend = new ArrayBuffer(4);
    //DEBUG
    return "undefined" == typeof objToSend ? void console.error("No valid data to send has been provided.", sendInfo) : void this.peer.send(sendInfo.channelLabel, objToSend, continuation);
}, PeerConnection.prototype.getBufferedAmount = function(channelId, continuation) {
    continuation(this.peer.getBufferedAmount(channelId));
}, // TODO: handle Firefox stats
PeerConnection.prototype.getStats = function(continuation) {
    var callback = function(stats) {
        // RTCStatsReport
        // We need to find the report having a stat named 'googActiveConnection'.
        // This report will also contain the local and remote endpoints.
        //
        // Note:
        //  - the info is in a report named 'Channel-audio-1' (or similar)
        //  - the info isn't always present the first time getStats() is called
        //
        // Neither of these issues seem fatal and hopefully Chrome will implement
        // the proposed standard soon and fix these issues.
        for (var reports = stats.result(), i = 0; i < reports.length; i++) {
            var report = reports[i];
            // RTCStatsReport does *not* return an array and googActiveConnection
            // is a string, hence the weirdness.
            if ("true" === report.stat("googActiveConnection")) {
                var localFields = report.stat("googLocalAddress").split(":"), remoteFields = report.stat("googRemoteAddress").split(":");
                return void continuation({
                    localAddress: localFields[0],
                    localPort: localFields[1],
                    remoteAddress: remoteFields[0],
                    remotePort: remoteFields[1]
                });
            }
        }
        window.setTimeout(function() {
            this.peer.getStats(callback);
        }.bind(this), 1e3);
    };
    this.peer.getStats(callback);
}, PeerConnection.prototype.close = function(continuation) {
    // Peer already closed, run continuation without dispatching event.
    return this.peer.isClosed() ? void continuation() : (this.peer.close(), this.dispatchEvent("onClose"), 
    void continuation());
}, fdom.apis.register("core.peerconnection", PeerConnection);

/*globals fdom, localStorage */
/**
 * A FreeDOM core.storage provider that depends on localStorage
 * Thus, this only works in the context of a webpage and has
 * some size limitations.
 * Note that this can conflict with other scripts using localStorage
 * as keys are raw
 * @Class Storage_unprivileged
 * @constructor
 * @private
 * @param {App} app The application creating this provider.
 */
var Storage_unprivileged = function(app) {
    this.app = app, fdom.util.handleEvents(this);
};

/**
 * Lists keys in the storage repository
 * @method keys
 */
Storage_unprivileged.prototype.keys = function(continuation) {
    var i, result = [];
    for (i = 0; i < localStorage.length; i += 1) result.push(localStorage.key(i));
    continuation(result);
}, /**
 * Get a key from the storage repository.
 * @param {String} key The item to get from storage.
 * @method get
 */
Storage_unprivileged.prototype.get = function(key, continuation) {
    try {
        var val = localStorage.getItem(key);
        continuation(val);
    } catch (e) {
        continuation(null);
    }
}, /**
 * Set a key in the storage repository.
 * @param {String} key The item to save in storage.
 * @param {String} value The value to save in storage.
 * @method set
 */
Storage_unprivileged.prototype.set = function(key, value, continuation) {
    localStorage.setItem(key, value), continuation();
}, /**
 * Remove a key from the storage repository.
 * @param {String} key The item to remove from storage;
 * @method remove
 */
Storage_unprivileged.prototype.remove = function(key, continuation) {
    localStorage.removeItem(key), continuation();
}, /**
 * Reset the contents of the storage repository.
 * @method clear
 */
Storage_unprivileged.prototype.clear = function(continuation) {
    localStorage.clear(), continuation();
}, /** REGISTER PROVIDER **/
fdom.apis.register("core.storage", Storage_unprivileged);

/*globals fdom, document */
/**
 * A FreeDOM view is provided as a core service for displaying some UI.
 * Implementation is currently designed as a sandboxed iFrame that the
 * browser treats as a 'null' origin, whose sendMessage channel is
 * given to the provider.
 * @Class View_unprivileged
 * @constructor
 * @private
 * @param {App} app The application creating this provider.
 */
var View_unprivileged = function(app, dispatchEvent) {
    this.dispatchEvent = dispatchEvent, this.host = null, this.win = null, this.app = app, 
    fdom.util.handleEvents(this);
};

/**
 * Ask for this view to open a specific location, either a File relative to
 * the loader, or an explicit code location.
 * @method open
 * @param {String} name The identifier of the view. Used to choose attachment.
 * @param {Object} what What UI to load.
 * @param {Function} continuation Function to call when view is loaded.
 */
View_unprivileged.prototype.open = function(name, what, continuation) {
    this.host = document.createElement("div"), this.host.style.width = "100%", this.host.style.height = "100%", 
    this.host.style.display = "relative";
    var root, frame, container = document.body, config = this.app.manifest.views;
    config && config[name] && document.getElementById(name) && (container = document.getElementById(name)), 
    container.appendChild(this.host), root = this.host, // TODO(willscott): Support shadow root as available.
    // if (this.host['webkitCreateShadowRoot']) {
    //   root = this.host['webkitCreateShadowRoot']();
    // }
    frame = document.createElement("iframe"), frame.setAttribute("sandbox", "allow-scripts allow-forms"), 
    what.file ? fdom.resources.get(this.app.manifestId, what.file).then(function(fname) {
        this.finishOpen(root, frame, fname, continuation);
    }.bind(this)) : what.code ? this.finishOpen(root, frame, "data:text/html;charset=utf-8," + what.code, continuation) : continuation(!1);
}, View_unprivileged.prototype.finishOpen = function(root, frame, src, continuation) {
    frame.src = src, frame.style.width = "100%", frame.style.height = "100%", frame.style.border = "0", 
    frame.style.background = "transparent", root.appendChild(frame), this.app.config.global.addEventListener("message", this.onMessage.bind(this), !0), 
    this.win = frame, continuation({});
}, View_unprivileged.prototype.show = function(continuation) {
    continuation();
}, View_unprivileged.prototype.postMessage = function(args, continuation) {
    this.win.contentWindow.postMessage(args, "*"), continuation();
}, View_unprivileged.prototype.close = function(continuation) {
    this.host && (this.host.parentNode.removeChild(this.host), this.host = null), this.win && (this.app.config.global.removeEventListener("message", this.onMessage.bind(this), !0), 
    this.win = null), continuation();
}, View_unprivileged.prototype.onMessage = function(m) {
    m.source === this.win.contentWindow && this.dispatchEvent("message", m.data);
}, fdom.apis.register("core.view", View_unprivileged);

/*globals freedom:true, fdom, WebSocket, console*/
/**
 * A WebSocket core provider.
 * @param {port.Module} module The Module requesting this provider
 * @param {Function} dispatchEvent Function to dispatch events.
 * @param {String} url The Remote URL to connect with.
 * @param {String[]} protocols SubProtocols to open.
 * @param {WebSocket?} socket An alternative socket class to use.
 */
var WS = function(module, dispatchEvent, url, protocols, socket) {
    var WSImplementation = socket || WebSocket;
    this.dispatchEvent = dispatchEvent;
    try {
        this.websocket = protocols ? new WSImplementation(url, protocols) : new WSImplementation(url);
    } catch (e) {
        var error = {};
        return error.errcode = e instanceof SyntaxError ? "SYNTAX" : e.name, error.message = e.message, 
        void dispatchEvent("onError", error);
    }
    this.websocket.onopen = this.onOpen.bind(this), this.websocket.onclose = this.onClose.bind(this), 
    this.websocket.onmessage = this.onMessage.bind(this), this.websocket.onerror = this.onError.bind(this);
};

WS.prototype.send = function(data, continuation) {
    var errcode, message, toSend = data.text || data.binary || data.buffer;
    if (toSend) try {
        this.websocket.send(toSend);
    } catch (e) {
        errcode = e instanceof SyntaxError ? "SYNTAX" : "INVALID_STATE", message = e.message;
    } else errcode = "BAD_SEND", message = "No text, binary, or buffer data found.";
    errcode ? continuation(void 0, {
        errcode: errcode,
        message: message
    }) : continuation();
}, WS.prototype.getReadyState = function(continuation) {
    continuation(this.websocket.readyState);
}, WS.prototype.getBufferedAmount = function(continuation) {
    continuation(this.websocket.bufferedAmount);
}, WS.prototype.close = function(code, reason, continuation) {
    try {
        code && reason ? this.websocket.close(code, reason) : this.websocket.close(), continuation();
    } catch (e) {
        var errorCode;
        errorCode = e instanceof SyntaxError ? "SYNTAX" : "INVALID_ACCESS", continuation(void 0, {
            errcode: errorCode,
            message: e.message
        });
    }
}, WS.prototype.onOpen = function() {
    this.dispatchEvent("onOpen");
}, WS.prototype.onMessage = function(event) {
    var data = {};
    event.data instanceof ArrayBuffer ? data.buffer = data : event.data instanceof Blob ? data.binary = data : "string" == typeof event.data && (data.text = event.data), 
    this.dispatchEvent("onMessage", data);
}, WS.prototype.onError = function() {
    // Nothing to pass on
    // See: http://stackoverflow.com/a/18804298/300539
    this.dispatchEvent("onError");
}, WS.prototype.onClose = function(event) {
    this.dispatchEvent("onClose", {
        code: event.code,
        reason: event.reason,
        wasClean: event.wasClean
    });
}, fdom.apis.register("core.websocket", WS);
//# sourceMappingURL=freedom.map
    // Create default context.
    global['freedom'] = fdom.setup(global, freedom_src);
  })();

})(this);
//# sourceMappingURL=freedom.map
