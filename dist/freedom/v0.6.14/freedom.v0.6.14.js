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
 * @version 0.6.14
 */
 
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = [{"name":"console","api":{"log":{"type":"method","value":["string","string"]},"debug":{"type":"method","value":["string","string"]},"info":{"type":"method","value":["string","string"]},"warn":{"type":"method","value":["string","string"]},"error":{"type":"method","value":["string","string"]}}},{"name":"core.console","api":{"log":{"type":"method","value":["string","string"]},"debug":{"type":"method","value":["string","string"]},"info":{"type":"method","value":["string","string"]},"warn":{"type":"method","value":["string","string"]},"error":{"type":"method","value":["string","string"]}}},{"name":"core.echo","api":{"setup":{"type":"method","value":["string"]},"send":{"type":"method","value":["string"]},"message":{"type":"event","value":"string"}}},{"name":"core","api":{"createChannel":{"type":"method","value":[],"ret":{"channel":"proxy","identifier":"string"}},"bindChannel":{"type":"method","value":["string"],"ret":"proxy"},"getId":{"type":"method","value":[],"ret":["array","string"]},"getLogger":{"type":"method","value":["string"],"ret":"proxy"}}},{"name":"core.oauth","api":{"initiateOAuth":{"type":"method","value":[["array","string"]],"ret":{"redirect":"string","state":"string"},"err":{"errcode":"string","message":"string"}},"launchAuthFlow":{"type":"method","value":["string",{"redirect":"string","state":"string"}],"ret":"string","err":{"errcode":"string","message":"string"}}}},{"name":"core.peerconnection","api":{"setup":{"type":"method","value":["string","string",["array","string"],"boolean"]},"send":{"type":"method","value":[{"channelLabel":"string","text":"string","binary":"blob","buffer":"buffer"}]},"onReceived":{"type":"event","value":{"channelLabel":"string","text":"string","binary":"blob","buffer":"buffer"}},"openDataChannel":{"type":"method","value":["string"]},"closeDataChannel":{"type":"method","value":["string"]},"onOpenDataChannel":{"type":"event","value":{"channelId":"string"}},"onCloseDataChannel":{"type":"event","value":{"channelId":"string"}},"getBufferedAmount":{"type":"method","value":["string"],"ret":"number"},"getInfo":{"type":"method","value":[],"ret":"string"},"createOffer":{"type":"method","value":[{"offerToReceiveVideo":"number","offerToReceiveAudio":"number","voiceActivityDetection":"boolean","iceRestart":"boolean"}],"ret":{"type":"string","sdp":"string"}},"close":{"type":"method","value":[]},"onClose":{"type":"event","value":{}}}},{"name":"core.rtcdatachannel","api":{"constructor":{"value":["string"]},"getLabel":{"type":"method","value":[],"ret":"string"},"getOrdered":{"type":"method","value":[],"ret":"boolean"},"getMaxPacketLifeTime":{"type":"method","value":[],"ret":"number"},"getMaxRetransmits":{"type":"method","value":[],"ret":"number"},"getProtocol":{"type":"method","value":[],"ret":"string"},"getNegotiated":{"type":"method","value":[],"ret":"boolean"},"getId":{"type":"method","value":[],"ret":"number"},"getReadyState":{"type":"method","value":[],"ret":"string"},"getBufferedAmount":{"type":"method","value":[],"ret":"number"},"onopen":{"type":"event","value":[]},"onerror":{"type":"event","value":[]},"onclose":{"type":"event","value":[]},"close":{"type":"method","value":[]},"onmessage":{"type":"event","value":{"text":"string","buffer":"buffer"}},"getBinaryType":{"type":"method","value":[],"ret":"string"},"setBinaryType":{"type":"method","value":["string"]},"send":{"type":"method","value":["string"]},"sendBuffer":{"type":"method","value":["buffer"]}}},{"name":"core.rtcpeerconnection","api":{"constructor":{"value":[{"iceServers":["array",{"urls":["array","string"],"username":"string","credential":"string"}],"iceTransports":"string","peerIdentity":"string"}]},"createOffer":{"type":"method","value":[{"offerToReceiveAudio":"number","offerToReceiveVideo":"number","iceRestart":"boolean","voiceActivityDetection":"boolean"}],"ret":{"type":"string","sdp":"string"}},"createAnswer":{"type":"method","value":[],"ret":{"type":"string","sdp":"string"}},"setLocalDescription":{"type":"method","value":[{"type":"string","sdp":"string"}]},"getLocalDescription":{"type":"method","value":[],"ret":{"type":"string","sdp":"string"}},"setRemoteDescription":{"type":"method","value":[{"type":"string","sdp":"string"}],"ret":{}},"getRemoteDescription":{"type":"method","value":[],"ret":{"type":"string","sdp":"string"}},"getSignalingState":{"type":"method","value":[],"ret":"string"},"updateIce":{"type":"method","value":[{"iceServers":["array",{"urls":["array","string"],"username":"string","credential":"string"}],"iceTransports":"string","peerIdentity":"string"}],"ret":{}},"addIceCandidate":{"type":"method","value":[{"candidate":"string","sdpMid":"string","sdpMLineIndex":"number"}],"ret":{}},"getIceGatheringState":{"type":"method","value":[],"ret":"string"},"getIceConnectionState":{"type":"method","value":[],"ret":"string"},"getConfiguration":{"type":"method","value":[],"ret":{"iceServers":["array",{"urls":["array","string"],"username":"string","credential":"string"}],"iceTransports":"string","peerIdentity":"string"}},"getLocalStreams":{"type":"method","value":[],"ret":["array","string"]},"getRemoteStreams":{"type":"method","value":[],"ret":["array","string"]},"getStreamById":{"type":"method","value":["string"],"ret":"string"},"addStream":{"type":"method","value":["string"],"ret":{}},"removeStream":{"type":"method","value":["string"],"ret":{}},"close":{"type":"method","value":[],"ret":{}},"createDataChannel":{"type":"method","value":["string",{"ordered":"boolean","maxPacketLifeTime":"number","maxRetransmits":"number","protocol":"string","negotiated":"boolean","id":"number"}],"ret":"string"},"ondatachannel":{"type":"event","value":{"channel":"string"}},"getStats":{"type":"method","value":["string"],"ret":"object"},"onnegotiationneeded":{"type":"event","value":[]},"onicecandidate":{"type":"event","value":{"candidate":{"candidate":"string","sdpMid":"string","sdpMLineIndex":"number"}}},"onsignalingstatechange":{"type":"event","value":[]},"onaddstream":{"type":"event","value":{"stream":"number"}},"onremovestream":{"type":"event","value":{"stream":"number"}},"oniceconnectionstatechange":{"type":"event","value":[]}}},{"name":"core.storage","api":{"keys":{"type":"method","value":[],"ret":["array","string"]},"get":{"type":"method","value":["string"],"ret":"string"},"set":{"type":"method","value":["string","string"],"ret":"string"},"remove":{"type":"method","value":["string"],"ret":"string"},"clear":{"type":"method","value":[]}}},{"name":"core.tcpsocket","api":{"constructor":{"value":["number"]},"getInfo":{"type":"method","value":[],"ret":{"connected":"boolean","localAddress":"string","localPort":"number","peerAddress":"string","peerPort":"number"}},"ERRCODE":{"type":"constant","value":{"SUCCESS":"Success!","UNKNOWN":"Unknown error","ALREADY_CONNECTED":"Socket already connected","INVALID_ARGUMENT":"Invalid argument","TIMED_OUT":"Timed out","NOT_CONNECTED":"Socket not connected","NETWORK_CHANGED":"Network changed","CONNECTION_CLOSED":"Connection closed gracefully","CONNECTION_RESET":"Connection reset","CONNECTION_REFUSED":"Connection refused","CONNECTION_FAILED":"Connection failed"}},"close":{"type":"method","value":[],"err":{"errcode":"string","message":"string"}},"onDisconnect":{"type":"event","value":{"errcode":"string","message":"string"}},"connect":{"type":"method","value":["string","number"],"err":{"errcode":"string","message":"string"}},"secure":{"type":"method","value":[],"err":{"errcode":"string","message":"string"}},"prepareSecure":{"type":"method","value":[],"err":{"errcode":"string","message":"string"}},"write":{"type":"method","value":["buffer"],"err":{"errcode":"string","message":"string"}},"onData":{"type":"event","value":{"data":"buffer"}},"listen":{"type":"method","value":["string","number"],"err":{"errcode":"string","message":"string"}},"onConnection":{"type":"event","value":{"socket":"number","host":"string","port":"number"}}}},{"name":"core.udpsocket","api":{"ERRCODE":{"type":"constant","value":{"SUCCESS":"Success!","UNKNOWN":"Unknown error","ALREADY_BOUND":"Socket already bound","INVALID_ARGUMENT":"Invalid argument","NETWORK_CHANGED":"Network changed","SNED_FAILED":"Send failed"}},"bind":{"type":"method","value":["string","number"],"ret":[],"err":{"errcode":"string","message":"string"}},"getInfo":{"type":"method","value":[],"ret":{"localAddress":"string","localPort":"number"}},"sendTo":{"type":"method","value":["buffer","string","number"],"ret":"number","err":{"errcode":"string","message":"string"}},"destroy":{"type":"method","value":[]},"onData":{"type":"event","value":{"resultCode":"number","address":"string","port":"number","data":"buffer"}}}},{"name":"core.view","api":{"show":{"type":"method","value":["string"]},"isSecure":{"type":"method","value":[],"ret":"boolean"},"close":{"type":"method","value":[]},"postMessage":{"type":"method","value":["object"]},"message":{"type":"event","value":"object"},"onClose":{"type":"event","value":[]}}},{"name":"core.websocket","api":{"constructor":{"value":["string",["array","string"]]},"send":{"type":"method","value":[{"text":"string","binary":"blob","buffer":"buffer"}],"err":{"errcode":"string","message":"string"}},"getReadyState":{"type":"method","value":[],"ret":"number"},"getBufferedAmount":{"type":"method","value":["string"],"ret":"number"},"close":{"type":"method","value":["number","string"],"err":{"errcode":"string","message":"string"}},"onMessage":{"type":"event","value":{"text":"string","binary":"blob","buffer":"buffer"}},"onOpen":{"type":"event","value":[]},"onError":{"type":"event","value":{"errcode":"string","message":"string"}},"onClose":{"type":"event","value":{"code":"number","reason":"string","wasClean":"boolean"}}}},{"name":"social","api":{"ERRCODE":{"type":"constant","value":{"SUCCESS":"Success!","UNKNOWN":"Unknown error","OFFLINE":"User is currently offline","MALFORMEDPARAMETERS":"Parameters are malformed","LOGIN_BADCREDENTIALS":"Error authenticating with server","LOGIN_FAILEDCONNECTION":"Error connecting to server","LOGIN_ALREADYONLINE":"User is already logged in","LOGIN_OAUTHERROR":"OAuth Error","SEND_INVALIDDESTINATION":"Message sent to an invalid destination"}},"STATUS":{"type":"constant","value":{"OFFLINE":"OFFLINE","ONLINE":"ONLINE","ONLINE_WITH_OTHER_APP":"ONLINE_WITH_OTHER_APP"}},"login":{"type":"method","value":[{"agent":"string","version":"string","url":"string","interactive":"boolean","rememberLogin":"boolean"}],"ret":{"userId":"string","clientId":"string","status":"string","lastUpdated":"number","lastSeen":"number"},"err":{"errcode":"string","message":"string"}},"clearCachedCredentials":{"type":"method","value":[]},"getClients":{"type":"method","value":[],"ret":"object","err":{"errcode":"string","message":"string"}},"getUsers":{"type":"method","value":[],"ret":"object","err":{"errcode":"string","message":"string"}},"sendMessage":{"type":"method","value":["string","string"],"err":{"errcode":"string","message":"string"}},"logout":{"type":"method","value":[],"err":{"errcode":"string","message":"string"}},"onMessage":{"type":"event","value":{"from":{"userId":"string","clientId":"string","status":"string","lastUpdated":"number","lastSeen":"number"},"message":"string"}},"onUserProfile":{"type":"event","value":{"userId":"string","lastUpdated":"number","name":"string","url":"string","imageData":"string"}},"onClientState":{"type":"event","value":{"userId":"string","clientId":"string","status":"string","lastUpdated":"number","lastSeen":"number"}}}},{"name":"storage","api":{"scope":{"type":"constant","value":{"SESSION":0,"DEVICE_LOCAL":1,"USER_LOCAL":2,"SHARED":3}},"ERRCODE":{"type":"constant","value":{"SUCCESS":"Success!","UNKNOWN":"Unknown error","OFFLINE":"Database not reachable","MALFORMEDPARAMETERS":"Parameters are malformed"}},"constructor":{"value":[{"scope":"number"}]},"keys":{"type":"method","value":[],"ret":["array","string"],"err":{"errcode":"string","message":"string"}},"get":{"type":"method","value":["string"],"ret":"string","err":{"errcode":"string","message":"string"}},"set":{"type":"method","value":["string","string"],"ret":"string","err":{"errcode":"string","message":"string"}},"remove":{"type":"method","value":["string"],"ret":"string","err":{"errcode":"string","message":"string"}},"clear":{"type":"method","value":[],"ret":[],"err":{"errcode":"string","message":"string"}}}},{"name":"storebuffer","api":{"scope":{"type":"constant","value":{"SESSION":0,"DEVICE_LOCAL":1,"USER_LOCAL":2,"SHARED":3}},"ERRCODE":{"type":"constant","value":{"SUCCESS":"Success!","UNKNOWN":"Unknown error","OFFLINE":"Database not reachable","MALFORMEDPARAMETERS":"Parameters are malformed"}},"constructor":{"value":[{"scope":"number"}]},"keys":{"type":"method","value":[],"ret":["array","string"],"err":{"errcode":"string","message":"string"}},"get":{"type":"method","value":["string"],"ret":"buffer","err":{"errcode":"string","message":"string"}},"set":{"type":"method","value":["string","buffer"],"ret":"buffer","err":{"errcode":"string","message":"string"}},"remove":{"type":"method","value":["string"],"ret":"buffer","err":{"errcode":"string","message":"string"}},"clear":{"type":"method","value":[],"ret":[],"err":{"errcode":"string","message":"string"}}}},{"name":"transport","api":{"ERRCODE":{"type":"constant","value":{"SUCCESS":"Success!","UNKNOWN":"Unknown error","OFFLINE":"Not reachable","MALFORMEDPARAMETERS":"Parameters are malformed"}},"setup":{"type":"method","value":["string","proxy"],"ret":[],"err":{"errcode":"string","message":"string"}},"send":{"type":"method","value":["string","buffer"],"ret":[],"err":{"errcode":"string","message":"string"}},"close":{"type":"method","value":[],"ret":[],"err":{"errcode":"string","message":"string"}},"onData":{"type":"event","value":{"tag":"string","data":"buffer"}},"onClose":{"type":"event","value":[]}}}];

},{}],2:[function(require,module,exports){
(function (process,global){
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
 * @version   2.0.1
 */

(function() {
    "use strict";

    function $$utils$$objectOrFunction(x) {
      return typeof x === 'function' || (typeof x === 'object' && x !== null);
    }

    function $$utils$$isFunction(x) {
      return typeof x === 'function';
    }

    function $$utils$$isMaybeThenable(x) {
      return typeof x === 'object' && x !== null;
    }

    var $$utils$$_isArray;

    if (!Array.isArray) {
      $$utils$$_isArray = function (x) {
        return Object.prototype.toString.call(x) === '[object Array]';
      };
    } else {
      $$utils$$_isArray = Array.isArray;
    }

    var $$utils$$isArray = $$utils$$_isArray;
    var $$utils$$now = Date.now || function() { return new Date().getTime(); };
    function $$utils$$F() { }

    var $$utils$$o_create = (Object.create || function (o) {
      if (arguments.length > 1) {
        throw new Error('Second argument not supported');
      }
      if (typeof o !== 'object') {
        throw new TypeError('Argument must be an object');
      }
      $$utils$$F.prototype = o;
      return new $$utils$$F();
    });

    var $$asap$$len = 0;

    var $$asap$$default = function asap(callback, arg) {
      $$asap$$queue[$$asap$$len] = callback;
      $$asap$$queue[$$asap$$len + 1] = arg;
      $$asap$$len += 2;
      if ($$asap$$len === 2) {
        // If len is 1, that means that we need to schedule an async flush.
        // If additional callbacks are queued before the queue is flushed, they
        // will be processed by this flush that we are scheduling.
        $$asap$$scheduleFlush();
      }
    };

    var $$asap$$browserGlobal = (typeof window !== 'undefined') ? window : {};
    var $$asap$$BrowserMutationObserver = $$asap$$browserGlobal.MutationObserver || $$asap$$browserGlobal.WebKitMutationObserver;

    // test for web worker but not in IE10
    var $$asap$$isWorker = typeof Uint8ClampedArray !== 'undefined' &&
      typeof importScripts !== 'undefined' &&
      typeof MessageChannel !== 'undefined';

    // node
    function $$asap$$useNextTick() {
      return function() {
        process.nextTick($$asap$$flush);
      };
    }

    function $$asap$$useMutationObserver() {
      var iterations = 0;
      var observer = new $$asap$$BrowserMutationObserver($$asap$$flush);
      var node = document.createTextNode('');
      observer.observe(node, { characterData: true });

      return function() {
        node.data = (iterations = ++iterations % 2);
      };
    }

    // web worker
    function $$asap$$useMessageChannel() {
      var channel = new MessageChannel();
      channel.port1.onmessage = $$asap$$flush;
      return function () {
        channel.port2.postMessage(0);
      };
    }

    function $$asap$$useSetTimeout() {
      return function() {
        setTimeout($$asap$$flush, 1);
      };
    }

    var $$asap$$queue = new Array(1000);

    function $$asap$$flush() {
      for (var i = 0; i < $$asap$$len; i+=2) {
        var callback = $$asap$$queue[i];
        var arg = $$asap$$queue[i+1];

        callback(arg);

        $$asap$$queue[i] = undefined;
        $$asap$$queue[i+1] = undefined;
      }

      $$asap$$len = 0;
    }

    var $$asap$$scheduleFlush;

    // Decide what async method to use to triggering processing of queued callbacks:
    if (typeof process !== 'undefined' && {}.toString.call(process) === '[object process]') {
      $$asap$$scheduleFlush = $$asap$$useNextTick();
    } else if ($$asap$$BrowserMutationObserver) {
      $$asap$$scheduleFlush = $$asap$$useMutationObserver();
    } else if ($$asap$$isWorker) {
      $$asap$$scheduleFlush = $$asap$$useMessageChannel();
    } else {
      $$asap$$scheduleFlush = $$asap$$useSetTimeout();
    }

    function $$$internal$$noop() {}
    var $$$internal$$PENDING   = void 0;
    var $$$internal$$FULFILLED = 1;
    var $$$internal$$REJECTED  = 2;
    var $$$internal$$GET_THEN_ERROR = new $$$internal$$ErrorObject();

    function $$$internal$$selfFullfillment() {
      return new TypeError("You cannot resolve a promise with itself");
    }

    function $$$internal$$cannotReturnOwn() {
      return new TypeError('A promises callback cannot return that same promise.')
    }

    function $$$internal$$getThen(promise) {
      try {
        return promise.then;
      } catch(error) {
        $$$internal$$GET_THEN_ERROR.error = error;
        return $$$internal$$GET_THEN_ERROR;
      }
    }

    function $$$internal$$tryThen(then, value, fulfillmentHandler, rejectionHandler) {
      try {
        then.call(value, fulfillmentHandler, rejectionHandler);
      } catch(e) {
        return e;
      }
    }

    function $$$internal$$handleForeignThenable(promise, thenable, then) {
       $$asap$$default(function(promise) {
        var sealed = false;
        var error = $$$internal$$tryThen(then, thenable, function(value) {
          if (sealed) { return; }
          sealed = true;
          if (thenable !== value) {
            $$$internal$$resolve(promise, value);
          } else {
            $$$internal$$fulfill(promise, value);
          }
        }, function(reason) {
          if (sealed) { return; }
          sealed = true;

          $$$internal$$reject(promise, reason);
        }, 'Settle: ' + (promise._label || ' unknown promise'));

        if (!sealed && error) {
          sealed = true;
          $$$internal$$reject(promise, error);
        }
      }, promise);
    }

    function $$$internal$$handleOwnThenable(promise, thenable) {
      if (thenable._state === $$$internal$$FULFILLED) {
        $$$internal$$fulfill(promise, thenable._result);
      } else if (promise._state === $$$internal$$REJECTED) {
        $$$internal$$reject(promise, thenable._result);
      } else {
        $$$internal$$subscribe(thenable, undefined, function(value) {
          $$$internal$$resolve(promise, value);
        }, function(reason) {
          $$$internal$$reject(promise, reason);
        });
      }
    }

    function $$$internal$$handleMaybeThenable(promise, maybeThenable) {
      if (maybeThenable.constructor === promise.constructor) {
        $$$internal$$handleOwnThenable(promise, maybeThenable);
      } else {
        var then = $$$internal$$getThen(maybeThenable);

        if (then === $$$internal$$GET_THEN_ERROR) {
          $$$internal$$reject(promise, $$$internal$$GET_THEN_ERROR.error);
        } else if (then === undefined) {
          $$$internal$$fulfill(promise, maybeThenable);
        } else if ($$utils$$isFunction(then)) {
          $$$internal$$handleForeignThenable(promise, maybeThenable, then);
        } else {
          $$$internal$$fulfill(promise, maybeThenable);
        }
      }
    }

    function $$$internal$$resolve(promise, value) {
      if (promise === value) {
        $$$internal$$reject(promise, $$$internal$$selfFullfillment());
      } else if ($$utils$$objectOrFunction(value)) {
        $$$internal$$handleMaybeThenable(promise, value);
      } else {
        $$$internal$$fulfill(promise, value);
      }
    }

    function $$$internal$$publishRejection(promise) {
      if (promise._onerror) {
        promise._onerror(promise._result);
      }

      $$$internal$$publish(promise);
    }

    function $$$internal$$fulfill(promise, value) {
      if (promise._state !== $$$internal$$PENDING) { return; }

      promise._result = value;
      promise._state = $$$internal$$FULFILLED;

      if (promise._subscribers.length === 0) {
      } else {
        $$asap$$default($$$internal$$publish, promise);
      }
    }

    function $$$internal$$reject(promise, reason) {
      if (promise._state !== $$$internal$$PENDING) { return; }
      promise._state = $$$internal$$REJECTED;
      promise._result = reason;

      $$asap$$default($$$internal$$publishRejection, promise);
    }

    function $$$internal$$subscribe(parent, child, onFulfillment, onRejection) {
      var subscribers = parent._subscribers;
      var length = subscribers.length;

      parent._onerror = null;

      subscribers[length] = child;
      subscribers[length + $$$internal$$FULFILLED] = onFulfillment;
      subscribers[length + $$$internal$$REJECTED]  = onRejection;

      if (length === 0 && parent._state) {
        $$asap$$default($$$internal$$publish, parent);
      }
    }

    function $$$internal$$publish(promise) {
      var subscribers = promise._subscribers;
      var settled = promise._state;

      if (subscribers.length === 0) { return; }

      var child, callback, detail = promise._result;

      for (var i = 0; i < subscribers.length; i += 3) {
        child = subscribers[i];
        callback = subscribers[i + settled];

        if (child) {
          $$$internal$$invokeCallback(settled, child, callback, detail);
        } else {
          callback(detail);
        }
      }

      promise._subscribers.length = 0;
    }

    function $$$internal$$ErrorObject() {
      this.error = null;
    }

    var $$$internal$$TRY_CATCH_ERROR = new $$$internal$$ErrorObject();

    function $$$internal$$tryCatch(callback, detail) {
      try {
        return callback(detail);
      } catch(e) {
        $$$internal$$TRY_CATCH_ERROR.error = e;
        return $$$internal$$TRY_CATCH_ERROR;
      }
    }

    function $$$internal$$invokeCallback(settled, promise, callback, detail) {
      var hasCallback = $$utils$$isFunction(callback),
          value, error, succeeded, failed;

      if (hasCallback) {
        value = $$$internal$$tryCatch(callback, detail);

        if (value === $$$internal$$TRY_CATCH_ERROR) {
          failed = true;
          error = value.error;
          value = null;
        } else {
          succeeded = true;
        }

        if (promise === value) {
          $$$internal$$reject(promise, $$$internal$$cannotReturnOwn());
          return;
        }

      } else {
        value = detail;
        succeeded = true;
      }

      if (promise._state !== $$$internal$$PENDING) {
        // noop
      } else if (hasCallback && succeeded) {
        $$$internal$$resolve(promise, value);
      } else if (failed) {
        $$$internal$$reject(promise, error);
      } else if (settled === $$$internal$$FULFILLED) {
        $$$internal$$fulfill(promise, value);
      } else if (settled === $$$internal$$REJECTED) {
        $$$internal$$reject(promise, value);
      }
    }

    function $$$internal$$initializePromise(promise, resolver) {
      try {
        resolver(function resolvePromise(value){
          $$$internal$$resolve(promise, value);
        }, function rejectPromise(reason) {
          $$$internal$$reject(promise, reason);
        });
      } catch(e) {
        $$$internal$$reject(promise, e);
      }
    }

    function $$$enumerator$$makeSettledResult(state, position, value) {
      if (state === $$$internal$$FULFILLED) {
        return {
          state: 'fulfilled',
          value: value
        };
      } else {
        return {
          state: 'rejected',
          reason: value
        };
      }
    }

    function $$$enumerator$$Enumerator(Constructor, input, abortOnReject, label) {
      this._instanceConstructor = Constructor;
      this.promise = new Constructor($$$internal$$noop, label);
      this._abortOnReject = abortOnReject;

      if (this._validateInput(input)) {
        this._input     = input;
        this.length     = input.length;
        this._remaining = input.length;

        this._init();

        if (this.length === 0) {
          $$$internal$$fulfill(this.promise, this._result);
        } else {
          this.length = this.length || 0;
          this._enumerate();
          if (this._remaining === 0) {
            $$$internal$$fulfill(this.promise, this._result);
          }
        }
      } else {
        $$$internal$$reject(this.promise, this._validationError());
      }
    }

    $$$enumerator$$Enumerator.prototype._validateInput = function(input) {
      return $$utils$$isArray(input);
    };

    $$$enumerator$$Enumerator.prototype._validationError = function() {
      return new Error('Array Methods must be provided an Array');
    };

    $$$enumerator$$Enumerator.prototype._init = function() {
      this._result = new Array(this.length);
    };

    var $$$enumerator$$default = $$$enumerator$$Enumerator;

    $$$enumerator$$Enumerator.prototype._enumerate = function() {
      var length  = this.length;
      var promise = this.promise;
      var input   = this._input;

      for (var i = 0; promise._state === $$$internal$$PENDING && i < length; i++) {
        this._eachEntry(input[i], i);
      }
    };

    $$$enumerator$$Enumerator.prototype._eachEntry = function(entry, i) {
      var c = this._instanceConstructor;
      if ($$utils$$isMaybeThenable(entry)) {
        if (entry.constructor === c && entry._state !== $$$internal$$PENDING) {
          entry._onerror = null;
          this._settledAt(entry._state, i, entry._result);
        } else {
          this._willSettleAt(c.resolve(entry), i);
        }
      } else {
        this._remaining--;
        this._result[i] = this._makeResult($$$internal$$FULFILLED, i, entry);
      }
    };

    $$$enumerator$$Enumerator.prototype._settledAt = function(state, i, value) {
      var promise = this.promise;

      if (promise._state === $$$internal$$PENDING) {
        this._remaining--;

        if (this._abortOnReject && state === $$$internal$$REJECTED) {
          $$$internal$$reject(promise, value);
        } else {
          this._result[i] = this._makeResult(state, i, value);
        }
      }

      if (this._remaining === 0) {
        $$$internal$$fulfill(promise, this._result);
      }
    };

    $$$enumerator$$Enumerator.prototype._makeResult = function(state, i, value) {
      return value;
    };

    $$$enumerator$$Enumerator.prototype._willSettleAt = function(promise, i) {
      var enumerator = this;

      $$$internal$$subscribe(promise, undefined, function(value) {
        enumerator._settledAt($$$internal$$FULFILLED, i, value);
      }, function(reason) {
        enumerator._settledAt($$$internal$$REJECTED, i, reason);
      });
    };

    var $$promise$all$$default = function all(entries, label) {
      return new $$$enumerator$$default(this, entries, true /* abort on reject */, label).promise;
    };

    var $$promise$race$$default = function race(entries, label) {
      /*jshint validthis:true */
      var Constructor = this;

      var promise = new Constructor($$$internal$$noop, label);

      if (!$$utils$$isArray(entries)) {
        $$$internal$$reject(promise, new TypeError('You must pass an array to race.'));
        return promise;
      }

      var length = entries.length;

      function onFulfillment(value) {
        $$$internal$$resolve(promise, value);
      }

      function onRejection(reason) {
        $$$internal$$reject(promise, reason);
      }

      for (var i = 0; promise._state === $$$internal$$PENDING && i < length; i++) {
        $$$internal$$subscribe(Constructor.resolve(entries[i]), undefined, onFulfillment, onRejection);
      }

      return promise;
    };

    var $$promise$resolve$$default = function resolve(object, label) {
      /*jshint validthis:true */
      var Constructor = this;

      if (object && typeof object === 'object' && object.constructor === Constructor) {
        return object;
      }

      var promise = new Constructor($$$internal$$noop, label);
      $$$internal$$resolve(promise, object);
      return promise;
    };

    var $$promise$reject$$default = function reject(reason, label) {
      /*jshint validthis:true */
      var Constructor = this;
      var promise = new Constructor($$$internal$$noop, label);
      $$$internal$$reject(promise, reason);
      return promise;
    };

    var $$es6$promise$promise$$counter = 0;

    function $$es6$promise$promise$$needsResolver() {
      throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
    }

    function $$es6$promise$promise$$needsNew() {
      throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
    }

    var $$es6$promise$promise$$default = $$es6$promise$promise$$Promise;

    /**
      Promise objects represent the eventual result of an asynchronous operation. The
      primary way of interacting with a promise is through its `then` method, which
      registers callbacks to receive either a promise’s eventual value or the reason
      why the promise cannot be fulfilled.

      Terminology
      -----------

      - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
      - `thenable` is an object or function that defines a `then` method.
      - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
      - `exception` is a value that is thrown using the throw statement.
      - `reason` is a value that indicates why a promise was rejected.
      - `settled` the final resting state of a promise, fulfilled or rejected.

      A promise can be in one of three states: pending, fulfilled, or rejected.

      Promises that are fulfilled have a fulfillment value and are in the fulfilled
      state.  Promises that are rejected have a rejection reason and are in the
      rejected state.  A fulfillment value is never a thenable.

      Promises can also be said to *resolve* a value.  If this value is also a
      promise, then the original promise's settled state will match the value's
      settled state.  So a promise that *resolves* a promise that rejects will
      itself reject, and a promise that *resolves* a promise that fulfills will
      itself fulfill.


      Basic Usage:
      ------------

      ```js
      var promise = new Promise(function(resolve, reject) {
        // on success
        resolve(value);

        // on failure
        reject(reason);
      });

      promise.then(function(value) {
        // on fulfillment
      }, function(reason) {
        // on rejection
      });
      ```

      Advanced Usage:
      ---------------

      Promises shine when abstracting away asynchronous interactions such as
      `XMLHttpRequest`s.

      ```js
      function getJSON(url) {
        return new Promise(function(resolve, reject){
          var xhr = new XMLHttpRequest();

          xhr.open('GET', url);
          xhr.onreadystatechange = handler;
          xhr.responseType = 'json';
          xhr.setRequestHeader('Accept', 'application/json');
          xhr.send();

          function handler() {
            if (this.readyState === this.DONE) {
              if (this.status === 200) {
                resolve(this.response);
              } else {
                reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
              }
            }
          };
        });
      }

      getJSON('/posts.json').then(function(json) {
        // on fulfillment
      }, function(reason) {
        // on rejection
      });
      ```

      Unlike callbacks, promises are great composable primitives.

      ```js
      Promise.all([
        getJSON('/posts'),
        getJSON('/comments')
      ]).then(function(values){
        values[0] // => postsJSON
        values[1] // => commentsJSON

        return values;
      });
      ```

      @class Promise
      @param {function} resolver
      Useful for tooling.
      @constructor
    */
    function $$es6$promise$promise$$Promise(resolver) {
      this._id = $$es6$promise$promise$$counter++;
      this._state = undefined;
      this._result = undefined;
      this._subscribers = [];

      if ($$$internal$$noop !== resolver) {
        if (!$$utils$$isFunction(resolver)) {
          $$es6$promise$promise$$needsResolver();
        }

        if (!(this instanceof $$es6$promise$promise$$Promise)) {
          $$es6$promise$promise$$needsNew();
        }

        $$$internal$$initializePromise(this, resolver);
      }
    }

    $$es6$promise$promise$$Promise.all = $$promise$all$$default;
    $$es6$promise$promise$$Promise.race = $$promise$race$$default;
    $$es6$promise$promise$$Promise.resolve = $$promise$resolve$$default;
    $$es6$promise$promise$$Promise.reject = $$promise$reject$$default;

    $$es6$promise$promise$$Promise.prototype = {
      constructor: $$es6$promise$promise$$Promise,

    /**
      The primary way of interacting with a promise is through its `then` method,
      which registers callbacks to receive either a promise's eventual value or the
      reason why the promise cannot be fulfilled.

      ```js
      findUser().then(function(user){
        // user is available
      }, function(reason){
        // user is unavailable, and you are given the reason why
      });
      ```

      Chaining
      --------

      The return value of `then` is itself a promise.  This second, 'downstream'
      promise is resolved with the return value of the first promise's fulfillment
      or rejection handler, or rejected if the handler throws an exception.

      ```js
      findUser().then(function (user) {
        return user.name;
      }, function (reason) {
        return 'default name';
      }).then(function (userName) {
        // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
        // will be `'default name'`
      });

      findUser().then(function (user) {
        throw new Error('Found user, but still unhappy');
      }, function (reason) {
        throw new Error('`findUser` rejected and we're unhappy');
      }).then(function (value) {
        // never reached
      }, function (reason) {
        // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
        // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
      });
      ```
      If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.

      ```js
      findUser().then(function (user) {
        throw new PedagogicalException('Upstream error');
      }).then(function (value) {
        // never reached
      }).then(function (value) {
        // never reached
      }, function (reason) {
        // The `PedgagocialException` is propagated all the way down to here
      });
      ```

      Assimilation
      ------------

      Sometimes the value you want to propagate to a downstream promise can only be
      retrieved asynchronously. This can be achieved by returning a promise in the
      fulfillment or rejection handler. The downstream promise will then be pending
      until the returned promise is settled. This is called *assimilation*.

      ```js
      findUser().then(function (user) {
        return findCommentsByAuthor(user);
      }).then(function (comments) {
        // The user's comments are now available
      });
      ```

      If the assimliated promise rejects, then the downstream promise will also reject.

      ```js
      findUser().then(function (user) {
        return findCommentsByAuthor(user);
      }).then(function (comments) {
        // If `findCommentsByAuthor` fulfills, we'll have the value here
      }, function (reason) {
        // If `findCommentsByAuthor` rejects, we'll have the reason here
      });
      ```

      Simple Example
      --------------

      Synchronous Example

      ```javascript
      var result;

      try {
        result = findResult();
        // success
      } catch(reason) {
        // failure
      }
      ```

      Errback Example

      ```js
      findResult(function(result, err){
        if (err) {
          // failure
        } else {
          // success
        }
      });
      ```

      Promise Example;

      ```javascript
      findResult().then(function(result){
        // success
      }, function(reason){
        // failure
      });
      ```

      Advanced Example
      --------------

      Synchronous Example

      ```javascript
      var author, books;

      try {
        author = findAuthor();
        books  = findBooksByAuthor(author);
        // success
      } catch(reason) {
        // failure
      }
      ```

      Errback Example

      ```js

      function foundBooks(books) {

      }

      function failure(reason) {

      }

      findAuthor(function(author, err){
        if (err) {
          failure(err);
          // failure
        } else {
          try {
            findBoooksByAuthor(author, function(books, err) {
              if (err) {
                failure(err);
              } else {
                try {
                  foundBooks(books);
                } catch(reason) {
                  failure(reason);
                }
              }
            });
          } catch(error) {
            failure(err);
          }
          // success
        }
      });
      ```

      Promise Example;

      ```javascript
      findAuthor().
        then(findBooksByAuthor).
        then(function(books){
          // found books
      }).catch(function(reason){
        // something went wrong
      });
      ```

      @method then
      @param {Function} onFulfilled
      @param {Function} onRejected
      Useful for tooling.
      @return {Promise}
    */
      then: function(onFulfillment, onRejection) {
        var parent = this;
        var state = parent._state;

        if (state === $$$internal$$FULFILLED && !onFulfillment || state === $$$internal$$REJECTED && !onRejection) {
          return this;
        }

        var child = new this.constructor($$$internal$$noop);
        var result = parent._result;

        if (state) {
          var callback = arguments[state - 1];
          $$asap$$default(function(){
            $$$internal$$invokeCallback(state, child, callback, result);
          });
        } else {
          $$$internal$$subscribe(parent, child, onFulfillment, onRejection);
        }

        return child;
      },

    /**
      `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
      as the catch block of a try/catch statement.

      ```js
      function findAuthor(){
        throw new Error('couldn't find that author');
      }

      // synchronous
      try {
        findAuthor();
      } catch(reason) {
        // something went wrong
      }

      // async with promises
      findAuthor().catch(function(reason){
        // something went wrong
      });
      ```

      @method catch
      @param {Function} onRejection
      Useful for tooling.
      @return {Promise}
    */
      'catch': function(onRejection) {
        return this.then(null, onRejection);
      }
    };

    var $$es6$promise$polyfill$$default = function polyfill() {
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
          return $$utils$$isFunction(resolve);
        }());

      if (!es6PromiseSupport) {
        local.Promise = $$es6$promise$promise$$default;
      }
    };

    var es6$promise$umd$$ES6Promise = {
      'Promise': $$es6$promise$promise$$default,
      'polyfill': $$es6$promise$polyfill$$default
    };

    /* global define:true module:true window: true */
    if (typeof define === 'function' && define['amd']) {
      define(function() { return es6$promise$umd$$ES6Promise; });
    } else if (typeof module !== 'undefined' && module['exports']) {
      module['exports'] = es6$promise$umd$$ES6Promise;
    } else if (typeof this !== 'undefined') {
      this['ES6Promise'] = es6$promise$umd$$ES6Promise;
    }
}).call(this);
}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"_process":3}],3:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canMutationObserver = typeof window !== 'undefined'
    && window.MutationObserver;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    var queue = [];

    if (canMutationObserver) {
        var hiddenDiv = document.createElement("div");
        var observer = new MutationObserver(function () {
            var queueList = queue.slice();
            queue.length = 0;
            queueList.forEach(function (fn) {
                fn();
            });
        });

        observer.observe(hiddenDiv, { attributes: true });

        return function nextTick(fn) {
            if (!queue.length) {
                hiddenDiv.setAttribute('yes', 'no');
            }
            queue.push(fn);
        };
    }

    if (canPost) {
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
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],4:[function(require,module,exports){
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

var fixChromeStatsResponse = function(response) {
  var standardReport = {};
  var reports = response.result();
  reports.forEach(function(report) {
    var standardStats = {
      id: report.id,
      timestamp: report.timestamp,
      type: report.type
    };
    report.names().forEach(function(name) {
      standardStats[name] = report.stat(name);
    });
    standardReport[standardStats.id] = standardStats;
  });

  return standardReport;
};

var sessionHasData = function(desc) {
  if (!desc) {
    return false;
  }
  var hasData = false;
  var prefix = 'm=application';
  desc.sdp.split('\n').forEach(function(line) {
    if (line.slice(0, prefix.length) === prefix) {
      hasData = true;
    }
  });
  return hasData;
};

// Unify PeerConnection Object.
if (typeof RTCPeerConnection !== 'undefined') {
  myRTCPeerConnection = RTCPeerConnection;
} else if (typeof mozRTCPeerConnection !== 'undefined') {
  myRTCPeerConnection = function (configuration, constraints) {
    // Firefox uses 'url' rather than 'urls' for RTCIceServer.urls
    var pc = new mozRTCPeerConnection(renameIceURLs(configuration), constraints);

    // Firefox doesn't fire 'onnegotiationneeded' when a data channel is created
    // https://bugzilla.mozilla.org/show_bug.cgi?id=840728
    var dataEnabled = false;
    var boundCreateDataChannel = pc.createDataChannel.bind(pc);
    pc.createDataChannel = function(label, dataChannelDict) {
      var dc = boundCreateDataChannel(label, dataChannelDict);
      if (!dataEnabled) {
        dataEnabled = true;
        if (pc.onnegotiationneeded &&
            !sessionHasData(pc.localDescription) &&
            !sessionHasData(pc.remoteDescription)) {
          var event = new Event('negotiationneeded');
          pc.onnegotiationneeded(event);
        }
      }
      return dc;
    };

    return pc;
  };
} else if (typeof webkitRTCPeerConnection !== 'undefined') {
  // Chrome returns a nonstandard, non-JSON-ifiable response from getStats.
  myRTCPeerConnection = function(configuration, constraints) {
    var pc = new webkitRTCPeerConnection(configuration, constraints);
    var boundGetStats = pc.getStats.bind(pc);
    pc.getStats = function(selector, successCallback, failureCallback) {
      var successCallbackWrapper = function(chromeStatsResponse) {
        successCallback(fixChromeStatsResponse(chromeStatsResponse));
      };
      // Chrome also takes its arguments in the wrong order.
      boundGetStats(successCallbackWrapper, failureCallback, selector);
    };
    return pc;
  };
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

},{}],5:[function(require,module,exports){
(function (process){
/*globals process, console */
/*jslint indent:2,sloppy:true, node:true */
var util = require('../../src/util');

/**
 * A freedom.js logging provider that logs to chrome, firefox, and node consoles.
 * @Class Logger_console
 * @constructor
 * @private
 * @param {config: Object} cap Capabilities - console requires global config.
 */
var Logger_console = function (cap) {
  this.level = (cap.config && cap.config.debug) || 'log';
  this.console = (cap.config && cap.config.global.console);
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
    // Firefox in JSM context.
    // see: http://mxr.mozilla.org/mozilla-release/source/toolkit/devtools/Console.jsm
    } else if (this.console.maxLogLevel && source) {
      if (!this.console.freedomDump) {
        this.console.freedomDump = this.console.dump;
        this.console.dump = function() {};
      }
      this.console.freedomDump('{' + source + '}.' + severity + ': ' +
          arr.join(' ') + '\n');
      arr.unshift(source.toUpperCase());
  // Firefox in browser context.
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
exports.flags = {config: true};

}).call(this,require('_process'))

},{"../../src/util":34,"_process":3}],6:[function(require,module,exports){
/*globals console */
/*jslint indent:2,white:true,sloppy:true, node:true */
var util = require('../../src/util');

/**
 * A minimal provider implementing the core.echo interface for interaction with
 * custom channels.  Primarily used for testing the robustness of the custom
 * channel implementation.
 * @Class Echo_unprivileged
 * @constructor
 * @param {module:Module} cap The module creating this provider.
 */
var Echo_unprivileged = function(cap, dispatchEvent) {
  this.mod = cap.module;
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
exports.flags = {module: true};

},{"../../src/util":34}],7:[function(require,module,exports){
/*globals console */
/*jslint indent:2,white:true,sloppy:true,node:true */

/**
 * An oAuth meta-provider allowing multiple platform-dependant
 * oAuth implementations to serve as the redirectURL for an oAuth flow.
 * The core implementations are provided in providers/oauth, and are
 * supplemented in platform-dependent repositories.
 *
 */
var OAuth = function (handlers, cap, dispatchEvent) {
  this.handlers = handlers;
  this.dispatchEvent = dispatchEvent;
  this.ongoing = {};
};

/**
 * Register oAuth handlers.
 * This method should be called before provider is used, and binds the current
 * oAuth provider to be associated with registered handlers. This is used so
 * that handlers which are registered by the user apply only the the freedom()
 * setup call they are associated with, while still being registered across
 * multiple instances of OAuth providers.
 *
 * @method register
 * @param {[constructor]} handlers
 * @private
 */
OAuth.register = function (handlers) {
  var i,
      boundHandlers = [];
  if (!handlers || !handlers.length) {
    return OAuth.reset();
  }

  for (i = 0; i < handlers.length; i += 1) {
    boundHandlers.push(new handlers[i]());
  }
  exports.provider = OAuth.bind(this, boundHandlers);
};

/**
 * Reset the oAuth provider registrations.
 * @method reset
 * @private
 */
OAuth.reset = function () {
  exports.provider = OAuth.bind(this, []);
};

/**
 * Indicate the intention to initiate an oAuth flow, allowing an appropriate
 * oAuth provider to begin monitoring for redirection.
 *
 * @method initiateOAuth
 * @param {string[]} redirectURIs - oAuth redirection URIs registered with the
 *     provider.
 * @param {Function} continuation - Function to call when complete
 *    Expected to see a value of schema: {{redirect:String, state:String}}
 *    where 'redirect' is the chosen redirect URI
 *    and 'state' is the state to pass to the URI on completion of oAuth
 */
OAuth.prototype.initiateOAuth = function (redirectURIs, continuation) {
  var promise, i, successCallback;
  successCallback = function(result) {
    this.ongoing[result.state] = this.handlers[i];
    continuation(result);
  }.bind(this);

  for (i = 0; i < this.handlers.length; i += 1) {
    if (this.handlers[i].initiateOAuth(redirectURIs, successCallback)) {
      return;
    }
  }
  //If here, we have no compatible providers
  continuation(null, {
    'errcode': 'UNKNOWN',
    'message': 'No requested redirects can be handled.'
  });
  return;
};

/**
 * oAuth client-side flow - launch the provided URL
 * This must be called after initiateOAuth with the returned state object
 *
 * @method launchAuthFlow
 * @param {String} authUrl - The URL that initiates the auth flow.
 * @param {Object.<string, string>} stateObj - The return value from initiateOAuth
 * @param {Function} continuation - Function to call when complete
 *    Expected to see a String value that is the response Url containing the access token
 */
OAuth.prototype.launchAuthFlow = function(authUrl, stateObj, continuation) {
  if (!this.ongoing.hasOwnProperty(stateObj.state)) {
    continuation(undefined, {
      'errcode': 'UNKNOWN',
      'message': 'You must begin the oAuth flow with initiateOAuth first'
    });
    return;
  }

  this.ongoing[stateObj.state].launchAuthFlow(authUrl, stateObj, continuation);
  delete this.ongoing[stateObj.state];
};

exports.register = OAuth.register;
exports.reset = OAuth.reset;
exports.provider = OAuth.bind(this, []);
exports.name = 'core.oauth';

},{}],8:[function(require,module,exports){
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
  this.freedomModule = portModule.module;

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
exports.flags = {module: true};

},{}],9:[function(require,module,exports){
/*jslint indent:2,sloppy:true, node:true */

var util = require('../../src/util');

var unAttachedChannels = {};
var allocateChannel = function (dataChannel) {
  var id = util.getId();
  unAttachedChannels[id] = dataChannel;
  return id;
};

var RTCDataChannelAdapter = function (cap, dispatchEvents, id) {
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

},{"../../src/util":34,"./core.rtcpeerconnection":10}],10:[function(require,module,exports){
/*jslint indent:2,sloppy:true, node:true */

var adapter = require('webrtc-adapter');
var PromiseCompat = require('es6-promise').Promise;
var RTCPeerConnection = adapter.RTCPeerConnection;
var RTCSessionDescription = adapter.RTCSessionDescription;
var RTCIceCandidate = adapter.RTCIceCandidate;

var DataChannel = require('./core.rtcdatachannel');

var RTCPeerConnectionAdapter = function (cap, dispatchEvent, configuration) {
  this.dispatchEvent = dispatchEvent;
  try {
    this.connection = new RTCPeerConnection(configuration);
  } catch (e) {
    // Note: You can't ask the provider to close you synchronously, since
    // the constructor has not yet returned, so there's no 'this' that
    // the provider can know about yet.
    setTimeout(cap.provider.close.bind(cap.provider, this), 0);
    return;
  }

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

RTCPeerConnectionAdapter.prototype.createOffer = function (constraints) {
  return new PromiseCompat(function (resolve, reject) {
    this.connection.createOffer(resolve, reject, constraints);
  }.bind(this));
};

RTCPeerConnectionAdapter.prototype.createAnswer = function () {
  return new PromiseCompat(function (resolve, reject) {
    this.connection.createAnswer(resolve, reject);
  }.bind(this));
};

RTCPeerConnectionAdapter.prototype.setLocalDescription = function (description) {
  return new PromiseCompat(function (resolve, reject) {
    this.connection.setLocalDescription(new RTCSessionDescription(description),
      resolve,
      reject);
  }.bind(this));
};

RTCPeerConnectionAdapter.prototype.getLocalDescription = function () {
  return PromiseCompat.resolve(this.connection.localDescription);
};

RTCPeerConnectionAdapter.prototype.setRemoteDescription = function (description) {
  return new PromiseCompat(function (resolve, reject) {
    this.connection.setRemoteDescription(new RTCSessionDescription(description),
      resolve,
      reject);
  }.bind(this));
};

RTCPeerConnectionAdapter.prototype.getRemoteDescription = function () {
  return PromiseCompat.resolve(this.connection.remoteDescription);
};

RTCPeerConnectionAdapter.prototype.getSignalingState = function () {
  return PromiseCompat.resolve(this.connection.signalingState);
};

RTCPeerConnectionAdapter.prototype.updateIce = function (configuration) {
  this.connection.updateIce(configuration);
  return PromiseCompat.resolve();
};

RTCPeerConnectionAdapter.prototype.addIceCandidate = function (candidate) {
  return new PromiseCompat(function (resolve, reject) {
    this.connection.addIceCandidate(new RTCIceCandidate(candidate),
      resolve,
      reject);
  }.bind(this));
};

RTCPeerConnectionAdapter.prototype.getIceGatheringState = function () {
  return PromiseCompat.resolve(this.connection.iceGatheringState);
};

RTCPeerConnectionAdapter.prototype.getIceConnectionState = function () {
  return PromiseCompat.resolve(this.connection.iceConnectionState);
};

RTCPeerConnectionAdapter.prototype.getConfiguration = function () {
  var configuration = this.connection.getConfiguration();
  return PromiseCompat.resolve(configuration);
};

RTCPeerConnectionAdapter.prototype.getLocalStreams = function () {
  return PromiseCompat.reject({
    errcode: -1,
    message: "Not Implemented"
  });
};

RTCPeerConnectionAdapter.prototype.getRemoteStreams = function () {
  return PromiseCompat.reject({
    errcode: -1,
    message: "Not Implemented"
  });
};

RTCPeerConnectionAdapter.prototype.getStreamById = function (id) {
  return PromiseCompat.reject({
    errcode: -1,
    message: "Not Implemented"
  });
};

RTCPeerConnectionAdapter.prototype.addStream = function (id) {
  return PromiseCompat.reject({
    errcode: -1,
    message: "Not Implemented"
  });
};

RTCPeerConnectionAdapter.prototype.removeStream = function (id) {
  return PromiseCompat.reject({
    errcode: -1,
    message: "Not Implemented"
  });
};

RTCPeerConnectionAdapter.prototype.close = function () {
  if (!this.connection) {
    return PromiseCompat.resolve();
  }
  this.manageEvents(false);
  try {
    this.connection.close();
    return PromiseCompat.resolve();
  } catch (e) {
    return PromiseCompat.reject({
      errcode: e.name,
      message: e.message
    });
  }
};

RTCPeerConnectionAdapter.prototype.createDataChannel = function (label, dataChannelDict) {
  var id = DataChannel.allocate(this.connection.createDataChannel(label, dataChannelDict));
  return PromiseCompat.resolve(id);
};

RTCPeerConnectionAdapter.prototype.getStats = function (selector) {
  return new PromiseCompat(function (resolve, reject) {
    this.connection.getStats(selector, resolve, reject);
  }.bind(this));
};

RTCPeerConnectionAdapter.prototype.ondatachannel = function (event) {
  var id = DataChannel.allocate(event.channel);
  this.dispatchEvent('ondatachannel', {channel: id});
};

RTCPeerConnectionAdapter.prototype.onnegotiationneeded = function (event) {
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
exports.style = "providePromises";
exports.flags = {provider: true};

},{"./core.rtcdatachannel":9,"es6-promise":2,"webrtc-adapter":4}],11:[function(require,module,exports){
/*globals localStorage */
/*jslint indent:2,sloppy:true,node:true */
var util = require('../../src/util');

/**
 * A FreeDOM core.storage provider that depends on localStorage
 * Thus, this only works in the context of a webpage and has
 * some size limitations.
 * Note that this can conflict with other scripts using localStorage
 * as keys are raw
 * @Class Storage_unprivileged
 * @constructor
 * @private
 * @param {Object} cap Capabilities for the provider
 */
var Storage_unprivileged = function (cap, dispatchEvent) {
  util.handleEvents(this);
};

/**
 * Lists keys in the storage repository
 * @method keys
 */
Storage_unprivileged.prototype.keys = function (continuation) {
  var result = [],
    i;
  for (i = 0; i < localStorage.length; i += 1) {
    result.push(localStorage.key(i));
  }
  continuation(result);
};

/**
 * Get a key from the storage repository.
 * @param {String} key The item to get from storage.
 * @method get
 */
Storage_unprivileged.prototype.get = function (key, continuation) {
  try {
    var val = localStorage.getItem(key);
    continuation(val);
  } catch (e) {
    continuation(null);
  }
};

/**
 * Set a key in the storage repository.
 * @param {String} key The item to save in storage.
 * @param {String} value The value to save in storage.
 * @method set
 */
Storage_unprivileged.prototype.set = function (key, value, continuation) {
  var ret = localStorage.getItem(key);
  localStorage.setItem(key, value);
  continuation(ret);
};

/**
 * Remove a key from the storage repository.
 * @param {String} key The item to remove from storage;
 * @method remove
 */
Storage_unprivileged.prototype.remove = function (key, continuation) {
  var ret = localStorage.getItem(key);
  localStorage.removeItem(key);
  continuation(ret);
};

/**
 * Reset the contents of the storage repository.
 * @method clear
 */
Storage_unprivileged.prototype.clear = function (continuation) {
  localStorage.clear();
  continuation();
};

exports.provider = Storage_unprivileged;
exports.name = 'core.storage';

},{"../../src/util":34}],12:[function(require,module,exports){
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
  this.manager = manager.module;
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
exports.flags = {module: true};

},{"../../src/consumer":19,"../../src/proxy/eventInterface":31,"../../src/util":34}],13:[function(require,module,exports){
/*globals document */
/*jslint indent:2,sloppy:true,node:true */
var util = require('../../src/util');
var PromiseCompat = require('es6-promise').Promise;

/**
 * A freedom.js view is the interface for user interaction.
 * A view exists as an iFrame, which is shown to the user in some way.
 * communication between the view and the freedom.js module is performed
 * through the HTML5 postMessage mechanism, which this provider translates
 * to freedom.js message events.
 * @Class View_unprivileged
 * @constructor
 * @private
 * @param {View Provider} provider
 * @param {provider:Provider,module:Module} cap The instantiator of the view.
 * @param {Function} dispatchEvent Function to call to emit events.
 */
var Core_View = function (provider, cap, dispatchEvent) {
  this.provider = provider;
  this.dispatchEvent = dispatchEvent;
  setTimeout(cap.provider.onClose.bind(
    cap.provider,
    this,
    this.close.bind(this, function () {})
  ), 0);
  this.module = cap.module;
  util.handleEvents(this);
};

/**
 * The is the default provider for core.view, unless overridden by context or
 * a user supplied provider. The interface is documented at:
 * https://github.com/freedomjs/freedom/wiki/freedom.js-Views
 *
 * Generally, a view provider consists of 3 methods:
 * onOpen is called when a view should be shown.
 *     id - is a unique identifier for this view, used on subsequent calls
 *          for communication and to eventually close the view.
 *     name - is the name of the view (as defined in the manifest),
 *            in order to place it appropriately.
 *     page - is the resolved URL to open.
 *     resources - is an array of resolved URLs which are referenced.
 *     postMessage - is a function to call when messages are emitted
 *                   by the window in which the view is opened.
 * onOpen returns a promise that completes when the view is loaded.
 * onMessage is called to send a message to an open view.
 *     id - is the unique identifier for the open view.
 *     message - is the message to postMessage to the view's window.
 * onClose is called to close a view.
 *     id - is the unique identifier for the view.
 */
Core_View.provider = {
  listener: undefined,
  active: {},
  onOpen: function (id, name, page, resources, postMessage) {
    var container = document.body,
      root,
      frame;
    
    if (!this.listener) {
      this.listener = function (msg) {
        var i;
        for (i in this.active) {
          if (this.active.hasOwnProperty(i) &&
              this.active[i].source === msg.source) {
            this.active[i].postMessage(msg.data);
          }
        }
      }.bind(this);
      window.addEventListener('message', this.listener, true);
    }

    // Views open by default in an element with their ID, or fill the page
    // otherwise.
    if (document.getElementById(name)) {
      container = document.getElementById(name);
    }

    root = document.createElement("div");
    root.style.width = "100%";
    root.style.height = "100%";
    root.style.display = "relative";

    container.appendChild(root);
    
    return new PromiseCompat(function (resolve, reject) {
      frame = document.createElement("iframe");
      frame.setAttribute("sandbox", "allow-scripts allow-forms");
      frame.style.width = "100%";
      frame.style.height = "100%";
      frame.style.border = "0";
      frame.style.background = "transparent";
      frame.src = page;
      frame.addEventListener('load', resolve, true);
      frame.addEventListener('error', reject, true);

      root.appendChild(frame);

      this.active[id] = {
        postMessage: postMessage,
        container: container,
        root: root,
        source: frame.contentWindow
      };
    }.bind(this));
  },
  onMessage: function (id, message) {
    this.active[id].source.postMessage(message, '*');
  },
  onClose: function (id) {
    this.active[id].container.removeChild(this.active[id].root);
    delete this.active[id];
    
    if (Object.keys(this.active).length === 0) {
      window.removeEventListener('message', this.listener, true);
      this.listener = undefined;
    }
  }
};

/**
 * Ask for this view to open a specific location, either a File relative to
 * the loader, or an explicit code location.
 * @method show
 * @param {String} name The identifier of the view.
 * @param {Function} continuation Function to call when view is loaded.
 */
Core_View.prototype.show = function (name, continuation) {
  if (this.id) {
    return continuation(undefined, {
      errcode: 'ALREADY_OPEN',
      message: 'Cannot show multiple views through one instance.'
    });
  }
  this.id = util.getId();

  var config = this.module.manifest.views,
    toResolve = [];
  if (!config || !config[name]) {
    return continuation(undefined, {
      errcode: 'NON_EXISTANT',
      message: 'View not found: ' + name
    });
  }

  if (config[name].main && config[name].files) {
    toResolve = config[name].files.concat(config[name].main);
    PromiseCompat.all(toResolve.map(function (fname) {
      return this.module.resource.get(this.module.manifestId, fname);
    }.bind(this))).then(function (files) {
      this.provider.onOpen(this.id,
          name,
          files[files.length - 1],
          files,
          this.dispatchEvent.bind(this, 'message')).then(
        function (c) {
          // Make sure continuation is called without an argument.
          c();
        }.bind({}, continuation),
        continuation.bind({}, undefined)
      );
    }.bind(this), function (err) {
      this.module.debug.error('Unable to open view ' + name + ': ', err);
      continuation(undefined, {
        errcode: 'VIEW_MALFORMED',
        message: 'Malformed View Declaration: ' + err
      });
    });
  } else {
    continuation(undefined, {
      errcode: 'NON_EXISTANT',
      message: 'View not found: ' + name
    });
  }
};

/**
 * isSecure determines whether the module can have confidence that its
 * communication with its view cannot be intercepted by an untrusted 3rd party.
 * In practice, this means that its okay for the runtime to have access to the
 * messages, and if the context is a web server or a browser extension then
 * that context is trusted. However, if a provider wants to allow their e.g.
 * social provider to be used on arbitrary websites, this mechanism means that
 * if the website uses a trusted version of the freedom.js library, then the
 * module can be used.
 * @method isSecure
 * @returns {Boolean} if the channel to the view is secure.
 */
Core_View.prototype.isSecure = function (continuation) {
  continuation(false);
};

/**
 * Send a message to an open view.
 * @method postMessage
 */
Core_View.prototype.postMessage = function (msg, continuation) {
  if (!this.id) {
    return continuation(undefined, {
      errcode: 'NOT_OPEN',
      message: 'Cannot post message to uninitialized view.'
    });
  }
  this.provider.onMessage(this.id, msg);
  continuation();
};

/**
 * Close an active view.
 * @method close
 */
Core_View.prototype.close = function (continuation) {
  if (!this.id) {
    return continuation(undefined, {
      errcode: 'NOT_OPEN',
      message: 'Cannot close uninitialized view.'
    });
  }
  this.provider.onClose(this.id);
  delete this.id;

  continuation();
};


/**
 * Allow a web page to redefine behavior for how views are shown.
 * @method register
 * @static
 * @param {Function} PageProvider The custom view behavior.
 */
Core_View.register = function (PageProvider) {
  var provider = PageProvider ? new PageProvider() : Core_View.provider;
  exports.provider = Core_View.bind(this, provider);
};

exports.provider = Core_View.bind(this, Core_View.provider);
exports.name = 'core.view';
exports.register = Core_View.register;
exports.flags = {provider: true, module: true};

},{"../../src/util":34,"es6-promise":2}],14:[function(require,module,exports){
/*globals WebSocket, ArrayBuffer, Blob, Uint8Array, console */
/*jslint sloppy:true, node:true */

var WSHandle = null;
var nodeStyle = false;

/**
 * A WebSocket core provider
 *
 * @param {Object} cap Capabilities for the provider
 * @param {Function} dispatchEvent Function to dispatch events.
 * @param {String} url The Remote URL to connect with.
 * @param {String[]} protocols SubProtocols to open.
 * @param {WebSocket?} socket An alternative socket class to use.
 */
var WS = function (cap, dispatchEvent, url, protocols, socket) {
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
exports.setSocket = function (impl, isNode) {
  WSHandle = impl;
  nodeStyle = isNode;
};

},{}],15:[function(require,module,exports){
/*jslint indent:2,browser:true, node:true */
var PromiseCompat = require('es6-promise').Promise;

var oAuthRedirectId = 'freedom.oauth.redirect.handler';

var loadedOnStartup = false;
/**
 * If there is redirection back to the page, and oAuthRedirectID is set,
 * then report the auth and close the window.
 */
if (typeof window !== 'undefined' && window && window.location &&
    window.addEventListener) {
  window.addEventListener('load', function () {
    "use strict";
    loadedOnStartup = true;
  }, true);

  if (window.localStorage &&
      window.location.href.indexOf(oAuthRedirectId) > 0) {
    // This will trigger a 'storage' event on the window. See storageListener
    window.localStorage.setItem(oAuthRedirectId, new Date());
    window.close();
  }
}

var LocalPageAuth = function() {
  "use strict";
  this.listeners = {};
};

/**
 * Indicate the intention to initiate an oAuth flow, allowing an appropriate
 * oAuth provider to begin monitoring for redirection.
 *
 * @method initiateOAuth
 * @param {string[]} redirectURIs - oAuth redirection URIs registered with the
 *     provider.
 * @param {Function} continuation - Function to call when complete
 *    Expected to see a value of schema: {{redirect:String, state:String}}
 *    where 'redirect' is the chosen redirect URI
 *    and 'state' is the state to pass to the URI on completion of oAuth
 * @return {Boolean} true if can handle, false otherwise
 */
LocalPageAuth.prototype.initiateOAuth = function(redirectURIs, continuation) {
  "use strict";
  if (typeof window !== 'undefined' && window && loadedOnStartup) {
    var here = window.location.protocol + "//" + window.location.host +
        window.location.pathname;
    if (redirectURIs.indexOf(here) > -1) {
      continuation({
        redirect: here,
        state: oAuthRedirectId + Math.random()
      });
      return true;
    }
  }

  return false;
};

/**
 * oAuth client-side flow - launch the provided URL
 * This must be called after initiateOAuth with the returned state object
 *
 * @method launchAuthFlow
 * @param {String} authUrl - The URL that initiates the auth flow.
 * @param {Object.<string, string>} stateObj - The return value from initiateOAuth
 * @param {Function} continuation - Function to call when complete
 *    Expected to see a String value that is the response Url containing the access token
 */
LocalPageAuth.prototype.launchAuthFlow = function(authUrl, stateObj, continuation) {
  "use strict";
  var listener = this.storageListener.bind(this, continuation, stateObj);
  this.listeners[stateObj.state] = listener;
  window.addEventListener("storage", listener, false);
  // Start 'er up
  window.open(authUrl);
};

/**
 * Handler for storage events, which relays them to waiting clients.
 * For the schema of the storage msg, see:
 * http://tutorials.jenkov.com/html5/local-storage.html#storage-events
 * @param {Function} continuation function to call with result
 * @param {Object.<string, string>} stateObj the return value from initiateOAuth
 * @param {Object} msg storage event
 */
LocalPageAuth.prototype.storageListener = function(continuation, stateObj, msg) {
  'use strict';
  if (msg.url.indexOf(stateObj.state) > -1) {
    window.removeEventListener("storage", this.listeners[stateObj.state], false);
    delete this.listeners[stateObj.state];
    continuation(msg.url);
  }
};

/**
 * If we have a local domain, and freedom.js is loaded at startup, we can use
 * the local page as a redirect URI.
 */
module.exports = LocalPageAuth;

},{"es6-promise":2}],16:[function(require,module,exports){
(function (global){
/*jslint indent:2,browser:true, node:true */
var PromiseCompat = require('es6-promise').Promise;

var oAuthRedirectId = 'freedom.oauth.redirect.handler';

function RemotePageAuth() {
  "use strict";
  this.listeners = {};
}

/**
 * Indicate the intention to initiate an oAuth flow, allowing an appropriate
 * oAuth provider to begin monitoring for redirection.
 *
 * @method initiateOAuth
 * @param {string[]} redirectURIs - oAuth redirection URIs registered with the
 *     provider.
 * @param {Function} continuation - Function to call when complete
 *    Expected to see a value of schema: {{redirect:String, state:String}}
 *    where 'redirect' is the chosen redirect URI
 *    and 'state' is the state to pass to the URI on completion of oAuth
 * @return {Boolean} true if can handle, false otherwise
 */
RemotePageAuth.prototype.initiateOAuth = function(redirectURIs, continuation) {
  "use strict";
  if (typeof global !== 'undefined' && global && global.document) {
    for (var i=0; i<redirectURIs.length; i++) {
      // TODO: remove restriction on URL pattern match.
      if ((redirectURIs[i].indexOf('http://') === 0 ||
          redirectURIs[i].indexOf('https://') === 0) &&
          redirectURIs[i].indexOf('oauth-relay.html') > 0) {
        continuation({
          redirect: redirectURIs[i],
          state: oAuthRedirectId + Math.random()
        });
        return true;
      }
    }
  }
  return false;
};

/**
 * oAuth client-side flow - launch the provided URL
 * This must be called after initiateOAuth with the returned state object
 *
 * @method launchAuthFlow
 * @param {String} authUrl - The URL that initiates the auth flow.
 * @param {Object.<string, string>} stateObj - The return value from initiateOAuth
 * @param {Function} continuation - Function to call when complete
 *    Expected to see a String value that is the response Url containing the access token
 */
RemotePageAuth.prototype.launchAuthFlow = function(authUrl, stateObj, continuation) {
  "use strict";
  var frame = global.document.createElement('iframe');
  frame.src = stateObj.redirect;
  frame.style.display = 'none';

  global.document.body.appendChild(frame);
  frame.addEventListener('load', function () {
    this.listeners[stateObj.state] = continuation;
    window.open(authUrl);

    frame.contentWindow.postMessage(stateObj.state, '*');
  }.bind(this));

  window.addEventListener('message', function (frame, msg) {
    if (msg.data && msg.data.key && msg.data.url && this.listeners[msg.data.key]) {
      this.listeners[msg.data.key](msg.data.url);
      delete this.listeners[msg.data.key];
      try {
        document.body.removeChild(frame);
      } catch (e) {
        console.warn(e);
      }
    }
  }.bind(this, frame), false);
};

/**
 * If we have a local domain, and freedom.js is loaded at startup, we can use
 * the local page as a redirect URI.
 */
module.exports = RemotePageAuth;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"es6-promise":2}],17:[function(require,module,exports){
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
 * @param {Object?} flags Prefixed arguments needed by the core provider.
 *   valid keys are 'module', 'provider', and 'config'.
 */
Api.prototype.register = function(name, constructor, style, flags) {
  var i,
    args;

  this.providers[name] = {
    constructor: constructor,
    style: style || 'provideAsynchronous',
    flags: flags || {}
  };

  if (this.waiters[name]) {
    for (i = 0; i < this.waiters[name].length; i += 1) {
      args = {};
      if (flags.module) {
        args.module = this.waiters[name][i].from;
      }
      if (flags.config) {
        args.config = this.waiters[name][i].from.config;
      }
      this.waiters[name][i].resolve({
        args: args,
        inst: constructor.bind({}, args)
      });
    }
    delete this.waiters[name];
  }
};

/**
 * Get a core API connected to a given FreeDOM module.
 * @method getCore
 * @param {String} name the API to retrieve.
 * @param {Module} from The instantiating App.
 * @returns {Promise} A promise of a fdom.App look-alike (and argument object),
 * matching a local API definition.
 */
Api.prototype.getCore = function(name, from) {
  return new PromiseCompat(function(resolve, reject) {
    if (this.apis[name]) {
      if (this.providers[name]) {
        var args = {};
        if (this.providers[name].flags.module) {
          args.module = from;
        }
        if (this.providers[name].flags.config) {
          args.config = from.config;
        }
        resolve({
          args: args,
          inst: this.providers[name].constructor.bind({}, args)
        });
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
 * Configure a {Provider} to provide a named core api on behalf of a
 * given port.
 * @param {String} name The name of the provider
 * @param {Provider} provider The provider that will provide the named api
 * @param {Module} from The module requesting the core provider.
 */
Api.prototype.provideCore = function (name, provider, from) {
  return this.getCore(name, from).then(function (core) {
    var flags = this.providers[name].flags,
      iface = provider.getProxyInterface();
    if (flags.provider) {
      core.args.provider = iface;
    }
    iface()[this.providers[name].style](core.inst);
  }.bind(this), function (err) {
    this.debug.error('Could not provide core: ', err);
  }.bind(this));
};

/**
 * Shutdown the API registry, and reject any pending waiters.
 */
Api.prototype.cleanup = function () {
  var prop,
    doReject = function (waiter) {
      waiter.reject();
    };
  for (prop in this.waiters) {
    if (this.waiters.hasOwnProperty(prop)) {
      this.waiters[prop].forEach(doReject);
    }
  }
  delete this.waiters;
};

/**
 * Defines the apis module and provider registry.
 */
module.exports = Api;

},{"es6-promise":2}],18:[function(require,module,exports){
/*jslint indent:2,node:true */

var Bundle = function () {
  'use strict';
  this.interfaces = require('../dist/bundle.compiled');
};

/**
 * Populate an API registry with provided providers, and with known API
 * definitions.
 * @static
 * @method register
 * @param {{name: string, provider: Function, style?: string}[]} providers
 *   The core providers made available to this freedom.js instance.
 * @param {Api} registry The API registry to populate.
 */
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
      registry.register(provider.name,
                        provider.provider,
                        provider.style,
                        provider.flags);
    }
  });
};

},{"../dist/bundle.compiled":1}],19:[function(require,module,exports){
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
 * Attach an 'onEvent' listener to an interface, allowing external consumers
 * to either listen to channel state, or register callbacks on lifetime events
 * of individual instances of the interface.
 * @method getListener
 * @parma {String} name The event to listen to.
 * @private
 */
Consumer.prototype.getListener = function (name) {
  return function (instance, handler) {
    // Listen to the channel directly.
    if (typeof instance === 'function' && handler === undefined) {
      this.once(name, instance);
      return;
    }

    // Listen to a specific instance.
    var handlers = name + 'Handlers';
    util.eachProp(this.ifaces, function (candidate, id) {
      if (candidate === instance) {
        if (this[handlers][id]) {
          this[handlers][id].push(handler);
        } else {
          this[handlers][id] = [handler];
        }
        return true;
      }
    }.bind(this));
  }.bind(this);
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

  func.onClose = this.getListener('close');
  func.onError = this.getListener('error');

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
  if (this.emits[id]) {
    this.emits[id]('close');
  }
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

},{"./util":34}],20:[function(require,module,exports){
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
      if (typeof console !== 'undefined') {
        this.config.global.console = console;
      } else {
        this.config.global.console = this.getLogger('Console');
      }
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

},{"./util":34}],21:[function(require,module,exports){
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
    Port,
    cleanup = function () {
      api.cleanup();
      manager.destroy();
    };

  if (config) {
    util.mixin(site_cfg, config, true);
  }
  site_cfg.global = freedomGlobal;
  if (context) {
    util.mixin(site_cfg, context, true);
  }

  // Register user-supplied extensions.
  // For example the 'core.oauth' provider defines a register function,
  // which enables site_cfg.oauth to be registered with it.
  context.providers.forEach(function (provider) {
    var name;
    if (provider.name.indexOf('core.') === 0 &&
        typeof provider.register === 'function') {
      name = provider.name.substr(5);
      // Invert priority and prefer user config over local context for these.
      if (config && config[name]) {
        provider.register(config[name]);
      } else if (site_cfg[name]) {
        provider.register(site_cfg[name]);
      } else {
        provider.register(undefined);
      }
    }
  });
  
  Bundle.register(context.providers, api);
  resource.register(context.resolvers || []);

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

      // Define how to load a root module.
      var fallbackLogger, getIface;
      fallbackLogger = function (message) {
        api.getCore('core.console', {
          config: site_cfg
        }).then(function (provider) {
          var logger = new provider.inst();
          debug.setLogger(logger);
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

      // Load appropriate Logger.
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

      // Load root module.
      getIface(site_cfg.manifest).then(function (iface) {
        iface.port.once('close', cleanup);
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

},{"./api":17,"./bundle":18,"./debug":20,"./hub":22,"./manager":25,"./policy":28,"./proxybinder":32,"./resource":33,"./util":34,"es6-promise":2}],22:[function(require,module,exports){
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
 * Remove all listeners and notify all connected destinations of their removal.
 * @method teardown
 */
Hub.prototype.teardown = function () {
  util.eachProp(this.apps, function (source) {
    if (typeof source.off === 'function') {
      source.off();
    }
  });
  this.apps = {};
  this.routes = {};
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

},{"./util":34}],23:[function(require,module,exports){
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

},{"./util":34}],24:[function(require,module,exports){
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


},{"../link":23}],25:[function(require,module,exports){
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
 * Tear down a port on the hub, or the full local hub.
 * @method destroy
 * @apram {Port?} port The port to unregister.
 */
Manager.prototype.destroy = function (port) {
  if (!port) {
    // Tear down everything!
    util.eachProp(this.controlFlows, function (flow) {
      this.hub.onMessage(flow, {
        type: 'close'
      });
    }.bind(this));
    this.hub.teardown();
    return;
  }

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
      this.core = core.inst;
      cb(this.core);
    }.bind(this), function () {
      cb(undefined);
    });
  }
};

module.exports = Manager;

},{"./moduleinternal":27,"./util":34}],26:[function(require,module,exports){
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
      if (!message.channel || message.channel === 'control') {
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
      } else if (this.port) {
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
  this.emit('close');
  if (this.port) {
    this.port.off();
    this.port.onMessage('control', {
      type: 'close',
      channel: 'control'
    });
    this.port.stop();
    delete this.port;
  }
  delete this.policy;
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
  var i, channels = ['default'], name, dep;

  if (this.manifest.permissions) {
    for (i = 0; i < this.manifest.permissions.length; i += 1) {
      name = this.manifest.permissions[i];
      if (channels.indexOf(name) < 0 && name.indexOf('core.') === 0) {
        channels.push(name);
        this.dependantChannels.push(name);
        dep = new Provider(this.api.get(name).definition, this.debug);
        this.api.provideCore(name, dep, this);

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
      }.bind(this), function (err) {
        this.debug.warn('failed to load dep: ', name, err);
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

},{"./provider":29,"./util":34}],27:[function(require,module,exports){
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
        message.manifest.app.script)).then(null, function (err) {
      this.debug.error('Could not set up module ' + this.appId + ': ', err);
    }.bind(this));
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

},{"./provider":29,"./proxy/apiInterface":30,"./proxybinder":32,"./util":34,"es6-promise":2}],28:[function(require,module,exports){
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

},{"./module":26,"./util":34,"es6-promise":2}],29:[function(require,module,exports){
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
  this.closeHandlers = {};
  this.providerCls = null;

  this.ifaces = {};
  this.emits = {};
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
      this.teardown(source, message.to);
    } else if (message.to && this.emits[source] &&
               this.emits[source][message.to]) {
      message.message.to = message.to;
      this.emits[source][message.to](message.message);
    } else if (message.to && message.message &&
        message.message.type === 'construct') {
      var args = Consumer.portableToMessage(
          (this.definition.constructor && this.definition.constructor.value) ?
              this.definition.constructor.value : [],
          message.message,
          this.debug
        ),
        instance;
      if (!this.ifaces[source]) {
        this.ifaces[source] = {};
        this.emits[source] = {};
      }
      this.ifaces[source][message.to] = true;
      instance = this.getProvider(source, message.to, args);
      // don't save a reference to instance if it closed itself already.
      if (this.ifaces[source] &&
          this.ifaces[source][message.to]) {
        this.ifaces[source][message.to] = instance.instance;
        this.emits[source][message.to] = instance.onmsg;
      }
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

  // Release references.
  delete this.iface;
  delete this.providerCls;
  this.ifaces = {};
  this.emits = {};
  this.emitChannel = null;
};

/**
 * Teardown a single instance of an object fulfilling this provider.
 * @method teardown
 * @param {String} source The consumer source of the instance.
 * @param {String} id The id of the instance to tear down.
 */
Provider.prototype.teardown = function (source, id) {
  // Ignore teardown of non-existant ids.
  if (!this.ifaces[source]) {
    return;
  }

  delete this.ifaces[source][id];
  delete this.emits[source][id];
  if (this.closeHandlers[source] && this.closeHandlers[source][id]) {
    util.eachProp(this.closeHandlers[source][id], function (prop) {
      prop();
    });
    delete this.closeHandlers[source][id];
  }
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
      util.eachProp(this.ifaces, function (ids, source) {
        util.eachProp(ids, function (candidate, id) {
          if (candidate === iface) {
            this.teardown(source, id);
            this.emit(this.channels[source], {
              type: 'close',
              to: id
            });
            return true;
          }
        }.bind(this));
      }.bind(this));
    } else {
      // Close the channel.
      this.close();
    }
  }.bind(this);

  func.onClose = function (iface, handler) {
    // Listen to the channel directly.
    if (typeof iface === 'function' && handler === undefined) {
      this.once('close', iface);
      return;
    }

    util.eachProp(this.ifaces, function (ids, source) {
      util.eachProp(ids, function (candidate, id) {
        if (candidate === iface) {
          if (!this.closeHandlers[source]) {
            this.closeHandlers[source] = {};
          }
          if (!this.closeHandlers[source][id]) {
            this.closeHandlers[source][id] = [];
          }
          this.closeHandlers[source][id].push(handler);
          return true;
        }
      }.bind(this));
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
    this.debug.error('Cannot instantiate provider, since it is not provided');
    return {instance: undefined, onmsg: undefined};
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

  return {
    instance: instance,
    onmsg: function (port, src, msg) {
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
    }.bind(instance, this, source)
  };
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

},{"./consumer":19,"./util":34}],30:[function(require,module,exports){
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
      if (this.off) {
        this.off();
      }
      util.eachProp(inflight, function (obj) {
        obj.reject('closed');
      });
      inflight = {};
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

},{"../consumer":19,"../util":34,"es6-promise":2}],31:[function(require,module,exports){
/*jslint indent:2, white:true, node:true, sloppy:true, browser:true */
var util = require('../util');

var EventInterface = function(onMsg, emit, debug) {
  util.handleEvents(this);
  
  onMsg(this, function(emit, type, msg) {
    if (type === 'close') {
      return;
    }
    emit(msg.type, msg.message);
  }.bind(this, this.emit));

  this.emit = function(emitter, type, msg) {
    emitter({type: type, message: msg}, true);
  }.bind({}, emit);
};

module.exports = EventInterface;

},{"../util":34}],32:[function(require,module,exports){
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

},{"./consumer":19,"./provider":29,"./proxy/apiInterface":30,"./proxy/eventInterface":31,"es6-promise":2}],33:[function(require,module,exports){
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

},{"./util":34,"es6-promise":2}],34:[function(require,module,exports){
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
    DEBUG_BACKREF: obj,
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
    // Note that registered handlers may stop events on the object, by calling
    // this.off(). As such, the presence of these keys must be checked on each
    // iteration of the relevant loops.
    for (i = 0; this.multiple[type] &&
         i < this.multiple[type].length; i += 1) {
      if (this.multiple[type][i](data) === false) {
        return;
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
      delete this.DEBUG_BACKREF;
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

},{}],35:[function(require,module,exports){
(function (global){
/*jslint node:true*/

var providers = [
  require('../../providers/core/core.unprivileged'),
  require('../../providers/core/core.echo'),
  require('../../providers/core/core.console'),
  require('../../providers/core/core.peerconnection'),
  require('../../providers/core/core.rtcpeerconnection'),
  require('../../providers/core/core.rtcdatachannel'),
  require('../../providers/core/core.storage'),
  require('../../providers/core/core.view'),
  require('../../providers/core/core.oauth'),
  require('../../providers/core/core.websocket')
];

function getFreedomScript() {
  'use strict';
  var script;
  if (window.document.currentScript) {
    // New browser API
    script = window.document.currentScript.src;
  } else if (document.readyState !== "complete" &&
             document.readyState !== "loaded") {
    // Included in HTML or through document.write
    script = window.document.getElementsByTagName('script');
    script = script[script.length - 1].src;
  } else {
    // Loaded through dom manipulation or async.
    script = document.querySelector(
      "script[src*='freedom.js'],script[src*='freedom-']"
    );
    if (script.length !== 1) {
      console.error("Could not determine freedom.js script tag.");
    }
    script = script[0].src;
  }
  return script;
}

if (typeof window !== 'undefined') {
  window.freedom = require('../entry').bind({}, {
    location: window.location.href,
    portType: require('../link/worker'),
    source: getFreedomScript(),
    providers: providers,
    oauth: [
      require('../../providers/oauth/oauth.localpageauth'),
      require('../../providers/oauth/oauth.remotepageauth')
    ]
  });
} else {
  require('../entry')({
    isModule: true,
    portType: require('../link/worker'),
    providers: providers,
    global: global
  });
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../providers/core/core.console":5,"../../providers/core/core.echo":6,"../../providers/core/core.oauth":7,"../../providers/core/core.peerconnection":8,"../../providers/core/core.rtcdatachannel":9,"../../providers/core/core.rtcpeerconnection":10,"../../providers/core/core.storage":11,"../../providers/core/core.unprivileged":12,"../../providers/core/core.view":13,"../../providers/core/core.websocket":14,"../../providers/oauth/oauth.localpageauth":15,"../../providers/oauth/oauth.remotepageauth":16,"../entry":21,"../link/worker":24}]},{},[35])
//

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1aWxkL25vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC9kaXN0L2J1bmRsZS5jb21waWxlZC5qcyIsImJ1aWxkL25vZGVfbW9kdWxlcy9lczYtcHJvbWlzZS9kaXN0L2VzNi1wcm9taXNlLmpzIiwiYnVpbGQvbm9kZV9tb2R1bGVzL2dydW50LWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsImJ1aWxkL25vZGVfbW9kdWxlcy93ZWJydGMtYWRhcHRlci9hZGFwdGVyLmpzIiwiYnVpbGQvcHJvdmlkZXJzL2NvcmUvY29yZS5jb25zb2xlLmpzIiwiYnVpbGQvcHJvdmlkZXJzL2NvcmUvY29yZS5lY2hvLmpzIiwiYnVpbGQvcHJvdmlkZXJzL2NvcmUvY29yZS5vYXV0aC5qcyIsImJ1aWxkL3Byb3ZpZGVycy9jb3JlL2NvcmUucGVlcmNvbm5lY3Rpb24uanMiLCJidWlsZC9wcm92aWRlcnMvY29yZS9jb3JlLnJ0Y2RhdGFjaGFubmVsLmpzIiwiYnVpbGQvcHJvdmlkZXJzL2NvcmUvY29yZS5ydGNwZWVyY29ubmVjdGlvbi5qcyIsImJ1aWxkL3Byb3ZpZGVycy9jb3JlL2NvcmUuc3RvcmFnZS5qcyIsImJ1aWxkL3Byb3ZpZGVycy9jb3JlL2NvcmUudW5wcml2aWxlZ2VkLmpzIiwiYnVpbGQvcHJvdmlkZXJzL2NvcmUvY29yZS52aWV3LmpzIiwiYnVpbGQvcHJvdmlkZXJzL2NvcmUvY29yZS53ZWJzb2NrZXQuanMiLCJidWlsZC9wcm92aWRlcnMvb2F1dGgvb2F1dGgubG9jYWxwYWdlYXV0aC5qcyIsImJ1aWxkL3Byb3ZpZGVycy9vYXV0aC9vYXV0aC5yZW1vdGVwYWdlYXV0aC5qcyIsImJ1aWxkL3NyYy9hcGkuanMiLCJidWlsZC9zcmMvYnVuZGxlLmpzIiwiYnVpbGQvc3JjL2NvbnN1bWVyLmpzIiwiYnVpbGQvc3JjL2RlYnVnLmpzIiwiYnVpbGQvc3JjL2VudHJ5LmpzIiwiYnVpbGQvc3JjL2h1Yi5qcyIsImJ1aWxkL3NyYy9saW5rLmpzIiwiYnVpbGQvc3JjL2xpbmsvd29ya2VyLmpzIiwiYnVpbGQvc3JjL21hbmFnZXIuanMiLCJidWlsZC9zcmMvbW9kdWxlLmpzIiwiYnVpbGQvc3JjL21vZHVsZWludGVybmFsLmpzIiwiYnVpbGQvc3JjL3BvbGljeS5qcyIsImJ1aWxkL3NyYy9wcm92aWRlci5qcyIsImJ1aWxkL3NyYy9wcm94eS9hcGlJbnRlcmZhY2UuanMiLCJidWlsZC9zcmMvcHJveHkvZXZlbnRJbnRlcmZhY2UuanMiLCJidWlsZC9zcmMvcHJveHliaW5kZXIuanMiLCJidWlsZC9zcmMvcmVzb3VyY2UuanMiLCJidWlsZC9zcmMvdXRpbC5qcyIsImJ1aWxkL3NyYy91dGlsL3dvcmtlckVudHJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FDQUE7QUFDQTs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDLzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNySEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUMxSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeGZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3JHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4ZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDOUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25OQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM1dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2phQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNVBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOVZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3JVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImZyZWVkb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0gW3tcIm5hbWVcIjpcImNvbnNvbGVcIixcImFwaVwiOntcImxvZ1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcInN0cmluZ1wiXX0sXCJkZWJ1Z1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcInN0cmluZ1wiXX0sXCJpbmZvXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwic3RyaW5nXCJdfSxcIndhcm5cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJzdHJpbmdcIl19LFwiZXJyb3JcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJzdHJpbmdcIl19fX0se1wibmFtZVwiOlwiY29yZS5jb25zb2xlXCIsXCJhcGlcIjp7XCJsb2dcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJzdHJpbmdcIl19LFwiZGVidWdcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJzdHJpbmdcIl19LFwiaW5mb1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcInN0cmluZ1wiXX0sXCJ3YXJuXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwic3RyaW5nXCJdfSxcImVycm9yXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwic3RyaW5nXCJdfX19LHtcIm5hbWVcIjpcImNvcmUuZWNob1wiLFwiYXBpXCI6e1wic2V0dXBcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCJdfSxcInNlbmRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCJdfSxcIm1lc3NhZ2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjpcInN0cmluZ1wifX19LHtcIm5hbWVcIjpcImNvcmVcIixcImFwaVwiOntcImNyZWF0ZUNoYW5uZWxcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjp7XCJjaGFubmVsXCI6XCJwcm94eVwiLFwiaWRlbnRpZmllclwiOlwic3RyaW5nXCJ9fSxcImJpbmRDaGFubmVsXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXSxcInJldFwiOlwicHJveHlcIn0sXCJnZXRJZFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOltcImFycmF5XCIsXCJzdHJpbmdcIl19LFwiZ2V0TG9nZ2VyXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXSxcInJldFwiOlwicHJveHlcIn19fSx7XCJuYW1lXCI6XCJjb3JlLm9hdXRoXCIsXCJhcGlcIjp7XCJpbml0aWF0ZU9BdXRoXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltbXCJhcnJheVwiLFwic3RyaW5nXCJdXSxcInJldFwiOntcInJlZGlyZWN0XCI6XCJzdHJpbmdcIixcInN0YXRlXCI6XCJzdHJpbmdcIn0sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJsYXVuY2hBdXRoRmxvd1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIix7XCJyZWRpcmVjdFwiOlwic3RyaW5nXCIsXCJzdGF0ZVwiOlwic3RyaW5nXCJ9XSxcInJldFwiOlwic3RyaW5nXCIsXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX19fSx7XCJuYW1lXCI6XCJjb3JlLnBlZXJjb25uZWN0aW9uXCIsXCJhcGlcIjp7XCJzZXR1cFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcInN0cmluZ1wiLFtcImFycmF5XCIsXCJzdHJpbmdcIl0sXCJib29sZWFuXCJdfSxcInNlbmRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W3tcImNoYW5uZWxMYWJlbFwiOlwic3RyaW5nXCIsXCJ0ZXh0XCI6XCJzdHJpbmdcIixcImJpbmFyeVwiOlwiYmxvYlwiLFwiYnVmZmVyXCI6XCJidWZmZXJcIn1dfSxcIm9uUmVjZWl2ZWRcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJjaGFubmVsTGFiZWxcIjpcInN0cmluZ1wiLFwidGV4dFwiOlwic3RyaW5nXCIsXCJiaW5hcnlcIjpcImJsb2JcIixcImJ1ZmZlclwiOlwiYnVmZmVyXCJ9fSxcIm9wZW5EYXRhQ2hhbm5lbFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl19LFwiY2xvc2VEYXRhQ2hhbm5lbFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl19LFwib25PcGVuRGF0YUNoYW5uZWxcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJjaGFubmVsSWRcIjpcInN0cmluZ1wifX0sXCJvbkNsb3NlRGF0YUNoYW5uZWxcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJjaGFubmVsSWRcIjpcInN0cmluZ1wifX0sXCJnZXRCdWZmZXJlZEFtb3VudFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcIm51bWJlclwifSxcImdldEluZm9cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcInN0cmluZ1wifSxcImNyZWF0ZU9mZmVyXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOlt7XCJvZmZlclRvUmVjZWl2ZVZpZGVvXCI6XCJudW1iZXJcIixcIm9mZmVyVG9SZWNlaXZlQXVkaW9cIjpcIm51bWJlclwiLFwidm9pY2VBY3Rpdml0eURldGVjdGlvblwiOlwiYm9vbGVhblwiLFwiaWNlUmVzdGFydFwiOlwiYm9vbGVhblwifV0sXCJyZXRcIjp7XCJ0eXBlXCI6XCJzdHJpbmdcIixcInNkcFwiOlwic3RyaW5nXCJ9fSxcImNsb3NlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdfSxcIm9uQ2xvc2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7fX19fSx7XCJuYW1lXCI6XCJjb3JlLnJ0Y2RhdGFjaGFubmVsXCIsXCJhcGlcIjp7XCJjb25zdHJ1Y3RvclwiOntcInZhbHVlXCI6W1wic3RyaW5nXCJdfSxcImdldExhYmVsXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJzdHJpbmdcIn0sXCJnZXRPcmRlcmVkXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJib29sZWFuXCJ9LFwiZ2V0TWF4UGFja2V0TGlmZVRpbWVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcIm51bWJlclwifSxcImdldE1heFJldHJhbnNtaXRzXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJudW1iZXJcIn0sXCJnZXRQcm90b2NvbFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwic3RyaW5nXCJ9LFwiZ2V0TmVnb3RpYXRlZFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwiYm9vbGVhblwifSxcImdldElkXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJudW1iZXJcIn0sXCJnZXRSZWFkeVN0YXRlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJzdHJpbmdcIn0sXCJnZXRCdWZmZXJlZEFtb3VudFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwibnVtYmVyXCJ9LFwib25vcGVuXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6W119LFwib25lcnJvclwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOltdfSxcIm9uY2xvc2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjpbXX0sXCJjbG9zZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXX0sXCJvbm1lc3NhZ2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJ0ZXh0XCI6XCJzdHJpbmdcIixcImJ1ZmZlclwiOlwiYnVmZmVyXCJ9fSxcImdldEJpbmFyeVR5cGVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcInN0cmluZ1wifSxcInNldEJpbmFyeVR5cGVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCJdfSxcInNlbmRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCJdfSxcInNlbmRCdWZmZXJcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wiYnVmZmVyXCJdfX19LHtcIm5hbWVcIjpcImNvcmUucnRjcGVlcmNvbm5lY3Rpb25cIixcImFwaVwiOntcImNvbnN0cnVjdG9yXCI6e1widmFsdWVcIjpbe1wiaWNlU2VydmVyc1wiOltcImFycmF5XCIse1widXJsc1wiOltcImFycmF5XCIsXCJzdHJpbmdcIl0sXCJ1c2VybmFtZVwiOlwic3RyaW5nXCIsXCJjcmVkZW50aWFsXCI6XCJzdHJpbmdcIn1dLFwiaWNlVHJhbnNwb3J0c1wiOlwic3RyaW5nXCIsXCJwZWVySWRlbnRpdHlcIjpcInN0cmluZ1wifV19LFwiY3JlYXRlT2ZmZXJcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W3tcIm9mZmVyVG9SZWNlaXZlQXVkaW9cIjpcIm51bWJlclwiLFwib2ZmZXJUb1JlY2VpdmVWaWRlb1wiOlwibnVtYmVyXCIsXCJpY2VSZXN0YXJ0XCI6XCJib29sZWFuXCIsXCJ2b2ljZUFjdGl2aXR5RGV0ZWN0aW9uXCI6XCJib29sZWFuXCJ9XSxcInJldFwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwic2RwXCI6XCJzdHJpbmdcIn19LFwiY3JlYXRlQW5zd2VyXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJzZHBcIjpcInN0cmluZ1wifX0sXCJzZXRMb2NhbERlc2NyaXB0aW9uXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOlt7XCJ0eXBlXCI6XCJzdHJpbmdcIixcInNkcFwiOlwic3RyaW5nXCJ9XX0sXCJnZXRMb2NhbERlc2NyaXB0aW9uXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJzZHBcIjpcInN0cmluZ1wifX0sXCJzZXRSZW1vdGVEZXNjcmlwdGlvblwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbe1widHlwZVwiOlwic3RyaW5nXCIsXCJzZHBcIjpcInN0cmluZ1wifV0sXCJyZXRcIjp7fX0sXCJnZXRSZW1vdGVEZXNjcmlwdGlvblwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwic2RwXCI6XCJzdHJpbmdcIn19LFwiZ2V0U2lnbmFsaW5nU3RhdGVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcInN0cmluZ1wifSxcInVwZGF0ZUljZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbe1wiaWNlU2VydmVyc1wiOltcImFycmF5XCIse1widXJsc1wiOltcImFycmF5XCIsXCJzdHJpbmdcIl0sXCJ1c2VybmFtZVwiOlwic3RyaW5nXCIsXCJjcmVkZW50aWFsXCI6XCJzdHJpbmdcIn1dLFwiaWNlVHJhbnNwb3J0c1wiOlwic3RyaW5nXCIsXCJwZWVySWRlbnRpdHlcIjpcInN0cmluZ1wifV0sXCJyZXRcIjp7fX0sXCJhZGRJY2VDYW5kaWRhdGVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W3tcImNhbmRpZGF0ZVwiOlwic3RyaW5nXCIsXCJzZHBNaWRcIjpcInN0cmluZ1wiLFwic2RwTUxpbmVJbmRleFwiOlwibnVtYmVyXCJ9XSxcInJldFwiOnt9fSxcImdldEljZUdhdGhlcmluZ1N0YXRlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJzdHJpbmdcIn0sXCJnZXRJY2VDb25uZWN0aW9uU3RhdGVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcInN0cmluZ1wifSxcImdldENvbmZpZ3VyYXRpb25cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjp7XCJpY2VTZXJ2ZXJzXCI6W1wiYXJyYXlcIix7XCJ1cmxzXCI6W1wiYXJyYXlcIixcInN0cmluZ1wiXSxcInVzZXJuYW1lXCI6XCJzdHJpbmdcIixcImNyZWRlbnRpYWxcIjpcInN0cmluZ1wifV0sXCJpY2VUcmFuc3BvcnRzXCI6XCJzdHJpbmdcIixcInBlZXJJZGVudGl0eVwiOlwic3RyaW5nXCJ9fSxcImdldExvY2FsU3RyZWFtc1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOltcImFycmF5XCIsXCJzdHJpbmdcIl19LFwiZ2V0UmVtb3RlU3RyZWFtc1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOltcImFycmF5XCIsXCJzdHJpbmdcIl19LFwiZ2V0U3RyZWFtQnlJZFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcInN0cmluZ1wifSxcImFkZFN0cmVhbVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjp7fX0sXCJyZW1vdmVTdHJlYW1cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCJdLFwicmV0XCI6e319LFwiY2xvc2VcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjp7fX0sXCJjcmVhdGVEYXRhQ2hhbm5lbFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIix7XCJvcmRlcmVkXCI6XCJib29sZWFuXCIsXCJtYXhQYWNrZXRMaWZlVGltZVwiOlwibnVtYmVyXCIsXCJtYXhSZXRyYW5zbWl0c1wiOlwibnVtYmVyXCIsXCJwcm90b2NvbFwiOlwic3RyaW5nXCIsXCJuZWdvdGlhdGVkXCI6XCJib29sZWFuXCIsXCJpZFwiOlwibnVtYmVyXCJ9XSxcInJldFwiOlwic3RyaW5nXCJ9LFwib25kYXRhY2hhbm5lbFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImNoYW5uZWxcIjpcInN0cmluZ1wifX0sXCJnZXRTdGF0c1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcIm9iamVjdFwifSxcIm9ubmVnb3RpYXRpb25uZWVkZWRcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjpbXX0sXCJvbmljZWNhbmRpZGF0ZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImNhbmRpZGF0ZVwiOntcImNhbmRpZGF0ZVwiOlwic3RyaW5nXCIsXCJzZHBNaWRcIjpcInN0cmluZ1wiLFwic2RwTUxpbmVJbmRleFwiOlwibnVtYmVyXCJ9fX0sXCJvbnNpZ25hbGluZ3N0YXRlY2hhbmdlXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6W119LFwib25hZGRzdHJlYW1cIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJzdHJlYW1cIjpcIm51bWJlclwifX0sXCJvbnJlbW92ZXN0cmVhbVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcInN0cmVhbVwiOlwibnVtYmVyXCJ9fSxcIm9uaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6W119fX0se1wibmFtZVwiOlwiY29yZS5zdG9yYWdlXCIsXCJhcGlcIjp7XCJrZXlzXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6W1wiYXJyYXlcIixcInN0cmluZ1wiXX0sXCJnZXRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCJdLFwicmV0XCI6XCJzdHJpbmdcIn0sXCJzZXRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJzdHJpbmdcIl0sXCJyZXRcIjpcInN0cmluZ1wifSxcInJlbW92ZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcInN0cmluZ1wifSxcImNsZWFyXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdfX19LHtcIm5hbWVcIjpcImNvcmUudGNwc29ja2V0XCIsXCJhcGlcIjp7XCJjb25zdHJ1Y3RvclwiOntcInZhbHVlXCI6W1wibnVtYmVyXCJdfSxcImdldEluZm9cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjp7XCJjb25uZWN0ZWRcIjpcImJvb2xlYW5cIixcImxvY2FsQWRkcmVzc1wiOlwic3RyaW5nXCIsXCJsb2NhbFBvcnRcIjpcIm51bWJlclwiLFwicGVlckFkZHJlc3NcIjpcInN0cmluZ1wiLFwicGVlclBvcnRcIjpcIm51bWJlclwifX0sXCJFUlJDT0RFXCI6e1widHlwZVwiOlwiY29uc3RhbnRcIixcInZhbHVlXCI6e1wiU1VDQ0VTU1wiOlwiU3VjY2VzcyFcIixcIlVOS05PV05cIjpcIlVua25vd24gZXJyb3JcIixcIkFMUkVBRFlfQ09OTkVDVEVEXCI6XCJTb2NrZXQgYWxyZWFkeSBjb25uZWN0ZWRcIixcIklOVkFMSURfQVJHVU1FTlRcIjpcIkludmFsaWQgYXJndW1lbnRcIixcIlRJTUVEX09VVFwiOlwiVGltZWQgb3V0XCIsXCJOT1RfQ09OTkVDVEVEXCI6XCJTb2NrZXQgbm90IGNvbm5lY3RlZFwiLFwiTkVUV09SS19DSEFOR0VEXCI6XCJOZXR3b3JrIGNoYW5nZWRcIixcIkNPTk5FQ1RJT05fQ0xPU0VEXCI6XCJDb25uZWN0aW9uIGNsb3NlZCBncmFjZWZ1bGx5XCIsXCJDT05ORUNUSU9OX1JFU0VUXCI6XCJDb25uZWN0aW9uIHJlc2V0XCIsXCJDT05ORUNUSU9OX1JFRlVTRURcIjpcIkNvbm5lY3Rpb24gcmVmdXNlZFwiLFwiQ09OTkVDVElPTl9GQUlMRURcIjpcIkNvbm5lY3Rpb24gZmFpbGVkXCJ9fSxcImNsb3NlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwib25EaXNjb25uZWN0XCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwiY29ubmVjdFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcIm51bWJlclwiXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcInNlY3VyZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcInByZXBhcmVTZWN1cmVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJ3cml0ZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJidWZmZXJcIl0sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJvbkRhdGFcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJkYXRhXCI6XCJidWZmZXJcIn19LFwibGlzdGVuXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwibnVtYmVyXCJdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwib25Db25uZWN0aW9uXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wic29ja2V0XCI6XCJudW1iZXJcIixcImhvc3RcIjpcInN0cmluZ1wiLFwicG9ydFwiOlwibnVtYmVyXCJ9fX19LHtcIm5hbWVcIjpcImNvcmUudWRwc29ja2V0XCIsXCJhcGlcIjp7XCJFUlJDT0RFXCI6e1widHlwZVwiOlwiY29uc3RhbnRcIixcInZhbHVlXCI6e1wiU1VDQ0VTU1wiOlwiU3VjY2VzcyFcIixcIlVOS05PV05cIjpcIlVua25vd24gZXJyb3JcIixcIkFMUkVBRFlfQk9VTkRcIjpcIlNvY2tldCBhbHJlYWR5IGJvdW5kXCIsXCJJTlZBTElEX0FSR1VNRU5UXCI6XCJJbnZhbGlkIGFyZ3VtZW50XCIsXCJORVRXT1JLX0NIQU5HRURcIjpcIk5ldHdvcmsgY2hhbmdlZFwiLFwiU05FRF9GQUlMRURcIjpcIlNlbmQgZmFpbGVkXCJ9fSxcImJpbmRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJudW1iZXJcIl0sXCJyZXRcIjpbXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcImdldEluZm9cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjp7XCJsb2NhbEFkZHJlc3NcIjpcInN0cmluZ1wiLFwibG9jYWxQb3J0XCI6XCJudW1iZXJcIn19LFwic2VuZFRvXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcImJ1ZmZlclwiLFwic3RyaW5nXCIsXCJudW1iZXJcIl0sXCJyZXRcIjpcIm51bWJlclwiLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwiZGVzdHJveVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXX0sXCJvbkRhdGFcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJyZXN1bHRDb2RlXCI6XCJudW1iZXJcIixcImFkZHJlc3NcIjpcInN0cmluZ1wiLFwicG9ydFwiOlwibnVtYmVyXCIsXCJkYXRhXCI6XCJidWZmZXJcIn19fX0se1wibmFtZVwiOlwiY29yZS52aWV3XCIsXCJhcGlcIjp7XCJzaG93XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXX0sXCJpc1NlY3VyZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwiYm9vbGVhblwifSxcImNsb3NlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdfSxcInBvc3RNZXNzYWdlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcIm9iamVjdFwiXX0sXCJtZXNzYWdlXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6XCJvYmplY3RcIn0sXCJvbkNsb3NlXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6W119fX0se1wibmFtZVwiOlwiY29yZS53ZWJzb2NrZXRcIixcImFwaVwiOntcImNvbnN0cnVjdG9yXCI6e1widmFsdWVcIjpbXCJzdHJpbmdcIixbXCJhcnJheVwiLFwic3RyaW5nXCJdXX0sXCJzZW5kXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOlt7XCJ0ZXh0XCI6XCJzdHJpbmdcIixcImJpbmFyeVwiOlwiYmxvYlwiLFwiYnVmZmVyXCI6XCJidWZmZXJcIn1dLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwiZ2V0UmVhZHlTdGF0ZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwibnVtYmVyXCJ9LFwiZ2V0QnVmZmVyZWRBbW91bnRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCJdLFwicmV0XCI6XCJudW1iZXJcIn0sXCJjbG9zZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJudW1iZXJcIixcInN0cmluZ1wiXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcIm9uTWVzc2FnZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcInRleHRcIjpcInN0cmluZ1wiLFwiYmluYXJ5XCI6XCJibG9iXCIsXCJidWZmZXJcIjpcImJ1ZmZlclwifX0sXCJvbk9wZW5cIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjpbXX0sXCJvbkVycm9yXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwib25DbG9zZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImNvZGVcIjpcIm51bWJlclwiLFwicmVhc29uXCI6XCJzdHJpbmdcIixcIndhc0NsZWFuXCI6XCJib29sZWFuXCJ9fX19LHtcIm5hbWVcIjpcInNvY2lhbFwiLFwiYXBpXCI6e1wiRVJSQ09ERVwiOntcInR5cGVcIjpcImNvbnN0YW50XCIsXCJ2YWx1ZVwiOntcIlNVQ0NFU1NcIjpcIlN1Y2Nlc3MhXCIsXCJVTktOT1dOXCI6XCJVbmtub3duIGVycm9yXCIsXCJPRkZMSU5FXCI6XCJVc2VyIGlzIGN1cnJlbnRseSBvZmZsaW5lXCIsXCJNQUxGT1JNRURQQVJBTUVURVJTXCI6XCJQYXJhbWV0ZXJzIGFyZSBtYWxmb3JtZWRcIixcIkxPR0lOX0JBRENSRURFTlRJQUxTXCI6XCJFcnJvciBhdXRoZW50aWNhdGluZyB3aXRoIHNlcnZlclwiLFwiTE9HSU5fRkFJTEVEQ09OTkVDVElPTlwiOlwiRXJyb3IgY29ubmVjdGluZyB0byBzZXJ2ZXJcIixcIkxPR0lOX0FMUkVBRFlPTkxJTkVcIjpcIlVzZXIgaXMgYWxyZWFkeSBsb2dnZWQgaW5cIixcIkxPR0lOX09BVVRIRVJST1JcIjpcIk9BdXRoIEVycm9yXCIsXCJTRU5EX0lOVkFMSURERVNUSU5BVElPTlwiOlwiTWVzc2FnZSBzZW50IHRvIGFuIGludmFsaWQgZGVzdGluYXRpb25cIn19LFwiU1RBVFVTXCI6e1widHlwZVwiOlwiY29uc3RhbnRcIixcInZhbHVlXCI6e1wiT0ZGTElORVwiOlwiT0ZGTElORVwiLFwiT05MSU5FXCI6XCJPTkxJTkVcIixcIk9OTElORV9XSVRIX09USEVSX0FQUFwiOlwiT05MSU5FX1dJVEhfT1RIRVJfQVBQXCJ9fSxcImxvZ2luXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOlt7XCJhZ2VudFwiOlwic3RyaW5nXCIsXCJ2ZXJzaW9uXCI6XCJzdHJpbmdcIixcInVybFwiOlwic3RyaW5nXCIsXCJpbnRlcmFjdGl2ZVwiOlwiYm9vbGVhblwiLFwicmVtZW1iZXJMb2dpblwiOlwiYm9vbGVhblwifV0sXCJyZXRcIjp7XCJ1c2VySWRcIjpcInN0cmluZ1wiLFwiY2xpZW50SWRcIjpcInN0cmluZ1wiLFwic3RhdHVzXCI6XCJzdHJpbmdcIixcImxhc3RVcGRhdGVkXCI6XCJudW1iZXJcIixcImxhc3RTZWVuXCI6XCJudW1iZXJcIn0sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJjbGVhckNhY2hlZENyZWRlbnRpYWxzXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdfSxcImdldENsaWVudHNcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcIm9iamVjdFwiLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwiZ2V0VXNlcnNcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcIm9iamVjdFwiLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwic2VuZE1lc3NhZ2VcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJzdHJpbmdcIl0sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJsb2dvdXRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJvbk1lc3NhZ2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJmcm9tXCI6e1widXNlcklkXCI6XCJzdHJpbmdcIixcImNsaWVudElkXCI6XCJzdHJpbmdcIixcInN0YXR1c1wiOlwic3RyaW5nXCIsXCJsYXN0VXBkYXRlZFwiOlwibnVtYmVyXCIsXCJsYXN0U2VlblwiOlwibnVtYmVyXCJ9LFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcIm9uVXNlclByb2ZpbGVcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJ1c2VySWRcIjpcInN0cmluZ1wiLFwibGFzdFVwZGF0ZWRcIjpcIm51bWJlclwiLFwibmFtZVwiOlwic3RyaW5nXCIsXCJ1cmxcIjpcInN0cmluZ1wiLFwiaW1hZ2VEYXRhXCI6XCJzdHJpbmdcIn19LFwib25DbGllbnRTdGF0ZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcInVzZXJJZFwiOlwic3RyaW5nXCIsXCJjbGllbnRJZFwiOlwic3RyaW5nXCIsXCJzdGF0dXNcIjpcInN0cmluZ1wiLFwibGFzdFVwZGF0ZWRcIjpcIm51bWJlclwiLFwibGFzdFNlZW5cIjpcIm51bWJlclwifX19fSx7XCJuYW1lXCI6XCJzdG9yYWdlXCIsXCJhcGlcIjp7XCJzY29wZVwiOntcInR5cGVcIjpcImNvbnN0YW50XCIsXCJ2YWx1ZVwiOntcIlNFU1NJT05cIjowLFwiREVWSUNFX0xPQ0FMXCI6MSxcIlVTRVJfTE9DQUxcIjoyLFwiU0hBUkVEXCI6M319LFwiRVJSQ09ERVwiOntcInR5cGVcIjpcImNvbnN0YW50XCIsXCJ2YWx1ZVwiOntcIlNVQ0NFU1NcIjpcIlN1Y2Nlc3MhXCIsXCJVTktOT1dOXCI6XCJVbmtub3duIGVycm9yXCIsXCJPRkZMSU5FXCI6XCJEYXRhYmFzZSBub3QgcmVhY2hhYmxlXCIsXCJNQUxGT1JNRURQQVJBTUVURVJTXCI6XCJQYXJhbWV0ZXJzIGFyZSBtYWxmb3JtZWRcIn19LFwiY29uc3RydWN0b3JcIjp7XCJ2YWx1ZVwiOlt7XCJzY29wZVwiOlwibnVtYmVyXCJ9XX0sXCJrZXlzXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6W1wiYXJyYXlcIixcInN0cmluZ1wiXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcImdldFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcInN0cmluZ1wiLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwic2V0XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwic3RyaW5nXCJdLFwicmV0XCI6XCJzdHJpbmdcIixcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcInJlbW92ZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcInN0cmluZ1wiLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwiY2xlYXJcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpbXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fX19LHtcIm5hbWVcIjpcInN0b3JlYnVmZmVyXCIsXCJhcGlcIjp7XCJzY29wZVwiOntcInR5cGVcIjpcImNvbnN0YW50XCIsXCJ2YWx1ZVwiOntcIlNFU1NJT05cIjowLFwiREVWSUNFX0xPQ0FMXCI6MSxcIlVTRVJfTE9DQUxcIjoyLFwiU0hBUkVEXCI6M319LFwiRVJSQ09ERVwiOntcInR5cGVcIjpcImNvbnN0YW50XCIsXCJ2YWx1ZVwiOntcIlNVQ0NFU1NcIjpcIlN1Y2Nlc3MhXCIsXCJVTktOT1dOXCI6XCJVbmtub3duIGVycm9yXCIsXCJPRkZMSU5FXCI6XCJEYXRhYmFzZSBub3QgcmVhY2hhYmxlXCIsXCJNQUxGT1JNRURQQVJBTUVURVJTXCI6XCJQYXJhbWV0ZXJzIGFyZSBtYWxmb3JtZWRcIn19LFwiY29uc3RydWN0b3JcIjp7XCJ2YWx1ZVwiOlt7XCJzY29wZVwiOlwibnVtYmVyXCJ9XX0sXCJrZXlzXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6W1wiYXJyYXlcIixcInN0cmluZ1wiXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcImdldFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcImJ1ZmZlclwiLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwic2V0XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwiYnVmZmVyXCJdLFwicmV0XCI6XCJidWZmZXJcIixcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcInJlbW92ZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcImJ1ZmZlclwiLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwiY2xlYXJcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpbXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fX19LHtcIm5hbWVcIjpcInRyYW5zcG9ydFwiLFwiYXBpXCI6e1wiRVJSQ09ERVwiOntcInR5cGVcIjpcImNvbnN0YW50XCIsXCJ2YWx1ZVwiOntcIlNVQ0NFU1NcIjpcIlN1Y2Nlc3MhXCIsXCJVTktOT1dOXCI6XCJVbmtub3duIGVycm9yXCIsXCJPRkZMSU5FXCI6XCJOb3QgcmVhY2hhYmxlXCIsXCJNQUxGT1JNRURQQVJBTUVURVJTXCI6XCJQYXJhbWV0ZXJzIGFyZSBtYWxmb3JtZWRcIn19LFwic2V0dXBcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJwcm94eVwiXSxcInJldFwiOltdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwic2VuZFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcImJ1ZmZlclwiXSxcInJldFwiOltdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwiY2xvc2VcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpbXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcIm9uRGF0YVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcInRhZ1wiOlwic3RyaW5nXCIsXCJkYXRhXCI6XCJidWZmZXJcIn19LFwib25DbG9zZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOltdfX19XTtcbiIsIi8qIVxuICogQG92ZXJ2aWV3IGVzNi1wcm9taXNlIC0gYSB0aW55IGltcGxlbWVudGF0aW9uIG9mIFByb21pc2VzL0ErLlxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKGMpIDIwMTQgWWVodWRhIEthdHosIFRvbSBEYWxlLCBTdGVmYW4gUGVubmVyIGFuZCBjb250cmlidXRvcnMgKENvbnZlcnNpb24gdG8gRVM2IEFQSSBieSBKYWtlIEFyY2hpYmFsZClcbiAqIEBsaWNlbnNlICAgTGljZW5zZWQgdW5kZXIgTUlUIGxpY2Vuc2VcbiAqICAgICAgICAgICAgU2VlIGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9qYWtlYXJjaGliYWxkL2VzNi1wcm9taXNlL21hc3Rlci9MSUNFTlNFXG4gKiBAdmVyc2lvbiAgIDIuMC4xXG4gKi9cblxuKGZ1bmN0aW9uKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgZnVuY3Rpb24gJCR1dGlscyQkb2JqZWN0T3JGdW5jdGlvbih4KSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHggPT09ICdmdW5jdGlvbicgfHwgKHR5cGVvZiB4ID09PSAnb2JqZWN0JyAmJiB4ICE9PSBudWxsKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkJHV0aWxzJCRpc0Z1bmN0aW9uKHgpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkJHV0aWxzJCRpc01heWJlVGhlbmFibGUoeCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnb2JqZWN0JyAmJiB4ICE9PSBudWxsO1xuICAgIH1cblxuICAgIHZhciAkJHV0aWxzJCRfaXNBcnJheTtcblxuICAgIGlmICghQXJyYXkuaXNBcnJheSkge1xuICAgICAgJCR1dGlscyQkX2lzQXJyYXkgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHgpID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCR1dGlscyQkX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuICAgIH1cblxuICAgIHZhciAkJHV0aWxzJCRpc0FycmF5ID0gJCR1dGlscyQkX2lzQXJyYXk7XG4gICAgdmFyICQkdXRpbHMkJG5vdyA9IERhdGUubm93IHx8IGZ1bmN0aW9uKCkgeyByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7IH07XG4gICAgZnVuY3Rpb24gJCR1dGlscyQkRigpIHsgfVxuXG4gICAgdmFyICQkdXRpbHMkJG9fY3JlYXRlID0gKE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gKG8pIHtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NlY29uZCBhcmd1bWVudCBub3Qgc3VwcG9ydGVkJyk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIG8gIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYW4gb2JqZWN0Jyk7XG4gICAgICB9XG4gICAgICAkJHV0aWxzJCRGLnByb3RvdHlwZSA9IG87XG4gICAgICByZXR1cm4gbmV3ICQkdXRpbHMkJEYoKTtcbiAgICB9KTtcblxuICAgIHZhciAkJGFzYXAkJGxlbiA9IDA7XG5cbiAgICB2YXIgJCRhc2FwJCRkZWZhdWx0ID0gZnVuY3Rpb24gYXNhcChjYWxsYmFjaywgYXJnKSB7XG4gICAgICAkJGFzYXAkJHF1ZXVlWyQkYXNhcCQkbGVuXSA9IGNhbGxiYWNrO1xuICAgICAgJCRhc2FwJCRxdWV1ZVskJGFzYXAkJGxlbiArIDFdID0gYXJnO1xuICAgICAgJCRhc2FwJCRsZW4gKz0gMjtcbiAgICAgIGlmICgkJGFzYXAkJGxlbiA9PT0gMikge1xuICAgICAgICAvLyBJZiBsZW4gaXMgMSwgdGhhdCBtZWFucyB0aGF0IHdlIG5lZWQgdG8gc2NoZWR1bGUgYW4gYXN5bmMgZmx1c2guXG4gICAgICAgIC8vIElmIGFkZGl0aW9uYWwgY2FsbGJhY2tzIGFyZSBxdWV1ZWQgYmVmb3JlIHRoZSBxdWV1ZSBpcyBmbHVzaGVkLCB0aGV5XG4gICAgICAgIC8vIHdpbGwgYmUgcHJvY2Vzc2VkIGJ5IHRoaXMgZmx1c2ggdGhhdCB3ZSBhcmUgc2NoZWR1bGluZy5cbiAgICAgICAgJCRhc2FwJCRzY2hlZHVsZUZsdXNoKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciAkJGFzYXAkJGJyb3dzZXJHbG9iYWwgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpID8gd2luZG93IDoge307XG4gICAgdmFyICQkYXNhcCQkQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIgPSAkJGFzYXAkJGJyb3dzZXJHbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCAkJGFzYXAkJGJyb3dzZXJHbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcblxuICAgIC8vIHRlc3QgZm9yIHdlYiB3b3JrZXIgYnV0IG5vdCBpbiBJRTEwXG4gICAgdmFyICQkYXNhcCQkaXNXb3JrZXIgPSB0eXBlb2YgVWludDhDbGFtcGVkQXJyYXkgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICB0eXBlb2YgaW1wb3J0U2NyaXB0cyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIHR5cGVvZiBNZXNzYWdlQ2hhbm5lbCAhPT0gJ3VuZGVmaW5lZCc7XG5cbiAgICAvLyBub2RlXG4gICAgZnVuY3Rpb24gJCRhc2FwJCR1c2VOZXh0VGljaygpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcHJvY2Vzcy5uZXh0VGljaygkJGFzYXAkJGZsdXNoKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gJCRhc2FwJCR1c2VNdXRhdGlvbk9ic2VydmVyKCkge1xuICAgICAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xuICAgICAgdmFyIG9ic2VydmVyID0gbmV3ICQkYXNhcCQkQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIoJCRhc2FwJCRmbHVzaCk7XG4gICAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICAgIG9ic2VydmVyLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pO1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIG5vZGUuZGF0YSA9IChpdGVyYXRpb25zID0gKytpdGVyYXRpb25zICUgMik7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIHdlYiB3b3JrZXJcbiAgICBmdW5jdGlvbiAkJGFzYXAkJHVzZU1lc3NhZ2VDaGFubmVsKCkge1xuICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gJCRhc2FwJCRmbHVzaDtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoMCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uICQkYXNhcCQkdXNlU2V0VGltZW91dCgpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgc2V0VGltZW91dCgkJGFzYXAkJGZsdXNoLCAxKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyICQkYXNhcCQkcXVldWUgPSBuZXcgQXJyYXkoMTAwMCk7XG5cbiAgICBmdW5jdGlvbiAkJGFzYXAkJGZsdXNoKCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAkJGFzYXAkJGxlbjsgaSs9Mikge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSAkJGFzYXAkJHF1ZXVlW2ldO1xuICAgICAgICB2YXIgYXJnID0gJCRhc2FwJCRxdWV1ZVtpKzFdO1xuXG4gICAgICAgIGNhbGxiYWNrKGFyZyk7XG5cbiAgICAgICAgJCRhc2FwJCRxdWV1ZVtpXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgJCRhc2FwJCRxdWV1ZVtpKzFdID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICAkJGFzYXAkJGxlbiA9IDA7XG4gICAgfVxuXG4gICAgdmFyICQkYXNhcCQkc2NoZWR1bGVGbHVzaDtcblxuICAgIC8vIERlY2lkZSB3aGF0IGFzeW5jIG1ldGhvZCB0byB1c2UgdG8gdHJpZ2dlcmluZyBwcm9jZXNzaW5nIG9mIHF1ZXVlZCBjYWxsYmFja3M6XG4gICAgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiB7fS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXScpIHtcbiAgICAgICQkYXNhcCQkc2NoZWR1bGVGbHVzaCA9ICQkYXNhcCQkdXNlTmV4dFRpY2soKTtcbiAgICB9IGVsc2UgaWYgKCQkYXNhcCQkQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICQkYXNhcCQkc2NoZWR1bGVGbHVzaCA9ICQkYXNhcCQkdXNlTXV0YXRpb25PYnNlcnZlcigpO1xuICAgIH0gZWxzZSBpZiAoJCRhc2FwJCRpc1dvcmtlcikge1xuICAgICAgJCRhc2FwJCRzY2hlZHVsZUZsdXNoID0gJCRhc2FwJCR1c2VNZXNzYWdlQ2hhbm5lbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkJGFzYXAkJHNjaGVkdWxlRmx1c2ggPSAkJGFzYXAkJHVzZVNldFRpbWVvdXQoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkJCRpbnRlcm5hbCQkbm9vcCgpIHt9XG4gICAgdmFyICQkJGludGVybmFsJCRQRU5ESU5HICAgPSB2b2lkIDA7XG4gICAgdmFyICQkJGludGVybmFsJCRGVUxGSUxMRUQgPSAxO1xuICAgIHZhciAkJCRpbnRlcm5hbCQkUkVKRUNURUQgID0gMjtcbiAgICB2YXIgJCQkaW50ZXJuYWwkJEdFVF9USEVOX0VSUk9SID0gbmV3ICQkJGludGVybmFsJCRFcnJvck9iamVjdCgpO1xuXG4gICAgZnVuY3Rpb24gJCQkaW50ZXJuYWwkJHNlbGZGdWxsZmlsbG1lbnQoKSB7XG4gICAgICByZXR1cm4gbmV3IFR5cGVFcnJvcihcIllvdSBjYW5ub3QgcmVzb2x2ZSBhIHByb21pc2Ugd2l0aCBpdHNlbGZcIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gJCQkaW50ZXJuYWwkJGNhbm5vdFJldHVybk93bigpIHtcbiAgICAgIHJldHVybiBuZXcgVHlwZUVycm9yKCdBIHByb21pc2VzIGNhbGxiYWNrIGNhbm5vdCByZXR1cm4gdGhhdCBzYW1lIHByb21pc2UuJylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkJCRpbnRlcm5hbCQkZ2V0VGhlbihwcm9taXNlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuO1xuICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAkJCRpbnRlcm5hbCQkR0VUX1RIRU5fRVJST1IuZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgcmV0dXJuICQkJGludGVybmFsJCRHRVRfVEhFTl9FUlJPUjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkJCRpbnRlcm5hbCQkdHJ5VGhlbih0aGVuLCB2YWx1ZSwgZnVsZmlsbG1lbnRIYW5kbGVyLCByZWplY3Rpb25IYW5kbGVyKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGZ1bGZpbGxtZW50SGFuZGxlciwgcmVqZWN0aW9uSGFuZGxlcik7XG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gJCQkaW50ZXJuYWwkJGhhbmRsZUZvcmVpZ25UaGVuYWJsZShwcm9taXNlLCB0aGVuYWJsZSwgdGhlbikge1xuICAgICAgICQkYXNhcCQkZGVmYXVsdChmdW5jdGlvbihwcm9taXNlKSB7XG4gICAgICAgIHZhciBzZWFsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIGVycm9yID0gJCQkaW50ZXJuYWwkJHRyeVRoZW4odGhlbiwgdGhlbmFibGUsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKHNlYWxlZCkgeyByZXR1cm47IH1cbiAgICAgICAgICBzZWFsZWQgPSB0cnVlO1xuICAgICAgICAgIGlmICh0aGVuYWJsZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICQkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgICAgaWYgKHNlYWxlZCkgeyByZXR1cm47IH1cbiAgICAgICAgICBzZWFsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgJCQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCByZWFzb24pO1xuICAgICAgICB9LCAnU2V0dGxlOiAnICsgKHByb21pc2UuX2xhYmVsIHx8ICcgdW5rbm93biBwcm9taXNlJykpO1xuXG4gICAgICAgIGlmICghc2VhbGVkICYmIGVycm9yKSB7XG4gICAgICAgICAgc2VhbGVkID0gdHJ1ZTtcbiAgICAgICAgICAkJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSwgcHJvbWlzZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gJCQkaW50ZXJuYWwkJGhhbmRsZU93blRoZW5hYmxlKHByb21pc2UsIHRoZW5hYmxlKSB7XG4gICAgICBpZiAodGhlbmFibGUuX3N0YXRlID09PSAkJCRpbnRlcm5hbCQkRlVMRklMTEVEKSB7XG4gICAgICAgICQkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIHRoZW5hYmxlLl9yZXN1bHQpO1xuICAgICAgfSBlbHNlIGlmIChwcm9taXNlLl9zdGF0ZSA9PT0gJCQkaW50ZXJuYWwkJFJFSkVDVEVEKSB7XG4gICAgICAgICQkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgdGhlbmFibGUuX3Jlc3VsdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkJCRpbnRlcm5hbCQkc3Vic2NyaWJlKHRoZW5hYmxlLCB1bmRlZmluZWQsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgJCQkaW50ZXJuYWwkJHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgICAkJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uICQkJGludGVybmFsJCRoYW5kbGVNYXliZVRoZW5hYmxlKHByb21pc2UsIG1heWJlVGhlbmFibGUpIHtcbiAgICAgIGlmIChtYXliZVRoZW5hYmxlLmNvbnN0cnVjdG9yID09PSBwcm9taXNlLmNvbnN0cnVjdG9yKSB7XG4gICAgICAgICQkJGludGVybmFsJCRoYW5kbGVPd25UaGVuYWJsZShwcm9taXNlLCBtYXliZVRoZW5hYmxlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciB0aGVuID0gJCQkaW50ZXJuYWwkJGdldFRoZW4obWF5YmVUaGVuYWJsZSk7XG5cbiAgICAgICAgaWYgKHRoZW4gPT09ICQkJGludGVybmFsJCRHRVRfVEhFTl9FUlJPUikge1xuICAgICAgICAgICQkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgJCQkaW50ZXJuYWwkJEdFVF9USEVOX0VSUk9SLmVycm9yKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGVuID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAkJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCBtYXliZVRoZW5hYmxlKTtcbiAgICAgICAgfSBlbHNlIGlmICgkJHV0aWxzJCRpc0Z1bmN0aW9uKHRoZW4pKSB7XG4gICAgICAgICAgJCQkaW50ZXJuYWwkJGhhbmRsZUZvcmVpZ25UaGVuYWJsZShwcm9taXNlLCBtYXliZVRoZW5hYmxlLCB0aGVuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCBtYXliZVRoZW5hYmxlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uICQkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIHZhbHVlKSB7XG4gICAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgJCQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCAkJCRpbnRlcm5hbCQkc2VsZkZ1bGxmaWxsbWVudCgpKTtcbiAgICAgIH0gZWxzZSBpZiAoJCR1dGlscyQkb2JqZWN0T3JGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgICAgJCQkaW50ZXJuYWwkJGhhbmRsZU1heWJlVGhlbmFibGUocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uICQkJGludGVybmFsJCRwdWJsaXNoUmVqZWN0aW9uKHByb21pc2UpIHtcbiAgICAgIGlmIChwcm9taXNlLl9vbmVycm9yKSB7XG4gICAgICAgIHByb21pc2UuX29uZXJyb3IocHJvbWlzZS5fcmVzdWx0KTtcbiAgICAgIH1cblxuICAgICAgJCQkaW50ZXJuYWwkJHB1Ymxpc2gocHJvbWlzZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gJCQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpIHtcbiAgICAgIGlmIChwcm9taXNlLl9zdGF0ZSAhPT0gJCQkaW50ZXJuYWwkJFBFTkRJTkcpIHsgcmV0dXJuOyB9XG5cbiAgICAgIHByb21pc2UuX3Jlc3VsdCA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fc3RhdGUgPSAkJCRpbnRlcm5hbCQkRlVMRklMTEVEO1xuXG4gICAgICBpZiAocHJvbWlzZS5fc3Vic2NyaWJlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkJGFzYXAkJGRlZmF1bHQoJCQkaW50ZXJuYWwkJHB1Ymxpc2gsIHByb21pc2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uICQkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgcmVhc29uKSB7XG4gICAgICBpZiAocHJvbWlzZS5fc3RhdGUgIT09ICQkJGludGVybmFsJCRQRU5ESU5HKSB7IHJldHVybjsgfVxuICAgICAgcHJvbWlzZS5fc3RhdGUgPSAkJCRpbnRlcm5hbCQkUkVKRUNURUQ7XG4gICAgICBwcm9taXNlLl9yZXN1bHQgPSByZWFzb247XG5cbiAgICAgICQkYXNhcCQkZGVmYXVsdCgkJCRpbnRlcm5hbCQkcHVibGlzaFJlamVjdGlvbiwgcHJvbWlzZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gJCQkaW50ZXJuYWwkJHN1YnNjcmliZShwYXJlbnQsIGNoaWxkLCBvbkZ1bGZpbGxtZW50LCBvblJlamVjdGlvbikge1xuICAgICAgdmFyIHN1YnNjcmliZXJzID0gcGFyZW50Ll9zdWJzY3JpYmVycztcbiAgICAgIHZhciBsZW5ndGggPSBzdWJzY3JpYmVycy5sZW5ndGg7XG5cbiAgICAgIHBhcmVudC5fb25lcnJvciA9IG51bGw7XG5cbiAgICAgIHN1YnNjcmliZXJzW2xlbmd0aF0gPSBjaGlsZDtcbiAgICAgIHN1YnNjcmliZXJzW2xlbmd0aCArICQkJGludGVybmFsJCRGVUxGSUxMRURdID0gb25GdWxmaWxsbWVudDtcbiAgICAgIHN1YnNjcmliZXJzW2xlbmd0aCArICQkJGludGVybmFsJCRSRUpFQ1RFRF0gID0gb25SZWplY3Rpb247XG5cbiAgICAgIGlmIChsZW5ndGggPT09IDAgJiYgcGFyZW50Ll9zdGF0ZSkge1xuICAgICAgICAkJGFzYXAkJGRlZmF1bHQoJCQkaW50ZXJuYWwkJHB1Ymxpc2gsIHBhcmVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gJCQkaW50ZXJuYWwkJHB1Ymxpc2gocHJvbWlzZSkge1xuICAgICAgdmFyIHN1YnNjcmliZXJzID0gcHJvbWlzZS5fc3Vic2NyaWJlcnM7XG4gICAgICB2YXIgc2V0dGxlZCA9IHByb21pc2UuX3N0YXRlO1xuXG4gICAgICBpZiAoc3Vic2NyaWJlcnMubGVuZ3RoID09PSAwKSB7IHJldHVybjsgfVxuXG4gICAgICB2YXIgY2hpbGQsIGNhbGxiYWNrLCBkZXRhaWwgPSBwcm9taXNlLl9yZXN1bHQ7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3Vic2NyaWJlcnMubGVuZ3RoOyBpICs9IDMpIHtcbiAgICAgICAgY2hpbGQgPSBzdWJzY3JpYmVyc1tpXTtcbiAgICAgICAgY2FsbGJhY2sgPSBzdWJzY3JpYmVyc1tpICsgc2V0dGxlZF07XG5cbiAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgJCQkaW50ZXJuYWwkJGludm9rZUNhbGxiYWNrKHNldHRsZWQsIGNoaWxkLCBjYWxsYmFjaywgZGV0YWlsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYWxsYmFjayhkZXRhaWwpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHByb21pc2UuX3N1YnNjcmliZXJzLmxlbmd0aCA9IDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gJCQkaW50ZXJuYWwkJEVycm9yT2JqZWN0KCkge1xuICAgICAgdGhpcy5lcnJvciA9IG51bGw7XG4gICAgfVxuXG4gICAgdmFyICQkJGludGVybmFsJCRUUllfQ0FUQ0hfRVJST1IgPSBuZXcgJCQkaW50ZXJuYWwkJEVycm9yT2JqZWN0KCk7XG5cbiAgICBmdW5jdGlvbiAkJCRpbnRlcm5hbCQkdHJ5Q2F0Y2goY2FsbGJhY2ssIGRldGFpbCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGRldGFpbCk7XG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgJCQkaW50ZXJuYWwkJFRSWV9DQVRDSF9FUlJPUi5lcnJvciA9IGU7XG4gICAgICAgIHJldHVybiAkJCRpbnRlcm5hbCQkVFJZX0NBVENIX0VSUk9SO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uICQkJGludGVybmFsJCRpbnZva2VDYWxsYmFjayhzZXR0bGVkLCBwcm9taXNlLCBjYWxsYmFjaywgZGV0YWlsKSB7XG4gICAgICB2YXIgaGFzQ2FsbGJhY2sgPSAkJHV0aWxzJCRpc0Z1bmN0aW9uKGNhbGxiYWNrKSxcbiAgICAgICAgICB2YWx1ZSwgZXJyb3IsIHN1Y2NlZWRlZCwgZmFpbGVkO1xuXG4gICAgICBpZiAoaGFzQ2FsbGJhY2spIHtcbiAgICAgICAgdmFsdWUgPSAkJCRpbnRlcm5hbCQkdHJ5Q2F0Y2goY2FsbGJhY2ssIGRldGFpbCk7XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSAkJCRpbnRlcm5hbCQkVFJZX0NBVENIX0VSUk9SKSB7XG4gICAgICAgICAgZmFpbGVkID0gdHJ1ZTtcbiAgICAgICAgICBlcnJvciA9IHZhbHVlLmVycm9yO1xuICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdWNjZWVkZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB7XG4gICAgICAgICAgJCQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCAkJCRpbnRlcm5hbCQkY2Fubm90UmV0dXJuT3duKCkpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IGRldGFpbDtcbiAgICAgICAgc3VjY2VlZGVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb21pc2UuX3N0YXRlICE9PSAkJCRpbnRlcm5hbCQkUEVORElORykge1xuICAgICAgICAvLyBub29wXG4gICAgICB9IGVsc2UgaWYgKGhhc0NhbGxiYWNrICYmIHN1Y2NlZWRlZCkge1xuICAgICAgICAkJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGZhaWxlZCkge1xuICAgICAgICAkJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIGVycm9yKTtcbiAgICAgIH0gZWxzZSBpZiAoc2V0dGxlZCA9PT0gJCQkaW50ZXJuYWwkJEZVTEZJTExFRCkge1xuICAgICAgICAkJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKHNldHRsZWQgPT09ICQkJGludGVybmFsJCRSRUpFQ1RFRCkge1xuICAgICAgICAkJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkJCRpbnRlcm5hbCQkaW5pdGlhbGl6ZVByb21pc2UocHJvbWlzZSwgcmVzb2x2ZXIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlc29sdmVyKGZ1bmN0aW9uIHJlc29sdmVQcm9taXNlKHZhbHVlKXtcbiAgICAgICAgICAkJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIHJlamVjdFByb21pc2UocmVhc29uKSB7XG4gICAgICAgICAgJCQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCByZWFzb24pO1xuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAkJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uICQkJGVudW1lcmF0b3IkJG1ha2VTZXR0bGVkUmVzdWx0KHN0YXRlLCBwb3NpdGlvbiwgdmFsdWUpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gJCQkaW50ZXJuYWwkJEZVTEZJTExFRCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN0YXRlOiAnZnVsZmlsbGVkJyxcbiAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3RhdGU6ICdyZWplY3RlZCcsXG4gICAgICAgICAgcmVhc29uOiB2YWx1ZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uICQkJGVudW1lcmF0b3IkJEVudW1lcmF0b3IoQ29uc3RydWN0b3IsIGlucHV0LCBhYm9ydE9uUmVqZWN0LCBsYWJlbCkge1xuICAgICAgdGhpcy5faW5zdGFuY2VDb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yO1xuICAgICAgdGhpcy5wcm9taXNlID0gbmV3IENvbnN0cnVjdG9yKCQkJGludGVybmFsJCRub29wLCBsYWJlbCk7XG4gICAgICB0aGlzLl9hYm9ydE9uUmVqZWN0ID0gYWJvcnRPblJlamVjdDtcblxuICAgICAgaWYgKHRoaXMuX3ZhbGlkYXRlSW5wdXQoaW5wdXQpKSB7XG4gICAgICAgIHRoaXMuX2lucHV0ICAgICA9IGlucHV0O1xuICAgICAgICB0aGlzLmxlbmd0aCAgICAgPSBpbnB1dC5sZW5ndGg7XG4gICAgICAgIHRoaXMuX3JlbWFpbmluZyA9IGlucHV0Lmxlbmd0aDtcblxuICAgICAgICB0aGlzLl9pbml0KCk7XG5cbiAgICAgICAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgJCQkaW50ZXJuYWwkJGZ1bGZpbGwodGhpcy5wcm9taXNlLCB0aGlzLl9yZXN1bHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubGVuZ3RoID0gdGhpcy5sZW5ndGggfHwgMDtcbiAgICAgICAgICB0aGlzLl9lbnVtZXJhdGUoKTtcbiAgICAgICAgICBpZiAodGhpcy5fcmVtYWluaW5nID09PSAwKSB7XG4gICAgICAgICAgICAkJCRpbnRlcm5hbCQkZnVsZmlsbCh0aGlzLnByb21pc2UsIHRoaXMuX3Jlc3VsdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkJCRpbnRlcm5hbCQkcmVqZWN0KHRoaXMucHJvbWlzZSwgdGhpcy5fdmFsaWRhdGlvbkVycm9yKCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgICQkJGVudW1lcmF0b3IkJEVudW1lcmF0b3IucHJvdG90eXBlLl92YWxpZGF0ZUlucHV0ID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgIHJldHVybiAkJHV0aWxzJCRpc0FycmF5KGlucHV0KTtcbiAgICB9O1xuXG4gICAgJCQkZW51bWVyYXRvciQkRW51bWVyYXRvci5wcm90b3R5cGUuX3ZhbGlkYXRpb25FcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignQXJyYXkgTWV0aG9kcyBtdXN0IGJlIHByb3ZpZGVkIGFuIEFycmF5Jyk7XG4gICAgfTtcblxuICAgICQkJGVudW1lcmF0b3IkJEVudW1lcmF0b3IucHJvdG90eXBlLl9pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9yZXN1bHQgPSBuZXcgQXJyYXkodGhpcy5sZW5ndGgpO1xuICAgIH07XG5cbiAgICB2YXIgJCQkZW51bWVyYXRvciQkZGVmYXVsdCA9ICQkJGVudW1lcmF0b3IkJEVudW1lcmF0b3I7XG5cbiAgICAkJCRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yLnByb3RvdHlwZS5fZW51bWVyYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbGVuZ3RoICA9IHRoaXMubGVuZ3RoO1xuICAgICAgdmFyIHByb21pc2UgPSB0aGlzLnByb21pc2U7XG4gICAgICB2YXIgaW5wdXQgICA9IHRoaXMuX2lucHV0O1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgcHJvbWlzZS5fc3RhdGUgPT09ICQkJGludGVybmFsJCRQRU5ESU5HICYmIGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLl9lYWNoRW50cnkoaW5wdXRbaV0sIGkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAkJCRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yLnByb3RvdHlwZS5fZWFjaEVudHJ5ID0gZnVuY3Rpb24oZW50cnksIGkpIHtcbiAgICAgIHZhciBjID0gdGhpcy5faW5zdGFuY2VDb25zdHJ1Y3RvcjtcbiAgICAgIGlmICgkJHV0aWxzJCRpc01heWJlVGhlbmFibGUoZW50cnkpKSB7XG4gICAgICAgIGlmIChlbnRyeS5jb25zdHJ1Y3RvciA9PT0gYyAmJiBlbnRyeS5fc3RhdGUgIT09ICQkJGludGVybmFsJCRQRU5ESU5HKSB7XG4gICAgICAgICAgZW50cnkuX29uZXJyb3IgPSBudWxsO1xuICAgICAgICAgIHRoaXMuX3NldHRsZWRBdChlbnRyeS5fc3RhdGUsIGksIGVudHJ5Ll9yZXN1bHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3dpbGxTZXR0bGVBdChjLnJlc29sdmUoZW50cnkpLCBpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVtYWluaW5nLS07XG4gICAgICAgIHRoaXMuX3Jlc3VsdFtpXSA9IHRoaXMuX21ha2VSZXN1bHQoJCQkaW50ZXJuYWwkJEZVTEZJTExFRCwgaSwgZW50cnkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAkJCRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yLnByb3RvdHlwZS5fc2V0dGxlZEF0ID0gZnVuY3Rpb24oc3RhdGUsIGksIHZhbHVlKSB7XG4gICAgICB2YXIgcHJvbWlzZSA9IHRoaXMucHJvbWlzZTtcblxuICAgICAgaWYgKHByb21pc2UuX3N0YXRlID09PSAkJCRpbnRlcm5hbCQkUEVORElORykge1xuICAgICAgICB0aGlzLl9yZW1haW5pbmctLTtcblxuICAgICAgICBpZiAodGhpcy5fYWJvcnRPblJlamVjdCAmJiBzdGF0ZSA9PT0gJCQkaW50ZXJuYWwkJFJFSkVDVEVEKSB7XG4gICAgICAgICAgJCQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCB2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fcmVzdWx0W2ldID0gdGhpcy5fbWFrZVJlc3VsdChzdGF0ZSwgaSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9yZW1haW5pbmcgPT09IDApIHtcbiAgICAgICAgJCQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgdGhpcy5fcmVzdWx0KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgJCQkZW51bWVyYXRvciQkRW51bWVyYXRvci5wcm90b3R5cGUuX21ha2VSZXN1bHQgPSBmdW5jdGlvbihzdGF0ZSwgaSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuXG4gICAgJCQkZW51bWVyYXRvciQkRW51bWVyYXRvci5wcm90b3R5cGUuX3dpbGxTZXR0bGVBdCA9IGZ1bmN0aW9uKHByb21pc2UsIGkpIHtcbiAgICAgIHZhciBlbnVtZXJhdG9yID0gdGhpcztcblxuICAgICAgJCQkaW50ZXJuYWwkJHN1YnNjcmliZShwcm9taXNlLCB1bmRlZmluZWQsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGVudW1lcmF0b3IuX3NldHRsZWRBdCgkJCRpbnRlcm5hbCQkRlVMRklMTEVELCBpLCB2YWx1ZSk7XG4gICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgZW51bWVyYXRvci5fc2V0dGxlZEF0KCQkJGludGVybmFsJCRSRUpFQ1RFRCwgaSwgcmVhc29uKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgJCRwcm9taXNlJGFsbCQkZGVmYXVsdCA9IGZ1bmN0aW9uIGFsbChlbnRyaWVzLCBsYWJlbCkge1xuICAgICAgcmV0dXJuIG5ldyAkJCRlbnVtZXJhdG9yJCRkZWZhdWx0KHRoaXMsIGVudHJpZXMsIHRydWUgLyogYWJvcnQgb24gcmVqZWN0ICovLCBsYWJlbCkucHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdmFyICQkcHJvbWlzZSRyYWNlJCRkZWZhdWx0ID0gZnVuY3Rpb24gcmFjZShlbnRyaWVzLCBsYWJlbCkge1xuICAgICAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgICAgIHZhciBDb25zdHJ1Y3RvciA9IHRoaXM7XG5cbiAgICAgIHZhciBwcm9taXNlID0gbmV3IENvbnN0cnVjdG9yKCQkJGludGVybmFsJCRub29wLCBsYWJlbCk7XG5cbiAgICAgIGlmICghJCR1dGlscyQkaXNBcnJheShlbnRyaWVzKSkge1xuICAgICAgICAkJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIG5ldyBUeXBlRXJyb3IoJ1lvdSBtdXN0IHBhc3MgYW4gYXJyYXkgdG8gcmFjZS4nKSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGVuZ3RoID0gZW50cmllcy5sZW5ndGg7XG5cbiAgICAgIGZ1bmN0aW9uIG9uRnVsZmlsbG1lbnQodmFsdWUpIHtcbiAgICAgICAgJCQkaW50ZXJuYWwkJHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBvblJlamVjdGlvbihyZWFzb24pIHtcbiAgICAgICAgJCQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCByZWFzb24pO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgcHJvbWlzZS5fc3RhdGUgPT09ICQkJGludGVybmFsJCRQRU5ESU5HICYmIGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAkJCRpbnRlcm5hbCQkc3Vic2NyaWJlKENvbnN0cnVjdG9yLnJlc29sdmUoZW50cmllc1tpXSksIHVuZGVmaW5lZCwgb25GdWxmaWxsbWVudCwgb25SZWplY3Rpb24pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdmFyICQkcHJvbWlzZSRyZXNvbHZlJCRkZWZhdWx0ID0gZnVuY3Rpb24gcmVzb2x2ZShvYmplY3QsIGxhYmVsKSB7XG4gICAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgICAgdmFyIENvbnN0cnVjdG9yID0gdGhpcztcblxuICAgICAgaWYgKG9iamVjdCAmJiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QuY29uc3RydWN0b3IgPT09IENvbnN0cnVjdG9yKSB7XG4gICAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgICB9XG5cbiAgICAgIHZhciBwcm9taXNlID0gbmV3IENvbnN0cnVjdG9yKCQkJGludGVybmFsJCRub29wLCBsYWJlbCk7XG4gICAgICAkJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCBvYmplY3QpO1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHZhciAkJHByb21pc2UkcmVqZWN0JCRkZWZhdWx0ID0gZnVuY3Rpb24gcmVqZWN0KHJlYXNvbiwgbGFiZWwpIHtcbiAgICAgIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gICAgICB2YXIgQ29uc3RydWN0b3IgPSB0aGlzO1xuICAgICAgdmFyIHByb21pc2UgPSBuZXcgQ29uc3RydWN0b3IoJCQkaW50ZXJuYWwkJG5vb3AsIGxhYmVsKTtcbiAgICAgICQkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB2YXIgJCRlczYkcHJvbWlzZSRwcm9taXNlJCRjb3VudGVyID0gMDtcblxuICAgIGZ1bmN0aW9uICQkZXM2JHByb21pc2UkcHJvbWlzZSQkbmVlZHNSZXNvbHZlcigpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1lvdSBtdXN0IHBhc3MgYSByZXNvbHZlciBmdW5jdGlvbiBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlIHByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkJGVzNiRwcm9taXNlJHByb21pc2UkJG5lZWRzTmV3KCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBjb25zdHJ1Y3QgJ1Byb21pc2UnOiBQbGVhc2UgdXNlIHRoZSAnbmV3JyBvcGVyYXRvciwgdGhpcyBvYmplY3QgY29uc3RydWN0b3IgY2Fubm90IGJlIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLlwiKTtcbiAgICB9XG5cbiAgICB2YXIgJCRlczYkcHJvbWlzZSRwcm9taXNlJCRkZWZhdWx0ID0gJCRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlO1xuXG4gICAgLyoqXG4gICAgICBQcm9taXNlIG9iamVjdHMgcmVwcmVzZW50IHRoZSBldmVudHVhbCByZXN1bHQgb2YgYW4gYXN5bmNocm9ub3VzIG9wZXJhdGlvbi4gVGhlXG4gICAgICBwcmltYXJ5IHdheSBvZiBpbnRlcmFjdGluZyB3aXRoIGEgcHJvbWlzZSBpcyB0aHJvdWdoIGl0cyBgdGhlbmAgbWV0aG9kLCB3aGljaFxuICAgICAgcmVnaXN0ZXJzIGNhbGxiYWNrcyB0byByZWNlaXZlIGVpdGhlciBhIHByb21pc2XigJlzIGV2ZW50dWFsIHZhbHVlIG9yIHRoZSByZWFzb25cbiAgICAgIHdoeSB0aGUgcHJvbWlzZSBjYW5ub3QgYmUgZnVsZmlsbGVkLlxuXG4gICAgICBUZXJtaW5vbG9neVxuICAgICAgLS0tLS0tLS0tLS1cblxuICAgICAgLSBgcHJvbWlzZWAgaXMgYW4gb2JqZWN0IG9yIGZ1bmN0aW9uIHdpdGggYSBgdGhlbmAgbWV0aG9kIHdob3NlIGJlaGF2aW9yIGNvbmZvcm1zIHRvIHRoaXMgc3BlY2lmaWNhdGlvbi5cbiAgICAgIC0gYHRoZW5hYmxlYCBpcyBhbiBvYmplY3Qgb3IgZnVuY3Rpb24gdGhhdCBkZWZpbmVzIGEgYHRoZW5gIG1ldGhvZC5cbiAgICAgIC0gYHZhbHVlYCBpcyBhbnkgbGVnYWwgSmF2YVNjcmlwdCB2YWx1ZSAoaW5jbHVkaW5nIHVuZGVmaW5lZCwgYSB0aGVuYWJsZSwgb3IgYSBwcm9taXNlKS5cbiAgICAgIC0gYGV4Y2VwdGlvbmAgaXMgYSB2YWx1ZSB0aGF0IGlzIHRocm93biB1c2luZyB0aGUgdGhyb3cgc3RhdGVtZW50LlxuICAgICAgLSBgcmVhc29uYCBpcyBhIHZhbHVlIHRoYXQgaW5kaWNhdGVzIHdoeSBhIHByb21pc2Ugd2FzIHJlamVjdGVkLlxuICAgICAgLSBgc2V0dGxlZGAgdGhlIGZpbmFsIHJlc3Rpbmcgc3RhdGUgb2YgYSBwcm9taXNlLCBmdWxmaWxsZWQgb3IgcmVqZWN0ZWQuXG5cbiAgICAgIEEgcHJvbWlzZSBjYW4gYmUgaW4gb25lIG9mIHRocmVlIHN0YXRlczogcGVuZGluZywgZnVsZmlsbGVkLCBvciByZWplY3RlZC5cblxuICAgICAgUHJvbWlzZXMgdGhhdCBhcmUgZnVsZmlsbGVkIGhhdmUgYSBmdWxmaWxsbWVudCB2YWx1ZSBhbmQgYXJlIGluIHRoZSBmdWxmaWxsZWRcbiAgICAgIHN0YXRlLiAgUHJvbWlzZXMgdGhhdCBhcmUgcmVqZWN0ZWQgaGF2ZSBhIHJlamVjdGlvbiByZWFzb24gYW5kIGFyZSBpbiB0aGVcbiAgICAgIHJlamVjdGVkIHN0YXRlLiAgQSBmdWxmaWxsbWVudCB2YWx1ZSBpcyBuZXZlciBhIHRoZW5hYmxlLlxuXG4gICAgICBQcm9taXNlcyBjYW4gYWxzbyBiZSBzYWlkIHRvICpyZXNvbHZlKiBhIHZhbHVlLiAgSWYgdGhpcyB2YWx1ZSBpcyBhbHNvIGFcbiAgICAgIHByb21pc2UsIHRoZW4gdGhlIG9yaWdpbmFsIHByb21pc2UncyBzZXR0bGVkIHN0YXRlIHdpbGwgbWF0Y2ggdGhlIHZhbHVlJ3NcbiAgICAgIHNldHRsZWQgc3RhdGUuICBTbyBhIHByb21pc2UgdGhhdCAqcmVzb2x2ZXMqIGEgcHJvbWlzZSB0aGF0IHJlamVjdHMgd2lsbFxuICAgICAgaXRzZWxmIHJlamVjdCwgYW5kIGEgcHJvbWlzZSB0aGF0ICpyZXNvbHZlcyogYSBwcm9taXNlIHRoYXQgZnVsZmlsbHMgd2lsbFxuICAgICAgaXRzZWxmIGZ1bGZpbGwuXG5cblxuICAgICAgQmFzaWMgVXNhZ2U6XG4gICAgICAtLS0tLS0tLS0tLS1cblxuICAgICAgYGBganNcbiAgICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIC8vIG9uIHN1Y2Nlc3NcbiAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG5cbiAgICAgICAgLy8gb24gZmFpbHVyZVxuICAgICAgICByZWplY3QocmVhc29uKTtcbiAgICAgIH0pO1xuXG4gICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgLy8gb24gZnVsZmlsbG1lbnRcbiAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICAvLyBvbiByZWplY3Rpb25cbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIEFkdmFuY2VkIFVzYWdlOlxuICAgICAgLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIFByb21pc2VzIHNoaW5lIHdoZW4gYWJzdHJhY3RpbmcgYXdheSBhc3luY2hyb25vdXMgaW50ZXJhY3Rpb25zIHN1Y2ggYXNcbiAgICAgIGBYTUxIdHRwUmVxdWVzdGBzLlxuXG4gICAgICBgYGBqc1xuICAgICAgZnVuY3Rpb24gZ2V0SlNPTih1cmwpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHVybCk7XG4gICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGhhbmRsZXI7XG4gICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgICAgICB4aHIuc2VuZCgpO1xuXG4gICAgICAgICAgZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IHRoaXMuRE9ORSkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5yZXNwb25zZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignZ2V0SlNPTjogYCcgKyB1cmwgKyAnYCBmYWlsZWQgd2l0aCBzdGF0dXM6IFsnICsgdGhpcy5zdGF0dXMgKyAnXScpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBnZXRKU09OKCcvcG9zdHMuanNvbicpLnRoZW4oZnVuY3Rpb24oanNvbikge1xuICAgICAgICAvLyBvbiBmdWxmaWxsbWVudFxuICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgIC8vIG9uIHJlamVjdGlvblxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgVW5saWtlIGNhbGxiYWNrcywgcHJvbWlzZXMgYXJlIGdyZWF0IGNvbXBvc2FibGUgcHJpbWl0aXZlcy5cblxuICAgICAgYGBganNcbiAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgZ2V0SlNPTignL3Bvc3RzJyksXG4gICAgICAgIGdldEpTT04oJy9jb21tZW50cycpXG4gICAgICBdKS50aGVuKGZ1bmN0aW9uKHZhbHVlcyl7XG4gICAgICAgIHZhbHVlc1swXSAvLyA9PiBwb3N0c0pTT05cbiAgICAgICAgdmFsdWVzWzFdIC8vID0+IGNvbW1lbnRzSlNPTlxuXG4gICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBAY2xhc3MgUHJvbWlzZVxuICAgICAgQHBhcmFtIHtmdW5jdGlvbn0gcmVzb2x2ZXJcbiAgICAgIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgICAgIEBjb25zdHJ1Y3RvclxuICAgICovXG4gICAgZnVuY3Rpb24gJCRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlKHJlc29sdmVyKSB7XG4gICAgICB0aGlzLl9pZCA9ICQkZXM2JHByb21pc2UkcHJvbWlzZSQkY291bnRlcisrO1xuICAgICAgdGhpcy5fc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZXN1bHQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zdWJzY3JpYmVycyA9IFtdO1xuXG4gICAgICBpZiAoJCQkaW50ZXJuYWwkJG5vb3AgIT09IHJlc29sdmVyKSB7XG4gICAgICAgIGlmICghJCR1dGlscyQkaXNGdW5jdGlvbihyZXNvbHZlcikpIHtcbiAgICAgICAgICAkJGVzNiRwcm9taXNlJHByb21pc2UkJG5lZWRzUmVzb2x2ZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiAkJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UpKSB7XG4gICAgICAgICAgJCRlczYkcHJvbWlzZSRwcm9taXNlJCRuZWVkc05ldygpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCQkaW50ZXJuYWwkJGluaXRpYWxpemVQcm9taXNlKHRoaXMsIHJlc29sdmVyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAkJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UuYWxsID0gJCRwcm9taXNlJGFsbCQkZGVmYXVsdDtcbiAgICAkJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UucmFjZSA9ICQkcHJvbWlzZSRyYWNlJCRkZWZhdWx0O1xuICAgICQkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZS5yZXNvbHZlID0gJCRwcm9taXNlJHJlc29sdmUkJGRlZmF1bHQ7XG4gICAgJCRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlLnJlamVjdCA9ICQkcHJvbWlzZSRyZWplY3QkJGRlZmF1bHQ7XG5cbiAgICAkJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UucHJvdG90eXBlID0ge1xuICAgICAgY29uc3RydWN0b3I6ICQkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZSxcblxuICAgIC8qKlxuICAgICAgVGhlIHByaW1hcnkgd2F5IG9mIGludGVyYWN0aW5nIHdpdGggYSBwcm9taXNlIGlzIHRocm91Z2ggaXRzIGB0aGVuYCBtZXRob2QsXG4gICAgICB3aGljaCByZWdpc3RlcnMgY2FsbGJhY2tzIHRvIHJlY2VpdmUgZWl0aGVyIGEgcHJvbWlzZSdzIGV2ZW50dWFsIHZhbHVlIG9yIHRoZVxuICAgICAgcmVhc29uIHdoeSB0aGUgcHJvbWlzZSBjYW5ub3QgYmUgZnVsZmlsbGVkLlxuXG4gICAgICBgYGBqc1xuICAgICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uKHVzZXIpe1xuICAgICAgICAvLyB1c2VyIGlzIGF2YWlsYWJsZVxuICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKXtcbiAgICAgICAgLy8gdXNlciBpcyB1bmF2YWlsYWJsZSwgYW5kIHlvdSBhcmUgZ2l2ZW4gdGhlIHJlYXNvbiB3aHlcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIENoYWluaW5nXG4gICAgICAtLS0tLS0tLVxuXG4gICAgICBUaGUgcmV0dXJuIHZhbHVlIG9mIGB0aGVuYCBpcyBpdHNlbGYgYSBwcm9taXNlLiAgVGhpcyBzZWNvbmQsICdkb3duc3RyZWFtJ1xuICAgICAgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGZpcnN0IHByb21pc2UncyBmdWxmaWxsbWVudFxuICAgICAgb3IgcmVqZWN0aW9uIGhhbmRsZXIsIG9yIHJlamVjdGVkIGlmIHRoZSBoYW5kbGVyIHRocm93cyBhbiBleGNlcHRpb24uXG5cbiAgICAgIGBgYGpzXG4gICAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICAgcmV0dXJuIHVzZXIubmFtZTtcbiAgICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgcmV0dXJuICdkZWZhdWx0IG5hbWUnO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAodXNlck5hbWUpIHtcbiAgICAgICAgLy8gSWYgYGZpbmRVc2VyYCBmdWxmaWxsZWQsIGB1c2VyTmFtZWAgd2lsbCBiZSB0aGUgdXNlcidzIG5hbWUsIG90aGVyd2lzZSBpdFxuICAgICAgICAvLyB3aWxsIGJlIGAnZGVmYXVsdCBuYW1lJ2BcbiAgICAgIH0pO1xuXG4gICAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3VuZCB1c2VyLCBidXQgc3RpbGwgdW5oYXBweScpO1xuICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2BmaW5kVXNlcmAgcmVqZWN0ZWQgYW5kIHdlJ3JlIHVuaGFwcHknKTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIC8vIG5ldmVyIHJlYWNoZWRcbiAgICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgLy8gaWYgYGZpbmRVc2VyYCBmdWxmaWxsZWQsIGByZWFzb25gIHdpbGwgYmUgJ0ZvdW5kIHVzZXIsIGJ1dCBzdGlsbCB1bmhhcHB5Jy5cbiAgICAgICAgLy8gSWYgYGZpbmRVc2VyYCByZWplY3RlZCwgYHJlYXNvbmAgd2lsbCBiZSAnYGZpbmRVc2VyYCByZWplY3RlZCBhbmQgd2UncmUgdW5oYXBweScuXG4gICAgICB9KTtcbiAgICAgIGBgYFxuICAgICAgSWYgdGhlIGRvd25zdHJlYW0gcHJvbWlzZSBkb2VzIG5vdCBzcGVjaWZ5IGEgcmVqZWN0aW9uIGhhbmRsZXIsIHJlamVjdGlvbiByZWFzb25zIHdpbGwgYmUgcHJvcGFnYXRlZCBmdXJ0aGVyIGRvd25zdHJlYW0uXG5cbiAgICAgIGBgYGpzXG4gICAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IFBlZGFnb2dpY2FsRXhjZXB0aW9uKCdVcHN0cmVhbSBlcnJvcicpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgLy8gbmV2ZXIgcmVhY2hlZFxuICAgICAgfSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgLy8gbmV2ZXIgcmVhY2hlZFxuICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAvLyBUaGUgYFBlZGdhZ29jaWFsRXhjZXB0aW9uYCBpcyBwcm9wYWdhdGVkIGFsbCB0aGUgd2F5IGRvd24gdG8gaGVyZVxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgQXNzaW1pbGF0aW9uXG4gICAgICAtLS0tLS0tLS0tLS1cblxuICAgICAgU29tZXRpbWVzIHRoZSB2YWx1ZSB5b3Ugd2FudCB0byBwcm9wYWdhdGUgdG8gYSBkb3duc3RyZWFtIHByb21pc2UgY2FuIG9ubHkgYmVcbiAgICAgIHJldHJpZXZlZCBhc3luY2hyb25vdXNseS4gVGhpcyBjYW4gYmUgYWNoaWV2ZWQgYnkgcmV0dXJuaW5nIGEgcHJvbWlzZSBpbiB0aGVcbiAgICAgIGZ1bGZpbGxtZW50IG9yIHJlamVjdGlvbiBoYW5kbGVyLiBUaGUgZG93bnN0cmVhbSBwcm9taXNlIHdpbGwgdGhlbiBiZSBwZW5kaW5nXG4gICAgICB1bnRpbCB0aGUgcmV0dXJuZWQgcHJvbWlzZSBpcyBzZXR0bGVkLiBUaGlzIGlzIGNhbGxlZCAqYXNzaW1pbGF0aW9uKi5cblxuICAgICAgYGBganNcbiAgICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgICByZXR1cm4gZmluZENvbW1lbnRzQnlBdXRob3IodXNlcik7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChjb21tZW50cykge1xuICAgICAgICAvLyBUaGUgdXNlcidzIGNvbW1lbnRzIGFyZSBub3cgYXZhaWxhYmxlXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBJZiB0aGUgYXNzaW1saWF0ZWQgcHJvbWlzZSByZWplY3RzLCB0aGVuIHRoZSBkb3duc3RyZWFtIHByb21pc2Ugd2lsbCBhbHNvIHJlamVjdC5cblxuICAgICAgYGBganNcbiAgICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgICByZXR1cm4gZmluZENvbW1lbnRzQnlBdXRob3IodXNlcik7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChjb21tZW50cykge1xuICAgICAgICAvLyBJZiBgZmluZENvbW1lbnRzQnlBdXRob3JgIGZ1bGZpbGxzLCB3ZSdsbCBoYXZlIHRoZSB2YWx1ZSBoZXJlXG4gICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIC8vIElmIGBmaW5kQ29tbWVudHNCeUF1dGhvcmAgcmVqZWN0cywgd2UnbGwgaGF2ZSB0aGUgcmVhc29uIGhlcmVcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIFNpbXBsZSBFeGFtcGxlXG4gICAgICAtLS0tLS0tLS0tLS0tLVxuXG4gICAgICBTeW5jaHJvbm91cyBFeGFtcGxlXG5cbiAgICAgIGBgYGphdmFzY3JpcHRcbiAgICAgIHZhciByZXN1bHQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJlc3VsdCA9IGZpbmRSZXN1bHQoKTtcbiAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgfSBjYXRjaChyZWFzb24pIHtcbiAgICAgICAgLy8gZmFpbHVyZVxuICAgICAgfVxuICAgICAgYGBgXG5cbiAgICAgIEVycmJhY2sgRXhhbXBsZVxuXG4gICAgICBgYGBqc1xuICAgICAgZmluZFJlc3VsdChmdW5jdGlvbihyZXN1bHQsIGVycil7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAvLyBmYWlsdXJlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBQcm9taXNlIEV4YW1wbGU7XG5cbiAgICAgIGBgYGphdmFzY3JpcHRcbiAgICAgIGZpbmRSZXN1bHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XG4gICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgICAgIC8vIGZhaWx1cmVcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIEFkdmFuY2VkIEV4YW1wbGVcbiAgICAgIC0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIFN5bmNocm9ub3VzIEV4YW1wbGVcblxuICAgICAgYGBgamF2YXNjcmlwdFxuICAgICAgdmFyIGF1dGhvciwgYm9va3M7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGF1dGhvciA9IGZpbmRBdXRob3IoKTtcbiAgICAgICAgYm9va3MgID0gZmluZEJvb2tzQnlBdXRob3IoYXV0aG9yKTtcbiAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgfSBjYXRjaChyZWFzb24pIHtcbiAgICAgICAgLy8gZmFpbHVyZVxuICAgICAgfVxuICAgICAgYGBgXG5cbiAgICAgIEVycmJhY2sgRXhhbXBsZVxuXG4gICAgICBgYGBqc1xuXG4gICAgICBmdW5jdGlvbiBmb3VuZEJvb2tzKGJvb2tzKSB7XG5cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZmFpbHVyZShyZWFzb24pIHtcblxuICAgICAgfVxuXG4gICAgICBmaW5kQXV0aG9yKGZ1bmN0aW9uKGF1dGhvciwgZXJyKXtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIGZhaWx1cmUoZXJyKTtcbiAgICAgICAgICAvLyBmYWlsdXJlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZpbmRCb29va3NCeUF1dGhvcihhdXRob3IsIGZ1bmN0aW9uKGJvb2tzLCBlcnIpIHtcbiAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGZhaWx1cmUoZXJyKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgZm91bmRCb29rcyhib29rcyk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaChyZWFzb24pIHtcbiAgICAgICAgICAgICAgICAgIGZhaWx1cmUocmVhc29uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgIGZhaWx1cmUoZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBQcm9taXNlIEV4YW1wbGU7XG5cbiAgICAgIGBgYGphdmFzY3JpcHRcbiAgICAgIGZpbmRBdXRob3IoKS5cbiAgICAgICAgdGhlbihmaW5kQm9va3NCeUF1dGhvcikuXG4gICAgICAgIHRoZW4oZnVuY3Rpb24oYm9va3Mpe1xuICAgICAgICAgIC8vIGZvdW5kIGJvb2tzXG4gICAgICB9KS5jYXRjaChmdW5jdGlvbihyZWFzb24pe1xuICAgICAgICAvLyBzb21ldGhpbmcgd2VudCB3cm9uZ1xuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgQG1ldGhvZCB0aGVuXG4gICAgICBAcGFyYW0ge0Z1bmN0aW9ufSBvbkZ1bGZpbGxlZFxuICAgICAgQHBhcmFtIHtGdW5jdGlvbn0gb25SZWplY3RlZFxuICAgICAgVXNlZnVsIGZvciB0b29saW5nLlxuICAgICAgQHJldHVybiB7UHJvbWlzZX1cbiAgICAqL1xuICAgICAgdGhlbjogZnVuY3Rpb24ob25GdWxmaWxsbWVudCwgb25SZWplY3Rpb24pIHtcbiAgICAgICAgdmFyIHBhcmVudCA9IHRoaXM7XG4gICAgICAgIHZhciBzdGF0ZSA9IHBhcmVudC5fc3RhdGU7XG5cbiAgICAgICAgaWYgKHN0YXRlID09PSAkJCRpbnRlcm5hbCQkRlVMRklMTEVEICYmICFvbkZ1bGZpbGxtZW50IHx8IHN0YXRlID09PSAkJCRpbnRlcm5hbCQkUkVKRUNURUQgJiYgIW9uUmVqZWN0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2hpbGQgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcigkJCRpbnRlcm5hbCQkbm9vcCk7XG4gICAgICAgIHZhciByZXN1bHQgPSBwYXJlbnQuX3Jlc3VsdDtcblxuICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHNbc3RhdGUgLSAxXTtcbiAgICAgICAgICAkJGFzYXAkJGRlZmF1bHQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICQkJGludGVybmFsJCRpbnZva2VDYWxsYmFjayhzdGF0ZSwgY2hpbGQsIGNhbGxiYWNrLCByZXN1bHQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICQkJGludGVybmFsJCRzdWJzY3JpYmUocGFyZW50LCBjaGlsZCwgb25GdWxmaWxsbWVudCwgb25SZWplY3Rpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgfSxcblxuICAgIC8qKlxuICAgICAgYGNhdGNoYCBpcyBzaW1wbHkgc3VnYXIgZm9yIGB0aGVuKHVuZGVmaW5lZCwgb25SZWplY3Rpb24pYCB3aGljaCBtYWtlcyBpdCB0aGUgc2FtZVxuICAgICAgYXMgdGhlIGNhdGNoIGJsb2NrIG9mIGEgdHJ5L2NhdGNoIHN0YXRlbWVudC5cblxuICAgICAgYGBganNcbiAgICAgIGZ1bmN0aW9uIGZpbmRBdXRob3IoKXtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZG4ndCBmaW5kIHRoYXQgYXV0aG9yJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIHN5bmNocm9ub3VzXG4gICAgICB0cnkge1xuICAgICAgICBmaW5kQXV0aG9yKCk7XG4gICAgICB9IGNhdGNoKHJlYXNvbikge1xuICAgICAgICAvLyBzb21ldGhpbmcgd2VudCB3cm9uZ1xuICAgICAgfVxuXG4gICAgICAvLyBhc3luYyB3aXRoIHByb21pc2VzXG4gICAgICBmaW5kQXV0aG9yKCkuY2F0Y2goZnVuY3Rpb24ocmVhc29uKXtcbiAgICAgICAgLy8gc29tZXRoaW5nIHdlbnQgd3JvbmdcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIEBtZXRob2QgY2F0Y2hcbiAgICAgIEBwYXJhbSB7RnVuY3Rpb259IG9uUmVqZWN0aW9uXG4gICAgICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gICAgICBAcmV0dXJuIHtQcm9taXNlfVxuICAgICovXG4gICAgICAnY2F0Y2gnOiBmdW5jdGlvbihvblJlamVjdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0aW9uKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyICQkZXM2JHByb21pc2UkcG9seWZpbGwkJGRlZmF1bHQgPSBmdW5jdGlvbiBwb2x5ZmlsbCgpIHtcbiAgICAgIHZhciBsb2NhbDtcblxuICAgICAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGxvY2FsID0gZ2xvYmFsO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgICAgbG9jYWwgPSB3aW5kb3c7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2NhbCA9IHNlbGY7XG4gICAgICB9XG5cbiAgICAgIHZhciBlczZQcm9taXNlU3VwcG9ydCA9XG4gICAgICAgIFwiUHJvbWlzZVwiIGluIGxvY2FsICYmXG4gICAgICAgIC8vIFNvbWUgb2YgdGhlc2UgbWV0aG9kcyBhcmUgbWlzc2luZyBmcm9tXG4gICAgICAgIC8vIEZpcmVmb3gvQ2hyb21lIGV4cGVyaW1lbnRhbCBpbXBsZW1lbnRhdGlvbnNcbiAgICAgICAgXCJyZXNvbHZlXCIgaW4gbG9jYWwuUHJvbWlzZSAmJlxuICAgICAgICBcInJlamVjdFwiIGluIGxvY2FsLlByb21pc2UgJiZcbiAgICAgICAgXCJhbGxcIiBpbiBsb2NhbC5Qcm9taXNlICYmXG4gICAgICAgIFwicmFjZVwiIGluIGxvY2FsLlByb21pc2UgJiZcbiAgICAgICAgLy8gT2xkZXIgdmVyc2lvbiBvZiB0aGUgc3BlYyBoYWQgYSByZXNvbHZlciBvYmplY3RcbiAgICAgICAgLy8gYXMgdGhlIGFyZyByYXRoZXIgdGhhbiBhIGZ1bmN0aW9uXG4gICAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgcmVzb2x2ZTtcbiAgICAgICAgICBuZXcgbG9jYWwuUHJvbWlzZShmdW5jdGlvbihyKSB7IHJlc29sdmUgPSByOyB9KTtcbiAgICAgICAgICByZXR1cm4gJCR1dGlscyQkaXNGdW5jdGlvbihyZXNvbHZlKTtcbiAgICAgICAgfSgpKTtcblxuICAgICAgaWYgKCFlczZQcm9taXNlU3VwcG9ydCkge1xuICAgICAgICBsb2NhbC5Qcm9taXNlID0gJCRlczYkcHJvbWlzZSRwcm9taXNlJCRkZWZhdWx0O1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgZXM2JHByb21pc2UkdW1kJCRFUzZQcm9taXNlID0ge1xuICAgICAgJ1Byb21pc2UnOiAkJGVzNiRwcm9taXNlJHByb21pc2UkJGRlZmF1bHQsXG4gICAgICAncG9seWZpbGwnOiAkJGVzNiRwcm9taXNlJHBvbHlmaWxsJCRkZWZhdWx0XG4gICAgfTtcblxuICAgIC8qIGdsb2JhbCBkZWZpbmU6dHJ1ZSBtb2R1bGU6dHJ1ZSB3aW5kb3c6IHRydWUgKi9cbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmVbJ2FtZCddKSB7XG4gICAgICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBlczYkcHJvbWlzZSR1bWQkJEVTNlByb21pc2U7IH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlWydleHBvcnRzJ10pIHtcbiAgICAgIG1vZHVsZVsnZXhwb3J0cyddID0gZXM2JHByb21pc2UkdW1kJCRFUzZQcm9taXNlO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzWydFUzZQcm9taXNlJ10gPSBlczYkcHJvbWlzZSR1bWQkJEVTNlByb21pc2U7XG4gICAgfVxufSkuY2FsbCh0aGlzKTsiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5wcm9jZXNzLm5leHRUaWNrID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2FuU2V0SW1tZWRpYXRlID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiB3aW5kb3cuc2V0SW1tZWRpYXRlO1xuICAgIHZhciBjYW5NdXRhdGlvbk9ic2VydmVyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiB3aW5kb3cuTXV0YXRpb25PYnNlcnZlcjtcbiAgICB2YXIgY2FuUG9zdCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnBvc3RNZXNzYWdlICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyXG4gICAgO1xuXG4gICAgaWYgKGNhblNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGYpIHsgcmV0dXJuIHdpbmRvdy5zZXRJbW1lZGlhdGUoZikgfTtcbiAgICB9XG5cbiAgICB2YXIgcXVldWUgPSBbXTtcblxuICAgIGlmIChjYW5NdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgICAgIHZhciBoaWRkZW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcXVldWVMaXN0ID0gcXVldWUuc2xpY2UoKTtcbiAgICAgICAgICAgIHF1ZXVlLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICBxdWV1ZUxpc3QuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoaGlkZGVuRGl2LCB7IGF0dHJpYnV0ZXM6IHRydWUgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgICAgICBpZiAoIXF1ZXVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGhpZGRlbkRpdi5zZXRBdHRyaWJ1dGUoJ3llcycsICdubycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcXVldWUucHVzaChmbik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGNhblBvc3QpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIHZhciBzb3VyY2UgPSBldi5zb3VyY2U7XG4gICAgICAgICAgICBpZiAoKHNvdXJjZSA9PT0gd2luZG93IHx8IHNvdXJjZSA9PT0gbnVsbCkgJiYgZXYuZGF0YSA9PT0gJ3Byb2Nlc3MtdGljaycpIHtcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBpZiAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm4gPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKGZuKTtcbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSgncHJvY2Vzcy10aWNrJywgJyonKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgc2V0VGltZW91dChmbiwgMCk7XG4gICAgfTtcbn0pKCk7XG5cbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxuLy8gVE9ETyhzaHR5bG1hbilcbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuIiwiLypqc2xpbnQgbm9kZTp0cnVlKi9cbi8qZ2xvYmFscyBSVENQZWVyQ29ubmVjdGlvbiwgbW96UlRDUGVlckNvbm5lY3Rpb24sIHdlYmtpdFJUQ1BlZXJDb25uZWN0aW9uICovXG4vKmdsb2JhbHMgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uLCBtb3pSVENTZXNzaW9uRGVzY3JpcHRpb24gKi9cbi8qZ2xvYmFscyBSVENJY2VDYW5kaWRhdGUsIG1velJUQ0ljZUNhbmRpZGF0ZSAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgbXlSVENQZWVyQ29ubmVjdGlvbiA9IG51bGw7XG52YXIgbXlSVENTZXNzaW9uRGVzY3JpcHRpb24gPSBudWxsO1xudmFyIG15UlRDSWNlQ2FuZGlkYXRlID0gbnVsbDtcblxudmFyIHJlbmFtZUljZVVSTHMgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIGlmICghY29uZmlnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICghY29uZmlnLmljZVNlcnZlcnMpIHtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG4gIGNvbmZpZy5pY2VTZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gKHNlcnZlcikge1xuICAgIHNlcnZlci51cmwgPSBzZXJ2ZXIudXJscztcbiAgICBkZWxldGUgc2VydmVyLnVybHM7XG4gIH0pO1xuICByZXR1cm4gY29uZmlnO1xufTtcblxudmFyIGZpeENocm9tZVN0YXRzUmVzcG9uc2UgPSBmdW5jdGlvbihyZXNwb25zZSkge1xuICB2YXIgc3RhbmRhcmRSZXBvcnQgPSB7fTtcbiAgdmFyIHJlcG9ydHMgPSByZXNwb25zZS5yZXN1bHQoKTtcbiAgcmVwb3J0cy5mb3JFYWNoKGZ1bmN0aW9uKHJlcG9ydCkge1xuICAgIHZhciBzdGFuZGFyZFN0YXRzID0ge1xuICAgICAgaWQ6IHJlcG9ydC5pZCxcbiAgICAgIHRpbWVzdGFtcDogcmVwb3J0LnRpbWVzdGFtcCxcbiAgICAgIHR5cGU6IHJlcG9ydC50eXBlXG4gICAgfTtcbiAgICByZXBvcnQubmFtZXMoKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIHN0YW5kYXJkU3RhdHNbbmFtZV0gPSByZXBvcnQuc3RhdChuYW1lKTtcbiAgICB9KTtcbiAgICBzdGFuZGFyZFJlcG9ydFtzdGFuZGFyZFN0YXRzLmlkXSA9IHN0YW5kYXJkU3RhdHM7XG4gIH0pO1xuXG4gIHJldHVybiBzdGFuZGFyZFJlcG9ydDtcbn07XG5cbnZhciBzZXNzaW9uSGFzRGF0YSA9IGZ1bmN0aW9uKGRlc2MpIHtcbiAgaWYgKCFkZXNjKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBoYXNEYXRhID0gZmFsc2U7XG4gIHZhciBwcmVmaXggPSAnbT1hcHBsaWNhdGlvbic7XG4gIGRlc2Muc2RwLnNwbGl0KCdcXG4nKS5mb3JFYWNoKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICBpZiAobGluZS5zbGljZSgwLCBwcmVmaXgubGVuZ3RoKSA9PT0gcHJlZml4KSB7XG4gICAgICBoYXNEYXRhID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gaGFzRGF0YTtcbn07XG5cbi8vIFVuaWZ5IFBlZXJDb25uZWN0aW9uIE9iamVjdC5cbmlmICh0eXBlb2YgUlRDUGVlckNvbm5lY3Rpb24gIT09ICd1bmRlZmluZWQnKSB7XG4gIG15UlRDUGVlckNvbm5lY3Rpb24gPSBSVENQZWVyQ29ubmVjdGlvbjtcbn0gZWxzZSBpZiAodHlwZW9mIG1velJUQ1BlZXJDb25uZWN0aW9uICE9PSAndW5kZWZpbmVkJykge1xuICBteVJUQ1BlZXJDb25uZWN0aW9uID0gZnVuY3Rpb24gKGNvbmZpZ3VyYXRpb24sIGNvbnN0cmFpbnRzKSB7XG4gICAgLy8gRmlyZWZveCB1c2VzICd1cmwnIHJhdGhlciB0aGFuICd1cmxzJyBmb3IgUlRDSWNlU2VydmVyLnVybHNcbiAgICB2YXIgcGMgPSBuZXcgbW96UlRDUGVlckNvbm5lY3Rpb24ocmVuYW1lSWNlVVJMcyhjb25maWd1cmF0aW9uKSwgY29uc3RyYWludHMpO1xuXG4gICAgLy8gRmlyZWZveCBkb2Vzbid0IGZpcmUgJ29ubmVnb3RpYXRpb25uZWVkZWQnIHdoZW4gYSBkYXRhIGNoYW5uZWwgaXMgY3JlYXRlZFxuICAgIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTg0MDcyOFxuICAgIHZhciBkYXRhRW5hYmxlZCA9IGZhbHNlO1xuICAgIHZhciBib3VuZENyZWF0ZURhdGFDaGFubmVsID0gcGMuY3JlYXRlRGF0YUNoYW5uZWwuYmluZChwYyk7XG4gICAgcGMuY3JlYXRlRGF0YUNoYW5uZWwgPSBmdW5jdGlvbihsYWJlbCwgZGF0YUNoYW5uZWxEaWN0KSB7XG4gICAgICB2YXIgZGMgPSBib3VuZENyZWF0ZURhdGFDaGFubmVsKGxhYmVsLCBkYXRhQ2hhbm5lbERpY3QpO1xuICAgICAgaWYgKCFkYXRhRW5hYmxlZCkge1xuICAgICAgICBkYXRhRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIGlmIChwYy5vbm5lZ290aWF0aW9ubmVlZGVkICYmXG4gICAgICAgICAgICAhc2Vzc2lvbkhhc0RhdGEocGMubG9jYWxEZXNjcmlwdGlvbikgJiZcbiAgICAgICAgICAgICFzZXNzaW9uSGFzRGF0YShwYy5yZW1vdGVEZXNjcmlwdGlvbikpIHtcbiAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ25lZ290aWF0aW9ubmVlZGVkJyk7XG4gICAgICAgICAgcGMub25uZWdvdGlhdGlvbm5lZWRlZChldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBkYztcbiAgICB9O1xuXG4gICAgcmV0dXJuIHBjO1xuICB9O1xufSBlbHNlIGlmICh0eXBlb2Ygd2Via2l0UlRDUGVlckNvbm5lY3Rpb24gIT09ICd1bmRlZmluZWQnKSB7XG4gIC8vIENocm9tZSByZXR1cm5zIGEgbm9uc3RhbmRhcmQsIG5vbi1KU09OLWlmaWFibGUgcmVzcG9uc2UgZnJvbSBnZXRTdGF0cy5cbiAgbXlSVENQZWVyQ29ubmVjdGlvbiA9IGZ1bmN0aW9uKGNvbmZpZ3VyYXRpb24sIGNvbnN0cmFpbnRzKSB7XG4gICAgdmFyIHBjID0gbmV3IHdlYmtpdFJUQ1BlZXJDb25uZWN0aW9uKGNvbmZpZ3VyYXRpb24sIGNvbnN0cmFpbnRzKTtcbiAgICB2YXIgYm91bmRHZXRTdGF0cyA9IHBjLmdldFN0YXRzLmJpbmQocGMpO1xuICAgIHBjLmdldFN0YXRzID0gZnVuY3Rpb24oc2VsZWN0b3IsIHN1Y2Nlc3NDYWxsYmFjaywgZmFpbHVyZUNhbGxiYWNrKSB7XG4gICAgICB2YXIgc3VjY2Vzc0NhbGxiYWNrV3JhcHBlciA9IGZ1bmN0aW9uKGNocm9tZVN0YXRzUmVzcG9uc2UpIHtcbiAgICAgICAgc3VjY2Vzc0NhbGxiYWNrKGZpeENocm9tZVN0YXRzUmVzcG9uc2UoY2hyb21lU3RhdHNSZXNwb25zZSkpO1xuICAgICAgfTtcbiAgICAgIC8vIENocm9tZSBhbHNvIHRha2VzIGl0cyBhcmd1bWVudHMgaW4gdGhlIHdyb25nIG9yZGVyLlxuICAgICAgYm91bmRHZXRTdGF0cyhzdWNjZXNzQ2FsbGJhY2tXcmFwcGVyLCBmYWlsdXJlQ2FsbGJhY2ssIHNlbGVjdG9yKTtcbiAgICB9O1xuICAgIHJldHVybiBwYztcbiAgfTtcbn1cblxuLy8gVW5pZnkgU2Vzc2lvbkRlc2NycHRpb24gT2JqZWN0LlxuaWYgKHR5cGVvZiBSVENTZXNzaW9uRGVzY3JpcHRpb24gIT09ICd1bmRlZmluZWQnKSB7XG4gIG15UlRDU2Vzc2lvbkRlc2NyaXB0aW9uID0gUlRDU2Vzc2lvbkRlc2NyaXB0aW9uO1xufSBlbHNlIGlmICh0eXBlb2YgbW96UlRDU2Vzc2lvbkRlc2NyaXB0aW9uICE9PSAndW5kZWZpbmVkJykge1xuICBteVJUQ1Nlc3Npb25EZXNjcmlwdGlvbiA9IG1velJUQ1Nlc3Npb25EZXNjcmlwdGlvbjtcbn1cblxuLy8gVW5pZnkgSWNlQ2FuZGlkYXRlIE9iamVjdC5cbmlmICh0eXBlb2YgUlRDSWNlQ2FuZGlkYXRlICE9PSAndW5kZWZpbmVkJykge1xuICBteVJUQ0ljZUNhbmRpZGF0ZSA9IFJUQ0ljZUNhbmRpZGF0ZTtcbn0gZWxzZSBpZiAodHlwZW9mIG1velJUQ0ljZUNhbmRpZGF0ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgbXlSVENJY2VDYW5kaWRhdGUgPSBtb3pSVENJY2VDYW5kaWRhdGU7XG59XG5cbmV4cG9ydHMuUlRDUGVlckNvbm5lY3Rpb24gPSBteVJUQ1BlZXJDb25uZWN0aW9uO1xuZXhwb3J0cy5SVENTZXNzaW9uRGVzY3JpcHRpb24gPSBteVJUQ1Nlc3Npb25EZXNjcmlwdGlvbjtcbmV4cG9ydHMuUlRDSWNlQ2FuZGlkYXRlID0gbXlSVENJY2VDYW5kaWRhdGU7XG4iLCIvKmdsb2JhbHMgcHJvY2VzcywgY29uc29sZSAqL1xuLypqc2xpbnQgaW5kZW50OjIsc2xvcHB5OnRydWUsIG5vZGU6dHJ1ZSAqL1xudmFyIHV0aWwgPSByZXF1aXJlKCcuLi8uLi9zcmMvdXRpbCcpO1xuXG4vKipcbiAqIEEgZnJlZWRvbS5qcyBsb2dnaW5nIHByb3ZpZGVyIHRoYXQgbG9ncyB0byBjaHJvbWUsIGZpcmVmb3gsIGFuZCBub2RlIGNvbnNvbGVzLlxuICogQENsYXNzIExvZ2dlcl9jb25zb2xlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge2NvbmZpZzogT2JqZWN0fSBjYXAgQ2FwYWJpbGl0aWVzIC0gY29uc29sZSByZXF1aXJlcyBnbG9iYWwgY29uZmlnLlxuICovXG52YXIgTG9nZ2VyX2NvbnNvbGUgPSBmdW5jdGlvbiAoY2FwKSB7XG4gIHRoaXMubGV2ZWwgPSAoY2FwLmNvbmZpZyAmJiBjYXAuY29uZmlnLmRlYnVnKSB8fCAnbG9nJztcbiAgdGhpcy5jb25zb2xlID0gKGNhcC5jb25maWcgJiYgY2FwLmNvbmZpZy5nbG9iYWwuY29uc29sZSk7XG4gIHV0aWwuaGFuZGxlRXZlbnRzKHRoaXMpO1xufTtcblxuXG4vKipcbiAqIExvZ2dpbmcgbGV2ZWxzLCBmb3IgZmlsdGVyaW5nIG91dHB1dC5cbiAqIEBwcml2YXRlXG4gKiBAc3RhdGljXG4gKi9cbkxvZ2dlcl9jb25zb2xlLmxldmVsID0ge1xuICBcImRlYnVnXCI6IDAsXG4gIFwiaW5mb1wiOiAxLFxuICBcImxvZ1wiOiAyLFxuICBcIndhcm5cIjogMyxcbiAgXCJlcnJvclwiOiA0XG59O1xuXG4vKipcbiAqIFByaW50IGEgbWVzc2FnZSB3aXRoIGFwcHJvcHJpYXRlIGZvcm1hdHRpbmcuXG4gKiBAbWV0aG9kIHByaW50XG4gKi9cbkxvZ2dlcl9jb25zb2xlLnByb3RvdHlwZS5wcmludCA9IGZ1bmN0aW9uIChzZXZlcml0eSwgc291cmNlLCBtc2cpIHtcbiAgdmFyIGFyciA9IG1zZztcbiAgaWYgKHR5cGVvZiB0aGlzLmNvbnNvbGUgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICB0aGlzLmNvbnNvbGUuZnJlZWRvbSA9PT0gdHJ1ZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAodHlwZW9mIGFyciA9PT0gJ3N0cmluZycpIHtcbiAgICBhcnIgPSBbYXJyXTtcbiAgfVxuICBcbiAgaWYgKExvZ2dlcl9jb25zb2xlLmxldmVsW3RoaXMubGV2ZWxdICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIExvZ2dlcl9jb25zb2xlLmxldmVsW3NldmVyaXR5XSA8IExvZ2dlcl9jb25zb2xlLmxldmVsW3RoaXMubGV2ZWxdKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIFxuICBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICB7fS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXScgJiYgc291cmNlKSB7XG4gICAgYXJyLnVuc2hpZnQoJ1xceDFCWzM5bScpO1xuICAgIGFyci51bnNoaWZ0KCdcXHgxQlszMW0nICsgc291cmNlKTtcbiAgICAvKmpzbGludCBub21lbjogdHJ1ZSovXG4gICAgLy8gRmlyZWZveCBpbiBKU00gY29udGV4dC5cbiAgICAvLyBzZWU6IGh0dHA6Ly9teHIubW96aWxsYS5vcmcvbW96aWxsYS1yZWxlYXNlL3NvdXJjZS90b29sa2l0L2RldnRvb2xzL0NvbnNvbGUuanNtXG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbnNvbGUubWF4TG9nTGV2ZWwgJiYgc291cmNlKSB7XG4gICAgICBpZiAoIXRoaXMuY29uc29sZS5mcmVlZG9tRHVtcCkge1xuICAgICAgICB0aGlzLmNvbnNvbGUuZnJlZWRvbUR1bXAgPSB0aGlzLmNvbnNvbGUuZHVtcDtcbiAgICAgICAgdGhpcy5jb25zb2xlLmR1bXAgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgfVxuICAgICAgdGhpcy5jb25zb2xlLmZyZWVkb21EdW1wKCd7JyArIHNvdXJjZSArICd9LicgKyBzZXZlcml0eSArICc6ICcgK1xuICAgICAgICAgIGFyci5qb2luKCcgJykgKyAnXFxuJyk7XG4gICAgICBhcnIudW5zaGlmdChzb3VyY2UudG9VcHBlckNhc2UoKSk7XG4gIC8vIEZpcmVmb3ggaW4gYnJvd3NlciBjb250ZXh0LlxuICB9IGVsc2UgaWYgKHRoaXMuY29uc29sZS5fX21vemlsbGFDb25zb2xlX18gJiYgc291cmNlKSB7XG4gICAgYXJyLnVuc2hpZnQoc291cmNlLnRvVXBwZXJDYXNlKCkpO1xuICAgIC8qanNsaW50IG5vbWVuOiBmYWxzZSovXG4gIH0gZWxzZSBpZiAoc291cmNlKSB7XG4gICAgYXJyLnVuc2hpZnQoJ2NvbG9yOiByZWQnKTtcbiAgICBhcnIudW5zaGlmdCgnJWMgJyArIHNvdXJjZSk7XG4gIH1cbiAgaWYgKCF0aGlzLmNvbnNvbGVbc2V2ZXJpdHldICYmIHRoaXMuY29uc29sZS5sb2cpIHtcbiAgICBzZXZlcml0eSA9ICdsb2cnO1xuICB9XG4gIHRoaXMuY29uc29sZVtzZXZlcml0eV0uYXBwbHkodGhpcy5jb25zb2xlLCBhcnIpO1xufTtcblxuLyoqXG4gKiBMb2cgYSBtZXNzYWdlIHRvIHRoZSBjb25zb2xlLlxuICogQHBhcmFtIHtTdHJpbmd9IHNvdXJjZSBUaGUgc291cmNlIG9mIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtTdHJpbmd9IG1zZyBUaGUgbWVzc2FnZSB0byBsb2cuXG4gKiBAbWV0aG9kIGxvZ1xuICovXG5Mb2dnZXJfY29uc29sZS5wcm90b3R5cGUubG9nID0gZnVuY3Rpb24gKHNvdXJjZSwgbXNnLCBjb250aW51YXRpb24pIHtcbiAgdGhpcy5wcmludCgnbG9nJywgc291cmNlLCBtc2cpO1xuICBjb250aW51YXRpb24oKTtcbn07XG5cbi8qKlxuICogTG9nIGEgbWVzc2FnZSB0byB0aGUgY29uc29sZSB3aXRoIGRlYnVnIHByaW9yaXR5LlxuICogQHBhcmFtIHtTdHJpbmd9IHNvdXJjZSBUaGUgc291cmNlIG9mIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtTdHJpbmd9IG1zZyBUaGUgbWVzc2FnZSB0byBsb2cuXG4gKiBAbWV0aG9kIGxvZ1xuICovXG5Mb2dnZXJfY29uc29sZS5wcm90b3R5cGUuZGVidWcgPSBmdW5jdGlvbiAoc291cmNlLCBtc2csIGNvbnRpbnVhdGlvbikge1xuICB0aGlzLnByaW50KCdkZWJ1ZycsIHNvdXJjZSwgbXNnKTtcbiAgY29udGludWF0aW9uKCk7XG59O1xuXG4vKipcbiAqIExvZyBhIG1lc3NhZ2UgdG8gdGhlIGNvbnNvbGUgd2l0aCBpbmZvIHByaW9yaXR5LlxuICogQHBhcmFtIHtTdHJpbmd9IHNvdXJjZSBUaGUgc291cmNlIG9mIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtTdHJpbmd9IG1zZyBUaGUgbWVzc2FnZSB0byBsb2cuXG4gKiBAbWV0aG9kIGxvZ1xuICovXG5Mb2dnZXJfY29uc29sZS5wcm90b3R5cGUuaW5mbyA9IGZ1bmN0aW9uIChzb3VyY2UsIG1zZywgY29udGludWF0aW9uKSB7XG4gIHRoaXMucHJpbnQoJ2luZm8nLCBzb3VyY2UsIG1zZyk7XG4gIGNvbnRpbnVhdGlvbigpO1xufTtcblxuLyoqXG4gKiBMb2cgYSBtZXNzYWdlIHRvIHRoZSBjb25zb2xlIHdpdGggd2FybiBwcmlvcml0eS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBzb3VyY2UgVGhlIHNvdXJjZSBvZiB0aGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBtc2cgVGhlIG1lc3NhZ2UgdG8gbG9nLlxuICogQG1ldGhvZCBsb2dcbiAqL1xuTG9nZ2VyX2NvbnNvbGUucHJvdG90eXBlLndhcm4gPSBmdW5jdGlvbiAoc291cmNlLCBtc2csIGNvbnRpbnVhdGlvbikge1xuICB0aGlzLnByaW50KCd3YXJuJywgc291cmNlLCBtc2cpO1xuICBjb250aW51YXRpb24oKTtcbn07XG5cbi8qKlxuICogTG9nIGEgbWVzc2FnZSB0byB0aGUgY29uc29sZSB3aXRoIGVycm9yIHByaW9yaXR5LlxuICogQHBhcmFtIHtTdHJpbmd9IHNvdXJjZSBUaGUgc291cmNlIG9mIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtTdHJpbmd9IG1zZyBUaGUgbWVzc2FnZSB0byBsb2cuXG4gKiBAbWV0aG9kIGxvZ1xuICovXG5Mb2dnZXJfY29uc29sZS5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoc291cmNlLCBtc2csIGNvbnRpbnVhdGlvbikge1xuICB0aGlzLnByaW50KCdlcnJvcicsIHNvdXJjZSwgbXNnKTtcbiAgY29udGludWF0aW9uKCk7XG59O1xuXG4vKiogUkVHSVNURVIgUFJPVklERVIgKiovXG5leHBvcnRzLnByb3ZpZGVyID0gTG9nZ2VyX2NvbnNvbGU7XG5leHBvcnRzLm5hbWUgPSAnY29yZS5jb25zb2xlJztcbmV4cG9ydHMuZmxhZ3MgPSB7Y29uZmlnOiB0cnVlfTtcbiIsIi8qZ2xvYmFscyBjb25zb2xlICovXG4vKmpzbGludCBpbmRlbnQ6Mix3aGl0ZTp0cnVlLHNsb3BweTp0cnVlLCBub2RlOnRydWUgKi9cbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vLi4vc3JjL3V0aWwnKTtcblxuLyoqXG4gKiBBIG1pbmltYWwgcHJvdmlkZXIgaW1wbGVtZW50aW5nIHRoZSBjb3JlLmVjaG8gaW50ZXJmYWNlIGZvciBpbnRlcmFjdGlvbiB3aXRoXG4gKiBjdXN0b20gY2hhbm5lbHMuICBQcmltYXJpbHkgdXNlZCBmb3IgdGVzdGluZyB0aGUgcm9idXN0bmVzcyBvZiB0aGUgY3VzdG9tXG4gKiBjaGFubmVsIGltcGxlbWVudGF0aW9uLlxuICogQENsYXNzIEVjaG9fdW5wcml2aWxlZ2VkXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7bW9kdWxlOk1vZHVsZX0gY2FwIFRoZSBtb2R1bGUgY3JlYXRpbmcgdGhpcyBwcm92aWRlci5cbiAqL1xudmFyIEVjaG9fdW5wcml2aWxlZ2VkID0gZnVuY3Rpb24oY2FwLCBkaXNwYXRjaEV2ZW50KSB7XG4gIHRoaXMubW9kID0gY2FwLm1vZHVsZTtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50ID0gZGlzcGF0Y2hFdmVudDtcbiAgdXRpbC5oYW5kbGVFdmVudHModGhpcyk7XG5cbiAgLy8gVGhlIENvcmUgb2JqZWN0IGZvciBtYW5hZ2luZyBjaGFubmVscy5cbiAgdGhpcy5tb2Qub25jZSgnY29yZScsIGZ1bmN0aW9uKENvcmUpIHtcbiAgICB0aGlzLmNvcmUgPSBuZXcgQ29yZSgpO1xuICB9LmJpbmQodGhpcykpO1xuICB0aGlzLm1vZC5lbWl0KHRoaXMubW9kLmNvbnRyb2xDaGFubmVsLCB7XG4gICAgdHlwZTogJ2NvcmUgcmVxdWVzdCBkZWxlZ2F0ZWQgdG8gZWNobycsXG4gICAgcmVxdWVzdDogJ2NvcmUnXG4gIH0pO1xufTtcblxuLyoqXG4gKiBTZXR1cCB0aGUgcHJvdmlkZXIgdG8gZWNobyBvbiBhIHNwZWNpZmljIHByb3h5LiBTdWJzZXF1ZW50IG1lc3NhZ2VzXG4gKiBGcm9tIHRoZSBjdXN0b20gY2hhbm5lbCBib3VuZCBoZXJlIHdpbGwgYmUgcmUtZW1pdHRlZCBhcyBhIG1lc3NhZ2VcbiAqIGZyb20gdGhlIHByb3ZpZGVyLiAgU3Vic2VxdWVudCBtZXNzYWdlcyB0byB0aGUgcHJvdmlkZXIgd2lsbCBiZVxuICogZW1pdHRlZCBvbiB0aGUgYm91bmQgY2hhbm5lbC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm94eSBUaGUgaWRlbnRpZmllciBmb3IgdGhlIGN1c3RvbSBjaGFubmVsIHRvIGJpbmQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb250aW51YXRpb24gRnVuY3Rpb24gdG8gY2FsbCB3aGVuIHNldHVwIGlzIGNvbXBsZXRlLlxuICogQG1ldGhvZCBzZXR1cFxuICovXG5FY2hvX3VucHJpdmlsZWdlZC5wcm90b3R5cGUuc2V0dXAgPSBmdW5jdGlvbihwcm94eSwgY29udGludWF0aW9uKSB7XG4gIGNvbnRpbnVhdGlvbigpO1xuICBpZiAoIXRoaXMuY29yZSkge1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnbWVzc2FnZScsICdubyBjb3JlIGF2YWlsYWJsZSB0byBzZXR1cCBwcm94eSB3aXRoIGF0IGVjaG8nKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLmNvcmUuYmluZENoYW5uZWwocHJveHksIGZ1bmN0aW9uKGNoYW4pIHtcbiAgICBpZiAodGhpcy5jaGFuKSB7XG4gICAgICB0aGlzLmNoYW4uY2xvc2UoKTtcbiAgICB9XG4gICAgdGhpcy5jaGFuID0gY2hhbjtcbiAgICB0aGlzLmNoYW4ub25DbG9zZShmdW5jdGlvbigpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmNoYW47XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ21lc3NhZ2UnLCAnY2hhbm5lbCBib3VuZCB0byBlY2hvJyk7XG4gICAgdGhpcy5jaGFuLm9uKCdtZXNzYWdlJywgZnVuY3Rpb24obSkge1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdtZXNzYWdlJywgJ2Zyb20gY3VzdG9tIGNoYW5uZWw6ICcgKyBtKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9LmJpbmQodGhpcykpO1xufTtcblxuLyoqXG4gKiBTZW5kIGEgbWVzc2FnZSB0byB0aGUgYm91bmQgY3VzdG9tIGNoYW5uZWwuXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gc2VuZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbnRpbnVhdGlvbiBGdW5jdGlvbiB0byBjYWxsIHdoZW4gc2VuZGluZyBpcyBjb21wbGV0ZS5cbiAqIEBtZXRob2Qgc2VuZFxuICovXG5FY2hvX3VucHJpdmlsZWdlZC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uKHN0ciwgY29udGludWF0aW9uKSB7XG4gIGNvbnRpbnVhdGlvbigpO1xuICBpZiAodGhpcy5jaGFuKSB7XG4gICAgdGhpcy5jaGFuLmVtaXQoJ21lc3NhZ2UnLCBzdHIpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnbWVzc2FnZScsICdubyBjaGFubmVsIGF2YWlsYWJsZScpO1xuICB9XG59O1xuXG5leHBvcnRzLnByb3ZpZGVyID0gRWNob191bnByaXZpbGVnZWQ7XG5leHBvcnRzLm5hbWUgPSBcImNvcmUuZWNob1wiO1xuZXhwb3J0cy5mbGFncyA9IHttb2R1bGU6IHRydWV9O1xuIiwiLypnbG9iYWxzIGNvbnNvbGUgKi9cbi8qanNsaW50IGluZGVudDoyLHdoaXRlOnRydWUsc2xvcHB5OnRydWUsbm9kZTp0cnVlICovXG5cbi8qKlxuICogQW4gb0F1dGggbWV0YS1wcm92aWRlciBhbGxvd2luZyBtdWx0aXBsZSBwbGF0Zm9ybS1kZXBlbmRhbnRcbiAqIG9BdXRoIGltcGxlbWVudGF0aW9ucyB0byBzZXJ2ZSBhcyB0aGUgcmVkaXJlY3RVUkwgZm9yIGFuIG9BdXRoIGZsb3cuXG4gKiBUaGUgY29yZSBpbXBsZW1lbnRhdGlvbnMgYXJlIHByb3ZpZGVkIGluIHByb3ZpZGVycy9vYXV0aCwgYW5kIGFyZVxuICogc3VwcGxlbWVudGVkIGluIHBsYXRmb3JtLWRlcGVuZGVudCByZXBvc2l0b3JpZXMuXG4gKlxuICovXG52YXIgT0F1dGggPSBmdW5jdGlvbiAoaGFuZGxlcnMsIGNhcCwgZGlzcGF0Y2hFdmVudCkge1xuICB0aGlzLmhhbmRsZXJzID0gaGFuZGxlcnM7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCA9IGRpc3BhdGNoRXZlbnQ7XG4gIHRoaXMub25nb2luZyA9IHt9O1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciBvQXV0aCBoYW5kbGVycy5cbiAqIFRoaXMgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQgYmVmb3JlIHByb3ZpZGVyIGlzIHVzZWQsIGFuZCBiaW5kcyB0aGUgY3VycmVudFxuICogb0F1dGggcHJvdmlkZXIgdG8gYmUgYXNzb2NpYXRlZCB3aXRoIHJlZ2lzdGVyZWQgaGFuZGxlcnMuIFRoaXMgaXMgdXNlZCBzb1xuICogdGhhdCBoYW5kbGVycyB3aGljaCBhcmUgcmVnaXN0ZXJlZCBieSB0aGUgdXNlciBhcHBseSBvbmx5IHRoZSB0aGUgZnJlZWRvbSgpXG4gKiBzZXR1cCBjYWxsIHRoZXkgYXJlIGFzc29jaWF0ZWQgd2l0aCwgd2hpbGUgc3RpbGwgYmVpbmcgcmVnaXN0ZXJlZCBhY3Jvc3NcbiAqIG11bHRpcGxlIGluc3RhbmNlcyBvZiBPQXV0aCBwcm92aWRlcnMuXG4gKlxuICogQG1ldGhvZCByZWdpc3RlclxuICogQHBhcmFtIHtbY29uc3RydWN0b3JdfSBoYW5kbGVyc1xuICogQHByaXZhdGVcbiAqL1xuT0F1dGgucmVnaXN0ZXIgPSBmdW5jdGlvbiAoaGFuZGxlcnMpIHtcbiAgdmFyIGksXG4gICAgICBib3VuZEhhbmRsZXJzID0gW107XG4gIGlmICghaGFuZGxlcnMgfHwgIWhhbmRsZXJzLmxlbmd0aCkge1xuICAgIHJldHVybiBPQXV0aC5yZXNldCgpO1xuICB9XG5cbiAgZm9yIChpID0gMDsgaSA8IGhhbmRsZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgYm91bmRIYW5kbGVycy5wdXNoKG5ldyBoYW5kbGVyc1tpXSgpKTtcbiAgfVxuICBleHBvcnRzLnByb3ZpZGVyID0gT0F1dGguYmluZCh0aGlzLCBib3VuZEhhbmRsZXJzKTtcbn07XG5cbi8qKlxuICogUmVzZXQgdGhlIG9BdXRoIHByb3ZpZGVyIHJlZ2lzdHJhdGlvbnMuXG4gKiBAbWV0aG9kIHJlc2V0XG4gKiBAcHJpdmF0ZVxuICovXG5PQXV0aC5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgZXhwb3J0cy5wcm92aWRlciA9IE9BdXRoLmJpbmQodGhpcywgW10pO1xufTtcblxuLyoqXG4gKiBJbmRpY2F0ZSB0aGUgaW50ZW50aW9uIHRvIGluaXRpYXRlIGFuIG9BdXRoIGZsb3csIGFsbG93aW5nIGFuIGFwcHJvcHJpYXRlXG4gKiBvQXV0aCBwcm92aWRlciB0byBiZWdpbiBtb25pdG9yaW5nIGZvciByZWRpcmVjdGlvbi5cbiAqXG4gKiBAbWV0aG9kIGluaXRpYXRlT0F1dGhcbiAqIEBwYXJhbSB7c3RyaW5nW119IHJlZGlyZWN0VVJJcyAtIG9BdXRoIHJlZGlyZWN0aW9uIFVSSXMgcmVnaXN0ZXJlZCB3aXRoIHRoZVxuICogICAgIHByb3ZpZGVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29udGludWF0aW9uIC0gRnVuY3Rpb24gdG8gY2FsbCB3aGVuIGNvbXBsZXRlXG4gKiAgICBFeHBlY3RlZCB0byBzZWUgYSB2YWx1ZSBvZiBzY2hlbWE6IHt7cmVkaXJlY3Q6U3RyaW5nLCBzdGF0ZTpTdHJpbmd9fVxuICogICAgd2hlcmUgJ3JlZGlyZWN0JyBpcyB0aGUgY2hvc2VuIHJlZGlyZWN0IFVSSVxuICogICAgYW5kICdzdGF0ZScgaXMgdGhlIHN0YXRlIHRvIHBhc3MgdG8gdGhlIFVSSSBvbiBjb21wbGV0aW9uIG9mIG9BdXRoXG4gKi9cbk9BdXRoLnByb3RvdHlwZS5pbml0aWF0ZU9BdXRoID0gZnVuY3Rpb24gKHJlZGlyZWN0VVJJcywgY29udGludWF0aW9uKSB7XG4gIHZhciBwcm9taXNlLCBpLCBzdWNjZXNzQ2FsbGJhY2s7XG4gIHN1Y2Nlc3NDYWxsYmFjayA9IGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgIHRoaXMub25nb2luZ1tyZXN1bHQuc3RhdGVdID0gdGhpcy5oYW5kbGVyc1tpXTtcbiAgICBjb250aW51YXRpb24ocmVzdWx0KTtcbiAgfS5iaW5kKHRoaXMpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCB0aGlzLmhhbmRsZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKHRoaXMuaGFuZGxlcnNbaV0uaW5pdGlhdGVPQXV0aChyZWRpcmVjdFVSSXMsIHN1Y2Nlc3NDYWxsYmFjaykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgLy9JZiBoZXJlLCB3ZSBoYXZlIG5vIGNvbXBhdGlibGUgcHJvdmlkZXJzXG4gIGNvbnRpbnVhdGlvbihudWxsLCB7XG4gICAgJ2VycmNvZGUnOiAnVU5LTk9XTicsXG4gICAgJ21lc3NhZ2UnOiAnTm8gcmVxdWVzdGVkIHJlZGlyZWN0cyBjYW4gYmUgaGFuZGxlZC4nXG4gIH0pO1xuICByZXR1cm47XG59O1xuXG4vKipcbiAqIG9BdXRoIGNsaWVudC1zaWRlIGZsb3cgLSBsYXVuY2ggdGhlIHByb3ZpZGVkIFVSTFxuICogVGhpcyBtdXN0IGJlIGNhbGxlZCBhZnRlciBpbml0aWF0ZU9BdXRoIHdpdGggdGhlIHJldHVybmVkIHN0YXRlIG9iamVjdFxuICpcbiAqIEBtZXRob2QgbGF1bmNoQXV0aEZsb3dcbiAqIEBwYXJhbSB7U3RyaW5nfSBhdXRoVXJsIC0gVGhlIFVSTCB0aGF0IGluaXRpYXRlcyB0aGUgYXV0aCBmbG93LlxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgc3RyaW5nPn0gc3RhdGVPYmogLSBUaGUgcmV0dXJuIHZhbHVlIGZyb20gaW5pdGlhdGVPQXV0aFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29udGludWF0aW9uIC0gRnVuY3Rpb24gdG8gY2FsbCB3aGVuIGNvbXBsZXRlXG4gKiAgICBFeHBlY3RlZCB0byBzZWUgYSBTdHJpbmcgdmFsdWUgdGhhdCBpcyB0aGUgcmVzcG9uc2UgVXJsIGNvbnRhaW5pbmcgdGhlIGFjY2VzcyB0b2tlblxuICovXG5PQXV0aC5wcm90b3R5cGUubGF1bmNoQXV0aEZsb3cgPSBmdW5jdGlvbihhdXRoVXJsLCBzdGF0ZU9iaiwgY29udGludWF0aW9uKSB7XG4gIGlmICghdGhpcy5vbmdvaW5nLmhhc093blByb3BlcnR5KHN0YXRlT2JqLnN0YXRlKSkge1xuICAgIGNvbnRpbnVhdGlvbih1bmRlZmluZWQsIHtcbiAgICAgICdlcnJjb2RlJzogJ1VOS05PV04nLFxuICAgICAgJ21lc3NhZ2UnOiAnWW91IG11c3QgYmVnaW4gdGhlIG9BdXRoIGZsb3cgd2l0aCBpbml0aWF0ZU9BdXRoIGZpcnN0J1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMub25nb2luZ1tzdGF0ZU9iai5zdGF0ZV0ubGF1bmNoQXV0aEZsb3coYXV0aFVybCwgc3RhdGVPYmosIGNvbnRpbnVhdGlvbik7XG4gIGRlbGV0ZSB0aGlzLm9uZ29pbmdbc3RhdGVPYmouc3RhdGVdO1xufTtcblxuZXhwb3J0cy5yZWdpc3RlciA9IE9BdXRoLnJlZ2lzdGVyO1xuZXhwb3J0cy5yZXNldCA9IE9BdXRoLnJlc2V0O1xuZXhwb3J0cy5wcm92aWRlciA9IE9BdXRoLmJpbmQodGhpcywgW10pO1xuZXhwb3J0cy5uYW1lID0gJ2NvcmUub2F1dGgnO1xuIiwiLypnbG9iYWxzIGNvbnNvbGUsIFJUQ1BlZXJDb25uZWN0aW9uLCB3ZWJraXRSVENQZWVyQ29ubmVjdGlvbiAqL1xuLypnbG9iYWxzIG1velJUQ1BlZXJDb25uZWN0aW9uLCBSVENTZXNzaW9uRGVzY3JpcHRpb24sIFJUQ0ljZUNhbmRpZGF0ZSAqL1xuLypnbG9iYWxzIG1velJUQ1Nlc3Npb25EZXNjcmlwdGlvbiwgbW96UlRDSWNlQ2FuZGlkYXRlICovXG4vKmdsb2JhbHMgQXJyYXlCdWZmZXIsIEJsb2IgKi9cbi8qanNsaW50IGluZGVudDoyLHNsb3BweTp0cnVlLG5vZGU6dHJ1ZSAqL1xuLyoqXG4gKiBEYXRhUGVlciAtIGEgY2xhc3MgdGhhdCB3cmFwcyBwZWVyIGNvbm5lY3Rpb25zIGFuZCBkYXRhIGNoYW5uZWxzLlxuICovXG4vLyBUT0RPOiBjaGVjayB0aGF0IEhhbmRsaW5nIG9mIHByYW5zd2VyIGlzIHRyZWF0ZWQgYXBwcm9wcmlhdGVseS5cbnZhciBTaW1wbGVEYXRhUGVlclN0YXRlID0ge1xuICBESVNDT05ORUNURUQ6ICdESVNDT05ORUNURUQnLFxuICBDT05ORUNUSU5HOiAnQ09OTkVDVElORycsXG4gIENPTk5FQ1RFRDogJ0NPTk5FQ1RFRCdcbn07XG5cbmZ1bmN0aW9uIFNpbXBsZURhdGFQZWVyKHBlZXJOYW1lLCBzdHVuU2VydmVycywgZGF0YUNoYW5uZWxDYWxsYmFja3MsIG1vY2tzKSB7XG4gIHZhciBjb25zdHJhaW50cyxcbiAgICBjb25maWcsXG4gICAgaTtcbiAgdGhpcy5wZWVyTmFtZSA9IHBlZXJOYW1lO1xuICB0aGlzLmNoYW5uZWxzID0ge307XG4gIHRoaXMuZGF0YUNoYW5uZWxDYWxsYmFja3MgPSBkYXRhQ2hhbm5lbENhbGxiYWNrcztcbiAgdGhpcy5vbkNvbm5lY3RlZFF1ZXVlID0gW107XG5cbiAgaWYgKHR5cGVvZiBtb2Nrcy5SVENQZWVyQ29ubmVjdGlvbiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHRoaXMuUlRDUGVlckNvbm5lY3Rpb24gPSBtb2Nrcy5SVENQZWVyQ29ubmVjdGlvbjtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygd2Via2l0UlRDUGVlckNvbm5lY3Rpb24gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB0aGlzLlJUQ1BlZXJDb25uZWN0aW9uID0gd2Via2l0UlRDUGVlckNvbm5lY3Rpb247XG4gIH0gZWxzZSBpZiAodHlwZW9mIG1velJUQ1BlZXJDb25uZWN0aW9uICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdGhpcy5SVENQZWVyQ29ubmVjdGlvbiA9IG1velJUQ1BlZXJDb25uZWN0aW9uO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgZW52aXJvbm1lbnQgZG9lcyBub3QgYXBwZWFyIHRvIHN1cHBvcnQgUlRDUGVlckNvbm5lY3Rpb25cIik7XG4gIH1cblxuICBpZiAodHlwZW9mIG1vY2tzLlJUQ1Nlc3Npb25EZXNjcmlwdGlvbiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHRoaXMuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uID0gbW9ja3MuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBSVENTZXNzaW9uRGVzY3JpcHRpb24gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB0aGlzLlJUQ1Nlc3Npb25EZXNjcmlwdGlvbiA9IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbjtcbiAgfSBlbHNlIGlmICh0eXBlb2YgbW96UlRDU2Vzc2lvbkRlc2NyaXB0aW9uICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdGhpcy5SVENTZXNzaW9uRGVzY3JpcHRpb24gPSBtb3pSVENTZXNzaW9uRGVzY3JpcHRpb247XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBlbnZpcm9ubWVudCBkb2VzIG5vdCBhcHBlYXIgdG8gc3VwcG9ydCBSVENTZXNzaW9uRGVzY3JpcHRpb25cIik7XG4gIH1cblxuICBpZiAodHlwZW9mIG1vY2tzLlJUQ0ljZUNhbmRpZGF0ZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHRoaXMuUlRDSWNlQ2FuZGlkYXRlID0gbW9ja3MuUlRDSWNlQ2FuZGlkYXRlO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBSVENJY2VDYW5kaWRhdGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB0aGlzLlJUQ0ljZUNhbmRpZGF0ZSA9IFJUQ0ljZUNhbmRpZGF0ZTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgbW96UlRDSWNlQ2FuZGlkYXRlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdGhpcy5SVENJY2VDYW5kaWRhdGUgPSBtb3pSVENJY2VDYW5kaWRhdGU7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBlbnZpcm9ubWVudCBkb2VzIG5vdCBhcHBlYXIgdG8gc3VwcG9ydCBSVENJY2VDYW5kaWRhdGVcIik7XG4gIH1cblxuXG4gIGNvbnN0cmFpbnRzID0ge1xuICAgIG9wdGlvbmFsOiBbe0R0bHNTcnRwS2V5QWdyZWVtZW50OiB0cnVlfV1cbiAgfTtcbiAgLy8gQSB3YXkgdG8gc3BlYWsgdG8gdGhlIHBlZXIgdG8gc2VuZCBTRFAgaGVhZGVycyBldGMuXG4gIHRoaXMuc2VuZFNpZ25hbE1lc3NhZ2UgPSBudWxsO1xuXG4gIHRoaXMucGMgPSBudWxsOyAgLy8gVGhlIHBlZXIgY29ubmVjdGlvbi5cbiAgLy8gR2V0IFRVUk4gc2VydmVycyBmb3IgdGhlIHBlZXIgY29ubmVjdGlvbi5cbiAgY29uZmlnID0ge2ljZVNlcnZlcnM6IFtdfTtcbiAgZm9yIChpID0gMDsgaSA8IHN0dW5TZXJ2ZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uZmlnLmljZVNlcnZlcnMucHVzaCh7XG4gICAgICAndXJsJyA6IHN0dW5TZXJ2ZXJzW2ldXG4gICAgfSk7XG4gIH1cbiAgdGhpcy5wYyA9IG5ldyB0aGlzLlJUQ1BlZXJDb25uZWN0aW9uKGNvbmZpZywgY29uc3RyYWludHMpO1xuICAvLyBBZGQgYmFzaWMgZXZlbnQgaGFuZGxlcnMuXG4gIHRoaXMucGMuYWRkRXZlbnRMaXN0ZW5lcihcImljZWNhbmRpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25JY2VDYWxsYmFjay5iaW5kKHRoaXMpKTtcbiAgdGhpcy5wYy5hZGRFdmVudExpc3RlbmVyKFwibmVnb3RpYXRpb25uZWVkZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uTmVnb3RpYXRpb25OZWVkZWQuYmluZCh0aGlzKSk7XG4gIHRoaXMucGMuYWRkRXZlbnRMaXN0ZW5lcihcImRhdGFjaGFubmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkRhdGFDaGFubmVsLmJpbmQodGhpcykpO1xuICB0aGlzLnBjLmFkZEV2ZW50TGlzdGVuZXIoXCJzaWduYWxpbmdzdGF0ZWNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8gVE9ETzogY29tZSB1cCB3aXRoIGEgYmV0dGVyIHdheSB0byBkZXRlY3QgY29ubmVjdGlvbi4gIFdlIHN0YXJ0IG91dFxuICAgIC8vIGFzIFwic3RhYmxlXCIgZXZlbiBiZWZvcmUgd2UgYXJlIGNvbm5lY3RlZC5cbiAgICAvLyBUT0RPOiB0aGlzIGlzIG5vdCBmaXJlZCBmb3IgY29ubmVjdGlvbnMgY2xvc2VkIGJ5IHRoZSBvdGhlciBzaWRlLlxuICAgIC8vIFRoaXMgd2lsbCBiZSBmaXhlZCBpbiBtMzcsIGF0IHRoYXQgcG9pbnQgd2Ugc2hvdWxkIGRpc3BhdGNoIGFuIG9uQ2xvc2VcbiAgICAvLyBldmVudCBoZXJlIGZvciBmcmVlZG9tLnRyYW5zcG9ydCB0byBwaWNrIHVwLlxuICAgIGlmICh0aGlzLnBjLnNpZ25hbGluZ1N0YXRlID09PSBcInN0YWJsZVwiKSB7XG4gICAgICB0aGlzLnBjU3RhdGUgPSBTaW1wbGVEYXRhUGVlclN0YXRlLkNPTk5FQ1RFRDtcbiAgICAgIHRoaXMub25Db25uZWN0ZWRRdWV1ZS5tYXAoZnVuY3Rpb24gKGNhbGxiYWNrKSB7IGNhbGxiYWNrKCk7IH0pO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcbiAgLy8gVGhpcyBzdGF0ZSB2YXJpYWJsZSBpcyB1c2VkIHRvIGZha2Ugb2ZmZXIvYW5zd2VyIHdoZW4gdGhleSBhcmUgd3JvbmdseVxuICAvLyByZXF1ZXN0ZWQgYW5kIHdlIHJlYWxseSBqdXN0IG5lZWQgdG8gcmV1c2Ugd2hhdCB3ZSBhbHJlYWR5IGhhdmUuXG4gIHRoaXMucGNTdGF0ZSA9IFNpbXBsZURhdGFQZWVyU3RhdGUuRElTQ09OTkVDVEVEO1xuXG4gIC8vIE5vdGU6IHRvIGFjdHVhbGx5IGRvIHNvbWV0aGluZyB3aXRoIGRhdGEgY2hhbm5lbHMgb3BlbmVkIGJ5IGEgcGVlciwgd2VcbiAgLy8gbmVlZCBzb21lb25lIHRvIG1hbmFnZSBcImRhdGFjaGFubmVsXCIgZXZlbnQuXG59XG5cblNpbXBsZURhdGFQZWVyLnByb3RvdHlwZS5jcmVhdGVPZmZlciA9IGZ1bmN0aW9uIChjb25zdGFpbnRzLCBjb250aW51YXRpb24pIHtcbiAgdGhpcy5wYy5jcmVhdGVPZmZlcihjb250aW51YXRpb24sIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmVycm9yKCdjb3JlLnBlZXJjb25uZWN0aW9uIGNyZWF0ZU9mZmVyIGZhaWxlZC4nKTtcbiAgfSwgY29uc3RhaW50cyk7XG59O1xuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUucnVuV2hlbkNvbm5lY3RlZCA9IGZ1bmN0aW9uIChmdW5jKSB7XG4gIGlmICh0aGlzLnBjU3RhdGUgPT09IFNpbXBsZURhdGFQZWVyU3RhdGUuQ09OTkVDVEVEKSB7XG4gICAgZnVuYygpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMub25Db25uZWN0ZWRRdWV1ZS5wdXNoKGZ1bmMpO1xuICB9XG59O1xuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChjaGFubmVsSWQsIG1lc3NhZ2UsIGNvbnRpbnVhdGlvbikge1xuICB0aGlzLmNoYW5uZWxzW2NoYW5uZWxJZF0uc2VuZChtZXNzYWdlKTtcbiAgY29udGludWF0aW9uKCk7XG59O1xuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUub3BlbkRhdGFDaGFubmVsID0gZnVuY3Rpb24gKGNoYW5uZWxJZCwgY29udGludWF0aW9uKSB7XG4gIHZhciBkYXRhQ2hhbm5lbCA9IHRoaXMucGMuY3JlYXRlRGF0YUNoYW5uZWwoY2hhbm5lbElkLCB7fSk7XG4gIGRhdGFDaGFubmVsLm9ub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmFkZERhdGFDaGFubmVsKGNoYW5uZWxJZCwgZGF0YUNoYW5uZWwpO1xuICAgIGNvbnRpbnVhdGlvbigpO1xuICB9LmJpbmQodGhpcyk7XG4gIGRhdGFDaGFubmVsLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgLy9AKHJ5c2NoZW5nKSB0b2RvIC0gcmVwbGFjZSB3aXRoIGVycm9ycyB0aGF0IHdvcmsgYWNyb3NzIHRoZSBpbnRlcmZhY2VcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgY29udGludWF0aW9uKHVuZGVmaW5lZCwgZXJyKTtcbiAgfTtcbiAgLy8gRmlyZWZveCBkb2VzIG5vdCBmaXJlIFwibmVnb3RpYXRpb25uZWVkZWRcIiwgc28gd2UgbmVlZCB0b1xuICAvLyBuZWdvdGF0ZSBoZXJlIGlmIHdlIGFyZSBub3QgY29ubmVjdGVkLlxuICAvLyBTZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9ODQwNzI4XG4gIGlmICh0eXBlb2YgbW96UlRDUGVlckNvbm5lY3Rpb24gIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgIHRoaXMucGNTdGF0ZSA9PT0gU2ltcGxlRGF0YVBlZXJTdGF0ZS5ESVNDT05ORUNURUQpIHtcbiAgICB0aGlzLm5lZ290aWF0ZUNvbm5lY3Rpb24oKTtcbiAgfVxufTtcblxuU2ltcGxlRGF0YVBlZXIucHJvdG90eXBlLmNsb3NlQ2hhbm5lbCA9IGZ1bmN0aW9uIChjaGFubmVsSWQpIHtcbiAgaWYgKHRoaXMuY2hhbm5lbHNbY2hhbm5lbElkXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5jaGFubmVsc1tjaGFubmVsSWRdLmNsb3NlKCk7XG4gICAgZGVsZXRlIHRoaXMuY2hhbm5lbHNbY2hhbm5lbElkXTtcbiAgfVxufTtcblxuU2ltcGxlRGF0YVBlZXIucHJvdG90eXBlLmdldEJ1ZmZlcmVkQW1vdW50ID0gZnVuY3Rpb24gKGNoYW5uZWxJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51YXRpb24pIHtcbiAgaWYgKHRoaXMuY2hhbm5lbHNbY2hhbm5lbElkXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGRhdGFDaGFubmVsID0gdGhpcy5jaGFubmVsc1tjaGFubmVsSWRdO1xuICAgIHJldHVybiBkYXRhQ2hhbm5lbC5idWZmZXJlZEFtb3VudDtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXCJObyBjaGFubmVsIHdpdGggaWQ6IFwiICsgY2hhbm5lbElkKTtcbn07XG5cblNpbXBsZURhdGFQZWVyLnByb3RvdHlwZS5zZXRTZW5kU2lnbmFsTWVzc2FnZSA9IGZ1bmN0aW9uIChzZW5kU2lnbmFsTWVzc2FnZUZuKSB7XG4gIHRoaXMuc2VuZFNpZ25hbE1lc3NhZ2UgPSBzZW5kU2lnbmFsTWVzc2FnZUZuO1xufTtcblxuLy8gSGFuZGxlIGEgbWVzc2FnZSBzZW5kIG9uIHRoZSBzaWduYWxsaW5nIGNoYW5uZWwgdG8gdGhpcyBwZWVyLlxuU2ltcGxlRGF0YVBlZXIucHJvdG90eXBlLmhhbmRsZVNpZ25hbE1lc3NhZ2UgPSBmdW5jdGlvbiAobWVzc2FnZVRleHQpIHtcbiAgLy9jb25zb2xlLmxvZyh0aGlzLnBlZXJOYW1lICsgXCI6IFwiICsgXCJoYW5kbGVTaWduYWxNZXNzYWdlOiBcXG5cIiArIG1lc3NhZ2VUZXh0KTtcbiAgdmFyIGpzb24gPSBKU09OLnBhcnNlKG1lc3NhZ2VUZXh0KSxcbiAgICBpY2VfY2FuZGlkYXRlO1xuXG4gIC8vIFRPRE86IElmIHdlIGFyZSBvZmZlcmluZyBhbmQgdGhleSBhcmUgYWxzbyBvZmZlcnJpbmcgYXQgdGhlIHNhbWUgdGltZSxcbiAgLy8gcGljayB0aGUgb25lIHdobyBoYXMgdGhlIGxvd2VyIHJhbmRvbUlkP1xuICAvLyAodGhpcy5wYy5zaWduYWxpbmdTdGF0ZSA9PSBcImhhdmUtbG9jYWwtb2ZmZXJcIiAmJiBqc29uLnNkcCAmJlxuICAvLyAgICBqc29uLnNkcC50eXBlID09IFwib2ZmZXJcIiAmJiBqc29uLnNkcC5yYW5kb21JZCA8IHRoaXMubG9jYWxSYW5kb21JZClcbiAgaWYgKGpzb24uc2RwKSB7XG4gICAgLy8gU2V0IHRoZSByZW1vdGUgZGVzY3JpcHRpb24uXG4gICAgdGhpcy5wYy5zZXRSZW1vdGVEZXNjcmlwdGlvbihcbiAgICAgIG5ldyB0aGlzLlJUQ1Nlc3Npb25EZXNjcmlwdGlvbihqc29uLnNkcCksXG4gICAgICAvLyBTdWNjZXNzXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5wZWVyTmFtZSArIFwiOiBzZXRSZW1vdGVEZXNjcmlwdGlvbiBzdWNjZWVkZWRcIik7XG4gICAgICAgIGlmICh0aGlzLnBjLnJlbW90ZURlc2NyaXB0aW9uLnR5cGUgPT09IFwib2ZmZXJcIikge1xuICAgICAgICAgIHRoaXMucGMuY3JlYXRlQW5zd2VyKHRoaXMub25EZXNjcmlwdGlvbi5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9LmJpbmQodGhpcyksXG4gICAgICAvLyBGYWlsdXJlXG4gICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKHRoaXMucGVlck5hbWUgKyBcIjogXCIgK1xuICAgICAgICAgICAgXCJzZXRSZW1vdGVEZXNjcmlwdGlvbiBmYWlsZWQ6XCIsIGUpO1xuICAgICAgfS5iaW5kKHRoaXMpXG4gICAgKTtcbiAgfSBlbHNlIGlmIChqc29uLmNhbmRpZGF0ZSkge1xuICAgIC8vIEFkZCByZW1vdGUgaWNlIGNhbmRpZGF0ZS5cbiAgICAvL2NvbnNvbGUubG9nKHRoaXMucGVlck5hbWUgKyBcIjogQWRkaW5nIGljZSBjYW5kaWRhdGU6IFwiICsgSlNPTi5zdHJpbmdpZnkoanNvbi5jYW5kaWRhdGUpKTtcbiAgICBpY2VfY2FuZGlkYXRlID0gbmV3IHRoaXMuUlRDSWNlQ2FuZGlkYXRlKGpzb24uY2FuZGlkYXRlKTtcbiAgICB0aGlzLnBjLmFkZEljZUNhbmRpZGF0ZShpY2VfY2FuZGlkYXRlKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLndhcm4odGhpcy5wZWVyTmFtZSArIFwiOiBcIiArXG4gICAgICAgIFwiaGFuZGxlU2lnbmFsTWVzc2FnZSBnb3QgdW5leHBlY3RlZCBtZXNzYWdlOiBcIiwgbWVzc2FnZVRleHQpO1xuICB9XG59O1xuXG4vLyBDb25uZWN0IHRvIHRoZSBwZWVyIGJ5IHRoZSBzaWduYWxsaW5nIGNoYW5uZWwuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUubmVnb3RpYXRlQ29ubmVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5wY1N0YXRlID0gU2ltcGxlRGF0YVBlZXJTdGF0ZS5DT05ORUNUSU5HO1xuICB0aGlzLnBjLmNyZWF0ZU9mZmVyKFxuICAgIHRoaXMub25EZXNjcmlwdGlvbi5iaW5kKHRoaXMpLFxuICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKHRoaXMucGVlck5hbWUgKyBcIjogXCIgK1xuICAgICAgICAgIFwiY3JlYXRlT2ZmZXIgZmFpbGVkOiBcIiwgZS50b1N0cmluZygpKTtcbiAgICAgIHRoaXMucGNTdGF0ZSA9IFNpbXBsZURhdGFQZWVyU3RhdGUuRElTQ09OTkVDVEVEO1xuICAgIH0uYmluZCh0aGlzKVxuICApO1xufTtcblxuU2ltcGxlRGF0YVBlZXIucHJvdG90eXBlLmlzQ2xvc2VkID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gIXRoaXMucGMgfHwgdGhpcy5wYy5zaWduYWxpbmdTdGF0ZSA9PT0gXCJjbG9zZWRcIjtcbn07XG5cblNpbXBsZURhdGFQZWVyLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCF0aGlzLmlzQ2xvc2VkKCkpIHtcbiAgICB0aGlzLnBjLmNsb3NlKCk7XG4gIH1cbiAgLy9jb25zb2xlLmxvZyh0aGlzLnBlZXJOYW1lICsgXCI6IFwiICsgXCJDbG9zZWQgcGVlciBjb25uZWN0aW9uLlwiKTtcbn07XG5cblNpbXBsZURhdGFQZWVyLnByb3RvdHlwZS5hZGREYXRhQ2hhbm5lbCA9IGZ1bmN0aW9uIChjaGFubmVsSWQsIGNoYW5uZWwpIHtcbiAgdmFyIGNhbGxiYWNrcyA9IHRoaXMuZGF0YUNoYW5uZWxDYWxsYmFja3M7XG4gIHRoaXMuY2hhbm5lbHNbY2hhbm5lbElkXSA9IGNoYW5uZWw7XG5cbiAgaWYgKGNoYW5uZWwucmVhZHlTdGF0ZSA9PT0gXCJjb25uZWN0aW5nXCIpIHtcbiAgICBjaGFubmVsLm9ub3BlbiA9IGNhbGxiYWNrcy5vbk9wZW5Gbi5iaW5kKHRoaXMsIGNoYW5uZWwsIHtsYWJlbDogY2hhbm5lbElkfSk7XG4gIH1cblxuICBjaGFubmVsLm9uY2xvc2UgPSBjYWxsYmFja3Mub25DbG9zZUZuLmJpbmQodGhpcywgY2hhbm5lbCwge2xhYmVsOiBjaGFubmVsSWR9KTtcblxuICBjaGFubmVsLm9ubWVzc2FnZSA9IGNhbGxiYWNrcy5vbk1lc3NhZ2VGbi5iaW5kKHRoaXMsIGNoYW5uZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiBjaGFubmVsSWR9KTtcblxuICBjaGFubmVsLm9uZXJyb3IgPSBjYWxsYmFja3Mub25FcnJvckZuLmJpbmQodGhpcywgY2hhbm5lbCwge2xhYmVsOiBjaGFubmVsfSk7XG59O1xuXG4vLyBXaGVuIHdlIGdldCBvdXIgZGVzY3JpcHRpb24sIHdlIHNldCBpdCB0byBiZSBvdXIgbG9jYWwgZGVzY3JpcHRpb24gYW5kXG4vLyBzZW5kIGl0IHRvIHRoZSBwZWVyLlxuU2ltcGxlRGF0YVBlZXIucHJvdG90eXBlLm9uRGVzY3JpcHRpb24gPSBmdW5jdGlvbiAoZGVzY3JpcHRpb24pIHtcbiAgaWYgKHRoaXMuc2VuZFNpZ25hbE1lc3NhZ2UpIHtcbiAgICB0aGlzLnBjLnNldExvY2FsRGVzY3JpcHRpb24oXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnBlZXJOYW1lICsgXCI6IHNldExvY2FsRGVzY3JpcHRpb24gc3VjY2VlZGVkXCIpO1xuICAgICAgICB0aGlzLnNlbmRTaWduYWxNZXNzYWdlKEpTT04uc3RyaW5naWZ5KHsnc2RwJzogZGVzY3JpcHRpb259KSk7XG4gICAgICB9LmJpbmQodGhpcyksXG4gICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKHRoaXMucGVlck5hbWUgKyBcIjogXCIgK1xuICAgICAgICAgICAgXCJzZXRMb2NhbERlc2NyaXB0aW9uIGZhaWxlZDpcIiwgZSk7XG4gICAgICB9LmJpbmQodGhpcylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUuZXJyb3IodGhpcy5wZWVyTmFtZSArIFwiOiBcIiArXG4gICAgICAgIFwiX29uRGVzY3JpcHRpb246IF9zZW5kU2lnbmFsTWVzc2FnZSBpcyBub3Qgc2V0LCBzbyB3ZSBkaWQgbm90IFwiICtcbiAgICAgICAgICAgIFwic2V0IHRoZSBsb2NhbCBkZXNjcmlwdGlvbi4gXCIpO1xuICB9XG59O1xuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUub25OZWdvdGlhdGlvbk5lZWRlZCA9IGZ1bmN0aW9uIChlKSB7XG4gIC8vY29uc29sZS5sb2codGhpcy5wZWVyTmFtZSArIFwiOiBcIiArIFwib25OZWdvdGlhdGlvbk5lZWRlZFwiLFxuICAvLyAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHRoaXMuX3BjKSwgZSk7XG4gIGlmICh0aGlzLnBjU3RhdGUgIT09IFNpbXBsZURhdGFQZWVyU3RhdGUuRElTQ09OTkVDVEVEKSB7XG4gICAgLy8gTmVnb3RpYXRpb24gbWVzc2FnZXMgYXJlIGZhbHNlbHkgcmVxdWVzdGVkIGZvciBuZXcgZGF0YSBjaGFubmVscy5cbiAgICAvLyAgIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3Avd2VicnRjL2lzc3Vlcy9kZXRhaWw/aWQ9MjQzMVxuICAgIC8vIFRoaXMgY29kZSBpcyBhIGhhY2sgdG8gc2ltcGx5IHJlc2V0IHRoZSBzYW1lIGxvY2FsIGFuZCByZW1vdGVcbiAgICAvLyBkZXNjcmlwdGlvbiB3aGljaCB3aWxsIHRyaWdnZXIgdGhlIGFwcHJvcHJpYXRlIGRhdGEgY2hhbm5lbCBvcGVuIGV2ZW50LlxuICAgIC8vIFRPRE86IGZpeC9yZW1vdmUgdGhpcyB3aGVuIENocm9tZSBpc3N1ZSBpcyBmaXhlZC5cbiAgICB2YXIgbG9nU3VjY2VzcyA9IGZ1bmN0aW9uIChvcCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnBlZXJOYW1lICsgXCI6IFwiICsgb3AgKyBcIiBzdWNjZWVkZWQgXCIpO1xuICAgICAgfS5iaW5kKHRoaXMpO1xuICAgIH0uYmluZCh0aGlzKSxcbiAgICAgIGxvZ0ZhaWwgPSBmdW5jdGlvbiAob3ApIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnBlZXJOYW1lICsgXCI6IFwiICsgb3AgKyBcIiBmYWlsZWQ6IFwiICsgZSk7XG4gICAgICAgIH0uYmluZCh0aGlzKTtcbiAgICAgIH0uYmluZCh0aGlzKTtcbiAgICBpZiAodGhpcy5wYy5sb2NhbERlc2NyaXB0aW9uICYmIHRoaXMucGMucmVtb3RlRGVzY3JpcHRpb24gJiZcbiAgICAgICAgdGhpcy5wYy5sb2NhbERlc2NyaXB0aW9uLnR5cGUgPT09IFwib2ZmZXJcIikge1xuICAgICAgdGhpcy5wYy5zZXRMb2NhbERlc2NyaXB0aW9uKHRoaXMucGMubG9jYWxEZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nU3VjY2VzcyhcInNldExvY2FsRGVzY3JpcHRpb25cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ0ZhaWwoXCJzZXRMb2NhbERlc2NyaXB0aW9uXCIpKTtcbiAgICAgIHRoaXMucGMuc2V0UmVtb3RlRGVzY3JpcHRpb24odGhpcy5wYy5yZW1vdGVEZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ1N1Y2Nlc3MoXCJzZXRSZW1vdGVEZXNjcmlwdGlvblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ0ZhaWwoXCJzZXRSZW1vdGVEZXNjcmlwdGlvblwiKSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBjLmxvY2FsRGVzY3JpcHRpb24gJiYgdGhpcy5wYy5yZW1vdGVEZXNjcmlwdGlvbiAmJlxuICAgICAgICB0aGlzLnBjLmxvY2FsRGVzY3JpcHRpb24udHlwZSA9PT0gXCJhbnN3ZXJcIikge1xuICAgICAgdGhpcy5wYy5zZXRSZW1vdGVEZXNjcmlwdGlvbih0aGlzLnBjLnJlbW90ZURlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nU3VjY2VzcyhcInNldFJlbW90ZURlc2NyaXB0aW9uXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nRmFpbChcInNldFJlbW90ZURlc2NyaXB0aW9uXCIpKTtcbiAgICAgIHRoaXMucGMuc2V0TG9jYWxEZXNjcmlwdGlvbih0aGlzLnBjLmxvY2FsRGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ1N1Y2Nlc3MoXCJzZXRMb2NhbERlc2NyaXB0aW9uXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dGYWlsKFwic2V0TG9jYWxEZXNjcmlwdGlvblwiKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IodGhpcy5wZWVyTmFtZSArICcsIG9uTmVnb3RpYXRpb25OZWVkZWQgZmFpbGVkJyk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLm5lZ290aWF0ZUNvbm5lY3Rpb24oKTtcbn07XG5cblNpbXBsZURhdGFQZWVyLnByb3RvdHlwZS5vbkljZUNhbGxiYWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGlmIChldmVudC5jYW5kaWRhdGUpIHtcbiAgICAvLyBTZW5kIEljZUNhbmRpZGF0ZSB0byBwZWVyLlxuICAgIC8vY29uc29sZS5sb2codGhpcy5wZWVyTmFtZSArIFwiOiBcIiArIFwiaWNlIGNhbGxiYWNrIHdpdGggY2FuZGlkYXRlXCIsIGV2ZW50KTtcbiAgICBpZiAodGhpcy5zZW5kU2lnbmFsTWVzc2FnZSkge1xuICAgICAgdGhpcy5zZW5kU2lnbmFsTWVzc2FnZShKU09OLnN0cmluZ2lmeSh7J2NhbmRpZGF0ZSc6IGV2ZW50LmNhbmRpZGF0ZX0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKHRoaXMucGVlck5hbWUgKyBcIjogXCIgKyBcIl9vbkRlc2NyaXB0aW9uOiBfc2VuZFNpZ25hbE1lc3NhZ2UgaXMgbm90IHNldC5cIik7XG4gICAgfVxuICB9XG59O1xuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUub25TaWduYWxpbmdTdGF0ZUNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgLy9jb25zb2xlLmxvZyh0aGlzLnBlZXJOYW1lICsgXCI6IFwiICsgXCJvblNpZ25hbGluZ1N0YXRlQ2hhbmdlOiBcIiwgdGhpcy5fcGMuc2lnbmFsaW5nU3RhdGUpO1xuICBpZiAodGhpcy5wYy5zaWduYWxpbmdTdGF0ZSA9PT0gXCJzdGFibGVcIikge1xuICAgIHRoaXMucGNTdGF0ZSA9IFNpbXBsZURhdGFQZWVyU3RhdGUuQ09OTkVDVEVEO1xuICAgIHRoaXMub25Db25uZWN0ZWRRdWV1ZS5tYXAoZnVuY3Rpb24gKGNhbGxiYWNrKSB7IGNhbGxiYWNrKCk7IH0pO1xuICB9XG59O1xuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUub25EYXRhQ2hhbm5lbCA9IGZ1bmN0aW9uIChldmVudCkge1xuICB0aGlzLmFkZERhdGFDaGFubmVsKGV2ZW50LmNoYW5uZWwubGFiZWwsIGV2ZW50LmNoYW5uZWwpO1xuICAvLyBSVENEYXRhQ2hhbm5lbHMgY3JlYXRlZCBieSBhIFJUQ0RhdGFDaGFubmVsRXZlbnQgaGF2ZSBhbiBpbml0aWFsXG4gIC8vIHN0YXRlIG9mIG9wZW4sIHNvIHRoZSBvbm9wZW4gZXZlbnQgZm9yIHRoZSBjaGFubmVsIHdpbGwgbm90XG4gIC8vIGZpcmUuIFdlIG5lZWQgdG8gZmlyZSB0aGUgb25PcGVuRGF0YUNoYW5uZWwgZXZlbnQgaGVyZVxuICAvLyBodHRwOi8vd3d3LnczLm9yZy9UUi93ZWJydGMvI2lkbC1kZWYtUlRDRGF0YUNoYW5uZWxTdGF0ZVxuXG4gIC8vIEZpcmVmb3ggY2hhbm5lbHMgZG8gbm90IGhhdmUgYW4gaW5pdGlhbCBzdGF0ZSBvZiBcIm9wZW5cIlxuICAvLyBTZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTAwMDQ3OFxuICBpZiAoZXZlbnQuY2hhbm5lbC5yZWFkeVN0YXRlID09PSBcIm9wZW5cIikge1xuICAgIHRoaXMuZGF0YUNoYW5uZWxDYWxsYmFja3Mub25PcGVuRm4oZXZlbnQuY2hhbm5lbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogZXZlbnQuY2hhbm5lbC5sYWJlbH0pO1xuICB9XG59O1xuXG4vLyBfc2lnbmFsbGluZ0NoYW5uZWwgaXMgYSBjaGFubmVsIGZvciBlbWl0dGluZyBldmVudHMgYmFjayB0byB0aGUgZnJlZWRvbSBIdWIuXG5mdW5jdGlvbiBQZWVyQ29ubmVjdGlvbihwb3J0TW9kdWxlLCBkaXNwYXRjaEV2ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgUlRDUGVlckNvbm5lY3Rpb24sIFJUQ1Nlc3Npb25EZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIFJUQ0ljZUNhbmRpZGF0ZSkge1xuICAvLyBDaGFubmVsIGZvciBlbWl0dGluZyBldmVudHMgdG8gY29uc3VtZXIuXG4gIHRoaXMuZGlzcGF0Y2hFdmVudCA9IGRpc3BhdGNoRXZlbnQ7XG5cbiAgLy8gYSAoaG9wZWZ1bGx5IHVuaXF1ZSkgSUQgZm9yIGRlYnVnZ2luZy5cbiAgdGhpcy5wZWVyTmFtZSA9IFwicFwiICsgTWF0aC5yYW5kb20oKTtcblxuICAvLyBUaGlzIGlzIHRoZSBwb3J0QXBwIChkZWZpbmVkIGluIGZyZWVkb20vc3JjL3BvcnQtYXBwLmpzKS4gQSB3YXkgdG8gc3BlYWtcbiAgLy8gdG8gZnJlZWRvbS5cbiAgdGhpcy5mcmVlZG9tTW9kdWxlID0gcG9ydE1vZHVsZS5tb2R1bGU7XG5cbiAgLy8gRm9yIHRlc3RzIHdlIG1heSBtb2NrIG91dCB0aGUgUGVlckNvbm5lY3Rpb24gYW5kXG4gIC8vIFNlc3Npb25EZXNjcmlwdGlvbiBpbXBsZW1lbnRhdGlvbnNcbiAgdGhpcy5SVENQZWVyQ29ubmVjdGlvbiA9IFJUQ1BlZXJDb25uZWN0aW9uO1xuICB0aGlzLlJUQ1Nlc3Npb25EZXNjcmlwdGlvbiA9IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbjtcbiAgdGhpcy5SVENJY2VDYW5kaWRhdGUgPSBSVENJY2VDYW5kaWRhdGU7XG5cbiAgLy8gVGhpcyBpcyB0aGUgYSBjaGFubmVsIHRvIHNlbmQgc2lnbmFsbGluZyBtZXNzYWdlcy5cbiAgdGhpcy5zaWduYWxsaW5nQ2hhbm5lbCA9IG51bGw7XG5cbiAgLy8gVGhlIERhdGFQZWVyIG9iamVjdCBmb3IgdGFsa2luZyB0byB0aGUgcGVlci5cbiAgdGhpcy5wZWVyID0gbnVsbDtcblxuICAvLyBUaGUgQ29yZSBvYmplY3QgZm9yIG1hbmFnaW5nIGNoYW5uZWxzLlxuICB0aGlzLmZyZWVkb21Nb2R1bGUub25jZSgnY29yZScsIGZ1bmN0aW9uIChDb3JlKSB7XG4gICAgdGhpcy5jb3JlID0gbmV3IENvcmUoKTtcbiAgfS5iaW5kKHRoaXMpKTtcbiAgdGhpcy5mcmVlZG9tTW9kdWxlLmVtaXQodGhpcy5mcmVlZG9tTW9kdWxlLmNvbnRyb2xDaGFubmVsLCB7XG4gICAgdHlwZTogJ2NvcmUgcmVxdWVzdCBkZWxlZ2F0ZWQgdG8gcGVlcmNvbm5lY3Rpb24nLFxuICAgIHJlcXVlc3Q6ICdjb3JlJ1xuICB9KTtcbn1cblxuLy8gU3RhcnQgYSBwZWVyIGNvbm5lY3Rpb24gdXNpbmcgdGhlIGdpdmVuIGZyZWVkb21DaGFubmVsSWQgYXMgdGhlIHdheSB0b1xuLy8gY29tbXVuaWNhdGUgd2l0aCB0aGUgcGVlci4gVGhlIGFyZ3VtZW50IHxmcmVlZG9tQ2hhbm5lbElkfCBpcyBhIHdheSB0byBzcGVha1xuLy8gdG8gYW4gaWRlbnRpdHkgcHJvdmlkZSB0byBzZW5kIHRoZW0gU0RQIGhlYWRlcnMgbmVnb3RpYXRlIHRoZSBhZGRyZXNzL3BvcnQgdG9cbi8vIHNldHVwIHRoZSBwZWVyIHRvIHBlZXJDb25uZWN0aW9uLlxuLy9cbi8vIG9wdGlvbnM6IHtcbi8vICAgcGVlck5hbWU6IHN0cmluZywgICAvLyBGb3IgcHJldHR5IHByaW50aW5nIG1lc3NhZ2VzIGFib3V0IHRoaXMgcGVlci5cbi8vICAgZGVidWc6IGJvb2xlYW4gICAgICAgICAgIC8vIHNob3VsZCB3ZSBhZGQgZXh0cmFcbi8vIH1cblBlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5zZXR1cCA9IGZ1bmN0aW9uIChzaWduYWxsaW5nQ2hhbm5lbElkLCBwZWVyTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHVuU2VydmVycywgaW5pdGlhdGVDb25uZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVhdGlvbikge1xuICB0aGlzLnBlZXJOYW1lID0gcGVlck5hbWU7XG4gIHZhciBtb2NrcyA9IHtSVENQZWVyQ29ubmVjdGlvbjogdGhpcy5SVENQZWVyQ29ubmVjdGlvbixcbiAgICAgICAgICAgICAgIFJUQ1Nlc3Npb25EZXNjcmlwdGlvbjogdGhpcy5SVENTZXNzaW9uRGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICBSVENJY2VDYW5kaWRhdGU6IHRoaXMuUlRDSWNlQ2FuZGlkYXRlfSxcbiAgICBzZWxmID0gdGhpcyxcbiAgICBkYXRhQ2hhbm5lbENhbGxiYWNrcyA9IHtcbiAgICAgIC8vIG9uT3BlbkZuIGlzIGNhbGxlZCBhdCB0aGUgcG9pbnQgbWVzc2FnZXMgd2lsbCBhY3R1YWxseSBnZXQgdGhyb3VnaC5cbiAgICAgIG9uT3BlbkZuOiBmdW5jdGlvbiAoZGF0YUNoYW5uZWwsIGluZm8pIHtcbiAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KFwib25PcGVuRGF0YUNoYW5uZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICB7IGNoYW5uZWxJZDogaW5mby5sYWJlbH0pO1xuICAgICAgfSxcbiAgICAgIG9uQ2xvc2VGbjogZnVuY3Rpb24gKGRhdGFDaGFubmVsLCBpbmZvKSB7XG4gICAgICAgIHNlbGYuZGlzcGF0Y2hFdmVudChcIm9uQ2xvc2VEYXRhQ2hhbm5lbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2hhbm5lbElkOiBpbmZvLmxhYmVsfSk7XG4gICAgICB9LFxuICAgICAgLy8gRGVmYXVsdCBvbiByZWFsIG1lc3NhZ2UgcHJpbnRzIGl0IHRvIGNvbnNvbGUuXG4gICAgICBvbk1lc3NhZ2VGbjogZnVuY3Rpb24gKGRhdGFDaGFubmVsLCBpbmZvLCBldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQuZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KCdvblJlY2VpdmVkJywge1xuICAgICAgICAgICAgJ2NoYW5uZWxMYWJlbCc6IGluZm8ubGFiZWwsXG4gICAgICAgICAgICAnYnVmZmVyJzogZXZlbnQuZGF0YVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmRhdGEgaW5zdGFuY2VvZiBCbG9iKSB7XG4gICAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KCdvblJlY2VpdmVkJywge1xuICAgICAgICAgICAgJ2NoYW5uZWxMYWJlbCc6IGluZm8ubGFiZWwsXG4gICAgICAgICAgICAnYmluYXJ5JzogZXZlbnQuZGF0YVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiAoZXZlbnQuZGF0YSkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KCdvblJlY2VpdmVkJywge1xuICAgICAgICAgICAgJ2NoYW5uZWxMYWJlbCc6IGluZm8ubGFiZWwsXG4gICAgICAgICAgICAndGV4dCc6IGV2ZW50LmRhdGFcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIERlZmF1bHQgb24gZXJyb3IsIHByaW50cyBpdC5cbiAgICAgIG9uRXJyb3JGbjogZnVuY3Rpb24gKGRhdGFDaGFubmVsLCBpbmZvLCBlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihkYXRhQ2hhbm5lbC5wZWVyTmFtZSArIFwiOiBkYXRhQ2hhbm5lbChcIiArXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YUNoYW5uZWwuZGF0YUNoYW5uZWwubGFiZWwgKyBcIik6IGVycm9yOiBcIiwgZXJyKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNoYW5uZWxJZCxcbiAgICBvcGVuRGF0YUNoYW5uZWxDb250aW51YXRpb247XG5cbiAgdGhpcy5wZWVyID0gbmV3IFNpbXBsZURhdGFQZWVyKHRoaXMucGVlck5hbWUsIHN0dW5TZXJ2ZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUNoYW5uZWxDYWxsYmFja3MsIG1vY2tzKTtcblxuICAvLyBTZXR1cCBsaW5rIGJldHdlZW4gRnJlZWRvbSBtZXNzYWdpbmcgYW5kIF9wZWVyJ3Mgc2lnbmFsbGluZy5cbiAgLy8gTm90ZTogdGhlIHNpZ25hbGxpbmcgY2hhbm5lbCBzaG91bGQgb25seSBiZSBzZW5kaW5nIHJlY2VpdmVpbmcgc3RyaW5ncy5cbiAgdGhpcy5jb3JlLmJpbmRDaGFubmVsKHNpZ25hbGxpbmdDaGFubmVsSWQsIGZ1bmN0aW9uIChjaGFubmVsKSB7XG4gICAgdGhpcy5zaWduYWxsaW5nQ2hhbm5lbCA9IGNoYW5uZWw7XG4gICAgdGhpcy5wZWVyLnNldFNlbmRTaWduYWxNZXNzYWdlKGZ1bmN0aW9uIChtc2cpIHtcbiAgICAgIHRoaXMuc2lnbmFsbGluZ0NoYW5uZWwuZW1pdCgnbWVzc2FnZScsIG1zZyk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnNpZ25hbGxpbmdDaGFubmVsLm9uKCdtZXNzYWdlJyxcbiAgICAgICAgdGhpcy5wZWVyLmhhbmRsZVNpZ25hbE1lc3NhZ2UuYmluZCh0aGlzLnBlZXIpKTtcbiAgICB0aGlzLnNpZ25hbGxpbmdDaGFubmVsLmVtaXQoJ3JlYWR5Jyk7XG4gICAgaWYgKCFpbml0aWF0ZUNvbm5lY3Rpb24pIHtcbiAgICAgIHRoaXMucGVlci5ydW5XaGVuQ29ubmVjdGVkKGNvbnRpbnVhdGlvbik7XG4gICAgfVxuICB9LmJpbmQodGhpcykpO1xuXG4gIGlmIChpbml0aWF0ZUNvbm5lY3Rpb24pIHtcbiAgICAvLyBTZXR1cCBhIGNvbm5lY3Rpb24gcmlnaHQgYXdheSwgdGhlbiBpbnZva2UgY29udGludWF0aW9uLlxuICAgIGNvbnNvbGUubG9nKHRoaXMucGVlck5hbWUgKyAnIGluaXRpYXRpbmcgY29ubmVjdGlvbicpO1xuICAgIGNoYW5uZWxJZCA9ICdoZWxsbycgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCk7XG4gICAgb3BlbkRhdGFDaGFubmVsQ29udGludWF0aW9uID0gZnVuY3Rpb24gKHN1Y2Nlc3MsIGVycm9yKSB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29udGludWF0aW9uKHVuZGVmaW5lZCwgZXJyb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbG9zZURhdGFDaGFubmVsKGNoYW5uZWxJZCwgY29udGludWF0aW9uKTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcyk7XG4gICAgdGhpcy5vcGVuRGF0YUNoYW5uZWwoY2hhbm5lbElkLCBvcGVuRGF0YUNoYW5uZWxDb250aW51YXRpb24pO1xuICB9XG59O1xuXG5QZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuY3JlYXRlT2ZmZXIgPSBmdW5jdGlvbiAoY29uc3RyYWludHMsIGNvbnRpbnVhdGlvbikge1xuICB0aGlzLnBlZXIuY3JlYXRlT2ZmZXIoY29uc3RyYWludHMsIGNvbnRpbnVhdGlvbik7XG59O1xuXG4vLyBUT0RPOiBkZWxheSBjb250aW51YXRpb24gdW50aWwgdGhlIG9wZW4gY2FsbGJhY2sgZnJvbSBfcGVlciBpcyBjYWxsZWQuXG5QZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUub3BlbkRhdGFDaGFubmVsID0gZnVuY3Rpb24gKGNoYW5uZWxJZCwgY29udGludWF0aW9uKSB7XG4gIHRoaXMucGVlci5vcGVuRGF0YUNoYW5uZWwoY2hhbm5lbElkLCBjb250aW51YXRpb24pO1xufTtcblxuUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmNsb3NlRGF0YUNoYW5uZWwgPSBmdW5jdGlvbiAoY2hhbm5lbElkLCBjb250aW51YXRpb24pIHtcbiAgdGhpcy5wZWVyLmNsb3NlQ2hhbm5lbChjaGFubmVsSWQpO1xuICBjb250aW51YXRpb24oKTtcbn07XG5cbi8vIENhbGxlZCB0byBzZW5kIGEgbWVzc2FnZSBvdmVyIHRoZSBnaXZlbiBkYXRhY2hhbm5lbCB0byBhIHBlZXIuIElmIHRoZSBkYXRhXG4vLyBjaGFubmVsIGRvZXNuJ3QgYWxyZWFkeSBleGlzdCwgdGhlIERhdGFQZWVyIGNyZWF0ZXMgaXQuXG5QZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChzZW5kSW5mbywgY29udGludWF0aW9uKSB7XG4gIHZhciBvYmpUb1NlbmQgPSBzZW5kSW5mby50ZXh0IHx8IHNlbmRJbmZvLmJ1ZmZlciB8fCBzZW5kSW5mby5iaW5hcnk7XG4gIGlmICh0eXBlb2Ygb2JqVG9TZW5kID09PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJObyB2YWxpZCBkYXRhIHRvIHNlbmQgaGFzIGJlZW4gcHJvdmlkZWQuXCIsIHNlbmRJbmZvKTtcbiAgICByZXR1cm47XG4gIH1cbiAgLy9ERUJVR1xuICAvLyBvYmpUb1NlbmQgPSBuZXcgQXJyYXlCdWZmZXIoNCk7XG4gIC8vREVCVUdcbiAgdGhpcy5wZWVyLnNlbmQoc2VuZEluZm8uY2hhbm5lbExhYmVsLCBvYmpUb1NlbmQsIGNvbnRpbnVhdGlvbik7XG59O1xuXG5QZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0QnVmZmVyZWRBbW91bnQgPSBmdW5jdGlvbiAoY2hhbm5lbElkLCBjb250aW51YXRpb24pIHtcbiAgY29udGludWF0aW9uKHRoaXMucGVlci5nZXRCdWZmZXJlZEFtb3VudChjaGFubmVsSWQpKTtcbn07XG5cblBlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uIChjb250aW51YXRpb24pIHtcbiAgaWYgKHRoaXMucGVlci5pc0Nsb3NlZCgpKSB7XG4gICAgLy8gUGVlciBhbHJlYWR5IGNsb3NlZCwgcnVuIGNvbnRpbnVhdGlvbiB3aXRob3V0IGRpc3BhdGNoaW5nIGV2ZW50LlxuICAgIGNvbnRpbnVhdGlvbigpO1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLnBlZXIuY2xvc2UoKTtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KFwib25DbG9zZVwiKTtcbiAgY29udGludWF0aW9uKCk7XG59O1xuXG5leHBvcnRzLnByb3ZpZGVyID0gUGVlckNvbm5lY3Rpb247XG5leHBvcnRzLm5hbWUgPSAnY29yZS5wZWVyY29ubmVjdGlvbic7XG5leHBvcnRzLmZsYWdzID0ge21vZHVsZTogdHJ1ZX07XG4iLCIvKmpzbGludCBpbmRlbnQ6MixzbG9wcHk6dHJ1ZSwgbm9kZTp0cnVlICovXG5cbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vLi4vc3JjL3V0aWwnKTtcblxudmFyIHVuQXR0YWNoZWRDaGFubmVscyA9IHt9O1xudmFyIGFsbG9jYXRlQ2hhbm5lbCA9IGZ1bmN0aW9uIChkYXRhQ2hhbm5lbCkge1xuICB2YXIgaWQgPSB1dGlsLmdldElkKCk7XG4gIHVuQXR0YWNoZWRDaGFubmVsc1tpZF0gPSBkYXRhQ2hhbm5lbDtcbiAgcmV0dXJuIGlkO1xufTtcblxudmFyIFJUQ0RhdGFDaGFubmVsQWRhcHRlciA9IGZ1bmN0aW9uIChjYXAsIGRpc3BhdGNoRXZlbnRzLCBpZCkge1xuICB0aGlzLmRpc3BhdGNoRXZlbnQgPSBkaXNwYXRjaEV2ZW50cztcbiAgaWYgKCF1bkF0dGFjaGVkQ2hhbm5lbHNbaWRdKSB7XG4gICAgY29uc29sZS53YXJuKCdJbnZhbGlkIElELCBjcmVhdGluZyBhY3Rpbmcgb24gdW5hdHRhY2hlZCBEYXRhQ2hhbm5lbCcpO1xuICAgIHZhciBDb25uZWN0aW9uID0gcmVxdWlyZSgnLi9jb3JlLnJ0Y3BlZXJjb25uZWN0aW9uJykucHJvdmlkZXIsXG4gICAgICBwcm92aWRlciA9IG5ldyBDb25uZWN0aW9uKCk7XG4gICAgaWQgPSBwcm92aWRlci5jcmVhdGVEYXRhQ2hhbm5lbCgpO1xuICAgIHByb3ZpZGVyLmNsb3NlKCk7XG4gIH1cblxuICB0aGlzLmNoYW5uZWwgPSB1bkF0dGFjaGVkQ2hhbm5lbHNbaWRdO1xuICBkZWxldGUgdW5BdHRhY2hlZENoYW5uZWxzW2lkXTtcblxuICB0aGlzLmV2ZW50cyA9IFtcbiAgICAnb25vcGVuJyxcbiAgICAnb25lcnJvcicsXG4gICAgJ29uY2xvc2UnLFxuICAgICdvbm1lc3NhZ2UnXG4gIF07XG4gIHRoaXMubWFuYWdlRXZlbnRzKHRydWUpO1xufTtcblxuLy8gQXR0YWNoIG9yIGRldGFjaCBsaXN0ZW5lcnMgZm9yIGV2ZW50cyBhZ2FpbnN0IHRoZSBjb25uZWN0aW9uLlxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5tYW5hZ2VFdmVudHMgPSBmdW5jdGlvbiAoYXR0YWNoKSB7XG4gIHRoaXMuZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGF0dGFjaCkge1xuICAgICAgdGhpc1tldmVudF0gPSB0aGlzW2V2ZW50XS5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5jaGFubmVsW2V2ZW50XSA9IHRoaXNbZXZlbnRdO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdGhpcy5jaGFubmVsW2V2ZW50XTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLmdldExhYmVsID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrKHRoaXMuY2hhbm5lbC5sYWJlbCk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLmdldE9yZGVyZWQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sodGhpcy5jaGFubmVsLm9yZGVyZWQpO1xufTtcblxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5nZXRNYXhQYWNrZXRMaWZlVGltZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBjYWxsYmFjayh0aGlzLmNoYW5uZWwubWF4UGFja2V0TGlmZVRpbWUpO1xufTtcblxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5nZXRNYXhSZXRyYW5zbWl0cyA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBjYWxsYmFjayh0aGlzLmNoYW5uZWwubWF4UmV0cmFuc21pdHMpO1xufTtcblxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5nZXRQcm90b2NvbCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBjYWxsYmFjayh0aGlzLmNoYW5uZWwucHJvdG9jb2wpO1xufTtcblxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5nZXROZWdvdGlhdGVkID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrKHRoaXMuY2hhbm5lbC5uZWdvdGlhdGVkKTtcbn07XG5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUuZ2V0SWQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sodGhpcy5jaGFubmVsLmlkKTtcbn07XG5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUuZ2V0UmVhZHlTdGF0ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBjYWxsYmFjayh0aGlzLmNoYW5uZWwucmVhZHlTdGF0ZSk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLmdldEJ1ZmZlcmVkQW1vdW50ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrKHRoaXMuY2hhbm5lbC5idWZmZXJlZEFtb3VudCk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLmdldEJpbmFyeVR5cGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sodGhpcy5jaGFubmVsLmJpbmFyeVR5cGUpO1xufTtcblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUuc2V0QmluYXJ5VHlwZSA9IGZ1bmN0aW9uIChiaW5hcnlUeXBlLCBjYWxsYmFjaykge1xuICB0aGlzLmNoYW5uZWwuYmluYXJ5VHlwZSA9IGJpbmFyeVR5cGU7XG4gIGNhbGxiYWNrKCk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAodGV4dCwgY2FsbGJhY2spIHtcbiAgdGhpcy5jaGFubmVsLnNlbmQodGV4dCk7XG4gIGNhbGxiYWNrKCk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLnNlbmRCdWZmZXIgPSBmdW5jdGlvbiAoYnVmZmVyLCBjYWxsYmFjaykge1xuICB0aGlzLmNoYW5uZWwuc2VuZChidWZmZXIpO1xuICBjYWxsYmFjaygpO1xufTtcblxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBpZiAoIXRoaXMuY2hhbm5lbCkge1xuICAgIHJldHVybiBjYWxsYmFjaygpO1xuICB9XG4gIHRoaXMubWFuYWdlRXZlbnRzKGZhbHNlKTtcbiAgdGhpcy5jaGFubmVsLmNsb3NlKCk7XG4gIGNhbGxiYWNrKCk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLm9ub3BlbiA9IGZ1bmN0aW9uIChldmVudCkge1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoJ29ub3BlbicsIGV2ZW50Lm1lc3NhZ2UpO1xufTtcblxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5vbmVycm9yID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25lcnJvcicsIHtcbiAgICBlcnJjb2RlOiBldmVudC50eXBlLFxuICAgIG1lc3NhZ2U6IGV2ZW50Lm1lc3NhZ2VcbiAgfSk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLm9uY2xvc2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbmNsb3NlJywgZXZlbnQubWVzc2FnZSk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAodHlwZW9mIGV2ZW50LmRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbm1lc3NhZ2UnLCB7dGV4dDogZXZlbnQuZGF0YX0pO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25tZXNzYWdlJywge2J1ZmZlcjogZXZlbnQuZGF0YX0pO1xuICB9XG59O1xuXG5leHBvcnRzLm5hbWUgPSBcImNvcmUucnRjZGF0YWNoYW5uZWxcIjtcbmV4cG9ydHMucHJvdmlkZXIgPSBSVENEYXRhQ2hhbm5lbEFkYXB0ZXI7XG5leHBvcnRzLmFsbG9jYXRlID0gYWxsb2NhdGVDaGFubmVsO1xuIiwiLypqc2xpbnQgaW5kZW50OjIsc2xvcHB5OnRydWUsIG5vZGU6dHJ1ZSAqL1xuXG52YXIgYWRhcHRlciA9IHJlcXVpcmUoJ3dlYnJ0Yy1hZGFwdGVyJyk7XG52YXIgUHJvbWlzZUNvbXBhdCA9IHJlcXVpcmUoJ2VzNi1wcm9taXNlJykuUHJvbWlzZTtcbnZhciBSVENQZWVyQ29ubmVjdGlvbiA9IGFkYXB0ZXIuUlRDUGVlckNvbm5lY3Rpb247XG52YXIgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uID0gYWRhcHRlci5SVENTZXNzaW9uRGVzY3JpcHRpb247XG52YXIgUlRDSWNlQ2FuZGlkYXRlID0gYWRhcHRlci5SVENJY2VDYW5kaWRhdGU7XG5cbnZhciBEYXRhQ2hhbm5lbCA9IHJlcXVpcmUoJy4vY29yZS5ydGNkYXRhY2hhbm5lbCcpO1xuXG52YXIgUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyID0gZnVuY3Rpb24gKGNhcCwgZGlzcGF0Y2hFdmVudCwgY29uZmlndXJhdGlvbikge1xuICB0aGlzLmRpc3BhdGNoRXZlbnQgPSBkaXNwYXRjaEV2ZW50O1xuICB0cnkge1xuICAgIHRoaXMuY29ubmVjdGlvbiA9IG5ldyBSVENQZWVyQ29ubmVjdGlvbihjb25maWd1cmF0aW9uKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIE5vdGU6IFlvdSBjYW4ndCBhc2sgdGhlIHByb3ZpZGVyIHRvIGNsb3NlIHlvdSBzeW5jaHJvbm91c2x5LCBzaW5jZVxuICAgIC8vIHRoZSBjb25zdHJ1Y3RvciBoYXMgbm90IHlldCByZXR1cm5lZCwgc28gdGhlcmUncyBubyAndGhpcycgdGhhdFxuICAgIC8vIHRoZSBwcm92aWRlciBjYW4ga25vdyBhYm91dCB5ZXQuXG4gICAgc2V0VGltZW91dChjYXAucHJvdmlkZXIuY2xvc2UuYmluZChjYXAucHJvdmlkZXIsIHRoaXMpLCAwKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLmV2ZW50cyA9IFtcbiAgICAnb25kYXRhY2hhbm5lbCcsXG4gICAgJ29ubmVnb3RpYXRpb25uZWVkZWQnLFxuICAgICdvbmljZWNhbmRpZGF0ZScsXG4gICAgJ29uc2lnbmFsaW5nc3RhdGVjaGFuZ2UnLFxuICAgICdvbmFkZHN0cmVhbScsXG4gICAgJ29ucmVtb3Zlc3RyZWFtJyxcbiAgICAnb25pY2Vjb25uZWN0aW9uc3RhdGVjaGFuZ2UnXG4gIF07XG4gIHRoaXMubWFuYWdlRXZlbnRzKHRydWUpO1xufTtcblxuLy8gQXR0YWNoIG9yIGRldGFjaCBsaXN0ZW5lcnMgZm9yIGV2ZW50cyBhZ2FpbnN0IHRoZSBjb25uZWN0aW9uLlxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5tYW5hZ2VFdmVudHMgPSBmdW5jdGlvbiAoYXR0YWNoKSB7XG4gIHRoaXMuZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGF0dGFjaCkge1xuICAgICAgdGhpc1tldmVudF0gPSB0aGlzW2V2ZW50XS5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5jb25uZWN0aW9uW2V2ZW50XSA9IHRoaXNbZXZlbnRdO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb25uZWN0aW9uKSB7XG4gICAgICBkZWxldGUgdGhpcy5jb25uZWN0aW9uW2V2ZW50XTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLmNyZWF0ZU9mZmVyID0gZnVuY3Rpb24gKGNvbnN0cmFpbnRzKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdGhpcy5jb25uZWN0aW9uLmNyZWF0ZU9mZmVyKHJlc29sdmUsIHJlamVjdCwgY29uc3RyYWludHMpO1xuICB9LmJpbmQodGhpcykpO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5jcmVhdGVBbnN3ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdGhpcy5jb25uZWN0aW9uLmNyZWF0ZUFuc3dlcihyZXNvbHZlLCByZWplY3QpO1xuICB9LmJpbmQodGhpcykpO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5zZXRMb2NhbERlc2NyaXB0aW9uID0gZnVuY3Rpb24gKGRlc2NyaXB0aW9uKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdGhpcy5jb25uZWN0aW9uLnNldExvY2FsRGVzY3JpcHRpb24obmV3IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbihkZXNjcmlwdGlvbiksXG4gICAgICByZXNvbHZlLFxuICAgICAgcmVqZWN0KTtcbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuZ2V0TG9jYWxEZXNjcmlwdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSh0aGlzLmNvbm5lY3Rpb24ubG9jYWxEZXNjcmlwdGlvbik7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLnNldFJlbW90ZURlc2NyaXB0aW9uID0gZnVuY3Rpb24gKGRlc2NyaXB0aW9uKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdGhpcy5jb25uZWN0aW9uLnNldFJlbW90ZURlc2NyaXB0aW9uKG5ldyBSVENTZXNzaW9uRGVzY3JpcHRpb24oZGVzY3JpcHRpb24pLFxuICAgICAgcmVzb2x2ZSxcbiAgICAgIHJlamVjdCk7XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLmdldFJlbW90ZURlc2NyaXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHRoaXMuY29ubmVjdGlvbi5yZW1vdGVEZXNjcmlwdGlvbik7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLmdldFNpZ25hbGluZ1N0YXRlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHRoaXMuY29ubmVjdGlvbi5zaWduYWxpbmdTdGF0ZSk7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLnVwZGF0ZUljZSA9IGZ1bmN0aW9uIChjb25maWd1cmF0aW9uKSB7XG4gIHRoaXMuY29ubmVjdGlvbi51cGRhdGVJY2UoY29uZmlndXJhdGlvbik7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUoKTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuYWRkSWNlQ2FuZGlkYXRlID0gZnVuY3Rpb24gKGNhbmRpZGF0ZSkge1xuICByZXR1cm4gbmV3IFByb21pc2VDb21wYXQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHRoaXMuY29ubmVjdGlvbi5hZGRJY2VDYW5kaWRhdGUobmV3IFJUQ0ljZUNhbmRpZGF0ZShjYW5kaWRhdGUpLFxuICAgICAgcmVzb2x2ZSxcbiAgICAgIHJlamVjdCk7XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLmdldEljZUdhdGhlcmluZ1N0YXRlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHRoaXMuY29ubmVjdGlvbi5pY2VHYXRoZXJpbmdTdGF0ZSk7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLmdldEljZUNvbm5lY3Rpb25TdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSh0aGlzLmNvbm5lY3Rpb24uaWNlQ29ubmVjdGlvblN0YXRlKTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuZ2V0Q29uZmlndXJhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNvbmZpZ3VyYXRpb24gPSB0aGlzLmNvbm5lY3Rpb24uZ2V0Q29uZmlndXJhdGlvbigpO1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKGNvbmZpZ3VyYXRpb24pO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5nZXRMb2NhbFN0cmVhbXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlamVjdCh7XG4gICAgZXJyY29kZTogLTEsXG4gICAgbWVzc2FnZTogXCJOb3QgSW1wbGVtZW50ZWRcIlxuICB9KTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuZ2V0UmVtb3RlU3RyZWFtcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVqZWN0KHtcbiAgICBlcnJjb2RlOiAtMSxcbiAgICBtZXNzYWdlOiBcIk5vdCBJbXBsZW1lbnRlZFwiXG4gIH0pO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5nZXRTdHJlYW1CeUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlamVjdCh7XG4gICAgZXJyY29kZTogLTEsXG4gICAgbWVzc2FnZTogXCJOb3QgSW1wbGVtZW50ZWRcIlxuICB9KTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuYWRkU3RyZWFtID0gZnVuY3Rpb24gKGlkKSB7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlamVjdCh7XG4gICAgZXJyY29kZTogLTEsXG4gICAgbWVzc2FnZTogXCJOb3QgSW1wbGVtZW50ZWRcIlxuICB9KTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUucmVtb3ZlU3RyZWFtID0gZnVuY3Rpb24gKGlkKSB7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlamVjdCh7XG4gICAgZXJyY29kZTogLTEsXG4gICAgbWVzc2FnZTogXCJOb3QgSW1wbGVtZW50ZWRcIlxuICB9KTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghdGhpcy5jb25uZWN0aW9uKSB7XG4gICAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSgpO1xuICB9XG4gIHRoaXMubWFuYWdlRXZlbnRzKGZhbHNlKTtcbiAgdHJ5IHtcbiAgICB0aGlzLmNvbm5lY3Rpb24uY2xvc2UoKTtcbiAgICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZWplY3Qoe1xuICAgICAgZXJyY29kZTogZS5uYW1lLFxuICAgICAgbWVzc2FnZTogZS5tZXNzYWdlXG4gICAgfSk7XG4gIH1cbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuY3JlYXRlRGF0YUNoYW5uZWwgPSBmdW5jdGlvbiAobGFiZWwsIGRhdGFDaGFubmVsRGljdCkge1xuICB2YXIgaWQgPSBEYXRhQ2hhbm5lbC5hbGxvY2F0ZSh0aGlzLmNvbm5lY3Rpb24uY3JlYXRlRGF0YUNoYW5uZWwobGFiZWwsIGRhdGFDaGFubmVsRGljdCkpO1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKGlkKTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuZ2V0U3RhdHMgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ29tcGF0KGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB0aGlzLmNvbm5lY3Rpb24uZ2V0U3RhdHMoc2VsZWN0b3IsIHJlc29sdmUsIHJlamVjdCk7XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLm9uZGF0YWNoYW5uZWwgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgdmFyIGlkID0gRGF0YUNoYW5uZWwuYWxsb2NhdGUoZXZlbnQuY2hhbm5lbCk7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25kYXRhY2hhbm5lbCcsIHtjaGFubmVsOiBpZH0pO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5vbm5lZ290aWF0aW9ubmVlZGVkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25uZWdvdGlhdGlvbm5lZWRlZCcsIGV2ZW50Lm1lc3NhZ2UpO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5vbmljZWNhbmRpZGF0ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICB2YXIgbXNnO1xuICBpZiAoZXZlbnQuY2FuZGlkYXRlICYmIGV2ZW50LmNhbmRpZGF0ZS5jYW5kaWRhdGUpIHtcbiAgICBtc2cgPSB7XG4gICAgICBjYW5kaWRhdGU6IHtcbiAgICAgICAgY2FuZGlkYXRlOiBldmVudC5jYW5kaWRhdGUuY2FuZGlkYXRlLFxuICAgICAgICBzZHBNaWQ6IGV2ZW50LmNhbmRpZGF0ZS5zZHBNaWQsXG4gICAgICAgIHNkcE1MaW5lSW5kZXg6IGV2ZW50LmNhbmRpZGF0ZS5zZHBNTGluZUluZGV4XG4gICAgICB9XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtc2cgPSB7XG4gICAgICBjYW5kaWRhdGU6IG51bGxcbiAgICB9O1xuICB9XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25pY2VjYW5kaWRhdGUnLCBtc2cpO1xufTtcbiAgXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLm9uc2lnbmFsaW5nc3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbnNpZ25hbGluZ3N0YXRlY2hhbmdlJywgZXZlbnQubWVzc2FnZSk7XG59O1xuICBcblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUub25hZGRzdHJlYW0gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgLy9UT0RPOiBwcm92aWRlIElEIG9mIGFsbG9jYXRlZCBzdHJlYW0uXG4gIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25hZGRzdHJlYW0nLCBldmVudC5zdHJlYW0pO1xufTtcbiAgXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLm9ucmVtb3Zlc3RyZWFtID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIC8vVE9ETzogcHJvdmlkZSBJRCBvZiBkZWFsbG9jYXRlZCBzdHJlYW0uXG4gIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25yZW1vdmVzdHJlYW0nLCBldmVudC5zdHJlYW0pO1xufTtcbiAgXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLm9uaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25pY2Vjb25uZWN0aW9uc3RhdGVjaGFuZ2UnLCBldmVudC5tZXNzYWdlKTtcbn07XG5cblxuZXhwb3J0cy5uYW1lID0gXCJjb3JlLnJ0Y3BlZXJjb25uZWN0aW9uXCI7XG5leHBvcnRzLnByb3ZpZGVyID0gUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyO1xuZXhwb3J0cy5zdHlsZSA9IFwicHJvdmlkZVByb21pc2VzXCI7XG5leHBvcnRzLmZsYWdzID0ge3Byb3ZpZGVyOiB0cnVlfTtcbiIsIi8qZ2xvYmFscyBsb2NhbFN0b3JhZ2UgKi9cbi8qanNsaW50IGluZGVudDoyLHNsb3BweTp0cnVlLG5vZGU6dHJ1ZSAqL1xudmFyIHV0aWwgPSByZXF1aXJlKCcuLi8uLi9zcmMvdXRpbCcpO1xuXG4vKipcbiAqIEEgRnJlZURPTSBjb3JlLnN0b3JhZ2UgcHJvdmlkZXIgdGhhdCBkZXBlbmRzIG9uIGxvY2FsU3RvcmFnZVxuICogVGh1cywgdGhpcyBvbmx5IHdvcmtzIGluIHRoZSBjb250ZXh0IG9mIGEgd2VicGFnZSBhbmQgaGFzXG4gKiBzb21lIHNpemUgbGltaXRhdGlvbnMuXG4gKiBOb3RlIHRoYXQgdGhpcyBjYW4gY29uZmxpY3Qgd2l0aCBvdGhlciBzY3JpcHRzIHVzaW5nIGxvY2FsU3RvcmFnZVxuICogYXMga2V5cyBhcmUgcmF3XG4gKiBAQ2xhc3MgU3RvcmFnZV91bnByaXZpbGVnZWRcbiAqIEBjb25zdHJ1Y3RvclxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjYXAgQ2FwYWJpbGl0aWVzIGZvciB0aGUgcHJvdmlkZXJcbiAqL1xudmFyIFN0b3JhZ2VfdW5wcml2aWxlZ2VkID0gZnVuY3Rpb24gKGNhcCwgZGlzcGF0Y2hFdmVudCkge1xuICB1dGlsLmhhbmRsZUV2ZW50cyh0aGlzKTtcbn07XG5cbi8qKlxuICogTGlzdHMga2V5cyBpbiB0aGUgc3RvcmFnZSByZXBvc2l0b3J5XG4gKiBAbWV0aG9kIGtleXNcbiAqL1xuU3RvcmFnZV91bnByaXZpbGVnZWQucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbiAoY29udGludWF0aW9uKSB7XG4gIHZhciByZXN1bHQgPSBbXSxcbiAgICBpO1xuICBmb3IgKGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgcmVzdWx0LnB1c2gobG9jYWxTdG9yYWdlLmtleShpKSk7XG4gIH1cbiAgY29udGludWF0aW9uKHJlc3VsdCk7XG59O1xuXG4vKipcbiAqIEdldCBhIGtleSBmcm9tIHRoZSBzdG9yYWdlIHJlcG9zaXRvcnkuXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IFRoZSBpdGVtIHRvIGdldCBmcm9tIHN0b3JhZ2UuXG4gKiBAbWV0aG9kIGdldFxuICovXG5TdG9yYWdlX3VucHJpdmlsZWdlZC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSwgY29udGludWF0aW9uKSB7XG4gIHRyeSB7XG4gICAgdmFyIHZhbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgY29udGludWF0aW9uKHZhbCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb250aW51YXRpb24obnVsbCk7XG4gIH1cbn07XG5cbi8qKlxuICogU2V0IGEga2V5IGluIHRoZSBzdG9yYWdlIHJlcG9zaXRvcnkuXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IFRoZSBpdGVtIHRvIHNhdmUgaW4gc3RvcmFnZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2F2ZSBpbiBzdG9yYWdlLlxuICogQG1ldGhvZCBzZXRcbiAqL1xuU3RvcmFnZV91bnByaXZpbGVnZWQucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlLCBjb250aW51YXRpb24pIHtcbiAgdmFyIHJldCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICBjb250aW51YXRpb24ocmV0KTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGEga2V5IGZyb20gdGhlIHN0b3JhZ2UgcmVwb3NpdG9yeS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgVGhlIGl0ZW0gdG8gcmVtb3ZlIGZyb20gc3RvcmFnZTtcbiAqIEBtZXRob2QgcmVtb3ZlXG4gKi9cblN0b3JhZ2VfdW5wcml2aWxlZ2VkLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoa2V5LCBjb250aW51YXRpb24pIHtcbiAgdmFyIHJldCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gIGNvbnRpbnVhdGlvbihyZXQpO1xufTtcblxuLyoqXG4gKiBSZXNldCB0aGUgY29udGVudHMgb2YgdGhlIHN0b3JhZ2UgcmVwb3NpdG9yeS5cbiAqIEBtZXRob2QgY2xlYXJcbiAqL1xuU3RvcmFnZV91bnByaXZpbGVnZWQucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKGNvbnRpbnVhdGlvbikge1xuICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgY29udGludWF0aW9uKCk7XG59O1xuXG5leHBvcnRzLnByb3ZpZGVyID0gU3RvcmFnZV91bnByaXZpbGVnZWQ7XG5leHBvcnRzLm5hbWUgPSAnY29yZS5zdG9yYWdlJztcbiIsIi8qanNsaW50IGluZGVudDoyLHdoaXRlOnRydWUsc2xvcHB5OnRydWUsbm9kZTp0cnVlICovXG52YXIgRXZlbnRJbnRlcmZhY2UgPSByZXF1aXJlKCcuLi8uLi9zcmMvcHJveHkvZXZlbnRJbnRlcmZhY2UnKTtcbnZhciBDb25zdW1lciA9IHJlcXVpcmUoJy4uLy4uL3NyYy9jb25zdW1lcicpO1xudmFyIHV0aWwgPSByZXF1aXJlKCcuLi8uLi9zcmMvdXRpbCcpO1xuXG4vKipcbiAqIENvcmUgZnJlZWRvbSBzZXJ2aWNlcyBhdmFpbGFibGUgdG8gYWxsIG1vZHVsZXMuXG4gKiBDcmVhdGVkIGJ5IHRoZSBlbnZpcm9ubWVudCBoZWxwZXIgaW4gcmVzcG9uc2UgdG8gYSAnY29yZScgcmVxdWVzdC5cbiAqIEBDbGFzcyBDb3JlX3VucHJpdmlsZWdlZFxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge01hbmFnZXJ9IG1hbmFnZXIgVGhlIG1hbmFnZXIgdGhpcyBjb3JlIGlzIGNvbm5lY3RlZCB3aXRoLlxuICogQHByaXZhdGVcbiAqL1xudmFyIENvcmVfdW5wcml2aWxlZ2VkID0gZnVuY3Rpb24obWFuYWdlciwgcG9zdE1lc3NhZ2UpIHtcbiAgdGhpcy5tYW5hZ2VyID0gbWFuYWdlci5tb2R1bGU7XG4gIHRoaXMuZGVidWcgPSB0aGlzLm1hbmFnZXIuZGVidWc7XG59O1xuXG5Db3JlX3VucHJpdmlsZWdlZC51bmJvdW5kQ2hhbm5lbHMgPSB7fTtcblxuQ29yZV91bnByaXZpbGVnZWQuY29udGV4dElkID0gdW5kZWZpbmVkO1xuXG4vKipcbiAqIENyZWF0ZSBhIGN1c3RvbSBjaGFubmVsLlxuICogUmV0dXJucyB0aGUgc3RydWN0dXJlIHtjaGFubmVsOiBQcm94eSwgaWRlbnRpZmllcjogT2JqZWN0fSxcbiAqIHdoZXJlIHRoZSBpZGVudGlmaWVyIGNhbiBiZSAncmVkZWVtZWQnIGJ5IGFub3RoZXIgbW9kdWxlIG9yIHByb3ZpZGVyIHVzaW5nXG4gKiBiaW5kIGNoYW5uZWwsIGF0IHdoaWNoIHBvaW50IHRoZSBkZWZlcnJlZCBvYmplY3Qgd2lsbCByZXNvbHZlIHdpdGggYSBjaGFubmVsXG4gKiBiZXR3ZWVuIHRoZSB0d28gZW5kcG9pbnRzLlxuICogQG1ldGhvZCBjcmVhdGVDaGFubmVsXG4gKiBAcGFyYW1zIHtGdW5jdGlvbn0gY29udGludWF0aW9uIE1ldGhvZCB0byBjYWxsIHdpdGggdGhlIGNvc250cnVjdGVkIHN0cnVjdHVyZS5cbiAqL1xuQ29yZV91bnByaXZpbGVnZWQucHJvdG90eXBlLmNyZWF0ZUNoYW5uZWwgPSBmdW5jdGlvbihjb250aW51YXRpb24pIHtcbiAgdmFyIHByb3h5ID0gbmV3IENvbnN1bWVyKEV2ZW50SW50ZXJmYWNlLCB0aGlzLm1hbmFnZXIuZGVidWcpLFxuICAgICAgaWQgPSB1dGlsLmdldElkKCksXG4gICAgICBjaGFuID0gdGhpcy5nZXRDaGFubmVsKHByb3h5KTtcbiAgdGhpcy5tYW5hZ2VyLnNldHVwKHByb3h5KTtcblxuICBpZiAodGhpcy5tYW5hZ2VyLmRlbGVnYXRlICYmIHRoaXMubWFuYWdlci50b0RlbGVnYXRlLmNvcmUpIHtcbiAgICB0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm1hbmFnZXIuZGVsZWdhdGUsIHtcbiAgICAgIHR5cGU6ICdEZWxlZ2F0aW9uJyxcbiAgICAgIHJlcXVlc3Q6ICdoYW5kbGUnLFxuICAgICAgZmxvdzogJ2NvcmUnLFxuICAgICAgbWVzc2FnZToge1xuICAgICAgICB0eXBlOiAncmVnaXN0ZXInLFxuICAgICAgICBpZDogaWRcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBDb3JlX3VucHJpdmlsZWdlZC51bmJvdW5kQ2hhbm5lbHNbaWRdID0ge1xuICAgIGxvY2FsOiB0cnVlLFxuICAgIHByb3h5OiBwcm94eVxuICB9O1xuXG4gIHByb3h5Lm9uY2UoJ3N0YXJ0JywgdGhpcy5nZXRDaGFubmVsLmJpbmQodGhpcywgcHJveHkpKTtcblxuICBjb250aW51YXRpb24oe1xuICAgIGNoYW5uZWw6IGNoYW4sXG4gICAgaWRlbnRpZmllcjogaWRcbiAgfSk7XG59O1xuXG5Db3JlX3VucHJpdmlsZWdlZC5wcm90b3R5cGUuZ2V0Q2hhbm5lbCA9IGZ1bmN0aW9uKHByb3h5KSB7XG4gIHZhciBpZmFjZSA9IHByb3h5LmdldFByb3h5SW50ZXJmYWNlKCksXG4gICAgICBjaGFuID0gaWZhY2UoKTtcbiAgY2hhbi5jbG9zZSA9IGlmYWNlLmNsb3NlO1xuICBjaGFuLm9uQ2xvc2UgPSBpZmFjZS5vbkNsb3NlO1xuICBpZmFjZS5vbkNsb3NlKGNoYW4sIGZ1bmN0aW9uKCkge1xuICAgIHByb3h5LmRvQ2xvc2UoKTtcbiAgfSk7XG4gIHJldHVybiBjaGFuO1xufTtcblxuLyoqXG4gKiBSZWNlaXZlIGEgbWVzc2FnZSBmcm9tIGFub3RoZXIgY29yZSBpbnN0YW5jZS5cbiAqIE5vdGU6IENvcmVfdW5wcml2aWxlZ2VkIGlzIG5vdCByZWdpc3RlcmVkIG9uIHRoZSBodWIuIGl0IGlzIGEgcHJvdmlkZXIsXG4gKiAgICAgYXMgaXQncyBsb2NhdGlvbiBhbmQgbmFtZSB3b3VsZCBpbmRpY2F0ZS4gVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgYnlcbiAqICAgICBwb3J0LWFwcCB0byByZWxheSBtZXNzYWdlcyB1cCB0byBoaWdoZXIgbGV2ZWxzLiAgTW9yZSBnZW5lcmFsbHksIHRoZVxuICogICAgIG1lc3NhZ2VzIGVtaXR0ZWQgYnkgdGhlIGNvcmUgdG8gJ3RoaXMubWFuYWdlci5lbWl0KHRoaXMubWFuYW5hZ2UuZGVsZWdhdGUnXG4gKiAgICAgU2hvdWxkIGJlIG9uTWVzc2FnZWQgdG8gdGhlIGNvbnRyb2xsaW5nIGNvcmUuXG4gKiBAcGFyYW0ge1N0cmluZ30gc291cmNlIFRoZSBzb3VyY2Ugb2YgdGhlIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gbXNnIFRoZSBtZXNzc2FnZSBmcm9tIGFuIGlzb2xhdGVkIGNvcmUgcHJvdmlkZXIuXG4gKi9cbkNvcmVfdW5wcml2aWxlZ2VkLnByb3RvdHlwZS5vbk1lc3NhZ2UgPSBmdW5jdGlvbihzb3VyY2UsIG1zZykge1xuICBpZiAobXNnLnR5cGUgPT09ICdyZWdpc3RlcicpIHtcbiAgICBDb3JlX3VucHJpdmlsZWdlZC51bmJvdW5kQ2hhbm5lbHNbbXNnLmlkXSA9IHtcbiAgICAgIHJlbW90ZTogdHJ1ZSxcbiAgICAgIHJlc29sdmU6IG1zZy5yZXBseSxcbiAgICAgIHNvdXJjZTogc291cmNlXG4gICAgfTtcbiAgfSBlbHNlIGlmIChtc2cudHlwZSA9PT0gJ2NsZWFyJykge1xuICAgIGRlbGV0ZSBDb3JlX3VucHJpdmlsZWdlZC51bmJvdW5kQ2hhbm5lbHNbbXNnLmlkXTtcbiAgfSBlbHNlIGlmIChtc2cudHlwZSA9PT0gJ2JpbmQnKSB7XG4gICAgaWYgKENvcmVfdW5wcml2aWxlZ2VkLnVuYm91bmRDaGFubmVsc1ttc2cuaWRdKSB7XG4gICAgICB0aGlzLmJpbmRDaGFubmVsKG1zZy5pZCwgZnVuY3Rpb24oKSB7fSwgc291cmNlKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQmluZCBhIGN1c3RvbSBjaGFubmVsLlxuICogQ3JlYXRlcyBhIHByb3h5IGludGVyZmFjZSB0byB0aGUgY3VzdG9tIGNoYW5uZWwsIHdoaWNoIHdpbGwgYmUgYm91bmQgdG9cbiAqIHRoZSBwcm94eSBvYnRhaW5lZCB0aHJvdWdoIGFuIGVhcmxpZXIgY3JlYXRlQ2hhbm5lbCBjYWxsLlxuICogY2hhbm5lbCB0byBhIHByb3h5LlxuICogQG1ldGhvZCBiaW5kQ2hhbm5lbFxuICogQHBhcmFtIHtPYmplY3R9IGlkZW50aWZpZXIgQW4gaWRlbnRpZmllciBvYnRhaW5lZCB0aHJvdWdoIGNyZWF0ZUNoYW5uZWwuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb250aW51YXRpb24gQSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2l0aCB0aGUgcHJveHkuXG4gKi9cbkNvcmVfdW5wcml2aWxlZ2VkLnByb3RvdHlwZS5iaW5kQ2hhbm5lbCA9IGZ1bmN0aW9uKGlkZW50aWZpZXIsIGNvbnRpbnVhdGlvbiwgc291cmNlKSB7XG4gIHZhciB0b0JpbmQgPSBDb3JlX3VucHJpdmlsZWdlZC51bmJvdW5kQ2hhbm5lbHNbaWRlbnRpZmllcl0sXG4gICAgICBuZXdTb3VyY2UgPSAhc291cmNlO1xuXG4gIC8vIHdoZW4gYmluZENoYW5uZWwgaXMgY2FsbGVkIGRpcmVjdGx5LCBzb3VyY2Ugd2lsbCBiZSB1bmRlZmluZWQuXG4gIC8vIFdoZW4gaXQgaXMgcHJvcG9nYXRlZCBieSBvbk1lc3NhZ2UsIGEgc291cmNlIGZvciBiaW5kaW5nIHdpbGwgYWxyZWFkeSBleGlzdC5cbiAgaWYgKG5ld1NvdXJjZSkge1xuICAgIHRoaXMuZGVidWcuZGVidWcoJ21ha2luZyBsb2NhbCBwcm94eSBmb3IgY29yZSBiaW5kaW5nJyk7XG4gICAgc291cmNlID0gbmV3IENvbnN1bWVyKEV2ZW50SW50ZXJmYWNlLCB0aGlzLmRlYnVnKTtcbiAgICB0aGlzLm1hbmFnZXIuc2V0dXAoc291cmNlKTtcbiAgfVxuXG4gIC8vIElmIHRoaXMgaXMgYSBrbm93biBpZGVudGlmaWVyIGFuZCBpcyBpbiB0aGUgc2FtZSBjb250ZXh0LCBiaW5kaW5nIGlzIGVhc3kuXG4gIGlmICh0b0JpbmQgJiYgdG9CaW5kLmxvY2FsKSB7XG4gICAgdGhpcy5kZWJ1Zy5kZWJ1ZygnQmluZGluZyBhIGNoYW5uZWwgdG8gcG9ydCBvbiB0aGlzIGh1YjonICsgc291cmNlKTtcbiAgICB0aGlzLm1hbmFnZXIuY3JlYXRlTGluayhzb3VyY2UsIGlkZW50aWZpZXIsIHRvQmluZC5wcm94eSwgJ2RlZmF1bHQnKTtcbiAgICBkZWxldGUgQ29yZV91bnByaXZpbGVnZWQudW5ib3VuZENoYW5uZWxzW2lkZW50aWZpZXJdO1xuICAgIGlmICh0aGlzLm1hbmFnZXIuZGVsZWdhdGUgJiYgdGhpcy5tYW5hZ2VyLnRvRGVsZWdhdGUuY29yZSkge1xuICAgICAgdGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5tYW5hZ2VyLmRlbGVnYXRlLCB7XG4gICAgICAgIHR5cGU6ICdEZWxlZ2F0aW9uJyxcbiAgICAgICAgcmVxdWVzdDogJ2hhbmRsZScsXG4gICAgICAgIGZsb3c6ICdjb3JlJyxcbiAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgIHR5cGU6ICdjbGVhcicsXG4gICAgICAgICAgaWQ6IGlkZW50aWZpZXJcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHRvQmluZCAmJiB0b0JpbmQucmVtb3RlKSB7XG4gICAgdGhpcy5kZWJ1Zy5kZWJ1ZygnQmluZGluZyBhIGNoYW5uZWwgaW50byBhIG1vZHVsZS4nKTtcbiAgICB0aGlzLm1hbmFnZXIuY3JlYXRlTGluayhcbiAgICAgICAgc291cmNlLFxuICAgICAgICBuZXdTb3VyY2UgPyAnZGVmYXVsdCcgOiBpZGVudGlmaWVyLFxuICAgICAgICB0b0JpbmQuc291cmNlLFxuICAgICAgICBpZGVudGlmaWVyKTtcbiAgICB0b0JpbmQucmVzb2x2ZSh7XG4gICAgICB0eXBlOiAnQmluZCBDaGFubmVsJyxcbiAgICAgIHJlcXVlc3Q6J2NvcmUnLFxuICAgICAgZmxvdzogJ2NvcmUnLFxuICAgICAgbWVzc2FnZToge1xuICAgICAgICB0eXBlOiAnYmluZCcsXG4gICAgICAgIGlkOiBpZGVudGlmaWVyXG4gICAgICB9XG4gICAgfSk7XG4gICAgZGVsZXRlIENvcmVfdW5wcml2aWxlZ2VkLnVuYm91bmRDaGFubmVsc1tpZGVudGlmaWVyXTtcbiAgfSBlbHNlIGlmICh0aGlzLm1hbmFnZXIuZGVsZWdhdGUgJiYgdGhpcy5tYW5hZ2VyLnRvRGVsZWdhdGUuY29yZSkge1xuICAgIHRoaXMuZGVidWcuaW5mbygnZGVsZWdhdGluZyBjaGFubmVsIGJpbmQgZm9yIGFuIHVua25vd24gSUQ6JyArIGlkZW50aWZpZXIpO1xuICAgIHRoaXMubWFuYWdlci5lbWl0KHRoaXMubWFuYWdlci5kZWxlZ2F0ZSwge1xuICAgICAgdHlwZTogJ0RlbGVnYXRpb24nLFxuICAgICAgcmVxdWVzdDogJ2hhbmRsZScsXG4gICAgICBmbG93OiAnY29yZScsXG4gICAgICBtZXNzYWdlOiB7XG4gICAgICAgIHR5cGU6ICdiaW5kJyxcbiAgICAgICAgaWQ6IGlkZW50aWZpZXJcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzb3VyY2Uub25jZSgnc3RhcnQnLCBmdW5jdGlvbihwLCBjYikge1xuICAgICAgY2IodGhpcy5nZXRDaGFubmVsKHApKTtcbiAgICB9LmJpbmQodGhpcywgc291cmNlLCBjb250aW51YXRpb24pKTtcbiAgICB0aGlzLm1hbmFnZXIuY3JlYXRlTGluayhzb3VyY2UsXG4gICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgdGhpcy5tYW5hZ2VyLmh1Yi5nZXREZXN0aW5hdGlvbih0aGlzLm1hbmFnZXIuZGVsZWdhdGUpLFxuICAgICAgICBpZGVudGlmaWVyKTtcbiAgICBkZWxldGUgQ29yZV91bnByaXZpbGVnZWQudW5ib3VuZENoYW5uZWxzW2lkZW50aWZpZXJdO1xuICAgIHJldHVybjtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmRlYnVnLndhcm4oJ0Fza2VkIHRvIGJpbmQgdW5rbm93biBjaGFubmVsOiAnICsgaWRlbnRpZmllcik7XG4gICAgdGhpcy5kZWJ1Zy5sb2coQ29yZV91bnByaXZpbGVnZWQudW5ib3VuZENoYW5uZWxzKTtcbiAgICBjb250aW51YXRpb24oKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoc291cmNlLmdldEludGVyZmFjZSkge1xuICAgIGNvbnRpbnVhdGlvbih0aGlzLmdldENoYW5uZWwoc291cmNlKSk7XG4gIH0gZWxzZSB7XG4gICAgY29udGludWF0aW9uKCk7XG4gIH1cbn07XG5cbi8qKlxuICogR2V0IHRoZSBJRCBvZiB0aGUgY3VycmVudCBmcmVlZG9tLmpzIGNvbnRleHQuICBQcm92aWRlcyBhblxuICogYXJyYXkgb2YgbW9kdWxlIFVSTHMsIHRoZSBsaW5lYWdlIG9mIHRoZSBjdXJyZW50IGNvbnRleHQuXG4gKiBXaGVuIG5vdCBpbiBhbiBhcHBsaWNhdGlvbiBjb250ZXh0LCB0aGUgSUQgaXMgdGhlIGxpbmVhZ2VcbiAqIG9mIHRoZSBjdXJyZW50IFZpZXcuXG4gKiBAbWV0aG9kIGdldElkXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gY2FsbGVkIHdpdGggSUQgaW5mb3JtYXRpb24uXG4gKi9cbkNvcmVfdW5wcml2aWxlZ2VkLnByb3RvdHlwZS5nZXRJZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gIC8vIFRPRE86IG1ha2Ugc3VyZSBjb250ZXh0SUQgaXMgcHJvcGVybHkgZnJvemVuLlxuICBjYWxsYmFjayhDb3JlX3VucHJpdmlsZWdlZC5jb250ZXh0SWQpO1xufTtcblxuLyoqXG4gKiBHZXQgYSBsb2dnZXIgZm9yIGxvZ2dpbmcgdG8gdGhlIGZyZWVkb20uanMgbG9nZ2VyLiBQcm92aWRlcyBhXG4gKiBsb2cgb2JqZWN0IHdpdGggYW4gaW50ZXJmYWNlIHNpbWlsYXIgdG8gdGhlIHN0YW5kYXJkIGphdmFzY3JpcHQgY29uc29sZSxcbiAqIHdoaWNoIGxvZ3MgdmlhIGRlYnVnLlxuICogQG1ldGhvZCBnZXRMb2dnZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBsb2dnZXIsIHVzZWQgYXMgaXRzICdzb3VyY2UnXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aXRoIHRoZSBsb2dnZXIuXG4gKi9cbkNvcmVfdW5wcml2aWxlZ2VkLnByb3RvdHlwZS5nZXRMb2dnZXIgPSBmdW5jdGlvbihuYW1lLCBjYWxsYmFjaykge1xuICBjYWxsYmFjayh0aGlzLm1hbmFnZXIuZGVidWcuZ2V0TG9nZ2VyKG5hbWUpKTtcbn07XG5cbi8qKlxuICogU2V0IHRoZSBJRCBvZiB0aGUgY3VycmVudCBmcmVlZG9tLmpzIGNvbnRleHQuXG4gKiBAbWV0aG9kIHNldElkXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtTdHJpbmdbXX0gaWQgVGhlIGxpbmVhZ2Ugb2YgdGhlIGN1cnJlbnQgY29udGV4dC5cbiAqL1xuQ29yZV91bnByaXZpbGVnZWQucHJvdG90eXBlLnNldElkID0gZnVuY3Rpb24oaWQpIHtcbiAgQ29yZV91bnByaXZpbGVnZWQuY29udGV4dElkID0gaWQ7XG59O1xuXG5leHBvcnRzLnByb3ZpZGVyID0gQ29yZV91bnByaXZpbGVnZWQ7XG5leHBvcnRzLm5hbWUgPSBcImNvcmVcIjtcbmV4cG9ydHMuZmxhZ3MgPSB7bW9kdWxlOiB0cnVlfTtcbiIsIi8qZ2xvYmFscyBkb2N1bWVudCAqL1xyXG4vKmpzbGludCBpbmRlbnQ6MixzbG9wcHk6dHJ1ZSxub2RlOnRydWUgKi9cclxudmFyIHV0aWwgPSByZXF1aXJlKCcuLi8uLi9zcmMvdXRpbCcpO1xyXG52YXIgUHJvbWlzZUNvbXBhdCA9IHJlcXVpcmUoJ2VzNi1wcm9taXNlJykuUHJvbWlzZTtcclxuXHJcbi8qKlxyXG4gKiBBIGZyZWVkb20uanMgdmlldyBpcyB0aGUgaW50ZXJmYWNlIGZvciB1c2VyIGludGVyYWN0aW9uLlxyXG4gKiBBIHZpZXcgZXhpc3RzIGFzIGFuIGlGcmFtZSwgd2hpY2ggaXMgc2hvd24gdG8gdGhlIHVzZXIgaW4gc29tZSB3YXkuXHJcbiAqIGNvbW11bmljYXRpb24gYmV0d2VlbiB0aGUgdmlldyBhbmQgdGhlIGZyZWVkb20uanMgbW9kdWxlIGlzIHBlcmZvcm1lZFxyXG4gKiB0aHJvdWdoIHRoZSBIVE1MNSBwb3N0TWVzc2FnZSBtZWNoYW5pc20sIHdoaWNoIHRoaXMgcHJvdmlkZXIgdHJhbnNsYXRlc1xyXG4gKiB0byBmcmVlZG9tLmpzIG1lc3NhZ2UgZXZlbnRzLlxyXG4gKiBAQ2xhc3MgVmlld191bnByaXZpbGVnZWRcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7VmlldyBQcm92aWRlcn0gcHJvdmlkZXJcclxuICogQHBhcmFtIHtwcm92aWRlcjpQcm92aWRlcixtb2R1bGU6TW9kdWxlfSBjYXAgVGhlIGluc3RhbnRpYXRvciBvZiB0aGUgdmlldy5cclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZGlzcGF0Y2hFdmVudCBGdW5jdGlvbiB0byBjYWxsIHRvIGVtaXQgZXZlbnRzLlxyXG4gKi9cclxudmFyIENvcmVfVmlldyA9IGZ1bmN0aW9uIChwcm92aWRlciwgY2FwLCBkaXNwYXRjaEV2ZW50KSB7XHJcbiAgdGhpcy5wcm92aWRlciA9IHByb3ZpZGVyO1xyXG4gIHRoaXMuZGlzcGF0Y2hFdmVudCA9IGRpc3BhdGNoRXZlbnQ7XHJcbiAgc2V0VGltZW91dChjYXAucHJvdmlkZXIub25DbG9zZS5iaW5kKFxyXG4gICAgY2FwLnByb3ZpZGVyLFxyXG4gICAgdGhpcyxcclxuICAgIHRoaXMuY2xvc2UuYmluZCh0aGlzLCBmdW5jdGlvbiAoKSB7fSlcclxuICApLCAwKTtcclxuICB0aGlzLm1vZHVsZSA9IGNhcC5tb2R1bGU7XHJcbiAgdXRpbC5oYW5kbGVFdmVudHModGhpcyk7XHJcbn07XHJcblxyXG4vKipcclxuICogVGhlIGlzIHRoZSBkZWZhdWx0IHByb3ZpZGVyIGZvciBjb3JlLnZpZXcsIHVubGVzcyBvdmVycmlkZGVuIGJ5IGNvbnRleHQgb3JcclxuICogYSB1c2VyIHN1cHBsaWVkIHByb3ZpZGVyLiBUaGUgaW50ZXJmYWNlIGlzIGRvY3VtZW50ZWQgYXQ6XHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mcmVlZG9tanMvZnJlZWRvbS93aWtpL2ZyZWVkb20uanMtVmlld3NcclxuICpcclxuICogR2VuZXJhbGx5LCBhIHZpZXcgcHJvdmlkZXIgY29uc2lzdHMgb2YgMyBtZXRob2RzOlxyXG4gKiBvbk9wZW4gaXMgY2FsbGVkIHdoZW4gYSB2aWV3IHNob3VsZCBiZSBzaG93bi5cclxuICogICAgIGlkIC0gaXMgYSB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhpcyB2aWV3LCB1c2VkIG9uIHN1YnNlcXVlbnQgY2FsbHNcclxuICogICAgICAgICAgZm9yIGNvbW11bmljYXRpb24gYW5kIHRvIGV2ZW50dWFsbHkgY2xvc2UgdGhlIHZpZXcuXHJcbiAqICAgICBuYW1lIC0gaXMgdGhlIG5hbWUgb2YgdGhlIHZpZXcgKGFzIGRlZmluZWQgaW4gdGhlIG1hbmlmZXN0KSxcclxuICogICAgICAgICAgICBpbiBvcmRlciB0byBwbGFjZSBpdCBhcHByb3ByaWF0ZWx5LlxyXG4gKiAgICAgcGFnZSAtIGlzIHRoZSByZXNvbHZlZCBVUkwgdG8gb3Blbi5cclxuICogICAgIHJlc291cmNlcyAtIGlzIGFuIGFycmF5IG9mIHJlc29sdmVkIFVSTHMgd2hpY2ggYXJlIHJlZmVyZW5jZWQuXHJcbiAqICAgICBwb3N0TWVzc2FnZSAtIGlzIGEgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIG1lc3NhZ2VzIGFyZSBlbWl0dGVkXHJcbiAqICAgICAgICAgICAgICAgICAgIGJ5IHRoZSB3aW5kb3cgaW4gd2hpY2ggdGhlIHZpZXcgaXMgb3BlbmVkLlxyXG4gKiBvbk9wZW4gcmV0dXJucyBhIHByb21pc2UgdGhhdCBjb21wbGV0ZXMgd2hlbiB0aGUgdmlldyBpcyBsb2FkZWQuXHJcbiAqIG9uTWVzc2FnZSBpcyBjYWxsZWQgdG8gc2VuZCBhIG1lc3NhZ2UgdG8gYW4gb3BlbiB2aWV3LlxyXG4gKiAgICAgaWQgLSBpcyB0aGUgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBvcGVuIHZpZXcuXHJcbiAqICAgICBtZXNzYWdlIC0gaXMgdGhlIG1lc3NhZ2UgdG8gcG9zdE1lc3NhZ2UgdG8gdGhlIHZpZXcncyB3aW5kb3cuXHJcbiAqIG9uQ2xvc2UgaXMgY2FsbGVkIHRvIGNsb3NlIGEgdmlldy5cclxuICogICAgIGlkIC0gaXMgdGhlIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgdmlldy5cclxuICovXHJcbkNvcmVfVmlldy5wcm92aWRlciA9IHtcclxuICBsaXN0ZW5lcjogdW5kZWZpbmVkLFxyXG4gIGFjdGl2ZToge30sXHJcbiAgb25PcGVuOiBmdW5jdGlvbiAoaWQsIG5hbWUsIHBhZ2UsIHJlc291cmNlcywgcG9zdE1lc3NhZ2UpIHtcclxuICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5ib2R5LFxyXG4gICAgICByb290LFxyXG4gICAgICBmcmFtZTtcclxuICAgIFxyXG4gICAgaWYgKCF0aGlzLmxpc3RlbmVyKSB7XHJcbiAgICAgIHRoaXMubGlzdGVuZXIgPSBmdW5jdGlvbiAobXNnKSB7XHJcbiAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgZm9yIChpIGluIHRoaXMuYWN0aXZlKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5hY3RpdmUuaGFzT3duUHJvcGVydHkoaSkgJiZcclxuICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVtpXS5zb3VyY2UgPT09IG1zZy5zb3VyY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVbaV0ucG9zdE1lc3NhZ2UobXNnLmRhdGEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfS5iaW5kKHRoaXMpO1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMubGlzdGVuZXIsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFZpZXdzIG9wZW4gYnkgZGVmYXVsdCBpbiBhbiBlbGVtZW50IHdpdGggdGhlaXIgSUQsIG9yIGZpbGwgdGhlIHBhZ2VcclxuICAgIC8vIG90aGVyd2lzZS5cclxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuYW1lKSkge1xyXG4gICAgICBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHJvb3Quc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgIHJvb3Quc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XHJcbiAgICByb290LnN0eWxlLmRpc3BsYXkgPSBcInJlbGF0aXZlXCI7XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJvb3QpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2VDb21wYXQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICBmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XHJcbiAgICAgIGZyYW1lLnNldEF0dHJpYnV0ZShcInNhbmRib3hcIiwgXCJhbGxvdy1zY3JpcHRzIGFsbG93LWZvcm1zXCIpO1xyXG4gICAgICBmcmFtZS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICBmcmFtZS5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcclxuICAgICAgZnJhbWUuc3R5bGUuYm9yZGVyID0gXCIwXCI7XHJcbiAgICAgIGZyYW1lLnN0eWxlLmJhY2tncm91bmQgPSBcInRyYW5zcGFyZW50XCI7XHJcbiAgICAgIGZyYW1lLnNyYyA9IHBhZ2U7XHJcbiAgICAgIGZyYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCByZXNvbHZlLCB0cnVlKTtcclxuICAgICAgZnJhbWUuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCByZWplY3QsIHRydWUpO1xyXG5cclxuICAgICAgcm9vdC5hcHBlbmRDaGlsZChmcmFtZSk7XHJcblxyXG4gICAgICB0aGlzLmFjdGl2ZVtpZF0gPSB7XHJcbiAgICAgICAgcG9zdE1lc3NhZ2U6IHBvc3RNZXNzYWdlLFxyXG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxyXG4gICAgICAgIHJvb3Q6IHJvb3QsXHJcbiAgICAgICAgc291cmNlOiBmcmFtZS5jb250ZW50V2luZG93XHJcbiAgICAgIH07XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG4gIH0sXHJcbiAgb25NZXNzYWdlOiBmdW5jdGlvbiAoaWQsIG1lc3NhZ2UpIHtcclxuICAgIHRoaXMuYWN0aXZlW2lkXS5zb3VyY2UucG9zdE1lc3NhZ2UobWVzc2FnZSwgJyonKTtcclxuICB9LFxyXG4gIG9uQ2xvc2U6IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgdGhpcy5hY3RpdmVbaWRdLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLmFjdGl2ZVtpZF0ucm9vdCk7XHJcbiAgICBkZWxldGUgdGhpcy5hY3RpdmVbaWRdO1xyXG4gICAgXHJcbiAgICBpZiAoT2JqZWN0LmtleXModGhpcy5hY3RpdmUpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMubGlzdGVuZXIsIHRydWUpO1xyXG4gICAgICB0aGlzLmxpc3RlbmVyID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBBc2sgZm9yIHRoaXMgdmlldyB0byBvcGVuIGEgc3BlY2lmaWMgbG9jYXRpb24sIGVpdGhlciBhIEZpbGUgcmVsYXRpdmUgdG9cclxuICogdGhlIGxvYWRlciwgb3IgYW4gZXhwbGljaXQgY29kZSBsb2NhdGlvbi5cclxuICogQG1ldGhvZCBzaG93XHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBpZGVudGlmaWVyIG9mIHRoZSB2aWV3LlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb250aW51YXRpb24gRnVuY3Rpb24gdG8gY2FsbCB3aGVuIHZpZXcgaXMgbG9hZGVkLlxyXG4gKi9cclxuQ29yZV9WaWV3LnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKG5hbWUsIGNvbnRpbnVhdGlvbikge1xyXG4gIGlmICh0aGlzLmlkKSB7XHJcbiAgICByZXR1cm4gY29udGludWF0aW9uKHVuZGVmaW5lZCwge1xyXG4gICAgICBlcnJjb2RlOiAnQUxSRUFEWV9PUEVOJyxcclxuICAgICAgbWVzc2FnZTogJ0Nhbm5vdCBzaG93IG11bHRpcGxlIHZpZXdzIHRocm91Z2ggb25lIGluc3RhbmNlLidcclxuICAgIH0pO1xyXG4gIH1cclxuICB0aGlzLmlkID0gdXRpbC5nZXRJZCgpO1xyXG5cclxuICB2YXIgY29uZmlnID0gdGhpcy5tb2R1bGUubWFuaWZlc3Qudmlld3MsXHJcbiAgICB0b1Jlc29sdmUgPSBbXTtcclxuICBpZiAoIWNvbmZpZyB8fCAhY29uZmlnW25hbWVdKSB7XHJcbiAgICByZXR1cm4gY29udGludWF0aW9uKHVuZGVmaW5lZCwge1xyXG4gICAgICBlcnJjb2RlOiAnTk9OX0VYSVNUQU5UJyxcclxuICAgICAgbWVzc2FnZTogJ1ZpZXcgbm90IGZvdW5kOiAnICsgbmFtZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpZiAoY29uZmlnW25hbWVdLm1haW4gJiYgY29uZmlnW25hbWVdLmZpbGVzKSB7XHJcbiAgICB0b1Jlc29sdmUgPSBjb25maWdbbmFtZV0uZmlsZXMuY29uY2F0KGNvbmZpZ1tuYW1lXS5tYWluKTtcclxuICAgIFByb21pc2VDb21wYXQuYWxsKHRvUmVzb2x2ZS5tYXAoZnVuY3Rpb24gKGZuYW1lKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm1vZHVsZS5yZXNvdXJjZS5nZXQodGhpcy5tb2R1bGUubWFuaWZlc3RJZCwgZm5hbWUpO1xyXG4gICAgfS5iaW5kKHRoaXMpKSkudGhlbihmdW5jdGlvbiAoZmlsZXMpIHtcclxuICAgICAgdGhpcy5wcm92aWRlci5vbk9wZW4odGhpcy5pZCxcclxuICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICBmaWxlc1tmaWxlcy5sZW5ndGggLSAxXSxcclxuICAgICAgICAgIGZpbGVzLFxyXG4gICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50LmJpbmQodGhpcywgJ21lc3NhZ2UnKSkudGhlbihcclxuICAgICAgICBmdW5jdGlvbiAoYykge1xyXG4gICAgICAgICAgLy8gTWFrZSBzdXJlIGNvbnRpbnVhdGlvbiBpcyBjYWxsZWQgd2l0aG91dCBhbiBhcmd1bWVudC5cclxuICAgICAgICAgIGMoKTtcclxuICAgICAgICB9LmJpbmQoe30sIGNvbnRpbnVhdGlvbiksXHJcbiAgICAgICAgY29udGludWF0aW9uLmJpbmQoe30sIHVuZGVmaW5lZClcclxuICAgICAgKTtcclxuICAgIH0uYmluZCh0aGlzKSwgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICB0aGlzLm1vZHVsZS5kZWJ1Zy5lcnJvcignVW5hYmxlIHRvIG9wZW4gdmlldyAnICsgbmFtZSArICc6ICcsIGVycik7XHJcbiAgICAgIGNvbnRpbnVhdGlvbih1bmRlZmluZWQsIHtcclxuICAgICAgICBlcnJjb2RlOiAnVklFV19NQUxGT1JNRUQnLFxyXG4gICAgICAgIG1lc3NhZ2U6ICdNYWxmb3JtZWQgVmlldyBEZWNsYXJhdGlvbjogJyArIGVyclxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb250aW51YXRpb24odW5kZWZpbmVkLCB7XHJcbiAgICAgIGVycmNvZGU6ICdOT05fRVhJU1RBTlQnLFxyXG4gICAgICBtZXNzYWdlOiAnVmlldyBub3QgZm91bmQ6ICcgKyBuYW1lXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogaXNTZWN1cmUgZGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBtb2R1bGUgY2FuIGhhdmUgY29uZmlkZW5jZSB0aGF0IGl0c1xyXG4gKiBjb21tdW5pY2F0aW9uIHdpdGggaXRzIHZpZXcgY2Fubm90IGJlIGludGVyY2VwdGVkIGJ5IGFuIHVudHJ1c3RlZCAzcmQgcGFydHkuXHJcbiAqIEluIHByYWN0aWNlLCB0aGlzIG1lYW5zIHRoYXQgaXRzIG9rYXkgZm9yIHRoZSBydW50aW1lIHRvIGhhdmUgYWNjZXNzIHRvIHRoZVxyXG4gKiBtZXNzYWdlcywgYW5kIGlmIHRoZSBjb250ZXh0IGlzIGEgd2ViIHNlcnZlciBvciBhIGJyb3dzZXIgZXh0ZW5zaW9uIHRoZW5cclxuICogdGhhdCBjb250ZXh0IGlzIHRydXN0ZWQuIEhvd2V2ZXIsIGlmIGEgcHJvdmlkZXIgd2FudHMgdG8gYWxsb3cgdGhlaXIgZS5nLlxyXG4gKiBzb2NpYWwgcHJvdmlkZXIgdG8gYmUgdXNlZCBvbiBhcmJpdHJhcnkgd2Vic2l0ZXMsIHRoaXMgbWVjaGFuaXNtIG1lYW5zIHRoYXRcclxuICogaWYgdGhlIHdlYnNpdGUgdXNlcyBhIHRydXN0ZWQgdmVyc2lvbiBvZiB0aGUgZnJlZWRvbS5qcyBsaWJyYXJ5LCB0aGVuIHRoZVxyXG4gKiBtb2R1bGUgY2FuIGJlIHVzZWQuXHJcbiAqIEBtZXRob2QgaXNTZWN1cmVcclxuICogQHJldHVybnMge0Jvb2xlYW59IGlmIHRoZSBjaGFubmVsIHRvIHRoZSB2aWV3IGlzIHNlY3VyZS5cclxuICovXHJcbkNvcmVfVmlldy5wcm90b3R5cGUuaXNTZWN1cmUgPSBmdW5jdGlvbiAoY29udGludWF0aW9uKSB7XHJcbiAgY29udGludWF0aW9uKGZhbHNlKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBTZW5kIGEgbWVzc2FnZSB0byBhbiBvcGVuIHZpZXcuXHJcbiAqIEBtZXRob2QgcG9zdE1lc3NhZ2VcclxuICovXHJcbkNvcmVfVmlldy5wcm90b3R5cGUucG9zdE1lc3NhZ2UgPSBmdW5jdGlvbiAobXNnLCBjb250aW51YXRpb24pIHtcclxuICBpZiAoIXRoaXMuaWQpIHtcclxuICAgIHJldHVybiBjb250aW51YXRpb24odW5kZWZpbmVkLCB7XHJcbiAgICAgIGVycmNvZGU6ICdOT1RfT1BFTicsXHJcbiAgICAgIG1lc3NhZ2U6ICdDYW5ub3QgcG9zdCBtZXNzYWdlIHRvIHVuaW5pdGlhbGl6ZWQgdmlldy4nXHJcbiAgICB9KTtcclxuICB9XHJcbiAgdGhpcy5wcm92aWRlci5vbk1lc3NhZ2UodGhpcy5pZCwgbXNnKTtcclxuICBjb250aW51YXRpb24oKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDbG9zZSBhbiBhY3RpdmUgdmlldy5cclxuICogQG1ldGhvZCBjbG9zZVxyXG4gKi9cclxuQ29yZV9WaWV3LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uIChjb250aW51YXRpb24pIHtcclxuICBpZiAoIXRoaXMuaWQpIHtcclxuICAgIHJldHVybiBjb250aW51YXRpb24odW5kZWZpbmVkLCB7XHJcbiAgICAgIGVycmNvZGU6ICdOT1RfT1BFTicsXHJcbiAgICAgIG1lc3NhZ2U6ICdDYW5ub3QgY2xvc2UgdW5pbml0aWFsaXplZCB2aWV3LidcclxuICAgIH0pO1xyXG4gIH1cclxuICB0aGlzLnByb3ZpZGVyLm9uQ2xvc2UodGhpcy5pZCk7XHJcbiAgZGVsZXRlIHRoaXMuaWQ7XHJcblxyXG4gIGNvbnRpbnVhdGlvbigpO1xyXG59O1xyXG5cclxuXHJcbi8qKlxyXG4gKiBBbGxvdyBhIHdlYiBwYWdlIHRvIHJlZGVmaW5lIGJlaGF2aW9yIGZvciBob3cgdmlld3MgYXJlIHNob3duLlxyXG4gKiBAbWV0aG9kIHJlZ2lzdGVyXHJcbiAqIEBzdGF0aWNcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gUGFnZVByb3ZpZGVyIFRoZSBjdXN0b20gdmlldyBiZWhhdmlvci5cclxuICovXHJcbkNvcmVfVmlldy5yZWdpc3RlciA9IGZ1bmN0aW9uIChQYWdlUHJvdmlkZXIpIHtcclxuICB2YXIgcHJvdmlkZXIgPSBQYWdlUHJvdmlkZXIgPyBuZXcgUGFnZVByb3ZpZGVyKCkgOiBDb3JlX1ZpZXcucHJvdmlkZXI7XHJcbiAgZXhwb3J0cy5wcm92aWRlciA9IENvcmVfVmlldy5iaW5kKHRoaXMsIHByb3ZpZGVyKTtcclxufTtcclxuXHJcbmV4cG9ydHMucHJvdmlkZXIgPSBDb3JlX1ZpZXcuYmluZCh0aGlzLCBDb3JlX1ZpZXcucHJvdmlkZXIpO1xyXG5leHBvcnRzLm5hbWUgPSAnY29yZS52aWV3JztcclxuZXhwb3J0cy5yZWdpc3RlciA9IENvcmVfVmlldy5yZWdpc3RlcjtcclxuZXhwb3J0cy5mbGFncyA9IHtwcm92aWRlcjogdHJ1ZSwgbW9kdWxlOiB0cnVlfTtcclxuIiwiLypnbG9iYWxzIFdlYlNvY2tldCwgQXJyYXlCdWZmZXIsIEJsb2IsIFVpbnQ4QXJyYXksIGNvbnNvbGUgKi9cbi8qanNsaW50IHNsb3BweTp0cnVlLCBub2RlOnRydWUgKi9cblxudmFyIFdTSGFuZGxlID0gbnVsbDtcbnZhciBub2RlU3R5bGUgPSBmYWxzZTtcblxuLyoqXG4gKiBBIFdlYlNvY2tldCBjb3JlIHByb3ZpZGVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNhcCBDYXBhYmlsaXRpZXMgZm9yIHRoZSBwcm92aWRlclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZGlzcGF0Y2hFdmVudCBGdW5jdGlvbiB0byBkaXNwYXRjaCBldmVudHMuXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBSZW1vdGUgVVJMIHRvIGNvbm5lY3Qgd2l0aC5cbiAqIEBwYXJhbSB7U3RyaW5nW119IHByb3RvY29scyBTdWJQcm90b2NvbHMgdG8gb3Blbi5cbiAqIEBwYXJhbSB7V2ViU29ja2V0P30gc29ja2V0IEFuIGFsdGVybmF0aXZlIHNvY2tldCBjbGFzcyB0byB1c2UuXG4gKi9cbnZhciBXUyA9IGZ1bmN0aW9uIChjYXAsIGRpc3BhdGNoRXZlbnQsIHVybCwgcHJvdG9jb2xzLCBzb2NrZXQpIHtcbiAgdmFyIFdTSW1wbGVtZW50YXRpb24gPSBudWxsLFxuICAgIGVycm9yO1xuICB0aGlzLmlzTm9kZSA9IG5vZGVTdHlsZTtcbiAgaWYgKHR5cGVvZiBzb2NrZXQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgV1NJbXBsZW1lbnRhdGlvbiA9IHNvY2tldDtcbiAgfSBlbHNlIGlmIChXU0hhbmRsZSAhPT0gbnVsbCkge1xuICAgIFdTSW1wbGVtZW50YXRpb24gPSBXU0hhbmRsZTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgV2ViU29ja2V0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIFdTSW1wbGVtZW50YXRpb24gPSBXZWJTb2NrZXQ7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcignUGxhdGZvcm0gZG9lcyBub3Qgc3VwcG9ydCBXZWJTb2NrZXQnKTtcbiAgfVxuXG4gIHRoaXMuZGlzcGF0Y2hFdmVudCA9IGRpc3BhdGNoRXZlbnQ7XG4gIHRyeSB7XG4gICAgaWYgKHByb3RvY29scykge1xuICAgICAgdGhpcy53ZWJzb2NrZXQgPSBuZXcgV1NJbXBsZW1lbnRhdGlvbih1cmwsIHByb3RvY29scyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMud2Vic29ja2V0ID0gbmV3IFdTSW1wbGVtZW50YXRpb24odXJsKTtcbiAgICB9XG4gICAgdGhpcy53ZWJzb2NrZXQuYmluYXJ5VHlwZSA9ICdhcnJheWJ1ZmZlcic7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBlcnJvciA9IHt9O1xuICAgIGlmIChlIGluc3RhbmNlb2YgU3ludGF4RXJyb3IpIHtcbiAgICAgIGVycm9yLmVycmNvZGUgPSAnU1lOVEFYJztcbiAgICB9IGVsc2Uge1xuICAgICAgZXJyb3IuZXJyY29kZSA9IGUubmFtZTtcbiAgICB9XG4gICAgZXJyb3IubWVzc2FnZSA9IGUubWVzc2FnZTtcbiAgICBkaXNwYXRjaEV2ZW50KCdvbkVycm9yJywgZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh0aGlzLmlzTm9kZSkge1xuICAgIHRoaXMud2Vic29ja2V0Lm9uKCdtZXNzYWdlJywgdGhpcy5vbk1lc3NhZ2UuYmluZCh0aGlzKSk7XG4gICAgdGhpcy53ZWJzb2NrZXQub24oJ29wZW4nLCB0aGlzLm9uT3Blbi5iaW5kKHRoaXMpKTtcbiAgICAvLyBub2RlLmpzIHdlYnNvY2tldCBpbXBsZW1lbnRhdGlvbiBub3QgY29tcGxpYW50XG4gICAgdGhpcy53ZWJzb2NrZXQub24oJ2Nsb3NlJywgdGhpcy5vbkNsb3NlLmJpbmQodGhpcywge1xuICAgICAgY29kZTogMCxcbiAgICAgIHJlYXNvbjogJ1VOS05PV04nLFxuICAgICAgd2FzQ2xlYW46IHRydWVcbiAgICB9KSk7XG4gICAgdGhpcy53ZWJzb2NrZXQub24oJ2Vycm9yJywgdGhpcy5vbkVycm9yLmJpbmQodGhpcykpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMud2Vic29ja2V0Lm9ub3BlbiA9IHRoaXMub25PcGVuLmJpbmQodGhpcyk7XG4gICAgdGhpcy53ZWJzb2NrZXQub25jbG9zZSA9IHRoaXMub25DbG9zZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMud2Vic29ja2V0Lm9ubWVzc2FnZSA9IHRoaXMub25NZXNzYWdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy53ZWJzb2NrZXQub25lcnJvciA9IHRoaXMub25FcnJvci5iaW5kKHRoaXMpO1xuICB9XG59O1xuXG5XUy5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChkYXRhLCBjb250aW51YXRpb24pIHtcbiAgdmFyIHRvU2VuZCA9IGRhdGEudGV4dCB8fCBkYXRhLmJpbmFyeSB8fCBkYXRhLmJ1ZmZlcixcbiAgICBlcnJjb2RlLFxuICAgIG1lc3NhZ2U7XG5cbiAgaWYgKHRvU2VuZCkge1xuICAgIHRyeSB7XG4gICAgICAvLyBGb3Igbm9kZS5qcywgd2UgaGF2ZSB0byBkbyB3ZWlyZCBidWZmZXIgc3R1ZmZcbiAgICAgIGlmICh0aGlzLmlzTm9kZSAmJiB0b1NlbmQgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgICAgICB0aGlzLndlYnNvY2tldC5zZW5kKFxuICAgICAgICAgIG5ldyBVaW50OEFycmF5KHRvU2VuZCksXG4gICAgICAgICAgeyBiaW5hcnk6IHRydWUgfSxcbiAgICAgICAgICB0aGlzLm9uRXJyb3IuYmluZCh0aGlzKVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy53ZWJzb2NrZXQuc2VuZCh0b1NlbmQpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgU3ludGF4RXJyb3IpIHtcbiAgICAgICAgZXJyY29kZSA9IFwiU1lOVEFYXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcnJjb2RlID0gXCJJTlZBTElEX1NUQVRFXCI7XG4gICAgICB9XG4gICAgICBtZXNzYWdlID0gZS5tZXNzYWdlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBlcnJjb2RlID0gXCJCQURfU0VORFwiO1xuICAgIG1lc3NhZ2UgPSBcIk5vIHRleHQsIGJpbmFyeSwgb3IgYnVmZmVyIGRhdGEgZm91bmQuXCI7XG4gIH1cblxuICBpZiAoZXJyY29kZSkge1xuICAgIGNvbnRpbnVhdGlvbih1bmRlZmluZWQsIHtcbiAgICAgIGVycmNvZGU6IGVycmNvZGUsXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY29udGludWF0aW9uKCk7XG4gIH1cbn07XG5cbldTLnByb3RvdHlwZS5nZXRSZWFkeVN0YXRlID0gZnVuY3Rpb24gKGNvbnRpbnVhdGlvbikge1xuICBjb250aW51YXRpb24odGhpcy53ZWJzb2NrZXQucmVhZHlTdGF0ZSk7XG59O1xuXG5XUy5wcm90b3R5cGUuZ2V0QnVmZmVyZWRBbW91bnQgPSBmdW5jdGlvbiAoY29udGludWF0aW9uKSB7XG4gIGNvbnRpbnVhdGlvbih0aGlzLndlYnNvY2tldC5idWZmZXJlZEFtb3VudCk7XG59O1xuXG5XUy5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoY29kZSwgcmVhc29uLCBjb250aW51YXRpb24pIHtcbiAgdHJ5IHtcbiAgICBpZiAoY29kZSAmJiByZWFzb24pIHtcbiAgICAgIHRoaXMud2Vic29ja2V0LmNsb3NlKGNvZGUsIHJlYXNvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMud2Vic29ja2V0LmNsb3NlKCk7XG4gICAgfVxuICAgIGNvbnRpbnVhdGlvbigpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIGVycm9yQ29kZTtcbiAgICBpZiAoZSBpbnN0YW5jZW9mIFN5bnRheEVycm9yKSB7XG4gICAgICBlcnJvckNvZGUgPSBcIlNZTlRBWFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBlcnJvckNvZGUgPSBcIklOVkFMSURfQUNDRVNTXCI7XG4gICAgfVxuICAgIGNvbnRpbnVhdGlvbih1bmRlZmluZWQsIHtcbiAgICAgIGVycmNvZGU6IGVycm9yQ29kZSxcbiAgICAgIG1lc3NhZ2U6IGUubWVzc2FnZVxuICAgIH0pO1xuICB9XG59O1xuXG5XUy5wcm90b3R5cGUub25PcGVuID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25PcGVuJyk7XG59O1xuXG5XUy5wcm90b3R5cGUub25NZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50LCBmbGFncykge1xuICB2YXIgZGF0YSA9IHt9O1xuICBpZiAodGhpcy5pc05vZGUgJiYgZmxhZ3MgJiYgZmxhZ3MuYmluYXJ5KSB7XG4gICAgZGF0YS5idWZmZXIgPSBuZXcgVWludDhBcnJheShldmVudCkuYnVmZmVyO1xuICB9IGVsc2UgaWYgKHRoaXMuaXNOb2RlKSB7XG4gICAgZGF0YS50ZXh0ID0gZXZlbnQ7XG4gIH0gZWxzZSBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiBldmVudC5kYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICBkYXRhLmJ1ZmZlciA9IGV2ZW50LmRhdGE7XG4gIH0gZWxzZSBpZiAodHlwZW9mIEJsb2IgIT09ICd1bmRlZmluZWQnICYmIGV2ZW50LmRhdGEgaW5zdGFuY2VvZiBCbG9iKSB7XG4gICAgZGF0YS5iaW5hcnkgPSBldmVudC5kYXRhO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBldmVudC5kYXRhID09PSAnc3RyaW5nJykge1xuICAgIGRhdGEudGV4dCA9IGV2ZW50LmRhdGE7XG4gIH1cbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbk1lc3NhZ2UnLCBkYXRhKTtcbn07XG5cbldTLnByb3RvdHlwZS5vbkVycm9yID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIC8vIE5vdGhpbmcgdG8gcGFzcyBvblxuICAvLyBTZWU6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE4ODA0Mjk4LzMwMDUzOVxuICB0aGlzLmRpc3BhdGNoRXZlbnQoJ29uRXJyb3InKTtcbn07XG5cbldTLnByb3RvdHlwZS5vbkNsb3NlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25DbG9zZScsXG4gICAgICAgICAgICAgICAgICAgICB7Y29kZTogZXZlbnQuY29kZSxcbiAgICAgICAgICAgICAgICAgICAgICByZWFzb246IGV2ZW50LnJlYXNvbixcbiAgICAgICAgICAgICAgICAgICAgICB3YXNDbGVhbjogZXZlbnQud2FzQ2xlYW59KTtcbn07XG5cbmV4cG9ydHMucHJvdmlkZXIgPSBXUztcbmV4cG9ydHMubmFtZSA9ICdjb3JlLndlYnNvY2tldCc7XG5leHBvcnRzLnNldFNvY2tldCA9IGZ1bmN0aW9uIChpbXBsLCBpc05vZGUpIHtcbiAgV1NIYW5kbGUgPSBpbXBsO1xuICBub2RlU3R5bGUgPSBpc05vZGU7XG59O1xuIiwiLypqc2xpbnQgaW5kZW50OjIsYnJvd3Nlcjp0cnVlLCBub2RlOnRydWUgKi9cbnZhciBQcm9taXNlQ29tcGF0ID0gcmVxdWlyZSgnZXM2LXByb21pc2UnKS5Qcm9taXNlO1xuXG52YXIgb0F1dGhSZWRpcmVjdElkID0gJ2ZyZWVkb20ub2F1dGgucmVkaXJlY3QuaGFuZGxlcic7XG5cbnZhciBsb2FkZWRPblN0YXJ0dXAgPSBmYWxzZTtcbi8qKlxuICogSWYgdGhlcmUgaXMgcmVkaXJlY3Rpb24gYmFjayB0byB0aGUgcGFnZSwgYW5kIG9BdXRoUmVkaXJlY3RJRCBpcyBzZXQsXG4gKiB0aGVuIHJlcG9ydCB0aGUgYXV0aCBhbmQgY2xvc2UgdGhlIHdpbmRvdy5cbiAqL1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdyAmJiB3aW5kb3cubG9jYXRpb24gJiZcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBsb2FkZWRPblN0YXJ0dXAgPSB0cnVlO1xuICB9LCB0cnVlKTtcblxuICBpZiAod2luZG93LmxvY2FsU3RvcmFnZSAmJlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZihvQXV0aFJlZGlyZWN0SWQpID4gMCkge1xuICAgIC8vIFRoaXMgd2lsbCB0cmlnZ2VyIGEgJ3N0b3JhZ2UnIGV2ZW50IG9uIHRoZSB3aW5kb3cuIFNlZSBzdG9yYWdlTGlzdGVuZXJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0ob0F1dGhSZWRpcmVjdElkLCBuZXcgRGF0ZSgpKTtcbiAgICB3aW5kb3cuY2xvc2UoKTtcbiAgfVxufVxuXG52YXIgTG9jYWxQYWdlQXV0aCA9IGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgdGhpcy5saXN0ZW5lcnMgPSB7fTtcbn07XG5cbi8qKlxuICogSW5kaWNhdGUgdGhlIGludGVudGlvbiB0byBpbml0aWF0ZSBhbiBvQXV0aCBmbG93LCBhbGxvd2luZyBhbiBhcHByb3ByaWF0ZVxuICogb0F1dGggcHJvdmlkZXIgdG8gYmVnaW4gbW9uaXRvcmluZyBmb3IgcmVkaXJlY3Rpb24uXG4gKlxuICogQG1ldGhvZCBpbml0aWF0ZU9BdXRoXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSByZWRpcmVjdFVSSXMgLSBvQXV0aCByZWRpcmVjdGlvbiBVUklzIHJlZ2lzdGVyZWQgd2l0aCB0aGVcbiAqICAgICBwcm92aWRlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbnRpbnVhdGlvbiAtIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBjb21wbGV0ZVxuICogICAgRXhwZWN0ZWQgdG8gc2VlIGEgdmFsdWUgb2Ygc2NoZW1hOiB7e3JlZGlyZWN0OlN0cmluZywgc3RhdGU6U3RyaW5nfX1cbiAqICAgIHdoZXJlICdyZWRpcmVjdCcgaXMgdGhlIGNob3NlbiByZWRpcmVjdCBVUklcbiAqICAgIGFuZCAnc3RhdGUnIGlzIHRoZSBzdGF0ZSB0byBwYXNzIHRvIHRoZSBVUkkgb24gY29tcGxldGlvbiBvZiBvQXV0aFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBjYW4gaGFuZGxlLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuTG9jYWxQYWdlQXV0aC5wcm90b3R5cGUuaW5pdGlhdGVPQXV0aCA9IGZ1bmN0aW9uKHJlZGlyZWN0VVJJcywgY29udGludWF0aW9uKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93ICYmIGxvYWRlZE9uU3RhcnR1cCkge1xuICAgIHZhciBoZXJlID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgd2luZG93LmxvY2F0aW9uLmhvc3QgK1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgaWYgKHJlZGlyZWN0VVJJcy5pbmRleE9mKGhlcmUpID4gLTEpIHtcbiAgICAgIGNvbnRpbnVhdGlvbih7XG4gICAgICAgIHJlZGlyZWN0OiBoZXJlLFxuICAgICAgICBzdGF0ZTogb0F1dGhSZWRpcmVjdElkICsgTWF0aC5yYW5kb20oKVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIG9BdXRoIGNsaWVudC1zaWRlIGZsb3cgLSBsYXVuY2ggdGhlIHByb3ZpZGVkIFVSTFxuICogVGhpcyBtdXN0IGJlIGNhbGxlZCBhZnRlciBpbml0aWF0ZU9BdXRoIHdpdGggdGhlIHJldHVybmVkIHN0YXRlIG9iamVjdFxuICpcbiAqIEBtZXRob2QgbGF1bmNoQXV0aEZsb3dcbiAqIEBwYXJhbSB7U3RyaW5nfSBhdXRoVXJsIC0gVGhlIFVSTCB0aGF0IGluaXRpYXRlcyB0aGUgYXV0aCBmbG93LlxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgc3RyaW5nPn0gc3RhdGVPYmogLSBUaGUgcmV0dXJuIHZhbHVlIGZyb20gaW5pdGlhdGVPQXV0aFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29udGludWF0aW9uIC0gRnVuY3Rpb24gdG8gY2FsbCB3aGVuIGNvbXBsZXRlXG4gKiAgICBFeHBlY3RlZCB0byBzZWUgYSBTdHJpbmcgdmFsdWUgdGhhdCBpcyB0aGUgcmVzcG9uc2UgVXJsIGNvbnRhaW5pbmcgdGhlIGFjY2VzcyB0b2tlblxuICovXG5Mb2NhbFBhZ2VBdXRoLnByb3RvdHlwZS5sYXVuY2hBdXRoRmxvdyA9IGZ1bmN0aW9uKGF1dGhVcmwsIHN0YXRlT2JqLCBjb250aW51YXRpb24pIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHZhciBsaXN0ZW5lciA9IHRoaXMuc3RvcmFnZUxpc3RlbmVyLmJpbmQodGhpcywgY29udGludWF0aW9uLCBzdGF0ZU9iaik7XG4gIHRoaXMubGlzdGVuZXJzW3N0YXRlT2JqLnN0YXRlXSA9IGxpc3RlbmVyO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInN0b3JhZ2VcIiwgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gU3RhcnQgJ2VyIHVwXG4gIHdpbmRvdy5vcGVuKGF1dGhVcmwpO1xufTtcblxuLyoqXG4gKiBIYW5kbGVyIGZvciBzdG9yYWdlIGV2ZW50cywgd2hpY2ggcmVsYXlzIHRoZW0gdG8gd2FpdGluZyBjbGllbnRzLlxuICogRm9yIHRoZSBzY2hlbWEgb2YgdGhlIHN0b3JhZ2UgbXNnLCBzZWU6XG4gKiBodHRwOi8vdHV0b3JpYWxzLmplbmtvdi5jb20vaHRtbDUvbG9jYWwtc3RvcmFnZS5odG1sI3N0b3JhZ2UtZXZlbnRzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb250aW51YXRpb24gZnVuY3Rpb24gdG8gY2FsbCB3aXRoIHJlc3VsdFxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgc3RyaW5nPn0gc3RhdGVPYmogdGhlIHJldHVybiB2YWx1ZSBmcm9tIGluaXRpYXRlT0F1dGhcbiAqIEBwYXJhbSB7T2JqZWN0fSBtc2cgc3RvcmFnZSBldmVudFxuICovXG5Mb2NhbFBhZ2VBdXRoLnByb3RvdHlwZS5zdG9yYWdlTGlzdGVuZXIgPSBmdW5jdGlvbihjb250aW51YXRpb24sIHN0YXRlT2JqLCBtc2cpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICBpZiAobXNnLnVybC5pbmRleE9mKHN0YXRlT2JqLnN0YXRlKSA+IC0xKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdG9yYWdlXCIsIHRoaXMubGlzdGVuZXJzW3N0YXRlT2JqLnN0YXRlXSwgZmFsc2UpO1xuICAgIGRlbGV0ZSB0aGlzLmxpc3RlbmVyc1tzdGF0ZU9iai5zdGF0ZV07XG4gICAgY29udGludWF0aW9uKG1zZy51cmwpO1xuICB9XG59O1xuXG4vKipcbiAqIElmIHdlIGhhdmUgYSBsb2NhbCBkb21haW4sIGFuZCBmcmVlZG9tLmpzIGlzIGxvYWRlZCBhdCBzdGFydHVwLCB3ZSBjYW4gdXNlXG4gKiB0aGUgbG9jYWwgcGFnZSBhcyBhIHJlZGlyZWN0IFVSSS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBMb2NhbFBhZ2VBdXRoO1xuIiwiLypqc2xpbnQgaW5kZW50OjIsYnJvd3Nlcjp0cnVlLCBub2RlOnRydWUgKi9cbnZhciBQcm9taXNlQ29tcGF0ID0gcmVxdWlyZSgnZXM2LXByb21pc2UnKS5Qcm9taXNlO1xuXG52YXIgb0F1dGhSZWRpcmVjdElkID0gJ2ZyZWVkb20ub2F1dGgucmVkaXJlY3QuaGFuZGxlcic7XG5cbmZ1bmN0aW9uIFJlbW90ZVBhZ2VBdXRoKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgdGhpcy5saXN0ZW5lcnMgPSB7fTtcbn1cblxuLyoqXG4gKiBJbmRpY2F0ZSB0aGUgaW50ZW50aW9uIHRvIGluaXRpYXRlIGFuIG9BdXRoIGZsb3csIGFsbG93aW5nIGFuIGFwcHJvcHJpYXRlXG4gKiBvQXV0aCBwcm92aWRlciB0byBiZWdpbiBtb25pdG9yaW5nIGZvciByZWRpcmVjdGlvbi5cbiAqXG4gKiBAbWV0aG9kIGluaXRpYXRlT0F1dGhcbiAqIEBwYXJhbSB7c3RyaW5nW119IHJlZGlyZWN0VVJJcyAtIG9BdXRoIHJlZGlyZWN0aW9uIFVSSXMgcmVnaXN0ZXJlZCB3aXRoIHRoZVxuICogICAgIHByb3ZpZGVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29udGludWF0aW9uIC0gRnVuY3Rpb24gdG8gY2FsbCB3aGVuIGNvbXBsZXRlXG4gKiAgICBFeHBlY3RlZCB0byBzZWUgYSB2YWx1ZSBvZiBzY2hlbWE6IHt7cmVkaXJlY3Q6U3RyaW5nLCBzdGF0ZTpTdHJpbmd9fVxuICogICAgd2hlcmUgJ3JlZGlyZWN0JyBpcyB0aGUgY2hvc2VuIHJlZGlyZWN0IFVSSVxuICogICAgYW5kICdzdGF0ZScgaXMgdGhlIHN0YXRlIHRvIHBhc3MgdG8gdGhlIFVSSSBvbiBjb21wbGV0aW9uIG9mIG9BdXRoXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGNhbiBoYW5kbGUsIGZhbHNlIG90aGVyd2lzZVxuICovXG5SZW1vdGVQYWdlQXV0aC5wcm90b3R5cGUuaW5pdGlhdGVPQXV0aCA9IGZ1bmN0aW9uKHJlZGlyZWN0VVJJcywgY29udGludWF0aW9uKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5kb2N1bWVudCkge1xuICAgIGZvciAodmFyIGk9MDsgaTxyZWRpcmVjdFVSSXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIFRPRE86IHJlbW92ZSByZXN0cmljdGlvbiBvbiBVUkwgcGF0dGVybiBtYXRjaC5cbiAgICAgIGlmICgocmVkaXJlY3RVUklzW2ldLmluZGV4T2YoJ2h0dHA6Ly8nKSA9PT0gMCB8fFxuICAgICAgICAgIHJlZGlyZWN0VVJJc1tpXS5pbmRleE9mKCdodHRwczovLycpID09PSAwKSAmJlxuICAgICAgICAgIHJlZGlyZWN0VVJJc1tpXS5pbmRleE9mKCdvYXV0aC1yZWxheS5odG1sJykgPiAwKSB7XG4gICAgICAgIGNvbnRpbnVhdGlvbih7XG4gICAgICAgICAgcmVkaXJlY3Q6IHJlZGlyZWN0VVJJc1tpXSxcbiAgICAgICAgICBzdGF0ZTogb0F1dGhSZWRpcmVjdElkICsgTWF0aC5yYW5kb20oKVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogb0F1dGggY2xpZW50LXNpZGUgZmxvdyAtIGxhdW5jaCB0aGUgcHJvdmlkZWQgVVJMXG4gKiBUaGlzIG11c3QgYmUgY2FsbGVkIGFmdGVyIGluaXRpYXRlT0F1dGggd2l0aCB0aGUgcmV0dXJuZWQgc3RhdGUgb2JqZWN0XG4gKlxuICogQG1ldGhvZCBsYXVuY2hBdXRoRmxvd1xuICogQHBhcmFtIHtTdHJpbmd9IGF1dGhVcmwgLSBUaGUgVVJMIHRoYXQgaW5pdGlhdGVzIHRoZSBhdXRoIGZsb3cuXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBzdHJpbmc+fSBzdGF0ZU9iaiAtIFRoZSByZXR1cm4gdmFsdWUgZnJvbSBpbml0aWF0ZU9BdXRoXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb250aW51YXRpb24gLSBGdW5jdGlvbiB0byBjYWxsIHdoZW4gY29tcGxldGVcbiAqICAgIEV4cGVjdGVkIHRvIHNlZSBhIFN0cmluZyB2YWx1ZSB0aGF0IGlzIHRoZSByZXNwb25zZSBVcmwgY29udGFpbmluZyB0aGUgYWNjZXNzIHRva2VuXG4gKi9cblJlbW90ZVBhZ2VBdXRoLnByb3RvdHlwZS5sYXVuY2hBdXRoRmxvdyA9IGZ1bmN0aW9uKGF1dGhVcmwsIHN0YXRlT2JqLCBjb250aW51YXRpb24pIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHZhciBmcmFtZSA9IGdsb2JhbC5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgZnJhbWUuc3JjID0gc3RhdGVPYmoucmVkaXJlY3Q7XG4gIGZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgZ2xvYmFsLmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZnJhbWUpO1xuICBmcmFtZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgIHRoaXMubGlzdGVuZXJzW3N0YXRlT2JqLnN0YXRlXSA9IGNvbnRpbnVhdGlvbjtcbiAgICB3aW5kb3cub3BlbihhdXRoVXJsKTtcblxuICAgIGZyYW1lLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2Uoc3RhdGVPYmouc3RhdGUsICcqJyk7XG4gIH0uYmluZCh0aGlzKSk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiAoZnJhbWUsIG1zZykge1xuICAgIGlmIChtc2cuZGF0YSAmJiBtc2cuZGF0YS5rZXkgJiYgbXNnLmRhdGEudXJsICYmIHRoaXMubGlzdGVuZXJzW21zZy5kYXRhLmtleV0pIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzW21zZy5kYXRhLmtleV0obXNnLmRhdGEudXJsKTtcbiAgICAgIGRlbGV0ZSB0aGlzLmxpc3RlbmVyc1ttc2cuZGF0YS5rZXldO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChmcmFtZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0uYmluZCh0aGlzLCBmcmFtZSksIGZhbHNlKTtcbn07XG5cbi8qKlxuICogSWYgd2UgaGF2ZSBhIGxvY2FsIGRvbWFpbiwgYW5kIGZyZWVkb20uanMgaXMgbG9hZGVkIGF0IHN0YXJ0dXAsIHdlIGNhbiB1c2VcbiAqIHRoZSBsb2NhbCBwYWdlIGFzIGEgcmVkaXJlY3QgVVJJLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IFJlbW90ZVBhZ2VBdXRoO1xuIiwiLypqc2xpbnQgaW5kZW50OjIsd2hpdGU6dHJ1ZSxub2RlOnRydWUsc2xvcHB5OnRydWUgKi9cbnZhciBQcm9taXNlQ29tcGF0ID0gcmVxdWlyZSgnZXM2LXByb21pc2UnKS5Qcm9taXNlO1xuXG4vKipcbiAqIFRoZSBBUEkgcmVnaXN0cnkgZm9yIGZyZWVkb20uanMuICBVc2VkIHRvIGxvb2sgdXAgcmVxdWVzdGVkIEFQSXMsXG4gKiBhbmQgcHJvdmlkZXMgYSBicmlkZ2UgZm9yIGNvcmUgQVBJcyB0byBhY3QgbGlrZSBub3JtYWwgQVBJcy5cbiAqIEBDbGFzcyBBUElcbiAqIEBwYXJhbSB7RGVidWd9IGRlYnVnIFRoZSBkZWJ1Z2dlciB0byB1c2UgZm9yIGxvZ2dpbmcuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xudmFyIEFwaSA9IGZ1bmN0aW9uKGRlYnVnKSB7XG4gIHRoaXMuZGVidWcgPSBkZWJ1ZztcbiAgdGhpcy5hcGlzID0ge307XG4gIHRoaXMucHJvdmlkZXJzID0ge307XG4gIHRoaXMud2FpdGVycyA9IHt9O1xufTtcblxuLyoqXG4gKiBHZXQgYW4gQVBJLlxuICogQG1ldGhvZCBnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBhcGkgVGhlIEFQSSBuYW1lIHRvIGdldC5cbiAqIEByZXR1cm5zIHt7bmFtZTpTdHJpbmcsIGRlZmluaXRpb246QVBJfX0gVGhlIEFQSSBpZiByZWdpc3RlcmVkLlxuICovXG5BcGkucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKGFwaSkge1xuICBpZiAoIXRoaXMuYXBpc1thcGldKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogYXBpLFxuICAgIGRlZmluaXRpb246IHRoaXMuYXBpc1thcGldXG4gIH07XG59O1xuXG4vKipcbiAqIFNldCBhbiBBUEkgdG8gYSBkZWZpbml0aW9uLlxuICogQG1ldGhvZCBzZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBBUEkgbmFtZS5cbiAqIEBwYXJhbSB7QVBJfSBkZWZpbml0aW9uIFRoZSBKU09OIG9iamVjdCBkZWZpbmluZyB0aGUgQVBJLlxuICovXG5BcGkucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKG5hbWUsIGRlZmluaXRpb24pIHtcbiAgdGhpcy5hcGlzW25hbWVdID0gZGVmaW5pdGlvbjtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgYSBjb3JlIEFQSSBwcm92aWRlci5cbiAqIEBtZXRob2QgcmVnaXN0ZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIHRoZSBBUEkgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbnN0cnVjdG9yIHRoZSBmdW5jdGlvbiB0byBjcmVhdGUgYSBwcm92aWRlciBmb3IgdGhlIEFQSS5cbiAqIEBwYXJhbSB7U3RyaW5nP30gc3R5bGUgVGhlIHN0eWxlIHRoZSBwcm92aWRlciBpcyB3cml0dGVuIGluLiBWYWxpZCBzdHlsZXNcbiAqICAgYXJlIGRvY3VtZW50ZWQgaW4gZmRvbS5wb3J0LlByb3ZpZGVyLnByb3RvdHlwZS5nZXRJbnRlcmZhY2UuIERlZmF1bHRzIHRvXG4gKiAgIHByb3ZpZGVBc3luY2hyb25vdXNcbiAqIEBwYXJhbSB7T2JqZWN0P30gZmxhZ3MgUHJlZml4ZWQgYXJndW1lbnRzIG5lZWRlZCBieSB0aGUgY29yZSBwcm92aWRlci5cbiAqICAgdmFsaWQga2V5cyBhcmUgJ21vZHVsZScsICdwcm92aWRlcicsIGFuZCAnY29uZmlnJy5cbiAqL1xuQXBpLnByb3RvdHlwZS5yZWdpc3RlciA9IGZ1bmN0aW9uKG5hbWUsIGNvbnN0cnVjdG9yLCBzdHlsZSwgZmxhZ3MpIHtcbiAgdmFyIGksXG4gICAgYXJncztcblxuICB0aGlzLnByb3ZpZGVyc1tuYW1lXSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogY29uc3RydWN0b3IsXG4gICAgc3R5bGU6IHN0eWxlIHx8ICdwcm92aWRlQXN5bmNocm9ub3VzJyxcbiAgICBmbGFnczogZmxhZ3MgfHwge31cbiAgfTtcblxuICBpZiAodGhpcy53YWl0ZXJzW25hbWVdKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMud2FpdGVyc1tuYW1lXS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgYXJncyA9IHt9O1xuICAgICAgaWYgKGZsYWdzLm1vZHVsZSkge1xuICAgICAgICBhcmdzLm1vZHVsZSA9IHRoaXMud2FpdGVyc1tuYW1lXVtpXS5mcm9tO1xuICAgICAgfVxuICAgICAgaWYgKGZsYWdzLmNvbmZpZykge1xuICAgICAgICBhcmdzLmNvbmZpZyA9IHRoaXMud2FpdGVyc1tuYW1lXVtpXS5mcm9tLmNvbmZpZztcbiAgICAgIH1cbiAgICAgIHRoaXMud2FpdGVyc1tuYW1lXVtpXS5yZXNvbHZlKHtcbiAgICAgICAgYXJnczogYXJncyxcbiAgICAgICAgaW5zdDogY29uc3RydWN0b3IuYmluZCh7fSwgYXJncylcbiAgICAgIH0pO1xuICAgIH1cbiAgICBkZWxldGUgdGhpcy53YWl0ZXJzW25hbWVdO1xuICB9XG59O1xuXG4vKipcbiAqIEdldCBhIGNvcmUgQVBJIGNvbm5lY3RlZCB0byBhIGdpdmVuIEZyZWVET00gbW9kdWxlLlxuICogQG1ldGhvZCBnZXRDb3JlXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSB0aGUgQVBJIHRvIHJldHJpZXZlLlxuICogQHBhcmFtIHtNb2R1bGV9IGZyb20gVGhlIGluc3RhbnRpYXRpbmcgQXBwLlxuICogQHJldHVybnMge1Byb21pc2V9IEEgcHJvbWlzZSBvZiBhIGZkb20uQXBwIGxvb2stYWxpa2UgKGFuZCBhcmd1bWVudCBvYmplY3QpLFxuICogbWF0Y2hpbmcgYSBsb2NhbCBBUEkgZGVmaW5pdGlvbi5cbiAqL1xuQXBpLnByb3RvdHlwZS5nZXRDb3JlID0gZnVuY3Rpb24obmFtZSwgZnJvbSkge1xuICByZXR1cm4gbmV3IFByb21pc2VDb21wYXQoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWYgKHRoaXMuYXBpc1tuYW1lXSkge1xuICAgICAgaWYgKHRoaXMucHJvdmlkZXJzW25hbWVdKSB7XG4gICAgICAgIHZhciBhcmdzID0ge307XG4gICAgICAgIGlmICh0aGlzLnByb3ZpZGVyc1tuYW1lXS5mbGFncy5tb2R1bGUpIHtcbiAgICAgICAgICBhcmdzLm1vZHVsZSA9IGZyb207XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvdmlkZXJzW25hbWVdLmZsYWdzLmNvbmZpZykge1xuICAgICAgICAgIGFyZ3MuY29uZmlnID0gZnJvbS5jb25maWc7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgYXJnczogYXJncyxcbiAgICAgICAgICBpbnN0OiB0aGlzLnByb3ZpZGVyc1tuYW1lXS5jb25zdHJ1Y3Rvci5iaW5kKHt9LCBhcmdzKVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghdGhpcy53YWl0ZXJzW25hbWVdKSB7XG4gICAgICAgICAgdGhpcy53YWl0ZXJzW25hbWVdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy53YWl0ZXJzW25hbWVdLnB1c2goe1xuICAgICAgICAgIHJlc29sdmU6IHJlc29sdmUsXG4gICAgICAgICAgcmVqZWN0OiByZWplY3QsXG4gICAgICAgICAgZnJvbTogZnJvbVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZWJ1Zy53YXJuKCdBcGkuZ2V0Q29yZSBhc2tlZCBmb3IgdW5rbm93biBjb3JlOiAnICsgbmFtZSk7XG4gICAgICByZWplY3QobnVsbCk7XG4gICAgfVxuICB9LmJpbmQodGhpcykpO1xufTtcblxuLyoqXG4gKiBDb25maWd1cmUgYSB7UHJvdmlkZXJ9IHRvIHByb3ZpZGUgYSBuYW1lZCBjb3JlIGFwaSBvbiBiZWhhbGYgb2YgYVxuICogZ2l2ZW4gcG9ydC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBwcm92aWRlclxuICogQHBhcmFtIHtQcm92aWRlcn0gcHJvdmlkZXIgVGhlIHByb3ZpZGVyIHRoYXQgd2lsbCBwcm92aWRlIHRoZSBuYW1lZCBhcGlcbiAqIEBwYXJhbSB7TW9kdWxlfSBmcm9tIFRoZSBtb2R1bGUgcmVxdWVzdGluZyB0aGUgY29yZSBwcm92aWRlci5cbiAqL1xuQXBpLnByb3RvdHlwZS5wcm92aWRlQ29yZSA9IGZ1bmN0aW9uIChuYW1lLCBwcm92aWRlciwgZnJvbSkge1xuICByZXR1cm4gdGhpcy5nZXRDb3JlKG5hbWUsIGZyb20pLnRoZW4oZnVuY3Rpb24gKGNvcmUpIHtcbiAgICB2YXIgZmxhZ3MgPSB0aGlzLnByb3ZpZGVyc1tuYW1lXS5mbGFncyxcbiAgICAgIGlmYWNlID0gcHJvdmlkZXIuZ2V0UHJveHlJbnRlcmZhY2UoKTtcbiAgICBpZiAoZmxhZ3MucHJvdmlkZXIpIHtcbiAgICAgIGNvcmUuYXJncy5wcm92aWRlciA9IGlmYWNlO1xuICAgIH1cbiAgICBpZmFjZSgpW3RoaXMucHJvdmlkZXJzW25hbWVdLnN0eWxlXShjb3JlLmluc3QpO1xuICB9LmJpbmQodGhpcyksIGZ1bmN0aW9uIChlcnIpIHtcbiAgICB0aGlzLmRlYnVnLmVycm9yKCdDb3VsZCBub3QgcHJvdmlkZSBjb3JlOiAnLCBlcnIpO1xuICB9LmJpbmQodGhpcykpO1xufTtcblxuLyoqXG4gKiBTaHV0ZG93biB0aGUgQVBJIHJlZ2lzdHJ5LCBhbmQgcmVqZWN0IGFueSBwZW5kaW5nIHdhaXRlcnMuXG4gKi9cbkFwaS5wcm90b3R5cGUuY2xlYW51cCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHByb3AsXG4gICAgZG9SZWplY3QgPSBmdW5jdGlvbiAod2FpdGVyKSB7XG4gICAgICB3YWl0ZXIucmVqZWN0KCk7XG4gICAgfTtcbiAgZm9yIChwcm9wIGluIHRoaXMud2FpdGVycykge1xuICAgIGlmICh0aGlzLndhaXRlcnMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgIHRoaXMud2FpdGVyc1twcm9wXS5mb3JFYWNoKGRvUmVqZWN0KTtcbiAgICB9XG4gIH1cbiAgZGVsZXRlIHRoaXMud2FpdGVycztcbn07XG5cbi8qKlxuICogRGVmaW5lcyB0aGUgYXBpcyBtb2R1bGUgYW5kIHByb3ZpZGVyIHJlZ2lzdHJ5LlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IEFwaTtcbiIsIi8qanNsaW50IGluZGVudDoyLG5vZGU6dHJ1ZSAqL1xuXG52YXIgQnVuZGxlID0gZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCc7XG4gIHRoaXMuaW50ZXJmYWNlcyA9IHJlcXVpcmUoJy4uL2Rpc3QvYnVuZGxlLmNvbXBpbGVkJyk7XG59O1xuXG4vKipcbiAqIFBvcHVsYXRlIGFuIEFQSSByZWdpc3RyeSB3aXRoIHByb3ZpZGVkIHByb3ZpZGVycywgYW5kIHdpdGgga25vd24gQVBJXG4gKiBkZWZpbml0aW9ucy5cbiAqIEBzdGF0aWNcbiAqIEBtZXRob2QgcmVnaXN0ZXJcbiAqIEBwYXJhbSB7e25hbWU6IHN0cmluZywgcHJvdmlkZXI6IEZ1bmN0aW9uLCBzdHlsZT86IHN0cmluZ31bXX0gcHJvdmlkZXJzXG4gKiAgIFRoZSBjb3JlIHByb3ZpZGVycyBtYWRlIGF2YWlsYWJsZSB0byB0aGlzIGZyZWVkb20uanMgaW5zdGFuY2UuXG4gKiBAcGFyYW0ge0FwaX0gcmVnaXN0cnkgVGhlIEFQSSByZWdpc3RyeSB0byBwb3B1bGF0ZS5cbiAqL1xuZXhwb3J0cy5yZWdpc3RlciA9IGZ1bmN0aW9uIChwcm92aWRlcnMsIHJlZ2lzdHJ5KSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdmFyIGJ1bmRsZSA9IG5ldyBCdW5kbGUoKTtcbiAgYnVuZGxlLmludGVyZmFjZXMuZm9yRWFjaChmdW5jdGlvbiAoYXBpKSB7XG4gICAgaWYgKGFwaSAmJiBhcGkubmFtZSAmJiBhcGkuYXBpKSB7XG4gICAgICByZWdpc3RyeS5zZXQoYXBpLm5hbWUsIGFwaS5hcGkpO1xuICAgIH1cbiAgfSk7XG5cbiAgcHJvdmlkZXJzLmZvckVhY2goZnVuY3Rpb24gKHByb3ZpZGVyKSB7XG4gICAgaWYgKHByb3ZpZGVyLm5hbWUpIHtcbiAgICAgIHJlZ2lzdHJ5LnJlZ2lzdGVyKHByb3ZpZGVyLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlci5wcm92aWRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyLnN0eWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIuZmxhZ3MpO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiLypnbG9iYWxzIEJsb2IsIEFycmF5QnVmZmVyLCBEYXRhVmlldyAqL1xuLypqc2xpbnQgaW5kZW50OjIsIG5vZGU6dHJ1ZSwgc2xvcHB5OnRydWUgKi9cbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbi8qKlxuICogQSBmcmVlZG9tIHBvcnQgZm9yIGEgdXNlci1hY2Nlc3NhYmxlIGFwaS5cbiAqIEBjbGFzcyBDb25zdW1lclxuICogQGltcGxlbWVudHMgUG9ydFxuICogQHVzZXMgaGFuZGxlRXZlbnRzXG4gKiBAcGFyYW0ge09iamVjdH0gaW50ZXJmYWNlQ2xzIFRoZSBhcGkgaW50ZXJmYWNlIGV4cG9zZWQgYnkgdGhpcyBjb25zdW1lci5cbiAqIEBwYXJhbSB7RGVidWd9IGRlYnVnIFRoZSBkZWJ1Z2dlciB0byB1c2UgZm9yIGxvZ2dpbmcuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xudmFyIENvbnN1bWVyID0gZnVuY3Rpb24gKGludGVyZmFjZUNscywgZGVidWcpIHtcbiAgdGhpcy5pZCA9IENvbnN1bWVyLm5leHRJZCgpO1xuICB0aGlzLmludGVyZmFjZUNscyA9IGludGVyZmFjZUNscztcbiAgdGhpcy5kZWJ1ZyA9IGRlYnVnO1xuICB1dGlsLmhhbmRsZUV2ZW50cyh0aGlzKTtcbiAgXG4gIHRoaXMuaWZhY2VzID0ge307XG4gIHRoaXMuY2xvc2VIYW5kbGVycyA9IHt9O1xuICB0aGlzLmVycm9ySGFuZGxlcnMgPSB7fTtcbiAgdGhpcy5lbWl0cyA9IHt9O1xufTtcblxuLyoqXG4gKiBSZWNlaXZlIGluY29taW5nIG1lc3NhZ2VzIGZvciB0aGlzIGNvbnN1bWVyLlxuICogQG1ldGhvZCBvbk1lc3NhZ2VcbiAqIEBwYXJhbSB7U3RyaW5nfSBzb3VyY2UgVGhlIHNvdXJjZSBvZiB0aGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlIFRoZSByZWNlaXZlZCBtZXNzYWdlLlxuICovXG5Db25zdW1lci5wcm90b3R5cGUub25NZXNzYWdlID0gZnVuY3Rpb24gKHNvdXJjZSwgbWVzc2FnZSkge1xuICBpZiAoc291cmNlID09PSAnY29udHJvbCcgJiYgbWVzc2FnZS5yZXZlcnNlKSB7XG4gICAgdGhpcy5lbWl0Q2hhbm5lbCA9IG1lc3NhZ2UuY2hhbm5lbDtcbiAgICB0aGlzLmVtaXQodGhpcy5lbWl0Q2hhbm5lbCwge1xuICAgICAgdHlwZTogJ2NoYW5uZWwgYW5ub3VuY2VtZW50JyxcbiAgICAgIGNoYW5uZWw6IG1lc3NhZ2UucmV2ZXJzZVxuICAgIH0pO1xuICAgIHRoaXMuZW1pdCgnc3RhcnQnKTtcbiAgfSBlbHNlIGlmIChzb3VyY2UgPT09ICdjb250cm9sJyAmJiBtZXNzYWdlLnR5cGUgPT09ICdzZXR1cCcpIHtcbiAgICB0aGlzLmNvbnRyb2xDaGFubmVsID0gbWVzc2FnZS5jaGFubmVsO1xuICB9IGVsc2UgaWYgKHNvdXJjZSA9PT0gJ2NvbnRyb2wnICYmIG1lc3NhZ2UudHlwZSA9PT0gJ2Nsb3NlJykge1xuICAgIGRlbGV0ZSB0aGlzLmNvbnRyb2xDaGFubmVsO1xuICAgIHRoaXMuZG9DbG9zZSgpO1xuICB9IGVsc2Uge1xuICAgIGlmICghdGhpcy5lbWl0Q2hhbm5lbCAmJiBtZXNzYWdlLmNoYW5uZWwpIHtcbiAgICAgIHRoaXMuZW1pdENoYW5uZWwgPSBtZXNzYWdlLmNoYW5uZWw7XG4gICAgICB0aGlzLmVtaXQoJ3N0YXJ0Jyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLnR5cGUgPT09ICdjbG9zZScgJiYgbWVzc2FnZS50bykge1xuICAgICAgdGhpcy50ZWFyZG93bihtZXNzYWdlLnRvKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ2Vycm9yJykge1xuICAgICAgdGhpcy5lcnJvcihtZXNzYWdlLnRvLCBtZXNzYWdlLm1lc3NhZ2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS50bykge1xuICAgICAgaWYgKHRoaXMuZW1pdHNbbWVzc2FnZS50b10pIHtcbiAgICAgICAgdGhpcy5lbWl0c1ttZXNzYWdlLnRvXSgnbWVzc2FnZScsIG1lc3NhZ2UubWVzc2FnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRlYnVnLndhcm4oJ0NvdWxkIG5vdCBkZWxpdmVyIG1lc3NhZ2UsIG5vIHN1Y2ggaW50ZXJmYWNlOiAnICsgbWVzc2FnZS50byk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBtc2cgPSBtZXNzYWdlLm1lc3NhZ2U7XG4gICAgICB1dGlsLmVhY2hQcm9wKHRoaXMuZW1pdHMsIGZ1bmN0aW9uIChpZmFjZSkge1xuICAgICAgICBpZmFjZSgnbWVzc2FnZScsIG1lc3NhZ2UubWVzc2FnZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgY29uc3VtZXIuSW50ZXJmYWNlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGNvbnN1bWVyLlxuICogQW4gaW50ZXJmYWNlIGlzIHJldHVybmVkLCB3aGljaCBpcyBzdXBwbGllZCB3aXRoIGltcG9ydGFudCBjb250cm9sIG9mIHRoZVxuICogYXBpIHZpYSBjb25zdHJ1Y3RvciBhcmd1bWVudHM6IChib3VuZCBiZWxvdyBpbiBnZXRJbnRlcmZhY2VDb25zdHJ1Y3RvcilcbiAqIFxuICogb25Nc2c6IGZ1bmN0aW9uKGJpbmRlcikgc2V0cyB0aGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIG1lc3NhZ2VzIGZvciB0aGlzXG4gKiAgICBpbnRlcmZhY2UgYXJyaXZlIG9uIHRoZSBjaGFubmVsLFxuICogZW1pdDogZnVuY3Rpb24obXNnKSBhbGxvd3MgdGhpcyBpbnRlcmZhY2UgdG8gZW1pdCBtZXNzYWdlcyxcbiAqIGlkOiBzdHJpbmcgaXMgdGhlIElkZW50aWZpZXIgZm9yIHRoaXMgaW50ZXJmYWNlLlxuICogQG1ldGhvZCBnZXRJbnRlcmZhY2VcbiAqL1xuQ29uc3VtZXIucHJvdG90eXBlLmdldEludGVyZmFjZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIElmYWNlID0gdGhpcy5nZXRJbnRlcmZhY2VDb25zdHJ1Y3RvcigpLFxuICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICBpZiAoYXJncy5sZW5ndGgpIHtcbiAgICBJZmFjZSA9IElmYWNlLmJpbmQuYXBwbHkoSWZhY2UsIFtJZmFjZV0uY29uY2F0KGFyZ3MpKTtcbiAgfVxuICByZXR1cm4gbmV3IElmYWNlKCk7XG59O1xuXG4vKipcbiAqIEF0dGFjaCBhbiAnb25FdmVudCcgbGlzdGVuZXIgdG8gYW4gaW50ZXJmYWNlLCBhbGxvd2luZyBleHRlcm5hbCBjb25zdW1lcnNcbiAqIHRvIGVpdGhlciBsaXN0ZW4gdG8gY2hhbm5lbCBzdGF0ZSwgb3IgcmVnaXN0ZXIgY2FsbGJhY2tzIG9uIGxpZmV0aW1lIGV2ZW50c1xuICogb2YgaW5kaXZpZHVhbCBpbnN0YW5jZXMgb2YgdGhlIGludGVyZmFjZS5cbiAqIEBtZXRob2QgZ2V0TGlzdGVuZXJcbiAqIEBwYXJtYSB7U3RyaW5nfSBuYW1lIFRoZSBldmVudCB0byBsaXN0ZW4gdG8uXG4gKiBAcHJpdmF0ZVxuICovXG5Db25zdW1lci5wcm90b3R5cGUuZ2V0TGlzdGVuZXIgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGluc3RhbmNlLCBoYW5kbGVyKSB7XG4gICAgLy8gTGlzdGVuIHRvIHRoZSBjaGFubmVsIGRpcmVjdGx5LlxuICAgIGlmICh0eXBlb2YgaW5zdGFuY2UgPT09ICdmdW5jdGlvbicgJiYgaGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm9uY2UobmFtZSwgaW5zdGFuY2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIExpc3RlbiB0byBhIHNwZWNpZmljIGluc3RhbmNlLlxuICAgIHZhciBoYW5kbGVycyA9IG5hbWUgKyAnSGFuZGxlcnMnO1xuICAgIHV0aWwuZWFjaFByb3AodGhpcy5pZmFjZXMsIGZ1bmN0aW9uIChjYW5kaWRhdGUsIGlkKSB7XG4gICAgICBpZiAoY2FuZGlkYXRlID09PSBpbnN0YW5jZSkge1xuICAgICAgICBpZiAodGhpc1toYW5kbGVyc11baWRdKSB7XG4gICAgICAgICAgdGhpc1toYW5kbGVyc11baWRdLnB1c2goaGFuZGxlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpc1toYW5kbGVyc11baWRdID0gW2hhbmRsZXJdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSk7XG4gIH0uYmluZCh0aGlzKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgZnVuY3Rpb24gdGhhdCBjYW4gYmUgdXNlZCB0byBnZXQgaW50ZXJmYWNlcyBmcm9tIHRoaXMgYXBpIGNvbnN1bWVyXG4gKiBmcm9tIGEgdXNlci12aXNpYmxlIHBvaW50LlxuICogQG1ldGhvZCBnZXRQcm94eUludGVyZmFjZVxuICovXG5Db25zdW1lci5wcm90b3R5cGUuZ2V0UHJveHlJbnRlcmZhY2UgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBmdW5jID0gZnVuY3Rpb24gKHApIHtcbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHAuZ2V0SW50ZXJmYWNlLmFwcGx5KHAsIGFyZ3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcC5nZXRJbnRlcmZhY2UoKTtcbiAgICB9XG4gIH0uYmluZCh7fSwgdGhpcyk7XG5cbiAgZnVuYy5jbG9zZSA9IGZ1bmN0aW9uIChpZmFjZSkge1xuICAgIGlmIChpZmFjZSkge1xuICAgICAgdXRpbC5lYWNoUHJvcCh0aGlzLmlmYWNlcywgZnVuY3Rpb24gKGNhbmRpZGF0ZSwgaWQpIHtcbiAgICAgICAgaWYgKGNhbmRpZGF0ZSA9PT0gaWZhY2UpIHtcbiAgICAgICAgICB0aGlzLnRlYXJkb3duKGlkKTtcbiAgICAgICAgICB0aGlzLmVtaXQodGhpcy5lbWl0Q2hhbm5lbCwge1xuICAgICAgICAgICAgdHlwZTogJ2Nsb3NlJyxcbiAgICAgICAgICAgIHRvOiBpZFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDbG9zZSB0aGUgY2hhbm5lbC5cbiAgICAgIHRoaXMuZG9DbG9zZSgpO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpO1xuXG4gIGZ1bmMub25DbG9zZSA9IHRoaXMuZ2V0TGlzdGVuZXIoJ2Nsb3NlJyk7XG4gIGZ1bmMub25FcnJvciA9IHRoaXMuZ2V0TGlzdGVuZXIoJ2Vycm9yJyk7XG5cbiAgcmV0dXJuIGZ1bmM7XG59O1xuXG4vKipcbiAqIFByb3ZpZGVzIGEgYm91bmQgY2xhc3MgZm9yIGNyZWF0aW5nIGEgY29uc3VtZXIuSW50ZXJmYWNlIGFzc29jaWF0ZWRcbiAqIHdpdGggdGhpcyBhcGkuIFRoaXMgcGFydGlhbCBsZXZlbCBvZiBjb25zdHJ1Y3Rpb24gY2FuIGJlIHVzZWRcbiAqIHRvIGFsbG93IHRoZSBjb25zdW1lciB0byBiZSB1c2VkIGFzIGEgcHJvdmlkZXIgZm9yIGFub3RoZXIgQVBJLlxuICogQG1ldGhvZCBnZXRJbnRlcmZhY2VDb25zdHJ1Y3RvclxuICogQHByaXZhdGVcbiAqL1xuQ29uc3VtZXIucHJvdG90eXBlLmdldEludGVyZmFjZUNvbnN0cnVjdG9yID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaWQgPSBDb25zdW1lci5uZXh0SWQoKTtcbiAgcmV0dXJuIHRoaXMuaW50ZXJmYWNlQ2xzLmJpbmQoXG4gICAge30sXG4gICAgZnVuY3Rpb24gKGlkLCBvYmosIGJpbmRlcikge1xuICAgICAgdGhpcy5pZmFjZXNbaWRdID0gb2JqO1xuICAgICAgdGhpcy5lbWl0c1tpZF0gPSBiaW5kZXI7XG4gICAgfS5iaW5kKHRoaXMsIGlkKSxcbiAgICB0aGlzLmRvRW1pdC5iaW5kKHRoaXMsIGlkKSxcbiAgICB0aGlzLmRlYnVnXG4gICk7XG59O1xuXG4vKipcbiAqIEVtaXQgYSBtZXNzYWdlIG9uIHRoZSBjaGFubmVsIG9uY2Ugc2V0dXAgaXMgY29tcGxldGUuXG4gKiBAbWV0aG9kIGRvRW1pdFxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0byBUaGUgSUQgb2YgdGhlIGZsb3cgc2VuZGluZyB0aGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtc2cgVGhlIG1lc3NhZ2UgdG8gZW1pdFxuICogQHBhcmFtIHtCb29sZWFufSBhbGwgU2VuZCBtZXNzYWdlIHRvIGFsbCByZWNpcGllbnRzLlxuICovXG5Db25zdW1lci5wcm90b3R5cGUuZG9FbWl0ID0gZnVuY3Rpb24gKHRvLCBtc2csIGFsbCkge1xuICBpZiAoYWxsKSB7XG4gICAgdG8gPSBmYWxzZTtcbiAgfVxuICBpZiAodGhpcy5lbWl0Q2hhbm5lbCkge1xuICAgIHRoaXMuZW1pdCh0aGlzLmVtaXRDaGFubmVsLCB7dG86IHRvLCB0eXBlOiAnbWVzc2FnZScsIG1lc3NhZ2U6IG1zZ30pO1xuICB9IGVsc2Uge1xuICAgIHRoaXMub25jZSgnc3RhcnQnLCB0aGlzLmRvRW1pdC5iaW5kKHRoaXMsIHRvLCBtc2cpKTtcbiAgfVxufTtcblxuLyoqXG4gKiBUZWFyZG93biBhIHNpbmdsZSBpbnRlcmZhY2Ugb2YgdGhpcyBhcGkuXG4gKiBAbWV0aG9kIHRlYXJkb3duXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgVGhlIGlkIG9mIHRoZSBpbnRlcmZhY2UgdG8gdGVhciBkb3duLlxuICovXG5Db25zdW1lci5wcm90b3R5cGUudGVhcmRvd24gPSBmdW5jdGlvbiAoaWQpIHtcbiAgaWYgKHRoaXMuZW1pdHNbaWRdKSB7XG4gICAgdGhpcy5lbWl0c1tpZF0oJ2Nsb3NlJyk7XG4gIH1cbiAgZGVsZXRlIHRoaXMuZW1pdHNbaWRdO1xuICBpZiAodGhpcy5jbG9zZUhhbmRsZXJzW2lkXSkge1xuICAgIHV0aWwuZWFjaFByb3AodGhpcy5jbG9zZUhhbmRsZXJzW2lkXSwgZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgIHByb3AoKTtcbiAgICB9KTtcbiAgfVxuICBkZWxldGUgdGhpcy5pZmFjZXNbaWRdO1xuICBkZWxldGUgdGhpcy5jbG9zZUhhbmRsZXJzW2lkXTtcbiAgZGVsZXRlIHRoaXMuZXJyb3JIYW5kbGVyc1tpZF07XG59O1xuXG4vKipcbiAqIEhhbmRsZSBhIG1lc3NhZ2UgZXJyb3IgcmVwb3J0ZWQgdG8gdGhpcyBhcGkuXG4gKiBAbWV0aG9kIGVycm9yXG4gKiBAcGFyYW0ge1N0cmluZz99IGlkIFRoZSBpZCBvZiB0aGUgaW50ZXJmYWNlIHdoZXJlIHRoZSBlcnJvciBvY2N1cmVkLlxuICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2UgVGhlIG1lc3NhZ2Ugd2hpY2ggZmFpbGVkLCBpZiByZWxldmFudC5cbiAqL1xuQ29uc3VtZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGlkLCBtZXNzYWdlKSB7XG4gIGlmIChpZCAmJiB0aGlzLmVycm9ySGFuZGxlcnNbaWRdKSB7XG4gICAgdXRpbC5lYWNoUHJvcCh0aGlzLmVycm9ySGFuZGxlcnNbaWRdLCBmdW5jdGlvbiAocHJvcCkge1xuICAgICAgcHJvcChtZXNzYWdlKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICghaWQpIHtcbiAgICB0aGlzLmVtaXQoJ2Vycm9yJywgbWVzc2FnZSk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBDbG9zZSAvIHRlYXJkb3duIHRoZSBmbG93IHRoaXMgYXBpIHRlcm1pbmF0ZXMuXG4gKiBAbWV0aG9kIGRvQ2xvc2VcbiAqL1xuQ29uc3VtZXIucHJvdG90eXBlLmRvQ2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmNvbnRyb2xDaGFubmVsKSB7XG4gICAgdGhpcy5lbWl0KHRoaXMuY29udHJvbENoYW5uZWwsIHtcbiAgICAgIHR5cGU6ICdDaGFubmVsIENsb3NpbmcnLFxuICAgICAgcmVxdWVzdDogJ2Nsb3NlJ1xuICAgIH0pO1xuICB9XG5cbiAgdXRpbC5lYWNoUHJvcCh0aGlzLmVtaXRzLCBmdW5jdGlvbiAoZW1pdCwgaWQpIHtcbiAgICB0aGlzLnRlYXJkb3duKGlkKTtcbiAgfS5iaW5kKHRoaXMpKTtcblxuICB0aGlzLmVtaXQoJ2Nsb3NlJyk7XG4gIHRoaXMub2ZmKCk7XG5cbiAgdGhpcy5lbWl0Q2hhbm5lbCA9IG51bGw7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgdGV4dHVhbCBkZXNjcmlwdGlvbiBvZiB0aGlzIHBvcnQuXG4gKiBAbWV0aG9kIHRvU3RyaW5nXG4gKiBAcmV0dXJuIFRoZSBkZXNjcmlwdGlvbiBvZiB0aGlzIHBvcnQuXG4gKi9cbkNvbnN1bWVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuZW1pdENoYW5uZWwpIHtcbiAgICByZXR1cm4gXCJbQ29uc3VtZXIgXCIgKyB0aGlzLmVtaXRDaGFubmVsICsgXCJdXCI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFwiW3VuYm91bmQgQ29uc3VtZXJdXCI7XG4gIH1cbn07XG5cbi8qKlxuICogR2V0IHRoZSBuZXh0IElEIGZvciBhbiBhcGkgY2hhbm5lbC5cbiAqIEBtZXRob2QgbmV4dElkXG4gKiBAc3RhdGljXG4gKiBAcHJpdmF0ZVxuICovXG5Db25zdW1lci5uZXh0SWQgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghQ29uc3VtZXIuaWQpIHtcbiAgICBDb25zdW1lci5pZCA9IDE7XG4gIH1cbiAgcmV0dXJuIChDb25zdW1lci5pZCArPSAxKTtcbn07XG5cbi8qKlxuICogQ29udmVydCBhIHN0cnVjdHVyZWQgZGF0YSBzdHJ1Y3R1cmUgaW50byBhIG1lc3NhZ2Ugc3RyZWFtIGNvbmZvcm1pbmcgdG9cbiAqIGEgdGVtcGxhdGUgYW5kIGFuIGFycmF5IG9mIGJpbmFyeSBkYXRhIGVsZW1lbnRzLlxuICogQHN0YXRpY1xuICogQG1ldGhvZCBtZXNzYWdlVG9Qb3J0YWJsZVxuICogQHBhcmFtIHtPYmplY3R9IHRlbXBsYXRlIFRoZSB0ZW1wbGF0ZSB0byBjb25mb3JtIHRvXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgVGhlIGluc3RhbmNlIG9mIHRoZSBkYXRhIHN0cnVjdHVyZSB0byBjb25mcm9tXG4gKiBAcGFyYW0ge0RlYnVnfSBkZWJ1ZyBBIGRlYnVnZ2VyIGZvciBlcnJvcnMuXG4gKiBAcmV0dXJuIHt7dGV4dDogT2JqZWN0LCBiaW5hcnk6IEFycmF5fX0gU2VwYXJhdGVkIGRhdGEgc3RyZWFtcy5cbiAqL1xuQ29uc3VtZXIubWVzc2FnZVRvUG9ydGFibGUgPSBmdW5jdGlvbiAodGVtcGxhdGUsIHZhbHVlLCBkZWJ1Zykge1xuICB2YXIgZXh0ZXJuYWxzID0gW10sXG4gICAgbWVzc2FnZSA9IENvbnN1bWVyLmNvbmZvcm0odGVtcGxhdGUsIHZhbHVlLCBleHRlcm5hbHMsIHRydWUsIGRlYnVnKTtcbiAgcmV0dXJuIHtcbiAgICB0ZXh0OiBtZXNzYWdlLFxuICAgIGJpbmFyeTogZXh0ZXJuYWxzXG4gIH07XG59O1xuXG4vKipcbiAqIENvbnZlcnQgU3RydWN0dXJlZCBEYXRhIHN0cmVhbXMgaW50byBhIGRhdGEgc3RydWN0dXJlIGNvbmZvcm1pbmcgdG8gYVxuICogdGVtcGxhdGUuXG4gKiBAc3RhdGljXG4gKiBAbWV0aG9kIHBvcnRhYmxlVG9NZXNzYWdlXG4gKiBAcGFyYW0ge09iamVjdH0gdGVtcGxhdGUgVGhlIHRlbXBsYXRlIHRvIGNvbmZvcm0gdG9cbiAqIEBwYXJhbSB7e3RleHQ6IE9iamVjdCwgYmluYXJ5OiBBcnJheX19IHN0cmVhbXMgVGhlIHN0cmVhbXMgdG8gY29uZm9ybVxuICogQHBhcmFtIHtEZWJ1Z30gZGVidWcgQSBkZWJ1Z2dlciBmb3IgZXJyb3JzLlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgZGF0YSBzdHJ1Y3R1cmUgbWF0Y2hpbmcgdGhlIHRlbXBsYXRlLlxuICovXG5Db25zdW1lci5wb3J0YWJsZVRvTWVzc2FnZSA9IGZ1bmN0aW9uICh0ZW1wbGF0ZSwgc3RyZWFtcywgZGVidWcpIHtcbiAgcmV0dXJuIENvbnN1bWVyLmNvbmZvcm0odGVtcGxhdGUsIHN0cmVhbXMudGV4dCwgc3RyZWFtcy5iaW5hcnksIGZhbHNlLCBkZWJ1Zyk7XG59O1xuXG4vKipcbiAqIEZvcmNlIGEgY29sbGVjdGlvbiBvZiB2YWx1ZXMgdG8gbG9vayBsaWtlIHRoZSB0eXBlcyBhbmQgbGVuZ3RoIG9mIGFuIEFQSVxuICogdGVtcGxhdGUuXG4gKiBAc3RhdGljXG4gKiBAbWV0aG9kIGNvbmZvcm1cbiAqIEBwYXJhbSB7T2JqZWN0fSB0ZW1wbGF0ZSBUaGUgdGVtcGxhdGUgdG8gY29uZm9ybSB0b1xuICogQHBhcmFtIHtPYmplY3R9IGZyb20gVGhlIHZhbHVlIHRvIGNvbmZvcm1cbiAqIEBwYXJhbSB7QXJyYXl9IGV4dGVybmFscyBMaXN0aW5nIG9mIGJpbmFyeSBlbGVtZW50cyBpbiB0aGUgdGVtcGxhdGVcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gV2hldGhlciB0byB0byBzZXBhcmF0ZSBvciBjb21iaW5lIHN0cmVhbXMuXG4gKiBAYXBhcmFtIHtEZWJ1Z30gZGVidWcgQSBkZWJ1Z2dlciBmb3IgZXJyb3JzLlxuICovXG5Db25zdW1lci5jb25mb3JtID0gZnVuY3Rpb24gKHRlbXBsYXRlLCBmcm9tLCBleHRlcm5hbHMsIHNlcGFyYXRlLCBkZWJ1Zykge1xuICAvKiBqc2hpbnQgLVcwODYgKi9cbiAgaWYgKHR5cGVvZiAoZnJvbSkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvL2Zyb20gPSB1bmRlZmluZWQ7XG4gICAgLy90aHJvdyBcIlRyeWluZyB0byBjb25mb3JtIGEgZnVuY3Rpb25cIjtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9IGVsc2UgaWYgKHR5cGVvZiAoZnJvbSkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSBlbHNlIGlmIChmcm9tID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSBpZiAodGVtcGxhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgIGRlYnVnLmVycm9yKFwiTWVzc2FnZSBkaXNjYXJkZWQgZm9yIG5vdCBtYXRjaGluZyBkZWNsYXJlZCB0eXBlIVwiLCBmcm9tKTtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgc3dpdGNoICh0ZW1wbGF0ZSkge1xuICBjYXNlICdzdHJpbmcnOlxuICAgIHJldHVybiBTdHJpbmcoJycpICsgZnJvbTtcbiAgY2FzZSAnbnVtYmVyJzpcbiAgICByZXR1cm4gTnVtYmVyKDEpICogZnJvbTtcbiAgY2FzZSAnYm9vbGVhbic6XG4gICAgcmV0dXJuIEJvb2xlYW4oZnJvbSA9PT0gdHJ1ZSk7XG4gIGNhc2UgJ29iamVjdCc6XG4gICAgLy8gVE9ETyh3aWxsc2NvdHQpOiBBbGxvdyByZW1vdmFsIGlmIHNhbmRib3hpbmcgZW5mb3JjZXMgdGhpcy5cbiAgICBpZiAodHlwZW9mIGZyb20gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShmcm9tKSk7XG4gICAgfVxuICBjYXNlICdibG9iJzpcbiAgICBpZiAoc2VwYXJhdGUpIHtcbiAgICAgIGlmIChmcm9tIGluc3RhbmNlb2YgQmxvYikge1xuICAgICAgICBleHRlcm5hbHMucHVzaChmcm9tKTtcbiAgICAgICAgcmV0dXJuIGV4dGVybmFscy5sZW5ndGggLSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVidWcuZXJyb3IoJ2NvbmZvcm0gZXhwZWN0aW5nIEJsb2IsIGJ1dCBzYXcgJyArICh0eXBlb2YgZnJvbSkpO1xuICAgICAgICBleHRlcm5hbHMucHVzaChuZXcgQmxvYihbXSkpO1xuICAgICAgICByZXR1cm4gZXh0ZXJuYWxzLmxlbmd0aCAtIDE7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBleHRlcm5hbHNbZnJvbV07XG4gICAgfVxuICBjYXNlICdidWZmZXInOlxuICAgIGlmIChzZXBhcmF0ZSkge1xuICAgICAgZXh0ZXJuYWxzLnB1c2goQ29uc3VtZXIubWFrZUFycmF5QnVmZmVyKGZyb20sIGRlYnVnKSk7XG4gICAgICByZXR1cm4gZXh0ZXJuYWxzLmxlbmd0aCAtIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBDb25zdW1lci5tYWtlQXJyYXlCdWZmZXIoZXh0ZXJuYWxzW2Zyb21dLCBkZWJ1Zyk7XG4gICAgfVxuICBjYXNlICdwcm94eSc6XG4gICAgcmV0dXJuIGZyb207XG4gIH1cbiAgdmFyIHZhbCwgaTtcbiAgaWYgKEFycmF5LmlzQXJyYXkodGVtcGxhdGUpICYmIGZyb20gIT09IHVuZGVmaW5lZCkge1xuICAgIHZhbCA9IFtdO1xuICAgIGkgPSAwO1xuICAgIGlmICh0ZW1wbGF0ZS5sZW5ndGggPT09IDIgJiYgdGVtcGxhdGVbMF0gPT09ICdhcnJheScpIHtcbiAgICAgIC8vY29uc29sZS5sb2coXCJ0ZW1wbGF0ZSBpcyBhcnJheSwgdmFsdWUgaXMgXCIgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGZyb20ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdmFsLnB1c2goQ29uc3VtZXIuY29uZm9ybSh0ZW1wbGF0ZVsxXSwgZnJvbVtpXSwgZXh0ZXJuYWxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcGFyYXRlLCBkZWJ1ZykpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgdGVtcGxhdGUubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGZyb21baV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHZhbC5wdXNoKENvbnN1bWVyLmNvbmZvcm0odGVtcGxhdGVbaV0sIGZyb21baV0sIGV4dGVybmFscyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcGFyYXRlLCBkZWJ1ZykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbC5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbDtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdGVtcGxhdGUgPT09ICdvYmplY3QnICYmIGZyb20gIT09IHVuZGVmaW5lZCkge1xuICAgIHZhbCA9IHt9O1xuICAgIHV0aWwuZWFjaFByb3AodGVtcGxhdGUsIGZ1bmN0aW9uIChwcm9wLCBuYW1lKSB7XG4gICAgICBpZiAoZnJvbVtuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhbFtuYW1lXSA9IENvbnN1bWVyLmNvbmZvcm0ocHJvcCwgZnJvbVtuYW1lXSwgZXh0ZXJuYWxzLCBzZXBhcmF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWJ1Zyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuICBkZWJ1Zy5lcnJvcignVW5rbm93biB0ZW1wbGF0ZSBwcm92aWRlZDogJyArIHRlbXBsYXRlKTtcbn07XG5cbi8qKlxuICogTWFrZSBhIHRoaW5nIGludG8gYW4gQXJyYXkgQnVmZmVyXG4gKiBAc3RhdGljXG4gKiBAbWV0aG9kIG1ha2VBcnJheUJ1ZmZlclxuICogQHBhcmFtIHtPYmplY3R9IHRoaW5nXG4gKiBAcGFyYW0ge0RlYnVnfSBkZWJ1ZyBBIGRlYnVnZ2VyIGluIGNhc2Ugb2YgZXJyb3JzLlxuICogQHJldHVybiB7QXJyYXlCdWZmZXJ9IEFuIEFycmF5IEJ1ZmZlclxuICovXG5Db25zdW1lci5tYWtlQXJyYXlCdWZmZXIgPSBmdW5jdGlvbiAodGhpbmcsIGRlYnVnKSB7XG4gIGlmICghdGhpbmcpIHtcbiAgICByZXR1cm4gbmV3IEFycmF5QnVmZmVyKDApO1xuICB9XG5cbiAgaWYgKHRoaW5nIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm4gdGhpbmc7XG4gIH0gZWxzZSBpZiAodGhpbmcuY29uc3RydWN0b3IubmFtZSA9PT0gXCJBcnJheUJ1ZmZlclwiICYmXG4gICAgICB0eXBlb2YgdGhpbmcucHJvdG90eXBlID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgLy8gV29ya2Fyb3VuZCBmb3Igd2Via2l0IG9yaWdpbiBvd25lcnNoaXAgaXNzdWUuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL1VXTmV0d29ya3NMYWIvZnJlZWRvbS9pc3N1ZXMvMjhcbiAgICByZXR1cm4gbmV3IERhdGFWaWV3KHRoaW5nKS5idWZmZXI7XG4gIH0gZWxzZSB7XG4gICAgZGVidWcuZXJyb3IoJ2V4cGVjdGluZyBBcnJheUJ1ZmZlciwgYnV0IHNhdyAnICtcbiAgICAgICAgKHR5cGVvZiB0aGluZykgKyAnOiAnICsgSlNPTi5zdHJpbmdpZnkodGhpbmcpKTtcbiAgICByZXR1cm4gbmV3IEFycmF5QnVmZmVyKDApO1xuICB9XG59O1xuXG4vKipcbiAqIFJlY3Vyc2l2ZWx5IHRyYXZlcnNlIGEgW25lc3RlZF0gb2JqZWN0IGFuZCBmcmVlemUgaXRzIGtleXMgZnJvbSBiZWluZ1xuICogd3JpdGFibGUuIE5vdGUsIHRoZSByZXN1bHQgY2FuIGhhdmUgbmV3IGtleXMgYWRkZWQgdG8gaXQsIGJ1dCBleGlzdGluZyBvbmVzXG4gKiBjYW5ub3QgYmUgIG92ZXJ3cml0dGVuLiBEb2Vzbid0IGRvIGFueXRoaW5nIGZvciBhcnJheXMgb3Igb3RoZXIgY29sbGVjdGlvbnMuXG4gKlxuICogQG1ldGhvZCByZWN1cnNpdmVGcmVlemVPYmplY3RcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSBvYmplY3QgdG8gYmUgZnJvemVuXG4gKiBAcmV0dXJuIHtPYmplY3R9IG9ialxuICoqL1xuQ29uc3VtZXIucmVjdXJzaXZlRnJlZXplT2JqZWN0ID0gZnVuY3Rpb24gKG9iaikge1xuICB2YXIgaywgcmV0ID0ge307XG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBvYmo7XG4gIH1cbiAgZm9yIChrIGluIG9iaikge1xuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXQsIGssIHtcbiAgICAgICAgdmFsdWU6IENvbnN1bWVyLnJlY3Vyc2l2ZUZyZWV6ZU9iamVjdChvYmpba10pLFxuICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmV0O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb25zdW1lcjtcbiIsIi8qanNsaW50IGluZGVudDoyLCBub2RlOnRydWUsIHNsb3BweTp0cnVlICovXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG4vKipcbiAqIEEgZnJlZWRvbSBlbnRyeSBwb2ludCBmb3IgZGVidWdnaW5nLlxuICogQHVzZXMgaGFuZGxlRXZlbnRzXG4gKiBAaW1wbGVtZW50cyBQb3J0XG4gKiBAY29uc3RydWN0b3JcbiAqL1xudmFyIERlYnVnID0gZnVuY3Rpb24gKGxvZ2dlcikge1xuICB0aGlzLmlkID0gJ2RlYnVnJztcbiAgdGhpcy5lbWl0Q2hhbm5lbCA9IGZhbHNlO1xuICB0aGlzLmNvbmZpZyA9IGZhbHNlO1xuICB1dGlsLmhhbmRsZUV2ZW50cyh0aGlzKTtcbn07XG5cbi8qKlxuICogUHJvdmlkZSBhIHRleHR1YWwgZGVzY3JpcHRpb24gb2YgdGhpcyBwb3J0LlxuICogQG1ldGhvZCB0b1N0cmluZ1xuICogQHJldHVybiB7U3RyaW5nfSB0aGUgdGV4dHVhbCBkZXNjcmlwdGlvbi5cbiAqL1xuRGVidWcucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJ1tDb25zb2xlXSc7XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIGEgbG9nZ2VyIGZvciBvdXRwdXR0aW5nIGRlYnVnZ2luZyBtZXNzYWdlcy5cbiAqIEBtZXRob2Qgc2V0TG9nZ2VyXG4gKiBAcGFyYW0ge0NvbnNvbGV9IGxvZ2dlciBUaGUgbG9nZ2VyIHRvIHJlZ2lzdGVyXG4gKi9cbkRlYnVnLnByb3RvdHlwZS5zZXRMb2dnZXIgPSBmdW5jdGlvbiAobG9nZ2VyKSB7XG4gIGlmICh0aGlzLmxvZ2dlcikge1xuICAgIHRoaXMuaW5mbygnUmVwbGFjaW5nIExvZ2dlci4nKTtcbiAgfVxuICB0aGlzLmxvZ2dlciA9IGxvZ2dlcjtcbiAgdGhpcy5lbWl0KCdsb2dnZXInKTtcbn07XG5cbi8qKlxuICogSGFuZGxlciBmb3IgcmVjZWl2aW5nIG1lc3NhZ2VzIHNlbnQgdG8gdGhlIGRlYnVnIHBvcnQuXG4gKiBUaGVzZSBtZXNzYWdlcyBhcmUgdXNlZCB0byByZXRyZWl2ZSBjb25maWcgZm9yIGV4cG9zaW5nIGNvbnNvbGUuXG4gKiBAbWV0aG9kIG9uTWVzc2FnZVxuICogQHBhcmFtIHtTdHJpbmd9IHNvdXJjZSB0aGUgc291cmNlIGlkZW50aWZpZXIgZm9yIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2UgdGhlIHJlY2VpdmVkIG1lc3NhZ2UuXG4gKi9cbkRlYnVnLnByb3RvdHlwZS5vbk1lc3NhZ2UgPSBmdW5jdGlvbiAoc291cmNlLCBtZXNzYWdlKSB7XG4gIGlmIChzb3VyY2UgPT09ICdjb250cm9sJyAmJiBtZXNzYWdlLmNoYW5uZWwgJiYgIXRoaXMuZW1pdENoYW5uZWwpIHtcbiAgICB0aGlzLmVtaXRDaGFubmVsID0gbWVzc2FnZS5jaGFubmVsO1xuICAgIHRoaXMuY29uZmlnID0gbWVzc2FnZS5jb25maWc7XG4gICAgaWYgKCF0aGlzLmNvbmZpZy5nbG9iYWwuY29uc29sZSkge1xuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLmNvbmZpZy5nbG9iYWwuY29uc29sZSA9IGNvbnNvbGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbmZpZy5nbG9iYWwuY29uc29sZSA9IHRoaXMuZ2V0TG9nZ2VyKCdDb25zb2xlJyk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZW1pdCgncmVhZHknKTtcbiAgfVxufTtcblxuLyoqXG4gKiBEaXNwYXRjaCBhIGRlYnVnIG1lc3NhZ2Ugd2l0aCBhcmJpdHJhcnkgc2V2ZXJpdHkuXG4gKiBBbGwgZGVidWcgbWVzc2FnZXMgYXJlIHJvdXRlZCB0aHJvdWdoIHRoZSBtYW5hZ2VyLCB0byBhbGxvdyBmb3IgZGVsZWdhdGlvbi5cbiAqIEBtZXRob2QgZm9ybWF0XG4gKiBAcGFyYW0ge1N0cmluZ30gc2V2ZXJpdHkgdGhlIHNldmVyaXR5IG9mIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtTdHJpbmd9IHNvdXJjZSBUaGUgbG9jYXRpb24gb2YgbWVzc2FnZS5cbiAqIEBwYXJhbSB7U3RyaW5nW119IGFyZ3MgVGhlIGNvbnRlbnRzIG9mIHRoZSBtZXNzYWdlLlxuICogQHByaXZhdGVcbiAqL1xuRGVidWcucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uIChzZXZlcml0eSwgc291cmNlLCBhcmdzKSB7XG4gIHZhciBpLCBhbGlzdCA9IFtdLCBhcmdhcnI7XG4gIGlmICh0eXBlb2YgYXJncyA9PT0gXCJzdHJpbmdcIiAmJiBzb3VyY2UpIHtcbiAgICB0cnkge1xuICAgICAgYXJnYXJyID0gSlNPTi5wYXJzZShhcmdzKTtcbiAgICAgIGlmIChhcmdhcnIgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBhcmdzID0gYXJnYXJyO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIHBhc3MuXG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiBhcmdzID09PSBcInN0cmluZ1wiKSB7XG4gICAgYWxpc3QucHVzaChhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgYWxpc3QucHVzaChhcmdzW2ldKTtcbiAgICB9XG4gIH1cbiAgaWYgKCF0aGlzLmVtaXRDaGFubmVsKSB7XG4gICAgdGhpcy5vbigncmVhZHknLCB0aGlzLmZvcm1hdC5iaW5kKHRoaXMsIHNldmVyaXR5LCBzb3VyY2UsIGFsaXN0KSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMuZW1pdCh0aGlzLmVtaXRDaGFubmVsLCB7XG4gICAgc2V2ZXJpdHk6IHNldmVyaXR5LFxuICAgIHNvdXJjZTogc291cmNlLFxuICAgIHF1aWV0OiB0cnVlLFxuICAgIHJlcXVlc3Q6ICdkZWJ1ZycsXG4gICAgbXNnOiBKU09OLnN0cmluZ2lmeShhbGlzdClcbiAgfSk7XG59O1xuXG4vKipcbiAqIFByaW50IHJlY2VpdmVkIG1lc3NhZ2VzIG9uIHRoZSBjb25zb2xlLlxuICogVGhpcyBpcyBjYWxsZWQgYnkgdGhlIG1hbmFnZXIgaW4gcmVzcG9uc2UgdG8gYW4gZW1pc3Npb24gZnJvbSBmb3JtYXQuXG4gKiBAbWV0aG9kIHByaW50XG4gKiBAcGFyYW0ge09iamVjdH0gbWVzc2FnZSBUaGUgbWVzc2FnZSBlbWl0dGVkIGJ5IHtAc2VlIGZvcm1hdH0gdG8gcHJpbnQuXG4gKi9cbkRlYnVnLnByb3RvdHlwZS5wcmludCA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gIGlmICghdGhpcy5sb2dnZXIpIHtcbiAgICB0aGlzLm9uY2UoJ2xvZ2dlcicsIHRoaXMucHJpbnQuYmluZCh0aGlzLCBtZXNzYWdlKSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGFyZ3MsIGFyciA9IFtdLCBpID0gMDtcbiAgYXJncyA9IEpTT04ucGFyc2UobWVzc2FnZS5tc2cpO1xuICBpZiAodHlwZW9mIGFyZ3MgPT09IFwic3RyaW5nXCIpIHtcbiAgICBhcnIucHVzaChhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoYXJnc1tpXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBhcnIucHVzaChhcmdzW2ldKTtcbiAgICAgIGkgKz0gMTtcbiAgICB9XG4gIH1cbiAgdGhpcy5sb2dnZXJbbWVzc2FnZS5zZXZlcml0eV0uY2FsbCh0aGlzLmxvZ2dlciwgbWVzc2FnZS5zb3VyY2UsIGFyciwgZnVuY3Rpb24gKCkge30pO1xufTtcblxuLyoqXG4gKiBQcmludCBhIGxvZyBtZXNzYWdlIHRvIHRoZSBjb25zb2xlLlxuICogQG1ldGhvZCBsb2dcbiAqL1xuRGVidWcucHJvdG90eXBlLmxvZyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5mb3JtYXQoJ2xvZycsIHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogUHJpbnQgYW4gaW5mbyBtZXNzYWdlIHRvIHRoZSBjb25zb2xlLlxuICogQG1ldGhvZCBsb2dcbiAqL1xuRGVidWcucHJvdG90eXBlLmluZm8gPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZm9ybWF0KCdpbmZvJywgdW5kZWZpbmVkLCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBQcmludCBhIGRlYnVnIG1lc3NhZ2UgdG8gdGhlIGNvbnNvbGUuXG4gKiBAbWV0aG9kIGxvZ1xuICovXG5EZWJ1Zy5wcm90b3R5cGUuZGVidWcgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZm9ybWF0KCdkZWJ1ZycsIHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogUHJpbnQgYSB3YXJuaW5nIG1lc3NhZ2UgdG8gdGhlIGNvbnNvbGUuXG4gKiBAbWV0aG9kIHdhcm5cbiAqL1xuRGVidWcucHJvdG90eXBlLndhcm4gPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZm9ybWF0KCd3YXJuJywgdW5kZWZpbmVkLCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBQcmludCBhbiBlcnJvciBtZXNzYWdlIHRvIHRoZSBjb25zb2xlLlxuICogQG1ldGhvZCBlcnJvclxuICovXG5EZWJ1Zy5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZm9ybWF0KCdlcnJvcicsIHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogR2V0IGEgbG9nZ2VyIHRoYXQgbG9ncyBtZXNzYWdlcyBwcmVmaXhlZCBieSBhIGdpdmVuIG5hbWUuXG4gKiBAbWV0aG9kIGdldExvZ2dlclxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIHByZWZpeCBmb3IgbG9nZ2VkIG1lc3NhZ2VzLlxuICogQHJldHVybnMge0NvbnNvbGV9IEEgY29uc29sZS1saWtlIG9iamVjdC5cbiAqL1xuRGVidWcucHJvdG90eXBlLmdldExvZ2dlciA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciBsb2cgPSBmdW5jdGlvbiAoc2V2ZXJpdHksIHNvdXJjZSkge1xuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNwbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gICAgdGhpcy5mb3JtYXQoc2V2ZXJpdHksIHNvdXJjZSwgYXJncyk7XG4gIH0sXG4gICAgbG9nZ2VyID0ge1xuICAgICAgZnJlZWRvbTogdHJ1ZSxcbiAgICAgIGRlYnVnOiBsb2cuYmluZCh0aGlzLCAnZGVidWcnLCBuYW1lKSxcbiAgICAgIGluZm86IGxvZy5iaW5kKHRoaXMsICdpbmZvJywgbmFtZSksXG4gICAgICBsb2c6IGxvZy5iaW5kKHRoaXMsICdsb2cnLCBuYW1lKSxcbiAgICAgIHdhcm46IGxvZy5iaW5kKHRoaXMsICd3YXJuJywgbmFtZSksXG4gICAgICBlcnJvcjogbG9nLmJpbmQodGhpcywgJ2Vycm9yJywgbmFtZSlcbiAgICB9O1xuICByZXR1cm4gbG9nZ2VyO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBEZWJ1ZztcbiIsIi8qanNsaW50IGluZGVudDoyLG5vZGU6dHJ1ZSAqL1xyXG52YXIgUHJvbWlzZUNvbXBhdCA9IHJlcXVpcmUoJ2VzNi1wcm9taXNlJykuUHJvbWlzZTtcclxuXHJcbnZhciBBcGkgPSByZXF1aXJlKCcuL2FwaScpO1xyXG52YXIgRGVidWcgPSByZXF1aXJlKCcuL2RlYnVnJyk7XHJcbnZhciBIdWIgPSByZXF1aXJlKCcuL2h1YicpO1xyXG52YXIgTWFuYWdlciA9IHJlcXVpcmUoJy4vbWFuYWdlcicpO1xyXG52YXIgUG9saWN5ID0gcmVxdWlyZSgnLi9wb2xpY3knKTtcclxudmFyIFByb3h5QmluZGVyID0gcmVxdWlyZSgnLi9wcm94eWJpbmRlcicpO1xyXG52YXIgUmVzb3VyY2UgPSByZXF1aXJlKCcuL3Jlc291cmNlJyk7XHJcbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XHJcbnZhciBCdW5kbGUgPSByZXF1aXJlKCcuL2J1bmRsZScpO1xyXG5cclxudmFyIGZyZWVkb21HbG9iYWw7XHJcbnZhciBnZXRHbG9iYWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG4gIFxyXG4gIC8vIE5vZGUuanNcclxuICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsLnByb3RvdHlwZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICBmcmVlZG9tR2xvYmFsID0gZ2xvYmFsO1xyXG4gIC8vIEJyb3dzZXJzXHJcbiAgfSBlbHNlIHtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICBmcmVlZG9tR2xvYmFsID0gdGhpcztcclxuICAgIH0sIDApO1xyXG4gIH1cclxufTtcclxuZ2V0R2xvYmFsKCk7XHJcblxyXG4vKipcclxuICogQ3JlYXRlIGEgbmV3IGZyZWVkb20gY29udGV4dC5cclxuICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHQgSW5mb3JtYXRpb24gYWJvdXQgdGhlIGxvY2FsIGNvbnRleHQuXHJcbiAqIEBzZWUge3V0aWwvd29ya2VyRW50cnkuanN9XHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBtYW5pZmVzdCBUaGUgbWFuaWZlc3QgdG8gbG9hZC5cclxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBDb25maWd1cmF0aW9uIGtleXMgc2V0IGJ5IHRoZSB1c2VyLlxyXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gQSBwcm9taXNlIGZvciB0aGUgbW9kdWxlIGRlZmluZWQgaW4gdGhlIG1hbmlmZXN0LlxyXG4gKi9cclxudmFyIHNldHVwID0gZnVuY3Rpb24gKGNvbnRleHQsIG1hbmlmZXN0LCBjb25maWcpIHtcclxuICAndXNlIHN0cmljdCc7XHJcbiAgdmFyIGRlYnVnID0gbmV3IERlYnVnKCksXHJcbiAgICBodWIgPSBuZXcgSHViKGRlYnVnKSxcclxuICAgIHJlc291cmNlID0gbmV3IFJlc291cmNlKGRlYnVnKSxcclxuICAgIGFwaSA9IG5ldyBBcGkoZGVidWcpLFxyXG4gICAgbWFuYWdlciA9IG5ldyBNYW5hZ2VyKGh1YiwgcmVzb3VyY2UsIGFwaSksXHJcbiAgICBiaW5kZXIgPSBuZXcgUHJveHlCaW5kZXIobWFuYWdlciksXHJcbiAgICBwb2xpY3ksXHJcbiAgICBzaXRlX2NmZyA9IHtcclxuICAgICAgJ2RlYnVnJzogJ2xvZycsXHJcbiAgICAgICdtYW5pZmVzdCc6IG1hbmlmZXN0LFxyXG4gICAgICAnbW9kdWxlQ29udGV4dCc6ICghY29udGV4dCB8fCB0eXBlb2YgKGNvbnRleHQuaXNNb2R1bGUpID09PSBcInVuZGVmaW5lZFwiKSA/XHJcbiAgICAgICAgICB1dGlsLmlzTW9kdWxlQ29udGV4dCgpIDpcclxuICAgICAgICAgIGNvbnRleHQuaXNNb2R1bGVcclxuICAgIH0sXHJcbiAgICBsaW5rLFxyXG4gICAgUG9ydCxcclxuICAgIGNsZWFudXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGFwaS5jbGVhbnVwKCk7XHJcbiAgICAgIG1hbmFnZXIuZGVzdHJveSgpO1xyXG4gICAgfTtcclxuXHJcbiAgaWYgKGNvbmZpZykge1xyXG4gICAgdXRpbC5taXhpbihzaXRlX2NmZywgY29uZmlnLCB0cnVlKTtcclxuICB9XHJcbiAgc2l0ZV9jZmcuZ2xvYmFsID0gZnJlZWRvbUdsb2JhbDtcclxuICBpZiAoY29udGV4dCkge1xyXG4gICAgdXRpbC5taXhpbihzaXRlX2NmZywgY29udGV4dCwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICAvLyBSZWdpc3RlciB1c2VyLXN1cHBsaWVkIGV4dGVuc2lvbnMuXHJcbiAgLy8gRm9yIGV4YW1wbGUgdGhlICdjb3JlLm9hdXRoJyBwcm92aWRlciBkZWZpbmVzIGEgcmVnaXN0ZXIgZnVuY3Rpb24sXHJcbiAgLy8gd2hpY2ggZW5hYmxlcyBzaXRlX2NmZy5vYXV0aCB0byBiZSByZWdpc3RlcmVkIHdpdGggaXQuXHJcbiAgY29udGV4dC5wcm92aWRlcnMuZm9yRWFjaChmdW5jdGlvbiAocHJvdmlkZXIpIHtcclxuICAgIHZhciBuYW1lO1xyXG4gICAgaWYgKHByb3ZpZGVyLm5hbWUuaW5kZXhPZignY29yZS4nKSA9PT0gMCAmJlxyXG4gICAgICAgIHR5cGVvZiBwcm92aWRlci5yZWdpc3RlciA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBuYW1lID0gcHJvdmlkZXIubmFtZS5zdWJzdHIoNSk7XHJcbiAgICAgIC8vIEludmVydCBwcmlvcml0eSBhbmQgcHJlZmVyIHVzZXIgY29uZmlnIG92ZXIgbG9jYWwgY29udGV4dCBmb3IgdGhlc2UuXHJcbiAgICAgIGlmIChjb25maWcgJiYgY29uZmlnW25hbWVdKSB7XHJcbiAgICAgICAgcHJvdmlkZXIucmVnaXN0ZXIoY29uZmlnW25hbWVdKTtcclxuICAgICAgfSBlbHNlIGlmIChzaXRlX2NmZ1tuYW1lXSkge1xyXG4gICAgICAgIHByb3ZpZGVyLnJlZ2lzdGVyKHNpdGVfY2ZnW25hbWVdKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwcm92aWRlci5yZWdpc3Rlcih1bmRlZmluZWQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgXHJcbiAgQnVuZGxlLnJlZ2lzdGVyKGNvbnRleHQucHJvdmlkZXJzLCBhcGkpO1xyXG4gIHJlc291cmNlLnJlZ2lzdGVyKGNvbnRleHQucmVzb2x2ZXJzIHx8IFtdKTtcclxuXHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ29tcGF0KGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgIGlmIChzaXRlX2NmZy5tb2R1bGVDb250ZXh0KSB7XHJcbiAgICAgIFBvcnQgPSBzaXRlX2NmZy5wb3J0VHlwZTtcclxuICAgICAgbGluayA9IG5ldyBQb3J0KCdPdXRib3VuZCcsIHJlc291cmNlKTtcclxuICAgICAgbWFuYWdlci5zZXR1cChsaW5rKTtcclxuXHJcbiAgICAgIC8vIERlbGF5IGRlYnVnIG1lc3NhZ2VzIHVudGlsIGRlbGVnYXRpb24gdG8gdGhlIHBhcmVudCBjb250ZXh0IGlzIHNldHVwLlxyXG4gICAgICBtYW5hZ2VyLm9uY2UoJ2RlbGVnYXRlJywgbWFuYWdlci5zZXR1cC5iaW5kKG1hbmFnZXIsIGRlYnVnKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtYW5hZ2VyLnNldHVwKGRlYnVnKTtcclxuICAgICAgcG9saWN5ID0gbmV3IFBvbGljeShtYW5hZ2VyLCByZXNvdXJjZSwgc2l0ZV9jZmcpO1xyXG5cclxuICAgICAgLy8gRGVmaW5lIGhvdyB0byBsb2FkIGEgcm9vdCBtb2R1bGUuXHJcbiAgICAgIHZhciBmYWxsYmFja0xvZ2dlciwgZ2V0SWZhY2U7XHJcbiAgICAgIGZhbGxiYWNrTG9nZ2VyID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICBhcGkuZ2V0Q29yZSgnY29yZS5jb25zb2xlJywge1xyXG4gICAgICAgICAgY29uZmlnOiBzaXRlX2NmZ1xyXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHByb3ZpZGVyKSB7XHJcbiAgICAgICAgICB2YXIgbG9nZ2VyID0gbmV3IHByb3ZpZGVyLmluc3QoKTtcclxuICAgICAgICAgIGRlYnVnLnNldExvZ2dlcihsb2dnZXIpO1xyXG4gICAgICAgICAgaWYgKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgZGVidWcuZXJyb3IobWVzc2FnZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcbiAgICAgIGdldElmYWNlID0gZnVuY3Rpb24gKG1hbmlmZXN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc291cmNlLmdldChzaXRlX2NmZy5sb2NhdGlvbiwgbWFuaWZlc3QpLnRoZW4oXHJcbiAgICAgICAgICBmdW5jdGlvbiAoY2Fub25pY2FsX21hbmlmZXN0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwb2xpY3kuZ2V0KFtdLCBjYW5vbmljYWxfbWFuaWZlc3QpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICkudGhlbihmdW5jdGlvbiAoaW5zdGFuY2UpIHtcclxuICAgICAgICAgIG1hbmFnZXIuc2V0dXAoaW5zdGFuY2UpO1xyXG4gICAgICAgICAgcmV0dXJuIGJpbmRlci5iaW5kRGVmYXVsdChpbnN0YW5jZSwgYXBpLCBpbnN0YW5jZS5tYW5pZmVzdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICAvLyBMb2FkIGFwcHJvcHJpYXRlIExvZ2dlci5cclxuICAgICAgaWYgKHNpdGVfY2ZnLmxvZ2dlcikge1xyXG4gICAgICAgIGdldElmYWNlKHNpdGVfY2ZnLmxvZ2dlcikudGhlbihmdW5jdGlvbiAoaWZhY2UpIHtcclxuICAgICAgICAgIGlmIChpZmFjZS5leHRlcm5hbC5hcGkgIT09ICdjb25zb2xlJykge1xyXG4gICAgICAgICAgICBmYWxsYmFja0xvZ2dlcihcIlVud2lsbGluZyB0byB1c2UgbG9nZ2VyIHdpdGggdW5rbm93biBBUEk6XCIsXHJcbiAgICAgICAgICAgICAgaWZhY2UuZXh0ZXJuYWwuYXBpKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRlYnVnLnNldExvZ2dlcihpZmFjZS5leHRlcm5hbCgpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCBmYWxsYmFja0xvZ2dlcik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZmFsbGJhY2tMb2dnZXIoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gTG9hZCByb290IG1vZHVsZS5cclxuICAgICAgZ2V0SWZhY2Uoc2l0ZV9jZmcubWFuaWZlc3QpLnRoZW4oZnVuY3Rpb24gKGlmYWNlKSB7XHJcbiAgICAgICAgaWZhY2UucG9ydC5vbmNlKCdjbG9zZScsIGNsZWFudXApO1xyXG4gICAgICAgIHJldHVybiBpZmFjZS5leHRlcm5hbDtcclxuICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgIGRlYnVnLmVycm9yKCdGYWlsZWQgdG8gcmV0cmlldmUgbWFuaWZlc3Q6ICcgKyBlcnIpO1xyXG4gICAgICAgIHRocm93IGVycjtcclxuICAgICAgfSkudGhlbihyZXNvbHZlLCByZWplY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGh1Yi5lbWl0KCdjb25maWcnLCBzaXRlX2NmZyk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHNldHVwO1xyXG4iLCIvKmpzbGludCBpbmRlbnQ6MixzbG9wcHk6dHJ1ZSxub2RlOnRydWUgKi9cclxudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcclxuXHJcbi8qKlxyXG4gKiBEZWZpbmVzIGZkb20uSHViLCB0aGUgY29yZSBtZXNzYWdlIGh1YiBiZXR3ZWVuIGZyZWVkb20gbW9kdWxlcy5cclxuICogSW5jb21taW5nIG1lc3NhZ2VzIGZyb20gYXBwcyBhcmUgc2VudCB0byBodWIub25NZXNzYWdlKClcclxuICogQGNsYXNzIEh1YlxyXG4gKiBAcGFyYW0ge0RlYnVnfSBkZWJ1ZyBMb2dnZXIgZm9yIGRlYnVnZ2luZy5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG52YXIgSHViID0gZnVuY3Rpb24gKGRlYnVnKSB7XHJcbiAgdGhpcy5kZWJ1ZyA9IGRlYnVnO1xyXG4gIHRoaXMuY29uZmlnID0ge307XHJcbiAgdGhpcy5hcHBzID0ge307XHJcbiAgdGhpcy5yb3V0ZXMgPSB7fTtcclxuXHJcbiAgdXRpbC5oYW5kbGVFdmVudHModGhpcyk7XHJcbiAgdGhpcy5vbignY29uZmlnJywgZnVuY3Rpb24gKGNvbmZpZykge1xyXG4gICAgdXRpbC5taXhpbih0aGlzLmNvbmZpZywgY29uZmlnKTtcclxuICB9LmJpbmQodGhpcykpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEhhbmRsZSBhbiBpbmNvbWluZyBtZXNzYWdlIGZyb20gYSBmcmVlZG9tIGFwcC5cclxuICogQG1ldGhvZCBvbk1lc3NhZ2VcclxuICogQHBhcmFtIHtTdHJpbmd9IHNvdXJjZSBUaGUgaWRlbnRpZml5aW5nIHNvdXJjZSBvZiB0aGUgbWVzc2FnZS5cclxuICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2UgVGhlIHNlbnQgbWVzc2FnZS5cclxuICovXHJcbkh1Yi5wcm90b3R5cGUub25NZXNzYWdlID0gZnVuY3Rpb24gKHNvdXJjZSwgbWVzc2FnZSkge1xyXG4gIHZhciBkZXN0aW5hdGlvbiA9IHRoaXMucm91dGVzW3NvdXJjZV0sIHR5cGU7XHJcbiAgaWYgKCFkZXN0aW5hdGlvbiB8fCAhZGVzdGluYXRpb24uYXBwKSB7XHJcbiAgICB0aGlzLmRlYnVnLndhcm4oXCJNZXNzYWdlIGRyb3BwZWQgZnJvbSB1bnJlZ2lzdGVyZWQgc291cmNlIFwiICsgc291cmNlKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmICghdGhpcy5hcHBzW2Rlc3RpbmF0aW9uLmFwcF0pIHtcclxuICAgIHRoaXMuZGVidWcud2FybihcIk1lc3NhZ2UgZHJvcHBlZCB0byBkZXN0aW5hdGlvbiBcIiArIGRlc3RpbmF0aW9uLmFwcCk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBUaGUgZmlyZWhvc2UgdHJhY2luZyBhbGwgaW50ZXJuYWwgZnJlZWRvbS5qcyBtZXNzYWdlcy5cclxuICBpZiAoIW1lc3NhZ2UucXVpZXQgJiYgIWRlc3RpbmF0aW9uLnF1aWV0ICYmIHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLnRyYWNlKSB7XHJcbiAgICB0eXBlID0gbWVzc2FnZS50eXBlO1xyXG4gICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ21lc3NhZ2UnICYmIG1lc3NhZ2UubWVzc2FnZSAmJlxyXG4gICAgICAgIG1lc3NhZ2UubWVzc2FnZS5hY3Rpb24gPT09ICdtZXRob2QnKSB7XHJcbiAgICAgIHR5cGUgPSAnbWV0aG9kLicgKyBtZXNzYWdlLm1lc3NhZ2UudHlwZTtcclxuICAgIH0gZWxzZSBpZiAobWVzc2FnZS50eXBlID09PSAnbWV0aG9kJyAmJiBtZXNzYWdlLm1lc3NhZ2UgJiZcclxuICAgICAgICBtZXNzYWdlLm1lc3NhZ2UudHlwZSA9PT0gJ21ldGhvZCcpIHtcclxuICAgICAgdHlwZSA9ICdyZXR1cm4uJyArIG1lc3NhZ2UubWVzc2FnZS5uYW1lO1xyXG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLnR5cGUgPT09ICdtZXNzYWdlJyAmJiBtZXNzYWdlLm1lc3NhZ2UgJiZcclxuICAgICAgICBtZXNzYWdlLm1lc3NhZ2UudHlwZSA9PT0gJ2V2ZW50Jykge1xyXG4gICAgICB0eXBlID0gJ2V2ZW50LicgKyBtZXNzYWdlLm1lc3NhZ2UubmFtZTtcclxuICAgIH1cclxuICAgIHRoaXMuZGVidWcuZGVidWcodGhpcy5hcHBzW2Rlc3RpbmF0aW9uLnNvdXJjZV0udG9TdHJpbmcoKSArXHJcbiAgICAgICAgXCIgLVwiICsgdHlwZSArIFwiLT4gXCIgK1xyXG4gICAgICAgIHRoaXMuYXBwc1tkZXN0aW5hdGlvbi5hcHBdLnRvU3RyaW5nKCkgKyBcIi5cIiArIGRlc3RpbmF0aW9uLmZsb3cpO1xyXG4gIH1cclxuXHJcbiAgdGhpcy5hcHBzW2Rlc3RpbmF0aW9uLmFwcF0ub25NZXNzYWdlKGRlc3RpbmF0aW9uLmZsb3csIG1lc3NhZ2UpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEdldCB0aGUgbG9jYWwgZGVzdGluYXRpb24gcG9ydCBvZiBhIGZsb3cuXHJcbiAqIEBtZXRob2QgZ2V0RGVzdGluYXRpb25cclxuICogQHBhcmFtIHtTdHJpbmd9IHNvdXJjZSBUaGUgZmxvdyB0byByZXRyaWV2ZS5cclxuICogQHJldHVybiB7UG9ydH0gVGhlIGRlc3RpbmF0aW9uIHBvcnQuXHJcbiAqL1xyXG5IdWIucHJvdG90eXBlLmdldERlc3RpbmF0aW9uID0gZnVuY3Rpb24gKHNvdXJjZSkge1xyXG4gIHZhciBkZXN0aW5hdGlvbiA9IHRoaXMucm91dGVzW3NvdXJjZV07XHJcbiAgaWYgKCFkZXN0aW5hdGlvbikge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIHJldHVybiB0aGlzLmFwcHNbZGVzdGluYXRpb24uYXBwXTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBHZXQgdGhlIGxvY2FsIHNvdXJjZSBwb3J0IG9mIGEgZmxvdy5cclxuICogQG1ldGhvZCBnZXRTb3VyY2VcclxuICogQHBhcmFtIHtQb3J0fSBzb3VyY2UgVGhlIGZsb3cgaWRlbnRpZmllciB0byByZXRyaWV2ZS5cclxuICogQHJldHVybiB7UG9ydH0gVGhlIHNvdXJjZSBwb3J0LlxyXG4gKi9cclxuSHViLnByb3RvdHlwZS5nZXRTb3VyY2UgPSBmdW5jdGlvbiAoc291cmNlKSB7XHJcbiAgaWYgKCFzb3VyY2UpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgaWYgKCF0aGlzLmFwcHNbc291cmNlLmlkXSkge1xyXG4gICAgdGhpcy5kZWJ1Zy53YXJuKFwiTm8gcmVnaXN0ZXJlZCBzb3VyY2UgJ1wiICsgc291cmNlLmlkICsgXCInXCIpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICByZXR1cm4gdGhpcy5hcHBzW3NvdXJjZS5pZF07XHJcbn07XHJcblxyXG4vKipcclxuICogUmVnaXN0ZXIgYSBkZXN0aW5hdGlvbiBmb3IgbWVzc2FnZXMgd2l0aCB0aGlzIGh1Yi5cclxuICogQG1ldGhvZCByZWdpc3RlclxyXG4gKiBAcGFyYW0ge1BvcnR9IGFwcCBUaGUgUG9ydCB0byByZWdpc3Rlci5cclxuICogQHBhcmFtIHtCb29sZWFufSBbZm9yY2VdIFdoZXRoZXIgdG8gb3ZlcnJpZGUgYW4gZXhpc3RpbmcgcG9ydC5cclxuICogQHJldHVybiB7Qm9vbGVhbn0gV2hldGhlciB0aGUgYXBwIHdhcyByZWdpc3RlcmVkLlxyXG4gKi9cclxuSHViLnByb3RvdHlwZS5yZWdpc3RlciA9IGZ1bmN0aW9uIChhcHAsIGZvcmNlKSB7XHJcbiAgaWYgKCF0aGlzLmFwcHNbYXBwLmlkXSB8fCBmb3JjZSkge1xyXG4gICAgdGhpcy5hcHBzW2FwcC5pZF0gPSBhcHA7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBEZXJlZ2lzdGVyIGEgZGVzdGluYXRpb24gZm9yIG1lc3NhZ2VzIHdpdGggdGhlIGh1Yi5cclxuICogTm90ZTogZG9lcyBub3QgcmVtb3ZlIGFzc29jaWF0ZWQgcm91dGVzLiBBcyBzdWNoLCBkZXJlZ2lzdGVyaW5nIHdpbGxcclxuICogcHJldmVudCB0aGUgaW5zdGFsbGF0aW9uIG9mIG5ldyByb3V0ZXMsIGJ1dCB3aWxsIG5vdCBkaXN0cnVwdCBleGlzdGluZ1xyXG4gKiBodWIgcm91dGVzLlxyXG4gKiBAbWV0aG9kIGRlcmVnaXN0ZXJcclxuICogQHBhcmFtIHtQb3J0fSBhcHAgVGhlIFBvcnQgdG8gZGVyZWdpc3RlclxyXG4gKiBAcmV0dXJuIHtCb29sZWFufSBXaGV0aGVyIHRoZSBhcHAgd2FzIGRlcmVnaXN0ZXJlZC5cclxuICovXHJcbkh1Yi5wcm90b3R5cGUuZGVyZWdpc3RlciA9IGZ1bmN0aW9uIChhcHApIHtcclxuICBpZiAoIXRoaXMuYXBwc1thcHAuaWRdKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGRlbGV0ZSB0aGlzLmFwcHNbYXBwLmlkXTtcclxuICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBJbnN0YWxsIGEgbmV3IHJvdXRlIGluIHRoZSBodWIuXHJcbiAqIEBtZXRob2QgaW5zdGFsbFxyXG4gKiBAcGFyYW0ge1BvcnR9IHNvdXJjZSBUaGUgc291cmNlIG9mIHRoZSByb3V0ZS5cclxuICogQHBhcmFtIHtQb3J0fSBkZXN0aW5hdGlvbiBUaGUgZGVzdGluYXRpb24gb2YgdGhlIHJvdXRlLlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZmxvdyBUaGUgZmxvdyB3aGVyZSB0aGUgZGVzdGluYXRpb24gd2lsbCByZWNlaXZlIG1lc3NhZ2VzLlxyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHF1aWV0IFdoZXRoZXIgbWVzc2FnZXMgb24gdGhpcyByb3V0ZSBzaG91bGQgYmUgc3VwcHJlc3NlZC5cclxuICogQHJldHVybiB7U3RyaW5nfSBBIHJvdXRpbmcgc291cmNlIGlkZW50aWZpZXIgZm9yIHNlbmRpbmcgbWVzc2FnZXMuXHJcbiAqL1xyXG5IdWIucHJvdG90eXBlLmluc3RhbGwgPSBmdW5jdGlvbiAoc291cmNlLCBkZXN0aW5hdGlvbiwgZmxvdywgcXVpZXQpIHtcclxuICBzb3VyY2UgPSB0aGlzLmdldFNvdXJjZShzb3VyY2UpO1xyXG4gIGlmICghc291cmNlKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmICghZGVzdGluYXRpb24pIHtcclxuICAgIHRoaXMuZGVidWcud2FybihcIlVud2lsbGluZyB0byBnZW5lcmF0ZSBibGFja2hvbGUgZmxvdyBmcm9tIFwiICsgc291cmNlLmlkKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHZhciByb3V0ZSA9IHRoaXMuZ2VuZXJhdGVSb3V0ZSgpO1xyXG4gIHRoaXMucm91dGVzW3JvdXRlXSA9IHtcclxuICAgIGFwcDogZGVzdGluYXRpb24sXHJcbiAgICBmbG93OiBmbG93LFxyXG4gICAgc291cmNlOiBzb3VyY2UuaWQsXHJcbiAgICBxdWlldDogcXVpZXRcclxuICB9O1xyXG4gIGlmICh0eXBlb2Ygc291cmNlLm9uID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICBzb3VyY2Uub24ocm91dGUsIHRoaXMub25NZXNzYWdlLmJpbmQodGhpcywgcm91dGUpKTtcclxuICB9XHJcblxyXG4gIHJldHVybiByb3V0ZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBVbmluc3RhbGwgYSBodWIgcm91dGUuXHJcbiAqIEBtZXRob2QgdW5pbnN0YWxsXHJcbiAqIEBwYXJhbSB7UG9ydH0gc291cmNlIFRoZSBzb3VyY2Ugb2YgdGhlIHJvdXRlLlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZmxvdyBUaGUgcm91dGUgdG8gdW5pbnN0YWxsLlxyXG4gKiBAcmV0dXJuIHtCb29sZWFufSBXaGV0aGVyIHRoZSByb3V0ZSB3YXMgYWJsZSB0byBiZSB1bmluc3RhbGxlZC5cclxuICovXHJcbkh1Yi5wcm90b3R5cGUudW5pbnN0YWxsID0gZnVuY3Rpb24gKHNvdXJjZSwgZmxvdykge1xyXG4gIHNvdXJjZSA9IHRoaXMuZ2V0U291cmNlKHNvdXJjZSk7XHJcbiAgaWYgKCFzb3VyY2UpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHZhciByb3V0ZSA9IHRoaXMucm91dGVzW2Zsb3ddO1xyXG4gIGlmICghcm91dGUpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9IGVsc2UgaWYgKHJvdXRlLnNvdXJjZSAhPT0gc291cmNlLmlkKSB7XHJcbiAgICB0aGlzLmRlYnVnLndhcm4oXCJGbG93IFwiICsgZmxvdyArIFwiIGRvZXMgbm90IGJlbG9uZyB0byBwb3J0IFwiICsgc291cmNlLmlkKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZSB0aGlzLnJvdXRlc1tmbG93XTtcclxuICBpZiAodHlwZW9mIHNvdXJjZS5vZmYgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIHNvdXJjZS5vZmYocm91dGUpO1xyXG4gIH1cclxuICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgYWxsIGxpc3RlbmVycyBhbmQgbm90aWZ5IGFsbCBjb25uZWN0ZWQgZGVzdGluYXRpb25zIG9mIHRoZWlyIHJlbW92YWwuXHJcbiAqIEBtZXRob2QgdGVhcmRvd25cclxuICovXHJcbkh1Yi5wcm90b3R5cGUudGVhcmRvd24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgdXRpbC5lYWNoUHJvcCh0aGlzLmFwcHMsIGZ1bmN0aW9uIChzb3VyY2UpIHtcclxuICAgIGlmICh0eXBlb2Ygc291cmNlLm9mZiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBzb3VyY2Uub2ZmKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgdGhpcy5hcHBzID0ge307XHJcbiAgdGhpcy5yb3V0ZXMgPSB7fTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBHZW5lcmF0ZSBhIHVuaXF1ZSByb3V0aW5nIGlkZW50aWZpZXIuXHJcbiAqIEBtZXRob2QgZ2VuZXJhdGVSb3V0ZVxyXG4gKiBAcmV0dXJuIHtTdHJpbmd9IGEgcm91dGluZyBzb3VyY2UgaWRlbnRpZmllci5cclxuICogQHByaXZhdGVcclxuICovXHJcbkh1Yi5wcm90b3R5cGUuZ2VuZXJhdGVSb3V0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gdXRpbC5nZXRJZCgpO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBIdWI7XHJcbiIsIi8qanNsaW50IGluZGVudDoyLCBub2RlOnRydWUsIHNsb3BweTp0cnVlICovXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG4vKipcbiAqIEEgbGluayBjb25uZWN0cyB0d28gZnJlZWRvbSBodWJzLiBUaGlzIGlzIGFuIGFic3RyYWN0IGNsYXNzXG4gKiBwcm92aWRpbmcgY29tbW9uIGZ1bmN0aW9uYWxpdHkgb2YgdHJhbnNsYXRpbmcgY29udHJvbCBjaGFubmVscyxcbiAqIGFuZCBpbnRlZ3JhdGluZyBjb25maWcgaW5mb3JtYXRpb24uXG4gKiBAY2xhc3MgTGlua1xuICogQGltcGxlbWVudHMgUG9ydFxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnZhciBMaW5rID0gZnVuY3Rpb24gKG5hbWUsIHJlc291cmNlKSB7XG4gIHRoaXMuaWQgPSAnTGluaycgKyBNYXRoLnJhbmRvbSgpO1xuICB0aGlzLm5hbWUgPSBuYW1lO1xuICB0aGlzLnJlc291cmNlID0gcmVzb3VyY2U7XG4gIHRoaXMuY29uZmlnID0ge307XG4gIHRoaXMuc3JjID0gbnVsbDtcblxuICB1dGlsLmhhbmRsZUV2ZW50cyh0aGlzKTtcbiAgdXRpbC5taXhpbih0aGlzLCBMaW5rLnByb3RvdHlwZSk7XG59O1xuXG4vKipcbiAqIFJlY2VpdmUgbWVzc2FnZXMgZnJvbSB0aGUgaHViIHRvIHRoaXMgcG9ydC5cbiAqIE1hbmFnZXMgc3RhcnR1cCwgYW5kIHBhc3NlcyBvdGhlcnMgdG8gJ2RlbGl2ZXJNZXNzYWdlJyBpbXBsZW1lbnRlZFxuICogaW4gZGVyaXZlZCBjbGFzc2VzLlxuICogQG1ldGhvZCBvbk1lc3NhZ2VcbiAqIEBwYXJhbSB7U3RyaW5nfSBmbG93IHRoZSBjaGFubmVsL2Zsb3cgb2YgdGhlIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gbWVzc2FnZSBUaGUgTWVzc2FnZS5cbiAqL1xuTGluay5wcm90b3R5cGUub25NZXNzYWdlID0gZnVuY3Rpb24gKGZsb3csIG1lc3NhZ2UpIHtcbiAgaWYgKGZsb3cgPT09ICdjb250cm9sJyAmJiAhdGhpcy5jb250cm9sQ2hhbm5lbCkge1xuICAgIGlmICghdGhpcy5jb250cm9sQ2hhbm5lbCAmJiBtZXNzYWdlLmNoYW5uZWwpIHtcbiAgICAgIHRoaXMuY29udHJvbENoYW5uZWwgPSBtZXNzYWdlLmNoYW5uZWw7XG4gICAgICB1dGlsLm1peGluKHRoaXMuY29uZmlnLCBtZXNzYWdlLmNvbmZpZyk7XG4gICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRoaXMuZGVsaXZlck1lc3NhZ2UoZmxvdywgbWVzc2FnZSk7XG4gIH1cbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgYSBoYW5kbGVyIHRvIGFsZXJ0IG9mIGVycm9ycyBvbiB0aGlzIHBvcnQuXG4gKiBAbWV0aG9kIGFkZEVycm9ySGFuZGxlclxuICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlciBNZXRob2QgdG8gY2FsbCB3aXRoIGVycm9ycy5cbiAqL1xuTGluay5wcm90b3R5cGUuYWRkRXJyb3JIYW5kbGVyID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgdGhpcy5vbkVycm9yID0gaGFuZGxlcjtcbn07XG5cbi8qKlxuICogUmVwb3J0IGFuIGVycm9yIG9uIHRoaXMgbGluay5cbiAqIEBtZXRob2Qgb25lcnJvclxuICogQHBhcmFtIHtFcnJvcn0gZXJyIFRoZSBlcnJvciB0aGF0IG9jY3VycmVkLlxuICovXG5MaW5rLnByb3RvdHlwZS5vbkVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAvL0ZpbGxlZCBpbiBieSBhZGRFcnJvckhhbmRsZXJcbn07XG5cbi8qKlxuICogRW1pdCBtZXNzYWdlcyB0byB0aGUgdGhlIGh1YiwgbWFwcGluZyBjb250cm9sIGNoYW5uZWxzLlxuICogQG1ldGhvZCBlbWl0TWVzc2FnZVxuICogQHBhcmFtIHtTdHJpbmd9IGZsb3cgdGhlIGZsb3cgdG8gZW1pdCB0aGUgbWVzc2FnZSBvbi5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzZ2FlIFRoZSBtZXNzYWdlIHRvIGVtaXQuXG4gKi9cbkxpbmsucHJvdG90eXBlLmVtaXRNZXNzYWdlID0gZnVuY3Rpb24gKGZsb3csIG1lc3NhZ2UpIHtcbiAgaWYgKGZsb3cgPT09ICdjb250cm9sJyAmJiB0aGlzLmNvbnRyb2xDaGFubmVsKSB7XG4gICAgZmxvdyA9IHRoaXMuY29udHJvbENoYW5uZWw7XG4gIH1cbiAgdGhpcy5lbWl0KGZsb3csIG1lc3NhZ2UpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMaW5rO1xuIiwiLypnbG9iYWxzIFdvcmtlciAqL1xuLypqc2xpbnQgaW5kZW50OjIsIHdoaXRlOnRydWUsIG5vZGU6dHJ1ZSwgc2xvcHB5OnRydWUsIGJyb3dzZXI6dHJ1ZSAqL1xudmFyIExpbmsgPSByZXF1aXJlKCcuLi9saW5rJyk7XG5cbi8qKlxuICogQSBwb3J0IHByb3ZpZGluZyBtZXNzYWdlIHRyYW5zcG9ydCBiZXR3ZWVuIHR3byBmcmVlZG9tIGNvbnRleHRzIHZpYSBXb3JrZXIuXG4gKiBAY2xhc3MgV29ya2VyXG4gKiBAZXh0ZW5kcyBMaW5rXG4gKiBAdXNlcyBoYW5kbGVFdmVudHNcbiAqIEBjb25zdHJ1Y3RvclxuICovXG52YXIgV29ya2VyTGluayA9IGZ1bmN0aW9uKGlkLCByZXNvdXJjZSkge1xuICBMaW5rLmNhbGwodGhpcywgaWQsIHJlc291cmNlKTtcbiAgaWYgKGlkKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICB9XG59O1xuXG4vKipcbiAqIFN0YXJ0IHRoaXMgcG9ydCBieSBsaXN0ZW5pbmcgb3IgY3JlYXRpbmcgYSB3b3JrZXIuXG4gKiBAbWV0aG9kIHN0YXJ0XG4gKiBAcHJpdmF0ZVxuICovXG5Xb3JrZXJMaW5rLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5jb25maWcubW9kdWxlQ29udGV4dCkge1xuICAgIHRoaXMuc2V0dXBMaXN0ZW5lcigpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuc2V0dXBXb3JrZXIoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBTdG9wIHRoaXMgcG9ydCBieSBkZXN0cm95aW5nIHRoZSB3b3JrZXIuXG4gKiBAbWV0aG9kIHN0b3BcbiAqIEBwcml2YXRlXG4gKi9cbldvcmtlckxpbmsucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbigpIHtcbiAgLy8gRnVuY3Rpb24gaXMgZGV0ZXJtaW5lZCBieSBzZXR1cExpc3RlbmVyIG9yIHNldHVwRnJhbWUgYXMgYXBwcm9wcmlhdGUuXG59O1xuXG4vKipcbiAqIEdldCB0aGUgdGV4dHVhbCBkZXNjcmlwdGlvbiBvZiB0aGlzIHBvcnQuXG4gKiBAbWV0aG9kIHRvU3RyaW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHRoZSBkZXNjcmlwdGlvbiBvZiB0aGlzIHBvcnQuXG4gKi9cbldvcmtlckxpbmsucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBcIltXb3JrZXIgXCIgKyB0aGlzLmlkICsgXCJdXCI7XG59O1xuXG4vKipcbiAqIFNldCB1cCBhIGdsb2JhbCBsaXN0ZW5lciB0byBoYW5kbGUgaW5jb21pbmcgbWVzc2FnZXMgdG8gdGhpc1xuICogZnJlZWRvbS5qcyBjb250ZXh0LlxuICogQG1ldGhvZCBzZXR1cExpc3RlbmVyXG4gKi9cbldvcmtlckxpbmsucHJvdG90eXBlLnNldHVwTGlzdGVuZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG9uTXNnID0gZnVuY3Rpb24obXNnKSB7XG4gICAgdGhpcy5lbWl0TWVzc2FnZShtc2cuZGF0YS5mbG93LCBtc2cuZGF0YS5tZXNzYWdlKTtcbiAgfS5iaW5kKHRoaXMpO1xuICB0aGlzLm9iaiA9IHRoaXMuY29uZmlnLmdsb2JhbDtcbiAgdGhpcy5vYmouYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uTXNnLCB0cnVlKTtcbiAgdGhpcy5zdG9wID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5vYmoucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uTXNnLCB0cnVlKTtcbiAgICBkZWxldGUgdGhpcy5vYmo7XG4gIH07XG4gIHRoaXMuZW1pdCgnc3RhcnRlZCcpO1xuICB0aGlzLm9iai5wb3N0TWVzc2FnZShcIlJlYWR5IEZvciBNZXNzYWdlc1wiKTtcbn07XG5cbi8qKlxuICogU2V0IHVwIGEgd29ya2VyIHdpdGggYW4gaXNvbGF0ZWQgZnJlZWRvbS5qcyBjb250ZXh0IGluc2lkZS5cbiAqIEBtZXRob2Qgc2V0dXBXb3JrZXJcbiAqL1xuV29ya2VyTGluay5wcm90b3R5cGUuc2V0dXBXb3JrZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHdvcmtlcixcbiAgICBibG9iLFxuICAgIHNlbGYgPSB0aGlzO1xuICB3b3JrZXIgPSBuZXcgV29ya2VyKHRoaXMuY29uZmlnLnNvdXJjZSArICcjJyArIHRoaXMuaWQpO1xuXG4gIHdvcmtlci5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGZ1bmN0aW9uKGVycikge1xuICAgIHRoaXMub25FcnJvcihlcnIpO1xuICB9LmJpbmQodGhpcyksIHRydWUpO1xuICB3b3JrZXIuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uKHdvcmtlciwgbXNnKSB7XG4gICAgaWYgKCF0aGlzLm9iaikge1xuICAgICAgdGhpcy5vYmogPSB3b3JrZXI7XG4gICAgICB0aGlzLmVtaXQoJ3N0YXJ0ZWQnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5lbWl0TWVzc2FnZShtc2cuZGF0YS5mbG93LCBtc2cuZGF0YS5tZXNzYWdlKTtcbiAgfS5iaW5kKHRoaXMsIHdvcmtlciksIHRydWUpO1xuICB0aGlzLnN0b3AgPSBmdW5jdGlvbigpIHtcbiAgICB3b3JrZXIudGVybWluYXRlKCk7XG4gICAgaWYgKHRoaXMub2JqKSB7XG4gICAgICBkZWxldGUgdGhpcy5vYmo7XG4gICAgfVxuICB9O1xufTtcblxuLyoqXG4gKiBSZWNlaXZlIG1lc3NhZ2VzIGZyb20gdGhlIGh1YiB0byB0aGlzIHBvcnQuXG4gKiBSZWNlaXZlZCBtZXNzYWdlcyB3aWxsIGJlIGVtaXR0ZWQgZnJvbSB0aGUgb3RoZXIgc2lkZSBvZiB0aGUgcG9ydC5cbiAqIEBtZXRob2QgZGVsaXZlck1lc3NhZ2VcbiAqIEBwYXJhbSB7U3RyaW5nfSBmbG93IHRoZSBjaGFubmVsL2Zsb3cgb2YgdGhlIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gbWVzc2FnZSBUaGUgTWVzc2FnZS5cbiAqL1xuV29ya2VyTGluay5wcm90b3R5cGUuZGVsaXZlck1lc3NhZ2UgPSBmdW5jdGlvbihmbG93LCBtZXNzYWdlKSB7XG4gIGlmIChmbG93ID09PSAnY29udHJvbCcgJiYgbWVzc2FnZS50eXBlID09PSAnY2xvc2UnICYmXG4gICAgICBtZXNzYWdlLmNoYW5uZWwgPT09ICdjb250cm9sJykge1xuICAgIHRoaXMuc3RvcCgpO1xuICB9IGVsc2Uge1xuICAgIGlmICh0aGlzLm9iaikge1xuICAgICAgdGhpcy5vYmoucG9zdE1lc3NhZ2Uoe1xuICAgICAgICBmbG93OiBmbG93LFxuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vbmNlKCdzdGFydGVkJywgdGhpcy5vbk1lc3NhZ2UuYmluZCh0aGlzLCBmbG93LCBtZXNzYWdlKSk7XG4gICAgfVxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdvcmtlckxpbms7XG5cbiIsIi8qanNsaW50IGluZGVudDoyLG5vZGU6dHJ1ZSxzbG9wcHk6dHJ1ZSAqL1xudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcbnZhciBNb2R1bGVJbnRlcm5hbCA9IHJlcXVpcmUoJy4vbW9kdWxlaW50ZXJuYWwnKTtcblxuLyoqXG4gKiBBIGZyZWVkb20gcG9ydCB3aGljaCBtYW5hZ2VzIHRoZSBjb250cm9sIHBsYW5lIG9mIG9mIGNoYW5naW5nIGh1YiByb3V0ZXMuXG4gKiBAY2xhc3MgTWFuYWdlclxuICogQGltcGxlbWVudHMgUG9ydFxuICogQHBhcmFtIHtIdWJ9IGh1YiBUaGUgcm91dGluZyBodWIgdG8gY29udHJvbC5cbiAqIEBwYXJhbSB7UmVzb3VyY2V9IHJlc291cmNlIFRoZSByZXNvdXJjZSBtYW5hZ2VyIGZvciB0aGUgcnVudGltZS5cbiAqIEBwYXJhbSB7QXBpfSBhcGkgVGhlIEFQSSBtYW5hZ2VyIGZvciB0aGUgcnVudGltZS5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG52YXIgTWFuYWdlciA9IGZ1bmN0aW9uIChodWIsIHJlc291cmNlLCBhcGkpIHtcbiAgdGhpcy5pZCA9ICdjb250cm9sJztcbiAgdGhpcy5jb25maWcgPSB7fTtcbiAgdGhpcy5jb250cm9sRmxvd3MgPSB7fTtcbiAgdGhpcy5kYXRhRmxvd3MgPSB7fTtcbiAgdGhpcy5kYXRhRmxvd3NbdGhpcy5pZF0gPSBbXTtcbiAgdGhpcy5yZXZlcnNlRmxvd01hcCA9IHt9O1xuXG4gIHRoaXMuZGVidWcgPSBodWIuZGVidWc7XG4gIHRoaXMuaHViID0gaHViO1xuICB0aGlzLnJlc291cmNlID0gcmVzb3VyY2U7XG4gIHRoaXMuYXBpID0gYXBpO1xuXG4gIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuICB0aGlzLnRvRGVsZWdhdGUgPSB7fTtcbiAgXG4gIHRoaXMuaHViLm9uKCdjb25maWcnLCBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgdXRpbC5taXhpbih0aGlzLmNvbmZpZywgY29uZmlnKTtcbiAgICB0aGlzLmVtaXQoJ2NvbmZpZycpO1xuICB9LmJpbmQodGhpcykpO1xuICBcbiAgdXRpbC5oYW5kbGVFdmVudHModGhpcyk7XG4gIHRoaXMuaHViLnJlZ2lzdGVyKHRoaXMpO1xufTtcblxuLyoqXG4gKiBQcm92aWRlIGEgdGV4dHVhbCBkZXNjcmlwdGlvbiBvZiB0aGlzIHBvcnQuXG4gKiBAbWV0aG9kIHRvU3RyaW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHRoZSBkZXNjcmlwdGlvbiBvZiB0aGlzIHBvcnQuXG4gKi9cbk1hbmFnZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gXCJbTG9jYWwgQ29udHJvbGxlcl1cIjtcbn07XG5cbi8qKlxuICogUHJvY2VzcyBtZXNzYWdlcyBzZW50IHRvIHRoaXMgcG9ydC5cbiAqIFRoZSBtYW5hZ2VyLCBvciAnY29udHJvbCcgZGVzdGluYXRpb24gaGFuZGxlcyBzZXZlcmFsIHR5cGVzIG9mIG1lc3NhZ2VzLFxuICogaWRlbnRpZmllZCBieSB0aGUgcmVxdWVzdCBwcm9wZXJ0eS4gIFRoZSBhY3Rpb25zIGFyZTpcbiAqIDEuIGRlYnVnLiBQcmludHMgdGhlIG1lc3NhZ2UgdG8gdGhlIGNvbnNvbGUuXG4gKiAyLiBsaW5rLiBDcmVhdGVzIGEgbGluayBiZXR3ZWVuIHRoZSBzb3VyY2UgYW5kIGEgcHJvdmlkZWQgZGVzdGluYXRpb24gcG9ydC5cbiAqIDMuIGVudmlyb25tZW50LiBJbnN0YW50aWF0ZSBhIG1vZHVsZSBlbnZpcm9ubWVudCBkZWZpbmVkIGluIE1vZHVsZUludGVybmFsLlxuICogNC4gZGVsZWdhdGUuIFJvdXRlcyBhIGRlZmluZWQgc2V0IG9mIGNvbnRyb2wgbWVzc2FnZXMgdG8gYW5vdGhlciBsb2NhdGlvbi5cbiAqIDUuIHJlc291cmNlLiBSZWdpc3RlcnMgdGhlIHNvdXJjZSBhcyBhIHJlc291cmNlIHJlc29sdmVyLlxuICogNi4gY29yZS4gR2VuZXJhdGVzIGEgY29yZSBwcm92aWRlciBmb3IgdGhlIHJlcXVlc3Rlci5cbiAqIDcuIGNsb3NlLiBUZWFycyBkb3duIHJvdXRlcyBpbnZvbGluZyB0aGUgcmVxdWVzdGluZyBwb3J0LlxuICogOC4gdW5saW5rLiBUZWFycyBkb3duIGEgcm91dGUgZnJvbSB0aGUgcmVxdWVzdGluZyBwb3J0LlxuICogQG1ldGhvZCBvbk1lc3NhZ2VcbiAqIEBwYXJhbSB7U3RyaW5nfSBmbG93IFRoZSBzb3VyY2UgaWRlbnRpZmllciBvZiB0aGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlIFRoZSByZWNlaXZlZCBtZXNzYWdlLlxuICovXG5NYW5hZ2VyLnByb3RvdHlwZS5vbk1lc3NhZ2UgPSBmdW5jdGlvbiAoZmxvdywgbWVzc2FnZSkge1xuICB2YXIgcmV2ZXJzZUZsb3cgPSB0aGlzLmNvbnRyb2xGbG93c1tmbG93XSwgb3JpZ2luO1xuICBpZiAoIXJldmVyc2VGbG93KSB7XG4gICAgdGhpcy5kZWJ1Zy53YXJuKFwiVW5rbm93biBtZXNzYWdlIHNvdXJjZTogXCIgKyBmbG93KTtcbiAgICByZXR1cm47XG4gIH1cbiAgb3JpZ2luID0gdGhpcy5odWIuZ2V0RGVzdGluYXRpb24ocmV2ZXJzZUZsb3cpO1xuXG4gIGlmICh0aGlzLmRlbGVnYXRlICYmIHJldmVyc2VGbG93ICE9PSB0aGlzLmRlbGVnYXRlICYmXG4gICAgICB0aGlzLnRvRGVsZWdhdGVbZmxvd10pIHtcbiAgICAvLyBTaGlwIG9mZiB0byB0aGUgZGVsZWdlZVxuICAgIHRoaXMuZW1pdCh0aGlzLmRlbGVnYXRlLCB7XG4gICAgICB0eXBlOiAnRGVsZWdhdGlvbicsXG4gICAgICByZXF1ZXN0OiAnaGFuZGxlJyxcbiAgICAgIHF1aWV0OiB0cnVlLFxuICAgICAgZmxvdzogZmxvdyxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAobWVzc2FnZS5yZXF1ZXN0ID09PSAnZGVidWcnKSB7XG4gICAgdGhpcy5kZWJ1Zy5wcmludChtZXNzYWdlKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAobWVzc2FnZS5yZXF1ZXN0ID09PSAnbGluaycpIHtcbiAgICB0aGlzLmNyZWF0ZUxpbmsob3JpZ2luLCBtZXNzYWdlLm5hbWUsIG1lc3NhZ2UudG8sIG1lc3NhZ2Uub3ZlcnJpZGVEZXN0KTtcbiAgfSBlbHNlIGlmIChtZXNzYWdlLnJlcXVlc3QgPT09ICdlbnZpcm9ubWVudCcpIHtcbiAgICB0aGlzLmNyZWF0ZUxpbmsob3JpZ2luLCBtZXNzYWdlLm5hbWUsIG5ldyBNb2R1bGVJbnRlcm5hbCh0aGlzKSk7XG4gIH0gZWxzZSBpZiAobWVzc2FnZS5yZXF1ZXN0ID09PSAnZGVsZWdhdGUnKSB7XG4gICAgLy8gSW5pdGF0ZSBEZWxlZ2F0aW9uLlxuICAgIGlmICh0aGlzLmRlbGVnYXRlID09PSBudWxsKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gcmV2ZXJzZUZsb3c7XG4gICAgfVxuICAgIHRoaXMudG9EZWxlZ2F0ZVttZXNzYWdlLmZsb3ddID0gdHJ1ZTtcbiAgICB0aGlzLmVtaXQoJ2RlbGVnYXRlJyk7XG4gIH0gZWxzZSBpZiAobWVzc2FnZS5yZXF1ZXN0ID09PSAncmVzb3VyY2UnKSB7XG4gICAgdGhpcy5yZXNvdXJjZS5hZGRSZXNvbHZlcihtZXNzYWdlLmFyZ3NbMF0pO1xuICAgIHRoaXMucmVzb3VyY2UuYWRkUmV0cmlldmVyKG1lc3NhZ2Uuc2VydmljZSwgbWVzc2FnZS5hcmdzWzFdKTtcbiAgfSBlbHNlIGlmIChtZXNzYWdlLnJlcXVlc3QgPT09ICdjb3JlJykge1xuICAgIGlmICh0aGlzLmNvcmUgJiYgcmV2ZXJzZUZsb3cgPT09IHRoaXMuZGVsZWdhdGUpIHtcbiAgICAgIChuZXcgdGhpcy5jb3JlKCkpLm9uTWVzc2FnZShvcmlnaW4sIG1lc3NhZ2UubWVzc2FnZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZ2V0Q29yZShmdW5jdGlvbiAodG8sIGNvcmUpIHtcbiAgICAgIHRoaXMuaHViLm9uTWVzc2FnZSh0bywge1xuICAgICAgICB0eXBlOiAnY29yZScsXG4gICAgICAgIGNvcmU6IGNvcmVcbiAgICAgIH0pO1xuICAgIH0uYmluZCh0aGlzLCByZXZlcnNlRmxvdykpO1xuICB9IGVsc2UgaWYgKG1lc3NhZ2UucmVxdWVzdCA9PT0gJ2Nsb3NlJykge1xuICAgIHRoaXMuZGVzdHJveShvcmlnaW4pO1xuICB9IGVsc2UgaWYgKG1lc3NhZ2UucmVxdWVzdCA9PT0gJ3VubGluaycpIHtcbiAgICB0aGlzLnJlbW92ZUxpbmsob3JpZ2luLCBtZXNzYWdlLnRvKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmRlYnVnLndhcm4oXCJVbmtub3duIGNvbnRyb2wgcmVxdWVzdDogXCIgKyBtZXNzYWdlLnJlcXVlc3QpO1xuICAgIHRoaXMuZGVidWcubG9nKEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpKTtcbiAgICByZXR1cm47XG4gIH1cbn07XG5cbi8qKlxuICogR2V0IHRoZSBwb3J0IG1lc3NhZ2VzIHdpbGwgYmUgcm91dGVkIHRvIGdpdmVuIGl0cyBpZC5cbiAqIEBtZXRob2QgZ2V0UG9ydFxuICogQHBhcmFtIHtTdHJpbmd9IHBvcnRJZCBUaGUgSUQgb2YgdGhlIHBvcnQuXG4gKiBAcmV0dXJucyB7ZmRvbS5Qb3J0fSBUaGUgcG9ydCB3aXRoIHRoYXQgSUQuXG4gKi9cbk1hbmFnZXIucHJvdG90eXBlLmdldFBvcnQgPSBmdW5jdGlvbiAocG9ydElkKSB7XG4gIHJldHVybiB0aGlzLmh1Yi5nZXREZXN0aW5hdGlvbih0aGlzLmNvbnRyb2xGbG93c1twb3J0SWRdKTtcbn07XG5cbi8qKlxuICogU2V0IHVwIGEgcG9ydCB3aXRoIHRoZSBodWIuXG4gKiBAbWV0aG9kIHNldHVwXG4gKiBAcGFyYW0ge1BvcnR9IHBvcnQgVGhlIHBvcnQgdG8gcmVnaXN0ZXIuXG4gKi9cbk1hbmFnZXIucHJvdG90eXBlLnNldHVwID0gZnVuY3Rpb24gKHBvcnQpIHtcbiAgaWYgKCFwb3J0LmlkKSB7XG4gICAgdGhpcy5kZWJ1Zy53YXJuKFwiUmVmdXNpbmcgdG8gc2V0dXAgdW5pZGVudGlmaWVkIHBvcnQgXCIpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh0aGlzLmNvbnRyb2xGbG93c1twb3J0LmlkXSkge1xuICAgIHRoaXMuZGVidWcud2FybihcIlJlZnVzaW5nIHRvIHJlLWluaXRpYWxpemUgcG9ydCBcIiArIHBvcnQuaWQpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghdGhpcy5jb25maWcuZ2xvYmFsKSB7XG4gICAgdGhpcy5vbmNlKCdjb25maWcnLCB0aGlzLnNldHVwLmJpbmQodGhpcywgcG9ydCkpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuaHViLnJlZ2lzdGVyKHBvcnQpO1xuICB2YXIgZmxvdyA9IHRoaXMuaHViLmluc3RhbGwodGhpcywgcG9ydC5pZCwgXCJjb250cm9sXCIpLFxuICAgIHJldmVyc2UgPSB0aGlzLmh1Yi5pbnN0YWxsKHBvcnQsIHRoaXMuaWQsIHBvcnQuaWQpO1xuICB0aGlzLmNvbnRyb2xGbG93c1twb3J0LmlkXSA9IGZsb3c7XG4gIHRoaXMuZGF0YUZsb3dzW3BvcnQuaWRdID0gW3JldmVyc2VdO1xuICB0aGlzLnJldmVyc2VGbG93TWFwW2Zsb3ddID0gcmV2ZXJzZTtcbiAgdGhpcy5yZXZlcnNlRmxvd01hcFtyZXZlcnNlXSA9IGZsb3c7XG5cbiAgaWYgKHBvcnQubGluZWFnZSkge1xuICAgIHRoaXMuZW1pdCgnbW9kdWxlQWRkJywge2lkOiBwb3J0LmlkLCBsaW5lYWdlOiBwb3J0LmxpbmVhZ2V9KTtcbiAgfVxuICBcbiAgdGhpcy5odWIub25NZXNzYWdlKGZsb3csIHtcbiAgICB0eXBlOiAnc2V0dXAnLFxuICAgIGNoYW5uZWw6IHJldmVyc2UsXG4gICAgY29uZmlnOiB0aGlzLmNvbmZpZ1xuICB9KTtcblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogVGVhciBkb3duIGEgcG9ydCBvbiB0aGUgaHViLCBvciB0aGUgZnVsbCBsb2NhbCBodWIuXG4gKiBAbWV0aG9kIGRlc3Ryb3lcbiAqIEBhcHJhbSB7UG9ydD99IHBvcnQgVGhlIHBvcnQgdG8gdW5yZWdpc3Rlci5cbiAqL1xuTWFuYWdlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIChwb3J0KSB7XG4gIGlmICghcG9ydCkge1xuICAgIC8vIFRlYXIgZG93biBldmVyeXRoaW5nIVxuICAgIHV0aWwuZWFjaFByb3AodGhpcy5jb250cm9sRmxvd3MsIGZ1bmN0aW9uIChmbG93KSB7XG4gICAgICB0aGlzLmh1Yi5vbk1lc3NhZ2UoZmxvdywge1xuICAgICAgICB0eXBlOiAnY2xvc2UnXG4gICAgICB9KTtcbiAgICB9LmJpbmQodGhpcykpO1xuICAgIHRoaXMuaHViLnRlYXJkb3duKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFwb3J0LmlkKSB7XG4gICAgdGhpcy5kZWJ1Zy53YXJuKFwiVW5hYmxlIHRvIHRlYXIgZG93biB1bmlkZW50aWZpZWQgcG9ydFwiKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAocG9ydC5saW5lYWdlKSB7XG4gICAgdGhpcy5lbWl0KCdtb2R1bGVSZW1vdmUnLCB7aWQ6IHBvcnQuaWQsIGxpbmVhZ2U6IHBvcnQubGluZWFnZX0pO1xuICB9XG5cbiAgLy8gUmVtb3ZlIHRoZSBwb3J0LlxuICBkZWxldGUgdGhpcy5jb250cm9sRmxvd3NbcG9ydC5pZF07XG5cbiAgLy8gUmVtb3ZlIGFzc29jaWF0ZWQgbGlua3MuXG4gIHZhciBpO1xuICBmb3IgKGkgPSB0aGlzLmRhdGFGbG93c1twb3J0LmlkXS5sZW5ndGggLSAxOyBpID49IDA7IGkgLT0gMSkge1xuICAgIHRoaXMucmVtb3ZlTGluayhwb3J0LCB0aGlzLmRhdGFGbG93c1twb3J0LmlkXVtpXSk7XG4gIH1cblxuICAvLyBSZW1vdmUgdGhlIHBvcnQuXG4gIGRlbGV0ZSB0aGlzLmRhdGFGbG93c1twb3J0LmlkXTtcbiAgdGhpcy5odWIuZGVyZWdpc3Rlcihwb3J0KTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgbGluayBiZXR3ZWVuIHR3byBwb3J0cy4gIExpbmtzIGFyZSBjcmVhdGVkIGluIGJvdGggZGlyZWN0aW9ucyxcbiAqIGFuZCBhIG1lc3NhZ2Ugd2l0aCB0aG9zZSBjYXBhYmlsaXRpZXMgaXMgc2VudCB0byB0aGUgc291cmNlIHBvcnQuXG4gKiBAbWV0aG9kIGNyZWF0ZUxpbmtcbiAqIEBwYXJhbSB7UG9ydH0gcG9ydCBUaGUgc291cmNlIHBvcnQuXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgZmxvdyBmb3IgbWVzc2FnZXMgZnJvbSBkZXN0aW5hdGlvbiB0byBwb3J0LlxuICogQHBhcmFtIHtQb3J0fSBkZXN0aW5hdGlvbiBUaGUgZGVzdGluYXRpb24gcG9ydC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBbZGVzdE5hbWVdIFRoZSBmbG93IG5hbWUgZm9yIG1lc3NhZ2VzIHRvIHRoZSBkZXN0aW5hdGlvbi5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW3RvRGVzdF0gVGVsbCB0aGUgZGVzdGluYXRpb24gYWJvdXQgdGhlIGxpbmsuXG4gKi9cbk1hbmFnZXIucHJvdG90eXBlLmNyZWF0ZUxpbmsgPSBmdW5jdGlvbiAocG9ydCwgbmFtZSwgZGVzdGluYXRpb24sIGRlc3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b0Rlc3QpIHtcbiAgaWYgKCF0aGlzLmNvbmZpZy5nbG9iYWwpIHtcbiAgICB0aGlzLm9uY2UoJ2NvbmZpZycsXG4gICAgICB0aGlzLmNyZWF0ZUxpbmsuYmluZCh0aGlzLCBwb3J0LCBuYW1lLCBkZXN0aW5hdGlvbiwgZGVzdE5hbWUpKTtcbiAgICByZXR1cm47XG4gIH1cbiAgXG4gIGlmICghdGhpcy5jb250cm9sRmxvd3NbcG9ydC5pZF0pIHtcbiAgICB0aGlzLmRlYnVnLndhcm4oJ1Vud2lsbGluZyB0byBsaW5rIGZyb20gbm9uLXJlZ2lzdGVyZWQgc291cmNlLicpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghdGhpcy5jb250cm9sRmxvd3NbZGVzdGluYXRpb24uaWRdKSB7XG4gICAgaWYgKHRoaXMuc2V0dXAoZGVzdGluYXRpb24pID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5kZWJ1Zy53YXJuKCdDb3VsZCBub3QgZmluZCBvciBzZXR1cCBkZXN0aW5hdGlvbi4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgdmFyIHF1aWV0ID0gZGVzdGluYXRpb24ucXVpZXQgfHwgZmFsc2UsXG4gICAgb3V0Z29pbmdOYW1lID0gZGVzdE5hbWUgfHwgJ2RlZmF1bHQnLFxuICAgIG91dGdvaW5nID0gdGhpcy5odWIuaW5zdGFsbChwb3J0LCBkZXN0aW5hdGlvbi5pZCwgb3V0Z29pbmdOYW1lLCBxdWlldCksXG4gICAgcmV2ZXJzZTtcblxuICAvLyBSZWNvdmVyIHRoZSBwb3J0IHNvIHRoYXQgbGlzdGVuZXJzIGFyZSBpbnN0YWxsZWQuXG4gIGRlc3RpbmF0aW9uID0gdGhpcy5odWIuZ2V0RGVzdGluYXRpb24ob3V0Z29pbmcpO1xuICByZXZlcnNlID0gdGhpcy5odWIuaW5zdGFsbChkZXN0aW5hdGlvbiwgcG9ydC5pZCwgbmFtZSwgcXVpZXQpO1xuXG4gIHRoaXMucmV2ZXJzZUZsb3dNYXBbb3V0Z29pbmddID0gcmV2ZXJzZTtcbiAgdGhpcy5kYXRhRmxvd3NbcG9ydC5pZF0ucHVzaChvdXRnb2luZyk7XG4gIHRoaXMucmV2ZXJzZUZsb3dNYXBbcmV2ZXJzZV0gPSBvdXRnb2luZztcbiAgdGhpcy5kYXRhRmxvd3NbZGVzdGluYXRpb24uaWRdLnB1c2gocmV2ZXJzZSk7XG5cbiAgaWYgKHRvRGVzdCkge1xuICAgIHRoaXMuaHViLm9uTWVzc2FnZSh0aGlzLmNvbnRyb2xGbG93c1tkZXN0aW5hdGlvbi5pZF0sIHtcbiAgICAgIHR5cGU6ICdjcmVhdGVMaW5rJyxcbiAgICAgIG5hbWU6IG91dGdvaW5nTmFtZSxcbiAgICAgIGNoYW5uZWw6IHJldmVyc2UsXG4gICAgICByZXZlcnNlOiBvdXRnb2luZ1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuaHViLm9uTWVzc2FnZSh0aGlzLmNvbnRyb2xGbG93c1twb3J0LmlkXSwge1xuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIHR5cGU6ICdjcmVhdGVMaW5rJyxcbiAgICAgIGNoYW5uZWw6IG91dGdvaW5nLFxuICAgICAgcmV2ZXJzZTogcmV2ZXJzZVxuICAgIH0pO1xuICB9XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhIGxpbmsgYmV0d2VlbiB0byBwb3J0cy4gVGhlIHJldmVyc2UgbGluayB3aWxsIGFsc28gYmUgcmVtb3ZlZC5cbiAqIEBtZXRob2QgcmVtb3ZlTGlua1xuICogQHBhcmFtIHtQb3J0fSBwb3J0IFRoZSBzb3VyY2UgcG9ydC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBmbG93IHRvIGJlIHJlbW92ZWQuXG4gKi9cbk1hbmFnZXIucHJvdG90eXBlLnJlbW92ZUxpbmsgPSBmdW5jdGlvbiAocG9ydCwgbmFtZSkge1xuICB2YXIgcmV2ZXJzZSA9IHRoaXMuaHViLmdldERlc3RpbmF0aW9uKG5hbWUpLFxuICAgIHJmbG93ID0gdGhpcy5yZXZlcnNlRmxvd01hcFtuYW1lXSxcbiAgICBpO1xuXG4gIGlmICghcmV2ZXJzZSB8fCAhcmZsb3cpIHtcbiAgICB0aGlzLmRlYnVnLndhcm4oXCJDb3VsZCBub3QgZmluZCBtZXRhZGF0YSB0byByZW1vdmUgZmxvdzogXCIgKyBuYW1lKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodGhpcy5odWIuZ2V0RGVzdGluYXRpb24ocmZsb3cpLmlkICE9PSBwb3J0LmlkKSB7XG4gICAgdGhpcy5kZWJ1Zy53YXJuKFwiU291cmNlIHBvcnQgZG9lcyBub3Qgb3duIGZsb3cgXCIgKyBuYW1lKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBOb3RpZnkgcG9ydHMgdGhhdCBhIGNoYW5uZWwgaXMgY2xvc2luZy5cbiAgaSA9IHRoaXMuY29udHJvbEZsb3dzW3BvcnQuaWRdO1xuICBpZiAoaSkge1xuICAgIHRoaXMuaHViLm9uTWVzc2FnZShpLCB7XG4gICAgICB0eXBlOiAnY2xvc2UnLFxuICAgICAgY2hhbm5lbDogbmFtZVxuICAgIH0pO1xuICB9XG4gIGkgPSB0aGlzLmNvbnRyb2xGbG93c1tyZXZlcnNlLmlkXTtcbiAgaWYgKGkpIHtcbiAgICB0aGlzLmh1Yi5vbk1lc3NhZ2UoaSwge1xuICAgICAgdHlwZTogJ2Nsb3NlJyxcbiAgICAgIGNoYW5uZWw6IHJmbG93XG4gICAgfSk7XG4gIH1cblxuICAvLyBVbmluc3RhbGwgdGhlIGNoYW5uZWwuXG4gIHRoaXMuaHViLnVuaW5zdGFsbChwb3J0LCBuYW1lKTtcbiAgdGhpcy5odWIudW5pbnN0YWxsKHJldmVyc2UsIHJmbG93KTtcblxuICBkZWxldGUgdGhpcy5yZXZlcnNlRmxvd01hcFtuYW1lXTtcbiAgZGVsZXRlIHRoaXMucmV2ZXJzZUZsb3dNYXBbcmZsb3ddO1xuICB0aGlzLmZvcmdldEZsb3cocmV2ZXJzZS5pZCwgcmZsb3cpO1xuICB0aGlzLmZvcmdldEZsb3cocG9ydC5pZCwgbmFtZSk7XG59O1xuXG4vKipcbiAqIEZvcmdldCB0aGUgZmxvdyBmcm9tIGlkIHdpdGggYSBnaXZlbiBuYW1lLlxuICogQG1ldGhvZCBmb3JnZXRGbG93XG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkIFRoZSBwb3J0IElEIG9mIHRoZSBzb3VyY2UuXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgZmxvdyBuYW1lLlxuICovXG5NYW5hZ2VyLnByb3RvdHlwZS5mb3JnZXRGbG93ID0gZnVuY3Rpb24gKGlkLCBuYW1lKSB7XG4gIHZhciBpO1xuICBpZiAodGhpcy5kYXRhRmxvd3NbaWRdKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMuZGF0YUZsb3dzW2lkXS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHRoaXMuZGF0YUZsb3dzW2lkXVtpXSA9PT0gbmFtZSkge1xuICAgICAgICB0aGlzLmRhdGFGbG93c1tpZF0uc3BsaWNlKGksIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogR2V0IHRoZSBjb3JlIGZyZWVkb20uanMgQVBJIGFjdGl2ZSBvbiB0aGUgY3VycmVudCBodWIuXG4gKiBAbWV0aG9kIGdldENvcmVcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiBDYWxsYmFjayB0byBmaXJlIHdpdGggdGhlIGNvcmUgb2JqZWN0LlxuICovXG5NYW5hZ2VyLnByb3RvdHlwZS5nZXRDb3JlID0gZnVuY3Rpb24gKGNiKSB7XG4gIGlmICh0aGlzLmNvcmUpIHtcbiAgICBjYih0aGlzLmNvcmUpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuYXBpLmdldENvcmUoJ2NvcmUnLCB0aGlzKS50aGVuKGZ1bmN0aW9uIChjb3JlKSB7XG4gICAgICB0aGlzLmNvcmUgPSBjb3JlLmluc3Q7XG4gICAgICBjYih0aGlzLmNvcmUpO1xuICAgIH0uYmluZCh0aGlzKSwgZnVuY3Rpb24gKCkge1xuICAgICAgY2IodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYW5hZ2VyO1xuIiwiLypqc2xpbnQgaW5kZW50OjIsbm9kZTp0cnVlLHNsb3BweTp0cnVlICovXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xudmFyIFByb3ZpZGVyID0gcmVxdWlyZSgnLi9wcm92aWRlcicpO1xuXG4vKipcbiAqIFRoZSBleHRlcm5hbCBQb3J0IGZhY2Ugb2YgYSBtb2R1bGUgb24gYSBodWIuXG4gKiBAY2xhc3MgTW9kdWxlXG4gKiBAZXh0ZW5kcyBQb3J0XG4gKiBAcGFyYW0ge1N0cmluZ30gbWFuaWZlc3RVUkwgVGhlIG1hbmlmZXN0IHRoaXMgbW9kdWxlIGxvYWRzLlxuICogQHBhcmFtIHtTdHJpbmdbXX0gY3JlYXRvciBUaGUgbGluZWFnZSBvZiBjcmVhdGlvbiBmb3IgdGhpcyBtb2R1bGUuXG4gKiBAcGFyYW0ge1BvbGljeX0gUG9saWN5IFRoZSBwb2xpY3kgbG9hZGVyIGZvciBkZXBlbmRlbmNpZXMuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xudmFyIE1vZHVsZSA9IGZ1bmN0aW9uIChtYW5pZmVzdFVSTCwgbWFuaWZlc3QsIGNyZWF0b3IsIHBvbGljeSkge1xuICB0aGlzLmFwaSA9IHBvbGljeS5hcGk7XG4gIHRoaXMucG9saWN5ID0gcG9saWN5O1xuICB0aGlzLnJlc291cmNlID0gcG9saWN5LnJlc291cmNlO1xuICB0aGlzLmRlYnVnID0gcG9saWN5LmRlYnVnO1xuXG4gIHRoaXMuY29uZmlnID0ge307XG5cbiAgdGhpcy5pZCA9IG1hbmlmZXN0VVJMICsgTWF0aC5yYW5kb20oKTtcbiAgdGhpcy5tYW5pZmVzdElkID0gbWFuaWZlc3RVUkw7XG4gIHRoaXMubWFuaWZlc3QgPSBtYW5pZmVzdDtcbiAgdGhpcy5saW5lYWdlID0gW3RoaXMubWFuaWZlc3RJZF0uY29uY2F0KGNyZWF0b3IpO1xuXG4gIHRoaXMucXVpZXQgPSB0aGlzLm1hbmlmZXN0LnF1aWV0IHx8IGZhbHNlO1xuXG4gIHRoaXMuZXh0ZXJuYWxQb3J0TWFwID0ge307XG4gIHRoaXMuaW50ZXJuYWxQb3J0TWFwID0ge307XG4gIHRoaXMuZGVwZW5kYW50Q2hhbm5lbHMgPSBbXTtcbiAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG5cbiAgdXRpbC5oYW5kbGVFdmVudHModGhpcyk7XG59O1xuXG4vKipcbiAqIFJlY2VpdmUgYSBtZXNzYWdlIGZvciB0aGUgTW9kdWxlLlxuICogQG1ldGhvZCBvbk1lc3NhZ2VcbiAqIEBwYXJhbSB7U3RyaW5nfSBmbG93IFRoZSBvcmlnaW4gb2YgdGhlIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gbWVzc2FnZSBUaGUgbWVzc2FnZSByZWNlaXZlZC5cbiAqL1xuTW9kdWxlLnByb3RvdHlwZS5vbk1lc3NhZ2UgPSBmdW5jdGlvbiAoZmxvdywgbWVzc2FnZSkge1xuICBpZiAoZmxvdyA9PT0gJ2NvbnRyb2wnKSB7XG4gICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ3NldHVwJykge1xuICAgICAgdGhpcy5jb250cm9sQ2hhbm5lbCA9IG1lc3NhZ2UuY2hhbm5lbDtcbiAgICAgIHV0aWwubWl4aW4odGhpcy5jb25maWcsIG1lc3NhZ2UuY29uZmlnKTtcbiAgICAgIHRoaXMuZW1pdCh0aGlzLmNvbnRyb2xDaGFubmVsLCB7XG4gICAgICAgIHR5cGU6ICdDb3JlIFByb3ZpZGVyJyxcbiAgICAgICAgcmVxdWVzdDogJ2NvcmUnXG4gICAgICB9KTtcbiAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ2NyZWF0ZUxpbmsnICYmIG1lc3NhZ2UuY2hhbm5lbCkge1xuICAgICAgdGhpcy5kZWJ1Zy5kZWJ1Zyh0aGlzICsgJ2dvdCBjcmVhdGUgbGluayBmb3IgJyArIG1lc3NhZ2UubmFtZSk7XG4gICAgICB0aGlzLmV4dGVybmFsUG9ydE1hcFttZXNzYWdlLm5hbWVdID0gbWVzc2FnZS5jaGFubmVsO1xuICAgICAgaWYgKHRoaXMuaW50ZXJuYWxQb3J0TWFwW21lc3NhZ2UubmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmludGVybmFsUG9ydE1hcFttZXNzYWdlLm5hbWVdID0gZmFsc2U7XG4gICAgICB9XG4gICAgICB2YXIgbXNnID0ge1xuICAgICAgICB0eXBlOiAnZGVmYXVsdCBjaGFubmVsIGFubm91bmNlbWVudCcsXG4gICAgICAgIGNoYW5uZWw6IG1lc3NhZ2UucmV2ZXJzZVxuICAgICAgfTtcbiAgICAgIGlmICh0aGlzLm1hbmlmZXN0LmRlcGVuZGVuY2llcyAmJlxuICAgICAgICAgIHRoaXMubWFuaWZlc3QuZGVwZW5kZW5jaWVzW21lc3NhZ2UubmFtZV0pIHtcbiAgICAgICAgbXNnLmFwaSA9IHRoaXMubWFuaWZlc3QuZGVwZW5kZW5jaWVzW21lc3NhZ2UubmFtZV0uYXBpO1xuICAgICAgfVxuICAgICAgdGhpcy5lbWl0KG1lc3NhZ2UuY2hhbm5lbCwgbXNnKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2UuY29yZSkge1xuICAgICAgdGhpcy5jb3JlID0gbmV3IG1lc3NhZ2UuY29yZSgpO1xuICAgICAgdGhpcy5lbWl0KCdjb3JlJywgbWVzc2FnZS5jb3JlKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ2Nsb3NlJykge1xuICAgICAgLy8gQ2xvc2luZyBjaGFubmVsLlxuICAgICAgaWYgKCFtZXNzYWdlLmNoYW5uZWwgfHwgbWVzc2FnZS5jaGFubmVsID09PSAnY29udHJvbCcpIHtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmRlcmVnaXN0ZXJGbG93KG1lc3NhZ2UuY2hhbm5lbCwgZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBvcnQub25NZXNzYWdlKGZsb3csIG1lc3NhZ2UpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoKHRoaXMuZXh0ZXJuYWxQb3J0TWFwW2Zsb3ddID09PSBmYWxzZSB8fFxuICAgICAgICAhdGhpcy5leHRlcm5hbFBvcnRNYXBbZmxvd10pICYmIG1lc3NhZ2UuY2hhbm5lbCkge1xuICAgICAgdGhpcy5kZWJ1Zy5kZWJ1Zyh0aGlzICsgJ2hhbmRsaW5nIGNoYW5uZWwgYW5ub3VuY2VtZW50IGZvciAnICsgZmxvdyk7XG4gICAgICB0aGlzLmV4dGVybmFsUG9ydE1hcFtmbG93XSA9IG1lc3NhZ2UuY2hhbm5lbDtcbiAgICAgIGlmICh0aGlzLmludGVybmFsUG9ydE1hcFtmbG93XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuaW50ZXJuYWxQb3J0TWFwW2Zsb3ddID0gZmFsc2U7XG5cbiAgICAgICAgLy8gTmV3IGluY29taW5nIGNvbm5lY3Rpb24gYXR0ZW1wdHMgc2hvdWxkIGdldCByb3V0ZWQgdG8gbW9kSW50ZXJuYWwuXG4gICAgICAgIGlmICh0aGlzLm1hbmlmZXN0LnByb3ZpZGVzICYmIHRoaXMubW9kSW50ZXJuYWwpIHtcbiAgICAgICAgICB0aGlzLnBvcnQub25NZXNzYWdlKHRoaXMubW9kSW50ZXJuYWwsIHtcbiAgICAgICAgICAgIHR5cGU6ICdDb25uZWN0aW9uJyxcbiAgICAgICAgICAgIGNoYW5uZWw6IGZsb3csXG4gICAgICAgICAgICBhcGk6IG1lc3NhZ2UuYXBpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5tYW5pZmVzdC5wcm92aWRlcykge1xuICAgICAgICAgIHRoaXMub25jZSgnbW9kSW50ZXJuYWwnLCBmdW5jdGlvbiAoZmxvdywgYXBpKSB7XG4gICAgICAgICAgICB0aGlzLnBvcnQub25NZXNzYWdlKHRoaXMubW9kSW50ZXJuYWwsIHtcbiAgICAgICAgICAgICAgdHlwZTogJ0Nvbm5lY3Rpb24nLFxuICAgICAgICAgICAgICBjaGFubmVsOiBmbG93LFxuICAgICAgICAgICAgICBhcGk6IGFwaVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfS5iaW5kKHRoaXMsIGZsb3csIG1lc3NhZ2UuYXBpKSk7XG4gICAgICAgIC8vIEZpcnN0IGNvbm5lY3Rpb24gcmV0YWlucyBsZWdhY3kgbWFwcGluZyBhcyAnZGVmYXVsdCcuXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuZXh0ZXJuYWxQb3J0TWFwWydkZWZhdWx0J10gJiYgbWVzc2FnZS5jaGFubmVsKSB7XG4gICAgICAgICAgdGhpcy5leHRlcm5hbFBvcnRNYXBbJ2RlZmF1bHQnXSA9IG1lc3NhZ2UuY2hhbm5lbDtcbiAgICAgICAgICB0aGlzLm9uY2UoJ2ludGVybmFsQ2hhbm5lbFJlYWR5JywgZnVuY3Rpb24gKGZsb3cpIHtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxQb3J0TWFwW2Zsb3ddID0gdGhpcy5pbnRlcm5hbFBvcnRNYXBbJ2RlZmF1bHQnXTtcbiAgICAgICAgICB9LmJpbmQodGhpcywgZmxvdykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmICghdGhpcy5zdGFydGVkKSB7XG4gICAgICB0aGlzLm9uY2UoJ3N0YXJ0JywgdGhpcy5vbk1lc3NhZ2UuYmluZCh0aGlzLCBmbG93LCBtZXNzYWdlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmludGVybmFsUG9ydE1hcFtmbG93XSA9PT0gZmFsc2UpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCd3YWl0aW5nIG9uIGludGVybmFsIGNoYW5uZWwgZm9yIG1zZycpO1xuICAgICAgICB0aGlzLm9uY2UoJ2ludGVybmFsQ2hhbm5lbFJlYWR5JywgdGhpcy5vbk1lc3NhZ2UuYmluZCh0aGlzLCBmbG93LCBtZXNzYWdlKSk7XG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLmludGVybmFsUG9ydE1hcFtmbG93XSkge1xuICAgICAgICB0aGlzLmRlYnVnLmVycm9yKCdVbmV4cGVjdGVkIG1lc3NhZ2UgZnJvbSAnICsgZmxvdyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucG9ydC5vbk1lc3NhZ2UodGhpcy5pbnRlcm5hbFBvcnRNYXBbZmxvd10sIG1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBDbGVhbiB1cCBhZnRlciBhIGZsb3cgd2hpY2ggaXMgbm8gbG9uZ2VyIHVzZWQgLyBuZWVkZWQuXG4gKiBAbWV0aG9kIGRlcmVnaXN0ZXJGTG93XG4gKiBAcGFyYW0ge1N0cmluZ30gZmxvdyBUaGUgZmxvdyB0byByZW1vdmUgbWFwcGluZ3MgZm9yLlxuICogQHBhcmFtIHtCb29sZWFufSBpbnRlcm5hbCBJZiB0aGUgZmxvdyBuYW1lIGlzIHRoZSBpbnRlcm5hbCBpZGVudGlmaWVyLlxuICogQHJldHVybnMge0Jvb2xlYW59IFdoZXRoZXIgdGhlIGZsb3cgd2FzIHN1Y2Nlc3NmdWxseSBkZXJlZ2lzdGVyZWQuXG4gKiBAcHJpdmF0ZVxuICovXG5Nb2R1bGUucHJvdG90eXBlLmRlcmVnaXN0ZXJGbG93ID0gZnVuY3Rpb24gKGZsb3csIGludGVybmFsKSB7XG4gIHZhciBrZXksXG4gICAgbWFwID0gaW50ZXJuYWwgPyB0aGlzLmludGVybmFsUG9ydE1hcCA6IHRoaXMuZXh0ZXJuYWxQb3J0TWFwO1xuICAvLyBUT0RPOiB0aGlzIGlzIGluZWZmaWNpZW50LCBidXQgc2VlbXMgbGVzcyBjb25mdXNpbmcgdGhhbiBhIDNyZFxuICAvLyByZXZlcnNlIGxvb2t1cCBtYXAuXG4gIGZvciAoa2V5IGluIG1hcCkge1xuICAgIGlmIChtYXBba2V5XSA9PT0gZmxvdykge1xuICAgICAgaWYgKGludGVybmFsKSB7XG4gICAgICAgIHRoaXMuZW1pdCh0aGlzLmNvbnRyb2xDaGFubmVsLCB7XG4gICAgICAgICAgdHlwZTogJ0NoYW5uZWwgVGVhcmRvd24nLFxuICAgICAgICAgIHJlcXVlc3Q6ICd1bmxpbmsnLFxuICAgICAgICAgIHRvOiB0aGlzLmV4dGVybmFsUG9ydE1hcFtrZXldXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnBvcnQpIHtcbiAgICAgICAgdGhpcy5wb3J0Lm9uTWVzc2FnZSgnY29udHJvbCcsIHtcbiAgICAgICAgICB0eXBlOiAnY2xvc2UnLFxuICAgICAgICAgIGNoYW5uZWw6IHRoaXMuaW50ZXJuYWxQb3J0TWFwW2tleV1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBkZWxldGUgdGhpcy5leHRlcm5hbFBvcnRNYXBba2V5XTtcbiAgICAgIGRlbGV0ZSB0aGlzLmludGVybmFsUG9ydE1hcFtrZXldO1xuXG4gICAgICAvLyBXaGVuIHRoZXJlIGFyZSBzdGlsbCBub24tZGVwZW5kYW50IGNoYW5uZWxzLCBrZWVwIHJ1bm5pbmdcbiAgICAgIGZvciAoa2V5IGluIHRoaXMuZXh0ZXJuYWxQb3J0TWFwKSB7XG4gICAgICAgIGlmICh0aGlzLmV4dGVybmFsUG9ydE1hcC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZGVwZW5kYW50Q2hhbm5lbHMuaW5kZXhPZihrZXkpIDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBPdGhlcndpc2Ugc2h1dCBkb3duIHRoZSBtb2R1bGUuXG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIEF0dGVtcHQgdG8gc3RhcnQgdGhlIG1vZHVsZSBvbmNlIHRoZSByZW1vdGUgZnJlZWRvbSBjb250ZXh0XG4gKiBleGlzdHMuXG4gKiBAbWV0aG9kIHN0YXJ0XG4gKiBAcHJpdmF0ZVxuICovXG5Nb2R1bGUucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgUG9ydDtcbiAgaWYgKHRoaXMuc3RhcnRlZCB8fCB0aGlzLnBvcnQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHRoaXMuY29udHJvbENoYW5uZWwpIHtcbiAgICB0aGlzLmxvYWRMaW5rcygpO1xuICAgIFBvcnQgPSB0aGlzLmNvbmZpZy5wb3J0VHlwZTtcbiAgICB0aGlzLnBvcnQgPSBuZXcgUG9ydCh0aGlzLm1hbmlmZXN0Lm5hbWUsIHRoaXMucmVzb3VyY2UpO1xuICAgIC8vIExpc3RlbiB0byBhbGwgcG9ydCBtZXNzYWdlcy5cbiAgICB0aGlzLnBvcnQub24odGhpcy5lbWl0TWVzc2FnZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnBvcnQuYWRkRXJyb3JIYW5kbGVyKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIHRoaXMuZGVidWcud2FybignTW9kdWxlIEZhaWxlZCcsIGVycik7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICAgIC8vIFRlbGwgdGhlIGxvY2FsIHBvcnQgdG8gYXNrIHVzIGZvciBoZWxwLlxuICAgIHRoaXMucG9ydC5vbk1lc3NhZ2UoJ2NvbnRyb2wnLCB7XG4gICAgICBjaGFubmVsOiAnY29udHJvbCcsXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnXG4gICAgfSk7XG5cbiAgICAvLyBUZWxsIHRoZSByZW1vdGUgbG9jYXRpb24gdG8gZGVsZWdhdGUgZGVidWdnaW5nLlxuICAgIHRoaXMucG9ydC5vbk1lc3NhZ2UoJ2NvbnRyb2wnLCB7XG4gICAgICB0eXBlOiAnUmVkaXJlY3QnLFxuICAgICAgcmVxdWVzdDogJ2RlbGVnYXRlJyxcbiAgICAgIGZsb3c6ICdkZWJ1ZydcbiAgICB9KTtcbiAgICB0aGlzLnBvcnQub25NZXNzYWdlKCdjb250cm9sJywge1xuICAgICAgdHlwZTogJ1JlZGlyZWN0JyxcbiAgICAgIHJlcXVlc3Q6ICdkZWxlZ2F0ZScsXG4gICAgICBmbG93OiAnY29yZSdcbiAgICB9KTtcbiAgICBcbiAgICAvLyBUZWxsIHRoZSBjb250YWluZXIgdG8gaW5zdGFudGlhdGUgdGhlIGNvdW50ZXJwYXJ0IHRvIHRoaXMgZXh0ZXJuYWwgdmlldy5cbiAgICB0aGlzLnBvcnQub25NZXNzYWdlKCdjb250cm9sJywge1xuICAgICAgdHlwZTogJ0Vudmlyb25tZW50IENvbmZpZ3VyYXRpb24nLFxuICAgICAgcmVxdWVzdDogJ2Vudmlyb25tZW50JyxcbiAgICAgIG5hbWU6ICdNb2RJbnRlcm5hbCdcbiAgICB9KTtcbiAgfVxufTtcblxuLyoqXG4gKiBTdG9wIHRoZSBtb2R1bGUgd2hlbiBpdCBpcyBubyBsb25nZXIgbmVlZGVkLCBhbmQgdGVhci1kb3duIHN0YXRlLlxuICogQG1ldGhvZCBzdG9wXG4gKiBAcHJpdmF0ZVxuICovXG5Nb2R1bGUucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghdGhpcy5zdGFydGVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMuZW1pdCgnY2xvc2UnKTtcbiAgaWYgKHRoaXMucG9ydCkge1xuICAgIHRoaXMucG9ydC5vZmYoKTtcbiAgICB0aGlzLnBvcnQub25NZXNzYWdlKCdjb250cm9sJywge1xuICAgICAgdHlwZTogJ2Nsb3NlJyxcbiAgICAgIGNoYW5uZWw6ICdjb250cm9sJ1xuICAgIH0pO1xuICAgIHRoaXMucG9ydC5zdG9wKCk7XG4gICAgZGVsZXRlIHRoaXMucG9ydDtcbiAgfVxuICBkZWxldGUgdGhpcy5wb2xpY3k7XG4gIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xufTtcblxuLyoqXG4gKiBUZXh0dWFsIERlc2NyaXB0aW9uIG9mIHRoZSBQb3J0XG4gKiBAbWV0aG9kIHRvU3RyaW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGlzIFBvcnQuXG4gKi9cbk1vZHVsZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBcIltNb2R1bGUgXCIgKyB0aGlzLm1hbmlmZXN0Lm5hbWUgKyBcIl1cIjtcbn07XG5cbi8qKlxuICogSW50ZXJjZXB0IG1lc3NhZ2VzIGFzIHRoZXkgYXJyaXZlIGZyb20gdGhlIG1vZHVsZSxcbiAqIG1hcHBpbmcgdGhlbSBiZXR3ZWVuIGludGVybmFsIGFuZCBleHRlcm5hbCBmbG93IG5hbWVzLlxuICogQG1ldGhvZCBlbWl0TWVzc2FnZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIGRlc3RpbmF0aW9uIHRoZSBtb2R1bGUgd2FudHMgdG8gc2VuZCB0by5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHNlbmQuXG4gKiBAcHJpdmF0ZVxuICovXG5Nb2R1bGUucHJvdG90eXBlLmVtaXRNZXNzYWdlID0gZnVuY3Rpb24gKG5hbWUsIG1lc3NhZ2UpIHtcbiAgaWYgKHRoaXMuaW50ZXJuYWxQb3J0TWFwW25hbWVdID09PSBmYWxzZSAmJiBtZXNzYWdlLmNoYW5uZWwpIHtcbiAgICB0aGlzLmludGVybmFsUG9ydE1hcFtuYW1lXSA9IG1lc3NhZ2UuY2hhbm5lbDtcbiAgICB0aGlzLmVtaXQoJ2ludGVybmFsQ2hhbm5lbFJlYWR5Jyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIFRlcm1pbmF0ZSBkZWJ1ZyByZWRpcmVjdGlvbiByZXF1ZXN0ZWQgaW4gc3RhcnQoKS5cbiAgaWYgKG5hbWUgPT09ICdjb250cm9sJykge1xuICAgIGlmIChtZXNzYWdlLmZsb3cgPT09ICdkZWJ1ZycgJiYgbWVzc2FnZS5tZXNzYWdlKSB7XG4gICAgICB0aGlzLmRlYnVnLmZvcm1hdChtZXNzYWdlLm1lc3NhZ2Uuc2V2ZXJpdHksXG4gICAgICAgICAgbWVzc2FnZS5tZXNzYWdlLnNvdXJjZSB8fCB0aGlzLnRvU3RyaW5nKCksXG4gICAgICAgICAgbWVzc2FnZS5tZXNzYWdlLm1zZyk7XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLmZsb3cgPT09ICdjb3JlJyAmJiBtZXNzYWdlLm1lc3NhZ2UpIHtcbiAgICAgIGlmICghdGhpcy5jb3JlKSB7XG4gICAgICAgIHRoaXMub25jZSgnY29yZScsIHRoaXMuZW1pdE1lc3NhZ2UuYmluZCh0aGlzLCBuYW1lLCBtZXNzYWdlKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChtZXNzYWdlLm1lc3NhZ2UudHlwZSA9PT0gJ3JlZ2lzdGVyJykge1xuICAgICAgICBtZXNzYWdlLm1lc3NhZ2UucmVwbHkgPSB0aGlzLnBvcnQub25NZXNzYWdlLmJpbmQodGhpcy5wb3J0LCAnY29udHJvbCcpO1xuICAgICAgICB0aGlzLmV4dGVybmFsUG9ydE1hcFttZXNzYWdlLm1lc3NhZ2UuaWRdID0gZmFsc2U7XG4gICAgICB9XG4gICAgICB0aGlzLmNvcmUub25NZXNzYWdlKHRoaXMsIG1lc3NhZ2UubWVzc2FnZSk7XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLm5hbWUgPT09ICdNb2RJbnRlcm5hbCcgJiYgIXRoaXMubW9kSW50ZXJuYWwpIHtcbiAgICAgIHRoaXMubW9kSW50ZXJuYWwgPSBtZXNzYWdlLmNoYW5uZWw7XG4gICAgICB0aGlzLnBvcnQub25NZXNzYWdlKHRoaXMubW9kSW50ZXJuYWwsIHtcbiAgICAgICAgdHlwZTogJ0luaXRpYWxpemF0aW9uJyxcbiAgICAgICAgaWQ6IHRoaXMubWFuaWZlc3RJZCxcbiAgICAgICAgYXBwSWQ6IHRoaXMuaWQsXG4gICAgICAgIG1hbmlmZXN0OiB0aGlzLm1hbmlmZXN0LFxuICAgICAgICBsaW5lYWdlOiB0aGlzLmxpbmVhZ2UsXG4gICAgICAgIGNoYW5uZWw6IG1lc3NhZ2UucmV2ZXJzZVxuICAgICAgfSk7XG4gICAgICB0aGlzLmVtaXQoJ21vZEludGVybmFsJyk7XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLnR5cGUgPT09ICdjcmVhdGVMaW5rJykge1xuICAgICAgdGhpcy5pbnRlcm5hbFBvcnRNYXBbbWVzc2FnZS5uYW1lXSA9IG1lc3NhZ2UuY2hhbm5lbDtcbiAgICAgIHRoaXMucG9ydC5vbk1lc3NhZ2UobWVzc2FnZS5jaGFubmVsLCB7XG4gICAgICAgIHR5cGU6ICdjaGFubmVsIGFubm91bmNlbWVudCcsXG4gICAgICAgIGNoYW5uZWw6IG1lc3NhZ2UucmV2ZXJzZVxuICAgICAgfSk7XG4gICAgICB0aGlzLmVtaXQoJ2ludGVybmFsQ2hhbm5lbFJlYWR5Jyk7XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLnR5cGUgPT09ICdjbG9zZScpIHtcbiAgICAgIHRoaXMuZGVyZWdpc3RlckZsb3cobWVzc2FnZS5jaGFubmVsLCB0cnVlKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAobmFtZSA9PT0gJ01vZEludGVybmFsJyAmJiBtZXNzYWdlLnR5cGUgPT09ICdyZWFkeScgJiYgIXRoaXMuc3RhcnRlZCkge1xuICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XG4gICAgdGhpcy5lbWl0KCdzdGFydCcpO1xuICB9IGVsc2UgaWYgKG5hbWUgPT09ICdNb2RJbnRlcm5hbCcgJiYgbWVzc2FnZS50eXBlID09PSAncmVzb2x2ZScpIHtcbiAgICB0aGlzLnJlc291cmNlLmdldCh0aGlzLm1hbmlmZXN0SWQsIG1lc3NhZ2UuZGF0YSkudGhlbihmdW5jdGlvbiAoaWQsIGRhdGEpIHtcbiAgICAgIHRoaXMucG9ydC5vbk1lc3NhZ2UodGhpcy5tb2RJbnRlcm5hbCwge1xuICAgICAgICB0eXBlOiAncmVzb2x2ZSByZXNwb25zZScsXG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgZGF0YTogZGF0YVxuICAgICAgfSk7XG4gICAgfS5iaW5kKHRoaXMsIG1lc3NhZ2UuaWQpLCBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLmRlYnVnLndhcm4oJ0Vycm9yIFJlc29sdmluZyBVUkwgZm9yIE1vZHVsZS4nKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuZW1pdCh0aGlzLmV4dGVybmFsUG9ydE1hcFtuYW1lXSwgbWVzc2FnZSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBSZXF1ZXN0IHRoZSBleHRlcm5hbCByb3V0ZXMgdXNlZCBieSB0aGlzIG1vZHVsZS5cbiAqIEBtZXRob2QgbG9hZExpbmtzXG4gKiBAcHJpdmF0ZVxuICovXG5Nb2R1bGUucHJvdG90eXBlLmxvYWRMaW5rcyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGksIGNoYW5uZWxzID0gWydkZWZhdWx0J10sIG5hbWUsIGRlcDtcblxuICBpZiAodGhpcy5tYW5pZmVzdC5wZXJtaXNzaW9ucykge1xuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLm1hbmlmZXN0LnBlcm1pc3Npb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBuYW1lID0gdGhpcy5tYW5pZmVzdC5wZXJtaXNzaW9uc1tpXTtcbiAgICAgIGlmIChjaGFubmVscy5pbmRleE9mKG5hbWUpIDwgMCAmJiBuYW1lLmluZGV4T2YoJ2NvcmUuJykgPT09IDApIHtcbiAgICAgICAgY2hhbm5lbHMucHVzaChuYW1lKTtcbiAgICAgICAgdGhpcy5kZXBlbmRhbnRDaGFubmVscy5wdXNoKG5hbWUpO1xuICAgICAgICBkZXAgPSBuZXcgUHJvdmlkZXIodGhpcy5hcGkuZ2V0KG5hbWUpLmRlZmluaXRpb24sIHRoaXMuZGVidWcpO1xuICAgICAgICB0aGlzLmFwaS5wcm92aWRlQ29yZShuYW1lLCBkZXAsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMuZW1pdCh0aGlzLmNvbnRyb2xDaGFubmVsLCB7XG4gICAgICAgICAgdHlwZTogJ0NvcmUgTGluayB0byAnICsgbmFtZSxcbiAgICAgICAgICByZXF1ZXN0OiAnbGluaycsXG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICB0bzogZGVwXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAodGhpcy5tYW5pZmVzdC5kZXBlbmRlbmNpZXMpIHtcbiAgICB1dGlsLmVhY2hQcm9wKHRoaXMubWFuaWZlc3QuZGVwZW5kZW5jaWVzLCBmdW5jdGlvbiAoZGVzYywgbmFtZSkge1xuICAgICAgaWYgKGNoYW5uZWxzLmluZGV4T2YobmFtZSkgPCAwKSB7XG4gICAgICAgIGNoYW5uZWxzLnB1c2gobmFtZSk7XG4gICAgICAgIHRoaXMuZGVwZW5kYW50Q2hhbm5lbHMucHVzaChuYW1lKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVzb3VyY2UuZ2V0KHRoaXMubWFuaWZlc3RJZCwgZGVzYy51cmwpLnRoZW4oZnVuY3Rpb24gKHVybCkge1xuICAgICAgICB0aGlzLnBvbGljeS5nZXQodGhpcy5saW5lYWdlLCB1cmwpLnRoZW4oZnVuY3Rpb24gKGRlcCkge1xuICAgICAgICAgIHRoaXMudXBkYXRlRW52KG5hbWUsIGRlcC5tYW5pZmVzdCk7XG4gICAgICAgICAgdGhpcy5lbWl0KHRoaXMuY29udHJvbENoYW5uZWwsIHtcbiAgICAgICAgICAgIHR5cGU6ICdMaW5rIHRvICcgKyBuYW1lLFxuICAgICAgICAgICAgcmVxdWVzdDogJ2xpbmsnLFxuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIG92ZXJyaWRlRGVzdDogbmFtZSArICcuJyArIHRoaXMuaWQsXG4gICAgICAgICAgICB0bzogZGVwXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0uYmluZCh0aGlzKSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgIHRoaXMuZGVidWcud2FybignZmFpbGVkIHRvIGxvYWQgZGVwOiAnLCBuYW1lLCBlcnIpO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgfS5iaW5kKHRoaXMpLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIHRoaXMuZGVidWcud2FybignZmFpbGVkIHRvIGxvYWQgZGVwOiAnLCBuYW1lLCBlcnIpO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG4gIC8vIE5vdGUgdGhhdCBtZXNzYWdlcyBjYW4gYmUgc3luY2hyb25vdXMsIHNvIHNvbWUgcG9ydHMgbWF5IGFscmVhZHkgYmUgYm91bmQuXG4gIGZvciAoaSA9IDA7IGkgPCBjaGFubmVscy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHRoaXMuZXh0ZXJuYWxQb3J0TWFwW2NoYW5uZWxzW2ldXSA9IHRoaXMuZXh0ZXJuYWxQb3J0TWFwW2NoYW5uZWxzW2ldXSB8fCBmYWxzZTtcbiAgICB0aGlzLmludGVybmFsUG9ydE1hcFtjaGFubmVsc1tpXV0gPSBmYWxzZTtcbiAgfVxufTtcblxuLyoqXG4gKiBVcGRhdGUgdGhlIG1vZHVsZSBlbnZpcm9ubWVudCB3aXRoIGluZm9ybWF0aW9uIGFib3V0IGEgZGVwZW5kZW50IG1hbmlmZXN0LlxuICogQG1ldGhvZCB1cGRhdGVFbnZcbiAqIEBwYXJhbSB7U3RyaW5nfSBkZXAgVGhlIGRlcGVuZGVuY3lcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYW5pZmVzdCBUaGUgbWFuaWZlc3Qgb2YgdGhlIGRlcGVuZGVuY3lcbiAqL1xuTW9kdWxlLnByb3RvdHlwZS51cGRhdGVFbnYgPSBmdW5jdGlvbiAoZGVwLCBtYW5pZmVzdCkge1xuICBpZiAoIW1hbmlmZXN0KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICghdGhpcy5tb2RJbnRlcm5hbCkge1xuICAgIHRoaXMub25jZSgnbW9kSW50ZXJuYWwnLCB0aGlzLnVwZGF0ZUVudi5iaW5kKHRoaXMsIGRlcCwgbWFuaWZlc3QpKTtcbiAgICByZXR1cm47XG4gIH1cbiAgXG4gIHZhciBtZXRhZGF0YTtcblxuICAvLyBEZWNpZGUgaWYvd2hhdCBvdGhlciBwcm9wZXJ0aWVzIHNob3VsZCBiZSBleHBvcnRlZC5cbiAgLy8gS2VlcCBpbiBzeW5jIHdpdGggTW9kdWxlSW50ZXJuYWwudXBkYXRlRW52XG4gIG1ldGFkYXRhID0ge1xuICAgIG5hbWU6IG1hbmlmZXN0Lm5hbWUsXG4gICAgaWNvbjogbWFuaWZlc3QuaWNvbixcbiAgICBkZXNjcmlwdGlvbjogbWFuaWZlc3QuZGVzY3JpcHRpb24sXG4gICAgYXBpOiBtYW5pZmVzdC5hcGlcbiAgfTtcbiAgXG4gIHRoaXMucG9ydC5vbk1lc3NhZ2UodGhpcy5tb2RJbnRlcm5hbCwge1xuICAgIHR5cGU6ICdtYW5pZmVzdCcsXG4gICAgbmFtZTogZGVwLFxuICAgIG1hbmlmZXN0OiBtZXRhZGF0YVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTW9kdWxlO1xuIiwiLypqc2xpbnQgaW5kZW50OjIsIG5vZGU6dHJ1ZSxzbG9wcHk6dHJ1ZSAqL1xudmFyIFByb21pc2VDb21wYXQgPSByZXF1aXJlKCdlczYtcHJvbWlzZScpLlByb21pc2U7XG5cbnZhciBBcGlJbnRlcmZhY2UgPSByZXF1aXJlKCcuL3Byb3h5L2FwaUludGVyZmFjZScpO1xudmFyIFByb3ZpZGVyID0gcmVxdWlyZSgnLi9wcm92aWRlcicpO1xudmFyIFByb3h5QmluZGVyID0gcmVxdWlyZSgnLi9wcm94eWJpbmRlcicpO1xudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuLyoqXG4gKiBUaGUgaW50ZXJuYWwgbG9naWMgZm9yIG1vZHVsZSBzZXR1cCwgd2hpY2ggbWFrZXMgc3VyZSB0aGUgcHVibGljXG4gKiBmYWNpbmcgZXhwb3J0cyBoYXZlIGFwcHJvcHJpYXRlIHByb3BlcnRpZXMsIGFuZCBsb2FkIHVzZXIgc2NyaXB0cy5cbiAqIEBjbGFzcyBNb2R1bGVJbnRlcm5hbFxuICogQGV4dGVuZHMgUG9ydFxuICogQHBhcmFtIHtQb3J0fSBtYW5hZ2VyIFRoZSBtYW5hZ2VyIGluIHRoaXMgbW9kdWxlIHRvIHVzZSBmb3Igcm91dGluZyBzZXR1cC5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG52YXIgTW9kdWxlSW50ZXJuYWwgPSBmdW5jdGlvbiAobWFuYWdlcikge1xuICB0aGlzLmNvbmZpZyA9IHt9O1xuICB0aGlzLm1hbmFnZXIgPSBtYW5hZ2VyO1xuICB0aGlzLmRlYnVnID0gbWFuYWdlci5kZWJ1ZztcbiAgdGhpcy5iaW5kZXIgPSBuZXcgUHJveHlCaW5kZXIodGhpcy5tYW5hZ2VyKTtcbiAgdGhpcy5hcGkgPSB0aGlzLm1hbmFnZXIuYXBpO1xuICB0aGlzLm1hbmlmZXN0cyA9IHt9O1xuICB0aGlzLnByb3ZpZGVycyA9IHt9O1xuICBcbiAgdGhpcy5pZCA9ICdNb2R1bGVJbnRlcm5hbCc7XG4gIHRoaXMucGVuZGluZ1BvcnRzID0gMDtcbiAgdGhpcy5yZXF1ZXN0cyA9IHt9O1xuXG4gIHV0aWwuaGFuZGxlRXZlbnRzKHRoaXMpO1xufTtcblxuLyoqXG4gKiBNZXNzYWdlIGhhbmRsZXIgZm9yIHRoaXMgcG9ydC5cbiAqIFRoaXMgcG9ydCBvbmx5IGhhbmRsZXMgdHdvIG1lc3NhZ2VzOlxuICogVGhlIGZpcnN0IGlzIGl0cyBzZXR1cCBmcm9tIHRoZSBtYW5hZ2VyLCB3aGljaCBpdCB1c2VzIGZvciBjb25maWd1cmF0aW9uLlxuICogVGhlIHNlY29uZCBpcyBmcm9tIHRoZSBtb2R1bGUgY29udHJvbGxlciAoZmRvbS5wb3J0Lk1vZHVsZSksIHdoaWNoIHByb3ZpZGVzXG4gKiB0aGUgbWFuaWZlc3QgaW5mbyBmb3IgdGhlIG1vZHVsZS5cbiAqIEBtZXRob2Qgb25NZXNzYWdlXG4gKiBAcGFyYW0ge1N0cmluZ30gZmxvdyBUaGUgZGV0aW5hdGlvbiBvZiB0aGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICovXG5Nb2R1bGVJbnRlcm5hbC5wcm90b3R5cGUub25NZXNzYWdlID0gZnVuY3Rpb24gKGZsb3csIG1lc3NhZ2UpIHtcbiAgaWYgKGZsb3cgPT09ICdjb250cm9sJykge1xuICAgIGlmICghdGhpcy5jb250cm9sQ2hhbm5lbCAmJiBtZXNzYWdlLmNoYW5uZWwpIHtcbiAgICAgIHRoaXMuY29udHJvbENoYW5uZWwgPSBtZXNzYWdlLmNoYW5uZWw7XG4gICAgICB1dGlsLm1peGluKHRoaXMuY29uZmlnLCBtZXNzYWdlLmNvbmZpZyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGZsb3cgPT09ICdkZWZhdWx0JyAmJiAhdGhpcy5hcHBJZCkge1xuICAgIC8vIFJlY292ZXIgdGhlIElEIG9mIHRoaXMgbW9kdWxlOlxuICAgIHRoaXMucG9ydCA9IHRoaXMubWFuYWdlci5odWIuZ2V0RGVzdGluYXRpb24obWVzc2FnZS5jaGFubmVsKTtcbiAgICB0aGlzLmV4dGVybmFsQ2hhbm5lbCA9IG1lc3NhZ2UuY2hhbm5lbDtcbiAgICB0aGlzLmFwcElkID0gbWVzc2FnZS5hcHBJZDtcbiAgICB0aGlzLmxpbmVhZ2UgPSBtZXNzYWdlLmxpbmVhZ2U7XG5cbiAgICB2YXIgb2JqZWN0cyA9IHRoaXMubWFwUHJveGllcyhtZXNzYWdlLm1hbmlmZXN0KTtcblxuICAgIHRoaXMuZ2VuZXJhdGVFbnYobWVzc2FnZS5tYW5pZmVzdCwgb2JqZWN0cykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5sb2FkTGlua3Mob2JqZWN0cyk7XG4gICAgfS5iaW5kKHRoaXMpKS50aGVuKHRoaXMubG9hZFNjcmlwdHMuYmluZCh0aGlzLCBtZXNzYWdlLmlkLFxuICAgICAgICBtZXNzYWdlLm1hbmlmZXN0LmFwcC5zY3JpcHQpKS50aGVuKG51bGwsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIHRoaXMuZGVidWcuZXJyb3IoJ0NvdWxkIG5vdCBzZXQgdXAgbW9kdWxlICcgKyB0aGlzLmFwcElkICsgJzogJywgZXJyKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9IGVsc2UgaWYgKGZsb3cgPT09ICdkZWZhdWx0JyAmJiB0aGlzLnJlcXVlc3RzW21lc3NhZ2UuaWRdKSB7XG4gICAgdGhpcy5yZXF1ZXN0c1ttZXNzYWdlLmlkXShtZXNzYWdlLmRhdGEpO1xuICAgIGRlbGV0ZSB0aGlzLnJlcXVlc3RzW21lc3NhZ2UuaWRdO1xuICB9IGVsc2UgaWYgKGZsb3cgPT09ICdkZWZhdWx0JyAmJiBtZXNzYWdlLnR5cGUgPT09ICdtYW5pZmVzdCcpIHtcbiAgICB0aGlzLmVtaXQoJ21hbmlmZXN0JywgbWVzc2FnZSk7XG4gICAgdGhpcy51cGRhdGVNYW5pZmVzdChtZXNzYWdlLm5hbWUsIG1lc3NhZ2UubWFuaWZlc3QpO1xuICB9IGVsc2UgaWYgKGZsb3cgPT09ICdkZWZhdWx0JyAmJiBtZXNzYWdlLnR5cGUgPT09ICdDb25uZWN0aW9uJykge1xuICAgIC8vIE11bHRpcGxlIGNvbm5lY3Rpb25zIGNhbiBiZSBtYWRlIHRvIHRoZSBkZWZhdWx0IHByb3ZpZGVyLlxuICAgIGlmIChtZXNzYWdlLmFwaSAmJiB0aGlzLnByb3ZpZGVyc1ttZXNzYWdlLmFwaV0pIHtcbiAgICAgIHRoaXMubWFuYWdlci5jcmVhdGVMaW5rKHRoaXMucHJvdmlkZXJzW21lc3NhZ2UuYXBpXSwgbWVzc2FnZS5jaGFubmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcnQsIG1lc3NhZ2UuY2hhbm5lbCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmRlZmF1bHRQb3J0ICYmXG4gICAgICAgICAgICAgICAobWVzc2FnZS5hcGkgPT09IHRoaXMuZGVmYXVsdFBvcnQuYXBpIHx8ICFtZXNzYWdlLmFwaSkpIHtcbiAgICAgIHRoaXMubWFuYWdlci5jcmVhdGVMaW5rKHRoaXMuZGVmYXVsdFBvcnQsIG1lc3NhZ2UuY2hhbm5lbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9ydCwgbWVzc2FnZS5jaGFubmVsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vbmNlKCdzdGFydCcsIHRoaXMub25NZXNzYWdlLmJpbmQodGhpcywgZmxvdywgbWVzc2FnZSkpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBHZXQgYSB0ZXh0dWFsIGRlc2NyaXB0aW9uIG9mIHRoaXMgUG9ydC5cbiAqIEBtZXRob2QgdG9TdHJpbmdcbiAqIEByZXR1cm4ge1N0cmluZ30gYSBkZXNjcmlwdGlvbiBvZiB0aGlzIFBvcnQuXG4gKi9cbk1vZHVsZUludGVybmFsLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFwiW0Vudmlyb25tZW50IEhlbHBlcl1cIjtcbn07XG5cbi8qKlxuICogR2VuZXJhdGUgYW4gZXh0ZXJuYWx5IHZpc2lzYmxlIG5hbWVzcGFjZVxuICogQG1ldGhvZCBnZW5lcmF0ZUVudlxuICogQHBhcmFtIHtPYmplY3R9IG1hbmlmZXN0IFRoZSBtYW5pZmVzdCBvZiB0aGUgbW9kdWxlLlxuICogQHBhcmFtIHtPYmplY3RbXX0gaXRlbXMgT3RoZXIgaW50ZXJmYWNlcyB0byBsb2FkLlxuICogQHJldHVybnMge1Byb21pc2V9IEEgcHJvbWlzZSB3aGVuIHRoZSBleHRlcm5hbCBuYW1lc3BhY2UgaXMgdmlzaWJsZS5cbiAqIEBwcml2YXRlXG4gKi9cbk1vZHVsZUludGVybmFsLnByb3RvdHlwZS5nZW5lcmF0ZUVudiA9IGZ1bmN0aW9uIChtYW5pZmVzdCwgaXRlbXMpIHtcbiAgcmV0dXJuIHRoaXMuYmluZGVyLmJpbmREZWZhdWx0KHRoaXMucG9ydCwgdGhpcy5hcGksIG1hbmlmZXN0LCB0cnVlKS50aGVuKFxuICAgIGZ1bmN0aW9uIChiaW5kaW5nKSB7XG4gICAgICB2YXIgaSA9IDA7XG4gICAgICBiaW5kaW5nLnBvcnQuYXBpID0gYmluZGluZy5leHRlcm5hbC5hcGk7XG4gICAgICB0aGlzLmRlZmF1bHRQb3J0ID0gYmluZGluZy5wb3J0O1xuICAgICAgaWYgKGJpbmRpbmcuZXh0ZXJuYWwuYXBpKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGlmIChpdGVtc1tpXS5uYW1lID09PSBiaW5kaW5nLmV4dGVybmFsLmFwaSAmJiBpdGVtc1tpXS5kZWYucHJvdmlkZXMpIHtcbiAgICAgICAgICAgIGl0ZW1zLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5jb25maWcuZ2xvYmFsLmZyZWVkb20gPSBiaW5kaW5nLmV4dGVybmFsO1xuICAgIH0uYmluZCh0aGlzKVxuICApO1xufTtcblxuLyoqXG4gKiBBdHRhY2ggYSBwcm94eSB0byB0aGUgZXh0ZXJuYWxseSB2aXNpYmxlIG5hbWVzcGFjZS5cbiAqIEBtZXRob2QgYXR0YWNoXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgcHJveHkuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHByb3ZpZGVzIElmIHRoaXMgcHJveHkgaXMgYSBwcm92aWRlci5cbiAqIEBwYXJhbSB7UHJveHlJbnRlcmZhY2V9IHByb3h5IFRoZSBwcm94eSB0byBhdHRhY2guXG4gKiBAcGFyYW0ge1N0cmluZ30gYXBpIFRoZSBBUEkgdGhlIHByb3h5IGltcGxlbWVudHMuXG4gKiBAcHJpdmF0ZS5cbiAqL1xuTW9kdWxlSW50ZXJuYWwucHJvdG90eXBlLmF0dGFjaCA9IGZ1bmN0aW9uIChuYW1lLCBwcm92aWRlcywgcHJveHkpIHtcbiAgdmFyIGV4cCA9IHRoaXMuY29uZmlnLmdsb2JhbC5mcmVlZG9tO1xuICBcbiAgaWYgKHByb3ZpZGVzKSB7XG4gICAgdGhpcy5wcm92aWRlcnNbbmFtZV0gPSBwcm94eS5wb3J0O1xuICB9XG5cbiAgaWYgKCFleHBbbmFtZV0pIHtcbiAgICBleHBbbmFtZV0gPSBwcm94eS5leHRlcm5hbDtcbiAgICBpZiAodGhpcy5tYW5pZmVzdHNbbmFtZV0pIHtcbiAgICAgIGV4cFtuYW1lXS5tYW5pZmVzdCA9IHRoaXMubWFuaWZlc3RzW25hbWVdO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMucGVuZGluZ1BvcnRzIC09IDE7XG4gIGlmICh0aGlzLnBlbmRpbmdQb3J0cyA9PT0gMCkge1xuICAgIHRoaXMuZW1pdCgnc3RhcnQnKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXF1ZXN0IGEgc2V0IG9mIHByb3h5IGludGVyZmFjZXMsIGFuZCBiaW5kIHRoZW0gdG8gdGhlIGV4dGVybmFsXG4gKiBuYW1lc3BhY2UuXG4gKiBAbWV0aG9kIGxvYWRMaW5rc1xuICogQHBhcmFtIHtPYmplY3RbXX0gaXRlbXMgRGVzY3JpcHRvcnMgb2YgdGhlIHByb3h5IHBvcnRzIHRvIGxvYWQuXG4gKiBAcHJpdmF0ZVxuICogQHJldHVybnMge1Byb21pc2V9IFByb21pc2UgZm9yIHdoZW4gYWxsIGxpbmtzIGFyZSBsb2FkZWQuXG4gKi9cbi8vVE9ETyh3aWxsc2NvdHQpOiBwcm9taXNlIHNob3VsZCBiZSBjaGFpbmVkLCByYXRoZXIgdGhhbiBnb2luZyB0aHJvdWdoIGV2ZW50cy5cbk1vZHVsZUludGVybmFsLnByb3RvdHlwZS5sb2FkTGlua3MgPSBmdW5jdGlvbiAoaXRlbXMpIHtcbiAgdmFyIGksIHByb3h5LCBwcm92aWRlciwgY29yZSxcbiAgICBtYW5pZmVzdFByZWRpY2F0ZSA9IGZ1bmN0aW9uIChuYW1lLCBmbG93LCBtc2cpIHtcbiAgICAgIHJldHVybiBmbG93ID09PSAnbWFuaWZlc3QnICYmIG1zZy5uYW1lID09PSBuYW1lO1xuICAgIH0sXG4gICAgb25NYW5pZmVzdCA9IGZ1bmN0aW9uIChpdGVtLCBtc2cpIHtcbiAgICAgIHZhciBkZWZpbml0aW9uID0ge1xuICAgICAgICBuYW1lOiBpdGVtLmFwaVxuICAgICAgfTtcbiAgICAgIGlmICghbXNnLm1hbmlmZXN0LmFwaSB8fCAhbXNnLm1hbmlmZXN0LmFwaVtpdGVtLmFwaV0pIHtcbiAgICAgICAgZGVmaW5pdGlvbi5kZWZpbml0aW9uID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlZmluaXRpb24uZGVmaW5pdGlvbiA9IG1zZy5tYW5pZmVzdC5hcGlbaXRlbS5hcGldO1xuICAgICAgfVxuICAgICAgdGhpcy5iaW5kZXIuZ2V0RXh0ZXJuYWwodGhpcy5wb3J0LCBpdGVtLm5hbWUsIGRlZmluaXRpb24pLnRoZW4oXG4gICAgICAgIHRoaXMuYXR0YWNoLmJpbmQodGhpcywgaXRlbS5uYW1lLCBmYWxzZSlcbiAgICAgICk7XG4gICAgfS5iaW5kKHRoaXMpLFxuICAgIHByb21pc2UgPSBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB0aGlzLm9uY2UoJ3N0YXJ0JywgcmVzb2x2ZSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcblxuICBmb3IgKGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoaXRlbXNbaV0uYXBpICYmICFpdGVtc1tpXS5kZWYpIHtcbiAgICAgIGlmICh0aGlzLm1hbmlmZXN0c1tpdGVtc1tpXS5uYW1lXSkge1xuICAgICAgICBvbk1hbmlmZXN0KGl0ZW1zW2ldLCB7XG4gICAgICAgICAgbWFuaWZlc3Q6IHRoaXMubWFuaWZlc3RzW2l0ZW1zW2ldLm5hbWVdXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vbmNlKG1hbmlmZXN0UHJlZGljYXRlLmJpbmQoe30sIGl0ZW1zW2ldLm5hbWUpLFxuICAgICAgICAgICAgICAgICAgb25NYW5pZmVzdC5iaW5kKHRoaXMsIGl0ZW1zW2ldKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYmluZGVyLmdldEV4dGVybmFsKHRoaXMucG9ydCwgaXRlbXNbaV0ubmFtZSwgaXRlbXNbaV0uZGVmKS50aGVuKFxuICAgICAgICB0aGlzLmF0dGFjaC5iaW5kKHRoaXMsIGl0ZW1zW2ldLm5hbWUsIGl0ZW1zW2ldLmRlZiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zW2ldLmRlZi5wcm92aWRlcylcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMucGVuZGluZ1BvcnRzICs9IDE7XG4gIH1cbiAgXG4gIC8vIEFsbG93IHJlc29sdXRpb24gb2YgZmlsZXMgYnkgcGFyZW50LlxuICB0aGlzLm1hbmFnZXIucmVzb3VyY2UuYWRkUmVzb2x2ZXIoZnVuY3Rpb24gKG1hbmlmZXN0LCB1cmwsIHJlc29sdmUpIHtcbiAgICB2YXIgaWQgPSB1dGlsLmdldElkKCk7XG4gICAgdGhpcy5yZXF1ZXN0c1tpZF0gPSByZXNvbHZlO1xuICAgIHRoaXMuZW1pdCh0aGlzLmV4dGVybmFsQ2hhbm5lbCwge1xuICAgICAgdHlwZTogJ3Jlc29sdmUnLFxuICAgICAgaWQ6IGlkLFxuICAgICAgZGF0YTogdXJsXG4gICAgfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0uYmluZCh0aGlzKSk7XG5cbiAgLy8gQXR0YWNoIENvcmUuXG4gIHRoaXMucGVuZGluZ1BvcnRzICs9IDE7XG5cbiAgY29yZSA9IHRoaXMuYXBpLmdldCgnY29yZScpLmRlZmluaXRpb247XG4gIHByb3ZpZGVyID0gbmV3IFByb3ZpZGVyKGNvcmUsIHRoaXMuZGVidWcpO1xuICB0aGlzLm1hbmFnZXIuZ2V0Q29yZShmdW5jdGlvbiAoQ29yZVByb3YpIHtcbiAgICBuZXcgQ29yZVByb3YodGhpcy5tYW5hZ2VyKS5zZXRJZCh0aGlzLmxpbmVhZ2UpO1xuICAgIHByb3ZpZGVyLmdldEludGVyZmFjZSgpLnByb3ZpZGVBc3luY2hyb25vdXMoQ29yZVByb3YpO1xuICB9LmJpbmQodGhpcykpO1xuXG4gIHRoaXMuZW1pdCh0aGlzLmNvbnRyb2xDaGFubmVsLCB7XG4gICAgdHlwZTogJ0xpbmsgdG8gY29yZScsXG4gICAgcmVxdWVzdDogJ2xpbmsnLFxuICAgIG5hbWU6ICdjb3JlJyxcbiAgICB0bzogcHJvdmlkZXJcbiAgfSk7XG4gIFxuICB0aGlzLmJpbmRlci5nZXRFeHRlcm5hbChwcm92aWRlciwgJ2RlZmF1bHQnLCB7XG4gICAgbmFtZTogJ2NvcmUnLFxuICAgIGRlZmluaXRpb246IGNvcmVcbiAgfSkudGhlbihcbiAgICB0aGlzLmF0dGFjaC5iaW5kKHRoaXMsICdjb3JlJywgZmFsc2UpXG4gICk7XG5cblxuLy8gIHByb3h5ID0gbmV3IFByb3h5KEFwaUludGVyZmFjZS5iaW5kKHt9LCBjb3JlKSwgdGhpcy5kZWJ1Zyk7XG4vLyAgdGhpcy5tYW5hZ2VyLmNyZWF0ZUxpbmsocHJvdmlkZXIsICdkZWZhdWx0JywgcHJveHkpO1xuLy8gIHRoaXMuYXR0YWNoKCdjb3JlJywge3BvcnQ6IHByLCBleHRlcm5hbDogcHJveHl9KTtcblxuICBpZiAodGhpcy5wZW5kaW5nUG9ydHMgPT09IDApIHtcbiAgICB0aGlzLmVtaXQoJ3N0YXJ0Jyk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbi8qKlxuICogVXBkYXRlIHRoZSBleHBvcnRlZCBtYW5pZmVzdCBvZiBhIGRlcGVuZGVuY3kuXG4gKiBTZXRzIGl0IGludGVybmFsbHkgaWYgbm90IHlldCBleHBvcnRlZCwgb3IgYXR0YWNoZXMgdGhlIHByb3BlcnR5IGlmIGl0XG4gKiBpcyBsb2FkZWQgYWZ0ZXIgdGhlIG1vZHVsZSBoYXMgc3RhcnRlZCAod2UgZG9uJ3QgZGVsYXkgc3RhcnQgdG8gcmV0cmVpdmVcbiAqIHRoZSBtYW5pZmVzdCBvZiB0aGUgZGVwZW5kZW5jeS4pXG4gKiBAbWV0aG9kIHVwZGF0ZU1hbmlmZXN0XG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgRGVwZW5kZW5jeVxuICogQHBhcmFtIHtPYmplY3R9IG1hbmlmZXN0IFRoZSBtYW5pZmVzdCBvZiB0aGUgZGVwZW5kZW5jeVxuICovXG5Nb2R1bGVJbnRlcm5hbC5wcm90b3R5cGUudXBkYXRlTWFuaWZlc3QgPSBmdW5jdGlvbiAobmFtZSwgbWFuaWZlc3QpIHtcbiAgdmFyIGV4cCA9IHRoaXMuY29uZmlnLmdsb2JhbC5mcmVlZG9tO1xuXG4gIGlmIChleHAgJiYgZXhwW25hbWVdKSB7XG4gICAgZXhwW25hbWVdLm1hbmlmZXN0ID0gbWFuaWZlc3Q7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5tYW5pZmVzdHNbbmFtZV0gPSBtYW5pZmVzdDtcbiAgfVxufTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hpY2ggcHJveHkgcG9ydHMgc2hvdWxkIGJlIGV4cG9zZWQgYnkgdGhpcyBtb2R1bGUuXG4gKiBAbWV0aG9kIG1hcFByb3hpZXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYW5pZmVzdCB0aGUgbW9kdWxlIEpTT04gbWFuaWZlc3QuXG4gKiBAcmV0dXJuIHtPYmplY3RbXX0gcHJveHkgZGVzY3JpcHRvcnMgZGVmaW5lZCBpbiB0aGUgbWFuaWZlc3QuXG4gKi9cbk1vZHVsZUludGVybmFsLnByb3RvdHlwZS5tYXBQcm94aWVzID0gZnVuY3Rpb24gKG1hbmlmZXN0KSB7XG4gIHZhciBwcm94aWVzID0gW10sIHNlZW4gPSBbJ2NvcmUnXSwgaSwgb2JqO1xuICBcbiAgaWYgKG1hbmlmZXN0LnBlcm1pc3Npb25zKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IG1hbmlmZXN0LnBlcm1pc3Npb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBvYmogPSB7XG4gICAgICAgIG5hbWU6IG1hbmlmZXN0LnBlcm1pc3Npb25zW2ldLFxuICAgICAgICBkZWY6IHVuZGVmaW5lZFxuICAgICAgfTtcbiAgICAgIG9iai5kZWYgPSB0aGlzLmFwaS5nZXQob2JqLm5hbWUpO1xuICAgICAgaWYgKHNlZW4uaW5kZXhPZihvYmoubmFtZSkgPCAwICYmIG9iai5kZWYpIHtcbiAgICAgICAgcHJveGllcy5wdXNoKG9iaik7XG4gICAgICAgIHNlZW4ucHVzaChvYmoubmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBpZiAobWFuaWZlc3QuZGVwZW5kZW5jaWVzKSB7XG4gICAgdXRpbC5lYWNoUHJvcChtYW5pZmVzdC5kZXBlbmRlbmNpZXMsIGZ1bmN0aW9uIChkZXNjLCBuYW1lKSB7XG4gICAgICBvYmogPSB7XG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIGFwaTogZGVzYy5hcGlcbiAgICAgIH07XG4gICAgICBpZiAoc2Vlbi5pbmRleE9mKG5hbWUpIDwgMCkge1xuICAgICAgICBpZiAoZGVzYy5hcGkpIHtcbiAgICAgICAgICBvYmouZGVmID0gdGhpcy5hcGkuZ2V0KGRlc2MuYXBpKTtcbiAgICAgICAgfVxuICAgICAgICBwcm94aWVzLnB1c2gob2JqKTtcbiAgICAgICAgc2Vlbi5wdXNoKG5hbWUpO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cbiAgXG4gIGlmIChtYW5pZmVzdC5wcm92aWRlcykge1xuICAgIGZvciAoaSA9IDA7IGkgPCBtYW5pZmVzdC5wcm92aWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgb2JqID0ge1xuICAgICAgICBuYW1lOiBtYW5pZmVzdC5wcm92aWRlc1tpXSxcbiAgICAgICAgZGVmOiB1bmRlZmluZWRcbiAgICAgIH07XG4gICAgICBvYmouZGVmID0gdGhpcy5hcGkuZ2V0KG9iai5uYW1lKTtcbiAgICAgIGlmIChvYmouZGVmKSB7XG4gICAgICAgIG9iai5kZWYucHJvdmlkZXMgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChtYW5pZmVzdC5hcGkgJiYgbWFuaWZlc3QuYXBpW29iai5uYW1lXSkge1xuICAgICAgICBvYmouZGVmID0ge1xuICAgICAgICAgIG5hbWU6IG9iai5uYW1lLFxuICAgICAgICAgIGRlZmluaXRpb246IG1hbmlmZXN0LmFwaVtvYmoubmFtZV0sXG4gICAgICAgICAgcHJvdmlkZXM6IHRydWVcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGVidWcud2FybignTW9kdWxlIHdpbGwgbm90IHByb3ZpZGUgXCInICsgb2JqLm5hbWUgK1xuICAgICAgICAgICdcIiwgc2luY2Ugbm8gZGVjbGFyYXRpb24gY2FuIGJlIGZvdW5kLicpO1xuICAgICAgICAvKmpzbGludCBjb250aW51ZTp0cnVlKi9cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICAvKmpzbGludCBjb250aW51ZTpmYWxzZSovXG4gICAgICBpZiAoc2Vlbi5pbmRleE9mKG9iai5uYW1lKSA8IDApIHtcbiAgICAgICAgcHJveGllcy5wdXNoKG9iaik7XG4gICAgICAgIHNlZW4ucHVzaChvYmoubmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3hpZXM7XG59O1xuXG4vKipcbiAqIExvYWQgZXh0ZXJuYWwgc2NyaXB0cyBpbnRvIHRoaXMgbmFtZXNwYWNlLlxuICogQG1ldGhvZCBsb2FkU2NyaXB0c1xuICogQHBhcmFtIHtTdHJpbmd9IGZyb20gVGhlIFVSTCBvZiB0aGlzIG1vZHVsZXMncyBtYW5pZmVzdC5cbiAqIEBwYXJhbSB7U3RyaW5nW119IHNjcmlwdHMgVGhlIFVSTHMgb2YgdGhlIHNjcmlwdHMgdG8gbG9hZC5cbiAqL1xuTW9kdWxlSW50ZXJuYWwucHJvdG90eXBlLmxvYWRTY3JpcHRzID0gZnVuY3Rpb24gKGZyb20sIHNjcmlwdHMpIHtcbiAgLy8gVE9ETyhzYWxvbWVnZW8pOiBhZGQgYSB0ZXN0IGZvciBmYWlsdXJlLlxuICB2YXIgaW1wb3J0ZXIgPSBmdW5jdGlvbiAoc2NyaXB0LCByZXNvbHZlLCByZWplY3QpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5jb25maWcuZ2xvYmFsLmltcG9ydFNjcmlwdHMoc2NyaXB0KTtcbiAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmVqZWN0KGUpO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpLFxuICAgIHNjcmlwdHNfY291bnQsXG4gICAgbG9hZDtcbiAgaWYgKHR5cGVvZiBzY3JpcHRzID09PSAnc3RyaW5nJykge1xuICAgIHNjcmlwdHNfY291bnQgPSAxO1xuICB9IGVsc2Uge1xuICAgIHNjcmlwdHNfY291bnQgPSBzY3JpcHRzLmxlbmd0aDtcbiAgfVxuXG4gIGxvYWQgPSBmdW5jdGlvbiAobmV4dCkge1xuICAgIGlmIChuZXh0ID09PSBzY3JpcHRzX2NvdW50KSB7XG4gICAgICB0aGlzLmVtaXQodGhpcy5leHRlcm5hbENoYW5uZWwsIHtcbiAgICAgICAgdHlwZTogXCJyZWFkeVwiXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgc2NyaXB0O1xuICAgIGlmICh0eXBlb2Ygc2NyaXB0cyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHNjcmlwdCA9IHNjcmlwdHM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjcmlwdCA9IHNjcmlwdHNbbmV4dF07XG4gICAgfVxuXG4gICAgdGhpcy5tYW5hZ2VyLnJlc291cmNlLmdldChmcm9tLCBzY3JpcHQpLnRoZW4oZnVuY3Rpb24gKHVybCkge1xuICAgICAgdGhpcy50cnlMb2FkKGltcG9ydGVyLCB1cmwpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBsb2FkKG5leHQgKyAxKTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfS5iaW5kKHRoaXMpO1xuXG5cblxuICBpZiAoIXRoaXMuY29uZmlnLmdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgaW1wb3J0ZXIgPSBmdW5jdGlvbiAodXJsLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBzY3JpcHQgPSB0aGlzLmNvbmZpZy5nbG9iYWwuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICBzY3JpcHQuc3JjID0gdXJsO1xuICAgICAgc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCByZXNvbHZlLCB0cnVlKTtcbiAgICAgIHRoaXMuY29uZmlnLmdsb2JhbC5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgbG9hZCgwKTtcbn07XG5cbi8qKlxuICogQXR0ZW1wdCB0byBsb2FkIHJlc29sdmVkIHNjcmlwdHMgaW50byB0aGUgbmFtZXNwYWNlLlxuICogQG1ldGhvZCB0cnlMb2FkXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gaW1wb3J0ZXIgVGhlIGFjdHVhbCBpbXBvcnQgZnVuY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nW119IHVybHMgVGhlIHJlc292ZWQgVVJMcyB0byBsb2FkLlxuICogQHJldHVybnMge1Byb21pc2V9IGNvbXBsZXRpb24gb2YgbG9hZFxuICovXG5Nb2R1bGVJbnRlcm5hbC5wcm90b3R5cGUudHJ5TG9hZCA9IGZ1bmN0aW9uIChpbXBvcnRlciwgdXJsKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNvbXBhdChpbXBvcnRlci5iaW5kKHt9LCB1cmwpKS50aGVuKGZ1bmN0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gdmFsO1xuICB9LCBmdW5jdGlvbiAoZSkge1xuICAgIHRoaXMuZGVidWcud2FybihlLnN0YWNrKTtcbiAgICB0aGlzLmRlYnVnLmVycm9yKFwiRXJyb3IgbG9hZGluZyBcIiArIHVybCwgZSk7XG4gICAgdGhpcy5kZWJ1Zy5lcnJvcihcIklmIHRoZSBzdGFjayB0cmFjZSBpcyBub3QgdXNlZnVsLCBzZWUgaHR0cHM6Ly9cIiArXG4gICAgICAgIFwiZ2l0aHViLmNvbS9mcmVlZG9tanMvZnJlZWRvbS93aWtpL0RlYnVnZ2luZy1TY3JpcHQtUGFyc2UtRXJyb3JzXCIpO1xuICB9LmJpbmQodGhpcykpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBNb2R1bGVJbnRlcm5hbDtcbiIsIi8qZ2xvYmFscyBYTUxIdHRwUmVxdWVzdCAqL1xuLypqc2xpbnQgaW5kZW50OjIsd2hpdGU6dHJ1ZSxub2RlOnRydWUsc2xvcHB5OnRydWUgKi9cbnZhciBQcm9taXNlQ29tcGF0ID0gcmVxdWlyZSgnZXM2LXByb21pc2UnKS5Qcm9taXNlO1xudmFyIE1vZHVsZSA9IHJlcXVpcmUoJy4vbW9kdWxlJyk7XG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG4vKipcbiAqIFRoZSBQb2xpY3kgcmVnaXN0cnkgZm9yIGZyZWVkb20uanMuICBVc2VkIHRvIGxvb2sgdXAgbW9kdWxlcyBhbmQgcHJvdmlkZVxuICogbWlncmF0aW9uIGFuZCBjb2FsbGVzaW5nIG9mIGV4ZWN1dGlvbi5cbiAqIEBDbGFzcyBQb2xpY3lcbiAqIEBwYXJhbSB7TWFuYWdlcn0gbWFuYWdlciBUaGUgbWFuYWdlciBvZiB0aGUgYWN0aXZlIHJ1bnRpbWUuXG4gKiBAcGFyYW0ge1Jlc291cmNlfSByZXNvdXJjZSBUaGUgcmVzb3VyY2UgbG9hZGVyIG9mIHRoZSBhY3RpdmUgcnVudGltZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGxvY2FsIGNvbmZpZy5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG52YXIgUG9saWN5ID0gZnVuY3Rpb24obWFuYWdlciwgcmVzb3VyY2UsIGNvbmZpZykge1xuICB0aGlzLmFwaSA9IG1hbmFnZXIuYXBpO1xuICB0aGlzLmRlYnVnID0gbWFuYWdlci5kZWJ1ZztcbiAgdGhpcy5sb2NhdGlvbiA9IGNvbmZpZy5sb2NhdGlvbjtcbiAgdGhpcy5yZXNvdXJjZSA9IHJlc291cmNlO1xuXG4gIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICB0aGlzLnJ1bnRpbWVzID0gW107XG4gIHRoaXMucG9saWNpZXMgPSBbXTtcbiAgdGhpcy5wZW5kaW5nID0ge307XG4gIHV0aWwuaGFuZGxlRXZlbnRzKHRoaXMpO1xuXG4gIHRoaXMuYWRkKG1hbmFnZXIsIGNvbmZpZy5wb2xpY3kpO1xuICB0aGlzLnJ1bnRpbWVzWzBdLmxvY2FsID0gdHJ1ZTtcbn07XG5cbi8qKlxuICogVGhlIHBvbGljeSBhIHJ1bnRpbWUgaXMgZXhwZWN0ZWQgdG8gaGF2ZSB1bmxlc3MgaXQgc3BlY2lmaWVzXG4gKiBvdGhlcndpc2UuXG4gKiBUT0RPOiBjb25zaWRlciBtYWtpbmcgc3RhdGljXG4gKiBAcHJvcGVydHkgZGVmYXVsdFBvbGljeVxuICovXG5Qb2xpY3kucHJvdG90eXBlLmRlZmF1bHRQb2xpY3kgPSB7XG4gIGJhY2tncm91bmQ6IGZhbHNlLCAvLyBDYW4gdGhpcyBydW50aW1lIHJ1biAnYmFja2dyb3VuZCcgbW9kdWxlcz9cbiAgaW50ZXJhY3RpdmU6IHRydWUgLy8gSXMgdGhlcmUgYSB2aWV3IGFzc29jaWF0ZWQgd2l0aCB0aGlzIHJ1bnRpbWU/XG4gIC8vIFRPRE86IHJlbWFpbmluZyBydW50aW1lIHBvbGljeS5cbn07XG5cbi8qKlxuICogVGhlIGNvbnN0cmFpbnRzIGEgY29kZSBtb2R1bGVzIGlzIGV4cGVjdGVkIHRvIGhhdmUgdW5sZXNzIGl0IHNwZWNpZmllc1xuICogb3RoZXJ3aXNlLlxuICogVE9ETzogY29uc2lkZXIgbWFraW5nIHN0YXRpY1xuICogQHByb3BlcnR5IGRlZmF1bHRDb25zdHJhaW50c1xuICovXG5Qb2xpY3kucHJvdG90eXBlLmRlZmF1bHRDb25zdHJhaW50cyA9IHtcbiAgaXNvbGF0aW9uOiBcImFsd2F5c1wiLCAvLyB2YWx1ZXM6IGFsd2F5cywgYXBwLCBuZXZlclxuICBwbGFjZW1lbnQ6IFwibG9jYWxcIiAvLyB2YWx1ZXM6IGxvY2FsLCBzdGFibGUsIHJlZHVuZGFudFxuICAvLyBUT0RPOiByZW1haW5pbmcgY29uc3RyYWludHMsIGV4cHJlc3MgcGxhdGZvcm0tc3BlY2lmaWMgZGVwZW5kZW5jaWVzLlxufTtcblxuLyoqXG4gKiBSZXNvbHZlIGEgbW9kdWxlIGZyb20gaXRzIGNhbm9uaWNhbCBVUkwuXG4gKiBSZXBvbmRzIHdpdGggdGhlIHByb21pc2Ugb2YgYSBwb3J0IHJlcHJlc2VudGluZyB0aGUgbW9kdWxlLCBcbiAqIEBtZXRob2QgZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ1tdfSBsaW5lYWdlIFRoZSBsaW5lYWdlIG9mIHRoZSByZXF1ZXN0aW5nIG1vZHVsZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBUaGUgY2Fub25pY2FsIElEIG9mIHRoZSBtb2R1bGUgdG8gZ2V0LlxuICogQHJldHVybnMge1Byb21pc2V9IEEgcHJvbWlzZSBmb3IgdGhlIGxvY2FsIHBvcnQgdG93YXJkcyB0aGUgbW9kdWxlLlxuICovXG5Qb2xpY3kucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKGxpbmVhZ2UsIGlkKSB7XG4gIFxuICAvLyBNYWtlIHN1cmUgdGhhdCBhIG1vZHVsZSBpc24ndCBnZXR0aW5nIGxvY2F0ZWQgdHdpY2UgYXQgdGhlIHNhbWUgdGltZS5cbiAgLy8gVGhpcyBpcyByZXNvbHZlZCBieSBkZWxheWluZyBpZiBpdCB1bnRpbCB3ZSBzZWUgaXQgaW4gYSAnbW9kdWxlQWRkJyBldmVudC5cbiAgaWYgKHRoaXMucGVuZGluZ1tpZF0pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2VDb21wYXQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdGhpcy5vbmNlKCdwbGFjZWQnLCBmdW5jdGlvbihsLCBpKSB7XG4gICAgICAgIHRoaXMuZ2V0KGwsIGkpLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0uYmluZCh0aGlzLCBsaW5lYWdlLCBpZCkpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5wZW5kaW5nW2lkXSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gdGhpcy5sb2FkTWFuaWZlc3QoaWQpLnRoZW4oZnVuY3Rpb24obWFuaWZlc3QpIHtcbiAgICB2YXIgY29uc3RyYWludHMgPSB0aGlzLm92ZXJsYXkodGhpcy5kZWZhdWx0Q29uc3RyYWludHMsIG1hbmlmZXN0LmNvbnN0cmFpbnRzKSxcbiAgICAgICAgcnVudGltZSA9IHRoaXMuZmluZERlc3RpbmF0aW9uKGxpbmVhZ2UsIGlkLCBjb25zdHJhaW50cyksXG4gICAgICAgIHBvcnRJZDtcbiAgICBpZiAocnVudGltZS5sb2NhbCkge1xuICAgICAgcG9ydElkID0gdGhpcy5pc1J1bm5pbmcocnVudGltZSwgaWQsIGxpbmVhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0cmFpbnRzLmlzb2xhdGlvbiAhPT0gJ25ldmVyJyk7XG4gICAgICBpZihjb25zdHJhaW50cy5pc29sYXRpb24gIT09ICdhbHdheXMnICYmIHBvcnRJZCkge1xuICAgICAgICB0aGlzLmRlYnVnLmluZm8oJ1JldXNlZCBwb3J0ICcgKyBwb3J0SWQpO1xuICAgICAgICBkZWxldGUgdGhpcy5wZW5kaW5nW2lkXTtcbiAgICAgICAgdGhpcy5lbWl0KCdwbGFjZWQnKTtcbiAgICAgICAgcmV0dXJuIHJ1bnRpbWUubWFuYWdlci5nZXRQb3J0KHBvcnRJZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IE1vZHVsZShpZCwgbWFuaWZlc3QsIGxpbmVhZ2UsIHRoaXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUT0RPOiBDcmVhdGUgYSBwb3J0IHRvIGdvIHRvIHRoZSByZW1vdGUgcnVudGltZS5cbiAgICAgIHRoaXMuZGVidWcuZXJyb3IoJ1VuZXhwZWN0ZWQgbG9jYXRpb24gc2VsZWN0ZWQgZm9yIG1vZHVsZSBwbGFjZW1lbnQnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgdGhpcy5kZWJ1Zy5lcnJvcignUG9saWN5IEVycm9yIFJlc29sdmluZyAnICsgaWQsIGVycik7XG4gICAgdGhyb3coZXJyKTtcbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cbi8qKlxuICogRmluZCB0aGUgcnVudGltZSBkZXN0aW5hdGlvbiBmb3IgYSBtb2R1bGUgZ2l2ZW4gaXRzIGNvbnN0cmFpbnRzIGFuZCB0aGVcbiAqIG1vZHVsZSBjcmVhdGluZyBpdC5cbiAqIEBtZXRob2QgZmluZERlc3RpbmF0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ1tdfSBsaW5lYWdlIFRoZSBpZGVudGl0eSBvZiB0aGUgbW9kdWxlIGNyZWF0aW5nIHRoaXMgbW9kdWxlLlxuICogQHBhcmFtIHtTdHJpbmddIGlkIFRoZSBjYW5vbmljYWwgdXJsIG9mIHRoZSBtb2R1bGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25zdHJhaW50cyBDb25zdHJhaW50cyBmb3IgdGhlIG1vZHVsZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBlbGVtZW50IG9mIHRoaXMucnVudGltZXMgd2hlcmUgdGhlIG1vZHVsZSBzaG91bGQgcnVuLlxuICovXG5Qb2xpY3kucHJvdG90eXBlLmZpbmREZXN0aW5hdGlvbiA9IGZ1bmN0aW9uKGxpbmVhZ2UsIGlkLCBjb25zdHJhaW50cykge1xuICB2YXIgaTtcblxuICAvLyBTdGVwIDE6IGlmIGFuIGluc3RhbmNlIGFscmVhZHkgZXhpc3RzLCB0aGUgbVxuICBpZiAoY29uc3RyYWludHMuaXNvbGF0aW9uICE9PSAnYWx3YXlzJykge1xuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnBvbGljaWVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodGhpcy5pc1J1bm5pbmcodGhpcy5ydW50aW1lc1tpXSwgaWQsIGxpbmVhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29uc3RyYWludHMuaXNvbGF0aW9uICE9PSAnbmV2ZXInKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5ydW50aW1lc1tpXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBTdGVwIDI6IGlmIHRoZSBtb2R1bGUgd2FudHMgc3RhYmlsaXR5LCBpdCBtYXkgbmVlZCB0byBiZSByZW1vdGUuXG4gIGlmIChjb25zdHJhaW50cy5wbGFjZW1lbnQgPT09ICdsb2NhbCcpIHtcbiAgICByZXR1cm4gdGhpcy5ydW50aW1lc1swXTtcbiAgfSBlbHNlIGlmIChjb25zdHJhaW50cy5wbGFjZW1lbnQgPT09ICdzdGFibGUnKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMucG9saWNpZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICh0aGlzLnBvbGljaWVzW2ldLmJhY2tncm91bmQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucnVudGltZXNbaV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gU3RlcCAzOiBpZiB0aGUgbW9kdWxlIG5lZWRzIGxvbmdldml0eSAvIGludGVyYWN0aXZpdHksIGl0IG1heSB3YW50IHRvIGJlIHJlbW90ZS5cbiAgcmV0dXJuIHRoaXMucnVudGltZXNbMF07XG59O1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIGtub3duIHJ1bnRpbWUgaXMgcnVubmluZyBhbiBhcHByb3ByaWF0ZSBpbnN0YW5jZSBvZiBhIG1vZHVsZS5cbiAqIEBtZXRob2QgaXNSdW5uaW5nXG4gKiBAcGFyYW0ge09iamVjdH0gcnVudGltZSBUaGUgcnVudGltZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBUaGUgbW9kdWxlIHRvIGxvb2sgZm9yLlxuICogQHBhcmFtIHtTdHJpbmdbXX0gZnJvbSBUaGUgaWRlbnRpZmllciBvZiB0aGUgcmVxdWVzdGluZyBtb2R1bGUuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGZ1bGxNYXRjaCBJZiB0aGUgbW9kdWxlIG5lZWRzIHRvIGJlIGluIHRoZSBzYW1lIGFwcC5cbiAqIEByZXR1cm5zIHtTdHJpbmd8Qm9vbGVhbn0gVGhlIE1vZHVsZSBpZCBpZiBpdCBpcyBydW5uaW5nLCBvciBmYWxzZSBpZiBub3QuXG4gKi9cblBvbGljeS5wcm90b3R5cGUuaXNSdW5uaW5nID0gZnVuY3Rpb24ocnVudGltZSwgaWQsIGZyb20sIGZ1bGxNYXRjaCkge1xuICB2YXIgaSA9IDAsIGogPSAwLCBva2F5O1xuICBmb3IgKGkgPSAwOyBpIDwgcnVudGltZS5tb2R1bGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGZ1bGxNYXRjaCAmJiBydW50aW1lLm1vZHVsZXNbaV0ubGVuZ3RoID09PSBmcm9tLmxlbmd0aCArIDEpIHtcbiAgICAgIG9rYXkgPSB0cnVlO1xuICAgICAgZm9yIChqID0gMDsgaiA8IGZyb20ubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgaWYgKHJ1bnRpbWUubW9kdWxlc1tpXVtqICsgMV0uaW5kZXhPZihmcm9tW2pdKSAhPT0gMCkge1xuICAgICAgICAgIG9rYXkgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHJ1bnRpbWUubW9kdWxlc1tpXVswXS5pbmRleE9mKGlkKSAhPT0gMCkge1xuICAgICAgICBva2F5ID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChva2F5KSB7XG4gICAgICAgIHJldHVybiBydW50aW1lLm1vZHVsZXNbaV1bMF07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghZnVsbE1hdGNoICYmIHJ1bnRpbWUubW9kdWxlc1tpXVswXS5pbmRleE9mKGlkKSA9PT0gMCkge1xuICAgICAgcmV0dXJuIHJ1bnRpbWUubW9kdWxlc1tpXVswXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBHZXQgYSBwcm9taXNlIG9mIHRoZSBtYW5pZmVzdCBmb3IgYSBtb2R1bGUgSUQuXG4gKiBAbWV0aG9kIGxvYWRNYW5pZmVzdFxuICogQHBhcmFtIHtTdHJpbmd9IG1hbmlmZXN0IFRoZSBjYW5vbmljYWwgSUQgb2YgdGhlIG1hbmlmZXN0XG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gUHJvbWlzZSBmb3IgdGhlIGpzb24gY29udGVudHMgb2YgdGhlIG1hbmlmZXN0LlxuICovXG5Qb2xpY3kucHJvdG90eXBlLmxvYWRNYW5pZmVzdCA9IGZ1bmN0aW9uKG1hbmlmZXN0KSB7XG4gIHJldHVybiB0aGlzLnJlc291cmNlLmdldENvbnRlbnRzKG1hbmlmZXN0KS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgcmVzcCA9IHt9O1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcbiAgICB9IGNhdGNoKGVycikge1xuICAgICAgdGhpcy5kZWJ1Zy5lcnJvcihcIkZhaWxlZCB0byBsb2FkIFwiICsgbWFuaWZlc3QgKyBcIjogXCIgKyBlcnIpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gTWFuaWZlc3QgQXZhaWxhYmxlXCIpO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cbi8qKlxuICogQWRkIGEgcnVudGltZSB0byBrZWVwIHRyYWNrIG9mIGluIHRoaXMgcG9saWN5LlxuICogQG1ldGhvZCBhZGRcbiAqIEBwYXJhbSB7ZmRvbS5wb3J0fSBwb3J0IFRoZSBwb3J0IHRvIHVzZSBmb3IgbW9kdWxlIGxpZmV0aW1lIGluZm9cbiAqIEBwYXJhbSB7T2JqZWN0fSBwb2xpY3kgVGhlIHBvbGljeSBvZiB0aGUgcnVudGltZS5cbiAqL1xuUG9saWN5LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihwb3J0LCBwb2xpY3kpIHtcbiAgdmFyIHJ1bnRpbWUgPSB7XG4gICAgbWFuYWdlcjogcG9ydCxcbiAgICBtb2R1bGVzOiBbXVxuICB9O1xuICB0aGlzLnJ1bnRpbWVzLnB1c2gocnVudGltZSk7XG4gIHRoaXMucG9saWNpZXMucHVzaCh0aGlzLm92ZXJsYXkodGhpcy5kZWZhdWx0UG9saWN5LCBwb2xpY3kpKTtcblxuICBwb3J0Lm9uKCdtb2R1bGVBZGQnLCBmdW5jdGlvbihydW50aW1lLCBpbmZvKSB7XG4gICAgdmFyIGxpbmVhZ2UgPSBbXTtcbiAgICBsaW5lYWdlID0gbGluZWFnZS5jb25jYXQoaW5mby5saW5lYWdlKTtcbiAgICBsaW5lYWdlWzBdID0gaW5mby5pZDtcbiAgICBydW50aW1lLm1vZHVsZXMucHVzaChsaW5lYWdlKTtcbiAgICBpZiAodGhpcy5wZW5kaW5nW2luZm8ubGluZWFnZVswXV0pIHtcbiAgICAgIGRlbGV0ZSB0aGlzLnBlbmRpbmdbaW5mby5saW5lYWdlWzBdXTtcbiAgICAgIHRoaXMuZW1pdCgncGxhY2VkJyk7XG4gICAgfVxuICB9LmJpbmQodGhpcywgcnVudGltZSkpO1xuICBwb3J0Lm9uKCdtb2R1bGVSZW1vdmUnLCBmdW5jdGlvbihydW50aW1lLCBpbmZvKSB7XG4gICAgdmFyIGxpbmVhZ2UgPSBbXSwgaSwgbW9kRmluZ2VycHJpbnQ7XG4gICAgbGluZWFnZSA9IGxpbmVhZ2UuY29uY2F0KGluZm8ubGluZWFnZSk7XG4gICAgbGluZWFnZVswXSA9IGluZm8uaWQ7XG4gICAgbW9kRmluZ2VycHJpbnQgPSBsaW5lYWdlLnRvU3RyaW5nKCk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgcnVudGltZS5tb2R1bGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAocnVudGltZS5tb2R1bGVzW2ldLnRvU3RyaW5nKCkgPT09IG1vZEZpbmdlcnByaW50KSB7XG4gICAgICAgIHJ1bnRpbWUubW9kdWxlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5kZWJ1Zy53YXJuKCdVbmtub3duIG1vZHVsZSB0byByZW1vdmU6ICcsIGluZm8uaWQpO1xuICB9LmJpbmQodGhpcywgcnVudGltZSkpO1xufTtcblxuLyoqXG4gKiBPdmVybGF5IGEgc3BlY2lmaWMgcG9saWN5IG9yIGNvbnN0cmFpbnQgaW5zdGFuY2Ugb24gZGVmYXVsdCBzZXR0aW5ncy5cbiAqIFRPRE86IGNvbnNpZGVyIG1ha2luZyBzdGF0aWMuXG4gKiBAbWV0aG9kIG92ZXJsYXlcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gYmFzZSBUaGUgZGVmYXVsdCBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvdmVybGF5IFRoZSBzdXBlcmNlZWRpbmcgb2JqZWN0XG4gKiBAcmV0dXJucyB7T2JqZWN0fSBBIG5ldyBvYmplY3Qgd2l0aCBiYXNlIHBhcmFtZXRlcnMgd2hlbiBub3Qgc2V0IGluIG92ZXJsYXkuXG4gKi9cblBvbGljeS5wcm90b3R5cGUub3ZlcmxheSA9IGZ1bmN0aW9uKGJhc2UsIG92ZXJsYXkpIHtcbiAgdmFyIHJldCA9IHt9O1xuXG4gIHV0aWwubWl4aW4ocmV0LCBiYXNlKTtcbiAgaWYgKG92ZXJsYXkpIHtcbiAgICB1dGlsLm1peGluKHJldCwgb3ZlcmxheSwgdHJ1ZSk7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUG9saWN5O1xuIiwiLypqc2xpbnQgaW5kZW50OjIsIG5vZGU6dHJ1ZSwgc2xvcHB5OnRydWUsIGJyb3dzZXI6dHJ1ZSAqL1xudmFyIENvbnN1bWVyID0gcmVxdWlyZSgnLi9jb25zdW1lcicpO1xudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuLyoqXG4gKiBBIGZyZWVkb20gcG9ydCBmb3IgYSB1c2VyLWFjY2Vzc2FibGUgcHJvdmlkZXIuXG4gKiBAY2xhc3MgUHJvdmlkZXJcbiAqIEBpbXBsZW1lbnRzIFBvcnRcbiAqIEB1c2VzIGhhbmRsZUV2ZW50c1xuICogQHBhcmFtIHtPYmplY3R9IGRlZiBUaGUgaW50ZXJmYWNlIG9mIHRoZSBwcm92aWRlci5cbiAqIEBwYXJhbSB7RGVidWd9IGRlYnVnIFRoZSBkZWJ1Z2dlciB0byB1c2UgZm9yIGxvZ2dpbmcuXG4gKiBAY29udHJ1Y3RvclxuICovXG52YXIgUHJvdmlkZXIgPSBmdW5jdGlvbiAoZGVmLCBkZWJ1Zykge1xuICB0aGlzLmlkID0gQ29uc3VtZXIubmV4dElkKCk7XG4gIHV0aWwuaGFuZGxlRXZlbnRzKHRoaXMpO1xuICB0aGlzLmRlYnVnID0gZGVidWc7XG4gIFxuICB0aGlzLmRlZmluaXRpb24gPSBkZWY7XG4gIHRoaXMubW9kZSA9IFByb3ZpZGVyLm1vZGUuc3luY2hyb25vdXM7XG4gIHRoaXMuY2hhbm5lbHMgPSB7fTtcbiAgdGhpcy5pZmFjZSA9IG51bGw7XG4gIHRoaXMuY2xvc2VIYW5kbGVycyA9IHt9O1xuICB0aGlzLnByb3ZpZGVyQ2xzID0gbnVsbDtcblxuICB0aGlzLmlmYWNlcyA9IHt9O1xuICB0aGlzLmVtaXRzID0ge307XG59O1xuXG4vKipcbiAqIFByb3ZpZGVyIG1vZGVzIG9mIG9wZXJhdGlvbi5cbiAqIEBwcm9wZXJ0eSBtb2RlXG4gKiBAc3RhdGljXG4gKiBAdHlwZSBudW1iZXJcbiAqL1xuUHJvdmlkZXIubW9kZSA9IHtcbiAgc3luY2hyb25vdXM6IDAsXG4gIGFzeW5jaHJvbm91czogMSxcbiAgcHJvbWlzZXM6IDJcbn07XG5cbi8qKlxuICogUmVjZWl2ZSBleHRlcm5hbCBtZXNzYWdlcyBmb3IgdGhlIHByb3ZpZGVyLlxuICogQG1ldGhvZCBvbk1lc3NhZ2VcbiAqIEBwYXJhbSB7U3RyaW5nfSBzb3VyY2UgdGhlIHNvdXJjZSBpZGVudGlmaWVyIG9mIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2UgVGhlIHJlY2VpdmVkIG1lc3NhZ2UuXG4gKi9cblByb3ZpZGVyLnByb3RvdHlwZS5vbk1lc3NhZ2UgPSBmdW5jdGlvbiAoc291cmNlLCBtZXNzYWdlKSB7XG4gIGlmIChzb3VyY2UgPT09ICdjb250cm9sJyAmJiBtZXNzYWdlLnJldmVyc2UpIHtcbiAgICB0aGlzLmNoYW5uZWxzW21lc3NhZ2UubmFtZV0gPSBtZXNzYWdlLmNoYW5uZWw7XG4gICAgdGhpcy5lbWl0KG1lc3NhZ2UuY2hhbm5lbCwge1xuICAgICAgdHlwZTogJ2NoYW5uZWwgYW5ub3VuY2VtZW50JyxcbiAgICAgIGNoYW5uZWw6IG1lc3NhZ2UucmV2ZXJzZVxuICAgIH0pO1xuICAgIHRoaXMuZW1pdCgnc3RhcnQnKTtcbiAgfSBlbHNlIGlmIChzb3VyY2UgPT09ICdjb250cm9sJyAmJiBtZXNzYWdlLnR5cGUgPT09ICdzZXR1cCcpIHtcbiAgICB0aGlzLmNvbnRyb2xDaGFubmVsID0gbWVzc2FnZS5jaGFubmVsO1xuICB9IGVsc2UgaWYgKHNvdXJjZSA9PT0gJ2NvbnRyb2wnICYmIG1lc3NhZ2UudHlwZSA9PT0gJ2Nsb3NlJykge1xuICAgIGlmIChtZXNzYWdlLmNoYW5uZWwgPT09IHRoaXMuY29udHJvbENoYW5uZWwpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmNvbnRyb2xDaGFubmVsO1xuICAgIH1cbiAgICB0aGlzLmNsb3NlKCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCF0aGlzLmNoYW5uZWxzW3NvdXJjZV0gJiYgbWVzc2FnZS5jaGFubmVsKSB7XG4gICAgICB0aGlzLmNoYW5uZWxzW3NvdXJjZV0gPSBtZXNzYWdlLmNoYW5uZWw7XG4gICAgICB0aGlzLmVtaXQoJ3N0YXJ0Jyk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmICghdGhpcy5jaGFubmVsc1tzb3VyY2VdKSB7XG4gICAgICB0aGlzLmRlYnVnLndhcm4oJ01lc3NhZ2UgZnJvbSB1bmNvbmZpZ3VyZWQgc291cmNlOiAnICsgc291cmNlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS50eXBlID09PSAnY2xvc2UnICYmIG1lc3NhZ2UudG8pIHtcbiAgICAgIHRoaXMudGVhcmRvd24oc291cmNlLCBtZXNzYWdlLnRvKTtcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2UudG8gJiYgdGhpcy5lbWl0c1tzb3VyY2VdICYmXG4gICAgICAgICAgICAgICB0aGlzLmVtaXRzW3NvdXJjZV1bbWVzc2FnZS50b10pIHtcbiAgICAgIG1lc3NhZ2UubWVzc2FnZS50byA9IG1lc3NhZ2UudG87XG4gICAgICB0aGlzLmVtaXRzW3NvdXJjZV1bbWVzc2FnZS50b10obWVzc2FnZS5tZXNzYWdlKTtcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2UudG8gJiYgbWVzc2FnZS5tZXNzYWdlICYmXG4gICAgICAgIG1lc3NhZ2UubWVzc2FnZS50eXBlID09PSAnY29uc3RydWN0Jykge1xuICAgICAgdmFyIGFyZ3MgPSBDb25zdW1lci5wb3J0YWJsZVRvTWVzc2FnZShcbiAgICAgICAgICAodGhpcy5kZWZpbml0aW9uLmNvbnN0cnVjdG9yICYmIHRoaXMuZGVmaW5pdGlvbi5jb25zdHJ1Y3Rvci52YWx1ZSkgP1xuICAgICAgICAgICAgICB0aGlzLmRlZmluaXRpb24uY29uc3RydWN0b3IudmFsdWUgOiBbXSxcbiAgICAgICAgICBtZXNzYWdlLm1lc3NhZ2UsXG4gICAgICAgICAgdGhpcy5kZWJ1Z1xuICAgICAgICApLFxuICAgICAgICBpbnN0YW5jZTtcbiAgICAgIGlmICghdGhpcy5pZmFjZXNbc291cmNlXSkge1xuICAgICAgICB0aGlzLmlmYWNlc1tzb3VyY2VdID0ge307XG4gICAgICAgIHRoaXMuZW1pdHNbc291cmNlXSA9IHt9O1xuICAgICAgfVxuICAgICAgdGhpcy5pZmFjZXNbc291cmNlXVttZXNzYWdlLnRvXSA9IHRydWU7XG4gICAgICBpbnN0YW5jZSA9IHRoaXMuZ2V0UHJvdmlkZXIoc291cmNlLCBtZXNzYWdlLnRvLCBhcmdzKTtcbiAgICAgIC8vIGRvbid0IHNhdmUgYSByZWZlcmVuY2UgdG8gaW5zdGFuY2UgaWYgaXQgY2xvc2VkIGl0c2VsZiBhbHJlYWR5LlxuICAgICAgaWYgKHRoaXMuaWZhY2VzW3NvdXJjZV0gJiZcbiAgICAgICAgICB0aGlzLmlmYWNlc1tzb3VyY2VdW21lc3NhZ2UudG9dKSB7XG4gICAgICAgIHRoaXMuaWZhY2VzW3NvdXJjZV1bbWVzc2FnZS50b10gPSBpbnN0YW5jZS5pbnN0YW5jZTtcbiAgICAgICAgdGhpcy5lbWl0c1tzb3VyY2VdW21lc3NhZ2UudG9dID0gaW5zdGFuY2Uub25tc2c7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVidWcud2Fybih0aGlzLnRvU3RyaW5nKCkgKyAnIGRyb3BwaW5nIG1lc3NhZ2UgJyArXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBDbG9zZSAvIHRlYXJkb3duIHRoZSBmbG93IHRoaXMgcHJvdmlkZXIgdGVybWluYXRlcy5cbiAqIEBtZXRob2QgY2xvc2VcbiAqL1xuUHJvdmlkZXIucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5jb250cm9sQ2hhbm5lbCkge1xuICAgIHRoaXMuZW1pdCh0aGlzLmNvbnRyb2xDaGFubmVsLCB7XG4gICAgICB0eXBlOiAnUHJvdmlkZXIgQ2xvc2luZycsXG4gICAgICByZXF1ZXN0OiAnY2xvc2UnXG4gICAgfSk7XG4gICAgZGVsZXRlIHRoaXMuY29udHJvbENoYW5uZWw7XG4gIH1cbiAgdGhpcy5lbWl0KCdjbG9zZScpO1xuXG4gIC8vIFJlbGVhc2UgcmVmZXJlbmNlcy5cbiAgZGVsZXRlIHRoaXMuaWZhY2U7XG4gIGRlbGV0ZSB0aGlzLnByb3ZpZGVyQ2xzO1xuICB0aGlzLmlmYWNlcyA9IHt9O1xuICB0aGlzLmVtaXRzID0ge307XG4gIHRoaXMuZW1pdENoYW5uZWwgPSBudWxsO1xufTtcblxuLyoqXG4gKiBUZWFyZG93biBhIHNpbmdsZSBpbnN0YW5jZSBvZiBhbiBvYmplY3QgZnVsZmlsbGluZyB0aGlzIHByb3ZpZGVyLlxuICogQG1ldGhvZCB0ZWFyZG93blxuICogQHBhcmFtIHtTdHJpbmd9IHNvdXJjZSBUaGUgY29uc3VtZXIgc291cmNlIG9mIHRoZSBpbnN0YW5jZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBUaGUgaWQgb2YgdGhlIGluc3RhbmNlIHRvIHRlYXIgZG93bi5cbiAqL1xuUHJvdmlkZXIucHJvdG90eXBlLnRlYXJkb3duID0gZnVuY3Rpb24gKHNvdXJjZSwgaWQpIHtcbiAgLy8gSWdub3JlIHRlYXJkb3duIG9mIG5vbi1leGlzdGFudCBpZHMuXG4gIGlmICghdGhpcy5pZmFjZXNbc291cmNlXSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGRlbGV0ZSB0aGlzLmlmYWNlc1tzb3VyY2VdW2lkXTtcbiAgZGVsZXRlIHRoaXMuZW1pdHNbc291cmNlXVtpZF07XG4gIGlmICh0aGlzLmNsb3NlSGFuZGxlcnNbc291cmNlXSAmJiB0aGlzLmNsb3NlSGFuZGxlcnNbc291cmNlXVtpZF0pIHtcbiAgICB1dGlsLmVhY2hQcm9wKHRoaXMuY2xvc2VIYW5kbGVyc1tzb3VyY2VdW2lkXSwgZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgIHByb3AoKTtcbiAgICB9KTtcbiAgICBkZWxldGUgdGhpcy5jbG9zZUhhbmRsZXJzW3NvdXJjZV1baWRdO1xuICB9XG59O1xuXG4vKipcbiAqIEdldCBhbiBpbnRlcmZhY2UgdG8gZXhwb3NlIGV4dGVybmFsbHkgcmVwcmVzZW50aW5nIHRoaXMgcG9ydC5cbiAqIFByb3ZpZGVycyBhcmUgcmVnaXN0ZXJlZCB3aXRoIHRoZSBwb3J0IHVzaW5nIGVpdGhlclxuICogcHJvdmlkZVN5bmNocm9ub3VzIG9yIHByb3ZpZGVBc3luY2hyb25vdXMgZGVwZW5kaW5nIG9uIHRoZSBkZXNpcmVkXG4gKiByZXR1cm4gaW50ZXJmYWNlLlxuICogQG1ldGhvZCBnZXRJbnRlcmZhY2VcbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIGV4dGVybmFsIGludGVyZmFjZSBvZiB0aGlzIFByb3ZpZGVyLlxuICovXG5Qcm92aWRlci5wcm90b3R5cGUuZ2V0SW50ZXJmYWNlID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5pZmFjZSkge1xuICAgIHJldHVybiB0aGlzLmlmYWNlO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuaWZhY2UgPSB7XG4gICAgICBwcm92aWRlU3luY2hyb25vdXM6IGZ1bmN0aW9uIChwcm92KSB7XG4gICAgICAgIHRoaXMucHJvdmlkZXJDbHMgPSBwcm92O1xuICAgICAgICB0aGlzLm1vZGUgPSBQcm92aWRlci5tb2RlLnN5bmNocm9ub3VzO1xuICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgcHJvdmlkZUFzeW5jaHJvbm91czogZnVuY3Rpb24gKHByb3YpIHtcbiAgICAgICAgdGhpcy5wcm92aWRlckNscyA9IHByb3Y7XG4gICAgICAgIHRoaXMubW9kZSA9IFByb3ZpZGVyLm1vZGUuYXN5bmNocm9ub3VzO1xuICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgcHJvdmlkZVByb21pc2VzOiBmdW5jdGlvbiAocHJvdikge1xuICAgICAgICB0aGlzLnByb3ZpZGVyQ2xzID0gcHJvdjtcbiAgICAgICAgdGhpcy5tb2RlID0gUHJvdmlkZXIubW9kZS5wcm9taXNlcztcbiAgICAgIH0uYmluZCh0aGlzKVxuICAgIH07XG5cbiAgICB1dGlsLmVhY2hQcm9wKHRoaXMuZGVmaW5pdGlvbiwgZnVuY3Rpb24gKHByb3AsIG5hbWUpIHtcbiAgICAgIHN3aXRjaCAocHJvcC50eXBlKSB7XG4gICAgICBjYXNlIFwiY29uc3RhbnRcIjpcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMuaWZhY2UsIG5hbWUsIHtcbiAgICAgICAgICB2YWx1ZTogQ29uc3VtZXIucmVjdXJzaXZlRnJlZXplT2JqZWN0KHByb3AudmFsdWUpLFxuICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIHJldHVybiB0aGlzLmlmYWNlO1xuICB9XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgdG8gZ2V0IGludGVyZmFjZXMgZnJvbSB0aGlzIHByb3ZpZGVyIGZyb21cbiAqIGEgdXNlci12aXNpYmxlIHBvaW50LlxuICogQG1ldGhvZCBnZXRQcm94eUludGVyZmFjZVxuICovXG5Qcm92aWRlci5wcm90b3R5cGUuZ2V0UHJveHlJbnRlcmZhY2UgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBmdW5jID0gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gcC5nZXRJbnRlcmZhY2UoKTtcbiAgfS5iaW5kKHt9LCB0aGlzKTtcblxuICBmdW5jLmNsb3NlID0gZnVuY3Rpb24gKGlmYWNlKSB7XG4gICAgaWYgKGlmYWNlKSB7XG4gICAgICB1dGlsLmVhY2hQcm9wKHRoaXMuaWZhY2VzLCBmdW5jdGlvbiAoaWRzLCBzb3VyY2UpIHtcbiAgICAgICAgdXRpbC5lYWNoUHJvcChpZHMsIGZ1bmN0aW9uIChjYW5kaWRhdGUsIGlkKSB7XG4gICAgICAgICAgaWYgKGNhbmRpZGF0ZSA9PT0gaWZhY2UpIHtcbiAgICAgICAgICAgIHRoaXMudGVhcmRvd24oc291cmNlLCBpZCk7XG4gICAgICAgICAgICB0aGlzLmVtaXQodGhpcy5jaGFubmVsc1tzb3VyY2VdLCB7XG4gICAgICAgICAgICAgIHR5cGU6ICdjbG9zZScsXG4gICAgICAgICAgICAgIHRvOiBpZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDbG9zZSB0aGUgY2hhbm5lbC5cbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKTtcblxuICBmdW5jLm9uQ2xvc2UgPSBmdW5jdGlvbiAoaWZhY2UsIGhhbmRsZXIpIHtcbiAgICAvLyBMaXN0ZW4gdG8gdGhlIGNoYW5uZWwgZGlyZWN0bHkuXG4gICAgaWYgKHR5cGVvZiBpZmFjZSA9PT0gJ2Z1bmN0aW9uJyAmJiBoYW5kbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub25jZSgnY2xvc2UnLCBpZmFjZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdXRpbC5lYWNoUHJvcCh0aGlzLmlmYWNlcywgZnVuY3Rpb24gKGlkcywgc291cmNlKSB7XG4gICAgICB1dGlsLmVhY2hQcm9wKGlkcywgZnVuY3Rpb24gKGNhbmRpZGF0ZSwgaWQpIHtcbiAgICAgICAgaWYgKGNhbmRpZGF0ZSA9PT0gaWZhY2UpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuY2xvc2VIYW5kbGVyc1tzb3VyY2VdKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlSGFuZGxlcnNbc291cmNlXSA9IHt9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIXRoaXMuY2xvc2VIYW5kbGVyc1tzb3VyY2VdW2lkXSkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZUhhbmRsZXJzW3NvdXJjZV1baWRdID0gW107XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuY2xvc2VIYW5kbGVyc1tzb3VyY2VdW2lkXS5wdXNoKGhhbmRsZXIpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH0uYmluZCh0aGlzKTtcblxuICByZXR1cm4gZnVuYztcbn07XG5cbi8qKlxuICogR2V0IGEgbmV3IGluc3RhbmNlIG9mIHRoZSByZWdpc3RlcmVkIHByb3ZpZGVyLlxuICogQG1ldGhvZCBnZXRQcm92aWRlclxuICogQHBhcmFtIHtTdHJpbmd9IHNvdXJjZSBUaGUgcG9ydCB0aGlzIGluc3RhbmNlIGlzIGludGVyYWN0aWduIHdpdGguXG4gKiBAcGFyYW0ge1N0cmluZ30gaWRlbnRpZmllciB0aGUgbWVzc2FnYWJsZSBhZGRyZXNzIGZvciB0aGlzIHByb3ZpZGVyLlxuICogQHBhcmFtIHtBcnJheX0gYXJncyBDb25zdHJ1Y3RvciBhcmd1bWVudHMgZm9yIHRoZSBwcm92aWRlci5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBBIGZ1bmN0aW9uIHRvIHNlbmQgbWVzc2FnZXMgdG8gdGhlIHByb3ZpZGVyLlxuICovXG5Qcm92aWRlci5wcm90b3R5cGUuZ2V0UHJvdmlkZXIgPSBmdW5jdGlvbiAoc291cmNlLCBpZGVudGlmaWVyLCBhcmdzKSB7XG4gIGlmICghdGhpcy5wcm92aWRlckNscykge1xuICAgIHRoaXMuZGVidWcuZXJyb3IoJ0Nhbm5vdCBpbnN0YW50aWF0ZSBwcm92aWRlciwgc2luY2UgaXQgaXMgbm90IHByb3ZpZGVkJyk7XG4gICAgcmV0dXJuIHtpbnN0YW5jZTogdW5kZWZpbmVkLCBvbm1zZzogdW5kZWZpbmVkfTtcbiAgfVxuXG4gIHZhciBldmVudHMgPSB7fSxcbiAgICBkaXNwYXRjaEV2ZW50LFxuICAgIEJvdW5kQ2xhc3MsXG4gICAgaW5zdGFuY2U7XG5cbiAgdXRpbC5lYWNoUHJvcCh0aGlzLmRlZmluaXRpb24sIGZ1bmN0aW9uIChwcm9wLCBuYW1lKSB7XG4gICAgaWYgKHByb3AudHlwZSA9PT0gJ2V2ZW50Jykge1xuICAgICAgZXZlbnRzW25hbWVdID0gcHJvcDtcbiAgICB9XG4gIH0pO1xuXG4gIGRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbiAoc3JjLCBldiwgaWQsIG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKGV2W25hbWVdKSB7XG4gICAgICB2YXIgc3RyZWFtcyA9IENvbnN1bWVyLm1lc3NhZ2VUb1BvcnRhYmxlKGV2W25hbWVdLnZhbHVlLCB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVidWcpO1xuICAgICAgdGhpcy5lbWl0KHRoaXMuY2hhbm5lbHNbc3JjXSwge1xuICAgICAgICB0eXBlOiAnbWVzc2FnZScsXG4gICAgICAgIHRvOiBpZCxcbiAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgdHlwZTogJ2V2ZW50JyxcbiAgICAgICAgICB0ZXh0OiBzdHJlYW1zLnRleHQsXG4gICAgICAgICAgYmluYXJ5OiBzdHJlYW1zLmJpbmFyeVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0uYmluZCh0aGlzLCBzb3VyY2UsIGV2ZW50cywgaWRlbnRpZmllcik7XG5cbiAgLy8gdGhpcyBpcyBhbGwgdG8gc2F5OiBuZXcgcHJvdmlkZXJDbHMoZGlzcGF0Y2hFdmVudCwgYXJnc1swXSwgYXJnc1sxXSwuLi4pXG4gIEJvdW5kQ2xhc3MgPSB0aGlzLnByb3ZpZGVyQ2xzLmJpbmQuYXBwbHkodGhpcy5wcm92aWRlckNscyxcbiAgICAgIFt0aGlzLnByb3ZpZGVyQ2xzLCBkaXNwYXRjaEV2ZW50XS5jb25jYXQoYXJncyB8fCBbXSkpO1xuICBpbnN0YW5jZSA9IG5ldyBCb3VuZENsYXNzKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBpbnN0YW5jZTogaW5zdGFuY2UsXG4gICAgb25tc2c6IGZ1bmN0aW9uIChwb3J0LCBzcmMsIG1zZykge1xuICAgICAgaWYgKG1zZy5hY3Rpb24gPT09ICdtZXRob2QnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpc1ttc2cudHlwZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBwb3J0LmRlYnVnLndhcm4oXCJQcm92aWRlciBkb2VzIG5vdCBpbXBsZW1lbnQgXCIgKyBtc2cudHlwZSArIFwiKCkhXCIpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcHJvcCA9IHBvcnQuZGVmaW5pdGlvblttc2cudHlwZV0sXG4gICAgICAgICAgZGVidWcgPSBwb3J0LmRlYnVnLFxuICAgICAgICAgIGFyZ3MgPSBDb25zdW1lci5wb3J0YWJsZVRvTWVzc2FnZShwcm9wLnZhbHVlLCBtc2csIGRlYnVnKSxcbiAgICAgICAgICByZXQgPSBmdW5jdGlvbiAoc3JjLCBtc2csIHByb3AsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIHN0cmVhbXMgPSBDb25zdW1lci5tZXNzYWdlVG9Qb3J0YWJsZShwcm9wLnJldCwgcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnKTtcbiAgICAgICAgICAgIHRoaXMuZW1pdCh0aGlzLmNoYW5uZWxzW3NyY10sIHtcbiAgICAgICAgICAgICAgdHlwZTogJ21ldGhvZCcsXG4gICAgICAgICAgICAgIHRvOiBtc2cudG8sXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICB0bzogbXNnLnRvLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdtZXRob2QnLFxuICAgICAgICAgICAgICAgIHJlcUlkOiBtc2cucmVxSWQsXG4gICAgICAgICAgICAgICAgbmFtZTogbXNnLnR5cGUsXG4gICAgICAgICAgICAgICAgdGV4dDogc3RyZWFtcy50ZXh0LFxuICAgICAgICAgICAgICAgIGJpbmFyeTogc3RyZWFtcy5iaW5hcnksXG4gICAgICAgICAgICAgICAgZXJyb3I6IHJlamVjdFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LmJpbmQocG9ydCwgc3JjLCBtc2csIHByb3ApO1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJncykpIHtcbiAgICAgICAgICBhcmdzID0gW2FyZ3NdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3J0Lm1vZGUgPT09IFByb3ZpZGVyLm1vZGUuc3luY2hyb25vdXMpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0KHRoaXNbbXNnLnR5cGVdLmFwcGx5KHRoaXMsIGFyZ3MpKTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXQodW5kZWZpbmVkLCBlLm1lc3NhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChwb3J0Lm1vZGUgPT09IFByb3ZpZGVyLm1vZGUuYXN5bmNocm9ub3VzKSB7XG4gICAgICAgICAgdGhpc1ttc2cudHlwZV0uYXBwbHkoaW5zdGFuY2UsIGFyZ3MuY29uY2F0KHJldCkpO1xuICAgICAgICB9IGVsc2UgaWYgKHBvcnQubW9kZSA9PT0gUHJvdmlkZXIubW9kZS5wcm9taXNlcykge1xuICAgICAgICAgIHRoaXNbbXNnLnR5cGVdLmFwcGx5KHRoaXMsIGFyZ3MpLnRoZW4ocmV0LCByZXQuYmluZCh7fSwgdW5kZWZpbmVkKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LmJpbmQoaW5zdGFuY2UsIHRoaXMsIHNvdXJjZSlcbiAgfTtcbn07XG5cbi8qKlxuICogR2V0IGEgdGV4dHVhbCBkZXNjcmlwdGlvbiBvZiB0aGlzIHBvcnQuXG4gKiBAbWV0aG9kIHRvU3RyaW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHRoZSBkZXNjcmlwdGlvbiBvZiB0aGlzIHBvcnQuXG4gKi9cblByb3ZpZGVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuZW1pdENoYW5uZWwpIHtcbiAgICByZXR1cm4gXCJbUHJvdmlkZXIgXCIgKyB0aGlzLmVtaXRDaGFubmVsICsgXCJdXCI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFwiW3VuYm91bmQgUHJvdmlkZXJdXCI7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvdmlkZXI7XG4iLCIvKmpzbGludCBpbmRlbnQ6Miwgd2hpdGU6dHJ1ZSwgbm9kZTp0cnVlLCBzbG9wcHk6dHJ1ZSwgYnJvd3Nlcjp0cnVlICovXG52YXIgUHJvbWlzZUNvbXBhdCA9IHJlcXVpcmUoJ2VzNi1wcm9taXNlJykuUHJvbWlzZTtcblxudmFyIHV0aWwgPSByZXF1aXJlKCcuLi91dGlsJyk7XG52YXIgQ29uc3VtZXIgPSByZXF1aXJlKCcuLi9jb25zdW1lcicpO1xuXG52YXIgQXBpSW50ZXJmYWNlID0gZnVuY3Rpb24oZGVmLCBvbk1zZywgZW1pdCwgZGVidWcpIHtcbiAgdmFyIGluZmxpZ2h0ID0ge30sXG4gICAgICBldmVudHMgPSBudWxsLFxuICAgICAgZW1pdHRlciA9IG51bGwsXG4gICAgICByZXFJZCA9IDAsXG4gICAgICBhcmdzID0gYXJndW1lbnRzO1xuXG4gIHV0aWwuZWFjaFByb3AoZGVmLCBmdW5jdGlvbihwcm9wLCBuYW1lKSB7XG4gICAgc3dpdGNoKHByb3AudHlwZSkge1xuICAgIGNhc2UgJ21ldGhvZCc6XG4gICAgICB0aGlzW25hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIE5vdGU6IGluZmxpZ2h0IHNob3VsZCBiZSByZWdpc3RlcmVkIGJlZm9yZSBtZXNzYWdlIGlzIHBhc3NlZFxuICAgICAgICAvLyBpbiBvcmRlciB0byBwcmVwYXJlIGZvciBzeW5jaHJvbm91cyBpbi13aW5kb3cgcGlwZXMuXG4gICAgICAgIHZhciB0aGlzUmVxID0gcmVxSWQsXG4gICAgICAgICAgICBwcm9taXNlID0gbmV3IFByb21pc2VDb21wYXQoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgIGluZmxpZ2h0W3RoaXNSZXFdID0ge1xuICAgICAgICAgICAgICAgIHJlc29sdmU6cmVzb2x2ZSxcbiAgICAgICAgICAgICAgICByZWplY3Q6cmVqZWN0LFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBwcm9wLnJldFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBzdHJlYW1zID0gQ29uc3VtZXIubWVzc2FnZVRvUG9ydGFibGUocHJvcC52YWx1ZSxcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApLFxuICAgICAgICAgICAgICAgIGRlYnVnKTtcbiAgICAgICAgcmVxSWQgKz0gMTtcbiAgICAgICAgZW1pdCh7XG4gICAgICAgICAgYWN0aW9uOiAnbWV0aG9kJyxcbiAgICAgICAgICB0eXBlOiBuYW1lLFxuICAgICAgICAgIHJlcUlkOiB0aGlzUmVxLFxuICAgICAgICAgIHRleHQ6IHN0cmVhbXMudGV4dCxcbiAgICAgICAgICBiaW5hcnk6IHN0cmVhbXMuYmluYXJ5XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlICdldmVudCc6XG4gICAgICBpZighZXZlbnRzKSB7XG4gICAgICAgIHV0aWwuaGFuZGxlRXZlbnRzKHRoaXMpO1xuICAgICAgICBlbWl0dGVyID0gdGhpcy5lbWl0O1xuICAgICAgICBkZWxldGUgdGhpcy5lbWl0O1xuICAgICAgICBldmVudHMgPSB7fTtcbiAgICAgIH1cbiAgICAgIGV2ZW50c1tuYW1lXSA9IHByb3A7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdjb25zdGFudCc6XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgbmFtZSwge1xuICAgICAgICB2YWx1ZTogQ29uc3VtZXIucmVjdXJzaXZlRnJlZXplT2JqZWN0KHByb3AudmFsdWUpLFxuICAgICAgICB3cml0YWJsZTogZmFsc2VcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9LmJpbmQodGhpcykpO1xuXG4gIG9uTXNnKHRoaXMsIGZ1bmN0aW9uKHR5cGUsIG1zZykge1xuICAgIGlmICh0eXBlID09PSAnY2xvc2UnKSB7XG4gICAgICBpZiAodGhpcy5vZmYpIHtcbiAgICAgICAgdGhpcy5vZmYoKTtcbiAgICAgIH1cbiAgICAgIHV0aWwuZWFjaFByb3AoaW5mbGlnaHQsIGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgb2JqLnJlamVjdCgnY2xvc2VkJyk7XG4gICAgICB9KTtcbiAgICAgIGluZmxpZ2h0ID0ge307XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghbXNnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ21ldGhvZCcpIHtcbiAgICAgIGlmIChpbmZsaWdodFttc2cucmVxSWRdKSB7XG4gICAgICAgIHZhciByZXNvbHZlciA9IGluZmxpZ2h0W21zZy5yZXFJZF0sXG4gICAgICAgICAgICB0ZW1wbGF0ZSA9IHJlc29sdmVyLnRlbXBsYXRlO1xuICAgICAgICBkZWxldGUgaW5mbGlnaHRbbXNnLnJlcUlkXTtcbiAgICAgICAgaWYgKG1zZy5lcnJvcikge1xuICAgICAgICAgIHJlc29sdmVyLnJlamVjdChtc2cuZXJyb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmVyLnJlc29sdmUoQ29uc3VtZXIucG9ydGFibGVUb01lc3NhZ2UodGVtcGxhdGUsIG1zZywgZGVidWcpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVidWcuZXJyb3IoJ0luY29taW5nIG1lc3NhZ2UgY2xhaW1lZCB0byBiZSBhbiBSUEMgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ3JldHVybmluZyBmb3IgdW5yZWdpc3RlcmVkIGNhbGwnLCBtc2cucmVxSWQpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobXNnLnR5cGUgPT09ICdldmVudCcpIHtcbiAgICAgIGlmIChldmVudHNbbXNnLm5hbWVdKSB7XG4gICAgICAgIGVtaXR0ZXIobXNnLm5hbWUsIENvbnN1bWVyLnBvcnRhYmxlVG9NZXNzYWdlKGV2ZW50c1ttc2cubmFtZV0udmFsdWUsXG4gICAgICAgICAgICAgICAgbXNnLCBkZWJ1ZykpO1xuICAgICAgfVxuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcblxuICBhcmdzID0gQ29uc3VtZXIubWVzc2FnZVRvUG9ydGFibGUoXG4gICAgICAoZGVmLmNvbnN0cnVjdG9yICYmIGRlZi5jb25zdHJ1Y3Rvci52YWx1ZSkgPyBkZWYuY29uc3RydWN0b3IudmFsdWUgOiBbXSxcbiAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3MsIDQpLFxuICAgICAgZGVidWcpO1xuXG4gIGVtaXQoe1xuICAgIHR5cGU6ICdjb25zdHJ1Y3QnLFxuICAgIHRleHQ6IGFyZ3MudGV4dCxcbiAgICBiaW5hcnk6IGFyZ3MuYmluYXJ5XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcGlJbnRlcmZhY2U7XG4iLCIvKmpzbGludCBpbmRlbnQ6Miwgd2hpdGU6dHJ1ZSwgbm9kZTp0cnVlLCBzbG9wcHk6dHJ1ZSwgYnJvd3Nlcjp0cnVlICovXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwnKTtcblxudmFyIEV2ZW50SW50ZXJmYWNlID0gZnVuY3Rpb24ob25Nc2csIGVtaXQsIGRlYnVnKSB7XG4gIHV0aWwuaGFuZGxlRXZlbnRzKHRoaXMpO1xuICBcbiAgb25Nc2codGhpcywgZnVuY3Rpb24oZW1pdCwgdHlwZSwgbXNnKSB7XG4gICAgaWYgKHR5cGUgPT09ICdjbG9zZScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZW1pdChtc2cudHlwZSwgbXNnLm1lc3NhZ2UpO1xuICB9LmJpbmQodGhpcywgdGhpcy5lbWl0KSk7XG5cbiAgdGhpcy5lbWl0ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSwgbXNnKSB7XG4gICAgZW1pdHRlcih7dHlwZTogdHlwZSwgbWVzc2FnZTogbXNnfSwgdHJ1ZSk7XG4gIH0uYmluZCh7fSwgZW1pdCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50SW50ZXJmYWNlO1xuIiwiLypqc2xpbnQgaW5kZW50OjIsIG5vZGU6dHJ1ZSAqL1xudmFyIFByb21pc2VDb21wYXQgPSByZXF1aXJlKCdlczYtcHJvbWlzZScpLlByb21pc2U7XG5cbnZhciBBcGlJbnRlcmZhY2UgPSByZXF1aXJlKCcuL3Byb3h5L2FwaUludGVyZmFjZScpO1xudmFyIEV2ZW50SW50ZXJmYWNlID0gcmVxdWlyZSgnLi9wcm94eS9ldmVudEludGVyZmFjZScpO1xudmFyIENvbnN1bWVyID0gcmVxdWlyZSgnLi9jb25zdW1lcicpO1xudmFyIFByb3ZpZGVyID0gcmVxdWlyZSgnLi9wcm92aWRlcicpO1xuXG4vKipcbiAqIEEgUHJveHkgQmluZGVyIG1hbmFnZXMgdGhlIGV4dGVybmFsIGludGVyZmFjZSwgYW5kIGNyZWF0ZXMgb25lIG9mXG4gKiB0aGUgZGlmZmVyZW50IHR5cGVzIG9mIG9iamVjdHMgZXhwb3NlZCBieSBmcmVlZG9tIGVpdGhlciBhcyBhIGdsb2JhbFxuICogd2l0aGluIGEgd29ya2VyIC8gbW9kdWxlIGNvbnRleHQsIG9yIHJldHVybmVkIGJ5IGFuIGV4dGVybmFsIGNhbGwgdG9cbiAqIGNyZWF0ZSBhIGZyZWVkb20gcnVudGltZS5cbiAqIEBDbGFzcyBQcm94eUJpbmRlclxuICogQHBhcmFtIHtNYW5hZ2VyfSBtYW5hZ2VyIFRoZSBtYW5hZ2VyIGZvciB0aGUgYWN0aXZlIHJ1bnRpbWUuXG4gKi9cbnZhciBQcm94eUJpbmRlciA9IGZ1bmN0aW9uIChtYW5hZ2VyKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdGhpcy5tYW5hZ2VyID0gbWFuYWdlcjtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgcHJveHkgZm9yIGEgZnJlZWRvbSBwb3J0LCBhbmQgcmV0dXJuIGl0IG9uY2UgbG9hZGVkLlxuICogQG1ldGhvZCBnZXRFeHRlcm5hbFxuICogQHBhcmFtIHtQb3J0fSBwb3J0IFRoZSBwb3J0IGZvciB0aGUgcHJveHkgdG8gY29tbXVuaWNhdGUgd2l0aC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBwcm94eS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbZGVmaW5pdGlvbl0gVGhlIGRlZmluaXRpb24gb2YgdGhlIEFQSSB0byBleHBvc2UuXG4gKiBAcGFyYW0ge1N0cmluZ30gZGVmaW5pdGlvbi5uYW1lIFRoZSBuYW1lIG9mIHRoZSBBUEkuXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmaW5pdGlvbi5kZWZpbml0aW9uIFRoZSBkZWZpbml0aW9uIG9mIHRoZSBBUEkuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGRlZmluaXRpb24ucHJvdmlkZXMgV2hldGhlciB0aGlzIGlzIGEgY29uc3VtZXIgb3IgcHJvdmlkZXIuXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gQSBwcm9taXNlIGZvciB0aGUgYWN0aXZlIHByb3h5IGludGVyZmFjZS5cbiAqL1xuUHJveHlCaW5kZXIucHJvdG90eXBlLmdldEV4dGVybmFsID0gZnVuY3Rpb24gKHBvcnQsIG5hbWUsIGRlZmluaXRpb24pIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB2YXIgcHJveHksIGFwaTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ29tcGF0KGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBpZiAoZGVmaW5pdGlvbikge1xuICAgICAgYXBpID0gZGVmaW5pdGlvbi5uYW1lO1xuICAgICAgaWYgKGRlZmluaXRpb24ucHJvdmlkZXMpIHtcbiAgICAgICAgcHJveHkgPSBuZXcgUHJvdmlkZXIoZGVmaW5pdGlvbi5kZWZpbml0aW9uLCB0aGlzLm1hbmFnZXIuZGVidWcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJveHkgPSBuZXcgQ29uc3VtZXIoQXBpSW50ZXJmYWNlLmJpbmQoe30sXG4gICAgICAgICAgICBkZWZpbml0aW9uLmRlZmluaXRpb24pLFxuICAgICAgICAgICAgdGhpcy5tYW5hZ2VyLmRlYnVnKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcHJveHkgPSBuZXcgQ29uc3VtZXIoRXZlbnRJbnRlcmZhY2UsIHRoaXMubWFuYWdlci5kZWJ1Zyk7XG4gICAgfVxuXG4gICAgcHJveHkub25jZSgnc3RhcnQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaWZhY2UgPSBwcm94eS5nZXRQcm94eUludGVyZmFjZSgpO1xuICAgICAgaWYgKGFwaSkge1xuICAgICAgICBpZmFjZS5hcGkgPSBhcGk7XG4gICAgICB9XG4gICAgICByZXNvbHZlKHtcbiAgICAgICAgcG9ydDogcHJveHksXG4gICAgICAgIGV4dGVybmFsOiBpZmFjZVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm1hbmFnZXIuY3JlYXRlTGluayhwb3J0LCBuYW1lLCBwcm94eSk7XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG4vKipcbiAqIEJpbmQgdGhlIGRlZmF1bHQgcHJveHkgZm9yIGEgZnJlZWRvbSBwb3J0LlxuICogQG1ldGhvZCBiaW5kRGVmYXVsdFxuICogQHBhcmFtIHtQb3J0fSBwb3J0IFRoZSBwb3J0IGZvciB0aGUgcHJveHkgdG8gY29tbXVuaWNhdGUgd2l0aC5cbiAqIEBwYXJhbSB7QXBpfSBhcGkgVGhlIEFQSSBsb2FkZXIgd2l0aCBBUEkgZGVmaW5pdGlvbnMuXG4gKiBAcGFyYW0ge09iamVjdH0gbWFuaWZlc3QgVGhlIG1hbmlmZXN0IG9mIHRoZSBtb2R1bGUgdG8gZXhwb3NlLlxuICogQHBhcmFtIHtCb29sZWFufSBpbnRlcm5hbCBXaGV0aGVyIHRoZSBpbnRlcmZhY2UgaXMgZm9yIGluc2lkZSB0aGUgbW9kdWxlLlxuICogQHJldHVybnMge1Byb21pc2V9IEEgcHJvbWlzZSBmb3IgYSBwcm94eSBpbnRlcmZhY2UuXG4gKiBAcHJpdmF0ZVxuICovXG5Qcm94eUJpbmRlci5wcm90b3R5cGUuYmluZERlZmF1bHQgPSBmdW5jdGlvbiAocG9ydCwgYXBpLCBtYW5pZmVzdCwgaW50ZXJuYWwpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB2YXIgbWV0YWRhdGEgPSB7XG4gICAgbmFtZTogbWFuaWZlc3QubmFtZSxcbiAgICBpY29uOiBtYW5pZmVzdC5pY29uLFxuICAgIGRlc2NyaXB0aW9uOiBtYW5pZmVzdC5kZXNjcmlwdGlvblxuICB9LCBkZWY7XG5cbiAgaWYgKG1hbmlmZXN0WydkZWZhdWx0J10pIHtcbiAgICBkZWYgPSBhcGkuZ2V0KG1hbmlmZXN0WydkZWZhdWx0J10pO1xuICAgIGlmICghZGVmICYmIG1hbmlmZXN0LmFwaSAmJiBtYW5pZmVzdC5hcGlbbWFuaWZlc3RbJ2RlZmF1bHQnXV0pIHtcbiAgICAgIGRlZiA9IHtcbiAgICAgICAgbmFtZTogbWFuaWZlc3RbJ2RlZmF1bHQnXSxcbiAgICAgICAgZGVmaW5pdGlvbjogbWFuaWZlc3QuYXBpW21hbmlmZXN0WydkZWZhdWx0J11dXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoaW50ZXJuYWwgJiYgbWFuaWZlc3QucHJvdmlkZXMgJiZcbiAgICAgICAgbWFuaWZlc3QucHJvdmlkZXMuaW5kZXhPZihtYW5pZmVzdFsnZGVmYXVsdCddKSAhPT0gZmFsc2UpIHtcbiAgICAgIGRlZi5wcm92aWRlcyA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChpbnRlcm5hbCkge1xuICAgICAgYXBpLmRlYnVnLndhcm4oXCJkZWZhdWx0IEFQSSBub3QgcHJvdmlkZWQsIFwiICtcbiAgICAgICAgICAgICAgICAgICAgIFwiYXJlIHlvdSBtaXNzaW5nIGEgcHJvdmlkZXMga2V5IGluIHlvdXIgbWFuaWZlc3Q/XCIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzLmdldEV4dGVybmFsKHBvcnQsICdkZWZhdWx0JywgZGVmKS50aGVuKFxuICAgIGZ1bmN0aW9uIChtZXRhZGF0YSwgaW5mbykge1xuICAgICAgaW5mby5leHRlcm5hbC5tYW5pZmVzdCA9IG1ldGFkYXRhO1xuICAgICAgcmV0dXJuIGluZm87XG4gICAgfS5iaW5kKHRoaXMsIG1ldGFkYXRhKVxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm94eUJpbmRlcjtcbiIsIi8qZ2xvYmFscyBYTUxIdHRwUmVxdWVzdCAqL1xuLypqc2xpbnQgaW5kZW50OjIsbm9kZTp0cnVlLHNsb3BweTp0cnVlICovXG52YXIgUHJvbWlzZUNvbXBhdCA9IHJlcXVpcmUoJ2VzNi1wcm9taXNlJykuUHJvbWlzZTtcblxudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuLyoqXG4gKiBUaGUgUmVzb3VyY2UgcmVnaXN0cnkgZm9yIEZyZWVET00uICBVc2VkIHRvIGxvb2sgdXAgcmVxdWVzdGVkIFJlc291cmNlcyxcbiAqIGFuZCBwcm92aWRlIGxvb2t1cCBhbmQgbWlncmF0aW9uIG9mIHJlc291cmNlcy5cbiAqIEBDbGFzcyBSZXNvdXJjZVxuICogQHBhcmFtIHtEZWJ1Z30gZGVidWcgVGhlIGxvZ2dlciB0byB1c2UgZm9yIGRlYnVnZ2luZy5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG52YXIgUmVzb3VyY2UgPSBmdW5jdGlvbiAoZGVidWcpIHtcbiAgdGhpcy5kZWJ1ZyA9IGRlYnVnO1xuICB0aGlzLmZpbGVzID0ge307XG4gIHRoaXMucmVzb2x2ZXJzID0gW3RoaXMuaHR0cFJlc29sdmVyLCB0aGlzLm51bGxSZXNvbHZlcl07XG4gIHRoaXMuY29udGVudFJldHJpZXZlcnMgPSB7XG4gICAgJ2h0dHAnOiB0aGlzLnhoclJldHJpZXZlcixcbiAgICAnaHR0cHMnOiB0aGlzLnhoclJldHJpZXZlcixcbiAgICAnY2hyb21lLWV4dGVuc2lvbic6IHRoaXMueGhyUmV0cmlldmVyLFxuICAgICdyZXNvdXJjZSc6IHRoaXMueGhyUmV0cmlldmVyLFxuICAgICdjaHJvbWUnOiB0aGlzLnhoclJldHJpZXZlcixcbiAgICAnYXBwJzogdGhpcy54aHJSZXRyaWV2ZXIsXG4gICAgJ21hbmlmZXN0JzogdGhpcy5tYW5pZmVzdFJldHJpZXZlclxuICB9O1xufTtcblxuLyoqXG4gKiBSZXNvbHZlIGEgcmVzdXJjZSBVUkwgcmVxdWVzdGVkIGZyb20gYSBtb2R1bGUuXG4gKiBAbWV0aG9kIGdldFxuICogQHBhcmFtIHtTdHJpbmd9IG1hbmlmZXN0IFRoZSBjYW5vbmljYWwgYWRkcmVzcyBvZiB0aGUgbW9kdWxlIHJlcXVlc3RpbmcuXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSByZXNvdXJjZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gQSBwcm9taXNlIGZvciB0aGUgcmVzb3VyY2UgYWRkcmVzcy5cbiAqL1xuUmVzb3VyY2UucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChtYW5pZmVzdCwgdXJsKSB7XG4gIHZhciBrZXkgPSBKU09OLnN0cmluZ2lmeShbbWFuaWZlc3QsIHVybF0pO1xuICBcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ29tcGF0KGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBpZiAodGhpcy5maWxlc1trZXldKSB7XG4gICAgICByZXNvbHZlKHRoaXMuZmlsZXNba2V5XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVzb2x2ZShtYW5pZmVzdCwgdXJsKS50aGVuKGZ1bmN0aW9uIChrZXksIHJlc29sdmUsIGFkZHJlc3MpIHtcbiAgICAgICAgdGhpcy5maWxlc1trZXldID0gYWRkcmVzcztcbiAgICAgICAgLy9mZG9tLmRlYnVnLmxvZygnUmVzb2x2ZWQgJyArIGtleSArICcgdG8gJyArIGFkZHJlc3MpO1xuICAgICAgICByZXNvbHZlKGFkZHJlc3MpO1xuICAgICAgfS5iaW5kKHRoaXMsIGtleSwgcmVzb2x2ZSksIHJlamVjdCk7XG4gICAgfVxuICB9LmJpbmQodGhpcykpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGNvbnRlbnRzIG9mIGEgcmVzb3VyY2UuXG4gKiBAbWV0aG9kIGdldENvbnRlbnRzXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSByZXNvdXJjZSB0byByZWFkLlxuICogQHJldHVybnMge1Byb21pc2V9IEEgcHJvbWlzZSBmb3IgdGhlIHJlc291cmNlIGNvbnRlbnRzLlxuICovXG5SZXNvdXJjZS5wcm90b3R5cGUuZ2V0Q29udGVudHMgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHByb3A7XG4gICAgaWYgKCF1cmwpIHtcbiAgICAgIHRoaXMuZGVidWcud2FybihcIkFza2VkIHRvIGdldCBjb250ZW50cyBvZiB1bmRlZmluZWQgVVJMLlwiKTtcbiAgICAgIHJldHVybiByZWplY3QoKTtcbiAgICB9XG4gICAgZm9yIChwcm9wIGluIHRoaXMuY29udGVudFJldHJpZXZlcnMpIHtcbiAgICAgIGlmICh0aGlzLmNvbnRlbnRSZXRyaWV2ZXJzLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgIGlmICh1cmwuaW5kZXhPZihwcm9wICsgXCI6Ly9cIikgPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZW50UmV0cmlldmVyc1twcm9wXS5jYWxsKHRoaXMsIHVybCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSBlbHNlIGlmICh1cmwuaW5kZXhPZihcIjovL1wiKSA9PT0gLTEgJiYgcHJvcCA9PT0gXCJudWxsXCIpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZW50UmV0cmlldmVyc1twcm9wXS5jYWxsKHRoaXMsIHVybCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZWplY3QoKTtcbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cbi8qKlxuICogUmV0dXJuIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGZpcnN0IG9mIGFuIGFycmF5IG9mIHByb21pc2VzXG4gKiByZXNvbHZlcywgb3IgcmVqZWN0cyBhZnRlciBhbGwgcHJvbWlzZXMgcmVqZWN0LiBDYW4gYmUgdGhvdWdodCBvZiBhc1xuICogdGhlIG1pc3NpbmcgJ1Byb21pc2UuYW55JyAtIHJhY2UgaXMgbm8gZ29vZCwgc2luY2UgZWFybHkgcmVqZWN0aW9uc1xuICogcHJlZW1wdCBhIHN1YnNlcXVlbnQgcmVzb2x1dGlvbi5cbiAqIEBwcml2YXRlXG4gKiBAc3RhdGljXG4gKiBAbWV0aG9kIEZpcnN0UHJvbWlzZVxuICogQHBhcmFtIHtQcm9taXNlW119IFByb21pc2VzIHRvIHNlbGVjdCBmcm9tXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gUHJvbWlzZSByZXNvbHZpbmcgd2l0aCBhIHZhbHVlIGZyb20gYXJndW1lbnRzLlxuICovXG52YXIgZmlyc3RQcm9taXNlID0gZnVuY3Rpb24ocHJvbWlzZXMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ29tcGF0KGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciBlcnJvcnMgPSBbXTtcbiAgICBwcm9taXNlcy5mb3JFYWNoKGZ1bmN0aW9uKHByb21pc2UpIHtcbiAgICAgIHByb21pc2UudGhlbihyZXNvbHZlLCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goZXJyKTtcbiAgICAgICAgaWYgKGVycm9ycy5sZW5ndGggPT09IHByb21pc2VzLmxlbmd0aCkge1xuICAgICAgICAgIHJlamVjdChlcnJvcnMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFJlc29sdmUgYSByZXNvdXJjZSB1c2luZyBrbm93biByZXNvbHZlcnMuIFVubGlrZSBnZXQsIHJlc29sdmUgZG9lc1xuICogbm90IGNhY2hlIHJlc29sdmVkIHJlc291cmNlcy5cbiAqIEBtZXRob2QgcmVzb2x2ZVxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBtYW5pZmVzdCBUaGUgbW9kdWxlIHJlcXVlc3RpbmcgdGhlIHJlc291cmNlLlxuICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgcmVzb3VyY2UgdG8gcmVzb2x2ZTtcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBBIHByb21pc2UgZm9yIHRoZSByZXNvdXJjZSBhZGRyZXNzLlxuICovXG5SZXNvdXJjZS5wcm90b3R5cGUucmVzb2x2ZSA9IGZ1bmN0aW9uIChtYW5pZmVzdCwgdXJsKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHByb21pc2VzID0gW107XG4gICAgaWYgKHVybCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gcmVqZWN0KCk7XG4gICAgfVxuICAgIHV0aWwuZWFjaFJldmVyc2UodGhpcy5yZXNvbHZlcnMsIGZ1bmN0aW9uIChyZXNvbHZlcikge1xuICAgICAgcHJvbWlzZXMucHVzaChuZXcgUHJvbWlzZUNvbXBhdChyZXNvbHZlci5iaW5kKHt9LCBtYW5pZmVzdCwgdXJsKSkpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gICAgZmlyc3RQcm9taXNlKHByb21pc2VzKS50aGVuKHJlc29sdmUsIGZ1bmN0aW9uKCkge1xuICAgICAgcmVqZWN0KCdObyByZXNvbHZlcnMgdG8gaGFuZGxlIHVybDogJyArIEpTT04uc3RyaW5naWZ5KFttYW5pZmVzdCwgdXJsXSkpO1xuICAgIH0pO1xuICB9LmJpbmQodGhpcykpO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciByZXNvbHZlcnM6IGNvZGUgdGhhdCBrbm93cyBob3cgdG8gZ2V0IHJlc291cmNlc1xuICogbmVlZGVkIGJ5IHRoZSBydW50aW1lLiBBIHJlc29sdmVyIHdpbGwgYmUgY2FsbGVkIHdpdGggZm91clxuICogYXJndW1lbnRzOiB0aGUgYWJzb2x1dGUgbWFuaWZlc3Qgb2YgdGhlIHJlcXVlc3RlciwgdGhlXG4gKiByZXNvdXJjZSBiZWluZyByZXF1ZXN0ZWQsIGFuZCBhIHJlc29sdmUgLyByZWplY3QgcGFpciB0b1xuICogZnVsZmlsbCBhIHByb21pc2UuXG4gKiBAbWV0aG9kIGFkZFJlc29sdmVyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlciBUaGUgcmVzb2x2ZXIgdG8gYWRkLlxuICovXG5SZXNvdXJjZS5wcm90b3R5cGUuYWRkUmVzb2x2ZXIgPSBmdW5jdGlvbiAocmVzb2x2ZXIpIHtcbiAgdGhpcy5yZXNvbHZlcnMucHVzaChyZXNvbHZlcik7XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIHJldHJpZXZlcnM6IGNvZGUgdGhhdCBrbm93cyBob3cgdG8gbG9hZCByZXNvdXJjZXNcbiAqIG5lZWRlZCBieSB0aGUgcnVudGltZS4gQSByZXRyaWV2ZXIgd2lsbCBiZSBjYWxsZWQgd2l0aCBhIFVSTFxuICogdG8gcmV0cmlldmUgd2l0aCBhIHByb3RvY29sIHRoYXQgaXQgaXMgYWJsZSB0byBoYW5kbGUuXG4gKiBAbWV0aG9kIGFkZFJldHJpZXZlclxuICogQHBhcmFtIHtTdHJpbmd9IHByb3RvIFRoZSBwcm90b2NvbCB0byByZWdpc3RlciBmb3IuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXRyaWV2ZXIgVGhlIHJldHJpZXZlciB0byBhZGQuXG4gKi9cblJlc291cmNlLnByb3RvdHlwZS5hZGRSZXRyaWV2ZXIgPSBmdW5jdGlvbiAocHJvdG8sIHJldHJpZXZlcikge1xuICBpZiAodGhpcy5jb250ZW50UmV0cmlldmVyc1twcm90b10pIHtcbiAgICB0aGlzLmRlYnVnLndhcm4oXCJVbndpbGxpbmcgdG8gb3ZlcnJpZGUgZmlsZSByZXRyaWV2YWwgZm9yIFwiICsgcHJvdG8pO1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLmNvbnRlbnRSZXRyaWV2ZXJzW3Byb3RvXSA9IHJldHJpZXZlcjtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgZXh0ZXJuYWwgcmVzb2x2ZXJzIGFuZCByZXRyZWF2ZXJzXG4gKiBAbWV0aG9kIHJlZ2lzdGVyXG4gKiBAcGFyYW0ge3tcInByb3RvXCI6U3RyaW5nLCBcInJlc29sdmVyXCI6RnVuY3Rpb24sIFwicmV0cmVhdmVyXCI6RnVuY3Rpb259W119XG4gKiAgICAgcmVzb2x2ZXJzIFRoZSBsaXN0IG9mIHJldHJlaXZlcnMgYW5kIHJlc29sdmVycy5cbiAqL1xuUmVzb3VyY2UucHJvdG90eXBlLnJlZ2lzdGVyID0gZnVuY3Rpb24gKHJlc29sdmVycykge1xuICBpZiAoIXJlc29sdmVycy5sZW5ndGgpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICByZXNvbHZlcnMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgIGlmIChpdGVtLnJlc29sdmVyKSB7XG4gICAgICB0aGlzLmFkZFJlc29sdmVyKGl0ZW0ucmVzb2x2ZXIpO1xuICAgIH0gZWxzZSBpZiAoaXRlbS5wcm90byAmJiBpdGVtLnJldHJpZXZlcikge1xuICAgICAgdGhpcy5hZGRSZXRyaWV2ZXIoaXRlbS5wcm90bywgaXRlbS5yZXRyaWV2ZXIpO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgVVJMIGlzIGFuIGFic29sdXRlIFVSTCBvZiBhIGdpdmVuIFNjaGVtZS5cbiAqIEBtZXRob2QgaGFzU2NoZW1lXG4gKiBAc3RhdGljXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtTdHJpbmdbXX0gcHJvdG9jb2xzIFdoaXRlbGlzdGVkIHByb3RvY29sc1xuICogQHBhcmFtIHtTdHJpbmd9IFVSTCB0aGUgVVJMIHRvIG1hdGNoLlxuICogQHJldHVybnMge0Jvb2xlYW59IElmIHRoZSBVUkwgaXMgYW4gYWJzb2x1dGUgZXhhbXBsZSBvZiBvbmUgb2YgdGhlIHNjaGVtZXMuXG4gKi9cblJlc291cmNlLmhhc1NjaGVtZSA9IGZ1bmN0aW9uIChwcm90b2NvbHMsIHVybCkge1xuICB2YXIgaTtcbiAgZm9yIChpID0gMDsgaSA8IHByb3RvY29scy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICh1cmwuaW5kZXhPZihwcm90b2NvbHNbaV0gKyBcIjovL1wiKSA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogUmVtb3ZlICcuLycgYW5kICcuLi8nIGZyb20gYSBVUkxcbiAqIFJlcXVpcmVkIGJlY2F1c2UgQ2hyb21lIEFwcHMgZm9yIE1vYmlsZSAoY2NhKSBkb2Vzbid0IHVuZGVyc3RhbmRcbiAqIFhIUiBwYXRocyB3aXRoIHRoZXNlIHJlbGF0aXZlIGNvbXBvbmVudHMgaW4gdGhlIFVSTC5cbiAqIEBtZXRob2QgcmVtb3ZlUmVsYXRpdmVQYXRoXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gbW9kaWZ5XG4gKiBAcmV0dXJucyB7U3RyaW5nfSB1cmwgd2l0aG91dCAnLi8nIGFuZCAnLi4vJ1xuICoqL1xuUmVzb3VyY2UucmVtb3ZlUmVsYXRpdmVQYXRoID0gZnVuY3Rpb24gKHVybCkge1xuICB2YXIgaWR4ID0gdXJsLmluZGV4T2YoXCI6Ly9cIikgKyAzLFxuICAgIHN0YWNrLFxuICAgIHRvUmVtb3ZlLFxuICAgIHJlc3VsdDtcbiAgLy8gUmVtb3ZlIGFsbCBpbnN0YW5jZXMgb2YgLy4vXG4gIHVybCA9IHVybC5yZXBsYWNlKC9cXC9cXC5cXC8vZywgXCIvXCIpO1xuICAvL1dlaXJkIGJ1ZyB3aGVyZSBpbiBjY2EsIG1hbmlmZXN0IHN0YXJ0cyB3aXRoICdjaHJvbWU6Ly8vLydcbiAgLy9UaGlzIGZvcmNlcyB0aGVyZSB0byBvbmx5IGJlIDIgc2xhc2hlc1xuICB3aGlsZSAodXJsLmNoYXJBdChpZHgpID09PSBcIi9cIikge1xuICAgIHVybCA9IHVybC5zbGljZSgwLCBpZHgpICsgdXJsLnNsaWNlKGlkeCArIDEsIHVybC5sZW5ndGgpO1xuICB9XG5cbiAgLy8gQWR2YW5jZSB0byBuZXh0IC9cbiAgaWR4ID0gdXJsLmluZGV4T2YoXCIvXCIsIGlkeCk7XG4gIC8vIFJlbW92aW5nIC4uL1xuICBzdGFjayA9IHVybC5zdWJzdHIoaWR4ICsgMSkuc3BsaXQoXCIvXCIpO1xuICB3aGlsZSAoc3RhY2suaW5kZXhPZihcIi4uXCIpICE9PSAtMSkge1xuICAgIHRvUmVtb3ZlID0gc3RhY2suaW5kZXhPZihcIi4uXCIpO1xuICAgIGlmICh0b1JlbW92ZSA9PT0gMCkge1xuICAgICAgc3RhY2suc2hpZnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhY2suc3BsaWNlKCh0b1JlbW92ZSAtIDEpLCAyKTtcbiAgICB9XG4gIH1cbiAgXG4gIC8vUmVidWlsZCBzdHJpbmdcbiAgcmVzdWx0ID0gdXJsLnN1YnN0cigwLCBpZHgpO1xuICBmb3IgKGlkeCA9IDA7IGlkeCA8IHN0YWNrLmxlbmd0aDsgaWR4ICs9IDEpIHtcbiAgICByZXN1bHQgKz0gXCIvXCIgKyBzdGFja1tpZHhdO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFJlc29sdmUgVVJMcyB3aGljaCBjYW4gYmUgYWNjZXNzZWQgdXNpbmcgc3RhbmRhcmQgSFRUUCByZXF1ZXN0cy5cbiAqIEBtZXRob2QgaHR0cFJlc29sdmVyXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IG1hbmlmZXN0IFRoZSBNYW5pZmVzdCBVUkwuXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gcmVzb2x2ZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgVGhlIHByb21pc2UgdG8gY29tcGxldGUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgVGhlIHByb21pc2UgdG8gcmVqZWN0LlxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIFVSTCBjb3VsZCBiZSByZXNvbHZlZC5cbiAqL1xuUmVzb3VyY2UucHJvdG90eXBlLmh0dHBSZXNvbHZlciA9IGZ1bmN0aW9uIChtYW5pZmVzdCwgdXJsLCByZXNvbHZlLCByZWplY3QpIHtcbiAgdmFyIHByb3RvY29scyA9IFtcImh0dHBcIiwgXCJodHRwc1wiLCBcImNocm9tZVwiLCBcImNocm9tZS1leHRlbnNpb25cIiwgXCJyZXNvdXJjZVwiLFxuICAgICAgICAgICAgICAgICAgIFwiYXBwXCJdLFxuICAgIGRpcm5hbWUsXG4gICAgcHJvdG9jb2xJZHgsXG4gICAgcGF0aElkeCxcbiAgICBwYXRoLFxuICAgIGJhc2UsXG4gICAgcmVzdWx0O1xuXG4gIGlmIChSZXNvdXJjZS5oYXNTY2hlbWUocHJvdG9jb2xzLCB1cmwpKSB7XG4gICAgcmVzb2x2ZShSZXNvdXJjZS5yZW1vdmVSZWxhdGl2ZVBhdGgodXJsKSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgXG4gIGlmICghbWFuaWZlc3QpIHtcbiAgICByZWplY3QoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKFJlc291cmNlLmhhc1NjaGVtZShwcm90b2NvbHMsIG1hbmlmZXN0KSAmJlxuICAgICAgdXJsLmluZGV4T2YoXCI6Ly9cIikgPT09IC0xKSB7XG4gICAgZGlybmFtZSA9IG1hbmlmZXN0LnN1YnN0cigwLCBtYW5pZmVzdC5sYXN0SW5kZXhPZihcIi9cIikpO1xuICAgIHByb3RvY29sSWR4ID0gZGlybmFtZS5pbmRleE9mKFwiOi8vXCIpO1xuICAgIHBhdGhJZHggPSBwcm90b2NvbElkeCArIDMgKyBkaXJuYW1lLnN1YnN0cihwcm90b2NvbElkeCArIDMpLmluZGV4T2YoXCIvXCIpO1xuICAgIHBhdGggPSBkaXJuYW1lLnN1YnN0cihwYXRoSWR4KTtcbiAgICBiYXNlID0gZGlybmFtZS5zdWJzdHIoMCwgcGF0aElkeCk7XG4gICAgaWYgKHVybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuICAgICAgcmVzb2x2ZShSZXNvdXJjZS5yZW1vdmVSZWxhdGl2ZVBhdGgoYmFzZSArIHVybCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNvbHZlKFJlc291cmNlLnJlbW92ZVJlbGF0aXZlUGF0aChiYXNlICsgcGF0aCArIFwiL1wiICsgdXJsKSk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJlamVjdCgpO1xufTtcblxuLyoqXG4gKiBSZXNvbHZlIFVSTHMgd2hpY2ggYXJlIHNlbGYtZGVzY3JpYmluZy5cbiAqIEBtZXRob2QgbnVsbFJlc29sdmVyXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IG1hbmlmZXN0IFRoZSBNYW5pZmVzdCBVUkwuXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gcmVzb2x2ZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgVGhlIHByb21pc2UgdG8gY29tcGxldGUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgVGhlIHByb21pc2UgdG8gcmVqZWN0LlxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIFVSTCBjb3VsZCBiZSByZXNvbHZlZC5cbiAqL1xuUmVzb3VyY2UucHJvdG90eXBlLm51bGxSZXNvbHZlciA9IGZ1bmN0aW9uIChtYW5pZmVzdCwgdXJsLCByZXNvbHZlLCByZWplY3QpIHtcbiAgdmFyIHByb3RvY29scyA9IFtcIm1hbmlmZXN0XCJdO1xuICBpZiAoUmVzb3VyY2UuaGFzU2NoZW1lKHByb3RvY29scywgdXJsKSkge1xuICAgIHJlc29sdmUodXJsKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmICh1cmwuaW5kZXhPZignZGF0YTonKSA9PT0gMCkge1xuICAgIHJlc29sdmUodXJsKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZWplY3QoKTtcbn07XG5cbi8qKlxuICogUmV0cmlldmUgbWFuaWZlc3QgY29udGVudCBmcm9tIGEgc2VsZi1kZXNjcmlwdGl2ZSBtYW5pZmVzdCB1cmwuXG4gKiBUaGVzZSB1cmxzIGFyZSB1c2VkIHRvIHJlZmVyZW5jZSBhIG1hbmlmZXN0IHdpdGhvdXQgcmVxdWlyaW5nIHN1YnNlcXVlbnQsXG4gKiBwb3RlbnRpYWxseSBub24tQ09SUyByZXF1ZXN0cy5cbiAqIEBtZXRob2QgbWFuaWZlc3RSZXRyaWV2ZXJcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gbWFuaWZlc3QgVGhlIE1hbmlmZXN0IFVSTFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBUaGUgcHJvbWlzZSB0byBjb21wbGV0ZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBUaGUgcHJvbWlzZSB0byByZWplY3QuXG4gKi9cblJlc291cmNlLnByb3RvdHlwZS5tYW5pZmVzdFJldHJpZXZlciA9IGZ1bmN0aW9uIChtYW5pZmVzdCwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gIHZhciBkYXRhO1xuICB0cnkge1xuICAgIGRhdGEgPSBtYW5pZmVzdC5zdWJzdHIoMTEpO1xuICAgIEpTT04ucGFyc2UoZGF0YSk7XG4gICAgcmVzb2x2ZShkYXRhKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHRoaXMuZGVidWcud2FybihcIkludmFsaWQgbWFuaWZlc3QgVVJMIHJlZmVyZW5jZWQ6XCIgKyBtYW5pZmVzdCk7XG4gICAgcmVqZWN0KCk7XG4gIH1cbn07XG5cbi8qKlxuICogUmV0cmlldmUgcmVzb3VyY2UgY29udGVudHMgdXNpbmcgYW4gWEhSIHJlcXVlc3QuXG4gKiBAbWV0aG9kIHhoclJldHJpZXZlclxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIHJlc291cmNlIHRvIGZldGNoLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBUaGUgcHJvbWlzZSB0byBjb21wbGV0ZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBUaGUgcHJvbWlzZSB0byByZWplY3QuXG4gKi9cblJlc291cmNlLnByb3RvdHlwZS54aHJSZXRyaWV2ZXIgPSBmdW5jdGlvbiAodXJsLCByZXNvbHZlLCByZWplY3QpIHtcbiAgdmFyIHJlZiA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICByZWYuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIiwgZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGlmIChyZWYucmVhZHlTdGF0ZSA9PT0gNCAmJiByZWYucmVzcG9uc2VUZXh0KSB7XG4gICAgICByZXNvbHZlKHJlZi5yZXNwb25zZVRleHQpO1xuICAgIH0gZWxzZSBpZiAocmVmLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgIHRoaXMuZGVidWcud2FybihcIkZhaWxlZCB0byBsb2FkIGZpbGUgXCIgKyB1cmwgKyBcIjogXCIgKyByZWYuc3RhdHVzKTtcbiAgICAgIHJlamVjdChyZWYuc3RhdHVzKTtcbiAgICB9XG4gIH0uYmluZCh0aGlzLCByZXNvbHZlLCByZWplY3QpLCBmYWxzZSk7XG4gIHJlZi5vdmVycmlkZU1pbWVUeXBlKFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgcmVmLm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcbiAgcmVmLnNlbmQoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVzb3VyY2U7XG4iLCIvKmdsb2JhbHMgY3J5cHRvLCBXZWJLaXRCbG9iQnVpbGRlciwgQmxvYiwgVVJMICovXG4vKmdsb2JhbHMgd2Via2l0VVJMLCBVaW50OEFycmF5LCBVaW50MTZBcnJheSwgQXJyYXlCdWZmZXIgKi9cbi8qanNsaW50IGluZGVudDoyLHdoaXRlOnRydWUsYnJvd3Nlcjp0cnVlLG5vZGU6dHJ1ZSxzbG9wcHk6dHJ1ZSAqL1xuXG4vKipcbiAqIFV0aWxpdHkgbWV0aG9kIHVzZWQgd2l0aGluIHRoZSBmcmVlZG9tIExpYnJhcnkuXG4gKiBAY2xhc3MgdXRpbFxuICogQHN0YXRpY1xuICovXG52YXIgdXRpbCA9IHt9O1xuXG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIGZvciBpdGVyYXRpbmcgb3ZlciBhbiBhcnJheSBiYWNrd2FyZHMuIElmIHRoZSBmdW5jXG4gKiByZXR1cm5zIGEgdHJ1ZSB2YWx1ZSwgaXQgd2lsbCBicmVhayBvdXQgb2YgdGhlIGxvb3AuXG4gKiBAbWV0aG9kIGVhY2hSZXZlcnNlXG4gKiBAc3RhdGljXG4gKi9cbnV0aWwuZWFjaFJldmVyc2UgPSBmdW5jdGlvbihhcnksIGZ1bmMpIHtcbiAgaWYgKGFyeSkge1xuICAgIHZhciBpO1xuICAgIGZvciAoaSA9IGFyeS5sZW5ndGggLSAxOyBpID4gLTE7IGkgLT0gMSkge1xuICAgICAgaWYgKGFyeVtpXSAmJiBmdW5jKGFyeVtpXSwgaSwgYXJ5KSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQG1ldGhvZCBoYXNQcm9wXG4gKiBAc3RhdGljXG4gKi9cbnV0aWwuaGFzUHJvcCA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG59O1xuXG4vKipcbiAqIEN5Y2xlcyBvdmVyIHByb3BlcnRpZXMgaW4gYW4gb2JqZWN0IGFuZCBjYWxscyBhIGZ1bmN0aW9uIGZvciBlYWNoXG4gKiBwcm9wZXJ0eSB2YWx1ZS4gSWYgdGhlIGZ1bmN0aW9uIHJldHVybnMgYSB0cnV0aHkgdmFsdWUsIHRoZW4gdGhlXG4gKiBpdGVyYXRpb24gaXMgc3RvcHBlZC5cbiAqIEBtZXRob2QgZWFjaFByb3BcbiAqIEBzdGF0aWNcbiAqL1xudXRpbC5lYWNoUHJvcCA9IGZ1bmN0aW9uKG9iaiwgZnVuYykge1xuICB2YXIgcHJvcDtcbiAgZm9yIChwcm9wIGluIG9iaikge1xuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgIGlmIChmdW5jKG9ialtwcm9wXSwgcHJvcCkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIFNpbXBsZSBmdW5jdGlvbiB0byBtaXggaW4gcHJvcGVydGllcyBmcm9tIHNvdXJjZSBpbnRvIHRhcmdldCxcbiAqIGJ1dCBvbmx5IGlmIHRhcmdldCBkb2VzIG5vdCBhbHJlYWR5IGhhdmUgYSBwcm9wZXJ0eSBvZiB0aGUgc2FtZSBuYW1lLlxuICogVGhpcyBpcyBub3Qgcm9idXN0IGluIElFIGZvciB0cmFuc2ZlcnJpbmcgbWV0aG9kcyB0aGF0IG1hdGNoXG4gKiBPYmplY3QucHJvdG90eXBlIG5hbWVzLCBidXQgdGhlIHVzZXMgb2YgbWl4aW4gaGVyZSBzZWVtIHVubGlrZWx5IHRvXG4gKiB0cmlnZ2VyIGEgcHJvYmxlbSByZWxhdGVkIHRvIHRoYXQuXG4gKiBAbWV0aG9kIG1peGluXG4gKiBAc3RhdGljXG4gKi9cbnV0aWwubWl4aW4gPSBmdW5jdGlvbih0YXJnZXQsIHNvdXJjZSwgZm9yY2UpIHtcbiAgaWYgKHNvdXJjZSkge1xuICAgIHV0aWwuZWFjaFByb3Aoc291cmNlLCBmdW5jdGlvbiAodmFsdWUsIHByb3ApIHtcbiAgICAgIGlmIChmb3JjZSB8fCAhdXRpbC5oYXNQcm9wKHRhcmdldCwgcHJvcCkpIHtcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cbi8qKlxuICogR2V0IGEgdW5pcXVlIElELlxuICogQG1ldGhvZCBnZXRJZFxuICogQHN0YXRpY1xuICovXG51dGlsLmdldElkID0gZnVuY3Rpb24oKSB7XG4gIHZhciBndWlkID0gJ2d1aWQnLFxuICAgICAgZG9tYWluID0gMTIsXG4gICAgICBidWZmZXI7XG4gIC8vIENocm9tZSAvIEZpcmVmb3guXG4gIGlmICh0eXBlb2YgY3J5cHRvID09PSAnb2JqZWN0JyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgYnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkoZG9tYWluKTtcbiAgICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKGJ1ZmZlcik7XG4gICAgdXRpbC5lYWNoUmV2ZXJzZShidWZmZXIsIGZ1bmN0aW9uKG4pIHtcbiAgICAgIGd1aWQgKz0gJy0nICsgbjtcbiAgICB9KTtcbiAgLy8gTm9kZVxuICB9IGVsc2UgaWYgKHR5cGVvZiBjcnlwdG8gPT09ICdvYmplY3QnICYmIGNyeXB0by5yYW5kb21CeXRlcykge1xuICAgIGJ1ZmZlciA9IGNyeXB0by5yYW5kb21CeXRlcyhkb21haW4pO1xuICAgIHV0aWwuZWFjaFJldmVyc2UoYnVmZmVyLCBmdW5jdGlvbihuKSB7XG4gICAgICBndWlkICs9ICctJyArIG47XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKGRvbWFpbiA+IDApIHtcbiAgICAgIGd1aWQgKz0gJy0nICsgTWF0aC5jZWlsKDI1NSAqIE1hdGgucmFuZG9tKCkpO1xuICAgICAgZG9tYWluIC09IDE7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGd1aWQ7XG59O1xuXG4vKipcbiAqIEVuY29kZSBhIHN0cmluZyBpbnRvIGEgYmluYXJ5IGFycmF5IGJ1ZmZlciwgYnkgdHJlYXRpbmcgZWFjaCBjaGFyYWN0ZXIgYXMgYVxuICogdXRmMTYgZW5jb2RlZCBjaGFyYWN0ZXIgLSB0aGUgbmF0aXZlIGphdmFzY3JpcHQgZW5jb2RpbmcuXG4gKiBAbWV0aG9kIHN0cjJhYlxuICogQHN0YXRpY1xuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIGVuY29kZS5cbiAqIEByZXR1cm5zIHtBcnJheUJ1ZmZlcn0gVGhlIGVuY29kZWQgc3RyaW5nLlxuICovXG51dGlsLnN0cjJhYiA9IGZ1bmN0aW9uKHN0cikge1xuICB2YXIgbGVuZ3RoID0gc3RyLmxlbmd0aCxcbiAgICAgIGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihsZW5ndGggKiAyKSwgLy8gMiBieXRlcyBmb3IgZWFjaCBjaGFyXG4gICAgICBidWZmZXJWaWV3ID0gbmV3IFVpbnQxNkFycmF5KGJ1ZmZlciksXG4gICAgICBpO1xuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICBidWZmZXJWaWV3W2ldID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gIH1cblxuICByZXR1cm4gYnVmZmVyO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0IGFuIGFycmF5IGJ1ZmZlciBjb250YWluaW5nIGFuIGVuY29kZWQgc3RyaW5nIGJhY2sgaW50byBhIHN0cmluZy5cbiAqIEBtZXRob2QgYWIyc3RyXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB0byB1bndyYXAuXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgZGVjb2RlZCBidWZmZXIuXG4gKi9cbnV0aWwuYWIyc3RyID0gZnVuY3Rpb24oYnVmZmVyKSB7XG4gIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIG5ldyBVaW50MTZBcnJheShidWZmZXIpKTtcbn07XG5cbi8qKlxuICogQWRkICdvbicgYW5kICdlbWl0JyBtZXRob2RzIHRvIGFuIG9iamVjdCwgd2hpY2ggYWN0IGFzIGEgbGlnaHQgd2VpZ2h0XG4gKiBldmVudCBoYW5kbGluZyBzdHJ1Y3R1cmUuXG4gKiBAY2xhc3MgaGFuZGxlRXZlbnRzXG4gKiBAc3RhdGljXG4gKi9cbnV0aWwuaGFuZGxlRXZlbnRzID0gZnVuY3Rpb24ob2JqKSB7XG4gIHZhciBldmVudFN0YXRlID0ge1xuICAgIERFQlVHX0JBQ0tSRUY6IG9iaixcbiAgICBtdWx0aXBsZToge30sXG4gICAgbWF5YmVtdWx0aXBsZTogW10sXG4gICAgc2luZ2xlOiB7fSxcbiAgICBtYXliZXNpbmdsZTogW11cbiAgfSwgZmlsdGVyLCBwdXNoO1xuXG4gIC8qKlxuICAgKiBGaWx0ZXIgYSBsaXN0IGJhc2VkIG9uIGEgcHJlZGljYXRlLiBUaGUgbGlzdCBpcyBmaWx0ZXJlZCBpbiBwbGFjZSwgd2l0aFxuICAgKiBzZWxlY3RlZCBpdGVtcyByZW1vdmVkIGFuZCByZXR1cm5lZCBieSB0aGUgZnVuY3Rpb24uXG4gICAqIEBtZXRob2RcbiAgICogQHBhcmFtIHtBcnJheX0gbGlzdCBUaGUgbGlzdCB0byBmaWx0ZXJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBtZXRob2QgdG8gcnVuIG9uIGVhY2ggaXRlbS5cbiAgICogQHJldHVybnMge0FycmF5fSBTZWxlY3RlZCBpdGVtc1xuICAgKi9cbiAgZmlsdGVyID0gZnVuY3Rpb24obGlzdCwgcHJlZGljYXRlKSB7XG4gICAgdmFyIHJldCA9IFtdLCBpO1xuXG4gICAgaWYgKCFsaXN0IHx8ICFsaXN0Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGZvciAoaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcbiAgICAgIGlmIChwcmVkaWNhdGUobGlzdFtpXSkpIHtcbiAgICAgICAgcmV0LnB1c2gobGlzdC5zcGxpY2UoaSwgMSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBFbnF1ZXVlIGEgaGFuZGxlciBmb3IgYSBzcGVjaWZpYyB0eXBlLlxuICAgKiBAbWV0aG9kXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0byBUaGUgcXVldWUgKCdzaW5nbGUnIG9yICdtdWx0aXBsZScpIHRvIHF1ZXVlIG9uLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBUaGUgdHlwZSBvZiBldmVudCB0byB3YWl0IGZvci5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlciBUaGUgaGFuZGxlciB0byBlbnF1ZXVlLlxuICAgKi9cbiAgcHVzaCA9IGZ1bmN0aW9uKHRvLCB0eXBlLCBoYW5kbGVyKSB7XG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzWydtYXliZScgKyB0b10ucHVzaChbdHlwZSwgaGFuZGxlcl0pO1xuICAgIH0gZWxzZSBpZiAodGhpc1t0b11bdHlwZV0pIHtcbiAgICAgIHRoaXNbdG9dW3R5cGVdLnB1c2goaGFuZGxlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXNbdG9dW3R5cGVdID0gW2hhbmRsZXJdO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBtZXRob2QgdG8gYmUgZXhlY3V0ZWQgd2hlbiBhbiBldmVudCBvZiBhIHNwZWNpZmljIHR5cGUgb2NjdXJzLlxuICAgKiBAbWV0aG9kIG9uXG4gICAqIEBwYXJhbSB7U3RyaW5nfEZ1bmN0aW9ufSB0eXBlIFRoZSB0eXBlIG9mIGV2ZW50IHRvIHJlZ2lzdGVyIGFnYWluc3QuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXIgVGhlIGhhbmRsZXIgdG8gcnVuIHdoZW4gdGhlIGV2ZW50IG9jY3Vycy5cbiAgICovXG4gIG9iai5vbiA9IHB1c2guYmluZChldmVudFN0YXRlLCAnbXVsdGlwbGUnKTtcblxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBtZXRob2QgdG8gYmUgZXhlY3V0ZSB0aGUgbmV4dCB0aW1lIGFuIGV2ZW50IG9jY3Vycy5cbiAgICogQG1ldGhvZCBvbmNlXG4gICAqIEBwYXJhbSB7U3RyaW5nfEZ1bmN0aW9ufSB0eXBlIFRoZSB0eXBlIG9mIGV2ZW50IHRvIHdhaXQgZm9yLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIFRoZSBoYW5kbGVyIHRvIHJ1biB0aGUgbmV4dCB0aW1lIGEgbWF0Y2hpbmcgZXZlbnRcbiAgICogICAgIGlzIHJhaXNlZC5cbiAgICovXG4gIG9iai5vbmNlID0gcHVzaC5iaW5kKGV2ZW50U3RhdGUsICdzaW5nbGUnKTtcblxuICAvKipcbiAgICogRW1pdCBhbiBldmVudCBvbiB0aGlzIG9iamVjdC5cbiAgICogQG1ldGhvZCBlbWl0XG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIFRoZSB0eXBlIG9mIGV2ZW50IHRvIHJhaXNlLlxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBUaGUgcGF5bG9hZCBvZiB0aGUgZXZlbnQuXG4gICAqL1xuICBvYmouZW1pdCA9IGZ1bmN0aW9uKHR5cGUsIGRhdGEpIHtcbiAgICB2YXIgaSwgcXVldWU7XG4gICAgLy8gTm90ZSB0aGF0IHJlZ2lzdGVyZWQgaGFuZGxlcnMgbWF5IHN0b3AgZXZlbnRzIG9uIHRoZSBvYmplY3QsIGJ5IGNhbGxpbmdcbiAgICAvLyB0aGlzLm9mZigpLiBBcyBzdWNoLCB0aGUgcHJlc2VuY2Ugb2YgdGhlc2Uga2V5cyBtdXN0IGJlIGNoZWNrZWQgb24gZWFjaFxuICAgIC8vIGl0ZXJhdGlvbiBvZiB0aGUgcmVsZXZhbnQgbG9vcHMuXG4gICAgZm9yIChpID0gMDsgdGhpcy5tdWx0aXBsZVt0eXBlXSAmJlxuICAgICAgICAgaSA8IHRoaXMubXVsdGlwbGVbdHlwZV0ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICh0aGlzLm11bHRpcGxlW3R5cGVdW2ldKGRhdGEpID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnNpbmdsZVt0eXBlXSkge1xuICAgICAgcXVldWUgPSB0aGlzLnNpbmdsZVt0eXBlXTtcbiAgICAgIHRoaXMuc2luZ2xlW3R5cGVdID0gW107XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgcXVldWVbaV0oZGF0YSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLm1heWJlbXVsdGlwbGUubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICh0aGlzLm1heWJlbXVsdGlwbGVbaV1bMF0odHlwZSwgZGF0YSkpIHtcbiAgICAgICAgdGhpcy5tYXliZW11bHRpcGxlW2ldWzFdKGRhdGEpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGkgPSB0aGlzLm1heWJlc2luZ2xlLmxlbmd0aCAtIDE7IGkgPj0gMDsgaSAtPSAxKSB7XG4gICAgICBpZiAodGhpcy5tYXliZXNpbmdsZVtpXVswXSh0eXBlLCBkYXRhKSkge1xuICAgICAgICBxdWV1ZSA9IHRoaXMubWF5YmVzaW5nbGUuc3BsaWNlKGksIDEpO1xuICAgICAgICBxdWV1ZVswXVsxXShkYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gIH0uYmluZChldmVudFN0YXRlKTtcblxuICAvKipcbiAgICogUmVtb3ZlIGFuIGV2ZW50IGhhbmRsZXJcbiAgICogQG1ldGhvZCBvZmZcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgVGhlIHR5cGUgb2YgZXZlbnQgdG8gcmVtb3ZlLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9uP30gaGFuZGxlciBUaGUgaGFuZGxlciB0byByZW1vdmUuXG4gICAqL1xuICBvYmoub2ZmID0gZnVuY3Rpb24odHlwZSwgaGFuZGxlcikge1xuICAgIGlmICghdHlwZSkge1xuICAgICAgZGVsZXRlIHRoaXMuREVCVUdfQkFDS1JFRjtcbiAgICAgIHRoaXMubXVsdGlwbGUgPSB7fTtcbiAgICAgIHRoaXMubWF5YmVtdWx0aXBsZSA9IFtdO1xuICAgICAgdGhpcy5zaW5nbGUgPSB7fTtcbiAgICAgIHRoaXMubWF5YmVzaW5nbGUgPSBbXTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGZpbHRlcih0aGlzLm1heWJlc2luZ2xlLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtWzBdID09PSB0eXBlICYmICghaGFuZGxlciB8fCBpdGVtWzFdID09PSBoYW5kbGVyKTtcbiAgICAgIH0pO1xuICAgICAgZmlsdGVyKHRoaXMubWF5YmVtdWx0aXBsZSwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbVswXSA9PT0gdHlwZSAmJiAoIWhhbmRsZXIgfHwgaXRlbVsxXSA9PT0gaGFuZGxlcik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIWhhbmRsZXIpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLm11bHRpcGxlW3R5cGVdO1xuICAgICAgZGVsZXRlIHRoaXMuc2luZ2xlW3R5cGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWx0ZXIodGhpcy5tdWx0aXBsZVt0eXBlXSwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbSA9PT0gaGFuZGxlcjtcbiAgICAgIH0pO1xuICAgICAgZmlsdGVyKHRoaXMuc2luZ2xlW3R5cGVdLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtID09PSBoYW5kbGVyO1xuICAgICAgfSk7XG4gICAgfVxuICB9LmJpbmQoZXZlbnRTdGF0ZSk7XG59O1xuXG4vKipcbiAqIFdoZW4gcnVuIHdpdGhvdXQgYSB3aW5kb3csIG9yIHNwZWNpZmljYWxseSByZXF1ZXN0ZWQuXG4gKiBOb3RlOiBEZWNsYXJhdGlvbiBjYW4gYmUgcmVkZWZpbmVkIGluIGZvcmNlTW9kdWxlQ29udGV4dCBiZWxvdy5cbiAqIEBtZXRob2QgaXNNb2R1bGVDb250ZXh0XG4gKiBAZm9yIHV0aWxcbiAqIEBzdGF0aWNcbiAqL1xuLyohQHByZXNlcnZlIFN0YXJ0TW9kdWxlQ29udGV4dERlY2xhcmF0aW9uKi9cbnV0aWwuaXNNb2R1bGVDb250ZXh0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyk7XG59O1xuXG4vKipcbiAqIEdldCBhIEJsb2Igb2JqZWN0IG9mIGEgc3RyaW5nLlxuICogUG9seWZpbGxzIGltcGxlbWVudGF0aW9ucyB3aGljaCBkb24ndCBoYXZlIGEgY3VycmVudCBCbG9iIGNvbnN0cnVjdG9yLCBsaWtlXG4gKiBwaGFudG9tanMuXG4gKiBAbWV0aG9kIGdldEJsb2JcbiAqIEBzdGF0aWNcbiAqL1xudXRpbC5nZXRCbG9iID0gZnVuY3Rpb24oZGF0YSwgdHlwZSkge1xuICBpZiAodHlwZW9mIEJsb2IgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFdlYktpdEJsb2JCdWlsZGVyICE9PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBidWlsZGVyID0gbmV3IFdlYktpdEJsb2JCdWlsZGVyKCk7XG4gICAgYnVpbGRlci5hcHBlbmQoZGF0YSk7XG4gICAgcmV0dXJuIGJ1aWxkZXIuZ2V0QmxvYih0eXBlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IEJsb2IoW2RhdGFdLCB7dHlwZTogdHlwZX0pO1xuICB9XG59O1xuXG4vKipcbiAqIEZpbmQgYWxsIHNjcmlwdHMgb24gdGhlIGdpdmVuIHBhZ2UuXG4gKiBAbWV0aG9kIHNjcmlwdHNcbiAqIEBzdGF0aWNcbiAqL1xudXRpbC5zY3JpcHRzID0gZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIHJldHVybiBnbG9iYWwuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB1dGlsO1xuIiwiLypqc2xpbnQgbm9kZTp0cnVlKi9cblxudmFyIHByb3ZpZGVycyA9IFtcbiAgcmVxdWlyZSgnLi4vLi4vcHJvdmlkZXJzL2NvcmUvY29yZS51bnByaXZpbGVnZWQnKSxcbiAgcmVxdWlyZSgnLi4vLi4vcHJvdmlkZXJzL2NvcmUvY29yZS5lY2hvJyksXG4gIHJlcXVpcmUoJy4uLy4uL3Byb3ZpZGVycy9jb3JlL2NvcmUuY29uc29sZScpLFxuICByZXF1aXJlKCcuLi8uLi9wcm92aWRlcnMvY29yZS9jb3JlLnBlZXJjb25uZWN0aW9uJyksXG4gIHJlcXVpcmUoJy4uLy4uL3Byb3ZpZGVycy9jb3JlL2NvcmUucnRjcGVlcmNvbm5lY3Rpb24nKSxcbiAgcmVxdWlyZSgnLi4vLi4vcHJvdmlkZXJzL2NvcmUvY29yZS5ydGNkYXRhY2hhbm5lbCcpLFxuICByZXF1aXJlKCcuLi8uLi9wcm92aWRlcnMvY29yZS9jb3JlLnN0b3JhZ2UnKSxcbiAgcmVxdWlyZSgnLi4vLi4vcHJvdmlkZXJzL2NvcmUvY29yZS52aWV3JyksXG4gIHJlcXVpcmUoJy4uLy4uL3Byb3ZpZGVycy9jb3JlL2NvcmUub2F1dGgnKSxcbiAgcmVxdWlyZSgnLi4vLi4vcHJvdmlkZXJzL2NvcmUvY29yZS53ZWJzb2NrZXQnKVxuXTtcblxuZnVuY3Rpb24gZ2V0RnJlZWRvbVNjcmlwdCgpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB2YXIgc2NyaXB0O1xuICBpZiAod2luZG93LmRvY3VtZW50LmN1cnJlbnRTY3JpcHQpIHtcbiAgICAvLyBOZXcgYnJvd3NlciBBUElcbiAgICBzY3JpcHQgPSB3aW5kb3cuZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG4gIH0gZWxzZSBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gXCJjb21wbGV0ZVwiICYmXG4gICAgICAgICAgICAgZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gXCJsb2FkZWRcIikge1xuICAgIC8vIEluY2x1ZGVkIGluIEhUTUwgb3IgdGhyb3VnaCBkb2N1bWVudC53cml0ZVxuICAgIHNjcmlwdCA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0Jyk7XG4gICAgc2NyaXB0ID0gc2NyaXB0W3NjcmlwdC5sZW5ndGggLSAxXS5zcmM7XG4gIH0gZWxzZSB7XG4gICAgLy8gTG9hZGVkIHRocm91Z2ggZG9tIG1hbmlwdWxhdGlvbiBvciBhc3luYy5cbiAgICBzY3JpcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCJzY3JpcHRbc3JjKj0nZnJlZWRvbS5qcyddLHNjcmlwdFtzcmMqPSdmcmVlZG9tLSddXCJcbiAgICApO1xuICAgIGlmIChzY3JpcHQubGVuZ3RoICE9PSAxKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiQ291bGQgbm90IGRldGVybWluZSBmcmVlZG9tLmpzIHNjcmlwdCB0YWcuXCIpO1xuICAgIH1cbiAgICBzY3JpcHQgPSBzY3JpcHRbMF0uc3JjO1xuICB9XG4gIHJldHVybiBzY3JpcHQ7XG59XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICB3aW5kb3cuZnJlZWRvbSA9IHJlcXVpcmUoJy4uL2VudHJ5JykuYmluZCh7fSwge1xuICAgIGxvY2F0aW9uOiB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICBwb3J0VHlwZTogcmVxdWlyZSgnLi4vbGluay93b3JrZXInKSxcbiAgICBzb3VyY2U6IGdldEZyZWVkb21TY3JpcHQoKSxcbiAgICBwcm92aWRlcnM6IHByb3ZpZGVycyxcbiAgICBvYXV0aDogW1xuICAgICAgcmVxdWlyZSgnLi4vLi4vcHJvdmlkZXJzL29hdXRoL29hdXRoLmxvY2FscGFnZWF1dGgnKSxcbiAgICAgIHJlcXVpcmUoJy4uLy4uL3Byb3ZpZGVycy9vYXV0aC9vYXV0aC5yZW1vdGVwYWdlYXV0aCcpXG4gICAgXVxuICB9KTtcbn0gZWxzZSB7XG4gIHJlcXVpcmUoJy4uL2VudHJ5Jykoe1xuICAgIGlzTW9kdWxlOiB0cnVlLFxuICAgIHBvcnRUeXBlOiByZXF1aXJlKCcuLi9saW5rL3dvcmtlcicpLFxuICAgIHByb3ZpZGVyczogcHJvdmlkZXJzLFxuICAgIGdsb2JhbDogZ2xvYmFsXG4gIH0pO1xufVxuIl19