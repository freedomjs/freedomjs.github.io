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
 * @version 0.6.35
 */
 
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = [{"name":"console","api":{"log":{"type":"method","value":["string","string"]},"debug":{"type":"method","value":["string","string"]},"info":{"type":"method","value":["string","string"]},"warn":{"type":"method","value":["string","string"]},"error":{"type":"method","value":["string","string"]}}},{"name":"core.battery","api":{"isCharging":{"type":"method","value":[],"ret":"boolean"},"getChargingTime":{"type":"method","value":[],"ret":"number"},"getDischargingTime":{"type":"method","value":[],"ret":"number"},"getLevel":{"type":"method","value":[],"ret":"number"},"chargingchange":{"type":"event","value":{"charging":"boolean"}},"chargingtimechange":{"type":"event","value":{"chargingTime":"number"}},"dischargingtimechange":{"type":"event","value":{"dischargingTime":"number"}},"levelchange":{"type":"event","value":{"level":"number"}}}},{"name":"core.console","api":{"log":{"type":"method","value":["string","string"]},"debug":{"type":"method","value":["string","string"]},"info":{"type":"method","value":["string","string"]},"warn":{"type":"method","value":["string","string"]},"error":{"type":"method","value":["string","string"]}}},{"name":"core.crypto","api":{"getRandomBytes":{"type":"method","value":["number"],"ret":"buffer"}}},{"name":"core.echo","api":{"setup":{"type":"method","value":["string"]},"send":{"type":"method","value":["string"]},"message":{"type":"event","value":"string"}}},{"name":"core","api":{"createChannel":{"type":"method","value":[],"ret":{"channel":"proxy","identifier":"string"}},"bindChannel":{"type":"method","value":["string"],"ret":"proxy"},"getId":{"type":"method","value":[],"ret":["array","string"]},"getLogger":{"type":"method","value":["string"],"ret":"proxy"},"require":{"type":"method","value":["string","string"],"ret":"proxy"}}},{"name":"core.oauth","api":{"initiateOAuth":{"type":"method","value":[["array","string"]],"ret":{"redirect":"string","state":"string"},"err":{"errcode":"string","message":"string"}},"launchAuthFlow":{"type":"method","value":["string",{"redirect":"string","state":"string"},"boolean"],"ret":"string","err":{"errcode":"string","message":"string"}}}},{"name":"core.online","api":{"isOnline":{"type":"method","value":[],"ret":"boolean"},"online":{"type":"event","value":{}},"offline":{"type":"event","value":{}}}},{"name":"core.peerconnection","api":{"setup":{"type":"method","value":["string","string",["array","string"],"boolean"]},"send":{"type":"method","value":[{"channelLabel":"string","text":"string","binary":"blob","buffer":"buffer"}]},"onReceived":{"type":"event","value":{"channelLabel":"string","text":"string","binary":"blob","buffer":"buffer"}},"openDataChannel":{"type":"method","value":["string"]},"closeDataChannel":{"type":"method","value":["string"]},"onOpenDataChannel":{"type":"event","value":{"channelId":"string"}},"onCloseDataChannel":{"type":"event","value":{"channelId":"string"}},"getBufferedAmount":{"type":"method","value":["string"],"ret":"number"},"getInfo":{"type":"method","value":[],"ret":"string"},"createOffer":{"type":"method","value":[{"offerToReceiveVideo":"number","offerToReceiveAudio":"number","voiceActivityDetection":"boolean","iceRestart":"boolean"}],"ret":{"type":"string","sdp":"string"}},"close":{"type":"method","value":[]},"onClose":{"type":"event","value":{}}}},{"name":"core.rtcdatachannel","api":{"constructor":{"value":["string"]},"getLabel":{"type":"method","value":[],"ret":"string"},"getOrdered":{"type":"method","value":[],"ret":"boolean"},"getMaxPacketLifeTime":{"type":"method","value":[],"ret":"number"},"getMaxRetransmits":{"type":"method","value":[],"ret":"number"},"getProtocol":{"type":"method","value":[],"ret":"string"},"getNegotiated":{"type":"method","value":[],"ret":"boolean"},"getId":{"type":"method","value":[],"ret":"number"},"getReadyState":{"type":"method","value":[],"ret":"string"},"getBufferedAmount":{"type":"method","value":[],"ret":"number"},"onopen":{"type":"event","value":[]},"onerror":{"type":"event","value":[]},"onclose":{"type":"event","value":[]},"close":{"type":"method","value":[]},"onmessage":{"type":"event","value":{"text":"string","buffer":"buffer"}},"getBinaryType":{"type":"method","value":[],"ret":"string"},"setBinaryType":{"type":"method","value":["string"]},"send":{"type":"method","value":["string"]},"sendBuffer":{"type":"method","value":["buffer"]}}},{"name":"core.rtcpeerconnection","api":{"constructor":{"value":[{"iceServers":["array",{"urls":["array","string"],"username":"string","credential":"string"}],"iceTransports":"string","peerIdentity":"string"}]},"createOffer":{"type":"method","value":[{"offerToReceiveAudio":"number","offerToReceiveVideo":"number","iceRestart":"boolean","voiceActivityDetection":"boolean"}],"ret":{"type":"string","sdp":"string"}},"createAnswer":{"type":"method","value":[],"ret":{"type":"string","sdp":"string"}},"setLocalDescription":{"type":"method","value":[{"type":"string","sdp":"string"}]},"getLocalDescription":{"type":"method","value":[],"ret":{"type":"string","sdp":"string"}},"setRemoteDescription":{"type":"method","value":[{"type":"string","sdp":"string"}],"ret":{}},"getRemoteDescription":{"type":"method","value":[],"ret":{"type":"string","sdp":"string"}},"getSignalingState":{"type":"method","value":[],"ret":"string"},"updateIce":{"type":"method","value":[{"iceServers":["array",{"urls":["array","string"],"username":"string","credential":"string"}],"iceTransports":"string","peerIdentity":"string"}],"ret":{}},"addIceCandidate":{"type":"method","value":[{"candidate":"string","sdpMid":"string","sdpMLineIndex":"number"}],"ret":{}},"getIceGatheringState":{"type":"method","value":[],"ret":"string"},"getIceConnectionState":{"type":"method","value":[],"ret":"string"},"getConfiguration":{"type":"method","value":[],"ret":{"iceServers":["array",{"urls":["array","string"],"username":"string","credential":"string"}],"iceTransports":"string","peerIdentity":"string"}},"getLocalStreams":{"type":"method","value":[],"ret":["array","string"]},"getRemoteStreams":{"type":"method","value":[],"ret":["array","string"]},"getStreamById":{"type":"method","value":["string"],"ret":"string"},"addStream":{"type":"method","value":["string"],"ret":{}},"removeStream":{"type":"method","value":["string"],"ret":{}},"close":{"type":"method","value":[],"ret":{}},"createDataChannel":{"type":"method","value":["string",{"ordered":"boolean","maxPacketLifeTime":"number","maxRetransmits":"number","protocol":"string","negotiated":"boolean","id":"number"}],"ret":"string"},"ondatachannel":{"type":"event","value":{"channel":"string"}},"getStats":{"type":"method","value":["string"],"ret":"object"},"onnegotiationneeded":{"type":"event","value":[]},"onicecandidate":{"type":"event","value":{"candidate":{"candidate":"string","sdpMid":"string","sdpMLineIndex":"number"}}},"onsignalingstatechange":{"type":"event","value":[]},"onaddstream":{"type":"event","value":{"stream":"number"}},"onremovestream":{"type":"event","value":{"stream":"number"}},"oniceconnectionstatechange":{"type":"event","value":[]}}},{"name":"core.storage","api":{"keys":{"type":"method","value":[],"ret":["array","string"]},"get":{"type":"method","value":["string"],"ret":"string"},"set":{"type":"method","value":["string","string"],"ret":"string"},"remove":{"type":"method","value":["string"],"ret":"string"},"clear":{"type":"method","value":[]}}},{"name":"core.tcpsocket","api":{"constructor":{"value":["number"]},"getInfo":{"type":"method","value":[],"ret":{"connected":"boolean","localAddress":"string","localPort":"number","peerAddress":"string","peerPort":"number"}},"ERRCODE":{"type":"constant","value":{"SUCCESS":"Success!","UNKNOWN":"Unknown error","ALREADY_CONNECTED":"Socket already connected","INVALID_ARGUMENT":"Invalid argument","TIMED_OUT":"Timed out","NOT_CONNECTED":"Socket not connected","NETWORK_CHANGED":"Network changed","CONNECTION_CLOSED":"Connection closed gracefully","CONNECTION_RESET":"Connection reset","CONNECTION_REFUSED":"Connection refused","CONNECTION_FAILED":"Connection failed","NAME_NOT_RESOLVED":"DNS lookup failed","INTERNET_DISCONNECTED":"Cannot reach any network","ADDRESS_INVALID":"Invalid address","ADDRESS_UNREACHABLE":"No route to host","HOST_UNREACHABLE":"SOCKS proxy server could not reach host"}},"close":{"type":"method","value":[],"err":{"errcode":"string","message":"string"}},"onDisconnect":{"type":"event","value":{"errcode":"string","message":"string"}},"connect":{"type":"method","value":["string","number"],"err":{"errcode":"string","message":"string"}},"secure":{"type":"method","value":[],"err":{"errcode":"string","message":"string"}},"pause":{"type":"method","value":[],"err":{"errcode":"string","message":"string"}},"resume":{"type":"method","value":[],"err":{"errcode":"string","message":"string"}},"prepareSecure":{"type":"method","value":[],"err":{"errcode":"string","message":"string"}},"write":{"type":"method","value":["buffer"],"err":{"errcode":"string","message":"string"}},"onData":{"type":"event","value":{"data":"buffer"}},"listen":{"type":"method","value":["string","number"],"err":{"errcode":"string","message":"string"}},"onConnection":{"type":"event","value":{"socket":"number","host":"string","port":"number"}}}},{"name":"core.udpsocket","api":{"ERRCODE":{"type":"constant","value":{"SUCCESS":"Success!","UNKNOWN":"Unknown error","ALREADY_BOUND":"Socket already bound","ALREADY_CLOSED":"Socket already closed","INVALID_ARGUMENT":"Invalid argument","NETWORK_CHANGED":"Network changed","SEND_FAILED":"Send failed"}},"bind":{"type":"method","value":["string","number"],"ret":[],"err":{"errcode":"string","message":"string"}},"getInfo":{"type":"method","value":[],"ret":{"localAddress":"string","localPort":"number"}},"sendTo":{"type":"method","value":["buffer","string","number"],"ret":"number","err":{"errcode":"string","message":"string"}},"destroy":{"type":"method","value":[]},"onData":{"type":"event","value":{"resultCode":"number","address":"string","port":"number","data":"buffer"}}}},{"name":"core.view","api":{"show":{"type":"method","value":["string"]},"isSecure":{"type":"method","value":[],"ret":"boolean"},"close":{"type":"method","value":[]},"postMessage":{"type":"method","value":["object"]},"message":{"type":"event","value":"object"},"onClose":{"type":"event","value":[]}}},{"name":"core.websocket","api":{"constructor":{"value":["string",["array","string"]]},"send":{"type":"method","value":[{"text":"string","binary":"blob","buffer":"buffer"}],"err":{"errcode":"string","message":"string"}},"getReadyState":{"type":"method","value":[],"ret":"number"},"getBufferedAmount":{"type":"method","value":["string"],"ret":"number"},"close":{"type":"method","value":["number","string"],"err":{"errcode":"string","message":"string"}},"onMessage":{"type":"event","value":{"text":"string","binary":"blob","buffer":"buffer"}},"onOpen":{"type":"event","value":[]},"onError":{"type":"event","value":{"errcode":"string","message":"string"}},"onClose":{"type":"event","value":{"code":"number","reason":"string","wasClean":"boolean"}}}},{"name":"core.xhr","api":{"open":{"type":"method","value":["string","string","boolean","string","string"],"err":{"errcode":"string","message":"string"}},"send":{"type":"method","value":[{"string":"string","buffer":"buffer","blob":"blob"}]},"abort":{"type":"method","value":[]},"getResponseHeader":{"type":"method","value":["string"],"ret":"string"},"getAllResponseHeaders":{"type":"method","value":[],"ret":"string"},"setRequestHeader":{"type":"method","value":["string","string"]},"overrideMimeType":{"type":"method","value":["string"]},"getReadyState":{"type":"method","value":[],"ret":"number"},"getResponse":{"type":"method","value":[],"ret":{"string":"string","buffer":"buffer","object":"object"}},"getResponseText":{"type":"method","value":[],"ret":"string"},"getResponseURL":{"type":"method","value":[],"ret":"string"},"getResponseType":{"type":"method","value":[],"ret":"string"},"setResponseType":{"type":"method","value":["string"]},"getStatus":{"type":"method","value":[],"ret":"number"},"getStatusText":{"type":"method","value":[],"ret":"string"},"getTimeout":{"type":"method","value":[],"ret":"number"},"setTimeout":{"type":"method","value":["number"]},"getWithCredentials":{"type":"method","value":[],"ret":"boolean"},"setWithCredentials":{"type":"method","value":["boolean"]},"onloadstart":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onprogress":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onabort":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onerror":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onload":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"ontimeout":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onloadend":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onreadystatechange":{"type":"event","value":{}},"onuploadloadstart":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onuploadprogress":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onuploadabort":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onuploaderror":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onuploadload":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onuploadtimeout":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onuploadloadend":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onuploadreadystatechange":{"type":"event","value":{}}}},{"name":"social","api":{"ERRCODE":{"type":"constant","value":{"SUCCESS":"Success!","UNKNOWN":"Unknown error","OFFLINE":"User is currently offline","MALFORMEDPARAMETERS":"Parameters are malformed","LOGIN_BADCREDENTIALS":"Error authenticating with server","LOGIN_FAILEDCONNECTION":"Error connecting to server","LOGIN_ALREADYONLINE":"User is already logged in","LOGIN_OAUTHERROR":"OAuth Error","SEND_INVALIDDESTINATION":"Message sent to an invalid destination"}},"STATUS":{"type":"constant","value":{"OFFLINE":"OFFLINE","ONLINE":"ONLINE","ONLINE_WITH_OTHER_APP":"ONLINE_WITH_OTHER_APP"}},"login":{"type":"method","value":[{"agent":"string","version":"string","url":"string","interactive":"boolean","rememberLogin":"boolean"}],"ret":{"userId":"string","clientId":"string","status":"string","lastUpdated":"number","lastSeen":"number"},"err":{"errcode":"string","message":"string"}},"clearCachedCredentials":{"type":"method","value":[]},"getClients":{"type":"method","value":[],"ret":"object","err":{"errcode":"string","message":"string"}},"getUsers":{"type":"method","value":[],"ret":"object","err":{"errcode":"string","message":"string"}},"sendMessage":{"type":"method","value":["string","string"],"err":{"errcode":"string","message":"string"}},"logout":{"type":"method","value":[],"err":{"errcode":"string","message":"string"}},"onMessage":{"type":"event","value":{"from":{"userId":"string","clientId":"string","status":"string","lastUpdated":"number","lastSeen":"number"},"message":"string"}},"onUserProfile":{"type":"event","value":{"userId":"string","lastUpdated":"number","name":"string","url":"string","imageData":"string"}},"onClientState":{"type":"event","value":{"userId":"string","clientId":"string","status":"string","lastUpdated":"number","lastSeen":"number"}}}},{"name":"storage","api":{"scope":{"type":"constant","value":{"SESSION":0,"DEVICE_LOCAL":1,"USER_LOCAL":2,"SHARED":3}},"ERRCODE":{"type":"constant","value":{"SUCCESS":"Success!","UNKNOWN":"Unknown error","OFFLINE":"Database not reachable","MALFORMEDPARAMETERS":"Parameters are malformed"}},"constructor":{"value":[{"scope":"number"}]},"keys":{"type":"method","value":[],"ret":["array","string"],"err":{"errcode":"string","message":"string"}},"get":{"type":"method","value":["string"],"ret":"string","err":{"errcode":"string","message":"string"}},"set":{"type":"method","value":["string","string"],"ret":"string","err":{"errcode":"string","message":"string"}},"remove":{"type":"method","value":["string"],"ret":"string","err":{"errcode":"string","message":"string"}},"clear":{"type":"method","value":[],"ret":[],"err":{"errcode":"string","message":"string"}}}},{"name":"storebuffer","api":{"scope":{"type":"constant","value":{"SESSION":0,"DEVICE_LOCAL":1,"USER_LOCAL":2,"SHARED":3}},"ERRCODE":{"type":"constant","value":{"SUCCESS":"Success!","UNKNOWN":"Unknown error","OFFLINE":"Database not reachable","MALFORMEDPARAMETERS":"Parameters are malformed"}},"constructor":{"value":[{"scope":"number"}]},"keys":{"type":"method","value":[],"ret":["array","string"],"err":{"errcode":"string","message":"string"}},"get":{"type":"method","value":["string"],"ret":"buffer","err":{"errcode":"string","message":"string"}},"set":{"type":"method","value":["string","buffer"],"ret":"buffer","err":{"errcode":"string","message":"string"}},"remove":{"type":"method","value":["string"],"ret":"buffer","err":{"errcode":"string","message":"string"}},"clear":{"type":"method","value":[],"ret":[],"err":{"errcode":"string","message":"string"}}}},{"name":"transport","api":{"ERRCODE":{"type":"constant","value":{"SUCCESS":"Success!","UNKNOWN":"Unknown error","OFFLINE":"Not reachable","MALFORMEDPARAMETERS":"Parameters are malformed"}},"setup":{"type":"method","value":["string","proxy"],"ret":[],"err":{"errcode":"string","message":"string"}},"send":{"type":"method","value":["string","buffer"],"ret":[],"err":{"errcode":"string","message":"string"}},"close":{"type":"method","value":[],"ret":[],"err":{"errcode":"string","message":"string"}},"onData":{"type":"event","value":{"tag":"string","data":"buffer"}},"onClose":{"type":"event","value":[]}}}];

},{}],2:[function(require,module,exports){
(function (process,global){
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   3.3.1
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.ES6Promise = factory());
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  return typeof x === 'function' || typeof x === 'object' && x !== null;
}

function isFunction(x) {
  return typeof x === 'function';
}

var _isArray = undefined;
if (!Array.isArray) {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
} else {
  _isArray = Array.isArray;
}

var isArray = _isArray;

var len = 0;
var vertxNext = undefined;
var customSchedulerFn = undefined;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  return function () {
    vertxNext(flush);
  };
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var r = require;
    var vertx = r('vertx');
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = undefined;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && typeof require === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var _arguments = arguments;

  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;

  if (_state) {
    (function () {
      var callback = _arguments[_state - 1];
      asap(function () {
        return invokeCallback(_state, child, callback, parent._result);
      });
    })();
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  _resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(16);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

var GET_THEN_ERROR = new ErrorObject();

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function getThen(promise) {
  try {
    return promise.then;
  } catch (error) {
    GET_THEN_ERROR.error = error;
    return GET_THEN_ERROR;
  }
}

function tryThen(then, value, fulfillmentHandler, rejectionHandler) {
  try {
    then.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        _resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      _reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      _reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    _reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return _resolve(promise, value);
    }, function (reason) {
      return _reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$) {
  if (maybeThenable.constructor === promise.constructor && then$$ === then && maybeThenable.constructor.resolve === resolve) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$ === GET_THEN_ERROR) {
      _reject(promise, GET_THEN_ERROR.error);
    } else if (then$$ === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$)) {
      handleForeignThenable(promise, maybeThenable, then$$);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function _resolve(promise, value) {
  if (promise === value) {
    _reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    handleMaybeThenable(promise, value, getThen(value));
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function _reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;

  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = undefined,
      callback = undefined,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function ErrorObject() {
  this.error = null;
}

var TRY_CATCH_ERROR = new ErrorObject();

function tryCatch(callback, detail) {
  try {
    return callback(detail);
  } catch (e) {
    TRY_CATCH_ERROR.error = e;
    return TRY_CATCH_ERROR;
  }
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = undefined,
      error = undefined,
      succeeded = undefined,
      failed = undefined;

  if (hasCallback) {
    value = tryCatch(callback, detail);

    if (value === TRY_CATCH_ERROR) {
      failed = true;
      error = value.error;
      value = null;
    } else {
      succeeded = true;
    }

    if (promise === value) {
      _reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
      _resolve(promise, value);
    } else if (failed) {
      _reject(promise, error);
    } else if (settled === FULFILLED) {
      fulfill(promise, value);
    } else if (settled === REJECTED) {
      _reject(promise, value);
    }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      _resolve(promise, value);
    }, function rejectPromise(reason) {
      _reject(promise, reason);
    });
  } catch (e) {
    _reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function Enumerator(Constructor, input) {
  this._instanceConstructor = Constructor;
  this.promise = new Constructor(noop);

  if (!this.promise[PROMISE_ID]) {
    makePromise(this.promise);
  }

  if (isArray(input)) {
    this._input = input;
    this.length = input.length;
    this._remaining = input.length;

    this._result = new Array(this.length);

    if (this.length === 0) {
      fulfill(this.promise, this._result);
    } else {
      this.length = this.length || 0;
      this._enumerate();
      if (this._remaining === 0) {
        fulfill(this.promise, this._result);
      }
    }
  } else {
    _reject(this.promise, validationError());
  }
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
};

Enumerator.prototype._enumerate = function () {
  var length = this.length;
  var _input = this._input;

  for (var i = 0; this._state === PENDING && i < length; i++) {
    this._eachEntry(_input[i], i);
  }
};

Enumerator.prototype._eachEntry = function (entry, i) {
  var c = this._instanceConstructor;
  var resolve$$ = c.resolve;

  if (resolve$$ === resolve) {
    var _then = getThen(entry);

    if (_then === then && entry._state !== PENDING) {
      this._settledAt(entry._state, i, entry._result);
    } else if (typeof _then !== 'function') {
      this._remaining--;
      this._result[i] = entry;
    } else if (c === Promise) {
      var promise = new c(noop);
      handleMaybeThenable(promise, entry, _then);
      this._willSettleAt(promise, i);
    } else {
      this._willSettleAt(new c(function (resolve$$) {
        return resolve$$(entry);
      }), i);
    }
  } else {
    this._willSettleAt(resolve$$(entry), i);
  }
};

Enumerator.prototype._settledAt = function (state, i, value) {
  var promise = this.promise;

  if (promise._state === PENDING) {
    this._remaining--;

    if (state === REJECTED) {
      _reject(promise, value);
    } else {
      this._result[i] = value;
    }
  }

  if (this._remaining === 0) {
    fulfill(promise, this._result);
  }
};

Enumerator.prototype._willSettleAt = function (promise, i) {
  var enumerator = this;

  subscribe(promise, undefined, function (value) {
    return enumerator._settledAt(FULFILLED, i, value);
  }, function (reason) {
    return enumerator._settledAt(REJECTED, i, reason);
  });
};

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
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
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  _reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
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
  let promise = new Promise(function(resolve, reject) {
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
      let xhr = new XMLHttpRequest();

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
function Promise(resolver) {
  this[PROMISE_ID] = nextId();
  this._result = this._state = undefined;
  this._subscribers = [];

  if (noop !== resolver) {
    typeof resolver !== 'function' && needsResolver();
    this instanceof Promise ? initializePromise(this, resolver) : needsNew();
  }
}

Promise.all = all;
Promise.race = race;
Promise.resolve = resolve;
Promise.reject = reject;
Promise._setScheduler = setScheduler;
Promise._setAsap = setAsap;
Promise._asap = asap;

Promise.prototype = {
  constructor: Promise,

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
    let result;
  
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
    let author, books;
  
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
  then: then,

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
  'catch': function _catch(onRejection) {
    return this.then(null, onRejection);
  }
};

function polyfill() {
    var local = undefined;

    if (typeof global !== 'undefined') {
        local = global;
    } else if (typeof self !== 'undefined') {
        local = self;
    } else {
        try {
            local = Function('return this')();
        } catch (e) {
            throw new Error('polyfill failed because global object is unavailable in this environment');
        }
    }

    var P = local.Promise;

    if (P) {
        var promiseToString = null;
        try {
            promiseToString = Object.prototype.toString.call(P.resolve());
        } catch (e) {
            // silently ignored
        }

        if (promiseToString === '[object Promise]' && !P.cast) {
            return;
        }
    }

    local.Promise = Promise;
}

polyfill();
// Strange compat..
Promise.polyfill = polyfill;
Promise.Promise = Promise;

return Promise;

})));

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"_process":3}],3:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

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

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

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

var fixFirefoxStatsResponse = function(response) {
  // Giving the response directly to the callback gives an object w/o interface
  // https://developer.mozilla.org/en-US/docs/Mozilla/WebIDL_bindings#ChromeOnly
  var standardReport = {};
  response.forEach(function (report) {
    standardReport[report.id] = report;
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

    // Firefox stats response is only visible 'ChromeOnly' so process it here
    var boundGetStats = pc.getStats.bind(pc);
    pc.getStats = function(selector, successCallback, failureCallback) {
      var successCallbackWrapper = function(firefoxStatsResponse) {
        successCallback(fixFirefoxStatsResponse(firefoxStatsResponse));
      };
      boundGetStats(selector, successCallbackWrapper, failureCallback);
    };

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
/*globals navigator*/
/*jshint node:true*/
var PromiseCompat = require('es6-promise').Promise;
var nav = false;
if (typeof navigator !== 'undefined') {
  nav = navigator;
}

var BatteryProvider = function(cap, dispatchEvent) {
  "use strict";
  this._batteryPromise = nav && nav.getBattery ? nav.getBattery() : null;

  if (this._batteryPromise) {
    this._batteryPromise.then(function(battery) {
      this._setupListeners(battery, dispatchEvent);
    }.bind(this));
  } else {
    console.warn("Trying to use core.battery API without client support");
  }
};

BatteryProvider.prototype.isCharging = function() {
  "use strict";
  if (!this._batteryPromise) {
    return PromiseCompat.resolve(true);  // Charging / plugged in
  }
  return this._batteryPromise.then(function(battery) {
    return battery.charging;
  });
};

BatteryProvider.prototype.getChargingTime = function() {
  "use strict";
  if (!this._batteryPromise) {
    return PromiseCompat.resolve(0);  // Fully charged
  }
  return this._batteryPromise.then(function(battery) {
    return battery.chargingTime;
  });
};

BatteryProvider.prototype.getDischargingTime = function() {
  "use strict";
  if (!this._batteryPromise) {
    return PromiseCompat.resolve(Infinity);  // Currently charging
  }
  return this._batteryPromise.then(function(battery) {
    return battery.dischargingTime;
  });
};

BatteryProvider.prototype.getLevel = function() {
  "use strict";
  if (!this._batteryPromise) {
    return PromiseCompat.resolve(1.0);  // Fully charged
  }
  return this._batteryPromise.then(function(battery) {
    return battery.level;
  });
};

BatteryProvider.prototype._setupListeners = function(battery, dispatchEvent) {
  "use strict";
  var events = [
    "chargingchange",
    "chargingtimechange",
    "dischargingtimechange",
    "levelchange"
  ];
  events.forEach(function (eventName) {
    battery.addEventListener(eventName, dispatchEvent.bind(this, eventName));
  });
};

exports.name = "core.battery";
exports.provider = BatteryProvider;
exports.style = "providePromises";
exports.flags = { provider: true };
exports.setNavigator = function(impl) {
  "use strict";
  nav = impl;
};

},{"es6-promise":2}],6:[function(require,module,exports){
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
  
  if (source) {
    if (typeof process !== 'undefined' &&
        {}.toString.call(process) === '[object process]') {
      // Node.
      arr.unshift('\x1B[39m');
      arr.unshift('\x1B[31m' + source);
    } else if (this.console.maxLogLevel) {
      // Firefox in JSM context:
      //   http://mxr.mozilla.org/mozilla-release/source/toolkit/devtools/Console.jsm
      if (!this.console.freedomDump) {
        this.console.freedomDump = this.console.dump;
        this.console.dump = function() {};
      }
      this.console.freedomDump(source + ' ' + severity[0].toUpperCase() + ' ' +
          arr.join(' ') + '\n');
    } else {
      arr.unshift('color: none');
      arr.unshift('color: red');
      arr.unshift('%c' + source + '%c');
    }
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

},{"../../src/util":38,"_process":3}],7:[function(require,module,exports){
/*globals console, crypto */
/*jslint indent:2, node:true */
var util = require('../../src/util');

/**
 * A Core provider for getting cryptographically random buffers. This
 * functionality may not exist in all unpriviledged contexts - namely at this
 * point, firefox addon workers.
 * @Class Core_crypto
 * @constructor
 * @param {module:Module} cap The module creating this provider.
 */
var Core_crypto = function(cap, dispatchEvent) {
  'use strict';
  this.dispatchEvent = dispatchEvent;
  util.handleEvents(this);
};

/**
 * Get a random buffer of some number of bytes.
 * @param {String} str The string to send.
 * @param {Function} continuation Function to call when sending is complete.
 * @method send
 */
 Core_crypto.prototype.getRandomBytes = function(number, continuation) {
   'use strict';
   var buffer = new Uint8Array(number);
   crypto.getRandomValues(buffer);
   continuation(buffer.buffer);
};

exports.provider = Core_crypto;
exports.name = "core.crypto";

},{"../../src/util":38}],8:[function(require,module,exports){
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

},{"../../src/util":38}],9:[function(require,module,exports){
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
 * @param {Boolean} interactive - Whether to launch an interactive OAuth flow.
 *    Defaults to true.
 * @param {Function} continuation - Function to call when complete
 *    Expected to see a String value that is the response Url containing the access token
 */
OAuth.prototype.launchAuthFlow = function(authUrl, stateObj, interactive,
                                          continuation) {
  if (!this.ongoing.hasOwnProperty(stateObj.state)) {
    continuation(undefined, {
      'errcode': 'UNKNOWN',
      'message': 'You must begin the oAuth flow with initiateOAuth first'
    });
    return;
  }
  if (interactive === undefined) {
    interactive = true;
  }
  this.ongoing[stateObj.state].launchAuthFlow(
      authUrl, stateObj, interactive, continuation);
  delete this.ongoing[stateObj.state];
};

exports.register = OAuth.register;
exports.reset = OAuth.reset;
exports.provider = OAuth.bind(this, []);
exports.name = 'core.oauth';

},{}],10:[function(require,module,exports){
/*globals navigator*/
/*jshint node:true*/

// This providers allows freedom modules to monitor the online status
// reported by the browser.  This is useful (1) to work around a Chromium
// bug that makes navigator.onLine always false in a Web Worker
// (https://crbug.com/114475) and (2) to provide events on status changes
// in Web Workers, which are not available otherwise due to the lack of a
// Window object.

var PromiseCompat = require('es6-promise').Promise;
// Alias navigator/window if defined, else set to false
var nav = typeof navigator !== 'undefined' && navigator;
var win = typeof window !== 'undefined' && window;

var OnlineProvider = function(cap, dispatchEvent) {
  "use strict";
  this._setupListeners(dispatchEvent);
};

OnlineProvider.prototype.isOnline = function() {
  "use strict";
  if (!nav || typeof nav.onLine === 'undefined') {
    console.warn("Trying to use core.online API without client support");
    return PromiseCompat.resolve(true);  // Connected
  }
  return PromiseCompat.resolve(nav.onLine);
};

OnlineProvider.prototype._setupListeners = function(dispatchEvent) {
  "use strict";
  if (!win || typeof win.ononline === 'undefined') {
    console.warn("Trying to use core.online events without client support");
    return;
  }

  var events = [
    "online",
    "offline"
  ];
  events.forEach(function (eventName) {
    win.addEventListener(eventName, dispatchEvent.bind(this, eventName));
  });
};

exports.name = "core.online";
exports.provider = OnlineProvider;
exports.style = "providePromises";
exports.flags = { provider: true };
exports.setMocks = function(mockNav, mockWin) {
  "use strict";
  nav = mockNav;
  win = mockWin;
};

},{"es6-promise":2}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
/*jslint sloppy:true, node:true */
/*globals Components, ArrayBuffer */

var util = require('../../src/util');

var eventNames = [
  'onopen',
  'onerror',
  'onclose',
  'onmessage'
];

var unAttachedChannels = {};
var pendingEvents = {};
var allocateChannel = function (dataChannel) {
  var id = util.getId();
  unAttachedChannels[id] = dataChannel;
  pendingEvents[id] = [];
  eventNames.forEach(function(eventName) {
    // This listener will be overridden (re-set) after the constructor runs.
    var handler = function(event) {
      var currentHandler = dataChannel[eventName];
      if (currentHandler === handler) {
        pendingEvents[id].push(event);
      } else if (typeof currentHandler === 'function') {
        // If an event somehow runs on this event handler after it has been
        // replaced, forward that event to the new event handler.
        currentHandler(event);
      } else {
        throw new Error('No handler for ' + event.type + ' event');
      }
    };
    dataChannel[eventName] = handler;
  });
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

  // After the constructor returns, and the caller has a chance to register
  // event listeners, fire all pending events, and then ensure that all
  // subsequent events are handled immediately.
  setTimeout(function() {
    this.drainPendingEvents(id);

    // This function must not be called until after the pending events are
    // drained, to ensure that messages are delivered in order.
    this.manageEvents(true);
  }.bind(this), 0);
};

RTCDataChannelAdapter.prototype.drainPendingEvents = function(id) {
  pendingEvents[id].forEach(function(event) {
    this['on' + event.type](event);
  }.bind(this));
  delete pendingEvents[id];
};

// Attach or detach listeners for events against the connection.
RTCDataChannelAdapter.prototype.manageEvents = function (attach) {
  eventNames.forEach(function (eventName) {
    if (attach) {
      this[eventName] = this[eventName].bind(this);
      this.channel[eventName] = this[eventName];
    } else {
      delete this.channel[eventName];
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
  } else if (this.channel.binaryType === 'arraybuffer' &&
      typeof Components !== 'undefined' &&
      !(event.data instanceof ArrayBuffer)) {
    // In Firefox Addons, incoming array buffers are not always owned by the
    // Addon context. The following line clones the object to take ownership.
    // See: https://developer.mozilla.org/en-US/docs/Components.utils.cloneInto
    var myData = Components.utils.cloneInto(event.data, {});
    this.dispatchEvent('onmessage', {buffer: myData});
  } else {
    this.dispatchEvent('onmessage', {buffer: event.data});
  }
};

exports.name = "core.rtcdatachannel";
exports.provider = RTCDataChannelAdapter;
exports.allocate = allocateChannel;

},{"../../src/util":38,"./core.rtcpeerconnection":13}],13:[function(require,module,exports){
/*jslint indent:2,sloppy:true, node:true */

var PromiseCompat = require('es6-promise').Promise;
var wrtcClass, RTCPeerConnection, RTCSessionDescription, RTCIceCandidate;
var DataChannel = require('./core.rtcdatachannel');

var RTCPeerConnectionAdapter = function (cap, dispatchEvent, configuration) {
  if (typeof wrtcClass === 'undefined') {
    // only works in browser, so node should use setImpl (see exports)
    var adapter = require('webrtc-adapter');
    RTCPeerConnection = adapter.RTCPeerConnection;
    RTCSessionDescription = adapter.RTCSessionDescription;
    RTCIceCandidate = adapter.RTCIceCandidate;
  } else {
    RTCPeerConnection = wrtcClass.RTCPeerConnection;
    RTCSessionDescription = wrtcClass.RTCSessionDescription;
    RTCIceCandidate = wrtcClass.RTCIceCandidate;
  }

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
                                        resolve, reject);
  }.bind(this));
};

RTCPeerConnectionAdapter.prototype.getLocalDescription = function () {
  return PromiseCompat.resolve(this.connection.localDescription);
};

RTCPeerConnectionAdapter.prototype.setRemoteDescription = function (description) {
  return new PromiseCompat(function (resolve, reject) {
    this.connection.setRemoteDescription(new RTCSessionDescription(description),
                                         resolve, reject);
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
                                    resolve, reject);
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
    if (typeof wrtcClass === 'undefined') {
      // used webrtc-adapter
      this.connection.getStats(selector, resolve, reject);
    } else {
      // node-wrtc has different getStats API
      this.connection.getStats(function(response) {
        var standardReport = {};
        var reports = response.result();
        var id = 0;  // nodewrtc stats report lacks id field
        reports.forEach(function (report) {
          report.id = String(id++);  // string to use as object key
          standardReport[report.id] = report;
        });
        resolve(standardReport);
      }, reject);
    }
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
exports.setImpl = function(impl) {
  "use strict";
  wrtcClass = impl;
};

},{"./core.rtcdatachannel":12,"es6-promise":2,"webrtc-adapter":4}],14:[function(require,module,exports){
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

},{"../../src/util":38}],15:[function(require,module,exports){
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
Core_unprivileged.moduleInternal = undefined;

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

  if (this.isInModule()) {
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
  } else if (msg.type === 'require') {
    source.require(msg.id, msg.manifest);
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
  } else if (this.isInModule()) {
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
 * @method isInModule
 * @private
 * @returns {Boolean} Whether this class is running in a module.
 */
Core_unprivileged.prototype.isInModule = function () {
  return (this.manager.delegate && this.manager.toDelegate.core);
};

/**
 * Require a dynamic dependency for your freedom module.
 * If new permissions are needed beyond what are already available to the
 * freedom context, the user will need to approve of the requested permissions.
 * @method require
 * @param {String} manifest The URL of the manifest to require.
 * @param {String} api The API of the dependency to expose if not default.
 * @param {Function} callback The function to call with the dependency.
 */
Core_unprivileged.prototype.require = function (manifest, api, callback) {
  if (this.isInModule() && Core_unprivileged.moduleInternal) {
    // Register a callback with moduleInternal.
    // DependencyName is the name of the channel moduelInternal will allocate
    // callback will be called once a link to that channel is seen.
    var dependencyName =
        Core_unprivileged.moduleInternal.registerId(api, callback);

    // Request the dependency be added.
    this.manager.emit(this.manager.delegate, {
      type: 'Delegation',
      request: 'handle',
      flow: 'core',
      message: {
        type: 'require',
        manifest: manifest,
        id: dependencyName
      }
    });
  } else {
    this.debug.error('The require function in external context makes no sense' +
        ' Instead create a new freedom() context.');
    callback(undefined, {
      errcode: 'InvalidContext',
      message: 'Cannot call require() from this context.'
    });
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
 * @param {ModuleInternal} moduleInternal The Module environment if one exists.
 */
Core_unprivileged.prototype.setId = function(id, moduleInternal) {
  Core_unprivileged.contextId = id;
  Core_unprivileged.moduleInternal = moduleInternal;
};

exports.provider = Core_unprivileged;
exports.name = "core";
exports.flags = {module: true};

},{"../../src/consumer":23,"../../src/proxy/eventInterface":35,"../../src/util":38}],16:[function(require,module,exports){
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

},{"../../src/util":38,"es6-promise":2}],17:[function(require,module,exports){
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

},{}],18:[function(require,module,exports){
/*jshint node:true*/
var PromiseCompat = require('es6-promise').Promise;
var XhrClass = null;

var XhrProvider = function(cap, dispatchEvent) {
  "use strict";
  if (typeof window !== "undefined" &&
      typeof window.XMLHttpRequest !== "undefined" &&
      XhrClass === null) { // freedom
    XhrClass = window.XMLHttpRequest;
  } else if (typeof XMLHttpRequest !== "undefined" &&
      XhrClass === null) { // freedom-for-firefox
    XhrClass = XMLHttpRequest;
  } else if (XhrClass === null) {
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
  } else if (data.hasOwnProperty("blob")) {
    this._xhr.send(data.blob);
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

},{"es6-promise":2}],19:[function(require,module,exports){
/*jslint indent:2,browser:true, node:true */
var PromiseCompat = require('es6-promise').Promise;

var oAuthRedirectId = 'freedom.oauth.redirect.handler';

var loadedOnStartup = false;

var TIMEOUT = 5000;

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
 * @param {Boolean} interactive - Whether to launch an interactive flow
 * @param {Function} continuation - Function to call when complete
 *    Expected to see a String value that is the response Url containing the access token
 */
LocalPageAuth.prototype.launchAuthFlow = function(authUrl, stateObj, interactive, continuation) {
  "use strict";
  var listener = this.storageListener.bind(this, continuation, stateObj);
  this.listeners[stateObj.state] = listener;
  window.addEventListener("storage", listener, false);
  // Start 'er up
  window.open(authUrl);

  if (interactive === false) {
    setTimeout(function() {
      if (this.listeners[stateObj.state]) {
        // Listener has not been deleted, indicating oauth has completed.
        window.removeEventListener(
            "storage", this.listeners[stateObj.state], false);
        delete this.listeners[stateObj.state];
        continuation(undefined, 'Error launching auth flow');
      }
    }.bind(this), TIMEOUT);
  }
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

},{"es6-promise":2}],20:[function(require,module,exports){
(function (global){
/*jslint indent:2,browser:true, node:true */
var PromiseCompat = require('es6-promise').Promise;

var oAuthRedirectId = 'freedom.oauth.redirect.handler';

var TIMEOUT = 5000;

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
 * @param {Boolean} interactive - Whether to launch an interactive flow
 * @param {Function} continuation - Function to call when complete
 *    Expected to see a String value that is the response Url containing the access token
 */
RemotePageAuth.prototype.launchAuthFlow = function(authUrl, stateObj, interactive, continuation) {
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

  var hasCredentials = false;
  window.addEventListener('message', function (frame, msg) {
    if (msg.data && msg.data.key && msg.data.url && this.listeners[msg.data.key]) {
      hasCredentials = true;
      this.listeners[msg.data.key](msg.data.url);
      delete this.listeners[msg.data.key];
      try {
        document.body.removeChild(frame);
      } catch (e) {
        console.warn(e);
      }
    }
  }.bind(this, frame), false);

  if (interactive === false) {
    setTimeout(function() {
      if (hasCredentials === false) {
        continuation(undefined, 'Error launching auth flow');
        delete this.listeners[stateObj.state];
        try {
          document.body.removeChild(frame);
        } catch (e) {
          console.warn(e);
        }
      }
    }.bind(this), TIMEOUT);
  }
};

/**
 * If we have a local domain, and freedom.js is loaded at startup, we can use
 * the local page as a redirect URI.
 */
module.exports = RemotePageAuth;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"es6-promise":2}],21:[function(require,module,exports){
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

},{"es6-promise":2}],22:[function(require,module,exports){
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

},{"../dist/bundle.compiled":1}],23:[function(require,module,exports){
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
  if (typeof (from) === 'function' && template !== 'proxy') {
    //from = undefined;
    //throw "Trying to conform a function";
    debug.error("Message discarded as functions can't cross modules!");
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
 * The supported log levels for debugging.
 * @static
 */
Debug.LEVELS = ['debug', 'info', 'log', 'warn', 'error'];

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
      freedom: true
    };
  Debug.LEVELS.forEach(function (level) {
    logger[level] = log.bind(this, level, name);
  }.bind(this));
  return logger;
};

/**
 * Create a synchronous 'getLogger' method that binds around an asynchronous
 * logger by creating a buffer until the asynchronous logger is resolved.
 * @see {ModuleInternal.loadLinks} for where this method is bound to the created
 *     external interface.
 * @method getLoggingShim
 * @param {Function} asyncMethod The wrapper to 'getLogger'
 */
Debug.prototype.getLoggingShim = function (asyncMethod) {
  return function getLogggerSync(name) {
    var toResolve = asyncMethod(name),
      buffer = [],
      methods = Debug.LEVELS,
      backing = null,
      ret = {};
    toResolve.then(function (logger) {
      backing = logger;
      buffer.forEach(function (item) {
        backing[item[0]].apply(backing, item[1]);
      });
    });
    methods.forEach(function (mthd) {
      ret[mthd] = function() {
        var args = Array.prototype.splice.call(arguments, 0);
        if (backing) {
          backing[this].apply(backing, args);
        } else {
          buffer.push([this, args]);
        }
      }.bind(mthd);
    });
    return ret;
  };
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

},{"./api":21,"./bundle":22,"./debug":24,"./hub":26,"./manager":29,"./policy":32,"./proxybinder":36,"./resource":37,"./util":38,"es6-promise":2}],26:[function(require,module,exports){
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
  // Map from dependency names to target URLs, from this module's manifest.
  this.dependencyUrls = {};
  // Map from depenency names to arrays of pending messages.  Once a
  // dependency is fully started, the pending messages will be drained and its
  // entry in this map will be deleted.
  this.pendingMessages = {};
  this.started = false;
  this.failed = false;

  util.handleEvents(this);
};

/**
 * Receive a message for the Module.
 * @method onMessage
 * @param {String} flow The origin of the message.
 * @param {Object} message The message received.
 */
Module.prototype.onMessage = function (flow, message) {
  if (this.failed && message.to) {
    // We've attempted to load the module and failed, so short-circuit any
    // messages bound for the provider, and respond with an error reply instead.
    // This error is handled in Consumer, resulting in triggering the
    // freedom['moduleName'].onError listeners.
    this.emit(this.externalPortMap[flow], {
      type: 'error',
    });
    return;
  }
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
      this.drainPendingMessages(message.name);
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
      this.drainPendingMessages(message.name);
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
 * Store a pending message for a flow that isn't ready yet.  The message will
 * be sent in-order by drainPendingMessages when the flow becomes ready.  This
 * is used to ensure messages are not lost while the target module is loading.
 * @method addPendingMessage
 * @param {String} name The flow to store a message for.
 * @param {Object} message The message to store.
 * @private
 */
Module.prototype.addPendingMessage = function (name, message) {
  if (!this.pendingMessages[name]) {
    this.pendingMessages[name] = [];
  }
  this.pendingMessages[name].push(message);
};

/**
 * Send all pending messages for a flow that is now ready.  The messages will
 * be sent in-order.  This is used to ensure messages are not lost while the
 * target module is loading.
 * @method addPendingMessage
 * @param {String} name The flow to send pending messages.
 * @private
 */
Module.prototype.drainPendingMessages = function (name) {
  if (!this.pendingMessages[name]) {
    return;
  }
  this.pendingMessages[name].forEach(
      this.emit.bind(this, this.externalPortMap[name]));
  delete this.pendingMessages[name];
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
      this.failed = true;
      this.emit(this.controlChannel, {
        request: 'close'
      });
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
      if (message.message.type === 'register' ||
          message.message.type === 'require') {
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
        type: 'resolve.response',
        id: id,
        data: data
      });
    }.bind(this, message.id), function () {
      this.debug.warn('Error Resolving URL for Module.');
    }.bind(this));
  } else if (name === 'ModInternal' && message.type === 'error') {
    this.failed = true;
    // The start event ensures that we process any pending messages, in case
    // one of them requires a short-circuit error response.
    this.emit('start');
  } else if (!this.externalPortMap[name]) {
    // Store this message until we have a port for that name.
    this.addPendingMessage(name, message);
    // Start asynchronous loading of the target module if it's a dependency
    // and loading hasn't started.
    if (name in this.dependencyUrls &&
        this.dependantChannels.indexOf(name) === -1) {
      this.require(name, this.dependencyUrls[name]);
    }
  } else {
    this.emit(this.externalPortMap[name], message);
  }
  return false;
};

/**
 * Create a dynamic dependency on another module.
 * @method require
 * @param {String} name The name of the dependency.
 * @param {String} manifest The URL of the dependency to add.
 */
Module.prototype.require = function (name, manifest) {
  this.dependantChannels.push(name);
  this.addDependency(manifest, name).catch(function (err) {
    this.port.onMessage(this.modInternal, {
      type: 'require.failure',
      id: name,
      error: err.message
    });
  }.bind(this));
};

/**
 * Add a dependency to the module's dependency tree
 * @method addDependency
 * @param {String} url The manifest URL of the dependency
 * @param {String} name The exposed name of the module.
 * @returns {Module} The created dependent module.
 * @private
 */
Module.prototype.addDependency = function (url, name) {
  return this.resource.get(this.manifestId, url)
    .then(function (url) {
      return this.policy.get(this.lineage, url);
    }.bind(this))
    .then(function (dep) {
      this.updateEnv(name, dep.manifest);
      this.emit(this.controlChannel, {
        type: 'Link to ' + name,
        request: 'link',
        name: name,
        overrideDest: name + '.' + this.id,
        to: dep
      });
      return dep;
    }.bind(this))
    .catch(function (err) {
      this.debug.warn(this.toString() + ' failed to load dep: ', name, err);
      throw err;
    }.bind(this));
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
      }
      this.dependencyUrls[name] = desc.url;
      // Turn the relative URL of the dependency's manifest into an absolute
      // URL, load it, and send a message to the module informing it of the
      // dependency's API.  Once the module has received all of these updates,
      // it will emit a 'start' message.
      this.resource.get(this.manifestId, desc.url)
          .then(this.policy.loadManifest.bind(this.policy))
          .then(this.updateEnv.bind(this, name));
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
  this.unboundPorts = {};

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
  } else if (flow === 'default' && message.type === 'resolve.response' &&
             this.requests[message.id]) {
    this.requests[message.id](message.data);
    delete this.requests[message.id];
  } else if (flow === 'default' && message.type === 'require.failure' &&
             this.unboundPorts[message.id]) {
    this.unboundPorts[message.id].callback(undefined, message.error);
    delete this.unboundPorts[message.id];
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
 * Register an unused channel ID for callback, and once information
 * about the channel is known, call the handler with that information.
 * @method registerId
 * @param {String} api The preferred API to use for the new channel.
 * @param {Function} callback Function to call once channel ready
 * @returns {String} The allocated channel name.
 */
ModuleInternal.prototype.registerId = function (api, callback) {
  var id = util.getId();
  this.unboundPorts[id] = {
    name: api,
    callback: callback
  };
  return id;
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

  return exp[name];
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
    new CoreProv(this.manager).setId(this.lineage, this);
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
  }).then(function (core) {
    core.external.getLoggerSync = this.debug.getLoggingShim(
        core.external().getLogger);
    this.attach('core', false, core);
  }.bind(this));


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
  // Handle require() dependency resolution.
  } else if (this.unboundPorts[name]) {
    this.binder.getExternal(this.port, name,
        this.binder.getAPI(manifest, this.api, this.unboundPorts[name].api))
      .then(
        this.attach.bind(this, name, false)
      ).then(function(proxy) {
        this.unboundPorts[name].callback(proxy);
        delete this.unboundPorts[name];
      }.bind(this));
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
      script.addEventListener('error', reject, true);
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
        "github.com/freedomjs/freedom/wiki/Debugging");
    // This event is caught in Module, which will then respond to any messages
    // for the provider with short-circuit errors.
    this.emit(this.externalChannel, {
      type: 'error'
    });
    throw e;
  }.bind(this));
};

module.exports = ModuleInternal;

},{"./provider":33,"./proxy/apiInterface":34,"./proxybinder":36,"./util":38,"es6-promise":2}],32:[function(require,module,exports){
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

},{"./module":30,"./util":38,"es6-promise":2}],33:[function(require,module,exports){
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
    var sanityCheck = function (provider) {
      if (typeof provider !== "function") {
        throw new Error("Provider " + this.toString() +
            " needs to be implemented by a function.");
      }
    };
    this.iface = {
      provideSynchronous: function (prov) {
        sanityCheck(prov);
        this.providerCls = prov;
        this.mode = Provider.mode.synchronous;
      }.bind(this),
      provideAsynchronous: function (prov) {
        sanityCheck(prov);
        this.providerCls = prov;
        this.mode = Provider.mode.asynchronous;
      }.bind(this),
      providePromises: function (prov) {
        sanityCheck(prov);
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
      var prop, debug, args, returnPromise, ret;
      if (msg.action === 'method') {
        if (typeof this[msg.type] !== 'function') {
          port.debug.warn("Provider does not implement " + msg.type + "()!");
          port.emit(port.channels[src], {
            type: 'method',
            to: msg.to,
            message: {
              to: msg.to,
              type: 'method',
              reqId: msg.reqId,
              name: msg.type,
              error: 'Provider does not implement ' + msg.type + '()!'
            }
          });
          return;
        }
        prop = port.definition[msg.type];
        debug = port.debug;
        args = Consumer.portableToMessage(prop.value, msg, debug);
        if (msg.reqId === null) {
          // Reckless call.  Ignore return value.
          ret = function(resolve, reject) {
            if (reject) {
              debug.error(reject);
            }
          };
        } else {
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
        }
        if (!Array.isArray(args)) {
          args = [args];
        }
        if (port.mode === Provider.mode.synchronous) {
          try {
            ret(this[msg.type].apply(this, args));
          } catch (e1) {
            ret(undefined, e1.message + ' ' + e1.stack);
          }
        } else if (port.mode === Provider.mode.asynchronous) {
          try {
            this[msg.type].apply(instance, args.concat(ret));
          } catch (e2) {
            ret(undefined, e2.message + ' ' + e2.stack);
          }
        } else if (port.mode === Provider.mode.promises) {
          try {
            returnPromise = this[msg.type].apply(this, args);
            if (returnPromise && returnPromise.then) {
              returnPromise.then(ret, ret.bind({}, undefined));
            } else {
              ret(undefined, 'No promise returned from ' +
                  msg.type + ': ' + returnPromise);
            }
          } catch (e3) {
            ret(undefined, e3.message + ' ' + e3.stack);
          }
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
      this[name].reckless = function () {
        var streams = Consumer.messageToPortable(prop.value,
                Array.prototype.slice.call(arguments, 0),
                debug);
        emit({
          action: 'method',
          type: name,
          reqId: null,  // Marks this as a reckless call.
          text: streams.text,
          binary: streams.binary
        });
        // Return type is void.
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

},{"../consumer":23,"../util":38,"es6-promise":2}],35:[function(require,module,exports){
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

/**
 * Get the definition for a proxy given a requested API and the manifest of
 * the module.
 * @method getAPI
 * @param {Object} manifest The manifest for the proxy.
 * @param {Api} apiProvider The registry of known APIs.
 * @param {String} api The Requested API.
 * @returns {Object} definition The definition to use for calls to getExternal.
 */
ProxyBinder.prototype.getAPI = function (manifest, apiProvider, api) {
  'use strict';
  if (manifest.api && manifest.api[api]) {
    return {
      name: api,
      definition: manifest.api[api]
    };
  } else if (manifest['default']) {
    var def = apiProvider.get(manifest['default']);
    if (!def && manifest.api && manifest.api[manifest['default']]) {
      return {
        name: manifest['default'],
        definition: manifest.api[manifest['default']]
      };
    }
    return def;
  } else {
    return false;
  }
};


module.exports = ProxyBinder;

},{"./consumer":23,"./provider":33,"./proxy/apiInterface":34,"./proxy/eventInterface":35,"es6-promise":2}],37:[function(require,module,exports){
/*globals XMLHttpRequest,chrome */
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
    'gopher': this.xhrRetriever,  // For Cordova; see http://crbug.com/513352 .
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
                   "app", "gopher"],
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
  if (typeof navigator !== 'undefined' && navigator && navigator.userAgent &&
      navigator.userAgent.indexOf('Chrome') !== -1 && !chrome.app.runtime) {
    // Chrome (browser, not apps/extensions) fails to load multiple APIs
    // from the same manifest unless they are loaded synchronously
    ref.open("GET", url, false);
  } else {
    // Async for all other cases, especially Chrome apps (which fail otherwise)
    ref.open("GET", url, true);
  }
  ref.send();
};

module.exports = Resource;

},{"./util":38,"es6-promise":2}],38:[function(require,module,exports){
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
  var str = '';
  var a = new Uint16Array(buffer);
  for (var i = 0; i < a.length; i++) {
    str += String.fromCharCode(a[i]);
  }
  return str;
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

},{}],39:[function(require,module,exports){
(function (global){
/*jslint node:true*/

var providers = [
  require('../../providers/core/core.unprivileged'),
  require('../../providers/core/core.echo'),
  require('../../providers/core/core.console'),
  require('../../providers/core/core.crypto'),
  require('../../providers/core/core.peerconnection'),
  require('../../providers/core/core.rtcpeerconnection'),
  require('../../providers/core/core.rtcdatachannel'),
  require('../../providers/core/core.storage'),
  require('../../providers/core/core.view'),
  require('../../providers/core/core.oauth'),
  require('../../providers/core/core.websocket'),
  require('../../providers/core/core.xhr'),
  require('../../providers/core/core.battery'),
  require('../../providers/core/core.online')
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

},{"../../providers/core/core.battery":5,"../../providers/core/core.console":6,"../../providers/core/core.crypto":7,"../../providers/core/core.echo":8,"../../providers/core/core.oauth":9,"../../providers/core/core.online":10,"../../providers/core/core.peerconnection":11,"../../providers/core/core.rtcdatachannel":12,"../../providers/core/core.rtcpeerconnection":13,"../../providers/core/core.storage":14,"../../providers/core/core.unprivileged":15,"../../providers/core/core.view":16,"../../providers/core/core.websocket":17,"../../providers/core/core.xhr":18,"../../providers/oauth/oauth.localpageauth":19,"../../providers/oauth/oauth.remotepageauth":20,"../entry":25,"../link/worker":28}]},{},[39])

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1aWxkL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC9kaXN0L2J1bmRsZS5jb21waWxlZC5qcyIsImJ1aWxkL25vZGVfbW9kdWxlcy9lczYtcHJvbWlzZS9kaXN0L2VzNi1wcm9taXNlLmpzIiwiYnVpbGQvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsImJ1aWxkL25vZGVfbW9kdWxlcy93ZWJydGMtYWRhcHRlci9hZGFwdGVyLmpzIiwiYnVpbGQvcHJvdmlkZXJzL2NvcmUvY29yZS5iYXR0ZXJ5LmpzIiwiYnVpbGQvcHJvdmlkZXJzL2NvcmUvY29yZS5jb25zb2xlLmpzIiwiYnVpbGQvcHJvdmlkZXJzL2NvcmUvY29yZS5jcnlwdG8uanMiLCJidWlsZC9wcm92aWRlcnMvY29yZS9jb3JlLmVjaG8uanMiLCJidWlsZC9wcm92aWRlcnMvY29yZS9jb3JlLm9hdXRoLmpzIiwiYnVpbGQvcHJvdmlkZXJzL2NvcmUvY29yZS5vbmxpbmUuanMiLCJidWlsZC9wcm92aWRlcnMvY29yZS9jb3JlLnBlZXJjb25uZWN0aW9uLmpzIiwiYnVpbGQvcHJvdmlkZXJzL2NvcmUvY29yZS5ydGNkYXRhY2hhbm5lbC5qcyIsImJ1aWxkL3Byb3ZpZGVycy9jb3JlL2NvcmUucnRjcGVlcmNvbm5lY3Rpb24uanMiLCJidWlsZC9wcm92aWRlcnMvY29yZS9jb3JlLnN0b3JhZ2UuanMiLCJidWlsZC9wcm92aWRlcnMvY29yZS9jb3JlLnVucHJpdmlsZWdlZC5qcyIsImJ1aWxkL3Byb3ZpZGVycy9jb3JlL2NvcmUudmlldy5qcyIsImJ1aWxkL3Byb3ZpZGVycy9jb3JlL2NvcmUud2Vic29ja2V0LmpzIiwiYnVpbGQvcHJvdmlkZXJzL2NvcmUvY29yZS54aHIuanMiLCJidWlsZC9wcm92aWRlcnMvb2F1dGgvb2F1dGgubG9jYWxwYWdlYXV0aC5qcyIsImJ1aWxkL3Byb3ZpZGVycy9vYXV0aC9vYXV0aC5yZW1vdGVwYWdlYXV0aC5qcyIsImJ1aWxkL3NyYy9hcGkuanMiLCJidWlsZC9zcmMvYnVuZGxlLmpzIiwiYnVpbGQvc3JjL2NvbnN1bWVyLmpzIiwiYnVpbGQvc3JjL2RlYnVnLmpzIiwiYnVpbGQvc3JjL2VudHJ5LmpzIiwiYnVpbGQvc3JjL2h1Yi5qcyIsImJ1aWxkL3NyYy9saW5rLmpzIiwiYnVpbGQvc3JjL2xpbmsvd29ya2VyLmpzIiwiYnVpbGQvc3JjL21hbmFnZXIuanMiLCJidWlsZC9zcmMvbW9kdWxlLmpzIiwiYnVpbGQvc3JjL21vZHVsZWludGVybmFsLmpzIiwiYnVpbGQvc3JjL3BvbGljeS5qcyIsImJ1aWxkL3NyYy9wcm92aWRlci5qcyIsImJ1aWxkL3NyYy9wcm94eS9hcGlJbnRlcmZhY2UuanMiLCJidWlsZC9zcmMvcHJveHkvZXZlbnRJbnRlcmZhY2UuanMiLCJidWlsZC9zcmMvcHJveHliaW5kZXIuanMiLCJidWlsZC9zcmMvcmVzb3VyY2UuanMiLCJidWlsZC9zcmMvdXRpbC5qcyIsImJ1aWxkL3NyYy91dGlsL3dvcmtlckVudHJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FDQUE7QUFDQTs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ2pvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN6SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4ZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcE1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3RIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDemRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3JPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUMzSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Z0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1UEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDMVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJmcmVlZG9tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IFt7XCJuYW1lXCI6XCJjb25zb2xlXCIsXCJhcGlcIjp7XCJsb2dcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJzdHJpbmdcIl19LFwiZGVidWdcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJzdHJpbmdcIl19LFwiaW5mb1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcInN0cmluZ1wiXX0sXCJ3YXJuXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwic3RyaW5nXCJdfSxcImVycm9yXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwic3RyaW5nXCJdfX19LHtcIm5hbWVcIjpcImNvcmUuYmF0dGVyeVwiLFwiYXBpXCI6e1wiaXNDaGFyZ2luZ1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwiYm9vbGVhblwifSxcImdldENoYXJnaW5nVGltZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwibnVtYmVyXCJ9LFwiZ2V0RGlzY2hhcmdpbmdUaW1lXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJudW1iZXJcIn0sXCJnZXRMZXZlbFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwibnVtYmVyXCJ9LFwiY2hhcmdpbmdjaGFuZ2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJjaGFyZ2luZ1wiOlwiYm9vbGVhblwifX0sXCJjaGFyZ2luZ3RpbWVjaGFuZ2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJjaGFyZ2luZ1RpbWVcIjpcIm51bWJlclwifX0sXCJkaXNjaGFyZ2luZ3RpbWVjaGFuZ2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJkaXNjaGFyZ2luZ1RpbWVcIjpcIm51bWJlclwifX0sXCJsZXZlbGNoYW5nZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImxldmVsXCI6XCJudW1iZXJcIn19fX0se1wibmFtZVwiOlwiY29yZS5jb25zb2xlXCIsXCJhcGlcIjp7XCJsb2dcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJzdHJpbmdcIl19LFwiZGVidWdcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJzdHJpbmdcIl19LFwiaW5mb1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcInN0cmluZ1wiXX0sXCJ3YXJuXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwic3RyaW5nXCJdfSxcImVycm9yXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwic3RyaW5nXCJdfX19LHtcIm5hbWVcIjpcImNvcmUuY3J5cHRvXCIsXCJhcGlcIjp7XCJnZXRSYW5kb21CeXRlc1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJudW1iZXJcIl0sXCJyZXRcIjpcImJ1ZmZlclwifX19LHtcIm5hbWVcIjpcImNvcmUuZWNob1wiLFwiYXBpXCI6e1wic2V0dXBcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCJdfSxcInNlbmRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCJdfSxcIm1lc3NhZ2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjpcInN0cmluZ1wifX19LHtcIm5hbWVcIjpcImNvcmVcIixcImFwaVwiOntcImNyZWF0ZUNoYW5uZWxcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjp7XCJjaGFubmVsXCI6XCJwcm94eVwiLFwiaWRlbnRpZmllclwiOlwic3RyaW5nXCJ9fSxcImJpbmRDaGFubmVsXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXSxcInJldFwiOlwicHJveHlcIn0sXCJnZXRJZFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOltcImFycmF5XCIsXCJzdHJpbmdcIl19LFwiZ2V0TG9nZ2VyXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXSxcInJldFwiOlwicHJveHlcIn0sXCJyZXF1aXJlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwic3RyaW5nXCJdLFwicmV0XCI6XCJwcm94eVwifX19LHtcIm5hbWVcIjpcImNvcmUub2F1dGhcIixcImFwaVwiOntcImluaXRpYXRlT0F1dGhcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1tcImFycmF5XCIsXCJzdHJpbmdcIl1dLFwicmV0XCI6e1wicmVkaXJlY3RcIjpcInN0cmluZ1wiLFwic3RhdGVcIjpcInN0cmluZ1wifSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcImxhdW5jaEF1dGhGbG93XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLHtcInJlZGlyZWN0XCI6XCJzdHJpbmdcIixcInN0YXRlXCI6XCJzdHJpbmdcIn0sXCJib29sZWFuXCJdLFwicmV0XCI6XCJzdHJpbmdcIixcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fX19LHtcIm5hbWVcIjpcImNvcmUub25saW5lXCIsXCJhcGlcIjp7XCJpc09ubGluZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwiYm9vbGVhblwifSxcIm9ubGluZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOnt9fSxcIm9mZmxpbmVcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7fX19fSx7XCJuYW1lXCI6XCJjb3JlLnBlZXJjb25uZWN0aW9uXCIsXCJhcGlcIjp7XCJzZXR1cFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcInN0cmluZ1wiLFtcImFycmF5XCIsXCJzdHJpbmdcIl0sXCJib29sZWFuXCJdfSxcInNlbmRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W3tcImNoYW5uZWxMYWJlbFwiOlwic3RyaW5nXCIsXCJ0ZXh0XCI6XCJzdHJpbmdcIixcImJpbmFyeVwiOlwiYmxvYlwiLFwiYnVmZmVyXCI6XCJidWZmZXJcIn1dfSxcIm9uUmVjZWl2ZWRcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJjaGFubmVsTGFiZWxcIjpcInN0cmluZ1wiLFwidGV4dFwiOlwic3RyaW5nXCIsXCJiaW5hcnlcIjpcImJsb2JcIixcImJ1ZmZlclwiOlwiYnVmZmVyXCJ9fSxcIm9wZW5EYXRhQ2hhbm5lbFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl19LFwiY2xvc2VEYXRhQ2hhbm5lbFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl19LFwib25PcGVuRGF0YUNoYW5uZWxcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJjaGFubmVsSWRcIjpcInN0cmluZ1wifX0sXCJvbkNsb3NlRGF0YUNoYW5uZWxcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJjaGFubmVsSWRcIjpcInN0cmluZ1wifX0sXCJnZXRCdWZmZXJlZEFtb3VudFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcIm51bWJlclwifSxcImdldEluZm9cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcInN0cmluZ1wifSxcImNyZWF0ZU9mZmVyXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOlt7XCJvZmZlclRvUmVjZWl2ZVZpZGVvXCI6XCJudW1iZXJcIixcIm9mZmVyVG9SZWNlaXZlQXVkaW9cIjpcIm51bWJlclwiLFwidm9pY2VBY3Rpdml0eURldGVjdGlvblwiOlwiYm9vbGVhblwiLFwiaWNlUmVzdGFydFwiOlwiYm9vbGVhblwifV0sXCJyZXRcIjp7XCJ0eXBlXCI6XCJzdHJpbmdcIixcInNkcFwiOlwic3RyaW5nXCJ9fSxcImNsb3NlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdfSxcIm9uQ2xvc2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7fX19fSx7XCJuYW1lXCI6XCJjb3JlLnJ0Y2RhdGFjaGFubmVsXCIsXCJhcGlcIjp7XCJjb25zdHJ1Y3RvclwiOntcInZhbHVlXCI6W1wic3RyaW5nXCJdfSxcImdldExhYmVsXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJzdHJpbmdcIn0sXCJnZXRPcmRlcmVkXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJib29sZWFuXCJ9LFwiZ2V0TWF4UGFja2V0TGlmZVRpbWVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcIm51bWJlclwifSxcImdldE1heFJldHJhbnNtaXRzXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJudW1iZXJcIn0sXCJnZXRQcm90b2NvbFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwic3RyaW5nXCJ9LFwiZ2V0TmVnb3RpYXRlZFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwiYm9vbGVhblwifSxcImdldElkXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJudW1iZXJcIn0sXCJnZXRSZWFkeVN0YXRlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJzdHJpbmdcIn0sXCJnZXRCdWZmZXJlZEFtb3VudFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwibnVtYmVyXCJ9LFwib25vcGVuXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6W119LFwib25lcnJvclwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOltdfSxcIm9uY2xvc2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjpbXX0sXCJjbG9zZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXX0sXCJvbm1lc3NhZ2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJ0ZXh0XCI6XCJzdHJpbmdcIixcImJ1ZmZlclwiOlwiYnVmZmVyXCJ9fSxcImdldEJpbmFyeVR5cGVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcInN0cmluZ1wifSxcInNldEJpbmFyeVR5cGVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCJdfSxcInNlbmRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCJdfSxcInNlbmRCdWZmZXJcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wiYnVmZmVyXCJdfX19LHtcIm5hbWVcIjpcImNvcmUucnRjcGVlcmNvbm5lY3Rpb25cIixcImFwaVwiOntcImNvbnN0cnVjdG9yXCI6e1widmFsdWVcIjpbe1wiaWNlU2VydmVyc1wiOltcImFycmF5XCIse1widXJsc1wiOltcImFycmF5XCIsXCJzdHJpbmdcIl0sXCJ1c2VybmFtZVwiOlwic3RyaW5nXCIsXCJjcmVkZW50aWFsXCI6XCJzdHJpbmdcIn1dLFwiaWNlVHJhbnNwb3J0c1wiOlwic3RyaW5nXCIsXCJwZWVySWRlbnRpdHlcIjpcInN0cmluZ1wifV19LFwiY3JlYXRlT2ZmZXJcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W3tcIm9mZmVyVG9SZWNlaXZlQXVkaW9cIjpcIm51bWJlclwiLFwib2ZmZXJUb1JlY2VpdmVWaWRlb1wiOlwibnVtYmVyXCIsXCJpY2VSZXN0YXJ0XCI6XCJib29sZWFuXCIsXCJ2b2ljZUFjdGl2aXR5RGV0ZWN0aW9uXCI6XCJib29sZWFuXCJ9XSxcInJldFwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwic2RwXCI6XCJzdHJpbmdcIn19LFwiY3JlYXRlQW5zd2VyXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJzZHBcIjpcInN0cmluZ1wifX0sXCJzZXRMb2NhbERlc2NyaXB0aW9uXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOlt7XCJ0eXBlXCI6XCJzdHJpbmdcIixcInNkcFwiOlwic3RyaW5nXCJ9XX0sXCJnZXRMb2NhbERlc2NyaXB0aW9uXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJzZHBcIjpcInN0cmluZ1wifX0sXCJzZXRSZW1vdGVEZXNjcmlwdGlvblwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbe1widHlwZVwiOlwic3RyaW5nXCIsXCJzZHBcIjpcInN0cmluZ1wifV0sXCJyZXRcIjp7fX0sXCJnZXRSZW1vdGVEZXNjcmlwdGlvblwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwic2RwXCI6XCJzdHJpbmdcIn19LFwiZ2V0U2lnbmFsaW5nU3RhdGVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcInN0cmluZ1wifSxcInVwZGF0ZUljZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbe1wiaWNlU2VydmVyc1wiOltcImFycmF5XCIse1widXJsc1wiOltcImFycmF5XCIsXCJzdHJpbmdcIl0sXCJ1c2VybmFtZVwiOlwic3RyaW5nXCIsXCJjcmVkZW50aWFsXCI6XCJzdHJpbmdcIn1dLFwiaWNlVHJhbnNwb3J0c1wiOlwic3RyaW5nXCIsXCJwZWVySWRlbnRpdHlcIjpcInN0cmluZ1wifV0sXCJyZXRcIjp7fX0sXCJhZGRJY2VDYW5kaWRhdGVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W3tcImNhbmRpZGF0ZVwiOlwic3RyaW5nXCIsXCJzZHBNaWRcIjpcInN0cmluZ1wiLFwic2RwTUxpbmVJbmRleFwiOlwibnVtYmVyXCJ9XSxcInJldFwiOnt9fSxcImdldEljZUdhdGhlcmluZ1N0YXRlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJzdHJpbmdcIn0sXCJnZXRJY2VDb25uZWN0aW9uU3RhdGVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcInN0cmluZ1wifSxcImdldENvbmZpZ3VyYXRpb25cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjp7XCJpY2VTZXJ2ZXJzXCI6W1wiYXJyYXlcIix7XCJ1cmxzXCI6W1wiYXJyYXlcIixcInN0cmluZ1wiXSxcInVzZXJuYW1lXCI6XCJzdHJpbmdcIixcImNyZWRlbnRpYWxcIjpcInN0cmluZ1wifV0sXCJpY2VUcmFuc3BvcnRzXCI6XCJzdHJpbmdcIixcInBlZXJJZGVudGl0eVwiOlwic3RyaW5nXCJ9fSxcImdldExvY2FsU3RyZWFtc1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOltcImFycmF5XCIsXCJzdHJpbmdcIl19LFwiZ2V0UmVtb3RlU3RyZWFtc1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOltcImFycmF5XCIsXCJzdHJpbmdcIl19LFwiZ2V0U3RyZWFtQnlJZFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcInN0cmluZ1wifSxcImFkZFN0cmVhbVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjp7fX0sXCJyZW1vdmVTdHJlYW1cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCJdLFwicmV0XCI6e319LFwiY2xvc2VcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjp7fX0sXCJjcmVhdGVEYXRhQ2hhbm5lbFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIix7XCJvcmRlcmVkXCI6XCJib29sZWFuXCIsXCJtYXhQYWNrZXRMaWZlVGltZVwiOlwibnVtYmVyXCIsXCJtYXhSZXRyYW5zbWl0c1wiOlwibnVtYmVyXCIsXCJwcm90b2NvbFwiOlwic3RyaW5nXCIsXCJuZWdvdGlhdGVkXCI6XCJib29sZWFuXCIsXCJpZFwiOlwibnVtYmVyXCJ9XSxcInJldFwiOlwic3RyaW5nXCJ9LFwib25kYXRhY2hhbm5lbFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImNoYW5uZWxcIjpcInN0cmluZ1wifX0sXCJnZXRTdGF0c1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcIm9iamVjdFwifSxcIm9ubmVnb3RpYXRpb25uZWVkZWRcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjpbXX0sXCJvbmljZWNhbmRpZGF0ZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImNhbmRpZGF0ZVwiOntcImNhbmRpZGF0ZVwiOlwic3RyaW5nXCIsXCJzZHBNaWRcIjpcInN0cmluZ1wiLFwic2RwTUxpbmVJbmRleFwiOlwibnVtYmVyXCJ9fX0sXCJvbnNpZ25hbGluZ3N0YXRlY2hhbmdlXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6W119LFwib25hZGRzdHJlYW1cIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJzdHJlYW1cIjpcIm51bWJlclwifX0sXCJvbnJlbW92ZXN0cmVhbVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcInN0cmVhbVwiOlwibnVtYmVyXCJ9fSxcIm9uaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6W119fX0se1wibmFtZVwiOlwiY29yZS5zdG9yYWdlXCIsXCJhcGlcIjp7XCJrZXlzXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6W1wiYXJyYXlcIixcInN0cmluZ1wiXX0sXCJnZXRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCJdLFwicmV0XCI6XCJzdHJpbmdcIn0sXCJzZXRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJzdHJpbmdcIl0sXCJyZXRcIjpcInN0cmluZ1wifSxcInJlbW92ZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcInN0cmluZ1wifSxcImNsZWFyXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdfX19LHtcIm5hbWVcIjpcImNvcmUudGNwc29ja2V0XCIsXCJhcGlcIjp7XCJjb25zdHJ1Y3RvclwiOntcInZhbHVlXCI6W1wibnVtYmVyXCJdfSxcImdldEluZm9cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjp7XCJjb25uZWN0ZWRcIjpcImJvb2xlYW5cIixcImxvY2FsQWRkcmVzc1wiOlwic3RyaW5nXCIsXCJsb2NhbFBvcnRcIjpcIm51bWJlclwiLFwicGVlckFkZHJlc3NcIjpcInN0cmluZ1wiLFwicGVlclBvcnRcIjpcIm51bWJlclwifX0sXCJFUlJDT0RFXCI6e1widHlwZVwiOlwiY29uc3RhbnRcIixcInZhbHVlXCI6e1wiU1VDQ0VTU1wiOlwiU3VjY2VzcyFcIixcIlVOS05PV05cIjpcIlVua25vd24gZXJyb3JcIixcIkFMUkVBRFlfQ09OTkVDVEVEXCI6XCJTb2NrZXQgYWxyZWFkeSBjb25uZWN0ZWRcIixcIklOVkFMSURfQVJHVU1FTlRcIjpcIkludmFsaWQgYXJndW1lbnRcIixcIlRJTUVEX09VVFwiOlwiVGltZWQgb3V0XCIsXCJOT1RfQ09OTkVDVEVEXCI6XCJTb2NrZXQgbm90IGNvbm5lY3RlZFwiLFwiTkVUV09SS19DSEFOR0VEXCI6XCJOZXR3b3JrIGNoYW5nZWRcIixcIkNPTk5FQ1RJT05fQ0xPU0VEXCI6XCJDb25uZWN0aW9uIGNsb3NlZCBncmFjZWZ1bGx5XCIsXCJDT05ORUNUSU9OX1JFU0VUXCI6XCJDb25uZWN0aW9uIHJlc2V0XCIsXCJDT05ORUNUSU9OX1JFRlVTRURcIjpcIkNvbm5lY3Rpb24gcmVmdXNlZFwiLFwiQ09OTkVDVElPTl9GQUlMRURcIjpcIkNvbm5lY3Rpb24gZmFpbGVkXCIsXCJOQU1FX05PVF9SRVNPTFZFRFwiOlwiRE5TIGxvb2t1cCBmYWlsZWRcIixcIklOVEVSTkVUX0RJU0NPTk5FQ1RFRFwiOlwiQ2Fubm90IHJlYWNoIGFueSBuZXR3b3JrXCIsXCJBRERSRVNTX0lOVkFMSURcIjpcIkludmFsaWQgYWRkcmVzc1wiLFwiQUREUkVTU19VTlJFQUNIQUJMRVwiOlwiTm8gcm91dGUgdG8gaG9zdFwiLFwiSE9TVF9VTlJFQUNIQUJMRVwiOlwiU09DS1MgcHJveHkgc2VydmVyIGNvdWxkIG5vdCByZWFjaCBob3N0XCJ9fSxcImNsb3NlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwib25EaXNjb25uZWN0XCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwiY29ubmVjdFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcIm51bWJlclwiXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcInNlY3VyZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcInBhdXNlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwicmVzdW1lXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwicHJlcGFyZVNlY3VyZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcIndyaXRlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcImJ1ZmZlclwiXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcIm9uRGF0YVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImRhdGFcIjpcImJ1ZmZlclwifX0sXCJsaXN0ZW5cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJudW1iZXJcIl0sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJvbkNvbm5lY3Rpb25cIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJzb2NrZXRcIjpcIm51bWJlclwiLFwiaG9zdFwiOlwic3RyaW5nXCIsXCJwb3J0XCI6XCJudW1iZXJcIn19fX0se1wibmFtZVwiOlwiY29yZS51ZHBzb2NrZXRcIixcImFwaVwiOntcIkVSUkNPREVcIjp7XCJ0eXBlXCI6XCJjb25zdGFudFwiLFwidmFsdWVcIjp7XCJTVUNDRVNTXCI6XCJTdWNjZXNzIVwiLFwiVU5LTk9XTlwiOlwiVW5rbm93biBlcnJvclwiLFwiQUxSRUFEWV9CT1VORFwiOlwiU29ja2V0IGFscmVhZHkgYm91bmRcIixcIkFMUkVBRFlfQ0xPU0VEXCI6XCJTb2NrZXQgYWxyZWFkeSBjbG9zZWRcIixcIklOVkFMSURfQVJHVU1FTlRcIjpcIkludmFsaWQgYXJndW1lbnRcIixcIk5FVFdPUktfQ0hBTkdFRFwiOlwiTmV0d29yayBjaGFuZ2VkXCIsXCJTRU5EX0ZBSUxFRFwiOlwiU2VuZCBmYWlsZWRcIn19LFwiYmluZFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcIm51bWJlclwiXSxcInJldFwiOltdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwiZ2V0SW5mb1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOntcImxvY2FsQWRkcmVzc1wiOlwic3RyaW5nXCIsXCJsb2NhbFBvcnRcIjpcIm51bWJlclwifX0sXCJzZW5kVG9cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wiYnVmZmVyXCIsXCJzdHJpbmdcIixcIm51bWJlclwiXSxcInJldFwiOlwibnVtYmVyXCIsXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJkZXN0cm95XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdfSxcIm9uRGF0YVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcInJlc3VsdENvZGVcIjpcIm51bWJlclwiLFwiYWRkcmVzc1wiOlwic3RyaW5nXCIsXCJwb3J0XCI6XCJudW1iZXJcIixcImRhdGFcIjpcImJ1ZmZlclwifX19fSx7XCJuYW1lXCI6XCJjb3JlLnZpZXdcIixcImFwaVwiOntcInNob3dcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCJdfSxcImlzU2VjdXJlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJib29sZWFuXCJ9LFwiY2xvc2VcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W119LFwicG9zdE1lc3NhZ2VcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wib2JqZWN0XCJdfSxcIm1lc3NhZ2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjpcIm9iamVjdFwifSxcIm9uQ2xvc2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjpbXX19fSx7XCJuYW1lXCI6XCJjb3JlLndlYnNvY2tldFwiLFwiYXBpXCI6e1wiY29uc3RydWN0b3JcIjp7XCJ2YWx1ZVwiOltcInN0cmluZ1wiLFtcImFycmF5XCIsXCJzdHJpbmdcIl1dfSxcInNlbmRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W3tcInRleHRcIjpcInN0cmluZ1wiLFwiYmluYXJ5XCI6XCJibG9iXCIsXCJidWZmZXJcIjpcImJ1ZmZlclwifV0sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJnZXRSZWFkeVN0YXRlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJudW1iZXJcIn0sXCJnZXRCdWZmZXJlZEFtb3VudFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcIm51bWJlclwifSxcImNsb3NlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcIm51bWJlclwiLFwic3RyaW5nXCJdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwib25NZXNzYWdlXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1widGV4dFwiOlwic3RyaW5nXCIsXCJiaW5hcnlcIjpcImJsb2JcIixcImJ1ZmZlclwiOlwiYnVmZmVyXCJ9fSxcIm9uT3BlblwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOltdfSxcIm9uRXJyb3JcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJvbkNsb3NlXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wiY29kZVwiOlwibnVtYmVyXCIsXCJyZWFzb25cIjpcInN0cmluZ1wiLFwid2FzQ2xlYW5cIjpcImJvb2xlYW5cIn19fX0se1wibmFtZVwiOlwiY29yZS54aHJcIixcImFwaVwiOntcIm9wZW5cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJzdHJpbmdcIixcImJvb2xlYW5cIixcInN0cmluZ1wiLFwic3RyaW5nXCJdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwic2VuZFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbe1wic3RyaW5nXCI6XCJzdHJpbmdcIixcImJ1ZmZlclwiOlwiYnVmZmVyXCIsXCJibG9iXCI6XCJibG9iXCJ9XX0sXCJhYm9ydFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXX0sXCJnZXRSZXNwb25zZUhlYWRlclwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcInN0cmluZ1wifSxcImdldEFsbFJlc3BvbnNlSGVhZGVyc1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwic3RyaW5nXCJ9LFwic2V0UmVxdWVzdEhlYWRlclwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcInN0cmluZ1wiXX0sXCJvdmVycmlkZU1pbWVUeXBlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXX0sXCJnZXRSZWFkeVN0YXRlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJudW1iZXJcIn0sXCJnZXRSZXNwb25zZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOntcInN0cmluZ1wiOlwic3RyaW5nXCIsXCJidWZmZXJcIjpcImJ1ZmZlclwiLFwib2JqZWN0XCI6XCJvYmplY3RcIn19LFwiZ2V0UmVzcG9uc2VUZXh0XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJzdHJpbmdcIn0sXCJnZXRSZXNwb25zZVVSTFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwic3RyaW5nXCJ9LFwiZ2V0UmVzcG9uc2VUeXBlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJzdHJpbmdcIn0sXCJzZXRSZXNwb25zZVR5cGVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCJdfSxcImdldFN0YXR1c1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwibnVtYmVyXCJ9LFwiZ2V0U3RhdHVzVGV4dFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwic3RyaW5nXCJ9LFwiZ2V0VGltZW91dFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwibnVtYmVyXCJ9LFwic2V0VGltZW91dFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJudW1iZXJcIl19LFwiZ2V0V2l0aENyZWRlbnRpYWxzXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJib29sZWFuXCJ9LFwic2V0V2l0aENyZWRlbnRpYWxzXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcImJvb2xlYW5cIl19LFwib25sb2Fkc3RhcnRcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJsZW5ndGhDb21wdXRhYmxlXCI6XCJib29sZWFuXCIsXCJsb2FkZWRcIjpcIm51bWJlclwiLFwidG90YWxcIjpcIm51bWJlclwifX0sXCJvbnByb2dyZXNzXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wibGVuZ3RoQ29tcHV0YWJsZVwiOlwiYm9vbGVhblwiLFwibG9hZGVkXCI6XCJudW1iZXJcIixcInRvdGFsXCI6XCJudW1iZXJcIn19LFwib25hYm9ydFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImxlbmd0aENvbXB1dGFibGVcIjpcImJvb2xlYW5cIixcImxvYWRlZFwiOlwibnVtYmVyXCIsXCJ0b3RhbFwiOlwibnVtYmVyXCJ9fSxcIm9uZXJyb3JcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJsZW5ndGhDb21wdXRhYmxlXCI6XCJib29sZWFuXCIsXCJsb2FkZWRcIjpcIm51bWJlclwiLFwidG90YWxcIjpcIm51bWJlclwifX0sXCJvbmxvYWRcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJsZW5ndGhDb21wdXRhYmxlXCI6XCJib29sZWFuXCIsXCJsb2FkZWRcIjpcIm51bWJlclwiLFwidG90YWxcIjpcIm51bWJlclwifX0sXCJvbnRpbWVvdXRcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJsZW5ndGhDb21wdXRhYmxlXCI6XCJib29sZWFuXCIsXCJsb2FkZWRcIjpcIm51bWJlclwiLFwidG90YWxcIjpcIm51bWJlclwifX0sXCJvbmxvYWRlbmRcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJsZW5ndGhDb21wdXRhYmxlXCI6XCJib29sZWFuXCIsXCJsb2FkZWRcIjpcIm51bWJlclwiLFwidG90YWxcIjpcIm51bWJlclwifX0sXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7fX0sXCJvbnVwbG9hZGxvYWRzdGFydFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImxlbmd0aENvbXB1dGFibGVcIjpcImJvb2xlYW5cIixcImxvYWRlZFwiOlwibnVtYmVyXCIsXCJ0b3RhbFwiOlwibnVtYmVyXCJ9fSxcIm9udXBsb2FkcHJvZ3Jlc3NcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJsZW5ndGhDb21wdXRhYmxlXCI6XCJib29sZWFuXCIsXCJsb2FkZWRcIjpcIm51bWJlclwiLFwidG90YWxcIjpcIm51bWJlclwifX0sXCJvbnVwbG9hZGFib3J0XCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wibGVuZ3RoQ29tcHV0YWJsZVwiOlwiYm9vbGVhblwiLFwibG9hZGVkXCI6XCJudW1iZXJcIixcInRvdGFsXCI6XCJudW1iZXJcIn19LFwib251cGxvYWRlcnJvclwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImxlbmd0aENvbXB1dGFibGVcIjpcImJvb2xlYW5cIixcImxvYWRlZFwiOlwibnVtYmVyXCIsXCJ0b3RhbFwiOlwibnVtYmVyXCJ9fSxcIm9udXBsb2FkbG9hZFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImxlbmd0aENvbXB1dGFibGVcIjpcImJvb2xlYW5cIixcImxvYWRlZFwiOlwibnVtYmVyXCIsXCJ0b3RhbFwiOlwibnVtYmVyXCJ9fSxcIm9udXBsb2FkdGltZW91dFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImxlbmd0aENvbXB1dGFibGVcIjpcImJvb2xlYW5cIixcImxvYWRlZFwiOlwibnVtYmVyXCIsXCJ0b3RhbFwiOlwibnVtYmVyXCJ9fSxcIm9udXBsb2FkbG9hZGVuZFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImxlbmd0aENvbXB1dGFibGVcIjpcImJvb2xlYW5cIixcImxvYWRlZFwiOlwibnVtYmVyXCIsXCJ0b3RhbFwiOlwibnVtYmVyXCJ9fSxcIm9udXBsb2FkcmVhZHlzdGF0ZWNoYW5nZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOnt9fX19LHtcIm5hbWVcIjpcInNvY2lhbFwiLFwiYXBpXCI6e1wiRVJSQ09ERVwiOntcInR5cGVcIjpcImNvbnN0YW50XCIsXCJ2YWx1ZVwiOntcIlNVQ0NFU1NcIjpcIlN1Y2Nlc3MhXCIsXCJVTktOT1dOXCI6XCJVbmtub3duIGVycm9yXCIsXCJPRkZMSU5FXCI6XCJVc2VyIGlzIGN1cnJlbnRseSBvZmZsaW5lXCIsXCJNQUxGT1JNRURQQVJBTUVURVJTXCI6XCJQYXJhbWV0ZXJzIGFyZSBtYWxmb3JtZWRcIixcIkxPR0lOX0JBRENSRURFTlRJQUxTXCI6XCJFcnJvciBhdXRoZW50aWNhdGluZyB3aXRoIHNlcnZlclwiLFwiTE9HSU5fRkFJTEVEQ09OTkVDVElPTlwiOlwiRXJyb3IgY29ubmVjdGluZyB0byBzZXJ2ZXJcIixcIkxPR0lOX0FMUkVBRFlPTkxJTkVcIjpcIlVzZXIgaXMgYWxyZWFkeSBsb2dnZWQgaW5cIixcIkxPR0lOX09BVVRIRVJST1JcIjpcIk9BdXRoIEVycm9yXCIsXCJTRU5EX0lOVkFMSURERVNUSU5BVElPTlwiOlwiTWVzc2FnZSBzZW50IHRvIGFuIGludmFsaWQgZGVzdGluYXRpb25cIn19LFwiU1RBVFVTXCI6e1widHlwZVwiOlwiY29uc3RhbnRcIixcInZhbHVlXCI6e1wiT0ZGTElORVwiOlwiT0ZGTElORVwiLFwiT05MSU5FXCI6XCJPTkxJTkVcIixcIk9OTElORV9XSVRIX09USEVSX0FQUFwiOlwiT05MSU5FX1dJVEhfT1RIRVJfQVBQXCJ9fSxcImxvZ2luXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOlt7XCJhZ2VudFwiOlwic3RyaW5nXCIsXCJ2ZXJzaW9uXCI6XCJzdHJpbmdcIixcInVybFwiOlwic3RyaW5nXCIsXCJpbnRlcmFjdGl2ZVwiOlwiYm9vbGVhblwiLFwicmVtZW1iZXJMb2dpblwiOlwiYm9vbGVhblwifV0sXCJyZXRcIjp7XCJ1c2VySWRcIjpcInN0cmluZ1wiLFwiY2xpZW50SWRcIjpcInN0cmluZ1wiLFwic3RhdHVzXCI6XCJzdHJpbmdcIixcImxhc3RVcGRhdGVkXCI6XCJudW1iZXJcIixcImxhc3RTZWVuXCI6XCJudW1iZXJcIn0sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJjbGVhckNhY2hlZENyZWRlbnRpYWxzXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdfSxcImdldENsaWVudHNcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcIm9iamVjdFwiLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwiZ2V0VXNlcnNcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcIm9iamVjdFwiLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwic2VuZE1lc3NhZ2VcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJzdHJpbmdcIl0sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJsb2dvdXRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJvbk1lc3NhZ2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJmcm9tXCI6e1widXNlcklkXCI6XCJzdHJpbmdcIixcImNsaWVudElkXCI6XCJzdHJpbmdcIixcInN0YXR1c1wiOlwic3RyaW5nXCIsXCJsYXN0VXBkYXRlZFwiOlwibnVtYmVyXCIsXCJsYXN0U2VlblwiOlwibnVtYmVyXCJ9LFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcIm9uVXNlclByb2ZpbGVcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJ1c2VySWRcIjpcInN0cmluZ1wiLFwibGFzdFVwZGF0ZWRcIjpcIm51bWJlclwiLFwibmFtZVwiOlwic3RyaW5nXCIsXCJ1cmxcIjpcInN0cmluZ1wiLFwiaW1hZ2VEYXRhXCI6XCJzdHJpbmdcIn19LFwib25DbGllbnRTdGF0ZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcInVzZXJJZFwiOlwic3RyaW5nXCIsXCJjbGllbnRJZFwiOlwic3RyaW5nXCIsXCJzdGF0dXNcIjpcInN0cmluZ1wiLFwibGFzdFVwZGF0ZWRcIjpcIm51bWJlclwiLFwibGFzdFNlZW5cIjpcIm51bWJlclwifX19fSx7XCJuYW1lXCI6XCJzdG9yYWdlXCIsXCJhcGlcIjp7XCJzY29wZVwiOntcInR5cGVcIjpcImNvbnN0YW50XCIsXCJ2YWx1ZVwiOntcIlNFU1NJT05cIjowLFwiREVWSUNFX0xPQ0FMXCI6MSxcIlVTRVJfTE9DQUxcIjoyLFwiU0hBUkVEXCI6M319LFwiRVJSQ09ERVwiOntcInR5cGVcIjpcImNvbnN0YW50XCIsXCJ2YWx1ZVwiOntcIlNVQ0NFU1NcIjpcIlN1Y2Nlc3MhXCIsXCJVTktOT1dOXCI6XCJVbmtub3duIGVycm9yXCIsXCJPRkZMSU5FXCI6XCJEYXRhYmFzZSBub3QgcmVhY2hhYmxlXCIsXCJNQUxGT1JNRURQQVJBTUVURVJTXCI6XCJQYXJhbWV0ZXJzIGFyZSBtYWxmb3JtZWRcIn19LFwiY29uc3RydWN0b3JcIjp7XCJ2YWx1ZVwiOlt7XCJzY29wZVwiOlwibnVtYmVyXCJ9XX0sXCJrZXlzXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6W1wiYXJyYXlcIixcInN0cmluZ1wiXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcImdldFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcInN0cmluZ1wiLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwic2V0XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwic3RyaW5nXCJdLFwicmV0XCI6XCJzdHJpbmdcIixcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcInJlbW92ZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcInN0cmluZ1wiLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwiY2xlYXJcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpbXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fX19LHtcIm5hbWVcIjpcInN0b3JlYnVmZmVyXCIsXCJhcGlcIjp7XCJzY29wZVwiOntcInR5cGVcIjpcImNvbnN0YW50XCIsXCJ2YWx1ZVwiOntcIlNFU1NJT05cIjowLFwiREVWSUNFX0xPQ0FMXCI6MSxcIlVTRVJfTE9DQUxcIjoyLFwiU0hBUkVEXCI6M319LFwiRVJSQ09ERVwiOntcInR5cGVcIjpcImNvbnN0YW50XCIsXCJ2YWx1ZVwiOntcIlNVQ0NFU1NcIjpcIlN1Y2Nlc3MhXCIsXCJVTktOT1dOXCI6XCJVbmtub3duIGVycm9yXCIsXCJPRkZMSU5FXCI6XCJEYXRhYmFzZSBub3QgcmVhY2hhYmxlXCIsXCJNQUxGT1JNRURQQVJBTUVURVJTXCI6XCJQYXJhbWV0ZXJzIGFyZSBtYWxmb3JtZWRcIn19LFwiY29uc3RydWN0b3JcIjp7XCJ2YWx1ZVwiOlt7XCJzY29wZVwiOlwibnVtYmVyXCJ9XX0sXCJrZXlzXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6W1wiYXJyYXlcIixcInN0cmluZ1wiXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcImdldFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcImJ1ZmZlclwiLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwic2V0XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwiYnVmZmVyXCJdLFwicmV0XCI6XCJidWZmZXJcIixcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcInJlbW92ZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcImJ1ZmZlclwiLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwiY2xlYXJcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpbXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fX19LHtcIm5hbWVcIjpcInRyYW5zcG9ydFwiLFwiYXBpXCI6e1wiRVJSQ09ERVwiOntcInR5cGVcIjpcImNvbnN0YW50XCIsXCJ2YWx1ZVwiOntcIlNVQ0NFU1NcIjpcIlN1Y2Nlc3MhXCIsXCJVTktOT1dOXCI6XCJVbmtub3duIGVycm9yXCIsXCJPRkZMSU5FXCI6XCJOb3QgcmVhY2hhYmxlXCIsXCJNQUxGT1JNRURQQVJBTUVURVJTXCI6XCJQYXJhbWV0ZXJzIGFyZSBtYWxmb3JtZWRcIn19LFwic2V0dXBcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJwcm94eVwiXSxcInJldFwiOltdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwic2VuZFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcImJ1ZmZlclwiXSxcInJldFwiOltdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwiY2xvc2VcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpbXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcIm9uRGF0YVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcInRhZ1wiOlwic3RyaW5nXCIsXCJkYXRhXCI6XCJidWZmZXJcIn19LFwib25DbG9zZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOltdfX19XTtcbiIsIi8qIVxuICogQG92ZXJ2aWV3IGVzNi1wcm9taXNlIC0gYSB0aW55IGltcGxlbWVudGF0aW9uIG9mIFByb21pc2VzL0ErLlxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKGMpIDIwMTQgWWVodWRhIEthdHosIFRvbSBEYWxlLCBTdGVmYW4gUGVubmVyIGFuZCBjb250cmlidXRvcnMgKENvbnZlcnNpb24gdG8gRVM2IEFQSSBieSBKYWtlIEFyY2hpYmFsZClcbiAqIEBsaWNlbnNlICAgTGljZW5zZWQgdW5kZXIgTUlUIGxpY2Vuc2VcbiAqICAgICAgICAgICAgU2VlIGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9zdGVmYW5wZW5uZXIvZXM2LXByb21pc2UvbWFzdGVyL0xJQ0VOU0VcbiAqIEB2ZXJzaW9uICAgMy4zLjFcbiAqL1xuXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcbiAgICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAgIChnbG9iYWwuRVM2UHJvbWlzZSA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gb2JqZWN0T3JGdW5jdGlvbih4KSB7XG4gIHJldHVybiB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgeCA9PT0gJ29iamVjdCcgJiYgeCAhPT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNGdW5jdGlvbih4KSB7XG4gIHJldHVybiB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJztcbn1cblxudmFyIF9pc0FycmF5ID0gdW5kZWZpbmVkO1xuaWYgKCFBcnJheS5pc0FycmF5KSB7XG4gIF9pc0FycmF5ID0gZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHgpID09PSAnW29iamVjdCBBcnJheV0nO1xuICB9O1xufSBlbHNlIHtcbiAgX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xufVxuXG52YXIgaXNBcnJheSA9IF9pc0FycmF5O1xuXG52YXIgbGVuID0gMDtcbnZhciB2ZXJ0eE5leHQgPSB1bmRlZmluZWQ7XG52YXIgY3VzdG9tU2NoZWR1bGVyRm4gPSB1bmRlZmluZWQ7XG5cbnZhciBhc2FwID0gZnVuY3Rpb24gYXNhcChjYWxsYmFjaywgYXJnKSB7XG4gIHF1ZXVlW2xlbl0gPSBjYWxsYmFjaztcbiAgcXVldWVbbGVuICsgMV0gPSBhcmc7XG4gIGxlbiArPSAyO1xuICBpZiAobGVuID09PSAyKSB7XG4gICAgLy8gSWYgbGVuIGlzIDIsIHRoYXQgbWVhbnMgdGhhdCB3ZSBuZWVkIHRvIHNjaGVkdWxlIGFuIGFzeW5jIGZsdXNoLlxuICAgIC8vIElmIGFkZGl0aW9uYWwgY2FsbGJhY2tzIGFyZSBxdWV1ZWQgYmVmb3JlIHRoZSBxdWV1ZSBpcyBmbHVzaGVkLCB0aGV5XG4gICAgLy8gd2lsbCBiZSBwcm9jZXNzZWQgYnkgdGhpcyBmbHVzaCB0aGF0IHdlIGFyZSBzY2hlZHVsaW5nLlxuICAgIGlmIChjdXN0b21TY2hlZHVsZXJGbikge1xuICAgICAgY3VzdG9tU2NoZWR1bGVyRm4oZmx1c2gpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzY2hlZHVsZUZsdXNoKCk7XG4gICAgfVxuICB9XG59O1xuXG5mdW5jdGlvbiBzZXRTY2hlZHVsZXIoc2NoZWR1bGVGbikge1xuICBjdXN0b21TY2hlZHVsZXJGbiA9IHNjaGVkdWxlRm47XG59XG5cbmZ1bmN0aW9uIHNldEFzYXAoYXNhcEZuKSB7XG4gIGFzYXAgPSBhc2FwRm47XG59XG5cbnZhciBicm93c2VyV2luZG93ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB1bmRlZmluZWQ7XG52YXIgYnJvd3Nlckdsb2JhbCA9IGJyb3dzZXJXaW5kb3cgfHwge307XG52YXIgQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIgPSBicm93c2VyR2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgYnJvd3Nlckdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xudmFyIGlzTm9kZSA9IHR5cGVvZiBzZWxmID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgKHt9KS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXSc7XG5cbi8vIHRlc3QgZm9yIHdlYiB3b3JrZXIgYnV0IG5vdCBpbiBJRTEwXG52YXIgaXNXb3JrZXIgPSB0eXBlb2YgVWludDhDbGFtcGVkQXJyYXkgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBpbXBvcnRTY3JpcHRzICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgTWVzc2FnZUNoYW5uZWwgIT09ICd1bmRlZmluZWQnO1xuXG4vLyBub2RlXG5mdW5jdGlvbiB1c2VOZXh0VGljaygpIHtcbiAgLy8gbm9kZSB2ZXJzaW9uIDAuMTAueCBkaXNwbGF5cyBhIGRlcHJlY2F0aW9uIHdhcm5pbmcgd2hlbiBuZXh0VGljayBpcyB1c2VkIHJlY3Vyc2l2ZWx5XG4gIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vY3Vqb2pzL3doZW4vaXNzdWVzLzQxMCBmb3IgZGV0YWlsc1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgfTtcbn1cblxuLy8gdmVydHhcbmZ1bmN0aW9uIHVzZVZlcnR4VGltZXIoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmVydHhOZXh0KGZsdXNoKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdXNlTXV0YXRpb25PYnNlcnZlcigpIHtcbiAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xuICB2YXIgb2JzZXJ2ZXIgPSBuZXcgQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIoZmx1c2gpO1xuICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgb2JzZXJ2ZXIub2JzZXJ2ZShub2RlLCB7IGNoYXJhY3RlckRhdGE6IHRydWUgfSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBub2RlLmRhdGEgPSBpdGVyYXRpb25zID0gKytpdGVyYXRpb25zICUgMjtcbiAgfTtcbn1cblxuLy8gd2ViIHdvcmtlclxuZnVuY3Rpb24gdXNlTWVzc2FnZUNoYW5uZWwoKSB7XG4gIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZmx1c2g7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoMCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHVzZVNldFRpbWVvdXQoKSB7XG4gIC8vIFN0b3JlIHNldFRpbWVvdXQgcmVmZXJlbmNlIHNvIGVzNi1wcm9taXNlIHdpbGwgYmUgdW5hZmZlY3RlZCBieVxuICAvLyBvdGhlciBjb2RlIG1vZGlmeWluZyBzZXRUaW1lb3V0IChsaWtlIHNpbm9uLnVzZUZha2VUaW1lcnMoKSlcbiAgdmFyIGdsb2JhbFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBnbG9iYWxTZXRUaW1lb3V0KGZsdXNoLCAxKTtcbiAgfTtcbn1cblxudmFyIHF1ZXVlID0gbmV3IEFycmF5KDEwMDApO1xuZnVuY3Rpb24gZmx1c2goKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDIpIHtcbiAgICB2YXIgY2FsbGJhY2sgPSBxdWV1ZVtpXTtcbiAgICB2YXIgYXJnID0gcXVldWVbaSArIDFdO1xuXG4gICAgY2FsbGJhY2soYXJnKTtcblxuICAgIHF1ZXVlW2ldID0gdW5kZWZpbmVkO1xuICAgIHF1ZXVlW2kgKyAxXSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGxlbiA9IDA7XG59XG5cbmZ1bmN0aW9uIGF0dGVtcHRWZXJ0eCgpIHtcbiAgdHJ5IHtcbiAgICB2YXIgciA9IHJlcXVpcmU7XG4gICAgdmFyIHZlcnR4ID0gcigndmVydHgnKTtcbiAgICB2ZXJ0eE5leHQgPSB2ZXJ0eC5ydW5Pbkxvb3AgfHwgdmVydHgucnVuT25Db250ZXh0O1xuICAgIHJldHVybiB1c2VWZXJ0eFRpbWVyKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdXNlU2V0VGltZW91dCgpO1xuICB9XG59XG5cbnZhciBzY2hlZHVsZUZsdXNoID0gdW5kZWZpbmVkO1xuLy8gRGVjaWRlIHdoYXQgYXN5bmMgbWV0aG9kIHRvIHVzZSB0byB0cmlnZ2VyaW5nIHByb2Nlc3Npbmcgb2YgcXVldWVkIGNhbGxiYWNrczpcbmlmIChpc05vZGUpIHtcbiAgc2NoZWR1bGVGbHVzaCA9IHVzZU5leHRUaWNrKCk7XG59IGVsc2UgaWYgKEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyKSB7XG4gIHNjaGVkdWxlRmx1c2ggPSB1c2VNdXRhdGlvbk9ic2VydmVyKCk7XG59IGVsc2UgaWYgKGlzV29ya2VyKSB7XG4gIHNjaGVkdWxlRmx1c2ggPSB1c2VNZXNzYWdlQ2hhbm5lbCgpO1xufSBlbHNlIGlmIChicm93c2VyV2luZG93ID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicpIHtcbiAgc2NoZWR1bGVGbHVzaCA9IGF0dGVtcHRWZXJ0eCgpO1xufSBlbHNlIHtcbiAgc2NoZWR1bGVGbHVzaCA9IHVzZVNldFRpbWVvdXQoKTtcbn1cblxuZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxtZW50LCBvblJlamVjdGlvbikge1xuICB2YXIgX2FyZ3VtZW50cyA9IGFyZ3VtZW50cztcblxuICB2YXIgcGFyZW50ID0gdGhpcztcblxuICB2YXIgY2hpbGQgPSBuZXcgdGhpcy5jb25zdHJ1Y3Rvcihub29wKTtcblxuICBpZiAoY2hpbGRbUFJPTUlTRV9JRF0gPT09IHVuZGVmaW5lZCkge1xuICAgIG1ha2VQcm9taXNlKGNoaWxkKTtcbiAgfVxuXG4gIHZhciBfc3RhdGUgPSBwYXJlbnQuX3N0YXRlO1xuXG4gIGlmIChfc3RhdGUpIHtcbiAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGNhbGxiYWNrID0gX2FyZ3VtZW50c1tfc3RhdGUgLSAxXTtcbiAgICAgIGFzYXAoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gaW52b2tlQ2FsbGJhY2soX3N0YXRlLCBjaGlsZCwgY2FsbGJhY2ssIHBhcmVudC5fcmVzdWx0KTtcbiAgICAgIH0pO1xuICAgIH0pKCk7XG4gIH0gZWxzZSB7XG4gICAgc3Vic2NyaWJlKHBhcmVudCwgY2hpbGQsIG9uRnVsZmlsbG1lbnQsIG9uUmVqZWN0aW9uKTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZDtcbn1cblxuLyoqXG4gIGBQcm9taXNlLnJlc29sdmVgIHJldHVybnMgYSBwcm9taXNlIHRoYXQgd2lsbCBiZWNvbWUgcmVzb2x2ZWQgd2l0aCB0aGVcbiAgcGFzc2VkIGB2YWx1ZWAuIEl0IGlzIHNob3J0aGFuZCBmb3IgdGhlIGZvbGxvd2luZzpcblxuICBgYGBqYXZhc2NyaXB0XG4gIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICByZXNvbHZlKDEpO1xuICB9KTtcblxuICBwcm9taXNlLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xuICAgIC8vIHZhbHVlID09PSAxXG4gIH0pO1xuICBgYGBcblxuICBJbnN0ZWFkIG9mIHdyaXRpbmcgdGhlIGFib3ZlLCB5b3VyIGNvZGUgbm93IHNpbXBseSBiZWNvbWVzIHRoZSBmb2xsb3dpbmc6XG5cbiAgYGBgamF2YXNjcmlwdFxuICBsZXQgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgxKTtcblxuICBwcm9taXNlLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xuICAgIC8vIHZhbHVlID09PSAxXG4gIH0pO1xuICBgYGBcblxuICBAbWV0aG9kIHJlc29sdmVcbiAgQHN0YXRpY1xuICBAcGFyYW0ge0FueX0gdmFsdWUgdmFsdWUgdGhhdCB0aGUgcmV0dXJuZWQgcHJvbWlzZSB3aWxsIGJlIHJlc29sdmVkIHdpdGhcbiAgVXNlZnVsIGZvciB0b29saW5nLlxuICBAcmV0dXJuIHtQcm9taXNlfSBhIHByb21pc2UgdGhhdCB3aWxsIGJlY29tZSBmdWxmaWxsZWQgd2l0aCB0aGUgZ2l2ZW5cbiAgYHZhbHVlYFxuKi9cbmZ1bmN0aW9uIHJlc29sdmUob2JqZWN0KSB7XG4gIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gIHZhciBDb25zdHJ1Y3RvciA9IHRoaXM7XG5cbiAgaWYgKG9iamVjdCAmJiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QuY29uc3RydWN0b3IgPT09IENvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfVxuXG4gIHZhciBwcm9taXNlID0gbmV3IENvbnN0cnVjdG9yKG5vb3ApO1xuICBfcmVzb2x2ZShwcm9taXNlLCBvYmplY3QpO1xuICByZXR1cm4gcHJvbWlzZTtcbn1cblxudmFyIFBST01JU0VfSUQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMTYpO1xuXG5mdW5jdGlvbiBub29wKCkge31cblxudmFyIFBFTkRJTkcgPSB2b2lkIDA7XG52YXIgRlVMRklMTEVEID0gMTtcbnZhciBSRUpFQ1RFRCA9IDI7XG5cbnZhciBHRVRfVEhFTl9FUlJPUiA9IG5ldyBFcnJvck9iamVjdCgpO1xuXG5mdW5jdGlvbiBzZWxmRnVsZmlsbG1lbnQoKSB7XG4gIHJldHVybiBuZXcgVHlwZUVycm9yKFwiWW91IGNhbm5vdCByZXNvbHZlIGEgcHJvbWlzZSB3aXRoIGl0c2VsZlwiKTtcbn1cblxuZnVuY3Rpb24gY2Fubm90UmV0dXJuT3duKCkge1xuICByZXR1cm4gbmV3IFR5cGVFcnJvcignQSBwcm9taXNlcyBjYWxsYmFjayBjYW5ub3QgcmV0dXJuIHRoYXQgc2FtZSBwcm9taXNlLicpO1xufVxuXG5mdW5jdGlvbiBnZXRUaGVuKHByb21pc2UpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIEdFVF9USEVOX0VSUk9SLmVycm9yID0gZXJyb3I7XG4gICAgcmV0dXJuIEdFVF9USEVOX0VSUk9SO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRyeVRoZW4odGhlbiwgdmFsdWUsIGZ1bGZpbGxtZW50SGFuZGxlciwgcmVqZWN0aW9uSGFuZGxlcikge1xuICB0cnkge1xuICAgIHRoZW4uY2FsbCh2YWx1ZSwgZnVsZmlsbG1lbnRIYW5kbGVyLCByZWplY3Rpb25IYW5kbGVyKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUZvcmVpZ25UaGVuYWJsZShwcm9taXNlLCB0aGVuYWJsZSwgdGhlbikge1xuICBhc2FwKGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgdmFyIHNlYWxlZCA9IGZhbHNlO1xuICAgIHZhciBlcnJvciA9IHRyeVRoZW4odGhlbiwgdGhlbmFibGUsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHNlYWxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzZWFsZWQgPSB0cnVlO1xuICAgICAgaWYgKHRoZW5hYmxlICE9PSB2YWx1ZSkge1xuICAgICAgICBfcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmdWxmaWxsKHByb21pc2UsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICBpZiAoc2VhbGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHNlYWxlZCA9IHRydWU7XG5cbiAgICAgIF9yZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICB9LCAnU2V0dGxlOiAnICsgKHByb21pc2UuX2xhYmVsIHx8ICcgdW5rbm93biBwcm9taXNlJykpO1xuXG4gICAgaWYgKCFzZWFsZWQgJiYgZXJyb3IpIHtcbiAgICAgIHNlYWxlZCA9IHRydWU7XG4gICAgICBfcmVqZWN0KHByb21pc2UsIGVycm9yKTtcbiAgICB9XG4gIH0sIHByb21pc2UpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVPd25UaGVuYWJsZShwcm9taXNlLCB0aGVuYWJsZSkge1xuICBpZiAodGhlbmFibGUuX3N0YXRlID09PSBGVUxGSUxMRUQpIHtcbiAgICBmdWxmaWxsKHByb21pc2UsIHRoZW5hYmxlLl9yZXN1bHQpO1xuICB9IGVsc2UgaWYgKHRoZW5hYmxlLl9zdGF0ZSA9PT0gUkVKRUNURUQpIHtcbiAgICBfcmVqZWN0KHByb21pc2UsIHRoZW5hYmxlLl9yZXN1bHQpO1xuICB9IGVsc2Uge1xuICAgIHN1YnNjcmliZSh0aGVuYWJsZSwgdW5kZWZpbmVkLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBfcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgcmV0dXJuIF9yZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVNYXliZVRoZW5hYmxlKHByb21pc2UsIG1heWJlVGhlbmFibGUsIHRoZW4kJCkge1xuICBpZiAobWF5YmVUaGVuYWJsZS5jb25zdHJ1Y3RvciA9PT0gcHJvbWlzZS5jb25zdHJ1Y3RvciAmJiB0aGVuJCQgPT09IHRoZW4gJiYgbWF5YmVUaGVuYWJsZS5jb25zdHJ1Y3Rvci5yZXNvbHZlID09PSByZXNvbHZlKSB7XG4gICAgaGFuZGxlT3duVGhlbmFibGUocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHRoZW4kJCA9PT0gR0VUX1RIRU5fRVJST1IpIHtcbiAgICAgIF9yZWplY3QocHJvbWlzZSwgR0VUX1RIRU5fRVJST1IuZXJyb3IpO1xuICAgIH0gZWxzZSBpZiAodGhlbiQkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGZ1bGZpbGwocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSk7XG4gICAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKHRoZW4kJCkpIHtcbiAgICAgIGhhbmRsZUZvcmVpZ25UaGVuYWJsZShwcm9taXNlLCBtYXliZVRoZW5hYmxlLCB0aGVuJCQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmdWxmaWxsKHByb21pc2UsIG1heWJlVGhlbmFibGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBfcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSkge1xuICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHtcbiAgICBfcmVqZWN0KHByb21pc2UsIHNlbGZGdWxmaWxsbWVudCgpKTtcbiAgfSBlbHNlIGlmIChvYmplY3RPckZ1bmN0aW9uKHZhbHVlKSkge1xuICAgIGhhbmRsZU1heWJlVGhlbmFibGUocHJvbWlzZSwgdmFsdWUsIGdldFRoZW4odmFsdWUpKTtcbiAgfSBlbHNlIHtcbiAgICBmdWxmaWxsKHByb21pc2UsIHZhbHVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwdWJsaXNoUmVqZWN0aW9uKHByb21pc2UpIHtcbiAgaWYgKHByb21pc2UuX29uZXJyb3IpIHtcbiAgICBwcm9taXNlLl9vbmVycm9yKHByb21pc2UuX3Jlc3VsdCk7XG4gIH1cblxuICBwdWJsaXNoKHByb21pc2UpO1xufVxuXG5mdW5jdGlvbiBmdWxmaWxsKHByb21pc2UsIHZhbHVlKSB7XG4gIGlmIChwcm9taXNlLl9zdGF0ZSAhPT0gUEVORElORykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHByb21pc2UuX3Jlc3VsdCA9IHZhbHVlO1xuICBwcm9taXNlLl9zdGF0ZSA9IEZVTEZJTExFRDtcblxuICBpZiAocHJvbWlzZS5fc3Vic2NyaWJlcnMubGVuZ3RoICE9PSAwKSB7XG4gICAgYXNhcChwdWJsaXNoLCBwcm9taXNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfcmVqZWN0KHByb21pc2UsIHJlYXNvbikge1xuICBpZiAocHJvbWlzZS5fc3RhdGUgIT09IFBFTkRJTkcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgcHJvbWlzZS5fc3RhdGUgPSBSRUpFQ1RFRDtcbiAgcHJvbWlzZS5fcmVzdWx0ID0gcmVhc29uO1xuXG4gIGFzYXAocHVibGlzaFJlamVjdGlvbiwgcHJvbWlzZSk7XG59XG5cbmZ1bmN0aW9uIHN1YnNjcmliZShwYXJlbnQsIGNoaWxkLCBvbkZ1bGZpbGxtZW50LCBvblJlamVjdGlvbikge1xuICB2YXIgX3N1YnNjcmliZXJzID0gcGFyZW50Ll9zdWJzY3JpYmVycztcbiAgdmFyIGxlbmd0aCA9IF9zdWJzY3JpYmVycy5sZW5ndGg7XG5cbiAgcGFyZW50Ll9vbmVycm9yID0gbnVsbDtcblxuICBfc3Vic2NyaWJlcnNbbGVuZ3RoXSA9IGNoaWxkO1xuICBfc3Vic2NyaWJlcnNbbGVuZ3RoICsgRlVMRklMTEVEXSA9IG9uRnVsZmlsbG1lbnQ7XG4gIF9zdWJzY3JpYmVyc1tsZW5ndGggKyBSRUpFQ1RFRF0gPSBvblJlamVjdGlvbjtcblxuICBpZiAobGVuZ3RoID09PSAwICYmIHBhcmVudC5fc3RhdGUpIHtcbiAgICBhc2FwKHB1Ymxpc2gsIHBhcmVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHVibGlzaChwcm9taXNlKSB7XG4gIHZhciBzdWJzY3JpYmVycyA9IHByb21pc2UuX3N1YnNjcmliZXJzO1xuICB2YXIgc2V0dGxlZCA9IHByb21pc2UuX3N0YXRlO1xuXG4gIGlmIChzdWJzY3JpYmVycy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgY2hpbGQgPSB1bmRlZmluZWQsXG4gICAgICBjYWxsYmFjayA9IHVuZGVmaW5lZCxcbiAgICAgIGRldGFpbCA9IHByb21pc2UuX3Jlc3VsdDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN1YnNjcmliZXJzLmxlbmd0aDsgaSArPSAzKSB7XG4gICAgY2hpbGQgPSBzdWJzY3JpYmVyc1tpXTtcbiAgICBjYWxsYmFjayA9IHN1YnNjcmliZXJzW2kgKyBzZXR0bGVkXTtcblxuICAgIGlmIChjaGlsZCkge1xuICAgICAgaW52b2tlQ2FsbGJhY2soc2V0dGxlZCwgY2hpbGQsIGNhbGxiYWNrLCBkZXRhaWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjayhkZXRhaWwpO1xuICAgIH1cbiAgfVxuXG4gIHByb21pc2UuX3N1YnNjcmliZXJzLmxlbmd0aCA9IDA7XG59XG5cbmZ1bmN0aW9uIEVycm9yT2JqZWN0KCkge1xuICB0aGlzLmVycm9yID0gbnVsbDtcbn1cblxudmFyIFRSWV9DQVRDSF9FUlJPUiA9IG5ldyBFcnJvck9iamVjdCgpO1xuXG5mdW5jdGlvbiB0cnlDYXRjaChjYWxsYmFjaywgZGV0YWlsKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrKGRldGFpbCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBUUllfQ0FUQ0hfRVJST1IuZXJyb3IgPSBlO1xuICAgIHJldHVybiBUUllfQ0FUQ0hfRVJST1I7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW52b2tlQ2FsbGJhY2soc2V0dGxlZCwgcHJvbWlzZSwgY2FsbGJhY2ssIGRldGFpbCkge1xuICB2YXIgaGFzQ2FsbGJhY2sgPSBpc0Z1bmN0aW9uKGNhbGxiYWNrKSxcbiAgICAgIHZhbHVlID0gdW5kZWZpbmVkLFxuICAgICAgZXJyb3IgPSB1bmRlZmluZWQsXG4gICAgICBzdWNjZWVkZWQgPSB1bmRlZmluZWQsXG4gICAgICBmYWlsZWQgPSB1bmRlZmluZWQ7XG5cbiAgaWYgKGhhc0NhbGxiYWNrKSB7XG4gICAgdmFsdWUgPSB0cnlDYXRjaChjYWxsYmFjaywgZGV0YWlsKTtcblxuICAgIGlmICh2YWx1ZSA9PT0gVFJZX0NBVENIX0VSUk9SKSB7XG4gICAgICBmYWlsZWQgPSB0cnVlO1xuICAgICAgZXJyb3IgPSB2YWx1ZS5lcnJvcjtcbiAgICAgIHZhbHVlID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3VjY2VlZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHtcbiAgICAgIF9yZWplY3QocHJvbWlzZSwgY2Fubm90UmV0dXJuT3duKCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YWx1ZSA9IGRldGFpbDtcbiAgICBzdWNjZWVkZWQgPSB0cnVlO1xuICB9XG5cbiAgaWYgKHByb21pc2UuX3N0YXRlICE9PSBQRU5ESU5HKSB7XG4gICAgLy8gbm9vcFxuICB9IGVsc2UgaWYgKGhhc0NhbGxiYWNrICYmIHN1Y2NlZWRlZCkge1xuICAgICAgX3Jlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoZmFpbGVkKSB7XG4gICAgICBfcmVqZWN0KHByb21pc2UsIGVycm9yKTtcbiAgICB9IGVsc2UgaWYgKHNldHRsZWQgPT09IEZVTEZJTExFRCkge1xuICAgICAgZnVsZmlsbChwcm9taXNlLCB2YWx1ZSk7XG4gICAgfSBlbHNlIGlmIChzZXR0bGVkID09PSBSRUpFQ1RFRCkge1xuICAgICAgX3JlamVjdChwcm9taXNlLCB2YWx1ZSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplUHJvbWlzZShwcm9taXNlLCByZXNvbHZlcikge1xuICB0cnkge1xuICAgIHJlc29sdmVyKGZ1bmN0aW9uIHJlc29sdmVQcm9taXNlKHZhbHVlKSB7XG4gICAgICBfcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgfSwgZnVuY3Rpb24gcmVqZWN0UHJvbWlzZShyZWFzb24pIHtcbiAgICAgIF9yZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIF9yZWplY3QocHJvbWlzZSwgZSk7XG4gIH1cbn1cblxudmFyIGlkID0gMDtcbmZ1bmN0aW9uIG5leHRJZCgpIHtcbiAgcmV0dXJuIGlkKys7XG59XG5cbmZ1bmN0aW9uIG1ha2VQcm9taXNlKHByb21pc2UpIHtcbiAgcHJvbWlzZVtQUk9NSVNFX0lEXSA9IGlkKys7XG4gIHByb21pc2UuX3N0YXRlID0gdW5kZWZpbmVkO1xuICBwcm9taXNlLl9yZXN1bHQgPSB1bmRlZmluZWQ7XG4gIHByb21pc2UuX3N1YnNjcmliZXJzID0gW107XG59XG5cbmZ1bmN0aW9uIEVudW1lcmF0b3IoQ29uc3RydWN0b3IsIGlucHV0KSB7XG4gIHRoaXMuX2luc3RhbmNlQ29uc3RydWN0b3IgPSBDb25zdHJ1Y3RvcjtcbiAgdGhpcy5wcm9taXNlID0gbmV3IENvbnN0cnVjdG9yKG5vb3ApO1xuXG4gIGlmICghdGhpcy5wcm9taXNlW1BST01JU0VfSURdKSB7XG4gICAgbWFrZVByb21pc2UodGhpcy5wcm9taXNlKTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KGlucHV0KSkge1xuICAgIHRoaXMuX2lucHV0ID0gaW5wdXQ7XG4gICAgdGhpcy5sZW5ndGggPSBpbnB1dC5sZW5ndGg7XG4gICAgdGhpcy5fcmVtYWluaW5nID0gaW5wdXQubGVuZ3RoO1xuXG4gICAgdGhpcy5fcmVzdWx0ID0gbmV3IEFycmF5KHRoaXMubGVuZ3RoKTtcblxuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZnVsZmlsbCh0aGlzLnByb21pc2UsIHRoaXMuX3Jlc3VsdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGVuZ3RoID0gdGhpcy5sZW5ndGggfHwgMDtcbiAgICAgIHRoaXMuX2VudW1lcmF0ZSgpO1xuICAgICAgaWYgKHRoaXMuX3JlbWFpbmluZyA9PT0gMCkge1xuICAgICAgICBmdWxmaWxsKHRoaXMucHJvbWlzZSwgdGhpcy5fcmVzdWx0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgX3JlamVjdCh0aGlzLnByb21pc2UsIHZhbGlkYXRpb25FcnJvcigpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBuZXcgRXJyb3IoJ0FycmF5IE1ldGhvZHMgbXVzdCBiZSBwcm92aWRlZCBhbiBBcnJheScpO1xufTtcblxuRW51bWVyYXRvci5wcm90b3R5cGUuX2VudW1lcmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xuICB2YXIgX2lucHV0ID0gdGhpcy5faW5wdXQ7XG5cbiAgZm9yICh2YXIgaSA9IDA7IHRoaXMuX3N0YXRlID09PSBQRU5ESU5HICYmIGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHRoaXMuX2VhY2hFbnRyeShfaW5wdXRbaV0sIGkpO1xuICB9XG59O1xuXG5FbnVtZXJhdG9yLnByb3RvdHlwZS5fZWFjaEVudHJ5ID0gZnVuY3Rpb24gKGVudHJ5LCBpKSB7XG4gIHZhciBjID0gdGhpcy5faW5zdGFuY2VDb25zdHJ1Y3RvcjtcbiAgdmFyIHJlc29sdmUkJCA9IGMucmVzb2x2ZTtcblxuICBpZiAocmVzb2x2ZSQkID09PSByZXNvbHZlKSB7XG4gICAgdmFyIF90aGVuID0gZ2V0VGhlbihlbnRyeSk7XG5cbiAgICBpZiAoX3RoZW4gPT09IHRoZW4gJiYgZW50cnkuX3N0YXRlICE9PSBQRU5ESU5HKSB7XG4gICAgICB0aGlzLl9zZXR0bGVkQXQoZW50cnkuX3N0YXRlLCBpLCBlbnRyeS5fcmVzdWx0KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBfdGhlbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5fcmVtYWluaW5nLS07XG4gICAgICB0aGlzLl9yZXN1bHRbaV0gPSBlbnRyeTtcbiAgICB9IGVsc2UgaWYgKGMgPT09IFByb21pc2UpIHtcbiAgICAgIHZhciBwcm9taXNlID0gbmV3IGMobm9vcCk7XG4gICAgICBoYW5kbGVNYXliZVRoZW5hYmxlKHByb21pc2UsIGVudHJ5LCBfdGhlbik7XG4gICAgICB0aGlzLl93aWxsU2V0dGxlQXQocHJvbWlzZSwgaSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3dpbGxTZXR0bGVBdChuZXcgYyhmdW5jdGlvbiAocmVzb2x2ZSQkKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlJCQoZW50cnkpO1xuICAgICAgfSksIGkpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aGlzLl93aWxsU2V0dGxlQXQocmVzb2x2ZSQkKGVudHJ5KSwgaSk7XG4gIH1cbn07XG5cbkVudW1lcmF0b3IucHJvdG90eXBlLl9zZXR0bGVkQXQgPSBmdW5jdGlvbiAoc3RhdGUsIGksIHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcy5wcm9taXNlO1xuXG4gIGlmIChwcm9taXNlLl9zdGF0ZSA9PT0gUEVORElORykge1xuICAgIHRoaXMuX3JlbWFpbmluZy0tO1xuXG4gICAgaWYgKHN0YXRlID09PSBSRUpFQ1RFRCkge1xuICAgICAgX3JlamVjdChwcm9taXNlLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3Jlc3VsdFtpXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aGlzLl9yZW1haW5pbmcgPT09IDApIHtcbiAgICBmdWxmaWxsKHByb21pc2UsIHRoaXMuX3Jlc3VsdCk7XG4gIH1cbn07XG5cbkVudW1lcmF0b3IucHJvdG90eXBlLl93aWxsU2V0dGxlQXQgPSBmdW5jdGlvbiAocHJvbWlzZSwgaSkge1xuICB2YXIgZW51bWVyYXRvciA9IHRoaXM7XG5cbiAgc3Vic2NyaWJlKHByb21pc2UsIHVuZGVmaW5lZCwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIGVudW1lcmF0b3IuX3NldHRsZWRBdChGVUxGSUxMRUQsIGksIHZhbHVlKTtcbiAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgIHJldHVybiBlbnVtZXJhdG9yLl9zZXR0bGVkQXQoUkVKRUNURUQsIGksIHJlYXNvbik7XG4gIH0pO1xufTtcblxuLyoqXG4gIGBQcm9taXNlLmFsbGAgYWNjZXB0cyBhbiBhcnJheSBvZiBwcm9taXNlcywgYW5kIHJldHVybnMgYSBuZXcgcHJvbWlzZSB3aGljaFxuICBpcyBmdWxmaWxsZWQgd2l0aCBhbiBhcnJheSBvZiBmdWxmaWxsbWVudCB2YWx1ZXMgZm9yIHRoZSBwYXNzZWQgcHJvbWlzZXMsIG9yXG4gIHJlamVjdGVkIHdpdGggdGhlIHJlYXNvbiBvZiB0aGUgZmlyc3QgcGFzc2VkIHByb21pc2UgdG8gYmUgcmVqZWN0ZWQuIEl0IGNhc3RzIGFsbFxuICBlbGVtZW50cyBvZiB0aGUgcGFzc2VkIGl0ZXJhYmxlIHRvIHByb21pc2VzIGFzIGl0IHJ1bnMgdGhpcyBhbGdvcml0aG0uXG5cbiAgRXhhbXBsZTpcblxuICBgYGBqYXZhc2NyaXB0XG4gIGxldCBwcm9taXNlMSA9IHJlc29sdmUoMSk7XG4gIGxldCBwcm9taXNlMiA9IHJlc29sdmUoMik7XG4gIGxldCBwcm9taXNlMyA9IHJlc29sdmUoMyk7XG4gIGxldCBwcm9taXNlcyA9IFsgcHJvbWlzZTEsIHByb21pc2UyLCBwcm9taXNlMyBdO1xuXG4gIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKGZ1bmN0aW9uKGFycmF5KXtcbiAgICAvLyBUaGUgYXJyYXkgaGVyZSB3b3VsZCBiZSBbIDEsIDIsIDMgXTtcbiAgfSk7XG4gIGBgYFxuXG4gIElmIGFueSBvZiB0aGUgYHByb21pc2VzYCBnaXZlbiB0byBgYWxsYCBhcmUgcmVqZWN0ZWQsIHRoZSBmaXJzdCBwcm9taXNlXG4gIHRoYXQgaXMgcmVqZWN0ZWQgd2lsbCBiZSBnaXZlbiBhcyBhbiBhcmd1bWVudCB0byB0aGUgcmV0dXJuZWQgcHJvbWlzZXMnc1xuICByZWplY3Rpb24gaGFuZGxlci4gRm9yIGV4YW1wbGU6XG5cbiAgRXhhbXBsZTpcblxuICBgYGBqYXZhc2NyaXB0XG4gIGxldCBwcm9taXNlMSA9IHJlc29sdmUoMSk7XG4gIGxldCBwcm9taXNlMiA9IHJlamVjdChuZXcgRXJyb3IoXCIyXCIpKTtcbiAgbGV0IHByb21pc2UzID0gcmVqZWN0KG5ldyBFcnJvcihcIjNcIikpO1xuICBsZXQgcHJvbWlzZXMgPSBbIHByb21pc2UxLCBwcm9taXNlMiwgcHJvbWlzZTMgXTtcblxuICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbihhcnJheSl7XG4gICAgLy8gQ29kZSBoZXJlIG5ldmVyIHJ1bnMgYmVjYXVzZSB0aGVyZSBhcmUgcmVqZWN0ZWQgcHJvbWlzZXMhXG4gIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgLy8gZXJyb3IubWVzc2FnZSA9PT0gXCIyXCJcbiAgfSk7XG4gIGBgYFxuXG4gIEBtZXRob2QgYWxsXG4gIEBzdGF0aWNcbiAgQHBhcmFtIHtBcnJheX0gZW50cmllcyBhcnJheSBvZiBwcm9taXNlc1xuICBAcGFyYW0ge1N0cmluZ30gbGFiZWwgb3B0aW9uYWwgc3RyaW5nIGZvciBsYWJlbGluZyB0aGUgcHJvbWlzZS5cbiAgVXNlZnVsIGZvciB0b29saW5nLlxuICBAcmV0dXJuIHtQcm9taXNlfSBwcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdoZW4gYWxsIGBwcm9taXNlc2AgaGF2ZSBiZWVuXG4gIGZ1bGZpbGxlZCwgb3IgcmVqZWN0ZWQgaWYgYW55IG9mIHRoZW0gYmVjb21lIHJlamVjdGVkLlxuICBAc3RhdGljXG4qL1xuZnVuY3Rpb24gYWxsKGVudHJpZXMpIHtcbiAgcmV0dXJuIG5ldyBFbnVtZXJhdG9yKHRoaXMsIGVudHJpZXMpLnByb21pc2U7XG59XG5cbi8qKlxuICBgUHJvbWlzZS5yYWNlYCByZXR1cm5zIGEgbmV3IHByb21pc2Ugd2hpY2ggaXMgc2V0dGxlZCBpbiB0aGUgc2FtZSB3YXkgYXMgdGhlXG4gIGZpcnN0IHBhc3NlZCBwcm9taXNlIHRvIHNldHRsZS5cblxuICBFeGFtcGxlOlxuXG4gIGBgYGphdmFzY3JpcHRcbiAgbGV0IHByb21pc2UxID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICByZXNvbHZlKCdwcm9taXNlIDEnKTtcbiAgICB9LCAyMDApO1xuICB9KTtcblxuICBsZXQgcHJvbWlzZTIgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIHJlc29sdmUoJ3Byb21pc2UgMicpO1xuICAgIH0sIDEwMCk7XG4gIH0pO1xuXG4gIFByb21pc2UucmFjZShbcHJvbWlzZTEsIHByb21pc2UyXSkudGhlbihmdW5jdGlvbihyZXN1bHQpe1xuICAgIC8vIHJlc3VsdCA9PT0gJ3Byb21pc2UgMicgYmVjYXVzZSBpdCB3YXMgcmVzb2x2ZWQgYmVmb3JlIHByb21pc2UxXG4gICAgLy8gd2FzIHJlc29sdmVkLlxuICB9KTtcbiAgYGBgXG5cbiAgYFByb21pc2UucmFjZWAgaXMgZGV0ZXJtaW5pc3RpYyBpbiB0aGF0IG9ubHkgdGhlIHN0YXRlIG9mIHRoZSBmaXJzdFxuICBzZXR0bGVkIHByb21pc2UgbWF0dGVycy4gRm9yIGV4YW1wbGUsIGV2ZW4gaWYgb3RoZXIgcHJvbWlzZXMgZ2l2ZW4gdG8gdGhlXG4gIGBwcm9taXNlc2AgYXJyYXkgYXJndW1lbnQgYXJlIHJlc29sdmVkLCBidXQgdGhlIGZpcnN0IHNldHRsZWQgcHJvbWlzZSBoYXNcbiAgYmVjb21lIHJlamVjdGVkIGJlZm9yZSB0aGUgb3RoZXIgcHJvbWlzZXMgYmVjYW1lIGZ1bGZpbGxlZCwgdGhlIHJldHVybmVkXG4gIHByb21pc2Ugd2lsbCBiZWNvbWUgcmVqZWN0ZWQ6XG5cbiAgYGBgamF2YXNjcmlwdFxuICBsZXQgcHJvbWlzZTEgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIHJlc29sdmUoJ3Byb21pc2UgMScpO1xuICAgIH0sIDIwMCk7XG4gIH0pO1xuXG4gIGxldCBwcm9taXNlMiA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcigncHJvbWlzZSAyJykpO1xuICAgIH0sIDEwMCk7XG4gIH0pO1xuXG4gIFByb21pc2UucmFjZShbcHJvbWlzZTEsIHByb21pc2UyXSkudGhlbihmdW5jdGlvbihyZXN1bHQpe1xuICAgIC8vIENvZGUgaGVyZSBuZXZlciBydW5zXG4gIH0sIGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgLy8gcmVhc29uLm1lc3NhZ2UgPT09ICdwcm9taXNlIDInIGJlY2F1c2UgcHJvbWlzZSAyIGJlY2FtZSByZWplY3RlZCBiZWZvcmVcbiAgICAvLyBwcm9taXNlIDEgYmVjYW1lIGZ1bGZpbGxlZFxuICB9KTtcbiAgYGBgXG5cbiAgQW4gZXhhbXBsZSByZWFsLXdvcmxkIHVzZSBjYXNlIGlzIGltcGxlbWVudGluZyB0aW1lb3V0czpcblxuICBgYGBqYXZhc2NyaXB0XG4gIFByb21pc2UucmFjZShbYWpheCgnZm9vLmpzb24nKSwgdGltZW91dCg1MDAwKV0pXG4gIGBgYFxuXG4gIEBtZXRob2QgcmFjZVxuICBAc3RhdGljXG4gIEBwYXJhbSB7QXJyYXl9IHByb21pc2VzIGFycmF5IG9mIHByb21pc2VzIHRvIG9ic2VydmVcbiAgVXNlZnVsIGZvciB0b29saW5nLlxuICBAcmV0dXJuIHtQcm9taXNlfSBhIHByb21pc2Ugd2hpY2ggc2V0dGxlcyBpbiB0aGUgc2FtZSB3YXkgYXMgdGhlIGZpcnN0IHBhc3NlZFxuICBwcm9taXNlIHRvIHNldHRsZS5cbiovXG5mdW5jdGlvbiByYWNlKGVudHJpZXMpIHtcbiAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgdmFyIENvbnN0cnVjdG9yID0gdGhpcztcblxuICBpZiAoIWlzQXJyYXkoZW50cmllcykpIHtcbiAgICByZXR1cm4gbmV3IENvbnN0cnVjdG9yKGZ1bmN0aW9uIChfLCByZWplY3QpIHtcbiAgICAgIHJldHVybiByZWplY3QobmV3IFR5cGVFcnJvcignWW91IG11c3QgcGFzcyBhbiBhcnJheSB0byByYWNlLicpKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IENvbnN0cnVjdG9yKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBsZW5ndGggPSBlbnRyaWVzLmxlbmd0aDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgQ29uc3RydWN0b3IucmVzb2x2ZShlbnRyaWVzW2ldKS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuLyoqXG4gIGBQcm9taXNlLnJlamVjdGAgcmV0dXJucyBhIHByb21pc2UgcmVqZWN0ZWQgd2l0aCB0aGUgcGFzc2VkIGByZWFzb25gLlxuICBJdCBpcyBzaG9ydGhhbmQgZm9yIHRoZSBmb2xsb3dpbmc6XG5cbiAgYGBgamF2YXNjcmlwdFxuICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgcmVqZWN0KG5ldyBFcnJvcignV0hPT1BTJykpO1xuICB9KTtcblxuICBwcm9taXNlLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xuICAgIC8vIENvZGUgaGVyZSBkb2Vzbid0IHJ1biBiZWNhdXNlIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkIVxuICB9LCBmdW5jdGlvbihyZWFzb24pe1xuICAgIC8vIHJlYXNvbi5tZXNzYWdlID09PSAnV0hPT1BTJ1xuICB9KTtcbiAgYGBgXG5cbiAgSW5zdGVhZCBvZiB3cml0aW5nIHRoZSBhYm92ZSwgeW91ciBjb2RlIG5vdyBzaW1wbHkgYmVjb21lcyB0aGUgZm9sbG93aW5nOlxuXG4gIGBgYGphdmFzY3JpcHRcbiAgbGV0IHByb21pc2UgPSBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ1dIT09QUycpKTtcblxuICBwcm9taXNlLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xuICAgIC8vIENvZGUgaGVyZSBkb2Vzbid0IHJ1biBiZWNhdXNlIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkIVxuICB9LCBmdW5jdGlvbihyZWFzb24pe1xuICAgIC8vIHJlYXNvbi5tZXNzYWdlID09PSAnV0hPT1BTJ1xuICB9KTtcbiAgYGBgXG5cbiAgQG1ldGhvZCByZWplY3RcbiAgQHN0YXRpY1xuICBAcGFyYW0ge0FueX0gcmVhc29uIHZhbHVlIHRoYXQgdGhlIHJldHVybmVkIHByb21pc2Ugd2lsbCBiZSByZWplY3RlZCB3aXRoLlxuICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gIEByZXR1cm4ge1Byb21pc2V9IGEgcHJvbWlzZSByZWplY3RlZCB3aXRoIHRoZSBnaXZlbiBgcmVhc29uYC5cbiovXG5mdW5jdGlvbiByZWplY3QocmVhc29uKSB7XG4gIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gIHZhciBDb25zdHJ1Y3RvciA9IHRoaXM7XG4gIHZhciBwcm9taXNlID0gbmV3IENvbnN0cnVjdG9yKG5vb3ApO1xuICBfcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBuZWVkc1Jlc29sdmVyKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKCdZb3UgbXVzdCBwYXNzIGEgcmVzb2x2ZXIgZnVuY3Rpb24gYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBwcm9taXNlIGNvbnN0cnVjdG9yJyk7XG59XG5cbmZ1bmN0aW9uIG5lZWRzTmV3KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGNvbnN0cnVjdCAnUHJvbWlzZSc6IFBsZWFzZSB1c2UgdGhlICduZXcnIG9wZXJhdG9yLCB0aGlzIG9iamVjdCBjb25zdHJ1Y3RvciBjYW5ub3QgYmUgY2FsbGVkIGFzIGEgZnVuY3Rpb24uXCIpO1xufVxuXG4vKipcbiAgUHJvbWlzZSBvYmplY3RzIHJlcHJlc2VudCB0aGUgZXZlbnR1YWwgcmVzdWx0IG9mIGFuIGFzeW5jaHJvbm91cyBvcGVyYXRpb24uIFRoZVxuICBwcmltYXJ5IHdheSBvZiBpbnRlcmFjdGluZyB3aXRoIGEgcHJvbWlzZSBpcyB0aHJvdWdoIGl0cyBgdGhlbmAgbWV0aG9kLCB3aGljaFxuICByZWdpc3RlcnMgY2FsbGJhY2tzIHRvIHJlY2VpdmUgZWl0aGVyIGEgcHJvbWlzZSdzIGV2ZW50dWFsIHZhbHVlIG9yIHRoZSByZWFzb25cbiAgd2h5IHRoZSBwcm9taXNlIGNhbm5vdCBiZSBmdWxmaWxsZWQuXG5cbiAgVGVybWlub2xvZ3lcbiAgLS0tLS0tLS0tLS1cblxuICAtIGBwcm9taXNlYCBpcyBhbiBvYmplY3Qgb3IgZnVuY3Rpb24gd2l0aCBhIGB0aGVuYCBtZXRob2Qgd2hvc2UgYmVoYXZpb3IgY29uZm9ybXMgdG8gdGhpcyBzcGVjaWZpY2F0aW9uLlxuICAtIGB0aGVuYWJsZWAgaXMgYW4gb2JqZWN0IG9yIGZ1bmN0aW9uIHRoYXQgZGVmaW5lcyBhIGB0aGVuYCBtZXRob2QuXG4gIC0gYHZhbHVlYCBpcyBhbnkgbGVnYWwgSmF2YVNjcmlwdCB2YWx1ZSAoaW5jbHVkaW5nIHVuZGVmaW5lZCwgYSB0aGVuYWJsZSwgb3IgYSBwcm9taXNlKS5cbiAgLSBgZXhjZXB0aW9uYCBpcyBhIHZhbHVlIHRoYXQgaXMgdGhyb3duIHVzaW5nIHRoZSB0aHJvdyBzdGF0ZW1lbnQuXG4gIC0gYHJlYXNvbmAgaXMgYSB2YWx1ZSB0aGF0IGluZGljYXRlcyB3aHkgYSBwcm9taXNlIHdhcyByZWplY3RlZC5cbiAgLSBgc2V0dGxlZGAgdGhlIGZpbmFsIHJlc3Rpbmcgc3RhdGUgb2YgYSBwcm9taXNlLCBmdWxmaWxsZWQgb3IgcmVqZWN0ZWQuXG5cbiAgQSBwcm9taXNlIGNhbiBiZSBpbiBvbmUgb2YgdGhyZWUgc3RhdGVzOiBwZW5kaW5nLCBmdWxmaWxsZWQsIG9yIHJlamVjdGVkLlxuXG4gIFByb21pc2VzIHRoYXQgYXJlIGZ1bGZpbGxlZCBoYXZlIGEgZnVsZmlsbG1lbnQgdmFsdWUgYW5kIGFyZSBpbiB0aGUgZnVsZmlsbGVkXG4gIHN0YXRlLiAgUHJvbWlzZXMgdGhhdCBhcmUgcmVqZWN0ZWQgaGF2ZSBhIHJlamVjdGlvbiByZWFzb24gYW5kIGFyZSBpbiB0aGVcbiAgcmVqZWN0ZWQgc3RhdGUuICBBIGZ1bGZpbGxtZW50IHZhbHVlIGlzIG5ldmVyIGEgdGhlbmFibGUuXG5cbiAgUHJvbWlzZXMgY2FuIGFsc28gYmUgc2FpZCB0byAqcmVzb2x2ZSogYSB2YWx1ZS4gIElmIHRoaXMgdmFsdWUgaXMgYWxzbyBhXG4gIHByb21pc2UsIHRoZW4gdGhlIG9yaWdpbmFsIHByb21pc2UncyBzZXR0bGVkIHN0YXRlIHdpbGwgbWF0Y2ggdGhlIHZhbHVlJ3NcbiAgc2V0dGxlZCBzdGF0ZS4gIFNvIGEgcHJvbWlzZSB0aGF0ICpyZXNvbHZlcyogYSBwcm9taXNlIHRoYXQgcmVqZWN0cyB3aWxsXG4gIGl0c2VsZiByZWplY3QsIGFuZCBhIHByb21pc2UgdGhhdCAqcmVzb2x2ZXMqIGEgcHJvbWlzZSB0aGF0IGZ1bGZpbGxzIHdpbGxcbiAgaXRzZWxmIGZ1bGZpbGwuXG5cblxuICBCYXNpYyBVc2FnZTpcbiAgLS0tLS0tLS0tLS0tXG5cbiAgYGBganNcbiAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAvLyBvbiBzdWNjZXNzXG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG5cbiAgICAvLyBvbiBmYWlsdXJlXG4gICAgcmVqZWN0KHJlYXNvbik7XG4gIH0pO1xuXG4gIHByb21pc2UudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgIC8vIG9uIGZ1bGZpbGxtZW50XG4gIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgIC8vIG9uIHJlamVjdGlvblxuICB9KTtcbiAgYGBgXG5cbiAgQWR2YW5jZWQgVXNhZ2U6XG4gIC0tLS0tLS0tLS0tLS0tLVxuXG4gIFByb21pc2VzIHNoaW5lIHdoZW4gYWJzdHJhY3RpbmcgYXdheSBhc3luY2hyb25vdXMgaW50ZXJhY3Rpb25zIHN1Y2ggYXNcbiAgYFhNTEh0dHBSZXF1ZXN0YHMuXG5cbiAgYGBganNcbiAgZnVuY3Rpb24gZ2V0SlNPTih1cmwpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgeGhyLm9wZW4oJ0dFVCcsIHVybCk7XG4gICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gaGFuZGxlcjtcbiAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnanNvbic7XG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgIHhoci5zZW5kKCk7XG5cbiAgICAgIGZ1bmN0aW9uIGhhbmRsZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IHRoaXMuRE9ORSkge1xuICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICByZXNvbHZlKHRoaXMucmVzcG9uc2UpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdnZXRKU09OOiBgJyArIHVybCArICdgIGZhaWxlZCB3aXRoIHN0YXR1czogWycgKyB0aGlzLnN0YXR1cyArICddJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldEpTT04oJy9wb3N0cy5qc29uJykudGhlbihmdW5jdGlvbihqc29uKSB7XG4gICAgLy8gb24gZnVsZmlsbG1lbnRcbiAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgLy8gb24gcmVqZWN0aW9uXG4gIH0pO1xuICBgYGBcblxuICBVbmxpa2UgY2FsbGJhY2tzLCBwcm9taXNlcyBhcmUgZ3JlYXQgY29tcG9zYWJsZSBwcmltaXRpdmVzLlxuXG4gIGBgYGpzXG4gIFByb21pc2UuYWxsKFtcbiAgICBnZXRKU09OKCcvcG9zdHMnKSxcbiAgICBnZXRKU09OKCcvY29tbWVudHMnKVxuICBdKS50aGVuKGZ1bmN0aW9uKHZhbHVlcyl7XG4gICAgdmFsdWVzWzBdIC8vID0+IHBvc3RzSlNPTlxuICAgIHZhbHVlc1sxXSAvLyA9PiBjb21tZW50c0pTT05cblxuICAgIHJldHVybiB2YWx1ZXM7XG4gIH0pO1xuICBgYGBcblxuICBAY2xhc3MgUHJvbWlzZVxuICBAcGFyYW0ge2Z1bmN0aW9ufSByZXNvbHZlclxuICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gIEBjb25zdHJ1Y3RvclxuKi9cbmZ1bmN0aW9uIFByb21pc2UocmVzb2x2ZXIpIHtcbiAgdGhpc1tQUk9NSVNFX0lEXSA9IG5leHRJZCgpO1xuICB0aGlzLl9yZXN1bHQgPSB0aGlzLl9zdGF0ZSA9IHVuZGVmaW5lZDtcbiAgdGhpcy5fc3Vic2NyaWJlcnMgPSBbXTtcblxuICBpZiAobm9vcCAhPT0gcmVzb2x2ZXIpIHtcbiAgICB0eXBlb2YgcmVzb2x2ZXIgIT09ICdmdW5jdGlvbicgJiYgbmVlZHNSZXNvbHZlcigpO1xuICAgIHRoaXMgaW5zdGFuY2VvZiBQcm9taXNlID8gaW5pdGlhbGl6ZVByb21pc2UodGhpcywgcmVzb2x2ZXIpIDogbmVlZHNOZXcoKTtcbiAgfVxufVxuXG5Qcm9taXNlLmFsbCA9IGFsbDtcblByb21pc2UucmFjZSA9IHJhY2U7XG5Qcm9taXNlLnJlc29sdmUgPSByZXNvbHZlO1xuUHJvbWlzZS5yZWplY3QgPSByZWplY3Q7XG5Qcm9taXNlLl9zZXRTY2hlZHVsZXIgPSBzZXRTY2hlZHVsZXI7XG5Qcm9taXNlLl9zZXRBc2FwID0gc2V0QXNhcDtcblByb21pc2UuX2FzYXAgPSBhc2FwO1xuXG5Qcm9taXNlLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IFByb21pc2UsXG5cbiAgLyoqXG4gICAgVGhlIHByaW1hcnkgd2F5IG9mIGludGVyYWN0aW5nIHdpdGggYSBwcm9taXNlIGlzIHRocm91Z2ggaXRzIGB0aGVuYCBtZXRob2QsXG4gICAgd2hpY2ggcmVnaXN0ZXJzIGNhbGxiYWNrcyB0byByZWNlaXZlIGVpdGhlciBhIHByb21pc2UncyBldmVudHVhbCB2YWx1ZSBvciB0aGVcbiAgICByZWFzb24gd2h5IHRoZSBwcm9taXNlIGNhbm5vdCBiZSBmdWxmaWxsZWQuXG4gIFxuICAgIGBgYGpzXG4gICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uKHVzZXIpe1xuICAgICAgLy8gdXNlciBpcyBhdmFpbGFibGVcbiAgICB9LCBmdW5jdGlvbihyZWFzb24pe1xuICAgICAgLy8gdXNlciBpcyB1bmF2YWlsYWJsZSwgYW5kIHlvdSBhcmUgZ2l2ZW4gdGhlIHJlYXNvbiB3aHlcbiAgICB9KTtcbiAgICBgYGBcbiAgXG4gICAgQ2hhaW5pbmdcbiAgICAtLS0tLS0tLVxuICBcbiAgICBUaGUgcmV0dXJuIHZhbHVlIG9mIGB0aGVuYCBpcyBpdHNlbGYgYSBwcm9taXNlLiAgVGhpcyBzZWNvbmQsICdkb3duc3RyZWFtJ1xuICAgIHByb21pc2UgaXMgcmVzb2x2ZWQgd2l0aCB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBmaXJzdCBwcm9taXNlJ3MgZnVsZmlsbG1lbnRcbiAgICBvciByZWplY3Rpb24gaGFuZGxlciwgb3IgcmVqZWN0ZWQgaWYgdGhlIGhhbmRsZXIgdGhyb3dzIGFuIGV4Y2VwdGlvbi5cbiAgXG4gICAgYGBganNcbiAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgIHJldHVybiB1c2VyLm5hbWU7XG4gICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgcmV0dXJuICdkZWZhdWx0IG5hbWUnO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHVzZXJOYW1lKSB7XG4gICAgICAvLyBJZiBgZmluZFVzZXJgIGZ1bGZpbGxlZCwgYHVzZXJOYW1lYCB3aWxsIGJlIHRoZSB1c2VyJ3MgbmFtZSwgb3RoZXJ3aXNlIGl0XG4gICAgICAvLyB3aWxsIGJlIGAnZGVmYXVsdCBuYW1lJ2BcbiAgICB9KTtcbiAgXG4gICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZvdW5kIHVzZXIsIGJ1dCBzdGlsbCB1bmhhcHB5Jyk7XG4gICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgZmluZFVzZXJgIHJlamVjdGVkIGFuZCB3ZSdyZSB1bmhhcHB5Jyk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIC8vIG5ldmVyIHJlYWNoZWRcbiAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAvLyBpZiBgZmluZFVzZXJgIGZ1bGZpbGxlZCwgYHJlYXNvbmAgd2lsbCBiZSAnRm91bmQgdXNlciwgYnV0IHN0aWxsIHVuaGFwcHknLlxuICAgICAgLy8gSWYgYGZpbmRVc2VyYCByZWplY3RlZCwgYHJlYXNvbmAgd2lsbCBiZSAnYGZpbmRVc2VyYCByZWplY3RlZCBhbmQgd2UncmUgdW5oYXBweScuXG4gICAgfSk7XG4gICAgYGBgXG4gICAgSWYgdGhlIGRvd25zdHJlYW0gcHJvbWlzZSBkb2VzIG5vdCBzcGVjaWZ5IGEgcmVqZWN0aW9uIGhhbmRsZXIsIHJlamVjdGlvbiByZWFzb25zIHdpbGwgYmUgcHJvcGFnYXRlZCBmdXJ0aGVyIGRvd25zdHJlYW0uXG4gIFxuICAgIGBgYGpzXG4gICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICB0aHJvdyBuZXcgUGVkYWdvZ2ljYWxFeGNlcHRpb24oJ1Vwc3RyZWFtIGVycm9yJyk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIC8vIG5ldmVyIHJlYWNoZWRcbiAgICB9KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgLy8gbmV2ZXIgcmVhY2hlZFxuICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgIC8vIFRoZSBgUGVkZ2Fnb2NpYWxFeGNlcHRpb25gIGlzIHByb3BhZ2F0ZWQgYWxsIHRoZSB3YXkgZG93biB0byBoZXJlXG4gICAgfSk7XG4gICAgYGBgXG4gIFxuICAgIEFzc2ltaWxhdGlvblxuICAgIC0tLS0tLS0tLS0tLVxuICBcbiAgICBTb21ldGltZXMgdGhlIHZhbHVlIHlvdSB3YW50IHRvIHByb3BhZ2F0ZSB0byBhIGRvd25zdHJlYW0gcHJvbWlzZSBjYW4gb25seSBiZVxuICAgIHJldHJpZXZlZCBhc3luY2hyb25vdXNseS4gVGhpcyBjYW4gYmUgYWNoaWV2ZWQgYnkgcmV0dXJuaW5nIGEgcHJvbWlzZSBpbiB0aGVcbiAgICBmdWxmaWxsbWVudCBvciByZWplY3Rpb24gaGFuZGxlci4gVGhlIGRvd25zdHJlYW0gcHJvbWlzZSB3aWxsIHRoZW4gYmUgcGVuZGluZ1xuICAgIHVudGlsIHRoZSByZXR1cm5lZCBwcm9taXNlIGlzIHNldHRsZWQuIFRoaXMgaXMgY2FsbGVkICphc3NpbWlsYXRpb24qLlxuICBcbiAgICBgYGBqc1xuICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgcmV0dXJuIGZpbmRDb21tZW50c0J5QXV0aG9yKHVzZXIpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGNvbW1lbnRzKSB7XG4gICAgICAvLyBUaGUgdXNlcidzIGNvbW1lbnRzIGFyZSBub3cgYXZhaWxhYmxlXG4gICAgfSk7XG4gICAgYGBgXG4gIFxuICAgIElmIHRoZSBhc3NpbWxpYXRlZCBwcm9taXNlIHJlamVjdHMsIHRoZW4gdGhlIGRvd25zdHJlYW0gcHJvbWlzZSB3aWxsIGFsc28gcmVqZWN0LlxuICBcbiAgICBgYGBqc1xuICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgcmV0dXJuIGZpbmRDb21tZW50c0J5QXV0aG9yKHVzZXIpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGNvbW1lbnRzKSB7XG4gICAgICAvLyBJZiBgZmluZENvbW1lbnRzQnlBdXRob3JgIGZ1bGZpbGxzLCB3ZSdsbCBoYXZlIHRoZSB2YWx1ZSBoZXJlXG4gICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgLy8gSWYgYGZpbmRDb21tZW50c0J5QXV0aG9yYCByZWplY3RzLCB3ZSdsbCBoYXZlIHRoZSByZWFzb24gaGVyZVxuICAgIH0pO1xuICAgIGBgYFxuICBcbiAgICBTaW1wbGUgRXhhbXBsZVxuICAgIC0tLS0tLS0tLS0tLS0tXG4gIFxuICAgIFN5bmNocm9ub3VzIEV4YW1wbGVcbiAgXG4gICAgYGBgamF2YXNjcmlwdFxuICAgIGxldCByZXN1bHQ7XG4gIFxuICAgIHRyeSB7XG4gICAgICByZXN1bHQgPSBmaW5kUmVzdWx0KCk7XG4gICAgICAvLyBzdWNjZXNzXG4gICAgfSBjYXRjaChyZWFzb24pIHtcbiAgICAgIC8vIGZhaWx1cmVcbiAgICB9XG4gICAgYGBgXG4gIFxuICAgIEVycmJhY2sgRXhhbXBsZVxuICBcbiAgICBgYGBqc1xuICAgIGZpbmRSZXN1bHQoZnVuY3Rpb24ocmVzdWx0LCBlcnIpe1xuICAgICAgaWYgKGVycikge1xuICAgICAgICAvLyBmYWlsdXJlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBzdWNjZXNzXG4gICAgICB9XG4gICAgfSk7XG4gICAgYGBgXG4gIFxuICAgIFByb21pc2UgRXhhbXBsZTtcbiAgXG4gICAgYGBgamF2YXNjcmlwdFxuICAgIGZpbmRSZXN1bHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XG4gICAgICAvLyBzdWNjZXNzXG4gICAgfSwgZnVuY3Rpb24ocmVhc29uKXtcbiAgICAgIC8vIGZhaWx1cmVcbiAgICB9KTtcbiAgICBgYGBcbiAgXG4gICAgQWR2YW5jZWQgRXhhbXBsZVxuICAgIC0tLS0tLS0tLS0tLS0tXG4gIFxuICAgIFN5bmNocm9ub3VzIEV4YW1wbGVcbiAgXG4gICAgYGBgamF2YXNjcmlwdFxuICAgIGxldCBhdXRob3IsIGJvb2tzO1xuICBcbiAgICB0cnkge1xuICAgICAgYXV0aG9yID0gZmluZEF1dGhvcigpO1xuICAgICAgYm9va3MgID0gZmluZEJvb2tzQnlBdXRob3IoYXV0aG9yKTtcbiAgICAgIC8vIHN1Y2Nlc3NcbiAgICB9IGNhdGNoKHJlYXNvbikge1xuICAgICAgLy8gZmFpbHVyZVxuICAgIH1cbiAgICBgYGBcbiAgXG4gICAgRXJyYmFjayBFeGFtcGxlXG4gIFxuICAgIGBgYGpzXG4gIFxuICAgIGZ1bmN0aW9uIGZvdW5kQm9va3MoYm9va3MpIHtcbiAgXG4gICAgfVxuICBcbiAgICBmdW5jdGlvbiBmYWlsdXJlKHJlYXNvbikge1xuICBcbiAgICB9XG4gIFxuICAgIGZpbmRBdXRob3IoZnVuY3Rpb24oYXV0aG9yLCBlcnIpe1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBmYWlsdXJlKGVycik7XG4gICAgICAgIC8vIGZhaWx1cmVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZmluZEJvb29rc0J5QXV0aG9yKGF1dGhvciwgZnVuY3Rpb24oYm9va3MsIGVycikge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICBmYWlsdXJlKGVycik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvdW5kQm9va3MoYm9va3MpO1xuICAgICAgICAgICAgICB9IGNhdGNoKHJlYXNvbikge1xuICAgICAgICAgICAgICAgIGZhaWx1cmUocmVhc29uKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgZmFpbHVyZShlcnIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgIH1cbiAgICB9KTtcbiAgICBgYGBcbiAgXG4gICAgUHJvbWlzZSBFeGFtcGxlO1xuICBcbiAgICBgYGBqYXZhc2NyaXB0XG4gICAgZmluZEF1dGhvcigpLlxuICAgICAgdGhlbihmaW5kQm9va3NCeUF1dGhvcikuXG4gICAgICB0aGVuKGZ1bmN0aW9uKGJvb2tzKXtcbiAgICAgICAgLy8gZm91bmQgYm9va3NcbiAgICB9KS5jYXRjaChmdW5jdGlvbihyZWFzb24pe1xuICAgICAgLy8gc29tZXRoaW5nIHdlbnQgd3JvbmdcbiAgICB9KTtcbiAgICBgYGBcbiAgXG4gICAgQG1ldGhvZCB0aGVuXG4gICAgQHBhcmFtIHtGdW5jdGlvbn0gb25GdWxmaWxsZWRcbiAgICBAcGFyYW0ge0Z1bmN0aW9ufSBvblJlamVjdGVkXG4gICAgVXNlZnVsIGZvciB0b29saW5nLlxuICAgIEByZXR1cm4ge1Byb21pc2V9XG4gICovXG4gIHRoZW46IHRoZW4sXG5cbiAgLyoqXG4gICAgYGNhdGNoYCBpcyBzaW1wbHkgc3VnYXIgZm9yIGB0aGVuKHVuZGVmaW5lZCwgb25SZWplY3Rpb24pYCB3aGljaCBtYWtlcyBpdCB0aGUgc2FtZVxuICAgIGFzIHRoZSBjYXRjaCBibG9jayBvZiBhIHRyeS9jYXRjaCBzdGF0ZW1lbnQuXG4gIFxuICAgIGBgYGpzXG4gICAgZnVuY3Rpb24gZmluZEF1dGhvcigpe1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZG4ndCBmaW5kIHRoYXQgYXV0aG9yJyk7XG4gICAgfVxuICBcbiAgICAvLyBzeW5jaHJvbm91c1xuICAgIHRyeSB7XG4gICAgICBmaW5kQXV0aG9yKCk7XG4gICAgfSBjYXRjaChyZWFzb24pIHtcbiAgICAgIC8vIHNvbWV0aGluZyB3ZW50IHdyb25nXG4gICAgfVxuICBcbiAgICAvLyBhc3luYyB3aXRoIHByb21pc2VzXG4gICAgZmluZEF1dGhvcigpLmNhdGNoKGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgICAvLyBzb21ldGhpbmcgd2VudCB3cm9uZ1xuICAgIH0pO1xuICAgIGBgYFxuICBcbiAgICBAbWV0aG9kIGNhdGNoXG4gICAgQHBhcmFtIHtGdW5jdGlvbn0gb25SZWplY3Rpb25cbiAgICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gICAgQHJldHVybiB7UHJvbWlzZX1cbiAgKi9cbiAgJ2NhdGNoJzogZnVuY3Rpb24gX2NhdGNoKG9uUmVqZWN0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGlvbik7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHBvbHlmaWxsKCkge1xuICAgIHZhciBsb2NhbCA9IHVuZGVmaW5lZDtcblxuICAgIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBsb2NhbCA9IGdsb2JhbDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBsb2NhbCA9IHNlbGY7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxvY2FsID0gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdwb2x5ZmlsbCBmYWlsZWQgYmVjYXVzZSBnbG9iYWwgb2JqZWN0IGlzIHVuYXZhaWxhYmxlIGluIHRoaXMgZW52aXJvbm1lbnQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBQID0gbG9jYWwuUHJvbWlzZTtcblxuICAgIGlmIChQKSB7XG4gICAgICAgIHZhciBwcm9taXNlVG9TdHJpbmcgPSBudWxsO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcHJvbWlzZVRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFAucmVzb2x2ZSgpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gc2lsZW50bHkgaWdub3JlZFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb21pc2VUb1N0cmluZyA9PT0gJ1tvYmplY3QgUHJvbWlzZV0nICYmICFQLmNhc3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvY2FsLlByb21pc2UgPSBQcm9taXNlO1xufVxuXG5wb2x5ZmlsbCgpO1xuLy8gU3RyYW5nZSBjb21wYXQuLlxuUHJvbWlzZS5wb2x5ZmlsbCA9IHBvbHlmaWxsO1xuUHJvbWlzZS5Qcm9taXNlID0gUHJvbWlzZTtcblxucmV0dXJuIFByb21pc2U7XG5cbn0pKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lczYtcHJvbWlzZS5tYXAiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiLypqc2xpbnQgbm9kZTp0cnVlKi9cbi8qZ2xvYmFscyBSVENQZWVyQ29ubmVjdGlvbiwgbW96UlRDUGVlckNvbm5lY3Rpb24sIHdlYmtpdFJUQ1BlZXJDb25uZWN0aW9uICovXG4vKmdsb2JhbHMgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uLCBtb3pSVENTZXNzaW9uRGVzY3JpcHRpb24gKi9cbi8qZ2xvYmFscyBSVENJY2VDYW5kaWRhdGUsIG1velJUQ0ljZUNhbmRpZGF0ZSAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgbXlSVENQZWVyQ29ubmVjdGlvbiA9IG51bGw7XG52YXIgbXlSVENTZXNzaW9uRGVzY3JpcHRpb24gPSBudWxsO1xudmFyIG15UlRDSWNlQ2FuZGlkYXRlID0gbnVsbDtcblxudmFyIHJlbmFtZUljZVVSTHMgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIGlmICghY29uZmlnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICghY29uZmlnLmljZVNlcnZlcnMpIHtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG4gIGNvbmZpZy5pY2VTZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gKHNlcnZlcikge1xuICAgIHNlcnZlci51cmwgPSBzZXJ2ZXIudXJscztcbiAgICBkZWxldGUgc2VydmVyLnVybHM7XG4gIH0pO1xuICByZXR1cm4gY29uZmlnO1xufTtcblxudmFyIGZpeENocm9tZVN0YXRzUmVzcG9uc2UgPSBmdW5jdGlvbihyZXNwb25zZSkge1xuICB2YXIgc3RhbmRhcmRSZXBvcnQgPSB7fTtcbiAgdmFyIHJlcG9ydHMgPSByZXNwb25zZS5yZXN1bHQoKTtcbiAgcmVwb3J0cy5mb3JFYWNoKGZ1bmN0aW9uKHJlcG9ydCkge1xuICAgIHZhciBzdGFuZGFyZFN0YXRzID0ge1xuICAgICAgaWQ6IHJlcG9ydC5pZCxcbiAgICAgIHRpbWVzdGFtcDogcmVwb3J0LnRpbWVzdGFtcCxcbiAgICAgIHR5cGU6IHJlcG9ydC50eXBlXG4gICAgfTtcbiAgICByZXBvcnQubmFtZXMoKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIHN0YW5kYXJkU3RhdHNbbmFtZV0gPSByZXBvcnQuc3RhdChuYW1lKTtcbiAgICB9KTtcbiAgICBzdGFuZGFyZFJlcG9ydFtzdGFuZGFyZFN0YXRzLmlkXSA9IHN0YW5kYXJkU3RhdHM7XG4gIH0pO1xuXG4gIHJldHVybiBzdGFuZGFyZFJlcG9ydDtcbn07XG5cbnZhciBmaXhGaXJlZm94U3RhdHNSZXNwb25zZSA9IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gIC8vIEdpdmluZyB0aGUgcmVzcG9uc2UgZGlyZWN0bHkgdG8gdGhlIGNhbGxiYWNrIGdpdmVzIGFuIG9iamVjdCB3L28gaW50ZXJmYWNlXG4gIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvTW96aWxsYS9XZWJJRExfYmluZGluZ3MjQ2hyb21lT25seVxuICB2YXIgc3RhbmRhcmRSZXBvcnQgPSB7fTtcbiAgcmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiAocmVwb3J0KSB7XG4gICAgc3RhbmRhcmRSZXBvcnRbcmVwb3J0LmlkXSA9IHJlcG9ydDtcbiAgfSk7XG4gIHJldHVybiBzdGFuZGFyZFJlcG9ydDtcbn07XG5cbnZhciBzZXNzaW9uSGFzRGF0YSA9IGZ1bmN0aW9uKGRlc2MpIHtcbiAgaWYgKCFkZXNjKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBoYXNEYXRhID0gZmFsc2U7XG4gIHZhciBwcmVmaXggPSAnbT1hcHBsaWNhdGlvbic7XG4gIGRlc2Muc2RwLnNwbGl0KCdcXG4nKS5mb3JFYWNoKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICBpZiAobGluZS5zbGljZSgwLCBwcmVmaXgubGVuZ3RoKSA9PT0gcHJlZml4KSB7XG4gICAgICBoYXNEYXRhID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gaGFzRGF0YTtcbn07XG5cbi8vIFVuaWZ5IFBlZXJDb25uZWN0aW9uIE9iamVjdC5cbmlmICh0eXBlb2YgUlRDUGVlckNvbm5lY3Rpb24gIT09ICd1bmRlZmluZWQnKSB7XG4gIG15UlRDUGVlckNvbm5lY3Rpb24gPSBSVENQZWVyQ29ubmVjdGlvbjtcbn0gZWxzZSBpZiAodHlwZW9mIG1velJUQ1BlZXJDb25uZWN0aW9uICE9PSAndW5kZWZpbmVkJykge1xuICBteVJUQ1BlZXJDb25uZWN0aW9uID0gZnVuY3Rpb24gKGNvbmZpZ3VyYXRpb24sIGNvbnN0cmFpbnRzKSB7XG4gICAgLy8gRmlyZWZveCB1c2VzICd1cmwnIHJhdGhlciB0aGFuICd1cmxzJyBmb3IgUlRDSWNlU2VydmVyLnVybHNcbiAgICB2YXIgcGMgPSBuZXcgbW96UlRDUGVlckNvbm5lY3Rpb24ocmVuYW1lSWNlVVJMcyhjb25maWd1cmF0aW9uKSwgY29uc3RyYWludHMpO1xuXG4gICAgLy8gRmlyZWZveCBzdGF0cyByZXNwb25zZSBpcyBvbmx5IHZpc2libGUgJ0Nocm9tZU9ubHknIHNvIHByb2Nlc3MgaXQgaGVyZVxuICAgIHZhciBib3VuZEdldFN0YXRzID0gcGMuZ2V0U3RhdHMuYmluZChwYyk7XG4gICAgcGMuZ2V0U3RhdHMgPSBmdW5jdGlvbihzZWxlY3Rvciwgc3VjY2Vzc0NhbGxiYWNrLCBmYWlsdXJlQ2FsbGJhY2spIHtcbiAgICAgIHZhciBzdWNjZXNzQ2FsbGJhY2tXcmFwcGVyID0gZnVuY3Rpb24oZmlyZWZveFN0YXRzUmVzcG9uc2UpIHtcbiAgICAgICAgc3VjY2Vzc0NhbGxiYWNrKGZpeEZpcmVmb3hTdGF0c1Jlc3BvbnNlKGZpcmVmb3hTdGF0c1Jlc3BvbnNlKSk7XG4gICAgICB9O1xuICAgICAgYm91bmRHZXRTdGF0cyhzZWxlY3Rvciwgc3VjY2Vzc0NhbGxiYWNrV3JhcHBlciwgZmFpbHVyZUNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgLy8gRmlyZWZveCBkb2Vzbid0IGZpcmUgJ29ubmVnb3RpYXRpb25uZWVkZWQnIHdoZW4gYSBkYXRhIGNoYW5uZWwgaXMgY3JlYXRlZFxuICAgIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTg0MDcyOFxuICAgIHZhciBkYXRhRW5hYmxlZCA9IGZhbHNlO1xuICAgIHZhciBib3VuZENyZWF0ZURhdGFDaGFubmVsID0gcGMuY3JlYXRlRGF0YUNoYW5uZWwuYmluZChwYyk7XG4gICAgcGMuY3JlYXRlRGF0YUNoYW5uZWwgPSBmdW5jdGlvbihsYWJlbCwgZGF0YUNoYW5uZWxEaWN0KSB7XG4gICAgICB2YXIgZGMgPSBib3VuZENyZWF0ZURhdGFDaGFubmVsKGxhYmVsLCBkYXRhQ2hhbm5lbERpY3QpO1xuICAgICAgaWYgKCFkYXRhRW5hYmxlZCkge1xuICAgICAgICBkYXRhRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIGlmIChwYy5vbm5lZ290aWF0aW9ubmVlZGVkICYmXG4gICAgICAgICAgICAhc2Vzc2lvbkhhc0RhdGEocGMubG9jYWxEZXNjcmlwdGlvbikgJiZcbiAgICAgICAgICAgICFzZXNzaW9uSGFzRGF0YShwYy5yZW1vdGVEZXNjcmlwdGlvbikpIHtcbiAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ25lZ290aWF0aW9ubmVlZGVkJyk7XG4gICAgICAgICAgcGMub25uZWdvdGlhdGlvbm5lZWRlZChldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBkYztcbiAgICB9O1xuXG4gICAgcmV0dXJuIHBjO1xuICB9O1xufSBlbHNlIGlmICh0eXBlb2Ygd2Via2l0UlRDUGVlckNvbm5lY3Rpb24gIT09ICd1bmRlZmluZWQnKSB7XG4gIC8vIENocm9tZSByZXR1cm5zIGEgbm9uc3RhbmRhcmQsIG5vbi1KU09OLWlmaWFibGUgcmVzcG9uc2UgZnJvbSBnZXRTdGF0cy5cbiAgbXlSVENQZWVyQ29ubmVjdGlvbiA9IGZ1bmN0aW9uKGNvbmZpZ3VyYXRpb24sIGNvbnN0cmFpbnRzKSB7XG4gICAgdmFyIHBjID0gbmV3IHdlYmtpdFJUQ1BlZXJDb25uZWN0aW9uKGNvbmZpZ3VyYXRpb24sIGNvbnN0cmFpbnRzKTtcbiAgICB2YXIgYm91bmRHZXRTdGF0cyA9IHBjLmdldFN0YXRzLmJpbmQocGMpO1xuICAgIHBjLmdldFN0YXRzID0gZnVuY3Rpb24oc2VsZWN0b3IsIHN1Y2Nlc3NDYWxsYmFjaywgZmFpbHVyZUNhbGxiYWNrKSB7XG4gICAgICB2YXIgc3VjY2Vzc0NhbGxiYWNrV3JhcHBlciA9IGZ1bmN0aW9uKGNocm9tZVN0YXRzUmVzcG9uc2UpIHtcbiAgICAgICAgc3VjY2Vzc0NhbGxiYWNrKGZpeENocm9tZVN0YXRzUmVzcG9uc2UoY2hyb21lU3RhdHNSZXNwb25zZSkpO1xuICAgICAgfTtcbiAgICAgIC8vIENocm9tZSBhbHNvIHRha2VzIGl0cyBhcmd1bWVudHMgaW4gdGhlIHdyb25nIG9yZGVyLlxuICAgICAgYm91bmRHZXRTdGF0cyhzdWNjZXNzQ2FsbGJhY2tXcmFwcGVyLCBmYWlsdXJlQ2FsbGJhY2ssIHNlbGVjdG9yKTtcbiAgICB9O1xuICAgIHJldHVybiBwYztcbiAgfTtcbn1cblxuLy8gVW5pZnkgU2Vzc2lvbkRlc2NycHRpb24gT2JqZWN0LlxuaWYgKHR5cGVvZiBSVENTZXNzaW9uRGVzY3JpcHRpb24gIT09ICd1bmRlZmluZWQnKSB7XG4gIG15UlRDU2Vzc2lvbkRlc2NyaXB0aW9uID0gUlRDU2Vzc2lvbkRlc2NyaXB0aW9uO1xufSBlbHNlIGlmICh0eXBlb2YgbW96UlRDU2Vzc2lvbkRlc2NyaXB0aW9uICE9PSAndW5kZWZpbmVkJykge1xuICBteVJUQ1Nlc3Npb25EZXNjcmlwdGlvbiA9IG1velJUQ1Nlc3Npb25EZXNjcmlwdGlvbjtcbn1cblxuLy8gVW5pZnkgSWNlQ2FuZGlkYXRlIE9iamVjdC5cbmlmICh0eXBlb2YgUlRDSWNlQ2FuZGlkYXRlICE9PSAndW5kZWZpbmVkJykge1xuICBteVJUQ0ljZUNhbmRpZGF0ZSA9IFJUQ0ljZUNhbmRpZGF0ZTtcbn0gZWxzZSBpZiAodHlwZW9mIG1velJUQ0ljZUNhbmRpZGF0ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgbXlSVENJY2VDYW5kaWRhdGUgPSBtb3pSVENJY2VDYW5kaWRhdGU7XG59XG5cbmV4cG9ydHMuUlRDUGVlckNvbm5lY3Rpb24gPSBteVJUQ1BlZXJDb25uZWN0aW9uO1xuZXhwb3J0cy5SVENTZXNzaW9uRGVzY3JpcHRpb24gPSBteVJUQ1Nlc3Npb25EZXNjcmlwdGlvbjtcbmV4cG9ydHMuUlRDSWNlQ2FuZGlkYXRlID0gbXlSVENJY2VDYW5kaWRhdGU7XG4iLCIvKmdsb2JhbHMgbmF2aWdhdG9yKi9cbi8qanNoaW50IG5vZGU6dHJ1ZSovXG52YXIgUHJvbWlzZUNvbXBhdCA9IHJlcXVpcmUoJ2VzNi1wcm9taXNlJykuUHJvbWlzZTtcbnZhciBuYXYgPSBmYWxzZTtcbmlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJykge1xuICBuYXYgPSBuYXZpZ2F0b3I7XG59XG5cbnZhciBCYXR0ZXJ5UHJvdmlkZXIgPSBmdW5jdGlvbihjYXAsIGRpc3BhdGNoRXZlbnQpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHRoaXMuX2JhdHRlcnlQcm9taXNlID0gbmF2ICYmIG5hdi5nZXRCYXR0ZXJ5ID8gbmF2LmdldEJhdHRlcnkoKSA6IG51bGw7XG5cbiAgaWYgKHRoaXMuX2JhdHRlcnlQcm9taXNlKSB7XG4gICAgdGhpcy5fYmF0dGVyeVByb21pc2UudGhlbihmdW5jdGlvbihiYXR0ZXJ5KSB7XG4gICAgICB0aGlzLl9zZXR1cExpc3RlbmVycyhiYXR0ZXJ5LCBkaXNwYXRjaEV2ZW50KTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUud2FybihcIlRyeWluZyB0byB1c2UgY29yZS5iYXR0ZXJ5IEFQSSB3aXRob3V0IGNsaWVudCBzdXBwb3J0XCIpO1xuICB9XG59O1xuXG5CYXR0ZXJ5UHJvdmlkZXIucHJvdG90eXBlLmlzQ2hhcmdpbmcgPSBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIGlmICghdGhpcy5fYmF0dGVyeVByb21pc2UpIHtcbiAgICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHRydWUpOyAgLy8gQ2hhcmdpbmcgLyBwbHVnZ2VkIGluXG4gIH1cbiAgcmV0dXJuIHRoaXMuX2JhdHRlcnlQcm9taXNlLnRoZW4oZnVuY3Rpb24oYmF0dGVyeSkge1xuICAgIHJldHVybiBiYXR0ZXJ5LmNoYXJnaW5nO1xuICB9KTtcbn07XG5cbkJhdHRlcnlQcm92aWRlci5wcm90b3R5cGUuZ2V0Q2hhcmdpbmdUaW1lID0gZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICBpZiAoIXRoaXMuX2JhdHRlcnlQcm9taXNlKSB7XG4gICAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSgwKTsgIC8vIEZ1bGx5IGNoYXJnZWRcbiAgfVxuICByZXR1cm4gdGhpcy5fYmF0dGVyeVByb21pc2UudGhlbihmdW5jdGlvbihiYXR0ZXJ5KSB7XG4gICAgcmV0dXJuIGJhdHRlcnkuY2hhcmdpbmdUaW1lO1xuICB9KTtcbn07XG5cbkJhdHRlcnlQcm92aWRlci5wcm90b3R5cGUuZ2V0RGlzY2hhcmdpbmdUaW1lID0gZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICBpZiAoIXRoaXMuX2JhdHRlcnlQcm9taXNlKSB7XG4gICAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZShJbmZpbml0eSk7ICAvLyBDdXJyZW50bHkgY2hhcmdpbmdcbiAgfVxuICByZXR1cm4gdGhpcy5fYmF0dGVyeVByb21pc2UudGhlbihmdW5jdGlvbihiYXR0ZXJ5KSB7XG4gICAgcmV0dXJuIGJhdHRlcnkuZGlzY2hhcmdpbmdUaW1lO1xuICB9KTtcbn07XG5cbkJhdHRlcnlQcm92aWRlci5wcm90b3R5cGUuZ2V0TGV2ZWwgPSBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIGlmICghdGhpcy5fYmF0dGVyeVByb21pc2UpIHtcbiAgICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKDEuMCk7ICAvLyBGdWxseSBjaGFyZ2VkXG4gIH1cbiAgcmV0dXJuIHRoaXMuX2JhdHRlcnlQcm9taXNlLnRoZW4oZnVuY3Rpb24oYmF0dGVyeSkge1xuICAgIHJldHVybiBiYXR0ZXJ5LmxldmVsO1xuICB9KTtcbn07XG5cbkJhdHRlcnlQcm92aWRlci5wcm90b3R5cGUuX3NldHVwTGlzdGVuZXJzID0gZnVuY3Rpb24oYmF0dGVyeSwgZGlzcGF0Y2hFdmVudCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgdmFyIGV2ZW50cyA9IFtcbiAgICBcImNoYXJnaW5nY2hhbmdlXCIsXG4gICAgXCJjaGFyZ2luZ3RpbWVjaGFuZ2VcIixcbiAgICBcImRpc2NoYXJnaW5ndGltZWNoYW5nZVwiLFxuICAgIFwibGV2ZWxjaGFuZ2VcIlxuICBdO1xuICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgYmF0dGVyeS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZGlzcGF0Y2hFdmVudC5iaW5kKHRoaXMsIGV2ZW50TmFtZSkpO1xuICB9KTtcbn07XG5cbmV4cG9ydHMubmFtZSA9IFwiY29yZS5iYXR0ZXJ5XCI7XG5leHBvcnRzLnByb3ZpZGVyID0gQmF0dGVyeVByb3ZpZGVyO1xuZXhwb3J0cy5zdHlsZSA9IFwicHJvdmlkZVByb21pc2VzXCI7XG5leHBvcnRzLmZsYWdzID0geyBwcm92aWRlcjogdHJ1ZSB9O1xuZXhwb3J0cy5zZXROYXZpZ2F0b3IgPSBmdW5jdGlvbihpbXBsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICBuYXYgPSBpbXBsO1xufTtcbiIsIi8qZ2xvYmFscyBwcm9jZXNzLCBjb25zb2xlICovXG4vKmpzbGludCBpbmRlbnQ6MixzbG9wcHk6dHJ1ZSwgbm9kZTp0cnVlICovXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4uLy4uL3NyYy91dGlsJyk7XG5cbi8qKlxuICogQSBmcmVlZG9tLmpzIGxvZ2dpbmcgcHJvdmlkZXIgdGhhdCBsb2dzIHRvIGNocm9tZSwgZmlyZWZveCwgYW5kIG5vZGUgY29uc29sZXMuXG4gKiBAQ2xhc3MgTG9nZ2VyX2NvbnNvbGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Y29uZmlnOiBPYmplY3R9IGNhcCBDYXBhYmlsaXRpZXMgLSBjb25zb2xlIHJlcXVpcmVzIGdsb2JhbCBjb25maWcuXG4gKi9cbnZhciBMb2dnZXJfY29uc29sZSA9IGZ1bmN0aW9uIChjYXApIHtcbiAgdGhpcy5sZXZlbCA9IChjYXAuY29uZmlnICYmIGNhcC5jb25maWcuZGVidWcpIHx8ICdsb2cnO1xuICB0aGlzLmNvbnNvbGUgPSAoY2FwLmNvbmZpZyAmJiBjYXAuY29uZmlnLmdsb2JhbC5jb25zb2xlKTtcbiAgdXRpbC5oYW5kbGVFdmVudHModGhpcyk7XG59O1xuXG5cbi8qKlxuICogTG9nZ2luZyBsZXZlbHMsIGZvciBmaWx0ZXJpbmcgb3V0cHV0LlxuICogQHByaXZhdGVcbiAqIEBzdGF0aWNcbiAqL1xuTG9nZ2VyX2NvbnNvbGUubGV2ZWwgPSB7XG4gIFwiZGVidWdcIjogMCxcbiAgXCJpbmZvXCI6IDEsXG4gIFwibG9nXCI6IDIsXG4gIFwid2FyblwiOiAzLFxuICBcImVycm9yXCI6IDRcbn07XG5cbi8qKlxuICogUHJpbnQgYSBtZXNzYWdlIHdpdGggYXBwcm9wcmlhdGUgZm9ybWF0dGluZy5cbiAqIEBtZXRob2QgcHJpbnRcbiAqL1xuTG9nZ2VyX2NvbnNvbGUucHJvdG90eXBlLnByaW50ID0gZnVuY3Rpb24gKHNldmVyaXR5LCBzb3VyY2UsIG1zZykge1xuICB2YXIgYXJyID0gbXNnO1xuICBpZiAodHlwZW9mIHRoaXMuY29uc29sZSA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgIHRoaXMuY29uc29sZS5mcmVlZG9tID09PSB0cnVlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICh0eXBlb2YgYXJyID09PSAnc3RyaW5nJykge1xuICAgIGFyciA9IFthcnJdO1xuICB9XG4gIFxuICBpZiAoTG9nZ2VyX2NvbnNvbGUubGV2ZWxbdGhpcy5sZXZlbF0gIT09IHVuZGVmaW5lZCAmJlxuICAgICAgTG9nZ2VyX2NvbnNvbGUubGV2ZWxbc2V2ZXJpdHldIDwgTG9nZ2VyX2NvbnNvbGUubGV2ZWxbdGhpcy5sZXZlbF0pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgXG4gIGlmIChzb3VyY2UpIHtcbiAgICBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIHt9LnRvU3RyaW5nLmNhbGwocHJvY2VzcykgPT09ICdbb2JqZWN0IHByb2Nlc3NdJykge1xuICAgICAgLy8gTm9kZS5cbiAgICAgIGFyci51bnNoaWZ0KCdcXHgxQlszOW0nKTtcbiAgICAgIGFyci51bnNoaWZ0KCdcXHgxQlszMW0nICsgc291cmNlKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29uc29sZS5tYXhMb2dMZXZlbCkge1xuICAgICAgLy8gRmlyZWZveCBpbiBKU00gY29udGV4dDpcbiAgICAgIC8vICAgaHR0cDovL214ci5tb3ppbGxhLm9yZy9tb3ppbGxhLXJlbGVhc2Uvc291cmNlL3Rvb2xraXQvZGV2dG9vbHMvQ29uc29sZS5qc21cbiAgICAgIGlmICghdGhpcy5jb25zb2xlLmZyZWVkb21EdW1wKSB7XG4gICAgICAgIHRoaXMuY29uc29sZS5mcmVlZG9tRHVtcCA9IHRoaXMuY29uc29sZS5kdW1wO1xuICAgICAgICB0aGlzLmNvbnNvbGUuZHVtcCA9IGZ1bmN0aW9uKCkge307XG4gICAgICB9XG4gICAgICB0aGlzLmNvbnNvbGUuZnJlZWRvbUR1bXAoc291cmNlICsgJyAnICsgc2V2ZXJpdHlbMF0udG9VcHBlckNhc2UoKSArICcgJyArXG4gICAgICAgICAgYXJyLmpvaW4oJyAnKSArICdcXG4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXJyLnVuc2hpZnQoJ2NvbG9yOiBub25lJyk7XG4gICAgICBhcnIudW5zaGlmdCgnY29sb3I6IHJlZCcpO1xuICAgICAgYXJyLnVuc2hpZnQoJyVjJyArIHNvdXJjZSArICclYycpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghdGhpcy5jb25zb2xlW3NldmVyaXR5XSAmJiB0aGlzLmNvbnNvbGUubG9nKSB7XG4gICAgc2V2ZXJpdHkgPSAnbG9nJztcbiAgfVxuICB0aGlzLmNvbnNvbGVbc2V2ZXJpdHldLmFwcGx5KHRoaXMuY29uc29sZSwgYXJyKTtcbn07XG5cbi8qKlxuICogTG9nIGEgbWVzc2FnZSB0byB0aGUgY29uc29sZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBzb3VyY2UgVGhlIHNvdXJjZSBvZiB0aGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBtc2cgVGhlIG1lc3NhZ2UgdG8gbG9nLlxuICogQG1ldGhvZCBsb2dcbiAqL1xuTG9nZ2VyX2NvbnNvbGUucHJvdG90eXBlLmxvZyA9IGZ1bmN0aW9uIChzb3VyY2UsIG1zZywgY29udGludWF0aW9uKSB7XG4gIHRoaXMucHJpbnQoJ2xvZycsIHNvdXJjZSwgbXNnKTtcbiAgY29udGludWF0aW9uKCk7XG59O1xuXG4vKipcbiAqIExvZyBhIG1lc3NhZ2UgdG8gdGhlIGNvbnNvbGUgd2l0aCBkZWJ1ZyBwcmlvcml0eS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBzb3VyY2UgVGhlIHNvdXJjZSBvZiB0aGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBtc2cgVGhlIG1lc3NhZ2UgdG8gbG9nLlxuICogQG1ldGhvZCBsb2dcbiAqL1xuTG9nZ2VyX2NvbnNvbGUucHJvdG90eXBlLmRlYnVnID0gZnVuY3Rpb24gKHNvdXJjZSwgbXNnLCBjb250aW51YXRpb24pIHtcbiAgdGhpcy5wcmludCgnZGVidWcnLCBzb3VyY2UsIG1zZyk7XG4gIGNvbnRpbnVhdGlvbigpO1xufTtcblxuLyoqXG4gKiBMb2cgYSBtZXNzYWdlIHRvIHRoZSBjb25zb2xlIHdpdGggaW5mbyBwcmlvcml0eS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBzb3VyY2UgVGhlIHNvdXJjZSBvZiB0aGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBtc2cgVGhlIG1lc3NhZ2UgdG8gbG9nLlxuICogQG1ldGhvZCBsb2dcbiAqL1xuTG9nZ2VyX2NvbnNvbGUucHJvdG90eXBlLmluZm8gPSBmdW5jdGlvbiAoc291cmNlLCBtc2csIGNvbnRpbnVhdGlvbikge1xuICB0aGlzLnByaW50KCdpbmZvJywgc291cmNlLCBtc2cpO1xuICBjb250aW51YXRpb24oKTtcbn07XG5cbi8qKlxuICogTG9nIGEgbWVzc2FnZSB0byB0aGUgY29uc29sZSB3aXRoIHdhcm4gcHJpb3JpdHkuXG4gKiBAcGFyYW0ge1N0cmluZ30gc291cmNlIFRoZSBzb3VyY2Ugb2YgdGhlIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge1N0cmluZ30gbXNnIFRoZSBtZXNzYWdlIHRvIGxvZy5cbiAqIEBtZXRob2QgbG9nXG4gKi9cbkxvZ2dlcl9jb25zb2xlLnByb3RvdHlwZS53YXJuID0gZnVuY3Rpb24gKHNvdXJjZSwgbXNnLCBjb250aW51YXRpb24pIHtcbiAgdGhpcy5wcmludCgnd2FybicsIHNvdXJjZSwgbXNnKTtcbiAgY29udGludWF0aW9uKCk7XG59O1xuXG4vKipcbiAqIExvZyBhIG1lc3NhZ2UgdG8gdGhlIGNvbnNvbGUgd2l0aCBlcnJvciBwcmlvcml0eS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBzb3VyY2UgVGhlIHNvdXJjZSBvZiB0aGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBtc2cgVGhlIG1lc3NhZ2UgdG8gbG9nLlxuICogQG1ldGhvZCBsb2dcbiAqL1xuTG9nZ2VyX2NvbnNvbGUucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKHNvdXJjZSwgbXNnLCBjb250aW51YXRpb24pIHtcbiAgdGhpcy5wcmludCgnZXJyb3InLCBzb3VyY2UsIG1zZyk7XG4gIGNvbnRpbnVhdGlvbigpO1xufTtcblxuLyoqIFJFR0lTVEVSIFBST1ZJREVSICoqL1xuZXhwb3J0cy5wcm92aWRlciA9IExvZ2dlcl9jb25zb2xlO1xuZXhwb3J0cy5uYW1lID0gJ2NvcmUuY29uc29sZSc7XG5leHBvcnRzLmZsYWdzID0ge2NvbmZpZzogdHJ1ZX07XG4iLCIvKmdsb2JhbHMgY29uc29sZSwgY3J5cHRvICovXG4vKmpzbGludCBpbmRlbnQ6Miwgbm9kZTp0cnVlICovXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4uLy4uL3NyYy91dGlsJyk7XG5cbi8qKlxuICogQSBDb3JlIHByb3ZpZGVyIGZvciBnZXR0aW5nIGNyeXB0b2dyYXBoaWNhbGx5IHJhbmRvbSBidWZmZXJzLiBUaGlzXG4gKiBmdW5jdGlvbmFsaXR5IG1heSBub3QgZXhpc3QgaW4gYWxsIHVucHJpdmlsZWRnZWQgY29udGV4dHMgLSBuYW1lbHkgYXQgdGhpc1xuICogcG9pbnQsIGZpcmVmb3ggYWRkb24gd29ya2Vycy5cbiAqIEBDbGFzcyBDb3JlX2NyeXB0b1xuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge21vZHVsZTpNb2R1bGV9IGNhcCBUaGUgbW9kdWxlIGNyZWF0aW5nIHRoaXMgcHJvdmlkZXIuXG4gKi9cbnZhciBDb3JlX2NyeXB0byA9IGZ1bmN0aW9uKGNhcCwgZGlzcGF0Y2hFdmVudCkge1xuICAndXNlIHN0cmljdCc7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCA9IGRpc3BhdGNoRXZlbnQ7XG4gIHV0aWwuaGFuZGxlRXZlbnRzKHRoaXMpO1xufTtcblxuLyoqXG4gKiBHZXQgYSByYW5kb20gYnVmZmVyIG9mIHNvbWUgbnVtYmVyIG9mIGJ5dGVzLlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIHNlbmQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb250aW51YXRpb24gRnVuY3Rpb24gdG8gY2FsbCB3aGVuIHNlbmRpbmcgaXMgY29tcGxldGUuXG4gKiBAbWV0aG9kIHNlbmRcbiAqL1xuIENvcmVfY3J5cHRvLnByb3RvdHlwZS5nZXRSYW5kb21CeXRlcyA9IGZ1bmN0aW9uKG51bWJlciwgY29udGludWF0aW9uKSB7XG4gICAndXNlIHN0cmljdCc7XG4gICB2YXIgYnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkobnVtYmVyKTtcbiAgIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMoYnVmZmVyKTtcbiAgIGNvbnRpbnVhdGlvbihidWZmZXIuYnVmZmVyKTtcbn07XG5cbmV4cG9ydHMucHJvdmlkZXIgPSBDb3JlX2NyeXB0bztcbmV4cG9ydHMubmFtZSA9IFwiY29yZS5jcnlwdG9cIjtcbiIsIi8qZ2xvYmFscyBjb25zb2xlICovXG4vKmpzbGludCBpbmRlbnQ6Mix3aGl0ZTp0cnVlLHNsb3BweTp0cnVlLCBub2RlOnRydWUgKi9cbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vLi4vc3JjL3V0aWwnKTtcblxuLyoqXG4gKiBBIG1pbmltYWwgcHJvdmlkZXIgaW1wbGVtZW50aW5nIHRoZSBjb3JlLmVjaG8gaW50ZXJmYWNlIGZvciBpbnRlcmFjdGlvbiB3aXRoXG4gKiBjdXN0b20gY2hhbm5lbHMuICBQcmltYXJpbHkgdXNlZCBmb3IgdGVzdGluZyB0aGUgcm9idXN0bmVzcyBvZiB0aGUgY3VzdG9tXG4gKiBjaGFubmVsIGltcGxlbWVudGF0aW9uLlxuICogQENsYXNzIEVjaG9fdW5wcml2aWxlZ2VkXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7bW9kdWxlOk1vZHVsZX0gY2FwIFRoZSBtb2R1bGUgY3JlYXRpbmcgdGhpcyBwcm92aWRlci5cbiAqL1xudmFyIEVjaG9fdW5wcml2aWxlZ2VkID0gZnVuY3Rpb24oY2FwLCBkaXNwYXRjaEV2ZW50KSB7XG4gIHRoaXMubW9kID0gY2FwLm1vZHVsZTtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50ID0gZGlzcGF0Y2hFdmVudDtcbiAgdXRpbC5oYW5kbGVFdmVudHModGhpcyk7XG5cbiAgLy8gVGhlIENvcmUgb2JqZWN0IGZvciBtYW5hZ2luZyBjaGFubmVscy5cbiAgdGhpcy5tb2Qub25jZSgnY29yZScsIGZ1bmN0aW9uKENvcmUpIHtcbiAgICB0aGlzLmNvcmUgPSBuZXcgQ29yZSgpO1xuICB9LmJpbmQodGhpcykpO1xuICB0aGlzLm1vZC5lbWl0KHRoaXMubW9kLmNvbnRyb2xDaGFubmVsLCB7XG4gICAgdHlwZTogJ2NvcmUgcmVxdWVzdCBkZWxlZ2F0ZWQgdG8gZWNobycsXG4gICAgcmVxdWVzdDogJ2NvcmUnXG4gIH0pO1xufTtcblxuLyoqXG4gKiBTZXR1cCB0aGUgcHJvdmlkZXIgdG8gZWNobyBvbiBhIHNwZWNpZmljIHByb3h5LiBTdWJzZXF1ZW50IG1lc3NhZ2VzXG4gKiBGcm9tIHRoZSBjdXN0b20gY2hhbm5lbCBib3VuZCBoZXJlIHdpbGwgYmUgcmUtZW1pdHRlZCBhcyBhIG1lc3NhZ2VcbiAqIGZyb20gdGhlIHByb3ZpZGVyLiAgU3Vic2VxdWVudCBtZXNzYWdlcyB0byB0aGUgcHJvdmlkZXIgd2lsbCBiZVxuICogZW1pdHRlZCBvbiB0aGUgYm91bmQgY2hhbm5lbC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm94eSBUaGUgaWRlbnRpZmllciBmb3IgdGhlIGN1c3RvbSBjaGFubmVsIHRvIGJpbmQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb250aW51YXRpb24gRnVuY3Rpb24gdG8gY2FsbCB3aGVuIHNldHVwIGlzIGNvbXBsZXRlLlxuICogQG1ldGhvZCBzZXR1cFxuICovXG5FY2hvX3VucHJpdmlsZWdlZC5wcm90b3R5cGUuc2V0dXAgPSBmdW5jdGlvbihwcm94eSwgY29udGludWF0aW9uKSB7XG4gIGNvbnRpbnVhdGlvbigpO1xuICBpZiAoIXRoaXMuY29yZSkge1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnbWVzc2FnZScsICdubyBjb3JlIGF2YWlsYWJsZSB0byBzZXR1cCBwcm94eSB3aXRoIGF0IGVjaG8nKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLmNvcmUuYmluZENoYW5uZWwocHJveHksIGZ1bmN0aW9uKGNoYW4pIHtcbiAgICBpZiAodGhpcy5jaGFuKSB7XG4gICAgICB0aGlzLmNoYW4uY2xvc2UoKTtcbiAgICB9XG4gICAgdGhpcy5jaGFuID0gY2hhbjtcbiAgICB0aGlzLmNoYW4ub25DbG9zZShmdW5jdGlvbigpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmNoYW47XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ21lc3NhZ2UnLCAnY2hhbm5lbCBib3VuZCB0byBlY2hvJyk7XG4gICAgdGhpcy5jaGFuLm9uKCdtZXNzYWdlJywgZnVuY3Rpb24obSkge1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdtZXNzYWdlJywgJ2Zyb20gY3VzdG9tIGNoYW5uZWw6ICcgKyBtKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9LmJpbmQodGhpcykpO1xufTtcblxuLyoqXG4gKiBTZW5kIGEgbWVzc2FnZSB0byB0aGUgYm91bmQgY3VzdG9tIGNoYW5uZWwuXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gc2VuZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbnRpbnVhdGlvbiBGdW5jdGlvbiB0byBjYWxsIHdoZW4gc2VuZGluZyBpcyBjb21wbGV0ZS5cbiAqIEBtZXRob2Qgc2VuZFxuICovXG5FY2hvX3VucHJpdmlsZWdlZC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uKHN0ciwgY29udGludWF0aW9uKSB7XG4gIGNvbnRpbnVhdGlvbigpO1xuICBpZiAodGhpcy5jaGFuKSB7XG4gICAgdGhpcy5jaGFuLmVtaXQoJ21lc3NhZ2UnLCBzdHIpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnbWVzc2FnZScsICdubyBjaGFubmVsIGF2YWlsYWJsZScpO1xuICB9XG59O1xuXG5leHBvcnRzLnByb3ZpZGVyID0gRWNob191bnByaXZpbGVnZWQ7XG5leHBvcnRzLm5hbWUgPSBcImNvcmUuZWNob1wiO1xuZXhwb3J0cy5mbGFncyA9IHttb2R1bGU6IHRydWV9O1xuIiwiLypnbG9iYWxzIGNvbnNvbGUgKi9cbi8qanNsaW50IGluZGVudDoyLHdoaXRlOnRydWUsc2xvcHB5OnRydWUsbm9kZTp0cnVlICovXG5cbi8qKlxuICogQW4gb0F1dGggbWV0YS1wcm92aWRlciBhbGxvd2luZyBtdWx0aXBsZSBwbGF0Zm9ybS1kZXBlbmRhbnRcbiAqIG9BdXRoIGltcGxlbWVudGF0aW9ucyB0byBzZXJ2ZSBhcyB0aGUgcmVkaXJlY3RVUkwgZm9yIGFuIG9BdXRoIGZsb3cuXG4gKiBUaGUgY29yZSBpbXBsZW1lbnRhdGlvbnMgYXJlIHByb3ZpZGVkIGluIHByb3ZpZGVycy9vYXV0aCwgYW5kIGFyZVxuICogc3VwcGxlbWVudGVkIGluIHBsYXRmb3JtLWRlcGVuZGVudCByZXBvc2l0b3JpZXMuXG4gKlxuICovXG52YXIgT0F1dGggPSBmdW5jdGlvbiAoaGFuZGxlcnMsIGNhcCwgZGlzcGF0Y2hFdmVudCkge1xuICB0aGlzLmhhbmRsZXJzID0gaGFuZGxlcnM7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCA9IGRpc3BhdGNoRXZlbnQ7XG4gIHRoaXMub25nb2luZyA9IHt9O1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciBvQXV0aCBoYW5kbGVycy5cbiAqIFRoaXMgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQgYmVmb3JlIHByb3ZpZGVyIGlzIHVzZWQsIGFuZCBiaW5kcyB0aGUgY3VycmVudFxuICogb0F1dGggcHJvdmlkZXIgdG8gYmUgYXNzb2NpYXRlZCB3aXRoIHJlZ2lzdGVyZWQgaGFuZGxlcnMuIFRoaXMgaXMgdXNlZCBzb1xuICogdGhhdCBoYW5kbGVycyB3aGljaCBhcmUgcmVnaXN0ZXJlZCBieSB0aGUgdXNlciBhcHBseSBvbmx5IHRoZSB0aGUgZnJlZWRvbSgpXG4gKiBzZXR1cCBjYWxsIHRoZXkgYXJlIGFzc29jaWF0ZWQgd2l0aCwgd2hpbGUgc3RpbGwgYmVpbmcgcmVnaXN0ZXJlZCBhY3Jvc3NcbiAqIG11bHRpcGxlIGluc3RhbmNlcyBvZiBPQXV0aCBwcm92aWRlcnMuXG4gKlxuICogQG1ldGhvZCByZWdpc3RlclxuICogQHBhcmFtIHtbY29uc3RydWN0b3JdfSBoYW5kbGVyc1xuICogQHByaXZhdGVcbiAqL1xuT0F1dGgucmVnaXN0ZXIgPSBmdW5jdGlvbiAoaGFuZGxlcnMpIHtcbiAgdmFyIGksXG4gICAgICBib3VuZEhhbmRsZXJzID0gW107XG4gIGlmICghaGFuZGxlcnMgfHwgIWhhbmRsZXJzLmxlbmd0aCkge1xuICAgIHJldHVybiBPQXV0aC5yZXNldCgpO1xuICB9XG5cbiAgZm9yIChpID0gMDsgaSA8IGhhbmRsZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgYm91bmRIYW5kbGVycy5wdXNoKG5ldyBoYW5kbGVyc1tpXSgpKTtcbiAgfVxuICBleHBvcnRzLnByb3ZpZGVyID0gT0F1dGguYmluZCh0aGlzLCBib3VuZEhhbmRsZXJzKTtcbn07XG5cbi8qKlxuICogUmVzZXQgdGhlIG9BdXRoIHByb3ZpZGVyIHJlZ2lzdHJhdGlvbnMuXG4gKiBAbWV0aG9kIHJlc2V0XG4gKiBAcHJpdmF0ZVxuICovXG5PQXV0aC5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgZXhwb3J0cy5wcm92aWRlciA9IE9BdXRoLmJpbmQodGhpcywgW10pO1xufTtcblxuLyoqXG4gKiBJbmRpY2F0ZSB0aGUgaW50ZW50aW9uIHRvIGluaXRpYXRlIGFuIG9BdXRoIGZsb3csIGFsbG93aW5nIGFuIGFwcHJvcHJpYXRlXG4gKiBvQXV0aCBwcm92aWRlciB0byBiZWdpbiBtb25pdG9yaW5nIGZvciByZWRpcmVjdGlvbi5cbiAqXG4gKiBAbWV0aG9kIGluaXRpYXRlT0F1dGhcbiAqIEBwYXJhbSB7c3RyaW5nW119IHJlZGlyZWN0VVJJcyAtIG9BdXRoIHJlZGlyZWN0aW9uIFVSSXMgcmVnaXN0ZXJlZCB3aXRoIHRoZVxuICogICAgIHByb3ZpZGVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29udGludWF0aW9uIC0gRnVuY3Rpb24gdG8gY2FsbCB3aGVuIGNvbXBsZXRlXG4gKiAgICBFeHBlY3RlZCB0byBzZWUgYSB2YWx1ZSBvZiBzY2hlbWE6IHt7cmVkaXJlY3Q6U3RyaW5nLCBzdGF0ZTpTdHJpbmd9fVxuICogICAgd2hlcmUgJ3JlZGlyZWN0JyBpcyB0aGUgY2hvc2VuIHJlZGlyZWN0IFVSSVxuICogICAgYW5kICdzdGF0ZScgaXMgdGhlIHN0YXRlIHRvIHBhc3MgdG8gdGhlIFVSSSBvbiBjb21wbGV0aW9uIG9mIG9BdXRoXG4gKi9cbk9BdXRoLnByb3RvdHlwZS5pbml0aWF0ZU9BdXRoID0gZnVuY3Rpb24gKHJlZGlyZWN0VVJJcywgY29udGludWF0aW9uKSB7XG4gIHZhciBwcm9taXNlLCBpLCBzdWNjZXNzQ2FsbGJhY2s7XG4gIHN1Y2Nlc3NDYWxsYmFjayA9IGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgIHRoaXMub25nb2luZ1tyZXN1bHQuc3RhdGVdID0gdGhpcy5oYW5kbGVyc1tpXTtcbiAgICBjb250aW51YXRpb24ocmVzdWx0KTtcbiAgfS5iaW5kKHRoaXMpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCB0aGlzLmhhbmRsZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKHRoaXMuaGFuZGxlcnNbaV0uaW5pdGlhdGVPQXV0aChyZWRpcmVjdFVSSXMsIHN1Y2Nlc3NDYWxsYmFjaykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgLy9JZiBoZXJlLCB3ZSBoYXZlIG5vIGNvbXBhdGlibGUgcHJvdmlkZXJzXG4gIGNvbnRpbnVhdGlvbihudWxsLCB7XG4gICAgJ2VycmNvZGUnOiAnVU5LTk9XTicsXG4gICAgJ21lc3NhZ2UnOiAnTm8gcmVxdWVzdGVkIHJlZGlyZWN0cyBjYW4gYmUgaGFuZGxlZC4nXG4gIH0pO1xuICByZXR1cm47XG59O1xuXG4vKipcbiAqIG9BdXRoIGNsaWVudC1zaWRlIGZsb3cgLSBsYXVuY2ggdGhlIHByb3ZpZGVkIFVSTFxuICogVGhpcyBtdXN0IGJlIGNhbGxlZCBhZnRlciBpbml0aWF0ZU9BdXRoIHdpdGggdGhlIHJldHVybmVkIHN0YXRlIG9iamVjdFxuICpcbiAqIEBtZXRob2QgbGF1bmNoQXV0aEZsb3dcbiAqIEBwYXJhbSB7U3RyaW5nfSBhdXRoVXJsIC0gVGhlIFVSTCB0aGF0IGluaXRpYXRlcyB0aGUgYXV0aCBmbG93LlxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgc3RyaW5nPn0gc3RhdGVPYmogLSBUaGUgcmV0dXJuIHZhbHVlIGZyb20gaW5pdGlhdGVPQXV0aFxuICogQHBhcmFtIHtCb29sZWFufSBpbnRlcmFjdGl2ZSAtIFdoZXRoZXIgdG8gbGF1bmNoIGFuIGludGVyYWN0aXZlIE9BdXRoIGZsb3cuXG4gKiAgICBEZWZhdWx0cyB0byB0cnVlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29udGludWF0aW9uIC0gRnVuY3Rpb24gdG8gY2FsbCB3aGVuIGNvbXBsZXRlXG4gKiAgICBFeHBlY3RlZCB0byBzZWUgYSBTdHJpbmcgdmFsdWUgdGhhdCBpcyB0aGUgcmVzcG9uc2UgVXJsIGNvbnRhaW5pbmcgdGhlIGFjY2VzcyB0b2tlblxuICovXG5PQXV0aC5wcm90b3R5cGUubGF1bmNoQXV0aEZsb3cgPSBmdW5jdGlvbihhdXRoVXJsLCBzdGF0ZU9iaiwgaW50ZXJhY3RpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51YXRpb24pIHtcbiAgaWYgKCF0aGlzLm9uZ29pbmcuaGFzT3duUHJvcGVydHkoc3RhdGVPYmouc3RhdGUpKSB7XG4gICAgY29udGludWF0aW9uKHVuZGVmaW5lZCwge1xuICAgICAgJ2VycmNvZGUnOiAnVU5LTk9XTicsXG4gICAgICAnbWVzc2FnZSc6ICdZb3UgbXVzdCBiZWdpbiB0aGUgb0F1dGggZmxvdyB3aXRoIGluaXRpYXRlT0F1dGggZmlyc3QnXG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChpbnRlcmFjdGl2ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaW50ZXJhY3RpdmUgPSB0cnVlO1xuICB9XG4gIHRoaXMub25nb2luZ1tzdGF0ZU9iai5zdGF0ZV0ubGF1bmNoQXV0aEZsb3coXG4gICAgICBhdXRoVXJsLCBzdGF0ZU9iaiwgaW50ZXJhY3RpdmUsIGNvbnRpbnVhdGlvbik7XG4gIGRlbGV0ZSB0aGlzLm9uZ29pbmdbc3RhdGVPYmouc3RhdGVdO1xufTtcblxuZXhwb3J0cy5yZWdpc3RlciA9IE9BdXRoLnJlZ2lzdGVyO1xuZXhwb3J0cy5yZXNldCA9IE9BdXRoLnJlc2V0O1xuZXhwb3J0cy5wcm92aWRlciA9IE9BdXRoLmJpbmQodGhpcywgW10pO1xuZXhwb3J0cy5uYW1lID0gJ2NvcmUub2F1dGgnO1xuIiwiLypnbG9iYWxzIG5hdmlnYXRvciovXG4vKmpzaGludCBub2RlOnRydWUqL1xuXG4vLyBUaGlzIHByb3ZpZGVycyBhbGxvd3MgZnJlZWRvbSBtb2R1bGVzIHRvIG1vbml0b3IgdGhlIG9ubGluZSBzdGF0dXNcbi8vIHJlcG9ydGVkIGJ5IHRoZSBicm93c2VyLiAgVGhpcyBpcyB1c2VmdWwgKDEpIHRvIHdvcmsgYXJvdW5kIGEgQ2hyb21pdW1cbi8vIGJ1ZyB0aGF0IG1ha2VzIG5hdmlnYXRvci5vbkxpbmUgYWx3YXlzIGZhbHNlIGluIGEgV2ViIFdvcmtlclxuLy8gKGh0dHBzOi8vY3JidWcuY29tLzExNDQ3NSkgYW5kICgyKSB0byBwcm92aWRlIGV2ZW50cyBvbiBzdGF0dXMgY2hhbmdlc1xuLy8gaW4gV2ViIFdvcmtlcnMsIHdoaWNoIGFyZSBub3QgYXZhaWxhYmxlIG90aGVyd2lzZSBkdWUgdG8gdGhlIGxhY2sgb2YgYVxuLy8gV2luZG93IG9iamVjdC5cblxudmFyIFByb21pc2VDb21wYXQgPSByZXF1aXJlKCdlczYtcHJvbWlzZScpLlByb21pc2U7XG4vLyBBbGlhcyBuYXZpZ2F0b3Ivd2luZG93IGlmIGRlZmluZWQsIGVsc2Ugc2V0IHRvIGZhbHNlXG52YXIgbmF2ID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yO1xudmFyIHdpbiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdztcblxudmFyIE9ubGluZVByb3ZpZGVyID0gZnVuY3Rpb24oY2FwLCBkaXNwYXRjaEV2ZW50KSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICB0aGlzLl9zZXR1cExpc3RlbmVycyhkaXNwYXRjaEV2ZW50KTtcbn07XG5cbk9ubGluZVByb3ZpZGVyLnByb3RvdHlwZS5pc09ubGluZSA9IGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgaWYgKCFuYXYgfHwgdHlwZW9mIG5hdi5vbkxpbmUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc29sZS53YXJuKFwiVHJ5aW5nIHRvIHVzZSBjb3JlLm9ubGluZSBBUEkgd2l0aG91dCBjbGllbnQgc3VwcG9ydFwiKTtcbiAgICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHRydWUpOyAgLy8gQ29ubmVjdGVkXG4gIH1cbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZShuYXYub25MaW5lKTtcbn07XG5cbk9ubGluZVByb3ZpZGVyLnByb3RvdHlwZS5fc2V0dXBMaXN0ZW5lcnMgPSBmdW5jdGlvbihkaXNwYXRjaEV2ZW50KSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICBpZiAoIXdpbiB8fCB0eXBlb2Ygd2luLm9ub25saW5lID09PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnNvbGUud2FybihcIlRyeWluZyB0byB1c2UgY29yZS5vbmxpbmUgZXZlbnRzIHdpdGhvdXQgY2xpZW50IHN1cHBvcnRcIik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGV2ZW50cyA9IFtcbiAgICBcIm9ubGluZVwiLFxuICAgIFwib2ZmbGluZVwiXG4gIF07XG4gIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICB3aW4uYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGRpc3BhdGNoRXZlbnQuYmluZCh0aGlzLCBldmVudE5hbWUpKTtcbiAgfSk7XG59O1xuXG5leHBvcnRzLm5hbWUgPSBcImNvcmUub25saW5lXCI7XG5leHBvcnRzLnByb3ZpZGVyID0gT25saW5lUHJvdmlkZXI7XG5leHBvcnRzLnN0eWxlID0gXCJwcm92aWRlUHJvbWlzZXNcIjtcbmV4cG9ydHMuZmxhZ3MgPSB7IHByb3ZpZGVyOiB0cnVlIH07XG5leHBvcnRzLnNldE1vY2tzID0gZnVuY3Rpb24obW9ja05hdiwgbW9ja1dpbikge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgbmF2ID0gbW9ja05hdjtcbiAgd2luID0gbW9ja1dpbjtcbn07XG4iLCIvKmdsb2JhbHMgY29uc29sZSwgUlRDUGVlckNvbm5lY3Rpb24sIHdlYmtpdFJUQ1BlZXJDb25uZWN0aW9uICovXG4vKmdsb2JhbHMgbW96UlRDUGVlckNvbm5lY3Rpb24sIFJUQ1Nlc3Npb25EZXNjcmlwdGlvbiwgUlRDSWNlQ2FuZGlkYXRlICovXG4vKmdsb2JhbHMgbW96UlRDU2Vzc2lvbkRlc2NyaXB0aW9uLCBtb3pSVENJY2VDYW5kaWRhdGUgKi9cbi8qZ2xvYmFscyBBcnJheUJ1ZmZlciwgQmxvYiAqL1xuLypqc2xpbnQgaW5kZW50OjIsc2xvcHB5OnRydWUsbm9kZTp0cnVlICovXG4vKipcbiAqIERhdGFQZWVyIC0gYSBjbGFzcyB0aGF0IHdyYXBzIHBlZXIgY29ubmVjdGlvbnMgYW5kIGRhdGEgY2hhbm5lbHMuXG4gKi9cbi8vIFRPRE86IGNoZWNrIHRoYXQgSGFuZGxpbmcgb2YgcHJhbnN3ZXIgaXMgdHJlYXRlZCBhcHByb3ByaWF0ZWx5LlxudmFyIFNpbXBsZURhdGFQZWVyU3RhdGUgPSB7XG4gIERJU0NPTk5FQ1RFRDogJ0RJU0NPTk5FQ1RFRCcsXG4gIENPTk5FQ1RJTkc6ICdDT05ORUNUSU5HJyxcbiAgQ09OTkVDVEVEOiAnQ09OTkVDVEVEJ1xufTtcblxuZnVuY3Rpb24gU2ltcGxlRGF0YVBlZXIocGVlck5hbWUsIHN0dW5TZXJ2ZXJzLCBkYXRhQ2hhbm5lbENhbGxiYWNrcywgbW9ja3MpIHtcbiAgdmFyIGNvbnN0cmFpbnRzLFxuICAgIGNvbmZpZyxcbiAgICBpO1xuICB0aGlzLnBlZXJOYW1lID0gcGVlck5hbWU7XG4gIHRoaXMuY2hhbm5lbHMgPSB7fTtcbiAgdGhpcy5kYXRhQ2hhbm5lbENhbGxiYWNrcyA9IGRhdGFDaGFubmVsQ2FsbGJhY2tzO1xuICB0aGlzLm9uQ29ubmVjdGVkUXVldWUgPSBbXTtcblxuICBpZiAodHlwZW9mIG1vY2tzLlJUQ1BlZXJDb25uZWN0aW9uICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdGhpcy5SVENQZWVyQ29ubmVjdGlvbiA9IG1vY2tzLlJUQ1BlZXJDb25uZWN0aW9uO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB3ZWJraXRSVENQZWVyQ29ubmVjdGlvbiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHRoaXMuUlRDUGVlckNvbm5lY3Rpb24gPSB3ZWJraXRSVENQZWVyQ29ubmVjdGlvbjtcbiAgfSBlbHNlIGlmICh0eXBlb2YgbW96UlRDUGVlckNvbm5lY3Rpb24gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB0aGlzLlJUQ1BlZXJDb25uZWN0aW9uID0gbW96UlRDUGVlckNvbm5lY3Rpb247XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBlbnZpcm9ubWVudCBkb2VzIG5vdCBhcHBlYXIgdG8gc3VwcG9ydCBSVENQZWVyQ29ubmVjdGlvblwiKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgbW9ja3MuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdGhpcy5SVENTZXNzaW9uRGVzY3JpcHRpb24gPSBtb2Nrcy5SVENTZXNzaW9uRGVzY3JpcHRpb247XG4gIH0gZWxzZSBpZiAodHlwZW9mIFJUQ1Nlc3Npb25EZXNjcmlwdGlvbiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHRoaXMuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uID0gUlRDU2Vzc2lvbkRlc2NyaXB0aW9uO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBtb3pSVENTZXNzaW9uRGVzY3JpcHRpb24gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB0aGlzLlJUQ1Nlc3Npb25EZXNjcmlwdGlvbiA9IG1velJUQ1Nlc3Npb25EZXNjcmlwdGlvbjtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIGVudmlyb25tZW50IGRvZXMgbm90IGFwcGVhciB0byBzdXBwb3J0IFJUQ1Nlc3Npb25EZXNjcmlwdGlvblwiKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgbW9ja3MuUlRDSWNlQ2FuZGlkYXRlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdGhpcy5SVENJY2VDYW5kaWRhdGUgPSBtb2Nrcy5SVENJY2VDYW5kaWRhdGU7XG4gIH0gZWxzZSBpZiAodHlwZW9mIFJUQ0ljZUNhbmRpZGF0ZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHRoaXMuUlRDSWNlQ2FuZGlkYXRlID0gUlRDSWNlQ2FuZGlkYXRlO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBtb3pSVENJY2VDYW5kaWRhdGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB0aGlzLlJUQ0ljZUNhbmRpZGF0ZSA9IG1velJUQ0ljZUNhbmRpZGF0ZTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIGVudmlyb25tZW50IGRvZXMgbm90IGFwcGVhciB0byBzdXBwb3J0IFJUQ0ljZUNhbmRpZGF0ZVwiKTtcbiAgfVxuXG5cbiAgY29uc3RyYWludHMgPSB7XG4gICAgb3B0aW9uYWw6IFt7RHRsc1NydHBLZXlBZ3JlZW1lbnQ6IHRydWV9XVxuICB9O1xuICAvLyBBIHdheSB0byBzcGVhayB0byB0aGUgcGVlciB0byBzZW5kIFNEUCBoZWFkZXJzIGV0Yy5cbiAgdGhpcy5zZW5kU2lnbmFsTWVzc2FnZSA9IG51bGw7XG5cbiAgdGhpcy5wYyA9IG51bGw7ICAvLyBUaGUgcGVlciBjb25uZWN0aW9uLlxuICAvLyBHZXQgVFVSTiBzZXJ2ZXJzIGZvciB0aGUgcGVlciBjb25uZWN0aW9uLlxuICBjb25maWcgPSB7aWNlU2VydmVyczogW119O1xuICBmb3IgKGkgPSAwOyBpIDwgc3R1blNlcnZlcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25maWcuaWNlU2VydmVycy5wdXNoKHtcbiAgICAgICd1cmwnIDogc3R1blNlcnZlcnNbaV1cbiAgICB9KTtcbiAgfVxuICB0aGlzLnBjID0gbmV3IHRoaXMuUlRDUGVlckNvbm5lY3Rpb24oY29uZmlnLCBjb25zdHJhaW50cyk7XG4gIC8vIEFkZCBiYXNpYyBldmVudCBoYW5kbGVycy5cbiAgdGhpcy5wYy5hZGRFdmVudExpc3RlbmVyKFwiaWNlY2FuZGlkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkljZUNhbGxiYWNrLmJpbmQodGhpcykpO1xuICB0aGlzLnBjLmFkZEV2ZW50TGlzdGVuZXIoXCJuZWdvdGlhdGlvbm5lZWRlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25OZWdvdGlhdGlvbk5lZWRlZC5iaW5kKHRoaXMpKTtcbiAgdGhpcy5wYy5hZGRFdmVudExpc3RlbmVyKFwiZGF0YWNoYW5uZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRGF0YUNoYW5uZWwuYmluZCh0aGlzKSk7XG4gIHRoaXMucGMuYWRkRXZlbnRMaXN0ZW5lcihcInNpZ25hbGluZ3N0YXRlY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUT0RPOiBjb21lIHVwIHdpdGggYSBiZXR0ZXIgd2F5IHRvIGRldGVjdCBjb25uZWN0aW9uLiAgV2Ugc3RhcnQgb3V0XG4gICAgLy8gYXMgXCJzdGFibGVcIiBldmVuIGJlZm9yZSB3ZSBhcmUgY29ubmVjdGVkLlxuICAgIC8vIFRPRE86IHRoaXMgaXMgbm90IGZpcmVkIGZvciBjb25uZWN0aW9ucyBjbG9zZWQgYnkgdGhlIG90aGVyIHNpZGUuXG4gICAgLy8gVGhpcyB3aWxsIGJlIGZpeGVkIGluIG0zNywgYXQgdGhhdCBwb2ludCB3ZSBzaG91bGQgZGlzcGF0Y2ggYW4gb25DbG9zZVxuICAgIC8vIGV2ZW50IGhlcmUgZm9yIGZyZWVkb20udHJhbnNwb3J0IHRvIHBpY2sgdXAuXG4gICAgaWYgKHRoaXMucGMuc2lnbmFsaW5nU3RhdGUgPT09IFwic3RhYmxlXCIpIHtcbiAgICAgIHRoaXMucGNTdGF0ZSA9IFNpbXBsZURhdGFQZWVyU3RhdGUuQ09OTkVDVEVEO1xuICAgICAgdGhpcy5vbkNvbm5lY3RlZFF1ZXVlLm1hcChmdW5jdGlvbiAoY2FsbGJhY2spIHsgY2FsbGJhY2soKTsgfSk7XG4gICAgfVxuICB9LmJpbmQodGhpcykpO1xuICAvLyBUaGlzIHN0YXRlIHZhcmlhYmxlIGlzIHVzZWQgdG8gZmFrZSBvZmZlci9hbnN3ZXIgd2hlbiB0aGV5IGFyZSB3cm9uZ2x5XG4gIC8vIHJlcXVlc3RlZCBhbmQgd2UgcmVhbGx5IGp1c3QgbmVlZCB0byByZXVzZSB3aGF0IHdlIGFscmVhZHkgaGF2ZS5cbiAgdGhpcy5wY1N0YXRlID0gU2ltcGxlRGF0YVBlZXJTdGF0ZS5ESVNDT05ORUNURUQ7XG5cbiAgLy8gTm90ZTogdG8gYWN0dWFsbHkgZG8gc29tZXRoaW5nIHdpdGggZGF0YSBjaGFubmVscyBvcGVuZWQgYnkgYSBwZWVyLCB3ZVxuICAvLyBuZWVkIHNvbWVvbmUgdG8gbWFuYWdlIFwiZGF0YWNoYW5uZWxcIiBldmVudC5cbn1cblxuU2ltcGxlRGF0YVBlZXIucHJvdG90eXBlLmNyZWF0ZU9mZmVyID0gZnVuY3Rpb24gKGNvbnN0YWludHMsIGNvbnRpbnVhdGlvbikge1xuICB0aGlzLnBjLmNyZWF0ZU9mZmVyKGNvbnRpbnVhdGlvbiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ2NvcmUucGVlcmNvbm5lY3Rpb24gY3JlYXRlT2ZmZXIgZmFpbGVkLicpO1xuICB9LCBjb25zdGFpbnRzKTtcbn07XG5cblNpbXBsZURhdGFQZWVyLnByb3RvdHlwZS5ydW5XaGVuQ29ubmVjdGVkID0gZnVuY3Rpb24gKGZ1bmMpIHtcbiAgaWYgKHRoaXMucGNTdGF0ZSA9PT0gU2ltcGxlRGF0YVBlZXJTdGF0ZS5DT05ORUNURUQpIHtcbiAgICBmdW5jKCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5vbkNvbm5lY3RlZFF1ZXVlLnB1c2goZnVuYyk7XG4gIH1cbn07XG5cblNpbXBsZURhdGFQZWVyLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKGNoYW5uZWxJZCwgbWVzc2FnZSwgY29udGludWF0aW9uKSB7XG4gIHRoaXMuY2hhbm5lbHNbY2hhbm5lbElkXS5zZW5kKG1lc3NhZ2UpO1xuICBjb250aW51YXRpb24oKTtcbn07XG5cblNpbXBsZURhdGFQZWVyLnByb3RvdHlwZS5vcGVuRGF0YUNoYW5uZWwgPSBmdW5jdGlvbiAoY2hhbm5lbElkLCBjb250aW51YXRpb24pIHtcbiAgdmFyIGRhdGFDaGFubmVsID0gdGhpcy5wYy5jcmVhdGVEYXRhQ2hhbm5lbChjaGFubmVsSWQsIHt9KTtcbiAgZGF0YUNoYW5uZWwub25vcGVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYWRkRGF0YUNoYW5uZWwoY2hhbm5lbElkLCBkYXRhQ2hhbm5lbCk7XG4gICAgY29udGludWF0aW9uKCk7XG4gIH0uYmluZCh0aGlzKTtcbiAgZGF0YUNoYW5uZWwub25lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAvL0AocnlzY2hlbmcpIHRvZG8gLSByZXBsYWNlIHdpdGggZXJyb3JzIHRoYXQgd29yayBhY3Jvc3MgdGhlIGludGVyZmFjZVxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICBjb250aW51YXRpb24odW5kZWZpbmVkLCBlcnIpO1xuICB9O1xuICAvLyBGaXJlZm94IGRvZXMgbm90IGZpcmUgXCJuZWdvdGlhdGlvbm5lZWRlZFwiLCBzbyB3ZSBuZWVkIHRvXG4gIC8vIG5lZ290YXRlIGhlcmUgaWYgd2UgYXJlIG5vdCBjb25uZWN0ZWQuXG4gIC8vIFNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD04NDA3MjhcbiAgaWYgKHR5cGVvZiBtb3pSVENQZWVyQ29ubmVjdGlvbiAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgdGhpcy5wY1N0YXRlID09PSBTaW1wbGVEYXRhUGVlclN0YXRlLkRJU0NPTk5FQ1RFRCkge1xuICAgIHRoaXMubmVnb3RpYXRlQ29ubmVjdGlvbigpO1xuICB9XG59O1xuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUuY2xvc2VDaGFubmVsID0gZnVuY3Rpb24gKGNoYW5uZWxJZCkge1xuICBpZiAodGhpcy5jaGFubmVsc1tjaGFubmVsSWRdICE9PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLmNoYW5uZWxzW2NoYW5uZWxJZF0uY2xvc2UoKTtcbiAgICBkZWxldGUgdGhpcy5jaGFubmVsc1tjaGFubmVsSWRdO1xuICB9XG59O1xuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUuZ2V0QnVmZmVyZWRBbW91bnQgPSBmdW5jdGlvbiAoY2hhbm5lbElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVhdGlvbikge1xuICBpZiAodGhpcy5jaGFubmVsc1tjaGFubmVsSWRdICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZGF0YUNoYW5uZWwgPSB0aGlzLmNoYW5uZWxzW2NoYW5uZWxJZF07XG4gICAgcmV0dXJuIGRhdGFDaGFubmVsLmJ1ZmZlcmVkQW1vdW50O1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcIk5vIGNoYW5uZWwgd2l0aCBpZDogXCIgKyBjaGFubmVsSWQpO1xufTtcblxuU2ltcGxlRGF0YVBlZXIucHJvdG90eXBlLnNldFNlbmRTaWduYWxNZXNzYWdlID0gZnVuY3Rpb24gKHNlbmRTaWduYWxNZXNzYWdlRm4pIHtcbiAgdGhpcy5zZW5kU2lnbmFsTWVzc2FnZSA9IHNlbmRTaWduYWxNZXNzYWdlRm47XG59O1xuXG4vLyBIYW5kbGUgYSBtZXNzYWdlIHNlbmQgb24gdGhlIHNpZ25hbGxpbmcgY2hhbm5lbCB0byB0aGlzIHBlZXIuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUuaGFuZGxlU2lnbmFsTWVzc2FnZSA9IGZ1bmN0aW9uIChtZXNzYWdlVGV4dCkge1xuICAvL2NvbnNvbGUubG9nKHRoaXMucGVlck5hbWUgKyBcIjogXCIgKyBcImhhbmRsZVNpZ25hbE1lc3NhZ2U6IFxcblwiICsgbWVzc2FnZVRleHQpO1xuICB2YXIganNvbiA9IEpTT04ucGFyc2UobWVzc2FnZVRleHQpLFxuICAgIGljZV9jYW5kaWRhdGU7XG5cbiAgLy8gVE9ETzogSWYgd2UgYXJlIG9mZmVyaW5nIGFuZCB0aGV5IGFyZSBhbHNvIG9mZmVycmluZyBhdCB0aGUgc2FtZSB0aW1lLFxuICAvLyBwaWNrIHRoZSBvbmUgd2hvIGhhcyB0aGUgbG93ZXIgcmFuZG9tSWQ/XG4gIC8vICh0aGlzLnBjLnNpZ25hbGluZ1N0YXRlID09IFwiaGF2ZS1sb2NhbC1vZmZlclwiICYmIGpzb24uc2RwICYmXG4gIC8vICAgIGpzb24uc2RwLnR5cGUgPT0gXCJvZmZlclwiICYmIGpzb24uc2RwLnJhbmRvbUlkIDwgdGhpcy5sb2NhbFJhbmRvbUlkKVxuICBpZiAoanNvbi5zZHApIHtcbiAgICAvLyBTZXQgdGhlIHJlbW90ZSBkZXNjcmlwdGlvbi5cbiAgICB0aGlzLnBjLnNldFJlbW90ZURlc2NyaXB0aW9uKFxuICAgICAgbmV3IHRoaXMuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKGpzb24uc2RwKSxcbiAgICAgIC8vIFN1Y2Nlc3NcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnBlZXJOYW1lICsgXCI6IHNldFJlbW90ZURlc2NyaXB0aW9uIHN1Y2NlZWRlZFwiKTtcbiAgICAgICAgaWYgKHRoaXMucGMucmVtb3RlRGVzY3JpcHRpb24udHlwZSA9PT0gXCJvZmZlclwiKSB7XG4gICAgICAgICAgdGhpcy5wYy5jcmVhdGVBbnN3ZXIodGhpcy5vbkRlc2NyaXB0aW9uLmJpbmQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgIC8vIEZhaWx1cmVcbiAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IodGhpcy5wZWVyTmFtZSArIFwiOiBcIiArXG4gICAgICAgICAgICBcInNldFJlbW90ZURlc2NyaXB0aW9uIGZhaWxlZDpcIiwgZSk7XG4gICAgICB9LmJpbmQodGhpcylcbiAgICApO1xuICB9IGVsc2UgaWYgKGpzb24uY2FuZGlkYXRlKSB7XG4gICAgLy8gQWRkIHJlbW90ZSBpY2UgY2FuZGlkYXRlLlxuICAgIC8vY29uc29sZS5sb2codGhpcy5wZWVyTmFtZSArIFwiOiBBZGRpbmcgaWNlIGNhbmRpZGF0ZTogXCIgKyBKU09OLnN0cmluZ2lmeShqc29uLmNhbmRpZGF0ZSkpO1xuICAgIGljZV9jYW5kaWRhdGUgPSBuZXcgdGhpcy5SVENJY2VDYW5kaWRhdGUoanNvbi5jYW5kaWRhdGUpO1xuICAgIHRoaXMucGMuYWRkSWNlQ2FuZGlkYXRlKGljZV9jYW5kaWRhdGUpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUud2Fybih0aGlzLnBlZXJOYW1lICsgXCI6IFwiICtcbiAgICAgICAgXCJoYW5kbGVTaWduYWxNZXNzYWdlIGdvdCB1bmV4cGVjdGVkIG1lc3NhZ2U6IFwiLCBtZXNzYWdlVGV4dCk7XG4gIH1cbn07XG5cbi8vIENvbm5lY3QgdG8gdGhlIHBlZXIgYnkgdGhlIHNpZ25hbGxpbmcgY2hhbm5lbC5cblNpbXBsZURhdGFQZWVyLnByb3RvdHlwZS5uZWdvdGlhdGVDb25uZWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnBjU3RhdGUgPSBTaW1wbGVEYXRhUGVlclN0YXRlLkNPTk5FQ1RJTkc7XG4gIHRoaXMucGMuY3JlYXRlT2ZmZXIoXG4gICAgdGhpcy5vbkRlc2NyaXB0aW9uLmJpbmQodGhpcyksXG4gICAgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IodGhpcy5wZWVyTmFtZSArIFwiOiBcIiArXG4gICAgICAgICAgXCJjcmVhdGVPZmZlciBmYWlsZWQ6IFwiLCBlLnRvU3RyaW5nKCkpO1xuICAgICAgdGhpcy5wY1N0YXRlID0gU2ltcGxlRGF0YVBlZXJTdGF0ZS5ESVNDT05ORUNURUQ7XG4gICAgfS5iaW5kKHRoaXMpXG4gICk7XG59O1xuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUuaXNDbG9zZWQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAhdGhpcy5wYyB8fCB0aGlzLnBjLnNpZ25hbGluZ1N0YXRlID09PSBcImNsb3NlZFwiO1xufTtcblxuU2ltcGxlRGF0YVBlZXIucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMuaXNDbG9zZWQoKSkge1xuICAgIHRoaXMucGMuY2xvc2UoKTtcbiAgfVxuICAvL2NvbnNvbGUubG9nKHRoaXMucGVlck5hbWUgKyBcIjogXCIgKyBcIkNsb3NlZCBwZWVyIGNvbm5lY3Rpb24uXCIpO1xufTtcblxuU2ltcGxlRGF0YVBlZXIucHJvdG90eXBlLmFkZERhdGFDaGFubmVsID0gZnVuY3Rpb24gKGNoYW5uZWxJZCwgY2hhbm5lbCkge1xuICB2YXIgY2FsbGJhY2tzID0gdGhpcy5kYXRhQ2hhbm5lbENhbGxiYWNrcztcbiAgdGhpcy5jaGFubmVsc1tjaGFubmVsSWRdID0gY2hhbm5lbDtcblxuICBpZiAoY2hhbm5lbC5yZWFkeVN0YXRlID09PSBcImNvbm5lY3RpbmdcIikge1xuICAgIGNoYW5uZWwub25vcGVuID0gY2FsbGJhY2tzLm9uT3BlbkZuLmJpbmQodGhpcywgY2hhbm5lbCwge2xhYmVsOiBjaGFubmVsSWR9KTtcbiAgfVxuXG4gIGNoYW5uZWwub25jbG9zZSA9IGNhbGxiYWNrcy5vbkNsb3NlRm4uYmluZCh0aGlzLCBjaGFubmVsLCB7bGFiZWw6IGNoYW5uZWxJZH0pO1xuXG4gIGNoYW5uZWwub25tZXNzYWdlID0gY2FsbGJhY2tzLm9uTWVzc2FnZUZuLmJpbmQodGhpcywgY2hhbm5lbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWw6IGNoYW5uZWxJZH0pO1xuXG4gIGNoYW5uZWwub25lcnJvciA9IGNhbGxiYWNrcy5vbkVycm9yRm4uYmluZCh0aGlzLCBjaGFubmVsLCB7bGFiZWw6IGNoYW5uZWx9KTtcbn07XG5cbi8vIFdoZW4gd2UgZ2V0IG91ciBkZXNjcmlwdGlvbiwgd2Ugc2V0IGl0IHRvIGJlIG91ciBsb2NhbCBkZXNjcmlwdGlvbiBhbmRcbi8vIHNlbmQgaXQgdG8gdGhlIHBlZXIuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUub25EZXNjcmlwdGlvbiA9IGZ1bmN0aW9uIChkZXNjcmlwdGlvbikge1xuICBpZiAodGhpcy5zZW5kU2lnbmFsTWVzc2FnZSkge1xuICAgIHRoaXMucGMuc2V0TG9jYWxEZXNjcmlwdGlvbihcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMucGVlck5hbWUgKyBcIjogc2V0TG9jYWxEZXNjcmlwdGlvbiBzdWNjZWVkZWRcIik7XG4gICAgICAgIHRoaXMuc2VuZFNpZ25hbE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkoeydzZHAnOiBkZXNjcmlwdGlvbn0pKTtcbiAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IodGhpcy5wZWVyTmFtZSArIFwiOiBcIiArXG4gICAgICAgICAgICBcInNldExvY2FsRGVzY3JpcHRpb24gZmFpbGVkOlwiLCBlKTtcbiAgICAgIH0uYmluZCh0aGlzKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcih0aGlzLnBlZXJOYW1lICsgXCI6IFwiICtcbiAgICAgICAgXCJfb25EZXNjcmlwdGlvbjogX3NlbmRTaWduYWxNZXNzYWdlIGlzIG5vdCBzZXQsIHNvIHdlIGRpZCBub3QgXCIgK1xuICAgICAgICAgICAgXCJzZXQgdGhlIGxvY2FsIGRlc2NyaXB0aW9uLiBcIik7XG4gIH1cbn07XG5cblNpbXBsZURhdGFQZWVyLnByb3RvdHlwZS5vbk5lZ290aWF0aW9uTmVlZGVkID0gZnVuY3Rpb24gKGUpIHtcbiAgLy9jb25zb2xlLmxvZyh0aGlzLnBlZXJOYW1lICsgXCI6IFwiICsgXCJvbk5lZ290aWF0aW9uTmVlZGVkXCIsXG4gIC8vICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkodGhpcy5fcGMpLCBlKTtcbiAgaWYgKHRoaXMucGNTdGF0ZSAhPT0gU2ltcGxlRGF0YVBlZXJTdGF0ZS5ESVNDT05ORUNURUQpIHtcbiAgICAvLyBOZWdvdGlhdGlvbiBtZXNzYWdlcyBhcmUgZmFsc2VseSByZXF1ZXN0ZWQgZm9yIG5ldyBkYXRhIGNoYW5uZWxzLlxuICAgIC8vICAgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC93ZWJydGMvaXNzdWVzL2RldGFpbD9pZD0yNDMxXG4gICAgLy8gVGhpcyBjb2RlIGlzIGEgaGFjayB0byBzaW1wbHkgcmVzZXQgdGhlIHNhbWUgbG9jYWwgYW5kIHJlbW90ZVxuICAgIC8vIGRlc2NyaXB0aW9uIHdoaWNoIHdpbGwgdHJpZ2dlciB0aGUgYXBwcm9wcmlhdGUgZGF0YSBjaGFubmVsIG9wZW4gZXZlbnQuXG4gICAgLy8gVE9ETzogZml4L3JlbW92ZSB0aGlzIHdoZW4gQ2hyb21lIGlzc3VlIGlzIGZpeGVkLlxuICAgIHZhciBsb2dTdWNjZXNzID0gZnVuY3Rpb24gKG9wKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMucGVlck5hbWUgKyBcIjogXCIgKyBvcCArIFwiIHN1Y2NlZWRlZCBcIik7XG4gICAgICB9LmJpbmQodGhpcyk7XG4gICAgfS5iaW5kKHRoaXMpLFxuICAgICAgbG9nRmFpbCA9IGZ1bmN0aW9uIChvcCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMucGVlck5hbWUgKyBcIjogXCIgKyBvcCArIFwiIGZhaWxlZDogXCIgKyBlKTtcbiAgICAgICAgfS5iaW5kKHRoaXMpO1xuICAgICAgfS5iaW5kKHRoaXMpO1xuICAgIGlmICh0aGlzLnBjLmxvY2FsRGVzY3JpcHRpb24gJiYgdGhpcy5wYy5yZW1vdGVEZXNjcmlwdGlvbiAmJlxuICAgICAgICB0aGlzLnBjLmxvY2FsRGVzY3JpcHRpb24udHlwZSA9PT0gXCJvZmZlclwiKSB7XG4gICAgICB0aGlzLnBjLnNldExvY2FsRGVzY3JpcHRpb24odGhpcy5wYy5sb2NhbERlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dTdWNjZXNzKFwic2V0TG9jYWxEZXNjcmlwdGlvblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nRmFpbChcInNldExvY2FsRGVzY3JpcHRpb25cIikpO1xuICAgICAgdGhpcy5wYy5zZXRSZW1vdGVEZXNjcmlwdGlvbih0aGlzLnBjLnJlbW90ZURlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nU3VjY2VzcyhcInNldFJlbW90ZURlc2NyaXB0aW9uXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nRmFpbChcInNldFJlbW90ZURlc2NyaXB0aW9uXCIpKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucGMubG9jYWxEZXNjcmlwdGlvbiAmJiB0aGlzLnBjLnJlbW90ZURlc2NyaXB0aW9uICYmXG4gICAgICAgIHRoaXMucGMubG9jYWxEZXNjcmlwdGlvbi50eXBlID09PSBcImFuc3dlclwiKSB7XG4gICAgICB0aGlzLnBjLnNldFJlbW90ZURlc2NyaXB0aW9uKHRoaXMucGMucmVtb3RlRGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dTdWNjZXNzKFwic2V0UmVtb3RlRGVzY3JpcHRpb25cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dGYWlsKFwic2V0UmVtb3RlRGVzY3JpcHRpb25cIikpO1xuICAgICAgdGhpcy5wYy5zZXRMb2NhbERlc2NyaXB0aW9uKHRoaXMucGMubG9jYWxEZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nU3VjY2VzcyhcInNldExvY2FsRGVzY3JpcHRpb25cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ0ZhaWwoXCJzZXRMb2NhbERlc2NyaXB0aW9uXCIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcih0aGlzLnBlZXJOYW1lICsgJywgb25OZWdvdGlhdGlvbk5lZWRlZCBmYWlsZWQnKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMubmVnb3RpYXRlQ29ubmVjdGlvbigpO1xufTtcblxuU2ltcGxlRGF0YVBlZXIucHJvdG90eXBlLm9uSWNlQ2FsbGJhY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgaWYgKGV2ZW50LmNhbmRpZGF0ZSkge1xuICAgIC8vIFNlbmQgSWNlQ2FuZGlkYXRlIHRvIHBlZXIuXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLnBlZXJOYW1lICsgXCI6IFwiICsgXCJpY2UgY2FsbGJhY2sgd2l0aCBjYW5kaWRhdGVcIiwgZXZlbnQpO1xuICAgIGlmICh0aGlzLnNlbmRTaWduYWxNZXNzYWdlKSB7XG4gICAgICB0aGlzLnNlbmRTaWduYWxNZXNzYWdlKEpTT04uc3RyaW5naWZ5KHsnY2FuZGlkYXRlJzogZXZlbnQuY2FuZGlkYXRlfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4odGhpcy5wZWVyTmFtZSArIFwiOiBcIiArIFwiX29uRGVzY3JpcHRpb246IF9zZW5kU2lnbmFsTWVzc2FnZSBpcyBub3Qgc2V0LlwiKTtcbiAgICB9XG4gIH1cbn07XG5cblNpbXBsZURhdGFQZWVyLnByb3RvdHlwZS5vblNpZ25hbGluZ1N0YXRlQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAvL2NvbnNvbGUubG9nKHRoaXMucGVlck5hbWUgKyBcIjogXCIgKyBcIm9uU2lnbmFsaW5nU3RhdGVDaGFuZ2U6IFwiLCB0aGlzLl9wYy5zaWduYWxpbmdTdGF0ZSk7XG4gIGlmICh0aGlzLnBjLnNpZ25hbGluZ1N0YXRlID09PSBcInN0YWJsZVwiKSB7XG4gICAgdGhpcy5wY1N0YXRlID0gU2ltcGxlRGF0YVBlZXJTdGF0ZS5DT05ORUNURUQ7XG4gICAgdGhpcy5vbkNvbm5lY3RlZFF1ZXVlLm1hcChmdW5jdGlvbiAoY2FsbGJhY2spIHsgY2FsbGJhY2soKTsgfSk7XG4gIH1cbn07XG5cblNpbXBsZURhdGFQZWVyLnByb3RvdHlwZS5vbkRhdGFDaGFubmVsID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHRoaXMuYWRkRGF0YUNoYW5uZWwoZXZlbnQuY2hhbm5lbC5sYWJlbCwgZXZlbnQuY2hhbm5lbCk7XG4gIC8vIFJUQ0RhdGFDaGFubmVscyBjcmVhdGVkIGJ5IGEgUlRDRGF0YUNoYW5uZWxFdmVudCBoYXZlIGFuIGluaXRpYWxcbiAgLy8gc3RhdGUgb2Ygb3Blbiwgc28gdGhlIG9ub3BlbiBldmVudCBmb3IgdGhlIGNoYW5uZWwgd2lsbCBub3RcbiAgLy8gZmlyZS4gV2UgbmVlZCB0byBmaXJlIHRoZSBvbk9wZW5EYXRhQ2hhbm5lbCBldmVudCBoZXJlXG4gIC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL3dlYnJ0Yy8jaWRsLWRlZi1SVENEYXRhQ2hhbm5lbFN0YXRlXG5cbiAgLy8gRmlyZWZveCBjaGFubmVscyBkbyBub3QgaGF2ZSBhbiBpbml0aWFsIHN0YXRlIG9mIFwib3BlblwiXG4gIC8vIFNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xMDAwNDc4XG4gIGlmIChldmVudC5jaGFubmVsLnJlYWR5U3RhdGUgPT09IFwib3BlblwiKSB7XG4gICAgdGhpcy5kYXRhQ2hhbm5lbENhbGxiYWNrcy5vbk9wZW5GbihldmVudC5jaGFubmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiBldmVudC5jaGFubmVsLmxhYmVsfSk7XG4gIH1cbn07XG5cbi8vIF9zaWduYWxsaW5nQ2hhbm5lbCBpcyBhIGNoYW5uZWwgZm9yIGVtaXR0aW5nIGV2ZW50cyBiYWNrIHRvIHRoZSBmcmVlZG9tIEh1Yi5cbmZ1bmN0aW9uIFBlZXJDb25uZWN0aW9uKHBvcnRNb2R1bGUsIGRpc3BhdGNoRXZlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBSVENQZWVyQ29ubmVjdGlvbiwgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgUlRDSWNlQ2FuZGlkYXRlKSB7XG4gIC8vIENoYW5uZWwgZm9yIGVtaXR0aW5nIGV2ZW50cyB0byBjb25zdW1lci5cbiAgdGhpcy5kaXNwYXRjaEV2ZW50ID0gZGlzcGF0Y2hFdmVudDtcblxuICAvLyBhIChob3BlZnVsbHkgdW5pcXVlKSBJRCBmb3IgZGVidWdnaW5nLlxuICB0aGlzLnBlZXJOYW1lID0gXCJwXCIgKyBNYXRoLnJhbmRvbSgpO1xuXG4gIC8vIFRoaXMgaXMgdGhlIHBvcnRBcHAgKGRlZmluZWQgaW4gZnJlZWRvbS9zcmMvcG9ydC1hcHAuanMpLiBBIHdheSB0byBzcGVha1xuICAvLyB0byBmcmVlZG9tLlxuICB0aGlzLmZyZWVkb21Nb2R1bGUgPSBwb3J0TW9kdWxlLm1vZHVsZTtcblxuICAvLyBGb3IgdGVzdHMgd2UgbWF5IG1vY2sgb3V0IHRoZSBQZWVyQ29ubmVjdGlvbiBhbmRcbiAgLy8gU2Vzc2lvbkRlc2NyaXB0aW9uIGltcGxlbWVudGF0aW9uc1xuICB0aGlzLlJUQ1BlZXJDb25uZWN0aW9uID0gUlRDUGVlckNvbm5lY3Rpb247XG4gIHRoaXMuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uID0gUlRDU2Vzc2lvbkRlc2NyaXB0aW9uO1xuICB0aGlzLlJUQ0ljZUNhbmRpZGF0ZSA9IFJUQ0ljZUNhbmRpZGF0ZTtcblxuICAvLyBUaGlzIGlzIHRoZSBhIGNoYW5uZWwgdG8gc2VuZCBzaWduYWxsaW5nIG1lc3NhZ2VzLlxuICB0aGlzLnNpZ25hbGxpbmdDaGFubmVsID0gbnVsbDtcblxuICAvLyBUaGUgRGF0YVBlZXIgb2JqZWN0IGZvciB0YWxraW5nIHRvIHRoZSBwZWVyLlxuICB0aGlzLnBlZXIgPSBudWxsO1xuXG4gIC8vIFRoZSBDb3JlIG9iamVjdCBmb3IgbWFuYWdpbmcgY2hhbm5lbHMuXG4gIHRoaXMuZnJlZWRvbU1vZHVsZS5vbmNlKCdjb3JlJywgZnVuY3Rpb24gKENvcmUpIHtcbiAgICB0aGlzLmNvcmUgPSBuZXcgQ29yZSgpO1xuICB9LmJpbmQodGhpcykpO1xuICB0aGlzLmZyZWVkb21Nb2R1bGUuZW1pdCh0aGlzLmZyZWVkb21Nb2R1bGUuY29udHJvbENoYW5uZWwsIHtcbiAgICB0eXBlOiAnY29yZSByZXF1ZXN0IGRlbGVnYXRlZCB0byBwZWVyY29ubmVjdGlvbicsXG4gICAgcmVxdWVzdDogJ2NvcmUnXG4gIH0pO1xufVxuXG4vLyBTdGFydCBhIHBlZXIgY29ubmVjdGlvbiB1c2luZyB0aGUgZ2l2ZW4gZnJlZWRvbUNoYW5uZWxJZCBhcyB0aGUgd2F5IHRvXG4vLyBjb21tdW5pY2F0ZSB3aXRoIHRoZSBwZWVyLiBUaGUgYXJndW1lbnQgfGZyZWVkb21DaGFubmVsSWR8IGlzIGEgd2F5IHRvIHNwZWFrXG4vLyB0byBhbiBpZGVudGl0eSBwcm92aWRlIHRvIHNlbmQgdGhlbSBTRFAgaGVhZGVycyBuZWdvdGlhdGUgdGhlIGFkZHJlc3MvcG9ydCB0b1xuLy8gc2V0dXAgdGhlIHBlZXIgdG8gcGVlckNvbm5lY3Rpb24uXG4vL1xuLy8gb3B0aW9uczoge1xuLy8gICBwZWVyTmFtZTogc3RyaW5nLCAgIC8vIEZvciBwcmV0dHkgcHJpbnRpbmcgbWVzc2FnZXMgYWJvdXQgdGhpcyBwZWVyLlxuLy8gICBkZWJ1ZzogYm9vbGVhbiAgICAgICAgICAgLy8gc2hvdWxkIHdlIGFkZCBleHRyYVxuLy8gfVxuUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLnNldHVwID0gZnVuY3Rpb24gKHNpZ25hbGxpbmdDaGFubmVsSWQsIHBlZXJOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0dW5TZXJ2ZXJzLCBpbml0aWF0ZUNvbm5lY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWF0aW9uKSB7XG4gIHRoaXMucGVlck5hbWUgPSBwZWVyTmFtZTtcbiAgdmFyIG1vY2tzID0ge1JUQ1BlZXJDb25uZWN0aW9uOiB0aGlzLlJUQ1BlZXJDb25uZWN0aW9uLFxuICAgICAgICAgICAgICAgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uOiB0aGlzLlJUQ1Nlc3Npb25EZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgIFJUQ0ljZUNhbmRpZGF0ZTogdGhpcy5SVENJY2VDYW5kaWRhdGV9LFxuICAgIHNlbGYgPSB0aGlzLFxuICAgIGRhdGFDaGFubmVsQ2FsbGJhY2tzID0ge1xuICAgICAgLy8gb25PcGVuRm4gaXMgY2FsbGVkIGF0IHRoZSBwb2ludCBtZXNzYWdlcyB3aWxsIGFjdHVhbGx5IGdldCB0aHJvdWdoLlxuICAgICAgb25PcGVuRm46IGZ1bmN0aW9uIChkYXRhQ2hhbm5lbCwgaW5mbykge1xuICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQoXCJvbk9wZW5EYXRhQ2hhbm5lbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2hhbm5lbElkOiBpbmZvLmxhYmVsfSk7XG4gICAgICB9LFxuICAgICAgb25DbG9zZUZuOiBmdW5jdGlvbiAoZGF0YUNoYW5uZWwsIGluZm8pIHtcbiAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KFwib25DbG9zZURhdGFDaGFubmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgeyBjaGFubmVsSWQ6IGluZm8ubGFiZWx9KTtcbiAgICAgIH0sXG4gICAgICAvLyBEZWZhdWx0IG9uIHJlYWwgbWVzc2FnZSBwcmludHMgaXQgdG8gY29uc29sZS5cbiAgICAgIG9uTWVzc2FnZUZuOiBmdW5jdGlvbiAoZGF0YUNoYW5uZWwsIGluZm8sIGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5kYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQoJ29uUmVjZWl2ZWQnLCB7XG4gICAgICAgICAgICAnY2hhbm5lbExhYmVsJzogaW5mby5sYWJlbCxcbiAgICAgICAgICAgICdidWZmZXInOiBldmVudC5kYXRhXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuZGF0YSBpbnN0YW5jZW9mIEJsb2IpIHtcbiAgICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQoJ29uUmVjZWl2ZWQnLCB7XG4gICAgICAgICAgICAnY2hhbm5lbExhYmVsJzogaW5mby5sYWJlbCxcbiAgICAgICAgICAgICdiaW5hcnknOiBldmVudC5kYXRhXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIChldmVudC5kYXRhKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQoJ29uUmVjZWl2ZWQnLCB7XG4gICAgICAgICAgICAnY2hhbm5lbExhYmVsJzogaW5mby5sYWJlbCxcbiAgICAgICAgICAgICd0ZXh0JzogZXZlbnQuZGF0YVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gRGVmYXVsdCBvbiBlcnJvciwgcHJpbnRzIGl0LlxuICAgICAgb25FcnJvckZuOiBmdW5jdGlvbiAoZGF0YUNoYW5uZWwsIGluZm8sIGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGRhdGFDaGFubmVsLnBlZXJOYW1lICsgXCI6IGRhdGFDaGFubmVsKFwiICtcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhQ2hhbm5lbC5kYXRhQ2hhbm5lbC5sYWJlbCArIFwiKTogZXJyb3I6IFwiLCBlcnIpO1xuICAgICAgfVxuICAgIH0sXG4gICAgY2hhbm5lbElkLFxuICAgIG9wZW5EYXRhQ2hhbm5lbENvbnRpbnVhdGlvbjtcblxuICB0aGlzLnBlZXIgPSBuZXcgU2ltcGxlRGF0YVBlZXIodGhpcy5wZWVyTmFtZSwgc3R1blNlcnZlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQ2hhbm5lbENhbGxiYWNrcywgbW9ja3MpO1xuXG4gIC8vIFNldHVwIGxpbmsgYmV0d2VlbiBGcmVlZG9tIG1lc3NhZ2luZyBhbmQgX3BlZXIncyBzaWduYWxsaW5nLlxuICAvLyBOb3RlOiB0aGUgc2lnbmFsbGluZyBjaGFubmVsIHNob3VsZCBvbmx5IGJlIHNlbmRpbmcgcmVjZWl2ZWluZyBzdHJpbmdzLlxuICB0aGlzLmNvcmUuYmluZENoYW5uZWwoc2lnbmFsbGluZ0NoYW5uZWxJZCwgZnVuY3Rpb24gKGNoYW5uZWwpIHtcbiAgICB0aGlzLnNpZ25hbGxpbmdDaGFubmVsID0gY2hhbm5lbDtcbiAgICB0aGlzLnBlZXIuc2V0U2VuZFNpZ25hbE1lc3NhZ2UoZnVuY3Rpb24gKG1zZykge1xuICAgICAgdGhpcy5zaWduYWxsaW5nQ2hhbm5lbC5lbWl0KCdtZXNzYWdlJywgbXNnKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICAgIHRoaXMuc2lnbmFsbGluZ0NoYW5uZWwub24oJ21lc3NhZ2UnLFxuICAgICAgICB0aGlzLnBlZXIuaGFuZGxlU2lnbmFsTWVzc2FnZS5iaW5kKHRoaXMucGVlcikpO1xuICAgIHRoaXMuc2lnbmFsbGluZ0NoYW5uZWwuZW1pdCgncmVhZHknKTtcbiAgICBpZiAoIWluaXRpYXRlQ29ubmVjdGlvbikge1xuICAgICAgdGhpcy5wZWVyLnJ1bldoZW5Db25uZWN0ZWQoY29udGludWF0aW9uKTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKSk7XG5cbiAgaWYgKGluaXRpYXRlQ29ubmVjdGlvbikge1xuICAgIC8vIFNldHVwIGEgY29ubmVjdGlvbiByaWdodCBhd2F5LCB0aGVuIGludm9rZSBjb250aW51YXRpb24uXG4gICAgY29uc29sZS5sb2codGhpcy5wZWVyTmFtZSArICcgaW5pdGlhdGluZyBjb25uZWN0aW9uJyk7XG4gICAgY2hhbm5lbElkID0gJ2hlbGxvJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoKTtcbiAgICBvcGVuRGF0YUNoYW5uZWxDb250aW51YXRpb24gPSBmdW5jdGlvbiAoc3VjY2VzcywgZXJyb3IpIHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjb250aW51YXRpb24odW5kZWZpbmVkLCBlcnJvcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsb3NlRGF0YUNoYW5uZWwoY2hhbm5lbElkLCBjb250aW51YXRpb24pO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKTtcbiAgICB0aGlzLm9wZW5EYXRhQ2hhbm5lbChjaGFubmVsSWQsIG9wZW5EYXRhQ2hhbm5lbENvbnRpbnVhdGlvbik7XG4gIH1cbn07XG5cblBlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5jcmVhdGVPZmZlciA9IGZ1bmN0aW9uIChjb25zdHJhaW50cywgY29udGludWF0aW9uKSB7XG4gIHRoaXMucGVlci5jcmVhdGVPZmZlcihjb25zdHJhaW50cywgY29udGludWF0aW9uKTtcbn07XG5cbi8vIFRPRE86IGRlbGF5IGNvbnRpbnVhdGlvbiB1bnRpbCB0aGUgb3BlbiBjYWxsYmFjayBmcm9tIF9wZWVyIGlzIGNhbGxlZC5cblBlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5vcGVuRGF0YUNoYW5uZWwgPSBmdW5jdGlvbiAoY2hhbm5lbElkLCBjb250aW51YXRpb24pIHtcbiAgdGhpcy5wZWVyLm9wZW5EYXRhQ2hhbm5lbChjaGFubmVsSWQsIGNvbnRpbnVhdGlvbik7XG59O1xuXG5QZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuY2xvc2VEYXRhQ2hhbm5lbCA9IGZ1bmN0aW9uIChjaGFubmVsSWQsIGNvbnRpbnVhdGlvbikge1xuICB0aGlzLnBlZXIuY2xvc2VDaGFubmVsKGNoYW5uZWxJZCk7XG4gIGNvbnRpbnVhdGlvbigpO1xufTtcblxuLy8gQ2FsbGVkIHRvIHNlbmQgYSBtZXNzYWdlIG92ZXIgdGhlIGdpdmVuIGRhdGFjaGFubmVsIHRvIGEgcGVlci4gSWYgdGhlIGRhdGFcbi8vIGNoYW5uZWwgZG9lc24ndCBhbHJlYWR5IGV4aXN0LCB0aGUgRGF0YVBlZXIgY3JlYXRlcyBpdC5cblBlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKHNlbmRJbmZvLCBjb250aW51YXRpb24pIHtcbiAgdmFyIG9ialRvU2VuZCA9IHNlbmRJbmZvLnRleHQgfHwgc2VuZEluZm8uYnVmZmVyIHx8IHNlbmRJbmZvLmJpbmFyeTtcbiAgaWYgKHR5cGVvZiBvYmpUb1NlbmQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc29sZS5lcnJvcihcIk5vIHZhbGlkIGRhdGEgdG8gc2VuZCBoYXMgYmVlbiBwcm92aWRlZC5cIiwgc2VuZEluZm8pO1xuICAgIHJldHVybjtcbiAgfVxuICAvL0RFQlVHXG4gIC8vIG9ialRvU2VuZCA9IG5ldyBBcnJheUJ1ZmZlcig0KTtcbiAgLy9ERUJVR1xuICB0aGlzLnBlZXIuc2VuZChzZW5kSW5mby5jaGFubmVsTGFiZWwsIG9ialRvU2VuZCwgY29udGludWF0aW9uKTtcbn07XG5cblBlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5nZXRCdWZmZXJlZEFtb3VudCA9IGZ1bmN0aW9uIChjaGFubmVsSWQsIGNvbnRpbnVhdGlvbikge1xuICBjb250aW51YXRpb24odGhpcy5wZWVyLmdldEJ1ZmZlcmVkQW1vdW50KGNoYW5uZWxJZCkpO1xufTtcblxuUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKGNvbnRpbnVhdGlvbikge1xuICBpZiAodGhpcy5wZWVyLmlzQ2xvc2VkKCkpIHtcbiAgICAvLyBQZWVyIGFscmVhZHkgY2xvc2VkLCBydW4gY29udGludWF0aW9uIHdpdGhvdXQgZGlzcGF0Y2hpbmcgZXZlbnQuXG4gICAgY29udGludWF0aW9uKCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMucGVlci5jbG9zZSgpO1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoXCJvbkNsb3NlXCIpO1xuICBjb250aW51YXRpb24oKTtcbn07XG5cbmV4cG9ydHMucHJvdmlkZXIgPSBQZWVyQ29ubmVjdGlvbjtcbmV4cG9ydHMubmFtZSA9ICdjb3JlLnBlZXJjb25uZWN0aW9uJztcbmV4cG9ydHMuZmxhZ3MgPSB7bW9kdWxlOiB0cnVlfTtcbiIsIi8qanNsaW50IHNsb3BweTp0cnVlLCBub2RlOnRydWUgKi9cbi8qZ2xvYmFscyBDb21wb25lbnRzLCBBcnJheUJ1ZmZlciAqL1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4uLy4uL3NyYy91dGlsJyk7XG5cbnZhciBldmVudE5hbWVzID0gW1xuICAnb25vcGVuJyxcbiAgJ29uZXJyb3InLFxuICAnb25jbG9zZScsXG4gICdvbm1lc3NhZ2UnXG5dO1xuXG52YXIgdW5BdHRhY2hlZENoYW5uZWxzID0ge307XG52YXIgcGVuZGluZ0V2ZW50cyA9IHt9O1xudmFyIGFsbG9jYXRlQ2hhbm5lbCA9IGZ1bmN0aW9uIChkYXRhQ2hhbm5lbCkge1xuICB2YXIgaWQgPSB1dGlsLmdldElkKCk7XG4gIHVuQXR0YWNoZWRDaGFubmVsc1tpZF0gPSBkYXRhQ2hhbm5lbDtcbiAgcGVuZGluZ0V2ZW50c1tpZF0gPSBbXTtcbiAgZXZlbnROYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGV2ZW50TmFtZSkge1xuICAgIC8vIFRoaXMgbGlzdGVuZXIgd2lsbCBiZSBvdmVycmlkZGVuIChyZS1zZXQpIGFmdGVyIHRoZSBjb25zdHJ1Y3RvciBydW5zLlxuICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIHZhciBjdXJyZW50SGFuZGxlciA9IGRhdGFDaGFubmVsW2V2ZW50TmFtZV07XG4gICAgICBpZiAoY3VycmVudEhhbmRsZXIgPT09IGhhbmRsZXIpIHtcbiAgICAgICAgcGVuZGluZ0V2ZW50c1tpZF0ucHVzaChldmVudCk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBjdXJyZW50SGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBJZiBhbiBldmVudCBzb21laG93IHJ1bnMgb24gdGhpcyBldmVudCBoYW5kbGVyIGFmdGVyIGl0IGhhcyBiZWVuXG4gICAgICAgIC8vIHJlcGxhY2VkLCBmb3J3YXJkIHRoYXQgZXZlbnQgdG8gdGhlIG5ldyBldmVudCBoYW5kbGVyLlxuICAgICAgICBjdXJyZW50SGFuZGxlcihldmVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGhhbmRsZXIgZm9yICcgKyBldmVudC50eXBlICsgJyBldmVudCcpO1xuICAgICAgfVxuICAgIH07XG4gICAgZGF0YUNoYW5uZWxbZXZlbnROYW1lXSA9IGhhbmRsZXI7XG4gIH0pO1xuICByZXR1cm4gaWQ7XG59O1xuXG52YXIgUlRDRGF0YUNoYW5uZWxBZGFwdGVyID0gZnVuY3Rpb24gKGNhcCwgZGlzcGF0Y2hFdmVudHMsIGlkKSB7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCA9IGRpc3BhdGNoRXZlbnRzO1xuICBpZiAoIXVuQXR0YWNoZWRDaGFubmVsc1tpZF0pIHtcbiAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgSUQsIGNyZWF0aW5nIGFjdGluZyBvbiB1bmF0dGFjaGVkIERhdGFDaGFubmVsJyk7XG4gICAgdmFyIENvbm5lY3Rpb24gPSByZXF1aXJlKCcuL2NvcmUucnRjcGVlcmNvbm5lY3Rpb24nKS5wcm92aWRlcixcbiAgICAgIHByb3ZpZGVyID0gbmV3IENvbm5lY3Rpb24oKTtcbiAgICBpZCA9IHByb3ZpZGVyLmNyZWF0ZURhdGFDaGFubmVsKCk7XG4gICAgcHJvdmlkZXIuY2xvc2UoKTtcbiAgfVxuXG4gIHRoaXMuY2hhbm5lbCA9IHVuQXR0YWNoZWRDaGFubmVsc1tpZF07XG4gIGRlbGV0ZSB1bkF0dGFjaGVkQ2hhbm5lbHNbaWRdO1xuXG4gIC8vIEFmdGVyIHRoZSBjb25zdHJ1Y3RvciByZXR1cm5zLCBhbmQgdGhlIGNhbGxlciBoYXMgYSBjaGFuY2UgdG8gcmVnaXN0ZXJcbiAgLy8gZXZlbnQgbGlzdGVuZXJzLCBmaXJlIGFsbCBwZW5kaW5nIGV2ZW50cywgYW5kIHRoZW4gZW5zdXJlIHRoYXQgYWxsXG4gIC8vIHN1YnNlcXVlbnQgZXZlbnRzIGFyZSBoYW5kbGVkIGltbWVkaWF0ZWx5LlxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZHJhaW5QZW5kaW5nRXZlbnRzKGlkKTtcblxuICAgIC8vIFRoaXMgZnVuY3Rpb24gbXVzdCBub3QgYmUgY2FsbGVkIHVudGlsIGFmdGVyIHRoZSBwZW5kaW5nIGV2ZW50cyBhcmVcbiAgICAvLyBkcmFpbmVkLCB0byBlbnN1cmUgdGhhdCBtZXNzYWdlcyBhcmUgZGVsaXZlcmVkIGluIG9yZGVyLlxuICAgIHRoaXMubWFuYWdlRXZlbnRzKHRydWUpO1xuICB9LmJpbmQodGhpcyksIDApO1xufTtcblxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5kcmFpblBlbmRpbmdFdmVudHMgPSBmdW5jdGlvbihpZCkge1xuICBwZW5kaW5nRXZlbnRzW2lkXS5mb3JFYWNoKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdGhpc1snb24nICsgZXZlbnQudHlwZV0oZXZlbnQpO1xuICB9LmJpbmQodGhpcykpO1xuICBkZWxldGUgcGVuZGluZ0V2ZW50c1tpZF07XG59O1xuXG4vLyBBdHRhY2ggb3IgZGV0YWNoIGxpc3RlbmVycyBmb3IgZXZlbnRzIGFnYWluc3QgdGhlIGNvbm5lY3Rpb24uXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLm1hbmFnZUV2ZW50cyA9IGZ1bmN0aW9uIChhdHRhY2gpIHtcbiAgZXZlbnROYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICBpZiAoYXR0YWNoKSB7XG4gICAgICB0aGlzW2V2ZW50TmFtZV0gPSB0aGlzW2V2ZW50TmFtZV0uYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuY2hhbm5lbFtldmVudE5hbWVdID0gdGhpc1tldmVudE5hbWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdGhpcy5jaGFubmVsW2V2ZW50TmFtZV07XG4gICAgfVxuICB9LmJpbmQodGhpcykpO1xufTtcblxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5nZXRMYWJlbCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBjYWxsYmFjayh0aGlzLmNoYW5uZWwubGFiZWwpO1xufTtcblxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5nZXRPcmRlcmVkID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrKHRoaXMuY2hhbm5lbC5vcmRlcmVkKTtcbn07XG5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUuZ2V0TWF4UGFja2V0TGlmZVRpbWUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sodGhpcy5jaGFubmVsLm1heFBhY2tldExpZmVUaW1lKTtcbn07XG5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUuZ2V0TWF4UmV0cmFuc21pdHMgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sodGhpcy5jaGFubmVsLm1heFJldHJhbnNtaXRzKTtcbn07XG5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUuZ2V0UHJvdG9jb2wgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sodGhpcy5jaGFubmVsLnByb3RvY29sKTtcbn07XG5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUuZ2V0TmVnb3RpYXRlZCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBjYWxsYmFjayh0aGlzLmNoYW5uZWwubmVnb3RpYXRlZCk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLmdldElkID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrKHRoaXMuY2hhbm5lbC5pZCk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLmdldFJlYWR5U3RhdGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sodGhpcy5jaGFubmVsLnJlYWR5U3RhdGUpO1xufTtcblxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5nZXRCdWZmZXJlZEFtb3VudCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBjYWxsYmFjayh0aGlzLmNoYW5uZWwuYnVmZmVyZWRBbW91bnQpO1xufTtcblxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5nZXRCaW5hcnlUeXBlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrKHRoaXMuY2hhbm5lbC5iaW5hcnlUeXBlKTtcbn07XG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLnNldEJpbmFyeVR5cGUgPSBmdW5jdGlvbiAoYmluYXJ5VHlwZSwgY2FsbGJhY2spIHtcbiAgdGhpcy5jaGFubmVsLmJpbmFyeVR5cGUgPSBiaW5hcnlUeXBlO1xuICBjYWxsYmFjaygpO1xufTtcblxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKHRleHQsIGNhbGxiYWNrKSB7XG4gIHRoaXMuY2hhbm5lbC5zZW5kKHRleHQpO1xuICBjYWxsYmFjaygpO1xufTtcblxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5zZW5kQnVmZmVyID0gZnVuY3Rpb24gKGJ1ZmZlciwgY2FsbGJhY2spIHtcbiAgdGhpcy5jaGFubmVsLnNlbmQoYnVmZmVyKTtcbiAgY2FsbGJhY2soKTtcbn07XG5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgaWYgKCF0aGlzLmNoYW5uZWwpIHtcbiAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgfVxuICB0aGlzLm1hbmFnZUV2ZW50cyhmYWxzZSk7XG4gIHRoaXMuY2hhbm5lbC5jbG9zZSgpO1xuICBjYWxsYmFjaygpO1xufTtcblxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5vbm9wZW4gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbm9wZW4nLCBldmVudC5tZXNzYWdlKTtcbn07XG5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUub25lcnJvciA9IGZ1bmN0aW9uIChldmVudCkge1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoJ29uZXJyb3InLCB7XG4gICAgZXJyY29kZTogZXZlbnQudHlwZSxcbiAgICBtZXNzYWdlOiBldmVudC5tZXNzYWdlXG4gIH0pO1xufTtcblxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5vbmNsb3NlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25jbG9zZScsIGV2ZW50Lm1lc3NhZ2UpO1xufTtcblxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgaWYgKHR5cGVvZiBldmVudC5kYXRhID09PSAnc3RyaW5nJykge1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25tZXNzYWdlJywge3RleHQ6IGV2ZW50LmRhdGF9KTtcbiAgfSBlbHNlIGlmICh0aGlzLmNoYW5uZWwuYmluYXJ5VHlwZSA9PT0gJ2FycmF5YnVmZmVyJyAmJlxuICAgICAgdHlwZW9mIENvbXBvbmVudHMgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAhKGV2ZW50LmRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikpIHtcbiAgICAvLyBJbiBGaXJlZm94IEFkZG9ucywgaW5jb21pbmcgYXJyYXkgYnVmZmVycyBhcmUgbm90IGFsd2F5cyBvd25lZCBieSB0aGVcbiAgICAvLyBBZGRvbiBjb250ZXh0LiBUaGUgZm9sbG93aW5nIGxpbmUgY2xvbmVzIHRoZSBvYmplY3QgdG8gdGFrZSBvd25lcnNoaXAuXG4gICAgLy8gU2VlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL0NvbXBvbmVudHMudXRpbHMuY2xvbmVJbnRvXG4gICAgdmFyIG15RGF0YSA9IENvbXBvbmVudHMudXRpbHMuY2xvbmVJbnRvKGV2ZW50LmRhdGEsIHt9KTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ29ubWVzc2FnZScsIHtidWZmZXI6IG15RGF0YX0pO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25tZXNzYWdlJywge2J1ZmZlcjogZXZlbnQuZGF0YX0pO1xuICB9XG59O1xuXG5leHBvcnRzLm5hbWUgPSBcImNvcmUucnRjZGF0YWNoYW5uZWxcIjtcbmV4cG9ydHMucHJvdmlkZXIgPSBSVENEYXRhQ2hhbm5lbEFkYXB0ZXI7XG5leHBvcnRzLmFsbG9jYXRlID0gYWxsb2NhdGVDaGFubmVsO1xuIiwiLypqc2xpbnQgaW5kZW50OjIsc2xvcHB5OnRydWUsIG5vZGU6dHJ1ZSAqL1xuXG52YXIgUHJvbWlzZUNvbXBhdCA9IHJlcXVpcmUoJ2VzNi1wcm9taXNlJykuUHJvbWlzZTtcbnZhciB3cnRjQ2xhc3MsIFJUQ1BlZXJDb25uZWN0aW9uLCBSVENTZXNzaW9uRGVzY3JpcHRpb24sIFJUQ0ljZUNhbmRpZGF0ZTtcbnZhciBEYXRhQ2hhbm5lbCA9IHJlcXVpcmUoJy4vY29yZS5ydGNkYXRhY2hhbm5lbCcpO1xuXG52YXIgUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyID0gZnVuY3Rpb24gKGNhcCwgZGlzcGF0Y2hFdmVudCwgY29uZmlndXJhdGlvbikge1xuICBpZiAodHlwZW9mIHdydGNDbGFzcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBvbmx5IHdvcmtzIGluIGJyb3dzZXIsIHNvIG5vZGUgc2hvdWxkIHVzZSBzZXRJbXBsIChzZWUgZXhwb3J0cylcbiAgICB2YXIgYWRhcHRlciA9IHJlcXVpcmUoJ3dlYnJ0Yy1hZGFwdGVyJyk7XG4gICAgUlRDUGVlckNvbm5lY3Rpb24gPSBhZGFwdGVyLlJUQ1BlZXJDb25uZWN0aW9uO1xuICAgIFJUQ1Nlc3Npb25EZXNjcmlwdGlvbiA9IGFkYXB0ZXIuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uO1xuICAgIFJUQ0ljZUNhbmRpZGF0ZSA9IGFkYXB0ZXIuUlRDSWNlQ2FuZGlkYXRlO1xuICB9IGVsc2Uge1xuICAgIFJUQ1BlZXJDb25uZWN0aW9uID0gd3J0Y0NsYXNzLlJUQ1BlZXJDb25uZWN0aW9uO1xuICAgIFJUQ1Nlc3Npb25EZXNjcmlwdGlvbiA9IHdydGNDbGFzcy5SVENTZXNzaW9uRGVzY3JpcHRpb247XG4gICAgUlRDSWNlQ2FuZGlkYXRlID0gd3J0Y0NsYXNzLlJUQ0ljZUNhbmRpZGF0ZTtcbiAgfVxuXG4gIHRoaXMuZGlzcGF0Y2hFdmVudCA9IGRpc3BhdGNoRXZlbnQ7XG4gIHRyeSB7XG4gICAgdGhpcy5jb25uZWN0aW9uID0gbmV3IFJUQ1BlZXJDb25uZWN0aW9uKGNvbmZpZ3VyYXRpb24pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gTm90ZTogWW91IGNhbid0IGFzayB0aGUgcHJvdmlkZXIgdG8gY2xvc2UgeW91IHN5bmNocm9ub3VzbHksIHNpbmNlXG4gICAgLy8gdGhlIGNvbnN0cnVjdG9yIGhhcyBub3QgeWV0IHJldHVybmVkLCBzbyB0aGVyZSdzIG5vICd0aGlzJyB0aGF0XG4gICAgLy8gdGhlIHByb3ZpZGVyIGNhbiBrbm93IGFib3V0IHlldC5cbiAgICBzZXRUaW1lb3V0KGNhcC5wcm92aWRlci5jbG9zZS5iaW5kKGNhcC5wcm92aWRlciwgdGhpcyksIDApO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuZXZlbnRzID0gW1xuICAgICdvbmRhdGFjaGFubmVsJyxcbiAgICAnb25uZWdvdGlhdGlvbm5lZWRlZCcsXG4gICAgJ29uaWNlY2FuZGlkYXRlJyxcbiAgICAnb25zaWduYWxpbmdzdGF0ZWNoYW5nZScsXG4gICAgJ29uYWRkc3RyZWFtJyxcbiAgICAnb25yZW1vdmVzdHJlYW0nLFxuICAgICdvbmljZWNvbm5lY3Rpb25zdGF0ZWNoYW5nZSdcbiAgXTtcbiAgdGhpcy5tYW5hZ2VFdmVudHModHJ1ZSk7XG59O1xuXG4vLyBBdHRhY2ggb3IgZGV0YWNoIGxpc3RlbmVycyBmb3IgZXZlbnRzIGFnYWluc3QgdGhlIGNvbm5lY3Rpb24uXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLm1hbmFnZUV2ZW50cyA9IGZ1bmN0aW9uIChhdHRhY2gpIHtcbiAgdGhpcy5ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoYXR0YWNoKSB7XG4gICAgICB0aGlzW2V2ZW50XSA9IHRoaXNbZXZlbnRdLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLmNvbm5lY3Rpb25bZXZlbnRdID0gdGhpc1tldmVudF07XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbm5lY3Rpb24pIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmNvbm5lY3Rpb25bZXZlbnRdO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuY3JlYXRlT2ZmZXIgPSBmdW5jdGlvbiAoY29uc3RyYWludHMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ29tcGF0KGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB0aGlzLmNvbm5lY3Rpb24uY3JlYXRlT2ZmZXIocmVzb2x2ZSwgcmVqZWN0LCBjb25zdHJhaW50cyk7XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLmNyZWF0ZUFuc3dlciA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ29tcGF0KGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB0aGlzLmNvbm5lY3Rpb24uY3JlYXRlQW5zd2VyKHJlc29sdmUsIHJlamVjdCk7XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLnNldExvY2FsRGVzY3JpcHRpb24gPSBmdW5jdGlvbiAoZGVzY3JpcHRpb24pIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ29tcGF0KGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB0aGlzLmNvbm5lY3Rpb24uc2V0TG9jYWxEZXNjcmlwdGlvbihuZXcgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlLCByZWplY3QpO1xuICB9LmJpbmQodGhpcykpO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5nZXRMb2NhbERlc2NyaXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHRoaXMuY29ubmVjdGlvbi5sb2NhbERlc2NyaXB0aW9uKTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuc2V0UmVtb3RlRGVzY3JpcHRpb24gPSBmdW5jdGlvbiAoZGVzY3JpcHRpb24pIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ29tcGF0KGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB0aGlzLmNvbm5lY3Rpb24uc2V0UmVtb3RlRGVzY3JpcHRpb24obmV3IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbihkZXNjcmlwdGlvbiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUsIHJlamVjdCk7XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLmdldFJlbW90ZURlc2NyaXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHRoaXMuY29ubmVjdGlvbi5yZW1vdGVEZXNjcmlwdGlvbik7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLmdldFNpZ25hbGluZ1N0YXRlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHRoaXMuY29ubmVjdGlvbi5zaWduYWxpbmdTdGF0ZSk7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLnVwZGF0ZUljZSA9IGZ1bmN0aW9uIChjb25maWd1cmF0aW9uKSB7XG4gIHRoaXMuY29ubmVjdGlvbi51cGRhdGVJY2UoY29uZmlndXJhdGlvbik7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUoKTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuYWRkSWNlQ2FuZGlkYXRlID0gZnVuY3Rpb24gKGNhbmRpZGF0ZSkge1xuICByZXR1cm4gbmV3IFByb21pc2VDb21wYXQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHRoaXMuY29ubmVjdGlvbi5hZGRJY2VDYW5kaWRhdGUobmV3IFJUQ0ljZUNhbmRpZGF0ZShjYW5kaWRhdGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuZ2V0SWNlR2F0aGVyaW5nU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUodGhpcy5jb25uZWN0aW9uLmljZUdhdGhlcmluZ1N0YXRlKTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuZ2V0SWNlQ29ubmVjdGlvblN0YXRlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHRoaXMuY29ubmVjdGlvbi5pY2VDb25uZWN0aW9uU3RhdGUpO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5nZXRDb25maWd1cmF0aW9uID0gZnVuY3Rpb24gKCkge1xuICB2YXIgY29uZmlndXJhdGlvbiA9IHRoaXMuY29ubmVjdGlvbi5nZXRDb25maWd1cmF0aW9uKCk7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUoY29uZmlndXJhdGlvbik7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLmdldExvY2FsU3RyZWFtcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVqZWN0KHtcbiAgICBlcnJjb2RlOiAtMSxcbiAgICBtZXNzYWdlOiBcIk5vdCBJbXBsZW1lbnRlZFwiXG4gIH0pO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5nZXRSZW1vdGVTdHJlYW1zID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZWplY3Qoe1xuICAgIGVycmNvZGU6IC0xLFxuICAgIG1lc3NhZ2U6IFwiTm90IEltcGxlbWVudGVkXCJcbiAgfSk7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLmdldFN0cmVhbUJ5SWQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVqZWN0KHtcbiAgICBlcnJjb2RlOiAtMSxcbiAgICBtZXNzYWdlOiBcIk5vdCBJbXBsZW1lbnRlZFwiXG4gIH0pO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5hZGRTdHJlYW0gPSBmdW5jdGlvbiAoaWQpIHtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVqZWN0KHtcbiAgICBlcnJjb2RlOiAtMSxcbiAgICBtZXNzYWdlOiBcIk5vdCBJbXBsZW1lbnRlZFwiXG4gIH0pO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5yZW1vdmVTdHJlYW0gPSBmdW5jdGlvbiAoaWQpIHtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVqZWN0KHtcbiAgICBlcnJjb2RlOiAtMSxcbiAgICBtZXNzYWdlOiBcIk5vdCBJbXBsZW1lbnRlZFwiXG4gIH0pO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCF0aGlzLmNvbm5lY3Rpb24pIHtcbiAgICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKCk7XG4gIH1cbiAgdGhpcy5tYW5hZ2VFdmVudHMoZmFsc2UpO1xuICB0cnkge1xuICAgIHRoaXMuY29ubmVjdGlvbi5jbG9zZSgpO1xuICAgIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBQcm9taXNlQ29tcGF0LnJlamVjdCh7XG4gICAgICBlcnJjb2RlOiBlLm5hbWUsXG4gICAgICBtZXNzYWdlOiBlLm1lc3NhZ2VcbiAgICB9KTtcbiAgfVxufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5jcmVhdGVEYXRhQ2hhbm5lbCA9IGZ1bmN0aW9uIChsYWJlbCwgZGF0YUNoYW5uZWxEaWN0KSB7XG4gIHZhciBpZCA9IERhdGFDaGFubmVsLmFsbG9jYXRlKHRoaXMuY29ubmVjdGlvbi5jcmVhdGVEYXRhQ2hhbm5lbChsYWJlbCwgZGF0YUNoYW5uZWxEaWN0KSk7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUoaWQpO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5nZXRTdGF0cyA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICByZXR1cm4gbmV3IFByb21pc2VDb21wYXQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGlmICh0eXBlb2Ygd3J0Y0NsYXNzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gdXNlZCB3ZWJydGMtYWRhcHRlclxuICAgICAgdGhpcy5jb25uZWN0aW9uLmdldFN0YXRzKHNlbGVjdG9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBub2RlLXdydGMgaGFzIGRpZmZlcmVudCBnZXRTdGF0cyBBUElcbiAgICAgIHRoaXMuY29ubmVjdGlvbi5nZXRTdGF0cyhmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICB2YXIgc3RhbmRhcmRSZXBvcnQgPSB7fTtcbiAgICAgICAgdmFyIHJlcG9ydHMgPSByZXNwb25zZS5yZXN1bHQoKTtcbiAgICAgICAgdmFyIGlkID0gMDsgIC8vIG5vZGV3cnRjIHN0YXRzIHJlcG9ydCBsYWNrcyBpZCBmaWVsZFxuICAgICAgICByZXBvcnRzLmZvckVhY2goZnVuY3Rpb24gKHJlcG9ydCkge1xuICAgICAgICAgIHJlcG9ydC5pZCA9IFN0cmluZyhpZCsrKTsgIC8vIHN0cmluZyB0byB1c2UgYXMgb2JqZWN0IGtleVxuICAgICAgICAgIHN0YW5kYXJkUmVwb3J0W3JlcG9ydC5pZF0gPSByZXBvcnQ7XG4gICAgICAgIH0pO1xuICAgICAgICByZXNvbHZlKHN0YW5kYXJkUmVwb3J0KTtcbiAgICAgIH0sIHJlamVjdCk7XG4gICAgfVxuICB9LmJpbmQodGhpcykpO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5vbmRhdGFjaGFubmVsID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHZhciBpZCA9IERhdGFDaGFubmVsLmFsbG9jYXRlKGV2ZW50LmNoYW5uZWwpO1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoJ29uZGF0YWNoYW5uZWwnLCB7Y2hhbm5lbDogaWR9KTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUub25uZWdvdGlhdGlvbm5lZWRlZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoJ29ubmVnb3RpYXRpb25uZWVkZWQnLCBldmVudC5tZXNzYWdlKTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUub25pY2VjYW5kaWRhdGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgdmFyIG1zZztcbiAgaWYgKGV2ZW50LmNhbmRpZGF0ZSAmJiBldmVudC5jYW5kaWRhdGUuY2FuZGlkYXRlKSB7XG4gICAgbXNnID0ge1xuICAgICAgY2FuZGlkYXRlOiB7XG4gICAgICAgIGNhbmRpZGF0ZTogZXZlbnQuY2FuZGlkYXRlLmNhbmRpZGF0ZSxcbiAgICAgICAgc2RwTWlkOiBldmVudC5jYW5kaWRhdGUuc2RwTWlkLFxuICAgICAgICBzZHBNTGluZUluZGV4OiBldmVudC5jYW5kaWRhdGUuc2RwTUxpbmVJbmRleFxuICAgICAgfVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbXNnID0ge1xuICAgICAgY2FuZGlkYXRlOiBudWxsXG4gICAgfTtcbiAgfVxuICB0aGlzLmRpc3BhdGNoRXZlbnQoJ29uaWNlY2FuZGlkYXRlJywgbXNnKTtcbn07XG4gIFxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5vbnNpZ25hbGluZ3N0YXRlY2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25zaWduYWxpbmdzdGF0ZWNoYW5nZScsIGV2ZW50Lm1lc3NhZ2UpO1xufTtcbiAgXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLm9uYWRkc3RyZWFtID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIC8vVE9ETzogcHJvdmlkZSBJRCBvZiBhbGxvY2F0ZWQgc3RyZWFtLlxuICB0aGlzLmRpc3BhdGNoRXZlbnQoJ29uYWRkc3RyZWFtJywgZXZlbnQuc3RyZWFtKTtcbn07XG4gIFxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5vbnJlbW92ZXN0cmVhbSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAvL1RPRE86IHByb3ZpZGUgSUQgb2YgZGVhbGxvY2F0ZWQgc3RyZWFtLlxuICB0aGlzLmRpc3BhdGNoRXZlbnQoJ29ucmVtb3Zlc3RyZWFtJywgZXZlbnQuc3RyZWFtKTtcbn07XG4gIFxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5vbmljZWNvbm5lY3Rpb25zdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoJ29uaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlJywgZXZlbnQubWVzc2FnZSk7XG59O1xuXG5cbmV4cG9ydHMubmFtZSA9IFwiY29yZS5ydGNwZWVyY29ubmVjdGlvblwiO1xuZXhwb3J0cy5wcm92aWRlciA9IFJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlcjtcbmV4cG9ydHMuc3R5bGUgPSBcInByb3ZpZGVQcm9taXNlc1wiO1xuZXhwb3J0cy5mbGFncyA9IHtwcm92aWRlcjogdHJ1ZX07XG5leHBvcnRzLnNldEltcGwgPSBmdW5jdGlvbihpbXBsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICB3cnRjQ2xhc3MgPSBpbXBsO1xufTtcbiIsIi8qZ2xvYmFscyBsb2NhbFN0b3JhZ2UgKi9cbi8qanNsaW50IGluZGVudDoyLHNsb3BweTp0cnVlLG5vZGU6dHJ1ZSAqL1xudmFyIHV0aWwgPSByZXF1aXJlKCcuLi8uLi9zcmMvdXRpbCcpO1xuXG4vKipcbiAqIEEgRnJlZURPTSBjb3JlLnN0b3JhZ2UgcHJvdmlkZXIgdGhhdCBkZXBlbmRzIG9uIGxvY2FsU3RvcmFnZVxuICogVGh1cywgdGhpcyBvbmx5IHdvcmtzIGluIHRoZSBjb250ZXh0IG9mIGEgd2VicGFnZSBhbmQgaGFzXG4gKiBzb21lIHNpemUgbGltaXRhdGlvbnMuXG4gKiBOb3RlIHRoYXQgdGhpcyBjYW4gY29uZmxpY3Qgd2l0aCBvdGhlciBzY3JpcHRzIHVzaW5nIGxvY2FsU3RvcmFnZVxuICogYXMga2V5cyBhcmUgcmF3XG4gKiBAQ2xhc3MgU3RvcmFnZV91bnByaXZpbGVnZWRcbiAqIEBjb25zdHJ1Y3RvclxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjYXAgQ2FwYWJpbGl0aWVzIGZvciB0aGUgcHJvdmlkZXJcbiAqL1xudmFyIFN0b3JhZ2VfdW5wcml2aWxlZ2VkID0gZnVuY3Rpb24gKGNhcCwgZGlzcGF0Y2hFdmVudCkge1xuICB1dGlsLmhhbmRsZUV2ZW50cyh0aGlzKTtcbn07XG5cbi8qKlxuICogTGlzdHMga2V5cyBpbiB0aGUgc3RvcmFnZSByZXBvc2l0b3J5XG4gKiBAbWV0aG9kIGtleXNcbiAqL1xuU3RvcmFnZV91bnByaXZpbGVnZWQucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbiAoY29udGludWF0aW9uKSB7XG4gIHZhciByZXN1bHQgPSBbXSxcbiAgICBpO1xuICBmb3IgKGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgcmVzdWx0LnB1c2gobG9jYWxTdG9yYWdlLmtleShpKSk7XG4gIH1cbiAgY29udGludWF0aW9uKHJlc3VsdCk7XG59O1xuXG4vKipcbiAqIEdldCBhIGtleSBmcm9tIHRoZSBzdG9yYWdlIHJlcG9zaXRvcnkuXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IFRoZSBpdGVtIHRvIGdldCBmcm9tIHN0b3JhZ2UuXG4gKiBAbWV0aG9kIGdldFxuICovXG5TdG9yYWdlX3VucHJpdmlsZWdlZC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSwgY29udGludWF0aW9uKSB7XG4gIHRyeSB7XG4gICAgdmFyIHZhbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgY29udGludWF0aW9uKHZhbCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb250aW51YXRpb24obnVsbCk7XG4gIH1cbn07XG5cbi8qKlxuICogU2V0IGEga2V5IGluIHRoZSBzdG9yYWdlIHJlcG9zaXRvcnkuXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IFRoZSBpdGVtIHRvIHNhdmUgaW4gc3RvcmFnZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2F2ZSBpbiBzdG9yYWdlLlxuICogQG1ldGhvZCBzZXRcbiAqL1xuU3RvcmFnZV91bnByaXZpbGVnZWQucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlLCBjb250aW51YXRpb24pIHtcbiAgdmFyIHJldCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICBjb250aW51YXRpb24ocmV0KTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGEga2V5IGZyb20gdGhlIHN0b3JhZ2UgcmVwb3NpdG9yeS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgVGhlIGl0ZW0gdG8gcmVtb3ZlIGZyb20gc3RvcmFnZTtcbiAqIEBtZXRob2QgcmVtb3ZlXG4gKi9cblN0b3JhZ2VfdW5wcml2aWxlZ2VkLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoa2V5LCBjb250aW51YXRpb24pIHtcbiAgdmFyIHJldCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gIGNvbnRpbnVhdGlvbihyZXQpO1xufTtcblxuLyoqXG4gKiBSZXNldCB0aGUgY29udGVudHMgb2YgdGhlIHN0b3JhZ2UgcmVwb3NpdG9yeS5cbiAqIEBtZXRob2QgY2xlYXJcbiAqL1xuU3RvcmFnZV91bnByaXZpbGVnZWQucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKGNvbnRpbnVhdGlvbikge1xuICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgY29udGludWF0aW9uKCk7XG59O1xuXG5leHBvcnRzLnByb3ZpZGVyID0gU3RvcmFnZV91bnByaXZpbGVnZWQ7XG5leHBvcnRzLm5hbWUgPSAnY29yZS5zdG9yYWdlJztcbiIsIi8qanNsaW50IGluZGVudDoyLHdoaXRlOnRydWUsc2xvcHB5OnRydWUsbm9kZTp0cnVlICovXG52YXIgRXZlbnRJbnRlcmZhY2UgPSByZXF1aXJlKCcuLi8uLi9zcmMvcHJveHkvZXZlbnRJbnRlcmZhY2UnKTtcbnZhciBDb25zdW1lciA9IHJlcXVpcmUoJy4uLy4uL3NyYy9jb25zdW1lcicpO1xudmFyIHV0aWwgPSByZXF1aXJlKCcuLi8uLi9zcmMvdXRpbCcpO1xuXG4vKipcbiAqIENvcmUgZnJlZWRvbSBzZXJ2aWNlcyBhdmFpbGFibGUgdG8gYWxsIG1vZHVsZXMuXG4gKiBDcmVhdGVkIGJ5IHRoZSBlbnZpcm9ubWVudCBoZWxwZXIgaW4gcmVzcG9uc2UgdG8gYSAnY29yZScgcmVxdWVzdC5cbiAqIEBDbGFzcyBDb3JlX3VucHJpdmlsZWdlZFxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge01hbmFnZXJ9IG1hbmFnZXIgVGhlIG1hbmFnZXIgdGhpcyBjb3JlIGlzIGNvbm5lY3RlZCB3aXRoLlxuICogQHByaXZhdGVcbiAqL1xudmFyIENvcmVfdW5wcml2aWxlZ2VkID0gZnVuY3Rpb24obWFuYWdlciwgcG9zdE1lc3NhZ2UpIHtcbiAgdGhpcy5tYW5hZ2VyID0gbWFuYWdlci5tb2R1bGU7XG4gIHRoaXMuZGVidWcgPSB0aGlzLm1hbmFnZXIuZGVidWc7XG59O1xuXG5Db3JlX3VucHJpdmlsZWdlZC51bmJvdW5kQ2hhbm5lbHMgPSB7fTtcblxuQ29yZV91bnByaXZpbGVnZWQuY29udGV4dElkID0gdW5kZWZpbmVkO1xuQ29yZV91bnByaXZpbGVnZWQubW9kdWxlSW50ZXJuYWwgPSB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ3JlYXRlIGEgY3VzdG9tIGNoYW5uZWwuXG4gKiBSZXR1cm5zIHRoZSBzdHJ1Y3R1cmUge2NoYW5uZWw6IFByb3h5LCBpZGVudGlmaWVyOiBPYmplY3R9LFxuICogd2hlcmUgdGhlIGlkZW50aWZpZXIgY2FuIGJlICdyZWRlZW1lZCcgYnkgYW5vdGhlciBtb2R1bGUgb3IgcHJvdmlkZXIgdXNpbmdcbiAqIGJpbmQgY2hhbm5lbCwgYXQgd2hpY2ggcG9pbnQgdGhlIGRlZmVycmVkIG9iamVjdCB3aWxsIHJlc29sdmUgd2l0aCBhIGNoYW5uZWxcbiAqIGJldHdlZW4gdGhlIHR3byBlbmRwb2ludHMuXG4gKiBAbWV0aG9kIGNyZWF0ZUNoYW5uZWxcbiAqIEBwYXJhbXMge0Z1bmN0aW9ufSBjb250aW51YXRpb24gTWV0aG9kIHRvIGNhbGwgd2l0aCB0aGUgY29zbnRydWN0ZWQgc3RydWN0dXJlLlxuICovXG5Db3JlX3VucHJpdmlsZWdlZC5wcm90b3R5cGUuY3JlYXRlQ2hhbm5lbCA9IGZ1bmN0aW9uKGNvbnRpbnVhdGlvbikge1xuICB2YXIgcHJveHkgPSBuZXcgQ29uc3VtZXIoRXZlbnRJbnRlcmZhY2UsIHRoaXMubWFuYWdlci5kZWJ1ZyksXG4gICAgICBpZCA9IHV0aWwuZ2V0SWQoKSxcbiAgICAgIGNoYW4gPSB0aGlzLmdldENoYW5uZWwocHJveHkpO1xuICB0aGlzLm1hbmFnZXIuc2V0dXAocHJveHkpO1xuXG4gIGlmICh0aGlzLmlzSW5Nb2R1bGUoKSkge1xuICAgIHRoaXMubWFuYWdlci5lbWl0KHRoaXMubWFuYWdlci5kZWxlZ2F0ZSwge1xuICAgICAgdHlwZTogJ0RlbGVnYXRpb24nLFxuICAgICAgcmVxdWVzdDogJ2hhbmRsZScsXG4gICAgICBmbG93OiAnY29yZScsXG4gICAgICBtZXNzYWdlOiB7XG4gICAgICAgIHR5cGU6ICdyZWdpc3RlcicsXG4gICAgICAgIGlkOiBpZFxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIENvcmVfdW5wcml2aWxlZ2VkLnVuYm91bmRDaGFubmVsc1tpZF0gPSB7XG4gICAgbG9jYWw6IHRydWUsXG4gICAgcHJveHk6IHByb3h5XG4gIH07XG5cbiAgcHJveHkub25jZSgnc3RhcnQnLCB0aGlzLmdldENoYW5uZWwuYmluZCh0aGlzLCBwcm94eSkpO1xuXG4gIGNvbnRpbnVhdGlvbih7XG4gICAgY2hhbm5lbDogY2hhbixcbiAgICBpZGVudGlmaWVyOiBpZFxuICB9KTtcbn07XG5cbkNvcmVfdW5wcml2aWxlZ2VkLnByb3RvdHlwZS5nZXRDaGFubmVsID0gZnVuY3Rpb24ocHJveHkpIHtcbiAgdmFyIGlmYWNlID0gcHJveHkuZ2V0UHJveHlJbnRlcmZhY2UoKSxcbiAgICAgIGNoYW4gPSBpZmFjZSgpO1xuICBjaGFuLmNsb3NlID0gaWZhY2UuY2xvc2U7XG4gIGNoYW4ub25DbG9zZSA9IGlmYWNlLm9uQ2xvc2U7XG4gIGlmYWNlLm9uQ2xvc2UoY2hhbiwgZnVuY3Rpb24oKSB7XG4gICAgcHJveHkuZG9DbG9zZSgpO1xuICB9KTtcbiAgcmV0dXJuIGNoYW47XG59O1xuXG4vKipcbiAqIFJlY2VpdmUgYSBtZXNzYWdlIGZyb20gYW5vdGhlciBjb3JlIGluc3RhbmNlLlxuICogTm90ZTogQ29yZV91bnByaXZpbGVnZWQgaXMgbm90IHJlZ2lzdGVyZWQgb24gdGhlIGh1Yi4gaXQgaXMgYSBwcm92aWRlcixcbiAqICAgICBhcyBpdCdzIGxvY2F0aW9uIGFuZCBuYW1lIHdvdWxkIGluZGljYXRlLiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBieVxuICogICAgIHBvcnQtYXBwIHRvIHJlbGF5IG1lc3NhZ2VzIHVwIHRvIGhpZ2hlciBsZXZlbHMuICBNb3JlIGdlbmVyYWxseSwgdGhlXG4gKiAgICAgbWVzc2FnZXMgZW1pdHRlZCBieSB0aGUgY29yZSB0byAndGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5tYW5hbmFnZS5kZWxlZ2F0ZSdcbiAqICAgICBTaG91bGQgYmUgb25NZXNzYWdlZCB0byB0aGUgY29udHJvbGxpbmcgY29yZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBzb3VyY2UgVGhlIHNvdXJjZSBvZiB0aGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtc2cgVGhlIG1lc3NzYWdlIGZyb20gYW4gaXNvbGF0ZWQgY29yZSBwcm92aWRlci5cbiAqL1xuQ29yZV91bnByaXZpbGVnZWQucHJvdG90eXBlLm9uTWVzc2FnZSA9IGZ1bmN0aW9uKHNvdXJjZSwgbXNnKSB7XG4gIGlmIChtc2cudHlwZSA9PT0gJ3JlZ2lzdGVyJykge1xuICAgIENvcmVfdW5wcml2aWxlZ2VkLnVuYm91bmRDaGFubmVsc1ttc2cuaWRdID0ge1xuICAgICAgcmVtb3RlOiB0cnVlLFxuICAgICAgcmVzb2x2ZTogbXNnLnJlcGx5LFxuICAgICAgc291cmNlOiBzb3VyY2VcbiAgICB9O1xuICB9IGVsc2UgaWYgKG1zZy50eXBlID09PSAnY2xlYXInKSB7XG4gICAgZGVsZXRlIENvcmVfdW5wcml2aWxlZ2VkLnVuYm91bmRDaGFubmVsc1ttc2cuaWRdO1xuICB9IGVsc2UgaWYgKG1zZy50eXBlID09PSAnYmluZCcpIHtcbiAgICBpZiAoQ29yZV91bnByaXZpbGVnZWQudW5ib3VuZENoYW5uZWxzW21zZy5pZF0pIHtcbiAgICAgIHRoaXMuYmluZENoYW5uZWwobXNnLmlkLCBmdW5jdGlvbigpIHt9LCBzb3VyY2UpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChtc2cudHlwZSA9PT0gJ3JlcXVpcmUnKSB7XG4gICAgc291cmNlLnJlcXVpcmUobXNnLmlkLCBtc2cubWFuaWZlc3QpO1xuICB9XG59O1xuXG4vKipcbiAqIEJpbmQgYSBjdXN0b20gY2hhbm5lbC5cbiAqIENyZWF0ZXMgYSBwcm94eSBpbnRlcmZhY2UgdG8gdGhlIGN1c3RvbSBjaGFubmVsLCB3aGljaCB3aWxsIGJlIGJvdW5kIHRvXG4gKiB0aGUgcHJveHkgb2J0YWluZWQgdGhyb3VnaCBhbiBlYXJsaWVyIGNyZWF0ZUNoYW5uZWwgY2FsbC5cbiAqIGNoYW5uZWwgdG8gYSBwcm94eS5cbiAqIEBtZXRob2QgYmluZENoYW5uZWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBpZGVudGlmaWVyIEFuIGlkZW50aWZpZXIgb2J0YWluZWQgdGhyb3VnaCBjcmVhdGVDaGFubmVsLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29udGludWF0aW9uIEEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdpdGggdGhlIHByb3h5LlxuICovXG5Db3JlX3VucHJpdmlsZWdlZC5wcm90b3R5cGUuYmluZENoYW5uZWwgPSBmdW5jdGlvbihpZGVudGlmaWVyLCBjb250aW51YXRpb24sIHNvdXJjZSkge1xuICB2YXIgdG9CaW5kID0gQ29yZV91bnByaXZpbGVnZWQudW5ib3VuZENoYW5uZWxzW2lkZW50aWZpZXJdLFxuICAgICAgbmV3U291cmNlID0gIXNvdXJjZTtcblxuICAvLyB3aGVuIGJpbmRDaGFubmVsIGlzIGNhbGxlZCBkaXJlY3RseSwgc291cmNlIHdpbGwgYmUgdW5kZWZpbmVkLlxuICAvLyBXaGVuIGl0IGlzIHByb3BvZ2F0ZWQgYnkgb25NZXNzYWdlLCBhIHNvdXJjZSBmb3IgYmluZGluZyB3aWxsIGFscmVhZHkgZXhpc3QuXG4gIGlmIChuZXdTb3VyY2UpIHtcbiAgICB0aGlzLmRlYnVnLmRlYnVnKCdtYWtpbmcgbG9jYWwgcHJveHkgZm9yIGNvcmUgYmluZGluZycpO1xuICAgIHNvdXJjZSA9IG5ldyBDb25zdW1lcihFdmVudEludGVyZmFjZSwgdGhpcy5kZWJ1Zyk7XG4gICAgdGhpcy5tYW5hZ2VyLnNldHVwKHNvdXJjZSk7XG4gIH1cblxuICAvLyBJZiB0aGlzIGlzIGEga25vd24gaWRlbnRpZmllciBhbmQgaXMgaW4gdGhlIHNhbWUgY29udGV4dCwgYmluZGluZyBpcyBlYXN5LlxuICBpZiAodG9CaW5kICYmIHRvQmluZC5sb2NhbCkge1xuICAgIHRoaXMuZGVidWcuZGVidWcoJ0JpbmRpbmcgYSBjaGFubmVsIHRvIHBvcnQgb24gdGhpcyBodWI6JyArIHNvdXJjZSk7XG4gICAgdGhpcy5tYW5hZ2VyLmNyZWF0ZUxpbmsoc291cmNlLCBpZGVudGlmaWVyLCB0b0JpbmQucHJveHksICdkZWZhdWx0Jyk7XG4gICAgZGVsZXRlIENvcmVfdW5wcml2aWxlZ2VkLnVuYm91bmRDaGFubmVsc1tpZGVudGlmaWVyXTtcbiAgICBpZiAodGhpcy5tYW5hZ2VyLmRlbGVnYXRlICYmIHRoaXMubWFuYWdlci50b0RlbGVnYXRlLmNvcmUpIHtcbiAgICAgIHRoaXMubWFuYWdlci5lbWl0KHRoaXMubWFuYWdlci5kZWxlZ2F0ZSwge1xuICAgICAgICB0eXBlOiAnRGVsZWdhdGlvbicsXG4gICAgICAgIHJlcXVlc3Q6ICdoYW5kbGUnLFxuICAgICAgICBmbG93OiAnY29yZScsXG4gICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICB0eXBlOiAnY2xlYXInLFxuICAgICAgICAgIGlkOiBpZGVudGlmaWVyXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0b0JpbmQgJiYgdG9CaW5kLnJlbW90ZSkge1xuICAgIHRoaXMuZGVidWcuZGVidWcoJ0JpbmRpbmcgYSBjaGFubmVsIGludG8gYSBtb2R1bGUuJyk7XG4gICAgdGhpcy5tYW5hZ2VyLmNyZWF0ZUxpbmsoXG4gICAgICAgIHNvdXJjZSxcbiAgICAgICAgbmV3U291cmNlID8gJ2RlZmF1bHQnIDogaWRlbnRpZmllcixcbiAgICAgICAgdG9CaW5kLnNvdXJjZSxcbiAgICAgICAgaWRlbnRpZmllcik7XG4gICAgdG9CaW5kLnJlc29sdmUoe1xuICAgICAgdHlwZTogJ0JpbmQgQ2hhbm5lbCcsXG4gICAgICByZXF1ZXN0Oidjb3JlJyxcbiAgICAgIGZsb3c6ICdjb3JlJyxcbiAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgdHlwZTogJ2JpbmQnLFxuICAgICAgICBpZDogaWRlbnRpZmllclxuICAgICAgfVxuICAgIH0pO1xuICAgIGRlbGV0ZSBDb3JlX3VucHJpdmlsZWdlZC51bmJvdW5kQ2hhbm5lbHNbaWRlbnRpZmllcl07XG4gIH0gZWxzZSBpZiAodGhpcy5pc0luTW9kdWxlKCkpIHtcbiAgICB0aGlzLmRlYnVnLmluZm8oJ2RlbGVnYXRpbmcgY2hhbm5lbCBiaW5kIGZvciBhbiB1bmtub3duIElEOicgKyBpZGVudGlmaWVyKTtcbiAgICB0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm1hbmFnZXIuZGVsZWdhdGUsIHtcbiAgICAgIHR5cGU6ICdEZWxlZ2F0aW9uJyxcbiAgICAgIHJlcXVlc3Q6ICdoYW5kbGUnLFxuICAgICAgZmxvdzogJ2NvcmUnLFxuICAgICAgbWVzc2FnZToge1xuICAgICAgICB0eXBlOiAnYmluZCcsXG4gICAgICAgIGlkOiBpZGVudGlmaWVyXG4gICAgICB9XG4gICAgfSk7XG4gICAgc291cmNlLm9uY2UoJ3N0YXJ0JywgZnVuY3Rpb24ocCwgY2IpIHtcbiAgICAgIGNiKHRoaXMuZ2V0Q2hhbm5lbChwKSk7XG4gICAgfS5iaW5kKHRoaXMsIHNvdXJjZSwgY29udGludWF0aW9uKSk7XG4gICAgdGhpcy5tYW5hZ2VyLmNyZWF0ZUxpbmsoc291cmNlLFxuICAgICAgICAnZGVmYXVsdCcsXG4gICAgICAgIHRoaXMubWFuYWdlci5odWIuZ2V0RGVzdGluYXRpb24odGhpcy5tYW5hZ2VyLmRlbGVnYXRlKSxcbiAgICAgICAgaWRlbnRpZmllcik7XG4gICAgZGVsZXRlIENvcmVfdW5wcml2aWxlZ2VkLnVuYm91bmRDaGFubmVsc1tpZGVudGlmaWVyXTtcbiAgICByZXR1cm47XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5kZWJ1Zy53YXJuKCdBc2tlZCB0byBiaW5kIHVua25vd24gY2hhbm5lbDogJyArIGlkZW50aWZpZXIpO1xuICAgIHRoaXMuZGVidWcubG9nKENvcmVfdW5wcml2aWxlZ2VkLnVuYm91bmRDaGFubmVscyk7XG4gICAgY29udGludWF0aW9uKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHNvdXJjZS5nZXRJbnRlcmZhY2UpIHtcbiAgICBjb250aW51YXRpb24odGhpcy5nZXRDaGFubmVsKHNvdXJjZSkpO1xuICB9IGVsc2Uge1xuICAgIGNvbnRpbnVhdGlvbigpO1xuICB9XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaXNJbk1vZHVsZVxuICogQHByaXZhdGVcbiAqIEByZXR1cm5zIHtCb29sZWFufSBXaGV0aGVyIHRoaXMgY2xhc3MgaXMgcnVubmluZyBpbiBhIG1vZHVsZS5cbiAqL1xuQ29yZV91bnByaXZpbGVnZWQucHJvdG90eXBlLmlzSW5Nb2R1bGUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAodGhpcy5tYW5hZ2VyLmRlbGVnYXRlICYmIHRoaXMubWFuYWdlci50b0RlbGVnYXRlLmNvcmUpO1xufTtcblxuLyoqXG4gKiBSZXF1aXJlIGEgZHluYW1pYyBkZXBlbmRlbmN5IGZvciB5b3VyIGZyZWVkb20gbW9kdWxlLlxuICogSWYgbmV3IHBlcm1pc3Npb25zIGFyZSBuZWVkZWQgYmV5b25kIHdoYXQgYXJlIGFscmVhZHkgYXZhaWxhYmxlIHRvIHRoZVxuICogZnJlZWRvbSBjb250ZXh0LCB0aGUgdXNlciB3aWxsIG5lZWQgdG8gYXBwcm92ZSBvZiB0aGUgcmVxdWVzdGVkIHBlcm1pc3Npb25zLlxuICogQG1ldGhvZCByZXF1aXJlXG4gKiBAcGFyYW0ge1N0cmluZ30gbWFuaWZlc3QgVGhlIFVSTCBvZiB0aGUgbWFuaWZlc3QgdG8gcmVxdWlyZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBhcGkgVGhlIEFQSSBvZiB0aGUgZGVwZW5kZW5jeSB0byBleHBvc2UgaWYgbm90IGRlZmF1bHQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aXRoIHRoZSBkZXBlbmRlbmN5LlxuICovXG5Db3JlX3VucHJpdmlsZWdlZC5wcm90b3R5cGUucmVxdWlyZSA9IGZ1bmN0aW9uIChtYW5pZmVzdCwgYXBpLCBjYWxsYmFjaykge1xuICBpZiAodGhpcy5pc0luTW9kdWxlKCkgJiYgQ29yZV91bnByaXZpbGVnZWQubW9kdWxlSW50ZXJuYWwpIHtcbiAgICAvLyBSZWdpc3RlciBhIGNhbGxiYWNrIHdpdGggbW9kdWxlSW50ZXJuYWwuXG4gICAgLy8gRGVwZW5kZW5jeU5hbWUgaXMgdGhlIG5hbWUgb2YgdGhlIGNoYW5uZWwgbW9kdWVsSW50ZXJuYWwgd2lsbCBhbGxvY2F0ZVxuICAgIC8vIGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIG9uY2UgYSBsaW5rIHRvIHRoYXQgY2hhbm5lbCBpcyBzZWVuLlxuICAgIHZhciBkZXBlbmRlbmN5TmFtZSA9XG4gICAgICAgIENvcmVfdW5wcml2aWxlZ2VkLm1vZHVsZUludGVybmFsLnJlZ2lzdGVySWQoYXBpLCBjYWxsYmFjayk7XG5cbiAgICAvLyBSZXF1ZXN0IHRoZSBkZXBlbmRlbmN5IGJlIGFkZGVkLlxuICAgIHRoaXMubWFuYWdlci5lbWl0KHRoaXMubWFuYWdlci5kZWxlZ2F0ZSwge1xuICAgICAgdHlwZTogJ0RlbGVnYXRpb24nLFxuICAgICAgcmVxdWVzdDogJ2hhbmRsZScsXG4gICAgICBmbG93OiAnY29yZScsXG4gICAgICBtZXNzYWdlOiB7XG4gICAgICAgIHR5cGU6ICdyZXF1aXJlJyxcbiAgICAgICAgbWFuaWZlc3Q6IG1hbmlmZXN0LFxuICAgICAgICBpZDogZGVwZW5kZW5jeU5hbWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmRlYnVnLmVycm9yKCdUaGUgcmVxdWlyZSBmdW5jdGlvbiBpbiBleHRlcm5hbCBjb250ZXh0IG1ha2VzIG5vIHNlbnNlJyArXG4gICAgICAgICcgSW5zdGVhZCBjcmVhdGUgYSBuZXcgZnJlZWRvbSgpIGNvbnRleHQuJyk7XG4gICAgY2FsbGJhY2sodW5kZWZpbmVkLCB7XG4gICAgICBlcnJjb2RlOiAnSW52YWxpZENvbnRleHQnLFxuICAgICAgbWVzc2FnZTogJ0Nhbm5vdCBjYWxsIHJlcXVpcmUoKSBmcm9tIHRoaXMgY29udGV4dC4nXG4gICAgfSk7XG4gIH1cbn07XG5cbi8qKlxuICogR2V0IHRoZSBJRCBvZiB0aGUgY3VycmVudCBmcmVlZG9tLmpzIGNvbnRleHQuICBQcm92aWRlcyBhblxuICogYXJyYXkgb2YgbW9kdWxlIFVSTHMsIHRoZSBsaW5lYWdlIG9mIHRoZSBjdXJyZW50IGNvbnRleHQuXG4gKiBXaGVuIG5vdCBpbiBhbiBhcHBsaWNhdGlvbiBjb250ZXh0LCB0aGUgSUQgaXMgdGhlIGxpbmVhZ2VcbiAqIG9mIHRoZSBjdXJyZW50IFZpZXcuXG4gKiBAbWV0aG9kIGdldElkXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gY2FsbGVkIHdpdGggSUQgaW5mb3JtYXRpb24uXG4gKi9cbkNvcmVfdW5wcml2aWxlZ2VkLnByb3RvdHlwZS5nZXRJZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gIC8vIFRPRE86IG1ha2Ugc3VyZSBjb250ZXh0SUQgaXMgcHJvcGVybHkgZnJvemVuLlxuICBjYWxsYmFjayhDb3JlX3VucHJpdmlsZWdlZC5jb250ZXh0SWQpO1xufTtcblxuLyoqXG4gKiBHZXQgYSBsb2dnZXIgZm9yIGxvZ2dpbmcgdG8gdGhlIGZyZWVkb20uanMgbG9nZ2VyLiBQcm92aWRlcyBhXG4gKiBsb2cgb2JqZWN0IHdpdGggYW4gaW50ZXJmYWNlIHNpbWlsYXIgdG8gdGhlIHN0YW5kYXJkIGphdmFzY3JpcHQgY29uc29sZSxcbiAqIHdoaWNoIGxvZ3MgdmlhIGRlYnVnLlxuICogQG1ldGhvZCBnZXRMb2dnZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBsb2dnZXIsIHVzZWQgYXMgaXRzICdzb3VyY2UnXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aXRoIHRoZSBsb2dnZXIuXG4gKi9cbkNvcmVfdW5wcml2aWxlZ2VkLnByb3RvdHlwZS5nZXRMb2dnZXIgPSBmdW5jdGlvbihuYW1lLCBjYWxsYmFjaykge1xuICBjYWxsYmFjayh0aGlzLm1hbmFnZXIuZGVidWcuZ2V0TG9nZ2VyKG5hbWUpKTtcbn07XG5cbi8qKlxuICogU2V0IHRoZSBJRCBvZiB0aGUgY3VycmVudCBmcmVlZG9tLmpzIGNvbnRleHQuXG4gKiBAbWV0aG9kIHNldElkXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtTdHJpbmdbXX0gaWQgVGhlIGxpbmVhZ2Ugb2YgdGhlIGN1cnJlbnQgY29udGV4dC5cbiAqIEBwYXJhbSB7TW9kdWxlSW50ZXJuYWx9IG1vZHVsZUludGVybmFsIFRoZSBNb2R1bGUgZW52aXJvbm1lbnQgaWYgb25lIGV4aXN0cy5cbiAqL1xuQ29yZV91bnByaXZpbGVnZWQucHJvdG90eXBlLnNldElkID0gZnVuY3Rpb24oaWQsIG1vZHVsZUludGVybmFsKSB7XG4gIENvcmVfdW5wcml2aWxlZ2VkLmNvbnRleHRJZCA9IGlkO1xuICBDb3JlX3VucHJpdmlsZWdlZC5tb2R1bGVJbnRlcm5hbCA9IG1vZHVsZUludGVybmFsO1xufTtcblxuZXhwb3J0cy5wcm92aWRlciA9IENvcmVfdW5wcml2aWxlZ2VkO1xuZXhwb3J0cy5uYW1lID0gXCJjb3JlXCI7XG5leHBvcnRzLmZsYWdzID0ge21vZHVsZTogdHJ1ZX07XG4iLCIvKmdsb2JhbHMgZG9jdW1lbnQgKi9cclxuLypqc2xpbnQgaW5kZW50OjIsc2xvcHB5OnRydWUsbm9kZTp0cnVlICovXHJcbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vLi4vc3JjL3V0aWwnKTtcclxudmFyIFByb21pc2VDb21wYXQgPSByZXF1aXJlKCdlczYtcHJvbWlzZScpLlByb21pc2U7XHJcblxyXG4vKipcclxuICogQSBmcmVlZG9tLmpzIHZpZXcgaXMgdGhlIGludGVyZmFjZSBmb3IgdXNlciBpbnRlcmFjdGlvbi5cclxuICogQSB2aWV3IGV4aXN0cyBhcyBhbiBpRnJhbWUsIHdoaWNoIGlzIHNob3duIHRvIHRoZSB1c2VyIGluIHNvbWUgd2F5LlxyXG4gKiBjb21tdW5pY2F0aW9uIGJldHdlZW4gdGhlIHZpZXcgYW5kIHRoZSBmcmVlZG9tLmpzIG1vZHVsZSBpcyBwZXJmb3JtZWRcclxuICogdGhyb3VnaCB0aGUgSFRNTDUgcG9zdE1lc3NhZ2UgbWVjaGFuaXNtLCB3aGljaCB0aGlzIHByb3ZpZGVyIHRyYW5zbGF0ZXNcclxuICogdG8gZnJlZWRvbS5qcyBtZXNzYWdlIGV2ZW50cy5cclxuICogQENsYXNzIFZpZXdfdW5wcml2aWxlZ2VkXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge1ZpZXcgUHJvdmlkZXJ9IHByb3ZpZGVyXHJcbiAqIEBwYXJhbSB7cHJvdmlkZXI6UHJvdmlkZXIsbW9kdWxlOk1vZHVsZX0gY2FwIFRoZSBpbnN0YW50aWF0b3Igb2YgdGhlIHZpZXcuXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGRpc3BhdGNoRXZlbnQgRnVuY3Rpb24gdG8gY2FsbCB0byBlbWl0IGV2ZW50cy5cclxuICovXHJcbnZhciBDb3JlX1ZpZXcgPSBmdW5jdGlvbiAocHJvdmlkZXIsIGNhcCwgZGlzcGF0Y2hFdmVudCkge1xyXG4gIHRoaXMucHJvdmlkZXIgPSBwcm92aWRlcjtcclxuICB0aGlzLmRpc3BhdGNoRXZlbnQgPSBkaXNwYXRjaEV2ZW50O1xyXG4gIHNldFRpbWVvdXQoY2FwLnByb3ZpZGVyLm9uQ2xvc2UuYmluZChcclxuICAgIGNhcC5wcm92aWRlcixcclxuICAgIHRoaXMsXHJcbiAgICB0aGlzLmNsb3NlLmJpbmQodGhpcywgZnVuY3Rpb24gKCkge30pXHJcbiAgKSwgMCk7XHJcbiAgdGhpcy5tb2R1bGUgPSBjYXAubW9kdWxlO1xyXG4gIHV0aWwuaGFuZGxlRXZlbnRzKHRoaXMpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBpcyB0aGUgZGVmYXVsdCBwcm92aWRlciBmb3IgY29yZS52aWV3LCB1bmxlc3Mgb3ZlcnJpZGRlbiBieSBjb250ZXh0IG9yXHJcbiAqIGEgdXNlciBzdXBwbGllZCBwcm92aWRlci4gVGhlIGludGVyZmFjZSBpcyBkb2N1bWVudGVkIGF0OlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZnJlZWRvbWpzL2ZyZWVkb20vd2lraS9mcmVlZG9tLmpzLVZpZXdzXHJcbiAqXHJcbiAqIEdlbmVyYWxseSwgYSB2aWV3IHByb3ZpZGVyIGNvbnNpc3RzIG9mIDMgbWV0aG9kczpcclxuICogb25PcGVuIGlzIGNhbGxlZCB3aGVuIGEgdmlldyBzaG91bGQgYmUgc2hvd24uXHJcbiAqICAgICBpZCAtIGlzIGEgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoaXMgdmlldywgdXNlZCBvbiBzdWJzZXF1ZW50IGNhbGxzXHJcbiAqICAgICAgICAgIGZvciBjb21tdW5pY2F0aW9uIGFuZCB0byBldmVudHVhbGx5IGNsb3NlIHRoZSB2aWV3LlxyXG4gKiAgICAgbmFtZSAtIGlzIHRoZSBuYW1lIG9mIHRoZSB2aWV3IChhcyBkZWZpbmVkIGluIHRoZSBtYW5pZmVzdCksXHJcbiAqICAgICAgICAgICAgaW4gb3JkZXIgdG8gcGxhY2UgaXQgYXBwcm9wcmlhdGVseS5cclxuICogICAgIHBhZ2UgLSBpcyB0aGUgcmVzb2x2ZWQgVVJMIHRvIG9wZW4uXHJcbiAqICAgICByZXNvdXJjZXMgLSBpcyBhbiBhcnJheSBvZiByZXNvbHZlZCBVUkxzIHdoaWNoIGFyZSByZWZlcmVuY2VkLlxyXG4gKiAgICAgcG9zdE1lc3NhZ2UgLSBpcyBhIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBtZXNzYWdlcyBhcmUgZW1pdHRlZFxyXG4gKiAgICAgICAgICAgICAgICAgICBieSB0aGUgd2luZG93IGluIHdoaWNoIHRoZSB2aWV3IGlzIG9wZW5lZC5cclxuICogb25PcGVuIHJldHVybnMgYSBwcm9taXNlIHRoYXQgY29tcGxldGVzIHdoZW4gdGhlIHZpZXcgaXMgbG9hZGVkLlxyXG4gKiBvbk1lc3NhZ2UgaXMgY2FsbGVkIHRvIHNlbmQgYSBtZXNzYWdlIHRvIGFuIG9wZW4gdmlldy5cclxuICogICAgIGlkIC0gaXMgdGhlIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgb3BlbiB2aWV3LlxyXG4gKiAgICAgbWVzc2FnZSAtIGlzIHRoZSBtZXNzYWdlIHRvIHBvc3RNZXNzYWdlIHRvIHRoZSB2aWV3J3Mgd2luZG93LlxyXG4gKiBvbkNsb3NlIGlzIGNhbGxlZCB0byBjbG9zZSBhIHZpZXcuXHJcbiAqICAgICBpZCAtIGlzIHRoZSB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIHZpZXcuXHJcbiAqL1xyXG5Db3JlX1ZpZXcucHJvdmlkZXIgPSB7XHJcbiAgbGlzdGVuZXI6IHVuZGVmaW5lZCxcclxuICBhY3RpdmU6IHt9LFxyXG4gIG9uT3BlbjogZnVuY3Rpb24gKGlkLCBuYW1lLCBwYWdlLCByZXNvdXJjZXMsIHBvc3RNZXNzYWdlKSB7XHJcbiAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuYm9keSxcclxuICAgICAgcm9vdCxcclxuICAgICAgZnJhbWU7XHJcbiAgICBcclxuICAgIGlmICghdGhpcy5saXN0ZW5lcikge1xyXG4gICAgICB0aGlzLmxpc3RlbmVyID0gZnVuY3Rpb24gKG1zZykge1xyXG4gICAgICAgIHZhciBpO1xyXG4gICAgICAgIGZvciAoaSBpbiB0aGlzLmFjdGl2ZSkge1xyXG4gICAgICAgICAgaWYgKHRoaXMuYWN0aXZlLmhhc093blByb3BlcnR5KGkpICYmXHJcbiAgICAgICAgICAgICAgdGhpcy5hY3RpdmVbaV0uc291cmNlID09PSBtc2cuc291cmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlW2ldLnBvc3RNZXNzYWdlKG1zZy5kYXRhKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0uYmluZCh0aGlzKTtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLmxpc3RlbmVyLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBWaWV3cyBvcGVuIGJ5IGRlZmF1bHQgaW4gYW4gZWxlbWVudCB3aXRoIHRoZWlyIElELCBvciBmaWxsIHRoZSBwYWdlXHJcbiAgICAvLyBvdGhlcndpc2UuXHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmFtZSkpIHtcclxuICAgICAgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICByb290LnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICByb290LnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgcm9vdC5zdHlsZS5kaXNwbGF5ID0gXCJyZWxhdGl2ZVwiO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyb290KTtcclxuICAgIFxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlQ29tcGF0KGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xyXG4gICAgICBmcmFtZS5zZXRBdHRyaWJ1dGUoXCJzYW5kYm94XCIsIFwiYWxsb3ctc2NyaXB0cyBhbGxvdy1mb3Jtc1wiKTtcclxuICAgICAgZnJhbWUuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgZnJhbWUuc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XHJcbiAgICAgIGZyYW1lLnN0eWxlLmJvcmRlciA9IFwiMFwiO1xyXG4gICAgICBmcmFtZS5zdHlsZS5iYWNrZ3JvdW5kID0gXCJ0cmFuc3BhcmVudFwiO1xyXG4gICAgICBmcmFtZS5zcmMgPSBwYWdlO1xyXG4gICAgICBmcmFtZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgcmVzb2x2ZSwgdHJ1ZSk7XHJcbiAgICAgIGZyYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgcmVqZWN0LCB0cnVlKTtcclxuXHJcbiAgICAgIHJvb3QuYXBwZW5kQ2hpbGQoZnJhbWUpO1xyXG5cclxuICAgICAgdGhpcy5hY3RpdmVbaWRdID0ge1xyXG4gICAgICAgIHBvc3RNZXNzYWdlOiBwb3N0TWVzc2FnZSxcclxuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lcixcclxuICAgICAgICByb290OiByb290LFxyXG4gICAgICAgIHNvdXJjZTogZnJhbWUuY29udGVudFdpbmRvd1xyXG4gICAgICB9O1xyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuICB9LFxyXG4gIG9uTWVzc2FnZTogZnVuY3Rpb24gKGlkLCBtZXNzYWdlKSB7XHJcbiAgICB0aGlzLmFjdGl2ZVtpZF0uc291cmNlLnBvc3RNZXNzYWdlKG1lc3NhZ2UsICcqJyk7XHJcbiAgfSxcclxuICBvbkNsb3NlOiBmdW5jdGlvbiAoaWQpIHtcclxuICAgIHRoaXMuYWN0aXZlW2lkXS5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5hY3RpdmVbaWRdLnJvb3QpO1xyXG4gICAgZGVsZXRlIHRoaXMuYWN0aXZlW2lkXTtcclxuICAgIFxyXG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuYWN0aXZlKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLmxpc3RlbmVyLCB0cnVlKTtcclxuICAgICAgdGhpcy5saXN0ZW5lciA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogQXNrIGZvciB0aGlzIHZpZXcgdG8gb3BlbiBhIHNwZWNpZmljIGxvY2F0aW9uLCBlaXRoZXIgYSBGaWxlIHJlbGF0aXZlIHRvXHJcbiAqIHRoZSBsb2FkZXIsIG9yIGFuIGV4cGxpY2l0IGNvZGUgbG9jYXRpb24uXHJcbiAqIEBtZXRob2Qgc2hvd1xyXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgaWRlbnRpZmllciBvZiB0aGUgdmlldy5cclxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29udGludWF0aW9uIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB2aWV3IGlzIGxvYWRlZC5cclxuICovXHJcbkNvcmVfVmlldy5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uIChuYW1lLCBjb250aW51YXRpb24pIHtcclxuICBpZiAodGhpcy5pZCkge1xyXG4gICAgcmV0dXJuIGNvbnRpbnVhdGlvbih1bmRlZmluZWQsIHtcclxuICAgICAgZXJyY29kZTogJ0FMUkVBRFlfT1BFTicsXHJcbiAgICAgIG1lc3NhZ2U6ICdDYW5ub3Qgc2hvdyBtdWx0aXBsZSB2aWV3cyB0aHJvdWdoIG9uZSBpbnN0YW5jZS4nXHJcbiAgICB9KTtcclxuICB9XHJcbiAgdGhpcy5pZCA9IHV0aWwuZ2V0SWQoKTtcclxuXHJcbiAgdmFyIGNvbmZpZyA9IHRoaXMubW9kdWxlLm1hbmlmZXN0LnZpZXdzLFxyXG4gICAgdG9SZXNvbHZlID0gW107XHJcbiAgaWYgKCFjb25maWcgfHwgIWNvbmZpZ1tuYW1lXSkge1xyXG4gICAgcmV0dXJuIGNvbnRpbnVhdGlvbih1bmRlZmluZWQsIHtcclxuICAgICAgZXJyY29kZTogJ05PTl9FWElTVEFOVCcsXHJcbiAgICAgIG1lc3NhZ2U6ICdWaWV3IG5vdCBmb3VuZDogJyArIG5hbWVcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNvbmZpZ1tuYW1lXS5tYWluICYmIGNvbmZpZ1tuYW1lXS5maWxlcykge1xyXG4gICAgdG9SZXNvbHZlID0gY29uZmlnW25hbWVdLmZpbGVzLmNvbmNhdChjb25maWdbbmFtZV0ubWFpbik7XHJcbiAgICBQcm9taXNlQ29tcGF0LmFsbCh0b1Jlc29sdmUubWFwKGZ1bmN0aW9uIChmbmFtZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5tb2R1bGUucmVzb3VyY2UuZ2V0KHRoaXMubW9kdWxlLm1hbmlmZXN0SWQsIGZuYW1lKTtcclxuICAgIH0uYmluZCh0aGlzKSkpLnRoZW4oZnVuY3Rpb24gKGZpbGVzKSB7XHJcbiAgICAgIHRoaXMucHJvdmlkZXIub25PcGVuKHRoaXMuaWQsXHJcbiAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgZmlsZXNbZmlsZXMubGVuZ3RoIC0gMV0sXHJcbiAgICAgICAgICBmaWxlcyxcclxuICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudC5iaW5kKHRoaXMsICdtZXNzYWdlJykpLnRoZW4oXHJcbiAgICAgICAgZnVuY3Rpb24gKGMpIHtcclxuICAgICAgICAgIC8vIE1ha2Ugc3VyZSBjb250aW51YXRpb24gaXMgY2FsbGVkIHdpdGhvdXQgYW4gYXJndW1lbnQuXHJcbiAgICAgICAgICBjKCk7XHJcbiAgICAgICAgfS5iaW5kKHt9LCBjb250aW51YXRpb24pLFxyXG4gICAgICAgIGNvbnRpbnVhdGlvbi5iaW5kKHt9LCB1bmRlZmluZWQpXHJcbiAgICAgICk7XHJcbiAgICB9LmJpbmQodGhpcyksIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgdGhpcy5tb2R1bGUuZGVidWcuZXJyb3IoJ1VuYWJsZSB0byBvcGVuIHZpZXcgJyArIG5hbWUgKyAnOiAnLCBlcnIpO1xyXG4gICAgICBjb250aW51YXRpb24odW5kZWZpbmVkLCB7XHJcbiAgICAgICAgZXJyY29kZTogJ1ZJRVdfTUFMRk9STUVEJyxcclxuICAgICAgICBtZXNzYWdlOiAnTWFsZm9ybWVkIFZpZXcgRGVjbGFyYXRpb246ICcgKyBlcnJcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29udGludWF0aW9uKHVuZGVmaW5lZCwge1xyXG4gICAgICBlcnJjb2RlOiAnTk9OX0VYSVNUQU5UJyxcclxuICAgICAgbWVzc2FnZTogJ1ZpZXcgbm90IGZvdW5kOiAnICsgbmFtZVxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIGlzU2VjdXJlIGRldGVybWluZXMgd2hldGhlciB0aGUgbW9kdWxlIGNhbiBoYXZlIGNvbmZpZGVuY2UgdGhhdCBpdHNcclxuICogY29tbXVuaWNhdGlvbiB3aXRoIGl0cyB2aWV3IGNhbm5vdCBiZSBpbnRlcmNlcHRlZCBieSBhbiB1bnRydXN0ZWQgM3JkIHBhcnR5LlxyXG4gKiBJbiBwcmFjdGljZSwgdGhpcyBtZWFucyB0aGF0IGl0cyBva2F5IGZvciB0aGUgcnVudGltZSB0byBoYXZlIGFjY2VzcyB0byB0aGVcclxuICogbWVzc2FnZXMsIGFuZCBpZiB0aGUgY29udGV4dCBpcyBhIHdlYiBzZXJ2ZXIgb3IgYSBicm93c2VyIGV4dGVuc2lvbiB0aGVuXHJcbiAqIHRoYXQgY29udGV4dCBpcyB0cnVzdGVkLiBIb3dldmVyLCBpZiBhIHByb3ZpZGVyIHdhbnRzIHRvIGFsbG93IHRoZWlyIGUuZy5cclxuICogc29jaWFsIHByb3ZpZGVyIHRvIGJlIHVzZWQgb24gYXJiaXRyYXJ5IHdlYnNpdGVzLCB0aGlzIG1lY2hhbmlzbSBtZWFucyB0aGF0XHJcbiAqIGlmIHRoZSB3ZWJzaXRlIHVzZXMgYSB0cnVzdGVkIHZlcnNpb24gb2YgdGhlIGZyZWVkb20uanMgbGlicmFyeSwgdGhlbiB0aGVcclxuICogbW9kdWxlIGNhbiBiZSB1c2VkLlxyXG4gKiBAbWV0aG9kIGlzU2VjdXJlXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBpZiB0aGUgY2hhbm5lbCB0byB0aGUgdmlldyBpcyBzZWN1cmUuXHJcbiAqL1xyXG5Db3JlX1ZpZXcucHJvdG90eXBlLmlzU2VjdXJlID0gZnVuY3Rpb24gKGNvbnRpbnVhdGlvbikge1xyXG4gIGNvbnRpbnVhdGlvbihmYWxzZSk7XHJcbn07XHJcblxyXG4vKipcclxuICogU2VuZCBhIG1lc3NhZ2UgdG8gYW4gb3BlbiB2aWV3LlxyXG4gKiBAbWV0aG9kIHBvc3RNZXNzYWdlXHJcbiAqL1xyXG5Db3JlX1ZpZXcucHJvdG90eXBlLnBvc3RNZXNzYWdlID0gZnVuY3Rpb24gKG1zZywgY29udGludWF0aW9uKSB7XHJcbiAgaWYgKCF0aGlzLmlkKSB7XHJcbiAgICByZXR1cm4gY29udGludWF0aW9uKHVuZGVmaW5lZCwge1xyXG4gICAgICBlcnJjb2RlOiAnTk9UX09QRU4nLFxyXG4gICAgICBtZXNzYWdlOiAnQ2Fubm90IHBvc3QgbWVzc2FnZSB0byB1bmluaXRpYWxpemVkIHZpZXcuJ1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHRoaXMucHJvdmlkZXIub25NZXNzYWdlKHRoaXMuaWQsIG1zZyk7XHJcbiAgY29udGludWF0aW9uKCk7XHJcbn07XHJcblxyXG4vKipcclxuICogQ2xvc2UgYW4gYWN0aXZlIHZpZXcuXHJcbiAqIEBtZXRob2QgY2xvc2VcclxuICovXHJcbkNvcmVfVmlldy5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoY29udGludWF0aW9uKSB7XHJcbiAgaWYgKCF0aGlzLmlkKSB7XHJcbiAgICByZXR1cm4gY29udGludWF0aW9uKHVuZGVmaW5lZCwge1xyXG4gICAgICBlcnJjb2RlOiAnTk9UX09QRU4nLFxyXG4gICAgICBtZXNzYWdlOiAnQ2Fubm90IGNsb3NlIHVuaW5pdGlhbGl6ZWQgdmlldy4nXHJcbiAgICB9KTtcclxuICB9XHJcbiAgdGhpcy5wcm92aWRlci5vbkNsb3NlKHRoaXMuaWQpO1xyXG4gIGRlbGV0ZSB0aGlzLmlkO1xyXG5cclxuICBjb250aW51YXRpb24oKTtcclxufTtcclxuXHJcblxyXG4vKipcclxuICogQWxsb3cgYSB3ZWIgcGFnZSB0byByZWRlZmluZSBiZWhhdmlvciBmb3IgaG93IHZpZXdzIGFyZSBzaG93bi5cclxuICogQG1ldGhvZCByZWdpc3RlclxyXG4gKiBAc3RhdGljXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFBhZ2VQcm92aWRlciBUaGUgY3VzdG9tIHZpZXcgYmVoYXZpb3IuXHJcbiAqL1xyXG5Db3JlX1ZpZXcucmVnaXN0ZXIgPSBmdW5jdGlvbiAoUGFnZVByb3ZpZGVyKSB7XHJcbiAgdmFyIHByb3ZpZGVyID0gUGFnZVByb3ZpZGVyID8gbmV3IFBhZ2VQcm92aWRlcigpIDogQ29yZV9WaWV3LnByb3ZpZGVyO1xyXG4gIGV4cG9ydHMucHJvdmlkZXIgPSBDb3JlX1ZpZXcuYmluZCh0aGlzLCBwcm92aWRlcik7XHJcbn07XHJcblxyXG5leHBvcnRzLnByb3ZpZGVyID0gQ29yZV9WaWV3LmJpbmQodGhpcywgQ29yZV9WaWV3LnByb3ZpZGVyKTtcclxuZXhwb3J0cy5uYW1lID0gJ2NvcmUudmlldyc7XHJcbmV4cG9ydHMucmVnaXN0ZXIgPSBDb3JlX1ZpZXcucmVnaXN0ZXI7XHJcbmV4cG9ydHMuZmxhZ3MgPSB7cHJvdmlkZXI6IHRydWUsIG1vZHVsZTogdHJ1ZX07XHJcbiIsIi8qZ2xvYmFscyBXZWJTb2NrZXQsIEFycmF5QnVmZmVyLCBCbG9iLCBVaW50OEFycmF5LCBjb25zb2xlICovXG4vKmpzbGludCBzbG9wcHk6dHJ1ZSwgbm9kZTp0cnVlICovXG5cbnZhciBXU0hhbmRsZSA9IG51bGw7XG52YXIgbm9kZVN0eWxlID0gZmFsc2U7XG5cbi8qKlxuICogQSBXZWJTb2NrZXQgY29yZSBwcm92aWRlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjYXAgQ2FwYWJpbGl0aWVzIGZvciB0aGUgcHJvdmlkZXJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGRpc3BhdGNoRXZlbnQgRnVuY3Rpb24gdG8gZGlzcGF0Y2ggZXZlbnRzLlxuICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgUmVtb3RlIFVSTCB0byBjb25uZWN0IHdpdGguXG4gKiBAcGFyYW0ge1N0cmluZ1tdfSBwcm90b2NvbHMgU3ViUHJvdG9jb2xzIHRvIG9wZW4uXG4gKiBAcGFyYW0ge1dlYlNvY2tldD99IHNvY2tldCBBbiBhbHRlcm5hdGl2ZSBzb2NrZXQgY2xhc3MgdG8gdXNlLlxuICovXG52YXIgV1MgPSBmdW5jdGlvbiAoY2FwLCBkaXNwYXRjaEV2ZW50LCB1cmwsIHByb3RvY29scywgc29ja2V0KSB7XG4gIHZhciBXU0ltcGxlbWVudGF0aW9uID0gbnVsbCxcbiAgICBlcnJvcjtcbiAgdGhpcy5pc05vZGUgPSBub2RlU3R5bGU7XG4gIGlmICh0eXBlb2Ygc29ja2V0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIFdTSW1wbGVtZW50YXRpb24gPSBzb2NrZXQ7XG4gIH0gZWxzZSBpZiAoV1NIYW5kbGUgIT09IG51bGwpIHtcbiAgICBXU0ltcGxlbWVudGF0aW9uID0gV1NIYW5kbGU7XG4gIH0gZWxzZSBpZiAodHlwZW9mIFdlYlNvY2tldCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBXU0ltcGxlbWVudGF0aW9uID0gV2ViU29ja2V0O1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1BsYXRmb3JtIGRvZXMgbm90IHN1cHBvcnQgV2ViU29ja2V0Jyk7XG4gIH1cblxuICB0aGlzLmRpc3BhdGNoRXZlbnQgPSBkaXNwYXRjaEV2ZW50O1xuICB0cnkge1xuICAgIGlmIChwcm90b2NvbHMpIHtcbiAgICAgIHRoaXMud2Vic29ja2V0ID0gbmV3IFdTSW1wbGVtZW50YXRpb24odXJsLCBwcm90b2NvbHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLndlYnNvY2tldCA9IG5ldyBXU0ltcGxlbWVudGF0aW9uKHVybCk7XG4gICAgfVxuICAgIHRoaXMud2Vic29ja2V0LmJpbmFyeVR5cGUgPSAnYXJyYXlidWZmZXInO1xuICB9IGNhdGNoIChlKSB7XG4gICAgZXJyb3IgPSB7fTtcbiAgICBpZiAoZSBpbnN0YW5jZW9mIFN5bnRheEVycm9yKSB7XG4gICAgICBlcnJvci5lcnJjb2RlID0gJ1NZTlRBWCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVycm9yLmVycmNvZGUgPSBlLm5hbWU7XG4gICAgfVxuICAgIGVycm9yLm1lc3NhZ2UgPSBlLm1lc3NhZ2U7XG4gICAgZGlzcGF0Y2hFdmVudCgnb25FcnJvcicsIGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodGhpcy5pc05vZGUpIHtcbiAgICB0aGlzLndlYnNvY2tldC5vbignbWVzc2FnZScsIHRoaXMub25NZXNzYWdlLmJpbmQodGhpcykpO1xuICAgIHRoaXMud2Vic29ja2V0Lm9uKCdvcGVuJywgdGhpcy5vbk9wZW4uYmluZCh0aGlzKSk7XG4gICAgLy8gbm9kZS5qcyB3ZWJzb2NrZXQgaW1wbGVtZW50YXRpb24gbm90IGNvbXBsaWFudFxuICAgIHRoaXMud2Vic29ja2V0Lm9uKCdjbG9zZScsIHRoaXMub25DbG9zZS5iaW5kKHRoaXMsIHtcbiAgICAgIGNvZGU6IDAsXG4gICAgICByZWFzb246ICdVTktOT1dOJyxcbiAgICAgIHdhc0NsZWFuOiB0cnVlXG4gICAgfSkpO1xuICAgIHRoaXMud2Vic29ja2V0Lm9uKCdlcnJvcicsIHRoaXMub25FcnJvci5iaW5kKHRoaXMpKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLndlYnNvY2tldC5vbm9wZW4gPSB0aGlzLm9uT3Blbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMud2Vic29ja2V0Lm9uY2xvc2UgPSB0aGlzLm9uQ2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLndlYnNvY2tldC5vbm1lc3NhZ2UgPSB0aGlzLm9uTWVzc2FnZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMud2Vic29ja2V0Lm9uZXJyb3IgPSB0aGlzLm9uRXJyb3IuYmluZCh0aGlzKTtcbiAgfVxufTtcblxuV1MucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAoZGF0YSwgY29udGludWF0aW9uKSB7XG4gIHZhciB0b1NlbmQgPSBkYXRhLnRleHQgfHwgZGF0YS5iaW5hcnkgfHwgZGF0YS5idWZmZXIsXG4gICAgZXJyY29kZSxcbiAgICBtZXNzYWdlO1xuXG4gIGlmICh0b1NlbmQpIHtcbiAgICB0cnkge1xuICAgICAgLy8gRm9yIG5vZGUuanMsIHdlIGhhdmUgdG8gZG8gd2VpcmQgYnVmZmVyIHN0dWZmXG4gICAgICBpZiAodGhpcy5pc05vZGUgJiYgdG9TZW5kIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgdGhpcy53ZWJzb2NrZXQuc2VuZChcbiAgICAgICAgICBuZXcgVWludDhBcnJheSh0b1NlbmQpLFxuICAgICAgICAgIHsgYmluYXJ5OiB0cnVlIH0sXG4gICAgICAgICAgdGhpcy5vbkVycm9yLmJpbmQodGhpcylcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMud2Vic29ja2V0LnNlbmQodG9TZW5kKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoZSBpbnN0YW5jZW9mIFN5bnRheEVycm9yKSB7XG4gICAgICAgIGVycmNvZGUgPSBcIlNZTlRBWFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyY29kZSA9IFwiSU5WQUxJRF9TVEFURVwiO1xuICAgICAgfVxuICAgICAgbWVzc2FnZSA9IGUubWVzc2FnZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZXJyY29kZSA9IFwiQkFEX1NFTkRcIjtcbiAgICBtZXNzYWdlID0gXCJObyB0ZXh0LCBiaW5hcnksIG9yIGJ1ZmZlciBkYXRhIGZvdW5kLlwiO1xuICB9XG5cbiAgaWYgKGVycmNvZGUpIHtcbiAgICBjb250aW51YXRpb24odW5kZWZpbmVkLCB7XG4gICAgICBlcnJjb2RlOiBlcnJjb2RlLFxuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNvbnRpbnVhdGlvbigpO1xuICB9XG59O1xuXG5XUy5wcm90b3R5cGUuZ2V0UmVhZHlTdGF0ZSA9IGZ1bmN0aW9uIChjb250aW51YXRpb24pIHtcbiAgY29udGludWF0aW9uKHRoaXMud2Vic29ja2V0LnJlYWR5U3RhdGUpO1xufTtcblxuV1MucHJvdG90eXBlLmdldEJ1ZmZlcmVkQW1vdW50ID0gZnVuY3Rpb24gKGNvbnRpbnVhdGlvbikge1xuICBjb250aW51YXRpb24odGhpcy53ZWJzb2NrZXQuYnVmZmVyZWRBbW91bnQpO1xufTtcblxuV1MucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKGNvZGUsIHJlYXNvbiwgY29udGludWF0aW9uKSB7XG4gIHRyeSB7XG4gICAgaWYgKGNvZGUgJiYgcmVhc29uKSB7XG4gICAgICB0aGlzLndlYnNvY2tldC5jbG9zZShjb2RlLCByZWFzb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLndlYnNvY2tldC5jbG9zZSgpO1xuICAgIH1cbiAgICBjb250aW51YXRpb24oKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHZhciBlcnJvckNvZGU7XG4gICAgaWYgKGUgaW5zdGFuY2VvZiBTeW50YXhFcnJvcikge1xuICAgICAgZXJyb3JDb2RlID0gXCJTWU5UQVhcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZXJyb3JDb2RlID0gXCJJTlZBTElEX0FDQ0VTU1wiO1xuICAgIH1cbiAgICBjb250aW51YXRpb24odW5kZWZpbmVkLCB7XG4gICAgICBlcnJjb2RlOiBlcnJvckNvZGUsXG4gICAgICBtZXNzYWdlOiBlLm1lc3NhZ2VcbiAgICB9KTtcbiAgfVxufTtcblxuV1MucHJvdG90eXBlLm9uT3BlbiA9IGZ1bmN0aW9uIChldmVudCkge1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoJ29uT3BlbicpO1xufTtcblxuV1MucHJvdG90eXBlLm9uTWVzc2FnZSA9IGZ1bmN0aW9uIChldmVudCwgZmxhZ3MpIHtcbiAgdmFyIGRhdGEgPSB7fTtcbiAgaWYgKHRoaXMuaXNOb2RlICYmIGZsYWdzICYmIGZsYWdzLmJpbmFyeSkge1xuICAgIGRhdGEuYnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkoZXZlbnQpLmJ1ZmZlcjtcbiAgfSBlbHNlIGlmICh0aGlzLmlzTm9kZSkge1xuICAgIGRhdGEudGV4dCA9IGV2ZW50O1xuICB9IGVsc2UgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgZXZlbnQuZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgZGF0YS5idWZmZXIgPSBldmVudC5kYXRhO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBCbG9iICE9PSAndW5kZWZpbmVkJyAmJiBldmVudC5kYXRhIGluc3RhbmNlb2YgQmxvYikge1xuICAgIGRhdGEuYmluYXJ5ID0gZXZlbnQuZGF0YTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXZlbnQuZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICBkYXRhLnRleHQgPSBldmVudC5kYXRhO1xuICB9XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25NZXNzYWdlJywgZGF0YSk7XG59O1xuXG5XUy5wcm90b3R5cGUub25FcnJvciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAvLyBOb3RoaW5nIHRvIHBhc3Mgb25cbiAgLy8gU2VlOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xODgwNDI5OC8zMDA1MzlcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbkVycm9yJyk7XG59O1xuXG5XUy5wcm90b3R5cGUub25DbG9zZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoJ29uQ2xvc2UnLFxuICAgICAgICAgICAgICAgICAgICAge2NvZGU6IGV2ZW50LmNvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgcmVhc29uOiBldmVudC5yZWFzb24sXG4gICAgICAgICAgICAgICAgICAgICAgd2FzQ2xlYW46IGV2ZW50Lndhc0NsZWFufSk7XG59O1xuXG5leHBvcnRzLnByb3ZpZGVyID0gV1M7XG5leHBvcnRzLm5hbWUgPSAnY29yZS53ZWJzb2NrZXQnO1xuZXhwb3J0cy5zZXRTb2NrZXQgPSBmdW5jdGlvbiAoaW1wbCwgaXNOb2RlKSB7XG4gIFdTSGFuZGxlID0gaW1wbDtcbiAgbm9kZVN0eWxlID0gaXNOb2RlO1xufTtcbiIsIi8qanNoaW50IG5vZGU6dHJ1ZSovXG52YXIgUHJvbWlzZUNvbXBhdCA9IHJlcXVpcmUoJ2VzNi1wcm9taXNlJykuUHJvbWlzZTtcbnZhciBYaHJDbGFzcyA9IG51bGw7XG5cbnZhciBYaHJQcm92aWRlciA9IGZ1bmN0aW9uKGNhcCwgZGlzcGF0Y2hFdmVudCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgIHR5cGVvZiB3aW5kb3cuWE1MSHR0cFJlcXVlc3QgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgIFhockNsYXNzID09PSBudWxsKSB7IC8vIGZyZWVkb21cbiAgICBYaHJDbGFzcyA9IHdpbmRvdy5YTUxIdHRwUmVxdWVzdDtcbiAgfSBlbHNlIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgIFhockNsYXNzID09PSBudWxsKSB7IC8vIGZyZWVkb20tZm9yLWZpcmVmb3hcbiAgICBYaHJDbGFzcyA9IFhNTEh0dHBSZXF1ZXN0O1xuICB9IGVsc2UgaWYgKFhockNsYXNzID09PSBudWxsKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlBsYXRmb3JtIGRvZXMgbm90IHN1cHBvcnQgWE1MSHR0cFJlcXVlc3RcIik7XG4gIH1cblxuICB0aGlzLl9kaXNwYXRjaEV2ZW50ID0gZGlzcGF0Y2hFdmVudDtcbiAgdGhpcy5feGhyID0gbmV3IFhockNsYXNzKCk7XG5cbiAgc2V0VGltZW91dChjYXAucHJvdmlkZXIub25DbG9zZS5iaW5kKFxuICAgIGNhcC5wcm92aWRlcixcbiAgICB0aGlzLFxuICAgIHRoaXMuYWJvcnQuYmluZCh0aGlzKVxuICApLCAwKTtcblxuICB0aGlzLl9ldmVudHMgPSBbXG4gICAgXCJsb2Fkc3RhcnRcIixcbiAgICBcInByb2dyZXNzXCIsXG4gICAgXCJhYm9ydFwiLFxuICAgIFwiZXJyb3JcIixcbiAgICBcImxvYWRcIixcbiAgICBcInRpbWVvdXRcIixcbiAgICBcImxvYWRlbmRcIixcbiAgICBcInJlYWR5c3RhdGVjaGFuZ2VcIlxuICBdO1xuICB0aGlzLl9zZXR1cExpc3RlbmVycygpO1xuXG59O1xuXG5YaHJQcm92aWRlci5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uKG1ldGhvZCwgdXJsLCBhc3luYywgdXNlciwgcGFzc3dvcmQpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIGlmICh0eXBlb2YgYXN5bmMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXN5bmMgIT09IHRydWUpIHtcbiAgICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZWplY3Qoe1xuICAgICAgZXJyY29kZTogXCJJbnZhbGlkQWNjZXNzRXJyb3JcIixcbiAgICAgIG1lc3NhZ2U6IFwiYXN5bmMgc2hvdWxkIGFsd2F5cyBiZSBzZXQgdG8gdHJ1ZVwiXG4gICAgfSk7XG4gIH1cblxuICAvLyBGb3JjZSBhc3luYyB0byBiZSB0cnVlLiB1bmRlZmluZWQgY2FuIGxlYWQgdG8gYXN5bmM9ZmFsc2UgaW4gQ2hyb21lIHBhY2thZ2VkIGFwcHNcbiAgdGhpcy5feGhyLm9wZW4obWV0aG9kLCB1cmwsIHRydWUsIHVzZXIsIHBhc3N3b3JkKTtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSgpO1xufTtcblxuWGhyUHJvdmlkZXIucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbihkYXRhKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICBpZiAoIShkYXRhIGluc3RhbmNlb2YgT2JqZWN0KSkge1xuICAgIHRoaXMuX3hoci5zZW5kKCk7XG4gIH0gZWxzZSBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShcInN0cmluZ1wiKSkge1xuICAgIHRoaXMuX3hoci5zZW5kKGRhdGEuc3RyaW5nKTtcbiAgfSBlbHNlIGlmIChkYXRhLmhhc093blByb3BlcnR5KFwiYnVmZmVyXCIpKSB7XG4gICAgdGhpcy5feGhyLnNlbmQoZGF0YS5idWZmZXIpO1xuICB9IGVsc2UgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoXCJibG9iXCIpKSB7XG4gICAgdGhpcy5feGhyLnNlbmQoZGF0YS5ibG9iKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLl94aHIuc2VuZCgpO1xuICB9XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUoKTtcbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5hYm9ydCA9IGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgdGhpcy5feGhyLmFib3J0KCk7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUoKTtcbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5nZXRSZXNwb25zZUhlYWRlciA9IGZ1bmN0aW9uKGhlYWRlcikge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSh0aGlzLl94aHIuZ2V0UmVzcG9uc2VIZWFkZXIoaGVhZGVyKSk7XG59O1xuXG5YaHJQcm92aWRlci5wcm90b3R5cGUuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzID0gZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHRoaXMuX3hoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSk7XG59O1xuXG5YaHJQcm92aWRlci5wcm90b3R5cGUuc2V0UmVxdWVzdEhlYWRlciA9IGZ1bmN0aW9uKGhlYWRlciwgdmFsdWUpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHRoaXMuX3hoci5zZXRSZXF1ZXN0SGVhZGVyKGhlYWRlciwgdmFsdWUpO1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKCk7XG59O1xuXG5YaHJQcm92aWRlci5wcm90b3R5cGUub3ZlcnJpZGVNaW1lVHlwZSA9IGZ1bmN0aW9uKG1pbWUpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHRoaXMuX3hoci5vdmVycmlkZU1pbWVUeXBlKG1pbWUpO1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKCk7XG59O1xuXG5YaHJQcm92aWRlci5wcm90b3R5cGUuZ2V0UmVhZHlTdGF0ZSA9IGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSh0aGlzLl94aHIucmVhZHlTdGF0ZSk7XG59O1xuXG5YaHJQcm92aWRlci5wcm90b3R5cGUuZ2V0UmVzcG9uc2UgPSBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIGlmICh0aGlzLl94aHIucmVzcG9uc2UgPT09IG51bGwpIHtcbiAgICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKG51bGwpO1xuICB9IGVsc2UgaWYgKHRoaXMuX3hoci5yZXNwb25zZVR5cGUgPT09IFwidGV4dFwiIHx8IHRoaXMuX3hoci5yZXNwb25zZVR5cGUgPT09IFwiXCIpIHtcbiAgICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHsgc3RyaW5nOiB0aGlzLl94aHIucmVzcG9uc2UgfSk7XG4gIH0gZWxzZSBpZiAodGhpcy5feGhyLnJlc3BvbnNlVHlwZSA9PT0gXCJhcnJheWJ1ZmZlclwiKSB7XG4gICAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSh7IGJ1ZmZlcjogdGhpcy5feGhyLnJlc3BvbnNlIH0pO1xuICB9IGVsc2UgaWYgKHRoaXMuX3hoci5yZXNwb25zZVR5cGUgPT09IFwianNvblwiKSB7XG4gICAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSh7IG9iamVjdDogdGhpcy5feGhyLnJlc3BvbnNlIH0pO1xuICB9XG5cbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVqZWN0KFwiY29yZS54aHIgY2Fubm90IGRldGVybWluZSB0eXBlIG9mIHJlc3BvbnNlXCIpO1xufTtcblxuWGhyUHJvdmlkZXIucHJvdG90eXBlLmdldFJlc3BvbnNlVGV4dCA9IGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSh0aGlzLl94aHIucmVzcG9uc2VUZXh0KTtcbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5nZXRSZXNwb25zZVVSTCA9IGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSh0aGlzLl94aHIucmVzcG9uc2VVUkwpO1xufTtcblxuWGhyUHJvdmlkZXIucHJvdG90eXBlLmdldFJlc3BvbnNlVHlwZSA9IGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSh0aGlzLl94aHIucmVzcG9uc2VUeXBlKTtcbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5zZXRSZXNwb25zZVR5cGUgPSBmdW5jdGlvbih0eXBlKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICB0aGlzLl94aHIucmVzcG9uc2VUeXBlID0gdHlwZTtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSgpO1xufTtcblxuWGhyUHJvdmlkZXIucHJvdG90eXBlLmdldFN0YXR1cyA9IGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSh0aGlzLl94aHIuc3RhdHVzKTtcbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5nZXRTdGF0dXNUZXh0ID0gZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHRoaXMuX3hoci5zdGF0dXNUZXh0KTtcbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5nZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHRoaXMuX3hoci50aW1lb3V0KTtcbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5zZXRUaW1lb3V0ID0gZnVuY3Rpb24odGltZW91dCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgdGhpcy5feGhyLnRpbWVvdXQgPSB0aW1lb3V0O1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKCk7XG59O1xuXG5YaHJQcm92aWRlci5wcm90b3R5cGUuZ2V0V2l0aENyZWRlbnRpYWxzID0gZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHRoaXMuX3hoci53aXRoQ3JlZGVudGlhbHMpO1xufTtcblxuWGhyUHJvdmlkZXIucHJvdG90eXBlLnNldFdpdGhDcmVkZW50aWFscyA9IGZ1bmN0aW9uKHdjKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICB0aGlzLl94aHIud2l0aENyZWRlbnRpYWxzID0gd2M7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUoKTtcbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5fc2V0dXBMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIC8vIERvd25sb2FkIGV2ZW50c1xuICB0aGlzLl9ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgdGhpcy5feGhyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBmdW5jdGlvbihldmVudE5hbWUsIGV2ZW50KSB7XG4gICAgICB0aGlzLl9kaXNwYXRjaEV2ZW50KFwib25cIiArIGV2ZW50TmFtZSwgZXZlbnQpO1xuICAgIH0uYmluZCh0aGlzLCBldmVudE5hbWUpLCBmYWxzZSk7XG4gIH0uYmluZCh0aGlzKSk7XG5cbiAgLy8gVXBsb2FkIGV2ZW50c1xuICB0aGlzLl9ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgdGhpcy5feGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZnVuY3Rpb24oZXZlbnROYW1lLCBldmVudCkge1xuICAgICAgdGhpcy5fZGlzcGF0Y2hFdmVudChcIm9udXBsb2FkXCIgKyBldmVudE5hbWUsIGV2ZW50KTtcbiAgICB9LmJpbmQodGhpcywgZXZlbnROYW1lKSwgZmFsc2UpO1xuICB9LmJpbmQodGhpcykpO1xufTtcblxuZXhwb3J0cy5uYW1lID0gXCJjb3JlLnhoclwiO1xuZXhwb3J0cy5wcm92aWRlciA9IFhoclByb3ZpZGVyO1xuZXhwb3J0cy5zdHlsZSA9IFwicHJvdmlkZVByb21pc2VzXCI7XG5leHBvcnRzLmZsYWdzID0geyBwcm92aWRlcjogdHJ1ZSB9O1xuZXhwb3J0cy5zZXRJbXBsID0gZnVuY3Rpb24oaW1wbCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgWGhyQ2xhc3MgPSBpbXBsO1xufTtcbiIsIi8qanNsaW50IGluZGVudDoyLGJyb3dzZXI6dHJ1ZSwgbm9kZTp0cnVlICovXG52YXIgUHJvbWlzZUNvbXBhdCA9IHJlcXVpcmUoJ2VzNi1wcm9taXNlJykuUHJvbWlzZTtcblxudmFyIG9BdXRoUmVkaXJlY3RJZCA9ICdmcmVlZG9tLm9hdXRoLnJlZGlyZWN0LmhhbmRsZXInO1xuXG52YXIgbG9hZGVkT25TdGFydHVwID0gZmFsc2U7XG5cbnZhciBUSU1FT1VUID0gNTAwMDtcblxuLyoqXG4gKiBJZiB0aGVyZSBpcyByZWRpcmVjdGlvbiBiYWNrIHRvIHRoZSBwYWdlLCBhbmQgb0F1dGhSZWRpcmVjdElEIGlzIHNldCxcbiAqIHRoZW4gcmVwb3J0IHRoZSBhdXRoIGFuZCBjbG9zZSB0aGUgd2luZG93LlxuICovXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93ICYmIHdpbmRvdy5sb2NhdGlvbiAmJlxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIGxvYWRlZE9uU3RhcnR1cCA9IHRydWU7XG4gIH0sIHRydWUpO1xuXG4gIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlICYmXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKG9BdXRoUmVkaXJlY3RJZCkgPiAwKSB7XG4gICAgLy8gVGhpcyB3aWxsIHRyaWdnZXIgYSAnc3RvcmFnZScgZXZlbnQgb24gdGhlIHdpbmRvdy4gU2VlIHN0b3JhZ2VMaXN0ZW5lclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShvQXV0aFJlZGlyZWN0SWQsIG5ldyBEYXRlKCkpO1xuICAgIHdpbmRvdy5jbG9zZSgpO1xuICB9XG59XG5cbnZhciBMb2NhbFBhZ2VBdXRoID0gZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICB0aGlzLmxpc3RlbmVycyA9IHt9O1xufTtcblxuLyoqXG4gKiBJbmRpY2F0ZSB0aGUgaW50ZW50aW9uIHRvIGluaXRpYXRlIGFuIG9BdXRoIGZsb3csIGFsbG93aW5nIGFuIGFwcHJvcHJpYXRlXG4gKiBvQXV0aCBwcm92aWRlciB0byBiZWdpbiBtb25pdG9yaW5nIGZvciByZWRpcmVjdGlvbi5cbiAqXG4gKiBAbWV0aG9kIGluaXRpYXRlT0F1dGhcbiAqIEBwYXJhbSB7c3RyaW5nW119IHJlZGlyZWN0VVJJcyAtIG9BdXRoIHJlZGlyZWN0aW9uIFVSSXMgcmVnaXN0ZXJlZCB3aXRoIHRoZVxuICogICAgIHByb3ZpZGVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29udGludWF0aW9uIC0gRnVuY3Rpb24gdG8gY2FsbCB3aGVuIGNvbXBsZXRlXG4gKiAgICBFeHBlY3RlZCB0byBzZWUgYSB2YWx1ZSBvZiBzY2hlbWE6IHt7cmVkaXJlY3Q6U3RyaW5nLCBzdGF0ZTpTdHJpbmd9fVxuICogICAgd2hlcmUgJ3JlZGlyZWN0JyBpcyB0aGUgY2hvc2VuIHJlZGlyZWN0IFVSSVxuICogICAgYW5kICdzdGF0ZScgaXMgdGhlIHN0YXRlIHRvIHBhc3MgdG8gdGhlIFVSSSBvbiBjb21wbGV0aW9uIG9mIG9BdXRoXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGNhbiBoYW5kbGUsIGZhbHNlIG90aGVyd2lzZVxuICovXG5Mb2NhbFBhZ2VBdXRoLnByb3RvdHlwZS5pbml0aWF0ZU9BdXRoID0gZnVuY3Rpb24ocmVkaXJlY3RVUklzLCBjb250aW51YXRpb24pIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cgJiYgbG9hZGVkT25TdGFydHVwKSB7XG4gICAgdmFyIGhlcmUgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdCArXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICBpZiAocmVkaXJlY3RVUklzLmluZGV4T2YoaGVyZSkgPiAtMSkge1xuICAgICAgY29udGludWF0aW9uKHtcbiAgICAgICAgcmVkaXJlY3Q6IGhlcmUsXG4gICAgICAgIHN0YXRlOiBvQXV0aFJlZGlyZWN0SWQgKyBNYXRoLnJhbmRvbSgpXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogb0F1dGggY2xpZW50LXNpZGUgZmxvdyAtIGxhdW5jaCB0aGUgcHJvdmlkZWQgVVJMXG4gKiBUaGlzIG11c3QgYmUgY2FsbGVkIGFmdGVyIGluaXRpYXRlT0F1dGggd2l0aCB0aGUgcmV0dXJuZWQgc3RhdGUgb2JqZWN0XG4gKlxuICogQG1ldGhvZCBsYXVuY2hBdXRoRmxvd1xuICogQHBhcmFtIHtTdHJpbmd9IGF1dGhVcmwgLSBUaGUgVVJMIHRoYXQgaW5pdGlhdGVzIHRoZSBhdXRoIGZsb3cuXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBzdHJpbmc+fSBzdGF0ZU9iaiAtIFRoZSByZXR1cm4gdmFsdWUgZnJvbSBpbml0aWF0ZU9BdXRoXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGludGVyYWN0aXZlIC0gV2hldGhlciB0byBsYXVuY2ggYW4gaW50ZXJhY3RpdmUgZmxvd1xuICogQHBhcmFtIHtGdW5jdGlvbn0gY29udGludWF0aW9uIC0gRnVuY3Rpb24gdG8gY2FsbCB3aGVuIGNvbXBsZXRlXG4gKiAgICBFeHBlY3RlZCB0byBzZWUgYSBTdHJpbmcgdmFsdWUgdGhhdCBpcyB0aGUgcmVzcG9uc2UgVXJsIGNvbnRhaW5pbmcgdGhlIGFjY2VzcyB0b2tlblxuICovXG5Mb2NhbFBhZ2VBdXRoLnByb3RvdHlwZS5sYXVuY2hBdXRoRmxvdyA9IGZ1bmN0aW9uKGF1dGhVcmwsIHN0YXRlT2JqLCBpbnRlcmFjdGl2ZSwgY29udGludWF0aW9uKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICB2YXIgbGlzdGVuZXIgPSB0aGlzLnN0b3JhZ2VMaXN0ZW5lci5iaW5kKHRoaXMsIGNvbnRpbnVhdGlvbiwgc3RhdGVPYmopO1xuICB0aGlzLmxpc3RlbmVyc1tzdGF0ZU9iai5zdGF0ZV0gPSBsaXN0ZW5lcjtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzdG9yYWdlXCIsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIFN0YXJ0ICdlciB1cFxuICB3aW5kb3cub3BlbihhdXRoVXJsKTtcblxuICBpZiAoaW50ZXJhY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLmxpc3RlbmVyc1tzdGF0ZU9iai5zdGF0ZV0pIHtcbiAgICAgICAgLy8gTGlzdGVuZXIgaGFzIG5vdCBiZWVuIGRlbGV0ZWQsIGluZGljYXRpbmcgb2F1dGggaGFzIGNvbXBsZXRlZC5cbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBcInN0b3JhZ2VcIiwgdGhpcy5saXN0ZW5lcnNbc3RhdGVPYmouc3RhdGVdLCBmYWxzZSk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmxpc3RlbmVyc1tzdGF0ZU9iai5zdGF0ZV07XG4gICAgICAgIGNvbnRpbnVhdGlvbih1bmRlZmluZWQsICdFcnJvciBsYXVuY2hpbmcgYXV0aCBmbG93Jyk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpLCBUSU1FT1VUKTtcbiAgfVxufTtcblxuLyoqXG4gKiBIYW5kbGVyIGZvciBzdG9yYWdlIGV2ZW50cywgd2hpY2ggcmVsYXlzIHRoZW0gdG8gd2FpdGluZyBjbGllbnRzLlxuICogRm9yIHRoZSBzY2hlbWEgb2YgdGhlIHN0b3JhZ2UgbXNnLCBzZWU6XG4gKiBodHRwOi8vdHV0b3JpYWxzLmplbmtvdi5jb20vaHRtbDUvbG9jYWwtc3RvcmFnZS5odG1sI3N0b3JhZ2UtZXZlbnRzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb250aW51YXRpb24gZnVuY3Rpb24gdG8gY2FsbCB3aXRoIHJlc3VsdFxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgc3RyaW5nPn0gc3RhdGVPYmogdGhlIHJldHVybiB2YWx1ZSBmcm9tIGluaXRpYXRlT0F1dGhcblxuICogQHBhcmFtIHtPYmplY3R9IG1zZyBzdG9yYWdlIGV2ZW50XG4gKi9cbkxvY2FsUGFnZUF1dGgucHJvdG90eXBlLnN0b3JhZ2VMaXN0ZW5lciA9IGZ1bmN0aW9uKGNvbnRpbnVhdGlvbiwgc3RhdGVPYmosIG1zZykge1xuICAndXNlIHN0cmljdCc7XG4gIGlmIChtc2cudXJsLmluZGV4T2Yoc3RhdGVPYmouc3RhdGUpID4gLTEpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN0b3JhZ2VcIiwgdGhpcy5saXN0ZW5lcnNbc3RhdGVPYmouc3RhdGVdLCBmYWxzZSk7XG4gICAgZGVsZXRlIHRoaXMubGlzdGVuZXJzW3N0YXRlT2JqLnN0YXRlXTtcbiAgICBjb250aW51YXRpb24obXNnLnVybCk7XG4gIH1cbn07XG5cbi8qKlxuICogSWYgd2UgaGF2ZSBhIGxvY2FsIGRvbWFpbiwgYW5kIGZyZWVkb20uanMgaXMgbG9hZGVkIGF0IHN0YXJ0dXAsIHdlIGNhbiB1c2VcbiAqIHRoZSBsb2NhbCBwYWdlIGFzIGEgcmVkaXJlY3QgVVJJLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IExvY2FsUGFnZUF1dGg7XG4iLCIvKmpzbGludCBpbmRlbnQ6Mixicm93c2VyOnRydWUsIG5vZGU6dHJ1ZSAqL1xudmFyIFByb21pc2VDb21wYXQgPSByZXF1aXJlKCdlczYtcHJvbWlzZScpLlByb21pc2U7XG5cbnZhciBvQXV0aFJlZGlyZWN0SWQgPSAnZnJlZWRvbS5vYXV0aC5yZWRpcmVjdC5oYW5kbGVyJztcblxudmFyIFRJTUVPVVQgPSA1MDAwO1xuXG5mdW5jdGlvbiBSZW1vdGVQYWdlQXV0aCgpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHRoaXMubGlzdGVuZXJzID0ge307XG59XG5cbi8qKlxuICogSW5kaWNhdGUgdGhlIGludGVudGlvbiB0byBpbml0aWF0ZSBhbiBvQXV0aCBmbG93LCBhbGxvd2luZyBhbiBhcHByb3ByaWF0ZVxuICogb0F1dGggcHJvdmlkZXIgdG8gYmVnaW4gbW9uaXRvcmluZyBmb3IgcmVkaXJlY3Rpb24uXG4gKlxuICogQG1ldGhvZCBpbml0aWF0ZU9BdXRoXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSByZWRpcmVjdFVSSXMgLSBvQXV0aCByZWRpcmVjdGlvbiBVUklzIHJlZ2lzdGVyZWQgd2l0aCB0aGVcbiAqICAgICBwcm92aWRlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbnRpbnVhdGlvbiAtIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBjb21wbGV0ZVxuICogICAgRXhwZWN0ZWQgdG8gc2VlIGEgdmFsdWUgb2Ygc2NoZW1hOiB7e3JlZGlyZWN0OlN0cmluZywgc3RhdGU6U3RyaW5nfX1cbiAqICAgIHdoZXJlICdyZWRpcmVjdCcgaXMgdGhlIGNob3NlbiByZWRpcmVjdCBVUklcbiAqICAgIGFuZCAnc3RhdGUnIGlzIHRoZSBzdGF0ZSB0byBwYXNzIHRvIHRoZSBVUkkgb24gY29tcGxldGlvbiBvZiBvQXV0aFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBjYW4gaGFuZGxlLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuUmVtb3RlUGFnZUF1dGgucHJvdG90eXBlLmluaXRpYXRlT0F1dGggPSBmdW5jdGlvbihyZWRpcmVjdFVSSXMsIGNvbnRpbnVhdGlvbikge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnICYmIGdsb2JhbCAmJiBnbG9iYWwuZG9jdW1lbnQpIHtcbiAgICBmb3IgKHZhciBpPTA7IGk8cmVkaXJlY3RVUklzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBUT0RPOiByZW1vdmUgcmVzdHJpY3Rpb24gb24gVVJMIHBhdHRlcm4gbWF0Y2guXG4gICAgICBpZiAoKHJlZGlyZWN0VVJJc1tpXS5pbmRleE9mKCdodHRwOi8vJykgPT09IDAgfHxcbiAgICAgICAgICByZWRpcmVjdFVSSXNbaV0uaW5kZXhPZignaHR0cHM6Ly8nKSA9PT0gMCkgJiZcbiAgICAgICAgICByZWRpcmVjdFVSSXNbaV0uaW5kZXhPZignb2F1dGgtcmVsYXkuaHRtbCcpID4gMCkge1xuICAgICAgICBjb250aW51YXRpb24oe1xuICAgICAgICAgIHJlZGlyZWN0OiByZWRpcmVjdFVSSXNbaV0sXG4gICAgICAgICAgc3RhdGU6IG9BdXRoUmVkaXJlY3RJZCArIE1hdGgucmFuZG9tKClcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIG9BdXRoIGNsaWVudC1zaWRlIGZsb3cgLSBsYXVuY2ggdGhlIHByb3ZpZGVkIFVSTFxuICogVGhpcyBtdXN0IGJlIGNhbGxlZCBhZnRlciBpbml0aWF0ZU9BdXRoIHdpdGggdGhlIHJldHVybmVkIHN0YXRlIG9iamVjdFxuICpcbiAqIEBtZXRob2QgbGF1bmNoQXV0aEZsb3dcbiAqIEBwYXJhbSB7U3RyaW5nfSBhdXRoVXJsIC0gVGhlIFVSTCB0aGF0IGluaXRpYXRlcyB0aGUgYXV0aCBmbG93LlxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgc3RyaW5nPn0gc3RhdGVPYmogLSBUaGUgcmV0dXJuIHZhbHVlIGZyb20gaW5pdGlhdGVPQXV0aFxuICogQHBhcmFtIHtCb29sZWFufSBpbnRlcmFjdGl2ZSAtIFdoZXRoZXIgdG8gbGF1bmNoIGFuIGludGVyYWN0aXZlIGZsb3dcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbnRpbnVhdGlvbiAtIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBjb21wbGV0ZVxuICogICAgRXhwZWN0ZWQgdG8gc2VlIGEgU3RyaW5nIHZhbHVlIHRoYXQgaXMgdGhlIHJlc3BvbnNlIFVybCBjb250YWluaW5nIHRoZSBhY2Nlc3MgdG9rZW5cbiAqL1xuUmVtb3RlUGFnZUF1dGgucHJvdG90eXBlLmxhdW5jaEF1dGhGbG93ID0gZnVuY3Rpb24oYXV0aFVybCwgc3RhdGVPYmosIGludGVyYWN0aXZlLCBjb250aW51YXRpb24pIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHZhciBmcmFtZSA9IGdsb2JhbC5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgZnJhbWUuc3JjID0gc3RhdGVPYmoucmVkaXJlY3Q7XG4gIGZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgZ2xvYmFsLmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZnJhbWUpO1xuICBmcmFtZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgIHRoaXMubGlzdGVuZXJzW3N0YXRlT2JqLnN0YXRlXSA9IGNvbnRpbnVhdGlvbjtcbiAgICB3aW5kb3cub3BlbihhdXRoVXJsKTtcblxuICAgIGZyYW1lLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2Uoc3RhdGVPYmouc3RhdGUsICcqJyk7XG4gIH0uYmluZCh0aGlzKSk7XG5cbiAgdmFyIGhhc0NyZWRlbnRpYWxzID0gZmFsc2U7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGZyYW1lLCBtc2cpIHtcbiAgICBpZiAobXNnLmRhdGEgJiYgbXNnLmRhdGEua2V5ICYmIG1zZy5kYXRhLnVybCAmJiB0aGlzLmxpc3RlbmVyc1ttc2cuZGF0YS5rZXldKSB7XG4gICAgICBoYXNDcmVkZW50aWFscyA9IHRydWU7XG4gICAgICB0aGlzLmxpc3RlbmVyc1ttc2cuZGF0YS5rZXldKG1zZy5kYXRhLnVybCk7XG4gICAgICBkZWxldGUgdGhpcy5saXN0ZW5lcnNbbXNnLmRhdGEua2V5XTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZnJhbWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oZSk7XG4gICAgICB9XG4gICAgfVxuICB9LmJpbmQodGhpcywgZnJhbWUpLCBmYWxzZSk7XG5cbiAgaWYgKGludGVyYWN0aXZlID09PSBmYWxzZSkge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoaGFzQ3JlZGVudGlhbHMgPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnRpbnVhdGlvbih1bmRlZmluZWQsICdFcnJvciBsYXVuY2hpbmcgYXV0aCBmbG93Jyk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmxpc3RlbmVyc1tzdGF0ZU9iai5zdGF0ZV07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChmcmFtZSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcyksIFRJTUVPVVQpO1xuICB9XG59O1xuXG4vKipcbiAqIElmIHdlIGhhdmUgYSBsb2NhbCBkb21haW4sIGFuZCBmcmVlZG9tLmpzIGlzIGxvYWRlZCBhdCBzdGFydHVwLCB3ZSBjYW4gdXNlXG4gKiB0aGUgbG9jYWwgcGFnZSBhcyBhIHJlZGlyZWN0IFVSSS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBSZW1vdGVQYWdlQXV0aDtcbiIsIi8qanNsaW50IGluZGVudDoyLHdoaXRlOnRydWUsbm9kZTp0cnVlLHNsb3BweTp0cnVlICovXG52YXIgUHJvbWlzZUNvbXBhdCA9IHJlcXVpcmUoJ2VzNi1wcm9taXNlJykuUHJvbWlzZTtcblxuLyoqXG4gKiBUaGUgQVBJIHJlZ2lzdHJ5IGZvciBmcmVlZG9tLmpzLiAgVXNlZCB0byBsb29rIHVwIHJlcXVlc3RlZCBBUElzLFxuICogYW5kIHByb3ZpZGVzIGEgYnJpZGdlIGZvciBjb3JlIEFQSXMgdG8gYWN0IGxpa2Ugbm9ybWFsIEFQSXMuXG4gKiBAQ2xhc3MgQVBJXG4gKiBAcGFyYW0ge0RlYnVnfSBkZWJ1ZyBUaGUgZGVidWdnZXIgdG8gdXNlIGZvciBsb2dnaW5nLlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnZhciBBcGkgPSBmdW5jdGlvbihkZWJ1Zykge1xuICB0aGlzLmRlYnVnID0gZGVidWc7XG4gIHRoaXMuYXBpcyA9IHt9O1xuICB0aGlzLnByb3ZpZGVycyA9IHt9O1xuICB0aGlzLndhaXRlcnMgPSB7fTtcbn07XG5cbi8qKlxuICogR2V0IGFuIEFQSS5cbiAqIEBtZXRob2QgZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gYXBpIFRoZSBBUEkgbmFtZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7e25hbWU6U3RyaW5nLCBkZWZpbml0aW9uOkFQSX19IFRoZSBBUEkgaWYgcmVnaXN0ZXJlZC5cbiAqL1xuQXBpLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihhcGkpIHtcbiAgaWYgKCF0aGlzLmFwaXNbYXBpXSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6IGFwaSxcbiAgICBkZWZpbml0aW9uOiB0aGlzLmFwaXNbYXBpXVxuICB9O1xufTtcblxuLyoqXG4gKiBTZXQgYW4gQVBJIHRvIGEgZGVmaW5pdGlvbi5cbiAqIEBtZXRob2Qgc2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgQVBJIG5hbWUuXG4gKiBAcGFyYW0ge0FQSX0gZGVmaW5pdGlvbiBUaGUgSlNPTiBvYmplY3QgZGVmaW5pbmcgdGhlIEFQSS5cbiAqL1xuQXBpLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihuYW1lLCBkZWZpbml0aW9uKSB7XG4gIHRoaXMuYXBpc1tuYW1lXSA9IGRlZmluaXRpb247XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIGEgY29yZSBBUEkgcHJvdmlkZXIuXG4gKiBAbWV0aG9kIHJlZ2lzdGVyXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSB0aGUgQVBJIG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb25zdHJ1Y3RvciB0aGUgZnVuY3Rpb24gdG8gY3JlYXRlIGEgcHJvdmlkZXIgZm9yIHRoZSBBUEkuXG4gKiBAcGFyYW0ge1N0cmluZz99IHN0eWxlIFRoZSBzdHlsZSB0aGUgcHJvdmlkZXIgaXMgd3JpdHRlbiBpbi4gVmFsaWQgc3R5bGVzXG4gKiAgIGFyZSBkb2N1bWVudGVkIGluIGZkb20ucG9ydC5Qcm92aWRlci5wcm90b3R5cGUuZ2V0SW50ZXJmYWNlLiBEZWZhdWx0cyB0b1xuICogICBwcm92aWRlQXN5bmNocm9ub3VzXG4gKiBAcGFyYW0ge09iamVjdD99IGZsYWdzIFByZWZpeGVkIGFyZ3VtZW50cyBuZWVkZWQgYnkgdGhlIGNvcmUgcHJvdmlkZXIuXG4gKiAgIHZhbGlkIGtleXMgYXJlICdtb2R1bGUnLCAncHJvdmlkZXInLCBhbmQgJ2NvbmZpZycuXG4gKi9cbkFwaS5wcm90b3R5cGUucmVnaXN0ZXIgPSBmdW5jdGlvbihuYW1lLCBjb25zdHJ1Y3Rvciwgc3R5bGUsIGZsYWdzKSB7XG4gIHZhciBpLFxuICAgIGFyZ3M7XG5cbiAgdGhpcy5wcm92aWRlcnNbbmFtZV0gPSB7XG4gICAgY29uc3RydWN0b3I6IGNvbnN0cnVjdG9yLFxuICAgIHN0eWxlOiBzdHlsZSB8fCAncHJvdmlkZUFzeW5jaHJvbm91cycsXG4gICAgZmxhZ3M6IGZsYWdzIHx8IHt9XG4gIH07XG5cbiAgaWYgKHRoaXMud2FpdGVyc1tuYW1lXSkge1xuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLndhaXRlcnNbbmFtZV0ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGFyZ3MgPSB7fTtcbiAgICAgIGlmIChmbGFncy5tb2R1bGUpIHtcbiAgICAgICAgYXJncy5tb2R1bGUgPSB0aGlzLndhaXRlcnNbbmFtZV1baV0uZnJvbTtcbiAgICAgIH1cbiAgICAgIGlmIChmbGFncy5jb25maWcpIHtcbiAgICAgICAgYXJncy5jb25maWcgPSB0aGlzLndhaXRlcnNbbmFtZV1baV0uZnJvbS5jb25maWc7XG4gICAgICB9XG4gICAgICB0aGlzLndhaXRlcnNbbmFtZV1baV0ucmVzb2x2ZSh7XG4gICAgICAgIGFyZ3M6IGFyZ3MsXG4gICAgICAgIGluc3Q6IGNvbnN0cnVjdG9yLmJpbmQoe30sIGFyZ3MpXG4gICAgICB9KTtcbiAgICB9XG4gICAgZGVsZXRlIHRoaXMud2FpdGVyc1tuYW1lXTtcbiAgfVxufTtcblxuLyoqXG4gKiBHZXQgYSBjb3JlIEFQSSBjb25uZWN0ZWQgdG8gYSBnaXZlbiBGcmVlRE9NIG1vZHVsZS5cbiAqIEBtZXRob2QgZ2V0Q29yZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgdGhlIEFQSSB0byByZXRyaWV2ZS5cbiAqIEBwYXJhbSB7TW9kdWxlfSBmcm9tIFRoZSBpbnN0YW50aWF0aW5nIEFwcC5cbiAqIEByZXR1cm5zIHtQcm9taXNlfSBBIHByb21pc2Ugb2YgYSBmZG9tLkFwcCBsb29rLWFsaWtlIChhbmQgYXJndW1lbnQgb2JqZWN0KSxcbiAqIG1hdGNoaW5nIGEgbG9jYWwgQVBJIGRlZmluaXRpb24uXG4gKi9cbkFwaS5wcm90b3R5cGUuZ2V0Q29yZSA9IGZ1bmN0aW9uKG5hbWUsIGZyb20pIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ29tcGF0KGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGlmICh0aGlzLmFwaXNbbmFtZV0pIHtcbiAgICAgIGlmICh0aGlzLnByb3ZpZGVyc1tuYW1lXSkge1xuICAgICAgICB2YXIgYXJncyA9IHt9O1xuICAgICAgICBpZiAodGhpcy5wcm92aWRlcnNbbmFtZV0uZmxhZ3MubW9kdWxlKSB7XG4gICAgICAgICAgYXJncy5tb2R1bGUgPSBmcm9tO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3ZpZGVyc1tuYW1lXS5mbGFncy5jb25maWcpIHtcbiAgICAgICAgICBhcmdzLmNvbmZpZyA9IGZyb20uY29uZmlnO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgIGFyZ3M6IGFyZ3MsXG4gICAgICAgICAgaW5zdDogdGhpcy5wcm92aWRlcnNbbmFtZV0uY29uc3RydWN0b3IuYmluZCh7fSwgYXJncylcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIXRoaXMud2FpdGVyc1tuYW1lXSkge1xuICAgICAgICAgIHRoaXMud2FpdGVyc1tuYW1lXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMud2FpdGVyc1tuYW1lXS5wdXNoKHtcbiAgICAgICAgICByZXNvbHZlOiByZXNvbHZlLFxuICAgICAgICAgIHJlamVjdDogcmVqZWN0LFxuICAgICAgICAgIGZyb206IGZyb21cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVidWcud2FybignQXBpLmdldENvcmUgYXNrZWQgZm9yIHVua25vd24gY29yZTogJyArIG5hbWUpO1xuICAgICAgcmVqZWN0KG51bGwpO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cbi8qKlxuICogQ29uZmlndXJlIGEge1Byb3ZpZGVyfSB0byBwcm92aWRlIGEgbmFtZWQgY29yZSBhcGkgb24gYmVoYWxmIG9mIGFcbiAqIGdpdmVuIHBvcnQuXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgcHJvdmlkZXJcbiAqIEBwYXJhbSB7UHJvdmlkZXJ9IHByb3ZpZGVyIFRoZSBwcm92aWRlciB0aGF0IHdpbGwgcHJvdmlkZSB0aGUgbmFtZWQgYXBpXG4gKiBAcGFyYW0ge01vZHVsZX0gZnJvbSBUaGUgbW9kdWxlIHJlcXVlc3RpbmcgdGhlIGNvcmUgcHJvdmlkZXIuXG4gKi9cbkFwaS5wcm90b3R5cGUucHJvdmlkZUNvcmUgPSBmdW5jdGlvbiAobmFtZSwgcHJvdmlkZXIsIGZyb20pIHtcbiAgcmV0dXJuIHRoaXMuZ2V0Q29yZShuYW1lLCBmcm9tKS50aGVuKGZ1bmN0aW9uIChjb3JlKSB7XG4gICAgdmFyIGZsYWdzID0gdGhpcy5wcm92aWRlcnNbbmFtZV0uZmxhZ3MsXG4gICAgICBpZmFjZSA9IHByb3ZpZGVyLmdldFByb3h5SW50ZXJmYWNlKCk7XG4gICAgaWYgKGZsYWdzLnByb3ZpZGVyKSB7XG4gICAgICBjb3JlLmFyZ3MucHJvdmlkZXIgPSBpZmFjZTtcbiAgICB9XG4gICAgaWZhY2UoKVt0aGlzLnByb3ZpZGVyc1tuYW1lXS5zdHlsZV0oY29yZS5pbnN0KTtcbiAgfS5iaW5kKHRoaXMpLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgdGhpcy5kZWJ1Zy5lcnJvcignQ291bGQgbm90IHByb3ZpZGUgY29yZTogJywgZXJyKTtcbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cbi8qKlxuICogU2h1dGRvd24gdGhlIEFQSSByZWdpc3RyeSwgYW5kIHJlamVjdCBhbnkgcGVuZGluZyB3YWl0ZXJzLlxuICovXG5BcGkucHJvdG90eXBlLmNsZWFudXAgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBwcm9wLFxuICAgIGRvUmVqZWN0ID0gZnVuY3Rpb24gKHdhaXRlcikge1xuICAgICAgd2FpdGVyLnJlamVjdCgpO1xuICAgIH07XG4gIGZvciAocHJvcCBpbiB0aGlzLndhaXRlcnMpIHtcbiAgICBpZiAodGhpcy53YWl0ZXJzLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICB0aGlzLndhaXRlcnNbcHJvcF0uZm9yRWFjaChkb1JlamVjdCk7XG4gICAgfVxuICB9XG4gIGRlbGV0ZSB0aGlzLndhaXRlcnM7XG59O1xuXG4vKipcbiAqIERlZmluZXMgdGhlIGFwaXMgbW9kdWxlIGFuZCBwcm92aWRlciByZWdpc3RyeS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBBcGk7XG4iLCIvKmpzbGludCBpbmRlbnQ6Mixub2RlOnRydWUgKi9cblxudmFyIEJ1bmRsZSA9IGZ1bmN0aW9uICgpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB0aGlzLmludGVyZmFjZXMgPSByZXF1aXJlKCcuLi9kaXN0L2J1bmRsZS5jb21waWxlZCcpO1xufTtcblxuLyoqXG4gKiBQb3B1bGF0ZSBhbiBBUEkgcmVnaXN0cnkgd2l0aCBwcm92aWRlZCBwcm92aWRlcnMsIGFuZCB3aXRoIGtub3duIEFQSVxuICogZGVmaW5pdGlvbnMuXG4gKiBAc3RhdGljXG4gKiBAbWV0aG9kIHJlZ2lzdGVyXG4gKiBAcGFyYW0ge3tuYW1lOiBzdHJpbmcsIHByb3ZpZGVyOiBGdW5jdGlvbiwgc3R5bGU/OiBzdHJpbmd9W119IHByb3ZpZGVyc1xuICogICBUaGUgY29yZSBwcm92aWRlcnMgbWFkZSBhdmFpbGFibGUgdG8gdGhpcyBmcmVlZG9tLmpzIGluc3RhbmNlLlxuICogQHBhcmFtIHtBcGl9IHJlZ2lzdHJ5IFRoZSBBUEkgcmVnaXN0cnkgdG8gcG9wdWxhdGUuXG4gKi9cbmV4cG9ydHMucmVnaXN0ZXIgPSBmdW5jdGlvbiAocHJvdmlkZXJzLCByZWdpc3RyeSkge1xuICAndXNlIHN0cmljdCc7XG4gIHZhciBidW5kbGUgPSBuZXcgQnVuZGxlKCk7XG4gIGJ1bmRsZS5pbnRlcmZhY2VzLmZvckVhY2goZnVuY3Rpb24gKGFwaSkge1xuICAgIGlmIChhcGkgJiYgYXBpLm5hbWUgJiYgYXBpLmFwaSkge1xuICAgICAgcmVnaXN0cnkuc2V0KGFwaS5uYW1lLCBhcGkuYXBpKTtcbiAgICB9XG4gIH0pO1xuXG4gIHByb3ZpZGVycy5mb3JFYWNoKGZ1bmN0aW9uIChwcm92aWRlcikge1xuICAgIGlmIChwcm92aWRlci5uYW1lKSB7XG4gICAgICByZWdpc3RyeS5yZWdpc3Rlcihwcm92aWRlci5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIucHJvdmlkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlci5zdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyLmZsYWdzKTtcbiAgICB9XG4gIH0pO1xufTtcbiIsIi8qZ2xvYmFscyBCbG9iLCBBcnJheUJ1ZmZlciwgRGF0YVZpZXcgKi9cbi8qanNsaW50IGluZGVudDoyLCBub2RlOnRydWUsIHNsb3BweTp0cnVlICovXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG4vKipcbiAqIEEgZnJlZWRvbSBwb3J0IGZvciBhIHVzZXItYWNjZXNzYWJsZSBhcGkuXG4gKiBAY2xhc3MgQ29uc3VtZXJcbiAqIEBpbXBsZW1lbnRzIFBvcnRcbiAqIEB1c2VzIGhhbmRsZUV2ZW50c1xuICogQHBhcmFtIHtPYmplY3R9IGludGVyZmFjZUNscyBUaGUgYXBpIGludGVyZmFjZSBleHBvc2VkIGJ5IHRoaXMgY29uc3VtZXIuXG4gKiBAcGFyYW0ge0RlYnVnfSBkZWJ1ZyBUaGUgZGVidWdnZXIgdG8gdXNlIGZvciBsb2dnaW5nLlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnZhciBDb25zdW1lciA9IGZ1bmN0aW9uIChpbnRlcmZhY2VDbHMsIGRlYnVnKSB7XG4gIHRoaXMuaWQgPSBDb25zdW1lci5uZXh0SWQoKTtcbiAgdGhpcy5pbnRlcmZhY2VDbHMgPSBpbnRlcmZhY2VDbHM7XG4gIHRoaXMuZGVidWcgPSBkZWJ1ZztcbiAgdXRpbC5oYW5kbGVFdmVudHModGhpcyk7XG5cbiAgdGhpcy5pZmFjZXMgPSB7fTtcbiAgdGhpcy5jbG9zZUhhbmRsZXJzID0ge307XG4gIHRoaXMuZXJyb3JIYW5kbGVycyA9IHt9O1xuICB0aGlzLmVtaXRzID0ge307XG59O1xuXG4vKipcbiAqIFJlY2VpdmUgaW5jb21pbmcgbWVzc2FnZXMgZm9yIHRoaXMgY29uc3VtZXIuXG4gKiBAbWV0aG9kIG9uTWVzc2FnZVxuICogQHBhcmFtIHtTdHJpbmd9IHNvdXJjZSBUaGUgc291cmNlIG9mIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2UgVGhlIHJlY2VpdmVkIG1lc3NhZ2UuXG4gKi9cbkNvbnN1bWVyLnByb3RvdHlwZS5vbk1lc3NhZ2UgPSBmdW5jdGlvbiAoc291cmNlLCBtZXNzYWdlKSB7XG4gIGlmIChzb3VyY2UgPT09ICdjb250cm9sJyAmJiBtZXNzYWdlLnJldmVyc2UpIHtcbiAgICB0aGlzLmVtaXRDaGFubmVsID0gbWVzc2FnZS5jaGFubmVsO1xuICAgIHRoaXMuZW1pdCh0aGlzLmVtaXRDaGFubmVsLCB7XG4gICAgICB0eXBlOiAnY2hhbm5lbCBhbm5vdW5jZW1lbnQnLFxuICAgICAgY2hhbm5lbDogbWVzc2FnZS5yZXZlcnNlXG4gICAgfSk7XG4gICAgdGhpcy5lbWl0KCdzdGFydCcpO1xuICB9IGVsc2UgaWYgKHNvdXJjZSA9PT0gJ2NvbnRyb2wnICYmIG1lc3NhZ2UudHlwZSA9PT0gJ3NldHVwJykge1xuICAgIHRoaXMuY29udHJvbENoYW5uZWwgPSBtZXNzYWdlLmNoYW5uZWw7XG4gIH0gZWxzZSBpZiAoc291cmNlID09PSAnY29udHJvbCcgJiYgbWVzc2FnZS50eXBlID09PSAnY2xvc2UnKSB7XG4gICAgZGVsZXRlIHRoaXMuY29udHJvbENoYW5uZWw7XG4gICAgdGhpcy5kb0Nsb3NlKCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCF0aGlzLmVtaXRDaGFubmVsICYmIG1lc3NhZ2UuY2hhbm5lbCkge1xuICAgICAgdGhpcy5lbWl0Q2hhbm5lbCA9IG1lc3NhZ2UuY2hhbm5lbDtcbiAgICAgIHRoaXMuZW1pdCgnc3RhcnQnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ2Nsb3NlJyAmJiBtZXNzYWdlLnRvKSB7XG4gICAgICB0aGlzLnRlYXJkb3duKG1lc3NhZ2UudG8pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS50eXBlID09PSAnZXJyb3InKSB7XG4gICAgICB0aGlzLmVycm9yKG1lc3NhZ2UudG8sIG1lc3NhZ2UubWVzc2FnZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLnRvKSB7XG4gICAgICBpZiAodGhpcy5lbWl0c1ttZXNzYWdlLnRvXSkge1xuICAgICAgICB0aGlzLmVtaXRzW21lc3NhZ2UudG9dKCdtZXNzYWdlJywgbWVzc2FnZS5tZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGVidWcud2FybignQ291bGQgbm90IGRlbGl2ZXIgbWVzc2FnZSwgbm8gc3VjaCBpbnRlcmZhY2U6ICcgKyBtZXNzYWdlLnRvKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG1zZyA9IG1lc3NhZ2UubWVzc2FnZTtcbiAgICAgIHV0aWwuZWFjaFByb3AodGhpcy5lbWl0cywgZnVuY3Rpb24gKGlmYWNlKSB7XG4gICAgICAgIGlmYWNlKCdtZXNzYWdlJywgbWVzc2FnZS5tZXNzYWdlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBDcmVhdGUgYSBjb25zdW1lci5JbnRlcmZhY2UgYXNzb2NpYXRlZCB3aXRoIHRoaXMgY29uc3VtZXIuXG4gKiBBbiBpbnRlcmZhY2UgaXMgcmV0dXJuZWQsIHdoaWNoIGlzIHN1cHBsaWVkIHdpdGggaW1wb3J0YW50IGNvbnRyb2wgb2YgdGhlXG4gKiBhcGkgdmlhIGNvbnN0cnVjdG9yIGFyZ3VtZW50czogKGJvdW5kIGJlbG93IGluIGdldEludGVyZmFjZUNvbnN0cnVjdG9yKVxuICpcbiAqIG9uTXNnOiBmdW5jdGlvbihiaW5kZXIpIHNldHMgdGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBtZXNzYWdlcyBmb3IgdGhpc1xuICogICAgaW50ZXJmYWNlIGFycml2ZSBvbiB0aGUgY2hhbm5lbCxcbiAqIGVtaXQ6IGZ1bmN0aW9uKG1zZykgYWxsb3dzIHRoaXMgaW50ZXJmYWNlIHRvIGVtaXQgbWVzc2FnZXMsXG4gKiBpZDogc3RyaW5nIGlzIHRoZSBJZGVudGlmaWVyIGZvciB0aGlzIGludGVyZmFjZS5cbiAqIEBtZXRob2QgZ2V0SW50ZXJmYWNlXG4gKi9cbkNvbnN1bWVyLnByb3RvdHlwZS5nZXRJbnRlcmZhY2UgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBJZmFjZSA9IHRoaXMuZ2V0SW50ZXJmYWNlQ29uc3RydWN0b3IoKSxcbiAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgaWYgKGFyZ3MubGVuZ3RoKSB7XG4gICAgSWZhY2UgPSBJZmFjZS5iaW5kLmFwcGx5KElmYWNlLCBbSWZhY2VdLmNvbmNhdChhcmdzKSk7XG4gIH1cbiAgcmV0dXJuIG5ldyBJZmFjZSgpO1xufTtcblxuLyoqXG4gKiBBdHRhY2ggYW4gJ29uRXZlbnQnIGxpc3RlbmVyIHRvIGFuIGludGVyZmFjZSwgYWxsb3dpbmcgZXh0ZXJuYWwgY29uc3VtZXJzXG4gKiB0byBlaXRoZXIgbGlzdGVuIHRvIGNoYW5uZWwgc3RhdGUsIG9yIHJlZ2lzdGVyIGNhbGxiYWNrcyBvbiBsaWZldGltZSBldmVudHNcbiAqIG9mIGluZGl2aWR1YWwgaW5zdGFuY2VzIG9mIHRoZSBpbnRlcmZhY2UuXG4gKiBAbWV0aG9kIGdldExpc3RlbmVyXG4gKiBAcGFybWEge1N0cmluZ30gbmFtZSBUaGUgZXZlbnQgdG8gbGlzdGVuIHRvLlxuICogQHByaXZhdGVcbiAqL1xuQ29uc3VtZXIucHJvdG90eXBlLmdldExpc3RlbmVyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpbnN0YW5jZSwgaGFuZGxlcikge1xuICAgIC8vIExpc3RlbiB0byB0aGUgY2hhbm5lbCBkaXJlY3RseS5cbiAgICBpZiAodHlwZW9mIGluc3RhbmNlID09PSAnZnVuY3Rpb24nICYmIGhhbmRsZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vbmNlKG5hbWUsIGluc3RhbmNlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBMaXN0ZW4gdG8gYSBzcGVjaWZpYyBpbnN0YW5jZS5cbiAgICB2YXIgaGFuZGxlcnMgPSBuYW1lICsgJ0hhbmRsZXJzJztcbiAgICB1dGlsLmVhY2hQcm9wKHRoaXMuaWZhY2VzLCBmdW5jdGlvbiAoY2FuZGlkYXRlLCBpZCkge1xuICAgICAgaWYgKGNhbmRpZGF0ZSA9PT0gaW5zdGFuY2UpIHtcbiAgICAgICAgaWYgKHRoaXNbaGFuZGxlcnNdW2lkXSkge1xuICAgICAgICAgIHRoaXNbaGFuZGxlcnNdW2lkXS5wdXNoKGhhbmRsZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXNbaGFuZGxlcnNdW2lkXSA9IFtoYW5kbGVyXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuICB9LmJpbmQodGhpcyk7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgdG8gZ2V0IGludGVyZmFjZXMgZnJvbSB0aGlzIGFwaSBjb25zdW1lclxuICogZnJvbSBhIHVzZXItdmlzaWJsZSBwb2ludC5cbiAqIEBtZXRob2QgZ2V0UHJveHlJbnRlcmZhY2VcbiAqL1xuQ29uc3VtZXIucHJvdG90eXBlLmdldFByb3h5SW50ZXJmYWNlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZnVuYyA9IGZ1bmN0aW9uIChwKSB7XG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIGlmIChhcmdzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBwLmdldEludGVyZmFjZS5hcHBseShwLCBhcmdzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHAuZ2V0SW50ZXJmYWNlKCk7XG4gICAgfVxuICB9LmJpbmQoe30sIHRoaXMpO1xuXG4gIGZ1bmMuY2xvc2UgPSBmdW5jdGlvbiAoaWZhY2UpIHtcbiAgICBpZiAoaWZhY2UpIHtcbiAgICAgIHV0aWwuZWFjaFByb3AodGhpcy5pZmFjZXMsIGZ1bmN0aW9uIChjYW5kaWRhdGUsIGlkKSB7XG4gICAgICAgIGlmIChjYW5kaWRhdGUgPT09IGlmYWNlKSB7XG4gICAgICAgICAgdGhpcy50ZWFyZG93bihpZCk7XG4gICAgICAgICAgdGhpcy5lbWl0KHRoaXMuZW1pdENoYW5uZWwsIHtcbiAgICAgICAgICAgIHR5cGU6ICdjbG9zZScsXG4gICAgICAgICAgICB0bzogaWRcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ2xvc2UgdGhlIGNoYW5uZWwuXG4gICAgICB0aGlzLmRvQ2xvc2UoKTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKTtcblxuICBmdW5jLm9uQ2xvc2UgPSB0aGlzLmdldExpc3RlbmVyKCdjbG9zZScpO1xuICBmdW5jLm9uRXJyb3IgPSB0aGlzLmdldExpc3RlbmVyKCdlcnJvcicpO1xuXG4gIHJldHVybiBmdW5jO1xufTtcblxuLyoqXG4gKiBQcm92aWRlcyBhIGJvdW5kIGNsYXNzIGZvciBjcmVhdGluZyBhIGNvbnN1bWVyLkludGVyZmFjZSBhc3NvY2lhdGVkXG4gKiB3aXRoIHRoaXMgYXBpLiBUaGlzIHBhcnRpYWwgbGV2ZWwgb2YgY29uc3RydWN0aW9uIGNhbiBiZSB1c2VkXG4gKiB0byBhbGxvdyB0aGUgY29uc3VtZXIgdG8gYmUgdXNlZCBhcyBhIHByb3ZpZGVyIGZvciBhbm90aGVyIEFQSS5cbiAqIEBtZXRob2QgZ2V0SW50ZXJmYWNlQ29uc3RydWN0b3JcbiAqIEBwcml2YXRlXG4gKi9cbkNvbnN1bWVyLnByb3RvdHlwZS5nZXRJbnRlcmZhY2VDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGlkID0gQ29uc3VtZXIubmV4dElkKCk7XG4gIHJldHVybiB0aGlzLmludGVyZmFjZUNscy5iaW5kKFxuICAgIHt9LFxuICAgIGZ1bmN0aW9uIChpZCwgb2JqLCBiaW5kZXIpIHtcbiAgICAgIHRoaXMuaWZhY2VzW2lkXSA9IG9iajtcbiAgICAgIHRoaXMuZW1pdHNbaWRdID0gYmluZGVyO1xuICAgIH0uYmluZCh0aGlzLCBpZCksXG4gICAgdGhpcy5kb0VtaXQuYmluZCh0aGlzLCBpZCksXG4gICAgdGhpcy5kZWJ1Z1xuICApO1xufTtcblxuLyoqXG4gKiBFbWl0IGEgbWVzc2FnZSBvbiB0aGUgY2hhbm5lbCBvbmNlIHNldHVwIGlzIGNvbXBsZXRlLlxuICogQG1ldGhvZCBkb0VtaXRcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gdG8gVGhlIElEIG9mIHRoZSBmbG93IHNlbmRpbmcgdGhlIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gbXNnIFRoZSBtZXNzYWdlIHRvIGVtaXRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gYWxsIFNlbmQgbWVzc2FnZSB0byBhbGwgcmVjaXBpZW50cy5cbiAqL1xuQ29uc3VtZXIucHJvdG90eXBlLmRvRW1pdCA9IGZ1bmN0aW9uICh0bywgbXNnLCBhbGwpIHtcbiAgaWYgKGFsbCkge1xuICAgIHRvID0gZmFsc2U7XG4gIH1cbiAgaWYgKHRoaXMuZW1pdENoYW5uZWwpIHtcbiAgICB0aGlzLmVtaXQodGhpcy5lbWl0Q2hhbm5lbCwge3RvOiB0bywgdHlwZTogJ21lc3NhZ2UnLCBtZXNzYWdlOiBtc2d9KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLm9uY2UoJ3N0YXJ0JywgdGhpcy5kb0VtaXQuYmluZCh0aGlzLCB0bywgbXNnKSk7XG4gIH1cbn07XG5cbi8qKlxuICogVGVhcmRvd24gYSBzaW5nbGUgaW50ZXJmYWNlIG9mIHRoaXMgYXBpLlxuICogQG1ldGhvZCB0ZWFyZG93blxuICogQHBhcmFtIHtTdHJpbmd9IGlkIFRoZSBpZCBvZiB0aGUgaW50ZXJmYWNlIHRvIHRlYXIgZG93bi5cbiAqL1xuQ29uc3VtZXIucHJvdG90eXBlLnRlYXJkb3duID0gZnVuY3Rpb24gKGlkKSB7XG4gIGlmICh0aGlzLmVtaXRzW2lkXSkge1xuICAgIHRoaXMuZW1pdHNbaWRdKCdjbG9zZScpO1xuICB9XG4gIGRlbGV0ZSB0aGlzLmVtaXRzW2lkXTtcbiAgaWYgKHRoaXMuY2xvc2VIYW5kbGVyc1tpZF0pIHtcbiAgICB1dGlsLmVhY2hQcm9wKHRoaXMuY2xvc2VIYW5kbGVyc1tpZF0sIGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICBwcm9wKCk7XG4gICAgfSk7XG4gIH1cbiAgZGVsZXRlIHRoaXMuaWZhY2VzW2lkXTtcbiAgZGVsZXRlIHRoaXMuY2xvc2VIYW5kbGVyc1tpZF07XG4gIGRlbGV0ZSB0aGlzLmVycm9ySGFuZGxlcnNbaWRdO1xufTtcblxuLyoqXG4gKiBIYW5kbGUgYSBtZXNzYWdlIGVycm9yIHJlcG9ydGVkIHRvIHRoaXMgYXBpLlxuICogQG1ldGhvZCBlcnJvclxuICogQHBhcmFtIHtTdHJpbmc/fSBpZCBUaGUgaWQgb2YgdGhlIGludGVyZmFjZSB3aGVyZSB0aGUgZXJyb3Igb2NjdXJlZC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlIFRoZSBtZXNzYWdlIHdoaWNoIGZhaWxlZCwgaWYgcmVsZXZhbnQuXG4gKi9cbkNvbnN1bWVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChpZCwgbWVzc2FnZSkge1xuICBpZiAoaWQgJiYgdGhpcy5lcnJvckhhbmRsZXJzW2lkXSkge1xuICAgIHV0aWwuZWFjaFByb3AodGhpcy5lcnJvckhhbmRsZXJzW2lkXSwgZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgIHByb3AobWVzc2FnZSk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoIWlkKSB7XG4gICAgdGhpcy5lbWl0KCdlcnJvcicsIG1lc3NhZ2UpO1xuICB9XG59O1xuXG5cbi8qKlxuICogQ2xvc2UgLyB0ZWFyZG93biB0aGUgZmxvdyB0aGlzIGFwaSB0ZXJtaW5hdGVzLlxuICogQG1ldGhvZCBkb0Nsb3NlXG4gKi9cbkNvbnN1bWVyLnByb3RvdHlwZS5kb0Nsb3NlID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5jb250cm9sQ2hhbm5lbCkge1xuICAgIHRoaXMuZW1pdCh0aGlzLmNvbnRyb2xDaGFubmVsLCB7XG4gICAgICB0eXBlOiAnQ2hhbm5lbCBDbG9zaW5nJyxcbiAgICAgIHJlcXVlc3Q6ICdjbG9zZSdcbiAgICB9KTtcbiAgfVxuXG4gIHV0aWwuZWFjaFByb3AodGhpcy5lbWl0cywgZnVuY3Rpb24gKGVtaXQsIGlkKSB7XG4gICAgdGhpcy50ZWFyZG93bihpZCk7XG4gIH0uYmluZCh0aGlzKSk7XG5cbiAgdGhpcy5lbWl0KCdjbG9zZScpO1xuICB0aGlzLm9mZigpO1xuXG4gIHRoaXMuZW1pdENoYW5uZWwgPSBudWxsO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIHRleHR1YWwgZGVzY3JpcHRpb24gb2YgdGhpcyBwb3J0LlxuICogQG1ldGhvZCB0b1N0cmluZ1xuICogQHJldHVybiBUaGUgZGVzY3JpcHRpb24gb2YgdGhpcyBwb3J0LlxuICovXG5Db25zdW1lci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmVtaXRDaGFubmVsKSB7XG4gICAgcmV0dXJuIFwiW0NvbnN1bWVyIFwiICsgdGhpcy5lbWl0Q2hhbm5lbCArIFwiXVwiO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBcIlt1bmJvdW5kIENvbnN1bWVyXVwiO1xuICB9XG59O1xuXG4vKipcbiAqIEdldCB0aGUgbmV4dCBJRCBmb3IgYW4gYXBpIGNoYW5uZWwuXG4gKiBAbWV0aG9kIG5leHRJZFxuICogQHN0YXRpY1xuICogQHByaXZhdGVcbiAqL1xuQ29uc3VtZXIubmV4dElkID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIUNvbnN1bWVyLmlkKSB7XG4gICAgQ29uc3VtZXIuaWQgPSAxO1xuICB9XG4gIHJldHVybiAoQ29uc3VtZXIuaWQgKz0gMSk7XG59O1xuXG4vKipcbiAqIENvbnZlcnQgYSBzdHJ1Y3R1cmVkIGRhdGEgc3RydWN0dXJlIGludG8gYSBtZXNzYWdlIHN0cmVhbSBjb25mb3JtaW5nIHRvXG4gKiBhIHRlbXBsYXRlIGFuZCBhbiBhcnJheSBvZiBiaW5hcnkgZGF0YSBlbGVtZW50cy5cbiAqIEBzdGF0aWNcbiAqIEBtZXRob2QgbWVzc2FnZVRvUG9ydGFibGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB0ZW1wbGF0ZSBUaGUgdGVtcGxhdGUgdG8gY29uZm9ybSB0b1xuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIFRoZSBpbnN0YW5jZSBvZiB0aGUgZGF0YSBzdHJ1Y3R1cmUgdG8gY29uZnJvbVxuICogQHBhcmFtIHtEZWJ1Z30gZGVidWcgQSBkZWJ1Z2dlciBmb3IgZXJyb3JzLlxuICogQHJldHVybiB7e3RleHQ6IE9iamVjdCwgYmluYXJ5OiBBcnJheX19IFNlcGFyYXRlZCBkYXRhIHN0cmVhbXMuXG4gKi9cbkNvbnN1bWVyLm1lc3NhZ2VUb1BvcnRhYmxlID0gZnVuY3Rpb24gKHRlbXBsYXRlLCB2YWx1ZSwgZGVidWcpIHtcbiAgdmFyIGV4dGVybmFscyA9IFtdLFxuICAgIG1lc3NhZ2UgPSBDb25zdW1lci5jb25mb3JtKHRlbXBsYXRlLCB2YWx1ZSwgZXh0ZXJuYWxzLCB0cnVlLCBkZWJ1Zyk7XG4gIHJldHVybiB7XG4gICAgdGV4dDogbWVzc2FnZSxcbiAgICBiaW5hcnk6IGV4dGVybmFsc1xuICB9O1xufTtcblxuLyoqXG4gKiBDb252ZXJ0IFN0cnVjdHVyZWQgRGF0YSBzdHJlYW1zIGludG8gYSBkYXRhIHN0cnVjdHVyZSBjb25mb3JtaW5nIHRvIGFcbiAqIHRlbXBsYXRlLlxuICogQHN0YXRpY1xuICogQG1ldGhvZCBwb3J0YWJsZVRvTWVzc2FnZVxuICogQHBhcmFtIHtPYmplY3R9IHRlbXBsYXRlIFRoZSB0ZW1wbGF0ZSB0byBjb25mb3JtIHRvXG4gKiBAcGFyYW0ge3t0ZXh0OiBPYmplY3QsIGJpbmFyeTogQXJyYXl9fSBzdHJlYW1zIFRoZSBzdHJlYW1zIHRvIGNvbmZvcm1cbiAqIEBwYXJhbSB7RGVidWd9IGRlYnVnIEEgZGVidWdnZXIgZm9yIGVycm9ycy5cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIGRhdGEgc3RydWN0dXJlIG1hdGNoaW5nIHRoZSB0ZW1wbGF0ZS5cbiAqL1xuQ29uc3VtZXIucG9ydGFibGVUb01lc3NhZ2UgPSBmdW5jdGlvbiAodGVtcGxhdGUsIHN0cmVhbXMsIGRlYnVnKSB7XG4gIHJldHVybiBDb25zdW1lci5jb25mb3JtKHRlbXBsYXRlLCBzdHJlYW1zLnRleHQsIHN0cmVhbXMuYmluYXJ5LCBmYWxzZSwgZGVidWcpO1xufTtcblxuLyoqXG4gKiBGb3JjZSBhIGNvbGxlY3Rpb24gb2YgdmFsdWVzIHRvIGxvb2sgbGlrZSB0aGUgdHlwZXMgYW5kIGxlbmd0aCBvZiBhbiBBUElcbiAqIHRlbXBsYXRlLlxuICogQHN0YXRpY1xuICogQG1ldGhvZCBjb25mb3JtXG4gKiBAcGFyYW0ge09iamVjdH0gdGVtcGxhdGUgVGhlIHRlbXBsYXRlIHRvIGNvbmZvcm0gdG9cbiAqIEBwYXJhbSB7T2JqZWN0fSBmcm9tIFRoZSB2YWx1ZSB0byBjb25mb3JtXG4gKiBAcGFyYW0ge0FycmF5fSBleHRlcm5hbHMgTGlzdGluZyBvZiBiaW5hcnkgZWxlbWVudHMgaW4gdGhlIHRlbXBsYXRlXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFdoZXRoZXIgdG8gdG8gc2VwYXJhdGUgb3IgY29tYmluZSBzdHJlYW1zLlxuICogQGFwYXJhbSB7RGVidWd9IGRlYnVnIEEgZGVidWdnZXIgZm9yIGVycm9ycy5cbiAqL1xuQ29uc3VtZXIuY29uZm9ybSA9IGZ1bmN0aW9uICh0ZW1wbGF0ZSwgZnJvbSwgZXh0ZXJuYWxzLCBzZXBhcmF0ZSwgZGVidWcpIHtcbiAgLyoganNoaW50IC1XMDg2ICovXG4gIGlmICh0eXBlb2YgKGZyb20pID09PSAnZnVuY3Rpb24nICYmIHRlbXBsYXRlICE9PSAncHJveHknKSB7XG4gICAgLy9mcm9tID0gdW5kZWZpbmVkO1xuICAgIC8vdGhyb3cgXCJUcnlpbmcgdG8gY29uZm9ybSBhIGZ1bmN0aW9uXCI7XG4gICAgZGVidWcuZXJyb3IoXCJNZXNzYWdlIGRpc2NhcmRlZCBhcyBmdW5jdGlvbnMgY2FuJ3QgY3Jvc3MgbW9kdWxlcyFcIik7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSBlbHNlIGlmICh0eXBlb2YgKGZyb20pID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0gZWxzZSBpZiAoZnJvbSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9IGVsc2UgaWYgKHRlbXBsYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICBkZWJ1Zy5lcnJvcihcIk1lc3NhZ2UgZGlzY2FyZGVkIGZvciBub3QgbWF0Y2hpbmcgZGVjbGFyZWQgdHlwZSFcIiwgZnJvbSk7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHN3aXRjaCAodGVtcGxhdGUpIHtcbiAgY2FzZSAnc3RyaW5nJzpcbiAgICByZXR1cm4gU3RyaW5nKCcnKSArIGZyb207XG4gIGNhc2UgJ251bWJlcic6XG4gICAgcmV0dXJuIE51bWJlcigxKSAqIGZyb207XG4gIGNhc2UgJ2Jvb2xlYW4nOlxuICAgIHJldHVybiBCb29sZWFuKGZyb20gPT09IHRydWUpO1xuICBjYXNlICdvYmplY3QnOlxuICAgIC8vIFRPRE8od2lsbHNjb3R0KTogQWxsb3cgcmVtb3ZhbCBpZiBzYW5kYm94aW5nIGVuZm9yY2VzIHRoaXMuXG4gICAgaWYgKHR5cGVvZiBmcm9tID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZnJvbSkpO1xuICAgIH1cbiAgY2FzZSAnYmxvYic6XG4gICAgaWYgKHNlcGFyYXRlKSB7XG4gICAgICBpZiAoZnJvbSBpbnN0YW5jZW9mIEJsb2IpIHtcbiAgICAgICAgZXh0ZXJuYWxzLnB1c2goZnJvbSk7XG4gICAgICAgIHJldHVybiBleHRlcm5hbHMubGVuZ3RoIC0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlYnVnLmVycm9yKCdjb25mb3JtIGV4cGVjdGluZyBCbG9iLCBidXQgc2F3ICcgKyAodHlwZW9mIGZyb20pKTtcbiAgICAgICAgZXh0ZXJuYWxzLnB1c2gobmV3IEJsb2IoW10pKTtcbiAgICAgICAgcmV0dXJuIGV4dGVybmFscy5sZW5ndGggLSAxO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZXh0ZXJuYWxzW2Zyb21dO1xuICAgIH1cbiAgY2FzZSAnYnVmZmVyJzpcbiAgICBpZiAoc2VwYXJhdGUpIHtcbiAgICAgIGV4dGVybmFscy5wdXNoKENvbnN1bWVyLm1ha2VBcnJheUJ1ZmZlcihmcm9tLCBkZWJ1ZykpO1xuICAgICAgcmV0dXJuIGV4dGVybmFscy5sZW5ndGggLSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gQ29uc3VtZXIubWFrZUFycmF5QnVmZmVyKGV4dGVybmFsc1tmcm9tXSwgZGVidWcpO1xuICAgIH1cbiAgY2FzZSAncHJveHknOlxuICAgIHJldHVybiBmcm9tO1xuICB9XG4gIHZhciB2YWwsIGk7XG4gIGlmIChBcnJheS5pc0FycmF5KHRlbXBsYXRlKSAmJiBmcm9tICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YWwgPSBbXTtcbiAgICBpID0gMDtcbiAgICBpZiAodGVtcGxhdGUubGVuZ3RoID09PSAyICYmIHRlbXBsYXRlWzBdID09PSAnYXJyYXknKSB7XG4gICAgICAvL2NvbnNvbGUubG9nKFwidGVtcGxhdGUgaXMgYXJyYXksIHZhbHVlIGlzIFwiICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBmcm9tLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhbC5wdXNoKENvbnN1bWVyLmNvbmZvcm0odGVtcGxhdGVbMV0sIGZyb21baV0sIGV4dGVybmFscyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXBhcmF0ZSwgZGVidWcpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChpID0gMDsgaSA8IHRlbXBsYXRlLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChmcm9tW2ldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB2YWwucHVzaChDb25zdW1lci5jb25mb3JtKHRlbXBsYXRlW2ldLCBmcm9tW2ldLCBleHRlcm5hbHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXBhcmF0ZSwgZGVidWcpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWwucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWw7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHRlbXBsYXRlID09PSAnb2JqZWN0JyAmJiBmcm9tICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YWwgPSB7fTtcbiAgICB1dGlsLmVhY2hQcm9wKHRlbXBsYXRlLCBmdW5jdGlvbiAocHJvcCwgbmFtZSkge1xuICAgICAgaWYgKGZyb21bbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YWxbbmFtZV0gPSBDb25zdW1lci5jb25mb3JtKHByb3AsIGZyb21bbmFtZV0sIGV4dGVybmFscywgc2VwYXJhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVidWcpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB2YWw7XG4gIH1cbiAgZGVidWcuZXJyb3IoJ1Vua25vd24gdGVtcGxhdGUgcHJvdmlkZWQ6ICcgKyB0ZW1wbGF0ZSk7XG59O1xuXG4vKipcbiAqIE1ha2UgYSB0aGluZyBpbnRvIGFuIEFycmF5IEJ1ZmZlclxuICogQHN0YXRpY1xuICogQG1ldGhvZCBtYWtlQXJyYXlCdWZmZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGluZ1xuICogQHBhcmFtIHtEZWJ1Z30gZGVidWcgQSBkZWJ1Z2dlciBpbiBjYXNlIG9mIGVycm9ycy5cbiAqIEByZXR1cm4ge0FycmF5QnVmZmVyfSBBbiBBcnJheSBCdWZmZXJcbiAqL1xuQ29uc3VtZXIubWFrZUFycmF5QnVmZmVyID0gZnVuY3Rpb24gKHRoaW5nLCBkZWJ1Zykge1xuICBpZiAoIXRoaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBBcnJheUJ1ZmZlcigwKTtcbiAgfVxuXG4gIGlmICh0aGluZyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuIHRoaW5nO1xuICB9IGVsc2UgaWYgKHRoaW5nLmNvbnN0cnVjdG9yLm5hbWUgPT09IFwiQXJyYXlCdWZmZXJcIiAmJlxuICAgICAgdHlwZW9mIHRoaW5nLnByb3RvdHlwZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIC8vIFdvcmthcm91bmQgZm9yIHdlYmtpdCBvcmlnaW4gb3duZXJzaGlwIGlzc3VlLlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9VV05ldHdvcmtzTGFiL2ZyZWVkb20vaXNzdWVzLzI4XG4gICAgcmV0dXJuIG5ldyBEYXRhVmlldyh0aGluZykuYnVmZmVyO1xuICB9IGVsc2Uge1xuICAgIGRlYnVnLmVycm9yKCdleHBlY3RpbmcgQXJyYXlCdWZmZXIsIGJ1dCBzYXcgJyArXG4gICAgICAgICh0eXBlb2YgdGhpbmcpICsgJzogJyArIEpTT04uc3RyaW5naWZ5KHRoaW5nKSk7XG4gICAgcmV0dXJuIG5ldyBBcnJheUJ1ZmZlcigwKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZWN1cnNpdmVseSB0cmF2ZXJzZSBhIFtuZXN0ZWRdIG9iamVjdCBhbmQgZnJlZXplIGl0cyBrZXlzIGZyb20gYmVpbmdcbiAqIHdyaXRhYmxlLiBOb3RlLCB0aGUgcmVzdWx0IGNhbiBoYXZlIG5ldyBrZXlzIGFkZGVkIHRvIGl0LCBidXQgZXhpc3Rpbmcgb25lc1xuICogY2Fubm90IGJlICBvdmVyd3JpdHRlbi4gRG9lc24ndCBkbyBhbnl0aGluZyBmb3IgYXJyYXlzIG9yIG90aGVyIGNvbGxlY3Rpb25zLlxuICpcbiAqIEBtZXRob2QgcmVjdXJzaXZlRnJlZXplT2JqZWN0XG4gKiBAc3RhdGljXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gb2JqZWN0IHRvIGJlIGZyb3plblxuICogQHJldHVybiB7T2JqZWN0fSBvYmpcbiAqKi9cbkNvbnN1bWVyLnJlY3Vyc2l2ZUZyZWV6ZU9iamVjdCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgdmFyIGssIHJldCA9IHt9O1xuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG4gIGZvciAoayBpbiBvYmopIHtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocmV0LCBrLCB7XG4gICAgICAgIHZhbHVlOiBDb25zdW1lci5yZWN1cnNpdmVGcmVlemVPYmplY3Qob2JqW2tdKSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJldDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ29uc3VtZXI7XG4iLCIvKmpzbGludCBpbmRlbnQ6Miwgbm9kZTp0cnVlLCBzbG9wcHk6dHJ1ZSAqL1xudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuLyoqXG4gKiBBIGZyZWVkb20gZW50cnkgcG9pbnQgZm9yIGRlYnVnZ2luZy5cbiAqIEB1c2VzIGhhbmRsZUV2ZW50c1xuICogQGltcGxlbWVudHMgUG9ydFxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnZhciBEZWJ1ZyA9IGZ1bmN0aW9uIChsb2dnZXIpIHtcbiAgdGhpcy5pZCA9ICdkZWJ1Zyc7XG4gIHRoaXMuZW1pdENoYW5uZWwgPSBmYWxzZTtcbiAgdGhpcy5jb25maWcgPSBmYWxzZTtcbiAgdXRpbC5oYW5kbGVFdmVudHModGhpcyk7XG59O1xuXG4vKipcbiAqIFRoZSBzdXBwb3J0ZWQgbG9nIGxldmVscyBmb3IgZGVidWdnaW5nLlxuICogQHN0YXRpY1xuICovXG5EZWJ1Zy5MRVZFTFMgPSBbJ2RlYnVnJywgJ2luZm8nLCAnbG9nJywgJ3dhcm4nLCAnZXJyb3InXTtcblxuLyoqXG4gKiBQcm92aWRlIGEgdGV4dHVhbCBkZXNjcmlwdGlvbiBvZiB0aGlzIHBvcnQuXG4gKiBAbWV0aG9kIHRvU3RyaW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHRoZSB0ZXh0dWFsIGRlc2NyaXB0aW9uLlxuICovXG5EZWJ1Zy5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAnW0NvbnNvbGVdJztcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgYSBsb2dnZXIgZm9yIG91dHB1dHRpbmcgZGVidWdnaW5nIG1lc3NhZ2VzLlxuICogQG1ldGhvZCBzZXRMb2dnZXJcbiAqIEBwYXJhbSB7Q29uc29sZX0gbG9nZ2VyIFRoZSBsb2dnZXIgdG8gcmVnaXN0ZXJcbiAqL1xuRGVidWcucHJvdG90eXBlLnNldExvZ2dlciA9IGZ1bmN0aW9uIChsb2dnZXIpIHtcbiAgaWYgKHRoaXMubG9nZ2VyKSB7XG4gICAgdGhpcy5pbmZvKCdSZXBsYWNpbmcgTG9nZ2VyLicpO1xuICB9XG4gIHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xuICB0aGlzLmVtaXQoJ2xvZ2dlcicpO1xufTtcblxuLyoqXG4gKiBIYW5kbGVyIGZvciByZWNlaXZpbmcgbWVzc2FnZXMgc2VudCB0byB0aGUgZGVidWcgcG9ydC5cbiAqIFRoZXNlIG1lc3NhZ2VzIGFyZSB1c2VkIHRvIHJldHJlaXZlIGNvbmZpZyBmb3IgZXhwb3NpbmcgY29uc29sZS5cbiAqIEBtZXRob2Qgb25NZXNzYWdlXG4gKiBAcGFyYW0ge1N0cmluZ30gc291cmNlIHRoZSBzb3VyY2UgaWRlbnRpZmllciBmb3IgdGhlIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gbWVzc2FnZSB0aGUgcmVjZWl2ZWQgbWVzc2FnZS5cbiAqL1xuRGVidWcucHJvdG90eXBlLm9uTWVzc2FnZSA9IGZ1bmN0aW9uIChzb3VyY2UsIG1lc3NhZ2UpIHtcbiAgaWYgKHNvdXJjZSA9PT0gJ2NvbnRyb2wnICYmIG1lc3NhZ2UuY2hhbm5lbCAmJiAhdGhpcy5lbWl0Q2hhbm5lbCkge1xuICAgIHRoaXMuZW1pdENoYW5uZWwgPSBtZXNzYWdlLmNoYW5uZWw7XG4gICAgdGhpcy5jb25maWcgPSBtZXNzYWdlLmNvbmZpZztcbiAgICBpZiAoIXRoaXMuY29uZmlnLmdsb2JhbC5jb25zb2xlKSB7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuY29uZmlnLmdsb2JhbC5jb25zb2xlID0gY29uc29sZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29uZmlnLmdsb2JhbC5jb25zb2xlID0gdGhpcy5nZXRMb2dnZXIoJ0NvbnNvbGUnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5lbWl0KCdyZWFkeScpO1xuICB9XG59O1xuXG4vKipcbiAqIERpc3BhdGNoIGEgZGVidWcgbWVzc2FnZSB3aXRoIGFyYml0cmFyeSBzZXZlcml0eS5cbiAqIEFsbCBkZWJ1ZyBtZXNzYWdlcyBhcmUgcm91dGVkIHRocm91Z2ggdGhlIG1hbmFnZXIsIHRvIGFsbG93IGZvciBkZWxlZ2F0aW9uLlxuICogQG1ldGhvZCBmb3JtYXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZXZlcml0eSB0aGUgc2V2ZXJpdHkgb2YgdGhlIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge1N0cmluZ30gc291cmNlIFRoZSBsb2NhdGlvbiBvZiBtZXNzYWdlLlxuICogQHBhcmFtIHtTdHJpbmdbXX0gYXJncyBUaGUgY29udGVudHMgb2YgdGhlIG1lc3NhZ2UuXG4gKiBAcHJpdmF0ZVxuICovXG5EZWJ1Zy5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24gKHNldmVyaXR5LCBzb3VyY2UsIGFyZ3MpIHtcbiAgdmFyIGksIGFsaXN0ID0gW10sIGFyZ2FycjtcbiAgaWYgKHR5cGVvZiBhcmdzID09PSBcInN0cmluZ1wiICYmIHNvdXJjZSkge1xuICAgIHRyeSB7XG4gICAgICBhcmdhcnIgPSBKU09OLnBhcnNlKGFyZ3MpO1xuICAgICAgaWYgKGFyZ2FyciBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIGFyZ3MgPSBhcmdhcnI7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gcGFzcy5cbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIGFyZ3MgPT09IFwic3RyaW5nXCIpIHtcbiAgICBhbGlzdC5wdXNoKGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIGZvciAoaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBhbGlzdC5wdXNoKGFyZ3NbaV0pO1xuICAgIH1cbiAgfVxuICBpZiAoIXRoaXMuZW1pdENoYW5uZWwpIHtcbiAgICB0aGlzLm9uKCdyZWFkeScsIHRoaXMuZm9ybWF0LmJpbmQodGhpcywgc2V2ZXJpdHksIHNvdXJjZSwgYWxpc3QpKTtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5lbWl0KHRoaXMuZW1pdENoYW5uZWwsIHtcbiAgICBzZXZlcml0eTogc2V2ZXJpdHksXG4gICAgc291cmNlOiBzb3VyY2UsXG4gICAgcXVpZXQ6IHRydWUsXG4gICAgcmVxdWVzdDogJ2RlYnVnJyxcbiAgICBtc2c6IEpTT04uc3RyaW5naWZ5KGFsaXN0KVxuICB9KTtcbn07XG5cbi8qKlxuICogUHJpbnQgcmVjZWl2ZWQgbWVzc2FnZXMgb24gdGhlIGNvbnNvbGUuXG4gKiBUaGlzIGlzIGNhbGxlZCBieSB0aGUgbWFuYWdlciBpbiByZXNwb25zZSB0byBhbiBlbWlzc2lvbiBmcm9tIGZvcm1hdC5cbiAqIEBtZXRob2QgcHJpbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlIFRoZSBtZXNzYWdlIGVtaXR0ZWQgYnkge0BzZWUgZm9ybWF0fSB0byBwcmludC5cbiAqL1xuRGVidWcucHJvdG90eXBlLnByaW50ID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgaWYgKCF0aGlzLmxvZ2dlcikge1xuICAgIHRoaXMub25jZSgnbG9nZ2VyJywgdGhpcy5wcmludC5iaW5kKHRoaXMsIG1lc3NhZ2UpKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgYXJncywgYXJyID0gW10sIGkgPSAwO1xuICBhcmdzID0gSlNPTi5wYXJzZShtZXNzYWdlLm1zZyk7XG4gIGlmICh0eXBlb2YgYXJncyA9PT0gXCJzdHJpbmdcIikge1xuICAgIGFyci5wdXNoKGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChhcmdzW2ldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGFyci5wdXNoKGFyZ3NbaV0pO1xuICAgICAgaSArPSAxO1xuICAgIH1cbiAgfVxuICB0aGlzLmxvZ2dlclttZXNzYWdlLnNldmVyaXR5XS5jYWxsKHRoaXMubG9nZ2VyLCBtZXNzYWdlLnNvdXJjZSwgYXJyLCBmdW5jdGlvbiAoKSB7fSk7XG59O1xuXG4vKipcbiAqIFByaW50IGEgbG9nIG1lc3NhZ2UgdG8gdGhlIGNvbnNvbGUuXG4gKiBAbWV0aG9kIGxvZ1xuICovXG5EZWJ1Zy5wcm90b3R5cGUubG9nID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmZvcm1hdCgnbG9nJywgdW5kZWZpbmVkLCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBQcmludCBhbiBpbmZvIG1lc3NhZ2UgdG8gdGhlIGNvbnNvbGUuXG4gKiBAbWV0aG9kIGxvZ1xuICovXG5EZWJ1Zy5wcm90b3R5cGUuaW5mbyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5mb3JtYXQoJ2luZm8nLCB1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIFByaW50IGEgZGVidWcgbWVzc2FnZSB0byB0aGUgY29uc29sZS5cbiAqIEBtZXRob2QgbG9nXG4gKi9cbkRlYnVnLnByb3RvdHlwZS5kZWJ1ZyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5mb3JtYXQoJ2RlYnVnJywgdW5kZWZpbmVkLCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBQcmludCBhIHdhcm5pbmcgbWVzc2FnZSB0byB0aGUgY29uc29sZS5cbiAqIEBtZXRob2Qgd2FyblxuICovXG5EZWJ1Zy5wcm90b3R5cGUud2FybiA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5mb3JtYXQoJ3dhcm4nLCB1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIFByaW50IGFuIGVycm9yIG1lc3NhZ2UgdG8gdGhlIGNvbnNvbGUuXG4gKiBAbWV0aG9kIGVycm9yXG4gKi9cbkRlYnVnLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5mb3JtYXQoJ2Vycm9yJywgdW5kZWZpbmVkLCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBHZXQgYSBsb2dnZXIgdGhhdCBsb2dzIG1lc3NhZ2VzIHByZWZpeGVkIGJ5IGEgZ2l2ZW4gbmFtZS5cbiAqIEBtZXRob2QgZ2V0TG9nZ2VyXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgcHJlZml4IGZvciBsb2dnZWQgbWVzc2FnZXMuXG4gKiBAcmV0dXJucyB7Q29uc29sZX0gQSBjb25zb2xlLWxpa2Ugb2JqZWN0LlxuICovXG5EZWJ1Zy5wcm90b3R5cGUuZ2V0TG9nZ2VyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyIGxvZyA9IGZ1bmN0aW9uIChzZXZlcml0eSwgc291cmNlKSB7XG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgICB0aGlzLmZvcm1hdChzZXZlcml0eSwgc291cmNlLCBhcmdzKTtcbiAgfSxcbiAgICBsb2dnZXIgPSB7XG4gICAgICBmcmVlZG9tOiB0cnVlXG4gICAgfTtcbiAgRGVidWcuTEVWRUxTLmZvckVhY2goZnVuY3Rpb24gKGxldmVsKSB7XG4gICAgbG9nZ2VyW2xldmVsXSA9IGxvZy5iaW5kKHRoaXMsIGxldmVsLCBuYW1lKTtcbiAgfS5iaW5kKHRoaXMpKTtcbiAgcmV0dXJuIGxvZ2dlcjtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgc3luY2hyb25vdXMgJ2dldExvZ2dlcicgbWV0aG9kIHRoYXQgYmluZHMgYXJvdW5kIGFuIGFzeW5jaHJvbm91c1xuICogbG9nZ2VyIGJ5IGNyZWF0aW5nIGEgYnVmZmVyIHVudGlsIHRoZSBhc3luY2hyb25vdXMgbG9nZ2VyIGlzIHJlc29sdmVkLlxuICogQHNlZSB7TW9kdWxlSW50ZXJuYWwubG9hZExpbmtzfSBmb3Igd2hlcmUgdGhpcyBtZXRob2QgaXMgYm91bmQgdG8gdGhlIGNyZWF0ZWRcbiAqICAgICBleHRlcm5hbCBpbnRlcmZhY2UuXG4gKiBAbWV0aG9kIGdldExvZ2dpbmdTaGltXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBhc3luY01ldGhvZCBUaGUgd3JhcHBlciB0byAnZ2V0TG9nZ2VyJ1xuICovXG5EZWJ1Zy5wcm90b3R5cGUuZ2V0TG9nZ2luZ1NoaW0gPSBmdW5jdGlvbiAoYXN5bmNNZXRob2QpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldExvZ2dnZXJTeW5jKG5hbWUpIHtcbiAgICB2YXIgdG9SZXNvbHZlID0gYXN5bmNNZXRob2QobmFtZSksXG4gICAgICBidWZmZXIgPSBbXSxcbiAgICAgIG1ldGhvZHMgPSBEZWJ1Zy5MRVZFTFMsXG4gICAgICBiYWNraW5nID0gbnVsbCxcbiAgICAgIHJldCA9IHt9O1xuICAgIHRvUmVzb2x2ZS50aGVuKGZ1bmN0aW9uIChsb2dnZXIpIHtcbiAgICAgIGJhY2tpbmcgPSBsb2dnZXI7XG4gICAgICBidWZmZXIuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBiYWNraW5nW2l0ZW1bMF1dLmFwcGx5KGJhY2tpbmcsIGl0ZW1bMV0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgbWV0aG9kcy5mb3JFYWNoKGZ1bmN0aW9uIChtdGhkKSB7XG4gICAgICByZXRbbXRoZF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICAgICAgaWYgKGJhY2tpbmcpIHtcbiAgICAgICAgICBiYWNraW5nW3RoaXNdLmFwcGx5KGJhY2tpbmcsIGFyZ3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJ1ZmZlci5wdXNoKFt0aGlzLCBhcmdzXSk7XG4gICAgICAgIH1cbiAgICAgIH0uYmluZChtdGhkKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmV0O1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBEZWJ1ZztcbiIsIi8qanNsaW50IGluZGVudDoyLG5vZGU6dHJ1ZSAqL1xyXG52YXIgUHJvbWlzZUNvbXBhdCA9IHJlcXVpcmUoJ2VzNi1wcm9taXNlJykuUHJvbWlzZTtcclxuXHJcbnZhciBBcGkgPSByZXF1aXJlKCcuL2FwaScpO1xyXG52YXIgRGVidWcgPSByZXF1aXJlKCcuL2RlYnVnJyk7XHJcbnZhciBIdWIgPSByZXF1aXJlKCcuL2h1YicpO1xyXG52YXIgTWFuYWdlciA9IHJlcXVpcmUoJy4vbWFuYWdlcicpO1xyXG52YXIgUG9saWN5ID0gcmVxdWlyZSgnLi9wb2xpY3knKTtcclxudmFyIFByb3h5QmluZGVyID0gcmVxdWlyZSgnLi9wcm94eWJpbmRlcicpO1xyXG52YXIgUmVzb3VyY2UgPSByZXF1aXJlKCcuL3Jlc291cmNlJyk7XHJcbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XHJcbnZhciBCdW5kbGUgPSByZXF1aXJlKCcuL2J1bmRsZScpO1xyXG5cclxudmFyIGZyZWVkb21HbG9iYWw7XHJcbnZhciBnZXRHbG9iYWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG4gIFxyXG4gIC8vIE5vZGUuanNcclxuICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsLnByb3RvdHlwZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICBmcmVlZG9tR2xvYmFsID0gZ2xvYmFsO1xyXG4gIC8vIEJyb3dzZXJzXHJcbiAgfSBlbHNlIHtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICBmcmVlZG9tR2xvYmFsID0gdGhpcztcclxuICAgIH0sIDApO1xyXG4gIH1cclxufTtcclxuZ2V0R2xvYmFsKCk7XHJcblxyXG4vKipcclxuICogQ3JlYXRlIGEgbmV3IGZyZWVkb20gY29udGV4dC5cclxuICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHQgSW5mb3JtYXRpb24gYWJvdXQgdGhlIGxvY2FsIGNvbnRleHQuXHJcbiAqIEBzZWUge3V0aWwvd29ya2VyRW50cnkuanN9XHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBtYW5pZmVzdCBUaGUgbWFuaWZlc3QgdG8gbG9hZC5cclxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBDb25maWd1cmF0aW9uIGtleXMgc2V0IGJ5IHRoZSB1c2VyLlxyXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gQSBwcm9taXNlIGZvciB0aGUgbW9kdWxlIGRlZmluZWQgaW4gdGhlIG1hbmlmZXN0LlxyXG4gKi9cclxudmFyIHNldHVwID0gZnVuY3Rpb24gKGNvbnRleHQsIG1hbmlmZXN0LCBjb25maWcpIHtcclxuICAndXNlIHN0cmljdCc7XHJcbiAgdmFyIGRlYnVnID0gbmV3IERlYnVnKCksXHJcbiAgICBodWIgPSBuZXcgSHViKGRlYnVnKSxcclxuICAgIHJlc291cmNlID0gbmV3IFJlc291cmNlKGRlYnVnKSxcclxuICAgIGFwaSA9IG5ldyBBcGkoZGVidWcpLFxyXG4gICAgbWFuYWdlciA9IG5ldyBNYW5hZ2VyKGh1YiwgcmVzb3VyY2UsIGFwaSksXHJcbiAgICBiaW5kZXIgPSBuZXcgUHJveHlCaW5kZXIobWFuYWdlciksXHJcbiAgICBwb2xpY3ksXHJcbiAgICBzaXRlX2NmZyA9IHtcclxuICAgICAgJ2RlYnVnJzogJ2xvZycsXHJcbiAgICAgICdtYW5pZmVzdCc6IG1hbmlmZXN0LFxyXG4gICAgICAnbW9kdWxlQ29udGV4dCc6ICghY29udGV4dCB8fCB0eXBlb2YgKGNvbnRleHQuaXNNb2R1bGUpID09PSBcInVuZGVmaW5lZFwiKSA/XHJcbiAgICAgICAgICB1dGlsLmlzTW9kdWxlQ29udGV4dCgpIDpcclxuICAgICAgICAgIGNvbnRleHQuaXNNb2R1bGVcclxuICAgIH0sXHJcbiAgICBsaW5rLFxyXG4gICAgUG9ydCxcclxuICAgIGNsZWFudXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGFwaS5jbGVhbnVwKCk7XHJcbiAgICAgIG1hbmFnZXIuZGVzdHJveSgpO1xyXG4gICAgfTtcclxuXHJcbiAgaWYgKGNvbmZpZykge1xyXG4gICAgdXRpbC5taXhpbihzaXRlX2NmZywgY29uZmlnLCB0cnVlKTtcclxuICB9XHJcbiAgc2l0ZV9jZmcuZ2xvYmFsID0gZnJlZWRvbUdsb2JhbDtcclxuICBpZiAoY29udGV4dCkge1xyXG4gICAgdXRpbC5taXhpbihzaXRlX2NmZywgY29udGV4dCwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICAvLyBSZWdpc3RlciB1c2VyLXN1cHBsaWVkIGV4dGVuc2lvbnMuXHJcbiAgLy8gRm9yIGV4YW1wbGUgdGhlICdjb3JlLm9hdXRoJyBwcm92aWRlciBkZWZpbmVzIGEgcmVnaXN0ZXIgZnVuY3Rpb24sXHJcbiAgLy8gd2hpY2ggZW5hYmxlcyBzaXRlX2NmZy5vYXV0aCB0byBiZSByZWdpc3RlcmVkIHdpdGggaXQuXHJcbiAgY29udGV4dC5wcm92aWRlcnMuZm9yRWFjaChmdW5jdGlvbiAocHJvdmlkZXIpIHtcclxuICAgIHZhciBuYW1lO1xyXG4gICAgaWYgKHByb3ZpZGVyLm5hbWUuaW5kZXhPZignY29yZS4nKSA9PT0gMCAmJlxyXG4gICAgICAgIHR5cGVvZiBwcm92aWRlci5yZWdpc3RlciA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBuYW1lID0gcHJvdmlkZXIubmFtZS5zdWJzdHIoNSk7XHJcbiAgICAgIC8vIEludmVydCBwcmlvcml0eSBhbmQgcHJlZmVyIHVzZXIgY29uZmlnIG92ZXIgbG9jYWwgY29udGV4dCBmb3IgdGhlc2UuXHJcbiAgICAgIGlmIChjb25maWcgJiYgY29uZmlnW25hbWVdKSB7XHJcbiAgICAgICAgcHJvdmlkZXIucmVnaXN0ZXIoY29uZmlnW25hbWVdKTtcclxuICAgICAgfSBlbHNlIGlmIChzaXRlX2NmZ1tuYW1lXSkge1xyXG4gICAgICAgIHByb3ZpZGVyLnJlZ2lzdGVyKHNpdGVfY2ZnW25hbWVdKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwcm92aWRlci5yZWdpc3Rlcih1bmRlZmluZWQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgXHJcbiAgQnVuZGxlLnJlZ2lzdGVyKGNvbnRleHQucHJvdmlkZXJzLCBhcGkpO1xyXG4gIHJlc291cmNlLnJlZ2lzdGVyKGNvbnRleHQucmVzb2x2ZXJzIHx8IFtdKTtcclxuXHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ29tcGF0KGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgIGlmIChzaXRlX2NmZy5tb2R1bGVDb250ZXh0KSB7XHJcbiAgICAgIFBvcnQgPSBzaXRlX2NmZy5wb3J0VHlwZTtcclxuICAgICAgbGluayA9IG5ldyBQb3J0KCdPdXRib3VuZCcsIHJlc291cmNlKTtcclxuICAgICAgbWFuYWdlci5zZXR1cChsaW5rKTtcclxuXHJcbiAgICAgIC8vIERlbGF5IGRlYnVnIG1lc3NhZ2VzIHVudGlsIGRlbGVnYXRpb24gdG8gdGhlIHBhcmVudCBjb250ZXh0IGlzIHNldHVwLlxyXG4gICAgICBtYW5hZ2VyLm9uY2UoJ2RlbGVnYXRlJywgbWFuYWdlci5zZXR1cC5iaW5kKG1hbmFnZXIsIGRlYnVnKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtYW5hZ2VyLnNldHVwKGRlYnVnKTtcclxuICAgICAgcG9saWN5ID0gbmV3IFBvbGljeShtYW5hZ2VyLCByZXNvdXJjZSwgc2l0ZV9jZmcpO1xyXG5cclxuICAgICAgLy8gRGVmaW5lIGhvdyB0byBsb2FkIGEgcm9vdCBtb2R1bGUuXHJcbiAgICAgIHZhciBmYWxsYmFja0xvZ2dlciwgZ2V0SWZhY2U7XHJcbiAgICAgIGZhbGxiYWNrTG9nZ2VyID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICBhcGkuZ2V0Q29yZSgnY29yZS5jb25zb2xlJywge1xyXG4gICAgICAgICAgY29uZmlnOiBzaXRlX2NmZ1xyXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHByb3ZpZGVyKSB7XHJcbiAgICAgICAgICB2YXIgbG9nZ2VyID0gbmV3IHByb3ZpZGVyLmluc3QoKTtcclxuICAgICAgICAgIGRlYnVnLnNldExvZ2dlcihsb2dnZXIpO1xyXG4gICAgICAgICAgaWYgKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgZGVidWcuZXJyb3IobWVzc2FnZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcbiAgICAgIGdldElmYWNlID0gZnVuY3Rpb24gKG1hbmlmZXN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc291cmNlLmdldChzaXRlX2NmZy5sb2NhdGlvbiwgbWFuaWZlc3QpLnRoZW4oXHJcbiAgICAgICAgICBmdW5jdGlvbiAoY2Fub25pY2FsX21hbmlmZXN0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwb2xpY3kuZ2V0KFtdLCBjYW5vbmljYWxfbWFuaWZlc3QpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICkudGhlbihmdW5jdGlvbiAoaW5zdGFuY2UpIHtcclxuICAgICAgICAgIG1hbmFnZXIuc2V0dXAoaW5zdGFuY2UpO1xyXG4gICAgICAgICAgcmV0dXJuIGJpbmRlci5iaW5kRGVmYXVsdChpbnN0YW5jZSwgYXBpLCBpbnN0YW5jZS5tYW5pZmVzdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICAvLyBMb2FkIGFwcHJvcHJpYXRlIExvZ2dlci5cclxuICAgICAgaWYgKHNpdGVfY2ZnLmxvZ2dlcikge1xyXG4gICAgICAgIGdldElmYWNlKHNpdGVfY2ZnLmxvZ2dlcikudGhlbihmdW5jdGlvbiAoaWZhY2UpIHtcclxuICAgICAgICAgIGlmIChpZmFjZS5leHRlcm5hbC5hcGkgIT09ICdjb25zb2xlJykge1xyXG4gICAgICAgICAgICBmYWxsYmFja0xvZ2dlcihcIlVud2lsbGluZyB0byB1c2UgbG9nZ2VyIHdpdGggdW5rbm93biBBUEk6XCIsXHJcbiAgICAgICAgICAgICAgaWZhY2UuZXh0ZXJuYWwuYXBpKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRlYnVnLnNldExvZ2dlcihpZmFjZS5leHRlcm5hbCgpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCBmYWxsYmFja0xvZ2dlcik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZmFsbGJhY2tMb2dnZXIoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gTG9hZCByb290IG1vZHVsZS5cclxuICAgICAgZ2V0SWZhY2Uoc2l0ZV9jZmcubWFuaWZlc3QpLnRoZW4oZnVuY3Rpb24gKGlmYWNlKSB7XHJcbiAgICAgICAgaWZhY2UucG9ydC5vbmNlKCdjbG9zZScsIGNsZWFudXApO1xyXG4gICAgICAgIHJldHVybiBpZmFjZS5leHRlcm5hbDtcclxuICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgIGRlYnVnLmVycm9yKCdGYWlsZWQgdG8gcmV0cmlldmUgbWFuaWZlc3Q6ICcgKyBlcnIpO1xyXG4gICAgICAgIHRocm93IGVycjtcclxuICAgICAgfSkudGhlbihyZXNvbHZlLCByZWplY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGh1Yi5lbWl0KCdjb25maWcnLCBzaXRlX2NmZyk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHNldHVwO1xyXG4iLCIvKmpzbGludCBpbmRlbnQ6MixzbG9wcHk6dHJ1ZSxub2RlOnRydWUgKi9cclxudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcclxuXHJcbi8qKlxyXG4gKiBEZWZpbmVzIGZkb20uSHViLCB0aGUgY29yZSBtZXNzYWdlIGh1YiBiZXR3ZWVuIGZyZWVkb20gbW9kdWxlcy5cclxuICogSW5jb21taW5nIG1lc3NhZ2VzIGZyb20gYXBwcyBhcmUgc2VudCB0byBodWIub25NZXNzYWdlKClcclxuICogQGNsYXNzIEh1YlxyXG4gKiBAcGFyYW0ge0RlYnVnfSBkZWJ1ZyBMb2dnZXIgZm9yIGRlYnVnZ2luZy5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG52YXIgSHViID0gZnVuY3Rpb24gKGRlYnVnKSB7XHJcbiAgdGhpcy5kZWJ1ZyA9IGRlYnVnO1xyXG4gIHRoaXMuY29uZmlnID0ge307XHJcbiAgdGhpcy5hcHBzID0ge307XHJcbiAgdGhpcy5yb3V0ZXMgPSB7fTtcclxuXHJcbiAgdXRpbC5oYW5kbGVFdmVudHModGhpcyk7XHJcbiAgdGhpcy5vbignY29uZmlnJywgZnVuY3Rpb24gKGNvbmZpZykge1xyXG4gICAgdXRpbC5taXhpbih0aGlzLmNvbmZpZywgY29uZmlnKTtcclxuICB9LmJpbmQodGhpcykpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEhhbmRsZSBhbiBpbmNvbWluZyBtZXNzYWdlIGZyb20gYSBmcmVlZG9tIGFwcC5cclxuICogQG1ldGhvZCBvbk1lc3NhZ2VcclxuICogQHBhcmFtIHtTdHJpbmd9IHNvdXJjZSBUaGUgaWRlbnRpZml5aW5nIHNvdXJjZSBvZiB0aGUgbWVzc2FnZS5cclxuICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2UgVGhlIHNlbnQgbWVzc2FnZS5cclxuICovXHJcbkh1Yi5wcm90b3R5cGUub25NZXNzYWdlID0gZnVuY3Rpb24gKHNvdXJjZSwgbWVzc2FnZSkge1xyXG4gIHZhciBkZXN0aW5hdGlvbiA9IHRoaXMucm91dGVzW3NvdXJjZV0sIHR5cGU7XHJcbiAgaWYgKCFkZXN0aW5hdGlvbiB8fCAhZGVzdGluYXRpb24uYXBwKSB7XHJcbiAgICB0aGlzLmRlYnVnLndhcm4oXCJNZXNzYWdlIGRyb3BwZWQgZnJvbSB1bnJlZ2lzdGVyZWQgc291cmNlIFwiICsgc291cmNlKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmICghdGhpcy5hcHBzW2Rlc3RpbmF0aW9uLmFwcF0pIHtcclxuICAgIHRoaXMuZGVidWcud2FybihcIk1lc3NhZ2UgZHJvcHBlZCB0byBkZXN0aW5hdGlvbiBcIiArIGRlc3RpbmF0aW9uLmFwcCk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBUaGUgZmlyZWhvc2UgdHJhY2luZyBhbGwgaW50ZXJuYWwgZnJlZWRvbS5qcyBtZXNzYWdlcy5cclxuICBpZiAoIW1lc3NhZ2UucXVpZXQgJiYgIWRlc3RpbmF0aW9uLnF1aWV0ICYmIHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLnRyYWNlKSB7XHJcbiAgICB0eXBlID0gbWVzc2FnZS50eXBlO1xyXG4gICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ21lc3NhZ2UnICYmIG1lc3NhZ2UubWVzc2FnZSAmJlxyXG4gICAgICAgIG1lc3NhZ2UubWVzc2FnZS5hY3Rpb24gPT09ICdtZXRob2QnKSB7XHJcbiAgICAgIHR5cGUgPSAnbWV0aG9kLicgKyBtZXNzYWdlLm1lc3NhZ2UudHlwZTtcclxuICAgIH0gZWxzZSBpZiAobWVzc2FnZS50eXBlID09PSAnbWV0aG9kJyAmJiBtZXNzYWdlLm1lc3NhZ2UgJiZcclxuICAgICAgICBtZXNzYWdlLm1lc3NhZ2UudHlwZSA9PT0gJ21ldGhvZCcpIHtcclxuICAgICAgdHlwZSA9ICdyZXR1cm4uJyArIG1lc3NhZ2UubWVzc2FnZS5uYW1lO1xyXG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLnR5cGUgPT09ICdtZXNzYWdlJyAmJiBtZXNzYWdlLm1lc3NhZ2UgJiZcclxuICAgICAgICBtZXNzYWdlLm1lc3NhZ2UudHlwZSA9PT0gJ2V2ZW50Jykge1xyXG4gICAgICB0eXBlID0gJ2V2ZW50LicgKyBtZXNzYWdlLm1lc3NhZ2UubmFtZTtcclxuICAgIH1cclxuICAgIHRoaXMuZGVidWcuZGVidWcodGhpcy5hcHBzW2Rlc3RpbmF0aW9uLnNvdXJjZV0udG9TdHJpbmcoKSArXHJcbiAgICAgICAgXCIgLVwiICsgdHlwZSArIFwiLT4gXCIgK1xyXG4gICAgICAgIHRoaXMuYXBwc1tkZXN0aW5hdGlvbi5hcHBdLnRvU3RyaW5nKCkgKyBcIi5cIiArIGRlc3RpbmF0aW9uLmZsb3cpO1xyXG4gIH1cclxuXHJcbiAgdGhpcy5hcHBzW2Rlc3RpbmF0aW9uLmFwcF0ub25NZXNzYWdlKGRlc3RpbmF0aW9uLmZsb3csIG1lc3NhZ2UpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEdldCB0aGUgbG9jYWwgZGVzdGluYXRpb24gcG9ydCBvZiBhIGZsb3cuXHJcbiAqIEBtZXRob2QgZ2V0RGVzdGluYXRpb25cclxuICogQHBhcmFtIHtTdHJpbmd9IHNvdXJjZSBUaGUgZmxvdyB0byByZXRyaWV2ZS5cclxuICogQHJldHVybiB7UG9ydH0gVGhlIGRlc3RpbmF0aW9uIHBvcnQuXHJcbiAqL1xyXG5IdWIucHJvdG90eXBlLmdldERlc3RpbmF0aW9uID0gZnVuY3Rpb24gKHNvdXJjZSkge1xyXG4gIHZhciBkZXN0aW5hdGlvbiA9IHRoaXMucm91dGVzW3NvdXJjZV07XHJcbiAgaWYgKCFkZXN0aW5hdGlvbikge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIHJldHVybiB0aGlzLmFwcHNbZGVzdGluYXRpb24uYXBwXTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBHZXQgdGhlIGxvY2FsIHNvdXJjZSBwb3J0IG9mIGEgZmxvdy5cclxuICogQG1ldGhvZCBnZXRTb3VyY2VcclxuICogQHBhcmFtIHtQb3J0fSBzb3VyY2UgVGhlIGZsb3cgaWRlbnRpZmllciB0byByZXRyaWV2ZS5cclxuICogQHJldHVybiB7UG9ydH0gVGhlIHNvdXJjZSBwb3J0LlxyXG4gKi9cclxuSHViLnByb3RvdHlwZS5nZXRTb3VyY2UgPSBmdW5jdGlvbiAoc291cmNlKSB7XHJcbiAgaWYgKCFzb3VyY2UpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgaWYgKCF0aGlzLmFwcHNbc291cmNlLmlkXSkge1xyXG4gICAgdGhpcy5kZWJ1Zy53YXJuKFwiTm8gcmVnaXN0ZXJlZCBzb3VyY2UgJ1wiICsgc291cmNlLmlkICsgXCInXCIpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICByZXR1cm4gdGhpcy5hcHBzW3NvdXJjZS5pZF07XHJcbn07XHJcblxyXG4vKipcclxuICogUmVnaXN0ZXIgYSBkZXN0aW5hdGlvbiBmb3IgbWVzc2FnZXMgd2l0aCB0aGlzIGh1Yi5cclxuICogQG1ldGhvZCByZWdpc3RlclxyXG4gKiBAcGFyYW0ge1BvcnR9IGFwcCBUaGUgUG9ydCB0byByZWdpc3Rlci5cclxuICogQHBhcmFtIHtCb29sZWFufSBbZm9yY2VdIFdoZXRoZXIgdG8gb3ZlcnJpZGUgYW4gZXhpc3RpbmcgcG9ydC5cclxuICogQHJldHVybiB7Qm9vbGVhbn0gV2hldGhlciB0aGUgYXBwIHdhcyByZWdpc3RlcmVkLlxyXG4gKi9cclxuSHViLnByb3RvdHlwZS5yZWdpc3RlciA9IGZ1bmN0aW9uIChhcHAsIGZvcmNlKSB7XHJcbiAgaWYgKCF0aGlzLmFwcHNbYXBwLmlkXSB8fCBmb3JjZSkge1xyXG4gICAgdGhpcy5hcHBzW2FwcC5pZF0gPSBhcHA7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBEZXJlZ2lzdGVyIGEgZGVzdGluYXRpb24gZm9yIG1lc3NhZ2VzIHdpdGggdGhlIGh1Yi5cclxuICogTm90ZTogZG9lcyBub3QgcmVtb3ZlIGFzc29jaWF0ZWQgcm91dGVzLiBBcyBzdWNoLCBkZXJlZ2lzdGVyaW5nIHdpbGxcclxuICogcHJldmVudCB0aGUgaW5zdGFsbGF0aW9uIG9mIG5ldyByb3V0ZXMsIGJ1dCB3aWxsIG5vdCBkaXN0cnVwdCBleGlzdGluZ1xyXG4gKiBodWIgcm91dGVzLlxyXG4gKiBAbWV0aG9kIGRlcmVnaXN0ZXJcclxuICogQHBhcmFtIHtQb3J0fSBhcHAgVGhlIFBvcnQgdG8gZGVyZWdpc3RlclxyXG4gKiBAcmV0dXJuIHtCb29sZWFufSBXaGV0aGVyIHRoZSBhcHAgd2FzIGRlcmVnaXN0ZXJlZC5cclxuICovXHJcbkh1Yi5wcm90b3R5cGUuZGVyZWdpc3RlciA9IGZ1bmN0aW9uIChhcHApIHtcclxuICBpZiAoIXRoaXMuYXBwc1thcHAuaWRdKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGRlbGV0ZSB0aGlzLmFwcHNbYXBwLmlkXTtcclxuICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBJbnN0YWxsIGEgbmV3IHJvdXRlIGluIHRoZSBodWIuXHJcbiAqIEBtZXRob2QgaW5zdGFsbFxyXG4gKiBAcGFyYW0ge1BvcnR9IHNvdXJjZSBUaGUgc291cmNlIG9mIHRoZSByb3V0ZS5cclxuICogQHBhcmFtIHtQb3J0fSBkZXN0aW5hdGlvbiBUaGUgZGVzdGluYXRpb24gb2YgdGhlIHJvdXRlLlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZmxvdyBUaGUgZmxvdyB3aGVyZSB0aGUgZGVzdGluYXRpb24gd2lsbCByZWNlaXZlIG1lc3NhZ2VzLlxyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHF1aWV0IFdoZXRoZXIgbWVzc2FnZXMgb24gdGhpcyByb3V0ZSBzaG91bGQgYmUgc3VwcHJlc3NlZC5cclxuICogQHJldHVybiB7U3RyaW5nfSBBIHJvdXRpbmcgc291cmNlIGlkZW50aWZpZXIgZm9yIHNlbmRpbmcgbWVzc2FnZXMuXHJcbiAqL1xyXG5IdWIucHJvdG90eXBlLmluc3RhbGwgPSBmdW5jdGlvbiAoc291cmNlLCBkZXN0aW5hdGlvbiwgZmxvdywgcXVpZXQpIHtcclxuICBzb3VyY2UgPSB0aGlzLmdldFNvdXJjZShzb3VyY2UpO1xyXG4gIGlmICghc291cmNlKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmICghZGVzdGluYXRpb24pIHtcclxuICAgIHRoaXMuZGVidWcud2FybihcIlVud2lsbGluZyB0byBnZW5lcmF0ZSBibGFja2hvbGUgZmxvdyBmcm9tIFwiICsgc291cmNlLmlkKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHZhciByb3V0ZSA9IHRoaXMuZ2VuZXJhdGVSb3V0ZSgpO1xyXG4gIHRoaXMucm91dGVzW3JvdXRlXSA9IHtcclxuICAgIGFwcDogZGVzdGluYXRpb24sXHJcbiAgICBmbG93OiBmbG93LFxyXG4gICAgc291cmNlOiBzb3VyY2UuaWQsXHJcbiAgICBxdWlldDogcXVpZXRcclxuICB9O1xyXG4gIGlmICh0eXBlb2Ygc291cmNlLm9uID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICBzb3VyY2Uub24ocm91dGUsIHRoaXMub25NZXNzYWdlLmJpbmQodGhpcywgcm91dGUpKTtcclxuICB9XHJcblxyXG4gIHJldHVybiByb3V0ZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBVbmluc3RhbGwgYSBodWIgcm91dGUuXHJcbiAqIEBtZXRob2QgdW5pbnN0YWxsXHJcbiAqIEBwYXJhbSB7UG9ydH0gc291cmNlIFRoZSBzb3VyY2Ugb2YgdGhlIHJvdXRlLlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZmxvdyBUaGUgcm91dGUgdG8gdW5pbnN0YWxsLlxyXG4gKiBAcmV0dXJuIHtCb29sZWFufSBXaGV0aGVyIHRoZSByb3V0ZSB3YXMgYWJsZSB0byBiZSB1bmluc3RhbGxlZC5cclxuICovXHJcbkh1Yi5wcm90b3R5cGUudW5pbnN0YWxsID0gZnVuY3Rpb24gKHNvdXJjZSwgZmxvdykge1xyXG4gIHNvdXJjZSA9IHRoaXMuZ2V0U291cmNlKHNvdXJjZSk7XHJcbiAgaWYgKCFzb3VyY2UpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHZhciByb3V0ZSA9IHRoaXMucm91dGVzW2Zsb3ddO1xyXG4gIGlmICghcm91dGUpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9IGVsc2UgaWYgKHJvdXRlLnNvdXJjZSAhPT0gc291cmNlLmlkKSB7XHJcbiAgICB0aGlzLmRlYnVnLndhcm4oXCJGbG93IFwiICsgZmxvdyArIFwiIGRvZXMgbm90IGJlbG9uZyB0byBwb3J0IFwiICsgc291cmNlLmlkKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZSB0aGlzLnJvdXRlc1tmbG93XTtcclxuICBpZiAodHlwZW9mIHNvdXJjZS5vZmYgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIHNvdXJjZS5vZmYocm91dGUpO1xyXG4gIH1cclxuICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgYWxsIGxpc3RlbmVycyBhbmQgbm90aWZ5IGFsbCBjb25uZWN0ZWQgZGVzdGluYXRpb25zIG9mIHRoZWlyIHJlbW92YWwuXHJcbiAqIEBtZXRob2QgdGVhcmRvd25cclxuICovXHJcbkh1Yi5wcm90b3R5cGUudGVhcmRvd24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgdXRpbC5lYWNoUHJvcCh0aGlzLmFwcHMsIGZ1bmN0aW9uIChzb3VyY2UpIHtcclxuICAgIGlmICh0eXBlb2Ygc291cmNlLm9mZiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBzb3VyY2Uub2ZmKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgdGhpcy5hcHBzID0ge307XHJcbiAgdGhpcy5yb3V0ZXMgPSB7fTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBHZW5lcmF0ZSBhIHVuaXF1ZSByb3V0aW5nIGlkZW50aWZpZXIuXHJcbiAqIEBtZXRob2QgZ2VuZXJhdGVSb3V0ZVxyXG4gKiBAcmV0dXJuIHtTdHJpbmd9IGEgcm91dGluZyBzb3VyY2UgaWRlbnRpZmllci5cclxuICogQHByaXZhdGVcclxuICovXHJcbkh1Yi5wcm90b3R5cGUuZ2VuZXJhdGVSb3V0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gdXRpbC5nZXRJZCgpO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBIdWI7XHJcbiIsIi8qanNsaW50IGluZGVudDoyLCBub2RlOnRydWUsIHNsb3BweTp0cnVlICovXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG4vKipcbiAqIEEgbGluayBjb25uZWN0cyB0d28gZnJlZWRvbSBodWJzLiBUaGlzIGlzIGFuIGFic3RyYWN0IGNsYXNzXG4gKiBwcm92aWRpbmcgY29tbW9uIGZ1bmN0aW9uYWxpdHkgb2YgdHJhbnNsYXRpbmcgY29udHJvbCBjaGFubmVscyxcbiAqIGFuZCBpbnRlZ3JhdGluZyBjb25maWcgaW5mb3JtYXRpb24uXG4gKiBAY2xhc3MgTGlua1xuICogQGltcGxlbWVudHMgUG9ydFxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnZhciBMaW5rID0gZnVuY3Rpb24gKG5hbWUsIHJlc291cmNlKSB7XG4gIHRoaXMuaWQgPSAnTGluaycgKyBNYXRoLnJhbmRvbSgpO1xuICB0aGlzLm5hbWUgPSBuYW1lO1xuICB0aGlzLnJlc291cmNlID0gcmVzb3VyY2U7XG4gIHRoaXMuY29uZmlnID0ge307XG4gIHRoaXMuc3JjID0gbnVsbDtcblxuICB1dGlsLmhhbmRsZUV2ZW50cyh0aGlzKTtcbiAgdXRpbC5taXhpbih0aGlzLCBMaW5rLnByb3RvdHlwZSk7XG59O1xuXG4vKipcbiAqIFJlY2VpdmUgbWVzc2FnZXMgZnJvbSB0aGUgaHViIHRvIHRoaXMgcG9ydC5cbiAqIE1hbmFnZXMgc3RhcnR1cCwgYW5kIHBhc3NlcyBvdGhlcnMgdG8gJ2RlbGl2ZXJNZXNzYWdlJyBpbXBsZW1lbnRlZFxuICogaW4gZGVyaXZlZCBjbGFzc2VzLlxuICogQG1ldGhvZCBvbk1lc3NhZ2VcbiAqIEBwYXJhbSB7U3RyaW5nfSBmbG93IHRoZSBjaGFubmVsL2Zsb3cgb2YgdGhlIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gbWVzc2FnZSBUaGUgTWVzc2FnZS5cbiAqL1xuTGluay5wcm90b3R5cGUub25NZXNzYWdlID0gZnVuY3Rpb24gKGZsb3csIG1lc3NhZ2UpIHtcbiAgaWYgKGZsb3cgPT09ICdjb250cm9sJyAmJiAhdGhpcy5jb250cm9sQ2hhbm5lbCkge1xuICAgIGlmICghdGhpcy5jb250cm9sQ2hhbm5lbCAmJiBtZXNzYWdlLmNoYW5uZWwpIHtcbiAgICAgIHRoaXMuY29udHJvbENoYW5uZWwgPSBtZXNzYWdlLmNoYW5uZWw7XG4gICAgICB1dGlsLm1peGluKHRoaXMuY29uZmlnLCBtZXNzYWdlLmNvbmZpZyk7XG4gICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRoaXMuZGVsaXZlck1lc3NhZ2UoZmxvdywgbWVzc2FnZSk7XG4gIH1cbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgYSBoYW5kbGVyIHRvIGFsZXJ0IG9mIGVycm9ycyBvbiB0aGlzIHBvcnQuXG4gKiBAbWV0aG9kIGFkZEVycm9ySGFuZGxlclxuICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlciBNZXRob2QgdG8gY2FsbCB3aXRoIGVycm9ycy5cbiAqL1xuTGluay5wcm90b3R5cGUuYWRkRXJyb3JIYW5kbGVyID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgdGhpcy5vbkVycm9yID0gaGFuZGxlcjtcbn07XG5cbi8qKlxuICogUmVwb3J0IGFuIGVycm9yIG9uIHRoaXMgbGluay5cbiAqIEBtZXRob2Qgb25lcnJvclxuICogQHBhcmFtIHtFcnJvcn0gZXJyIFRoZSBlcnJvciB0aGF0IG9jY3VycmVkLlxuICovXG5MaW5rLnByb3RvdHlwZS5vbkVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAvL0ZpbGxlZCBpbiBieSBhZGRFcnJvckhhbmRsZXJcbn07XG5cbi8qKlxuICogRW1pdCBtZXNzYWdlcyB0byB0aGUgdGhlIGh1YiwgbWFwcGluZyBjb250cm9sIGNoYW5uZWxzLlxuICogQG1ldGhvZCBlbWl0TWVzc2FnZVxuICogQHBhcmFtIHtTdHJpbmd9IGZsb3cgdGhlIGZsb3cgdG8gZW1pdCB0aGUgbWVzc2FnZSBvbi5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzZ2FlIFRoZSBtZXNzYWdlIHRvIGVtaXQuXG4gKi9cbkxpbmsucHJvdG90eXBlLmVtaXRNZXNzYWdlID0gZnVuY3Rpb24gKGZsb3csIG1lc3NhZ2UpIHtcbiAgaWYgKGZsb3cgPT09ICdjb250cm9sJyAmJiB0aGlzLmNvbnRyb2xDaGFubmVsKSB7XG4gICAgZmxvdyA9IHRoaXMuY29udHJvbENoYW5uZWw7XG4gIH1cbiAgdGhpcy5lbWl0KGZsb3csIG1lc3NhZ2UpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMaW5rO1xuIiwiLypnbG9iYWxzIFdvcmtlciAqL1xuLypqc2xpbnQgaW5kZW50OjIsIHdoaXRlOnRydWUsIG5vZGU6dHJ1ZSwgc2xvcHB5OnRydWUsIGJyb3dzZXI6dHJ1ZSAqL1xudmFyIExpbmsgPSByZXF1aXJlKCcuLi9saW5rJyk7XG5cbi8qKlxuICogQSBwb3J0IHByb3ZpZGluZyBtZXNzYWdlIHRyYW5zcG9ydCBiZXR3ZWVuIHR3byBmcmVlZG9tIGNvbnRleHRzIHZpYSBXb3JrZXIuXG4gKiBAY2xhc3MgV29ya2VyXG4gKiBAZXh0ZW5kcyBMaW5rXG4gKiBAdXNlcyBoYW5kbGVFdmVudHNcbiAqIEBjb25zdHJ1Y3RvclxuICovXG52YXIgV29ya2VyTGluayA9IGZ1bmN0aW9uKGlkLCByZXNvdXJjZSkge1xuICBMaW5rLmNhbGwodGhpcywgaWQsIHJlc291cmNlKTtcbiAgaWYgKGlkKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICB9XG59O1xuXG4vKipcbiAqIFN0YXJ0IHRoaXMgcG9ydCBieSBsaXN0ZW5pbmcgb3IgY3JlYXRpbmcgYSB3b3JrZXIuXG4gKiBAbWV0aG9kIHN0YXJ0XG4gKiBAcHJpdmF0ZVxuICovXG5Xb3JrZXJMaW5rLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5jb25maWcubW9kdWxlQ29udGV4dCkge1xuICAgIHRoaXMuc2V0dXBMaXN0ZW5lcigpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuc2V0dXBXb3JrZXIoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBTdG9wIHRoaXMgcG9ydCBieSBkZXN0cm95aW5nIHRoZSB3b3JrZXIuXG4gKiBAbWV0aG9kIHN0b3BcbiAqIEBwcml2YXRlXG4gKi9cbldvcmtlckxpbmsucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbigpIHtcbiAgLy8gRnVuY3Rpb24gaXMgZGV0ZXJtaW5lZCBieSBzZXR1cExpc3RlbmVyIG9yIHNldHVwRnJhbWUgYXMgYXBwcm9wcmlhdGUuXG59O1xuXG4vKipcbiAqIEdldCB0aGUgdGV4dHVhbCBkZXNjcmlwdGlvbiBvZiB0aGlzIHBvcnQuXG4gKiBAbWV0aG9kIHRvU3RyaW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHRoZSBkZXNjcmlwdGlvbiBvZiB0aGlzIHBvcnQuXG4gKi9cbldvcmtlckxpbmsucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBcIltXb3JrZXIgXCIgKyB0aGlzLmlkICsgXCJdXCI7XG59O1xuXG4vKipcbiAqIFNldCB1cCBhIGdsb2JhbCBsaXN0ZW5lciB0byBoYW5kbGUgaW5jb21pbmcgbWVzc2FnZXMgdG8gdGhpc1xuICogZnJlZWRvbS5qcyBjb250ZXh0LlxuICogQG1ldGhvZCBzZXR1cExpc3RlbmVyXG4gKi9cbldvcmtlckxpbmsucHJvdG90eXBlLnNldHVwTGlzdGVuZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG9uTXNnID0gZnVuY3Rpb24obXNnKSB7XG4gICAgdGhpcy5lbWl0TWVzc2FnZShtc2cuZGF0YS5mbG93LCBtc2cuZGF0YS5tZXNzYWdlKTtcbiAgfS5iaW5kKHRoaXMpO1xuICB0aGlzLm9iaiA9IHRoaXMuY29uZmlnLmdsb2JhbDtcbiAgdGhpcy5vYmouYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uTXNnLCB0cnVlKTtcbiAgdGhpcy5zdG9wID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5vYmoucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uTXNnLCB0cnVlKTtcbiAgICBkZWxldGUgdGhpcy5vYmo7XG4gIH07XG4gIHRoaXMuZW1pdCgnc3RhcnRlZCcpO1xuICB0aGlzLm9iai5wb3N0TWVzc2FnZShcIlJlYWR5IEZvciBNZXNzYWdlc1wiKTtcbn07XG5cbi8qKlxuICogU2V0IHVwIGEgd29ya2VyIHdpdGggYW4gaXNvbGF0ZWQgZnJlZWRvbS5qcyBjb250ZXh0IGluc2lkZS5cbiAqIEBtZXRob2Qgc2V0dXBXb3JrZXJcbiAqL1xuV29ya2VyTGluay5wcm90b3R5cGUuc2V0dXBXb3JrZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHdvcmtlcixcbiAgICBibG9iLFxuICAgIHNlbGYgPSB0aGlzO1xuICB3b3JrZXIgPSBuZXcgV29ya2VyKHRoaXMuY29uZmlnLnNvdXJjZSArICcjJyArIHRoaXMuaWQpO1xuXG4gIHdvcmtlci5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGZ1bmN0aW9uKGVycikge1xuICAgIHRoaXMub25FcnJvcihlcnIpO1xuICB9LmJpbmQodGhpcyksIHRydWUpO1xuICB3b3JrZXIuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uKHdvcmtlciwgbXNnKSB7XG4gICAgaWYgKCF0aGlzLm9iaikge1xuICAgICAgdGhpcy5vYmogPSB3b3JrZXI7XG4gICAgICB0aGlzLmVtaXQoJ3N0YXJ0ZWQnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5lbWl0TWVzc2FnZShtc2cuZGF0YS5mbG93LCBtc2cuZGF0YS5tZXNzYWdlKTtcbiAgfS5iaW5kKHRoaXMsIHdvcmtlciksIHRydWUpO1xuICB0aGlzLnN0b3AgPSBmdW5jdGlvbigpIHtcbiAgICB3b3JrZXIudGVybWluYXRlKCk7XG4gICAgaWYgKHRoaXMub2JqKSB7XG4gICAgICBkZWxldGUgdGhpcy5vYmo7XG4gICAgfVxuICB9O1xufTtcblxuLyoqXG4gKiBSZWNlaXZlIG1lc3NhZ2VzIGZyb20gdGhlIGh1YiB0byB0aGlzIHBvcnQuXG4gKiBSZWNlaXZlZCBtZXNzYWdlcyB3aWxsIGJlIGVtaXR0ZWQgZnJvbSB0aGUgb3RoZXIgc2lkZSBvZiB0aGUgcG9ydC5cbiAqIEBtZXRob2QgZGVsaXZlck1lc3NhZ2VcbiAqIEBwYXJhbSB7U3RyaW5nfSBmbG93IHRoZSBjaGFubmVsL2Zsb3cgb2YgdGhlIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gbWVzc2FnZSBUaGUgTWVzc2FnZS5cbiAqL1xuV29ya2VyTGluay5wcm90b3R5cGUuZGVsaXZlck1lc3NhZ2UgPSBmdW5jdGlvbihmbG93LCBtZXNzYWdlKSB7XG4gIGlmIChmbG93ID09PSAnY29udHJvbCcgJiYgbWVzc2FnZS50eXBlID09PSAnY2xvc2UnICYmXG4gICAgICBtZXNzYWdlLmNoYW5uZWwgPT09ICdjb250cm9sJykge1xuICAgIHRoaXMuc3RvcCgpO1xuICB9IGVsc2Uge1xuICAgIGlmICh0aGlzLm9iaikge1xuICAgICAgdGhpcy5vYmoucG9zdE1lc3NhZ2Uoe1xuICAgICAgICBmbG93OiBmbG93LFxuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vbmNlKCdzdGFydGVkJywgdGhpcy5vbk1lc3NhZ2UuYmluZCh0aGlzLCBmbG93LCBtZXNzYWdlKSk7XG4gICAgfVxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdvcmtlckxpbms7XG5cbiIsIi8qanNsaW50IGluZGVudDoyLG5vZGU6dHJ1ZSxzbG9wcHk6dHJ1ZSAqL1xudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcbnZhciBNb2R1bGVJbnRlcm5hbCA9IHJlcXVpcmUoJy4vbW9kdWxlaW50ZXJuYWwnKTtcblxuLyoqXG4gKiBBIGZyZWVkb20gcG9ydCB3aGljaCBtYW5hZ2VzIHRoZSBjb250cm9sIHBsYW5lIG9mIG9mIGNoYW5naW5nIGh1YiByb3V0ZXMuXG4gKiBAY2xhc3MgTWFuYWdlclxuICogQGltcGxlbWVudHMgUG9ydFxuICogQHBhcmFtIHtIdWJ9IGh1YiBUaGUgcm91dGluZyBodWIgdG8gY29udHJvbC5cbiAqIEBwYXJhbSB7UmVzb3VyY2V9IHJlc291cmNlIFRoZSByZXNvdXJjZSBtYW5hZ2VyIGZvciB0aGUgcnVudGltZS5cbiAqIEBwYXJhbSB7QXBpfSBhcGkgVGhlIEFQSSBtYW5hZ2VyIGZvciB0aGUgcnVudGltZS5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG52YXIgTWFuYWdlciA9IGZ1bmN0aW9uIChodWIsIHJlc291cmNlLCBhcGkpIHtcbiAgdGhpcy5pZCA9ICdjb250cm9sJztcbiAgdGhpcy5jb25maWcgPSB7fTtcbiAgdGhpcy5jb250cm9sRmxvd3MgPSB7fTtcbiAgdGhpcy5kYXRhRmxvd3MgPSB7fTtcbiAgdGhpcy5kYXRhRmxvd3NbdGhpcy5pZF0gPSBbXTtcbiAgdGhpcy5yZXZlcnNlRmxvd01hcCA9IHt9O1xuXG4gIHRoaXMuZGVidWcgPSBodWIuZGVidWc7XG4gIHRoaXMuaHViID0gaHViO1xuICB0aGlzLnJlc291cmNlID0gcmVzb3VyY2U7XG4gIHRoaXMuYXBpID0gYXBpO1xuXG4gIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuICB0aGlzLnRvRGVsZWdhdGUgPSB7fTtcblxuICB0aGlzLmh1Yi5vbignY29uZmlnJywgZnVuY3Rpb24gKGNvbmZpZykge1xuICAgIHV0aWwubWl4aW4odGhpcy5jb25maWcsIGNvbmZpZyk7XG4gICAgdGhpcy5lbWl0KCdjb25maWcnKTtcbiAgfS5iaW5kKHRoaXMpKTtcblxuICB1dGlsLmhhbmRsZUV2ZW50cyh0aGlzKTtcbiAgdGhpcy5odWIucmVnaXN0ZXIodGhpcyk7XG59O1xuXG4vKipcbiAqIFByb3ZpZGUgYSB0ZXh0dWFsIGRlc2NyaXB0aW9uIG9mIHRoaXMgcG9ydC5cbiAqIEBtZXRob2QgdG9TdHJpbmdcbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIGRlc2NyaXB0aW9uIG9mIHRoaXMgcG9ydC5cbiAqL1xuTWFuYWdlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBcIltMb2NhbCBDb250cm9sbGVyXVwiO1xufTtcblxuLyoqXG4gKiBQcm9jZXNzIG1lc3NhZ2VzIHNlbnQgdG8gdGhpcyBwb3J0LlxuICogVGhlIG1hbmFnZXIsIG9yICdjb250cm9sJyBkZXN0aW5hdGlvbiBoYW5kbGVzIHNldmVyYWwgdHlwZXMgb2YgbWVzc2FnZXMsXG4gKiBpZGVudGlmaWVkIGJ5IHRoZSByZXF1ZXN0IHByb3BlcnR5LiAgVGhlIGFjdGlvbnMgYXJlOlxuICogMS4gZGVidWcuIFByaW50cyB0aGUgbWVzc2FnZSB0byB0aGUgY29uc29sZS5cbiAqIDIuIGxpbmsuIENyZWF0ZXMgYSBsaW5rIGJldHdlZW4gdGhlIHNvdXJjZSBhbmQgYSBwcm92aWRlZCBkZXN0aW5hdGlvbiBwb3J0LlxuICogMy4gZW52aXJvbm1lbnQuIEluc3RhbnRpYXRlIGEgbW9kdWxlIGVudmlyb25tZW50IGRlZmluZWQgaW4gTW9kdWxlSW50ZXJuYWwuXG4gKiA0LiBkZWxlZ2F0ZS4gUm91dGVzIGEgZGVmaW5lZCBzZXQgb2YgY29udHJvbCBtZXNzYWdlcyB0byBhbm90aGVyIGxvY2F0aW9uLlxuICogNS4gcmVzb3VyY2UuIFJlZ2lzdGVycyB0aGUgc291cmNlIGFzIGEgcmVzb3VyY2UgcmVzb2x2ZXIuXG4gKiA2LiBjb3JlLiBHZW5lcmF0ZXMgYSBjb3JlIHByb3ZpZGVyIGZvciB0aGUgcmVxdWVzdGVyLlxuICogNy4gY2xvc2UuIFRlYXJzIGRvd24gcm91dGVzIGludm9saW5nIHRoZSByZXF1ZXN0aW5nIHBvcnQuXG4gKiA4LiB1bmxpbmsuIFRlYXJzIGRvd24gYSByb3V0ZSBmcm9tIHRoZSByZXF1ZXN0aW5nIHBvcnQuXG4gKiBAbWV0aG9kIG9uTWVzc2FnZVxuICogQHBhcmFtIHtTdHJpbmd9IGZsb3cgVGhlIHNvdXJjZSBpZGVudGlmaWVyIG9mIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2UgVGhlIHJlY2VpdmVkIG1lc3NhZ2UuXG4gKi9cbk1hbmFnZXIucHJvdG90eXBlLm9uTWVzc2FnZSA9IGZ1bmN0aW9uIChmbG93LCBtZXNzYWdlKSB7XG4gIHZhciByZXZlcnNlRmxvdyA9IHRoaXMuY29udHJvbEZsb3dzW2Zsb3ddLCBvcmlnaW47XG4gIGlmICghcmV2ZXJzZUZsb3cpIHtcbiAgICB0aGlzLmRlYnVnLndhcm4oXCJVbmtub3duIG1lc3NhZ2Ugc291cmNlOiBcIiArIGZsb3cpO1xuICAgIHJldHVybjtcbiAgfVxuICBvcmlnaW4gPSB0aGlzLmh1Yi5nZXREZXN0aW5hdGlvbihyZXZlcnNlRmxvdyk7XG5cbiAgaWYgKHRoaXMuZGVsZWdhdGUgJiYgcmV2ZXJzZUZsb3cgIT09IHRoaXMuZGVsZWdhdGUgJiZcbiAgICAgIHRoaXMudG9EZWxlZ2F0ZVtmbG93XSkge1xuICAgIC8vIFNoaXAgb2ZmIHRvIHRoZSBkZWxlZ2VlXG4gICAgdGhpcy5lbWl0KHRoaXMuZGVsZWdhdGUsIHtcbiAgICAgIHR5cGU6ICdEZWxlZ2F0aW9uJyxcbiAgICAgIHJlcXVlc3Q6ICdoYW5kbGUnLFxuICAgICAgcXVpZXQ6IHRydWUsXG4gICAgICBmbG93OiBmbG93LFxuICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChtZXNzYWdlLnJlcXVlc3QgPT09ICdkZWJ1ZycpIHtcbiAgICB0aGlzLmRlYnVnLnByaW50KG1lc3NhZ2UpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChtZXNzYWdlLnJlcXVlc3QgPT09ICdsaW5rJykge1xuICAgIHRoaXMuY3JlYXRlTGluayhvcmlnaW4sIG1lc3NhZ2UubmFtZSwgbWVzc2FnZS50bywgbWVzc2FnZS5vdmVycmlkZURlc3QpO1xuICB9IGVsc2UgaWYgKG1lc3NhZ2UucmVxdWVzdCA9PT0gJ2Vudmlyb25tZW50Jykge1xuICAgIHRoaXMuY3JlYXRlTGluayhvcmlnaW4sIG1lc3NhZ2UubmFtZSwgbmV3IE1vZHVsZUludGVybmFsKHRoaXMpKTtcbiAgfSBlbHNlIGlmIChtZXNzYWdlLnJlcXVlc3QgPT09ICdkZWxlZ2F0ZScpIHtcbiAgICAvLyBJbml0YXRlIERlbGVnYXRpb24uXG4gICAgaWYgKHRoaXMuZGVsZWdhdGUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSByZXZlcnNlRmxvdztcbiAgICB9XG4gICAgdGhpcy50b0RlbGVnYXRlW21lc3NhZ2UuZmxvd10gPSB0cnVlO1xuICAgIHRoaXMuZW1pdCgnZGVsZWdhdGUnKTtcbiAgfSBlbHNlIGlmIChtZXNzYWdlLnJlcXVlc3QgPT09ICdyZXNvdXJjZScpIHtcbiAgICB0aGlzLnJlc291cmNlLmFkZFJlc29sdmVyKG1lc3NhZ2UuYXJnc1swXSk7XG4gICAgdGhpcy5yZXNvdXJjZS5hZGRSZXRyaWV2ZXIobWVzc2FnZS5zZXJ2aWNlLCBtZXNzYWdlLmFyZ3NbMV0pO1xuICB9IGVsc2UgaWYgKG1lc3NhZ2UucmVxdWVzdCA9PT0gJ2NvcmUnKSB7XG4gICAgaWYgKHRoaXMuY29yZSAmJiByZXZlcnNlRmxvdyA9PT0gdGhpcy5kZWxlZ2F0ZSkge1xuICAgICAgKG5ldyB0aGlzLmNvcmUoKSkub25NZXNzYWdlKG9yaWdpbiwgbWVzc2FnZS5tZXNzYWdlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5nZXRDb3JlKGZ1bmN0aW9uICh0bywgY29yZSkge1xuICAgICAgdGhpcy5odWIub25NZXNzYWdlKHRvLCB7XG4gICAgICAgIHR5cGU6ICdjb3JlJyxcbiAgICAgICAgY29yZTogY29yZVxuICAgICAgfSk7XG4gICAgfS5iaW5kKHRoaXMsIHJldmVyc2VGbG93KSk7XG4gIH0gZWxzZSBpZiAobWVzc2FnZS5yZXF1ZXN0ID09PSAnY2xvc2UnKSB7XG4gICAgdGhpcy5kZXN0cm95KG9yaWdpbik7XG4gIH0gZWxzZSBpZiAobWVzc2FnZS5yZXF1ZXN0ID09PSAndW5saW5rJykge1xuICAgIHRoaXMucmVtb3ZlTGluayhvcmlnaW4sIG1lc3NhZ2UudG8pO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuZGVidWcud2FybihcIlVua25vd24gY29udHJvbCByZXF1ZXN0OiBcIiArIG1lc3NhZ2UucmVxdWVzdCk7XG4gICAgdGhpcy5kZWJ1Zy5sb2coSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkpO1xuICAgIHJldHVybjtcbiAgfVxufTtcblxuLyoqXG4gKiBHZXQgdGhlIHBvcnQgbWVzc2FnZXMgd2lsbCBiZSByb3V0ZWQgdG8gZ2l2ZW4gaXRzIGlkLlxuICogQG1ldGhvZCBnZXRQb3J0XG4gKiBAcGFyYW0ge1N0cmluZ30gcG9ydElkIFRoZSBJRCBvZiB0aGUgcG9ydC5cbiAqIEByZXR1cm5zIHtmZG9tLlBvcnR9IFRoZSBwb3J0IHdpdGggdGhhdCBJRC5cbiAqL1xuTWFuYWdlci5wcm90b3R5cGUuZ2V0UG9ydCA9IGZ1bmN0aW9uIChwb3J0SWQpIHtcbiAgcmV0dXJuIHRoaXMuaHViLmdldERlc3RpbmF0aW9uKHRoaXMuY29udHJvbEZsb3dzW3BvcnRJZF0pO1xufTtcblxuLyoqXG4gKiBTZXQgdXAgYSBwb3J0IHdpdGggdGhlIGh1Yi5cbiAqIEBtZXRob2Qgc2V0dXBcbiAqIEBwYXJhbSB7UG9ydH0gcG9ydCBUaGUgcG9ydCB0byByZWdpc3Rlci5cbiAqL1xuTWFuYWdlci5wcm90b3R5cGUuc2V0dXAgPSBmdW5jdGlvbiAocG9ydCkge1xuICBpZiAoIXBvcnQuaWQpIHtcbiAgICB0aGlzLmRlYnVnLndhcm4oXCJSZWZ1c2luZyB0byBzZXR1cCB1bmlkZW50aWZpZWQgcG9ydCBcIik7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHRoaXMuY29udHJvbEZsb3dzW3BvcnQuaWRdKSB7XG4gICAgdGhpcy5kZWJ1Zy53YXJuKFwiUmVmdXNpbmcgdG8gcmUtaW5pdGlhbGl6ZSBwb3J0IFwiICsgcG9ydC5pZCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCF0aGlzLmNvbmZpZy5nbG9iYWwpIHtcbiAgICB0aGlzLm9uY2UoJ2NvbmZpZycsIHRoaXMuc2V0dXAuYmluZCh0aGlzLCBwb3J0KSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5odWIucmVnaXN0ZXIocG9ydCk7XG4gIHZhciBmbG93ID0gdGhpcy5odWIuaW5zdGFsbCh0aGlzLCBwb3J0LmlkLCBcImNvbnRyb2xcIiksXG4gICAgcmV2ZXJzZSA9IHRoaXMuaHViLmluc3RhbGwocG9ydCwgdGhpcy5pZCwgcG9ydC5pZCk7XG4gIHRoaXMuY29udHJvbEZsb3dzW3BvcnQuaWRdID0gZmxvdztcbiAgdGhpcy5kYXRhRmxvd3NbcG9ydC5pZF0gPSBbcmV2ZXJzZV07XG4gIHRoaXMucmV2ZXJzZUZsb3dNYXBbZmxvd10gPSByZXZlcnNlO1xuICB0aGlzLnJldmVyc2VGbG93TWFwW3JldmVyc2VdID0gZmxvdztcblxuICBpZiAocG9ydC5saW5lYWdlKSB7XG4gICAgdGhpcy5lbWl0KCdtb2R1bGVBZGQnLCB7aWQ6IHBvcnQuaWQsIGxpbmVhZ2U6IHBvcnQubGluZWFnZX0pO1xuICB9XG5cbiAgdGhpcy5odWIub25NZXNzYWdlKGZsb3csIHtcbiAgICB0eXBlOiAnc2V0dXAnLFxuICAgIGNoYW5uZWw6IHJldmVyc2UsXG4gICAgY29uZmlnOiB0aGlzLmNvbmZpZ1xuICB9KTtcblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogVGVhciBkb3duIGEgcG9ydCBvbiB0aGUgaHViLCBvciB0aGUgZnVsbCBsb2NhbCBodWIuXG4gKiBAbWV0aG9kIGRlc3Ryb3lcbiAqIEBhcHJhbSB7UG9ydD99IHBvcnQgVGhlIHBvcnQgdG8gdW5yZWdpc3Rlci5cbiAqL1xuTWFuYWdlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIChwb3J0KSB7XG4gIGlmICghcG9ydCkge1xuICAgIC8vIFRlYXIgZG93biBldmVyeXRoaW5nIVxuICAgIHV0aWwuZWFjaFByb3AodGhpcy5jb250cm9sRmxvd3MsIGZ1bmN0aW9uIChmbG93KSB7XG4gICAgICB0aGlzLmh1Yi5vbk1lc3NhZ2UoZmxvdywge1xuICAgICAgICB0eXBlOiAnY2xvc2UnXG4gICAgICB9KTtcbiAgICB9LmJpbmQodGhpcykpO1xuICAgIHRoaXMuaHViLnRlYXJkb3duKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFwb3J0LmlkKSB7XG4gICAgdGhpcy5kZWJ1Zy53YXJuKFwiVW5hYmxlIHRvIHRlYXIgZG93biB1bmlkZW50aWZpZWQgcG9ydFwiKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAocG9ydC5saW5lYWdlKSB7XG4gICAgdGhpcy5lbWl0KCdtb2R1bGVSZW1vdmUnLCB7aWQ6IHBvcnQuaWQsIGxpbmVhZ2U6IHBvcnQubGluZWFnZX0pO1xuICB9XG5cbiAgLy8gUmVtb3ZlIHRoZSBwb3J0LlxuICBkZWxldGUgdGhpcy5jb250cm9sRmxvd3NbcG9ydC5pZF07XG5cbiAgLy8gUmVtb3ZlIGFzc29jaWF0ZWQgbGlua3MuXG4gIHZhciBpO1xuICBmb3IgKGkgPSB0aGlzLmRhdGFGbG93c1twb3J0LmlkXS5sZW5ndGggLSAxOyBpID49IDA7IGkgLT0gMSkge1xuICAgIHRoaXMucmVtb3ZlTGluayhwb3J0LCB0aGlzLmRhdGFGbG93c1twb3J0LmlkXVtpXSk7XG4gIH1cblxuICAvLyBSZW1vdmUgdGhlIHBvcnQuXG4gIGRlbGV0ZSB0aGlzLmRhdGFGbG93c1twb3J0LmlkXTtcbiAgdGhpcy5odWIuZGVyZWdpc3Rlcihwb3J0KTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgbGluayBiZXR3ZWVuIHR3byBwb3J0cy4gIExpbmtzIGFyZSBjcmVhdGVkIGluIGJvdGggZGlyZWN0aW9ucyxcbiAqIGFuZCBhIG1lc3NhZ2Ugd2l0aCB0aG9zZSBjYXBhYmlsaXRpZXMgaXMgc2VudCB0byB0aGUgc291cmNlIHBvcnQuXG4gKiBAbWV0aG9kIGNyZWF0ZUxpbmtcbiAqIEBwYXJhbSB7UG9ydH0gcG9ydCBUaGUgc291cmNlIHBvcnQuXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgZmxvdyBmb3IgbWVzc2FnZXMgZnJvbSBkZXN0aW5hdGlvbiB0byBwb3J0LlxuICogQHBhcmFtIHtQb3J0fSBkZXN0aW5hdGlvbiBUaGUgZGVzdGluYXRpb24gcG9ydC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBbZGVzdE5hbWVdIFRoZSBmbG93IG5hbWUgZm9yIG1lc3NhZ2VzIHRvIHRoZSBkZXN0aW5hdGlvbi5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW3RvRGVzdF0gVGVsbCB0aGUgZGVzdGluYXRpb24gYWJvdXQgdGhlIGxpbmsuXG4gKi9cbk1hbmFnZXIucHJvdG90eXBlLmNyZWF0ZUxpbmsgPSBmdW5jdGlvbiAocG9ydCwgbmFtZSwgZGVzdGluYXRpb24sIGRlc3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b0Rlc3QpIHtcbiAgaWYgKCF0aGlzLmNvbmZpZy5nbG9iYWwpIHtcbiAgICB0aGlzLm9uY2UoJ2NvbmZpZycsXG4gICAgICB0aGlzLmNyZWF0ZUxpbmsuYmluZCh0aGlzLCBwb3J0LCBuYW1lLCBkZXN0aW5hdGlvbiwgZGVzdE5hbWUpKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIXRoaXMuY29udHJvbEZsb3dzW3BvcnQuaWRdKSB7XG4gICAgdGhpcy5kZWJ1Zy53YXJuKCdVbndpbGxpbmcgdG8gbGluayBmcm9tIG5vbi1yZWdpc3RlcmVkIHNvdXJjZS4nKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIXRoaXMuY29udHJvbEZsb3dzW2Rlc3RpbmF0aW9uLmlkXSkge1xuICAgIGlmICh0aGlzLnNldHVwKGRlc3RpbmF0aW9uKSA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuZGVidWcud2FybignQ291bGQgbm90IGZpbmQgb3Igc2V0dXAgZGVzdGluYXRpb24uJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIHZhciBxdWlldCA9IGRlc3RpbmF0aW9uLnF1aWV0IHx8IGZhbHNlLFxuICAgIG91dGdvaW5nTmFtZSA9IGRlc3ROYW1lIHx8ICdkZWZhdWx0JyxcbiAgICBvdXRnb2luZyA9IHRoaXMuaHViLmluc3RhbGwocG9ydCwgZGVzdGluYXRpb24uaWQsIG91dGdvaW5nTmFtZSwgcXVpZXQpLFxuICAgIHJldmVyc2U7XG5cbiAgLy8gUmVjb3ZlciB0aGUgcG9ydCBzbyB0aGF0IGxpc3RlbmVycyBhcmUgaW5zdGFsbGVkLlxuICBkZXN0aW5hdGlvbiA9IHRoaXMuaHViLmdldERlc3RpbmF0aW9uKG91dGdvaW5nKTtcbiAgcmV2ZXJzZSA9IHRoaXMuaHViLmluc3RhbGwoZGVzdGluYXRpb24sIHBvcnQuaWQsIG5hbWUsIHF1aWV0KTtcblxuICB0aGlzLnJldmVyc2VGbG93TWFwW291dGdvaW5nXSA9IHJldmVyc2U7XG4gIHRoaXMuZGF0YUZsb3dzW3BvcnQuaWRdLnB1c2gob3V0Z29pbmcpO1xuICB0aGlzLnJldmVyc2VGbG93TWFwW3JldmVyc2VdID0gb3V0Z29pbmc7XG4gIHRoaXMuZGF0YUZsb3dzW2Rlc3RpbmF0aW9uLmlkXS5wdXNoKHJldmVyc2UpO1xuXG4gIGlmICh0b0Rlc3QpIHtcbiAgICB0aGlzLmh1Yi5vbk1lc3NhZ2UodGhpcy5jb250cm9sRmxvd3NbZGVzdGluYXRpb24uaWRdLCB7XG4gICAgICB0eXBlOiAnY3JlYXRlTGluaycsXG4gICAgICBuYW1lOiBvdXRnb2luZ05hbWUsXG4gICAgICBjaGFubmVsOiByZXZlcnNlLFxuICAgICAgcmV2ZXJzZTogb3V0Z29pbmdcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmh1Yi5vbk1lc3NhZ2UodGhpcy5jb250cm9sRmxvd3NbcG9ydC5pZF0sIHtcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICB0eXBlOiAnY3JlYXRlTGluaycsXG4gICAgICBjaGFubmVsOiBvdXRnb2luZyxcbiAgICAgIHJldmVyc2U6IHJldmVyc2VcbiAgICB9KTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZW1vdmUgYSBsaW5rIGJldHdlZW4gdG8gcG9ydHMuIFRoZSByZXZlcnNlIGxpbmsgd2lsbCBhbHNvIGJlIHJlbW92ZWQuXG4gKiBAbWV0aG9kIHJlbW92ZUxpbmtcbiAqIEBwYXJhbSB7UG9ydH0gcG9ydCBUaGUgc291cmNlIHBvcnQuXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgZmxvdyB0byBiZSByZW1vdmVkLlxuICovXG5NYW5hZ2VyLnByb3RvdHlwZS5yZW1vdmVMaW5rID0gZnVuY3Rpb24gKHBvcnQsIG5hbWUpIHtcbiAgdmFyIHJldmVyc2UgPSB0aGlzLmh1Yi5nZXREZXN0aW5hdGlvbihuYW1lKSxcbiAgICByZmxvdyA9IHRoaXMucmV2ZXJzZUZsb3dNYXBbbmFtZV0sXG4gICAgaTtcblxuICBpZiAoIXJldmVyc2UgfHwgIXJmbG93KSB7XG4gICAgdGhpcy5kZWJ1Zy53YXJuKFwiQ291bGQgbm90IGZpbmQgbWV0YWRhdGEgdG8gcmVtb3ZlIGZsb3c6IFwiICsgbmFtZSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHRoaXMuaHViLmdldERlc3RpbmF0aW9uKHJmbG93KS5pZCAhPT0gcG9ydC5pZCkge1xuICAgIHRoaXMuZGVidWcud2FybihcIlNvdXJjZSBwb3J0IGRvZXMgbm90IG93biBmbG93IFwiICsgbmFtZSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gTm90aWZ5IHBvcnRzIHRoYXQgYSBjaGFubmVsIGlzIGNsb3NpbmcuXG4gIGkgPSB0aGlzLmNvbnRyb2xGbG93c1twb3J0LmlkXTtcbiAgaWYgKGkpIHtcbiAgICB0aGlzLmh1Yi5vbk1lc3NhZ2UoaSwge1xuICAgICAgdHlwZTogJ2Nsb3NlJyxcbiAgICAgIGNoYW5uZWw6IG5hbWVcbiAgICB9KTtcbiAgfVxuICBpID0gdGhpcy5jb250cm9sRmxvd3NbcmV2ZXJzZS5pZF07XG4gIGlmIChpKSB7XG4gICAgdGhpcy5odWIub25NZXNzYWdlKGksIHtcbiAgICAgIHR5cGU6ICdjbG9zZScsXG4gICAgICBjaGFubmVsOiByZmxvd1xuICAgIH0pO1xuICB9XG5cbiAgLy8gVW5pbnN0YWxsIHRoZSBjaGFubmVsLlxuICB0aGlzLmh1Yi51bmluc3RhbGwocG9ydCwgbmFtZSk7XG4gIHRoaXMuaHViLnVuaW5zdGFsbChyZXZlcnNlLCByZmxvdyk7XG5cbiAgZGVsZXRlIHRoaXMucmV2ZXJzZUZsb3dNYXBbbmFtZV07XG4gIGRlbGV0ZSB0aGlzLnJldmVyc2VGbG93TWFwW3JmbG93XTtcbiAgdGhpcy5mb3JnZXRGbG93KHJldmVyc2UuaWQsIHJmbG93KTtcbiAgdGhpcy5mb3JnZXRGbG93KHBvcnQuaWQsIG5hbWUpO1xufTtcblxuLyoqXG4gKiBGb3JnZXQgdGhlIGZsb3cgZnJvbSBpZCB3aXRoIGEgZ2l2ZW4gbmFtZS5cbiAqIEBtZXRob2QgZm9yZ2V0Rmxvd1xuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBUaGUgcG9ydCBJRCBvZiB0aGUgc291cmNlLlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIGZsb3cgbmFtZS5cbiAqL1xuTWFuYWdlci5wcm90b3R5cGUuZm9yZ2V0RmxvdyA9IGZ1bmN0aW9uIChpZCwgbmFtZSkge1xuICB2YXIgaTtcbiAgaWYgKHRoaXMuZGF0YUZsb3dzW2lkXSkge1xuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmRhdGFGbG93c1tpZF0ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICh0aGlzLmRhdGFGbG93c1tpZF1baV0gPT09IG5hbWUpIHtcbiAgICAgICAgdGhpcy5kYXRhRmxvd3NbaWRdLnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEdldCB0aGUgY29yZSBmcmVlZG9tLmpzIEFQSSBhY3RpdmUgb24gdGhlIGN1cnJlbnQgaHViLlxuICogQG1ldGhvZCBnZXRDb3JlXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgQ2FsbGJhY2sgdG8gZmlyZSB3aXRoIHRoZSBjb3JlIG9iamVjdC5cbiAqL1xuTWFuYWdlci5wcm90b3R5cGUuZ2V0Q29yZSA9IGZ1bmN0aW9uIChjYikge1xuICBpZiAodGhpcy5jb3JlKSB7XG4gICAgY2IodGhpcy5jb3JlKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmFwaS5nZXRDb3JlKCdjb3JlJywgdGhpcykudGhlbihmdW5jdGlvbiAoY29yZSkge1xuICAgICAgdGhpcy5jb3JlID0gY29yZS5pbnN0O1xuICAgICAgY2IodGhpcy5jb3JlKTtcbiAgICB9LmJpbmQodGhpcyksIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTWFuYWdlcjtcbiIsIi8qanNsaW50IGluZGVudDoyLG5vZGU6dHJ1ZSxzbG9wcHk6dHJ1ZSAqL1xudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcbnZhciBQcm92aWRlciA9IHJlcXVpcmUoJy4vcHJvdmlkZXInKTtcblxuLyoqXG4gKiBUaGUgZXh0ZXJuYWwgUG9ydCBmYWNlIG9mIGEgbW9kdWxlIG9uIGEgaHViLlxuICogQGNsYXNzIE1vZHVsZVxuICogQGV4dGVuZHMgUG9ydFxuICogQHBhcmFtIHtTdHJpbmd9IG1hbmlmZXN0VVJMIFRoZSBtYW5pZmVzdCB0aGlzIG1vZHVsZSBsb2Fkcy5cbiAqIEBwYXJhbSB7U3RyaW5nW119IGNyZWF0b3IgVGhlIGxpbmVhZ2Ugb2YgY3JlYXRpb24gZm9yIHRoaXMgbW9kdWxlLlxuICogQHBhcmFtIHtQb2xpY3l9IFBvbGljeSBUaGUgcG9saWN5IGxvYWRlciBmb3IgZGVwZW5kZW5jaWVzLlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnZhciBNb2R1bGUgPSBmdW5jdGlvbiAobWFuaWZlc3RVUkwsIG1hbmlmZXN0LCBjcmVhdG9yLCBwb2xpY3kpIHtcbiAgdGhpcy5hcGkgPSBwb2xpY3kuYXBpO1xuICB0aGlzLnBvbGljeSA9IHBvbGljeTtcbiAgdGhpcy5yZXNvdXJjZSA9IHBvbGljeS5yZXNvdXJjZTtcbiAgdGhpcy5kZWJ1ZyA9IHBvbGljeS5kZWJ1ZztcblxuICB0aGlzLmNvbmZpZyA9IHt9O1xuXG4gIHRoaXMuaWQgPSBtYW5pZmVzdFVSTCArIE1hdGgucmFuZG9tKCk7XG4gIHRoaXMubWFuaWZlc3RJZCA9IG1hbmlmZXN0VVJMO1xuICB0aGlzLm1hbmlmZXN0ID0gbWFuaWZlc3Q7XG4gIHRoaXMubGluZWFnZSA9IFt0aGlzLm1hbmlmZXN0SWRdLmNvbmNhdChjcmVhdG9yKTtcblxuICB0aGlzLnF1aWV0ID0gdGhpcy5tYW5pZmVzdC5xdWlldCB8fCBmYWxzZTtcblxuICB0aGlzLmV4dGVybmFsUG9ydE1hcCA9IHt9O1xuICB0aGlzLmludGVybmFsUG9ydE1hcCA9IHt9O1xuICB0aGlzLmRlcGVuZGFudENoYW5uZWxzID0gW107XG4gIC8vIE1hcCBmcm9tIGRlcGVuZGVuY3kgbmFtZXMgdG8gdGFyZ2V0IFVSTHMsIGZyb20gdGhpcyBtb2R1bGUncyBtYW5pZmVzdC5cbiAgdGhpcy5kZXBlbmRlbmN5VXJscyA9IHt9O1xuICAvLyBNYXAgZnJvbSBkZXBlbmVuY3kgbmFtZXMgdG8gYXJyYXlzIG9mIHBlbmRpbmcgbWVzc2FnZXMuICBPbmNlIGFcbiAgLy8gZGVwZW5kZW5jeSBpcyBmdWxseSBzdGFydGVkLCB0aGUgcGVuZGluZyBtZXNzYWdlcyB3aWxsIGJlIGRyYWluZWQgYW5kIGl0c1xuICAvLyBlbnRyeSBpbiB0aGlzIG1hcCB3aWxsIGJlIGRlbGV0ZWQuXG4gIHRoaXMucGVuZGluZ01lc3NhZ2VzID0ge307XG4gIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICB0aGlzLmZhaWxlZCA9IGZhbHNlO1xuXG4gIHV0aWwuaGFuZGxlRXZlbnRzKHRoaXMpO1xufTtcblxuLyoqXG4gKiBSZWNlaXZlIGEgbWVzc2FnZSBmb3IgdGhlIE1vZHVsZS5cbiAqIEBtZXRob2Qgb25NZXNzYWdlXG4gKiBAcGFyYW0ge1N0cmluZ30gZmxvdyBUaGUgb3JpZ2luIG9mIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgcmVjZWl2ZWQuXG4gKi9cbk1vZHVsZS5wcm90b3R5cGUub25NZXNzYWdlID0gZnVuY3Rpb24gKGZsb3csIG1lc3NhZ2UpIHtcbiAgaWYgKHRoaXMuZmFpbGVkICYmIG1lc3NhZ2UudG8pIHtcbiAgICAvLyBXZSd2ZSBhdHRlbXB0ZWQgdG8gbG9hZCB0aGUgbW9kdWxlIGFuZCBmYWlsZWQsIHNvIHNob3J0LWNpcmN1aXQgYW55XG4gICAgLy8gbWVzc2FnZXMgYm91bmQgZm9yIHRoZSBwcm92aWRlciwgYW5kIHJlc3BvbmQgd2l0aCBhbiBlcnJvciByZXBseSBpbnN0ZWFkLlxuICAgIC8vIFRoaXMgZXJyb3IgaXMgaGFuZGxlZCBpbiBDb25zdW1lciwgcmVzdWx0aW5nIGluIHRyaWdnZXJpbmcgdGhlXG4gICAgLy8gZnJlZWRvbVsnbW9kdWxlTmFtZSddLm9uRXJyb3IgbGlzdGVuZXJzLlxuICAgIHRoaXMuZW1pdCh0aGlzLmV4dGVybmFsUG9ydE1hcFtmbG93XSwge1xuICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGZsb3cgPT09ICdjb250cm9sJykge1xuICAgIGlmIChtZXNzYWdlLnR5cGUgPT09ICdzZXR1cCcpIHtcbiAgICAgIHRoaXMuY29udHJvbENoYW5uZWwgPSBtZXNzYWdlLmNoYW5uZWw7XG4gICAgICB1dGlsLm1peGluKHRoaXMuY29uZmlnLCBtZXNzYWdlLmNvbmZpZyk7XG4gICAgICB0aGlzLmVtaXQodGhpcy5jb250cm9sQ2hhbm5lbCwge1xuICAgICAgICB0eXBlOiAnQ29yZSBQcm92aWRlcicsXG4gICAgICAgIHJlcXVlc3Q6ICdjb3JlJ1xuICAgICAgfSk7XG4gICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLnR5cGUgPT09ICdjcmVhdGVMaW5rJyAmJiBtZXNzYWdlLmNoYW5uZWwpIHtcbiAgICAgIHRoaXMuZGVidWcuZGVidWcodGhpcyArICdnb3QgY3JlYXRlIGxpbmsgZm9yICcgKyBtZXNzYWdlLm5hbWUpO1xuICAgICAgdGhpcy5leHRlcm5hbFBvcnRNYXBbbWVzc2FnZS5uYW1lXSA9IG1lc3NhZ2UuY2hhbm5lbDtcbiAgICAgIGlmICh0aGlzLmludGVybmFsUG9ydE1hcFttZXNzYWdlLm5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5pbnRlcm5hbFBvcnRNYXBbbWVzc2FnZS5uYW1lXSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgdmFyIG1zZyA9IHtcbiAgICAgICAgdHlwZTogJ2RlZmF1bHQgY2hhbm5lbCBhbm5vdW5jZW1lbnQnLFxuICAgICAgICBjaGFubmVsOiBtZXNzYWdlLnJldmVyc2VcbiAgICAgIH07XG4gICAgICBpZiAodGhpcy5tYW5pZmVzdC5kZXBlbmRlbmNpZXMgJiZcbiAgICAgICAgICB0aGlzLm1hbmlmZXN0LmRlcGVuZGVuY2llc1ttZXNzYWdlLm5hbWVdKSB7XG4gICAgICAgIG1zZy5hcGkgPSB0aGlzLm1hbmlmZXN0LmRlcGVuZGVuY2llc1ttZXNzYWdlLm5hbWVdLmFwaTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZW1pdChtZXNzYWdlLmNoYW5uZWwsIG1zZyk7XG4gICAgICB0aGlzLmRyYWluUGVuZGluZ01lc3NhZ2VzKG1lc3NhZ2UubmFtZSk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLmNvcmUpIHtcbiAgICAgIHRoaXMuY29yZSA9IG5ldyBtZXNzYWdlLmNvcmUoKTtcbiAgICAgIHRoaXMuZW1pdCgnY29yZScsIG1lc3NhZ2UuY29yZSk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLnR5cGUgPT09ICdjbG9zZScpIHtcbiAgICAgIC8vIENsb3NpbmcgY2hhbm5lbC5cbiAgICAgIGlmICghbWVzc2FnZS5jaGFubmVsIHx8IG1lc3NhZ2UuY2hhbm5lbCA9PT0gJ2NvbnRyb2wnKSB7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5kZXJlZ2lzdGVyRmxvdyhtZXNzYWdlLmNoYW5uZWwsIGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wb3J0Lm9uTWVzc2FnZShmbG93LCBtZXNzYWdlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0aGlzLmV4dGVybmFsUG9ydE1hcFtmbG93XSA9PT0gZmFsc2UgfHxcbiAgICAgICAgIXRoaXMuZXh0ZXJuYWxQb3J0TWFwW2Zsb3ddKSAmJiBtZXNzYWdlLmNoYW5uZWwpIHtcbiAgICAgIHRoaXMuZGVidWcuZGVidWcodGhpcyArICdoYW5kbGluZyBjaGFubmVsIGFubm91bmNlbWVudCBmb3IgJyArIGZsb3cpO1xuICAgICAgdGhpcy5leHRlcm5hbFBvcnRNYXBbZmxvd10gPSBtZXNzYWdlLmNoYW5uZWw7XG4gICAgICBpZiAodGhpcy5pbnRlcm5hbFBvcnRNYXBbZmxvd10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmludGVybmFsUG9ydE1hcFtmbG93XSA9IGZhbHNlO1xuXG4gICAgICAgIC8vIE5ldyBpbmNvbWluZyBjb25uZWN0aW9uIGF0dGVtcHRzIHNob3VsZCBnZXQgcm91dGVkIHRvIG1vZEludGVybmFsLlxuICAgICAgICBpZiAodGhpcy5tYW5pZmVzdC5wcm92aWRlcyAmJiB0aGlzLm1vZEludGVybmFsKSB7XG4gICAgICAgICAgdGhpcy5wb3J0Lm9uTWVzc2FnZSh0aGlzLm1vZEludGVybmFsLCB7XG4gICAgICAgICAgICB0eXBlOiAnQ29ubmVjdGlvbicsXG4gICAgICAgICAgICBjaGFubmVsOiBmbG93LFxuICAgICAgICAgICAgYXBpOiBtZXNzYWdlLmFwaVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubWFuaWZlc3QucHJvdmlkZXMpIHtcbiAgICAgICAgICB0aGlzLm9uY2UoJ21vZEludGVybmFsJywgZnVuY3Rpb24gKGZsb3csIGFwaSkge1xuICAgICAgICAgICAgdGhpcy5wb3J0Lm9uTWVzc2FnZSh0aGlzLm1vZEludGVybmFsLCB7XG4gICAgICAgICAgICAgIHR5cGU6ICdDb25uZWN0aW9uJyxcbiAgICAgICAgICAgICAgY2hhbm5lbDogZmxvdyxcbiAgICAgICAgICAgICAgYXBpOiBhcGlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0uYmluZCh0aGlzLCBmbG93LCBtZXNzYWdlLmFwaSkpO1xuICAgICAgICAvLyBGaXJzdCBjb25uZWN0aW9uIHJldGFpbnMgbGVnYWN5IG1hcHBpbmcgYXMgJ2RlZmF1bHQnLlxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmV4dGVybmFsUG9ydE1hcFsnZGVmYXVsdCddICYmIG1lc3NhZ2UuY2hhbm5lbCkge1xuICAgICAgICAgIHRoaXMuZXh0ZXJuYWxQb3J0TWFwWydkZWZhdWx0J10gPSBtZXNzYWdlLmNoYW5uZWw7XG4gICAgICAgICAgdGhpcy5vbmNlKCdpbnRlcm5hbENoYW5uZWxSZWFkeScsIGZ1bmN0aW9uIChmbG93KSB7XG4gICAgICAgICAgICB0aGlzLmludGVybmFsUG9ydE1hcFtmbG93XSA9IHRoaXMuaW50ZXJuYWxQb3J0TWFwWydkZWZhdWx0J107XG4gICAgICAgICAgfS5iaW5kKHRoaXMsIGZsb3cpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5kcmFpblBlbmRpbmdNZXNzYWdlcyhtZXNzYWdlLm5hbWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuc3RhcnRlZCkge1xuICAgICAgdGhpcy5vbmNlKCdzdGFydCcsIHRoaXMub25NZXNzYWdlLmJpbmQodGhpcywgZmxvdywgbWVzc2FnZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5pbnRlcm5hbFBvcnRNYXBbZmxvd10gPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnNvbGUud2Fybignd2FpdGluZyBvbiBpbnRlcm5hbCBjaGFubmVsIGZvciBtc2cnKTtcbiAgICAgICAgdGhpcy5vbmNlKCdpbnRlcm5hbENoYW5uZWxSZWFkeScsIHRoaXMub25NZXNzYWdlLmJpbmQodGhpcywgZmxvdywgbWVzc2FnZSkpO1xuICAgICAgfSBlbHNlIGlmICghdGhpcy5pbnRlcm5hbFBvcnRNYXBbZmxvd10pIHtcbiAgICAgICAgdGhpcy5kZWJ1Zy5lcnJvcignVW5leHBlY3RlZCBtZXNzYWdlIGZyb20gJyArIGZsb3cpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBvcnQub25NZXNzYWdlKHRoaXMuaW50ZXJuYWxQb3J0TWFwW2Zsb3ddLCBtZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogU3RvcmUgYSBwZW5kaW5nIG1lc3NhZ2UgZm9yIGEgZmxvdyB0aGF0IGlzbid0IHJlYWR5IHlldC4gIFRoZSBtZXNzYWdlIHdpbGxcbiAqIGJlIHNlbnQgaW4tb3JkZXIgYnkgZHJhaW5QZW5kaW5nTWVzc2FnZXMgd2hlbiB0aGUgZmxvdyBiZWNvbWVzIHJlYWR5LiAgVGhpc1xuICogaXMgdXNlZCB0byBlbnN1cmUgbWVzc2FnZXMgYXJlIG5vdCBsb3N0IHdoaWxlIHRoZSB0YXJnZXQgbW9kdWxlIGlzIGxvYWRpbmcuXG4gKiBAbWV0aG9kIGFkZFBlbmRpbmdNZXNzYWdlXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgZmxvdyB0byBzdG9yZSBhIG1lc3NhZ2UgZm9yLlxuICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gc3RvcmUuXG4gKiBAcHJpdmF0ZVxuICovXG5Nb2R1bGUucHJvdG90eXBlLmFkZFBlbmRpbmdNZXNzYWdlID0gZnVuY3Rpb24gKG5hbWUsIG1lc3NhZ2UpIHtcbiAgaWYgKCF0aGlzLnBlbmRpbmdNZXNzYWdlc1tuYW1lXSkge1xuICAgIHRoaXMucGVuZGluZ01lc3NhZ2VzW25hbWVdID0gW107XG4gIH1cbiAgdGhpcy5wZW5kaW5nTWVzc2FnZXNbbmFtZV0ucHVzaChtZXNzYWdlKTtcbn07XG5cbi8qKlxuICogU2VuZCBhbGwgcGVuZGluZyBtZXNzYWdlcyBmb3IgYSBmbG93IHRoYXQgaXMgbm93IHJlYWR5LiAgVGhlIG1lc3NhZ2VzIHdpbGxcbiAqIGJlIHNlbnQgaW4tb3JkZXIuICBUaGlzIGlzIHVzZWQgdG8gZW5zdXJlIG1lc3NhZ2VzIGFyZSBub3QgbG9zdCB3aGlsZSB0aGVcbiAqIHRhcmdldCBtb2R1bGUgaXMgbG9hZGluZy5cbiAqIEBtZXRob2QgYWRkUGVuZGluZ01lc3NhZ2VcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBmbG93IHRvIHNlbmQgcGVuZGluZyBtZXNzYWdlcy5cbiAqIEBwcml2YXRlXG4gKi9cbk1vZHVsZS5wcm90b3R5cGUuZHJhaW5QZW5kaW5nTWVzc2FnZXMgPSBmdW5jdGlvbiAobmFtZSkge1xuICBpZiAoIXRoaXMucGVuZGluZ01lc3NhZ2VzW25hbWVdKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMucGVuZGluZ01lc3NhZ2VzW25hbWVdLmZvckVhY2goXG4gICAgICB0aGlzLmVtaXQuYmluZCh0aGlzLCB0aGlzLmV4dGVybmFsUG9ydE1hcFtuYW1lXSkpO1xuICBkZWxldGUgdGhpcy5wZW5kaW5nTWVzc2FnZXNbbmFtZV07XG59O1xuXG4vKipcbiAqIENsZWFuIHVwIGFmdGVyIGEgZmxvdyB3aGljaCBpcyBubyBsb25nZXIgdXNlZCAvIG5lZWRlZC5cbiAqIEBtZXRob2QgZGVyZWdpc3RlckZMb3dcbiAqIEBwYXJhbSB7U3RyaW5nfSBmbG93IFRoZSBmbG93IHRvIHJlbW92ZSBtYXBwaW5ncyBmb3IuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGludGVybmFsIElmIHRoZSBmbG93IG5hbWUgaXMgdGhlIGludGVybmFsIGlkZW50aWZpZXIuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gV2hldGhlciB0aGUgZmxvdyB3YXMgc3VjY2Vzc2Z1bGx5IGRlcmVnaXN0ZXJlZC5cbiAqIEBwcml2YXRlXG4gKi9cbk1vZHVsZS5wcm90b3R5cGUuZGVyZWdpc3RlckZsb3cgPSBmdW5jdGlvbiAoZmxvdywgaW50ZXJuYWwpIHtcbiAgdmFyIGtleSxcbiAgICBtYXAgPSBpbnRlcm5hbCA/IHRoaXMuaW50ZXJuYWxQb3J0TWFwIDogdGhpcy5leHRlcm5hbFBvcnRNYXA7XG4gIC8vIFRPRE86IHRoaXMgaXMgaW5lZmZpY2llbnQsIGJ1dCBzZWVtcyBsZXNzIGNvbmZ1c2luZyB0aGFuIGEgM3JkXG4gIC8vIHJldmVyc2UgbG9va3VwIG1hcC5cbiAgZm9yIChrZXkgaW4gbWFwKSB7XG4gICAgaWYgKG1hcFtrZXldID09PSBmbG93KSB7XG4gICAgICBpZiAoaW50ZXJuYWwpIHtcbiAgICAgICAgdGhpcy5lbWl0KHRoaXMuY29udHJvbENoYW5uZWwsIHtcbiAgICAgICAgICB0eXBlOiAnQ2hhbm5lbCBUZWFyZG93bicsXG4gICAgICAgICAgcmVxdWVzdDogJ3VubGluaycsXG4gICAgICAgICAgdG86IHRoaXMuZXh0ZXJuYWxQb3J0TWFwW2tleV1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucG9ydCkge1xuICAgICAgICB0aGlzLnBvcnQub25NZXNzYWdlKCdjb250cm9sJywge1xuICAgICAgICAgIHR5cGU6ICdjbG9zZScsXG4gICAgICAgICAgY2hhbm5lbDogdGhpcy5pbnRlcm5hbFBvcnRNYXBba2V5XVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGRlbGV0ZSB0aGlzLmV4dGVybmFsUG9ydE1hcFtrZXldO1xuICAgICAgZGVsZXRlIHRoaXMuaW50ZXJuYWxQb3J0TWFwW2tleV07XG5cbiAgICAgIC8vIFdoZW4gdGhlcmUgYXJlIHN0aWxsIG5vbi1kZXBlbmRhbnQgY2hhbm5lbHMsIGtlZXAgcnVubmluZ1xuICAgICAgZm9yIChrZXkgaW4gdGhpcy5leHRlcm5hbFBvcnRNYXApIHtcbiAgICAgICAgaWYgKHRoaXMuZXh0ZXJuYWxQb3J0TWFwLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBpZiAodGhpcy5kZXBlbmRhbnRDaGFubmVscy5pbmRleE9mKGtleSkgPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIE90aGVyd2lzZSBzaHV0IGRvd24gdGhlIG1vZHVsZS5cbiAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogQXR0ZW1wdCB0byBzdGFydCB0aGUgbW9kdWxlIG9uY2UgdGhlIHJlbW90ZSBmcmVlZG9tIGNvbnRleHRcbiAqIGV4aXN0cy5cbiAqIEBtZXRob2Qgc3RhcnRcbiAqIEBwcml2YXRlXG4gKi9cbk1vZHVsZS5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBQb3J0O1xuICBpZiAodGhpcy5zdGFydGVkIHx8IHRoaXMucG9ydCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAodGhpcy5jb250cm9sQ2hhbm5lbCkge1xuICAgIHRoaXMubG9hZExpbmtzKCk7XG4gICAgUG9ydCA9IHRoaXMuY29uZmlnLnBvcnRUeXBlO1xuICAgIHRoaXMucG9ydCA9IG5ldyBQb3J0KHRoaXMubWFuaWZlc3QubmFtZSwgdGhpcy5yZXNvdXJjZSk7XG4gICAgLy8gTGlzdGVuIHRvIGFsbCBwb3J0IG1lc3NhZ2VzLlxuICAgIHRoaXMucG9ydC5vbih0aGlzLmVtaXRNZXNzYWdlLmJpbmQodGhpcykpO1xuICAgIHRoaXMucG9ydC5hZGRFcnJvckhhbmRsZXIoZnVuY3Rpb24gKGVycikge1xuICAgICAgdGhpcy5kZWJ1Zy53YXJuKCdNb2R1bGUgRmFpbGVkJywgZXJyKTtcbiAgICAgIHRoaXMuZmFpbGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuZW1pdCh0aGlzLmNvbnRyb2xDaGFubmVsLCB7XG4gICAgICAgIHJlcXVlc3Q6ICdjbG9zZSdcbiAgICAgIH0pO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gICAgLy8gVGVsbCB0aGUgbG9jYWwgcG9ydCB0byBhc2sgdXMgZm9yIGhlbHAuXG4gICAgdGhpcy5wb3J0Lm9uTWVzc2FnZSgnY29udHJvbCcsIHtcbiAgICAgIGNoYW5uZWw6ICdjb250cm9sJyxcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWdcbiAgICB9KTtcblxuICAgIC8vIFRlbGwgdGhlIHJlbW90ZSBsb2NhdGlvbiB0byBkZWxlZ2F0ZSBkZWJ1Z2dpbmcuXG4gICAgdGhpcy5wb3J0Lm9uTWVzc2FnZSgnY29udHJvbCcsIHtcbiAgICAgIHR5cGU6ICdSZWRpcmVjdCcsXG4gICAgICByZXF1ZXN0OiAnZGVsZWdhdGUnLFxuICAgICAgZmxvdzogJ2RlYnVnJ1xuICAgIH0pO1xuICAgIHRoaXMucG9ydC5vbk1lc3NhZ2UoJ2NvbnRyb2wnLCB7XG4gICAgICB0eXBlOiAnUmVkaXJlY3QnLFxuICAgICAgcmVxdWVzdDogJ2RlbGVnYXRlJyxcbiAgICAgIGZsb3c6ICdjb3JlJ1xuICAgIH0pO1xuXG4gICAgLy8gVGVsbCB0aGUgY29udGFpbmVyIHRvIGluc3RhbnRpYXRlIHRoZSBjb3VudGVycGFydCB0byB0aGlzIGV4dGVybmFsIHZpZXcuXG4gICAgdGhpcy5wb3J0Lm9uTWVzc2FnZSgnY29udHJvbCcsIHtcbiAgICAgIHR5cGU6ICdFbnZpcm9ubWVudCBDb25maWd1cmF0aW9uJyxcbiAgICAgIHJlcXVlc3Q6ICdlbnZpcm9ubWVudCcsXG4gICAgICBuYW1lOiAnTW9kSW50ZXJuYWwnXG4gICAgfSk7XG4gIH1cbn07XG5cbi8qKlxuICogU3RvcCB0aGUgbW9kdWxlIHdoZW4gaXQgaXMgbm8gbG9uZ2VyIG5lZWRlZCwgYW5kIHRlYXItZG93biBzdGF0ZS5cbiAqIEBtZXRob2Qgc3RvcFxuICogQHByaXZhdGVcbiAqL1xuTW9kdWxlLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMuc3RhcnRlZCkge1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLmVtaXQoJ2Nsb3NlJyk7XG4gIGlmICh0aGlzLnBvcnQpIHtcbiAgICB0aGlzLnBvcnQub2ZmKCk7XG4gICAgdGhpcy5wb3J0Lm9uTWVzc2FnZSgnY29udHJvbCcsIHtcbiAgICAgIHR5cGU6ICdjbG9zZScsXG4gICAgICBjaGFubmVsOiAnY29udHJvbCdcbiAgICB9KTtcbiAgICB0aGlzLnBvcnQuc3RvcCgpO1xuICAgIGRlbGV0ZSB0aGlzLnBvcnQ7XG4gIH1cbiAgZGVsZXRlIHRoaXMucG9saWN5O1xuICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbn07XG5cbi8qKlxuICogVGV4dHVhbCBEZXNjcmlwdGlvbiBvZiB0aGUgUG9ydFxuICogQG1ldGhvZCB0b1N0cmluZ1xuICogQHJldHVybiB7U3RyaW5nfSBUaGUgZGVzY3JpcHRpb24gb2YgdGhpcyBQb3J0LlxuICovXG5Nb2R1bGUucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gXCJbTW9kdWxlIFwiICsgdGhpcy5tYW5pZmVzdC5uYW1lICsgXCJdXCI7XG59O1xuXG4vKipcbiAqIEludGVyY2VwdCBtZXNzYWdlcyBhcyB0aGV5IGFycml2ZSBmcm9tIHRoZSBtb2R1bGUsXG4gKiBtYXBwaW5nIHRoZW0gYmV0d2VlbiBpbnRlcm5hbCBhbmQgZXh0ZXJuYWwgZmxvdyBuYW1lcy5cbiAqIEBtZXRob2QgZW1pdE1lc3NhZ2VcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBkZXN0aW5hdGlvbiB0aGUgbW9kdWxlIHdhbnRzIHRvIHNlbmQgdG8uXG4gKiBAcGFyYW0ge09iamVjdH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBzZW5kLlxuICogQHByaXZhdGVcbiAqL1xuTW9kdWxlLnByb3RvdHlwZS5lbWl0TWVzc2FnZSA9IGZ1bmN0aW9uIChuYW1lLCBtZXNzYWdlKSB7XG4gIGlmICh0aGlzLmludGVybmFsUG9ydE1hcFtuYW1lXSA9PT0gZmFsc2UgJiYgbWVzc2FnZS5jaGFubmVsKSB7XG4gICAgdGhpcy5pbnRlcm5hbFBvcnRNYXBbbmFtZV0gPSBtZXNzYWdlLmNoYW5uZWw7XG4gICAgdGhpcy5lbWl0KCdpbnRlcm5hbENoYW5uZWxSZWFkeScpO1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBUZXJtaW5hdGUgZGVidWcgcmVkaXJlY3Rpb24gcmVxdWVzdGVkIGluIHN0YXJ0KCkuXG4gIGlmIChuYW1lID09PSAnY29udHJvbCcpIHtcbiAgICBpZiAobWVzc2FnZS5mbG93ID09PSAnZGVidWcnICYmIG1lc3NhZ2UubWVzc2FnZSkge1xuICAgICAgdGhpcy5kZWJ1Zy5mb3JtYXQobWVzc2FnZS5tZXNzYWdlLnNldmVyaXR5LFxuICAgICAgICAgIG1lc3NhZ2UubWVzc2FnZS5zb3VyY2UgfHwgdGhpcy50b1N0cmluZygpLFxuICAgICAgICAgIG1lc3NhZ2UubWVzc2FnZS5tc2cpO1xuICAgIH0gZWxzZSBpZiAobWVzc2FnZS5mbG93ID09PSAnY29yZScgJiYgbWVzc2FnZS5tZXNzYWdlKSB7XG4gICAgICBpZiAoIXRoaXMuY29yZSkge1xuICAgICAgICB0aGlzLm9uY2UoJ2NvcmUnLCB0aGlzLmVtaXRNZXNzYWdlLmJpbmQodGhpcywgbmFtZSwgbWVzc2FnZSkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAobWVzc2FnZS5tZXNzYWdlLnR5cGUgPT09ICdyZWdpc3RlcicgfHxcbiAgICAgICAgICBtZXNzYWdlLm1lc3NhZ2UudHlwZSA9PT0gJ3JlcXVpcmUnKSB7XG4gICAgICAgIG1lc3NhZ2UubWVzc2FnZS5yZXBseSA9IHRoaXMucG9ydC5vbk1lc3NhZ2UuYmluZCh0aGlzLnBvcnQsICdjb250cm9sJyk7XG4gICAgICAgIHRoaXMuZXh0ZXJuYWxQb3J0TWFwW21lc3NhZ2UubWVzc2FnZS5pZF0gPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY29yZS5vbk1lc3NhZ2UodGhpcywgbWVzc2FnZS5tZXNzYWdlKTtcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2UubmFtZSA9PT0gJ01vZEludGVybmFsJyAmJiAhdGhpcy5tb2RJbnRlcm5hbCkge1xuICAgICAgdGhpcy5tb2RJbnRlcm5hbCA9IG1lc3NhZ2UuY2hhbm5lbDtcbiAgICAgIHRoaXMucG9ydC5vbk1lc3NhZ2UodGhpcy5tb2RJbnRlcm5hbCwge1xuICAgICAgICB0eXBlOiAnSW5pdGlhbGl6YXRpb24nLFxuICAgICAgICBpZDogdGhpcy5tYW5pZmVzdElkLFxuICAgICAgICBhcHBJZDogdGhpcy5pZCxcbiAgICAgICAgbWFuaWZlc3Q6IHRoaXMubWFuaWZlc3QsXG4gICAgICAgIGxpbmVhZ2U6IHRoaXMubGluZWFnZSxcbiAgICAgICAgY2hhbm5lbDogbWVzc2FnZS5yZXZlcnNlXG4gICAgICB9KTtcbiAgICAgIHRoaXMuZW1pdCgnbW9kSW50ZXJuYWwnKTtcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ2NyZWF0ZUxpbmsnKSB7XG4gICAgICB0aGlzLmludGVybmFsUG9ydE1hcFttZXNzYWdlLm5hbWVdID0gbWVzc2FnZS5jaGFubmVsO1xuICAgICAgdGhpcy5wb3J0Lm9uTWVzc2FnZShtZXNzYWdlLmNoYW5uZWwsIHtcbiAgICAgICAgdHlwZTogJ2NoYW5uZWwgYW5ub3VuY2VtZW50JyxcbiAgICAgICAgY2hhbm5lbDogbWVzc2FnZS5yZXZlcnNlXG4gICAgICB9KTtcbiAgICAgIHRoaXMuZW1pdCgnaW50ZXJuYWxDaGFubmVsUmVhZHknKTtcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ2Nsb3NlJykge1xuICAgICAgdGhpcy5kZXJlZ2lzdGVyRmxvdyhtZXNzYWdlLmNoYW5uZWwsIHRydWUpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChuYW1lID09PSAnTW9kSW50ZXJuYWwnICYmIG1lc3NhZ2UudHlwZSA9PT0gJ3JlYWR5JyAmJiAhdGhpcy5zdGFydGVkKSB7XG4gICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcbiAgICB0aGlzLmVtaXQoJ3N0YXJ0Jyk7XG4gIH0gZWxzZSBpZiAobmFtZSA9PT0gJ01vZEludGVybmFsJyAmJiBtZXNzYWdlLnR5cGUgPT09ICdyZXNvbHZlJykge1xuICAgIHRoaXMucmVzb3VyY2UuZ2V0KHRoaXMubWFuaWZlc3RJZCwgbWVzc2FnZS5kYXRhKS50aGVuKGZ1bmN0aW9uIChpZCwgZGF0YSkge1xuICAgICAgdGhpcy5wb3J0Lm9uTWVzc2FnZSh0aGlzLm1vZEludGVybmFsLCB7XG4gICAgICAgIHR5cGU6ICdyZXNvbHZlLnJlc3BvbnNlJyxcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBkYXRhOiBkYXRhXG4gICAgICB9KTtcbiAgICB9LmJpbmQodGhpcywgbWVzc2FnZS5pZCksIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuZGVidWcud2FybignRXJyb3IgUmVzb2x2aW5nIFVSTCBmb3IgTW9kdWxlLicpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH0gZWxzZSBpZiAobmFtZSA9PT0gJ01vZEludGVybmFsJyAmJiBtZXNzYWdlLnR5cGUgPT09ICdlcnJvcicpIHtcbiAgICB0aGlzLmZhaWxlZCA9IHRydWU7XG4gICAgLy8gVGhlIHN0YXJ0IGV2ZW50IGVuc3VyZXMgdGhhdCB3ZSBwcm9jZXNzIGFueSBwZW5kaW5nIG1lc3NhZ2VzLCBpbiBjYXNlXG4gICAgLy8gb25lIG9mIHRoZW0gcmVxdWlyZXMgYSBzaG9ydC1jaXJjdWl0IGVycm9yIHJlc3BvbnNlLlxuICAgIHRoaXMuZW1pdCgnc3RhcnQnKTtcbiAgfSBlbHNlIGlmICghdGhpcy5leHRlcm5hbFBvcnRNYXBbbmFtZV0pIHtcbiAgICAvLyBTdG9yZSB0aGlzIG1lc3NhZ2UgdW50aWwgd2UgaGF2ZSBhIHBvcnQgZm9yIHRoYXQgbmFtZS5cbiAgICB0aGlzLmFkZFBlbmRpbmdNZXNzYWdlKG5hbWUsIG1lc3NhZ2UpO1xuICAgIC8vIFN0YXJ0IGFzeW5jaHJvbm91cyBsb2FkaW5nIG9mIHRoZSB0YXJnZXQgbW9kdWxlIGlmIGl0J3MgYSBkZXBlbmRlbmN5XG4gICAgLy8gYW5kIGxvYWRpbmcgaGFzbid0IHN0YXJ0ZWQuXG4gICAgaWYgKG5hbWUgaW4gdGhpcy5kZXBlbmRlbmN5VXJscyAmJlxuICAgICAgICB0aGlzLmRlcGVuZGFudENoYW5uZWxzLmluZGV4T2YobmFtZSkgPT09IC0xKSB7XG4gICAgICB0aGlzLnJlcXVpcmUobmFtZSwgdGhpcy5kZXBlbmRlbmN5VXJsc1tuYW1lXSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRoaXMuZW1pdCh0aGlzLmV4dGVybmFsUG9ydE1hcFtuYW1lXSwgbWVzc2FnZSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYSBkeW5hbWljIGRlcGVuZGVuY3kgb24gYW5vdGhlciBtb2R1bGUuXG4gKiBAbWV0aG9kIHJlcXVpcmVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBkZXBlbmRlbmN5LlxuICogQHBhcmFtIHtTdHJpbmd9IG1hbmlmZXN0IFRoZSBVUkwgb2YgdGhlIGRlcGVuZGVuY3kgdG8gYWRkLlxuICovXG5Nb2R1bGUucHJvdG90eXBlLnJlcXVpcmUgPSBmdW5jdGlvbiAobmFtZSwgbWFuaWZlc3QpIHtcbiAgdGhpcy5kZXBlbmRhbnRDaGFubmVscy5wdXNoKG5hbWUpO1xuICB0aGlzLmFkZERlcGVuZGVuY3kobWFuaWZlc3QsIG5hbWUpLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICB0aGlzLnBvcnQub25NZXNzYWdlKHRoaXMubW9kSW50ZXJuYWwsIHtcbiAgICAgIHR5cGU6ICdyZXF1aXJlLmZhaWx1cmUnLFxuICAgICAgaWQ6IG5hbWUsXG4gICAgICBlcnJvcjogZXJyLm1lc3NhZ2VcbiAgICB9KTtcbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cbi8qKlxuICogQWRkIGEgZGVwZW5kZW5jeSB0byB0aGUgbW9kdWxlJ3MgZGVwZW5kZW5jeSB0cmVlXG4gKiBAbWV0aG9kIGFkZERlcGVuZGVuY3lcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIG1hbmlmZXN0IFVSTCBvZiB0aGUgZGVwZW5kZW5jeVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIGV4cG9zZWQgbmFtZSBvZiB0aGUgbW9kdWxlLlxuICogQHJldHVybnMge01vZHVsZX0gVGhlIGNyZWF0ZWQgZGVwZW5kZW50IG1vZHVsZS5cbiAqIEBwcml2YXRlXG4gKi9cbk1vZHVsZS5wcm90b3R5cGUuYWRkRGVwZW5kZW5jeSA9IGZ1bmN0aW9uICh1cmwsIG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMucmVzb3VyY2UuZ2V0KHRoaXMubWFuaWZlc3RJZCwgdXJsKVxuICAgIC50aGVuKGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgIHJldHVybiB0aGlzLnBvbGljeS5nZXQodGhpcy5saW5lYWdlLCB1cmwpO1xuICAgIH0uYmluZCh0aGlzKSlcbiAgICAudGhlbihmdW5jdGlvbiAoZGVwKSB7XG4gICAgICB0aGlzLnVwZGF0ZUVudihuYW1lLCBkZXAubWFuaWZlc3QpO1xuICAgICAgdGhpcy5lbWl0KHRoaXMuY29udHJvbENoYW5uZWwsIHtcbiAgICAgICAgdHlwZTogJ0xpbmsgdG8gJyArIG5hbWUsXG4gICAgICAgIHJlcXVlc3Q6ICdsaW5rJyxcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgb3ZlcnJpZGVEZXN0OiBuYW1lICsgJy4nICsgdGhpcy5pZCxcbiAgICAgICAgdG86IGRlcFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZGVwO1xuICAgIH0uYmluZCh0aGlzKSlcbiAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgdGhpcy5kZWJ1Zy53YXJuKHRoaXMudG9TdHJpbmcoKSArICcgZmFpbGVkIHRvIGxvYWQgZGVwOiAnLCBuYW1lLCBlcnIpO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH0uYmluZCh0aGlzKSk7XG59O1xuXG4vKipcbiAqIFJlcXVlc3QgdGhlIGV4dGVybmFsIHJvdXRlcyB1c2VkIGJ5IHRoaXMgbW9kdWxlLlxuICogQG1ldGhvZCBsb2FkTGlua3NcbiAqIEBwcml2YXRlXG4gKi9cbk1vZHVsZS5wcm90b3R5cGUubG9hZExpbmtzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaSwgY2hhbm5lbHMgPSBbJ2RlZmF1bHQnXSwgbmFtZSwgZGVwO1xuXG4gIGlmICh0aGlzLm1hbmlmZXN0LnBlcm1pc3Npb25zKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMubWFuaWZlc3QucGVybWlzc2lvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIG5hbWUgPSB0aGlzLm1hbmlmZXN0LnBlcm1pc3Npb25zW2ldO1xuICAgICAgaWYgKGNoYW5uZWxzLmluZGV4T2YobmFtZSkgPCAwICYmIG5hbWUuaW5kZXhPZignY29yZS4nKSA9PT0gMCkge1xuICAgICAgICBjaGFubmVscy5wdXNoKG5hbWUpO1xuICAgICAgICB0aGlzLmRlcGVuZGFudENoYW5uZWxzLnB1c2gobmFtZSk7XG4gICAgICAgIGRlcCA9IG5ldyBQcm92aWRlcih0aGlzLmFwaS5nZXQobmFtZSkuZGVmaW5pdGlvbiwgdGhpcy5kZWJ1Zyk7XG4gICAgICAgIHRoaXMuYXBpLnByb3ZpZGVDb3JlKG5hbWUsIGRlcCwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5lbWl0KHRoaXMuY29udHJvbENoYW5uZWwsIHtcbiAgICAgICAgICB0eXBlOiAnQ29yZSBMaW5rIHRvICcgKyBuYW1lLFxuICAgICAgICAgIHJlcXVlc3Q6ICdsaW5rJyxcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIHRvOiBkZXBcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmICh0aGlzLm1hbmlmZXN0LmRlcGVuZGVuY2llcykge1xuICAgIHV0aWwuZWFjaFByb3AodGhpcy5tYW5pZmVzdC5kZXBlbmRlbmNpZXMsIGZ1bmN0aW9uIChkZXNjLCBuYW1lKSB7XG4gICAgICBpZiAoY2hhbm5lbHMuaW5kZXhPZihuYW1lKSA8IDApIHtcbiAgICAgICAgY2hhbm5lbHMucHVzaChuYW1lKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGVwZW5kZW5jeVVybHNbbmFtZV0gPSBkZXNjLnVybDtcbiAgICAgIC8vIFR1cm4gdGhlIHJlbGF0aXZlIFVSTCBvZiB0aGUgZGVwZW5kZW5jeSdzIG1hbmlmZXN0IGludG8gYW4gYWJzb2x1dGVcbiAgICAgIC8vIFVSTCwgbG9hZCBpdCwgYW5kIHNlbmQgYSBtZXNzYWdlIHRvIHRoZSBtb2R1bGUgaW5mb3JtaW5nIGl0IG9mIHRoZVxuICAgICAgLy8gZGVwZW5kZW5jeSdzIEFQSS4gIE9uY2UgdGhlIG1vZHVsZSBoYXMgcmVjZWl2ZWQgYWxsIG9mIHRoZXNlIHVwZGF0ZXMsXG4gICAgICAvLyBpdCB3aWxsIGVtaXQgYSAnc3RhcnQnIG1lc3NhZ2UuXG4gICAgICB0aGlzLnJlc291cmNlLmdldCh0aGlzLm1hbmlmZXN0SWQsIGRlc2MudXJsKVxuICAgICAgICAgIC50aGVuKHRoaXMucG9saWN5LmxvYWRNYW5pZmVzdC5iaW5kKHRoaXMucG9saWN5KSlcbiAgICAgICAgICAudGhlbih0aGlzLnVwZGF0ZUVudi5iaW5kKHRoaXMsIG5hbWUpKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG4gIC8vIE5vdGUgdGhhdCBtZXNzYWdlcyBjYW4gYmUgc3luY2hyb25vdXMsIHNvIHNvbWUgcG9ydHMgbWF5IGFscmVhZHkgYmUgYm91bmQuXG4gIGZvciAoaSA9IDA7IGkgPCBjaGFubmVscy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHRoaXMuZXh0ZXJuYWxQb3J0TWFwW2NoYW5uZWxzW2ldXSA9IHRoaXMuZXh0ZXJuYWxQb3J0TWFwW2NoYW5uZWxzW2ldXSB8fCBmYWxzZTtcbiAgICB0aGlzLmludGVybmFsUG9ydE1hcFtjaGFubmVsc1tpXV0gPSBmYWxzZTtcbiAgfVxufTtcblxuLyoqXG4gKiBVcGRhdGUgdGhlIG1vZHVsZSBlbnZpcm9ubWVudCB3aXRoIGluZm9ybWF0aW9uIGFib3V0IGEgZGVwZW5kZW50IG1hbmlmZXN0LlxuICogQG1ldGhvZCB1cGRhdGVFbnZcbiAqIEBwYXJhbSB7U3RyaW5nfSBkZXAgVGhlIGRlcGVuZGVuY3lcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYW5pZmVzdCBUaGUgbWFuaWZlc3Qgb2YgdGhlIGRlcGVuZGVuY3lcbiAqL1xuTW9kdWxlLnByb3RvdHlwZS51cGRhdGVFbnYgPSBmdW5jdGlvbiAoZGVwLCBtYW5pZmVzdCkge1xuICBpZiAoIW1hbmlmZXN0KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICghdGhpcy5tb2RJbnRlcm5hbCkge1xuICAgIHRoaXMub25jZSgnbW9kSW50ZXJuYWwnLCB0aGlzLnVwZGF0ZUVudi5iaW5kKHRoaXMsIGRlcCwgbWFuaWZlc3QpKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgbWV0YWRhdGE7XG5cbiAgLy8gRGVjaWRlIGlmL3doYXQgb3RoZXIgcHJvcGVydGllcyBzaG91bGQgYmUgZXhwb3J0ZWQuXG4gIC8vIEtlZXAgaW4gc3luYyB3aXRoIE1vZHVsZUludGVybmFsLnVwZGF0ZUVudlxuICBtZXRhZGF0YSA9IHtcbiAgICBuYW1lOiBtYW5pZmVzdC5uYW1lLFxuICAgIGljb246IG1hbmlmZXN0Lmljb24sXG4gICAgZGVzY3JpcHRpb246IG1hbmlmZXN0LmRlc2NyaXB0aW9uLFxuICAgIGFwaTogbWFuaWZlc3QuYXBpXG4gIH07XG5cbiAgdGhpcy5wb3J0Lm9uTWVzc2FnZSh0aGlzLm1vZEludGVybmFsLCB7XG4gICAgdHlwZTogJ21hbmlmZXN0JyxcbiAgICBuYW1lOiBkZXAsXG4gICAgbWFuaWZlc3Q6IG1ldGFkYXRhXG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBNb2R1bGU7XG4iLCIvKmpzbGludCBpbmRlbnQ6Miwgbm9kZTp0cnVlLHNsb3BweTp0cnVlICovXG52YXIgUHJvbWlzZUNvbXBhdCA9IHJlcXVpcmUoJ2VzNi1wcm9taXNlJykuUHJvbWlzZTtcblxudmFyIEFwaUludGVyZmFjZSA9IHJlcXVpcmUoJy4vcHJveHkvYXBpSW50ZXJmYWNlJyk7XG52YXIgUHJvdmlkZXIgPSByZXF1aXJlKCcuL3Byb3ZpZGVyJyk7XG52YXIgUHJveHlCaW5kZXIgPSByZXF1aXJlKCcuL3Byb3h5YmluZGVyJyk7XG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG4vKipcbiAqIFRoZSBpbnRlcm5hbCBsb2dpYyBmb3IgbW9kdWxlIHNldHVwLCB3aGljaCBtYWtlcyBzdXJlIHRoZSBwdWJsaWNcbiAqIGZhY2luZyBleHBvcnRzIGhhdmUgYXBwcm9wcmlhdGUgcHJvcGVydGllcywgYW5kIGxvYWQgdXNlciBzY3JpcHRzLlxuICogQGNsYXNzIE1vZHVsZUludGVybmFsXG4gKiBAZXh0ZW5kcyBQb3J0XG4gKiBAcGFyYW0ge1BvcnR9IG1hbmFnZXIgVGhlIG1hbmFnZXIgaW4gdGhpcyBtb2R1bGUgdG8gdXNlIGZvciByb3V0aW5nIHNldHVwLlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnZhciBNb2R1bGVJbnRlcm5hbCA9IGZ1bmN0aW9uIChtYW5hZ2VyKSB7XG4gIHRoaXMuY29uZmlnID0ge307XG4gIHRoaXMubWFuYWdlciA9IG1hbmFnZXI7XG4gIHRoaXMuZGVidWcgPSBtYW5hZ2VyLmRlYnVnO1xuICB0aGlzLmJpbmRlciA9IG5ldyBQcm94eUJpbmRlcih0aGlzLm1hbmFnZXIpO1xuICB0aGlzLmFwaSA9IHRoaXMubWFuYWdlci5hcGk7XG4gIHRoaXMubWFuaWZlc3RzID0ge307XG4gIHRoaXMucHJvdmlkZXJzID0ge307XG5cbiAgdGhpcy5pZCA9ICdNb2R1bGVJbnRlcm5hbCc7XG4gIHRoaXMucGVuZGluZ1BvcnRzID0gMDtcbiAgdGhpcy5yZXF1ZXN0cyA9IHt9O1xuICB0aGlzLnVuYm91bmRQb3J0cyA9IHt9O1xuXG4gIHV0aWwuaGFuZGxlRXZlbnRzKHRoaXMpO1xufTtcblxuLyoqXG4gKiBNZXNzYWdlIGhhbmRsZXIgZm9yIHRoaXMgcG9ydC5cbiAqIFRoaXMgcG9ydCBvbmx5IGhhbmRsZXMgdHdvIG1lc3NhZ2VzOlxuICogVGhlIGZpcnN0IGlzIGl0cyBzZXR1cCBmcm9tIHRoZSBtYW5hZ2VyLCB3aGljaCBpdCB1c2VzIGZvciBjb25maWd1cmF0aW9uLlxuICogVGhlIHNlY29uZCBpcyBmcm9tIHRoZSBtb2R1bGUgY29udHJvbGxlciAoZmRvbS5wb3J0Lk1vZHVsZSksIHdoaWNoIHByb3ZpZGVzXG4gKiB0aGUgbWFuaWZlc3QgaW5mbyBmb3IgdGhlIG1vZHVsZS5cbiAqIEBtZXRob2Qgb25NZXNzYWdlXG4gKiBAcGFyYW0ge1N0cmluZ30gZmxvdyBUaGUgZGV0aW5hdGlvbiBvZiB0aGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICovXG5Nb2R1bGVJbnRlcm5hbC5wcm90b3R5cGUub25NZXNzYWdlID0gZnVuY3Rpb24gKGZsb3csIG1lc3NhZ2UpIHtcbiAgaWYgKGZsb3cgPT09ICdjb250cm9sJykge1xuICAgIGlmICghdGhpcy5jb250cm9sQ2hhbm5lbCAmJiBtZXNzYWdlLmNoYW5uZWwpIHtcbiAgICAgIHRoaXMuY29udHJvbENoYW5uZWwgPSBtZXNzYWdlLmNoYW5uZWw7XG4gICAgICB1dGlsLm1peGluKHRoaXMuY29uZmlnLCBtZXNzYWdlLmNvbmZpZyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGZsb3cgPT09ICdkZWZhdWx0JyAmJiAhdGhpcy5hcHBJZCkge1xuICAgIC8vIFJlY292ZXIgdGhlIElEIG9mIHRoaXMgbW9kdWxlOlxuICAgIHRoaXMucG9ydCA9IHRoaXMubWFuYWdlci5odWIuZ2V0RGVzdGluYXRpb24obWVzc2FnZS5jaGFubmVsKTtcbiAgICB0aGlzLmV4dGVybmFsQ2hhbm5lbCA9IG1lc3NhZ2UuY2hhbm5lbDtcbiAgICB0aGlzLmFwcElkID0gbWVzc2FnZS5hcHBJZDtcbiAgICB0aGlzLmxpbmVhZ2UgPSBtZXNzYWdlLmxpbmVhZ2U7XG5cbiAgICB2YXIgb2JqZWN0cyA9IHRoaXMubWFwUHJveGllcyhtZXNzYWdlLm1hbmlmZXN0KTtcblxuICAgIHRoaXMuZ2VuZXJhdGVFbnYobWVzc2FnZS5tYW5pZmVzdCwgb2JqZWN0cykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5sb2FkTGlua3Mob2JqZWN0cyk7XG4gICAgfS5iaW5kKHRoaXMpKS50aGVuKHRoaXMubG9hZFNjcmlwdHMuYmluZCh0aGlzLCBtZXNzYWdlLmlkLFxuICAgICAgICBtZXNzYWdlLm1hbmlmZXN0LmFwcC5zY3JpcHQpKS50aGVuKG51bGwsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIHRoaXMuZGVidWcuZXJyb3IoJ0NvdWxkIG5vdCBzZXQgdXAgbW9kdWxlICcgKyB0aGlzLmFwcElkICsgJzogJywgZXJyKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9IGVsc2UgaWYgKGZsb3cgPT09ICdkZWZhdWx0JyAmJiBtZXNzYWdlLnR5cGUgPT09ICdyZXNvbHZlLnJlc3BvbnNlJyAmJlxuICAgICAgICAgICAgIHRoaXMucmVxdWVzdHNbbWVzc2FnZS5pZF0pIHtcbiAgICB0aGlzLnJlcXVlc3RzW21lc3NhZ2UuaWRdKG1lc3NhZ2UuZGF0YSk7XG4gICAgZGVsZXRlIHRoaXMucmVxdWVzdHNbbWVzc2FnZS5pZF07XG4gIH0gZWxzZSBpZiAoZmxvdyA9PT0gJ2RlZmF1bHQnICYmIG1lc3NhZ2UudHlwZSA9PT0gJ3JlcXVpcmUuZmFpbHVyZScgJiZcbiAgICAgICAgICAgICB0aGlzLnVuYm91bmRQb3J0c1ttZXNzYWdlLmlkXSkge1xuICAgIHRoaXMudW5ib3VuZFBvcnRzW21lc3NhZ2UuaWRdLmNhbGxiYWNrKHVuZGVmaW5lZCwgbWVzc2FnZS5lcnJvcik7XG4gICAgZGVsZXRlIHRoaXMudW5ib3VuZFBvcnRzW21lc3NhZ2UuaWRdO1xuICB9IGVsc2UgaWYgKGZsb3cgPT09ICdkZWZhdWx0JyAmJiBtZXNzYWdlLnR5cGUgPT09ICdtYW5pZmVzdCcpIHtcbiAgICB0aGlzLmVtaXQoJ21hbmlmZXN0JywgbWVzc2FnZSk7XG4gICAgdGhpcy51cGRhdGVNYW5pZmVzdChtZXNzYWdlLm5hbWUsIG1lc3NhZ2UubWFuaWZlc3QpO1xuICB9IGVsc2UgaWYgKGZsb3cgPT09ICdkZWZhdWx0JyAmJiBtZXNzYWdlLnR5cGUgPT09ICdDb25uZWN0aW9uJykge1xuICAgIC8vIE11bHRpcGxlIGNvbm5lY3Rpb25zIGNhbiBiZSBtYWRlIHRvIHRoZSBkZWZhdWx0IHByb3ZpZGVyLlxuICAgIGlmIChtZXNzYWdlLmFwaSAmJiB0aGlzLnByb3ZpZGVyc1ttZXNzYWdlLmFwaV0pIHtcbiAgICAgIHRoaXMubWFuYWdlci5jcmVhdGVMaW5rKHRoaXMucHJvdmlkZXJzW21lc3NhZ2UuYXBpXSwgbWVzc2FnZS5jaGFubmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcnQsIG1lc3NhZ2UuY2hhbm5lbCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmRlZmF1bHRQb3J0ICYmXG4gICAgICAgICAgICAgICAobWVzc2FnZS5hcGkgPT09IHRoaXMuZGVmYXVsdFBvcnQuYXBpIHx8ICFtZXNzYWdlLmFwaSkpIHtcbiAgICAgIHRoaXMubWFuYWdlci5jcmVhdGVMaW5rKHRoaXMuZGVmYXVsdFBvcnQsIG1lc3NhZ2UuY2hhbm5lbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9ydCwgbWVzc2FnZS5jaGFubmVsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vbmNlKCdzdGFydCcsIHRoaXMub25NZXNzYWdlLmJpbmQodGhpcywgZmxvdywgbWVzc2FnZSkpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBHZXQgYSB0ZXh0dWFsIGRlc2NyaXB0aW9uIG9mIHRoaXMgUG9ydC5cbiAqIEBtZXRob2QgdG9TdHJpbmdcbiAqIEByZXR1cm4ge1N0cmluZ30gYSBkZXNjcmlwdGlvbiBvZiB0aGlzIFBvcnQuXG4gKi9cbk1vZHVsZUludGVybmFsLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFwiW0Vudmlyb25tZW50IEhlbHBlcl1cIjtcbn07XG5cbi8qKlxuICogR2VuZXJhdGUgYW4gZXh0ZXJuYWx5IHZpc2lzYmxlIG5hbWVzcGFjZVxuICogQG1ldGhvZCBnZW5lcmF0ZUVudlxuICogQHBhcmFtIHtPYmplY3R9IG1hbmlmZXN0IFRoZSBtYW5pZmVzdCBvZiB0aGUgbW9kdWxlLlxuICogQHBhcmFtIHtPYmplY3RbXX0gaXRlbXMgT3RoZXIgaW50ZXJmYWNlcyB0byBsb2FkLlxuICogQHJldHVybnMge1Byb21pc2V9IEEgcHJvbWlzZSB3aGVuIHRoZSBleHRlcm5hbCBuYW1lc3BhY2UgaXMgdmlzaWJsZS5cbiAqIEBwcml2YXRlXG4gKi9cbk1vZHVsZUludGVybmFsLnByb3RvdHlwZS5nZW5lcmF0ZUVudiA9IGZ1bmN0aW9uIChtYW5pZmVzdCwgaXRlbXMpIHtcbiAgcmV0dXJuIHRoaXMuYmluZGVyLmJpbmREZWZhdWx0KHRoaXMucG9ydCwgdGhpcy5hcGksIG1hbmlmZXN0LCB0cnVlKS50aGVuKFxuICAgIGZ1bmN0aW9uIChiaW5kaW5nKSB7XG4gICAgICB2YXIgaSA9IDA7XG4gICAgICBiaW5kaW5nLnBvcnQuYXBpID0gYmluZGluZy5leHRlcm5hbC5hcGk7XG4gICAgICB0aGlzLmRlZmF1bHRQb3J0ID0gYmluZGluZy5wb3J0O1xuICAgICAgaWYgKGJpbmRpbmcuZXh0ZXJuYWwuYXBpKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGlmIChpdGVtc1tpXS5uYW1lID09PSBiaW5kaW5nLmV4dGVybmFsLmFwaSAmJiBpdGVtc1tpXS5kZWYucHJvdmlkZXMpIHtcbiAgICAgICAgICAgIGl0ZW1zLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5jb25maWcuZ2xvYmFsLmZyZWVkb20gPSBiaW5kaW5nLmV4dGVybmFsO1xuICAgIH0uYmluZCh0aGlzKVxuICApO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciBhbiB1bnVzZWQgY2hhbm5lbCBJRCBmb3IgY2FsbGJhY2ssIGFuZCBvbmNlIGluZm9ybWF0aW9uXG4gKiBhYm91dCB0aGUgY2hhbm5lbCBpcyBrbm93biwgY2FsbCB0aGUgaGFuZGxlciB3aXRoIHRoYXQgaW5mb3JtYXRpb24uXG4gKiBAbWV0aG9kIHJlZ2lzdGVySWRcbiAqIEBwYXJhbSB7U3RyaW5nfSBhcGkgVGhlIHByZWZlcnJlZCBBUEkgdG8gdXNlIGZvciB0aGUgbmV3IGNoYW5uZWwuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBGdW5jdGlvbiB0byBjYWxsIG9uY2UgY2hhbm5lbCByZWFkeVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIGFsbG9jYXRlZCBjaGFubmVsIG5hbWUuXG4gKi9cbk1vZHVsZUludGVybmFsLnByb3RvdHlwZS5yZWdpc3RlcklkID0gZnVuY3Rpb24gKGFwaSwgY2FsbGJhY2spIHtcbiAgdmFyIGlkID0gdXRpbC5nZXRJZCgpO1xuICB0aGlzLnVuYm91bmRQb3J0c1tpZF0gPSB7XG4gICAgbmFtZTogYXBpLFxuICAgIGNhbGxiYWNrOiBjYWxsYmFja1xuICB9O1xuICByZXR1cm4gaWQ7XG59O1xuXG4vKipcbiAqIEF0dGFjaCBhIHByb3h5IHRvIHRoZSBleHRlcm5hbGx5IHZpc2libGUgbmFtZXNwYWNlLlxuICogQG1ldGhvZCBhdHRhY2hcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBwcm94eS5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gcHJvdmlkZXMgSWYgdGhpcyBwcm94eSBpcyBhIHByb3ZpZGVyLlxuICogQHBhcmFtIHtQcm94eUludGVyZmFjZX0gcHJveHkgVGhlIHByb3h5IHRvIGF0dGFjaC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBhcGkgVGhlIEFQSSB0aGUgcHJveHkgaW1wbGVtZW50cy5cbiAqIEBwcml2YXRlLlxuICovXG5Nb2R1bGVJbnRlcm5hbC5wcm90b3R5cGUuYXR0YWNoID0gZnVuY3Rpb24gKG5hbWUsIHByb3ZpZGVzLCBwcm94eSkge1xuICB2YXIgZXhwID0gdGhpcy5jb25maWcuZ2xvYmFsLmZyZWVkb207XG5cbiAgaWYgKHByb3ZpZGVzKSB7XG4gICAgdGhpcy5wcm92aWRlcnNbbmFtZV0gPSBwcm94eS5wb3J0O1xuICB9XG5cbiAgaWYgKCFleHBbbmFtZV0pIHtcbiAgICBleHBbbmFtZV0gPSBwcm94eS5leHRlcm5hbDtcbiAgICBpZiAodGhpcy5tYW5pZmVzdHNbbmFtZV0pIHtcbiAgICAgIGV4cFtuYW1lXS5tYW5pZmVzdCA9IHRoaXMubWFuaWZlc3RzW25hbWVdO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMucGVuZGluZ1BvcnRzIC09IDE7XG4gIGlmICh0aGlzLnBlbmRpbmdQb3J0cyA9PT0gMCkge1xuICAgIHRoaXMuZW1pdCgnc3RhcnQnKTtcbiAgfVxuXG4gIHJldHVybiBleHBbbmFtZV07XG59O1xuXG4vKipcbiAqIFJlcXVlc3QgYSBzZXQgb2YgcHJveHkgaW50ZXJmYWNlcywgYW5kIGJpbmQgdGhlbSB0byB0aGUgZXh0ZXJuYWxcbiAqIG5hbWVzcGFjZS5cbiAqIEBtZXRob2QgbG9hZExpbmtzXG4gKiBAcGFyYW0ge09iamVjdFtdfSBpdGVtcyBEZXNjcmlwdG9ycyBvZiB0aGUgcHJveHkgcG9ydHMgdG8gbG9hZC5cbiAqIEBwcml2YXRlXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gUHJvbWlzZSBmb3Igd2hlbiBhbGwgbGlua3MgYXJlIGxvYWRlZC5cbiAqL1xuLy9UT0RPKHdpbGxzY290dCk6IHByb21pc2Ugc2hvdWxkIGJlIGNoYWluZWQsIHJhdGhlciB0aGFuIGdvaW5nIHRocm91Z2ggZXZlbnRzLlxuTW9kdWxlSW50ZXJuYWwucHJvdG90eXBlLmxvYWRMaW5rcyA9IGZ1bmN0aW9uIChpdGVtcykge1xuICB2YXIgaSwgcHJveHksIHByb3ZpZGVyLCBjb3JlLFxuICAgIG1hbmlmZXN0UHJlZGljYXRlID0gZnVuY3Rpb24gKG5hbWUsIGZsb3csIG1zZykge1xuICAgICAgcmV0dXJuIGZsb3cgPT09ICdtYW5pZmVzdCcgJiYgbXNnLm5hbWUgPT09IG5hbWU7XG4gICAgfSxcbiAgICBvbk1hbmlmZXN0ID0gZnVuY3Rpb24gKGl0ZW0sIG1zZykge1xuICAgICAgdmFyIGRlZmluaXRpb24gPSB7XG4gICAgICAgIG5hbWU6IGl0ZW0uYXBpXG4gICAgICB9O1xuICAgICAgaWYgKCFtc2cubWFuaWZlc3QuYXBpIHx8ICFtc2cubWFuaWZlc3QuYXBpW2l0ZW0uYXBpXSkge1xuICAgICAgICBkZWZpbml0aW9uLmRlZmluaXRpb24gPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVmaW5pdGlvbi5kZWZpbml0aW9uID0gbXNnLm1hbmlmZXN0LmFwaVtpdGVtLmFwaV07XG4gICAgICB9XG4gICAgICB0aGlzLmJpbmRlci5nZXRFeHRlcm5hbCh0aGlzLnBvcnQsIGl0ZW0ubmFtZSwgZGVmaW5pdGlvbikudGhlbihcbiAgICAgICAgdGhpcy5hdHRhY2guYmluZCh0aGlzLCBpdGVtLm5hbWUsIGZhbHNlKVxuICAgICAgKTtcbiAgICB9LmJpbmQodGhpcyksXG4gICAgcHJvbWlzZSA9IG5ldyBQcm9taXNlQ29tcGF0KGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHRoaXMub25jZSgnc3RhcnQnLCByZXNvbHZlKTtcbiAgICB9LmJpbmQodGhpcykpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChpdGVtc1tpXS5hcGkgJiYgIWl0ZW1zW2ldLmRlZikge1xuICAgICAgaWYgKHRoaXMubWFuaWZlc3RzW2l0ZW1zW2ldLm5hbWVdKSB7XG4gICAgICAgIG9uTWFuaWZlc3QoaXRlbXNbaV0sIHtcbiAgICAgICAgICBtYW5pZmVzdDogdGhpcy5tYW5pZmVzdHNbaXRlbXNbaV0ubmFtZV1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9uY2UobWFuaWZlc3RQcmVkaWNhdGUuYmluZCh7fSwgaXRlbXNbaV0ubmFtZSksXG4gICAgICAgICAgICAgICAgICBvbk1hbmlmZXN0LmJpbmQodGhpcywgaXRlbXNbaV0pKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5iaW5kZXIuZ2V0RXh0ZXJuYWwodGhpcy5wb3J0LCBpdGVtc1tpXS5uYW1lLCBpdGVtc1tpXS5kZWYpLnRoZW4oXG4gICAgICAgIHRoaXMuYXR0YWNoLmJpbmQodGhpcywgaXRlbXNbaV0ubmFtZSwgaXRlbXNbaV0uZGVmICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXNbaV0uZGVmLnByb3ZpZGVzKVxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5wZW5kaW5nUG9ydHMgKz0gMTtcbiAgfVxuXG4gIC8vIEFsbG93IHJlc29sdXRpb24gb2YgZmlsZXMgYnkgcGFyZW50LlxuICB0aGlzLm1hbmFnZXIucmVzb3VyY2UuYWRkUmVzb2x2ZXIoZnVuY3Rpb24gKG1hbmlmZXN0LCB1cmwsIHJlc29sdmUpIHtcbiAgICB2YXIgaWQgPSB1dGlsLmdldElkKCk7XG4gICAgdGhpcy5yZXF1ZXN0c1tpZF0gPSByZXNvbHZlO1xuICAgIHRoaXMuZW1pdCh0aGlzLmV4dGVybmFsQ2hhbm5lbCwge1xuICAgICAgdHlwZTogJ3Jlc29sdmUnLFxuICAgICAgaWQ6IGlkLFxuICAgICAgZGF0YTogdXJsXG4gICAgfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0uYmluZCh0aGlzKSk7XG5cbiAgLy8gQXR0YWNoIENvcmUuXG4gIHRoaXMucGVuZGluZ1BvcnRzICs9IDE7XG5cbiAgY29yZSA9IHRoaXMuYXBpLmdldCgnY29yZScpLmRlZmluaXRpb247XG4gIHByb3ZpZGVyID0gbmV3IFByb3ZpZGVyKGNvcmUsIHRoaXMuZGVidWcpO1xuICB0aGlzLm1hbmFnZXIuZ2V0Q29yZShmdW5jdGlvbiAoQ29yZVByb3YpIHtcbiAgICBuZXcgQ29yZVByb3YodGhpcy5tYW5hZ2VyKS5zZXRJZCh0aGlzLmxpbmVhZ2UsIHRoaXMpO1xuICAgIHByb3ZpZGVyLmdldEludGVyZmFjZSgpLnByb3ZpZGVBc3luY2hyb25vdXMoQ29yZVByb3YpO1xuICB9LmJpbmQodGhpcykpO1xuXG4gIHRoaXMuZW1pdCh0aGlzLmNvbnRyb2xDaGFubmVsLCB7XG4gICAgdHlwZTogJ0xpbmsgdG8gY29yZScsXG4gICAgcmVxdWVzdDogJ2xpbmsnLFxuICAgIG5hbWU6ICdjb3JlJyxcbiAgICB0bzogcHJvdmlkZXJcbiAgfSk7XG5cbiAgdGhpcy5iaW5kZXIuZ2V0RXh0ZXJuYWwocHJvdmlkZXIsICdkZWZhdWx0Jywge1xuICAgIG5hbWU6ICdjb3JlJyxcbiAgICBkZWZpbml0aW9uOiBjb3JlXG4gIH0pLnRoZW4oZnVuY3Rpb24gKGNvcmUpIHtcbiAgICBjb3JlLmV4dGVybmFsLmdldExvZ2dlclN5bmMgPSB0aGlzLmRlYnVnLmdldExvZ2dpbmdTaGltKFxuICAgICAgICBjb3JlLmV4dGVybmFsKCkuZ2V0TG9nZ2VyKTtcbiAgICB0aGlzLmF0dGFjaCgnY29yZScsIGZhbHNlLCBjb3JlKTtcbiAgfS5iaW5kKHRoaXMpKTtcblxuXG4gIGlmICh0aGlzLnBlbmRpbmdQb3J0cyA9PT0gMCkge1xuICAgIHRoaXMuZW1pdCgnc3RhcnQnKTtcbiAgfVxuXG4gIHJldHVybiBwcm9taXNlO1xufTtcblxuLyoqXG4gKiBVcGRhdGUgdGhlIGV4cG9ydGVkIG1hbmlmZXN0IG9mIGEgZGVwZW5kZW5jeS5cbiAqIFNldHMgaXQgaW50ZXJuYWxseSBpZiBub3QgeWV0IGV4cG9ydGVkLCBvciBhdHRhY2hlcyB0aGUgcHJvcGVydHkgaWYgaXRcbiAqIGlzIGxvYWRlZCBhZnRlciB0aGUgbW9kdWxlIGhhcyBzdGFydGVkICh3ZSBkb24ndCBkZWxheSBzdGFydCB0byByZXRyZWl2ZVxuICogdGhlIG1hbmlmZXN0IG9mIHRoZSBkZXBlbmRlbmN5LilcbiAqIEBtZXRob2QgdXBkYXRlTWFuaWZlc3RcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBEZXBlbmRlbmN5XG4gKiBAcGFyYW0ge09iamVjdH0gbWFuaWZlc3QgVGhlIG1hbmlmZXN0IG9mIHRoZSBkZXBlbmRlbmN5XG4gKi9cbk1vZHVsZUludGVybmFsLnByb3RvdHlwZS51cGRhdGVNYW5pZmVzdCA9IGZ1bmN0aW9uIChuYW1lLCBtYW5pZmVzdCkge1xuICB2YXIgZXhwID0gdGhpcy5jb25maWcuZ2xvYmFsLmZyZWVkb207XG5cbiAgaWYgKGV4cCAmJiBleHBbbmFtZV0pIHtcbiAgICBleHBbbmFtZV0ubWFuaWZlc3QgPSBtYW5pZmVzdDtcbiAgLy8gSGFuZGxlIHJlcXVpcmUoKSBkZXBlbmRlbmN5IHJlc29sdXRpb24uXG4gIH0gZWxzZSBpZiAodGhpcy51bmJvdW5kUG9ydHNbbmFtZV0pIHtcbiAgICB0aGlzLmJpbmRlci5nZXRFeHRlcm5hbCh0aGlzLnBvcnQsIG5hbWUsXG4gICAgICAgIHRoaXMuYmluZGVyLmdldEFQSShtYW5pZmVzdCwgdGhpcy5hcGksIHRoaXMudW5ib3VuZFBvcnRzW25hbWVdLmFwaSkpXG4gICAgICAudGhlbihcbiAgICAgICAgdGhpcy5hdHRhY2guYmluZCh0aGlzLCBuYW1lLCBmYWxzZSlcbiAgICAgICkudGhlbihmdW5jdGlvbihwcm94eSkge1xuICAgICAgICB0aGlzLnVuYm91bmRQb3J0c1tuYW1lXS5jYWxsYmFjayhwcm94eSk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnVuYm91bmRQb3J0c1tuYW1lXTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5tYW5pZmVzdHNbbmFtZV0gPSBtYW5pZmVzdDtcbiAgfVxufTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hpY2ggcHJveHkgcG9ydHMgc2hvdWxkIGJlIGV4cG9zZWQgYnkgdGhpcyBtb2R1bGUuXG4gKiBAbWV0aG9kIG1hcFByb3hpZXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYW5pZmVzdCB0aGUgbW9kdWxlIEpTT04gbWFuaWZlc3QuXG4gKiBAcmV0dXJuIHtPYmplY3RbXX0gcHJveHkgZGVzY3JpcHRvcnMgZGVmaW5lZCBpbiB0aGUgbWFuaWZlc3QuXG4gKi9cbk1vZHVsZUludGVybmFsLnByb3RvdHlwZS5tYXBQcm94aWVzID0gZnVuY3Rpb24gKG1hbmlmZXN0KSB7XG4gIHZhciBwcm94aWVzID0gW10sIHNlZW4gPSBbJ2NvcmUnXSwgaSwgb2JqO1xuXG4gIGlmIChtYW5pZmVzdC5wZXJtaXNzaW9ucykge1xuICAgIGZvciAoaSA9IDA7IGkgPCBtYW5pZmVzdC5wZXJtaXNzaW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgb2JqID0ge1xuICAgICAgICBuYW1lOiBtYW5pZmVzdC5wZXJtaXNzaW9uc1tpXSxcbiAgICAgICAgZGVmOiB1bmRlZmluZWRcbiAgICAgIH07XG4gICAgICBvYmouZGVmID0gdGhpcy5hcGkuZ2V0KG9iai5uYW1lKTtcbiAgICAgIGlmIChzZWVuLmluZGV4T2Yob2JqLm5hbWUpIDwgMCAmJiBvYmouZGVmKSB7XG4gICAgICAgIHByb3hpZXMucHVzaChvYmopO1xuICAgICAgICBzZWVuLnB1c2gob2JqLm5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChtYW5pZmVzdC5kZXBlbmRlbmNpZXMpIHtcbiAgICB1dGlsLmVhY2hQcm9wKG1hbmlmZXN0LmRlcGVuZGVuY2llcywgZnVuY3Rpb24gKGRlc2MsIG5hbWUpIHtcbiAgICAgIG9iaiA9IHtcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgYXBpOiBkZXNjLmFwaVxuICAgICAgfTtcbiAgICAgIGlmIChzZWVuLmluZGV4T2YobmFtZSkgPCAwKSB7XG4gICAgICAgIGlmIChkZXNjLmFwaSkge1xuICAgICAgICAgIG9iai5kZWYgPSB0aGlzLmFwaS5nZXQoZGVzYy5hcGkpO1xuICAgICAgICB9XG4gICAgICAgIHByb3hpZXMucHVzaChvYmopO1xuICAgICAgICBzZWVuLnB1c2gobmFtZSk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGlmIChtYW5pZmVzdC5wcm92aWRlcykge1xuICAgIGZvciAoaSA9IDA7IGkgPCBtYW5pZmVzdC5wcm92aWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgb2JqID0ge1xuICAgICAgICBuYW1lOiBtYW5pZmVzdC5wcm92aWRlc1tpXSxcbiAgICAgICAgZGVmOiB1bmRlZmluZWRcbiAgICAgIH07XG4gICAgICBvYmouZGVmID0gdGhpcy5hcGkuZ2V0KG9iai5uYW1lKTtcbiAgICAgIGlmIChvYmouZGVmKSB7XG4gICAgICAgIG9iai5kZWYucHJvdmlkZXMgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChtYW5pZmVzdC5hcGkgJiYgbWFuaWZlc3QuYXBpW29iai5uYW1lXSkge1xuICAgICAgICBvYmouZGVmID0ge1xuICAgICAgICAgIG5hbWU6IG9iai5uYW1lLFxuICAgICAgICAgIGRlZmluaXRpb246IG1hbmlmZXN0LmFwaVtvYmoubmFtZV0sXG4gICAgICAgICAgcHJvdmlkZXM6IHRydWVcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGVidWcud2FybignTW9kdWxlIHdpbGwgbm90IHByb3ZpZGUgXCInICsgb2JqLm5hbWUgK1xuICAgICAgICAgICdcIiwgc2luY2Ugbm8gZGVjbGFyYXRpb24gY2FuIGJlIGZvdW5kLicpO1xuICAgICAgICAvKmpzbGludCBjb250aW51ZTp0cnVlKi9cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICAvKmpzbGludCBjb250aW51ZTpmYWxzZSovXG4gICAgICBpZiAoc2Vlbi5pbmRleE9mKG9iai5uYW1lKSA8IDApIHtcbiAgICAgICAgcHJveGllcy5wdXNoKG9iaik7XG4gICAgICAgIHNlZW4ucHVzaChvYmoubmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3hpZXM7XG59O1xuXG4vKipcbiAqIExvYWQgZXh0ZXJuYWwgc2NyaXB0cyBpbnRvIHRoaXMgbmFtZXNwYWNlLlxuICogQG1ldGhvZCBsb2FkU2NyaXB0c1xuICogQHBhcmFtIHtTdHJpbmd9IGZyb20gVGhlIFVSTCBvZiB0aGlzIG1vZHVsZXMncyBtYW5pZmVzdC5cbiAqIEBwYXJhbSB7U3RyaW5nW119IHNjcmlwdHMgVGhlIFVSTHMgb2YgdGhlIHNjcmlwdHMgdG8gbG9hZC5cbiAqL1xuTW9kdWxlSW50ZXJuYWwucHJvdG90eXBlLmxvYWRTY3JpcHRzID0gZnVuY3Rpb24gKGZyb20sIHNjcmlwdHMpIHtcbiAgdmFyIGltcG9ydGVyID0gZnVuY3Rpb24gKHNjcmlwdCwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuY29uZmlnLmdsb2JhbC5pbXBvcnRTY3JpcHRzKHNjcmlwdCk7XG4gICAgICByZXNvbHZlKHRydWUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJlamVjdChlKTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKSxcbiAgICBzY3JpcHRzX2NvdW50LFxuICAgIGxvYWQ7XG4gIGlmICh0eXBlb2Ygc2NyaXB0cyA9PT0gJ3N0cmluZycpIHtcbiAgICBzY3JpcHRzX2NvdW50ID0gMTtcbiAgfSBlbHNlIHtcbiAgICBzY3JpcHRzX2NvdW50ID0gc2NyaXB0cy5sZW5ndGg7XG4gIH1cblxuICBsb2FkID0gZnVuY3Rpb24gKG5leHQpIHtcbiAgICBpZiAobmV4dCA9PT0gc2NyaXB0c19jb3VudCkge1xuICAgICAgdGhpcy5lbWl0KHRoaXMuZXh0ZXJuYWxDaGFubmVsLCB7XG4gICAgICAgIHR5cGU6IFwicmVhZHlcIlxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHNjcmlwdDtcbiAgICBpZiAodHlwZW9mIHNjcmlwdHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBzY3JpcHQgPSBzY3JpcHRzO1xuICAgIH0gZWxzZSB7XG4gICAgICBzY3JpcHQgPSBzY3JpcHRzW25leHRdO1xuICAgIH1cblxuICAgIHRoaXMubWFuYWdlci5yZXNvdXJjZS5nZXQoZnJvbSwgc2NyaXB0KS50aGVuKGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgIHRoaXMudHJ5TG9hZChpbXBvcnRlciwgdXJsKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbG9hZChuZXh0ICsgMSk7XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH0uYmluZCh0aGlzKTtcblxuXG5cbiAgaWYgKCF0aGlzLmNvbmZpZy5nbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgIGltcG9ydGVyID0gZnVuY3Rpb24gKHVybCwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgc2NyaXB0ID0gdGhpcy5jb25maWcuZ2xvYmFsLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgc2NyaXB0LnNyYyA9IHVybDtcbiAgICAgIHNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgcmVzb2x2ZSwgdHJ1ZSk7XG4gICAgICBzY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCByZWplY3QsIHRydWUpO1xuICAgICAgdGhpcy5jb25maWcuZ2xvYmFsLmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9LmJpbmQodGhpcyk7XG4gIH1cblxuICBsb2FkKDApO1xufTtcblxuLyoqXG4gKiBBdHRlbXB0IHRvIGxvYWQgcmVzb2x2ZWQgc2NyaXB0cyBpbnRvIHRoZSBuYW1lc3BhY2UuXG4gKiBAbWV0aG9kIHRyeUxvYWRcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpbXBvcnRlciBUaGUgYWN0dWFsIGltcG9ydCBmdW5jdGlvblxuICogQHBhcmFtIHtTdHJpbmdbXX0gdXJscyBUaGUgcmVzb3ZlZCBVUkxzIHRvIGxvYWQuXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gY29tcGxldGlvbiBvZiBsb2FkXG4gKi9cbk1vZHVsZUludGVybmFsLnByb3RvdHlwZS50cnlMb2FkID0gZnVuY3Rpb24gKGltcG9ydGVyLCB1cmwpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ29tcGF0KGltcG9ydGVyLmJpbmQoe30sIHVybCkpLnRoZW4oZnVuY3Rpb24gKHZhbCkge1xuICAgIHJldHVybiB2YWw7XG4gIH0sIGZ1bmN0aW9uIChlKSB7XG4gICAgdGhpcy5kZWJ1Zy53YXJuKGUuc3RhY2spO1xuICAgIHRoaXMuZGVidWcuZXJyb3IoXCJFcnJvciBsb2FkaW5nIFwiICsgdXJsLCBlKTtcbiAgICB0aGlzLmRlYnVnLmVycm9yKFwiSWYgdGhlIHN0YWNrIHRyYWNlIGlzIG5vdCB1c2VmdWwsIHNlZSBodHRwczovL1wiICtcbiAgICAgICAgXCJnaXRodWIuY29tL2ZyZWVkb21qcy9mcmVlZG9tL3dpa2kvRGVidWdnaW5nXCIpO1xuICAgIC8vIFRoaXMgZXZlbnQgaXMgY2F1Z2h0IGluIE1vZHVsZSwgd2hpY2ggd2lsbCB0aGVuIHJlc3BvbmQgdG8gYW55IG1lc3NhZ2VzXG4gICAgLy8gZm9yIHRoZSBwcm92aWRlciB3aXRoIHNob3J0LWNpcmN1aXQgZXJyb3JzLlxuICAgIHRoaXMuZW1pdCh0aGlzLmV4dGVybmFsQ2hhbm5lbCwge1xuICAgICAgdHlwZTogJ2Vycm9yJ1xuICAgIH0pO1xuICAgIHRocm93IGU7XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1vZHVsZUludGVybmFsO1xuIiwiLypnbG9iYWxzIFhNTEh0dHBSZXF1ZXN0ICovXG4vKmpzbGludCBpbmRlbnQ6Mix3aGl0ZTp0cnVlLG5vZGU6dHJ1ZSxzbG9wcHk6dHJ1ZSAqL1xudmFyIFByb21pc2VDb21wYXQgPSByZXF1aXJlKCdlczYtcHJvbWlzZScpLlByb21pc2U7XG52YXIgTW9kdWxlID0gcmVxdWlyZSgnLi9tb2R1bGUnKTtcbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbi8qKlxuICogVGhlIFBvbGljeSByZWdpc3RyeSBmb3IgZnJlZWRvbS5qcy4gIFVzZWQgdG8gbG9vayB1cCBtb2R1bGVzIGFuZCBwcm92aWRlXG4gKiBtaWdyYXRpb24gYW5kIGNvYWxsZXNpbmcgb2YgZXhlY3V0aW9uLlxuICogQENsYXNzIFBvbGljeVxuICogQHBhcmFtIHtNYW5hZ2VyfSBtYW5hZ2VyIFRoZSBtYW5hZ2VyIG9mIHRoZSBhY3RpdmUgcnVudGltZS5cbiAqIEBwYXJhbSB7UmVzb3VyY2V9IHJlc291cmNlIFRoZSByZXNvdXJjZSBsb2FkZXIgb2YgdGhlIGFjdGl2ZSBydW50aW1lLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgbG9jYWwgY29uZmlnLlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnZhciBQb2xpY3kgPSBmdW5jdGlvbihtYW5hZ2VyLCByZXNvdXJjZSwgY29uZmlnKSB7XG4gIHRoaXMuYXBpID0gbWFuYWdlci5hcGk7XG4gIHRoaXMuZGVidWcgPSBtYW5hZ2VyLmRlYnVnO1xuICB0aGlzLmxvY2F0aW9uID0gY29uZmlnLmxvY2F0aW9uO1xuICB0aGlzLnJlc291cmNlID0gcmVzb3VyY2U7XG5cbiAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gIHRoaXMucnVudGltZXMgPSBbXTtcbiAgdGhpcy5wb2xpY2llcyA9IFtdO1xuICB0aGlzLnBlbmRpbmcgPSB7fTtcbiAgdXRpbC5oYW5kbGVFdmVudHModGhpcyk7XG5cbiAgdGhpcy5hZGQobWFuYWdlciwgY29uZmlnLnBvbGljeSk7XG4gIHRoaXMucnVudGltZXNbMF0ubG9jYWwgPSB0cnVlO1xufTtcblxuLyoqXG4gKiBUaGUgcG9saWN5IGEgcnVudGltZSBpcyBleHBlY3RlZCB0byBoYXZlIHVubGVzcyBpdCBzcGVjaWZpZXNcbiAqIG90aGVyd2lzZS5cbiAqIFRPRE86IGNvbnNpZGVyIG1ha2luZyBzdGF0aWNcbiAqIEBwcm9wZXJ0eSBkZWZhdWx0UG9saWN5XG4gKi9cblBvbGljeS5wcm90b3R5cGUuZGVmYXVsdFBvbGljeSA9IHtcbiAgYmFja2dyb3VuZDogZmFsc2UsIC8vIENhbiB0aGlzIHJ1bnRpbWUgcnVuICdiYWNrZ3JvdW5kJyBtb2R1bGVzP1xuICBpbnRlcmFjdGl2ZTogdHJ1ZSAvLyBJcyB0aGVyZSBhIHZpZXcgYXNzb2NpYXRlZCB3aXRoIHRoaXMgcnVudGltZT9cbiAgLy8gVE9ETzogcmVtYWluaW5nIHJ1bnRpbWUgcG9saWN5LlxufTtcblxuLyoqXG4gKiBUaGUgY29uc3RyYWludHMgYSBjb2RlIG1vZHVsZXMgaXMgZXhwZWN0ZWQgdG8gaGF2ZSB1bmxlc3MgaXQgc3BlY2lmaWVzXG4gKiBvdGhlcndpc2UuXG4gKiBUT0RPOiBjb25zaWRlciBtYWtpbmcgc3RhdGljXG4gKiBAcHJvcGVydHkgZGVmYXVsdENvbnN0cmFpbnRzXG4gKi9cblBvbGljeS5wcm90b3R5cGUuZGVmYXVsdENvbnN0cmFpbnRzID0ge1xuICBpc29sYXRpb246IFwiYWx3YXlzXCIsIC8vIHZhbHVlczogYWx3YXlzLCBhcHAsIG5ldmVyXG4gIHBsYWNlbWVudDogXCJsb2NhbFwiIC8vIHZhbHVlczogbG9jYWwsIHN0YWJsZSwgcmVkdW5kYW50XG4gIC8vIFRPRE86IHJlbWFpbmluZyBjb25zdHJhaW50cywgZXhwcmVzcyBwbGF0Zm9ybS1zcGVjaWZpYyBkZXBlbmRlbmNpZXMuXG59O1xuXG4vKipcbiAqIFJlc29sdmUgYSBtb2R1bGUgZnJvbSBpdHMgY2Fub25pY2FsIFVSTC5cbiAqIFJlcG9uZHMgd2l0aCB0aGUgcHJvbWlzZSBvZiBhIHBvcnQgcmVwcmVzZW50aW5nIHRoZSBtb2R1bGUsIFxuICogQG1ldGhvZCBnZXRcbiAqIEBwYXJhbSB7U3RyaW5nW119IGxpbmVhZ2UgVGhlIGxpbmVhZ2Ugb2YgdGhlIHJlcXVlc3RpbmcgbW9kdWxlLlxuICogQHBhcmFtIHtTdHJpbmd9IGlkIFRoZSBjYW5vbmljYWwgSUQgb2YgdGhlIG1vZHVsZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gQSBwcm9taXNlIGZvciB0aGUgbG9jYWwgcG9ydCB0b3dhcmRzIHRoZSBtb2R1bGUuXG4gKi9cblBvbGljeS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24obGluZWFnZSwgaWQpIHtcbiAgXG4gIC8vIE1ha2Ugc3VyZSB0aGF0IGEgbW9kdWxlIGlzbid0IGdldHRpbmcgbG9jYXRlZCB0d2ljZSBhdCB0aGUgc2FtZSB0aW1lLlxuICAvLyBUaGlzIGlzIHJlc29sdmVkIGJ5IGRlbGF5aW5nIGlmIGl0IHVudGlsIHdlIHNlZSBpdCBpbiBhICdtb2R1bGVBZGQnIGV2ZW50LlxuICBpZiAodGhpcy5wZW5kaW5nW2lkXSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB0aGlzLm9uY2UoJ3BsYWNlZCcsIGZ1bmN0aW9uKGwsIGkpIHtcbiAgICAgICAgdGhpcy5nZXQobCwgaSkudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgfS5iaW5kKHRoaXMsIGxpbmVhZ2UsIGlkKSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnBlbmRpbmdbaWRdID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmxvYWRNYW5pZmVzdChpZCkudGhlbihmdW5jdGlvbihtYW5pZmVzdCkge1xuICAgIHZhciBjb25zdHJhaW50cyA9IHRoaXMub3ZlcmxheSh0aGlzLmRlZmF1bHRDb25zdHJhaW50cywgbWFuaWZlc3QuY29uc3RyYWludHMpLFxuICAgICAgICBydW50aW1lID0gdGhpcy5maW5kRGVzdGluYXRpb24obGluZWFnZSwgaWQsIGNvbnN0cmFpbnRzKSxcbiAgICAgICAgcG9ydElkO1xuICAgIGlmIChydW50aW1lLmxvY2FsKSB7XG4gICAgICBwb3J0SWQgPSB0aGlzLmlzUnVubmluZyhydW50aW1lLCBpZCwgbGluZWFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3RyYWludHMuaXNvbGF0aW9uICE9PSAnbmV2ZXInKTtcbiAgICAgIGlmKGNvbnN0cmFpbnRzLmlzb2xhdGlvbiAhPT0gJ2Fsd2F5cycgJiYgcG9ydElkKSB7XG4gICAgICAgIHRoaXMuZGVidWcuaW5mbygnUmV1c2VkIHBvcnQgJyArIHBvcnRJZCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnBlbmRpbmdbaWRdO1xuICAgICAgICB0aGlzLmVtaXQoJ3BsYWNlZCcpO1xuICAgICAgICByZXR1cm4gcnVudGltZS5tYW5hZ2VyLmdldFBvcnQocG9ydElkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgTW9kdWxlKGlkLCBtYW5pZmVzdCwgbGluZWFnZSwgdGhpcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRPRE86IENyZWF0ZSBhIHBvcnQgdG8gZ28gdG8gdGhlIHJlbW90ZSBydW50aW1lLlxuICAgICAgdGhpcy5kZWJ1Zy5lcnJvcignVW5leHBlY3RlZCBsb2NhdGlvbiBzZWxlY3RlZCBmb3IgbW9kdWxlIHBsYWNlbWVudCcpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpLCBmdW5jdGlvbihlcnIpIHtcbiAgICB0aGlzLmRlYnVnLmVycm9yKCdQb2xpY3kgRXJyb3IgUmVzb2x2aW5nICcgKyBpZCwgZXJyKTtcbiAgICB0aHJvdyhlcnIpO1xuICB9LmJpbmQodGhpcykpO1xufTtcblxuLyoqXG4gKiBGaW5kIHRoZSBydW50aW1lIGRlc3RpbmF0aW9uIGZvciBhIG1vZHVsZSBnaXZlbiBpdHMgY29uc3RyYWludHMgYW5kIHRoZVxuICogbW9kdWxlIGNyZWF0aW5nIGl0LlxuICogQG1ldGhvZCBmaW5kRGVzdGluYXRpb25cbiAqIEBwYXJhbSB7U3RyaW5nW119IGxpbmVhZ2UgVGhlIGlkZW50aXR5IG9mIHRoZSBtb2R1bGUgY3JlYXRpbmcgdGhpcyBtb2R1bGUuXG4gKiBAcGFyYW0ge1N0cmluZ10gaWQgVGhlIGNhbm9uaWNhbCB1cmwgb2YgdGhlIG1vZHVsZVxuICogQHBhcmFtIHtPYmplY3R9IGNvbnN0cmFpbnRzIENvbnN0cmFpbnRzIGZvciB0aGUgbW9kdWxlLlxuICogQHJldHVybnMge09iamVjdH0gVGhlIGVsZW1lbnQgb2YgdGhpcy5ydW50aW1lcyB3aGVyZSB0aGUgbW9kdWxlIHNob3VsZCBydW4uXG4gKi9cblBvbGljeS5wcm90b3R5cGUuZmluZERlc3RpbmF0aW9uID0gZnVuY3Rpb24obGluZWFnZSwgaWQsIGNvbnN0cmFpbnRzKSB7XG4gIHZhciBpO1xuXG4gIC8vIFN0ZXAgMTogaWYgYW4gaW5zdGFuY2UgYWxyZWFkeSBleGlzdHMsIHRoZSBtXG4gIGlmIChjb25zdHJhaW50cy5pc29sYXRpb24gIT09ICdhbHdheXMnKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMucG9saWNpZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICh0aGlzLmlzUnVubmluZyh0aGlzLnJ1bnRpbWVzW2ldLCBpZCwgbGluZWFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdHJhaW50cy5pc29sYXRpb24gIT09ICduZXZlcicpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJ1bnRpbWVzW2ldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0ZXAgMjogaWYgdGhlIG1vZHVsZSB3YW50cyBzdGFiaWxpdHksIGl0IG1heSBuZWVkIHRvIGJlIHJlbW90ZS5cbiAgaWYgKGNvbnN0cmFpbnRzLnBsYWNlbWVudCA9PT0gJ2xvY2FsJykge1xuICAgIHJldHVybiB0aGlzLnJ1bnRpbWVzWzBdO1xuICB9IGVsc2UgaWYgKGNvbnN0cmFpbnRzLnBsYWNlbWVudCA9PT0gJ3N0YWJsZScpIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5wb2xpY2llcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHRoaXMucG9saWNpZXNbaV0uYmFja2dyb3VuZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ydW50aW1lc1tpXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBTdGVwIDM6IGlmIHRoZSBtb2R1bGUgbmVlZHMgbG9uZ2V2aXR5IC8gaW50ZXJhY3Rpdml0eSwgaXQgbWF5IHdhbnQgdG8gYmUgcmVtb3RlLlxuICByZXR1cm4gdGhpcy5ydW50aW1lc1swXTtcbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEga25vd24gcnVudGltZSBpcyBydW5uaW5nIGFuIGFwcHJvcHJpYXRlIGluc3RhbmNlIG9mIGEgbW9kdWxlLlxuICogQG1ldGhvZCBpc1J1bm5pbmdcbiAqIEBwYXJhbSB7T2JqZWN0fSBydW50aW1lIFRoZSBydW50aW1lIHRvIGNoZWNrLlxuICogQHBhcmFtIHtTdHJpbmd9IGlkIFRoZSBtb2R1bGUgdG8gbG9vayBmb3IuXG4gKiBAcGFyYW0ge1N0cmluZ1tdfSBmcm9tIFRoZSBpZGVudGlmaWVyIG9mIHRoZSByZXF1ZXN0aW5nIG1vZHVsZS5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gZnVsbE1hdGNoIElmIHRoZSBtb2R1bGUgbmVlZHMgdG8gYmUgaW4gdGhlIHNhbWUgYXBwLlxuICogQHJldHVybnMge1N0cmluZ3xCb29sZWFufSBUaGUgTW9kdWxlIGlkIGlmIGl0IGlzIHJ1bm5pbmcsIG9yIGZhbHNlIGlmIG5vdC5cbiAqL1xuUG9saWN5LnByb3RvdHlwZS5pc1J1bm5pbmcgPSBmdW5jdGlvbihydW50aW1lLCBpZCwgZnJvbSwgZnVsbE1hdGNoKSB7XG4gIHZhciBpID0gMCwgaiA9IDAsIG9rYXk7XG4gIGZvciAoaSA9IDA7IGkgPCBydW50aW1lLm1vZHVsZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoZnVsbE1hdGNoICYmIHJ1bnRpbWUubW9kdWxlc1tpXS5sZW5ndGggPT09IGZyb20ubGVuZ3RoICsgMSkge1xuICAgICAgb2theSA9IHRydWU7XG4gICAgICBmb3IgKGogPSAwOyBqIDwgZnJvbS5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBpZiAocnVudGltZS5tb2R1bGVzW2ldW2ogKyAxXS5pbmRleE9mKGZyb21bal0pICE9PSAwKSB7XG4gICAgICAgICAgb2theSA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocnVudGltZS5tb2R1bGVzW2ldWzBdLmluZGV4T2YoaWQpICE9PSAwKSB7XG4gICAgICAgIG9rYXkgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9rYXkpIHtcbiAgICAgICAgcmV0dXJuIHJ1bnRpbWUubW9kdWxlc1tpXVswXTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFmdWxsTWF0Y2ggJiYgcnVudGltZS5tb2R1bGVzW2ldWzBdLmluZGV4T2YoaWQpID09PSAwKSB7XG4gICAgICByZXR1cm4gcnVudGltZS5tb2R1bGVzW2ldWzBdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIEdldCBhIHByb21pc2Ugb2YgdGhlIG1hbmlmZXN0IGZvciBhIG1vZHVsZSBJRC5cbiAqIEBtZXRob2QgbG9hZE1hbmlmZXN0XG4gKiBAcGFyYW0ge1N0cmluZ30gbWFuaWZlc3QgVGhlIGNhbm9uaWNhbCBJRCBvZiB0aGUgbWFuaWZlc3RcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBQcm9taXNlIGZvciB0aGUganNvbiBjb250ZW50cyBvZiB0aGUgbWFuaWZlc3QuXG4gKi9cblBvbGljeS5wcm90b3R5cGUubG9hZE1hbmlmZXN0ID0gZnVuY3Rpb24obWFuaWZlc3QpIHtcbiAgcmV0dXJuIHRoaXMucmVzb3VyY2UuZ2V0Q29udGVudHMobWFuaWZlc3QpLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciByZXNwID0ge307XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xuICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICB0aGlzLmRlYnVnLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgXCIgKyBtYW5pZmVzdCArIFwiOiBcIiArIGVycik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBNYW5pZmVzdCBBdmFpbGFibGVcIik7XG4gICAgfVxuICB9LmJpbmQodGhpcykpO1xufTtcblxuLyoqXG4gKiBBZGQgYSBydW50aW1lIHRvIGtlZXAgdHJhY2sgb2YgaW4gdGhpcyBwb2xpY3kuXG4gKiBAbWV0aG9kIGFkZFxuICogQHBhcmFtIHtmZG9tLnBvcnR9IHBvcnQgVGhlIHBvcnQgdG8gdXNlIGZvciBtb2R1bGUgbGlmZXRpbWUgaW5mb1xuICogQHBhcmFtIHtPYmplY3R9IHBvbGljeSBUaGUgcG9saWN5IG9mIHRoZSBydW50aW1lLlxuICovXG5Qb2xpY3kucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKHBvcnQsIHBvbGljeSkge1xuICB2YXIgcnVudGltZSA9IHtcbiAgICBtYW5hZ2VyOiBwb3J0LFxuICAgIG1vZHVsZXM6IFtdXG4gIH07XG4gIHRoaXMucnVudGltZXMucHVzaChydW50aW1lKTtcbiAgdGhpcy5wb2xpY2llcy5wdXNoKHRoaXMub3ZlcmxheSh0aGlzLmRlZmF1bHRQb2xpY3ksIHBvbGljeSkpO1xuXG4gIHBvcnQub24oJ21vZHVsZUFkZCcsIGZ1bmN0aW9uKHJ1bnRpbWUsIGluZm8pIHtcbiAgICB2YXIgbGluZWFnZSA9IFtdO1xuICAgIGxpbmVhZ2UgPSBsaW5lYWdlLmNvbmNhdChpbmZvLmxpbmVhZ2UpO1xuICAgIGxpbmVhZ2VbMF0gPSBpbmZvLmlkO1xuICAgIHJ1bnRpbWUubW9kdWxlcy5wdXNoKGxpbmVhZ2UpO1xuICAgIGlmICh0aGlzLnBlbmRpbmdbaW5mby5saW5lYWdlWzBdXSkge1xuICAgICAgZGVsZXRlIHRoaXMucGVuZGluZ1tpbmZvLmxpbmVhZ2VbMF1dO1xuICAgICAgdGhpcy5lbWl0KCdwbGFjZWQnKTtcbiAgICB9XG4gIH0uYmluZCh0aGlzLCBydW50aW1lKSk7XG4gIHBvcnQub24oJ21vZHVsZVJlbW92ZScsIGZ1bmN0aW9uKHJ1bnRpbWUsIGluZm8pIHtcbiAgICB2YXIgbGluZWFnZSA9IFtdLCBpLCBtb2RGaW5nZXJwcmludDtcbiAgICBsaW5lYWdlID0gbGluZWFnZS5jb25jYXQoaW5mby5saW5lYWdlKTtcbiAgICBsaW5lYWdlWzBdID0gaW5mby5pZDtcbiAgICBtb2RGaW5nZXJwcmludCA9IGxpbmVhZ2UudG9TdHJpbmcoKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBydW50aW1lLm1vZHVsZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChydW50aW1lLm1vZHVsZXNbaV0udG9TdHJpbmcoKSA9PT0gbW9kRmluZ2VycHJpbnQpIHtcbiAgICAgICAgcnVudGltZS5tb2R1bGVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmRlYnVnLndhcm4oJ1Vua25vd24gbW9kdWxlIHRvIHJlbW92ZTogJywgaW5mby5pZCk7XG4gIH0uYmluZCh0aGlzLCBydW50aW1lKSk7XG59O1xuXG4vKipcbiAqIE92ZXJsYXkgYSBzcGVjaWZpYyBwb2xpY3kgb3IgY29uc3RyYWludCBpbnN0YW5jZSBvbiBkZWZhdWx0IHNldHRpbmdzLlxuICogVE9ETzogY29uc2lkZXIgbWFraW5nIHN0YXRpYy5cbiAqIEBtZXRob2Qgb3ZlcmxheVxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBiYXNlIFRoZSBkZWZhdWx0IG9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG92ZXJsYXkgVGhlIHN1cGVyY2VlZGluZyBvYmplY3RcbiAqIEByZXR1cm5zIHtPYmplY3R9IEEgbmV3IG9iamVjdCB3aXRoIGJhc2UgcGFyYW1ldGVycyB3aGVuIG5vdCBzZXQgaW4gb3ZlcmxheS5cbiAqL1xuUG9saWN5LnByb3RvdHlwZS5vdmVybGF5ID0gZnVuY3Rpb24oYmFzZSwgb3ZlcmxheSkge1xuICB2YXIgcmV0ID0ge307XG5cbiAgdXRpbC5taXhpbihyZXQsIGJhc2UpO1xuICBpZiAob3ZlcmxheSkge1xuICAgIHV0aWwubWl4aW4ocmV0LCBvdmVybGF5LCB0cnVlKTtcbiAgfVxuICByZXR1cm4gcmV0O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQb2xpY3k7XG4iLCIvKmpzbGludCBpbmRlbnQ6Miwgbm9kZTp0cnVlLCBzbG9wcHk6dHJ1ZSwgYnJvd3Nlcjp0cnVlICovXG52YXIgQ29uc3VtZXIgPSByZXF1aXJlKCcuL2NvbnN1bWVyJyk7XG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG4vKipcbiAqIEEgZnJlZWRvbSBwb3J0IGZvciBhIHVzZXItYWNjZXNzYWJsZSBwcm92aWRlci5cbiAqIEBjbGFzcyBQcm92aWRlclxuICogQGltcGxlbWVudHMgUG9ydFxuICogQHVzZXMgaGFuZGxlRXZlbnRzXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmIFRoZSBpbnRlcmZhY2Ugb2YgdGhlIHByb3ZpZGVyLlxuICogQHBhcmFtIHtEZWJ1Z30gZGVidWcgVGhlIGRlYnVnZ2VyIHRvIHVzZSBmb3IgbG9nZ2luZy5cbiAqIEBjb250cnVjdG9yXG4gKi9cbnZhciBQcm92aWRlciA9IGZ1bmN0aW9uIChkZWYsIGRlYnVnKSB7XG4gIHRoaXMuaWQgPSBDb25zdW1lci5uZXh0SWQoKTtcbiAgdXRpbC5oYW5kbGVFdmVudHModGhpcyk7XG4gIHRoaXMuZGVidWcgPSBkZWJ1ZztcblxuICB0aGlzLmRlZmluaXRpb24gPSBkZWY7XG4gIHRoaXMubW9kZSA9IFByb3ZpZGVyLm1vZGUuc3luY2hyb25vdXM7XG4gIHRoaXMuY2hhbm5lbHMgPSB7fTtcbiAgdGhpcy5pZmFjZSA9IG51bGw7XG4gIHRoaXMuY2xvc2VIYW5kbGVycyA9IHt9O1xuICB0aGlzLnByb3ZpZGVyQ2xzID0gbnVsbDtcblxuICB0aGlzLmlmYWNlcyA9IHt9O1xuICB0aGlzLmVtaXRzID0ge307XG59O1xuXG4vKipcbiAqIFByb3ZpZGVyIG1vZGVzIG9mIG9wZXJhdGlvbi5cbiAqIEBwcm9wZXJ0eSBtb2RlXG4gKiBAc3RhdGljXG4gKiBAdHlwZSBudW1iZXJcbiAqL1xuUHJvdmlkZXIubW9kZSA9IHtcbiAgc3luY2hyb25vdXM6IDAsXG4gIGFzeW5jaHJvbm91czogMSxcbiAgcHJvbWlzZXM6IDJcbn07XG5cbi8qKlxuICogUmVjZWl2ZSBleHRlcm5hbCBtZXNzYWdlcyBmb3IgdGhlIHByb3ZpZGVyLlxuICogQG1ldGhvZCBvbk1lc3NhZ2VcbiAqIEBwYXJhbSB7U3RyaW5nfSBzb3VyY2UgdGhlIHNvdXJjZSBpZGVudGlmaWVyIG9mIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2UgVGhlIHJlY2VpdmVkIG1lc3NhZ2UuXG4gKi9cblByb3ZpZGVyLnByb3RvdHlwZS5vbk1lc3NhZ2UgPSBmdW5jdGlvbiAoc291cmNlLCBtZXNzYWdlKSB7XG4gIGlmIChzb3VyY2UgPT09ICdjb250cm9sJyAmJiBtZXNzYWdlLnJldmVyc2UpIHtcbiAgICB0aGlzLmNoYW5uZWxzW21lc3NhZ2UubmFtZV0gPSBtZXNzYWdlLmNoYW5uZWw7XG4gICAgdGhpcy5lbWl0KG1lc3NhZ2UuY2hhbm5lbCwge1xuICAgICAgdHlwZTogJ2NoYW5uZWwgYW5ub3VuY2VtZW50JyxcbiAgICAgIGNoYW5uZWw6IG1lc3NhZ2UucmV2ZXJzZVxuICAgIH0pO1xuICAgIHRoaXMuZW1pdCgnc3RhcnQnKTtcbiAgfSBlbHNlIGlmIChzb3VyY2UgPT09ICdjb250cm9sJyAmJiBtZXNzYWdlLnR5cGUgPT09ICdzZXR1cCcpIHtcbiAgICB0aGlzLmNvbnRyb2xDaGFubmVsID0gbWVzc2FnZS5jaGFubmVsO1xuICB9IGVsc2UgaWYgKHNvdXJjZSA9PT0gJ2NvbnRyb2wnICYmIG1lc3NhZ2UudHlwZSA9PT0gJ2Nsb3NlJykge1xuICAgIGlmIChtZXNzYWdlLmNoYW5uZWwgPT09IHRoaXMuY29udHJvbENoYW5uZWwpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmNvbnRyb2xDaGFubmVsO1xuICAgIH1cbiAgICB0aGlzLmNsb3NlKCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCF0aGlzLmNoYW5uZWxzW3NvdXJjZV0gJiYgbWVzc2FnZS5jaGFubmVsKSB7XG4gICAgICB0aGlzLmNoYW5uZWxzW3NvdXJjZV0gPSBtZXNzYWdlLmNoYW5uZWw7XG4gICAgICB0aGlzLmVtaXQoJ3N0YXJ0Jyk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmICghdGhpcy5jaGFubmVsc1tzb3VyY2VdKSB7XG4gICAgICB0aGlzLmRlYnVnLndhcm4oJ01lc3NhZ2UgZnJvbSB1bmNvbmZpZ3VyZWQgc291cmNlOiAnICsgc291cmNlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS50eXBlID09PSAnY2xvc2UnICYmIG1lc3NhZ2UudG8pIHtcbiAgICAgIHRoaXMudGVhcmRvd24oc291cmNlLCBtZXNzYWdlLnRvKTtcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2UudG8gJiYgdGhpcy5lbWl0c1tzb3VyY2VdICYmXG4gICAgICAgICAgICAgICB0aGlzLmVtaXRzW3NvdXJjZV1bbWVzc2FnZS50b10pIHtcbiAgICAgIG1lc3NhZ2UubWVzc2FnZS50byA9IG1lc3NhZ2UudG87XG4gICAgICB0aGlzLmVtaXRzW3NvdXJjZV1bbWVzc2FnZS50b10obWVzc2FnZS5tZXNzYWdlKTtcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2UudG8gJiYgbWVzc2FnZS5tZXNzYWdlICYmXG4gICAgICAgIG1lc3NhZ2UubWVzc2FnZS50eXBlID09PSAnY29uc3RydWN0Jykge1xuICAgICAgdmFyIGFyZ3MgPSBDb25zdW1lci5wb3J0YWJsZVRvTWVzc2FnZShcbiAgICAgICAgICAodGhpcy5kZWZpbml0aW9uLmNvbnN0cnVjdG9yICYmIHRoaXMuZGVmaW5pdGlvbi5jb25zdHJ1Y3Rvci52YWx1ZSkgP1xuICAgICAgICAgICAgICB0aGlzLmRlZmluaXRpb24uY29uc3RydWN0b3IudmFsdWUgOiBbXSxcbiAgICAgICAgICBtZXNzYWdlLm1lc3NhZ2UsXG4gICAgICAgICAgdGhpcy5kZWJ1Z1xuICAgICAgICApLFxuICAgICAgICBpbnN0YW5jZTtcbiAgICAgIGlmICghdGhpcy5pZmFjZXNbc291cmNlXSkge1xuICAgICAgICB0aGlzLmlmYWNlc1tzb3VyY2VdID0ge307XG4gICAgICAgIHRoaXMuZW1pdHNbc291cmNlXSA9IHt9O1xuICAgICAgfVxuICAgICAgdGhpcy5pZmFjZXNbc291cmNlXVttZXNzYWdlLnRvXSA9IHRydWU7XG4gICAgICBpbnN0YW5jZSA9IHRoaXMuZ2V0UHJvdmlkZXIoc291cmNlLCBtZXNzYWdlLnRvLCBhcmdzKTtcbiAgICAgIC8vIGRvbid0IHNhdmUgYSByZWZlcmVuY2UgdG8gaW5zdGFuY2UgaWYgaXQgY2xvc2VkIGl0c2VsZiBhbHJlYWR5LlxuICAgICAgaWYgKHRoaXMuaWZhY2VzW3NvdXJjZV0gJiZcbiAgICAgICAgICB0aGlzLmlmYWNlc1tzb3VyY2VdW21lc3NhZ2UudG9dKSB7XG4gICAgICAgIHRoaXMuaWZhY2VzW3NvdXJjZV1bbWVzc2FnZS50b10gPSBpbnN0YW5jZS5pbnN0YW5jZTtcbiAgICAgICAgdGhpcy5lbWl0c1tzb3VyY2VdW21lc3NhZ2UudG9dID0gaW5zdGFuY2Uub25tc2c7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVidWcud2Fybih0aGlzLnRvU3RyaW5nKCkgKyAnIGRyb3BwaW5nIG1lc3NhZ2UgJyArXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBDbG9zZSAvIHRlYXJkb3duIHRoZSBmbG93IHRoaXMgcHJvdmlkZXIgdGVybWluYXRlcy5cbiAqIEBtZXRob2QgY2xvc2VcbiAqL1xuUHJvdmlkZXIucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5jb250cm9sQ2hhbm5lbCkge1xuICAgIHRoaXMuZW1pdCh0aGlzLmNvbnRyb2xDaGFubmVsLCB7XG4gICAgICB0eXBlOiAnUHJvdmlkZXIgQ2xvc2luZycsXG4gICAgICByZXF1ZXN0OiAnY2xvc2UnXG4gICAgfSk7XG4gICAgZGVsZXRlIHRoaXMuY29udHJvbENoYW5uZWw7XG4gIH1cbiAgdGhpcy5lbWl0KCdjbG9zZScpO1xuXG4gIC8vIFJlbGVhc2UgcmVmZXJlbmNlcy5cbiAgZGVsZXRlIHRoaXMuaWZhY2U7XG4gIGRlbGV0ZSB0aGlzLnByb3ZpZGVyQ2xzO1xuICB0aGlzLmlmYWNlcyA9IHt9O1xuICB0aGlzLmVtaXRzID0ge307XG4gIHRoaXMuZW1pdENoYW5uZWwgPSBudWxsO1xufTtcblxuLyoqXG4gKiBUZWFyZG93biBhIHNpbmdsZSBpbnN0YW5jZSBvZiBhbiBvYmplY3QgZnVsZmlsbGluZyB0aGlzIHByb3ZpZGVyLlxuICogQG1ldGhvZCB0ZWFyZG93blxuICogQHBhcmFtIHtTdHJpbmd9IHNvdXJjZSBUaGUgY29uc3VtZXIgc291cmNlIG9mIHRoZSBpbnN0YW5jZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBUaGUgaWQgb2YgdGhlIGluc3RhbmNlIHRvIHRlYXIgZG93bi5cbiAqL1xuUHJvdmlkZXIucHJvdG90eXBlLnRlYXJkb3duID0gZnVuY3Rpb24gKHNvdXJjZSwgaWQpIHtcbiAgLy8gSWdub3JlIHRlYXJkb3duIG9mIG5vbi1leGlzdGFudCBpZHMuXG4gIGlmICghdGhpcy5pZmFjZXNbc291cmNlXSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGRlbGV0ZSB0aGlzLmlmYWNlc1tzb3VyY2VdW2lkXTtcbiAgZGVsZXRlIHRoaXMuZW1pdHNbc291cmNlXVtpZF07XG4gIGlmICh0aGlzLmNsb3NlSGFuZGxlcnNbc291cmNlXSAmJiB0aGlzLmNsb3NlSGFuZGxlcnNbc291cmNlXVtpZF0pIHtcbiAgICB1dGlsLmVhY2hQcm9wKHRoaXMuY2xvc2VIYW5kbGVyc1tzb3VyY2VdW2lkXSwgZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgIHByb3AoKTtcbiAgICB9KTtcbiAgICBkZWxldGUgdGhpcy5jbG9zZUhhbmRsZXJzW3NvdXJjZV1baWRdO1xuICB9XG59O1xuXG4vKipcbiAqIEdldCBhbiBpbnRlcmZhY2UgdG8gZXhwb3NlIGV4dGVybmFsbHkgcmVwcmVzZW50aW5nIHRoaXMgcG9ydC5cbiAqIFByb3ZpZGVycyBhcmUgcmVnaXN0ZXJlZCB3aXRoIHRoZSBwb3J0IHVzaW5nIGVpdGhlclxuICogcHJvdmlkZVN5bmNocm9ub3VzIG9yIHByb3ZpZGVBc3luY2hyb25vdXMgZGVwZW5kaW5nIG9uIHRoZSBkZXNpcmVkXG4gKiByZXR1cm4gaW50ZXJmYWNlLlxuICogQG1ldGhvZCBnZXRJbnRlcmZhY2VcbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIGV4dGVybmFsIGludGVyZmFjZSBvZiB0aGlzIFByb3ZpZGVyLlxuICovXG5Qcm92aWRlci5wcm90b3R5cGUuZ2V0SW50ZXJmYWNlID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5pZmFjZSkge1xuICAgIHJldHVybiB0aGlzLmlmYWNlO1xuICB9IGVsc2Uge1xuICAgIHZhciBzYW5pdHlDaGVjayA9IGZ1bmN0aW9uIChwcm92aWRlcikge1xuICAgICAgaWYgKHR5cGVvZiBwcm92aWRlciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlByb3ZpZGVyIFwiICsgdGhpcy50b1N0cmluZygpICtcbiAgICAgICAgICAgIFwiIG5lZWRzIHRvIGJlIGltcGxlbWVudGVkIGJ5IGEgZnVuY3Rpb24uXCIpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5pZmFjZSA9IHtcbiAgICAgIHByb3ZpZGVTeW5jaHJvbm91czogZnVuY3Rpb24gKHByb3YpIHtcbiAgICAgICAgc2FuaXR5Q2hlY2socHJvdik7XG4gICAgICAgIHRoaXMucHJvdmlkZXJDbHMgPSBwcm92O1xuICAgICAgICB0aGlzLm1vZGUgPSBQcm92aWRlci5tb2RlLnN5bmNocm9ub3VzO1xuICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgcHJvdmlkZUFzeW5jaHJvbm91czogZnVuY3Rpb24gKHByb3YpIHtcbiAgICAgICAgc2FuaXR5Q2hlY2socHJvdik7XG4gICAgICAgIHRoaXMucHJvdmlkZXJDbHMgPSBwcm92O1xuICAgICAgICB0aGlzLm1vZGUgPSBQcm92aWRlci5tb2RlLmFzeW5jaHJvbm91cztcbiAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgIHByb3ZpZGVQcm9taXNlczogZnVuY3Rpb24gKHByb3YpIHtcbiAgICAgICAgc2FuaXR5Q2hlY2socHJvdik7XG4gICAgICAgIHRoaXMucHJvdmlkZXJDbHMgPSBwcm92O1xuICAgICAgICB0aGlzLm1vZGUgPSBQcm92aWRlci5tb2RlLnByb21pc2VzO1xuICAgICAgfS5iaW5kKHRoaXMpXG4gICAgfTtcblxuICAgIHV0aWwuZWFjaFByb3AodGhpcy5kZWZpbml0aW9uLCBmdW5jdGlvbiAocHJvcCwgbmFtZSkge1xuICAgICAgc3dpdGNoIChwcm9wLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJjb25zdGFudFwiOlxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy5pZmFjZSwgbmFtZSwge1xuICAgICAgICAgIHZhbHVlOiBDb25zdW1lci5yZWN1cnNpdmVGcmVlemVPYmplY3QocHJvcC52YWx1ZSksXG4gICAgICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgcmV0dXJuIHRoaXMuaWZhY2U7XG4gIH1cbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgZnVuY3Rpb24gdGhhdCBjYW4gYmUgdXNlZCB0byBnZXQgaW50ZXJmYWNlcyBmcm9tIHRoaXMgcHJvdmlkZXIgZnJvbVxuICogYSB1c2VyLXZpc2libGUgcG9pbnQuXG4gKiBAbWV0aG9kIGdldFByb3h5SW50ZXJmYWNlXG4gKi9cblByb3ZpZGVyLnByb3RvdHlwZS5nZXRQcm94eUludGVyZmFjZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGZ1bmMgPSBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBwLmdldEludGVyZmFjZSgpO1xuICB9LmJpbmQoe30sIHRoaXMpO1xuXG4gIGZ1bmMuY2xvc2UgPSBmdW5jdGlvbiAoaWZhY2UpIHtcbiAgICBpZiAoaWZhY2UpIHtcbiAgICAgIHV0aWwuZWFjaFByb3AodGhpcy5pZmFjZXMsIGZ1bmN0aW9uIChpZHMsIHNvdXJjZSkge1xuICAgICAgICB1dGlsLmVhY2hQcm9wKGlkcywgZnVuY3Rpb24gKGNhbmRpZGF0ZSwgaWQpIHtcbiAgICAgICAgICBpZiAoY2FuZGlkYXRlID09PSBpZmFjZSkge1xuICAgICAgICAgICAgdGhpcy50ZWFyZG93bihzb3VyY2UsIGlkKTtcbiAgICAgICAgICAgIHRoaXMuZW1pdCh0aGlzLmNoYW5uZWxzW3NvdXJjZV0sIHtcbiAgICAgICAgICAgICAgdHlwZTogJ2Nsb3NlJyxcbiAgICAgICAgICAgICAgdG86IGlkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENsb3NlIHRoZSBjaGFubmVsLlxuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpO1xuXG4gIGZ1bmMub25DbG9zZSA9IGZ1bmN0aW9uIChpZmFjZSwgaGFuZGxlcikge1xuICAgIC8vIExpc3RlbiB0byB0aGUgY2hhbm5lbCBkaXJlY3RseS5cbiAgICBpZiAodHlwZW9mIGlmYWNlID09PSAnZnVuY3Rpb24nICYmIGhhbmRsZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vbmNlKCdjbG9zZScsIGlmYWNlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB1dGlsLmVhY2hQcm9wKHRoaXMuaWZhY2VzLCBmdW5jdGlvbiAoaWRzLCBzb3VyY2UpIHtcbiAgICAgIHV0aWwuZWFjaFByb3AoaWRzLCBmdW5jdGlvbiAoY2FuZGlkYXRlLCBpZCkge1xuICAgICAgICBpZiAoY2FuZGlkYXRlID09PSBpZmFjZSkge1xuICAgICAgICAgIGlmICghdGhpcy5jbG9zZUhhbmRsZXJzW3NvdXJjZV0pIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VIYW5kbGVyc1tzb3VyY2VdID0ge307XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghdGhpcy5jbG9zZUhhbmRsZXJzW3NvdXJjZV1baWRdKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlSGFuZGxlcnNbc291cmNlXVtpZF0gPSBbXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5jbG9zZUhhbmRsZXJzW3NvdXJjZV1baWRdLnB1c2goaGFuZGxlcik7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfS5iaW5kKHRoaXMpO1xuXG4gIHJldHVybiBmdW5jO1xufTtcblxuLyoqXG4gKiBHZXQgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIHJlZ2lzdGVyZWQgcHJvdmlkZXIuXG4gKiBAbWV0aG9kIGdldFByb3ZpZGVyXG4gKiBAcGFyYW0ge1N0cmluZ30gc291cmNlIFRoZSBwb3J0IHRoaXMgaW5zdGFuY2UgaXMgaW50ZXJhY3RpZ24gd2l0aC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBpZGVudGlmaWVyIHRoZSBtZXNzYWdhYmxlIGFkZHJlc3MgZm9yIHRoaXMgcHJvdmlkZXIuXG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzIENvbnN0cnVjdG9yIGFyZ3VtZW50cyBmb3IgdGhlIHByb3ZpZGVyLlxuICogQHJldHVybiB7RnVuY3Rpb259IEEgZnVuY3Rpb24gdG8gc2VuZCBtZXNzYWdlcyB0byB0aGUgcHJvdmlkZXIuXG4gKi9cblByb3ZpZGVyLnByb3RvdHlwZS5nZXRQcm92aWRlciA9IGZ1bmN0aW9uIChzb3VyY2UsIGlkZW50aWZpZXIsIGFyZ3MpIHtcbiAgaWYgKCF0aGlzLnByb3ZpZGVyQ2xzKSB7XG4gICAgdGhpcy5kZWJ1Zy5lcnJvcignQ2Fubm90IGluc3RhbnRpYXRlIHByb3ZpZGVyLCBzaW5jZSBpdCBpcyBub3QgcHJvdmlkZWQnKTtcbiAgICByZXR1cm4ge2luc3RhbmNlOiB1bmRlZmluZWQsIG9ubXNnOiB1bmRlZmluZWR9O1xuICB9XG5cbiAgdmFyIGV2ZW50cyA9IHt9LFxuICAgIGRpc3BhdGNoRXZlbnQsXG4gICAgQm91bmRDbGFzcyxcbiAgICBpbnN0YW5jZTtcblxuICB1dGlsLmVhY2hQcm9wKHRoaXMuZGVmaW5pdGlvbiwgZnVuY3Rpb24gKHByb3AsIG5hbWUpIHtcbiAgICBpZiAocHJvcC50eXBlID09PSAnZXZlbnQnKSB7XG4gICAgICBldmVudHNbbmFtZV0gPSBwcm9wO1xuICAgIH1cbiAgfSk7XG5cbiAgZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uIChzcmMsIGV2LCBpZCwgbmFtZSwgdmFsdWUpIHtcbiAgICBpZiAoZXZbbmFtZV0pIHtcbiAgICAgIHZhciBzdHJlYW1zID0gQ29uc3VtZXIubWVzc2FnZVRvUG9ydGFibGUoZXZbbmFtZV0udmFsdWUsIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWJ1Zyk7XG4gICAgICB0aGlzLmVtaXQodGhpcy5jaGFubmVsc1tzcmNdLCB7XG4gICAgICAgIHR5cGU6ICdtZXNzYWdlJyxcbiAgICAgICAgdG86IGlkLFxuICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICB0eXBlOiAnZXZlbnQnLFxuICAgICAgICAgIHRleHQ6IHN0cmVhbXMudGV4dCxcbiAgICAgICAgICBiaW5hcnk6IHN0cmVhbXMuYmluYXJ5XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMsIHNvdXJjZSwgZXZlbnRzLCBpZGVudGlmaWVyKTtcblxuICAvLyB0aGlzIGlzIGFsbCB0byBzYXk6IG5ldyBwcm92aWRlckNscyhkaXNwYXRjaEV2ZW50LCBhcmdzWzBdLCBhcmdzWzFdLC4uLilcbiAgQm91bmRDbGFzcyA9IHRoaXMucHJvdmlkZXJDbHMuYmluZC5hcHBseSh0aGlzLnByb3ZpZGVyQ2xzLFxuICAgICAgW3RoaXMucHJvdmlkZXJDbHMsIGRpc3BhdGNoRXZlbnRdLmNvbmNhdChhcmdzIHx8IFtdKSk7XG4gIGluc3RhbmNlID0gbmV3IEJvdW5kQ2xhc3MoKTtcblxuICByZXR1cm4ge1xuICAgIGluc3RhbmNlOiBpbnN0YW5jZSxcbiAgICBvbm1zZzogZnVuY3Rpb24gKHBvcnQsIHNyYywgbXNnKSB7XG4gICAgICB2YXIgcHJvcCwgZGVidWcsIGFyZ3MsIHJldHVyblByb21pc2UsIHJldDtcbiAgICAgIGlmIChtc2cuYWN0aW9uID09PSAnbWV0aG9kJykge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXNbbXNnLnR5cGVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcG9ydC5kZWJ1Zy53YXJuKFwiUHJvdmlkZXIgZG9lcyBub3QgaW1wbGVtZW50IFwiICsgbXNnLnR5cGUgKyBcIigpIVwiKTtcbiAgICAgICAgICBwb3J0LmVtaXQocG9ydC5jaGFubmVsc1tzcmNdLCB7XG4gICAgICAgICAgICB0eXBlOiAnbWV0aG9kJyxcbiAgICAgICAgICAgIHRvOiBtc2cudG8sXG4gICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgIHRvOiBtc2cudG8sXG4gICAgICAgICAgICAgIHR5cGU6ICdtZXRob2QnLFxuICAgICAgICAgICAgICByZXFJZDogbXNnLnJlcUlkLFxuICAgICAgICAgICAgICBuYW1lOiBtc2cudHlwZSxcbiAgICAgICAgICAgICAgZXJyb3I6ICdQcm92aWRlciBkb2VzIG5vdCBpbXBsZW1lbnQgJyArIG1zZy50eXBlICsgJygpISdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcHJvcCA9IHBvcnQuZGVmaW5pdGlvblttc2cudHlwZV07XG4gICAgICAgIGRlYnVnID0gcG9ydC5kZWJ1ZztcbiAgICAgICAgYXJncyA9IENvbnN1bWVyLnBvcnRhYmxlVG9NZXNzYWdlKHByb3AudmFsdWUsIG1zZywgZGVidWcpO1xuICAgICAgICBpZiAobXNnLnJlcUlkID09PSBudWxsKSB7XG4gICAgICAgICAgLy8gUmVja2xlc3MgY2FsbC4gIElnbm9yZSByZXR1cm4gdmFsdWUuXG4gICAgICAgICAgcmV0ID0gZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBpZiAocmVqZWN0KSB7XG4gICAgICAgICAgICAgIGRlYnVnLmVycm9yKHJlamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXQgPSBmdW5jdGlvbiAoc3JjLCBtc2csIHByb3AsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIHN0cmVhbXMgPSBDb25zdW1lci5tZXNzYWdlVG9Qb3J0YWJsZShwcm9wLnJldCwgcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnKTtcbiAgICAgICAgICAgIHRoaXMuZW1pdCh0aGlzLmNoYW5uZWxzW3NyY10sIHtcbiAgICAgICAgICAgICAgdHlwZTogJ21ldGhvZCcsXG4gICAgICAgICAgICAgIHRvOiBtc2cudG8sXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICB0bzogbXNnLnRvLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdtZXRob2QnLFxuICAgICAgICAgICAgICAgIHJlcUlkOiBtc2cucmVxSWQsXG4gICAgICAgICAgICAgICAgbmFtZTogbXNnLnR5cGUsXG4gICAgICAgICAgICAgICAgdGV4dDogc3RyZWFtcy50ZXh0LFxuICAgICAgICAgICAgICAgIGJpbmFyeTogc3RyZWFtcy5iaW5hcnksXG4gICAgICAgICAgICAgICAgZXJyb3I6IHJlamVjdFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LmJpbmQocG9ydCwgc3JjLCBtc2csIHByb3ApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShhcmdzKSkge1xuICAgICAgICAgIGFyZ3MgPSBbYXJnc107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvcnQubW9kZSA9PT0gUHJvdmlkZXIubW9kZS5zeW5jaHJvbm91cykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXQodGhpc1ttc2cudHlwZV0uYXBwbHkodGhpcywgYXJncykpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUxKSB7XG4gICAgICAgICAgICByZXQodW5kZWZpbmVkLCBlMS5tZXNzYWdlICsgJyAnICsgZTEuc3RhY2spO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChwb3J0Lm1vZGUgPT09IFByb3ZpZGVyLm1vZGUuYXN5bmNocm9ub3VzKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXNbbXNnLnR5cGVdLmFwcGx5KGluc3RhbmNlLCBhcmdzLmNvbmNhdChyZXQpKTtcbiAgICAgICAgICB9IGNhdGNoIChlMikge1xuICAgICAgICAgICAgcmV0KHVuZGVmaW5lZCwgZTIubWVzc2FnZSArICcgJyArIGUyLnN0YWNrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocG9ydC5tb2RlID09PSBQcm92aWRlci5tb2RlLnByb21pc2VzKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVyblByb21pc2UgPSB0aGlzW21zZy50eXBlXS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICAgIGlmIChyZXR1cm5Qcm9taXNlICYmIHJldHVyblByb21pc2UudGhlbikge1xuICAgICAgICAgICAgICByZXR1cm5Qcm9taXNlLnRoZW4ocmV0LCByZXQuYmluZCh7fSwgdW5kZWZpbmVkKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXQodW5kZWZpbmVkLCAnTm8gcHJvbWlzZSByZXR1cm5lZCBmcm9tICcgK1xuICAgICAgICAgICAgICAgICAgbXNnLnR5cGUgKyAnOiAnICsgcmV0dXJuUHJvbWlzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZTMpIHtcbiAgICAgICAgICAgIHJldCh1bmRlZmluZWQsIGUzLm1lc3NhZ2UgKyAnICcgKyBlMy5zdGFjayk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfS5iaW5kKGluc3RhbmNlLCB0aGlzLCBzb3VyY2UpXG4gIH07XG59O1xuXG4vKipcbiAqIEdldCBhIHRleHR1YWwgZGVzY3JpcHRpb24gb2YgdGhpcyBwb3J0LlxuICogQG1ldGhvZCB0b1N0cmluZ1xuICogQHJldHVybiB7U3RyaW5nfSB0aGUgZGVzY3JpcHRpb24gb2YgdGhpcyBwb3J0LlxuICovXG5Qcm92aWRlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmVtaXRDaGFubmVsKSB7XG4gICAgcmV0dXJuIFwiW1Byb3ZpZGVyIFwiICsgdGhpcy5lbWl0Q2hhbm5lbCArIFwiXVwiO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBcIlt1bmJvdW5kIFByb3ZpZGVyXVwiO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb3ZpZGVyO1xuIiwiLypqc2xpbnQgaW5kZW50OjIsIHdoaXRlOnRydWUsIG5vZGU6dHJ1ZSwgc2xvcHB5OnRydWUsIGJyb3dzZXI6dHJ1ZSAqL1xudmFyIFByb21pc2VDb21wYXQgPSByZXF1aXJlKCdlczYtcHJvbWlzZScpLlByb21pc2U7XG5cbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpO1xudmFyIENvbnN1bWVyID0gcmVxdWlyZSgnLi4vY29uc3VtZXInKTtcblxudmFyIEFwaUludGVyZmFjZSA9IGZ1bmN0aW9uKGRlZiwgb25Nc2csIGVtaXQsIGRlYnVnKSB7XG4gIHZhciBpbmZsaWdodCA9IHt9LFxuICAgICAgZXZlbnRzID0gbnVsbCxcbiAgICAgIGVtaXR0ZXIgPSBudWxsLFxuICAgICAgcmVxSWQgPSAwLFxuICAgICAgYXJncyA9IGFyZ3VtZW50cztcblxuICB1dGlsLmVhY2hQcm9wKGRlZiwgZnVuY3Rpb24ocHJvcCwgbmFtZSkge1xuICAgIHN3aXRjaChwcm9wLnR5cGUpIHtcbiAgICBjYXNlICdtZXRob2QnOlxuICAgICAgdGhpc1tuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBOb3RlOiBpbmZsaWdodCBzaG91bGQgYmUgcmVnaXN0ZXJlZCBiZWZvcmUgbWVzc2FnZSBpcyBwYXNzZWRcbiAgICAgICAgLy8gaW4gb3JkZXIgdG8gcHJlcGFyZSBmb3Igc3luY2hyb25vdXMgaW4td2luZG93IHBpcGVzLlxuICAgICAgICB2YXIgdGhpc1JlcSA9IHJlcUlkLFxuICAgICAgICAgICAgcHJvbWlzZSA9IG5ldyBQcm9taXNlQ29tcGF0KGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICBpbmZsaWdodFt0aGlzUmVxXSA9IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlOnJlc29sdmUsXG4gICAgICAgICAgICAgICAgcmVqZWN0OnJlamVjdCxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogcHJvcC5yZXRcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgc3RyZWFtcyA9IENvbnN1bWVyLm1lc3NhZ2VUb1BvcnRhYmxlKHByb3AudmFsdWUsXG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSxcbiAgICAgICAgICAgICAgICBkZWJ1Zyk7XG4gICAgICAgIHJlcUlkICs9IDE7XG4gICAgICAgIGVtaXQoe1xuICAgICAgICAgIGFjdGlvbjogJ21ldGhvZCcsXG4gICAgICAgICAgdHlwZTogbmFtZSxcbiAgICAgICAgICByZXFJZDogdGhpc1JlcSxcbiAgICAgICAgICB0ZXh0OiBzdHJlYW1zLnRleHQsXG4gICAgICAgICAgYmluYXJ5OiBzdHJlYW1zLmJpbmFyeVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICB9O1xuICAgICAgdGhpc1tuYW1lXS5yZWNrbGVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHN0cmVhbXMgPSBDb25zdW1lci5tZXNzYWdlVG9Qb3J0YWJsZShwcm9wLnZhbHVlLFxuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCksXG4gICAgICAgICAgICAgICAgZGVidWcpO1xuICAgICAgICBlbWl0KHtcbiAgICAgICAgICBhY3Rpb246ICdtZXRob2QnLFxuICAgICAgICAgIHR5cGU6IG5hbWUsXG4gICAgICAgICAgcmVxSWQ6IG51bGwsICAvLyBNYXJrcyB0aGlzIGFzIGEgcmVja2xlc3MgY2FsbC5cbiAgICAgICAgICB0ZXh0OiBzdHJlYW1zLnRleHQsXG4gICAgICAgICAgYmluYXJ5OiBzdHJlYW1zLmJpbmFyeVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gUmV0dXJuIHR5cGUgaXMgdm9pZC5cbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlICdldmVudCc6XG4gICAgICBpZighZXZlbnRzKSB7XG4gICAgICAgIHV0aWwuaGFuZGxlRXZlbnRzKHRoaXMpO1xuICAgICAgICBlbWl0dGVyID0gdGhpcy5lbWl0O1xuICAgICAgICBkZWxldGUgdGhpcy5lbWl0O1xuICAgICAgICBldmVudHMgPSB7fTtcbiAgICAgIH1cbiAgICAgIGV2ZW50c1tuYW1lXSA9IHByb3A7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdjb25zdGFudCc6XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgbmFtZSwge1xuICAgICAgICB2YWx1ZTogQ29uc3VtZXIucmVjdXJzaXZlRnJlZXplT2JqZWN0KHByb3AudmFsdWUpLFxuICAgICAgICB3cml0YWJsZTogZmFsc2VcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9LmJpbmQodGhpcykpO1xuXG4gIG9uTXNnKHRoaXMsIGZ1bmN0aW9uKHR5cGUsIG1zZykge1xuICAgIGlmICh0eXBlID09PSAnY2xvc2UnKSB7XG4gICAgICBpZiAodGhpcy5vZmYpIHtcbiAgICAgICAgdGhpcy5vZmYoKTtcbiAgICAgIH1cbiAgICAgIHV0aWwuZWFjaFByb3AoaW5mbGlnaHQsIGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgb2JqLnJlamVjdCgnY2xvc2VkJyk7XG4gICAgICB9KTtcbiAgICAgIGluZmxpZ2h0ID0ge307XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghbXNnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ21ldGhvZCcpIHtcbiAgICAgIGlmIChpbmZsaWdodFttc2cucmVxSWRdKSB7XG4gICAgICAgIHZhciByZXNvbHZlciA9IGluZmxpZ2h0W21zZy5yZXFJZF0sXG4gICAgICAgICAgICB0ZW1wbGF0ZSA9IHJlc29sdmVyLnRlbXBsYXRlO1xuICAgICAgICBkZWxldGUgaW5mbGlnaHRbbXNnLnJlcUlkXTtcbiAgICAgICAgaWYgKG1zZy5lcnJvcikge1xuICAgICAgICAgIHJlc29sdmVyLnJlamVjdChtc2cuZXJyb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmVyLnJlc29sdmUoQ29uc3VtZXIucG9ydGFibGVUb01lc3NhZ2UodGVtcGxhdGUsIG1zZywgZGVidWcpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVidWcuZXJyb3IoJ0luY29taW5nIG1lc3NhZ2UgY2xhaW1lZCB0byBiZSBhbiBSUEMgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ3JldHVybmluZyBmb3IgdW5yZWdpc3RlcmVkIGNhbGwnLCBtc2cucmVxSWQpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobXNnLnR5cGUgPT09ICdldmVudCcpIHtcbiAgICAgIGlmIChldmVudHNbbXNnLm5hbWVdKSB7XG4gICAgICAgIGVtaXR0ZXIobXNnLm5hbWUsIENvbnN1bWVyLnBvcnRhYmxlVG9NZXNzYWdlKGV2ZW50c1ttc2cubmFtZV0udmFsdWUsXG4gICAgICAgICAgICAgICAgbXNnLCBkZWJ1ZykpO1xuICAgICAgfVxuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcblxuICBhcmdzID0gQ29uc3VtZXIubWVzc2FnZVRvUG9ydGFibGUoXG4gICAgICAoZGVmLmNvbnN0cnVjdG9yICYmIGRlZi5jb25zdHJ1Y3Rvci52YWx1ZSkgPyBkZWYuY29uc3RydWN0b3IudmFsdWUgOiBbXSxcbiAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3MsIDQpLFxuICAgICAgZGVidWcpO1xuXG4gIGVtaXQoe1xuICAgIHR5cGU6ICdjb25zdHJ1Y3QnLFxuICAgIHRleHQ6IGFyZ3MudGV4dCxcbiAgICBiaW5hcnk6IGFyZ3MuYmluYXJ5XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcGlJbnRlcmZhY2U7XG4iLCIvKmpzbGludCBpbmRlbnQ6Miwgd2hpdGU6dHJ1ZSwgbm9kZTp0cnVlLCBzbG9wcHk6dHJ1ZSwgYnJvd3Nlcjp0cnVlICovXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwnKTtcblxudmFyIEV2ZW50SW50ZXJmYWNlID0gZnVuY3Rpb24ob25Nc2csIGVtaXQsIGRlYnVnKSB7XG4gIHV0aWwuaGFuZGxlRXZlbnRzKHRoaXMpO1xuICBcbiAgb25Nc2codGhpcywgZnVuY3Rpb24oZW1pdCwgdHlwZSwgbXNnKSB7XG4gICAgaWYgKHR5cGUgPT09ICdjbG9zZScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZW1pdChtc2cudHlwZSwgbXNnLm1lc3NhZ2UpO1xuICB9LmJpbmQodGhpcywgdGhpcy5lbWl0KSk7XG5cbiAgdGhpcy5lbWl0ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSwgbXNnKSB7XG4gICAgZW1pdHRlcih7dHlwZTogdHlwZSwgbWVzc2FnZTogbXNnfSwgdHJ1ZSk7XG4gIH0uYmluZCh7fSwgZW1pdCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50SW50ZXJmYWNlO1xuIiwiLypqc2xpbnQgaW5kZW50OjIsIG5vZGU6dHJ1ZSAqL1xudmFyIFByb21pc2VDb21wYXQgPSByZXF1aXJlKCdlczYtcHJvbWlzZScpLlByb21pc2U7XG5cbnZhciBBcGlJbnRlcmZhY2UgPSByZXF1aXJlKCcuL3Byb3h5L2FwaUludGVyZmFjZScpO1xudmFyIEV2ZW50SW50ZXJmYWNlID0gcmVxdWlyZSgnLi9wcm94eS9ldmVudEludGVyZmFjZScpO1xudmFyIENvbnN1bWVyID0gcmVxdWlyZSgnLi9jb25zdW1lcicpO1xudmFyIFByb3ZpZGVyID0gcmVxdWlyZSgnLi9wcm92aWRlcicpO1xuXG4vKipcbiAqIEEgUHJveHkgQmluZGVyIG1hbmFnZXMgdGhlIGV4dGVybmFsIGludGVyZmFjZSwgYW5kIGNyZWF0ZXMgb25lIG9mXG4gKiB0aGUgZGlmZmVyZW50IHR5cGVzIG9mIG9iamVjdHMgZXhwb3NlZCBieSBmcmVlZG9tIGVpdGhlciBhcyBhIGdsb2JhbFxuICogd2l0aGluIGEgd29ya2VyIC8gbW9kdWxlIGNvbnRleHQsIG9yIHJldHVybmVkIGJ5IGFuIGV4dGVybmFsIGNhbGwgdG9cbiAqIGNyZWF0ZSBhIGZyZWVkb20gcnVudGltZS5cbiAqIEBDbGFzcyBQcm94eUJpbmRlclxuICogQHBhcmFtIHtNYW5hZ2VyfSBtYW5hZ2VyIFRoZSBtYW5hZ2VyIGZvciB0aGUgYWN0aXZlIHJ1bnRpbWUuXG4gKi9cbnZhciBQcm94eUJpbmRlciA9IGZ1bmN0aW9uIChtYW5hZ2VyKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdGhpcy5tYW5hZ2VyID0gbWFuYWdlcjtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgcHJveHkgZm9yIGEgZnJlZWRvbSBwb3J0LCBhbmQgcmV0dXJuIGl0IG9uY2UgbG9hZGVkLlxuICogQG1ldGhvZCBnZXRFeHRlcm5hbFxuICogQHBhcmFtIHtQb3J0fSBwb3J0IFRoZSBwb3J0IGZvciB0aGUgcHJveHkgdG8gY29tbXVuaWNhdGUgd2l0aC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBwcm94eS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbZGVmaW5pdGlvbl0gVGhlIGRlZmluaXRpb24gb2YgdGhlIEFQSSB0byBleHBvc2UuXG4gKiBAcGFyYW0ge1N0cmluZ30gZGVmaW5pdGlvbi5uYW1lIFRoZSBuYW1lIG9mIHRoZSBBUEkuXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmaW5pdGlvbi5kZWZpbml0aW9uIFRoZSBkZWZpbml0aW9uIG9mIHRoZSBBUEkuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGRlZmluaXRpb24ucHJvdmlkZXMgV2hldGhlciB0aGlzIGlzIGEgY29uc3VtZXIgb3IgcHJvdmlkZXIuXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gQSBwcm9taXNlIGZvciB0aGUgYWN0aXZlIHByb3h5IGludGVyZmFjZS5cbiAqL1xuUHJveHlCaW5kZXIucHJvdG90eXBlLmdldEV4dGVybmFsID0gZnVuY3Rpb24gKHBvcnQsIG5hbWUsIGRlZmluaXRpb24pIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB2YXIgcHJveHksIGFwaTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ29tcGF0KGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBpZiAoZGVmaW5pdGlvbikge1xuICAgICAgYXBpID0gZGVmaW5pdGlvbi5uYW1lO1xuICAgICAgaWYgKGRlZmluaXRpb24ucHJvdmlkZXMpIHtcbiAgICAgICAgcHJveHkgPSBuZXcgUHJvdmlkZXIoZGVmaW5pdGlvbi5kZWZpbml0aW9uLCB0aGlzLm1hbmFnZXIuZGVidWcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJveHkgPSBuZXcgQ29uc3VtZXIoQXBpSW50ZXJmYWNlLmJpbmQoe30sXG4gICAgICAgICAgICBkZWZpbml0aW9uLmRlZmluaXRpb24pLFxuICAgICAgICAgICAgdGhpcy5tYW5hZ2VyLmRlYnVnKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcHJveHkgPSBuZXcgQ29uc3VtZXIoRXZlbnRJbnRlcmZhY2UsIHRoaXMubWFuYWdlci5kZWJ1Zyk7XG4gICAgfVxuXG4gICAgcHJveHkub25jZSgnc3RhcnQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaWZhY2UgPSBwcm94eS5nZXRQcm94eUludGVyZmFjZSgpO1xuICAgICAgaWYgKGFwaSkge1xuICAgICAgICBpZmFjZS5hcGkgPSBhcGk7XG4gICAgICB9XG4gICAgICByZXNvbHZlKHtcbiAgICAgICAgcG9ydDogcHJveHksXG4gICAgICAgIGV4dGVybmFsOiBpZmFjZVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm1hbmFnZXIuY3JlYXRlTGluayhwb3J0LCBuYW1lLCBwcm94eSk7XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG4vKipcbiAqIEJpbmQgdGhlIGRlZmF1bHQgcHJveHkgZm9yIGEgZnJlZWRvbSBwb3J0LlxuICogQG1ldGhvZCBiaW5kRGVmYXVsdFxuICogQHBhcmFtIHtQb3J0fSBwb3J0IFRoZSBwb3J0IGZvciB0aGUgcHJveHkgdG8gY29tbXVuaWNhdGUgd2l0aC5cbiAqIEBwYXJhbSB7QXBpfSBhcGkgVGhlIEFQSSBsb2FkZXIgd2l0aCBBUEkgZGVmaW5pdGlvbnMuXG4gKiBAcGFyYW0ge09iamVjdH0gbWFuaWZlc3QgVGhlIG1hbmlmZXN0IG9mIHRoZSBtb2R1bGUgdG8gZXhwb3NlLlxuICogQHBhcmFtIHtCb29sZWFufSBpbnRlcm5hbCBXaGV0aGVyIHRoZSBpbnRlcmZhY2UgaXMgZm9yIGluc2lkZSB0aGUgbW9kdWxlLlxuICogQHJldHVybnMge1Byb21pc2V9IEEgcHJvbWlzZSBmb3IgYSBwcm94eSBpbnRlcmZhY2UuXG4gKiBAcHJpdmF0ZVxuICovXG5Qcm94eUJpbmRlci5wcm90b3R5cGUuYmluZERlZmF1bHQgPSBmdW5jdGlvbiAocG9ydCwgYXBpLCBtYW5pZmVzdCwgaW50ZXJuYWwpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB2YXIgbWV0YWRhdGEgPSB7XG4gICAgbmFtZTogbWFuaWZlc3QubmFtZSxcbiAgICBpY29uOiBtYW5pZmVzdC5pY29uLFxuICAgIGRlc2NyaXB0aW9uOiBtYW5pZmVzdC5kZXNjcmlwdGlvblxuICB9LCBkZWY7XG5cbiAgaWYgKG1hbmlmZXN0WydkZWZhdWx0J10pIHtcbiAgICBkZWYgPSBhcGkuZ2V0KG1hbmlmZXN0WydkZWZhdWx0J10pO1xuICAgIGlmICghZGVmICYmIG1hbmlmZXN0LmFwaSAmJiBtYW5pZmVzdC5hcGlbbWFuaWZlc3RbJ2RlZmF1bHQnXV0pIHtcbiAgICAgIGRlZiA9IHtcbiAgICAgICAgbmFtZTogbWFuaWZlc3RbJ2RlZmF1bHQnXSxcbiAgICAgICAgZGVmaW5pdGlvbjogbWFuaWZlc3QuYXBpW21hbmlmZXN0WydkZWZhdWx0J11dXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoaW50ZXJuYWwgJiYgbWFuaWZlc3QucHJvdmlkZXMgJiZcbiAgICAgICAgbWFuaWZlc3QucHJvdmlkZXMuaW5kZXhPZihtYW5pZmVzdFsnZGVmYXVsdCddKSAhPT0gZmFsc2UpIHtcbiAgICAgIGRlZi5wcm92aWRlcyA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChpbnRlcm5hbCkge1xuICAgICAgYXBpLmRlYnVnLndhcm4oXCJkZWZhdWx0IEFQSSBub3QgcHJvdmlkZWQsIFwiICtcbiAgICAgICAgICAgICAgICAgICAgIFwiYXJlIHlvdSBtaXNzaW5nIGEgcHJvdmlkZXMga2V5IGluIHlvdXIgbWFuaWZlc3Q/XCIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzLmdldEV4dGVybmFsKHBvcnQsICdkZWZhdWx0JywgZGVmKS50aGVuKFxuICAgIGZ1bmN0aW9uIChtZXRhZGF0YSwgaW5mbykge1xuICAgICAgaW5mby5leHRlcm5hbC5tYW5pZmVzdCA9IG1ldGFkYXRhO1xuICAgICAgcmV0dXJuIGluZm87XG4gICAgfS5iaW5kKHRoaXMsIG1ldGFkYXRhKVxuICApO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGRlZmluaXRpb24gZm9yIGEgcHJveHkgZ2l2ZW4gYSByZXF1ZXN0ZWQgQVBJIGFuZCB0aGUgbWFuaWZlc3Qgb2ZcbiAqIHRoZSBtb2R1bGUuXG4gKiBAbWV0aG9kIGdldEFQSVxuICogQHBhcmFtIHtPYmplY3R9IG1hbmlmZXN0IFRoZSBtYW5pZmVzdCBmb3IgdGhlIHByb3h5LlxuICogQHBhcmFtIHtBcGl9IGFwaVByb3ZpZGVyIFRoZSByZWdpc3RyeSBvZiBrbm93biBBUElzLlxuICogQHBhcmFtIHtTdHJpbmd9IGFwaSBUaGUgUmVxdWVzdGVkIEFQSS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IGRlZmluaXRpb24gVGhlIGRlZmluaXRpb24gdG8gdXNlIGZvciBjYWxscyB0byBnZXRFeHRlcm5hbC5cbiAqL1xuUHJveHlCaW5kZXIucHJvdG90eXBlLmdldEFQSSA9IGZ1bmN0aW9uIChtYW5pZmVzdCwgYXBpUHJvdmlkZXIsIGFwaSkge1xuICAndXNlIHN0cmljdCc7XG4gIGlmIChtYW5pZmVzdC5hcGkgJiYgbWFuaWZlc3QuYXBpW2FwaV0pIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogYXBpLFxuICAgICAgZGVmaW5pdGlvbjogbWFuaWZlc3QuYXBpW2FwaV1cbiAgICB9O1xuICB9IGVsc2UgaWYgKG1hbmlmZXN0WydkZWZhdWx0J10pIHtcbiAgICB2YXIgZGVmID0gYXBpUHJvdmlkZXIuZ2V0KG1hbmlmZXN0WydkZWZhdWx0J10pO1xuICAgIGlmICghZGVmICYmIG1hbmlmZXN0LmFwaSAmJiBtYW5pZmVzdC5hcGlbbWFuaWZlc3RbJ2RlZmF1bHQnXV0pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IG1hbmlmZXN0WydkZWZhdWx0J10sXG4gICAgICAgIGRlZmluaXRpb246IG1hbmlmZXN0LmFwaVttYW5pZmVzdFsnZGVmYXVsdCddXVxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBQcm94eUJpbmRlcjtcbiIsIi8qZ2xvYmFscyBYTUxIdHRwUmVxdWVzdCxjaHJvbWUgKi9cbi8qanNsaW50IGluZGVudDoyLG5vZGU6dHJ1ZSxzbG9wcHk6dHJ1ZSAqL1xudmFyIFByb21pc2VDb21wYXQgPSByZXF1aXJlKCdlczYtcHJvbWlzZScpLlByb21pc2U7XG5cbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbi8qKlxuICogVGhlIFJlc291cmNlIHJlZ2lzdHJ5IGZvciBGcmVlRE9NLiAgVXNlZCB0byBsb29rIHVwIHJlcXVlc3RlZCBSZXNvdXJjZXMsXG4gKiBhbmQgcHJvdmlkZSBsb29rdXAgYW5kIG1pZ3JhdGlvbiBvZiByZXNvdXJjZXMuXG4gKiBAQ2xhc3MgUmVzb3VyY2VcbiAqIEBwYXJhbSB7RGVidWd9IGRlYnVnIFRoZSBsb2dnZXIgdG8gdXNlIGZvciBkZWJ1Z2dpbmcuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xudmFyIFJlc291cmNlID0gZnVuY3Rpb24gKGRlYnVnKSB7XG4gIHRoaXMuZGVidWcgPSBkZWJ1ZztcbiAgdGhpcy5maWxlcyA9IHt9O1xuICB0aGlzLnJlc29sdmVycyA9IFt0aGlzLmh0dHBSZXNvbHZlciwgdGhpcy5udWxsUmVzb2x2ZXJdO1xuICB0aGlzLmNvbnRlbnRSZXRyaWV2ZXJzID0ge1xuICAgICdodHRwJzogdGhpcy54aHJSZXRyaWV2ZXIsXG4gICAgJ2h0dHBzJzogdGhpcy54aHJSZXRyaWV2ZXIsXG4gICAgJ2Nocm9tZS1leHRlbnNpb24nOiB0aGlzLnhoclJldHJpZXZlcixcbiAgICAncmVzb3VyY2UnOiB0aGlzLnhoclJldHJpZXZlcixcbiAgICAnY2hyb21lJzogdGhpcy54aHJSZXRyaWV2ZXIsXG4gICAgJ2FwcCc6IHRoaXMueGhyUmV0cmlldmVyLFxuICAgICdnb3BoZXInOiB0aGlzLnhoclJldHJpZXZlciwgIC8vIEZvciBDb3Jkb3ZhOyBzZWUgaHR0cDovL2NyYnVnLmNvbS81MTMzNTIgLlxuICAgICdtYW5pZmVzdCc6IHRoaXMubWFuaWZlc3RSZXRyaWV2ZXJcbiAgfTtcbn07XG5cbi8qKlxuICogUmVzb2x2ZSBhIHJlc3VyY2UgVVJMIHJlcXVlc3RlZCBmcm9tIGEgbW9kdWxlLlxuICogQG1ldGhvZCBnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBtYW5pZmVzdCBUaGUgY2Fub25pY2FsIGFkZHJlc3Mgb2YgdGhlIG1vZHVsZSByZXF1ZXN0aW5nLlxuICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgcmVzb3VyY2UgdG8gZ2V0LlxuICogQHJldHVybnMge1Byb21pc2V9IEEgcHJvbWlzZSBmb3IgdGhlIHJlc291cmNlIGFkZHJlc3MuXG4gKi9cblJlc291cmNlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAobWFuaWZlc3QsIHVybCkge1xuICB2YXIga2V5ID0gSlNPTi5zdHJpbmdpZnkoW21hbmlmZXN0LCB1cmxdKTtcbiAgXG4gIHJldHVybiBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWYgKHRoaXMuZmlsZXNba2V5XSkge1xuICAgICAgcmVzb2x2ZSh0aGlzLmZpbGVzW2tleV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlc29sdmUobWFuaWZlc3QsIHVybCkudGhlbihmdW5jdGlvbiAoa2V5LCByZXNvbHZlLCBhZGRyZXNzKSB7XG4gICAgICAgIHRoaXMuZmlsZXNba2V5XSA9IGFkZHJlc3M7XG4gICAgICAgIC8vZmRvbS5kZWJ1Zy5sb2coJ1Jlc29sdmVkICcgKyBrZXkgKyAnIHRvICcgKyBhZGRyZXNzKTtcbiAgICAgICAgcmVzb2x2ZShhZGRyZXNzKTtcbiAgICAgIH0uYmluZCh0aGlzLCBrZXksIHJlc29sdmUpLCByZWplY3QpO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBjb250ZW50cyBvZiBhIHJlc291cmNlLlxuICogQG1ldGhvZCBnZXRDb250ZW50c1xuICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgcmVzb3VyY2UgdG8gcmVhZC5cbiAqIEByZXR1cm5zIHtQcm9taXNlfSBBIHByb21pc2UgZm9yIHRoZSByZXNvdXJjZSBjb250ZW50cy5cbiAqL1xuUmVzb3VyY2UucHJvdG90eXBlLmdldENvbnRlbnRzID0gZnVuY3Rpb24gKHVybCkge1xuICByZXR1cm4gbmV3IFByb21pc2VDb21wYXQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciBwcm9wO1xuICAgIGlmICghdXJsKSB7XG4gICAgICB0aGlzLmRlYnVnLndhcm4oXCJBc2tlZCB0byBnZXQgY29udGVudHMgb2YgdW5kZWZpbmVkIFVSTC5cIik7XG4gICAgICByZXR1cm4gcmVqZWN0KCk7XG4gICAgfVxuICAgIGZvciAocHJvcCBpbiB0aGlzLmNvbnRlbnRSZXRyaWV2ZXJzKSB7XG4gICAgICBpZiAodGhpcy5jb250ZW50UmV0cmlldmVycy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICBpZiAodXJsLmluZGV4T2YocHJvcCArIFwiOi8vXCIpID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29udGVudFJldHJpZXZlcnNbcHJvcF0uY2FsbCh0aGlzLCB1cmwsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXJsLmluZGV4T2YoXCI6Ly9cIikgPT09IC0xICYmIHByb3AgPT09IFwibnVsbFwiKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29udGVudFJldHJpZXZlcnNbcHJvcF0uY2FsbCh0aGlzLCB1cmwsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVqZWN0KCk7XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG4vKipcbiAqIFJldHVybiBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBmaXJzdCBvZiBhbiBhcnJheSBvZiBwcm9taXNlc1xuICogcmVzb2x2ZXMsIG9yIHJlamVjdHMgYWZ0ZXIgYWxsIHByb21pc2VzIHJlamVjdC4gQ2FuIGJlIHRob3VnaHQgb2YgYXNcbiAqIHRoZSBtaXNzaW5nICdQcm9taXNlLmFueScgLSByYWNlIGlzIG5vIGdvb2QsIHNpbmNlIGVhcmx5IHJlamVjdGlvbnNcbiAqIHByZWVtcHQgYSBzdWJzZXF1ZW50IHJlc29sdXRpb24uXG4gKiBAcHJpdmF0ZVxuICogQHN0YXRpY1xuICogQG1ldGhvZCBGaXJzdFByb21pc2VcbiAqIEBwYXJhbSB7UHJvbWlzZVtdfSBQcm9taXNlcyB0byBzZWxlY3QgZnJvbVxuICogQHJldHVybnMge1Byb21pc2V9IFByb21pc2UgcmVzb2x2aW5nIHdpdGggYSB2YWx1ZSBmcm9tIGFyZ3VtZW50cy5cbiAqL1xudmFyIGZpcnN0UHJvbWlzZSA9IGZ1bmN0aW9uKHByb21pc2VzKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgZXJyb3JzID0gW107XG4gICAgcHJvbWlzZXMuZm9yRWFjaChmdW5jdGlvbihwcm9taXNlKSB7XG4gICAgICBwcm9taXNlLnRoZW4ocmVzb2x2ZSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKGVycik7XG4gICAgICAgIGlmIChlcnJvcnMubGVuZ3RoID09PSBwcm9taXNlcy5sZW5ndGgpIHtcbiAgICAgICAgICByZWplY3QoZXJyb3JzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBSZXNvbHZlIGEgcmVzb3VyY2UgdXNpbmcga25vd24gcmVzb2x2ZXJzLiBVbmxpa2UgZ2V0LCByZXNvbHZlIGRvZXNcbiAqIG5vdCBjYWNoZSByZXNvbHZlZCByZXNvdXJjZXMuXG4gKiBAbWV0aG9kIHJlc29sdmVcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gbWFuaWZlc3QgVGhlIG1vZHVsZSByZXF1ZXN0aW5nIHRoZSByZXNvdXJjZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIHJlc291cmNlIHRvIHJlc29sdmU7XG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gQSBwcm9taXNlIGZvciB0aGUgcmVzb3VyY2UgYWRkcmVzcy5cbiAqL1xuUmVzb3VyY2UucHJvdG90eXBlLnJlc29sdmUgPSBmdW5jdGlvbiAobWFuaWZlc3QsIHVybCkge1xuICByZXR1cm4gbmV3IFByb21pc2VDb21wYXQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciBwcm9taXNlcyA9IFtdO1xuICAgIGlmICh1cmwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHJlamVjdCgpO1xuICAgIH1cbiAgICB1dGlsLmVhY2hSZXZlcnNlKHRoaXMucmVzb2x2ZXJzLCBmdW5jdGlvbiAocmVzb2x2ZXIpIHtcbiAgICAgIHByb21pc2VzLnB1c2gobmV3IFByb21pc2VDb21wYXQocmVzb2x2ZXIuYmluZCh7fSwgbWFuaWZlc3QsIHVybCkpKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICAgIGZpcnN0UHJvbWlzZShwcm9taXNlcykudGhlbihyZXNvbHZlLCBmdW5jdGlvbigpIHtcbiAgICAgIHJlamVjdCgnTm8gcmVzb2x2ZXJzIHRvIGhhbmRsZSB1cmw6ICcgKyBKU09OLnN0cmluZ2lmeShbbWFuaWZlc3QsIHVybF0pKTtcbiAgICB9KTtcbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgcmVzb2x2ZXJzOiBjb2RlIHRoYXQga25vd3MgaG93IHRvIGdldCByZXNvdXJjZXNcbiAqIG5lZWRlZCBieSB0aGUgcnVudGltZS4gQSByZXNvbHZlciB3aWxsIGJlIGNhbGxlZCB3aXRoIGZvdXJcbiAqIGFyZ3VtZW50czogdGhlIGFic29sdXRlIG1hbmlmZXN0IG9mIHRoZSByZXF1ZXN0ZXIsIHRoZVxuICogcmVzb3VyY2UgYmVpbmcgcmVxdWVzdGVkLCBhbmQgYSByZXNvbHZlIC8gcmVqZWN0IHBhaXIgdG9cbiAqIGZ1bGZpbGwgYSBwcm9taXNlLlxuICogQG1ldGhvZCBhZGRSZXNvbHZlclxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZXIgVGhlIHJlc29sdmVyIHRvIGFkZC5cbiAqL1xuUmVzb3VyY2UucHJvdG90eXBlLmFkZFJlc29sdmVyID0gZnVuY3Rpb24gKHJlc29sdmVyKSB7XG4gIHRoaXMucmVzb2x2ZXJzLnB1c2gocmVzb2x2ZXIpO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciByZXRyaWV2ZXJzOiBjb2RlIHRoYXQga25vd3MgaG93IHRvIGxvYWQgcmVzb3VyY2VzXG4gKiBuZWVkZWQgYnkgdGhlIHJ1bnRpbWUuIEEgcmV0cmlldmVyIHdpbGwgYmUgY2FsbGVkIHdpdGggYSBVUkxcbiAqIHRvIHJldHJpZXZlIHdpdGggYSBwcm90b2NvbCB0aGF0IGl0IGlzIGFibGUgdG8gaGFuZGxlLlxuICogQG1ldGhvZCBhZGRSZXRyaWV2ZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm90byBUaGUgcHJvdG9jb2wgdG8gcmVnaXN0ZXIgZm9yLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmV0cmlldmVyIFRoZSByZXRyaWV2ZXIgdG8gYWRkLlxuICovXG5SZXNvdXJjZS5wcm90b3R5cGUuYWRkUmV0cmlldmVyID0gZnVuY3Rpb24gKHByb3RvLCByZXRyaWV2ZXIpIHtcbiAgaWYgKHRoaXMuY29udGVudFJldHJpZXZlcnNbcHJvdG9dKSB7XG4gICAgdGhpcy5kZWJ1Zy53YXJuKFwiVW53aWxsaW5nIHRvIG92ZXJyaWRlIGZpbGUgcmV0cmlldmFsIGZvciBcIiArIHByb3RvKTtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5jb250ZW50UmV0cmlldmVyc1twcm90b10gPSByZXRyaWV2ZXI7XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIGV4dGVybmFsIHJlc29sdmVycyBhbmQgcmV0cmVhdmVyc1xuICogQG1ldGhvZCByZWdpc3RlclxuICogQHBhcmFtIHt7XCJwcm90b1wiOlN0cmluZywgXCJyZXNvbHZlclwiOkZ1bmN0aW9uLCBcInJldHJlYXZlclwiOkZ1bmN0aW9ufVtdfVxuICogICAgIHJlc29sdmVycyBUaGUgbGlzdCBvZiByZXRyZWl2ZXJzIGFuZCByZXNvbHZlcnMuXG4gKi9cblJlc291cmNlLnByb3RvdHlwZS5yZWdpc3RlciA9IGZ1bmN0aW9uIChyZXNvbHZlcnMpIHtcbiAgaWYgKCFyZXNvbHZlcnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmVzb2x2ZXJzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICBpZiAoaXRlbS5yZXNvbHZlcikge1xuICAgICAgdGhpcy5hZGRSZXNvbHZlcihpdGVtLnJlc29sdmVyKTtcbiAgICB9IGVsc2UgaWYgKGl0ZW0ucHJvdG8gJiYgaXRlbS5yZXRyaWV2ZXIpIHtcbiAgICAgIHRoaXMuYWRkUmV0cmlldmVyKGl0ZW0ucHJvdG8sIGl0ZW0ucmV0cmlldmVyKTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIFVSTCBpcyBhbiBhYnNvbHV0ZSBVUkwgb2YgYSBnaXZlbiBTY2hlbWUuXG4gKiBAbWV0aG9kIGhhc1NjaGVtZVxuICogQHN0YXRpY1xuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7U3RyaW5nW119IHByb3RvY29scyBXaGl0ZWxpc3RlZCBwcm90b2NvbHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBVUkwgdGhlIFVSTCB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBJZiB0aGUgVVJMIGlzIGFuIGFic29sdXRlIGV4YW1wbGUgb2Ygb25lIG9mIHRoZSBzY2hlbWVzLlxuICovXG5SZXNvdXJjZS5oYXNTY2hlbWUgPSBmdW5jdGlvbiAocHJvdG9jb2xzLCB1cmwpIHtcbiAgdmFyIGk7XG4gIGZvciAoaSA9IDA7IGkgPCBwcm90b2NvbHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodXJsLmluZGV4T2YocHJvdG9jb2xzW2ldICsgXCI6Ly9cIikgPT09IDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIFJlbW92ZSAnLi8nIGFuZCAnLi4vJyBmcm9tIGEgVVJMXG4gKiBSZXF1aXJlZCBiZWNhdXNlIENocm9tZSBBcHBzIGZvciBNb2JpbGUgKGNjYSkgZG9lc24ndCB1bmRlcnN0YW5kXG4gKiBYSFIgcGF0aHMgd2l0aCB0aGVzZSByZWxhdGl2ZSBjb21wb25lbnRzIGluIHRoZSBVUkwuXG4gKiBAbWV0aG9kIHJlbW92ZVJlbGF0aXZlUGF0aFxuICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIG1vZGlmeVxuICogQHJldHVybnMge1N0cmluZ30gdXJsIHdpdGhvdXQgJy4vJyBhbmQgJy4uLydcbiAqKi9cblJlc291cmNlLnJlbW92ZVJlbGF0aXZlUGF0aCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgdmFyIGlkeCA9IHVybC5pbmRleE9mKFwiOi8vXCIpICsgMyxcbiAgICBzdGFjayxcbiAgICB0b1JlbW92ZSxcbiAgICByZXN1bHQ7XG4gIC8vIFJlbW92ZSBhbGwgaW5zdGFuY2VzIG9mIC8uL1xuICB1cmwgPSB1cmwucmVwbGFjZSgvXFwvXFwuXFwvL2csIFwiL1wiKTtcbiAgLy9XZWlyZCBidWcgd2hlcmUgaW4gY2NhLCBtYW5pZmVzdCBzdGFydHMgd2l0aCAnY2hyb21lOi8vLy8nXG4gIC8vVGhpcyBmb3JjZXMgdGhlcmUgdG8gb25seSBiZSAyIHNsYXNoZXNcbiAgd2hpbGUgKHVybC5jaGFyQXQoaWR4KSA9PT0gXCIvXCIpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMCwgaWR4KSArIHVybC5zbGljZShpZHggKyAxLCB1cmwubGVuZ3RoKTtcbiAgfVxuXG4gIC8vIEFkdmFuY2UgdG8gbmV4dCAvXG4gIGlkeCA9IHVybC5pbmRleE9mKFwiL1wiLCBpZHgpO1xuICAvLyBSZW1vdmluZyAuLi9cbiAgc3RhY2sgPSB1cmwuc3Vic3RyKGlkeCArIDEpLnNwbGl0KFwiL1wiKTtcbiAgd2hpbGUgKHN0YWNrLmluZGV4T2YoXCIuLlwiKSAhPT0gLTEpIHtcbiAgICB0b1JlbW92ZSA9IHN0YWNrLmluZGV4T2YoXCIuLlwiKTtcbiAgICBpZiAodG9SZW1vdmUgPT09IDApIHtcbiAgICAgIHN0YWNrLnNoaWZ0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YWNrLnNwbGljZSgodG9SZW1vdmUgLSAxKSwgMik7XG4gICAgfVxuICB9XG4gIFxuICAvL1JlYnVpbGQgc3RyaW5nXG4gIHJlc3VsdCA9IHVybC5zdWJzdHIoMCwgaWR4KTtcbiAgZm9yIChpZHggPSAwOyBpZHggPCBzdGFjay5sZW5ndGg7IGlkeCArPSAxKSB7XG4gICAgcmVzdWx0ICs9IFwiL1wiICsgc3RhY2tbaWR4XTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBSZXNvbHZlIFVSTHMgd2hpY2ggY2FuIGJlIGFjY2Vzc2VkIHVzaW5nIHN0YW5kYXJkIEhUVFAgcmVxdWVzdHMuXG4gKiBAbWV0aG9kIGh0dHBSZXNvbHZlclxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBtYW5pZmVzdCBUaGUgTWFuaWZlc3QgVVJMLlxuICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIHJlc29sdmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIFRoZSBwcm9taXNlIHRvIGNvbXBsZXRlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IFRoZSBwcm9taXNlIHRvIHJlamVjdC5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSBVUkwgY291bGQgYmUgcmVzb2x2ZWQuXG4gKi9cblJlc291cmNlLnByb3RvdHlwZS5odHRwUmVzb2x2ZXIgPSBmdW5jdGlvbiAobWFuaWZlc3QsIHVybCwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gIHZhciBwcm90b2NvbHMgPSBbXCJodHRwXCIsIFwiaHR0cHNcIiwgXCJjaHJvbWVcIiwgXCJjaHJvbWUtZXh0ZW5zaW9uXCIsIFwicmVzb3VyY2VcIixcbiAgICAgICAgICAgICAgICAgICBcImFwcFwiLCBcImdvcGhlclwiXSxcbiAgICBkaXJuYW1lLFxuICAgIHByb3RvY29sSWR4LFxuICAgIHBhdGhJZHgsXG4gICAgcGF0aCxcbiAgICBiYXNlLFxuICAgIHJlc3VsdDtcblxuICBpZiAoUmVzb3VyY2UuaGFzU2NoZW1lKHByb3RvY29scywgdXJsKSkge1xuICAgIHJlc29sdmUoUmVzb3VyY2UucmVtb3ZlUmVsYXRpdmVQYXRoKHVybCkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIFxuICBpZiAoIW1hbmlmZXN0KSB7XG4gICAgcmVqZWN0KCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChSZXNvdXJjZS5oYXNTY2hlbWUocHJvdG9jb2xzLCBtYW5pZmVzdCkgJiZcbiAgICAgIHVybC5pbmRleE9mKFwiOi8vXCIpID09PSAtMSkge1xuICAgIGRpcm5hbWUgPSBtYW5pZmVzdC5zdWJzdHIoMCwgbWFuaWZlc3QubGFzdEluZGV4T2YoXCIvXCIpKTtcbiAgICBwcm90b2NvbElkeCA9IGRpcm5hbWUuaW5kZXhPZihcIjovL1wiKTtcbiAgICBwYXRoSWR4ID0gcHJvdG9jb2xJZHggKyAzICsgZGlybmFtZS5zdWJzdHIocHJvdG9jb2xJZHggKyAzKS5pbmRleE9mKFwiL1wiKTtcbiAgICBwYXRoID0gZGlybmFtZS5zdWJzdHIocGF0aElkeCk7XG4gICAgYmFzZSA9IGRpcm5hbWUuc3Vic3RyKDAsIHBhdGhJZHgpO1xuICAgIGlmICh1cmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcbiAgICAgIHJlc29sdmUoUmVzb3VyY2UucmVtb3ZlUmVsYXRpdmVQYXRoKGJhc2UgKyB1cmwpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzb2x2ZShSZXNvdXJjZS5yZW1vdmVSZWxhdGl2ZVBhdGgoYmFzZSArIHBhdGggKyBcIi9cIiArIHVybCkpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZWplY3QoKTtcbn07XG5cbi8qKlxuICogUmVzb2x2ZSBVUkxzIHdoaWNoIGFyZSBzZWxmLWRlc2NyaWJpbmcuXG4gKiBAbWV0aG9kIG51bGxSZXNvbHZlclxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBtYW5pZmVzdCBUaGUgTWFuaWZlc3QgVVJMLlxuICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIHJlc29sdmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIFRoZSBwcm9taXNlIHRvIGNvbXBsZXRlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IFRoZSBwcm9taXNlIHRvIHJlamVjdC5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSBVUkwgY291bGQgYmUgcmVzb2x2ZWQuXG4gKi9cblJlc291cmNlLnByb3RvdHlwZS5udWxsUmVzb2x2ZXIgPSBmdW5jdGlvbiAobWFuaWZlc3QsIHVybCwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gIHZhciBwcm90b2NvbHMgPSBbXCJtYW5pZmVzdFwiXTtcbiAgaWYgKFJlc291cmNlLmhhc1NjaGVtZShwcm90b2NvbHMsIHVybCkpIHtcbiAgICByZXNvbHZlKHVybCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAodXJsLmluZGV4T2YoJ2RhdGE6JykgPT09IDApIHtcbiAgICByZXNvbHZlKHVybCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmVqZWN0KCk7XG59O1xuXG4vKipcbiAqIFJldHJpZXZlIG1hbmlmZXN0IGNvbnRlbnQgZnJvbSBhIHNlbGYtZGVzY3JpcHRpdmUgbWFuaWZlc3QgdXJsLlxuICogVGhlc2UgdXJscyBhcmUgdXNlZCB0byByZWZlcmVuY2UgYSBtYW5pZmVzdCB3aXRob3V0IHJlcXVpcmluZyBzdWJzZXF1ZW50LFxuICogcG90ZW50aWFsbHkgbm9uLUNPUlMgcmVxdWVzdHMuXG4gKiBAbWV0aG9kIG1hbmlmZXN0UmV0cmlldmVyXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IG1hbmlmZXN0IFRoZSBNYW5pZmVzdCBVUkxcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgVGhlIHByb21pc2UgdG8gY29tcGxldGUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgVGhlIHByb21pc2UgdG8gcmVqZWN0LlxuICovXG5SZXNvdXJjZS5wcm90b3R5cGUubWFuaWZlc3RSZXRyaWV2ZXIgPSBmdW5jdGlvbiAobWFuaWZlc3QsIHJlc29sdmUsIHJlamVjdCkge1xuICB2YXIgZGF0YTtcbiAgdHJ5IHtcbiAgICBkYXRhID0gbWFuaWZlc3Quc3Vic3RyKDExKTtcbiAgICBKU09OLnBhcnNlKGRhdGEpO1xuICAgIHJlc29sdmUoZGF0YSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0aGlzLmRlYnVnLndhcm4oXCJJbnZhbGlkIG1hbmlmZXN0IFVSTCByZWZlcmVuY2VkOlwiICsgbWFuaWZlc3QpO1xuICAgIHJlamVjdCgpO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHJpZXZlIHJlc291cmNlIGNvbnRlbnRzIHVzaW5nIGFuIFhIUiByZXF1ZXN0LlxuICogQG1ldGhvZCB4aHJSZXRyaWV2ZXJcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSByZXNvdXJjZSB0byBmZXRjaC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgVGhlIHByb21pc2UgdG8gY29tcGxldGUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgVGhlIHByb21pc2UgdG8gcmVqZWN0LlxuICovXG5SZXNvdXJjZS5wcm90b3R5cGUueGhyUmV0cmlldmVyID0gZnVuY3Rpb24gKHVybCwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gIHZhciByZWYgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgcmVmLmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsIGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBpZiAocmVmLnJlYWR5U3RhdGUgPT09IDQgJiYgcmVmLnJlc3BvbnNlVGV4dCkge1xuICAgICAgcmVzb2x2ZShyZWYucmVzcG9uc2VUZXh0KTtcbiAgICB9IGVsc2UgaWYgKHJlZi5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICB0aGlzLmRlYnVnLndhcm4oXCJGYWlsZWQgdG8gbG9hZCBmaWxlIFwiICsgdXJsICsgXCI6IFwiICsgcmVmLnN0YXR1cyk7XG4gICAgICByZWplY3QocmVmLnN0YXR1cyk7XG4gICAgfVxuICB9LmJpbmQodGhpcywgcmVzb2x2ZSwgcmVqZWN0KSwgZmFsc2UpO1xuICByZWYub3ZlcnJpZGVNaW1lVHlwZShcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJlxuICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdDaHJvbWUnKSAhPT0gLTEgJiYgIWNocm9tZS5hcHAucnVudGltZSkge1xuICAgIC8vIENocm9tZSAoYnJvd3Nlciwgbm90IGFwcHMvZXh0ZW5zaW9ucykgZmFpbHMgdG8gbG9hZCBtdWx0aXBsZSBBUElzXG4gICAgLy8gZnJvbSB0aGUgc2FtZSBtYW5pZmVzdCB1bmxlc3MgdGhleSBhcmUgbG9hZGVkIHN5bmNocm9ub3VzbHlcbiAgICByZWYub3BlbihcIkdFVFwiLCB1cmwsIGZhbHNlKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBBc3luYyBmb3IgYWxsIG90aGVyIGNhc2VzLCBlc3BlY2lhbGx5IENocm9tZSBhcHBzICh3aGljaCBmYWlsIG90aGVyd2lzZSlcbiAgICByZWYub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xuICB9XG4gIHJlZi5zZW5kKCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlc291cmNlO1xuIiwiLypnbG9iYWxzIGNyeXB0bywgV2ViS2l0QmxvYkJ1aWxkZXIsIEJsb2IsIFVSTCAqL1xuLypnbG9iYWxzIHdlYmtpdFVSTCwgVWludDhBcnJheSwgVWludDE2QXJyYXksIEFycmF5QnVmZmVyICovXG4vKmpzbGludCBpbmRlbnQ6Mix3aGl0ZTp0cnVlLGJyb3dzZXI6dHJ1ZSxub2RlOnRydWUsc2xvcHB5OnRydWUgKi9cblxuLyoqXG4gKiBVdGlsaXR5IG1ldGhvZCB1c2VkIHdpdGhpbiB0aGUgZnJlZWRvbSBMaWJyYXJ5LlxuICogQGNsYXNzIHV0aWxcbiAqIEBzdGF0aWNcbiAqL1xudmFyIHV0aWwgPSB7fTtcblxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiBmb3IgaXRlcmF0aW5nIG92ZXIgYW4gYXJyYXkgYmFja3dhcmRzLiBJZiB0aGUgZnVuY1xuICogcmV0dXJucyBhIHRydWUgdmFsdWUsIGl0IHdpbGwgYnJlYWsgb3V0IG9mIHRoZSBsb29wLlxuICogQG1ldGhvZCBlYWNoUmV2ZXJzZVxuICogQHN0YXRpY1xuICovXG51dGlsLmVhY2hSZXZlcnNlID0gZnVuY3Rpb24oYXJ5LCBmdW5jKSB7XG4gIGlmIChhcnkpIHtcbiAgICB2YXIgaTtcbiAgICBmb3IgKGkgPSBhcnkubGVuZ3RoIC0gMTsgaSA+IC0xOyBpIC09IDEpIHtcbiAgICAgIGlmIChhcnlbaV0gJiYgZnVuYyhhcnlbaV0sIGksIGFyeSkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEBtZXRob2QgaGFzUHJvcFxuICogQHN0YXRpY1xuICovXG51dGlsLmhhc1Byb3AgPSBmdW5jdGlvbihvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufTtcblxuLyoqXG4gKiBDeWNsZXMgb3ZlciBwcm9wZXJ0aWVzIGluIGFuIG9iamVjdCBhbmQgY2FsbHMgYSBmdW5jdGlvbiBmb3IgZWFjaFxuICogcHJvcGVydHkgdmFsdWUuIElmIHRoZSBmdW5jdGlvbiByZXR1cm5zIGEgdHJ1dGh5IHZhbHVlLCB0aGVuIHRoZVxuICogaXRlcmF0aW9uIGlzIHN0b3BwZWQuXG4gKiBAbWV0aG9kIGVhY2hQcm9wXG4gKiBAc3RhdGljXG4gKi9cbnV0aWwuZWFjaFByb3AgPSBmdW5jdGlvbihvYmosIGZ1bmMpIHtcbiAgdmFyIHByb3A7XG4gIGZvciAocHJvcCBpbiBvYmopIHtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICBpZiAoZnVuYyhvYmpbcHJvcF0sIHByb3ApKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBTaW1wbGUgZnVuY3Rpb24gdG8gbWl4IGluIHByb3BlcnRpZXMgZnJvbSBzb3VyY2UgaW50byB0YXJnZXQsXG4gKiBidXQgb25seSBpZiB0YXJnZXQgZG9lcyBub3QgYWxyZWFkeSBoYXZlIGEgcHJvcGVydHkgb2YgdGhlIHNhbWUgbmFtZS5cbiAqIFRoaXMgaXMgbm90IHJvYnVzdCBpbiBJRSBmb3IgdHJhbnNmZXJyaW5nIG1ldGhvZHMgdGhhdCBtYXRjaFxuICogT2JqZWN0LnByb3RvdHlwZSBuYW1lcywgYnV0IHRoZSB1c2VzIG9mIG1peGluIGhlcmUgc2VlbSB1bmxpa2VseSB0b1xuICogdHJpZ2dlciBhIHByb2JsZW0gcmVsYXRlZCB0byB0aGF0LlxuICogQG1ldGhvZCBtaXhpblxuICogQHN0YXRpY1xuICovXG51dGlsLm1peGluID0gZnVuY3Rpb24odGFyZ2V0LCBzb3VyY2UsIGZvcmNlKSB7XG4gIGlmIChzb3VyY2UpIHtcbiAgICB1dGlsLmVhY2hQcm9wKHNvdXJjZSwgZnVuY3Rpb24gKHZhbHVlLCBwcm9wKSB7XG4gICAgICBpZiAoZm9yY2UgfHwgIXV0aWwuaGFzUHJvcCh0YXJnZXQsIHByb3ApKSB7XG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG4vKipcbiAqIEdldCBhIHVuaXF1ZSBJRC5cbiAqIEBtZXRob2QgZ2V0SWRcbiAqIEBzdGF0aWNcbiAqL1xudXRpbC5nZXRJZCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgZ3VpZCA9ICdndWlkJyxcbiAgICAgIGRvbWFpbiA9IDEyLFxuICAgICAgYnVmZmVyO1xuICAvLyBDaHJvbWUgLyBGaXJlZm94LlxuICBpZiAodHlwZW9mIGNyeXB0byA9PT0gJ29iamVjdCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcykge1xuICAgIGJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KGRvbWFpbik7XG4gICAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhidWZmZXIpO1xuICAgIHV0aWwuZWFjaFJldmVyc2UoYnVmZmVyLCBmdW5jdGlvbihuKSB7XG4gICAgICBndWlkICs9ICctJyArIG47XG4gICAgfSk7XG4gIC8vIE5vZGVcbiAgfSBlbHNlIGlmICh0eXBlb2YgY3J5cHRvID09PSAnb2JqZWN0JyAmJiBjcnlwdG8ucmFuZG9tQnl0ZXMpIHtcbiAgICBidWZmZXIgPSBjcnlwdG8ucmFuZG9tQnl0ZXMoZG9tYWluKTtcbiAgICB1dGlsLmVhY2hSZXZlcnNlKGJ1ZmZlciwgZnVuY3Rpb24obikge1xuICAgICAgZ3VpZCArPSAnLScgKyBuO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChkb21haW4gPiAwKSB7XG4gICAgICBndWlkICs9ICctJyArIE1hdGguY2VpbCgyNTUgKiBNYXRoLnJhbmRvbSgpKTtcbiAgICAgIGRvbWFpbiAtPSAxO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBndWlkO1xufTtcblxuLyoqXG4gKiBFbmNvZGUgYSBzdHJpbmcgaW50byBhIGJpbmFyeSBhcnJheSBidWZmZXIsIGJ5IHRyZWF0aW5nIGVhY2ggY2hhcmFjdGVyIGFzIGFcbiAqIHV0ZjE2IGVuY29kZWQgY2hhcmFjdGVyIC0gdGhlIG5hdGl2ZSBqYXZhc2NyaXB0IGVuY29kaW5nLlxuICogQG1ldGhvZCBzdHIyYWJcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBlbmNvZGUuXG4gKiBAcmV0dXJucyB7QXJyYXlCdWZmZXJ9IFRoZSBlbmNvZGVkIHN0cmluZy5cbiAqL1xudXRpbC5zdHIyYWIgPSBmdW5jdGlvbihzdHIpIHtcbiAgdmFyIGxlbmd0aCA9IHN0ci5sZW5ndGgsXG4gICAgICBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIobGVuZ3RoICogMiksIC8vIDIgYnl0ZXMgZm9yIGVhY2ggY2hhclxuICAgICAgYnVmZmVyVmlldyA9IG5ldyBVaW50MTZBcnJheShidWZmZXIpLFxuICAgICAgaTtcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgYnVmZmVyVmlld1tpXSA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICB9XG5cbiAgcmV0dXJuIGJ1ZmZlcjtcbn07XG5cbi8qKlxuICogQ29udmVydCBhbiBhcnJheSBidWZmZXIgY29udGFpbmluZyBhbiBlbmNvZGVkIHN0cmluZyBiYWNrIGludG8gYSBzdHJpbmcuXG4gKiBAbWV0aG9kIGFiMnN0clxuICogQHN0YXRpY1xuICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgdG8gdW53cmFwLlxuICogQHJldHVybnMge1N0cmluZ30gVGhlIGRlY29kZWQgYnVmZmVyLlxuICovXG51dGlsLmFiMnN0ciA9IGZ1bmN0aW9uKGJ1ZmZlcikge1xuICB2YXIgc3RyID0gJyc7XG4gIHZhciBhID0gbmV3IFVpbnQxNkFycmF5KGJ1ZmZlcik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgIHN0ciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGFbaV0pO1xuICB9XG4gIHJldHVybiBzdHI7XG59O1xuXG4vKipcbiAqIEFkZCAnb24nIGFuZCAnZW1pdCcgbWV0aG9kcyB0byBhbiBvYmplY3QsIHdoaWNoIGFjdCBhcyBhIGxpZ2h0IHdlaWdodFxuICogZXZlbnQgaGFuZGxpbmcgc3RydWN0dXJlLlxuICogQGNsYXNzIGhhbmRsZUV2ZW50c1xuICogQHN0YXRpY1xuICovXG51dGlsLmhhbmRsZUV2ZW50cyA9IGZ1bmN0aW9uKG9iaikge1xuICB2YXIgZXZlbnRTdGF0ZSA9IHtcbiAgICBERUJVR19CQUNLUkVGOiBvYmosXG4gICAgbXVsdGlwbGU6IHt9LFxuICAgIG1heWJlbXVsdGlwbGU6IFtdLFxuICAgIHNpbmdsZToge30sXG4gICAgbWF5YmVzaW5nbGU6IFtdXG4gIH0sIGZpbHRlciwgcHVzaDtcblxuICAvKipcbiAgICogRmlsdGVyIGEgbGlzdCBiYXNlZCBvbiBhIHByZWRpY2F0ZS4gVGhlIGxpc3QgaXMgZmlsdGVyZWQgaW4gcGxhY2UsIHdpdGhcbiAgICogc2VsZWN0ZWQgaXRlbXMgcmVtb3ZlZCBhbmQgcmV0dXJuZWQgYnkgdGhlIGZ1bmN0aW9uLlxuICAgKiBAbWV0aG9kXG4gICAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgVGhlIGxpc3QgdG8gZmlsdGVyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgbWV0aG9kIHRvIHJ1biBvbiBlYWNoIGl0ZW0uXG4gICAqIEByZXR1cm5zIHtBcnJheX0gU2VsZWN0ZWQgaXRlbXNcbiAgICovXG4gIGZpbHRlciA9IGZ1bmN0aW9uKGxpc3QsIHByZWRpY2F0ZSkge1xuICAgIHZhciByZXQgPSBbXSwgaTtcblxuICAgIGlmICghbGlzdCB8fCAhbGlzdC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSBsaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaSAtPSAxKSB7XG4gICAgICBpZiAocHJlZGljYXRlKGxpc3RbaV0pKSB7XG4gICAgICAgIHJldC5wdXNoKGxpc3Quc3BsaWNlKGksIDEpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfTtcblxuICAvKipcbiAgICogRW5xdWV1ZSBhIGhhbmRsZXIgZm9yIGEgc3BlY2lmaWMgdHlwZS5cbiAgICogQG1ldGhvZFxuICAgKiBAcGFyYW0ge1N0cmluZ30gdG8gVGhlIHF1ZXVlICgnc2luZ2xlJyBvciAnbXVsdGlwbGUnKSB0byBxdWV1ZSBvbi5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgVGhlIHR5cGUgb2YgZXZlbnQgdG8gd2FpdCBmb3IuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXIgVGhlIGhhbmRsZXIgdG8gZW5xdWV1ZS5cbiAgICovXG4gIHB1c2ggPSBmdW5jdGlvbih0bywgdHlwZSwgaGFuZGxlcikge1xuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpc1snbWF5YmUnICsgdG9dLnB1c2goW3R5cGUsIGhhbmRsZXJdKTtcbiAgICB9IGVsc2UgaWYgKHRoaXNbdG9dW3R5cGVdKSB7XG4gICAgICB0aGlzW3RvXVt0eXBlXS5wdXNoKGhhbmRsZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzW3RvXVt0eXBlXSA9IFtoYW5kbGVyXTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgbWV0aG9kIHRvIGJlIGV4ZWN1dGVkIHdoZW4gYW4gZXZlbnQgb2YgYSBzcGVjaWZpYyB0eXBlIG9jY3Vycy5cbiAgICogQG1ldGhvZCBvblxuICAgKiBAcGFyYW0ge1N0cmluZ3xGdW5jdGlvbn0gdHlwZSBUaGUgdHlwZSBvZiBldmVudCB0byByZWdpc3RlciBhZ2FpbnN0LlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIFRoZSBoYW5kbGVyIHRvIHJ1biB3aGVuIHRoZSBldmVudCBvY2N1cnMuXG4gICAqL1xuICBvYmoub24gPSBwdXNoLmJpbmQoZXZlbnRTdGF0ZSwgJ211bHRpcGxlJyk7XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgbWV0aG9kIHRvIGJlIGV4ZWN1dGUgdGhlIG5leHQgdGltZSBhbiBldmVudCBvY2N1cnMuXG4gICAqIEBtZXRob2Qgb25jZVxuICAgKiBAcGFyYW0ge1N0cmluZ3xGdW5jdGlvbn0gdHlwZSBUaGUgdHlwZSBvZiBldmVudCB0byB3YWl0IGZvci5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlciBUaGUgaGFuZGxlciB0byBydW4gdGhlIG5leHQgdGltZSBhIG1hdGNoaW5nIGV2ZW50XG4gICAqICAgICBpcyByYWlzZWQuXG4gICAqL1xuICBvYmoub25jZSA9IHB1c2guYmluZChldmVudFN0YXRlLCAnc2luZ2xlJyk7XG5cbiAgLyoqXG4gICAqIEVtaXQgYW4gZXZlbnQgb24gdGhpcyBvYmplY3QuXG4gICAqIEBtZXRob2QgZW1pdFxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBUaGUgdHlwZSBvZiBldmVudCB0byByYWlzZS5cbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgVGhlIHBheWxvYWQgb2YgdGhlIGV2ZW50LlxuICAgKi9cbiAgb2JqLmVtaXQgPSBmdW5jdGlvbih0eXBlLCBkYXRhKSB7XG4gICAgdmFyIGksIHF1ZXVlO1xuICAgIC8vIE5vdGUgdGhhdCByZWdpc3RlcmVkIGhhbmRsZXJzIG1heSBzdG9wIGV2ZW50cyBvbiB0aGUgb2JqZWN0LCBieSBjYWxsaW5nXG4gICAgLy8gdGhpcy5vZmYoKS4gQXMgc3VjaCwgdGhlIHByZXNlbmNlIG9mIHRoZXNlIGtleXMgbXVzdCBiZSBjaGVja2VkIG9uIGVhY2hcbiAgICAvLyBpdGVyYXRpb24gb2YgdGhlIHJlbGV2YW50IGxvb3BzLlxuICAgIGZvciAoaSA9IDA7IHRoaXMubXVsdGlwbGVbdHlwZV0gJiZcbiAgICAgICAgIGkgPCB0aGlzLm11bHRpcGxlW3R5cGVdLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodGhpcy5tdWx0aXBsZVt0eXBlXVtpXShkYXRhKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5zaW5nbGVbdHlwZV0pIHtcbiAgICAgIHF1ZXVlID0gdGhpcy5zaW5nbGVbdHlwZV07XG4gICAgICB0aGlzLnNpbmdsZVt0eXBlXSA9IFtdO1xuICAgICAgZm9yIChpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHF1ZXVlW2ldKGRhdGEpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5tYXliZW11bHRpcGxlLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodGhpcy5tYXliZW11bHRpcGxlW2ldWzBdKHR5cGUsIGRhdGEpKSB7XG4gICAgICAgIHRoaXMubWF5YmVtdWx0aXBsZVtpXVsxXShkYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChpID0gdGhpcy5tYXliZXNpbmdsZS5sZW5ndGggLSAxOyBpID49IDA7IGkgLT0gMSkge1xuICAgICAgaWYgKHRoaXMubWF5YmVzaW5nbGVbaV1bMF0odHlwZSwgZGF0YSkpIHtcbiAgICAgICAgcXVldWUgPSB0aGlzLm1heWJlc2luZ2xlLnNwbGljZShpLCAxKTtcbiAgICAgICAgcXVldWVbMF1bMV0oZGF0YSk7XG4gICAgICB9XG4gICAgfVxuICB9LmJpbmQoZXZlbnRTdGF0ZSk7XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbiBldmVudCBoYW5kbGVyXG4gICAqIEBtZXRob2Qgb2ZmXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIFRoZSB0eXBlIG9mIGV2ZW50IHRvIHJlbW92ZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbj99IGhhbmRsZXIgVGhlIGhhbmRsZXIgdG8gcmVtb3ZlLlxuICAgKi9cbiAgb2JqLm9mZiA9IGZ1bmN0aW9uKHR5cGUsIGhhbmRsZXIpIHtcbiAgICBpZiAoIXR5cGUpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLkRFQlVHX0JBQ0tSRUY7XG4gICAgICB0aGlzLm11bHRpcGxlID0ge307XG4gICAgICB0aGlzLm1heWJlbXVsdGlwbGUgPSBbXTtcbiAgICAgIHRoaXMuc2luZ2xlID0ge307XG4gICAgICB0aGlzLm1heWJlc2luZ2xlID0gW107XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBmaWx0ZXIodGhpcy5tYXliZXNpbmdsZSwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbVswXSA9PT0gdHlwZSAmJiAoIWhhbmRsZXIgfHwgaXRlbVsxXSA9PT0gaGFuZGxlcik7XG4gICAgICB9KTtcbiAgICAgIGZpbHRlcih0aGlzLm1heWJlbXVsdGlwbGUsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW1bMF0gPT09IHR5cGUgJiYgKCFoYW5kbGVyIHx8IGl0ZW1bMV0gPT09IGhhbmRsZXIpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCFoYW5kbGVyKSB7XG4gICAgICBkZWxldGUgdGhpcy5tdWx0aXBsZVt0eXBlXTtcbiAgICAgIGRlbGV0ZSB0aGlzLnNpbmdsZVt0eXBlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmlsdGVyKHRoaXMubXVsdGlwbGVbdHlwZV0sIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0gPT09IGhhbmRsZXI7XG4gICAgICB9KTtcbiAgICAgIGZpbHRlcih0aGlzLnNpbmdsZVt0eXBlXSwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbSA9PT0gaGFuZGxlcjtcbiAgICAgIH0pO1xuICAgIH1cbiAgfS5iaW5kKGV2ZW50U3RhdGUpO1xufTtcblxuLyoqXG4gKiBXaGVuIHJ1biB3aXRob3V0IGEgd2luZG93LCBvciBzcGVjaWZpY2FsbHkgcmVxdWVzdGVkLlxuICogTm90ZTogRGVjbGFyYXRpb24gY2FuIGJlIHJlZGVmaW5lZCBpbiBmb3JjZU1vZHVsZUNvbnRleHQgYmVsb3cuXG4gKiBAbWV0aG9kIGlzTW9kdWxlQ29udGV4dFxuICogQGZvciB1dGlsXG4gKiBAc3RhdGljXG4gKi9cbi8qIUBwcmVzZXJ2ZSBTdGFydE1vZHVsZUNvbnRleHREZWNsYXJhdGlvbiovXG51dGlsLmlzTW9kdWxlQ29udGV4dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpO1xufTtcblxuLyoqXG4gKiBHZXQgYSBCbG9iIG9iamVjdCBvZiBhIHN0cmluZy5cbiAqIFBvbHlmaWxscyBpbXBsZW1lbnRhdGlvbnMgd2hpY2ggZG9uJ3QgaGF2ZSBhIGN1cnJlbnQgQmxvYiBjb25zdHJ1Y3RvciwgbGlrZVxuICogcGhhbnRvbWpzLlxuICogQG1ldGhvZCBnZXRCbG9iXG4gKiBAc3RhdGljXG4gKi9cbnV0aWwuZ2V0QmxvYiA9IGZ1bmN0aW9uKGRhdGEsIHR5cGUpIHtcbiAgaWYgKHR5cGVvZiBCbG9iICE9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBXZWJLaXRCbG9iQnVpbGRlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgYnVpbGRlciA9IG5ldyBXZWJLaXRCbG9iQnVpbGRlcigpO1xuICAgIGJ1aWxkZXIuYXBwZW5kKGRhdGEpO1xuICAgIHJldHVybiBidWlsZGVyLmdldEJsb2IodHlwZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBCbG9iKFtkYXRhXSwge3R5cGU6IHR5cGV9KTtcbiAgfVxufTtcblxuLyoqXG4gKiBGaW5kIGFsbCBzY3JpcHRzIG9uIHRoZSBnaXZlbiBwYWdlLlxuICogQG1ldGhvZCBzY3JpcHRzXG4gKiBAc3RhdGljXG4gKi9cbnV0aWwuc2NyaXB0cyA9IGZ1bmN0aW9uKGdsb2JhbCkge1xuICByZXR1cm4gZ2xvYmFsLmRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdXRpbDtcbiIsIi8qanNsaW50IG5vZGU6dHJ1ZSovXG5cbnZhciBwcm92aWRlcnMgPSBbXG4gIHJlcXVpcmUoJy4uLy4uL3Byb3ZpZGVycy9jb3JlL2NvcmUudW5wcml2aWxlZ2VkJyksXG4gIHJlcXVpcmUoJy4uLy4uL3Byb3ZpZGVycy9jb3JlL2NvcmUuZWNobycpLFxuICByZXF1aXJlKCcuLi8uLi9wcm92aWRlcnMvY29yZS9jb3JlLmNvbnNvbGUnKSxcbiAgcmVxdWlyZSgnLi4vLi4vcHJvdmlkZXJzL2NvcmUvY29yZS5jcnlwdG8nKSxcbiAgcmVxdWlyZSgnLi4vLi4vcHJvdmlkZXJzL2NvcmUvY29yZS5wZWVyY29ubmVjdGlvbicpLFxuICByZXF1aXJlKCcuLi8uLi9wcm92aWRlcnMvY29yZS9jb3JlLnJ0Y3BlZXJjb25uZWN0aW9uJyksXG4gIHJlcXVpcmUoJy4uLy4uL3Byb3ZpZGVycy9jb3JlL2NvcmUucnRjZGF0YWNoYW5uZWwnKSxcbiAgcmVxdWlyZSgnLi4vLi4vcHJvdmlkZXJzL2NvcmUvY29yZS5zdG9yYWdlJyksXG4gIHJlcXVpcmUoJy4uLy4uL3Byb3ZpZGVycy9jb3JlL2NvcmUudmlldycpLFxuICByZXF1aXJlKCcuLi8uLi9wcm92aWRlcnMvY29yZS9jb3JlLm9hdXRoJyksXG4gIHJlcXVpcmUoJy4uLy4uL3Byb3ZpZGVycy9jb3JlL2NvcmUud2Vic29ja2V0JyksXG4gIHJlcXVpcmUoJy4uLy4uL3Byb3ZpZGVycy9jb3JlL2NvcmUueGhyJyksXG4gIHJlcXVpcmUoJy4uLy4uL3Byb3ZpZGVycy9jb3JlL2NvcmUuYmF0dGVyeScpLFxuICByZXF1aXJlKCcuLi8uLi9wcm92aWRlcnMvY29yZS9jb3JlLm9ubGluZScpXG5dO1xuXG5mdW5jdGlvbiBnZXRGcmVlZG9tU2NyaXB0KCkge1xuICAndXNlIHN0cmljdCc7XG4gIHZhciBzY3JpcHQ7XG4gIGlmICh3aW5kb3cuZG9jdW1lbnQuY3VycmVudFNjcmlwdCkge1xuICAgIC8vIE5ldyBicm93c2VyIEFQSVxuICAgIHNjcmlwdCA9IHdpbmRvdy5kb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcbiAgfSBlbHNlIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImNvbXBsZXRlXCIgJiZcbiAgICAgICAgICAgICBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImxvYWRlZFwiKSB7XG4gICAgLy8gSW5jbHVkZWQgaW4gSFRNTCBvciB0aHJvdWdoIGRvY3VtZW50LndyaXRlXG4gICAgc2NyaXB0ID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKTtcbiAgICBzY3JpcHQgPSBzY3JpcHRbc2NyaXB0Lmxlbmd0aCAtIDFdLnNyYztcbiAgfSBlbHNlIHtcbiAgICAvLyBMb2FkZWQgdGhyb3VnaCBkb20gbWFuaXB1bGF0aW9uIG9yIGFzeW5jLlxuICAgIHNjcmlwdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcInNjcmlwdFtzcmMqPSdmcmVlZG9tLmpzJ10sc2NyaXB0W3NyYyo9J2ZyZWVkb20tJ11cIlxuICAgICk7XG4gICAgaWYgKHNjcmlwdC5sZW5ndGggIT09IDEpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJDb3VsZCBub3QgZGV0ZXJtaW5lIGZyZWVkb20uanMgc2NyaXB0IHRhZy5cIik7XG4gICAgfVxuICAgIHNjcmlwdCA9IHNjcmlwdFswXS5zcmM7XG4gIH1cbiAgcmV0dXJuIHNjcmlwdDtcbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHdpbmRvdy5mcmVlZG9tID0gcmVxdWlyZSgnLi4vZW50cnknKS5iaW5kKHt9LCB7XG4gICAgbG9jYXRpb246IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgIHBvcnRUeXBlOiByZXF1aXJlKCcuLi9saW5rL3dvcmtlcicpLFxuICAgIHNvdXJjZTogZ2V0RnJlZWRvbVNjcmlwdCgpLFxuICAgIHByb3ZpZGVyczogcHJvdmlkZXJzLFxuICAgIG9hdXRoOiBbXG4gICAgICByZXF1aXJlKCcuLi8uLi9wcm92aWRlcnMvb2F1dGgvb2F1dGgubG9jYWxwYWdlYXV0aCcpLFxuICAgICAgcmVxdWlyZSgnLi4vLi4vcHJvdmlkZXJzL29hdXRoL29hdXRoLnJlbW90ZXBhZ2VhdXRoJylcbiAgICBdXG4gIH0pO1xufSBlbHNlIHtcbiAgcmVxdWlyZSgnLi4vZW50cnknKSh7XG4gICAgaXNNb2R1bGU6IHRydWUsXG4gICAgcG9ydFR5cGU6IHJlcXVpcmUoJy4uL2xpbmsvd29ya2VyJyksXG4gICAgcHJvdmlkZXJzOiBwcm92aWRlcnMsXG4gICAgZ2xvYmFsOiBnbG9iYWxcbiAgfSk7XG59XG4iXX0=