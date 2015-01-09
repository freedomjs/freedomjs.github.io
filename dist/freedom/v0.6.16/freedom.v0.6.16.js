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
 * @version 0.6.16
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

var XhrProvider = function(cap, dispatchEvent) {
  "use strict";
  this._dispatchEvent = dispatchEvent;
  this._xhr = new XMLHttpRequest();

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1aWxkL25vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC9kaXN0L2J1bmRsZS5jb21waWxlZC5qcyIsImJ1aWxkL25vZGVfbW9kdWxlcy9lczYtcHJvbWlzZS9kaXN0L2VzNi1wcm9taXNlLmpzIiwiYnVpbGQvbm9kZV9tb2R1bGVzL2dydW50LWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsImJ1aWxkL25vZGVfbW9kdWxlcy93ZWJydGMtYWRhcHRlci9hZGFwdGVyLmpzIiwiYnVpbGQvcHJvdmlkZXJzL2NvcmUvY29yZS5jb25zb2xlLmpzIiwiYnVpbGQvcHJvdmlkZXJzL2NvcmUvY29yZS5lY2hvLmpzIiwiYnVpbGQvcHJvdmlkZXJzL2NvcmUvY29yZS5vYXV0aC5qcyIsImJ1aWxkL3Byb3ZpZGVycy9jb3JlL2NvcmUucGVlcmNvbm5lY3Rpb24uanMiLCJidWlsZC9wcm92aWRlcnMvY29yZS9jb3JlLnJ0Y2RhdGFjaGFubmVsLmpzIiwiYnVpbGQvcHJvdmlkZXJzL2NvcmUvY29yZS5ydGNwZWVyY29ubmVjdGlvbi5qcyIsImJ1aWxkL3Byb3ZpZGVycy9jb3JlL2NvcmUuc3RvcmFnZS5qcyIsImJ1aWxkL3Byb3ZpZGVycy9jb3JlL2NvcmUudW5wcml2aWxlZ2VkLmpzIiwiYnVpbGQvcHJvdmlkZXJzL2NvcmUvY29yZS52aWV3LmpzIiwiYnVpbGQvcHJvdmlkZXJzL2NvcmUvY29yZS53ZWJzb2NrZXQuanMiLCJidWlsZC9wcm92aWRlcnMvY29yZS9jb3JlLnhoci5qcyIsImJ1aWxkL3Byb3ZpZGVycy9vYXV0aC9vYXV0aC5sb2NhbHBhZ2VhdXRoLmpzIiwiYnVpbGQvcHJvdmlkZXJzL29hdXRoL29hdXRoLnJlbW90ZXBhZ2VhdXRoLmpzIiwiYnVpbGQvc3JjL2FwaS5qcyIsImJ1aWxkL3NyYy9idW5kbGUuanMiLCJidWlsZC9zcmMvY29uc3VtZXIuanMiLCJidWlsZC9zcmMvZGVidWcuanMiLCJidWlsZC9zcmMvZW50cnkuanMiLCJidWlsZC9zcmMvaHViLmpzIiwiYnVpbGQvc3JjL2xpbmsuanMiLCJidWlsZC9zcmMvbGluay93b3JrZXIuanMiLCJidWlsZC9zcmMvbWFuYWdlci5qcyIsImJ1aWxkL3NyYy9tb2R1bGUuanMiLCJidWlsZC9zcmMvbW9kdWxlaW50ZXJuYWwuanMiLCJidWlsZC9zcmMvcG9saWN5LmpzIiwiYnVpbGQvc3JjL3Byb3ZpZGVyLmpzIiwiYnVpbGQvc3JjL3Byb3h5L2FwaUludGVyZmFjZS5qcyIsImJ1aWxkL3NyYy9wcm94eS9ldmVudEludGVyZmFjZS5qcyIsImJ1aWxkL3NyYy9wcm94eWJpbmRlci5qcyIsImJ1aWxkL3NyYy9yZXNvdXJjZS5qcyIsImJ1aWxkL3NyYy91dGlsLmpzIiwiYnVpbGQvc3JjL3V0aWwvd29ya2VyRW50cnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUNBQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDajhCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaE9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDalBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25MQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeGRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbk5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDamFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2phQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1UEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5VkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJmcmVlZG9tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IFt7XCJuYW1lXCI6XCJjb25zb2xlXCIsXCJhcGlcIjp7XCJsb2dcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJzdHJpbmdcIl19LFwiZGVidWdcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJzdHJpbmdcIl19LFwiaW5mb1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcInN0cmluZ1wiXX0sXCJ3YXJuXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwic3RyaW5nXCJdfSxcImVycm9yXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwic3RyaW5nXCJdfX19LHtcIm5hbWVcIjpcImNvcmUuY29uc29sZVwiLFwiYXBpXCI6e1wibG9nXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwic3RyaW5nXCJdfSxcImRlYnVnXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwic3RyaW5nXCJdfSxcImluZm9cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJzdHJpbmdcIl19LFwid2FyblwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcInN0cmluZ1wiXX0sXCJlcnJvclwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcInN0cmluZ1wiXX19fSx7XCJuYW1lXCI6XCJjb3JlLmVjaG9cIixcImFwaVwiOntcInNldHVwXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXX0sXCJzZW5kXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXX0sXCJtZXNzYWdlXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6XCJzdHJpbmdcIn19fSx7XCJuYW1lXCI6XCJjb3JlXCIsXCJhcGlcIjp7XCJjcmVhdGVDaGFubmVsXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6e1wiY2hhbm5lbFwiOlwicHJveHlcIixcImlkZW50aWZpZXJcIjpcInN0cmluZ1wifX0sXCJiaW5kQ2hhbm5lbFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcInByb3h5XCJ9LFwiZ2V0SWRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpbXCJhcnJheVwiLFwic3RyaW5nXCJdfSxcImdldExvZ2dlclwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcInByb3h5XCJ9fX0se1wibmFtZVwiOlwiY29yZS5vYXV0aFwiLFwiYXBpXCI6e1wiaW5pdGlhdGVPQXV0aFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbW1wiYXJyYXlcIixcInN0cmluZ1wiXV0sXCJyZXRcIjp7XCJyZWRpcmVjdFwiOlwic3RyaW5nXCIsXCJzdGF0ZVwiOlwic3RyaW5nXCJ9LFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwibGF1bmNoQXV0aEZsb3dcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIse1wicmVkaXJlY3RcIjpcInN0cmluZ1wiLFwic3RhdGVcIjpcInN0cmluZ1wifV0sXCJyZXRcIjpcInN0cmluZ1wiLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19fX0se1wibmFtZVwiOlwiY29yZS5wZWVyY29ubmVjdGlvblwiLFwiYXBpXCI6e1wic2V0dXBcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJzdHJpbmdcIixbXCJhcnJheVwiLFwic3RyaW5nXCJdLFwiYm9vbGVhblwiXX0sXCJzZW5kXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOlt7XCJjaGFubmVsTGFiZWxcIjpcInN0cmluZ1wiLFwidGV4dFwiOlwic3RyaW5nXCIsXCJiaW5hcnlcIjpcImJsb2JcIixcImJ1ZmZlclwiOlwiYnVmZmVyXCJ9XX0sXCJvblJlY2VpdmVkXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wiY2hhbm5lbExhYmVsXCI6XCJzdHJpbmdcIixcInRleHRcIjpcInN0cmluZ1wiLFwiYmluYXJ5XCI6XCJibG9iXCIsXCJidWZmZXJcIjpcImJ1ZmZlclwifX0sXCJvcGVuRGF0YUNoYW5uZWxcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCJdfSxcImNsb3NlRGF0YUNoYW5uZWxcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCJdfSxcIm9uT3BlbkRhdGFDaGFubmVsXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wiY2hhbm5lbElkXCI6XCJzdHJpbmdcIn19LFwib25DbG9zZURhdGFDaGFubmVsXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wiY2hhbm5lbElkXCI6XCJzdHJpbmdcIn19LFwiZ2V0QnVmZmVyZWRBbW91bnRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCJdLFwicmV0XCI6XCJudW1iZXJcIn0sXCJnZXRJbmZvXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJzdHJpbmdcIn0sXCJjcmVhdGVPZmZlclwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbe1wib2ZmZXJUb1JlY2VpdmVWaWRlb1wiOlwibnVtYmVyXCIsXCJvZmZlclRvUmVjZWl2ZUF1ZGlvXCI6XCJudW1iZXJcIixcInZvaWNlQWN0aXZpdHlEZXRlY3Rpb25cIjpcImJvb2xlYW5cIixcImljZVJlc3RhcnRcIjpcImJvb2xlYW5cIn1dLFwicmV0XCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJzZHBcIjpcInN0cmluZ1wifX0sXCJjbG9zZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXX0sXCJvbkNsb3NlXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e319fX0se1wibmFtZVwiOlwiY29yZS5ydGNkYXRhY2hhbm5lbFwiLFwiYXBpXCI6e1wiY29uc3RydWN0b3JcIjp7XCJ2YWx1ZVwiOltcInN0cmluZ1wiXX0sXCJnZXRMYWJlbFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwic3RyaW5nXCJ9LFwiZ2V0T3JkZXJlZFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwiYm9vbGVhblwifSxcImdldE1heFBhY2tldExpZmVUaW1lXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJudW1iZXJcIn0sXCJnZXRNYXhSZXRyYW5zbWl0c1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwibnVtYmVyXCJ9LFwiZ2V0UHJvdG9jb2xcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcInN0cmluZ1wifSxcImdldE5lZ290aWF0ZWRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcImJvb2xlYW5cIn0sXCJnZXRJZFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwibnVtYmVyXCJ9LFwiZ2V0UmVhZHlTdGF0ZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwic3RyaW5nXCJ9LFwiZ2V0QnVmZmVyZWRBbW91bnRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcIm51bWJlclwifSxcIm9ub3BlblwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOltdfSxcIm9uZXJyb3JcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjpbXX0sXCJvbmNsb3NlXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6W119LFwiY2xvc2VcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W119LFwib25tZXNzYWdlXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1widGV4dFwiOlwic3RyaW5nXCIsXCJidWZmZXJcIjpcImJ1ZmZlclwifX0sXCJnZXRCaW5hcnlUeXBlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJzdHJpbmdcIn0sXCJzZXRCaW5hcnlUeXBlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXX0sXCJzZW5kXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXX0sXCJzZW5kQnVmZmVyXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcImJ1ZmZlclwiXX19fSx7XCJuYW1lXCI6XCJjb3JlLnJ0Y3BlZXJjb25uZWN0aW9uXCIsXCJhcGlcIjp7XCJjb25zdHJ1Y3RvclwiOntcInZhbHVlXCI6W3tcImljZVNlcnZlcnNcIjpbXCJhcnJheVwiLHtcInVybHNcIjpbXCJhcnJheVwiLFwic3RyaW5nXCJdLFwidXNlcm5hbWVcIjpcInN0cmluZ1wiLFwiY3JlZGVudGlhbFwiOlwic3RyaW5nXCJ9XSxcImljZVRyYW5zcG9ydHNcIjpcInN0cmluZ1wiLFwicGVlcklkZW50aXR5XCI6XCJzdHJpbmdcIn1dfSxcImNyZWF0ZU9mZmVyXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOlt7XCJvZmZlclRvUmVjZWl2ZUF1ZGlvXCI6XCJudW1iZXJcIixcIm9mZmVyVG9SZWNlaXZlVmlkZW9cIjpcIm51bWJlclwiLFwiaWNlUmVzdGFydFwiOlwiYm9vbGVhblwiLFwidm9pY2VBY3Rpdml0eURldGVjdGlvblwiOlwiYm9vbGVhblwifV0sXCJyZXRcIjp7XCJ0eXBlXCI6XCJzdHJpbmdcIixcInNkcFwiOlwic3RyaW5nXCJ9fSxcImNyZWF0ZUFuc3dlclwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwic2RwXCI6XCJzdHJpbmdcIn19LFwic2V0TG9jYWxEZXNjcmlwdGlvblwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbe1widHlwZVwiOlwic3RyaW5nXCIsXCJzZHBcIjpcInN0cmluZ1wifV19LFwiZ2V0TG9jYWxEZXNjcmlwdGlvblwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwic2RwXCI6XCJzdHJpbmdcIn19LFwic2V0UmVtb3RlRGVzY3JpcHRpb25cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W3tcInR5cGVcIjpcInN0cmluZ1wiLFwic2RwXCI6XCJzdHJpbmdcIn1dLFwicmV0XCI6e319LFwiZ2V0UmVtb3RlRGVzY3JpcHRpb25cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjp7XCJ0eXBlXCI6XCJzdHJpbmdcIixcInNkcFwiOlwic3RyaW5nXCJ9fSxcImdldFNpZ25hbGluZ1N0YXRlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJzdHJpbmdcIn0sXCJ1cGRhdGVJY2VcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W3tcImljZVNlcnZlcnNcIjpbXCJhcnJheVwiLHtcInVybHNcIjpbXCJhcnJheVwiLFwic3RyaW5nXCJdLFwidXNlcm5hbWVcIjpcInN0cmluZ1wiLFwiY3JlZGVudGlhbFwiOlwic3RyaW5nXCJ9XSxcImljZVRyYW5zcG9ydHNcIjpcInN0cmluZ1wiLFwicGVlcklkZW50aXR5XCI6XCJzdHJpbmdcIn1dLFwicmV0XCI6e319LFwiYWRkSWNlQ2FuZGlkYXRlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOlt7XCJjYW5kaWRhdGVcIjpcInN0cmluZ1wiLFwic2RwTWlkXCI6XCJzdHJpbmdcIixcInNkcE1MaW5lSW5kZXhcIjpcIm51bWJlclwifV0sXCJyZXRcIjp7fX0sXCJnZXRJY2VHYXRoZXJpbmdTdGF0ZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwic3RyaW5nXCJ9LFwiZ2V0SWNlQ29ubmVjdGlvblN0YXRlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJzdHJpbmdcIn0sXCJnZXRDb25maWd1cmF0aW9uXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6e1wiaWNlU2VydmVyc1wiOltcImFycmF5XCIse1widXJsc1wiOltcImFycmF5XCIsXCJzdHJpbmdcIl0sXCJ1c2VybmFtZVwiOlwic3RyaW5nXCIsXCJjcmVkZW50aWFsXCI6XCJzdHJpbmdcIn1dLFwiaWNlVHJhbnNwb3J0c1wiOlwic3RyaW5nXCIsXCJwZWVySWRlbnRpdHlcIjpcInN0cmluZ1wifX0sXCJnZXRMb2NhbFN0cmVhbXNcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpbXCJhcnJheVwiLFwic3RyaW5nXCJdfSxcImdldFJlbW90ZVN0cmVhbXNcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpbXCJhcnJheVwiLFwic3RyaW5nXCJdfSxcImdldFN0cmVhbUJ5SWRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCJdLFwicmV0XCI6XCJzdHJpbmdcIn0sXCJhZGRTdHJlYW1cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCJdLFwicmV0XCI6e319LFwicmVtb3ZlU3RyZWFtXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXSxcInJldFwiOnt9fSxcImNsb3NlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6e319LFwiY3JlYXRlRGF0YUNoYW5uZWxcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIse1wib3JkZXJlZFwiOlwiYm9vbGVhblwiLFwibWF4UGFja2V0TGlmZVRpbWVcIjpcIm51bWJlclwiLFwibWF4UmV0cmFuc21pdHNcIjpcIm51bWJlclwiLFwicHJvdG9jb2xcIjpcInN0cmluZ1wiLFwibmVnb3RpYXRlZFwiOlwiYm9vbGVhblwiLFwiaWRcIjpcIm51bWJlclwifV0sXCJyZXRcIjpcInN0cmluZ1wifSxcIm9uZGF0YWNoYW5uZWxcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJjaGFubmVsXCI6XCJzdHJpbmdcIn19LFwiZ2V0U3RhdHNcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCJdLFwicmV0XCI6XCJvYmplY3RcIn0sXCJvbm5lZ290aWF0aW9ubmVlZGVkXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6W119LFwib25pY2VjYW5kaWRhdGVcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJjYW5kaWRhdGVcIjp7XCJjYW5kaWRhdGVcIjpcInN0cmluZ1wiLFwic2RwTWlkXCI6XCJzdHJpbmdcIixcInNkcE1MaW5lSW5kZXhcIjpcIm51bWJlclwifX19LFwib25zaWduYWxpbmdzdGF0ZWNoYW5nZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOltdfSxcIm9uYWRkc3RyZWFtXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wic3RyZWFtXCI6XCJudW1iZXJcIn19LFwib25yZW1vdmVzdHJlYW1cIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJzdHJlYW1cIjpcIm51bWJlclwifX0sXCJvbmljZWNvbm5lY3Rpb25zdGF0ZWNoYW5nZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOltdfX19LHtcIm5hbWVcIjpcImNvcmUuc3RvcmFnZVwiLFwiYXBpXCI6e1wia2V5c1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOltcImFycmF5XCIsXCJzdHJpbmdcIl19LFwiZ2V0XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXSxcInJldFwiOlwic3RyaW5nXCJ9LFwic2V0XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwic3RyaW5nXCJdLFwicmV0XCI6XCJzdHJpbmdcIn0sXCJyZW1vdmVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCJdLFwicmV0XCI6XCJzdHJpbmdcIn0sXCJjbGVhclwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXX19fSx7XCJuYW1lXCI6XCJjb3JlLnRjcHNvY2tldFwiLFwiYXBpXCI6e1wiY29uc3RydWN0b3JcIjp7XCJ2YWx1ZVwiOltcIm51bWJlclwiXX0sXCJnZXRJbmZvXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6e1wiY29ubmVjdGVkXCI6XCJib29sZWFuXCIsXCJsb2NhbEFkZHJlc3NcIjpcInN0cmluZ1wiLFwibG9jYWxQb3J0XCI6XCJudW1iZXJcIixcInBlZXJBZGRyZXNzXCI6XCJzdHJpbmdcIixcInBlZXJQb3J0XCI6XCJudW1iZXJcIn19LFwiRVJSQ09ERVwiOntcInR5cGVcIjpcImNvbnN0YW50XCIsXCJ2YWx1ZVwiOntcIlNVQ0NFU1NcIjpcIlN1Y2Nlc3MhXCIsXCJVTktOT1dOXCI6XCJVbmtub3duIGVycm9yXCIsXCJBTFJFQURZX0NPTk5FQ1RFRFwiOlwiU29ja2V0IGFscmVhZHkgY29ubmVjdGVkXCIsXCJJTlZBTElEX0FSR1VNRU5UXCI6XCJJbnZhbGlkIGFyZ3VtZW50XCIsXCJUSU1FRF9PVVRcIjpcIlRpbWVkIG91dFwiLFwiTk9UX0NPTk5FQ1RFRFwiOlwiU29ja2V0IG5vdCBjb25uZWN0ZWRcIixcIk5FVFdPUktfQ0hBTkdFRFwiOlwiTmV0d29yayBjaGFuZ2VkXCIsXCJDT05ORUNUSU9OX0NMT1NFRFwiOlwiQ29ubmVjdGlvbiBjbG9zZWQgZ3JhY2VmdWxseVwiLFwiQ09OTkVDVElPTl9SRVNFVFwiOlwiQ29ubmVjdGlvbiByZXNldFwiLFwiQ09OTkVDVElPTl9SRUZVU0VEXCI6XCJDb25uZWN0aW9uIHJlZnVzZWRcIixcIkNPTk5FQ1RJT05fRkFJTEVEXCI6XCJDb25uZWN0aW9uIGZhaWxlZFwifX0sXCJjbG9zZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcIm9uRGlzY29ubmVjdFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcImNvbm5lY3RcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJudW1iZXJcIl0sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJzZWN1cmVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJwcmVwYXJlU2VjdXJlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwid3JpdGVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wiYnVmZmVyXCJdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwib25EYXRhXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wiZGF0YVwiOlwiYnVmZmVyXCJ9fSxcImxpc3RlblwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcIm51bWJlclwiXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcIm9uQ29ubmVjdGlvblwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcInNvY2tldFwiOlwibnVtYmVyXCIsXCJob3N0XCI6XCJzdHJpbmdcIixcInBvcnRcIjpcIm51bWJlclwifX19fSx7XCJuYW1lXCI6XCJjb3JlLnVkcHNvY2tldFwiLFwiYXBpXCI6e1wiRVJSQ09ERVwiOntcInR5cGVcIjpcImNvbnN0YW50XCIsXCJ2YWx1ZVwiOntcIlNVQ0NFU1NcIjpcIlN1Y2Nlc3MhXCIsXCJVTktOT1dOXCI6XCJVbmtub3duIGVycm9yXCIsXCJBTFJFQURZX0JPVU5EXCI6XCJTb2NrZXQgYWxyZWFkeSBib3VuZFwiLFwiSU5WQUxJRF9BUkdVTUVOVFwiOlwiSW52YWxpZCBhcmd1bWVudFwiLFwiTkVUV09SS19DSEFOR0VEXCI6XCJOZXR3b3JrIGNoYW5nZWRcIixcIlNORURfRkFJTEVEXCI6XCJTZW5kIGZhaWxlZFwifX0sXCJiaW5kXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwibnVtYmVyXCJdLFwicmV0XCI6W10sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJnZXRJbmZvXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6e1wibG9jYWxBZGRyZXNzXCI6XCJzdHJpbmdcIixcImxvY2FsUG9ydFwiOlwibnVtYmVyXCJ9fSxcInNlbmRUb1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJidWZmZXJcIixcInN0cmluZ1wiLFwibnVtYmVyXCJdLFwicmV0XCI6XCJudW1iZXJcIixcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcImRlc3Ryb3lcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W119LFwib25EYXRhXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wicmVzdWx0Q29kZVwiOlwibnVtYmVyXCIsXCJhZGRyZXNzXCI6XCJzdHJpbmdcIixcInBvcnRcIjpcIm51bWJlclwiLFwiZGF0YVwiOlwiYnVmZmVyXCJ9fX19LHtcIm5hbWVcIjpcImNvcmUudmlld1wiLFwiYXBpXCI6e1wic2hvd1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl19LFwiaXNTZWN1cmVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcImJvb2xlYW5cIn0sXCJjbG9zZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXX0sXCJwb3N0TWVzc2FnZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJvYmplY3RcIl19LFwibWVzc2FnZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOlwib2JqZWN0XCJ9LFwib25DbG9zZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOltdfX19LHtcIm5hbWVcIjpcImNvcmUud2Vic29ja2V0XCIsXCJhcGlcIjp7XCJjb25zdHJ1Y3RvclwiOntcInZhbHVlXCI6W1wic3RyaW5nXCIsW1wiYXJyYXlcIixcInN0cmluZ1wiXV19LFwic2VuZFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbe1widGV4dFwiOlwic3RyaW5nXCIsXCJiaW5hcnlcIjpcImJsb2JcIixcImJ1ZmZlclwiOlwiYnVmZmVyXCJ9XSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcImdldFJlYWR5U3RhdGVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcIm51bWJlclwifSxcImdldEJ1ZmZlcmVkQW1vdW50XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXSxcInJldFwiOlwibnVtYmVyXCJ9LFwiY2xvc2VcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wibnVtYmVyXCIsXCJzdHJpbmdcIl0sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJvbk1lc3NhZ2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJ0ZXh0XCI6XCJzdHJpbmdcIixcImJpbmFyeVwiOlwiYmxvYlwiLFwiYnVmZmVyXCI6XCJidWZmZXJcIn19LFwib25PcGVuXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6W119LFwib25FcnJvclwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcIm9uQ2xvc2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJjb2RlXCI6XCJudW1iZXJcIixcInJlYXNvblwiOlwic3RyaW5nXCIsXCJ3YXNDbGVhblwiOlwiYm9vbGVhblwifX19fSx7XCJuYW1lXCI6XCJjb3JlLnhoclwiLFwiYXBpXCI6e1wib3BlblwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcInN0cmluZ1wiLFwiYm9vbGVhblwiLFwic3RyaW5nXCIsXCJzdHJpbmdcIl0sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJzZW5kXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOlt7XCJzdHJpbmdcIjpcInN0cmluZ1wiLFwiYnVmZmVyXCI6XCJidWZmZXJcIn1dfSxcImFib3J0XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdfSxcImdldFJlc3BvbnNlSGVhZGVyXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXSxcInJldFwiOlwic3RyaW5nXCJ9LFwiZ2V0QWxsUmVzcG9uc2VIZWFkZXJzXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJzdHJpbmdcIn0sXCJzZXRSZXF1ZXN0SGVhZGVyXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwic3RyaW5nXCJdfSxcIm92ZXJyaWRlTWltZVR5cGVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCJdfSxcImdldFJlYWR5U3RhdGVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcIm51bWJlclwifSxcImdldFJlc3BvbnNlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6e1wic3RyaW5nXCI6XCJzdHJpbmdcIixcImJ1ZmZlclwiOlwiYnVmZmVyXCIsXCJvYmplY3RcIjpcIm9iamVjdFwifX0sXCJnZXRSZXNwb25zZVRleHRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcInN0cmluZ1wifSxcImdldFJlc3BvbnNlVVJMXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJzdHJpbmdcIn0sXCJnZXRSZXNwb25zZVR5cGVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcInN0cmluZ1wifSxcInNldFJlc3BvbnNlVHlwZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl19LFwiZ2V0U3RhdHVzXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJudW1iZXJcIn0sXCJnZXRTdGF0dXNUZXh0XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJzdHJpbmdcIn0sXCJnZXRUaW1lb3V0XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJudW1iZXJcIn0sXCJzZXRUaW1lb3V0XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcIm51bWJlclwiXX0sXCJnZXRXaXRoQ3JlZGVudGlhbHNcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcImJvb2xlYW5cIn0sXCJzZXRXaXRoQ3JlZGVudGlhbHNcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wiYm9vbGVhblwiXX0sXCJvbmxvYWRzdGFydFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImxlbmd0aENvbXB1dGFibGVcIjpcImJvb2xlYW5cIixcImxvYWRlZFwiOlwibnVtYmVyXCIsXCJ0b3RhbFwiOlwibnVtYmVyXCJ9fSxcIm9ucHJvZ3Jlc3NcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJsZW5ndGhDb21wdXRhYmxlXCI6XCJib29sZWFuXCIsXCJsb2FkZWRcIjpcIm51bWJlclwiLFwidG90YWxcIjpcIm51bWJlclwifX0sXCJvbmFib3J0XCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wibGVuZ3RoQ29tcHV0YWJsZVwiOlwiYm9vbGVhblwiLFwibG9hZGVkXCI6XCJudW1iZXJcIixcInRvdGFsXCI6XCJudW1iZXJcIn19LFwib25lcnJvclwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImxlbmd0aENvbXB1dGFibGVcIjpcImJvb2xlYW5cIixcImxvYWRlZFwiOlwibnVtYmVyXCIsXCJ0b3RhbFwiOlwibnVtYmVyXCJ9fSxcIm9ubG9hZFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImxlbmd0aENvbXB1dGFibGVcIjpcImJvb2xlYW5cIixcImxvYWRlZFwiOlwibnVtYmVyXCIsXCJ0b3RhbFwiOlwibnVtYmVyXCJ9fSxcIm9udGltZW91dFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImxlbmd0aENvbXB1dGFibGVcIjpcImJvb2xlYW5cIixcImxvYWRlZFwiOlwibnVtYmVyXCIsXCJ0b3RhbFwiOlwibnVtYmVyXCJ9fSxcIm9ubG9hZGVuZFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImxlbmd0aENvbXB1dGFibGVcIjpcImJvb2xlYW5cIixcImxvYWRlZFwiOlwibnVtYmVyXCIsXCJ0b3RhbFwiOlwibnVtYmVyXCJ9fSxcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOnt9fSxcIm9udXBsb2FkbG9hZHN0YXJ0XCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wibGVuZ3RoQ29tcHV0YWJsZVwiOlwiYm9vbGVhblwiLFwibG9hZGVkXCI6XCJudW1iZXJcIixcInRvdGFsXCI6XCJudW1iZXJcIn19LFwib251cGxvYWRwcm9ncmVzc1wiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImxlbmd0aENvbXB1dGFibGVcIjpcImJvb2xlYW5cIixcImxvYWRlZFwiOlwibnVtYmVyXCIsXCJ0b3RhbFwiOlwibnVtYmVyXCJ9fSxcIm9udXBsb2FkYWJvcnRcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJsZW5ndGhDb21wdXRhYmxlXCI6XCJib29sZWFuXCIsXCJsb2FkZWRcIjpcIm51bWJlclwiLFwidG90YWxcIjpcIm51bWJlclwifX0sXCJvbnVwbG9hZGVycm9yXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wibGVuZ3RoQ29tcHV0YWJsZVwiOlwiYm9vbGVhblwiLFwibG9hZGVkXCI6XCJudW1iZXJcIixcInRvdGFsXCI6XCJudW1iZXJcIn19LFwib251cGxvYWRsb2FkXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wibGVuZ3RoQ29tcHV0YWJsZVwiOlwiYm9vbGVhblwiLFwibG9hZGVkXCI6XCJudW1iZXJcIixcInRvdGFsXCI6XCJudW1iZXJcIn19LFwib251cGxvYWR0aW1lb3V0XCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wibGVuZ3RoQ29tcHV0YWJsZVwiOlwiYm9vbGVhblwiLFwibG9hZGVkXCI6XCJudW1iZXJcIixcInRvdGFsXCI6XCJudW1iZXJcIn19LFwib251cGxvYWRsb2FkZW5kXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wibGVuZ3RoQ29tcHV0YWJsZVwiOlwiYm9vbGVhblwiLFwibG9hZGVkXCI6XCJudW1iZXJcIixcInRvdGFsXCI6XCJudW1iZXJcIn19LFwib251cGxvYWRyZWFkeXN0YXRlY2hhbmdlXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e319fX0se1wibmFtZVwiOlwic29jaWFsXCIsXCJhcGlcIjp7XCJFUlJDT0RFXCI6e1widHlwZVwiOlwiY29uc3RhbnRcIixcInZhbHVlXCI6e1wiU1VDQ0VTU1wiOlwiU3VjY2VzcyFcIixcIlVOS05PV05cIjpcIlVua25vd24gZXJyb3JcIixcIk9GRkxJTkVcIjpcIlVzZXIgaXMgY3VycmVudGx5IG9mZmxpbmVcIixcIk1BTEZPUk1FRFBBUkFNRVRFUlNcIjpcIlBhcmFtZXRlcnMgYXJlIG1hbGZvcm1lZFwiLFwiTE9HSU5fQkFEQ1JFREVOVElBTFNcIjpcIkVycm9yIGF1dGhlbnRpY2F0aW5nIHdpdGggc2VydmVyXCIsXCJMT0dJTl9GQUlMRURDT05ORUNUSU9OXCI6XCJFcnJvciBjb25uZWN0aW5nIHRvIHNlcnZlclwiLFwiTE9HSU5fQUxSRUFEWU9OTElORVwiOlwiVXNlciBpcyBhbHJlYWR5IGxvZ2dlZCBpblwiLFwiTE9HSU5fT0FVVEhFUlJPUlwiOlwiT0F1dGggRXJyb3JcIixcIlNFTkRfSU5WQUxJRERFU1RJTkFUSU9OXCI6XCJNZXNzYWdlIHNlbnQgdG8gYW4gaW52YWxpZCBkZXN0aW5hdGlvblwifX0sXCJTVEFUVVNcIjp7XCJ0eXBlXCI6XCJjb25zdGFudFwiLFwidmFsdWVcIjp7XCJPRkZMSU5FXCI6XCJPRkZMSU5FXCIsXCJPTkxJTkVcIjpcIk9OTElORVwiLFwiT05MSU5FX1dJVEhfT1RIRVJfQVBQXCI6XCJPTkxJTkVfV0lUSF9PVEhFUl9BUFBcIn19LFwibG9naW5cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W3tcImFnZW50XCI6XCJzdHJpbmdcIixcInZlcnNpb25cIjpcInN0cmluZ1wiLFwidXJsXCI6XCJzdHJpbmdcIixcImludGVyYWN0aXZlXCI6XCJib29sZWFuXCIsXCJyZW1lbWJlckxvZ2luXCI6XCJib29sZWFuXCJ9XSxcInJldFwiOntcInVzZXJJZFwiOlwic3RyaW5nXCIsXCJjbGllbnRJZFwiOlwic3RyaW5nXCIsXCJzdGF0dXNcIjpcInN0cmluZ1wiLFwibGFzdFVwZGF0ZWRcIjpcIm51bWJlclwiLFwibGFzdFNlZW5cIjpcIm51bWJlclwifSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcImNsZWFyQ2FjaGVkQ3JlZGVudGlhbHNcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W119LFwiZ2V0Q2xpZW50c1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwib2JqZWN0XCIsXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJnZXRVc2Vyc1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwib2JqZWN0XCIsXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJzZW5kTWVzc2FnZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcInN0cmluZ1wiXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcImxvZ291dFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcIm9uTWVzc2FnZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImZyb21cIjp7XCJ1c2VySWRcIjpcInN0cmluZ1wiLFwiY2xpZW50SWRcIjpcInN0cmluZ1wiLFwic3RhdHVzXCI6XCJzdHJpbmdcIixcImxhc3RVcGRhdGVkXCI6XCJudW1iZXJcIixcImxhc3RTZWVuXCI6XCJudW1iZXJcIn0sXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwib25Vc2VyUHJvZmlsZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcInVzZXJJZFwiOlwic3RyaW5nXCIsXCJsYXN0VXBkYXRlZFwiOlwibnVtYmVyXCIsXCJuYW1lXCI6XCJzdHJpbmdcIixcInVybFwiOlwic3RyaW5nXCIsXCJpbWFnZURhdGFcIjpcInN0cmluZ1wifX0sXCJvbkNsaWVudFN0YXRlXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1widXNlcklkXCI6XCJzdHJpbmdcIixcImNsaWVudElkXCI6XCJzdHJpbmdcIixcInN0YXR1c1wiOlwic3RyaW5nXCIsXCJsYXN0VXBkYXRlZFwiOlwibnVtYmVyXCIsXCJsYXN0U2VlblwiOlwibnVtYmVyXCJ9fX19LHtcIm5hbWVcIjpcInN0b3JhZ2VcIixcImFwaVwiOntcInNjb3BlXCI6e1widHlwZVwiOlwiY29uc3RhbnRcIixcInZhbHVlXCI6e1wiU0VTU0lPTlwiOjAsXCJERVZJQ0VfTE9DQUxcIjoxLFwiVVNFUl9MT0NBTFwiOjIsXCJTSEFSRURcIjozfX0sXCJFUlJDT0RFXCI6e1widHlwZVwiOlwiY29uc3RhbnRcIixcInZhbHVlXCI6e1wiU1VDQ0VTU1wiOlwiU3VjY2VzcyFcIixcIlVOS05PV05cIjpcIlVua25vd24gZXJyb3JcIixcIk9GRkxJTkVcIjpcIkRhdGFiYXNlIG5vdCByZWFjaGFibGVcIixcIk1BTEZPUk1FRFBBUkFNRVRFUlNcIjpcIlBhcmFtZXRlcnMgYXJlIG1hbGZvcm1lZFwifX0sXCJjb25zdHJ1Y3RvclwiOntcInZhbHVlXCI6W3tcInNjb3BlXCI6XCJudW1iZXJcIn1dfSxcImtleXNcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpbXCJhcnJheVwiLFwic3RyaW5nXCJdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwiZ2V0XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXSxcInJldFwiOlwic3RyaW5nXCIsXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJzZXRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJzdHJpbmdcIl0sXCJyZXRcIjpcInN0cmluZ1wiLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwicmVtb3ZlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXSxcInJldFwiOlwic3RyaW5nXCIsXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJjbGVhclwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOltdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19fX0se1wibmFtZVwiOlwic3RvcmVidWZmZXJcIixcImFwaVwiOntcInNjb3BlXCI6e1widHlwZVwiOlwiY29uc3RhbnRcIixcInZhbHVlXCI6e1wiU0VTU0lPTlwiOjAsXCJERVZJQ0VfTE9DQUxcIjoxLFwiVVNFUl9MT0NBTFwiOjIsXCJTSEFSRURcIjozfX0sXCJFUlJDT0RFXCI6e1widHlwZVwiOlwiY29uc3RhbnRcIixcInZhbHVlXCI6e1wiU1VDQ0VTU1wiOlwiU3VjY2VzcyFcIixcIlVOS05PV05cIjpcIlVua25vd24gZXJyb3JcIixcIk9GRkxJTkVcIjpcIkRhdGFiYXNlIG5vdCByZWFjaGFibGVcIixcIk1BTEZPUk1FRFBBUkFNRVRFUlNcIjpcIlBhcmFtZXRlcnMgYXJlIG1hbGZvcm1lZFwifX0sXCJjb25zdHJ1Y3RvclwiOntcInZhbHVlXCI6W3tcInNjb3BlXCI6XCJudW1iZXJcIn1dfSxcImtleXNcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpbXCJhcnJheVwiLFwic3RyaW5nXCJdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwiZ2V0XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXSxcInJldFwiOlwiYnVmZmVyXCIsXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJzZXRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJidWZmZXJcIl0sXCJyZXRcIjpcImJ1ZmZlclwiLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwicmVtb3ZlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXSxcInJldFwiOlwiYnVmZmVyXCIsXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJjbGVhclwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOltdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19fX0se1wibmFtZVwiOlwidHJhbnNwb3J0XCIsXCJhcGlcIjp7XCJFUlJDT0RFXCI6e1widHlwZVwiOlwiY29uc3RhbnRcIixcInZhbHVlXCI6e1wiU1VDQ0VTU1wiOlwiU3VjY2VzcyFcIixcIlVOS05PV05cIjpcIlVua25vd24gZXJyb3JcIixcIk9GRkxJTkVcIjpcIk5vdCByZWFjaGFibGVcIixcIk1BTEZPUk1FRFBBUkFNRVRFUlNcIjpcIlBhcmFtZXRlcnMgYXJlIG1hbGZvcm1lZFwifX0sXCJzZXR1cFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcInByb3h5XCJdLFwicmV0XCI6W10sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJzZW5kXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwiYnVmZmVyXCJdLFwicmV0XCI6W10sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJjbG9zZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOltdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwib25EYXRhXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1widGFnXCI6XCJzdHJpbmdcIixcImRhdGFcIjpcImJ1ZmZlclwifX0sXCJvbkNsb3NlXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6W119fX1dO1xuIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCl7XG4vKiFcbiAqIEBvdmVydmlldyBlczYtcHJvbWlzZSAtIGEgdGlueSBpbXBsZW1lbnRhdGlvbiBvZiBQcm9taXNlcy9BKy5cbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChjKSAyMDE0IFllaHVkYSBLYXR6LCBUb20gRGFsZSwgU3RlZmFuIFBlbm5lciBhbmQgY29udHJpYnV0b3JzIChDb252ZXJzaW9uIHRvIEVTNiBBUEkgYnkgSmFrZSBBcmNoaWJhbGQpXG4gKiBAbGljZW5zZSAgIExpY2Vuc2VkIHVuZGVyIE1JVCBsaWNlbnNlXG4gKiAgICAgICAgICAgIFNlZSBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vamFrZWFyY2hpYmFsZC9lczYtcHJvbWlzZS9tYXN0ZXIvTElDRU5TRVxuICogQHZlcnNpb24gICAyLjAuMVxuICovXG5cbihmdW5jdGlvbigpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGZ1bmN0aW9uICQkdXRpbHMkJG9iamVjdE9yRnVuY3Rpb24oeCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nIHx8ICh0eXBlb2YgeCA9PT0gJ29iamVjdCcgJiYgeCAhPT0gbnVsbCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gJCR1dGlscyQkaXNGdW5jdGlvbih4KSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHggPT09ICdmdW5jdGlvbic7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gJCR1dGlscyQkaXNNYXliZVRoZW5hYmxlKHgpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ29iamVjdCcgJiYgeCAhPT0gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgJCR1dGlscyQkX2lzQXJyYXk7XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkpIHtcbiAgICAgICQkdXRpbHMkJF9pc0FycmF5ID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICQkdXRpbHMkJF9pc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbiAgICB9XG5cbiAgICB2YXIgJCR1dGlscyQkaXNBcnJheSA9ICQkdXRpbHMkJF9pc0FycmF5O1xuICAgIHZhciAkJHV0aWxzJCRub3cgPSBEYXRlLm5vdyB8fCBmdW5jdGlvbigpIHsgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpOyB9O1xuICAgIGZ1bmN0aW9uICQkdXRpbHMkJEYoKSB7IH1cblxuICAgIHZhciAkJHV0aWxzJCRvX2NyZWF0ZSA9IChPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIChvKSB7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTZWNvbmQgYXJndW1lbnQgbm90IHN1cHBvcnRlZCcpO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBvICE9PSAnb2JqZWN0Jykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGFuIG9iamVjdCcpO1xuICAgICAgfVxuICAgICAgJCR1dGlscyQkRi5wcm90b3R5cGUgPSBvO1xuICAgICAgcmV0dXJuIG5ldyAkJHV0aWxzJCRGKCk7XG4gICAgfSk7XG5cbiAgICB2YXIgJCRhc2FwJCRsZW4gPSAwO1xuXG4gICAgdmFyICQkYXNhcCQkZGVmYXVsdCA9IGZ1bmN0aW9uIGFzYXAoY2FsbGJhY2ssIGFyZykge1xuICAgICAgJCRhc2FwJCRxdWV1ZVskJGFzYXAkJGxlbl0gPSBjYWxsYmFjaztcbiAgICAgICQkYXNhcCQkcXVldWVbJCRhc2FwJCRsZW4gKyAxXSA9IGFyZztcbiAgICAgICQkYXNhcCQkbGVuICs9IDI7XG4gICAgICBpZiAoJCRhc2FwJCRsZW4gPT09IDIpIHtcbiAgICAgICAgLy8gSWYgbGVuIGlzIDEsIHRoYXQgbWVhbnMgdGhhdCB3ZSBuZWVkIHRvIHNjaGVkdWxlIGFuIGFzeW5jIGZsdXNoLlxuICAgICAgICAvLyBJZiBhZGRpdGlvbmFsIGNhbGxiYWNrcyBhcmUgcXVldWVkIGJlZm9yZSB0aGUgcXVldWUgaXMgZmx1c2hlZCwgdGhleVxuICAgICAgICAvLyB3aWxsIGJlIHByb2Nlc3NlZCBieSB0aGlzIGZsdXNoIHRoYXQgd2UgYXJlIHNjaGVkdWxpbmcuXG4gICAgICAgICQkYXNhcCQkc2NoZWR1bGVGbHVzaCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgJCRhc2FwJCRicm93c2VyR2xvYmFsID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSA/IHdpbmRvdyA6IHt9O1xuICAgIHZhciAkJGFzYXAkJEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyID0gJCRhc2FwJCRicm93c2VyR2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgJCRhc2FwJCRicm93c2VyR2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG5cbiAgICAvLyB0ZXN0IGZvciB3ZWIgd29ya2VyIGJ1dCBub3QgaW4gSUUxMFxuICAgIHZhciAkJGFzYXAkJGlzV29ya2VyID0gdHlwZW9mIFVpbnQ4Q2xhbXBlZEFycmF5ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgdHlwZW9mIGltcG9ydFNjcmlwdHMgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICB0eXBlb2YgTWVzc2FnZUNoYW5uZWwgIT09ICd1bmRlZmluZWQnO1xuXG4gICAgLy8gbm9kZVxuICAgIGZ1bmN0aW9uICQkYXNhcCQkdXNlTmV4dFRpY2soKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHByb2Nlc3MubmV4dFRpY2soJCRhc2FwJCRmbHVzaCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uICQkYXNhcCQkdXNlTXV0YXRpb25PYnNlcnZlcigpIHtcbiAgICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICAgIHZhciBvYnNlcnZlciA9IG5ldyAkJGFzYXAkJEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyKCQkYXNhcCQkZmx1c2gpO1xuICAgICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgICBvYnNlcnZlci5vYnNlcnZlKG5vZGUsIHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9KTtcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBub2RlLmRhdGEgPSAoaXRlcmF0aW9ucyA9ICsraXRlcmF0aW9ucyAlIDIpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyB3ZWIgd29ya2VyXG4gICAgZnVuY3Rpb24gJCRhc2FwJCR1c2VNZXNzYWdlQ2hhbm5lbCgpIHtcbiAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9ICQkYXNhcCQkZmx1c2g7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKDApO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkJGFzYXAkJHVzZVNldFRpbWVvdXQoKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHNldFRpbWVvdXQoJCRhc2FwJCRmbHVzaCwgMSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHZhciAkJGFzYXAkJHF1ZXVlID0gbmV3IEFycmF5KDEwMDApO1xuXG4gICAgZnVuY3Rpb24gJCRhc2FwJCRmbHVzaCgpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgJCRhc2FwJCRsZW47IGkrPTIpIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gJCRhc2FwJCRxdWV1ZVtpXTtcbiAgICAgICAgdmFyIGFyZyA9ICQkYXNhcCQkcXVldWVbaSsxXTtcblxuICAgICAgICBjYWxsYmFjayhhcmcpO1xuXG4gICAgICAgICQkYXNhcCQkcXVldWVbaV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICQkYXNhcCQkcXVldWVbaSsxXSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgJCRhc2FwJCRsZW4gPSAwO1xuICAgIH1cblxuICAgIHZhciAkJGFzYXAkJHNjaGVkdWxlRmx1c2g7XG5cbiAgICAvLyBEZWNpZGUgd2hhdCBhc3luYyBtZXRob2QgdG8gdXNlIHRvIHRyaWdnZXJpbmcgcHJvY2Vzc2luZyBvZiBxdWV1ZWQgY2FsbGJhY2tzOlxuICAgIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYge30udG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKSB7XG4gICAgICAkJGFzYXAkJHNjaGVkdWxlRmx1c2ggPSAkJGFzYXAkJHVzZU5leHRUaWNrKCk7XG4gICAgfSBlbHNlIGlmICgkJGFzYXAkJEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgICAkJGFzYXAkJHNjaGVkdWxlRmx1c2ggPSAkJGFzYXAkJHVzZU11dGF0aW9uT2JzZXJ2ZXIoKTtcbiAgICB9IGVsc2UgaWYgKCQkYXNhcCQkaXNXb3JrZXIpIHtcbiAgICAgICQkYXNhcCQkc2NoZWR1bGVGbHVzaCA9ICQkYXNhcCQkdXNlTWVzc2FnZUNoYW5uZWwoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCRhc2FwJCRzY2hlZHVsZUZsdXNoID0gJCRhc2FwJCR1c2VTZXRUaW1lb3V0KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gJCQkaW50ZXJuYWwkJG5vb3AoKSB7fVxuICAgIHZhciAkJCRpbnRlcm5hbCQkUEVORElORyAgID0gdm9pZCAwO1xuICAgIHZhciAkJCRpbnRlcm5hbCQkRlVMRklMTEVEID0gMTtcbiAgICB2YXIgJCQkaW50ZXJuYWwkJFJFSkVDVEVEICA9IDI7XG4gICAgdmFyICQkJGludGVybmFsJCRHRVRfVEhFTl9FUlJPUiA9IG5ldyAkJCRpbnRlcm5hbCQkRXJyb3JPYmplY3QoKTtcblxuICAgIGZ1bmN0aW9uICQkJGludGVybmFsJCRzZWxmRnVsbGZpbGxtZW50KCkge1xuICAgICAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoXCJZb3UgY2Fubm90IHJlc29sdmUgYSBwcm9taXNlIHdpdGggaXRzZWxmXCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uICQkJGludGVybmFsJCRjYW5ub3RSZXR1cm5Pd24oKSB7XG4gICAgICByZXR1cm4gbmV3IFR5cGVFcnJvcignQSBwcm9taXNlcyBjYWxsYmFjayBjYW5ub3QgcmV0dXJuIHRoYXQgc2FtZSBwcm9taXNlLicpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gJCQkaW50ZXJuYWwkJGdldFRoZW4ocHJvbWlzZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbjtcbiAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgJCQkaW50ZXJuYWwkJEdFVF9USEVOX0VSUk9SLmVycm9yID0gZXJyb3I7XG4gICAgICAgIHJldHVybiAkJCRpbnRlcm5hbCQkR0VUX1RIRU5fRVJST1I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gJCQkaW50ZXJuYWwkJHRyeVRoZW4odGhlbiwgdmFsdWUsIGZ1bGZpbGxtZW50SGFuZGxlciwgcmVqZWN0aW9uSGFuZGxlcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBmdWxmaWxsbWVudEhhbmRsZXIsIHJlamVjdGlvbkhhbmRsZXIpO1xuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uICQkJGludGVybmFsJCRoYW5kbGVGb3JlaWduVGhlbmFibGUocHJvbWlzZSwgdGhlbmFibGUsIHRoZW4pIHtcbiAgICAgICAkJGFzYXAkJGRlZmF1bHQoZnVuY3Rpb24ocHJvbWlzZSkge1xuICAgICAgICB2YXIgc2VhbGVkID0gZmFsc2U7XG4gICAgICAgIHZhciBlcnJvciA9ICQkJGludGVybmFsJCR0cnlUaGVuKHRoZW4sIHRoZW5hYmxlLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgIGlmIChzZWFsZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgc2VhbGVkID0gdHJ1ZTtcbiAgICAgICAgICBpZiAodGhlbmFibGUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICAkJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICAgIGlmIChzZWFsZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgc2VhbGVkID0gdHJ1ZTtcblxuICAgICAgICAgICQkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICAgICAgfSwgJ1NldHRsZTogJyArIChwcm9taXNlLl9sYWJlbCB8fCAnIHVua25vd24gcHJvbWlzZScpKTtcblxuICAgICAgICBpZiAoIXNlYWxlZCAmJiBlcnJvcikge1xuICAgICAgICAgIHNlYWxlZCA9IHRydWU7XG4gICAgICAgICAgJCQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0sIHByb21pc2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uICQkJGludGVybmFsJCRoYW5kbGVPd25UaGVuYWJsZShwcm9taXNlLCB0aGVuYWJsZSkge1xuICAgICAgaWYgKHRoZW5hYmxlLl9zdGF0ZSA9PT0gJCQkaW50ZXJuYWwkJEZVTEZJTExFRCkge1xuICAgICAgICAkJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCB0aGVuYWJsZS5fcmVzdWx0KTtcbiAgICAgIH0gZWxzZSBpZiAocHJvbWlzZS5fc3RhdGUgPT09ICQkJGludGVybmFsJCRSRUpFQ1RFRCkge1xuICAgICAgICAkJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHRoZW5hYmxlLl9yZXN1bHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCQkaW50ZXJuYWwkJHN1YnNjcmliZSh0aGVuYWJsZSwgdW5kZWZpbmVkLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICQkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgICAgJCQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCByZWFzb24pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkJCRpbnRlcm5hbCQkaGFuZGxlTWF5YmVUaGVuYWJsZShwcm9taXNlLCBtYXliZVRoZW5hYmxlKSB7XG4gICAgICBpZiAobWF5YmVUaGVuYWJsZS5jb25zdHJ1Y3RvciA9PT0gcHJvbWlzZS5jb25zdHJ1Y3Rvcikge1xuICAgICAgICAkJCRpbnRlcm5hbCQkaGFuZGxlT3duVGhlbmFibGUocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgdGhlbiA9ICQkJGludGVybmFsJCRnZXRUaGVuKG1heWJlVGhlbmFibGUpO1xuXG4gICAgICAgIGlmICh0aGVuID09PSAkJCRpbnRlcm5hbCQkR0VUX1RIRU5fRVJST1IpIHtcbiAgICAgICAgICAkJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsICQkJGludGVybmFsJCRHRVRfVEhFTl9FUlJPUi5lcnJvcik7XG4gICAgICAgIH0gZWxzZSBpZiAodGhlbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgJCQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoJCR1dGlscyQkaXNGdW5jdGlvbih0aGVuKSkge1xuICAgICAgICAgICQkJGludGVybmFsJCRoYW5kbGVGb3JlaWduVGhlbmFibGUocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSwgdGhlbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJCQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSkge1xuICAgICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB7XG4gICAgICAgICQkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgJCQkaW50ZXJuYWwkJHNlbGZGdWxsZmlsbG1lbnQoKSk7XG4gICAgICB9IGVsc2UgaWYgKCQkdXRpbHMkJG9iamVjdE9yRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICAgICQkJGludGVybmFsJCRoYW5kbGVNYXliZVRoZW5hYmxlKHByb21pc2UsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkJCRpbnRlcm5hbCQkcHVibGlzaFJlamVjdGlvbihwcm9taXNlKSB7XG4gICAgICBpZiAocHJvbWlzZS5fb25lcnJvcikge1xuICAgICAgICBwcm9taXNlLl9vbmVycm9yKHByb21pc2UuX3Jlc3VsdCk7XG4gICAgICB9XG5cbiAgICAgICQkJGludGVybmFsJCRwdWJsaXNoKHByb21pc2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uICQkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIHZhbHVlKSB7XG4gICAgICBpZiAocHJvbWlzZS5fc3RhdGUgIT09ICQkJGludGVybmFsJCRQRU5ESU5HKSB7IHJldHVybjsgfVxuXG4gICAgICBwcm9taXNlLl9yZXN1bHQgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3N0YXRlID0gJCQkaW50ZXJuYWwkJEZVTEZJTExFRDtcblxuICAgICAgaWYgKHByb21pc2UuX3N1YnNjcmliZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCRhc2FwJCRkZWZhdWx0KCQkJGludGVybmFsJCRwdWJsaXNoLCBwcm9taXNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHJlYXNvbikge1xuICAgICAgaWYgKHByb21pc2UuX3N0YXRlICE9PSAkJCRpbnRlcm5hbCQkUEVORElORykgeyByZXR1cm47IH1cbiAgICAgIHByb21pc2UuX3N0YXRlID0gJCQkaW50ZXJuYWwkJFJFSkVDVEVEO1xuICAgICAgcHJvbWlzZS5fcmVzdWx0ID0gcmVhc29uO1xuXG4gICAgICAkJGFzYXAkJGRlZmF1bHQoJCQkaW50ZXJuYWwkJHB1Ymxpc2hSZWplY3Rpb24sIHByb21pc2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uICQkJGludGVybmFsJCRzdWJzY3JpYmUocGFyZW50LCBjaGlsZCwgb25GdWxmaWxsbWVudCwgb25SZWplY3Rpb24pIHtcbiAgICAgIHZhciBzdWJzY3JpYmVycyA9IHBhcmVudC5fc3Vic2NyaWJlcnM7XG4gICAgICB2YXIgbGVuZ3RoID0gc3Vic2NyaWJlcnMubGVuZ3RoO1xuXG4gICAgICBwYXJlbnQuX29uZXJyb3IgPSBudWxsO1xuXG4gICAgICBzdWJzY3JpYmVyc1tsZW5ndGhdID0gY2hpbGQ7XG4gICAgICBzdWJzY3JpYmVyc1tsZW5ndGggKyAkJCRpbnRlcm5hbCQkRlVMRklMTEVEXSA9IG9uRnVsZmlsbG1lbnQ7XG4gICAgICBzdWJzY3JpYmVyc1tsZW5ndGggKyAkJCRpbnRlcm5hbCQkUkVKRUNURURdICA9IG9uUmVqZWN0aW9uO1xuXG4gICAgICBpZiAobGVuZ3RoID09PSAwICYmIHBhcmVudC5fc3RhdGUpIHtcbiAgICAgICAgJCRhc2FwJCRkZWZhdWx0KCQkJGludGVybmFsJCRwdWJsaXNoLCBwYXJlbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uICQkJGludGVybmFsJCRwdWJsaXNoKHByb21pc2UpIHtcbiAgICAgIHZhciBzdWJzY3JpYmVycyA9IHByb21pc2UuX3N1YnNjcmliZXJzO1xuICAgICAgdmFyIHNldHRsZWQgPSBwcm9taXNlLl9zdGF0ZTtcblxuICAgICAgaWYgKHN1YnNjcmliZXJzLmxlbmd0aCA9PT0gMCkgeyByZXR1cm47IH1cblxuICAgICAgdmFyIGNoaWxkLCBjYWxsYmFjaywgZGV0YWlsID0gcHJvbWlzZS5fcmVzdWx0O1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN1YnNjcmliZXJzLmxlbmd0aDsgaSArPSAzKSB7XG4gICAgICAgIGNoaWxkID0gc3Vic2NyaWJlcnNbaV07XG4gICAgICAgIGNhbGxiYWNrID0gc3Vic2NyaWJlcnNbaSArIHNldHRsZWRdO1xuXG4gICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICQkJGludGVybmFsJCRpbnZva2VDYWxsYmFjayhzZXR0bGVkLCBjaGlsZCwgY2FsbGJhY2ssIGRldGFpbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FsbGJhY2soZGV0YWlsKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwcm9taXNlLl9zdWJzY3JpYmVycy5sZW5ndGggPSAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uICQkJGludGVybmFsJCRFcnJvck9iamVjdCgpIHtcbiAgICAgIHRoaXMuZXJyb3IgPSBudWxsO1xuICAgIH1cblxuICAgIHZhciAkJCRpbnRlcm5hbCQkVFJZX0NBVENIX0VSUk9SID0gbmV3ICQkJGludGVybmFsJCRFcnJvck9iamVjdCgpO1xuXG4gICAgZnVuY3Rpb24gJCQkaW50ZXJuYWwkJHRyeUNhdGNoKGNhbGxiYWNrLCBkZXRhaWwpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhkZXRhaWwpO1xuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICQkJGludGVybmFsJCRUUllfQ0FUQ0hfRVJST1IuZXJyb3IgPSBlO1xuICAgICAgICByZXR1cm4gJCQkaW50ZXJuYWwkJFRSWV9DQVRDSF9FUlJPUjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkJCRpbnRlcm5hbCQkaW52b2tlQ2FsbGJhY2soc2V0dGxlZCwgcHJvbWlzZSwgY2FsbGJhY2ssIGRldGFpbCkge1xuICAgICAgdmFyIGhhc0NhbGxiYWNrID0gJCR1dGlscyQkaXNGdW5jdGlvbihjYWxsYmFjayksXG4gICAgICAgICAgdmFsdWUsIGVycm9yLCBzdWNjZWVkZWQsIGZhaWxlZDtcblxuICAgICAgaWYgKGhhc0NhbGxiYWNrKSB7XG4gICAgICAgIHZhbHVlID0gJCQkaW50ZXJuYWwkJHRyeUNhdGNoKGNhbGxiYWNrLCBkZXRhaWwpO1xuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gJCQkaW50ZXJuYWwkJFRSWV9DQVRDSF9FUlJPUikge1xuICAgICAgICAgIGZhaWxlZCA9IHRydWU7XG4gICAgICAgICAgZXJyb3IgPSB2YWx1ZS5lcnJvcjtcbiAgICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3VjY2VlZGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkge1xuICAgICAgICAgICQkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgJCQkaW50ZXJuYWwkJGNhbm5vdFJldHVybk93bigpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSBkZXRhaWw7XG4gICAgICAgIHN1Y2NlZWRlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9taXNlLl9zdGF0ZSAhPT0gJCQkaW50ZXJuYWwkJFBFTkRJTkcpIHtcbiAgICAgICAgLy8gbm9vcFxuICAgICAgfSBlbHNlIGlmIChoYXNDYWxsYmFjayAmJiBzdWNjZWVkZWQpIHtcbiAgICAgICAgJCQkaW50ZXJuYWwkJHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChmYWlsZWQpIHtcbiAgICAgICAgJCQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCBlcnJvcik7XG4gICAgICB9IGVsc2UgaWYgKHNldHRsZWQgPT09ICQkJGludGVybmFsJCRGVUxGSUxMRUQpIHtcbiAgICAgICAgJCQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChzZXR0bGVkID09PSAkJCRpbnRlcm5hbCQkUkVKRUNURUQpIHtcbiAgICAgICAgJCQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gJCQkaW50ZXJuYWwkJGluaXRpYWxpemVQcm9taXNlKHByb21pc2UsIHJlc29sdmVyKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXNvbHZlcihmdW5jdGlvbiByZXNvbHZlUHJvbWlzZSh2YWx1ZSl7XG4gICAgICAgICAgJCQkaW50ZXJuYWwkJHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgICB9LCBmdW5jdGlvbiByZWplY3RQcm9taXNlKHJlYXNvbikge1xuICAgICAgICAgICQkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgJCQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCBlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkJCRlbnVtZXJhdG9yJCRtYWtlU2V0dGxlZFJlc3VsdChzdGF0ZSwgcG9zaXRpb24sIHZhbHVlKSB7XG4gICAgICBpZiAoc3RhdGUgPT09ICQkJGludGVybmFsJCRGVUxGSUxMRUQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdGF0ZTogJ2Z1bGZpbGxlZCcsXG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN0YXRlOiAncmVqZWN0ZWQnLFxuICAgICAgICAgIHJlYXNvbjogdmFsdWVcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkJCRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yKENvbnN0cnVjdG9yLCBpbnB1dCwgYWJvcnRPblJlamVjdCwgbGFiZWwpIHtcbiAgICAgIHRoaXMuX2luc3RhbmNlQ29uc3RydWN0b3IgPSBDb25zdHJ1Y3RvcjtcbiAgICAgIHRoaXMucHJvbWlzZSA9IG5ldyBDb25zdHJ1Y3RvcigkJCRpbnRlcm5hbCQkbm9vcCwgbGFiZWwpO1xuICAgICAgdGhpcy5fYWJvcnRPblJlamVjdCA9IGFib3J0T25SZWplY3Q7XG5cbiAgICAgIGlmICh0aGlzLl92YWxpZGF0ZUlucHV0KGlucHV0KSkge1xuICAgICAgICB0aGlzLl9pbnB1dCAgICAgPSBpbnB1dDtcbiAgICAgICAgdGhpcy5sZW5ndGggICAgID0gaW5wdXQubGVuZ3RoO1xuICAgICAgICB0aGlzLl9yZW1haW5pbmcgPSBpbnB1dC5sZW5ndGg7XG5cbiAgICAgICAgdGhpcy5faW5pdCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICQkJGludGVybmFsJCRmdWxmaWxsKHRoaXMucHJvbWlzZSwgdGhpcy5fcmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmxlbmd0aCA9IHRoaXMubGVuZ3RoIHx8IDA7XG4gICAgICAgICAgdGhpcy5fZW51bWVyYXRlKCk7XG4gICAgICAgICAgaWYgKHRoaXMuX3JlbWFpbmluZyA9PT0gMCkge1xuICAgICAgICAgICAgJCQkaW50ZXJuYWwkJGZ1bGZpbGwodGhpcy5wcm9taXNlLCB0aGlzLl9yZXN1bHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCQkaW50ZXJuYWwkJHJlamVjdCh0aGlzLnByb21pc2UsIHRoaXMuX3ZhbGlkYXRpb25FcnJvcigpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAkJCRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yLnByb3RvdHlwZS5fdmFsaWRhdGVJbnB1dCA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgICByZXR1cm4gJCR1dGlscyQkaXNBcnJheShpbnB1dCk7XG4gICAgfTtcblxuICAgICQkJGVudW1lcmF0b3IkJEVudW1lcmF0b3IucHJvdG90eXBlLl92YWxpZGF0aW9uRXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ0FycmF5IE1ldGhvZHMgbXVzdCBiZSBwcm92aWRlZCBhbiBBcnJheScpO1xuICAgIH07XG5cbiAgICAkJCRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yLnByb3RvdHlwZS5faW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fcmVzdWx0ID0gbmV3IEFycmF5KHRoaXMubGVuZ3RoKTtcbiAgICB9O1xuXG4gICAgdmFyICQkJGVudW1lcmF0b3IkJGRlZmF1bHQgPSAkJCRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yO1xuXG4gICAgJCQkZW51bWVyYXRvciQkRW51bWVyYXRvci5wcm90b3R5cGUuX2VudW1lcmF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGxlbmd0aCAgPSB0aGlzLmxlbmd0aDtcbiAgICAgIHZhciBwcm9taXNlID0gdGhpcy5wcm9taXNlO1xuICAgICAgdmFyIGlucHV0ICAgPSB0aGlzLl9pbnB1dDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IHByb21pc2UuX3N0YXRlID09PSAkJCRpbnRlcm5hbCQkUEVORElORyAmJiBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5fZWFjaEVudHJ5KGlucHV0W2ldLCBpKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgJCQkZW51bWVyYXRvciQkRW51bWVyYXRvci5wcm90b3R5cGUuX2VhY2hFbnRyeSA9IGZ1bmN0aW9uKGVudHJ5LCBpKSB7XG4gICAgICB2YXIgYyA9IHRoaXMuX2luc3RhbmNlQ29uc3RydWN0b3I7XG4gICAgICBpZiAoJCR1dGlscyQkaXNNYXliZVRoZW5hYmxlKGVudHJ5KSkge1xuICAgICAgICBpZiAoZW50cnkuY29uc3RydWN0b3IgPT09IGMgJiYgZW50cnkuX3N0YXRlICE9PSAkJCRpbnRlcm5hbCQkUEVORElORykge1xuICAgICAgICAgIGVudHJ5Ll9vbmVycm9yID0gbnVsbDtcbiAgICAgICAgICB0aGlzLl9zZXR0bGVkQXQoZW50cnkuX3N0YXRlLCBpLCBlbnRyeS5fcmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl93aWxsU2V0dGxlQXQoYy5yZXNvbHZlKGVudHJ5KSwgaSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JlbWFpbmluZy0tO1xuICAgICAgICB0aGlzLl9yZXN1bHRbaV0gPSB0aGlzLl9tYWtlUmVzdWx0KCQkJGludGVybmFsJCRGVUxGSUxMRUQsIGksIGVudHJ5KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgJCQkZW51bWVyYXRvciQkRW51bWVyYXRvci5wcm90b3R5cGUuX3NldHRsZWRBdCA9IGZ1bmN0aW9uKHN0YXRlLCBpLCB2YWx1ZSkge1xuICAgICAgdmFyIHByb21pc2UgPSB0aGlzLnByb21pc2U7XG5cbiAgICAgIGlmIChwcm9taXNlLl9zdGF0ZSA9PT0gJCQkaW50ZXJuYWwkJFBFTkRJTkcpIHtcbiAgICAgICAgdGhpcy5fcmVtYWluaW5nLS07XG5cbiAgICAgICAgaWYgKHRoaXMuX2Fib3J0T25SZWplY3QgJiYgc3RhdGUgPT09ICQkJGludGVybmFsJCRSRUpFQ1RFRCkge1xuICAgICAgICAgICQkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3Jlc3VsdFtpXSA9IHRoaXMuX21ha2VSZXN1bHQoc3RhdGUsIGksIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fcmVtYWluaW5nID09PSAwKSB7XG4gICAgICAgICQkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIHRoaXMuX3Jlc3VsdCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgICQkJGVudW1lcmF0b3IkJEVudW1lcmF0b3IucHJvdG90eXBlLl9tYWtlUmVzdWx0ID0gZnVuY3Rpb24oc3RhdGUsIGksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcblxuICAgICQkJGVudW1lcmF0b3IkJEVudW1lcmF0b3IucHJvdG90eXBlLl93aWxsU2V0dGxlQXQgPSBmdW5jdGlvbihwcm9taXNlLCBpKSB7XG4gICAgICB2YXIgZW51bWVyYXRvciA9IHRoaXM7XG5cbiAgICAgICQkJGludGVybmFsJCRzdWJzY3JpYmUocHJvbWlzZSwgdW5kZWZpbmVkLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBlbnVtZXJhdG9yLl9zZXR0bGVkQXQoJCQkaW50ZXJuYWwkJEZVTEZJTExFRCwgaSwgdmFsdWUpO1xuICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgIGVudW1lcmF0b3IuX3NldHRsZWRBdCgkJCRpbnRlcm5hbCQkUkVKRUNURUQsIGksIHJlYXNvbik7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyICQkcHJvbWlzZSRhbGwkJGRlZmF1bHQgPSBmdW5jdGlvbiBhbGwoZW50cmllcywgbGFiZWwpIHtcbiAgICAgIHJldHVybiBuZXcgJCQkZW51bWVyYXRvciQkZGVmYXVsdCh0aGlzLCBlbnRyaWVzLCB0cnVlIC8qIGFib3J0IG9uIHJlamVjdCAqLywgbGFiZWwpLnByb21pc2U7XG4gICAgfTtcblxuICAgIHZhciAkJHByb21pc2UkcmFjZSQkZGVmYXVsdCA9IGZ1bmN0aW9uIHJhY2UoZW50cmllcywgbGFiZWwpIHtcbiAgICAgIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gICAgICB2YXIgQ29uc3RydWN0b3IgPSB0aGlzO1xuXG4gICAgICB2YXIgcHJvbWlzZSA9IG5ldyBDb25zdHJ1Y3RvcigkJCRpbnRlcm5hbCQkbm9vcCwgbGFiZWwpO1xuXG4gICAgICBpZiAoISQkdXRpbHMkJGlzQXJyYXkoZW50cmllcykpIHtcbiAgICAgICAgJCQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCBuZXcgVHlwZUVycm9yKCdZb3UgbXVzdCBwYXNzIGFuIGFycmF5IHRvIHJhY2UuJykpO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGxlbmd0aCA9IGVudHJpZXMubGVuZ3RoO1xuXG4gICAgICBmdW5jdGlvbiBvbkZ1bGZpbGxtZW50KHZhbHVlKSB7XG4gICAgICAgICQkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gb25SZWplY3Rpb24ocmVhc29uKSB7XG4gICAgICAgICQkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IDA7IHByb21pc2UuX3N0YXRlID09PSAkJCRpbnRlcm5hbCQkUEVORElORyAmJiBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgJCQkaW50ZXJuYWwkJHN1YnNjcmliZShDb25zdHJ1Y3Rvci5yZXNvbHZlKGVudHJpZXNbaV0pLCB1bmRlZmluZWQsIG9uRnVsZmlsbG1lbnQsIG9uUmVqZWN0aW9uKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIHZhciAkJHByb21pc2UkcmVzb2x2ZSQkZGVmYXVsdCA9IGZ1bmN0aW9uIHJlc29sdmUob2JqZWN0LCBsYWJlbCkge1xuICAgICAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgICAgIHZhciBDb25zdHJ1Y3RvciA9IHRoaXM7XG5cbiAgICAgIGlmIChvYmplY3QgJiYgdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0LmNvbnN0cnVjdG9yID09PSBDb25zdHJ1Y3Rvcikge1xuICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJvbWlzZSA9IG5ldyBDb25zdHJ1Y3RvcigkJCRpbnRlcm5hbCQkbm9vcCwgbGFiZWwpO1xuICAgICAgJCQkaW50ZXJuYWwkJHJlc29sdmUocHJvbWlzZSwgb2JqZWN0KTtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICB2YXIgJCRwcm9taXNlJHJlamVjdCQkZGVmYXVsdCA9IGZ1bmN0aW9uIHJlamVjdChyZWFzb24sIGxhYmVsKSB7XG4gICAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgICAgdmFyIENvbnN0cnVjdG9yID0gdGhpcztcbiAgICAgIHZhciBwcm9taXNlID0gbmV3IENvbnN0cnVjdG9yKCQkJGludGVybmFsJCRub29wLCBsYWJlbCk7XG4gICAgICAkJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgdmFyICQkZXM2JHByb21pc2UkcHJvbWlzZSQkY291bnRlciA9IDA7XG5cbiAgICBmdW5jdGlvbiAkJGVzNiRwcm9taXNlJHByb21pc2UkJG5lZWRzUmVzb2x2ZXIoKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdZb3UgbXVzdCBwYXNzIGEgcmVzb2x2ZXIgZnVuY3Rpb24gYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBwcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gJCRlczYkcHJvbWlzZSRwcm9taXNlJCRuZWVkc05ldygpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGYWlsZWQgdG8gY29uc3RydWN0ICdQcm9taXNlJzogUGxlYXNlIHVzZSB0aGUgJ25ldycgb3BlcmF0b3IsIHRoaXMgb2JqZWN0IGNvbnN0cnVjdG9yIGNhbm5vdCBiZSBjYWxsZWQgYXMgYSBmdW5jdGlvbi5cIik7XG4gICAgfVxuXG4gICAgdmFyICQkZXM2JHByb21pc2UkcHJvbWlzZSQkZGVmYXVsdCA9ICQkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZTtcblxuICAgIC8qKlxuICAgICAgUHJvbWlzZSBvYmplY3RzIHJlcHJlc2VudCB0aGUgZXZlbnR1YWwgcmVzdWx0IG9mIGFuIGFzeW5jaHJvbm91cyBvcGVyYXRpb24uIFRoZVxuICAgICAgcHJpbWFyeSB3YXkgb2YgaW50ZXJhY3Rpbmcgd2l0aCBhIHByb21pc2UgaXMgdGhyb3VnaCBpdHMgYHRoZW5gIG1ldGhvZCwgd2hpY2hcbiAgICAgIHJlZ2lzdGVycyBjYWxsYmFja3MgdG8gcmVjZWl2ZSBlaXRoZXIgYSBwcm9taXNl4oCZcyBldmVudHVhbCB2YWx1ZSBvciB0aGUgcmVhc29uXG4gICAgICB3aHkgdGhlIHByb21pc2UgY2Fubm90IGJlIGZ1bGZpbGxlZC5cblxuICAgICAgVGVybWlub2xvZ3lcbiAgICAgIC0tLS0tLS0tLS0tXG5cbiAgICAgIC0gYHByb21pc2VgIGlzIGFuIG9iamVjdCBvciBmdW5jdGlvbiB3aXRoIGEgYHRoZW5gIG1ldGhvZCB3aG9zZSBiZWhhdmlvciBjb25mb3JtcyB0byB0aGlzIHNwZWNpZmljYXRpb24uXG4gICAgICAtIGB0aGVuYWJsZWAgaXMgYW4gb2JqZWN0IG9yIGZ1bmN0aW9uIHRoYXQgZGVmaW5lcyBhIGB0aGVuYCBtZXRob2QuXG4gICAgICAtIGB2YWx1ZWAgaXMgYW55IGxlZ2FsIEphdmFTY3JpcHQgdmFsdWUgKGluY2x1ZGluZyB1bmRlZmluZWQsIGEgdGhlbmFibGUsIG9yIGEgcHJvbWlzZSkuXG4gICAgICAtIGBleGNlcHRpb25gIGlzIGEgdmFsdWUgdGhhdCBpcyB0aHJvd24gdXNpbmcgdGhlIHRocm93IHN0YXRlbWVudC5cbiAgICAgIC0gYHJlYXNvbmAgaXMgYSB2YWx1ZSB0aGF0IGluZGljYXRlcyB3aHkgYSBwcm9taXNlIHdhcyByZWplY3RlZC5cbiAgICAgIC0gYHNldHRsZWRgIHRoZSBmaW5hbCByZXN0aW5nIHN0YXRlIG9mIGEgcHJvbWlzZSwgZnVsZmlsbGVkIG9yIHJlamVjdGVkLlxuXG4gICAgICBBIHByb21pc2UgY2FuIGJlIGluIG9uZSBvZiB0aHJlZSBzdGF0ZXM6IHBlbmRpbmcsIGZ1bGZpbGxlZCwgb3IgcmVqZWN0ZWQuXG5cbiAgICAgIFByb21pc2VzIHRoYXQgYXJlIGZ1bGZpbGxlZCBoYXZlIGEgZnVsZmlsbG1lbnQgdmFsdWUgYW5kIGFyZSBpbiB0aGUgZnVsZmlsbGVkXG4gICAgICBzdGF0ZS4gIFByb21pc2VzIHRoYXQgYXJlIHJlamVjdGVkIGhhdmUgYSByZWplY3Rpb24gcmVhc29uIGFuZCBhcmUgaW4gdGhlXG4gICAgICByZWplY3RlZCBzdGF0ZS4gIEEgZnVsZmlsbG1lbnQgdmFsdWUgaXMgbmV2ZXIgYSB0aGVuYWJsZS5cblxuICAgICAgUHJvbWlzZXMgY2FuIGFsc28gYmUgc2FpZCB0byAqcmVzb2x2ZSogYSB2YWx1ZS4gIElmIHRoaXMgdmFsdWUgaXMgYWxzbyBhXG4gICAgICBwcm9taXNlLCB0aGVuIHRoZSBvcmlnaW5hbCBwcm9taXNlJ3Mgc2V0dGxlZCBzdGF0ZSB3aWxsIG1hdGNoIHRoZSB2YWx1ZSdzXG4gICAgICBzZXR0bGVkIHN0YXRlLiAgU28gYSBwcm9taXNlIHRoYXQgKnJlc29sdmVzKiBhIHByb21pc2UgdGhhdCByZWplY3RzIHdpbGxcbiAgICAgIGl0c2VsZiByZWplY3QsIGFuZCBhIHByb21pc2UgdGhhdCAqcmVzb2x2ZXMqIGEgcHJvbWlzZSB0aGF0IGZ1bGZpbGxzIHdpbGxcbiAgICAgIGl0c2VsZiBmdWxmaWxsLlxuXG5cbiAgICAgIEJhc2ljIFVzYWdlOlxuICAgICAgLS0tLS0tLS0tLS0tXG5cbiAgICAgIGBgYGpzXG4gICAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAvLyBvbiBzdWNjZXNzXG4gICAgICAgIHJlc29sdmUodmFsdWUpO1xuXG4gICAgICAgIC8vIG9uIGZhaWx1cmVcbiAgICAgICAgcmVqZWN0KHJlYXNvbik7XG4gICAgICB9KTtcblxuICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIC8vIG9uIGZ1bGZpbGxtZW50XG4gICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgLy8gb24gcmVqZWN0aW9uXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBBZHZhbmNlZCBVc2FnZTpcbiAgICAgIC0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICBQcm9taXNlcyBzaGluZSB3aGVuIGFic3RyYWN0aW5nIGF3YXkgYXN5bmNocm9ub3VzIGludGVyYWN0aW9ucyBzdWNoIGFzXG4gICAgICBgWE1MSHR0cFJlcXVlc3Rgcy5cblxuICAgICAgYGBganNcbiAgICAgIGZ1bmN0aW9uIGdldEpTT04odXJsKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgICAgIHhoci5vcGVuKCdHRVQnLCB1cmwpO1xuICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBoYW5kbGVyO1xuICAgICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnanNvbic7XG4gICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgICAgICAgeGhyLnNlbmQoKTtcblxuICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZXIoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSB0aGlzLkRPTkUpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMucmVzcG9uc2UpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ2dldEpTT046IGAnICsgdXJsICsgJ2AgZmFpbGVkIHdpdGggc3RhdHVzOiBbJyArIHRoaXMuc3RhdHVzICsgJ10nKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgZ2V0SlNPTignL3Bvc3RzLmpzb24nKS50aGVuKGZ1bmN0aW9uKGpzb24pIHtcbiAgICAgICAgLy8gb24gZnVsZmlsbG1lbnRcbiAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICAvLyBvbiByZWplY3Rpb25cbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIFVubGlrZSBjYWxsYmFja3MsIHByb21pc2VzIGFyZSBncmVhdCBjb21wb3NhYmxlIHByaW1pdGl2ZXMuXG5cbiAgICAgIGBgYGpzXG4gICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgIGdldEpTT04oJy9wb3N0cycpLFxuICAgICAgICBnZXRKU09OKCcvY29tbWVudHMnKVxuICAgICAgXSkudGhlbihmdW5jdGlvbih2YWx1ZXMpe1xuICAgICAgICB2YWx1ZXNbMF0gLy8gPT4gcG9zdHNKU09OXG4gICAgICAgIHZhbHVlc1sxXSAvLyA9PiBjb21tZW50c0pTT05cblxuICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgQGNsYXNzIFByb21pc2VcbiAgICAgIEBwYXJhbSB7ZnVuY3Rpb259IHJlc29sdmVyXG4gICAgICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gICAgICBAY29uc3RydWN0b3JcbiAgICAqL1xuICAgIGZ1bmN0aW9uICQkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZShyZXNvbHZlcikge1xuICAgICAgdGhpcy5faWQgPSAkJGVzNiRwcm9taXNlJHByb21pc2UkJGNvdW50ZXIrKztcbiAgICAgIHRoaXMuX3N0YXRlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcmVzdWx0ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3Vic2NyaWJlcnMgPSBbXTtcblxuICAgICAgaWYgKCQkJGludGVybmFsJCRub29wICE9PSByZXNvbHZlcikge1xuICAgICAgICBpZiAoISQkdXRpbHMkJGlzRnVuY3Rpb24ocmVzb2x2ZXIpKSB7XG4gICAgICAgICAgJCRlczYkcHJvbWlzZSRwcm9taXNlJCRuZWVkc1Jlc29sdmVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgJCRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlKSkge1xuICAgICAgICAgICQkZXM2JHByb21pc2UkcHJvbWlzZSQkbmVlZHNOZXcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQkJGludGVybmFsJCRpbml0aWFsaXplUHJvbWlzZSh0aGlzLCByZXNvbHZlcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJCRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlLmFsbCA9ICQkcHJvbWlzZSRhbGwkJGRlZmF1bHQ7XG4gICAgJCRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlLnJhY2UgPSAkJHByb21pc2UkcmFjZSQkZGVmYXVsdDtcbiAgICAkJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UucmVzb2x2ZSA9ICQkcHJvbWlzZSRyZXNvbHZlJCRkZWZhdWx0O1xuICAgICQkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZS5yZWplY3QgPSAkJHByb21pc2UkcmVqZWN0JCRkZWZhdWx0O1xuXG4gICAgJCRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlLnByb3RvdHlwZSA9IHtcbiAgICAgIGNvbnN0cnVjdG9yOiAkJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UsXG5cbiAgICAvKipcbiAgICAgIFRoZSBwcmltYXJ5IHdheSBvZiBpbnRlcmFjdGluZyB3aXRoIGEgcHJvbWlzZSBpcyB0aHJvdWdoIGl0cyBgdGhlbmAgbWV0aG9kLFxuICAgICAgd2hpY2ggcmVnaXN0ZXJzIGNhbGxiYWNrcyB0byByZWNlaXZlIGVpdGhlciBhIHByb21pc2UncyBldmVudHVhbCB2YWx1ZSBvciB0aGVcbiAgICAgIHJlYXNvbiB3aHkgdGhlIHByb21pc2UgY2Fubm90IGJlIGZ1bGZpbGxlZC5cblxuICAgICAgYGBganNcbiAgICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbih1c2VyKXtcbiAgICAgICAgLy8gdXNlciBpcyBhdmFpbGFibGVcbiAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgICAgIC8vIHVzZXIgaXMgdW5hdmFpbGFibGUsIGFuZCB5b3UgYXJlIGdpdmVuIHRoZSByZWFzb24gd2h5XG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBDaGFpbmluZ1xuICAgICAgLS0tLS0tLS1cblxuICAgICAgVGhlIHJldHVybiB2YWx1ZSBvZiBgdGhlbmAgaXMgaXRzZWxmIGEgcHJvbWlzZS4gIFRoaXMgc2Vjb25kLCAnZG93bnN0cmVhbSdcbiAgICAgIHByb21pc2UgaXMgcmVzb2x2ZWQgd2l0aCB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBmaXJzdCBwcm9taXNlJ3MgZnVsZmlsbG1lbnRcbiAgICAgIG9yIHJlamVjdGlvbiBoYW5kbGVyLCBvciByZWplY3RlZCBpZiB0aGUgaGFuZGxlciB0aHJvd3MgYW4gZXhjZXB0aW9uLlxuXG4gICAgICBgYGBqc1xuICAgICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAgIHJldHVybiB1c2VyLm5hbWU7XG4gICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIHJldHVybiAnZGVmYXVsdCBuYW1lJztcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHVzZXJOYW1lKSB7XG4gICAgICAgIC8vIElmIGBmaW5kVXNlcmAgZnVsZmlsbGVkLCBgdXNlck5hbWVgIHdpbGwgYmUgdGhlIHVzZXIncyBuYW1lLCBvdGhlcndpc2UgaXRcbiAgICAgICAgLy8gd2lsbCBiZSBgJ2RlZmF1bHQgbmFtZSdgXG4gICAgICB9KTtcblxuICAgICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRm91bmQgdXNlciwgYnV0IHN0aWxsIHVuaGFwcHknKTtcbiAgICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdgZmluZFVzZXJgIHJlamVjdGVkIGFuZCB3ZSdyZSB1bmhhcHB5Jyk7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAvLyBuZXZlciByZWFjaGVkXG4gICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIC8vIGlmIGBmaW5kVXNlcmAgZnVsZmlsbGVkLCBgcmVhc29uYCB3aWxsIGJlICdGb3VuZCB1c2VyLCBidXQgc3RpbGwgdW5oYXBweScuXG4gICAgICAgIC8vIElmIGBmaW5kVXNlcmAgcmVqZWN0ZWQsIGByZWFzb25gIHdpbGwgYmUgJ2BmaW5kVXNlcmAgcmVqZWN0ZWQgYW5kIHdlJ3JlIHVuaGFwcHknLlxuICAgICAgfSk7XG4gICAgICBgYGBcbiAgICAgIElmIHRoZSBkb3duc3RyZWFtIHByb21pc2UgZG9lcyBub3Qgc3BlY2lmeSBhIHJlamVjdGlvbiBoYW5kbGVyLCByZWplY3Rpb24gcmVhc29ucyB3aWxsIGJlIHByb3BhZ2F0ZWQgZnVydGhlciBkb3duc3RyZWFtLlxuXG4gICAgICBgYGBqc1xuICAgICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAgIHRocm93IG5ldyBQZWRhZ29naWNhbEV4Y2VwdGlvbignVXBzdHJlYW0gZXJyb3InKTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIC8vIG5ldmVyIHJlYWNoZWRcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIC8vIG5ldmVyIHJlYWNoZWRcbiAgICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgLy8gVGhlIGBQZWRnYWdvY2lhbEV4Y2VwdGlvbmAgaXMgcHJvcGFnYXRlZCBhbGwgdGhlIHdheSBkb3duIHRvIGhlcmVcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIEFzc2ltaWxhdGlvblxuICAgICAgLS0tLS0tLS0tLS0tXG5cbiAgICAgIFNvbWV0aW1lcyB0aGUgdmFsdWUgeW91IHdhbnQgdG8gcHJvcGFnYXRlIHRvIGEgZG93bnN0cmVhbSBwcm9taXNlIGNhbiBvbmx5IGJlXG4gICAgICByZXRyaWV2ZWQgYXN5bmNocm9ub3VzbHkuIFRoaXMgY2FuIGJlIGFjaGlldmVkIGJ5IHJldHVybmluZyBhIHByb21pc2UgaW4gdGhlXG4gICAgICBmdWxmaWxsbWVudCBvciByZWplY3Rpb24gaGFuZGxlci4gVGhlIGRvd25zdHJlYW0gcHJvbWlzZSB3aWxsIHRoZW4gYmUgcGVuZGluZ1xuICAgICAgdW50aWwgdGhlIHJldHVybmVkIHByb21pc2UgaXMgc2V0dGxlZC4gVGhpcyBpcyBjYWxsZWQgKmFzc2ltaWxhdGlvbiouXG5cbiAgICAgIGBgYGpzXG4gICAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICAgcmV0dXJuIGZpbmRDb21tZW50c0J5QXV0aG9yKHVzZXIpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAoY29tbWVudHMpIHtcbiAgICAgICAgLy8gVGhlIHVzZXIncyBjb21tZW50cyBhcmUgbm93IGF2YWlsYWJsZVxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgSWYgdGhlIGFzc2ltbGlhdGVkIHByb21pc2UgcmVqZWN0cywgdGhlbiB0aGUgZG93bnN0cmVhbSBwcm9taXNlIHdpbGwgYWxzbyByZWplY3QuXG5cbiAgICAgIGBgYGpzXG4gICAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICAgcmV0dXJuIGZpbmRDb21tZW50c0J5QXV0aG9yKHVzZXIpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAoY29tbWVudHMpIHtcbiAgICAgICAgLy8gSWYgYGZpbmRDb21tZW50c0J5QXV0aG9yYCBmdWxmaWxscywgd2UnbGwgaGF2ZSB0aGUgdmFsdWUgaGVyZVxuICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAvLyBJZiBgZmluZENvbW1lbnRzQnlBdXRob3JgIHJlamVjdHMsIHdlJ2xsIGhhdmUgdGhlIHJlYXNvbiBoZXJlXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBTaW1wbGUgRXhhbXBsZVxuICAgICAgLS0tLS0tLS0tLS0tLS1cblxuICAgICAgU3luY2hyb25vdXMgRXhhbXBsZVxuXG4gICAgICBgYGBqYXZhc2NyaXB0XG4gICAgICB2YXIgcmVzdWx0O1xuXG4gICAgICB0cnkge1xuICAgICAgICByZXN1bHQgPSBmaW5kUmVzdWx0KCk7XG4gICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgIH0gY2F0Y2gocmVhc29uKSB7XG4gICAgICAgIC8vIGZhaWx1cmVcbiAgICAgIH1cbiAgICAgIGBgYFxuXG4gICAgICBFcnJiYWNrIEV4YW1wbGVcblxuICAgICAgYGBganNcbiAgICAgIGZpbmRSZXN1bHQoZnVuY3Rpb24ocmVzdWx0LCBlcnIpe1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgLy8gZmFpbHVyZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgUHJvbWlzZSBFeGFtcGxlO1xuXG4gICAgICBgYGBqYXZhc2NyaXB0XG4gICAgICBmaW5kUmVzdWx0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpe1xuICAgICAgICAvLyBzdWNjZXNzXG4gICAgICB9LCBmdW5jdGlvbihyZWFzb24pe1xuICAgICAgICAvLyBmYWlsdXJlXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBBZHZhbmNlZCBFeGFtcGxlXG4gICAgICAtLS0tLS0tLS0tLS0tLVxuXG4gICAgICBTeW5jaHJvbm91cyBFeGFtcGxlXG5cbiAgICAgIGBgYGphdmFzY3JpcHRcbiAgICAgIHZhciBhdXRob3IsIGJvb2tzO1xuXG4gICAgICB0cnkge1xuICAgICAgICBhdXRob3IgPSBmaW5kQXV0aG9yKCk7XG4gICAgICAgIGJvb2tzICA9IGZpbmRCb29rc0J5QXV0aG9yKGF1dGhvcik7XG4gICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgIH0gY2F0Y2gocmVhc29uKSB7XG4gICAgICAgIC8vIGZhaWx1cmVcbiAgICAgIH1cbiAgICAgIGBgYFxuXG4gICAgICBFcnJiYWNrIEV4YW1wbGVcblxuICAgICAgYGBganNcblxuICAgICAgZnVuY3Rpb24gZm91bmRCb29rcyhib29rcykge1xuXG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGZhaWx1cmUocmVhc29uKSB7XG5cbiAgICAgIH1cblxuICAgICAgZmluZEF1dGhvcihmdW5jdGlvbihhdXRob3IsIGVycil7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICBmYWlsdXJlKGVycik7XG4gICAgICAgICAgLy8gZmFpbHVyZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmaW5kQm9vb2tzQnlBdXRob3IoYXV0aG9yLCBmdW5jdGlvbihib29rcywgZXJyKSB7XG4gICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBmYWlsdXJlKGVycik7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIGZvdW5kQm9va3MoYm9va3MpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2gocmVhc29uKSB7XG4gICAgICAgICAgICAgICAgICBmYWlsdXJlKHJlYXNvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICBmYWlsdXJlKGVycik7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgUHJvbWlzZSBFeGFtcGxlO1xuXG4gICAgICBgYGBqYXZhc2NyaXB0XG4gICAgICBmaW5kQXV0aG9yKCkuXG4gICAgICAgIHRoZW4oZmluZEJvb2tzQnlBdXRob3IpLlxuICAgICAgICB0aGVuKGZ1bmN0aW9uKGJvb2tzKXtcbiAgICAgICAgICAvLyBmb3VuZCBib29rc1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24ocmVhc29uKXtcbiAgICAgICAgLy8gc29tZXRoaW5nIHdlbnQgd3JvbmdcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIEBtZXRob2QgdGhlblxuICAgICAgQHBhcmFtIHtGdW5jdGlvbn0gb25GdWxmaWxsZWRcbiAgICAgIEBwYXJhbSB7RnVuY3Rpb259IG9uUmVqZWN0ZWRcbiAgICAgIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgICAgIEByZXR1cm4ge1Byb21pc2V9XG4gICAgKi9cbiAgICAgIHRoZW46IGZ1bmN0aW9uKG9uRnVsZmlsbG1lbnQsIG9uUmVqZWN0aW9uKSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSB0aGlzO1xuICAgICAgICB2YXIgc3RhdGUgPSBwYXJlbnQuX3N0YXRlO1xuXG4gICAgICAgIGlmIChzdGF0ZSA9PT0gJCQkaW50ZXJuYWwkJEZVTEZJTExFRCAmJiAhb25GdWxmaWxsbWVudCB8fCBzdGF0ZSA9PT0gJCQkaW50ZXJuYWwkJFJFSkVDVEVEICYmICFvblJlamVjdGlvbikge1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNoaWxkID0gbmV3IHRoaXMuY29uc3RydWN0b3IoJCQkaW50ZXJuYWwkJG5vb3ApO1xuICAgICAgICB2YXIgcmVzdWx0ID0gcGFyZW50Ll9yZXN1bHQ7XG5cbiAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgdmFyIGNhbGxiYWNrID0gYXJndW1lbnRzW3N0YXRlIC0gMV07XG4gICAgICAgICAgJCRhc2FwJCRkZWZhdWx0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAkJCRpbnRlcm5hbCQkaW52b2tlQ2FsbGJhY2soc3RhdGUsIGNoaWxkLCBjYWxsYmFjaywgcmVzdWx0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkJCRpbnRlcm5hbCQkc3Vic2NyaWJlKHBhcmVudCwgY2hpbGQsIG9uRnVsZmlsbG1lbnQsIG9uUmVqZWN0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgIH0sXG5cbiAgICAvKipcbiAgICAgIGBjYXRjaGAgaXMgc2ltcGx5IHN1Z2FyIGZvciBgdGhlbih1bmRlZmluZWQsIG9uUmVqZWN0aW9uKWAgd2hpY2ggbWFrZXMgaXQgdGhlIHNhbWVcbiAgICAgIGFzIHRoZSBjYXRjaCBibG9jayBvZiBhIHRyeS9jYXRjaCBzdGF0ZW1lbnQuXG5cbiAgICAgIGBgYGpzXG4gICAgICBmdW5jdGlvbiBmaW5kQXV0aG9yKCl7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGRuJ3QgZmluZCB0aGF0IGF1dGhvcicpO1xuICAgICAgfVxuXG4gICAgICAvLyBzeW5jaHJvbm91c1xuICAgICAgdHJ5IHtcbiAgICAgICAgZmluZEF1dGhvcigpO1xuICAgICAgfSBjYXRjaChyZWFzb24pIHtcbiAgICAgICAgLy8gc29tZXRoaW5nIHdlbnQgd3JvbmdcbiAgICAgIH1cblxuICAgICAgLy8gYXN5bmMgd2l0aCBwcm9taXNlc1xuICAgICAgZmluZEF1dGhvcigpLmNhdGNoKGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgICAgIC8vIHNvbWV0aGluZyB3ZW50IHdyb25nXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBAbWV0aG9kIGNhdGNoXG4gICAgICBAcGFyYW0ge0Z1bmN0aW9ufSBvblJlamVjdGlvblxuICAgICAgVXNlZnVsIGZvciB0b29saW5nLlxuICAgICAgQHJldHVybiB7UHJvbWlzZX1cbiAgICAqL1xuICAgICAgJ2NhdGNoJzogZnVuY3Rpb24ob25SZWplY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGlvbik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciAkJGVzNiRwcm9taXNlJHBvbHlmaWxsJCRkZWZhdWx0ID0gZnVuY3Rpb24gcG9seWZpbGwoKSB7XG4gICAgICB2YXIgbG9jYWw7XG5cbiAgICAgIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBsb2NhbCA9IGdsb2JhbDtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICAgIGxvY2FsID0gd2luZG93O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9jYWwgPSBzZWxmO1xuICAgICAgfVxuXG4gICAgICB2YXIgZXM2UHJvbWlzZVN1cHBvcnQgPVxuICAgICAgICBcIlByb21pc2VcIiBpbiBsb2NhbCAmJlxuICAgICAgICAvLyBTb21lIG9mIHRoZXNlIG1ldGhvZHMgYXJlIG1pc3NpbmcgZnJvbVxuICAgICAgICAvLyBGaXJlZm94L0Nocm9tZSBleHBlcmltZW50YWwgaW1wbGVtZW50YXRpb25zXG4gICAgICAgIFwicmVzb2x2ZVwiIGluIGxvY2FsLlByb21pc2UgJiZcbiAgICAgICAgXCJyZWplY3RcIiBpbiBsb2NhbC5Qcm9taXNlICYmXG4gICAgICAgIFwiYWxsXCIgaW4gbG9jYWwuUHJvbWlzZSAmJlxuICAgICAgICBcInJhY2VcIiBpbiBsb2NhbC5Qcm9taXNlICYmXG4gICAgICAgIC8vIE9sZGVyIHZlcnNpb24gb2YgdGhlIHNwZWMgaGFkIGEgcmVzb2x2ZXIgb2JqZWN0XG4gICAgICAgIC8vIGFzIHRoZSBhcmcgcmF0aGVyIHRoYW4gYSBmdW5jdGlvblxuICAgICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHJlc29sdmU7XG4gICAgICAgICAgbmV3IGxvY2FsLlByb21pc2UoZnVuY3Rpb24ocikgeyByZXNvbHZlID0gcjsgfSk7XG4gICAgICAgICAgcmV0dXJuICQkdXRpbHMkJGlzRnVuY3Rpb24ocmVzb2x2ZSk7XG4gICAgICAgIH0oKSk7XG5cbiAgICAgIGlmICghZXM2UHJvbWlzZVN1cHBvcnQpIHtcbiAgICAgICAgbG9jYWwuUHJvbWlzZSA9ICQkZXM2JHByb21pc2UkcHJvbWlzZSQkZGVmYXVsdDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGVzNiRwcm9taXNlJHVtZCQkRVM2UHJvbWlzZSA9IHtcbiAgICAgICdQcm9taXNlJzogJCRlczYkcHJvbWlzZSRwcm9taXNlJCRkZWZhdWx0LFxuICAgICAgJ3BvbHlmaWxsJzogJCRlczYkcHJvbWlzZSRwb2x5ZmlsbCQkZGVmYXVsdFxuICAgIH07XG5cbiAgICAvKiBnbG9iYWwgZGVmaW5lOnRydWUgbW9kdWxlOnRydWUgd2luZG93OiB0cnVlICovXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lWydhbWQnXSkge1xuICAgICAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gZXM2JHByb21pc2UkdW1kJCRFUzZQcm9taXNlOyB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZVsnZXhwb3J0cyddKSB7XG4gICAgICBtb2R1bGVbJ2V4cG9ydHMnXSA9IGVzNiRwcm9taXNlJHVtZCQkRVM2UHJvbWlzZTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpc1snRVM2UHJvbWlzZSddID0gZXM2JHByb21pc2UkdW1kJCRFUzZQcm9taXNlO1xuICAgIH1cbn0pLmNhbGwodGhpcyk7XG59KS5jYWxsKHRoaXMscmVxdWlyZSgnX3Byb2Nlc3MnKSx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KSIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbnByb2Nlc3MubmV4dFRpY2sgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBjYW5TZXRJbW1lZGlhdGUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5zZXRJbW1lZGlhdGU7XG4gICAgdmFyIGNhbk11dGF0aW9uT2JzZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyO1xuICAgIHZhciBjYW5Qb3N0ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiB3aW5kb3cucG9zdE1lc3NhZ2UgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXJcbiAgICA7XG5cbiAgICBpZiAoY2FuU2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZikgeyByZXR1cm4gd2luZG93LnNldEltbWVkaWF0ZShmKSB9O1xuICAgIH1cblxuICAgIHZhciBxdWV1ZSA9IFtdO1xuXG4gICAgaWYgKGNhbk11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgdmFyIGhpZGRlbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHZhciBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBxdWV1ZUxpc3QgPSBxdWV1ZS5zbGljZSgpO1xuICAgICAgICAgICAgcXVldWUubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIHF1ZXVlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgICAgIGZuKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShoaWRkZW5EaXYsIHsgYXR0cmlidXRlczogdHJ1ZSB9KTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgICAgIGlmICghcXVldWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaGlkZGVuRGl2LnNldEF0dHJpYnV0ZSgneWVzJywgJ25vJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKGZuKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoY2FuUG9zdCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGV2LnNvdXJjZTtcbiAgICAgICAgICAgIGlmICgoc291cmNlID09PSB3aW5kb3cgfHwgc291cmNlID09PSBudWxsKSAmJiBldi5kYXRhID09PSAncHJvY2Vzcy10aWNrJykge1xuICAgICAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIGlmIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmbiA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGZuKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0cnVlKTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgICAgIHF1ZXVlLnB1c2goZm4pO1xuICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKCdwcm9jZXNzLXRpY2snLCAnKicpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICBzZXRUaW1lb3V0KGZuLCAwKTtcbiAgICB9O1xufSkoKTtcblxucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG4vLyBUT0RPKHNodHlsbWFuKVxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG4iLCIvKmpzbGludCBub2RlOnRydWUqL1xuLypnbG9iYWxzIFJUQ1BlZXJDb25uZWN0aW9uLCBtb3pSVENQZWVyQ29ubmVjdGlvbiwgd2Via2l0UlRDUGVlckNvbm5lY3Rpb24gKi9cbi8qZ2xvYmFscyBSVENTZXNzaW9uRGVzY3JpcHRpb24sIG1velJUQ1Nlc3Npb25EZXNjcmlwdGlvbiAqL1xuLypnbG9iYWxzIFJUQ0ljZUNhbmRpZGF0ZSwgbW96UlRDSWNlQ2FuZGlkYXRlICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBteVJUQ1BlZXJDb25uZWN0aW9uID0gbnVsbDtcbnZhciBteVJUQ1Nlc3Npb25EZXNjcmlwdGlvbiA9IG51bGw7XG52YXIgbXlSVENJY2VDYW5kaWRhdGUgPSBudWxsO1xuXG52YXIgcmVuYW1lSWNlVVJMcyA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgaWYgKCFjb25maWcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKCFjb25maWcuaWNlU2VydmVycykge1xuICAgIHJldHVybiBjb25maWc7XG4gIH1cbiAgY29uZmlnLmljZVNlcnZlcnMuZm9yRWFjaChmdW5jdGlvbiAoc2VydmVyKSB7XG4gICAgc2VydmVyLnVybCA9IHNlcnZlci51cmxzO1xuICAgIGRlbGV0ZSBzZXJ2ZXIudXJscztcbiAgfSk7XG4gIHJldHVybiBjb25maWc7XG59O1xuXG52YXIgZml4Q2hyb21lU3RhdHNSZXNwb25zZSA9IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gIHZhciBzdGFuZGFyZFJlcG9ydCA9IHt9O1xuICB2YXIgcmVwb3J0cyA9IHJlc3BvbnNlLnJlc3VsdCgpO1xuICByZXBvcnRzLmZvckVhY2goZnVuY3Rpb24ocmVwb3J0KSB7XG4gICAgdmFyIHN0YW5kYXJkU3RhdHMgPSB7XG4gICAgICBpZDogcmVwb3J0LmlkLFxuICAgICAgdGltZXN0YW1wOiByZXBvcnQudGltZXN0YW1wLFxuICAgICAgdHlwZTogcmVwb3J0LnR5cGVcbiAgICB9O1xuICAgIHJlcG9ydC5uYW1lcygpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgc3RhbmRhcmRTdGF0c1tuYW1lXSA9IHJlcG9ydC5zdGF0KG5hbWUpO1xuICAgIH0pO1xuICAgIHN0YW5kYXJkUmVwb3J0W3N0YW5kYXJkU3RhdHMuaWRdID0gc3RhbmRhcmRTdGF0cztcbiAgfSk7XG5cbiAgcmV0dXJuIHN0YW5kYXJkUmVwb3J0O1xufTtcblxudmFyIHNlc3Npb25IYXNEYXRhID0gZnVuY3Rpb24oZGVzYykge1xuICBpZiAoIWRlc2MpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGhhc0RhdGEgPSBmYWxzZTtcbiAgdmFyIHByZWZpeCA9ICdtPWFwcGxpY2F0aW9uJztcbiAgZGVzYy5zZHAuc3BsaXQoJ1xcbicpLmZvckVhY2goZnVuY3Rpb24obGluZSkge1xuICAgIGlmIChsaW5lLnNsaWNlKDAsIHByZWZpeC5sZW5ndGgpID09PSBwcmVmaXgpIHtcbiAgICAgIGhhc0RhdGEgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBoYXNEYXRhO1xufTtcblxuLy8gVW5pZnkgUGVlckNvbm5lY3Rpb24gT2JqZWN0LlxuaWYgKHR5cGVvZiBSVENQZWVyQ29ubmVjdGlvbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgbXlSVENQZWVyQ29ubmVjdGlvbiA9IFJUQ1BlZXJDb25uZWN0aW9uO1xufSBlbHNlIGlmICh0eXBlb2YgbW96UlRDUGVlckNvbm5lY3Rpb24gIT09ICd1bmRlZmluZWQnKSB7XG4gIG15UlRDUGVlckNvbm5lY3Rpb24gPSBmdW5jdGlvbiAoY29uZmlndXJhdGlvbiwgY29uc3RyYWludHMpIHtcbiAgICAvLyBGaXJlZm94IHVzZXMgJ3VybCcgcmF0aGVyIHRoYW4gJ3VybHMnIGZvciBSVENJY2VTZXJ2ZXIudXJsc1xuICAgIHZhciBwYyA9IG5ldyBtb3pSVENQZWVyQ29ubmVjdGlvbihyZW5hbWVJY2VVUkxzKGNvbmZpZ3VyYXRpb24pLCBjb25zdHJhaW50cyk7XG5cbiAgICAvLyBGaXJlZm94IGRvZXNuJ3QgZmlyZSAnb25uZWdvdGlhdGlvbm5lZWRlZCcgd2hlbiBhIGRhdGEgY2hhbm5lbCBpcyBjcmVhdGVkXG4gICAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9ODQwNzI4XG4gICAgdmFyIGRhdGFFbmFibGVkID0gZmFsc2U7XG4gICAgdmFyIGJvdW5kQ3JlYXRlRGF0YUNoYW5uZWwgPSBwYy5jcmVhdGVEYXRhQ2hhbm5lbC5iaW5kKHBjKTtcbiAgICBwYy5jcmVhdGVEYXRhQ2hhbm5lbCA9IGZ1bmN0aW9uKGxhYmVsLCBkYXRhQ2hhbm5lbERpY3QpIHtcbiAgICAgIHZhciBkYyA9IGJvdW5kQ3JlYXRlRGF0YUNoYW5uZWwobGFiZWwsIGRhdGFDaGFubmVsRGljdCk7XG4gICAgICBpZiAoIWRhdGFFbmFibGVkKSB7XG4gICAgICAgIGRhdGFFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHBjLm9ubmVnb3RpYXRpb25uZWVkZWQgJiZcbiAgICAgICAgICAgICFzZXNzaW9uSGFzRGF0YShwYy5sb2NhbERlc2NyaXB0aW9uKSAmJlxuICAgICAgICAgICAgIXNlc3Npb25IYXNEYXRhKHBjLnJlbW90ZURlc2NyaXB0aW9uKSkge1xuICAgICAgICAgIHZhciBldmVudCA9IG5ldyBFdmVudCgnbmVnb3RpYXRpb25uZWVkZWQnKTtcbiAgICAgICAgICBwYy5vbm5lZ290aWF0aW9ubmVlZGVkKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGRjO1xuICAgIH07XG5cbiAgICByZXR1cm4gcGM7XG4gIH07XG59IGVsc2UgaWYgKHR5cGVvZiB3ZWJraXRSVENQZWVyQ29ubmVjdGlvbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgLy8gQ2hyb21lIHJldHVybnMgYSBub25zdGFuZGFyZCwgbm9uLUpTT04taWZpYWJsZSByZXNwb25zZSBmcm9tIGdldFN0YXRzLlxuICBteVJUQ1BlZXJDb25uZWN0aW9uID0gZnVuY3Rpb24oY29uZmlndXJhdGlvbiwgY29uc3RyYWludHMpIHtcbiAgICB2YXIgcGMgPSBuZXcgd2Via2l0UlRDUGVlckNvbm5lY3Rpb24oY29uZmlndXJhdGlvbiwgY29uc3RyYWludHMpO1xuICAgIHZhciBib3VuZEdldFN0YXRzID0gcGMuZ2V0U3RhdHMuYmluZChwYyk7XG4gICAgcGMuZ2V0U3RhdHMgPSBmdW5jdGlvbihzZWxlY3Rvciwgc3VjY2Vzc0NhbGxiYWNrLCBmYWlsdXJlQ2FsbGJhY2spIHtcbiAgICAgIHZhciBzdWNjZXNzQ2FsbGJhY2tXcmFwcGVyID0gZnVuY3Rpb24oY2hyb21lU3RhdHNSZXNwb25zZSkge1xuICAgICAgICBzdWNjZXNzQ2FsbGJhY2soZml4Q2hyb21lU3RhdHNSZXNwb25zZShjaHJvbWVTdGF0c1Jlc3BvbnNlKSk7XG4gICAgICB9O1xuICAgICAgLy8gQ2hyb21lIGFsc28gdGFrZXMgaXRzIGFyZ3VtZW50cyBpbiB0aGUgd3Jvbmcgb3JkZXIuXG4gICAgICBib3VuZEdldFN0YXRzKHN1Y2Nlc3NDYWxsYmFja1dyYXBwZXIsIGZhaWx1cmVDYWxsYmFjaywgc2VsZWN0b3IpO1xuICAgIH07XG4gICAgcmV0dXJuIHBjO1xuICB9O1xufVxuXG4vLyBVbmlmeSBTZXNzaW9uRGVzY3JwdGlvbiBPYmplY3QuXG5pZiAodHlwZW9mIFJUQ1Nlc3Npb25EZXNjcmlwdGlvbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgbXlSVENTZXNzaW9uRGVzY3JpcHRpb24gPSBSVENTZXNzaW9uRGVzY3JpcHRpb247XG59IGVsc2UgaWYgKHR5cGVvZiBtb3pSVENTZXNzaW9uRGVzY3JpcHRpb24gIT09ICd1bmRlZmluZWQnKSB7XG4gIG15UlRDU2Vzc2lvbkRlc2NyaXB0aW9uID0gbW96UlRDU2Vzc2lvbkRlc2NyaXB0aW9uO1xufVxuXG4vLyBVbmlmeSBJY2VDYW5kaWRhdGUgT2JqZWN0LlxuaWYgKHR5cGVvZiBSVENJY2VDYW5kaWRhdGUgIT09ICd1bmRlZmluZWQnKSB7XG4gIG15UlRDSWNlQ2FuZGlkYXRlID0gUlRDSWNlQ2FuZGlkYXRlO1xufSBlbHNlIGlmICh0eXBlb2YgbW96UlRDSWNlQ2FuZGlkYXRlICE9PSAndW5kZWZpbmVkJykge1xuICBteVJUQ0ljZUNhbmRpZGF0ZSA9IG1velJUQ0ljZUNhbmRpZGF0ZTtcbn1cblxuZXhwb3J0cy5SVENQZWVyQ29ubmVjdGlvbiA9IG15UlRDUGVlckNvbm5lY3Rpb247XG5leHBvcnRzLlJUQ1Nlc3Npb25EZXNjcmlwdGlvbiA9IG15UlRDU2Vzc2lvbkRlc2NyaXB0aW9uO1xuZXhwb3J0cy5SVENJY2VDYW5kaWRhdGUgPSBteVJUQ0ljZUNhbmRpZGF0ZTtcbiIsIihmdW5jdGlvbiAocHJvY2Vzcyl7XG4vKmdsb2JhbHMgcHJvY2VzcywgY29uc29sZSAqL1xuLypqc2xpbnQgaW5kZW50OjIsc2xvcHB5OnRydWUsIG5vZGU6dHJ1ZSAqL1xudmFyIHV0aWwgPSByZXF1aXJlKCcuLi8uLi9zcmMvdXRpbCcpO1xuXG4vKipcbiAqIEEgZnJlZWRvbS5qcyBsb2dnaW5nIHByb3ZpZGVyIHRoYXQgbG9ncyB0byBjaHJvbWUsIGZpcmVmb3gsIGFuZCBub2RlIGNvbnNvbGVzLlxuICogQENsYXNzIExvZ2dlcl9jb25zb2xlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge2NvbmZpZzogT2JqZWN0fSBjYXAgQ2FwYWJpbGl0aWVzIC0gY29uc29sZSByZXF1aXJlcyBnbG9iYWwgY29uZmlnLlxuICovXG52YXIgTG9nZ2VyX2NvbnNvbGUgPSBmdW5jdGlvbiAoY2FwKSB7XG4gIHRoaXMubGV2ZWwgPSAoY2FwLmNvbmZpZyAmJiBjYXAuY29uZmlnLmRlYnVnKSB8fCAnbG9nJztcbiAgdGhpcy5jb25zb2xlID0gKGNhcC5jb25maWcgJiYgY2FwLmNvbmZpZy5nbG9iYWwuY29uc29sZSk7XG4gIHV0aWwuaGFuZGxlRXZlbnRzKHRoaXMpO1xufTtcblxuXG4vKipcbiAqIExvZ2dpbmcgbGV2ZWxzLCBmb3IgZmlsdGVyaW5nIG91dHB1dC5cbiAqIEBwcml2YXRlXG4gKiBAc3RhdGljXG4gKi9cbkxvZ2dlcl9jb25zb2xlLmxldmVsID0ge1xuICBcImRlYnVnXCI6IDAsXG4gIFwiaW5mb1wiOiAxLFxuICBcImxvZ1wiOiAyLFxuICBcIndhcm5cIjogMyxcbiAgXCJlcnJvclwiOiA0XG59O1xuXG4vKipcbiAqIFByaW50IGEgbWVzc2FnZSB3aXRoIGFwcHJvcHJpYXRlIGZvcm1hdHRpbmcuXG4gKiBAbWV0aG9kIHByaW50XG4gKi9cbkxvZ2dlcl9jb25zb2xlLnByb3RvdHlwZS5wcmludCA9IGZ1bmN0aW9uIChzZXZlcml0eSwgc291cmNlLCBtc2cpIHtcbiAgdmFyIGFyciA9IG1zZztcbiAgaWYgKHR5cGVvZiB0aGlzLmNvbnNvbGUgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICB0aGlzLmNvbnNvbGUuZnJlZWRvbSA9PT0gdHJ1ZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAodHlwZW9mIGFyciA9PT0gJ3N0cmluZycpIHtcbiAgICBhcnIgPSBbYXJyXTtcbiAgfVxuICBcbiAgaWYgKExvZ2dlcl9jb25zb2xlLmxldmVsW3RoaXMubGV2ZWxdICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIExvZ2dlcl9jb25zb2xlLmxldmVsW3NldmVyaXR5XSA8IExvZ2dlcl9jb25zb2xlLmxldmVsW3RoaXMubGV2ZWxdKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIFxuICBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICB7fS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXScgJiYgc291cmNlKSB7XG4gICAgYXJyLnVuc2hpZnQoJ1xceDFCWzM5bScpO1xuICAgIGFyci51bnNoaWZ0KCdcXHgxQlszMW0nICsgc291cmNlKTtcbiAgICAvKmpzbGludCBub21lbjogdHJ1ZSovXG4gICAgLy8gRmlyZWZveCBpbiBKU00gY29udGV4dC5cbiAgICAvLyBzZWU6IGh0dHA6Ly9teHIubW96aWxsYS5vcmcvbW96aWxsYS1yZWxlYXNlL3NvdXJjZS90b29sa2l0L2RldnRvb2xzL0NvbnNvbGUuanNtXG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbnNvbGUubWF4TG9nTGV2ZWwgJiYgc291cmNlKSB7XG4gICAgICBpZiAoIXRoaXMuY29uc29sZS5mcmVlZG9tRHVtcCkge1xuICAgICAgICB0aGlzLmNvbnNvbGUuZnJlZWRvbUR1bXAgPSB0aGlzLmNvbnNvbGUuZHVtcDtcbiAgICAgICAgdGhpcy5jb25zb2xlLmR1bXAgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgfVxuICAgICAgdGhpcy5jb25zb2xlLmZyZWVkb21EdW1wKCd7JyArIHNvdXJjZSArICd9LicgKyBzZXZlcml0eSArICc6ICcgK1xuICAgICAgICAgIGFyci5qb2luKCcgJykgKyAnXFxuJyk7XG4gICAgICBhcnIudW5zaGlmdChzb3VyY2UudG9VcHBlckNhc2UoKSk7XG4gIC8vIEZpcmVmb3ggaW4gYnJvd3NlciBjb250ZXh0LlxuICB9IGVsc2UgaWYgKHRoaXMuY29uc29sZS5fX21vemlsbGFDb25zb2xlX18gJiYgc291cmNlKSB7XG4gICAgYXJyLnVuc2hpZnQoc291cmNlLnRvVXBwZXJDYXNlKCkpO1xuICAgIC8qanNsaW50IG5vbWVuOiBmYWxzZSovXG4gIH0gZWxzZSBpZiAoc291cmNlKSB7XG4gICAgYXJyLnVuc2hpZnQoJ2NvbG9yOiByZWQnKTtcbiAgICBhcnIudW5zaGlmdCgnJWMgJyArIHNvdXJjZSk7XG4gIH1cbiAgaWYgKCF0aGlzLmNvbnNvbGVbc2V2ZXJpdHldICYmIHRoaXMuY29uc29sZS5sb2cpIHtcbiAgICBzZXZlcml0eSA9ICdsb2cnO1xuICB9XG4gIHRoaXMuY29uc29sZVtzZXZlcml0eV0uYXBwbHkodGhpcy5jb25zb2xlLCBhcnIpO1xufTtcblxuLyoqXG4gKiBMb2cgYSBtZXNzYWdlIHRvIHRoZSBjb25zb2xlLlxuICogQHBhcmFtIHtTdHJpbmd9IHNvdXJjZSBUaGUgc291cmNlIG9mIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtTdHJpbmd9IG1zZyBUaGUgbWVzc2FnZSB0byBsb2cuXG4gKiBAbWV0aG9kIGxvZ1xuICovXG5Mb2dnZXJfY29uc29sZS5wcm90b3R5cGUubG9nID0gZnVuY3Rpb24gKHNvdXJjZSwgbXNnLCBjb250aW51YXRpb24pIHtcbiAgdGhpcy5wcmludCgnbG9nJywgc291cmNlLCBtc2cpO1xuICBjb250aW51YXRpb24oKTtcbn07XG5cbi8qKlxuICogTG9nIGEgbWVzc2FnZSB0byB0aGUgY29uc29sZSB3aXRoIGRlYnVnIHByaW9yaXR5LlxuICogQHBhcmFtIHtTdHJpbmd9IHNvdXJjZSBUaGUgc291cmNlIG9mIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtTdHJpbmd9IG1zZyBUaGUgbWVzc2FnZSB0byBsb2cuXG4gKiBAbWV0aG9kIGxvZ1xuICovXG5Mb2dnZXJfY29uc29sZS5wcm90b3R5cGUuZGVidWcgPSBmdW5jdGlvbiAoc291cmNlLCBtc2csIGNvbnRpbnVhdGlvbikge1xuICB0aGlzLnByaW50KCdkZWJ1ZycsIHNvdXJjZSwgbXNnKTtcbiAgY29udGludWF0aW9uKCk7XG59O1xuXG4vKipcbiAqIExvZyBhIG1lc3NhZ2UgdG8gdGhlIGNvbnNvbGUgd2l0aCBpbmZvIHByaW9yaXR5LlxuICogQHBhcmFtIHtTdHJpbmd9IHNvdXJjZSBUaGUgc291cmNlIG9mIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtTdHJpbmd9IG1zZyBUaGUgbWVzc2FnZSB0byBsb2cuXG4gKiBAbWV0aG9kIGxvZ1xuICovXG5Mb2dnZXJfY29uc29sZS5wcm90b3R5cGUuaW5mbyA9IGZ1bmN0aW9uIChzb3VyY2UsIG1zZywgY29udGludWF0aW9uKSB7XG4gIHRoaXMucHJpbnQoJ2luZm8nLCBzb3VyY2UsIG1zZyk7XG4gIGNvbnRpbnVhdGlvbigpO1xufTtcblxuLyoqXG4gKiBMb2cgYSBtZXNzYWdlIHRvIHRoZSBjb25zb2xlIHdpdGggd2FybiBwcmlvcml0eS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBzb3VyY2UgVGhlIHNvdXJjZSBvZiB0aGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBtc2cgVGhlIG1lc3NhZ2UgdG8gbG9nLlxuICogQG1ldGhvZCBsb2dcbiAqL1xuTG9nZ2VyX2NvbnNvbGUucHJvdG90eXBlLndhcm4gPSBmdW5jdGlvbiAoc291cmNlLCBtc2csIGNvbnRpbnVhdGlvbikge1xuICB0aGlzLnByaW50KCd3YXJuJywgc291cmNlLCBtc2cpO1xuICBjb250aW51YXRpb24oKTtcbn07XG5cbi8qKlxuICogTG9nIGEgbWVzc2FnZSB0byB0aGUgY29uc29sZSB3aXRoIGVycm9yIHByaW9yaXR5LlxuICogQHBhcmFtIHtTdHJpbmd9IHNvdXJjZSBUaGUgc291cmNlIG9mIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtTdHJpbmd9IG1zZyBUaGUgbWVzc2FnZSB0byBsb2cuXG4gKiBAbWV0aG9kIGxvZ1xuICovXG5Mb2dnZXJfY29uc29sZS5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoc291cmNlLCBtc2csIGNvbnRpbnVhdGlvbikge1xuICB0aGlzLnByaW50KCdlcnJvcicsIHNvdXJjZSwgbXNnKTtcbiAgY29udGludWF0aW9uKCk7XG59O1xuXG4vKiogUkVHSVNURVIgUFJPVklERVIgKiovXG5leHBvcnRzLnByb3ZpZGVyID0gTG9nZ2VyX2NvbnNvbGU7XG5leHBvcnRzLm5hbWUgPSAnY29yZS5jb25zb2xlJztcbmV4cG9ydHMuZmxhZ3MgPSB7Y29uZmlnOiB0cnVlfTtcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoJ19wcm9jZXNzJykpIiwiLypnbG9iYWxzIGNvbnNvbGUgKi9cbi8qanNsaW50IGluZGVudDoyLHdoaXRlOnRydWUsc2xvcHB5OnRydWUsIG5vZGU6dHJ1ZSAqL1xudmFyIHV0aWwgPSByZXF1aXJlKCcuLi8uLi9zcmMvdXRpbCcpO1xuXG4vKipcbiAqIEEgbWluaW1hbCBwcm92aWRlciBpbXBsZW1lbnRpbmcgdGhlIGNvcmUuZWNobyBpbnRlcmZhY2UgZm9yIGludGVyYWN0aW9uIHdpdGhcbiAqIGN1c3RvbSBjaGFubmVscy4gIFByaW1hcmlseSB1c2VkIGZvciB0ZXN0aW5nIHRoZSByb2J1c3RuZXNzIG9mIHRoZSBjdXN0b21cbiAqIGNoYW5uZWwgaW1wbGVtZW50YXRpb24uXG4gKiBAQ2xhc3MgRWNob191bnByaXZpbGVnZWRcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHttb2R1bGU6TW9kdWxlfSBjYXAgVGhlIG1vZHVsZSBjcmVhdGluZyB0aGlzIHByb3ZpZGVyLlxuICovXG52YXIgRWNob191bnByaXZpbGVnZWQgPSBmdW5jdGlvbihjYXAsIGRpc3BhdGNoRXZlbnQpIHtcbiAgdGhpcy5tb2QgPSBjYXAubW9kdWxlO1xuICB0aGlzLmRpc3BhdGNoRXZlbnQgPSBkaXNwYXRjaEV2ZW50O1xuICB1dGlsLmhhbmRsZUV2ZW50cyh0aGlzKTtcblxuICAvLyBUaGUgQ29yZSBvYmplY3QgZm9yIG1hbmFnaW5nIGNoYW5uZWxzLlxuICB0aGlzLm1vZC5vbmNlKCdjb3JlJywgZnVuY3Rpb24oQ29yZSkge1xuICAgIHRoaXMuY29yZSA9IG5ldyBDb3JlKCk7XG4gIH0uYmluZCh0aGlzKSk7XG4gIHRoaXMubW9kLmVtaXQodGhpcy5tb2QuY29udHJvbENoYW5uZWwsIHtcbiAgICB0eXBlOiAnY29yZSByZXF1ZXN0IGRlbGVnYXRlZCB0byBlY2hvJyxcbiAgICByZXF1ZXN0OiAnY29yZSdcbiAgfSk7XG59O1xuXG4vKipcbiAqIFNldHVwIHRoZSBwcm92aWRlciB0byBlY2hvIG9uIGEgc3BlY2lmaWMgcHJveHkuIFN1YnNlcXVlbnQgbWVzc2FnZXNcbiAqIEZyb20gdGhlIGN1c3RvbSBjaGFubmVsIGJvdW5kIGhlcmUgd2lsbCBiZSByZS1lbWl0dGVkIGFzIGEgbWVzc2FnZVxuICogZnJvbSB0aGUgcHJvdmlkZXIuICBTdWJzZXF1ZW50IG1lc3NhZ2VzIHRvIHRoZSBwcm92aWRlciB3aWxsIGJlXG4gKiBlbWl0dGVkIG9uIHRoZSBib3VuZCBjaGFubmVsLlxuICogQHBhcmFtIHtPYmplY3R9IHByb3h5IFRoZSBpZGVudGlmaWVyIGZvciB0aGUgY3VzdG9tIGNoYW5uZWwgdG8gYmluZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbnRpbnVhdGlvbiBGdW5jdGlvbiB0byBjYWxsIHdoZW4gc2V0dXAgaXMgY29tcGxldGUuXG4gKiBAbWV0aG9kIHNldHVwXG4gKi9cbkVjaG9fdW5wcml2aWxlZ2VkLnByb3RvdHlwZS5zZXR1cCA9IGZ1bmN0aW9uKHByb3h5LCBjb250aW51YXRpb24pIHtcbiAgY29udGludWF0aW9uKCk7XG4gIGlmICghdGhpcy5jb3JlKSB7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdtZXNzYWdlJywgJ25vIGNvcmUgYXZhaWxhYmxlIHRvIHNldHVwIHByb3h5IHdpdGggYXQgZWNobycpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuY29yZS5iaW5kQ2hhbm5lbChwcm94eSwgZnVuY3Rpb24oY2hhbikge1xuICAgIGlmICh0aGlzLmNoYW4pIHtcbiAgICAgIHRoaXMuY2hhbi5jbG9zZSgpO1xuICAgIH1cbiAgICB0aGlzLmNoYW4gPSBjaGFuO1xuICAgIHRoaXMuY2hhbi5vbkNsb3NlKGZ1bmN0aW9uKCkge1xuICAgICAgZGVsZXRlIHRoaXMuY2hhbjtcbiAgICB9LmJpbmQodGhpcykpO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnbWVzc2FnZScsICdjaGFubmVsIGJvdW5kIHRvIGVjaG8nKTtcbiAgICB0aGlzLmNoYW4ub24oJ21lc3NhZ2UnLCBmdW5jdGlvbihtKSB7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ21lc3NhZ2UnLCAnZnJvbSBjdXN0b20gY2hhbm5lbDogJyArIG0pO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG4vKipcbiAqIFNlbmQgYSBtZXNzYWdlIHRvIHRoZSBib3VuZCBjdXN0b20gY2hhbm5lbC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBzZW5kLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29udGludWF0aW9uIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBzZW5kaW5nIGlzIGNvbXBsZXRlLlxuICogQG1ldGhvZCBzZW5kXG4gKi9cbkVjaG9fdW5wcml2aWxlZ2VkLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24oc3RyLCBjb250aW51YXRpb24pIHtcbiAgY29udGludWF0aW9uKCk7XG4gIGlmICh0aGlzLmNoYW4pIHtcbiAgICB0aGlzLmNoYW4uZW1pdCgnbWVzc2FnZScsIHN0cik7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdtZXNzYWdlJywgJ25vIGNoYW5uZWwgYXZhaWxhYmxlJyk7XG4gIH1cbn07XG5cbmV4cG9ydHMucHJvdmlkZXIgPSBFY2hvX3VucHJpdmlsZWdlZDtcbmV4cG9ydHMubmFtZSA9IFwiY29yZS5lY2hvXCI7XG5leHBvcnRzLmZsYWdzID0ge21vZHVsZTogdHJ1ZX07XG4iLCIvKmdsb2JhbHMgY29uc29sZSAqL1xuLypqc2xpbnQgaW5kZW50OjIsd2hpdGU6dHJ1ZSxzbG9wcHk6dHJ1ZSxub2RlOnRydWUgKi9cblxuLyoqXG4gKiBBbiBvQXV0aCBtZXRhLXByb3ZpZGVyIGFsbG93aW5nIG11bHRpcGxlIHBsYXRmb3JtLWRlcGVuZGFudFxuICogb0F1dGggaW1wbGVtZW50YXRpb25zIHRvIHNlcnZlIGFzIHRoZSByZWRpcmVjdFVSTCBmb3IgYW4gb0F1dGggZmxvdy5cbiAqIFRoZSBjb3JlIGltcGxlbWVudGF0aW9ucyBhcmUgcHJvdmlkZWQgaW4gcHJvdmlkZXJzL29hdXRoLCBhbmQgYXJlXG4gKiBzdXBwbGVtZW50ZWQgaW4gcGxhdGZvcm0tZGVwZW5kZW50IHJlcG9zaXRvcmllcy5cbiAqXG4gKi9cbnZhciBPQXV0aCA9IGZ1bmN0aW9uIChoYW5kbGVycywgY2FwLCBkaXNwYXRjaEV2ZW50KSB7XG4gIHRoaXMuaGFuZGxlcnMgPSBoYW5kbGVycztcbiAgdGhpcy5kaXNwYXRjaEV2ZW50ID0gZGlzcGF0Y2hFdmVudDtcbiAgdGhpcy5vbmdvaW5nID0ge307XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIG9BdXRoIGhhbmRsZXJzLlxuICogVGhpcyBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZCBiZWZvcmUgcHJvdmlkZXIgaXMgdXNlZCwgYW5kIGJpbmRzIHRoZSBjdXJyZW50XG4gKiBvQXV0aCBwcm92aWRlciB0byBiZSBhc3NvY2lhdGVkIHdpdGggcmVnaXN0ZXJlZCBoYW5kbGVycy4gVGhpcyBpcyB1c2VkIHNvXG4gKiB0aGF0IGhhbmRsZXJzIHdoaWNoIGFyZSByZWdpc3RlcmVkIGJ5IHRoZSB1c2VyIGFwcGx5IG9ubHkgdGhlIHRoZSBmcmVlZG9tKClcbiAqIHNldHVwIGNhbGwgdGhleSBhcmUgYXNzb2NpYXRlZCB3aXRoLCB3aGlsZSBzdGlsbCBiZWluZyByZWdpc3RlcmVkIGFjcm9zc1xuICogbXVsdGlwbGUgaW5zdGFuY2VzIG9mIE9BdXRoIHByb3ZpZGVycy5cbiAqXG4gKiBAbWV0aG9kIHJlZ2lzdGVyXG4gKiBAcGFyYW0ge1tjb25zdHJ1Y3Rvcl19IGhhbmRsZXJzXG4gKiBAcHJpdmF0ZVxuICovXG5PQXV0aC5yZWdpc3RlciA9IGZ1bmN0aW9uIChoYW5kbGVycykge1xuICB2YXIgaSxcbiAgICAgIGJvdW5kSGFuZGxlcnMgPSBbXTtcbiAgaWYgKCFoYW5kbGVycyB8fCAhaGFuZGxlcnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIE9BdXRoLnJlc2V0KCk7XG4gIH1cblxuICBmb3IgKGkgPSAwOyBpIDwgaGFuZGxlcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBib3VuZEhhbmRsZXJzLnB1c2gobmV3IGhhbmRsZXJzW2ldKCkpO1xuICB9XG4gIGV4cG9ydHMucHJvdmlkZXIgPSBPQXV0aC5iaW5kKHRoaXMsIGJvdW5kSGFuZGxlcnMpO1xufTtcblxuLyoqXG4gKiBSZXNldCB0aGUgb0F1dGggcHJvdmlkZXIgcmVnaXN0cmF0aW9ucy5cbiAqIEBtZXRob2QgcmVzZXRcbiAqIEBwcml2YXRlXG4gKi9cbk9BdXRoLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICBleHBvcnRzLnByb3ZpZGVyID0gT0F1dGguYmluZCh0aGlzLCBbXSk7XG59O1xuXG4vKipcbiAqIEluZGljYXRlIHRoZSBpbnRlbnRpb24gdG8gaW5pdGlhdGUgYW4gb0F1dGggZmxvdywgYWxsb3dpbmcgYW4gYXBwcm9wcmlhdGVcbiAqIG9BdXRoIHByb3ZpZGVyIHRvIGJlZ2luIG1vbml0b3JpbmcgZm9yIHJlZGlyZWN0aW9uLlxuICpcbiAqIEBtZXRob2QgaW5pdGlhdGVPQXV0aFxuICogQHBhcmFtIHtzdHJpbmdbXX0gcmVkaXJlY3RVUklzIC0gb0F1dGggcmVkaXJlY3Rpb24gVVJJcyByZWdpc3RlcmVkIHdpdGggdGhlXG4gKiAgICAgcHJvdmlkZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb250aW51YXRpb24gLSBGdW5jdGlvbiB0byBjYWxsIHdoZW4gY29tcGxldGVcbiAqICAgIEV4cGVjdGVkIHRvIHNlZSBhIHZhbHVlIG9mIHNjaGVtYToge3tyZWRpcmVjdDpTdHJpbmcsIHN0YXRlOlN0cmluZ319XG4gKiAgICB3aGVyZSAncmVkaXJlY3QnIGlzIHRoZSBjaG9zZW4gcmVkaXJlY3QgVVJJXG4gKiAgICBhbmQgJ3N0YXRlJyBpcyB0aGUgc3RhdGUgdG8gcGFzcyB0byB0aGUgVVJJIG9uIGNvbXBsZXRpb24gb2Ygb0F1dGhcbiAqL1xuT0F1dGgucHJvdG90eXBlLmluaXRpYXRlT0F1dGggPSBmdW5jdGlvbiAocmVkaXJlY3RVUklzLCBjb250aW51YXRpb24pIHtcbiAgdmFyIHByb21pc2UsIGksIHN1Y2Nlc3NDYWxsYmFjaztcbiAgc3VjY2Vzc0NhbGxiYWNrID0gZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgdGhpcy5vbmdvaW5nW3Jlc3VsdC5zdGF0ZV0gPSB0aGlzLmhhbmRsZXJzW2ldO1xuICAgIGNvbnRpbnVhdGlvbihyZXN1bHQpO1xuICB9LmJpbmQodGhpcyk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHRoaXMuaGFuZGxlcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodGhpcy5oYW5kbGVyc1tpXS5pbml0aWF0ZU9BdXRoKHJlZGlyZWN0VVJJcywgc3VjY2Vzc0NhbGxiYWNrKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICAvL0lmIGhlcmUsIHdlIGhhdmUgbm8gY29tcGF0aWJsZSBwcm92aWRlcnNcbiAgY29udGludWF0aW9uKG51bGwsIHtcbiAgICAnZXJyY29kZSc6ICdVTktOT1dOJyxcbiAgICAnbWVzc2FnZSc6ICdObyByZXF1ZXN0ZWQgcmVkaXJlY3RzIGNhbiBiZSBoYW5kbGVkLidcbiAgfSk7XG4gIHJldHVybjtcbn07XG5cbi8qKlxuICogb0F1dGggY2xpZW50LXNpZGUgZmxvdyAtIGxhdW5jaCB0aGUgcHJvdmlkZWQgVVJMXG4gKiBUaGlzIG11c3QgYmUgY2FsbGVkIGFmdGVyIGluaXRpYXRlT0F1dGggd2l0aCB0aGUgcmV0dXJuZWQgc3RhdGUgb2JqZWN0XG4gKlxuICogQG1ldGhvZCBsYXVuY2hBdXRoRmxvd1xuICogQHBhcmFtIHtTdHJpbmd9IGF1dGhVcmwgLSBUaGUgVVJMIHRoYXQgaW5pdGlhdGVzIHRoZSBhdXRoIGZsb3cuXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBzdHJpbmc+fSBzdGF0ZU9iaiAtIFRoZSByZXR1cm4gdmFsdWUgZnJvbSBpbml0aWF0ZU9BdXRoXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb250aW51YXRpb24gLSBGdW5jdGlvbiB0byBjYWxsIHdoZW4gY29tcGxldGVcbiAqICAgIEV4cGVjdGVkIHRvIHNlZSBhIFN0cmluZyB2YWx1ZSB0aGF0IGlzIHRoZSByZXNwb25zZSBVcmwgY29udGFpbmluZyB0aGUgYWNjZXNzIHRva2VuXG4gKi9cbk9BdXRoLnByb3RvdHlwZS5sYXVuY2hBdXRoRmxvdyA9IGZ1bmN0aW9uKGF1dGhVcmwsIHN0YXRlT2JqLCBjb250aW51YXRpb24pIHtcbiAgaWYgKCF0aGlzLm9uZ29pbmcuaGFzT3duUHJvcGVydHkoc3RhdGVPYmouc3RhdGUpKSB7XG4gICAgY29udGludWF0aW9uKHVuZGVmaW5lZCwge1xuICAgICAgJ2VycmNvZGUnOiAnVU5LTk9XTicsXG4gICAgICAnbWVzc2FnZSc6ICdZb3UgbXVzdCBiZWdpbiB0aGUgb0F1dGggZmxvdyB3aXRoIGluaXRpYXRlT0F1dGggZmlyc3QnXG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5vbmdvaW5nW3N0YXRlT2JqLnN0YXRlXS5sYXVuY2hBdXRoRmxvdyhhdXRoVXJsLCBzdGF0ZU9iaiwgY29udGludWF0aW9uKTtcbiAgZGVsZXRlIHRoaXMub25nb2luZ1tzdGF0ZU9iai5zdGF0ZV07XG59O1xuXG5leHBvcnRzLnJlZ2lzdGVyID0gT0F1dGgucmVnaXN0ZXI7XG5leHBvcnRzLnJlc2V0ID0gT0F1dGgucmVzZXQ7XG5leHBvcnRzLnByb3ZpZGVyID0gT0F1dGguYmluZCh0aGlzLCBbXSk7XG5leHBvcnRzLm5hbWUgPSAnY29yZS5vYXV0aCc7XG4iLCIvKmdsb2JhbHMgY29uc29sZSwgUlRDUGVlckNvbm5lY3Rpb24sIHdlYmtpdFJUQ1BlZXJDb25uZWN0aW9uICovXG4vKmdsb2JhbHMgbW96UlRDUGVlckNvbm5lY3Rpb24sIFJUQ1Nlc3Npb25EZXNjcmlwdGlvbiwgUlRDSWNlQ2FuZGlkYXRlICovXG4vKmdsb2JhbHMgbW96UlRDU2Vzc2lvbkRlc2NyaXB0aW9uLCBtb3pSVENJY2VDYW5kaWRhdGUgKi9cbi8qZ2xvYmFscyBBcnJheUJ1ZmZlciwgQmxvYiAqL1xuLypqc2xpbnQgaW5kZW50OjIsc2xvcHB5OnRydWUsbm9kZTp0cnVlICovXG4vKipcbiAqIERhdGFQZWVyIC0gYSBjbGFzcyB0aGF0IHdyYXBzIHBlZXIgY29ubmVjdGlvbnMgYW5kIGRhdGEgY2hhbm5lbHMuXG4gKi9cbi8vIFRPRE86IGNoZWNrIHRoYXQgSGFuZGxpbmcgb2YgcHJhbnN3ZXIgaXMgdHJlYXRlZCBhcHByb3ByaWF0ZWx5LlxudmFyIFNpbXBsZURhdGFQZWVyU3RhdGUgPSB7XG4gIERJU0NPTk5FQ1RFRDogJ0RJU0NPTk5FQ1RFRCcsXG4gIENPTk5FQ1RJTkc6ICdDT05ORUNUSU5HJyxcbiAgQ09OTkVDVEVEOiAnQ09OTkVDVEVEJ1xufTtcblxuZnVuY3Rpb24gU2ltcGxlRGF0YVBlZXIocGVlck5hbWUsIHN0dW5TZXJ2ZXJzLCBkYXRhQ2hhbm5lbENhbGxiYWNrcywgbW9ja3MpIHtcbiAgdmFyIGNvbnN0cmFpbnRzLFxuICAgIGNvbmZpZyxcbiAgICBpO1xuICB0aGlzLnBlZXJOYW1lID0gcGVlck5hbWU7XG4gIHRoaXMuY2hhbm5lbHMgPSB7fTtcbiAgdGhpcy5kYXRhQ2hhbm5lbENhbGxiYWNrcyA9IGRhdGFDaGFubmVsQ2FsbGJhY2tzO1xuICB0aGlzLm9uQ29ubmVjdGVkUXVldWUgPSBbXTtcblxuICBpZiAodHlwZW9mIG1vY2tzLlJUQ1BlZXJDb25uZWN0aW9uICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdGhpcy5SVENQZWVyQ29ubmVjdGlvbiA9IG1vY2tzLlJUQ1BlZXJDb25uZWN0aW9uO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB3ZWJraXRSVENQZWVyQ29ubmVjdGlvbiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHRoaXMuUlRDUGVlckNvbm5lY3Rpb24gPSB3ZWJraXRSVENQZWVyQ29ubmVjdGlvbjtcbiAgfSBlbHNlIGlmICh0eXBlb2YgbW96UlRDUGVlckNvbm5lY3Rpb24gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB0aGlzLlJUQ1BlZXJDb25uZWN0aW9uID0gbW96UlRDUGVlckNvbm5lY3Rpb247XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBlbnZpcm9ubWVudCBkb2VzIG5vdCBhcHBlYXIgdG8gc3VwcG9ydCBSVENQZWVyQ29ubmVjdGlvblwiKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgbW9ja3MuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdGhpcy5SVENTZXNzaW9uRGVzY3JpcHRpb24gPSBtb2Nrcy5SVENTZXNzaW9uRGVzY3JpcHRpb247XG4gIH0gZWxzZSBpZiAodHlwZW9mIFJUQ1Nlc3Npb25EZXNjcmlwdGlvbiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHRoaXMuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uID0gUlRDU2Vzc2lvbkRlc2NyaXB0aW9uO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBtb3pSVENTZXNzaW9uRGVzY3JpcHRpb24gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB0aGlzLlJUQ1Nlc3Npb25EZXNjcmlwdGlvbiA9IG1velJUQ1Nlc3Npb25EZXNjcmlwdGlvbjtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIGVudmlyb25tZW50IGRvZXMgbm90IGFwcGVhciB0byBzdXBwb3J0IFJUQ1Nlc3Npb25EZXNjcmlwdGlvblwiKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgbW9ja3MuUlRDSWNlQ2FuZGlkYXRlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdGhpcy5SVENJY2VDYW5kaWRhdGUgPSBtb2Nrcy5SVENJY2VDYW5kaWRhdGU7XG4gIH0gZWxzZSBpZiAodHlwZW9mIFJUQ0ljZUNhbmRpZGF0ZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHRoaXMuUlRDSWNlQ2FuZGlkYXRlID0gUlRDSWNlQ2FuZGlkYXRlO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBtb3pSVENJY2VDYW5kaWRhdGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB0aGlzLlJUQ0ljZUNhbmRpZGF0ZSA9IG1velJUQ0ljZUNhbmRpZGF0ZTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIGVudmlyb25tZW50IGRvZXMgbm90IGFwcGVhciB0byBzdXBwb3J0IFJUQ0ljZUNhbmRpZGF0ZVwiKTtcbiAgfVxuXG5cbiAgY29uc3RyYWludHMgPSB7XG4gICAgb3B0aW9uYWw6IFt7RHRsc1NydHBLZXlBZ3JlZW1lbnQ6IHRydWV9XVxuICB9O1xuICAvLyBBIHdheSB0byBzcGVhayB0byB0aGUgcGVlciB0byBzZW5kIFNEUCBoZWFkZXJzIGV0Yy5cbiAgdGhpcy5zZW5kU2lnbmFsTWVzc2FnZSA9IG51bGw7XG5cbiAgdGhpcy5wYyA9IG51bGw7ICAvLyBUaGUgcGVlciBjb25uZWN0aW9uLlxuICAvLyBHZXQgVFVSTiBzZXJ2ZXJzIGZvciB0aGUgcGVlciBjb25uZWN0aW9uLlxuICBjb25maWcgPSB7aWNlU2VydmVyczogW119O1xuICBmb3IgKGkgPSAwOyBpIDwgc3R1blNlcnZlcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25maWcuaWNlU2VydmVycy5wdXNoKHtcbiAgICAgICd1cmwnIDogc3R1blNlcnZlcnNbaV1cbiAgICB9KTtcbiAgfVxuICB0aGlzLnBjID0gbmV3IHRoaXMuUlRDUGVlckNvbm5lY3Rpb24oY29uZmlnLCBjb25zdHJhaW50cyk7XG4gIC8vIEFkZCBiYXNpYyBldmVudCBoYW5kbGVycy5cbiAgdGhpcy5wYy5hZGRFdmVudExpc3RlbmVyKFwiaWNlY2FuZGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkljZUNhbGxiYWNrLmJpbmQodGhpcykpO1xuICB0aGlzLnBjLmFkZEV2ZW50TGlzdGVuZXIoXCJuZWdvdGlhdGlvbm5lZWRlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25OZWdvdGlhdGlvbk5lZWRlZC5iaW5kKHRoaXMpKTtcbiAgdGhpcy5wYy5hZGRFdmVudExpc3RlbmVyKFwiZGF0YWNoYW5uZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRGF0YUNoYW5uZWwuYmluZCh0aGlzKSk7XG4gIHRoaXMucGMuYWRkRXZlbnRMaXN0ZW5lcihcInNpZ25hbGluZ3N0YXRlY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUT0RPOiBjb21lIHVwIHdpdGggYSBiZXR0ZXIgd2F5IHRvIGRldGVjdCBjb25uZWN0aW9uLiAgV2Ugc3RhcnQgb3V0XG4gICAgLy8gYXMgXCJzdGFibGVcIiBldmVuIGJlZm9yZSB3ZSBhcmUgY29ubmVjdGVkLlxuICAgIC8vIFRPRE86IHRoaXMgaXMgbm90IGZpcmVkIGZvciBjb25uZWN0aW9ucyBjbG9zZWQgYnkgdGhlIG90aGVyIHNpZGUuXG4gICAgLy8gVGhpcyB3aWxsIGJlIGZpeGVkIGluIG0zNywgYXQgdGhhdCBwb2ludCB3ZSBzaG91bGQgZGlzcGF0Y2ggYW4gb25DbG9zZVxuICAgIC8vIGV2ZW50IGhlcmUgZm9yIGZyZWVkb20udHJhbnNwb3J0IHRvIHBpY2sgdXAuXG4gICAgaWYgKHRoaXMucGMuc2lnbmFsaW5nU3RhdGUgPT09IFwic3RhYmxlXCIpIHtcbiAgICAgIHRoaXMucGNTdGF0ZSA9IFNpbXBsZURhdGFQZWVyU3RhdGUuQ09OTkVDVEVEO1xuICAgICAgdGhpcy5vbkNvbm5lY3RlZFF1ZXVlLm1hcChmdW5jdGlvbiAoY2FsbGJhY2spIHsgY2FsbGJhY2soKTsgfSk7XG4gICAgfVxuICB9LmJpbmQodGhpcykpO1xuICAvLyBUaGlzIHN0YXRlIHZhcmlhYmxlIGlzIHVzZWQgdG8gZmFrZSBvZmZlci9hbnN3ZXIgd2hlbiB0aGV5IGFyZSB3cm9uZ2x5XG4gIC8vIHJlcXVlc3RlZCBhbmQgd2UgcmVhbGx5IGp1c3QgbmVlZCB0byByZXVzZSB3aGF0IHdlIGFscmVhZHkgaGF2ZS5cbiAgdGhpcy5wY1N0YXRlID0gU2ltcGxlRGF0YVBlZXJTdGF0ZS5ESVNDT05ORUNURUQ7XG5cbiAgLy8gTm90ZTogdG8gYWN0dWFsbHkgZG8gc29tZXRoaW5nIHdpdGggZGF0YSBjaGFubmVscyBvcGVuZWQgYnkgYSBwZWVyLCB3ZVxuICAvLyBuZWVkIHNvbWVvbmUgdG8gbWFuYWdlIFwiZGF0YWNoYW5uZWxcIiBldmVudC5cbn1cblxuU2ltcGxlRGF0YVBlZXIucHJvdG90eXBlLmNyZWF0ZU9mZmVyID0gZnVuY3Rpb24gKGNvbnN0YWludHMsIGNvbnRpbnVhdGlvbikge1xuICB0aGlzLnBjLmNyZWF0ZU9mZmVyKGNvbnRpbnVhdGlvbiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ2NvcmUucGVlcmNvbm5lY3Rpb24gY3JlYXRlT2ZmZXIgZmFpbGVkLicpO1xuICB9LCBjb25zdGFpbnRzKTtcbn07XG5cblNpbXBsZURhdGFQZWVyLnByb3RvdHlwZS5ydW5XaGVuQ29ubmVjdGVkID0gZnVuY3Rpb24gKGZ1bmMpIHtcbiAgaWYgKHRoaXMucGNTdGF0ZSA9PT0gU2ltcGxlRGF0YVBlZXJTdGF0ZS5DT05ORUNURUQpIHtcbiAgICBmdW5jKCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5vbkNvbm5lY3RlZFF1ZXVlLnB1c2goZnVuYyk7XG4gIH1cbn07XG5cblNpbXBsZURhdGFQZWVyLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKGNoYW5uZWxJZCwgbWVzc2FnZSwgY29udGludWF0aW9uKSB7XG4gIHRoaXMuY2hhbm5lbHNbY2hhbm5lbElkXS5zZW5kKG1lc3NhZ2UpO1xuICBjb250aW51YXRpb24oKTtcbn07XG5cblNpbXBsZURhdGFQZWVyLnByb3RvdHlwZS5vcGVuRGF0YUNoYW5uZWwgPSBmdW5jdGlvbiAoY2hhbm5lbElkLCBjb250aW51YXRpb24pIHtcbiAgdmFyIGRhdGFDaGFubmVsID0gdGhpcy5wYy5jcmVhdGVEYXRhQ2hhbm5lbChjaGFubmVsSWQsIHt9KTtcbiAgZGF0YUNoYW5uZWwub25vcGVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYWRkRGF0YUNoYW5uZWwoY2hhbm5lbElkLCBkYXRhQ2hhbm5lbCk7XG4gICAgY29udGludWF0aW9uKCk7XG4gIH0uYmluZCh0aGlzKTtcbiAgZGF0YUNoYW5uZWwub25lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAvL0AocnlzY2hlbmcpIHRvZG8gLSByZXBsYWNlIHdpdGggZXJyb3JzIHRoYXQgd29yayBhY3Jvc3MgdGhlIGludGVyZmFjZVxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICBjb250aW51YXRpb24odW5kZWZpbmVkLCBlcnIpO1xuICB9O1xuICAvLyBGaXJlZm94IGRvZXMgbm90IGZpcmUgXCJuZWdvdGlhdGlvbm5lZWRlZFwiLCBzbyB3ZSBuZWVkIHRvXG4gIC8vIG5lZ290YXRlIGhlcmUgaWYgd2UgYXJlIG5vdCBjb25uZWN0ZWQuXG4gIC8vIFNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD04NDA3MjhcbiAgaWYgKHR5cGVvZiBtb3pSVENQZWVyQ29ubmVjdGlvbiAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgdGhpcy5wY1N0YXRlID09PSBTaW1wbGVEYXRhUGVlclN0YXRlLkRJU0NPTk5FQ1RFRCkge1xuICAgIHRoaXMubmVnb3RpYXRlQ29ubmVjdGlvbigpO1xuICB9XG59O1xuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUuY2xvc2VDaGFubmVsID0gZnVuY3Rpb24gKGNoYW5uZWxJZCkge1xuICBpZiAodGhpcy5jaGFubmVsc1tjaGFubmVsSWRdICE9PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLmNoYW5uZWxzW2NoYW5uZWxJZF0uY2xvc2UoKTtcbiAgICBkZWxldGUgdGhpcy5jaGFubmVsc1tjaGFubmVsSWRdO1xuICB9XG59O1xuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUuZ2V0QnVmZmVyZWRBbW91bnQgPSBmdW5jdGlvbiAoY2hhbm5lbElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVhdGlvbikge1xuICBpZiAodGhpcy5jaGFubmVsc1tjaGFubmVsSWRdICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZGF0YUNoYW5uZWwgPSB0aGlzLmNoYW5uZWxzW2NoYW5uZWxJZF07XG4gICAgcmV0dXJuIGRhdGFDaGFubmVsLmJ1ZmZlcmVkQW1vdW50O1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcIk5vIGNoYW5uZWwgd2l0aCBpZDogXCIgKyBjaGFubmVsSWQpO1xufTtcblxuU2ltcGxlRGF0YVBlZXIucHJvdG90eXBlLnNldFNlbmRTaWduYWxNZXNzYWdlID0gZnVuY3Rpb24gKHNlbmRTaWduYWxNZXNzYWdlRm4pIHtcbiAgdGhpcy5zZW5kU2lnbmFsTWVzc2FnZSA9IHNlbmRTaWduYWxNZXNzYWdlRm47XG59O1xuXG4vLyBIYW5kbGUgYSBtZXNzYWdlIHNlbmQgb24gdGhlIHNpZ25hbGxpbmcgY2hhbm5lbCB0byB0aGlzIHBlZXIuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUuaGFuZGxlU2lnbmFsTWVzc2FnZSA9IGZ1bmN0aW9uIChtZXNzYWdlVGV4dCkge1xuICAvL2NvbnNvbGUubG9nKHRoaXMucGVlck5hbWUgKyBcIjogXCIgKyBcImhhbmRsZVNpZ25hbE1lc3NhZ2U6IFxcblwiICsgbWVzc2FnZVRleHQpO1xuICB2YXIganNvbiA9IEpTT04ucGFyc2UobWVzc2FnZVRleHQpLFxuICAgIGljZV9jYW5kaWRhdGU7XG5cbiAgLy8gVE9ETzogSWYgd2UgYXJlIG9mZmVyaW5nIGFuZCB0aGV5IGFyZSBhbHNvIG9mZmVycmluZyBhdCB0aGUgc2FtZSB0aW1lLFxuICAvLyBwaWNrIHRoZSBvbmUgd2hvIGhhcyB0aGUgbG93ZXIgcmFuZG9tSWQ/XG4gIC8vICh0aGlzLnBjLnNpZ25hbGluZ1N0YXRlID09IFwiaGF2ZS1sb2NhbC1vZmZlclwiICYmIGpzb24uc2RwICYmXG4gIC8vICAgIGpzb24uc2RwLnR5cGUgPT0gXCJvZmZlclwiICYmIGpzb24uc2RwLnJhbmRvbUlkIDwgdGhpcy5sb2NhbFJhbmRvbUlkKVxuICBpZiAoanNvbi5zZHApIHtcbiAgICAvLyBTZXQgdGhlIHJlbW90ZSBkZXNjcmlwdGlvbi5cbiAgICB0aGlzLnBjLnNldFJlbW90ZURlc2NyaXB0aW9uKFxuICAgICAgbmV3IHRoaXMuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKGpzb24uc2RwKSxcbiAgICAgIC8vIFN1Y2Nlc3NcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnBlZXJOYW1lICsgXCI6IHNldFJlbW90ZURlc2NyaXB0aW9uIHN1Y2NlZWRlZFwiKTtcbiAgICAgICAgaWYgKHRoaXMucGMucmVtb3RlRGVzY3JpcHRpb24udHlwZSA9PT0gXCJvZmZlclwiKSB7XG4gICAgICAgICAgdGhpcy5wYy5jcmVhdGVBbnN3ZXIodGhpcy5vbkRlc2NyaXB0aW9uLmJpbmQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgIC8vIEZhaWx1cmVcbiAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IodGhpcy5wZWVyTmFtZSArIFwiOiBcIiArXG4gICAgICAgICAgICBcInNldFJlbW90ZURlc2NyaXB0aW9uIGZhaWxlZDpcIiwgZSk7XG4gICAgICB9LmJpbmQodGhpcylcbiAgICApO1xuICB9IGVsc2UgaWYgKGpzb24uY2FuZGlkYXRlKSB7XG4gICAgLy8gQWRkIHJlbW90ZSBpY2UgY2FuZGlkYXRlLlxuICAgIC8vY29uc29sZS5sb2codGhpcy5wZWVyTmFtZSArIFwiOiBBZGRpbmcgaWNlIGNhbmRpZGF0ZTogXCIgKyBKU09OLnN0cmluZ2lmeShqc29uLmNhbmRpZGF0ZSkpO1xuICAgIGljZV9jYW5kaWRhdGUgPSBuZXcgdGhpcy5SVENJY2VDYW5kaWRhdGUoanNvbi5jYW5kaWRhdGUpO1xuICAgIHRoaXMucGMuYWRkSWNlQ2FuZGlkYXRlKGljZV9jYW5kaWRhdGUpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUud2Fybih0aGlzLnBlZXJOYW1lICsgXCI6IFwiICtcbiAgICAgICAgXCJoYW5kbGVTaWduYWxNZXNzYWdlIGdvdCB1bmV4cGVjdGVkIG1lc3NhZ2U6IFwiLCBtZXNzYWdlVGV4dCk7XG4gIH1cbn07XG5cbi8vIENvbm5lY3QgdG8gdGhlIHBlZXIgYnkgdGhlIHNpZ25hbGxpbmcgY2hhbm5lbC5cblNpbXBsZURhdGFQZWVyLnByb3RvdHlwZS5uZWdvdGlhdGVDb25uZWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnBjU3RhdGUgPSBTaW1wbGVEYXRhUGVlclN0YXRlLkNPTk5FQ1RJTkc7XG4gIHRoaXMucGMuY3JlYXRlT2ZmZXIoXG4gICAgdGhpcy5vbkRlc2NyaXB0aW9uLmJpbmQodGhpcyksXG4gICAgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IodGhpcy5wZWVyTmFtZSArIFwiOiBcIiArXG4gICAgICAgICAgXCJjcmVhdGVPZmZlciBmYWlsZWQ6IFwiLCBlLnRvU3RyaW5nKCkpO1xuICAgICAgdGhpcy5wY1N0YXRlID0gU2ltcGxlRGF0YVBlZXJTdGF0ZS5ESVNDT05ORUNURUQ7XG4gICAgfS5iaW5kKHRoaXMpXG4gICk7XG59O1xuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUuaXNDbG9zZWQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAhdGhpcy5wYyB8fCB0aGlzLnBjLnNpZ25hbGluZ1N0YXRlID09PSBcImNsb3NlZFwiO1xufTtcblxuU2ltcGxlRGF0YVBlZXIucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMuaXNDbG9zZWQoKSkge1xuICAgIHRoaXMucGMuY2xvc2UoKTtcbiAgfVxuICAvL2NvbnNvbGUubG9nKHRoaXMucGVlck5hbWUgKyBcIjogXCIgKyBcIkNsb3NlZCBwZWVyIGNvbm5lY3Rpb24uXCIpO1xufTtcblxuU2ltcGxlRGF0YVBlZXIucHJvdG90eXBlLmFkZERhdGFDaGFubmVsID0gZnVuY3Rpb24gKGNoYW5uZWxJZCwgY2hhbm5lbCkge1xuICB2YXIgY2FsbGJhY2tzID0gdGhpcy5kYXRhQ2hhbm5lbENhbGxiYWNrcztcbiAgdGhpcy5jaGFubmVsc1tjaGFubmVsSWRdID0gY2hhbm5lbDtcblxuICBpZiAoY2hhbm5lbC5yZWFkeVN0YXRlID09PSBcImNvbm5lY3RpbmdcIikge1xuICAgIGNoYW5uZWwub25vcGVuID0gY2FsbGJhY2tzLm9uT3BlbkZuLmJpbmQodGhpcywgY2hhbm5lbCwge2xhYmVsOiBjaGFubmVsSWR9KTtcbiAgfVxuXG4gIGNoYW5uZWwub25jbG9zZSA9IGNhbGxiYWNrcy5vbkNsb3NlRm4uYmluZCh0aGlzLCBjaGFubmVsLCB7bGFiZWw6IGNoYW5uZWxJZH0pO1xuXG4gIGNoYW5uZWwub25tZXNzYWdlID0gY2FsbGJhY2tzLm9uTWVzc2FnZUZuLmJpbmQodGhpcywgY2hhbm5lbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6IGNoYW5uZWxJZH0pO1xuXG4gIGNoYW5uZWwub25lcnJvciA9IGNhbGxiYWNrcy5vbkVycm9yRm4uYmluZCh0aGlzLCBjaGFubmVsLCB7bGFiZWw6IGNoYW5uZWx9KTtcbn07XG5cbi8vIFdoZW4gd2UgZ2V0IG91ciBkZXNjcmlwdGlvbiwgd2Ugc2V0IGl0IHRvIGJlIG91ciBsb2NhbCBkZXNjcmlwdGlvbiBhbmRcbi8vIHNlbmQgaXQgdG8gdGhlIHBlZXIuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUub25EZXNjcmlwdGlvbiA9IGZ1bmN0aW9uIChkZXNjcmlwdGlvbikge1xuICBpZiAodGhpcy5zZW5kU2lnbmFsTWVzc2FnZSkge1xuICAgIHRoaXMucGMuc2V0TG9jYWxEZXNjcmlwdGlvbihcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMucGVlck5hbWUgKyBcIjogc2V0TG9jYWxEZXNjcmlwdGlvbiBzdWNjZWVkZWRcIik7XG4gICAgICAgIHRoaXMuc2VuZFNpZ25hbE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkoeydzZHAnOiBkZXNjcmlwdGlvbn0pKTtcbiAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IodGhpcy5wZWVyTmFtZSArIFwiOiBcIiArXG4gICAgICAgICAgICBcInNldExvY2FsRGVzY3JpcHRpb24gZmFpbGVkOlwiLCBlKTtcbiAgICAgIH0uYmluZCh0aGlzKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcih0aGlzLnBlZXJOYW1lICsgXCI6IFwiICtcbiAgICAgICAgXCJfb25EZXNjcmlwdGlvbjogX3NlbmRTaWduYWxNZXNzYWdlIGlzIG5vdCBzZXQsIHNvIHdlIGRpZCBub3QgXCIgK1xuICAgICAgICAgICAgXCJzZXQgdGhlIGxvY2FsIGRlc2NyaXB0aW9uLiBcIik7XG4gIH1cbn07XG5cblNpbXBsZURhdGFQZWVyLnByb3RvdHlwZS5vbk5lZ290aWF0aW9uTmVlZGVkID0gZnVuY3Rpb24gKGUpIHtcbiAgLy9jb25zb2xlLmxvZyh0aGlzLnBlZXJOYW1lICsgXCI6IFwiICsgXCJvbk5lZ290aWF0aW9uTmVlZGVkXCIsXG4gIC8vICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkodGhpcy5fcGMpLCBlKTtcbiAgaWYgKHRoaXMucGNTdGF0ZSAhPT0gU2ltcGxlRGF0YVBlZXJTdGF0ZS5ESVNDT05ORUNURUQpIHtcbiAgICAvLyBOZWdvdGlhdGlvbiBtZXNzYWdlcyBhcmUgZmFsc2VseSByZXF1ZXN0ZWQgZm9yIG5ldyBkYXRhIGNoYW5uZWxzLlxuICAgIC8vICAgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC93ZWJydGMvaXNzdWVzL2RldGFpbD9pZD0yNDMxXG4gICAgLy8gVGhpcyBjb2RlIGlzIGEgaGFjayB0byBzaW1wbHkgcmVzZXQgdGhlIHNhbWUgbG9jYWwgYW5kIHJlbW90ZVxuICAgIC8vIGRlc2NyaXB0aW9uIHdoaWNoIHdpbGwgdHJpZ2dlciB0aGUgYXBwcm9wcmlhdGUgZGF0YSBjaGFubmVsIG9wZW4gZXZlbnQuXG4gICAgLy8gVE9ETzogZml4L3JlbW92ZSB0aGlzIHdoZW4gQ2hyb21lIGlzc3VlIGlzIGZpeGVkLlxuICAgIHZhciBsb2dTdWNjZXNzID0gZnVuY3Rpb24gKG9wKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMucGVlck5hbWUgKyBcIjogXCIgKyBvcCArIFwiIHN1Y2NlZWRlZCBcIik7XG4gICAgICB9LmJpbmQodGhpcyk7XG4gICAgfS5iaW5kKHRoaXMpLFxuICAgICAgbG9nRmFpbCA9IGZ1bmN0aW9uIChvcCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMucGVlck5hbWUgKyBcIjogXCIgKyBvcCArIFwiIGZhaWxlZDogXCIgKyBlKTtcbiAgICAgICAgfS5iaW5kKHRoaXMpO1xuICAgICAgfS5iaW5kKHRoaXMpO1xuICAgIGlmICh0aGlzLnBjLmxvY2FsRGVzY3JpcHRpb24gJiYgdGhpcy5wYy5yZW1vdGVEZXNjcmlwdGlvbiAmJlxuICAgICAgICB0aGlzLnBjLmxvY2FsRGVzY3JpcHRpb24udHlwZSA9PT0gXCJvZmZlclwiKSB7XG4gICAgICB0aGlzLnBjLnNldExvY2FsRGVzY3JpcHRpb24odGhpcy5wYy5sb2NhbERlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dTdWNjZXNzKFwic2V0TG9jYWxEZXNjcmlwdGlvblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nRmFpbChcInNldExvY2FsRGVzY3JpcHRpb25cIikpO1xuICAgICAgdGhpcy5wYy5zZXRSZW1vdGVEZXNjcmlwdGlvbih0aGlzLnBjLnJlbW90ZURlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nU3VjY2VzcyhcInNldFJlbW90ZURlc2NyaXB0aW9uXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nRmFpbChcInNldFJlbW90ZURlc2NyaXB0aW9uXCIpKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucGMubG9jYWxEZXNjcmlwdGlvbiAmJiB0aGlzLnBjLnJlbW90ZURlc2NyaXB0aW9uICYmXG4gICAgICAgIHRoaXMucGMubG9jYWxEZXNjcmlwdGlvbi50eXBlID09PSBcImFuc3dlclwiKSB7XG4gICAgICB0aGlzLnBjLnNldFJlbW90ZURlc2NyaXB0aW9uKHRoaXMucGMucmVtb3RlRGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dTdWNjZXNzKFwic2V0UmVtb3RlRGVzY3JpcHRpb25cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dGYWlsKFwic2V0UmVtb3RlRGVzY3JpcHRpb25cIikpO1xuICAgICAgdGhpcy5wYy5zZXRMb2NhbERlc2NyaXB0aW9uKHRoaXMucGMubG9jYWxEZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nU3VjY2VzcyhcInNldExvY2FsRGVzY3JpcHRpb25cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ0ZhaWwoXCJzZXRMb2NhbERlc2NyaXB0aW9uXCIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcih0aGlzLnBlZXJOYW1lICsgJywgb25OZWdvdGlhdGlvbk5lZWRlZCBmYWlsZWQnKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMubmVnb3RpYXRlQ29ubmVjdGlvbigpO1xufTtcblxuU2ltcGxlRGF0YVBlZXIucHJvdG90eXBlLm9uSWNlQ2FsbGJhY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgaWYgKGV2ZW50LmNhbmRpZGF0ZSkge1xuICAgIC8vIFNlbmQgSWNlQ2FuZGlkYXRlIHRvIHBlZXIuXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLnBlZXJOYW1lICsgXCI6IFwiICsgXCJpY2UgY2FsbGJhY2sgd2l0aCBjYW5kaWRhdGVcIiwgZXZlbnQpO1xuICAgIGlmICh0aGlzLnNlbmRTaWduYWxNZXNzYWdlKSB7XG4gICAgICB0aGlzLnNlbmRTaWduYWxNZXNzYWdlKEpTT04uc3RyaW5naWZ5KHsnY2FuZGlkYXRlJzogZXZlbnQuY2FuZGlkYXRlfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4odGhpcy5wZWVyTmFtZSArIFwiOiBcIiArIFwiX29uRGVzY3JpcHRpb246IF9zZW5kU2lnbmFsTWVzc2FnZSBpcyBub3Qgc2V0LlwiKTtcbiAgICB9XG4gIH1cbn07XG5cblNpbXBsZURhdGFQZWVyLnByb3RvdHlwZS5vblNpZ25hbGluZ1N0YXRlQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAvL2NvbnNvbGUubG9nKHRoaXMucGVlck5hbWUgKyBcIjogXCIgKyBcIm9uU2lnbmFsaW5nU3RhdGVDaGFuZ2U6IFwiLCB0aGlzLl9wYy5zaWduYWxpbmdTdGF0ZSk7XG4gIGlmICh0aGlzLnBjLnNpZ25hbGluZ1N0YXRlID09PSBcInN0YWJsZVwiKSB7XG4gICAgdGhpcy5wY1N0YXRlID0gU2ltcGxlRGF0YVBlZXJTdGF0ZS5DT05ORUNURUQ7XG4gICAgdGhpcy5vbkNvbm5lY3RlZFF1ZXVlLm1hcChmdW5jdGlvbiAoY2FsbGJhY2spIHsgY2FsbGJhY2soKTsgfSk7XG4gIH1cbn07XG5cblNpbXBsZURhdGFQZWVyLnByb3RvdHlwZS5vbkRhdGFDaGFubmVsID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHRoaXMuYWRkRGF0YUNoYW5uZWwoZXZlbnQuY2hhbm5lbC5sYWJlbCwgZXZlbnQuY2hhbm5lbCk7XG4gIC8vIFJUQ0RhdGFDaGFubmVscyBjcmVhdGVkIGJ5IGEgUlRDRGF0YUNoYW5uZWxFdmVudCBoYXZlIGFuIGluaXRpYWxcbiAgLy8gc3RhdGUgb2Ygb3Blbiwgc28gdGhlIG9ub3BlbiBldmVudCBmb3IgdGhlIGNoYW5uZWwgd2lsbCBub3RcbiAgLy8gZmlyZS4gV2UgbmVlZCB0byBmaXJlIHRoZSBvbk9wZW5EYXRhQ2hhbm5lbCBldmVudCBoZXJlXG4gIC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL3dlYnJ0Yy8jaWRsLWRlZi1SVENEYXRhQ2hhbm5lbFN0YXRlXG5cbiAgLy8gRmlyZWZveCBjaGFubmVscyBkbyBub3QgaGF2ZSBhbiBpbml0aWFsIHN0YXRlIG9mIFwib3BlblwiXG4gIC8vIFNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xMDAwNDc4XG4gIGlmIChldmVudC5jaGFubmVsLnJlYWR5U3RhdGUgPT09IFwib3BlblwiKSB7XG4gICAgdGhpcy5kYXRhQ2hhbm5lbENhbGxiYWNrcy5vbk9wZW5GbihldmVudC5jaGFubmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiBldmVudC5jaGFubmVsLmxhYmVsfSk7XG4gIH1cbn07XG5cbi8vIF9zaWduYWxsaW5nQ2hhbm5lbCBpcyBhIGNoYW5uZWwgZm9yIGVtaXR0aW5nIGV2ZW50cyBiYWNrIHRvIHRoZSBmcmVlZG9tIEh1Yi5cbmZ1bmN0aW9uIFBlZXJDb25uZWN0aW9uKHBvcnRNb2R1bGUsIGRpc3BhdGNoRXZlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBSVENQZWVyQ29ubmVjdGlvbiwgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgUlRDSWNlQ2FuZGlkYXRlKSB7XG4gIC8vIENoYW5uZWwgZm9yIGVtaXR0aW5nIGV2ZW50cyB0byBjb25zdW1lci5cbiAgdGhpcy5kaXNwYXRjaEV2ZW50ID0gZGlzcGF0Y2hFdmVudDtcblxuICAvLyBhIChob3BlZnVsbHkgdW5pcXVlKSBJRCBmb3IgZGVidWdnaW5nLlxuICB0aGlzLnBlZXJOYW1lID0gXCJwXCIgKyBNYXRoLnJhbmRvbSgpO1xuXG4gIC8vIFRoaXMgaXMgdGhlIHBvcnRBcHAgKGRlZmluZWQgaW4gZnJlZWRvbS9zcmMvcG9ydC1hcHAuanMpLiBBIHdheSB0byBzcGVha1xuICAvLyB0byBmcmVlZG9tLlxuICB0aGlzLmZyZWVkb21Nb2R1bGUgPSBwb3J0TW9kdWxlLm1vZHVsZTtcblxuICAvLyBGb3IgdGVzdHMgd2UgbWF5IG1vY2sgb3V0IHRoZSBQZWVyQ29ubmVjdGlvbiBhbmRcbiAgLy8gU2Vzc2lvbkRlc2NyaXB0aW9uIGltcGxlbWVudGF0aW9uc1xuICB0aGlzLlJUQ1BlZXJDb25uZWN0aW9uID0gUlRDUGVlckNvbm5lY3Rpb247XG4gIHRoaXMuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uID0gUlRDU2Vzc2lvbkRlc2NyaXB0aW9uO1xuICB0aGlzLlJUQ0ljZUNhbmRpZGF0ZSA9IFJUQ0ljZUNhbmRpZGF0ZTtcblxuICAvLyBUaGlzIGlzIHRoZSBhIGNoYW5uZWwgdG8gc2VuZCBzaWduYWxsaW5nIG1lc3NhZ2VzLlxuICB0aGlzLnNpZ25hbGxpbmdDaGFubmVsID0gbnVsbDtcblxuICAvLyBUaGUgRGF0YVBlZXIgb2JqZWN0IGZvciB0YWxraW5nIHRvIHRoZSBwZWVyLlxuICB0aGlzLnBlZXIgPSBudWxsO1xuXG4gIC8vIFRoZSBDb3JlIG9iamVjdCBmb3IgbWFuYWdpbmcgY2hhbm5lbHMuXG4gIHRoaXMuZnJlZWRvbU1vZHVsZS5vbmNlKCdjb3JlJywgZnVuY3Rpb24gKENvcmUpIHtcbiAgICB0aGlzLmNvcmUgPSBuZXcgQ29yZSgpO1xuICB9LmJpbmQodGhpcykpO1xuICB0aGlzLmZyZWVkb21Nb2R1bGUuZW1pdCh0aGlzLmZyZWVkb21Nb2R1bGUuY29udHJvbENoYW5uZWwsIHtcbiAgICB0eXBlOiAnY29yZSByZXF1ZXN0IGRlbGVnYXRlZCB0byBwZWVyY29ubmVjdGlvbicsXG4gICAgcmVxdWVzdDogJ2NvcmUnXG4gIH0pO1xufVxuXG4vLyBTdGFydCBhIHBlZXIgY29ubmVjdGlvbiB1c2luZyB0aGUgZ2l2ZW4gZnJlZWRvbUNoYW5uZWxJZCBhcyB0aGUgd2F5IHRvXG4vLyBjb21tdW5pY2F0ZSB3aXRoIHRoZSBwZWVyLiBUaGUgYXJndW1lbnQgfGZyZWVkb21DaGFubmVsSWR8IGlzIGEgd2F5IHRvIHNwZWFrXG4vLyB0byBhbiBpZGVudGl0eSBwcm92aWRlIHRvIHNlbmQgdGhlbSBTRFAgaGVhZGVycyBuZWdvdGlhdGUgdGhlIGFkZHJlc3MvcG9ydCB0b1xuLy8gc2V0dXAgdGhlIHBlZXIgdG8gcGVlckNvbm5lY3Rpb24uXG4vL1xuLy8gb3B0aW9uczoge1xuLy8gICBwZWVyTmFtZTogc3RyaW5nLCAgIC8vIEZvciBwcmV0dHkgcHJpbnRpbmcgbWVzc2FnZXMgYWJvdXQgdGhpcyBwZWVyLlxuLy8gICBkZWJ1ZzogYm9vbGVhbiAgICAgICAgICAgLy8gc2hvdWxkIHdlIGFkZCBleHRyYVxuLy8gfVxuUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLnNldHVwID0gZnVuY3Rpb24gKHNpZ25hbGxpbmdDaGFubmVsSWQsIHBlZXJOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0dW5TZXJ2ZXJzLCBpbml0aWF0ZUNvbm5lY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWF0aW9uKSB7XG4gIHRoaXMucGVlck5hbWUgPSBwZWVyTmFtZTtcbiAgdmFyIG1vY2tzID0ge1JUQ1BlZXJDb25uZWN0aW9uOiB0aGlzLlJUQ1BlZXJDb25uZWN0aW9uLFxuICAgICAgICAgICAgICAgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uOiB0aGlzLlJUQ1Nlc3Npb25EZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgIFJUQ0ljZUNhbmRpZGF0ZTogdGhpcy5SVENJY2VDYW5kaWRhdGV9LFxuICAgIHNlbGYgPSB0aGlzLFxuICAgIGRhdGFDaGFubmVsQ2FsbGJhY2tzID0ge1xuICAgICAgLy8gb25PcGVuRm4gaXMgY2FsbGVkIGF0IHRoZSBwb2ludCBtZXNzYWdlcyB3aWxsIGFjdHVhbGx5IGdldCB0aHJvdWdoLlxuICAgICAgb25PcGVuRm46IGZ1bmN0aW9uIChkYXRhQ2hhbm5lbCwgaW5mbykge1xuICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQoXCJvbk9wZW5EYXRhQ2hhbm5lbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2hhbm5lbElkOiBpbmZvLmxhYmVsfSk7XG4gICAgICB9LFxuICAgICAgb25DbG9zZUZuOiBmdW5jdGlvbiAoZGF0YUNoYW5uZWwsIGluZm8pIHtcbiAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KFwib25DbG9zZURhdGFDaGFubmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgeyBjaGFubmVsSWQ6IGluZm8ubGFiZWx9KTtcbiAgICAgIH0sXG4gICAgICAvLyBEZWZhdWx0IG9uIHJlYWwgbWVzc2FnZSBwcmludHMgaXQgdG8gY29uc29sZS5cbiAgICAgIG9uTWVzc2FnZUZuOiBmdW5jdGlvbiAoZGF0YUNoYW5uZWwsIGluZm8sIGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5kYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQoJ29uUmVjZWl2ZWQnLCB7XG4gICAgICAgICAgICAnY2hhbm5lbExhYmVsJzogaW5mby5sYWJlbCxcbiAgICAgICAgICAgICdidWZmZXInOiBldmVudC5kYXRhXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuZGF0YSBpbnN0YW5jZW9mIEJsb2IpIHtcbiAgICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQoJ29uUmVjZWl2ZWQnLCB7XG4gICAgICAgICAgICAnY2hhbm5lbExhYmVsJzogaW5mby5sYWJlbCxcbiAgICAgICAgICAgICdiaW5hcnknOiBldmVudC5kYXRhXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIChldmVudC5kYXRhKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQoJ29uUmVjZWl2ZWQnLCB7XG4gICAgICAgICAgICAnY2hhbm5lbExhYmVsJzogaW5mby5sYWJlbCxcbiAgICAgICAgICAgICd0ZXh0JzogZXZlbnQuZGF0YVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gRGVmYXVsdCBvbiBlcnJvciwgcHJpbnRzIGl0LlxuICAgICAgb25FcnJvckZuOiBmdW5jdGlvbiAoZGF0YUNoYW5uZWwsIGluZm8sIGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGRhdGFDaGFubmVsLnBlZXJOYW1lICsgXCI6IGRhdGFDaGFubmVsKFwiICtcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhQ2hhbm5lbC5kYXRhQ2hhbm5lbC5sYWJlbCArIFwiKTogZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgfVxuICAgIH0sXG4gICAgY2hhbm5lbElkLFxuICAgIG9wZW5EYXRhQ2hhbm5lbENvbnRpbnVhdGlvbjtcblxuICB0aGlzLnBlZXIgPSBuZXcgU2ltcGxlRGF0YVBlZXIodGhpcy5wZWVyTmFtZSwgc3R1blNlcnZlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQ2hhbm5lbENhbGxiYWNrcywgbW9ja3MpO1xuXG4gIC8vIFNldHVwIGxpbmsgYmV0d2VlbiBGcmVlZG9tIG1lc3NhZ2luZyBhbmQgX3BlZXIncyBzaWduYWxsaW5nLlxuICAvLyBOb3RlOiB0aGUgc2lnbmFsbGluZyBjaGFubmVsIHNob3VsZCBvbmx5IGJlIHNlbmRpbmcgcmVjZWl2ZWluZyBzdHJpbmdzLlxuICB0aGlzLmNvcmUuYmluZENoYW5uZWwoc2lnbmFsbGluZ0NoYW5uZWxJZCwgZnVuY3Rpb24gKGNoYW5uZWwpIHtcbiAgICB0aGlzLnNpZ25hbGxpbmdDaGFubmVsID0gY2hhbm5lbDtcbiAgICB0aGlzLnBlZXIuc2V0U2VuZFNpZ25hbE1lc3NhZ2UoZnVuY3Rpb24gKG1zZykge1xuICAgICAgdGhpcy5zaWduYWxsaW5nQ2hhbm5lbC5lbWl0KCdtZXNzYWdlJywgbXNnKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICAgIHRoaXMuc2lnbmFsbGluZ0NoYW5uZWwub24oJ21lc3NhZ2UnLFxuICAgICAgICB0aGlzLnBlZXIuaGFuZGxlU2lnbmFsTWVzc2FnZS5iaW5kKHRoaXMucGVlcikpO1xuICAgIHRoaXMuc2lnbmFsbGluZ0NoYW5uZWwuZW1pdCgncmVhZHknKTtcbiAgICBpZiAoIWluaXRpYXRlQ29ubmVjdGlvbikge1xuICAgICAgdGhpcy5wZWVyLnJ1bldoZW5Db25uZWN0ZWQoY29udGludWF0aW9uKTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKSk7XG5cbiAgaWYgKGluaXRpYXRlQ29ubmVjdGlvbikge1xuICAgIC8vIFNldHVwIGEgY29ubmVjdGlvbiByaWdodCBhd2F5LCB0aGVuIGludm9rZSBjb250aW51YXRpb24uXG4gICAgY29uc29sZS5sb2codGhpcy5wZWVyTmFtZSArICcgaW5pdGlhdGluZyBjb25uZWN0aW9uJyk7XG4gICAgY2hhbm5lbElkID0gJ2hlbGxvJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoKTtcbiAgICBvcGVuRGF0YUNoYW5uZWxDb250aW51YXRpb24gPSBmdW5jdGlvbiAoc3VjY2VzcywgZXJyb3IpIHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjb250aW51YXRpb24odW5kZWZpbmVkLCBlcnJvcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsb3NlRGF0YUNoYW5uZWwoY2hhbm5lbElkLCBjb250aW51YXRpb24pO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKTtcbiAgICB0aGlzLm9wZW5EYXRhQ2hhbm5lbChjaGFubmVsSWQsIG9wZW5EYXRhQ2hhbm5lbENvbnRpbnVhdGlvbik7XG4gIH1cbn07XG5cblBlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5jcmVhdGVPZmZlciA9IGZ1bmN0aW9uIChjb25zdHJhaW50cywgY29udGludWF0aW9uKSB7XG4gIHRoaXMucGVlci5jcmVhdGVPZmZlcihjb25zdHJhaW50cywgY29udGludWF0aW9uKTtcbn07XG5cbi8vIFRPRE86IGRlbGF5IGNvbnRpbnVhdGlvbiB1bnRpbCB0aGUgb3BlbiBjYWxsYmFjayBmcm9tIF9wZWVyIGlzIGNhbGxlZC5cblBlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5vcGVuRGF0YUNoYW5uZWwgPSBmdW5jdGlvbiAoY2hhbm5lbElkLCBjb250aW51YXRpb24pIHtcbiAgdGhpcy5wZWVyLm9wZW5EYXRhQ2hhbm5lbChjaGFubmVsSWQsIGNvbnRpbnVhdGlvbik7XG59O1xuXG5QZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuY2xvc2VEYXRhQ2hhbm5lbCA9IGZ1bmN0aW9uIChjaGFubmVsSWQsIGNvbnRpbnVhdGlvbikge1xuICB0aGlzLnBlZXIuY2xvc2VDaGFubmVsKGNoYW5uZWxJZCk7XG4gIGNvbnRpbnVhdGlvbigpO1xufTtcblxuLy8gQ2FsbGVkIHRvIHNlbmQgYSBtZXNzYWdlIG92ZXIgdGhlIGdpdmVuIGRhdGFjaGFubmVsIHRvIGEgcGVlci4gSWYgdGhlIGRhdGFcbi8vIGNoYW5uZWwgZG9lc24ndCBhbHJlYWR5IGV4aXN0LCB0aGUgRGF0YVBlZXIgY3JlYXRlcyBpdC5cblBlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKHNlbmRJbmZvLCBjb250aW51YXRpb24pIHtcbiAgdmFyIG9ialRvU2VuZCA9IHNlbmRJbmZvLnRleHQgfHwgc2VuZEluZm8uYnVmZmVyIHx8IHNlbmRJbmZvLmJpbmFyeTtcbiAgaWYgKHR5cGVvZiBvYmpUb1NlbmQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc29sZS5lcnJvcihcIk5vIHZhbGlkIGRhdGEgdG8gc2VuZCBoYXMgYmVlbiBwcm92aWRlZC5cIiwgc2VuZEluZm8pO1xuICAgIHJldHVybjtcbiAgfVxuICAvL0RFQlVHXG4gIC8vIG9ialRvU2VuZCA9IG5ldyBBcnJheUJ1ZmZlcig0KTtcbiAgLy9ERUJVR1xuICB0aGlzLnBlZXIuc2VuZChzZW5kSW5mby5jaGFubmVsTGFiZWwsIG9ialRvU2VuZCwgY29udGludWF0aW9uKTtcbn07XG5cblBlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5nZXRCdWZmZXJlZEFtb3VudCA9IGZ1bmN0aW9uIChjaGFubmVsSWQsIGNvbnRpbnVhdGlvbikge1xuICBjb250aW51YXRpb24odGhpcy5wZWVyLmdldEJ1ZmZlcmVkQW1vdW50KGNoYW5uZWxJZCkpO1xufTtcblxuUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKGNvbnRpbnVhdGlvbikge1xuICBpZiAodGhpcy5wZWVyLmlzQ2xvc2VkKCkpIHtcbiAgICAvLyBQZWVyIGFscmVhZHkgY2xvc2VkLCBydW4gY29udGludWF0aW9uIHdpdGhvdXQgZGlzcGF0Y2hpbmcgZXZlbnQuXG4gICAgY29udGludWF0aW9uKCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMucGVlci5jbG9zZSgpO1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoXCJvbkNsb3NlXCIpO1xuICBjb250aW51YXRpb24oKTtcbn07XG5cbmV4cG9ydHMucHJvdmlkZXIgPSBQZWVyQ29ubmVjdGlvbjtcbmV4cG9ydHMubmFtZSA9ICdjb3JlLnBlZXJjb25uZWN0aW9uJztcbmV4cG9ydHMuZmxhZ3MgPSB7bW9kdWxlOiB0cnVlfTtcbiIsIi8qanNsaW50IGluZGVudDoyLHNsb3BweTp0cnVlLCBub2RlOnRydWUgKi9cblxudmFyIHV0aWwgPSByZXF1aXJlKCcuLi8uLi9zcmMvdXRpbCcpO1xuXG52YXIgdW5BdHRhY2hlZENoYW5uZWxzID0ge307XG52YXIgYWxsb2NhdGVDaGFubmVsID0gZnVuY3Rpb24gKGRhdGFDaGFubmVsKSB7XG4gIHZhciBpZCA9IHV0aWwuZ2V0SWQoKTtcbiAgdW5BdHRhY2hlZENoYW5uZWxzW2lkXSA9IGRhdGFDaGFubmVsO1xuICByZXR1cm4gaWQ7XG59O1xuXG52YXIgUlRDRGF0YUNoYW5uZWxBZGFwdGVyID0gZnVuY3Rpb24gKGNhcCwgZGlzcGF0Y2hFdmVudHMsIGlkKSB7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCA9IGRpc3BhdGNoRXZlbnRzO1xuICBpZiAoIXVuQXR0YWNoZWRDaGFubmVsc1tpZF0pIHtcbiAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgSUQsIGNyZWF0aW5nIGFjdGluZyBvbiB1bmF0dGFjaGVkIERhdGFDaGFubmVsJyk7XG4gICAgdmFyIENvbm5lY3Rpb24gPSByZXF1aXJlKCcuL2NvcmUucnRjcGVlcmNvbm5lY3Rpb24nKS5wcm92aWRlcixcbiAgICAgIHByb3ZpZGVyID0gbmV3IENvbm5lY3Rpb24oKTtcbiAgICBpZCA9IHByb3ZpZGVyLmNyZWF0ZURhdGFDaGFubmVsKCk7XG4gICAgcHJvdmlkZXIuY2xvc2UoKTtcbiAgfVxuXG4gIHRoaXMuY2hhbm5lbCA9IHVuQXR0YWNoZWRDaGFubmVsc1tpZF07XG4gIGRlbGV0ZSB1bkF0dGFjaGVkQ2hhbm5lbHNbaWRdO1xuXG4gIHRoaXMuZXZlbnRzID0gW1xuICAgICdvbm9wZW4nLFxuICAgICdvbmVycm9yJyxcbiAgICAnb25jbG9zZScsXG4gICAgJ29ubWVzc2FnZSdcbiAgXTtcbiAgdGhpcy5tYW5hZ2VFdmVudHModHJ1ZSk7XG59O1xuXG4vLyBBdHRhY2ggb3IgZGV0YWNoIGxpc3RlbmVycyBmb3IgZXZlbnRzIGFnYWluc3QgdGhlIGNvbm5lY3Rpb24uXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLm1hbmFnZUV2ZW50cyA9IGZ1bmN0aW9uIChhdHRhY2gpIHtcbiAgdGhpcy5ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoYXR0YWNoKSB7XG4gICAgICB0aGlzW2V2ZW50XSA9IHRoaXNbZXZlbnRdLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLmNoYW5uZWxbZXZlbnRdID0gdGhpc1tldmVudF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmNoYW5uZWxbZXZlbnRdO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUuZ2V0TGFiZWwgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sodGhpcy5jaGFubmVsLmxhYmVsKTtcbn07XG5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUuZ2V0T3JkZXJlZCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBjYWxsYmFjayh0aGlzLmNoYW5uZWwub3JkZXJlZCk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLmdldE1heFBhY2tldExpZmVUaW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrKHRoaXMuY2hhbm5lbC5tYXhQYWNrZXRMaWZlVGltZSk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLmdldE1heFJldHJhbnNtaXRzID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrKHRoaXMuY2hhbm5lbC5tYXhSZXRyYW5zbWl0cyk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLmdldFByb3RvY29sID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrKHRoaXMuY2hhbm5lbC5wcm90b2NvbCk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLmdldE5lZ290aWF0ZWQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sodGhpcy5jaGFubmVsLm5lZ290aWF0ZWQpO1xufTtcblxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5nZXRJZCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBjYWxsYmFjayh0aGlzLmNoYW5uZWwuaWQpO1xufTtcblxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5nZXRSZWFkeVN0YXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrKHRoaXMuY2hhbm5lbC5yZWFkeVN0YXRlKTtcbn07XG5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUuZ2V0QnVmZmVyZWRBbW91bnQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sodGhpcy5jaGFubmVsLmJ1ZmZlcmVkQW1vdW50KTtcbn07XG5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUuZ2V0QmluYXJ5VHlwZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBjYWxsYmFjayh0aGlzLmNoYW5uZWwuYmluYXJ5VHlwZSk7XG59O1xuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5zZXRCaW5hcnlUeXBlID0gZnVuY3Rpb24gKGJpbmFyeVR5cGUsIGNhbGxiYWNrKSB7XG4gIHRoaXMuY2hhbm5lbC5iaW5hcnlUeXBlID0gYmluYXJ5VHlwZTtcbiAgY2FsbGJhY2soKTtcbn07XG5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uICh0ZXh0LCBjYWxsYmFjaykge1xuICB0aGlzLmNoYW5uZWwuc2VuZCh0ZXh0KTtcbiAgY2FsbGJhY2soKTtcbn07XG5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUuc2VuZEJ1ZmZlciA9IGZ1bmN0aW9uIChidWZmZXIsIGNhbGxiYWNrKSB7XG4gIHRoaXMuY2hhbm5lbC5zZW5kKGJ1ZmZlcik7XG4gIGNhbGxiYWNrKCk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGlmICghdGhpcy5jaGFubmVsKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gIH1cbiAgdGhpcy5tYW5hZ2VFdmVudHMoZmFsc2UpO1xuICB0aGlzLmNoYW5uZWwuY2xvc2UoKTtcbiAgY2FsbGJhY2soKTtcbn07XG5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUub25vcGVuID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25vcGVuJywgZXZlbnQubWVzc2FnZSk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbmVycm9yJywge1xuICAgIGVycmNvZGU6IGV2ZW50LnR5cGUsXG4gICAgbWVzc2FnZTogZXZlbnQubWVzc2FnZVxuICB9KTtcbn07XG5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUub25jbG9zZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoJ29uY2xvc2UnLCBldmVudC5tZXNzYWdlKTtcbn07XG5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGlmICh0eXBlb2YgZXZlbnQuZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ29ubWVzc2FnZScsIHt0ZXh0OiBldmVudC5kYXRhfSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbm1lc3NhZ2UnLCB7YnVmZmVyOiBldmVudC5kYXRhfSk7XG4gIH1cbn07XG5cbmV4cG9ydHMubmFtZSA9IFwiY29yZS5ydGNkYXRhY2hhbm5lbFwiO1xuZXhwb3J0cy5wcm92aWRlciA9IFJUQ0RhdGFDaGFubmVsQWRhcHRlcjtcbmV4cG9ydHMuYWxsb2NhdGUgPSBhbGxvY2F0ZUNoYW5uZWw7XG4iLCIvKmpzbGludCBpbmRlbnQ6MixzbG9wcHk6dHJ1ZSwgbm9kZTp0cnVlICovXG5cbnZhciBhZGFwdGVyID0gcmVxdWlyZSgnd2VicnRjLWFkYXB0ZXInKTtcbnZhciBQcm9taXNlQ29tcGF0ID0gcmVxdWlyZSgnZXM2LXByb21pc2UnKS5Qcm9taXNlO1xudmFyIFJUQ1BlZXJDb25uZWN0aW9uID0gYWRhcHRlci5SVENQZWVyQ29ubmVjdGlvbjtcbnZhciBSVENTZXNzaW9uRGVzY3JpcHRpb24gPSBhZGFwdGVyLlJUQ1Nlc3Npb25EZXNjcmlwdGlvbjtcbnZhciBSVENJY2VDYW5kaWRhdGUgPSBhZGFwdGVyLlJUQ0ljZUNhbmRpZGF0ZTtcblxudmFyIERhdGFDaGFubmVsID0gcmVxdWlyZSgnLi9jb3JlLnJ0Y2RhdGFjaGFubmVsJyk7XG5cbnZhciBSVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIgPSBmdW5jdGlvbiAoY2FwLCBkaXNwYXRjaEV2ZW50LCBjb25maWd1cmF0aW9uKSB7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCA9IGRpc3BhdGNoRXZlbnQ7XG4gIHRyeSB7XG4gICAgdGhpcy5jb25uZWN0aW9uID0gbmV3IFJUQ1BlZXJDb25uZWN0aW9uKGNvbmZpZ3VyYXRpb24pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gTm90ZTogWW91IGNhbid0IGFzayB0aGUgcHJvdmlkZXIgdG8gY2xvc2UgeW91IHN5bmNocm9ub3VzbHksIHNpbmNlXG4gICAgLy8gdGhlIGNvbnN0cnVjdG9yIGhhcyBub3QgeWV0IHJldHVybmVkLCBzbyB0aGVyZSdzIG5vICd0aGlzJyB0aGF0XG4gICAgLy8gdGhlIHByb3ZpZGVyIGNhbiBrbm93IGFib3V0IHlldC5cbiAgICBzZXRUaW1lb3V0KGNhcC5wcm92aWRlci5jbG9zZS5iaW5kKGNhcC5wcm92aWRlciwgdGhpcyksIDApO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuZXZlbnRzID0gW1xuICAgICdvbmRhdGFjaGFubmVsJyxcbiAgICAnb25uZWdvdGlhdGlvbm5lZWRlZCcsXG4gICAgJ29uaWNlY2FuZGlkYXRlJyxcbiAgICAnb25zaWduYWxpbmdzdGF0ZWNoYW5nZScsXG4gICAgJ29uYWRkc3RyZWFtJyxcbiAgICAnb25yZW1vdmVzdHJlYW0nLFxuICAgICdvbmljZWNvbm5lY3Rpb25zdGF0ZWNoYW5nZSdcbiAgXTtcbiAgdGhpcy5tYW5hZ2VFdmVudHModHJ1ZSk7XG59O1xuXG4vLyBBdHRhY2ggb3IgZGV0YWNoIGxpc3RlbmVycyBmb3IgZXZlbnRzIGFnYWluc3QgdGhlIGNvbm5lY3Rpb24uXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLm1hbmFnZUV2ZW50cyA9IGZ1bmN0aW9uIChhdHRhY2gpIHtcbiAgdGhpcy5ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoYXR0YWNoKSB7XG4gICAgICB0aGlzW2V2ZW50XSA9IHRoaXNbZXZlbnRdLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLmNvbm5lY3Rpb25bZXZlbnRdID0gdGhpc1tldmVudF07XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbm5lY3Rpb24pIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmNvbm5lY3Rpb25bZXZlbnRdO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuY3JlYXRlT2ZmZXIgPSBmdW5jdGlvbiAoY29uc3RyYWludHMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ29tcGF0KGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB0aGlzLmNvbm5lY3Rpb24uY3JlYXRlT2ZmZXIocmVzb2x2ZSwgcmVqZWN0LCBjb25zdHJhaW50cyk7XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLmNyZWF0ZUFuc3dlciA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ29tcGF0KGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB0aGlzLmNvbm5lY3Rpb24uY3JlYXRlQW5zd2VyKHJlc29sdmUsIHJlamVjdCk7XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLnNldExvY2FsRGVzY3JpcHRpb24gPSBmdW5jdGlvbiAoZGVzY3JpcHRpb24pIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ29tcGF0KGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB0aGlzLmNvbm5lY3Rpb24uc2V0TG9jYWxEZXNjcmlwdGlvbihuZXcgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSxcbiAgICAgIHJlc29sdmUsXG4gICAgICByZWplY3QpO1xuICB9LmJpbmQodGhpcykpO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5nZXRMb2NhbERlc2NyaXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHRoaXMuY29ubmVjdGlvbi5sb2NhbERlc2NyaXB0aW9uKTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuc2V0UmVtb3RlRGVzY3JpcHRpb24gPSBmdW5jdGlvbiAoZGVzY3JpcHRpb24pIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ29tcGF0KGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB0aGlzLmNvbm5lY3Rpb24uc2V0UmVtb3RlRGVzY3JpcHRpb24obmV3IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbihkZXNjcmlwdGlvbiksXG4gICAgICByZXNvbHZlLFxuICAgICAgcmVqZWN0KTtcbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuZ2V0UmVtb3RlRGVzY3JpcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUodGhpcy5jb25uZWN0aW9uLnJlbW90ZURlc2NyaXB0aW9uKTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuZ2V0U2lnbmFsaW5nU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUodGhpcy5jb25uZWN0aW9uLnNpZ25hbGluZ1N0YXRlKTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUudXBkYXRlSWNlID0gZnVuY3Rpb24gKGNvbmZpZ3VyYXRpb24pIHtcbiAgdGhpcy5jb25uZWN0aW9uLnVwZGF0ZUljZShjb25maWd1cmF0aW9uKTtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSgpO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5hZGRJY2VDYW5kaWRhdGUgPSBmdW5jdGlvbiAoY2FuZGlkYXRlKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdGhpcy5jb25uZWN0aW9uLmFkZEljZUNhbmRpZGF0ZShuZXcgUlRDSWNlQ2FuZGlkYXRlKGNhbmRpZGF0ZSksXG4gICAgICByZXNvbHZlLFxuICAgICAgcmVqZWN0KTtcbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuZ2V0SWNlR2F0aGVyaW5nU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUodGhpcy5jb25uZWN0aW9uLmljZUdhdGhlcmluZ1N0YXRlKTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuZ2V0SWNlQ29ubmVjdGlvblN0YXRlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHRoaXMuY29ubmVjdGlvbi5pY2VDb25uZWN0aW9uU3RhdGUpO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5nZXRDb25maWd1cmF0aW9uID0gZnVuY3Rpb24gKCkge1xuICB2YXIgY29uZmlndXJhdGlvbiA9IHRoaXMuY29ubmVjdGlvbi5nZXRDb25maWd1cmF0aW9uKCk7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUoY29uZmlndXJhdGlvbik7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLmdldExvY2FsU3RyZWFtcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVqZWN0KHtcbiAgICBlcnJjb2RlOiAtMSxcbiAgICBtZXNzYWdlOiBcIk5vdCBJbXBsZW1lbnRlZFwiXG4gIH0pO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5nZXRSZW1vdGVTdHJlYW1zID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZWplY3Qoe1xuICAgIGVycmNvZGU6IC0xLFxuICAgIG1lc3NhZ2U6IFwiTm90IEltcGxlbWVudGVkXCJcbiAgfSk7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLmdldFN0cmVhbUJ5SWQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVqZWN0KHtcbiAgICBlcnJjb2RlOiAtMSxcbiAgICBtZXNzYWdlOiBcIk5vdCBJbXBsZW1lbnRlZFwiXG4gIH0pO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5hZGRTdHJlYW0gPSBmdW5jdGlvbiAoaWQpIHtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVqZWN0KHtcbiAgICBlcnJjb2RlOiAtMSxcbiAgICBtZXNzYWdlOiBcIk5vdCBJbXBsZW1lbnRlZFwiXG4gIH0pO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5yZW1vdmVTdHJlYW0gPSBmdW5jdGlvbiAoaWQpIHtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVqZWN0KHtcbiAgICBlcnJjb2RlOiAtMSxcbiAgICBtZXNzYWdlOiBcIk5vdCBJbXBsZW1lbnRlZFwiXG4gIH0pO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCF0aGlzLmNvbm5lY3Rpb24pIHtcbiAgICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKCk7XG4gIH1cbiAgdGhpcy5tYW5hZ2VFdmVudHMoZmFsc2UpO1xuICB0cnkge1xuICAgIHRoaXMuY29ubmVjdGlvbi5jbG9zZSgpO1xuICAgIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBQcm9taXNlQ29tcGF0LnJlamVjdCh7XG4gICAgICBlcnJjb2RlOiBlLm5hbWUsXG4gICAgICBtZXNzYWdlOiBlLm1lc3NhZ2VcbiAgICB9KTtcbiAgfVxufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5jcmVhdGVEYXRhQ2hhbm5lbCA9IGZ1bmN0aW9uIChsYWJlbCwgZGF0YUNoYW5uZWxEaWN0KSB7XG4gIHZhciBpZCA9IERhdGFDaGFubmVsLmFsbG9jYXRlKHRoaXMuY29ubmVjdGlvbi5jcmVhdGVEYXRhQ2hhbm5lbChsYWJlbCwgZGF0YUNoYW5uZWxEaWN0KSk7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUoaWQpO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5nZXRTdGF0cyA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICByZXR1cm4gbmV3IFByb21pc2VDb21wYXQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHRoaXMuY29ubmVjdGlvbi5nZXRTdGF0cyhzZWxlY3RvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUub25kYXRhY2hhbm5lbCA9IGZ1bmN0aW9uIChldmVudCkge1xuICB2YXIgaWQgPSBEYXRhQ2hhbm5lbC5hbGxvY2F0ZShldmVudC5jaGFubmVsKTtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbmRhdGFjaGFubmVsJywge2NoYW5uZWw6IGlkfSk7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLm9ubmVnb3RpYXRpb25uZWVkZWQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbm5lZ290aWF0aW9ubmVlZGVkJywgZXZlbnQubWVzc2FnZSk7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLm9uaWNlY2FuZGlkYXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHZhciBtc2c7XG4gIGlmIChldmVudC5jYW5kaWRhdGUgJiYgZXZlbnQuY2FuZGlkYXRlLmNhbmRpZGF0ZSkge1xuICAgIG1zZyA9IHtcbiAgICAgIGNhbmRpZGF0ZToge1xuICAgICAgICBjYW5kaWRhdGU6IGV2ZW50LmNhbmRpZGF0ZS5jYW5kaWRhdGUsXG4gICAgICAgIHNkcE1pZDogZXZlbnQuY2FuZGlkYXRlLnNkcE1pZCxcbiAgICAgICAgc2RwTUxpbmVJbmRleDogZXZlbnQuY2FuZGlkYXRlLnNkcE1MaW5lSW5kZXhcbiAgICAgIH1cbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1zZyA9IHtcbiAgICAgIGNhbmRpZGF0ZTogbnVsbFxuICAgIH07XG4gIH1cbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbmljZWNhbmRpZGF0ZScsIG1zZyk7XG59O1xuICBcblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUub25zaWduYWxpbmdzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoJ29uc2lnbmFsaW5nc3RhdGVjaGFuZ2UnLCBldmVudC5tZXNzYWdlKTtcbn07XG4gIFxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5vbmFkZHN0cmVhbSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAvL1RPRE86IHByb3ZpZGUgSUQgb2YgYWxsb2NhdGVkIHN0cmVhbS5cbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbmFkZHN0cmVhbScsIGV2ZW50LnN0cmVhbSk7XG59O1xuICBcblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUub25yZW1vdmVzdHJlYW0gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgLy9UT0RPOiBwcm92aWRlIElEIG9mIGRlYWxsb2NhdGVkIHN0cmVhbS5cbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbnJlbW92ZXN0cmVhbScsIGV2ZW50LnN0cmVhbSk7XG59O1xuICBcblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUub25pY2Vjb25uZWN0aW9uc3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbmljZWNvbm5lY3Rpb25zdGF0ZWNoYW5nZScsIGV2ZW50Lm1lc3NhZ2UpO1xufTtcblxuXG5leHBvcnRzLm5hbWUgPSBcImNvcmUucnRjcGVlcmNvbm5lY3Rpb25cIjtcbmV4cG9ydHMucHJvdmlkZXIgPSBSVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXI7XG5leHBvcnRzLnN0eWxlID0gXCJwcm92aWRlUHJvbWlzZXNcIjtcbmV4cG9ydHMuZmxhZ3MgPSB7cHJvdmlkZXI6IHRydWV9O1xuIiwiLypnbG9iYWxzIGxvY2FsU3RvcmFnZSAqL1xuLypqc2xpbnQgaW5kZW50OjIsc2xvcHB5OnRydWUsbm9kZTp0cnVlICovXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4uLy4uL3NyYy91dGlsJyk7XG5cbi8qKlxuICogQSBGcmVlRE9NIGNvcmUuc3RvcmFnZSBwcm92aWRlciB0aGF0IGRlcGVuZHMgb24gbG9jYWxTdG9yYWdlXG4gKiBUaHVzLCB0aGlzIG9ubHkgd29ya3MgaW4gdGhlIGNvbnRleHQgb2YgYSB3ZWJwYWdlIGFuZCBoYXNcbiAqIHNvbWUgc2l6ZSBsaW1pdGF0aW9ucy5cbiAqIE5vdGUgdGhhdCB0aGlzIGNhbiBjb25mbGljdCB3aXRoIG90aGVyIHNjcmlwdHMgdXNpbmcgbG9jYWxTdG9yYWdlXG4gKiBhcyBrZXlzIGFyZSByYXdcbiAqIEBDbGFzcyBTdG9yYWdlX3VucHJpdmlsZWdlZFxuICogQGNvbnN0cnVjdG9yXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGNhcCBDYXBhYmlsaXRpZXMgZm9yIHRoZSBwcm92aWRlclxuICovXG52YXIgU3RvcmFnZV91bnByaXZpbGVnZWQgPSBmdW5jdGlvbiAoY2FwLCBkaXNwYXRjaEV2ZW50KSB7XG4gIHV0aWwuaGFuZGxlRXZlbnRzKHRoaXMpO1xufTtcblxuLyoqXG4gKiBMaXN0cyBrZXlzIGluIHRoZSBzdG9yYWdlIHJlcG9zaXRvcnlcbiAqIEBtZXRob2Qga2V5c1xuICovXG5TdG9yYWdlX3VucHJpdmlsZWdlZC5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uIChjb250aW51YXRpb24pIHtcbiAgdmFyIHJlc3VsdCA9IFtdLFxuICAgIGk7XG4gIGZvciAoaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpICs9IDEpIHtcbiAgICByZXN1bHQucHVzaChsb2NhbFN0b3JhZ2Uua2V5KGkpKTtcbiAgfVxuICBjb250aW51YXRpb24ocmVzdWx0KTtcbn07XG5cbi8qKlxuICogR2V0IGEga2V5IGZyb20gdGhlIHN0b3JhZ2UgcmVwb3NpdG9yeS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgVGhlIGl0ZW0gdG8gZ2V0IGZyb20gc3RvcmFnZS5cbiAqIEBtZXRob2QgZ2V0XG4gKi9cblN0b3JhZ2VfdW5wcml2aWxlZ2VkLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5LCBjb250aW51YXRpb24pIHtcbiAgdHJ5IHtcbiAgICB2YXIgdmFsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICBjb250aW51YXRpb24odmFsKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnRpbnVhdGlvbihudWxsKTtcbiAgfVxufTtcblxuLyoqXG4gKiBTZXQgYSBrZXkgaW4gdGhlIHN0b3JhZ2UgcmVwb3NpdG9yeS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgVGhlIGl0ZW0gdG8gc2F2ZSBpbiBzdG9yYWdlLlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFRoZSB2YWx1ZSB0byBzYXZlIGluIHN0b3JhZ2UuXG4gKiBAbWV0aG9kIHNldFxuICovXG5TdG9yYWdlX3VucHJpdmlsZWdlZC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUsIGNvbnRpbnVhdGlvbikge1xuICB2YXIgcmV0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gIGNvbnRpbnVhdGlvbihyZXQpO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYSBrZXkgZnJvbSB0aGUgc3RvcmFnZSByZXBvc2l0b3J5LlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSBUaGUgaXRlbSB0byByZW1vdmUgZnJvbSBzdG9yYWdlO1xuICogQG1ldGhvZCByZW1vdmVcbiAqL1xuU3RvcmFnZV91bnByaXZpbGVnZWQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChrZXksIGNvbnRpbnVhdGlvbikge1xuICB2YXIgcmV0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgY29udGludWF0aW9uKHJldCk7XG59O1xuXG4vKipcbiAqIFJlc2V0IHRoZSBjb250ZW50cyBvZiB0aGUgc3RvcmFnZSByZXBvc2l0b3J5LlxuICogQG1ldGhvZCBjbGVhclxuICovXG5TdG9yYWdlX3VucHJpdmlsZWdlZC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoY29udGludWF0aW9uKSB7XG4gIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICBjb250aW51YXRpb24oKTtcbn07XG5cbmV4cG9ydHMucHJvdmlkZXIgPSBTdG9yYWdlX3VucHJpdmlsZWdlZDtcbmV4cG9ydHMubmFtZSA9ICdjb3JlLnN0b3JhZ2UnO1xuIiwiLypqc2xpbnQgaW5kZW50OjIsd2hpdGU6dHJ1ZSxzbG9wcHk6dHJ1ZSxub2RlOnRydWUgKi9cbnZhciBFdmVudEludGVyZmFjZSA9IHJlcXVpcmUoJy4uLy4uL3NyYy9wcm94eS9ldmVudEludGVyZmFjZScpO1xudmFyIENvbnN1bWVyID0gcmVxdWlyZSgnLi4vLi4vc3JjL2NvbnN1bWVyJyk7XG52YXIgdXRpbCA9IHJlcXVpcmUoJy4uLy4uL3NyYy91dGlsJyk7XG5cbi8qKlxuICogQ29yZSBmcmVlZG9tIHNlcnZpY2VzIGF2YWlsYWJsZSB0byBhbGwgbW9kdWxlcy5cbiAqIENyZWF0ZWQgYnkgdGhlIGVudmlyb25tZW50IGhlbHBlciBpbiByZXNwb25zZSB0byBhICdjb3JlJyByZXF1ZXN0LlxuICogQENsYXNzIENvcmVfdW5wcml2aWxlZ2VkXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7TWFuYWdlcn0gbWFuYWdlciBUaGUgbWFuYWdlciB0aGlzIGNvcmUgaXMgY29ubmVjdGVkIHdpdGguXG4gKiBAcHJpdmF0ZVxuICovXG52YXIgQ29yZV91bnByaXZpbGVnZWQgPSBmdW5jdGlvbihtYW5hZ2VyLCBwb3N0TWVzc2FnZSkge1xuICB0aGlzLm1hbmFnZXIgPSBtYW5hZ2VyLm1vZHVsZTtcbiAgdGhpcy5kZWJ1ZyA9IHRoaXMubWFuYWdlci5kZWJ1Zztcbn07XG5cbkNvcmVfdW5wcml2aWxlZ2VkLnVuYm91bmRDaGFubmVscyA9IHt9O1xuXG5Db3JlX3VucHJpdmlsZWdlZC5jb250ZXh0SWQgPSB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ3JlYXRlIGEgY3VzdG9tIGNoYW5uZWwuXG4gKiBSZXR1cm5zIHRoZSBzdHJ1Y3R1cmUge2NoYW5uZWw6IFByb3h5LCBpZGVudGlmaWVyOiBPYmplY3R9LFxuICogd2hlcmUgdGhlIGlkZW50aWZpZXIgY2FuIGJlICdyZWRlZW1lZCcgYnkgYW5vdGhlciBtb2R1bGUgb3IgcHJvdmlkZXIgdXNpbmdcbiAqIGJpbmQgY2hhbm5lbCwgYXQgd2hpY2ggcG9pbnQgdGhlIGRlZmVycmVkIG9iamVjdCB3aWxsIHJlc29sdmUgd2l0aCBhIGNoYW5uZWxcbiAqIGJldHdlZW4gdGhlIHR3byBlbmRwb2ludHMuXG4gKiBAbWV0aG9kIGNyZWF0ZUNoYW5uZWxcbiAqIEBwYXJhbXMge0Z1bmN0aW9ufSBjb250aW51YXRpb24gTWV0aG9kIHRvIGNhbGwgd2l0aCB0aGUgY29zbnRydWN0ZWQgc3RydWN0dXJlLlxuICovXG5Db3JlX3VucHJpdmlsZWdlZC5wcm90b3R5cGUuY3JlYXRlQ2hhbm5lbCA9IGZ1bmN0aW9uKGNvbnRpbnVhdGlvbikge1xuICB2YXIgcHJveHkgPSBuZXcgQ29uc3VtZXIoRXZlbnRJbnRlcmZhY2UsIHRoaXMubWFuYWdlci5kZWJ1ZyksXG4gICAgICBpZCA9IHV0aWwuZ2V0SWQoKSxcbiAgICAgIGNoYW4gPSB0aGlzLmdldENoYW5uZWwocHJveHkpO1xuICB0aGlzLm1hbmFnZXIuc2V0dXAocHJveHkpO1xuXG4gIGlmICh0aGlzLm1hbmFnZXIuZGVsZWdhdGUgJiYgdGhpcy5tYW5hZ2VyLnRvRGVsZWdhdGUuY29yZSkge1xuICAgIHRoaXMubWFuYWdlci5lbWl0KHRoaXMubWFuYWdlci5kZWxlZ2F0ZSwge1xuICAgICAgdHlwZTogJ0RlbGVnYXRpb24nLFxuICAgICAgcmVxdWVzdDogJ2hhbmRsZScsXG4gICAgICBmbG93OiAnY29yZScsXG4gICAgICBtZXNzYWdlOiB7XG4gICAgICAgIHR5cGU6ICdyZWdpc3RlcicsXG4gICAgICAgIGlkOiBpZFxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIENvcmVfdW5wcml2aWxlZ2VkLnVuYm91bmRDaGFubmVsc1tpZF0gPSB7XG4gICAgbG9jYWw6IHRydWUsXG4gICAgcHJveHk6IHByb3h5XG4gIH07XG5cbiAgcHJveHkub25jZSgnc3RhcnQnLCB0aGlzLmdldENoYW5uZWwuYmluZCh0aGlzLCBwcm94eSkpO1xuXG4gIGNvbnRpbnVhdGlvbih7XG4gICAgY2hhbm5lbDogY2hhbixcbiAgICBpZGVudGlmaWVyOiBpZFxuICB9KTtcbn07XG5cbkNvcmVfdW5wcml2aWxlZ2VkLnByb3RvdHlwZS5nZXRDaGFubmVsID0gZnVuY3Rpb24ocHJveHkpIHtcbiAgdmFyIGlmYWNlID0gcHJveHkuZ2V0UHJveHlJbnRlcmZhY2UoKSxcbiAgICAgIGNoYW4gPSBpZmFjZSgpO1xuICBjaGFuLmNsb3NlID0gaWZhY2UuY2xvc2U7XG4gIGNoYW4ub25DbG9zZSA9IGlmYWNlLm9uQ2xvc2U7XG4gIGlmYWNlLm9uQ2xvc2UoY2hhbiwgZnVuY3Rpb24oKSB7XG4gICAgcHJveHkuZG9DbG9zZSgpO1xuICB9KTtcbiAgcmV0dXJuIGNoYW47XG59O1xuXG4vKipcbiAqIFJlY2VpdmUgYSBtZXNzYWdlIGZyb20gYW5vdGhlciBjb3JlIGluc3RhbmNlLlxuICogTm90ZTogQ29yZV91bnByaXZpbGVnZWQgaXMgbm90IHJlZ2lzdGVyZWQgb24gdGhlIGh1Yi4gaXQgaXMgYSBwcm92aWRlcixcbiAqICAgICBhcyBpdCdzIGxvY2F0aW9uIGFuZCBuYW1lIHdvdWxkIGluZGljYXRlLiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBieVxuICogICAgIHBvcnQtYXBwIHRvIHJlbGF5IG1lc3NhZ2VzIHVwIHRvIGhpZ2hlciBsZXZlbHMuICBNb3JlIGdlbmVyYWxseSwgdGhlXG4gKiAgICAgbWVzc2FnZXMgZW1pdHRlZCBieSB0aGUgY29yZSB0byAndGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5tYW5hbmFnZS5kZWxlZ2F0ZSdcbiAqICAgICBTaG91bGQgYmUgb25NZXNzYWdlZCB0byB0aGUgY29udHJvbGxpbmcgY29yZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBzb3VyY2UgVGhlIHNvdXJjZSBvZiB0aGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtc2cgVGhlIG1lc3NzYWdlIGZyb20gYW4gaXNvbGF0ZWQgY29yZSBwcm92aWRlci5cbiAqL1xuQ29yZV91bnByaXZpbGVnZWQucHJvdG90eXBlLm9uTWVzc2FnZSA9IGZ1bmN0aW9uKHNvdXJjZSwgbXNnKSB7XG4gIGlmIChtc2cudHlwZSA9PT0gJ3JlZ2lzdGVyJykge1xuICAgIENvcmVfdW5wcml2aWxlZ2VkLnVuYm91bmRDaGFubmVsc1ttc2cuaWRdID0ge1xuICAgICAgcmVtb3RlOiB0cnVlLFxuICAgICAgcmVzb2x2ZTogbXNnLnJlcGx5LFxuICAgICAgc291cmNlOiBzb3VyY2VcbiAgICB9O1xuICB9IGVsc2UgaWYgKG1zZy50eXBlID09PSAnY2xlYXInKSB7XG4gICAgZGVsZXRlIENvcmVfdW5wcml2aWxlZ2VkLnVuYm91bmRDaGFubmVsc1ttc2cuaWRdO1xuICB9IGVsc2UgaWYgKG1zZy50eXBlID09PSAnYmluZCcpIHtcbiAgICBpZiAoQ29yZV91bnByaXZpbGVnZWQudW5ib3VuZENoYW5uZWxzW21zZy5pZF0pIHtcbiAgICAgIHRoaXMuYmluZENoYW5uZWwobXNnLmlkLCBmdW5jdGlvbigpIHt9LCBzb3VyY2UpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBCaW5kIGEgY3VzdG9tIGNoYW5uZWwuXG4gKiBDcmVhdGVzIGEgcHJveHkgaW50ZXJmYWNlIHRvIHRoZSBjdXN0b20gY2hhbm5lbCwgd2hpY2ggd2lsbCBiZSBib3VuZCB0b1xuICogdGhlIHByb3h5IG9idGFpbmVkIHRocm91Z2ggYW4gZWFybGllciBjcmVhdGVDaGFubmVsIGNhbGwuXG4gKiBjaGFubmVsIHRvIGEgcHJveHkuXG4gKiBAbWV0aG9kIGJpbmRDaGFubmVsXG4gKiBAcGFyYW0ge09iamVjdH0gaWRlbnRpZmllciBBbiBpZGVudGlmaWVyIG9idGFpbmVkIHRocm91Z2ggY3JlYXRlQ2hhbm5lbC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbnRpbnVhdGlvbiBBIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aXRoIHRoZSBwcm94eS5cbiAqL1xuQ29yZV91bnByaXZpbGVnZWQucHJvdG90eXBlLmJpbmRDaGFubmVsID0gZnVuY3Rpb24oaWRlbnRpZmllciwgY29udGludWF0aW9uLCBzb3VyY2UpIHtcbiAgdmFyIHRvQmluZCA9IENvcmVfdW5wcml2aWxlZ2VkLnVuYm91bmRDaGFubmVsc1tpZGVudGlmaWVyXSxcbiAgICAgIG5ld1NvdXJjZSA9ICFzb3VyY2U7XG5cbiAgLy8gd2hlbiBiaW5kQ2hhbm5lbCBpcyBjYWxsZWQgZGlyZWN0bHksIHNvdXJjZSB3aWxsIGJlIHVuZGVmaW5lZC5cbiAgLy8gV2hlbiBpdCBpcyBwcm9wb2dhdGVkIGJ5IG9uTWVzc2FnZSwgYSBzb3VyY2UgZm9yIGJpbmRpbmcgd2lsbCBhbHJlYWR5IGV4aXN0LlxuICBpZiAobmV3U291cmNlKSB7XG4gICAgdGhpcy5kZWJ1Zy5kZWJ1ZygnbWFraW5nIGxvY2FsIHByb3h5IGZvciBjb3JlIGJpbmRpbmcnKTtcbiAgICBzb3VyY2UgPSBuZXcgQ29uc3VtZXIoRXZlbnRJbnRlcmZhY2UsIHRoaXMuZGVidWcpO1xuICAgIHRoaXMubWFuYWdlci5zZXR1cChzb3VyY2UpO1xuICB9XG5cbiAgLy8gSWYgdGhpcyBpcyBhIGtub3duIGlkZW50aWZpZXIgYW5kIGlzIGluIHRoZSBzYW1lIGNvbnRleHQsIGJpbmRpbmcgaXMgZWFzeS5cbiAgaWYgKHRvQmluZCAmJiB0b0JpbmQubG9jYWwpIHtcbiAgICB0aGlzLmRlYnVnLmRlYnVnKCdCaW5kaW5nIGEgY2hhbm5lbCB0byBwb3J0IG9uIHRoaXMgaHViOicgKyBzb3VyY2UpO1xuICAgIHRoaXMubWFuYWdlci5jcmVhdGVMaW5rKHNvdXJjZSwgaWRlbnRpZmllciwgdG9CaW5kLnByb3h5LCAnZGVmYXVsdCcpO1xuICAgIGRlbGV0ZSBDb3JlX3VucHJpdmlsZWdlZC51bmJvdW5kQ2hhbm5lbHNbaWRlbnRpZmllcl07XG4gICAgaWYgKHRoaXMubWFuYWdlci5kZWxlZ2F0ZSAmJiB0aGlzLm1hbmFnZXIudG9EZWxlZ2F0ZS5jb3JlKSB7XG4gICAgICB0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm1hbmFnZXIuZGVsZWdhdGUsIHtcbiAgICAgICAgdHlwZTogJ0RlbGVnYXRpb24nLFxuICAgICAgICByZXF1ZXN0OiAnaGFuZGxlJyxcbiAgICAgICAgZmxvdzogJ2NvcmUnLFxuICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgdHlwZTogJ2NsZWFyJyxcbiAgICAgICAgICBpZDogaWRlbnRpZmllclxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodG9CaW5kICYmIHRvQmluZC5yZW1vdGUpIHtcbiAgICB0aGlzLmRlYnVnLmRlYnVnKCdCaW5kaW5nIGEgY2hhbm5lbCBpbnRvIGEgbW9kdWxlLicpO1xuICAgIHRoaXMubWFuYWdlci5jcmVhdGVMaW5rKFxuICAgICAgICBzb3VyY2UsXG4gICAgICAgIG5ld1NvdXJjZSA/ICdkZWZhdWx0JyA6IGlkZW50aWZpZXIsXG4gICAgICAgIHRvQmluZC5zb3VyY2UsXG4gICAgICAgIGlkZW50aWZpZXIpO1xuICAgIHRvQmluZC5yZXNvbHZlKHtcbiAgICAgIHR5cGU6ICdCaW5kIENoYW5uZWwnLFxuICAgICAgcmVxdWVzdDonY29yZScsXG4gICAgICBmbG93OiAnY29yZScsXG4gICAgICBtZXNzYWdlOiB7XG4gICAgICAgIHR5cGU6ICdiaW5kJyxcbiAgICAgICAgaWQ6IGlkZW50aWZpZXJcbiAgICAgIH1cbiAgICB9KTtcbiAgICBkZWxldGUgQ29yZV91bnByaXZpbGVnZWQudW5ib3VuZENoYW5uZWxzW2lkZW50aWZpZXJdO1xuICB9IGVsc2UgaWYgKHRoaXMubWFuYWdlci5kZWxlZ2F0ZSAmJiB0aGlzLm1hbmFnZXIudG9EZWxlZ2F0ZS5jb3JlKSB7XG4gICAgdGhpcy5kZWJ1Zy5pbmZvKCdkZWxlZ2F0aW5nIGNoYW5uZWwgYmluZCBmb3IgYW4gdW5rbm93biBJRDonICsgaWRlbnRpZmllcik7XG4gICAgdGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5tYW5hZ2VyLmRlbGVnYXRlLCB7XG4gICAgICB0eXBlOiAnRGVsZWdhdGlvbicsXG4gICAgICByZXF1ZXN0OiAnaGFuZGxlJyxcbiAgICAgIGZsb3c6ICdjb3JlJyxcbiAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgdHlwZTogJ2JpbmQnLFxuICAgICAgICBpZDogaWRlbnRpZmllclxuICAgICAgfVxuICAgIH0pO1xuICAgIHNvdXJjZS5vbmNlKCdzdGFydCcsIGZ1bmN0aW9uKHAsIGNiKSB7XG4gICAgICBjYih0aGlzLmdldENoYW5uZWwocCkpO1xuICAgIH0uYmluZCh0aGlzLCBzb3VyY2UsIGNvbnRpbnVhdGlvbikpO1xuICAgIHRoaXMubWFuYWdlci5jcmVhdGVMaW5rKHNvdXJjZSxcbiAgICAgICAgJ2RlZmF1bHQnLFxuICAgICAgICB0aGlzLm1hbmFnZXIuaHViLmdldERlc3RpbmF0aW9uKHRoaXMubWFuYWdlci5kZWxlZ2F0ZSksXG4gICAgICAgIGlkZW50aWZpZXIpO1xuICAgIGRlbGV0ZSBDb3JlX3VucHJpdmlsZWdlZC51bmJvdW5kQ2hhbm5lbHNbaWRlbnRpZmllcl07XG4gICAgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuZGVidWcud2FybignQXNrZWQgdG8gYmluZCB1bmtub3duIGNoYW5uZWw6ICcgKyBpZGVudGlmaWVyKTtcbiAgICB0aGlzLmRlYnVnLmxvZyhDb3JlX3VucHJpdmlsZWdlZC51bmJvdW5kQ2hhbm5lbHMpO1xuICAgIGNvbnRpbnVhdGlvbigpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChzb3VyY2UuZ2V0SW50ZXJmYWNlKSB7XG4gICAgY29udGludWF0aW9uKHRoaXMuZ2V0Q2hhbm5lbChzb3VyY2UpKTtcbiAgfSBlbHNlIHtcbiAgICBjb250aW51YXRpb24oKTtcbiAgfVxufTtcblxuLyoqXG4gKiBHZXQgdGhlIElEIG9mIHRoZSBjdXJyZW50IGZyZWVkb20uanMgY29udGV4dC4gIFByb3ZpZGVzIGFuXG4gKiBhcnJheSBvZiBtb2R1bGUgVVJMcywgdGhlIGxpbmVhZ2Ugb2YgdGhlIGN1cnJlbnQgY29udGV4dC5cbiAqIFdoZW4gbm90IGluIGFuIGFwcGxpY2F0aW9uIGNvbnRleHQsIHRoZSBJRCBpcyB0aGUgbGluZWFnZVxuICogb2YgdGhlIGN1cnJlbnQgVmlldy5cbiAqIEBtZXRob2QgZ2V0SWRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBmdW5jdGlvbiBjYWxsZWQgd2l0aCBJRCBpbmZvcm1hdGlvbi5cbiAqL1xuQ29yZV91bnByaXZpbGVnZWQucHJvdG90eXBlLmdldElkID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgLy8gVE9ETzogbWFrZSBzdXJlIGNvbnRleHRJRCBpcyBwcm9wZXJseSBmcm96ZW4uXG4gIGNhbGxiYWNrKENvcmVfdW5wcml2aWxlZ2VkLmNvbnRleHRJZCk7XG59O1xuXG4vKipcbiAqIEdldCBhIGxvZ2dlciBmb3IgbG9nZ2luZyB0byB0aGUgZnJlZWRvbS5qcyBsb2dnZXIuIFByb3ZpZGVzIGFcbiAqIGxvZyBvYmplY3Qgd2l0aCBhbiBpbnRlcmZhY2Ugc2ltaWxhciB0byB0aGUgc3RhbmRhcmQgamF2YXNjcmlwdCBjb25zb2xlLFxuICogd2hpY2ggbG9ncyB2aWEgZGVidWcuXG4gKiBAbWV0aG9kIGdldExvZ2dlclxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGxvZ2dlciwgdXNlZCBhcyBpdHMgJ3NvdXJjZSdcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBmdW5jdGlvbiB0byBjYWxsIHdpdGggdGhlIGxvZ2dlci5cbiAqL1xuQ29yZV91bnByaXZpbGVnZWQucHJvdG90eXBlLmdldExvZ2dlciA9IGZ1bmN0aW9uKG5hbWUsIGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrKHRoaXMubWFuYWdlci5kZWJ1Zy5nZXRMb2dnZXIobmFtZSkpO1xufTtcblxuLyoqXG4gKiBTZXQgdGhlIElEIG9mIHRoZSBjdXJyZW50IGZyZWVkb20uanMgY29udGV4dC5cbiAqIEBtZXRob2Qgc2V0SWRcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge1N0cmluZ1tdfSBpZCBUaGUgbGluZWFnZSBvZiB0aGUgY3VycmVudCBjb250ZXh0LlxuICovXG5Db3JlX3VucHJpdmlsZWdlZC5wcm90b3R5cGUuc2V0SWQgPSBmdW5jdGlvbihpZCkge1xuICBDb3JlX3VucHJpdmlsZWdlZC5jb250ZXh0SWQgPSBpZDtcbn07XG5cbmV4cG9ydHMucHJvdmlkZXIgPSBDb3JlX3VucHJpdmlsZWdlZDtcbmV4cG9ydHMubmFtZSA9IFwiY29yZVwiO1xuZXhwb3J0cy5mbGFncyA9IHttb2R1bGU6IHRydWV9O1xuIiwiLypnbG9iYWxzIGRvY3VtZW50ICovXHJcbi8qanNsaW50IGluZGVudDoyLHNsb3BweTp0cnVlLG5vZGU6dHJ1ZSAqL1xyXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4uLy4uL3NyYy91dGlsJyk7XHJcbnZhciBQcm9taXNlQ29tcGF0ID0gcmVxdWlyZSgnZXM2LXByb21pc2UnKS5Qcm9taXNlO1xyXG5cclxuLyoqXHJcbiAqIEEgZnJlZWRvbS5qcyB2aWV3IGlzIHRoZSBpbnRlcmZhY2UgZm9yIHVzZXIgaW50ZXJhY3Rpb24uXHJcbiAqIEEgdmlldyBleGlzdHMgYXMgYW4gaUZyYW1lLCB3aGljaCBpcyBzaG93biB0byB0aGUgdXNlciBpbiBzb21lIHdheS5cclxuICogY29tbXVuaWNhdGlvbiBiZXR3ZWVuIHRoZSB2aWV3IGFuZCB0aGUgZnJlZWRvbS5qcyBtb2R1bGUgaXMgcGVyZm9ybWVkXHJcbiAqIHRocm91Z2ggdGhlIEhUTUw1IHBvc3RNZXNzYWdlIG1lY2hhbmlzbSwgd2hpY2ggdGhpcyBwcm92aWRlciB0cmFuc2xhdGVzXHJcbiAqIHRvIGZyZWVkb20uanMgbWVzc2FnZSBldmVudHMuXHJcbiAqIEBDbGFzcyBWaWV3X3VucHJpdmlsZWdlZFxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtWaWV3IFByb3ZpZGVyfSBwcm92aWRlclxyXG4gKiBAcGFyYW0ge3Byb3ZpZGVyOlByb3ZpZGVyLG1vZHVsZTpNb2R1bGV9IGNhcCBUaGUgaW5zdGFudGlhdG9yIG9mIHRoZSB2aWV3LlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBkaXNwYXRjaEV2ZW50IEZ1bmN0aW9uIHRvIGNhbGwgdG8gZW1pdCBldmVudHMuXHJcbiAqL1xyXG52YXIgQ29yZV9WaWV3ID0gZnVuY3Rpb24gKHByb3ZpZGVyLCBjYXAsIGRpc3BhdGNoRXZlbnQpIHtcclxuICB0aGlzLnByb3ZpZGVyID0gcHJvdmlkZXI7XHJcbiAgdGhpcy5kaXNwYXRjaEV2ZW50ID0gZGlzcGF0Y2hFdmVudDtcclxuICBzZXRUaW1lb3V0KGNhcC5wcm92aWRlci5vbkNsb3NlLmJpbmQoXHJcbiAgICBjYXAucHJvdmlkZXIsXHJcbiAgICB0aGlzLFxyXG4gICAgdGhpcy5jbG9zZS5iaW5kKHRoaXMsIGZ1bmN0aW9uICgpIHt9KVxyXG4gICksIDApO1xyXG4gIHRoaXMubW9kdWxlID0gY2FwLm1vZHVsZTtcclxuICB1dGlsLmhhbmRsZUV2ZW50cyh0aGlzKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgaXMgdGhlIGRlZmF1bHQgcHJvdmlkZXIgZm9yIGNvcmUudmlldywgdW5sZXNzIG92ZXJyaWRkZW4gYnkgY29udGV4dCBvclxyXG4gKiBhIHVzZXIgc3VwcGxpZWQgcHJvdmlkZXIuIFRoZSBpbnRlcmZhY2UgaXMgZG9jdW1lbnRlZCBhdDpcclxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZyZWVkb21qcy9mcmVlZG9tL3dpa2kvZnJlZWRvbS5qcy1WaWV3c1xyXG4gKlxyXG4gKiBHZW5lcmFsbHksIGEgdmlldyBwcm92aWRlciBjb25zaXN0cyBvZiAzIG1ldGhvZHM6XHJcbiAqIG9uT3BlbiBpcyBjYWxsZWQgd2hlbiBhIHZpZXcgc2hvdWxkIGJlIHNob3duLlxyXG4gKiAgICAgaWQgLSBpcyBhIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGlzIHZpZXcsIHVzZWQgb24gc3Vic2VxdWVudCBjYWxsc1xyXG4gKiAgICAgICAgICBmb3IgY29tbXVuaWNhdGlvbiBhbmQgdG8gZXZlbnR1YWxseSBjbG9zZSB0aGUgdmlldy5cclxuICogICAgIG5hbWUgLSBpcyB0aGUgbmFtZSBvZiB0aGUgdmlldyAoYXMgZGVmaW5lZCBpbiB0aGUgbWFuaWZlc3QpLFxyXG4gKiAgICAgICAgICAgIGluIG9yZGVyIHRvIHBsYWNlIGl0IGFwcHJvcHJpYXRlbHkuXHJcbiAqICAgICBwYWdlIC0gaXMgdGhlIHJlc29sdmVkIFVSTCB0byBvcGVuLlxyXG4gKiAgICAgcmVzb3VyY2VzIC0gaXMgYW4gYXJyYXkgb2YgcmVzb2x2ZWQgVVJMcyB3aGljaCBhcmUgcmVmZXJlbmNlZC5cclxuICogICAgIHBvc3RNZXNzYWdlIC0gaXMgYSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gbWVzc2FnZXMgYXJlIGVtaXR0ZWRcclxuICogICAgICAgICAgICAgICAgICAgYnkgdGhlIHdpbmRvdyBpbiB3aGljaCB0aGUgdmlldyBpcyBvcGVuZWQuXHJcbiAqIG9uT3BlbiByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IGNvbXBsZXRlcyB3aGVuIHRoZSB2aWV3IGlzIGxvYWRlZC5cclxuICogb25NZXNzYWdlIGlzIGNhbGxlZCB0byBzZW5kIGEgbWVzc2FnZSB0byBhbiBvcGVuIHZpZXcuXHJcbiAqICAgICBpZCAtIGlzIHRoZSB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIG9wZW4gdmlldy5cclxuICogICAgIG1lc3NhZ2UgLSBpcyB0aGUgbWVzc2FnZSB0byBwb3N0TWVzc2FnZSB0byB0aGUgdmlldydzIHdpbmRvdy5cclxuICogb25DbG9zZSBpcyBjYWxsZWQgdG8gY2xvc2UgYSB2aWV3LlxyXG4gKiAgICAgaWQgLSBpcyB0aGUgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSB2aWV3LlxyXG4gKi9cclxuQ29yZV9WaWV3LnByb3ZpZGVyID0ge1xyXG4gIGxpc3RlbmVyOiB1bmRlZmluZWQsXHJcbiAgYWN0aXZlOiB7fSxcclxuICBvbk9wZW46IGZ1bmN0aW9uIChpZCwgbmFtZSwgcGFnZSwgcmVzb3VyY2VzLCBwb3N0TWVzc2FnZSkge1xyXG4gICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmJvZHksXHJcbiAgICAgIHJvb3QsXHJcbiAgICAgIGZyYW1lO1xyXG4gICAgXHJcbiAgICBpZiAoIXRoaXMubGlzdGVuZXIpIHtcclxuICAgICAgdGhpcy5saXN0ZW5lciA9IGZ1bmN0aW9uIChtc2cpIHtcclxuICAgICAgICB2YXIgaTtcclxuICAgICAgICBmb3IgKGkgaW4gdGhpcy5hY3RpdmUpIHtcclxuICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZS5oYXNPd25Qcm9wZXJ0eShpKSAmJlxyXG4gICAgICAgICAgICAgIHRoaXMuYWN0aXZlW2ldLnNvdXJjZSA9PT0gbXNnLnNvdXJjZSkge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVtpXS5wb3N0TWVzc2FnZShtc2cuZGF0YSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LmJpbmQodGhpcyk7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5saXN0ZW5lciwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmlld3Mgb3BlbiBieSBkZWZhdWx0IGluIGFuIGVsZW1lbnQgd2l0aCB0aGVpciBJRCwgb3IgZmlsbCB0aGUgcGFnZVxyXG4gICAgLy8gb3RoZXJ3aXNlLlxyXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5hbWUpKSB7XHJcbiAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcm9vdC5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgcm9vdC5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcclxuICAgIHJvb3Quc3R5bGUuZGlzcGxheSA9IFwicmVsYXRpdmVcIjtcclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocm9vdCk7XHJcbiAgICBcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgIGZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcclxuICAgICAgZnJhbWUuc2V0QXR0cmlidXRlKFwic2FuZGJveFwiLCBcImFsbG93LXNjcmlwdHMgYWxsb3ctZm9ybXNcIik7XHJcbiAgICAgIGZyYW1lLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgIGZyYW1lLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgICBmcmFtZS5zdHlsZS5ib3JkZXIgPSBcIjBcIjtcclxuICAgICAgZnJhbWUuc3R5bGUuYmFja2dyb3VuZCA9IFwidHJhbnNwYXJlbnRcIjtcclxuICAgICAgZnJhbWUuc3JjID0gcGFnZTtcclxuICAgICAgZnJhbWUuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHJlc29sdmUsIHRydWUpO1xyXG4gICAgICBmcmFtZS5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIHJlamVjdCwgdHJ1ZSk7XHJcblxyXG4gICAgICByb290LmFwcGVuZENoaWxkKGZyYW1lKTtcclxuXHJcbiAgICAgIHRoaXMuYWN0aXZlW2lkXSA9IHtcclxuICAgICAgICBwb3N0TWVzc2FnZTogcG9zdE1lc3NhZ2UsXHJcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIsXHJcbiAgICAgICAgcm9vdDogcm9vdCxcclxuICAgICAgICBzb3VyY2U6IGZyYW1lLmNvbnRlbnRXaW5kb3dcclxuICAgICAgfTtcclxuICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgfSxcclxuICBvbk1lc3NhZ2U6IGZ1bmN0aW9uIChpZCwgbWVzc2FnZSkge1xyXG4gICAgdGhpcy5hY3RpdmVbaWRdLnNvdXJjZS5wb3N0TWVzc2FnZShtZXNzYWdlLCAnKicpO1xyXG4gIH0sXHJcbiAgb25DbG9zZTogZnVuY3Rpb24gKGlkKSB7XHJcbiAgICB0aGlzLmFjdGl2ZVtpZF0uY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuYWN0aXZlW2lkXS5yb290KTtcclxuICAgIGRlbGV0ZSB0aGlzLmFjdGl2ZVtpZF07XHJcbiAgICBcclxuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmFjdGl2ZSkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5saXN0ZW5lciwgdHJ1ZSk7XHJcbiAgICAgIHRoaXMubGlzdGVuZXIgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEFzayBmb3IgdGhpcyB2aWV3IHRvIG9wZW4gYSBzcGVjaWZpYyBsb2NhdGlvbiwgZWl0aGVyIGEgRmlsZSByZWxhdGl2ZSB0b1xyXG4gKiB0aGUgbG9hZGVyLCBvciBhbiBleHBsaWNpdCBjb2RlIGxvY2F0aW9uLlxyXG4gKiBAbWV0aG9kIHNob3dcclxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIGlkZW50aWZpZXIgb2YgdGhlIHZpZXcuXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbnRpbnVhdGlvbiBGdW5jdGlvbiB0byBjYWxsIHdoZW4gdmlldyBpcyBsb2FkZWQuXHJcbiAqL1xyXG5Db3JlX1ZpZXcucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbiAobmFtZSwgY29udGludWF0aW9uKSB7XHJcbiAgaWYgKHRoaXMuaWQpIHtcclxuICAgIHJldHVybiBjb250aW51YXRpb24odW5kZWZpbmVkLCB7XHJcbiAgICAgIGVycmNvZGU6ICdBTFJFQURZX09QRU4nLFxyXG4gICAgICBtZXNzYWdlOiAnQ2Fubm90IHNob3cgbXVsdGlwbGUgdmlld3MgdGhyb3VnaCBvbmUgaW5zdGFuY2UuJ1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHRoaXMuaWQgPSB1dGlsLmdldElkKCk7XHJcblxyXG4gIHZhciBjb25maWcgPSB0aGlzLm1vZHVsZS5tYW5pZmVzdC52aWV3cyxcclxuICAgIHRvUmVzb2x2ZSA9IFtdO1xyXG4gIGlmICghY29uZmlnIHx8ICFjb25maWdbbmFtZV0pIHtcclxuICAgIHJldHVybiBjb250aW51YXRpb24odW5kZWZpbmVkLCB7XHJcbiAgICAgIGVycmNvZGU6ICdOT05fRVhJU1RBTlQnLFxyXG4gICAgICBtZXNzYWdlOiAnVmlldyBub3QgZm91bmQ6ICcgKyBuYW1lXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGlmIChjb25maWdbbmFtZV0ubWFpbiAmJiBjb25maWdbbmFtZV0uZmlsZXMpIHtcclxuICAgIHRvUmVzb2x2ZSA9IGNvbmZpZ1tuYW1lXS5maWxlcy5jb25jYXQoY29uZmlnW25hbWVdLm1haW4pO1xyXG4gICAgUHJvbWlzZUNvbXBhdC5hbGwodG9SZXNvbHZlLm1hcChmdW5jdGlvbiAoZm5hbWUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMubW9kdWxlLnJlc291cmNlLmdldCh0aGlzLm1vZHVsZS5tYW5pZmVzdElkLCBmbmFtZSk7XHJcbiAgICB9LmJpbmQodGhpcykpKS50aGVuKGZ1bmN0aW9uIChmaWxlcykge1xyXG4gICAgICB0aGlzLnByb3ZpZGVyLm9uT3Blbih0aGlzLmlkLFxyXG4gICAgICAgICAgbmFtZSxcclxuICAgICAgICAgIGZpbGVzW2ZpbGVzLmxlbmd0aCAtIDFdLFxyXG4gICAgICAgICAgZmlsZXMsXHJcbiAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQuYmluZCh0aGlzLCAnbWVzc2FnZScpKS50aGVuKFxyXG4gICAgICAgIGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgICAgICAvLyBNYWtlIHN1cmUgY29udGludWF0aW9uIGlzIGNhbGxlZCB3aXRob3V0IGFuIGFyZ3VtZW50LlxyXG4gICAgICAgICAgYygpO1xyXG4gICAgICAgIH0uYmluZCh7fSwgY29udGludWF0aW9uKSxcclxuICAgICAgICBjb250aW51YXRpb24uYmluZCh7fSwgdW5kZWZpbmVkKVxyXG4gICAgICApO1xyXG4gICAgfS5iaW5kKHRoaXMpLCBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgIHRoaXMubW9kdWxlLmRlYnVnLmVycm9yKCdVbmFibGUgdG8gb3BlbiB2aWV3ICcgKyBuYW1lICsgJzogJywgZXJyKTtcclxuICAgICAgY29udGludWF0aW9uKHVuZGVmaW5lZCwge1xyXG4gICAgICAgIGVycmNvZGU6ICdWSUVXX01BTEZPUk1FRCcsXHJcbiAgICAgICAgbWVzc2FnZTogJ01hbGZvcm1lZCBWaWV3IERlY2xhcmF0aW9uOiAnICsgZXJyXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnRpbnVhdGlvbih1bmRlZmluZWQsIHtcclxuICAgICAgZXJyY29kZTogJ05PTl9FWElTVEFOVCcsXHJcbiAgICAgIG1lc3NhZ2U6ICdWaWV3IG5vdCBmb3VuZDogJyArIG5hbWVcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBpc1NlY3VyZSBkZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG1vZHVsZSBjYW4gaGF2ZSBjb25maWRlbmNlIHRoYXQgaXRzXHJcbiAqIGNvbW11bmljYXRpb24gd2l0aCBpdHMgdmlldyBjYW5ub3QgYmUgaW50ZXJjZXB0ZWQgYnkgYW4gdW50cnVzdGVkIDNyZCBwYXJ0eS5cclxuICogSW4gcHJhY3RpY2UsIHRoaXMgbWVhbnMgdGhhdCBpdHMgb2theSBmb3IgdGhlIHJ1bnRpbWUgdG8gaGF2ZSBhY2Nlc3MgdG8gdGhlXHJcbiAqIG1lc3NhZ2VzLCBhbmQgaWYgdGhlIGNvbnRleHQgaXMgYSB3ZWIgc2VydmVyIG9yIGEgYnJvd3NlciBleHRlbnNpb24gdGhlblxyXG4gKiB0aGF0IGNvbnRleHQgaXMgdHJ1c3RlZC4gSG93ZXZlciwgaWYgYSBwcm92aWRlciB3YW50cyB0byBhbGxvdyB0aGVpciBlLmcuXHJcbiAqIHNvY2lhbCBwcm92aWRlciB0byBiZSB1c2VkIG9uIGFyYml0cmFyeSB3ZWJzaXRlcywgdGhpcyBtZWNoYW5pc20gbWVhbnMgdGhhdFxyXG4gKiBpZiB0aGUgd2Vic2l0ZSB1c2VzIGEgdHJ1c3RlZCB2ZXJzaW9uIG9mIHRoZSBmcmVlZG9tLmpzIGxpYnJhcnksIHRoZW4gdGhlXHJcbiAqIG1vZHVsZSBjYW4gYmUgdXNlZC5cclxuICogQG1ldGhvZCBpc1NlY3VyZVxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gaWYgdGhlIGNoYW5uZWwgdG8gdGhlIHZpZXcgaXMgc2VjdXJlLlxyXG4gKi9cclxuQ29yZV9WaWV3LnByb3RvdHlwZS5pc1NlY3VyZSA9IGZ1bmN0aW9uIChjb250aW51YXRpb24pIHtcclxuICBjb250aW51YXRpb24oZmFsc2UpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFNlbmQgYSBtZXNzYWdlIHRvIGFuIG9wZW4gdmlldy5cclxuICogQG1ldGhvZCBwb3N0TWVzc2FnZVxyXG4gKi9cclxuQ29yZV9WaWV3LnByb3RvdHlwZS5wb3N0TWVzc2FnZSA9IGZ1bmN0aW9uIChtc2csIGNvbnRpbnVhdGlvbikge1xyXG4gIGlmICghdGhpcy5pZCkge1xyXG4gICAgcmV0dXJuIGNvbnRpbnVhdGlvbih1bmRlZmluZWQsIHtcclxuICAgICAgZXJyY29kZTogJ05PVF9PUEVOJyxcclxuICAgICAgbWVzc2FnZTogJ0Nhbm5vdCBwb3N0IG1lc3NhZ2UgdG8gdW5pbml0aWFsaXplZCB2aWV3LidcclxuICAgIH0pO1xyXG4gIH1cclxuICB0aGlzLnByb3ZpZGVyLm9uTWVzc2FnZSh0aGlzLmlkLCBtc2cpO1xyXG4gIGNvbnRpbnVhdGlvbigpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENsb3NlIGFuIGFjdGl2ZSB2aWV3LlxyXG4gKiBAbWV0aG9kIGNsb3NlXHJcbiAqL1xyXG5Db3JlX1ZpZXcucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKGNvbnRpbnVhdGlvbikge1xyXG4gIGlmICghdGhpcy5pZCkge1xyXG4gICAgcmV0dXJuIGNvbnRpbnVhdGlvbih1bmRlZmluZWQsIHtcclxuICAgICAgZXJyY29kZTogJ05PVF9PUEVOJyxcclxuICAgICAgbWVzc2FnZTogJ0Nhbm5vdCBjbG9zZSB1bmluaXRpYWxpemVkIHZpZXcuJ1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHRoaXMucHJvdmlkZXIub25DbG9zZSh0aGlzLmlkKTtcclxuICBkZWxldGUgdGhpcy5pZDtcclxuXHJcbiAgY29udGludWF0aW9uKCk7XHJcbn07XHJcblxyXG5cclxuLyoqXHJcbiAqIEFsbG93IGEgd2ViIHBhZ2UgdG8gcmVkZWZpbmUgYmVoYXZpb3IgZm9yIGhvdyB2aWV3cyBhcmUgc2hvd24uXHJcbiAqIEBtZXRob2QgcmVnaXN0ZXJcclxuICogQHN0YXRpY1xyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBQYWdlUHJvdmlkZXIgVGhlIGN1c3RvbSB2aWV3IGJlaGF2aW9yLlxyXG4gKi9cclxuQ29yZV9WaWV3LnJlZ2lzdGVyID0gZnVuY3Rpb24gKFBhZ2VQcm92aWRlcikge1xyXG4gIHZhciBwcm92aWRlciA9IFBhZ2VQcm92aWRlciA/IG5ldyBQYWdlUHJvdmlkZXIoKSA6IENvcmVfVmlldy5wcm92aWRlcjtcclxuICBleHBvcnRzLnByb3ZpZGVyID0gQ29yZV9WaWV3LmJpbmQodGhpcywgcHJvdmlkZXIpO1xyXG59O1xyXG5cclxuZXhwb3J0cy5wcm92aWRlciA9IENvcmVfVmlldy5iaW5kKHRoaXMsIENvcmVfVmlldy5wcm92aWRlcik7XHJcbmV4cG9ydHMubmFtZSA9ICdjb3JlLnZpZXcnO1xyXG5leHBvcnRzLnJlZ2lzdGVyID0gQ29yZV9WaWV3LnJlZ2lzdGVyO1xyXG5leHBvcnRzLmZsYWdzID0ge3Byb3ZpZGVyOiB0cnVlLCBtb2R1bGU6IHRydWV9O1xyXG4iLCIvKmdsb2JhbHMgV2ViU29ja2V0LCBBcnJheUJ1ZmZlciwgQmxvYiwgVWludDhBcnJheSwgY29uc29sZSAqL1xuLypqc2xpbnQgc2xvcHB5OnRydWUsIG5vZGU6dHJ1ZSAqL1xuXG52YXIgV1NIYW5kbGUgPSBudWxsO1xudmFyIG5vZGVTdHlsZSA9IGZhbHNlO1xuXG4vKipcbiAqIEEgV2ViU29ja2V0IGNvcmUgcHJvdmlkZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY2FwIENhcGFiaWxpdGllcyBmb3IgdGhlIHByb3ZpZGVyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBkaXNwYXRjaEV2ZW50IEZ1bmN0aW9uIHRvIGRpc3BhdGNoIGV2ZW50cy5cbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFJlbW90ZSBVUkwgdG8gY29ubmVjdCB3aXRoLlxuICogQHBhcmFtIHtTdHJpbmdbXX0gcHJvdG9jb2xzIFN1YlByb3RvY29scyB0byBvcGVuLlxuICogQHBhcmFtIHtXZWJTb2NrZXQ/fSBzb2NrZXQgQW4gYWx0ZXJuYXRpdmUgc29ja2V0IGNsYXNzIHRvIHVzZS5cbiAqL1xudmFyIFdTID0gZnVuY3Rpb24gKGNhcCwgZGlzcGF0Y2hFdmVudCwgdXJsLCBwcm90b2NvbHMsIHNvY2tldCkge1xuICB2YXIgV1NJbXBsZW1lbnRhdGlvbiA9IG51bGwsXG4gICAgZXJyb3I7XG4gIHRoaXMuaXNOb2RlID0gbm9kZVN0eWxlO1xuICBpZiAodHlwZW9mIHNvY2tldCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBXU0ltcGxlbWVudGF0aW9uID0gc29ja2V0O1xuICB9IGVsc2UgaWYgKFdTSGFuZGxlICE9PSBudWxsKSB7XG4gICAgV1NJbXBsZW1lbnRhdGlvbiA9IFdTSGFuZGxlO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBXZWJTb2NrZXQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgV1NJbXBsZW1lbnRhdGlvbiA9IFdlYlNvY2tldDtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmVycm9yKCdQbGF0Zm9ybSBkb2VzIG5vdCBzdXBwb3J0IFdlYlNvY2tldCcpO1xuICB9XG5cbiAgdGhpcy5kaXNwYXRjaEV2ZW50ID0gZGlzcGF0Y2hFdmVudDtcbiAgdHJ5IHtcbiAgICBpZiAocHJvdG9jb2xzKSB7XG4gICAgICB0aGlzLndlYnNvY2tldCA9IG5ldyBXU0ltcGxlbWVudGF0aW9uKHVybCwgcHJvdG9jb2xzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy53ZWJzb2NrZXQgPSBuZXcgV1NJbXBsZW1lbnRhdGlvbih1cmwpO1xuICAgIH1cbiAgICB0aGlzLndlYnNvY2tldC5iaW5hcnlUeXBlID0gJ2FycmF5YnVmZmVyJztcbiAgfSBjYXRjaCAoZSkge1xuICAgIGVycm9yID0ge307XG4gICAgaWYgKGUgaW5zdGFuY2VvZiBTeW50YXhFcnJvcikge1xuICAgICAgZXJyb3IuZXJyY29kZSA9ICdTWU5UQVgnO1xuICAgIH0gZWxzZSB7XG4gICAgICBlcnJvci5lcnJjb2RlID0gZS5uYW1lO1xuICAgIH1cbiAgICBlcnJvci5tZXNzYWdlID0gZS5tZXNzYWdlO1xuICAgIGRpc3BhdGNoRXZlbnQoJ29uRXJyb3InLCBlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHRoaXMuaXNOb2RlKSB7XG4gICAgdGhpcy53ZWJzb2NrZXQub24oJ21lc3NhZ2UnLCB0aGlzLm9uTWVzc2FnZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLndlYnNvY2tldC5vbignb3BlbicsIHRoaXMub25PcGVuLmJpbmQodGhpcykpO1xuICAgIC8vIG5vZGUuanMgd2Vic29ja2V0IGltcGxlbWVudGF0aW9uIG5vdCBjb21wbGlhbnRcbiAgICB0aGlzLndlYnNvY2tldC5vbignY2xvc2UnLCB0aGlzLm9uQ2xvc2UuYmluZCh0aGlzLCB7XG4gICAgICBjb2RlOiAwLFxuICAgICAgcmVhc29uOiAnVU5LTk9XTicsXG4gICAgICB3YXNDbGVhbjogdHJ1ZVxuICAgIH0pKTtcbiAgICB0aGlzLndlYnNvY2tldC5vbignZXJyb3InLCB0aGlzLm9uRXJyb3IuYmluZCh0aGlzKSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy53ZWJzb2NrZXQub25vcGVuID0gdGhpcy5vbk9wZW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLndlYnNvY2tldC5vbmNsb3NlID0gdGhpcy5vbkNsb3NlLmJpbmQodGhpcyk7XG4gICAgdGhpcy53ZWJzb2NrZXQub25tZXNzYWdlID0gdGhpcy5vbk1lc3NhZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLndlYnNvY2tldC5vbmVycm9yID0gdGhpcy5vbkVycm9yLmJpbmQodGhpcyk7XG4gIH1cbn07XG5cbldTLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKGRhdGEsIGNvbnRpbnVhdGlvbikge1xuICB2YXIgdG9TZW5kID0gZGF0YS50ZXh0IHx8IGRhdGEuYmluYXJ5IHx8IGRhdGEuYnVmZmVyLFxuICAgIGVycmNvZGUsXG4gICAgbWVzc2FnZTtcblxuICBpZiAodG9TZW5kKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIEZvciBub2RlLmpzLCB3ZSBoYXZlIHRvIGRvIHdlaXJkIGJ1ZmZlciBzdHVmZlxuICAgICAgaWYgKHRoaXMuaXNOb2RlICYmIHRvU2VuZCBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgICAgIHRoaXMud2Vic29ja2V0LnNlbmQoXG4gICAgICAgICAgbmV3IFVpbnQ4QXJyYXkodG9TZW5kKSxcbiAgICAgICAgICB7IGJpbmFyeTogdHJ1ZSB9LFxuICAgICAgICAgIHRoaXMub25FcnJvci5iaW5kKHRoaXMpXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLndlYnNvY2tldC5zZW5kKHRvU2VuZCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKGUgaW5zdGFuY2VvZiBTeW50YXhFcnJvcikge1xuICAgICAgICBlcnJjb2RlID0gXCJTWU5UQVhcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVycmNvZGUgPSBcIklOVkFMSURfU1RBVEVcIjtcbiAgICAgIH1cbiAgICAgIG1lc3NhZ2UgPSBlLm1lc3NhZ2U7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGVycmNvZGUgPSBcIkJBRF9TRU5EXCI7XG4gICAgbWVzc2FnZSA9IFwiTm8gdGV4dCwgYmluYXJ5LCBvciBidWZmZXIgZGF0YSBmb3VuZC5cIjtcbiAgfVxuXG4gIGlmIChlcnJjb2RlKSB7XG4gICAgY29udGludWF0aW9uKHVuZGVmaW5lZCwge1xuICAgICAgZXJyY29kZTogZXJyY29kZSxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjb250aW51YXRpb24oKTtcbiAgfVxufTtcblxuV1MucHJvdG90eXBlLmdldFJlYWR5U3RhdGUgPSBmdW5jdGlvbiAoY29udGludWF0aW9uKSB7XG4gIGNvbnRpbnVhdGlvbih0aGlzLndlYnNvY2tldC5yZWFkeVN0YXRlKTtcbn07XG5cbldTLnByb3RvdHlwZS5nZXRCdWZmZXJlZEFtb3VudCA9IGZ1bmN0aW9uIChjb250aW51YXRpb24pIHtcbiAgY29udGludWF0aW9uKHRoaXMud2Vic29ja2V0LmJ1ZmZlcmVkQW1vdW50KTtcbn07XG5cbldTLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uIChjb2RlLCByZWFzb24sIGNvbnRpbnVhdGlvbikge1xuICB0cnkge1xuICAgIGlmIChjb2RlICYmIHJlYXNvbikge1xuICAgICAgdGhpcy53ZWJzb2NrZXQuY2xvc2UoY29kZSwgcmVhc29uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy53ZWJzb2NrZXQuY2xvc2UoKTtcbiAgICB9XG4gICAgY29udGludWF0aW9uKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB2YXIgZXJyb3JDb2RlO1xuICAgIGlmIChlIGluc3RhbmNlb2YgU3ludGF4RXJyb3IpIHtcbiAgICAgIGVycm9yQ29kZSA9IFwiU1lOVEFYXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVycm9yQ29kZSA9IFwiSU5WQUxJRF9BQ0NFU1NcIjtcbiAgICB9XG4gICAgY29udGludWF0aW9uKHVuZGVmaW5lZCwge1xuICAgICAgZXJyY29kZTogZXJyb3JDb2RlLFxuICAgICAgbWVzc2FnZTogZS5tZXNzYWdlXG4gICAgfSk7XG4gIH1cbn07XG5cbldTLnByb3RvdHlwZS5vbk9wZW4gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbk9wZW4nKTtcbn07XG5cbldTLnByb3RvdHlwZS5vbk1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnQsIGZsYWdzKSB7XG4gIHZhciBkYXRhID0ge307XG4gIGlmICh0aGlzLmlzTm9kZSAmJiBmbGFncyAmJiBmbGFncy5iaW5hcnkpIHtcbiAgICBkYXRhLmJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KGV2ZW50KS5idWZmZXI7XG4gIH0gZWxzZSBpZiAodGhpcy5pc05vZGUpIHtcbiAgICBkYXRhLnRleHQgPSBldmVudDtcbiAgfSBlbHNlIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIGV2ZW50LmRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgIGRhdGEuYnVmZmVyID0gZXZlbnQuZGF0YTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgQmxvYiAhPT0gJ3VuZGVmaW5lZCcgJiYgZXZlbnQuZGF0YSBpbnN0YW5jZW9mIEJsb2IpIHtcbiAgICBkYXRhLmJpbmFyeSA9IGV2ZW50LmRhdGE7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV2ZW50LmRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgZGF0YS50ZXh0ID0gZXZlbnQuZGF0YTtcbiAgfVxuICB0aGlzLmRpc3BhdGNoRXZlbnQoJ29uTWVzc2FnZScsIGRhdGEpO1xufTtcblxuV1MucHJvdG90eXBlLm9uRXJyb3IgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgLy8gTm90aGluZyB0byBwYXNzIG9uXG4gIC8vIFNlZTogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTg4MDQyOTgvMzAwNTM5XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25FcnJvcicpO1xufTtcblxuV1MucHJvdG90eXBlLm9uQ2xvc2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbkNsb3NlJyxcbiAgICAgICAgICAgICAgICAgICAgIHtjb2RlOiBldmVudC5jb2RlLFxuICAgICAgICAgICAgICAgICAgICAgIHJlYXNvbjogZXZlbnQucmVhc29uLFxuICAgICAgICAgICAgICAgICAgICAgIHdhc0NsZWFuOiBldmVudC53YXNDbGVhbn0pO1xufTtcblxuZXhwb3J0cy5wcm92aWRlciA9IFdTO1xuZXhwb3J0cy5uYW1lID0gJ2NvcmUud2Vic29ja2V0JztcbmV4cG9ydHMuc2V0U29ja2V0ID0gZnVuY3Rpb24gKGltcGwsIGlzTm9kZSkge1xuICBXU0hhbmRsZSA9IGltcGw7XG4gIG5vZGVTdHlsZSA9IGlzTm9kZTtcbn07XG4iLCIvKmpzaGludCBub2RlOnRydWUqL1xuLypnbG9iYWwgKi9cbnZhciBQcm9taXNlQ29tcGF0ID0gcmVxdWlyZSgnZXM2LXByb21pc2UnKS5Qcm9taXNlO1xuXG52YXIgWGhyUHJvdmlkZXIgPSBmdW5jdGlvbihjYXAsIGRpc3BhdGNoRXZlbnQpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHRoaXMuX2Rpc3BhdGNoRXZlbnQgPSBkaXNwYXRjaEV2ZW50O1xuICB0aGlzLl94aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICBzZXRUaW1lb3V0KGNhcC5wcm92aWRlci5vbkNsb3NlLmJpbmQoXG4gICAgY2FwLnByb3ZpZGVyLFxuICAgIHRoaXMsXG4gICAgdGhpcy5hYm9ydC5iaW5kKHRoaXMpXG4gICksIDApO1xuXG4gIHRoaXMuX2V2ZW50cyA9IFtcbiAgICBcImxvYWRzdGFydFwiLFxuICAgIFwicHJvZ3Jlc3NcIixcbiAgICBcImFib3J0XCIsXG4gICAgXCJlcnJvclwiLFxuICAgIFwibG9hZFwiLFxuICAgIFwidGltZW91dFwiLFxuICAgIFwibG9hZGVuZFwiLFxuICAgIFwicmVhZHlzdGF0ZWNoYW5nZVwiXG4gIF07XG4gIHRoaXMuX3NldHVwTGlzdGVuZXJzKCk7XG5cbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24obWV0aG9kLCB1cmwsIGFzeW5jLCB1c2VyLCBwYXNzd29yZCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgaWYgKHR5cGVvZiBhc3luYyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhc3luYyAhPT0gdHJ1ZSkge1xuICAgIHJldHVybiBQcm9taXNlQ29tcGF0LnJlamVjdCh7XG4gICAgICBlcnJjb2RlOiBcIkludmFsaWRBY2Nlc3NFcnJvclwiLFxuICAgICAgbWVzc2FnZTogXCJhc3luYyBzaG91bGQgYWx3YXlzIGJlIHNldCB0byB0cnVlXCJcbiAgICB9KTtcbiAgfVxuXG4gIC8vIEZvcmNlIGFzeW5jIHRvIGJlIHRydWUuIHVuZGVmaW5lZCBjYW4gbGVhZCB0byBhc3luYz1mYWxzZSBpbiBDaHJvbWUgcGFja2FnZWQgYXBwc1xuICB0aGlzLl94aHIub3BlbihtZXRob2QsIHVybCwgdHJ1ZSwgdXNlciwgcGFzc3dvcmQpO1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKCk7XG59O1xuXG5YaHJQcm92aWRlci5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIGlmICghKGRhdGEgaW5zdGFuY2VvZiBPYmplY3QpKSB7XG4gICAgdGhpcy5feGhyLnNlbmQoKTtcbiAgfSBlbHNlIGlmIChkYXRhLmhhc093blByb3BlcnR5KFwic3RyaW5nXCIpKSB7XG4gICAgdGhpcy5feGhyLnNlbmQoZGF0YS5zdHJpbmcpO1xuICB9IGVsc2UgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoXCJidWZmZXJcIikpIHtcbiAgICB0aGlzLl94aHIuc2VuZChkYXRhLmJ1ZmZlcik7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5feGhyLnNlbmQoKTtcbiAgfVxuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKCk7XG59O1xuXG5YaHJQcm92aWRlci5wcm90b3R5cGUuYWJvcnQgPSBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHRoaXMuX3hoci5hYm9ydCgpO1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKCk7XG59O1xuXG5YaHJQcm92aWRlci5wcm90b3R5cGUuZ2V0UmVzcG9uc2VIZWFkZXIgPSBmdW5jdGlvbihoZWFkZXIpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUodGhpcy5feGhyLmdldFJlc3BvbnNlSGVhZGVyKGhlYWRlcikpO1xufTtcblxuWGhyUHJvdmlkZXIucHJvdG90eXBlLmdldEFsbFJlc3BvbnNlSGVhZGVycyA9IGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSh0aGlzLl94aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpO1xufTtcblxuWGhyUHJvdmlkZXIucHJvdG90eXBlLnNldFJlcXVlc3RIZWFkZXIgPSBmdW5jdGlvbihoZWFkZXIsIHZhbHVlKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICB0aGlzLl94aHIuc2V0UmVxdWVzdEhlYWRlcihoZWFkZXIsIHZhbHVlKTtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSgpO1xufTtcblxuWGhyUHJvdmlkZXIucHJvdG90eXBlLm92ZXJyaWRlTWltZVR5cGUgPSBmdW5jdGlvbihtaW1lKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICB0aGlzLl94aHIub3ZlcnJpZGVNaW1lVHlwZShtaW1lKTtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSgpO1xufTtcblxuWGhyUHJvdmlkZXIucHJvdG90eXBlLmdldFJlYWR5U3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUodGhpcy5feGhyLnJlYWR5U3RhdGUpO1xufTtcblxuWGhyUHJvdmlkZXIucHJvdG90eXBlLmdldFJlc3BvbnNlID0gZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICBpZiAodGhpcy5feGhyLnJlc3BvbnNlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZShudWxsKTtcbiAgfSBlbHNlIGlmICh0aGlzLl94aHIucmVzcG9uc2VUeXBlID09PSBcInRleHRcIiB8fCB0aGlzLl94aHIucmVzcG9uc2VUeXBlID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSh7IHN0cmluZzogdGhpcy5feGhyLnJlc3BvbnNlIH0pO1xuICB9IGVsc2UgaWYgKHRoaXMuX3hoci5yZXNwb25zZVR5cGUgPT09IFwiYXJyYXlidWZmZXJcIikge1xuICAgIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUoeyBidWZmZXI6IHRoaXMuX3hoci5yZXNwb25zZSB9KTtcbiAgfSBlbHNlIGlmICh0aGlzLl94aHIucmVzcG9uc2VUeXBlID09PSBcImpzb25cIikge1xuICAgIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUoeyBvYmplY3Q6IHRoaXMuX3hoci5yZXNwb25zZSB9KTtcbiAgfVxuXG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlamVjdChcImNvcmUueGhyIGNhbm5vdCBkZXRlcm1pbmUgdHlwZSBvZiByZXNwb25zZVwiKTtcbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5nZXRSZXNwb25zZVRleHQgPSBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUodGhpcy5feGhyLnJlc3BvbnNlVGV4dCk7XG59O1xuXG5YaHJQcm92aWRlci5wcm90b3R5cGUuZ2V0UmVzcG9uc2VVUkwgPSBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUodGhpcy5feGhyLnJlc3BvbnNlVVJMKTtcbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5nZXRSZXNwb25zZVR5cGUgPSBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUodGhpcy5feGhyLnJlc3BvbnNlVHlwZSk7XG59O1xuXG5YaHJQcm92aWRlci5wcm90b3R5cGUuc2V0UmVzcG9uc2VUeXBlID0gZnVuY3Rpb24odHlwZSkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgdGhpcy5feGhyLnJlc3BvbnNlVHlwZSA9IHR5cGU7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUoKTtcbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5nZXRTdGF0dXMgPSBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUodGhpcy5feGhyLnN0YXR1cyk7XG59O1xuXG5YaHJQcm92aWRlci5wcm90b3R5cGUuZ2V0U3RhdHVzVGV4dCA9IGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSh0aGlzLl94aHIuc3RhdHVzVGV4dCk7XG59O1xuXG5YaHJQcm92aWRlci5wcm90b3R5cGUuZ2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSh0aGlzLl94aHIudGltZW91dCk7XG59O1xuXG5YaHJQcm92aWRlci5wcm90b3R5cGUuc2V0VGltZW91dCA9IGZ1bmN0aW9uKHRpbWVvdXQpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHRoaXMuX3hoci50aW1lb3V0ID0gdGltZW91dDtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSgpO1xufTtcblxuWGhyUHJvdmlkZXIucHJvdG90eXBlLmdldFdpdGhDcmVkZW50aWFscyA9IGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSh0aGlzLl94aHIud2l0aENyZWRlbnRpYWxzKTtcbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5zZXRXaXRoQ3JlZGVudGlhbHMgPSBmdW5jdGlvbih3Yykge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgdGhpcy5feGhyLndpdGhDcmVkZW50aWFscyA9IHdjO1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKCk7XG59O1xuXG5YaHJQcm92aWRlci5wcm90b3R5cGUuX3NldHVwTGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICAvLyBEb3dubG9hZCBldmVudHNcbiAgdGhpcy5fZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgIHRoaXMuX3hoci5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZnVuY3Rpb24oZXZlbnROYW1lLCBldmVudCkge1xuICAgICAgdGhpcy5fZGlzcGF0Y2hFdmVudChcIm9uXCIgKyBldmVudE5hbWUsIGV2ZW50KTtcbiAgICB9LmJpbmQodGhpcywgZXZlbnROYW1lKSwgZmFsc2UpO1xuICB9LmJpbmQodGhpcykpO1xuXG4gIC8vIFVwbG9hZCBldmVudHNcbiAgdGhpcy5fZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgIHRoaXMuX3hoci51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGZ1bmN0aW9uKGV2ZW50TmFtZSwgZXZlbnQpIHtcbiAgICAgIHRoaXMuX2Rpc3BhdGNoRXZlbnQoXCJvbnVwbG9hZFwiICsgZXZlbnROYW1lLCBldmVudCk7XG4gICAgfS5iaW5kKHRoaXMsIGV2ZW50TmFtZSksIGZhbHNlKTtcbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cbmV4cG9ydHMubmFtZSA9IFwiY29yZS54aHJcIjtcbmV4cG9ydHMucHJvdmlkZXIgPSBYaHJQcm92aWRlcjtcbmV4cG9ydHMuc3R5bGUgPSBcInByb3ZpZGVQcm9taXNlc1wiO1xuZXhwb3J0cy5mbGFncyA9IHsgcHJvdmlkZXI6IHRydWUgfTtcbiIsIi8qanNsaW50IGluZGVudDoyLGJyb3dzZXI6dHJ1ZSwgbm9kZTp0cnVlICovXG52YXIgUHJvbWlzZUNvbXBhdCA9IHJlcXVpcmUoJ2VzNi1wcm9taXNlJykuUHJvbWlzZTtcblxudmFyIG9BdXRoUmVkaXJlY3RJZCA9ICdmcmVlZG9tLm9hdXRoLnJlZGlyZWN0LmhhbmRsZXInO1xuXG52YXIgbG9hZGVkT25TdGFydHVwID0gZmFsc2U7XG4vKipcbiAqIElmIHRoZXJlIGlzIHJlZGlyZWN0aW9uIGJhY2sgdG8gdGhlIHBhZ2UsIGFuZCBvQXV0aFJlZGlyZWN0SUQgaXMgc2V0LFxuICogdGhlbiByZXBvcnQgdGhlIGF1dGggYW5kIGNsb3NlIHRoZSB3aW5kb3cuXG4gKi9cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cgJiYgd2luZG93LmxvY2F0aW9uICYmXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgbG9hZGVkT25TdGFydHVwID0gdHJ1ZTtcbiAgfSwgdHJ1ZSk7XG5cbiAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UgJiZcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2Yob0F1dGhSZWRpcmVjdElkKSA+IDApIHtcbiAgICAvLyBUaGlzIHdpbGwgdHJpZ2dlciBhICdzdG9yYWdlJyBldmVudCBvbiB0aGUgd2luZG93LiBTZWUgc3RvcmFnZUxpc3RlbmVyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKG9BdXRoUmVkaXJlY3RJZCwgbmV3IERhdGUoKSk7XG4gICAgd2luZG93LmNsb3NlKCk7XG4gIH1cbn1cblxudmFyIExvY2FsUGFnZUF1dGggPSBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHRoaXMubGlzdGVuZXJzID0ge307XG59O1xuXG4vKipcbiAqIEluZGljYXRlIHRoZSBpbnRlbnRpb24gdG8gaW5pdGlhdGUgYW4gb0F1dGggZmxvdywgYWxsb3dpbmcgYW4gYXBwcm9wcmlhdGVcbiAqIG9BdXRoIHByb3ZpZGVyIHRvIGJlZ2luIG1vbml0b3JpbmcgZm9yIHJlZGlyZWN0aW9uLlxuICpcbiAqIEBtZXRob2QgaW5pdGlhdGVPQXV0aFxuICogQHBhcmFtIHtzdHJpbmdbXX0gcmVkaXJlY3RVUklzIC0gb0F1dGggcmVkaXJlY3Rpb24gVVJJcyByZWdpc3RlcmVkIHdpdGggdGhlXG4gKiAgICAgcHJvdmlkZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb250aW51YXRpb24gLSBGdW5jdGlvbiB0byBjYWxsIHdoZW4gY29tcGxldGVcbiAqICAgIEV4cGVjdGVkIHRvIHNlZSBhIHZhbHVlIG9mIHNjaGVtYToge3tyZWRpcmVjdDpTdHJpbmcsIHN0YXRlOlN0cmluZ319XG4gKiAgICB3aGVyZSAncmVkaXJlY3QnIGlzIHRoZSBjaG9zZW4gcmVkaXJlY3QgVVJJXG4gKiAgICBhbmQgJ3N0YXRlJyBpcyB0aGUgc3RhdGUgdG8gcGFzcyB0byB0aGUgVVJJIG9uIGNvbXBsZXRpb24gb2Ygb0F1dGhcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgY2FuIGhhbmRsZSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbkxvY2FsUGFnZUF1dGgucHJvdG90eXBlLmluaXRpYXRlT0F1dGggPSBmdW5jdGlvbihyZWRpcmVjdFVSSXMsIGNvbnRpbnVhdGlvbikge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdyAmJiBsb2FkZWRPblN0YXJ0dXApIHtcbiAgICB2YXIgaGVyZSA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0ICtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIGlmIChyZWRpcmVjdFVSSXMuaW5kZXhPZihoZXJlKSA+IC0xKSB7XG4gICAgICBjb250aW51YXRpb24oe1xuICAgICAgICByZWRpcmVjdDogaGVyZSxcbiAgICAgICAgc3RhdGU6IG9BdXRoUmVkaXJlY3RJZCArIE1hdGgucmFuZG9tKClcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBvQXV0aCBjbGllbnQtc2lkZSBmbG93IC0gbGF1bmNoIHRoZSBwcm92aWRlZCBVUkxcbiAqIFRoaXMgbXVzdCBiZSBjYWxsZWQgYWZ0ZXIgaW5pdGlhdGVPQXV0aCB3aXRoIHRoZSByZXR1cm5lZCBzdGF0ZSBvYmplY3RcbiAqXG4gKiBAbWV0aG9kIGxhdW5jaEF1dGhGbG93XG4gKiBAcGFyYW0ge1N0cmluZ30gYXV0aFVybCAtIFRoZSBVUkwgdGhhdCBpbml0aWF0ZXMgdGhlIGF1dGggZmxvdy5cbiAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIHN0cmluZz59IHN0YXRlT2JqIC0gVGhlIHJldHVybiB2YWx1ZSBmcm9tIGluaXRpYXRlT0F1dGhcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbnRpbnVhdGlvbiAtIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBjb21wbGV0ZVxuICogICAgRXhwZWN0ZWQgdG8gc2VlIGEgU3RyaW5nIHZhbHVlIHRoYXQgaXMgdGhlIHJlc3BvbnNlIFVybCBjb250YWluaW5nIHRoZSBhY2Nlc3MgdG9rZW5cbiAqL1xuTG9jYWxQYWdlQXV0aC5wcm90b3R5cGUubGF1bmNoQXV0aEZsb3cgPSBmdW5jdGlvbihhdXRoVXJsLCBzdGF0ZU9iaiwgY29udGludWF0aW9uKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICB2YXIgbGlzdGVuZXIgPSB0aGlzLnN0b3JhZ2VMaXN0ZW5lci5iaW5kKHRoaXMsIGNvbnRpbnVhdGlvbiwgc3RhdGVPYmopO1xuICB0aGlzLmxpc3RlbmVyc1tzdGF0ZU9iai5zdGF0ZV0gPSBsaXN0ZW5lcjtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzdG9yYWdlXCIsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIFN0YXJ0ICdlciB1cFxuICB3aW5kb3cub3BlbihhdXRoVXJsKTtcbn07XG5cbi8qKlxuICogSGFuZGxlciBmb3Igc3RvcmFnZSBldmVudHMsIHdoaWNoIHJlbGF5cyB0aGVtIHRvIHdhaXRpbmcgY2xpZW50cy5cbiAqIEZvciB0aGUgc2NoZW1hIG9mIHRoZSBzdG9yYWdlIG1zZywgc2VlOlxuICogaHR0cDovL3R1dG9yaWFscy5qZW5rb3YuY29tL2h0bWw1L2xvY2FsLXN0b3JhZ2UuaHRtbCNzdG9yYWdlLWV2ZW50c1xuICogQHBhcmFtIHtGdW5jdGlvbn0gY29udGludWF0aW9uIGZ1bmN0aW9uIHRvIGNhbGwgd2l0aCByZXN1bHRcbiAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIHN0cmluZz59IHN0YXRlT2JqIHRoZSByZXR1cm4gdmFsdWUgZnJvbSBpbml0aWF0ZU9BdXRoXG4gKiBAcGFyYW0ge09iamVjdH0gbXNnIHN0b3JhZ2UgZXZlbnRcbiAqL1xuTG9jYWxQYWdlQXV0aC5wcm90b3R5cGUuc3RvcmFnZUxpc3RlbmVyID0gZnVuY3Rpb24oY29udGludWF0aW9uLCBzdGF0ZU9iaiwgbXNnKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgaWYgKG1zZy51cmwuaW5kZXhPZihzdGF0ZU9iai5zdGF0ZSkgPiAtMSkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic3RvcmFnZVwiLCB0aGlzLmxpc3RlbmVyc1tzdGF0ZU9iai5zdGF0ZV0sIGZhbHNlKTtcbiAgICBkZWxldGUgdGhpcy5saXN0ZW5lcnNbc3RhdGVPYmouc3RhdGVdO1xuICAgIGNvbnRpbnVhdGlvbihtc2cudXJsKTtcbiAgfVxufTtcblxuLyoqXG4gKiBJZiB3ZSBoYXZlIGEgbG9jYWwgZG9tYWluLCBhbmQgZnJlZWRvbS5qcyBpcyBsb2FkZWQgYXQgc3RhcnR1cCwgd2UgY2FuIHVzZVxuICogdGhlIGxvY2FsIHBhZ2UgYXMgYSByZWRpcmVjdCBVUkkuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gTG9jYWxQYWdlQXV0aDtcbiIsIihmdW5jdGlvbiAoZ2xvYmFsKXtcbi8qanNsaW50IGluZGVudDoyLGJyb3dzZXI6dHJ1ZSwgbm9kZTp0cnVlICovXG52YXIgUHJvbWlzZUNvbXBhdCA9IHJlcXVpcmUoJ2VzNi1wcm9taXNlJykuUHJvbWlzZTtcblxudmFyIG9BdXRoUmVkaXJlY3RJZCA9ICdmcmVlZG9tLm9hdXRoLnJlZGlyZWN0LmhhbmRsZXInO1xuXG5mdW5jdGlvbiBSZW1vdGVQYWdlQXV0aCgpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHRoaXMubGlzdGVuZXJzID0ge307XG59XG5cbi8qKlxuICogSW5kaWNhdGUgdGhlIGludGVudGlvbiB0byBpbml0aWF0ZSBhbiBvQXV0aCBmbG93LCBhbGxvd2luZyBhbiBhcHByb3ByaWF0ZVxuICogb0F1dGggcHJvdmlkZXIgdG8gYmVnaW4gbW9uaXRvcmluZyBmb3IgcmVkaXJlY3Rpb24uXG4gKlxuICogQG1ldGhvZCBpbml0aWF0ZU9BdXRoXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSByZWRpcmVjdFVSSXMgLSBvQXV0aCByZWRpcmVjdGlvbiBVUklzIHJlZ2lzdGVyZWQgd2l0aCB0aGVcbiAqICAgICBwcm92aWRlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbnRpbnVhdGlvbiAtIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBjb21wbGV0ZVxuICogICAgRXhwZWN0ZWQgdG8gc2VlIGEgdmFsdWUgb2Ygc2NoZW1hOiB7e3JlZGlyZWN0OlN0cmluZywgc3RhdGU6U3RyaW5nfX1cbiAqICAgIHdoZXJlICdyZWRpcmVjdCcgaXMgdGhlIGNob3NlbiByZWRpcmVjdCBVUklcbiAqICAgIGFuZCAnc3RhdGUnIGlzIHRoZSBzdGF0ZSB0byBwYXNzIHRvIHRoZSBVUkkgb24gY29tcGxldGlvbiBvZiBvQXV0aFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBjYW4gaGFuZGxlLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuUmVtb3RlUGFnZUF1dGgucHJvdG90eXBlLmluaXRpYXRlT0F1dGggPSBmdW5jdGlvbihyZWRpcmVjdFVSSXMsIGNvbnRpbnVhdGlvbikge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnICYmIGdsb2JhbCAmJiBnbG9iYWwuZG9jdW1lbnQpIHtcbiAgICBmb3IgKHZhciBpPTA7IGk8cmVkaXJlY3RVUklzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBUT0RPOiByZW1vdmUgcmVzdHJpY3Rpb24gb24gVVJMIHBhdHRlcm4gbWF0Y2guXG4gICAgICBpZiAoKHJlZGlyZWN0VVJJc1tpXS5pbmRleE9mKCdodHRwOi8vJykgPT09IDAgfHxcbiAgICAgICAgICByZWRpcmVjdFVSSXNbaV0uaW5kZXhPZignaHR0cHM6Ly8nKSA9PT0gMCkgJiZcbiAgICAgICAgICByZWRpcmVjdFVSSXNbaV0uaW5kZXhPZignb2F1dGgtcmVsYXkuaHRtbCcpID4gMCkge1xuICAgICAgICBjb250aW51YXRpb24oe1xuICAgICAgICAgIHJlZGlyZWN0OiByZWRpcmVjdFVSSXNbaV0sXG4gICAgICAgICAgc3RhdGU6IG9BdXRoUmVkaXJlY3RJZCArIE1hdGgucmFuZG9tKClcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIG9BdXRoIGNsaWVudC1zaWRlIGZsb3cgLSBsYXVuY2ggdGhlIHByb3ZpZGVkIFVSTFxuICogVGhpcyBtdXN0IGJlIGNhbGxlZCBhZnRlciBpbml0aWF0ZU9BdXRoIHdpdGggdGhlIHJldHVybmVkIHN0YXRlIG9iamVjdFxuICpcbiAqIEBtZXRob2QgbGF1bmNoQXV0aEZsb3dcbiAqIEBwYXJhbSB7U3RyaW5nfSBhdXRoVXJsIC0gVGhlIFVSTCB0aGF0IGluaXRpYXRlcyB0aGUgYXV0aCBmbG93LlxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgc3RyaW5nPn0gc3RhdGVPYmogLSBUaGUgcmV0dXJuIHZhbHVlIGZyb20gaW5pdGlhdGVPQXV0aFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29udGludWF0aW9uIC0gRnVuY3Rpb24gdG8gY2FsbCB3aGVuIGNvbXBsZXRlXG4gKiAgICBFeHBlY3RlZCB0byBzZWUgYSBTdHJpbmcgdmFsdWUgdGhhdCBpcyB0aGUgcmVzcG9uc2UgVXJsIGNvbnRhaW5pbmcgdGhlIGFjY2VzcyB0b2tlblxuICovXG5SZW1vdGVQYWdlQXV0aC5wcm90b3R5cGUubGF1bmNoQXV0aEZsb3cgPSBmdW5jdGlvbihhdXRoVXJsLCBzdGF0ZU9iaiwgY29udGludWF0aW9uKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICB2YXIgZnJhbWUgPSBnbG9iYWwuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gIGZyYW1lLnNyYyA9IHN0YXRlT2JqLnJlZGlyZWN0O1xuICBmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gIGdsb2JhbC5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZyYW1lKTtcbiAgZnJhbWUuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmxpc3RlbmVyc1tzdGF0ZU9iai5zdGF0ZV0gPSBjb250aW51YXRpb247XG4gICAgd2luZG93Lm9wZW4oYXV0aFVybCk7XG5cbiAgICBmcmFtZS5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKHN0YXRlT2JqLnN0YXRlLCAnKicpO1xuICB9LmJpbmQodGhpcykpO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGZyYW1lLCBtc2cpIHtcbiAgICBpZiAobXNnLmRhdGEgJiYgbXNnLmRhdGEua2V5ICYmIG1zZy5kYXRhLnVybCAmJiB0aGlzLmxpc3RlbmVyc1ttc2cuZGF0YS5rZXldKSB7XG4gICAgICB0aGlzLmxpc3RlbmVyc1ttc2cuZGF0YS5rZXldKG1zZy5kYXRhLnVybCk7XG4gICAgICBkZWxldGUgdGhpcy5saXN0ZW5lcnNbbXNnLmRhdGEua2V5XTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZnJhbWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oZSk7XG4gICAgICB9XG4gICAgfVxuICB9LmJpbmQodGhpcywgZnJhbWUpLCBmYWxzZSk7XG59O1xuXG4vKipcbiAqIElmIHdlIGhhdmUgYSBsb2NhbCBkb21haW4sIGFuZCBmcmVlZG9tLmpzIGlzIGxvYWRlZCBhdCBzdGFydHVwLCB3ZSBjYW4gdXNlXG4gKiB0aGUgbG9jYWwgcGFnZSBhcyBhIHJlZGlyZWN0IFVSSS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBSZW1vdGVQYWdlQXV0aDtcblxufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pIiwiLypqc2xpbnQgaW5kZW50OjIsd2hpdGU6dHJ1ZSxub2RlOnRydWUsc2xvcHB5OnRydWUgKi9cbnZhciBQcm9taXNlQ29tcGF0ID0gcmVxdWlyZSgnZXM2LXByb21pc2UnKS5Qcm9taXNlO1xuXG4vKipcbiAqIFRoZSBBUEkgcmVnaXN0cnkgZm9yIGZyZWVkb20uanMuICBVc2VkIHRvIGxvb2sgdXAgcmVxdWVzdGVkIEFQSXMsXG4gKiBhbmQgcHJvdmlkZXMgYSBicmlkZ2UgZm9yIGNvcmUgQVBJcyB0byBhY3QgbGlrZSBub3JtYWwgQVBJcy5cbiAqIEBDbGFzcyBBUElcbiAqIEBwYXJhbSB7RGVidWd9IGRlYnVnIFRoZSBkZWJ1Z2dlciB0byB1c2UgZm9yIGxvZ2dpbmcuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xudmFyIEFwaSA9IGZ1bmN0aW9uKGRlYnVnKSB7XG4gIHRoaXMuZGVidWcgPSBkZWJ1ZztcbiAgdGhpcy5hcGlzID0ge307XG4gIHRoaXMucHJvdmlkZXJzID0ge307XG4gIHRoaXMud2FpdGVycyA9IHt9O1xufTtcblxuLyoqXG4gKiBHZXQgYW4gQVBJLlxuICogQG1ldGhvZCBnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBhcGkgVGhlIEFQSSBuYW1lIHRvIGdldC5cbiAqIEByZXR1cm5zIHt7bmFtZTpTdHJpbmcsIGRlZmluaXRpb246QVBJfX0gVGhlIEFQSSBpZiByZWdpc3RlcmVkLlxuICovXG5BcGkucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKGFwaSkge1xuICBpZiAoIXRoaXMuYXBpc1thcGldKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogYXBpLFxuICAgIGRlZmluaXRpb246IHRoaXMuYXBpc1thcGldXG4gIH07XG59O1xuXG4vKipcbiAqIFNldCBhbiBBUEkgdG8gYSBkZWZpbml0aW9uLlxuICogQG1ldGhvZCBzZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBBUEkgbmFtZS5cbiAqIEBwYXJhbSB7QVBJfSBkZWZpbml0aW9uIFRoZSBKU09OIG9iamVjdCBkZWZpbmluZyB0aGUgQVBJLlxuICovXG5BcGkucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKG5hbWUsIGRlZmluaXRpb24pIHtcbiAgdGhpcy5hcGlzW25hbWVdID0gZGVmaW5pdGlvbjtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgYSBjb3JlIEFQSSBwcm92aWRlci5cbiAqIEBtZXRob2QgcmVnaXN0ZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIHRoZSBBUEkgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbnN0cnVjdG9yIHRoZSBmdW5jdGlvbiB0byBjcmVhdGUgYSBwcm92aWRlciBmb3IgdGhlIEFQSS5cbiAqIEBwYXJhbSB7U3RyaW5nP30gc3R5bGUgVGhlIHN0eWxlIHRoZSBwcm92aWRlciBpcyB3cml0dGVuIGluLiBWYWxpZCBzdHlsZXNcbiAqICAgYXJlIGRvY3VtZW50ZWQgaW4gZmRvbS5wb3J0LlByb3ZpZGVyLnByb3RvdHlwZS5nZXRJbnRlcmZhY2UuIERlZmF1bHRzIHRvXG4gKiAgIHByb3ZpZGVBc3luY2hyb25vdXNcbiAqIEBwYXJhbSB7T2JqZWN0P30gZmxhZ3MgUHJlZml4ZWQgYXJndW1lbnRzIG5lZWRlZCBieSB0aGUgY29yZSBwcm92aWRlci5cbiAqICAgdmFsaWQga2V5cyBhcmUgJ21vZHVsZScsICdwcm92aWRlcicsIGFuZCAnY29uZmlnJy5cbiAqL1xuQXBpLnByb3RvdHlwZS5yZWdpc3RlciA9IGZ1bmN0aW9uKG5hbWUsIGNvbnN0cnVjdG9yLCBzdHlsZSwgZmxhZ3MpIHtcbiAgdmFyIGksXG4gICAgYXJncztcblxuICB0aGlzLnByb3ZpZGVyc1tuYW1lXSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogY29uc3RydWN0b3IsXG4gICAgc3R5bGU6IHN0eWxlIHx8ICdwcm92aWRlQXN5bmNocm9ub3VzJyxcbiAgICBmbGFnczogZmxhZ3MgfHwge31cbiAgfTtcblxuICBpZiAodGhpcy53YWl0ZXJzW25hbWVdKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMud2FpdGVyc1tuYW1lXS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgYXJncyA9IHt9O1xuICAgICAgaWYgKGZsYWdzLm1vZHVsZSkge1xuICAgICAgICBhcmdzLm1vZHVsZSA9IHRoaXMud2FpdGVyc1tuYW1lXVtpXS5mcm9tO1xuICAgICAgfVxuICAgICAgaWYgKGZsYWdzLmNvbmZpZykge1xuICAgICAgICBhcmdzLmNvbmZpZyA9IHRoaXMud2FpdGVyc1tuYW1lXVtpXS5mcm9tLmNvbmZpZztcbiAgICAgIH1cbiAgICAgIHRoaXMud2FpdGVyc1tuYW1lXVtpXS5yZXNvbHZlKHtcbiAgICAgICAgYXJnczogYXJncyxcbiAgICAgICAgaW5zdDogY29uc3RydWN0b3IuYmluZCh7fSwgYXJncylcbiAgICAgIH0pO1xuICAgIH1cbiAgICBkZWxldGUgdGhpcy53YWl0ZXJzW25hbWVdO1xuICB9XG59O1xuXG4vKipcbiAqIEdldCBhIGNvcmUgQVBJIGNvbm5lY3RlZCB0byBhIGdpdmVuIEZyZWVET00gbW9kdWxlLlxuICogQG1ldGhvZCBnZXRDb3JlXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSB0aGUgQVBJIHRvIHJldHJpZXZlLlxuICogQHBhcmFtIHtNb2R1bGV9IGZyb20gVGhlIGluc3RhbnRpYXRpbmcgQXBwLlxuICogQHJldHVybnMge1Byb21pc2V9IEEgcHJvbWlzZSBvZiBhIGZkb20uQXBwIGxvb2stYWxpa2UgKGFuZCBhcmd1bWVudCBvYmplY3QpLFxuICogbWF0Y2hpbmcgYSBsb2NhbCBBUEkgZGVmaW5pdGlvbi5cbiAqL1xuQXBpLnByb3RvdHlwZS5nZXRDb3JlID0gZnVuY3Rpb24obmFtZSwgZnJvbSkge1xuICByZXR1cm4gbmV3IFByb21pc2VDb21wYXQoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWYgKHRoaXMuYXBpc1tuYW1lXSkge1xuICAgICAgaWYgKHRoaXMucHJvdmlkZXJzW25hbWVdKSB7XG4gICAgICAgIHZhciBhcmdzID0ge307XG4gICAgICAgIGlmICh0aGlzLnByb3ZpZGVyc1tuYW1lXS5mbGFncy5tb2R1bGUpIHtcbiAgICAgICAgICBhcmdzLm1vZHVsZSA9IGZyb207XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvdmlkZXJzW25hbWVdLmZsYWdzLmNvbmZpZykge1xuICAgICAgICAgIGFyZ3MuY29uZmlnID0gZnJvbS5jb25maWc7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgYXJnczogYXJncyxcbiAgICAgICAgICBpbnN0OiB0aGlzLnByb3ZpZGVyc1tuYW1lXS5jb25zdHJ1Y3Rvci5iaW5kKHt9LCBhcmdzKVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghdGhpcy53YWl0ZXJzW25hbWVdKSB7XG4gICAgICAgICAgdGhpcy53YWl0ZXJzW25hbWVdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy53YWl0ZXJzW25hbWVdLnB1c2goe1xuICAgICAgICAgIHJlc29sdmU6IHJlc29sdmUsXG4gICAgICAgICAgcmVqZWN0OiByZWplY3QsXG4gICAgICAgICAgZnJvbTogZnJvbVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZWJ1Zy53YXJuKCdBcGkuZ2V0Q29yZSBhc2tlZCBmb3IgdW5rbm93biBjb3JlOiAnICsgbmFtZSk7XG4gICAgICByZWplY3QobnVsbCk7XG4gICAgfVxuICB9LmJpbmQodGhpcykpO1xufTtcblxuLyoqXG4gKiBDb25maWd1cmUgYSB7UHJvdmlkZXJ9IHRvIHByb3ZpZGUgYSBuYW1lZCBjb3JlIGFwaSBvbiBiZWhhbGYgb2YgYVxuICogZ2l2ZW4gcG9ydC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBwcm92aWRlclxuICogQHBhcmFtIHtQcm92aWRlcn0gcHJvdmlkZXIgVGhlIHByb3ZpZGVyIHRoYXQgd2lsbCBwcm92aWRlIHRoZSBuYW1lZCBhcGlcbiAqIEBwYXJhbSB7TW9kdWxlfSBmcm9tIFRoZSBtb2R1bGUgcmVxdWVzdGluZyB0aGUgY29yZSBwcm92aWRlci5cbiAqL1xuQXBpLnByb3RvdHlwZS5wcm92aWRlQ29yZSA9IGZ1bmN0aW9uIChuYW1lLCBwcm92aWRlciwgZnJvbSkge1xuICByZXR1cm4gdGhpcy5nZXRDb3JlKG5hbWUsIGZyb20pLnRoZW4oZnVuY3Rpb24gKGNvcmUpIHtcbiAgICB2YXIgZmxhZ3MgPSB0aGlzLnByb3ZpZGVyc1tuYW1lXS5mbGFncyxcbiAgICAgIGlmYWNlID0gcHJvdmlkZXIuZ2V0UHJveHlJbnRlcmZhY2UoKTtcbiAgICBpZiAoZmxhZ3MucHJvdmlkZXIpIHtcbiAgICAgIGNvcmUuYXJncy5wcm92aWRlciA9IGlmYWNlO1xuICAgIH1cbiAgICBpZmFjZSgpW3RoaXMucHJvdmlkZXJzW25hbWVdLnN0eWxlXShjb3JlLmluc3QpO1xuICB9LmJpbmQodGhpcyksIGZ1bmN0aW9uIChlcnIpIHtcbiAgICB0aGlzLmRlYnVnLmVycm9yKCdDb3VsZCBub3QgcHJvdmlkZSBjb3JlOiAnLCBlcnIpO1xuICB9LmJpbmQodGhpcykpO1xufTtcblxuLyoqXG4gKiBTaHV0ZG93biB0aGUgQVBJIHJlZ2lzdHJ5LCBhbmQgcmVqZWN0IGFueSBwZW5kaW5nIHdhaXRlcnMuXG4gKi9cbkFwaS5wcm90b3R5cGUuY2xlYW51cCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHByb3AsXG4gICAgZG9SZWplY3QgPSBmdW5jdGlvbiAod2FpdGVyKSB7XG4gICAgICB3YWl0ZXIucmVqZWN0KCk7XG4gICAgfTtcbiAgZm9yIChwcm9wIGluIHRoaXMud2FpdGVycykge1xuICAgIGlmICh0aGlzLndhaXRlcnMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgIHRoaXMud2FpdGVyc1twcm9wXS5mb3JFYWNoKGRvUmVqZWN0KTtcbiAgICB9XG4gIH1cbiAgZGVsZXRlIHRoaXMud2FpdGVycztcbn07XG5cbi8qKlxuICogRGVmaW5lcyB0aGUgYXBpcyBtb2R1bGUgYW5kIHByb3ZpZGVyIHJlZ2lzdHJ5LlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IEFwaTtcbiIsIi8qanNsaW50IGluZGVudDoyLG5vZGU6dHJ1ZSAqL1xuXG52YXIgQnVuZGxlID0gZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCc7XG4gIHRoaXMuaW50ZXJmYWNlcyA9IHJlcXVpcmUoJy4uL2Rpc3QvYnVuZGxlLmNvbXBpbGVkJyk7XG59O1xuXG4vKipcbiAqIFBvcHVsYXRlIGFuIEFQSSByZWdpc3RyeSB3aXRoIHByb3ZpZGVkIHByb3ZpZGVycywgYW5kIHdpdGgga25vd24gQVBJXG4gKiBkZWZpbml0aW9ucy5cbiAqIEBzdGF0aWNcbiAqIEBtZXRob2QgcmVnaXN0ZXJcbiAqIEBwYXJhbSB7e25hbWU6IHN0cmluZywgcHJvdmlkZXI6IEZ1bmN0aW9uLCBzdHlsZT86IHN0cmluZ31bXX0gcHJvdmlkZXJzXG4gKiAgIFRoZSBjb3JlIHByb3ZpZGVycyBtYWRlIGF2YWlsYWJsZSB0byB0aGlzIGZyZWVkb20uanMgaW5zdGFuY2UuXG4gKiBAcGFyYW0ge0FwaX0gcmVnaXN0cnkgVGhlIEFQSSByZWdpc3RyeSB0byBwb3B1bGF0ZS5cbiAqL1xuZXhwb3J0cy5yZWdpc3RlciA9IGZ1bmN0aW9uIChwcm92aWRlcnMsIHJlZ2lzdHJ5KSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdmFyIGJ1bmRsZSA9IG5ldyBCdW5kbGUoKTtcbiAgYnVuZGxlLmludGVyZmFjZXMuZm9yRWFjaChmdW5jdGlvbiAoYXBpKSB7XG4gICAgaWYgKGFwaSAmJiBhcGkubmFtZSAmJiBhcGkuYXBpKSB7XG4gICAgICByZWdpc3RyeS5zZXQoYXBpLm5hbWUsIGFwaS5hcGkpO1xuICAgIH1cbiAgfSk7XG5cbiAgcHJvdmlkZXJzLmZvckVhY2goZnVuY3Rpb24gKHByb3ZpZGVyKSB7XG4gICAgaWYgKHByb3ZpZGVyLm5hbWUpIHtcbiAgICAgIHJlZ2lzdHJ5LnJlZ2lzdGVyKHByb3ZpZGVyLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlci5wcm92aWRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyLnN0eWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIuZmxhZ3MpO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiLypnbG9iYWxzIEJsb2IsIEFycmF5QnVmZmVyLCBEYXRhVmlldyAqL1xuLypqc2xpbnQgaW5kZW50OjIsIG5vZGU6dHJ1ZSwgc2xvcHB5OnRydWUgKi9cbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbi8qKlxuICogQSBmcmVlZG9tIHBvcnQgZm9yIGEgdXNlci1hY2Nlc3NhYmxlIGFwaS5cbiAqIEBjbGFzcyBDb25zdW1lclxuICogQGltcGxlbWVudHMgUG9ydFxuICogQHVzZXMgaGFuZGxlRXZlbnRzXG4gKiBAcGFyYW0ge09iamVjdH0gaW50ZXJmYWNlQ2xzIFRoZSBhcGkgaW50ZXJmYWNlIGV4cG9zZWQgYnkgdGhpcyBjb25zdW1lci5cbiAqIEBwYXJhbSB7RGVidWd9IGRlYnVnIFRoZSBkZWJ1Z2dlciB0byB1c2UgZm9yIGxvZ2dpbmcuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xudmFyIENvbnN1bWVyID0gZnVuY3Rpb24gKGludGVyZmFjZUNscywgZGVidWcpIHtcbiAgdGhpcy5pZCA9IENvbnN1bWVyLm5leHRJZCgpO1xuICB0aGlzLmludGVyZmFjZUNscyA9IGludGVyZmFjZUNscztcbiAgdGhpcy5kZWJ1ZyA9IGRlYnVnO1xuICB1dGlsLmhhbmRsZUV2ZW50cyh0aGlzKTtcbiAgXG4gIHRoaXMuaWZhY2VzID0ge307XG4gIHRoaXMuY2xvc2VIYW5kbGVycyA9IHt9O1xuICB0aGlzLmVycm9ySGFuZGxlcnMgPSB7fTtcbiAgdGhpcy5lbWl0cyA9IHt9O1xufTtcblxuLyoqXG4gKiBSZWNlaXZlIGluY29taW5nIG1lc3NhZ2VzIGZvciB0aGlzIGNvbnN1bWVyLlxuICogQG1ldGhvZCBvbk1lc3NhZ2VcbiAqIEBwYXJhbSB7U3RyaW5nfSBzb3VyY2UgVGhlIHNvdXJjZSBvZiB0aGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlIFRoZSByZWNlaXZlZCBtZXNzYWdlLlxuICovXG5Db25zdW1lci5wcm90b3R5cGUub25NZXNzYWdlID0gZnVuY3Rpb24gKHNvdXJjZSwgbWVzc2FnZSkge1xuICBpZiAoc291cmNlID09PSAnY29udHJvbCcgJiYgbWVzc2FnZS5yZXZlcnNlKSB7XG4gICAgdGhpcy5lbWl0Q2hhbm5lbCA9IG1lc3NhZ2UuY2hhbm5lbDtcbiAgICB0aGlzLmVtaXQodGhpcy5lbWl0Q2hhbm5lbCwge1xuICAgICAgdHlwZTogJ2NoYW5uZWwgYW5ub3VuY2VtZW50JyxcbiAgICAgIGNoYW5uZWw6IG1lc3NhZ2UucmV2ZXJzZVxuICAgIH0pO1xuICAgIHRoaXMuZW1pdCgnc3RhcnQnKTtcbiAgfSBlbHNlIGlmIChzb3VyY2UgPT09ICdjb250cm9sJyAmJiBtZXNzYWdlLnR5cGUgPT09ICdzZXR1cCcpIHtcbiAgICB0aGlzLmNvbnRyb2xDaGFubmVsID0gbWVzc2FnZS5jaGFubmVsO1xuICB9IGVsc2UgaWYgKHNvdXJjZSA9PT0gJ2NvbnRyb2wnICYmIG1lc3NhZ2UudHlwZSA9PT0gJ2Nsb3NlJykge1xuICAgIGRlbGV0ZSB0aGlzLmNvbnRyb2xDaGFubmVsO1xuICAgIHRoaXMuZG9DbG9zZSgpO1xuICB9IGVsc2Uge1xuICAgIGlmICghdGhpcy5lbWl0Q2hhbm5lbCAmJiBtZXNzYWdlLmNoYW5uZWwpIHtcbiAgICAgIHRoaXMuZW1pdENoYW5uZWwgPSBtZXNzYWdlLmNoYW5uZWw7XG4gICAgICB0aGlzLmVtaXQoJ3N0YXJ0Jyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLnR5cGUgPT09ICdjbG9zZScgJiYgbWVzc2FnZS50bykge1xuICAgICAgdGhpcy50ZWFyZG93bihtZXNzYWdlLnRvKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ2Vycm9yJykge1xuICAgICAgdGhpcy5lcnJvcihtZXNzYWdlLnRvLCBtZXNzYWdlLm1lc3NhZ2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS50bykge1xuICAgICAgaWYgKHRoaXMuZW1pdHNbbWVzc2FnZS50b10pIHtcbiAgICAgICAgdGhpcy5lbWl0c1ttZXNzYWdlLnRvXSgnbWVzc2FnZScsIG1lc3NhZ2UubWVzc2FnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRlYnVnLndhcm4oJ0NvdWxkIG5vdCBkZWxpdmVyIG1lc3NhZ2UsIG5vIHN1Y2ggaW50ZXJmYWNlOiAnICsgbWVzc2FnZS50byk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBtc2cgPSBtZXNzYWdlLm1lc3NhZ2U7XG4gICAgICB1dGlsLmVhY2hQcm9wKHRoaXMuZW1pdHMsIGZ1bmN0aW9uIChpZmFjZSkge1xuICAgICAgICBpZmFjZSgnbWVzc2FnZScsIG1lc3NhZ2UubWVzc2FnZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgY29uc3VtZXIuSW50ZXJmYWNlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGNvbnN1bWVyLlxuICogQW4gaW50ZXJmYWNlIGlzIHJldHVybmVkLCB3aGljaCBpcyBzdXBwbGllZCB3aXRoIGltcG9ydGFudCBjb250cm9sIG9mIHRoZVxuICogYXBpIHZpYSBjb25zdHJ1Y3RvciBhcmd1bWVudHM6IChib3VuZCBiZWxvdyBpbiBnZXRJbnRlcmZhY2VDb25zdHJ1Y3RvcilcbiAqIFxuICogb25Nc2c6IGZ1bmN0aW9uKGJpbmRlcikgc2V0cyB0aGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIG1lc3NhZ2VzIGZvciB0aGlzXG4gKiAgICBpbnRlcmZhY2UgYXJyaXZlIG9uIHRoZSBjaGFubmVsLFxuICogZW1pdDogZnVuY3Rpb24obXNnKSBhbGxvd3MgdGhpcyBpbnRlcmZhY2UgdG8gZW1pdCBtZXNzYWdlcyxcbiAqIGlkOiBzdHJpbmcgaXMgdGhlIElkZW50aWZpZXIgZm9yIHRoaXMgaW50ZXJmYWNlLlxuICogQG1ldGhvZCBnZXRJbnRlcmZhY2VcbiAqL1xuQ29uc3VtZXIucHJvdG90eXBlLmdldEludGVyZmFjZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIElmYWNlID0gdGhpcy5nZXRJbnRlcmZhY2VDb25zdHJ1Y3RvcigpLFxuICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICBpZiAoYXJncy5sZW5ndGgpIHtcbiAgICBJZmFjZSA9IElmYWNlLmJpbmQuYXBwbHkoSWZhY2UsIFtJZmFjZV0uY29uY2F0KGFyZ3MpKTtcbiAgfVxuICByZXR1cm4gbmV3IElmYWNlKCk7XG59O1xuXG4vKipcbiAqIEF0dGFjaCBhbiAnb25FdmVudCcgbGlzdGVuZXIgdG8gYW4gaW50ZXJmYWNlLCBhbGxvd2luZyBleHRlcm5hbCBjb25zdW1lcnNcbiAqIHRvIGVpdGhlciBsaXN0ZW4gdG8gY2hhbm5lbCBzdGF0ZSwgb3IgcmVnaXN0ZXIgY2FsbGJhY2tzIG9uIGxpZmV0aW1lIGV2ZW50c1xuICogb2YgaW5kaXZpZHVhbCBpbnN0YW5jZXMgb2YgdGhlIGludGVyZmFjZS5cbiAqIEBtZXRob2QgZ2V0TGlzdGVuZXJcbiAqIEBwYXJtYSB7U3RyaW5nfSBuYW1lIFRoZSBldmVudCB0byBsaXN0ZW4gdG8uXG4gKiBAcHJpdmF0ZVxuICovXG5Db25zdW1lci5wcm90b3R5cGUuZ2V0TGlzdGVuZXIgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGluc3RhbmNlLCBoYW5kbGVyKSB7XG4gICAgLy8gTGlzdGVuIHRvIHRoZSBjaGFubmVsIGRpcmVjdGx5LlxuICAgIGlmICh0eXBlb2YgaW5zdGFuY2UgPT09ICdmdW5jdGlvbicgJiYgaGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm9uY2UobmFtZSwgaW5zdGFuY2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIExpc3RlbiB0byBhIHNwZWNpZmljIGluc3RhbmNlLlxuICAgIHZhciBoYW5kbGVycyA9IG5hbWUgKyAnSGFuZGxlcnMnO1xuICAgIHV0aWwuZWFjaFByb3AodGhpcy5pZmFjZXMsIGZ1bmN0aW9uIChjYW5kaWRhdGUsIGlkKSB7XG4gICAgICBpZiAoY2FuZGlkYXRlID09PSBpbnN0YW5jZSkge1xuICAgICAgICBpZiAodGhpc1toYW5kbGVyc11baWRdKSB7XG4gICAgICAgICAgdGhpc1toYW5kbGVyc11baWRdLnB1c2goaGFuZGxlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpc1toYW5kbGVyc11baWRdID0gW2hhbmRsZXJdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSk7XG4gIH0uYmluZCh0aGlzKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgZnVuY3Rpb24gdGhhdCBjYW4gYmUgdXNlZCB0byBnZXQgaW50ZXJmYWNlcyBmcm9tIHRoaXMgYXBpIGNvbnN1bWVyXG4gKiBmcm9tIGEgdXNlci12aXNpYmxlIHBvaW50LlxuICogQG1ldGhvZCBnZXRQcm94eUludGVyZmFjZVxuICovXG5Db25zdW1lci5wcm90b3R5cGUuZ2V0UHJveHlJbnRlcmZhY2UgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBmdW5jID0gZnVuY3Rpb24gKHApIHtcbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHAuZ2V0SW50ZXJmYWNlLmFwcGx5KHAsIGFyZ3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcC5nZXRJbnRlcmZhY2UoKTtcbiAgICB9XG4gIH0uYmluZCh7fSwgdGhpcyk7XG5cbiAgZnVuYy5jbG9zZSA9IGZ1bmN0aW9uIChpZmFjZSkge1xuICAgIGlmIChpZmFjZSkge1xuICAgICAgdXRpbC5lYWNoUHJvcCh0aGlzLmlmYWNlcywgZnVuY3Rpb24gKGNhbmRpZGF0ZSwgaWQpIHtcbiAgICAgICAgaWYgKGNhbmRpZGF0ZSA9PT0gaWZhY2UpIHtcbiAgICAgICAgICB0aGlzLnRlYXJkb3duKGlkKTtcbiAgICAgICAgICB0aGlzLmVtaXQodGhpcy5lbWl0Q2hhbm5lbCwge1xuICAgICAgICAgICAgdHlwZTogJ2Nsb3NlJyxcbiAgICAgICAgICAgIHRvOiBpZFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDbG9zZSB0aGUgY2hhbm5lbC5cbiAgICAgIHRoaXMuZG9DbG9zZSgpO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpO1xuXG4gIGZ1bmMub25DbG9zZSA9IHRoaXMuZ2V0TGlzdGVuZXIoJ2Nsb3NlJyk7XG4gIGZ1bmMub25FcnJvciA9IHRoaXMuZ2V0TGlzdGVuZXIoJ2Vycm9yJyk7XG5cbiAgcmV0dXJuIGZ1bmM7XG59O1xuXG4vKipcbiAqIFByb3ZpZGVzIGEgYm91bmQgY2xhc3MgZm9yIGNyZWF0aW5nIGEgY29uc3VtZXIuSW50ZXJmYWNlIGFzc29jaWF0ZWRcbiAqIHdpdGggdGhpcyBhcGkuIFRoaXMgcGFydGlhbCBsZXZlbCBvZiBjb25zdHJ1Y3Rpb24gY2FuIGJlIHVzZWRcbiAqIHRvIGFsbG93IHRoZSBjb25zdW1lciB0byBiZSB1c2VkIGFzIGEgcHJvdmlkZXIgZm9yIGFub3RoZXIgQVBJLlxuICogQG1ldGhvZCBnZXRJbnRlcmZhY2VDb25zdHJ1Y3RvclxuICogQHByaXZhdGVcbiAqL1xuQ29uc3VtZXIucHJvdG90eXBlLmdldEludGVyZmFjZUNvbnN0cnVjdG9yID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaWQgPSBDb25zdW1lci5uZXh0SWQoKTtcbiAgcmV0dXJuIHRoaXMuaW50ZXJmYWNlQ2xzLmJpbmQoXG4gICAge30sXG4gICAgZnVuY3Rpb24gKGlkLCBvYmosIGJpbmRlcikge1xuICAgICAgdGhpcy5pZmFjZXNbaWRdID0gb2JqO1xuICAgICAgdGhpcy5lbWl0c1tpZF0gPSBiaW5kZXI7XG4gICAgfS5iaW5kKHRoaXMsIGlkKSxcbiAgICB0aGlzLmRvRW1pdC5iaW5kKHRoaXMsIGlkKSxcbiAgICB0aGlzLmRlYnVnXG4gICk7XG59O1xuXG4vKipcbiAqIEVtaXQgYSBtZXNzYWdlIG9uIHRoZSBjaGFubmVsIG9uY2Ugc2V0dXAgaXMgY29tcGxldGUuXG4gKiBAbWV0aG9kIGRvRW1pdFxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0byBUaGUgSUQgb2YgdGhlIGZsb3cgc2VuZGluZyB0aGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtc2cgVGhlIG1lc3NhZ2UgdG8gZW1pdFxuICogQHBhcmFtIHtCb29sZWFufSBhbGwgU2VuZCBtZXNzYWdlIHRvIGFsbCByZWNpcGllbnRzLlxuICovXG5Db25zdW1lci5wcm90b3R5cGUuZG9FbWl0ID0gZnVuY3Rpb24gKHRvLCBtc2csIGFsbCkge1xuICBpZiAoYWxsKSB7XG4gICAgdG8gPSBmYWxzZTtcbiAgfVxuICBpZiAodGhpcy5lbWl0Q2hhbm5lbCkge1xuICAgIHRoaXMuZW1pdCh0aGlzLmVtaXRDaGFubmVsLCB7dG86IHRvLCB0eXBlOiAnbWVzc2FnZScsIG1lc3NhZ2U6IG1zZ30pO1xuICB9IGVsc2Uge1xuICAgIHRoaXMub25jZSgnc3RhcnQnLCB0aGlzLmRvRW1pdC5iaW5kKHRoaXMsIHRvLCBtc2cpKTtcbiAgfVxufTtcblxuLyoqXG4gKiBUZWFyZG93biBhIHNpbmdsZSBpbnRlcmZhY2Ugb2YgdGhpcyBhcGkuXG4gKiBAbWV0aG9kIHRlYXJkb3duXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgVGhlIGlkIG9mIHRoZSBpbnRlcmZhY2UgdG8gdGVhciBkb3duLlxuICovXG5Db25zdW1lci5wcm90b3R5cGUudGVhcmRvd24gPSBmdW5jdGlvbiAoaWQpIHtcbiAgaWYgKHRoaXMuZW1pdHNbaWRdKSB7XG4gICAgdGhpcy5lbWl0c1tpZF0oJ2Nsb3NlJyk7XG4gIH1cbiAgZGVsZXRlIHRoaXMuZW1pdHNbaWRdO1xuICBpZiAodGhpcy5jbG9zZUhhbmRsZXJzW2lkXSkge1xuICAgIHV0aWwuZWFjaFByb3AodGhpcy5jbG9zZUhhbmRsZXJzW2lkXSwgZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgIHByb3AoKTtcbiAgICB9KTtcbiAgfVxuICBkZWxldGUgdGhpcy5pZmFjZXNbaWRdO1xuICBkZWxldGUgdGhpcy5jbG9zZUhhbmRsZXJzW2lkXTtcbiAgZGVsZXRlIHRoaXMuZXJyb3JIYW5kbGVyc1tpZF07XG59O1xuXG4vKipcbiAqIEhhbmRsZSBhIG1lc3NhZ2UgZXJyb3IgcmVwb3J0ZWQgdG8gdGhpcyBhcGkuXG4gKiBAbWV0aG9kIGVycm9yXG4gKiBAcGFyYW0ge1N0cmluZz99IGlkIFRoZSBpZCBvZiB0aGUgaW50ZXJmYWNlIHdoZXJlIHRoZSBlcnJvciBvY2N1cmVkLlxuICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2UgVGhlIG1lc3NhZ2Ugd2hpY2ggZmFpbGVkLCBpZiByZWxldmFudC5cbiAqL1xuQ29uc3VtZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGlkLCBtZXNzYWdlKSB7XG4gIGlmIChpZCAmJiB0aGlzLmVycm9ySGFuZGxlcnNbaWRdKSB7XG4gICAgdXRpbC5lYWNoUHJvcCh0aGlzLmVycm9ySGFuZGxlcnNbaWRdLCBmdW5jdGlvbiAocHJvcCkge1xuICAgICAgcHJvcChtZXNzYWdlKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICghaWQpIHtcbiAgICB0aGlzLmVtaXQoJ2Vycm9yJywgbWVzc2FnZSk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBDbG9zZSAvIHRlYXJkb3duIHRoZSBmbG93IHRoaXMgYXBpIHRlcm1pbmF0ZXMuXG4gKiBAbWV0aG9kIGRvQ2xvc2VcbiAqL1xuQ29uc3VtZXIucHJvdG90eXBlLmRvQ2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmNvbnRyb2xDaGFubmVsKSB7XG4gICAgdGhpcy5lbWl0KHRoaXMuY29udHJvbENoYW5uZWwsIHtcbiAgICAgIHR5cGU6ICdDaGFubmVsIENsb3NpbmcnLFxuICAgICAgcmVxdWVzdDogJ2Nsb3NlJ1xuICAgIH0pO1xuICB9XG5cbiAgdXRpbC5lYWNoUHJvcCh0aGlzLmVtaXRzLCBmdW5jdGlvbiAoZW1pdCwgaWQpIHtcbiAgICB0aGlzLnRlYXJkb3duKGlkKTtcbiAgfS5iaW5kKHRoaXMpKTtcblxuICB0aGlzLmVtaXQoJ2Nsb3NlJyk7XG4gIHRoaXMub2ZmKCk7XG5cbiAgdGhpcy5lbWl0Q2hhbm5lbCA9IG51bGw7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgdGV4dHVhbCBkZXNjcmlwdGlvbiBvZiB0aGlzIHBvcnQuXG4gKiBAbWV0aG9kIHRvU3RyaW5nXG4gKiBAcmV0dXJuIFRoZSBkZXNjcmlwdGlvbiBvZiB0aGlzIHBvcnQuXG4gKi9cbkNvbnN1bWVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuZW1pdENoYW5uZWwpIHtcbiAgICByZXR1cm4gXCJbQ29uc3VtZXIgXCIgKyB0aGlzLmVtaXRDaGFubmVsICsgXCJdXCI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFwiW3VuYm91bmQgQ29uc3VtZXJdXCI7XG4gIH1cbn07XG5cbi8qKlxuICogR2V0IHRoZSBuZXh0IElEIGZvciBhbiBhcGkgY2hhbm5lbC5cbiAqIEBtZXRob2QgbmV4dElkXG4gKiBAc3RhdGljXG4gKiBAcHJpdmF0ZVxuICovXG5Db25zdW1lci5uZXh0SWQgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghQ29uc3VtZXIuaWQpIHtcbiAgICBDb25zdW1lci5pZCA9IDE7XG4gIH1cbiAgcmV0dXJuIChDb25zdW1lci5pZCArPSAxKTtcbn07XG5cbi8qKlxuICogQ29udmVydCBhIHN0cnVjdHVyZWQgZGF0YSBzdHJ1Y3R1cmUgaW50byBhIG1lc3NhZ2Ugc3RyZWFtIGNvbmZvcm1pbmcgdG9cbiAqIGEgdGVtcGxhdGUgYW5kIGFuIGFycmF5IG9mIGJpbmFyeSBkYXRhIGVsZW1lbnRzLlxuICogQHN0YXRpY1xuICogQG1ldGhvZCBtZXNzYWdlVG9Qb3J0YWJsZVxuICogQHBhcmFtIHtPYmplY3R9IHRlbXBsYXRlIFRoZSB0ZW1wbGF0ZSB0byBjb25mb3JtIHRvXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgVGhlIGluc3RhbmNlIG9mIHRoZSBkYXRhIHN0cnVjdHVyZSB0byBjb25mcm9tXG4gKiBAcGFyYW0ge0RlYnVnfSBkZWJ1ZyBBIGRlYnVnZ2VyIGZvciBlcnJvcnMuXG4gKiBAcmV0dXJuIHt7dGV4dDogT2JqZWN0LCBiaW5hcnk6IEFycmF5fX0gU2VwYXJhdGVkIGRhdGEgc3RyZWFtcy5cbiAqL1xuQ29uc3VtZXIubWVzc2FnZVRvUG9ydGFibGUgPSBmdW5jdGlvbiAodGVtcGxhdGUsIHZhbHVlLCBkZWJ1Zykge1xuICB2YXIgZXh0ZXJuYWxzID0gW10sXG4gICAgbWVzc2FnZSA9IENvbnN1bWVyLmNvbmZvcm0odGVtcGxhdGUsIHZhbHVlLCBleHRlcm5hbHMsIHRydWUsIGRlYnVnKTtcbiAgcmV0dXJuIHtcbiAgICB0ZXh0OiBtZXNzYWdlLFxuICAgIGJpbmFyeTogZXh0ZXJuYWxzXG4gIH07XG59O1xuXG4vKipcbiAqIENvbnZlcnQgU3RydWN0dXJlZCBEYXRhIHN0cmVhbXMgaW50byBhIGRhdGEgc3RydWN0dXJlIGNvbmZvcm1pbmcgdG8gYVxuICogdGVtcGxhdGUuXG4gKiBAc3RhdGljXG4gKiBAbWV0aG9kIHBvcnRhYmxlVG9NZXNzYWdlXG4gKiBAcGFyYW0ge09iamVjdH0gdGVtcGxhdGUgVGhlIHRlbXBsYXRlIHRvIGNvbmZvcm0gdG9cbiAqIEBwYXJhbSB7e3RleHQ6IE9iamVjdCwgYmluYXJ5OiBBcnJheX19IHN0cmVhbXMgVGhlIHN0cmVhbXMgdG8gY29uZm9ybVxuICogQHBhcmFtIHtEZWJ1Z30gZGVidWcgQSBkZWJ1Z2dlciBmb3IgZXJyb3JzLlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgZGF0YSBzdHJ1Y3R1cmUgbWF0Y2hpbmcgdGhlIHRlbXBsYXRlLlxuICovXG5Db25zdW1lci5wb3J0YWJsZVRvTWVzc2FnZSA9IGZ1bmN0aW9uICh0ZW1wbGF0ZSwgc3RyZWFtcywgZGVidWcpIHtcbiAgcmV0dXJuIENvbnN1bWVyLmNvbmZvcm0odGVtcGxhdGUsIHN0cmVhbXMudGV4dCwgc3RyZWFtcy5iaW5hcnksIGZhbHNlLCBkZWJ1Zyk7XG59O1xuXG4vKipcbiAqIEZvcmNlIGEgY29sbGVjdGlvbiBvZiB2YWx1ZXMgdG8gbG9vayBsaWtlIHRoZSB0eXBlcyBhbmQgbGVuZ3RoIG9mIGFuIEFQSVxuICogdGVtcGxhdGUuXG4gKiBAc3RhdGljXG4gKiBAbWV0aG9kIGNvbmZvcm1cbiAqIEBwYXJhbSB7T2JqZWN0fSB0ZW1wbGF0ZSBUaGUgdGVtcGxhdGUgdG8gY29uZm9ybSB0b1xuICogQHBhcmFtIHtPYmplY3R9IGZyb20gVGhlIHZhbHVlIHRvIGNvbmZvcm1cbiAqIEBwYXJhbSB7QXJyYXl9IGV4dGVybmFscyBMaXN0aW5nIG9mIGJpbmFyeSBlbGVtZW50cyBpbiB0aGUgdGVtcGxhdGVcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gV2hldGhlciB0byB0byBzZXBhcmF0ZSBvciBjb21iaW5lIHN0cmVhbXMuXG4gKiBAYXBhcmFtIHtEZWJ1Z30gZGVidWcgQSBkZWJ1Z2dlciBmb3IgZXJyb3JzLlxuICovXG5Db25zdW1lci5jb25mb3JtID0gZnVuY3Rpb24gKHRlbXBsYXRlLCBmcm9tLCBleHRlcm5hbHMsIHNlcGFyYXRlLCBkZWJ1Zykge1xuICAvKiBqc2hpbnQgLVcwODYgKi9cbiAgaWYgKHR5cGVvZiAoZnJvbSkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvL2Zyb20gPSB1bmRlZmluZWQ7XG4gICAgLy90aHJvdyBcIlRyeWluZyB0byBjb25mb3JtIGEgZnVuY3Rpb25cIjtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9IGVsc2UgaWYgKHR5cGVvZiAoZnJvbSkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSBlbHNlIGlmIChmcm9tID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSBpZiAodGVtcGxhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgIGRlYnVnLmVycm9yKFwiTWVzc2FnZSBkaXNjYXJkZWQgZm9yIG5vdCBtYXRjaGluZyBkZWNsYXJlZCB0eXBlIVwiLCBmcm9tKTtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgc3dpdGNoICh0ZW1wbGF0ZSkge1xuICBjYXNlICdzdHJpbmcnOlxuICAgIHJldHVybiBTdHJpbmcoJycpICsgZnJvbTtcbiAgY2FzZSAnbnVtYmVyJzpcbiAgICByZXR1cm4gTnVtYmVyKDEpICogZnJvbTtcbiAgY2FzZSAnYm9vbGVhbic6XG4gICAgcmV0dXJuIEJvb2xlYW4oZnJvbSA9PT0gdHJ1ZSk7XG4gIGNhc2UgJ29iamVjdCc6XG4gICAgLy8gVE9ETyh3aWxsc2NvdHQpOiBBbGxvdyByZW1vdmFsIGlmIHNhbmRib3hpbmcgZW5mb3JjZXMgdGhpcy5cbiAgICBpZiAodHlwZW9mIGZyb20gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShmcm9tKSk7XG4gICAgfVxuICBjYXNlICdibG9iJzpcbiAgICBpZiAoc2VwYXJhdGUpIHtcbiAgICAgIGlmIChmcm9tIGluc3RhbmNlb2YgQmxvYikge1xuICAgICAgICBleHRlcm5hbHMucHVzaChmcm9tKTtcbiAgICAgICAgcmV0dXJuIGV4dGVybmFscy5sZW5ndGggLSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVidWcuZXJyb3IoJ2NvbmZvcm0gZXhwZWN0aW5nIEJsb2IsIGJ1dCBzYXcgJyArICh0eXBlb2YgZnJvbSkpO1xuICAgICAgICBleHRlcm5hbHMucHVzaChuZXcgQmxvYihbXSkpO1xuICAgICAgICByZXR1cm4gZXh0ZXJuYWxzLmxlbmd0aCAtIDE7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBleHRlcm5hbHNbZnJvbV07XG4gICAgfVxuICBjYXNlICdidWZmZXInOlxuICAgIGlmIChzZXBhcmF0ZSkge1xuICAgICAgZXh0ZXJuYWxzLnB1c2goQ29uc3VtZXIubWFrZUFycmF5QnVmZmVyKGZyb20sIGRlYnVnKSk7XG4gICAgICByZXR1cm4gZXh0ZXJuYWxzLmxlbmd0aCAtIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBDb25zdW1lci5tYWtlQXJyYXlCdWZmZXIoZXh0ZXJuYWxzW2Zyb21dLCBkZWJ1Zyk7XG4gICAgfVxuICBjYXNlICdwcm94eSc6XG4gICAgcmV0dXJuIGZyb207XG4gIH1cbiAgdmFyIHZhbCwgaTtcbiAgaWYgKEFycmF5LmlzQXJyYXkodGVtcGxhdGUpICYmIGZyb20gIT09IHVuZGVmaW5lZCkge1xuICAgIHZhbCA9IFtdO1xuICAgIGkgPSAwO1xuICAgIGlmICh0ZW1wbGF0ZS5sZW5ndGggPT09IDIgJiYgdGVtcGxhdGVbMF0gPT09ICdhcnJheScpIHtcbiAgICAgIC8vY29uc29sZS5sb2coXCJ0ZW1wbGF0ZSBpcyBhcnJheSwgdmFsdWUgaXMgXCIgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGZyb20ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdmFsLnB1c2goQ29uc3VtZXIuY29uZm9ybSh0ZW1wbGF0ZVsxXSwgZnJvbVtpXSwgZXh0ZXJuYWxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcGFyYXRlLCBkZWJ1ZykpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgdGVtcGxhdGUubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGZyb21baV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHZhbC5wdXNoKENvbnN1bWVyLmNvbmZvcm0odGVtcGxhdGVbaV0sIGZyb21baV0sIGV4dGVybmFscyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcGFyYXRlLCBkZWJ1ZykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbC5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbDtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdGVtcGxhdGUgPT09ICdvYmplY3QnICYmIGZyb20gIT09IHVuZGVmaW5lZCkge1xuICAgIHZhbCA9IHt9O1xuICAgIHV0aWwuZWFjaFByb3AodGVtcGxhdGUsIGZ1bmN0aW9uIChwcm9wLCBuYW1lKSB7XG4gICAgICBpZiAoZnJvbVtuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhbFtuYW1lXSA9IENvbnN1bWVyLmNvbmZvcm0ocHJvcCwgZnJvbVtuYW1lXSwgZXh0ZXJuYWxzLCBzZXBhcmF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWJ1Zyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuICBkZWJ1Zy5lcnJvcignVW5rbm93biB0ZW1wbGF0ZSBwcm92aWRlZDogJyArIHRlbXBsYXRlKTtcbn07XG5cbi8qKlxuICogTWFrZSBhIHRoaW5nIGludG8gYW4gQXJyYXkgQnVmZmVyXG4gKiBAc3RhdGljXG4gKiBAbWV0aG9kIG1ha2VBcnJheUJ1ZmZlclxuICogQHBhcmFtIHtPYmplY3R9IHRoaW5nXG4gKiBAcGFyYW0ge0RlYnVnfSBkZWJ1ZyBBIGRlYnVnZ2VyIGluIGNhc2Ugb2YgZXJyb3JzLlxuICogQHJldHVybiB7QXJyYXlCdWZmZXJ9IEFuIEFycmF5IEJ1ZmZlclxuICovXG5Db25zdW1lci5tYWtlQXJyYXlCdWZmZXIgPSBmdW5jdGlvbiAodGhpbmcsIGRlYnVnKSB7XG4gIGlmICghdGhpbmcpIHtcbiAgICByZXR1cm4gbmV3IEFycmF5QnVmZmVyKDApO1xuICB9XG5cbiAgaWYgKHRoaW5nIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm4gdGhpbmc7XG4gIH0gZWxzZSBpZiAodGhpbmcuY29uc3RydWN0b3IubmFtZSA9PT0gXCJBcnJheUJ1ZmZlclwiICYmXG4gICAgICB0eXBlb2YgdGhpbmcucHJvdG90eXBlID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgLy8gV29ya2Fyb3VuZCBmb3Igd2Via2l0IG9yaWdpbiBvd25lcnNoaXAgaXNzdWUuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL1VXTmV0d29ya3NMYWIvZnJlZWRvbS9pc3N1ZXMvMjhcbiAgICByZXR1cm4gbmV3IERhdGFWaWV3KHRoaW5nKS5idWZmZXI7XG4gIH0gZWxzZSB7XG4gICAgZGVidWcuZXJyb3IoJ2V4cGVjdGluZyBBcnJheUJ1ZmZlciwgYnV0IHNhdyAnICtcbiAgICAgICAgKHR5cGVvZiB0aGluZykgKyAnOiAnICsgSlNPTi5zdHJpbmdpZnkodGhpbmcpKTtcbiAgICByZXR1cm4gbmV3IEFycmF5QnVmZmVyKDApO1xuICB9XG59O1xuXG4vKipcbiAqIFJlY3Vyc2l2ZWx5IHRyYXZlcnNlIGEgW25lc3RlZF0gb2JqZWN0IGFuZCBmcmVlemUgaXRzIGtleXMgZnJvbSBiZWluZ1xuICogd3JpdGFibGUuIE5vdGUsIHRoZSByZXN1bHQgY2FuIGhhdmUgbmV3IGtleXMgYWRkZWQgdG8gaXQsIGJ1dCBleGlzdGluZyBvbmVzXG4gKiBjYW5ub3QgYmUgIG92ZXJ3cml0dGVuLiBEb2Vzbid0IGRvIGFueXRoaW5nIGZvciBhcnJheXMgb3Igb3RoZXIgY29sbGVjdGlvbnMuXG4gKlxuICogQG1ldGhvZCByZWN1cnNpdmVGcmVlemVPYmplY3RcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSBvYmplY3QgdG8gYmUgZnJvemVuXG4gKiBAcmV0dXJuIHtPYmplY3R9IG9ialxuICoqL1xuQ29uc3VtZXIucmVjdXJzaXZlRnJlZXplT2JqZWN0ID0gZnVuY3Rpb24gKG9iaikge1xuICB2YXIgaywgcmV0ID0ge307XG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBvYmo7XG4gIH1cbiAgZm9yIChrIGluIG9iaikge1xuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXQsIGssIHtcbiAgICAgICAgdmFsdWU6IENvbnN1bWVyLnJlY3Vyc2l2ZUZyZWV6ZU9iamVjdChvYmpba10pLFxuICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmV0O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb25zdW1lcjtcbiIsIi8qanNsaW50IGluZGVudDoyLCBub2RlOnRydWUsIHNsb3BweTp0cnVlICovXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG4vKipcbiAqIEEgZnJlZWRvbSBlbnRyeSBwb2ludCBmb3IgZGVidWdnaW5nLlxuICogQHVzZXMgaGFuZGxlRXZlbnRzXG4gKiBAaW1wbGVtZW50cyBQb3J0XG4gKiBAY29uc3RydWN0b3JcbiAqL1xudmFyIERlYnVnID0gZnVuY3Rpb24gKGxvZ2dlcikge1xuICB0aGlzLmlkID0gJ2RlYnVnJztcbiAgdGhpcy5lbWl0Q2hhbm5lbCA9IGZhbHNlO1xuICB0aGlzLmNvbmZpZyA9IGZhbHNlO1xuICB1dGlsLmhhbmRsZUV2ZW50cyh0aGlzKTtcbn07XG5cbi8qKlxuICogUHJvdmlkZSBhIHRleHR1YWwgZGVzY3JpcHRpb24gb2YgdGhpcyBwb3J0LlxuICogQG1ldGhvZCB0b1N0cmluZ1xuICogQHJldHVybiB7U3RyaW5nfSB0aGUgdGV4dHVhbCBkZXNjcmlwdGlvbi5cbiAqL1xuRGVidWcucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJ1tDb25zb2xlXSc7XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIGEgbG9nZ2VyIGZvciBvdXRwdXR0aW5nIGRlYnVnZ2luZyBtZXNzYWdlcy5cbiAqIEBtZXRob2Qgc2V0TG9nZ2VyXG4gKiBAcGFyYW0ge0NvbnNvbGV9IGxvZ2dlciBUaGUgbG9nZ2VyIHRvIHJlZ2lzdGVyXG4gKi9cbkRlYnVnLnByb3RvdHlwZS5zZXRMb2dnZXIgPSBmdW5jdGlvbiAobG9nZ2VyKSB7XG4gIGlmICh0aGlzLmxvZ2dlcikge1xuICAgIHRoaXMuaW5mbygnUmVwbGFjaW5nIExvZ2dlci4nKTtcbiAgfVxuICB0aGlzLmxvZ2dlciA9IGxvZ2dlcjtcbiAgdGhpcy5lbWl0KCdsb2dnZXInKTtcbn07XG5cbi8qKlxuICogSGFuZGxlciBmb3IgcmVjZWl2aW5nIG1lc3NhZ2VzIHNlbnQgdG8gdGhlIGRlYnVnIHBvcnQuXG4gKiBUaGVzZSBtZXNzYWdlcyBhcmUgdXNlZCB0byByZXRyZWl2ZSBjb25maWcgZm9yIGV4cG9zaW5nIGNvbnNvbGUuXG4gKiBAbWV0aG9kIG9uTWVzc2FnZVxuICogQHBhcmFtIHtTdHJpbmd9IHNvdXJjZSB0aGUgc291cmNlIGlkZW50aWZpZXIgZm9yIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2UgdGhlIHJlY2VpdmVkIG1lc3NhZ2UuXG4gKi9cbkRlYnVnLnByb3RvdHlwZS5vbk1lc3NhZ2UgPSBmdW5jdGlvbiAoc291cmNlLCBtZXNzYWdlKSB7XG4gIGlmIChzb3VyY2UgPT09ICdjb250cm9sJyAmJiBtZXNzYWdlLmNoYW5uZWwgJiYgIXRoaXMuZW1pdENoYW5uZWwpIHtcbiAgICB0aGlzLmVtaXRDaGFubmVsID0gbWVzc2FnZS5jaGFubmVsO1xuICAgIHRoaXMuY29uZmlnID0gbWVzc2FnZS5jb25maWc7XG4gICAgaWYgKCF0aGlzLmNvbmZpZy5nbG9iYWwuY29uc29sZSkge1xuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLmNvbmZpZy5nbG9iYWwuY29uc29sZSA9IGNvbnNvbGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbmZpZy5nbG9iYWwuY29uc29sZSA9IHRoaXMuZ2V0TG9nZ2VyKCdDb25zb2xlJyk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZW1pdCgncmVhZHknKTtcbiAgfVxufTtcblxuLyoqXG4gKiBEaXNwYXRjaCBhIGRlYnVnIG1lc3NhZ2Ugd2l0aCBhcmJpdHJhcnkgc2V2ZXJpdHkuXG4gKiBBbGwgZGVidWcgbWVzc2FnZXMgYXJlIHJvdXRlZCB0aHJvdWdoIHRoZSBtYW5hZ2VyLCB0byBhbGxvdyBmb3IgZGVsZWdhdGlvbi5cbiAqIEBtZXRob2QgZm9ybWF0XG4gKiBAcGFyYW0ge1N0cmluZ30gc2V2ZXJpdHkgdGhlIHNldmVyaXR5IG9mIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtTdHJpbmd9IHNvdXJjZSBUaGUgbG9jYXRpb24gb2YgbWVzc2FnZS5cbiAqIEBwYXJhbSB7U3RyaW5nW119IGFyZ3MgVGhlIGNvbnRlbnRzIG9mIHRoZSBtZXNzYWdlLlxuICogQHByaXZhdGVcbiAqL1xuRGVidWcucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uIChzZXZlcml0eSwgc291cmNlLCBhcmdzKSB7XG4gIHZhciBpLCBhbGlzdCA9IFtdLCBhcmdhcnI7XG4gIGlmICh0eXBlb2YgYXJncyA9PT0gXCJzdHJpbmdcIiAmJiBzb3VyY2UpIHtcbiAgICB0cnkge1xuICAgICAgYXJnYXJyID0gSlNPTi5wYXJzZShhcmdzKTtcbiAgICAgIGlmIChhcmdhcnIgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBhcmdzID0gYXJnYXJyO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIHBhc3MuXG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiBhcmdzID09PSBcInN0cmluZ1wiKSB7XG4gICAgYWxpc3QucHVzaChhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgYWxpc3QucHVzaChhcmdzW2ldKTtcbiAgICB9XG4gIH1cbiAgaWYgKCF0aGlzLmVtaXRDaGFubmVsKSB7XG4gICAgdGhpcy5vbigncmVhZHknLCB0aGlzLmZvcm1hdC5iaW5kKHRoaXMsIHNldmVyaXR5LCBzb3VyY2UsIGFsaXN0KSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMuZW1pdCh0aGlzLmVtaXRDaGFubmVsLCB7XG4gICAgc2V2ZXJpdHk6IHNldmVyaXR5LFxuICAgIHNvdXJjZTogc291cmNlLFxuICAgIHF1aWV0OiB0cnVlLFxuICAgIHJlcXVlc3Q6ICdkZWJ1ZycsXG4gICAgbXNnOiBKU09OLnN0cmluZ2lmeShhbGlzdClcbiAgfSk7XG59O1xuXG4vKipcbiAqIFByaW50IHJlY2VpdmVkIG1lc3NhZ2VzIG9uIHRoZSBjb25zb2xlLlxuICogVGhpcyBpcyBjYWxsZWQgYnkgdGhlIG1hbmFnZXIgaW4gcmVzcG9uc2UgdG8gYW4gZW1pc3Npb24gZnJvbSBmb3JtYXQuXG4gKiBAbWV0aG9kIHByaW50XG4gKiBAcGFyYW0ge09iamVjdH0gbWVzc2FnZSBUaGUgbWVzc2FnZSBlbWl0dGVkIGJ5IHtAc2VlIGZvcm1hdH0gdG8gcHJpbnQuXG4gKi9cbkRlYnVnLnByb3RvdHlwZS5wcmludCA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gIGlmICghdGhpcy5sb2dnZXIpIHtcbiAgICB0aGlzLm9uY2UoJ2xvZ2dlcicsIHRoaXMucHJpbnQuYmluZCh0aGlzLCBtZXNzYWdlKSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGFyZ3MsIGFyciA9IFtdLCBpID0gMDtcbiAgYXJncyA9IEpTT04ucGFyc2UobWVzc2FnZS5tc2cpO1xuICBpZiAodHlwZW9mIGFyZ3MgPT09IFwic3RyaW5nXCIpIHtcbiAgICBhcnIucHVzaChhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoYXJnc1tpXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBhcnIucHVzaChhcmdzW2ldKTtcbiAgICAgIGkgKz0gMTtcbiAgICB9XG4gIH1cbiAgdGhpcy5sb2dnZXJbbWVzc2FnZS5zZXZlcml0eV0uY2FsbCh0aGlzLmxvZ2dlciwgbWVzc2FnZS5zb3VyY2UsIGFyciwgZnVuY3Rpb24gKCkge30pO1xufTtcblxuLyoqXG4gKiBQcmludCBhIGxvZyBtZXNzYWdlIHRvIHRoZSBjb25zb2xlLlxuICogQG1ldGhvZCBsb2dcbiAqL1xuRGVidWcucHJvdG90eXBlLmxvZyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5mb3JtYXQoJ2xvZycsIHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogUHJpbnQgYW4gaW5mbyBtZXNzYWdlIHRvIHRoZSBjb25zb2xlLlxuICogQG1ldGhvZCBsb2dcbiAqL1xuRGVidWcucHJvdG90eXBlLmluZm8gPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZm9ybWF0KCdpbmZvJywgdW5kZWZpbmVkLCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBQcmludCBhIGRlYnVnIG1lc3NhZ2UgdG8gdGhlIGNvbnNvbGUuXG4gKiBAbWV0aG9kIGxvZ1xuICovXG5EZWJ1Zy5wcm90b3R5cGUuZGVidWcgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZm9ybWF0KCdkZWJ1ZycsIHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogUHJpbnQgYSB3YXJuaW5nIG1lc3NhZ2UgdG8gdGhlIGNvbnNvbGUuXG4gKiBAbWV0aG9kIHdhcm5cbiAqL1xuRGVidWcucHJvdG90eXBlLndhcm4gPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZm9ybWF0KCd3YXJuJywgdW5kZWZpbmVkLCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBQcmludCBhbiBlcnJvciBtZXNzYWdlIHRvIHRoZSBjb25zb2xlLlxuICogQG1ldGhvZCBlcnJvclxuICovXG5EZWJ1Zy5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZm9ybWF0KCdlcnJvcicsIHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogR2V0IGEgbG9nZ2VyIHRoYXQgbG9ncyBtZXNzYWdlcyBwcmVmaXhlZCBieSBhIGdpdmVuIG5hbWUuXG4gKiBAbWV0aG9kIGdldExvZ2dlclxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIHByZWZpeCBmb3IgbG9nZ2VkIG1lc3NhZ2VzLlxuICogQHJldHVybnMge0NvbnNvbGV9IEEgY29uc29sZS1saWtlIG9iamVjdC5cbiAqL1xuRGVidWcucHJvdG90eXBlLmdldExvZ2dlciA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciBsb2cgPSBmdW5jdGlvbiAoc2V2ZXJpdHksIHNvdXJjZSkge1xuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNwbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gICAgdGhpcy5mb3JtYXQoc2V2ZXJpdHksIHNvdXJjZSwgYXJncyk7XG4gIH0sXG4gICAgbG9nZ2VyID0ge1xuICAgICAgZnJlZWRvbTogdHJ1ZSxcbiAgICAgIGRlYnVnOiBsb2cuYmluZCh0aGlzLCAnZGVidWcnLCBuYW1lKSxcbiAgICAgIGluZm86IGxvZy5iaW5kKHRoaXMsICdpbmZvJywgbmFtZSksXG4gICAgICBsb2c6IGxvZy5iaW5kKHRoaXMsICdsb2cnLCBuYW1lKSxcbiAgICAgIHdhcm46IGxvZy5iaW5kKHRoaXMsICd3YXJuJywgbmFtZSksXG4gICAgICBlcnJvcjogbG9nLmJpbmQodGhpcywgJ2Vycm9yJywgbmFtZSlcbiAgICB9O1xuICByZXR1cm4gbG9nZ2VyO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBEZWJ1ZztcbiIsIihmdW5jdGlvbiAoZ2xvYmFsKXtcbi8qanNsaW50IGluZGVudDoyLG5vZGU6dHJ1ZSAqL1xyXG52YXIgUHJvbWlzZUNvbXBhdCA9IHJlcXVpcmUoJ2VzNi1wcm9taXNlJykuUHJvbWlzZTtcclxuXHJcbnZhciBBcGkgPSByZXF1aXJlKCcuL2FwaScpO1xyXG52YXIgRGVidWcgPSByZXF1aXJlKCcuL2RlYnVnJyk7XHJcbnZhciBIdWIgPSByZXF1aXJlKCcuL2h1YicpO1xyXG52YXIgTWFuYWdlciA9IHJlcXVpcmUoJy4vbWFuYWdlcicpO1xyXG52YXIgUG9saWN5ID0gcmVxdWlyZSgnLi9wb2xpY3knKTtcclxudmFyIFByb3h5QmluZGVyID0gcmVxdWlyZSgnLi9wcm94eWJpbmRlcicpO1xyXG52YXIgUmVzb3VyY2UgPSByZXF1aXJlKCcuL3Jlc291cmNlJyk7XHJcbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XHJcbnZhciBCdW5kbGUgPSByZXF1aXJlKCcuL2J1bmRsZScpO1xyXG5cclxudmFyIGZyZWVkb21HbG9iYWw7XHJcbnZhciBnZXRHbG9iYWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG4gIFxyXG4gIC8vIE5vZGUuanNcclxuICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsLnByb3RvdHlwZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICBmcmVlZG9tR2xvYmFsID0gZ2xvYmFsO1xyXG4gIC8vIEJyb3dzZXJzXHJcbiAgfSBlbHNlIHtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICBmcmVlZG9tR2xvYmFsID0gdGhpcztcclxuICAgIH0sIDApO1xyXG4gIH1cclxufTtcclxuZ2V0R2xvYmFsKCk7XHJcblxyXG4vKipcclxuICogQ3JlYXRlIGEgbmV3IGZyZWVkb20gY29udGV4dC5cclxuICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHQgSW5mb3JtYXRpb24gYWJvdXQgdGhlIGxvY2FsIGNvbnRleHQuXHJcbiAqIEBzZWUge3V0aWwvd29ya2VyRW50cnkuanN9XHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBtYW5pZmVzdCBUaGUgbWFuaWZlc3QgdG8gbG9hZC5cclxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBDb25maWd1cmF0aW9uIGtleXMgc2V0IGJ5IHRoZSB1c2VyLlxyXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gQSBwcm9taXNlIGZvciB0aGUgbW9kdWxlIGRlZmluZWQgaW4gdGhlIG1hbmlmZXN0LlxyXG4gKi9cclxudmFyIHNldHVwID0gZnVuY3Rpb24gKGNvbnRleHQsIG1hbmlmZXN0LCBjb25maWcpIHtcclxuICAndXNlIHN0cmljdCc7XHJcbiAgdmFyIGRlYnVnID0gbmV3IERlYnVnKCksXHJcbiAgICBodWIgPSBuZXcgSHViKGRlYnVnKSxcclxuICAgIHJlc291cmNlID0gbmV3IFJlc291cmNlKGRlYnVnKSxcclxuICAgIGFwaSA9IG5ldyBBcGkoZGVidWcpLFxyXG4gICAgbWFuYWdlciA9IG5ldyBNYW5hZ2VyKGh1YiwgcmVzb3VyY2UsIGFwaSksXHJcbiAgICBiaW5kZXIgPSBuZXcgUHJveHlCaW5kZXIobWFuYWdlciksXHJcbiAgICBwb2xpY3ksXHJcbiAgICBzaXRlX2NmZyA9IHtcclxuICAgICAgJ2RlYnVnJzogJ2xvZycsXHJcbiAgICAgICdtYW5pZmVzdCc6IG1hbmlmZXN0LFxyXG4gICAgICAnbW9kdWxlQ29udGV4dCc6ICghY29udGV4dCB8fCB0eXBlb2YgKGNvbnRleHQuaXNNb2R1bGUpID09PSBcInVuZGVmaW5lZFwiKSA/XHJcbiAgICAgICAgICB1dGlsLmlzTW9kdWxlQ29udGV4dCgpIDpcclxuICAgICAgICAgIGNvbnRleHQuaXNNb2R1bGVcclxuICAgIH0sXHJcbiAgICBsaW5rLFxyXG4gICAgUG9ydCxcclxuICAgIGNsZWFudXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGFwaS5jbGVhbnVwKCk7XHJcbiAgICAgIG1hbmFnZXIuZGVzdHJveSgpO1xyXG4gICAgfTtcclxuXHJcbiAgaWYgKGNvbmZpZykge1xyXG4gICAgdXRpbC5taXhpbihzaXRlX2NmZywgY29uZmlnLCB0cnVlKTtcclxuICB9XHJcbiAgc2l0ZV9jZmcuZ2xvYmFsID0gZnJlZWRvbUdsb2JhbDtcclxuICBpZiAoY29udGV4dCkge1xyXG4gICAgdXRpbC5taXhpbihzaXRlX2NmZywgY29udGV4dCwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICAvLyBSZWdpc3RlciB1c2VyLXN1cHBsaWVkIGV4dGVuc2lvbnMuXHJcbiAgLy8gRm9yIGV4YW1wbGUgdGhlICdjb3JlLm9hdXRoJyBwcm92aWRlciBkZWZpbmVzIGEgcmVnaXN0ZXIgZnVuY3Rpb24sXHJcbiAgLy8gd2hpY2ggZW5hYmxlcyBzaXRlX2NmZy5vYXV0aCB0byBiZSByZWdpc3RlcmVkIHdpdGggaXQuXHJcbiAgY29udGV4dC5wcm92aWRlcnMuZm9yRWFjaChmdW5jdGlvbiAocHJvdmlkZXIpIHtcclxuICAgIHZhciBuYW1lO1xyXG4gICAgaWYgKHByb3ZpZGVyLm5hbWUuaW5kZXhPZignY29yZS4nKSA9PT0gMCAmJlxyXG4gICAgICAgIHR5cGVvZiBwcm92aWRlci5yZWdpc3RlciA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBuYW1lID0gcHJvdmlkZXIubmFtZS5zdWJzdHIoNSk7XHJcbiAgICAgIC8vIEludmVydCBwcmlvcml0eSBhbmQgcHJlZmVyIHVzZXIgY29uZmlnIG92ZXIgbG9jYWwgY29udGV4dCBmb3IgdGhlc2UuXHJcbiAgICAgIGlmIChjb25maWcgJiYgY29uZmlnW25hbWVdKSB7XHJcbiAgICAgICAgcHJvdmlkZXIucmVnaXN0ZXIoY29uZmlnW25hbWVdKTtcclxuICAgICAgfSBlbHNlIGlmIChzaXRlX2NmZ1tuYW1lXSkge1xyXG4gICAgICAgIHByb3ZpZGVyLnJlZ2lzdGVyKHNpdGVfY2ZnW25hbWVdKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwcm92aWRlci5yZWdpc3Rlcih1bmRlZmluZWQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgXHJcbiAgQnVuZGxlLnJlZ2lzdGVyKGNvbnRleHQucHJvdmlkZXJzLCBhcGkpO1xyXG4gIHJlc291cmNlLnJlZ2lzdGVyKGNvbnRleHQucmVzb2x2ZXJzIHx8IFtdKTtcclxuXHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ29tcGF0KGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgIGlmIChzaXRlX2NmZy5tb2R1bGVDb250ZXh0KSB7XHJcbiAgICAgIFBvcnQgPSBzaXRlX2NmZy5wb3J0VHlwZTtcclxuICAgICAgbGluayA9IG5ldyBQb3J0KCdPdXRib3VuZCcsIHJlc291cmNlKTtcclxuICAgICAgbWFuYWdlci5zZXR1cChsaW5rKTtcclxuXHJcbiAgICAgIC8vIERlbGF5IGRlYnVnIG1lc3NhZ2VzIHVudGlsIGRlbGVnYXRpb24gdG8gdGhlIHBhcmVudCBjb250ZXh0IGlzIHNldHVwLlxyXG4gICAgICBtYW5hZ2VyLm9uY2UoJ2RlbGVnYXRlJywgbWFuYWdlci5zZXR1cC5iaW5kKG1hbmFnZXIsIGRlYnVnKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtYW5hZ2VyLnNldHVwKGRlYnVnKTtcclxuICAgICAgcG9saWN5ID0gbmV3IFBvbGljeShtYW5hZ2VyLCByZXNvdXJjZSwgc2l0ZV9jZmcpO1xyXG5cclxuICAgICAgLy8gRGVmaW5lIGhvdyB0byBsb2FkIGEgcm9vdCBtb2R1bGUuXHJcbiAgICAgIHZhciBmYWxsYmFja0xvZ2dlciwgZ2V0SWZhY2U7XHJcbiAgICAgIGZhbGxiYWNrTG9nZ2VyID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICBhcGkuZ2V0Q29yZSgnY29yZS5jb25zb2xlJywge1xyXG4gICAgICAgICAgY29uZmlnOiBzaXRlX2NmZ1xyXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHByb3ZpZGVyKSB7XHJcbiAgICAgICAgICB2YXIgbG9nZ2VyID0gbmV3IHByb3ZpZGVyLmluc3QoKTtcclxuICAgICAgICAgIGRlYnVnLnNldExvZ2dlcihsb2dnZXIpO1xyXG4gICAgICAgICAgaWYgKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgZGVidWcuZXJyb3IobWVzc2FnZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcbiAgICAgIGdldElmYWNlID0gZnVuY3Rpb24gKG1hbmlmZXN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc291cmNlLmdldChzaXRlX2NmZy5sb2NhdGlvbiwgbWFuaWZlc3QpLnRoZW4oXHJcbiAgICAgICAgICBmdW5jdGlvbiAoY2Fub25pY2FsX21hbmlmZXN0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwb2xpY3kuZ2V0KFtdLCBjYW5vbmljYWxfbWFuaWZlc3QpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICkudGhlbihmdW5jdGlvbiAoaW5zdGFuY2UpIHtcclxuICAgICAgICAgIG1hbmFnZXIuc2V0dXAoaW5zdGFuY2UpO1xyXG4gICAgICAgICAgcmV0dXJuIGJpbmRlci5iaW5kRGVmYXVsdChpbnN0YW5jZSwgYXBpLCBpbnN0YW5jZS5tYW5pZmVzdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICAvLyBMb2FkIGFwcHJvcHJpYXRlIExvZ2dlci5cclxuICAgICAgaWYgKHNpdGVfY2ZnLmxvZ2dlcikge1xyXG4gICAgICAgIGdldElmYWNlKHNpdGVfY2ZnLmxvZ2dlcikudGhlbihmdW5jdGlvbiAoaWZhY2UpIHtcclxuICAgICAgICAgIGlmIChpZmFjZS5leHRlcm5hbC5hcGkgIT09ICdjb25zb2xlJykge1xyXG4gICAgICAgICAgICBmYWxsYmFja0xvZ2dlcihcIlVud2lsbGluZyB0byB1c2UgbG9nZ2VyIHdpdGggdW5rbm93biBBUEk6XCIsXHJcbiAgICAgICAgICAgICAgaWZhY2UuZXh0ZXJuYWwuYXBpKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRlYnVnLnNldExvZ2dlcihpZmFjZS5leHRlcm5hbCgpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCBmYWxsYmFja0xvZ2dlcik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZmFsbGJhY2tMb2dnZXIoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gTG9hZCByb290IG1vZHVsZS5cclxuICAgICAgZ2V0SWZhY2Uoc2l0ZV9jZmcubWFuaWZlc3QpLnRoZW4oZnVuY3Rpb24gKGlmYWNlKSB7XHJcbiAgICAgICAgaWZhY2UucG9ydC5vbmNlKCdjbG9zZScsIGNsZWFudXApO1xyXG4gICAgICAgIHJldHVybiBpZmFjZS5leHRlcm5hbDtcclxuICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgIGRlYnVnLmVycm9yKCdGYWlsZWQgdG8gcmV0cmlldmUgbWFuaWZlc3Q6ICcgKyBlcnIpO1xyXG4gICAgICAgIHRocm93IGVycjtcclxuICAgICAgfSkudGhlbihyZXNvbHZlLCByZWplY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGh1Yi5lbWl0KCdjb25maWcnLCBzaXRlX2NmZyk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHNldHVwO1xyXG5cbn0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KSIsIi8qanNsaW50IGluZGVudDoyLHNsb3BweTp0cnVlLG5vZGU6dHJ1ZSAqL1xyXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xyXG5cclxuLyoqXHJcbiAqIERlZmluZXMgZmRvbS5IdWIsIHRoZSBjb3JlIG1lc3NhZ2UgaHViIGJldHdlZW4gZnJlZWRvbSBtb2R1bGVzLlxyXG4gKiBJbmNvbW1pbmcgbWVzc2FnZXMgZnJvbSBhcHBzIGFyZSBzZW50IHRvIGh1Yi5vbk1lc3NhZ2UoKVxyXG4gKiBAY2xhc3MgSHViXHJcbiAqIEBwYXJhbSB7RGVidWd9IGRlYnVnIExvZ2dlciBmb3IgZGVidWdnaW5nLlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbnZhciBIdWIgPSBmdW5jdGlvbiAoZGVidWcpIHtcclxuICB0aGlzLmRlYnVnID0gZGVidWc7XHJcbiAgdGhpcy5jb25maWcgPSB7fTtcclxuICB0aGlzLmFwcHMgPSB7fTtcclxuICB0aGlzLnJvdXRlcyA9IHt9O1xyXG5cclxuICB1dGlsLmhhbmRsZUV2ZW50cyh0aGlzKTtcclxuICB0aGlzLm9uKCdjb25maWcnLCBmdW5jdGlvbiAoY29uZmlnKSB7XHJcbiAgICB1dGlsLm1peGluKHRoaXMuY29uZmlnLCBjb25maWcpO1xyXG4gIH0uYmluZCh0aGlzKSk7XHJcbn07XHJcblxyXG4vKipcclxuICogSGFuZGxlIGFuIGluY29taW5nIG1lc3NhZ2UgZnJvbSBhIGZyZWVkb20gYXBwLlxyXG4gKiBAbWV0aG9kIG9uTWVzc2FnZVxyXG4gKiBAcGFyYW0ge1N0cmluZ30gc291cmNlIFRoZSBpZGVudGlmaXlpbmcgc291cmNlIG9mIHRoZSBtZXNzYWdlLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gbWVzc2FnZSBUaGUgc2VudCBtZXNzYWdlLlxyXG4gKi9cclxuSHViLnByb3RvdHlwZS5vbk1lc3NhZ2UgPSBmdW5jdGlvbiAoc291cmNlLCBtZXNzYWdlKSB7XHJcbiAgdmFyIGRlc3RpbmF0aW9uID0gdGhpcy5yb3V0ZXNbc291cmNlXSwgdHlwZTtcclxuICBpZiAoIWRlc3RpbmF0aW9uIHx8ICFkZXN0aW5hdGlvbi5hcHApIHtcclxuICAgIHRoaXMuZGVidWcud2FybihcIk1lc3NhZ2UgZHJvcHBlZCBmcm9tIHVucmVnaXN0ZXJlZCBzb3VyY2UgXCIgKyBzb3VyY2UpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgaWYgKCF0aGlzLmFwcHNbZGVzdGluYXRpb24uYXBwXSkge1xyXG4gICAgdGhpcy5kZWJ1Zy53YXJuKFwiTWVzc2FnZSBkcm9wcGVkIHRvIGRlc3RpbmF0aW9uIFwiICsgZGVzdGluYXRpb24uYXBwKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIFRoZSBmaXJlaG9zZSB0cmFjaW5nIGFsbCBpbnRlcm5hbCBmcmVlZG9tLmpzIG1lc3NhZ2VzLlxyXG4gIGlmICghbWVzc2FnZS5xdWlldCAmJiAhZGVzdGluYXRpb24ucXVpZXQgJiYgdGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcudHJhY2UpIHtcclxuICAgIHR5cGUgPSBtZXNzYWdlLnR5cGU7XHJcbiAgICBpZiAobWVzc2FnZS50eXBlID09PSAnbWVzc2FnZScgJiYgbWVzc2FnZS5tZXNzYWdlICYmXHJcbiAgICAgICAgbWVzc2FnZS5tZXNzYWdlLmFjdGlvbiA9PT0gJ21ldGhvZCcpIHtcclxuICAgICAgdHlwZSA9ICdtZXRob2QuJyArIG1lc3NhZ2UubWVzc2FnZS50eXBlO1xyXG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLnR5cGUgPT09ICdtZXRob2QnICYmIG1lc3NhZ2UubWVzc2FnZSAmJlxyXG4gICAgICAgIG1lc3NhZ2UubWVzc2FnZS50eXBlID09PSAnbWV0aG9kJykge1xyXG4gICAgICB0eXBlID0gJ3JldHVybi4nICsgbWVzc2FnZS5tZXNzYWdlLm5hbWU7XHJcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ21lc3NhZ2UnICYmIG1lc3NhZ2UubWVzc2FnZSAmJlxyXG4gICAgICAgIG1lc3NhZ2UubWVzc2FnZS50eXBlID09PSAnZXZlbnQnKSB7XHJcbiAgICAgIHR5cGUgPSAnZXZlbnQuJyArIG1lc3NhZ2UubWVzc2FnZS5uYW1lO1xyXG4gICAgfVxyXG4gICAgdGhpcy5kZWJ1Zy5kZWJ1Zyh0aGlzLmFwcHNbZGVzdGluYXRpb24uc291cmNlXS50b1N0cmluZygpICtcclxuICAgICAgICBcIiAtXCIgKyB0eXBlICsgXCItPiBcIiArXHJcbiAgICAgICAgdGhpcy5hcHBzW2Rlc3RpbmF0aW9uLmFwcF0udG9TdHJpbmcoKSArIFwiLlwiICsgZGVzdGluYXRpb24uZmxvdyk7XHJcbiAgfVxyXG5cclxuICB0aGlzLmFwcHNbZGVzdGluYXRpb24uYXBwXS5vbk1lc3NhZ2UoZGVzdGluYXRpb24uZmxvdywgbWVzc2FnZSk7XHJcbn07XHJcblxyXG4vKipcclxuICogR2V0IHRoZSBsb2NhbCBkZXN0aW5hdGlvbiBwb3J0IG9mIGEgZmxvdy5cclxuICogQG1ldGhvZCBnZXREZXN0aW5hdGlvblxyXG4gKiBAcGFyYW0ge1N0cmluZ30gc291cmNlIFRoZSBmbG93IHRvIHJldHJpZXZlLlxyXG4gKiBAcmV0dXJuIHtQb3J0fSBUaGUgZGVzdGluYXRpb24gcG9ydC5cclxuICovXHJcbkh1Yi5wcm90b3R5cGUuZ2V0RGVzdGluYXRpb24gPSBmdW5jdGlvbiAoc291cmNlKSB7XHJcbiAgdmFyIGRlc3RpbmF0aW9uID0gdGhpcy5yb3V0ZXNbc291cmNlXTtcclxuICBpZiAoIWRlc3RpbmF0aW9uKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbiAgcmV0dXJuIHRoaXMuYXBwc1tkZXN0aW5hdGlvbi5hcHBdO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEdldCB0aGUgbG9jYWwgc291cmNlIHBvcnQgb2YgYSBmbG93LlxyXG4gKiBAbWV0aG9kIGdldFNvdXJjZVxyXG4gKiBAcGFyYW0ge1BvcnR9IHNvdXJjZSBUaGUgZmxvdyBpZGVudGlmaWVyIHRvIHJldHJpZXZlLlxyXG4gKiBAcmV0dXJuIHtQb3J0fSBUaGUgc291cmNlIHBvcnQuXHJcbiAqL1xyXG5IdWIucHJvdG90eXBlLmdldFNvdXJjZSA9IGZ1bmN0aW9uIChzb3VyY2UpIHtcclxuICBpZiAoIXNvdXJjZSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBpZiAoIXRoaXMuYXBwc1tzb3VyY2UuaWRdKSB7XHJcbiAgICB0aGlzLmRlYnVnLndhcm4oXCJObyByZWdpc3RlcmVkIHNvdXJjZSAnXCIgKyBzb3VyY2UuaWQgKyBcIidcIik7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHJldHVybiB0aGlzLmFwcHNbc291cmNlLmlkXTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZWdpc3RlciBhIGRlc3RpbmF0aW9uIGZvciBtZXNzYWdlcyB3aXRoIHRoaXMgaHViLlxyXG4gKiBAbWV0aG9kIHJlZ2lzdGVyXHJcbiAqIEBwYXJhbSB7UG9ydH0gYXBwIFRoZSBQb3J0IHRvIHJlZ2lzdGVyLlxyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtmb3JjZV0gV2hldGhlciB0byBvdmVycmlkZSBhbiBleGlzdGluZyBwb3J0LlxyXG4gKiBAcmV0dXJuIHtCb29sZWFufSBXaGV0aGVyIHRoZSBhcHAgd2FzIHJlZ2lzdGVyZWQuXHJcbiAqL1xyXG5IdWIucHJvdG90eXBlLnJlZ2lzdGVyID0gZnVuY3Rpb24gKGFwcCwgZm9yY2UpIHtcclxuICBpZiAoIXRoaXMuYXBwc1thcHAuaWRdIHx8IGZvcmNlKSB7XHJcbiAgICB0aGlzLmFwcHNbYXBwLmlkXSA9IGFwcDtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIERlcmVnaXN0ZXIgYSBkZXN0aW5hdGlvbiBmb3IgbWVzc2FnZXMgd2l0aCB0aGUgaHViLlxyXG4gKiBOb3RlOiBkb2VzIG5vdCByZW1vdmUgYXNzb2NpYXRlZCByb3V0ZXMuIEFzIHN1Y2gsIGRlcmVnaXN0ZXJpbmcgd2lsbFxyXG4gKiBwcmV2ZW50IHRoZSBpbnN0YWxsYXRpb24gb2YgbmV3IHJvdXRlcywgYnV0IHdpbGwgbm90IGRpc3RydXB0IGV4aXN0aW5nXHJcbiAqIGh1YiByb3V0ZXMuXHJcbiAqIEBtZXRob2QgZGVyZWdpc3RlclxyXG4gKiBAcGFyYW0ge1BvcnR9IGFwcCBUaGUgUG9ydCB0byBkZXJlZ2lzdGVyXHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59IFdoZXRoZXIgdGhlIGFwcCB3YXMgZGVyZWdpc3RlcmVkLlxyXG4gKi9cclxuSHViLnByb3RvdHlwZS5kZXJlZ2lzdGVyID0gZnVuY3Rpb24gKGFwcCkge1xyXG4gIGlmICghdGhpcy5hcHBzW2FwcC5pZF0pIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgZGVsZXRlIHRoaXMuYXBwc1thcHAuaWRdO1xyXG4gIHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEluc3RhbGwgYSBuZXcgcm91dGUgaW4gdGhlIGh1Yi5cclxuICogQG1ldGhvZCBpbnN0YWxsXHJcbiAqIEBwYXJhbSB7UG9ydH0gc291cmNlIFRoZSBzb3VyY2Ugb2YgdGhlIHJvdXRlLlxyXG4gKiBAcGFyYW0ge1BvcnR9IGRlc3RpbmF0aW9uIFRoZSBkZXN0aW5hdGlvbiBvZiB0aGUgcm91dGUuXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBmbG93IFRoZSBmbG93IHdoZXJlIHRoZSBkZXN0aW5hdGlvbiB3aWxsIHJlY2VpdmUgbWVzc2FnZXMuXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gcXVpZXQgV2hldGhlciBtZXNzYWdlcyBvbiB0aGlzIHJvdXRlIHNob3VsZCBiZSBzdXBwcmVzc2VkLlxyXG4gKiBAcmV0dXJuIHtTdHJpbmd9IEEgcm91dGluZyBzb3VyY2UgaWRlbnRpZmllciBmb3Igc2VuZGluZyBtZXNzYWdlcy5cclxuICovXHJcbkh1Yi5wcm90b3R5cGUuaW5zdGFsbCA9IGZ1bmN0aW9uIChzb3VyY2UsIGRlc3RpbmF0aW9uLCBmbG93LCBxdWlldCkge1xyXG4gIHNvdXJjZSA9IHRoaXMuZ2V0U291cmNlKHNvdXJjZSk7XHJcbiAgaWYgKCFzb3VyY2UpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYgKCFkZXN0aW5hdGlvbikge1xyXG4gICAgdGhpcy5kZWJ1Zy53YXJuKFwiVW53aWxsaW5nIHRvIGdlbmVyYXRlIGJsYWNraG9sZSBmbG93IGZyb20gXCIgKyBzb3VyY2UuaWQpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgdmFyIHJvdXRlID0gdGhpcy5nZW5lcmF0ZVJvdXRlKCk7XHJcbiAgdGhpcy5yb3V0ZXNbcm91dGVdID0ge1xyXG4gICAgYXBwOiBkZXN0aW5hdGlvbixcclxuICAgIGZsb3c6IGZsb3csXHJcbiAgICBzb3VyY2U6IHNvdXJjZS5pZCxcclxuICAgIHF1aWV0OiBxdWlldFxyXG4gIH07XHJcbiAgaWYgKHR5cGVvZiBzb3VyY2Uub24gPT09ICdmdW5jdGlvbicpIHtcclxuICAgIHNvdXJjZS5vbihyb3V0ZSwgdGhpcy5vbk1lc3NhZ2UuYmluZCh0aGlzLCByb3V0ZSkpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJvdXRlO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFVuaW5zdGFsbCBhIGh1YiByb3V0ZS5cclxuICogQG1ldGhvZCB1bmluc3RhbGxcclxuICogQHBhcmFtIHtQb3J0fSBzb3VyY2UgVGhlIHNvdXJjZSBvZiB0aGUgcm91dGUuXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBmbG93IFRoZSByb3V0ZSB0byB1bmluc3RhbGwuXHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59IFdoZXRoZXIgdGhlIHJvdXRlIHdhcyBhYmxlIHRvIGJlIHVuaW5zdGFsbGVkLlxyXG4gKi9cclxuSHViLnByb3RvdHlwZS51bmluc3RhbGwgPSBmdW5jdGlvbiAoc291cmNlLCBmbG93KSB7XHJcbiAgc291cmNlID0gdGhpcy5nZXRTb3VyY2Uoc291cmNlKTtcclxuICBpZiAoIXNvdXJjZSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgdmFyIHJvdXRlID0gdGhpcy5yb3V0ZXNbZmxvd107XHJcbiAgaWYgKCFyb3V0ZSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0gZWxzZSBpZiAocm91dGUuc291cmNlICE9PSBzb3VyY2UuaWQpIHtcclxuICAgIHRoaXMuZGVidWcud2FybihcIkZsb3cgXCIgKyBmbG93ICsgXCIgZG9lcyBub3QgYmVsb25nIHRvIHBvcnQgXCIgKyBzb3VyY2UuaWQpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlIHRoaXMucm91dGVzW2Zsb3ddO1xyXG4gIGlmICh0eXBlb2Ygc291cmNlLm9mZiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgc291cmNlLm9mZihyb3V0ZSk7XHJcbiAgfVxyXG4gIHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSBhbGwgbGlzdGVuZXJzIGFuZCBub3RpZnkgYWxsIGNvbm5lY3RlZCBkZXN0aW5hdGlvbnMgb2YgdGhlaXIgcmVtb3ZhbC5cclxuICogQG1ldGhvZCB0ZWFyZG93blxyXG4gKi9cclxuSHViLnByb3RvdHlwZS50ZWFyZG93biA9IGZ1bmN0aW9uICgpIHtcclxuICB1dGlsLmVhY2hQcm9wKHRoaXMuYXBwcywgZnVuY3Rpb24gKHNvdXJjZSkge1xyXG4gICAgaWYgKHR5cGVvZiBzb3VyY2Uub2ZmID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHNvdXJjZS5vZmYoKTtcclxuICAgIH1cclxuICB9KTtcclxuICB0aGlzLmFwcHMgPSB7fTtcclxuICB0aGlzLnJvdXRlcyA9IHt9O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEdlbmVyYXRlIGEgdW5pcXVlIHJvdXRpbmcgaWRlbnRpZmllci5cclxuICogQG1ldGhvZCBnZW5lcmF0ZVJvdXRlXHJcbiAqIEByZXR1cm4ge1N0cmluZ30gYSByb3V0aW5nIHNvdXJjZSBpZGVudGlmaWVyLlxyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cclxuSHViLnByb3RvdHlwZS5nZW5lcmF0ZVJvdXRlID0gZnVuY3Rpb24gKCkge1xyXG4gIHJldHVybiB1dGlsLmdldElkKCk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEh1YjtcclxuIiwiLypqc2xpbnQgaW5kZW50OjIsIG5vZGU6dHJ1ZSwgc2xvcHB5OnRydWUgKi9cbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbi8qKlxuICogQSBsaW5rIGNvbm5lY3RzIHR3byBmcmVlZG9tIGh1YnMuIFRoaXMgaXMgYW4gYWJzdHJhY3QgY2xhc3NcbiAqIHByb3ZpZGluZyBjb21tb24gZnVuY3Rpb25hbGl0eSBvZiB0cmFuc2xhdGluZyBjb250cm9sIGNoYW5uZWxzLFxuICogYW5kIGludGVncmF0aW5nIGNvbmZpZyBpbmZvcm1hdGlvbi5cbiAqIEBjbGFzcyBMaW5rXG4gKiBAaW1wbGVtZW50cyBQb3J0XG4gKiBAY29uc3RydWN0b3JcbiAqL1xudmFyIExpbmsgPSBmdW5jdGlvbiAobmFtZSwgcmVzb3VyY2UpIHtcbiAgdGhpcy5pZCA9ICdMaW5rJyArIE1hdGgucmFuZG9tKCk7XG4gIHRoaXMubmFtZSA9IG5hbWU7XG4gIHRoaXMucmVzb3VyY2UgPSByZXNvdXJjZTtcbiAgdGhpcy5jb25maWcgPSB7fTtcbiAgdGhpcy5zcmMgPSBudWxsO1xuXG4gIHV0aWwuaGFuZGxlRXZlbnRzKHRoaXMpO1xuICB1dGlsLm1peGluKHRoaXMsIExpbmsucHJvdG90eXBlKTtcbn07XG5cbi8qKlxuICogUmVjZWl2ZSBtZXNzYWdlcyBmcm9tIHRoZSBodWIgdG8gdGhpcyBwb3J0LlxuICogTWFuYWdlcyBzdGFydHVwLCBhbmQgcGFzc2VzIG90aGVycyB0byAnZGVsaXZlck1lc3NhZ2UnIGltcGxlbWVudGVkXG4gKiBpbiBkZXJpdmVkIGNsYXNzZXMuXG4gKiBAbWV0aG9kIG9uTWVzc2FnZVxuICogQHBhcmFtIHtTdHJpbmd9IGZsb3cgdGhlIGNoYW5uZWwvZmxvdyBvZiB0aGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlIFRoZSBNZXNzYWdlLlxuICovXG5MaW5rLnByb3RvdHlwZS5vbk1lc3NhZ2UgPSBmdW5jdGlvbiAoZmxvdywgbWVzc2FnZSkge1xuICBpZiAoZmxvdyA9PT0gJ2NvbnRyb2wnICYmICF0aGlzLmNvbnRyb2xDaGFubmVsKSB7XG4gICAgaWYgKCF0aGlzLmNvbnRyb2xDaGFubmVsICYmIG1lc3NhZ2UuY2hhbm5lbCkge1xuICAgICAgdGhpcy5jb250cm9sQ2hhbm5lbCA9IG1lc3NhZ2UuY2hhbm5lbDtcbiAgICAgIHV0aWwubWl4aW4odGhpcy5jb25maWcsIG1lc3NhZ2UuY29uZmlnKTtcbiAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5kZWxpdmVyTWVzc2FnZShmbG93LCBtZXNzYWdlKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZWdpc3RlciBhIGhhbmRsZXIgdG8gYWxlcnQgb2YgZXJyb3JzIG9uIHRoaXMgcG9ydC5cbiAqIEBtZXRob2QgYWRkRXJyb3JIYW5kbGVyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIE1ldGhvZCB0byBjYWxsIHdpdGggZXJyb3JzLlxuICovXG5MaW5rLnByb3RvdHlwZS5hZGRFcnJvckhhbmRsZXIgPSBmdW5jdGlvbiAoaGFuZGxlcikge1xuICB0aGlzLm9uRXJyb3IgPSBoYW5kbGVyO1xufTtcblxuLyoqXG4gKiBSZXBvcnQgYW4gZXJyb3Igb24gdGhpcyBsaW5rLlxuICogQG1ldGhvZCBvbmVycm9yXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnIgVGhlIGVycm9yIHRoYXQgb2NjdXJyZWQuXG4gKi9cbkxpbmsucHJvdG90eXBlLm9uRXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gIC8vRmlsbGVkIGluIGJ5IGFkZEVycm9ySGFuZGxlclxufTtcblxuLyoqXG4gKiBFbWl0IG1lc3NhZ2VzIHRvIHRoZSB0aGUgaHViLCBtYXBwaW5nIGNvbnRyb2wgY2hhbm5lbHMuXG4gKiBAbWV0aG9kIGVtaXRNZXNzYWdlXG4gKiBAcGFyYW0ge1N0cmluZ30gZmxvdyB0aGUgZmxvdyB0byBlbWl0IHRoZSBtZXNzYWdlIG9uLlxuICogQHBhcmFtIHtPYmplY3R9IG1lc3NnYWUgVGhlIG1lc3NhZ2UgdG8gZW1pdC5cbiAqL1xuTGluay5wcm90b3R5cGUuZW1pdE1lc3NhZ2UgPSBmdW5jdGlvbiAoZmxvdywgbWVzc2FnZSkge1xuICBpZiAoZmxvdyA9PT0gJ2NvbnRyb2wnICYmIHRoaXMuY29udHJvbENoYW5uZWwpIHtcbiAgICBmbG93ID0gdGhpcy5jb250cm9sQ2hhbm5lbDtcbiAgfVxuICB0aGlzLmVtaXQoZmxvdywgbWVzc2FnZSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpbms7XG4iLCIvKmdsb2JhbHMgV29ya2VyICovXG4vKmpzbGludCBpbmRlbnQ6Miwgd2hpdGU6dHJ1ZSwgbm9kZTp0cnVlLCBzbG9wcHk6dHJ1ZSwgYnJvd3Nlcjp0cnVlICovXG52YXIgTGluayA9IHJlcXVpcmUoJy4uL2xpbmsnKTtcblxuLyoqXG4gKiBBIHBvcnQgcHJvdmlkaW5nIG1lc3NhZ2UgdHJhbnNwb3J0IGJldHdlZW4gdHdvIGZyZWVkb20gY29udGV4dHMgdmlhIFdvcmtlci5cbiAqIEBjbGFzcyBXb3JrZXJcbiAqIEBleHRlbmRzIExpbmtcbiAqIEB1c2VzIGhhbmRsZUV2ZW50c1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbnZhciBXb3JrZXJMaW5rID0gZnVuY3Rpb24oaWQsIHJlc291cmNlKSB7XG4gIExpbmsuY2FsbCh0aGlzLCBpZCwgcmVzb3VyY2UpO1xuICBpZiAoaWQpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gIH1cbn07XG5cbi8qKlxuICogU3RhcnQgdGhpcyBwb3J0IGJ5IGxpc3RlbmluZyBvciBjcmVhdGluZyBhIHdvcmtlci5cbiAqIEBtZXRob2Qgc3RhcnRcbiAqIEBwcml2YXRlXG4gKi9cbldvcmtlckxpbmsucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLmNvbmZpZy5tb2R1bGVDb250ZXh0KSB7XG4gICAgdGhpcy5zZXR1cExpc3RlbmVyKCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5zZXR1cFdvcmtlcigpO1xuICB9XG59O1xuXG4vKipcbiAqIFN0b3AgdGhpcyBwb3J0IGJ5IGRlc3Ryb3lpbmcgdGhlIHdvcmtlci5cbiAqIEBtZXRob2Qgc3RvcFxuICogQHByaXZhdGVcbiAqL1xuV29ya2VyTGluay5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKCkge1xuICAvLyBGdW5jdGlvbiBpcyBkZXRlcm1pbmVkIGJ5IHNldHVwTGlzdGVuZXIgb3Igc2V0dXBGcmFtZSBhcyBhcHByb3ByaWF0ZS5cbn07XG5cbi8qKlxuICogR2V0IHRoZSB0ZXh0dWFsIGRlc2NyaXB0aW9uIG9mIHRoaXMgcG9ydC5cbiAqIEBtZXRob2QgdG9TdHJpbmdcbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIGRlc2NyaXB0aW9uIG9mIHRoaXMgcG9ydC5cbiAqL1xuV29ya2VyTGluay5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIFwiW1dvcmtlciBcIiArIHRoaXMuaWQgKyBcIl1cIjtcbn07XG5cbi8qKlxuICogU2V0IHVwIGEgZ2xvYmFsIGxpc3RlbmVyIHRvIGhhbmRsZSBpbmNvbWluZyBtZXNzYWdlcyB0byB0aGlzXG4gKiBmcmVlZG9tLmpzIGNvbnRleHQuXG4gKiBAbWV0aG9kIHNldHVwTGlzdGVuZXJcbiAqL1xuV29ya2VyTGluay5wcm90b3R5cGUuc2V0dXBMaXN0ZW5lciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgb25Nc2cgPSBmdW5jdGlvbihtc2cpIHtcbiAgICB0aGlzLmVtaXRNZXNzYWdlKG1zZy5kYXRhLmZsb3csIG1zZy5kYXRhLm1lc3NhZ2UpO1xuICB9LmJpbmQodGhpcyk7XG4gIHRoaXMub2JqID0gdGhpcy5jb25maWcuZ2xvYmFsO1xuICB0aGlzLm9iai5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25Nc2csIHRydWUpO1xuICB0aGlzLnN0b3AgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLm9iai5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25Nc2csIHRydWUpO1xuICAgIGRlbGV0ZSB0aGlzLm9iajtcbiAgfTtcbiAgdGhpcy5lbWl0KCdzdGFydGVkJyk7XG4gIHRoaXMub2JqLnBvc3RNZXNzYWdlKFwiUmVhZHkgRm9yIE1lc3NhZ2VzXCIpO1xufTtcblxuLyoqXG4gKiBTZXQgdXAgYSB3b3JrZXIgd2l0aCBhbiBpc29sYXRlZCBmcmVlZG9tLmpzIGNvbnRleHQgaW5zaWRlLlxuICogQG1ldGhvZCBzZXR1cFdvcmtlclxuICovXG5Xb3JrZXJMaW5rLnByb3RvdHlwZS5zZXR1cFdvcmtlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgd29ya2VyLFxuICAgIGJsb2IsXG4gICAgc2VsZiA9IHRoaXM7XG4gIHdvcmtlciA9IG5ldyBXb3JrZXIodGhpcy5jb25maWcuc291cmNlICsgJyMnICsgdGhpcy5pZCk7XG5cbiAgd29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZnVuY3Rpb24oZXJyKSB7XG4gICAgdGhpcy5vbkVycm9yKGVycik7XG4gIH0uYmluZCh0aGlzKSwgdHJ1ZSk7XG4gIHdvcmtlci5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24od29ya2VyLCBtc2cpIHtcbiAgICBpZiAoIXRoaXMub2JqKSB7XG4gICAgICB0aGlzLm9iaiA9IHdvcmtlcjtcbiAgICAgIHRoaXMuZW1pdCgnc3RhcnRlZCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmVtaXRNZXNzYWdlKG1zZy5kYXRhLmZsb3csIG1zZy5kYXRhLm1lc3NhZ2UpO1xuICB9LmJpbmQodGhpcywgd29ya2VyKSwgdHJ1ZSk7XG4gIHRoaXMuc3RvcCA9IGZ1bmN0aW9uKCkge1xuICAgIHdvcmtlci50ZXJtaW5hdGUoKTtcbiAgICBpZiAodGhpcy5vYmopIHtcbiAgICAgIGRlbGV0ZSB0aGlzLm9iajtcbiAgICB9XG4gIH07XG59O1xuXG4vKipcbiAqIFJlY2VpdmUgbWVzc2FnZXMgZnJvbSB0aGUgaHViIHRvIHRoaXMgcG9ydC5cbiAqIFJlY2VpdmVkIG1lc3NhZ2VzIHdpbGwgYmUgZW1pdHRlZCBmcm9tIHRoZSBvdGhlciBzaWRlIG9mIHRoZSBwb3J0LlxuICogQG1ldGhvZCBkZWxpdmVyTWVzc2FnZVxuICogQHBhcmFtIHtTdHJpbmd9IGZsb3cgdGhlIGNoYW5uZWwvZmxvdyBvZiB0aGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlIFRoZSBNZXNzYWdlLlxuICovXG5Xb3JrZXJMaW5rLnByb3RvdHlwZS5kZWxpdmVyTWVzc2FnZSA9IGZ1bmN0aW9uKGZsb3csIG1lc3NhZ2UpIHtcbiAgaWYgKGZsb3cgPT09ICdjb250cm9sJyAmJiBtZXNzYWdlLnR5cGUgPT09ICdjbG9zZScgJiZcbiAgICAgIG1lc3NhZ2UuY2hhbm5lbCA9PT0gJ2NvbnRyb2wnKSB7XG4gICAgdGhpcy5zdG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHRoaXMub2JqKSB7XG4gICAgICB0aGlzLm9iai5wb3N0TWVzc2FnZSh7XG4gICAgICAgIGZsb3c6IGZsb3csXG4gICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uY2UoJ3N0YXJ0ZWQnLCB0aGlzLm9uTWVzc2FnZS5iaW5kKHRoaXMsIGZsb3csIG1lc3NhZ2UpKTtcbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gV29ya2VyTGluaztcblxuIiwiLypqc2xpbnQgaW5kZW50OjIsbm9kZTp0cnVlLHNsb3BweTp0cnVlICovXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xudmFyIE1vZHVsZUludGVybmFsID0gcmVxdWlyZSgnLi9tb2R1bGVpbnRlcm5hbCcpO1xuXG4vKipcbiAqIEEgZnJlZWRvbSBwb3J0IHdoaWNoIG1hbmFnZXMgdGhlIGNvbnRyb2wgcGxhbmUgb2Ygb2YgY2hhbmdpbmcgaHViIHJvdXRlcy5cbiAqIEBjbGFzcyBNYW5hZ2VyXG4gKiBAaW1wbGVtZW50cyBQb3J0XG4gKiBAcGFyYW0ge0h1Yn0gaHViIFRoZSByb3V0aW5nIGh1YiB0byBjb250cm9sLlxuICogQHBhcmFtIHtSZXNvdXJjZX0gcmVzb3VyY2UgVGhlIHJlc291cmNlIG1hbmFnZXIgZm9yIHRoZSBydW50aW1lLlxuICogQHBhcmFtIHtBcGl9IGFwaSBUaGUgQVBJIG1hbmFnZXIgZm9yIHRoZSBydW50aW1lLlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnZhciBNYW5hZ2VyID0gZnVuY3Rpb24gKGh1YiwgcmVzb3VyY2UsIGFwaSkge1xuICB0aGlzLmlkID0gJ2NvbnRyb2wnO1xuICB0aGlzLmNvbmZpZyA9IHt9O1xuICB0aGlzLmNvbnRyb2xGbG93cyA9IHt9O1xuICB0aGlzLmRhdGFGbG93cyA9IHt9O1xuICB0aGlzLmRhdGFGbG93c1t0aGlzLmlkXSA9IFtdO1xuICB0aGlzLnJldmVyc2VGbG93TWFwID0ge307XG5cbiAgdGhpcy5kZWJ1ZyA9IGh1Yi5kZWJ1ZztcbiAgdGhpcy5odWIgPSBodWI7XG4gIHRoaXMucmVzb3VyY2UgPSByZXNvdXJjZTtcbiAgdGhpcy5hcGkgPSBhcGk7XG5cbiAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG4gIHRoaXMudG9EZWxlZ2F0ZSA9IHt9O1xuICBcbiAgdGhpcy5odWIub24oJ2NvbmZpZycsIGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICB1dGlsLm1peGluKHRoaXMuY29uZmlnLCBjb25maWcpO1xuICAgIHRoaXMuZW1pdCgnY29uZmlnJyk7XG4gIH0uYmluZCh0aGlzKSk7XG4gIFxuICB1dGlsLmhhbmRsZUV2ZW50cyh0aGlzKTtcbiAgdGhpcy5odWIucmVnaXN0ZXIodGhpcyk7XG59O1xuXG4vKipcbiAqIFByb3ZpZGUgYSB0ZXh0dWFsIGRlc2NyaXB0aW9uIG9mIHRoaXMgcG9ydC5cbiAqIEBtZXRob2QgdG9TdHJpbmdcbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIGRlc2NyaXB0aW9uIG9mIHRoaXMgcG9ydC5cbiAqL1xuTWFuYWdlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBcIltMb2NhbCBDb250cm9sbGVyXVwiO1xufTtcblxuLyoqXG4gKiBQcm9jZXNzIG1lc3NhZ2VzIHNlbnQgdG8gdGhpcyBwb3J0LlxuICogVGhlIG1hbmFnZXIsIG9yICdjb250cm9sJyBkZXN0aW5hdGlvbiBoYW5kbGVzIHNldmVyYWwgdHlwZXMgb2YgbWVzc2FnZXMsXG4gKiBpZGVudGlmaWVkIGJ5IHRoZSByZXF1ZXN0IHByb3BlcnR5LiAgVGhlIGFjdGlvbnMgYXJlOlxuICogMS4gZGVidWcuIFByaW50cyB0aGUgbWVzc2FnZSB0byB0aGUgY29uc29sZS5cbiAqIDIuIGxpbmsuIENyZWF0ZXMgYSBsaW5rIGJldHdlZW4gdGhlIHNvdXJjZSBhbmQgYSBwcm92aWRlZCBkZXN0aW5hdGlvbiBwb3J0LlxuICogMy4gZW52aXJvbm1lbnQuIEluc3RhbnRpYXRlIGEgbW9kdWxlIGVudmlyb25tZW50IGRlZmluZWQgaW4gTW9kdWxlSW50ZXJuYWwuXG4gKiA0LiBkZWxlZ2F0ZS4gUm91dGVzIGEgZGVmaW5lZCBzZXQgb2YgY29udHJvbCBtZXNzYWdlcyB0byBhbm90aGVyIGxvY2F0aW9uLlxuICogNS4gcmVzb3VyY2UuIFJlZ2lzdGVycyB0aGUgc291cmNlIGFzIGEgcmVzb3VyY2UgcmVzb2x2ZXIuXG4gKiA2LiBjb3JlLiBHZW5lcmF0ZXMgYSBjb3JlIHByb3ZpZGVyIGZvciB0aGUgcmVxdWVzdGVyLlxuICogNy4gY2xvc2UuIFRlYXJzIGRvd24gcm91dGVzIGludm9saW5nIHRoZSByZXF1ZXN0aW5nIHBvcnQuXG4gKiA4LiB1bmxpbmsuIFRlYXJzIGRvd24gYSByb3V0ZSBmcm9tIHRoZSByZXF1ZXN0aW5nIHBvcnQuXG4gKiBAbWV0aG9kIG9uTWVzc2FnZVxuICogQHBhcmFtIHtTdHJpbmd9IGZsb3cgVGhlIHNvdXJjZSBpZGVudGlmaWVyIG9mIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2UgVGhlIHJlY2VpdmVkIG1lc3NhZ2UuXG4gKi9cbk1hbmFnZXIucHJvdG90eXBlLm9uTWVzc2FnZSA9IGZ1bmN0aW9uIChmbG93LCBtZXNzYWdlKSB7XG4gIHZhciByZXZlcnNlRmxvdyA9IHRoaXMuY29udHJvbEZsb3dzW2Zsb3ddLCBvcmlnaW47XG4gIGlmICghcmV2ZXJzZUZsb3cpIHtcbiAgICB0aGlzLmRlYnVnLndhcm4oXCJVbmtub3duIG1lc3NhZ2Ugc291cmNlOiBcIiArIGZsb3cpO1xuICAgIHJldHVybjtcbiAgfVxuICBvcmlnaW4gPSB0aGlzLmh1Yi5nZXREZXN0aW5hdGlvbihyZXZlcnNlRmxvdyk7XG5cbiAgaWYgKHRoaXMuZGVsZWdhdGUgJiYgcmV2ZXJzZUZsb3cgIT09IHRoaXMuZGVsZWdhdGUgJiZcbiAgICAgIHRoaXMudG9EZWxlZ2F0ZVtmbG93XSkge1xuICAgIC8vIFNoaXAgb2ZmIHRvIHRoZSBkZWxlZ2VlXG4gICAgdGhpcy5lbWl0KHRoaXMuZGVsZWdhdGUsIHtcbiAgICAgIHR5cGU6ICdEZWxlZ2F0aW9uJyxcbiAgICAgIHJlcXVlc3Q6ICdoYW5kbGUnLFxuICAgICAgcXVpZXQ6IHRydWUsXG4gICAgICBmbG93OiBmbG93LFxuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChtZXNzYWdlLnJlcXVlc3QgPT09ICdkZWJ1ZycpIHtcbiAgICB0aGlzLmRlYnVnLnByaW50KG1lc3NhZ2UpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChtZXNzYWdlLnJlcXVlc3QgPT09ICdsaW5rJykge1xuICAgIHRoaXMuY3JlYXRlTGluayhvcmlnaW4sIG1lc3NhZ2UubmFtZSwgbWVzc2FnZS50bywgbWVzc2FnZS5vdmVycmlkZURlc3QpO1xuICB9IGVsc2UgaWYgKG1lc3NhZ2UucmVxdWVzdCA9PT0gJ2Vudmlyb25tZW50Jykge1xuICAgIHRoaXMuY3JlYXRlTGluayhvcmlnaW4sIG1lc3NhZ2UubmFtZSwgbmV3IE1vZHVsZUludGVybmFsKHRoaXMpKTtcbiAgfSBlbHNlIGlmIChtZXNzYWdlLnJlcXVlc3QgPT09ICdkZWxlZ2F0ZScpIHtcbiAgICAvLyBJbml0YXRlIERlbGVnYXRpb24uXG4gICAgaWYgKHRoaXMuZGVsZWdhdGUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSByZXZlcnNlRmxvdztcbiAgICB9XG4gICAgdGhpcy50b0RlbGVnYXRlW21lc3NhZ2UuZmxvd10gPSB0cnVlO1xuICAgIHRoaXMuZW1pdCgnZGVsZWdhdGUnKTtcbiAgfSBlbHNlIGlmIChtZXNzYWdlLnJlcXVlc3QgPT09ICdyZXNvdXJjZScpIHtcbiAgICB0aGlzLnJlc291cmNlLmFkZFJlc29sdmVyKG1lc3NhZ2UuYXJnc1swXSk7XG4gICAgdGhpcy5yZXNvdXJjZS5hZGRSZXRyaWV2ZXIobWVzc2FnZS5zZXJ2aWNlLCBtZXNzYWdlLmFyZ3NbMV0pO1xuICB9IGVsc2UgaWYgKG1lc3NhZ2UucmVxdWVzdCA9PT0gJ2NvcmUnKSB7XG4gICAgaWYgKHRoaXMuY29yZSAmJiByZXZlcnNlRmxvdyA9PT0gdGhpcy5kZWxlZ2F0ZSkge1xuICAgICAgKG5ldyB0aGlzLmNvcmUoKSkub25NZXNzYWdlKG9yaWdpbiwgbWVzc2FnZS5tZXNzYWdlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5nZXRDb3JlKGZ1bmN0aW9uICh0bywgY29yZSkge1xuICAgICAgdGhpcy5odWIub25NZXNzYWdlKHRvLCB7XG4gICAgICAgIHR5cGU6ICdjb3JlJyxcbiAgICAgICAgY29yZTogY29yZVxuICAgICAgfSk7XG4gICAgfS5iaW5kKHRoaXMsIHJldmVyc2VGbG93KSk7XG4gIH0gZWxzZSBpZiAobWVzc2FnZS5yZXF1ZXN0ID09PSAnY2xvc2UnKSB7XG4gICAgdGhpcy5kZXN0cm95KG9yaWdpbik7XG4gIH0gZWxzZSBpZiAobWVzc2FnZS5yZXF1ZXN0ID09PSAndW5saW5rJykge1xuICAgIHRoaXMucmVtb3ZlTGluayhvcmlnaW4sIG1lc3NhZ2UudG8pO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuZGVidWcud2FybihcIlVua25vd24gY29udHJvbCByZXF1ZXN0OiBcIiArIG1lc3NhZ2UucmVxdWVzdCk7XG4gICAgdGhpcy5kZWJ1Zy5sb2coSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkpO1xuICAgIHJldHVybjtcbiAgfVxufTtcblxuLyoqXG4gKiBHZXQgdGhlIHBvcnQgbWVzc2FnZXMgd2lsbCBiZSByb3V0ZWQgdG8gZ2l2ZW4gaXRzIGlkLlxuICogQG1ldGhvZCBnZXRQb3J0XG4gKiBAcGFyYW0ge1N0cmluZ30gcG9ydElkIFRoZSBJRCBvZiB0aGUgcG9ydC5cbiAqIEByZXR1cm5zIHtmZG9tLlBvcnR9IFRoZSBwb3J0IHdpdGggdGhhdCBJRC5cbiAqL1xuTWFuYWdlci5wcm90b3R5cGUuZ2V0UG9ydCA9IGZ1bmN0aW9uIChwb3J0SWQpIHtcbiAgcmV0dXJuIHRoaXMuaHViLmdldERlc3RpbmF0aW9uKHRoaXMuY29udHJvbEZsb3dzW3BvcnRJZF0pO1xufTtcblxuLyoqXG4gKiBTZXQgdXAgYSBwb3J0IHdpdGggdGhlIGh1Yi5cbiAqIEBtZXRob2Qgc2V0dXBcbiAqIEBwYXJhbSB7UG9ydH0gcG9ydCBUaGUgcG9ydCB0byByZWdpc3Rlci5cbiAqL1xuTWFuYWdlci5wcm90b3R5cGUuc2V0dXAgPSBmdW5jdGlvbiAocG9ydCkge1xuICBpZiAoIXBvcnQuaWQpIHtcbiAgICB0aGlzLmRlYnVnLndhcm4oXCJSZWZ1c2luZyB0byBzZXR1cCB1bmlkZW50aWZpZWQgcG9ydCBcIik7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHRoaXMuY29udHJvbEZsb3dzW3BvcnQuaWRdKSB7XG4gICAgdGhpcy5kZWJ1Zy53YXJuKFwiUmVmdXNpbmcgdG8gcmUtaW5pdGlhbGl6ZSBwb3J0IFwiICsgcG9ydC5pZCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCF0aGlzLmNvbmZpZy5nbG9iYWwpIHtcbiAgICB0aGlzLm9uY2UoJ2NvbmZpZycsIHRoaXMuc2V0dXAuYmluZCh0aGlzLCBwb3J0KSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5odWIucmVnaXN0ZXIocG9ydCk7XG4gIHZhciBmbG93ID0gdGhpcy5odWIuaW5zdGFsbCh0aGlzLCBwb3J0LmlkLCBcImNvbnRyb2xcIiksXG4gICAgcmV2ZXJzZSA9IHRoaXMuaHViLmluc3RhbGwocG9ydCwgdGhpcy5pZCwgcG9ydC5pZCk7XG4gIHRoaXMuY29udHJvbEZsb3dzW3BvcnQuaWRdID0gZmxvdztcbiAgdGhpcy5kYXRhRmxvd3NbcG9ydC5pZF0gPSBbcmV2ZXJzZV07XG4gIHRoaXMucmV2ZXJzZUZsb3dNYXBbZmxvd10gPSByZXZlcnNlO1xuICB0aGlzLnJldmVyc2VGbG93TWFwW3JldmVyc2VdID0gZmxvdztcblxuICBpZiAocG9ydC5saW5lYWdlKSB7XG4gICAgdGhpcy5lbWl0KCdtb2R1bGVBZGQnLCB7aWQ6IHBvcnQuaWQsIGxpbmVhZ2U6IHBvcnQubGluZWFnZX0pO1xuICB9XG4gIFxuICB0aGlzLmh1Yi5vbk1lc3NhZ2UoZmxvdywge1xuICAgIHR5cGU6ICdzZXR1cCcsXG4gICAgY2hhbm5lbDogcmV2ZXJzZSxcbiAgICBjb25maWc6IHRoaXMuY29uZmlnXG4gIH0pO1xuXG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBUZWFyIGRvd24gYSBwb3J0IG9uIHRoZSBodWIsIG9yIHRoZSBmdWxsIGxvY2FsIGh1Yi5cbiAqIEBtZXRob2QgZGVzdHJveVxuICogQGFwcmFtIHtQb3J0P30gcG9ydCBUaGUgcG9ydCB0byB1bnJlZ2lzdGVyLlxuICovXG5NYW5hZ2VyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKHBvcnQpIHtcbiAgaWYgKCFwb3J0KSB7XG4gICAgLy8gVGVhciBkb3duIGV2ZXJ5dGhpbmchXG4gICAgdXRpbC5lYWNoUHJvcCh0aGlzLmNvbnRyb2xGbG93cywgZnVuY3Rpb24gKGZsb3cpIHtcbiAgICAgIHRoaXMuaHViLm9uTWVzc2FnZShmbG93LCB7XG4gICAgICAgIHR5cGU6ICdjbG9zZSdcbiAgICAgIH0pO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gICAgdGhpcy5odWIudGVhcmRvd24oKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIXBvcnQuaWQpIHtcbiAgICB0aGlzLmRlYnVnLndhcm4oXCJVbmFibGUgdG8gdGVhciBkb3duIHVuaWRlbnRpZmllZCBwb3J0XCIpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChwb3J0LmxpbmVhZ2UpIHtcbiAgICB0aGlzLmVtaXQoJ21vZHVsZVJlbW92ZScsIHtpZDogcG9ydC5pZCwgbGluZWFnZTogcG9ydC5saW5lYWdlfSk7XG4gIH1cblxuICAvLyBSZW1vdmUgdGhlIHBvcnQuXG4gIGRlbGV0ZSB0aGlzLmNvbnRyb2xGbG93c1twb3J0LmlkXTtcblxuICAvLyBSZW1vdmUgYXNzb2NpYXRlZCBsaW5rcy5cbiAgdmFyIGk7XG4gIGZvciAoaSA9IHRoaXMuZGF0YUZsb3dzW3BvcnQuaWRdLmxlbmd0aCAtIDE7IGkgPj0gMDsgaSAtPSAxKSB7XG4gICAgdGhpcy5yZW1vdmVMaW5rKHBvcnQsIHRoaXMuZGF0YUZsb3dzW3BvcnQuaWRdW2ldKTtcbiAgfVxuXG4gIC8vIFJlbW92ZSB0aGUgcG9ydC5cbiAgZGVsZXRlIHRoaXMuZGF0YUZsb3dzW3BvcnQuaWRdO1xuICB0aGlzLmh1Yi5kZXJlZ2lzdGVyKHBvcnQpO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYSBsaW5rIGJldHdlZW4gdHdvIHBvcnRzLiAgTGlua3MgYXJlIGNyZWF0ZWQgaW4gYm90aCBkaXJlY3Rpb25zLFxuICogYW5kIGEgbWVzc2FnZSB3aXRoIHRob3NlIGNhcGFiaWxpdGllcyBpcyBzZW50IHRvIHRoZSBzb3VyY2UgcG9ydC5cbiAqIEBtZXRob2QgY3JlYXRlTGlua1xuICogQHBhcmFtIHtQb3J0fSBwb3J0IFRoZSBzb3VyY2UgcG9ydC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBmbG93IGZvciBtZXNzYWdlcyBmcm9tIGRlc3RpbmF0aW9uIHRvIHBvcnQuXG4gKiBAcGFyYW0ge1BvcnR9IGRlc3RpbmF0aW9uIFRoZSBkZXN0aW5hdGlvbiBwb3J0LlxuICogQHBhcmFtIHtTdHJpbmd9IFtkZXN0TmFtZV0gVGhlIGZsb3cgbmFtZSBmb3IgbWVzc2FnZXMgdG8gdGhlIGRlc3RpbmF0aW9uLlxuICogQHBhcmFtIHtCb29sZWFufSBbdG9EZXN0XSBUZWxsIHRoZSBkZXN0aW5hdGlvbiBhYm91dCB0aGUgbGluay5cbiAqL1xuTWFuYWdlci5wcm90b3R5cGUuY3JlYXRlTGluayA9IGZ1bmN0aW9uIChwb3J0LCBuYW1lLCBkZXN0aW5hdGlvbiwgZGVzdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvRGVzdCkge1xuICBpZiAoIXRoaXMuY29uZmlnLmdsb2JhbCkge1xuICAgIHRoaXMub25jZSgnY29uZmlnJyxcbiAgICAgIHRoaXMuY3JlYXRlTGluay5iaW5kKHRoaXMsIHBvcnQsIG5hbWUsIGRlc3RpbmF0aW9uLCBkZXN0TmFtZSkpO1xuICAgIHJldHVybjtcbiAgfVxuICBcbiAgaWYgKCF0aGlzLmNvbnRyb2xGbG93c1twb3J0LmlkXSkge1xuICAgIHRoaXMuZGVidWcud2FybignVW53aWxsaW5nIHRvIGxpbmsgZnJvbSBub24tcmVnaXN0ZXJlZCBzb3VyY2UuJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCF0aGlzLmNvbnRyb2xGbG93c1tkZXN0aW5hdGlvbi5pZF0pIHtcbiAgICBpZiAodGhpcy5zZXR1cChkZXN0aW5hdGlvbikgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmRlYnVnLndhcm4oJ0NvdWxkIG5vdCBmaW5kIG9yIHNldHVwIGRlc3RpbmF0aW9uLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICB2YXIgcXVpZXQgPSBkZXN0aW5hdGlvbi5xdWlldCB8fCBmYWxzZSxcbiAgICBvdXRnb2luZ05hbWUgPSBkZXN0TmFtZSB8fCAnZGVmYXVsdCcsXG4gICAgb3V0Z29pbmcgPSB0aGlzLmh1Yi5pbnN0YWxsKHBvcnQsIGRlc3RpbmF0aW9uLmlkLCBvdXRnb2luZ05hbWUsIHF1aWV0KSxcbiAgICByZXZlcnNlO1xuXG4gIC8vIFJlY292ZXIgdGhlIHBvcnQgc28gdGhhdCBsaXN0ZW5lcnMgYXJlIGluc3RhbGxlZC5cbiAgZGVzdGluYXRpb24gPSB0aGlzLmh1Yi5nZXREZXN0aW5hdGlvbihvdXRnb2luZyk7XG4gIHJldmVyc2UgPSB0aGlzLmh1Yi5pbnN0YWxsKGRlc3RpbmF0aW9uLCBwb3J0LmlkLCBuYW1lLCBxdWlldCk7XG5cbiAgdGhpcy5yZXZlcnNlRmxvd01hcFtvdXRnb2luZ10gPSByZXZlcnNlO1xuICB0aGlzLmRhdGFGbG93c1twb3J0LmlkXS5wdXNoKG91dGdvaW5nKTtcbiAgdGhpcy5yZXZlcnNlRmxvd01hcFtyZXZlcnNlXSA9IG91dGdvaW5nO1xuICB0aGlzLmRhdGFGbG93c1tkZXN0aW5hdGlvbi5pZF0ucHVzaChyZXZlcnNlKTtcblxuICBpZiAodG9EZXN0KSB7XG4gICAgdGhpcy5odWIub25NZXNzYWdlKHRoaXMuY29udHJvbEZsb3dzW2Rlc3RpbmF0aW9uLmlkXSwge1xuICAgICAgdHlwZTogJ2NyZWF0ZUxpbmsnLFxuICAgICAgbmFtZTogb3V0Z29pbmdOYW1lLFxuICAgICAgY2hhbm5lbDogcmV2ZXJzZSxcbiAgICAgIHJldmVyc2U6IG91dGdvaW5nXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5odWIub25NZXNzYWdlKHRoaXMuY29udHJvbEZsb3dzW3BvcnQuaWRdLCB7XG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgdHlwZTogJ2NyZWF0ZUxpbmsnLFxuICAgICAgY2hhbm5lbDogb3V0Z29pbmcsXG4gICAgICByZXZlcnNlOiByZXZlcnNlXG4gICAgfSk7XG4gIH1cbn07XG5cbi8qKlxuICogUmVtb3ZlIGEgbGluayBiZXR3ZWVuIHRvIHBvcnRzLiBUaGUgcmV2ZXJzZSBsaW5rIHdpbGwgYWxzbyBiZSByZW1vdmVkLlxuICogQG1ldGhvZCByZW1vdmVMaW5rXG4gKiBAcGFyYW0ge1BvcnR9IHBvcnQgVGhlIHNvdXJjZSBwb3J0LlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIGZsb3cgdG8gYmUgcmVtb3ZlZC5cbiAqL1xuTWFuYWdlci5wcm90b3R5cGUucmVtb3ZlTGluayA9IGZ1bmN0aW9uIChwb3J0LCBuYW1lKSB7XG4gIHZhciByZXZlcnNlID0gdGhpcy5odWIuZ2V0RGVzdGluYXRpb24obmFtZSksXG4gICAgcmZsb3cgPSB0aGlzLnJldmVyc2VGbG93TWFwW25hbWVdLFxuICAgIGk7XG5cbiAgaWYgKCFyZXZlcnNlIHx8ICFyZmxvdykge1xuICAgIHRoaXMuZGVidWcud2FybihcIkNvdWxkIG5vdCBmaW5kIG1ldGFkYXRhIHRvIHJlbW92ZSBmbG93OiBcIiArIG5hbWUpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh0aGlzLmh1Yi5nZXREZXN0aW5hdGlvbihyZmxvdykuaWQgIT09IHBvcnQuaWQpIHtcbiAgICB0aGlzLmRlYnVnLndhcm4oXCJTb3VyY2UgcG9ydCBkb2VzIG5vdCBvd24gZmxvdyBcIiArIG5hbWUpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIE5vdGlmeSBwb3J0cyB0aGF0IGEgY2hhbm5lbCBpcyBjbG9zaW5nLlxuICBpID0gdGhpcy5jb250cm9sRmxvd3NbcG9ydC5pZF07XG4gIGlmIChpKSB7XG4gICAgdGhpcy5odWIub25NZXNzYWdlKGksIHtcbiAgICAgIHR5cGU6ICdjbG9zZScsXG4gICAgICBjaGFubmVsOiBuYW1lXG4gICAgfSk7XG4gIH1cbiAgaSA9IHRoaXMuY29udHJvbEZsb3dzW3JldmVyc2UuaWRdO1xuICBpZiAoaSkge1xuICAgIHRoaXMuaHViLm9uTWVzc2FnZShpLCB7XG4gICAgICB0eXBlOiAnY2xvc2UnLFxuICAgICAgY2hhbm5lbDogcmZsb3dcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFVuaW5zdGFsbCB0aGUgY2hhbm5lbC5cbiAgdGhpcy5odWIudW5pbnN0YWxsKHBvcnQsIG5hbWUpO1xuICB0aGlzLmh1Yi51bmluc3RhbGwocmV2ZXJzZSwgcmZsb3cpO1xuXG4gIGRlbGV0ZSB0aGlzLnJldmVyc2VGbG93TWFwW25hbWVdO1xuICBkZWxldGUgdGhpcy5yZXZlcnNlRmxvd01hcFtyZmxvd107XG4gIHRoaXMuZm9yZ2V0RmxvdyhyZXZlcnNlLmlkLCByZmxvdyk7XG4gIHRoaXMuZm9yZ2V0Rmxvdyhwb3J0LmlkLCBuYW1lKTtcbn07XG5cbi8qKlxuICogRm9yZ2V0IHRoZSBmbG93IGZyb20gaWQgd2l0aCBhIGdpdmVuIG5hbWUuXG4gKiBAbWV0aG9kIGZvcmdldEZsb3dcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgVGhlIHBvcnQgSUQgb2YgdGhlIHNvdXJjZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBmbG93IG5hbWUuXG4gKi9cbk1hbmFnZXIucHJvdG90eXBlLmZvcmdldEZsb3cgPSBmdW5jdGlvbiAoaWQsIG5hbWUpIHtcbiAgdmFyIGk7XG4gIGlmICh0aGlzLmRhdGFGbG93c1tpZF0pIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5kYXRhRmxvd3NbaWRdLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodGhpcy5kYXRhRmxvd3NbaWRdW2ldID09PSBuYW1lKSB7XG4gICAgICAgIHRoaXMuZGF0YUZsb3dzW2lkXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBHZXQgdGhlIGNvcmUgZnJlZWRvbS5qcyBBUEkgYWN0aXZlIG9uIHRoZSBjdXJyZW50IGh1Yi5cbiAqIEBtZXRob2QgZ2V0Q29yZVxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiIENhbGxiYWNrIHRvIGZpcmUgd2l0aCB0aGUgY29yZSBvYmplY3QuXG4gKi9cbk1hbmFnZXIucHJvdG90eXBlLmdldENvcmUgPSBmdW5jdGlvbiAoY2IpIHtcbiAgaWYgKHRoaXMuY29yZSkge1xuICAgIGNiKHRoaXMuY29yZSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5hcGkuZ2V0Q29yZSgnY29yZScsIHRoaXMpLnRoZW4oZnVuY3Rpb24gKGNvcmUpIHtcbiAgICAgIHRoaXMuY29yZSA9IGNvcmUuaW5zdDtcbiAgICAgIGNiKHRoaXMuY29yZSk7XG4gICAgfS5iaW5kKHRoaXMpLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjYih1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hbmFnZXI7XG4iLCIvKmpzbGludCBpbmRlbnQ6Mixub2RlOnRydWUsc2xvcHB5OnRydWUgKi9cbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG52YXIgUHJvdmlkZXIgPSByZXF1aXJlKCcuL3Byb3ZpZGVyJyk7XG5cbi8qKlxuICogVGhlIGV4dGVybmFsIFBvcnQgZmFjZSBvZiBhIG1vZHVsZSBvbiBhIGh1Yi5cbiAqIEBjbGFzcyBNb2R1bGVcbiAqIEBleHRlbmRzIFBvcnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBtYW5pZmVzdFVSTCBUaGUgbWFuaWZlc3QgdGhpcyBtb2R1bGUgbG9hZHMuXG4gKiBAcGFyYW0ge1N0cmluZ1tdfSBjcmVhdG9yIFRoZSBsaW5lYWdlIG9mIGNyZWF0aW9uIGZvciB0aGlzIG1vZHVsZS5cbiAqIEBwYXJhbSB7UG9saWN5fSBQb2xpY3kgVGhlIHBvbGljeSBsb2FkZXIgZm9yIGRlcGVuZGVuY2llcy5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG52YXIgTW9kdWxlID0gZnVuY3Rpb24gKG1hbmlmZXN0VVJMLCBtYW5pZmVzdCwgY3JlYXRvciwgcG9saWN5KSB7XG4gIHRoaXMuYXBpID0gcG9saWN5LmFwaTtcbiAgdGhpcy5wb2xpY3kgPSBwb2xpY3k7XG4gIHRoaXMucmVzb3VyY2UgPSBwb2xpY3kucmVzb3VyY2U7XG4gIHRoaXMuZGVidWcgPSBwb2xpY3kuZGVidWc7XG5cbiAgdGhpcy5jb25maWcgPSB7fTtcblxuICB0aGlzLmlkID0gbWFuaWZlc3RVUkwgKyBNYXRoLnJhbmRvbSgpO1xuICB0aGlzLm1hbmlmZXN0SWQgPSBtYW5pZmVzdFVSTDtcbiAgdGhpcy5tYW5pZmVzdCA9IG1hbmlmZXN0O1xuICB0aGlzLmxpbmVhZ2UgPSBbdGhpcy5tYW5pZmVzdElkXS5jb25jYXQoY3JlYXRvcik7XG5cbiAgdGhpcy5xdWlldCA9IHRoaXMubWFuaWZlc3QucXVpZXQgfHwgZmFsc2U7XG5cbiAgdGhpcy5leHRlcm5hbFBvcnRNYXAgPSB7fTtcbiAgdGhpcy5pbnRlcm5hbFBvcnRNYXAgPSB7fTtcbiAgdGhpcy5kZXBlbmRhbnRDaGFubmVscyA9IFtdO1xuICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcblxuICB1dGlsLmhhbmRsZUV2ZW50cyh0aGlzKTtcbn07XG5cbi8qKlxuICogUmVjZWl2ZSBhIG1lc3NhZ2UgZm9yIHRoZSBNb2R1bGUuXG4gKiBAbWV0aG9kIG9uTWVzc2FnZVxuICogQHBhcmFtIHtTdHJpbmd9IGZsb3cgVGhlIG9yaWdpbiBvZiB0aGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlIFRoZSBtZXNzYWdlIHJlY2VpdmVkLlxuICovXG5Nb2R1bGUucHJvdG90eXBlLm9uTWVzc2FnZSA9IGZ1bmN0aW9uIChmbG93LCBtZXNzYWdlKSB7XG4gIGlmIChmbG93ID09PSAnY29udHJvbCcpIHtcbiAgICBpZiAobWVzc2FnZS50eXBlID09PSAnc2V0dXAnKSB7XG4gICAgICB0aGlzLmNvbnRyb2xDaGFubmVsID0gbWVzc2FnZS5jaGFubmVsO1xuICAgICAgdXRpbC5taXhpbih0aGlzLmNvbmZpZywgbWVzc2FnZS5jb25maWcpO1xuICAgICAgdGhpcy5lbWl0KHRoaXMuY29udHJvbENoYW5uZWwsIHtcbiAgICAgICAgdHlwZTogJ0NvcmUgUHJvdmlkZXInLFxuICAgICAgICByZXF1ZXN0OiAnY29yZSdcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zdGFydCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAobWVzc2FnZS50eXBlID09PSAnY3JlYXRlTGluaycgJiYgbWVzc2FnZS5jaGFubmVsKSB7XG4gICAgICB0aGlzLmRlYnVnLmRlYnVnKHRoaXMgKyAnZ290IGNyZWF0ZSBsaW5rIGZvciAnICsgbWVzc2FnZS5uYW1lKTtcbiAgICAgIHRoaXMuZXh0ZXJuYWxQb3J0TWFwW21lc3NhZ2UubmFtZV0gPSBtZXNzYWdlLmNoYW5uZWw7XG4gICAgICBpZiAodGhpcy5pbnRlcm5hbFBvcnRNYXBbbWVzc2FnZS5uYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuaW50ZXJuYWxQb3J0TWFwW21lc3NhZ2UubmFtZV0gPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHZhciBtc2cgPSB7XG4gICAgICAgIHR5cGU6ICdkZWZhdWx0IGNoYW5uZWwgYW5ub3VuY2VtZW50JyxcbiAgICAgICAgY2hhbm5lbDogbWVzc2FnZS5yZXZlcnNlXG4gICAgICB9O1xuICAgICAgaWYgKHRoaXMubWFuaWZlc3QuZGVwZW5kZW5jaWVzICYmXG4gICAgICAgICAgdGhpcy5tYW5pZmVzdC5kZXBlbmRlbmNpZXNbbWVzc2FnZS5uYW1lXSkge1xuICAgICAgICBtc2cuYXBpID0gdGhpcy5tYW5pZmVzdC5kZXBlbmRlbmNpZXNbbWVzc2FnZS5uYW1lXS5hcGk7XG4gICAgICB9XG4gICAgICB0aGlzLmVtaXQobWVzc2FnZS5jaGFubmVsLCBtc2cpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAobWVzc2FnZS5jb3JlKSB7XG4gICAgICB0aGlzLmNvcmUgPSBuZXcgbWVzc2FnZS5jb3JlKCk7XG4gICAgICB0aGlzLmVtaXQoJ2NvcmUnLCBtZXNzYWdlLmNvcmUpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAobWVzc2FnZS50eXBlID09PSAnY2xvc2UnKSB7XG4gICAgICAvLyBDbG9zaW5nIGNoYW5uZWwuXG4gICAgICBpZiAoIW1lc3NhZ2UuY2hhbm5lbCB8fCBtZXNzYWdlLmNoYW5uZWwgPT09ICdjb250cm9sJykge1xuICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGVyZWdpc3RlckZsb3cobWVzc2FnZS5jaGFubmVsLCBmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucG9ydC5vbk1lc3NhZ2UoZmxvdywgbWVzc2FnZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmICgodGhpcy5leHRlcm5hbFBvcnRNYXBbZmxvd10gPT09IGZhbHNlIHx8XG4gICAgICAgICF0aGlzLmV4dGVybmFsUG9ydE1hcFtmbG93XSkgJiYgbWVzc2FnZS5jaGFubmVsKSB7XG4gICAgICB0aGlzLmRlYnVnLmRlYnVnKHRoaXMgKyAnaGFuZGxpbmcgY2hhbm5lbCBhbm5vdW5jZW1lbnQgZm9yICcgKyBmbG93KTtcbiAgICAgIHRoaXMuZXh0ZXJuYWxQb3J0TWFwW2Zsb3ddID0gbWVzc2FnZS5jaGFubmVsO1xuICAgICAgaWYgKHRoaXMuaW50ZXJuYWxQb3J0TWFwW2Zsb3ddID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5pbnRlcm5hbFBvcnRNYXBbZmxvd10gPSBmYWxzZTtcblxuICAgICAgICAvLyBOZXcgaW5jb21pbmcgY29ubmVjdGlvbiBhdHRlbXB0cyBzaG91bGQgZ2V0IHJvdXRlZCB0byBtb2RJbnRlcm5hbC5cbiAgICAgICAgaWYgKHRoaXMubWFuaWZlc3QucHJvdmlkZXMgJiYgdGhpcy5tb2RJbnRlcm5hbCkge1xuICAgICAgICAgIHRoaXMucG9ydC5vbk1lc3NhZ2UodGhpcy5tb2RJbnRlcm5hbCwge1xuICAgICAgICAgICAgdHlwZTogJ0Nvbm5lY3Rpb24nLFxuICAgICAgICAgICAgY2hhbm5lbDogZmxvdyxcbiAgICAgICAgICAgIGFwaTogbWVzc2FnZS5hcGlcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1hbmlmZXN0LnByb3ZpZGVzKSB7XG4gICAgICAgICAgdGhpcy5vbmNlKCdtb2RJbnRlcm5hbCcsIGZ1bmN0aW9uIChmbG93LCBhcGkpIHtcbiAgICAgICAgICAgIHRoaXMucG9ydC5vbk1lc3NhZ2UodGhpcy5tb2RJbnRlcm5hbCwge1xuICAgICAgICAgICAgICB0eXBlOiAnQ29ubmVjdGlvbicsXG4gICAgICAgICAgICAgIGNoYW5uZWw6IGZsb3csXG4gICAgICAgICAgICAgIGFwaTogYXBpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LmJpbmQodGhpcywgZmxvdywgbWVzc2FnZS5hcGkpKTtcbiAgICAgICAgLy8gRmlyc3QgY29ubmVjdGlvbiByZXRhaW5zIGxlZ2FjeSBtYXBwaW5nIGFzICdkZWZhdWx0Jy5cbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5leHRlcm5hbFBvcnRNYXBbJ2RlZmF1bHQnXSAmJiBtZXNzYWdlLmNoYW5uZWwpIHtcbiAgICAgICAgICB0aGlzLmV4dGVybmFsUG9ydE1hcFsnZGVmYXVsdCddID0gbWVzc2FnZS5jaGFubmVsO1xuICAgICAgICAgIHRoaXMub25jZSgnaW50ZXJuYWxDaGFubmVsUmVhZHknLCBmdW5jdGlvbiAoZmxvdykge1xuICAgICAgICAgICAgdGhpcy5pbnRlcm5hbFBvcnRNYXBbZmxvd10gPSB0aGlzLmludGVybmFsUG9ydE1hcFsnZGVmYXVsdCddO1xuICAgICAgICAgIH0uYmluZCh0aGlzLCBmbG93KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgIHRoaXMub25jZSgnc3RhcnQnLCB0aGlzLm9uTWVzc2FnZS5iaW5kKHRoaXMsIGZsb3csIG1lc3NhZ2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuaW50ZXJuYWxQb3J0TWFwW2Zsb3ddID09PSBmYWxzZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ3dhaXRpbmcgb24gaW50ZXJuYWwgY2hhbm5lbCBmb3IgbXNnJyk7XG4gICAgICAgIHRoaXMub25jZSgnaW50ZXJuYWxDaGFubmVsUmVhZHknLCB0aGlzLm9uTWVzc2FnZS5iaW5kKHRoaXMsIGZsb3csIG1lc3NhZ2UpKTtcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuaW50ZXJuYWxQb3J0TWFwW2Zsb3ddKSB7XG4gICAgICAgIHRoaXMuZGVidWcuZXJyb3IoJ1VuZXhwZWN0ZWQgbWVzc2FnZSBmcm9tICcgKyBmbG93KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wb3J0Lm9uTWVzc2FnZSh0aGlzLmludGVybmFsUG9ydE1hcFtmbG93XSwgbWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIENsZWFuIHVwIGFmdGVyIGEgZmxvdyB3aGljaCBpcyBubyBsb25nZXIgdXNlZCAvIG5lZWRlZC5cbiAqIEBtZXRob2QgZGVyZWdpc3RlckZMb3dcbiAqIEBwYXJhbSB7U3RyaW5nfSBmbG93IFRoZSBmbG93IHRvIHJlbW92ZSBtYXBwaW5ncyBmb3IuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGludGVybmFsIElmIHRoZSBmbG93IG5hbWUgaXMgdGhlIGludGVybmFsIGlkZW50aWZpZXIuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gV2hldGhlciB0aGUgZmxvdyB3YXMgc3VjY2Vzc2Z1bGx5IGRlcmVnaXN0ZXJlZC5cbiAqIEBwcml2YXRlXG4gKi9cbk1vZHVsZS5wcm90b3R5cGUuZGVyZWdpc3RlckZsb3cgPSBmdW5jdGlvbiAoZmxvdywgaW50ZXJuYWwpIHtcbiAgdmFyIGtleSxcbiAgICBtYXAgPSBpbnRlcm5hbCA/IHRoaXMuaW50ZXJuYWxQb3J0TWFwIDogdGhpcy5leHRlcm5hbFBvcnRNYXA7XG4gIC8vIFRPRE86IHRoaXMgaXMgaW5lZmZpY2llbnQsIGJ1dCBzZWVtcyBsZXNzIGNvbmZ1c2luZyB0aGFuIGEgM3JkXG4gIC8vIHJldmVyc2UgbG9va3VwIG1hcC5cbiAgZm9yIChrZXkgaW4gbWFwKSB7XG4gICAgaWYgKG1hcFtrZXldID09PSBmbG93KSB7XG4gICAgICBpZiAoaW50ZXJuYWwpIHtcbiAgICAgICAgdGhpcy5lbWl0KHRoaXMuY29udHJvbENoYW5uZWwsIHtcbiAgICAgICAgICB0eXBlOiAnQ2hhbm5lbCBUZWFyZG93bicsXG4gICAgICAgICAgcmVxdWVzdDogJ3VubGluaycsXG4gICAgICAgICAgdG86IHRoaXMuZXh0ZXJuYWxQb3J0TWFwW2tleV1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucG9ydCkge1xuICAgICAgICB0aGlzLnBvcnQub25NZXNzYWdlKCdjb250cm9sJywge1xuICAgICAgICAgIHR5cGU6ICdjbG9zZScsXG4gICAgICAgICAgY2hhbm5lbDogdGhpcy5pbnRlcm5hbFBvcnRNYXBba2V5XVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGRlbGV0ZSB0aGlzLmV4dGVybmFsUG9ydE1hcFtrZXldO1xuICAgICAgZGVsZXRlIHRoaXMuaW50ZXJuYWxQb3J0TWFwW2tleV07XG5cbiAgICAgIC8vIFdoZW4gdGhlcmUgYXJlIHN0aWxsIG5vbi1kZXBlbmRhbnQgY2hhbm5lbHMsIGtlZXAgcnVubmluZ1xuICAgICAgZm9yIChrZXkgaW4gdGhpcy5leHRlcm5hbFBvcnRNYXApIHtcbiAgICAgICAgaWYgKHRoaXMuZXh0ZXJuYWxQb3J0TWFwLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBpZiAodGhpcy5kZXBlbmRhbnRDaGFubmVscy5pbmRleE9mKGtleSkgPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIE90aGVyd2lzZSBzaHV0IGRvd24gdGhlIG1vZHVsZS5cbiAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogQXR0ZW1wdCB0byBzdGFydCB0aGUgbW9kdWxlIG9uY2UgdGhlIHJlbW90ZSBmcmVlZG9tIGNvbnRleHRcbiAqIGV4aXN0cy5cbiAqIEBtZXRob2Qgc3RhcnRcbiAqIEBwcml2YXRlXG4gKi9cbk1vZHVsZS5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBQb3J0O1xuICBpZiAodGhpcy5zdGFydGVkIHx8IHRoaXMucG9ydCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAodGhpcy5jb250cm9sQ2hhbm5lbCkge1xuICAgIHRoaXMubG9hZExpbmtzKCk7XG4gICAgUG9ydCA9IHRoaXMuY29uZmlnLnBvcnRUeXBlO1xuICAgIHRoaXMucG9ydCA9IG5ldyBQb3J0KHRoaXMubWFuaWZlc3QubmFtZSwgdGhpcy5yZXNvdXJjZSk7XG4gICAgLy8gTGlzdGVuIHRvIGFsbCBwb3J0IG1lc3NhZ2VzLlxuICAgIHRoaXMucG9ydC5vbih0aGlzLmVtaXRNZXNzYWdlLmJpbmQodGhpcykpO1xuICAgIHRoaXMucG9ydC5hZGRFcnJvckhhbmRsZXIoZnVuY3Rpb24gKGVycikge1xuICAgICAgdGhpcy5kZWJ1Zy53YXJuKCdNb2R1bGUgRmFpbGVkJywgZXJyKTtcbiAgICAgIHRoaXMuc3RvcCgpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gICAgLy8gVGVsbCB0aGUgbG9jYWwgcG9ydCB0byBhc2sgdXMgZm9yIGhlbHAuXG4gICAgdGhpcy5wb3J0Lm9uTWVzc2FnZSgnY29udHJvbCcsIHtcbiAgICAgIGNoYW5uZWw6ICdjb250cm9sJyxcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWdcbiAgICB9KTtcblxuICAgIC8vIFRlbGwgdGhlIHJlbW90ZSBsb2NhdGlvbiB0byBkZWxlZ2F0ZSBkZWJ1Z2dpbmcuXG4gICAgdGhpcy5wb3J0Lm9uTWVzc2FnZSgnY29udHJvbCcsIHtcbiAgICAgIHR5cGU6ICdSZWRpcmVjdCcsXG4gICAgICByZXF1ZXN0OiAnZGVsZWdhdGUnLFxuICAgICAgZmxvdzogJ2RlYnVnJ1xuICAgIH0pO1xuICAgIHRoaXMucG9ydC5vbk1lc3NhZ2UoJ2NvbnRyb2wnLCB7XG4gICAgICB0eXBlOiAnUmVkaXJlY3QnLFxuICAgICAgcmVxdWVzdDogJ2RlbGVnYXRlJyxcbiAgICAgIGZsb3c6ICdjb3JlJ1xuICAgIH0pO1xuICAgIFxuICAgIC8vIFRlbGwgdGhlIGNvbnRhaW5lciB0byBpbnN0YW50aWF0ZSB0aGUgY291bnRlcnBhcnQgdG8gdGhpcyBleHRlcm5hbCB2aWV3LlxuICAgIHRoaXMucG9ydC5vbk1lc3NhZ2UoJ2NvbnRyb2wnLCB7XG4gICAgICB0eXBlOiAnRW52aXJvbm1lbnQgQ29uZmlndXJhdGlvbicsXG4gICAgICByZXF1ZXN0OiAnZW52aXJvbm1lbnQnLFxuICAgICAgbmFtZTogJ01vZEludGVybmFsJ1xuICAgIH0pO1xuICB9XG59O1xuXG4vKipcbiAqIFN0b3AgdGhlIG1vZHVsZSB3aGVuIGl0IGlzIG5vIGxvbmdlciBuZWVkZWQsIGFuZCB0ZWFyLWRvd24gc3RhdGUuXG4gKiBAbWV0aG9kIHN0b3BcbiAqIEBwcml2YXRlXG4gKi9cbk1vZHVsZS5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCF0aGlzLnN0YXJ0ZWQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5lbWl0KCdjbG9zZScpO1xuICBpZiAodGhpcy5wb3J0KSB7XG4gICAgdGhpcy5wb3J0Lm9mZigpO1xuICAgIHRoaXMucG9ydC5vbk1lc3NhZ2UoJ2NvbnRyb2wnLCB7XG4gICAgICB0eXBlOiAnY2xvc2UnLFxuICAgICAgY2hhbm5lbDogJ2NvbnRyb2wnXG4gICAgfSk7XG4gICAgdGhpcy5wb3J0LnN0b3AoKTtcbiAgICBkZWxldGUgdGhpcy5wb3J0O1xuICB9XG4gIGRlbGV0ZSB0aGlzLnBvbGljeTtcbiAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG59O1xuXG4vKipcbiAqIFRleHR1YWwgRGVzY3JpcHRpb24gb2YgdGhlIFBvcnRcbiAqIEBtZXRob2QgdG9TdHJpbmdcbiAqIEByZXR1cm4ge1N0cmluZ30gVGhlIGRlc2NyaXB0aW9uIG9mIHRoaXMgUG9ydC5cbiAqL1xuTW9kdWxlLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFwiW01vZHVsZSBcIiArIHRoaXMubWFuaWZlc3QubmFtZSArIFwiXVwiO1xufTtcblxuLyoqXG4gKiBJbnRlcmNlcHQgbWVzc2FnZXMgYXMgdGhleSBhcnJpdmUgZnJvbSB0aGUgbW9kdWxlLFxuICogbWFwcGluZyB0aGVtIGJldHdlZW4gaW50ZXJuYWwgYW5kIGV4dGVybmFsIGZsb3cgbmFtZXMuXG4gKiBAbWV0aG9kIGVtaXRNZXNzYWdlXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgZGVzdGluYXRpb24gdGhlIG1vZHVsZSB3YW50cyB0byBzZW5kIHRvLlxuICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gc2VuZC5cbiAqIEBwcml2YXRlXG4gKi9cbk1vZHVsZS5wcm90b3R5cGUuZW1pdE1lc3NhZ2UgPSBmdW5jdGlvbiAobmFtZSwgbWVzc2FnZSkge1xuICBpZiAodGhpcy5pbnRlcm5hbFBvcnRNYXBbbmFtZV0gPT09IGZhbHNlICYmIG1lc3NhZ2UuY2hhbm5lbCkge1xuICAgIHRoaXMuaW50ZXJuYWxQb3J0TWFwW25hbWVdID0gbWVzc2FnZS5jaGFubmVsO1xuICAgIHRoaXMuZW1pdCgnaW50ZXJuYWxDaGFubmVsUmVhZHknKTtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gVGVybWluYXRlIGRlYnVnIHJlZGlyZWN0aW9uIHJlcXVlc3RlZCBpbiBzdGFydCgpLlxuICBpZiAobmFtZSA9PT0gJ2NvbnRyb2wnKSB7XG4gICAgaWYgKG1lc3NhZ2UuZmxvdyA9PT0gJ2RlYnVnJyAmJiBtZXNzYWdlLm1lc3NhZ2UpIHtcbiAgICAgIHRoaXMuZGVidWcuZm9ybWF0KG1lc3NhZ2UubWVzc2FnZS5zZXZlcml0eSxcbiAgICAgICAgICBtZXNzYWdlLm1lc3NhZ2Uuc291cmNlIHx8IHRoaXMudG9TdHJpbmcoKSxcbiAgICAgICAgICBtZXNzYWdlLm1lc3NhZ2UubXNnKTtcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2UuZmxvdyA9PT0gJ2NvcmUnICYmIG1lc3NhZ2UubWVzc2FnZSkge1xuICAgICAgaWYgKCF0aGlzLmNvcmUpIHtcbiAgICAgICAgdGhpcy5vbmNlKCdjb3JlJywgdGhpcy5lbWl0TWVzc2FnZS5iaW5kKHRoaXMsIG5hbWUsIG1lc3NhZ2UpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG1lc3NhZ2UubWVzc2FnZS50eXBlID09PSAncmVnaXN0ZXInKSB7XG4gICAgICAgIG1lc3NhZ2UubWVzc2FnZS5yZXBseSA9IHRoaXMucG9ydC5vbk1lc3NhZ2UuYmluZCh0aGlzLnBvcnQsICdjb250cm9sJyk7XG4gICAgICAgIHRoaXMuZXh0ZXJuYWxQb3J0TWFwW21lc3NhZ2UubWVzc2FnZS5pZF0gPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY29yZS5vbk1lc3NhZ2UodGhpcywgbWVzc2FnZS5tZXNzYWdlKTtcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2UubmFtZSA9PT0gJ01vZEludGVybmFsJyAmJiAhdGhpcy5tb2RJbnRlcm5hbCkge1xuICAgICAgdGhpcy5tb2RJbnRlcm5hbCA9IG1lc3NhZ2UuY2hhbm5lbDtcbiAgICAgIHRoaXMucG9ydC5vbk1lc3NhZ2UodGhpcy5tb2RJbnRlcm5hbCwge1xuICAgICAgICB0eXBlOiAnSW5pdGlhbGl6YXRpb24nLFxuICAgICAgICBpZDogdGhpcy5tYW5pZmVzdElkLFxuICAgICAgICBhcHBJZDogdGhpcy5pZCxcbiAgICAgICAgbWFuaWZlc3Q6IHRoaXMubWFuaWZlc3QsXG4gICAgICAgIGxpbmVhZ2U6IHRoaXMubGluZWFnZSxcbiAgICAgICAgY2hhbm5lbDogbWVzc2FnZS5yZXZlcnNlXG4gICAgICB9KTtcbiAgICAgIHRoaXMuZW1pdCgnbW9kSW50ZXJuYWwnKTtcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ2NyZWF0ZUxpbmsnKSB7XG4gICAgICB0aGlzLmludGVybmFsUG9ydE1hcFttZXNzYWdlLm5hbWVdID0gbWVzc2FnZS5jaGFubmVsO1xuICAgICAgdGhpcy5wb3J0Lm9uTWVzc2FnZShtZXNzYWdlLmNoYW5uZWwsIHtcbiAgICAgICAgdHlwZTogJ2NoYW5uZWwgYW5ub3VuY2VtZW50JyxcbiAgICAgICAgY2hhbm5lbDogbWVzc2FnZS5yZXZlcnNlXG4gICAgICB9KTtcbiAgICAgIHRoaXMuZW1pdCgnaW50ZXJuYWxDaGFubmVsUmVhZHknKTtcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ2Nsb3NlJykge1xuICAgICAgdGhpcy5kZXJlZ2lzdGVyRmxvdyhtZXNzYWdlLmNoYW5uZWwsIHRydWUpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChuYW1lID09PSAnTW9kSW50ZXJuYWwnICYmIG1lc3NhZ2UudHlwZSA9PT0gJ3JlYWR5JyAmJiAhdGhpcy5zdGFydGVkKSB7XG4gICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcbiAgICB0aGlzLmVtaXQoJ3N0YXJ0Jyk7XG4gIH0gZWxzZSBpZiAobmFtZSA9PT0gJ01vZEludGVybmFsJyAmJiBtZXNzYWdlLnR5cGUgPT09ICdyZXNvbHZlJykge1xuICAgIHRoaXMucmVzb3VyY2UuZ2V0KHRoaXMubWFuaWZlc3RJZCwgbWVzc2FnZS5kYXRhKS50aGVuKGZ1bmN0aW9uIChpZCwgZGF0YSkge1xuICAgICAgdGhpcy5wb3J0Lm9uTWVzc2FnZSh0aGlzLm1vZEludGVybmFsLCB7XG4gICAgICAgIHR5cGU6ICdyZXNvbHZlIHJlc3BvbnNlJyxcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBkYXRhOiBkYXRhXG4gICAgICB9KTtcbiAgICB9LmJpbmQodGhpcywgbWVzc2FnZS5pZCksIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuZGVidWcud2FybignRXJyb3IgUmVzb2x2aW5nIFVSTCBmb3IgTW9kdWxlLicpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5lbWl0KHRoaXMuZXh0ZXJuYWxQb3J0TWFwW25hbWVdLCBtZXNzYWdlKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIFJlcXVlc3QgdGhlIGV4dGVybmFsIHJvdXRlcyB1c2VkIGJ5IHRoaXMgbW9kdWxlLlxuICogQG1ldGhvZCBsb2FkTGlua3NcbiAqIEBwcml2YXRlXG4gKi9cbk1vZHVsZS5wcm90b3R5cGUubG9hZExpbmtzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaSwgY2hhbm5lbHMgPSBbJ2RlZmF1bHQnXSwgbmFtZSwgZGVwO1xuXG4gIGlmICh0aGlzLm1hbmlmZXN0LnBlcm1pc3Npb25zKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMubWFuaWZlc3QucGVybWlzc2lvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIG5hbWUgPSB0aGlzLm1hbmlmZXN0LnBlcm1pc3Npb25zW2ldO1xuICAgICAgaWYgKGNoYW5uZWxzLmluZGV4T2YobmFtZSkgPCAwICYmIG5hbWUuaW5kZXhPZignY29yZS4nKSA9PT0gMCkge1xuICAgICAgICBjaGFubmVscy5wdXNoKG5hbWUpO1xuICAgICAgICB0aGlzLmRlcGVuZGFudENoYW5uZWxzLnB1c2gobmFtZSk7XG4gICAgICAgIGRlcCA9IG5ldyBQcm92aWRlcih0aGlzLmFwaS5nZXQobmFtZSkuZGVmaW5pdGlvbiwgdGhpcy5kZWJ1Zyk7XG4gICAgICAgIHRoaXMuYXBpLnByb3ZpZGVDb3JlKG5hbWUsIGRlcCwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5lbWl0KHRoaXMuY29udHJvbENoYW5uZWwsIHtcbiAgICAgICAgICB0eXBlOiAnQ29yZSBMaW5rIHRvICcgKyBuYW1lLFxuICAgICAgICAgIHJlcXVlc3Q6ICdsaW5rJyxcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIHRvOiBkZXBcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmICh0aGlzLm1hbmlmZXN0LmRlcGVuZGVuY2llcykge1xuICAgIHV0aWwuZWFjaFByb3AodGhpcy5tYW5pZmVzdC5kZXBlbmRlbmNpZXMsIGZ1bmN0aW9uIChkZXNjLCBuYW1lKSB7XG4gICAgICBpZiAoY2hhbm5lbHMuaW5kZXhPZihuYW1lKSA8IDApIHtcbiAgICAgICAgY2hhbm5lbHMucHVzaChuYW1lKTtcbiAgICAgICAgdGhpcy5kZXBlbmRhbnRDaGFubmVscy5wdXNoKG5hbWUpO1xuICAgICAgfVxuICAgICAgdGhpcy5yZXNvdXJjZS5nZXQodGhpcy5tYW5pZmVzdElkLCBkZXNjLnVybCkudGhlbihmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIHRoaXMucG9saWN5LmdldCh0aGlzLmxpbmVhZ2UsIHVybCkudGhlbihmdW5jdGlvbiAoZGVwKSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVFbnYobmFtZSwgZGVwLm1hbmlmZXN0KTtcbiAgICAgICAgICB0aGlzLmVtaXQodGhpcy5jb250cm9sQ2hhbm5lbCwge1xuICAgICAgICAgICAgdHlwZTogJ0xpbmsgdG8gJyArIG5hbWUsXG4gICAgICAgICAgICByZXF1ZXN0OiAnbGluaycsXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgb3ZlcnJpZGVEZXN0OiBuYW1lICsgJy4nICsgdGhpcy5pZCxcbiAgICAgICAgICAgIHRvOiBkZXBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfS5iaW5kKHRoaXMpLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgdGhpcy5kZWJ1Zy53YXJuKCdmYWlsZWQgdG8gbG9hZCBkZXA6ICcsIG5hbWUsIGVycik7XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICB9LmJpbmQodGhpcyksIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgdGhpcy5kZWJ1Zy53YXJuKCdmYWlsZWQgdG8gbG9hZCBkZXA6ICcsIG5hbWUsIGVycik7XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cbiAgLy8gTm90ZSB0aGF0IG1lc3NhZ2VzIGNhbiBiZSBzeW5jaHJvbm91cywgc28gc29tZSBwb3J0cyBtYXkgYWxyZWFkeSBiZSBib3VuZC5cbiAgZm9yIChpID0gMDsgaSA8IGNoYW5uZWxzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhpcy5leHRlcm5hbFBvcnRNYXBbY2hhbm5lbHNbaV1dID0gdGhpcy5leHRlcm5hbFBvcnRNYXBbY2hhbm5lbHNbaV1dIHx8IGZhbHNlO1xuICAgIHRoaXMuaW50ZXJuYWxQb3J0TWFwW2NoYW5uZWxzW2ldXSA9IGZhbHNlO1xuICB9XG59O1xuXG4vKipcbiAqIFVwZGF0ZSB0aGUgbW9kdWxlIGVudmlyb25tZW50IHdpdGggaW5mb3JtYXRpb24gYWJvdXQgYSBkZXBlbmRlbnQgbWFuaWZlc3QuXG4gKiBAbWV0aG9kIHVwZGF0ZUVudlxuICogQHBhcmFtIHtTdHJpbmd9IGRlcCBUaGUgZGVwZW5kZW5jeVxuICogQHBhcmFtIHtPYmplY3R9IG1hbmlmZXN0IFRoZSBtYW5pZmVzdCBvZiB0aGUgZGVwZW5kZW5jeVxuICovXG5Nb2R1bGUucHJvdG90eXBlLnVwZGF0ZUVudiA9IGZ1bmN0aW9uIChkZXAsIG1hbmlmZXN0KSB7XG4gIGlmICghbWFuaWZlc3QpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKCF0aGlzLm1vZEludGVybmFsKSB7XG4gICAgdGhpcy5vbmNlKCdtb2RJbnRlcm5hbCcsIHRoaXMudXBkYXRlRW52LmJpbmQodGhpcywgZGVwLCBtYW5pZmVzdCkpO1xuICAgIHJldHVybjtcbiAgfVxuICBcbiAgdmFyIG1ldGFkYXRhO1xuXG4gIC8vIERlY2lkZSBpZi93aGF0IG90aGVyIHByb3BlcnRpZXMgc2hvdWxkIGJlIGV4cG9ydGVkLlxuICAvLyBLZWVwIGluIHN5bmMgd2l0aCBNb2R1bGVJbnRlcm5hbC51cGRhdGVFbnZcbiAgbWV0YWRhdGEgPSB7XG4gICAgbmFtZTogbWFuaWZlc3QubmFtZSxcbiAgICBpY29uOiBtYW5pZmVzdC5pY29uLFxuICAgIGRlc2NyaXB0aW9uOiBtYW5pZmVzdC5kZXNjcmlwdGlvbixcbiAgICBhcGk6IG1hbmlmZXN0LmFwaVxuICB9O1xuICBcbiAgdGhpcy5wb3J0Lm9uTWVzc2FnZSh0aGlzLm1vZEludGVybmFsLCB7XG4gICAgdHlwZTogJ21hbmlmZXN0JyxcbiAgICBuYW1lOiBkZXAsXG4gICAgbWFuaWZlc3Q6IG1ldGFkYXRhXG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBNb2R1bGU7XG4iLCIvKmpzbGludCBpbmRlbnQ6Miwgbm9kZTp0cnVlLHNsb3BweTp0cnVlICovXG52YXIgUHJvbWlzZUNvbXBhdCA9IHJlcXVpcmUoJ2VzNi1wcm9taXNlJykuUHJvbWlzZTtcblxudmFyIEFwaUludGVyZmFjZSA9IHJlcXVpcmUoJy4vcHJveHkvYXBpSW50ZXJmYWNlJyk7XG52YXIgUHJvdmlkZXIgPSByZXF1aXJlKCcuL3Byb3ZpZGVyJyk7XG52YXIgUHJveHlCaW5kZXIgPSByZXF1aXJlKCcuL3Byb3h5YmluZGVyJyk7XG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG4vKipcbiAqIFRoZSBpbnRlcm5hbCBsb2dpYyBmb3IgbW9kdWxlIHNldHVwLCB3aGljaCBtYWtlcyBzdXJlIHRoZSBwdWJsaWNcbiAqIGZhY2luZyBleHBvcnRzIGhhdmUgYXBwcm9wcmlhdGUgcHJvcGVydGllcywgYW5kIGxvYWQgdXNlciBzY3JpcHRzLlxuICogQGNsYXNzIE1vZHVsZUludGVybmFsXG4gKiBAZXh0ZW5kcyBQb3J0XG4gKiBAcGFyYW0ge1BvcnR9IG1hbmFnZXIgVGhlIG1hbmFnZXIgaW4gdGhpcyBtb2R1bGUgdG8gdXNlIGZvciByb3V0aW5nIHNldHVwLlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnZhciBNb2R1bGVJbnRlcm5hbCA9IGZ1bmN0aW9uIChtYW5hZ2VyKSB7XG4gIHRoaXMuY29uZmlnID0ge307XG4gIHRoaXMubWFuYWdlciA9IG1hbmFnZXI7XG4gIHRoaXMuZGVidWcgPSBtYW5hZ2VyLmRlYnVnO1xuICB0aGlzLmJpbmRlciA9IG5ldyBQcm94eUJpbmRlcih0aGlzLm1hbmFnZXIpO1xuICB0aGlzLmFwaSA9IHRoaXMubWFuYWdlci5hcGk7XG4gIHRoaXMubWFuaWZlc3RzID0ge307XG4gIHRoaXMucHJvdmlkZXJzID0ge307XG4gIFxuICB0aGlzLmlkID0gJ01vZHVsZUludGVybmFsJztcbiAgdGhpcy5wZW5kaW5nUG9ydHMgPSAwO1xuICB0aGlzLnJlcXVlc3RzID0ge307XG5cbiAgdXRpbC5oYW5kbGVFdmVudHModGhpcyk7XG59O1xuXG4vKipcbiAqIE1lc3NhZ2UgaGFuZGxlciBmb3IgdGhpcyBwb3J0LlxuICogVGhpcyBwb3J0IG9ubHkgaGFuZGxlcyB0d28gbWVzc2FnZXM6XG4gKiBUaGUgZmlyc3QgaXMgaXRzIHNldHVwIGZyb20gdGhlIG1hbmFnZXIsIHdoaWNoIGl0IHVzZXMgZm9yIGNvbmZpZ3VyYXRpb24uXG4gKiBUaGUgc2Vjb25kIGlzIGZyb20gdGhlIG1vZHVsZSBjb250cm9sbGVyIChmZG9tLnBvcnQuTW9kdWxlKSwgd2hpY2ggcHJvdmlkZXNcbiAqIHRoZSBtYW5pZmVzdCBpbmZvIGZvciB0aGUgbW9kdWxlLlxuICogQG1ldGhvZCBvbk1lc3NhZ2VcbiAqIEBwYXJhbSB7U3RyaW5nfSBmbG93IFRoZSBkZXRpbmF0aW9uIG9mIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG4gKi9cbk1vZHVsZUludGVybmFsLnByb3RvdHlwZS5vbk1lc3NhZ2UgPSBmdW5jdGlvbiAoZmxvdywgbWVzc2FnZSkge1xuICBpZiAoZmxvdyA9PT0gJ2NvbnRyb2wnKSB7XG4gICAgaWYgKCF0aGlzLmNvbnRyb2xDaGFubmVsICYmIG1lc3NhZ2UuY2hhbm5lbCkge1xuICAgICAgdGhpcy5jb250cm9sQ2hhbm5lbCA9IG1lc3NhZ2UuY2hhbm5lbDtcbiAgICAgIHV0aWwubWl4aW4odGhpcy5jb25maWcsIG1lc3NhZ2UuY29uZmlnKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoZmxvdyA9PT0gJ2RlZmF1bHQnICYmICF0aGlzLmFwcElkKSB7XG4gICAgLy8gUmVjb3ZlciB0aGUgSUQgb2YgdGhpcyBtb2R1bGU6XG4gICAgdGhpcy5wb3J0ID0gdGhpcy5tYW5hZ2VyLmh1Yi5nZXREZXN0aW5hdGlvbihtZXNzYWdlLmNoYW5uZWwpO1xuICAgIHRoaXMuZXh0ZXJuYWxDaGFubmVsID0gbWVzc2FnZS5jaGFubmVsO1xuICAgIHRoaXMuYXBwSWQgPSBtZXNzYWdlLmFwcElkO1xuICAgIHRoaXMubGluZWFnZSA9IG1lc3NhZ2UubGluZWFnZTtcblxuICAgIHZhciBvYmplY3RzID0gdGhpcy5tYXBQcm94aWVzKG1lc3NhZ2UubWFuaWZlc3QpO1xuXG4gICAgdGhpcy5nZW5lcmF0ZUVudihtZXNzYWdlLm1hbmlmZXN0LCBvYmplY3RzKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmxvYWRMaW5rcyhvYmplY3RzKTtcbiAgICB9LmJpbmQodGhpcykpLnRoZW4odGhpcy5sb2FkU2NyaXB0cy5iaW5kKHRoaXMsIG1lc3NhZ2UuaWQsXG4gICAgICAgIG1lc3NhZ2UubWFuaWZlc3QuYXBwLnNjcmlwdCkpLnRoZW4obnVsbCwgZnVuY3Rpb24gKGVycikge1xuICAgICAgdGhpcy5kZWJ1Zy5lcnJvcignQ291bGQgbm90IHNldCB1cCBtb2R1bGUgJyArIHRoaXMuYXBwSWQgKyAnOiAnLCBlcnIpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH0gZWxzZSBpZiAoZmxvdyA9PT0gJ2RlZmF1bHQnICYmIHRoaXMucmVxdWVzdHNbbWVzc2FnZS5pZF0pIHtcbiAgICB0aGlzLnJlcXVlc3RzW21lc3NhZ2UuaWRdKG1lc3NhZ2UuZGF0YSk7XG4gICAgZGVsZXRlIHRoaXMucmVxdWVzdHNbbWVzc2FnZS5pZF07XG4gIH0gZWxzZSBpZiAoZmxvdyA9PT0gJ2RlZmF1bHQnICYmIG1lc3NhZ2UudHlwZSA9PT0gJ21hbmlmZXN0Jykge1xuICAgIHRoaXMuZW1pdCgnbWFuaWZlc3QnLCBtZXNzYWdlKTtcbiAgICB0aGlzLnVwZGF0ZU1hbmlmZXN0KG1lc3NhZ2UubmFtZSwgbWVzc2FnZS5tYW5pZmVzdCk7XG4gIH0gZWxzZSBpZiAoZmxvdyA9PT0gJ2RlZmF1bHQnICYmIG1lc3NhZ2UudHlwZSA9PT0gJ0Nvbm5lY3Rpb24nKSB7XG4gICAgLy8gTXVsdGlwbGUgY29ubmVjdGlvbnMgY2FuIGJlIG1hZGUgdG8gdGhlIGRlZmF1bHQgcHJvdmlkZXIuXG4gICAgaWYgKG1lc3NhZ2UuYXBpICYmIHRoaXMucHJvdmlkZXJzW21lc3NhZ2UuYXBpXSkge1xuICAgICAgdGhpcy5tYW5hZ2VyLmNyZWF0ZUxpbmsodGhpcy5wcm92aWRlcnNbbWVzc2FnZS5hcGldLCBtZXNzYWdlLmNoYW5uZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9ydCwgbWVzc2FnZS5jaGFubmVsKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGVmYXVsdFBvcnQgJiZcbiAgICAgICAgICAgICAgIChtZXNzYWdlLmFwaSA9PT0gdGhpcy5kZWZhdWx0UG9ydC5hcGkgfHwgIW1lc3NhZ2UuYXBpKSkge1xuICAgICAgdGhpcy5tYW5hZ2VyLmNyZWF0ZUxpbmsodGhpcy5kZWZhdWx0UG9ydCwgbWVzc2FnZS5jaGFubmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3J0LCBtZXNzYWdlLmNoYW5uZWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uY2UoJ3N0YXJ0JywgdGhpcy5vbk1lc3NhZ2UuYmluZCh0aGlzLCBmbG93LCBtZXNzYWdlKSk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEdldCBhIHRleHR1YWwgZGVzY3JpcHRpb24gb2YgdGhpcyBQb3J0LlxuICogQG1ldGhvZCB0b1N0cmluZ1xuICogQHJldHVybiB7U3RyaW5nfSBhIGRlc2NyaXB0aW9uIG9mIHRoaXMgUG9ydC5cbiAqL1xuTW9kdWxlSW50ZXJuYWwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gXCJbRW52aXJvbm1lbnQgSGVscGVyXVwiO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0ZSBhbiBleHRlcm5hbHkgdmlzaXNibGUgbmFtZXNwYWNlXG4gKiBAbWV0aG9kIGdlbmVyYXRlRW52XG4gKiBAcGFyYW0ge09iamVjdH0gbWFuaWZlc3QgVGhlIG1hbmlmZXN0IG9mIHRoZSBtb2R1bGUuXG4gKiBAcGFyYW0ge09iamVjdFtdfSBpdGVtcyBPdGhlciBpbnRlcmZhY2VzIHRvIGxvYWQuXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gQSBwcm9taXNlIHdoZW4gdGhlIGV4dGVybmFsIG5hbWVzcGFjZSBpcyB2aXNpYmxlLlxuICogQHByaXZhdGVcbiAqL1xuTW9kdWxlSW50ZXJuYWwucHJvdG90eXBlLmdlbmVyYXRlRW52ID0gZnVuY3Rpb24gKG1hbmlmZXN0LCBpdGVtcykge1xuICByZXR1cm4gdGhpcy5iaW5kZXIuYmluZERlZmF1bHQodGhpcy5wb3J0LCB0aGlzLmFwaSwgbWFuaWZlc3QsIHRydWUpLnRoZW4oXG4gICAgZnVuY3Rpb24gKGJpbmRpbmcpIHtcbiAgICAgIHZhciBpID0gMDtcbiAgICAgIGJpbmRpbmcucG9ydC5hcGkgPSBiaW5kaW5nLmV4dGVybmFsLmFwaTtcbiAgICAgIHRoaXMuZGVmYXVsdFBvcnQgPSBiaW5kaW5nLnBvcnQ7XG4gICAgICBpZiAoYmluZGluZy5leHRlcm5hbC5hcGkpIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgaWYgKGl0ZW1zW2ldLm5hbWUgPT09IGJpbmRpbmcuZXh0ZXJuYWwuYXBpICYmIGl0ZW1zW2ldLmRlZi5wcm92aWRlcykge1xuICAgICAgICAgICAgaXRlbXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmNvbmZpZy5nbG9iYWwuZnJlZWRvbSA9IGJpbmRpbmcuZXh0ZXJuYWw7XG4gICAgfS5iaW5kKHRoaXMpXG4gICk7XG59O1xuXG4vKipcbiAqIEF0dGFjaCBhIHByb3h5IHRvIHRoZSBleHRlcm5hbGx5IHZpc2libGUgbmFtZXNwYWNlLlxuICogQG1ldGhvZCBhdHRhY2hcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBwcm94eS5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gcHJvdmlkZXMgSWYgdGhpcyBwcm94eSBpcyBhIHByb3ZpZGVyLlxuICogQHBhcmFtIHtQcm94eUludGVyZmFjZX0gcHJveHkgVGhlIHByb3h5IHRvIGF0dGFjaC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBhcGkgVGhlIEFQSSB0aGUgcHJveHkgaW1wbGVtZW50cy5cbiAqIEBwcml2YXRlLlxuICovXG5Nb2R1bGVJbnRlcm5hbC5wcm90b3R5cGUuYXR0YWNoID0gZnVuY3Rpb24gKG5hbWUsIHByb3ZpZGVzLCBwcm94eSkge1xuICB2YXIgZXhwID0gdGhpcy5jb25maWcuZ2xvYmFsLmZyZWVkb207XG4gIFxuICBpZiAocHJvdmlkZXMpIHtcbiAgICB0aGlzLnByb3ZpZGVyc1tuYW1lXSA9IHByb3h5LnBvcnQ7XG4gIH1cblxuICBpZiAoIWV4cFtuYW1lXSkge1xuICAgIGV4cFtuYW1lXSA9IHByb3h5LmV4dGVybmFsO1xuICAgIGlmICh0aGlzLm1hbmlmZXN0c1tuYW1lXSkge1xuICAgICAgZXhwW25hbWVdLm1hbmlmZXN0ID0gdGhpcy5tYW5pZmVzdHNbbmFtZV07XG4gICAgfVxuICB9XG5cbiAgdGhpcy5wZW5kaW5nUG9ydHMgLT0gMTtcbiAgaWYgKHRoaXMucGVuZGluZ1BvcnRzID09PSAwKSB7XG4gICAgdGhpcy5lbWl0KCdzdGFydCcpO1xuICB9XG59O1xuXG4vKipcbiAqIFJlcXVlc3QgYSBzZXQgb2YgcHJveHkgaW50ZXJmYWNlcywgYW5kIGJpbmQgdGhlbSB0byB0aGUgZXh0ZXJuYWxcbiAqIG5hbWVzcGFjZS5cbiAqIEBtZXRob2QgbG9hZExpbmtzXG4gKiBAcGFyYW0ge09iamVjdFtdfSBpdGVtcyBEZXNjcmlwdG9ycyBvZiB0aGUgcHJveHkgcG9ydHMgdG8gbG9hZC5cbiAqIEBwcml2YXRlXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gUHJvbWlzZSBmb3Igd2hlbiBhbGwgbGlua3MgYXJlIGxvYWRlZC5cbiAqL1xuLy9UT0RPKHdpbGxzY290dCk6IHByb21pc2Ugc2hvdWxkIGJlIGNoYWluZWQsIHJhdGhlciB0aGFuIGdvaW5nIHRocm91Z2ggZXZlbnRzLlxuTW9kdWxlSW50ZXJuYWwucHJvdG90eXBlLmxvYWRMaW5rcyA9IGZ1bmN0aW9uIChpdGVtcykge1xuICB2YXIgaSwgcHJveHksIHByb3ZpZGVyLCBjb3JlLFxuICAgIG1hbmlmZXN0UHJlZGljYXRlID0gZnVuY3Rpb24gKG5hbWUsIGZsb3csIG1zZykge1xuICAgICAgcmV0dXJuIGZsb3cgPT09ICdtYW5pZmVzdCcgJiYgbXNnLm5hbWUgPT09IG5hbWU7XG4gICAgfSxcbiAgICBvbk1hbmlmZXN0ID0gZnVuY3Rpb24gKGl0ZW0sIG1zZykge1xuICAgICAgdmFyIGRlZmluaXRpb24gPSB7XG4gICAgICAgIG5hbWU6IGl0ZW0uYXBpXG4gICAgICB9O1xuICAgICAgaWYgKCFtc2cubWFuaWZlc3QuYXBpIHx8ICFtc2cubWFuaWZlc3QuYXBpW2l0ZW0uYXBpXSkge1xuICAgICAgICBkZWZpbml0aW9uLmRlZmluaXRpb24gPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVmaW5pdGlvbi5kZWZpbml0aW9uID0gbXNnLm1hbmlmZXN0LmFwaVtpdGVtLmFwaV07XG4gICAgICB9XG4gICAgICB0aGlzLmJpbmRlci5nZXRFeHRlcm5hbCh0aGlzLnBvcnQsIGl0ZW0ubmFtZSwgZGVmaW5pdGlvbikudGhlbihcbiAgICAgICAgdGhpcy5hdHRhY2guYmluZCh0aGlzLCBpdGVtLm5hbWUsIGZhbHNlKVxuICAgICAgKTtcbiAgICB9LmJpbmQodGhpcyksXG4gICAgcHJvbWlzZSA9IG5ldyBQcm9taXNlQ29tcGF0KGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHRoaXMub25jZSgnc3RhcnQnLCByZXNvbHZlKTtcbiAgICB9LmJpbmQodGhpcykpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChpdGVtc1tpXS5hcGkgJiYgIWl0ZW1zW2ldLmRlZikge1xuICAgICAgaWYgKHRoaXMubWFuaWZlc3RzW2l0ZW1zW2ldLm5hbWVdKSB7XG4gICAgICAgIG9uTWFuaWZlc3QoaXRlbXNbaV0sIHtcbiAgICAgICAgICBtYW5pZmVzdDogdGhpcy5tYW5pZmVzdHNbaXRlbXNbaV0ubmFtZV1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9uY2UobWFuaWZlc3RQcmVkaWNhdGUuYmluZCh7fSwgaXRlbXNbaV0ubmFtZSksXG4gICAgICAgICAgICAgICAgICBvbk1hbmlmZXN0LmJpbmQodGhpcywgaXRlbXNbaV0pKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5iaW5kZXIuZ2V0RXh0ZXJuYWwodGhpcy5wb3J0LCBpdGVtc1tpXS5uYW1lLCBpdGVtc1tpXS5kZWYpLnRoZW4oXG4gICAgICAgIHRoaXMuYXR0YWNoLmJpbmQodGhpcywgaXRlbXNbaV0ubmFtZSwgaXRlbXNbaV0uZGVmICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXNbaV0uZGVmLnByb3ZpZGVzKVxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5wZW5kaW5nUG9ydHMgKz0gMTtcbiAgfVxuICBcbiAgLy8gQWxsb3cgcmVzb2x1dGlvbiBvZiBmaWxlcyBieSBwYXJlbnQuXG4gIHRoaXMubWFuYWdlci5yZXNvdXJjZS5hZGRSZXNvbHZlcihmdW5jdGlvbiAobWFuaWZlc3QsIHVybCwgcmVzb2x2ZSkge1xuICAgIHZhciBpZCA9IHV0aWwuZ2V0SWQoKTtcbiAgICB0aGlzLnJlcXVlc3RzW2lkXSA9IHJlc29sdmU7XG4gICAgdGhpcy5lbWl0KHRoaXMuZXh0ZXJuYWxDaGFubmVsLCB7XG4gICAgICB0eXBlOiAncmVzb2x2ZScsXG4gICAgICBpZDogaWQsXG4gICAgICBkYXRhOiB1cmxcbiAgICB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfS5iaW5kKHRoaXMpKTtcblxuICAvLyBBdHRhY2ggQ29yZS5cbiAgdGhpcy5wZW5kaW5nUG9ydHMgKz0gMTtcblxuICBjb3JlID0gdGhpcy5hcGkuZ2V0KCdjb3JlJykuZGVmaW5pdGlvbjtcbiAgcHJvdmlkZXIgPSBuZXcgUHJvdmlkZXIoY29yZSwgdGhpcy5kZWJ1Zyk7XG4gIHRoaXMubWFuYWdlci5nZXRDb3JlKGZ1bmN0aW9uIChDb3JlUHJvdikge1xuICAgIG5ldyBDb3JlUHJvdih0aGlzLm1hbmFnZXIpLnNldElkKHRoaXMubGluZWFnZSk7XG4gICAgcHJvdmlkZXIuZ2V0SW50ZXJmYWNlKCkucHJvdmlkZUFzeW5jaHJvbm91cyhDb3JlUHJvdik7XG4gIH0uYmluZCh0aGlzKSk7XG5cbiAgdGhpcy5lbWl0KHRoaXMuY29udHJvbENoYW5uZWwsIHtcbiAgICB0eXBlOiAnTGluayB0byBjb3JlJyxcbiAgICByZXF1ZXN0OiAnbGluaycsXG4gICAgbmFtZTogJ2NvcmUnLFxuICAgIHRvOiBwcm92aWRlclxuICB9KTtcbiAgXG4gIHRoaXMuYmluZGVyLmdldEV4dGVybmFsKHByb3ZpZGVyLCAnZGVmYXVsdCcsIHtcbiAgICBuYW1lOiAnY29yZScsXG4gICAgZGVmaW5pdGlvbjogY29yZVxuICB9KS50aGVuKFxuICAgIHRoaXMuYXR0YWNoLmJpbmQodGhpcywgJ2NvcmUnLCBmYWxzZSlcbiAgKTtcblxuXG4vLyAgcHJveHkgPSBuZXcgUHJveHkoQXBpSW50ZXJmYWNlLmJpbmQoe30sIGNvcmUpLCB0aGlzLmRlYnVnKTtcbi8vICB0aGlzLm1hbmFnZXIuY3JlYXRlTGluayhwcm92aWRlciwgJ2RlZmF1bHQnLCBwcm94eSk7XG4vLyAgdGhpcy5hdHRhY2goJ2NvcmUnLCB7cG9ydDogcHIsIGV4dGVybmFsOiBwcm94eX0pO1xuXG4gIGlmICh0aGlzLnBlbmRpbmdQb3J0cyA9PT0gMCkge1xuICAgIHRoaXMuZW1pdCgnc3RhcnQnKTtcbiAgfVxuXG4gIHJldHVybiBwcm9taXNlO1xufTtcblxuLyoqXG4gKiBVcGRhdGUgdGhlIGV4cG9ydGVkIG1hbmlmZXN0IG9mIGEgZGVwZW5kZW5jeS5cbiAqIFNldHMgaXQgaW50ZXJuYWxseSBpZiBub3QgeWV0IGV4cG9ydGVkLCBvciBhdHRhY2hlcyB0aGUgcHJvcGVydHkgaWYgaXRcbiAqIGlzIGxvYWRlZCBhZnRlciB0aGUgbW9kdWxlIGhhcyBzdGFydGVkICh3ZSBkb24ndCBkZWxheSBzdGFydCB0byByZXRyZWl2ZVxuICogdGhlIG1hbmlmZXN0IG9mIHRoZSBkZXBlbmRlbmN5LilcbiAqIEBtZXRob2QgdXBkYXRlTWFuaWZlc3RcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBEZXBlbmRlbmN5XG4gKiBAcGFyYW0ge09iamVjdH0gbWFuaWZlc3QgVGhlIG1hbmlmZXN0IG9mIHRoZSBkZXBlbmRlbmN5XG4gKi9cbk1vZHVsZUludGVybmFsLnByb3RvdHlwZS51cGRhdGVNYW5pZmVzdCA9IGZ1bmN0aW9uIChuYW1lLCBtYW5pZmVzdCkge1xuICB2YXIgZXhwID0gdGhpcy5jb25maWcuZ2xvYmFsLmZyZWVkb207XG5cbiAgaWYgKGV4cCAmJiBleHBbbmFtZV0pIHtcbiAgICBleHBbbmFtZV0ubWFuaWZlc3QgPSBtYW5pZmVzdDtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLm1hbmlmZXN0c1tuYW1lXSA9IG1hbmlmZXN0O1xuICB9XG59O1xuXG4vKipcbiAqIERldGVybWluZSB3aGljaCBwcm94eSBwb3J0cyBzaG91bGQgYmUgZXhwb3NlZCBieSB0aGlzIG1vZHVsZS5cbiAqIEBtZXRob2QgbWFwUHJveGllc1xuICogQHBhcmFtIHtPYmplY3R9IG1hbmlmZXN0IHRoZSBtb2R1bGUgSlNPTiBtYW5pZmVzdC5cbiAqIEByZXR1cm4ge09iamVjdFtdfSBwcm94eSBkZXNjcmlwdG9ycyBkZWZpbmVkIGluIHRoZSBtYW5pZmVzdC5cbiAqL1xuTW9kdWxlSW50ZXJuYWwucHJvdG90eXBlLm1hcFByb3hpZXMgPSBmdW5jdGlvbiAobWFuaWZlc3QpIHtcbiAgdmFyIHByb3hpZXMgPSBbXSwgc2VlbiA9IFsnY29yZSddLCBpLCBvYmo7XG4gIFxuICBpZiAobWFuaWZlc3QucGVybWlzc2lvbnMpIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbWFuaWZlc3QucGVybWlzc2lvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIG9iaiA9IHtcbiAgICAgICAgbmFtZTogbWFuaWZlc3QucGVybWlzc2lvbnNbaV0sXG4gICAgICAgIGRlZjogdW5kZWZpbmVkXG4gICAgICB9O1xuICAgICAgb2JqLmRlZiA9IHRoaXMuYXBpLmdldChvYmoubmFtZSk7XG4gICAgICBpZiAoc2Vlbi5pbmRleE9mKG9iai5uYW1lKSA8IDAgJiYgb2JqLmRlZikge1xuICAgICAgICBwcm94aWVzLnB1c2gob2JqKTtcbiAgICAgICAgc2Vlbi5wdXNoKG9iai5uYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIGlmIChtYW5pZmVzdC5kZXBlbmRlbmNpZXMpIHtcbiAgICB1dGlsLmVhY2hQcm9wKG1hbmlmZXN0LmRlcGVuZGVuY2llcywgZnVuY3Rpb24gKGRlc2MsIG5hbWUpIHtcbiAgICAgIG9iaiA9IHtcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgYXBpOiBkZXNjLmFwaVxuICAgICAgfTtcbiAgICAgIGlmIChzZWVuLmluZGV4T2YobmFtZSkgPCAwKSB7XG4gICAgICAgIGlmIChkZXNjLmFwaSkge1xuICAgICAgICAgIG9iai5kZWYgPSB0aGlzLmFwaS5nZXQoZGVzYy5hcGkpO1xuICAgICAgICB9XG4gICAgICAgIHByb3hpZXMucHVzaChvYmopO1xuICAgICAgICBzZWVuLnB1c2gobmFtZSk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuICBcbiAgaWYgKG1hbmlmZXN0LnByb3ZpZGVzKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IG1hbmlmZXN0LnByb3ZpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBvYmogPSB7XG4gICAgICAgIG5hbWU6IG1hbmlmZXN0LnByb3ZpZGVzW2ldLFxuICAgICAgICBkZWY6IHVuZGVmaW5lZFxuICAgICAgfTtcbiAgICAgIG9iai5kZWYgPSB0aGlzLmFwaS5nZXQob2JqLm5hbWUpO1xuICAgICAgaWYgKG9iai5kZWYpIHtcbiAgICAgICAgb2JqLmRlZi5wcm92aWRlcyA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKG1hbmlmZXN0LmFwaSAmJiBtYW5pZmVzdC5hcGlbb2JqLm5hbWVdKSB7XG4gICAgICAgIG9iai5kZWYgPSB7XG4gICAgICAgICAgbmFtZTogb2JqLm5hbWUsXG4gICAgICAgICAgZGVmaW5pdGlvbjogbWFuaWZlc3QuYXBpW29iai5uYW1lXSxcbiAgICAgICAgICBwcm92aWRlczogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kZWJ1Zy53YXJuKCdNb2R1bGUgd2lsbCBub3QgcHJvdmlkZSBcIicgKyBvYmoubmFtZSArXG4gICAgICAgICAgJ1wiLCBzaW5jZSBubyBkZWNsYXJhdGlvbiBjYW4gYmUgZm91bmQuJyk7XG4gICAgICAgIC8qanNsaW50IGNvbnRpbnVlOnRydWUqL1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIC8qanNsaW50IGNvbnRpbnVlOmZhbHNlKi9cbiAgICAgIGlmIChzZWVuLmluZGV4T2Yob2JqLm5hbWUpIDwgMCkge1xuICAgICAgICBwcm94aWVzLnB1c2gob2JqKTtcbiAgICAgICAgc2Vlbi5wdXNoKG9iai5uYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJveGllcztcbn07XG5cbi8qKlxuICogTG9hZCBleHRlcm5hbCBzY3JpcHRzIGludG8gdGhpcyBuYW1lc3BhY2UuXG4gKiBAbWV0aG9kIGxvYWRTY3JpcHRzXG4gKiBAcGFyYW0ge1N0cmluZ30gZnJvbSBUaGUgVVJMIG9mIHRoaXMgbW9kdWxlcydzIG1hbmlmZXN0LlxuICogQHBhcmFtIHtTdHJpbmdbXX0gc2NyaXB0cyBUaGUgVVJMcyBvZiB0aGUgc2NyaXB0cyB0byBsb2FkLlxuICovXG5Nb2R1bGVJbnRlcm5hbC5wcm90b3R5cGUubG9hZFNjcmlwdHMgPSBmdW5jdGlvbiAoZnJvbSwgc2NyaXB0cykge1xuICAvLyBUT0RPKHNhbG9tZWdlbyk6IGFkZCBhIHRlc3QgZm9yIGZhaWx1cmUuXG4gIHZhciBpbXBvcnRlciA9IGZ1bmN0aW9uIChzY3JpcHQsIHJlc29sdmUsIHJlamVjdCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmNvbmZpZy5nbG9iYWwuaW1wb3J0U2NyaXB0cyhzY3JpcHQpO1xuICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZWplY3QoZSk7XG4gICAgfVxuICB9LmJpbmQodGhpcyksXG4gICAgc2NyaXB0c19jb3VudCxcbiAgICBsb2FkO1xuICBpZiAodHlwZW9mIHNjcmlwdHMgPT09ICdzdHJpbmcnKSB7XG4gICAgc2NyaXB0c19jb3VudCA9IDE7XG4gIH0gZWxzZSB7XG4gICAgc2NyaXB0c19jb3VudCA9IHNjcmlwdHMubGVuZ3RoO1xuICB9XG5cbiAgbG9hZCA9IGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgaWYgKG5leHQgPT09IHNjcmlwdHNfY291bnQpIHtcbiAgICAgIHRoaXMuZW1pdCh0aGlzLmV4dGVybmFsQ2hhbm5lbCwge1xuICAgICAgICB0eXBlOiBcInJlYWR5XCJcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBzY3JpcHQ7XG4gICAgaWYgKHR5cGVvZiBzY3JpcHRzID09PSAnc3RyaW5nJykge1xuICAgICAgc2NyaXB0ID0gc2NyaXB0cztcbiAgICB9IGVsc2Uge1xuICAgICAgc2NyaXB0ID0gc2NyaXB0c1tuZXh0XTtcbiAgICB9XG5cbiAgICB0aGlzLm1hbmFnZXIucmVzb3VyY2UuZ2V0KGZyb20sIHNjcmlwdCkudGhlbihmdW5jdGlvbiAodXJsKSB7XG4gICAgICB0aGlzLnRyeUxvYWQoaW1wb3J0ZXIsIHVybCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxvYWQobmV4dCArIDEpO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9LmJpbmQodGhpcyk7XG5cblxuXG4gIGlmICghdGhpcy5jb25maWcuZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICBpbXBvcnRlciA9IGZ1bmN0aW9uICh1cmwsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHNjcmlwdCA9IHRoaXMuY29uZmlnLmdsb2JhbC5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIHNjcmlwdC5zcmMgPSB1cmw7XG4gICAgICBzY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHJlc29sdmUsIHRydWUpO1xuICAgICAgdGhpcy5jb25maWcuZ2xvYmFsLmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9LmJpbmQodGhpcyk7XG4gIH1cblxuICBsb2FkKDApO1xufTtcblxuLyoqXG4gKiBBdHRlbXB0IHRvIGxvYWQgcmVzb2x2ZWQgc2NyaXB0cyBpbnRvIHRoZSBuYW1lc3BhY2UuXG4gKiBAbWV0aG9kIHRyeUxvYWRcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpbXBvcnRlciBUaGUgYWN0dWFsIGltcG9ydCBmdW5jdGlvblxuICogQHBhcmFtIHtTdHJpbmdbXX0gdXJscyBUaGUgcmVzb3ZlZCBVUkxzIHRvIGxvYWQuXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gY29tcGxldGlvbiBvZiBsb2FkXG4gKi9cbk1vZHVsZUludGVybmFsLnByb3RvdHlwZS50cnlMb2FkID0gZnVuY3Rpb24gKGltcG9ydGVyLCB1cmwpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ29tcGF0KGltcG9ydGVyLmJpbmQoe30sIHVybCkpLnRoZW4oZnVuY3Rpb24gKHZhbCkge1xuICAgIHJldHVybiB2YWw7XG4gIH0sIGZ1bmN0aW9uIChlKSB7XG4gICAgdGhpcy5kZWJ1Zy53YXJuKGUuc3RhY2spO1xuICAgIHRoaXMuZGVidWcuZXJyb3IoXCJFcnJvciBsb2FkaW5nIFwiICsgdXJsLCBlKTtcbiAgICB0aGlzLmRlYnVnLmVycm9yKFwiSWYgdGhlIHN0YWNrIHRyYWNlIGlzIG5vdCB1c2VmdWwsIHNlZSBodHRwczovL1wiICtcbiAgICAgICAgXCJnaXRodWIuY29tL2ZyZWVkb21qcy9mcmVlZG9tL3dpa2kvRGVidWdnaW5nLVNjcmlwdC1QYXJzZS1FcnJvcnNcIik7XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1vZHVsZUludGVybmFsO1xuIiwiLypnbG9iYWxzIFhNTEh0dHBSZXF1ZXN0ICovXG4vKmpzbGludCBpbmRlbnQ6Mix3aGl0ZTp0cnVlLG5vZGU6dHJ1ZSxzbG9wcHk6dHJ1ZSAqL1xudmFyIFByb21pc2VDb21wYXQgPSByZXF1aXJlKCdlczYtcHJvbWlzZScpLlByb21pc2U7XG52YXIgTW9kdWxlID0gcmVxdWlyZSgnLi9tb2R1bGUnKTtcbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbi8qKlxuICogVGhlIFBvbGljeSByZWdpc3RyeSBmb3IgZnJlZWRvbS5qcy4gIFVzZWQgdG8gbG9vayB1cCBtb2R1bGVzIGFuZCBwcm92aWRlXG4gKiBtaWdyYXRpb24gYW5kIGNvYWxsZXNpbmcgb2YgZXhlY3V0aW9uLlxuICogQENsYXNzIFBvbGljeVxuICogQHBhcmFtIHtNYW5hZ2VyfSBtYW5hZ2VyIFRoZSBtYW5hZ2VyIG9mIHRoZSBhY3RpdmUgcnVudGltZS5cbiAqIEBwYXJhbSB7UmVzb3VyY2V9IHJlc291cmNlIFRoZSByZXNvdXJjZSBsb2FkZXIgb2YgdGhlIGFjdGl2ZSBydW50aW1lLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgbG9jYWwgY29uZmlnLlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnZhciBQb2xpY3kgPSBmdW5jdGlvbihtYW5hZ2VyLCByZXNvdXJjZSwgY29uZmlnKSB7XG4gIHRoaXMuYXBpID0gbWFuYWdlci5hcGk7XG4gIHRoaXMuZGVidWcgPSBtYW5hZ2VyLmRlYnVnO1xuICB0aGlzLmxvY2F0aW9uID0gY29uZmlnLmxvY2F0aW9uO1xuICB0aGlzLnJlc291cmNlID0gcmVzb3VyY2U7XG5cbiAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gIHRoaXMucnVudGltZXMgPSBbXTtcbiAgdGhpcy5wb2xpY2llcyA9IFtdO1xuICB0aGlzLnBlbmRpbmcgPSB7fTtcbiAgdXRpbC5oYW5kbGVFdmVudHModGhpcyk7XG5cbiAgdGhpcy5hZGQobWFuYWdlciwgY29uZmlnLnBvbGljeSk7XG4gIHRoaXMucnVudGltZXNbMF0ubG9jYWwgPSB0cnVlO1xufTtcblxuLyoqXG4gKiBUaGUgcG9saWN5IGEgcnVudGltZSBpcyBleHBlY3RlZCB0byBoYXZlIHVubGVzcyBpdCBzcGVjaWZpZXNcbiAqIG90aGVyd2lzZS5cbiAqIFRPRE86IGNvbnNpZGVyIG1ha2luZyBzdGF0aWNcbiAqIEBwcm9wZXJ0eSBkZWZhdWx0UG9saWN5XG4gKi9cblBvbGljeS5wcm90b3R5cGUuZGVmYXVsdFBvbGljeSA9IHtcbiAgYmFja2dyb3VuZDogZmFsc2UsIC8vIENhbiB0aGlzIHJ1bnRpbWUgcnVuICdiYWNrZ3JvdW5kJyBtb2R1bGVzP1xuICBpbnRlcmFjdGl2ZTogdHJ1ZSAvLyBJcyB0aGVyZSBhIHZpZXcgYXNzb2NpYXRlZCB3aXRoIHRoaXMgcnVudGltZT9cbiAgLy8gVE9ETzogcmVtYWluaW5nIHJ1bnRpbWUgcG9saWN5LlxufTtcblxuLyoqXG4gKiBUaGUgY29uc3RyYWludHMgYSBjb2RlIG1vZHVsZXMgaXMgZXhwZWN0ZWQgdG8gaGF2ZSB1bmxlc3MgaXQgc3BlY2lmaWVzXG4gKiBvdGhlcndpc2UuXG4gKiBUT0RPOiBjb25zaWRlciBtYWtpbmcgc3RhdGljXG4gKiBAcHJvcGVydHkgZGVmYXVsdENvbnN0cmFpbnRzXG4gKi9cblBvbGljeS5wcm90b3R5cGUuZGVmYXVsdENvbnN0cmFpbnRzID0ge1xuICBpc29sYXRpb246IFwiYWx3YXlzXCIsIC8vIHZhbHVlczogYWx3YXlzLCBhcHAsIG5ldmVyXG4gIHBsYWNlbWVudDogXCJsb2NhbFwiIC8vIHZhbHVlczogbG9jYWwsIHN0YWJsZSwgcmVkdW5kYW50XG4gIC8vIFRPRE86IHJlbWFpbmluZyBjb25zdHJhaW50cywgZXhwcmVzcyBwbGF0Zm9ybS1zcGVjaWZpYyBkZXBlbmRlbmNpZXMuXG59O1xuXG4vKipcbiAqIFJlc29sdmUgYSBtb2R1bGUgZnJvbSBpdHMgY2Fub25pY2FsIFVSTC5cbiAqIFJlcG9uZHMgd2l0aCB0aGUgcHJvbWlzZSBvZiBhIHBvcnQgcmVwcmVzZW50aW5nIHRoZSBtb2R1bGUsIFxuICogQG1ldGhvZCBnZXRcbiAqIEBwYXJhbSB7U3RyaW5nW119IGxpbmVhZ2UgVGhlIGxpbmVhZ2Ugb2YgdGhlIHJlcXVlc3RpbmcgbW9kdWxlLlxuICogQHBhcmFtIHtTdHJpbmd9IGlkIFRoZSBjYW5vbmljYWwgSUQgb2YgdGhlIG1vZHVsZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gQSBwcm9taXNlIGZvciB0aGUgbG9jYWwgcG9ydCB0b3dhcmRzIHRoZSBtb2R1bGUuXG4gKi9cblBvbGljeS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24obGluZWFnZSwgaWQpIHtcbiAgXG4gIC8vIE1ha2Ugc3VyZSB0aGF0IGEgbW9kdWxlIGlzbid0IGdldHRpbmcgbG9jYXRlZCB0d2ljZSBhdCB0aGUgc2FtZSB0aW1lLlxuICAvLyBUaGlzIGlzIHJlc29sdmVkIGJ5IGRlbGF5aW5nIGlmIGl0IHVudGlsIHdlIHNlZSBpdCBpbiBhICdtb2R1bGVBZGQnIGV2ZW50LlxuICBpZiAodGhpcy5wZW5kaW5nW2lkXSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB0aGlzLm9uY2UoJ3BsYWNlZCcsIGZ1bmN0aW9uKGwsIGkpIHtcbiAgICAgICAgdGhpcy5nZXQobCwgaSkudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgfS5iaW5kKHRoaXMsIGxpbmVhZ2UsIGlkKSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnBlbmRpbmdbaWRdID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmxvYWRNYW5pZmVzdChpZCkudGhlbihmdW5jdGlvbihtYW5pZmVzdCkge1xuICAgIHZhciBjb25zdHJhaW50cyA9IHRoaXMub3ZlcmxheSh0aGlzLmRlZmF1bHRDb25zdHJhaW50cywgbWFuaWZlc3QuY29uc3RyYWludHMpLFxuICAgICAgICBydW50aW1lID0gdGhpcy5maW5kRGVzdGluYXRpb24obGluZWFnZSwgaWQsIGNvbnN0cmFpbnRzKSxcbiAgICAgICAgcG9ydElkO1xuICAgIGlmIChydW50aW1lLmxvY2FsKSB7XG4gICAgICBwb3J0SWQgPSB0aGlzLmlzUnVubmluZyhydW50aW1lLCBpZCwgbGluZWFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3RyYWludHMuaXNvbGF0aW9uICE9PSAnbmV2ZXInKTtcbiAgICAgIGlmKGNvbnN0cmFpbnRzLmlzb2xhdGlvbiAhPT0gJ2Fsd2F5cycgJiYgcG9ydElkKSB7XG4gICAgICAgIHRoaXMuZGVidWcuaW5mbygnUmV1c2VkIHBvcnQgJyArIHBvcnRJZCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnBlbmRpbmdbaWRdO1xuICAgICAgICB0aGlzLmVtaXQoJ3BsYWNlZCcpO1xuICAgICAgICByZXR1cm4gcnVudGltZS5tYW5hZ2VyLmdldFBvcnQocG9ydElkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgTW9kdWxlKGlkLCBtYW5pZmVzdCwgbGluZWFnZSwgdGhpcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRPRE86IENyZWF0ZSBhIHBvcnQgdG8gZ28gdG8gdGhlIHJlbW90ZSBydW50aW1lLlxuICAgICAgdGhpcy5kZWJ1Zy5lcnJvcignVW5leHBlY3RlZCBsb2NhdGlvbiBzZWxlY3RlZCBmb3IgbW9kdWxlIHBsYWNlbWVudCcpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpLCBmdW5jdGlvbihlcnIpIHtcbiAgICB0aGlzLmRlYnVnLmVycm9yKCdQb2xpY3kgRXJyb3IgUmVzb2x2aW5nICcgKyBpZCwgZXJyKTtcbiAgICB0aHJvdyhlcnIpO1xuICB9LmJpbmQodGhpcykpO1xufTtcblxuLyoqXG4gKiBGaW5kIHRoZSBydW50aW1lIGRlc3RpbmF0aW9uIGZvciBhIG1vZHVsZSBnaXZlbiBpdHMgY29uc3RyYWludHMgYW5kIHRoZVxuICogbW9kdWxlIGNyZWF0aW5nIGl0LlxuICogQG1ldGhvZCBmaW5kRGVzdGluYXRpb25cbiAqIEBwYXJhbSB7U3RyaW5nW119IGxpbmVhZ2UgVGhlIGlkZW50aXR5IG9mIHRoZSBtb2R1bGUgY3JlYXRpbmcgdGhpcyBtb2R1bGUuXG4gKiBAcGFyYW0ge1N0cmluZ10gaWQgVGhlIGNhbm9uaWNhbCB1cmwgb2YgdGhlIG1vZHVsZVxuICogQHBhcmFtIHtPYmplY3R9IGNvbnN0cmFpbnRzIENvbnN0cmFpbnRzIGZvciB0aGUgbW9kdWxlLlxuICogQHJldHVybnMge09iamVjdH0gVGhlIGVsZW1lbnQgb2YgdGhpcy5ydW50aW1lcyB3aGVyZSB0aGUgbW9kdWxlIHNob3VsZCBydW4uXG4gKi9cblBvbGljeS5wcm90b3R5cGUuZmluZERlc3RpbmF0aW9uID0gZnVuY3Rpb24obGluZWFnZSwgaWQsIGNvbnN0cmFpbnRzKSB7XG4gIHZhciBpO1xuXG4gIC8vIFN0ZXAgMTogaWYgYW4gaW5zdGFuY2UgYWxyZWFkeSBleGlzdHMsIHRoZSBtXG4gIGlmIChjb25zdHJhaW50cy5pc29sYXRpb24gIT09ICdhbHdheXMnKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMucG9saWNpZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICh0aGlzLmlzUnVubmluZyh0aGlzLnJ1bnRpbWVzW2ldLCBpZCwgbGluZWFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdHJhaW50cy5pc29sYXRpb24gIT09ICduZXZlcicpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJ1bnRpbWVzW2ldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0ZXAgMjogaWYgdGhlIG1vZHVsZSB3YW50cyBzdGFiaWxpdHksIGl0IG1heSBuZWVkIHRvIGJlIHJlbW90ZS5cbiAgaWYgKGNvbnN0cmFpbnRzLnBsYWNlbWVudCA9PT0gJ2xvY2FsJykge1xuICAgIHJldHVybiB0aGlzLnJ1bnRpbWVzWzBdO1xuICB9IGVsc2UgaWYgKGNvbnN0cmFpbnRzLnBsYWNlbWVudCA9PT0gJ3N0YWJsZScpIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5wb2xpY2llcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHRoaXMucG9saWNpZXNbaV0uYmFja2dyb3VuZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ydW50aW1lc1tpXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBTdGVwIDM6IGlmIHRoZSBtb2R1bGUgbmVlZHMgbG9uZ2V2aXR5IC8gaW50ZXJhY3Rpdml0eSwgaXQgbWF5IHdhbnQgdG8gYmUgcmVtb3RlLlxuICByZXR1cm4gdGhpcy5ydW50aW1lc1swXTtcbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEga25vd24gcnVudGltZSBpcyBydW5uaW5nIGFuIGFwcHJvcHJpYXRlIGluc3RhbmNlIG9mIGEgbW9kdWxlLlxuICogQG1ldGhvZCBpc1J1bm5pbmdcbiAqIEBwYXJhbSB7T2JqZWN0fSBydW50aW1lIFRoZSBydW50aW1lIHRvIGNoZWNrLlxuICogQHBhcmFtIHtTdHJpbmd9IGlkIFRoZSBtb2R1bGUgdG8gbG9vayBmb3IuXG4gKiBAcGFyYW0ge1N0cmluZ1tdfSBmcm9tIFRoZSBpZGVudGlmaWVyIG9mIHRoZSByZXF1ZXN0aW5nIG1vZHVsZS5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gZnVsbE1hdGNoIElmIHRoZSBtb2R1bGUgbmVlZHMgdG8gYmUgaW4gdGhlIHNhbWUgYXBwLlxuICogQHJldHVybnMge1N0cmluZ3xCb29sZWFufSBUaGUgTW9kdWxlIGlkIGlmIGl0IGlzIHJ1bm5pbmcsIG9yIGZhbHNlIGlmIG5vdC5cbiAqL1xuUG9saWN5LnByb3RvdHlwZS5pc1J1bm5pbmcgPSBmdW5jdGlvbihydW50aW1lLCBpZCwgZnJvbSwgZnVsbE1hdGNoKSB7XG4gIHZhciBpID0gMCwgaiA9IDAsIG9rYXk7XG4gIGZvciAoaSA9IDA7IGkgPCBydW50aW1lLm1vZHVsZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoZnVsbE1hdGNoICYmIHJ1bnRpbWUubW9kdWxlc1tpXS5sZW5ndGggPT09IGZyb20ubGVuZ3RoICsgMSkge1xuICAgICAgb2theSA9IHRydWU7XG4gICAgICBmb3IgKGogPSAwOyBqIDwgZnJvbS5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBpZiAocnVudGltZS5tb2R1bGVzW2ldW2ogKyAxXS5pbmRleE9mKGZyb21bal0pICE9PSAwKSB7XG4gICAgICAgICAgb2theSA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocnVudGltZS5tb2R1bGVzW2ldWzBdLmluZGV4T2YoaWQpICE9PSAwKSB7XG4gICAgICAgIG9rYXkgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9rYXkpIHtcbiAgICAgICAgcmV0dXJuIHJ1bnRpbWUubW9kdWxlc1tpXVswXTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFmdWxsTWF0Y2ggJiYgcnVudGltZS5tb2R1bGVzW2ldWzBdLmluZGV4T2YoaWQpID09PSAwKSB7XG4gICAgICByZXR1cm4gcnVudGltZS5tb2R1bGVzW2ldWzBdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIEdldCBhIHByb21pc2Ugb2YgdGhlIG1hbmlmZXN0IGZvciBhIG1vZHVsZSBJRC5cbiAqIEBtZXRob2QgbG9hZE1hbmlmZXN0XG4gKiBAcGFyYW0ge1N0cmluZ30gbWFuaWZlc3QgVGhlIGNhbm9uaWNhbCBJRCBvZiB0aGUgbWFuaWZlc3RcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBQcm9taXNlIGZvciB0aGUganNvbiBjb250ZW50cyBvZiB0aGUgbWFuaWZlc3QuXG4gKi9cblBvbGljeS5wcm90b3R5cGUubG9hZE1hbmlmZXN0ID0gZnVuY3Rpb24obWFuaWZlc3QpIHtcbiAgcmV0dXJuIHRoaXMucmVzb3VyY2UuZ2V0Q29udGVudHMobWFuaWZlc3QpLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciByZXNwID0ge307XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xuICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICB0aGlzLmRlYnVnLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgXCIgKyBtYW5pZmVzdCArIFwiOiBcIiArIGVycik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBNYW5pZmVzdCBBdmFpbGFibGVcIik7XG4gICAgfVxuICB9LmJpbmQodGhpcykpO1xufTtcblxuLyoqXG4gKiBBZGQgYSBydW50aW1lIHRvIGtlZXAgdHJhY2sgb2YgaW4gdGhpcyBwb2xpY3kuXG4gKiBAbWV0aG9kIGFkZFxuICogQHBhcmFtIHtmZG9tLnBvcnR9IHBvcnQgVGhlIHBvcnQgdG8gdXNlIGZvciBtb2R1bGUgbGlmZXRpbWUgaW5mb1xuICogQHBhcmFtIHtPYmplY3R9IHBvbGljeSBUaGUgcG9saWN5IG9mIHRoZSBydW50aW1lLlxuICovXG5Qb2xpY3kucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKHBvcnQsIHBvbGljeSkge1xuICB2YXIgcnVudGltZSA9IHtcbiAgICBtYW5hZ2VyOiBwb3J0LFxuICAgIG1vZHVsZXM6IFtdXG4gIH07XG4gIHRoaXMucnVudGltZXMucHVzaChydW50aW1lKTtcbiAgdGhpcy5wb2xpY2llcy5wdXNoKHRoaXMub3ZlcmxheSh0aGlzLmRlZmF1bHRQb2xpY3ksIHBvbGljeSkpO1xuXG4gIHBvcnQub24oJ21vZHVsZUFkZCcsIGZ1bmN0aW9uKHJ1bnRpbWUsIGluZm8pIHtcbiAgICB2YXIgbGluZWFnZSA9IFtdO1xuICAgIGxpbmVhZ2UgPSBsaW5lYWdlLmNvbmNhdChpbmZvLmxpbmVhZ2UpO1xuICAgIGxpbmVhZ2VbMF0gPSBpbmZvLmlkO1xuICAgIHJ1bnRpbWUubW9kdWxlcy5wdXNoKGxpbmVhZ2UpO1xuICAgIGlmICh0aGlzLnBlbmRpbmdbaW5mby5saW5lYWdlWzBdXSkge1xuICAgICAgZGVsZXRlIHRoaXMucGVuZGluZ1tpbmZvLmxpbmVhZ2VbMF1dO1xuICAgICAgdGhpcy5lbWl0KCdwbGFjZWQnKTtcbiAgICB9XG4gIH0uYmluZCh0aGlzLCBydW50aW1lKSk7XG4gIHBvcnQub24oJ21vZHVsZVJlbW92ZScsIGZ1bmN0aW9uKHJ1bnRpbWUsIGluZm8pIHtcbiAgICB2YXIgbGluZWFnZSA9IFtdLCBpLCBtb2RGaW5nZXJwcmludDtcbiAgICBsaW5lYWdlID0gbGluZWFnZS5jb25jYXQoaW5mby5saW5lYWdlKTtcbiAgICBsaW5lYWdlWzBdID0gaW5mby5pZDtcbiAgICBtb2RGaW5nZXJwcmludCA9IGxpbmVhZ2UudG9TdHJpbmcoKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBydW50aW1lLm1vZHVsZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChydW50aW1lLm1vZHVsZXNbaV0udG9TdHJpbmcoKSA9PT0gbW9kRmluZ2VycHJpbnQpIHtcbiAgICAgICAgcnVudGltZS5tb2R1bGVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmRlYnVnLndhcm4oJ1Vua25vd24gbW9kdWxlIHRvIHJlbW92ZTogJywgaW5mby5pZCk7XG4gIH0uYmluZCh0aGlzLCBydW50aW1lKSk7XG59O1xuXG4vKipcbiAqIE92ZXJsYXkgYSBzcGVjaWZpYyBwb2xpY3kgb3IgY29uc3RyYWludCBpbnN0YW5jZSBvbiBkZWZhdWx0IHNldHRpbmdzLlxuICogVE9ETzogY29uc2lkZXIgbWFraW5nIHN0YXRpYy5cbiAqIEBtZXRob2Qgb3ZlcmxheVxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBiYXNlIFRoZSBkZWZhdWx0IG9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG92ZXJsYXkgVGhlIHN1cGVyY2VlZGluZyBvYmplY3RcbiAqIEByZXR1cm5zIHtPYmplY3R9IEEgbmV3IG9iamVjdCB3aXRoIGJhc2UgcGFyYW1ldGVycyB3aGVuIG5vdCBzZXQgaW4gb3ZlcmxheS5cbiAqL1xuUG9saWN5LnByb3RvdHlwZS5vdmVybGF5ID0gZnVuY3Rpb24oYmFzZSwgb3ZlcmxheSkge1xuICB2YXIgcmV0ID0ge307XG5cbiAgdXRpbC5taXhpbihyZXQsIGJhc2UpO1xuICBpZiAob3ZlcmxheSkge1xuICAgIHV0aWwubWl4aW4ocmV0LCBvdmVybGF5LCB0cnVlKTtcbiAgfVxuICByZXR1cm4gcmV0O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQb2xpY3k7XG4iLCIvKmpzbGludCBpbmRlbnQ6Miwgbm9kZTp0cnVlLCBzbG9wcHk6dHJ1ZSwgYnJvd3Nlcjp0cnVlICovXG52YXIgQ29uc3VtZXIgPSByZXF1aXJlKCcuL2NvbnN1bWVyJyk7XG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG4vKipcbiAqIEEgZnJlZWRvbSBwb3J0IGZvciBhIHVzZXItYWNjZXNzYWJsZSBwcm92aWRlci5cbiAqIEBjbGFzcyBQcm92aWRlclxuICogQGltcGxlbWVudHMgUG9ydFxuICogQHVzZXMgaGFuZGxlRXZlbnRzXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmIFRoZSBpbnRlcmZhY2Ugb2YgdGhlIHByb3ZpZGVyLlxuICogQHBhcmFtIHtEZWJ1Z30gZGVidWcgVGhlIGRlYnVnZ2VyIHRvIHVzZSBmb3IgbG9nZ2luZy5cbiAqIEBjb250cnVjdG9yXG4gKi9cbnZhciBQcm92aWRlciA9IGZ1bmN0aW9uIChkZWYsIGRlYnVnKSB7XG4gIHRoaXMuaWQgPSBDb25zdW1lci5uZXh0SWQoKTtcbiAgdXRpbC5oYW5kbGVFdmVudHModGhpcyk7XG4gIHRoaXMuZGVidWcgPSBkZWJ1ZztcbiAgXG4gIHRoaXMuZGVmaW5pdGlvbiA9IGRlZjtcbiAgdGhpcy5tb2RlID0gUHJvdmlkZXIubW9kZS5zeW5jaHJvbm91cztcbiAgdGhpcy5jaGFubmVscyA9IHt9O1xuICB0aGlzLmlmYWNlID0gbnVsbDtcbiAgdGhpcy5jbG9zZUhhbmRsZXJzID0ge307XG4gIHRoaXMucHJvdmlkZXJDbHMgPSBudWxsO1xuXG4gIHRoaXMuaWZhY2VzID0ge307XG4gIHRoaXMuZW1pdHMgPSB7fTtcbn07XG5cbi8qKlxuICogUHJvdmlkZXIgbW9kZXMgb2Ygb3BlcmF0aW9uLlxuICogQHByb3BlcnR5IG1vZGVcbiAqIEBzdGF0aWNcbiAqIEB0eXBlIG51bWJlclxuICovXG5Qcm92aWRlci5tb2RlID0ge1xuICBzeW5jaHJvbm91czogMCxcbiAgYXN5bmNocm9ub3VzOiAxLFxuICBwcm9taXNlczogMlxufTtcblxuLyoqXG4gKiBSZWNlaXZlIGV4dGVybmFsIG1lc3NhZ2VzIGZvciB0aGUgcHJvdmlkZXIuXG4gKiBAbWV0aG9kIG9uTWVzc2FnZVxuICogQHBhcmFtIHtTdHJpbmd9IHNvdXJjZSB0aGUgc291cmNlIGlkZW50aWZpZXIgb2YgdGhlIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gbWVzc2FnZSBUaGUgcmVjZWl2ZWQgbWVzc2FnZS5cbiAqL1xuUHJvdmlkZXIucHJvdG90eXBlLm9uTWVzc2FnZSA9IGZ1bmN0aW9uIChzb3VyY2UsIG1lc3NhZ2UpIHtcbiAgaWYgKHNvdXJjZSA9PT0gJ2NvbnRyb2wnICYmIG1lc3NhZ2UucmV2ZXJzZSkge1xuICAgIHRoaXMuY2hhbm5lbHNbbWVzc2FnZS5uYW1lXSA9IG1lc3NhZ2UuY2hhbm5lbDtcbiAgICB0aGlzLmVtaXQobWVzc2FnZS5jaGFubmVsLCB7XG4gICAgICB0eXBlOiAnY2hhbm5lbCBhbm5vdW5jZW1lbnQnLFxuICAgICAgY2hhbm5lbDogbWVzc2FnZS5yZXZlcnNlXG4gICAgfSk7XG4gICAgdGhpcy5lbWl0KCdzdGFydCcpO1xuICB9IGVsc2UgaWYgKHNvdXJjZSA9PT0gJ2NvbnRyb2wnICYmIG1lc3NhZ2UudHlwZSA9PT0gJ3NldHVwJykge1xuICAgIHRoaXMuY29udHJvbENoYW5uZWwgPSBtZXNzYWdlLmNoYW5uZWw7XG4gIH0gZWxzZSBpZiAoc291cmNlID09PSAnY29udHJvbCcgJiYgbWVzc2FnZS50eXBlID09PSAnY2xvc2UnKSB7XG4gICAgaWYgKG1lc3NhZ2UuY2hhbm5lbCA9PT0gdGhpcy5jb250cm9sQ2hhbm5lbCkge1xuICAgICAgZGVsZXRlIHRoaXMuY29udHJvbENoYW5uZWw7XG4gICAgfVxuICAgIHRoaXMuY2xvc2UoKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIXRoaXMuY2hhbm5lbHNbc291cmNlXSAmJiBtZXNzYWdlLmNoYW5uZWwpIHtcbiAgICAgIHRoaXMuY2hhbm5lbHNbc291cmNlXSA9IG1lc3NhZ2UuY2hhbm5lbDtcbiAgICAgIHRoaXMuZW1pdCgnc3RhcnQnKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLmNoYW5uZWxzW3NvdXJjZV0pIHtcbiAgICAgIHRoaXMuZGVidWcud2FybignTWVzc2FnZSBmcm9tIHVuY29uZmlndXJlZCBzb3VyY2U6ICcgKyBzb3VyY2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLnR5cGUgPT09ICdjbG9zZScgJiYgbWVzc2FnZS50bykge1xuICAgICAgdGhpcy50ZWFyZG93bihzb3VyY2UsIG1lc3NhZ2UudG8pO1xuICAgIH0gZWxzZSBpZiAobWVzc2FnZS50byAmJiB0aGlzLmVtaXRzW3NvdXJjZV0gJiZcbiAgICAgICAgICAgICAgIHRoaXMuZW1pdHNbc291cmNlXVttZXNzYWdlLnRvXSkge1xuICAgICAgbWVzc2FnZS5tZXNzYWdlLnRvID0gbWVzc2FnZS50bztcbiAgICAgIHRoaXMuZW1pdHNbc291cmNlXVttZXNzYWdlLnRvXShtZXNzYWdlLm1lc3NhZ2UpO1xuICAgIH0gZWxzZSBpZiAobWVzc2FnZS50byAmJiBtZXNzYWdlLm1lc3NhZ2UgJiZcbiAgICAgICAgbWVzc2FnZS5tZXNzYWdlLnR5cGUgPT09ICdjb25zdHJ1Y3QnKSB7XG4gICAgICB2YXIgYXJncyA9IENvbnN1bWVyLnBvcnRhYmxlVG9NZXNzYWdlKFxuICAgICAgICAgICh0aGlzLmRlZmluaXRpb24uY29uc3RydWN0b3IgJiYgdGhpcy5kZWZpbml0aW9uLmNvbnN0cnVjdG9yLnZhbHVlKSA/XG4gICAgICAgICAgICAgIHRoaXMuZGVmaW5pdGlvbi5jb25zdHJ1Y3Rvci52YWx1ZSA6IFtdLFxuICAgICAgICAgIG1lc3NhZ2UubWVzc2FnZSxcbiAgICAgICAgICB0aGlzLmRlYnVnXG4gICAgICAgICksXG4gICAgICAgIGluc3RhbmNlO1xuICAgICAgaWYgKCF0aGlzLmlmYWNlc1tzb3VyY2VdKSB7XG4gICAgICAgIHRoaXMuaWZhY2VzW3NvdXJjZV0gPSB7fTtcbiAgICAgICAgdGhpcy5lbWl0c1tzb3VyY2VdID0ge307XG4gICAgICB9XG4gICAgICB0aGlzLmlmYWNlc1tzb3VyY2VdW21lc3NhZ2UudG9dID0gdHJ1ZTtcbiAgICAgIGluc3RhbmNlID0gdGhpcy5nZXRQcm92aWRlcihzb3VyY2UsIG1lc3NhZ2UudG8sIGFyZ3MpO1xuICAgICAgLy8gZG9uJ3Qgc2F2ZSBhIHJlZmVyZW5jZSB0byBpbnN0YW5jZSBpZiBpdCBjbG9zZWQgaXRzZWxmIGFscmVhZHkuXG4gICAgICBpZiAodGhpcy5pZmFjZXNbc291cmNlXSAmJlxuICAgICAgICAgIHRoaXMuaWZhY2VzW3NvdXJjZV1bbWVzc2FnZS50b10pIHtcbiAgICAgICAgdGhpcy5pZmFjZXNbc291cmNlXVttZXNzYWdlLnRvXSA9IGluc3RhbmNlLmluc3RhbmNlO1xuICAgICAgICB0aGlzLmVtaXRzW3NvdXJjZV1bbWVzc2FnZS50b10gPSBpbnN0YW5jZS5vbm1zZztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZWJ1Zy53YXJuKHRoaXMudG9TdHJpbmcoKSArICcgZHJvcHBpbmcgbWVzc2FnZSAnICtcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIENsb3NlIC8gdGVhcmRvd24gdGhlIGZsb3cgdGhpcyBwcm92aWRlciB0ZXJtaW5hdGVzLlxuICogQG1ldGhvZCBjbG9zZVxuICovXG5Qcm92aWRlci5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmNvbnRyb2xDaGFubmVsKSB7XG4gICAgdGhpcy5lbWl0KHRoaXMuY29udHJvbENoYW5uZWwsIHtcbiAgICAgIHR5cGU6ICdQcm92aWRlciBDbG9zaW5nJyxcbiAgICAgIHJlcXVlc3Q6ICdjbG9zZSdcbiAgICB9KTtcbiAgICBkZWxldGUgdGhpcy5jb250cm9sQ2hhbm5lbDtcbiAgfVxuICB0aGlzLmVtaXQoJ2Nsb3NlJyk7XG5cbiAgLy8gUmVsZWFzZSByZWZlcmVuY2VzLlxuICBkZWxldGUgdGhpcy5pZmFjZTtcbiAgZGVsZXRlIHRoaXMucHJvdmlkZXJDbHM7XG4gIHRoaXMuaWZhY2VzID0ge307XG4gIHRoaXMuZW1pdHMgPSB7fTtcbiAgdGhpcy5lbWl0Q2hhbm5lbCA9IG51bGw7XG59O1xuXG4vKipcbiAqIFRlYXJkb3duIGEgc2luZ2xlIGluc3RhbmNlIG9mIGFuIG9iamVjdCBmdWxmaWxsaW5nIHRoaXMgcHJvdmlkZXIuXG4gKiBAbWV0aG9kIHRlYXJkb3duXG4gKiBAcGFyYW0ge1N0cmluZ30gc291cmNlIFRoZSBjb25zdW1lciBzb3VyY2Ugb2YgdGhlIGluc3RhbmNlLlxuICogQHBhcmFtIHtTdHJpbmd9IGlkIFRoZSBpZCBvZiB0aGUgaW5zdGFuY2UgdG8gdGVhciBkb3duLlxuICovXG5Qcm92aWRlci5wcm90b3R5cGUudGVhcmRvd24gPSBmdW5jdGlvbiAoc291cmNlLCBpZCkge1xuICAvLyBJZ25vcmUgdGVhcmRvd24gb2Ygbm9uLWV4aXN0YW50IGlkcy5cbiAgaWYgKCF0aGlzLmlmYWNlc1tzb3VyY2VdKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZGVsZXRlIHRoaXMuaWZhY2VzW3NvdXJjZV1baWRdO1xuICBkZWxldGUgdGhpcy5lbWl0c1tzb3VyY2VdW2lkXTtcbiAgaWYgKHRoaXMuY2xvc2VIYW5kbGVyc1tzb3VyY2VdICYmIHRoaXMuY2xvc2VIYW5kbGVyc1tzb3VyY2VdW2lkXSkge1xuICAgIHV0aWwuZWFjaFByb3AodGhpcy5jbG9zZUhhbmRsZXJzW3NvdXJjZV1baWRdLCBmdW5jdGlvbiAocHJvcCkge1xuICAgICAgcHJvcCgpO1xuICAgIH0pO1xuICAgIGRlbGV0ZSB0aGlzLmNsb3NlSGFuZGxlcnNbc291cmNlXVtpZF07XG4gIH1cbn07XG5cbi8qKlxuICogR2V0IGFuIGludGVyZmFjZSB0byBleHBvc2UgZXh0ZXJuYWxseSByZXByZXNlbnRpbmcgdGhpcyBwb3J0LlxuICogUHJvdmlkZXJzIGFyZSByZWdpc3RlcmVkIHdpdGggdGhlIHBvcnQgdXNpbmcgZWl0aGVyXG4gKiBwcm92aWRlU3luY2hyb25vdXMgb3IgcHJvdmlkZUFzeW5jaHJvbm91cyBkZXBlbmRpbmcgb24gdGhlIGRlc2lyZWRcbiAqIHJldHVybiBpbnRlcmZhY2UuXG4gKiBAbWV0aG9kIGdldEludGVyZmFjZVxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgZXh0ZXJuYWwgaW50ZXJmYWNlIG9mIHRoaXMgUHJvdmlkZXIuXG4gKi9cblByb3ZpZGVyLnByb3RvdHlwZS5nZXRJbnRlcmZhY2UgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmlmYWNlKSB7XG4gICAgcmV0dXJuIHRoaXMuaWZhY2U7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5pZmFjZSA9IHtcbiAgICAgIHByb3ZpZGVTeW5jaHJvbm91czogZnVuY3Rpb24gKHByb3YpIHtcbiAgICAgICAgdGhpcy5wcm92aWRlckNscyA9IHByb3Y7XG4gICAgICAgIHRoaXMubW9kZSA9IFByb3ZpZGVyLm1vZGUuc3luY2hyb25vdXM7XG4gICAgICB9LmJpbmQodGhpcyksXG4gICAgICBwcm92aWRlQXN5bmNocm9ub3VzOiBmdW5jdGlvbiAocHJvdikge1xuICAgICAgICB0aGlzLnByb3ZpZGVyQ2xzID0gcHJvdjtcbiAgICAgICAgdGhpcy5tb2RlID0gUHJvdmlkZXIubW9kZS5hc3luY2hyb25vdXM7XG4gICAgICB9LmJpbmQodGhpcyksXG4gICAgICBwcm92aWRlUHJvbWlzZXM6IGZ1bmN0aW9uIChwcm92KSB7XG4gICAgICAgIHRoaXMucHJvdmlkZXJDbHMgPSBwcm92O1xuICAgICAgICB0aGlzLm1vZGUgPSBQcm92aWRlci5tb2RlLnByb21pc2VzO1xuICAgICAgfS5iaW5kKHRoaXMpXG4gICAgfTtcblxuICAgIHV0aWwuZWFjaFByb3AodGhpcy5kZWZpbml0aW9uLCBmdW5jdGlvbiAocHJvcCwgbmFtZSkge1xuICAgICAgc3dpdGNoIChwcm9wLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJjb25zdGFudFwiOlxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy5pZmFjZSwgbmFtZSwge1xuICAgICAgICAgIHZhbHVlOiBDb25zdW1lci5yZWN1cnNpdmVGcmVlemVPYmplY3QocHJvcC52YWx1ZSksXG4gICAgICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgcmV0dXJuIHRoaXMuaWZhY2U7XG4gIH1cbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgZnVuY3Rpb24gdGhhdCBjYW4gYmUgdXNlZCB0byBnZXQgaW50ZXJmYWNlcyBmcm9tIHRoaXMgcHJvdmlkZXIgZnJvbVxuICogYSB1c2VyLXZpc2libGUgcG9pbnQuXG4gKiBAbWV0aG9kIGdldFByb3h5SW50ZXJmYWNlXG4gKi9cblByb3ZpZGVyLnByb3RvdHlwZS5nZXRQcm94eUludGVyZmFjZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGZ1bmMgPSBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBwLmdldEludGVyZmFjZSgpO1xuICB9LmJpbmQoe30sIHRoaXMpO1xuXG4gIGZ1bmMuY2xvc2UgPSBmdW5jdGlvbiAoaWZhY2UpIHtcbiAgICBpZiAoaWZhY2UpIHtcbiAgICAgIHV0aWwuZWFjaFByb3AodGhpcy5pZmFjZXMsIGZ1bmN0aW9uIChpZHMsIHNvdXJjZSkge1xuICAgICAgICB1dGlsLmVhY2hQcm9wKGlkcywgZnVuY3Rpb24gKGNhbmRpZGF0ZSwgaWQpIHtcbiAgICAgICAgICBpZiAoY2FuZGlkYXRlID09PSBpZmFjZSkge1xuICAgICAgICAgICAgdGhpcy50ZWFyZG93bihzb3VyY2UsIGlkKTtcbiAgICAgICAgICAgIHRoaXMuZW1pdCh0aGlzLmNoYW5uZWxzW3NvdXJjZV0sIHtcbiAgICAgICAgICAgICAgdHlwZTogJ2Nsb3NlJyxcbiAgICAgICAgICAgICAgdG86IGlkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENsb3NlIHRoZSBjaGFubmVsLlxuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpO1xuXG4gIGZ1bmMub25DbG9zZSA9IGZ1bmN0aW9uIChpZmFjZSwgaGFuZGxlcikge1xuICAgIC8vIExpc3RlbiB0byB0aGUgY2hhbm5lbCBkaXJlY3RseS5cbiAgICBpZiAodHlwZW9mIGlmYWNlID09PSAnZnVuY3Rpb24nICYmIGhhbmRsZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vbmNlKCdjbG9zZScsIGlmYWNlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB1dGlsLmVhY2hQcm9wKHRoaXMuaWZhY2VzLCBmdW5jdGlvbiAoaWRzLCBzb3VyY2UpIHtcbiAgICAgIHV0aWwuZWFjaFByb3AoaWRzLCBmdW5jdGlvbiAoY2FuZGlkYXRlLCBpZCkge1xuICAgICAgICBpZiAoY2FuZGlkYXRlID09PSBpZmFjZSkge1xuICAgICAgICAgIGlmICghdGhpcy5jbG9zZUhhbmRsZXJzW3NvdXJjZV0pIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VIYW5kbGVyc1tzb3VyY2VdID0ge307XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghdGhpcy5jbG9zZUhhbmRsZXJzW3NvdXJjZV1baWRdKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlSGFuZGxlcnNbc291cmNlXVtpZF0gPSBbXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5jbG9zZUhhbmRsZXJzW3NvdXJjZV1baWRdLnB1c2goaGFuZGxlcik7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfS5iaW5kKHRoaXMpO1xuXG4gIHJldHVybiBmdW5jO1xufTtcblxuLyoqXG4gKiBHZXQgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIHJlZ2lzdGVyZWQgcHJvdmlkZXIuXG4gKiBAbWV0aG9kIGdldFByb3ZpZGVyXG4gKiBAcGFyYW0ge1N0cmluZ30gc291cmNlIFRoZSBwb3J0IHRoaXMgaW5zdGFuY2UgaXMgaW50ZXJhY3RpZ24gd2l0aC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBpZGVudGlmaWVyIHRoZSBtZXNzYWdhYmxlIGFkZHJlc3MgZm9yIHRoaXMgcHJvdmlkZXIuXG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzIENvbnN0cnVjdG9yIGFyZ3VtZW50cyBmb3IgdGhlIHByb3ZpZGVyLlxuICogQHJldHVybiB7RnVuY3Rpb259IEEgZnVuY3Rpb24gdG8gc2VuZCBtZXNzYWdlcyB0byB0aGUgcHJvdmlkZXIuXG4gKi9cblByb3ZpZGVyLnByb3RvdHlwZS5nZXRQcm92aWRlciA9IGZ1bmN0aW9uIChzb3VyY2UsIGlkZW50aWZpZXIsIGFyZ3MpIHtcbiAgaWYgKCF0aGlzLnByb3ZpZGVyQ2xzKSB7XG4gICAgdGhpcy5kZWJ1Zy5lcnJvcignQ2Fubm90IGluc3RhbnRpYXRlIHByb3ZpZGVyLCBzaW5jZSBpdCBpcyBub3QgcHJvdmlkZWQnKTtcbiAgICByZXR1cm4ge2luc3RhbmNlOiB1bmRlZmluZWQsIG9ubXNnOiB1bmRlZmluZWR9O1xuICB9XG5cbiAgdmFyIGV2ZW50cyA9IHt9LFxuICAgIGRpc3BhdGNoRXZlbnQsXG4gICAgQm91bmRDbGFzcyxcbiAgICBpbnN0YW5jZTtcblxuICB1dGlsLmVhY2hQcm9wKHRoaXMuZGVmaW5pdGlvbiwgZnVuY3Rpb24gKHByb3AsIG5hbWUpIHtcbiAgICBpZiAocHJvcC50eXBlID09PSAnZXZlbnQnKSB7XG4gICAgICBldmVudHNbbmFtZV0gPSBwcm9wO1xuICAgIH1cbiAgfSk7XG5cbiAgZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uIChzcmMsIGV2LCBpZCwgbmFtZSwgdmFsdWUpIHtcbiAgICBpZiAoZXZbbmFtZV0pIHtcbiAgICAgIHZhciBzdHJlYW1zID0gQ29uc3VtZXIubWVzc2FnZVRvUG9ydGFibGUoZXZbbmFtZV0udmFsdWUsIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWJ1Zyk7XG4gICAgICB0aGlzLmVtaXQodGhpcy5jaGFubmVsc1tzcmNdLCB7XG4gICAgICAgIHR5cGU6ICdtZXNzYWdlJyxcbiAgICAgICAgdG86IGlkLFxuICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICB0eXBlOiAnZXZlbnQnLFxuICAgICAgICAgIHRleHQ6IHN0cmVhbXMudGV4dCxcbiAgICAgICAgICBiaW5hcnk6IHN0cmVhbXMuYmluYXJ5XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMsIHNvdXJjZSwgZXZlbnRzLCBpZGVudGlmaWVyKTtcblxuICAvLyB0aGlzIGlzIGFsbCB0byBzYXk6IG5ldyBwcm92aWRlckNscyhkaXNwYXRjaEV2ZW50LCBhcmdzWzBdLCBhcmdzWzFdLC4uLilcbiAgQm91bmRDbGFzcyA9IHRoaXMucHJvdmlkZXJDbHMuYmluZC5hcHBseSh0aGlzLnByb3ZpZGVyQ2xzLFxuICAgICAgW3RoaXMucHJvdmlkZXJDbHMsIGRpc3BhdGNoRXZlbnRdLmNvbmNhdChhcmdzIHx8IFtdKSk7XG4gIGluc3RhbmNlID0gbmV3IEJvdW5kQ2xhc3MoKTtcblxuICByZXR1cm4ge1xuICAgIGluc3RhbmNlOiBpbnN0YW5jZSxcbiAgICBvbm1zZzogZnVuY3Rpb24gKHBvcnQsIHNyYywgbXNnKSB7XG4gICAgICBpZiAobXNnLmFjdGlvbiA9PT0gJ21ldGhvZCcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzW21zZy50eXBlXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHBvcnQuZGVidWcud2FybihcIlByb3ZpZGVyIGRvZXMgbm90IGltcGxlbWVudCBcIiArIG1zZy50eXBlICsgXCIoKSFcIik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwcm9wID0gcG9ydC5kZWZpbml0aW9uW21zZy50eXBlXSxcbiAgICAgICAgICBkZWJ1ZyA9IHBvcnQuZGVidWcsXG4gICAgICAgICAgYXJncyA9IENvbnN1bWVyLnBvcnRhYmxlVG9NZXNzYWdlKHByb3AudmFsdWUsIG1zZywgZGVidWcpLFxuICAgICAgICAgIHJldCA9IGZ1bmN0aW9uIChzcmMsIG1zZywgcHJvcCwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIgc3RyZWFtcyA9IENvbnN1bWVyLm1lc3NhZ2VUb1BvcnRhYmxlKHByb3AucmV0LCByZXNvbHZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVidWcpO1xuICAgICAgICAgICAgdGhpcy5lbWl0KHRoaXMuY2hhbm5lbHNbc3JjXSwge1xuICAgICAgICAgICAgICB0eXBlOiAnbWV0aG9kJyxcbiAgICAgICAgICAgICAgdG86IG1zZy50byxcbiAgICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgIHRvOiBtc2cudG8sXG4gICAgICAgICAgICAgICAgdHlwZTogJ21ldGhvZCcsXG4gICAgICAgICAgICAgICAgcmVxSWQ6IG1zZy5yZXFJZCxcbiAgICAgICAgICAgICAgICBuYW1lOiBtc2cudHlwZSxcbiAgICAgICAgICAgICAgICB0ZXh0OiBzdHJlYW1zLnRleHQsXG4gICAgICAgICAgICAgICAgYmluYXJ5OiBzdHJlYW1zLmJpbmFyeSxcbiAgICAgICAgICAgICAgICBlcnJvcjogcmVqZWN0XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0uYmluZChwb3J0LCBzcmMsIG1zZywgcHJvcCk7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShhcmdzKSkge1xuICAgICAgICAgIGFyZ3MgPSBbYXJnc107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvcnQubW9kZSA9PT0gUHJvdmlkZXIubW9kZS5zeW5jaHJvbm91cykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXQodGhpc1ttc2cudHlwZV0uYXBwbHkodGhpcywgYXJncykpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldCh1bmRlZmluZWQsIGUubWVzc2FnZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHBvcnQubW9kZSA9PT0gUHJvdmlkZXIubW9kZS5hc3luY2hyb25vdXMpIHtcbiAgICAgICAgICB0aGlzW21zZy50eXBlXS5hcHBseShpbnN0YW5jZSwgYXJncy5jb25jYXQocmV0KSk7XG4gICAgICAgIH0gZWxzZSBpZiAocG9ydC5tb2RlID09PSBQcm92aWRlci5tb2RlLnByb21pc2VzKSB7XG4gICAgICAgICAgdGhpc1ttc2cudHlwZV0uYXBwbHkodGhpcywgYXJncykudGhlbihyZXQsIHJldC5iaW5kKHt9LCB1bmRlZmluZWQpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0uYmluZChpbnN0YW5jZSwgdGhpcywgc291cmNlKVxuICB9O1xufTtcblxuLyoqXG4gKiBHZXQgYSB0ZXh0dWFsIGRlc2NyaXB0aW9uIG9mIHRoaXMgcG9ydC5cbiAqIEBtZXRob2QgdG9TdHJpbmdcbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIGRlc2NyaXB0aW9uIG9mIHRoaXMgcG9ydC5cbiAqL1xuUHJvdmlkZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5lbWl0Q2hhbm5lbCkge1xuICAgIHJldHVybiBcIltQcm92aWRlciBcIiArIHRoaXMuZW1pdENoYW5uZWwgKyBcIl1cIjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJbdW5ib3VuZCBQcm92aWRlcl1cIjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm92aWRlcjtcbiIsIi8qanNsaW50IGluZGVudDoyLCB3aGl0ZTp0cnVlLCBub2RlOnRydWUsIHNsb3BweTp0cnVlLCBicm93c2VyOnRydWUgKi9cbnZhciBQcm9taXNlQ29tcGF0ID0gcmVxdWlyZSgnZXM2LXByb21pc2UnKS5Qcm9taXNlO1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwnKTtcbnZhciBDb25zdW1lciA9IHJlcXVpcmUoJy4uL2NvbnN1bWVyJyk7XG5cbnZhciBBcGlJbnRlcmZhY2UgPSBmdW5jdGlvbihkZWYsIG9uTXNnLCBlbWl0LCBkZWJ1Zykge1xuICB2YXIgaW5mbGlnaHQgPSB7fSxcbiAgICAgIGV2ZW50cyA9IG51bGwsXG4gICAgICBlbWl0dGVyID0gbnVsbCxcbiAgICAgIHJlcUlkID0gMCxcbiAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgdXRpbC5lYWNoUHJvcChkZWYsIGZ1bmN0aW9uKHByb3AsIG5hbWUpIHtcbiAgICBzd2l0Y2gocHJvcC50eXBlKSB7XG4gICAgY2FzZSAnbWV0aG9kJzpcbiAgICAgIHRoaXNbbmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gTm90ZTogaW5mbGlnaHQgc2hvdWxkIGJlIHJlZ2lzdGVyZWQgYmVmb3JlIG1lc3NhZ2UgaXMgcGFzc2VkXG4gICAgICAgIC8vIGluIG9yZGVyIHRvIHByZXBhcmUgZm9yIHN5bmNocm9ub3VzIGluLXdpbmRvdyBwaXBlcy5cbiAgICAgICAgdmFyIHRoaXNSZXEgPSByZXFJZCxcbiAgICAgICAgICAgIHByb21pc2UgPSBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgaW5mbGlnaHRbdGhpc1JlcV0gPSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZTpyZXNvbHZlLFxuICAgICAgICAgICAgICAgIHJlamVjdDpyZWplY3QsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHByb3AucmV0XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHN0cmVhbXMgPSBDb25zdW1lci5tZXNzYWdlVG9Qb3J0YWJsZShwcm9wLnZhbHVlLFxuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCksXG4gICAgICAgICAgICAgICAgZGVidWcpO1xuICAgICAgICByZXFJZCArPSAxO1xuICAgICAgICBlbWl0KHtcbiAgICAgICAgICBhY3Rpb246ICdtZXRob2QnLFxuICAgICAgICAgIHR5cGU6IG5hbWUsXG4gICAgICAgICAgcmVxSWQ6IHRoaXNSZXEsXG4gICAgICAgICAgdGV4dDogc3RyZWFtcy50ZXh0LFxuICAgICAgICAgIGJpbmFyeTogc3RyZWFtcy5iaW5hcnlcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2V2ZW50JzpcbiAgICAgIGlmKCFldmVudHMpIHtcbiAgICAgICAgdXRpbC5oYW5kbGVFdmVudHModGhpcyk7XG4gICAgICAgIGVtaXR0ZXIgPSB0aGlzLmVtaXQ7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmVtaXQ7XG4gICAgICAgIGV2ZW50cyA9IHt9O1xuICAgICAgfVxuICAgICAgZXZlbnRzW25hbWVdID0gcHJvcDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2NvbnN0YW50JzpcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBuYW1lLCB7XG4gICAgICAgIHZhbHVlOiBDb25zdW1lci5yZWN1cnNpdmVGcmVlemVPYmplY3QocHJvcC52YWx1ZSksXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH0uYmluZCh0aGlzKSk7XG5cbiAgb25Nc2codGhpcywgZnVuY3Rpb24odHlwZSwgbXNnKSB7XG4gICAgaWYgKHR5cGUgPT09ICdjbG9zZScpIHtcbiAgICAgIGlmICh0aGlzLm9mZikge1xuICAgICAgICB0aGlzLm9mZigpO1xuICAgICAgfVxuICAgICAgdXRpbC5lYWNoUHJvcChpbmZsaWdodCwgZnVuY3Rpb24gKG9iaikge1xuICAgICAgICBvYmoucmVqZWN0KCdjbG9zZWQnKTtcbiAgICAgIH0pO1xuICAgICAgaW5mbGlnaHQgPSB7fTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFtc2cpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSAnbWV0aG9kJykge1xuICAgICAgaWYgKGluZmxpZ2h0W21zZy5yZXFJZF0pIHtcbiAgICAgICAgdmFyIHJlc29sdmVyID0gaW5mbGlnaHRbbXNnLnJlcUlkXSxcbiAgICAgICAgICAgIHRlbXBsYXRlID0gcmVzb2x2ZXIudGVtcGxhdGU7XG4gICAgICAgIGRlbGV0ZSBpbmZsaWdodFttc2cucmVxSWRdO1xuICAgICAgICBpZiAobXNnLmVycm9yKSB7XG4gICAgICAgICAgcmVzb2x2ZXIucmVqZWN0KG1zZy5lcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZXIucmVzb2x2ZShDb25zdW1lci5wb3J0YWJsZVRvTWVzc2FnZSh0ZW1wbGF0ZSwgbXNnLCBkZWJ1ZykpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWJ1Zy5lcnJvcignSW5jb21pbmcgbWVzc2FnZSBjbGFpbWVkIHRvIGJlIGFuIFJQQyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAncmV0dXJuaW5nIGZvciB1bnJlZ2lzdGVyZWQgY2FsbCcsIG1zZy5yZXFJZCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChtc2cudHlwZSA9PT0gJ2V2ZW50Jykge1xuICAgICAgaWYgKGV2ZW50c1ttc2cubmFtZV0pIHtcbiAgICAgICAgZW1pdHRlcihtc2cubmFtZSwgQ29uc3VtZXIucG9ydGFibGVUb01lc3NhZ2UoZXZlbnRzW21zZy5uYW1lXS52YWx1ZSxcbiAgICAgICAgICAgICAgICBtc2csIGRlYnVnKSk7XG4gICAgICB9XG4gICAgfVxuICB9LmJpbmQodGhpcykpO1xuXG4gIGFyZ3MgPSBDb25zdW1lci5tZXNzYWdlVG9Qb3J0YWJsZShcbiAgICAgIChkZWYuY29uc3RydWN0b3IgJiYgZGVmLmNvbnN0cnVjdG9yLnZhbHVlKSA/IGRlZi5jb25zdHJ1Y3Rvci52YWx1ZSA6IFtdLFxuICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJncywgNCksXG4gICAgICBkZWJ1Zyk7XG5cbiAgZW1pdCh7XG4gICAgdHlwZTogJ2NvbnN0cnVjdCcsXG4gICAgdGV4dDogYXJncy50ZXh0LFxuICAgIGJpbmFyeTogYXJncy5iaW5hcnlcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFwaUludGVyZmFjZTtcbiIsIi8qanNsaW50IGluZGVudDoyLCB3aGl0ZTp0cnVlLCBub2RlOnRydWUsIHNsb3BweTp0cnVlLCBicm93c2VyOnRydWUgKi9cbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpO1xuXG52YXIgRXZlbnRJbnRlcmZhY2UgPSBmdW5jdGlvbihvbk1zZywgZW1pdCwgZGVidWcpIHtcbiAgdXRpbC5oYW5kbGVFdmVudHModGhpcyk7XG4gIFxuICBvbk1zZyh0aGlzLCBmdW5jdGlvbihlbWl0LCB0eXBlLCBtc2cpIHtcbiAgICBpZiAodHlwZSA9PT0gJ2Nsb3NlJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbWl0KG1zZy50eXBlLCBtc2cubWVzc2FnZSk7XG4gIH0uYmluZCh0aGlzLCB0aGlzLmVtaXQpKTtcblxuICB0aGlzLmVtaXQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlLCBtc2cpIHtcbiAgICBlbWl0dGVyKHt0eXBlOiB0eXBlLCBtZXNzYWdlOiBtc2d9LCB0cnVlKTtcbiAgfS5iaW5kKHt9LCBlbWl0KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRJbnRlcmZhY2U7XG4iLCIvKmpzbGludCBpbmRlbnQ6Miwgbm9kZTp0cnVlICovXG52YXIgUHJvbWlzZUNvbXBhdCA9IHJlcXVpcmUoJ2VzNi1wcm9taXNlJykuUHJvbWlzZTtcblxudmFyIEFwaUludGVyZmFjZSA9IHJlcXVpcmUoJy4vcHJveHkvYXBpSW50ZXJmYWNlJyk7XG52YXIgRXZlbnRJbnRlcmZhY2UgPSByZXF1aXJlKCcuL3Byb3h5L2V2ZW50SW50ZXJmYWNlJyk7XG52YXIgQ29uc3VtZXIgPSByZXF1aXJlKCcuL2NvbnN1bWVyJyk7XG52YXIgUHJvdmlkZXIgPSByZXF1aXJlKCcuL3Byb3ZpZGVyJyk7XG5cbi8qKlxuICogQSBQcm94eSBCaW5kZXIgbWFuYWdlcyB0aGUgZXh0ZXJuYWwgaW50ZXJmYWNlLCBhbmQgY3JlYXRlcyBvbmUgb2ZcbiAqIHRoZSBkaWZmZXJlbnQgdHlwZXMgb2Ygb2JqZWN0cyBleHBvc2VkIGJ5IGZyZWVkb20gZWl0aGVyIGFzIGEgZ2xvYmFsXG4gKiB3aXRoaW4gYSB3b3JrZXIgLyBtb2R1bGUgY29udGV4dCwgb3IgcmV0dXJuZWQgYnkgYW4gZXh0ZXJuYWwgY2FsbCB0b1xuICogY3JlYXRlIGEgZnJlZWRvbSBydW50aW1lLlxuICogQENsYXNzIFByb3h5QmluZGVyXG4gKiBAcGFyYW0ge01hbmFnZXJ9IG1hbmFnZXIgVGhlIG1hbmFnZXIgZm9yIHRoZSBhY3RpdmUgcnVudGltZS5cbiAqL1xudmFyIFByb3h5QmluZGVyID0gZnVuY3Rpb24gKG1hbmFnZXIpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB0aGlzLm1hbmFnZXIgPSBtYW5hZ2VyO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYSBwcm94eSBmb3IgYSBmcmVlZG9tIHBvcnQsIGFuZCByZXR1cm4gaXQgb25jZSBsb2FkZWQuXG4gKiBAbWV0aG9kIGdldEV4dGVybmFsXG4gKiBAcGFyYW0ge1BvcnR9IHBvcnQgVGhlIHBvcnQgZm9yIHRoZSBwcm94eSB0byBjb21tdW5pY2F0ZSB3aXRoLlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIHByb3h5LlxuICogQHBhcmFtIHtPYmplY3R9IFtkZWZpbml0aW9uXSBUaGUgZGVmaW5pdGlvbiBvZiB0aGUgQVBJIHRvIGV4cG9zZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBkZWZpbml0aW9uLm5hbWUgVGhlIG5hbWUgb2YgdGhlIEFQSS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZpbml0aW9uLmRlZmluaXRpb24gVGhlIGRlZmluaXRpb24gb2YgdGhlIEFQSS5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gZGVmaW5pdGlvbi5wcm92aWRlcyBXaGV0aGVyIHRoaXMgaXMgYSBjb25zdW1lciBvciBwcm92aWRlci5cbiAqIEByZXR1cm5zIHtQcm9taXNlfSBBIHByb21pc2UgZm9yIHRoZSBhY3RpdmUgcHJveHkgaW50ZXJmYWNlLlxuICovXG5Qcm94eUJpbmRlci5wcm90b3R5cGUuZ2V0RXh0ZXJuYWwgPSBmdW5jdGlvbiAocG9ydCwgbmFtZSwgZGVmaW5pdGlvbikge1xuICAndXNlIHN0cmljdCc7XG4gIHZhciBwcm94eSwgYXBpO1xuICByZXR1cm4gbmV3IFByb21pc2VDb21wYXQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGlmIChkZWZpbml0aW9uKSB7XG4gICAgICBhcGkgPSBkZWZpbml0aW9uLm5hbWU7XG4gICAgICBpZiAoZGVmaW5pdGlvbi5wcm92aWRlcykge1xuICAgICAgICBwcm94eSA9IG5ldyBQcm92aWRlcihkZWZpbml0aW9uLmRlZmluaXRpb24sIHRoaXMubWFuYWdlci5kZWJ1Zyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm94eSA9IG5ldyBDb25zdW1lcihBcGlJbnRlcmZhY2UuYmluZCh7fSxcbiAgICAgICAgICAgIGRlZmluaXRpb24uZGVmaW5pdGlvbiksXG4gICAgICAgICAgICB0aGlzLm1hbmFnZXIuZGVidWcpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwcm94eSA9IG5ldyBDb25zdW1lcihFdmVudEludGVyZmFjZSwgdGhpcy5tYW5hZ2VyLmRlYnVnKTtcbiAgICB9XG5cbiAgICBwcm94eS5vbmNlKCdzdGFydCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpZmFjZSA9IHByb3h5LmdldFByb3h5SW50ZXJmYWNlKCk7XG4gICAgICBpZiAoYXBpKSB7XG4gICAgICAgIGlmYWNlLmFwaSA9IGFwaTtcbiAgICAgIH1cbiAgICAgIHJlc29sdmUoe1xuICAgICAgICBwb3J0OiBwcm94eSxcbiAgICAgICAgZXh0ZXJuYWw6IGlmYWNlXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMubWFuYWdlci5jcmVhdGVMaW5rKHBvcnQsIG5hbWUsIHByb3h5KTtcbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cbi8qKlxuICogQmluZCB0aGUgZGVmYXVsdCBwcm94eSBmb3IgYSBmcmVlZG9tIHBvcnQuXG4gKiBAbWV0aG9kIGJpbmREZWZhdWx0XG4gKiBAcGFyYW0ge1BvcnR9IHBvcnQgVGhlIHBvcnQgZm9yIHRoZSBwcm94eSB0byBjb21tdW5pY2F0ZSB3aXRoLlxuICogQHBhcmFtIHtBcGl9IGFwaSBUaGUgQVBJIGxvYWRlciB3aXRoIEFQSSBkZWZpbml0aW9ucy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtYW5pZmVzdCBUaGUgbWFuaWZlc3Qgb2YgdGhlIG1vZHVsZSB0byBleHBvc2UuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGludGVybmFsIFdoZXRoZXIgdGhlIGludGVyZmFjZSBpcyBmb3IgaW5zaWRlIHRoZSBtb2R1bGUuXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gQSBwcm9taXNlIGZvciBhIHByb3h5IGludGVyZmFjZS5cbiAqIEBwcml2YXRlXG4gKi9cblByb3h5QmluZGVyLnByb3RvdHlwZS5iaW5kRGVmYXVsdCA9IGZ1bmN0aW9uIChwb3J0LCBhcGksIG1hbmlmZXN0LCBpbnRlcm5hbCkge1xuICAndXNlIHN0cmljdCc7XG4gIHZhciBtZXRhZGF0YSA9IHtcbiAgICBuYW1lOiBtYW5pZmVzdC5uYW1lLFxuICAgIGljb246IG1hbmlmZXN0Lmljb24sXG4gICAgZGVzY3JpcHRpb246IG1hbmlmZXN0LmRlc2NyaXB0aW9uXG4gIH0sIGRlZjtcblxuICBpZiAobWFuaWZlc3RbJ2RlZmF1bHQnXSkge1xuICAgIGRlZiA9IGFwaS5nZXQobWFuaWZlc3RbJ2RlZmF1bHQnXSk7XG4gICAgaWYgKCFkZWYgJiYgbWFuaWZlc3QuYXBpICYmIG1hbmlmZXN0LmFwaVttYW5pZmVzdFsnZGVmYXVsdCddXSkge1xuICAgICAgZGVmID0ge1xuICAgICAgICBuYW1lOiBtYW5pZmVzdFsnZGVmYXVsdCddLFxuICAgICAgICBkZWZpbml0aW9uOiBtYW5pZmVzdC5hcGlbbWFuaWZlc3RbJ2RlZmF1bHQnXV1cbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChpbnRlcm5hbCAmJiBtYW5pZmVzdC5wcm92aWRlcyAmJlxuICAgICAgICBtYW5pZmVzdC5wcm92aWRlcy5pbmRleE9mKG1hbmlmZXN0WydkZWZhdWx0J10pICE9PSBmYWxzZSkge1xuICAgICAgZGVmLnByb3ZpZGVzID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGludGVybmFsKSB7XG4gICAgICBhcGkuZGVidWcud2FybihcImRlZmF1bHQgQVBJIG5vdCBwcm92aWRlZCwgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgXCJhcmUgeW91IG1pc3NpbmcgYSBwcm92aWRlcyBrZXkgaW4geW91ciBtYW5pZmVzdD9cIik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXMuZ2V0RXh0ZXJuYWwocG9ydCwgJ2RlZmF1bHQnLCBkZWYpLnRoZW4oXG4gICAgZnVuY3Rpb24gKG1ldGFkYXRhLCBpbmZvKSB7XG4gICAgICBpbmZvLmV4dGVybmFsLm1hbmlmZXN0ID0gbWV0YWRhdGE7XG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9LmJpbmQodGhpcywgbWV0YWRhdGEpXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb3h5QmluZGVyO1xuIiwiLypnbG9iYWxzIFhNTEh0dHBSZXF1ZXN0ICovXG4vKmpzbGludCBpbmRlbnQ6Mixub2RlOnRydWUsc2xvcHB5OnRydWUgKi9cbnZhciBQcm9taXNlQ29tcGF0ID0gcmVxdWlyZSgnZXM2LXByb21pc2UnKS5Qcm9taXNlO1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG4vKipcbiAqIFRoZSBSZXNvdXJjZSByZWdpc3RyeSBmb3IgRnJlZURPTS4gIFVzZWQgdG8gbG9vayB1cCByZXF1ZXN0ZWQgUmVzb3VyY2VzLFxuICogYW5kIHByb3ZpZGUgbG9va3VwIGFuZCBtaWdyYXRpb24gb2YgcmVzb3VyY2VzLlxuICogQENsYXNzIFJlc291cmNlXG4gKiBAcGFyYW0ge0RlYnVnfSBkZWJ1ZyBUaGUgbG9nZ2VyIHRvIHVzZSBmb3IgZGVidWdnaW5nLlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnZhciBSZXNvdXJjZSA9IGZ1bmN0aW9uIChkZWJ1Zykge1xuICB0aGlzLmRlYnVnID0gZGVidWc7XG4gIHRoaXMuZmlsZXMgPSB7fTtcbiAgdGhpcy5yZXNvbHZlcnMgPSBbdGhpcy5odHRwUmVzb2x2ZXIsIHRoaXMubnVsbFJlc29sdmVyXTtcbiAgdGhpcy5jb250ZW50UmV0cmlldmVycyA9IHtcbiAgICAnaHR0cCc6IHRoaXMueGhyUmV0cmlldmVyLFxuICAgICdodHRwcyc6IHRoaXMueGhyUmV0cmlldmVyLFxuICAgICdjaHJvbWUtZXh0ZW5zaW9uJzogdGhpcy54aHJSZXRyaWV2ZXIsXG4gICAgJ3Jlc291cmNlJzogdGhpcy54aHJSZXRyaWV2ZXIsXG4gICAgJ2Nocm9tZSc6IHRoaXMueGhyUmV0cmlldmVyLFxuICAgICdhcHAnOiB0aGlzLnhoclJldHJpZXZlcixcbiAgICAnbWFuaWZlc3QnOiB0aGlzLm1hbmlmZXN0UmV0cmlldmVyXG4gIH07XG59O1xuXG4vKipcbiAqIFJlc29sdmUgYSByZXN1cmNlIFVSTCByZXF1ZXN0ZWQgZnJvbSBhIG1vZHVsZS5cbiAqIEBtZXRob2QgZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gbWFuaWZlc3QgVGhlIGNhbm9uaWNhbCBhZGRyZXNzIG9mIHRoZSBtb2R1bGUgcmVxdWVzdGluZy5cbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIHJlc291cmNlIHRvIGdldC5cbiAqIEByZXR1cm5zIHtQcm9taXNlfSBBIHByb21pc2UgZm9yIHRoZSByZXNvdXJjZSBhZGRyZXNzLlxuICovXG5SZXNvdXJjZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKG1hbmlmZXN0LCB1cmwpIHtcbiAgdmFyIGtleSA9IEpTT04uc3RyaW5naWZ5KFttYW5pZmVzdCwgdXJsXSk7XG4gIFxuICByZXR1cm4gbmV3IFByb21pc2VDb21wYXQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGlmICh0aGlzLmZpbGVzW2tleV0pIHtcbiAgICAgIHJlc29sdmUodGhpcy5maWxlc1trZXldKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZXNvbHZlKG1hbmlmZXN0LCB1cmwpLnRoZW4oZnVuY3Rpb24gKGtleSwgcmVzb2x2ZSwgYWRkcmVzcykge1xuICAgICAgICB0aGlzLmZpbGVzW2tleV0gPSBhZGRyZXNzO1xuICAgICAgICAvL2Zkb20uZGVidWcubG9nKCdSZXNvbHZlZCAnICsga2V5ICsgJyB0byAnICsgYWRkcmVzcyk7XG4gICAgICAgIHJlc29sdmUoYWRkcmVzcyk7XG4gICAgICB9LmJpbmQodGhpcywga2V5LCByZXNvbHZlKSwgcmVqZWN0KTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgY29udGVudHMgb2YgYSByZXNvdXJjZS5cbiAqIEBtZXRob2QgZ2V0Q29udGVudHNcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIHJlc291cmNlIHRvIHJlYWQuXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gQSBwcm9taXNlIGZvciB0aGUgcmVzb3VyY2UgY29udGVudHMuXG4gKi9cblJlc291cmNlLnByb3RvdHlwZS5nZXRDb250ZW50cyA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ29tcGF0KGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcHJvcDtcbiAgICBpZiAoIXVybCkge1xuICAgICAgdGhpcy5kZWJ1Zy53YXJuKFwiQXNrZWQgdG8gZ2V0IGNvbnRlbnRzIG9mIHVuZGVmaW5lZCBVUkwuXCIpO1xuICAgICAgcmV0dXJuIHJlamVjdCgpO1xuICAgIH1cbiAgICBmb3IgKHByb3AgaW4gdGhpcy5jb250ZW50UmV0cmlldmVycykge1xuICAgICAgaWYgKHRoaXMuY29udGVudFJldHJpZXZlcnMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgaWYgKHVybC5pbmRleE9mKHByb3AgKyBcIjovL1wiKSA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRlbnRSZXRyaWV2ZXJzW3Byb3BdLmNhbGwodGhpcywgdXJsLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9IGVsc2UgaWYgKHVybC5pbmRleE9mKFwiOi8vXCIpID09PSAtMSAmJiBwcm9wID09PSBcIm51bGxcIikge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRlbnRSZXRyaWV2ZXJzW3Byb3BdLmNhbGwodGhpcywgdXJsLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJlamVjdCgpO1xuICB9LmJpbmQodGhpcykpO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgZmlyc3Qgb2YgYW4gYXJyYXkgb2YgcHJvbWlzZXNcbiAqIHJlc29sdmVzLCBvciByZWplY3RzIGFmdGVyIGFsbCBwcm9taXNlcyByZWplY3QuIENhbiBiZSB0aG91Z2h0IG9mIGFzXG4gKiB0aGUgbWlzc2luZyAnUHJvbWlzZS5hbnknIC0gcmFjZSBpcyBubyBnb29kLCBzaW5jZSBlYXJseSByZWplY3Rpb25zXG4gKiBwcmVlbXB0IGEgc3Vic2VxdWVudCByZXNvbHV0aW9uLlxuICogQHByaXZhdGVcbiAqIEBzdGF0aWNcbiAqIEBtZXRob2QgRmlyc3RQcm9taXNlXG4gKiBAcGFyYW0ge1Byb21pc2VbXX0gUHJvbWlzZXMgdG8gc2VsZWN0IGZyb21cbiAqIEByZXR1cm5zIHtQcm9taXNlfSBQcm9taXNlIHJlc29sdmluZyB3aXRoIGEgdmFsdWUgZnJvbSBhcmd1bWVudHMuXG4gKi9cbnZhciBmaXJzdFByb21pc2UgPSBmdW5jdGlvbihwcm9taXNlcykge1xuICByZXR1cm4gbmV3IFByb21pc2VDb21wYXQoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIGVycm9ycyA9IFtdO1xuICAgIHByb21pc2VzLmZvckVhY2goZnVuY3Rpb24ocHJvbWlzZSkge1xuICAgICAgcHJvbWlzZS50aGVuKHJlc29sdmUsIGZ1bmN0aW9uKGVycikge1xuICAgICAgICBlcnJvcnMucHVzaChlcnIpO1xuICAgICAgICBpZiAoZXJyb3JzLmxlbmd0aCA9PT0gcHJvbWlzZXMubGVuZ3RoKSB7XG4gICAgICAgICAgcmVqZWN0KGVycm9ycyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbi8qKlxuICogUmVzb2x2ZSBhIHJlc291cmNlIHVzaW5nIGtub3duIHJlc29sdmVycy4gVW5saWtlIGdldCwgcmVzb2x2ZSBkb2VzXG4gKiBub3QgY2FjaGUgcmVzb2x2ZWQgcmVzb3VyY2VzLlxuICogQG1ldGhvZCByZXNvbHZlXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IG1hbmlmZXN0IFRoZSBtb2R1bGUgcmVxdWVzdGluZyB0aGUgcmVzb3VyY2UuXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSByZXNvdXJjZSB0byByZXNvbHZlO1xuICogQHJldHVybnMge1Byb21pc2V9IEEgcHJvbWlzZSBmb3IgdGhlIHJlc291cmNlIGFkZHJlc3MuXG4gKi9cblJlc291cmNlLnByb3RvdHlwZS5yZXNvbHZlID0gZnVuY3Rpb24gKG1hbmlmZXN0LCB1cmwpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ29tcGF0KGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcHJvbWlzZXMgPSBbXTtcbiAgICBpZiAodXJsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiByZWplY3QoKTtcbiAgICB9XG4gICAgdXRpbC5lYWNoUmV2ZXJzZSh0aGlzLnJlc29sdmVycywgZnVuY3Rpb24gKHJlc29sdmVyKSB7XG4gICAgICBwcm9taXNlcy5wdXNoKG5ldyBQcm9taXNlQ29tcGF0KHJlc29sdmVyLmJpbmQoe30sIG1hbmlmZXN0LCB1cmwpKSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgICBmaXJzdFByb21pc2UocHJvbWlzZXMpLnRoZW4ocmVzb2x2ZSwgZnVuY3Rpb24oKSB7XG4gICAgICByZWplY3QoJ05vIHJlc29sdmVycyB0byBoYW5kbGUgdXJsOiAnICsgSlNPTi5zdHJpbmdpZnkoW21hbmlmZXN0LCB1cmxdKSk7XG4gICAgfSk7XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIHJlc29sdmVyczogY29kZSB0aGF0IGtub3dzIGhvdyB0byBnZXQgcmVzb3VyY2VzXG4gKiBuZWVkZWQgYnkgdGhlIHJ1bnRpbWUuIEEgcmVzb2x2ZXIgd2lsbCBiZSBjYWxsZWQgd2l0aCBmb3VyXG4gKiBhcmd1bWVudHM6IHRoZSBhYnNvbHV0ZSBtYW5pZmVzdCBvZiB0aGUgcmVxdWVzdGVyLCB0aGVcbiAqIHJlc291cmNlIGJlaW5nIHJlcXVlc3RlZCwgYW5kIGEgcmVzb2x2ZSAvIHJlamVjdCBwYWlyIHRvXG4gKiBmdWxmaWxsIGEgcHJvbWlzZS5cbiAqIEBtZXRob2QgYWRkUmVzb2x2ZXJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmVyIFRoZSByZXNvbHZlciB0byBhZGQuXG4gKi9cblJlc291cmNlLnByb3RvdHlwZS5hZGRSZXNvbHZlciA9IGZ1bmN0aW9uIChyZXNvbHZlcikge1xuICB0aGlzLnJlc29sdmVycy5wdXNoKHJlc29sdmVyKTtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgcmV0cmlldmVyczogY29kZSB0aGF0IGtub3dzIGhvdyB0byBsb2FkIHJlc291cmNlc1xuICogbmVlZGVkIGJ5IHRoZSBydW50aW1lLiBBIHJldHJpZXZlciB3aWxsIGJlIGNhbGxlZCB3aXRoIGEgVVJMXG4gKiB0byByZXRyaWV2ZSB3aXRoIGEgcHJvdG9jb2wgdGhhdCBpdCBpcyBhYmxlIHRvIGhhbmRsZS5cbiAqIEBtZXRob2QgYWRkUmV0cmlldmVyXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvdG8gVGhlIHByb3RvY29sIHRvIHJlZ2lzdGVyIGZvci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJldHJpZXZlciBUaGUgcmV0cmlldmVyIHRvIGFkZC5cbiAqL1xuUmVzb3VyY2UucHJvdG90eXBlLmFkZFJldHJpZXZlciA9IGZ1bmN0aW9uIChwcm90bywgcmV0cmlldmVyKSB7XG4gIGlmICh0aGlzLmNvbnRlbnRSZXRyaWV2ZXJzW3Byb3RvXSkge1xuICAgIHRoaXMuZGVidWcud2FybihcIlVud2lsbGluZyB0byBvdmVycmlkZSBmaWxlIHJldHJpZXZhbCBmb3IgXCIgKyBwcm90byk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMuY29udGVudFJldHJpZXZlcnNbcHJvdG9dID0gcmV0cmlldmVyO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciBleHRlcm5hbCByZXNvbHZlcnMgYW5kIHJldHJlYXZlcnNcbiAqIEBtZXRob2QgcmVnaXN0ZXJcbiAqIEBwYXJhbSB7e1wicHJvdG9cIjpTdHJpbmcsIFwicmVzb2x2ZXJcIjpGdW5jdGlvbiwgXCJyZXRyZWF2ZXJcIjpGdW5jdGlvbn1bXX1cbiAqICAgICByZXNvbHZlcnMgVGhlIGxpc3Qgb2YgcmV0cmVpdmVycyBhbmQgcmVzb2x2ZXJzLlxuICovXG5SZXNvdXJjZS5wcm90b3R5cGUucmVnaXN0ZXIgPSBmdW5jdGlvbiAocmVzb2x2ZXJzKSB7XG4gIGlmICghcmVzb2x2ZXJzLmxlbmd0aCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJlc29sdmVycy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgaWYgKGl0ZW0ucmVzb2x2ZXIpIHtcbiAgICAgIHRoaXMuYWRkUmVzb2x2ZXIoaXRlbS5yZXNvbHZlcik7XG4gICAgfSBlbHNlIGlmIChpdGVtLnByb3RvICYmIGl0ZW0ucmV0cmlldmVyKSB7XG4gICAgICB0aGlzLmFkZFJldHJpZXZlcihpdGVtLnByb3RvLCBpdGVtLnJldHJpZXZlcik7XG4gICAgfVxuICB9LmJpbmQodGhpcykpO1xufTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSBVUkwgaXMgYW4gYWJzb2x1dGUgVVJMIG9mIGEgZ2l2ZW4gU2NoZW1lLlxuICogQG1ldGhvZCBoYXNTY2hlbWVcbiAqIEBzdGF0aWNcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge1N0cmluZ1tdfSBwcm90b2NvbHMgV2hpdGVsaXN0ZWQgcHJvdG9jb2xzXG4gKiBAcGFyYW0ge1N0cmluZ30gVVJMIHRoZSBVUkwgdG8gbWF0Y2guXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gSWYgdGhlIFVSTCBpcyBhbiBhYnNvbHV0ZSBleGFtcGxlIG9mIG9uZSBvZiB0aGUgc2NoZW1lcy5cbiAqL1xuUmVzb3VyY2UuaGFzU2NoZW1lID0gZnVuY3Rpb24gKHByb3RvY29scywgdXJsKSB7XG4gIHZhciBpO1xuICBmb3IgKGkgPSAwOyBpIDwgcHJvdG9jb2xzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKHVybC5pbmRleE9mKHByb3RvY29sc1tpXSArIFwiOi8vXCIpID09PSAwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgJy4vJyBhbmQgJy4uLycgZnJvbSBhIFVSTFxuICogUmVxdWlyZWQgYmVjYXVzZSBDaHJvbWUgQXBwcyBmb3IgTW9iaWxlIChjY2EpIGRvZXNuJ3QgdW5kZXJzdGFuZFxuICogWEhSIHBhdGhzIHdpdGggdGhlc2UgcmVsYXRpdmUgY29tcG9uZW50cyBpbiB0aGUgVVJMLlxuICogQG1ldGhvZCByZW1vdmVSZWxhdGl2ZVBhdGhcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byBtb2RpZnlcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHVybCB3aXRob3V0ICcuLycgYW5kICcuLi8nXG4gKiovXG5SZXNvdXJjZS5yZW1vdmVSZWxhdGl2ZVBhdGggPSBmdW5jdGlvbiAodXJsKSB7XG4gIHZhciBpZHggPSB1cmwuaW5kZXhPZihcIjovL1wiKSArIDMsXG4gICAgc3RhY2ssXG4gICAgdG9SZW1vdmUsXG4gICAgcmVzdWx0O1xuICAvLyBSZW1vdmUgYWxsIGluc3RhbmNlcyBvZiAvLi9cbiAgdXJsID0gdXJsLnJlcGxhY2UoL1xcL1xcLlxcLy9nLCBcIi9cIik7XG4gIC8vV2VpcmQgYnVnIHdoZXJlIGluIGNjYSwgbWFuaWZlc3Qgc3RhcnRzIHdpdGggJ2Nocm9tZTovLy8vJ1xuICAvL1RoaXMgZm9yY2VzIHRoZXJlIHRvIG9ubHkgYmUgMiBzbGFzaGVzXG4gIHdoaWxlICh1cmwuY2hhckF0KGlkeCkgPT09IFwiL1wiKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDAsIGlkeCkgKyB1cmwuc2xpY2UoaWR4ICsgMSwgdXJsLmxlbmd0aCk7XG4gIH1cblxuICAvLyBBZHZhbmNlIHRvIG5leHQgL1xuICBpZHggPSB1cmwuaW5kZXhPZihcIi9cIiwgaWR4KTtcbiAgLy8gUmVtb3ZpbmcgLi4vXG4gIHN0YWNrID0gdXJsLnN1YnN0cihpZHggKyAxKS5zcGxpdChcIi9cIik7XG4gIHdoaWxlIChzdGFjay5pbmRleE9mKFwiLi5cIikgIT09IC0xKSB7XG4gICAgdG9SZW1vdmUgPSBzdGFjay5pbmRleE9mKFwiLi5cIik7XG4gICAgaWYgKHRvUmVtb3ZlID09PSAwKSB7XG4gICAgICBzdGFjay5zaGlmdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGFjay5zcGxpY2UoKHRvUmVtb3ZlIC0gMSksIDIpO1xuICAgIH1cbiAgfVxuICBcbiAgLy9SZWJ1aWxkIHN0cmluZ1xuICByZXN1bHQgPSB1cmwuc3Vic3RyKDAsIGlkeCk7XG4gIGZvciAoaWR4ID0gMDsgaWR4IDwgc3RhY2subGVuZ3RoOyBpZHggKz0gMSkge1xuICAgIHJlc3VsdCArPSBcIi9cIiArIHN0YWNrW2lkeF07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogUmVzb2x2ZSBVUkxzIHdoaWNoIGNhbiBiZSBhY2Nlc3NlZCB1c2luZyBzdGFuZGFyZCBIVFRQIHJlcXVlc3RzLlxuICogQG1ldGhvZCBodHRwUmVzb2x2ZXJcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gbWFuaWZlc3QgVGhlIE1hbmlmZXN0IFVSTC5cbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byByZXNvbHZlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBUaGUgcHJvbWlzZSB0byBjb21wbGV0ZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBUaGUgcHJvbWlzZSB0byByZWplY3QuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgVVJMIGNvdWxkIGJlIHJlc29sdmVkLlxuICovXG5SZXNvdXJjZS5wcm90b3R5cGUuaHR0cFJlc29sdmVyID0gZnVuY3Rpb24gKG1hbmlmZXN0LCB1cmwsIHJlc29sdmUsIHJlamVjdCkge1xuICB2YXIgcHJvdG9jb2xzID0gW1wiaHR0cFwiLCBcImh0dHBzXCIsIFwiY2hyb21lXCIsIFwiY2hyb21lLWV4dGVuc2lvblwiLCBcInJlc291cmNlXCIsXG4gICAgICAgICAgICAgICAgICAgXCJhcHBcIl0sXG4gICAgZGlybmFtZSxcbiAgICBwcm90b2NvbElkeCxcbiAgICBwYXRoSWR4LFxuICAgIHBhdGgsXG4gICAgYmFzZSxcbiAgICByZXN1bHQ7XG5cbiAgaWYgKFJlc291cmNlLmhhc1NjaGVtZShwcm90b2NvbHMsIHVybCkpIHtcbiAgICByZXNvbHZlKFJlc291cmNlLnJlbW92ZVJlbGF0aXZlUGF0aCh1cmwpKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBcbiAgaWYgKCFtYW5pZmVzdCkge1xuICAgIHJlamVjdCgpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoUmVzb3VyY2UuaGFzU2NoZW1lKHByb3RvY29scywgbWFuaWZlc3QpICYmXG4gICAgICB1cmwuaW5kZXhPZihcIjovL1wiKSA9PT0gLTEpIHtcbiAgICBkaXJuYW1lID0gbWFuaWZlc3Quc3Vic3RyKDAsIG1hbmlmZXN0Lmxhc3RJbmRleE9mKFwiL1wiKSk7XG4gICAgcHJvdG9jb2xJZHggPSBkaXJuYW1lLmluZGV4T2YoXCI6Ly9cIik7XG4gICAgcGF0aElkeCA9IHByb3RvY29sSWR4ICsgMyArIGRpcm5hbWUuc3Vic3RyKHByb3RvY29sSWR4ICsgMykuaW5kZXhPZihcIi9cIik7XG4gICAgcGF0aCA9IGRpcm5hbWUuc3Vic3RyKHBhdGhJZHgpO1xuICAgIGJhc2UgPSBkaXJuYW1lLnN1YnN0cigwLCBwYXRoSWR4KTtcbiAgICBpZiAodXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG4gICAgICByZXNvbHZlKFJlc291cmNlLnJlbW92ZVJlbGF0aXZlUGF0aChiYXNlICsgdXJsKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc29sdmUoUmVzb3VyY2UucmVtb3ZlUmVsYXRpdmVQYXRoKGJhc2UgKyBwYXRoICsgXCIvXCIgKyB1cmwpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmVqZWN0KCk7XG59O1xuXG4vKipcbiAqIFJlc29sdmUgVVJMcyB3aGljaCBhcmUgc2VsZi1kZXNjcmliaW5nLlxuICogQG1ldGhvZCBudWxsUmVzb2x2ZXJcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gbWFuaWZlc3QgVGhlIE1hbmlmZXN0IFVSTC5cbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byByZXNvbHZlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBUaGUgcHJvbWlzZSB0byBjb21wbGV0ZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBUaGUgcHJvbWlzZSB0byByZWplY3QuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgVVJMIGNvdWxkIGJlIHJlc29sdmVkLlxuICovXG5SZXNvdXJjZS5wcm90b3R5cGUubnVsbFJlc29sdmVyID0gZnVuY3Rpb24gKG1hbmlmZXN0LCB1cmwsIHJlc29sdmUsIHJlamVjdCkge1xuICB2YXIgcHJvdG9jb2xzID0gW1wibWFuaWZlc3RcIl07XG4gIGlmIChSZXNvdXJjZS5oYXNTY2hlbWUocHJvdG9jb2xzLCB1cmwpKSB7XG4gICAgcmVzb2x2ZSh1cmwpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKHVybC5pbmRleE9mKCdkYXRhOicpID09PSAwKSB7XG4gICAgcmVzb2x2ZSh1cmwpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJlamVjdCgpO1xufTtcblxuLyoqXG4gKiBSZXRyaWV2ZSBtYW5pZmVzdCBjb250ZW50IGZyb20gYSBzZWxmLWRlc2NyaXB0aXZlIG1hbmlmZXN0IHVybC5cbiAqIFRoZXNlIHVybHMgYXJlIHVzZWQgdG8gcmVmZXJlbmNlIGEgbWFuaWZlc3Qgd2l0aG91dCByZXF1aXJpbmcgc3Vic2VxdWVudCxcbiAqIHBvdGVudGlhbGx5IG5vbi1DT1JTIHJlcXVlc3RzLlxuICogQG1ldGhvZCBtYW5pZmVzdFJldHJpZXZlclxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBtYW5pZmVzdCBUaGUgTWFuaWZlc3QgVVJMXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIFRoZSBwcm9taXNlIHRvIGNvbXBsZXRlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IFRoZSBwcm9taXNlIHRvIHJlamVjdC5cbiAqL1xuUmVzb3VyY2UucHJvdG90eXBlLm1hbmlmZXN0UmV0cmlldmVyID0gZnVuY3Rpb24gKG1hbmlmZXN0LCByZXNvbHZlLCByZWplY3QpIHtcbiAgdmFyIGRhdGE7XG4gIHRyeSB7XG4gICAgZGF0YSA9IG1hbmlmZXN0LnN1YnN0cigxMSk7XG4gICAgSlNPTi5wYXJzZShkYXRhKTtcbiAgICByZXNvbHZlKGRhdGEpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdGhpcy5kZWJ1Zy53YXJuKFwiSW52YWxpZCBtYW5pZmVzdCBVUkwgcmVmZXJlbmNlZDpcIiArIG1hbmlmZXN0KTtcbiAgICByZWplY3QoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXRyaWV2ZSByZXNvdXJjZSBjb250ZW50cyB1c2luZyBhbiBYSFIgcmVxdWVzdC5cbiAqIEBtZXRob2QgeGhyUmV0cmlldmVyXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgcmVzb3VyY2UgdG8gZmV0Y2guXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIFRoZSBwcm9taXNlIHRvIGNvbXBsZXRlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IFRoZSBwcm9taXNlIHRvIHJlamVjdC5cbiAqL1xuUmVzb3VyY2UucHJvdG90eXBlLnhoclJldHJpZXZlciA9IGZ1bmN0aW9uICh1cmwsIHJlc29sdmUsIHJlamVjdCkge1xuICB2YXIgcmVmID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gIHJlZi5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLCBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWYgKHJlZi5yZWFkeVN0YXRlID09PSA0ICYmIHJlZi5yZXNwb25zZVRleHQpIHtcbiAgICAgIHJlc29sdmUocmVmLnJlc3BvbnNlVGV4dCk7XG4gICAgfSBlbHNlIGlmIChyZWYucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgdGhpcy5kZWJ1Zy53YXJuKFwiRmFpbGVkIHRvIGxvYWQgZmlsZSBcIiArIHVybCArIFwiOiBcIiArIHJlZi5zdGF0dXMpO1xuICAgICAgcmVqZWN0KHJlZi5zdGF0dXMpO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMsIHJlc29sdmUsIHJlamVjdCksIGZhbHNlKTtcbiAgcmVmLm92ZXJyaWRlTWltZVR5cGUoXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICByZWYub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xuICByZWYuc2VuZCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZXNvdXJjZTtcbiIsIi8qZ2xvYmFscyBjcnlwdG8sIFdlYktpdEJsb2JCdWlsZGVyLCBCbG9iLCBVUkwgKi9cbi8qZ2xvYmFscyB3ZWJraXRVUkwsIFVpbnQ4QXJyYXksIFVpbnQxNkFycmF5LCBBcnJheUJ1ZmZlciAqL1xuLypqc2xpbnQgaW5kZW50OjIsd2hpdGU6dHJ1ZSxicm93c2VyOnRydWUsbm9kZTp0cnVlLHNsb3BweTp0cnVlICovXG5cbi8qKlxuICogVXRpbGl0eSBtZXRob2QgdXNlZCB3aXRoaW4gdGhlIGZyZWVkb20gTGlicmFyeS5cbiAqIEBjbGFzcyB1dGlsXG4gKiBAc3RhdGljXG4gKi9cbnZhciB1dGlsID0ge307XG5cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIGl0ZXJhdGluZyBvdmVyIGFuIGFycmF5IGJhY2t3YXJkcy4gSWYgdGhlIGZ1bmNcbiAqIHJldHVybnMgYSB0cnVlIHZhbHVlLCBpdCB3aWxsIGJyZWFrIG91dCBvZiB0aGUgbG9vcC5cbiAqIEBtZXRob2QgZWFjaFJldmVyc2VcbiAqIEBzdGF0aWNcbiAqL1xudXRpbC5lYWNoUmV2ZXJzZSA9IGZ1bmN0aW9uKGFyeSwgZnVuYykge1xuICBpZiAoYXJ5KSB7XG4gICAgdmFyIGk7XG4gICAgZm9yIChpID0gYXJ5Lmxlbmd0aCAtIDE7IGkgPiAtMTsgaSAtPSAxKSB7XG4gICAgICBpZiAoYXJ5W2ldICYmIGZ1bmMoYXJ5W2ldLCBpLCBhcnkpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBAbWV0aG9kIGhhc1Byb3BcbiAqIEBzdGF0aWNcbiAqL1xudXRpbC5oYXNQcm9wID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn07XG5cbi8qKlxuICogQ3ljbGVzIG92ZXIgcHJvcGVydGllcyBpbiBhbiBvYmplY3QgYW5kIGNhbGxzIGEgZnVuY3Rpb24gZm9yIGVhY2hcbiAqIHByb3BlcnR5IHZhbHVlLiBJZiB0aGUgZnVuY3Rpb24gcmV0dXJucyBhIHRydXRoeSB2YWx1ZSwgdGhlbiB0aGVcbiAqIGl0ZXJhdGlvbiBpcyBzdG9wcGVkLlxuICogQG1ldGhvZCBlYWNoUHJvcFxuICogQHN0YXRpY1xuICovXG51dGlsLmVhY2hQcm9wID0gZnVuY3Rpb24ob2JqLCBmdW5jKSB7XG4gIHZhciBwcm9wO1xuICBmb3IgKHByb3AgaW4gb2JqKSB7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgaWYgKGZ1bmMob2JqW3Byb3BdLCBwcm9wKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogU2ltcGxlIGZ1bmN0aW9uIHRvIG1peCBpbiBwcm9wZXJ0aWVzIGZyb20gc291cmNlIGludG8gdGFyZ2V0LFxuICogYnV0IG9ubHkgaWYgdGFyZ2V0IGRvZXMgbm90IGFscmVhZHkgaGF2ZSBhIHByb3BlcnR5IG9mIHRoZSBzYW1lIG5hbWUuXG4gKiBUaGlzIGlzIG5vdCByb2J1c3QgaW4gSUUgZm9yIHRyYW5zZmVycmluZyBtZXRob2RzIHRoYXQgbWF0Y2hcbiAqIE9iamVjdC5wcm90b3R5cGUgbmFtZXMsIGJ1dCB0aGUgdXNlcyBvZiBtaXhpbiBoZXJlIHNlZW0gdW5saWtlbHkgdG9cbiAqIHRyaWdnZXIgYSBwcm9ibGVtIHJlbGF0ZWQgdG8gdGhhdC5cbiAqIEBtZXRob2QgbWl4aW5cbiAqIEBzdGF0aWNcbiAqL1xudXRpbC5taXhpbiA9IGZ1bmN0aW9uKHRhcmdldCwgc291cmNlLCBmb3JjZSkge1xuICBpZiAoc291cmNlKSB7XG4gICAgdXRpbC5lYWNoUHJvcChzb3VyY2UsIGZ1bmN0aW9uICh2YWx1ZSwgcHJvcCkge1xuICAgICAgaWYgKGZvcmNlIHx8ICF1dGlsLmhhc1Byb3AodGFyZ2V0LCBwcm9wKSkge1xuICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuLyoqXG4gKiBHZXQgYSB1bmlxdWUgSUQuXG4gKiBAbWV0aG9kIGdldElkXG4gKiBAc3RhdGljXG4gKi9cbnV0aWwuZ2V0SWQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGd1aWQgPSAnZ3VpZCcsXG4gICAgICBkb21haW4gPSAxMixcbiAgICAgIGJ1ZmZlcjtcbiAgLy8gQ2hyb21lIC8gRmlyZWZveC5cbiAgaWYgKHR5cGVvZiBjcnlwdG8gPT09ICdvYmplY3QnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgICBidWZmZXIgPSBuZXcgVWludDhBcnJheShkb21haW4pO1xuICAgIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMoYnVmZmVyKTtcbiAgICB1dGlsLmVhY2hSZXZlcnNlKGJ1ZmZlciwgZnVuY3Rpb24obikge1xuICAgICAgZ3VpZCArPSAnLScgKyBuO1xuICAgIH0pO1xuICAvLyBOb2RlXG4gIH0gZWxzZSBpZiAodHlwZW9mIGNyeXB0byA9PT0gJ29iamVjdCcgJiYgY3J5cHRvLnJhbmRvbUJ5dGVzKSB7XG4gICAgYnVmZmVyID0gY3J5cHRvLnJhbmRvbUJ5dGVzKGRvbWFpbik7XG4gICAgdXRpbC5lYWNoUmV2ZXJzZShidWZmZXIsIGZ1bmN0aW9uKG4pIHtcbiAgICAgIGd1aWQgKz0gJy0nICsgbjtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoZG9tYWluID4gMCkge1xuICAgICAgZ3VpZCArPSAnLScgKyBNYXRoLmNlaWwoMjU1ICogTWF0aC5yYW5kb20oKSk7XG4gICAgICBkb21haW4gLT0gMTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ3VpZDtcbn07XG5cbi8qKlxuICogRW5jb2RlIGEgc3RyaW5nIGludG8gYSBiaW5hcnkgYXJyYXkgYnVmZmVyLCBieSB0cmVhdGluZyBlYWNoIGNoYXJhY3RlciBhcyBhXG4gKiB1dGYxNiBlbmNvZGVkIGNoYXJhY3RlciAtIHRoZSBuYXRpdmUgamF2YXNjcmlwdCBlbmNvZGluZy5cbiAqIEBtZXRob2Qgc3RyMmFiXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gZW5jb2RlLlxuICogQHJldHVybnMge0FycmF5QnVmZmVyfSBUaGUgZW5jb2RlZCBzdHJpbmcuXG4gKi9cbnV0aWwuc3RyMmFiID0gZnVuY3Rpb24oc3RyKSB7XG4gIHZhciBsZW5ndGggPSBzdHIubGVuZ3RoLFxuICAgICAgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGxlbmd0aCAqIDIpLCAvLyAyIGJ5dGVzIGZvciBlYWNoIGNoYXJcbiAgICAgIGJ1ZmZlclZpZXcgPSBuZXcgVWludDE2QXJyYXkoYnVmZmVyKSxcbiAgICAgIGk7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIGJ1ZmZlclZpZXdbaV0gPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgfVxuXG4gIHJldHVybiBidWZmZXI7XG59O1xuXG4vKipcbiAqIENvbnZlcnQgYW4gYXJyYXkgYnVmZmVyIGNvbnRhaW5pbmcgYW4gZW5jb2RlZCBzdHJpbmcgYmFjayBpbnRvIGEgc3RyaW5nLlxuICogQG1ldGhvZCBhYjJzdHJcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHRvIHVud3JhcC5cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBkZWNvZGVkIGJ1ZmZlci5cbiAqL1xudXRpbC5hYjJzdHIgPSBmdW5jdGlvbihidWZmZXIpIHtcbiAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgbmV3IFVpbnQxNkFycmF5KGJ1ZmZlcikpO1xufTtcblxuLyoqXG4gKiBBZGQgJ29uJyBhbmQgJ2VtaXQnIG1ldGhvZHMgdG8gYW4gb2JqZWN0LCB3aGljaCBhY3QgYXMgYSBsaWdodCB3ZWlnaHRcbiAqIGV2ZW50IGhhbmRsaW5nIHN0cnVjdHVyZS5cbiAqIEBjbGFzcyBoYW5kbGVFdmVudHNcbiAqIEBzdGF0aWNcbiAqL1xudXRpbC5oYW5kbGVFdmVudHMgPSBmdW5jdGlvbihvYmopIHtcbiAgdmFyIGV2ZW50U3RhdGUgPSB7XG4gICAgREVCVUdfQkFDS1JFRjogb2JqLFxuICAgIG11bHRpcGxlOiB7fSxcbiAgICBtYXliZW11bHRpcGxlOiBbXSxcbiAgICBzaW5nbGU6IHt9LFxuICAgIG1heWJlc2luZ2xlOiBbXVxuICB9LCBmaWx0ZXIsIHB1c2g7XG5cbiAgLyoqXG4gICAqIEZpbHRlciBhIGxpc3QgYmFzZWQgb24gYSBwcmVkaWNhdGUuIFRoZSBsaXN0IGlzIGZpbHRlcmVkIGluIHBsYWNlLCB3aXRoXG4gICAqIHNlbGVjdGVkIGl0ZW1zIHJlbW92ZWQgYW5kIHJldHVybmVkIGJ5IHRoZSBmdW5jdGlvbi5cbiAgICogQG1ldGhvZFxuICAgKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBsaXN0IHRvIGZpbHRlclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIG1ldGhvZCB0byBydW4gb24gZWFjaCBpdGVtLlxuICAgKiBAcmV0dXJucyB7QXJyYXl9IFNlbGVjdGVkIGl0ZW1zXG4gICAqL1xuICBmaWx0ZXIgPSBmdW5jdGlvbihsaXN0LCBwcmVkaWNhdGUpIHtcbiAgICB2YXIgcmV0ID0gW10sIGk7XG5cbiAgICBpZiAoIWxpc3QgfHwgIWxpc3QubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgZm9yIChpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGkgLT0gMSkge1xuICAgICAgaWYgKHByZWRpY2F0ZShsaXN0W2ldKSkge1xuICAgICAgICByZXQucHVzaChsaXN0LnNwbGljZShpLCAxKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEVucXVldWUgYSBoYW5kbGVyIGZvciBhIHNwZWNpZmljIHR5cGUuXG4gICAqIEBtZXRob2RcbiAgICogQHBhcmFtIHtTdHJpbmd9IHRvIFRoZSBxdWV1ZSAoJ3NpbmdsZScgb3IgJ211bHRpcGxlJykgdG8gcXVldWUgb24uXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIFRoZSB0eXBlIG9mIGV2ZW50IHRvIHdhaXQgZm9yLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIFRoZSBoYW5kbGVyIHRvIGVucXVldWUuXG4gICAqL1xuICBwdXNoID0gZnVuY3Rpb24odG8sIHR5cGUsIGhhbmRsZXIpIHtcbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXNbJ21heWJlJyArIHRvXS5wdXNoKFt0eXBlLCBoYW5kbGVyXSk7XG4gICAgfSBlbHNlIGlmICh0aGlzW3RvXVt0eXBlXSkge1xuICAgICAgdGhpc1t0b11bdHlwZV0ucHVzaChoYW5kbGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpc1t0b11bdHlwZV0gPSBbaGFuZGxlcl07XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIG1ldGhvZCB0byBiZSBleGVjdXRlZCB3aGVuIGFuIGV2ZW50IG9mIGEgc3BlY2lmaWMgdHlwZSBvY2N1cnMuXG4gICAqIEBtZXRob2Qgb25cbiAgICogQHBhcmFtIHtTdHJpbmd8RnVuY3Rpb259IHR5cGUgVGhlIHR5cGUgb2YgZXZlbnQgdG8gcmVnaXN0ZXIgYWdhaW5zdC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlciBUaGUgaGFuZGxlciB0byBydW4gd2hlbiB0aGUgZXZlbnQgb2NjdXJzLlxuICAgKi9cbiAgb2JqLm9uID0gcHVzaC5iaW5kKGV2ZW50U3RhdGUsICdtdWx0aXBsZScpO1xuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIG1ldGhvZCB0byBiZSBleGVjdXRlIHRoZSBuZXh0IHRpbWUgYW4gZXZlbnQgb2NjdXJzLlxuICAgKiBAbWV0aG9kIG9uY2VcbiAgICogQHBhcmFtIHtTdHJpbmd8RnVuY3Rpb259IHR5cGUgVGhlIHR5cGUgb2YgZXZlbnQgdG8gd2FpdCBmb3IuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXIgVGhlIGhhbmRsZXIgdG8gcnVuIHRoZSBuZXh0IHRpbWUgYSBtYXRjaGluZyBldmVudFxuICAgKiAgICAgaXMgcmFpc2VkLlxuICAgKi9cbiAgb2JqLm9uY2UgPSBwdXNoLmJpbmQoZXZlbnRTdGF0ZSwgJ3NpbmdsZScpO1xuXG4gIC8qKlxuICAgKiBFbWl0IGFuIGV2ZW50IG9uIHRoaXMgb2JqZWN0LlxuICAgKiBAbWV0aG9kIGVtaXRcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgVGhlIHR5cGUgb2YgZXZlbnQgdG8gcmFpc2UuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIFRoZSBwYXlsb2FkIG9mIHRoZSBldmVudC5cbiAgICovXG4gIG9iai5lbWl0ID0gZnVuY3Rpb24odHlwZSwgZGF0YSkge1xuICAgIHZhciBpLCBxdWV1ZTtcbiAgICAvLyBOb3RlIHRoYXQgcmVnaXN0ZXJlZCBoYW5kbGVycyBtYXkgc3RvcCBldmVudHMgb24gdGhlIG9iamVjdCwgYnkgY2FsbGluZ1xuICAgIC8vIHRoaXMub2ZmKCkuIEFzIHN1Y2gsIHRoZSBwcmVzZW5jZSBvZiB0aGVzZSBrZXlzIG11c3QgYmUgY2hlY2tlZCBvbiBlYWNoXG4gICAgLy8gaXRlcmF0aW9uIG9mIHRoZSByZWxldmFudCBsb29wcy5cbiAgICBmb3IgKGkgPSAwOyB0aGlzLm11bHRpcGxlW3R5cGVdICYmXG4gICAgICAgICBpIDwgdGhpcy5tdWx0aXBsZVt0eXBlXS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHRoaXMubXVsdGlwbGVbdHlwZV1baV0oZGF0YSkgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuc2luZ2xlW3R5cGVdKSB7XG4gICAgICBxdWV1ZSA9IHRoaXMuc2luZ2xlW3R5cGVdO1xuICAgICAgdGhpcy5zaW5nbGVbdHlwZV0gPSBbXTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBxdWV1ZVtpXShkYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMubWF5YmVtdWx0aXBsZS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHRoaXMubWF5YmVtdWx0aXBsZVtpXVswXSh0eXBlLCBkYXRhKSkge1xuICAgICAgICB0aGlzLm1heWJlbXVsdGlwbGVbaV1bMV0oZGF0YSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoaSA9IHRoaXMubWF5YmVzaW5nbGUubGVuZ3RoIC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcbiAgICAgIGlmICh0aGlzLm1heWJlc2luZ2xlW2ldWzBdKHR5cGUsIGRhdGEpKSB7XG4gICAgICAgIHF1ZXVlID0gdGhpcy5tYXliZXNpbmdsZS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIHF1ZXVlWzBdWzFdKGRhdGEpO1xuICAgICAgfVxuICAgIH1cbiAgfS5iaW5kKGV2ZW50U3RhdGUpO1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgYW4gZXZlbnQgaGFuZGxlclxuICAgKiBAbWV0aG9kIG9mZlxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBUaGUgdHlwZSBvZiBldmVudCB0byByZW1vdmUuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb24/fSBoYW5kbGVyIFRoZSBoYW5kbGVyIHRvIHJlbW92ZS5cbiAgICovXG4gIG9iai5vZmYgPSBmdW5jdGlvbih0eXBlLCBoYW5kbGVyKSB7XG4gICAgaWYgKCF0eXBlKSB7XG4gICAgICBkZWxldGUgdGhpcy5ERUJVR19CQUNLUkVGO1xuICAgICAgdGhpcy5tdWx0aXBsZSA9IHt9O1xuICAgICAgdGhpcy5tYXliZW11bHRpcGxlID0gW107XG4gICAgICB0aGlzLnNpbmdsZSA9IHt9O1xuICAgICAgdGhpcy5tYXliZXNpbmdsZSA9IFtdO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZmlsdGVyKHRoaXMubWF5YmVzaW5nbGUsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW1bMF0gPT09IHR5cGUgJiYgKCFoYW5kbGVyIHx8IGl0ZW1bMV0gPT09IGhhbmRsZXIpO1xuICAgICAgfSk7XG4gICAgICBmaWx0ZXIodGhpcy5tYXliZW11bHRpcGxlLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtWzBdID09PSB0eXBlICYmICghaGFuZGxlciB8fCBpdGVtWzFdID09PSBoYW5kbGVyKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICghaGFuZGxlcikge1xuICAgICAgZGVsZXRlIHRoaXMubXVsdGlwbGVbdHlwZV07XG4gICAgICBkZWxldGUgdGhpcy5zaW5nbGVbdHlwZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbHRlcih0aGlzLm11bHRpcGxlW3R5cGVdLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtID09PSBoYW5kbGVyO1xuICAgICAgfSk7XG4gICAgICBmaWx0ZXIodGhpcy5zaW5nbGVbdHlwZV0sIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0gPT09IGhhbmRsZXI7XG4gICAgICB9KTtcbiAgICB9XG4gIH0uYmluZChldmVudFN0YXRlKTtcbn07XG5cbi8qKlxuICogV2hlbiBydW4gd2l0aG91dCBhIHdpbmRvdywgb3Igc3BlY2lmaWNhbGx5IHJlcXVlc3RlZC5cbiAqIE5vdGU6IERlY2xhcmF0aW9uIGNhbiBiZSByZWRlZmluZWQgaW4gZm9yY2VNb2R1bGVDb250ZXh0IGJlbG93LlxuICogQG1ldGhvZCBpc01vZHVsZUNvbnRleHRcbiAqIEBmb3IgdXRpbFxuICogQHN0YXRpY1xuICovXG4vKiFAcHJlc2VydmUgU3RhcnRNb2R1bGVDb250ZXh0RGVjbGFyYXRpb24qL1xudXRpbC5pc01vZHVsZUNvbnRleHQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKTtcbn07XG5cbi8qKlxuICogR2V0IGEgQmxvYiBvYmplY3Qgb2YgYSBzdHJpbmcuXG4gKiBQb2x5ZmlsbHMgaW1wbGVtZW50YXRpb25zIHdoaWNoIGRvbid0IGhhdmUgYSBjdXJyZW50IEJsb2IgY29uc3RydWN0b3IsIGxpa2VcbiAqIHBoYW50b21qcy5cbiAqIEBtZXRob2QgZ2V0QmxvYlxuICogQHN0YXRpY1xuICovXG51dGlsLmdldEJsb2IgPSBmdW5jdGlvbihkYXRhLCB0eXBlKSB7XG4gIGlmICh0eXBlb2YgQmxvYiAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgV2ViS2l0QmxvYkJ1aWxkZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIGJ1aWxkZXIgPSBuZXcgV2ViS2l0QmxvYkJ1aWxkZXIoKTtcbiAgICBidWlsZGVyLmFwcGVuZChkYXRhKTtcbiAgICByZXR1cm4gYnVpbGRlci5nZXRCbG9iKHR5cGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgQmxvYihbZGF0YV0sIHt0eXBlOiB0eXBlfSk7XG4gIH1cbn07XG5cbi8qKlxuICogRmluZCBhbGwgc2NyaXB0cyBvbiB0aGUgZ2l2ZW4gcGFnZS5cbiAqIEBtZXRob2Qgc2NyaXB0c1xuICogQHN0YXRpY1xuICovXG51dGlsLnNjcmlwdHMgPSBmdW5jdGlvbihnbG9iYWwpIHtcbiAgcmV0dXJuIGdsb2JhbC5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0Jyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHV0aWw7XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG4vKmpzbGludCBub2RlOnRydWUqL1xuXG52YXIgcHJvdmlkZXJzID0gW1xuICByZXF1aXJlKCcuLi8uLi9wcm92aWRlcnMvY29yZS9jb3JlLnVucHJpdmlsZWdlZCcpLFxuICByZXF1aXJlKCcuLi8uLi9wcm92aWRlcnMvY29yZS9jb3JlLmVjaG8nKSxcbiAgcmVxdWlyZSgnLi4vLi4vcHJvdmlkZXJzL2NvcmUvY29yZS5jb25zb2xlJyksXG4gIHJlcXVpcmUoJy4uLy4uL3Byb3ZpZGVycy9jb3JlL2NvcmUucGVlcmNvbm5lY3Rpb24nKSxcbiAgcmVxdWlyZSgnLi4vLi4vcHJvdmlkZXJzL2NvcmUvY29yZS5ydGNwZWVyY29ubmVjdGlvbicpLFxuICByZXF1aXJlKCcuLi8uLi9wcm92aWRlcnMvY29yZS9jb3JlLnJ0Y2RhdGFjaGFubmVsJyksXG4gIHJlcXVpcmUoJy4uLy4uL3Byb3ZpZGVycy9jb3JlL2NvcmUuc3RvcmFnZScpLFxuICByZXF1aXJlKCcuLi8uLi9wcm92aWRlcnMvY29yZS9jb3JlLnZpZXcnKSxcbiAgcmVxdWlyZSgnLi4vLi4vcHJvdmlkZXJzL2NvcmUvY29yZS5vYXV0aCcpLFxuICByZXF1aXJlKCcuLi8uLi9wcm92aWRlcnMvY29yZS9jb3JlLndlYnNvY2tldCcpLFxuICByZXF1aXJlKCcuLi8uLi9wcm92aWRlcnMvY29yZS9jb3JlLnhocicpXG5dO1xuXG5mdW5jdGlvbiBnZXRGcmVlZG9tU2NyaXB0KCkge1xuICAndXNlIHN0cmljdCc7XG4gIHZhciBzY3JpcHQ7XG4gIGlmICh3aW5kb3cuZG9jdW1lbnQuY3VycmVudFNjcmlwdCkge1xuICAgIC8vIE5ldyBicm93c2VyIEFQSVxuICAgIHNjcmlwdCA9IHdpbmRvdy5kb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcbiAgfSBlbHNlIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImNvbXBsZXRlXCIgJiZcbiAgICAgICAgICAgICBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImxvYWRlZFwiKSB7XG4gICAgLy8gSW5jbHVkZWQgaW4gSFRNTCBvciB0aHJvdWdoIGRvY3VtZW50LndyaXRlXG4gICAgc2NyaXB0ID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKTtcbiAgICBzY3JpcHQgPSBzY3JpcHRbc2NyaXB0Lmxlbmd0aCAtIDFdLnNyYztcbiAgfSBlbHNlIHtcbiAgICAvLyBMb2FkZWQgdGhyb3VnaCBkb20gbWFuaXB1bGF0aW9uIG9yIGFzeW5jLlxuICAgIHNjcmlwdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcInNjcmlwdFtzcmMqPSdmcmVlZG9tLmpzJ10sc2NyaXB0W3NyYyo9J2ZyZWVkb20tJ11cIlxuICAgICk7XG4gICAgaWYgKHNjcmlwdC5sZW5ndGggIT09IDEpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJDb3VsZCBub3QgZGV0ZXJtaW5lIGZyZWVkb20uanMgc2NyaXB0IHRhZy5cIik7XG4gICAgfVxuICAgIHNjcmlwdCA9IHNjcmlwdFswXS5zcmM7XG4gIH1cbiAgcmV0dXJuIHNjcmlwdDtcbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHdpbmRvdy5mcmVlZG9tID0gcmVxdWlyZSgnLi4vZW50cnknKS5iaW5kKHt9LCB7XG4gICAgbG9jYXRpb246IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgIHBvcnRUeXBlOiByZXF1aXJlKCcuLi9saW5rL3dvcmtlcicpLFxuICAgIHNvdXJjZTogZ2V0RnJlZWRvbVNjcmlwdCgpLFxuICAgIHByb3ZpZGVyczogcHJvdmlkZXJzLFxuICAgIG9hdXRoOiBbXG4gICAgICByZXF1aXJlKCcuLi8uLi9wcm92aWRlcnMvb2F1dGgvb2F1dGgubG9jYWxwYWdlYXV0aCcpLFxuICAgICAgcmVxdWlyZSgnLi4vLi4vcHJvdmlkZXJzL29hdXRoL29hdXRoLnJlbW90ZXBhZ2VhdXRoJylcbiAgICBdXG4gIH0pO1xufSBlbHNlIHtcbiAgcmVxdWlyZSgnLi4vZW50cnknKSh7XG4gICAgaXNNb2R1bGU6IHRydWUsXG4gICAgcG9ydFR5cGU6IHJlcXVpcmUoJy4uL2xpbmsvd29ya2VyJyksXG4gICAgcHJvdmlkZXJzOiBwcm92aWRlcnMsXG4gICAgZ2xvYmFsOiBnbG9iYWxcbiAgfSk7XG59XG5cbn0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KSJdfQ==