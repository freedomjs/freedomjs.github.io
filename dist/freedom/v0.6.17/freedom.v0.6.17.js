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
 * @version 0.6.17
 */
 
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = [{"name":"console","api":{"log":{"type":"method","value":["string","string"]},"debug":{"type":"method","value":["string","string"]},"info":{"type":"method","value":["string","string"]},"warn":{"type":"method","value":["string","string"]},"error":{"type":"method","value":["string","string"]}}},{"name":"core.console","api":{"log":{"type":"method","value":["string","string"]},"debug":{"type":"method","value":["string","string"]},"info":{"type":"method","value":["string","string"]},"warn":{"type":"method","value":["string","string"]},"error":{"type":"method","value":["string","string"]}}},{"name":"core.echo","api":{"setup":{"type":"method","value":["string"]},"send":{"type":"method","value":["string"]},"message":{"type":"event","value":"string"}}},{"name":"core","api":{"createChannel":{"type":"method","value":[],"ret":{"channel":"proxy","identifier":"string"}},"bindChannel":{"type":"method","value":["string"],"ret":"proxy"},"getId":{"type":"method","value":[],"ret":["array","string"]},"getLogger":{"type":"method","value":["string"],"ret":"proxy"}}},{"name":"core.oauth","api":{"initiateOAuth":{"type":"method","value":[["array","string"]],"ret":{"redirect":"string","state":"string"},"err":{"errcode":"string","message":"string"}},"launchAuthFlow":{"type":"method","value":["string",{"redirect":"string","state":"string"}],"ret":"string","err":{"errcode":"string","message":"string"}}}},{"name":"core.peerconnection","api":{"setup":{"type":"method","value":["string","string",["array","string"],"boolean"]},"send":{"type":"method","value":[{"channelLabel":"string","text":"string","binary":"blob","buffer":"buffer"}]},"onReceived":{"type":"event","value":{"channelLabel":"string","text":"string","binary":"blob","buffer":"buffer"}},"openDataChannel":{"type":"method","value":["string"]},"closeDataChannel":{"type":"method","value":["string"]},"onOpenDataChannel":{"type":"event","value":{"channelId":"string"}},"onCloseDataChannel":{"type":"event","value":{"channelId":"string"}},"getBufferedAmount":{"type":"method","value":["string"],"ret":"number"},"getInfo":{"type":"method","value":[],"ret":"string"},"createOffer":{"type":"method","value":[{"offerToReceiveVideo":"number","offerToReceiveAudio":"number","voiceActivityDetection":"boolean","iceRestart":"boolean"}],"ret":{"type":"string","sdp":"string"}},"close":{"type":"method","value":[]},"onClose":{"type":"event","value":{}}}},{"name":"core.rtcdatachannel","api":{"constructor":{"value":["string"]},"getLabel":{"type":"method","value":[],"ret":"string"},"getOrdered":{"type":"method","value":[],"ret":"boolean"},"getMaxPacketLifeTime":{"type":"method","value":[],"ret":"number"},"getMaxRetransmits":{"type":"method","value":[],"ret":"number"},"getProtocol":{"type":"method","value":[],"ret":"string"},"getNegotiated":{"type":"method","value":[],"ret":"boolean"},"getId":{"type":"method","value":[],"ret":"number"},"getReadyState":{"type":"method","value":[],"ret":"string"},"getBufferedAmount":{"type":"method","value":[],"ret":"number"},"onopen":{"type":"event","value":[]},"onerror":{"type":"event","value":[]},"onclose":{"type":"event","value":[]},"close":{"type":"method","value":[]},"onmessage":{"type":"event","value":{"text":"string","buffer":"buffer"}},"getBinaryType":{"type":"method","value":[],"ret":"string"},"setBinaryType":{"type":"method","value":["string"]},"send":{"type":"method","value":["string"]},"sendBuffer":{"type":"method","value":["buffer"]}}},{"name":"core.rtcpeerconnection","api":{"constructor":{"value":[{"iceServers":["array",{"urls":["array","string"],"username":"string","credential":"string"}],"iceTransports":"string","peerIdentity":"string"}]},"createOffer":{"type":"method","value":[{"offerToReceiveAudio":"number","offerToReceiveVideo":"number","iceRestart":"boolean","voiceActivityDetection":"boolean"}],"ret":{"type":"string","sdp":"string"}},"createAnswer":{"type":"method","value":[],"ret":{"type":"string","sdp":"string"}},"setLocalDescription":{"type":"method","value":[{"type":"string","sdp":"string"}]},"getLocalDescription":{"type":"method","value":[],"ret":{"type":"string","sdp":"string"}},"setRemoteDescription":{"type":"method","value":[{"type":"string","sdp":"string"}],"ret":{}},"getRemoteDescription":{"type":"method","value":[],"ret":{"type":"string","sdp":"string"}},"getSignalingState":{"type":"method","value":[],"ret":"string"},"updateIce":{"type":"method","value":[{"iceServers":["array",{"urls":["array","string"],"username":"string","credential":"string"}],"iceTransports":"string","peerIdentity":"string"}],"ret":{}},"addIceCandidate":{"type":"method","value":[{"candidate":"string","sdpMid":"string","sdpMLineIndex":"number"}],"ret":{}},"getIceGatheringState":{"type":"method","value":[],"ret":"string"},"getIceConnectionState":{"type":"method","value":[],"ret":"string"},"getConfiguration":{"type":"method","value":[],"ret":{"iceServers":["array",{"urls":["array","string"],"username":"string","credential":"string"}],"iceTransports":"string","peerIdentity":"string"}},"getLocalStreams":{"type":"method","value":[],"ret":["array","string"]},"getRemoteStreams":{"type":"method","value":[],"ret":["array","string"]},"getStreamById":{"type":"method","value":["string"],"ret":"string"},"addStream":{"type":"method","value":["string"],"ret":{}},"removeStream":{"type":"method","value":["string"],"ret":{}},"close":{"type":"method","value":[],"ret":{}},"createDataChannel":{"type":"method","value":["string",{"ordered":"boolean","maxPacketLifeTime":"number","maxRetransmits":"number","protocol":"string","negotiated":"boolean","id":"number"}],"ret":"string"},"ondatachannel":{"type":"event","value":{"channel":"string"}},"getStats":{"type":"method","value":["string"],"ret":"object"},"onnegotiationneeded":{"type":"event","value":[]},"onicecandidate":{"type":"event","value":{"candidate":{"candidate":"string","sdpMid":"string","sdpMLineIndex":"number"}}},"onsignalingstatechange":{"type":"event","value":[]},"onaddstream":{"type":"event","value":{"stream":"number"}},"onremovestream":{"type":"event","value":{"stream":"number"}},"oniceconnectionstatechange":{"type":"event","value":[]}}},{"name":"core.storage","api":{"keys":{"type":"method","value":[],"ret":["array","string"]},"get":{"type":"method","value":["string"],"ret":"string"},"set":{"type":"method","value":["string","string"],"ret":"string"},"remove":{"type":"method","value":["string"],"ret":"string"},"clear":{"type":"method","value":[]}}},{"name":"core.tcpsocket","api":{"constructor":{"value":["number"]},"getInfo":{"type":"method","value":[],"ret":{"connected":"boolean","localAddress":"string","localPort":"number","peerAddress":"string","peerPort":"number"}},"ERRCODE":{"type":"constant","value":{"SUCCESS":"Success!","UNKNOWN":"Unknown error","ALREADY_CONNECTED":"Socket already connected","INVALID_ARGUMENT":"Invalid argument","TIMED_OUT":"Timed out","NOT_CONNECTED":"Socket not connected","NETWORK_CHANGED":"Network changed","CONNECTION_CLOSED":"Connection closed gracefully","CONNECTION_RESET":"Connection reset","CONNECTION_REFUSED":"Connection refused","CONNECTION_FAILED":"Connection failed"}},"close":{"type":"method","value":[],"err":{"errcode":"string","message":"string"}},"onDisconnect":{"type":"event","value":{"errcode":"string","message":"string"}},"connect":{"type":"method","value":["string","number"],"err":{"errcode":"string","message":"string"}},"secure":{"type":"method","value":[],"err":{"errcode":"string","message":"string"}},"prepareSecure":{"type":"method","value":[],"err":{"errcode":"string","message":"string"}},"write":{"type":"method","value":["buffer"],"err":{"errcode":"string","message":"string"}},"onData":{"type":"event","value":{"data":"buffer"}},"listen":{"type":"method","value":["string","number"],"err":{"errcode":"string","message":"string"}},"onConnection":{"type":"event","value":{"socket":"number","host":"string","port":"number"}}}},{"name":"core.udpsocket","api":{"ERRCODE":{"type":"constant","value":{"SUCCESS":"Success!","UNKNOWN":"Unknown error","ALREADY_BOUND":"Socket already bound","INVALID_ARGUMENT":"Invalid argument","NETWORK_CHANGED":"Network changed","SNED_FAILED":"Send failed"}},"bind":{"type":"method","value":["string","number"],"ret":[],"err":{"errcode":"string","message":"string"}},"getInfo":{"type":"method","value":[],"ret":{"localAddress":"string","localPort":"number"}},"sendTo":{"type":"method","value":["buffer","string","number"],"ret":"number","err":{"errcode":"string","message":"string"}},"destroy":{"type":"method","value":[]},"onData":{"type":"event","value":{"resultCode":"number","address":"string","port":"number","data":"buffer"}}}},{"name":"core.view","api":{"show":{"type":"method","value":["string"]},"isSecure":{"type":"method","value":[],"ret":"boolean"},"close":{"type":"method","value":[]},"postMessage":{"type":"method","value":["object"]},"message":{"type":"event","value":"object"},"onClose":{"type":"event","value":[]}}},{"name":"core.websocket","api":{"constructor":{"value":["string",["array","string"]]},"send":{"type":"method","value":[{"text":"string","binary":"blob","buffer":"buffer"}],"err":{"errcode":"string","message":"string"}},"getReadyState":{"type":"method","value":[],"ret":"number"},"getBufferedAmount":{"type":"method","value":["string"],"ret":"number"},"close":{"type":"method","value":["number","string"],"err":{"errcode":"string","message":"string"}},"onMessage":{"type":"event","value":{"text":"string","binary":"blob","buffer":"buffer"}},"onOpen":{"type":"event","value":[]},"onError":{"type":"event","value":{"errcode":"string","message":"string"}},"onClose":{"type":"event","value":{"code":"number","reason":"string","wasClean":"boolean"}}}},{"name":"core.xhr","api":{"open":{"type":"method","value":["string","string","boolean","string","string"],"err":{"errcode":"string","message":"string"}},"send":{"type":"method","value":[{"string":"string","buffer":"buffer"}]},"abort":{"type":"method","value":[]},"getResponseHeader":{"type":"method","value":["string"],"ret":"string"},"getAllResponseHeaders":{"type":"method","value":[],"ret":"string"},"setRequestHeader":{"type":"method","value":["string","string"]},"overrideMimeType":{"type":"method","value":["string"]},"getReadyState":{"type":"method","value":[],"ret":"number"},"getResponse":{"type":"method","value":[],"ret":{"string":"string","buffer":"buffer","object":"object"}},"getResponseText":{"type":"method","value":[],"ret":"string"},"getResponseURL":{"type":"method","value":[],"ret":"string"},"getResponseType":{"type":"method","value":[],"ret":"string"},"setResponseType":{"type":"method","value":["string"]},"getStatus":{"type":"method","value":[],"ret":"number"},"getStatusText":{"type":"method","value":[],"ret":"string"},"getTimeout":{"type":"method","value":[],"ret":"number"},"setTimeout":{"type":"method","value":["number"]},"getWithCredentials":{"type":"method","value":[],"ret":"boolean"},"setWithCredentials":{"type":"method","value":["boolean"]},"onloadstart":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onprogress":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onabort":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onerror":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onload":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"ontimeout":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onloadend":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onreadystatechange":{"type":"event","value":{}},"onuploadloadstart":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onuploadprogress":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onuploadabort":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onuploaderror":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onuploadload":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onuploadtimeout":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onuploadloadend":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onuploadreadystatechange":{"type":"event","value":{}}}},{"name":"social","api":{"ERRCODE":{"type":"constant","value":{"SUCCESS":"Success!","UNKNOWN":"Unknown error","OFFLINE":"User is currently offline","MALFORMEDPARAMETERS":"Parameters are malformed","LOGIN_BADCREDENTIALS":"Error authenticating with server","LOGIN_FAILEDCONNECTION":"Error connecting to server","LOGIN_ALREADYONLINE":"User is already logged in","LOGIN_OAUTHERROR":"OAuth Error","SEND_INVALIDDESTINATION":"Message sent to an invalid destination"}},"STATUS":{"type":"constant","value":{"OFFLINE":"OFFLINE","ONLINE":"ONLINE","ONLINE_WITH_OTHER_APP":"ONLINE_WITH_OTHER_APP"}},"login":{"type":"method","value":[{"agent":"string","version":"string","url":"string","interactive":"boolean","rememberLogin":"boolean"}],"ret":{"userId":"string","clientId":"string","status":"string","lastUpdated":"number","lastSeen":"number"},"err":{"errcode":"string","message":"string"}},"clearCachedCredentials":{"type":"method","value":[]},"getClients":{"type":"method","value":[],"ret":"object","err":{"errcode":"string","message":"string"}},"getUsers":{"type":"method","value":[],"ret":"object","err":{"errcode":"string","message":"string"}},"sendMessage":{"type":"method","value":["string","string"],"err":{"errcode":"string","message":"string"}},"logout":{"type":"method","value":[],"err":{"errcode":"string","message":"string"}},"onMessage":{"type":"event","value":{"from":{"userId":"string","clientId":"string","status":"string","lastUpdated":"number","lastSeen":"number"},"message":"string"}},"onUserProfile":{"type":"event","value":{"userId":"string","lastUpdated":"number","name":"string","url":"string","imageData":"string"}},"onClientState":{"type":"event","value":{"userId":"string","clientId":"string","status":"string","lastUpdated":"number","lastSeen":"number"}}}},{"name":"storage","api":{"scope":{"type":"constant","value":{"SESSION":0,"DEVICE_LOCAL":1,"USER_LOCAL":2,"SHARED":3}},"ERRCODE":{"type":"constant","value":{"SUCCESS":"Success!","UNKNOWN":"Unknown error","OFFLINE":"Database not reachable","MALFORMEDPARAMETERS":"Parameters are malformed"}},"constructor":{"value":[{"scope":"number"}]},"keys":{"type":"method","value":[],"ret":["array","string"],"err":{"errcode":"string","message":"string"}},"get":{"type":"method","value":["string"],"ret":"string","err":{"errcode":"string","message":"string"}},"set":{"type":"method","value":["string","string"],"ret":"string","err":{"errcode":"string","message":"string"}},"remove":{"type":"method","value":["string"],"ret":"string","err":{"errcode":"string","message":"string"}},"clear":{"type":"method","value":[],"ret":[],"err":{"errcode":"string","message":"string"}}}},{"name":"storebuffer","api":{"scope":{"type":"constant","value":{"SESSION":0,"DEVICE_LOCAL":1,"USER_LOCAL":2,"SHARED":3}},"ERRCODE":{"type":"constant","value":{"SUCCESS":"Success!","UNKNOWN":"Unknown error","OFFLINE":"Database not reachable","MALFORMEDPARAMETERS":"Parameters are malformed"}},"constructor":{"value":[{"scope":"number"}]},"keys":{"type":"method","value":[],"ret":["array","string"],"err":{"errcode":"string","message":"string"}},"get":{"type":"method","value":["string"],"ret":"buffer","err":{"errcode":"string","message":"string"}},"set":{"type":"method","value":["string","buffer"],"ret":"buffer","err":{"errcode":"string","message":"string"}},"remove":{"type":"method","value":["string"],"ret":"buffer","err":{"errcode":"string","message":"string"}},"clear":{"type":"method","value":[],"ret":[],"err":{"errcode":"string","message":"string"}}}},{"name":"transport","api":{"ERRCODE":{"type":"constant","value":{"SUCCESS":"Success!","UNKNOWN":"Unknown error","OFFLINE":"Not reachable","MALFORMEDPARAMETERS":"Parameters are malformed"}},"setup":{"type":"method","value":["string","proxy"],"ret":[],"err":{"errcode":"string","message":"string"}},"send":{"type":"method","value":["string","buffer"],"ret":[],"err":{"errcode":"string","message":"string"}},"close":{"type":"method","value":[],"ret":[],"err":{"errcode":"string","message":"string"}},"onData":{"type":"event","value":{"tag":"string","data":"buffer"}},"onClose":{"type":"event","value":[]}}}];

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
},{"../../src/util":35,"_process":3}],6:[function(require,module,exports){
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

},{"../../src/util":35}],7:[function(require,module,exports){
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

},{"../../src/util":35,"./core.rtcpeerconnection":10}],10:[function(require,module,exports){
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

},{"../../src/util":35}],12:[function(require,module,exports){
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

},{"../../src/consumer":20,"../../src/proxy/eventInterface":32,"../../src/util":35}],13:[function(require,module,exports){
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

},{"../../src/util":35,"es6-promise":2}],14:[function(require,module,exports){
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
/*jshint node:true*/
/*global */
var PromiseCompat = require('es6-promise').Promise;
var XhrClass = null;

var XhrProvider = function(cap, dispatchEvent) {
  "use strict";
  if (typeof window !== "undefined" &&
      typeof window.XMLHttpRequest !== "undefined" &&
      XhrClass === null) {
    XhrClass = window.XMLHttpRequest;
  }
  if (XhrClass === null) {
    console.error("Platform does not support XMLHttpRequest");
  }

  this._dispatchEvent = dispatchEvent;
  this._xhr = new XhrClass();

  setTimeout(cap.provider.onClose.bind(
    cap.provider,
    this,
    this.abort.bind(this)
  ), 0);

  this._events = [
    "loadstart",
    "progress",
    "abort",
    "error",
    "load",
    "timeout",
    "loadend",
    "readystatechange"
  ];
  this._setupListeners();

};

XhrProvider.prototype.open = function(method, url, async, user, password) {
  "use strict";
  if (typeof async !== "undefined" && async !== true) {
    return PromiseCompat.reject({
      errcode: "InvalidAccessError",
      message: "async should always be set to true"
    });
  }

  // Force async to be true. undefined can lead to async=false in Chrome packaged apps
  this._xhr.open(method, url, true, user, password);
  return PromiseCompat.resolve();
};

XhrProvider.prototype.send = function(data) {
  "use strict";
  if (!(data instanceof Object)) {
    this._xhr.send();
  } else if (data.hasOwnProperty("string")) {
    this._xhr.send(data.string);
  } else if (data.hasOwnProperty("buffer")) {
    this._xhr.send(data.buffer);
  } else {
    this._xhr.send();
  }
  return PromiseCompat.resolve();
};

XhrProvider.prototype.abort = function() {
  "use strict";
  this._xhr.abort();
  return PromiseCompat.resolve();
};

XhrProvider.prototype.getResponseHeader = function(header) {
  "use strict";
  return PromiseCompat.resolve(this._xhr.getResponseHeader(header));
};

XhrProvider.prototype.getAllResponseHeaders = function() {
  "use strict";
  return PromiseCompat.resolve(this._xhr.getAllResponseHeaders());
};

XhrProvider.prototype.setRequestHeader = function(header, value) {
  "use strict";
  this._xhr.setRequestHeader(header, value);
  return PromiseCompat.resolve();
};

XhrProvider.prototype.overrideMimeType = function(mime) {
  "use strict";
  this._xhr.overrideMimeType(mime);
  return PromiseCompat.resolve();
};

XhrProvider.prototype.getReadyState = function() {
  "use strict";
  return PromiseCompat.resolve(this._xhr.readyState);
};

XhrProvider.prototype.getResponse = function() {
  "use strict";
  if (this._xhr.response === null) {
    return PromiseCompat.resolve(null);
  } else if (this._xhr.responseType === "text" || this._xhr.responseType === "") {
    return PromiseCompat.resolve({ string: this._xhr.response });
  } else if (this._xhr.responseType === "arraybuffer") {
    return PromiseCompat.resolve({ buffer: this._xhr.response });
  } else if (this._xhr.responseType === "json") {
    return PromiseCompat.resolve({ object: this._xhr.response });
  }

  return PromiseCompat.reject("core.xhr cannot determine type of response");
};

XhrProvider.prototype.getResponseText = function() {
  "use strict";
  return PromiseCompat.resolve(this._xhr.responseText);
};

XhrProvider.prototype.getResponseURL = function() {
  "use strict";
  return PromiseCompat.resolve(this._xhr.responseURL);
};

XhrProvider.prototype.getResponseType = function() {
  "use strict";
  return PromiseCompat.resolve(this._xhr.responseType);
};

XhrProvider.prototype.setResponseType = function(type) {
  "use strict";
  this._xhr.responseType = type;
  return PromiseCompat.resolve();
};

XhrProvider.prototype.getStatus = function() {
  "use strict";
  return PromiseCompat.resolve(this._xhr.status);
};

XhrProvider.prototype.getStatusText = function() {
  "use strict";
  return PromiseCompat.resolve(this._xhr.statusText);
};

XhrProvider.prototype.getTimeout = function() {
  "use strict";
  return PromiseCompat.resolve(this._xhr.timeout);
};

XhrProvider.prototype.setTimeout = function(timeout) {
  "use strict";
  this._xhr.timeout = timeout;
  return PromiseCompat.resolve();
};

XhrProvider.prototype.getWithCredentials = function() {
  "use strict";
  return PromiseCompat.resolve(this._xhr.withCredentials);
};

XhrProvider.prototype.setWithCredentials = function(wc) {
  "use strict";
  this._xhr.withCredentials = wc;
  return PromiseCompat.resolve();
};

XhrProvider.prototype._setupListeners = function() {
  "use strict";
  // Download events
  this._events.forEach(function (eventName) {
    this._xhr.addEventListener(eventName, function(eventName, event) {
      this._dispatchEvent("on" + eventName, event);
    }.bind(this, eventName), false);
  }.bind(this));

  // Upload events
  this._events.forEach(function (eventName) {
    this._xhr.upload.addEventListener(eventName, function(eventName, event) {
      this._dispatchEvent("onupload" + eventName, event);
    }.bind(this, eventName), false);
  }.bind(this));
};

exports.name = "core.xhr";
exports.provider = XhrProvider;
exports.style = "providePromises";
exports.flags = { provider: true };
exports.setImpl = function(impl) {
  "use strict";
  XhrClass = impl;
};

},{"es6-promise":2}],16:[function(require,module,exports){
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

},{"es6-promise":2}],17:[function(require,module,exports){
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
},{"es6-promise":2}],18:[function(require,module,exports){
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

},{"es6-promise":2}],19:[function(require,module,exports){
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

},{"../dist/bundle.compiled":1}],20:[function(require,module,exports){
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

},{"./util":35}],21:[function(require,module,exports){
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

},{"./util":35}],22:[function(require,module,exports){
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
},{"./api":18,"./bundle":19,"./debug":21,"./hub":23,"./manager":26,"./policy":29,"./proxybinder":33,"./resource":34,"./util":35,"es6-promise":2}],23:[function(require,module,exports){
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

},{"./util":35}],24:[function(require,module,exports){
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

},{"./util":35}],25:[function(require,module,exports){
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


},{"../link":24}],26:[function(require,module,exports){
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

},{"./moduleinternal":28,"./util":35}],27:[function(require,module,exports){
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

},{"./provider":30,"./util":35}],28:[function(require,module,exports){
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

},{"./provider":30,"./proxy/apiInterface":31,"./proxybinder":33,"./util":35,"es6-promise":2}],29:[function(require,module,exports){
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

},{"./module":27,"./util":35,"es6-promise":2}],30:[function(require,module,exports){
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

},{"./consumer":20,"./util":35}],31:[function(require,module,exports){
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

},{"../consumer":20,"../util":35,"es6-promise":2}],32:[function(require,module,exports){
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

},{"../util":35}],33:[function(require,module,exports){
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

},{"./consumer":20,"./provider":30,"./proxy/apiInterface":31,"./proxy/eventInterface":32,"es6-promise":2}],34:[function(require,module,exports){
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

},{"./util":35,"es6-promise":2}],35:[function(require,module,exports){
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

},{}],36:[function(require,module,exports){
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
  require('../../providers/core/core.websocket'),
  require('../../providers/core/core.xhr')
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
},{"../../providers/core/core.console":5,"../../providers/core/core.echo":6,"../../providers/core/core.oauth":7,"../../providers/core/core.peerconnection":8,"../../providers/core/core.rtcdatachannel":9,"../../providers/core/core.rtcpeerconnection":10,"../../providers/core/core.storage":11,"../../providers/core/core.unprivileged":12,"../../providers/core/core.view":13,"../../providers/core/core.websocket":14,"../../providers/core/core.xhr":15,"../../providers/oauth/oauth.localpageauth":16,"../../providers/oauth/oauth.remotepageauth":17,"../entry":22,"../link/worker":25}]},{},[36])
//

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1aWxkL25vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC9kaXN0L2J1bmRsZS5jb21waWxlZC5qcyIsImJ1aWxkL25vZGVfbW9kdWxlcy9lczYtcHJvbWlzZS9kaXN0L2VzNi1wcm9taXNlLmpzIiwiYnVpbGQvbm9kZV9tb2R1bGVzL2dydW50LWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsImJ1aWxkL25vZGVfbW9kdWxlcy93ZWJydGMtYWRhcHRlci9hZGFwdGVyLmpzIiwiYnVpbGQvcHJvdmlkZXJzL2NvcmUvY29yZS5jb25zb2xlLmpzIiwiYnVpbGQvcHJvdmlkZXJzL2NvcmUvY29yZS5lY2hvLmpzIiwiYnVpbGQvcHJvdmlkZXJzL2NvcmUvY29yZS5vYXV0aC5qcyIsImJ1aWxkL3Byb3ZpZGVycy9jb3JlL2NvcmUucGVlcmNvbm5lY3Rpb24uanMiLCJidWlsZC9wcm92aWRlcnMvY29yZS9jb3JlLnJ0Y2RhdGFjaGFubmVsLmpzIiwiYnVpbGQvcHJvdmlkZXJzL2NvcmUvY29yZS5ydGNwZWVyY29ubmVjdGlvbi5qcyIsImJ1aWxkL3Byb3ZpZGVycy9jb3JlL2NvcmUuc3RvcmFnZS5qcyIsImJ1aWxkL3Byb3ZpZGVycy9jb3JlL2NvcmUudW5wcml2aWxlZ2VkLmpzIiwiYnVpbGQvcHJvdmlkZXJzL2NvcmUvY29yZS52aWV3LmpzIiwiYnVpbGQvcHJvdmlkZXJzL2NvcmUvY29yZS53ZWJzb2NrZXQuanMiLCJidWlsZC9wcm92aWRlcnMvY29yZS9jb3JlLnhoci5qcyIsImJ1aWxkL3Byb3ZpZGVycy9vYXV0aC9vYXV0aC5sb2NhbHBhZ2VhdXRoLmpzIiwiYnVpbGQvcHJvdmlkZXJzL29hdXRoL29hdXRoLnJlbW90ZXBhZ2VhdXRoLmpzIiwiYnVpbGQvc3JjL2FwaS5qcyIsImJ1aWxkL3NyYy9idW5kbGUuanMiLCJidWlsZC9zcmMvY29uc3VtZXIuanMiLCJidWlsZC9zcmMvZGVidWcuanMiLCJidWlsZC9zcmMvZW50cnkuanMiLCJidWlsZC9zcmMvaHViLmpzIiwiYnVpbGQvc3JjL2xpbmsuanMiLCJidWlsZC9zcmMvbGluay93b3JrZXIuanMiLCJidWlsZC9zcmMvbWFuYWdlci5qcyIsImJ1aWxkL3NyYy9tb2R1bGUuanMiLCJidWlsZC9zcmMvbW9kdWxlaW50ZXJuYWwuanMiLCJidWlsZC9zcmMvcG9saWN5LmpzIiwiYnVpbGQvc3JjL3Byb3ZpZGVyLmpzIiwiYnVpbGQvc3JjL3Byb3h5L2FwaUludGVyZmFjZS5qcyIsImJ1aWxkL3NyYy9wcm94eS9ldmVudEludGVyZmFjZS5qcyIsImJ1aWxkL3NyYy9wcm94eWJpbmRlci5qcyIsImJ1aWxkL3NyYy9yZXNvdXJjZS5qcyIsImJ1aWxkL3NyYy91dGlsLmpzIiwiYnVpbGQvc3JjL3V0aWwvd29ya2VyRW50cnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUNBQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDajhCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaE9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDalBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25OQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM1dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2phQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNVBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOVZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDclVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZnJlZWRvbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHMgPSBbe1wibmFtZVwiOlwiY29uc29sZVwiLFwiYXBpXCI6e1wibG9nXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwic3RyaW5nXCJdfSxcImRlYnVnXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwic3RyaW5nXCJdfSxcImluZm9cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJzdHJpbmdcIl19LFwid2FyblwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcInN0cmluZ1wiXX0sXCJlcnJvclwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcInN0cmluZ1wiXX19fSx7XCJuYW1lXCI6XCJjb3JlLmNvbnNvbGVcIixcImFwaVwiOntcImxvZ1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcInN0cmluZ1wiXX0sXCJkZWJ1Z1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcInN0cmluZ1wiXX0sXCJpbmZvXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwic3RyaW5nXCJdfSxcIndhcm5cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJzdHJpbmdcIl19LFwiZXJyb3JcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJzdHJpbmdcIl19fX0se1wibmFtZVwiOlwiY29yZS5lY2hvXCIsXCJhcGlcIjp7XCJzZXR1cFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl19LFwic2VuZFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl19LFwibWVzc2FnZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOlwic3RyaW5nXCJ9fX0se1wibmFtZVwiOlwiY29yZVwiLFwiYXBpXCI6e1wiY3JlYXRlQ2hhbm5lbFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOntcImNoYW5uZWxcIjpcInByb3h5XCIsXCJpZGVudGlmaWVyXCI6XCJzdHJpbmdcIn19LFwiYmluZENoYW5uZWxcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCJdLFwicmV0XCI6XCJwcm94eVwifSxcImdldElkXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6W1wiYXJyYXlcIixcInN0cmluZ1wiXX0sXCJnZXRMb2dnZXJcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCJdLFwicmV0XCI6XCJwcm94eVwifX19LHtcIm5hbWVcIjpcImNvcmUub2F1dGhcIixcImFwaVwiOntcImluaXRpYXRlT0F1dGhcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1tcImFycmF5XCIsXCJzdHJpbmdcIl1dLFwicmV0XCI6e1wicmVkaXJlY3RcIjpcInN0cmluZ1wiLFwic3RhdGVcIjpcInN0cmluZ1wifSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcImxhdW5jaEF1dGhGbG93XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLHtcInJlZGlyZWN0XCI6XCJzdHJpbmdcIixcInN0YXRlXCI6XCJzdHJpbmdcIn1dLFwicmV0XCI6XCJzdHJpbmdcIixcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fX19LHtcIm5hbWVcIjpcImNvcmUucGVlcmNvbm5lY3Rpb25cIixcImFwaVwiOntcInNldHVwXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwic3RyaW5nXCIsW1wiYXJyYXlcIixcInN0cmluZ1wiXSxcImJvb2xlYW5cIl19LFwic2VuZFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbe1wiY2hhbm5lbExhYmVsXCI6XCJzdHJpbmdcIixcInRleHRcIjpcInN0cmluZ1wiLFwiYmluYXJ5XCI6XCJibG9iXCIsXCJidWZmZXJcIjpcImJ1ZmZlclwifV19LFwib25SZWNlaXZlZFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImNoYW5uZWxMYWJlbFwiOlwic3RyaW5nXCIsXCJ0ZXh0XCI6XCJzdHJpbmdcIixcImJpbmFyeVwiOlwiYmxvYlwiLFwiYnVmZmVyXCI6XCJidWZmZXJcIn19LFwib3BlbkRhdGFDaGFubmVsXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXX0sXCJjbG9zZURhdGFDaGFubmVsXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXX0sXCJvbk9wZW5EYXRhQ2hhbm5lbFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImNoYW5uZWxJZFwiOlwic3RyaW5nXCJ9fSxcIm9uQ2xvc2VEYXRhQ2hhbm5lbFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImNoYW5uZWxJZFwiOlwic3RyaW5nXCJ9fSxcImdldEJ1ZmZlcmVkQW1vdW50XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXSxcInJldFwiOlwibnVtYmVyXCJ9LFwiZ2V0SW5mb1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwic3RyaW5nXCJ9LFwiY3JlYXRlT2ZmZXJcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W3tcIm9mZmVyVG9SZWNlaXZlVmlkZW9cIjpcIm51bWJlclwiLFwib2ZmZXJUb1JlY2VpdmVBdWRpb1wiOlwibnVtYmVyXCIsXCJ2b2ljZUFjdGl2aXR5RGV0ZWN0aW9uXCI6XCJib29sZWFuXCIsXCJpY2VSZXN0YXJ0XCI6XCJib29sZWFuXCJ9XSxcInJldFwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwic2RwXCI6XCJzdHJpbmdcIn19LFwiY2xvc2VcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W119LFwib25DbG9zZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOnt9fX19LHtcIm5hbWVcIjpcImNvcmUucnRjZGF0YWNoYW5uZWxcIixcImFwaVwiOntcImNvbnN0cnVjdG9yXCI6e1widmFsdWVcIjpbXCJzdHJpbmdcIl19LFwiZ2V0TGFiZWxcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcInN0cmluZ1wifSxcImdldE9yZGVyZWRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcImJvb2xlYW5cIn0sXCJnZXRNYXhQYWNrZXRMaWZlVGltZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwibnVtYmVyXCJ9LFwiZ2V0TWF4UmV0cmFuc21pdHNcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcIm51bWJlclwifSxcImdldFByb3RvY29sXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJzdHJpbmdcIn0sXCJnZXROZWdvdGlhdGVkXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJib29sZWFuXCJ9LFwiZ2V0SWRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcIm51bWJlclwifSxcImdldFJlYWR5U3RhdGVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcInN0cmluZ1wifSxcImdldEJ1ZmZlcmVkQW1vdW50XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJudW1iZXJcIn0sXCJvbm9wZW5cIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjpbXX0sXCJvbmVycm9yXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6W119LFwib25jbG9zZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOltdfSxcImNsb3NlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdfSxcIm9ubWVzc2FnZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcInRleHRcIjpcInN0cmluZ1wiLFwiYnVmZmVyXCI6XCJidWZmZXJcIn19LFwiZ2V0QmluYXJ5VHlwZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwic3RyaW5nXCJ9LFwic2V0QmluYXJ5VHlwZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl19LFwic2VuZFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl19LFwic2VuZEJ1ZmZlclwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJidWZmZXJcIl19fX0se1wibmFtZVwiOlwiY29yZS5ydGNwZWVyY29ubmVjdGlvblwiLFwiYXBpXCI6e1wiY29uc3RydWN0b3JcIjp7XCJ2YWx1ZVwiOlt7XCJpY2VTZXJ2ZXJzXCI6W1wiYXJyYXlcIix7XCJ1cmxzXCI6W1wiYXJyYXlcIixcInN0cmluZ1wiXSxcInVzZXJuYW1lXCI6XCJzdHJpbmdcIixcImNyZWRlbnRpYWxcIjpcInN0cmluZ1wifV0sXCJpY2VUcmFuc3BvcnRzXCI6XCJzdHJpbmdcIixcInBlZXJJZGVudGl0eVwiOlwic3RyaW5nXCJ9XX0sXCJjcmVhdGVPZmZlclwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbe1wib2ZmZXJUb1JlY2VpdmVBdWRpb1wiOlwibnVtYmVyXCIsXCJvZmZlclRvUmVjZWl2ZVZpZGVvXCI6XCJudW1iZXJcIixcImljZVJlc3RhcnRcIjpcImJvb2xlYW5cIixcInZvaWNlQWN0aXZpdHlEZXRlY3Rpb25cIjpcImJvb2xlYW5cIn1dLFwicmV0XCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJzZHBcIjpcInN0cmluZ1wifX0sXCJjcmVhdGVBbnN3ZXJcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjp7XCJ0eXBlXCI6XCJzdHJpbmdcIixcInNkcFwiOlwic3RyaW5nXCJ9fSxcInNldExvY2FsRGVzY3JpcHRpb25cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W3tcInR5cGVcIjpcInN0cmluZ1wiLFwic2RwXCI6XCJzdHJpbmdcIn1dfSxcImdldExvY2FsRGVzY3JpcHRpb25cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjp7XCJ0eXBlXCI6XCJzdHJpbmdcIixcInNkcFwiOlwic3RyaW5nXCJ9fSxcInNldFJlbW90ZURlc2NyaXB0aW9uXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOlt7XCJ0eXBlXCI6XCJzdHJpbmdcIixcInNkcFwiOlwic3RyaW5nXCJ9XSxcInJldFwiOnt9fSxcImdldFJlbW90ZURlc2NyaXB0aW9uXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJzZHBcIjpcInN0cmluZ1wifX0sXCJnZXRTaWduYWxpbmdTdGF0ZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwic3RyaW5nXCJ9LFwidXBkYXRlSWNlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOlt7XCJpY2VTZXJ2ZXJzXCI6W1wiYXJyYXlcIix7XCJ1cmxzXCI6W1wiYXJyYXlcIixcInN0cmluZ1wiXSxcInVzZXJuYW1lXCI6XCJzdHJpbmdcIixcImNyZWRlbnRpYWxcIjpcInN0cmluZ1wifV0sXCJpY2VUcmFuc3BvcnRzXCI6XCJzdHJpbmdcIixcInBlZXJJZGVudGl0eVwiOlwic3RyaW5nXCJ9XSxcInJldFwiOnt9fSxcImFkZEljZUNhbmRpZGF0ZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbe1wiY2FuZGlkYXRlXCI6XCJzdHJpbmdcIixcInNkcE1pZFwiOlwic3RyaW5nXCIsXCJzZHBNTGluZUluZGV4XCI6XCJudW1iZXJcIn1dLFwicmV0XCI6e319LFwiZ2V0SWNlR2F0aGVyaW5nU3RhdGVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcInN0cmluZ1wifSxcImdldEljZUNvbm5lY3Rpb25TdGF0ZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwic3RyaW5nXCJ9LFwiZ2V0Q29uZmlndXJhdGlvblwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOntcImljZVNlcnZlcnNcIjpbXCJhcnJheVwiLHtcInVybHNcIjpbXCJhcnJheVwiLFwic3RyaW5nXCJdLFwidXNlcm5hbWVcIjpcInN0cmluZ1wiLFwiY3JlZGVudGlhbFwiOlwic3RyaW5nXCJ9XSxcImljZVRyYW5zcG9ydHNcIjpcInN0cmluZ1wiLFwicGVlcklkZW50aXR5XCI6XCJzdHJpbmdcIn19LFwiZ2V0TG9jYWxTdHJlYW1zXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6W1wiYXJyYXlcIixcInN0cmluZ1wiXX0sXCJnZXRSZW1vdGVTdHJlYW1zXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6W1wiYXJyYXlcIixcInN0cmluZ1wiXX0sXCJnZXRTdHJlYW1CeUlkXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXSxcInJldFwiOlwic3RyaW5nXCJ9LFwiYWRkU3RyZWFtXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXSxcInJldFwiOnt9fSxcInJlbW92ZVN0cmVhbVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjp7fX0sXCJjbG9zZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOnt9fSxcImNyZWF0ZURhdGFDaGFubmVsXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLHtcIm9yZGVyZWRcIjpcImJvb2xlYW5cIixcIm1heFBhY2tldExpZmVUaW1lXCI6XCJudW1iZXJcIixcIm1heFJldHJhbnNtaXRzXCI6XCJudW1iZXJcIixcInByb3RvY29sXCI6XCJzdHJpbmdcIixcIm5lZ290aWF0ZWRcIjpcImJvb2xlYW5cIixcImlkXCI6XCJudW1iZXJcIn1dLFwicmV0XCI6XCJzdHJpbmdcIn0sXCJvbmRhdGFjaGFubmVsXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wiY2hhbm5lbFwiOlwic3RyaW5nXCJ9fSxcImdldFN0YXRzXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXSxcInJldFwiOlwib2JqZWN0XCJ9LFwib25uZWdvdGlhdGlvbm5lZWRlZFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOltdfSxcIm9uaWNlY2FuZGlkYXRlXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wiY2FuZGlkYXRlXCI6e1wiY2FuZGlkYXRlXCI6XCJzdHJpbmdcIixcInNkcE1pZFwiOlwic3RyaW5nXCIsXCJzZHBNTGluZUluZGV4XCI6XCJudW1iZXJcIn19fSxcIm9uc2lnbmFsaW5nc3RhdGVjaGFuZ2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjpbXX0sXCJvbmFkZHN0cmVhbVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcInN0cmVhbVwiOlwibnVtYmVyXCJ9fSxcIm9ucmVtb3Zlc3RyZWFtXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wic3RyZWFtXCI6XCJudW1iZXJcIn19LFwib25pY2Vjb25uZWN0aW9uc3RhdGVjaGFuZ2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjpbXX19fSx7XCJuYW1lXCI6XCJjb3JlLnN0b3JhZ2VcIixcImFwaVwiOntcImtleXNcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpbXCJhcnJheVwiLFwic3RyaW5nXCJdfSxcImdldFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcInN0cmluZ1wifSxcInNldFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcInN0cmluZ1wiXSxcInJldFwiOlwic3RyaW5nXCJ9LFwicmVtb3ZlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXSxcInJldFwiOlwic3RyaW5nXCJ9LFwiY2xlYXJcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W119fX0se1wibmFtZVwiOlwiY29yZS50Y3Bzb2NrZXRcIixcImFwaVwiOntcImNvbnN0cnVjdG9yXCI6e1widmFsdWVcIjpbXCJudW1iZXJcIl19LFwiZ2V0SW5mb1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOntcImNvbm5lY3RlZFwiOlwiYm9vbGVhblwiLFwibG9jYWxBZGRyZXNzXCI6XCJzdHJpbmdcIixcImxvY2FsUG9ydFwiOlwibnVtYmVyXCIsXCJwZWVyQWRkcmVzc1wiOlwic3RyaW5nXCIsXCJwZWVyUG9ydFwiOlwibnVtYmVyXCJ9fSxcIkVSUkNPREVcIjp7XCJ0eXBlXCI6XCJjb25zdGFudFwiLFwidmFsdWVcIjp7XCJTVUNDRVNTXCI6XCJTdWNjZXNzIVwiLFwiVU5LTk9XTlwiOlwiVW5rbm93biBlcnJvclwiLFwiQUxSRUFEWV9DT05ORUNURURcIjpcIlNvY2tldCBhbHJlYWR5IGNvbm5lY3RlZFwiLFwiSU5WQUxJRF9BUkdVTUVOVFwiOlwiSW52YWxpZCBhcmd1bWVudFwiLFwiVElNRURfT1VUXCI6XCJUaW1lZCBvdXRcIixcIk5PVF9DT05ORUNURURcIjpcIlNvY2tldCBub3QgY29ubmVjdGVkXCIsXCJORVRXT1JLX0NIQU5HRURcIjpcIk5ldHdvcmsgY2hhbmdlZFwiLFwiQ09OTkVDVElPTl9DTE9TRURcIjpcIkNvbm5lY3Rpb24gY2xvc2VkIGdyYWNlZnVsbHlcIixcIkNPTk5FQ1RJT05fUkVTRVRcIjpcIkNvbm5lY3Rpb24gcmVzZXRcIixcIkNPTk5FQ1RJT05fUkVGVVNFRFwiOlwiQ29ubmVjdGlvbiByZWZ1c2VkXCIsXCJDT05ORUNUSU9OX0ZBSUxFRFwiOlwiQ29ubmVjdGlvbiBmYWlsZWRcIn19LFwiY2xvc2VcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJvbkRpc2Nvbm5lY3RcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJjb25uZWN0XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwibnVtYmVyXCJdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwic2VjdXJlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwicHJlcGFyZVNlY3VyZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcIndyaXRlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcImJ1ZmZlclwiXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcIm9uRGF0YVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImRhdGFcIjpcImJ1ZmZlclwifX0sXCJsaXN0ZW5cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJudW1iZXJcIl0sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJvbkNvbm5lY3Rpb25cIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJzb2NrZXRcIjpcIm51bWJlclwiLFwiaG9zdFwiOlwic3RyaW5nXCIsXCJwb3J0XCI6XCJudW1iZXJcIn19fX0se1wibmFtZVwiOlwiY29yZS51ZHBzb2NrZXRcIixcImFwaVwiOntcIkVSUkNPREVcIjp7XCJ0eXBlXCI6XCJjb25zdGFudFwiLFwidmFsdWVcIjp7XCJTVUNDRVNTXCI6XCJTdWNjZXNzIVwiLFwiVU5LTk9XTlwiOlwiVW5rbm93biBlcnJvclwiLFwiQUxSRUFEWV9CT1VORFwiOlwiU29ja2V0IGFscmVhZHkgYm91bmRcIixcIklOVkFMSURfQVJHVU1FTlRcIjpcIkludmFsaWQgYXJndW1lbnRcIixcIk5FVFdPUktfQ0hBTkdFRFwiOlwiTmV0d29yayBjaGFuZ2VkXCIsXCJTTkVEX0ZBSUxFRFwiOlwiU2VuZCBmYWlsZWRcIn19LFwiYmluZFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcIm51bWJlclwiXSxcInJldFwiOltdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwiZ2V0SW5mb1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOntcImxvY2FsQWRkcmVzc1wiOlwic3RyaW5nXCIsXCJsb2NhbFBvcnRcIjpcIm51bWJlclwifX0sXCJzZW5kVG9cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wiYnVmZmVyXCIsXCJzdHJpbmdcIixcIm51bWJlclwiXSxcInJldFwiOlwibnVtYmVyXCIsXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJkZXN0cm95XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdfSxcIm9uRGF0YVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcInJlc3VsdENvZGVcIjpcIm51bWJlclwiLFwiYWRkcmVzc1wiOlwic3RyaW5nXCIsXCJwb3J0XCI6XCJudW1iZXJcIixcImRhdGFcIjpcImJ1ZmZlclwifX19fSx7XCJuYW1lXCI6XCJjb3JlLnZpZXdcIixcImFwaVwiOntcInNob3dcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCJdfSxcImlzU2VjdXJlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJib29sZWFuXCJ9LFwiY2xvc2VcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W119LFwicG9zdE1lc3NhZ2VcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wib2JqZWN0XCJdfSxcIm1lc3NhZ2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjpcIm9iamVjdFwifSxcIm9uQ2xvc2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjpbXX19fSx7XCJuYW1lXCI6XCJjb3JlLndlYnNvY2tldFwiLFwiYXBpXCI6e1wiY29uc3RydWN0b3JcIjp7XCJ2YWx1ZVwiOltcInN0cmluZ1wiLFtcImFycmF5XCIsXCJzdHJpbmdcIl1dfSxcInNlbmRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W3tcInRleHRcIjpcInN0cmluZ1wiLFwiYmluYXJ5XCI6XCJibG9iXCIsXCJidWZmZXJcIjpcImJ1ZmZlclwifV0sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJnZXRSZWFkeVN0YXRlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJudW1iZXJcIn0sXCJnZXRCdWZmZXJlZEFtb3VudFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcIm51bWJlclwifSxcImNsb3NlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcIm51bWJlclwiLFwic3RyaW5nXCJdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwib25NZXNzYWdlXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1widGV4dFwiOlwic3RyaW5nXCIsXCJiaW5hcnlcIjpcImJsb2JcIixcImJ1ZmZlclwiOlwiYnVmZmVyXCJ9fSxcIm9uT3BlblwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOltdfSxcIm9uRXJyb3JcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJvbkNsb3NlXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wiY29kZVwiOlwibnVtYmVyXCIsXCJyZWFzb25cIjpcInN0cmluZ1wiLFwid2FzQ2xlYW5cIjpcImJvb2xlYW5cIn19fX0se1wibmFtZVwiOlwiY29yZS54aHJcIixcImFwaVwiOntcIm9wZW5cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJzdHJpbmdcIixcImJvb2xlYW5cIixcInN0cmluZ1wiLFwic3RyaW5nXCJdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwic2VuZFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbe1wic3RyaW5nXCI6XCJzdHJpbmdcIixcImJ1ZmZlclwiOlwiYnVmZmVyXCJ9XX0sXCJhYm9ydFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXX0sXCJnZXRSZXNwb25zZUhlYWRlclwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcInN0cmluZ1wifSxcImdldEFsbFJlc3BvbnNlSGVhZGVyc1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwic3RyaW5nXCJ9LFwic2V0UmVxdWVzdEhlYWRlclwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcInN0cmluZ1wiXX0sXCJvdmVycmlkZU1pbWVUeXBlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXX0sXCJnZXRSZWFkeVN0YXRlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJudW1iZXJcIn0sXCJnZXRSZXNwb25zZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOntcInN0cmluZ1wiOlwic3RyaW5nXCIsXCJidWZmZXJcIjpcImJ1ZmZlclwiLFwib2JqZWN0XCI6XCJvYmplY3RcIn19LFwiZ2V0UmVzcG9uc2VUZXh0XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJzdHJpbmdcIn0sXCJnZXRSZXNwb25zZVVSTFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwic3RyaW5nXCJ9LFwiZ2V0UmVzcG9uc2VUeXBlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJzdHJpbmdcIn0sXCJzZXRSZXNwb25zZVR5cGVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCJdfSxcImdldFN0YXR1c1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwibnVtYmVyXCJ9LFwiZ2V0U3RhdHVzVGV4dFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwic3RyaW5nXCJ9LFwiZ2V0VGltZW91dFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwibnVtYmVyXCJ9LFwic2V0VGltZW91dFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJudW1iZXJcIl19LFwiZ2V0V2l0aENyZWRlbnRpYWxzXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJib29sZWFuXCJ9LFwic2V0V2l0aENyZWRlbnRpYWxzXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcImJvb2xlYW5cIl19LFwib25sb2Fkc3RhcnRcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJsZW5ndGhDb21wdXRhYmxlXCI6XCJib29sZWFuXCIsXCJsb2FkZWRcIjpcIm51bWJlclwiLFwidG90YWxcIjpcIm51bWJlclwifX0sXCJvbnByb2dyZXNzXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wibGVuZ3RoQ29tcHV0YWJsZVwiOlwiYm9vbGVhblwiLFwibG9hZGVkXCI6XCJudW1iZXJcIixcInRvdGFsXCI6XCJudW1iZXJcIn19LFwib25hYm9ydFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImxlbmd0aENvbXB1dGFibGVcIjpcImJvb2xlYW5cIixcImxvYWRlZFwiOlwibnVtYmVyXCIsXCJ0b3RhbFwiOlwibnVtYmVyXCJ9fSxcIm9uZXJyb3JcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJsZW5ndGhDb21wdXRhYmxlXCI6XCJib29sZWFuXCIsXCJsb2FkZWRcIjpcIm51bWJlclwiLFwidG90YWxcIjpcIm51bWJlclwifX0sXCJvbmxvYWRcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJsZW5ndGhDb21wdXRhYmxlXCI6XCJib29sZWFuXCIsXCJsb2FkZWRcIjpcIm51bWJlclwiLFwidG90YWxcIjpcIm51bWJlclwifX0sXCJvbnRpbWVvdXRcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJsZW5ndGhDb21wdXRhYmxlXCI6XCJib29sZWFuXCIsXCJsb2FkZWRcIjpcIm51bWJlclwiLFwidG90YWxcIjpcIm51bWJlclwifX0sXCJvbmxvYWRlbmRcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJsZW5ndGhDb21wdXRhYmxlXCI6XCJib29sZWFuXCIsXCJsb2FkZWRcIjpcIm51bWJlclwiLFwidG90YWxcIjpcIm51bWJlclwifX0sXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7fX0sXCJvbnVwbG9hZGxvYWRzdGFydFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImxlbmd0aENvbXB1dGFibGVcIjpcImJvb2xlYW5cIixcImxvYWRlZFwiOlwibnVtYmVyXCIsXCJ0b3RhbFwiOlwibnVtYmVyXCJ9fSxcIm9udXBsb2FkcHJvZ3Jlc3NcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJsZW5ndGhDb21wdXRhYmxlXCI6XCJib29sZWFuXCIsXCJsb2FkZWRcIjpcIm51bWJlclwiLFwidG90YWxcIjpcIm51bWJlclwifX0sXCJvbnVwbG9hZGFib3J0XCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wibGVuZ3RoQ29tcHV0YWJsZVwiOlwiYm9vbGVhblwiLFwibG9hZGVkXCI6XCJudW1iZXJcIixcInRvdGFsXCI6XCJudW1iZXJcIn19LFwib251cGxvYWRlcnJvclwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImxlbmd0aENvbXB1dGFibGVcIjpcImJvb2xlYW5cIixcImxvYWRlZFwiOlwibnVtYmVyXCIsXCJ0b3RhbFwiOlwibnVtYmVyXCJ9fSxcIm9udXBsb2FkbG9hZFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImxlbmd0aENvbXB1dGFibGVcIjpcImJvb2xlYW5cIixcImxvYWRlZFwiOlwibnVtYmVyXCIsXCJ0b3RhbFwiOlwibnVtYmVyXCJ9fSxcIm9udXBsb2FkdGltZW91dFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImxlbmd0aENvbXB1dGFibGVcIjpcImJvb2xlYW5cIixcImxvYWRlZFwiOlwibnVtYmVyXCIsXCJ0b3RhbFwiOlwibnVtYmVyXCJ9fSxcIm9udXBsb2FkbG9hZGVuZFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImxlbmd0aENvbXB1dGFibGVcIjpcImJvb2xlYW5cIixcImxvYWRlZFwiOlwibnVtYmVyXCIsXCJ0b3RhbFwiOlwibnVtYmVyXCJ9fSxcIm9udXBsb2FkcmVhZHlzdGF0ZWNoYW5nZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOnt9fX19LHtcIm5hbWVcIjpcInNvY2lhbFwiLFwiYXBpXCI6e1wiRVJSQ09ERVwiOntcInR5cGVcIjpcImNvbnN0YW50XCIsXCJ2YWx1ZVwiOntcIlNVQ0NFU1NcIjpcIlN1Y2Nlc3MhXCIsXCJVTktOT1dOXCI6XCJVbmtub3duIGVycm9yXCIsXCJPRkZMSU5FXCI6XCJVc2VyIGlzIGN1cnJlbnRseSBvZmZsaW5lXCIsXCJNQUxGT1JNRURQQVJBTUVURVJTXCI6XCJQYXJhbWV0ZXJzIGFyZSBtYWxmb3JtZWRcIixcIkxPR0lOX0JBRENSRURFTlRJQUxTXCI6XCJFcnJvciBhdXRoZW50aWNhdGluZyB3aXRoIHNlcnZlclwiLFwiTE9HSU5fRkFJTEVEQ09OTkVDVElPTlwiOlwiRXJyb3IgY29ubmVjdGluZyB0byBzZXJ2ZXJcIixcIkxPR0lOX0FMUkVBRFlPTkxJTkVcIjpcIlVzZXIgaXMgYWxyZWFkeSBsb2dnZWQgaW5cIixcIkxPR0lOX09BVVRIRVJST1JcIjpcIk9BdXRoIEVycm9yXCIsXCJTRU5EX0lOVkFMSURERVNUSU5BVElPTlwiOlwiTWVzc2FnZSBzZW50IHRvIGFuIGludmFsaWQgZGVzdGluYXRpb25cIn19LFwiU1RBVFVTXCI6e1widHlwZVwiOlwiY29uc3RhbnRcIixcInZhbHVlXCI6e1wiT0ZGTElORVwiOlwiT0ZGTElORVwiLFwiT05MSU5FXCI6XCJPTkxJTkVcIixcIk9OTElORV9XSVRIX09USEVSX0FQUFwiOlwiT05MSU5FX1dJVEhfT1RIRVJfQVBQXCJ9fSxcImxvZ2luXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOlt7XCJhZ2VudFwiOlwic3RyaW5nXCIsXCJ2ZXJzaW9uXCI6XCJzdHJpbmdcIixcInVybFwiOlwic3RyaW5nXCIsXCJpbnRlcmFjdGl2ZVwiOlwiYm9vbGVhblwiLFwicmVtZW1iZXJMb2dpblwiOlwiYm9vbGVhblwifV0sXCJyZXRcIjp7XCJ1c2VySWRcIjpcInN0cmluZ1wiLFwiY2xpZW50SWRcIjpcInN0cmluZ1wiLFwic3RhdHVzXCI6XCJzdHJpbmdcIixcImxhc3RVcGRhdGVkXCI6XCJudW1iZXJcIixcImxhc3RTZWVuXCI6XCJudW1iZXJcIn0sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJjbGVhckNhY2hlZENyZWRlbnRpYWxzXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdfSxcImdldENsaWVudHNcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcIm9iamVjdFwiLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwiZ2V0VXNlcnNcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcIm9iamVjdFwiLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwic2VuZE1lc3NhZ2VcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJzdHJpbmdcIl0sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJsb2dvdXRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJvbk1lc3NhZ2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJmcm9tXCI6e1widXNlcklkXCI6XCJzdHJpbmdcIixcImNsaWVudElkXCI6XCJzdHJpbmdcIixcInN0YXR1c1wiOlwic3RyaW5nXCIsXCJsYXN0VXBkYXRlZFwiOlwibnVtYmVyXCIsXCJsYXN0U2VlblwiOlwibnVtYmVyXCJ9LFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcIm9uVXNlclByb2ZpbGVcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJ1c2VySWRcIjpcInN0cmluZ1wiLFwibGFzdFVwZGF0ZWRcIjpcIm51bWJlclwiLFwibmFtZVwiOlwic3RyaW5nXCIsXCJ1cmxcIjpcInN0cmluZ1wiLFwiaW1hZ2VEYXRhXCI6XCJzdHJpbmdcIn19LFwib25DbGllbnRTdGF0ZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcInVzZXJJZFwiOlwic3RyaW5nXCIsXCJjbGllbnRJZFwiOlwic3RyaW5nXCIsXCJzdGF0dXNcIjpcInN0cmluZ1wiLFwibGFzdFVwZGF0ZWRcIjpcIm51bWJlclwiLFwibGFzdFNlZW5cIjpcIm51bWJlclwifX19fSx7XCJuYW1lXCI6XCJzdG9yYWdlXCIsXCJhcGlcIjp7XCJzY29wZVwiOntcInR5cGVcIjpcImNvbnN0YW50XCIsXCJ2YWx1ZVwiOntcIlNFU1NJT05cIjowLFwiREVWSUNFX0xPQ0FMXCI6MSxcIlVTRVJfTE9DQUxcIjoyLFwiU0hBUkVEXCI6M319LFwiRVJSQ09ERVwiOntcInR5cGVcIjpcImNvbnN0YW50XCIsXCJ2YWx1ZVwiOntcIlNVQ0NFU1NcIjpcIlN1Y2Nlc3MhXCIsXCJVTktOT1dOXCI6XCJVbmtub3duIGVycm9yXCIsXCJPRkZMSU5FXCI6XCJEYXRhYmFzZSBub3QgcmVhY2hhYmxlXCIsXCJNQUxGT1JNRURQQVJBTUVURVJTXCI6XCJQYXJhbWV0ZXJzIGFyZSBtYWxmb3JtZWRcIn19LFwiY29uc3RydWN0b3JcIjp7XCJ2YWx1ZVwiOlt7XCJzY29wZVwiOlwibnVtYmVyXCJ9XX0sXCJrZXlzXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6W1wiYXJyYXlcIixcInN0cmluZ1wiXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcImdldFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcInN0cmluZ1wiLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwic2V0XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwic3RyaW5nXCJdLFwicmV0XCI6XCJzdHJpbmdcIixcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcInJlbW92ZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcInN0cmluZ1wiLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwiY2xlYXJcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpbXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fX19LHtcIm5hbWVcIjpcInN0b3JlYnVmZmVyXCIsXCJhcGlcIjp7XCJzY29wZVwiOntcInR5cGVcIjpcImNvbnN0YW50XCIsXCJ2YWx1ZVwiOntcIlNFU1NJT05cIjowLFwiREVWSUNFX0xPQ0FMXCI6MSxcIlVTRVJfTE9DQUxcIjoyLFwiU0hBUkVEXCI6M319LFwiRVJSQ09ERVwiOntcInR5cGVcIjpcImNvbnN0YW50XCIsXCJ2YWx1ZVwiOntcIlNVQ0NFU1NcIjpcIlN1Y2Nlc3MhXCIsXCJVTktOT1dOXCI6XCJVbmtub3duIGVycm9yXCIsXCJPRkZMSU5FXCI6XCJEYXRhYmFzZSBub3QgcmVhY2hhYmxlXCIsXCJNQUxGT1JNRURQQVJBTUVURVJTXCI6XCJQYXJhbWV0ZXJzIGFyZSBtYWxmb3JtZWRcIn19LFwiY29uc3RydWN0b3JcIjp7XCJ2YWx1ZVwiOlt7XCJzY29wZVwiOlwibnVtYmVyXCJ9XX0sXCJrZXlzXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6W1wiYXJyYXlcIixcInN0cmluZ1wiXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcImdldFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcImJ1ZmZlclwiLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwic2V0XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwiYnVmZmVyXCJdLFwicmV0XCI6XCJidWZmZXJcIixcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcInJlbW92ZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcImJ1ZmZlclwiLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwiY2xlYXJcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpbXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fX19LHtcIm5hbWVcIjpcInRyYW5zcG9ydFwiLFwiYXBpXCI6e1wiRVJSQ09ERVwiOntcInR5cGVcIjpcImNvbnN0YW50XCIsXCJ2YWx1ZVwiOntcIlNVQ0NFU1NcIjpcIlN1Y2Nlc3MhXCIsXCJVTktOT1dOXCI6XCJVbmtub3duIGVycm9yXCIsXCJPRkZMSU5FXCI6XCJOb3QgcmVhY2hhYmxlXCIsXCJNQUxGT1JNRURQQVJBTUVURVJTXCI6XCJQYXJhbWV0ZXJzIGFyZSBtYWxmb3JtZWRcIn19LFwic2V0dXBcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJwcm94eVwiXSxcInJldFwiOltdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwic2VuZFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcImJ1ZmZlclwiXSxcInJldFwiOltdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwiY2xvc2VcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpbXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcIm9uRGF0YVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcInRhZ1wiOlwic3RyaW5nXCIsXCJkYXRhXCI6XCJidWZmZXJcIn19LFwib25DbG9zZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOltdfX19XTtcbiIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwpe1xuLyohXG4gKiBAb3ZlcnZpZXcgZXM2LXByb21pc2UgLSBhIHRpbnkgaW1wbGVtZW50YXRpb24gb2YgUHJvbWlzZXMvQSsuXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoYykgMjAxNCBZZWh1ZGEgS2F0eiwgVG9tIERhbGUsIFN0ZWZhbiBQZW5uZXIgYW5kIGNvbnRyaWJ1dG9ycyAoQ29udmVyc2lvbiB0byBFUzYgQVBJIGJ5IEpha2UgQXJjaGliYWxkKVxuICogQGxpY2Vuc2UgICBMaWNlbnNlZCB1bmRlciBNSVQgbGljZW5zZVxuICogICAgICAgICAgICBTZWUgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2pha2VhcmNoaWJhbGQvZXM2LXByb21pc2UvbWFzdGVyL0xJQ0VOU0VcbiAqIEB2ZXJzaW9uICAgMi4wLjFcbiAqL1xuXG4oZnVuY3Rpb24oKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBmdW5jdGlvbiAkJHV0aWxzJCRvYmplY3RPckZ1bmN0aW9uKHgpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJyB8fCAodHlwZW9mIHggPT09ICdvYmplY3QnICYmIHggIT09IG51bGwpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uICQkdXRpbHMkJGlzRnVuY3Rpb24oeCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uICQkdXRpbHMkJGlzTWF5YmVUaGVuYWJsZSh4KSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHggPT09ICdvYmplY3QnICYmIHggIT09IG51bGw7XG4gICAgfVxuXG4gICAgdmFyICQkdXRpbHMkJF9pc0FycmF5O1xuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KSB7XG4gICAgICAkJHV0aWxzJCRfaXNBcnJheSA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAkJHV0aWxzJCRfaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG4gICAgfVxuXG4gICAgdmFyICQkdXRpbHMkJGlzQXJyYXkgPSAkJHV0aWxzJCRfaXNBcnJheTtcbiAgICB2YXIgJCR1dGlscyQkbm93ID0gRGF0ZS5ub3cgfHwgZnVuY3Rpb24oKSB7IHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTsgfTtcbiAgICBmdW5jdGlvbiAkJHV0aWxzJCRGKCkgeyB9XG5cbiAgICB2YXIgJCR1dGlscyQkb19jcmVhdGUgPSAoT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiAobykge1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU2Vjb25kIGFyZ3VtZW50IG5vdCBzdXBwb3J0ZWQnKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbyAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhbiBvYmplY3QnKTtcbiAgICAgIH1cbiAgICAgICQkdXRpbHMkJEYucHJvdG90eXBlID0gbztcbiAgICAgIHJldHVybiBuZXcgJCR1dGlscyQkRigpO1xuICAgIH0pO1xuXG4gICAgdmFyICQkYXNhcCQkbGVuID0gMDtcblxuICAgIHZhciAkJGFzYXAkJGRlZmF1bHQgPSBmdW5jdGlvbiBhc2FwKGNhbGxiYWNrLCBhcmcpIHtcbiAgICAgICQkYXNhcCQkcXVldWVbJCRhc2FwJCRsZW5dID0gY2FsbGJhY2s7XG4gICAgICAkJGFzYXAkJHF1ZXVlWyQkYXNhcCQkbGVuICsgMV0gPSBhcmc7XG4gICAgICAkJGFzYXAkJGxlbiArPSAyO1xuICAgICAgaWYgKCQkYXNhcCQkbGVuID09PSAyKSB7XG4gICAgICAgIC8vIElmIGxlbiBpcyAxLCB0aGF0IG1lYW5zIHRoYXQgd2UgbmVlZCB0byBzY2hlZHVsZSBhbiBhc3luYyBmbHVzaC5cbiAgICAgICAgLy8gSWYgYWRkaXRpb25hbCBjYWxsYmFja3MgYXJlIHF1ZXVlZCBiZWZvcmUgdGhlIHF1ZXVlIGlzIGZsdXNoZWQsIHRoZXlcbiAgICAgICAgLy8gd2lsbCBiZSBwcm9jZXNzZWQgYnkgdGhpcyBmbHVzaCB0aGF0IHdlIGFyZSBzY2hlZHVsaW5nLlxuICAgICAgICAkJGFzYXAkJHNjaGVkdWxlRmx1c2goKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyICQkYXNhcCQkYnJvd3Nlckdsb2JhbCA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgPyB3aW5kb3cgOiB7fTtcbiAgICB2YXIgJCRhc2FwJCRCcm93c2VyTXV0YXRpb25PYnNlcnZlciA9ICQkYXNhcCQkYnJvd3Nlckdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8ICQkYXNhcCQkYnJvd3Nlckdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xuXG4gICAgLy8gdGVzdCBmb3Igd2ViIHdvcmtlciBidXQgbm90IGluIElFMTBcbiAgICB2YXIgJCRhc2FwJCRpc1dvcmtlciA9IHR5cGVvZiBVaW50OENsYW1wZWRBcnJheSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIHR5cGVvZiBpbXBvcnRTY3JpcHRzICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgdHlwZW9mIE1lc3NhZ2VDaGFubmVsICE9PSAndW5kZWZpbmVkJztcblxuICAgIC8vIG5vZGVcbiAgICBmdW5jdGlvbiAkJGFzYXAkJHVzZU5leHRUaWNrKCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBwcm9jZXNzLm5leHRUaWNrKCQkYXNhcCQkZmx1c2gpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkJGFzYXAkJHVzZU11dGF0aW9uT2JzZXJ2ZXIoKSB7XG4gICAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgJCRhc2FwJCRCcm93c2VyTXV0YXRpb25PYnNlcnZlcigkJGFzYXAkJGZsdXNoKTtcbiAgICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShub2RlLCB7IGNoYXJhY3RlckRhdGE6IHRydWUgfSk7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgbm9kZS5kYXRhID0gKGl0ZXJhdGlvbnMgPSArK2l0ZXJhdGlvbnMgJSAyKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gd2ViIHdvcmtlclxuICAgIGZ1bmN0aW9uICQkYXNhcCQkdXNlTWVzc2FnZUNoYW5uZWwoKSB7XG4gICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSAkJGFzYXAkJGZsdXNoO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZSgwKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gJCRhc2FwJCR1c2VTZXRUaW1lb3V0KCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBzZXRUaW1lb3V0KCQkYXNhcCQkZmx1c2gsIDEpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgJCRhc2FwJCRxdWV1ZSA9IG5ldyBBcnJheSgxMDAwKTtcblxuICAgIGZ1bmN0aW9uICQkYXNhcCQkZmx1c2goKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8ICQkYXNhcCQkbGVuOyBpKz0yKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9ICQkYXNhcCQkcXVldWVbaV07XG4gICAgICAgIHZhciBhcmcgPSAkJGFzYXAkJHF1ZXVlW2krMV07XG5cbiAgICAgICAgY2FsbGJhY2soYXJnKTtcblxuICAgICAgICAkJGFzYXAkJHF1ZXVlW2ldID0gdW5kZWZpbmVkO1xuICAgICAgICAkJGFzYXAkJHF1ZXVlW2krMV0gPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgICQkYXNhcCQkbGVuID0gMDtcbiAgICB9XG5cbiAgICB2YXIgJCRhc2FwJCRzY2hlZHVsZUZsdXNoO1xuXG4gICAgLy8gRGVjaWRlIHdoYXQgYXN5bmMgbWV0aG9kIHRvIHVzZSB0byB0cmlnZ2VyaW5nIHByb2Nlc3Npbmcgb2YgcXVldWVkIGNhbGxiYWNrczpcbiAgICBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHt9LnRvU3RyaW5nLmNhbGwocHJvY2VzcykgPT09ICdbb2JqZWN0IHByb2Nlc3NdJykge1xuICAgICAgJCRhc2FwJCRzY2hlZHVsZUZsdXNoID0gJCRhc2FwJCR1c2VOZXh0VGljaygpO1xuICAgIH0gZWxzZSBpZiAoJCRhc2FwJCRCcm93c2VyTXV0YXRpb25PYnNlcnZlcikge1xuICAgICAgJCRhc2FwJCRzY2hlZHVsZUZsdXNoID0gJCRhc2FwJCR1c2VNdXRhdGlvbk9ic2VydmVyKCk7XG4gICAgfSBlbHNlIGlmICgkJGFzYXAkJGlzV29ya2VyKSB7XG4gICAgICAkJGFzYXAkJHNjaGVkdWxlRmx1c2ggPSAkJGFzYXAkJHVzZU1lc3NhZ2VDaGFubmVsKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQkYXNhcCQkc2NoZWR1bGVGbHVzaCA9ICQkYXNhcCQkdXNlU2V0VGltZW91dCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uICQkJGludGVybmFsJCRub29wKCkge31cbiAgICB2YXIgJCQkaW50ZXJuYWwkJFBFTkRJTkcgICA9IHZvaWQgMDtcbiAgICB2YXIgJCQkaW50ZXJuYWwkJEZVTEZJTExFRCA9IDE7XG4gICAgdmFyICQkJGludGVybmFsJCRSRUpFQ1RFRCAgPSAyO1xuICAgIHZhciAkJCRpbnRlcm5hbCQkR0VUX1RIRU5fRVJST1IgPSBuZXcgJCQkaW50ZXJuYWwkJEVycm9yT2JqZWN0KCk7XG5cbiAgICBmdW5jdGlvbiAkJCRpbnRlcm5hbCQkc2VsZkZ1bGxmaWxsbWVudCgpIHtcbiAgICAgIHJldHVybiBuZXcgVHlwZUVycm9yKFwiWW91IGNhbm5vdCByZXNvbHZlIGEgcHJvbWlzZSB3aXRoIGl0c2VsZlwiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkJCRpbnRlcm5hbCQkY2Fubm90UmV0dXJuT3duKCkge1xuICAgICAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoJ0EgcHJvbWlzZXMgY2FsbGJhY2sgY2Fubm90IHJldHVybiB0aGF0IHNhbWUgcHJvbWlzZS4nKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uICQkJGludGVybmFsJCRnZXRUaGVuKHByb21pc2UpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlLnRoZW47XG4gICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICQkJGludGVybmFsJCRHRVRfVEhFTl9FUlJPUi5lcnJvciA9IGVycm9yO1xuICAgICAgICByZXR1cm4gJCQkaW50ZXJuYWwkJEdFVF9USEVOX0VSUk9SO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uICQkJGludGVybmFsJCR0cnlUaGVuKHRoZW4sIHZhbHVlLCBmdWxmaWxsbWVudEhhbmRsZXIsIHJlamVjdGlvbkhhbmRsZXIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgZnVsZmlsbG1lbnRIYW5kbGVyLCByZWplY3Rpb25IYW5kbGVyKTtcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkJCRpbnRlcm5hbCQkaGFuZGxlRm9yZWlnblRoZW5hYmxlKHByb21pc2UsIHRoZW5hYmxlLCB0aGVuKSB7XG4gICAgICAgJCRhc2FwJCRkZWZhdWx0KGZ1bmN0aW9uKHByb21pc2UpIHtcbiAgICAgICAgdmFyIHNlYWxlZCA9IGZhbHNlO1xuICAgICAgICB2YXIgZXJyb3IgPSAkJCRpbnRlcm5hbCQkdHJ5VGhlbih0aGVuLCB0aGVuYWJsZSwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICBpZiAoc2VhbGVkKSB7IHJldHVybjsgfVxuICAgICAgICAgIHNlYWxlZCA9IHRydWU7XG4gICAgICAgICAgaWYgKHRoZW5hYmxlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgJCQkaW50ZXJuYWwkJHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgICBpZiAoc2VhbGVkKSB7IHJldHVybjsgfVxuICAgICAgICAgIHNlYWxlZCA9IHRydWU7XG5cbiAgICAgICAgICAkJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgICAgIH0sICdTZXR0bGU6ICcgKyAocHJvbWlzZS5fbGFiZWwgfHwgJyB1bmtub3duIHByb21pc2UnKSk7XG5cbiAgICAgICAgaWYgKCFzZWFsZWQgJiYgZXJyb3IpIHtcbiAgICAgICAgICBzZWFsZWQgPSB0cnVlO1xuICAgICAgICAgICQkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9LCBwcm9taXNlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkJCRpbnRlcm5hbCQkaGFuZGxlT3duVGhlbmFibGUocHJvbWlzZSwgdGhlbmFibGUpIHtcbiAgICAgIGlmICh0aGVuYWJsZS5fc3RhdGUgPT09ICQkJGludGVybmFsJCRGVUxGSUxMRUQpIHtcbiAgICAgICAgJCQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgdGhlbmFibGUuX3Jlc3VsdCk7XG4gICAgICB9IGVsc2UgaWYgKHByb21pc2UuX3N0YXRlID09PSAkJCRpbnRlcm5hbCQkUkVKRUNURUQpIHtcbiAgICAgICAgJCQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCB0aGVuYWJsZS5fcmVzdWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQkJGludGVybmFsJCRzdWJzY3JpYmUodGhlbmFibGUsIHVuZGVmaW5lZCwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAkJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICAgICQkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gJCQkaW50ZXJuYWwkJGhhbmRsZU1heWJlVGhlbmFibGUocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSkge1xuICAgICAgaWYgKG1heWJlVGhlbmFibGUuY29uc3RydWN0b3IgPT09IHByb21pc2UuY29uc3RydWN0b3IpIHtcbiAgICAgICAgJCQkaW50ZXJuYWwkJGhhbmRsZU93blRoZW5hYmxlKHByb21pc2UsIG1heWJlVGhlbmFibGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHRoZW4gPSAkJCRpbnRlcm5hbCQkZ2V0VGhlbihtYXliZVRoZW5hYmxlKTtcblxuICAgICAgICBpZiAodGhlbiA9PT0gJCQkaW50ZXJuYWwkJEdFVF9USEVOX0VSUk9SKSB7XG4gICAgICAgICAgJCQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCAkJCRpbnRlcm5hbCQkR0VUX1RIRU5fRVJST1IuZXJyb3IpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoZW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICQkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIG1heWJlVGhlbmFibGUpO1xuICAgICAgICB9IGVsc2UgaWYgKCQkdXRpbHMkJGlzRnVuY3Rpb24odGhlbikpIHtcbiAgICAgICAgICAkJCRpbnRlcm5hbCQkaGFuZGxlRm9yZWlnblRoZW5hYmxlKHByb21pc2UsIG1heWJlVGhlbmFibGUsIHRoZW4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICQkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIG1heWJlVGhlbmFibGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gJCQkaW50ZXJuYWwkJHJlc29sdmUocHJvbWlzZSwgdmFsdWUpIHtcbiAgICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkge1xuICAgICAgICAkJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsICQkJGludGVybmFsJCRzZWxmRnVsbGZpbGxtZW50KCkpO1xuICAgICAgfSBlbHNlIGlmICgkJHV0aWxzJCRvYmplY3RPckZ1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgICAkJCRpbnRlcm5hbCQkaGFuZGxlTWF5YmVUaGVuYWJsZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gJCQkaW50ZXJuYWwkJHB1Ymxpc2hSZWplY3Rpb24ocHJvbWlzZSkge1xuICAgICAgaWYgKHByb21pc2UuX29uZXJyb3IpIHtcbiAgICAgICAgcHJvbWlzZS5fb25lcnJvcihwcm9taXNlLl9yZXN1bHQpO1xuICAgICAgfVxuXG4gICAgICAkJCRpbnRlcm5hbCQkcHVibGlzaChwcm9taXNlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCB2YWx1ZSkge1xuICAgICAgaWYgKHByb21pc2UuX3N0YXRlICE9PSAkJCRpbnRlcm5hbCQkUEVORElORykgeyByZXR1cm47IH1cblxuICAgICAgcHJvbWlzZS5fcmVzdWx0ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zdGF0ZSA9ICQkJGludGVybmFsJCRGVUxGSUxMRUQ7XG5cbiAgICAgIGlmIChwcm9taXNlLl9zdWJzY3JpYmVycy5sZW5ndGggPT09IDApIHtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQkYXNhcCQkZGVmYXVsdCgkJCRpbnRlcm5hbCQkcHVibGlzaCwgcHJvbWlzZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gJCQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCByZWFzb24pIHtcbiAgICAgIGlmIChwcm9taXNlLl9zdGF0ZSAhPT0gJCQkaW50ZXJuYWwkJFBFTkRJTkcpIHsgcmV0dXJuOyB9XG4gICAgICBwcm9taXNlLl9zdGF0ZSA9ICQkJGludGVybmFsJCRSRUpFQ1RFRDtcbiAgICAgIHByb21pc2UuX3Jlc3VsdCA9IHJlYXNvbjtcblxuICAgICAgJCRhc2FwJCRkZWZhdWx0KCQkJGludGVybmFsJCRwdWJsaXNoUmVqZWN0aW9uLCBwcm9taXNlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkJCRpbnRlcm5hbCQkc3Vic2NyaWJlKHBhcmVudCwgY2hpbGQsIG9uRnVsZmlsbG1lbnQsIG9uUmVqZWN0aW9uKSB7XG4gICAgICB2YXIgc3Vic2NyaWJlcnMgPSBwYXJlbnQuX3N1YnNjcmliZXJzO1xuICAgICAgdmFyIGxlbmd0aCA9IHN1YnNjcmliZXJzLmxlbmd0aDtcblxuICAgICAgcGFyZW50Ll9vbmVycm9yID0gbnVsbDtcblxuICAgICAgc3Vic2NyaWJlcnNbbGVuZ3RoXSA9IGNoaWxkO1xuICAgICAgc3Vic2NyaWJlcnNbbGVuZ3RoICsgJCQkaW50ZXJuYWwkJEZVTEZJTExFRF0gPSBvbkZ1bGZpbGxtZW50O1xuICAgICAgc3Vic2NyaWJlcnNbbGVuZ3RoICsgJCQkaW50ZXJuYWwkJFJFSkVDVEVEXSAgPSBvblJlamVjdGlvbjtcblxuICAgICAgaWYgKGxlbmd0aCA9PT0gMCAmJiBwYXJlbnQuX3N0YXRlKSB7XG4gICAgICAgICQkYXNhcCQkZGVmYXVsdCgkJCRpbnRlcm5hbCQkcHVibGlzaCwgcGFyZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkJCRpbnRlcm5hbCQkcHVibGlzaChwcm9taXNlKSB7XG4gICAgICB2YXIgc3Vic2NyaWJlcnMgPSBwcm9taXNlLl9zdWJzY3JpYmVycztcbiAgICAgIHZhciBzZXR0bGVkID0gcHJvbWlzZS5fc3RhdGU7XG5cbiAgICAgIGlmIChzdWJzY3JpYmVycy5sZW5ndGggPT09IDApIHsgcmV0dXJuOyB9XG5cbiAgICAgIHZhciBjaGlsZCwgY2FsbGJhY2ssIGRldGFpbCA9IHByb21pc2UuX3Jlc3VsdDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdWJzY3JpYmVycy5sZW5ndGg7IGkgKz0gMykge1xuICAgICAgICBjaGlsZCA9IHN1YnNjcmliZXJzW2ldO1xuICAgICAgICBjYWxsYmFjayA9IHN1YnNjcmliZXJzW2kgKyBzZXR0bGVkXTtcblxuICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICAkJCRpbnRlcm5hbCQkaW52b2tlQ2FsbGJhY2soc2V0dGxlZCwgY2hpbGQsIGNhbGxiYWNrLCBkZXRhaWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhbGxiYWNrKGRldGFpbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHJvbWlzZS5fc3Vic2NyaWJlcnMubGVuZ3RoID0gMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkJCRpbnRlcm5hbCQkRXJyb3JPYmplY3QoKSB7XG4gICAgICB0aGlzLmVycm9yID0gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgJCQkaW50ZXJuYWwkJFRSWV9DQVRDSF9FUlJPUiA9IG5ldyAkJCRpbnRlcm5hbCQkRXJyb3JPYmplY3QoKTtcblxuICAgIGZ1bmN0aW9uICQkJGludGVybmFsJCR0cnlDYXRjaChjYWxsYmFjaywgZGV0YWlsKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soZGV0YWlsKTtcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAkJCRpbnRlcm5hbCQkVFJZX0NBVENIX0VSUk9SLmVycm9yID0gZTtcbiAgICAgICAgcmV0dXJuICQkJGludGVybmFsJCRUUllfQ0FUQ0hfRVJST1I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gJCQkaW50ZXJuYWwkJGludm9rZUNhbGxiYWNrKHNldHRsZWQsIHByb21pc2UsIGNhbGxiYWNrLCBkZXRhaWwpIHtcbiAgICAgIHZhciBoYXNDYWxsYmFjayA9ICQkdXRpbHMkJGlzRnVuY3Rpb24oY2FsbGJhY2spLFxuICAgICAgICAgIHZhbHVlLCBlcnJvciwgc3VjY2VlZGVkLCBmYWlsZWQ7XG5cbiAgICAgIGlmIChoYXNDYWxsYmFjaykge1xuICAgICAgICB2YWx1ZSA9ICQkJGludGVybmFsJCR0cnlDYXRjaChjYWxsYmFjaywgZGV0YWlsKTtcblxuICAgICAgICBpZiAodmFsdWUgPT09ICQkJGludGVybmFsJCRUUllfQ0FUQ0hfRVJST1IpIHtcbiAgICAgICAgICBmYWlsZWQgPSB0cnVlO1xuICAgICAgICAgIGVycm9yID0gdmFsdWUuZXJyb3I7XG4gICAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN1Y2NlZWRlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAkJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsICQkJGludGVybmFsJCRjYW5ub3RSZXR1cm5Pd24oKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gZGV0YWlsO1xuICAgICAgICBzdWNjZWVkZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvbWlzZS5fc3RhdGUgIT09ICQkJGludGVybmFsJCRQRU5ESU5HKSB7XG4gICAgICAgIC8vIG5vb3BcbiAgICAgIH0gZWxzZSBpZiAoaGFzQ2FsbGJhY2sgJiYgc3VjY2VlZGVkKSB7XG4gICAgICAgICQkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoZmFpbGVkKSB7XG4gICAgICAgICQkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgZXJyb3IpO1xuICAgICAgfSBlbHNlIGlmIChzZXR0bGVkID09PSAkJCRpbnRlcm5hbCQkRlVMRklMTEVEKSB7XG4gICAgICAgICQkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoc2V0dGxlZCA9PT0gJCQkaW50ZXJuYWwkJFJFSkVDVEVEKSB7XG4gICAgICAgICQkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uICQkJGludGVybmFsJCRpbml0aWFsaXplUHJvbWlzZShwcm9taXNlLCByZXNvbHZlcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzb2x2ZXIoZnVuY3Rpb24gcmVzb2x2ZVByb21pc2UodmFsdWUpe1xuICAgICAgICAgICQkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gcmVqZWN0UHJvbWlzZShyZWFzb24pIHtcbiAgICAgICAgICAkJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICQkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gJCQkZW51bWVyYXRvciQkbWFrZVNldHRsZWRSZXN1bHQoc3RhdGUsIHBvc2l0aW9uLCB2YWx1ZSkge1xuICAgICAgaWYgKHN0YXRlID09PSAkJCRpbnRlcm5hbCQkRlVMRklMTEVEKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3RhdGU6ICdmdWxmaWxsZWQnLFxuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdGF0ZTogJ3JlamVjdGVkJyxcbiAgICAgICAgICByZWFzb246IHZhbHVlXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gJCQkZW51bWVyYXRvciQkRW51bWVyYXRvcihDb25zdHJ1Y3RvciwgaW5wdXQsIGFib3J0T25SZWplY3QsIGxhYmVsKSB7XG4gICAgICB0aGlzLl9pbnN0YW5jZUNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3I7XG4gICAgICB0aGlzLnByb21pc2UgPSBuZXcgQ29uc3RydWN0b3IoJCQkaW50ZXJuYWwkJG5vb3AsIGxhYmVsKTtcbiAgICAgIHRoaXMuX2Fib3J0T25SZWplY3QgPSBhYm9ydE9uUmVqZWN0O1xuXG4gICAgICBpZiAodGhpcy5fdmFsaWRhdGVJbnB1dChpbnB1dCkpIHtcbiAgICAgICAgdGhpcy5faW5wdXQgICAgID0gaW5wdXQ7XG4gICAgICAgIHRoaXMubGVuZ3RoICAgICA9IGlucHV0Lmxlbmd0aDtcbiAgICAgICAgdGhpcy5fcmVtYWluaW5nID0gaW5wdXQubGVuZ3RoO1xuXG4gICAgICAgIHRoaXMuX2luaXQoKTtcblxuICAgICAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAkJCRpbnRlcm5hbCQkZnVsZmlsbCh0aGlzLnByb21pc2UsIHRoaXMuX3Jlc3VsdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5sZW5ndGggPSB0aGlzLmxlbmd0aCB8fCAwO1xuICAgICAgICAgIHRoaXMuX2VudW1lcmF0ZSgpO1xuICAgICAgICAgIGlmICh0aGlzLl9yZW1haW5pbmcgPT09IDApIHtcbiAgICAgICAgICAgICQkJGludGVybmFsJCRmdWxmaWxsKHRoaXMucHJvbWlzZSwgdGhpcy5fcmVzdWx0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQkJGludGVybmFsJCRyZWplY3QodGhpcy5wcm9taXNlLCB0aGlzLl92YWxpZGF0aW9uRXJyb3IoKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJCQkZW51bWVyYXRvciQkRW51bWVyYXRvci5wcm90b3R5cGUuX3ZhbGlkYXRlSW5wdXQgPSBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgcmV0dXJuICQkdXRpbHMkJGlzQXJyYXkoaW5wdXQpO1xuICAgIH07XG5cbiAgICAkJCRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yLnByb3RvdHlwZS5fdmFsaWRhdGlvbkVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdBcnJheSBNZXRob2RzIG11c3QgYmUgcHJvdmlkZWQgYW4gQXJyYXknKTtcbiAgICB9O1xuXG4gICAgJCQkZW51bWVyYXRvciQkRW51bWVyYXRvci5wcm90b3R5cGUuX2luaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX3Jlc3VsdCA9IG5ldyBBcnJheSh0aGlzLmxlbmd0aCk7XG4gICAgfTtcblxuICAgIHZhciAkJCRlbnVtZXJhdG9yJCRkZWZhdWx0ID0gJCQkZW51bWVyYXRvciQkRW51bWVyYXRvcjtcblxuICAgICQkJGVudW1lcmF0b3IkJEVudW1lcmF0b3IucHJvdG90eXBlLl9lbnVtZXJhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBsZW5ndGggID0gdGhpcy5sZW5ndGg7XG4gICAgICB2YXIgcHJvbWlzZSA9IHRoaXMucHJvbWlzZTtcbiAgICAgIHZhciBpbnB1dCAgID0gdGhpcy5faW5wdXQ7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBwcm9taXNlLl9zdGF0ZSA9PT0gJCQkaW50ZXJuYWwkJFBFTkRJTkcgJiYgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuX2VhY2hFbnRyeShpbnB1dFtpXSwgaSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgICQkJGVudW1lcmF0b3IkJEVudW1lcmF0b3IucHJvdG90eXBlLl9lYWNoRW50cnkgPSBmdW5jdGlvbihlbnRyeSwgaSkge1xuICAgICAgdmFyIGMgPSB0aGlzLl9pbnN0YW5jZUNvbnN0cnVjdG9yO1xuICAgICAgaWYgKCQkdXRpbHMkJGlzTWF5YmVUaGVuYWJsZShlbnRyeSkpIHtcbiAgICAgICAgaWYgKGVudHJ5LmNvbnN0cnVjdG9yID09PSBjICYmIGVudHJ5Ll9zdGF0ZSAhPT0gJCQkaW50ZXJuYWwkJFBFTkRJTkcpIHtcbiAgICAgICAgICBlbnRyeS5fb25lcnJvciA9IG51bGw7XG4gICAgICAgICAgdGhpcy5fc2V0dGxlZEF0KGVudHJ5Ll9zdGF0ZSwgaSwgZW50cnkuX3Jlc3VsdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fd2lsbFNldHRsZUF0KGMucmVzb2x2ZShlbnRyeSksIGkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZW1haW5pbmctLTtcbiAgICAgICAgdGhpcy5fcmVzdWx0W2ldID0gdGhpcy5fbWFrZVJlc3VsdCgkJCRpbnRlcm5hbCQkRlVMRklMTEVELCBpLCBlbnRyeSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgICQkJGVudW1lcmF0b3IkJEVudW1lcmF0b3IucHJvdG90eXBlLl9zZXR0bGVkQXQgPSBmdW5jdGlvbihzdGF0ZSwgaSwgdmFsdWUpIHtcbiAgICAgIHZhciBwcm9taXNlID0gdGhpcy5wcm9taXNlO1xuXG4gICAgICBpZiAocHJvbWlzZS5fc3RhdGUgPT09ICQkJGludGVybmFsJCRQRU5ESU5HKSB7XG4gICAgICAgIHRoaXMuX3JlbWFpbmluZy0tO1xuXG4gICAgICAgIGlmICh0aGlzLl9hYm9ydE9uUmVqZWN0ICYmIHN0YXRlID09PSAkJCRpbnRlcm5hbCQkUkVKRUNURUQpIHtcbiAgICAgICAgICAkJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9yZXN1bHRbaV0gPSB0aGlzLl9tYWtlUmVzdWx0KHN0YXRlLCBpLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX3JlbWFpbmluZyA9PT0gMCkge1xuICAgICAgICAkJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCB0aGlzLl9yZXN1bHQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAkJCRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yLnByb3RvdHlwZS5fbWFrZVJlc3VsdCA9IGZ1bmN0aW9uKHN0YXRlLCBpLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG5cbiAgICAkJCRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yLnByb3RvdHlwZS5fd2lsbFNldHRsZUF0ID0gZnVuY3Rpb24ocHJvbWlzZSwgaSkge1xuICAgICAgdmFyIGVudW1lcmF0b3IgPSB0aGlzO1xuXG4gICAgICAkJCRpbnRlcm5hbCQkc3Vic2NyaWJlKHByb21pc2UsIHVuZGVmaW5lZCwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgZW51bWVyYXRvci5fc2V0dGxlZEF0KCQkJGludGVybmFsJCRGVUxGSUxMRUQsIGksIHZhbHVlKTtcbiAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICBlbnVtZXJhdG9yLl9zZXR0bGVkQXQoJCQkaW50ZXJuYWwkJFJFSkVDVEVELCBpLCByZWFzb24pO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHZhciAkJHByb21pc2UkYWxsJCRkZWZhdWx0ID0gZnVuY3Rpb24gYWxsKGVudHJpZXMsIGxhYmVsKSB7XG4gICAgICByZXR1cm4gbmV3ICQkJGVudW1lcmF0b3IkJGRlZmF1bHQodGhpcywgZW50cmllcywgdHJ1ZSAvKiBhYm9ydCBvbiByZWplY3QgKi8sIGxhYmVsKS5wcm9taXNlO1xuICAgIH07XG5cbiAgICB2YXIgJCRwcm9taXNlJHJhY2UkJGRlZmF1bHQgPSBmdW5jdGlvbiByYWNlKGVudHJpZXMsIGxhYmVsKSB7XG4gICAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgICAgdmFyIENvbnN0cnVjdG9yID0gdGhpcztcblxuICAgICAgdmFyIHByb21pc2UgPSBuZXcgQ29uc3RydWN0b3IoJCQkaW50ZXJuYWwkJG5vb3AsIGxhYmVsKTtcblxuICAgICAgaWYgKCEkJHV0aWxzJCRpc0FycmF5KGVudHJpZXMpKSB7XG4gICAgICAgICQkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgbmV3IFR5cGVFcnJvcignWW91IG11c3QgcGFzcyBhbiBhcnJheSB0byByYWNlLicpKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBsZW5ndGggPSBlbnRyaWVzLmxlbmd0aDtcblxuICAgICAgZnVuY3Rpb24gb25GdWxmaWxsbWVudCh2YWx1ZSkge1xuICAgICAgICAkJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG9uUmVqZWN0aW9uKHJlYXNvbikge1xuICAgICAgICAkJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBwcm9taXNlLl9zdGF0ZSA9PT0gJCQkaW50ZXJuYWwkJFBFTkRJTkcgJiYgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICQkJGludGVybmFsJCRzdWJzY3JpYmUoQ29uc3RydWN0b3IucmVzb2x2ZShlbnRyaWVzW2ldKSwgdW5kZWZpbmVkLCBvbkZ1bGZpbGxtZW50LCBvblJlamVjdGlvbik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB2YXIgJCRwcm9taXNlJHJlc29sdmUkJGRlZmF1bHQgPSBmdW5jdGlvbiByZXNvbHZlKG9iamVjdCwgbGFiZWwpIHtcbiAgICAgIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gICAgICB2YXIgQ29uc3RydWN0b3IgPSB0aGlzO1xuXG4gICAgICBpZiAob2JqZWN0ICYmIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdC5jb25zdHJ1Y3RvciA9PT0gQ29uc3RydWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICAgIH1cblxuICAgICAgdmFyIHByb21pc2UgPSBuZXcgQ29uc3RydWN0b3IoJCQkaW50ZXJuYWwkJG5vb3AsIGxhYmVsKTtcbiAgICAgICQkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIG9iamVjdCk7XG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdmFyICQkcHJvbWlzZSRyZWplY3QkJGRlZmF1bHQgPSBmdW5jdGlvbiByZWplY3QocmVhc29uLCBsYWJlbCkge1xuICAgICAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgICAgIHZhciBDb25zdHJ1Y3RvciA9IHRoaXM7XG4gICAgICB2YXIgcHJvbWlzZSA9IG5ldyBDb25zdHJ1Y3RvcigkJCRpbnRlcm5hbCQkbm9vcCwgbGFiZWwpO1xuICAgICAgJCQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCByZWFzb24pO1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHZhciAkJGVzNiRwcm9taXNlJHByb21pc2UkJGNvdW50ZXIgPSAwO1xuXG4gICAgZnVuY3Rpb24gJCRlczYkcHJvbWlzZSRwcm9taXNlJCRuZWVkc1Jlc29sdmVyKCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignWW91IG11c3QgcGFzcyBhIHJlc29sdmVyIGZ1bmN0aW9uIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgcHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uICQkZXM2JHByb21pc2UkcHJvbWlzZSQkbmVlZHNOZXcoKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGNvbnN0cnVjdCAnUHJvbWlzZSc6IFBsZWFzZSB1c2UgdGhlICduZXcnIG9wZXJhdG9yLCB0aGlzIG9iamVjdCBjb25zdHJ1Y3RvciBjYW5ub3QgYmUgY2FsbGVkIGFzIGEgZnVuY3Rpb24uXCIpO1xuICAgIH1cblxuICAgIHZhciAkJGVzNiRwcm9taXNlJHByb21pc2UkJGRlZmF1bHQgPSAkJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2U7XG5cbiAgICAvKipcbiAgICAgIFByb21pc2Ugb2JqZWN0cyByZXByZXNlbnQgdGhlIGV2ZW50dWFsIHJlc3VsdCBvZiBhbiBhc3luY2hyb25vdXMgb3BlcmF0aW9uLiBUaGVcbiAgICAgIHByaW1hcnkgd2F5IG9mIGludGVyYWN0aW5nIHdpdGggYSBwcm9taXNlIGlzIHRocm91Z2ggaXRzIGB0aGVuYCBtZXRob2QsIHdoaWNoXG4gICAgICByZWdpc3RlcnMgY2FsbGJhY2tzIHRvIHJlY2VpdmUgZWl0aGVyIGEgcHJvbWlzZeKAmXMgZXZlbnR1YWwgdmFsdWUgb3IgdGhlIHJlYXNvblxuICAgICAgd2h5IHRoZSBwcm9taXNlIGNhbm5vdCBiZSBmdWxmaWxsZWQuXG5cbiAgICAgIFRlcm1pbm9sb2d5XG4gICAgICAtLS0tLS0tLS0tLVxuXG4gICAgICAtIGBwcm9taXNlYCBpcyBhbiBvYmplY3Qgb3IgZnVuY3Rpb24gd2l0aCBhIGB0aGVuYCBtZXRob2Qgd2hvc2UgYmVoYXZpb3IgY29uZm9ybXMgdG8gdGhpcyBzcGVjaWZpY2F0aW9uLlxuICAgICAgLSBgdGhlbmFibGVgIGlzIGFuIG9iamVjdCBvciBmdW5jdGlvbiB0aGF0IGRlZmluZXMgYSBgdGhlbmAgbWV0aG9kLlxuICAgICAgLSBgdmFsdWVgIGlzIGFueSBsZWdhbCBKYXZhU2NyaXB0IHZhbHVlIChpbmNsdWRpbmcgdW5kZWZpbmVkLCBhIHRoZW5hYmxlLCBvciBhIHByb21pc2UpLlxuICAgICAgLSBgZXhjZXB0aW9uYCBpcyBhIHZhbHVlIHRoYXQgaXMgdGhyb3duIHVzaW5nIHRoZSB0aHJvdyBzdGF0ZW1lbnQuXG4gICAgICAtIGByZWFzb25gIGlzIGEgdmFsdWUgdGhhdCBpbmRpY2F0ZXMgd2h5IGEgcHJvbWlzZSB3YXMgcmVqZWN0ZWQuXG4gICAgICAtIGBzZXR0bGVkYCB0aGUgZmluYWwgcmVzdGluZyBzdGF0ZSBvZiBhIHByb21pc2UsIGZ1bGZpbGxlZCBvciByZWplY3RlZC5cblxuICAgICAgQSBwcm9taXNlIGNhbiBiZSBpbiBvbmUgb2YgdGhyZWUgc3RhdGVzOiBwZW5kaW5nLCBmdWxmaWxsZWQsIG9yIHJlamVjdGVkLlxuXG4gICAgICBQcm9taXNlcyB0aGF0IGFyZSBmdWxmaWxsZWQgaGF2ZSBhIGZ1bGZpbGxtZW50IHZhbHVlIGFuZCBhcmUgaW4gdGhlIGZ1bGZpbGxlZFxuICAgICAgc3RhdGUuICBQcm9taXNlcyB0aGF0IGFyZSByZWplY3RlZCBoYXZlIGEgcmVqZWN0aW9uIHJlYXNvbiBhbmQgYXJlIGluIHRoZVxuICAgICAgcmVqZWN0ZWQgc3RhdGUuICBBIGZ1bGZpbGxtZW50IHZhbHVlIGlzIG5ldmVyIGEgdGhlbmFibGUuXG5cbiAgICAgIFByb21pc2VzIGNhbiBhbHNvIGJlIHNhaWQgdG8gKnJlc29sdmUqIGEgdmFsdWUuICBJZiB0aGlzIHZhbHVlIGlzIGFsc28gYVxuICAgICAgcHJvbWlzZSwgdGhlbiB0aGUgb3JpZ2luYWwgcHJvbWlzZSdzIHNldHRsZWQgc3RhdGUgd2lsbCBtYXRjaCB0aGUgdmFsdWUnc1xuICAgICAgc2V0dGxlZCBzdGF0ZS4gIFNvIGEgcHJvbWlzZSB0aGF0ICpyZXNvbHZlcyogYSBwcm9taXNlIHRoYXQgcmVqZWN0cyB3aWxsXG4gICAgICBpdHNlbGYgcmVqZWN0LCBhbmQgYSBwcm9taXNlIHRoYXQgKnJlc29sdmVzKiBhIHByb21pc2UgdGhhdCBmdWxmaWxscyB3aWxsXG4gICAgICBpdHNlbGYgZnVsZmlsbC5cblxuXG4gICAgICBCYXNpYyBVc2FnZTpcbiAgICAgIC0tLS0tLS0tLS0tLVxuXG4gICAgICBgYGBqc1xuICAgICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgLy8gb24gc3VjY2Vzc1xuICAgICAgICByZXNvbHZlKHZhbHVlKTtcblxuICAgICAgICAvLyBvbiBmYWlsdXJlXG4gICAgICAgIHJlamVjdChyZWFzb24pO1xuICAgICAgfSk7XG5cbiAgICAgIHByb21pc2UudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAvLyBvbiBmdWxmaWxsbWVudFxuICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgIC8vIG9uIHJlamVjdGlvblxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgQWR2YW5jZWQgVXNhZ2U6XG4gICAgICAtLS0tLS0tLS0tLS0tLS1cblxuICAgICAgUHJvbWlzZXMgc2hpbmUgd2hlbiBhYnN0cmFjdGluZyBhd2F5IGFzeW5jaHJvbm91cyBpbnRlcmFjdGlvbnMgc3VjaCBhc1xuICAgICAgYFhNTEh0dHBSZXF1ZXN0YHMuXG5cbiAgICAgIGBgYGpzXG4gICAgICBmdW5jdGlvbiBnZXRKU09OKHVybCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgICAgICB4aHIub3BlbignR0VUJywgdXJsKTtcbiAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gaGFuZGxlcjtcbiAgICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgICAgIHhoci5zZW5kKCk7XG5cbiAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVyKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gdGhpcy5ET05FKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdnZXRKU09OOiBgJyArIHVybCArICdgIGZhaWxlZCB3aXRoIHN0YXR1czogWycgKyB0aGlzLnN0YXR1cyArICddJykpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGdldEpTT04oJy9wb3N0cy5qc29uJykudGhlbihmdW5jdGlvbihqc29uKSB7XG4gICAgICAgIC8vIG9uIGZ1bGZpbGxtZW50XG4gICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgLy8gb24gcmVqZWN0aW9uXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBVbmxpa2UgY2FsbGJhY2tzLCBwcm9taXNlcyBhcmUgZ3JlYXQgY29tcG9zYWJsZSBwcmltaXRpdmVzLlxuXG4gICAgICBgYGBqc1xuICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICBnZXRKU09OKCcvcG9zdHMnKSxcbiAgICAgICAgZ2V0SlNPTignL2NvbW1lbnRzJylcbiAgICAgIF0pLnRoZW4oZnVuY3Rpb24odmFsdWVzKXtcbiAgICAgICAgdmFsdWVzWzBdIC8vID0+IHBvc3RzSlNPTlxuICAgICAgICB2YWx1ZXNbMV0gLy8gPT4gY29tbWVudHNKU09OXG5cbiAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIEBjbGFzcyBQcm9taXNlXG4gICAgICBAcGFyYW0ge2Z1bmN0aW9ufSByZXNvbHZlclxuICAgICAgVXNlZnVsIGZvciB0b29saW5nLlxuICAgICAgQGNvbnN0cnVjdG9yXG4gICAgKi9cbiAgICBmdW5jdGlvbiAkJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UocmVzb2x2ZXIpIHtcbiAgICAgIHRoaXMuX2lkID0gJCRlczYkcHJvbWlzZSRwcm9taXNlJCRjb3VudGVyKys7XG4gICAgICB0aGlzLl9zdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3Jlc3VsdCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3N1YnNjcmliZXJzID0gW107XG5cbiAgICAgIGlmICgkJCRpbnRlcm5hbCQkbm9vcCAhPT0gcmVzb2x2ZXIpIHtcbiAgICAgICAgaWYgKCEkJHV0aWxzJCRpc0Z1bmN0aW9uKHJlc29sdmVyKSkge1xuICAgICAgICAgICQkZXM2JHByb21pc2UkcHJvbWlzZSQkbmVlZHNSZXNvbHZlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mICQkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZSkpIHtcbiAgICAgICAgICAkJGVzNiRwcm9taXNlJHByb21pc2UkJG5lZWRzTmV3KCk7XG4gICAgICAgIH1cblxuICAgICAgICAkJCRpbnRlcm5hbCQkaW5pdGlhbGl6ZVByb21pc2UodGhpcywgcmVzb2x2ZXIpO1xuICAgICAgfVxuICAgIH1cblxuICAgICQkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZS5hbGwgPSAkJHByb21pc2UkYWxsJCRkZWZhdWx0O1xuICAgICQkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZS5yYWNlID0gJCRwcm9taXNlJHJhY2UkJGRlZmF1bHQ7XG4gICAgJCRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlLnJlc29sdmUgPSAkJHByb21pc2UkcmVzb2x2ZSQkZGVmYXVsdDtcbiAgICAkJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UucmVqZWN0ID0gJCRwcm9taXNlJHJlamVjdCQkZGVmYXVsdDtcblxuICAgICQkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZS5wcm90b3R5cGUgPSB7XG4gICAgICBjb25zdHJ1Y3RvcjogJCRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlLFxuXG4gICAgLyoqXG4gICAgICBUaGUgcHJpbWFyeSB3YXkgb2YgaW50ZXJhY3Rpbmcgd2l0aCBhIHByb21pc2UgaXMgdGhyb3VnaCBpdHMgYHRoZW5gIG1ldGhvZCxcbiAgICAgIHdoaWNoIHJlZ2lzdGVycyBjYWxsYmFja3MgdG8gcmVjZWl2ZSBlaXRoZXIgYSBwcm9taXNlJ3MgZXZlbnR1YWwgdmFsdWUgb3IgdGhlXG4gICAgICByZWFzb24gd2h5IHRoZSBwcm9taXNlIGNhbm5vdCBiZSBmdWxmaWxsZWQuXG5cbiAgICAgIGBgYGpzXG4gICAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24odXNlcil7XG4gICAgICAgIC8vIHVzZXIgaXMgYXZhaWxhYmxlXG4gICAgICB9LCBmdW5jdGlvbihyZWFzb24pe1xuICAgICAgICAvLyB1c2VyIGlzIHVuYXZhaWxhYmxlLCBhbmQgeW91IGFyZSBnaXZlbiB0aGUgcmVhc29uIHdoeVxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgQ2hhaW5pbmdcbiAgICAgIC0tLS0tLS0tXG5cbiAgICAgIFRoZSByZXR1cm4gdmFsdWUgb2YgYHRoZW5gIGlzIGl0c2VsZiBhIHByb21pc2UuICBUaGlzIHNlY29uZCwgJ2Rvd25zdHJlYW0nXG4gICAgICBwcm9taXNlIGlzIHJlc29sdmVkIHdpdGggdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZmlyc3QgcHJvbWlzZSdzIGZ1bGZpbGxtZW50XG4gICAgICBvciByZWplY3Rpb24gaGFuZGxlciwgb3IgcmVqZWN0ZWQgaWYgdGhlIGhhbmRsZXIgdGhyb3dzIGFuIGV4Y2VwdGlvbi5cblxuICAgICAgYGBganNcbiAgICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgICByZXR1cm4gdXNlci5uYW1lO1xuICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICByZXR1cm4gJ2RlZmF1bHQgbmFtZSc7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICh1c2VyTmFtZSkge1xuICAgICAgICAvLyBJZiBgZmluZFVzZXJgIGZ1bGZpbGxlZCwgYHVzZXJOYW1lYCB3aWxsIGJlIHRoZSB1c2VyJ3MgbmFtZSwgb3RoZXJ3aXNlIGl0XG4gICAgICAgIC8vIHdpbGwgYmUgYCdkZWZhdWx0IG5hbWUnYFxuICAgICAgfSk7XG5cbiAgICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZvdW5kIHVzZXIsIGJ1dCBzdGlsbCB1bmhhcHB5Jyk7XG4gICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYGZpbmRVc2VyYCByZWplY3RlZCBhbmQgd2UncmUgdW5oYXBweScpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgLy8gbmV2ZXIgcmVhY2hlZFxuICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAvLyBpZiBgZmluZFVzZXJgIGZ1bGZpbGxlZCwgYHJlYXNvbmAgd2lsbCBiZSAnRm91bmQgdXNlciwgYnV0IHN0aWxsIHVuaGFwcHknLlxuICAgICAgICAvLyBJZiBgZmluZFVzZXJgIHJlamVjdGVkLCBgcmVhc29uYCB3aWxsIGJlICdgZmluZFVzZXJgIHJlamVjdGVkIGFuZCB3ZSdyZSB1bmhhcHB5Jy5cbiAgICAgIH0pO1xuICAgICAgYGBgXG4gICAgICBJZiB0aGUgZG93bnN0cmVhbSBwcm9taXNlIGRvZXMgbm90IHNwZWNpZnkgYSByZWplY3Rpb24gaGFuZGxlciwgcmVqZWN0aW9uIHJlYXNvbnMgd2lsbCBiZSBwcm9wYWdhdGVkIGZ1cnRoZXIgZG93bnN0cmVhbS5cblxuICAgICAgYGBganNcbiAgICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgICB0aHJvdyBuZXcgUGVkYWdvZ2ljYWxFeGNlcHRpb24oJ1Vwc3RyZWFtIGVycm9yJyk7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAvLyBuZXZlciByZWFjaGVkXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAvLyBuZXZlciByZWFjaGVkXG4gICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIC8vIFRoZSBgUGVkZ2Fnb2NpYWxFeGNlcHRpb25gIGlzIHByb3BhZ2F0ZWQgYWxsIHRoZSB3YXkgZG93biB0byBoZXJlXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBBc3NpbWlsYXRpb25cbiAgICAgIC0tLS0tLS0tLS0tLVxuXG4gICAgICBTb21ldGltZXMgdGhlIHZhbHVlIHlvdSB3YW50IHRvIHByb3BhZ2F0ZSB0byBhIGRvd25zdHJlYW0gcHJvbWlzZSBjYW4gb25seSBiZVxuICAgICAgcmV0cmlldmVkIGFzeW5jaHJvbm91c2x5LiBUaGlzIGNhbiBiZSBhY2hpZXZlZCBieSByZXR1cm5pbmcgYSBwcm9taXNlIGluIHRoZVxuICAgICAgZnVsZmlsbG1lbnQgb3IgcmVqZWN0aW9uIGhhbmRsZXIuIFRoZSBkb3duc3RyZWFtIHByb21pc2Ugd2lsbCB0aGVuIGJlIHBlbmRpbmdcbiAgICAgIHVudGlsIHRoZSByZXR1cm5lZCBwcm9taXNlIGlzIHNldHRsZWQuIFRoaXMgaXMgY2FsbGVkICphc3NpbWlsYXRpb24qLlxuXG4gICAgICBgYGBqc1xuICAgICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAgIHJldHVybiBmaW5kQ29tbWVudHNCeUF1dGhvcih1c2VyKTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGNvbW1lbnRzKSB7XG4gICAgICAgIC8vIFRoZSB1c2VyJ3MgY29tbWVudHMgYXJlIG5vdyBhdmFpbGFibGVcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIElmIHRoZSBhc3NpbWxpYXRlZCBwcm9taXNlIHJlamVjdHMsIHRoZW4gdGhlIGRvd25zdHJlYW0gcHJvbWlzZSB3aWxsIGFsc28gcmVqZWN0LlxuXG4gICAgICBgYGBqc1xuICAgICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAgIHJldHVybiBmaW5kQ29tbWVudHNCeUF1dGhvcih1c2VyKTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGNvbW1lbnRzKSB7XG4gICAgICAgIC8vIElmIGBmaW5kQ29tbWVudHNCeUF1dGhvcmAgZnVsZmlsbHMsIHdlJ2xsIGhhdmUgdGhlIHZhbHVlIGhlcmVcbiAgICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgLy8gSWYgYGZpbmRDb21tZW50c0J5QXV0aG9yYCByZWplY3RzLCB3ZSdsbCBoYXZlIHRoZSByZWFzb24gaGVyZVxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgU2ltcGxlIEV4YW1wbGVcbiAgICAgIC0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIFN5bmNocm9ub3VzIEV4YW1wbGVcblxuICAgICAgYGBgamF2YXNjcmlwdFxuICAgICAgdmFyIHJlc3VsdDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzdWx0ID0gZmluZFJlc3VsdCgpO1xuICAgICAgICAvLyBzdWNjZXNzXG4gICAgICB9IGNhdGNoKHJlYXNvbikge1xuICAgICAgICAvLyBmYWlsdXJlXG4gICAgICB9XG4gICAgICBgYGBcblxuICAgICAgRXJyYmFjayBFeGFtcGxlXG5cbiAgICAgIGBgYGpzXG4gICAgICBmaW5kUmVzdWx0KGZ1bmN0aW9uKHJlc3VsdCwgZXJyKXtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIC8vIGZhaWx1cmVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBzdWNjZXNzXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIFByb21pc2UgRXhhbXBsZTtcblxuICAgICAgYGBgamF2YXNjcmlwdFxuICAgICAgZmluZFJlc3VsdCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcbiAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKXtcbiAgICAgICAgLy8gZmFpbHVyZVxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgQWR2YW5jZWQgRXhhbXBsZVxuICAgICAgLS0tLS0tLS0tLS0tLS1cblxuICAgICAgU3luY2hyb25vdXMgRXhhbXBsZVxuXG4gICAgICBgYGBqYXZhc2NyaXB0XG4gICAgICB2YXIgYXV0aG9yLCBib29rcztcblxuICAgICAgdHJ5IHtcbiAgICAgICAgYXV0aG9yID0gZmluZEF1dGhvcigpO1xuICAgICAgICBib29rcyAgPSBmaW5kQm9va3NCeUF1dGhvcihhdXRob3IpO1xuICAgICAgICAvLyBzdWNjZXNzXG4gICAgICB9IGNhdGNoKHJlYXNvbikge1xuICAgICAgICAvLyBmYWlsdXJlXG4gICAgICB9XG4gICAgICBgYGBcblxuICAgICAgRXJyYmFjayBFeGFtcGxlXG5cbiAgICAgIGBgYGpzXG5cbiAgICAgIGZ1bmN0aW9uIGZvdW5kQm9va3MoYm9va3MpIHtcblxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBmYWlsdXJlKHJlYXNvbikge1xuXG4gICAgICB9XG5cbiAgICAgIGZpbmRBdXRob3IoZnVuY3Rpb24oYXV0aG9yLCBlcnIpe1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgZmFpbHVyZShlcnIpO1xuICAgICAgICAgIC8vIGZhaWx1cmVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgZmluZEJvb29rc0J5QXV0aG9yKGF1dGhvciwgZnVuY3Rpb24oYm9va3MsIGVycikge1xuICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgZmFpbHVyZShlcnIpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICBmb3VuZEJvb2tzKGJvb2tzKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoKHJlYXNvbikge1xuICAgICAgICAgICAgICAgICAgZmFpbHVyZShyZWFzb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgZmFpbHVyZShlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBzdWNjZXNzXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIFByb21pc2UgRXhhbXBsZTtcblxuICAgICAgYGBgamF2YXNjcmlwdFxuICAgICAgZmluZEF1dGhvcigpLlxuICAgICAgICB0aGVuKGZpbmRCb29rc0J5QXV0aG9yKS5cbiAgICAgICAgdGhlbihmdW5jdGlvbihib29rcyl7XG4gICAgICAgICAgLy8gZm91bmQgYm9va3NcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgICAgIC8vIHNvbWV0aGluZyB3ZW50IHdyb25nXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBAbWV0aG9kIHRoZW5cbiAgICAgIEBwYXJhbSB7RnVuY3Rpb259IG9uRnVsZmlsbGVkXG4gICAgICBAcGFyYW0ge0Z1bmN0aW9ufSBvblJlamVjdGVkXG4gICAgICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gICAgICBAcmV0dXJuIHtQcm9taXNlfVxuICAgICovXG4gICAgICB0aGVuOiBmdW5jdGlvbihvbkZ1bGZpbGxtZW50LCBvblJlamVjdGlvbikge1xuICAgICAgICB2YXIgcGFyZW50ID0gdGhpcztcbiAgICAgICAgdmFyIHN0YXRlID0gcGFyZW50Ll9zdGF0ZTtcblxuICAgICAgICBpZiAoc3RhdGUgPT09ICQkJGludGVybmFsJCRGVUxGSUxMRUQgJiYgIW9uRnVsZmlsbG1lbnQgfHwgc3RhdGUgPT09ICQkJGludGVybmFsJCRSRUpFQ1RFRCAmJiAhb25SZWplY3Rpb24pIHtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjaGlsZCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKCQkJGludGVybmFsJCRub29wKTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHBhcmVudC5fcmVzdWx0O1xuXG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50c1tzdGF0ZSAtIDFdO1xuICAgICAgICAgICQkYXNhcCQkZGVmYXVsdChmdW5jdGlvbigpe1xuICAgICAgICAgICAgJCQkaW50ZXJuYWwkJGludm9rZUNhbGxiYWNrKHN0YXRlLCBjaGlsZCwgY2FsbGJhY2ssIHJlc3VsdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJCQkaW50ZXJuYWwkJHN1YnNjcmliZShwYXJlbnQsIGNoaWxkLCBvbkZ1bGZpbGxtZW50LCBvblJlamVjdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICB9LFxuXG4gICAgLyoqXG4gICAgICBgY2F0Y2hgIGlzIHNpbXBseSBzdWdhciBmb3IgYHRoZW4odW5kZWZpbmVkLCBvblJlamVjdGlvbilgIHdoaWNoIG1ha2VzIGl0IHRoZSBzYW1lXG4gICAgICBhcyB0aGUgY2F0Y2ggYmxvY2sgb2YgYSB0cnkvY2F0Y2ggc3RhdGVtZW50LlxuXG4gICAgICBgYGBqc1xuICAgICAgZnVuY3Rpb24gZmluZEF1dGhvcigpe1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkbid0IGZpbmQgdGhhdCBhdXRob3InKTtcbiAgICAgIH1cblxuICAgICAgLy8gc3luY2hyb25vdXNcbiAgICAgIHRyeSB7XG4gICAgICAgIGZpbmRBdXRob3IoKTtcbiAgICAgIH0gY2F0Y2gocmVhc29uKSB7XG4gICAgICAgIC8vIHNvbWV0aGluZyB3ZW50IHdyb25nXG4gICAgICB9XG5cbiAgICAgIC8vIGFzeW5jIHdpdGggcHJvbWlzZXNcbiAgICAgIGZpbmRBdXRob3IoKS5jYXRjaChmdW5jdGlvbihyZWFzb24pe1xuICAgICAgICAvLyBzb21ldGhpbmcgd2VudCB3cm9uZ1xuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgQG1ldGhvZCBjYXRjaFxuICAgICAgQHBhcmFtIHtGdW5jdGlvbn0gb25SZWplY3Rpb25cbiAgICAgIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgICAgIEByZXR1cm4ge1Byb21pc2V9XG4gICAgKi9cbiAgICAgICdjYXRjaCc6IGZ1bmN0aW9uKG9uUmVqZWN0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRoZW4obnVsbCwgb25SZWplY3Rpb24pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgJCRlczYkcHJvbWlzZSRwb2x5ZmlsbCQkZGVmYXVsdCA9IGZ1bmN0aW9uIHBvbHlmaWxsKCkge1xuICAgICAgdmFyIGxvY2FsO1xuXG4gICAgICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbG9jYWwgPSBnbG9iYWw7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgICBsb2NhbCA9IHdpbmRvdztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2FsID0gc2VsZjtcbiAgICAgIH1cblxuICAgICAgdmFyIGVzNlByb21pc2VTdXBwb3J0ID1cbiAgICAgICAgXCJQcm9taXNlXCIgaW4gbG9jYWwgJiZcbiAgICAgICAgLy8gU29tZSBvZiB0aGVzZSBtZXRob2RzIGFyZSBtaXNzaW5nIGZyb21cbiAgICAgICAgLy8gRmlyZWZveC9DaHJvbWUgZXhwZXJpbWVudGFsIGltcGxlbWVudGF0aW9uc1xuICAgICAgICBcInJlc29sdmVcIiBpbiBsb2NhbC5Qcm9taXNlICYmXG4gICAgICAgIFwicmVqZWN0XCIgaW4gbG9jYWwuUHJvbWlzZSAmJlxuICAgICAgICBcImFsbFwiIGluIGxvY2FsLlByb21pc2UgJiZcbiAgICAgICAgXCJyYWNlXCIgaW4gbG9jYWwuUHJvbWlzZSAmJlxuICAgICAgICAvLyBPbGRlciB2ZXJzaW9uIG9mIHRoZSBzcGVjIGhhZCBhIHJlc29sdmVyIG9iamVjdFxuICAgICAgICAvLyBhcyB0aGUgYXJnIHJhdGhlciB0aGFuIGEgZnVuY3Rpb25cbiAgICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciByZXNvbHZlO1xuICAgICAgICAgIG5ldyBsb2NhbC5Qcm9taXNlKGZ1bmN0aW9uKHIpIHsgcmVzb2x2ZSA9IHI7IH0pO1xuICAgICAgICAgIHJldHVybiAkJHV0aWxzJCRpc0Z1bmN0aW9uKHJlc29sdmUpO1xuICAgICAgICB9KCkpO1xuXG4gICAgICBpZiAoIWVzNlByb21pc2VTdXBwb3J0KSB7XG4gICAgICAgIGxvY2FsLlByb21pc2UgPSAkJGVzNiRwcm9taXNlJHByb21pc2UkJGRlZmF1bHQ7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBlczYkcHJvbWlzZSR1bWQkJEVTNlByb21pc2UgPSB7XG4gICAgICAnUHJvbWlzZSc6ICQkZXM2JHByb21pc2UkcHJvbWlzZSQkZGVmYXVsdCxcbiAgICAgICdwb2x5ZmlsbCc6ICQkZXM2JHByb21pc2UkcG9seWZpbGwkJGRlZmF1bHRcbiAgICB9O1xuXG4gICAgLyogZ2xvYmFsIGRlZmluZTp0cnVlIG1vZHVsZTp0cnVlIHdpbmRvdzogdHJ1ZSAqL1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZVsnYW1kJ10pIHtcbiAgICAgIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIGVzNiRwcm9taXNlJHVtZCQkRVM2UHJvbWlzZTsgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGVbJ2V4cG9ydHMnXSkge1xuICAgICAgbW9kdWxlWydleHBvcnRzJ10gPSBlczYkcHJvbWlzZSR1bWQkJEVTNlByb21pc2U7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXNbJ0VTNlByb21pc2UnXSA9IGVzNiRwcm9taXNlJHVtZCQkRVM2UHJvbWlzZTtcbiAgICB9XG59KS5jYWxsKHRoaXMpO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoJ19wcm9jZXNzJyksdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSkiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5wcm9jZXNzLm5leHRUaWNrID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2FuU2V0SW1tZWRpYXRlID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiB3aW5kb3cuc2V0SW1tZWRpYXRlO1xuICAgIHZhciBjYW5NdXRhdGlvbk9ic2VydmVyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiB3aW5kb3cuTXV0YXRpb25PYnNlcnZlcjtcbiAgICB2YXIgY2FuUG9zdCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnBvc3RNZXNzYWdlICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyXG4gICAgO1xuXG4gICAgaWYgKGNhblNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGYpIHsgcmV0dXJuIHdpbmRvdy5zZXRJbW1lZGlhdGUoZikgfTtcbiAgICB9XG5cbiAgICB2YXIgcXVldWUgPSBbXTtcblxuICAgIGlmIChjYW5NdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgICAgIHZhciBoaWRkZW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcXVldWVMaXN0ID0gcXVldWUuc2xpY2UoKTtcbiAgICAgICAgICAgIHF1ZXVlLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICBxdWV1ZUxpc3QuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoaGlkZGVuRGl2LCB7IGF0dHJpYnV0ZXM6IHRydWUgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgICAgICBpZiAoIXF1ZXVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGhpZGRlbkRpdi5zZXRBdHRyaWJ1dGUoJ3llcycsICdubycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcXVldWUucHVzaChmbik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGNhblBvc3QpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIHZhciBzb3VyY2UgPSBldi5zb3VyY2U7XG4gICAgICAgICAgICBpZiAoKHNvdXJjZSA9PT0gd2luZG93IHx8IHNvdXJjZSA9PT0gbnVsbCkgJiYgZXYuZGF0YSA9PT0gJ3Byb2Nlc3MtdGljaycpIHtcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBpZiAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm4gPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKGZuKTtcbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSgncHJvY2Vzcy10aWNrJywgJyonKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgc2V0VGltZW91dChmbiwgMCk7XG4gICAgfTtcbn0pKCk7XG5cbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxuLy8gVE9ETyhzaHR5bG1hbilcbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuIiwiLypqc2xpbnQgbm9kZTp0cnVlKi9cbi8qZ2xvYmFscyBSVENQZWVyQ29ubmVjdGlvbiwgbW96UlRDUGVlckNvbm5lY3Rpb24sIHdlYmtpdFJUQ1BlZXJDb25uZWN0aW9uICovXG4vKmdsb2JhbHMgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uLCBtb3pSVENTZXNzaW9uRGVzY3JpcHRpb24gKi9cbi8qZ2xvYmFscyBSVENJY2VDYW5kaWRhdGUsIG1velJUQ0ljZUNhbmRpZGF0ZSAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgbXlSVENQZWVyQ29ubmVjdGlvbiA9IG51bGw7XG52YXIgbXlSVENTZXNzaW9uRGVzY3JpcHRpb24gPSBudWxsO1xudmFyIG15UlRDSWNlQ2FuZGlkYXRlID0gbnVsbDtcblxudmFyIHJlbmFtZUljZVVSTHMgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIGlmICghY29uZmlnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICghY29uZmlnLmljZVNlcnZlcnMpIHtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG4gIGNvbmZpZy5pY2VTZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gKHNlcnZlcikge1xuICAgIHNlcnZlci51cmwgPSBzZXJ2ZXIudXJscztcbiAgICBkZWxldGUgc2VydmVyLnVybHM7XG4gIH0pO1xuICByZXR1cm4gY29uZmlnO1xufTtcblxudmFyIGZpeENocm9tZVN0YXRzUmVzcG9uc2UgPSBmdW5jdGlvbihyZXNwb25zZSkge1xuICB2YXIgc3RhbmRhcmRSZXBvcnQgPSB7fTtcbiAgdmFyIHJlcG9ydHMgPSByZXNwb25zZS5yZXN1bHQoKTtcbiAgcmVwb3J0cy5mb3JFYWNoKGZ1bmN0aW9uKHJlcG9ydCkge1xuICAgIHZhciBzdGFuZGFyZFN0YXRzID0ge1xuICAgICAgaWQ6IHJlcG9ydC5pZCxcbiAgICAgIHRpbWVzdGFtcDogcmVwb3J0LnRpbWVzdGFtcCxcbiAgICAgIHR5cGU6IHJlcG9ydC50eXBlXG4gICAgfTtcbiAgICByZXBvcnQubmFtZXMoKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIHN0YW5kYXJkU3RhdHNbbmFtZV0gPSByZXBvcnQuc3RhdChuYW1lKTtcbiAgICB9KTtcbiAgICBzdGFuZGFyZFJlcG9ydFtzdGFuZGFyZFN0YXRzLmlkXSA9IHN0YW5kYXJkU3RhdHM7XG4gIH0pO1xuXG4gIHJldHVybiBzdGFuZGFyZFJlcG9ydDtcbn07XG5cbnZhciBzZXNzaW9uSGFzRGF0YSA9IGZ1bmN0aW9uKGRlc2MpIHtcbiAgaWYgKCFkZXNjKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBoYXNEYXRhID0gZmFsc2U7XG4gIHZhciBwcmVmaXggPSAnbT1hcHBsaWNhdGlvbic7XG4gIGRlc2Muc2RwLnNwbGl0KCdcXG4nKS5mb3JFYWNoKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICBpZiAobGluZS5zbGljZSgwLCBwcmVmaXgubGVuZ3RoKSA9PT0gcHJlZml4KSB7XG4gICAgICBoYXNEYXRhID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gaGFzRGF0YTtcbn07XG5cbi8vIFVuaWZ5IFBlZXJDb25uZWN0aW9uIE9iamVjdC5cbmlmICh0eXBlb2YgUlRDUGVlckNvbm5lY3Rpb24gIT09ICd1bmRlZmluZWQnKSB7XG4gIG15UlRDUGVlckNvbm5lY3Rpb24gPSBSVENQZWVyQ29ubmVjdGlvbjtcbn0gZWxzZSBpZiAodHlwZW9mIG1velJUQ1BlZXJDb25uZWN0aW9uICE9PSAndW5kZWZpbmVkJykge1xuICBteVJUQ1BlZXJDb25uZWN0aW9uID0gZnVuY3Rpb24gKGNvbmZpZ3VyYXRpb24sIGNvbnN0cmFpbnRzKSB7XG4gICAgLy8gRmlyZWZveCB1c2VzICd1cmwnIHJhdGhlciB0aGFuICd1cmxzJyBmb3IgUlRDSWNlU2VydmVyLnVybHNcbiAgICB2YXIgcGMgPSBuZXcgbW96UlRDUGVlckNvbm5lY3Rpb24ocmVuYW1lSWNlVVJMcyhjb25maWd1cmF0aW9uKSwgY29uc3RyYWludHMpO1xuXG4gICAgLy8gRmlyZWZveCBkb2Vzbid0IGZpcmUgJ29ubmVnb3RpYXRpb25uZWVkZWQnIHdoZW4gYSBkYXRhIGNoYW5uZWwgaXMgY3JlYXRlZFxuICAgIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTg0MDcyOFxuICAgIHZhciBkYXRhRW5hYmxlZCA9IGZhbHNlO1xuICAgIHZhciBib3VuZENyZWF0ZURhdGFDaGFubmVsID0gcGMuY3JlYXRlRGF0YUNoYW5uZWwuYmluZChwYyk7XG4gICAgcGMuY3JlYXRlRGF0YUNoYW5uZWwgPSBmdW5jdGlvbihsYWJlbCwgZGF0YUNoYW5uZWxEaWN0KSB7XG4gICAgICB2YXIgZGMgPSBib3VuZENyZWF0ZURhdGFDaGFubmVsKGxhYmVsLCBkYXRhQ2hhbm5lbERpY3QpO1xuICAgICAgaWYgKCFkYXRhRW5hYmxlZCkge1xuICAgICAgICBkYXRhRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIGlmIChwYy5vbm5lZ290aWF0aW9ubmVlZGVkICYmXG4gICAgICAgICAgICAhc2Vzc2lvbkhhc0RhdGEocGMubG9jYWxEZXNjcmlwdGlvbikgJiZcbiAgICAgICAgICAgICFzZXNzaW9uSGFzRGF0YShwYy5yZW1vdGVEZXNjcmlwdGlvbikpIHtcbiAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ25lZ290aWF0aW9ubmVlZGVkJyk7XG4gICAgICAgICAgcGMub25uZWdvdGlhdGlvbm5lZWRlZChldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBkYztcbiAgICB9O1xuXG4gICAgcmV0dXJuIHBjO1xuICB9O1xufSBlbHNlIGlmICh0eXBlb2Ygd2Via2l0UlRDUGVlckNvbm5lY3Rpb24gIT09ICd1bmRlZmluZWQnKSB7XG4gIC8vIENocm9tZSByZXR1cm5zIGEgbm9uc3RhbmRhcmQsIG5vbi1KU09OLWlmaWFibGUgcmVzcG9uc2UgZnJvbSBnZXRTdGF0cy5cbiAgbXlSVENQZWVyQ29ubmVjdGlvbiA9IGZ1bmN0aW9uKGNvbmZpZ3VyYXRpb24sIGNvbnN0cmFpbnRzKSB7XG4gICAgdmFyIHBjID0gbmV3IHdlYmtpdFJUQ1BlZXJDb25uZWN0aW9uKGNvbmZpZ3VyYXRpb24sIGNvbnN0cmFpbnRzKTtcbiAgICB2YXIgYm91bmRHZXRTdGF0cyA9IHBjLmdldFN0YXRzLmJpbmQocGMpO1xuICAgIHBjLmdldFN0YXRzID0gZnVuY3Rpb24oc2VsZWN0b3IsIHN1Y2Nlc3NDYWxsYmFjaywgZmFpbHVyZUNhbGxiYWNrKSB7XG4gICAgICB2YXIgc3VjY2Vzc0NhbGxiYWNrV3JhcHBlciA9IGZ1bmN0aW9uKGNocm9tZVN0YXRzUmVzcG9uc2UpIHtcbiAgICAgICAgc3VjY2Vzc0NhbGxiYWNrKGZpeENocm9tZVN0YXRzUmVzcG9uc2UoY2hyb21lU3RhdHNSZXNwb25zZSkpO1xuICAgICAgfTtcbiAgICAgIC8vIENocm9tZSBhbHNvIHRha2VzIGl0cyBhcmd1bWVudHMgaW4gdGhlIHdyb25nIG9yZGVyLlxuICAgICAgYm91bmRHZXRTdGF0cyhzdWNjZXNzQ2FsbGJhY2tXcmFwcGVyLCBmYWlsdXJlQ2FsbGJhY2ssIHNlbGVjdG9yKTtcbiAgICB9O1xuICAgIHJldHVybiBwYztcbiAgfTtcbn1cblxuLy8gVW5pZnkgU2Vzc2lvbkRlc2NycHRpb24gT2JqZWN0LlxuaWYgKHR5cGVvZiBSVENTZXNzaW9uRGVzY3JpcHRpb24gIT09ICd1bmRlZmluZWQnKSB7XG4gIG15UlRDU2Vzc2lvbkRlc2NyaXB0aW9uID0gUlRDU2Vzc2lvbkRlc2NyaXB0aW9uO1xufSBlbHNlIGlmICh0eXBlb2YgbW96UlRDU2Vzc2lvbkRlc2NyaXB0aW9uICE9PSAndW5kZWZpbmVkJykge1xuICBteVJUQ1Nlc3Npb25EZXNjcmlwdGlvbiA9IG1velJUQ1Nlc3Npb25EZXNjcmlwdGlvbjtcbn1cblxuLy8gVW5pZnkgSWNlQ2FuZGlkYXRlIE9iamVjdC5cbmlmICh0eXBlb2YgUlRDSWNlQ2FuZGlkYXRlICE9PSAndW5kZWZpbmVkJykge1xuICBteVJUQ0ljZUNhbmRpZGF0ZSA9IFJUQ0ljZUNhbmRpZGF0ZTtcbn0gZWxzZSBpZiAodHlwZW9mIG1velJUQ0ljZUNhbmRpZGF0ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgbXlSVENJY2VDYW5kaWRhdGUgPSBtb3pSVENJY2VDYW5kaWRhdGU7XG59XG5cbmV4cG9ydHMuUlRDUGVlckNvbm5lY3Rpb24gPSBteVJUQ1BlZXJDb25uZWN0aW9uO1xuZXhwb3J0cy5SVENTZXNzaW9uRGVzY3JpcHRpb24gPSBteVJUQ1Nlc3Npb25EZXNjcmlwdGlvbjtcbmV4cG9ydHMuUlRDSWNlQ2FuZGlkYXRlID0gbXlSVENJY2VDYW5kaWRhdGU7XG4iLCIoZnVuY3Rpb24gKHByb2Nlc3Mpe1xuLypnbG9iYWxzIHByb2Nlc3MsIGNvbnNvbGUgKi9cbi8qanNsaW50IGluZGVudDoyLHNsb3BweTp0cnVlLCBub2RlOnRydWUgKi9cbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vLi4vc3JjL3V0aWwnKTtcblxuLyoqXG4gKiBBIGZyZWVkb20uanMgbG9nZ2luZyBwcm92aWRlciB0aGF0IGxvZ3MgdG8gY2hyb21lLCBmaXJlZm94LCBhbmQgbm9kZSBjb25zb2xlcy5cbiAqIEBDbGFzcyBMb2dnZXJfY29uc29sZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtjb25maWc6IE9iamVjdH0gY2FwIENhcGFiaWxpdGllcyAtIGNvbnNvbGUgcmVxdWlyZXMgZ2xvYmFsIGNvbmZpZy5cbiAqL1xudmFyIExvZ2dlcl9jb25zb2xlID0gZnVuY3Rpb24gKGNhcCkge1xuICB0aGlzLmxldmVsID0gKGNhcC5jb25maWcgJiYgY2FwLmNvbmZpZy5kZWJ1ZykgfHwgJ2xvZyc7XG4gIHRoaXMuY29uc29sZSA9IChjYXAuY29uZmlnICYmIGNhcC5jb25maWcuZ2xvYmFsLmNvbnNvbGUpO1xuICB1dGlsLmhhbmRsZUV2ZW50cyh0aGlzKTtcbn07XG5cblxuLyoqXG4gKiBMb2dnaW5nIGxldmVscywgZm9yIGZpbHRlcmluZyBvdXRwdXQuXG4gKiBAcHJpdmF0ZVxuICogQHN0YXRpY1xuICovXG5Mb2dnZXJfY29uc29sZS5sZXZlbCA9IHtcbiAgXCJkZWJ1Z1wiOiAwLFxuICBcImluZm9cIjogMSxcbiAgXCJsb2dcIjogMixcbiAgXCJ3YXJuXCI6IDMsXG4gIFwiZXJyb3JcIjogNFxufTtcblxuLyoqXG4gKiBQcmludCBhIG1lc3NhZ2Ugd2l0aCBhcHByb3ByaWF0ZSBmb3JtYXR0aW5nLlxuICogQG1ldGhvZCBwcmludFxuICovXG5Mb2dnZXJfY29uc29sZS5wcm90b3R5cGUucHJpbnQgPSBmdW5jdGlvbiAoc2V2ZXJpdHksIHNvdXJjZSwgbXNnKSB7XG4gIHZhciBhcnIgPSBtc2c7XG4gIGlmICh0eXBlb2YgdGhpcy5jb25zb2xlID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgdGhpcy5jb25zb2xlLmZyZWVkb20gPT09IHRydWUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHR5cGVvZiBhcnIgPT09ICdzdHJpbmcnKSB7XG4gICAgYXJyID0gW2Fycl07XG4gIH1cbiAgXG4gIGlmIChMb2dnZXJfY29uc29sZS5sZXZlbFt0aGlzLmxldmVsXSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBMb2dnZXJfY29uc29sZS5sZXZlbFtzZXZlcml0eV0gPCBMb2dnZXJfY29uc29sZS5sZXZlbFt0aGlzLmxldmVsXSkge1xuICAgIHJldHVybjtcbiAgfVxuICBcbiAgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAge30udG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nICYmIHNvdXJjZSkge1xuICAgIGFyci51bnNoaWZ0KCdcXHgxQlszOW0nKTtcbiAgICBhcnIudW5zaGlmdCgnXFx4MUJbMzFtJyArIHNvdXJjZSk7XG4gICAgLypqc2xpbnQgbm9tZW46IHRydWUqL1xuICAgIC8vIEZpcmVmb3ggaW4gSlNNIGNvbnRleHQuXG4gICAgLy8gc2VlOiBodHRwOi8vbXhyLm1vemlsbGEub3JnL21vemlsbGEtcmVsZWFzZS9zb3VyY2UvdG9vbGtpdC9kZXZ0b29scy9Db25zb2xlLmpzbVxuICAgIH0gZWxzZSBpZiAodGhpcy5jb25zb2xlLm1heExvZ0xldmVsICYmIHNvdXJjZSkge1xuICAgICAgaWYgKCF0aGlzLmNvbnNvbGUuZnJlZWRvbUR1bXApIHtcbiAgICAgICAgdGhpcy5jb25zb2xlLmZyZWVkb21EdW1wID0gdGhpcy5jb25zb2xlLmR1bXA7XG4gICAgICAgIHRoaXMuY29uc29sZS5kdW1wID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY29uc29sZS5mcmVlZG9tRHVtcCgneycgKyBzb3VyY2UgKyAnfS4nICsgc2V2ZXJpdHkgKyAnOiAnICtcbiAgICAgICAgICBhcnIuam9pbignICcpICsgJ1xcbicpO1xuICAgICAgYXJyLnVuc2hpZnQoc291cmNlLnRvVXBwZXJDYXNlKCkpO1xuICAvLyBGaXJlZm94IGluIGJyb3dzZXIgY29udGV4dC5cbiAgfSBlbHNlIGlmICh0aGlzLmNvbnNvbGUuX19tb3ppbGxhQ29uc29sZV9fICYmIHNvdXJjZSkge1xuICAgIGFyci51bnNoaWZ0KHNvdXJjZS50b1VwcGVyQ2FzZSgpKTtcbiAgICAvKmpzbGludCBub21lbjogZmFsc2UqL1xuICB9IGVsc2UgaWYgKHNvdXJjZSkge1xuICAgIGFyci51bnNoaWZ0KCdjb2xvcjogcmVkJyk7XG4gICAgYXJyLnVuc2hpZnQoJyVjICcgKyBzb3VyY2UpO1xuICB9XG4gIGlmICghdGhpcy5jb25zb2xlW3NldmVyaXR5XSAmJiB0aGlzLmNvbnNvbGUubG9nKSB7XG4gICAgc2V2ZXJpdHkgPSAnbG9nJztcbiAgfVxuICB0aGlzLmNvbnNvbGVbc2V2ZXJpdHldLmFwcGx5KHRoaXMuY29uc29sZSwgYXJyKTtcbn07XG5cbi8qKlxuICogTG9nIGEgbWVzc2FnZSB0byB0aGUgY29uc29sZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBzb3VyY2UgVGhlIHNvdXJjZSBvZiB0aGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBtc2cgVGhlIG1lc3NhZ2UgdG8gbG9nLlxuICogQG1ldGhvZCBsb2dcbiAqL1xuTG9nZ2VyX2NvbnNvbGUucHJvdG90eXBlLmxvZyA9IGZ1bmN0aW9uIChzb3VyY2UsIG1zZywgY29udGludWF0aW9uKSB7XG4gIHRoaXMucHJpbnQoJ2xvZycsIHNvdXJjZSwgbXNnKTtcbiAgY29udGludWF0aW9uKCk7XG59O1xuXG4vKipcbiAqIExvZyBhIG1lc3NhZ2UgdG8gdGhlIGNvbnNvbGUgd2l0aCBkZWJ1ZyBwcmlvcml0eS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBzb3VyY2UgVGhlIHNvdXJjZSBvZiB0aGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBtc2cgVGhlIG1lc3NhZ2UgdG8gbG9nLlxuICogQG1ldGhvZCBsb2dcbiAqL1xuTG9nZ2VyX2NvbnNvbGUucHJvdG90eXBlLmRlYnVnID0gZnVuY3Rpb24gKHNvdXJjZSwgbXNnLCBjb250aW51YXRpb24pIHtcbiAgdGhpcy5wcmludCgnZGVidWcnLCBzb3VyY2UsIG1zZyk7XG4gIGNvbnRpbnVhdGlvbigpO1xufTtcblxuLyoqXG4gKiBMb2cgYSBtZXNzYWdlIHRvIHRoZSBjb25zb2xlIHdpdGggaW5mbyBwcmlvcml0eS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBzb3VyY2UgVGhlIHNvdXJjZSBvZiB0aGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBtc2cgVGhlIG1lc3NhZ2UgdG8gbG9nLlxuICogQG1ldGhvZCBsb2dcbiAqL1xuTG9nZ2VyX2NvbnNvbGUucHJvdG90eXBlLmluZm8gPSBmdW5jdGlvbiAoc291cmNlLCBtc2csIGNvbnRpbnVhdGlvbikge1xuICB0aGlzLnByaW50KCdpbmZvJywgc291cmNlLCBtc2cpO1xuICBjb250aW51YXRpb24oKTtcbn07XG5cbi8qKlxuICogTG9nIGEgbWVzc2FnZSB0byB0aGUgY29uc29sZSB3aXRoIHdhcm4gcHJpb3JpdHkuXG4gKiBAcGFyYW0ge1N0cmluZ30gc291cmNlIFRoZSBzb3VyY2Ugb2YgdGhlIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge1N0cmluZ30gbXNnIFRoZSBtZXNzYWdlIHRvIGxvZy5cbiAqIEBtZXRob2QgbG9nXG4gKi9cbkxvZ2dlcl9jb25zb2xlLnByb3RvdHlwZS53YXJuID0gZnVuY3Rpb24gKHNvdXJjZSwgbXNnLCBjb250aW51YXRpb24pIHtcbiAgdGhpcy5wcmludCgnd2FybicsIHNvdXJjZSwgbXNnKTtcbiAgY29udGludWF0aW9uKCk7XG59O1xuXG4vKipcbiAqIExvZyBhIG1lc3NhZ2UgdG8gdGhlIGNvbnNvbGUgd2l0aCBlcnJvciBwcmlvcml0eS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBzb3VyY2UgVGhlIHNvdXJjZSBvZiB0aGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBtc2cgVGhlIG1lc3NhZ2UgdG8gbG9nLlxuICogQG1ldGhvZCBsb2dcbiAqL1xuTG9nZ2VyX2NvbnNvbGUucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKHNvdXJjZSwgbXNnLCBjb250aW51YXRpb24pIHtcbiAgdGhpcy5wcmludCgnZXJyb3InLCBzb3VyY2UsIG1zZyk7XG4gIGNvbnRpbnVhdGlvbigpO1xufTtcblxuLyoqIFJFR0lTVEVSIFBST1ZJREVSICoqL1xuZXhwb3J0cy5wcm92aWRlciA9IExvZ2dlcl9jb25zb2xlO1xuZXhwb3J0cy5uYW1lID0gJ2NvcmUuY29uc29sZSc7XG5leHBvcnRzLmZsYWdzID0ge2NvbmZpZzogdHJ1ZX07XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKCdfcHJvY2VzcycpKSIsIi8qZ2xvYmFscyBjb25zb2xlICovXG4vKmpzbGludCBpbmRlbnQ6Mix3aGl0ZTp0cnVlLHNsb3BweTp0cnVlLCBub2RlOnRydWUgKi9cbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vLi4vc3JjL3V0aWwnKTtcblxuLyoqXG4gKiBBIG1pbmltYWwgcHJvdmlkZXIgaW1wbGVtZW50aW5nIHRoZSBjb3JlLmVjaG8gaW50ZXJmYWNlIGZvciBpbnRlcmFjdGlvbiB3aXRoXG4gKiBjdXN0b20gY2hhbm5lbHMuICBQcmltYXJpbHkgdXNlZCBmb3IgdGVzdGluZyB0aGUgcm9idXN0bmVzcyBvZiB0aGUgY3VzdG9tXG4gKiBjaGFubmVsIGltcGxlbWVudGF0aW9uLlxuICogQENsYXNzIEVjaG9fdW5wcml2aWxlZ2VkXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7bW9kdWxlOk1vZHVsZX0gY2FwIFRoZSBtb2R1bGUgY3JlYXRpbmcgdGhpcyBwcm92aWRlci5cbiAqL1xudmFyIEVjaG9fdW5wcml2aWxlZ2VkID0gZnVuY3Rpb24oY2FwLCBkaXNwYXRjaEV2ZW50KSB7XG4gIHRoaXMubW9kID0gY2FwLm1vZHVsZTtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50ID0gZGlzcGF0Y2hFdmVudDtcbiAgdXRpbC5oYW5kbGVFdmVudHModGhpcyk7XG5cbiAgLy8gVGhlIENvcmUgb2JqZWN0IGZvciBtYW5hZ2luZyBjaGFubmVscy5cbiAgdGhpcy5tb2Qub25jZSgnY29yZScsIGZ1bmN0aW9uKENvcmUpIHtcbiAgICB0aGlzLmNvcmUgPSBuZXcgQ29yZSgpO1xuICB9LmJpbmQodGhpcykpO1xuICB0aGlzLm1vZC5lbWl0KHRoaXMubW9kLmNvbnRyb2xDaGFubmVsLCB7XG4gICAgdHlwZTogJ2NvcmUgcmVxdWVzdCBkZWxlZ2F0ZWQgdG8gZWNobycsXG4gICAgcmVxdWVzdDogJ2NvcmUnXG4gIH0pO1xufTtcblxuLyoqXG4gKiBTZXR1cCB0aGUgcHJvdmlkZXIgdG8gZWNobyBvbiBhIHNwZWNpZmljIHByb3h5LiBTdWJzZXF1ZW50IG1lc3NhZ2VzXG4gKiBGcm9tIHRoZSBjdXN0b20gY2hhbm5lbCBib3VuZCBoZXJlIHdpbGwgYmUgcmUtZW1pdHRlZCBhcyBhIG1lc3NhZ2VcbiAqIGZyb20gdGhlIHByb3ZpZGVyLiAgU3Vic2VxdWVudCBtZXNzYWdlcyB0byB0aGUgcHJvdmlkZXIgd2lsbCBiZVxuICogZW1pdHRlZCBvbiB0aGUgYm91bmQgY2hhbm5lbC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm94eSBUaGUgaWRlbnRpZmllciBmb3IgdGhlIGN1c3RvbSBjaGFubmVsIHRvIGJpbmQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb250aW51YXRpb24gRnVuY3Rpb24gdG8gY2FsbCB3aGVuIHNldHVwIGlzIGNvbXBsZXRlLlxuICogQG1ldGhvZCBzZXR1cFxuICovXG5FY2hvX3VucHJpdmlsZWdlZC5wcm90b3R5cGUuc2V0dXAgPSBmdW5jdGlvbihwcm94eSwgY29udGludWF0aW9uKSB7XG4gIGNvbnRpbnVhdGlvbigpO1xuICBpZiAoIXRoaXMuY29yZSkge1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnbWVzc2FnZScsICdubyBjb3JlIGF2YWlsYWJsZSB0byBzZXR1cCBwcm94eSB3aXRoIGF0IGVjaG8nKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLmNvcmUuYmluZENoYW5uZWwocHJveHksIGZ1bmN0aW9uKGNoYW4pIHtcbiAgICBpZiAodGhpcy5jaGFuKSB7XG4gICAgICB0aGlzLmNoYW4uY2xvc2UoKTtcbiAgICB9XG4gICAgdGhpcy5jaGFuID0gY2hhbjtcbiAgICB0aGlzLmNoYW4ub25DbG9zZShmdW5jdGlvbigpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmNoYW47XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ21lc3NhZ2UnLCAnY2hhbm5lbCBib3VuZCB0byBlY2hvJyk7XG4gICAgdGhpcy5jaGFuLm9uKCdtZXNzYWdlJywgZnVuY3Rpb24obSkge1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdtZXNzYWdlJywgJ2Zyb20gY3VzdG9tIGNoYW5uZWw6ICcgKyBtKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9LmJpbmQodGhpcykpO1xufTtcblxuLyoqXG4gKiBTZW5kIGEgbWVzc2FnZSB0byB0aGUgYm91bmQgY3VzdG9tIGNoYW5uZWwuXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gc2VuZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbnRpbnVhdGlvbiBGdW5jdGlvbiB0byBjYWxsIHdoZW4gc2VuZGluZyBpcyBjb21wbGV0ZS5cbiAqIEBtZXRob2Qgc2VuZFxuICovXG5FY2hvX3VucHJpdmlsZWdlZC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uKHN0ciwgY29udGludWF0aW9uKSB7XG4gIGNvbnRpbnVhdGlvbigpO1xuICBpZiAodGhpcy5jaGFuKSB7XG4gICAgdGhpcy5jaGFuLmVtaXQoJ21lc3NhZ2UnLCBzdHIpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnbWVzc2FnZScsICdubyBjaGFubmVsIGF2YWlsYWJsZScpO1xuICB9XG59O1xuXG5leHBvcnRzLnByb3ZpZGVyID0gRWNob191bnByaXZpbGVnZWQ7XG5leHBvcnRzLm5hbWUgPSBcImNvcmUuZWNob1wiO1xuZXhwb3J0cy5mbGFncyA9IHttb2R1bGU6IHRydWV9O1xuIiwiLypnbG9iYWxzIGNvbnNvbGUgKi9cbi8qanNsaW50IGluZGVudDoyLHdoaXRlOnRydWUsc2xvcHB5OnRydWUsbm9kZTp0cnVlICovXG5cbi8qKlxuICogQW4gb0F1dGggbWV0YS1wcm92aWRlciBhbGxvd2luZyBtdWx0aXBsZSBwbGF0Zm9ybS1kZXBlbmRhbnRcbiAqIG9BdXRoIGltcGxlbWVudGF0aW9ucyB0byBzZXJ2ZSBhcyB0aGUgcmVkaXJlY3RVUkwgZm9yIGFuIG9BdXRoIGZsb3cuXG4gKiBUaGUgY29yZSBpbXBsZW1lbnRhdGlvbnMgYXJlIHByb3ZpZGVkIGluIHByb3ZpZGVycy9vYXV0aCwgYW5kIGFyZVxuICogc3VwcGxlbWVudGVkIGluIHBsYXRmb3JtLWRlcGVuZGVudCByZXBvc2l0b3JpZXMuXG4gKlxuICovXG52YXIgT0F1dGggPSBmdW5jdGlvbiAoaGFuZGxlcnMsIGNhcCwgZGlzcGF0Y2hFdmVudCkge1xuICB0aGlzLmhhbmRsZXJzID0gaGFuZGxlcnM7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCA9IGRpc3BhdGNoRXZlbnQ7XG4gIHRoaXMub25nb2luZyA9IHt9O1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciBvQXV0aCBoYW5kbGVycy5cbiAqIFRoaXMgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQgYmVmb3JlIHByb3ZpZGVyIGlzIHVzZWQsIGFuZCBiaW5kcyB0aGUgY3VycmVudFxuICogb0F1dGggcHJvdmlkZXIgdG8gYmUgYXNzb2NpYXRlZCB3aXRoIHJlZ2lzdGVyZWQgaGFuZGxlcnMuIFRoaXMgaXMgdXNlZCBzb1xuICogdGhhdCBoYW5kbGVycyB3aGljaCBhcmUgcmVnaXN0ZXJlZCBieSB0aGUgdXNlciBhcHBseSBvbmx5IHRoZSB0aGUgZnJlZWRvbSgpXG4gKiBzZXR1cCBjYWxsIHRoZXkgYXJlIGFzc29jaWF0ZWQgd2l0aCwgd2hpbGUgc3RpbGwgYmVpbmcgcmVnaXN0ZXJlZCBhY3Jvc3NcbiAqIG11bHRpcGxlIGluc3RhbmNlcyBvZiBPQXV0aCBwcm92aWRlcnMuXG4gKlxuICogQG1ldGhvZCByZWdpc3RlclxuICogQHBhcmFtIHtbY29uc3RydWN0b3JdfSBoYW5kbGVyc1xuICogQHByaXZhdGVcbiAqL1xuT0F1dGgucmVnaXN0ZXIgPSBmdW5jdGlvbiAoaGFuZGxlcnMpIHtcbiAgdmFyIGksXG4gICAgICBib3VuZEhhbmRsZXJzID0gW107XG4gIGlmICghaGFuZGxlcnMgfHwgIWhhbmRsZXJzLmxlbmd0aCkge1xuICAgIHJldHVybiBPQXV0aC5yZXNldCgpO1xuICB9XG5cbiAgZm9yIChpID0gMDsgaSA8IGhhbmRsZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgYm91bmRIYW5kbGVycy5wdXNoKG5ldyBoYW5kbGVyc1tpXSgpKTtcbiAgfVxuICBleHBvcnRzLnByb3ZpZGVyID0gT0F1dGguYmluZCh0aGlzLCBib3VuZEhhbmRsZXJzKTtcbn07XG5cbi8qKlxuICogUmVzZXQgdGhlIG9BdXRoIHByb3ZpZGVyIHJlZ2lzdHJhdGlvbnMuXG4gKiBAbWV0aG9kIHJlc2V0XG4gKiBAcHJpdmF0ZVxuICovXG5PQXV0aC5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgZXhwb3J0cy5wcm92aWRlciA9IE9BdXRoLmJpbmQodGhpcywgW10pO1xufTtcblxuLyoqXG4gKiBJbmRpY2F0ZSB0aGUgaW50ZW50aW9uIHRvIGluaXRpYXRlIGFuIG9BdXRoIGZsb3csIGFsbG93aW5nIGFuIGFwcHJvcHJpYXRlXG4gKiBvQXV0aCBwcm92aWRlciB0byBiZWdpbiBtb25pdG9yaW5nIGZvciByZWRpcmVjdGlvbi5cbiAqXG4gKiBAbWV0aG9kIGluaXRpYXRlT0F1dGhcbiAqIEBwYXJhbSB7c3RyaW5nW119IHJlZGlyZWN0VVJJcyAtIG9BdXRoIHJlZGlyZWN0aW9uIFVSSXMgcmVnaXN0ZXJlZCB3aXRoIHRoZVxuICogICAgIHByb3ZpZGVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29udGludWF0aW9uIC0gRnVuY3Rpb24gdG8gY2FsbCB3aGVuIGNvbXBsZXRlXG4gKiAgICBFeHBlY3RlZCB0byBzZWUgYSB2YWx1ZSBvZiBzY2hlbWE6IHt7cmVkaXJlY3Q6U3RyaW5nLCBzdGF0ZTpTdHJpbmd9fVxuICogICAgd2hlcmUgJ3JlZGlyZWN0JyBpcyB0aGUgY2hvc2VuIHJlZGlyZWN0IFVSSVxuICogICAgYW5kICdzdGF0ZScgaXMgdGhlIHN0YXRlIHRvIHBhc3MgdG8gdGhlIFVSSSBvbiBjb21wbGV0aW9uIG9mIG9BdXRoXG4gKi9cbk9BdXRoLnByb3RvdHlwZS5pbml0aWF0ZU9BdXRoID0gZnVuY3Rpb24gKHJlZGlyZWN0VVJJcywgY29udGludWF0aW9uKSB7XG4gIHZhciBwcm9taXNlLCBpLCBzdWNjZXNzQ2FsbGJhY2s7XG4gIHN1Y2Nlc3NDYWxsYmFjayA9IGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgIHRoaXMub25nb2luZ1tyZXN1bHQuc3RhdGVdID0gdGhpcy5oYW5kbGVyc1tpXTtcbiAgICBjb250aW51YXRpb24ocmVzdWx0KTtcbiAgfS5iaW5kKHRoaXMpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCB0aGlzLmhhbmRsZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKHRoaXMuaGFuZGxlcnNbaV0uaW5pdGlhdGVPQXV0aChyZWRpcmVjdFVSSXMsIHN1Y2Nlc3NDYWxsYmFjaykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgLy9JZiBoZXJlLCB3ZSBoYXZlIG5vIGNvbXBhdGlibGUgcHJvdmlkZXJzXG4gIGNvbnRpbnVhdGlvbihudWxsLCB7XG4gICAgJ2VycmNvZGUnOiAnVU5LTk9XTicsXG4gICAgJ21lc3NhZ2UnOiAnTm8gcmVxdWVzdGVkIHJlZGlyZWN0cyBjYW4gYmUgaGFuZGxlZC4nXG4gIH0pO1xuICByZXR1cm47XG59O1xuXG4vKipcbiAqIG9BdXRoIGNsaWVudC1zaWRlIGZsb3cgLSBsYXVuY2ggdGhlIHByb3ZpZGVkIFVSTFxuICogVGhpcyBtdXN0IGJlIGNhbGxlZCBhZnRlciBpbml0aWF0ZU9BdXRoIHdpdGggdGhlIHJldHVybmVkIHN0YXRlIG9iamVjdFxuICpcbiAqIEBtZXRob2QgbGF1bmNoQXV0aEZsb3dcbiAqIEBwYXJhbSB7U3RyaW5nfSBhdXRoVXJsIC0gVGhlIFVSTCB0aGF0IGluaXRpYXRlcyB0aGUgYXV0aCBmbG93LlxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgc3RyaW5nPn0gc3RhdGVPYmogLSBUaGUgcmV0dXJuIHZhbHVlIGZyb20gaW5pdGlhdGVPQXV0aFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29udGludWF0aW9uIC0gRnVuY3Rpb24gdG8gY2FsbCB3aGVuIGNvbXBsZXRlXG4gKiAgICBFeHBlY3RlZCB0byBzZWUgYSBTdHJpbmcgdmFsdWUgdGhhdCBpcyB0aGUgcmVzcG9uc2UgVXJsIGNvbnRhaW5pbmcgdGhlIGFjY2VzcyB0b2tlblxuICovXG5PQXV0aC5wcm90b3R5cGUubGF1bmNoQXV0aEZsb3cgPSBmdW5jdGlvbihhdXRoVXJsLCBzdGF0ZU9iaiwgY29udGludWF0aW9uKSB7XG4gIGlmICghdGhpcy5vbmdvaW5nLmhhc093blByb3BlcnR5KHN0YXRlT2JqLnN0YXRlKSkge1xuICAgIGNvbnRpbnVhdGlvbih1bmRlZmluZWQsIHtcbiAgICAgICdlcnJjb2RlJzogJ1VOS05PV04nLFxuICAgICAgJ21lc3NhZ2UnOiAnWW91IG11c3QgYmVnaW4gdGhlIG9BdXRoIGZsb3cgd2l0aCBpbml0aWF0ZU9BdXRoIGZpcnN0J1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMub25nb2luZ1tzdGF0ZU9iai5zdGF0ZV0ubGF1bmNoQXV0aEZsb3coYXV0aFVybCwgc3RhdGVPYmosIGNvbnRpbnVhdGlvbik7XG4gIGRlbGV0ZSB0aGlzLm9uZ29pbmdbc3RhdGVPYmouc3RhdGVdO1xufTtcblxuZXhwb3J0cy5yZWdpc3RlciA9IE9BdXRoLnJlZ2lzdGVyO1xuZXhwb3J0cy5yZXNldCA9IE9BdXRoLnJlc2V0O1xuZXhwb3J0cy5wcm92aWRlciA9IE9BdXRoLmJpbmQodGhpcywgW10pO1xuZXhwb3J0cy5uYW1lID0gJ2NvcmUub2F1dGgnO1xuIiwiLypnbG9iYWxzIGNvbnNvbGUsIFJUQ1BlZXJDb25uZWN0aW9uLCB3ZWJraXRSVENQZWVyQ29ubmVjdGlvbiAqL1xuLypnbG9iYWxzIG1velJUQ1BlZXJDb25uZWN0aW9uLCBSVENTZXNzaW9uRGVzY3JpcHRpb24sIFJUQ0ljZUNhbmRpZGF0ZSAqL1xuLypnbG9iYWxzIG1velJUQ1Nlc3Npb25EZXNjcmlwdGlvbiwgbW96UlRDSWNlQ2FuZGlkYXRlICovXG4vKmdsb2JhbHMgQXJyYXlCdWZmZXIsIEJsb2IgKi9cbi8qanNsaW50IGluZGVudDoyLHNsb3BweTp0cnVlLG5vZGU6dHJ1ZSAqL1xuLyoqXG4gKiBEYXRhUGVlciAtIGEgY2xhc3MgdGhhdCB3cmFwcyBwZWVyIGNvbm5lY3Rpb25zIGFuZCBkYXRhIGNoYW5uZWxzLlxuICovXG4vLyBUT0RPOiBjaGVjayB0aGF0IEhhbmRsaW5nIG9mIHByYW5zd2VyIGlzIHRyZWF0ZWQgYXBwcm9wcmlhdGVseS5cbnZhciBTaW1wbGVEYXRhUGVlclN0YXRlID0ge1xuICBESVNDT05ORUNURUQ6ICdESVNDT05ORUNURUQnLFxuICBDT05ORUNUSU5HOiAnQ09OTkVDVElORycsXG4gIENPTk5FQ1RFRDogJ0NPTk5FQ1RFRCdcbn07XG5cbmZ1bmN0aW9uIFNpbXBsZURhdGFQZWVyKHBlZXJOYW1lLCBzdHVuU2VydmVycywgZGF0YUNoYW5uZWxDYWxsYmFja3MsIG1vY2tzKSB7XG4gIHZhciBjb25zdHJhaW50cyxcbiAgICBjb25maWcsXG4gICAgaTtcbiAgdGhpcy5wZWVyTmFtZSA9IHBlZXJOYW1lO1xuICB0aGlzLmNoYW5uZWxzID0ge307XG4gIHRoaXMuZGF0YUNoYW5uZWxDYWxsYmFja3MgPSBkYXRhQ2hhbm5lbENhbGxiYWNrcztcbiAgdGhpcy5vbkNvbm5lY3RlZFF1ZXVlID0gW107XG5cbiAgaWYgKHR5cGVvZiBtb2Nrcy5SVENQZWVyQ29ubmVjdGlvbiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHRoaXMuUlRDUGVlckNvbm5lY3Rpb24gPSBtb2Nrcy5SVENQZWVyQ29ubmVjdGlvbjtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygd2Via2l0UlRDUGVlckNvbm5lY3Rpb24gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB0aGlzLlJUQ1BlZXJDb25uZWN0aW9uID0gd2Via2l0UlRDUGVlckNvbm5lY3Rpb247XG4gIH0gZWxzZSBpZiAodHlwZW9mIG1velJUQ1BlZXJDb25uZWN0aW9uICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdGhpcy5SVENQZWVyQ29ubmVjdGlvbiA9IG1velJUQ1BlZXJDb25uZWN0aW9uO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgZW52aXJvbm1lbnQgZG9lcyBub3QgYXBwZWFyIHRvIHN1cHBvcnQgUlRDUGVlckNvbm5lY3Rpb25cIik7XG4gIH1cblxuICBpZiAodHlwZW9mIG1vY2tzLlJUQ1Nlc3Npb25EZXNjcmlwdGlvbiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHRoaXMuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uID0gbW9ja3MuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBSVENTZXNzaW9uRGVzY3JpcHRpb24gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB0aGlzLlJUQ1Nlc3Npb25EZXNjcmlwdGlvbiA9IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbjtcbiAgfSBlbHNlIGlmICh0eXBlb2YgbW96UlRDU2Vzc2lvbkRlc2NyaXB0aW9uICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdGhpcy5SVENTZXNzaW9uRGVzY3JpcHRpb24gPSBtb3pSVENTZXNzaW9uRGVzY3JpcHRpb247XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBlbnZpcm9ubWVudCBkb2VzIG5vdCBhcHBlYXIgdG8gc3VwcG9ydCBSVENTZXNzaW9uRGVzY3JpcHRpb25cIik7XG4gIH1cblxuICBpZiAodHlwZW9mIG1vY2tzLlJUQ0ljZUNhbmRpZGF0ZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHRoaXMuUlRDSWNlQ2FuZGlkYXRlID0gbW9ja3MuUlRDSWNlQ2FuZGlkYXRlO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBSVENJY2VDYW5kaWRhdGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB0aGlzLlJUQ0ljZUNhbmRpZGF0ZSA9IFJUQ0ljZUNhbmRpZGF0ZTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgbW96UlRDSWNlQ2FuZGlkYXRlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdGhpcy5SVENJY2VDYW5kaWRhdGUgPSBtb3pSVENJY2VDYW5kaWRhdGU7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBlbnZpcm9ubWVudCBkb2VzIG5vdCBhcHBlYXIgdG8gc3VwcG9ydCBSVENJY2VDYW5kaWRhdGVcIik7XG4gIH1cblxuXG4gIGNvbnN0cmFpbnRzID0ge1xuICAgIG9wdGlvbmFsOiBbe0R0bHNTcnRwS2V5QWdyZWVtZW50OiB0cnVlfV1cbiAgfTtcbiAgLy8gQSB3YXkgdG8gc3BlYWsgdG8gdGhlIHBlZXIgdG8gc2VuZCBTRFAgaGVhZGVycyBldGMuXG4gIHRoaXMuc2VuZFNpZ25hbE1lc3NhZ2UgPSBudWxsO1xuXG4gIHRoaXMucGMgPSBudWxsOyAgLy8gVGhlIHBlZXIgY29ubmVjdGlvbi5cbiAgLy8gR2V0IFRVUk4gc2VydmVycyBmb3IgdGhlIHBlZXIgY29ubmVjdGlvbi5cbiAgY29uZmlnID0ge2ljZVNlcnZlcnM6IFtdfTtcbiAgZm9yIChpID0gMDsgaSA8IHN0dW5TZXJ2ZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uZmlnLmljZVNlcnZlcnMucHVzaCh7XG4gICAgICAndXJsJyA6IHN0dW5TZXJ2ZXJzW2ldXG4gICAgfSk7XG4gIH1cbiAgdGhpcy5wYyA9IG5ldyB0aGlzLlJUQ1BlZXJDb25uZWN0aW9uKGNvbmZpZywgY29uc3RyYWludHMpO1xuICAvLyBBZGQgYmFzaWMgZXZlbnQgaGFuZGxlcnMuXG4gIHRoaXMucGMuYWRkRXZlbnRMaXN0ZW5lcihcImljZWNhbmRpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25JY2VDYWxsYmFjay5iaW5kKHRoaXMpKTtcbiAgdGhpcy5wYy5hZGRFdmVudExpc3RlbmVyKFwibmVnb3RpYXRpb25uZWVkZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uTmVnb3RpYXRpb25OZWVkZWQuYmluZCh0aGlzKSk7XG4gIHRoaXMucGMuYWRkRXZlbnRMaXN0ZW5lcihcImRhdGFjaGFubmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkRhdGFDaGFubmVsLmJpbmQodGhpcykpO1xuICB0aGlzLnBjLmFkZEV2ZW50TGlzdGVuZXIoXCJzaWduYWxpbmdzdGF0ZWNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8gVE9ETzogY29tZSB1cCB3aXRoIGEgYmV0dGVyIHdheSB0byBkZXRlY3QgY29ubmVjdGlvbi4gIFdlIHN0YXJ0IG91dFxuICAgIC8vIGFzIFwic3RhYmxlXCIgZXZlbiBiZWZvcmUgd2UgYXJlIGNvbm5lY3RlZC5cbiAgICAvLyBUT0RPOiB0aGlzIGlzIG5vdCBmaXJlZCBmb3IgY29ubmVjdGlvbnMgY2xvc2VkIGJ5IHRoZSBvdGhlciBzaWRlLlxuICAgIC8vIFRoaXMgd2lsbCBiZSBmaXhlZCBpbiBtMzcsIGF0IHRoYXQgcG9pbnQgd2Ugc2hvdWxkIGRpc3BhdGNoIGFuIG9uQ2xvc2VcbiAgICAvLyBldmVudCBoZXJlIGZvciBmcmVlZG9tLnRyYW5zcG9ydCB0byBwaWNrIHVwLlxuICAgIGlmICh0aGlzLnBjLnNpZ25hbGluZ1N0YXRlID09PSBcInN0YWJsZVwiKSB7XG4gICAgICB0aGlzLnBjU3RhdGUgPSBTaW1wbGVEYXRhUGVlclN0YXRlLkNPTk5FQ1RFRDtcbiAgICAgIHRoaXMub25Db25uZWN0ZWRRdWV1ZS5tYXAoZnVuY3Rpb24gKGNhbGxiYWNrKSB7IGNhbGxiYWNrKCk7IH0pO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcbiAgLy8gVGhpcyBzdGF0ZSB2YXJpYWJsZSBpcyB1c2VkIHRvIGZha2Ugb2ZmZXIvYW5zd2VyIHdoZW4gdGhleSBhcmUgd3JvbmdseVxuICAvLyByZXF1ZXN0ZWQgYW5kIHdlIHJlYWxseSBqdXN0IG5lZWQgdG8gcmV1c2Ugd2hhdCB3ZSBhbHJlYWR5IGhhdmUuXG4gIHRoaXMucGNTdGF0ZSA9IFNpbXBsZURhdGFQZWVyU3RhdGUuRElTQ09OTkVDVEVEO1xuXG4gIC8vIE5vdGU6IHRvIGFjdHVhbGx5IGRvIHNvbWV0aGluZyB3aXRoIGRhdGEgY2hhbm5lbHMgb3BlbmVkIGJ5IGEgcGVlciwgd2VcbiAgLy8gbmVlZCBzb21lb25lIHRvIG1hbmFnZSBcImRhdGFjaGFubmVsXCIgZXZlbnQuXG59XG5cblNpbXBsZURhdGFQZWVyLnByb3RvdHlwZS5jcmVhdGVPZmZlciA9IGZ1bmN0aW9uIChjb25zdGFpbnRzLCBjb250aW51YXRpb24pIHtcbiAgdGhpcy5wYy5jcmVhdGVPZmZlcihjb250aW51YXRpb24sIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmVycm9yKCdjb3JlLnBlZXJjb25uZWN0aW9uIGNyZWF0ZU9mZmVyIGZhaWxlZC4nKTtcbiAgfSwgY29uc3RhaW50cyk7XG59O1xuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUucnVuV2hlbkNvbm5lY3RlZCA9IGZ1bmN0aW9uIChmdW5jKSB7XG4gIGlmICh0aGlzLnBjU3RhdGUgPT09IFNpbXBsZURhdGFQZWVyU3RhdGUuQ09OTkVDVEVEKSB7XG4gICAgZnVuYygpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMub25Db25uZWN0ZWRRdWV1ZS5wdXNoKGZ1bmMpO1xuICB9XG59O1xuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChjaGFubmVsSWQsIG1lc3NhZ2UsIGNvbnRpbnVhdGlvbikge1xuICB0aGlzLmNoYW5uZWxzW2NoYW5uZWxJZF0uc2VuZChtZXNzYWdlKTtcbiAgY29udGludWF0aW9uKCk7XG59O1xuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUub3BlbkRhdGFDaGFubmVsID0gZnVuY3Rpb24gKGNoYW5uZWxJZCwgY29udGludWF0aW9uKSB7XG4gIHZhciBkYXRhQ2hhbm5lbCA9IHRoaXMucGMuY3JlYXRlRGF0YUNoYW5uZWwoY2hhbm5lbElkLCB7fSk7XG4gIGRhdGFDaGFubmVsLm9ub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmFkZERhdGFDaGFubmVsKGNoYW5uZWxJZCwgZGF0YUNoYW5uZWwpO1xuICAgIGNvbnRpbnVhdGlvbigpO1xuICB9LmJpbmQodGhpcyk7XG4gIGRhdGFDaGFubmVsLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgLy9AKHJ5c2NoZW5nKSB0b2RvIC0gcmVwbGFjZSB3aXRoIGVycm9ycyB0aGF0IHdvcmsgYWNyb3NzIHRoZSBpbnRlcmZhY2VcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgY29udGludWF0aW9uKHVuZGVmaW5lZCwgZXJyKTtcbiAgfTtcbiAgLy8gRmlyZWZveCBkb2VzIG5vdCBmaXJlIFwibmVnb3RpYXRpb25uZWVkZWRcIiwgc28gd2UgbmVlZCB0b1xuICAvLyBuZWdvdGF0ZSBoZXJlIGlmIHdlIGFyZSBub3QgY29ubmVjdGVkLlxuICAvLyBTZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9ODQwNzI4XG4gIGlmICh0eXBlb2YgbW96UlRDUGVlckNvbm5lY3Rpb24gIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgIHRoaXMucGNTdGF0ZSA9PT0gU2ltcGxlRGF0YVBlZXJTdGF0ZS5ESVNDT05ORUNURUQpIHtcbiAgICB0aGlzLm5lZ290aWF0ZUNvbm5lY3Rpb24oKTtcbiAgfVxufTtcblxuU2ltcGxlRGF0YVBlZXIucHJvdG90eXBlLmNsb3NlQ2hhbm5lbCA9IGZ1bmN0aW9uIChjaGFubmVsSWQpIHtcbiAgaWYgKHRoaXMuY2hhbm5lbHNbY2hhbm5lbElkXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5jaGFubmVsc1tjaGFubmVsSWRdLmNsb3NlKCk7XG4gICAgZGVsZXRlIHRoaXMuY2hhbm5lbHNbY2hhbm5lbElkXTtcbiAgfVxufTtcblxuU2ltcGxlRGF0YVBlZXIucHJvdG90eXBlLmdldEJ1ZmZlcmVkQW1vdW50ID0gZnVuY3Rpb24gKGNoYW5uZWxJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51YXRpb24pIHtcbiAgaWYgKHRoaXMuY2hhbm5lbHNbY2hhbm5lbElkXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGRhdGFDaGFubmVsID0gdGhpcy5jaGFubmVsc1tjaGFubmVsSWRdO1xuICAgIHJldHVybiBkYXRhQ2hhbm5lbC5idWZmZXJlZEFtb3VudDtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXCJObyBjaGFubmVsIHdpdGggaWQ6IFwiICsgY2hhbm5lbElkKTtcbn07XG5cblNpbXBsZURhdGFQZWVyLnByb3RvdHlwZS5zZXRTZW5kU2lnbmFsTWVzc2FnZSA9IGZ1bmN0aW9uIChzZW5kU2lnbmFsTWVzc2FnZUZuKSB7XG4gIHRoaXMuc2VuZFNpZ25hbE1lc3NhZ2UgPSBzZW5kU2lnbmFsTWVzc2FnZUZuO1xufTtcblxuLy8gSGFuZGxlIGEgbWVzc2FnZSBzZW5kIG9uIHRoZSBzaWduYWxsaW5nIGNoYW5uZWwgdG8gdGhpcyBwZWVyLlxuU2ltcGxlRGF0YVBlZXIucHJvdG90eXBlLmhhbmRsZVNpZ25hbE1lc3NhZ2UgPSBmdW5jdGlvbiAobWVzc2FnZVRleHQpIHtcbiAgLy9jb25zb2xlLmxvZyh0aGlzLnBlZXJOYW1lICsgXCI6IFwiICsgXCJoYW5kbGVTaWduYWxNZXNzYWdlOiBcXG5cIiArIG1lc3NhZ2VUZXh0KTtcbiAgdmFyIGpzb24gPSBKU09OLnBhcnNlKG1lc3NhZ2VUZXh0KSxcbiAgICBpY2VfY2FuZGlkYXRlO1xuXG4gIC8vIFRPRE86IElmIHdlIGFyZSBvZmZlcmluZyBhbmQgdGhleSBhcmUgYWxzbyBvZmZlcnJpbmcgYXQgdGhlIHNhbWUgdGltZSxcbiAgLy8gcGljayB0aGUgb25lIHdobyBoYXMgdGhlIGxvd2VyIHJhbmRvbUlkP1xuICAvLyAodGhpcy5wYy5zaWduYWxpbmdTdGF0ZSA9PSBcImhhdmUtbG9jYWwtb2ZmZXJcIiAmJiBqc29uLnNkcCAmJlxuICAvLyAgICBqc29uLnNkcC50eXBlID09IFwib2ZmZXJcIiAmJiBqc29uLnNkcC5yYW5kb21JZCA8IHRoaXMubG9jYWxSYW5kb21JZClcbiAgaWYgKGpzb24uc2RwKSB7XG4gICAgLy8gU2V0IHRoZSByZW1vdGUgZGVzY3JpcHRpb24uXG4gICAgdGhpcy5wYy5zZXRSZW1vdGVEZXNjcmlwdGlvbihcbiAgICAgIG5ldyB0aGlzLlJUQ1Nlc3Npb25EZXNjcmlwdGlvbihqc29uLnNkcCksXG4gICAgICAvLyBTdWNjZXNzXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5wZWVyTmFtZSArIFwiOiBzZXRSZW1vdGVEZXNjcmlwdGlvbiBzdWNjZWVkZWRcIik7XG4gICAgICAgIGlmICh0aGlzLnBjLnJlbW90ZURlc2NyaXB0aW9uLnR5cGUgPT09IFwib2ZmZXJcIikge1xuICAgICAgICAgIHRoaXMucGMuY3JlYXRlQW5zd2VyKHRoaXMub25EZXNjcmlwdGlvbi5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9LmJpbmQodGhpcyksXG4gICAgICAvLyBGYWlsdXJlXG4gICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKHRoaXMucGVlck5hbWUgKyBcIjogXCIgK1xuICAgICAgICAgICAgXCJzZXRSZW1vdGVEZXNjcmlwdGlvbiBmYWlsZWQ6XCIsIGUpO1xuICAgICAgfS5iaW5kKHRoaXMpXG4gICAgKTtcbiAgfSBlbHNlIGlmIChqc29uLmNhbmRpZGF0ZSkge1xuICAgIC8vIEFkZCByZW1vdGUgaWNlIGNhbmRpZGF0ZS5cbiAgICAvL2NvbnNvbGUubG9nKHRoaXMucGVlck5hbWUgKyBcIjogQWRkaW5nIGljZSBjYW5kaWRhdGU6IFwiICsgSlNPTi5zdHJpbmdpZnkoanNvbi5jYW5kaWRhdGUpKTtcbiAgICBpY2VfY2FuZGlkYXRlID0gbmV3IHRoaXMuUlRDSWNlQ2FuZGlkYXRlKGpzb24uY2FuZGlkYXRlKTtcbiAgICB0aGlzLnBjLmFkZEljZUNhbmRpZGF0ZShpY2VfY2FuZGlkYXRlKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLndhcm4odGhpcy5wZWVyTmFtZSArIFwiOiBcIiArXG4gICAgICAgIFwiaGFuZGxlU2lnbmFsTWVzc2FnZSBnb3QgdW5leHBlY3RlZCBtZXNzYWdlOiBcIiwgbWVzc2FnZVRleHQpO1xuICB9XG59O1xuXG4vLyBDb25uZWN0IHRvIHRoZSBwZWVyIGJ5IHRoZSBzaWduYWxsaW5nIGNoYW5uZWwuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUubmVnb3RpYXRlQ29ubmVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5wY1N0YXRlID0gU2ltcGxlRGF0YVBlZXJTdGF0ZS5DT05ORUNUSU5HO1xuICB0aGlzLnBjLmNyZWF0ZU9mZmVyKFxuICAgIHRoaXMub25EZXNjcmlwdGlvbi5iaW5kKHRoaXMpLFxuICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKHRoaXMucGVlck5hbWUgKyBcIjogXCIgK1xuICAgICAgICAgIFwiY3JlYXRlT2ZmZXIgZmFpbGVkOiBcIiwgZS50b1N0cmluZygpKTtcbiAgICAgIHRoaXMucGNTdGF0ZSA9IFNpbXBsZURhdGFQZWVyU3RhdGUuRElTQ09OTkVDVEVEO1xuICAgIH0uYmluZCh0aGlzKVxuICApO1xufTtcblxuU2ltcGxlRGF0YVBlZXIucHJvdG90eXBlLmlzQ2xvc2VkID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gIXRoaXMucGMgfHwgdGhpcy5wYy5zaWduYWxpbmdTdGF0ZSA9PT0gXCJjbG9zZWRcIjtcbn07XG5cblNpbXBsZURhdGFQZWVyLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCF0aGlzLmlzQ2xvc2VkKCkpIHtcbiAgICB0aGlzLnBjLmNsb3NlKCk7XG4gIH1cbiAgLy9jb25zb2xlLmxvZyh0aGlzLnBlZXJOYW1lICsgXCI6IFwiICsgXCJDbG9zZWQgcGVlciBjb25uZWN0aW9uLlwiKTtcbn07XG5cblNpbXBsZURhdGFQZWVyLnByb3RvdHlwZS5hZGREYXRhQ2hhbm5lbCA9IGZ1bmN0aW9uIChjaGFubmVsSWQsIGNoYW5uZWwpIHtcbiAgdmFyIGNhbGxiYWNrcyA9IHRoaXMuZGF0YUNoYW5uZWxDYWxsYmFja3M7XG4gIHRoaXMuY2hhbm5lbHNbY2hhbm5lbElkXSA9IGNoYW5uZWw7XG5cbiAgaWYgKGNoYW5uZWwucmVhZHlTdGF0ZSA9PT0gXCJjb25uZWN0aW5nXCIpIHtcbiAgICBjaGFubmVsLm9ub3BlbiA9IGNhbGxiYWNrcy5vbk9wZW5Gbi5iaW5kKHRoaXMsIGNoYW5uZWwsIHtsYWJlbDogY2hhbm5lbElkfSk7XG4gIH1cblxuICBjaGFubmVsLm9uY2xvc2UgPSBjYWxsYmFja3Mub25DbG9zZUZuLmJpbmQodGhpcywgY2hhbm5lbCwge2xhYmVsOiBjaGFubmVsSWR9KTtcblxuICBjaGFubmVsLm9ubWVzc2FnZSA9IGNhbGxiYWNrcy5vbk1lc3NhZ2VGbi5iaW5kKHRoaXMsIGNoYW5uZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiBjaGFubmVsSWR9KTtcblxuICBjaGFubmVsLm9uZXJyb3IgPSBjYWxsYmFja3Mub25FcnJvckZuLmJpbmQodGhpcywgY2hhbm5lbCwge2xhYmVsOiBjaGFubmVsfSk7XG59O1xuXG4vLyBXaGVuIHdlIGdldCBvdXIgZGVzY3JpcHRpb24sIHdlIHNldCBpdCB0byBiZSBvdXIgbG9jYWwgZGVzY3JpcHRpb24gYW5kXG4vLyBzZW5kIGl0IHRvIHRoZSBwZWVyLlxuU2ltcGxlRGF0YVBlZXIucHJvdG90eXBlLm9uRGVzY3JpcHRpb24gPSBmdW5jdGlvbiAoZGVzY3JpcHRpb24pIHtcbiAgaWYgKHRoaXMuc2VuZFNpZ25hbE1lc3NhZ2UpIHtcbiAgICB0aGlzLnBjLnNldExvY2FsRGVzY3JpcHRpb24oXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnBlZXJOYW1lICsgXCI6IHNldExvY2FsRGVzY3JpcHRpb24gc3VjY2VlZGVkXCIpO1xuICAgICAgICB0aGlzLnNlbmRTaWduYWxNZXNzYWdlKEpTT04uc3RyaW5naWZ5KHsnc2RwJzogZGVzY3JpcHRpb259KSk7XG4gICAgICB9LmJpbmQodGhpcyksXG4gICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKHRoaXMucGVlck5hbWUgKyBcIjogXCIgK1xuICAgICAgICAgICAgXCJzZXRMb2NhbERlc2NyaXB0aW9uIGZhaWxlZDpcIiwgZSk7XG4gICAgICB9LmJpbmQodGhpcylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUuZXJyb3IodGhpcy5wZWVyTmFtZSArIFwiOiBcIiArXG4gICAgICAgIFwiX29uRGVzY3JpcHRpb246IF9zZW5kU2lnbmFsTWVzc2FnZSBpcyBub3Qgc2V0LCBzbyB3ZSBkaWQgbm90IFwiICtcbiAgICAgICAgICAgIFwic2V0IHRoZSBsb2NhbCBkZXNjcmlwdGlvbi4gXCIpO1xuICB9XG59O1xuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUub25OZWdvdGlhdGlvbk5lZWRlZCA9IGZ1bmN0aW9uIChlKSB7XG4gIC8vY29uc29sZS5sb2codGhpcy5wZWVyTmFtZSArIFwiOiBcIiArIFwib25OZWdvdGlhdGlvbk5lZWRlZFwiLFxuICAvLyAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHRoaXMuX3BjKSwgZSk7XG4gIGlmICh0aGlzLnBjU3RhdGUgIT09IFNpbXBsZURhdGFQZWVyU3RhdGUuRElTQ09OTkVDVEVEKSB7XG4gICAgLy8gTmVnb3RpYXRpb24gbWVzc2FnZXMgYXJlIGZhbHNlbHkgcmVxdWVzdGVkIGZvciBuZXcgZGF0YSBjaGFubmVscy5cbiAgICAvLyAgIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3Avd2VicnRjL2lzc3Vlcy9kZXRhaWw/aWQ9MjQzMVxuICAgIC8vIFRoaXMgY29kZSBpcyBhIGhhY2sgdG8gc2ltcGx5IHJlc2V0IHRoZSBzYW1lIGxvY2FsIGFuZCByZW1vdGVcbiAgICAvLyBkZXNjcmlwdGlvbiB3aGljaCB3aWxsIHRyaWdnZXIgdGhlIGFwcHJvcHJpYXRlIGRhdGEgY2hhbm5lbCBvcGVuIGV2ZW50LlxuICAgIC8vIFRPRE86IGZpeC9yZW1vdmUgdGhpcyB3aGVuIENocm9tZSBpc3N1ZSBpcyBmaXhlZC5cbiAgICB2YXIgbG9nU3VjY2VzcyA9IGZ1bmN0aW9uIChvcCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnBlZXJOYW1lICsgXCI6IFwiICsgb3AgKyBcIiBzdWNjZWVkZWQgXCIpO1xuICAgICAgfS5iaW5kKHRoaXMpO1xuICAgIH0uYmluZCh0aGlzKSxcbiAgICAgIGxvZ0ZhaWwgPSBmdW5jdGlvbiAob3ApIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnBlZXJOYW1lICsgXCI6IFwiICsgb3AgKyBcIiBmYWlsZWQ6IFwiICsgZSk7XG4gICAgICAgIH0uYmluZCh0aGlzKTtcbiAgICAgIH0uYmluZCh0aGlzKTtcbiAgICBpZiAodGhpcy5wYy5sb2NhbERlc2NyaXB0aW9uICYmIHRoaXMucGMucmVtb3RlRGVzY3JpcHRpb24gJiZcbiAgICAgICAgdGhpcy5wYy5sb2NhbERlc2NyaXB0aW9uLnR5cGUgPT09IFwib2ZmZXJcIikge1xuICAgICAgdGhpcy5wYy5zZXRMb2NhbERlc2NyaXB0aW9uKHRoaXMucGMubG9jYWxEZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nU3VjY2VzcyhcInNldExvY2FsRGVzY3JpcHRpb25cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ0ZhaWwoXCJzZXRMb2NhbERlc2NyaXB0aW9uXCIpKTtcbiAgICAgIHRoaXMucGMuc2V0UmVtb3RlRGVzY3JpcHRpb24odGhpcy5wYy5yZW1vdGVEZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ1N1Y2Nlc3MoXCJzZXRSZW1vdGVEZXNjcmlwdGlvblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ0ZhaWwoXCJzZXRSZW1vdGVEZXNjcmlwdGlvblwiKSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBjLmxvY2FsRGVzY3JpcHRpb24gJiYgdGhpcy5wYy5yZW1vdGVEZXNjcmlwdGlvbiAmJlxuICAgICAgICB0aGlzLnBjLmxvY2FsRGVzY3JpcHRpb24udHlwZSA9PT0gXCJhbnN3ZXJcIikge1xuICAgICAgdGhpcy5wYy5zZXRSZW1vdGVEZXNjcmlwdGlvbih0aGlzLnBjLnJlbW90ZURlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nU3VjY2VzcyhcInNldFJlbW90ZURlc2NyaXB0aW9uXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nRmFpbChcInNldFJlbW90ZURlc2NyaXB0aW9uXCIpKTtcbiAgICAgIHRoaXMucGMuc2V0TG9jYWxEZXNjcmlwdGlvbih0aGlzLnBjLmxvY2FsRGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ1N1Y2Nlc3MoXCJzZXRMb2NhbERlc2NyaXB0aW9uXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dGYWlsKFwic2V0TG9jYWxEZXNjcmlwdGlvblwiKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IodGhpcy5wZWVyTmFtZSArICcsIG9uTmVnb3RpYXRpb25OZWVkZWQgZmFpbGVkJyk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLm5lZ290aWF0ZUNvbm5lY3Rpb24oKTtcbn07XG5cblNpbXBsZURhdGFQZWVyLnByb3RvdHlwZS5vbkljZUNhbGxiYWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGlmIChldmVudC5jYW5kaWRhdGUpIHtcbiAgICAvLyBTZW5kIEljZUNhbmRpZGF0ZSB0byBwZWVyLlxuICAgIC8vY29uc29sZS5sb2codGhpcy5wZWVyTmFtZSArIFwiOiBcIiArIFwiaWNlIGNhbGxiYWNrIHdpdGggY2FuZGlkYXRlXCIsIGV2ZW50KTtcbiAgICBpZiAodGhpcy5zZW5kU2lnbmFsTWVzc2FnZSkge1xuICAgICAgdGhpcy5zZW5kU2lnbmFsTWVzc2FnZShKU09OLnN0cmluZ2lmeSh7J2NhbmRpZGF0ZSc6IGV2ZW50LmNhbmRpZGF0ZX0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKHRoaXMucGVlck5hbWUgKyBcIjogXCIgKyBcIl9vbkRlc2NyaXB0aW9uOiBfc2VuZFNpZ25hbE1lc3NhZ2UgaXMgbm90IHNldC5cIik7XG4gICAgfVxuICB9XG59O1xuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUub25TaWduYWxpbmdTdGF0ZUNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgLy9jb25zb2xlLmxvZyh0aGlzLnBlZXJOYW1lICsgXCI6IFwiICsgXCJvblNpZ25hbGluZ1N0YXRlQ2hhbmdlOiBcIiwgdGhpcy5fcGMuc2lnbmFsaW5nU3RhdGUpO1xuICBpZiAodGhpcy5wYy5zaWduYWxpbmdTdGF0ZSA9PT0gXCJzdGFibGVcIikge1xuICAgIHRoaXMucGNTdGF0ZSA9IFNpbXBsZURhdGFQZWVyU3RhdGUuQ09OTkVDVEVEO1xuICAgIHRoaXMub25Db25uZWN0ZWRRdWV1ZS5tYXAoZnVuY3Rpb24gKGNhbGxiYWNrKSB7IGNhbGxiYWNrKCk7IH0pO1xuICB9XG59O1xuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUub25EYXRhQ2hhbm5lbCA9IGZ1bmN0aW9uIChldmVudCkge1xuICB0aGlzLmFkZERhdGFDaGFubmVsKGV2ZW50LmNoYW5uZWwubGFiZWwsIGV2ZW50LmNoYW5uZWwpO1xuICAvLyBSVENEYXRhQ2hhbm5lbHMgY3JlYXRlZCBieSBhIFJUQ0RhdGFDaGFubmVsRXZlbnQgaGF2ZSBhbiBpbml0aWFsXG4gIC8vIHN0YXRlIG9mIG9wZW4sIHNvIHRoZSBvbm9wZW4gZXZlbnQgZm9yIHRoZSBjaGFubmVsIHdpbGwgbm90XG4gIC8vIGZpcmUuIFdlIG5lZWQgdG8gZmlyZSB0aGUgb25PcGVuRGF0YUNoYW5uZWwgZXZlbnQgaGVyZVxuICAvLyBodHRwOi8vd3d3LnczLm9yZy9UUi93ZWJydGMvI2lkbC1kZWYtUlRDRGF0YUNoYW5uZWxTdGF0ZVxuXG4gIC8vIEZpcmVmb3ggY2hhbm5lbHMgZG8gbm90IGhhdmUgYW4gaW5pdGlhbCBzdGF0ZSBvZiBcIm9wZW5cIlxuICAvLyBTZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTAwMDQ3OFxuICBpZiAoZXZlbnQuY2hhbm5lbC5yZWFkeVN0YXRlID09PSBcIm9wZW5cIikge1xuICAgIHRoaXMuZGF0YUNoYW5uZWxDYWxsYmFja3Mub25PcGVuRm4oZXZlbnQuY2hhbm5lbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogZXZlbnQuY2hhbm5lbC5sYWJlbH0pO1xuICB9XG59O1xuXG4vLyBfc2lnbmFsbGluZ0NoYW5uZWwgaXMgYSBjaGFubmVsIGZvciBlbWl0dGluZyBldmVudHMgYmFjayB0byB0aGUgZnJlZWRvbSBIdWIuXG5mdW5jdGlvbiBQZWVyQ29ubmVjdGlvbihwb3J0TW9kdWxlLCBkaXNwYXRjaEV2ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgUlRDUGVlckNvbm5lY3Rpb24sIFJUQ1Nlc3Npb25EZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIFJUQ0ljZUNhbmRpZGF0ZSkge1xuICAvLyBDaGFubmVsIGZvciBlbWl0dGluZyBldmVudHMgdG8gY29uc3VtZXIuXG4gIHRoaXMuZGlzcGF0Y2hFdmVudCA9IGRpc3BhdGNoRXZlbnQ7XG5cbiAgLy8gYSAoaG9wZWZ1bGx5IHVuaXF1ZSkgSUQgZm9yIGRlYnVnZ2luZy5cbiAgdGhpcy5wZWVyTmFtZSA9IFwicFwiICsgTWF0aC5yYW5kb20oKTtcblxuICAvLyBUaGlzIGlzIHRoZSBwb3J0QXBwIChkZWZpbmVkIGluIGZyZWVkb20vc3JjL3BvcnQtYXBwLmpzKS4gQSB3YXkgdG8gc3BlYWtcbiAgLy8gdG8gZnJlZWRvbS5cbiAgdGhpcy5mcmVlZG9tTW9kdWxlID0gcG9ydE1vZHVsZS5tb2R1bGU7XG5cbiAgLy8gRm9yIHRlc3RzIHdlIG1heSBtb2NrIG91dCB0aGUgUGVlckNvbm5lY3Rpb24gYW5kXG4gIC8vIFNlc3Npb25EZXNjcmlwdGlvbiBpbXBsZW1lbnRhdGlvbnNcbiAgdGhpcy5SVENQZWVyQ29ubmVjdGlvbiA9IFJUQ1BlZXJDb25uZWN0aW9uO1xuICB0aGlzLlJUQ1Nlc3Npb25EZXNjcmlwdGlvbiA9IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbjtcbiAgdGhpcy5SVENJY2VDYW5kaWRhdGUgPSBSVENJY2VDYW5kaWRhdGU7XG5cbiAgLy8gVGhpcyBpcyB0aGUgYSBjaGFubmVsIHRvIHNlbmQgc2lnbmFsbGluZyBtZXNzYWdlcy5cbiAgdGhpcy5zaWduYWxsaW5nQ2hhbm5lbCA9IG51bGw7XG5cbiAgLy8gVGhlIERhdGFQZWVyIG9iamVjdCBmb3IgdGFsa2luZyB0byB0aGUgcGVlci5cbiAgdGhpcy5wZWVyID0gbnVsbDtcblxuICAvLyBUaGUgQ29yZSBvYmplY3QgZm9yIG1hbmFnaW5nIGNoYW5uZWxzLlxuICB0aGlzLmZyZWVkb21Nb2R1bGUub25jZSgnY29yZScsIGZ1bmN0aW9uIChDb3JlKSB7XG4gICAgdGhpcy5jb3JlID0gbmV3IENvcmUoKTtcbiAgfS5iaW5kKHRoaXMpKTtcbiAgdGhpcy5mcmVlZG9tTW9kdWxlLmVtaXQodGhpcy5mcmVlZG9tTW9kdWxlLmNvbnRyb2xDaGFubmVsLCB7XG4gICAgdHlwZTogJ2NvcmUgcmVxdWVzdCBkZWxlZ2F0ZWQgdG8gcGVlcmNvbm5lY3Rpb24nLFxuICAgIHJlcXVlc3Q6ICdjb3JlJ1xuICB9KTtcbn1cblxuLy8gU3RhcnQgYSBwZWVyIGNvbm5lY3Rpb24gdXNpbmcgdGhlIGdpdmVuIGZyZWVkb21DaGFubmVsSWQgYXMgdGhlIHdheSB0b1xuLy8gY29tbXVuaWNhdGUgd2l0aCB0aGUgcGVlci4gVGhlIGFyZ3VtZW50IHxmcmVlZG9tQ2hhbm5lbElkfCBpcyBhIHdheSB0byBzcGVha1xuLy8gdG8gYW4gaWRlbnRpdHkgcHJvdmlkZSB0byBzZW5kIHRoZW0gU0RQIGhlYWRlcnMgbmVnb3RpYXRlIHRoZSBhZGRyZXNzL3BvcnQgdG9cbi8vIHNldHVwIHRoZSBwZWVyIHRvIHBlZXJDb25uZWN0aW9uLlxuLy9cbi8vIG9wdGlvbnM6IHtcbi8vICAgcGVlck5hbWU6IHN0cmluZywgICAvLyBGb3IgcHJldHR5IHByaW50aW5nIG1lc3NhZ2VzIGFib3V0IHRoaXMgcGVlci5cbi8vICAgZGVidWc6IGJvb2xlYW4gICAgICAgICAgIC8vIHNob3VsZCB3ZSBhZGQgZXh0cmFcbi8vIH1cblBlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5zZXR1cCA9IGZ1bmN0aW9uIChzaWduYWxsaW5nQ2hhbm5lbElkLCBwZWVyTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHVuU2VydmVycywgaW5pdGlhdGVDb25uZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVhdGlvbikge1xuICB0aGlzLnBlZXJOYW1lID0gcGVlck5hbWU7XG4gIHZhciBtb2NrcyA9IHtSVENQZWVyQ29ubmVjdGlvbjogdGhpcy5SVENQZWVyQ29ubmVjdGlvbixcbiAgICAgICAgICAgICAgIFJUQ1Nlc3Npb25EZXNjcmlwdGlvbjogdGhpcy5SVENTZXNzaW9uRGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICBSVENJY2VDYW5kaWRhdGU6IHRoaXMuUlRDSWNlQ2FuZGlkYXRlfSxcbiAgICBzZWxmID0gdGhpcyxcbiAgICBkYXRhQ2hhbm5lbENhbGxiYWNrcyA9IHtcbiAgICAgIC8vIG9uT3BlbkZuIGlzIGNhbGxlZCBhdCB0aGUgcG9pbnQgbWVzc2FnZXMgd2lsbCBhY3R1YWxseSBnZXQgdGhyb3VnaC5cbiAgICAgIG9uT3BlbkZuOiBmdW5jdGlvbiAoZGF0YUNoYW5uZWwsIGluZm8pIHtcbiAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KFwib25PcGVuRGF0YUNoYW5uZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICB7IGNoYW5uZWxJZDogaW5mby5sYWJlbH0pO1xuICAgICAgfSxcbiAgICAgIG9uQ2xvc2VGbjogZnVuY3Rpb24gKGRhdGFDaGFubmVsLCBpbmZvKSB7XG4gICAgICAgIHNlbGYuZGlzcGF0Y2hFdmVudChcIm9uQ2xvc2VEYXRhQ2hhbm5lbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2hhbm5lbElkOiBpbmZvLmxhYmVsfSk7XG4gICAgICB9LFxuICAgICAgLy8gRGVmYXVsdCBvbiByZWFsIG1lc3NhZ2UgcHJpbnRzIGl0IHRvIGNvbnNvbGUuXG4gICAgICBvbk1lc3NhZ2VGbjogZnVuY3Rpb24gKGRhdGFDaGFubmVsLCBpbmZvLCBldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQuZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KCdvblJlY2VpdmVkJywge1xuICAgICAgICAgICAgJ2NoYW5uZWxMYWJlbCc6IGluZm8ubGFiZWwsXG4gICAgICAgICAgICAnYnVmZmVyJzogZXZlbnQuZGF0YVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmRhdGEgaW5zdGFuY2VvZiBCbG9iKSB7XG4gICAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KCdvblJlY2VpdmVkJywge1xuICAgICAgICAgICAgJ2NoYW5uZWxMYWJlbCc6IGluZm8ubGFiZWwsXG4gICAgICAgICAgICAnYmluYXJ5JzogZXZlbnQuZGF0YVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiAoZXZlbnQuZGF0YSkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KCdvblJlY2VpdmVkJywge1xuICAgICAgICAgICAgJ2NoYW5uZWxMYWJlbCc6IGluZm8ubGFiZWwsXG4gICAgICAgICAgICAndGV4dCc6IGV2ZW50LmRhdGFcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIERlZmF1bHQgb24gZXJyb3IsIHByaW50cyBpdC5cbiAgICAgIG9uRXJyb3JGbjogZnVuY3Rpb24gKGRhdGFDaGFubmVsLCBpbmZvLCBlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihkYXRhQ2hhbm5lbC5wZWVyTmFtZSArIFwiOiBkYXRhQ2hhbm5lbChcIiArXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YUNoYW5uZWwuZGF0YUNoYW5uZWwubGFiZWwgKyBcIik6IGVycm9yOiBcIiwgZXJyKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNoYW5uZWxJZCxcbiAgICBvcGVuRGF0YUNoYW5uZWxDb250aW51YXRpb247XG5cbiAgdGhpcy5wZWVyID0gbmV3IFNpbXBsZURhdGFQZWVyKHRoaXMucGVlck5hbWUsIHN0dW5TZXJ2ZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUNoYW5uZWxDYWxsYmFja3MsIG1vY2tzKTtcblxuICAvLyBTZXR1cCBsaW5rIGJldHdlZW4gRnJlZWRvbSBtZXNzYWdpbmcgYW5kIF9wZWVyJ3Mgc2lnbmFsbGluZy5cbiAgLy8gTm90ZTogdGhlIHNpZ25hbGxpbmcgY2hhbm5lbCBzaG91bGQgb25seSBiZSBzZW5kaW5nIHJlY2VpdmVpbmcgc3RyaW5ncy5cbiAgdGhpcy5jb3JlLmJpbmRDaGFubmVsKHNpZ25hbGxpbmdDaGFubmVsSWQsIGZ1bmN0aW9uIChjaGFubmVsKSB7XG4gICAgdGhpcy5zaWduYWxsaW5nQ2hhbm5lbCA9IGNoYW5uZWw7XG4gICAgdGhpcy5wZWVyLnNldFNlbmRTaWduYWxNZXNzYWdlKGZ1bmN0aW9uIChtc2cpIHtcbiAgICAgIHRoaXMuc2lnbmFsbGluZ0NoYW5uZWwuZW1pdCgnbWVzc2FnZScsIG1zZyk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnNpZ25hbGxpbmdDaGFubmVsLm9uKCdtZXNzYWdlJyxcbiAgICAgICAgdGhpcy5wZWVyLmhhbmRsZVNpZ25hbE1lc3NhZ2UuYmluZCh0aGlzLnBlZXIpKTtcbiAgICB0aGlzLnNpZ25hbGxpbmdDaGFubmVsLmVtaXQoJ3JlYWR5Jyk7XG4gICAgaWYgKCFpbml0aWF0ZUNvbm5lY3Rpb24pIHtcbiAgICAgIHRoaXMucGVlci5ydW5XaGVuQ29ubmVjdGVkKGNvbnRpbnVhdGlvbik7XG4gICAgfVxuICB9LmJpbmQodGhpcykpO1xuXG4gIGlmIChpbml0aWF0ZUNvbm5lY3Rpb24pIHtcbiAgICAvLyBTZXR1cCBhIGNvbm5lY3Rpb24gcmlnaHQgYXdheSwgdGhlbiBpbnZva2UgY29udGludWF0aW9uLlxuICAgIGNvbnNvbGUubG9nKHRoaXMucGVlck5hbWUgKyAnIGluaXRpYXRpbmcgY29ubmVjdGlvbicpO1xuICAgIGNoYW5uZWxJZCA9ICdoZWxsbycgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCk7XG4gICAgb3BlbkRhdGFDaGFubmVsQ29udGludWF0aW9uID0gZnVuY3Rpb24gKHN1Y2Nlc3MsIGVycm9yKSB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29udGludWF0aW9uKHVuZGVmaW5lZCwgZXJyb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbG9zZURhdGFDaGFubmVsKGNoYW5uZWxJZCwgY29udGludWF0aW9uKTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcyk7XG4gICAgdGhpcy5vcGVuRGF0YUNoYW5uZWwoY2hhbm5lbElkLCBvcGVuRGF0YUNoYW5uZWxDb250aW51YXRpb24pO1xuICB9XG59O1xuXG5QZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuY3JlYXRlT2ZmZXIgPSBmdW5jdGlvbiAoY29uc3RyYWludHMsIGNvbnRpbnVhdGlvbikge1xuICB0aGlzLnBlZXIuY3JlYXRlT2ZmZXIoY29uc3RyYWludHMsIGNvbnRpbnVhdGlvbik7XG59O1xuXG4vLyBUT0RPOiBkZWxheSBjb250aW51YXRpb24gdW50aWwgdGhlIG9wZW4gY2FsbGJhY2sgZnJvbSBfcGVlciBpcyBjYWxsZWQuXG5QZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUub3BlbkRhdGFDaGFubmVsID0gZnVuY3Rpb24gKGNoYW5uZWxJZCwgY29udGludWF0aW9uKSB7XG4gIHRoaXMucGVlci5vcGVuRGF0YUNoYW5uZWwoY2hhbm5lbElkLCBjb250aW51YXRpb24pO1xufTtcblxuUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmNsb3NlRGF0YUNoYW5uZWwgPSBmdW5jdGlvbiAoY2hhbm5lbElkLCBjb250aW51YXRpb24pIHtcbiAgdGhpcy5wZWVyLmNsb3NlQ2hhbm5lbChjaGFubmVsSWQpO1xuICBjb250aW51YXRpb24oKTtcbn07XG5cbi8vIENhbGxlZCB0byBzZW5kIGEgbWVzc2FnZSBvdmVyIHRoZSBnaXZlbiBkYXRhY2hhbm5lbCB0byBhIHBlZXIuIElmIHRoZSBkYXRhXG4vLyBjaGFubmVsIGRvZXNuJ3QgYWxyZWFkeSBleGlzdCwgdGhlIERhdGFQZWVyIGNyZWF0ZXMgaXQuXG5QZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChzZW5kSW5mbywgY29udGludWF0aW9uKSB7XG4gIHZhciBvYmpUb1NlbmQgPSBzZW5kSW5mby50ZXh0IHx8IHNlbmRJbmZvLmJ1ZmZlciB8fCBzZW5kSW5mby5iaW5hcnk7XG4gIGlmICh0eXBlb2Ygb2JqVG9TZW5kID09PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJObyB2YWxpZCBkYXRhIHRvIHNlbmQgaGFzIGJlZW4gcHJvdmlkZWQuXCIsIHNlbmRJbmZvKTtcbiAgICByZXR1cm47XG4gIH1cbiAgLy9ERUJVR1xuICAvLyBvYmpUb1NlbmQgPSBuZXcgQXJyYXlCdWZmZXIoNCk7XG4gIC8vREVCVUdcbiAgdGhpcy5wZWVyLnNlbmQoc2VuZEluZm8uY2hhbm5lbExhYmVsLCBvYmpUb1NlbmQsIGNvbnRpbnVhdGlvbik7XG59O1xuXG5QZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0QnVmZmVyZWRBbW91bnQgPSBmdW5jdGlvbiAoY2hhbm5lbElkLCBjb250aW51YXRpb24pIHtcbiAgY29udGludWF0aW9uKHRoaXMucGVlci5nZXRCdWZmZXJlZEFtb3VudChjaGFubmVsSWQpKTtcbn07XG5cblBlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uIChjb250aW51YXRpb24pIHtcbiAgaWYgKHRoaXMucGVlci5pc0Nsb3NlZCgpKSB7XG4gICAgLy8gUGVlciBhbHJlYWR5IGNsb3NlZCwgcnVuIGNvbnRpbnVhdGlvbiB3aXRob3V0IGRpc3BhdGNoaW5nIGV2ZW50LlxuICAgIGNvbnRpbnVhdGlvbigpO1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLnBlZXIuY2xvc2UoKTtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KFwib25DbG9zZVwiKTtcbiAgY29udGludWF0aW9uKCk7XG59O1xuXG5leHBvcnRzLnByb3ZpZGVyID0gUGVlckNvbm5lY3Rpb247XG5leHBvcnRzLm5hbWUgPSAnY29yZS5wZWVyY29ubmVjdGlvbic7XG5leHBvcnRzLmZsYWdzID0ge21vZHVsZTogdHJ1ZX07XG4iLCIvKmpzbGludCBpbmRlbnQ6MixzbG9wcHk6dHJ1ZSwgbm9kZTp0cnVlICovXG5cbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vLi4vc3JjL3V0aWwnKTtcblxudmFyIHVuQXR0YWNoZWRDaGFubmVscyA9IHt9O1xudmFyIGFsbG9jYXRlQ2hhbm5lbCA9IGZ1bmN0aW9uIChkYXRhQ2hhbm5lbCkge1xuICB2YXIgaWQgPSB1dGlsLmdldElkKCk7XG4gIHVuQXR0YWNoZWRDaGFubmVsc1tpZF0gPSBkYXRhQ2hhbm5lbDtcbiAgcmV0dXJuIGlkO1xufTtcblxudmFyIFJUQ0RhdGFDaGFubmVsQWRhcHRlciA9IGZ1bmN0aW9uIChjYXAsIGRpc3BhdGNoRXZlbnRzLCBpZCkge1xuICB0aGlzLmRpc3BhdGNoRXZlbnQgPSBkaXNwYXRjaEV2ZW50cztcbiAgaWYgKCF1bkF0dGFjaGVkQ2hhbm5lbHNbaWRdKSB7XG4gICAgY29uc29sZS53YXJuKCdJbnZhbGlkIElELCBjcmVhdGluZyBhY3Rpbmcgb24gdW5hdHRhY2hlZCBEYXRhQ2hhbm5lbCcpO1xuICAgIHZhciBDb25uZWN0aW9uID0gcmVxdWlyZSgnLi9jb3JlLnJ0Y3BlZXJjb25uZWN0aW9uJykucHJvdmlkZXIsXG4gICAgICBwcm92aWRlciA9IG5ldyBDb25uZWN0aW9uKCk7XG4gICAgaWQgPSBwcm92aWRlci5jcmVhdGVEYXRhQ2hhbm5lbCgpO1xuICAgIHByb3ZpZGVyLmNsb3NlKCk7XG4gIH1cblxuICB0aGlzLmNoYW5uZWwgPSB1bkF0dGFjaGVkQ2hhbm5lbHNbaWRdO1xuICBkZWxldGUgdW5BdHRhY2hlZENoYW5uZWxzW2lkXTtcblxuICB0aGlzLmV2ZW50cyA9IFtcbiAgICAnb25vcGVuJyxcbiAgICAnb25lcnJvcicsXG4gICAgJ29uY2xvc2UnLFxuICAgICdvbm1lc3NhZ2UnXG4gIF07XG4gIHRoaXMubWFuYWdlRXZlbnRzKHRydWUpO1xufTtcblxuLy8gQXR0YWNoIG9yIGRldGFjaCBsaXN0ZW5lcnMgZm9yIGV2ZW50cyBhZ2FpbnN0IHRoZSBjb25uZWN0aW9uLlxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5tYW5hZ2VFdmVudHMgPSBmdW5jdGlvbiAoYXR0YWNoKSB7XG4gIHRoaXMuZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGF0dGFjaCkge1xuICAgICAgdGhpc1tldmVudF0gPSB0aGlzW2V2ZW50XS5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5jaGFubmVsW2V2ZW50XSA9IHRoaXNbZXZlbnRdO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdGhpcy5jaGFubmVsW2V2ZW50XTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLmdldExhYmVsID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrKHRoaXMuY2hhbm5lbC5sYWJlbCk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLmdldE9yZGVyZWQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sodGhpcy5jaGFubmVsLm9yZGVyZWQpO1xufTtcblxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5nZXRNYXhQYWNrZXRMaWZlVGltZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBjYWxsYmFjayh0aGlzLmNoYW5uZWwubWF4UGFja2V0TGlmZVRpbWUpO1xufTtcblxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5nZXRNYXhSZXRyYW5zbWl0cyA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBjYWxsYmFjayh0aGlzLmNoYW5uZWwubWF4UmV0cmFuc21pdHMpO1xufTtcblxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5nZXRQcm90b2NvbCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBjYWxsYmFjayh0aGlzLmNoYW5uZWwucHJvdG9jb2wpO1xufTtcblxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5nZXROZWdvdGlhdGVkID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrKHRoaXMuY2hhbm5lbC5uZWdvdGlhdGVkKTtcbn07XG5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUuZ2V0SWQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sodGhpcy5jaGFubmVsLmlkKTtcbn07XG5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUuZ2V0UmVhZHlTdGF0ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBjYWxsYmFjayh0aGlzLmNoYW5uZWwucmVhZHlTdGF0ZSk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLmdldEJ1ZmZlcmVkQW1vdW50ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrKHRoaXMuY2hhbm5lbC5idWZmZXJlZEFtb3VudCk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLmdldEJpbmFyeVR5cGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sodGhpcy5jaGFubmVsLmJpbmFyeVR5cGUpO1xufTtcblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUuc2V0QmluYXJ5VHlwZSA9IGZ1bmN0aW9uIChiaW5hcnlUeXBlLCBjYWxsYmFjaykge1xuICB0aGlzLmNoYW5uZWwuYmluYXJ5VHlwZSA9IGJpbmFyeVR5cGU7XG4gIGNhbGxiYWNrKCk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAodGV4dCwgY2FsbGJhY2spIHtcbiAgdGhpcy5jaGFubmVsLnNlbmQodGV4dCk7XG4gIGNhbGxiYWNrKCk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLnNlbmRCdWZmZXIgPSBmdW5jdGlvbiAoYnVmZmVyLCBjYWxsYmFjaykge1xuICB0aGlzLmNoYW5uZWwuc2VuZChidWZmZXIpO1xuICBjYWxsYmFjaygpO1xufTtcblxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBpZiAoIXRoaXMuY2hhbm5lbCkge1xuICAgIHJldHVybiBjYWxsYmFjaygpO1xuICB9XG4gIHRoaXMubWFuYWdlRXZlbnRzKGZhbHNlKTtcbiAgdGhpcy5jaGFubmVsLmNsb3NlKCk7XG4gIGNhbGxiYWNrKCk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLm9ub3BlbiA9IGZ1bmN0aW9uIChldmVudCkge1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoJ29ub3BlbicsIGV2ZW50Lm1lc3NhZ2UpO1xufTtcblxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5vbmVycm9yID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25lcnJvcicsIHtcbiAgICBlcnJjb2RlOiBldmVudC50eXBlLFxuICAgIG1lc3NhZ2U6IGV2ZW50Lm1lc3NhZ2VcbiAgfSk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLm9uY2xvc2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbmNsb3NlJywgZXZlbnQubWVzc2FnZSk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAodHlwZW9mIGV2ZW50LmRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbm1lc3NhZ2UnLCB7dGV4dDogZXZlbnQuZGF0YX0pO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25tZXNzYWdlJywge2J1ZmZlcjogZXZlbnQuZGF0YX0pO1xuICB9XG59O1xuXG5leHBvcnRzLm5hbWUgPSBcImNvcmUucnRjZGF0YWNoYW5uZWxcIjtcbmV4cG9ydHMucHJvdmlkZXIgPSBSVENEYXRhQ2hhbm5lbEFkYXB0ZXI7XG5leHBvcnRzLmFsbG9jYXRlID0gYWxsb2NhdGVDaGFubmVsO1xuIiwiLypqc2xpbnQgaW5kZW50OjIsc2xvcHB5OnRydWUsIG5vZGU6dHJ1ZSAqL1xuXG52YXIgYWRhcHRlciA9IHJlcXVpcmUoJ3dlYnJ0Yy1hZGFwdGVyJyk7XG52YXIgUHJvbWlzZUNvbXBhdCA9IHJlcXVpcmUoJ2VzNi1wcm9taXNlJykuUHJvbWlzZTtcbnZhciBSVENQZWVyQ29ubmVjdGlvbiA9IGFkYXB0ZXIuUlRDUGVlckNvbm5lY3Rpb247XG52YXIgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uID0gYWRhcHRlci5SVENTZXNzaW9uRGVzY3JpcHRpb247XG52YXIgUlRDSWNlQ2FuZGlkYXRlID0gYWRhcHRlci5SVENJY2VDYW5kaWRhdGU7XG5cbnZhciBEYXRhQ2hhbm5lbCA9IHJlcXVpcmUoJy4vY29yZS5ydGNkYXRhY2hhbm5lbCcpO1xuXG52YXIgUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyID0gZnVuY3Rpb24gKGNhcCwgZGlzcGF0Y2hFdmVudCwgY29uZmlndXJhdGlvbikge1xuICB0aGlzLmRpc3BhdGNoRXZlbnQgPSBkaXNwYXRjaEV2ZW50O1xuICB0cnkge1xuICAgIHRoaXMuY29ubmVjdGlvbiA9IG5ldyBSVENQZWVyQ29ubmVjdGlvbihjb25maWd1cmF0aW9uKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIE5vdGU6IFlvdSBjYW4ndCBhc2sgdGhlIHByb3ZpZGVyIHRvIGNsb3NlIHlvdSBzeW5jaHJvbm91c2x5LCBzaW5jZVxuICAgIC8vIHRoZSBjb25zdHJ1Y3RvciBoYXMgbm90IHlldCByZXR1cm5lZCwgc28gdGhlcmUncyBubyAndGhpcycgdGhhdFxuICAgIC8vIHRoZSBwcm92aWRlciBjYW4ga25vdyBhYm91dCB5ZXQuXG4gICAgc2V0VGltZW91dChjYXAucHJvdmlkZXIuY2xvc2UuYmluZChjYXAucHJvdmlkZXIsIHRoaXMpLCAwKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLmV2ZW50cyA9IFtcbiAgICAnb25kYXRhY2hhbm5lbCcsXG4gICAgJ29ubmVnb3RpYXRpb25uZWVkZWQnLFxuICAgICdvbmljZWNhbmRpZGF0ZScsXG4gICAgJ29uc2lnbmFsaW5nc3RhdGVjaGFuZ2UnLFxuICAgICdvbmFkZHN0cmVhbScsXG4gICAgJ29ucmVtb3Zlc3RyZWFtJyxcbiAgICAnb25pY2Vjb25uZWN0aW9uc3RhdGVjaGFuZ2UnXG4gIF07XG4gIHRoaXMubWFuYWdlRXZlbnRzKHRydWUpO1xufTtcblxuLy8gQXR0YWNoIG9yIGRldGFjaCBsaXN0ZW5lcnMgZm9yIGV2ZW50cyBhZ2FpbnN0IHRoZSBjb25uZWN0aW9uLlxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5tYW5hZ2VFdmVudHMgPSBmdW5jdGlvbiAoYXR0YWNoKSB7XG4gIHRoaXMuZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGF0dGFjaCkge1xuICAgICAgdGhpc1tldmVudF0gPSB0aGlzW2V2ZW50XS5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5jb25uZWN0aW9uW2V2ZW50XSA9IHRoaXNbZXZlbnRdO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb25uZWN0aW9uKSB7XG4gICAgICBkZWxldGUgdGhpcy5jb25uZWN0aW9uW2V2ZW50XTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLmNyZWF0ZU9mZmVyID0gZnVuY3Rpb24gKGNvbnN0cmFpbnRzKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdGhpcy5jb25uZWN0aW9uLmNyZWF0ZU9mZmVyKHJlc29sdmUsIHJlamVjdCwgY29uc3RyYWludHMpO1xuICB9LmJpbmQodGhpcykpO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5jcmVhdGVBbnN3ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdGhpcy5jb25uZWN0aW9uLmNyZWF0ZUFuc3dlcihyZXNvbHZlLCByZWplY3QpO1xuICB9LmJpbmQodGhpcykpO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5zZXRMb2NhbERlc2NyaXB0aW9uID0gZnVuY3Rpb24gKGRlc2NyaXB0aW9uKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdGhpcy5jb25uZWN0aW9uLnNldExvY2FsRGVzY3JpcHRpb24obmV3IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbihkZXNjcmlwdGlvbiksXG4gICAgICByZXNvbHZlLFxuICAgICAgcmVqZWN0KTtcbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuZ2V0TG9jYWxEZXNjcmlwdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSh0aGlzLmNvbm5lY3Rpb24ubG9jYWxEZXNjcmlwdGlvbik7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLnNldFJlbW90ZURlc2NyaXB0aW9uID0gZnVuY3Rpb24gKGRlc2NyaXB0aW9uKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdGhpcy5jb25uZWN0aW9uLnNldFJlbW90ZURlc2NyaXB0aW9uKG5ldyBSVENTZXNzaW9uRGVzY3JpcHRpb24oZGVzY3JpcHRpb24pLFxuICAgICAgcmVzb2x2ZSxcbiAgICAgIHJlamVjdCk7XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLmdldFJlbW90ZURlc2NyaXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHRoaXMuY29ubmVjdGlvbi5yZW1vdGVEZXNjcmlwdGlvbik7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLmdldFNpZ25hbGluZ1N0YXRlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHRoaXMuY29ubmVjdGlvbi5zaWduYWxpbmdTdGF0ZSk7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLnVwZGF0ZUljZSA9IGZ1bmN0aW9uIChjb25maWd1cmF0aW9uKSB7XG4gIHRoaXMuY29ubmVjdGlvbi51cGRhdGVJY2UoY29uZmlndXJhdGlvbik7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUoKTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuYWRkSWNlQ2FuZGlkYXRlID0gZnVuY3Rpb24gKGNhbmRpZGF0ZSkge1xuICByZXR1cm4gbmV3IFByb21pc2VDb21wYXQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHRoaXMuY29ubmVjdGlvbi5hZGRJY2VDYW5kaWRhdGUobmV3IFJUQ0ljZUNhbmRpZGF0ZShjYW5kaWRhdGUpLFxuICAgICAgcmVzb2x2ZSxcbiAgICAgIHJlamVjdCk7XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLmdldEljZUdhdGhlcmluZ1N0YXRlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHRoaXMuY29ubmVjdGlvbi5pY2VHYXRoZXJpbmdTdGF0ZSk7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLmdldEljZUNvbm5lY3Rpb25TdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSh0aGlzLmNvbm5lY3Rpb24uaWNlQ29ubmVjdGlvblN0YXRlKTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuZ2V0Q29uZmlndXJhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNvbmZpZ3VyYXRpb24gPSB0aGlzLmNvbm5lY3Rpb24uZ2V0Q29uZmlndXJhdGlvbigpO1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKGNvbmZpZ3VyYXRpb24pO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5nZXRMb2NhbFN0cmVhbXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlamVjdCh7XG4gICAgZXJyY29kZTogLTEsXG4gICAgbWVzc2FnZTogXCJOb3QgSW1wbGVtZW50ZWRcIlxuICB9KTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuZ2V0UmVtb3RlU3RyZWFtcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVqZWN0KHtcbiAgICBlcnJjb2RlOiAtMSxcbiAgICBtZXNzYWdlOiBcIk5vdCBJbXBsZW1lbnRlZFwiXG4gIH0pO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5nZXRTdHJlYW1CeUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlamVjdCh7XG4gICAgZXJyY29kZTogLTEsXG4gICAgbWVzc2FnZTogXCJOb3QgSW1wbGVtZW50ZWRcIlxuICB9KTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuYWRkU3RyZWFtID0gZnVuY3Rpb24gKGlkKSB7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlamVjdCh7XG4gICAgZXJyY29kZTogLTEsXG4gICAgbWVzc2FnZTogXCJOb3QgSW1wbGVtZW50ZWRcIlxuICB9KTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUucmVtb3ZlU3RyZWFtID0gZnVuY3Rpb24gKGlkKSB7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlamVjdCh7XG4gICAgZXJyY29kZTogLTEsXG4gICAgbWVzc2FnZTogXCJOb3QgSW1wbGVtZW50ZWRcIlxuICB9KTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghdGhpcy5jb25uZWN0aW9uKSB7XG4gICAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSgpO1xuICB9XG4gIHRoaXMubWFuYWdlRXZlbnRzKGZhbHNlKTtcbiAgdHJ5IHtcbiAgICB0aGlzLmNvbm5lY3Rpb24uY2xvc2UoKTtcbiAgICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZWplY3Qoe1xuICAgICAgZXJyY29kZTogZS5uYW1lLFxuICAgICAgbWVzc2FnZTogZS5tZXNzYWdlXG4gICAgfSk7XG4gIH1cbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuY3JlYXRlRGF0YUNoYW5uZWwgPSBmdW5jdGlvbiAobGFiZWwsIGRhdGFDaGFubmVsRGljdCkge1xuICB2YXIgaWQgPSBEYXRhQ2hhbm5lbC5hbGxvY2F0ZSh0aGlzLmNvbm5lY3Rpb24uY3JlYXRlRGF0YUNoYW5uZWwobGFiZWwsIGRhdGFDaGFubmVsRGljdCkpO1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKGlkKTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuZ2V0U3RhdHMgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ29tcGF0KGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB0aGlzLmNvbm5lY3Rpb24uZ2V0U3RhdHMoc2VsZWN0b3IsIHJlc29sdmUsIHJlamVjdCk7XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLm9uZGF0YWNoYW5uZWwgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgdmFyIGlkID0gRGF0YUNoYW5uZWwuYWxsb2NhdGUoZXZlbnQuY2hhbm5lbCk7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25kYXRhY2hhbm5lbCcsIHtjaGFubmVsOiBpZH0pO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5vbm5lZ290aWF0aW9ubmVlZGVkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25uZWdvdGlhdGlvbm5lZWRlZCcsIGV2ZW50Lm1lc3NhZ2UpO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5vbmljZWNhbmRpZGF0ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICB2YXIgbXNnO1xuICBpZiAoZXZlbnQuY2FuZGlkYXRlICYmIGV2ZW50LmNhbmRpZGF0ZS5jYW5kaWRhdGUpIHtcbiAgICBtc2cgPSB7XG4gICAgICBjYW5kaWRhdGU6IHtcbiAgICAgICAgY2FuZGlkYXRlOiBldmVudC5jYW5kaWRhdGUuY2FuZGlkYXRlLFxuICAgICAgICBzZHBNaWQ6IGV2ZW50LmNhbmRpZGF0ZS5zZHBNaWQsXG4gICAgICAgIHNkcE1MaW5lSW5kZXg6IGV2ZW50LmNhbmRpZGF0ZS5zZHBNTGluZUluZGV4XG4gICAgICB9XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtc2cgPSB7XG4gICAgICBjYW5kaWRhdGU6IG51bGxcbiAgICB9O1xuICB9XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25pY2VjYW5kaWRhdGUnLCBtc2cpO1xufTtcbiAgXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLm9uc2lnbmFsaW5nc3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbnNpZ25hbGluZ3N0YXRlY2hhbmdlJywgZXZlbnQubWVzc2FnZSk7XG59O1xuICBcblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUub25hZGRzdHJlYW0gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgLy9UT0RPOiBwcm92aWRlIElEIG9mIGFsbG9jYXRlZCBzdHJlYW0uXG4gIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25hZGRzdHJlYW0nLCBldmVudC5zdHJlYW0pO1xufTtcbiAgXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLm9ucmVtb3Zlc3RyZWFtID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIC8vVE9ETzogcHJvdmlkZSBJRCBvZiBkZWFsbG9jYXRlZCBzdHJlYW0uXG4gIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25yZW1vdmVzdHJlYW0nLCBldmVudC5zdHJlYW0pO1xufTtcbiAgXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLm9uaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25pY2Vjb25uZWN0aW9uc3RhdGVjaGFuZ2UnLCBldmVudC5tZXNzYWdlKTtcbn07XG5cblxuZXhwb3J0cy5uYW1lID0gXCJjb3JlLnJ0Y3BlZXJjb25uZWN0aW9uXCI7XG5leHBvcnRzLnByb3ZpZGVyID0gUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyO1xuZXhwb3J0cy5zdHlsZSA9IFwicHJvdmlkZVByb21pc2VzXCI7XG5leHBvcnRzLmZsYWdzID0ge3Byb3ZpZGVyOiB0cnVlfTtcbiIsIi8qZ2xvYmFscyBsb2NhbFN0b3JhZ2UgKi9cbi8qanNsaW50IGluZGVudDoyLHNsb3BweTp0cnVlLG5vZGU6dHJ1ZSAqL1xudmFyIHV0aWwgPSByZXF1aXJlKCcuLi8uLi9zcmMvdXRpbCcpO1xuXG4vKipcbiAqIEEgRnJlZURPTSBjb3JlLnN0b3JhZ2UgcHJvdmlkZXIgdGhhdCBkZXBlbmRzIG9uIGxvY2FsU3RvcmFnZVxuICogVGh1cywgdGhpcyBvbmx5IHdvcmtzIGluIHRoZSBjb250ZXh0IG9mIGEgd2VicGFnZSBhbmQgaGFzXG4gKiBzb21lIHNpemUgbGltaXRhdGlvbnMuXG4gKiBOb3RlIHRoYXQgdGhpcyBjYW4gY29uZmxpY3Qgd2l0aCBvdGhlciBzY3JpcHRzIHVzaW5nIGxvY2FsU3RvcmFnZVxuICogYXMga2V5cyBhcmUgcmF3XG4gKiBAQ2xhc3MgU3RvcmFnZV91bnByaXZpbGVnZWRcbiAqIEBjb25zdHJ1Y3RvclxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjYXAgQ2FwYWJpbGl0aWVzIGZvciB0aGUgcHJvdmlkZXJcbiAqL1xudmFyIFN0b3JhZ2VfdW5wcml2aWxlZ2VkID0gZnVuY3Rpb24gKGNhcCwgZGlzcGF0Y2hFdmVudCkge1xuICB1dGlsLmhhbmRsZUV2ZW50cyh0aGlzKTtcbn07XG5cbi8qKlxuICogTGlzdHMga2V5cyBpbiB0aGUgc3RvcmFnZSByZXBvc2l0b3J5XG4gKiBAbWV0aG9kIGtleXNcbiAqL1xuU3RvcmFnZV91bnByaXZpbGVnZWQucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbiAoY29udGludWF0aW9uKSB7XG4gIHZhciByZXN1bHQgPSBbXSxcbiAgICBpO1xuICBmb3IgKGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgcmVzdWx0LnB1c2gobG9jYWxTdG9yYWdlLmtleShpKSk7XG4gIH1cbiAgY29udGludWF0aW9uKHJlc3VsdCk7XG59O1xuXG4vKipcbiAqIEdldCBhIGtleSBmcm9tIHRoZSBzdG9yYWdlIHJlcG9zaXRvcnkuXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IFRoZSBpdGVtIHRvIGdldCBmcm9tIHN0b3JhZ2UuXG4gKiBAbWV0aG9kIGdldFxuICovXG5TdG9yYWdlX3VucHJpdmlsZWdlZC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSwgY29udGludWF0aW9uKSB7XG4gIHRyeSB7XG4gICAgdmFyIHZhbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgY29udGludWF0aW9uKHZhbCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb250aW51YXRpb24obnVsbCk7XG4gIH1cbn07XG5cbi8qKlxuICogU2V0IGEga2V5IGluIHRoZSBzdG9yYWdlIHJlcG9zaXRvcnkuXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IFRoZSBpdGVtIHRvIHNhdmUgaW4gc3RvcmFnZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2F2ZSBpbiBzdG9yYWdlLlxuICogQG1ldGhvZCBzZXRcbiAqL1xuU3RvcmFnZV91bnByaXZpbGVnZWQucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlLCBjb250aW51YXRpb24pIHtcbiAgdmFyIHJldCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICBjb250aW51YXRpb24ocmV0KTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGEga2V5IGZyb20gdGhlIHN0b3JhZ2UgcmVwb3NpdG9yeS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgVGhlIGl0ZW0gdG8gcmVtb3ZlIGZyb20gc3RvcmFnZTtcbiAqIEBtZXRob2QgcmVtb3ZlXG4gKi9cblN0b3JhZ2VfdW5wcml2aWxlZ2VkLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoa2V5LCBjb250aW51YXRpb24pIHtcbiAgdmFyIHJldCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gIGNvbnRpbnVhdGlvbihyZXQpO1xufTtcblxuLyoqXG4gKiBSZXNldCB0aGUgY29udGVudHMgb2YgdGhlIHN0b3JhZ2UgcmVwb3NpdG9yeS5cbiAqIEBtZXRob2QgY2xlYXJcbiAqL1xuU3RvcmFnZV91bnByaXZpbGVnZWQucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKGNvbnRpbnVhdGlvbikge1xuICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgY29udGludWF0aW9uKCk7XG59O1xuXG5leHBvcnRzLnByb3ZpZGVyID0gU3RvcmFnZV91bnByaXZpbGVnZWQ7XG5leHBvcnRzLm5hbWUgPSAnY29yZS5zdG9yYWdlJztcbiIsIi8qanNsaW50IGluZGVudDoyLHdoaXRlOnRydWUsc2xvcHB5OnRydWUsbm9kZTp0cnVlICovXG52YXIgRXZlbnRJbnRlcmZhY2UgPSByZXF1aXJlKCcuLi8uLi9zcmMvcHJveHkvZXZlbnRJbnRlcmZhY2UnKTtcbnZhciBDb25zdW1lciA9IHJlcXVpcmUoJy4uLy4uL3NyYy9jb25zdW1lcicpO1xudmFyIHV0aWwgPSByZXF1aXJlKCcuLi8uLi9zcmMvdXRpbCcpO1xuXG4vKipcbiAqIENvcmUgZnJlZWRvbSBzZXJ2aWNlcyBhdmFpbGFibGUgdG8gYWxsIG1vZHVsZXMuXG4gKiBDcmVhdGVkIGJ5IHRoZSBlbnZpcm9ubWVudCBoZWxwZXIgaW4gcmVzcG9uc2UgdG8gYSAnY29yZScgcmVxdWVzdC5cbiAqIEBDbGFzcyBDb3JlX3VucHJpdmlsZWdlZFxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge01hbmFnZXJ9IG1hbmFnZXIgVGhlIG1hbmFnZXIgdGhpcyBjb3JlIGlzIGNvbm5lY3RlZCB3aXRoLlxuICogQHByaXZhdGVcbiAqL1xudmFyIENvcmVfdW5wcml2aWxlZ2VkID0gZnVuY3Rpb24obWFuYWdlciwgcG9zdE1lc3NhZ2UpIHtcbiAgdGhpcy5tYW5hZ2VyID0gbWFuYWdlci5tb2R1bGU7XG4gIHRoaXMuZGVidWcgPSB0aGlzLm1hbmFnZXIuZGVidWc7XG59O1xuXG5Db3JlX3VucHJpdmlsZWdlZC51bmJvdW5kQ2hhbm5lbHMgPSB7fTtcblxuQ29yZV91bnByaXZpbGVnZWQuY29udGV4dElkID0gdW5kZWZpbmVkO1xuXG4vKipcbiAqIENyZWF0ZSBhIGN1c3RvbSBjaGFubmVsLlxuICogUmV0dXJucyB0aGUgc3RydWN0dXJlIHtjaGFubmVsOiBQcm94eSwgaWRlbnRpZmllcjogT2JqZWN0fSxcbiAqIHdoZXJlIHRoZSBpZGVudGlmaWVyIGNhbiBiZSAncmVkZWVtZWQnIGJ5IGFub3RoZXIgbW9kdWxlIG9yIHByb3ZpZGVyIHVzaW5nXG4gKiBiaW5kIGNoYW5uZWwsIGF0IHdoaWNoIHBvaW50IHRoZSBkZWZlcnJlZCBvYmplY3Qgd2lsbCByZXNvbHZlIHdpdGggYSBjaGFubmVsXG4gKiBiZXR3ZWVuIHRoZSB0d28gZW5kcG9pbnRzLlxuICogQG1ldGhvZCBjcmVhdGVDaGFubmVsXG4gKiBAcGFyYW1zIHtGdW5jdGlvbn0gY29udGludWF0aW9uIE1ldGhvZCB0byBjYWxsIHdpdGggdGhlIGNvc250cnVjdGVkIHN0cnVjdHVyZS5cbiAqL1xuQ29yZV91bnByaXZpbGVnZWQucHJvdG90eXBlLmNyZWF0ZUNoYW5uZWwgPSBmdW5jdGlvbihjb250aW51YXRpb24pIHtcbiAgdmFyIHByb3h5ID0gbmV3IENvbnN1bWVyKEV2ZW50SW50ZXJmYWNlLCB0aGlzLm1hbmFnZXIuZGVidWcpLFxuICAgICAgaWQgPSB1dGlsLmdldElkKCksXG4gICAgICBjaGFuID0gdGhpcy5nZXRDaGFubmVsKHByb3h5KTtcbiAgdGhpcy5tYW5hZ2VyLnNldHVwKHByb3h5KTtcblxuICBpZiAodGhpcy5tYW5hZ2VyLmRlbGVnYXRlICYmIHRoaXMubWFuYWdlci50b0RlbGVnYXRlLmNvcmUpIHtcbiAgICB0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm1hbmFnZXIuZGVsZWdhdGUsIHtcbiAgICAgIHR5cGU6ICdEZWxlZ2F0aW9uJyxcbiAgICAgIHJlcXVlc3Q6ICdoYW5kbGUnLFxuICAgICAgZmxvdzogJ2NvcmUnLFxuICAgICAgbWVzc2FnZToge1xuICAgICAgICB0eXBlOiAncmVnaXN0ZXInLFxuICAgICAgICBpZDogaWRcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBDb3JlX3VucHJpdmlsZWdlZC51bmJvdW5kQ2hhbm5lbHNbaWRdID0ge1xuICAgIGxvY2FsOiB0cnVlLFxuICAgIHByb3h5OiBwcm94eVxuICB9O1xuXG4gIHByb3h5Lm9uY2UoJ3N0YXJ0JywgdGhpcy5nZXRDaGFubmVsLmJpbmQodGhpcywgcHJveHkpKTtcblxuICBjb250aW51YXRpb24oe1xuICAgIGNoYW5uZWw6IGNoYW4sXG4gICAgaWRlbnRpZmllcjogaWRcbiAgfSk7XG59O1xuXG5Db3JlX3VucHJpdmlsZWdlZC5wcm90b3R5cGUuZ2V0Q2hhbm5lbCA9IGZ1bmN0aW9uKHByb3h5KSB7XG4gIHZhciBpZmFjZSA9IHByb3h5LmdldFByb3h5SW50ZXJmYWNlKCksXG4gICAgICBjaGFuID0gaWZhY2UoKTtcbiAgY2hhbi5jbG9zZSA9IGlmYWNlLmNsb3NlO1xuICBjaGFuLm9uQ2xvc2UgPSBpZmFjZS5vbkNsb3NlO1xuICBpZmFjZS5vbkNsb3NlKGNoYW4sIGZ1bmN0aW9uKCkge1xuICAgIHByb3h5LmRvQ2xvc2UoKTtcbiAgfSk7XG4gIHJldHVybiBjaGFuO1xufTtcblxuLyoqXG4gKiBSZWNlaXZlIGEgbWVzc2FnZSBmcm9tIGFub3RoZXIgY29yZSBpbnN0YW5jZS5cbiAqIE5vdGU6IENvcmVfdW5wcml2aWxlZ2VkIGlzIG5vdCByZWdpc3RlcmVkIG9uIHRoZSBodWIuIGl0IGlzIGEgcHJvdmlkZXIsXG4gKiAgICAgYXMgaXQncyBsb2NhdGlvbiBhbmQgbmFtZSB3b3VsZCBpbmRpY2F0ZS4gVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgYnlcbiAqICAgICBwb3J0LWFwcCB0byByZWxheSBtZXNzYWdlcyB1cCB0byBoaWdoZXIgbGV2ZWxzLiAgTW9yZSBnZW5lcmFsbHksIHRoZVxuICogICAgIG1lc3NhZ2VzIGVtaXR0ZWQgYnkgdGhlIGNvcmUgdG8gJ3RoaXMubWFuYWdlci5lbWl0KHRoaXMubWFuYW5hZ2UuZGVsZWdhdGUnXG4gKiAgICAgU2hvdWxkIGJlIG9uTWVzc2FnZWQgdG8gdGhlIGNvbnRyb2xsaW5nIGNvcmUuXG4gKiBAcGFyYW0ge1N0cmluZ30gc291cmNlIFRoZSBzb3VyY2Ugb2YgdGhlIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gbXNnIFRoZSBtZXNzc2FnZSBmcm9tIGFuIGlzb2xhdGVkIGNvcmUgcHJvdmlkZXIuXG4gKi9cbkNvcmVfdW5wcml2aWxlZ2VkLnByb3RvdHlwZS5vbk1lc3NhZ2UgPSBmdW5jdGlvbihzb3VyY2UsIG1zZykge1xuICBpZiAobXNnLnR5cGUgPT09ICdyZWdpc3RlcicpIHtcbiAgICBDb3JlX3VucHJpdmlsZWdlZC51bmJvdW5kQ2hhbm5lbHNbbXNnLmlkXSA9IHtcbiAgICAgIHJlbW90ZTogdHJ1ZSxcbiAgICAgIHJlc29sdmU6IG1zZy5yZXBseSxcbiAgICAgIHNvdXJjZTogc291cmNlXG4gICAgfTtcbiAgfSBlbHNlIGlmIChtc2cudHlwZSA9PT0gJ2NsZWFyJykge1xuICAgIGRlbGV0ZSBDb3JlX3VucHJpdmlsZWdlZC51bmJvdW5kQ2hhbm5lbHNbbXNnLmlkXTtcbiAgfSBlbHNlIGlmIChtc2cudHlwZSA9PT0gJ2JpbmQnKSB7XG4gICAgaWYgKENvcmVfdW5wcml2aWxlZ2VkLnVuYm91bmRDaGFubmVsc1ttc2cuaWRdKSB7XG4gICAgICB0aGlzLmJpbmRDaGFubmVsKG1zZy5pZCwgZnVuY3Rpb24oKSB7fSwgc291cmNlKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQmluZCBhIGN1c3RvbSBjaGFubmVsLlxuICogQ3JlYXRlcyBhIHByb3h5IGludGVyZmFjZSB0byB0aGUgY3VzdG9tIGNoYW5uZWwsIHdoaWNoIHdpbGwgYmUgYm91bmQgdG9cbiAqIHRoZSBwcm94eSBvYnRhaW5lZCB0aHJvdWdoIGFuIGVhcmxpZXIgY3JlYXRlQ2hhbm5lbCBjYWxsLlxuICogY2hhbm5lbCB0byBhIHByb3h5LlxuICogQG1ldGhvZCBiaW5kQ2hhbm5lbFxuICogQHBhcmFtIHtPYmplY3R9IGlkZW50aWZpZXIgQW4gaWRlbnRpZmllciBvYnRhaW5lZCB0aHJvdWdoIGNyZWF0ZUNoYW5uZWwuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb250aW51YXRpb24gQSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2l0aCB0aGUgcHJveHkuXG4gKi9cbkNvcmVfdW5wcml2aWxlZ2VkLnByb3RvdHlwZS5iaW5kQ2hhbm5lbCA9IGZ1bmN0aW9uKGlkZW50aWZpZXIsIGNvbnRpbnVhdGlvbiwgc291cmNlKSB7XG4gIHZhciB0b0JpbmQgPSBDb3JlX3VucHJpdmlsZWdlZC51bmJvdW5kQ2hhbm5lbHNbaWRlbnRpZmllcl0sXG4gICAgICBuZXdTb3VyY2UgPSAhc291cmNlO1xuXG4gIC8vIHdoZW4gYmluZENoYW5uZWwgaXMgY2FsbGVkIGRpcmVjdGx5LCBzb3VyY2Ugd2lsbCBiZSB1bmRlZmluZWQuXG4gIC8vIFdoZW4gaXQgaXMgcHJvcG9nYXRlZCBieSBvbk1lc3NhZ2UsIGEgc291cmNlIGZvciBiaW5kaW5nIHdpbGwgYWxyZWFkeSBleGlzdC5cbiAgaWYgKG5ld1NvdXJjZSkge1xuICAgIHRoaXMuZGVidWcuZGVidWcoJ21ha2luZyBsb2NhbCBwcm94eSBmb3IgY29yZSBiaW5kaW5nJyk7XG4gICAgc291cmNlID0gbmV3IENvbnN1bWVyKEV2ZW50SW50ZXJmYWNlLCB0aGlzLmRlYnVnKTtcbiAgICB0aGlzLm1hbmFnZXIuc2V0dXAoc291cmNlKTtcbiAgfVxuXG4gIC8vIElmIHRoaXMgaXMgYSBrbm93biBpZGVudGlmaWVyIGFuZCBpcyBpbiB0aGUgc2FtZSBjb250ZXh0LCBiaW5kaW5nIGlzIGVhc3kuXG4gIGlmICh0b0JpbmQgJiYgdG9CaW5kLmxvY2FsKSB7XG4gICAgdGhpcy5kZWJ1Zy5kZWJ1ZygnQmluZGluZyBhIGNoYW5uZWwgdG8gcG9ydCBvbiB0aGlzIGh1YjonICsgc291cmNlKTtcbiAgICB0aGlzLm1hbmFnZXIuY3JlYXRlTGluayhzb3VyY2UsIGlkZW50aWZpZXIsIHRvQmluZC5wcm94eSwgJ2RlZmF1bHQnKTtcbiAgICBkZWxldGUgQ29yZV91bnByaXZpbGVnZWQudW5ib3VuZENoYW5uZWxzW2lkZW50aWZpZXJdO1xuICAgIGlmICh0aGlzLm1hbmFnZXIuZGVsZWdhdGUgJiYgdGhpcy5tYW5hZ2VyLnRvRGVsZWdhdGUuY29yZSkge1xuICAgICAgdGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5tYW5hZ2VyLmRlbGVnYXRlLCB7XG4gICAgICAgIHR5cGU6ICdEZWxlZ2F0aW9uJyxcbiAgICAgICAgcmVxdWVzdDogJ2hhbmRsZScsXG4gICAgICAgIGZsb3c6ICdjb3JlJyxcbiAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgIHR5cGU6ICdjbGVhcicsXG4gICAgICAgICAgaWQ6IGlkZW50aWZpZXJcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHRvQmluZCAmJiB0b0JpbmQucmVtb3RlKSB7XG4gICAgdGhpcy5kZWJ1Zy5kZWJ1ZygnQmluZGluZyBhIGNoYW5uZWwgaW50byBhIG1vZHVsZS4nKTtcbiAgICB0aGlzLm1hbmFnZXIuY3JlYXRlTGluayhcbiAgICAgICAgc291cmNlLFxuICAgICAgICBuZXdTb3VyY2UgPyAnZGVmYXVsdCcgOiBpZGVudGlmaWVyLFxuICAgICAgICB0b0JpbmQuc291cmNlLFxuICAgICAgICBpZGVudGlmaWVyKTtcbiAgICB0b0JpbmQucmVzb2x2ZSh7XG4gICAgICB0eXBlOiAnQmluZCBDaGFubmVsJyxcbiAgICAgIHJlcXVlc3Q6J2NvcmUnLFxuICAgICAgZmxvdzogJ2NvcmUnLFxuICAgICAgbWVzc2FnZToge1xuICAgICAgICB0eXBlOiAnYmluZCcsXG4gICAgICAgIGlkOiBpZGVudGlmaWVyXG4gICAgICB9XG4gICAgfSk7XG4gICAgZGVsZXRlIENvcmVfdW5wcml2aWxlZ2VkLnVuYm91bmRDaGFubmVsc1tpZGVudGlmaWVyXTtcbiAgfSBlbHNlIGlmICh0aGlzLm1hbmFnZXIuZGVsZWdhdGUgJiYgdGhpcy5tYW5hZ2VyLnRvRGVsZWdhdGUuY29yZSkge1xuICAgIHRoaXMuZGVidWcuaW5mbygnZGVsZWdhdGluZyBjaGFubmVsIGJpbmQgZm9yIGFuIHVua25vd24gSUQ6JyArIGlkZW50aWZpZXIpO1xuICAgIHRoaXMubWFuYWdlci5lbWl0KHRoaXMubWFuYWdlci5kZWxlZ2F0ZSwge1xuICAgICAgdHlwZTogJ0RlbGVnYXRpb24nLFxuICAgICAgcmVxdWVzdDogJ2hhbmRsZScsXG4gICAgICBmbG93OiAnY29yZScsXG4gICAgICBtZXNzYWdlOiB7XG4gICAgICAgIHR5cGU6ICdiaW5kJyxcbiAgICAgICAgaWQ6IGlkZW50aWZpZXJcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzb3VyY2Uub25jZSgnc3RhcnQnLCBmdW5jdGlvbihwLCBjYikge1xuICAgICAgY2IodGhpcy5nZXRDaGFubmVsKHApKTtcbiAgICB9LmJpbmQodGhpcywgc291cmNlLCBjb250aW51YXRpb24pKTtcbiAgICB0aGlzLm1hbmFnZXIuY3JlYXRlTGluayhzb3VyY2UsXG4gICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgdGhpcy5tYW5hZ2VyLmh1Yi5nZXREZXN0aW5hdGlvbih0aGlzLm1hbmFnZXIuZGVsZWdhdGUpLFxuICAgICAgICBpZGVudGlmaWVyKTtcbiAgICBkZWxldGUgQ29yZV91bnByaXZpbGVnZWQudW5ib3VuZENoYW5uZWxzW2lkZW50aWZpZXJdO1xuICAgIHJldHVybjtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmRlYnVnLndhcm4oJ0Fza2VkIHRvIGJpbmQgdW5rbm93biBjaGFubmVsOiAnICsgaWRlbnRpZmllcik7XG4gICAgdGhpcy5kZWJ1Zy5sb2coQ29yZV91bnByaXZpbGVnZWQudW5ib3VuZENoYW5uZWxzKTtcbiAgICBjb250aW51YXRpb24oKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoc291cmNlLmdldEludGVyZmFjZSkge1xuICAgIGNvbnRpbnVhdGlvbih0aGlzLmdldENoYW5uZWwoc291cmNlKSk7XG4gIH0gZWxzZSB7XG4gICAgY29udGludWF0aW9uKCk7XG4gIH1cbn07XG5cbi8qKlxuICogR2V0IHRoZSBJRCBvZiB0aGUgY3VycmVudCBmcmVlZG9tLmpzIGNvbnRleHQuICBQcm92aWRlcyBhblxuICogYXJyYXkgb2YgbW9kdWxlIFVSTHMsIHRoZSBsaW5lYWdlIG9mIHRoZSBjdXJyZW50IGNvbnRleHQuXG4gKiBXaGVuIG5vdCBpbiBhbiBhcHBsaWNhdGlvbiBjb250ZXh0LCB0aGUgSUQgaXMgdGhlIGxpbmVhZ2VcbiAqIG9mIHRoZSBjdXJyZW50IFZpZXcuXG4gKiBAbWV0aG9kIGdldElkXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gY2FsbGVkIHdpdGggSUQgaW5mb3JtYXRpb24uXG4gKi9cbkNvcmVfdW5wcml2aWxlZ2VkLnByb3RvdHlwZS5nZXRJZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gIC8vIFRPRE86IG1ha2Ugc3VyZSBjb250ZXh0SUQgaXMgcHJvcGVybHkgZnJvemVuLlxuICBjYWxsYmFjayhDb3JlX3VucHJpdmlsZWdlZC5jb250ZXh0SWQpO1xufTtcblxuLyoqXG4gKiBHZXQgYSBsb2dnZXIgZm9yIGxvZ2dpbmcgdG8gdGhlIGZyZWVkb20uanMgbG9nZ2VyLiBQcm92aWRlcyBhXG4gKiBsb2cgb2JqZWN0IHdpdGggYW4gaW50ZXJmYWNlIHNpbWlsYXIgdG8gdGhlIHN0YW5kYXJkIGphdmFzY3JpcHQgY29uc29sZSxcbiAqIHdoaWNoIGxvZ3MgdmlhIGRlYnVnLlxuICogQG1ldGhvZCBnZXRMb2dnZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBsb2dnZXIsIHVzZWQgYXMgaXRzICdzb3VyY2UnXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aXRoIHRoZSBsb2dnZXIuXG4gKi9cbkNvcmVfdW5wcml2aWxlZ2VkLnByb3RvdHlwZS5nZXRMb2dnZXIgPSBmdW5jdGlvbihuYW1lLCBjYWxsYmFjaykge1xuICBjYWxsYmFjayh0aGlzLm1hbmFnZXIuZGVidWcuZ2V0TG9nZ2VyKG5hbWUpKTtcbn07XG5cbi8qKlxuICogU2V0IHRoZSBJRCBvZiB0aGUgY3VycmVudCBmcmVlZG9tLmpzIGNvbnRleHQuXG4gKiBAbWV0aG9kIHNldElkXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtTdHJpbmdbXX0gaWQgVGhlIGxpbmVhZ2Ugb2YgdGhlIGN1cnJlbnQgY29udGV4dC5cbiAqL1xuQ29yZV91bnByaXZpbGVnZWQucHJvdG90eXBlLnNldElkID0gZnVuY3Rpb24oaWQpIHtcbiAgQ29yZV91bnByaXZpbGVnZWQuY29udGV4dElkID0gaWQ7XG59O1xuXG5leHBvcnRzLnByb3ZpZGVyID0gQ29yZV91bnByaXZpbGVnZWQ7XG5leHBvcnRzLm5hbWUgPSBcImNvcmVcIjtcbmV4cG9ydHMuZmxhZ3MgPSB7bW9kdWxlOiB0cnVlfTtcbiIsIi8qZ2xvYmFscyBkb2N1bWVudCAqL1xyXG4vKmpzbGludCBpbmRlbnQ6MixzbG9wcHk6dHJ1ZSxub2RlOnRydWUgKi9cclxudmFyIHV0aWwgPSByZXF1aXJlKCcuLi8uLi9zcmMvdXRpbCcpO1xyXG52YXIgUHJvbWlzZUNvbXBhdCA9IHJlcXVpcmUoJ2VzNi1wcm9taXNlJykuUHJvbWlzZTtcclxuXHJcbi8qKlxyXG4gKiBBIGZyZWVkb20uanMgdmlldyBpcyB0aGUgaW50ZXJmYWNlIGZvciB1c2VyIGludGVyYWN0aW9uLlxyXG4gKiBBIHZpZXcgZXhpc3RzIGFzIGFuIGlGcmFtZSwgd2hpY2ggaXMgc2hvd24gdG8gdGhlIHVzZXIgaW4gc29tZSB3YXkuXHJcbiAqIGNvbW11bmljYXRpb24gYmV0d2VlbiB0aGUgdmlldyBhbmQgdGhlIGZyZWVkb20uanMgbW9kdWxlIGlzIHBlcmZvcm1lZFxyXG4gKiB0aHJvdWdoIHRoZSBIVE1MNSBwb3N0TWVzc2FnZSBtZWNoYW5pc20sIHdoaWNoIHRoaXMgcHJvdmlkZXIgdHJhbnNsYXRlc1xyXG4gKiB0byBmcmVlZG9tLmpzIG1lc3NhZ2UgZXZlbnRzLlxyXG4gKiBAQ2xhc3MgVmlld191bnByaXZpbGVnZWRcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7VmlldyBQcm92aWRlcn0gcHJvdmlkZXJcclxuICogQHBhcmFtIHtwcm92aWRlcjpQcm92aWRlcixtb2R1bGU6TW9kdWxlfSBjYXAgVGhlIGluc3RhbnRpYXRvciBvZiB0aGUgdmlldy5cclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZGlzcGF0Y2hFdmVudCBGdW5jdGlvbiB0byBjYWxsIHRvIGVtaXQgZXZlbnRzLlxyXG4gKi9cclxudmFyIENvcmVfVmlldyA9IGZ1bmN0aW9uIChwcm92aWRlciwgY2FwLCBkaXNwYXRjaEV2ZW50KSB7XHJcbiAgdGhpcy5wcm92aWRlciA9IHByb3ZpZGVyO1xyXG4gIHRoaXMuZGlzcGF0Y2hFdmVudCA9IGRpc3BhdGNoRXZlbnQ7XHJcbiAgc2V0VGltZW91dChjYXAucHJvdmlkZXIub25DbG9zZS5iaW5kKFxyXG4gICAgY2FwLnByb3ZpZGVyLFxyXG4gICAgdGhpcyxcclxuICAgIHRoaXMuY2xvc2UuYmluZCh0aGlzLCBmdW5jdGlvbiAoKSB7fSlcclxuICApLCAwKTtcclxuICB0aGlzLm1vZHVsZSA9IGNhcC5tb2R1bGU7XHJcbiAgdXRpbC5oYW5kbGVFdmVudHModGhpcyk7XHJcbn07XHJcblxyXG4vKipcclxuICogVGhlIGlzIHRoZSBkZWZhdWx0IHByb3ZpZGVyIGZvciBjb3JlLnZpZXcsIHVubGVzcyBvdmVycmlkZGVuIGJ5IGNvbnRleHQgb3JcclxuICogYSB1c2VyIHN1cHBsaWVkIHByb3ZpZGVyLiBUaGUgaW50ZXJmYWNlIGlzIGRvY3VtZW50ZWQgYXQ6XHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mcmVlZG9tanMvZnJlZWRvbS93aWtpL2ZyZWVkb20uanMtVmlld3NcclxuICpcclxuICogR2VuZXJhbGx5LCBhIHZpZXcgcHJvdmlkZXIgY29uc2lzdHMgb2YgMyBtZXRob2RzOlxyXG4gKiBvbk9wZW4gaXMgY2FsbGVkIHdoZW4gYSB2aWV3IHNob3VsZCBiZSBzaG93bi5cclxuICogICAgIGlkIC0gaXMgYSB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhpcyB2aWV3LCB1c2VkIG9uIHN1YnNlcXVlbnQgY2FsbHNcclxuICogICAgICAgICAgZm9yIGNvbW11bmljYXRpb24gYW5kIHRvIGV2ZW50dWFsbHkgY2xvc2UgdGhlIHZpZXcuXHJcbiAqICAgICBuYW1lIC0gaXMgdGhlIG5hbWUgb2YgdGhlIHZpZXcgKGFzIGRlZmluZWQgaW4gdGhlIG1hbmlmZXN0KSxcclxuICogICAgICAgICAgICBpbiBvcmRlciB0byBwbGFjZSBpdCBhcHByb3ByaWF0ZWx5LlxyXG4gKiAgICAgcGFnZSAtIGlzIHRoZSByZXNvbHZlZCBVUkwgdG8gb3Blbi5cclxuICogICAgIHJlc291cmNlcyAtIGlzIGFuIGFycmF5IG9mIHJlc29sdmVkIFVSTHMgd2hpY2ggYXJlIHJlZmVyZW5jZWQuXHJcbiAqICAgICBwb3N0TWVzc2FnZSAtIGlzIGEgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIG1lc3NhZ2VzIGFyZSBlbWl0dGVkXHJcbiAqICAgICAgICAgICAgICAgICAgIGJ5IHRoZSB3aW5kb3cgaW4gd2hpY2ggdGhlIHZpZXcgaXMgb3BlbmVkLlxyXG4gKiBvbk9wZW4gcmV0dXJucyBhIHByb21pc2UgdGhhdCBjb21wbGV0ZXMgd2hlbiB0aGUgdmlldyBpcyBsb2FkZWQuXHJcbiAqIG9uTWVzc2FnZSBpcyBjYWxsZWQgdG8gc2VuZCBhIG1lc3NhZ2UgdG8gYW4gb3BlbiB2aWV3LlxyXG4gKiAgICAgaWQgLSBpcyB0aGUgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBvcGVuIHZpZXcuXHJcbiAqICAgICBtZXNzYWdlIC0gaXMgdGhlIG1lc3NhZ2UgdG8gcG9zdE1lc3NhZ2UgdG8gdGhlIHZpZXcncyB3aW5kb3cuXHJcbiAqIG9uQ2xvc2UgaXMgY2FsbGVkIHRvIGNsb3NlIGEgdmlldy5cclxuICogICAgIGlkIC0gaXMgdGhlIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgdmlldy5cclxuICovXHJcbkNvcmVfVmlldy5wcm92aWRlciA9IHtcclxuICBsaXN0ZW5lcjogdW5kZWZpbmVkLFxyXG4gIGFjdGl2ZToge30sXHJcbiAgb25PcGVuOiBmdW5jdGlvbiAoaWQsIG5hbWUsIHBhZ2UsIHJlc291cmNlcywgcG9zdE1lc3NhZ2UpIHtcclxuICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5ib2R5LFxyXG4gICAgICByb290LFxyXG4gICAgICBmcmFtZTtcclxuICAgIFxyXG4gICAgaWYgKCF0aGlzLmxpc3RlbmVyKSB7XHJcbiAgICAgIHRoaXMubGlzdGVuZXIgPSBmdW5jdGlvbiAobXNnKSB7XHJcbiAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgZm9yIChpIGluIHRoaXMuYWN0aXZlKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5hY3RpdmUuaGFzT3duUHJvcGVydHkoaSkgJiZcclxuICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVtpXS5zb3VyY2UgPT09IG1zZy5zb3VyY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVbaV0ucG9zdE1lc3NhZ2UobXNnLmRhdGEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfS5iaW5kKHRoaXMpO1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMubGlzdGVuZXIsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFZpZXdzIG9wZW4gYnkgZGVmYXVsdCBpbiBhbiBlbGVtZW50IHdpdGggdGhlaXIgSUQsIG9yIGZpbGwgdGhlIHBhZ2VcclxuICAgIC8vIG90aGVyd2lzZS5cclxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuYW1lKSkge1xyXG4gICAgICBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHJvb3Quc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgIHJvb3Quc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XHJcbiAgICByb290LnN0eWxlLmRpc3BsYXkgPSBcInJlbGF0aXZlXCI7XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJvb3QpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2VDb21wYXQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICBmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XHJcbiAgICAgIGZyYW1lLnNldEF0dHJpYnV0ZShcInNhbmRib3hcIiwgXCJhbGxvdy1zY3JpcHRzIGFsbG93LWZvcm1zXCIpO1xyXG4gICAgICBmcmFtZS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICBmcmFtZS5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcclxuICAgICAgZnJhbWUuc3R5bGUuYm9yZGVyID0gXCIwXCI7XHJcbiAgICAgIGZyYW1lLnN0eWxlLmJhY2tncm91bmQgPSBcInRyYW5zcGFyZW50XCI7XHJcbiAgICAgIGZyYW1lLnNyYyA9IHBhZ2U7XHJcbiAgICAgIGZyYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCByZXNvbHZlLCB0cnVlKTtcclxuICAgICAgZnJhbWUuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCByZWplY3QsIHRydWUpO1xyXG5cclxuICAgICAgcm9vdC5hcHBlbmRDaGlsZChmcmFtZSk7XHJcblxyXG4gICAgICB0aGlzLmFjdGl2ZVtpZF0gPSB7XHJcbiAgICAgICAgcG9zdE1lc3NhZ2U6IHBvc3RNZXNzYWdlLFxyXG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxyXG4gICAgICAgIHJvb3Q6IHJvb3QsXHJcbiAgICAgICAgc291cmNlOiBmcmFtZS5jb250ZW50V2luZG93XHJcbiAgICAgIH07XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG4gIH0sXHJcbiAgb25NZXNzYWdlOiBmdW5jdGlvbiAoaWQsIG1lc3NhZ2UpIHtcclxuICAgIHRoaXMuYWN0aXZlW2lkXS5zb3VyY2UucG9zdE1lc3NhZ2UobWVzc2FnZSwgJyonKTtcclxuICB9LFxyXG4gIG9uQ2xvc2U6IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgdGhpcy5hY3RpdmVbaWRdLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLmFjdGl2ZVtpZF0ucm9vdCk7XHJcbiAgICBkZWxldGUgdGhpcy5hY3RpdmVbaWRdO1xyXG4gICAgXHJcbiAgICBpZiAoT2JqZWN0LmtleXModGhpcy5hY3RpdmUpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMubGlzdGVuZXIsIHRydWUpO1xyXG4gICAgICB0aGlzLmxpc3RlbmVyID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBBc2sgZm9yIHRoaXMgdmlldyB0byBvcGVuIGEgc3BlY2lmaWMgbG9jYXRpb24sIGVpdGhlciBhIEZpbGUgcmVsYXRpdmUgdG9cclxuICogdGhlIGxvYWRlciwgb3IgYW4gZXhwbGljaXQgY29kZSBsb2NhdGlvbi5cclxuICogQG1ldGhvZCBzaG93XHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBpZGVudGlmaWVyIG9mIHRoZSB2aWV3LlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb250aW51YXRpb24gRnVuY3Rpb24gdG8gY2FsbCB3aGVuIHZpZXcgaXMgbG9hZGVkLlxyXG4gKi9cclxuQ29yZV9WaWV3LnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKG5hbWUsIGNvbnRpbnVhdGlvbikge1xyXG4gIGlmICh0aGlzLmlkKSB7XHJcbiAgICByZXR1cm4gY29udGludWF0aW9uKHVuZGVmaW5lZCwge1xyXG4gICAgICBlcnJjb2RlOiAnQUxSRUFEWV9PUEVOJyxcclxuICAgICAgbWVzc2FnZTogJ0Nhbm5vdCBzaG93IG11bHRpcGxlIHZpZXdzIHRocm91Z2ggb25lIGluc3RhbmNlLidcclxuICAgIH0pO1xyXG4gIH1cclxuICB0aGlzLmlkID0gdXRpbC5nZXRJZCgpO1xyXG5cclxuICB2YXIgY29uZmlnID0gdGhpcy5tb2R1bGUubWFuaWZlc3Qudmlld3MsXHJcbiAgICB0b1Jlc29sdmUgPSBbXTtcclxuICBpZiAoIWNvbmZpZyB8fCAhY29uZmlnW25hbWVdKSB7XHJcbiAgICByZXR1cm4gY29udGludWF0aW9uKHVuZGVmaW5lZCwge1xyXG4gICAgICBlcnJjb2RlOiAnTk9OX0VYSVNUQU5UJyxcclxuICAgICAgbWVzc2FnZTogJ1ZpZXcgbm90IGZvdW5kOiAnICsgbmFtZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpZiAoY29uZmlnW25hbWVdLm1haW4gJiYgY29uZmlnW25hbWVdLmZpbGVzKSB7XHJcbiAgICB0b1Jlc29sdmUgPSBjb25maWdbbmFtZV0uZmlsZXMuY29uY2F0KGNvbmZpZ1tuYW1lXS5tYWluKTtcclxuICAgIFByb21pc2VDb21wYXQuYWxsKHRvUmVzb2x2ZS5tYXAoZnVuY3Rpb24gKGZuYW1lKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm1vZHVsZS5yZXNvdXJjZS5nZXQodGhpcy5tb2R1bGUubWFuaWZlc3RJZCwgZm5hbWUpO1xyXG4gICAgfS5iaW5kKHRoaXMpKSkudGhlbihmdW5jdGlvbiAoZmlsZXMpIHtcclxuICAgICAgdGhpcy5wcm92aWRlci5vbk9wZW4odGhpcy5pZCxcclxuICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICBmaWxlc1tmaWxlcy5sZW5ndGggLSAxXSxcclxuICAgICAgICAgIGZpbGVzLFxyXG4gICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50LmJpbmQodGhpcywgJ21lc3NhZ2UnKSkudGhlbihcclxuICAgICAgICBmdW5jdGlvbiAoYykge1xyXG4gICAgICAgICAgLy8gTWFrZSBzdXJlIGNvbnRpbnVhdGlvbiBpcyBjYWxsZWQgd2l0aG91dCBhbiBhcmd1bWVudC5cclxuICAgICAgICAgIGMoKTtcclxuICAgICAgICB9LmJpbmQoe30sIGNvbnRpbnVhdGlvbiksXHJcbiAgICAgICAgY29udGludWF0aW9uLmJpbmQoe30sIHVuZGVmaW5lZClcclxuICAgICAgKTtcclxuICAgIH0uYmluZCh0aGlzKSwgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICB0aGlzLm1vZHVsZS5kZWJ1Zy5lcnJvcignVW5hYmxlIHRvIG9wZW4gdmlldyAnICsgbmFtZSArICc6ICcsIGVycik7XHJcbiAgICAgIGNvbnRpbnVhdGlvbih1bmRlZmluZWQsIHtcclxuICAgICAgICBlcnJjb2RlOiAnVklFV19NQUxGT1JNRUQnLFxyXG4gICAgICAgIG1lc3NhZ2U6ICdNYWxmb3JtZWQgVmlldyBEZWNsYXJhdGlvbjogJyArIGVyclxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb250aW51YXRpb24odW5kZWZpbmVkLCB7XHJcbiAgICAgIGVycmNvZGU6ICdOT05fRVhJU1RBTlQnLFxyXG4gICAgICBtZXNzYWdlOiAnVmlldyBub3QgZm91bmQ6ICcgKyBuYW1lXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogaXNTZWN1cmUgZGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBtb2R1bGUgY2FuIGhhdmUgY29uZmlkZW5jZSB0aGF0IGl0c1xyXG4gKiBjb21tdW5pY2F0aW9uIHdpdGggaXRzIHZpZXcgY2Fubm90IGJlIGludGVyY2VwdGVkIGJ5IGFuIHVudHJ1c3RlZCAzcmQgcGFydHkuXHJcbiAqIEluIHByYWN0aWNlLCB0aGlzIG1lYW5zIHRoYXQgaXRzIG9rYXkgZm9yIHRoZSBydW50aW1lIHRvIGhhdmUgYWNjZXNzIHRvIHRoZVxyXG4gKiBtZXNzYWdlcywgYW5kIGlmIHRoZSBjb250ZXh0IGlzIGEgd2ViIHNlcnZlciBvciBhIGJyb3dzZXIgZXh0ZW5zaW9uIHRoZW5cclxuICogdGhhdCBjb250ZXh0IGlzIHRydXN0ZWQuIEhvd2V2ZXIsIGlmIGEgcHJvdmlkZXIgd2FudHMgdG8gYWxsb3cgdGhlaXIgZS5nLlxyXG4gKiBzb2NpYWwgcHJvdmlkZXIgdG8gYmUgdXNlZCBvbiBhcmJpdHJhcnkgd2Vic2l0ZXMsIHRoaXMgbWVjaGFuaXNtIG1lYW5zIHRoYXRcclxuICogaWYgdGhlIHdlYnNpdGUgdXNlcyBhIHRydXN0ZWQgdmVyc2lvbiBvZiB0aGUgZnJlZWRvbS5qcyBsaWJyYXJ5LCB0aGVuIHRoZVxyXG4gKiBtb2R1bGUgY2FuIGJlIHVzZWQuXHJcbiAqIEBtZXRob2QgaXNTZWN1cmVcclxuICogQHJldHVybnMge0Jvb2xlYW59IGlmIHRoZSBjaGFubmVsIHRvIHRoZSB2aWV3IGlzIHNlY3VyZS5cclxuICovXHJcbkNvcmVfVmlldy5wcm90b3R5cGUuaXNTZWN1cmUgPSBmdW5jdGlvbiAoY29udGludWF0aW9uKSB7XHJcbiAgY29udGludWF0aW9uKGZhbHNlKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBTZW5kIGEgbWVzc2FnZSB0byBhbiBvcGVuIHZpZXcuXHJcbiAqIEBtZXRob2QgcG9zdE1lc3NhZ2VcclxuICovXHJcbkNvcmVfVmlldy5wcm90b3R5cGUucG9zdE1lc3NhZ2UgPSBmdW5jdGlvbiAobXNnLCBjb250aW51YXRpb24pIHtcclxuICBpZiAoIXRoaXMuaWQpIHtcclxuICAgIHJldHVybiBjb250aW51YXRpb24odW5kZWZpbmVkLCB7XHJcbiAgICAgIGVycmNvZGU6ICdOT1RfT1BFTicsXHJcbiAgICAgIG1lc3NhZ2U6ICdDYW5ub3QgcG9zdCBtZXNzYWdlIHRvIHVuaW5pdGlhbGl6ZWQgdmlldy4nXHJcbiAgICB9KTtcclxuICB9XHJcbiAgdGhpcy5wcm92aWRlci5vbk1lc3NhZ2UodGhpcy5pZCwgbXNnKTtcclxuICBjb250aW51YXRpb24oKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDbG9zZSBhbiBhY3RpdmUgdmlldy5cclxuICogQG1ldGhvZCBjbG9zZVxyXG4gKi9cclxuQ29yZV9WaWV3LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uIChjb250aW51YXRpb24pIHtcclxuICBpZiAoIXRoaXMuaWQpIHtcclxuICAgIHJldHVybiBjb250aW51YXRpb24odW5kZWZpbmVkLCB7XHJcbiAgICAgIGVycmNvZGU6ICdOT1RfT1BFTicsXHJcbiAgICAgIG1lc3NhZ2U6ICdDYW5ub3QgY2xvc2UgdW5pbml0aWFsaXplZCB2aWV3LidcclxuICAgIH0pO1xyXG4gIH1cclxuICB0aGlzLnByb3ZpZGVyLm9uQ2xvc2UodGhpcy5pZCk7XHJcbiAgZGVsZXRlIHRoaXMuaWQ7XHJcblxyXG4gIGNvbnRpbnVhdGlvbigpO1xyXG59O1xyXG5cclxuXHJcbi8qKlxyXG4gKiBBbGxvdyBhIHdlYiBwYWdlIHRvIHJlZGVmaW5lIGJlaGF2aW9yIGZvciBob3cgdmlld3MgYXJlIHNob3duLlxyXG4gKiBAbWV0aG9kIHJlZ2lzdGVyXHJcbiAqIEBzdGF0aWNcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gUGFnZVByb3ZpZGVyIFRoZSBjdXN0b20gdmlldyBiZWhhdmlvci5cclxuICovXHJcbkNvcmVfVmlldy5yZWdpc3RlciA9IGZ1bmN0aW9uIChQYWdlUHJvdmlkZXIpIHtcclxuICB2YXIgcHJvdmlkZXIgPSBQYWdlUHJvdmlkZXIgPyBuZXcgUGFnZVByb3ZpZGVyKCkgOiBDb3JlX1ZpZXcucHJvdmlkZXI7XHJcbiAgZXhwb3J0cy5wcm92aWRlciA9IENvcmVfVmlldy5iaW5kKHRoaXMsIHByb3ZpZGVyKTtcclxufTtcclxuXHJcbmV4cG9ydHMucHJvdmlkZXIgPSBDb3JlX1ZpZXcuYmluZCh0aGlzLCBDb3JlX1ZpZXcucHJvdmlkZXIpO1xyXG5leHBvcnRzLm5hbWUgPSAnY29yZS52aWV3JztcclxuZXhwb3J0cy5yZWdpc3RlciA9IENvcmVfVmlldy5yZWdpc3RlcjtcclxuZXhwb3J0cy5mbGFncyA9IHtwcm92aWRlcjogdHJ1ZSwgbW9kdWxlOiB0cnVlfTtcclxuIiwiLypnbG9iYWxzIFdlYlNvY2tldCwgQXJyYXlCdWZmZXIsIEJsb2IsIFVpbnQ4QXJyYXksIGNvbnNvbGUgKi9cbi8qanNsaW50IHNsb3BweTp0cnVlLCBub2RlOnRydWUgKi9cblxudmFyIFdTSGFuZGxlID0gbnVsbDtcbnZhciBub2RlU3R5bGUgPSBmYWxzZTtcblxuLyoqXG4gKiBBIFdlYlNvY2tldCBjb3JlIHByb3ZpZGVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNhcCBDYXBhYmlsaXRpZXMgZm9yIHRoZSBwcm92aWRlclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZGlzcGF0Y2hFdmVudCBGdW5jdGlvbiB0byBkaXNwYXRjaCBldmVudHMuXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBSZW1vdGUgVVJMIHRvIGNvbm5lY3Qgd2l0aC5cbiAqIEBwYXJhbSB7U3RyaW5nW119IHByb3RvY29scyBTdWJQcm90b2NvbHMgdG8gb3Blbi5cbiAqIEBwYXJhbSB7V2ViU29ja2V0P30gc29ja2V0IEFuIGFsdGVybmF0aXZlIHNvY2tldCBjbGFzcyB0byB1c2UuXG4gKi9cbnZhciBXUyA9IGZ1bmN0aW9uIChjYXAsIGRpc3BhdGNoRXZlbnQsIHVybCwgcHJvdG9jb2xzLCBzb2NrZXQpIHtcbiAgdmFyIFdTSW1wbGVtZW50YXRpb24gPSBudWxsLFxuICAgIGVycm9yO1xuICB0aGlzLmlzTm9kZSA9IG5vZGVTdHlsZTtcbiAgaWYgKHR5cGVvZiBzb2NrZXQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgV1NJbXBsZW1lbnRhdGlvbiA9IHNvY2tldDtcbiAgfSBlbHNlIGlmIChXU0hhbmRsZSAhPT0gbnVsbCkge1xuICAgIFdTSW1wbGVtZW50YXRpb24gPSBXU0hhbmRsZTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgV2ViU29ja2V0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIFdTSW1wbGVtZW50YXRpb24gPSBXZWJTb2NrZXQ7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcignUGxhdGZvcm0gZG9lcyBub3Qgc3VwcG9ydCBXZWJTb2NrZXQnKTtcbiAgfVxuXG4gIHRoaXMuZGlzcGF0Y2hFdmVudCA9IGRpc3BhdGNoRXZlbnQ7XG4gIHRyeSB7XG4gICAgaWYgKHByb3RvY29scykge1xuICAgICAgdGhpcy53ZWJzb2NrZXQgPSBuZXcgV1NJbXBsZW1lbnRhdGlvbih1cmwsIHByb3RvY29scyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMud2Vic29ja2V0ID0gbmV3IFdTSW1wbGVtZW50YXRpb24odXJsKTtcbiAgICB9XG4gICAgdGhpcy53ZWJzb2NrZXQuYmluYXJ5VHlwZSA9ICdhcnJheWJ1ZmZlcic7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBlcnJvciA9IHt9O1xuICAgIGlmIChlIGluc3RhbmNlb2YgU3ludGF4RXJyb3IpIHtcbiAgICAgIGVycm9yLmVycmNvZGUgPSAnU1lOVEFYJztcbiAgICB9IGVsc2Uge1xuICAgICAgZXJyb3IuZXJyY29kZSA9IGUubmFtZTtcbiAgICB9XG4gICAgZXJyb3IubWVzc2FnZSA9IGUubWVzc2FnZTtcbiAgICBkaXNwYXRjaEV2ZW50KCdvbkVycm9yJywgZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh0aGlzLmlzTm9kZSkge1xuICAgIHRoaXMud2Vic29ja2V0Lm9uKCdtZXNzYWdlJywgdGhpcy5vbk1lc3NhZ2UuYmluZCh0aGlzKSk7XG4gICAgdGhpcy53ZWJzb2NrZXQub24oJ29wZW4nLCB0aGlzLm9uT3Blbi5iaW5kKHRoaXMpKTtcbiAgICAvLyBub2RlLmpzIHdlYnNvY2tldCBpbXBsZW1lbnRhdGlvbiBub3QgY29tcGxpYW50XG4gICAgdGhpcy53ZWJzb2NrZXQub24oJ2Nsb3NlJywgdGhpcy5vbkNsb3NlLmJpbmQodGhpcywge1xuICAgICAgY29kZTogMCxcbiAgICAgIHJlYXNvbjogJ1VOS05PV04nLFxuICAgICAgd2FzQ2xlYW46IHRydWVcbiAgICB9KSk7XG4gICAgdGhpcy53ZWJzb2NrZXQub24oJ2Vycm9yJywgdGhpcy5vbkVycm9yLmJpbmQodGhpcykpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMud2Vic29ja2V0Lm9ub3BlbiA9IHRoaXMub25PcGVuLmJpbmQodGhpcyk7XG4gICAgdGhpcy53ZWJzb2NrZXQub25jbG9zZSA9IHRoaXMub25DbG9zZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMud2Vic29ja2V0Lm9ubWVzc2FnZSA9IHRoaXMub25NZXNzYWdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy53ZWJzb2NrZXQub25lcnJvciA9IHRoaXMub25FcnJvci5iaW5kKHRoaXMpO1xuICB9XG59O1xuXG5XUy5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChkYXRhLCBjb250aW51YXRpb24pIHtcbiAgdmFyIHRvU2VuZCA9IGRhdGEudGV4dCB8fCBkYXRhLmJpbmFyeSB8fCBkYXRhLmJ1ZmZlcixcbiAgICBlcnJjb2RlLFxuICAgIG1lc3NhZ2U7XG5cbiAgaWYgKHRvU2VuZCkge1xuICAgIHRyeSB7XG4gICAgICAvLyBGb3Igbm9kZS5qcywgd2UgaGF2ZSB0byBkbyB3ZWlyZCBidWZmZXIgc3R1ZmZcbiAgICAgIGlmICh0aGlzLmlzTm9kZSAmJiB0b1NlbmQgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgICAgICB0aGlzLndlYnNvY2tldC5zZW5kKFxuICAgICAgICAgIG5ldyBVaW50OEFycmF5KHRvU2VuZCksXG4gICAgICAgICAgeyBiaW5hcnk6IHRydWUgfSxcbiAgICAgICAgICB0aGlzLm9uRXJyb3IuYmluZCh0aGlzKVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy53ZWJzb2NrZXQuc2VuZCh0b1NlbmQpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgU3ludGF4RXJyb3IpIHtcbiAgICAgICAgZXJyY29kZSA9IFwiU1lOVEFYXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcnJjb2RlID0gXCJJTlZBTElEX1NUQVRFXCI7XG4gICAgICB9XG4gICAgICBtZXNzYWdlID0gZS5tZXNzYWdlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBlcnJjb2RlID0gXCJCQURfU0VORFwiO1xuICAgIG1lc3NhZ2UgPSBcIk5vIHRleHQsIGJpbmFyeSwgb3IgYnVmZmVyIGRhdGEgZm91bmQuXCI7XG4gIH1cblxuICBpZiAoZXJyY29kZSkge1xuICAgIGNvbnRpbnVhdGlvbih1bmRlZmluZWQsIHtcbiAgICAgIGVycmNvZGU6IGVycmNvZGUsXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY29udGludWF0aW9uKCk7XG4gIH1cbn07XG5cbldTLnByb3RvdHlwZS5nZXRSZWFkeVN0YXRlID0gZnVuY3Rpb24gKGNvbnRpbnVhdGlvbikge1xuICBjb250aW51YXRpb24odGhpcy53ZWJzb2NrZXQucmVhZHlTdGF0ZSk7XG59O1xuXG5XUy5wcm90b3R5cGUuZ2V0QnVmZmVyZWRBbW91bnQgPSBmdW5jdGlvbiAoY29udGludWF0aW9uKSB7XG4gIGNvbnRpbnVhdGlvbih0aGlzLndlYnNvY2tldC5idWZmZXJlZEFtb3VudCk7XG59O1xuXG5XUy5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoY29kZSwgcmVhc29uLCBjb250aW51YXRpb24pIHtcbiAgdHJ5IHtcbiAgICBpZiAoY29kZSAmJiByZWFzb24pIHtcbiAgICAgIHRoaXMud2Vic29ja2V0LmNsb3NlKGNvZGUsIHJlYXNvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMud2Vic29ja2V0LmNsb3NlKCk7XG4gICAgfVxuICAgIGNvbnRpbnVhdGlvbigpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIGVycm9yQ29kZTtcbiAgICBpZiAoZSBpbnN0YW5jZW9mIFN5bnRheEVycm9yKSB7XG4gICAgICBlcnJvckNvZGUgPSBcIlNZTlRBWFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBlcnJvckNvZGUgPSBcIklOVkFMSURfQUNDRVNTXCI7XG4gICAgfVxuICAgIGNvbnRpbnVhdGlvbih1bmRlZmluZWQsIHtcbiAgICAgIGVycmNvZGU6IGVycm9yQ29kZSxcbiAgICAgIG1lc3NhZ2U6IGUubWVzc2FnZVxuICAgIH0pO1xuICB9XG59O1xuXG5XUy5wcm90b3R5cGUub25PcGVuID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25PcGVuJyk7XG59O1xuXG5XUy5wcm90b3R5cGUub25NZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50LCBmbGFncykge1xuICB2YXIgZGF0YSA9IHt9O1xuICBpZiAodGhpcy5pc05vZGUgJiYgZmxhZ3MgJiYgZmxhZ3MuYmluYXJ5KSB7XG4gICAgZGF0YS5idWZmZXIgPSBuZXcgVWludDhBcnJheShldmVudCkuYnVmZmVyO1xuICB9IGVsc2UgaWYgKHRoaXMuaXNOb2RlKSB7XG4gICAgZGF0YS50ZXh0ID0gZXZlbnQ7XG4gIH0gZWxzZSBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiBldmVudC5kYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICBkYXRhLmJ1ZmZlciA9IGV2ZW50LmRhdGE7XG4gIH0gZWxzZSBpZiAodHlwZW9mIEJsb2IgIT09ICd1bmRlZmluZWQnICYmIGV2ZW50LmRhdGEgaW5zdGFuY2VvZiBCbG9iKSB7XG4gICAgZGF0YS5iaW5hcnkgPSBldmVudC5kYXRhO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBldmVudC5kYXRhID09PSAnc3RyaW5nJykge1xuICAgIGRhdGEudGV4dCA9IGV2ZW50LmRhdGE7XG4gIH1cbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbk1lc3NhZ2UnLCBkYXRhKTtcbn07XG5cbldTLnByb3RvdHlwZS5vbkVycm9yID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIC8vIE5vdGhpbmcgdG8gcGFzcyBvblxuICAvLyBTZWU6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE4ODA0Mjk4LzMwMDUzOVxuICB0aGlzLmRpc3BhdGNoRXZlbnQoJ29uRXJyb3InKTtcbn07XG5cbldTLnByb3RvdHlwZS5vbkNsb3NlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25DbG9zZScsXG4gICAgICAgICAgICAgICAgICAgICB7Y29kZTogZXZlbnQuY29kZSxcbiAgICAgICAgICAgICAgICAgICAgICByZWFzb246IGV2ZW50LnJlYXNvbixcbiAgICAgICAgICAgICAgICAgICAgICB3YXNDbGVhbjogZXZlbnQud2FzQ2xlYW59KTtcbn07XG5cbmV4cG9ydHMucHJvdmlkZXIgPSBXUztcbmV4cG9ydHMubmFtZSA9ICdjb3JlLndlYnNvY2tldCc7XG5leHBvcnRzLnNldFNvY2tldCA9IGZ1bmN0aW9uIChpbXBsLCBpc05vZGUpIHtcbiAgV1NIYW5kbGUgPSBpbXBsO1xuICBub2RlU3R5bGUgPSBpc05vZGU7XG59O1xuIiwiLypqc2hpbnQgbm9kZTp0cnVlKi9cbi8qZ2xvYmFsICovXG52YXIgUHJvbWlzZUNvbXBhdCA9IHJlcXVpcmUoJ2VzNi1wcm9taXNlJykuUHJvbWlzZTtcbnZhciBYaHJDbGFzcyA9IG51bGw7XG5cbnZhciBYaHJQcm92aWRlciA9IGZ1bmN0aW9uKGNhcCwgZGlzcGF0Y2hFdmVudCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgIHR5cGVvZiB3aW5kb3cuWE1MSHR0cFJlcXVlc3QgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgIFhockNsYXNzID09PSBudWxsKSB7XG4gICAgWGhyQ2xhc3MgPSB3aW5kb3cuWE1MSHR0cFJlcXVlc3Q7XG4gIH1cbiAgaWYgKFhockNsYXNzID09PSBudWxsKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlBsYXRmb3JtIGRvZXMgbm90IHN1cHBvcnQgWE1MSHR0cFJlcXVlc3RcIik7XG4gIH1cblxuICB0aGlzLl9kaXNwYXRjaEV2ZW50ID0gZGlzcGF0Y2hFdmVudDtcbiAgdGhpcy5feGhyID0gbmV3IFhockNsYXNzKCk7XG5cbiAgc2V0VGltZW91dChjYXAucHJvdmlkZXIub25DbG9zZS5iaW5kKFxuICAgIGNhcC5wcm92aWRlcixcbiAgICB0aGlzLFxuICAgIHRoaXMuYWJvcnQuYmluZCh0aGlzKVxuICApLCAwKTtcblxuICB0aGlzLl9ldmVudHMgPSBbXG4gICAgXCJsb2Fkc3RhcnRcIixcbiAgICBcInByb2dyZXNzXCIsXG4gICAgXCJhYm9ydFwiLFxuICAgIFwiZXJyb3JcIixcbiAgICBcImxvYWRcIixcbiAgICBcInRpbWVvdXRcIixcbiAgICBcImxvYWRlbmRcIixcbiAgICBcInJlYWR5c3RhdGVjaGFuZ2VcIlxuICBdO1xuICB0aGlzLl9zZXR1cExpc3RlbmVycygpO1xuXG59O1xuXG5YaHJQcm92aWRlci5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uKG1ldGhvZCwgdXJsLCBhc3luYywgdXNlciwgcGFzc3dvcmQpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIGlmICh0eXBlb2YgYXN5bmMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXN5bmMgIT09IHRydWUpIHtcbiAgICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZWplY3Qoe1xuICAgICAgZXJyY29kZTogXCJJbnZhbGlkQWNjZXNzRXJyb3JcIixcbiAgICAgIG1lc3NhZ2U6IFwiYXN5bmMgc2hvdWxkIGFsd2F5cyBiZSBzZXQgdG8gdHJ1ZVwiXG4gICAgfSk7XG4gIH1cblxuICAvLyBGb3JjZSBhc3luYyB0byBiZSB0cnVlLiB1bmRlZmluZWQgY2FuIGxlYWQgdG8gYXN5bmM9ZmFsc2UgaW4gQ2hyb21lIHBhY2thZ2VkIGFwcHNcbiAgdGhpcy5feGhyLm9wZW4obWV0aG9kLCB1cmwsIHRydWUsIHVzZXIsIHBhc3N3b3JkKTtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSgpO1xufTtcblxuWGhyUHJvdmlkZXIucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbihkYXRhKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICBpZiAoIShkYXRhIGluc3RhbmNlb2YgT2JqZWN0KSkge1xuICAgIHRoaXMuX3hoci5zZW5kKCk7XG4gIH0gZWxzZSBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShcInN0cmluZ1wiKSkge1xuICAgIHRoaXMuX3hoci5zZW5kKGRhdGEuc3RyaW5nKTtcbiAgfSBlbHNlIGlmIChkYXRhLmhhc093blByb3BlcnR5KFwiYnVmZmVyXCIpKSB7XG4gICAgdGhpcy5feGhyLnNlbmQoZGF0YS5idWZmZXIpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuX3hoci5zZW5kKCk7XG4gIH1cbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSgpO1xufTtcblxuWGhyUHJvdmlkZXIucHJvdG90eXBlLmFib3J0ID0gZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICB0aGlzLl94aHIuYWJvcnQoKTtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSgpO1xufTtcblxuWGhyUHJvdmlkZXIucHJvdG90eXBlLmdldFJlc3BvbnNlSGVhZGVyID0gZnVuY3Rpb24oaGVhZGVyKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHRoaXMuX3hoci5nZXRSZXNwb25zZUhlYWRlcihoZWFkZXIpKTtcbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5nZXRBbGxSZXNwb25zZUhlYWRlcnMgPSBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUodGhpcy5feGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKTtcbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5zZXRSZXF1ZXN0SGVhZGVyID0gZnVuY3Rpb24oaGVhZGVyLCB2YWx1ZSkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgdGhpcy5feGhyLnNldFJlcXVlc3RIZWFkZXIoaGVhZGVyLCB2YWx1ZSk7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUoKTtcbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5vdmVycmlkZU1pbWVUeXBlID0gZnVuY3Rpb24obWltZSkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgdGhpcy5feGhyLm92ZXJyaWRlTWltZVR5cGUobWltZSk7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUoKTtcbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5nZXRSZWFkeVN0YXRlID0gZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHRoaXMuX3hoci5yZWFkeVN0YXRlKTtcbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5nZXRSZXNwb25zZSA9IGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgaWYgKHRoaXMuX3hoci5yZXNwb25zZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUobnVsbCk7XG4gIH0gZWxzZSBpZiAodGhpcy5feGhyLnJlc3BvbnNlVHlwZSA9PT0gXCJ0ZXh0XCIgfHwgdGhpcy5feGhyLnJlc3BvbnNlVHlwZSA9PT0gXCJcIikge1xuICAgIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUoeyBzdHJpbmc6IHRoaXMuX3hoci5yZXNwb25zZSB9KTtcbiAgfSBlbHNlIGlmICh0aGlzLl94aHIucmVzcG9uc2VUeXBlID09PSBcImFycmF5YnVmZmVyXCIpIHtcbiAgICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHsgYnVmZmVyOiB0aGlzLl94aHIucmVzcG9uc2UgfSk7XG4gIH0gZWxzZSBpZiAodGhpcy5feGhyLnJlc3BvbnNlVHlwZSA9PT0gXCJqc29uXCIpIHtcbiAgICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHsgb2JqZWN0OiB0aGlzLl94aHIucmVzcG9uc2UgfSk7XG4gIH1cblxuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZWplY3QoXCJjb3JlLnhociBjYW5ub3QgZGV0ZXJtaW5lIHR5cGUgb2YgcmVzcG9uc2VcIik7XG59O1xuXG5YaHJQcm92aWRlci5wcm90b3R5cGUuZ2V0UmVzcG9uc2VUZXh0ID0gZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHRoaXMuX3hoci5yZXNwb25zZVRleHQpO1xufTtcblxuWGhyUHJvdmlkZXIucHJvdG90eXBlLmdldFJlc3BvbnNlVVJMID0gZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHRoaXMuX3hoci5yZXNwb25zZVVSTCk7XG59O1xuXG5YaHJQcm92aWRlci5wcm90b3R5cGUuZ2V0UmVzcG9uc2VUeXBlID0gZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHRoaXMuX3hoci5yZXNwb25zZVR5cGUpO1xufTtcblxuWGhyUHJvdmlkZXIucHJvdG90eXBlLnNldFJlc3BvbnNlVHlwZSA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHRoaXMuX3hoci5yZXNwb25zZVR5cGUgPSB0eXBlO1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKCk7XG59O1xuXG5YaHJQcm92aWRlci5wcm90b3R5cGUuZ2V0U3RhdHVzID0gZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHRoaXMuX3hoci5zdGF0dXMpO1xufTtcblxuWGhyUHJvdmlkZXIucHJvdG90eXBlLmdldFN0YXR1c1RleHQgPSBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUodGhpcy5feGhyLnN0YXR1c1RleHQpO1xufTtcblxuWGhyUHJvdmlkZXIucHJvdG90eXBlLmdldFRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUodGhpcy5feGhyLnRpbWVvdXQpO1xufTtcblxuWGhyUHJvdmlkZXIucHJvdG90eXBlLnNldFRpbWVvdXQgPSBmdW5jdGlvbih0aW1lb3V0KSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICB0aGlzLl94aHIudGltZW91dCA9IHRpbWVvdXQ7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUoKTtcbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5nZXRXaXRoQ3JlZGVudGlhbHMgPSBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUodGhpcy5feGhyLndpdGhDcmVkZW50aWFscyk7XG59O1xuXG5YaHJQcm92aWRlci5wcm90b3R5cGUuc2V0V2l0aENyZWRlbnRpYWxzID0gZnVuY3Rpb24od2MpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHRoaXMuX3hoci53aXRoQ3JlZGVudGlhbHMgPSB3YztcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSgpO1xufTtcblxuWGhyUHJvdmlkZXIucHJvdG90eXBlLl9zZXR1cExpc3RlbmVycyA9IGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgLy8gRG93bmxvYWQgZXZlbnRzXG4gIHRoaXMuX2V2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICB0aGlzLl94aHIuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGZ1bmN0aW9uKGV2ZW50TmFtZSwgZXZlbnQpIHtcbiAgICAgIHRoaXMuX2Rpc3BhdGNoRXZlbnQoXCJvblwiICsgZXZlbnROYW1lLCBldmVudCk7XG4gICAgfS5iaW5kKHRoaXMsIGV2ZW50TmFtZSksIGZhbHNlKTtcbiAgfS5iaW5kKHRoaXMpKTtcblxuICAvLyBVcGxvYWQgZXZlbnRzXG4gIHRoaXMuX2V2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICB0aGlzLl94aHIudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBmdW5jdGlvbihldmVudE5hbWUsIGV2ZW50KSB7XG4gICAgICB0aGlzLl9kaXNwYXRjaEV2ZW50KFwib251cGxvYWRcIiArIGV2ZW50TmFtZSwgZXZlbnQpO1xuICAgIH0uYmluZCh0aGlzLCBldmVudE5hbWUpLCBmYWxzZSk7XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG5leHBvcnRzLm5hbWUgPSBcImNvcmUueGhyXCI7XG5leHBvcnRzLnByb3ZpZGVyID0gWGhyUHJvdmlkZXI7XG5leHBvcnRzLnN0eWxlID0gXCJwcm92aWRlUHJvbWlzZXNcIjtcbmV4cG9ydHMuZmxhZ3MgPSB7IHByb3ZpZGVyOiB0cnVlIH07XG5leHBvcnRzLnNldEltcGwgPSBmdW5jdGlvbihpbXBsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICBYaHJDbGFzcyA9IGltcGw7XG59O1xuIiwiLypqc2xpbnQgaW5kZW50OjIsYnJvd3Nlcjp0cnVlLCBub2RlOnRydWUgKi9cbnZhciBQcm9taXNlQ29tcGF0ID0gcmVxdWlyZSgnZXM2LXByb21pc2UnKS5Qcm9taXNlO1xuXG52YXIgb0F1dGhSZWRpcmVjdElkID0gJ2ZyZWVkb20ub2F1dGgucmVkaXJlY3QuaGFuZGxlcic7XG5cbnZhciBsb2FkZWRPblN0YXJ0dXAgPSBmYWxzZTtcbi8qKlxuICogSWYgdGhlcmUgaXMgcmVkaXJlY3Rpb24gYmFjayB0byB0aGUgcGFnZSwgYW5kIG9BdXRoUmVkaXJlY3RJRCBpcyBzZXQsXG4gKiB0aGVuIHJlcG9ydCB0aGUgYXV0aCBhbmQgY2xvc2UgdGhlIHdpbmRvdy5cbiAqL1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdyAmJiB3aW5kb3cubG9jYXRpb24gJiZcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBsb2FkZWRPblN0YXJ0dXAgPSB0cnVlO1xuICB9LCB0cnVlKTtcblxuICBpZiAod2luZG93LmxvY2FsU3RvcmFnZSAmJlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZihvQXV0aFJlZGlyZWN0SWQpID4gMCkge1xuICAgIC8vIFRoaXMgd2lsbCB0cmlnZ2VyIGEgJ3N0b3JhZ2UnIGV2ZW50IG9uIHRoZSB3aW5kb3cuIFNlZSBzdG9yYWdlTGlzdGVuZXJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0ob0F1dGhSZWRpcmVjdElkLCBuZXcgRGF0ZSgpKTtcbiAgICB3aW5kb3cuY2xvc2UoKTtcbiAgfVxufVxuXG52YXIgTG9jYWxQYWdlQXV0aCA9IGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgdGhpcy5saXN0ZW5lcnMgPSB7fTtcbn07XG5cbi8qKlxuICogSW5kaWNhdGUgdGhlIGludGVudGlvbiB0byBpbml0aWF0ZSBhbiBvQXV0aCBmbG93LCBhbGxvd2luZyBhbiBhcHByb3ByaWF0ZVxuICogb0F1dGggcHJvdmlkZXIgdG8gYmVnaW4gbW9uaXRvcmluZyBmb3IgcmVkaXJlY3Rpb24uXG4gKlxuICogQG1ldGhvZCBpbml0aWF0ZU9BdXRoXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSByZWRpcmVjdFVSSXMgLSBvQXV0aCByZWRpcmVjdGlvbiBVUklzIHJlZ2lzdGVyZWQgd2l0aCB0aGVcbiAqICAgICBwcm92aWRlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbnRpbnVhdGlvbiAtIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBjb21wbGV0ZVxuICogICAgRXhwZWN0ZWQgdG8gc2VlIGEgdmFsdWUgb2Ygc2NoZW1hOiB7e3JlZGlyZWN0OlN0cmluZywgc3RhdGU6U3RyaW5nfX1cbiAqICAgIHdoZXJlICdyZWRpcmVjdCcgaXMgdGhlIGNob3NlbiByZWRpcmVjdCBVUklcbiAqICAgIGFuZCAnc3RhdGUnIGlzIHRoZSBzdGF0ZSB0byBwYXNzIHRvIHRoZSBVUkkgb24gY29tcGxldGlvbiBvZiBvQXV0aFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBjYW4gaGFuZGxlLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuTG9jYWxQYWdlQXV0aC5wcm90b3R5cGUuaW5pdGlhdGVPQXV0aCA9IGZ1bmN0aW9uKHJlZGlyZWN0VVJJcywgY29udGludWF0aW9uKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93ICYmIGxvYWRlZE9uU3RhcnR1cCkge1xuICAgIHZhciBoZXJlID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgd2luZG93LmxvY2F0aW9uLmhvc3QgK1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgaWYgKHJlZGlyZWN0VVJJcy5pbmRleE9mKGhlcmUpID4gLTEpIHtcbiAgICAgIGNvbnRpbnVhdGlvbih7XG4gICAgICAgIHJlZGlyZWN0OiBoZXJlLFxuICAgICAgICBzdGF0ZTogb0F1dGhSZWRpcmVjdElkICsgTWF0aC5yYW5kb20oKVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIG9BdXRoIGNsaWVudC1zaWRlIGZsb3cgLSBsYXVuY2ggdGhlIHByb3ZpZGVkIFVSTFxuICogVGhpcyBtdXN0IGJlIGNhbGxlZCBhZnRlciBpbml0aWF0ZU9BdXRoIHdpdGggdGhlIHJldHVybmVkIHN0YXRlIG9iamVjdFxuICpcbiAqIEBtZXRob2QgbGF1bmNoQXV0aEZsb3dcbiAqIEBwYXJhbSB7U3RyaW5nfSBhdXRoVXJsIC0gVGhlIFVSTCB0aGF0IGluaXRpYXRlcyB0aGUgYXV0aCBmbG93LlxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgc3RyaW5nPn0gc3RhdGVPYmogLSBUaGUgcmV0dXJuIHZhbHVlIGZyb20gaW5pdGlhdGVPQXV0aFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29udGludWF0aW9uIC0gRnVuY3Rpb24gdG8gY2FsbCB3aGVuIGNvbXBsZXRlXG4gKiAgICBFeHBlY3RlZCB0byBzZWUgYSBTdHJpbmcgdmFsdWUgdGhhdCBpcyB0aGUgcmVzcG9uc2UgVXJsIGNvbnRhaW5pbmcgdGhlIGFjY2VzcyB0b2tlblxuICovXG5Mb2NhbFBhZ2VBdXRoLnByb3RvdHlwZS5sYXVuY2hBdXRoRmxvdyA9IGZ1bmN0aW9uKGF1dGhVcmwsIHN0YXRlT2JqLCBjb250aW51YXRpb24pIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHZhciBsaXN0ZW5lciA9IHRoaXMuc3RvcmFnZUxpc3RlbmVyLmJpbmQodGhpcywgY29udGludWF0aW9uLCBzdGF0ZU9iaik7XG4gIHRoaXMubGlzdGVuZXJzW3N0YXRlT2JqLnN0YXRlXSA9IGxpc3RlbmVyO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInN0b3JhZ2VcIiwgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gU3RhcnQgJ2VyIHVwXG4gIHdpbmRvdy5vcGVuKGF1dGhVcmwpO1xufTtcblxuLyoqXG4gKiBIYW5kbGVyIGZvciBzdG9yYWdlIGV2ZW50cywgd2hpY2ggcmVsYXlzIHRoZW0gdG8gd2FpdGluZyBjbGllbnRzLlxuICogRm9yIHRoZSBzY2hlbWEgb2YgdGhlIHN0b3JhZ2UgbXNnLCBzZWU6XG4gKiBodHRwOi8vdHV0b3JpYWxzLmplbmtvdi5jb20vaHRtbDUvbG9jYWwtc3RvcmFnZS5odG1sI3N0b3JhZ2UtZXZlbnRzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb250aW51YXRpb24gZnVuY3Rpb24gdG8gY2FsbCB3aXRoIHJlc3VsdFxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgc3RyaW5nPn0gc3RhdGVPYmogdGhlIHJldHVybiB2YWx1ZSBmcm9tIGluaXRpYXRlT0F1dGhcbiAqIEBwYXJhbSB7T2JqZWN0fSBtc2cgc3RvcmFnZSBldmVudFxuICovXG5Mb2NhbFBhZ2VBdXRoLnByb3RvdHlwZS5zdG9yYWdlTGlzdGVuZXIgPSBmdW5jdGlvbihjb250aW51YXRpb24sIHN0YXRlT2JqLCBtc2cpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICBpZiAobXNnLnVybC5pbmRleE9mKHN0YXRlT2JqLnN0YXRlKSA+IC0xKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdG9yYWdlXCIsIHRoaXMubGlzdGVuZXJzW3N0YXRlT2JqLnN0YXRlXSwgZmFsc2UpO1xuICAgIGRlbGV0ZSB0aGlzLmxpc3RlbmVyc1tzdGF0ZU9iai5zdGF0ZV07XG4gICAgY29udGludWF0aW9uKG1zZy51cmwpO1xuICB9XG59O1xuXG4vKipcbiAqIElmIHdlIGhhdmUgYSBsb2NhbCBkb21haW4sIGFuZCBmcmVlZG9tLmpzIGlzIGxvYWRlZCBhdCBzdGFydHVwLCB3ZSBjYW4gdXNlXG4gKiB0aGUgbG9jYWwgcGFnZSBhcyBhIHJlZGlyZWN0IFVSSS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBMb2NhbFBhZ2VBdXRoO1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwpe1xuLypqc2xpbnQgaW5kZW50OjIsYnJvd3Nlcjp0cnVlLCBub2RlOnRydWUgKi9cbnZhciBQcm9taXNlQ29tcGF0ID0gcmVxdWlyZSgnZXM2LXByb21pc2UnKS5Qcm9taXNlO1xuXG52YXIgb0F1dGhSZWRpcmVjdElkID0gJ2ZyZWVkb20ub2F1dGgucmVkaXJlY3QuaGFuZGxlcic7XG5cbmZ1bmN0aW9uIFJlbW90ZVBhZ2VBdXRoKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgdGhpcy5saXN0ZW5lcnMgPSB7fTtcbn1cblxuLyoqXG4gKiBJbmRpY2F0ZSB0aGUgaW50ZW50aW9uIHRvIGluaXRpYXRlIGFuIG9BdXRoIGZsb3csIGFsbG93aW5nIGFuIGFwcHJvcHJpYXRlXG4gKiBvQXV0aCBwcm92aWRlciB0byBiZWdpbiBtb25pdG9yaW5nIGZvciByZWRpcmVjdGlvbi5cbiAqXG4gKiBAbWV0aG9kIGluaXRpYXRlT0F1dGhcbiAqIEBwYXJhbSB7c3RyaW5nW119IHJlZGlyZWN0VVJJcyAtIG9BdXRoIHJlZGlyZWN0aW9uIFVSSXMgcmVnaXN0ZXJlZCB3aXRoIHRoZVxuICogICAgIHByb3ZpZGVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29udGludWF0aW9uIC0gRnVuY3Rpb24gdG8gY2FsbCB3aGVuIGNvbXBsZXRlXG4gKiAgICBFeHBlY3RlZCB0byBzZWUgYSB2YWx1ZSBvZiBzY2hlbWE6IHt7cmVkaXJlY3Q6U3RyaW5nLCBzdGF0ZTpTdHJpbmd9fVxuICogICAgd2hlcmUgJ3JlZGlyZWN0JyBpcyB0aGUgY2hvc2VuIHJlZGlyZWN0IFVSSVxuICogICAgYW5kICdzdGF0ZScgaXMgdGhlIHN0YXRlIHRvIHBhc3MgdG8gdGhlIFVSSSBvbiBjb21wbGV0aW9uIG9mIG9BdXRoXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGNhbiBoYW5kbGUsIGZhbHNlIG90aGVyd2lzZVxuICovXG5SZW1vdGVQYWdlQXV0aC5wcm90b3R5cGUuaW5pdGlhdGVPQXV0aCA9IGZ1bmN0aW9uKHJlZGlyZWN0VVJJcywgY29udGludWF0aW9uKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5kb2N1bWVudCkge1xuICAgIGZvciAodmFyIGk9MDsgaTxyZWRpcmVjdFVSSXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIFRPRE86IHJlbW92ZSByZXN0cmljdGlvbiBvbiBVUkwgcGF0dGVybiBtYXRjaC5cbiAgICAgIGlmICgocmVkaXJlY3RVUklzW2ldLmluZGV4T2YoJ2h0dHA6Ly8nKSA9PT0gMCB8fFxuICAgICAgICAgIHJlZGlyZWN0VVJJc1tpXS5pbmRleE9mKCdodHRwczovLycpID09PSAwKSAmJlxuICAgICAgICAgIHJlZGlyZWN0VVJJc1tpXS5pbmRleE9mKCdvYXV0aC1yZWxheS5odG1sJykgPiAwKSB7XG4gICAgICAgIGNvbnRpbnVhdGlvbih7XG4gICAgICAgICAgcmVkaXJlY3Q6IHJlZGlyZWN0VVJJc1tpXSxcbiAgICAgICAgICBzdGF0ZTogb0F1dGhSZWRpcmVjdElkICsgTWF0aC5yYW5kb20oKVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogb0F1dGggY2xpZW50LXNpZGUgZmxvdyAtIGxhdW5jaCB0aGUgcHJvdmlkZWQgVVJMXG4gKiBUaGlzIG11c3QgYmUgY2FsbGVkIGFmdGVyIGluaXRpYXRlT0F1dGggd2l0aCB0aGUgcmV0dXJuZWQgc3RhdGUgb2JqZWN0XG4gKlxuICogQG1ldGhvZCBsYXVuY2hBdXRoRmxvd1xuICogQHBhcmFtIHtTdHJpbmd9IGF1dGhVcmwgLSBUaGUgVVJMIHRoYXQgaW5pdGlhdGVzIHRoZSBhdXRoIGZsb3cuXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBzdHJpbmc+fSBzdGF0ZU9iaiAtIFRoZSByZXR1cm4gdmFsdWUgZnJvbSBpbml0aWF0ZU9BdXRoXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb250aW51YXRpb24gLSBGdW5jdGlvbiB0byBjYWxsIHdoZW4gY29tcGxldGVcbiAqICAgIEV4cGVjdGVkIHRvIHNlZSBhIFN0cmluZyB2YWx1ZSB0aGF0IGlzIHRoZSByZXNwb25zZSBVcmwgY29udGFpbmluZyB0aGUgYWNjZXNzIHRva2VuXG4gKi9cblJlbW90ZVBhZ2VBdXRoLnByb3RvdHlwZS5sYXVuY2hBdXRoRmxvdyA9IGZ1bmN0aW9uKGF1dGhVcmwsIHN0YXRlT2JqLCBjb250aW51YXRpb24pIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHZhciBmcmFtZSA9IGdsb2JhbC5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgZnJhbWUuc3JjID0gc3RhdGVPYmoucmVkaXJlY3Q7XG4gIGZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgZ2xvYmFsLmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZnJhbWUpO1xuICBmcmFtZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgIHRoaXMubGlzdGVuZXJzW3N0YXRlT2JqLnN0YXRlXSA9IGNvbnRpbnVhdGlvbjtcbiAgICB3aW5kb3cub3BlbihhdXRoVXJsKTtcblxuICAgIGZyYW1lLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2Uoc3RhdGVPYmouc3RhdGUsICcqJyk7XG4gIH0uYmluZCh0aGlzKSk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiAoZnJhbWUsIG1zZykge1xuICAgIGlmIChtc2cuZGF0YSAmJiBtc2cuZGF0YS5rZXkgJiYgbXNnLmRhdGEudXJsICYmIHRoaXMubGlzdGVuZXJzW21zZy5kYXRhLmtleV0pIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzW21zZy5kYXRhLmtleV0obXNnLmRhdGEudXJsKTtcbiAgICAgIGRlbGV0ZSB0aGlzLmxpc3RlbmVyc1ttc2cuZGF0YS5rZXldO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChmcmFtZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0uYmluZCh0aGlzLCBmcmFtZSksIGZhbHNlKTtcbn07XG5cbi8qKlxuICogSWYgd2UgaGF2ZSBhIGxvY2FsIGRvbWFpbiwgYW5kIGZyZWVkb20uanMgaXMgbG9hZGVkIGF0IHN0YXJ0dXAsIHdlIGNhbiB1c2VcbiAqIHRoZSBsb2NhbCBwYWdlIGFzIGEgcmVkaXJlY3QgVVJJLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IFJlbW90ZVBhZ2VBdXRoO1xuXG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSkiLCIvKmpzbGludCBpbmRlbnQ6Mix3aGl0ZTp0cnVlLG5vZGU6dHJ1ZSxzbG9wcHk6dHJ1ZSAqL1xudmFyIFByb21pc2VDb21wYXQgPSByZXF1aXJlKCdlczYtcHJvbWlzZScpLlByb21pc2U7XG5cbi8qKlxuICogVGhlIEFQSSByZWdpc3RyeSBmb3IgZnJlZWRvbS5qcy4gIFVzZWQgdG8gbG9vayB1cCByZXF1ZXN0ZWQgQVBJcyxcbiAqIGFuZCBwcm92aWRlcyBhIGJyaWRnZSBmb3IgY29yZSBBUElzIHRvIGFjdCBsaWtlIG5vcm1hbCBBUElzLlxuICogQENsYXNzIEFQSVxuICogQHBhcmFtIHtEZWJ1Z30gZGVidWcgVGhlIGRlYnVnZ2VyIHRvIHVzZSBmb3IgbG9nZ2luZy5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG52YXIgQXBpID0gZnVuY3Rpb24oZGVidWcpIHtcbiAgdGhpcy5kZWJ1ZyA9IGRlYnVnO1xuICB0aGlzLmFwaXMgPSB7fTtcbiAgdGhpcy5wcm92aWRlcnMgPSB7fTtcbiAgdGhpcy53YWl0ZXJzID0ge307XG59O1xuXG4vKipcbiAqIEdldCBhbiBBUEkuXG4gKiBAbWV0aG9kIGdldFxuICogQHBhcmFtIHtTdHJpbmd9IGFwaSBUaGUgQVBJIG5hbWUgdG8gZ2V0LlxuICogQHJldHVybnMge3tuYW1lOlN0cmluZywgZGVmaW5pdGlvbjpBUEl9fSBUaGUgQVBJIGlmIHJlZ2lzdGVyZWQuXG4gKi9cbkFwaS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oYXBpKSB7XG4gIGlmICghdGhpcy5hcGlzW2FwaV0pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBhcGksXG4gICAgZGVmaW5pdGlvbjogdGhpcy5hcGlzW2FwaV1cbiAgfTtcbn07XG5cbi8qKlxuICogU2V0IGFuIEFQSSB0byBhIGRlZmluaXRpb24uXG4gKiBAbWV0aG9kIHNldFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIEFQSSBuYW1lLlxuICogQHBhcmFtIHtBUEl9IGRlZmluaXRpb24gVGhlIEpTT04gb2JqZWN0IGRlZmluaW5nIHRoZSBBUEkuXG4gKi9cbkFwaS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24obmFtZSwgZGVmaW5pdGlvbikge1xuICB0aGlzLmFwaXNbbmFtZV0gPSBkZWZpbml0aW9uO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciBhIGNvcmUgQVBJIHByb3ZpZGVyLlxuICogQG1ldGhvZCByZWdpc3RlclxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgdGhlIEFQSSBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29uc3RydWN0b3IgdGhlIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIHByb3ZpZGVyIGZvciB0aGUgQVBJLlxuICogQHBhcmFtIHtTdHJpbmc/fSBzdHlsZSBUaGUgc3R5bGUgdGhlIHByb3ZpZGVyIGlzIHdyaXR0ZW4gaW4uIFZhbGlkIHN0eWxlc1xuICogICBhcmUgZG9jdW1lbnRlZCBpbiBmZG9tLnBvcnQuUHJvdmlkZXIucHJvdG90eXBlLmdldEludGVyZmFjZS4gRGVmYXVsdHMgdG9cbiAqICAgcHJvdmlkZUFzeW5jaHJvbm91c1xuICogQHBhcmFtIHtPYmplY3Q/fSBmbGFncyBQcmVmaXhlZCBhcmd1bWVudHMgbmVlZGVkIGJ5IHRoZSBjb3JlIHByb3ZpZGVyLlxuICogICB2YWxpZCBrZXlzIGFyZSAnbW9kdWxlJywgJ3Byb3ZpZGVyJywgYW5kICdjb25maWcnLlxuICovXG5BcGkucHJvdG90eXBlLnJlZ2lzdGVyID0gZnVuY3Rpb24obmFtZSwgY29uc3RydWN0b3IsIHN0eWxlLCBmbGFncykge1xuICB2YXIgaSxcbiAgICBhcmdzO1xuXG4gIHRoaXMucHJvdmlkZXJzW25hbWVdID0ge1xuICAgIGNvbnN0cnVjdG9yOiBjb25zdHJ1Y3RvcixcbiAgICBzdHlsZTogc3R5bGUgfHwgJ3Byb3ZpZGVBc3luY2hyb25vdXMnLFxuICAgIGZsYWdzOiBmbGFncyB8fCB7fVxuICB9O1xuXG4gIGlmICh0aGlzLndhaXRlcnNbbmFtZV0pIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy53YWl0ZXJzW25hbWVdLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBhcmdzID0ge307XG4gICAgICBpZiAoZmxhZ3MubW9kdWxlKSB7XG4gICAgICAgIGFyZ3MubW9kdWxlID0gdGhpcy53YWl0ZXJzW25hbWVdW2ldLmZyb207XG4gICAgICB9XG4gICAgICBpZiAoZmxhZ3MuY29uZmlnKSB7XG4gICAgICAgIGFyZ3MuY29uZmlnID0gdGhpcy53YWl0ZXJzW25hbWVdW2ldLmZyb20uY29uZmlnO1xuICAgICAgfVxuICAgICAgdGhpcy53YWl0ZXJzW25hbWVdW2ldLnJlc29sdmUoe1xuICAgICAgICBhcmdzOiBhcmdzLFxuICAgICAgICBpbnN0OiBjb25zdHJ1Y3Rvci5iaW5kKHt9LCBhcmdzKVxuICAgICAgfSk7XG4gICAgfVxuICAgIGRlbGV0ZSB0aGlzLndhaXRlcnNbbmFtZV07XG4gIH1cbn07XG5cbi8qKlxuICogR2V0IGEgY29yZSBBUEkgY29ubmVjdGVkIHRvIGEgZ2l2ZW4gRnJlZURPTSBtb2R1bGUuXG4gKiBAbWV0aG9kIGdldENvcmVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIHRoZSBBUEkgdG8gcmV0cmlldmUuXG4gKiBAcGFyYW0ge01vZHVsZX0gZnJvbSBUaGUgaW5zdGFudGlhdGluZyBBcHAuXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gQSBwcm9taXNlIG9mIGEgZmRvbS5BcHAgbG9vay1hbGlrZSAoYW5kIGFyZ3VtZW50IG9iamVjdCksXG4gKiBtYXRjaGluZyBhIGxvY2FsIEFQSSBkZWZpbml0aW9uLlxuICovXG5BcGkucHJvdG90eXBlLmdldENvcmUgPSBmdW5jdGlvbihuYW1lLCBmcm9tKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICBpZiAodGhpcy5hcGlzW25hbWVdKSB7XG4gICAgICBpZiAodGhpcy5wcm92aWRlcnNbbmFtZV0pIHtcbiAgICAgICAgdmFyIGFyZ3MgPSB7fTtcbiAgICAgICAgaWYgKHRoaXMucHJvdmlkZXJzW25hbWVdLmZsYWdzLm1vZHVsZSkge1xuICAgICAgICAgIGFyZ3MubW9kdWxlID0gZnJvbTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm92aWRlcnNbbmFtZV0uZmxhZ3MuY29uZmlnKSB7XG4gICAgICAgICAgYXJncy5jb25maWcgPSBmcm9tLmNvbmZpZztcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICBhcmdzOiBhcmdzLFxuICAgICAgICAgIGluc3Q6IHRoaXMucHJvdmlkZXJzW25hbWVdLmNvbnN0cnVjdG9yLmJpbmQoe30sIGFyZ3MpXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCF0aGlzLndhaXRlcnNbbmFtZV0pIHtcbiAgICAgICAgICB0aGlzLndhaXRlcnNbbmFtZV0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLndhaXRlcnNbbmFtZV0ucHVzaCh7XG4gICAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICAgICAgICByZWplY3Q6IHJlamVjdCxcbiAgICAgICAgICBmcm9tOiBmcm9tXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlYnVnLndhcm4oJ0FwaS5nZXRDb3JlIGFza2VkIGZvciB1bmtub3duIGNvcmU6ICcgKyBuYW1lKTtcbiAgICAgIHJlamVjdChudWxsKTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG4vKipcbiAqIENvbmZpZ3VyZSBhIHtQcm92aWRlcn0gdG8gcHJvdmlkZSBhIG5hbWVkIGNvcmUgYXBpIG9uIGJlaGFsZiBvZiBhXG4gKiBnaXZlbiBwb3J0LlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIHByb3ZpZGVyXG4gKiBAcGFyYW0ge1Byb3ZpZGVyfSBwcm92aWRlciBUaGUgcHJvdmlkZXIgdGhhdCB3aWxsIHByb3ZpZGUgdGhlIG5hbWVkIGFwaVxuICogQHBhcmFtIHtNb2R1bGV9IGZyb20gVGhlIG1vZHVsZSByZXF1ZXN0aW5nIHRoZSBjb3JlIHByb3ZpZGVyLlxuICovXG5BcGkucHJvdG90eXBlLnByb3ZpZGVDb3JlID0gZnVuY3Rpb24gKG5hbWUsIHByb3ZpZGVyLCBmcm9tKSB7XG4gIHJldHVybiB0aGlzLmdldENvcmUobmFtZSwgZnJvbSkudGhlbihmdW5jdGlvbiAoY29yZSkge1xuICAgIHZhciBmbGFncyA9IHRoaXMucHJvdmlkZXJzW25hbWVdLmZsYWdzLFxuICAgICAgaWZhY2UgPSBwcm92aWRlci5nZXRQcm94eUludGVyZmFjZSgpO1xuICAgIGlmIChmbGFncy5wcm92aWRlcikge1xuICAgICAgY29yZS5hcmdzLnByb3ZpZGVyID0gaWZhY2U7XG4gICAgfVxuICAgIGlmYWNlKClbdGhpcy5wcm92aWRlcnNbbmFtZV0uc3R5bGVdKGNvcmUuaW5zdCk7XG4gIH0uYmluZCh0aGlzKSwgZnVuY3Rpb24gKGVycikge1xuICAgIHRoaXMuZGVidWcuZXJyb3IoJ0NvdWxkIG5vdCBwcm92aWRlIGNvcmU6ICcsIGVycik7XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG4vKipcbiAqIFNodXRkb3duIHRoZSBBUEkgcmVnaXN0cnksIGFuZCByZWplY3QgYW55IHBlbmRpbmcgd2FpdGVycy5cbiAqL1xuQXBpLnByb3RvdHlwZS5jbGVhbnVwID0gZnVuY3Rpb24gKCkge1xuICB2YXIgcHJvcCxcbiAgICBkb1JlamVjdCA9IGZ1bmN0aW9uICh3YWl0ZXIpIHtcbiAgICAgIHdhaXRlci5yZWplY3QoKTtcbiAgICB9O1xuICBmb3IgKHByb3AgaW4gdGhpcy53YWl0ZXJzKSB7XG4gICAgaWYgKHRoaXMud2FpdGVycy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgdGhpcy53YWl0ZXJzW3Byb3BdLmZvckVhY2goZG9SZWplY3QpO1xuICAgIH1cbiAgfVxuICBkZWxldGUgdGhpcy53YWl0ZXJzO1xufTtcblxuLyoqXG4gKiBEZWZpbmVzIHRoZSBhcGlzIG1vZHVsZSBhbmQgcHJvdmlkZXIgcmVnaXN0cnkuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gQXBpO1xuIiwiLypqc2xpbnQgaW5kZW50OjIsbm9kZTp0cnVlICovXG5cbnZhciBCdW5kbGUgPSBmdW5jdGlvbiAoKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdGhpcy5pbnRlcmZhY2VzID0gcmVxdWlyZSgnLi4vZGlzdC9idW5kbGUuY29tcGlsZWQnKTtcbn07XG5cbi8qKlxuICogUG9wdWxhdGUgYW4gQVBJIHJlZ2lzdHJ5IHdpdGggcHJvdmlkZWQgcHJvdmlkZXJzLCBhbmQgd2l0aCBrbm93biBBUElcbiAqIGRlZmluaXRpb25zLlxuICogQHN0YXRpY1xuICogQG1ldGhvZCByZWdpc3RlclxuICogQHBhcmFtIHt7bmFtZTogc3RyaW5nLCBwcm92aWRlcjogRnVuY3Rpb24sIHN0eWxlPzogc3RyaW5nfVtdfSBwcm92aWRlcnNcbiAqICAgVGhlIGNvcmUgcHJvdmlkZXJzIG1hZGUgYXZhaWxhYmxlIHRvIHRoaXMgZnJlZWRvbS5qcyBpbnN0YW5jZS5cbiAqIEBwYXJhbSB7QXBpfSByZWdpc3RyeSBUaGUgQVBJIHJlZ2lzdHJ5IHRvIHBvcHVsYXRlLlxuICovXG5leHBvcnRzLnJlZ2lzdGVyID0gZnVuY3Rpb24gKHByb3ZpZGVycywgcmVnaXN0cnkpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB2YXIgYnVuZGxlID0gbmV3IEJ1bmRsZSgpO1xuICBidW5kbGUuaW50ZXJmYWNlcy5mb3JFYWNoKGZ1bmN0aW9uIChhcGkpIHtcbiAgICBpZiAoYXBpICYmIGFwaS5uYW1lICYmIGFwaS5hcGkpIHtcbiAgICAgIHJlZ2lzdHJ5LnNldChhcGkubmFtZSwgYXBpLmFwaSk7XG4gICAgfVxuICB9KTtcblxuICBwcm92aWRlcnMuZm9yRWFjaChmdW5jdGlvbiAocHJvdmlkZXIpIHtcbiAgICBpZiAocHJvdmlkZXIubmFtZSkge1xuICAgICAgcmVnaXN0cnkucmVnaXN0ZXIocHJvdmlkZXIubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyLnByb3ZpZGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIuc3R5bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlci5mbGFncyk7XG4gICAgfVxuICB9KTtcbn07XG4iLCIvKmdsb2JhbHMgQmxvYiwgQXJyYXlCdWZmZXIsIERhdGFWaWV3ICovXG4vKmpzbGludCBpbmRlbnQ6Miwgbm9kZTp0cnVlLCBzbG9wcHk6dHJ1ZSAqL1xudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuLyoqXG4gKiBBIGZyZWVkb20gcG9ydCBmb3IgYSB1c2VyLWFjY2Vzc2FibGUgYXBpLlxuICogQGNsYXNzIENvbnN1bWVyXG4gKiBAaW1wbGVtZW50cyBQb3J0XG4gKiBAdXNlcyBoYW5kbGVFdmVudHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnRlcmZhY2VDbHMgVGhlIGFwaSBpbnRlcmZhY2UgZXhwb3NlZCBieSB0aGlzIGNvbnN1bWVyLlxuICogQHBhcmFtIHtEZWJ1Z30gZGVidWcgVGhlIGRlYnVnZ2VyIHRvIHVzZSBmb3IgbG9nZ2luZy5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG52YXIgQ29uc3VtZXIgPSBmdW5jdGlvbiAoaW50ZXJmYWNlQ2xzLCBkZWJ1Zykge1xuICB0aGlzLmlkID0gQ29uc3VtZXIubmV4dElkKCk7XG4gIHRoaXMuaW50ZXJmYWNlQ2xzID0gaW50ZXJmYWNlQ2xzO1xuICB0aGlzLmRlYnVnID0gZGVidWc7XG4gIHV0aWwuaGFuZGxlRXZlbnRzKHRoaXMpO1xuICBcbiAgdGhpcy5pZmFjZXMgPSB7fTtcbiAgdGhpcy5jbG9zZUhhbmRsZXJzID0ge307XG4gIHRoaXMuZXJyb3JIYW5kbGVycyA9IHt9O1xuICB0aGlzLmVtaXRzID0ge307XG59O1xuXG4vKipcbiAqIFJlY2VpdmUgaW5jb21pbmcgbWVzc2FnZXMgZm9yIHRoaXMgY29uc3VtZXIuXG4gKiBAbWV0aG9kIG9uTWVzc2FnZVxuICogQHBhcmFtIHtTdHJpbmd9IHNvdXJjZSBUaGUgc291cmNlIG9mIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2UgVGhlIHJlY2VpdmVkIG1lc3NhZ2UuXG4gKi9cbkNvbnN1bWVyLnByb3RvdHlwZS5vbk1lc3NhZ2UgPSBmdW5jdGlvbiAoc291cmNlLCBtZXNzYWdlKSB7XG4gIGlmIChzb3VyY2UgPT09ICdjb250cm9sJyAmJiBtZXNzYWdlLnJldmVyc2UpIHtcbiAgICB0aGlzLmVtaXRDaGFubmVsID0gbWVzc2FnZS5jaGFubmVsO1xuICAgIHRoaXMuZW1pdCh0aGlzLmVtaXRDaGFubmVsLCB7XG4gICAgICB0eXBlOiAnY2hhbm5lbCBhbm5vdW5jZW1lbnQnLFxuICAgICAgY2hhbm5lbDogbWVzc2FnZS5yZXZlcnNlXG4gICAgfSk7XG4gICAgdGhpcy5lbWl0KCdzdGFydCcpO1xuICB9IGVsc2UgaWYgKHNvdXJjZSA9PT0gJ2NvbnRyb2wnICYmIG1lc3NhZ2UudHlwZSA9PT0gJ3NldHVwJykge1xuICAgIHRoaXMuY29udHJvbENoYW5uZWwgPSBtZXNzYWdlLmNoYW5uZWw7XG4gIH0gZWxzZSBpZiAoc291cmNlID09PSAnY29udHJvbCcgJiYgbWVzc2FnZS50eXBlID09PSAnY2xvc2UnKSB7XG4gICAgZGVsZXRlIHRoaXMuY29udHJvbENoYW5uZWw7XG4gICAgdGhpcy5kb0Nsb3NlKCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCF0aGlzLmVtaXRDaGFubmVsICYmIG1lc3NhZ2UuY2hhbm5lbCkge1xuICAgICAgdGhpcy5lbWl0Q2hhbm5lbCA9IG1lc3NhZ2UuY2hhbm5lbDtcbiAgICAgIHRoaXMuZW1pdCgnc3RhcnQnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ2Nsb3NlJyAmJiBtZXNzYWdlLnRvKSB7XG4gICAgICB0aGlzLnRlYXJkb3duKG1lc3NhZ2UudG8pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS50eXBlID09PSAnZXJyb3InKSB7XG4gICAgICB0aGlzLmVycm9yKG1lc3NhZ2UudG8sIG1lc3NhZ2UubWVzc2FnZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLnRvKSB7XG4gICAgICBpZiAodGhpcy5lbWl0c1ttZXNzYWdlLnRvXSkge1xuICAgICAgICB0aGlzLmVtaXRzW21lc3NhZ2UudG9dKCdtZXNzYWdlJywgbWVzc2FnZS5tZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGVidWcud2FybignQ291bGQgbm90IGRlbGl2ZXIgbWVzc2FnZSwgbm8gc3VjaCBpbnRlcmZhY2U6ICcgKyBtZXNzYWdlLnRvKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG1zZyA9IG1lc3NhZ2UubWVzc2FnZTtcbiAgICAgIHV0aWwuZWFjaFByb3AodGhpcy5lbWl0cywgZnVuY3Rpb24gKGlmYWNlKSB7XG4gICAgICAgIGlmYWNlKCdtZXNzYWdlJywgbWVzc2FnZS5tZXNzYWdlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBDcmVhdGUgYSBjb25zdW1lci5JbnRlcmZhY2UgYXNzb2NpYXRlZCB3aXRoIHRoaXMgY29uc3VtZXIuXG4gKiBBbiBpbnRlcmZhY2UgaXMgcmV0dXJuZWQsIHdoaWNoIGlzIHN1cHBsaWVkIHdpdGggaW1wb3J0YW50IGNvbnRyb2wgb2YgdGhlXG4gKiBhcGkgdmlhIGNvbnN0cnVjdG9yIGFyZ3VtZW50czogKGJvdW5kIGJlbG93IGluIGdldEludGVyZmFjZUNvbnN0cnVjdG9yKVxuICogXG4gKiBvbk1zZzogZnVuY3Rpb24oYmluZGVyKSBzZXRzIHRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gbWVzc2FnZXMgZm9yIHRoaXNcbiAqICAgIGludGVyZmFjZSBhcnJpdmUgb24gdGhlIGNoYW5uZWwsXG4gKiBlbWl0OiBmdW5jdGlvbihtc2cpIGFsbG93cyB0aGlzIGludGVyZmFjZSB0byBlbWl0IG1lc3NhZ2VzLFxuICogaWQ6IHN0cmluZyBpcyB0aGUgSWRlbnRpZmllciBmb3IgdGhpcyBpbnRlcmZhY2UuXG4gKiBAbWV0aG9kIGdldEludGVyZmFjZVxuICovXG5Db25zdW1lci5wcm90b3R5cGUuZ2V0SW50ZXJmYWNlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgSWZhY2UgPSB0aGlzLmdldEludGVyZmFjZUNvbnN0cnVjdG9yKCksXG4gICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gIGlmIChhcmdzLmxlbmd0aCkge1xuICAgIElmYWNlID0gSWZhY2UuYmluZC5hcHBseShJZmFjZSwgW0lmYWNlXS5jb25jYXQoYXJncykpO1xuICB9XG4gIHJldHVybiBuZXcgSWZhY2UoKTtcbn07XG5cbi8qKlxuICogQXR0YWNoIGFuICdvbkV2ZW50JyBsaXN0ZW5lciB0byBhbiBpbnRlcmZhY2UsIGFsbG93aW5nIGV4dGVybmFsIGNvbnN1bWVyc1xuICogdG8gZWl0aGVyIGxpc3RlbiB0byBjaGFubmVsIHN0YXRlLCBvciByZWdpc3RlciBjYWxsYmFja3Mgb24gbGlmZXRpbWUgZXZlbnRzXG4gKiBvZiBpbmRpdmlkdWFsIGluc3RhbmNlcyBvZiB0aGUgaW50ZXJmYWNlLlxuICogQG1ldGhvZCBnZXRMaXN0ZW5lclxuICogQHBhcm1hIHtTdHJpbmd9IG5hbWUgVGhlIGV2ZW50IHRvIGxpc3RlbiB0by5cbiAqIEBwcml2YXRlXG4gKi9cbkNvbnN1bWVyLnByb3RvdHlwZS5nZXRMaXN0ZW5lciA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaW5zdGFuY2UsIGhhbmRsZXIpIHtcbiAgICAvLyBMaXN0ZW4gdG8gdGhlIGNoYW5uZWwgZGlyZWN0bHkuXG4gICAgaWYgKHR5cGVvZiBpbnN0YW5jZSA9PT0gJ2Z1bmN0aW9uJyAmJiBoYW5kbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub25jZShuYW1lLCBpbnN0YW5jZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gTGlzdGVuIHRvIGEgc3BlY2lmaWMgaW5zdGFuY2UuXG4gICAgdmFyIGhhbmRsZXJzID0gbmFtZSArICdIYW5kbGVycyc7XG4gICAgdXRpbC5lYWNoUHJvcCh0aGlzLmlmYWNlcywgZnVuY3Rpb24gKGNhbmRpZGF0ZSwgaWQpIHtcbiAgICAgIGlmIChjYW5kaWRhdGUgPT09IGluc3RhbmNlKSB7XG4gICAgICAgIGlmICh0aGlzW2hhbmRsZXJzXVtpZF0pIHtcbiAgICAgICAgICB0aGlzW2hhbmRsZXJzXVtpZF0ucHVzaChoYW5kbGVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzW2hhbmRsZXJzXVtpZF0gPSBbaGFuZGxlcl07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfS5iaW5kKHRoaXMpO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYSBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIGdldCBpbnRlcmZhY2VzIGZyb20gdGhpcyBhcGkgY29uc3VtZXJcbiAqIGZyb20gYSB1c2VyLXZpc2libGUgcG9pbnQuXG4gKiBAbWV0aG9kIGdldFByb3h5SW50ZXJmYWNlXG4gKi9cbkNvbnN1bWVyLnByb3RvdHlwZS5nZXRQcm94eUludGVyZmFjZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGZ1bmMgPSBmdW5jdGlvbiAocCkge1xuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICBpZiAoYXJncy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gcC5nZXRJbnRlcmZhY2UuYXBwbHkocCwgYXJncyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwLmdldEludGVyZmFjZSgpO1xuICAgIH1cbiAgfS5iaW5kKHt9LCB0aGlzKTtcblxuICBmdW5jLmNsb3NlID0gZnVuY3Rpb24gKGlmYWNlKSB7XG4gICAgaWYgKGlmYWNlKSB7XG4gICAgICB1dGlsLmVhY2hQcm9wKHRoaXMuaWZhY2VzLCBmdW5jdGlvbiAoY2FuZGlkYXRlLCBpZCkge1xuICAgICAgICBpZiAoY2FuZGlkYXRlID09PSBpZmFjZSkge1xuICAgICAgICAgIHRoaXMudGVhcmRvd24oaWQpO1xuICAgICAgICAgIHRoaXMuZW1pdCh0aGlzLmVtaXRDaGFubmVsLCB7XG4gICAgICAgICAgICB0eXBlOiAnY2xvc2UnLFxuICAgICAgICAgICAgdG86IGlkXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENsb3NlIHRoZSBjaGFubmVsLlxuICAgICAgdGhpcy5kb0Nsb3NlKCk7XG4gICAgfVxuICB9LmJpbmQodGhpcyk7XG5cbiAgZnVuYy5vbkNsb3NlID0gdGhpcy5nZXRMaXN0ZW5lcignY2xvc2UnKTtcbiAgZnVuYy5vbkVycm9yID0gdGhpcy5nZXRMaXN0ZW5lcignZXJyb3InKTtcblxuICByZXR1cm4gZnVuYztcbn07XG5cbi8qKlxuICogUHJvdmlkZXMgYSBib3VuZCBjbGFzcyBmb3IgY3JlYXRpbmcgYSBjb25zdW1lci5JbnRlcmZhY2UgYXNzb2NpYXRlZFxuICogd2l0aCB0aGlzIGFwaS4gVGhpcyBwYXJ0aWFsIGxldmVsIG9mIGNvbnN0cnVjdGlvbiBjYW4gYmUgdXNlZFxuICogdG8gYWxsb3cgdGhlIGNvbnN1bWVyIHRvIGJlIHVzZWQgYXMgYSBwcm92aWRlciBmb3IgYW5vdGhlciBBUEkuXG4gKiBAbWV0aG9kIGdldEludGVyZmFjZUNvbnN0cnVjdG9yXG4gKiBAcHJpdmF0ZVxuICovXG5Db25zdW1lci5wcm90b3R5cGUuZ2V0SW50ZXJmYWNlQ29uc3RydWN0b3IgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBpZCA9IENvbnN1bWVyLm5leHRJZCgpO1xuICByZXR1cm4gdGhpcy5pbnRlcmZhY2VDbHMuYmluZChcbiAgICB7fSxcbiAgICBmdW5jdGlvbiAoaWQsIG9iaiwgYmluZGVyKSB7XG4gICAgICB0aGlzLmlmYWNlc1tpZF0gPSBvYmo7XG4gICAgICB0aGlzLmVtaXRzW2lkXSA9IGJpbmRlcjtcbiAgICB9LmJpbmQodGhpcywgaWQpLFxuICAgIHRoaXMuZG9FbWl0LmJpbmQodGhpcywgaWQpLFxuICAgIHRoaXMuZGVidWdcbiAgKTtcbn07XG5cbi8qKlxuICogRW1pdCBhIG1lc3NhZ2Ugb24gdGhlIGNoYW5uZWwgb25jZSBzZXR1cCBpcyBjb21wbGV0ZS5cbiAqIEBtZXRob2QgZG9FbWl0XG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IHRvIFRoZSBJRCBvZiB0aGUgZmxvdyBzZW5kaW5nIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IG1zZyBUaGUgbWVzc2FnZSB0byBlbWl0XG4gKiBAcGFyYW0ge0Jvb2xlYW59IGFsbCBTZW5kIG1lc3NhZ2UgdG8gYWxsIHJlY2lwaWVudHMuXG4gKi9cbkNvbnN1bWVyLnByb3RvdHlwZS5kb0VtaXQgPSBmdW5jdGlvbiAodG8sIG1zZywgYWxsKSB7XG4gIGlmIChhbGwpIHtcbiAgICB0byA9IGZhbHNlO1xuICB9XG4gIGlmICh0aGlzLmVtaXRDaGFubmVsKSB7XG4gICAgdGhpcy5lbWl0KHRoaXMuZW1pdENoYW5uZWwsIHt0bzogdG8sIHR5cGU6ICdtZXNzYWdlJywgbWVzc2FnZTogbXNnfSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5vbmNlKCdzdGFydCcsIHRoaXMuZG9FbWl0LmJpbmQodGhpcywgdG8sIG1zZykpO1xuICB9XG59O1xuXG4vKipcbiAqIFRlYXJkb3duIGEgc2luZ2xlIGludGVyZmFjZSBvZiB0aGlzIGFwaS5cbiAqIEBtZXRob2QgdGVhcmRvd25cbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBUaGUgaWQgb2YgdGhlIGludGVyZmFjZSB0byB0ZWFyIGRvd24uXG4gKi9cbkNvbnN1bWVyLnByb3RvdHlwZS50ZWFyZG93biA9IGZ1bmN0aW9uIChpZCkge1xuICBpZiAodGhpcy5lbWl0c1tpZF0pIHtcbiAgICB0aGlzLmVtaXRzW2lkXSgnY2xvc2UnKTtcbiAgfVxuICBkZWxldGUgdGhpcy5lbWl0c1tpZF07XG4gIGlmICh0aGlzLmNsb3NlSGFuZGxlcnNbaWRdKSB7XG4gICAgdXRpbC5lYWNoUHJvcCh0aGlzLmNsb3NlSGFuZGxlcnNbaWRdLCBmdW5jdGlvbiAocHJvcCkge1xuICAgICAgcHJvcCgpO1xuICAgIH0pO1xuICB9XG4gIGRlbGV0ZSB0aGlzLmlmYWNlc1tpZF07XG4gIGRlbGV0ZSB0aGlzLmNsb3NlSGFuZGxlcnNbaWRdO1xuICBkZWxldGUgdGhpcy5lcnJvckhhbmRsZXJzW2lkXTtcbn07XG5cbi8qKlxuICogSGFuZGxlIGEgbWVzc2FnZSBlcnJvciByZXBvcnRlZCB0byB0aGlzIGFwaS5cbiAqIEBtZXRob2QgZXJyb3JcbiAqIEBwYXJhbSB7U3RyaW5nP30gaWQgVGhlIGlkIG9mIHRoZSBpbnRlcmZhY2Ugd2hlcmUgdGhlIGVycm9yIG9jY3VyZWQuXG4gKiBAcGFyYW0ge09iamVjdH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB3aGljaCBmYWlsZWQsIGlmIHJlbGV2YW50LlxuICovXG5Db25zdW1lci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoaWQsIG1lc3NhZ2UpIHtcbiAgaWYgKGlkICYmIHRoaXMuZXJyb3JIYW5kbGVyc1tpZF0pIHtcbiAgICB1dGlsLmVhY2hQcm9wKHRoaXMuZXJyb3JIYW5kbGVyc1tpZF0sIGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICBwcm9wKG1lc3NhZ2UpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKCFpZCkge1xuICAgIHRoaXMuZW1pdCgnZXJyb3InLCBtZXNzYWdlKTtcbiAgfVxufTtcblxuXG4vKipcbiAqIENsb3NlIC8gdGVhcmRvd24gdGhlIGZsb3cgdGhpcyBhcGkgdGVybWluYXRlcy5cbiAqIEBtZXRob2QgZG9DbG9zZVxuICovXG5Db25zdW1lci5wcm90b3R5cGUuZG9DbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuY29udHJvbENoYW5uZWwpIHtcbiAgICB0aGlzLmVtaXQodGhpcy5jb250cm9sQ2hhbm5lbCwge1xuICAgICAgdHlwZTogJ0NoYW5uZWwgQ2xvc2luZycsXG4gICAgICByZXF1ZXN0OiAnY2xvc2UnXG4gICAgfSk7XG4gIH1cblxuICB1dGlsLmVhY2hQcm9wKHRoaXMuZW1pdHMsIGZ1bmN0aW9uIChlbWl0LCBpZCkge1xuICAgIHRoaXMudGVhcmRvd24oaWQpO1xuICB9LmJpbmQodGhpcykpO1xuXG4gIHRoaXMuZW1pdCgnY2xvc2UnKTtcbiAgdGhpcy5vZmYoKTtcblxuICB0aGlzLmVtaXRDaGFubmVsID0gbnVsbDtcbn07XG5cbi8qKlxuICogR2V0IHRoZSB0ZXh0dWFsIGRlc2NyaXB0aW9uIG9mIHRoaXMgcG9ydC5cbiAqIEBtZXRob2QgdG9TdHJpbmdcbiAqIEByZXR1cm4gVGhlIGRlc2NyaXB0aW9uIG9mIHRoaXMgcG9ydC5cbiAqL1xuQ29uc3VtZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5lbWl0Q2hhbm5lbCkge1xuICAgIHJldHVybiBcIltDb25zdW1lciBcIiArIHRoaXMuZW1pdENoYW5uZWwgKyBcIl1cIjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJbdW5ib3VuZCBDb25zdW1lcl1cIjtcbiAgfVxufTtcblxuLyoqXG4gKiBHZXQgdGhlIG5leHQgSUQgZm9yIGFuIGFwaSBjaGFubmVsLlxuICogQG1ldGhvZCBuZXh0SWRcbiAqIEBzdGF0aWNcbiAqIEBwcml2YXRlXG4gKi9cbkNvbnN1bWVyLm5leHRJZCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCFDb25zdW1lci5pZCkge1xuICAgIENvbnN1bWVyLmlkID0gMTtcbiAgfVxuICByZXR1cm4gKENvbnN1bWVyLmlkICs9IDEpO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0IGEgc3RydWN0dXJlZCBkYXRhIHN0cnVjdHVyZSBpbnRvIGEgbWVzc2FnZSBzdHJlYW0gY29uZm9ybWluZyB0b1xuICogYSB0ZW1wbGF0ZSBhbmQgYW4gYXJyYXkgb2YgYmluYXJ5IGRhdGEgZWxlbWVudHMuXG4gKiBAc3RhdGljXG4gKiBAbWV0aG9kIG1lc3NhZ2VUb1BvcnRhYmxlXG4gKiBAcGFyYW0ge09iamVjdH0gdGVtcGxhdGUgVGhlIHRlbXBsYXRlIHRvIGNvbmZvcm0gdG9cbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBUaGUgaW5zdGFuY2Ugb2YgdGhlIGRhdGEgc3RydWN0dXJlIHRvIGNvbmZyb21cbiAqIEBwYXJhbSB7RGVidWd9IGRlYnVnIEEgZGVidWdnZXIgZm9yIGVycm9ycy5cbiAqIEByZXR1cm4ge3t0ZXh0OiBPYmplY3QsIGJpbmFyeTogQXJyYXl9fSBTZXBhcmF0ZWQgZGF0YSBzdHJlYW1zLlxuICovXG5Db25zdW1lci5tZXNzYWdlVG9Qb3J0YWJsZSA9IGZ1bmN0aW9uICh0ZW1wbGF0ZSwgdmFsdWUsIGRlYnVnKSB7XG4gIHZhciBleHRlcm5hbHMgPSBbXSxcbiAgICBtZXNzYWdlID0gQ29uc3VtZXIuY29uZm9ybSh0ZW1wbGF0ZSwgdmFsdWUsIGV4dGVybmFscywgdHJ1ZSwgZGVidWcpO1xuICByZXR1cm4ge1xuICAgIHRleHQ6IG1lc3NhZ2UsXG4gICAgYmluYXJ5OiBleHRlcm5hbHNcbiAgfTtcbn07XG5cbi8qKlxuICogQ29udmVydCBTdHJ1Y3R1cmVkIERhdGEgc3RyZWFtcyBpbnRvIGEgZGF0YSBzdHJ1Y3R1cmUgY29uZm9ybWluZyB0byBhXG4gKiB0ZW1wbGF0ZS5cbiAqIEBzdGF0aWNcbiAqIEBtZXRob2QgcG9ydGFibGVUb01lc3NhZ2VcbiAqIEBwYXJhbSB7T2JqZWN0fSB0ZW1wbGF0ZSBUaGUgdGVtcGxhdGUgdG8gY29uZm9ybSB0b1xuICogQHBhcmFtIHt7dGV4dDogT2JqZWN0LCBiaW5hcnk6IEFycmF5fX0gc3RyZWFtcyBUaGUgc3RyZWFtcyB0byBjb25mb3JtXG4gKiBAcGFyYW0ge0RlYnVnfSBkZWJ1ZyBBIGRlYnVnZ2VyIGZvciBlcnJvcnMuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBkYXRhIHN0cnVjdHVyZSBtYXRjaGluZyB0aGUgdGVtcGxhdGUuXG4gKi9cbkNvbnN1bWVyLnBvcnRhYmxlVG9NZXNzYWdlID0gZnVuY3Rpb24gKHRlbXBsYXRlLCBzdHJlYW1zLCBkZWJ1Zykge1xuICByZXR1cm4gQ29uc3VtZXIuY29uZm9ybSh0ZW1wbGF0ZSwgc3RyZWFtcy50ZXh0LCBzdHJlYW1zLmJpbmFyeSwgZmFsc2UsIGRlYnVnKTtcbn07XG5cbi8qKlxuICogRm9yY2UgYSBjb2xsZWN0aW9uIG9mIHZhbHVlcyB0byBsb29rIGxpa2UgdGhlIHR5cGVzIGFuZCBsZW5ndGggb2YgYW4gQVBJXG4gKiB0ZW1wbGF0ZS5cbiAqIEBzdGF0aWNcbiAqIEBtZXRob2QgY29uZm9ybVxuICogQHBhcmFtIHtPYmplY3R9IHRlbXBsYXRlIFRoZSB0ZW1wbGF0ZSB0byBjb25mb3JtIHRvXG4gKiBAcGFyYW0ge09iamVjdH0gZnJvbSBUaGUgdmFsdWUgdG8gY29uZm9ybVxuICogQHBhcmFtIHtBcnJheX0gZXh0ZXJuYWxzIExpc3Rpbmcgb2YgYmluYXJ5IGVsZW1lbnRzIGluIHRoZSB0ZW1wbGF0ZVxuICogQHBhcmFtIHtCb29sZWFufSBXaGV0aGVyIHRvIHRvIHNlcGFyYXRlIG9yIGNvbWJpbmUgc3RyZWFtcy5cbiAqIEBhcGFyYW0ge0RlYnVnfSBkZWJ1ZyBBIGRlYnVnZ2VyIGZvciBlcnJvcnMuXG4gKi9cbkNvbnN1bWVyLmNvbmZvcm0gPSBmdW5jdGlvbiAodGVtcGxhdGUsIGZyb20sIGV4dGVybmFscywgc2VwYXJhdGUsIGRlYnVnKSB7XG4gIC8qIGpzaGludCAtVzA4NiAqL1xuICBpZiAodHlwZW9mIChmcm9tKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vZnJvbSA9IHVuZGVmaW5lZDtcbiAgICAvL3Rocm93IFwiVHJ5aW5nIHRvIGNvbmZvcm0gYSBmdW5jdGlvblwiO1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0gZWxzZSBpZiAodHlwZW9mIChmcm9tKSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9IGVsc2UgaWYgKGZyb20gPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIGlmICh0ZW1wbGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZGVidWcuZXJyb3IoXCJNZXNzYWdlIGRpc2NhcmRlZCBmb3Igbm90IG1hdGNoaW5nIGRlY2xhcmVkIHR5cGUhXCIsIGZyb20pO1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBzd2l0Y2ggKHRlbXBsYXRlKSB7XG4gIGNhc2UgJ3N0cmluZyc6XG4gICAgcmV0dXJuIFN0cmluZygnJykgKyBmcm9tO1xuICBjYXNlICdudW1iZXInOlxuICAgIHJldHVybiBOdW1iZXIoMSkgKiBmcm9tO1xuICBjYXNlICdib29sZWFuJzpcbiAgICByZXR1cm4gQm9vbGVhbihmcm9tID09PSB0cnVlKTtcbiAgY2FzZSAnb2JqZWN0JzpcbiAgICAvLyBUT0RPKHdpbGxzY290dCk6IEFsbG93IHJlbW92YWwgaWYgc2FuZGJveGluZyBlbmZvcmNlcyB0aGlzLlxuICAgIGlmICh0eXBlb2YgZnJvbSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGZyb20pKTtcbiAgICB9XG4gIGNhc2UgJ2Jsb2InOlxuICAgIGlmIChzZXBhcmF0ZSkge1xuICAgICAgaWYgKGZyb20gaW5zdGFuY2VvZiBCbG9iKSB7XG4gICAgICAgIGV4dGVybmFscy5wdXNoKGZyb20pO1xuICAgICAgICByZXR1cm4gZXh0ZXJuYWxzLmxlbmd0aCAtIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWJ1Zy5lcnJvcignY29uZm9ybSBleHBlY3RpbmcgQmxvYiwgYnV0IHNhdyAnICsgKHR5cGVvZiBmcm9tKSk7XG4gICAgICAgIGV4dGVybmFscy5wdXNoKG5ldyBCbG9iKFtdKSk7XG4gICAgICAgIHJldHVybiBleHRlcm5hbHMubGVuZ3RoIC0gMTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGV4dGVybmFsc1tmcm9tXTtcbiAgICB9XG4gIGNhc2UgJ2J1ZmZlcic6XG4gICAgaWYgKHNlcGFyYXRlKSB7XG4gICAgICBleHRlcm5hbHMucHVzaChDb25zdW1lci5tYWtlQXJyYXlCdWZmZXIoZnJvbSwgZGVidWcpKTtcbiAgICAgIHJldHVybiBleHRlcm5hbHMubGVuZ3RoIC0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIENvbnN1bWVyLm1ha2VBcnJheUJ1ZmZlcihleHRlcm5hbHNbZnJvbV0sIGRlYnVnKTtcbiAgICB9XG4gIGNhc2UgJ3Byb3h5JzpcbiAgICByZXR1cm4gZnJvbTtcbiAgfVxuICB2YXIgdmFsLCBpO1xuICBpZiAoQXJyYXkuaXNBcnJheSh0ZW1wbGF0ZSkgJiYgZnJvbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFsID0gW107XG4gICAgaSA9IDA7XG4gICAgaWYgKHRlbXBsYXRlLmxlbmd0aCA9PT0gMiAmJiB0ZW1wbGF0ZVswXSA9PT0gJ2FycmF5Jykge1xuICAgICAgLy9jb25zb2xlLmxvZyhcInRlbXBsYXRlIGlzIGFycmF5LCB2YWx1ZSBpcyBcIiArIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgZnJvbS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB2YWwucHVzaChDb25zdW1lci5jb25mb3JtKHRlbXBsYXRlWzFdLCBmcm9tW2ldLCBleHRlcm5hbHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VwYXJhdGUsIGRlYnVnKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCB0ZW1wbGF0ZS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoZnJvbVtpXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFsLnB1c2goQ29uc3VtZXIuY29uZm9ybSh0ZW1wbGF0ZVtpXSwgZnJvbVtpXSwgZXh0ZXJuYWxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VwYXJhdGUsIGRlYnVnKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB0ZW1wbGF0ZSA9PT0gJ29iamVjdCcgJiYgZnJvbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFsID0ge307XG4gICAgdXRpbC5lYWNoUHJvcCh0ZW1wbGF0ZSwgZnVuY3Rpb24gKHByb3AsIG5hbWUpIHtcbiAgICAgIGlmIChmcm9tW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFsW25hbWVdID0gQ29uc3VtZXIuY29uZm9ybShwcm9wLCBmcm9tW25hbWVdLCBleHRlcm5hbHMsIHNlcGFyYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdmFsO1xuICB9XG4gIGRlYnVnLmVycm9yKCdVbmtub3duIHRlbXBsYXRlIHByb3ZpZGVkOiAnICsgdGVtcGxhdGUpO1xufTtcblxuLyoqXG4gKiBNYWtlIGEgdGhpbmcgaW50byBhbiBBcnJheSBCdWZmZXJcbiAqIEBzdGF0aWNcbiAqIEBtZXRob2QgbWFrZUFycmF5QnVmZmVyXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpbmdcbiAqIEBwYXJhbSB7RGVidWd9IGRlYnVnIEEgZGVidWdnZXIgaW4gY2FzZSBvZiBlcnJvcnMuXG4gKiBAcmV0dXJuIHtBcnJheUJ1ZmZlcn0gQW4gQXJyYXkgQnVmZmVyXG4gKi9cbkNvbnN1bWVyLm1ha2VBcnJheUJ1ZmZlciA9IGZ1bmN0aW9uICh0aGluZywgZGVidWcpIHtcbiAgaWYgKCF0aGluZykge1xuICAgIHJldHVybiBuZXcgQXJyYXlCdWZmZXIoMCk7XG4gIH1cblxuICBpZiAodGhpbmcgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgIHJldHVybiB0aGluZztcbiAgfSBlbHNlIGlmICh0aGluZy5jb25zdHJ1Y3Rvci5uYW1lID09PSBcIkFycmF5QnVmZmVyXCIgJiZcbiAgICAgIHR5cGVvZiB0aGluZy5wcm90b3R5cGUgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAvLyBXb3JrYXJvdW5kIGZvciB3ZWJraXQgb3JpZ2luIG93bmVyc2hpcCBpc3N1ZS5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vVVdOZXR3b3Jrc0xhYi9mcmVlZG9tL2lzc3Vlcy8yOFxuICAgIHJldHVybiBuZXcgRGF0YVZpZXcodGhpbmcpLmJ1ZmZlcjtcbiAgfSBlbHNlIHtcbiAgICBkZWJ1Zy5lcnJvcignZXhwZWN0aW5nIEFycmF5QnVmZmVyLCBidXQgc2F3ICcgK1xuICAgICAgICAodHlwZW9mIHRoaW5nKSArICc6ICcgKyBKU09OLnN0cmluZ2lmeSh0aGluZykpO1xuICAgIHJldHVybiBuZXcgQXJyYXlCdWZmZXIoMCk7XG4gIH1cbn07XG5cbi8qKlxuICogUmVjdXJzaXZlbHkgdHJhdmVyc2UgYSBbbmVzdGVkXSBvYmplY3QgYW5kIGZyZWV6ZSBpdHMga2V5cyBmcm9tIGJlaW5nXG4gKiB3cml0YWJsZS4gTm90ZSwgdGhlIHJlc3VsdCBjYW4gaGF2ZSBuZXcga2V5cyBhZGRlZCB0byBpdCwgYnV0IGV4aXN0aW5nIG9uZXNcbiAqIGNhbm5vdCBiZSAgb3ZlcndyaXR0ZW4uIERvZXNuJ3QgZG8gYW55dGhpbmcgZm9yIGFycmF5cyBvciBvdGhlciBjb2xsZWN0aW9ucy5cbiAqXG4gKiBAbWV0aG9kIHJlY3Vyc2l2ZUZyZWV6ZU9iamVjdFxuICogQHN0YXRpY1xuICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIG9iamVjdCB0byBiZSBmcm96ZW5cbiAqIEByZXR1cm4ge09iamVjdH0gb2JqXG4gKiovXG5Db25zdW1lci5yZWN1cnNpdmVGcmVlemVPYmplY3QgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHZhciBrLCByZXQgPSB7fTtcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuICBmb3IgKGsgaW4gb2JqKSB7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJldCwgaywge1xuICAgICAgICB2YWx1ZTogQ29uc3VtZXIucmVjdXJzaXZlRnJlZXplT2JqZWN0KG9ialtrXSksXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnN1bWVyO1xuIiwiLypqc2xpbnQgaW5kZW50OjIsIG5vZGU6dHJ1ZSwgc2xvcHB5OnRydWUgKi9cbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbi8qKlxuICogQSBmcmVlZG9tIGVudHJ5IHBvaW50IGZvciBkZWJ1Z2dpbmcuXG4gKiBAdXNlcyBoYW5kbGVFdmVudHNcbiAqIEBpbXBsZW1lbnRzIFBvcnRcbiAqIEBjb25zdHJ1Y3RvclxuICovXG52YXIgRGVidWcgPSBmdW5jdGlvbiAobG9nZ2VyKSB7XG4gIHRoaXMuaWQgPSAnZGVidWcnO1xuICB0aGlzLmVtaXRDaGFubmVsID0gZmFsc2U7XG4gIHRoaXMuY29uZmlnID0gZmFsc2U7XG4gIHV0aWwuaGFuZGxlRXZlbnRzKHRoaXMpO1xufTtcblxuLyoqXG4gKiBQcm92aWRlIGEgdGV4dHVhbCBkZXNjcmlwdGlvbiBvZiB0aGlzIHBvcnQuXG4gKiBAbWV0aG9kIHRvU3RyaW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHRoZSB0ZXh0dWFsIGRlc2NyaXB0aW9uLlxuICovXG5EZWJ1Zy5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAnW0NvbnNvbGVdJztcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgYSBsb2dnZXIgZm9yIG91dHB1dHRpbmcgZGVidWdnaW5nIG1lc3NhZ2VzLlxuICogQG1ldGhvZCBzZXRMb2dnZXJcbiAqIEBwYXJhbSB7Q29uc29sZX0gbG9nZ2VyIFRoZSBsb2dnZXIgdG8gcmVnaXN0ZXJcbiAqL1xuRGVidWcucHJvdG90eXBlLnNldExvZ2dlciA9IGZ1bmN0aW9uIChsb2dnZXIpIHtcbiAgaWYgKHRoaXMubG9nZ2VyKSB7XG4gICAgdGhpcy5pbmZvKCdSZXBsYWNpbmcgTG9nZ2VyLicpO1xuICB9XG4gIHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xuICB0aGlzLmVtaXQoJ2xvZ2dlcicpO1xufTtcblxuLyoqXG4gKiBIYW5kbGVyIGZvciByZWNlaXZpbmcgbWVzc2FnZXMgc2VudCB0byB0aGUgZGVidWcgcG9ydC5cbiAqIFRoZXNlIG1lc3NhZ2VzIGFyZSB1c2VkIHRvIHJldHJlaXZlIGNvbmZpZyBmb3IgZXhwb3NpbmcgY29uc29sZS5cbiAqIEBtZXRob2Qgb25NZXNzYWdlXG4gKiBAcGFyYW0ge1N0cmluZ30gc291cmNlIHRoZSBzb3VyY2UgaWRlbnRpZmllciBmb3IgdGhlIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gbWVzc2FnZSB0aGUgcmVjZWl2ZWQgbWVzc2FnZS5cbiAqL1xuRGVidWcucHJvdG90eXBlLm9uTWVzc2FnZSA9IGZ1bmN0aW9uIChzb3VyY2UsIG1lc3NhZ2UpIHtcbiAgaWYgKHNvdXJjZSA9PT0gJ2NvbnRyb2wnICYmIG1lc3NhZ2UuY2hhbm5lbCAmJiAhdGhpcy5lbWl0Q2hhbm5lbCkge1xuICAgIHRoaXMuZW1pdENoYW5uZWwgPSBtZXNzYWdlLmNoYW5uZWw7XG4gICAgdGhpcy5jb25maWcgPSBtZXNzYWdlLmNvbmZpZztcbiAgICBpZiAoIXRoaXMuY29uZmlnLmdsb2JhbC5jb25zb2xlKSB7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuY29uZmlnLmdsb2JhbC5jb25zb2xlID0gY29uc29sZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29uZmlnLmdsb2JhbC5jb25zb2xlID0gdGhpcy5nZXRMb2dnZXIoJ0NvbnNvbGUnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5lbWl0KCdyZWFkeScpO1xuICB9XG59O1xuXG4vKipcbiAqIERpc3BhdGNoIGEgZGVidWcgbWVzc2FnZSB3aXRoIGFyYml0cmFyeSBzZXZlcml0eS5cbiAqIEFsbCBkZWJ1ZyBtZXNzYWdlcyBhcmUgcm91dGVkIHRocm91Z2ggdGhlIG1hbmFnZXIsIHRvIGFsbG93IGZvciBkZWxlZ2F0aW9uLlxuICogQG1ldGhvZCBmb3JtYXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZXZlcml0eSB0aGUgc2V2ZXJpdHkgb2YgdGhlIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge1N0cmluZ30gc291cmNlIFRoZSBsb2NhdGlvbiBvZiBtZXNzYWdlLlxuICogQHBhcmFtIHtTdHJpbmdbXX0gYXJncyBUaGUgY29udGVudHMgb2YgdGhlIG1lc3NhZ2UuXG4gKiBAcHJpdmF0ZVxuICovXG5EZWJ1Zy5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24gKHNldmVyaXR5LCBzb3VyY2UsIGFyZ3MpIHtcbiAgdmFyIGksIGFsaXN0ID0gW10sIGFyZ2FycjtcbiAgaWYgKHR5cGVvZiBhcmdzID09PSBcInN0cmluZ1wiICYmIHNvdXJjZSkge1xuICAgIHRyeSB7XG4gICAgICBhcmdhcnIgPSBKU09OLnBhcnNlKGFyZ3MpO1xuICAgICAgaWYgKGFyZ2FyciBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIGFyZ3MgPSBhcmdhcnI7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gcGFzcy5cbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIGFyZ3MgPT09IFwic3RyaW5nXCIpIHtcbiAgICBhbGlzdC5wdXNoKGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIGZvciAoaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBhbGlzdC5wdXNoKGFyZ3NbaV0pO1xuICAgIH1cbiAgfVxuICBpZiAoIXRoaXMuZW1pdENoYW5uZWwpIHtcbiAgICB0aGlzLm9uKCdyZWFkeScsIHRoaXMuZm9ybWF0LmJpbmQodGhpcywgc2V2ZXJpdHksIHNvdXJjZSwgYWxpc3QpKTtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5lbWl0KHRoaXMuZW1pdENoYW5uZWwsIHtcbiAgICBzZXZlcml0eTogc2V2ZXJpdHksXG4gICAgc291cmNlOiBzb3VyY2UsXG4gICAgcXVpZXQ6IHRydWUsXG4gICAgcmVxdWVzdDogJ2RlYnVnJyxcbiAgICBtc2c6IEpTT04uc3RyaW5naWZ5KGFsaXN0KVxuICB9KTtcbn07XG5cbi8qKlxuICogUHJpbnQgcmVjZWl2ZWQgbWVzc2FnZXMgb24gdGhlIGNvbnNvbGUuXG4gKiBUaGlzIGlzIGNhbGxlZCBieSB0aGUgbWFuYWdlciBpbiByZXNwb25zZSB0byBhbiBlbWlzc2lvbiBmcm9tIGZvcm1hdC5cbiAqIEBtZXRob2QgcHJpbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlIFRoZSBtZXNzYWdlIGVtaXR0ZWQgYnkge0BzZWUgZm9ybWF0fSB0byBwcmludC5cbiAqL1xuRGVidWcucHJvdG90eXBlLnByaW50ID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgaWYgKCF0aGlzLmxvZ2dlcikge1xuICAgIHRoaXMub25jZSgnbG9nZ2VyJywgdGhpcy5wcmludC5iaW5kKHRoaXMsIG1lc3NhZ2UpKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgYXJncywgYXJyID0gW10sIGkgPSAwO1xuICBhcmdzID0gSlNPTi5wYXJzZShtZXNzYWdlLm1zZyk7XG4gIGlmICh0eXBlb2YgYXJncyA9PT0gXCJzdHJpbmdcIikge1xuICAgIGFyci5wdXNoKGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChhcmdzW2ldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGFyci5wdXNoKGFyZ3NbaV0pO1xuICAgICAgaSArPSAxO1xuICAgIH1cbiAgfVxuICB0aGlzLmxvZ2dlclttZXNzYWdlLnNldmVyaXR5XS5jYWxsKHRoaXMubG9nZ2VyLCBtZXNzYWdlLnNvdXJjZSwgYXJyLCBmdW5jdGlvbiAoKSB7fSk7XG59O1xuXG4vKipcbiAqIFByaW50IGEgbG9nIG1lc3NhZ2UgdG8gdGhlIGNvbnNvbGUuXG4gKiBAbWV0aG9kIGxvZ1xuICovXG5EZWJ1Zy5wcm90b3R5cGUubG9nID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmZvcm1hdCgnbG9nJywgdW5kZWZpbmVkLCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBQcmludCBhbiBpbmZvIG1lc3NhZ2UgdG8gdGhlIGNvbnNvbGUuXG4gKiBAbWV0aG9kIGxvZ1xuICovXG5EZWJ1Zy5wcm90b3R5cGUuaW5mbyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5mb3JtYXQoJ2luZm8nLCB1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIFByaW50IGEgZGVidWcgbWVzc2FnZSB0byB0aGUgY29uc29sZS5cbiAqIEBtZXRob2QgbG9nXG4gKi9cbkRlYnVnLnByb3RvdHlwZS5kZWJ1ZyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5mb3JtYXQoJ2RlYnVnJywgdW5kZWZpbmVkLCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBQcmludCBhIHdhcm5pbmcgbWVzc2FnZSB0byB0aGUgY29uc29sZS5cbiAqIEBtZXRob2Qgd2FyblxuICovXG5EZWJ1Zy5wcm90b3R5cGUud2FybiA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5mb3JtYXQoJ3dhcm4nLCB1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIFByaW50IGFuIGVycm9yIG1lc3NhZ2UgdG8gdGhlIGNvbnNvbGUuXG4gKiBAbWV0aG9kIGVycm9yXG4gKi9cbkRlYnVnLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5mb3JtYXQoJ2Vycm9yJywgdW5kZWZpbmVkLCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBHZXQgYSBsb2dnZXIgdGhhdCBsb2dzIG1lc3NhZ2VzIHByZWZpeGVkIGJ5IGEgZ2l2ZW4gbmFtZS5cbiAqIEBtZXRob2QgZ2V0TG9nZ2VyXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgcHJlZml4IGZvciBsb2dnZWQgbWVzc2FnZXMuXG4gKiBAcmV0dXJucyB7Q29uc29sZX0gQSBjb25zb2xlLWxpa2Ugb2JqZWN0LlxuICovXG5EZWJ1Zy5wcm90b3R5cGUuZ2V0TG9nZ2VyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyIGxvZyA9IGZ1bmN0aW9uIChzZXZlcml0eSwgc291cmNlKSB7XG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgICB0aGlzLmZvcm1hdChzZXZlcml0eSwgc291cmNlLCBhcmdzKTtcbiAgfSxcbiAgICBsb2dnZXIgPSB7XG4gICAgICBmcmVlZG9tOiB0cnVlLFxuICAgICAgZGVidWc6IGxvZy5iaW5kKHRoaXMsICdkZWJ1ZycsIG5hbWUpLFxuICAgICAgaW5mbzogbG9nLmJpbmQodGhpcywgJ2luZm8nLCBuYW1lKSxcbiAgICAgIGxvZzogbG9nLmJpbmQodGhpcywgJ2xvZycsIG5hbWUpLFxuICAgICAgd2FybjogbG9nLmJpbmQodGhpcywgJ3dhcm4nLCBuYW1lKSxcbiAgICAgIGVycm9yOiBsb2cuYmluZCh0aGlzLCAnZXJyb3InLCBuYW1lKVxuICAgIH07XG4gIHJldHVybiBsb2dnZXI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IERlYnVnO1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwpe1xuLypqc2xpbnQgaW5kZW50OjIsbm9kZTp0cnVlICovXHJcbnZhciBQcm9taXNlQ29tcGF0ID0gcmVxdWlyZSgnZXM2LXByb21pc2UnKS5Qcm9taXNlO1xyXG5cclxudmFyIEFwaSA9IHJlcXVpcmUoJy4vYXBpJyk7XHJcbnZhciBEZWJ1ZyA9IHJlcXVpcmUoJy4vZGVidWcnKTtcclxudmFyIEh1YiA9IHJlcXVpcmUoJy4vaHViJyk7XHJcbnZhciBNYW5hZ2VyID0gcmVxdWlyZSgnLi9tYW5hZ2VyJyk7XHJcbnZhciBQb2xpY3kgPSByZXF1aXJlKCcuL3BvbGljeScpO1xyXG52YXIgUHJveHlCaW5kZXIgPSByZXF1aXJlKCcuL3Byb3h5YmluZGVyJyk7XHJcbnZhciBSZXNvdXJjZSA9IHJlcXVpcmUoJy4vcmVzb3VyY2UnKTtcclxudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcclxudmFyIEJ1bmRsZSA9IHJlcXVpcmUoJy4vYnVuZGxlJyk7XHJcblxyXG52YXIgZnJlZWRvbUdsb2JhbDtcclxudmFyIGdldEdsb2JhbCA9IGZ1bmN0aW9uICgpIHtcclxuICAndXNlIHN0cmljdCc7XHJcbiAgXHJcbiAgLy8gTm9kZS5qc1xyXG4gIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyAmJiBnbG9iYWwucHJvdG90eXBlID09PSB1bmRlZmluZWQpIHtcclxuICAgIGZyZWVkb21HbG9iYWwgPSBnbG9iYWw7XHJcbiAgLy8gQnJvd3NlcnNcclxuICB9IGVsc2Uge1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGZyZWVkb21HbG9iYWwgPSB0aGlzO1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG59O1xyXG5nZXRHbG9iYWwoKTtcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYSBuZXcgZnJlZWRvbSBjb250ZXh0LlxyXG4gKiBAcGFyYW0ge09iamVjdH0gY29udGV4dCBJbmZvcm1hdGlvbiBhYm91dCB0aGUgbG9jYWwgY29udGV4dC5cclxuICogQHNlZSB7dXRpbC93b3JrZXJFbnRyeS5qc31cclxuICogQHBhcmFtIHtTdHJpbmd9IG1hbmlmZXN0IFRoZSBtYW5pZmVzdCB0byBsb2FkLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIENvbmZpZ3VyYXRpb24ga2V5cyBzZXQgYnkgdGhlIHVzZXIuXHJcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBBIHByb21pc2UgZm9yIHRoZSBtb2R1bGUgZGVmaW5lZCBpbiB0aGUgbWFuaWZlc3QuXHJcbiAqL1xyXG52YXIgc2V0dXAgPSBmdW5jdGlvbiAoY29udGV4dCwgbWFuaWZlc3QsIGNvbmZpZykge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuICB2YXIgZGVidWcgPSBuZXcgRGVidWcoKSxcclxuICAgIGh1YiA9IG5ldyBIdWIoZGVidWcpLFxyXG4gICAgcmVzb3VyY2UgPSBuZXcgUmVzb3VyY2UoZGVidWcpLFxyXG4gICAgYXBpID0gbmV3IEFwaShkZWJ1ZyksXHJcbiAgICBtYW5hZ2VyID0gbmV3IE1hbmFnZXIoaHViLCByZXNvdXJjZSwgYXBpKSxcclxuICAgIGJpbmRlciA9IG5ldyBQcm94eUJpbmRlcihtYW5hZ2VyKSxcclxuICAgIHBvbGljeSxcclxuICAgIHNpdGVfY2ZnID0ge1xyXG4gICAgICAnZGVidWcnOiAnbG9nJyxcclxuICAgICAgJ21hbmlmZXN0JzogbWFuaWZlc3QsXHJcbiAgICAgICdtb2R1bGVDb250ZXh0JzogKCFjb250ZXh0IHx8IHR5cGVvZiAoY29udGV4dC5pc01vZHVsZSkgPT09IFwidW5kZWZpbmVkXCIpID9cclxuICAgICAgICAgIHV0aWwuaXNNb2R1bGVDb250ZXh0KCkgOlxyXG4gICAgICAgICAgY29udGV4dC5pc01vZHVsZVxyXG4gICAgfSxcclxuICAgIGxpbmssXHJcbiAgICBQb3J0LFxyXG4gICAgY2xlYW51cCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgYXBpLmNsZWFudXAoKTtcclxuICAgICAgbWFuYWdlci5kZXN0cm95KCk7XHJcbiAgICB9O1xyXG5cclxuICBpZiAoY29uZmlnKSB7XHJcbiAgICB1dGlsLm1peGluKHNpdGVfY2ZnLCBjb25maWcsIHRydWUpO1xyXG4gIH1cclxuICBzaXRlX2NmZy5nbG9iYWwgPSBmcmVlZG9tR2xvYmFsO1xyXG4gIGlmIChjb250ZXh0KSB7XHJcbiAgICB1dGlsLm1peGluKHNpdGVfY2ZnLCBjb250ZXh0LCB0cnVlKTtcclxuICB9XHJcblxyXG4gIC8vIFJlZ2lzdGVyIHVzZXItc3VwcGxpZWQgZXh0ZW5zaW9ucy5cclxuICAvLyBGb3IgZXhhbXBsZSB0aGUgJ2NvcmUub2F1dGgnIHByb3ZpZGVyIGRlZmluZXMgYSByZWdpc3RlciBmdW5jdGlvbixcclxuICAvLyB3aGljaCBlbmFibGVzIHNpdGVfY2ZnLm9hdXRoIHRvIGJlIHJlZ2lzdGVyZWQgd2l0aCBpdC5cclxuICBjb250ZXh0LnByb3ZpZGVycy5mb3JFYWNoKGZ1bmN0aW9uIChwcm92aWRlcikge1xyXG4gICAgdmFyIG5hbWU7XHJcbiAgICBpZiAocHJvdmlkZXIubmFtZS5pbmRleE9mKCdjb3JlLicpID09PSAwICYmXHJcbiAgICAgICAgdHlwZW9mIHByb3ZpZGVyLnJlZ2lzdGVyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIG5hbWUgPSBwcm92aWRlci5uYW1lLnN1YnN0cig1KTtcclxuICAgICAgLy8gSW52ZXJ0IHByaW9yaXR5IGFuZCBwcmVmZXIgdXNlciBjb25maWcgb3ZlciBsb2NhbCBjb250ZXh0IGZvciB0aGVzZS5cclxuICAgICAgaWYgKGNvbmZpZyAmJiBjb25maWdbbmFtZV0pIHtcclxuICAgICAgICBwcm92aWRlci5yZWdpc3Rlcihjb25maWdbbmFtZV0pO1xyXG4gICAgICB9IGVsc2UgaWYgKHNpdGVfY2ZnW25hbWVdKSB7XHJcbiAgICAgICAgcHJvdmlkZXIucmVnaXN0ZXIoc2l0ZV9jZmdbbmFtZV0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHByb3ZpZGVyLnJlZ2lzdGVyKHVuZGVmaW5lZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuICBcclxuICBCdW5kbGUucmVnaXN0ZXIoY29udGV4dC5wcm92aWRlcnMsIGFwaSk7XHJcbiAgcmVzb3VyY2UucmVnaXN0ZXIoY29udGV4dC5yZXNvbHZlcnMgfHwgW10pO1xyXG5cclxuICByZXR1cm4gbmV3IFByb21pc2VDb21wYXQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgaWYgKHNpdGVfY2ZnLm1vZHVsZUNvbnRleHQpIHtcclxuICAgICAgUG9ydCA9IHNpdGVfY2ZnLnBvcnRUeXBlO1xyXG4gICAgICBsaW5rID0gbmV3IFBvcnQoJ091dGJvdW5kJywgcmVzb3VyY2UpO1xyXG4gICAgICBtYW5hZ2VyLnNldHVwKGxpbmspO1xyXG5cclxuICAgICAgLy8gRGVsYXkgZGVidWcgbWVzc2FnZXMgdW50aWwgZGVsZWdhdGlvbiB0byB0aGUgcGFyZW50IGNvbnRleHQgaXMgc2V0dXAuXHJcbiAgICAgIG1hbmFnZXIub25jZSgnZGVsZWdhdGUnLCBtYW5hZ2VyLnNldHVwLmJpbmQobWFuYWdlciwgZGVidWcpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1hbmFnZXIuc2V0dXAoZGVidWcpO1xyXG4gICAgICBwb2xpY3kgPSBuZXcgUG9saWN5KG1hbmFnZXIsIHJlc291cmNlLCBzaXRlX2NmZyk7XHJcblxyXG4gICAgICAvLyBEZWZpbmUgaG93IHRvIGxvYWQgYSByb290IG1vZHVsZS5cclxuICAgICAgdmFyIGZhbGxiYWNrTG9nZ2VyLCBnZXRJZmFjZTtcclxuICAgICAgZmFsbGJhY2tMb2dnZXIgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgICAgIGFwaS5nZXRDb3JlKCdjb3JlLmNvbnNvbGUnLCB7XHJcbiAgICAgICAgICBjb25maWc6IHNpdGVfY2ZnXHJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocHJvdmlkZXIpIHtcclxuICAgICAgICAgIHZhciBsb2dnZXIgPSBuZXcgcHJvdmlkZXIuaW5zdCgpO1xyXG4gICAgICAgICAgZGVidWcuc2V0TG9nZ2VyKGxvZ2dlcik7XHJcbiAgICAgICAgICBpZiAobWVzc2FnZSkge1xyXG4gICAgICAgICAgICBkZWJ1Zy5lcnJvcihtZXNzYWdlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICAgICAgZ2V0SWZhY2UgPSBmdW5jdGlvbiAobWFuaWZlc3QpIHtcclxuICAgICAgICByZXR1cm4gcmVzb3VyY2UuZ2V0KHNpdGVfY2ZnLmxvY2F0aW9uLCBtYW5pZmVzdCkudGhlbihcclxuICAgICAgICAgIGZ1bmN0aW9uIChjYW5vbmljYWxfbWFuaWZlc3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBvbGljeS5nZXQoW10sIGNhbm9uaWNhbF9tYW5pZmVzdCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKS50aGVuKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xyXG4gICAgICAgICAgbWFuYWdlci5zZXR1cChpbnN0YW5jZSk7XHJcbiAgICAgICAgICByZXR1cm4gYmluZGVyLmJpbmREZWZhdWx0KGluc3RhbmNlLCBhcGksIGluc3RhbmNlLm1hbmlmZXN0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8vIExvYWQgYXBwcm9wcmlhdGUgTG9nZ2VyLlxyXG4gICAgICBpZiAoc2l0ZV9jZmcubG9nZ2VyKSB7XHJcbiAgICAgICAgZ2V0SWZhY2Uoc2l0ZV9jZmcubG9nZ2VyKS50aGVuKGZ1bmN0aW9uIChpZmFjZSkge1xyXG4gICAgICAgICAgaWYgKGlmYWNlLmV4dGVybmFsLmFwaSAhPT0gJ2NvbnNvbGUnKSB7XHJcbiAgICAgICAgICAgIGZhbGxiYWNrTG9nZ2VyKFwiVW53aWxsaW5nIHRvIHVzZSBsb2dnZXIgd2l0aCB1bmtub3duIEFQSTpcIixcclxuICAgICAgICAgICAgICBpZmFjZS5leHRlcm5hbC5hcGkpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGVidWcuc2V0TG9nZ2VyKGlmYWNlLmV4dGVybmFsKCkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIGZhbGxiYWNrTG9nZ2VyKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmYWxsYmFja0xvZ2dlcigpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBMb2FkIHJvb3QgbW9kdWxlLlxyXG4gICAgICBnZXRJZmFjZShzaXRlX2NmZy5tYW5pZmVzdCkudGhlbihmdW5jdGlvbiAoaWZhY2UpIHtcclxuICAgICAgICBpZmFjZS5wb3J0Lm9uY2UoJ2Nsb3NlJywgY2xlYW51cCk7XHJcbiAgICAgICAgcmV0dXJuIGlmYWNlLmV4dGVybmFsO1xyXG4gICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgZGVidWcuZXJyb3IoJ0ZhaWxlZCB0byByZXRyaWV2ZSBtYW5pZmVzdDogJyArIGVycik7XHJcbiAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICB9KS50aGVuKHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgaHViLmVtaXQoJ2NvbmZpZycsIHNpdGVfY2ZnKTtcclxuICB9KTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gc2V0dXA7XHJcblxufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pIiwiLypqc2xpbnQgaW5kZW50OjIsc2xvcHB5OnRydWUsbm9kZTp0cnVlICovXHJcbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XHJcblxyXG4vKipcclxuICogRGVmaW5lcyBmZG9tLkh1YiwgdGhlIGNvcmUgbWVzc2FnZSBodWIgYmV0d2VlbiBmcmVlZG9tIG1vZHVsZXMuXHJcbiAqIEluY29tbWluZyBtZXNzYWdlcyBmcm9tIGFwcHMgYXJlIHNlbnQgdG8gaHViLm9uTWVzc2FnZSgpXHJcbiAqIEBjbGFzcyBIdWJcclxuICogQHBhcmFtIHtEZWJ1Z30gZGVidWcgTG9nZ2VyIGZvciBkZWJ1Z2dpbmcuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxudmFyIEh1YiA9IGZ1bmN0aW9uIChkZWJ1Zykge1xyXG4gIHRoaXMuZGVidWcgPSBkZWJ1ZztcclxuICB0aGlzLmNvbmZpZyA9IHt9O1xyXG4gIHRoaXMuYXBwcyA9IHt9O1xyXG4gIHRoaXMucm91dGVzID0ge307XHJcblxyXG4gIHV0aWwuaGFuZGxlRXZlbnRzKHRoaXMpO1xyXG4gIHRoaXMub24oJ2NvbmZpZycsIGZ1bmN0aW9uIChjb25maWcpIHtcclxuICAgIHV0aWwubWl4aW4odGhpcy5jb25maWcsIGNvbmZpZyk7XHJcbiAgfS5iaW5kKHRoaXMpKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBIYW5kbGUgYW4gaW5jb21pbmcgbWVzc2FnZSBmcm9tIGEgZnJlZWRvbSBhcHAuXHJcbiAqIEBtZXRob2Qgb25NZXNzYWdlXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBzb3VyY2UgVGhlIGlkZW50aWZpeWluZyBzb3VyY2Ugb2YgdGhlIG1lc3NhZ2UuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlIFRoZSBzZW50IG1lc3NhZ2UuXHJcbiAqL1xyXG5IdWIucHJvdG90eXBlLm9uTWVzc2FnZSA9IGZ1bmN0aW9uIChzb3VyY2UsIG1lc3NhZ2UpIHtcclxuICB2YXIgZGVzdGluYXRpb24gPSB0aGlzLnJvdXRlc1tzb3VyY2VdLCB0eXBlO1xyXG4gIGlmICghZGVzdGluYXRpb24gfHwgIWRlc3RpbmF0aW9uLmFwcCkge1xyXG4gICAgdGhpcy5kZWJ1Zy53YXJuKFwiTWVzc2FnZSBkcm9wcGVkIGZyb20gdW5yZWdpc3RlcmVkIHNvdXJjZSBcIiArIHNvdXJjZSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBpZiAoIXRoaXMuYXBwc1tkZXN0aW5hdGlvbi5hcHBdKSB7XHJcbiAgICB0aGlzLmRlYnVnLndhcm4oXCJNZXNzYWdlIGRyb3BwZWQgdG8gZGVzdGluYXRpb24gXCIgKyBkZXN0aW5hdGlvbi5hcHApO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gVGhlIGZpcmVob3NlIHRyYWNpbmcgYWxsIGludGVybmFsIGZyZWVkb20uanMgbWVzc2FnZXMuXHJcbiAgaWYgKCFtZXNzYWdlLnF1aWV0ICYmICFkZXN0aW5hdGlvbi5xdWlldCAmJiB0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy50cmFjZSkge1xyXG4gICAgdHlwZSA9IG1lc3NhZ2UudHlwZTtcclxuICAgIGlmIChtZXNzYWdlLnR5cGUgPT09ICdtZXNzYWdlJyAmJiBtZXNzYWdlLm1lc3NhZ2UgJiZcclxuICAgICAgICBtZXNzYWdlLm1lc3NhZ2UuYWN0aW9uID09PSAnbWV0aG9kJykge1xyXG4gICAgICB0eXBlID0gJ21ldGhvZC4nICsgbWVzc2FnZS5tZXNzYWdlLnR5cGU7XHJcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ21ldGhvZCcgJiYgbWVzc2FnZS5tZXNzYWdlICYmXHJcbiAgICAgICAgbWVzc2FnZS5tZXNzYWdlLnR5cGUgPT09ICdtZXRob2QnKSB7XHJcbiAgICAgIHR5cGUgPSAncmV0dXJuLicgKyBtZXNzYWdlLm1lc3NhZ2UubmFtZTtcclxuICAgIH0gZWxzZSBpZiAobWVzc2FnZS50eXBlID09PSAnbWVzc2FnZScgJiYgbWVzc2FnZS5tZXNzYWdlICYmXHJcbiAgICAgICAgbWVzc2FnZS5tZXNzYWdlLnR5cGUgPT09ICdldmVudCcpIHtcclxuICAgICAgdHlwZSA9ICdldmVudC4nICsgbWVzc2FnZS5tZXNzYWdlLm5hbWU7XHJcbiAgICB9XHJcbiAgICB0aGlzLmRlYnVnLmRlYnVnKHRoaXMuYXBwc1tkZXN0aW5hdGlvbi5zb3VyY2VdLnRvU3RyaW5nKCkgK1xyXG4gICAgICAgIFwiIC1cIiArIHR5cGUgKyBcIi0+IFwiICtcclxuICAgICAgICB0aGlzLmFwcHNbZGVzdGluYXRpb24uYXBwXS50b1N0cmluZygpICsgXCIuXCIgKyBkZXN0aW5hdGlvbi5mbG93KTtcclxuICB9XHJcblxyXG4gIHRoaXMuYXBwc1tkZXN0aW5hdGlvbi5hcHBdLm9uTWVzc2FnZShkZXN0aW5hdGlvbi5mbG93LCBtZXNzYWdlKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBHZXQgdGhlIGxvY2FsIGRlc3RpbmF0aW9uIHBvcnQgb2YgYSBmbG93LlxyXG4gKiBAbWV0aG9kIGdldERlc3RpbmF0aW9uXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBzb3VyY2UgVGhlIGZsb3cgdG8gcmV0cmlldmUuXHJcbiAqIEByZXR1cm4ge1BvcnR9IFRoZSBkZXN0aW5hdGlvbiBwb3J0LlxyXG4gKi9cclxuSHViLnByb3RvdHlwZS5nZXREZXN0aW5hdGlvbiA9IGZ1bmN0aW9uIChzb3VyY2UpIHtcclxuICB2YXIgZGVzdGluYXRpb24gPSB0aGlzLnJvdXRlc1tzb3VyY2VdO1xyXG4gIGlmICghZGVzdGluYXRpb24pIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuICByZXR1cm4gdGhpcy5hcHBzW2Rlc3RpbmF0aW9uLmFwcF07XHJcbn07XHJcblxyXG4vKipcclxuICogR2V0IHRoZSBsb2NhbCBzb3VyY2UgcG9ydCBvZiBhIGZsb3cuXHJcbiAqIEBtZXRob2QgZ2V0U291cmNlXHJcbiAqIEBwYXJhbSB7UG9ydH0gc291cmNlIFRoZSBmbG93IGlkZW50aWZpZXIgdG8gcmV0cmlldmUuXHJcbiAqIEByZXR1cm4ge1BvcnR9IFRoZSBzb3VyY2UgcG9ydC5cclxuICovXHJcbkh1Yi5wcm90b3R5cGUuZ2V0U291cmNlID0gZnVuY3Rpb24gKHNvdXJjZSkge1xyXG4gIGlmICghc291cmNlKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGlmICghdGhpcy5hcHBzW3NvdXJjZS5pZF0pIHtcclxuICAgIHRoaXMuZGVidWcud2FybihcIk5vIHJlZ2lzdGVyZWQgc291cmNlICdcIiArIHNvdXJjZS5pZCArIFwiJ1wiKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgcmV0dXJuIHRoaXMuYXBwc1tzb3VyY2UuaWRdO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlZ2lzdGVyIGEgZGVzdGluYXRpb24gZm9yIG1lc3NhZ2VzIHdpdGggdGhpcyBodWIuXHJcbiAqIEBtZXRob2QgcmVnaXN0ZXJcclxuICogQHBhcmFtIHtQb3J0fSBhcHAgVGhlIFBvcnQgdG8gcmVnaXN0ZXIuXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2ZvcmNlXSBXaGV0aGVyIHRvIG92ZXJyaWRlIGFuIGV4aXN0aW5nIHBvcnQuXHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59IFdoZXRoZXIgdGhlIGFwcCB3YXMgcmVnaXN0ZXJlZC5cclxuICovXHJcbkh1Yi5wcm90b3R5cGUucmVnaXN0ZXIgPSBmdW5jdGlvbiAoYXBwLCBmb3JjZSkge1xyXG4gIGlmICghdGhpcy5hcHBzW2FwcC5pZF0gfHwgZm9yY2UpIHtcclxuICAgIHRoaXMuYXBwc1thcHAuaWRdID0gYXBwO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogRGVyZWdpc3RlciBhIGRlc3RpbmF0aW9uIGZvciBtZXNzYWdlcyB3aXRoIHRoZSBodWIuXHJcbiAqIE5vdGU6IGRvZXMgbm90IHJlbW92ZSBhc3NvY2lhdGVkIHJvdXRlcy4gQXMgc3VjaCwgZGVyZWdpc3RlcmluZyB3aWxsXHJcbiAqIHByZXZlbnQgdGhlIGluc3RhbGxhdGlvbiBvZiBuZXcgcm91dGVzLCBidXQgd2lsbCBub3QgZGlzdHJ1cHQgZXhpc3RpbmdcclxuICogaHViIHJvdXRlcy5cclxuICogQG1ldGhvZCBkZXJlZ2lzdGVyXHJcbiAqIEBwYXJhbSB7UG9ydH0gYXBwIFRoZSBQb3J0IHRvIGRlcmVnaXN0ZXJcclxuICogQHJldHVybiB7Qm9vbGVhbn0gV2hldGhlciB0aGUgYXBwIHdhcyBkZXJlZ2lzdGVyZWQuXHJcbiAqL1xyXG5IdWIucHJvdG90eXBlLmRlcmVnaXN0ZXIgPSBmdW5jdGlvbiAoYXBwKSB7XHJcbiAgaWYgKCF0aGlzLmFwcHNbYXBwLmlkXSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBkZWxldGUgdGhpcy5hcHBzW2FwcC5pZF07XHJcbiAgcmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG4vKipcclxuICogSW5zdGFsbCBhIG5ldyByb3V0ZSBpbiB0aGUgaHViLlxyXG4gKiBAbWV0aG9kIGluc3RhbGxcclxuICogQHBhcmFtIHtQb3J0fSBzb3VyY2UgVGhlIHNvdXJjZSBvZiB0aGUgcm91dGUuXHJcbiAqIEBwYXJhbSB7UG9ydH0gZGVzdGluYXRpb24gVGhlIGRlc3RpbmF0aW9uIG9mIHRoZSByb3V0ZS5cclxuICogQHBhcmFtIHtTdHJpbmd9IGZsb3cgVGhlIGZsb3cgd2hlcmUgdGhlIGRlc3RpbmF0aW9uIHdpbGwgcmVjZWl2ZSBtZXNzYWdlcy5cclxuICogQHBhcmFtIHtCb29sZWFufSBxdWlldCBXaGV0aGVyIG1lc3NhZ2VzIG9uIHRoaXMgcm91dGUgc2hvdWxkIGJlIHN1cHByZXNzZWQuXHJcbiAqIEByZXR1cm4ge1N0cmluZ30gQSByb3V0aW5nIHNvdXJjZSBpZGVudGlmaWVyIGZvciBzZW5kaW5nIG1lc3NhZ2VzLlxyXG4gKi9cclxuSHViLnByb3RvdHlwZS5pbnN0YWxsID0gZnVuY3Rpb24gKHNvdXJjZSwgZGVzdGluYXRpb24sIGZsb3csIHF1aWV0KSB7XHJcbiAgc291cmNlID0gdGhpcy5nZXRTb3VyY2Uoc291cmNlKTtcclxuICBpZiAoIXNvdXJjZSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZiAoIWRlc3RpbmF0aW9uKSB7XHJcbiAgICB0aGlzLmRlYnVnLndhcm4oXCJVbndpbGxpbmcgdG8gZ2VuZXJhdGUgYmxhY2tob2xlIGZsb3cgZnJvbSBcIiArIHNvdXJjZS5pZCk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICB2YXIgcm91dGUgPSB0aGlzLmdlbmVyYXRlUm91dGUoKTtcclxuICB0aGlzLnJvdXRlc1tyb3V0ZV0gPSB7XHJcbiAgICBhcHA6IGRlc3RpbmF0aW9uLFxyXG4gICAgZmxvdzogZmxvdyxcclxuICAgIHNvdXJjZTogc291cmNlLmlkLFxyXG4gICAgcXVpZXQ6IHF1aWV0XHJcbiAgfTtcclxuICBpZiAodHlwZW9mIHNvdXJjZS5vbiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgc291cmNlLm9uKHJvdXRlLCB0aGlzLm9uTWVzc2FnZS5iaW5kKHRoaXMsIHJvdXRlKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcm91dGU7XHJcbn07XHJcblxyXG4vKipcclxuICogVW5pbnN0YWxsIGEgaHViIHJvdXRlLlxyXG4gKiBAbWV0aG9kIHVuaW5zdGFsbFxyXG4gKiBAcGFyYW0ge1BvcnR9IHNvdXJjZSBUaGUgc291cmNlIG9mIHRoZSByb3V0ZS5cclxuICogQHBhcmFtIHtTdHJpbmd9IGZsb3cgVGhlIHJvdXRlIHRvIHVuaW5zdGFsbC5cclxuICogQHJldHVybiB7Qm9vbGVhbn0gV2hldGhlciB0aGUgcm91dGUgd2FzIGFibGUgdG8gYmUgdW5pbnN0YWxsZWQuXHJcbiAqL1xyXG5IdWIucHJvdG90eXBlLnVuaW5zdGFsbCA9IGZ1bmN0aW9uIChzb3VyY2UsIGZsb3cpIHtcclxuICBzb3VyY2UgPSB0aGlzLmdldFNvdXJjZShzb3VyY2UpO1xyXG4gIGlmICghc291cmNlKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICB2YXIgcm91dGUgPSB0aGlzLnJvdXRlc1tmbG93XTtcclxuICBpZiAoIXJvdXRlKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSBlbHNlIGlmIChyb3V0ZS5zb3VyY2UgIT09IHNvdXJjZS5pZCkge1xyXG4gICAgdGhpcy5kZWJ1Zy53YXJuKFwiRmxvdyBcIiArIGZsb3cgKyBcIiBkb2VzIG5vdCBiZWxvbmcgdG8gcG9ydCBcIiArIHNvdXJjZS5pZCk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBkZWxldGUgdGhpcy5yb3V0ZXNbZmxvd107XHJcbiAgaWYgKHR5cGVvZiBzb3VyY2Uub2ZmID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICBzb3VyY2Uub2ZmKHJvdXRlKTtcclxuICB9XHJcbiAgcmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG4vKipcclxuICogUmVtb3ZlIGFsbCBsaXN0ZW5lcnMgYW5kIG5vdGlmeSBhbGwgY29ubmVjdGVkIGRlc3RpbmF0aW9ucyBvZiB0aGVpciByZW1vdmFsLlxyXG4gKiBAbWV0aG9kIHRlYXJkb3duXHJcbiAqL1xyXG5IdWIucHJvdG90eXBlLnRlYXJkb3duID0gZnVuY3Rpb24gKCkge1xyXG4gIHV0aWwuZWFjaFByb3AodGhpcy5hcHBzLCBmdW5jdGlvbiAoc291cmNlKSB7XHJcbiAgICBpZiAodHlwZW9mIHNvdXJjZS5vZmYgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgc291cmNlLm9mZigpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHRoaXMuYXBwcyA9IHt9O1xyXG4gIHRoaXMucm91dGVzID0ge307XHJcbn07XHJcblxyXG4vKipcclxuICogR2VuZXJhdGUgYSB1bmlxdWUgcm91dGluZyBpZGVudGlmaWVyLlxyXG4gKiBAbWV0aG9kIGdlbmVyYXRlUm91dGVcclxuICogQHJldHVybiB7U3RyaW5nfSBhIHJvdXRpbmcgc291cmNlIGlkZW50aWZpZXIuXHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5IdWIucHJvdG90eXBlLmdlbmVyYXRlUm91dGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIHV0aWwuZ2V0SWQoKTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSHViO1xyXG4iLCIvKmpzbGludCBpbmRlbnQ6Miwgbm9kZTp0cnVlLCBzbG9wcHk6dHJ1ZSAqL1xudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuLyoqXG4gKiBBIGxpbmsgY29ubmVjdHMgdHdvIGZyZWVkb20gaHVicy4gVGhpcyBpcyBhbiBhYnN0cmFjdCBjbGFzc1xuICogcHJvdmlkaW5nIGNvbW1vbiBmdW5jdGlvbmFsaXR5IG9mIHRyYW5zbGF0aW5nIGNvbnRyb2wgY2hhbm5lbHMsXG4gKiBhbmQgaW50ZWdyYXRpbmcgY29uZmlnIGluZm9ybWF0aW9uLlxuICogQGNsYXNzIExpbmtcbiAqIEBpbXBsZW1lbnRzIFBvcnRcbiAqIEBjb25zdHJ1Y3RvclxuICovXG52YXIgTGluayA9IGZ1bmN0aW9uIChuYW1lLCByZXNvdXJjZSkge1xuICB0aGlzLmlkID0gJ0xpbmsnICsgTWF0aC5yYW5kb20oKTtcbiAgdGhpcy5uYW1lID0gbmFtZTtcbiAgdGhpcy5yZXNvdXJjZSA9IHJlc291cmNlO1xuICB0aGlzLmNvbmZpZyA9IHt9O1xuICB0aGlzLnNyYyA9IG51bGw7XG5cbiAgdXRpbC5oYW5kbGVFdmVudHModGhpcyk7XG4gIHV0aWwubWl4aW4odGhpcywgTGluay5wcm90b3R5cGUpO1xufTtcblxuLyoqXG4gKiBSZWNlaXZlIG1lc3NhZ2VzIGZyb20gdGhlIGh1YiB0byB0aGlzIHBvcnQuXG4gKiBNYW5hZ2VzIHN0YXJ0dXAsIGFuZCBwYXNzZXMgb3RoZXJzIHRvICdkZWxpdmVyTWVzc2FnZScgaW1wbGVtZW50ZWRcbiAqIGluIGRlcml2ZWQgY2xhc3Nlcy5cbiAqIEBtZXRob2Qgb25NZXNzYWdlXG4gKiBAcGFyYW0ge1N0cmluZ30gZmxvdyB0aGUgY2hhbm5lbC9mbG93IG9mIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2UgVGhlIE1lc3NhZ2UuXG4gKi9cbkxpbmsucHJvdG90eXBlLm9uTWVzc2FnZSA9IGZ1bmN0aW9uIChmbG93LCBtZXNzYWdlKSB7XG4gIGlmIChmbG93ID09PSAnY29udHJvbCcgJiYgIXRoaXMuY29udHJvbENoYW5uZWwpIHtcbiAgICBpZiAoIXRoaXMuY29udHJvbENoYW5uZWwgJiYgbWVzc2FnZS5jaGFubmVsKSB7XG4gICAgICB0aGlzLmNvbnRyb2xDaGFubmVsID0gbWVzc2FnZS5jaGFubmVsO1xuICAgICAgdXRpbC5taXhpbih0aGlzLmNvbmZpZywgbWVzc2FnZS5jb25maWcpO1xuICAgICAgdGhpcy5zdGFydCgpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aGlzLmRlbGl2ZXJNZXNzYWdlKGZsb3csIG1lc3NhZ2UpO1xuICB9XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIGEgaGFuZGxlciB0byBhbGVydCBvZiBlcnJvcnMgb24gdGhpcyBwb3J0LlxuICogQG1ldGhvZCBhZGRFcnJvckhhbmRsZXJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXIgTWV0aG9kIHRvIGNhbGwgd2l0aCBlcnJvcnMuXG4gKi9cbkxpbmsucHJvdG90eXBlLmFkZEVycm9ySGFuZGxlciA9IGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gIHRoaXMub25FcnJvciA9IGhhbmRsZXI7XG59O1xuXG4vKipcbiAqIFJlcG9ydCBhbiBlcnJvciBvbiB0aGlzIGxpbmsuXG4gKiBAbWV0aG9kIG9uZXJyb3JcbiAqIEBwYXJhbSB7RXJyb3J9IGVyciBUaGUgZXJyb3IgdGhhdCBvY2N1cnJlZC5cbiAqL1xuTGluay5wcm90b3R5cGUub25FcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgLy9GaWxsZWQgaW4gYnkgYWRkRXJyb3JIYW5kbGVyXG59O1xuXG4vKipcbiAqIEVtaXQgbWVzc2FnZXMgdG8gdGhlIHRoZSBodWIsIG1hcHBpbmcgY29udHJvbCBjaGFubmVscy5cbiAqIEBtZXRob2QgZW1pdE1lc3NhZ2VcbiAqIEBwYXJhbSB7U3RyaW5nfSBmbG93IHRoZSBmbG93IHRvIGVtaXQgdGhlIG1lc3NhZ2Ugb24uXG4gKiBAcGFyYW0ge09iamVjdH0gbWVzc2dhZSBUaGUgbWVzc2FnZSB0byBlbWl0LlxuICovXG5MaW5rLnByb3RvdHlwZS5lbWl0TWVzc2FnZSA9IGZ1bmN0aW9uIChmbG93LCBtZXNzYWdlKSB7XG4gIGlmIChmbG93ID09PSAnY29udHJvbCcgJiYgdGhpcy5jb250cm9sQ2hhbm5lbCkge1xuICAgIGZsb3cgPSB0aGlzLmNvbnRyb2xDaGFubmVsO1xuICB9XG4gIHRoaXMuZW1pdChmbG93LCBtZXNzYWdlKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTGluaztcbiIsIi8qZ2xvYmFscyBXb3JrZXIgKi9cbi8qanNsaW50IGluZGVudDoyLCB3aGl0ZTp0cnVlLCBub2RlOnRydWUsIHNsb3BweTp0cnVlLCBicm93c2VyOnRydWUgKi9cbnZhciBMaW5rID0gcmVxdWlyZSgnLi4vbGluaycpO1xuXG4vKipcbiAqIEEgcG9ydCBwcm92aWRpbmcgbWVzc2FnZSB0cmFuc3BvcnQgYmV0d2VlbiB0d28gZnJlZWRvbSBjb250ZXh0cyB2aWEgV29ya2VyLlxuICogQGNsYXNzIFdvcmtlclxuICogQGV4dGVuZHMgTGlua1xuICogQHVzZXMgaGFuZGxlRXZlbnRzXG4gKiBAY29uc3RydWN0b3JcbiAqL1xudmFyIFdvcmtlckxpbmsgPSBmdW5jdGlvbihpZCwgcmVzb3VyY2UpIHtcbiAgTGluay5jYWxsKHRoaXMsIGlkLCByZXNvdXJjZSk7XG4gIGlmIChpZCkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgfVxufTtcblxuLyoqXG4gKiBTdGFydCB0aGlzIHBvcnQgYnkgbGlzdGVuaW5nIG9yIGNyZWF0aW5nIGEgd29ya2VyLlxuICogQG1ldGhvZCBzdGFydFxuICogQHByaXZhdGVcbiAqL1xuV29ya2VyTGluay5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuY29uZmlnLm1vZHVsZUNvbnRleHQpIHtcbiAgICB0aGlzLnNldHVwTGlzdGVuZXIoKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnNldHVwV29ya2VyKCk7XG4gIH1cbn07XG5cbi8qKlxuICogU3RvcCB0aGlzIHBvcnQgYnkgZGVzdHJveWluZyB0aGUgd29ya2VyLlxuICogQG1ldGhvZCBzdG9wXG4gKiBAcHJpdmF0ZVxuICovXG5Xb3JrZXJMaW5rLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oKSB7XG4gIC8vIEZ1bmN0aW9uIGlzIGRldGVybWluZWQgYnkgc2V0dXBMaXN0ZW5lciBvciBzZXR1cEZyYW1lIGFzIGFwcHJvcHJpYXRlLlxufTtcblxuLyoqXG4gKiBHZXQgdGhlIHRleHR1YWwgZGVzY3JpcHRpb24gb2YgdGhpcyBwb3J0LlxuICogQG1ldGhvZCB0b1N0cmluZ1xuICogQHJldHVybiB7U3RyaW5nfSB0aGUgZGVzY3JpcHRpb24gb2YgdGhpcyBwb3J0LlxuICovXG5Xb3JrZXJMaW5rLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gXCJbV29ya2VyIFwiICsgdGhpcy5pZCArIFwiXVwiO1xufTtcblxuLyoqXG4gKiBTZXQgdXAgYSBnbG9iYWwgbGlzdGVuZXIgdG8gaGFuZGxlIGluY29taW5nIG1lc3NhZ2VzIHRvIHRoaXNcbiAqIGZyZWVkb20uanMgY29udGV4dC5cbiAqIEBtZXRob2Qgc2V0dXBMaXN0ZW5lclxuICovXG5Xb3JrZXJMaW5rLnByb3RvdHlwZS5zZXR1cExpc3RlbmVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBvbk1zZyA9IGZ1bmN0aW9uKG1zZykge1xuICAgIHRoaXMuZW1pdE1lc3NhZ2UobXNnLmRhdGEuZmxvdywgbXNnLmRhdGEubWVzc2FnZSk7XG4gIH0uYmluZCh0aGlzKTtcbiAgdGhpcy5vYmogPSB0aGlzLmNvbmZpZy5nbG9iYWw7XG4gIHRoaXMub2JqLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1zZywgdHJ1ZSk7XG4gIHRoaXMuc3RvcCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMub2JqLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1zZywgdHJ1ZSk7XG4gICAgZGVsZXRlIHRoaXMub2JqO1xuICB9O1xuICB0aGlzLmVtaXQoJ3N0YXJ0ZWQnKTtcbiAgdGhpcy5vYmoucG9zdE1lc3NhZ2UoXCJSZWFkeSBGb3IgTWVzc2FnZXNcIik7XG59O1xuXG4vKipcbiAqIFNldCB1cCBhIHdvcmtlciB3aXRoIGFuIGlzb2xhdGVkIGZyZWVkb20uanMgY29udGV4dCBpbnNpZGUuXG4gKiBAbWV0aG9kIHNldHVwV29ya2VyXG4gKi9cbldvcmtlckxpbmsucHJvdG90eXBlLnNldHVwV29ya2VyID0gZnVuY3Rpb24oKSB7XG4gIHZhciB3b3JrZXIsXG4gICAgYmxvYixcbiAgICBzZWxmID0gdGhpcztcbiAgd29ya2VyID0gbmV3IFdvcmtlcih0aGlzLmNvbmZpZy5zb3VyY2UgKyAnIycgKyB0aGlzLmlkKTtcblxuICB3b3JrZXIuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBmdW5jdGlvbihlcnIpIHtcbiAgICB0aGlzLm9uRXJyb3IoZXJyKTtcbiAgfS5iaW5kKHRoaXMpLCB0cnVlKTtcbiAgd29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbih3b3JrZXIsIG1zZykge1xuICAgIGlmICghdGhpcy5vYmopIHtcbiAgICAgIHRoaXMub2JqID0gd29ya2VyO1xuICAgICAgdGhpcy5lbWl0KCdzdGFydGVkJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZW1pdE1lc3NhZ2UobXNnLmRhdGEuZmxvdywgbXNnLmRhdGEubWVzc2FnZSk7XG4gIH0uYmluZCh0aGlzLCB3b3JrZXIpLCB0cnVlKTtcbiAgdGhpcy5zdG9wID0gZnVuY3Rpb24oKSB7XG4gICAgd29ya2VyLnRlcm1pbmF0ZSgpO1xuICAgIGlmICh0aGlzLm9iaikge1xuICAgICAgZGVsZXRlIHRoaXMub2JqO1xuICAgIH1cbiAgfTtcbn07XG5cbi8qKlxuICogUmVjZWl2ZSBtZXNzYWdlcyBmcm9tIHRoZSBodWIgdG8gdGhpcyBwb3J0LlxuICogUmVjZWl2ZWQgbWVzc2FnZXMgd2lsbCBiZSBlbWl0dGVkIGZyb20gdGhlIG90aGVyIHNpZGUgb2YgdGhlIHBvcnQuXG4gKiBAbWV0aG9kIGRlbGl2ZXJNZXNzYWdlXG4gKiBAcGFyYW0ge1N0cmluZ30gZmxvdyB0aGUgY2hhbm5lbC9mbG93IG9mIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2UgVGhlIE1lc3NhZ2UuXG4gKi9cbldvcmtlckxpbmsucHJvdG90eXBlLmRlbGl2ZXJNZXNzYWdlID0gZnVuY3Rpb24oZmxvdywgbWVzc2FnZSkge1xuICBpZiAoZmxvdyA9PT0gJ2NvbnRyb2wnICYmIG1lc3NhZ2UudHlwZSA9PT0gJ2Nsb3NlJyAmJlxuICAgICAgbWVzc2FnZS5jaGFubmVsID09PSAnY29udHJvbCcpIHtcbiAgICB0aGlzLnN0b3AoKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAodGhpcy5vYmopIHtcbiAgICAgIHRoaXMub2JqLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgZmxvdzogZmxvdyxcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25jZSgnc3RhcnRlZCcsIHRoaXMub25NZXNzYWdlLmJpbmQodGhpcywgZmxvdywgbWVzc2FnZSkpO1xuICAgIH1cbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBXb3JrZXJMaW5rO1xuXG4iLCIvKmpzbGludCBpbmRlbnQ6Mixub2RlOnRydWUsc2xvcHB5OnRydWUgKi9cbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG52YXIgTW9kdWxlSW50ZXJuYWwgPSByZXF1aXJlKCcuL21vZHVsZWludGVybmFsJyk7XG5cbi8qKlxuICogQSBmcmVlZG9tIHBvcnQgd2hpY2ggbWFuYWdlcyB0aGUgY29udHJvbCBwbGFuZSBvZiBvZiBjaGFuZ2luZyBodWIgcm91dGVzLlxuICogQGNsYXNzIE1hbmFnZXJcbiAqIEBpbXBsZW1lbnRzIFBvcnRcbiAqIEBwYXJhbSB7SHVifSBodWIgVGhlIHJvdXRpbmcgaHViIHRvIGNvbnRyb2wuXG4gKiBAcGFyYW0ge1Jlc291cmNlfSByZXNvdXJjZSBUaGUgcmVzb3VyY2UgbWFuYWdlciBmb3IgdGhlIHJ1bnRpbWUuXG4gKiBAcGFyYW0ge0FwaX0gYXBpIFRoZSBBUEkgbWFuYWdlciBmb3IgdGhlIHJ1bnRpbWUuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xudmFyIE1hbmFnZXIgPSBmdW5jdGlvbiAoaHViLCByZXNvdXJjZSwgYXBpKSB7XG4gIHRoaXMuaWQgPSAnY29udHJvbCc7XG4gIHRoaXMuY29uZmlnID0ge307XG4gIHRoaXMuY29udHJvbEZsb3dzID0ge307XG4gIHRoaXMuZGF0YUZsb3dzID0ge307XG4gIHRoaXMuZGF0YUZsb3dzW3RoaXMuaWRdID0gW107XG4gIHRoaXMucmV2ZXJzZUZsb3dNYXAgPSB7fTtcblxuICB0aGlzLmRlYnVnID0gaHViLmRlYnVnO1xuICB0aGlzLmh1YiA9IGh1YjtcbiAgdGhpcy5yZXNvdXJjZSA9IHJlc291cmNlO1xuICB0aGlzLmFwaSA9IGFwaTtcblxuICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcbiAgdGhpcy50b0RlbGVnYXRlID0ge307XG4gIFxuICB0aGlzLmh1Yi5vbignY29uZmlnJywgZnVuY3Rpb24gKGNvbmZpZykge1xuICAgIHV0aWwubWl4aW4odGhpcy5jb25maWcsIGNvbmZpZyk7XG4gICAgdGhpcy5lbWl0KCdjb25maWcnKTtcbiAgfS5iaW5kKHRoaXMpKTtcbiAgXG4gIHV0aWwuaGFuZGxlRXZlbnRzKHRoaXMpO1xuICB0aGlzLmh1Yi5yZWdpc3Rlcih0aGlzKTtcbn07XG5cbi8qKlxuICogUHJvdmlkZSBhIHRleHR1YWwgZGVzY3JpcHRpb24gb2YgdGhpcyBwb3J0LlxuICogQG1ldGhvZCB0b1N0cmluZ1xuICogQHJldHVybiB7U3RyaW5nfSB0aGUgZGVzY3JpcHRpb24gb2YgdGhpcyBwb3J0LlxuICovXG5NYW5hZ2VyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFwiW0xvY2FsIENvbnRyb2xsZXJdXCI7XG59O1xuXG4vKipcbiAqIFByb2Nlc3MgbWVzc2FnZXMgc2VudCB0byB0aGlzIHBvcnQuXG4gKiBUaGUgbWFuYWdlciwgb3IgJ2NvbnRyb2wnIGRlc3RpbmF0aW9uIGhhbmRsZXMgc2V2ZXJhbCB0eXBlcyBvZiBtZXNzYWdlcyxcbiAqIGlkZW50aWZpZWQgYnkgdGhlIHJlcXVlc3QgcHJvcGVydHkuICBUaGUgYWN0aW9ucyBhcmU6XG4gKiAxLiBkZWJ1Zy4gUHJpbnRzIHRoZSBtZXNzYWdlIHRvIHRoZSBjb25zb2xlLlxuICogMi4gbGluay4gQ3JlYXRlcyBhIGxpbmsgYmV0d2VlbiB0aGUgc291cmNlIGFuZCBhIHByb3ZpZGVkIGRlc3RpbmF0aW9uIHBvcnQuXG4gKiAzLiBlbnZpcm9ubWVudC4gSW5zdGFudGlhdGUgYSBtb2R1bGUgZW52aXJvbm1lbnQgZGVmaW5lZCBpbiBNb2R1bGVJbnRlcm5hbC5cbiAqIDQuIGRlbGVnYXRlLiBSb3V0ZXMgYSBkZWZpbmVkIHNldCBvZiBjb250cm9sIG1lc3NhZ2VzIHRvIGFub3RoZXIgbG9jYXRpb24uXG4gKiA1LiByZXNvdXJjZS4gUmVnaXN0ZXJzIHRoZSBzb3VyY2UgYXMgYSByZXNvdXJjZSByZXNvbHZlci5cbiAqIDYuIGNvcmUuIEdlbmVyYXRlcyBhIGNvcmUgcHJvdmlkZXIgZm9yIHRoZSByZXF1ZXN0ZXIuXG4gKiA3LiBjbG9zZS4gVGVhcnMgZG93biByb3V0ZXMgaW52b2xpbmcgdGhlIHJlcXVlc3RpbmcgcG9ydC5cbiAqIDguIHVubGluay4gVGVhcnMgZG93biBhIHJvdXRlIGZyb20gdGhlIHJlcXVlc3RpbmcgcG9ydC5cbiAqIEBtZXRob2Qgb25NZXNzYWdlXG4gKiBAcGFyYW0ge1N0cmluZ30gZmxvdyBUaGUgc291cmNlIGlkZW50aWZpZXIgb2YgdGhlIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gbWVzc2FnZSBUaGUgcmVjZWl2ZWQgbWVzc2FnZS5cbiAqL1xuTWFuYWdlci5wcm90b3R5cGUub25NZXNzYWdlID0gZnVuY3Rpb24gKGZsb3csIG1lc3NhZ2UpIHtcbiAgdmFyIHJldmVyc2VGbG93ID0gdGhpcy5jb250cm9sRmxvd3NbZmxvd10sIG9yaWdpbjtcbiAgaWYgKCFyZXZlcnNlRmxvdykge1xuICAgIHRoaXMuZGVidWcud2FybihcIlVua25vd24gbWVzc2FnZSBzb3VyY2U6IFwiICsgZmxvdyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIG9yaWdpbiA9IHRoaXMuaHViLmdldERlc3RpbmF0aW9uKHJldmVyc2VGbG93KTtcblxuICBpZiAodGhpcy5kZWxlZ2F0ZSAmJiByZXZlcnNlRmxvdyAhPT0gdGhpcy5kZWxlZ2F0ZSAmJlxuICAgICAgdGhpcy50b0RlbGVnYXRlW2Zsb3ddKSB7XG4gICAgLy8gU2hpcCBvZmYgdG8gdGhlIGRlbGVnZWVcbiAgICB0aGlzLmVtaXQodGhpcy5kZWxlZ2F0ZSwge1xuICAgICAgdHlwZTogJ0RlbGVnYXRpb24nLFxuICAgICAgcmVxdWVzdDogJ2hhbmRsZScsXG4gICAgICBxdWlldDogdHJ1ZSxcbiAgICAgIGZsb3c6IGZsb3csXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKG1lc3NhZ2UucmVxdWVzdCA9PT0gJ2RlYnVnJykge1xuICAgIHRoaXMuZGVidWcucHJpbnQobWVzc2FnZSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKG1lc3NhZ2UucmVxdWVzdCA9PT0gJ2xpbmsnKSB7XG4gICAgdGhpcy5jcmVhdGVMaW5rKG9yaWdpbiwgbWVzc2FnZS5uYW1lLCBtZXNzYWdlLnRvLCBtZXNzYWdlLm92ZXJyaWRlRGVzdCk7XG4gIH0gZWxzZSBpZiAobWVzc2FnZS5yZXF1ZXN0ID09PSAnZW52aXJvbm1lbnQnKSB7XG4gICAgdGhpcy5jcmVhdGVMaW5rKG9yaWdpbiwgbWVzc2FnZS5uYW1lLCBuZXcgTW9kdWxlSW50ZXJuYWwodGhpcykpO1xuICB9IGVsc2UgaWYgKG1lc3NhZ2UucmVxdWVzdCA9PT0gJ2RlbGVnYXRlJykge1xuICAgIC8vIEluaXRhdGUgRGVsZWdhdGlvbi5cbiAgICBpZiAodGhpcy5kZWxlZ2F0ZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHJldmVyc2VGbG93O1xuICAgIH1cbiAgICB0aGlzLnRvRGVsZWdhdGVbbWVzc2FnZS5mbG93XSA9IHRydWU7XG4gICAgdGhpcy5lbWl0KCdkZWxlZ2F0ZScpO1xuICB9IGVsc2UgaWYgKG1lc3NhZ2UucmVxdWVzdCA9PT0gJ3Jlc291cmNlJykge1xuICAgIHRoaXMucmVzb3VyY2UuYWRkUmVzb2x2ZXIobWVzc2FnZS5hcmdzWzBdKTtcbiAgICB0aGlzLnJlc291cmNlLmFkZFJldHJpZXZlcihtZXNzYWdlLnNlcnZpY2UsIG1lc3NhZ2UuYXJnc1sxXSk7XG4gIH0gZWxzZSBpZiAobWVzc2FnZS5yZXF1ZXN0ID09PSAnY29yZScpIHtcbiAgICBpZiAodGhpcy5jb3JlICYmIHJldmVyc2VGbG93ID09PSB0aGlzLmRlbGVnYXRlKSB7XG4gICAgICAobmV3IHRoaXMuY29yZSgpKS5vbk1lc3NhZ2Uob3JpZ2luLCBtZXNzYWdlLm1lc3NhZ2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmdldENvcmUoZnVuY3Rpb24gKHRvLCBjb3JlKSB7XG4gICAgICB0aGlzLmh1Yi5vbk1lc3NhZ2UodG8sIHtcbiAgICAgICAgdHlwZTogJ2NvcmUnLFxuICAgICAgICBjb3JlOiBjb3JlXG4gICAgICB9KTtcbiAgICB9LmJpbmQodGhpcywgcmV2ZXJzZUZsb3cpKTtcbiAgfSBlbHNlIGlmIChtZXNzYWdlLnJlcXVlc3QgPT09ICdjbG9zZScpIHtcbiAgICB0aGlzLmRlc3Ryb3kob3JpZ2luKTtcbiAgfSBlbHNlIGlmIChtZXNzYWdlLnJlcXVlc3QgPT09ICd1bmxpbmsnKSB7XG4gICAgdGhpcy5yZW1vdmVMaW5rKG9yaWdpbiwgbWVzc2FnZS50byk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5kZWJ1Zy53YXJuKFwiVW5rbm93biBjb250cm9sIHJlcXVlc3Q6IFwiICsgbWVzc2FnZS5yZXF1ZXN0KTtcbiAgICB0aGlzLmRlYnVnLmxvZyhKU09OLnN0cmluZ2lmeShtZXNzYWdlKSk7XG4gICAgcmV0dXJuO1xuICB9XG59O1xuXG4vKipcbiAqIEdldCB0aGUgcG9ydCBtZXNzYWdlcyB3aWxsIGJlIHJvdXRlZCB0byBnaXZlbiBpdHMgaWQuXG4gKiBAbWV0aG9kIGdldFBvcnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwb3J0SWQgVGhlIElEIG9mIHRoZSBwb3J0LlxuICogQHJldHVybnMge2Zkb20uUG9ydH0gVGhlIHBvcnQgd2l0aCB0aGF0IElELlxuICovXG5NYW5hZ2VyLnByb3RvdHlwZS5nZXRQb3J0ID0gZnVuY3Rpb24gKHBvcnRJZCkge1xuICByZXR1cm4gdGhpcy5odWIuZ2V0RGVzdGluYXRpb24odGhpcy5jb250cm9sRmxvd3NbcG9ydElkXSk7XG59O1xuXG4vKipcbiAqIFNldCB1cCBhIHBvcnQgd2l0aCB0aGUgaHViLlxuICogQG1ldGhvZCBzZXR1cFxuICogQHBhcmFtIHtQb3J0fSBwb3J0IFRoZSBwb3J0IHRvIHJlZ2lzdGVyLlxuICovXG5NYW5hZ2VyLnByb3RvdHlwZS5zZXR1cCA9IGZ1bmN0aW9uIChwb3J0KSB7XG4gIGlmICghcG9ydC5pZCkge1xuICAgIHRoaXMuZGVidWcud2FybihcIlJlZnVzaW5nIHRvIHNldHVwIHVuaWRlbnRpZmllZCBwb3J0IFwiKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodGhpcy5jb250cm9sRmxvd3NbcG9ydC5pZF0pIHtcbiAgICB0aGlzLmRlYnVnLndhcm4oXCJSZWZ1c2luZyB0byByZS1pbml0aWFsaXplIHBvcnQgXCIgKyBwb3J0LmlkKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoIXRoaXMuY29uZmlnLmdsb2JhbCkge1xuICAgIHRoaXMub25jZSgnY29uZmlnJywgdGhpcy5zZXR1cC5iaW5kKHRoaXMsIHBvcnQpKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLmh1Yi5yZWdpc3Rlcihwb3J0KTtcbiAgdmFyIGZsb3cgPSB0aGlzLmh1Yi5pbnN0YWxsKHRoaXMsIHBvcnQuaWQsIFwiY29udHJvbFwiKSxcbiAgICByZXZlcnNlID0gdGhpcy5odWIuaW5zdGFsbChwb3J0LCB0aGlzLmlkLCBwb3J0LmlkKTtcbiAgdGhpcy5jb250cm9sRmxvd3NbcG9ydC5pZF0gPSBmbG93O1xuICB0aGlzLmRhdGFGbG93c1twb3J0LmlkXSA9IFtyZXZlcnNlXTtcbiAgdGhpcy5yZXZlcnNlRmxvd01hcFtmbG93XSA9IHJldmVyc2U7XG4gIHRoaXMucmV2ZXJzZUZsb3dNYXBbcmV2ZXJzZV0gPSBmbG93O1xuXG4gIGlmIChwb3J0LmxpbmVhZ2UpIHtcbiAgICB0aGlzLmVtaXQoJ21vZHVsZUFkZCcsIHtpZDogcG9ydC5pZCwgbGluZWFnZTogcG9ydC5saW5lYWdlfSk7XG4gIH1cbiAgXG4gIHRoaXMuaHViLm9uTWVzc2FnZShmbG93LCB7XG4gICAgdHlwZTogJ3NldHVwJyxcbiAgICBjaGFubmVsOiByZXZlcnNlLFxuICAgIGNvbmZpZzogdGhpcy5jb25maWdcbiAgfSk7XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIFRlYXIgZG93biBhIHBvcnQgb24gdGhlIGh1Yiwgb3IgdGhlIGZ1bGwgbG9jYWwgaHViLlxuICogQG1ldGhvZCBkZXN0cm95XG4gKiBAYXByYW0ge1BvcnQ/fSBwb3J0IFRoZSBwb3J0IHRvIHVucmVnaXN0ZXIuXG4gKi9cbk1hbmFnZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAocG9ydCkge1xuICBpZiAoIXBvcnQpIHtcbiAgICAvLyBUZWFyIGRvd24gZXZlcnl0aGluZyFcbiAgICB1dGlsLmVhY2hQcm9wKHRoaXMuY29udHJvbEZsb3dzLCBmdW5jdGlvbiAoZmxvdykge1xuICAgICAgdGhpcy5odWIub25NZXNzYWdlKGZsb3csIHtcbiAgICAgICAgdHlwZTogJ2Nsb3NlJ1xuICAgICAgfSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmh1Yi50ZWFyZG93bigpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghcG9ydC5pZCkge1xuICAgIHRoaXMuZGVidWcud2FybihcIlVuYWJsZSB0byB0ZWFyIGRvd24gdW5pZGVudGlmaWVkIHBvcnRcIik7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHBvcnQubGluZWFnZSkge1xuICAgIHRoaXMuZW1pdCgnbW9kdWxlUmVtb3ZlJywge2lkOiBwb3J0LmlkLCBsaW5lYWdlOiBwb3J0LmxpbmVhZ2V9KTtcbiAgfVxuXG4gIC8vIFJlbW92ZSB0aGUgcG9ydC5cbiAgZGVsZXRlIHRoaXMuY29udHJvbEZsb3dzW3BvcnQuaWRdO1xuXG4gIC8vIFJlbW92ZSBhc3NvY2lhdGVkIGxpbmtzLlxuICB2YXIgaTtcbiAgZm9yIChpID0gdGhpcy5kYXRhRmxvd3NbcG9ydC5pZF0ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcbiAgICB0aGlzLnJlbW92ZUxpbmsocG9ydCwgdGhpcy5kYXRhRmxvd3NbcG9ydC5pZF1baV0pO1xuICB9XG5cbiAgLy8gUmVtb3ZlIHRoZSBwb3J0LlxuICBkZWxldGUgdGhpcy5kYXRhRmxvd3NbcG9ydC5pZF07XG4gIHRoaXMuaHViLmRlcmVnaXN0ZXIocG9ydCk7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIGxpbmsgYmV0d2VlbiB0d28gcG9ydHMuICBMaW5rcyBhcmUgY3JlYXRlZCBpbiBib3RoIGRpcmVjdGlvbnMsXG4gKiBhbmQgYSBtZXNzYWdlIHdpdGggdGhvc2UgY2FwYWJpbGl0aWVzIGlzIHNlbnQgdG8gdGhlIHNvdXJjZSBwb3J0LlxuICogQG1ldGhvZCBjcmVhdGVMaW5rXG4gKiBAcGFyYW0ge1BvcnR9IHBvcnQgVGhlIHNvdXJjZSBwb3J0LlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIGZsb3cgZm9yIG1lc3NhZ2VzIGZyb20gZGVzdGluYXRpb24gdG8gcG9ydC5cbiAqIEBwYXJhbSB7UG9ydH0gZGVzdGluYXRpb24gVGhlIGRlc3RpbmF0aW9uIHBvcnQuXG4gKiBAcGFyYW0ge1N0cmluZ30gW2Rlc3ROYW1lXSBUaGUgZmxvdyBuYW1lIGZvciBtZXNzYWdlcyB0byB0aGUgZGVzdGluYXRpb24uXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFt0b0Rlc3RdIFRlbGwgdGhlIGRlc3RpbmF0aW9uIGFib3V0IHRoZSBsaW5rLlxuICovXG5NYW5hZ2VyLnByb3RvdHlwZS5jcmVhdGVMaW5rID0gZnVuY3Rpb24gKHBvcnQsIG5hbWUsIGRlc3RpbmF0aW9uLCBkZXN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9EZXN0KSB7XG4gIGlmICghdGhpcy5jb25maWcuZ2xvYmFsKSB7XG4gICAgdGhpcy5vbmNlKCdjb25maWcnLFxuICAgICAgdGhpcy5jcmVhdGVMaW5rLmJpbmQodGhpcywgcG9ydCwgbmFtZSwgZGVzdGluYXRpb24sIGRlc3ROYW1lKSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIFxuICBpZiAoIXRoaXMuY29udHJvbEZsb3dzW3BvcnQuaWRdKSB7XG4gICAgdGhpcy5kZWJ1Zy53YXJuKCdVbndpbGxpbmcgdG8gbGluayBmcm9tIG5vbi1yZWdpc3RlcmVkIHNvdXJjZS4nKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIXRoaXMuY29udHJvbEZsb3dzW2Rlc3RpbmF0aW9uLmlkXSkge1xuICAgIGlmICh0aGlzLnNldHVwKGRlc3RpbmF0aW9uKSA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuZGVidWcud2FybignQ291bGQgbm90IGZpbmQgb3Igc2V0dXAgZGVzdGluYXRpb24uJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIHZhciBxdWlldCA9IGRlc3RpbmF0aW9uLnF1aWV0IHx8IGZhbHNlLFxuICAgIG91dGdvaW5nTmFtZSA9IGRlc3ROYW1lIHx8ICdkZWZhdWx0JyxcbiAgICBvdXRnb2luZyA9IHRoaXMuaHViLmluc3RhbGwocG9ydCwgZGVzdGluYXRpb24uaWQsIG91dGdvaW5nTmFtZSwgcXVpZXQpLFxuICAgIHJldmVyc2U7XG5cbiAgLy8gUmVjb3ZlciB0aGUgcG9ydCBzbyB0aGF0IGxpc3RlbmVycyBhcmUgaW5zdGFsbGVkLlxuICBkZXN0aW5hdGlvbiA9IHRoaXMuaHViLmdldERlc3RpbmF0aW9uKG91dGdvaW5nKTtcbiAgcmV2ZXJzZSA9IHRoaXMuaHViLmluc3RhbGwoZGVzdGluYXRpb24sIHBvcnQuaWQsIG5hbWUsIHF1aWV0KTtcblxuICB0aGlzLnJldmVyc2VGbG93TWFwW291dGdvaW5nXSA9IHJldmVyc2U7XG4gIHRoaXMuZGF0YUZsb3dzW3BvcnQuaWRdLnB1c2gob3V0Z29pbmcpO1xuICB0aGlzLnJldmVyc2VGbG93TWFwW3JldmVyc2VdID0gb3V0Z29pbmc7XG4gIHRoaXMuZGF0YUZsb3dzW2Rlc3RpbmF0aW9uLmlkXS5wdXNoKHJldmVyc2UpO1xuXG4gIGlmICh0b0Rlc3QpIHtcbiAgICB0aGlzLmh1Yi5vbk1lc3NhZ2UodGhpcy5jb250cm9sRmxvd3NbZGVzdGluYXRpb24uaWRdLCB7XG4gICAgICB0eXBlOiAnY3JlYXRlTGluaycsXG4gICAgICBuYW1lOiBvdXRnb2luZ05hbWUsXG4gICAgICBjaGFubmVsOiByZXZlcnNlLFxuICAgICAgcmV2ZXJzZTogb3V0Z29pbmdcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmh1Yi5vbk1lc3NhZ2UodGhpcy5jb250cm9sRmxvd3NbcG9ydC5pZF0sIHtcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICB0eXBlOiAnY3JlYXRlTGluaycsXG4gICAgICBjaGFubmVsOiBvdXRnb2luZyxcbiAgICAgIHJldmVyc2U6IHJldmVyc2VcbiAgICB9KTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZW1vdmUgYSBsaW5rIGJldHdlZW4gdG8gcG9ydHMuIFRoZSByZXZlcnNlIGxpbmsgd2lsbCBhbHNvIGJlIHJlbW92ZWQuXG4gKiBAbWV0aG9kIHJlbW92ZUxpbmtcbiAqIEBwYXJhbSB7UG9ydH0gcG9ydCBUaGUgc291cmNlIHBvcnQuXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgZmxvdyB0byBiZSByZW1vdmVkLlxuICovXG5NYW5hZ2VyLnByb3RvdHlwZS5yZW1vdmVMaW5rID0gZnVuY3Rpb24gKHBvcnQsIG5hbWUpIHtcbiAgdmFyIHJldmVyc2UgPSB0aGlzLmh1Yi5nZXREZXN0aW5hdGlvbihuYW1lKSxcbiAgICByZmxvdyA9IHRoaXMucmV2ZXJzZUZsb3dNYXBbbmFtZV0sXG4gICAgaTtcblxuICBpZiAoIXJldmVyc2UgfHwgIXJmbG93KSB7XG4gICAgdGhpcy5kZWJ1Zy53YXJuKFwiQ291bGQgbm90IGZpbmQgbWV0YWRhdGEgdG8gcmVtb3ZlIGZsb3c6IFwiICsgbmFtZSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHRoaXMuaHViLmdldERlc3RpbmF0aW9uKHJmbG93KS5pZCAhPT0gcG9ydC5pZCkge1xuICAgIHRoaXMuZGVidWcud2FybihcIlNvdXJjZSBwb3J0IGRvZXMgbm90IG93biBmbG93IFwiICsgbmFtZSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gTm90aWZ5IHBvcnRzIHRoYXQgYSBjaGFubmVsIGlzIGNsb3NpbmcuXG4gIGkgPSB0aGlzLmNvbnRyb2xGbG93c1twb3J0LmlkXTtcbiAgaWYgKGkpIHtcbiAgICB0aGlzLmh1Yi5vbk1lc3NhZ2UoaSwge1xuICAgICAgdHlwZTogJ2Nsb3NlJyxcbiAgICAgIGNoYW5uZWw6IG5hbWVcbiAgICB9KTtcbiAgfVxuICBpID0gdGhpcy5jb250cm9sRmxvd3NbcmV2ZXJzZS5pZF07XG4gIGlmIChpKSB7XG4gICAgdGhpcy5odWIub25NZXNzYWdlKGksIHtcbiAgICAgIHR5cGU6ICdjbG9zZScsXG4gICAgICBjaGFubmVsOiByZmxvd1xuICAgIH0pO1xuICB9XG5cbiAgLy8gVW5pbnN0YWxsIHRoZSBjaGFubmVsLlxuICB0aGlzLmh1Yi51bmluc3RhbGwocG9ydCwgbmFtZSk7XG4gIHRoaXMuaHViLnVuaW5zdGFsbChyZXZlcnNlLCByZmxvdyk7XG5cbiAgZGVsZXRlIHRoaXMucmV2ZXJzZUZsb3dNYXBbbmFtZV07XG4gIGRlbGV0ZSB0aGlzLnJldmVyc2VGbG93TWFwW3JmbG93XTtcbiAgdGhpcy5mb3JnZXRGbG93KHJldmVyc2UuaWQsIHJmbG93KTtcbiAgdGhpcy5mb3JnZXRGbG93KHBvcnQuaWQsIG5hbWUpO1xufTtcblxuLyoqXG4gKiBGb3JnZXQgdGhlIGZsb3cgZnJvbSBpZCB3aXRoIGEgZ2l2ZW4gbmFtZS5cbiAqIEBtZXRob2QgZm9yZ2V0Rmxvd1xuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBUaGUgcG9ydCBJRCBvZiB0aGUgc291cmNlLlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIGZsb3cgbmFtZS5cbiAqL1xuTWFuYWdlci5wcm90b3R5cGUuZm9yZ2V0RmxvdyA9IGZ1bmN0aW9uIChpZCwgbmFtZSkge1xuICB2YXIgaTtcbiAgaWYgKHRoaXMuZGF0YUZsb3dzW2lkXSkge1xuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmRhdGFGbG93c1tpZF0ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICh0aGlzLmRhdGFGbG93c1tpZF1baV0gPT09IG5hbWUpIHtcbiAgICAgICAgdGhpcy5kYXRhRmxvd3NbaWRdLnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEdldCB0aGUgY29yZSBmcmVlZG9tLmpzIEFQSSBhY3RpdmUgb24gdGhlIGN1cnJlbnQgaHViLlxuICogQG1ldGhvZCBnZXRDb3JlXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgQ2FsbGJhY2sgdG8gZmlyZSB3aXRoIHRoZSBjb3JlIG9iamVjdC5cbiAqL1xuTWFuYWdlci5wcm90b3R5cGUuZ2V0Q29yZSA9IGZ1bmN0aW9uIChjYikge1xuICBpZiAodGhpcy5jb3JlKSB7XG4gICAgY2IodGhpcy5jb3JlKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmFwaS5nZXRDb3JlKCdjb3JlJywgdGhpcykudGhlbihmdW5jdGlvbiAoY29yZSkge1xuICAgICAgdGhpcy5jb3JlID0gY29yZS5pbnN0O1xuICAgICAgY2IodGhpcy5jb3JlKTtcbiAgICB9LmJpbmQodGhpcyksIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTWFuYWdlcjtcbiIsIi8qanNsaW50IGluZGVudDoyLG5vZGU6dHJ1ZSxzbG9wcHk6dHJ1ZSAqL1xudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcbnZhciBQcm92aWRlciA9IHJlcXVpcmUoJy4vcHJvdmlkZXInKTtcblxuLyoqXG4gKiBUaGUgZXh0ZXJuYWwgUG9ydCBmYWNlIG9mIGEgbW9kdWxlIG9uIGEgaHViLlxuICogQGNsYXNzIE1vZHVsZVxuICogQGV4dGVuZHMgUG9ydFxuICogQHBhcmFtIHtTdHJpbmd9IG1hbmlmZXN0VVJMIFRoZSBtYW5pZmVzdCB0aGlzIG1vZHVsZSBsb2Fkcy5cbiAqIEBwYXJhbSB7U3RyaW5nW119IGNyZWF0b3IgVGhlIGxpbmVhZ2Ugb2YgY3JlYXRpb24gZm9yIHRoaXMgbW9kdWxlLlxuICogQHBhcmFtIHtQb2xpY3l9IFBvbGljeSBUaGUgcG9saWN5IGxvYWRlciBmb3IgZGVwZW5kZW5jaWVzLlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnZhciBNb2R1bGUgPSBmdW5jdGlvbiAobWFuaWZlc3RVUkwsIG1hbmlmZXN0LCBjcmVhdG9yLCBwb2xpY3kpIHtcbiAgdGhpcy5hcGkgPSBwb2xpY3kuYXBpO1xuICB0aGlzLnBvbGljeSA9IHBvbGljeTtcbiAgdGhpcy5yZXNvdXJjZSA9IHBvbGljeS5yZXNvdXJjZTtcbiAgdGhpcy5kZWJ1ZyA9IHBvbGljeS5kZWJ1ZztcblxuICB0aGlzLmNvbmZpZyA9IHt9O1xuXG4gIHRoaXMuaWQgPSBtYW5pZmVzdFVSTCArIE1hdGgucmFuZG9tKCk7XG4gIHRoaXMubWFuaWZlc3RJZCA9IG1hbmlmZXN0VVJMO1xuICB0aGlzLm1hbmlmZXN0ID0gbWFuaWZlc3Q7XG4gIHRoaXMubGluZWFnZSA9IFt0aGlzLm1hbmlmZXN0SWRdLmNvbmNhdChjcmVhdG9yKTtcblxuICB0aGlzLnF1aWV0ID0gdGhpcy5tYW5pZmVzdC5xdWlldCB8fCBmYWxzZTtcblxuICB0aGlzLmV4dGVybmFsUG9ydE1hcCA9IHt9O1xuICB0aGlzLmludGVybmFsUG9ydE1hcCA9IHt9O1xuICB0aGlzLmRlcGVuZGFudENoYW5uZWxzID0gW107XG4gIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuXG4gIHV0aWwuaGFuZGxlRXZlbnRzKHRoaXMpO1xufTtcblxuLyoqXG4gKiBSZWNlaXZlIGEgbWVzc2FnZSBmb3IgdGhlIE1vZHVsZS5cbiAqIEBtZXRob2Qgb25NZXNzYWdlXG4gKiBAcGFyYW0ge1N0cmluZ30gZmxvdyBUaGUgb3JpZ2luIG9mIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgcmVjZWl2ZWQuXG4gKi9cbk1vZHVsZS5wcm90b3R5cGUub25NZXNzYWdlID0gZnVuY3Rpb24gKGZsb3csIG1lc3NhZ2UpIHtcbiAgaWYgKGZsb3cgPT09ICdjb250cm9sJykge1xuICAgIGlmIChtZXNzYWdlLnR5cGUgPT09ICdzZXR1cCcpIHtcbiAgICAgIHRoaXMuY29udHJvbENoYW5uZWwgPSBtZXNzYWdlLmNoYW5uZWw7XG4gICAgICB1dGlsLm1peGluKHRoaXMuY29uZmlnLCBtZXNzYWdlLmNvbmZpZyk7XG4gICAgICB0aGlzLmVtaXQodGhpcy5jb250cm9sQ2hhbm5lbCwge1xuICAgICAgICB0eXBlOiAnQ29yZSBQcm92aWRlcicsXG4gICAgICAgIHJlcXVlc3Q6ICdjb3JlJ1xuICAgICAgfSk7XG4gICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLnR5cGUgPT09ICdjcmVhdGVMaW5rJyAmJiBtZXNzYWdlLmNoYW5uZWwpIHtcbiAgICAgIHRoaXMuZGVidWcuZGVidWcodGhpcyArICdnb3QgY3JlYXRlIGxpbmsgZm9yICcgKyBtZXNzYWdlLm5hbWUpO1xuICAgICAgdGhpcy5leHRlcm5hbFBvcnRNYXBbbWVzc2FnZS5uYW1lXSA9IG1lc3NhZ2UuY2hhbm5lbDtcbiAgICAgIGlmICh0aGlzLmludGVybmFsUG9ydE1hcFttZXNzYWdlLm5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5pbnRlcm5hbFBvcnRNYXBbbWVzc2FnZS5uYW1lXSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgdmFyIG1zZyA9IHtcbiAgICAgICAgdHlwZTogJ2RlZmF1bHQgY2hhbm5lbCBhbm5vdW5jZW1lbnQnLFxuICAgICAgICBjaGFubmVsOiBtZXNzYWdlLnJldmVyc2VcbiAgICAgIH07XG4gICAgICBpZiAodGhpcy5tYW5pZmVzdC5kZXBlbmRlbmNpZXMgJiZcbiAgICAgICAgICB0aGlzLm1hbmlmZXN0LmRlcGVuZGVuY2llc1ttZXNzYWdlLm5hbWVdKSB7XG4gICAgICAgIG1zZy5hcGkgPSB0aGlzLm1hbmlmZXN0LmRlcGVuZGVuY2llc1ttZXNzYWdlLm5hbWVdLmFwaTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZW1pdChtZXNzYWdlLmNoYW5uZWwsIG1zZyk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLmNvcmUpIHtcbiAgICAgIHRoaXMuY29yZSA9IG5ldyBtZXNzYWdlLmNvcmUoKTtcbiAgICAgIHRoaXMuZW1pdCgnY29yZScsIG1lc3NhZ2UuY29yZSk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLnR5cGUgPT09ICdjbG9zZScpIHtcbiAgICAgIC8vIENsb3NpbmcgY2hhbm5lbC5cbiAgICAgIGlmICghbWVzc2FnZS5jaGFubmVsIHx8IG1lc3NhZ2UuY2hhbm5lbCA9PT0gJ2NvbnRyb2wnKSB7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5kZXJlZ2lzdGVyRmxvdyhtZXNzYWdlLmNoYW5uZWwsIGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wb3J0Lm9uTWVzc2FnZShmbG93LCBtZXNzYWdlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0aGlzLmV4dGVybmFsUG9ydE1hcFtmbG93XSA9PT0gZmFsc2UgfHxcbiAgICAgICAgIXRoaXMuZXh0ZXJuYWxQb3J0TWFwW2Zsb3ddKSAmJiBtZXNzYWdlLmNoYW5uZWwpIHtcbiAgICAgIHRoaXMuZGVidWcuZGVidWcodGhpcyArICdoYW5kbGluZyBjaGFubmVsIGFubm91bmNlbWVudCBmb3IgJyArIGZsb3cpO1xuICAgICAgdGhpcy5leHRlcm5hbFBvcnRNYXBbZmxvd10gPSBtZXNzYWdlLmNoYW5uZWw7XG4gICAgICBpZiAodGhpcy5pbnRlcm5hbFBvcnRNYXBbZmxvd10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmludGVybmFsUG9ydE1hcFtmbG93XSA9IGZhbHNlO1xuXG4gICAgICAgIC8vIE5ldyBpbmNvbWluZyBjb25uZWN0aW9uIGF0dGVtcHRzIHNob3VsZCBnZXQgcm91dGVkIHRvIG1vZEludGVybmFsLlxuICAgICAgICBpZiAodGhpcy5tYW5pZmVzdC5wcm92aWRlcyAmJiB0aGlzLm1vZEludGVybmFsKSB7XG4gICAgICAgICAgdGhpcy5wb3J0Lm9uTWVzc2FnZSh0aGlzLm1vZEludGVybmFsLCB7XG4gICAgICAgICAgICB0eXBlOiAnQ29ubmVjdGlvbicsXG4gICAgICAgICAgICBjaGFubmVsOiBmbG93LFxuICAgICAgICAgICAgYXBpOiBtZXNzYWdlLmFwaVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubWFuaWZlc3QucHJvdmlkZXMpIHtcbiAgICAgICAgICB0aGlzLm9uY2UoJ21vZEludGVybmFsJywgZnVuY3Rpb24gKGZsb3csIGFwaSkge1xuICAgICAgICAgICAgdGhpcy5wb3J0Lm9uTWVzc2FnZSh0aGlzLm1vZEludGVybmFsLCB7XG4gICAgICAgICAgICAgIHR5cGU6ICdDb25uZWN0aW9uJyxcbiAgICAgICAgICAgICAgY2hhbm5lbDogZmxvdyxcbiAgICAgICAgICAgICAgYXBpOiBhcGlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0uYmluZCh0aGlzLCBmbG93LCBtZXNzYWdlLmFwaSkpO1xuICAgICAgICAvLyBGaXJzdCBjb25uZWN0aW9uIHJldGFpbnMgbGVnYWN5IG1hcHBpbmcgYXMgJ2RlZmF1bHQnLlxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmV4dGVybmFsUG9ydE1hcFsnZGVmYXVsdCddICYmIG1lc3NhZ2UuY2hhbm5lbCkge1xuICAgICAgICAgIHRoaXMuZXh0ZXJuYWxQb3J0TWFwWydkZWZhdWx0J10gPSBtZXNzYWdlLmNoYW5uZWw7XG4gICAgICAgICAgdGhpcy5vbmNlKCdpbnRlcm5hbENoYW5uZWxSZWFkeScsIGZ1bmN0aW9uIChmbG93KSB7XG4gICAgICAgICAgICB0aGlzLmludGVybmFsUG9ydE1hcFtmbG93XSA9IHRoaXMuaW50ZXJuYWxQb3J0TWFwWydkZWZhdWx0J107XG4gICAgICAgICAgfS5iaW5kKHRoaXMsIGZsb3cpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuc3RhcnRlZCkge1xuICAgICAgdGhpcy5vbmNlKCdzdGFydCcsIHRoaXMub25NZXNzYWdlLmJpbmQodGhpcywgZmxvdywgbWVzc2FnZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5pbnRlcm5hbFBvcnRNYXBbZmxvd10gPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnNvbGUud2Fybignd2FpdGluZyBvbiBpbnRlcm5hbCBjaGFubmVsIGZvciBtc2cnKTtcbiAgICAgICAgdGhpcy5vbmNlKCdpbnRlcm5hbENoYW5uZWxSZWFkeScsIHRoaXMub25NZXNzYWdlLmJpbmQodGhpcywgZmxvdywgbWVzc2FnZSkpO1xuICAgICAgfSBlbHNlIGlmICghdGhpcy5pbnRlcm5hbFBvcnRNYXBbZmxvd10pIHtcbiAgICAgICAgdGhpcy5kZWJ1Zy5lcnJvcignVW5leHBlY3RlZCBtZXNzYWdlIGZyb20gJyArIGZsb3cpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBvcnQub25NZXNzYWdlKHRoaXMuaW50ZXJuYWxQb3J0TWFwW2Zsb3ddLCBtZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQ2xlYW4gdXAgYWZ0ZXIgYSBmbG93IHdoaWNoIGlzIG5vIGxvbmdlciB1c2VkIC8gbmVlZGVkLlxuICogQG1ldGhvZCBkZXJlZ2lzdGVyRkxvd1xuICogQHBhcmFtIHtTdHJpbmd9IGZsb3cgVGhlIGZsb3cgdG8gcmVtb3ZlIG1hcHBpbmdzIGZvci5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaW50ZXJuYWwgSWYgdGhlIGZsb3cgbmFtZSBpcyB0aGUgaW50ZXJuYWwgaWRlbnRpZmllci5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBXaGV0aGVyIHRoZSBmbG93IHdhcyBzdWNjZXNzZnVsbHkgZGVyZWdpc3RlcmVkLlxuICogQHByaXZhdGVcbiAqL1xuTW9kdWxlLnByb3RvdHlwZS5kZXJlZ2lzdGVyRmxvdyA9IGZ1bmN0aW9uIChmbG93LCBpbnRlcm5hbCkge1xuICB2YXIga2V5LFxuICAgIG1hcCA9IGludGVybmFsID8gdGhpcy5pbnRlcm5hbFBvcnRNYXAgOiB0aGlzLmV4dGVybmFsUG9ydE1hcDtcbiAgLy8gVE9ETzogdGhpcyBpcyBpbmVmZmljaWVudCwgYnV0IHNlZW1zIGxlc3MgY29uZnVzaW5nIHRoYW4gYSAzcmRcbiAgLy8gcmV2ZXJzZSBsb29rdXAgbWFwLlxuICBmb3IgKGtleSBpbiBtYXApIHtcbiAgICBpZiAobWFwW2tleV0gPT09IGZsb3cpIHtcbiAgICAgIGlmIChpbnRlcm5hbCkge1xuICAgICAgICB0aGlzLmVtaXQodGhpcy5jb250cm9sQ2hhbm5lbCwge1xuICAgICAgICAgIHR5cGU6ICdDaGFubmVsIFRlYXJkb3duJyxcbiAgICAgICAgICByZXF1ZXN0OiAndW5saW5rJyxcbiAgICAgICAgICB0bzogdGhpcy5leHRlcm5hbFBvcnRNYXBba2V5XVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wb3J0KSB7XG4gICAgICAgIHRoaXMucG9ydC5vbk1lc3NhZ2UoJ2NvbnRyb2wnLCB7XG4gICAgICAgICAgdHlwZTogJ2Nsb3NlJyxcbiAgICAgICAgICBjaGFubmVsOiB0aGlzLmludGVybmFsUG9ydE1hcFtrZXldXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZGVsZXRlIHRoaXMuZXh0ZXJuYWxQb3J0TWFwW2tleV07XG4gICAgICBkZWxldGUgdGhpcy5pbnRlcm5hbFBvcnRNYXBba2V5XTtcblxuICAgICAgLy8gV2hlbiB0aGVyZSBhcmUgc3RpbGwgbm9uLWRlcGVuZGFudCBjaGFubmVscywga2VlcCBydW5uaW5nXG4gICAgICBmb3IgKGtleSBpbiB0aGlzLmV4dGVybmFsUG9ydE1hcCkge1xuICAgICAgICBpZiAodGhpcy5leHRlcm5hbFBvcnRNYXAuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGlmICh0aGlzLmRlcGVuZGFudENoYW5uZWxzLmluZGV4T2Yoa2V5KSA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gT3RoZXJ3aXNlIHNodXQgZG93biB0aGUgbW9kdWxlLlxuICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBBdHRlbXB0IHRvIHN0YXJ0IHRoZSBtb2R1bGUgb25jZSB0aGUgcmVtb3RlIGZyZWVkb20gY29udGV4dFxuICogZXhpc3RzLlxuICogQG1ldGhvZCBzdGFydFxuICogQHByaXZhdGVcbiAqL1xuTW9kdWxlLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIFBvcnQ7XG4gIGlmICh0aGlzLnN0YXJ0ZWQgfHwgdGhpcy5wb3J0KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICh0aGlzLmNvbnRyb2xDaGFubmVsKSB7XG4gICAgdGhpcy5sb2FkTGlua3MoKTtcbiAgICBQb3J0ID0gdGhpcy5jb25maWcucG9ydFR5cGU7XG4gICAgdGhpcy5wb3J0ID0gbmV3IFBvcnQodGhpcy5tYW5pZmVzdC5uYW1lLCB0aGlzLnJlc291cmNlKTtcbiAgICAvLyBMaXN0ZW4gdG8gYWxsIHBvcnQgbWVzc2FnZXMuXG4gICAgdGhpcy5wb3J0Lm9uKHRoaXMuZW1pdE1lc3NhZ2UuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5wb3J0LmFkZEVycm9ySGFuZGxlcihmdW5jdGlvbiAoZXJyKSB7XG4gICAgICB0aGlzLmRlYnVnLndhcm4oJ01vZHVsZSBGYWlsZWQnLCBlcnIpO1xuICAgICAgdGhpcy5zdG9wKCk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgICAvLyBUZWxsIHRoZSBsb2NhbCBwb3J0IHRvIGFzayB1cyBmb3IgaGVscC5cbiAgICB0aGlzLnBvcnQub25NZXNzYWdlKCdjb250cm9sJywge1xuICAgICAgY2hhbm5lbDogJ2NvbnRyb2wnLFxuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ1xuICAgIH0pO1xuXG4gICAgLy8gVGVsbCB0aGUgcmVtb3RlIGxvY2F0aW9uIHRvIGRlbGVnYXRlIGRlYnVnZ2luZy5cbiAgICB0aGlzLnBvcnQub25NZXNzYWdlKCdjb250cm9sJywge1xuICAgICAgdHlwZTogJ1JlZGlyZWN0JyxcbiAgICAgIHJlcXVlc3Q6ICdkZWxlZ2F0ZScsXG4gICAgICBmbG93OiAnZGVidWcnXG4gICAgfSk7XG4gICAgdGhpcy5wb3J0Lm9uTWVzc2FnZSgnY29udHJvbCcsIHtcbiAgICAgIHR5cGU6ICdSZWRpcmVjdCcsXG4gICAgICByZXF1ZXN0OiAnZGVsZWdhdGUnLFxuICAgICAgZmxvdzogJ2NvcmUnXG4gICAgfSk7XG4gICAgXG4gICAgLy8gVGVsbCB0aGUgY29udGFpbmVyIHRvIGluc3RhbnRpYXRlIHRoZSBjb3VudGVycGFydCB0byB0aGlzIGV4dGVybmFsIHZpZXcuXG4gICAgdGhpcy5wb3J0Lm9uTWVzc2FnZSgnY29udHJvbCcsIHtcbiAgICAgIHR5cGU6ICdFbnZpcm9ubWVudCBDb25maWd1cmF0aW9uJyxcbiAgICAgIHJlcXVlc3Q6ICdlbnZpcm9ubWVudCcsXG4gICAgICBuYW1lOiAnTW9kSW50ZXJuYWwnXG4gICAgfSk7XG4gIH1cbn07XG5cbi8qKlxuICogU3RvcCB0aGUgbW9kdWxlIHdoZW4gaXQgaXMgbm8gbG9uZ2VyIG5lZWRlZCwgYW5kIHRlYXItZG93biBzdGF0ZS5cbiAqIEBtZXRob2Qgc3RvcFxuICogQHByaXZhdGVcbiAqL1xuTW9kdWxlLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMuc3RhcnRlZCkge1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLmVtaXQoJ2Nsb3NlJyk7XG4gIGlmICh0aGlzLnBvcnQpIHtcbiAgICB0aGlzLnBvcnQub2ZmKCk7XG4gICAgdGhpcy5wb3J0Lm9uTWVzc2FnZSgnY29udHJvbCcsIHtcbiAgICAgIHR5cGU6ICdjbG9zZScsXG4gICAgICBjaGFubmVsOiAnY29udHJvbCdcbiAgICB9KTtcbiAgICB0aGlzLnBvcnQuc3RvcCgpO1xuICAgIGRlbGV0ZSB0aGlzLnBvcnQ7XG4gIH1cbiAgZGVsZXRlIHRoaXMucG9saWN5O1xuICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbn07XG5cbi8qKlxuICogVGV4dHVhbCBEZXNjcmlwdGlvbiBvZiB0aGUgUG9ydFxuICogQG1ldGhvZCB0b1N0cmluZ1xuICogQHJldHVybiB7U3RyaW5nfSBUaGUgZGVzY3JpcHRpb24gb2YgdGhpcyBQb3J0LlxuICovXG5Nb2R1bGUucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gXCJbTW9kdWxlIFwiICsgdGhpcy5tYW5pZmVzdC5uYW1lICsgXCJdXCI7XG59O1xuXG4vKipcbiAqIEludGVyY2VwdCBtZXNzYWdlcyBhcyB0aGV5IGFycml2ZSBmcm9tIHRoZSBtb2R1bGUsXG4gKiBtYXBwaW5nIHRoZW0gYmV0d2VlbiBpbnRlcm5hbCBhbmQgZXh0ZXJuYWwgZmxvdyBuYW1lcy5cbiAqIEBtZXRob2QgZW1pdE1lc3NhZ2VcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBkZXN0aW5hdGlvbiB0aGUgbW9kdWxlIHdhbnRzIHRvIHNlbmQgdG8uXG4gKiBAcGFyYW0ge09iamVjdH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBzZW5kLlxuICogQHByaXZhdGVcbiAqL1xuTW9kdWxlLnByb3RvdHlwZS5lbWl0TWVzc2FnZSA9IGZ1bmN0aW9uIChuYW1lLCBtZXNzYWdlKSB7XG4gIGlmICh0aGlzLmludGVybmFsUG9ydE1hcFtuYW1lXSA9PT0gZmFsc2UgJiYgbWVzc2FnZS5jaGFubmVsKSB7XG4gICAgdGhpcy5pbnRlcm5hbFBvcnRNYXBbbmFtZV0gPSBtZXNzYWdlLmNoYW5uZWw7XG4gICAgdGhpcy5lbWl0KCdpbnRlcm5hbENoYW5uZWxSZWFkeScpO1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBUZXJtaW5hdGUgZGVidWcgcmVkaXJlY3Rpb24gcmVxdWVzdGVkIGluIHN0YXJ0KCkuXG4gIGlmIChuYW1lID09PSAnY29udHJvbCcpIHtcbiAgICBpZiAobWVzc2FnZS5mbG93ID09PSAnZGVidWcnICYmIG1lc3NhZ2UubWVzc2FnZSkge1xuICAgICAgdGhpcy5kZWJ1Zy5mb3JtYXQobWVzc2FnZS5tZXNzYWdlLnNldmVyaXR5LFxuICAgICAgICAgIG1lc3NhZ2UubWVzc2FnZS5zb3VyY2UgfHwgdGhpcy50b1N0cmluZygpLFxuICAgICAgICAgIG1lc3NhZ2UubWVzc2FnZS5tc2cpO1xuICAgIH0gZWxzZSBpZiAobWVzc2FnZS5mbG93ID09PSAnY29yZScgJiYgbWVzc2FnZS5tZXNzYWdlKSB7XG4gICAgICBpZiAoIXRoaXMuY29yZSkge1xuICAgICAgICB0aGlzLm9uY2UoJ2NvcmUnLCB0aGlzLmVtaXRNZXNzYWdlLmJpbmQodGhpcywgbmFtZSwgbWVzc2FnZSkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAobWVzc2FnZS5tZXNzYWdlLnR5cGUgPT09ICdyZWdpc3RlcicpIHtcbiAgICAgICAgbWVzc2FnZS5tZXNzYWdlLnJlcGx5ID0gdGhpcy5wb3J0Lm9uTWVzc2FnZS5iaW5kKHRoaXMucG9ydCwgJ2NvbnRyb2wnKTtcbiAgICAgICAgdGhpcy5leHRlcm5hbFBvcnRNYXBbbWVzc2FnZS5tZXNzYWdlLmlkXSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgdGhpcy5jb3JlLm9uTWVzc2FnZSh0aGlzLCBtZXNzYWdlLm1lc3NhZ2UpO1xuICAgIH0gZWxzZSBpZiAobWVzc2FnZS5uYW1lID09PSAnTW9kSW50ZXJuYWwnICYmICF0aGlzLm1vZEludGVybmFsKSB7XG4gICAgICB0aGlzLm1vZEludGVybmFsID0gbWVzc2FnZS5jaGFubmVsO1xuICAgICAgdGhpcy5wb3J0Lm9uTWVzc2FnZSh0aGlzLm1vZEludGVybmFsLCB7XG4gICAgICAgIHR5cGU6ICdJbml0aWFsaXphdGlvbicsXG4gICAgICAgIGlkOiB0aGlzLm1hbmlmZXN0SWQsXG4gICAgICAgIGFwcElkOiB0aGlzLmlkLFxuICAgICAgICBtYW5pZmVzdDogdGhpcy5tYW5pZmVzdCxcbiAgICAgICAgbGluZWFnZTogdGhpcy5saW5lYWdlLFxuICAgICAgICBjaGFubmVsOiBtZXNzYWdlLnJldmVyc2VcbiAgICAgIH0pO1xuICAgICAgdGhpcy5lbWl0KCdtb2RJbnRlcm5hbCcpO1xuICAgIH0gZWxzZSBpZiAobWVzc2FnZS50eXBlID09PSAnY3JlYXRlTGluaycpIHtcbiAgICAgIHRoaXMuaW50ZXJuYWxQb3J0TWFwW21lc3NhZ2UubmFtZV0gPSBtZXNzYWdlLmNoYW5uZWw7XG4gICAgICB0aGlzLnBvcnQub25NZXNzYWdlKG1lc3NhZ2UuY2hhbm5lbCwge1xuICAgICAgICB0eXBlOiAnY2hhbm5lbCBhbm5vdW5jZW1lbnQnLFxuICAgICAgICBjaGFubmVsOiBtZXNzYWdlLnJldmVyc2VcbiAgICAgIH0pO1xuICAgICAgdGhpcy5lbWl0KCdpbnRlcm5hbENoYW5uZWxSZWFkeScpO1xuICAgIH0gZWxzZSBpZiAobWVzc2FnZS50eXBlID09PSAnY2xvc2UnKSB7XG4gICAgICB0aGlzLmRlcmVnaXN0ZXJGbG93KG1lc3NhZ2UuY2hhbm5lbCwgdHJ1ZSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKG5hbWUgPT09ICdNb2RJbnRlcm5hbCcgJiYgbWVzc2FnZS50eXBlID09PSAncmVhZHknICYmICF0aGlzLnN0YXJ0ZWQpIHtcbiAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuICAgIHRoaXMuZW1pdCgnc3RhcnQnKTtcbiAgfSBlbHNlIGlmIChuYW1lID09PSAnTW9kSW50ZXJuYWwnICYmIG1lc3NhZ2UudHlwZSA9PT0gJ3Jlc29sdmUnKSB7XG4gICAgdGhpcy5yZXNvdXJjZS5nZXQodGhpcy5tYW5pZmVzdElkLCBtZXNzYWdlLmRhdGEpLnRoZW4oZnVuY3Rpb24gKGlkLCBkYXRhKSB7XG4gICAgICB0aGlzLnBvcnQub25NZXNzYWdlKHRoaXMubW9kSW50ZXJuYWwsIHtcbiAgICAgICAgdHlwZTogJ3Jlc29sdmUgcmVzcG9uc2UnLFxuICAgICAgICBpZDogaWQsXG4gICAgICAgIGRhdGE6IGRhdGFcbiAgICAgIH0pO1xuICAgIH0uYmluZCh0aGlzLCBtZXNzYWdlLmlkKSwgZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5kZWJ1Zy53YXJuKCdFcnJvciBSZXNvbHZpbmcgVVJMIGZvciBNb2R1bGUuJyk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmVtaXQodGhpcy5leHRlcm5hbFBvcnRNYXBbbmFtZV0sIG1lc3NhZ2UpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogUmVxdWVzdCB0aGUgZXh0ZXJuYWwgcm91dGVzIHVzZWQgYnkgdGhpcyBtb2R1bGUuXG4gKiBAbWV0aG9kIGxvYWRMaW5rc1xuICogQHByaXZhdGVcbiAqL1xuTW9kdWxlLnByb3RvdHlwZS5sb2FkTGlua3MgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBpLCBjaGFubmVscyA9IFsnZGVmYXVsdCddLCBuYW1lLCBkZXA7XG5cbiAgaWYgKHRoaXMubWFuaWZlc3QucGVybWlzc2lvbnMpIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5tYW5pZmVzdC5wZXJtaXNzaW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgbmFtZSA9IHRoaXMubWFuaWZlc3QucGVybWlzc2lvbnNbaV07XG4gICAgICBpZiAoY2hhbm5lbHMuaW5kZXhPZihuYW1lKSA8IDAgJiYgbmFtZS5pbmRleE9mKCdjb3JlLicpID09PSAwKSB7XG4gICAgICAgIGNoYW5uZWxzLnB1c2gobmFtZSk7XG4gICAgICAgIHRoaXMuZGVwZW5kYW50Q2hhbm5lbHMucHVzaChuYW1lKTtcbiAgICAgICAgZGVwID0gbmV3IFByb3ZpZGVyKHRoaXMuYXBpLmdldChuYW1lKS5kZWZpbml0aW9uLCB0aGlzLmRlYnVnKTtcbiAgICAgICAgdGhpcy5hcGkucHJvdmlkZUNvcmUobmFtZSwgZGVwLCB0aGlzKTtcblxuICAgICAgICB0aGlzLmVtaXQodGhpcy5jb250cm9sQ2hhbm5lbCwge1xuICAgICAgICAgIHR5cGU6ICdDb3JlIExpbmsgdG8gJyArIG5hbWUsXG4gICAgICAgICAgcmVxdWVzdDogJ2xpbmsnLFxuICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgdG86IGRlcFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKHRoaXMubWFuaWZlc3QuZGVwZW5kZW5jaWVzKSB7XG4gICAgdXRpbC5lYWNoUHJvcCh0aGlzLm1hbmlmZXN0LmRlcGVuZGVuY2llcywgZnVuY3Rpb24gKGRlc2MsIG5hbWUpIHtcbiAgICAgIGlmIChjaGFubmVscy5pbmRleE9mKG5hbWUpIDwgMCkge1xuICAgICAgICBjaGFubmVscy5wdXNoKG5hbWUpO1xuICAgICAgICB0aGlzLmRlcGVuZGFudENoYW5uZWxzLnB1c2gobmFtZSk7XG4gICAgICB9XG4gICAgICB0aGlzLnJlc291cmNlLmdldCh0aGlzLm1hbmlmZXN0SWQsIGRlc2MudXJsKS50aGVuKGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgdGhpcy5wb2xpY3kuZ2V0KHRoaXMubGluZWFnZSwgdXJsKS50aGVuKGZ1bmN0aW9uIChkZXApIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUVudihuYW1lLCBkZXAubWFuaWZlc3QpO1xuICAgICAgICAgIHRoaXMuZW1pdCh0aGlzLmNvbnRyb2xDaGFubmVsLCB7XG4gICAgICAgICAgICB0eXBlOiAnTGluayB0byAnICsgbmFtZSxcbiAgICAgICAgICAgIHJlcXVlc3Q6ICdsaW5rJyxcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBvdmVycmlkZURlc3Q6IG5hbWUgKyAnLicgKyB0aGlzLmlkLFxuICAgICAgICAgICAgdG86IGRlcFxuICAgICAgICAgIH0pO1xuICAgICAgICB9LmJpbmQodGhpcyksIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICB0aGlzLmRlYnVnLndhcm4oJ2ZhaWxlZCB0byBsb2FkIGRlcDogJywgbmFtZSwgZXJyKTtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgIH0uYmluZCh0aGlzKSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICB0aGlzLmRlYnVnLndhcm4oJ2ZhaWxlZCB0byBsb2FkIGRlcDogJywgbmFtZSwgZXJyKTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuICAvLyBOb3RlIHRoYXQgbWVzc2FnZXMgY2FuIGJlIHN5bmNocm9ub3VzLCBzbyBzb21lIHBvcnRzIG1heSBhbHJlYWR5IGJlIGJvdW5kLlxuICBmb3IgKGkgPSAwOyBpIDwgY2hhbm5lbHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0aGlzLmV4dGVybmFsUG9ydE1hcFtjaGFubmVsc1tpXV0gPSB0aGlzLmV4dGVybmFsUG9ydE1hcFtjaGFubmVsc1tpXV0gfHwgZmFsc2U7XG4gICAgdGhpcy5pbnRlcm5hbFBvcnRNYXBbY2hhbm5lbHNbaV1dID0gZmFsc2U7XG4gIH1cbn07XG5cbi8qKlxuICogVXBkYXRlIHRoZSBtb2R1bGUgZW52aXJvbm1lbnQgd2l0aCBpbmZvcm1hdGlvbiBhYm91dCBhIGRlcGVuZGVudCBtYW5pZmVzdC5cbiAqIEBtZXRob2QgdXBkYXRlRW52XG4gKiBAcGFyYW0ge1N0cmluZ30gZGVwIFRoZSBkZXBlbmRlbmN5XG4gKiBAcGFyYW0ge09iamVjdH0gbWFuaWZlc3QgVGhlIG1hbmlmZXN0IG9mIHRoZSBkZXBlbmRlbmN5XG4gKi9cbk1vZHVsZS5wcm90b3R5cGUudXBkYXRlRW52ID0gZnVuY3Rpb24gKGRlcCwgbWFuaWZlc3QpIHtcbiAgaWYgKCFtYW5pZmVzdCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoIXRoaXMubW9kSW50ZXJuYWwpIHtcbiAgICB0aGlzLm9uY2UoJ21vZEludGVybmFsJywgdGhpcy51cGRhdGVFbnYuYmluZCh0aGlzLCBkZXAsIG1hbmlmZXN0KSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIFxuICB2YXIgbWV0YWRhdGE7XG5cbiAgLy8gRGVjaWRlIGlmL3doYXQgb3RoZXIgcHJvcGVydGllcyBzaG91bGQgYmUgZXhwb3J0ZWQuXG4gIC8vIEtlZXAgaW4gc3luYyB3aXRoIE1vZHVsZUludGVybmFsLnVwZGF0ZUVudlxuICBtZXRhZGF0YSA9IHtcbiAgICBuYW1lOiBtYW5pZmVzdC5uYW1lLFxuICAgIGljb246IG1hbmlmZXN0Lmljb24sXG4gICAgZGVzY3JpcHRpb246IG1hbmlmZXN0LmRlc2NyaXB0aW9uLFxuICAgIGFwaTogbWFuaWZlc3QuYXBpXG4gIH07XG4gIFxuICB0aGlzLnBvcnQub25NZXNzYWdlKHRoaXMubW9kSW50ZXJuYWwsIHtcbiAgICB0eXBlOiAnbWFuaWZlc3QnLFxuICAgIG5hbWU6IGRlcCxcbiAgICBtYW5pZmVzdDogbWV0YWRhdGFcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1vZHVsZTtcbiIsIi8qanNsaW50IGluZGVudDoyLCBub2RlOnRydWUsc2xvcHB5OnRydWUgKi9cbnZhciBQcm9taXNlQ29tcGF0ID0gcmVxdWlyZSgnZXM2LXByb21pc2UnKS5Qcm9taXNlO1xuXG52YXIgQXBpSW50ZXJmYWNlID0gcmVxdWlyZSgnLi9wcm94eS9hcGlJbnRlcmZhY2UnKTtcbnZhciBQcm92aWRlciA9IHJlcXVpcmUoJy4vcHJvdmlkZXInKTtcbnZhciBQcm94eUJpbmRlciA9IHJlcXVpcmUoJy4vcHJveHliaW5kZXInKTtcbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbi8qKlxuICogVGhlIGludGVybmFsIGxvZ2ljIGZvciBtb2R1bGUgc2V0dXAsIHdoaWNoIG1ha2VzIHN1cmUgdGhlIHB1YmxpY1xuICogZmFjaW5nIGV4cG9ydHMgaGF2ZSBhcHByb3ByaWF0ZSBwcm9wZXJ0aWVzLCBhbmQgbG9hZCB1c2VyIHNjcmlwdHMuXG4gKiBAY2xhc3MgTW9kdWxlSW50ZXJuYWxcbiAqIEBleHRlbmRzIFBvcnRcbiAqIEBwYXJhbSB7UG9ydH0gbWFuYWdlciBUaGUgbWFuYWdlciBpbiB0aGlzIG1vZHVsZSB0byB1c2UgZm9yIHJvdXRpbmcgc2V0dXAuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xudmFyIE1vZHVsZUludGVybmFsID0gZnVuY3Rpb24gKG1hbmFnZXIpIHtcbiAgdGhpcy5jb25maWcgPSB7fTtcbiAgdGhpcy5tYW5hZ2VyID0gbWFuYWdlcjtcbiAgdGhpcy5kZWJ1ZyA9IG1hbmFnZXIuZGVidWc7XG4gIHRoaXMuYmluZGVyID0gbmV3IFByb3h5QmluZGVyKHRoaXMubWFuYWdlcik7XG4gIHRoaXMuYXBpID0gdGhpcy5tYW5hZ2VyLmFwaTtcbiAgdGhpcy5tYW5pZmVzdHMgPSB7fTtcbiAgdGhpcy5wcm92aWRlcnMgPSB7fTtcbiAgXG4gIHRoaXMuaWQgPSAnTW9kdWxlSW50ZXJuYWwnO1xuICB0aGlzLnBlbmRpbmdQb3J0cyA9IDA7XG4gIHRoaXMucmVxdWVzdHMgPSB7fTtcblxuICB1dGlsLmhhbmRsZUV2ZW50cyh0aGlzKTtcbn07XG5cbi8qKlxuICogTWVzc2FnZSBoYW5kbGVyIGZvciB0aGlzIHBvcnQuXG4gKiBUaGlzIHBvcnQgb25seSBoYW5kbGVzIHR3byBtZXNzYWdlczpcbiAqIFRoZSBmaXJzdCBpcyBpdHMgc2V0dXAgZnJvbSB0aGUgbWFuYWdlciwgd2hpY2ggaXQgdXNlcyBmb3IgY29uZmlndXJhdGlvbi5cbiAqIFRoZSBzZWNvbmQgaXMgZnJvbSB0aGUgbW9kdWxlIGNvbnRyb2xsZXIgKGZkb20ucG9ydC5Nb2R1bGUpLCB3aGljaCBwcm92aWRlc1xuICogdGhlIG1hbmlmZXN0IGluZm8gZm9yIHRoZSBtb2R1bGUuXG4gKiBAbWV0aG9kIG9uTWVzc2FnZVxuICogQHBhcmFtIHtTdHJpbmd9IGZsb3cgVGhlIGRldGluYXRpb24gb2YgdGhlIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAqL1xuTW9kdWxlSW50ZXJuYWwucHJvdG90eXBlLm9uTWVzc2FnZSA9IGZ1bmN0aW9uIChmbG93LCBtZXNzYWdlKSB7XG4gIGlmIChmbG93ID09PSAnY29udHJvbCcpIHtcbiAgICBpZiAoIXRoaXMuY29udHJvbENoYW5uZWwgJiYgbWVzc2FnZS5jaGFubmVsKSB7XG4gICAgICB0aGlzLmNvbnRyb2xDaGFubmVsID0gbWVzc2FnZS5jaGFubmVsO1xuICAgICAgdXRpbC5taXhpbih0aGlzLmNvbmZpZywgbWVzc2FnZS5jb25maWcpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChmbG93ID09PSAnZGVmYXVsdCcgJiYgIXRoaXMuYXBwSWQpIHtcbiAgICAvLyBSZWNvdmVyIHRoZSBJRCBvZiB0aGlzIG1vZHVsZTpcbiAgICB0aGlzLnBvcnQgPSB0aGlzLm1hbmFnZXIuaHViLmdldERlc3RpbmF0aW9uKG1lc3NhZ2UuY2hhbm5lbCk7XG4gICAgdGhpcy5leHRlcm5hbENoYW5uZWwgPSBtZXNzYWdlLmNoYW5uZWw7XG4gICAgdGhpcy5hcHBJZCA9IG1lc3NhZ2UuYXBwSWQ7XG4gICAgdGhpcy5saW5lYWdlID0gbWVzc2FnZS5saW5lYWdlO1xuXG4gICAgdmFyIG9iamVjdHMgPSB0aGlzLm1hcFByb3hpZXMobWVzc2FnZS5tYW5pZmVzdCk7XG5cbiAgICB0aGlzLmdlbmVyYXRlRW52KG1lc3NhZ2UubWFuaWZlc3QsIG9iamVjdHMpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMubG9hZExpbmtzKG9iamVjdHMpO1xuICAgIH0uYmluZCh0aGlzKSkudGhlbih0aGlzLmxvYWRTY3JpcHRzLmJpbmQodGhpcywgbWVzc2FnZS5pZCxcbiAgICAgICAgbWVzc2FnZS5tYW5pZmVzdC5hcHAuc2NyaXB0KSkudGhlbihudWxsLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICB0aGlzLmRlYnVnLmVycm9yKCdDb3VsZCBub3Qgc2V0IHVwIG1vZHVsZSAnICsgdGhpcy5hcHBJZCArICc6ICcsIGVycik7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfSBlbHNlIGlmIChmbG93ID09PSAnZGVmYXVsdCcgJiYgdGhpcy5yZXF1ZXN0c1ttZXNzYWdlLmlkXSkge1xuICAgIHRoaXMucmVxdWVzdHNbbWVzc2FnZS5pZF0obWVzc2FnZS5kYXRhKTtcbiAgICBkZWxldGUgdGhpcy5yZXF1ZXN0c1ttZXNzYWdlLmlkXTtcbiAgfSBlbHNlIGlmIChmbG93ID09PSAnZGVmYXVsdCcgJiYgbWVzc2FnZS50eXBlID09PSAnbWFuaWZlc3QnKSB7XG4gICAgdGhpcy5lbWl0KCdtYW5pZmVzdCcsIG1lc3NhZ2UpO1xuICAgIHRoaXMudXBkYXRlTWFuaWZlc3QobWVzc2FnZS5uYW1lLCBtZXNzYWdlLm1hbmlmZXN0KTtcbiAgfSBlbHNlIGlmIChmbG93ID09PSAnZGVmYXVsdCcgJiYgbWVzc2FnZS50eXBlID09PSAnQ29ubmVjdGlvbicpIHtcbiAgICAvLyBNdWx0aXBsZSBjb25uZWN0aW9ucyBjYW4gYmUgbWFkZSB0byB0aGUgZGVmYXVsdCBwcm92aWRlci5cbiAgICBpZiAobWVzc2FnZS5hcGkgJiYgdGhpcy5wcm92aWRlcnNbbWVzc2FnZS5hcGldKSB7XG4gICAgICB0aGlzLm1hbmFnZXIuY3JlYXRlTGluayh0aGlzLnByb3ZpZGVyc1ttZXNzYWdlLmFwaV0sIG1lc3NhZ2UuY2hhbm5lbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3J0LCBtZXNzYWdlLmNoYW5uZWwpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5kZWZhdWx0UG9ydCAmJlxuICAgICAgICAgICAgICAgKG1lc3NhZ2UuYXBpID09PSB0aGlzLmRlZmF1bHRQb3J0LmFwaSB8fCAhbWVzc2FnZS5hcGkpKSB7XG4gICAgICB0aGlzLm1hbmFnZXIuY3JlYXRlTGluayh0aGlzLmRlZmF1bHRQb3J0LCBtZXNzYWdlLmNoYW5uZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcnQsIG1lc3NhZ2UuY2hhbm5lbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25jZSgnc3RhcnQnLCB0aGlzLm9uTWVzc2FnZS5iaW5kKHRoaXMsIGZsb3csIG1lc3NhZ2UpKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogR2V0IGEgdGV4dHVhbCBkZXNjcmlwdGlvbiBvZiB0aGlzIFBvcnQuXG4gKiBAbWV0aG9kIHRvU3RyaW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9IGEgZGVzY3JpcHRpb24gb2YgdGhpcyBQb3J0LlxuICovXG5Nb2R1bGVJbnRlcm5hbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBcIltFbnZpcm9ubWVudCBIZWxwZXJdXCI7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlIGFuIGV4dGVybmFseSB2aXNpc2JsZSBuYW1lc3BhY2VcbiAqIEBtZXRob2QgZ2VuZXJhdGVFbnZcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYW5pZmVzdCBUaGUgbWFuaWZlc3Qgb2YgdGhlIG1vZHVsZS5cbiAqIEBwYXJhbSB7T2JqZWN0W119IGl0ZW1zIE90aGVyIGludGVyZmFjZXMgdG8gbG9hZC5cbiAqIEByZXR1cm5zIHtQcm9taXNlfSBBIHByb21pc2Ugd2hlbiB0aGUgZXh0ZXJuYWwgbmFtZXNwYWNlIGlzIHZpc2libGUuXG4gKiBAcHJpdmF0ZVxuICovXG5Nb2R1bGVJbnRlcm5hbC5wcm90b3R5cGUuZ2VuZXJhdGVFbnYgPSBmdW5jdGlvbiAobWFuaWZlc3QsIGl0ZW1zKSB7XG4gIHJldHVybiB0aGlzLmJpbmRlci5iaW5kRGVmYXVsdCh0aGlzLnBvcnQsIHRoaXMuYXBpLCBtYW5pZmVzdCwgdHJ1ZSkudGhlbihcbiAgICBmdW5jdGlvbiAoYmluZGluZykge1xuICAgICAgdmFyIGkgPSAwO1xuICAgICAgYmluZGluZy5wb3J0LmFwaSA9IGJpbmRpbmcuZXh0ZXJuYWwuYXBpO1xuICAgICAgdGhpcy5kZWZhdWx0UG9ydCA9IGJpbmRpbmcucG9ydDtcbiAgICAgIGlmIChiaW5kaW5nLmV4dGVybmFsLmFwaSkge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBpZiAoaXRlbXNbaV0ubmFtZSA9PT0gYmluZGluZy5leHRlcm5hbC5hcGkgJiYgaXRlbXNbaV0uZGVmLnByb3ZpZGVzKSB7XG4gICAgICAgICAgICBpdGVtcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuY29uZmlnLmdsb2JhbC5mcmVlZG9tID0gYmluZGluZy5leHRlcm5hbDtcbiAgICB9LmJpbmQodGhpcylcbiAgKTtcbn07XG5cbi8qKlxuICogQXR0YWNoIGEgcHJveHkgdG8gdGhlIGV4dGVybmFsbHkgdmlzaWJsZSBuYW1lc3BhY2UuXG4gKiBAbWV0aG9kIGF0dGFjaFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIHByb3h5LlxuICogQHBhcmFtIHtCb29sZWFufSBwcm92aWRlcyBJZiB0aGlzIHByb3h5IGlzIGEgcHJvdmlkZXIuXG4gKiBAcGFyYW0ge1Byb3h5SW50ZXJmYWNlfSBwcm94eSBUaGUgcHJveHkgdG8gYXR0YWNoLlxuICogQHBhcmFtIHtTdHJpbmd9IGFwaSBUaGUgQVBJIHRoZSBwcm94eSBpbXBsZW1lbnRzLlxuICogQHByaXZhdGUuXG4gKi9cbk1vZHVsZUludGVybmFsLnByb3RvdHlwZS5hdHRhY2ggPSBmdW5jdGlvbiAobmFtZSwgcHJvdmlkZXMsIHByb3h5KSB7XG4gIHZhciBleHAgPSB0aGlzLmNvbmZpZy5nbG9iYWwuZnJlZWRvbTtcbiAgXG4gIGlmIChwcm92aWRlcykge1xuICAgIHRoaXMucHJvdmlkZXJzW25hbWVdID0gcHJveHkucG9ydDtcbiAgfVxuXG4gIGlmICghZXhwW25hbWVdKSB7XG4gICAgZXhwW25hbWVdID0gcHJveHkuZXh0ZXJuYWw7XG4gICAgaWYgKHRoaXMubWFuaWZlc3RzW25hbWVdKSB7XG4gICAgICBleHBbbmFtZV0ubWFuaWZlc3QgPSB0aGlzLm1hbmlmZXN0c1tuYW1lXTtcbiAgICB9XG4gIH1cblxuICB0aGlzLnBlbmRpbmdQb3J0cyAtPSAxO1xuICBpZiAodGhpcy5wZW5kaW5nUG9ydHMgPT09IDApIHtcbiAgICB0aGlzLmVtaXQoJ3N0YXJ0Jyk7XG4gIH1cbn07XG5cbi8qKlxuICogUmVxdWVzdCBhIHNldCBvZiBwcm94eSBpbnRlcmZhY2VzLCBhbmQgYmluZCB0aGVtIHRvIHRoZSBleHRlcm5hbFxuICogbmFtZXNwYWNlLlxuICogQG1ldGhvZCBsb2FkTGlua3NcbiAqIEBwYXJhbSB7T2JqZWN0W119IGl0ZW1zIERlc2NyaXB0b3JzIG9mIHRoZSBwcm94eSBwb3J0cyB0byBsb2FkLlxuICogQHByaXZhdGVcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBQcm9taXNlIGZvciB3aGVuIGFsbCBsaW5rcyBhcmUgbG9hZGVkLlxuICovXG4vL1RPRE8od2lsbHNjb3R0KTogcHJvbWlzZSBzaG91bGQgYmUgY2hhaW5lZCwgcmF0aGVyIHRoYW4gZ29pbmcgdGhyb3VnaCBldmVudHMuXG5Nb2R1bGVJbnRlcm5hbC5wcm90b3R5cGUubG9hZExpbmtzID0gZnVuY3Rpb24gKGl0ZW1zKSB7XG4gIHZhciBpLCBwcm94eSwgcHJvdmlkZXIsIGNvcmUsXG4gICAgbWFuaWZlc3RQcmVkaWNhdGUgPSBmdW5jdGlvbiAobmFtZSwgZmxvdywgbXNnKSB7XG4gICAgICByZXR1cm4gZmxvdyA9PT0gJ21hbmlmZXN0JyAmJiBtc2cubmFtZSA9PT0gbmFtZTtcbiAgICB9LFxuICAgIG9uTWFuaWZlc3QgPSBmdW5jdGlvbiAoaXRlbSwgbXNnKSB7XG4gICAgICB2YXIgZGVmaW5pdGlvbiA9IHtcbiAgICAgICAgbmFtZTogaXRlbS5hcGlcbiAgICAgIH07XG4gICAgICBpZiAoIW1zZy5tYW5pZmVzdC5hcGkgfHwgIW1zZy5tYW5pZmVzdC5hcGlbaXRlbS5hcGldKSB7XG4gICAgICAgIGRlZmluaXRpb24uZGVmaW5pdGlvbiA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWZpbml0aW9uLmRlZmluaXRpb24gPSBtc2cubWFuaWZlc3QuYXBpW2l0ZW0uYXBpXTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYmluZGVyLmdldEV4dGVybmFsKHRoaXMucG9ydCwgaXRlbS5uYW1lLCBkZWZpbml0aW9uKS50aGVuKFxuICAgICAgICB0aGlzLmF0dGFjaC5iaW5kKHRoaXMsIGl0ZW0ubmFtZSwgZmFsc2UpXG4gICAgICApO1xuICAgIH0uYmluZCh0aGlzKSxcbiAgICBwcm9taXNlID0gbmV3IFByb21pc2VDb21wYXQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdGhpcy5vbmNlKCdzdGFydCcsIHJlc29sdmUpO1xuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgZm9yIChpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGl0ZW1zW2ldLmFwaSAmJiAhaXRlbXNbaV0uZGVmKSB7XG4gICAgICBpZiAodGhpcy5tYW5pZmVzdHNbaXRlbXNbaV0ubmFtZV0pIHtcbiAgICAgICAgb25NYW5pZmVzdChpdGVtc1tpXSwge1xuICAgICAgICAgIG1hbmlmZXN0OiB0aGlzLm1hbmlmZXN0c1tpdGVtc1tpXS5uYW1lXVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub25jZShtYW5pZmVzdFByZWRpY2F0ZS5iaW5kKHt9LCBpdGVtc1tpXS5uYW1lKSxcbiAgICAgICAgICAgICAgICAgIG9uTWFuaWZlc3QuYmluZCh0aGlzLCBpdGVtc1tpXSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJpbmRlci5nZXRFeHRlcm5hbCh0aGlzLnBvcnQsIGl0ZW1zW2ldLm5hbWUsIGl0ZW1zW2ldLmRlZikudGhlbihcbiAgICAgICAgdGhpcy5hdHRhY2guYmluZCh0aGlzLCBpdGVtc1tpXS5uYW1lLCBpdGVtc1tpXS5kZWYgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtc1tpXS5kZWYucHJvdmlkZXMpXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLnBlbmRpbmdQb3J0cyArPSAxO1xuICB9XG4gIFxuICAvLyBBbGxvdyByZXNvbHV0aW9uIG9mIGZpbGVzIGJ5IHBhcmVudC5cbiAgdGhpcy5tYW5hZ2VyLnJlc291cmNlLmFkZFJlc29sdmVyKGZ1bmN0aW9uIChtYW5pZmVzdCwgdXJsLCByZXNvbHZlKSB7XG4gICAgdmFyIGlkID0gdXRpbC5nZXRJZCgpO1xuICAgIHRoaXMucmVxdWVzdHNbaWRdID0gcmVzb2x2ZTtcbiAgICB0aGlzLmVtaXQodGhpcy5leHRlcm5hbENoYW5uZWwsIHtcbiAgICAgIHR5cGU6ICdyZXNvbHZlJyxcbiAgICAgIGlkOiBpZCxcbiAgICAgIGRhdGE6IHVybFxuICAgIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9LmJpbmQodGhpcykpO1xuXG4gIC8vIEF0dGFjaCBDb3JlLlxuICB0aGlzLnBlbmRpbmdQb3J0cyArPSAxO1xuXG4gIGNvcmUgPSB0aGlzLmFwaS5nZXQoJ2NvcmUnKS5kZWZpbml0aW9uO1xuICBwcm92aWRlciA9IG5ldyBQcm92aWRlcihjb3JlLCB0aGlzLmRlYnVnKTtcbiAgdGhpcy5tYW5hZ2VyLmdldENvcmUoZnVuY3Rpb24gKENvcmVQcm92KSB7XG4gICAgbmV3IENvcmVQcm92KHRoaXMubWFuYWdlcikuc2V0SWQodGhpcy5saW5lYWdlKTtcbiAgICBwcm92aWRlci5nZXRJbnRlcmZhY2UoKS5wcm92aWRlQXN5bmNocm9ub3VzKENvcmVQcm92KTtcbiAgfS5iaW5kKHRoaXMpKTtcblxuICB0aGlzLmVtaXQodGhpcy5jb250cm9sQ2hhbm5lbCwge1xuICAgIHR5cGU6ICdMaW5rIHRvIGNvcmUnLFxuICAgIHJlcXVlc3Q6ICdsaW5rJyxcbiAgICBuYW1lOiAnY29yZScsXG4gICAgdG86IHByb3ZpZGVyXG4gIH0pO1xuICBcbiAgdGhpcy5iaW5kZXIuZ2V0RXh0ZXJuYWwocHJvdmlkZXIsICdkZWZhdWx0Jywge1xuICAgIG5hbWU6ICdjb3JlJyxcbiAgICBkZWZpbml0aW9uOiBjb3JlXG4gIH0pLnRoZW4oXG4gICAgdGhpcy5hdHRhY2guYmluZCh0aGlzLCAnY29yZScsIGZhbHNlKVxuICApO1xuXG5cbi8vICBwcm94eSA9IG5ldyBQcm94eShBcGlJbnRlcmZhY2UuYmluZCh7fSwgY29yZSksIHRoaXMuZGVidWcpO1xuLy8gIHRoaXMubWFuYWdlci5jcmVhdGVMaW5rKHByb3ZpZGVyLCAnZGVmYXVsdCcsIHByb3h5KTtcbi8vICB0aGlzLmF0dGFjaCgnY29yZScsIHtwb3J0OiBwciwgZXh0ZXJuYWw6IHByb3h5fSk7XG5cbiAgaWYgKHRoaXMucGVuZGluZ1BvcnRzID09PSAwKSB7XG4gICAgdGhpcy5lbWl0KCdzdGFydCcpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG4vKipcbiAqIFVwZGF0ZSB0aGUgZXhwb3J0ZWQgbWFuaWZlc3Qgb2YgYSBkZXBlbmRlbmN5LlxuICogU2V0cyBpdCBpbnRlcm5hbGx5IGlmIG5vdCB5ZXQgZXhwb3J0ZWQsIG9yIGF0dGFjaGVzIHRoZSBwcm9wZXJ0eSBpZiBpdFxuICogaXMgbG9hZGVkIGFmdGVyIHRoZSBtb2R1bGUgaGFzIHN0YXJ0ZWQgKHdlIGRvbid0IGRlbGF5IHN0YXJ0IHRvIHJldHJlaXZlXG4gKiB0aGUgbWFuaWZlc3Qgb2YgdGhlIGRlcGVuZGVuY3kuKVxuICogQG1ldGhvZCB1cGRhdGVNYW5pZmVzdFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIERlcGVuZGVuY3lcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYW5pZmVzdCBUaGUgbWFuaWZlc3Qgb2YgdGhlIGRlcGVuZGVuY3lcbiAqL1xuTW9kdWxlSW50ZXJuYWwucHJvdG90eXBlLnVwZGF0ZU1hbmlmZXN0ID0gZnVuY3Rpb24gKG5hbWUsIG1hbmlmZXN0KSB7XG4gIHZhciBleHAgPSB0aGlzLmNvbmZpZy5nbG9iYWwuZnJlZWRvbTtcblxuICBpZiAoZXhwICYmIGV4cFtuYW1lXSkge1xuICAgIGV4cFtuYW1lXS5tYW5pZmVzdCA9IG1hbmlmZXN0O1xuICB9IGVsc2Uge1xuICAgIHRoaXMubWFuaWZlc3RzW25hbWVdID0gbWFuaWZlc3Q7XG4gIH1cbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoaWNoIHByb3h5IHBvcnRzIHNob3VsZCBiZSBleHBvc2VkIGJ5IHRoaXMgbW9kdWxlLlxuICogQG1ldGhvZCBtYXBQcm94aWVzXG4gKiBAcGFyYW0ge09iamVjdH0gbWFuaWZlc3QgdGhlIG1vZHVsZSBKU09OIG1hbmlmZXN0LlxuICogQHJldHVybiB7T2JqZWN0W119IHByb3h5IGRlc2NyaXB0b3JzIGRlZmluZWQgaW4gdGhlIG1hbmlmZXN0LlxuICovXG5Nb2R1bGVJbnRlcm5hbC5wcm90b3R5cGUubWFwUHJveGllcyA9IGZ1bmN0aW9uIChtYW5pZmVzdCkge1xuICB2YXIgcHJveGllcyA9IFtdLCBzZWVuID0gWydjb3JlJ10sIGksIG9iajtcbiAgXG4gIGlmIChtYW5pZmVzdC5wZXJtaXNzaW9ucykge1xuICAgIGZvciAoaSA9IDA7IGkgPCBtYW5pZmVzdC5wZXJtaXNzaW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgb2JqID0ge1xuICAgICAgICBuYW1lOiBtYW5pZmVzdC5wZXJtaXNzaW9uc1tpXSxcbiAgICAgICAgZGVmOiB1bmRlZmluZWRcbiAgICAgIH07XG4gICAgICBvYmouZGVmID0gdGhpcy5hcGkuZ2V0KG9iai5uYW1lKTtcbiAgICAgIGlmIChzZWVuLmluZGV4T2Yob2JqLm5hbWUpIDwgMCAmJiBvYmouZGVmKSB7XG4gICAgICAgIHByb3hpZXMucHVzaChvYmopO1xuICAgICAgICBzZWVuLnB1c2gob2JqLm5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgaWYgKG1hbmlmZXN0LmRlcGVuZGVuY2llcykge1xuICAgIHV0aWwuZWFjaFByb3AobWFuaWZlc3QuZGVwZW5kZW5jaWVzLCBmdW5jdGlvbiAoZGVzYywgbmFtZSkge1xuICAgICAgb2JqID0ge1xuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBhcGk6IGRlc2MuYXBpXG4gICAgICB9O1xuICAgICAgaWYgKHNlZW4uaW5kZXhPZihuYW1lKSA8IDApIHtcbiAgICAgICAgaWYgKGRlc2MuYXBpKSB7XG4gICAgICAgICAgb2JqLmRlZiA9IHRoaXMuYXBpLmdldChkZXNjLmFwaSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJveGllcy5wdXNoKG9iaik7XG4gICAgICAgIHNlZW4ucHVzaChuYW1lKTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG4gIFxuICBpZiAobWFuaWZlc3QucHJvdmlkZXMpIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbWFuaWZlc3QucHJvdmlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIG9iaiA9IHtcbiAgICAgICAgbmFtZTogbWFuaWZlc3QucHJvdmlkZXNbaV0sXG4gICAgICAgIGRlZjogdW5kZWZpbmVkXG4gICAgICB9O1xuICAgICAgb2JqLmRlZiA9IHRoaXMuYXBpLmdldChvYmoubmFtZSk7XG4gICAgICBpZiAob2JqLmRlZikge1xuICAgICAgICBvYmouZGVmLnByb3ZpZGVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAobWFuaWZlc3QuYXBpICYmIG1hbmlmZXN0LmFwaVtvYmoubmFtZV0pIHtcbiAgICAgICAgb2JqLmRlZiA9IHtcbiAgICAgICAgICBuYW1lOiBvYmoubmFtZSxcbiAgICAgICAgICBkZWZpbml0aW9uOiBtYW5pZmVzdC5hcGlbb2JqLm5hbWVdLFxuICAgICAgICAgIHByb3ZpZGVzOiB0cnVlXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRlYnVnLndhcm4oJ01vZHVsZSB3aWxsIG5vdCBwcm92aWRlIFwiJyArIG9iai5uYW1lICtcbiAgICAgICAgICAnXCIsIHNpbmNlIG5vIGRlY2xhcmF0aW9uIGNhbiBiZSBmb3VuZC4nKTtcbiAgICAgICAgLypqc2xpbnQgY29udGludWU6dHJ1ZSovXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgLypqc2xpbnQgY29udGludWU6ZmFsc2UqL1xuICAgICAgaWYgKHNlZW4uaW5kZXhPZihvYmoubmFtZSkgPCAwKSB7XG4gICAgICAgIHByb3hpZXMucHVzaChvYmopO1xuICAgICAgICBzZWVuLnB1c2gob2JqLm5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm94aWVzO1xufTtcblxuLyoqXG4gKiBMb2FkIGV4dGVybmFsIHNjcmlwdHMgaW50byB0aGlzIG5hbWVzcGFjZS5cbiAqIEBtZXRob2QgbG9hZFNjcmlwdHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBmcm9tIFRoZSBVUkwgb2YgdGhpcyBtb2R1bGVzJ3MgbWFuaWZlc3QuXG4gKiBAcGFyYW0ge1N0cmluZ1tdfSBzY3JpcHRzIFRoZSBVUkxzIG9mIHRoZSBzY3JpcHRzIHRvIGxvYWQuXG4gKi9cbk1vZHVsZUludGVybmFsLnByb3RvdHlwZS5sb2FkU2NyaXB0cyA9IGZ1bmN0aW9uIChmcm9tLCBzY3JpcHRzKSB7XG4gIC8vIFRPRE8oc2Fsb21lZ2VvKTogYWRkIGEgdGVzdCBmb3IgZmFpbHVyZS5cbiAgdmFyIGltcG9ydGVyID0gZnVuY3Rpb24gKHNjcmlwdCwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuY29uZmlnLmdsb2JhbC5pbXBvcnRTY3JpcHRzKHNjcmlwdCk7XG4gICAgICByZXNvbHZlKHRydWUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJlamVjdChlKTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKSxcbiAgICBzY3JpcHRzX2NvdW50LFxuICAgIGxvYWQ7XG4gIGlmICh0eXBlb2Ygc2NyaXB0cyA9PT0gJ3N0cmluZycpIHtcbiAgICBzY3JpcHRzX2NvdW50ID0gMTtcbiAgfSBlbHNlIHtcbiAgICBzY3JpcHRzX2NvdW50ID0gc2NyaXB0cy5sZW5ndGg7XG4gIH1cblxuICBsb2FkID0gZnVuY3Rpb24gKG5leHQpIHtcbiAgICBpZiAobmV4dCA9PT0gc2NyaXB0c19jb3VudCkge1xuICAgICAgdGhpcy5lbWl0KHRoaXMuZXh0ZXJuYWxDaGFubmVsLCB7XG4gICAgICAgIHR5cGU6IFwicmVhZHlcIlxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHNjcmlwdDtcbiAgICBpZiAodHlwZW9mIHNjcmlwdHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBzY3JpcHQgPSBzY3JpcHRzO1xuICAgIH0gZWxzZSB7XG4gICAgICBzY3JpcHQgPSBzY3JpcHRzW25leHRdO1xuICAgIH1cblxuICAgIHRoaXMubWFuYWdlci5yZXNvdXJjZS5nZXQoZnJvbSwgc2NyaXB0KS50aGVuKGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgIHRoaXMudHJ5TG9hZChpbXBvcnRlciwgdXJsKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbG9hZChuZXh0ICsgMSk7XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH0uYmluZCh0aGlzKTtcblxuXG5cbiAgaWYgKCF0aGlzLmNvbmZpZy5nbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgIGltcG9ydGVyID0gZnVuY3Rpb24gKHVybCwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgc2NyaXB0ID0gdGhpcy5jb25maWcuZ2xvYmFsLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgc2NyaXB0LnNyYyA9IHVybDtcbiAgICAgIHNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgcmVzb2x2ZSwgdHJ1ZSk7XG4gICAgICB0aGlzLmNvbmZpZy5nbG9iYWwuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH0uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGxvYWQoMCk7XG59O1xuXG4vKipcbiAqIEF0dGVtcHQgdG8gbG9hZCByZXNvbHZlZCBzY3JpcHRzIGludG8gdGhlIG5hbWVzcGFjZS5cbiAqIEBtZXRob2QgdHJ5TG9hZFxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGltcG9ydGVyIFRoZSBhY3R1YWwgaW1wb3J0IGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ1tdfSB1cmxzIFRoZSByZXNvdmVkIFVSTHMgdG8gbG9hZC5cbiAqIEByZXR1cm5zIHtQcm9taXNlfSBjb21wbGV0aW9uIG9mIGxvYWRcbiAqL1xuTW9kdWxlSW50ZXJuYWwucHJvdG90eXBlLnRyeUxvYWQgPSBmdW5jdGlvbiAoaW1wb3J0ZXIsIHVybCkge1xuICByZXR1cm4gbmV3IFByb21pc2VDb21wYXQoaW1wb3J0ZXIuYmluZCh7fSwgdXJsKSkudGhlbihmdW5jdGlvbiAodmFsKSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICB0aGlzLmRlYnVnLndhcm4oZS5zdGFjayk7XG4gICAgdGhpcy5kZWJ1Zy5lcnJvcihcIkVycm9yIGxvYWRpbmcgXCIgKyB1cmwsIGUpO1xuICAgIHRoaXMuZGVidWcuZXJyb3IoXCJJZiB0aGUgc3RhY2sgdHJhY2UgaXMgbm90IHVzZWZ1bCwgc2VlIGh0dHBzOi8vXCIgK1xuICAgICAgICBcImdpdGh1Yi5jb20vZnJlZWRvbWpzL2ZyZWVkb20vd2lraS9EZWJ1Z2dpbmctU2NyaXB0LVBhcnNlLUVycm9yc1wiKTtcbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTW9kdWxlSW50ZXJuYWw7XG4iLCIvKmdsb2JhbHMgWE1MSHR0cFJlcXVlc3QgKi9cbi8qanNsaW50IGluZGVudDoyLHdoaXRlOnRydWUsbm9kZTp0cnVlLHNsb3BweTp0cnVlICovXG52YXIgUHJvbWlzZUNvbXBhdCA9IHJlcXVpcmUoJ2VzNi1wcm9taXNlJykuUHJvbWlzZTtcbnZhciBNb2R1bGUgPSByZXF1aXJlKCcuL21vZHVsZScpO1xudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuLyoqXG4gKiBUaGUgUG9saWN5IHJlZ2lzdHJ5IGZvciBmcmVlZG9tLmpzLiAgVXNlZCB0byBsb29rIHVwIG1vZHVsZXMgYW5kIHByb3ZpZGVcbiAqIG1pZ3JhdGlvbiBhbmQgY29hbGxlc2luZyBvZiBleGVjdXRpb24uXG4gKiBAQ2xhc3MgUG9saWN5XG4gKiBAcGFyYW0ge01hbmFnZXJ9IG1hbmFnZXIgVGhlIG1hbmFnZXIgb2YgdGhlIGFjdGl2ZSBydW50aW1lLlxuICogQHBhcmFtIHtSZXNvdXJjZX0gcmVzb3VyY2UgVGhlIHJlc291cmNlIGxvYWRlciBvZiB0aGUgYWN0aXZlIHJ1bnRpbWUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBsb2NhbCBjb25maWcuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xudmFyIFBvbGljeSA9IGZ1bmN0aW9uKG1hbmFnZXIsIHJlc291cmNlLCBjb25maWcpIHtcbiAgdGhpcy5hcGkgPSBtYW5hZ2VyLmFwaTtcbiAgdGhpcy5kZWJ1ZyA9IG1hbmFnZXIuZGVidWc7XG4gIHRoaXMubG9jYXRpb24gPSBjb25maWcubG9jYXRpb247XG4gIHRoaXMucmVzb3VyY2UgPSByZXNvdXJjZTtcblxuICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgdGhpcy5ydW50aW1lcyA9IFtdO1xuICB0aGlzLnBvbGljaWVzID0gW107XG4gIHRoaXMucGVuZGluZyA9IHt9O1xuICB1dGlsLmhhbmRsZUV2ZW50cyh0aGlzKTtcblxuICB0aGlzLmFkZChtYW5hZ2VyLCBjb25maWcucG9saWN5KTtcbiAgdGhpcy5ydW50aW1lc1swXS5sb2NhbCA9IHRydWU7XG59O1xuXG4vKipcbiAqIFRoZSBwb2xpY3kgYSBydW50aW1lIGlzIGV4cGVjdGVkIHRvIGhhdmUgdW5sZXNzIGl0IHNwZWNpZmllc1xuICogb3RoZXJ3aXNlLlxuICogVE9ETzogY29uc2lkZXIgbWFraW5nIHN0YXRpY1xuICogQHByb3BlcnR5IGRlZmF1bHRQb2xpY3lcbiAqL1xuUG9saWN5LnByb3RvdHlwZS5kZWZhdWx0UG9saWN5ID0ge1xuICBiYWNrZ3JvdW5kOiBmYWxzZSwgLy8gQ2FuIHRoaXMgcnVudGltZSBydW4gJ2JhY2tncm91bmQnIG1vZHVsZXM/XG4gIGludGVyYWN0aXZlOiB0cnVlIC8vIElzIHRoZXJlIGEgdmlldyBhc3NvY2lhdGVkIHdpdGggdGhpcyBydW50aW1lP1xuICAvLyBUT0RPOiByZW1haW5pbmcgcnVudGltZSBwb2xpY3kuXG59O1xuXG4vKipcbiAqIFRoZSBjb25zdHJhaW50cyBhIGNvZGUgbW9kdWxlcyBpcyBleHBlY3RlZCB0byBoYXZlIHVubGVzcyBpdCBzcGVjaWZpZXNcbiAqIG90aGVyd2lzZS5cbiAqIFRPRE86IGNvbnNpZGVyIG1ha2luZyBzdGF0aWNcbiAqIEBwcm9wZXJ0eSBkZWZhdWx0Q29uc3RyYWludHNcbiAqL1xuUG9saWN5LnByb3RvdHlwZS5kZWZhdWx0Q29uc3RyYWludHMgPSB7XG4gIGlzb2xhdGlvbjogXCJhbHdheXNcIiwgLy8gdmFsdWVzOiBhbHdheXMsIGFwcCwgbmV2ZXJcbiAgcGxhY2VtZW50OiBcImxvY2FsXCIgLy8gdmFsdWVzOiBsb2NhbCwgc3RhYmxlLCByZWR1bmRhbnRcbiAgLy8gVE9ETzogcmVtYWluaW5nIGNvbnN0cmFpbnRzLCBleHByZXNzIHBsYXRmb3JtLXNwZWNpZmljIGRlcGVuZGVuY2llcy5cbn07XG5cbi8qKlxuICogUmVzb2x2ZSBhIG1vZHVsZSBmcm9tIGl0cyBjYW5vbmljYWwgVVJMLlxuICogUmVwb25kcyB3aXRoIHRoZSBwcm9taXNlIG9mIGEgcG9ydCByZXByZXNlbnRpbmcgdGhlIG1vZHVsZSwgXG4gKiBAbWV0aG9kIGdldFxuICogQHBhcmFtIHtTdHJpbmdbXX0gbGluZWFnZSBUaGUgbGluZWFnZSBvZiB0aGUgcmVxdWVzdGluZyBtb2R1bGUuXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgVGhlIGNhbm9uaWNhbCBJRCBvZiB0aGUgbW9kdWxlIHRvIGdldC5cbiAqIEByZXR1cm5zIHtQcm9taXNlfSBBIHByb21pc2UgZm9yIHRoZSBsb2NhbCBwb3J0IHRvd2FyZHMgdGhlIG1vZHVsZS5cbiAqL1xuUG9saWN5LnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihsaW5lYWdlLCBpZCkge1xuICBcbiAgLy8gTWFrZSBzdXJlIHRoYXQgYSBtb2R1bGUgaXNuJ3QgZ2V0dGluZyBsb2NhdGVkIHR3aWNlIGF0IHRoZSBzYW1lIHRpbWUuXG4gIC8vIFRoaXMgaXMgcmVzb2x2ZWQgYnkgZGVsYXlpbmcgaWYgaXQgdW50aWwgd2Ugc2VlIGl0IGluIGEgJ21vZHVsZUFkZCcgZXZlbnQuXG4gIGlmICh0aGlzLnBlbmRpbmdbaWRdKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlQ29tcGF0KGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHRoaXMub25jZSgncGxhY2VkJywgZnVuY3Rpb24obCwgaSkge1xuICAgICAgICB0aGlzLmdldChsLCBpKS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9LmJpbmQodGhpcywgbGluZWFnZSwgaWQpKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMucGVuZGluZ1tpZF0gPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMubG9hZE1hbmlmZXN0KGlkKS50aGVuKGZ1bmN0aW9uKG1hbmlmZXN0KSB7XG4gICAgdmFyIGNvbnN0cmFpbnRzID0gdGhpcy5vdmVybGF5KHRoaXMuZGVmYXVsdENvbnN0cmFpbnRzLCBtYW5pZmVzdC5jb25zdHJhaW50cyksXG4gICAgICAgIHJ1bnRpbWUgPSB0aGlzLmZpbmREZXN0aW5hdGlvbihsaW5lYWdlLCBpZCwgY29uc3RyYWludHMpLFxuICAgICAgICBwb3J0SWQ7XG4gICAgaWYgKHJ1bnRpbWUubG9jYWwpIHtcbiAgICAgIHBvcnRJZCA9IHRoaXMuaXNSdW5uaW5nKHJ1bnRpbWUsIGlkLCBsaW5lYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdHJhaW50cy5pc29sYXRpb24gIT09ICduZXZlcicpO1xuICAgICAgaWYoY29uc3RyYWludHMuaXNvbGF0aW9uICE9PSAnYWx3YXlzJyAmJiBwb3J0SWQpIHtcbiAgICAgICAgdGhpcy5kZWJ1Zy5pbmZvKCdSZXVzZWQgcG9ydCAnICsgcG9ydElkKTtcbiAgICAgICAgZGVsZXRlIHRoaXMucGVuZGluZ1tpZF07XG4gICAgICAgIHRoaXMuZW1pdCgncGxhY2VkJyk7XG4gICAgICAgIHJldHVybiBydW50aW1lLm1hbmFnZXIuZ2V0UG9ydChwb3J0SWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNb2R1bGUoaWQsIG1hbmlmZXN0LCBsaW5lYWdlLCB0aGlzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVE9ETzogQ3JlYXRlIGEgcG9ydCB0byBnbyB0byB0aGUgcmVtb3RlIHJ1bnRpbWUuXG4gICAgICB0aGlzLmRlYnVnLmVycm9yKCdVbmV4cGVjdGVkIGxvY2F0aW9uIHNlbGVjdGVkIGZvciBtb2R1bGUgcGxhY2VtZW50Jyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9LmJpbmQodGhpcyksIGZ1bmN0aW9uKGVycikge1xuICAgIHRoaXMuZGVidWcuZXJyb3IoJ1BvbGljeSBFcnJvciBSZXNvbHZpbmcgJyArIGlkLCBlcnIpO1xuICAgIHRocm93KGVycik7XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG4vKipcbiAqIEZpbmQgdGhlIHJ1bnRpbWUgZGVzdGluYXRpb24gZm9yIGEgbW9kdWxlIGdpdmVuIGl0cyBjb25zdHJhaW50cyBhbmQgdGhlXG4gKiBtb2R1bGUgY3JlYXRpbmcgaXQuXG4gKiBAbWV0aG9kIGZpbmREZXN0aW5hdGlvblxuICogQHBhcmFtIHtTdHJpbmdbXX0gbGluZWFnZSBUaGUgaWRlbnRpdHkgb2YgdGhlIG1vZHVsZSBjcmVhdGluZyB0aGlzIG1vZHVsZS5cbiAqIEBwYXJhbSB7U3RyaW5nXSBpZCBUaGUgY2Fub25pY2FsIHVybCBvZiB0aGUgbW9kdWxlXG4gKiBAcGFyYW0ge09iamVjdH0gY29uc3RyYWludHMgQ29uc3RyYWludHMgZm9yIHRoZSBtb2R1bGUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZWxlbWVudCBvZiB0aGlzLnJ1bnRpbWVzIHdoZXJlIHRoZSBtb2R1bGUgc2hvdWxkIHJ1bi5cbiAqL1xuUG9saWN5LnByb3RvdHlwZS5maW5kRGVzdGluYXRpb24gPSBmdW5jdGlvbihsaW5lYWdlLCBpZCwgY29uc3RyYWludHMpIHtcbiAgdmFyIGk7XG5cbiAgLy8gU3RlcCAxOiBpZiBhbiBpbnN0YW5jZSBhbHJlYWR5IGV4aXN0cywgdGhlIG1cbiAgaWYgKGNvbnN0cmFpbnRzLmlzb2xhdGlvbiAhPT0gJ2Fsd2F5cycpIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5wb2xpY2llcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHRoaXMuaXNSdW5uaW5nKHRoaXMucnVudGltZXNbaV0sIGlkLCBsaW5lYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0cmFpbnRzLmlzb2xhdGlvbiAhPT0gJ25ldmVyJykpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucnVudGltZXNbaV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gU3RlcCAyOiBpZiB0aGUgbW9kdWxlIHdhbnRzIHN0YWJpbGl0eSwgaXQgbWF5IG5lZWQgdG8gYmUgcmVtb3RlLlxuICBpZiAoY29uc3RyYWludHMucGxhY2VtZW50ID09PSAnbG9jYWwnKSB7XG4gICAgcmV0dXJuIHRoaXMucnVudGltZXNbMF07XG4gIH0gZWxzZSBpZiAoY29uc3RyYWludHMucGxhY2VtZW50ID09PSAnc3RhYmxlJykge1xuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnBvbGljaWVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodGhpcy5wb2xpY2llc1tpXS5iYWNrZ3JvdW5kKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJ1bnRpbWVzW2ldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0ZXAgMzogaWYgdGhlIG1vZHVsZSBuZWVkcyBsb25nZXZpdHkgLyBpbnRlcmFjdGl2aXR5LCBpdCBtYXkgd2FudCB0byBiZSByZW1vdGUuXG4gIHJldHVybiB0aGlzLnJ1bnRpbWVzWzBdO1xufTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSBrbm93biBydW50aW1lIGlzIHJ1bm5pbmcgYW4gYXBwcm9wcmlhdGUgaW5zdGFuY2Ugb2YgYSBtb2R1bGUuXG4gKiBAbWV0aG9kIGlzUnVubmluZ1xuICogQHBhcmFtIHtPYmplY3R9IHJ1bnRpbWUgVGhlIHJ1bnRpbWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgVGhlIG1vZHVsZSB0byBsb29rIGZvci5cbiAqIEBwYXJhbSB7U3RyaW5nW119IGZyb20gVGhlIGlkZW50aWZpZXIgb2YgdGhlIHJlcXVlc3RpbmcgbW9kdWxlLlxuICogQHBhcmFtIHtCb29sZWFufSBmdWxsTWF0Y2ggSWYgdGhlIG1vZHVsZSBuZWVkcyB0byBiZSBpbiB0aGUgc2FtZSBhcHAuXG4gKiBAcmV0dXJucyB7U3RyaW5nfEJvb2xlYW59IFRoZSBNb2R1bGUgaWQgaWYgaXQgaXMgcnVubmluZywgb3IgZmFsc2UgaWYgbm90LlxuICovXG5Qb2xpY3kucHJvdG90eXBlLmlzUnVubmluZyA9IGZ1bmN0aW9uKHJ1bnRpbWUsIGlkLCBmcm9tLCBmdWxsTWF0Y2gpIHtcbiAgdmFyIGkgPSAwLCBqID0gMCwgb2theTtcbiAgZm9yIChpID0gMDsgaSA8IHJ1bnRpbWUubW9kdWxlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChmdWxsTWF0Y2ggJiYgcnVudGltZS5tb2R1bGVzW2ldLmxlbmd0aCA9PT0gZnJvbS5sZW5ndGggKyAxKSB7XG4gICAgICBva2F5ID0gdHJ1ZTtcbiAgICAgIGZvciAoaiA9IDA7IGogPCBmcm9tLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGlmIChydW50aW1lLm1vZHVsZXNbaV1baiArIDFdLmluZGV4T2YoZnJvbVtqXSkgIT09IDApIHtcbiAgICAgICAgICBva2F5ID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChydW50aW1lLm1vZHVsZXNbaV1bMF0uaW5kZXhPZihpZCkgIT09IDApIHtcbiAgICAgICAgb2theSA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAob2theSkge1xuICAgICAgICByZXR1cm4gcnVudGltZS5tb2R1bGVzW2ldWzBdO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWZ1bGxNYXRjaCAmJiBydW50aW1lLm1vZHVsZXNbaV1bMF0uaW5kZXhPZihpZCkgPT09IDApIHtcbiAgICAgIHJldHVybiBydW50aW1lLm1vZHVsZXNbaV1bMF07XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogR2V0IGEgcHJvbWlzZSBvZiB0aGUgbWFuaWZlc3QgZm9yIGEgbW9kdWxlIElELlxuICogQG1ldGhvZCBsb2FkTWFuaWZlc3RcbiAqIEBwYXJhbSB7U3RyaW5nfSBtYW5pZmVzdCBUaGUgY2Fub25pY2FsIElEIG9mIHRoZSBtYW5pZmVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFByb21pc2UgZm9yIHRoZSBqc29uIGNvbnRlbnRzIG9mIHRoZSBtYW5pZmVzdC5cbiAqL1xuUG9saWN5LnByb3RvdHlwZS5sb2FkTWFuaWZlc3QgPSBmdW5jdGlvbihtYW5pZmVzdCkge1xuICByZXR1cm4gdGhpcy5yZXNvdXJjZS5nZXRDb250ZW50cyhtYW5pZmVzdCkudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIHJlc3AgPSB7fTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XG4gICAgfSBjYXRjaChlcnIpIHtcbiAgICAgIHRoaXMuZGVidWcuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBcIiArIG1hbmlmZXN0ICsgXCI6IFwiICsgZXJyKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIE1hbmlmZXN0IEF2YWlsYWJsZVwiKTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG4vKipcbiAqIEFkZCBhIHJ1bnRpbWUgdG8ga2VlcCB0cmFjayBvZiBpbiB0aGlzIHBvbGljeS5cbiAqIEBtZXRob2QgYWRkXG4gKiBAcGFyYW0ge2Zkb20ucG9ydH0gcG9ydCBUaGUgcG9ydCB0byB1c2UgZm9yIG1vZHVsZSBsaWZldGltZSBpbmZvXG4gKiBAcGFyYW0ge09iamVjdH0gcG9saWN5IFRoZSBwb2xpY3kgb2YgdGhlIHJ1bnRpbWUuXG4gKi9cblBvbGljeS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24ocG9ydCwgcG9saWN5KSB7XG4gIHZhciBydW50aW1lID0ge1xuICAgIG1hbmFnZXI6IHBvcnQsXG4gICAgbW9kdWxlczogW11cbiAgfTtcbiAgdGhpcy5ydW50aW1lcy5wdXNoKHJ1bnRpbWUpO1xuICB0aGlzLnBvbGljaWVzLnB1c2godGhpcy5vdmVybGF5KHRoaXMuZGVmYXVsdFBvbGljeSwgcG9saWN5KSk7XG5cbiAgcG9ydC5vbignbW9kdWxlQWRkJywgZnVuY3Rpb24ocnVudGltZSwgaW5mbykge1xuICAgIHZhciBsaW5lYWdlID0gW107XG4gICAgbGluZWFnZSA9IGxpbmVhZ2UuY29uY2F0KGluZm8ubGluZWFnZSk7XG4gICAgbGluZWFnZVswXSA9IGluZm8uaWQ7XG4gICAgcnVudGltZS5tb2R1bGVzLnB1c2gobGluZWFnZSk7XG4gICAgaWYgKHRoaXMucGVuZGluZ1tpbmZvLmxpbmVhZ2VbMF1dKSB7XG4gICAgICBkZWxldGUgdGhpcy5wZW5kaW5nW2luZm8ubGluZWFnZVswXV07XG4gICAgICB0aGlzLmVtaXQoJ3BsYWNlZCcpO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMsIHJ1bnRpbWUpKTtcbiAgcG9ydC5vbignbW9kdWxlUmVtb3ZlJywgZnVuY3Rpb24ocnVudGltZSwgaW5mbykge1xuICAgIHZhciBsaW5lYWdlID0gW10sIGksIG1vZEZpbmdlcnByaW50O1xuICAgIGxpbmVhZ2UgPSBsaW5lYWdlLmNvbmNhdChpbmZvLmxpbmVhZ2UpO1xuICAgIGxpbmVhZ2VbMF0gPSBpbmZvLmlkO1xuICAgIG1vZEZpbmdlcnByaW50ID0gbGluZWFnZS50b1N0cmluZygpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHJ1bnRpbWUubW9kdWxlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHJ1bnRpbWUubW9kdWxlc1tpXS50b1N0cmluZygpID09PSBtb2RGaW5nZXJwcmludCkge1xuICAgICAgICBydW50aW1lLm1vZHVsZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZGVidWcud2FybignVW5rbm93biBtb2R1bGUgdG8gcmVtb3ZlOiAnLCBpbmZvLmlkKTtcbiAgfS5iaW5kKHRoaXMsIHJ1bnRpbWUpKTtcbn07XG5cbi8qKlxuICogT3ZlcmxheSBhIHNwZWNpZmljIHBvbGljeSBvciBjb25zdHJhaW50IGluc3RhbmNlIG9uIGRlZmF1bHQgc2V0dGluZ3MuXG4gKiBUT0RPOiBjb25zaWRlciBtYWtpbmcgc3RhdGljLlxuICogQG1ldGhvZCBvdmVybGF5XG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGJhc2UgVGhlIGRlZmF1bHQgb2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb3ZlcmxheSBUaGUgc3VwZXJjZWVkaW5nIG9iamVjdFxuICogQHJldHVybnMge09iamVjdH0gQSBuZXcgb2JqZWN0IHdpdGggYmFzZSBwYXJhbWV0ZXJzIHdoZW4gbm90IHNldCBpbiBvdmVybGF5LlxuICovXG5Qb2xpY3kucHJvdG90eXBlLm92ZXJsYXkgPSBmdW5jdGlvbihiYXNlLCBvdmVybGF5KSB7XG4gIHZhciByZXQgPSB7fTtcblxuICB1dGlsLm1peGluKHJldCwgYmFzZSk7XG4gIGlmIChvdmVybGF5KSB7XG4gICAgdXRpbC5taXhpbihyZXQsIG92ZXJsYXksIHRydWUpO1xuICB9XG4gIHJldHVybiByZXQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBvbGljeTtcbiIsIi8qanNsaW50IGluZGVudDoyLCBub2RlOnRydWUsIHNsb3BweTp0cnVlLCBicm93c2VyOnRydWUgKi9cbnZhciBDb25zdW1lciA9IHJlcXVpcmUoJy4vY29uc3VtZXInKTtcbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbi8qKlxuICogQSBmcmVlZG9tIHBvcnQgZm9yIGEgdXNlci1hY2Nlc3NhYmxlIHByb3ZpZGVyLlxuICogQGNsYXNzIFByb3ZpZGVyXG4gKiBAaW1wbGVtZW50cyBQb3J0XG4gKiBAdXNlcyBoYW5kbGVFdmVudHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWYgVGhlIGludGVyZmFjZSBvZiB0aGUgcHJvdmlkZXIuXG4gKiBAcGFyYW0ge0RlYnVnfSBkZWJ1ZyBUaGUgZGVidWdnZXIgdG8gdXNlIGZvciBsb2dnaW5nLlxuICogQGNvbnRydWN0b3JcbiAqL1xudmFyIFByb3ZpZGVyID0gZnVuY3Rpb24gKGRlZiwgZGVidWcpIHtcbiAgdGhpcy5pZCA9IENvbnN1bWVyLm5leHRJZCgpO1xuICB1dGlsLmhhbmRsZUV2ZW50cyh0aGlzKTtcbiAgdGhpcy5kZWJ1ZyA9IGRlYnVnO1xuICBcbiAgdGhpcy5kZWZpbml0aW9uID0gZGVmO1xuICB0aGlzLm1vZGUgPSBQcm92aWRlci5tb2RlLnN5bmNocm9ub3VzO1xuICB0aGlzLmNoYW5uZWxzID0ge307XG4gIHRoaXMuaWZhY2UgPSBudWxsO1xuICB0aGlzLmNsb3NlSGFuZGxlcnMgPSB7fTtcbiAgdGhpcy5wcm92aWRlckNscyA9IG51bGw7XG5cbiAgdGhpcy5pZmFjZXMgPSB7fTtcbiAgdGhpcy5lbWl0cyA9IHt9O1xufTtcblxuLyoqXG4gKiBQcm92aWRlciBtb2RlcyBvZiBvcGVyYXRpb24uXG4gKiBAcHJvcGVydHkgbW9kZVxuICogQHN0YXRpY1xuICogQHR5cGUgbnVtYmVyXG4gKi9cblByb3ZpZGVyLm1vZGUgPSB7XG4gIHN5bmNocm9ub3VzOiAwLFxuICBhc3luY2hyb25vdXM6IDEsXG4gIHByb21pc2VzOiAyXG59O1xuXG4vKipcbiAqIFJlY2VpdmUgZXh0ZXJuYWwgbWVzc2FnZXMgZm9yIHRoZSBwcm92aWRlci5cbiAqIEBtZXRob2Qgb25NZXNzYWdlXG4gKiBAcGFyYW0ge1N0cmluZ30gc291cmNlIHRoZSBzb3VyY2UgaWRlbnRpZmllciBvZiB0aGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlIFRoZSByZWNlaXZlZCBtZXNzYWdlLlxuICovXG5Qcm92aWRlci5wcm90b3R5cGUub25NZXNzYWdlID0gZnVuY3Rpb24gKHNvdXJjZSwgbWVzc2FnZSkge1xuICBpZiAoc291cmNlID09PSAnY29udHJvbCcgJiYgbWVzc2FnZS5yZXZlcnNlKSB7XG4gICAgdGhpcy5jaGFubmVsc1ttZXNzYWdlLm5hbWVdID0gbWVzc2FnZS5jaGFubmVsO1xuICAgIHRoaXMuZW1pdChtZXNzYWdlLmNoYW5uZWwsIHtcbiAgICAgIHR5cGU6ICdjaGFubmVsIGFubm91bmNlbWVudCcsXG4gICAgICBjaGFubmVsOiBtZXNzYWdlLnJldmVyc2VcbiAgICB9KTtcbiAgICB0aGlzLmVtaXQoJ3N0YXJ0Jyk7XG4gIH0gZWxzZSBpZiAoc291cmNlID09PSAnY29udHJvbCcgJiYgbWVzc2FnZS50eXBlID09PSAnc2V0dXAnKSB7XG4gICAgdGhpcy5jb250cm9sQ2hhbm5lbCA9IG1lc3NhZ2UuY2hhbm5lbDtcbiAgfSBlbHNlIGlmIChzb3VyY2UgPT09ICdjb250cm9sJyAmJiBtZXNzYWdlLnR5cGUgPT09ICdjbG9zZScpIHtcbiAgICBpZiAobWVzc2FnZS5jaGFubmVsID09PSB0aGlzLmNvbnRyb2xDaGFubmVsKSB7XG4gICAgICBkZWxldGUgdGhpcy5jb250cm9sQ2hhbm5lbDtcbiAgICB9XG4gICAgdGhpcy5jbG9zZSgpO1xuICB9IGVsc2Uge1xuICAgIGlmICghdGhpcy5jaGFubmVsc1tzb3VyY2VdICYmIG1lc3NhZ2UuY2hhbm5lbCkge1xuICAgICAgdGhpcy5jaGFubmVsc1tzb3VyY2VdID0gbWVzc2FnZS5jaGFubmVsO1xuICAgICAgdGhpcy5lbWl0KCdzdGFydCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuY2hhbm5lbHNbc291cmNlXSkge1xuICAgICAgdGhpcy5kZWJ1Zy53YXJuKCdNZXNzYWdlIGZyb20gdW5jb25maWd1cmVkIHNvdXJjZTogJyArIHNvdXJjZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ2Nsb3NlJyAmJiBtZXNzYWdlLnRvKSB7XG4gICAgICB0aGlzLnRlYXJkb3duKHNvdXJjZSwgbWVzc2FnZS50byk7XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLnRvICYmIHRoaXMuZW1pdHNbc291cmNlXSAmJlxuICAgICAgICAgICAgICAgdGhpcy5lbWl0c1tzb3VyY2VdW21lc3NhZ2UudG9dKSB7XG4gICAgICBtZXNzYWdlLm1lc3NhZ2UudG8gPSBtZXNzYWdlLnRvO1xuICAgICAgdGhpcy5lbWl0c1tzb3VyY2VdW21lc3NhZ2UudG9dKG1lc3NhZ2UubWVzc2FnZSk7XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLnRvICYmIG1lc3NhZ2UubWVzc2FnZSAmJlxuICAgICAgICBtZXNzYWdlLm1lc3NhZ2UudHlwZSA9PT0gJ2NvbnN0cnVjdCcpIHtcbiAgICAgIHZhciBhcmdzID0gQ29uc3VtZXIucG9ydGFibGVUb01lc3NhZ2UoXG4gICAgICAgICAgKHRoaXMuZGVmaW5pdGlvbi5jb25zdHJ1Y3RvciAmJiB0aGlzLmRlZmluaXRpb24uY29uc3RydWN0b3IudmFsdWUpID9cbiAgICAgICAgICAgICAgdGhpcy5kZWZpbml0aW9uLmNvbnN0cnVjdG9yLnZhbHVlIDogW10sXG4gICAgICAgICAgbWVzc2FnZS5tZXNzYWdlLFxuICAgICAgICAgIHRoaXMuZGVidWdcbiAgICAgICAgKSxcbiAgICAgICAgaW5zdGFuY2U7XG4gICAgICBpZiAoIXRoaXMuaWZhY2VzW3NvdXJjZV0pIHtcbiAgICAgICAgdGhpcy5pZmFjZXNbc291cmNlXSA9IHt9O1xuICAgICAgICB0aGlzLmVtaXRzW3NvdXJjZV0gPSB7fTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaWZhY2VzW3NvdXJjZV1bbWVzc2FnZS50b10gPSB0cnVlO1xuICAgICAgaW5zdGFuY2UgPSB0aGlzLmdldFByb3ZpZGVyKHNvdXJjZSwgbWVzc2FnZS50bywgYXJncyk7XG4gICAgICAvLyBkb24ndCBzYXZlIGEgcmVmZXJlbmNlIHRvIGluc3RhbmNlIGlmIGl0IGNsb3NlZCBpdHNlbGYgYWxyZWFkeS5cbiAgICAgIGlmICh0aGlzLmlmYWNlc1tzb3VyY2VdICYmXG4gICAgICAgICAgdGhpcy5pZmFjZXNbc291cmNlXVttZXNzYWdlLnRvXSkge1xuICAgICAgICB0aGlzLmlmYWNlc1tzb3VyY2VdW21lc3NhZ2UudG9dID0gaW5zdGFuY2UuaW5zdGFuY2U7XG4gICAgICAgIHRoaXMuZW1pdHNbc291cmNlXVttZXNzYWdlLnRvXSA9IGluc3RhbmNlLm9ubXNnO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlYnVnLndhcm4odGhpcy50b1N0cmluZygpICsgJyBkcm9wcGluZyBtZXNzYWdlICcgK1xuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQ2xvc2UgLyB0ZWFyZG93biB0aGUgZmxvdyB0aGlzIHByb3ZpZGVyIHRlcm1pbmF0ZXMuXG4gKiBAbWV0aG9kIGNsb3NlXG4gKi9cblByb3ZpZGVyLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuY29udHJvbENoYW5uZWwpIHtcbiAgICB0aGlzLmVtaXQodGhpcy5jb250cm9sQ2hhbm5lbCwge1xuICAgICAgdHlwZTogJ1Byb3ZpZGVyIENsb3NpbmcnLFxuICAgICAgcmVxdWVzdDogJ2Nsb3NlJ1xuICAgIH0pO1xuICAgIGRlbGV0ZSB0aGlzLmNvbnRyb2xDaGFubmVsO1xuICB9XG4gIHRoaXMuZW1pdCgnY2xvc2UnKTtcblxuICAvLyBSZWxlYXNlIHJlZmVyZW5jZXMuXG4gIGRlbGV0ZSB0aGlzLmlmYWNlO1xuICBkZWxldGUgdGhpcy5wcm92aWRlckNscztcbiAgdGhpcy5pZmFjZXMgPSB7fTtcbiAgdGhpcy5lbWl0cyA9IHt9O1xuICB0aGlzLmVtaXRDaGFubmVsID0gbnVsbDtcbn07XG5cbi8qKlxuICogVGVhcmRvd24gYSBzaW5nbGUgaW5zdGFuY2Ugb2YgYW4gb2JqZWN0IGZ1bGZpbGxpbmcgdGhpcyBwcm92aWRlci5cbiAqIEBtZXRob2QgdGVhcmRvd25cbiAqIEBwYXJhbSB7U3RyaW5nfSBzb3VyY2UgVGhlIGNvbnN1bWVyIHNvdXJjZSBvZiB0aGUgaW5zdGFuY2UuXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgVGhlIGlkIG9mIHRoZSBpbnN0YW5jZSB0byB0ZWFyIGRvd24uXG4gKi9cblByb3ZpZGVyLnByb3RvdHlwZS50ZWFyZG93biA9IGZ1bmN0aW9uIChzb3VyY2UsIGlkKSB7XG4gIC8vIElnbm9yZSB0ZWFyZG93biBvZiBub24tZXhpc3RhbnQgaWRzLlxuICBpZiAoIXRoaXMuaWZhY2VzW3NvdXJjZV0pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBkZWxldGUgdGhpcy5pZmFjZXNbc291cmNlXVtpZF07XG4gIGRlbGV0ZSB0aGlzLmVtaXRzW3NvdXJjZV1baWRdO1xuICBpZiAodGhpcy5jbG9zZUhhbmRsZXJzW3NvdXJjZV0gJiYgdGhpcy5jbG9zZUhhbmRsZXJzW3NvdXJjZV1baWRdKSB7XG4gICAgdXRpbC5lYWNoUHJvcCh0aGlzLmNsb3NlSGFuZGxlcnNbc291cmNlXVtpZF0sIGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICBwcm9wKCk7XG4gICAgfSk7XG4gICAgZGVsZXRlIHRoaXMuY2xvc2VIYW5kbGVyc1tzb3VyY2VdW2lkXTtcbiAgfVxufTtcblxuLyoqXG4gKiBHZXQgYW4gaW50ZXJmYWNlIHRvIGV4cG9zZSBleHRlcm5hbGx5IHJlcHJlc2VudGluZyB0aGlzIHBvcnQuXG4gKiBQcm92aWRlcnMgYXJlIHJlZ2lzdGVyZWQgd2l0aCB0aGUgcG9ydCB1c2luZyBlaXRoZXJcbiAqIHByb3ZpZGVTeW5jaHJvbm91cyBvciBwcm92aWRlQXN5bmNocm9ub3VzIGRlcGVuZGluZyBvbiB0aGUgZGVzaXJlZFxuICogcmV0dXJuIGludGVyZmFjZS5cbiAqIEBtZXRob2QgZ2V0SW50ZXJmYWNlXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBleHRlcm5hbCBpbnRlcmZhY2Ugb2YgdGhpcyBQcm92aWRlci5cbiAqL1xuUHJvdmlkZXIucHJvdG90eXBlLmdldEludGVyZmFjZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuaWZhY2UpIHtcbiAgICByZXR1cm4gdGhpcy5pZmFjZTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmlmYWNlID0ge1xuICAgICAgcHJvdmlkZVN5bmNocm9ub3VzOiBmdW5jdGlvbiAocHJvdikge1xuICAgICAgICB0aGlzLnByb3ZpZGVyQ2xzID0gcHJvdjtcbiAgICAgICAgdGhpcy5tb2RlID0gUHJvdmlkZXIubW9kZS5zeW5jaHJvbm91cztcbiAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgIHByb3ZpZGVBc3luY2hyb25vdXM6IGZ1bmN0aW9uIChwcm92KSB7XG4gICAgICAgIHRoaXMucHJvdmlkZXJDbHMgPSBwcm92O1xuICAgICAgICB0aGlzLm1vZGUgPSBQcm92aWRlci5tb2RlLmFzeW5jaHJvbm91cztcbiAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgIHByb3ZpZGVQcm9taXNlczogZnVuY3Rpb24gKHByb3YpIHtcbiAgICAgICAgdGhpcy5wcm92aWRlckNscyA9IHByb3Y7XG4gICAgICAgIHRoaXMubW9kZSA9IFByb3ZpZGVyLm1vZGUucHJvbWlzZXM7XG4gICAgICB9LmJpbmQodGhpcylcbiAgICB9O1xuXG4gICAgdXRpbC5lYWNoUHJvcCh0aGlzLmRlZmluaXRpb24sIGZ1bmN0aW9uIChwcm9wLCBuYW1lKSB7XG4gICAgICBzd2l0Y2ggKHByb3AudHlwZSkge1xuICAgICAgY2FzZSBcImNvbnN0YW50XCI6XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLmlmYWNlLCBuYW1lLCB7XG4gICAgICAgICAgdmFsdWU6IENvbnN1bWVyLnJlY3Vyc2l2ZUZyZWV6ZU9iamVjdChwcm9wLnZhbHVlKSxcbiAgICAgICAgICB3cml0YWJsZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICByZXR1cm4gdGhpcy5pZmFjZTtcbiAgfVxufTtcblxuLyoqXG4gKiBDcmVhdGUgYSBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIGdldCBpbnRlcmZhY2VzIGZyb20gdGhpcyBwcm92aWRlciBmcm9tXG4gKiBhIHVzZXItdmlzaWJsZSBwb2ludC5cbiAqIEBtZXRob2QgZ2V0UHJveHlJbnRlcmZhY2VcbiAqL1xuUHJvdmlkZXIucHJvdG90eXBlLmdldFByb3h5SW50ZXJmYWNlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZnVuYyA9IGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIHAuZ2V0SW50ZXJmYWNlKCk7XG4gIH0uYmluZCh7fSwgdGhpcyk7XG5cbiAgZnVuYy5jbG9zZSA9IGZ1bmN0aW9uIChpZmFjZSkge1xuICAgIGlmIChpZmFjZSkge1xuICAgICAgdXRpbC5lYWNoUHJvcCh0aGlzLmlmYWNlcywgZnVuY3Rpb24gKGlkcywgc291cmNlKSB7XG4gICAgICAgIHV0aWwuZWFjaFByb3AoaWRzLCBmdW5jdGlvbiAoY2FuZGlkYXRlLCBpZCkge1xuICAgICAgICAgIGlmIChjYW5kaWRhdGUgPT09IGlmYWNlKSB7XG4gICAgICAgICAgICB0aGlzLnRlYXJkb3duKHNvdXJjZSwgaWQpO1xuICAgICAgICAgICAgdGhpcy5lbWl0KHRoaXMuY2hhbm5lbHNbc291cmNlXSwge1xuICAgICAgICAgICAgICB0eXBlOiAnY2xvc2UnLFxuICAgICAgICAgICAgICB0bzogaWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ2xvc2UgdGhlIGNoYW5uZWwuXG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9LmJpbmQodGhpcyk7XG5cbiAgZnVuYy5vbkNsb3NlID0gZnVuY3Rpb24gKGlmYWNlLCBoYW5kbGVyKSB7XG4gICAgLy8gTGlzdGVuIHRvIHRoZSBjaGFubmVsIGRpcmVjdGx5LlxuICAgIGlmICh0eXBlb2YgaWZhY2UgPT09ICdmdW5jdGlvbicgJiYgaGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm9uY2UoJ2Nsb3NlJywgaWZhY2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHV0aWwuZWFjaFByb3AodGhpcy5pZmFjZXMsIGZ1bmN0aW9uIChpZHMsIHNvdXJjZSkge1xuICAgICAgdXRpbC5lYWNoUHJvcChpZHMsIGZ1bmN0aW9uIChjYW5kaWRhdGUsIGlkKSB7XG4gICAgICAgIGlmIChjYW5kaWRhdGUgPT09IGlmYWNlKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLmNsb3NlSGFuZGxlcnNbc291cmNlXSkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZUhhbmRsZXJzW3NvdXJjZV0gPSB7fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCF0aGlzLmNsb3NlSGFuZGxlcnNbc291cmNlXVtpZF0pIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VIYW5kbGVyc1tzb3VyY2VdW2lkXSA9IFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmNsb3NlSGFuZGxlcnNbc291cmNlXVtpZF0ucHVzaChoYW5kbGVyKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9LmJpbmQodGhpcyk7XG5cbiAgcmV0dXJuIGZ1bmM7XG59O1xuXG4vKipcbiAqIEdldCBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgcmVnaXN0ZXJlZCBwcm92aWRlci5cbiAqIEBtZXRob2QgZ2V0UHJvdmlkZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBzb3VyY2UgVGhlIHBvcnQgdGhpcyBpbnN0YW5jZSBpcyBpbnRlcmFjdGlnbiB3aXRoLlxuICogQHBhcmFtIHtTdHJpbmd9IGlkZW50aWZpZXIgdGhlIG1lc3NhZ2FibGUgYWRkcmVzcyBmb3IgdGhpcyBwcm92aWRlci5cbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3MgQ29uc3RydWN0b3IgYXJndW1lbnRzIGZvciB0aGUgcHJvdmlkZXIuXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gQSBmdW5jdGlvbiB0byBzZW5kIG1lc3NhZ2VzIHRvIHRoZSBwcm92aWRlci5cbiAqL1xuUHJvdmlkZXIucHJvdG90eXBlLmdldFByb3ZpZGVyID0gZnVuY3Rpb24gKHNvdXJjZSwgaWRlbnRpZmllciwgYXJncykge1xuICBpZiAoIXRoaXMucHJvdmlkZXJDbHMpIHtcbiAgICB0aGlzLmRlYnVnLmVycm9yKCdDYW5ub3QgaW5zdGFudGlhdGUgcHJvdmlkZXIsIHNpbmNlIGl0IGlzIG5vdCBwcm92aWRlZCcpO1xuICAgIHJldHVybiB7aW5zdGFuY2U6IHVuZGVmaW5lZCwgb25tc2c6IHVuZGVmaW5lZH07XG4gIH1cblxuICB2YXIgZXZlbnRzID0ge30sXG4gICAgZGlzcGF0Y2hFdmVudCxcbiAgICBCb3VuZENsYXNzLFxuICAgIGluc3RhbmNlO1xuXG4gIHV0aWwuZWFjaFByb3AodGhpcy5kZWZpbml0aW9uLCBmdW5jdGlvbiAocHJvcCwgbmFtZSkge1xuICAgIGlmIChwcm9wLnR5cGUgPT09ICdldmVudCcpIHtcbiAgICAgIGV2ZW50c1tuYW1lXSA9IHByb3A7XG4gICAgfVxuICB9KTtcblxuICBkaXNwYXRjaEV2ZW50ID0gZnVuY3Rpb24gKHNyYywgZXYsIGlkLCBuYW1lLCB2YWx1ZSkge1xuICAgIGlmIChldltuYW1lXSkge1xuICAgICAgdmFyIHN0cmVhbXMgPSBDb25zdW1lci5tZXNzYWdlVG9Qb3J0YWJsZShldltuYW1lXS52YWx1ZSwgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlYnVnKTtcbiAgICAgIHRoaXMuZW1pdCh0aGlzLmNoYW5uZWxzW3NyY10sIHtcbiAgICAgICAgdHlwZTogJ21lc3NhZ2UnLFxuICAgICAgICB0bzogaWQsXG4gICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIHR5cGU6ICdldmVudCcsXG4gICAgICAgICAgdGV4dDogc3RyZWFtcy50ZXh0LFxuICAgICAgICAgIGJpbmFyeTogc3RyZWFtcy5iaW5hcnlcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LmJpbmQodGhpcywgc291cmNlLCBldmVudHMsIGlkZW50aWZpZXIpO1xuXG4gIC8vIHRoaXMgaXMgYWxsIHRvIHNheTogbmV3IHByb3ZpZGVyQ2xzKGRpc3BhdGNoRXZlbnQsIGFyZ3NbMF0sIGFyZ3NbMV0sLi4uKVxuICBCb3VuZENsYXNzID0gdGhpcy5wcm92aWRlckNscy5iaW5kLmFwcGx5KHRoaXMucHJvdmlkZXJDbHMsXG4gICAgICBbdGhpcy5wcm92aWRlckNscywgZGlzcGF0Y2hFdmVudF0uY29uY2F0KGFyZ3MgfHwgW10pKTtcbiAgaW5zdGFuY2UgPSBuZXcgQm91bmRDbGFzcygpO1xuXG4gIHJldHVybiB7XG4gICAgaW5zdGFuY2U6IGluc3RhbmNlLFxuICAgIG9ubXNnOiBmdW5jdGlvbiAocG9ydCwgc3JjLCBtc2cpIHtcbiAgICAgIGlmIChtc2cuYWN0aW9uID09PSAnbWV0aG9kJykge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXNbbXNnLnR5cGVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcG9ydC5kZWJ1Zy53YXJuKFwiUHJvdmlkZXIgZG9lcyBub3QgaW1wbGVtZW50IFwiICsgbXNnLnR5cGUgKyBcIigpIVwiKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHByb3AgPSBwb3J0LmRlZmluaXRpb25bbXNnLnR5cGVdLFxuICAgICAgICAgIGRlYnVnID0gcG9ydC5kZWJ1ZyxcbiAgICAgICAgICBhcmdzID0gQ29uc3VtZXIucG9ydGFibGVUb01lc3NhZ2UocHJvcC52YWx1ZSwgbXNnLCBkZWJ1ZyksXG4gICAgICAgICAgcmV0ID0gZnVuY3Rpb24gKHNyYywgbXNnLCBwcm9wLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciBzdHJlYW1zID0gQ29uc3VtZXIubWVzc2FnZVRvUG9ydGFibGUocHJvcC5yZXQsIHJlc29sdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWJ1Zyk7XG4gICAgICAgICAgICB0aGlzLmVtaXQodGhpcy5jaGFubmVsc1tzcmNdLCB7XG4gICAgICAgICAgICAgIHR5cGU6ICdtZXRob2QnLFxuICAgICAgICAgICAgICB0bzogbXNnLnRvLFxuICAgICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgdG86IG1zZy50byxcbiAgICAgICAgICAgICAgICB0eXBlOiAnbWV0aG9kJyxcbiAgICAgICAgICAgICAgICByZXFJZDogbXNnLnJlcUlkLFxuICAgICAgICAgICAgICAgIG5hbWU6IG1zZy50eXBlLFxuICAgICAgICAgICAgICAgIHRleHQ6IHN0cmVhbXMudGV4dCxcbiAgICAgICAgICAgICAgICBiaW5hcnk6IHN0cmVhbXMuYmluYXJ5LFxuICAgICAgICAgICAgICAgIGVycm9yOiByZWplY3RcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfS5iaW5kKHBvcnQsIHNyYywgbXNnLCBwcm9wKTtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGFyZ3MpKSB7XG4gICAgICAgICAgYXJncyA9IFthcmdzXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9ydC5tb2RlID09PSBQcm92aWRlci5tb2RlLnN5bmNocm9ub3VzKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldCh0aGlzW21zZy50eXBlXS5hcHBseSh0aGlzLCBhcmdzKSk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0KHVuZGVmaW5lZCwgZS5tZXNzYWdlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocG9ydC5tb2RlID09PSBQcm92aWRlci5tb2RlLmFzeW5jaHJvbm91cykge1xuICAgICAgICAgIHRoaXNbbXNnLnR5cGVdLmFwcGx5KGluc3RhbmNlLCBhcmdzLmNvbmNhdChyZXQpKTtcbiAgICAgICAgfSBlbHNlIGlmIChwb3J0Lm1vZGUgPT09IFByb3ZpZGVyLm1vZGUucHJvbWlzZXMpIHtcbiAgICAgICAgICB0aGlzW21zZy50eXBlXS5hcHBseSh0aGlzLCBhcmdzKS50aGVuKHJldCwgcmV0LmJpbmQoe30sIHVuZGVmaW5lZCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfS5iaW5kKGluc3RhbmNlLCB0aGlzLCBzb3VyY2UpXG4gIH07XG59O1xuXG4vKipcbiAqIEdldCBhIHRleHR1YWwgZGVzY3JpcHRpb24gb2YgdGhpcyBwb3J0LlxuICogQG1ldGhvZCB0b1N0cmluZ1xuICogQHJldHVybiB7U3RyaW5nfSB0aGUgZGVzY3JpcHRpb24gb2YgdGhpcyBwb3J0LlxuICovXG5Qcm92aWRlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmVtaXRDaGFubmVsKSB7XG4gICAgcmV0dXJuIFwiW1Byb3ZpZGVyIFwiICsgdGhpcy5lbWl0Q2hhbm5lbCArIFwiXVwiO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBcIlt1bmJvdW5kIFByb3ZpZGVyXVwiO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb3ZpZGVyO1xuIiwiLypqc2xpbnQgaW5kZW50OjIsIHdoaXRlOnRydWUsIG5vZGU6dHJ1ZSwgc2xvcHB5OnRydWUsIGJyb3dzZXI6dHJ1ZSAqL1xudmFyIFByb21pc2VDb21wYXQgPSByZXF1aXJlKCdlczYtcHJvbWlzZScpLlByb21pc2U7XG5cbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpO1xudmFyIENvbnN1bWVyID0gcmVxdWlyZSgnLi4vY29uc3VtZXInKTtcblxudmFyIEFwaUludGVyZmFjZSA9IGZ1bmN0aW9uKGRlZiwgb25Nc2csIGVtaXQsIGRlYnVnKSB7XG4gIHZhciBpbmZsaWdodCA9IHt9LFxuICAgICAgZXZlbnRzID0gbnVsbCxcbiAgICAgIGVtaXR0ZXIgPSBudWxsLFxuICAgICAgcmVxSWQgPSAwLFxuICAgICAgYXJncyA9IGFyZ3VtZW50cztcblxuICB1dGlsLmVhY2hQcm9wKGRlZiwgZnVuY3Rpb24ocHJvcCwgbmFtZSkge1xuICAgIHN3aXRjaChwcm9wLnR5cGUpIHtcbiAgICBjYXNlICdtZXRob2QnOlxuICAgICAgdGhpc1tuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBOb3RlOiBpbmZsaWdodCBzaG91bGQgYmUgcmVnaXN0ZXJlZCBiZWZvcmUgbWVzc2FnZSBpcyBwYXNzZWRcbiAgICAgICAgLy8gaW4gb3JkZXIgdG8gcHJlcGFyZSBmb3Igc3luY2hyb25vdXMgaW4td2luZG93IHBpcGVzLlxuICAgICAgICB2YXIgdGhpc1JlcSA9IHJlcUlkLFxuICAgICAgICAgICAgcHJvbWlzZSA9IG5ldyBQcm9taXNlQ29tcGF0KGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICBpbmZsaWdodFt0aGlzUmVxXSA9IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlOnJlc29sdmUsXG4gICAgICAgICAgICAgICAgcmVqZWN0OnJlamVjdCxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogcHJvcC5yZXRcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgc3RyZWFtcyA9IENvbnN1bWVyLm1lc3NhZ2VUb1BvcnRhYmxlKHByb3AudmFsdWUsXG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSxcbiAgICAgICAgICAgICAgICBkZWJ1Zyk7XG4gICAgICAgIHJlcUlkICs9IDE7XG4gICAgICAgIGVtaXQoe1xuICAgICAgICAgIGFjdGlvbjogJ21ldGhvZCcsXG4gICAgICAgICAgdHlwZTogbmFtZSxcbiAgICAgICAgICByZXFJZDogdGhpc1JlcSxcbiAgICAgICAgICB0ZXh0OiBzdHJlYW1zLnRleHQsXG4gICAgICAgICAgYmluYXJ5OiBzdHJlYW1zLmJpbmFyeVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZXZlbnQnOlxuICAgICAgaWYoIWV2ZW50cykge1xuICAgICAgICB1dGlsLmhhbmRsZUV2ZW50cyh0aGlzKTtcbiAgICAgICAgZW1pdHRlciA9IHRoaXMuZW1pdDtcbiAgICAgICAgZGVsZXRlIHRoaXMuZW1pdDtcbiAgICAgICAgZXZlbnRzID0ge307XG4gICAgICB9XG4gICAgICBldmVudHNbbmFtZV0gPSBwcm9wO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnY29uc3RhbnQnOlxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIG5hbWUsIHtcbiAgICAgICAgdmFsdWU6IENvbnN1bWVyLnJlY3Vyc2l2ZUZyZWV6ZU9iamVjdChwcm9wLnZhbHVlKSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcblxuICBvbk1zZyh0aGlzLCBmdW5jdGlvbih0eXBlLCBtc2cpIHtcbiAgICBpZiAodHlwZSA9PT0gJ2Nsb3NlJykge1xuICAgICAgaWYgKHRoaXMub2ZmKSB7XG4gICAgICAgIHRoaXMub2ZmKCk7XG4gICAgICB9XG4gICAgICB1dGlsLmVhY2hQcm9wKGluZmxpZ2h0LCBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIG9iai5yZWplY3QoJ2Nsb3NlZCcpO1xuICAgICAgfSk7XG4gICAgICBpbmZsaWdodCA9IHt9O1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIW1zZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT09ICdtZXRob2QnKSB7XG4gICAgICBpZiAoaW5mbGlnaHRbbXNnLnJlcUlkXSkge1xuICAgICAgICB2YXIgcmVzb2x2ZXIgPSBpbmZsaWdodFttc2cucmVxSWRdLFxuICAgICAgICAgICAgdGVtcGxhdGUgPSByZXNvbHZlci50ZW1wbGF0ZTtcbiAgICAgICAgZGVsZXRlIGluZmxpZ2h0W21zZy5yZXFJZF07XG4gICAgICAgIGlmIChtc2cuZXJyb3IpIHtcbiAgICAgICAgICByZXNvbHZlci5yZWplY3QobXNnLmVycm9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlci5yZXNvbHZlKENvbnN1bWVyLnBvcnRhYmxlVG9NZXNzYWdlKHRlbXBsYXRlLCBtc2csIGRlYnVnKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlYnVnLmVycm9yKCdJbmNvbWluZyBtZXNzYWdlIGNsYWltZWQgdG8gYmUgYW4gUlBDICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICdyZXR1cm5pbmcgZm9yIHVucmVnaXN0ZXJlZCBjYWxsJywgbXNnLnJlcUlkKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG1zZy50eXBlID09PSAnZXZlbnQnKSB7XG4gICAgICBpZiAoZXZlbnRzW21zZy5uYW1lXSkge1xuICAgICAgICBlbWl0dGVyKG1zZy5uYW1lLCBDb25zdW1lci5wb3J0YWJsZVRvTWVzc2FnZShldmVudHNbbXNnLm5hbWVdLnZhbHVlLFxuICAgICAgICAgICAgICAgIG1zZywgZGVidWcpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0uYmluZCh0aGlzKSk7XG5cbiAgYXJncyA9IENvbnN1bWVyLm1lc3NhZ2VUb1BvcnRhYmxlKFxuICAgICAgKGRlZi5jb25zdHJ1Y3RvciAmJiBkZWYuY29uc3RydWN0b3IudmFsdWUpID8gZGVmLmNvbnN0cnVjdG9yLnZhbHVlIDogW10sXG4gICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmdzLCA0KSxcbiAgICAgIGRlYnVnKTtcblxuICBlbWl0KHtcbiAgICB0eXBlOiAnY29uc3RydWN0JyxcbiAgICB0ZXh0OiBhcmdzLnRleHQsXG4gICAgYmluYXJ5OiBhcmdzLmJpbmFyeVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQXBpSW50ZXJmYWNlO1xuIiwiLypqc2xpbnQgaW5kZW50OjIsIHdoaXRlOnRydWUsIG5vZGU6dHJ1ZSwgc2xvcHB5OnRydWUsIGJyb3dzZXI6dHJ1ZSAqL1xudmFyIHV0aWwgPSByZXF1aXJlKCcuLi91dGlsJyk7XG5cbnZhciBFdmVudEludGVyZmFjZSA9IGZ1bmN0aW9uKG9uTXNnLCBlbWl0LCBkZWJ1Zykge1xuICB1dGlsLmhhbmRsZUV2ZW50cyh0aGlzKTtcbiAgXG4gIG9uTXNnKHRoaXMsIGZ1bmN0aW9uKGVtaXQsIHR5cGUsIG1zZykge1xuICAgIGlmICh0eXBlID09PSAnY2xvc2UnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVtaXQobXNnLnR5cGUsIG1zZy5tZXNzYWdlKTtcbiAgfS5iaW5kKHRoaXMsIHRoaXMuZW1pdCkpO1xuXG4gIHRoaXMuZW1pdCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUsIG1zZykge1xuICAgIGVtaXR0ZXIoe3R5cGU6IHR5cGUsIG1lc3NhZ2U6IG1zZ30sIHRydWUpO1xuICB9LmJpbmQoe30sIGVtaXQpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEludGVyZmFjZTtcbiIsIi8qanNsaW50IGluZGVudDoyLCBub2RlOnRydWUgKi9cbnZhciBQcm9taXNlQ29tcGF0ID0gcmVxdWlyZSgnZXM2LXByb21pc2UnKS5Qcm9taXNlO1xuXG52YXIgQXBpSW50ZXJmYWNlID0gcmVxdWlyZSgnLi9wcm94eS9hcGlJbnRlcmZhY2UnKTtcbnZhciBFdmVudEludGVyZmFjZSA9IHJlcXVpcmUoJy4vcHJveHkvZXZlbnRJbnRlcmZhY2UnKTtcbnZhciBDb25zdW1lciA9IHJlcXVpcmUoJy4vY29uc3VtZXInKTtcbnZhciBQcm92aWRlciA9IHJlcXVpcmUoJy4vcHJvdmlkZXInKTtcblxuLyoqXG4gKiBBIFByb3h5IEJpbmRlciBtYW5hZ2VzIHRoZSBleHRlcm5hbCBpbnRlcmZhY2UsIGFuZCBjcmVhdGVzIG9uZSBvZlxuICogdGhlIGRpZmZlcmVudCB0eXBlcyBvZiBvYmplY3RzIGV4cG9zZWQgYnkgZnJlZWRvbSBlaXRoZXIgYXMgYSBnbG9iYWxcbiAqIHdpdGhpbiBhIHdvcmtlciAvIG1vZHVsZSBjb250ZXh0LCBvciByZXR1cm5lZCBieSBhbiBleHRlcm5hbCBjYWxsIHRvXG4gKiBjcmVhdGUgYSBmcmVlZG9tIHJ1bnRpbWUuXG4gKiBAQ2xhc3MgUHJveHlCaW5kZXJcbiAqIEBwYXJhbSB7TWFuYWdlcn0gbWFuYWdlciBUaGUgbWFuYWdlciBmb3IgdGhlIGFjdGl2ZSBydW50aW1lLlxuICovXG52YXIgUHJveHlCaW5kZXIgPSBmdW5jdGlvbiAobWFuYWdlcikge1xuICAndXNlIHN0cmljdCc7XG4gIHRoaXMubWFuYWdlciA9IG1hbmFnZXI7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIHByb3h5IGZvciBhIGZyZWVkb20gcG9ydCwgYW5kIHJldHVybiBpdCBvbmNlIGxvYWRlZC5cbiAqIEBtZXRob2QgZ2V0RXh0ZXJuYWxcbiAqIEBwYXJhbSB7UG9ydH0gcG9ydCBUaGUgcG9ydCBmb3IgdGhlIHByb3h5IHRvIGNvbW11bmljYXRlIHdpdGguXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgcHJveHkuXG4gKiBAcGFyYW0ge09iamVjdH0gW2RlZmluaXRpb25dIFRoZSBkZWZpbml0aW9uIG9mIHRoZSBBUEkgdG8gZXhwb3NlLlxuICogQHBhcmFtIHtTdHJpbmd9IGRlZmluaXRpb24ubmFtZSBUaGUgbmFtZSBvZiB0aGUgQVBJLlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmluaXRpb24uZGVmaW5pdGlvbiBUaGUgZGVmaW5pdGlvbiBvZiB0aGUgQVBJLlxuICogQHBhcmFtIHtCb29sZWFufSBkZWZpbml0aW9uLnByb3ZpZGVzIFdoZXRoZXIgdGhpcyBpcyBhIGNvbnN1bWVyIG9yIHByb3ZpZGVyLlxuICogQHJldHVybnMge1Byb21pc2V9IEEgcHJvbWlzZSBmb3IgdGhlIGFjdGl2ZSBwcm94eSBpbnRlcmZhY2UuXG4gKi9cblByb3h5QmluZGVyLnByb3RvdHlwZS5nZXRFeHRlcm5hbCA9IGZ1bmN0aW9uIChwb3J0LCBuYW1lLCBkZWZpbml0aW9uKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdmFyIHByb3h5LCBhcGk7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWYgKGRlZmluaXRpb24pIHtcbiAgICAgIGFwaSA9IGRlZmluaXRpb24ubmFtZTtcbiAgICAgIGlmIChkZWZpbml0aW9uLnByb3ZpZGVzKSB7XG4gICAgICAgIHByb3h5ID0gbmV3IFByb3ZpZGVyKGRlZmluaXRpb24uZGVmaW5pdGlvbiwgdGhpcy5tYW5hZ2VyLmRlYnVnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3h5ID0gbmV3IENvbnN1bWVyKEFwaUludGVyZmFjZS5iaW5kKHt9LFxuICAgICAgICAgICAgZGVmaW5pdGlvbi5kZWZpbml0aW9uKSxcbiAgICAgICAgICAgIHRoaXMubWFuYWdlci5kZWJ1Zyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3h5ID0gbmV3IENvbnN1bWVyKEV2ZW50SW50ZXJmYWNlLCB0aGlzLm1hbmFnZXIuZGVidWcpO1xuICAgIH1cblxuICAgIHByb3h5Lm9uY2UoJ3N0YXJ0JywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGlmYWNlID0gcHJveHkuZ2V0UHJveHlJbnRlcmZhY2UoKTtcbiAgICAgIGlmIChhcGkpIHtcbiAgICAgICAgaWZhY2UuYXBpID0gYXBpO1xuICAgICAgfVxuICAgICAgcmVzb2x2ZSh7XG4gICAgICAgIHBvcnQ6IHByb3h5LFxuICAgICAgICBleHRlcm5hbDogaWZhY2VcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5tYW5hZ2VyLmNyZWF0ZUxpbmsocG9ydCwgbmFtZSwgcHJveHkpO1xuICB9LmJpbmQodGhpcykpO1xufTtcblxuLyoqXG4gKiBCaW5kIHRoZSBkZWZhdWx0IHByb3h5IGZvciBhIGZyZWVkb20gcG9ydC5cbiAqIEBtZXRob2QgYmluZERlZmF1bHRcbiAqIEBwYXJhbSB7UG9ydH0gcG9ydCBUaGUgcG9ydCBmb3IgdGhlIHByb3h5IHRvIGNvbW11bmljYXRlIHdpdGguXG4gKiBAcGFyYW0ge0FwaX0gYXBpIFRoZSBBUEkgbG9hZGVyIHdpdGggQVBJIGRlZmluaXRpb25zLlxuICogQHBhcmFtIHtPYmplY3R9IG1hbmlmZXN0IFRoZSBtYW5pZmVzdCBvZiB0aGUgbW9kdWxlIHRvIGV4cG9zZS5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaW50ZXJuYWwgV2hldGhlciB0aGUgaW50ZXJmYWNlIGlzIGZvciBpbnNpZGUgdGhlIG1vZHVsZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlfSBBIHByb21pc2UgZm9yIGEgcHJveHkgaW50ZXJmYWNlLlxuICogQHByaXZhdGVcbiAqL1xuUHJveHlCaW5kZXIucHJvdG90eXBlLmJpbmREZWZhdWx0ID0gZnVuY3Rpb24gKHBvcnQsIGFwaSwgbWFuaWZlc3QsIGludGVybmFsKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdmFyIG1ldGFkYXRhID0ge1xuICAgIG5hbWU6IG1hbmlmZXN0Lm5hbWUsXG4gICAgaWNvbjogbWFuaWZlc3QuaWNvbixcbiAgICBkZXNjcmlwdGlvbjogbWFuaWZlc3QuZGVzY3JpcHRpb25cbiAgfSwgZGVmO1xuXG4gIGlmIChtYW5pZmVzdFsnZGVmYXVsdCddKSB7XG4gICAgZGVmID0gYXBpLmdldChtYW5pZmVzdFsnZGVmYXVsdCddKTtcbiAgICBpZiAoIWRlZiAmJiBtYW5pZmVzdC5hcGkgJiYgbWFuaWZlc3QuYXBpW21hbmlmZXN0WydkZWZhdWx0J11dKSB7XG4gICAgICBkZWYgPSB7XG4gICAgICAgIG5hbWU6IG1hbmlmZXN0WydkZWZhdWx0J10sXG4gICAgICAgIGRlZmluaXRpb246IG1hbmlmZXN0LmFwaVttYW5pZmVzdFsnZGVmYXVsdCddXVxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKGludGVybmFsICYmIG1hbmlmZXN0LnByb3ZpZGVzICYmXG4gICAgICAgIG1hbmlmZXN0LnByb3ZpZGVzLmluZGV4T2YobWFuaWZlc3RbJ2RlZmF1bHQnXSkgIT09IGZhbHNlKSB7XG4gICAgICBkZWYucHJvdmlkZXMgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoaW50ZXJuYWwpIHtcbiAgICAgIGFwaS5kZWJ1Zy53YXJuKFwiZGVmYXVsdCBBUEkgbm90IHByb3ZpZGVkLCBcIiArXG4gICAgICAgICAgICAgICAgICAgICBcImFyZSB5b3UgbWlzc2luZyBhIHByb3ZpZGVzIGtleSBpbiB5b3VyIG1hbmlmZXN0P1wiKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcy5nZXRFeHRlcm5hbChwb3J0LCAnZGVmYXVsdCcsIGRlZikudGhlbihcbiAgICBmdW5jdGlvbiAobWV0YWRhdGEsIGluZm8pIHtcbiAgICAgIGluZm8uZXh0ZXJuYWwubWFuaWZlc3QgPSBtZXRhZGF0YTtcbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH0uYmluZCh0aGlzLCBtZXRhZGF0YSlcbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUHJveHlCaW5kZXI7XG4iLCIvKmdsb2JhbHMgWE1MSHR0cFJlcXVlc3QgKi9cbi8qanNsaW50IGluZGVudDoyLG5vZGU6dHJ1ZSxzbG9wcHk6dHJ1ZSAqL1xudmFyIFByb21pc2VDb21wYXQgPSByZXF1aXJlKCdlczYtcHJvbWlzZScpLlByb21pc2U7XG5cbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbi8qKlxuICogVGhlIFJlc291cmNlIHJlZ2lzdHJ5IGZvciBGcmVlRE9NLiAgVXNlZCB0byBsb29rIHVwIHJlcXVlc3RlZCBSZXNvdXJjZXMsXG4gKiBhbmQgcHJvdmlkZSBsb29rdXAgYW5kIG1pZ3JhdGlvbiBvZiByZXNvdXJjZXMuXG4gKiBAQ2xhc3MgUmVzb3VyY2VcbiAqIEBwYXJhbSB7RGVidWd9IGRlYnVnIFRoZSBsb2dnZXIgdG8gdXNlIGZvciBkZWJ1Z2dpbmcuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xudmFyIFJlc291cmNlID0gZnVuY3Rpb24gKGRlYnVnKSB7XG4gIHRoaXMuZGVidWcgPSBkZWJ1ZztcbiAgdGhpcy5maWxlcyA9IHt9O1xuICB0aGlzLnJlc29sdmVycyA9IFt0aGlzLmh0dHBSZXNvbHZlciwgdGhpcy5udWxsUmVzb2x2ZXJdO1xuICB0aGlzLmNvbnRlbnRSZXRyaWV2ZXJzID0ge1xuICAgICdodHRwJzogdGhpcy54aHJSZXRyaWV2ZXIsXG4gICAgJ2h0dHBzJzogdGhpcy54aHJSZXRyaWV2ZXIsXG4gICAgJ2Nocm9tZS1leHRlbnNpb24nOiB0aGlzLnhoclJldHJpZXZlcixcbiAgICAncmVzb3VyY2UnOiB0aGlzLnhoclJldHJpZXZlcixcbiAgICAnY2hyb21lJzogdGhpcy54aHJSZXRyaWV2ZXIsXG4gICAgJ2FwcCc6IHRoaXMueGhyUmV0cmlldmVyLFxuICAgICdtYW5pZmVzdCc6IHRoaXMubWFuaWZlc3RSZXRyaWV2ZXJcbiAgfTtcbn07XG5cbi8qKlxuICogUmVzb2x2ZSBhIHJlc3VyY2UgVVJMIHJlcXVlc3RlZCBmcm9tIGEgbW9kdWxlLlxuICogQG1ldGhvZCBnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBtYW5pZmVzdCBUaGUgY2Fub25pY2FsIGFkZHJlc3Mgb2YgdGhlIG1vZHVsZSByZXF1ZXN0aW5nLlxuICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgcmVzb3VyY2UgdG8gZ2V0LlxuICogQHJldHVybnMge1Byb21pc2V9IEEgcHJvbWlzZSBmb3IgdGhlIHJlc291cmNlIGFkZHJlc3MuXG4gKi9cblJlc291cmNlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAobWFuaWZlc3QsIHVybCkge1xuICB2YXIga2V5ID0gSlNPTi5zdHJpbmdpZnkoW21hbmlmZXN0LCB1cmxdKTtcbiAgXG4gIHJldHVybiBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWYgKHRoaXMuZmlsZXNba2V5XSkge1xuICAgICAgcmVzb2x2ZSh0aGlzLmZpbGVzW2tleV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlc29sdmUobWFuaWZlc3QsIHVybCkudGhlbihmdW5jdGlvbiAoa2V5LCByZXNvbHZlLCBhZGRyZXNzKSB7XG4gICAgICAgIHRoaXMuZmlsZXNba2V5XSA9IGFkZHJlc3M7XG4gICAgICAgIC8vZmRvbS5kZWJ1Zy5sb2coJ1Jlc29sdmVkICcgKyBrZXkgKyAnIHRvICcgKyBhZGRyZXNzKTtcbiAgICAgICAgcmVzb2x2ZShhZGRyZXNzKTtcbiAgICAgIH0uYmluZCh0aGlzLCBrZXksIHJlc29sdmUpLCByZWplY3QpO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBjb250ZW50cyBvZiBhIHJlc291cmNlLlxuICogQG1ldGhvZCBnZXRDb250ZW50c1xuICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgcmVzb3VyY2UgdG8gcmVhZC5cbiAqIEByZXR1cm5zIHtQcm9taXNlfSBBIHByb21pc2UgZm9yIHRoZSByZXNvdXJjZSBjb250ZW50cy5cbiAqL1xuUmVzb3VyY2UucHJvdG90eXBlLmdldENvbnRlbnRzID0gZnVuY3Rpb24gKHVybCkge1xuICByZXR1cm4gbmV3IFByb21pc2VDb21wYXQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciBwcm9wO1xuICAgIGlmICghdXJsKSB7XG4gICAgICB0aGlzLmRlYnVnLndhcm4oXCJBc2tlZCB0byBnZXQgY29udGVudHMgb2YgdW5kZWZpbmVkIFVSTC5cIik7XG4gICAgICByZXR1cm4gcmVqZWN0KCk7XG4gICAgfVxuICAgIGZvciAocHJvcCBpbiB0aGlzLmNvbnRlbnRSZXRyaWV2ZXJzKSB7XG4gICAgICBpZiAodGhpcy5jb250ZW50UmV0cmlldmVycy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICBpZiAodXJsLmluZGV4T2YocHJvcCArIFwiOi8vXCIpID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29udGVudFJldHJpZXZlcnNbcHJvcF0uY2FsbCh0aGlzLCB1cmwsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXJsLmluZGV4T2YoXCI6Ly9cIikgPT09IC0xICYmIHByb3AgPT09IFwibnVsbFwiKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29udGVudFJldHJpZXZlcnNbcHJvcF0uY2FsbCh0aGlzLCB1cmwsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVqZWN0KCk7XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG4vKipcbiAqIFJldHVybiBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBmaXJzdCBvZiBhbiBhcnJheSBvZiBwcm9taXNlc1xuICogcmVzb2x2ZXMsIG9yIHJlamVjdHMgYWZ0ZXIgYWxsIHByb21pc2VzIHJlamVjdC4gQ2FuIGJlIHRob3VnaHQgb2YgYXNcbiAqIHRoZSBtaXNzaW5nICdQcm9taXNlLmFueScgLSByYWNlIGlzIG5vIGdvb2QsIHNpbmNlIGVhcmx5IHJlamVjdGlvbnNcbiAqIHByZWVtcHQgYSBzdWJzZXF1ZW50IHJlc29sdXRpb24uXG4gKiBAcHJpdmF0ZVxuICogQHN0YXRpY1xuICogQG1ldGhvZCBGaXJzdFByb21pc2VcbiAqIEBwYXJhbSB7UHJvbWlzZVtdfSBQcm9taXNlcyB0byBzZWxlY3QgZnJvbVxuICogQHJldHVybnMge1Byb21pc2V9IFByb21pc2UgcmVzb2x2aW5nIHdpdGggYSB2YWx1ZSBmcm9tIGFyZ3VtZW50cy5cbiAqL1xudmFyIGZpcnN0UHJvbWlzZSA9IGZ1bmN0aW9uKHByb21pc2VzKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgZXJyb3JzID0gW107XG4gICAgcHJvbWlzZXMuZm9yRWFjaChmdW5jdGlvbihwcm9taXNlKSB7XG4gICAgICBwcm9taXNlLnRoZW4ocmVzb2x2ZSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKGVycik7XG4gICAgICAgIGlmIChlcnJvcnMubGVuZ3RoID09PSBwcm9taXNlcy5sZW5ndGgpIHtcbiAgICAgICAgICByZWplY3QoZXJyb3JzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBSZXNvbHZlIGEgcmVzb3VyY2UgdXNpbmcga25vd24gcmVzb2x2ZXJzLiBVbmxpa2UgZ2V0LCByZXNvbHZlIGRvZXNcbiAqIG5vdCBjYWNoZSByZXNvbHZlZCByZXNvdXJjZXMuXG4gKiBAbWV0aG9kIHJlc29sdmVcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gbWFuaWZlc3QgVGhlIG1vZHVsZSByZXF1ZXN0aW5nIHRoZSByZXNvdXJjZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIHJlc291cmNlIHRvIHJlc29sdmU7XG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gQSBwcm9taXNlIGZvciB0aGUgcmVzb3VyY2UgYWRkcmVzcy5cbiAqL1xuUmVzb3VyY2UucHJvdG90eXBlLnJlc29sdmUgPSBmdW5jdGlvbiAobWFuaWZlc3QsIHVybCkge1xuICByZXR1cm4gbmV3IFByb21pc2VDb21wYXQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciBwcm9taXNlcyA9IFtdO1xuICAgIGlmICh1cmwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHJlamVjdCgpO1xuICAgIH1cbiAgICB1dGlsLmVhY2hSZXZlcnNlKHRoaXMucmVzb2x2ZXJzLCBmdW5jdGlvbiAocmVzb2x2ZXIpIHtcbiAgICAgIHByb21pc2VzLnB1c2gobmV3IFByb21pc2VDb21wYXQocmVzb2x2ZXIuYmluZCh7fSwgbWFuaWZlc3QsIHVybCkpKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICAgIGZpcnN0UHJvbWlzZShwcm9taXNlcykudGhlbihyZXNvbHZlLCBmdW5jdGlvbigpIHtcbiAgICAgIHJlamVjdCgnTm8gcmVzb2x2ZXJzIHRvIGhhbmRsZSB1cmw6ICcgKyBKU09OLnN0cmluZ2lmeShbbWFuaWZlc3QsIHVybF0pKTtcbiAgICB9KTtcbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgcmVzb2x2ZXJzOiBjb2RlIHRoYXQga25vd3MgaG93IHRvIGdldCByZXNvdXJjZXNcbiAqIG5lZWRlZCBieSB0aGUgcnVudGltZS4gQSByZXNvbHZlciB3aWxsIGJlIGNhbGxlZCB3aXRoIGZvdXJcbiAqIGFyZ3VtZW50czogdGhlIGFic29sdXRlIG1hbmlmZXN0IG9mIHRoZSByZXF1ZXN0ZXIsIHRoZVxuICogcmVzb3VyY2UgYmVpbmcgcmVxdWVzdGVkLCBhbmQgYSByZXNvbHZlIC8gcmVqZWN0IHBhaXIgdG9cbiAqIGZ1bGZpbGwgYSBwcm9taXNlLlxuICogQG1ldGhvZCBhZGRSZXNvbHZlclxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZXIgVGhlIHJlc29sdmVyIHRvIGFkZC5cbiAqL1xuUmVzb3VyY2UucHJvdG90eXBlLmFkZFJlc29sdmVyID0gZnVuY3Rpb24gKHJlc29sdmVyKSB7XG4gIHRoaXMucmVzb2x2ZXJzLnB1c2gocmVzb2x2ZXIpO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciByZXRyaWV2ZXJzOiBjb2RlIHRoYXQga25vd3MgaG93IHRvIGxvYWQgcmVzb3VyY2VzXG4gKiBuZWVkZWQgYnkgdGhlIHJ1bnRpbWUuIEEgcmV0cmlldmVyIHdpbGwgYmUgY2FsbGVkIHdpdGggYSBVUkxcbiAqIHRvIHJldHJpZXZlIHdpdGggYSBwcm90b2NvbCB0aGF0IGl0IGlzIGFibGUgdG8gaGFuZGxlLlxuICogQG1ldGhvZCBhZGRSZXRyaWV2ZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm90byBUaGUgcHJvdG9jb2wgdG8gcmVnaXN0ZXIgZm9yLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmV0cmlldmVyIFRoZSByZXRyaWV2ZXIgdG8gYWRkLlxuICovXG5SZXNvdXJjZS5wcm90b3R5cGUuYWRkUmV0cmlldmVyID0gZnVuY3Rpb24gKHByb3RvLCByZXRyaWV2ZXIpIHtcbiAgaWYgKHRoaXMuY29udGVudFJldHJpZXZlcnNbcHJvdG9dKSB7XG4gICAgdGhpcy5kZWJ1Zy53YXJuKFwiVW53aWxsaW5nIHRvIG92ZXJyaWRlIGZpbGUgcmV0cmlldmFsIGZvciBcIiArIHByb3RvKTtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5jb250ZW50UmV0cmlldmVyc1twcm90b10gPSByZXRyaWV2ZXI7XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIGV4dGVybmFsIHJlc29sdmVycyBhbmQgcmV0cmVhdmVyc1xuICogQG1ldGhvZCByZWdpc3RlclxuICogQHBhcmFtIHt7XCJwcm90b1wiOlN0cmluZywgXCJyZXNvbHZlclwiOkZ1bmN0aW9uLCBcInJldHJlYXZlclwiOkZ1bmN0aW9ufVtdfVxuICogICAgIHJlc29sdmVycyBUaGUgbGlzdCBvZiByZXRyZWl2ZXJzIGFuZCByZXNvbHZlcnMuXG4gKi9cblJlc291cmNlLnByb3RvdHlwZS5yZWdpc3RlciA9IGZ1bmN0aW9uIChyZXNvbHZlcnMpIHtcbiAgaWYgKCFyZXNvbHZlcnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmVzb2x2ZXJzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICBpZiAoaXRlbS5yZXNvbHZlcikge1xuICAgICAgdGhpcy5hZGRSZXNvbHZlcihpdGVtLnJlc29sdmVyKTtcbiAgICB9IGVsc2UgaWYgKGl0ZW0ucHJvdG8gJiYgaXRlbS5yZXRyaWV2ZXIpIHtcbiAgICAgIHRoaXMuYWRkUmV0cmlldmVyKGl0ZW0ucHJvdG8sIGl0ZW0ucmV0cmlldmVyKTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIFVSTCBpcyBhbiBhYnNvbHV0ZSBVUkwgb2YgYSBnaXZlbiBTY2hlbWUuXG4gKiBAbWV0aG9kIGhhc1NjaGVtZVxuICogQHN0YXRpY1xuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7U3RyaW5nW119IHByb3RvY29scyBXaGl0ZWxpc3RlZCBwcm90b2NvbHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBVUkwgdGhlIFVSTCB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBJZiB0aGUgVVJMIGlzIGFuIGFic29sdXRlIGV4YW1wbGUgb2Ygb25lIG9mIHRoZSBzY2hlbWVzLlxuICovXG5SZXNvdXJjZS5oYXNTY2hlbWUgPSBmdW5jdGlvbiAocHJvdG9jb2xzLCB1cmwpIHtcbiAgdmFyIGk7XG4gIGZvciAoaSA9IDA7IGkgPCBwcm90b2NvbHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodXJsLmluZGV4T2YocHJvdG9jb2xzW2ldICsgXCI6Ly9cIikgPT09IDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIFJlbW92ZSAnLi8nIGFuZCAnLi4vJyBmcm9tIGEgVVJMXG4gKiBSZXF1aXJlZCBiZWNhdXNlIENocm9tZSBBcHBzIGZvciBNb2JpbGUgKGNjYSkgZG9lc24ndCB1bmRlcnN0YW5kXG4gKiBYSFIgcGF0aHMgd2l0aCB0aGVzZSByZWxhdGl2ZSBjb21wb25lbnRzIGluIHRoZSBVUkwuXG4gKiBAbWV0aG9kIHJlbW92ZVJlbGF0aXZlUGF0aFxuICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIG1vZGlmeVxuICogQHJldHVybnMge1N0cmluZ30gdXJsIHdpdGhvdXQgJy4vJyBhbmQgJy4uLydcbiAqKi9cblJlc291cmNlLnJlbW92ZVJlbGF0aXZlUGF0aCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgdmFyIGlkeCA9IHVybC5pbmRleE9mKFwiOi8vXCIpICsgMyxcbiAgICBzdGFjayxcbiAgICB0b1JlbW92ZSxcbiAgICByZXN1bHQ7XG4gIC8vIFJlbW92ZSBhbGwgaW5zdGFuY2VzIG9mIC8uL1xuICB1cmwgPSB1cmwucmVwbGFjZSgvXFwvXFwuXFwvL2csIFwiL1wiKTtcbiAgLy9XZWlyZCBidWcgd2hlcmUgaW4gY2NhLCBtYW5pZmVzdCBzdGFydHMgd2l0aCAnY2hyb21lOi8vLy8nXG4gIC8vVGhpcyBmb3JjZXMgdGhlcmUgdG8gb25seSBiZSAyIHNsYXNoZXNcbiAgd2hpbGUgKHVybC5jaGFyQXQoaWR4KSA9PT0gXCIvXCIpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMCwgaWR4KSArIHVybC5zbGljZShpZHggKyAxLCB1cmwubGVuZ3RoKTtcbiAgfVxuXG4gIC8vIEFkdmFuY2UgdG8gbmV4dCAvXG4gIGlkeCA9IHVybC5pbmRleE9mKFwiL1wiLCBpZHgpO1xuICAvLyBSZW1vdmluZyAuLi9cbiAgc3RhY2sgPSB1cmwuc3Vic3RyKGlkeCArIDEpLnNwbGl0KFwiL1wiKTtcbiAgd2hpbGUgKHN0YWNrLmluZGV4T2YoXCIuLlwiKSAhPT0gLTEpIHtcbiAgICB0b1JlbW92ZSA9IHN0YWNrLmluZGV4T2YoXCIuLlwiKTtcbiAgICBpZiAodG9SZW1vdmUgPT09IDApIHtcbiAgICAgIHN0YWNrLnNoaWZ0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YWNrLnNwbGljZSgodG9SZW1vdmUgLSAxKSwgMik7XG4gICAgfVxuICB9XG4gIFxuICAvL1JlYnVpbGQgc3RyaW5nXG4gIHJlc3VsdCA9IHVybC5zdWJzdHIoMCwgaWR4KTtcbiAgZm9yIChpZHggPSAwOyBpZHggPCBzdGFjay5sZW5ndGg7IGlkeCArPSAxKSB7XG4gICAgcmVzdWx0ICs9IFwiL1wiICsgc3RhY2tbaWR4XTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBSZXNvbHZlIFVSTHMgd2hpY2ggY2FuIGJlIGFjY2Vzc2VkIHVzaW5nIHN0YW5kYXJkIEhUVFAgcmVxdWVzdHMuXG4gKiBAbWV0aG9kIGh0dHBSZXNvbHZlclxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBtYW5pZmVzdCBUaGUgTWFuaWZlc3QgVVJMLlxuICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIHJlc29sdmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIFRoZSBwcm9taXNlIHRvIGNvbXBsZXRlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IFRoZSBwcm9taXNlIHRvIHJlamVjdC5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSBVUkwgY291bGQgYmUgcmVzb2x2ZWQuXG4gKi9cblJlc291cmNlLnByb3RvdHlwZS5odHRwUmVzb2x2ZXIgPSBmdW5jdGlvbiAobWFuaWZlc3QsIHVybCwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gIHZhciBwcm90b2NvbHMgPSBbXCJodHRwXCIsIFwiaHR0cHNcIiwgXCJjaHJvbWVcIiwgXCJjaHJvbWUtZXh0ZW5zaW9uXCIsIFwicmVzb3VyY2VcIixcbiAgICAgICAgICAgICAgICAgICBcImFwcFwiXSxcbiAgICBkaXJuYW1lLFxuICAgIHByb3RvY29sSWR4LFxuICAgIHBhdGhJZHgsXG4gICAgcGF0aCxcbiAgICBiYXNlLFxuICAgIHJlc3VsdDtcblxuICBpZiAoUmVzb3VyY2UuaGFzU2NoZW1lKHByb3RvY29scywgdXJsKSkge1xuICAgIHJlc29sdmUoUmVzb3VyY2UucmVtb3ZlUmVsYXRpdmVQYXRoKHVybCkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIFxuICBpZiAoIW1hbmlmZXN0KSB7XG4gICAgcmVqZWN0KCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChSZXNvdXJjZS5oYXNTY2hlbWUocHJvdG9jb2xzLCBtYW5pZmVzdCkgJiZcbiAgICAgIHVybC5pbmRleE9mKFwiOi8vXCIpID09PSAtMSkge1xuICAgIGRpcm5hbWUgPSBtYW5pZmVzdC5zdWJzdHIoMCwgbWFuaWZlc3QubGFzdEluZGV4T2YoXCIvXCIpKTtcbiAgICBwcm90b2NvbElkeCA9IGRpcm5hbWUuaW5kZXhPZihcIjovL1wiKTtcbiAgICBwYXRoSWR4ID0gcHJvdG9jb2xJZHggKyAzICsgZGlybmFtZS5zdWJzdHIocHJvdG9jb2xJZHggKyAzKS5pbmRleE9mKFwiL1wiKTtcbiAgICBwYXRoID0gZGlybmFtZS5zdWJzdHIocGF0aElkeCk7XG4gICAgYmFzZSA9IGRpcm5hbWUuc3Vic3RyKDAsIHBhdGhJZHgpO1xuICAgIGlmICh1cmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcbiAgICAgIHJlc29sdmUoUmVzb3VyY2UucmVtb3ZlUmVsYXRpdmVQYXRoKGJhc2UgKyB1cmwpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzb2x2ZShSZXNvdXJjZS5yZW1vdmVSZWxhdGl2ZVBhdGgoYmFzZSArIHBhdGggKyBcIi9cIiArIHVybCkpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZWplY3QoKTtcbn07XG5cbi8qKlxuICogUmVzb2x2ZSBVUkxzIHdoaWNoIGFyZSBzZWxmLWRlc2NyaWJpbmcuXG4gKiBAbWV0aG9kIG51bGxSZXNvbHZlclxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBtYW5pZmVzdCBUaGUgTWFuaWZlc3QgVVJMLlxuICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIHJlc29sdmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIFRoZSBwcm9taXNlIHRvIGNvbXBsZXRlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IFRoZSBwcm9taXNlIHRvIHJlamVjdC5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSBVUkwgY291bGQgYmUgcmVzb2x2ZWQuXG4gKi9cblJlc291cmNlLnByb3RvdHlwZS5udWxsUmVzb2x2ZXIgPSBmdW5jdGlvbiAobWFuaWZlc3QsIHVybCwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gIHZhciBwcm90b2NvbHMgPSBbXCJtYW5pZmVzdFwiXTtcbiAgaWYgKFJlc291cmNlLmhhc1NjaGVtZShwcm90b2NvbHMsIHVybCkpIHtcbiAgICByZXNvbHZlKHVybCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAodXJsLmluZGV4T2YoJ2RhdGE6JykgPT09IDApIHtcbiAgICByZXNvbHZlKHVybCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmVqZWN0KCk7XG59O1xuXG4vKipcbiAqIFJldHJpZXZlIG1hbmlmZXN0IGNvbnRlbnQgZnJvbSBhIHNlbGYtZGVzY3JpcHRpdmUgbWFuaWZlc3QgdXJsLlxuICogVGhlc2UgdXJscyBhcmUgdXNlZCB0byByZWZlcmVuY2UgYSBtYW5pZmVzdCB3aXRob3V0IHJlcXVpcmluZyBzdWJzZXF1ZW50LFxuICogcG90ZW50aWFsbHkgbm9uLUNPUlMgcmVxdWVzdHMuXG4gKiBAbWV0aG9kIG1hbmlmZXN0UmV0cmlldmVyXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IG1hbmlmZXN0IFRoZSBNYW5pZmVzdCBVUkxcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgVGhlIHByb21pc2UgdG8gY29tcGxldGUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgVGhlIHByb21pc2UgdG8gcmVqZWN0LlxuICovXG5SZXNvdXJjZS5wcm90b3R5cGUubWFuaWZlc3RSZXRyaWV2ZXIgPSBmdW5jdGlvbiAobWFuaWZlc3QsIHJlc29sdmUsIHJlamVjdCkge1xuICB2YXIgZGF0YTtcbiAgdHJ5IHtcbiAgICBkYXRhID0gbWFuaWZlc3Quc3Vic3RyKDExKTtcbiAgICBKU09OLnBhcnNlKGRhdGEpO1xuICAgIHJlc29sdmUoZGF0YSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0aGlzLmRlYnVnLndhcm4oXCJJbnZhbGlkIG1hbmlmZXN0IFVSTCByZWZlcmVuY2VkOlwiICsgbWFuaWZlc3QpO1xuICAgIHJlamVjdCgpO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHJpZXZlIHJlc291cmNlIGNvbnRlbnRzIHVzaW5nIGFuIFhIUiByZXF1ZXN0LlxuICogQG1ldGhvZCB4aHJSZXRyaWV2ZXJcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSByZXNvdXJjZSB0byBmZXRjaC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgVGhlIHByb21pc2UgdG8gY29tcGxldGUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgVGhlIHByb21pc2UgdG8gcmVqZWN0LlxuICovXG5SZXNvdXJjZS5wcm90b3R5cGUueGhyUmV0cmlldmVyID0gZnVuY3Rpb24gKHVybCwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gIHZhciByZWYgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgcmVmLmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsIGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBpZiAocmVmLnJlYWR5U3RhdGUgPT09IDQgJiYgcmVmLnJlc3BvbnNlVGV4dCkge1xuICAgICAgcmVzb2x2ZShyZWYucmVzcG9uc2VUZXh0KTtcbiAgICB9IGVsc2UgaWYgKHJlZi5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICB0aGlzLmRlYnVnLndhcm4oXCJGYWlsZWQgdG8gbG9hZCBmaWxlIFwiICsgdXJsICsgXCI6IFwiICsgcmVmLnN0YXR1cyk7XG4gICAgICByZWplY3QocmVmLnN0YXR1cyk7XG4gICAgfVxuICB9LmJpbmQodGhpcywgcmVzb2x2ZSwgcmVqZWN0KSwgZmFsc2UpO1xuICByZWYub3ZlcnJpZGVNaW1lVHlwZShcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gIHJlZi5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XG4gIHJlZi5zZW5kKCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlc291cmNlO1xuIiwiLypnbG9iYWxzIGNyeXB0bywgV2ViS2l0QmxvYkJ1aWxkZXIsIEJsb2IsIFVSTCAqL1xuLypnbG9iYWxzIHdlYmtpdFVSTCwgVWludDhBcnJheSwgVWludDE2QXJyYXksIEFycmF5QnVmZmVyICovXG4vKmpzbGludCBpbmRlbnQ6Mix3aGl0ZTp0cnVlLGJyb3dzZXI6dHJ1ZSxub2RlOnRydWUsc2xvcHB5OnRydWUgKi9cblxuLyoqXG4gKiBVdGlsaXR5IG1ldGhvZCB1c2VkIHdpdGhpbiB0aGUgZnJlZWRvbSBMaWJyYXJ5LlxuICogQGNsYXNzIHV0aWxcbiAqIEBzdGF0aWNcbiAqL1xudmFyIHV0aWwgPSB7fTtcblxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiBmb3IgaXRlcmF0aW5nIG92ZXIgYW4gYXJyYXkgYmFja3dhcmRzLiBJZiB0aGUgZnVuY1xuICogcmV0dXJucyBhIHRydWUgdmFsdWUsIGl0IHdpbGwgYnJlYWsgb3V0IG9mIHRoZSBsb29wLlxuICogQG1ldGhvZCBlYWNoUmV2ZXJzZVxuICogQHN0YXRpY1xuICovXG51dGlsLmVhY2hSZXZlcnNlID0gZnVuY3Rpb24oYXJ5LCBmdW5jKSB7XG4gIGlmIChhcnkpIHtcbiAgICB2YXIgaTtcbiAgICBmb3IgKGkgPSBhcnkubGVuZ3RoIC0gMTsgaSA+IC0xOyBpIC09IDEpIHtcbiAgICAgIGlmIChhcnlbaV0gJiYgZnVuYyhhcnlbaV0sIGksIGFyeSkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaGFzUHJvcFxuICogQHN0YXRpY1xuICovXG51dGlsLmhhc1Byb3AgPSBmdW5jdGlvbihvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufTtcblxuLyoqXG4gKiBDeWNsZXMgb3ZlciBwcm9wZXJ0aWVzIGluIGFuIG9iamVjdCBhbmQgY2FsbHMgYSBmdW5jdGlvbiBmb3IgZWFjaFxuICogcHJvcGVydHkgdmFsdWUuIElmIHRoZSBmdW5jdGlvbiByZXR1cm5zIGEgdHJ1dGh5IHZhbHVlLCB0aGVuIHRoZVxuICogaXRlcmF0aW9uIGlzIHN0b3BwZWQuXG4gKiBAbWV0aG9kIGVhY2hQcm9wXG4gKiBAc3RhdGljXG4gKi9cbnV0aWwuZWFjaFByb3AgPSBmdW5jdGlvbihvYmosIGZ1bmMpIHtcbiAgdmFyIHByb3A7XG4gIGZvciAocHJvcCBpbiBvYmopIHtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICBpZiAoZnVuYyhvYmpbcHJvcF0sIHByb3ApKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBTaW1wbGUgZnVuY3Rpb24gdG8gbWl4IGluIHByb3BlcnRpZXMgZnJvbSBzb3VyY2UgaW50byB0YXJnZXQsXG4gKiBidXQgb25seSBpZiB0YXJnZXQgZG9lcyBub3QgYWxyZWFkeSBoYXZlIGEgcHJvcGVydHkgb2YgdGhlIHNhbWUgbmFtZS5cbiAqIFRoaXMgaXMgbm90IHJvYnVzdCBpbiBJRSBmb3IgdHJhbnNmZXJyaW5nIG1ldGhvZHMgdGhhdCBtYXRjaFxuICogT2JqZWN0LnByb3RvdHlwZSBuYW1lcywgYnV0IHRoZSB1c2VzIG9mIG1peGluIGhlcmUgc2VlbSB1bmxpa2VseSB0b1xuICogdHJpZ2dlciBhIHByb2JsZW0gcmVsYXRlZCB0byB0aGF0LlxuICogQG1ldGhvZCBtaXhpblxuICogQHN0YXRpY1xuICovXG51dGlsLm1peGluID0gZnVuY3Rpb24odGFyZ2V0LCBzb3VyY2UsIGZvcmNlKSB7XG4gIGlmIChzb3VyY2UpIHtcbiAgICB1dGlsLmVhY2hQcm9wKHNvdXJjZSwgZnVuY3Rpb24gKHZhbHVlLCBwcm9wKSB7XG4gICAgICBpZiAoZm9yY2UgfHwgIXV0aWwuaGFzUHJvcCh0YXJnZXQsIHByb3ApKSB7XG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG4vKipcbiAqIEdldCBhIHVuaXF1ZSBJRC5cbiAqIEBtZXRob2QgZ2V0SWRcbiAqIEBzdGF0aWNcbiAqL1xudXRpbC5nZXRJZCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgZ3VpZCA9ICdndWlkJyxcbiAgICAgIGRvbWFpbiA9IDEyLFxuICAgICAgYnVmZmVyO1xuICAvLyBDaHJvbWUgLyBGaXJlZm94LlxuICBpZiAodHlwZW9mIGNyeXB0byA9PT0gJ29iamVjdCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcykge1xuICAgIGJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KGRvbWFpbik7XG4gICAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhidWZmZXIpO1xuICAgIHV0aWwuZWFjaFJldmVyc2UoYnVmZmVyLCBmdW5jdGlvbihuKSB7XG4gICAgICBndWlkICs9ICctJyArIG47XG4gICAgfSk7XG4gIC8vIE5vZGVcbiAgfSBlbHNlIGlmICh0eXBlb2YgY3J5cHRvID09PSAnb2JqZWN0JyAmJiBjcnlwdG8ucmFuZG9tQnl0ZXMpIHtcbiAgICBidWZmZXIgPSBjcnlwdG8ucmFuZG9tQnl0ZXMoZG9tYWluKTtcbiAgICB1dGlsLmVhY2hSZXZlcnNlKGJ1ZmZlciwgZnVuY3Rpb24obikge1xuICAgICAgZ3VpZCArPSAnLScgKyBuO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChkb21haW4gPiAwKSB7XG4gICAgICBndWlkICs9ICctJyArIE1hdGguY2VpbCgyNTUgKiBNYXRoLnJhbmRvbSgpKTtcbiAgICAgIGRvbWFpbiAtPSAxO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBndWlkO1xufTtcblxuLyoqXG4gKiBFbmNvZGUgYSBzdHJpbmcgaW50byBhIGJpbmFyeSBhcnJheSBidWZmZXIsIGJ5IHRyZWF0aW5nIGVhY2ggY2hhcmFjdGVyIGFzIGFcbiAqIHV0ZjE2IGVuY29kZWQgY2hhcmFjdGVyIC0gdGhlIG5hdGl2ZSBqYXZhc2NyaXB0IGVuY29kaW5nLlxuICogQG1ldGhvZCBzdHIyYWJcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBlbmNvZGUuXG4gKiBAcmV0dXJucyB7QXJyYXlCdWZmZXJ9IFRoZSBlbmNvZGVkIHN0cmluZy5cbiAqL1xudXRpbC5zdHIyYWIgPSBmdW5jdGlvbihzdHIpIHtcbiAgdmFyIGxlbmd0aCA9IHN0ci5sZW5ndGgsXG4gICAgICBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIobGVuZ3RoICogMiksIC8vIDIgYnl0ZXMgZm9yIGVhY2ggY2hhclxuICAgICAgYnVmZmVyVmlldyA9IG5ldyBVaW50MTZBcnJheShidWZmZXIpLFxuICAgICAgaTtcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgYnVmZmVyVmlld1tpXSA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICB9XG5cbiAgcmV0dXJuIGJ1ZmZlcjtcbn07XG5cbi8qKlxuICogQ29udmVydCBhbiBhcnJheSBidWZmZXIgY29udGFpbmluZyBhbiBlbmNvZGVkIHN0cmluZyBiYWNrIGludG8gYSBzdHJpbmcuXG4gKiBAbWV0aG9kIGFiMnN0clxuICogQHN0YXRpY1xuICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgdG8gdW53cmFwLlxuICogQHJldHVybnMge1N0cmluZ30gVGhlIGRlY29kZWQgYnVmZmVyLlxuICovXG51dGlsLmFiMnN0ciA9IGZ1bmN0aW9uKGJ1ZmZlcikge1xuICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBuZXcgVWludDE2QXJyYXkoYnVmZmVyKSk7XG59O1xuXG4vKipcbiAqIEFkZCAnb24nIGFuZCAnZW1pdCcgbWV0aG9kcyB0byBhbiBvYmplY3QsIHdoaWNoIGFjdCBhcyBhIGxpZ2h0IHdlaWdodFxuICogZXZlbnQgaGFuZGxpbmcgc3RydWN0dXJlLlxuICogQGNsYXNzIGhhbmRsZUV2ZW50c1xuICogQHN0YXRpY1xuICovXG51dGlsLmhhbmRsZUV2ZW50cyA9IGZ1bmN0aW9uKG9iaikge1xuICB2YXIgZXZlbnRTdGF0ZSA9IHtcbiAgICBERUJVR19CQUNLUkVGOiBvYmosXG4gICAgbXVsdGlwbGU6IHt9LFxuICAgIG1heWJlbXVsdGlwbGU6IFtdLFxuICAgIHNpbmdsZToge30sXG4gICAgbWF5YmVzaW5nbGU6IFtdXG4gIH0sIGZpbHRlciwgcHVzaDtcblxuICAvKipcbiAgICogRmlsdGVyIGEgbGlzdCBiYXNlZCBvbiBhIHByZWRpY2F0ZS4gVGhlIGxpc3QgaXMgZmlsdGVyZWQgaW4gcGxhY2UsIHdpdGhcbiAgICogc2VsZWN0ZWQgaXRlbXMgcmVtb3ZlZCBhbmQgcmV0dXJuZWQgYnkgdGhlIGZ1bmN0aW9uLlxuICAgKiBAbWV0aG9kXG4gICAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgVGhlIGxpc3QgdG8gZmlsdGVyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgbWV0aG9kIHRvIHJ1biBvbiBlYWNoIGl0ZW0uXG4gICAqIEByZXR1cm5zIHtBcnJheX0gU2VsZWN0ZWQgaXRlbXNcbiAgICovXG4gIGZpbHRlciA9IGZ1bmN0aW9uKGxpc3QsIHByZWRpY2F0ZSkge1xuICAgIHZhciByZXQgPSBbXSwgaTtcblxuICAgIGlmICghbGlzdCB8fCAhbGlzdC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSBsaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaSAtPSAxKSB7XG4gICAgICBpZiAocHJlZGljYXRlKGxpc3RbaV0pKSB7XG4gICAgICAgIHJldC5wdXNoKGxpc3Quc3BsaWNlKGksIDEpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfTtcblxuICAvKipcbiAgICogRW5xdWV1ZSBhIGhhbmRsZXIgZm9yIGEgc3BlY2lmaWMgdHlwZS5cbiAgICogQG1ldGhvZFxuICAgKiBAcGFyYW0ge1N0cmluZ30gdG8gVGhlIHF1ZXVlICgnc2luZ2xlJyBvciAnbXVsdGlwbGUnKSB0byBxdWV1ZSBvbi5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgVGhlIHR5cGUgb2YgZXZlbnQgdG8gd2FpdCBmb3IuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXIgVGhlIGhhbmRsZXIgdG8gZW5xdWV1ZS5cbiAgICovXG4gIHB1c2ggPSBmdW5jdGlvbih0bywgdHlwZSwgaGFuZGxlcikge1xuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpc1snbWF5YmUnICsgdG9dLnB1c2goW3R5cGUsIGhhbmRsZXJdKTtcbiAgICB9IGVsc2UgaWYgKHRoaXNbdG9dW3R5cGVdKSB7XG4gICAgICB0aGlzW3RvXVt0eXBlXS5wdXNoKGhhbmRsZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzW3RvXVt0eXBlXSA9IFtoYW5kbGVyXTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgbWV0aG9kIHRvIGJlIGV4ZWN1dGVkIHdoZW4gYW4gZXZlbnQgb2YgYSBzcGVjaWZpYyB0eXBlIG9jY3Vycy5cbiAgICogQG1ldGhvZCBvblxuICAgKiBAcGFyYW0ge1N0cmluZ3xGdW5jdGlvbn0gdHlwZSBUaGUgdHlwZSBvZiBldmVudCB0byByZWdpc3RlciBhZ2FpbnN0LlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIFRoZSBoYW5kbGVyIHRvIHJ1biB3aGVuIHRoZSBldmVudCBvY2N1cnMuXG4gICAqL1xuICBvYmoub24gPSBwdXNoLmJpbmQoZXZlbnRTdGF0ZSwgJ211bHRpcGxlJyk7XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgbWV0aG9kIHRvIGJlIGV4ZWN1dGUgdGhlIG5leHQgdGltZSBhbiBldmVudCBvY2N1cnMuXG4gICAqIEBtZXRob2Qgb25jZVxuICAgKiBAcGFyYW0ge1N0cmluZ3xGdW5jdGlvbn0gdHlwZSBUaGUgdHlwZSBvZiBldmVudCB0byB3YWl0IGZvci5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlciBUaGUgaGFuZGxlciB0byBydW4gdGhlIG5leHQgdGltZSBhIG1hdGNoaW5nIGV2ZW50XG4gICAqICAgICBpcyByYWlzZWQuXG4gICAqL1xuICBvYmoub25jZSA9IHB1c2guYmluZChldmVudFN0YXRlLCAnc2luZ2xlJyk7XG5cbiAgLyoqXG4gICAqIEVtaXQgYW4gZXZlbnQgb24gdGhpcyBvYmplY3QuXG4gICAqIEBtZXRob2QgZW1pdFxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBUaGUgdHlwZSBvZiBldmVudCB0byByYWlzZS5cbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgVGhlIHBheWxvYWQgb2YgdGhlIGV2ZW50LlxuICAgKi9cbiAgb2JqLmVtaXQgPSBmdW5jdGlvbih0eXBlLCBkYXRhKSB7XG4gICAgdmFyIGksIHF1ZXVlO1xuICAgIC8vIE5vdGUgdGhhdCByZWdpc3RlcmVkIGhhbmRsZXJzIG1heSBzdG9wIGV2ZW50cyBvbiB0aGUgb2JqZWN0LCBieSBjYWxsaW5nXG4gICAgLy8gdGhpcy5vZmYoKS4gQXMgc3VjaCwgdGhlIHByZXNlbmNlIG9mIHRoZXNlIGtleXMgbXVzdCBiZSBjaGVja2VkIG9uIGVhY2hcbiAgICAvLyBpdGVyYXRpb24gb2YgdGhlIHJlbGV2YW50IGxvb3BzLlxuICAgIGZvciAoaSA9IDA7IHRoaXMubXVsdGlwbGVbdHlwZV0gJiZcbiAgICAgICAgIGkgPCB0aGlzLm11bHRpcGxlW3R5cGVdLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodGhpcy5tdWx0aXBsZVt0eXBlXVtpXShkYXRhKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5zaW5nbGVbdHlwZV0pIHtcbiAgICAgIHF1ZXVlID0gdGhpcy5zaW5nbGVbdHlwZV07XG4gICAgICB0aGlzLnNpbmdsZVt0eXBlXSA9IFtdO1xuICAgICAgZm9yIChpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHF1ZXVlW2ldKGRhdGEpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5tYXliZW11bHRpcGxlLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodGhpcy5tYXliZW11bHRpcGxlW2ldWzBdKHR5cGUsIGRhdGEpKSB7XG4gICAgICAgIHRoaXMubWF5YmVtdWx0aXBsZVtpXVsxXShkYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChpID0gdGhpcy5tYXliZXNpbmdsZS5sZW5ndGggLSAxOyBpID49IDA7IGkgLT0gMSkge1xuICAgICAgaWYgKHRoaXMubWF5YmVzaW5nbGVbaV1bMF0odHlwZSwgZGF0YSkpIHtcbiAgICAgICAgcXVldWUgPSB0aGlzLm1heWJlc2luZ2xlLnNwbGljZShpLCAxKTtcbiAgICAgICAgcXVldWVbMF1bMV0oZGF0YSk7XG4gICAgICB9XG4gICAgfVxuICB9LmJpbmQoZXZlbnRTdGF0ZSk7XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbiBldmVudCBoYW5kbGVyXG4gICAqIEBtZXRob2Qgb2ZmXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIFRoZSB0eXBlIG9mIGV2ZW50IHRvIHJlbW92ZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbj99IGhhbmRsZXIgVGhlIGhhbmRsZXIgdG8gcmVtb3ZlLlxuICAgKi9cbiAgb2JqLm9mZiA9IGZ1bmN0aW9uKHR5cGUsIGhhbmRsZXIpIHtcbiAgICBpZiAoIXR5cGUpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLkRFQlVHX0JBQ0tSRUY7XG4gICAgICB0aGlzLm11bHRpcGxlID0ge307XG4gICAgICB0aGlzLm1heWJlbXVsdGlwbGUgPSBbXTtcbiAgICAgIHRoaXMuc2luZ2xlID0ge307XG4gICAgICB0aGlzLm1heWJlc2luZ2xlID0gW107XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBmaWx0ZXIodGhpcy5tYXliZXNpbmdsZSwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbVswXSA9PT0gdHlwZSAmJiAoIWhhbmRsZXIgfHwgaXRlbVsxXSA9PT0gaGFuZGxlcik7XG4gICAgICB9KTtcbiAgICAgIGZpbHRlcih0aGlzLm1heWJlbXVsdGlwbGUsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW1bMF0gPT09IHR5cGUgJiYgKCFoYW5kbGVyIHx8IGl0ZW1bMV0gPT09IGhhbmRsZXIpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCFoYW5kbGVyKSB7XG4gICAgICBkZWxldGUgdGhpcy5tdWx0aXBsZVt0eXBlXTtcbiAgICAgIGRlbGV0ZSB0aGlzLnNpbmdsZVt0eXBlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmlsdGVyKHRoaXMubXVsdGlwbGVbdHlwZV0sIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0gPT09IGhhbmRsZXI7XG4gICAgICB9KTtcbiAgICAgIGZpbHRlcih0aGlzLnNpbmdsZVt0eXBlXSwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbSA9PT0gaGFuZGxlcjtcbiAgICAgIH0pO1xuICAgIH1cbiAgfS5iaW5kKGV2ZW50U3RhdGUpO1xufTtcblxuLyoqXG4gKiBXaGVuIHJ1biB3aXRob3V0IGEgd2luZG93LCBvciBzcGVjaWZpY2FsbHkgcmVxdWVzdGVkLlxuICogTm90ZTogRGVjbGFyYXRpb24gY2FuIGJlIHJlZGVmaW5lZCBpbiBmb3JjZU1vZHVsZUNvbnRleHQgYmVsb3cuXG4gKiBAbWV0aG9kIGlzTW9kdWxlQ29udGV4dFxuICogQGZvciB1dGlsXG4gKiBAc3RhdGljXG4gKi9cbi8qIUBwcmVzZXJ2ZSBTdGFydE1vZHVsZUNvbnRleHREZWNsYXJhdGlvbiovXG51dGlsLmlzTW9kdWxlQ29udGV4dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpO1xufTtcblxuLyoqXG4gKiBHZXQgYSBCbG9iIG9iamVjdCBvZiBhIHN0cmluZy5cbiAqIFBvbHlmaWxscyBpbXBsZW1lbnRhdGlvbnMgd2hpY2ggZG9uJ3QgaGF2ZSBhIGN1cnJlbnQgQmxvYiBjb25zdHJ1Y3RvciwgbGlrZVxuICogcGhhbnRvbWpzLlxuICogQG1ldGhvZCBnZXRCbG9iXG4gKiBAc3RhdGljXG4gKi9cbnV0aWwuZ2V0QmxvYiA9IGZ1bmN0aW9uKGRhdGEsIHR5cGUpIHtcbiAgaWYgKHR5cGVvZiBCbG9iICE9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBXZWJLaXRCbG9iQnVpbGRlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgYnVpbGRlciA9IG5ldyBXZWJLaXRCbG9iQnVpbGRlcigpO1xuICAgIGJ1aWxkZXIuYXBwZW5kKGRhdGEpO1xuICAgIHJldHVybiBidWlsZGVyLmdldEJsb2IodHlwZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBCbG9iKFtkYXRhXSwge3R5cGU6IHR5cGV9KTtcbiAgfVxufTtcblxuLyoqXG4gKiBGaW5kIGFsbCBzY3JpcHRzIG9uIHRoZSBnaXZlbiBwYWdlLlxuICogQG1ldGhvZCBzY3JpcHRzXG4gKiBAc3RhdGljXG4gKi9cbnV0aWwuc2NyaXB0cyA9IGZ1bmN0aW9uKGdsb2JhbCkge1xuICByZXR1cm4gZ2xvYmFsLmRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdXRpbDtcbiIsIihmdW5jdGlvbiAoZ2xvYmFsKXtcbi8qanNsaW50IG5vZGU6dHJ1ZSovXG5cbnZhciBwcm92aWRlcnMgPSBbXG4gIHJlcXVpcmUoJy4uLy4uL3Byb3ZpZGVycy9jb3JlL2NvcmUudW5wcml2aWxlZ2VkJyksXG4gIHJlcXVpcmUoJy4uLy4uL3Byb3ZpZGVycy9jb3JlL2NvcmUuZWNobycpLFxuICByZXF1aXJlKCcuLi8uLi9wcm92aWRlcnMvY29yZS9jb3JlLmNvbnNvbGUnKSxcbiAgcmVxdWlyZSgnLi4vLi4vcHJvdmlkZXJzL2NvcmUvY29yZS5wZWVyY29ubmVjdGlvbicpLFxuICByZXF1aXJlKCcuLi8uLi9wcm92aWRlcnMvY29yZS9jb3JlLnJ0Y3BlZXJjb25uZWN0aW9uJyksXG4gIHJlcXVpcmUoJy4uLy4uL3Byb3ZpZGVycy9jb3JlL2NvcmUucnRjZGF0YWNoYW5uZWwnKSxcbiAgcmVxdWlyZSgnLi4vLi4vcHJvdmlkZXJzL2NvcmUvY29yZS5zdG9yYWdlJyksXG4gIHJlcXVpcmUoJy4uLy4uL3Byb3ZpZGVycy9jb3JlL2NvcmUudmlldycpLFxuICByZXF1aXJlKCcuLi8uLi9wcm92aWRlcnMvY29yZS9jb3JlLm9hdXRoJyksXG4gIHJlcXVpcmUoJy4uLy4uL3Byb3ZpZGVycy9jb3JlL2NvcmUud2Vic29ja2V0JyksXG4gIHJlcXVpcmUoJy4uLy4uL3Byb3ZpZGVycy9jb3JlL2NvcmUueGhyJylcbl07XG5cbmZ1bmN0aW9uIGdldEZyZWVkb21TY3JpcHQoKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdmFyIHNjcmlwdDtcbiAgaWYgKHdpbmRvdy5kb2N1bWVudC5jdXJyZW50U2NyaXB0KSB7XG4gICAgLy8gTmV3IGJyb3dzZXIgQVBJXG4gICAgc2NyaXB0ID0gd2luZG93LmRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuICB9IGVsc2UgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwiY29tcGxldGVcIiAmJlxuICAgICAgICAgICAgIGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGVkXCIpIHtcbiAgICAvLyBJbmNsdWRlZCBpbiBIVE1MIG9yIHRocm91Z2ggZG9jdW1lbnQud3JpdGVcbiAgICBzY3JpcHQgPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpO1xuICAgIHNjcmlwdCA9IHNjcmlwdFtzY3JpcHQubGVuZ3RoIC0gMV0uc3JjO1xuICB9IGVsc2Uge1xuICAgIC8vIExvYWRlZCB0aHJvdWdoIGRvbSBtYW5pcHVsYXRpb24gb3IgYXN5bmMuXG4gICAgc2NyaXB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwic2NyaXB0W3NyYyo9J2ZyZWVkb20uanMnXSxzY3JpcHRbc3JjKj0nZnJlZWRvbS0nXVwiXG4gICAgKTtcbiAgICBpZiAoc2NyaXB0Lmxlbmd0aCAhPT0gMSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIkNvdWxkIG5vdCBkZXRlcm1pbmUgZnJlZWRvbS5qcyBzY3JpcHQgdGFnLlwiKTtcbiAgICB9XG4gICAgc2NyaXB0ID0gc2NyaXB0WzBdLnNyYztcbiAgfVxuICByZXR1cm4gc2NyaXB0O1xufVxuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgd2luZG93LmZyZWVkb20gPSByZXF1aXJlKCcuLi9lbnRyeScpLmJpbmQoe30sIHtcbiAgICBsb2NhdGlvbjogd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgcG9ydFR5cGU6IHJlcXVpcmUoJy4uL2xpbmsvd29ya2VyJyksXG4gICAgc291cmNlOiBnZXRGcmVlZG9tU2NyaXB0KCksXG4gICAgcHJvdmlkZXJzOiBwcm92aWRlcnMsXG4gICAgb2F1dGg6IFtcbiAgICAgIHJlcXVpcmUoJy4uLy4uL3Byb3ZpZGVycy9vYXV0aC9vYXV0aC5sb2NhbHBhZ2VhdXRoJyksXG4gICAgICByZXF1aXJlKCcuLi8uLi9wcm92aWRlcnMvb2F1dGgvb2F1dGgucmVtb3RlcGFnZWF1dGgnKVxuICAgIF1cbiAgfSk7XG59IGVsc2Uge1xuICByZXF1aXJlKCcuLi9lbnRyeScpKHtcbiAgICBpc01vZHVsZTogdHJ1ZSxcbiAgICBwb3J0VHlwZTogcmVxdWlyZSgnLi4vbGluay93b3JrZXInKSxcbiAgICBwcm92aWRlcnM6IHByb3ZpZGVycyxcbiAgICBnbG9iYWw6IGdsb2JhbFxuICB9KTtcbn1cblxufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pIl19