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
 * @version 0.6.32
 */
 
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = [{"name":"console","api":{"log":{"type":"method","value":["string","string"]},"debug":{"type":"method","value":["string","string"]},"info":{"type":"method","value":["string","string"]},"warn":{"type":"method","value":["string","string"]},"error":{"type":"method","value":["string","string"]}}},{"name":"core.battery","api":{"isCharging":{"type":"method","value":[],"ret":"boolean"},"getChargingTime":{"type":"method","value":[],"ret":"number"},"getDischargingTime":{"type":"method","value":[],"ret":"number"},"getLevel":{"type":"method","value":[],"ret":"number"},"chargingchange":{"type":"event","value":{"charging":"boolean"}},"chargingtimechange":{"type":"event","value":{"chargingTime":"number"}},"dischargingtimechange":{"type":"event","value":{"dischargingTime":"number"}},"levelchange":{"type":"event","value":{"level":"number"}}}},{"name":"core.console","api":{"log":{"type":"method","value":["string","string"]},"debug":{"type":"method","value":["string","string"]},"info":{"type":"method","value":["string","string"]},"warn":{"type":"method","value":["string","string"]},"error":{"type":"method","value":["string","string"]}}},{"name":"core.crypto","api":{"getRandomBytes":{"type":"method","value":["number"],"ret":"buffer"}}},{"name":"core.echo","api":{"setup":{"type":"method","value":["string"]},"send":{"type":"method","value":["string"]},"message":{"type":"event","value":"string"}}},{"name":"core","api":{"createChannel":{"type":"method","value":[],"ret":{"channel":"proxy","identifier":"string"}},"bindChannel":{"type":"method","value":["string"],"ret":"proxy"},"getId":{"type":"method","value":[],"ret":["array","string"]},"getLogger":{"type":"method","value":["string"],"ret":"proxy"},"require":{"type":"method","value":["string","string"],"ret":"proxy"}}},{"name":"core.oauth","api":{"initiateOAuth":{"type":"method","value":[["array","string"]],"ret":{"redirect":"string","state":"string"},"err":{"errcode":"string","message":"string"}},"launchAuthFlow":{"type":"method","value":["string",{"redirect":"string","state":"string"},"boolean"],"ret":"string","err":{"errcode":"string","message":"string"}}}},{"name":"core.peerconnection","api":{"setup":{"type":"method","value":["string","string",["array","string"],"boolean"]},"send":{"type":"method","value":[{"channelLabel":"string","text":"string","binary":"blob","buffer":"buffer"}]},"onReceived":{"type":"event","value":{"channelLabel":"string","text":"string","binary":"blob","buffer":"buffer"}},"openDataChannel":{"type":"method","value":["string"]},"closeDataChannel":{"type":"method","value":["string"]},"onOpenDataChannel":{"type":"event","value":{"channelId":"string"}},"onCloseDataChannel":{"type":"event","value":{"channelId":"string"}},"getBufferedAmount":{"type":"method","value":["string"],"ret":"number"},"getInfo":{"type":"method","value":[],"ret":"string"},"createOffer":{"type":"method","value":[{"offerToReceiveVideo":"number","offerToReceiveAudio":"number","voiceActivityDetection":"boolean","iceRestart":"boolean"}],"ret":{"type":"string","sdp":"string"}},"close":{"type":"method","value":[]},"onClose":{"type":"event","value":{}}}},{"name":"core.rtcdatachannel","api":{"constructor":{"value":["string"]},"getLabel":{"type":"method","value":[],"ret":"string"},"getOrdered":{"type":"method","value":[],"ret":"boolean"},"getMaxPacketLifeTime":{"type":"method","value":[],"ret":"number"},"getMaxRetransmits":{"type":"method","value":[],"ret":"number"},"getProtocol":{"type":"method","value":[],"ret":"string"},"getNegotiated":{"type":"method","value":[],"ret":"boolean"},"getId":{"type":"method","value":[],"ret":"number"},"getReadyState":{"type":"method","value":[],"ret":"string"},"getBufferedAmount":{"type":"method","value":[],"ret":"number"},"onopen":{"type":"event","value":[]},"onerror":{"type":"event","value":[]},"onclose":{"type":"event","value":[]},"close":{"type":"method","value":[]},"onmessage":{"type":"event","value":{"text":"string","buffer":"buffer"}},"getBinaryType":{"type":"method","value":[],"ret":"string"},"setBinaryType":{"type":"method","value":["string"]},"send":{"type":"method","value":["string"]},"sendBuffer":{"type":"method","value":["buffer"]}}},{"name":"core.rtcpeerconnection","api":{"constructor":{"value":[{"iceServers":["array",{"urls":["array","string"],"username":"string","credential":"string"}],"iceTransports":"string","peerIdentity":"string"}]},"createOffer":{"type":"method","value":[{"offerToReceiveAudio":"number","offerToReceiveVideo":"number","iceRestart":"boolean","voiceActivityDetection":"boolean"}],"ret":{"type":"string","sdp":"string"}},"createAnswer":{"type":"method","value":[],"ret":{"type":"string","sdp":"string"}},"setLocalDescription":{"type":"method","value":[{"type":"string","sdp":"string"}]},"getLocalDescription":{"type":"method","value":[],"ret":{"type":"string","sdp":"string"}},"setRemoteDescription":{"type":"method","value":[{"type":"string","sdp":"string"}],"ret":{}},"getRemoteDescription":{"type":"method","value":[],"ret":{"type":"string","sdp":"string"}},"getSignalingState":{"type":"method","value":[],"ret":"string"},"updateIce":{"type":"method","value":[{"iceServers":["array",{"urls":["array","string"],"username":"string","credential":"string"}],"iceTransports":"string","peerIdentity":"string"}],"ret":{}},"addIceCandidate":{"type":"method","value":[{"candidate":"string","sdpMid":"string","sdpMLineIndex":"number"}],"ret":{}},"getIceGatheringState":{"type":"method","value":[],"ret":"string"},"getIceConnectionState":{"type":"method","value":[],"ret":"string"},"getConfiguration":{"type":"method","value":[],"ret":{"iceServers":["array",{"urls":["array","string"],"username":"string","credential":"string"}],"iceTransports":"string","peerIdentity":"string"}},"getLocalStreams":{"type":"method","value":[],"ret":["array","string"]},"getRemoteStreams":{"type":"method","value":[],"ret":["array","string"]},"getStreamById":{"type":"method","value":["string"],"ret":"string"},"addStream":{"type":"method","value":["string"],"ret":{}},"removeStream":{"type":"method","value":["string"],"ret":{}},"close":{"type":"method","value":[],"ret":{}},"createDataChannel":{"type":"method","value":["string",{"ordered":"boolean","maxPacketLifeTime":"number","maxRetransmits":"number","protocol":"string","negotiated":"boolean","id":"number"}],"ret":"string"},"ondatachannel":{"type":"event","value":{"channel":"string"}},"getStats":{"type":"method","value":["string"],"ret":"object"},"onnegotiationneeded":{"type":"event","value":[]},"onicecandidate":{"type":"event","value":{"candidate":{"candidate":"string","sdpMid":"string","sdpMLineIndex":"number"}}},"onsignalingstatechange":{"type":"event","value":[]},"onaddstream":{"type":"event","value":{"stream":"number"}},"onremovestream":{"type":"event","value":{"stream":"number"}},"oniceconnectionstatechange":{"type":"event","value":[]}}},{"name":"core.storage","api":{"keys":{"type":"method","value":[],"ret":["array","string"]},"get":{"type":"method","value":["string"],"ret":"string"},"set":{"type":"method","value":["string","string"],"ret":"string"},"remove":{"type":"method","value":["string"],"ret":"string"},"clear":{"type":"method","value":[]}}},{"name":"core.tcpsocket","api":{"constructor":{"value":["number"]},"getInfo":{"type":"method","value":[],"ret":{"connected":"boolean","localAddress":"string","localPort":"number","peerAddress":"string","peerPort":"number"}},"ERRCODE":{"type":"constant","value":{"SUCCESS":"Success!","UNKNOWN":"Unknown error","ALREADY_CONNECTED":"Socket already connected","INVALID_ARGUMENT":"Invalid argument","TIMED_OUT":"Timed out","NOT_CONNECTED":"Socket not connected","NETWORK_CHANGED":"Network changed","CONNECTION_CLOSED":"Connection closed gracefully","CONNECTION_RESET":"Connection reset","CONNECTION_REFUSED":"Connection refused","CONNECTION_FAILED":"Connection failed","NAME_NOT_RESOLVED":"DNS lookup failed","INTERNET_DISCONNECTED":"Cannot reach any network","ADDRESS_INVALID":"Invalid address","ADDRESS_UNREACHABLE":"No route to host","HOST_UNREACHABLE":"SOCKS proxy server could not reach host"}},"close":{"type":"method","value":[],"err":{"errcode":"string","message":"string"}},"onDisconnect":{"type":"event","value":{"errcode":"string","message":"string"}},"connect":{"type":"method","value":["string","number"],"err":{"errcode":"string","message":"string"}},"secure":{"type":"method","value":[],"err":{"errcode":"string","message":"string"}},"pause":{"type":"method","value":[],"err":{"errcode":"string","message":"string"}},"resume":{"type":"method","value":[],"err":{"errcode":"string","message":"string"}},"prepareSecure":{"type":"method","value":[],"err":{"errcode":"string","message":"string"}},"write":{"type":"method","value":["buffer"],"err":{"errcode":"string","message":"string"}},"onData":{"type":"event","value":{"data":"buffer"}},"listen":{"type":"method","value":["string","number"],"err":{"errcode":"string","message":"string"}},"onConnection":{"type":"event","value":{"socket":"number","host":"string","port":"number"}}}},{"name":"core.udpsocket","api":{"ERRCODE":{"type":"constant","value":{"SUCCESS":"Success!","UNKNOWN":"Unknown error","ALREADY_BOUND":"Socket already bound","ALREADY_CLOSED":"Socket already closed","INVALID_ARGUMENT":"Invalid argument","NETWORK_CHANGED":"Network changed","SEND_FAILED":"Send failed"}},"bind":{"type":"method","value":["string","number"],"ret":[],"err":{"errcode":"string","message":"string"}},"getInfo":{"type":"method","value":[],"ret":{"localAddress":"string","localPort":"number"}},"sendTo":{"type":"method","value":["buffer","string","number"],"ret":"number","err":{"errcode":"string","message":"string"}},"destroy":{"type":"method","value":[]},"onData":{"type":"event","value":{"resultCode":"number","address":"string","port":"number","data":"buffer"}}}},{"name":"core.view","api":{"show":{"type":"method","value":["string"]},"isSecure":{"type":"method","value":[],"ret":"boolean"},"close":{"type":"method","value":[]},"postMessage":{"type":"method","value":["object"]},"message":{"type":"event","value":"object"},"onClose":{"type":"event","value":[]}}},{"name":"core.websocket","api":{"constructor":{"value":["string",["array","string"]]},"send":{"type":"method","value":[{"text":"string","binary":"blob","buffer":"buffer"}],"err":{"errcode":"string","message":"string"}},"getReadyState":{"type":"method","value":[],"ret":"number"},"getBufferedAmount":{"type":"method","value":["string"],"ret":"number"},"close":{"type":"method","value":["number","string"],"err":{"errcode":"string","message":"string"}},"onMessage":{"type":"event","value":{"text":"string","binary":"blob","buffer":"buffer"}},"onOpen":{"type":"event","value":[]},"onError":{"type":"event","value":{"errcode":"string","message":"string"}},"onClose":{"type":"event","value":{"code":"number","reason":"string","wasClean":"boolean"}}}},{"name":"core.xhr","api":{"open":{"type":"method","value":["string","string","boolean","string","string"],"err":{"errcode":"string","message":"string"}},"send":{"type":"method","value":[{"string":"string","buffer":"buffer","blob":"blob"}]},"abort":{"type":"method","value":[]},"getResponseHeader":{"type":"method","value":["string"],"ret":"string"},"getAllResponseHeaders":{"type":"method","value":[],"ret":"string"},"setRequestHeader":{"type":"method","value":["string","string"]},"overrideMimeType":{"type":"method","value":["string"]},"getReadyState":{"type":"method","value":[],"ret":"number"},"getResponse":{"type":"method","value":[],"ret":{"string":"string","buffer":"buffer","object":"object"}},"getResponseText":{"type":"method","value":[],"ret":"string"},"getResponseURL":{"type":"method","value":[],"ret":"string"},"getResponseType":{"type":"method","value":[],"ret":"string"},"setResponseType":{"type":"method","value":["string"]},"getStatus":{"type":"method","value":[],"ret":"number"},"getStatusText":{"type":"method","value":[],"ret":"string"},"getTimeout":{"type":"method","value":[],"ret":"number"},"setTimeout":{"type":"method","value":["number"]},"getWithCredentials":{"type":"method","value":[],"ret":"boolean"},"setWithCredentials":{"type":"method","value":["boolean"]},"onloadstart":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onprogress":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onabort":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onerror":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onload":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"ontimeout":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onloadend":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onreadystatechange":{"type":"event","value":{}},"onuploadloadstart":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onuploadprogress":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onuploadabort":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onuploaderror":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onuploadload":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onuploadtimeout":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onuploadloadend":{"type":"event","value":{"lengthComputable":"boolean","loaded":"number","total":"number"}},"onuploadreadystatechange":{"type":"event","value":{}}}},{"name":"social","api":{"ERRCODE":{"type":"constant","value":{"SUCCESS":"Success!","UNKNOWN":"Unknown error","OFFLINE":"User is currently offline","MALFORMEDPARAMETERS":"Parameters are malformed","LOGIN_BADCREDENTIALS":"Error authenticating with server","LOGIN_FAILEDCONNECTION":"Error connecting to server","LOGIN_ALREADYONLINE":"User is already logged in","LOGIN_OAUTHERROR":"OAuth Error","SEND_INVALIDDESTINATION":"Message sent to an invalid destination"}},"STATUS":{"type":"constant","value":{"OFFLINE":"OFFLINE","ONLINE":"ONLINE","ONLINE_WITH_OTHER_APP":"ONLINE_WITH_OTHER_APP"}},"login":{"type":"method","value":[{"agent":"string","version":"string","url":"string","interactive":"boolean","rememberLogin":"boolean"}],"ret":{"userId":"string","clientId":"string","status":"string","lastUpdated":"number","lastSeen":"number"},"err":{"errcode":"string","message":"string"}},"clearCachedCredentials":{"type":"method","value":[]},"getClients":{"type":"method","value":[],"ret":"object","err":{"errcode":"string","message":"string"}},"getUsers":{"type":"method","value":[],"ret":"object","err":{"errcode":"string","message":"string"}},"sendMessage":{"type":"method","value":["string","string"],"err":{"errcode":"string","message":"string"}},"logout":{"type":"method","value":[],"err":{"errcode":"string","message":"string"}},"onMessage":{"type":"event","value":{"from":{"userId":"string","clientId":"string","status":"string","lastUpdated":"number","lastSeen":"number"},"message":"string"}},"onUserProfile":{"type":"event","value":{"userId":"string","lastUpdated":"number","name":"string","url":"string","imageData":"string"}},"onClientState":{"type":"event","value":{"userId":"string","clientId":"string","status":"string","lastUpdated":"number","lastSeen":"number"}}}},{"name":"storage","api":{"scope":{"type":"constant","value":{"SESSION":0,"DEVICE_LOCAL":1,"USER_LOCAL":2,"SHARED":3}},"ERRCODE":{"type":"constant","value":{"SUCCESS":"Success!","UNKNOWN":"Unknown error","OFFLINE":"Database not reachable","MALFORMEDPARAMETERS":"Parameters are malformed"}},"constructor":{"value":[{"scope":"number"}]},"keys":{"type":"method","value":[],"ret":["array","string"],"err":{"errcode":"string","message":"string"}},"get":{"type":"method","value":["string"],"ret":"string","err":{"errcode":"string","message":"string"}},"set":{"type":"method","value":["string","string"],"ret":"string","err":{"errcode":"string","message":"string"}},"remove":{"type":"method","value":["string"],"ret":"string","err":{"errcode":"string","message":"string"}},"clear":{"type":"method","value":[],"ret":[],"err":{"errcode":"string","message":"string"}}}},{"name":"storebuffer","api":{"scope":{"type":"constant","value":{"SESSION":0,"DEVICE_LOCAL":1,"USER_LOCAL":2,"SHARED":3}},"ERRCODE":{"type":"constant","value":{"SUCCESS":"Success!","UNKNOWN":"Unknown error","OFFLINE":"Database not reachable","MALFORMEDPARAMETERS":"Parameters are malformed"}},"constructor":{"value":[{"scope":"number"}]},"keys":{"type":"method","value":[],"ret":["array","string"],"err":{"errcode":"string","message":"string"}},"get":{"type":"method","value":["string"],"ret":"buffer","err":{"errcode":"string","message":"string"}},"set":{"type":"method","value":["string","buffer"],"ret":"buffer","err":{"errcode":"string","message":"string"}},"remove":{"type":"method","value":["string"],"ret":"buffer","err":{"errcode":"string","message":"string"}},"clear":{"type":"method","value":[],"ret":[],"err":{"errcode":"string","message":"string"}}}},{"name":"transport","api":{"ERRCODE":{"type":"constant","value":{"SUCCESS":"Success!","UNKNOWN":"Unknown error","OFFLINE":"Not reachable","MALFORMEDPARAMETERS":"Parameters are malformed"}},"setup":{"type":"method","value":["string","proxy"],"ret":[],"err":{"errcode":"string","message":"string"}},"send":{"type":"method","value":["string","buffer"],"ret":[],"err":{"errcode":"string","message":"string"}},"close":{"type":"method","value":[],"ret":[],"err":{"errcode":"string","message":"string"}},"onData":{"type":"event","value":{"tag":"string","data":"buffer"}},"onClose":{"type":"event","value":[]}}}];

},{}],2:[function(require,module,exports){
(function (process,global){
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
 * @version   3.2.1
 */

(function() {
    "use strict";
    function lib$es6$promise$utils$$objectOrFunction(x) {
      return typeof x === 'function' || (typeof x === 'object' && x !== null);
    }

    function lib$es6$promise$utils$$isFunction(x) {
      return typeof x === 'function';
    }

    function lib$es6$promise$utils$$isMaybeThenable(x) {
      return typeof x === 'object' && x !== null;
    }

    var lib$es6$promise$utils$$_isArray;
    if (!Array.isArray) {
      lib$es6$promise$utils$$_isArray = function (x) {
        return Object.prototype.toString.call(x) === '[object Array]';
      };
    } else {
      lib$es6$promise$utils$$_isArray = Array.isArray;
    }

    var lib$es6$promise$utils$$isArray = lib$es6$promise$utils$$_isArray;
    var lib$es6$promise$asap$$len = 0;
    var lib$es6$promise$asap$$vertxNext;
    var lib$es6$promise$asap$$customSchedulerFn;

    var lib$es6$promise$asap$$asap = function asap(callback, arg) {
      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len] = callback;
      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len + 1] = arg;
      lib$es6$promise$asap$$len += 2;
      if (lib$es6$promise$asap$$len === 2) {
        // If len is 2, that means that we need to schedule an async flush.
        // If additional callbacks are queued before the queue is flushed, they
        // will be processed by this flush that we are scheduling.
        if (lib$es6$promise$asap$$customSchedulerFn) {
          lib$es6$promise$asap$$customSchedulerFn(lib$es6$promise$asap$$flush);
        } else {
          lib$es6$promise$asap$$scheduleFlush();
        }
      }
    }

    function lib$es6$promise$asap$$setScheduler(scheduleFn) {
      lib$es6$promise$asap$$customSchedulerFn = scheduleFn;
    }

    function lib$es6$promise$asap$$setAsap(asapFn) {
      lib$es6$promise$asap$$asap = asapFn;
    }

    var lib$es6$promise$asap$$browserWindow = (typeof window !== 'undefined') ? window : undefined;
    var lib$es6$promise$asap$$browserGlobal = lib$es6$promise$asap$$browserWindow || {};
    var lib$es6$promise$asap$$BrowserMutationObserver = lib$es6$promise$asap$$browserGlobal.MutationObserver || lib$es6$promise$asap$$browserGlobal.WebKitMutationObserver;
    var lib$es6$promise$asap$$isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

    // test for web worker but not in IE10
    var lib$es6$promise$asap$$isWorker = typeof Uint8ClampedArray !== 'undefined' &&
      typeof importScripts !== 'undefined' &&
      typeof MessageChannel !== 'undefined';

    // node
    function lib$es6$promise$asap$$useNextTick() {
      // node version 0.10.x displays a deprecation warning when nextTick is used recursively
      // see https://github.com/cujojs/when/issues/410 for details
      return function() {
        process.nextTick(lib$es6$promise$asap$$flush);
      };
    }

    // vertx
    function lib$es6$promise$asap$$useVertxTimer() {
      return function() {
        lib$es6$promise$asap$$vertxNext(lib$es6$promise$asap$$flush);
      };
    }

    function lib$es6$promise$asap$$useMutationObserver() {
      var iterations = 0;
      var observer = new lib$es6$promise$asap$$BrowserMutationObserver(lib$es6$promise$asap$$flush);
      var node = document.createTextNode('');
      observer.observe(node, { characterData: true });

      return function() {
        node.data = (iterations = ++iterations % 2);
      };
    }

    // web worker
    function lib$es6$promise$asap$$useMessageChannel() {
      var channel = new MessageChannel();
      channel.port1.onmessage = lib$es6$promise$asap$$flush;
      return function () {
        channel.port2.postMessage(0);
      };
    }

    function lib$es6$promise$asap$$useSetTimeout() {
      return function() {
        setTimeout(lib$es6$promise$asap$$flush, 1);
      };
    }

    var lib$es6$promise$asap$$queue = new Array(1000);
    function lib$es6$promise$asap$$flush() {
      for (var i = 0; i < lib$es6$promise$asap$$len; i+=2) {
        var callback = lib$es6$promise$asap$$queue[i];
        var arg = lib$es6$promise$asap$$queue[i+1];

        callback(arg);

        lib$es6$promise$asap$$queue[i] = undefined;
        lib$es6$promise$asap$$queue[i+1] = undefined;
      }

      lib$es6$promise$asap$$len = 0;
    }

    function lib$es6$promise$asap$$attemptVertx() {
      try {
        var r = require;
        var vertx = r('vertx');
        lib$es6$promise$asap$$vertxNext = vertx.runOnLoop || vertx.runOnContext;
        return lib$es6$promise$asap$$useVertxTimer();
      } catch(e) {
        return lib$es6$promise$asap$$useSetTimeout();
      }
    }

    var lib$es6$promise$asap$$scheduleFlush;
    // Decide what async method to use to triggering processing of queued callbacks:
    if (lib$es6$promise$asap$$isNode) {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useNextTick();
    } else if (lib$es6$promise$asap$$BrowserMutationObserver) {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMutationObserver();
    } else if (lib$es6$promise$asap$$isWorker) {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMessageChannel();
    } else if (lib$es6$promise$asap$$browserWindow === undefined && typeof require === 'function') {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$attemptVertx();
    } else {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useSetTimeout();
    }
    function lib$es6$promise$then$$then(onFulfillment, onRejection) {
      var parent = this;

      var child = new this.constructor(lib$es6$promise$$internal$$noop);

      if (child[lib$es6$promise$$internal$$PROMISE_ID] === undefined) {
        lib$es6$promise$$internal$$makePromise(child);
      }

      var state = parent._state;

      if (state) {
        var callback = arguments[state - 1];
        lib$es6$promise$asap$$asap(function(){
          lib$es6$promise$$internal$$invokeCallback(state, child, callback, parent._result);
        });
      } else {
        lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection);
      }

      return child;
    }
    var lib$es6$promise$then$$default = lib$es6$promise$then$$then;
    function lib$es6$promise$promise$resolve$$resolve(object) {
      /*jshint validthis:true */
      var Constructor = this;

      if (object && typeof object === 'object' && object.constructor === Constructor) {
        return object;
      }

      var promise = new Constructor(lib$es6$promise$$internal$$noop);
      lib$es6$promise$$internal$$resolve(promise, object);
      return promise;
    }
    var lib$es6$promise$promise$resolve$$default = lib$es6$promise$promise$resolve$$resolve;
    var lib$es6$promise$$internal$$PROMISE_ID = Math.random().toString(36).substring(16);

    function lib$es6$promise$$internal$$noop() {}

    var lib$es6$promise$$internal$$PENDING   = void 0;
    var lib$es6$promise$$internal$$FULFILLED = 1;
    var lib$es6$promise$$internal$$REJECTED  = 2;

    var lib$es6$promise$$internal$$GET_THEN_ERROR = new lib$es6$promise$$internal$$ErrorObject();

    function lib$es6$promise$$internal$$selfFulfillment() {
      return new TypeError("You cannot resolve a promise with itself");
    }

    function lib$es6$promise$$internal$$cannotReturnOwn() {
      return new TypeError('A promises callback cannot return that same promise.');
    }

    function lib$es6$promise$$internal$$getThen(promise) {
      try {
        return promise.then;
      } catch(error) {
        lib$es6$promise$$internal$$GET_THEN_ERROR.error = error;
        return lib$es6$promise$$internal$$GET_THEN_ERROR;
      }
    }

    function lib$es6$promise$$internal$$tryThen(then, value, fulfillmentHandler, rejectionHandler) {
      try {
        then.call(value, fulfillmentHandler, rejectionHandler);
      } catch(e) {
        return e;
      }
    }

    function lib$es6$promise$$internal$$handleForeignThenable(promise, thenable, then) {
       lib$es6$promise$asap$$asap(function(promise) {
        var sealed = false;
        var error = lib$es6$promise$$internal$$tryThen(then, thenable, function(value) {
          if (sealed) { return; }
          sealed = true;
          if (thenable !== value) {
            lib$es6$promise$$internal$$resolve(promise, value);
          } else {
            lib$es6$promise$$internal$$fulfill(promise, value);
          }
        }, function(reason) {
          if (sealed) { return; }
          sealed = true;

          lib$es6$promise$$internal$$reject(promise, reason);
        }, 'Settle: ' + (promise._label || ' unknown promise'));

        if (!sealed && error) {
          sealed = true;
          lib$es6$promise$$internal$$reject(promise, error);
        }
      }, promise);
    }

    function lib$es6$promise$$internal$$handleOwnThenable(promise, thenable) {
      if (thenable._state === lib$es6$promise$$internal$$FULFILLED) {
        lib$es6$promise$$internal$$fulfill(promise, thenable._result);
      } else if (thenable._state === lib$es6$promise$$internal$$REJECTED) {
        lib$es6$promise$$internal$$reject(promise, thenable._result);
      } else {
        lib$es6$promise$$internal$$subscribe(thenable, undefined, function(value) {
          lib$es6$promise$$internal$$resolve(promise, value);
        }, function(reason) {
          lib$es6$promise$$internal$$reject(promise, reason);
        });
      }
    }

    function lib$es6$promise$$internal$$handleMaybeThenable(promise, maybeThenable, then) {
      if (maybeThenable.constructor === promise.constructor &&
          then === lib$es6$promise$then$$default &&
          constructor.resolve === lib$es6$promise$promise$resolve$$default) {
        lib$es6$promise$$internal$$handleOwnThenable(promise, maybeThenable);
      } else {
        if (then === lib$es6$promise$$internal$$GET_THEN_ERROR) {
          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$GET_THEN_ERROR.error);
        } else if (then === undefined) {
          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
        } else if (lib$es6$promise$utils$$isFunction(then)) {
          lib$es6$promise$$internal$$handleForeignThenable(promise, maybeThenable, then);
        } else {
          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
        }
      }
    }

    function lib$es6$promise$$internal$$resolve(promise, value) {
      if (promise === value) {
        lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$selfFulfillment());
      } else if (lib$es6$promise$utils$$objectOrFunction(value)) {
        lib$es6$promise$$internal$$handleMaybeThenable(promise, value, lib$es6$promise$$internal$$getThen(value));
      } else {
        lib$es6$promise$$internal$$fulfill(promise, value);
      }
    }

    function lib$es6$promise$$internal$$publishRejection(promise) {
      if (promise._onerror) {
        promise._onerror(promise._result);
      }

      lib$es6$promise$$internal$$publish(promise);
    }

    function lib$es6$promise$$internal$$fulfill(promise, value) {
      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }

      promise._result = value;
      promise._state = lib$es6$promise$$internal$$FULFILLED;

      if (promise._subscribers.length !== 0) {
        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, promise);
      }
    }

    function lib$es6$promise$$internal$$reject(promise, reason) {
      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }
      promise._state = lib$es6$promise$$internal$$REJECTED;
      promise._result = reason;

      lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publishRejection, promise);
    }

    function lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection) {
      var subscribers = parent._subscribers;
      var length = subscribers.length;

      parent._onerror = null;

      subscribers[length] = child;
      subscribers[length + lib$es6$promise$$internal$$FULFILLED] = onFulfillment;
      subscribers[length + lib$es6$promise$$internal$$REJECTED]  = onRejection;

      if (length === 0 && parent._state) {
        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, parent);
      }
    }

    function lib$es6$promise$$internal$$publish(promise) {
      var subscribers = promise._subscribers;
      var settled = promise._state;

      if (subscribers.length === 0) { return; }

      var child, callback, detail = promise._result;

      for (var i = 0; i < subscribers.length; i += 3) {
        child = subscribers[i];
        callback = subscribers[i + settled];

        if (child) {
          lib$es6$promise$$internal$$invokeCallback(settled, child, callback, detail);
        } else {
          callback(detail);
        }
      }

      promise._subscribers.length = 0;
    }

    function lib$es6$promise$$internal$$ErrorObject() {
      this.error = null;
    }

    var lib$es6$promise$$internal$$TRY_CATCH_ERROR = new lib$es6$promise$$internal$$ErrorObject();

    function lib$es6$promise$$internal$$tryCatch(callback, detail) {
      try {
        return callback(detail);
      } catch(e) {
        lib$es6$promise$$internal$$TRY_CATCH_ERROR.error = e;
        return lib$es6$promise$$internal$$TRY_CATCH_ERROR;
      }
    }

    function lib$es6$promise$$internal$$invokeCallback(settled, promise, callback, detail) {
      var hasCallback = lib$es6$promise$utils$$isFunction(callback),
          value, error, succeeded, failed;

      if (hasCallback) {
        value = lib$es6$promise$$internal$$tryCatch(callback, detail);

        if (value === lib$es6$promise$$internal$$TRY_CATCH_ERROR) {
          failed = true;
          error = value.error;
          value = null;
        } else {
          succeeded = true;
        }

        if (promise === value) {
          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$cannotReturnOwn());
          return;
        }

      } else {
        value = detail;
        succeeded = true;
      }

      if (promise._state !== lib$es6$promise$$internal$$PENDING) {
        // noop
      } else if (hasCallback && succeeded) {
        lib$es6$promise$$internal$$resolve(promise, value);
      } else if (failed) {
        lib$es6$promise$$internal$$reject(promise, error);
      } else if (settled === lib$es6$promise$$internal$$FULFILLED) {
        lib$es6$promise$$internal$$fulfill(promise, value);
      } else if (settled === lib$es6$promise$$internal$$REJECTED) {
        lib$es6$promise$$internal$$reject(promise, value);
      }
    }

    function lib$es6$promise$$internal$$initializePromise(promise, resolver) {
      try {
        resolver(function resolvePromise(value){
          lib$es6$promise$$internal$$resolve(promise, value);
        }, function rejectPromise(reason) {
          lib$es6$promise$$internal$$reject(promise, reason);
        });
      } catch(e) {
        lib$es6$promise$$internal$$reject(promise, e);
      }
    }

    var lib$es6$promise$$internal$$id = 0;
    function lib$es6$promise$$internal$$nextId() {
      return lib$es6$promise$$internal$$id++;
    }

    function lib$es6$promise$$internal$$makePromise(promise) {
      promise[lib$es6$promise$$internal$$PROMISE_ID] = lib$es6$promise$$internal$$id++;
      promise._state = undefined;
      promise._result = undefined;
      promise._subscribers = [];
    }

    function lib$es6$promise$promise$all$$all(entries) {
      return new lib$es6$promise$enumerator$$default(this, entries).promise;
    }
    var lib$es6$promise$promise$all$$default = lib$es6$promise$promise$all$$all;
    function lib$es6$promise$promise$race$$race(entries) {
      /*jshint validthis:true */
      var Constructor = this;

      if (!lib$es6$promise$utils$$isArray(entries)) {
        return new Constructor(function(resolve, reject) {
          reject(new TypeError('You must pass an array to race.'));
        });
      } else {
        return new Constructor(function(resolve, reject) {
          var length = entries.length;
          for (var i = 0; i < length; i++) {
            Constructor.resolve(entries[i]).then(resolve, reject);
          }
        });
      }
    }
    var lib$es6$promise$promise$race$$default = lib$es6$promise$promise$race$$race;
    function lib$es6$promise$promise$reject$$reject(reason) {
      /*jshint validthis:true */
      var Constructor = this;
      var promise = new Constructor(lib$es6$promise$$internal$$noop);
      lib$es6$promise$$internal$$reject(promise, reason);
      return promise;
    }
    var lib$es6$promise$promise$reject$$default = lib$es6$promise$promise$reject$$reject;


    function lib$es6$promise$promise$$needsResolver() {
      throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
    }

    function lib$es6$promise$promise$$needsNew() {
      throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
    }

    var lib$es6$promise$promise$$default = lib$es6$promise$promise$$Promise;
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
    function lib$es6$promise$promise$$Promise(resolver) {
      this[lib$es6$promise$$internal$$PROMISE_ID] = lib$es6$promise$$internal$$nextId();
      this._result = this._state = undefined;
      this._subscribers = [];

      if (lib$es6$promise$$internal$$noop !== resolver) {
        typeof resolver !== 'function' && lib$es6$promise$promise$$needsResolver();
        this instanceof lib$es6$promise$promise$$Promise ? lib$es6$promise$$internal$$initializePromise(this, resolver) : lib$es6$promise$promise$$needsNew();
      }
    }

    lib$es6$promise$promise$$Promise.all = lib$es6$promise$promise$all$$default;
    lib$es6$promise$promise$$Promise.race = lib$es6$promise$promise$race$$default;
    lib$es6$promise$promise$$Promise.resolve = lib$es6$promise$promise$resolve$$default;
    lib$es6$promise$promise$$Promise.reject = lib$es6$promise$promise$reject$$default;
    lib$es6$promise$promise$$Promise._setScheduler = lib$es6$promise$asap$$setScheduler;
    lib$es6$promise$promise$$Promise._setAsap = lib$es6$promise$asap$$setAsap;
    lib$es6$promise$promise$$Promise._asap = lib$es6$promise$asap$$asap;

    lib$es6$promise$promise$$Promise.prototype = {
      constructor: lib$es6$promise$promise$$Promise,

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
      then: lib$es6$promise$then$$default,

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
    var lib$es6$promise$enumerator$$default = lib$es6$promise$enumerator$$Enumerator;
    function lib$es6$promise$enumerator$$Enumerator(Constructor, input) {
      this._instanceConstructor = Constructor;
      this.promise = new Constructor(lib$es6$promise$$internal$$noop);

      if (!this.promise[lib$es6$promise$$internal$$PROMISE_ID]) {
        lib$es6$promise$$internal$$makePromise(this.promise);
      }

      if (lib$es6$promise$utils$$isArray(input)) {
        this._input     = input;
        this.length     = input.length;
        this._remaining = input.length;

        this._result = new Array(this.length);

        if (this.length === 0) {
          lib$es6$promise$$internal$$fulfill(this.promise, this._result);
        } else {
          this.length = this.length || 0;
          this._enumerate();
          if (this._remaining === 0) {
            lib$es6$promise$$internal$$fulfill(this.promise, this._result);
          }
        }
      } else {
        lib$es6$promise$$internal$$reject(this.promise, lib$es6$promise$enumerator$$validationError());
      }
    }

    function lib$es6$promise$enumerator$$validationError() {
      return new Error('Array Methods must be provided an Array');
    }

    lib$es6$promise$enumerator$$Enumerator.prototype._enumerate = function() {
      var length  = this.length;
      var input   = this._input;

      for (var i = 0; this._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
        this._eachEntry(input[i], i);
      }
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._eachEntry = function(entry, i) {
      var c = this._instanceConstructor;
      var resolve = c.resolve;

      if (resolve === lib$es6$promise$promise$resolve$$default) {
        var then = lib$es6$promise$$internal$$getThen(entry);

        if (then === lib$es6$promise$then$$default &&
            entry._state !== lib$es6$promise$$internal$$PENDING) {
          this._settledAt(entry._state, i, entry._result);
        } else if (typeof then !== 'function') {
          this._remaining--;
          this._result[i] = entry;
        } else if (c === lib$es6$promise$promise$$default) {
          var promise = new c(lib$es6$promise$$internal$$noop);
          lib$es6$promise$$internal$$handleMaybeThenable(promise, entry, then);
          this._willSettleAt(promise, i);
        } else {
          this._willSettleAt(new c(function(resolve) { resolve(entry); }), i);
        }
      } else {
        this._willSettleAt(resolve(entry), i);
      }
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._settledAt = function(state, i, value) {
      var promise = this.promise;

      if (promise._state === lib$es6$promise$$internal$$PENDING) {
        this._remaining--;

        if (state === lib$es6$promise$$internal$$REJECTED) {
          lib$es6$promise$$internal$$reject(promise, value);
        } else {
          this._result[i] = value;
        }
      }

      if (this._remaining === 0) {
        lib$es6$promise$$internal$$fulfill(promise, this._result);
      }
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._willSettleAt = function(promise, i) {
      var enumerator = this;

      lib$es6$promise$$internal$$subscribe(promise, undefined, function(value) {
        enumerator._settledAt(lib$es6$promise$$internal$$FULFILLED, i, value);
      }, function(reason) {
        enumerator._settledAt(lib$es6$promise$$internal$$REJECTED, i, reason);
      });
    };
    function lib$es6$promise$polyfill$$polyfill() {
      var local;

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

      if (P && Object.prototype.toString.call(P.resolve()) === '[object Promise]' && !P.cast) {
        return;
      }

      local.Promise = lib$es6$promise$promise$$default;
    }
    var lib$es6$promise$polyfill$$default = lib$es6$promise$polyfill$$polyfill;

    var lib$es6$promise$umd$$ES6Promise = {
      'Promise': lib$es6$promise$promise$$default,
      'polyfill': lib$es6$promise$polyfill$$default
    };

    /* global define:true module:true window: true */
    if (typeof define === 'function' && define['amd']) {
      define(function() { return lib$es6$promise$umd$$ES6Promise; });
    } else if (typeof module !== 'undefined' && module['exports']) {
      module['exports'] = lib$es6$promise$umd$$ES6Promise;
    } else if (typeof this !== 'undefined') {
      this['ES6Promise'] = lib$es6$promise$umd$$ES6Promise;
    }

    lib$es6$promise$polyfill$$default();
}).call(this);


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

(function () {
    try {
        cachedSetTimeout = setTimeout;
    } catch (e) {
        cachedSetTimeout = function () {
            throw new Error('setTimeout is not defined');
        }
    }
    try {
        cachedClearTimeout = clearTimeout;
    } catch (e) {
        cachedClearTimeout = function () {
            throw new Error('clearTimeout is not defined');
        }
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
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
var nav = navigator;

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

},{"../../src/util":37,"_process":3}],7:[function(require,module,exports){
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

},{"../../src/util":37}],8:[function(require,module,exports){
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

},{"../../src/util":37}],9:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
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

},{"../../src/util":37,"./core.rtcpeerconnection":12}],12:[function(require,module,exports){
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

},{"./core.rtcdatachannel":11,"es6-promise":2,"webrtc-adapter":4}],13:[function(require,module,exports){
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

},{"../../src/util":37}],14:[function(require,module,exports){
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

},{"../../src/consumer":22,"../../src/proxy/eventInterface":34,"../../src/util":37}],15:[function(require,module,exports){
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

},{"../../src/util":37,"es6-promise":2}],16:[function(require,module,exports){
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

},{}],17:[function(require,module,exports){
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

},{"es6-promise":2}],18:[function(require,module,exports){
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

},{"es6-promise":2}],19:[function(require,module,exports){
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

},{"es6-promise":2}],20:[function(require,module,exports){
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

},{"es6-promise":2}],21:[function(require,module,exports){
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

},{"../dist/bundle.compiled":1}],22:[function(require,module,exports){
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

},{"./util":37}],23:[function(require,module,exports){
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

},{"./util":37}],24:[function(require,module,exports){
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

},{"./api":20,"./bundle":21,"./debug":23,"./hub":25,"./manager":28,"./policy":31,"./proxybinder":35,"./resource":36,"./util":37,"es6-promise":2}],25:[function(require,module,exports){
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

},{"./util":37}],26:[function(require,module,exports){
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

},{"./util":37}],27:[function(require,module,exports){
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


},{"../link":26}],28:[function(require,module,exports){
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

},{"./moduleinternal":30,"./util":37}],29:[function(require,module,exports){
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

},{"./provider":32,"./util":37}],30:[function(require,module,exports){
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

},{"./provider":32,"./proxy/apiInterface":33,"./proxybinder":35,"./util":37,"es6-promise":2}],31:[function(require,module,exports){
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

},{"./module":29,"./util":37,"es6-promise":2}],32:[function(require,module,exports){
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

},{"./consumer":22,"./util":37}],33:[function(require,module,exports){
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

},{"../consumer":22,"../util":37,"es6-promise":2}],34:[function(require,module,exports){
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

},{"../util":37}],35:[function(require,module,exports){
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

},{"./consumer":22,"./provider":32,"./proxy/apiInterface":33,"./proxy/eventInterface":34,"es6-promise":2}],36:[function(require,module,exports){
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
  ref.open("GET", url, false);
  ref.send();
};

module.exports = Resource;

},{"./util":37,"es6-promise":2}],37:[function(require,module,exports){
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

},{}],38:[function(require,module,exports){
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
  require('../../providers/core/core.battery')
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

},{"../../providers/core/core.battery":5,"../../providers/core/core.console":6,"../../providers/core/core.crypto":7,"../../providers/core/core.echo":8,"../../providers/core/core.oauth":9,"../../providers/core/core.peerconnection":10,"../../providers/core/core.rtcdatachannel":11,"../../providers/core/core.rtcpeerconnection":12,"../../providers/core/core.storage":13,"../../providers/core/core.unprivileged":14,"../../providers/core/core.view":15,"../../providers/core/core.websocket":16,"../../providers/core/core.xhr":17,"../../providers/oauth/oauth.localpageauth":18,"../../providers/oauth/oauth.remotepageauth":19,"../entry":24,"../link/worker":27}]},{},[38])

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1aWxkL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC9kaXN0L2J1bmRsZS5jb21waWxlZC5qcyIsImJ1aWxkL25vZGVfbW9kdWxlcy9lczYtcHJvbWlzZS9kaXN0L2VzNi1wcm9taXNlLmpzIiwiYnVpbGQvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsImJ1aWxkL25vZGVfbW9kdWxlcy93ZWJydGMtYWRhcHRlci9hZGFwdGVyLmpzIiwiYnVpbGQvcHJvdmlkZXJzL2NvcmUvY29yZS5iYXR0ZXJ5LmpzIiwiYnVpbGQvcHJvdmlkZXJzL2NvcmUvY29yZS5jb25zb2xlLmpzIiwiYnVpbGQvcHJvdmlkZXJzL2NvcmUvY29yZS5jcnlwdG8uanMiLCJidWlsZC9wcm92aWRlcnMvY29yZS9jb3JlLmVjaG8uanMiLCJidWlsZC9wcm92aWRlcnMvY29yZS9jb3JlLm9hdXRoLmpzIiwiYnVpbGQvcHJvdmlkZXJzL2NvcmUvY29yZS5wZWVyY29ubmVjdGlvbi5qcyIsImJ1aWxkL3Byb3ZpZGVycy9jb3JlL2NvcmUucnRjZGF0YWNoYW5uZWwuanMiLCJidWlsZC9wcm92aWRlcnMvY29yZS9jb3JlLnJ0Y3BlZXJjb25uZWN0aW9uLmpzIiwiYnVpbGQvcHJvdmlkZXJzL2NvcmUvY29yZS5zdG9yYWdlLmpzIiwiYnVpbGQvcHJvdmlkZXJzL2NvcmUvY29yZS51bnByaXZpbGVnZWQuanMiLCJidWlsZC9wcm92aWRlcnMvY29yZS9jb3JlLnZpZXcuanMiLCJidWlsZC9wcm92aWRlcnMvY29yZS9jb3JlLndlYnNvY2tldC5qcyIsImJ1aWxkL3Byb3ZpZGVycy9jb3JlL2NvcmUueGhyLmpzIiwiYnVpbGQvcHJvdmlkZXJzL29hdXRoL29hdXRoLmxvY2FscGFnZWF1dGguanMiLCJidWlsZC9wcm92aWRlcnMvb2F1dGgvb2F1dGgucmVtb3RlcGFnZWF1dGguanMiLCJidWlsZC9zcmMvYXBpLmpzIiwiYnVpbGQvc3JjL2J1bmRsZS5qcyIsImJ1aWxkL3NyYy9jb25zdW1lci5qcyIsImJ1aWxkL3NyYy9kZWJ1Zy5qcyIsImJ1aWxkL3NyYy9lbnRyeS5qcyIsImJ1aWxkL3NyYy9odWIuanMiLCJidWlsZC9zcmMvbGluay5qcyIsImJ1aWxkL3NyYy9saW5rL3dvcmtlci5qcyIsImJ1aWxkL3NyYy9tYW5hZ2VyLmpzIiwiYnVpbGQvc3JjL21vZHVsZS5qcyIsImJ1aWxkL3NyYy9tb2R1bGVpbnRlcm5hbC5qcyIsImJ1aWxkL3NyYy9wb2xpY3kuanMiLCJidWlsZC9zcmMvcHJvdmlkZXIuanMiLCJidWlsZC9zcmMvcHJveHkvYXBpSW50ZXJmYWNlLmpzIiwiYnVpbGQvc3JjL3Byb3h5L2V2ZW50SW50ZXJmYWNlLmpzIiwiYnVpbGQvc3JjL3Byb3h5YmluZGVyLmpzIiwiYnVpbGQvc3JjL3Jlc291cmNlLmpzIiwiYnVpbGQvc3JjL3V0aWwuanMiLCJidWlsZC9zcmMvdXRpbC93b3JrZXJFbnRyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQ0FBO0FBQ0E7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQy83QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3pJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeGZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4UEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUN0SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNyT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDM0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbk5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN2dCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Y0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNVBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaFpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9WQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDMVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZnJlZWRvbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHMgPSBbe1wibmFtZVwiOlwiY29uc29sZVwiLFwiYXBpXCI6e1wibG9nXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwic3RyaW5nXCJdfSxcImRlYnVnXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwic3RyaW5nXCJdfSxcImluZm9cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJzdHJpbmdcIl19LFwid2FyblwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcInN0cmluZ1wiXX0sXCJlcnJvclwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcInN0cmluZ1wiXX19fSx7XCJuYW1lXCI6XCJjb3JlLmJhdHRlcnlcIixcImFwaVwiOntcImlzQ2hhcmdpbmdcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcImJvb2xlYW5cIn0sXCJnZXRDaGFyZ2luZ1RpbWVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcIm51bWJlclwifSxcImdldERpc2NoYXJnaW5nVGltZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwibnVtYmVyXCJ9LFwiZ2V0TGV2ZWxcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcIm51bWJlclwifSxcImNoYXJnaW5nY2hhbmdlXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wiY2hhcmdpbmdcIjpcImJvb2xlYW5cIn19LFwiY2hhcmdpbmd0aW1lY2hhbmdlXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wiY2hhcmdpbmdUaW1lXCI6XCJudW1iZXJcIn19LFwiZGlzY2hhcmdpbmd0aW1lY2hhbmdlXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wiZGlzY2hhcmdpbmdUaW1lXCI6XCJudW1iZXJcIn19LFwibGV2ZWxjaGFuZ2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJsZXZlbFwiOlwibnVtYmVyXCJ9fX19LHtcIm5hbWVcIjpcImNvcmUuY29uc29sZVwiLFwiYXBpXCI6e1wibG9nXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwic3RyaW5nXCJdfSxcImRlYnVnXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwic3RyaW5nXCJdfSxcImluZm9cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJzdHJpbmdcIl19LFwid2FyblwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcInN0cmluZ1wiXX0sXCJlcnJvclwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcInN0cmluZ1wiXX19fSx7XCJuYW1lXCI6XCJjb3JlLmNyeXB0b1wiLFwiYXBpXCI6e1wiZ2V0UmFuZG9tQnl0ZXNcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wibnVtYmVyXCJdLFwicmV0XCI6XCJidWZmZXJcIn19fSx7XCJuYW1lXCI6XCJjb3JlLmVjaG9cIixcImFwaVwiOntcInNldHVwXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXX0sXCJzZW5kXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXX0sXCJtZXNzYWdlXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6XCJzdHJpbmdcIn19fSx7XCJuYW1lXCI6XCJjb3JlXCIsXCJhcGlcIjp7XCJjcmVhdGVDaGFubmVsXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6e1wiY2hhbm5lbFwiOlwicHJveHlcIixcImlkZW50aWZpZXJcIjpcInN0cmluZ1wifX0sXCJiaW5kQ2hhbm5lbFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcInByb3h5XCJ9LFwiZ2V0SWRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpbXCJhcnJheVwiLFwic3RyaW5nXCJdfSxcImdldExvZ2dlclwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcInByb3h5XCJ9LFwicmVxdWlyZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcInN0cmluZ1wiXSxcInJldFwiOlwicHJveHlcIn19fSx7XCJuYW1lXCI6XCJjb3JlLm9hdXRoXCIsXCJhcGlcIjp7XCJpbml0aWF0ZU9BdXRoXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltbXCJhcnJheVwiLFwic3RyaW5nXCJdXSxcInJldFwiOntcInJlZGlyZWN0XCI6XCJzdHJpbmdcIixcInN0YXRlXCI6XCJzdHJpbmdcIn0sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJsYXVuY2hBdXRoRmxvd1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIix7XCJyZWRpcmVjdFwiOlwic3RyaW5nXCIsXCJzdGF0ZVwiOlwic3RyaW5nXCJ9LFwiYm9vbGVhblwiXSxcInJldFwiOlwic3RyaW5nXCIsXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX19fSx7XCJuYW1lXCI6XCJjb3JlLnBlZXJjb25uZWN0aW9uXCIsXCJhcGlcIjp7XCJzZXR1cFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcInN0cmluZ1wiLFtcImFycmF5XCIsXCJzdHJpbmdcIl0sXCJib29sZWFuXCJdfSxcInNlbmRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W3tcImNoYW5uZWxMYWJlbFwiOlwic3RyaW5nXCIsXCJ0ZXh0XCI6XCJzdHJpbmdcIixcImJpbmFyeVwiOlwiYmxvYlwiLFwiYnVmZmVyXCI6XCJidWZmZXJcIn1dfSxcIm9uUmVjZWl2ZWRcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJjaGFubmVsTGFiZWxcIjpcInN0cmluZ1wiLFwidGV4dFwiOlwic3RyaW5nXCIsXCJiaW5hcnlcIjpcImJsb2JcIixcImJ1ZmZlclwiOlwiYnVmZmVyXCJ9fSxcIm9wZW5EYXRhQ2hhbm5lbFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl19LFwiY2xvc2VEYXRhQ2hhbm5lbFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl19LFwib25PcGVuRGF0YUNoYW5uZWxcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJjaGFubmVsSWRcIjpcInN0cmluZ1wifX0sXCJvbkNsb3NlRGF0YUNoYW5uZWxcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJjaGFubmVsSWRcIjpcInN0cmluZ1wifX0sXCJnZXRCdWZmZXJlZEFtb3VudFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcIm51bWJlclwifSxcImdldEluZm9cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcInN0cmluZ1wifSxcImNyZWF0ZU9mZmVyXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOlt7XCJvZmZlclRvUmVjZWl2ZVZpZGVvXCI6XCJudW1iZXJcIixcIm9mZmVyVG9SZWNlaXZlQXVkaW9cIjpcIm51bWJlclwiLFwidm9pY2VBY3Rpdml0eURldGVjdGlvblwiOlwiYm9vbGVhblwiLFwiaWNlUmVzdGFydFwiOlwiYm9vbGVhblwifV0sXCJyZXRcIjp7XCJ0eXBlXCI6XCJzdHJpbmdcIixcInNkcFwiOlwic3RyaW5nXCJ9fSxcImNsb3NlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdfSxcIm9uQ2xvc2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7fX19fSx7XCJuYW1lXCI6XCJjb3JlLnJ0Y2RhdGFjaGFubmVsXCIsXCJhcGlcIjp7XCJjb25zdHJ1Y3RvclwiOntcInZhbHVlXCI6W1wic3RyaW5nXCJdfSxcImdldExhYmVsXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJzdHJpbmdcIn0sXCJnZXRPcmRlcmVkXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJib29sZWFuXCJ9LFwiZ2V0TWF4UGFja2V0TGlmZVRpbWVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcIm51bWJlclwifSxcImdldE1heFJldHJhbnNtaXRzXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJudW1iZXJcIn0sXCJnZXRQcm90b2NvbFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwic3RyaW5nXCJ9LFwiZ2V0TmVnb3RpYXRlZFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwiYm9vbGVhblwifSxcImdldElkXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJudW1iZXJcIn0sXCJnZXRSZWFkeVN0YXRlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJzdHJpbmdcIn0sXCJnZXRCdWZmZXJlZEFtb3VudFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwibnVtYmVyXCJ9LFwib25vcGVuXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6W119LFwib25lcnJvclwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOltdfSxcIm9uY2xvc2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjpbXX0sXCJjbG9zZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXX0sXCJvbm1lc3NhZ2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJ0ZXh0XCI6XCJzdHJpbmdcIixcImJ1ZmZlclwiOlwiYnVmZmVyXCJ9fSxcImdldEJpbmFyeVR5cGVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcInN0cmluZ1wifSxcInNldEJpbmFyeVR5cGVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCJdfSxcInNlbmRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCJdfSxcInNlbmRCdWZmZXJcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wiYnVmZmVyXCJdfX19LHtcIm5hbWVcIjpcImNvcmUucnRjcGVlcmNvbm5lY3Rpb25cIixcImFwaVwiOntcImNvbnN0cnVjdG9yXCI6e1widmFsdWVcIjpbe1wiaWNlU2VydmVyc1wiOltcImFycmF5XCIse1widXJsc1wiOltcImFycmF5XCIsXCJzdHJpbmdcIl0sXCJ1c2VybmFtZVwiOlwic3RyaW5nXCIsXCJjcmVkZW50aWFsXCI6XCJzdHJpbmdcIn1dLFwiaWNlVHJhbnNwb3J0c1wiOlwic3RyaW5nXCIsXCJwZWVySWRlbnRpdHlcIjpcInN0cmluZ1wifV19LFwiY3JlYXRlT2ZmZXJcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W3tcIm9mZmVyVG9SZWNlaXZlQXVkaW9cIjpcIm51bWJlclwiLFwib2ZmZXJUb1JlY2VpdmVWaWRlb1wiOlwibnVtYmVyXCIsXCJpY2VSZXN0YXJ0XCI6XCJib29sZWFuXCIsXCJ2b2ljZUFjdGl2aXR5RGV0ZWN0aW9uXCI6XCJib29sZWFuXCJ9XSxcInJldFwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwic2RwXCI6XCJzdHJpbmdcIn19LFwiY3JlYXRlQW5zd2VyXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJzZHBcIjpcInN0cmluZ1wifX0sXCJzZXRMb2NhbERlc2NyaXB0aW9uXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOlt7XCJ0eXBlXCI6XCJzdHJpbmdcIixcInNkcFwiOlwic3RyaW5nXCJ9XX0sXCJnZXRMb2NhbERlc2NyaXB0aW9uXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJzZHBcIjpcInN0cmluZ1wifX0sXCJzZXRSZW1vdGVEZXNjcmlwdGlvblwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbe1widHlwZVwiOlwic3RyaW5nXCIsXCJzZHBcIjpcInN0cmluZ1wifV0sXCJyZXRcIjp7fX0sXCJnZXRSZW1vdGVEZXNjcmlwdGlvblwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwic2RwXCI6XCJzdHJpbmdcIn19LFwiZ2V0U2lnbmFsaW5nU3RhdGVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcInN0cmluZ1wifSxcInVwZGF0ZUljZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbe1wiaWNlU2VydmVyc1wiOltcImFycmF5XCIse1widXJsc1wiOltcImFycmF5XCIsXCJzdHJpbmdcIl0sXCJ1c2VybmFtZVwiOlwic3RyaW5nXCIsXCJjcmVkZW50aWFsXCI6XCJzdHJpbmdcIn1dLFwiaWNlVHJhbnNwb3J0c1wiOlwic3RyaW5nXCIsXCJwZWVySWRlbnRpdHlcIjpcInN0cmluZ1wifV0sXCJyZXRcIjp7fX0sXCJhZGRJY2VDYW5kaWRhdGVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W3tcImNhbmRpZGF0ZVwiOlwic3RyaW5nXCIsXCJzZHBNaWRcIjpcInN0cmluZ1wiLFwic2RwTUxpbmVJbmRleFwiOlwibnVtYmVyXCJ9XSxcInJldFwiOnt9fSxcImdldEljZUdhdGhlcmluZ1N0YXRlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJzdHJpbmdcIn0sXCJnZXRJY2VDb25uZWN0aW9uU3RhdGVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcInN0cmluZ1wifSxcImdldENvbmZpZ3VyYXRpb25cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjp7XCJpY2VTZXJ2ZXJzXCI6W1wiYXJyYXlcIix7XCJ1cmxzXCI6W1wiYXJyYXlcIixcInN0cmluZ1wiXSxcInVzZXJuYW1lXCI6XCJzdHJpbmdcIixcImNyZWRlbnRpYWxcIjpcInN0cmluZ1wifV0sXCJpY2VUcmFuc3BvcnRzXCI6XCJzdHJpbmdcIixcInBlZXJJZGVudGl0eVwiOlwic3RyaW5nXCJ9fSxcImdldExvY2FsU3RyZWFtc1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOltcImFycmF5XCIsXCJzdHJpbmdcIl19LFwiZ2V0UmVtb3RlU3RyZWFtc1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOltcImFycmF5XCIsXCJzdHJpbmdcIl19LFwiZ2V0U3RyZWFtQnlJZFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcInN0cmluZ1wifSxcImFkZFN0cmVhbVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjp7fX0sXCJyZW1vdmVTdHJlYW1cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCJdLFwicmV0XCI6e319LFwiY2xvc2VcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjp7fX0sXCJjcmVhdGVEYXRhQ2hhbm5lbFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIix7XCJvcmRlcmVkXCI6XCJib29sZWFuXCIsXCJtYXhQYWNrZXRMaWZlVGltZVwiOlwibnVtYmVyXCIsXCJtYXhSZXRyYW5zbWl0c1wiOlwibnVtYmVyXCIsXCJwcm90b2NvbFwiOlwic3RyaW5nXCIsXCJuZWdvdGlhdGVkXCI6XCJib29sZWFuXCIsXCJpZFwiOlwibnVtYmVyXCJ9XSxcInJldFwiOlwic3RyaW5nXCJ9LFwib25kYXRhY2hhbm5lbFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImNoYW5uZWxcIjpcInN0cmluZ1wifX0sXCJnZXRTdGF0c1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcIm9iamVjdFwifSxcIm9ubmVnb3RpYXRpb25uZWVkZWRcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjpbXX0sXCJvbmljZWNhbmRpZGF0ZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImNhbmRpZGF0ZVwiOntcImNhbmRpZGF0ZVwiOlwic3RyaW5nXCIsXCJzZHBNaWRcIjpcInN0cmluZ1wiLFwic2RwTUxpbmVJbmRleFwiOlwibnVtYmVyXCJ9fX0sXCJvbnNpZ25hbGluZ3N0YXRlY2hhbmdlXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6W119LFwib25hZGRzdHJlYW1cIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJzdHJlYW1cIjpcIm51bWJlclwifX0sXCJvbnJlbW92ZXN0cmVhbVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcInN0cmVhbVwiOlwibnVtYmVyXCJ9fSxcIm9uaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6W119fX0se1wibmFtZVwiOlwiY29yZS5zdG9yYWdlXCIsXCJhcGlcIjp7XCJrZXlzXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6W1wiYXJyYXlcIixcInN0cmluZ1wiXX0sXCJnZXRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCJdLFwicmV0XCI6XCJzdHJpbmdcIn0sXCJzZXRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJzdHJpbmdcIl0sXCJyZXRcIjpcInN0cmluZ1wifSxcInJlbW92ZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcInN0cmluZ1wifSxcImNsZWFyXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdfX19LHtcIm5hbWVcIjpcImNvcmUudGNwc29ja2V0XCIsXCJhcGlcIjp7XCJjb25zdHJ1Y3RvclwiOntcInZhbHVlXCI6W1wibnVtYmVyXCJdfSxcImdldEluZm9cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjp7XCJjb25uZWN0ZWRcIjpcImJvb2xlYW5cIixcImxvY2FsQWRkcmVzc1wiOlwic3RyaW5nXCIsXCJsb2NhbFBvcnRcIjpcIm51bWJlclwiLFwicGVlckFkZHJlc3NcIjpcInN0cmluZ1wiLFwicGVlclBvcnRcIjpcIm51bWJlclwifX0sXCJFUlJDT0RFXCI6e1widHlwZVwiOlwiY29uc3RhbnRcIixcInZhbHVlXCI6e1wiU1VDQ0VTU1wiOlwiU3VjY2VzcyFcIixcIlVOS05PV05cIjpcIlVua25vd24gZXJyb3JcIixcIkFMUkVBRFlfQ09OTkVDVEVEXCI6XCJTb2NrZXQgYWxyZWFkeSBjb25uZWN0ZWRcIixcIklOVkFMSURfQVJHVU1FTlRcIjpcIkludmFsaWQgYXJndW1lbnRcIixcIlRJTUVEX09VVFwiOlwiVGltZWQgb3V0XCIsXCJOT1RfQ09OTkVDVEVEXCI6XCJTb2NrZXQgbm90IGNvbm5lY3RlZFwiLFwiTkVUV09SS19DSEFOR0VEXCI6XCJOZXR3b3JrIGNoYW5nZWRcIixcIkNPTk5FQ1RJT05fQ0xPU0VEXCI6XCJDb25uZWN0aW9uIGNsb3NlZCBncmFjZWZ1bGx5XCIsXCJDT05ORUNUSU9OX1JFU0VUXCI6XCJDb25uZWN0aW9uIHJlc2V0XCIsXCJDT05ORUNUSU9OX1JFRlVTRURcIjpcIkNvbm5lY3Rpb24gcmVmdXNlZFwiLFwiQ09OTkVDVElPTl9GQUlMRURcIjpcIkNvbm5lY3Rpb24gZmFpbGVkXCIsXCJOQU1FX05PVF9SRVNPTFZFRFwiOlwiRE5TIGxvb2t1cCBmYWlsZWRcIixcIklOVEVSTkVUX0RJU0NPTk5FQ1RFRFwiOlwiQ2Fubm90IHJlYWNoIGFueSBuZXR3b3JrXCIsXCJBRERSRVNTX0lOVkFMSURcIjpcIkludmFsaWQgYWRkcmVzc1wiLFwiQUREUkVTU19VTlJFQUNIQUJMRVwiOlwiTm8gcm91dGUgdG8gaG9zdFwiLFwiSE9TVF9VTlJFQUNIQUJMRVwiOlwiU09DS1MgcHJveHkgc2VydmVyIGNvdWxkIG5vdCByZWFjaCBob3N0XCJ9fSxcImNsb3NlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwib25EaXNjb25uZWN0XCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwiY29ubmVjdFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcIm51bWJlclwiXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcInNlY3VyZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcInBhdXNlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwicmVzdW1lXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwicHJlcGFyZVNlY3VyZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcIndyaXRlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcImJ1ZmZlclwiXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcIm9uRGF0YVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImRhdGFcIjpcImJ1ZmZlclwifX0sXCJsaXN0ZW5cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJudW1iZXJcIl0sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJvbkNvbm5lY3Rpb25cIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJzb2NrZXRcIjpcIm51bWJlclwiLFwiaG9zdFwiOlwic3RyaW5nXCIsXCJwb3J0XCI6XCJudW1iZXJcIn19fX0se1wibmFtZVwiOlwiY29yZS51ZHBzb2NrZXRcIixcImFwaVwiOntcIkVSUkNPREVcIjp7XCJ0eXBlXCI6XCJjb25zdGFudFwiLFwidmFsdWVcIjp7XCJTVUNDRVNTXCI6XCJTdWNjZXNzIVwiLFwiVU5LTk9XTlwiOlwiVW5rbm93biBlcnJvclwiLFwiQUxSRUFEWV9CT1VORFwiOlwiU29ja2V0IGFscmVhZHkgYm91bmRcIixcIkFMUkVBRFlfQ0xPU0VEXCI6XCJTb2NrZXQgYWxyZWFkeSBjbG9zZWRcIixcIklOVkFMSURfQVJHVU1FTlRcIjpcIkludmFsaWQgYXJndW1lbnRcIixcIk5FVFdPUktfQ0hBTkdFRFwiOlwiTmV0d29yayBjaGFuZ2VkXCIsXCJTRU5EX0ZBSUxFRFwiOlwiU2VuZCBmYWlsZWRcIn19LFwiYmluZFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcIm51bWJlclwiXSxcInJldFwiOltdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwiZ2V0SW5mb1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOntcImxvY2FsQWRkcmVzc1wiOlwic3RyaW5nXCIsXCJsb2NhbFBvcnRcIjpcIm51bWJlclwifX0sXCJzZW5kVG9cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wiYnVmZmVyXCIsXCJzdHJpbmdcIixcIm51bWJlclwiXSxcInJldFwiOlwibnVtYmVyXCIsXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJkZXN0cm95XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdfSxcIm9uRGF0YVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcInJlc3VsdENvZGVcIjpcIm51bWJlclwiLFwiYWRkcmVzc1wiOlwic3RyaW5nXCIsXCJwb3J0XCI6XCJudW1iZXJcIixcImRhdGFcIjpcImJ1ZmZlclwifX19fSx7XCJuYW1lXCI6XCJjb3JlLnZpZXdcIixcImFwaVwiOntcInNob3dcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCJdfSxcImlzU2VjdXJlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJib29sZWFuXCJ9LFwiY2xvc2VcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W119LFwicG9zdE1lc3NhZ2VcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wib2JqZWN0XCJdfSxcIm1lc3NhZ2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjpcIm9iamVjdFwifSxcIm9uQ2xvc2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjpbXX19fSx7XCJuYW1lXCI6XCJjb3JlLndlYnNvY2tldFwiLFwiYXBpXCI6e1wiY29uc3RydWN0b3JcIjp7XCJ2YWx1ZVwiOltcInN0cmluZ1wiLFtcImFycmF5XCIsXCJzdHJpbmdcIl1dfSxcInNlbmRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W3tcInRleHRcIjpcInN0cmluZ1wiLFwiYmluYXJ5XCI6XCJibG9iXCIsXCJidWZmZXJcIjpcImJ1ZmZlclwifV0sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJnZXRSZWFkeVN0YXRlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJudW1iZXJcIn0sXCJnZXRCdWZmZXJlZEFtb3VudFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcIm51bWJlclwifSxcImNsb3NlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcIm51bWJlclwiLFwic3RyaW5nXCJdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwib25NZXNzYWdlXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1widGV4dFwiOlwic3RyaW5nXCIsXCJiaW5hcnlcIjpcImJsb2JcIixcImJ1ZmZlclwiOlwiYnVmZmVyXCJ9fSxcIm9uT3BlblwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOltdfSxcIm9uRXJyb3JcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJvbkNsb3NlXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wiY29kZVwiOlwibnVtYmVyXCIsXCJyZWFzb25cIjpcInN0cmluZ1wiLFwid2FzQ2xlYW5cIjpcImJvb2xlYW5cIn19fX0se1wibmFtZVwiOlwiY29yZS54aHJcIixcImFwaVwiOntcIm9wZW5cIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJzdHJpbmdcIixcImJvb2xlYW5cIixcInN0cmluZ1wiLFwic3RyaW5nXCJdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwic2VuZFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbe1wic3RyaW5nXCI6XCJzdHJpbmdcIixcImJ1ZmZlclwiOlwiYnVmZmVyXCIsXCJibG9iXCI6XCJibG9iXCJ9XX0sXCJhYm9ydFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXX0sXCJnZXRSZXNwb25zZUhlYWRlclwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcInN0cmluZ1wifSxcImdldEFsbFJlc3BvbnNlSGVhZGVyc1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwic3RyaW5nXCJ9LFwic2V0UmVxdWVzdEhlYWRlclwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcInN0cmluZ1wiXX0sXCJvdmVycmlkZU1pbWVUeXBlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiXX0sXCJnZXRSZWFkeVN0YXRlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJudW1iZXJcIn0sXCJnZXRSZXNwb25zZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOntcInN0cmluZ1wiOlwic3RyaW5nXCIsXCJidWZmZXJcIjpcImJ1ZmZlclwiLFwib2JqZWN0XCI6XCJvYmplY3RcIn19LFwiZ2V0UmVzcG9uc2VUZXh0XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJzdHJpbmdcIn0sXCJnZXRSZXNwb25zZVVSTFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwic3RyaW5nXCJ9LFwiZ2V0UmVzcG9uc2VUeXBlXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJzdHJpbmdcIn0sXCJzZXRSZXNwb25zZVR5cGVcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCJdfSxcImdldFN0YXR1c1wiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwibnVtYmVyXCJ9LFwiZ2V0U3RhdHVzVGV4dFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwic3RyaW5nXCJ9LFwiZ2V0VGltZW91dFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXSxcInJldFwiOlwibnVtYmVyXCJ9LFwic2V0VGltZW91dFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJudW1iZXJcIl19LFwiZ2V0V2l0aENyZWRlbnRpYWxzXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6XCJib29sZWFuXCJ9LFwic2V0V2l0aENyZWRlbnRpYWxzXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcImJvb2xlYW5cIl19LFwib25sb2Fkc3RhcnRcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJsZW5ndGhDb21wdXRhYmxlXCI6XCJib29sZWFuXCIsXCJsb2FkZWRcIjpcIm51bWJlclwiLFwidG90YWxcIjpcIm51bWJlclwifX0sXCJvbnByb2dyZXNzXCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wibGVuZ3RoQ29tcHV0YWJsZVwiOlwiYm9vbGVhblwiLFwibG9hZGVkXCI6XCJudW1iZXJcIixcInRvdGFsXCI6XCJudW1iZXJcIn19LFwib25hYm9ydFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImxlbmd0aENvbXB1dGFibGVcIjpcImJvb2xlYW5cIixcImxvYWRlZFwiOlwibnVtYmVyXCIsXCJ0b3RhbFwiOlwibnVtYmVyXCJ9fSxcIm9uZXJyb3JcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJsZW5ndGhDb21wdXRhYmxlXCI6XCJib29sZWFuXCIsXCJsb2FkZWRcIjpcIm51bWJlclwiLFwidG90YWxcIjpcIm51bWJlclwifX0sXCJvbmxvYWRcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJsZW5ndGhDb21wdXRhYmxlXCI6XCJib29sZWFuXCIsXCJsb2FkZWRcIjpcIm51bWJlclwiLFwidG90YWxcIjpcIm51bWJlclwifX0sXCJvbnRpbWVvdXRcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJsZW5ndGhDb21wdXRhYmxlXCI6XCJib29sZWFuXCIsXCJsb2FkZWRcIjpcIm51bWJlclwiLFwidG90YWxcIjpcIm51bWJlclwifX0sXCJvbmxvYWRlbmRcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJsZW5ndGhDb21wdXRhYmxlXCI6XCJib29sZWFuXCIsXCJsb2FkZWRcIjpcIm51bWJlclwiLFwidG90YWxcIjpcIm51bWJlclwifX0sXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7fX0sXCJvbnVwbG9hZGxvYWRzdGFydFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImxlbmd0aENvbXB1dGFibGVcIjpcImJvb2xlYW5cIixcImxvYWRlZFwiOlwibnVtYmVyXCIsXCJ0b3RhbFwiOlwibnVtYmVyXCJ9fSxcIm9udXBsb2FkcHJvZ3Jlc3NcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJsZW5ndGhDb21wdXRhYmxlXCI6XCJib29sZWFuXCIsXCJsb2FkZWRcIjpcIm51bWJlclwiLFwidG90YWxcIjpcIm51bWJlclwifX0sXCJvbnVwbG9hZGFib3J0XCI6e1widHlwZVwiOlwiZXZlbnRcIixcInZhbHVlXCI6e1wibGVuZ3RoQ29tcHV0YWJsZVwiOlwiYm9vbGVhblwiLFwibG9hZGVkXCI6XCJudW1iZXJcIixcInRvdGFsXCI6XCJudW1iZXJcIn19LFwib251cGxvYWRlcnJvclwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImxlbmd0aENvbXB1dGFibGVcIjpcImJvb2xlYW5cIixcImxvYWRlZFwiOlwibnVtYmVyXCIsXCJ0b3RhbFwiOlwibnVtYmVyXCJ9fSxcIm9udXBsb2FkbG9hZFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImxlbmd0aENvbXB1dGFibGVcIjpcImJvb2xlYW5cIixcImxvYWRlZFwiOlwibnVtYmVyXCIsXCJ0b3RhbFwiOlwibnVtYmVyXCJ9fSxcIm9udXBsb2FkdGltZW91dFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImxlbmd0aENvbXB1dGFibGVcIjpcImJvb2xlYW5cIixcImxvYWRlZFwiOlwibnVtYmVyXCIsXCJ0b3RhbFwiOlwibnVtYmVyXCJ9fSxcIm9udXBsb2FkbG9hZGVuZFwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcImxlbmd0aENvbXB1dGFibGVcIjpcImJvb2xlYW5cIixcImxvYWRlZFwiOlwibnVtYmVyXCIsXCJ0b3RhbFwiOlwibnVtYmVyXCJ9fSxcIm9udXBsb2FkcmVhZHlzdGF0ZWNoYW5nZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOnt9fX19LHtcIm5hbWVcIjpcInNvY2lhbFwiLFwiYXBpXCI6e1wiRVJSQ09ERVwiOntcInR5cGVcIjpcImNvbnN0YW50XCIsXCJ2YWx1ZVwiOntcIlNVQ0NFU1NcIjpcIlN1Y2Nlc3MhXCIsXCJVTktOT1dOXCI6XCJVbmtub3duIGVycm9yXCIsXCJPRkZMSU5FXCI6XCJVc2VyIGlzIGN1cnJlbnRseSBvZmZsaW5lXCIsXCJNQUxGT1JNRURQQVJBTUVURVJTXCI6XCJQYXJhbWV0ZXJzIGFyZSBtYWxmb3JtZWRcIixcIkxPR0lOX0JBRENSRURFTlRJQUxTXCI6XCJFcnJvciBhdXRoZW50aWNhdGluZyB3aXRoIHNlcnZlclwiLFwiTE9HSU5fRkFJTEVEQ09OTkVDVElPTlwiOlwiRXJyb3IgY29ubmVjdGluZyB0byBzZXJ2ZXJcIixcIkxPR0lOX0FMUkVBRFlPTkxJTkVcIjpcIlVzZXIgaXMgYWxyZWFkeSBsb2dnZWQgaW5cIixcIkxPR0lOX09BVVRIRVJST1JcIjpcIk9BdXRoIEVycm9yXCIsXCJTRU5EX0lOVkFMSURERVNUSU5BVElPTlwiOlwiTWVzc2FnZSBzZW50IHRvIGFuIGludmFsaWQgZGVzdGluYXRpb25cIn19LFwiU1RBVFVTXCI6e1widHlwZVwiOlwiY29uc3RhbnRcIixcInZhbHVlXCI6e1wiT0ZGTElORVwiOlwiT0ZGTElORVwiLFwiT05MSU5FXCI6XCJPTkxJTkVcIixcIk9OTElORV9XSVRIX09USEVSX0FQUFwiOlwiT05MSU5FX1dJVEhfT1RIRVJfQVBQXCJ9fSxcImxvZ2luXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOlt7XCJhZ2VudFwiOlwic3RyaW5nXCIsXCJ2ZXJzaW9uXCI6XCJzdHJpbmdcIixcInVybFwiOlwic3RyaW5nXCIsXCJpbnRlcmFjdGl2ZVwiOlwiYm9vbGVhblwiLFwicmVtZW1iZXJMb2dpblwiOlwiYm9vbGVhblwifV0sXCJyZXRcIjp7XCJ1c2VySWRcIjpcInN0cmluZ1wiLFwiY2xpZW50SWRcIjpcInN0cmluZ1wiLFwic3RhdHVzXCI6XCJzdHJpbmdcIixcImxhc3RVcGRhdGVkXCI6XCJudW1iZXJcIixcImxhc3RTZWVuXCI6XCJudW1iZXJcIn0sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJjbGVhckNhY2hlZENyZWRlbnRpYWxzXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdfSxcImdldENsaWVudHNcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcIm9iamVjdFwiLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwiZ2V0VXNlcnNcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpcIm9iamVjdFwiLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwic2VuZE1lc3NhZ2VcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJzdHJpbmdcIl0sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJsb2dvdXRcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJlcnJcIjp7XCJlcnJjb2RlXCI6XCJzdHJpbmdcIixcIm1lc3NhZ2VcIjpcInN0cmluZ1wifX0sXCJvbk1lc3NhZ2VcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJmcm9tXCI6e1widXNlcklkXCI6XCJzdHJpbmdcIixcImNsaWVudElkXCI6XCJzdHJpbmdcIixcInN0YXR1c1wiOlwic3RyaW5nXCIsXCJsYXN0VXBkYXRlZFwiOlwibnVtYmVyXCIsXCJsYXN0U2VlblwiOlwibnVtYmVyXCJ9LFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcIm9uVXNlclByb2ZpbGVcIjp7XCJ0eXBlXCI6XCJldmVudFwiLFwidmFsdWVcIjp7XCJ1c2VySWRcIjpcInN0cmluZ1wiLFwibGFzdFVwZGF0ZWRcIjpcIm51bWJlclwiLFwibmFtZVwiOlwic3RyaW5nXCIsXCJ1cmxcIjpcInN0cmluZ1wiLFwiaW1hZ2VEYXRhXCI6XCJzdHJpbmdcIn19LFwib25DbGllbnRTdGF0ZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcInVzZXJJZFwiOlwic3RyaW5nXCIsXCJjbGllbnRJZFwiOlwic3RyaW5nXCIsXCJzdGF0dXNcIjpcInN0cmluZ1wiLFwibGFzdFVwZGF0ZWRcIjpcIm51bWJlclwiLFwibGFzdFNlZW5cIjpcIm51bWJlclwifX19fSx7XCJuYW1lXCI6XCJzdG9yYWdlXCIsXCJhcGlcIjp7XCJzY29wZVwiOntcInR5cGVcIjpcImNvbnN0YW50XCIsXCJ2YWx1ZVwiOntcIlNFU1NJT05cIjowLFwiREVWSUNFX0xPQ0FMXCI6MSxcIlVTRVJfTE9DQUxcIjoyLFwiU0hBUkVEXCI6M319LFwiRVJSQ09ERVwiOntcInR5cGVcIjpcImNvbnN0YW50XCIsXCJ2YWx1ZVwiOntcIlNVQ0NFU1NcIjpcIlN1Y2Nlc3MhXCIsXCJVTktOT1dOXCI6XCJVbmtub3duIGVycm9yXCIsXCJPRkZMSU5FXCI6XCJEYXRhYmFzZSBub3QgcmVhY2hhYmxlXCIsXCJNQUxGT1JNRURQQVJBTUVURVJTXCI6XCJQYXJhbWV0ZXJzIGFyZSBtYWxmb3JtZWRcIn19LFwiY29uc3RydWN0b3JcIjp7XCJ2YWx1ZVwiOlt7XCJzY29wZVwiOlwibnVtYmVyXCJ9XX0sXCJrZXlzXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6W1wiYXJyYXlcIixcInN0cmluZ1wiXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcImdldFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcInN0cmluZ1wiLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwic2V0XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwic3RyaW5nXCJdLFwicmV0XCI6XCJzdHJpbmdcIixcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcInJlbW92ZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcInN0cmluZ1wiLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwiY2xlYXJcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpbXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fX19LHtcIm5hbWVcIjpcInN0b3JlYnVmZmVyXCIsXCJhcGlcIjp7XCJzY29wZVwiOntcInR5cGVcIjpcImNvbnN0YW50XCIsXCJ2YWx1ZVwiOntcIlNFU1NJT05cIjowLFwiREVWSUNFX0xPQ0FMXCI6MSxcIlVTRVJfTE9DQUxcIjoyLFwiU0hBUkVEXCI6M319LFwiRVJSQ09ERVwiOntcInR5cGVcIjpcImNvbnN0YW50XCIsXCJ2YWx1ZVwiOntcIlNVQ0NFU1NcIjpcIlN1Y2Nlc3MhXCIsXCJVTktOT1dOXCI6XCJVbmtub3duIGVycm9yXCIsXCJPRkZMSU5FXCI6XCJEYXRhYmFzZSBub3QgcmVhY2hhYmxlXCIsXCJNQUxGT1JNRURQQVJBTUVURVJTXCI6XCJQYXJhbWV0ZXJzIGFyZSBtYWxmb3JtZWRcIn19LFwiY29uc3RydWN0b3JcIjp7XCJ2YWx1ZVwiOlt7XCJzY29wZVwiOlwibnVtYmVyXCJ9XX0sXCJrZXlzXCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltdLFwicmV0XCI6W1wiYXJyYXlcIixcInN0cmluZ1wiXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcImdldFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcImJ1ZmZlclwiLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwic2V0XCI6e1widHlwZVwiOlwibWV0aG9kXCIsXCJ2YWx1ZVwiOltcInN0cmluZ1wiLFwiYnVmZmVyXCJdLFwicmV0XCI6XCJidWZmZXJcIixcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcInJlbW92ZVwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIl0sXCJyZXRcIjpcImJ1ZmZlclwiLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwiY2xlYXJcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpbXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fX19LHtcIm5hbWVcIjpcInRyYW5zcG9ydFwiLFwiYXBpXCI6e1wiRVJSQ09ERVwiOntcInR5cGVcIjpcImNvbnN0YW50XCIsXCJ2YWx1ZVwiOntcIlNVQ0NFU1NcIjpcIlN1Y2Nlc3MhXCIsXCJVTktOT1dOXCI6XCJVbmtub3duIGVycm9yXCIsXCJPRkZMSU5FXCI6XCJOb3QgcmVhY2hhYmxlXCIsXCJNQUxGT1JNRURQQVJBTUVURVJTXCI6XCJQYXJhbWV0ZXJzIGFyZSBtYWxmb3JtZWRcIn19LFwic2V0dXBcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W1wic3RyaW5nXCIsXCJwcm94eVwiXSxcInJldFwiOltdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwic2VuZFwiOntcInR5cGVcIjpcIm1ldGhvZFwiLFwidmFsdWVcIjpbXCJzdHJpbmdcIixcImJ1ZmZlclwiXSxcInJldFwiOltdLFwiZXJyXCI6e1wiZXJyY29kZVwiOlwic3RyaW5nXCIsXCJtZXNzYWdlXCI6XCJzdHJpbmdcIn19LFwiY2xvc2VcIjp7XCJ0eXBlXCI6XCJtZXRob2RcIixcInZhbHVlXCI6W10sXCJyZXRcIjpbXSxcImVyclwiOntcImVycmNvZGVcIjpcInN0cmluZ1wiLFwibWVzc2FnZVwiOlwic3RyaW5nXCJ9fSxcIm9uRGF0YVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOntcInRhZ1wiOlwic3RyaW5nXCIsXCJkYXRhXCI6XCJidWZmZXJcIn19LFwib25DbG9zZVwiOntcInR5cGVcIjpcImV2ZW50XCIsXCJ2YWx1ZVwiOltdfX19XTtcbiIsIi8qIVxuICogQG92ZXJ2aWV3IGVzNi1wcm9taXNlIC0gYSB0aW55IGltcGxlbWVudGF0aW9uIG9mIFByb21pc2VzL0ErLlxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKGMpIDIwMTQgWWVodWRhIEthdHosIFRvbSBEYWxlLCBTdGVmYW4gUGVubmVyIGFuZCBjb250cmlidXRvcnMgKENvbnZlcnNpb24gdG8gRVM2IEFQSSBieSBKYWtlIEFyY2hpYmFsZClcbiAqIEBsaWNlbnNlICAgTGljZW5zZWQgdW5kZXIgTUlUIGxpY2Vuc2VcbiAqICAgICAgICAgICAgU2VlIGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9qYWtlYXJjaGliYWxkL2VzNi1wcm9taXNlL21hc3Rlci9MSUNFTlNFXG4gKiBAdmVyc2lvbiAgIDMuMi4xXG4gKi9cblxuKGZ1bmN0aW9uKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSR1dGlscyQkb2JqZWN0T3JGdW5jdGlvbih4KSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHggPT09ICdmdW5jdGlvbicgfHwgKHR5cGVvZiB4ID09PSAnb2JqZWN0JyAmJiB4ICE9PSBudWxsKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkdXRpbHMkJGlzRnVuY3Rpb24oeCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSR1dGlscyQkaXNNYXliZVRoZW5hYmxlKHgpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ29iamVjdCcgJiYgeCAhPT0gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJHV0aWxzJCRfaXNBcnJheTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkpIHtcbiAgICAgIGxpYiRlczYkcHJvbWlzZSR1dGlscyQkX2lzQXJyYXkgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHgpID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGliJGVzNiRwcm9taXNlJHV0aWxzJCRfaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG4gICAgfVxuXG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSR1dGlscyQkaXNBcnJheSA9IGxpYiRlczYkcHJvbWlzZSR1dGlscyQkX2lzQXJyYXk7XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRsZW4gPSAwO1xuICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkdmVydHhOZXh0O1xuICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkY3VzdG9tU2NoZWR1bGVyRm47XG5cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJGFzYXAkJGFzYXAgPSBmdW5jdGlvbiBhc2FwKGNhbGxiYWNrLCBhcmcpIHtcbiAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRxdWV1ZVtsaWIkZXM2JHByb21pc2UkYXNhcCQkbGVuXSA9IGNhbGxiYWNrO1xuICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHF1ZXVlW2xpYiRlczYkcHJvbWlzZSRhc2FwJCRsZW4gKyAxXSA9IGFyZztcbiAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRsZW4gKz0gMjtcbiAgICAgIGlmIChsaWIkZXM2JHByb21pc2UkYXNhcCQkbGVuID09PSAyKSB7XG4gICAgICAgIC8vIElmIGxlbiBpcyAyLCB0aGF0IG1lYW5zIHRoYXQgd2UgbmVlZCB0byBzY2hlZHVsZSBhbiBhc3luYyBmbHVzaC5cbiAgICAgICAgLy8gSWYgYWRkaXRpb25hbCBjYWxsYmFja3MgYXJlIHF1ZXVlZCBiZWZvcmUgdGhlIHF1ZXVlIGlzIGZsdXNoZWQsIHRoZXlcbiAgICAgICAgLy8gd2lsbCBiZSBwcm9jZXNzZWQgYnkgdGhpcyBmbHVzaCB0aGF0IHdlIGFyZSBzY2hlZHVsaW5nLlxuICAgICAgICBpZiAobGliJGVzNiRwcm9taXNlJGFzYXAkJGN1c3RvbVNjaGVkdWxlckZuKSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGN1c3RvbVNjaGVkdWxlckZuKGxpYiRlczYkcHJvbWlzZSRhc2FwJCRmbHVzaCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHNjaGVkdWxlRmx1c2goKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRzZXRTY2hlZHVsZXIoc2NoZWR1bGVGbikge1xuICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGN1c3RvbVNjaGVkdWxlckZuID0gc2NoZWR1bGVGbjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2V0QXNhcChhc2FwRm4pIHtcbiAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRhc2FwID0gYXNhcEZuO1xuICAgIH1cblxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkYnJvd3NlcldpbmRvdyA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgPyB3aW5kb3cgOiB1bmRlZmluZWQ7XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRicm93c2VyR2xvYmFsID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJGJyb3dzZXJXaW5kb3cgfHwge307XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRCcm93c2VyTXV0YXRpb25PYnNlcnZlciA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRicm93c2VyR2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgbGliJGVzNiRwcm9taXNlJGFzYXAkJGJyb3dzZXJHbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJGFzYXAkJGlzTm9kZSA9IHR5cGVvZiBzZWxmID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYge30udG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nO1xuXG4gICAgLy8gdGVzdCBmb3Igd2ViIHdvcmtlciBidXQgbm90IGluIElFMTBcbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJGFzYXAkJGlzV29ya2VyID0gdHlwZW9mIFVpbnQ4Q2xhbXBlZEFycmF5ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgdHlwZW9mIGltcG9ydFNjcmlwdHMgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICB0eXBlb2YgTWVzc2FnZUNoYW5uZWwgIT09ICd1bmRlZmluZWQnO1xuXG4gICAgLy8gbm9kZVxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VOZXh0VGljaygpIHtcbiAgICAgIC8vIG5vZGUgdmVyc2lvbiAwLjEwLnggZGlzcGxheXMgYSBkZXByZWNhdGlvbiB3YXJuaW5nIHdoZW4gbmV4dFRpY2sgaXMgdXNlZCByZWN1cnNpdmVseVxuICAgICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9jdWpvanMvd2hlbi9pc3N1ZXMvNDEwIGZvciBkZXRhaWxzXG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHByb2Nlc3MubmV4dFRpY2sobGliJGVzNiRwcm9taXNlJGFzYXAkJGZsdXNoKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gdmVydHhcbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkYXNhcCQkdXNlVmVydHhUaW1lcigpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHZlcnR4TmV4dChsaWIkZXM2JHByb21pc2UkYXNhcCQkZmx1c2gpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkYXNhcCQkdXNlTXV0YXRpb25PYnNlcnZlcigpIHtcbiAgICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICAgIHZhciBvYnNlcnZlciA9IG5ldyBsaWIkZXM2JHByb21pc2UkYXNhcCQkQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIobGliJGVzNiRwcm9taXNlJGFzYXAkJGZsdXNoKTtcbiAgICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShub2RlLCB7IGNoYXJhY3RlckRhdGE6IHRydWUgfSk7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgbm9kZS5kYXRhID0gKGl0ZXJhdGlvbnMgPSArK2l0ZXJhdGlvbnMgJSAyKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gd2ViIHdvcmtlclxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VNZXNzYWdlQ2hhbm5lbCgpIHtcbiAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRmbHVzaDtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoMCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VTZXRUaW1lb3V0KCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBzZXRUaW1lb3V0KGxpYiRlczYkcHJvbWlzZSRhc2FwJCRmbHVzaCwgMSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkcXVldWUgPSBuZXcgQXJyYXkoMTAwMCk7XG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJGFzYXAkJGZsdXNoKCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaWIkZXM2JHByb21pc2UkYXNhcCQkbGVuOyBpKz0yKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRxdWV1ZVtpXTtcbiAgICAgICAgdmFyIGFyZyA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRxdWV1ZVtpKzFdO1xuXG4gICAgICAgIGNhbGxiYWNrKGFyZyk7XG5cbiAgICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHF1ZXVlW2ldID0gdW5kZWZpbmVkO1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkcXVldWVbaSsxXSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGxlbiA9IDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJGFzYXAkJGF0dGVtcHRWZXJ0eCgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciByID0gcmVxdWlyZTtcbiAgICAgICAgdmFyIHZlcnR4ID0gcigndmVydHgnKTtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHZlcnR4TmV4dCA9IHZlcnR4LnJ1bk9uTG9vcCB8fCB2ZXJ0eC5ydW5PbkNvbnRleHQ7XG4gICAgICAgIHJldHVybiBsaWIkZXM2JHByb21pc2UkYXNhcCQkdXNlVmVydHhUaW1lcigpO1xuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBsaWIkZXM2JHByb21pc2UkYXNhcCQkdXNlU2V0VGltZW91dCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2NoZWR1bGVGbHVzaDtcbiAgICAvLyBEZWNpZGUgd2hhdCBhc3luYyBtZXRob2QgdG8gdXNlIHRvIHRyaWdnZXJpbmcgcHJvY2Vzc2luZyBvZiBxdWV1ZWQgY2FsbGJhY2tzOlxuICAgIGlmIChsaWIkZXM2JHByb21pc2UkYXNhcCQkaXNOb2RlKSB7XG4gICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2NoZWR1bGVGbHVzaCA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VOZXh0VGljaygpO1xuICAgIH0gZWxzZSBpZiAobGliJGVzNiRwcm9taXNlJGFzYXAkJEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2NoZWR1bGVGbHVzaCA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCR1c2VNdXRhdGlvbk9ic2VydmVyKCk7XG4gICAgfSBlbHNlIGlmIChsaWIkZXM2JHByb21pc2UkYXNhcCQkaXNXb3JrZXIpIHtcbiAgICAgIGxpYiRlczYkcHJvbWlzZSRhc2FwJCRzY2hlZHVsZUZsdXNoID0gbGliJGVzNiRwcm9taXNlJGFzYXAkJHVzZU1lc3NhZ2VDaGFubmVsKCk7XG4gICAgfSBlbHNlIGlmIChsaWIkZXM2JHByb21pc2UkYXNhcCQkYnJvd3NlcldpbmRvdyA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2NoZWR1bGVGbHVzaCA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRhdHRlbXB0VmVydHgoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJHNjaGVkdWxlRmx1c2ggPSBsaWIkZXM2JHByb21pc2UkYXNhcCQkdXNlU2V0VGltZW91dCgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkdGhlbiQkdGhlbihvbkZ1bGZpbGxtZW50LCBvblJlamVjdGlvbikge1xuICAgICAgdmFyIHBhcmVudCA9IHRoaXM7XG5cbiAgICAgIHZhciBjaGlsZCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJG5vb3ApO1xuXG4gICAgICBpZiAoY2hpbGRbbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUFJPTUlTRV9JRF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRtYWtlUHJvbWlzZShjaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzdGF0ZSA9IHBhcmVudC5fc3RhdGU7XG5cbiAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHNbc3RhdGUgLSAxXTtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGFzYXAoZnVuY3Rpb24oKXtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRpbnZva2VDYWxsYmFjayhzdGF0ZSwgY2hpbGQsIGNhbGxiYWNrLCBwYXJlbnQuX3Jlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkc3Vic2NyaWJlKHBhcmVudCwgY2hpbGQsIG9uRnVsZmlsbG1lbnQsIG9uUmVqZWN0aW9uKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJHRoZW4kJGRlZmF1bHQgPSBsaWIkZXM2JHByb21pc2UkdGhlbiQkdGhlbjtcbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyZXNvbHZlJCRyZXNvbHZlKG9iamVjdCkge1xuICAgICAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgICAgIHZhciBDb25zdHJ1Y3RvciA9IHRoaXM7XG5cbiAgICAgIGlmIChvYmplY3QgJiYgdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0LmNvbnN0cnVjdG9yID09PSBDb25zdHJ1Y3Rvcikge1xuICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJvbWlzZSA9IG5ldyBDb25zdHJ1Y3RvcihsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRub29wKTtcbiAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlc29sdmUocHJvbWlzZSwgb2JqZWN0KTtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmVzb2x2ZSQkZGVmYXVsdCA9IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJlc29sdmUkJHJlc29sdmU7XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFBST01JU0VfSUQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMTYpO1xuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkbm9vcCgpIHt9XG5cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUEVORElORyAgID0gdm9pZCAwO1xuICAgIHZhciBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRGVUxGSUxMRUQgPSAxO1xuICAgIHZhciBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRSRUpFQ1RFRCAgPSAyO1xuXG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEdFVF9USEVOX0VSUk9SID0gbmV3IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEVycm9yT2JqZWN0KCk7XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRzZWxmRnVsZmlsbG1lbnQoKSB7XG4gICAgICByZXR1cm4gbmV3IFR5cGVFcnJvcihcIllvdSBjYW5ub3QgcmVzb2x2ZSBhIHByb21pc2Ugd2l0aCBpdHNlbGZcIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkY2Fubm90UmV0dXJuT3duKCkge1xuICAgICAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoJ0EgcHJvbWlzZXMgY2FsbGJhY2sgY2Fubm90IHJldHVybiB0aGF0IHNhbWUgcHJvbWlzZS4nKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRnZXRUaGVuKHByb21pc2UpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlLnRoZW47XG4gICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJEdFVF9USEVOX0VSUk9SLmVycm9yID0gZXJyb3I7XG4gICAgICAgIHJldHVybiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRHRVRfVEhFTl9FUlJPUjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCR0cnlUaGVuKHRoZW4sIHZhbHVlLCBmdWxmaWxsbWVudEhhbmRsZXIsIHJlamVjdGlvbkhhbmRsZXIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgZnVsZmlsbG1lbnRIYW5kbGVyLCByZWplY3Rpb25IYW5kbGVyKTtcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRoYW5kbGVGb3JlaWduVGhlbmFibGUocHJvbWlzZSwgdGhlbmFibGUsIHRoZW4pIHtcbiAgICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkYXNhcChmdW5jdGlvbihwcm9taXNlKSB7XG4gICAgICAgIHZhciBzZWFsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIGVycm9yID0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkdHJ5VGhlbih0aGVuLCB0aGVuYWJsZSwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICBpZiAoc2VhbGVkKSB7IHJldHVybjsgfVxuICAgICAgICAgIHNlYWxlZCA9IHRydWU7XG4gICAgICAgICAgaWYgKHRoZW5hYmxlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgICAgaWYgKHNlYWxlZCkgeyByZXR1cm47IH1cbiAgICAgICAgICBzZWFsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgICAgIH0sICdTZXR0bGU6ICcgKyAocHJvbWlzZS5fbGFiZWwgfHwgJyB1bmtub3duIHByb21pc2UnKSk7XG5cbiAgICAgICAgaWYgKCFzZWFsZWQgJiYgZXJyb3IpIHtcbiAgICAgICAgICBzZWFsZWQgPSB0cnVlO1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0sIHByb21pc2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGhhbmRsZU93blRoZW5hYmxlKHByb21pc2UsIHRoZW5hYmxlKSB7XG4gICAgICBpZiAodGhlbmFibGUuX3N0YXRlID09PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRGVUxGSUxMRUQpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCB0aGVuYWJsZS5fcmVzdWx0KTtcbiAgICAgIH0gZWxzZSBpZiAodGhlbmFibGUuX3N0YXRlID09PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRSRUpFQ1RFRCkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgdGhlbmFibGUuX3Jlc3VsdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRzdWJzY3JpYmUodGhlbmFibGUsIHVuZGVmaW5lZCwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGhhbmRsZU1heWJlVGhlbmFibGUocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSwgdGhlbikge1xuICAgICAgaWYgKG1heWJlVGhlbmFibGUuY29uc3RydWN0b3IgPT09IHByb21pc2UuY29uc3RydWN0b3IgJiZcbiAgICAgICAgICB0aGVuID09PSBsaWIkZXM2JHByb21pc2UkdGhlbiQkZGVmYXVsdCAmJlxuICAgICAgICAgIGNvbnN0cnVjdG9yLnJlc29sdmUgPT09IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJlc29sdmUkJGRlZmF1bHQpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaGFuZGxlT3duVGhlbmFibGUocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhlbiA9PT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkR0VUX1RIRU5fRVJST1IpIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkR0VUX1RIRU5fRVJST1IuZXJyb3IpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoZW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSk7XG4gICAgICAgIH0gZWxzZSBpZiAobGliJGVzNiRwcm9taXNlJHV0aWxzJCRpc0Z1bmN0aW9uKHRoZW4pKSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaGFuZGxlRm9yZWlnblRoZW5hYmxlKHByb21pc2UsIG1heWJlVGhlbmFibGUsIHRoZW4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGZ1bGZpbGwocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIHZhbHVlKSB7XG4gICAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHNlbGZGdWxmaWxsbWVudCgpKTtcbiAgICAgIH0gZWxzZSBpZiAobGliJGVzNiRwcm9taXNlJHV0aWxzJCRvYmplY3RPckZ1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRoYW5kbGVNYXliZVRoZW5hYmxlKHByb21pc2UsIHZhbHVlLCBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRnZXRUaGVuKHZhbHVlKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRwdWJsaXNoUmVqZWN0aW9uKHByb21pc2UpIHtcbiAgICAgIGlmIChwcm9taXNlLl9vbmVycm9yKSB7XG4gICAgICAgIHByb21pc2UuX29uZXJyb3IocHJvbWlzZS5fcmVzdWx0KTtcbiAgICAgIH1cblxuICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcHVibGlzaChwcm9taXNlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIHZhbHVlKSB7XG4gICAgICBpZiAocHJvbWlzZS5fc3RhdGUgIT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFBFTkRJTkcpIHsgcmV0dXJuOyB9XG5cbiAgICAgIHByb21pc2UuX3Jlc3VsdCA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fc3RhdGUgPSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRGVUxGSUxMRUQ7XG5cbiAgICAgIGlmIChwcm9taXNlLl9zdWJzY3JpYmVycy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGFzYXAobGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcHVibGlzaCwgcHJvbWlzZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHJlYXNvbikge1xuICAgICAgaWYgKHByb21pc2UuX3N0YXRlICE9PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRQRU5ESU5HKSB7IHJldHVybjsgfVxuICAgICAgcHJvbWlzZS5fc3RhdGUgPSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRSRUpFQ1RFRDtcbiAgICAgIHByb21pc2UuX3Jlc3VsdCA9IHJlYXNvbjtcblxuICAgICAgbGliJGVzNiRwcm9taXNlJGFzYXAkJGFzYXAobGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcHVibGlzaFJlamVjdGlvbiwgcHJvbWlzZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkc3Vic2NyaWJlKHBhcmVudCwgY2hpbGQsIG9uRnVsZmlsbG1lbnQsIG9uUmVqZWN0aW9uKSB7XG4gICAgICB2YXIgc3Vic2NyaWJlcnMgPSBwYXJlbnQuX3N1YnNjcmliZXJzO1xuICAgICAgdmFyIGxlbmd0aCA9IHN1YnNjcmliZXJzLmxlbmd0aDtcblxuICAgICAgcGFyZW50Ll9vbmVycm9yID0gbnVsbDtcblxuICAgICAgc3Vic2NyaWJlcnNbbGVuZ3RoXSA9IGNoaWxkO1xuICAgICAgc3Vic2NyaWJlcnNbbGVuZ3RoICsgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkRlVMRklMTEVEXSA9IG9uRnVsZmlsbG1lbnQ7XG4gICAgICBzdWJzY3JpYmVyc1tsZW5ndGggKyBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRSRUpFQ1RFRF0gID0gb25SZWplY3Rpb247XG5cbiAgICAgIGlmIChsZW5ndGggPT09IDAgJiYgcGFyZW50Ll9zdGF0ZSkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkYXNhcCQkYXNhcChsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRwdWJsaXNoLCBwYXJlbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHB1Ymxpc2gocHJvbWlzZSkge1xuICAgICAgdmFyIHN1YnNjcmliZXJzID0gcHJvbWlzZS5fc3Vic2NyaWJlcnM7XG4gICAgICB2YXIgc2V0dGxlZCA9IHByb21pc2UuX3N0YXRlO1xuXG4gICAgICBpZiAoc3Vic2NyaWJlcnMubGVuZ3RoID09PSAwKSB7IHJldHVybjsgfVxuXG4gICAgICB2YXIgY2hpbGQsIGNhbGxiYWNrLCBkZXRhaWwgPSBwcm9taXNlLl9yZXN1bHQ7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3Vic2NyaWJlcnMubGVuZ3RoOyBpICs9IDMpIHtcbiAgICAgICAgY2hpbGQgPSBzdWJzY3JpYmVyc1tpXTtcbiAgICAgICAgY2FsbGJhY2sgPSBzdWJzY3JpYmVyc1tpICsgc2V0dGxlZF07XG5cbiAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaW52b2tlQ2FsbGJhY2soc2V0dGxlZCwgY2hpbGQsIGNhbGxiYWNrLCBkZXRhaWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhbGxiYWNrKGRldGFpbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHJvbWlzZS5fc3Vic2NyaWJlcnMubGVuZ3RoID0gMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRFcnJvck9iamVjdCgpIHtcbiAgICAgIHRoaXMuZXJyb3IgPSBudWxsO1xuICAgIH1cblxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRUUllfQ0FUQ0hfRVJST1IgPSBuZXcgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkRXJyb3JPYmplY3QoKTtcblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHRyeUNhdGNoKGNhbGxiYWNrLCBkZXRhaWwpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhkZXRhaWwpO1xuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFRSWV9DQVRDSF9FUlJPUi5lcnJvciA9IGU7XG4gICAgICAgIHJldHVybiBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRUUllfQ0FUQ0hfRVJST1I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaW52b2tlQ2FsbGJhY2soc2V0dGxlZCwgcHJvbWlzZSwgY2FsbGJhY2ssIGRldGFpbCkge1xuICAgICAgdmFyIGhhc0NhbGxiYWNrID0gbGliJGVzNiRwcm9taXNlJHV0aWxzJCRpc0Z1bmN0aW9uKGNhbGxiYWNrKSxcbiAgICAgICAgICB2YWx1ZSwgZXJyb3IsIHN1Y2NlZWRlZCwgZmFpbGVkO1xuXG4gICAgICBpZiAoaGFzQ2FsbGJhY2spIHtcbiAgICAgICAgdmFsdWUgPSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCR0cnlDYXRjaChjYWxsYmFjaywgZGV0YWlsKTtcblxuICAgICAgICBpZiAodmFsdWUgPT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFRSWV9DQVRDSF9FUlJPUikge1xuICAgICAgICAgIGZhaWxlZCA9IHRydWU7XG4gICAgICAgICAgZXJyb3IgPSB2YWx1ZS5lcnJvcjtcbiAgICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3VjY2VlZGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkge1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRjYW5ub3RSZXR1cm5Pd24oKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gZGV0YWlsO1xuICAgICAgICBzdWNjZWVkZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvbWlzZS5fc3RhdGUgIT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFBFTkRJTkcpIHtcbiAgICAgICAgLy8gbm9vcFxuICAgICAgfSBlbHNlIGlmIChoYXNDYWxsYmFjayAmJiBzdWNjZWVkZWQpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGZhaWxlZCkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgZXJyb3IpO1xuICAgICAgfSBlbHNlIGlmIChzZXR0bGVkID09PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRGVUxGSUxMRUQpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZnVsZmlsbChwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKHNldHRsZWQgPT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFJFSkVDVEVEKSB7XG4gICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkaW5pdGlhbGl6ZVByb21pc2UocHJvbWlzZSwgcmVzb2x2ZXIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlc29sdmVyKGZ1bmN0aW9uIHJlc29sdmVQcm9taXNlKHZhbHVlKXtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gcmVqZWN0UHJvbWlzZShyZWFzb24pIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRpZCA9IDA7XG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkbmV4dElkKCkge1xuICAgICAgcmV0dXJuIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGlkKys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkbWFrZVByb21pc2UocHJvbWlzZSkge1xuICAgICAgcHJvbWlzZVtsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRQUk9NSVNFX0lEXSA9IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGlkKys7XG4gICAgICBwcm9taXNlLl9zdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHByb21pc2UuX3Jlc3VsdCA9IHVuZGVmaW5lZDtcbiAgICAgIHByb21pc2UuX3N1YnNjcmliZXJzID0gW107XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJHByb21pc2UkYWxsJCRhbGwoZW50cmllcykge1xuICAgICAgcmV0dXJuIG5ldyBsaWIkZXM2JHByb21pc2UkZW51bWVyYXRvciQkZGVmYXVsdCh0aGlzLCBlbnRyaWVzKS5wcm9taXNlO1xuICAgIH1cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJHByb21pc2UkYWxsJCRkZWZhdWx0ID0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkYWxsJCRhbGw7XG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmFjZSQkcmFjZShlbnRyaWVzKSB7XG4gICAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgICAgdmFyIENvbnN0cnVjdG9yID0gdGhpcztcblxuICAgICAgaWYgKCFsaWIkZXM2JHByb21pc2UkdXRpbHMkJGlzQXJyYXkoZW50cmllcykpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDb25zdHJ1Y3RvcihmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcignWW91IG11c3QgcGFzcyBhbiBhcnJheSB0byByYWNlLicpKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IENvbnN0cnVjdG9yKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIHZhciBsZW5ndGggPSBlbnRyaWVzLmxlbmd0aDtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBDb25zdHJ1Y3Rvci5yZXNvbHZlKGVudHJpZXNbaV0pLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmFjZSQkZGVmYXVsdCA9IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJhY2UkJHJhY2U7XG4gICAgZnVuY3Rpb24gbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmVqZWN0JCRyZWplY3QocmVhc29uKSB7XG4gICAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgICAgdmFyIENvbnN0cnVjdG9yID0gdGhpcztcbiAgICAgIHZhciBwcm9taXNlID0gbmV3IENvbnN0cnVjdG9yKGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJG5vb3ApO1xuICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJlamVjdCQkZGVmYXVsdCA9IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJHJlamVjdCQkcmVqZWN0O1xuXG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkbmVlZHNSZXNvbHZlcigpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1lvdSBtdXN0IHBhc3MgYSByZXNvbHZlciBmdW5jdGlvbiBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlIHByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkbmVlZHNOZXcoKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGNvbnN0cnVjdCAnUHJvbWlzZSc6IFBsZWFzZSB1c2UgdGhlICduZXcnIG9wZXJhdG9yLCB0aGlzIG9iamVjdCBjb25zdHJ1Y3RvciBjYW5ub3QgYmUgY2FsbGVkIGFzIGEgZnVuY3Rpb24uXCIpO1xuICAgIH1cblxuICAgIHZhciBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkZGVmYXVsdCA9IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlO1xuICAgIC8qKlxuICAgICAgUHJvbWlzZSBvYmplY3RzIHJlcHJlc2VudCB0aGUgZXZlbnR1YWwgcmVzdWx0IG9mIGFuIGFzeW5jaHJvbm91cyBvcGVyYXRpb24uIFRoZVxuICAgICAgcHJpbWFyeSB3YXkgb2YgaW50ZXJhY3Rpbmcgd2l0aCBhIHByb21pc2UgaXMgdGhyb3VnaCBpdHMgYHRoZW5gIG1ldGhvZCwgd2hpY2hcbiAgICAgIHJlZ2lzdGVycyBjYWxsYmFja3MgdG8gcmVjZWl2ZSBlaXRoZXIgYSBwcm9taXNlJ3MgZXZlbnR1YWwgdmFsdWUgb3IgdGhlIHJlYXNvblxuICAgICAgd2h5IHRoZSBwcm9taXNlIGNhbm5vdCBiZSBmdWxmaWxsZWQuXG5cbiAgICAgIFRlcm1pbm9sb2d5XG4gICAgICAtLS0tLS0tLS0tLVxuXG4gICAgICAtIGBwcm9taXNlYCBpcyBhbiBvYmplY3Qgb3IgZnVuY3Rpb24gd2l0aCBhIGB0aGVuYCBtZXRob2Qgd2hvc2UgYmVoYXZpb3IgY29uZm9ybXMgdG8gdGhpcyBzcGVjaWZpY2F0aW9uLlxuICAgICAgLSBgdGhlbmFibGVgIGlzIGFuIG9iamVjdCBvciBmdW5jdGlvbiB0aGF0IGRlZmluZXMgYSBgdGhlbmAgbWV0aG9kLlxuICAgICAgLSBgdmFsdWVgIGlzIGFueSBsZWdhbCBKYXZhU2NyaXB0IHZhbHVlIChpbmNsdWRpbmcgdW5kZWZpbmVkLCBhIHRoZW5hYmxlLCBvciBhIHByb21pc2UpLlxuICAgICAgLSBgZXhjZXB0aW9uYCBpcyBhIHZhbHVlIHRoYXQgaXMgdGhyb3duIHVzaW5nIHRoZSB0aHJvdyBzdGF0ZW1lbnQuXG4gICAgICAtIGByZWFzb25gIGlzIGEgdmFsdWUgdGhhdCBpbmRpY2F0ZXMgd2h5IGEgcHJvbWlzZSB3YXMgcmVqZWN0ZWQuXG4gICAgICAtIGBzZXR0bGVkYCB0aGUgZmluYWwgcmVzdGluZyBzdGF0ZSBvZiBhIHByb21pc2UsIGZ1bGZpbGxlZCBvciByZWplY3RlZC5cblxuICAgICAgQSBwcm9taXNlIGNhbiBiZSBpbiBvbmUgb2YgdGhyZWUgc3RhdGVzOiBwZW5kaW5nLCBmdWxmaWxsZWQsIG9yIHJlamVjdGVkLlxuXG4gICAgICBQcm9taXNlcyB0aGF0IGFyZSBmdWxmaWxsZWQgaGF2ZSBhIGZ1bGZpbGxtZW50IHZhbHVlIGFuZCBhcmUgaW4gdGhlIGZ1bGZpbGxlZFxuICAgICAgc3RhdGUuICBQcm9taXNlcyB0aGF0IGFyZSByZWplY3RlZCBoYXZlIGEgcmVqZWN0aW9uIHJlYXNvbiBhbmQgYXJlIGluIHRoZVxuICAgICAgcmVqZWN0ZWQgc3RhdGUuICBBIGZ1bGZpbGxtZW50IHZhbHVlIGlzIG5ldmVyIGEgdGhlbmFibGUuXG5cbiAgICAgIFByb21pc2VzIGNhbiBhbHNvIGJlIHNhaWQgdG8gKnJlc29sdmUqIGEgdmFsdWUuICBJZiB0aGlzIHZhbHVlIGlzIGFsc28gYVxuICAgICAgcHJvbWlzZSwgdGhlbiB0aGUgb3JpZ2luYWwgcHJvbWlzZSdzIHNldHRsZWQgc3RhdGUgd2lsbCBtYXRjaCB0aGUgdmFsdWUnc1xuICAgICAgc2V0dGxlZCBzdGF0ZS4gIFNvIGEgcHJvbWlzZSB0aGF0ICpyZXNvbHZlcyogYSBwcm9taXNlIHRoYXQgcmVqZWN0cyB3aWxsXG4gICAgICBpdHNlbGYgcmVqZWN0LCBhbmQgYSBwcm9taXNlIHRoYXQgKnJlc29sdmVzKiBhIHByb21pc2UgdGhhdCBmdWxmaWxscyB3aWxsXG4gICAgICBpdHNlbGYgZnVsZmlsbC5cblxuXG4gICAgICBCYXNpYyBVc2FnZTpcbiAgICAgIC0tLS0tLS0tLS0tLVxuXG4gICAgICBgYGBqc1xuICAgICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgLy8gb24gc3VjY2Vzc1xuICAgICAgICByZXNvbHZlKHZhbHVlKTtcblxuICAgICAgICAvLyBvbiBmYWlsdXJlXG4gICAgICAgIHJlamVjdChyZWFzb24pO1xuICAgICAgfSk7XG5cbiAgICAgIHByb21pc2UudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAvLyBvbiBmdWxmaWxsbWVudFxuICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgIC8vIG9uIHJlamVjdGlvblxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgQWR2YW5jZWQgVXNhZ2U6XG4gICAgICAtLS0tLS0tLS0tLS0tLS1cblxuICAgICAgUHJvbWlzZXMgc2hpbmUgd2hlbiBhYnN0cmFjdGluZyBhd2F5IGFzeW5jaHJvbm91cyBpbnRlcmFjdGlvbnMgc3VjaCBhc1xuICAgICAgYFhNTEh0dHBSZXF1ZXN0YHMuXG5cbiAgICAgIGBgYGpzXG4gICAgICBmdW5jdGlvbiBnZXRKU09OKHVybCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgICAgICB4aHIub3BlbignR0VUJywgdXJsKTtcbiAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gaGFuZGxlcjtcbiAgICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgICAgIHhoci5zZW5kKCk7XG5cbiAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVyKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gdGhpcy5ET05FKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdnZXRKU09OOiBgJyArIHVybCArICdgIGZhaWxlZCB3aXRoIHN0YXR1czogWycgKyB0aGlzLnN0YXR1cyArICddJykpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGdldEpTT04oJy9wb3N0cy5qc29uJykudGhlbihmdW5jdGlvbihqc29uKSB7XG4gICAgICAgIC8vIG9uIGZ1bGZpbGxtZW50XG4gICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgLy8gb24gcmVqZWN0aW9uXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBVbmxpa2UgY2FsbGJhY2tzLCBwcm9taXNlcyBhcmUgZ3JlYXQgY29tcG9zYWJsZSBwcmltaXRpdmVzLlxuXG4gICAgICBgYGBqc1xuICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICBnZXRKU09OKCcvcG9zdHMnKSxcbiAgICAgICAgZ2V0SlNPTignL2NvbW1lbnRzJylcbiAgICAgIF0pLnRoZW4oZnVuY3Rpb24odmFsdWVzKXtcbiAgICAgICAgdmFsdWVzWzBdIC8vID0+IHBvc3RzSlNPTlxuICAgICAgICB2YWx1ZXNbMV0gLy8gPT4gY29tbWVudHNKU09OXG5cbiAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIEBjbGFzcyBQcm9taXNlXG4gICAgICBAcGFyYW0ge2Z1bmN0aW9ufSByZXNvbHZlclxuICAgICAgVXNlZnVsIGZvciB0b29saW5nLlxuICAgICAgQGNvbnN0cnVjdG9yXG4gICAgKi9cbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZShyZXNvbHZlcikge1xuICAgICAgdGhpc1tsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRQUk9NSVNFX0lEXSA9IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJG5leHRJZCgpO1xuICAgICAgdGhpcy5fcmVzdWx0ID0gdGhpcy5fc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zdWJzY3JpYmVycyA9IFtdO1xuXG4gICAgICBpZiAobGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkbm9vcCAhPT0gcmVzb2x2ZXIpIHtcbiAgICAgICAgdHlwZW9mIHJlc29sdmVyICE9PSAnZnVuY3Rpb24nICYmIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRuZWVkc1Jlc29sdmVyKCk7XG4gICAgICAgIHRoaXMgaW5zdGFuY2VvZiBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZSA/IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJGluaXRpYWxpemVQcm9taXNlKHRoaXMsIHJlc29sdmVyKSA6IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRuZWVkc05ldygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlLmFsbCA9IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJGFsbCQkZGVmYXVsdDtcbiAgICBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZS5yYWNlID0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmFjZSQkZGVmYXVsdDtcbiAgICBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZS5yZXNvbHZlID0gbGliJGVzNiRwcm9taXNlJHByb21pc2UkcmVzb2x2ZSQkZGVmYXVsdDtcbiAgICBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZS5yZWplY3QgPSBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyZWplY3QkJGRlZmF1bHQ7XG4gICAgbGliJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UuX3NldFNjaGVkdWxlciA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRzZXRTY2hlZHVsZXI7XG4gICAgbGliJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UuX3NldEFzYXAgPSBsaWIkZXM2JHByb21pc2UkYXNhcCQkc2V0QXNhcDtcbiAgICBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkUHJvbWlzZS5fYXNhcCA9IGxpYiRlczYkcHJvbWlzZSRhc2FwJCRhc2FwO1xuXG4gICAgbGliJGVzNiRwcm9taXNlJHByb21pc2UkJFByb21pc2UucHJvdG90eXBlID0ge1xuICAgICAgY29uc3RydWN0b3I6IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRQcm9taXNlLFxuXG4gICAgLyoqXG4gICAgICBUaGUgcHJpbWFyeSB3YXkgb2YgaW50ZXJhY3Rpbmcgd2l0aCBhIHByb21pc2UgaXMgdGhyb3VnaCBpdHMgYHRoZW5gIG1ldGhvZCxcbiAgICAgIHdoaWNoIHJlZ2lzdGVycyBjYWxsYmFja3MgdG8gcmVjZWl2ZSBlaXRoZXIgYSBwcm9taXNlJ3MgZXZlbnR1YWwgdmFsdWUgb3IgdGhlXG4gICAgICByZWFzb24gd2h5IHRoZSBwcm9taXNlIGNhbm5vdCBiZSBmdWxmaWxsZWQuXG5cbiAgICAgIGBgYGpzXG4gICAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24odXNlcil7XG4gICAgICAgIC8vIHVzZXIgaXMgYXZhaWxhYmxlXG4gICAgICB9LCBmdW5jdGlvbihyZWFzb24pe1xuICAgICAgICAvLyB1c2VyIGlzIHVuYXZhaWxhYmxlLCBhbmQgeW91IGFyZSBnaXZlbiB0aGUgcmVhc29uIHdoeVxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgQ2hhaW5pbmdcbiAgICAgIC0tLS0tLS0tXG5cbiAgICAgIFRoZSByZXR1cm4gdmFsdWUgb2YgYHRoZW5gIGlzIGl0c2VsZiBhIHByb21pc2UuICBUaGlzIHNlY29uZCwgJ2Rvd25zdHJlYW0nXG4gICAgICBwcm9taXNlIGlzIHJlc29sdmVkIHdpdGggdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZmlyc3QgcHJvbWlzZSdzIGZ1bGZpbGxtZW50XG4gICAgICBvciByZWplY3Rpb24gaGFuZGxlciwgb3IgcmVqZWN0ZWQgaWYgdGhlIGhhbmRsZXIgdGhyb3dzIGFuIGV4Y2VwdGlvbi5cblxuICAgICAgYGBganNcbiAgICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgICByZXR1cm4gdXNlci5uYW1lO1xuICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICByZXR1cm4gJ2RlZmF1bHQgbmFtZSc7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICh1c2VyTmFtZSkge1xuICAgICAgICAvLyBJZiBgZmluZFVzZXJgIGZ1bGZpbGxlZCwgYHVzZXJOYW1lYCB3aWxsIGJlIHRoZSB1c2VyJ3MgbmFtZSwgb3RoZXJ3aXNlIGl0XG4gICAgICAgIC8vIHdpbGwgYmUgYCdkZWZhdWx0IG5hbWUnYFxuICAgICAgfSk7XG5cbiAgICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZvdW5kIHVzZXIsIGJ1dCBzdGlsbCB1bmhhcHB5Jyk7XG4gICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYGZpbmRVc2VyYCByZWplY3RlZCBhbmQgd2UncmUgdW5oYXBweScpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgLy8gbmV2ZXIgcmVhY2hlZFxuICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAvLyBpZiBgZmluZFVzZXJgIGZ1bGZpbGxlZCwgYHJlYXNvbmAgd2lsbCBiZSAnRm91bmQgdXNlciwgYnV0IHN0aWxsIHVuaGFwcHknLlxuICAgICAgICAvLyBJZiBgZmluZFVzZXJgIHJlamVjdGVkLCBgcmVhc29uYCB3aWxsIGJlICdgZmluZFVzZXJgIHJlamVjdGVkIGFuZCB3ZSdyZSB1bmhhcHB5Jy5cbiAgICAgIH0pO1xuICAgICAgYGBgXG4gICAgICBJZiB0aGUgZG93bnN0cmVhbSBwcm9taXNlIGRvZXMgbm90IHNwZWNpZnkgYSByZWplY3Rpb24gaGFuZGxlciwgcmVqZWN0aW9uIHJlYXNvbnMgd2lsbCBiZSBwcm9wYWdhdGVkIGZ1cnRoZXIgZG93bnN0cmVhbS5cblxuICAgICAgYGBganNcbiAgICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgICB0aHJvdyBuZXcgUGVkYWdvZ2ljYWxFeGNlcHRpb24oJ1Vwc3RyZWFtIGVycm9yJyk7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAvLyBuZXZlciByZWFjaGVkXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAvLyBuZXZlciByZWFjaGVkXG4gICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIC8vIFRoZSBgUGVkZ2Fnb2NpYWxFeGNlcHRpb25gIGlzIHByb3BhZ2F0ZWQgYWxsIHRoZSB3YXkgZG93biB0byBoZXJlXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBBc3NpbWlsYXRpb25cbiAgICAgIC0tLS0tLS0tLS0tLVxuXG4gICAgICBTb21ldGltZXMgdGhlIHZhbHVlIHlvdSB3YW50IHRvIHByb3BhZ2F0ZSB0byBhIGRvd25zdHJlYW0gcHJvbWlzZSBjYW4gb25seSBiZVxuICAgICAgcmV0cmlldmVkIGFzeW5jaHJvbm91c2x5LiBUaGlzIGNhbiBiZSBhY2hpZXZlZCBieSByZXR1cm5pbmcgYSBwcm9taXNlIGluIHRoZVxuICAgICAgZnVsZmlsbG1lbnQgb3IgcmVqZWN0aW9uIGhhbmRsZXIuIFRoZSBkb3duc3RyZWFtIHByb21pc2Ugd2lsbCB0aGVuIGJlIHBlbmRpbmdcbiAgICAgIHVudGlsIHRoZSByZXR1cm5lZCBwcm9taXNlIGlzIHNldHRsZWQuIFRoaXMgaXMgY2FsbGVkICphc3NpbWlsYXRpb24qLlxuXG4gICAgICBgYGBqc1xuICAgICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAgIHJldHVybiBmaW5kQ29tbWVudHNCeUF1dGhvcih1c2VyKTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGNvbW1lbnRzKSB7XG4gICAgICAgIC8vIFRoZSB1c2VyJ3MgY29tbWVudHMgYXJlIG5vdyBhdmFpbGFibGVcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIElmIHRoZSBhc3NpbWxpYXRlZCBwcm9taXNlIHJlamVjdHMsIHRoZW4gdGhlIGRvd25zdHJlYW0gcHJvbWlzZSB3aWxsIGFsc28gcmVqZWN0LlxuXG4gICAgICBgYGBqc1xuICAgICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAgIHJldHVybiBmaW5kQ29tbWVudHNCeUF1dGhvcih1c2VyKTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGNvbW1lbnRzKSB7XG4gICAgICAgIC8vIElmIGBmaW5kQ29tbWVudHNCeUF1dGhvcmAgZnVsZmlsbHMsIHdlJ2xsIGhhdmUgdGhlIHZhbHVlIGhlcmVcbiAgICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgLy8gSWYgYGZpbmRDb21tZW50c0J5QXV0aG9yYCByZWplY3RzLCB3ZSdsbCBoYXZlIHRoZSByZWFzb24gaGVyZVxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgU2ltcGxlIEV4YW1wbGVcbiAgICAgIC0tLS0tLS0tLS0tLS0tXG5cbiAgICAgIFN5bmNocm9ub3VzIEV4YW1wbGVcblxuICAgICAgYGBgamF2YXNjcmlwdFxuICAgICAgdmFyIHJlc3VsdDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzdWx0ID0gZmluZFJlc3VsdCgpO1xuICAgICAgICAvLyBzdWNjZXNzXG4gICAgICB9IGNhdGNoKHJlYXNvbikge1xuICAgICAgICAvLyBmYWlsdXJlXG4gICAgICB9XG4gICAgICBgYGBcblxuICAgICAgRXJyYmFjayBFeGFtcGxlXG5cbiAgICAgIGBgYGpzXG4gICAgICBmaW5kUmVzdWx0KGZ1bmN0aW9uKHJlc3VsdCwgZXJyKXtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIC8vIGZhaWx1cmVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBzdWNjZXNzXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIFByb21pc2UgRXhhbXBsZTtcblxuICAgICAgYGBgamF2YXNjcmlwdFxuICAgICAgZmluZFJlc3VsdCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcbiAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKXtcbiAgICAgICAgLy8gZmFpbHVyZVxuICAgICAgfSk7XG4gICAgICBgYGBcblxuICAgICAgQWR2YW5jZWQgRXhhbXBsZVxuICAgICAgLS0tLS0tLS0tLS0tLS1cblxuICAgICAgU3luY2hyb25vdXMgRXhhbXBsZVxuXG4gICAgICBgYGBqYXZhc2NyaXB0XG4gICAgICB2YXIgYXV0aG9yLCBib29rcztcblxuICAgICAgdHJ5IHtcbiAgICAgICAgYXV0aG9yID0gZmluZEF1dGhvcigpO1xuICAgICAgICBib29rcyAgPSBmaW5kQm9va3NCeUF1dGhvcihhdXRob3IpO1xuICAgICAgICAvLyBzdWNjZXNzXG4gICAgICB9IGNhdGNoKHJlYXNvbikge1xuICAgICAgICAvLyBmYWlsdXJlXG4gICAgICB9XG4gICAgICBgYGBcblxuICAgICAgRXJyYmFjayBFeGFtcGxlXG5cbiAgICAgIGBgYGpzXG5cbiAgICAgIGZ1bmN0aW9uIGZvdW5kQm9va3MoYm9va3MpIHtcblxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBmYWlsdXJlKHJlYXNvbikge1xuXG4gICAgICB9XG5cbiAgICAgIGZpbmRBdXRob3IoZnVuY3Rpb24oYXV0aG9yLCBlcnIpe1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgZmFpbHVyZShlcnIpO1xuICAgICAgICAgIC8vIGZhaWx1cmVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgZmluZEJvb29rc0J5QXV0aG9yKGF1dGhvciwgZnVuY3Rpb24oYm9va3MsIGVycikge1xuICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgZmFpbHVyZShlcnIpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICBmb3VuZEJvb2tzKGJvb2tzKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoKHJlYXNvbikge1xuICAgICAgICAgICAgICAgICAgZmFpbHVyZShyZWFzb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgZmFpbHVyZShlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBzdWNjZXNzXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIFByb21pc2UgRXhhbXBsZTtcblxuICAgICAgYGBgamF2YXNjcmlwdFxuICAgICAgZmluZEF1dGhvcigpLlxuICAgICAgICB0aGVuKGZpbmRCb29rc0J5QXV0aG9yKS5cbiAgICAgICAgdGhlbihmdW5jdGlvbihib29rcyl7XG4gICAgICAgICAgLy8gZm91bmQgYm9va3NcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgICAgIC8vIHNvbWV0aGluZyB3ZW50IHdyb25nXG4gICAgICB9KTtcbiAgICAgIGBgYFxuXG4gICAgICBAbWV0aG9kIHRoZW5cbiAgICAgIEBwYXJhbSB7RnVuY3Rpb259IG9uRnVsZmlsbGVkXG4gICAgICBAcGFyYW0ge0Z1bmN0aW9ufSBvblJlamVjdGVkXG4gICAgICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gICAgICBAcmV0dXJuIHtQcm9taXNlfVxuICAgICovXG4gICAgICB0aGVuOiBsaWIkZXM2JHByb21pc2UkdGhlbiQkZGVmYXVsdCxcblxuICAgIC8qKlxuICAgICAgYGNhdGNoYCBpcyBzaW1wbHkgc3VnYXIgZm9yIGB0aGVuKHVuZGVmaW5lZCwgb25SZWplY3Rpb24pYCB3aGljaCBtYWtlcyBpdCB0aGUgc2FtZVxuICAgICAgYXMgdGhlIGNhdGNoIGJsb2NrIG9mIGEgdHJ5L2NhdGNoIHN0YXRlbWVudC5cblxuICAgICAgYGBganNcbiAgICAgIGZ1bmN0aW9uIGZpbmRBdXRob3IoKXtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZG4ndCBmaW5kIHRoYXQgYXV0aG9yJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIHN5bmNocm9ub3VzXG4gICAgICB0cnkge1xuICAgICAgICBmaW5kQXV0aG9yKCk7XG4gICAgICB9IGNhdGNoKHJlYXNvbikge1xuICAgICAgICAvLyBzb21ldGhpbmcgd2VudCB3cm9uZ1xuICAgICAgfVxuXG4gICAgICAvLyBhc3luYyB3aXRoIHByb21pc2VzXG4gICAgICBmaW5kQXV0aG9yKCkuY2F0Y2goZnVuY3Rpb24ocmVhc29uKXtcbiAgICAgICAgLy8gc29tZXRoaW5nIHdlbnQgd3JvbmdcbiAgICAgIH0pO1xuICAgICAgYGBgXG5cbiAgICAgIEBtZXRob2QgY2F0Y2hcbiAgICAgIEBwYXJhbSB7RnVuY3Rpb259IG9uUmVqZWN0aW9uXG4gICAgICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gICAgICBAcmV0dXJuIHtQcm9taXNlfVxuICAgICovXG4gICAgICAnY2F0Y2gnOiBmdW5jdGlvbihvblJlamVjdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0aW9uKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHZhciBsaWIkZXM2JHByb21pc2UkZW51bWVyYXRvciQkZGVmYXVsdCA9IGxpYiRlczYkcHJvbWlzZSRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yO1xuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yKENvbnN0cnVjdG9yLCBpbnB1dCkge1xuICAgICAgdGhpcy5faW5zdGFuY2VDb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yO1xuICAgICAgdGhpcy5wcm9taXNlID0gbmV3IENvbnN0cnVjdG9yKGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJG5vb3ApO1xuXG4gICAgICBpZiAoIXRoaXMucHJvbWlzZVtsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRQUk9NSVNFX0lEXSkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRtYWtlUHJvbWlzZSh0aGlzLnByb21pc2UpO1xuICAgICAgfVxuXG4gICAgICBpZiAobGliJGVzNiRwcm9taXNlJHV0aWxzJCRpc0FycmF5KGlucHV0KSkge1xuICAgICAgICB0aGlzLl9pbnB1dCAgICAgPSBpbnB1dDtcbiAgICAgICAgdGhpcy5sZW5ndGggICAgID0gaW5wdXQubGVuZ3RoO1xuICAgICAgICB0aGlzLl9yZW1haW5pbmcgPSBpbnB1dC5sZW5ndGg7XG5cbiAgICAgICAgdGhpcy5fcmVzdWx0ID0gbmV3IEFycmF5KHRoaXMubGVuZ3RoKTtcblxuICAgICAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRmdWxmaWxsKHRoaXMucHJvbWlzZSwgdGhpcy5fcmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmxlbmd0aCA9IHRoaXMubGVuZ3RoIHx8IDA7XG4gICAgICAgICAgdGhpcy5fZW51bWVyYXRlKCk7XG4gICAgICAgICAgaWYgKHRoaXMuX3JlbWFpbmluZyA9PT0gMCkge1xuICAgICAgICAgICAgbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZnVsZmlsbCh0aGlzLnByb21pc2UsIHRoaXMuX3Jlc3VsdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRyZWplY3QodGhpcy5wcm9taXNlLCBsaWIkZXM2JHByb21pc2UkZW51bWVyYXRvciQkdmFsaWRhdGlvbkVycm9yKCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpYiRlczYkcHJvbWlzZSRlbnVtZXJhdG9yJCR2YWxpZGF0aW9uRXJyb3IoKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdBcnJheSBNZXRob2RzIG11c3QgYmUgcHJvdmlkZWQgYW4gQXJyYXknKTtcbiAgICB9XG5cbiAgICBsaWIkZXM2JHByb21pc2UkZW51bWVyYXRvciQkRW51bWVyYXRvci5wcm90b3R5cGUuX2VudW1lcmF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGxlbmd0aCAgPSB0aGlzLmxlbmd0aDtcbiAgICAgIHZhciBpbnB1dCAgID0gdGhpcy5faW5wdXQ7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyB0aGlzLl9zdGF0ZSA9PT0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkUEVORElORyAmJiBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5fZWFjaEVudHJ5KGlucHV0W2ldLCBpKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbGliJGVzNiRwcm9taXNlJGVudW1lcmF0b3IkJEVudW1lcmF0b3IucHJvdG90eXBlLl9lYWNoRW50cnkgPSBmdW5jdGlvbihlbnRyeSwgaSkge1xuICAgICAgdmFyIGMgPSB0aGlzLl9pbnN0YW5jZUNvbnN0cnVjdG9yO1xuICAgICAgdmFyIHJlc29sdmUgPSBjLnJlc29sdmU7XG5cbiAgICAgIGlmIChyZXNvbHZlID09PSBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSRyZXNvbHZlJCRkZWZhdWx0KSB7XG4gICAgICAgIHZhciB0aGVuID0gbGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkZ2V0VGhlbihlbnRyeSk7XG5cbiAgICAgICAgaWYgKHRoZW4gPT09IGxpYiRlczYkcHJvbWlzZSR0aGVuJCRkZWZhdWx0ICYmXG4gICAgICAgICAgICBlbnRyeS5fc3RhdGUgIT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFBFTkRJTkcpIHtcbiAgICAgICAgICB0aGlzLl9zZXR0bGVkQXQoZW50cnkuX3N0YXRlLCBpLCBlbnRyeS5fcmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhlbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMuX3JlbWFpbmluZy0tO1xuICAgICAgICAgIHRoaXMuX3Jlc3VsdFtpXSA9IGVudHJ5O1xuICAgICAgICB9IGVsc2UgaWYgKGMgPT09IGxpYiRlczYkcHJvbWlzZSRwcm9taXNlJCRkZWZhdWx0KSB7XG4gICAgICAgICAgdmFyIHByb21pc2UgPSBuZXcgYyhsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRub29wKTtcbiAgICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRoYW5kbGVNYXliZVRoZW5hYmxlKHByb21pc2UsIGVudHJ5LCB0aGVuKTtcbiAgICAgICAgICB0aGlzLl93aWxsU2V0dGxlQXQocHJvbWlzZSwgaSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fd2lsbFNldHRsZUF0KG5ldyBjKGZ1bmN0aW9uKHJlc29sdmUpIHsgcmVzb2x2ZShlbnRyeSk7IH0pLCBpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fd2lsbFNldHRsZUF0KHJlc29sdmUoZW50cnkpLCBpKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbGliJGVzNiRwcm9taXNlJGVudW1lcmF0b3IkJEVudW1lcmF0b3IucHJvdG90eXBlLl9zZXR0bGVkQXQgPSBmdW5jdGlvbihzdGF0ZSwgaSwgdmFsdWUpIHtcbiAgICAgIHZhciBwcm9taXNlID0gdGhpcy5wcm9taXNlO1xuXG4gICAgICBpZiAocHJvbWlzZS5fc3RhdGUgPT09IGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFBFTkRJTkcpIHtcbiAgICAgICAgdGhpcy5fcmVtYWluaW5nLS07XG5cbiAgICAgICAgaWYgKHN0YXRlID09PSBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRSRUpFQ1RFRCkge1xuICAgICAgICAgIGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJHJlamVjdChwcm9taXNlLCB2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fcmVzdWx0W2ldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX3JlbWFpbmluZyA9PT0gMCkge1xuICAgICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRmdWxmaWxsKHByb21pc2UsIHRoaXMuX3Jlc3VsdCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGxpYiRlczYkcHJvbWlzZSRlbnVtZXJhdG9yJCRFbnVtZXJhdG9yLnByb3RvdHlwZS5fd2lsbFNldHRsZUF0ID0gZnVuY3Rpb24ocHJvbWlzZSwgaSkge1xuICAgICAgdmFyIGVudW1lcmF0b3IgPSB0aGlzO1xuXG4gICAgICBsaWIkZXM2JHByb21pc2UkJGludGVybmFsJCRzdWJzY3JpYmUocHJvbWlzZSwgdW5kZWZpbmVkLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBlbnVtZXJhdG9yLl9zZXR0bGVkQXQobGliJGVzNiRwcm9taXNlJCRpbnRlcm5hbCQkRlVMRklMTEVELCBpLCB2YWx1ZSk7XG4gICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgZW51bWVyYXRvci5fc2V0dGxlZEF0KGxpYiRlczYkcHJvbWlzZSQkaW50ZXJuYWwkJFJFSkVDVEVELCBpLCByZWFzb24pO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBsaWIkZXM2JHByb21pc2UkcG9seWZpbGwkJHBvbHlmaWxsKCkge1xuICAgICAgdmFyIGxvY2FsO1xuXG4gICAgICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBsb2NhbCA9IGdsb2JhbDtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgbG9jYWwgPSBzZWxmO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBsb2NhbCA9IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3BvbHlmaWxsIGZhaWxlZCBiZWNhdXNlIGdsb2JhbCBvYmplY3QgaXMgdW5hdmFpbGFibGUgaW4gdGhpcyBlbnZpcm9ubWVudCcpO1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIFAgPSBsb2NhbC5Qcm9taXNlO1xuXG4gICAgICBpZiAoUCAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUC5yZXNvbHZlKCkpID09PSAnW29iamVjdCBQcm9taXNlXScgJiYgIVAuY2FzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxvY2FsLlByb21pc2UgPSBsaWIkZXM2JHByb21pc2UkcHJvbWlzZSQkZGVmYXVsdDtcbiAgICB9XG4gICAgdmFyIGxpYiRlczYkcHJvbWlzZSRwb2x5ZmlsbCQkZGVmYXVsdCA9IGxpYiRlczYkcHJvbWlzZSRwb2x5ZmlsbCQkcG9seWZpbGw7XG5cbiAgICB2YXIgbGliJGVzNiRwcm9taXNlJHVtZCQkRVM2UHJvbWlzZSA9IHtcbiAgICAgICdQcm9taXNlJzogbGliJGVzNiRwcm9taXNlJHByb21pc2UkJGRlZmF1bHQsXG4gICAgICAncG9seWZpbGwnOiBsaWIkZXM2JHByb21pc2UkcG9seWZpbGwkJGRlZmF1bHRcbiAgICB9O1xuXG4gICAgLyogZ2xvYmFsIGRlZmluZTp0cnVlIG1vZHVsZTp0cnVlIHdpbmRvdzogdHJ1ZSAqL1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZVsnYW1kJ10pIHtcbiAgICAgIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIGxpYiRlczYkcHJvbWlzZSR1bWQkJEVTNlByb21pc2U7IH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlWydleHBvcnRzJ10pIHtcbiAgICAgIG1vZHVsZVsnZXhwb3J0cyddID0gbGliJGVzNiRwcm9taXNlJHVtZCQkRVM2UHJvbWlzZTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpc1snRVM2UHJvbWlzZSddID0gbGliJGVzNiRwcm9taXNlJHVtZCQkRVM2UHJvbWlzZTtcbiAgICB9XG5cbiAgICBsaWIkZXM2JHByb21pc2UkcG9seWZpbGwkJGRlZmF1bHQoKTtcbn0pLmNhbGwodGhpcyk7XG5cbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBpcyBub3QgZGVmaW5lZCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgICAgIH1cbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiLypqc2xpbnQgbm9kZTp0cnVlKi9cbi8qZ2xvYmFscyBSVENQZWVyQ29ubmVjdGlvbiwgbW96UlRDUGVlckNvbm5lY3Rpb24sIHdlYmtpdFJUQ1BlZXJDb25uZWN0aW9uICovXG4vKmdsb2JhbHMgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uLCBtb3pSVENTZXNzaW9uRGVzY3JpcHRpb24gKi9cbi8qZ2xvYmFscyBSVENJY2VDYW5kaWRhdGUsIG1velJUQ0ljZUNhbmRpZGF0ZSAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgbXlSVENQZWVyQ29ubmVjdGlvbiA9IG51bGw7XG52YXIgbXlSVENTZXNzaW9uRGVzY3JpcHRpb24gPSBudWxsO1xudmFyIG15UlRDSWNlQ2FuZGlkYXRlID0gbnVsbDtcblxudmFyIHJlbmFtZUljZVVSTHMgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIGlmICghY29uZmlnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICghY29uZmlnLmljZVNlcnZlcnMpIHtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG4gIGNvbmZpZy5pY2VTZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gKHNlcnZlcikge1xuICAgIHNlcnZlci51cmwgPSBzZXJ2ZXIudXJscztcbiAgICBkZWxldGUgc2VydmVyLnVybHM7XG4gIH0pO1xuICByZXR1cm4gY29uZmlnO1xufTtcblxudmFyIGZpeENocm9tZVN0YXRzUmVzcG9uc2UgPSBmdW5jdGlvbihyZXNwb25zZSkge1xuICB2YXIgc3RhbmRhcmRSZXBvcnQgPSB7fTtcbiAgdmFyIHJlcG9ydHMgPSByZXNwb25zZS5yZXN1bHQoKTtcbiAgcmVwb3J0cy5mb3JFYWNoKGZ1bmN0aW9uKHJlcG9ydCkge1xuICAgIHZhciBzdGFuZGFyZFN0YXRzID0ge1xuICAgICAgaWQ6IHJlcG9ydC5pZCxcbiAgICAgIHRpbWVzdGFtcDogcmVwb3J0LnRpbWVzdGFtcCxcbiAgICAgIHR5cGU6IHJlcG9ydC50eXBlXG4gICAgfTtcbiAgICByZXBvcnQubmFtZXMoKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIHN0YW5kYXJkU3RhdHNbbmFtZV0gPSByZXBvcnQuc3RhdChuYW1lKTtcbiAgICB9KTtcbiAgICBzdGFuZGFyZFJlcG9ydFtzdGFuZGFyZFN0YXRzLmlkXSA9IHN0YW5kYXJkU3RhdHM7XG4gIH0pO1xuXG4gIHJldHVybiBzdGFuZGFyZFJlcG9ydDtcbn07XG5cbnZhciBmaXhGaXJlZm94U3RhdHNSZXNwb25zZSA9IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gIC8vIEdpdmluZyB0aGUgcmVzcG9uc2UgZGlyZWN0bHkgdG8gdGhlIGNhbGxiYWNrIGdpdmVzIGFuIG9iamVjdCB3L28gaW50ZXJmYWNlXG4gIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvTW96aWxsYS9XZWJJRExfYmluZGluZ3MjQ2hyb21lT25seVxuICB2YXIgc3RhbmRhcmRSZXBvcnQgPSB7fTtcbiAgcmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiAocmVwb3J0KSB7XG4gICAgc3RhbmRhcmRSZXBvcnRbcmVwb3J0LmlkXSA9IHJlcG9ydDtcbiAgfSk7XG4gIHJldHVybiBzdGFuZGFyZFJlcG9ydDtcbn07XG5cbnZhciBzZXNzaW9uSGFzRGF0YSA9IGZ1bmN0aW9uKGRlc2MpIHtcbiAgaWYgKCFkZXNjKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBoYXNEYXRhID0gZmFsc2U7XG4gIHZhciBwcmVmaXggPSAnbT1hcHBsaWNhdGlvbic7XG4gIGRlc2Muc2RwLnNwbGl0KCdcXG4nKS5mb3JFYWNoKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICBpZiAobGluZS5zbGljZSgwLCBwcmVmaXgubGVuZ3RoKSA9PT0gcHJlZml4KSB7XG4gICAgICBoYXNEYXRhID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gaGFzRGF0YTtcbn07XG5cbi8vIFVuaWZ5IFBlZXJDb25uZWN0aW9uIE9iamVjdC5cbmlmICh0eXBlb2YgUlRDUGVlckNvbm5lY3Rpb24gIT09ICd1bmRlZmluZWQnKSB7XG4gIG15UlRDUGVlckNvbm5lY3Rpb24gPSBSVENQZWVyQ29ubmVjdGlvbjtcbn0gZWxzZSBpZiAodHlwZW9mIG1velJUQ1BlZXJDb25uZWN0aW9uICE9PSAndW5kZWZpbmVkJykge1xuICBteVJUQ1BlZXJDb25uZWN0aW9uID0gZnVuY3Rpb24gKGNvbmZpZ3VyYXRpb24sIGNvbnN0cmFpbnRzKSB7XG4gICAgLy8gRmlyZWZveCB1c2VzICd1cmwnIHJhdGhlciB0aGFuICd1cmxzJyBmb3IgUlRDSWNlU2VydmVyLnVybHNcbiAgICB2YXIgcGMgPSBuZXcgbW96UlRDUGVlckNvbm5lY3Rpb24ocmVuYW1lSWNlVVJMcyhjb25maWd1cmF0aW9uKSwgY29uc3RyYWludHMpO1xuXG4gICAgLy8gRmlyZWZveCBzdGF0cyByZXNwb25zZSBpcyBvbmx5IHZpc2libGUgJ0Nocm9tZU9ubHknIHNvIHByb2Nlc3MgaXQgaGVyZVxuICAgIHZhciBib3VuZEdldFN0YXRzID0gcGMuZ2V0U3RhdHMuYmluZChwYyk7XG4gICAgcGMuZ2V0U3RhdHMgPSBmdW5jdGlvbihzZWxlY3Rvciwgc3VjY2Vzc0NhbGxiYWNrLCBmYWlsdXJlQ2FsbGJhY2spIHtcbiAgICAgIHZhciBzdWNjZXNzQ2FsbGJhY2tXcmFwcGVyID0gZnVuY3Rpb24oZmlyZWZveFN0YXRzUmVzcG9uc2UpIHtcbiAgICAgICAgc3VjY2Vzc0NhbGxiYWNrKGZpeEZpcmVmb3hTdGF0c1Jlc3BvbnNlKGZpcmVmb3hTdGF0c1Jlc3BvbnNlKSk7XG4gICAgICB9O1xuICAgICAgYm91bmRHZXRTdGF0cyhzZWxlY3Rvciwgc3VjY2Vzc0NhbGxiYWNrV3JhcHBlciwgZmFpbHVyZUNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgLy8gRmlyZWZveCBkb2Vzbid0IGZpcmUgJ29ubmVnb3RpYXRpb25uZWVkZWQnIHdoZW4gYSBkYXRhIGNoYW5uZWwgaXMgY3JlYXRlZFxuICAgIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTg0MDcyOFxuICAgIHZhciBkYXRhRW5hYmxlZCA9IGZhbHNlO1xuICAgIHZhciBib3VuZENyZWF0ZURhdGFDaGFubmVsID0gcGMuY3JlYXRlRGF0YUNoYW5uZWwuYmluZChwYyk7XG4gICAgcGMuY3JlYXRlRGF0YUNoYW5uZWwgPSBmdW5jdGlvbihsYWJlbCwgZGF0YUNoYW5uZWxEaWN0KSB7XG4gICAgICB2YXIgZGMgPSBib3VuZENyZWF0ZURhdGFDaGFubmVsKGxhYmVsLCBkYXRhQ2hhbm5lbERpY3QpO1xuICAgICAgaWYgKCFkYXRhRW5hYmxlZCkge1xuICAgICAgICBkYXRhRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIGlmIChwYy5vbm5lZ290aWF0aW9ubmVlZGVkICYmXG4gICAgICAgICAgICAhc2Vzc2lvbkhhc0RhdGEocGMubG9jYWxEZXNjcmlwdGlvbikgJiZcbiAgICAgICAgICAgICFzZXNzaW9uSGFzRGF0YShwYy5yZW1vdGVEZXNjcmlwdGlvbikpIHtcbiAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ25lZ290aWF0aW9ubmVlZGVkJyk7XG4gICAgICAgICAgcGMub25uZWdvdGlhdGlvbm5lZWRlZChldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBkYztcbiAgICB9O1xuXG4gICAgcmV0dXJuIHBjO1xuICB9O1xufSBlbHNlIGlmICh0eXBlb2Ygd2Via2l0UlRDUGVlckNvbm5lY3Rpb24gIT09ICd1bmRlZmluZWQnKSB7XG4gIC8vIENocm9tZSByZXR1cm5zIGEgbm9uc3RhbmRhcmQsIG5vbi1KU09OLWlmaWFibGUgcmVzcG9uc2UgZnJvbSBnZXRTdGF0cy5cbiAgbXlSVENQZWVyQ29ubmVjdGlvbiA9IGZ1bmN0aW9uKGNvbmZpZ3VyYXRpb24sIGNvbnN0cmFpbnRzKSB7XG4gICAgdmFyIHBjID0gbmV3IHdlYmtpdFJUQ1BlZXJDb25uZWN0aW9uKGNvbmZpZ3VyYXRpb24sIGNvbnN0cmFpbnRzKTtcbiAgICB2YXIgYm91bmRHZXRTdGF0cyA9IHBjLmdldFN0YXRzLmJpbmQocGMpO1xuICAgIHBjLmdldFN0YXRzID0gZnVuY3Rpb24oc2VsZWN0b3IsIHN1Y2Nlc3NDYWxsYmFjaywgZmFpbHVyZUNhbGxiYWNrKSB7XG4gICAgICB2YXIgc3VjY2Vzc0NhbGxiYWNrV3JhcHBlciA9IGZ1bmN0aW9uKGNocm9tZVN0YXRzUmVzcG9uc2UpIHtcbiAgICAgICAgc3VjY2Vzc0NhbGxiYWNrKGZpeENocm9tZVN0YXRzUmVzcG9uc2UoY2hyb21lU3RhdHNSZXNwb25zZSkpO1xuICAgICAgfTtcbiAgICAgIC8vIENocm9tZSBhbHNvIHRha2VzIGl0cyBhcmd1bWVudHMgaW4gdGhlIHdyb25nIG9yZGVyLlxuICAgICAgYm91bmRHZXRTdGF0cyhzdWNjZXNzQ2FsbGJhY2tXcmFwcGVyLCBmYWlsdXJlQ2FsbGJhY2ssIHNlbGVjdG9yKTtcbiAgICB9O1xuICAgIHJldHVybiBwYztcbiAgfTtcbn1cblxuLy8gVW5pZnkgU2Vzc2lvbkRlc2NycHRpb24gT2JqZWN0LlxuaWYgKHR5cGVvZiBSVENTZXNzaW9uRGVzY3JpcHRpb24gIT09ICd1bmRlZmluZWQnKSB7XG4gIG15UlRDU2Vzc2lvbkRlc2NyaXB0aW9uID0gUlRDU2Vzc2lvbkRlc2NyaXB0aW9uO1xufSBlbHNlIGlmICh0eXBlb2YgbW96UlRDU2Vzc2lvbkRlc2NyaXB0aW9uICE9PSAndW5kZWZpbmVkJykge1xuICBteVJUQ1Nlc3Npb25EZXNjcmlwdGlvbiA9IG1velJUQ1Nlc3Npb25EZXNjcmlwdGlvbjtcbn1cblxuLy8gVW5pZnkgSWNlQ2FuZGlkYXRlIE9iamVjdC5cbmlmICh0eXBlb2YgUlRDSWNlQ2FuZGlkYXRlICE9PSAndW5kZWZpbmVkJykge1xuICBteVJUQ0ljZUNhbmRpZGF0ZSA9IFJUQ0ljZUNhbmRpZGF0ZTtcbn0gZWxzZSBpZiAodHlwZW9mIG1velJUQ0ljZUNhbmRpZGF0ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgbXlSVENJY2VDYW5kaWRhdGUgPSBtb3pSVENJY2VDYW5kaWRhdGU7XG59XG5cbmV4cG9ydHMuUlRDUGVlckNvbm5lY3Rpb24gPSBteVJUQ1BlZXJDb25uZWN0aW9uO1xuZXhwb3J0cy5SVENTZXNzaW9uRGVzY3JpcHRpb24gPSBteVJUQ1Nlc3Npb25EZXNjcmlwdGlvbjtcbmV4cG9ydHMuUlRDSWNlQ2FuZGlkYXRlID0gbXlSVENJY2VDYW5kaWRhdGU7XG4iLCIvKmdsb2JhbHMgbmF2aWdhdG9yKi9cbi8qanNoaW50IG5vZGU6dHJ1ZSovXG52YXIgUHJvbWlzZUNvbXBhdCA9IHJlcXVpcmUoJ2VzNi1wcm9taXNlJykuUHJvbWlzZTtcbnZhciBuYXYgPSBuYXZpZ2F0b3I7XG5cbnZhciBCYXR0ZXJ5UHJvdmlkZXIgPSBmdW5jdGlvbihjYXAsIGRpc3BhdGNoRXZlbnQpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHRoaXMuX2JhdHRlcnlQcm9taXNlID0gbmF2ICYmIG5hdi5nZXRCYXR0ZXJ5ID8gbmF2LmdldEJhdHRlcnkoKSA6IG51bGw7XG5cbiAgaWYgKHRoaXMuX2JhdHRlcnlQcm9taXNlKSB7XG4gICAgdGhpcy5fYmF0dGVyeVByb21pc2UudGhlbihmdW5jdGlvbihiYXR0ZXJ5KSB7XG4gICAgICB0aGlzLl9zZXR1cExpc3RlbmVycyhiYXR0ZXJ5LCBkaXNwYXRjaEV2ZW50KTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUud2FybihcIlRyeWluZyB0byB1c2UgY29yZS5iYXR0ZXJ5IEFQSSB3aXRob3V0IGNsaWVudCBzdXBwb3J0XCIpO1xuICB9XG59O1xuXG5CYXR0ZXJ5UHJvdmlkZXIucHJvdG90eXBlLmlzQ2hhcmdpbmcgPSBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIGlmICghdGhpcy5fYmF0dGVyeVByb21pc2UpIHtcbiAgICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHRydWUpOyAgLy8gQ2hhcmdpbmcgLyBwbHVnZ2VkIGluXG4gIH1cbiAgcmV0dXJuIHRoaXMuX2JhdHRlcnlQcm9taXNlLnRoZW4oZnVuY3Rpb24oYmF0dGVyeSkge1xuICAgIHJldHVybiBiYXR0ZXJ5LmNoYXJnaW5nO1xuICB9KTtcbn07XG5cbkJhdHRlcnlQcm92aWRlci5wcm90b3R5cGUuZ2V0Q2hhcmdpbmdUaW1lID0gZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICBpZiAoIXRoaXMuX2JhdHRlcnlQcm9taXNlKSB7XG4gICAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSgwKTsgIC8vIEZ1bGx5IGNoYXJnZWRcbiAgfVxuICByZXR1cm4gdGhpcy5fYmF0dGVyeVByb21pc2UudGhlbihmdW5jdGlvbihiYXR0ZXJ5KSB7XG4gICAgcmV0dXJuIGJhdHRlcnkuY2hhcmdpbmdUaW1lO1xuICB9KTtcbn07XG5cbkJhdHRlcnlQcm92aWRlci5wcm90b3R5cGUuZ2V0RGlzY2hhcmdpbmdUaW1lID0gZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICBpZiAoIXRoaXMuX2JhdHRlcnlQcm9taXNlKSB7XG4gICAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZShJbmZpbml0eSk7ICAvLyBDdXJyZW50bHkgY2hhcmdpbmdcbiAgfVxuICByZXR1cm4gdGhpcy5fYmF0dGVyeVByb21pc2UudGhlbihmdW5jdGlvbihiYXR0ZXJ5KSB7XG4gICAgcmV0dXJuIGJhdHRlcnkuZGlzY2hhcmdpbmdUaW1lO1xuICB9KTtcbn07XG5cbkJhdHRlcnlQcm92aWRlci5wcm90b3R5cGUuZ2V0TGV2ZWwgPSBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIGlmICghdGhpcy5fYmF0dGVyeVByb21pc2UpIHtcbiAgICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKDEuMCk7ICAvLyBGdWxseSBjaGFyZ2VkXG4gIH1cbiAgcmV0dXJuIHRoaXMuX2JhdHRlcnlQcm9taXNlLnRoZW4oZnVuY3Rpb24oYmF0dGVyeSkge1xuICAgIHJldHVybiBiYXR0ZXJ5LmxldmVsO1xuICB9KTtcbn07XG5cbkJhdHRlcnlQcm92aWRlci5wcm90b3R5cGUuX3NldHVwTGlzdGVuZXJzID0gZnVuY3Rpb24oYmF0dGVyeSwgZGlzcGF0Y2hFdmVudCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgdmFyIGV2ZW50cyA9IFtcbiAgICBcImNoYXJnaW5nY2hhbmdlXCIsXG4gICAgXCJjaGFyZ2luZ3RpbWVjaGFuZ2VcIixcbiAgICBcImRpc2NoYXJnaW5ndGltZWNoYW5nZVwiLFxuICAgIFwibGV2ZWxjaGFuZ2VcIlxuICBdO1xuICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgYmF0dGVyeS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZGlzcGF0Y2hFdmVudC5iaW5kKHRoaXMsIGV2ZW50TmFtZSkpO1xuICB9KTtcbn07XG5cbmV4cG9ydHMubmFtZSA9IFwiY29yZS5iYXR0ZXJ5XCI7XG5leHBvcnRzLnByb3ZpZGVyID0gQmF0dGVyeVByb3ZpZGVyO1xuZXhwb3J0cy5zdHlsZSA9IFwicHJvdmlkZVByb21pc2VzXCI7XG5leHBvcnRzLmZsYWdzID0geyBwcm92aWRlcjogdHJ1ZSB9O1xuZXhwb3J0cy5zZXROYXZpZ2F0b3IgPSBmdW5jdGlvbihpbXBsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICBuYXYgPSBpbXBsO1xufTtcbiIsIi8qZ2xvYmFscyBwcm9jZXNzLCBjb25zb2xlICovXG4vKmpzbGludCBpbmRlbnQ6MixzbG9wcHk6dHJ1ZSwgbm9kZTp0cnVlICovXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4uLy4uL3NyYy91dGlsJyk7XG5cbi8qKlxuICogQSBmcmVlZG9tLmpzIGxvZ2dpbmcgcHJvdmlkZXIgdGhhdCBsb2dzIHRvIGNocm9tZSwgZmlyZWZveCwgYW5kIG5vZGUgY29uc29sZXMuXG4gKiBAQ2xhc3MgTG9nZ2VyX2NvbnNvbGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Y29uZmlnOiBPYmplY3R9IGNhcCBDYXBhYmlsaXRpZXMgLSBjb25zb2xlIHJlcXVpcmVzIGdsb2JhbCBjb25maWcuXG4gKi9cbnZhciBMb2dnZXJfY29uc29sZSA9IGZ1bmN0aW9uIChjYXApIHtcbiAgdGhpcy5sZXZlbCA9IChjYXAuY29uZmlnICYmIGNhcC5jb25maWcuZGVidWcpIHx8ICdsb2cnO1xuICB0aGlzLmNvbnNvbGUgPSAoY2FwLmNvbmZpZyAmJiBjYXAuY29uZmlnLmdsb2JhbC5jb25zb2xlKTtcbiAgdXRpbC5oYW5kbGVFdmVudHModGhpcyk7XG59O1xuXG5cbi8qKlxuICogTG9nZ2luZyBsZXZlbHMsIGZvciBmaWx0ZXJpbmcgb3V0cHV0LlxuICogQHByaXZhdGVcbiAqIEBzdGF0aWNcbiAqL1xuTG9nZ2VyX2NvbnNvbGUubGV2ZWwgPSB7XG4gIFwiZGVidWdcIjogMCxcbiAgXCJpbmZvXCI6IDEsXG4gIFwibG9nXCI6IDIsXG4gIFwid2FyblwiOiAzLFxuICBcImVycm9yXCI6IDRcbn07XG5cbi8qKlxuICogUHJpbnQgYSBtZXNzYWdlIHdpdGggYXBwcm9wcmlhdGUgZm9ybWF0dGluZy5cbiAqIEBtZXRob2QgcHJpbnRcbiAqL1xuTG9nZ2VyX2NvbnNvbGUucHJvdG90eXBlLnByaW50ID0gZnVuY3Rpb24gKHNldmVyaXR5LCBzb3VyY2UsIG1zZykge1xuICB2YXIgYXJyID0gbXNnO1xuICBpZiAodHlwZW9mIHRoaXMuY29uc29sZSA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgIHRoaXMuY29uc29sZS5mcmVlZG9tID09PSB0cnVlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICh0eXBlb2YgYXJyID09PSAnc3RyaW5nJykge1xuICAgIGFyciA9IFthcnJdO1xuICB9XG4gIFxuICBpZiAoTG9nZ2VyX2NvbnNvbGUubGV2ZWxbdGhpcy5sZXZlbF0gIT09IHVuZGVmaW5lZCAmJlxuICAgICAgTG9nZ2VyX2NvbnNvbGUubGV2ZWxbc2V2ZXJpdHldIDwgTG9nZ2VyX2NvbnNvbGUubGV2ZWxbdGhpcy5sZXZlbF0pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgXG4gIGlmIChzb3VyY2UpIHtcbiAgICBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIHt9LnRvU3RyaW5nLmNhbGwocHJvY2VzcykgPT09ICdbb2JqZWN0IHByb2Nlc3NdJykge1xuICAgICAgLy8gTm9kZS5cbiAgICAgIGFyci51bnNoaWZ0KCdcXHgxQlszOW0nKTtcbiAgICAgIGFyci51bnNoaWZ0KCdcXHgxQlszMW0nICsgc291cmNlKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29uc29sZS5tYXhMb2dMZXZlbCkge1xuICAgICAgLy8gRmlyZWZveCBpbiBKU00gY29udGV4dDpcbiAgICAgIC8vICAgaHR0cDovL214ci5tb3ppbGxhLm9yZy9tb3ppbGxhLXJlbGVhc2Uvc291cmNlL3Rvb2xraXQvZGV2dG9vbHMvQ29uc29sZS5qc21cbiAgICAgIGlmICghdGhpcy5jb25zb2xlLmZyZWVkb21EdW1wKSB7XG4gICAgICAgIHRoaXMuY29uc29sZS5mcmVlZG9tRHVtcCA9IHRoaXMuY29uc29sZS5kdW1wO1xuICAgICAgICB0aGlzLmNvbnNvbGUuZHVtcCA9IGZ1bmN0aW9uKCkge307XG4gICAgICB9XG4gICAgICB0aGlzLmNvbnNvbGUuZnJlZWRvbUR1bXAoc291cmNlICsgJyAnICsgc2V2ZXJpdHlbMF0udG9VcHBlckNhc2UoKSArICcgJyArXG4gICAgICAgICAgYXJyLmpvaW4oJyAnKSArICdcXG4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXJyLnVuc2hpZnQoJ2NvbG9yOiBub25lJyk7XG4gICAgICBhcnIudW5zaGlmdCgnY29sb3I6IHJlZCcpO1xuICAgICAgYXJyLnVuc2hpZnQoJyVjJyArIHNvdXJjZSArICclYycpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghdGhpcy5jb25zb2xlW3NldmVyaXR5XSAmJiB0aGlzLmNvbnNvbGUubG9nKSB7XG4gICAgc2V2ZXJpdHkgPSAnbG9nJztcbiAgfVxuICB0aGlzLmNvbnNvbGVbc2V2ZXJpdHldLmFwcGx5KHRoaXMuY29uc29sZSwgYXJyKTtcbn07XG5cbi8qKlxuICogTG9nIGEgbWVzc2FnZSB0byB0aGUgY29uc29sZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBzb3VyY2UgVGhlIHNvdXJjZSBvZiB0aGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBtc2cgVGhlIG1lc3NhZ2UgdG8gbG9nLlxuICogQG1ldGhvZCBsb2dcbiAqL1xuTG9nZ2VyX2NvbnNvbGUucHJvdG90eXBlLmxvZyA9IGZ1bmN0aW9uIChzb3VyY2UsIG1zZywgY29udGludWF0aW9uKSB7XG4gIHRoaXMucHJpbnQoJ2xvZycsIHNvdXJjZSwgbXNnKTtcbiAgY29udGludWF0aW9uKCk7XG59O1xuXG4vKipcbiAqIExvZyBhIG1lc3NhZ2UgdG8gdGhlIGNvbnNvbGUgd2l0aCBkZWJ1ZyBwcmlvcml0eS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBzb3VyY2UgVGhlIHNvdXJjZSBvZiB0aGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBtc2cgVGhlIG1lc3NhZ2UgdG8gbG9nLlxuICogQG1ldGhvZCBsb2dcbiAqL1xuTG9nZ2VyX2NvbnNvbGUucHJvdG90eXBlLmRlYnVnID0gZnVuY3Rpb24gKHNvdXJjZSwgbXNnLCBjb250aW51YXRpb24pIHtcbiAgdGhpcy5wcmludCgnZGVidWcnLCBzb3VyY2UsIG1zZyk7XG4gIGNvbnRpbnVhdGlvbigpO1xufTtcblxuLyoqXG4gKiBMb2cgYSBtZXNzYWdlIHRvIHRoZSBjb25zb2xlIHdpdGggaW5mbyBwcmlvcml0eS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBzb3VyY2UgVGhlIHNvdXJjZSBvZiB0aGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBtc2cgVGhlIG1lc3NhZ2UgdG8gbG9nLlxuICogQG1ldGhvZCBsb2dcbiAqL1xuTG9nZ2VyX2NvbnNvbGUucHJvdG90eXBlLmluZm8gPSBmdW5jdGlvbiAoc291cmNlLCBtc2csIGNvbnRpbnVhdGlvbikge1xuICB0aGlzLnByaW50KCdpbmZvJywgc291cmNlLCBtc2cpO1xuICBjb250aW51YXRpb24oKTtcbn07XG5cbi8qKlxuICogTG9nIGEgbWVzc2FnZSB0byB0aGUgY29uc29sZSB3aXRoIHdhcm4gcHJpb3JpdHkuXG4gKiBAcGFyYW0ge1N0cmluZ30gc291cmNlIFRoZSBzb3VyY2Ugb2YgdGhlIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge1N0cmluZ30gbXNnIFRoZSBtZXNzYWdlIHRvIGxvZy5cbiAqIEBtZXRob2QgbG9nXG4gKi9cbkxvZ2dlcl9jb25zb2xlLnByb3RvdHlwZS53YXJuID0gZnVuY3Rpb24gKHNvdXJjZSwgbXNnLCBjb250aW51YXRpb24pIHtcbiAgdGhpcy5wcmludCgnd2FybicsIHNvdXJjZSwgbXNnKTtcbiAgY29udGludWF0aW9uKCk7XG59O1xuXG4vKipcbiAqIExvZyBhIG1lc3NhZ2UgdG8gdGhlIGNvbnNvbGUgd2l0aCBlcnJvciBwcmlvcml0eS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBzb3VyY2UgVGhlIHNvdXJjZSBvZiB0aGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBtc2cgVGhlIG1lc3NhZ2UgdG8gbG9nLlxuICogQG1ldGhvZCBsb2dcbiAqL1xuTG9nZ2VyX2NvbnNvbGUucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKHNvdXJjZSwgbXNnLCBjb250aW51YXRpb24pIHtcbiAgdGhpcy5wcmludCgnZXJyb3InLCBzb3VyY2UsIG1zZyk7XG4gIGNvbnRpbnVhdGlvbigpO1xufTtcblxuLyoqIFJFR0lTVEVSIFBST1ZJREVSICoqL1xuZXhwb3J0cy5wcm92aWRlciA9IExvZ2dlcl9jb25zb2xlO1xuZXhwb3J0cy5uYW1lID0gJ2NvcmUuY29uc29sZSc7XG5leHBvcnRzLmZsYWdzID0ge2NvbmZpZzogdHJ1ZX07XG4iLCIvKmdsb2JhbHMgY29uc29sZSwgY3J5cHRvICovXG4vKmpzbGludCBpbmRlbnQ6Miwgbm9kZTp0cnVlICovXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4uLy4uL3NyYy91dGlsJyk7XG5cbi8qKlxuICogQSBDb3JlIHByb3ZpZGVyIGZvciBnZXR0aW5nIGNyeXB0b2dyYXBoaWNhbGx5IHJhbmRvbSBidWZmZXJzLiBUaGlzXG4gKiBmdW5jdGlvbmFsaXR5IG1heSBub3QgZXhpc3QgaW4gYWxsIHVucHJpdmlsZWRnZWQgY29udGV4dHMgLSBuYW1lbHkgYXQgdGhpc1xuICogcG9pbnQsIGZpcmVmb3ggYWRkb24gd29ya2Vycy5cbiAqIEBDbGFzcyBDb3JlX2NyeXB0b1xuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge21vZHVsZTpNb2R1bGV9IGNhcCBUaGUgbW9kdWxlIGNyZWF0aW5nIHRoaXMgcHJvdmlkZXIuXG4gKi9cbnZhciBDb3JlX2NyeXB0byA9IGZ1bmN0aW9uKGNhcCwgZGlzcGF0Y2hFdmVudCkge1xuICAndXNlIHN0cmljdCc7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCA9IGRpc3BhdGNoRXZlbnQ7XG4gIHV0aWwuaGFuZGxlRXZlbnRzKHRoaXMpO1xufTtcblxuLyoqXG4gKiBHZXQgYSByYW5kb20gYnVmZmVyIG9mIHNvbWUgbnVtYmVyIG9mIGJ5dGVzLlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIHNlbmQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb250aW51YXRpb24gRnVuY3Rpb24gdG8gY2FsbCB3aGVuIHNlbmRpbmcgaXMgY29tcGxldGUuXG4gKiBAbWV0aG9kIHNlbmRcbiAqL1xuIENvcmVfY3J5cHRvLnByb3RvdHlwZS5nZXRSYW5kb21CeXRlcyA9IGZ1bmN0aW9uKG51bWJlciwgY29udGludWF0aW9uKSB7XG4gICAndXNlIHN0cmljdCc7XG4gICB2YXIgYnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkobnVtYmVyKTtcbiAgIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMoYnVmZmVyKTtcbiAgIGNvbnRpbnVhdGlvbihidWZmZXIuYnVmZmVyKTtcbn07XG5cbmV4cG9ydHMucHJvdmlkZXIgPSBDb3JlX2NyeXB0bztcbmV4cG9ydHMubmFtZSA9IFwiY29yZS5jcnlwdG9cIjtcbiIsIi8qZ2xvYmFscyBjb25zb2xlICovXG4vKmpzbGludCBpbmRlbnQ6Mix3aGl0ZTp0cnVlLHNsb3BweTp0cnVlLCBub2RlOnRydWUgKi9cbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vLi4vc3JjL3V0aWwnKTtcblxuLyoqXG4gKiBBIG1pbmltYWwgcHJvdmlkZXIgaW1wbGVtZW50aW5nIHRoZSBjb3JlLmVjaG8gaW50ZXJmYWNlIGZvciBpbnRlcmFjdGlvbiB3aXRoXG4gKiBjdXN0b20gY2hhbm5lbHMuICBQcmltYXJpbHkgdXNlZCBmb3IgdGVzdGluZyB0aGUgcm9idXN0bmVzcyBvZiB0aGUgY3VzdG9tXG4gKiBjaGFubmVsIGltcGxlbWVudGF0aW9uLlxuICogQENsYXNzIEVjaG9fdW5wcml2aWxlZ2VkXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7bW9kdWxlOk1vZHVsZX0gY2FwIFRoZSBtb2R1bGUgY3JlYXRpbmcgdGhpcyBwcm92aWRlci5cbiAqL1xudmFyIEVjaG9fdW5wcml2aWxlZ2VkID0gZnVuY3Rpb24oY2FwLCBkaXNwYXRjaEV2ZW50KSB7XG4gIHRoaXMubW9kID0gY2FwLm1vZHVsZTtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50ID0gZGlzcGF0Y2hFdmVudDtcbiAgdXRpbC5oYW5kbGVFdmVudHModGhpcyk7XG5cbiAgLy8gVGhlIENvcmUgb2JqZWN0IGZvciBtYW5hZ2luZyBjaGFubmVscy5cbiAgdGhpcy5tb2Qub25jZSgnY29yZScsIGZ1bmN0aW9uKENvcmUpIHtcbiAgICB0aGlzLmNvcmUgPSBuZXcgQ29yZSgpO1xuICB9LmJpbmQodGhpcykpO1xuICB0aGlzLm1vZC5lbWl0KHRoaXMubW9kLmNvbnRyb2xDaGFubmVsLCB7XG4gICAgdHlwZTogJ2NvcmUgcmVxdWVzdCBkZWxlZ2F0ZWQgdG8gZWNobycsXG4gICAgcmVxdWVzdDogJ2NvcmUnXG4gIH0pO1xufTtcblxuLyoqXG4gKiBTZXR1cCB0aGUgcHJvdmlkZXIgdG8gZWNobyBvbiBhIHNwZWNpZmljIHByb3h5LiBTdWJzZXF1ZW50IG1lc3NhZ2VzXG4gKiBGcm9tIHRoZSBjdXN0b20gY2hhbm5lbCBib3VuZCBoZXJlIHdpbGwgYmUgcmUtZW1pdHRlZCBhcyBhIG1lc3NhZ2VcbiAqIGZyb20gdGhlIHByb3ZpZGVyLiAgU3Vic2VxdWVudCBtZXNzYWdlcyB0byB0aGUgcHJvdmlkZXIgd2lsbCBiZVxuICogZW1pdHRlZCBvbiB0aGUgYm91bmQgY2hhbm5lbC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm94eSBUaGUgaWRlbnRpZmllciBmb3IgdGhlIGN1c3RvbSBjaGFubmVsIHRvIGJpbmQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb250aW51YXRpb24gRnVuY3Rpb24gdG8gY2FsbCB3aGVuIHNldHVwIGlzIGNvbXBsZXRlLlxuICogQG1ldGhvZCBzZXR1cFxuICovXG5FY2hvX3VucHJpdmlsZWdlZC5wcm90b3R5cGUuc2V0dXAgPSBmdW5jdGlvbihwcm94eSwgY29udGludWF0aW9uKSB7XG4gIGNvbnRpbnVhdGlvbigpO1xuICBpZiAoIXRoaXMuY29yZSkge1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnbWVzc2FnZScsICdubyBjb3JlIGF2YWlsYWJsZSB0byBzZXR1cCBwcm94eSB3aXRoIGF0IGVjaG8nKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLmNvcmUuYmluZENoYW5uZWwocHJveHksIGZ1bmN0aW9uKGNoYW4pIHtcbiAgICBpZiAodGhpcy5jaGFuKSB7XG4gICAgICB0aGlzLmNoYW4uY2xvc2UoKTtcbiAgICB9XG4gICAgdGhpcy5jaGFuID0gY2hhbjtcbiAgICB0aGlzLmNoYW4ub25DbG9zZShmdW5jdGlvbigpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmNoYW47XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ21lc3NhZ2UnLCAnY2hhbm5lbCBib3VuZCB0byBlY2hvJyk7XG4gICAgdGhpcy5jaGFuLm9uKCdtZXNzYWdlJywgZnVuY3Rpb24obSkge1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdtZXNzYWdlJywgJ2Zyb20gY3VzdG9tIGNoYW5uZWw6ICcgKyBtKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9LmJpbmQodGhpcykpO1xufTtcblxuLyoqXG4gKiBTZW5kIGEgbWVzc2FnZSB0byB0aGUgYm91bmQgY3VzdG9tIGNoYW5uZWwuXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gc2VuZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbnRpbnVhdGlvbiBGdW5jdGlvbiB0byBjYWxsIHdoZW4gc2VuZGluZyBpcyBjb21wbGV0ZS5cbiAqIEBtZXRob2Qgc2VuZFxuICovXG5FY2hvX3VucHJpdmlsZWdlZC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uKHN0ciwgY29udGludWF0aW9uKSB7XG4gIGNvbnRpbnVhdGlvbigpO1xuICBpZiAodGhpcy5jaGFuKSB7XG4gICAgdGhpcy5jaGFuLmVtaXQoJ21lc3NhZ2UnLCBzdHIpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnbWVzc2FnZScsICdubyBjaGFubmVsIGF2YWlsYWJsZScpO1xuICB9XG59O1xuXG5leHBvcnRzLnByb3ZpZGVyID0gRWNob191bnByaXZpbGVnZWQ7XG5leHBvcnRzLm5hbWUgPSBcImNvcmUuZWNob1wiO1xuZXhwb3J0cy5mbGFncyA9IHttb2R1bGU6IHRydWV9O1xuIiwiLypnbG9iYWxzIGNvbnNvbGUgKi9cbi8qanNsaW50IGluZGVudDoyLHdoaXRlOnRydWUsc2xvcHB5OnRydWUsbm9kZTp0cnVlICovXG5cbi8qKlxuICogQW4gb0F1dGggbWV0YS1wcm92aWRlciBhbGxvd2luZyBtdWx0aXBsZSBwbGF0Zm9ybS1kZXBlbmRhbnRcbiAqIG9BdXRoIGltcGxlbWVudGF0aW9ucyB0byBzZXJ2ZSBhcyB0aGUgcmVkaXJlY3RVUkwgZm9yIGFuIG9BdXRoIGZsb3cuXG4gKiBUaGUgY29yZSBpbXBsZW1lbnRhdGlvbnMgYXJlIHByb3ZpZGVkIGluIHByb3ZpZGVycy9vYXV0aCwgYW5kIGFyZVxuICogc3VwcGxlbWVudGVkIGluIHBsYXRmb3JtLWRlcGVuZGVudCByZXBvc2l0b3JpZXMuXG4gKlxuICovXG52YXIgT0F1dGggPSBmdW5jdGlvbiAoaGFuZGxlcnMsIGNhcCwgZGlzcGF0Y2hFdmVudCkge1xuICB0aGlzLmhhbmRsZXJzID0gaGFuZGxlcnM7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCA9IGRpc3BhdGNoRXZlbnQ7XG4gIHRoaXMub25nb2luZyA9IHt9O1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciBvQXV0aCBoYW5kbGVycy5cbiAqIFRoaXMgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQgYmVmb3JlIHByb3ZpZGVyIGlzIHVzZWQsIGFuZCBiaW5kcyB0aGUgY3VycmVudFxuICogb0F1dGggcHJvdmlkZXIgdG8gYmUgYXNzb2NpYXRlZCB3aXRoIHJlZ2lzdGVyZWQgaGFuZGxlcnMuIFRoaXMgaXMgdXNlZCBzb1xuICogdGhhdCBoYW5kbGVycyB3aGljaCBhcmUgcmVnaXN0ZXJlZCBieSB0aGUgdXNlciBhcHBseSBvbmx5IHRoZSB0aGUgZnJlZWRvbSgpXG4gKiBzZXR1cCBjYWxsIHRoZXkgYXJlIGFzc29jaWF0ZWQgd2l0aCwgd2hpbGUgc3RpbGwgYmVpbmcgcmVnaXN0ZXJlZCBhY3Jvc3NcbiAqIG11bHRpcGxlIGluc3RhbmNlcyBvZiBPQXV0aCBwcm92aWRlcnMuXG4gKlxuICogQG1ldGhvZCByZWdpc3RlclxuICogQHBhcmFtIHtbY29uc3RydWN0b3JdfSBoYW5kbGVyc1xuICogQHByaXZhdGVcbiAqL1xuT0F1dGgucmVnaXN0ZXIgPSBmdW5jdGlvbiAoaGFuZGxlcnMpIHtcbiAgdmFyIGksXG4gICAgICBib3VuZEhhbmRsZXJzID0gW107XG4gIGlmICghaGFuZGxlcnMgfHwgIWhhbmRsZXJzLmxlbmd0aCkge1xuICAgIHJldHVybiBPQXV0aC5yZXNldCgpO1xuICB9XG5cbiAgZm9yIChpID0gMDsgaSA8IGhhbmRsZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgYm91bmRIYW5kbGVycy5wdXNoKG5ldyBoYW5kbGVyc1tpXSgpKTtcbiAgfVxuICBleHBvcnRzLnByb3ZpZGVyID0gT0F1dGguYmluZCh0aGlzLCBib3VuZEhhbmRsZXJzKTtcbn07XG5cbi8qKlxuICogUmVzZXQgdGhlIG9BdXRoIHByb3ZpZGVyIHJlZ2lzdHJhdGlvbnMuXG4gKiBAbWV0aG9kIHJlc2V0XG4gKiBAcHJpdmF0ZVxuICovXG5PQXV0aC5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgZXhwb3J0cy5wcm92aWRlciA9IE9BdXRoLmJpbmQodGhpcywgW10pO1xufTtcblxuLyoqXG4gKiBJbmRpY2F0ZSB0aGUgaW50ZW50aW9uIHRvIGluaXRpYXRlIGFuIG9BdXRoIGZsb3csIGFsbG93aW5nIGFuIGFwcHJvcHJpYXRlXG4gKiBvQXV0aCBwcm92aWRlciB0byBiZWdpbiBtb25pdG9yaW5nIGZvciByZWRpcmVjdGlvbi5cbiAqXG4gKiBAbWV0aG9kIGluaXRpYXRlT0F1dGhcbiAqIEBwYXJhbSB7c3RyaW5nW119IHJlZGlyZWN0VVJJcyAtIG9BdXRoIHJlZGlyZWN0aW9uIFVSSXMgcmVnaXN0ZXJlZCB3aXRoIHRoZVxuICogICAgIHByb3ZpZGVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29udGludWF0aW9uIC0gRnVuY3Rpb24gdG8gY2FsbCB3aGVuIGNvbXBsZXRlXG4gKiAgICBFeHBlY3RlZCB0byBzZWUgYSB2YWx1ZSBvZiBzY2hlbWE6IHt7cmVkaXJlY3Q6U3RyaW5nLCBzdGF0ZTpTdHJpbmd9fVxuICogICAgd2hlcmUgJ3JlZGlyZWN0JyBpcyB0aGUgY2hvc2VuIHJlZGlyZWN0IFVSSVxuICogICAgYW5kICdzdGF0ZScgaXMgdGhlIHN0YXRlIHRvIHBhc3MgdG8gdGhlIFVSSSBvbiBjb21wbGV0aW9uIG9mIG9BdXRoXG4gKi9cbk9BdXRoLnByb3RvdHlwZS5pbml0aWF0ZU9BdXRoID0gZnVuY3Rpb24gKHJlZGlyZWN0VVJJcywgY29udGludWF0aW9uKSB7XG4gIHZhciBwcm9taXNlLCBpLCBzdWNjZXNzQ2FsbGJhY2s7XG4gIHN1Y2Nlc3NDYWxsYmFjayA9IGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgIHRoaXMub25nb2luZ1tyZXN1bHQuc3RhdGVdID0gdGhpcy5oYW5kbGVyc1tpXTtcbiAgICBjb250aW51YXRpb24ocmVzdWx0KTtcbiAgfS5iaW5kKHRoaXMpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCB0aGlzLmhhbmRsZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKHRoaXMuaGFuZGxlcnNbaV0uaW5pdGlhdGVPQXV0aChyZWRpcmVjdFVSSXMsIHN1Y2Nlc3NDYWxsYmFjaykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgLy9JZiBoZXJlLCB3ZSBoYXZlIG5vIGNvbXBhdGlibGUgcHJvdmlkZXJzXG4gIGNvbnRpbnVhdGlvbihudWxsLCB7XG4gICAgJ2VycmNvZGUnOiAnVU5LTk9XTicsXG4gICAgJ21lc3NhZ2UnOiAnTm8gcmVxdWVzdGVkIHJlZGlyZWN0cyBjYW4gYmUgaGFuZGxlZC4nXG4gIH0pO1xuICByZXR1cm47XG59O1xuXG4vKipcbiAqIG9BdXRoIGNsaWVudC1zaWRlIGZsb3cgLSBsYXVuY2ggdGhlIHByb3ZpZGVkIFVSTFxuICogVGhpcyBtdXN0IGJlIGNhbGxlZCBhZnRlciBpbml0aWF0ZU9BdXRoIHdpdGggdGhlIHJldHVybmVkIHN0YXRlIG9iamVjdFxuICpcbiAqIEBtZXRob2QgbGF1bmNoQXV0aEZsb3dcbiAqIEBwYXJhbSB7U3RyaW5nfSBhdXRoVXJsIC0gVGhlIFVSTCB0aGF0IGluaXRpYXRlcyB0aGUgYXV0aCBmbG93LlxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgc3RyaW5nPn0gc3RhdGVPYmogLSBUaGUgcmV0dXJuIHZhbHVlIGZyb20gaW5pdGlhdGVPQXV0aFxuICogQHBhcmFtIHtCb29sZWFufSBpbnRlcmFjdGl2ZSAtIFdoZXRoZXIgdG8gbGF1bmNoIGFuIGludGVyYWN0aXZlIE9BdXRoIGZsb3cuXG4gKiAgICBEZWZhdWx0cyB0byB0cnVlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29udGludWF0aW9uIC0gRnVuY3Rpb24gdG8gY2FsbCB3aGVuIGNvbXBsZXRlXG4gKiAgICBFeHBlY3RlZCB0byBzZWUgYSBTdHJpbmcgdmFsdWUgdGhhdCBpcyB0aGUgcmVzcG9uc2UgVXJsIGNvbnRhaW5pbmcgdGhlIGFjY2VzcyB0b2tlblxuICovXG5PQXV0aC5wcm90b3R5cGUubGF1bmNoQXV0aEZsb3cgPSBmdW5jdGlvbihhdXRoVXJsLCBzdGF0ZU9iaiwgaW50ZXJhY3RpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51YXRpb24pIHtcbiAgaWYgKCF0aGlzLm9uZ29pbmcuaGFzT3duUHJvcGVydHkoc3RhdGVPYmouc3RhdGUpKSB7XG4gICAgY29udGludWF0aW9uKHVuZGVmaW5lZCwge1xuICAgICAgJ2VycmNvZGUnOiAnVU5LTk9XTicsXG4gICAgICAnbWVzc2FnZSc6ICdZb3UgbXVzdCBiZWdpbiB0aGUgb0F1dGggZmxvdyB3aXRoIGluaXRpYXRlT0F1dGggZmlyc3QnXG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChpbnRlcmFjdGl2ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaW50ZXJhY3RpdmUgPSB0cnVlO1xuICB9XG4gIHRoaXMub25nb2luZ1tzdGF0ZU9iai5zdGF0ZV0ubGF1bmNoQXV0aEZsb3coXG4gICAgICBhdXRoVXJsLCBzdGF0ZU9iaiwgaW50ZXJhY3RpdmUsIGNvbnRpbnVhdGlvbik7XG4gIGRlbGV0ZSB0aGlzLm9uZ29pbmdbc3RhdGVPYmouc3RhdGVdO1xufTtcblxuZXhwb3J0cy5yZWdpc3RlciA9IE9BdXRoLnJlZ2lzdGVyO1xuZXhwb3J0cy5yZXNldCA9IE9BdXRoLnJlc2V0O1xuZXhwb3J0cy5wcm92aWRlciA9IE9BdXRoLmJpbmQodGhpcywgW10pO1xuZXhwb3J0cy5uYW1lID0gJ2NvcmUub2F1dGgnO1xuIiwiLypnbG9iYWxzIGNvbnNvbGUsIFJUQ1BlZXJDb25uZWN0aW9uLCB3ZWJraXRSVENQZWVyQ29ubmVjdGlvbiAqL1xuLypnbG9iYWxzIG1velJUQ1BlZXJDb25uZWN0aW9uLCBSVENTZXNzaW9uRGVzY3JpcHRpb24sIFJUQ0ljZUNhbmRpZGF0ZSAqL1xuLypnbG9iYWxzIG1velJUQ1Nlc3Npb25EZXNjcmlwdGlvbiwgbW96UlRDSWNlQ2FuZGlkYXRlICovXG4vKmdsb2JhbHMgQXJyYXlCdWZmZXIsIEJsb2IgKi9cbi8qanNsaW50IGluZGVudDoyLHNsb3BweTp0cnVlLG5vZGU6dHJ1ZSAqL1xuLyoqXG4gKiBEYXRhUGVlciAtIGEgY2xhc3MgdGhhdCB3cmFwcyBwZWVyIGNvbm5lY3Rpb25zIGFuZCBkYXRhIGNoYW5uZWxzLlxuICovXG4vLyBUT0RPOiBjaGVjayB0aGF0IEhhbmRsaW5nIG9mIHByYW5zd2VyIGlzIHRyZWF0ZWQgYXBwcm9wcmlhdGVseS5cbnZhciBTaW1wbGVEYXRhUGVlclN0YXRlID0ge1xuICBESVNDT05ORUNURUQ6ICdESVNDT05ORUNURUQnLFxuICBDT05ORUNUSU5HOiAnQ09OTkVDVElORycsXG4gIENPTk5FQ1RFRDogJ0NPTk5FQ1RFRCdcbn07XG5cbmZ1bmN0aW9uIFNpbXBsZURhdGFQZWVyKHBlZXJOYW1lLCBzdHVuU2VydmVycywgZGF0YUNoYW5uZWxDYWxsYmFja3MsIG1vY2tzKSB7XG4gIHZhciBjb25zdHJhaW50cyxcbiAgICBjb25maWcsXG4gICAgaTtcbiAgdGhpcy5wZWVyTmFtZSA9IHBlZXJOYW1lO1xuICB0aGlzLmNoYW5uZWxzID0ge307XG4gIHRoaXMuZGF0YUNoYW5uZWxDYWxsYmFja3MgPSBkYXRhQ2hhbm5lbENhbGxiYWNrcztcbiAgdGhpcy5vbkNvbm5lY3RlZFF1ZXVlID0gW107XG5cbiAgaWYgKHR5cGVvZiBtb2Nrcy5SVENQZWVyQ29ubmVjdGlvbiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHRoaXMuUlRDUGVlckNvbm5lY3Rpb24gPSBtb2Nrcy5SVENQZWVyQ29ubmVjdGlvbjtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygd2Via2l0UlRDUGVlckNvbm5lY3Rpb24gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB0aGlzLlJUQ1BlZXJDb25uZWN0aW9uID0gd2Via2l0UlRDUGVlckNvbm5lY3Rpb247XG4gIH0gZWxzZSBpZiAodHlwZW9mIG1velJUQ1BlZXJDb25uZWN0aW9uICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdGhpcy5SVENQZWVyQ29ubmVjdGlvbiA9IG1velJUQ1BlZXJDb25uZWN0aW9uO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgZW52aXJvbm1lbnQgZG9lcyBub3QgYXBwZWFyIHRvIHN1cHBvcnQgUlRDUGVlckNvbm5lY3Rpb25cIik7XG4gIH1cblxuICBpZiAodHlwZW9mIG1vY2tzLlJUQ1Nlc3Npb25EZXNjcmlwdGlvbiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHRoaXMuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uID0gbW9ja3MuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBSVENTZXNzaW9uRGVzY3JpcHRpb24gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB0aGlzLlJUQ1Nlc3Npb25EZXNjcmlwdGlvbiA9IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbjtcbiAgfSBlbHNlIGlmICh0eXBlb2YgbW96UlRDU2Vzc2lvbkRlc2NyaXB0aW9uICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdGhpcy5SVENTZXNzaW9uRGVzY3JpcHRpb24gPSBtb3pSVENTZXNzaW9uRGVzY3JpcHRpb247XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBlbnZpcm9ubWVudCBkb2VzIG5vdCBhcHBlYXIgdG8gc3VwcG9ydCBSVENTZXNzaW9uRGVzY3JpcHRpb25cIik7XG4gIH1cblxuICBpZiAodHlwZW9mIG1vY2tzLlJUQ0ljZUNhbmRpZGF0ZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHRoaXMuUlRDSWNlQ2FuZGlkYXRlID0gbW9ja3MuUlRDSWNlQ2FuZGlkYXRlO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBSVENJY2VDYW5kaWRhdGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB0aGlzLlJUQ0ljZUNhbmRpZGF0ZSA9IFJUQ0ljZUNhbmRpZGF0ZTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgbW96UlRDSWNlQ2FuZGlkYXRlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdGhpcy5SVENJY2VDYW5kaWRhdGUgPSBtb3pSVENJY2VDYW5kaWRhdGU7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBlbnZpcm9ubWVudCBkb2VzIG5vdCBhcHBlYXIgdG8gc3VwcG9ydCBSVENJY2VDYW5kaWRhdGVcIik7XG4gIH1cblxuXG4gIGNvbnN0cmFpbnRzID0ge1xuICAgIG9wdGlvbmFsOiBbe0R0bHNTcnRwS2V5QWdyZWVtZW50OiB0cnVlfV1cbiAgfTtcbiAgLy8gQSB3YXkgdG8gc3BlYWsgdG8gdGhlIHBlZXIgdG8gc2VuZCBTRFAgaGVhZGVycyBldGMuXG4gIHRoaXMuc2VuZFNpZ25hbE1lc3NhZ2UgPSBudWxsO1xuXG4gIHRoaXMucGMgPSBudWxsOyAgLy8gVGhlIHBlZXIgY29ubmVjdGlvbi5cbiAgLy8gR2V0IFRVUk4gc2VydmVycyBmb3IgdGhlIHBlZXIgY29ubmVjdGlvbi5cbiAgY29uZmlnID0ge2ljZVNlcnZlcnM6IFtdfTtcbiAgZm9yIChpID0gMDsgaSA8IHN0dW5TZXJ2ZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uZmlnLmljZVNlcnZlcnMucHVzaCh7XG4gICAgICAndXJsJyA6IHN0dW5TZXJ2ZXJzW2ldXG4gICAgfSk7XG4gIH1cbiAgdGhpcy5wYyA9IG5ldyB0aGlzLlJUQ1BlZXJDb25uZWN0aW9uKGNvbmZpZywgY29uc3RyYWludHMpO1xuICAvLyBBZGQgYmFzaWMgZXZlbnQgaGFuZGxlcnMuXG4gIHRoaXMucGMuYWRkRXZlbnRMaXN0ZW5lcihcImljZWNhbmRpZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25JY2VDYWxsYmFjay5iaW5kKHRoaXMpKTtcbiAgdGhpcy5wYy5hZGRFdmVudExpc3RlbmVyKFwibmVnb3RpYXRpb25uZWVkZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uTmVnb3RpYXRpb25OZWVkZWQuYmluZCh0aGlzKSk7XG4gIHRoaXMucGMuYWRkRXZlbnRMaXN0ZW5lcihcImRhdGFjaGFubmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkRhdGFDaGFubmVsLmJpbmQodGhpcykpO1xuICB0aGlzLnBjLmFkZEV2ZW50TGlzdGVuZXIoXCJzaWduYWxpbmdzdGF0ZWNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8gVE9ETzogY29tZSB1cCB3aXRoIGEgYmV0dGVyIHdheSB0byBkZXRlY3QgY29ubmVjdGlvbi4gIFdlIHN0YXJ0IG91dFxuICAgIC8vIGFzIFwic3RhYmxlXCIgZXZlbiBiZWZvcmUgd2UgYXJlIGNvbm5lY3RlZC5cbiAgICAvLyBUT0RPOiB0aGlzIGlzIG5vdCBmaXJlZCBmb3IgY29ubmVjdGlvbnMgY2xvc2VkIGJ5IHRoZSBvdGhlciBzaWRlLlxuICAgIC8vIFRoaXMgd2lsbCBiZSBmaXhlZCBpbiBtMzcsIGF0IHRoYXQgcG9pbnQgd2Ugc2hvdWxkIGRpc3BhdGNoIGFuIG9uQ2xvc2VcbiAgICAvLyBldmVudCBoZXJlIGZvciBmcmVlZG9tLnRyYW5zcG9ydCB0byBwaWNrIHVwLlxuICAgIGlmICh0aGlzLnBjLnNpZ25hbGluZ1N0YXRlID09PSBcInN0YWJsZVwiKSB7XG4gICAgICB0aGlzLnBjU3RhdGUgPSBTaW1wbGVEYXRhUGVlclN0YXRlLkNPTk5FQ1RFRDtcbiAgICAgIHRoaXMub25Db25uZWN0ZWRRdWV1ZS5tYXAoZnVuY3Rpb24gKGNhbGxiYWNrKSB7IGNhbGxiYWNrKCk7IH0pO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcbiAgLy8gVGhpcyBzdGF0ZSB2YXJpYWJsZSBpcyB1c2VkIHRvIGZha2Ugb2ZmZXIvYW5zd2VyIHdoZW4gdGhleSBhcmUgd3JvbmdseVxuICAvLyByZXF1ZXN0ZWQgYW5kIHdlIHJlYWxseSBqdXN0IG5lZWQgdG8gcmV1c2Ugd2hhdCB3ZSBhbHJlYWR5IGhhdmUuXG4gIHRoaXMucGNTdGF0ZSA9IFNpbXBsZURhdGFQZWVyU3RhdGUuRElTQ09OTkVDVEVEO1xuXG4gIC8vIE5vdGU6IHRvIGFjdHVhbGx5IGRvIHNvbWV0aGluZyB3aXRoIGRhdGEgY2hhbm5lbHMgb3BlbmVkIGJ5IGEgcGVlciwgd2VcbiAgLy8gbmVlZCBzb21lb25lIHRvIG1hbmFnZSBcImRhdGFjaGFubmVsXCIgZXZlbnQuXG59XG5cblNpbXBsZURhdGFQZWVyLnByb3RvdHlwZS5jcmVhdGVPZmZlciA9IGZ1bmN0aW9uIChjb25zdGFpbnRzLCBjb250aW51YXRpb24pIHtcbiAgdGhpcy5wYy5jcmVhdGVPZmZlcihjb250aW51YXRpb24sIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmVycm9yKCdjb3JlLnBlZXJjb25uZWN0aW9uIGNyZWF0ZU9mZmVyIGZhaWxlZC4nKTtcbiAgfSwgY29uc3RhaW50cyk7XG59O1xuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUucnVuV2hlbkNvbm5lY3RlZCA9IGZ1bmN0aW9uIChmdW5jKSB7XG4gIGlmICh0aGlzLnBjU3RhdGUgPT09IFNpbXBsZURhdGFQZWVyU3RhdGUuQ09OTkVDVEVEKSB7XG4gICAgZnVuYygpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMub25Db25uZWN0ZWRRdWV1ZS5wdXNoKGZ1bmMpO1xuICB9XG59O1xuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChjaGFubmVsSWQsIG1lc3NhZ2UsIGNvbnRpbnVhdGlvbikge1xuICB0aGlzLmNoYW5uZWxzW2NoYW5uZWxJZF0uc2VuZChtZXNzYWdlKTtcbiAgY29udGludWF0aW9uKCk7XG59O1xuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUub3BlbkRhdGFDaGFubmVsID0gZnVuY3Rpb24gKGNoYW5uZWxJZCwgY29udGludWF0aW9uKSB7XG4gIHZhciBkYXRhQ2hhbm5lbCA9IHRoaXMucGMuY3JlYXRlRGF0YUNoYW5uZWwoY2hhbm5lbElkLCB7fSk7XG4gIGRhdGFDaGFubmVsLm9ub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmFkZERhdGFDaGFubmVsKGNoYW5uZWxJZCwgZGF0YUNoYW5uZWwpO1xuICAgIGNvbnRpbnVhdGlvbigpO1xuICB9LmJpbmQodGhpcyk7XG4gIGRhdGFDaGFubmVsLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgLy9AKHJ5c2NoZW5nKSB0b2RvIC0gcmVwbGFjZSB3aXRoIGVycm9ycyB0aGF0IHdvcmsgYWNyb3NzIHRoZSBpbnRlcmZhY2VcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgY29udGludWF0aW9uKHVuZGVmaW5lZCwgZXJyKTtcbiAgfTtcbiAgLy8gRmlyZWZveCBkb2VzIG5vdCBmaXJlIFwibmVnb3RpYXRpb25uZWVkZWRcIiwgc28gd2UgbmVlZCB0b1xuICAvLyBuZWdvdGF0ZSBoZXJlIGlmIHdlIGFyZSBub3QgY29ubmVjdGVkLlxuICAvLyBTZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9ODQwNzI4XG4gIGlmICh0eXBlb2YgbW96UlRDUGVlckNvbm5lY3Rpb24gIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgIHRoaXMucGNTdGF0ZSA9PT0gU2ltcGxlRGF0YVBlZXJTdGF0ZS5ESVNDT05ORUNURUQpIHtcbiAgICB0aGlzLm5lZ290aWF0ZUNvbm5lY3Rpb24oKTtcbiAgfVxufTtcblxuU2ltcGxlRGF0YVBlZXIucHJvdG90eXBlLmNsb3NlQ2hhbm5lbCA9IGZ1bmN0aW9uIChjaGFubmVsSWQpIHtcbiAgaWYgKHRoaXMuY2hhbm5lbHNbY2hhbm5lbElkXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5jaGFubmVsc1tjaGFubmVsSWRdLmNsb3NlKCk7XG4gICAgZGVsZXRlIHRoaXMuY2hhbm5lbHNbY2hhbm5lbElkXTtcbiAgfVxufTtcblxuU2ltcGxlRGF0YVBlZXIucHJvdG90eXBlLmdldEJ1ZmZlcmVkQW1vdW50ID0gZnVuY3Rpb24gKGNoYW5uZWxJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51YXRpb24pIHtcbiAgaWYgKHRoaXMuY2hhbm5lbHNbY2hhbm5lbElkXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGRhdGFDaGFubmVsID0gdGhpcy5jaGFubmVsc1tjaGFubmVsSWRdO1xuICAgIHJldHVybiBkYXRhQ2hhbm5lbC5idWZmZXJlZEFtb3VudDtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXCJObyBjaGFubmVsIHdpdGggaWQ6IFwiICsgY2hhbm5lbElkKTtcbn07XG5cblNpbXBsZURhdGFQZWVyLnByb3RvdHlwZS5zZXRTZW5kU2lnbmFsTWVzc2FnZSA9IGZ1bmN0aW9uIChzZW5kU2lnbmFsTWVzc2FnZUZuKSB7XG4gIHRoaXMuc2VuZFNpZ25hbE1lc3NhZ2UgPSBzZW5kU2lnbmFsTWVzc2FnZUZuO1xufTtcblxuLy8gSGFuZGxlIGEgbWVzc2FnZSBzZW5kIG9uIHRoZSBzaWduYWxsaW5nIGNoYW5uZWwgdG8gdGhpcyBwZWVyLlxuU2ltcGxlRGF0YVBlZXIucHJvdG90eXBlLmhhbmRsZVNpZ25hbE1lc3NhZ2UgPSBmdW5jdGlvbiAobWVzc2FnZVRleHQpIHtcbiAgLy9jb25zb2xlLmxvZyh0aGlzLnBlZXJOYW1lICsgXCI6IFwiICsgXCJoYW5kbGVTaWduYWxNZXNzYWdlOiBcXG5cIiArIG1lc3NhZ2VUZXh0KTtcbiAgdmFyIGpzb24gPSBKU09OLnBhcnNlKG1lc3NhZ2VUZXh0KSxcbiAgICBpY2VfY2FuZGlkYXRlO1xuXG4gIC8vIFRPRE86IElmIHdlIGFyZSBvZmZlcmluZyBhbmQgdGhleSBhcmUgYWxzbyBvZmZlcnJpbmcgYXQgdGhlIHNhbWUgdGltZSxcbiAgLy8gcGljayB0aGUgb25lIHdobyBoYXMgdGhlIGxvd2VyIHJhbmRvbUlkP1xuICAvLyAodGhpcy5wYy5zaWduYWxpbmdTdGF0ZSA9PSBcImhhdmUtbG9jYWwtb2ZmZXJcIiAmJiBqc29uLnNkcCAmJlxuICAvLyAgICBqc29uLnNkcC50eXBlID09IFwib2ZmZXJcIiAmJiBqc29uLnNkcC5yYW5kb21JZCA8IHRoaXMubG9jYWxSYW5kb21JZClcbiAgaWYgKGpzb24uc2RwKSB7XG4gICAgLy8gU2V0IHRoZSByZW1vdGUgZGVzY3JpcHRpb24uXG4gICAgdGhpcy5wYy5zZXRSZW1vdGVEZXNjcmlwdGlvbihcbiAgICAgIG5ldyB0aGlzLlJUQ1Nlc3Npb25EZXNjcmlwdGlvbihqc29uLnNkcCksXG4gICAgICAvLyBTdWNjZXNzXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5wZWVyTmFtZSArIFwiOiBzZXRSZW1vdGVEZXNjcmlwdGlvbiBzdWNjZWVkZWRcIik7XG4gICAgICAgIGlmICh0aGlzLnBjLnJlbW90ZURlc2NyaXB0aW9uLnR5cGUgPT09IFwib2ZmZXJcIikge1xuICAgICAgICAgIHRoaXMucGMuY3JlYXRlQW5zd2VyKHRoaXMub25EZXNjcmlwdGlvbi5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9LmJpbmQodGhpcyksXG4gICAgICAvLyBGYWlsdXJlXG4gICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKHRoaXMucGVlck5hbWUgKyBcIjogXCIgK1xuICAgICAgICAgICAgXCJzZXRSZW1vdGVEZXNjcmlwdGlvbiBmYWlsZWQ6XCIsIGUpO1xuICAgICAgfS5iaW5kKHRoaXMpXG4gICAgKTtcbiAgfSBlbHNlIGlmIChqc29uLmNhbmRpZGF0ZSkge1xuICAgIC8vIEFkZCByZW1vdGUgaWNlIGNhbmRpZGF0ZS5cbiAgICAvL2NvbnNvbGUubG9nKHRoaXMucGVlck5hbWUgKyBcIjogQWRkaW5nIGljZSBjYW5kaWRhdGU6IFwiICsgSlNPTi5zdHJpbmdpZnkoanNvbi5jYW5kaWRhdGUpKTtcbiAgICBpY2VfY2FuZGlkYXRlID0gbmV3IHRoaXMuUlRDSWNlQ2FuZGlkYXRlKGpzb24uY2FuZGlkYXRlKTtcbiAgICB0aGlzLnBjLmFkZEljZUNhbmRpZGF0ZShpY2VfY2FuZGlkYXRlKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLndhcm4odGhpcy5wZWVyTmFtZSArIFwiOiBcIiArXG4gICAgICAgIFwiaGFuZGxlU2lnbmFsTWVzc2FnZSBnb3QgdW5leHBlY3RlZCBtZXNzYWdlOiBcIiwgbWVzc2FnZVRleHQpO1xuICB9XG59O1xuXG4vLyBDb25uZWN0IHRvIHRoZSBwZWVyIGJ5IHRoZSBzaWduYWxsaW5nIGNoYW5uZWwuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUubmVnb3RpYXRlQ29ubmVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5wY1N0YXRlID0gU2ltcGxlRGF0YVBlZXJTdGF0ZS5DT05ORUNUSU5HO1xuICB0aGlzLnBjLmNyZWF0ZU9mZmVyKFxuICAgIHRoaXMub25EZXNjcmlwdGlvbi5iaW5kKHRoaXMpLFxuICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKHRoaXMucGVlck5hbWUgKyBcIjogXCIgK1xuICAgICAgICAgIFwiY3JlYXRlT2ZmZXIgZmFpbGVkOiBcIiwgZS50b1N0cmluZygpKTtcbiAgICAgIHRoaXMucGNTdGF0ZSA9IFNpbXBsZURhdGFQZWVyU3RhdGUuRElTQ09OTkVDVEVEO1xuICAgIH0uYmluZCh0aGlzKVxuICApO1xufTtcblxuU2ltcGxlRGF0YVBlZXIucHJvdG90eXBlLmlzQ2xvc2VkID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gIXRoaXMucGMgfHwgdGhpcy5wYy5zaWduYWxpbmdTdGF0ZSA9PT0gXCJjbG9zZWRcIjtcbn07XG5cblNpbXBsZURhdGFQZWVyLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCF0aGlzLmlzQ2xvc2VkKCkpIHtcbiAgICB0aGlzLnBjLmNsb3NlKCk7XG4gIH1cbiAgLy9jb25zb2xlLmxvZyh0aGlzLnBlZXJOYW1lICsgXCI6IFwiICsgXCJDbG9zZWQgcGVlciBjb25uZWN0aW9uLlwiKTtcbn07XG5cblNpbXBsZURhdGFQZWVyLnByb3RvdHlwZS5hZGREYXRhQ2hhbm5lbCA9IGZ1bmN0aW9uIChjaGFubmVsSWQsIGNoYW5uZWwpIHtcbiAgdmFyIGNhbGxiYWNrcyA9IHRoaXMuZGF0YUNoYW5uZWxDYWxsYmFja3M7XG4gIHRoaXMuY2hhbm5lbHNbY2hhbm5lbElkXSA9IGNoYW5uZWw7XG5cbiAgaWYgKGNoYW5uZWwucmVhZHlTdGF0ZSA9PT0gXCJjb25uZWN0aW5nXCIpIHtcbiAgICBjaGFubmVsLm9ub3BlbiA9IGNhbGxiYWNrcy5vbk9wZW5Gbi5iaW5kKHRoaXMsIGNoYW5uZWwsIHtsYWJlbDogY2hhbm5lbElkfSk7XG4gIH1cblxuICBjaGFubmVsLm9uY2xvc2UgPSBjYWxsYmFja3Mub25DbG9zZUZuLmJpbmQodGhpcywgY2hhbm5lbCwge2xhYmVsOiBjaGFubmVsSWR9KTtcblxuICBjaGFubmVsLm9ubWVzc2FnZSA9IGNhbGxiYWNrcy5vbk1lc3NhZ2VGbi5iaW5kKHRoaXMsIGNoYW5uZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsOiBjaGFubmVsSWR9KTtcblxuICBjaGFubmVsLm9uZXJyb3IgPSBjYWxsYmFja3Mub25FcnJvckZuLmJpbmQodGhpcywgY2hhbm5lbCwge2xhYmVsOiBjaGFubmVsfSk7XG59O1xuXG4vLyBXaGVuIHdlIGdldCBvdXIgZGVzY3JpcHRpb24sIHdlIHNldCBpdCB0byBiZSBvdXIgbG9jYWwgZGVzY3JpcHRpb24gYW5kXG4vLyBzZW5kIGl0IHRvIHRoZSBwZWVyLlxuU2ltcGxlRGF0YVBlZXIucHJvdG90eXBlLm9uRGVzY3JpcHRpb24gPSBmdW5jdGlvbiAoZGVzY3JpcHRpb24pIHtcbiAgaWYgKHRoaXMuc2VuZFNpZ25hbE1lc3NhZ2UpIHtcbiAgICB0aGlzLnBjLnNldExvY2FsRGVzY3JpcHRpb24oXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnBlZXJOYW1lICsgXCI6IHNldExvY2FsRGVzY3JpcHRpb24gc3VjY2VlZGVkXCIpO1xuICAgICAgICB0aGlzLnNlbmRTaWduYWxNZXNzYWdlKEpTT04uc3RyaW5naWZ5KHsnc2RwJzogZGVzY3JpcHRpb259KSk7XG4gICAgICB9LmJpbmQodGhpcyksXG4gICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKHRoaXMucGVlck5hbWUgKyBcIjogXCIgK1xuICAgICAgICAgICAgXCJzZXRMb2NhbERlc2NyaXB0aW9uIGZhaWxlZDpcIiwgZSk7XG4gICAgICB9LmJpbmQodGhpcylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUuZXJyb3IodGhpcy5wZWVyTmFtZSArIFwiOiBcIiArXG4gICAgICAgIFwiX29uRGVzY3JpcHRpb246IF9zZW5kU2lnbmFsTWVzc2FnZSBpcyBub3Qgc2V0LCBzbyB3ZSBkaWQgbm90IFwiICtcbiAgICAgICAgICAgIFwic2V0IHRoZSBsb2NhbCBkZXNjcmlwdGlvbi4gXCIpO1xuICB9XG59O1xuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUub25OZWdvdGlhdGlvbk5lZWRlZCA9IGZ1bmN0aW9uIChlKSB7XG4gIC8vY29uc29sZS5sb2codGhpcy5wZWVyTmFtZSArIFwiOiBcIiArIFwib25OZWdvdGlhdGlvbk5lZWRlZFwiLFxuICAvLyAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHRoaXMuX3BjKSwgZSk7XG4gIGlmICh0aGlzLnBjU3RhdGUgIT09IFNpbXBsZURhdGFQZWVyU3RhdGUuRElTQ09OTkVDVEVEKSB7XG4gICAgLy8gTmVnb3RpYXRpb24gbWVzc2FnZXMgYXJlIGZhbHNlbHkgcmVxdWVzdGVkIGZvciBuZXcgZGF0YSBjaGFubmVscy5cbiAgICAvLyAgIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3Avd2VicnRjL2lzc3Vlcy9kZXRhaWw/aWQ9MjQzMVxuICAgIC8vIFRoaXMgY29kZSBpcyBhIGhhY2sgdG8gc2ltcGx5IHJlc2V0IHRoZSBzYW1lIGxvY2FsIGFuZCByZW1vdGVcbiAgICAvLyBkZXNjcmlwdGlvbiB3aGljaCB3aWxsIHRyaWdnZXIgdGhlIGFwcHJvcHJpYXRlIGRhdGEgY2hhbm5lbCBvcGVuIGV2ZW50LlxuICAgIC8vIFRPRE86IGZpeC9yZW1vdmUgdGhpcyB3aGVuIENocm9tZSBpc3N1ZSBpcyBmaXhlZC5cbiAgICB2YXIgbG9nU3VjY2VzcyA9IGZ1bmN0aW9uIChvcCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnBlZXJOYW1lICsgXCI6IFwiICsgb3AgKyBcIiBzdWNjZWVkZWQgXCIpO1xuICAgICAgfS5iaW5kKHRoaXMpO1xuICAgIH0uYmluZCh0aGlzKSxcbiAgICAgIGxvZ0ZhaWwgPSBmdW5jdGlvbiAob3ApIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnBlZXJOYW1lICsgXCI6IFwiICsgb3AgKyBcIiBmYWlsZWQ6IFwiICsgZSk7XG4gICAgICAgIH0uYmluZCh0aGlzKTtcbiAgICAgIH0uYmluZCh0aGlzKTtcbiAgICBpZiAodGhpcy5wYy5sb2NhbERlc2NyaXB0aW9uICYmIHRoaXMucGMucmVtb3RlRGVzY3JpcHRpb24gJiZcbiAgICAgICAgdGhpcy5wYy5sb2NhbERlc2NyaXB0aW9uLnR5cGUgPT09IFwib2ZmZXJcIikge1xuICAgICAgdGhpcy5wYy5zZXRMb2NhbERlc2NyaXB0aW9uKHRoaXMucGMubG9jYWxEZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nU3VjY2VzcyhcInNldExvY2FsRGVzY3JpcHRpb25cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ0ZhaWwoXCJzZXRMb2NhbERlc2NyaXB0aW9uXCIpKTtcbiAgICAgIHRoaXMucGMuc2V0UmVtb3RlRGVzY3JpcHRpb24odGhpcy5wYy5yZW1vdGVEZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ1N1Y2Nlc3MoXCJzZXRSZW1vdGVEZXNjcmlwdGlvblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ0ZhaWwoXCJzZXRSZW1vdGVEZXNjcmlwdGlvblwiKSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBjLmxvY2FsRGVzY3JpcHRpb24gJiYgdGhpcy5wYy5yZW1vdGVEZXNjcmlwdGlvbiAmJlxuICAgICAgICB0aGlzLnBjLmxvY2FsRGVzY3JpcHRpb24udHlwZSA9PT0gXCJhbnN3ZXJcIikge1xuICAgICAgdGhpcy5wYy5zZXRSZW1vdGVEZXNjcmlwdGlvbih0aGlzLnBjLnJlbW90ZURlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nU3VjY2VzcyhcInNldFJlbW90ZURlc2NyaXB0aW9uXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nRmFpbChcInNldFJlbW90ZURlc2NyaXB0aW9uXCIpKTtcbiAgICAgIHRoaXMucGMuc2V0TG9jYWxEZXNjcmlwdGlvbih0aGlzLnBjLmxvY2FsRGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ1N1Y2Nlc3MoXCJzZXRMb2NhbERlc2NyaXB0aW9uXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dGYWlsKFwic2V0TG9jYWxEZXNjcmlwdGlvblwiKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IodGhpcy5wZWVyTmFtZSArICcsIG9uTmVnb3RpYXRpb25OZWVkZWQgZmFpbGVkJyk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLm5lZ290aWF0ZUNvbm5lY3Rpb24oKTtcbn07XG5cblNpbXBsZURhdGFQZWVyLnByb3RvdHlwZS5vbkljZUNhbGxiYWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGlmIChldmVudC5jYW5kaWRhdGUpIHtcbiAgICAvLyBTZW5kIEljZUNhbmRpZGF0ZSB0byBwZWVyLlxuICAgIC8vY29uc29sZS5sb2codGhpcy5wZWVyTmFtZSArIFwiOiBcIiArIFwiaWNlIGNhbGxiYWNrIHdpdGggY2FuZGlkYXRlXCIsIGV2ZW50KTtcbiAgICBpZiAodGhpcy5zZW5kU2lnbmFsTWVzc2FnZSkge1xuICAgICAgdGhpcy5zZW5kU2lnbmFsTWVzc2FnZShKU09OLnN0cmluZ2lmeSh7J2NhbmRpZGF0ZSc6IGV2ZW50LmNhbmRpZGF0ZX0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKHRoaXMucGVlck5hbWUgKyBcIjogXCIgKyBcIl9vbkRlc2NyaXB0aW9uOiBfc2VuZFNpZ25hbE1lc3NhZ2UgaXMgbm90IHNldC5cIik7XG4gICAgfVxuICB9XG59O1xuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUub25TaWduYWxpbmdTdGF0ZUNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgLy9jb25zb2xlLmxvZyh0aGlzLnBlZXJOYW1lICsgXCI6IFwiICsgXCJvblNpZ25hbGluZ1N0YXRlQ2hhbmdlOiBcIiwgdGhpcy5fcGMuc2lnbmFsaW5nU3RhdGUpO1xuICBpZiAodGhpcy5wYy5zaWduYWxpbmdTdGF0ZSA9PT0gXCJzdGFibGVcIikge1xuICAgIHRoaXMucGNTdGF0ZSA9IFNpbXBsZURhdGFQZWVyU3RhdGUuQ09OTkVDVEVEO1xuICAgIHRoaXMub25Db25uZWN0ZWRRdWV1ZS5tYXAoZnVuY3Rpb24gKGNhbGxiYWNrKSB7IGNhbGxiYWNrKCk7IH0pO1xuICB9XG59O1xuXG5TaW1wbGVEYXRhUGVlci5wcm90b3R5cGUub25EYXRhQ2hhbm5lbCA9IGZ1bmN0aW9uIChldmVudCkge1xuICB0aGlzLmFkZERhdGFDaGFubmVsKGV2ZW50LmNoYW5uZWwubGFiZWwsIGV2ZW50LmNoYW5uZWwpO1xuICAvLyBSVENEYXRhQ2hhbm5lbHMgY3JlYXRlZCBieSBhIFJUQ0RhdGFDaGFubmVsRXZlbnQgaGF2ZSBhbiBpbml0aWFsXG4gIC8vIHN0YXRlIG9mIG9wZW4sIHNvIHRoZSBvbm9wZW4gZXZlbnQgZm9yIHRoZSBjaGFubmVsIHdpbGwgbm90XG4gIC8vIGZpcmUuIFdlIG5lZWQgdG8gZmlyZSB0aGUgb25PcGVuRGF0YUNoYW5uZWwgZXZlbnQgaGVyZVxuICAvLyBodHRwOi8vd3d3LnczLm9yZy9UUi93ZWJydGMvI2lkbC1kZWYtUlRDRGF0YUNoYW5uZWxTdGF0ZVxuXG4gIC8vIEZpcmVmb3ggY2hhbm5lbHMgZG8gbm90IGhhdmUgYW4gaW5pdGlhbCBzdGF0ZSBvZiBcIm9wZW5cIlxuICAvLyBTZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTAwMDQ3OFxuICBpZiAoZXZlbnQuY2hhbm5lbC5yZWFkeVN0YXRlID09PSBcIm9wZW5cIikge1xuICAgIHRoaXMuZGF0YUNoYW5uZWxDYWxsYmFja3Mub25PcGVuRm4oZXZlbnQuY2hhbm5lbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbDogZXZlbnQuY2hhbm5lbC5sYWJlbH0pO1xuICB9XG59O1xuXG4vLyBfc2lnbmFsbGluZ0NoYW5uZWwgaXMgYSBjaGFubmVsIGZvciBlbWl0dGluZyBldmVudHMgYmFjayB0byB0aGUgZnJlZWRvbSBIdWIuXG5mdW5jdGlvbiBQZWVyQ29ubmVjdGlvbihwb3J0TW9kdWxlLCBkaXNwYXRjaEV2ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgUlRDUGVlckNvbm5lY3Rpb24sIFJUQ1Nlc3Npb25EZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIFJUQ0ljZUNhbmRpZGF0ZSkge1xuICAvLyBDaGFubmVsIGZvciBlbWl0dGluZyBldmVudHMgdG8gY29uc3VtZXIuXG4gIHRoaXMuZGlzcGF0Y2hFdmVudCA9IGRpc3BhdGNoRXZlbnQ7XG5cbiAgLy8gYSAoaG9wZWZ1bGx5IHVuaXF1ZSkgSUQgZm9yIGRlYnVnZ2luZy5cbiAgdGhpcy5wZWVyTmFtZSA9IFwicFwiICsgTWF0aC5yYW5kb20oKTtcblxuICAvLyBUaGlzIGlzIHRoZSBwb3J0QXBwIChkZWZpbmVkIGluIGZyZWVkb20vc3JjL3BvcnQtYXBwLmpzKS4gQSB3YXkgdG8gc3BlYWtcbiAgLy8gdG8gZnJlZWRvbS5cbiAgdGhpcy5mcmVlZG9tTW9kdWxlID0gcG9ydE1vZHVsZS5tb2R1bGU7XG5cbiAgLy8gRm9yIHRlc3RzIHdlIG1heSBtb2NrIG91dCB0aGUgUGVlckNvbm5lY3Rpb24gYW5kXG4gIC8vIFNlc3Npb25EZXNjcmlwdGlvbiBpbXBsZW1lbnRhdGlvbnNcbiAgdGhpcy5SVENQZWVyQ29ubmVjdGlvbiA9IFJUQ1BlZXJDb25uZWN0aW9uO1xuICB0aGlzLlJUQ1Nlc3Npb25EZXNjcmlwdGlvbiA9IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbjtcbiAgdGhpcy5SVENJY2VDYW5kaWRhdGUgPSBSVENJY2VDYW5kaWRhdGU7XG5cbiAgLy8gVGhpcyBpcyB0aGUgYSBjaGFubmVsIHRvIHNlbmQgc2lnbmFsbGluZyBtZXNzYWdlcy5cbiAgdGhpcy5zaWduYWxsaW5nQ2hhbm5lbCA9IG51bGw7XG5cbiAgLy8gVGhlIERhdGFQZWVyIG9iamVjdCBmb3IgdGFsa2luZyB0byB0aGUgcGVlci5cbiAgdGhpcy5wZWVyID0gbnVsbDtcblxuICAvLyBUaGUgQ29yZSBvYmplY3QgZm9yIG1hbmFnaW5nIGNoYW5uZWxzLlxuICB0aGlzLmZyZWVkb21Nb2R1bGUub25jZSgnY29yZScsIGZ1bmN0aW9uIChDb3JlKSB7XG4gICAgdGhpcy5jb3JlID0gbmV3IENvcmUoKTtcbiAgfS5iaW5kKHRoaXMpKTtcbiAgdGhpcy5mcmVlZG9tTW9kdWxlLmVtaXQodGhpcy5mcmVlZG9tTW9kdWxlLmNvbnRyb2xDaGFubmVsLCB7XG4gICAgdHlwZTogJ2NvcmUgcmVxdWVzdCBkZWxlZ2F0ZWQgdG8gcGVlcmNvbm5lY3Rpb24nLFxuICAgIHJlcXVlc3Q6ICdjb3JlJ1xuICB9KTtcbn1cblxuLy8gU3RhcnQgYSBwZWVyIGNvbm5lY3Rpb24gdXNpbmcgdGhlIGdpdmVuIGZyZWVkb21DaGFubmVsSWQgYXMgdGhlIHdheSB0b1xuLy8gY29tbXVuaWNhdGUgd2l0aCB0aGUgcGVlci4gVGhlIGFyZ3VtZW50IHxmcmVlZG9tQ2hhbm5lbElkfCBpcyBhIHdheSB0byBzcGVha1xuLy8gdG8gYW4gaWRlbnRpdHkgcHJvdmlkZSB0byBzZW5kIHRoZW0gU0RQIGhlYWRlcnMgbmVnb3RpYXRlIHRoZSBhZGRyZXNzL3BvcnQgdG9cbi8vIHNldHVwIHRoZSBwZWVyIHRvIHBlZXJDb25uZWN0aW9uLlxuLy9cbi8vIG9wdGlvbnM6IHtcbi8vICAgcGVlck5hbWU6IHN0cmluZywgICAvLyBGb3IgcHJldHR5IHByaW50aW5nIG1lc3NhZ2VzIGFib3V0IHRoaXMgcGVlci5cbi8vICAgZGVidWc6IGJvb2xlYW4gICAgICAgICAgIC8vIHNob3VsZCB3ZSBhZGQgZXh0cmFcbi8vIH1cblBlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5zZXR1cCA9IGZ1bmN0aW9uIChzaWduYWxsaW5nQ2hhbm5lbElkLCBwZWVyTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHVuU2VydmVycywgaW5pdGlhdGVDb25uZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVhdGlvbikge1xuICB0aGlzLnBlZXJOYW1lID0gcGVlck5hbWU7XG4gIHZhciBtb2NrcyA9IHtSVENQZWVyQ29ubmVjdGlvbjogdGhpcy5SVENQZWVyQ29ubmVjdGlvbixcbiAgICAgICAgICAgICAgIFJUQ1Nlc3Npb25EZXNjcmlwdGlvbjogdGhpcy5SVENTZXNzaW9uRGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICBSVENJY2VDYW5kaWRhdGU6IHRoaXMuUlRDSWNlQ2FuZGlkYXRlfSxcbiAgICBzZWxmID0gdGhpcyxcbiAgICBkYXRhQ2hhbm5lbENhbGxiYWNrcyA9IHtcbiAgICAgIC8vIG9uT3BlbkZuIGlzIGNhbGxlZCBhdCB0aGUgcG9pbnQgbWVzc2FnZXMgd2lsbCBhY3R1YWxseSBnZXQgdGhyb3VnaC5cbiAgICAgIG9uT3BlbkZuOiBmdW5jdGlvbiAoZGF0YUNoYW5uZWwsIGluZm8pIHtcbiAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KFwib25PcGVuRGF0YUNoYW5uZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICB7IGNoYW5uZWxJZDogaW5mby5sYWJlbH0pO1xuICAgICAgfSxcbiAgICAgIG9uQ2xvc2VGbjogZnVuY3Rpb24gKGRhdGFDaGFubmVsLCBpbmZvKSB7XG4gICAgICAgIHNlbGYuZGlzcGF0Y2hFdmVudChcIm9uQ2xvc2VEYXRhQ2hhbm5lbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2hhbm5lbElkOiBpbmZvLmxhYmVsfSk7XG4gICAgICB9LFxuICAgICAgLy8gRGVmYXVsdCBvbiByZWFsIG1lc3NhZ2UgcHJpbnRzIGl0IHRvIGNvbnNvbGUuXG4gICAgICBvbk1lc3NhZ2VGbjogZnVuY3Rpb24gKGRhdGFDaGFubmVsLCBpbmZvLCBldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQuZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KCdvblJlY2VpdmVkJywge1xuICAgICAgICAgICAgJ2NoYW5uZWxMYWJlbCc6IGluZm8ubGFiZWwsXG4gICAgICAgICAgICAnYnVmZmVyJzogZXZlbnQuZGF0YVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmRhdGEgaW5zdGFuY2VvZiBCbG9iKSB7XG4gICAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KCdvblJlY2VpdmVkJywge1xuICAgICAgICAgICAgJ2NoYW5uZWxMYWJlbCc6IGluZm8ubGFiZWwsXG4gICAgICAgICAgICAnYmluYXJ5JzogZXZlbnQuZGF0YVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiAoZXZlbnQuZGF0YSkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KCdvblJlY2VpdmVkJywge1xuICAgICAgICAgICAgJ2NoYW5uZWxMYWJlbCc6IGluZm8ubGFiZWwsXG4gICAgICAgICAgICAndGV4dCc6IGV2ZW50LmRhdGFcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIERlZmF1bHQgb24gZXJyb3IsIHByaW50cyBpdC5cbiAgICAgIG9uRXJyb3JGbjogZnVuY3Rpb24gKGRhdGFDaGFubmVsLCBpbmZvLCBlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihkYXRhQ2hhbm5lbC5wZWVyTmFtZSArIFwiOiBkYXRhQ2hhbm5lbChcIiArXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YUNoYW5uZWwuZGF0YUNoYW5uZWwubGFiZWwgKyBcIik6IGVycm9yOiBcIiwgZXJyKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNoYW5uZWxJZCxcbiAgICBvcGVuRGF0YUNoYW5uZWxDb250aW51YXRpb247XG5cbiAgdGhpcy5wZWVyID0gbmV3IFNpbXBsZURhdGFQZWVyKHRoaXMucGVlck5hbWUsIHN0dW5TZXJ2ZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUNoYW5uZWxDYWxsYmFja3MsIG1vY2tzKTtcblxuICAvLyBTZXR1cCBsaW5rIGJldHdlZW4gRnJlZWRvbSBtZXNzYWdpbmcgYW5kIF9wZWVyJ3Mgc2lnbmFsbGluZy5cbiAgLy8gTm90ZTogdGhlIHNpZ25hbGxpbmcgY2hhbm5lbCBzaG91bGQgb25seSBiZSBzZW5kaW5nIHJlY2VpdmVpbmcgc3RyaW5ncy5cbiAgdGhpcy5jb3JlLmJpbmRDaGFubmVsKHNpZ25hbGxpbmdDaGFubmVsSWQsIGZ1bmN0aW9uIChjaGFubmVsKSB7XG4gICAgdGhpcy5zaWduYWxsaW5nQ2hhbm5lbCA9IGNoYW5uZWw7XG4gICAgdGhpcy5wZWVyLnNldFNlbmRTaWduYWxNZXNzYWdlKGZ1bmN0aW9uIChtc2cpIHtcbiAgICAgIHRoaXMuc2lnbmFsbGluZ0NoYW5uZWwuZW1pdCgnbWVzc2FnZScsIG1zZyk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnNpZ25hbGxpbmdDaGFubmVsLm9uKCdtZXNzYWdlJyxcbiAgICAgICAgdGhpcy5wZWVyLmhhbmRsZVNpZ25hbE1lc3NhZ2UuYmluZCh0aGlzLnBlZXIpKTtcbiAgICB0aGlzLnNpZ25hbGxpbmdDaGFubmVsLmVtaXQoJ3JlYWR5Jyk7XG4gICAgaWYgKCFpbml0aWF0ZUNvbm5lY3Rpb24pIHtcbiAgICAgIHRoaXMucGVlci5ydW5XaGVuQ29ubmVjdGVkKGNvbnRpbnVhdGlvbik7XG4gICAgfVxuICB9LmJpbmQodGhpcykpO1xuXG4gIGlmIChpbml0aWF0ZUNvbm5lY3Rpb24pIHtcbiAgICAvLyBTZXR1cCBhIGNvbm5lY3Rpb24gcmlnaHQgYXdheSwgdGhlbiBpbnZva2UgY29udGludWF0aW9uLlxuICAgIGNvbnNvbGUubG9nKHRoaXMucGVlck5hbWUgKyAnIGluaXRpYXRpbmcgY29ubmVjdGlvbicpO1xuICAgIGNoYW5uZWxJZCA9ICdoZWxsbycgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCk7XG4gICAgb3BlbkRhdGFDaGFubmVsQ29udGludWF0aW9uID0gZnVuY3Rpb24gKHN1Y2Nlc3MsIGVycm9yKSB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29udGludWF0aW9uKHVuZGVmaW5lZCwgZXJyb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbG9zZURhdGFDaGFubmVsKGNoYW5uZWxJZCwgY29udGludWF0aW9uKTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcyk7XG4gICAgdGhpcy5vcGVuRGF0YUNoYW5uZWwoY2hhbm5lbElkLCBvcGVuRGF0YUNoYW5uZWxDb250aW51YXRpb24pO1xuICB9XG59O1xuXG5QZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuY3JlYXRlT2ZmZXIgPSBmdW5jdGlvbiAoY29uc3RyYWludHMsIGNvbnRpbnVhdGlvbikge1xuICB0aGlzLnBlZXIuY3JlYXRlT2ZmZXIoY29uc3RyYWludHMsIGNvbnRpbnVhdGlvbik7XG59O1xuXG4vLyBUT0RPOiBkZWxheSBjb250aW51YXRpb24gdW50aWwgdGhlIG9wZW4gY2FsbGJhY2sgZnJvbSBfcGVlciBpcyBjYWxsZWQuXG5QZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUub3BlbkRhdGFDaGFubmVsID0gZnVuY3Rpb24gKGNoYW5uZWxJZCwgY29udGludWF0aW9uKSB7XG4gIHRoaXMucGVlci5vcGVuRGF0YUNoYW5uZWwoY2hhbm5lbElkLCBjb250aW51YXRpb24pO1xufTtcblxuUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmNsb3NlRGF0YUNoYW5uZWwgPSBmdW5jdGlvbiAoY2hhbm5lbElkLCBjb250aW51YXRpb24pIHtcbiAgdGhpcy5wZWVyLmNsb3NlQ2hhbm5lbChjaGFubmVsSWQpO1xuICBjb250aW51YXRpb24oKTtcbn07XG5cbi8vIENhbGxlZCB0byBzZW5kIGEgbWVzc2FnZSBvdmVyIHRoZSBnaXZlbiBkYXRhY2hhbm5lbCB0byBhIHBlZXIuIElmIHRoZSBkYXRhXG4vLyBjaGFubmVsIGRvZXNuJ3QgYWxyZWFkeSBleGlzdCwgdGhlIERhdGFQZWVyIGNyZWF0ZXMgaXQuXG5QZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChzZW5kSW5mbywgY29udGludWF0aW9uKSB7XG4gIHZhciBvYmpUb1NlbmQgPSBzZW5kSW5mby50ZXh0IHx8IHNlbmRJbmZvLmJ1ZmZlciB8fCBzZW5kSW5mby5iaW5hcnk7XG4gIGlmICh0eXBlb2Ygb2JqVG9TZW5kID09PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJObyB2YWxpZCBkYXRhIHRvIHNlbmQgaGFzIGJlZW4gcHJvdmlkZWQuXCIsIHNlbmRJbmZvKTtcbiAgICByZXR1cm47XG4gIH1cbiAgLy9ERUJVR1xuICAvLyBvYmpUb1NlbmQgPSBuZXcgQXJyYXlCdWZmZXIoNCk7XG4gIC8vREVCVUdcbiAgdGhpcy5wZWVyLnNlbmQoc2VuZEluZm8uY2hhbm5lbExhYmVsLCBvYmpUb1NlbmQsIGNvbnRpbnVhdGlvbik7XG59O1xuXG5QZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0QnVmZmVyZWRBbW91bnQgPSBmdW5jdGlvbiAoY2hhbm5lbElkLCBjb250aW51YXRpb24pIHtcbiAgY29udGludWF0aW9uKHRoaXMucGVlci5nZXRCdWZmZXJlZEFtb3VudChjaGFubmVsSWQpKTtcbn07XG5cblBlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uIChjb250aW51YXRpb24pIHtcbiAgaWYgKHRoaXMucGVlci5pc0Nsb3NlZCgpKSB7XG4gICAgLy8gUGVlciBhbHJlYWR5IGNsb3NlZCwgcnVuIGNvbnRpbnVhdGlvbiB3aXRob3V0IGRpc3BhdGNoaW5nIGV2ZW50LlxuICAgIGNvbnRpbnVhdGlvbigpO1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLnBlZXIuY2xvc2UoKTtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KFwib25DbG9zZVwiKTtcbiAgY29udGludWF0aW9uKCk7XG59O1xuXG5leHBvcnRzLnByb3ZpZGVyID0gUGVlckNvbm5lY3Rpb247XG5leHBvcnRzLm5hbWUgPSAnY29yZS5wZWVyY29ubmVjdGlvbic7XG5leHBvcnRzLmZsYWdzID0ge21vZHVsZTogdHJ1ZX07XG4iLCIvKmpzbGludCBzbG9wcHk6dHJ1ZSwgbm9kZTp0cnVlICovXG4vKmdsb2JhbHMgQ29tcG9uZW50cywgQXJyYXlCdWZmZXIgKi9cblxudmFyIHV0aWwgPSByZXF1aXJlKCcuLi8uLi9zcmMvdXRpbCcpO1xuXG52YXIgZXZlbnROYW1lcyA9IFtcbiAgJ29ub3BlbicsXG4gICdvbmVycm9yJyxcbiAgJ29uY2xvc2UnLFxuICAnb25tZXNzYWdlJ1xuXTtcblxudmFyIHVuQXR0YWNoZWRDaGFubmVscyA9IHt9O1xudmFyIHBlbmRpbmdFdmVudHMgPSB7fTtcbnZhciBhbGxvY2F0ZUNoYW5uZWwgPSBmdW5jdGlvbiAoZGF0YUNoYW5uZWwpIHtcbiAgdmFyIGlkID0gdXRpbC5nZXRJZCgpO1xuICB1bkF0dGFjaGVkQ2hhbm5lbHNbaWRdID0gZGF0YUNoYW5uZWw7XG4gIHBlbmRpbmdFdmVudHNbaWRdID0gW107XG4gIGV2ZW50TmFtZXMuZm9yRWFjaChmdW5jdGlvbihldmVudE5hbWUpIHtcbiAgICAvLyBUaGlzIGxpc3RlbmVyIHdpbGwgYmUgb3ZlcnJpZGRlbiAocmUtc2V0KSBhZnRlciB0aGUgY29uc3RydWN0b3IgcnVucy5cbiAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICB2YXIgY3VycmVudEhhbmRsZXIgPSBkYXRhQ2hhbm5lbFtldmVudE5hbWVdO1xuICAgICAgaWYgKGN1cnJlbnRIYW5kbGVyID09PSBoYW5kbGVyKSB7XG4gICAgICAgIHBlbmRpbmdFdmVudHNbaWRdLnB1c2goZXZlbnQpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgY3VycmVudEhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gSWYgYW4gZXZlbnQgc29tZWhvdyBydW5zIG9uIHRoaXMgZXZlbnQgaGFuZGxlciBhZnRlciBpdCBoYXMgYmVlblxuICAgICAgICAvLyByZXBsYWNlZCwgZm9yd2FyZCB0aGF0IGV2ZW50IHRvIHRoZSBuZXcgZXZlbnQgaGFuZGxlci5cbiAgICAgICAgY3VycmVudEhhbmRsZXIoZXZlbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBoYW5kbGVyIGZvciAnICsgZXZlbnQudHlwZSArICcgZXZlbnQnKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGRhdGFDaGFubmVsW2V2ZW50TmFtZV0gPSBoYW5kbGVyO1xuICB9KTtcbiAgcmV0dXJuIGlkO1xufTtcblxudmFyIFJUQ0RhdGFDaGFubmVsQWRhcHRlciA9IGZ1bmN0aW9uIChjYXAsIGRpc3BhdGNoRXZlbnRzLCBpZCkge1xuICB0aGlzLmRpc3BhdGNoRXZlbnQgPSBkaXNwYXRjaEV2ZW50cztcbiAgaWYgKCF1bkF0dGFjaGVkQ2hhbm5lbHNbaWRdKSB7XG4gICAgY29uc29sZS53YXJuKCdJbnZhbGlkIElELCBjcmVhdGluZyBhY3Rpbmcgb24gdW5hdHRhY2hlZCBEYXRhQ2hhbm5lbCcpO1xuICAgIHZhciBDb25uZWN0aW9uID0gcmVxdWlyZSgnLi9jb3JlLnJ0Y3BlZXJjb25uZWN0aW9uJykucHJvdmlkZXIsXG4gICAgICBwcm92aWRlciA9IG5ldyBDb25uZWN0aW9uKCk7XG4gICAgaWQgPSBwcm92aWRlci5jcmVhdGVEYXRhQ2hhbm5lbCgpO1xuICAgIHByb3ZpZGVyLmNsb3NlKCk7XG4gIH1cblxuICB0aGlzLmNoYW5uZWwgPSB1bkF0dGFjaGVkQ2hhbm5lbHNbaWRdO1xuICBkZWxldGUgdW5BdHRhY2hlZENoYW5uZWxzW2lkXTtcblxuICAvLyBBZnRlciB0aGUgY29uc3RydWN0b3IgcmV0dXJucywgYW5kIHRoZSBjYWxsZXIgaGFzIGEgY2hhbmNlIHRvIHJlZ2lzdGVyXG4gIC8vIGV2ZW50IGxpc3RlbmVycywgZmlyZSBhbGwgcGVuZGluZyBldmVudHMsIGFuZCB0aGVuIGVuc3VyZSB0aGF0IGFsbFxuICAvLyBzdWJzZXF1ZW50IGV2ZW50cyBhcmUgaGFuZGxlZCBpbW1lZGlhdGVseS5cbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICB0aGlzLmRyYWluUGVuZGluZ0V2ZW50cyhpZCk7XG5cbiAgICAvLyBUaGlzIGZ1bmN0aW9uIG11c3Qgbm90IGJlIGNhbGxlZCB1bnRpbCBhZnRlciB0aGUgcGVuZGluZyBldmVudHMgYXJlXG4gICAgLy8gZHJhaW5lZCwgdG8gZW5zdXJlIHRoYXQgbWVzc2FnZXMgYXJlIGRlbGl2ZXJlZCBpbiBvcmRlci5cbiAgICB0aGlzLm1hbmFnZUV2ZW50cyh0cnVlKTtcbiAgfS5iaW5kKHRoaXMpLCAwKTtcbn07XG5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUuZHJhaW5QZW5kaW5nRXZlbnRzID0gZnVuY3Rpb24oaWQpIHtcbiAgcGVuZGluZ0V2ZW50c1tpZF0uZm9yRWFjaChmdW5jdGlvbihldmVudCkge1xuICAgIHRoaXNbJ29uJyArIGV2ZW50LnR5cGVdKGV2ZW50KTtcbiAgfS5iaW5kKHRoaXMpKTtcbiAgZGVsZXRlIHBlbmRpbmdFdmVudHNbaWRdO1xufTtcblxuLy8gQXR0YWNoIG9yIGRldGFjaCBsaXN0ZW5lcnMgZm9yIGV2ZW50cyBhZ2FpbnN0IHRoZSBjb25uZWN0aW9uLlxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5tYW5hZ2VFdmVudHMgPSBmdW5jdGlvbiAoYXR0YWNoKSB7XG4gIGV2ZW50TmFtZXMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgaWYgKGF0dGFjaCkge1xuICAgICAgdGhpc1tldmVudE5hbWVdID0gdGhpc1tldmVudE5hbWVdLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLmNoYW5uZWxbZXZlbnROYW1lXSA9IHRoaXNbZXZlbnROYW1lXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHRoaXMuY2hhbm5lbFtldmVudE5hbWVdO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUuZ2V0TGFiZWwgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sodGhpcy5jaGFubmVsLmxhYmVsKTtcbn07XG5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUuZ2V0T3JkZXJlZCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBjYWxsYmFjayh0aGlzLmNoYW5uZWwub3JkZXJlZCk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLmdldE1heFBhY2tldExpZmVUaW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrKHRoaXMuY2hhbm5lbC5tYXhQYWNrZXRMaWZlVGltZSk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLmdldE1heFJldHJhbnNtaXRzID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrKHRoaXMuY2hhbm5lbC5tYXhSZXRyYW5zbWl0cyk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLmdldFByb3RvY29sID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrKHRoaXMuY2hhbm5lbC5wcm90b2NvbCk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLmdldE5lZ290aWF0ZWQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sodGhpcy5jaGFubmVsLm5lZ290aWF0ZWQpO1xufTtcblxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5nZXRJZCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBjYWxsYmFjayh0aGlzLmNoYW5uZWwuaWQpO1xufTtcblxuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5nZXRSZWFkeVN0YXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrKHRoaXMuY2hhbm5lbC5yZWFkeVN0YXRlKTtcbn07XG5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUuZ2V0QnVmZmVyZWRBbW91bnQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sodGhpcy5jaGFubmVsLmJ1ZmZlcmVkQW1vdW50KTtcbn07XG5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUuZ2V0QmluYXJ5VHlwZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBjYWxsYmFjayh0aGlzLmNoYW5uZWwuYmluYXJ5VHlwZSk7XG59O1xuUlRDRGF0YUNoYW5uZWxBZGFwdGVyLnByb3RvdHlwZS5zZXRCaW5hcnlUeXBlID0gZnVuY3Rpb24gKGJpbmFyeVR5cGUsIGNhbGxiYWNrKSB7XG4gIHRoaXMuY2hhbm5lbC5iaW5hcnlUeXBlID0gYmluYXJ5VHlwZTtcbiAgY2FsbGJhY2soKTtcbn07XG5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uICh0ZXh0LCBjYWxsYmFjaykge1xuICB0aGlzLmNoYW5uZWwuc2VuZCh0ZXh0KTtcbiAgY2FsbGJhY2soKTtcbn07XG5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUuc2VuZEJ1ZmZlciA9IGZ1bmN0aW9uIChidWZmZXIsIGNhbGxiYWNrKSB7XG4gIHRoaXMuY2hhbm5lbC5zZW5kKGJ1ZmZlcik7XG4gIGNhbGxiYWNrKCk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGlmICghdGhpcy5jaGFubmVsKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gIH1cbiAgdGhpcy5tYW5hZ2VFdmVudHMoZmFsc2UpO1xuICB0aGlzLmNoYW5uZWwuY2xvc2UoKTtcbiAgY2FsbGJhY2soKTtcbn07XG5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUub25vcGVuID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25vcGVuJywgZXZlbnQubWVzc2FnZSk7XG59O1xuXG5SVENEYXRhQ2hhbm5lbEFkYXB0ZXIucHJvdG90eXBlLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbmVycm9yJywge1xuICAgIGVycmNvZGU6IGV2ZW50LnR5cGUsXG4gICAgbWVzc2FnZTogZXZlbnQubWVzc2FnZVxuICB9KTtcbn07XG5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUub25jbG9zZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoJ29uY2xvc2UnLCBldmVudC5tZXNzYWdlKTtcbn07XG5cblJUQ0RhdGFDaGFubmVsQWRhcHRlci5wcm90b3R5cGUub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGlmICh0eXBlb2YgZXZlbnQuZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ29ubWVzc2FnZScsIHt0ZXh0OiBldmVudC5kYXRhfSk7XG4gIH0gZWxzZSBpZiAodGhpcy5jaGFubmVsLmJpbmFyeVR5cGUgPT09ICdhcnJheWJ1ZmZlcicgJiZcbiAgICAgIHR5cGVvZiBDb21wb25lbnRzICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgIShldmVudC5kYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpKSB7XG4gICAgLy8gSW4gRmlyZWZveCBBZGRvbnMsIGluY29taW5nIGFycmF5IGJ1ZmZlcnMgYXJlIG5vdCBhbHdheXMgb3duZWQgYnkgdGhlXG4gICAgLy8gQWRkb24gY29udGV4dC4gVGhlIGZvbGxvd2luZyBsaW5lIGNsb25lcyB0aGUgb2JqZWN0IHRvIHRha2Ugb3duZXJzaGlwLlxuICAgIC8vIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9Db21wb25lbnRzLnV0aWxzLmNsb25lSW50b1xuICAgIHZhciBteURhdGEgPSBDb21wb25lbnRzLnV0aWxzLmNsb25lSW50byhldmVudC5kYXRhLCB7fSk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbm1lc3NhZ2UnLCB7YnVmZmVyOiBteURhdGF9KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ29ubWVzc2FnZScsIHtidWZmZXI6IGV2ZW50LmRhdGF9KTtcbiAgfVxufTtcblxuZXhwb3J0cy5uYW1lID0gXCJjb3JlLnJ0Y2RhdGFjaGFubmVsXCI7XG5leHBvcnRzLnByb3ZpZGVyID0gUlRDRGF0YUNoYW5uZWxBZGFwdGVyO1xuZXhwb3J0cy5hbGxvY2F0ZSA9IGFsbG9jYXRlQ2hhbm5lbDtcbiIsIi8qanNsaW50IGluZGVudDoyLHNsb3BweTp0cnVlLCBub2RlOnRydWUgKi9cblxudmFyIFByb21pc2VDb21wYXQgPSByZXF1aXJlKCdlczYtcHJvbWlzZScpLlByb21pc2U7XG52YXIgd3J0Y0NsYXNzLCBSVENQZWVyQ29ubmVjdGlvbiwgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uLCBSVENJY2VDYW5kaWRhdGU7XG52YXIgRGF0YUNoYW5uZWwgPSByZXF1aXJlKCcuL2NvcmUucnRjZGF0YWNoYW5uZWwnKTtcblxudmFyIFJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlciA9IGZ1bmN0aW9uIChjYXAsIGRpc3BhdGNoRXZlbnQsIGNvbmZpZ3VyYXRpb24pIHtcbiAgaWYgKHR5cGVvZiB3cnRjQ2xhc3MgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gb25seSB3b3JrcyBpbiBicm93c2VyLCBzbyBub2RlIHNob3VsZCB1c2Ugc2V0SW1wbCAoc2VlIGV4cG9ydHMpXG4gICAgdmFyIGFkYXB0ZXIgPSByZXF1aXJlKCd3ZWJydGMtYWRhcHRlcicpO1xuICAgIFJUQ1BlZXJDb25uZWN0aW9uID0gYWRhcHRlci5SVENQZWVyQ29ubmVjdGlvbjtcbiAgICBSVENTZXNzaW9uRGVzY3JpcHRpb24gPSBhZGFwdGVyLlJUQ1Nlc3Npb25EZXNjcmlwdGlvbjtcbiAgICBSVENJY2VDYW5kaWRhdGUgPSBhZGFwdGVyLlJUQ0ljZUNhbmRpZGF0ZTtcbiAgfSBlbHNlIHtcbiAgICBSVENQZWVyQ29ubmVjdGlvbiA9IHdydGNDbGFzcy5SVENQZWVyQ29ubmVjdGlvbjtcbiAgICBSVENTZXNzaW9uRGVzY3JpcHRpb24gPSB3cnRjQ2xhc3MuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uO1xuICAgIFJUQ0ljZUNhbmRpZGF0ZSA9IHdydGNDbGFzcy5SVENJY2VDYW5kaWRhdGU7XG4gIH1cblxuICB0aGlzLmRpc3BhdGNoRXZlbnQgPSBkaXNwYXRjaEV2ZW50O1xuICB0cnkge1xuICAgIHRoaXMuY29ubmVjdGlvbiA9IG5ldyBSVENQZWVyQ29ubmVjdGlvbihjb25maWd1cmF0aW9uKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIE5vdGU6IFlvdSBjYW4ndCBhc2sgdGhlIHByb3ZpZGVyIHRvIGNsb3NlIHlvdSBzeW5jaHJvbm91c2x5LCBzaW5jZVxuICAgIC8vIHRoZSBjb25zdHJ1Y3RvciBoYXMgbm90IHlldCByZXR1cm5lZCwgc28gdGhlcmUncyBubyAndGhpcycgdGhhdFxuICAgIC8vIHRoZSBwcm92aWRlciBjYW4ga25vdyBhYm91dCB5ZXQuXG4gICAgc2V0VGltZW91dChjYXAucHJvdmlkZXIuY2xvc2UuYmluZChjYXAucHJvdmlkZXIsIHRoaXMpLCAwKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLmV2ZW50cyA9IFtcbiAgICAnb25kYXRhY2hhbm5lbCcsXG4gICAgJ29ubmVnb3RpYXRpb25uZWVkZWQnLFxuICAgICdvbmljZWNhbmRpZGF0ZScsXG4gICAgJ29uc2lnbmFsaW5nc3RhdGVjaGFuZ2UnLFxuICAgICdvbmFkZHN0cmVhbScsXG4gICAgJ29ucmVtb3Zlc3RyZWFtJyxcbiAgICAnb25pY2Vjb25uZWN0aW9uc3RhdGVjaGFuZ2UnXG4gIF07XG4gIHRoaXMubWFuYWdlRXZlbnRzKHRydWUpO1xufTtcblxuLy8gQXR0YWNoIG9yIGRldGFjaCBsaXN0ZW5lcnMgZm9yIGV2ZW50cyBhZ2FpbnN0IHRoZSBjb25uZWN0aW9uLlxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5tYW5hZ2VFdmVudHMgPSBmdW5jdGlvbiAoYXR0YWNoKSB7XG4gIHRoaXMuZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGF0dGFjaCkge1xuICAgICAgdGhpc1tldmVudF0gPSB0aGlzW2V2ZW50XS5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5jb25uZWN0aW9uW2V2ZW50XSA9IHRoaXNbZXZlbnRdO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb25uZWN0aW9uKSB7XG4gICAgICBkZWxldGUgdGhpcy5jb25uZWN0aW9uW2V2ZW50XTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLmNyZWF0ZU9mZmVyID0gZnVuY3Rpb24gKGNvbnN0cmFpbnRzKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdGhpcy5jb25uZWN0aW9uLmNyZWF0ZU9mZmVyKHJlc29sdmUsIHJlamVjdCwgY29uc3RyYWludHMpO1xuICB9LmJpbmQodGhpcykpO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5jcmVhdGVBbnN3ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdGhpcy5jb25uZWN0aW9uLmNyZWF0ZUFuc3dlcihyZXNvbHZlLCByZWplY3QpO1xuICB9LmJpbmQodGhpcykpO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5zZXRMb2NhbERlc2NyaXB0aW9uID0gZnVuY3Rpb24gKGRlc2NyaXB0aW9uKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdGhpcy5jb25uZWN0aW9uLnNldExvY2FsRGVzY3JpcHRpb24obmV3IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbihkZXNjcmlwdGlvbiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuZ2V0TG9jYWxEZXNjcmlwdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSh0aGlzLmNvbm5lY3Rpb24ubG9jYWxEZXNjcmlwdGlvbik7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLnNldFJlbW90ZURlc2NyaXB0aW9uID0gZnVuY3Rpb24gKGRlc2NyaXB0aW9uKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdGhpcy5jb25uZWN0aW9uLnNldFJlbW90ZURlc2NyaXB0aW9uKG5ldyBSVENTZXNzaW9uRGVzY3JpcHRpb24oZGVzY3JpcHRpb24pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlLCByZWplY3QpO1xuICB9LmJpbmQodGhpcykpO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5nZXRSZW1vdGVEZXNjcmlwdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSh0aGlzLmNvbm5lY3Rpb24ucmVtb3RlRGVzY3JpcHRpb24pO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5nZXRTaWduYWxpbmdTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSh0aGlzLmNvbm5lY3Rpb24uc2lnbmFsaW5nU3RhdGUpO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS51cGRhdGVJY2UgPSBmdW5jdGlvbiAoY29uZmlndXJhdGlvbikge1xuICB0aGlzLmNvbm5lY3Rpb24udXBkYXRlSWNlKGNvbmZpZ3VyYXRpb24pO1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKCk7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLmFkZEljZUNhbmRpZGF0ZSA9IGZ1bmN0aW9uIChjYW5kaWRhdGUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ29tcGF0KGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB0aGlzLmNvbm5lY3Rpb24uYWRkSWNlQ2FuZGlkYXRlKG5ldyBSVENJY2VDYW5kaWRhdGUoY2FuZGlkYXRlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUsIHJlamVjdCk7XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLmdldEljZUdhdGhlcmluZ1N0YXRlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKHRoaXMuY29ubmVjdGlvbi5pY2VHYXRoZXJpbmdTdGF0ZSk7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLmdldEljZUNvbm5lY3Rpb25TdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSh0aGlzLmNvbm5lY3Rpb24uaWNlQ29ubmVjdGlvblN0YXRlKTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuZ2V0Q29uZmlndXJhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNvbmZpZ3VyYXRpb24gPSB0aGlzLmNvbm5lY3Rpb24uZ2V0Q29uZmlndXJhdGlvbigpO1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKGNvbmZpZ3VyYXRpb24pO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5nZXRMb2NhbFN0cmVhbXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlamVjdCh7XG4gICAgZXJyY29kZTogLTEsXG4gICAgbWVzc2FnZTogXCJOb3QgSW1wbGVtZW50ZWRcIlxuICB9KTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuZ2V0UmVtb3RlU3RyZWFtcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVqZWN0KHtcbiAgICBlcnJjb2RlOiAtMSxcbiAgICBtZXNzYWdlOiBcIk5vdCBJbXBsZW1lbnRlZFwiXG4gIH0pO1xufTtcblxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5nZXRTdHJlYW1CeUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlamVjdCh7XG4gICAgZXJyY29kZTogLTEsXG4gICAgbWVzc2FnZTogXCJOb3QgSW1wbGVtZW50ZWRcIlxuICB9KTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuYWRkU3RyZWFtID0gZnVuY3Rpb24gKGlkKSB7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlamVjdCh7XG4gICAgZXJyY29kZTogLTEsXG4gICAgbWVzc2FnZTogXCJOb3QgSW1wbGVtZW50ZWRcIlxuICB9KTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUucmVtb3ZlU3RyZWFtID0gZnVuY3Rpb24gKGlkKSB7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlamVjdCh7XG4gICAgZXJyY29kZTogLTEsXG4gICAgbWVzc2FnZTogXCJOb3QgSW1wbGVtZW50ZWRcIlxuICB9KTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghdGhpcy5jb25uZWN0aW9uKSB7XG4gICAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSgpO1xuICB9XG4gIHRoaXMubWFuYWdlRXZlbnRzKGZhbHNlKTtcbiAgdHJ5IHtcbiAgICB0aGlzLmNvbm5lY3Rpb24uY2xvc2UoKTtcbiAgICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZWplY3Qoe1xuICAgICAgZXJyY29kZTogZS5uYW1lLFxuICAgICAgbWVzc2FnZTogZS5tZXNzYWdlXG4gICAgfSk7XG4gIH1cbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuY3JlYXRlRGF0YUNoYW5uZWwgPSBmdW5jdGlvbiAobGFiZWwsIGRhdGFDaGFubmVsRGljdCkge1xuICB2YXIgaWQgPSBEYXRhQ2hhbm5lbC5hbGxvY2F0ZSh0aGlzLmNvbm5lY3Rpb24uY3JlYXRlRGF0YUNoYW5uZWwobGFiZWwsIGRhdGFDaGFubmVsRGljdCkpO1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKGlkKTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUuZ2V0U3RhdHMgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ29tcGF0KGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBpZiAodHlwZW9mIHdydGNDbGFzcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIHVzZWQgd2VicnRjLWFkYXB0ZXJcbiAgICAgIHRoaXMuY29ubmVjdGlvbi5nZXRTdGF0cyhzZWxlY3RvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbm9kZS13cnRjIGhhcyBkaWZmZXJlbnQgZ2V0U3RhdHMgQVBJXG4gICAgICB0aGlzLmNvbm5lY3Rpb24uZ2V0U3RhdHMoZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgdmFyIHN0YW5kYXJkUmVwb3J0ID0ge307XG4gICAgICAgIHZhciByZXBvcnRzID0gcmVzcG9uc2UucmVzdWx0KCk7XG4gICAgICAgIHZhciBpZCA9IDA7ICAvLyBub2Rld3J0YyBzdGF0cyByZXBvcnQgbGFja3MgaWQgZmllbGRcbiAgICAgICAgcmVwb3J0cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXBvcnQpIHtcbiAgICAgICAgICByZXBvcnQuaWQgPSBTdHJpbmcoaWQrKyk7ICAvLyBzdHJpbmcgdG8gdXNlIGFzIG9iamVjdCBrZXlcbiAgICAgICAgICBzdGFuZGFyZFJlcG9ydFtyZXBvcnQuaWRdID0gcmVwb3J0O1xuICAgICAgICB9KTtcbiAgICAgICAgcmVzb2x2ZShzdGFuZGFyZFJlcG9ydCk7XG4gICAgICB9LCByZWplY3QpO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUub25kYXRhY2hhbm5lbCA9IGZ1bmN0aW9uIChldmVudCkge1xuICB2YXIgaWQgPSBEYXRhQ2hhbm5lbC5hbGxvY2F0ZShldmVudC5jaGFubmVsKTtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbmRhdGFjaGFubmVsJywge2NoYW5uZWw6IGlkfSk7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLm9ubmVnb3RpYXRpb25uZWVkZWQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbm5lZ290aWF0aW9ubmVlZGVkJywgZXZlbnQubWVzc2FnZSk7XG59O1xuXG5SVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXIucHJvdG90eXBlLm9uaWNlY2FuZGlkYXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHZhciBtc2c7XG4gIGlmIChldmVudC5jYW5kaWRhdGUgJiYgZXZlbnQuY2FuZGlkYXRlLmNhbmRpZGF0ZSkge1xuICAgIG1zZyA9IHtcbiAgICAgIGNhbmRpZGF0ZToge1xuICAgICAgICBjYW5kaWRhdGU6IGV2ZW50LmNhbmRpZGF0ZS5jYW5kaWRhdGUsXG4gICAgICAgIHNkcE1pZDogZXZlbnQuY2FuZGlkYXRlLnNkcE1pZCxcbiAgICAgICAgc2RwTUxpbmVJbmRleDogZXZlbnQuY2FuZGlkYXRlLnNkcE1MaW5lSW5kZXhcbiAgICAgIH1cbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1zZyA9IHtcbiAgICAgIGNhbmRpZGF0ZTogbnVsbFxuICAgIH07XG4gIH1cbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbmljZWNhbmRpZGF0ZScsIG1zZyk7XG59O1xuICBcblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUub25zaWduYWxpbmdzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoJ29uc2lnbmFsaW5nc3RhdGVjaGFuZ2UnLCBldmVudC5tZXNzYWdlKTtcbn07XG4gIFxuUlRDUGVlckNvbm5lY3Rpb25BZGFwdGVyLnByb3RvdHlwZS5vbmFkZHN0cmVhbSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAvL1RPRE86IHByb3ZpZGUgSUQgb2YgYWxsb2NhdGVkIHN0cmVhbS5cbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbmFkZHN0cmVhbScsIGV2ZW50LnN0cmVhbSk7XG59O1xuICBcblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUub25yZW1vdmVzdHJlYW0gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgLy9UT0RPOiBwcm92aWRlIElEIG9mIGRlYWxsb2NhdGVkIHN0cmVhbS5cbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbnJlbW92ZXN0cmVhbScsIGV2ZW50LnN0cmVhbSk7XG59O1xuICBcblJUQ1BlZXJDb25uZWN0aW9uQWRhcHRlci5wcm90b3R5cGUub25pY2Vjb25uZWN0aW9uc3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbmljZWNvbm5lY3Rpb25zdGF0ZWNoYW5nZScsIGV2ZW50Lm1lc3NhZ2UpO1xufTtcblxuXG5leHBvcnRzLm5hbWUgPSBcImNvcmUucnRjcGVlcmNvbm5lY3Rpb25cIjtcbmV4cG9ydHMucHJvdmlkZXIgPSBSVENQZWVyQ29ubmVjdGlvbkFkYXB0ZXI7XG5leHBvcnRzLnN0eWxlID0gXCJwcm92aWRlUHJvbWlzZXNcIjtcbmV4cG9ydHMuZmxhZ3MgPSB7cHJvdmlkZXI6IHRydWV9O1xuZXhwb3J0cy5zZXRJbXBsID0gZnVuY3Rpb24oaW1wbCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgd3J0Y0NsYXNzID0gaW1wbDtcbn07XG4iLCIvKmdsb2JhbHMgbG9jYWxTdG9yYWdlICovXG4vKmpzbGludCBpbmRlbnQ6MixzbG9wcHk6dHJ1ZSxub2RlOnRydWUgKi9cbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vLi4vc3JjL3V0aWwnKTtcblxuLyoqXG4gKiBBIEZyZWVET00gY29yZS5zdG9yYWdlIHByb3ZpZGVyIHRoYXQgZGVwZW5kcyBvbiBsb2NhbFN0b3JhZ2VcbiAqIFRodXMsIHRoaXMgb25seSB3b3JrcyBpbiB0aGUgY29udGV4dCBvZiBhIHdlYnBhZ2UgYW5kIGhhc1xuICogc29tZSBzaXplIGxpbWl0YXRpb25zLlxuICogTm90ZSB0aGF0IHRoaXMgY2FuIGNvbmZsaWN0IHdpdGggb3RoZXIgc2NyaXB0cyB1c2luZyBsb2NhbFN0b3JhZ2VcbiAqIGFzIGtleXMgYXJlIHJhd1xuICogQENsYXNzIFN0b3JhZ2VfdW5wcml2aWxlZ2VkXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gY2FwIENhcGFiaWxpdGllcyBmb3IgdGhlIHByb3ZpZGVyXG4gKi9cbnZhciBTdG9yYWdlX3VucHJpdmlsZWdlZCA9IGZ1bmN0aW9uIChjYXAsIGRpc3BhdGNoRXZlbnQpIHtcbiAgdXRpbC5oYW5kbGVFdmVudHModGhpcyk7XG59O1xuXG4vKipcbiAqIExpc3RzIGtleXMgaW4gdGhlIHN0b3JhZ2UgcmVwb3NpdG9yeVxuICogQG1ldGhvZCBrZXlzXG4gKi9cblN0b3JhZ2VfdW5wcml2aWxlZ2VkLnByb3RvdHlwZS5rZXlzID0gZnVuY3Rpb24gKGNvbnRpbnVhdGlvbikge1xuICB2YXIgcmVzdWx0ID0gW10sXG4gICAgaTtcbiAgZm9yIChpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHJlc3VsdC5wdXNoKGxvY2FsU3RvcmFnZS5rZXkoaSkpO1xuICB9XG4gIGNvbnRpbnVhdGlvbihyZXN1bHQpO1xufTtcblxuLyoqXG4gKiBHZXQgYSBrZXkgZnJvbSB0aGUgc3RvcmFnZSByZXBvc2l0b3J5LlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSBUaGUgaXRlbSB0byBnZXQgZnJvbSBzdG9yYWdlLlxuICogQG1ldGhvZCBnZXRcbiAqL1xuU3RvcmFnZV91bnByaXZpbGVnZWQucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXksIGNvbnRpbnVhdGlvbikge1xuICB0cnkge1xuICAgIHZhciB2YWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgIGNvbnRpbnVhdGlvbih2YWwpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29udGludWF0aW9uKG51bGwpO1xuICB9XG59O1xuXG4vKipcbiAqIFNldCBhIGtleSBpbiB0aGUgc3RvcmFnZSByZXBvc2l0b3J5LlxuICogQHBhcmFtIHtTdHJpbmd9IGtleSBUaGUgaXRlbSB0byBzYXZlIGluIHN0b3JhZ2UuXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgVGhlIHZhbHVlIHRvIHNhdmUgaW4gc3RvcmFnZS5cbiAqIEBtZXRob2Qgc2V0XG4gKi9cblN0b3JhZ2VfdW5wcml2aWxlZ2VkLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgY29udGludWF0aW9uKSB7XG4gIHZhciByZXQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgY29udGludWF0aW9uKHJldCk7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhIGtleSBmcm9tIHRoZSBzdG9yYWdlIHJlcG9zaXRvcnkuXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IFRoZSBpdGVtIHRvIHJlbW92ZSBmcm9tIHN0b3JhZ2U7XG4gKiBAbWV0aG9kIHJlbW92ZVxuICovXG5TdG9yYWdlX3VucHJpdmlsZWdlZC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKGtleSwgY29udGludWF0aW9uKSB7XG4gIHZhciByZXQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICBjb250aW51YXRpb24ocmV0KTtcbn07XG5cbi8qKlxuICogUmVzZXQgdGhlIGNvbnRlbnRzIG9mIHRoZSBzdG9yYWdlIHJlcG9zaXRvcnkuXG4gKiBAbWV0aG9kIGNsZWFyXG4gKi9cblN0b3JhZ2VfdW5wcml2aWxlZ2VkLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uIChjb250aW51YXRpb24pIHtcbiAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gIGNvbnRpbnVhdGlvbigpO1xufTtcblxuZXhwb3J0cy5wcm92aWRlciA9IFN0b3JhZ2VfdW5wcml2aWxlZ2VkO1xuZXhwb3J0cy5uYW1lID0gJ2NvcmUuc3RvcmFnZSc7XG4iLCIvKmpzbGludCBpbmRlbnQ6Mix3aGl0ZTp0cnVlLHNsb3BweTp0cnVlLG5vZGU6dHJ1ZSAqL1xudmFyIEV2ZW50SW50ZXJmYWNlID0gcmVxdWlyZSgnLi4vLi4vc3JjL3Byb3h5L2V2ZW50SW50ZXJmYWNlJyk7XG52YXIgQ29uc3VtZXIgPSByZXF1aXJlKCcuLi8uLi9zcmMvY29uc3VtZXInKTtcbnZhciB1dGlsID0gcmVxdWlyZSgnLi4vLi4vc3JjL3V0aWwnKTtcblxuLyoqXG4gKiBDb3JlIGZyZWVkb20gc2VydmljZXMgYXZhaWxhYmxlIHRvIGFsbCBtb2R1bGVzLlxuICogQ3JlYXRlZCBieSB0aGUgZW52aXJvbm1lbnQgaGVscGVyIGluIHJlc3BvbnNlIHRvIGEgJ2NvcmUnIHJlcXVlc3QuXG4gKiBAQ2xhc3MgQ29yZV91bnByaXZpbGVnZWRcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtNYW5hZ2VyfSBtYW5hZ2VyIFRoZSBtYW5hZ2VyIHRoaXMgY29yZSBpcyBjb25uZWN0ZWQgd2l0aC5cbiAqIEBwcml2YXRlXG4gKi9cbnZhciBDb3JlX3VucHJpdmlsZWdlZCA9IGZ1bmN0aW9uKG1hbmFnZXIsIHBvc3RNZXNzYWdlKSB7XG4gIHRoaXMubWFuYWdlciA9IG1hbmFnZXIubW9kdWxlO1xuICB0aGlzLmRlYnVnID0gdGhpcy5tYW5hZ2VyLmRlYnVnO1xufTtcblxuQ29yZV91bnByaXZpbGVnZWQudW5ib3VuZENoYW5uZWxzID0ge307XG5cbkNvcmVfdW5wcml2aWxlZ2VkLmNvbnRleHRJZCA9IHVuZGVmaW5lZDtcbkNvcmVfdW5wcml2aWxlZ2VkLm1vZHVsZUludGVybmFsID0gdW5kZWZpbmVkO1xuXG4vKipcbiAqIENyZWF0ZSBhIGN1c3RvbSBjaGFubmVsLlxuICogUmV0dXJucyB0aGUgc3RydWN0dXJlIHtjaGFubmVsOiBQcm94eSwgaWRlbnRpZmllcjogT2JqZWN0fSxcbiAqIHdoZXJlIHRoZSBpZGVudGlmaWVyIGNhbiBiZSAncmVkZWVtZWQnIGJ5IGFub3RoZXIgbW9kdWxlIG9yIHByb3ZpZGVyIHVzaW5nXG4gKiBiaW5kIGNoYW5uZWwsIGF0IHdoaWNoIHBvaW50IHRoZSBkZWZlcnJlZCBvYmplY3Qgd2lsbCByZXNvbHZlIHdpdGggYSBjaGFubmVsXG4gKiBiZXR3ZWVuIHRoZSB0d28gZW5kcG9pbnRzLlxuICogQG1ldGhvZCBjcmVhdGVDaGFubmVsXG4gKiBAcGFyYW1zIHtGdW5jdGlvbn0gY29udGludWF0aW9uIE1ldGhvZCB0byBjYWxsIHdpdGggdGhlIGNvc250cnVjdGVkIHN0cnVjdHVyZS5cbiAqL1xuQ29yZV91bnByaXZpbGVnZWQucHJvdG90eXBlLmNyZWF0ZUNoYW5uZWwgPSBmdW5jdGlvbihjb250aW51YXRpb24pIHtcbiAgdmFyIHByb3h5ID0gbmV3IENvbnN1bWVyKEV2ZW50SW50ZXJmYWNlLCB0aGlzLm1hbmFnZXIuZGVidWcpLFxuICAgICAgaWQgPSB1dGlsLmdldElkKCksXG4gICAgICBjaGFuID0gdGhpcy5nZXRDaGFubmVsKHByb3h5KTtcbiAgdGhpcy5tYW5hZ2VyLnNldHVwKHByb3h5KTtcblxuICBpZiAodGhpcy5pc0luTW9kdWxlKCkpIHtcbiAgICB0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm1hbmFnZXIuZGVsZWdhdGUsIHtcbiAgICAgIHR5cGU6ICdEZWxlZ2F0aW9uJyxcbiAgICAgIHJlcXVlc3Q6ICdoYW5kbGUnLFxuICAgICAgZmxvdzogJ2NvcmUnLFxuICAgICAgbWVzc2FnZToge1xuICAgICAgICB0eXBlOiAncmVnaXN0ZXInLFxuICAgICAgICBpZDogaWRcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBDb3JlX3VucHJpdmlsZWdlZC51bmJvdW5kQ2hhbm5lbHNbaWRdID0ge1xuICAgIGxvY2FsOiB0cnVlLFxuICAgIHByb3h5OiBwcm94eVxuICB9O1xuXG4gIHByb3h5Lm9uY2UoJ3N0YXJ0JywgdGhpcy5nZXRDaGFubmVsLmJpbmQodGhpcywgcHJveHkpKTtcblxuICBjb250aW51YXRpb24oe1xuICAgIGNoYW5uZWw6IGNoYW4sXG4gICAgaWRlbnRpZmllcjogaWRcbiAgfSk7XG59O1xuXG5Db3JlX3VucHJpdmlsZWdlZC5wcm90b3R5cGUuZ2V0Q2hhbm5lbCA9IGZ1bmN0aW9uKHByb3h5KSB7XG4gIHZhciBpZmFjZSA9IHByb3h5LmdldFByb3h5SW50ZXJmYWNlKCksXG4gICAgICBjaGFuID0gaWZhY2UoKTtcbiAgY2hhbi5jbG9zZSA9IGlmYWNlLmNsb3NlO1xuICBjaGFuLm9uQ2xvc2UgPSBpZmFjZS5vbkNsb3NlO1xuICBpZmFjZS5vbkNsb3NlKGNoYW4sIGZ1bmN0aW9uKCkge1xuICAgIHByb3h5LmRvQ2xvc2UoKTtcbiAgfSk7XG4gIHJldHVybiBjaGFuO1xufTtcblxuLyoqXG4gKiBSZWNlaXZlIGEgbWVzc2FnZSBmcm9tIGFub3RoZXIgY29yZSBpbnN0YW5jZS5cbiAqIE5vdGU6IENvcmVfdW5wcml2aWxlZ2VkIGlzIG5vdCByZWdpc3RlcmVkIG9uIHRoZSBodWIuIGl0IGlzIGEgcHJvdmlkZXIsXG4gKiAgICAgYXMgaXQncyBsb2NhdGlvbiBhbmQgbmFtZSB3b3VsZCBpbmRpY2F0ZS4gVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgYnlcbiAqICAgICBwb3J0LWFwcCB0byByZWxheSBtZXNzYWdlcyB1cCB0byBoaWdoZXIgbGV2ZWxzLiAgTW9yZSBnZW5lcmFsbHksIHRoZVxuICogICAgIG1lc3NhZ2VzIGVtaXR0ZWQgYnkgdGhlIGNvcmUgdG8gJ3RoaXMubWFuYWdlci5lbWl0KHRoaXMubWFuYW5hZ2UuZGVsZWdhdGUnXG4gKiAgICAgU2hvdWxkIGJlIG9uTWVzc2FnZWQgdG8gdGhlIGNvbnRyb2xsaW5nIGNvcmUuXG4gKiBAcGFyYW0ge1N0cmluZ30gc291cmNlIFRoZSBzb3VyY2Ugb2YgdGhlIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gbXNnIFRoZSBtZXNzc2FnZSBmcm9tIGFuIGlzb2xhdGVkIGNvcmUgcHJvdmlkZXIuXG4gKi9cbkNvcmVfdW5wcml2aWxlZ2VkLnByb3RvdHlwZS5vbk1lc3NhZ2UgPSBmdW5jdGlvbihzb3VyY2UsIG1zZykge1xuICBpZiAobXNnLnR5cGUgPT09ICdyZWdpc3RlcicpIHtcbiAgICBDb3JlX3VucHJpdmlsZWdlZC51bmJvdW5kQ2hhbm5lbHNbbXNnLmlkXSA9IHtcbiAgICAgIHJlbW90ZTogdHJ1ZSxcbiAgICAgIHJlc29sdmU6IG1zZy5yZXBseSxcbiAgICAgIHNvdXJjZTogc291cmNlXG4gICAgfTtcbiAgfSBlbHNlIGlmIChtc2cudHlwZSA9PT0gJ2NsZWFyJykge1xuICAgIGRlbGV0ZSBDb3JlX3VucHJpdmlsZWdlZC51bmJvdW5kQ2hhbm5lbHNbbXNnLmlkXTtcbiAgfSBlbHNlIGlmIChtc2cudHlwZSA9PT0gJ2JpbmQnKSB7XG4gICAgaWYgKENvcmVfdW5wcml2aWxlZ2VkLnVuYm91bmRDaGFubmVsc1ttc2cuaWRdKSB7XG4gICAgICB0aGlzLmJpbmRDaGFubmVsKG1zZy5pZCwgZnVuY3Rpb24oKSB7fSwgc291cmNlKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAobXNnLnR5cGUgPT09ICdyZXF1aXJlJykge1xuICAgIHNvdXJjZS5yZXF1aXJlKG1zZy5pZCwgbXNnLm1hbmlmZXN0KTtcbiAgfVxufTtcblxuLyoqXG4gKiBCaW5kIGEgY3VzdG9tIGNoYW5uZWwuXG4gKiBDcmVhdGVzIGEgcHJveHkgaW50ZXJmYWNlIHRvIHRoZSBjdXN0b20gY2hhbm5lbCwgd2hpY2ggd2lsbCBiZSBib3VuZCB0b1xuICogdGhlIHByb3h5IG9idGFpbmVkIHRocm91Z2ggYW4gZWFybGllciBjcmVhdGVDaGFubmVsIGNhbGwuXG4gKiBjaGFubmVsIHRvIGEgcHJveHkuXG4gKiBAbWV0aG9kIGJpbmRDaGFubmVsXG4gKiBAcGFyYW0ge09iamVjdH0gaWRlbnRpZmllciBBbiBpZGVudGlmaWVyIG9idGFpbmVkIHRocm91Z2ggY3JlYXRlQ2hhbm5lbC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbnRpbnVhdGlvbiBBIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aXRoIHRoZSBwcm94eS5cbiAqL1xuQ29yZV91bnByaXZpbGVnZWQucHJvdG90eXBlLmJpbmRDaGFubmVsID0gZnVuY3Rpb24oaWRlbnRpZmllciwgY29udGludWF0aW9uLCBzb3VyY2UpIHtcbiAgdmFyIHRvQmluZCA9IENvcmVfdW5wcml2aWxlZ2VkLnVuYm91bmRDaGFubmVsc1tpZGVudGlmaWVyXSxcbiAgICAgIG5ld1NvdXJjZSA9ICFzb3VyY2U7XG5cbiAgLy8gd2hlbiBiaW5kQ2hhbm5lbCBpcyBjYWxsZWQgZGlyZWN0bHksIHNvdXJjZSB3aWxsIGJlIHVuZGVmaW5lZC5cbiAgLy8gV2hlbiBpdCBpcyBwcm9wb2dhdGVkIGJ5IG9uTWVzc2FnZSwgYSBzb3VyY2UgZm9yIGJpbmRpbmcgd2lsbCBhbHJlYWR5IGV4aXN0LlxuICBpZiAobmV3U291cmNlKSB7XG4gICAgdGhpcy5kZWJ1Zy5kZWJ1ZygnbWFraW5nIGxvY2FsIHByb3h5IGZvciBjb3JlIGJpbmRpbmcnKTtcbiAgICBzb3VyY2UgPSBuZXcgQ29uc3VtZXIoRXZlbnRJbnRlcmZhY2UsIHRoaXMuZGVidWcpO1xuICAgIHRoaXMubWFuYWdlci5zZXR1cChzb3VyY2UpO1xuICB9XG5cbiAgLy8gSWYgdGhpcyBpcyBhIGtub3duIGlkZW50aWZpZXIgYW5kIGlzIGluIHRoZSBzYW1lIGNvbnRleHQsIGJpbmRpbmcgaXMgZWFzeS5cbiAgaWYgKHRvQmluZCAmJiB0b0JpbmQubG9jYWwpIHtcbiAgICB0aGlzLmRlYnVnLmRlYnVnKCdCaW5kaW5nIGEgY2hhbm5lbCB0byBwb3J0IG9uIHRoaXMgaHViOicgKyBzb3VyY2UpO1xuICAgIHRoaXMubWFuYWdlci5jcmVhdGVMaW5rKHNvdXJjZSwgaWRlbnRpZmllciwgdG9CaW5kLnByb3h5LCAnZGVmYXVsdCcpO1xuICAgIGRlbGV0ZSBDb3JlX3VucHJpdmlsZWdlZC51bmJvdW5kQ2hhbm5lbHNbaWRlbnRpZmllcl07XG4gICAgaWYgKHRoaXMubWFuYWdlci5kZWxlZ2F0ZSAmJiB0aGlzLm1hbmFnZXIudG9EZWxlZ2F0ZS5jb3JlKSB7XG4gICAgICB0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm1hbmFnZXIuZGVsZWdhdGUsIHtcbiAgICAgICAgdHlwZTogJ0RlbGVnYXRpb24nLFxuICAgICAgICByZXF1ZXN0OiAnaGFuZGxlJyxcbiAgICAgICAgZmxvdzogJ2NvcmUnLFxuICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgdHlwZTogJ2NsZWFyJyxcbiAgICAgICAgICBpZDogaWRlbnRpZmllclxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodG9CaW5kICYmIHRvQmluZC5yZW1vdGUpIHtcbiAgICB0aGlzLmRlYnVnLmRlYnVnKCdCaW5kaW5nIGEgY2hhbm5lbCBpbnRvIGEgbW9kdWxlLicpO1xuICAgIHRoaXMubWFuYWdlci5jcmVhdGVMaW5rKFxuICAgICAgICBzb3VyY2UsXG4gICAgICAgIG5ld1NvdXJjZSA/ICdkZWZhdWx0JyA6IGlkZW50aWZpZXIsXG4gICAgICAgIHRvQmluZC5zb3VyY2UsXG4gICAgICAgIGlkZW50aWZpZXIpO1xuICAgIHRvQmluZC5yZXNvbHZlKHtcbiAgICAgIHR5cGU6ICdCaW5kIENoYW5uZWwnLFxuICAgICAgcmVxdWVzdDonY29yZScsXG4gICAgICBmbG93OiAnY29yZScsXG4gICAgICBtZXNzYWdlOiB7XG4gICAgICAgIHR5cGU6ICdiaW5kJyxcbiAgICAgICAgaWQ6IGlkZW50aWZpZXJcbiAgICAgIH1cbiAgICB9KTtcbiAgICBkZWxldGUgQ29yZV91bnByaXZpbGVnZWQudW5ib3VuZENoYW5uZWxzW2lkZW50aWZpZXJdO1xuICB9IGVsc2UgaWYgKHRoaXMuaXNJbk1vZHVsZSgpKSB7XG4gICAgdGhpcy5kZWJ1Zy5pbmZvKCdkZWxlZ2F0aW5nIGNoYW5uZWwgYmluZCBmb3IgYW4gdW5rbm93biBJRDonICsgaWRlbnRpZmllcik7XG4gICAgdGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5tYW5hZ2VyLmRlbGVnYXRlLCB7XG4gICAgICB0eXBlOiAnRGVsZWdhdGlvbicsXG4gICAgICByZXF1ZXN0OiAnaGFuZGxlJyxcbiAgICAgIGZsb3c6ICdjb3JlJyxcbiAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgdHlwZTogJ2JpbmQnLFxuICAgICAgICBpZDogaWRlbnRpZmllclxuICAgICAgfVxuICAgIH0pO1xuICAgIHNvdXJjZS5vbmNlKCdzdGFydCcsIGZ1bmN0aW9uKHAsIGNiKSB7XG4gICAgICBjYih0aGlzLmdldENoYW5uZWwocCkpO1xuICAgIH0uYmluZCh0aGlzLCBzb3VyY2UsIGNvbnRpbnVhdGlvbikpO1xuICAgIHRoaXMubWFuYWdlci5jcmVhdGVMaW5rKHNvdXJjZSxcbiAgICAgICAgJ2RlZmF1bHQnLFxuICAgICAgICB0aGlzLm1hbmFnZXIuaHViLmdldERlc3RpbmF0aW9uKHRoaXMubWFuYWdlci5kZWxlZ2F0ZSksXG4gICAgICAgIGlkZW50aWZpZXIpO1xuICAgIGRlbGV0ZSBDb3JlX3VucHJpdmlsZWdlZC51bmJvdW5kQ2hhbm5lbHNbaWRlbnRpZmllcl07XG4gICAgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuZGVidWcud2FybignQXNrZWQgdG8gYmluZCB1bmtub3duIGNoYW5uZWw6ICcgKyBpZGVudGlmaWVyKTtcbiAgICB0aGlzLmRlYnVnLmxvZyhDb3JlX3VucHJpdmlsZWdlZC51bmJvdW5kQ2hhbm5lbHMpO1xuICAgIGNvbnRpbnVhdGlvbigpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChzb3VyY2UuZ2V0SW50ZXJmYWNlKSB7XG4gICAgY29udGludWF0aW9uKHRoaXMuZ2V0Q2hhbm5lbChzb3VyY2UpKTtcbiAgfSBlbHNlIHtcbiAgICBjb250aW51YXRpb24oKTtcbiAgfVxufTtcblxuLyoqXG4gKiBAbWV0aG9kIGlzSW5Nb2R1bGVcbiAqIEBwcml2YXRlXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gV2hldGhlciB0aGlzIGNsYXNzIGlzIHJ1bm5pbmcgaW4gYSBtb2R1bGUuXG4gKi9cbkNvcmVfdW5wcml2aWxlZ2VkLnByb3RvdHlwZS5pc0luTW9kdWxlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gKHRoaXMubWFuYWdlci5kZWxlZ2F0ZSAmJiB0aGlzLm1hbmFnZXIudG9EZWxlZ2F0ZS5jb3JlKTtcbn07XG5cbi8qKlxuICogUmVxdWlyZSBhIGR5bmFtaWMgZGVwZW5kZW5jeSBmb3IgeW91ciBmcmVlZG9tIG1vZHVsZS5cbiAqIElmIG5ldyBwZXJtaXNzaW9ucyBhcmUgbmVlZGVkIGJleW9uZCB3aGF0IGFyZSBhbHJlYWR5IGF2YWlsYWJsZSB0byB0aGVcbiAqIGZyZWVkb20gY29udGV4dCwgdGhlIHVzZXIgd2lsbCBuZWVkIHRvIGFwcHJvdmUgb2YgdGhlIHJlcXVlc3RlZCBwZXJtaXNzaW9ucy5cbiAqIEBtZXRob2QgcmVxdWlyZVxuICogQHBhcmFtIHtTdHJpbmd9IG1hbmlmZXN0IFRoZSBVUkwgb2YgdGhlIG1hbmlmZXN0IHRvIHJlcXVpcmUuXG4gKiBAcGFyYW0ge1N0cmluZ30gYXBpIFRoZSBBUEkgb2YgdGhlIGRlcGVuZGVuY3kgdG8gZXhwb3NlIGlmIG5vdCBkZWZhdWx0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2l0aCB0aGUgZGVwZW5kZW5jeS5cbiAqL1xuQ29yZV91bnByaXZpbGVnZWQucHJvdG90eXBlLnJlcXVpcmUgPSBmdW5jdGlvbiAobWFuaWZlc3QsIGFwaSwgY2FsbGJhY2spIHtcbiAgaWYgKHRoaXMuaXNJbk1vZHVsZSgpICYmIENvcmVfdW5wcml2aWxlZ2VkLm1vZHVsZUludGVybmFsKSB7XG4gICAgLy8gUmVnaXN0ZXIgYSBjYWxsYmFjayB3aXRoIG1vZHVsZUludGVybmFsLlxuICAgIC8vIERlcGVuZGVuY3lOYW1lIGlzIHRoZSBuYW1lIG9mIHRoZSBjaGFubmVsIG1vZHVlbEludGVybmFsIHdpbGwgYWxsb2NhdGVcbiAgICAvLyBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBvbmNlIGEgbGluayB0byB0aGF0IGNoYW5uZWwgaXMgc2Vlbi5cbiAgICB2YXIgZGVwZW5kZW5jeU5hbWUgPVxuICAgICAgICBDb3JlX3VucHJpdmlsZWdlZC5tb2R1bGVJbnRlcm5hbC5yZWdpc3RlcklkKGFwaSwgY2FsbGJhY2spO1xuXG4gICAgLy8gUmVxdWVzdCB0aGUgZGVwZW5kZW5jeSBiZSBhZGRlZC5cbiAgICB0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm1hbmFnZXIuZGVsZWdhdGUsIHtcbiAgICAgIHR5cGU6ICdEZWxlZ2F0aW9uJyxcbiAgICAgIHJlcXVlc3Q6ICdoYW5kbGUnLFxuICAgICAgZmxvdzogJ2NvcmUnLFxuICAgICAgbWVzc2FnZToge1xuICAgICAgICB0eXBlOiAncmVxdWlyZScsXG4gICAgICAgIG1hbmlmZXN0OiBtYW5pZmVzdCxcbiAgICAgICAgaWQ6IGRlcGVuZGVuY3lOYW1lXG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5kZWJ1Zy5lcnJvcignVGhlIHJlcXVpcmUgZnVuY3Rpb24gaW4gZXh0ZXJuYWwgY29udGV4dCBtYWtlcyBubyBzZW5zZScgK1xuICAgICAgICAnIEluc3RlYWQgY3JlYXRlIGEgbmV3IGZyZWVkb20oKSBjb250ZXh0LicpO1xuICAgIGNhbGxiYWNrKHVuZGVmaW5lZCwge1xuICAgICAgZXJyY29kZTogJ0ludmFsaWRDb250ZXh0JyxcbiAgICAgIG1lc3NhZ2U6ICdDYW5ub3QgY2FsbCByZXF1aXJlKCkgZnJvbSB0aGlzIGNvbnRleHQuJ1xuICAgIH0pO1xuICB9XG59O1xuXG4vKipcbiAqIEdldCB0aGUgSUQgb2YgdGhlIGN1cnJlbnQgZnJlZWRvbS5qcyBjb250ZXh0LiAgUHJvdmlkZXMgYW5cbiAqIGFycmF5IG9mIG1vZHVsZSBVUkxzLCB0aGUgbGluZWFnZSBvZiB0aGUgY3VycmVudCBjb250ZXh0LlxuICogV2hlbiBub3QgaW4gYW4gYXBwbGljYXRpb24gY29udGV4dCwgdGhlIElEIGlzIHRoZSBsaW5lYWdlXG4gKiBvZiB0aGUgY3VycmVudCBWaWV3LlxuICogQG1ldGhvZCBnZXRJZFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIGNhbGxlZCB3aXRoIElEIGluZm9ybWF0aW9uLlxuICovXG5Db3JlX3VucHJpdmlsZWdlZC5wcm90b3R5cGUuZ2V0SWQgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAvLyBUT0RPOiBtYWtlIHN1cmUgY29udGV4dElEIGlzIHByb3Blcmx5IGZyb3plbi5cbiAgY2FsbGJhY2soQ29yZV91bnByaXZpbGVnZWQuY29udGV4dElkKTtcbn07XG5cbi8qKlxuICogR2V0IGEgbG9nZ2VyIGZvciBsb2dnaW5nIHRvIHRoZSBmcmVlZG9tLmpzIGxvZ2dlci4gUHJvdmlkZXMgYVxuICogbG9nIG9iamVjdCB3aXRoIGFuIGludGVyZmFjZSBzaW1pbGFyIHRvIHRoZSBzdGFuZGFyZCBqYXZhc2NyaXB0IGNvbnNvbGUsXG4gKiB3aGljaCBsb2dzIHZpYSBkZWJ1Zy5cbiAqIEBtZXRob2QgZ2V0TG9nZ2VyXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgbG9nZ2VyLCB1c2VkIGFzIGl0cyAnc291cmNlJ1xuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2l0aCB0aGUgbG9nZ2VyLlxuICovXG5Db3JlX3VucHJpdmlsZWdlZC5wcm90b3R5cGUuZ2V0TG9nZ2VyID0gZnVuY3Rpb24obmFtZSwgY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sodGhpcy5tYW5hZ2VyLmRlYnVnLmdldExvZ2dlcihuYW1lKSk7XG59O1xuXG4vKipcbiAqIFNldCB0aGUgSUQgb2YgdGhlIGN1cnJlbnQgZnJlZWRvbS5qcyBjb250ZXh0LlxuICogQG1ldGhvZCBzZXRJZFxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7U3RyaW5nW119IGlkIFRoZSBsaW5lYWdlIG9mIHRoZSBjdXJyZW50IGNvbnRleHQuXG4gKiBAcGFyYW0ge01vZHVsZUludGVybmFsfSBtb2R1bGVJbnRlcm5hbCBUaGUgTW9kdWxlIGVudmlyb25tZW50IGlmIG9uZSBleGlzdHMuXG4gKi9cbkNvcmVfdW5wcml2aWxlZ2VkLnByb3RvdHlwZS5zZXRJZCA9IGZ1bmN0aW9uKGlkLCBtb2R1bGVJbnRlcm5hbCkge1xuICBDb3JlX3VucHJpdmlsZWdlZC5jb250ZXh0SWQgPSBpZDtcbiAgQ29yZV91bnByaXZpbGVnZWQubW9kdWxlSW50ZXJuYWwgPSBtb2R1bGVJbnRlcm5hbDtcbn07XG5cbmV4cG9ydHMucHJvdmlkZXIgPSBDb3JlX3VucHJpdmlsZWdlZDtcbmV4cG9ydHMubmFtZSA9IFwiY29yZVwiO1xuZXhwb3J0cy5mbGFncyA9IHttb2R1bGU6IHRydWV9O1xuIiwiLypnbG9iYWxzIGRvY3VtZW50ICovXHJcbi8qanNsaW50IGluZGVudDoyLHNsb3BweTp0cnVlLG5vZGU6dHJ1ZSAqL1xyXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4uLy4uL3NyYy91dGlsJyk7XHJcbnZhciBQcm9taXNlQ29tcGF0ID0gcmVxdWlyZSgnZXM2LXByb21pc2UnKS5Qcm9taXNlO1xyXG5cclxuLyoqXHJcbiAqIEEgZnJlZWRvbS5qcyB2aWV3IGlzIHRoZSBpbnRlcmZhY2UgZm9yIHVzZXIgaW50ZXJhY3Rpb24uXHJcbiAqIEEgdmlldyBleGlzdHMgYXMgYW4gaUZyYW1lLCB3aGljaCBpcyBzaG93biB0byB0aGUgdXNlciBpbiBzb21lIHdheS5cclxuICogY29tbXVuaWNhdGlvbiBiZXR3ZWVuIHRoZSB2aWV3IGFuZCB0aGUgZnJlZWRvbS5qcyBtb2R1bGUgaXMgcGVyZm9ybWVkXHJcbiAqIHRocm91Z2ggdGhlIEhUTUw1IHBvc3RNZXNzYWdlIG1lY2hhbmlzbSwgd2hpY2ggdGhpcyBwcm92aWRlciB0cmFuc2xhdGVzXHJcbiAqIHRvIGZyZWVkb20uanMgbWVzc2FnZSBldmVudHMuXHJcbiAqIEBDbGFzcyBWaWV3X3VucHJpdmlsZWdlZFxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtWaWV3IFByb3ZpZGVyfSBwcm92aWRlclxyXG4gKiBAcGFyYW0ge3Byb3ZpZGVyOlByb3ZpZGVyLG1vZHVsZTpNb2R1bGV9IGNhcCBUaGUgaW5zdGFudGlhdG9yIG9mIHRoZSB2aWV3LlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBkaXNwYXRjaEV2ZW50IEZ1bmN0aW9uIHRvIGNhbGwgdG8gZW1pdCBldmVudHMuXHJcbiAqL1xyXG52YXIgQ29yZV9WaWV3ID0gZnVuY3Rpb24gKHByb3ZpZGVyLCBjYXAsIGRpc3BhdGNoRXZlbnQpIHtcclxuICB0aGlzLnByb3ZpZGVyID0gcHJvdmlkZXI7XHJcbiAgdGhpcy5kaXNwYXRjaEV2ZW50ID0gZGlzcGF0Y2hFdmVudDtcclxuICBzZXRUaW1lb3V0KGNhcC5wcm92aWRlci5vbkNsb3NlLmJpbmQoXHJcbiAgICBjYXAucHJvdmlkZXIsXHJcbiAgICB0aGlzLFxyXG4gICAgdGhpcy5jbG9zZS5iaW5kKHRoaXMsIGZ1bmN0aW9uICgpIHt9KVxyXG4gICksIDApO1xyXG4gIHRoaXMubW9kdWxlID0gY2FwLm1vZHVsZTtcclxuICB1dGlsLmhhbmRsZUV2ZW50cyh0aGlzKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgaXMgdGhlIGRlZmF1bHQgcHJvdmlkZXIgZm9yIGNvcmUudmlldywgdW5sZXNzIG92ZXJyaWRkZW4gYnkgY29udGV4dCBvclxyXG4gKiBhIHVzZXIgc3VwcGxpZWQgcHJvdmlkZXIuIFRoZSBpbnRlcmZhY2UgaXMgZG9jdW1lbnRlZCBhdDpcclxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZyZWVkb21qcy9mcmVlZG9tL3dpa2kvZnJlZWRvbS5qcy1WaWV3c1xyXG4gKlxyXG4gKiBHZW5lcmFsbHksIGEgdmlldyBwcm92aWRlciBjb25zaXN0cyBvZiAzIG1ldGhvZHM6XHJcbiAqIG9uT3BlbiBpcyBjYWxsZWQgd2hlbiBhIHZpZXcgc2hvdWxkIGJlIHNob3duLlxyXG4gKiAgICAgaWQgLSBpcyBhIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGlzIHZpZXcsIHVzZWQgb24gc3Vic2VxdWVudCBjYWxsc1xyXG4gKiAgICAgICAgICBmb3IgY29tbXVuaWNhdGlvbiBhbmQgdG8gZXZlbnR1YWxseSBjbG9zZSB0aGUgdmlldy5cclxuICogICAgIG5hbWUgLSBpcyB0aGUgbmFtZSBvZiB0aGUgdmlldyAoYXMgZGVmaW5lZCBpbiB0aGUgbWFuaWZlc3QpLFxyXG4gKiAgICAgICAgICAgIGluIG9yZGVyIHRvIHBsYWNlIGl0IGFwcHJvcHJpYXRlbHkuXHJcbiAqICAgICBwYWdlIC0gaXMgdGhlIHJlc29sdmVkIFVSTCB0byBvcGVuLlxyXG4gKiAgICAgcmVzb3VyY2VzIC0gaXMgYW4gYXJyYXkgb2YgcmVzb2x2ZWQgVVJMcyB3aGljaCBhcmUgcmVmZXJlbmNlZC5cclxuICogICAgIHBvc3RNZXNzYWdlIC0gaXMgYSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gbWVzc2FnZXMgYXJlIGVtaXR0ZWRcclxuICogICAgICAgICAgICAgICAgICAgYnkgdGhlIHdpbmRvdyBpbiB3aGljaCB0aGUgdmlldyBpcyBvcGVuZWQuXHJcbiAqIG9uT3BlbiByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IGNvbXBsZXRlcyB3aGVuIHRoZSB2aWV3IGlzIGxvYWRlZC5cclxuICogb25NZXNzYWdlIGlzIGNhbGxlZCB0byBzZW5kIGEgbWVzc2FnZSB0byBhbiBvcGVuIHZpZXcuXHJcbiAqICAgICBpZCAtIGlzIHRoZSB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIG9wZW4gdmlldy5cclxuICogICAgIG1lc3NhZ2UgLSBpcyB0aGUgbWVzc2FnZSB0byBwb3N0TWVzc2FnZSB0byB0aGUgdmlldydzIHdpbmRvdy5cclxuICogb25DbG9zZSBpcyBjYWxsZWQgdG8gY2xvc2UgYSB2aWV3LlxyXG4gKiAgICAgaWQgLSBpcyB0aGUgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSB2aWV3LlxyXG4gKi9cclxuQ29yZV9WaWV3LnByb3ZpZGVyID0ge1xyXG4gIGxpc3RlbmVyOiB1bmRlZmluZWQsXHJcbiAgYWN0aXZlOiB7fSxcclxuICBvbk9wZW46IGZ1bmN0aW9uIChpZCwgbmFtZSwgcGFnZSwgcmVzb3VyY2VzLCBwb3N0TWVzc2FnZSkge1xyXG4gICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmJvZHksXHJcbiAgICAgIHJvb3QsXHJcbiAgICAgIGZyYW1lO1xyXG4gICAgXHJcbiAgICBpZiAoIXRoaXMubGlzdGVuZXIpIHtcclxuICAgICAgdGhpcy5saXN0ZW5lciA9IGZ1bmN0aW9uIChtc2cpIHtcclxuICAgICAgICB2YXIgaTtcclxuICAgICAgICBmb3IgKGkgaW4gdGhpcy5hY3RpdmUpIHtcclxuICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZS5oYXNPd25Qcm9wZXJ0eShpKSAmJlxyXG4gICAgICAgICAgICAgIHRoaXMuYWN0aXZlW2ldLnNvdXJjZSA9PT0gbXNnLnNvdXJjZSkge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVtpXS5wb3N0TWVzc2FnZShtc2cuZGF0YSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LmJpbmQodGhpcyk7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5saXN0ZW5lciwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmlld3Mgb3BlbiBieSBkZWZhdWx0IGluIGFuIGVsZW1lbnQgd2l0aCB0aGVpciBJRCwgb3IgZmlsbCB0aGUgcGFnZVxyXG4gICAgLy8gb3RoZXJ3aXNlLlxyXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5hbWUpKSB7XHJcbiAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcm9vdC5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgcm9vdC5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcclxuICAgIHJvb3Quc3R5bGUuZGlzcGxheSA9IFwicmVsYXRpdmVcIjtcclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocm9vdCk7XHJcbiAgICBcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgIGZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcclxuICAgICAgZnJhbWUuc2V0QXR0cmlidXRlKFwic2FuZGJveFwiLCBcImFsbG93LXNjcmlwdHMgYWxsb3ctZm9ybXNcIik7XHJcbiAgICAgIGZyYW1lLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgIGZyYW1lLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgICBmcmFtZS5zdHlsZS5ib3JkZXIgPSBcIjBcIjtcclxuICAgICAgZnJhbWUuc3R5bGUuYmFja2dyb3VuZCA9IFwidHJhbnNwYXJlbnRcIjtcclxuICAgICAgZnJhbWUuc3JjID0gcGFnZTtcclxuICAgICAgZnJhbWUuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHJlc29sdmUsIHRydWUpO1xyXG4gICAgICBmcmFtZS5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIHJlamVjdCwgdHJ1ZSk7XHJcblxyXG4gICAgICByb290LmFwcGVuZENoaWxkKGZyYW1lKTtcclxuXHJcbiAgICAgIHRoaXMuYWN0aXZlW2lkXSA9IHtcclxuICAgICAgICBwb3N0TWVzc2FnZTogcG9zdE1lc3NhZ2UsXHJcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIsXHJcbiAgICAgICAgcm9vdDogcm9vdCxcclxuICAgICAgICBzb3VyY2U6IGZyYW1lLmNvbnRlbnRXaW5kb3dcclxuICAgICAgfTtcclxuICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgfSxcclxuICBvbk1lc3NhZ2U6IGZ1bmN0aW9uIChpZCwgbWVzc2FnZSkge1xyXG4gICAgdGhpcy5hY3RpdmVbaWRdLnNvdXJjZS5wb3N0TWVzc2FnZShtZXNzYWdlLCAnKicpO1xyXG4gIH0sXHJcbiAgb25DbG9zZTogZnVuY3Rpb24gKGlkKSB7XHJcbiAgICB0aGlzLmFjdGl2ZVtpZF0uY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuYWN0aXZlW2lkXS5yb290KTtcclxuICAgIGRlbGV0ZSB0aGlzLmFjdGl2ZVtpZF07XHJcbiAgICBcclxuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmFjdGl2ZSkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5saXN0ZW5lciwgdHJ1ZSk7XHJcbiAgICAgIHRoaXMubGlzdGVuZXIgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEFzayBmb3IgdGhpcyB2aWV3IHRvIG9wZW4gYSBzcGVjaWZpYyBsb2NhdGlvbiwgZWl0aGVyIGEgRmlsZSByZWxhdGl2ZSB0b1xyXG4gKiB0aGUgbG9hZGVyLCBvciBhbiBleHBsaWNpdCBjb2RlIGxvY2F0aW9uLlxyXG4gKiBAbWV0aG9kIHNob3dcclxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIGlkZW50aWZpZXIgb2YgdGhlIHZpZXcuXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbnRpbnVhdGlvbiBGdW5jdGlvbiB0byBjYWxsIHdoZW4gdmlldyBpcyBsb2FkZWQuXHJcbiAqL1xyXG5Db3JlX1ZpZXcucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbiAobmFtZSwgY29udGludWF0aW9uKSB7XHJcbiAgaWYgKHRoaXMuaWQpIHtcclxuICAgIHJldHVybiBjb250aW51YXRpb24odW5kZWZpbmVkLCB7XHJcbiAgICAgIGVycmNvZGU6ICdBTFJFQURZX09QRU4nLFxyXG4gICAgICBtZXNzYWdlOiAnQ2Fubm90IHNob3cgbXVsdGlwbGUgdmlld3MgdGhyb3VnaCBvbmUgaW5zdGFuY2UuJ1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHRoaXMuaWQgPSB1dGlsLmdldElkKCk7XHJcblxyXG4gIHZhciBjb25maWcgPSB0aGlzLm1vZHVsZS5tYW5pZmVzdC52aWV3cyxcclxuICAgIHRvUmVzb2x2ZSA9IFtdO1xyXG4gIGlmICghY29uZmlnIHx8ICFjb25maWdbbmFtZV0pIHtcclxuICAgIHJldHVybiBjb250aW51YXRpb24odW5kZWZpbmVkLCB7XHJcbiAgICAgIGVycmNvZGU6ICdOT05fRVhJU1RBTlQnLFxyXG4gICAgICBtZXNzYWdlOiAnVmlldyBub3QgZm91bmQ6ICcgKyBuYW1lXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGlmIChjb25maWdbbmFtZV0ubWFpbiAmJiBjb25maWdbbmFtZV0uZmlsZXMpIHtcclxuICAgIHRvUmVzb2x2ZSA9IGNvbmZpZ1tuYW1lXS5maWxlcy5jb25jYXQoY29uZmlnW25hbWVdLm1haW4pO1xyXG4gICAgUHJvbWlzZUNvbXBhdC5hbGwodG9SZXNvbHZlLm1hcChmdW5jdGlvbiAoZm5hbWUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMubW9kdWxlLnJlc291cmNlLmdldCh0aGlzLm1vZHVsZS5tYW5pZmVzdElkLCBmbmFtZSk7XHJcbiAgICB9LmJpbmQodGhpcykpKS50aGVuKGZ1bmN0aW9uIChmaWxlcykge1xyXG4gICAgICB0aGlzLnByb3ZpZGVyLm9uT3Blbih0aGlzLmlkLFxyXG4gICAgICAgICAgbmFtZSxcclxuICAgICAgICAgIGZpbGVzW2ZpbGVzLmxlbmd0aCAtIDFdLFxyXG4gICAgICAgICAgZmlsZXMsXHJcbiAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQuYmluZCh0aGlzLCAnbWVzc2FnZScpKS50aGVuKFxyXG4gICAgICAgIGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgICAgICAvLyBNYWtlIHN1cmUgY29udGludWF0aW9uIGlzIGNhbGxlZCB3aXRob3V0IGFuIGFyZ3VtZW50LlxyXG4gICAgICAgICAgYygpO1xyXG4gICAgICAgIH0uYmluZCh7fSwgY29udGludWF0aW9uKSxcclxuICAgICAgICBjb250aW51YXRpb24uYmluZCh7fSwgdW5kZWZpbmVkKVxyXG4gICAgICApO1xyXG4gICAgfS5iaW5kKHRoaXMpLCBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgIHRoaXMubW9kdWxlLmRlYnVnLmVycm9yKCdVbmFibGUgdG8gb3BlbiB2aWV3ICcgKyBuYW1lICsgJzogJywgZXJyKTtcclxuICAgICAgY29udGludWF0aW9uKHVuZGVmaW5lZCwge1xyXG4gICAgICAgIGVycmNvZGU6ICdWSUVXX01BTEZPUk1FRCcsXHJcbiAgICAgICAgbWVzc2FnZTogJ01hbGZvcm1lZCBWaWV3IERlY2xhcmF0aW9uOiAnICsgZXJyXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnRpbnVhdGlvbih1bmRlZmluZWQsIHtcclxuICAgICAgZXJyY29kZTogJ05PTl9FWElTVEFOVCcsXHJcbiAgICAgIG1lc3NhZ2U6ICdWaWV3IG5vdCBmb3VuZDogJyArIG5hbWVcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBpc1NlY3VyZSBkZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG1vZHVsZSBjYW4gaGF2ZSBjb25maWRlbmNlIHRoYXQgaXRzXHJcbiAqIGNvbW11bmljYXRpb24gd2l0aCBpdHMgdmlldyBjYW5ub3QgYmUgaW50ZXJjZXB0ZWQgYnkgYW4gdW50cnVzdGVkIDNyZCBwYXJ0eS5cclxuICogSW4gcHJhY3RpY2UsIHRoaXMgbWVhbnMgdGhhdCBpdHMgb2theSBmb3IgdGhlIHJ1bnRpbWUgdG8gaGF2ZSBhY2Nlc3MgdG8gdGhlXHJcbiAqIG1lc3NhZ2VzLCBhbmQgaWYgdGhlIGNvbnRleHQgaXMgYSB3ZWIgc2VydmVyIG9yIGEgYnJvd3NlciBleHRlbnNpb24gdGhlblxyXG4gKiB0aGF0IGNvbnRleHQgaXMgdHJ1c3RlZC4gSG93ZXZlciwgaWYgYSBwcm92aWRlciB3YW50cyB0byBhbGxvdyB0aGVpciBlLmcuXHJcbiAqIHNvY2lhbCBwcm92aWRlciB0byBiZSB1c2VkIG9uIGFyYml0cmFyeSB3ZWJzaXRlcywgdGhpcyBtZWNoYW5pc20gbWVhbnMgdGhhdFxyXG4gKiBpZiB0aGUgd2Vic2l0ZSB1c2VzIGEgdHJ1c3RlZCB2ZXJzaW9uIG9mIHRoZSBmcmVlZG9tLmpzIGxpYnJhcnksIHRoZW4gdGhlXHJcbiAqIG1vZHVsZSBjYW4gYmUgdXNlZC5cclxuICogQG1ldGhvZCBpc1NlY3VyZVxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gaWYgdGhlIGNoYW5uZWwgdG8gdGhlIHZpZXcgaXMgc2VjdXJlLlxyXG4gKi9cclxuQ29yZV9WaWV3LnByb3RvdHlwZS5pc1NlY3VyZSA9IGZ1bmN0aW9uIChjb250aW51YXRpb24pIHtcclxuICBjb250aW51YXRpb24oZmFsc2UpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFNlbmQgYSBtZXNzYWdlIHRvIGFuIG9wZW4gdmlldy5cclxuICogQG1ldGhvZCBwb3N0TWVzc2FnZVxyXG4gKi9cclxuQ29yZV9WaWV3LnByb3RvdHlwZS5wb3N0TWVzc2FnZSA9IGZ1bmN0aW9uIChtc2csIGNvbnRpbnVhdGlvbikge1xyXG4gIGlmICghdGhpcy5pZCkge1xyXG4gICAgcmV0dXJuIGNvbnRpbnVhdGlvbih1bmRlZmluZWQsIHtcclxuICAgICAgZXJyY29kZTogJ05PVF9PUEVOJyxcclxuICAgICAgbWVzc2FnZTogJ0Nhbm5vdCBwb3N0IG1lc3NhZ2UgdG8gdW5pbml0aWFsaXplZCB2aWV3LidcclxuICAgIH0pO1xyXG4gIH1cclxuICB0aGlzLnByb3ZpZGVyLm9uTWVzc2FnZSh0aGlzLmlkLCBtc2cpO1xyXG4gIGNvbnRpbnVhdGlvbigpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENsb3NlIGFuIGFjdGl2ZSB2aWV3LlxyXG4gKiBAbWV0aG9kIGNsb3NlXHJcbiAqL1xyXG5Db3JlX1ZpZXcucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKGNvbnRpbnVhdGlvbikge1xyXG4gIGlmICghdGhpcy5pZCkge1xyXG4gICAgcmV0dXJuIGNvbnRpbnVhdGlvbih1bmRlZmluZWQsIHtcclxuICAgICAgZXJyY29kZTogJ05PVF9PUEVOJyxcclxuICAgICAgbWVzc2FnZTogJ0Nhbm5vdCBjbG9zZSB1bmluaXRpYWxpemVkIHZpZXcuJ1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHRoaXMucHJvdmlkZXIub25DbG9zZSh0aGlzLmlkKTtcclxuICBkZWxldGUgdGhpcy5pZDtcclxuXHJcbiAgY29udGludWF0aW9uKCk7XHJcbn07XHJcblxyXG5cclxuLyoqXHJcbiAqIEFsbG93IGEgd2ViIHBhZ2UgdG8gcmVkZWZpbmUgYmVoYXZpb3IgZm9yIGhvdyB2aWV3cyBhcmUgc2hvd24uXHJcbiAqIEBtZXRob2QgcmVnaXN0ZXJcclxuICogQHN0YXRpY1xyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBQYWdlUHJvdmlkZXIgVGhlIGN1c3RvbSB2aWV3IGJlaGF2aW9yLlxyXG4gKi9cclxuQ29yZV9WaWV3LnJlZ2lzdGVyID0gZnVuY3Rpb24gKFBhZ2VQcm92aWRlcikge1xyXG4gIHZhciBwcm92aWRlciA9IFBhZ2VQcm92aWRlciA/IG5ldyBQYWdlUHJvdmlkZXIoKSA6IENvcmVfVmlldy5wcm92aWRlcjtcclxuICBleHBvcnRzLnByb3ZpZGVyID0gQ29yZV9WaWV3LmJpbmQodGhpcywgcHJvdmlkZXIpO1xyXG59O1xyXG5cclxuZXhwb3J0cy5wcm92aWRlciA9IENvcmVfVmlldy5iaW5kKHRoaXMsIENvcmVfVmlldy5wcm92aWRlcik7XHJcbmV4cG9ydHMubmFtZSA9ICdjb3JlLnZpZXcnO1xyXG5leHBvcnRzLnJlZ2lzdGVyID0gQ29yZV9WaWV3LnJlZ2lzdGVyO1xyXG5leHBvcnRzLmZsYWdzID0ge3Byb3ZpZGVyOiB0cnVlLCBtb2R1bGU6IHRydWV9O1xyXG4iLCIvKmdsb2JhbHMgV2ViU29ja2V0LCBBcnJheUJ1ZmZlciwgQmxvYiwgVWludDhBcnJheSwgY29uc29sZSAqL1xuLypqc2xpbnQgc2xvcHB5OnRydWUsIG5vZGU6dHJ1ZSAqL1xuXG52YXIgV1NIYW5kbGUgPSBudWxsO1xudmFyIG5vZGVTdHlsZSA9IGZhbHNlO1xuXG4vKipcbiAqIEEgV2ViU29ja2V0IGNvcmUgcHJvdmlkZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY2FwIENhcGFiaWxpdGllcyBmb3IgdGhlIHByb3ZpZGVyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBkaXNwYXRjaEV2ZW50IEZ1bmN0aW9uIHRvIGRpc3BhdGNoIGV2ZW50cy5cbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFJlbW90ZSBVUkwgdG8gY29ubmVjdCB3aXRoLlxuICogQHBhcmFtIHtTdHJpbmdbXX0gcHJvdG9jb2xzIFN1YlByb3RvY29scyB0byBvcGVuLlxuICogQHBhcmFtIHtXZWJTb2NrZXQ/fSBzb2NrZXQgQW4gYWx0ZXJuYXRpdmUgc29ja2V0IGNsYXNzIHRvIHVzZS5cbiAqL1xudmFyIFdTID0gZnVuY3Rpb24gKGNhcCwgZGlzcGF0Y2hFdmVudCwgdXJsLCBwcm90b2NvbHMsIHNvY2tldCkge1xuICB2YXIgV1NJbXBsZW1lbnRhdGlvbiA9IG51bGwsXG4gICAgZXJyb3I7XG4gIHRoaXMuaXNOb2RlID0gbm9kZVN0eWxlO1xuICBpZiAodHlwZW9mIHNvY2tldCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBXU0ltcGxlbWVudGF0aW9uID0gc29ja2V0O1xuICB9IGVsc2UgaWYgKFdTSGFuZGxlICE9PSBudWxsKSB7XG4gICAgV1NJbXBsZW1lbnRhdGlvbiA9IFdTSGFuZGxlO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBXZWJTb2NrZXQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgV1NJbXBsZW1lbnRhdGlvbiA9IFdlYlNvY2tldDtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmVycm9yKCdQbGF0Zm9ybSBkb2VzIG5vdCBzdXBwb3J0IFdlYlNvY2tldCcpO1xuICB9XG5cbiAgdGhpcy5kaXNwYXRjaEV2ZW50ID0gZGlzcGF0Y2hFdmVudDtcbiAgdHJ5IHtcbiAgICBpZiAocHJvdG9jb2xzKSB7XG4gICAgICB0aGlzLndlYnNvY2tldCA9IG5ldyBXU0ltcGxlbWVudGF0aW9uKHVybCwgcHJvdG9jb2xzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy53ZWJzb2NrZXQgPSBuZXcgV1NJbXBsZW1lbnRhdGlvbih1cmwpO1xuICAgIH1cbiAgICB0aGlzLndlYnNvY2tldC5iaW5hcnlUeXBlID0gJ2FycmF5YnVmZmVyJztcbiAgfSBjYXRjaCAoZSkge1xuICAgIGVycm9yID0ge307XG4gICAgaWYgKGUgaW5zdGFuY2VvZiBTeW50YXhFcnJvcikge1xuICAgICAgZXJyb3IuZXJyY29kZSA9ICdTWU5UQVgnO1xuICAgIH0gZWxzZSB7XG4gICAgICBlcnJvci5lcnJjb2RlID0gZS5uYW1lO1xuICAgIH1cbiAgICBlcnJvci5tZXNzYWdlID0gZS5tZXNzYWdlO1xuICAgIGRpc3BhdGNoRXZlbnQoJ29uRXJyb3InLCBlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHRoaXMuaXNOb2RlKSB7XG4gICAgdGhpcy53ZWJzb2NrZXQub24oJ21lc3NhZ2UnLCB0aGlzLm9uTWVzc2FnZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLndlYnNvY2tldC5vbignb3BlbicsIHRoaXMub25PcGVuLmJpbmQodGhpcykpO1xuICAgIC8vIG5vZGUuanMgd2Vic29ja2V0IGltcGxlbWVudGF0aW9uIG5vdCBjb21wbGlhbnRcbiAgICB0aGlzLndlYnNvY2tldC5vbignY2xvc2UnLCB0aGlzLm9uQ2xvc2UuYmluZCh0aGlzLCB7XG4gICAgICBjb2RlOiAwLFxuICAgICAgcmVhc29uOiAnVU5LTk9XTicsXG4gICAgICB3YXNDbGVhbjogdHJ1ZVxuICAgIH0pKTtcbiAgICB0aGlzLndlYnNvY2tldC5vbignZXJyb3InLCB0aGlzLm9uRXJyb3IuYmluZCh0aGlzKSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy53ZWJzb2NrZXQub25vcGVuID0gdGhpcy5vbk9wZW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLndlYnNvY2tldC5vbmNsb3NlID0gdGhpcy5vbkNsb3NlLmJpbmQodGhpcyk7XG4gICAgdGhpcy53ZWJzb2NrZXQub25tZXNzYWdlID0gdGhpcy5vbk1lc3NhZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLndlYnNvY2tldC5vbmVycm9yID0gdGhpcy5vbkVycm9yLmJpbmQodGhpcyk7XG4gIH1cbn07XG5cbldTLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKGRhdGEsIGNvbnRpbnVhdGlvbikge1xuICB2YXIgdG9TZW5kID0gZGF0YS50ZXh0IHx8IGRhdGEuYmluYXJ5IHx8IGRhdGEuYnVmZmVyLFxuICAgIGVycmNvZGUsXG4gICAgbWVzc2FnZTtcblxuICBpZiAodG9TZW5kKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIEZvciBub2RlLmpzLCB3ZSBoYXZlIHRvIGRvIHdlaXJkIGJ1ZmZlciBzdHVmZlxuICAgICAgaWYgKHRoaXMuaXNOb2RlICYmIHRvU2VuZCBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgICAgIHRoaXMud2Vic29ja2V0LnNlbmQoXG4gICAgICAgICAgbmV3IFVpbnQ4QXJyYXkodG9TZW5kKSxcbiAgICAgICAgICB7IGJpbmFyeTogdHJ1ZSB9LFxuICAgICAgICAgIHRoaXMub25FcnJvci5iaW5kKHRoaXMpXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLndlYnNvY2tldC5zZW5kKHRvU2VuZCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKGUgaW5zdGFuY2VvZiBTeW50YXhFcnJvcikge1xuICAgICAgICBlcnJjb2RlID0gXCJTWU5UQVhcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVycmNvZGUgPSBcIklOVkFMSURfU1RBVEVcIjtcbiAgICAgIH1cbiAgICAgIG1lc3NhZ2UgPSBlLm1lc3NhZ2U7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGVycmNvZGUgPSBcIkJBRF9TRU5EXCI7XG4gICAgbWVzc2FnZSA9IFwiTm8gdGV4dCwgYmluYXJ5LCBvciBidWZmZXIgZGF0YSBmb3VuZC5cIjtcbiAgfVxuXG4gIGlmIChlcnJjb2RlKSB7XG4gICAgY29udGludWF0aW9uKHVuZGVmaW5lZCwge1xuICAgICAgZXJyY29kZTogZXJyY29kZSxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjb250aW51YXRpb24oKTtcbiAgfVxufTtcblxuV1MucHJvdG90eXBlLmdldFJlYWR5U3RhdGUgPSBmdW5jdGlvbiAoY29udGludWF0aW9uKSB7XG4gIGNvbnRpbnVhdGlvbih0aGlzLndlYnNvY2tldC5yZWFkeVN0YXRlKTtcbn07XG5cbldTLnByb3RvdHlwZS5nZXRCdWZmZXJlZEFtb3VudCA9IGZ1bmN0aW9uIChjb250aW51YXRpb24pIHtcbiAgY29udGludWF0aW9uKHRoaXMud2Vic29ja2V0LmJ1ZmZlcmVkQW1vdW50KTtcbn07XG5cbldTLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uIChjb2RlLCByZWFzb24sIGNvbnRpbnVhdGlvbikge1xuICB0cnkge1xuICAgIGlmIChjb2RlICYmIHJlYXNvbikge1xuICAgICAgdGhpcy53ZWJzb2NrZXQuY2xvc2UoY29kZSwgcmVhc29uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy53ZWJzb2NrZXQuY2xvc2UoKTtcbiAgICB9XG4gICAgY29udGludWF0aW9uKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB2YXIgZXJyb3JDb2RlO1xuICAgIGlmIChlIGluc3RhbmNlb2YgU3ludGF4RXJyb3IpIHtcbiAgICAgIGVycm9yQ29kZSA9IFwiU1lOVEFYXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVycm9yQ29kZSA9IFwiSU5WQUxJRF9BQ0NFU1NcIjtcbiAgICB9XG4gICAgY29udGludWF0aW9uKHVuZGVmaW5lZCwge1xuICAgICAgZXJyY29kZTogZXJyb3JDb2RlLFxuICAgICAgbWVzc2FnZTogZS5tZXNzYWdlXG4gICAgfSk7XG4gIH1cbn07XG5cbldTLnByb3RvdHlwZS5vbk9wZW4gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbk9wZW4nKTtcbn07XG5cbldTLnByb3RvdHlwZS5vbk1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnQsIGZsYWdzKSB7XG4gIHZhciBkYXRhID0ge307XG4gIGlmICh0aGlzLmlzTm9kZSAmJiBmbGFncyAmJiBmbGFncy5iaW5hcnkpIHtcbiAgICBkYXRhLmJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KGV2ZW50KS5idWZmZXI7XG4gIH0gZWxzZSBpZiAodGhpcy5pc05vZGUpIHtcbiAgICBkYXRhLnRleHQgPSBldmVudDtcbiAgfSBlbHNlIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIGV2ZW50LmRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgIGRhdGEuYnVmZmVyID0gZXZlbnQuZGF0YTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgQmxvYiAhPT0gJ3VuZGVmaW5lZCcgJiYgZXZlbnQuZGF0YSBpbnN0YW5jZW9mIEJsb2IpIHtcbiAgICBkYXRhLmJpbmFyeSA9IGV2ZW50LmRhdGE7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV2ZW50LmRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgZGF0YS50ZXh0ID0gZXZlbnQuZGF0YTtcbiAgfVxuICB0aGlzLmRpc3BhdGNoRXZlbnQoJ29uTWVzc2FnZScsIGRhdGEpO1xufTtcblxuV1MucHJvdG90eXBlLm9uRXJyb3IgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgLy8gTm90aGluZyB0byBwYXNzIG9uXG4gIC8vIFNlZTogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTg4MDQyOTgvMzAwNTM5XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCgnb25FcnJvcicpO1xufTtcblxuV1MucHJvdG90eXBlLm9uQ2xvc2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCdvbkNsb3NlJyxcbiAgICAgICAgICAgICAgICAgICAgIHtjb2RlOiBldmVudC5jb2RlLFxuICAgICAgICAgICAgICAgICAgICAgIHJlYXNvbjogZXZlbnQucmVhc29uLFxuICAgICAgICAgICAgICAgICAgICAgIHdhc0NsZWFuOiBldmVudC53YXNDbGVhbn0pO1xufTtcblxuZXhwb3J0cy5wcm92aWRlciA9IFdTO1xuZXhwb3J0cy5uYW1lID0gJ2NvcmUud2Vic29ja2V0JztcbmV4cG9ydHMuc2V0U29ja2V0ID0gZnVuY3Rpb24gKGltcGwsIGlzTm9kZSkge1xuICBXU0hhbmRsZSA9IGltcGw7XG4gIG5vZGVTdHlsZSA9IGlzTm9kZTtcbn07XG4iLCIvKmpzaGludCBub2RlOnRydWUqL1xudmFyIFByb21pc2VDb21wYXQgPSByZXF1aXJlKCdlczYtcHJvbWlzZScpLlByb21pc2U7XG52YXIgWGhyQ2xhc3MgPSBudWxsO1xuXG52YXIgWGhyUHJvdmlkZXIgPSBmdW5jdGlvbihjYXAsIGRpc3BhdGNoRXZlbnQpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICB0eXBlb2Ygd2luZG93LlhNTEh0dHBSZXF1ZXN0ICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICBYaHJDbGFzcyA9PT0gbnVsbCkgeyAvLyBmcmVlZG9tXG4gICAgWGhyQ2xhc3MgPSB3aW5kb3cuWE1MSHR0cFJlcXVlc3Q7XG4gIH0gZWxzZSBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICBYaHJDbGFzcyA9PT0gbnVsbCkgeyAvLyBmcmVlZG9tLWZvci1maXJlZm94XG4gICAgWGhyQ2xhc3MgPSBYTUxIdHRwUmVxdWVzdDtcbiAgfSBlbHNlIGlmIChYaHJDbGFzcyA9PT0gbnVsbCkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJQbGF0Zm9ybSBkb2VzIG5vdCBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0XCIpO1xuICB9XG5cbiAgdGhpcy5fZGlzcGF0Y2hFdmVudCA9IGRpc3BhdGNoRXZlbnQ7XG4gIHRoaXMuX3hociA9IG5ldyBYaHJDbGFzcygpO1xuXG4gIHNldFRpbWVvdXQoY2FwLnByb3ZpZGVyLm9uQ2xvc2UuYmluZChcbiAgICBjYXAucHJvdmlkZXIsXG4gICAgdGhpcyxcbiAgICB0aGlzLmFib3J0LmJpbmQodGhpcylcbiAgKSwgMCk7XG5cbiAgdGhpcy5fZXZlbnRzID0gW1xuICAgIFwibG9hZHN0YXJ0XCIsXG4gICAgXCJwcm9ncmVzc1wiLFxuICAgIFwiYWJvcnRcIixcbiAgICBcImVycm9yXCIsXG4gICAgXCJsb2FkXCIsXG4gICAgXCJ0aW1lb3V0XCIsXG4gICAgXCJsb2FkZW5kXCIsXG4gICAgXCJyZWFkeXN0YXRlY2hhbmdlXCJcbiAgXTtcbiAgdGhpcy5fc2V0dXBMaXN0ZW5lcnMoKTtcblxufTtcblxuWGhyUHJvdmlkZXIucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbihtZXRob2QsIHVybCwgYXN5bmMsIHVzZXIsIHBhc3N3b3JkKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICBpZiAodHlwZW9mIGFzeW5jICE9PSBcInVuZGVmaW5lZFwiICYmIGFzeW5jICE9PSB0cnVlKSB7XG4gICAgcmV0dXJuIFByb21pc2VDb21wYXQucmVqZWN0KHtcbiAgICAgIGVycmNvZGU6IFwiSW52YWxpZEFjY2Vzc0Vycm9yXCIsXG4gICAgICBtZXNzYWdlOiBcImFzeW5jIHNob3VsZCBhbHdheXMgYmUgc2V0IHRvIHRydWVcIlxuICAgIH0pO1xuICB9XG5cbiAgLy8gRm9yY2UgYXN5bmMgdG8gYmUgdHJ1ZS4gdW5kZWZpbmVkIGNhbiBsZWFkIHRvIGFzeW5jPWZhbHNlIGluIENocm9tZSBwYWNrYWdlZCBhcHBzXG4gIHRoaXMuX3hoci5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlLCB1c2VyLCBwYXNzd29yZCk7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUoKTtcbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24oZGF0YSkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgaWYgKCEoZGF0YSBpbnN0YW5jZW9mIE9iamVjdCkpIHtcbiAgICB0aGlzLl94aHIuc2VuZCgpO1xuICB9IGVsc2UgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoXCJzdHJpbmdcIikpIHtcbiAgICB0aGlzLl94aHIuc2VuZChkYXRhLnN0cmluZyk7XG4gIH0gZWxzZSBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShcImJ1ZmZlclwiKSkge1xuICAgIHRoaXMuX3hoci5zZW5kKGRhdGEuYnVmZmVyKTtcbiAgfSBlbHNlIGlmIChkYXRhLmhhc093blByb3BlcnR5KFwiYmxvYlwiKSkge1xuICAgIHRoaXMuX3hoci5zZW5kKGRhdGEuYmxvYik7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5feGhyLnNlbmQoKTtcbiAgfVxuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKCk7XG59O1xuXG5YaHJQcm92aWRlci5wcm90b3R5cGUuYWJvcnQgPSBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHRoaXMuX3hoci5hYm9ydCgpO1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKCk7XG59O1xuXG5YaHJQcm92aWRlci5wcm90b3R5cGUuZ2V0UmVzcG9uc2VIZWFkZXIgPSBmdW5jdGlvbihoZWFkZXIpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUodGhpcy5feGhyLmdldFJlc3BvbnNlSGVhZGVyKGhlYWRlcikpO1xufTtcblxuWGhyUHJvdmlkZXIucHJvdG90eXBlLmdldEFsbFJlc3BvbnNlSGVhZGVycyA9IGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSh0aGlzLl94aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpO1xufTtcblxuWGhyUHJvdmlkZXIucHJvdG90eXBlLnNldFJlcXVlc3RIZWFkZXIgPSBmdW5jdGlvbihoZWFkZXIsIHZhbHVlKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICB0aGlzLl94aHIuc2V0UmVxdWVzdEhlYWRlcihoZWFkZXIsIHZhbHVlKTtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSgpO1xufTtcblxuWGhyUHJvdmlkZXIucHJvdG90eXBlLm92ZXJyaWRlTWltZVR5cGUgPSBmdW5jdGlvbihtaW1lKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICB0aGlzLl94aHIub3ZlcnJpZGVNaW1lVHlwZShtaW1lKTtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSgpO1xufTtcblxuWGhyUHJvdmlkZXIucHJvdG90eXBlLmdldFJlYWR5U3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUodGhpcy5feGhyLnJlYWR5U3RhdGUpO1xufTtcblxuWGhyUHJvdmlkZXIucHJvdG90eXBlLmdldFJlc3BvbnNlID0gZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICBpZiAodGhpcy5feGhyLnJlc3BvbnNlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZShudWxsKTtcbiAgfSBlbHNlIGlmICh0aGlzLl94aHIucmVzcG9uc2VUeXBlID09PSBcInRleHRcIiB8fCB0aGlzLl94aHIucmVzcG9uc2VUeXBlID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSh7IHN0cmluZzogdGhpcy5feGhyLnJlc3BvbnNlIH0pO1xuICB9IGVsc2UgaWYgKHRoaXMuX3hoci5yZXNwb25zZVR5cGUgPT09IFwiYXJyYXlidWZmZXJcIikge1xuICAgIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUoeyBidWZmZXI6IHRoaXMuX3hoci5yZXNwb25zZSB9KTtcbiAgfSBlbHNlIGlmICh0aGlzLl94aHIucmVzcG9uc2VUeXBlID09PSBcImpzb25cIikge1xuICAgIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUoeyBvYmplY3Q6IHRoaXMuX3hoci5yZXNwb25zZSB9KTtcbiAgfVxuXG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlamVjdChcImNvcmUueGhyIGNhbm5vdCBkZXRlcm1pbmUgdHlwZSBvZiByZXNwb25zZVwiKTtcbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5nZXRSZXNwb25zZVRleHQgPSBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUodGhpcy5feGhyLnJlc3BvbnNlVGV4dCk7XG59O1xuXG5YaHJQcm92aWRlci5wcm90b3R5cGUuZ2V0UmVzcG9uc2VVUkwgPSBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUodGhpcy5feGhyLnJlc3BvbnNlVVJMKTtcbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5nZXRSZXNwb25zZVR5cGUgPSBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUodGhpcy5feGhyLnJlc3BvbnNlVHlwZSk7XG59O1xuXG5YaHJQcm92aWRlci5wcm90b3R5cGUuc2V0UmVzcG9uc2VUeXBlID0gZnVuY3Rpb24odHlwZSkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgdGhpcy5feGhyLnJlc3BvbnNlVHlwZSA9IHR5cGU7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUoKTtcbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5nZXRTdGF0dXMgPSBmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHJldHVybiBQcm9taXNlQ29tcGF0LnJlc29sdmUodGhpcy5feGhyLnN0YXR1cyk7XG59O1xuXG5YaHJQcm92aWRlci5wcm90b3R5cGUuZ2V0U3RhdHVzVGV4dCA9IGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSh0aGlzLl94aHIuc3RhdHVzVGV4dCk7XG59O1xuXG5YaHJQcm92aWRlci5wcm90b3R5cGUuZ2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSh0aGlzLl94aHIudGltZW91dCk7XG59O1xuXG5YaHJQcm92aWRlci5wcm90b3R5cGUuc2V0VGltZW91dCA9IGZ1bmN0aW9uKHRpbWVvdXQpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIHRoaXMuX3hoci50aW1lb3V0ID0gdGltZW91dDtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSgpO1xufTtcblxuWGhyUHJvdmlkZXIucHJvdG90eXBlLmdldFdpdGhDcmVkZW50aWFscyA9IGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgcmV0dXJuIFByb21pc2VDb21wYXQucmVzb2x2ZSh0aGlzLl94aHIud2l0aENyZWRlbnRpYWxzKTtcbn07XG5cblhoclByb3ZpZGVyLnByb3RvdHlwZS5zZXRXaXRoQ3JlZGVudGlhbHMgPSBmdW5jdGlvbih3Yykge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgdGhpcy5feGhyLndpdGhDcmVkZW50aWFscyA9IHdjO1xuICByZXR1cm4gUHJvbWlzZUNvbXBhdC5yZXNvbHZlKCk7XG59O1xuXG5YaHJQcm92aWRlci5wcm90b3R5cGUuX3NldHVwTGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICAvLyBEb3dubG9hZCBldmVudHNcbiAgdGhpcy5fZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgIHRoaXMuX3hoci5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZnVuY3Rpb24oZXZlbnROYW1lLCBldmVudCkge1xuICAgICAgdGhpcy5fZGlzcGF0Y2hFdmVudChcIm9uXCIgKyBldmVudE5hbWUsIGV2ZW50KTtcbiAgICB9LmJpbmQodGhpcywgZXZlbnROYW1lKSwgZmFsc2UpO1xuICB9LmJpbmQodGhpcykpO1xuXG4gIC8vIFVwbG9hZCBldmVudHNcbiAgdGhpcy5fZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgIHRoaXMuX3hoci51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGZ1bmN0aW9uKGV2ZW50TmFtZSwgZXZlbnQpIHtcbiAgICAgIHRoaXMuX2Rpc3BhdGNoRXZlbnQoXCJvbnVwbG9hZFwiICsgZXZlbnROYW1lLCBldmVudCk7XG4gICAgfS5iaW5kKHRoaXMsIGV2ZW50TmFtZSksIGZhbHNlKTtcbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cbmV4cG9ydHMubmFtZSA9IFwiY29yZS54aHJcIjtcbmV4cG9ydHMucHJvdmlkZXIgPSBYaHJQcm92aWRlcjtcbmV4cG9ydHMuc3R5bGUgPSBcInByb3ZpZGVQcm9taXNlc1wiO1xuZXhwb3J0cy5mbGFncyA9IHsgcHJvdmlkZXI6IHRydWUgfTtcbmV4cG9ydHMuc2V0SW1wbCA9IGZ1bmN0aW9uKGltcGwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIFhockNsYXNzID0gaW1wbDtcbn07XG4iLCIvKmpzbGludCBpbmRlbnQ6Mixicm93c2VyOnRydWUsIG5vZGU6dHJ1ZSAqL1xudmFyIFByb21pc2VDb21wYXQgPSByZXF1aXJlKCdlczYtcHJvbWlzZScpLlByb21pc2U7XG5cbnZhciBvQXV0aFJlZGlyZWN0SWQgPSAnZnJlZWRvbS5vYXV0aC5yZWRpcmVjdC5oYW5kbGVyJztcblxudmFyIGxvYWRlZE9uU3RhcnR1cCA9IGZhbHNlO1xuXG52YXIgVElNRU9VVCA9IDUwMDA7XG5cbi8qKlxuICogSWYgdGhlcmUgaXMgcmVkaXJlY3Rpb24gYmFjayB0byB0aGUgcGFnZSwgYW5kIG9BdXRoUmVkaXJlY3RJRCBpcyBzZXQsXG4gKiB0aGVuIHJlcG9ydCB0aGUgYXV0aCBhbmQgY2xvc2UgdGhlIHdpbmRvdy5cbiAqL1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdyAmJiB3aW5kb3cubG9jYXRpb24gJiZcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBsb2FkZWRPblN0YXJ0dXAgPSB0cnVlO1xuICB9LCB0cnVlKTtcblxuICBpZiAod2luZG93LmxvY2FsU3RvcmFnZSAmJlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZihvQXV0aFJlZGlyZWN0SWQpID4gMCkge1xuICAgIC8vIFRoaXMgd2lsbCB0cmlnZ2VyIGEgJ3N0b3JhZ2UnIGV2ZW50IG9uIHRoZSB3aW5kb3cuIFNlZSBzdG9yYWdlTGlzdGVuZXJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0ob0F1dGhSZWRpcmVjdElkLCBuZXcgRGF0ZSgpKTtcbiAgICB3aW5kb3cuY2xvc2UoKTtcbiAgfVxufVxuXG52YXIgTG9jYWxQYWdlQXV0aCA9IGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgdGhpcy5saXN0ZW5lcnMgPSB7fTtcbn07XG5cbi8qKlxuICogSW5kaWNhdGUgdGhlIGludGVudGlvbiB0byBpbml0aWF0ZSBhbiBvQXV0aCBmbG93LCBhbGxvd2luZyBhbiBhcHByb3ByaWF0ZVxuICogb0F1dGggcHJvdmlkZXIgdG8gYmVnaW4gbW9uaXRvcmluZyBmb3IgcmVkaXJlY3Rpb24uXG4gKlxuICogQG1ldGhvZCBpbml0aWF0ZU9BdXRoXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSByZWRpcmVjdFVSSXMgLSBvQXV0aCByZWRpcmVjdGlvbiBVUklzIHJlZ2lzdGVyZWQgd2l0aCB0aGVcbiAqICAgICBwcm92aWRlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbnRpbnVhdGlvbiAtIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBjb21wbGV0ZVxuICogICAgRXhwZWN0ZWQgdG8gc2VlIGEgdmFsdWUgb2Ygc2NoZW1hOiB7e3JlZGlyZWN0OlN0cmluZywgc3RhdGU6U3RyaW5nfX1cbiAqICAgIHdoZXJlICdyZWRpcmVjdCcgaXMgdGhlIGNob3NlbiByZWRpcmVjdCBVUklcbiAqICAgIGFuZCAnc3RhdGUnIGlzIHRoZSBzdGF0ZSB0byBwYXNzIHRvIHRoZSBVUkkgb24gY29tcGxldGlvbiBvZiBvQXV0aFxuICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBjYW4gaGFuZGxlLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuTG9jYWxQYWdlQXV0aC5wcm90b3R5cGUuaW5pdGlhdGVPQXV0aCA9IGZ1bmN0aW9uKHJlZGlyZWN0VVJJcywgY29udGludWF0aW9uKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93ICYmIGxvYWRlZE9uU3RhcnR1cCkge1xuICAgIHZhciBoZXJlID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgd2luZG93LmxvY2F0aW9uLmhvc3QgK1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgaWYgKHJlZGlyZWN0VVJJcy5pbmRleE9mKGhlcmUpID4gLTEpIHtcbiAgICAgIGNvbnRpbnVhdGlvbih7XG4gICAgICAgIHJlZGlyZWN0OiBoZXJlLFxuICAgICAgICBzdGF0ZTogb0F1dGhSZWRpcmVjdElkICsgTWF0aC5yYW5kb20oKVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIG9BdXRoIGNsaWVudC1zaWRlIGZsb3cgLSBsYXVuY2ggdGhlIHByb3ZpZGVkIFVSTFxuICogVGhpcyBtdXN0IGJlIGNhbGxlZCBhZnRlciBpbml0aWF0ZU9BdXRoIHdpdGggdGhlIHJldHVybmVkIHN0YXRlIG9iamVjdFxuICpcbiAqIEBtZXRob2QgbGF1bmNoQXV0aEZsb3dcbiAqIEBwYXJhbSB7U3RyaW5nfSBhdXRoVXJsIC0gVGhlIFVSTCB0aGF0IGluaXRpYXRlcyB0aGUgYXV0aCBmbG93LlxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgc3RyaW5nPn0gc3RhdGVPYmogLSBUaGUgcmV0dXJuIHZhbHVlIGZyb20gaW5pdGlhdGVPQXV0aFxuICogQHBhcmFtIHtCb29sZWFufSBpbnRlcmFjdGl2ZSAtIFdoZXRoZXIgdG8gbGF1bmNoIGFuIGludGVyYWN0aXZlIGZsb3dcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbnRpbnVhdGlvbiAtIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBjb21wbGV0ZVxuICogICAgRXhwZWN0ZWQgdG8gc2VlIGEgU3RyaW5nIHZhbHVlIHRoYXQgaXMgdGhlIHJlc3BvbnNlIFVybCBjb250YWluaW5nIHRoZSBhY2Nlc3MgdG9rZW5cbiAqL1xuTG9jYWxQYWdlQXV0aC5wcm90b3R5cGUubGF1bmNoQXV0aEZsb3cgPSBmdW5jdGlvbihhdXRoVXJsLCBzdGF0ZU9iaiwgaW50ZXJhY3RpdmUsIGNvbnRpbnVhdGlvbikge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgdmFyIGxpc3RlbmVyID0gdGhpcy5zdG9yYWdlTGlzdGVuZXIuYmluZCh0aGlzLCBjb250aW51YXRpb24sIHN0YXRlT2JqKTtcbiAgdGhpcy5saXN0ZW5lcnNbc3RhdGVPYmouc3RhdGVdID0gbGlzdGVuZXI7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic3RvcmFnZVwiLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBTdGFydCAnZXIgdXBcbiAgd2luZG93Lm9wZW4oYXV0aFVybCk7XG5cbiAgaWYgKGludGVyYWN0aXZlID09PSBmYWxzZSkge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5saXN0ZW5lcnNbc3RhdGVPYmouc3RhdGVdKSB7XG4gICAgICAgIC8vIExpc3RlbmVyIGhhcyBub3QgYmVlbiBkZWxldGVkLCBpbmRpY2F0aW5nIG9hdXRoIGhhcyBjb21wbGV0ZWQuXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgXCJzdG9yYWdlXCIsIHRoaXMubGlzdGVuZXJzW3N0YXRlT2JqLnN0YXRlXSwgZmFsc2UpO1xuICAgICAgICBkZWxldGUgdGhpcy5saXN0ZW5lcnNbc3RhdGVPYmouc3RhdGVdO1xuICAgICAgICBjb250aW51YXRpb24odW5kZWZpbmVkLCAnRXJyb3IgbGF1bmNoaW5nIGF1dGggZmxvdycpO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSwgVElNRU9VVCk7XG4gIH1cbn07XG5cbi8qKlxuICogSGFuZGxlciBmb3Igc3RvcmFnZSBldmVudHMsIHdoaWNoIHJlbGF5cyB0aGVtIHRvIHdhaXRpbmcgY2xpZW50cy5cbiAqIEZvciB0aGUgc2NoZW1hIG9mIHRoZSBzdG9yYWdlIG1zZywgc2VlOlxuICogaHR0cDovL3R1dG9yaWFscy5qZW5rb3YuY29tL2h0bWw1L2xvY2FsLXN0b3JhZ2UuaHRtbCNzdG9yYWdlLWV2ZW50c1xuICogQHBhcmFtIHtGdW5jdGlvbn0gY29udGludWF0aW9uIGZ1bmN0aW9uIHRvIGNhbGwgd2l0aCByZXN1bHRcbiAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIHN0cmluZz59IHN0YXRlT2JqIHRoZSByZXR1cm4gdmFsdWUgZnJvbSBpbml0aWF0ZU9BdXRoXG5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtc2cgc3RvcmFnZSBldmVudFxuICovXG5Mb2NhbFBhZ2VBdXRoLnByb3RvdHlwZS5zdG9yYWdlTGlzdGVuZXIgPSBmdW5jdGlvbihjb250aW51YXRpb24sIHN0YXRlT2JqLCBtc2cpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICBpZiAobXNnLnVybC5pbmRleE9mKHN0YXRlT2JqLnN0YXRlKSA+IC0xKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdG9yYWdlXCIsIHRoaXMubGlzdGVuZXJzW3N0YXRlT2JqLnN0YXRlXSwgZmFsc2UpO1xuICAgIGRlbGV0ZSB0aGlzLmxpc3RlbmVyc1tzdGF0ZU9iai5zdGF0ZV07XG4gICAgY29udGludWF0aW9uKG1zZy51cmwpO1xuICB9XG59O1xuXG4vKipcbiAqIElmIHdlIGhhdmUgYSBsb2NhbCBkb21haW4sIGFuZCBmcmVlZG9tLmpzIGlzIGxvYWRlZCBhdCBzdGFydHVwLCB3ZSBjYW4gdXNlXG4gKiB0aGUgbG9jYWwgcGFnZSBhcyBhIHJlZGlyZWN0IFVSSS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBMb2NhbFBhZ2VBdXRoO1xuIiwiLypqc2xpbnQgaW5kZW50OjIsYnJvd3Nlcjp0cnVlLCBub2RlOnRydWUgKi9cbnZhciBQcm9taXNlQ29tcGF0ID0gcmVxdWlyZSgnZXM2LXByb21pc2UnKS5Qcm9taXNlO1xuXG52YXIgb0F1dGhSZWRpcmVjdElkID0gJ2ZyZWVkb20ub2F1dGgucmVkaXJlY3QuaGFuZGxlcic7XG5cbnZhciBUSU1FT1VUID0gNTAwMDtcblxuZnVuY3Rpb24gUmVtb3RlUGFnZUF1dGgoKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICB0aGlzLmxpc3RlbmVycyA9IHt9O1xufVxuXG4vKipcbiAqIEluZGljYXRlIHRoZSBpbnRlbnRpb24gdG8gaW5pdGlhdGUgYW4gb0F1dGggZmxvdywgYWxsb3dpbmcgYW4gYXBwcm9wcmlhdGVcbiAqIG9BdXRoIHByb3ZpZGVyIHRvIGJlZ2luIG1vbml0b3JpbmcgZm9yIHJlZGlyZWN0aW9uLlxuICpcbiAqIEBtZXRob2QgaW5pdGlhdGVPQXV0aFxuICogQHBhcmFtIHtzdHJpbmdbXX0gcmVkaXJlY3RVUklzIC0gb0F1dGggcmVkaXJlY3Rpb24gVVJJcyByZWdpc3RlcmVkIHdpdGggdGhlXG4gKiAgICAgcHJvdmlkZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb250aW51YXRpb24gLSBGdW5jdGlvbiB0byBjYWxsIHdoZW4gY29tcGxldGVcbiAqICAgIEV4cGVjdGVkIHRvIHNlZSBhIHZhbHVlIG9mIHNjaGVtYToge3tyZWRpcmVjdDpTdHJpbmcsIHN0YXRlOlN0cmluZ319XG4gKiAgICB3aGVyZSAncmVkaXJlY3QnIGlzIHRoZSBjaG9zZW4gcmVkaXJlY3QgVVJJXG4gKiAgICBhbmQgJ3N0YXRlJyBpcyB0aGUgc3RhdGUgdG8gcGFzcyB0byB0aGUgVVJJIG9uIGNvbXBsZXRpb24gb2Ygb0F1dGhcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgY2FuIGhhbmRsZSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cblJlbW90ZVBhZ2VBdXRoLnByb3RvdHlwZS5pbml0aWF0ZU9BdXRoID0gZnVuY3Rpb24ocmVkaXJlY3RVUklzLCBjb250aW51YXRpb24pIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyAmJiBnbG9iYWwgJiYgZ2xvYmFsLmRvY3VtZW50KSB7XG4gICAgZm9yICh2YXIgaT0wOyBpPHJlZGlyZWN0VVJJcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gVE9ETzogcmVtb3ZlIHJlc3RyaWN0aW9uIG9uIFVSTCBwYXR0ZXJuIG1hdGNoLlxuICAgICAgaWYgKChyZWRpcmVjdFVSSXNbaV0uaW5kZXhPZignaHR0cDovLycpID09PSAwIHx8XG4gICAgICAgICAgcmVkaXJlY3RVUklzW2ldLmluZGV4T2YoJ2h0dHBzOi8vJykgPT09IDApICYmXG4gICAgICAgICAgcmVkaXJlY3RVUklzW2ldLmluZGV4T2YoJ29hdXRoLXJlbGF5Lmh0bWwnKSA+IDApIHtcbiAgICAgICAgY29udGludWF0aW9uKHtcbiAgICAgICAgICByZWRpcmVjdDogcmVkaXJlY3RVUklzW2ldLFxuICAgICAgICAgIHN0YXRlOiBvQXV0aFJlZGlyZWN0SWQgKyBNYXRoLnJhbmRvbSgpXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBvQXV0aCBjbGllbnQtc2lkZSBmbG93IC0gbGF1bmNoIHRoZSBwcm92aWRlZCBVUkxcbiAqIFRoaXMgbXVzdCBiZSBjYWxsZWQgYWZ0ZXIgaW5pdGlhdGVPQXV0aCB3aXRoIHRoZSByZXR1cm5lZCBzdGF0ZSBvYmplY3RcbiAqXG4gKiBAbWV0aG9kIGxhdW5jaEF1dGhGbG93XG4gKiBAcGFyYW0ge1N0cmluZ30gYXV0aFVybCAtIFRoZSBVUkwgdGhhdCBpbml0aWF0ZXMgdGhlIGF1dGggZmxvdy5cbiAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIHN0cmluZz59IHN0YXRlT2JqIC0gVGhlIHJldHVybiB2YWx1ZSBmcm9tIGluaXRpYXRlT0F1dGhcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaW50ZXJhY3RpdmUgLSBXaGV0aGVyIHRvIGxhdW5jaCBhbiBpbnRlcmFjdGl2ZSBmbG93XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb250aW51YXRpb24gLSBGdW5jdGlvbiB0byBjYWxsIHdoZW4gY29tcGxldGVcbiAqICAgIEV4cGVjdGVkIHRvIHNlZSBhIFN0cmluZyB2YWx1ZSB0aGF0IGlzIHRoZSByZXNwb25zZSBVcmwgY29udGFpbmluZyB0aGUgYWNjZXNzIHRva2VuXG4gKi9cblJlbW90ZVBhZ2VBdXRoLnByb3RvdHlwZS5sYXVuY2hBdXRoRmxvdyA9IGZ1bmN0aW9uKGF1dGhVcmwsIHN0YXRlT2JqLCBpbnRlcmFjdGl2ZSwgY29udGludWF0aW9uKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICB2YXIgZnJhbWUgPSBnbG9iYWwuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gIGZyYW1lLnNyYyA9IHN0YXRlT2JqLnJlZGlyZWN0O1xuICBmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gIGdsb2JhbC5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZyYW1lKTtcbiAgZnJhbWUuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmxpc3RlbmVyc1tzdGF0ZU9iai5zdGF0ZV0gPSBjb250aW51YXRpb247XG4gICAgd2luZG93Lm9wZW4oYXV0aFVybCk7XG5cbiAgICBmcmFtZS5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKHN0YXRlT2JqLnN0YXRlLCAnKicpO1xuICB9LmJpbmQodGhpcykpO1xuXG4gIHZhciBoYXNDcmVkZW50aWFscyA9IGZhbHNlO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChmcmFtZSwgbXNnKSB7XG4gICAgaWYgKG1zZy5kYXRhICYmIG1zZy5kYXRhLmtleSAmJiBtc2cuZGF0YS51cmwgJiYgdGhpcy5saXN0ZW5lcnNbbXNnLmRhdGEua2V5XSkge1xuICAgICAgaGFzQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgICAgdGhpcy5saXN0ZW5lcnNbbXNnLmRhdGEua2V5XShtc2cuZGF0YS51cmwpO1xuICAgICAgZGVsZXRlIHRoaXMubGlzdGVuZXJzW21zZy5kYXRhLmtleV07XG4gICAgICB0cnkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGZyYW1lKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGUpO1xuICAgICAgfVxuICAgIH1cbiAgfS5iaW5kKHRoaXMsIGZyYW1lKSwgZmFsc2UpO1xuXG4gIGlmIChpbnRlcmFjdGl2ZSA9PT0gZmFsc2UpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKGhhc0NyZWRlbnRpYWxzID09PSBmYWxzZSkge1xuICAgICAgICBjb250aW51YXRpb24odW5kZWZpbmVkLCAnRXJyb3IgbGF1bmNoaW5nIGF1dGggZmxvdycpO1xuICAgICAgICBkZWxldGUgdGhpcy5saXN0ZW5lcnNbc3RhdGVPYmouc3RhdGVdO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZnJhbWUpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpLCBUSU1FT1VUKTtcbiAgfVxufTtcblxuLyoqXG4gKiBJZiB3ZSBoYXZlIGEgbG9jYWwgZG9tYWluLCBhbmQgZnJlZWRvbS5qcyBpcyBsb2FkZWQgYXQgc3RhcnR1cCwgd2UgY2FuIHVzZVxuICogdGhlIGxvY2FsIHBhZ2UgYXMgYSByZWRpcmVjdCBVUkkuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gUmVtb3RlUGFnZUF1dGg7XG4iLCIvKmpzbGludCBpbmRlbnQ6Mix3aGl0ZTp0cnVlLG5vZGU6dHJ1ZSxzbG9wcHk6dHJ1ZSAqL1xudmFyIFByb21pc2VDb21wYXQgPSByZXF1aXJlKCdlczYtcHJvbWlzZScpLlByb21pc2U7XG5cbi8qKlxuICogVGhlIEFQSSByZWdpc3RyeSBmb3IgZnJlZWRvbS5qcy4gIFVzZWQgdG8gbG9vayB1cCByZXF1ZXN0ZWQgQVBJcyxcbiAqIGFuZCBwcm92aWRlcyBhIGJyaWRnZSBmb3IgY29yZSBBUElzIHRvIGFjdCBsaWtlIG5vcm1hbCBBUElzLlxuICogQENsYXNzIEFQSVxuICogQHBhcmFtIHtEZWJ1Z30gZGVidWcgVGhlIGRlYnVnZ2VyIHRvIHVzZSBmb3IgbG9nZ2luZy5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG52YXIgQXBpID0gZnVuY3Rpb24oZGVidWcpIHtcbiAgdGhpcy5kZWJ1ZyA9IGRlYnVnO1xuICB0aGlzLmFwaXMgPSB7fTtcbiAgdGhpcy5wcm92aWRlcnMgPSB7fTtcbiAgdGhpcy53YWl0ZXJzID0ge307XG59O1xuXG4vKipcbiAqIEdldCBhbiBBUEkuXG4gKiBAbWV0aG9kIGdldFxuICogQHBhcmFtIHtTdHJpbmd9IGFwaSBUaGUgQVBJIG5hbWUgdG8gZ2V0LlxuICogQHJldHVybnMge3tuYW1lOlN0cmluZywgZGVmaW5pdGlvbjpBUEl9fSBUaGUgQVBJIGlmIHJlZ2lzdGVyZWQuXG4gKi9cbkFwaS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oYXBpKSB7XG4gIGlmICghdGhpcy5hcGlzW2FwaV0pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBhcGksXG4gICAgZGVmaW5pdGlvbjogdGhpcy5hcGlzW2FwaV1cbiAgfTtcbn07XG5cbi8qKlxuICogU2V0IGFuIEFQSSB0byBhIGRlZmluaXRpb24uXG4gKiBAbWV0aG9kIHNldFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIEFQSSBuYW1lLlxuICogQHBhcmFtIHtBUEl9IGRlZmluaXRpb24gVGhlIEpTT04gb2JqZWN0IGRlZmluaW5nIHRoZSBBUEkuXG4gKi9cbkFwaS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24obmFtZSwgZGVmaW5pdGlvbikge1xuICB0aGlzLmFwaXNbbmFtZV0gPSBkZWZpbml0aW9uO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciBhIGNvcmUgQVBJIHByb3ZpZGVyLlxuICogQG1ldGhvZCByZWdpc3RlclxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgdGhlIEFQSSBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29uc3RydWN0b3IgdGhlIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIHByb3ZpZGVyIGZvciB0aGUgQVBJLlxuICogQHBhcmFtIHtTdHJpbmc/fSBzdHlsZSBUaGUgc3R5bGUgdGhlIHByb3ZpZGVyIGlzIHdyaXR0ZW4gaW4uIFZhbGlkIHN0eWxlc1xuICogICBhcmUgZG9jdW1lbnRlZCBpbiBmZG9tLnBvcnQuUHJvdmlkZXIucHJvdG90eXBlLmdldEludGVyZmFjZS4gRGVmYXVsdHMgdG9cbiAqICAgcHJvdmlkZUFzeW5jaHJvbm91c1xuICogQHBhcmFtIHtPYmplY3Q/fSBmbGFncyBQcmVmaXhlZCBhcmd1bWVudHMgbmVlZGVkIGJ5IHRoZSBjb3JlIHByb3ZpZGVyLlxuICogICB2YWxpZCBrZXlzIGFyZSAnbW9kdWxlJywgJ3Byb3ZpZGVyJywgYW5kICdjb25maWcnLlxuICovXG5BcGkucHJvdG90eXBlLnJlZ2lzdGVyID0gZnVuY3Rpb24obmFtZSwgY29uc3RydWN0b3IsIHN0eWxlLCBmbGFncykge1xuICB2YXIgaSxcbiAgICBhcmdzO1xuXG4gIHRoaXMucHJvdmlkZXJzW25hbWVdID0ge1xuICAgIGNvbnN0cnVjdG9yOiBjb25zdHJ1Y3RvcixcbiAgICBzdHlsZTogc3R5bGUgfHwgJ3Byb3ZpZGVBc3luY2hyb25vdXMnLFxuICAgIGZsYWdzOiBmbGFncyB8fCB7fVxuICB9O1xuXG4gIGlmICh0aGlzLndhaXRlcnNbbmFtZV0pIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy53YWl0ZXJzW25hbWVdLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBhcmdzID0ge307XG4gICAgICBpZiAoZmxhZ3MubW9kdWxlKSB7XG4gICAgICAgIGFyZ3MubW9kdWxlID0gdGhpcy53YWl0ZXJzW25hbWVdW2ldLmZyb207XG4gICAgICB9XG4gICAgICBpZiAoZmxhZ3MuY29uZmlnKSB7XG4gICAgICAgIGFyZ3MuY29uZmlnID0gdGhpcy53YWl0ZXJzW25hbWVdW2ldLmZyb20uY29uZmlnO1xuICAgICAgfVxuICAgICAgdGhpcy53YWl0ZXJzW25hbWVdW2ldLnJlc29sdmUoe1xuICAgICAgICBhcmdzOiBhcmdzLFxuICAgICAgICBpbnN0OiBjb25zdHJ1Y3Rvci5iaW5kKHt9LCBhcmdzKVxuICAgICAgfSk7XG4gICAgfVxuICAgIGRlbGV0ZSB0aGlzLndhaXRlcnNbbmFtZV07XG4gIH1cbn07XG5cbi8qKlxuICogR2V0IGEgY29yZSBBUEkgY29ubmVjdGVkIHRvIGEgZ2l2ZW4gRnJlZURPTSBtb2R1bGUuXG4gKiBAbWV0aG9kIGdldENvcmVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIHRoZSBBUEkgdG8gcmV0cmlldmUuXG4gKiBAcGFyYW0ge01vZHVsZX0gZnJvbSBUaGUgaW5zdGFudGlhdGluZyBBcHAuXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gQSBwcm9taXNlIG9mIGEgZmRvbS5BcHAgbG9vay1hbGlrZSAoYW5kIGFyZ3VtZW50IG9iamVjdCksXG4gKiBtYXRjaGluZyBhIGxvY2FsIEFQSSBkZWZpbml0aW9uLlxuICovXG5BcGkucHJvdG90eXBlLmdldENvcmUgPSBmdW5jdGlvbihuYW1lLCBmcm9tKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICBpZiAodGhpcy5hcGlzW25hbWVdKSB7XG4gICAgICBpZiAodGhpcy5wcm92aWRlcnNbbmFtZV0pIHtcbiAgICAgICAgdmFyIGFyZ3MgPSB7fTtcbiAgICAgICAgaWYgKHRoaXMucHJvdmlkZXJzW25hbWVdLmZsYWdzLm1vZHVsZSkge1xuICAgICAgICAgIGFyZ3MubW9kdWxlID0gZnJvbTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm92aWRlcnNbbmFtZV0uZmxhZ3MuY29uZmlnKSB7XG4gICAgICAgICAgYXJncy5jb25maWcgPSBmcm9tLmNvbmZpZztcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICBhcmdzOiBhcmdzLFxuICAgICAgICAgIGluc3Q6IHRoaXMucHJvdmlkZXJzW25hbWVdLmNvbnN0cnVjdG9yLmJpbmQoe30sIGFyZ3MpXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCF0aGlzLndhaXRlcnNbbmFtZV0pIHtcbiAgICAgICAgICB0aGlzLndhaXRlcnNbbmFtZV0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLndhaXRlcnNbbmFtZV0ucHVzaCh7XG4gICAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICAgICAgICByZWplY3Q6IHJlamVjdCxcbiAgICAgICAgICBmcm9tOiBmcm9tXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlYnVnLndhcm4oJ0FwaS5nZXRDb3JlIGFza2VkIGZvciB1bmtub3duIGNvcmU6ICcgKyBuYW1lKTtcbiAgICAgIHJlamVjdChudWxsKTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG4vKipcbiAqIENvbmZpZ3VyZSBhIHtQcm92aWRlcn0gdG8gcHJvdmlkZSBhIG5hbWVkIGNvcmUgYXBpIG9uIGJlaGFsZiBvZiBhXG4gKiBnaXZlbiBwb3J0LlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIHByb3ZpZGVyXG4gKiBAcGFyYW0ge1Byb3ZpZGVyfSBwcm92aWRlciBUaGUgcHJvdmlkZXIgdGhhdCB3aWxsIHByb3ZpZGUgdGhlIG5hbWVkIGFwaVxuICogQHBhcmFtIHtNb2R1bGV9IGZyb20gVGhlIG1vZHVsZSByZXF1ZXN0aW5nIHRoZSBjb3JlIHByb3ZpZGVyLlxuICovXG5BcGkucHJvdG90eXBlLnByb3ZpZGVDb3JlID0gZnVuY3Rpb24gKG5hbWUsIHByb3ZpZGVyLCBmcm9tKSB7XG4gIHJldHVybiB0aGlzLmdldENvcmUobmFtZSwgZnJvbSkudGhlbihmdW5jdGlvbiAoY29yZSkge1xuICAgIHZhciBmbGFncyA9IHRoaXMucHJvdmlkZXJzW25hbWVdLmZsYWdzLFxuICAgICAgaWZhY2UgPSBwcm92aWRlci5nZXRQcm94eUludGVyZmFjZSgpO1xuICAgIGlmIChmbGFncy5wcm92aWRlcikge1xuICAgICAgY29yZS5hcmdzLnByb3ZpZGVyID0gaWZhY2U7XG4gICAgfVxuICAgIGlmYWNlKClbdGhpcy5wcm92aWRlcnNbbmFtZV0uc3R5bGVdKGNvcmUuaW5zdCk7XG4gIH0uYmluZCh0aGlzKSwgZnVuY3Rpb24gKGVycikge1xuICAgIHRoaXMuZGVidWcuZXJyb3IoJ0NvdWxkIG5vdCBwcm92aWRlIGNvcmU6ICcsIGVycik7XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG4vKipcbiAqIFNodXRkb3duIHRoZSBBUEkgcmVnaXN0cnksIGFuZCByZWplY3QgYW55IHBlbmRpbmcgd2FpdGVycy5cbiAqL1xuQXBpLnByb3RvdHlwZS5jbGVhbnVwID0gZnVuY3Rpb24gKCkge1xuICB2YXIgcHJvcCxcbiAgICBkb1JlamVjdCA9IGZ1bmN0aW9uICh3YWl0ZXIpIHtcbiAgICAgIHdhaXRlci5yZWplY3QoKTtcbiAgICB9O1xuICBmb3IgKHByb3AgaW4gdGhpcy53YWl0ZXJzKSB7XG4gICAgaWYgKHRoaXMud2FpdGVycy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgdGhpcy53YWl0ZXJzW3Byb3BdLmZvckVhY2goZG9SZWplY3QpO1xuICAgIH1cbiAgfVxuICBkZWxldGUgdGhpcy53YWl0ZXJzO1xufTtcblxuLyoqXG4gKiBEZWZpbmVzIHRoZSBhcGlzIG1vZHVsZSBhbmQgcHJvdmlkZXIgcmVnaXN0cnkuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gQXBpO1xuIiwiLypqc2xpbnQgaW5kZW50OjIsbm9kZTp0cnVlICovXG5cbnZhciBCdW5kbGUgPSBmdW5jdGlvbiAoKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdGhpcy5pbnRlcmZhY2VzID0gcmVxdWlyZSgnLi4vZGlzdC9idW5kbGUuY29tcGlsZWQnKTtcbn07XG5cbi8qKlxuICogUG9wdWxhdGUgYW4gQVBJIHJlZ2lzdHJ5IHdpdGggcHJvdmlkZWQgcHJvdmlkZXJzLCBhbmQgd2l0aCBrbm93biBBUElcbiAqIGRlZmluaXRpb25zLlxuICogQHN0YXRpY1xuICogQG1ldGhvZCByZWdpc3RlclxuICogQHBhcmFtIHt7bmFtZTogc3RyaW5nLCBwcm92aWRlcjogRnVuY3Rpb24sIHN0eWxlPzogc3RyaW5nfVtdfSBwcm92aWRlcnNcbiAqICAgVGhlIGNvcmUgcHJvdmlkZXJzIG1hZGUgYXZhaWxhYmxlIHRvIHRoaXMgZnJlZWRvbS5qcyBpbnN0YW5jZS5cbiAqIEBwYXJhbSB7QXBpfSByZWdpc3RyeSBUaGUgQVBJIHJlZ2lzdHJ5IHRvIHBvcHVsYXRlLlxuICovXG5leHBvcnRzLnJlZ2lzdGVyID0gZnVuY3Rpb24gKHByb3ZpZGVycywgcmVnaXN0cnkpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB2YXIgYnVuZGxlID0gbmV3IEJ1bmRsZSgpO1xuICBidW5kbGUuaW50ZXJmYWNlcy5mb3JFYWNoKGZ1bmN0aW9uIChhcGkpIHtcbiAgICBpZiAoYXBpICYmIGFwaS5uYW1lICYmIGFwaS5hcGkpIHtcbiAgICAgIHJlZ2lzdHJ5LnNldChhcGkubmFtZSwgYXBpLmFwaSk7XG4gICAgfVxuICB9KTtcblxuICBwcm92aWRlcnMuZm9yRWFjaChmdW5jdGlvbiAocHJvdmlkZXIpIHtcbiAgICBpZiAocHJvdmlkZXIubmFtZSkge1xuICAgICAgcmVnaXN0cnkucmVnaXN0ZXIocHJvdmlkZXIubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyLnByb3ZpZGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIuc3R5bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlci5mbGFncyk7XG4gICAgfVxuICB9KTtcbn07XG4iLCIvKmdsb2JhbHMgQmxvYiwgQXJyYXlCdWZmZXIsIERhdGFWaWV3ICovXG4vKmpzbGludCBpbmRlbnQ6Miwgbm9kZTp0cnVlLCBzbG9wcHk6dHJ1ZSAqL1xudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuLyoqXG4gKiBBIGZyZWVkb20gcG9ydCBmb3IgYSB1c2VyLWFjY2Vzc2FibGUgYXBpLlxuICogQGNsYXNzIENvbnN1bWVyXG4gKiBAaW1wbGVtZW50cyBQb3J0XG4gKiBAdXNlcyBoYW5kbGVFdmVudHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnRlcmZhY2VDbHMgVGhlIGFwaSBpbnRlcmZhY2UgZXhwb3NlZCBieSB0aGlzIGNvbnN1bWVyLlxuICogQHBhcmFtIHtEZWJ1Z30gZGVidWcgVGhlIGRlYnVnZ2VyIHRvIHVzZSBmb3IgbG9nZ2luZy5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG52YXIgQ29uc3VtZXIgPSBmdW5jdGlvbiAoaW50ZXJmYWNlQ2xzLCBkZWJ1Zykge1xuICB0aGlzLmlkID0gQ29uc3VtZXIubmV4dElkKCk7XG4gIHRoaXMuaW50ZXJmYWNlQ2xzID0gaW50ZXJmYWNlQ2xzO1xuICB0aGlzLmRlYnVnID0gZGVidWc7XG4gIHV0aWwuaGFuZGxlRXZlbnRzKHRoaXMpO1xuXG4gIHRoaXMuaWZhY2VzID0ge307XG4gIHRoaXMuY2xvc2VIYW5kbGVycyA9IHt9O1xuICB0aGlzLmVycm9ySGFuZGxlcnMgPSB7fTtcbiAgdGhpcy5lbWl0cyA9IHt9O1xufTtcblxuLyoqXG4gKiBSZWNlaXZlIGluY29taW5nIG1lc3NhZ2VzIGZvciB0aGlzIGNvbnN1bWVyLlxuICogQG1ldGhvZCBvbk1lc3NhZ2VcbiAqIEBwYXJhbSB7U3RyaW5nfSBzb3VyY2UgVGhlIHNvdXJjZSBvZiB0aGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlIFRoZSByZWNlaXZlZCBtZXNzYWdlLlxuICovXG5Db25zdW1lci5wcm90b3R5cGUub25NZXNzYWdlID0gZnVuY3Rpb24gKHNvdXJjZSwgbWVzc2FnZSkge1xuICBpZiAoc291cmNlID09PSAnY29udHJvbCcgJiYgbWVzc2FnZS5yZXZlcnNlKSB7XG4gICAgdGhpcy5lbWl0Q2hhbm5lbCA9IG1lc3NhZ2UuY2hhbm5lbDtcbiAgICB0aGlzLmVtaXQodGhpcy5lbWl0Q2hhbm5lbCwge1xuICAgICAgdHlwZTogJ2NoYW5uZWwgYW5ub3VuY2VtZW50JyxcbiAgICAgIGNoYW5uZWw6IG1lc3NhZ2UucmV2ZXJzZVxuICAgIH0pO1xuICAgIHRoaXMuZW1pdCgnc3RhcnQnKTtcbiAgfSBlbHNlIGlmIChzb3VyY2UgPT09ICdjb250cm9sJyAmJiBtZXNzYWdlLnR5cGUgPT09ICdzZXR1cCcpIHtcbiAgICB0aGlzLmNvbnRyb2xDaGFubmVsID0gbWVzc2FnZS5jaGFubmVsO1xuICB9IGVsc2UgaWYgKHNvdXJjZSA9PT0gJ2NvbnRyb2wnICYmIG1lc3NhZ2UudHlwZSA9PT0gJ2Nsb3NlJykge1xuICAgIGRlbGV0ZSB0aGlzLmNvbnRyb2xDaGFubmVsO1xuICAgIHRoaXMuZG9DbG9zZSgpO1xuICB9IGVsc2Uge1xuICAgIGlmICghdGhpcy5lbWl0Q2hhbm5lbCAmJiBtZXNzYWdlLmNoYW5uZWwpIHtcbiAgICAgIHRoaXMuZW1pdENoYW5uZWwgPSBtZXNzYWdlLmNoYW5uZWw7XG4gICAgICB0aGlzLmVtaXQoJ3N0YXJ0Jyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLnR5cGUgPT09ICdjbG9zZScgJiYgbWVzc2FnZS50bykge1xuICAgICAgdGhpcy50ZWFyZG93bihtZXNzYWdlLnRvKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ2Vycm9yJykge1xuICAgICAgdGhpcy5lcnJvcihtZXNzYWdlLnRvLCBtZXNzYWdlLm1lc3NhZ2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS50bykge1xuICAgICAgaWYgKHRoaXMuZW1pdHNbbWVzc2FnZS50b10pIHtcbiAgICAgICAgdGhpcy5lbWl0c1ttZXNzYWdlLnRvXSgnbWVzc2FnZScsIG1lc3NhZ2UubWVzc2FnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRlYnVnLndhcm4oJ0NvdWxkIG5vdCBkZWxpdmVyIG1lc3NhZ2UsIG5vIHN1Y2ggaW50ZXJmYWNlOiAnICsgbWVzc2FnZS50byk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBtc2cgPSBtZXNzYWdlLm1lc3NhZ2U7XG4gICAgICB1dGlsLmVhY2hQcm9wKHRoaXMuZW1pdHMsIGZ1bmN0aW9uIChpZmFjZSkge1xuICAgICAgICBpZmFjZSgnbWVzc2FnZScsIG1lc3NhZ2UubWVzc2FnZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgY29uc3VtZXIuSW50ZXJmYWNlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGNvbnN1bWVyLlxuICogQW4gaW50ZXJmYWNlIGlzIHJldHVybmVkLCB3aGljaCBpcyBzdXBwbGllZCB3aXRoIGltcG9ydGFudCBjb250cm9sIG9mIHRoZVxuICogYXBpIHZpYSBjb25zdHJ1Y3RvciBhcmd1bWVudHM6IChib3VuZCBiZWxvdyBpbiBnZXRJbnRlcmZhY2VDb25zdHJ1Y3RvcilcbiAqXG4gKiBvbk1zZzogZnVuY3Rpb24oYmluZGVyKSBzZXRzIHRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gbWVzc2FnZXMgZm9yIHRoaXNcbiAqICAgIGludGVyZmFjZSBhcnJpdmUgb24gdGhlIGNoYW5uZWwsXG4gKiBlbWl0OiBmdW5jdGlvbihtc2cpIGFsbG93cyB0aGlzIGludGVyZmFjZSB0byBlbWl0IG1lc3NhZ2VzLFxuICogaWQ6IHN0cmluZyBpcyB0aGUgSWRlbnRpZmllciBmb3IgdGhpcyBpbnRlcmZhY2UuXG4gKiBAbWV0aG9kIGdldEludGVyZmFjZVxuICovXG5Db25zdW1lci5wcm90b3R5cGUuZ2V0SW50ZXJmYWNlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgSWZhY2UgPSB0aGlzLmdldEludGVyZmFjZUNvbnN0cnVjdG9yKCksXG4gICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gIGlmIChhcmdzLmxlbmd0aCkge1xuICAgIElmYWNlID0gSWZhY2UuYmluZC5hcHBseShJZmFjZSwgW0lmYWNlXS5jb25jYXQoYXJncykpO1xuICB9XG4gIHJldHVybiBuZXcgSWZhY2UoKTtcbn07XG5cbi8qKlxuICogQXR0YWNoIGFuICdvbkV2ZW50JyBsaXN0ZW5lciB0byBhbiBpbnRlcmZhY2UsIGFsbG93aW5nIGV4dGVybmFsIGNvbnN1bWVyc1xuICogdG8gZWl0aGVyIGxpc3RlbiB0byBjaGFubmVsIHN0YXRlLCBvciByZWdpc3RlciBjYWxsYmFja3Mgb24gbGlmZXRpbWUgZXZlbnRzXG4gKiBvZiBpbmRpdmlkdWFsIGluc3RhbmNlcyBvZiB0aGUgaW50ZXJmYWNlLlxuICogQG1ldGhvZCBnZXRMaXN0ZW5lclxuICogQHBhcm1hIHtTdHJpbmd9IG5hbWUgVGhlIGV2ZW50IHRvIGxpc3RlbiB0by5cbiAqIEBwcml2YXRlXG4gKi9cbkNvbnN1bWVyLnByb3RvdHlwZS5nZXRMaXN0ZW5lciA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaW5zdGFuY2UsIGhhbmRsZXIpIHtcbiAgICAvLyBMaXN0ZW4gdG8gdGhlIGNoYW5uZWwgZGlyZWN0bHkuXG4gICAgaWYgKHR5cGVvZiBpbnN0YW5jZSA9PT0gJ2Z1bmN0aW9uJyAmJiBoYW5kbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub25jZShuYW1lLCBpbnN0YW5jZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gTGlzdGVuIHRvIGEgc3BlY2lmaWMgaW5zdGFuY2UuXG4gICAgdmFyIGhhbmRsZXJzID0gbmFtZSArICdIYW5kbGVycyc7XG4gICAgdXRpbC5lYWNoUHJvcCh0aGlzLmlmYWNlcywgZnVuY3Rpb24gKGNhbmRpZGF0ZSwgaWQpIHtcbiAgICAgIGlmIChjYW5kaWRhdGUgPT09IGluc3RhbmNlKSB7XG4gICAgICAgIGlmICh0aGlzW2hhbmRsZXJzXVtpZF0pIHtcbiAgICAgICAgICB0aGlzW2hhbmRsZXJzXVtpZF0ucHVzaChoYW5kbGVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzW2hhbmRsZXJzXVtpZF0gPSBbaGFuZGxlcl07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfS5iaW5kKHRoaXMpO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYSBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIGdldCBpbnRlcmZhY2VzIGZyb20gdGhpcyBhcGkgY29uc3VtZXJcbiAqIGZyb20gYSB1c2VyLXZpc2libGUgcG9pbnQuXG4gKiBAbWV0aG9kIGdldFByb3h5SW50ZXJmYWNlXG4gKi9cbkNvbnN1bWVyLnByb3RvdHlwZS5nZXRQcm94eUludGVyZmFjZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGZ1bmMgPSBmdW5jdGlvbiAocCkge1xuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICBpZiAoYXJncy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gcC5nZXRJbnRlcmZhY2UuYXBwbHkocCwgYXJncyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwLmdldEludGVyZmFjZSgpO1xuICAgIH1cbiAgfS5iaW5kKHt9LCB0aGlzKTtcblxuICBmdW5jLmNsb3NlID0gZnVuY3Rpb24gKGlmYWNlKSB7XG4gICAgaWYgKGlmYWNlKSB7XG4gICAgICB1dGlsLmVhY2hQcm9wKHRoaXMuaWZhY2VzLCBmdW5jdGlvbiAoY2FuZGlkYXRlLCBpZCkge1xuICAgICAgICBpZiAoY2FuZGlkYXRlID09PSBpZmFjZSkge1xuICAgICAgICAgIHRoaXMudGVhcmRvd24oaWQpO1xuICAgICAgICAgIHRoaXMuZW1pdCh0aGlzLmVtaXRDaGFubmVsLCB7XG4gICAgICAgICAgICB0eXBlOiAnY2xvc2UnLFxuICAgICAgICAgICAgdG86IGlkXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENsb3NlIHRoZSBjaGFubmVsLlxuICAgICAgdGhpcy5kb0Nsb3NlKCk7XG4gICAgfVxuICB9LmJpbmQodGhpcyk7XG5cbiAgZnVuYy5vbkNsb3NlID0gdGhpcy5nZXRMaXN0ZW5lcignY2xvc2UnKTtcbiAgZnVuYy5vbkVycm9yID0gdGhpcy5nZXRMaXN0ZW5lcignZXJyb3InKTtcblxuICByZXR1cm4gZnVuYztcbn07XG5cbi8qKlxuICogUHJvdmlkZXMgYSBib3VuZCBjbGFzcyBmb3IgY3JlYXRpbmcgYSBjb25zdW1lci5JbnRlcmZhY2UgYXNzb2NpYXRlZFxuICogd2l0aCB0aGlzIGFwaS4gVGhpcyBwYXJ0aWFsIGxldmVsIG9mIGNvbnN0cnVjdGlvbiBjYW4gYmUgdXNlZFxuICogdG8gYWxsb3cgdGhlIGNvbnN1bWVyIHRvIGJlIHVzZWQgYXMgYSBwcm92aWRlciBmb3IgYW5vdGhlciBBUEkuXG4gKiBAbWV0aG9kIGdldEludGVyZmFjZUNvbnN0cnVjdG9yXG4gKiBAcHJpdmF0ZVxuICovXG5Db25zdW1lci5wcm90b3R5cGUuZ2V0SW50ZXJmYWNlQ29uc3RydWN0b3IgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBpZCA9IENvbnN1bWVyLm5leHRJZCgpO1xuICByZXR1cm4gdGhpcy5pbnRlcmZhY2VDbHMuYmluZChcbiAgICB7fSxcbiAgICBmdW5jdGlvbiAoaWQsIG9iaiwgYmluZGVyKSB7XG4gICAgICB0aGlzLmlmYWNlc1tpZF0gPSBvYmo7XG4gICAgICB0aGlzLmVtaXRzW2lkXSA9IGJpbmRlcjtcbiAgICB9LmJpbmQodGhpcywgaWQpLFxuICAgIHRoaXMuZG9FbWl0LmJpbmQodGhpcywgaWQpLFxuICAgIHRoaXMuZGVidWdcbiAgKTtcbn07XG5cbi8qKlxuICogRW1pdCBhIG1lc3NhZ2Ugb24gdGhlIGNoYW5uZWwgb25jZSBzZXR1cCBpcyBjb21wbGV0ZS5cbiAqIEBtZXRob2QgZG9FbWl0XG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IHRvIFRoZSBJRCBvZiB0aGUgZmxvdyBzZW5kaW5nIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IG1zZyBUaGUgbWVzc2FnZSB0byBlbWl0XG4gKiBAcGFyYW0ge0Jvb2xlYW59IGFsbCBTZW5kIG1lc3NhZ2UgdG8gYWxsIHJlY2lwaWVudHMuXG4gKi9cbkNvbnN1bWVyLnByb3RvdHlwZS5kb0VtaXQgPSBmdW5jdGlvbiAodG8sIG1zZywgYWxsKSB7XG4gIGlmIChhbGwpIHtcbiAgICB0byA9IGZhbHNlO1xuICB9XG4gIGlmICh0aGlzLmVtaXRDaGFubmVsKSB7XG4gICAgdGhpcy5lbWl0KHRoaXMuZW1pdENoYW5uZWwsIHt0bzogdG8sIHR5cGU6ICdtZXNzYWdlJywgbWVzc2FnZTogbXNnfSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5vbmNlKCdzdGFydCcsIHRoaXMuZG9FbWl0LmJpbmQodGhpcywgdG8sIG1zZykpO1xuICB9XG59O1xuXG4vKipcbiAqIFRlYXJkb3duIGEgc2luZ2xlIGludGVyZmFjZSBvZiB0aGlzIGFwaS5cbiAqIEBtZXRob2QgdGVhcmRvd25cbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBUaGUgaWQgb2YgdGhlIGludGVyZmFjZSB0byB0ZWFyIGRvd24uXG4gKi9cbkNvbnN1bWVyLnByb3RvdHlwZS50ZWFyZG93biA9IGZ1bmN0aW9uIChpZCkge1xuICBpZiAodGhpcy5lbWl0c1tpZF0pIHtcbiAgICB0aGlzLmVtaXRzW2lkXSgnY2xvc2UnKTtcbiAgfVxuICBkZWxldGUgdGhpcy5lbWl0c1tpZF07XG4gIGlmICh0aGlzLmNsb3NlSGFuZGxlcnNbaWRdKSB7XG4gICAgdXRpbC5lYWNoUHJvcCh0aGlzLmNsb3NlSGFuZGxlcnNbaWRdLCBmdW5jdGlvbiAocHJvcCkge1xuICAgICAgcHJvcCgpO1xuICAgIH0pO1xuICB9XG4gIGRlbGV0ZSB0aGlzLmlmYWNlc1tpZF07XG4gIGRlbGV0ZSB0aGlzLmNsb3NlSGFuZGxlcnNbaWRdO1xuICBkZWxldGUgdGhpcy5lcnJvckhhbmRsZXJzW2lkXTtcbn07XG5cbi8qKlxuICogSGFuZGxlIGEgbWVzc2FnZSBlcnJvciByZXBvcnRlZCB0byB0aGlzIGFwaS5cbiAqIEBtZXRob2QgZXJyb3JcbiAqIEBwYXJhbSB7U3RyaW5nP30gaWQgVGhlIGlkIG9mIHRoZSBpbnRlcmZhY2Ugd2hlcmUgdGhlIGVycm9yIG9jY3VyZWQuXG4gKiBAcGFyYW0ge09iamVjdH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB3aGljaCBmYWlsZWQsIGlmIHJlbGV2YW50LlxuICovXG5Db25zdW1lci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoaWQsIG1lc3NhZ2UpIHtcbiAgaWYgKGlkICYmIHRoaXMuZXJyb3JIYW5kbGVyc1tpZF0pIHtcbiAgICB1dGlsLmVhY2hQcm9wKHRoaXMuZXJyb3JIYW5kbGVyc1tpZF0sIGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICBwcm9wKG1lc3NhZ2UpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKCFpZCkge1xuICAgIHRoaXMuZW1pdCgnZXJyb3InLCBtZXNzYWdlKTtcbiAgfVxufTtcblxuXG4vKipcbiAqIENsb3NlIC8gdGVhcmRvd24gdGhlIGZsb3cgdGhpcyBhcGkgdGVybWluYXRlcy5cbiAqIEBtZXRob2QgZG9DbG9zZVxuICovXG5Db25zdW1lci5wcm90b3R5cGUuZG9DbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuY29udHJvbENoYW5uZWwpIHtcbiAgICB0aGlzLmVtaXQodGhpcy5jb250cm9sQ2hhbm5lbCwge1xuICAgICAgdHlwZTogJ0NoYW5uZWwgQ2xvc2luZycsXG4gICAgICByZXF1ZXN0OiAnY2xvc2UnXG4gICAgfSk7XG4gIH1cblxuICB1dGlsLmVhY2hQcm9wKHRoaXMuZW1pdHMsIGZ1bmN0aW9uIChlbWl0LCBpZCkge1xuICAgIHRoaXMudGVhcmRvd24oaWQpO1xuICB9LmJpbmQodGhpcykpO1xuXG4gIHRoaXMuZW1pdCgnY2xvc2UnKTtcbiAgdGhpcy5vZmYoKTtcblxuICB0aGlzLmVtaXRDaGFubmVsID0gbnVsbDtcbn07XG5cbi8qKlxuICogR2V0IHRoZSB0ZXh0dWFsIGRlc2NyaXB0aW9uIG9mIHRoaXMgcG9ydC5cbiAqIEBtZXRob2QgdG9TdHJpbmdcbiAqIEByZXR1cm4gVGhlIGRlc2NyaXB0aW9uIG9mIHRoaXMgcG9ydC5cbiAqL1xuQ29uc3VtZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5lbWl0Q2hhbm5lbCkge1xuICAgIHJldHVybiBcIltDb25zdW1lciBcIiArIHRoaXMuZW1pdENoYW5uZWwgKyBcIl1cIjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJbdW5ib3VuZCBDb25zdW1lcl1cIjtcbiAgfVxufTtcblxuLyoqXG4gKiBHZXQgdGhlIG5leHQgSUQgZm9yIGFuIGFwaSBjaGFubmVsLlxuICogQG1ldGhvZCBuZXh0SWRcbiAqIEBzdGF0aWNcbiAqIEBwcml2YXRlXG4gKi9cbkNvbnN1bWVyLm5leHRJZCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCFDb25zdW1lci5pZCkge1xuICAgIENvbnN1bWVyLmlkID0gMTtcbiAgfVxuICByZXR1cm4gKENvbnN1bWVyLmlkICs9IDEpO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0IGEgc3RydWN0dXJlZCBkYXRhIHN0cnVjdHVyZSBpbnRvIGEgbWVzc2FnZSBzdHJlYW0gY29uZm9ybWluZyB0b1xuICogYSB0ZW1wbGF0ZSBhbmQgYW4gYXJyYXkgb2YgYmluYXJ5IGRhdGEgZWxlbWVudHMuXG4gKiBAc3RhdGljXG4gKiBAbWV0aG9kIG1lc3NhZ2VUb1BvcnRhYmxlXG4gKiBAcGFyYW0ge09iamVjdH0gdGVtcGxhdGUgVGhlIHRlbXBsYXRlIHRvIGNvbmZvcm0gdG9cbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBUaGUgaW5zdGFuY2Ugb2YgdGhlIGRhdGEgc3RydWN0dXJlIHRvIGNvbmZyb21cbiAqIEBwYXJhbSB7RGVidWd9IGRlYnVnIEEgZGVidWdnZXIgZm9yIGVycm9ycy5cbiAqIEByZXR1cm4ge3t0ZXh0OiBPYmplY3QsIGJpbmFyeTogQXJyYXl9fSBTZXBhcmF0ZWQgZGF0YSBzdHJlYW1zLlxuICovXG5Db25zdW1lci5tZXNzYWdlVG9Qb3J0YWJsZSA9IGZ1bmN0aW9uICh0ZW1wbGF0ZSwgdmFsdWUsIGRlYnVnKSB7XG4gIHZhciBleHRlcm5hbHMgPSBbXSxcbiAgICBtZXNzYWdlID0gQ29uc3VtZXIuY29uZm9ybSh0ZW1wbGF0ZSwgdmFsdWUsIGV4dGVybmFscywgdHJ1ZSwgZGVidWcpO1xuICByZXR1cm4ge1xuICAgIHRleHQ6IG1lc3NhZ2UsXG4gICAgYmluYXJ5OiBleHRlcm5hbHNcbiAgfTtcbn07XG5cbi8qKlxuICogQ29udmVydCBTdHJ1Y3R1cmVkIERhdGEgc3RyZWFtcyBpbnRvIGEgZGF0YSBzdHJ1Y3R1cmUgY29uZm9ybWluZyB0byBhXG4gKiB0ZW1wbGF0ZS5cbiAqIEBzdGF0aWNcbiAqIEBtZXRob2QgcG9ydGFibGVUb01lc3NhZ2VcbiAqIEBwYXJhbSB7T2JqZWN0fSB0ZW1wbGF0ZSBUaGUgdGVtcGxhdGUgdG8gY29uZm9ybSB0b1xuICogQHBhcmFtIHt7dGV4dDogT2JqZWN0LCBiaW5hcnk6IEFycmF5fX0gc3RyZWFtcyBUaGUgc3RyZWFtcyB0byBjb25mb3JtXG4gKiBAcGFyYW0ge0RlYnVnfSBkZWJ1ZyBBIGRlYnVnZ2VyIGZvciBlcnJvcnMuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBkYXRhIHN0cnVjdHVyZSBtYXRjaGluZyB0aGUgdGVtcGxhdGUuXG4gKi9cbkNvbnN1bWVyLnBvcnRhYmxlVG9NZXNzYWdlID0gZnVuY3Rpb24gKHRlbXBsYXRlLCBzdHJlYW1zLCBkZWJ1Zykge1xuICByZXR1cm4gQ29uc3VtZXIuY29uZm9ybSh0ZW1wbGF0ZSwgc3RyZWFtcy50ZXh0LCBzdHJlYW1zLmJpbmFyeSwgZmFsc2UsIGRlYnVnKTtcbn07XG5cbi8qKlxuICogRm9yY2UgYSBjb2xsZWN0aW9uIG9mIHZhbHVlcyB0byBsb29rIGxpa2UgdGhlIHR5cGVzIGFuZCBsZW5ndGggb2YgYW4gQVBJXG4gKiB0ZW1wbGF0ZS5cbiAqIEBzdGF0aWNcbiAqIEBtZXRob2QgY29uZm9ybVxuICogQHBhcmFtIHtPYmplY3R9IHRlbXBsYXRlIFRoZSB0ZW1wbGF0ZSB0byBjb25mb3JtIHRvXG4gKiBAcGFyYW0ge09iamVjdH0gZnJvbSBUaGUgdmFsdWUgdG8gY29uZm9ybVxuICogQHBhcmFtIHtBcnJheX0gZXh0ZXJuYWxzIExpc3Rpbmcgb2YgYmluYXJ5IGVsZW1lbnRzIGluIHRoZSB0ZW1wbGF0ZVxuICogQHBhcmFtIHtCb29sZWFufSBXaGV0aGVyIHRvIHRvIHNlcGFyYXRlIG9yIGNvbWJpbmUgc3RyZWFtcy5cbiAqIEBhcGFyYW0ge0RlYnVnfSBkZWJ1ZyBBIGRlYnVnZ2VyIGZvciBlcnJvcnMuXG4gKi9cbkNvbnN1bWVyLmNvbmZvcm0gPSBmdW5jdGlvbiAodGVtcGxhdGUsIGZyb20sIGV4dGVybmFscywgc2VwYXJhdGUsIGRlYnVnKSB7XG4gIC8qIGpzaGludCAtVzA4NiAqL1xuICBpZiAodHlwZW9mIChmcm9tKSA9PT0gJ2Z1bmN0aW9uJyAmJiB0ZW1wbGF0ZSAhPT0gJ3Byb3h5Jykge1xuICAgIC8vZnJvbSA9IHVuZGVmaW5lZDtcbiAgICAvL3Rocm93IFwiVHJ5aW5nIHRvIGNvbmZvcm0gYSBmdW5jdGlvblwiO1xuICAgIGRlYnVnLmVycm9yKFwiTWVzc2FnZSBkaXNjYXJkZWQgYXMgZnVuY3Rpb25zIGNhbid0IGNyb3NzIG1vZHVsZXMhXCIpO1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0gZWxzZSBpZiAodHlwZW9mIChmcm9tKSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9IGVsc2UgaWYgKGZyb20gPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIGlmICh0ZW1wbGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZGVidWcuZXJyb3IoXCJNZXNzYWdlIGRpc2NhcmRlZCBmb3Igbm90IG1hdGNoaW5nIGRlY2xhcmVkIHR5cGUhXCIsIGZyb20pO1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBzd2l0Y2ggKHRlbXBsYXRlKSB7XG4gIGNhc2UgJ3N0cmluZyc6XG4gICAgcmV0dXJuIFN0cmluZygnJykgKyBmcm9tO1xuICBjYXNlICdudW1iZXInOlxuICAgIHJldHVybiBOdW1iZXIoMSkgKiBmcm9tO1xuICBjYXNlICdib29sZWFuJzpcbiAgICByZXR1cm4gQm9vbGVhbihmcm9tID09PSB0cnVlKTtcbiAgY2FzZSAnb2JqZWN0JzpcbiAgICAvLyBUT0RPKHdpbGxzY290dCk6IEFsbG93IHJlbW92YWwgaWYgc2FuZGJveGluZyBlbmZvcmNlcyB0aGlzLlxuICAgIGlmICh0eXBlb2YgZnJvbSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGZyb20pKTtcbiAgICB9XG4gIGNhc2UgJ2Jsb2InOlxuICAgIGlmIChzZXBhcmF0ZSkge1xuICAgICAgaWYgKGZyb20gaW5zdGFuY2VvZiBCbG9iKSB7XG4gICAgICAgIGV4dGVybmFscy5wdXNoKGZyb20pO1xuICAgICAgICByZXR1cm4gZXh0ZXJuYWxzLmxlbmd0aCAtIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWJ1Zy5lcnJvcignY29uZm9ybSBleHBlY3RpbmcgQmxvYiwgYnV0IHNhdyAnICsgKHR5cGVvZiBmcm9tKSk7XG4gICAgICAgIGV4dGVybmFscy5wdXNoKG5ldyBCbG9iKFtdKSk7XG4gICAgICAgIHJldHVybiBleHRlcm5hbHMubGVuZ3RoIC0gMTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGV4dGVybmFsc1tmcm9tXTtcbiAgICB9XG4gIGNhc2UgJ2J1ZmZlcic6XG4gICAgaWYgKHNlcGFyYXRlKSB7XG4gICAgICBleHRlcm5hbHMucHVzaChDb25zdW1lci5tYWtlQXJyYXlCdWZmZXIoZnJvbSwgZGVidWcpKTtcbiAgICAgIHJldHVybiBleHRlcm5hbHMubGVuZ3RoIC0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIENvbnN1bWVyLm1ha2VBcnJheUJ1ZmZlcihleHRlcm5hbHNbZnJvbV0sIGRlYnVnKTtcbiAgICB9XG4gIGNhc2UgJ3Byb3h5JzpcbiAgICByZXR1cm4gZnJvbTtcbiAgfVxuICB2YXIgdmFsLCBpO1xuICBpZiAoQXJyYXkuaXNBcnJheSh0ZW1wbGF0ZSkgJiYgZnJvbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFsID0gW107XG4gICAgaSA9IDA7XG4gICAgaWYgKHRlbXBsYXRlLmxlbmd0aCA9PT0gMiAmJiB0ZW1wbGF0ZVswXSA9PT0gJ2FycmF5Jykge1xuICAgICAgLy9jb25zb2xlLmxvZyhcInRlbXBsYXRlIGlzIGFycmF5LCB2YWx1ZSBpcyBcIiArIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgZnJvbS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB2YWwucHVzaChDb25zdW1lci5jb25mb3JtKHRlbXBsYXRlWzFdLCBmcm9tW2ldLCBleHRlcm5hbHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VwYXJhdGUsIGRlYnVnKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCB0ZW1wbGF0ZS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoZnJvbVtpXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFsLnB1c2goQ29uc3VtZXIuY29uZm9ybSh0ZW1wbGF0ZVtpXSwgZnJvbVtpXSwgZXh0ZXJuYWxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VwYXJhdGUsIGRlYnVnKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB0ZW1wbGF0ZSA9PT0gJ29iamVjdCcgJiYgZnJvbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFsID0ge307XG4gICAgdXRpbC5lYWNoUHJvcCh0ZW1wbGF0ZSwgZnVuY3Rpb24gKHByb3AsIG5hbWUpIHtcbiAgICAgIGlmIChmcm9tW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFsW25hbWVdID0gQ29uc3VtZXIuY29uZm9ybShwcm9wLCBmcm9tW25hbWVdLCBleHRlcm5hbHMsIHNlcGFyYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdmFsO1xuICB9XG4gIGRlYnVnLmVycm9yKCdVbmtub3duIHRlbXBsYXRlIHByb3ZpZGVkOiAnICsgdGVtcGxhdGUpO1xufTtcblxuLyoqXG4gKiBNYWtlIGEgdGhpbmcgaW50byBhbiBBcnJheSBCdWZmZXJcbiAqIEBzdGF0aWNcbiAqIEBtZXRob2QgbWFrZUFycmF5QnVmZmVyXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpbmdcbiAqIEBwYXJhbSB7RGVidWd9IGRlYnVnIEEgZGVidWdnZXIgaW4gY2FzZSBvZiBlcnJvcnMuXG4gKiBAcmV0dXJuIHtBcnJheUJ1ZmZlcn0gQW4gQXJyYXkgQnVmZmVyXG4gKi9cbkNvbnN1bWVyLm1ha2VBcnJheUJ1ZmZlciA9IGZ1bmN0aW9uICh0aGluZywgZGVidWcpIHtcbiAgaWYgKCF0aGluZykge1xuICAgIHJldHVybiBuZXcgQXJyYXlCdWZmZXIoMCk7XG4gIH1cblxuICBpZiAodGhpbmcgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgIHJldHVybiB0aGluZztcbiAgfSBlbHNlIGlmICh0aGluZy5jb25zdHJ1Y3Rvci5uYW1lID09PSBcIkFycmF5QnVmZmVyXCIgJiZcbiAgICAgIHR5cGVvZiB0aGluZy5wcm90b3R5cGUgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAvLyBXb3JrYXJvdW5kIGZvciB3ZWJraXQgb3JpZ2luIG93bmVyc2hpcCBpc3N1ZS5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vVVdOZXR3b3Jrc0xhYi9mcmVlZG9tL2lzc3Vlcy8yOFxuICAgIHJldHVybiBuZXcgRGF0YVZpZXcodGhpbmcpLmJ1ZmZlcjtcbiAgfSBlbHNlIHtcbiAgICBkZWJ1Zy5lcnJvcignZXhwZWN0aW5nIEFycmF5QnVmZmVyLCBidXQgc2F3ICcgK1xuICAgICAgICAodHlwZW9mIHRoaW5nKSArICc6ICcgKyBKU09OLnN0cmluZ2lmeSh0aGluZykpO1xuICAgIHJldHVybiBuZXcgQXJyYXlCdWZmZXIoMCk7XG4gIH1cbn07XG5cbi8qKlxuICogUmVjdXJzaXZlbHkgdHJhdmVyc2UgYSBbbmVzdGVkXSBvYmplY3QgYW5kIGZyZWV6ZSBpdHMga2V5cyBmcm9tIGJlaW5nXG4gKiB3cml0YWJsZS4gTm90ZSwgdGhlIHJlc3VsdCBjYW4gaGF2ZSBuZXcga2V5cyBhZGRlZCB0byBpdCwgYnV0IGV4aXN0aW5nIG9uZXNcbiAqIGNhbm5vdCBiZSAgb3ZlcndyaXR0ZW4uIERvZXNuJ3QgZG8gYW55dGhpbmcgZm9yIGFycmF5cyBvciBvdGhlciBjb2xsZWN0aW9ucy5cbiAqXG4gKiBAbWV0aG9kIHJlY3Vyc2l2ZUZyZWV6ZU9iamVjdFxuICogQHN0YXRpY1xuICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIG9iamVjdCB0byBiZSBmcm96ZW5cbiAqIEByZXR1cm4ge09iamVjdH0gb2JqXG4gKiovXG5Db25zdW1lci5yZWN1cnNpdmVGcmVlemVPYmplY3QgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHZhciBrLCByZXQgPSB7fTtcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuICBmb3IgKGsgaW4gb2JqKSB7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJldCwgaywge1xuICAgICAgICB2YWx1ZTogQ29uc3VtZXIucmVjdXJzaXZlRnJlZXplT2JqZWN0KG9ialtrXSksXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnN1bWVyO1xuIiwiLypqc2xpbnQgaW5kZW50OjIsIG5vZGU6dHJ1ZSwgc2xvcHB5OnRydWUgKi9cbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbi8qKlxuICogQSBmcmVlZG9tIGVudHJ5IHBvaW50IGZvciBkZWJ1Z2dpbmcuXG4gKiBAdXNlcyBoYW5kbGVFdmVudHNcbiAqIEBpbXBsZW1lbnRzIFBvcnRcbiAqIEBjb25zdHJ1Y3RvclxuICovXG52YXIgRGVidWcgPSBmdW5jdGlvbiAobG9nZ2VyKSB7XG4gIHRoaXMuaWQgPSAnZGVidWcnO1xuICB0aGlzLmVtaXRDaGFubmVsID0gZmFsc2U7XG4gIHRoaXMuY29uZmlnID0gZmFsc2U7XG4gIHV0aWwuaGFuZGxlRXZlbnRzKHRoaXMpO1xufTtcblxuLyoqXG4gKiBUaGUgc3VwcG9ydGVkIGxvZyBsZXZlbHMgZm9yIGRlYnVnZ2luZy5cbiAqIEBzdGF0aWNcbiAqL1xuRGVidWcuTEVWRUxTID0gWydkZWJ1ZycsICdpbmZvJywgJ2xvZycsICd3YXJuJywgJ2Vycm9yJ107XG5cbi8qKlxuICogUHJvdmlkZSBhIHRleHR1YWwgZGVzY3JpcHRpb24gb2YgdGhpcyBwb3J0LlxuICogQG1ldGhvZCB0b1N0cmluZ1xuICogQHJldHVybiB7U3RyaW5nfSB0aGUgdGV4dHVhbCBkZXNjcmlwdGlvbi5cbiAqL1xuRGVidWcucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJ1tDb25zb2xlXSc7XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIGEgbG9nZ2VyIGZvciBvdXRwdXR0aW5nIGRlYnVnZ2luZyBtZXNzYWdlcy5cbiAqIEBtZXRob2Qgc2V0TG9nZ2VyXG4gKiBAcGFyYW0ge0NvbnNvbGV9IGxvZ2dlciBUaGUgbG9nZ2VyIHRvIHJlZ2lzdGVyXG4gKi9cbkRlYnVnLnByb3RvdHlwZS5zZXRMb2dnZXIgPSBmdW5jdGlvbiAobG9nZ2VyKSB7XG4gIGlmICh0aGlzLmxvZ2dlcikge1xuICAgIHRoaXMuaW5mbygnUmVwbGFjaW5nIExvZ2dlci4nKTtcbiAgfVxuICB0aGlzLmxvZ2dlciA9IGxvZ2dlcjtcbiAgdGhpcy5lbWl0KCdsb2dnZXInKTtcbn07XG5cbi8qKlxuICogSGFuZGxlciBmb3IgcmVjZWl2aW5nIG1lc3NhZ2VzIHNlbnQgdG8gdGhlIGRlYnVnIHBvcnQuXG4gKiBUaGVzZSBtZXNzYWdlcyBhcmUgdXNlZCB0byByZXRyZWl2ZSBjb25maWcgZm9yIGV4cG9zaW5nIGNvbnNvbGUuXG4gKiBAbWV0aG9kIG9uTWVzc2FnZVxuICogQHBhcmFtIHtTdHJpbmd9IHNvdXJjZSB0aGUgc291cmNlIGlkZW50aWZpZXIgZm9yIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2UgdGhlIHJlY2VpdmVkIG1lc3NhZ2UuXG4gKi9cbkRlYnVnLnByb3RvdHlwZS5vbk1lc3NhZ2UgPSBmdW5jdGlvbiAoc291cmNlLCBtZXNzYWdlKSB7XG4gIGlmIChzb3VyY2UgPT09ICdjb250cm9sJyAmJiBtZXNzYWdlLmNoYW5uZWwgJiYgIXRoaXMuZW1pdENoYW5uZWwpIHtcbiAgICB0aGlzLmVtaXRDaGFubmVsID0gbWVzc2FnZS5jaGFubmVsO1xuICAgIHRoaXMuY29uZmlnID0gbWVzc2FnZS5jb25maWc7XG4gICAgaWYgKCF0aGlzLmNvbmZpZy5nbG9iYWwuY29uc29sZSkge1xuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLmNvbmZpZy5nbG9iYWwuY29uc29sZSA9IGNvbnNvbGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbmZpZy5nbG9iYWwuY29uc29sZSA9IHRoaXMuZ2V0TG9nZ2VyKCdDb25zb2xlJyk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZW1pdCgncmVhZHknKTtcbiAgfVxufTtcblxuLyoqXG4gKiBEaXNwYXRjaCBhIGRlYnVnIG1lc3NhZ2Ugd2l0aCBhcmJpdHJhcnkgc2V2ZXJpdHkuXG4gKiBBbGwgZGVidWcgbWVzc2FnZXMgYXJlIHJvdXRlZCB0aHJvdWdoIHRoZSBtYW5hZ2VyLCB0byBhbGxvdyBmb3IgZGVsZWdhdGlvbi5cbiAqIEBtZXRob2QgZm9ybWF0XG4gKiBAcGFyYW0ge1N0cmluZ30gc2V2ZXJpdHkgdGhlIHNldmVyaXR5IG9mIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtTdHJpbmd9IHNvdXJjZSBUaGUgbG9jYXRpb24gb2YgbWVzc2FnZS5cbiAqIEBwYXJhbSB7U3RyaW5nW119IGFyZ3MgVGhlIGNvbnRlbnRzIG9mIHRoZSBtZXNzYWdlLlxuICogQHByaXZhdGVcbiAqL1xuRGVidWcucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uIChzZXZlcml0eSwgc291cmNlLCBhcmdzKSB7XG4gIHZhciBpLCBhbGlzdCA9IFtdLCBhcmdhcnI7XG4gIGlmICh0eXBlb2YgYXJncyA9PT0gXCJzdHJpbmdcIiAmJiBzb3VyY2UpIHtcbiAgICB0cnkge1xuICAgICAgYXJnYXJyID0gSlNPTi5wYXJzZShhcmdzKTtcbiAgICAgIGlmIChhcmdhcnIgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBhcmdzID0gYXJnYXJyO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIHBhc3MuXG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiBhcmdzID09PSBcInN0cmluZ1wiKSB7XG4gICAgYWxpc3QucHVzaChhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgYWxpc3QucHVzaChhcmdzW2ldKTtcbiAgICB9XG4gIH1cbiAgaWYgKCF0aGlzLmVtaXRDaGFubmVsKSB7XG4gICAgdGhpcy5vbigncmVhZHknLCB0aGlzLmZvcm1hdC5iaW5kKHRoaXMsIHNldmVyaXR5LCBzb3VyY2UsIGFsaXN0KSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMuZW1pdCh0aGlzLmVtaXRDaGFubmVsLCB7XG4gICAgc2V2ZXJpdHk6IHNldmVyaXR5LFxuICAgIHNvdXJjZTogc291cmNlLFxuICAgIHF1aWV0OiB0cnVlLFxuICAgIHJlcXVlc3Q6ICdkZWJ1ZycsXG4gICAgbXNnOiBKU09OLnN0cmluZ2lmeShhbGlzdClcbiAgfSk7XG59O1xuXG4vKipcbiAqIFByaW50IHJlY2VpdmVkIG1lc3NhZ2VzIG9uIHRoZSBjb25zb2xlLlxuICogVGhpcyBpcyBjYWxsZWQgYnkgdGhlIG1hbmFnZXIgaW4gcmVzcG9uc2UgdG8gYW4gZW1pc3Npb24gZnJvbSBmb3JtYXQuXG4gKiBAbWV0aG9kIHByaW50XG4gKiBAcGFyYW0ge09iamVjdH0gbWVzc2FnZSBUaGUgbWVzc2FnZSBlbWl0dGVkIGJ5IHtAc2VlIGZvcm1hdH0gdG8gcHJpbnQuXG4gKi9cbkRlYnVnLnByb3RvdHlwZS5wcmludCA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gIGlmICghdGhpcy5sb2dnZXIpIHtcbiAgICB0aGlzLm9uY2UoJ2xvZ2dlcicsIHRoaXMucHJpbnQuYmluZCh0aGlzLCBtZXNzYWdlKSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGFyZ3MsIGFyciA9IFtdLCBpID0gMDtcbiAgYXJncyA9IEpTT04ucGFyc2UobWVzc2FnZS5tc2cpO1xuICBpZiAodHlwZW9mIGFyZ3MgPT09IFwic3RyaW5nXCIpIHtcbiAgICBhcnIucHVzaChhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoYXJnc1tpXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBhcnIucHVzaChhcmdzW2ldKTtcbiAgICAgIGkgKz0gMTtcbiAgICB9XG4gIH1cbiAgdGhpcy5sb2dnZXJbbWVzc2FnZS5zZXZlcml0eV0uY2FsbCh0aGlzLmxvZ2dlciwgbWVzc2FnZS5zb3VyY2UsIGFyciwgZnVuY3Rpb24gKCkge30pO1xufTtcblxuLyoqXG4gKiBQcmludCBhIGxvZyBtZXNzYWdlIHRvIHRoZSBjb25zb2xlLlxuICogQG1ldGhvZCBsb2dcbiAqL1xuRGVidWcucHJvdG90eXBlLmxvZyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5mb3JtYXQoJ2xvZycsIHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogUHJpbnQgYW4gaW5mbyBtZXNzYWdlIHRvIHRoZSBjb25zb2xlLlxuICogQG1ldGhvZCBsb2dcbiAqL1xuRGVidWcucHJvdG90eXBlLmluZm8gPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZm9ybWF0KCdpbmZvJywgdW5kZWZpbmVkLCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBQcmludCBhIGRlYnVnIG1lc3NhZ2UgdG8gdGhlIGNvbnNvbGUuXG4gKiBAbWV0aG9kIGxvZ1xuICovXG5EZWJ1Zy5wcm90b3R5cGUuZGVidWcgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZm9ybWF0KCdkZWJ1ZycsIHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogUHJpbnQgYSB3YXJuaW5nIG1lc3NhZ2UgdG8gdGhlIGNvbnNvbGUuXG4gKiBAbWV0aG9kIHdhcm5cbiAqL1xuRGVidWcucHJvdG90eXBlLndhcm4gPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZm9ybWF0KCd3YXJuJywgdW5kZWZpbmVkLCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBQcmludCBhbiBlcnJvciBtZXNzYWdlIHRvIHRoZSBjb25zb2xlLlxuICogQG1ldGhvZCBlcnJvclxuICovXG5EZWJ1Zy5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZm9ybWF0KCdlcnJvcicsIHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogR2V0IGEgbG9nZ2VyIHRoYXQgbG9ncyBtZXNzYWdlcyBwcmVmaXhlZCBieSBhIGdpdmVuIG5hbWUuXG4gKiBAbWV0aG9kIGdldExvZ2dlclxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIHByZWZpeCBmb3IgbG9nZ2VkIG1lc3NhZ2VzLlxuICogQHJldHVybnMge0NvbnNvbGV9IEEgY29uc29sZS1saWtlIG9iamVjdC5cbiAqL1xuRGVidWcucHJvdG90eXBlLmdldExvZ2dlciA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciBsb2cgPSBmdW5jdGlvbiAoc2V2ZXJpdHksIHNvdXJjZSkge1xuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNwbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gICAgdGhpcy5mb3JtYXQoc2V2ZXJpdHksIHNvdXJjZSwgYXJncyk7XG4gIH0sXG4gICAgbG9nZ2VyID0ge1xuICAgICAgZnJlZWRvbTogdHJ1ZVxuICAgIH07XG4gIERlYnVnLkxFVkVMUy5mb3JFYWNoKGZ1bmN0aW9uIChsZXZlbCkge1xuICAgIGxvZ2dlcltsZXZlbF0gPSBsb2cuYmluZCh0aGlzLCBsZXZlbCwgbmFtZSk7XG4gIH0uYmluZCh0aGlzKSk7XG4gIHJldHVybiBsb2dnZXI7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIHN5bmNocm9ub3VzICdnZXRMb2dnZXInIG1ldGhvZCB0aGF0IGJpbmRzIGFyb3VuZCBhbiBhc3luY2hyb25vdXNcbiAqIGxvZ2dlciBieSBjcmVhdGluZyBhIGJ1ZmZlciB1bnRpbCB0aGUgYXN5bmNocm9ub3VzIGxvZ2dlciBpcyByZXNvbHZlZC5cbiAqIEBzZWUge01vZHVsZUludGVybmFsLmxvYWRMaW5rc30gZm9yIHdoZXJlIHRoaXMgbWV0aG9kIGlzIGJvdW5kIHRvIHRoZSBjcmVhdGVkXG4gKiAgICAgZXh0ZXJuYWwgaW50ZXJmYWNlLlxuICogQG1ldGhvZCBnZXRMb2dnaW5nU2hpbVxuICogQHBhcmFtIHtGdW5jdGlvbn0gYXN5bmNNZXRob2QgVGhlIHdyYXBwZXIgdG8gJ2dldExvZ2dlcidcbiAqL1xuRGVidWcucHJvdG90eXBlLmdldExvZ2dpbmdTaGltID0gZnVuY3Rpb24gKGFzeW5jTWV0aG9kKSB7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRMb2dnZ2VyU3luYyhuYW1lKSB7XG4gICAgdmFyIHRvUmVzb2x2ZSA9IGFzeW5jTWV0aG9kKG5hbWUpLFxuICAgICAgYnVmZmVyID0gW10sXG4gICAgICBtZXRob2RzID0gRGVidWcuTEVWRUxTLFxuICAgICAgYmFja2luZyA9IG51bGwsXG4gICAgICByZXQgPSB7fTtcbiAgICB0b1Jlc29sdmUudGhlbihmdW5jdGlvbiAobG9nZ2VyKSB7XG4gICAgICBiYWNraW5nID0gbG9nZ2VyO1xuICAgICAgYnVmZmVyLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgYmFja2luZ1tpdGVtWzBdXS5hcHBseShiYWNraW5nLCBpdGVtWzFdKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIG1ldGhvZHMuZm9yRWFjaChmdW5jdGlvbiAobXRoZCkge1xuICAgICAgcmV0W210aGRdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNwbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgICAgIGlmIChiYWNraW5nKSB7XG4gICAgICAgICAgYmFja2luZ1t0aGlzXS5hcHBseShiYWNraW5nLCBhcmdzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBidWZmZXIucHVzaChbdGhpcywgYXJnc10pO1xuICAgICAgICB9XG4gICAgICB9LmJpbmQobXRoZCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRGVidWc7XG4iLCIvKmpzbGludCBpbmRlbnQ6Mixub2RlOnRydWUgKi9cclxudmFyIFByb21pc2VDb21wYXQgPSByZXF1aXJlKCdlczYtcHJvbWlzZScpLlByb21pc2U7XHJcblxyXG52YXIgQXBpID0gcmVxdWlyZSgnLi9hcGknKTtcclxudmFyIERlYnVnID0gcmVxdWlyZSgnLi9kZWJ1ZycpO1xyXG52YXIgSHViID0gcmVxdWlyZSgnLi9odWInKTtcclxudmFyIE1hbmFnZXIgPSByZXF1aXJlKCcuL21hbmFnZXInKTtcclxudmFyIFBvbGljeSA9IHJlcXVpcmUoJy4vcG9saWN5Jyk7XHJcbnZhciBQcm94eUJpbmRlciA9IHJlcXVpcmUoJy4vcHJveHliaW5kZXInKTtcclxudmFyIFJlc291cmNlID0gcmVxdWlyZSgnLi9yZXNvdXJjZScpO1xyXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xyXG52YXIgQnVuZGxlID0gcmVxdWlyZSgnLi9idW5kbGUnKTtcclxuXHJcbnZhciBmcmVlZG9tR2xvYmFsO1xyXG52YXIgZ2V0R2xvYmFsID0gZnVuY3Rpb24gKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuICBcclxuICAvLyBOb2RlLmpzXHJcbiAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnICYmIGdsb2JhbC5wcm90b3R5cGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgZnJlZWRvbUdsb2JhbCA9IGdsb2JhbDtcclxuICAvLyBCcm93c2Vyc1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgZnJlZWRvbUdsb2JhbCA9IHRoaXM7XHJcbiAgICB9LCAwKTtcclxuICB9XHJcbn07XHJcbmdldEdsb2JhbCgpO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBhIG5ldyBmcmVlZG9tIGNvbnRleHQuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0IEluZm9ybWF0aW9uIGFib3V0IHRoZSBsb2NhbCBjb250ZXh0LlxyXG4gKiBAc2VlIHt1dGlsL3dvcmtlckVudHJ5LmpzfVxyXG4gKiBAcGFyYW0ge1N0cmluZ30gbWFuaWZlc3QgVGhlIG1hbmlmZXN0IHRvIGxvYWQuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgQ29uZmlndXJhdGlvbiBrZXlzIHNldCBieSB0aGUgdXNlci5cclxuICogQHJldHVybnMge1Byb21pc2V9IEEgcHJvbWlzZSBmb3IgdGhlIG1vZHVsZSBkZWZpbmVkIGluIHRoZSBtYW5pZmVzdC5cclxuICovXHJcbnZhciBzZXR1cCA9IGZ1bmN0aW9uIChjb250ZXh0LCBtYW5pZmVzdCwgY29uZmlnKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG4gIHZhciBkZWJ1ZyA9IG5ldyBEZWJ1ZygpLFxyXG4gICAgaHViID0gbmV3IEh1YihkZWJ1ZyksXHJcbiAgICByZXNvdXJjZSA9IG5ldyBSZXNvdXJjZShkZWJ1ZyksXHJcbiAgICBhcGkgPSBuZXcgQXBpKGRlYnVnKSxcclxuICAgIG1hbmFnZXIgPSBuZXcgTWFuYWdlcihodWIsIHJlc291cmNlLCBhcGkpLFxyXG4gICAgYmluZGVyID0gbmV3IFByb3h5QmluZGVyKG1hbmFnZXIpLFxyXG4gICAgcG9saWN5LFxyXG4gICAgc2l0ZV9jZmcgPSB7XHJcbiAgICAgICdkZWJ1Zyc6ICdsb2cnLFxyXG4gICAgICAnbWFuaWZlc3QnOiBtYW5pZmVzdCxcclxuICAgICAgJ21vZHVsZUNvbnRleHQnOiAoIWNvbnRleHQgfHwgdHlwZW9mIChjb250ZXh0LmlzTW9kdWxlKSA9PT0gXCJ1bmRlZmluZWRcIikgP1xyXG4gICAgICAgICAgdXRpbC5pc01vZHVsZUNvbnRleHQoKSA6XHJcbiAgICAgICAgICBjb250ZXh0LmlzTW9kdWxlXHJcbiAgICB9LFxyXG4gICAgbGluayxcclxuICAgIFBvcnQsXHJcbiAgICBjbGVhbnVwID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBhcGkuY2xlYW51cCgpO1xyXG4gICAgICBtYW5hZ2VyLmRlc3Ryb3koKTtcclxuICAgIH07XHJcblxyXG4gIGlmIChjb25maWcpIHtcclxuICAgIHV0aWwubWl4aW4oc2l0ZV9jZmcsIGNvbmZpZywgdHJ1ZSk7XHJcbiAgfVxyXG4gIHNpdGVfY2ZnLmdsb2JhbCA9IGZyZWVkb21HbG9iYWw7XHJcbiAgaWYgKGNvbnRleHQpIHtcclxuICAgIHV0aWwubWl4aW4oc2l0ZV9jZmcsIGNvbnRleHQsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgLy8gUmVnaXN0ZXIgdXNlci1zdXBwbGllZCBleHRlbnNpb25zLlxyXG4gIC8vIEZvciBleGFtcGxlIHRoZSAnY29yZS5vYXV0aCcgcHJvdmlkZXIgZGVmaW5lcyBhIHJlZ2lzdGVyIGZ1bmN0aW9uLFxyXG4gIC8vIHdoaWNoIGVuYWJsZXMgc2l0ZV9jZmcub2F1dGggdG8gYmUgcmVnaXN0ZXJlZCB3aXRoIGl0LlxyXG4gIGNvbnRleHQucHJvdmlkZXJzLmZvckVhY2goZnVuY3Rpb24gKHByb3ZpZGVyKSB7XHJcbiAgICB2YXIgbmFtZTtcclxuICAgIGlmIChwcm92aWRlci5uYW1lLmluZGV4T2YoJ2NvcmUuJykgPT09IDAgJiZcclxuICAgICAgICB0eXBlb2YgcHJvdmlkZXIucmVnaXN0ZXIgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgbmFtZSA9IHByb3ZpZGVyLm5hbWUuc3Vic3RyKDUpO1xyXG4gICAgICAvLyBJbnZlcnQgcHJpb3JpdHkgYW5kIHByZWZlciB1c2VyIGNvbmZpZyBvdmVyIGxvY2FsIGNvbnRleHQgZm9yIHRoZXNlLlxyXG4gICAgICBpZiAoY29uZmlnICYmIGNvbmZpZ1tuYW1lXSkge1xyXG4gICAgICAgIHByb3ZpZGVyLnJlZ2lzdGVyKGNvbmZpZ1tuYW1lXSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoc2l0ZV9jZmdbbmFtZV0pIHtcclxuICAgICAgICBwcm92aWRlci5yZWdpc3RlcihzaXRlX2NmZ1tuYW1lXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcHJvdmlkZXIucmVnaXN0ZXIodW5kZWZpbmVkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIFxyXG4gIEJ1bmRsZS5yZWdpc3Rlcihjb250ZXh0LnByb3ZpZGVycywgYXBpKTtcclxuICByZXNvdXJjZS5yZWdpc3Rlcihjb250ZXh0LnJlc29sdmVycyB8fCBbXSk7XHJcblxyXG4gIHJldHVybiBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICBpZiAoc2l0ZV9jZmcubW9kdWxlQ29udGV4dCkge1xyXG4gICAgICBQb3J0ID0gc2l0ZV9jZmcucG9ydFR5cGU7XHJcbiAgICAgIGxpbmsgPSBuZXcgUG9ydCgnT3V0Ym91bmQnLCByZXNvdXJjZSk7XHJcbiAgICAgIG1hbmFnZXIuc2V0dXAobGluayk7XHJcblxyXG4gICAgICAvLyBEZWxheSBkZWJ1ZyBtZXNzYWdlcyB1bnRpbCBkZWxlZ2F0aW9uIHRvIHRoZSBwYXJlbnQgY29udGV4dCBpcyBzZXR1cC5cclxuICAgICAgbWFuYWdlci5vbmNlKCdkZWxlZ2F0ZScsIG1hbmFnZXIuc2V0dXAuYmluZChtYW5hZ2VyLCBkZWJ1ZykpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWFuYWdlci5zZXR1cChkZWJ1Zyk7XHJcbiAgICAgIHBvbGljeSA9IG5ldyBQb2xpY3kobWFuYWdlciwgcmVzb3VyY2UsIHNpdGVfY2ZnKTtcclxuXHJcbiAgICAgIC8vIERlZmluZSBob3cgdG8gbG9hZCBhIHJvb3QgbW9kdWxlLlxyXG4gICAgICB2YXIgZmFsbGJhY2tMb2dnZXIsIGdldElmYWNlO1xyXG4gICAgICBmYWxsYmFja0xvZ2dlciA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICAgICAgYXBpLmdldENvcmUoJ2NvcmUuY29uc29sZScsIHtcclxuICAgICAgICAgIGNvbmZpZzogc2l0ZV9jZmdcclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChwcm92aWRlcikge1xyXG4gICAgICAgICAgdmFyIGxvZ2dlciA9IG5ldyBwcm92aWRlci5pbnN0KCk7XHJcbiAgICAgICAgICBkZWJ1Zy5zZXRMb2dnZXIobG9nZ2VyKTtcclxuICAgICAgICAgIGlmIChtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIGRlYnVnLmVycm9yKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG4gICAgICBnZXRJZmFjZSA9IGZ1bmN0aW9uIChtYW5pZmVzdCkge1xyXG4gICAgICAgIHJldHVybiByZXNvdXJjZS5nZXQoc2l0ZV9jZmcubG9jYXRpb24sIG1hbmlmZXN0KS50aGVuKFxyXG4gICAgICAgICAgZnVuY3Rpb24gKGNhbm9uaWNhbF9tYW5pZmVzdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcG9saWN5LmdldChbXSwgY2Fub25pY2FsX21hbmlmZXN0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICApLnRoZW4oZnVuY3Rpb24gKGluc3RhbmNlKSB7XHJcbiAgICAgICAgICBtYW5hZ2VyLnNldHVwKGluc3RhbmNlKTtcclxuICAgICAgICAgIHJldHVybiBiaW5kZXIuYmluZERlZmF1bHQoaW5zdGFuY2UsIGFwaSwgaW5zdGFuY2UubWFuaWZlc3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgLy8gTG9hZCBhcHByb3ByaWF0ZSBMb2dnZXIuXHJcbiAgICAgIGlmIChzaXRlX2NmZy5sb2dnZXIpIHtcclxuICAgICAgICBnZXRJZmFjZShzaXRlX2NmZy5sb2dnZXIpLnRoZW4oZnVuY3Rpb24gKGlmYWNlKSB7XHJcbiAgICAgICAgICBpZiAoaWZhY2UuZXh0ZXJuYWwuYXBpICE9PSAnY29uc29sZScpIHtcclxuICAgICAgICAgICAgZmFsbGJhY2tMb2dnZXIoXCJVbndpbGxpbmcgdG8gdXNlIGxvZ2dlciB3aXRoIHVua25vd24gQVBJOlwiLFxyXG4gICAgICAgICAgICAgIGlmYWNlLmV4dGVybmFsLmFwaSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkZWJ1Zy5zZXRMb2dnZXIoaWZhY2UuZXh0ZXJuYWwoKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZmFsbGJhY2tMb2dnZXIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZhbGxiYWNrTG9nZ2VyKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIExvYWQgcm9vdCBtb2R1bGUuXHJcbiAgICAgIGdldElmYWNlKHNpdGVfY2ZnLm1hbmlmZXN0KS50aGVuKGZ1bmN0aW9uIChpZmFjZSkge1xyXG4gICAgICAgIGlmYWNlLnBvcnQub25jZSgnY2xvc2UnLCBjbGVhbnVwKTtcclxuICAgICAgICByZXR1cm4gaWZhY2UuZXh0ZXJuYWw7XHJcbiAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICBkZWJ1Zy5lcnJvcignRmFpbGVkIHRvIHJldHJpZXZlIG1hbmlmZXN0OiAnICsgZXJyKTtcclxuICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgIH0pLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgIH1cclxuXHJcbiAgICBodWIuZW1pdCgnY29uZmlnJywgc2l0ZV9jZmcpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBzZXR1cDtcclxuIiwiLypqc2xpbnQgaW5kZW50OjIsc2xvcHB5OnRydWUsbm9kZTp0cnVlICovXHJcbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XHJcblxyXG4vKipcclxuICogRGVmaW5lcyBmZG9tLkh1YiwgdGhlIGNvcmUgbWVzc2FnZSBodWIgYmV0d2VlbiBmcmVlZG9tIG1vZHVsZXMuXHJcbiAqIEluY29tbWluZyBtZXNzYWdlcyBmcm9tIGFwcHMgYXJlIHNlbnQgdG8gaHViLm9uTWVzc2FnZSgpXHJcbiAqIEBjbGFzcyBIdWJcclxuICogQHBhcmFtIHtEZWJ1Z30gZGVidWcgTG9nZ2VyIGZvciBkZWJ1Z2dpbmcuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxudmFyIEh1YiA9IGZ1bmN0aW9uIChkZWJ1Zykge1xyXG4gIHRoaXMuZGVidWcgPSBkZWJ1ZztcclxuICB0aGlzLmNvbmZpZyA9IHt9O1xyXG4gIHRoaXMuYXBwcyA9IHt9O1xyXG4gIHRoaXMucm91dGVzID0ge307XHJcblxyXG4gIHV0aWwuaGFuZGxlRXZlbnRzKHRoaXMpO1xyXG4gIHRoaXMub24oJ2NvbmZpZycsIGZ1bmN0aW9uIChjb25maWcpIHtcclxuICAgIHV0aWwubWl4aW4odGhpcy5jb25maWcsIGNvbmZpZyk7XHJcbiAgfS5iaW5kKHRoaXMpKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBIYW5kbGUgYW4gaW5jb21pbmcgbWVzc2FnZSBmcm9tIGEgZnJlZWRvbSBhcHAuXHJcbiAqIEBtZXRob2Qgb25NZXNzYWdlXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBzb3VyY2UgVGhlIGlkZW50aWZpeWluZyBzb3VyY2Ugb2YgdGhlIG1lc3NhZ2UuXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlIFRoZSBzZW50IG1lc3NhZ2UuXHJcbiAqL1xyXG5IdWIucHJvdG90eXBlLm9uTWVzc2FnZSA9IGZ1bmN0aW9uIChzb3VyY2UsIG1lc3NhZ2UpIHtcclxuICB2YXIgZGVzdGluYXRpb24gPSB0aGlzLnJvdXRlc1tzb3VyY2VdLCB0eXBlO1xyXG4gIGlmICghZGVzdGluYXRpb24gfHwgIWRlc3RpbmF0aW9uLmFwcCkge1xyXG4gICAgdGhpcy5kZWJ1Zy53YXJuKFwiTWVzc2FnZSBkcm9wcGVkIGZyb20gdW5yZWdpc3RlcmVkIHNvdXJjZSBcIiArIHNvdXJjZSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBpZiAoIXRoaXMuYXBwc1tkZXN0aW5hdGlvbi5hcHBdKSB7XHJcbiAgICB0aGlzLmRlYnVnLndhcm4oXCJNZXNzYWdlIGRyb3BwZWQgdG8gZGVzdGluYXRpb24gXCIgKyBkZXN0aW5hdGlvbi5hcHApO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gVGhlIGZpcmVob3NlIHRyYWNpbmcgYWxsIGludGVybmFsIGZyZWVkb20uanMgbWVzc2FnZXMuXHJcbiAgaWYgKCFtZXNzYWdlLnF1aWV0ICYmICFkZXN0aW5hdGlvbi5xdWlldCAmJiB0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy50cmFjZSkge1xyXG4gICAgdHlwZSA9IG1lc3NhZ2UudHlwZTtcclxuICAgIGlmIChtZXNzYWdlLnR5cGUgPT09ICdtZXNzYWdlJyAmJiBtZXNzYWdlLm1lc3NhZ2UgJiZcclxuICAgICAgICBtZXNzYWdlLm1lc3NhZ2UuYWN0aW9uID09PSAnbWV0aG9kJykge1xyXG4gICAgICB0eXBlID0gJ21ldGhvZC4nICsgbWVzc2FnZS5tZXNzYWdlLnR5cGU7XHJcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ21ldGhvZCcgJiYgbWVzc2FnZS5tZXNzYWdlICYmXHJcbiAgICAgICAgbWVzc2FnZS5tZXNzYWdlLnR5cGUgPT09ICdtZXRob2QnKSB7XHJcbiAgICAgIHR5cGUgPSAncmV0dXJuLicgKyBtZXNzYWdlLm1lc3NhZ2UubmFtZTtcclxuICAgIH0gZWxzZSBpZiAobWVzc2FnZS50eXBlID09PSAnbWVzc2FnZScgJiYgbWVzc2FnZS5tZXNzYWdlICYmXHJcbiAgICAgICAgbWVzc2FnZS5tZXNzYWdlLnR5cGUgPT09ICdldmVudCcpIHtcclxuICAgICAgdHlwZSA9ICdldmVudC4nICsgbWVzc2FnZS5tZXNzYWdlLm5hbWU7XHJcbiAgICB9XHJcbiAgICB0aGlzLmRlYnVnLmRlYnVnKHRoaXMuYXBwc1tkZXN0aW5hdGlvbi5zb3VyY2VdLnRvU3RyaW5nKCkgK1xyXG4gICAgICAgIFwiIC1cIiArIHR5cGUgKyBcIi0+IFwiICtcclxuICAgICAgICB0aGlzLmFwcHNbZGVzdGluYXRpb24uYXBwXS50b1N0cmluZygpICsgXCIuXCIgKyBkZXN0aW5hdGlvbi5mbG93KTtcclxuICB9XHJcblxyXG4gIHRoaXMuYXBwc1tkZXN0aW5hdGlvbi5hcHBdLm9uTWVzc2FnZShkZXN0aW5hdGlvbi5mbG93LCBtZXNzYWdlKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBHZXQgdGhlIGxvY2FsIGRlc3RpbmF0aW9uIHBvcnQgb2YgYSBmbG93LlxyXG4gKiBAbWV0aG9kIGdldERlc3RpbmF0aW9uXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBzb3VyY2UgVGhlIGZsb3cgdG8gcmV0cmlldmUuXHJcbiAqIEByZXR1cm4ge1BvcnR9IFRoZSBkZXN0aW5hdGlvbiBwb3J0LlxyXG4gKi9cclxuSHViLnByb3RvdHlwZS5nZXREZXN0aW5hdGlvbiA9IGZ1bmN0aW9uIChzb3VyY2UpIHtcclxuICB2YXIgZGVzdGluYXRpb24gPSB0aGlzLnJvdXRlc1tzb3VyY2VdO1xyXG4gIGlmICghZGVzdGluYXRpb24pIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuICByZXR1cm4gdGhpcy5hcHBzW2Rlc3RpbmF0aW9uLmFwcF07XHJcbn07XHJcblxyXG4vKipcclxuICogR2V0IHRoZSBsb2NhbCBzb3VyY2UgcG9ydCBvZiBhIGZsb3cuXHJcbiAqIEBtZXRob2QgZ2V0U291cmNlXHJcbiAqIEBwYXJhbSB7UG9ydH0gc291cmNlIFRoZSBmbG93IGlkZW50aWZpZXIgdG8gcmV0cmlldmUuXHJcbiAqIEByZXR1cm4ge1BvcnR9IFRoZSBzb3VyY2UgcG9ydC5cclxuICovXHJcbkh1Yi5wcm90b3R5cGUuZ2V0U291cmNlID0gZnVuY3Rpb24gKHNvdXJjZSkge1xyXG4gIGlmICghc291cmNlKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGlmICghdGhpcy5hcHBzW3NvdXJjZS5pZF0pIHtcclxuICAgIHRoaXMuZGVidWcud2FybihcIk5vIHJlZ2lzdGVyZWQgc291cmNlICdcIiArIHNvdXJjZS5pZCArIFwiJ1wiKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgcmV0dXJuIHRoaXMuYXBwc1tzb3VyY2UuaWRdO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlZ2lzdGVyIGEgZGVzdGluYXRpb24gZm9yIG1lc3NhZ2VzIHdpdGggdGhpcyBodWIuXHJcbiAqIEBtZXRob2QgcmVnaXN0ZXJcclxuICogQHBhcmFtIHtQb3J0fSBhcHAgVGhlIFBvcnQgdG8gcmVnaXN0ZXIuXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2ZvcmNlXSBXaGV0aGVyIHRvIG92ZXJyaWRlIGFuIGV4aXN0aW5nIHBvcnQuXHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59IFdoZXRoZXIgdGhlIGFwcCB3YXMgcmVnaXN0ZXJlZC5cclxuICovXHJcbkh1Yi5wcm90b3R5cGUucmVnaXN0ZXIgPSBmdW5jdGlvbiAoYXBwLCBmb3JjZSkge1xyXG4gIGlmICghdGhpcy5hcHBzW2FwcC5pZF0gfHwgZm9yY2UpIHtcclxuICAgIHRoaXMuYXBwc1thcHAuaWRdID0gYXBwO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogRGVyZWdpc3RlciBhIGRlc3RpbmF0aW9uIGZvciBtZXNzYWdlcyB3aXRoIHRoZSBodWIuXHJcbiAqIE5vdGU6IGRvZXMgbm90IHJlbW92ZSBhc3NvY2lhdGVkIHJvdXRlcy4gQXMgc3VjaCwgZGVyZWdpc3RlcmluZyB3aWxsXHJcbiAqIHByZXZlbnQgdGhlIGluc3RhbGxhdGlvbiBvZiBuZXcgcm91dGVzLCBidXQgd2lsbCBub3QgZGlzdHJ1cHQgZXhpc3RpbmdcclxuICogaHViIHJvdXRlcy5cclxuICogQG1ldGhvZCBkZXJlZ2lzdGVyXHJcbiAqIEBwYXJhbSB7UG9ydH0gYXBwIFRoZSBQb3J0IHRvIGRlcmVnaXN0ZXJcclxuICogQHJldHVybiB7Qm9vbGVhbn0gV2hldGhlciB0aGUgYXBwIHdhcyBkZXJlZ2lzdGVyZWQuXHJcbiAqL1xyXG5IdWIucHJvdG90eXBlLmRlcmVnaXN0ZXIgPSBmdW5jdGlvbiAoYXBwKSB7XHJcbiAgaWYgKCF0aGlzLmFwcHNbYXBwLmlkXSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBkZWxldGUgdGhpcy5hcHBzW2FwcC5pZF07XHJcbiAgcmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG4vKipcclxuICogSW5zdGFsbCBhIG5ldyByb3V0ZSBpbiB0aGUgaHViLlxyXG4gKiBAbWV0aG9kIGluc3RhbGxcclxuICogQHBhcmFtIHtQb3J0fSBzb3VyY2UgVGhlIHNvdXJjZSBvZiB0aGUgcm91dGUuXHJcbiAqIEBwYXJhbSB7UG9ydH0gZGVzdGluYXRpb24gVGhlIGRlc3RpbmF0aW9uIG9mIHRoZSByb3V0ZS5cclxuICogQHBhcmFtIHtTdHJpbmd9IGZsb3cgVGhlIGZsb3cgd2hlcmUgdGhlIGRlc3RpbmF0aW9uIHdpbGwgcmVjZWl2ZSBtZXNzYWdlcy5cclxuICogQHBhcmFtIHtCb29sZWFufSBxdWlldCBXaGV0aGVyIG1lc3NhZ2VzIG9uIHRoaXMgcm91dGUgc2hvdWxkIGJlIHN1cHByZXNzZWQuXHJcbiAqIEByZXR1cm4ge1N0cmluZ30gQSByb3V0aW5nIHNvdXJjZSBpZGVudGlmaWVyIGZvciBzZW5kaW5nIG1lc3NhZ2VzLlxyXG4gKi9cclxuSHViLnByb3RvdHlwZS5pbnN0YWxsID0gZnVuY3Rpb24gKHNvdXJjZSwgZGVzdGluYXRpb24sIGZsb3csIHF1aWV0KSB7XHJcbiAgc291cmNlID0gdGhpcy5nZXRTb3VyY2Uoc291cmNlKTtcclxuICBpZiAoIXNvdXJjZSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZiAoIWRlc3RpbmF0aW9uKSB7XHJcbiAgICB0aGlzLmRlYnVnLndhcm4oXCJVbndpbGxpbmcgdG8gZ2VuZXJhdGUgYmxhY2tob2xlIGZsb3cgZnJvbSBcIiArIHNvdXJjZS5pZCk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICB2YXIgcm91dGUgPSB0aGlzLmdlbmVyYXRlUm91dGUoKTtcclxuICB0aGlzLnJvdXRlc1tyb3V0ZV0gPSB7XHJcbiAgICBhcHA6IGRlc3RpbmF0aW9uLFxyXG4gICAgZmxvdzogZmxvdyxcclxuICAgIHNvdXJjZTogc291cmNlLmlkLFxyXG4gICAgcXVpZXQ6IHF1aWV0XHJcbiAgfTtcclxuICBpZiAodHlwZW9mIHNvdXJjZS5vbiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgc291cmNlLm9uKHJvdXRlLCB0aGlzLm9uTWVzc2FnZS5iaW5kKHRoaXMsIHJvdXRlKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcm91dGU7XHJcbn07XHJcblxyXG4vKipcclxuICogVW5pbnN0YWxsIGEgaHViIHJvdXRlLlxyXG4gKiBAbWV0aG9kIHVuaW5zdGFsbFxyXG4gKiBAcGFyYW0ge1BvcnR9IHNvdXJjZSBUaGUgc291cmNlIG9mIHRoZSByb3V0ZS5cclxuICogQHBhcmFtIHtTdHJpbmd9IGZsb3cgVGhlIHJvdXRlIHRvIHVuaW5zdGFsbC5cclxuICogQHJldHVybiB7Qm9vbGVhbn0gV2hldGhlciB0aGUgcm91dGUgd2FzIGFibGUgdG8gYmUgdW5pbnN0YWxsZWQuXHJcbiAqL1xyXG5IdWIucHJvdG90eXBlLnVuaW5zdGFsbCA9IGZ1bmN0aW9uIChzb3VyY2UsIGZsb3cpIHtcclxuICBzb3VyY2UgPSB0aGlzLmdldFNvdXJjZShzb3VyY2UpO1xyXG4gIGlmICghc291cmNlKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICB2YXIgcm91dGUgPSB0aGlzLnJvdXRlc1tmbG93XTtcclxuICBpZiAoIXJvdXRlKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSBlbHNlIGlmIChyb3V0ZS5zb3VyY2UgIT09IHNvdXJjZS5pZCkge1xyXG4gICAgdGhpcy5kZWJ1Zy53YXJuKFwiRmxvdyBcIiArIGZsb3cgKyBcIiBkb2VzIG5vdCBiZWxvbmcgdG8gcG9ydCBcIiArIHNvdXJjZS5pZCk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBkZWxldGUgdGhpcy5yb3V0ZXNbZmxvd107XHJcbiAgaWYgKHR5cGVvZiBzb3VyY2Uub2ZmID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICBzb3VyY2Uub2ZmKHJvdXRlKTtcclxuICB9XHJcbiAgcmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG4vKipcclxuICogUmVtb3ZlIGFsbCBsaXN0ZW5lcnMgYW5kIG5vdGlmeSBhbGwgY29ubmVjdGVkIGRlc3RpbmF0aW9ucyBvZiB0aGVpciByZW1vdmFsLlxyXG4gKiBAbWV0aG9kIHRlYXJkb3duXHJcbiAqL1xyXG5IdWIucHJvdG90eXBlLnRlYXJkb3duID0gZnVuY3Rpb24gKCkge1xyXG4gIHV0aWwuZWFjaFByb3AodGhpcy5hcHBzLCBmdW5jdGlvbiAoc291cmNlKSB7XHJcbiAgICBpZiAodHlwZW9mIHNvdXJjZS5vZmYgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgc291cmNlLm9mZigpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHRoaXMuYXBwcyA9IHt9O1xyXG4gIHRoaXMucm91dGVzID0ge307XHJcbn07XHJcblxyXG4vKipcclxuICogR2VuZXJhdGUgYSB1bmlxdWUgcm91dGluZyBpZGVudGlmaWVyLlxyXG4gKiBAbWV0aG9kIGdlbmVyYXRlUm91dGVcclxuICogQHJldHVybiB7U3RyaW5nfSBhIHJvdXRpbmcgc291cmNlIGlkZW50aWZpZXIuXHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5IdWIucHJvdG90eXBlLmdlbmVyYXRlUm91dGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIHV0aWwuZ2V0SWQoKTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSHViO1xyXG4iLCIvKmpzbGludCBpbmRlbnQ6Miwgbm9kZTp0cnVlLCBzbG9wcHk6dHJ1ZSAqL1xudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuLyoqXG4gKiBBIGxpbmsgY29ubmVjdHMgdHdvIGZyZWVkb20gaHVicy4gVGhpcyBpcyBhbiBhYnN0cmFjdCBjbGFzc1xuICogcHJvdmlkaW5nIGNvbW1vbiBmdW5jdGlvbmFsaXR5IG9mIHRyYW5zbGF0aW5nIGNvbnRyb2wgY2hhbm5lbHMsXG4gKiBhbmQgaW50ZWdyYXRpbmcgY29uZmlnIGluZm9ybWF0aW9uLlxuICogQGNsYXNzIExpbmtcbiAqIEBpbXBsZW1lbnRzIFBvcnRcbiAqIEBjb25zdHJ1Y3RvclxuICovXG52YXIgTGluayA9IGZ1bmN0aW9uIChuYW1lLCByZXNvdXJjZSkge1xuICB0aGlzLmlkID0gJ0xpbmsnICsgTWF0aC5yYW5kb20oKTtcbiAgdGhpcy5uYW1lID0gbmFtZTtcbiAgdGhpcy5yZXNvdXJjZSA9IHJlc291cmNlO1xuICB0aGlzLmNvbmZpZyA9IHt9O1xuICB0aGlzLnNyYyA9IG51bGw7XG5cbiAgdXRpbC5oYW5kbGVFdmVudHModGhpcyk7XG4gIHV0aWwubWl4aW4odGhpcywgTGluay5wcm90b3R5cGUpO1xufTtcblxuLyoqXG4gKiBSZWNlaXZlIG1lc3NhZ2VzIGZyb20gdGhlIGh1YiB0byB0aGlzIHBvcnQuXG4gKiBNYW5hZ2VzIHN0YXJ0dXAsIGFuZCBwYXNzZXMgb3RoZXJzIHRvICdkZWxpdmVyTWVzc2FnZScgaW1wbGVtZW50ZWRcbiAqIGluIGRlcml2ZWQgY2xhc3Nlcy5cbiAqIEBtZXRob2Qgb25NZXNzYWdlXG4gKiBAcGFyYW0ge1N0cmluZ30gZmxvdyB0aGUgY2hhbm5lbC9mbG93IG9mIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2UgVGhlIE1lc3NhZ2UuXG4gKi9cbkxpbmsucHJvdG90eXBlLm9uTWVzc2FnZSA9IGZ1bmN0aW9uIChmbG93LCBtZXNzYWdlKSB7XG4gIGlmIChmbG93ID09PSAnY29udHJvbCcgJiYgIXRoaXMuY29udHJvbENoYW5uZWwpIHtcbiAgICBpZiAoIXRoaXMuY29udHJvbENoYW5uZWwgJiYgbWVzc2FnZS5jaGFubmVsKSB7XG4gICAgICB0aGlzLmNvbnRyb2xDaGFubmVsID0gbWVzc2FnZS5jaGFubmVsO1xuICAgICAgdXRpbC5taXhpbih0aGlzLmNvbmZpZywgbWVzc2FnZS5jb25maWcpO1xuICAgICAgdGhpcy5zdGFydCgpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aGlzLmRlbGl2ZXJNZXNzYWdlKGZsb3csIG1lc3NhZ2UpO1xuICB9XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIGEgaGFuZGxlciB0byBhbGVydCBvZiBlcnJvcnMgb24gdGhpcyBwb3J0LlxuICogQG1ldGhvZCBhZGRFcnJvckhhbmRsZXJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXIgTWV0aG9kIHRvIGNhbGwgd2l0aCBlcnJvcnMuXG4gKi9cbkxpbmsucHJvdG90eXBlLmFkZEVycm9ySGFuZGxlciA9IGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gIHRoaXMub25FcnJvciA9IGhhbmRsZXI7XG59O1xuXG4vKipcbiAqIFJlcG9ydCBhbiBlcnJvciBvbiB0aGlzIGxpbmsuXG4gKiBAbWV0aG9kIG9uZXJyb3JcbiAqIEBwYXJhbSB7RXJyb3J9IGVyciBUaGUgZXJyb3IgdGhhdCBvY2N1cnJlZC5cbiAqL1xuTGluay5wcm90b3R5cGUub25FcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgLy9GaWxsZWQgaW4gYnkgYWRkRXJyb3JIYW5kbGVyXG59O1xuXG4vKipcbiAqIEVtaXQgbWVzc2FnZXMgdG8gdGhlIHRoZSBodWIsIG1hcHBpbmcgY29udHJvbCBjaGFubmVscy5cbiAqIEBtZXRob2QgZW1pdE1lc3NhZ2VcbiAqIEBwYXJhbSB7U3RyaW5nfSBmbG93IHRoZSBmbG93IHRvIGVtaXQgdGhlIG1lc3NhZ2Ugb24uXG4gKiBAcGFyYW0ge09iamVjdH0gbWVzc2dhZSBUaGUgbWVzc2FnZSB0byBlbWl0LlxuICovXG5MaW5rLnByb3RvdHlwZS5lbWl0TWVzc2FnZSA9IGZ1bmN0aW9uIChmbG93LCBtZXNzYWdlKSB7XG4gIGlmIChmbG93ID09PSAnY29udHJvbCcgJiYgdGhpcy5jb250cm9sQ2hhbm5lbCkge1xuICAgIGZsb3cgPSB0aGlzLmNvbnRyb2xDaGFubmVsO1xuICB9XG4gIHRoaXMuZW1pdChmbG93LCBtZXNzYWdlKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTGluaztcbiIsIi8qZ2xvYmFscyBXb3JrZXIgKi9cbi8qanNsaW50IGluZGVudDoyLCB3aGl0ZTp0cnVlLCBub2RlOnRydWUsIHNsb3BweTp0cnVlLCBicm93c2VyOnRydWUgKi9cbnZhciBMaW5rID0gcmVxdWlyZSgnLi4vbGluaycpO1xuXG4vKipcbiAqIEEgcG9ydCBwcm92aWRpbmcgbWVzc2FnZSB0cmFuc3BvcnQgYmV0d2VlbiB0d28gZnJlZWRvbSBjb250ZXh0cyB2aWEgV29ya2VyLlxuICogQGNsYXNzIFdvcmtlclxuICogQGV4dGVuZHMgTGlua1xuICogQHVzZXMgaGFuZGxlRXZlbnRzXG4gKiBAY29uc3RydWN0b3JcbiAqL1xudmFyIFdvcmtlckxpbmsgPSBmdW5jdGlvbihpZCwgcmVzb3VyY2UpIHtcbiAgTGluay5jYWxsKHRoaXMsIGlkLCByZXNvdXJjZSk7XG4gIGlmIChpZCkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgfVxufTtcblxuLyoqXG4gKiBTdGFydCB0aGlzIHBvcnQgYnkgbGlzdGVuaW5nIG9yIGNyZWF0aW5nIGEgd29ya2VyLlxuICogQG1ldGhvZCBzdGFydFxuICogQHByaXZhdGVcbiAqL1xuV29ya2VyTGluay5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuY29uZmlnLm1vZHVsZUNvbnRleHQpIHtcbiAgICB0aGlzLnNldHVwTGlzdGVuZXIoKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnNldHVwV29ya2VyKCk7XG4gIH1cbn07XG5cbi8qKlxuICogU3RvcCB0aGlzIHBvcnQgYnkgZGVzdHJveWluZyB0aGUgd29ya2VyLlxuICogQG1ldGhvZCBzdG9wXG4gKiBAcHJpdmF0ZVxuICovXG5Xb3JrZXJMaW5rLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oKSB7XG4gIC8vIEZ1bmN0aW9uIGlzIGRldGVybWluZWQgYnkgc2V0dXBMaXN0ZW5lciBvciBzZXR1cEZyYW1lIGFzIGFwcHJvcHJpYXRlLlxufTtcblxuLyoqXG4gKiBHZXQgdGhlIHRleHR1YWwgZGVzY3JpcHRpb24gb2YgdGhpcyBwb3J0LlxuICogQG1ldGhvZCB0b1N0cmluZ1xuICogQHJldHVybiB7U3RyaW5nfSB0aGUgZGVzY3JpcHRpb24gb2YgdGhpcyBwb3J0LlxuICovXG5Xb3JrZXJMaW5rLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gXCJbV29ya2VyIFwiICsgdGhpcy5pZCArIFwiXVwiO1xufTtcblxuLyoqXG4gKiBTZXQgdXAgYSBnbG9iYWwgbGlzdGVuZXIgdG8gaGFuZGxlIGluY29taW5nIG1lc3NhZ2VzIHRvIHRoaXNcbiAqIGZyZWVkb20uanMgY29udGV4dC5cbiAqIEBtZXRob2Qgc2V0dXBMaXN0ZW5lclxuICovXG5Xb3JrZXJMaW5rLnByb3RvdHlwZS5zZXR1cExpc3RlbmVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBvbk1zZyA9IGZ1bmN0aW9uKG1zZykge1xuICAgIHRoaXMuZW1pdE1lc3NhZ2UobXNnLmRhdGEuZmxvdywgbXNnLmRhdGEubWVzc2FnZSk7XG4gIH0uYmluZCh0aGlzKTtcbiAgdGhpcy5vYmogPSB0aGlzLmNvbmZpZy5nbG9iYWw7XG4gIHRoaXMub2JqLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1zZywgdHJ1ZSk7XG4gIHRoaXMuc3RvcCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMub2JqLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1zZywgdHJ1ZSk7XG4gICAgZGVsZXRlIHRoaXMub2JqO1xuICB9O1xuICB0aGlzLmVtaXQoJ3N0YXJ0ZWQnKTtcbiAgdGhpcy5vYmoucG9zdE1lc3NhZ2UoXCJSZWFkeSBGb3IgTWVzc2FnZXNcIik7XG59O1xuXG4vKipcbiAqIFNldCB1cCBhIHdvcmtlciB3aXRoIGFuIGlzb2xhdGVkIGZyZWVkb20uanMgY29udGV4dCBpbnNpZGUuXG4gKiBAbWV0aG9kIHNldHVwV29ya2VyXG4gKi9cbldvcmtlckxpbmsucHJvdG90eXBlLnNldHVwV29ya2VyID0gZnVuY3Rpb24oKSB7XG4gIHZhciB3b3JrZXIsXG4gICAgYmxvYixcbiAgICBzZWxmID0gdGhpcztcbiAgd29ya2VyID0gbmV3IFdvcmtlcih0aGlzLmNvbmZpZy5zb3VyY2UgKyAnIycgKyB0aGlzLmlkKTtcblxuICB3b3JrZXIuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBmdW5jdGlvbihlcnIpIHtcbiAgICB0aGlzLm9uRXJyb3IoZXJyKTtcbiAgfS5iaW5kKHRoaXMpLCB0cnVlKTtcbiAgd29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbih3b3JrZXIsIG1zZykge1xuICAgIGlmICghdGhpcy5vYmopIHtcbiAgICAgIHRoaXMub2JqID0gd29ya2VyO1xuICAgICAgdGhpcy5lbWl0KCdzdGFydGVkJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZW1pdE1lc3NhZ2UobXNnLmRhdGEuZmxvdywgbXNnLmRhdGEubWVzc2FnZSk7XG4gIH0uYmluZCh0aGlzLCB3b3JrZXIpLCB0cnVlKTtcbiAgdGhpcy5zdG9wID0gZnVuY3Rpb24oKSB7XG4gICAgd29ya2VyLnRlcm1pbmF0ZSgpO1xuICAgIGlmICh0aGlzLm9iaikge1xuICAgICAgZGVsZXRlIHRoaXMub2JqO1xuICAgIH1cbiAgfTtcbn07XG5cbi8qKlxuICogUmVjZWl2ZSBtZXNzYWdlcyBmcm9tIHRoZSBodWIgdG8gdGhpcyBwb3J0LlxuICogUmVjZWl2ZWQgbWVzc2FnZXMgd2lsbCBiZSBlbWl0dGVkIGZyb20gdGhlIG90aGVyIHNpZGUgb2YgdGhlIHBvcnQuXG4gKiBAbWV0aG9kIGRlbGl2ZXJNZXNzYWdlXG4gKiBAcGFyYW0ge1N0cmluZ30gZmxvdyB0aGUgY2hhbm5lbC9mbG93IG9mIHRoZSBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2UgVGhlIE1lc3NhZ2UuXG4gKi9cbldvcmtlckxpbmsucHJvdG90eXBlLmRlbGl2ZXJNZXNzYWdlID0gZnVuY3Rpb24oZmxvdywgbWVzc2FnZSkge1xuICBpZiAoZmxvdyA9PT0gJ2NvbnRyb2wnICYmIG1lc3NhZ2UudHlwZSA9PT0gJ2Nsb3NlJyAmJlxuICAgICAgbWVzc2FnZS5jaGFubmVsID09PSAnY29udHJvbCcpIHtcbiAgICB0aGlzLnN0b3AoKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAodGhpcy5vYmopIHtcbiAgICAgIHRoaXMub2JqLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgZmxvdzogZmxvdyxcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25jZSgnc3RhcnRlZCcsIHRoaXMub25NZXNzYWdlLmJpbmQodGhpcywgZmxvdywgbWVzc2FnZSkpO1xuICAgIH1cbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBXb3JrZXJMaW5rO1xuXG4iLCIvKmpzbGludCBpbmRlbnQ6Mixub2RlOnRydWUsc2xvcHB5OnRydWUgKi9cbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG52YXIgTW9kdWxlSW50ZXJuYWwgPSByZXF1aXJlKCcuL21vZHVsZWludGVybmFsJyk7XG5cbi8qKlxuICogQSBmcmVlZG9tIHBvcnQgd2hpY2ggbWFuYWdlcyB0aGUgY29udHJvbCBwbGFuZSBvZiBvZiBjaGFuZ2luZyBodWIgcm91dGVzLlxuICogQGNsYXNzIE1hbmFnZXJcbiAqIEBpbXBsZW1lbnRzIFBvcnRcbiAqIEBwYXJhbSB7SHVifSBodWIgVGhlIHJvdXRpbmcgaHViIHRvIGNvbnRyb2wuXG4gKiBAcGFyYW0ge1Jlc291cmNlfSByZXNvdXJjZSBUaGUgcmVzb3VyY2UgbWFuYWdlciBmb3IgdGhlIHJ1bnRpbWUuXG4gKiBAcGFyYW0ge0FwaX0gYXBpIFRoZSBBUEkgbWFuYWdlciBmb3IgdGhlIHJ1bnRpbWUuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xudmFyIE1hbmFnZXIgPSBmdW5jdGlvbiAoaHViLCByZXNvdXJjZSwgYXBpKSB7XG4gIHRoaXMuaWQgPSAnY29udHJvbCc7XG4gIHRoaXMuY29uZmlnID0ge307XG4gIHRoaXMuY29udHJvbEZsb3dzID0ge307XG4gIHRoaXMuZGF0YUZsb3dzID0ge307XG4gIHRoaXMuZGF0YUZsb3dzW3RoaXMuaWRdID0gW107XG4gIHRoaXMucmV2ZXJzZUZsb3dNYXAgPSB7fTtcblxuICB0aGlzLmRlYnVnID0gaHViLmRlYnVnO1xuICB0aGlzLmh1YiA9IGh1YjtcbiAgdGhpcy5yZXNvdXJjZSA9IHJlc291cmNlO1xuICB0aGlzLmFwaSA9IGFwaTtcblxuICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcbiAgdGhpcy50b0RlbGVnYXRlID0ge307XG5cbiAgdGhpcy5odWIub24oJ2NvbmZpZycsIGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICB1dGlsLm1peGluKHRoaXMuY29uZmlnLCBjb25maWcpO1xuICAgIHRoaXMuZW1pdCgnY29uZmlnJyk7XG4gIH0uYmluZCh0aGlzKSk7XG5cbiAgdXRpbC5oYW5kbGVFdmVudHModGhpcyk7XG4gIHRoaXMuaHViLnJlZ2lzdGVyKHRoaXMpO1xufTtcblxuLyoqXG4gKiBQcm92aWRlIGEgdGV4dHVhbCBkZXNjcmlwdGlvbiBvZiB0aGlzIHBvcnQuXG4gKiBAbWV0aG9kIHRvU3RyaW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHRoZSBkZXNjcmlwdGlvbiBvZiB0aGlzIHBvcnQuXG4gKi9cbk1hbmFnZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gXCJbTG9jYWwgQ29udHJvbGxlcl1cIjtcbn07XG5cbi8qKlxuICogUHJvY2VzcyBtZXNzYWdlcyBzZW50IHRvIHRoaXMgcG9ydC5cbiAqIFRoZSBtYW5hZ2VyLCBvciAnY29udHJvbCcgZGVzdGluYXRpb24gaGFuZGxlcyBzZXZlcmFsIHR5cGVzIG9mIG1lc3NhZ2VzLFxuICogaWRlbnRpZmllZCBieSB0aGUgcmVxdWVzdCBwcm9wZXJ0eS4gIFRoZSBhY3Rpb25zIGFyZTpcbiAqIDEuIGRlYnVnLiBQcmludHMgdGhlIG1lc3NhZ2UgdG8gdGhlIGNvbnNvbGUuXG4gKiAyLiBsaW5rLiBDcmVhdGVzIGEgbGluayBiZXR3ZWVuIHRoZSBzb3VyY2UgYW5kIGEgcHJvdmlkZWQgZGVzdGluYXRpb24gcG9ydC5cbiAqIDMuIGVudmlyb25tZW50LiBJbnN0YW50aWF0ZSBhIG1vZHVsZSBlbnZpcm9ubWVudCBkZWZpbmVkIGluIE1vZHVsZUludGVybmFsLlxuICogNC4gZGVsZWdhdGUuIFJvdXRlcyBhIGRlZmluZWQgc2V0IG9mIGNvbnRyb2wgbWVzc2FnZXMgdG8gYW5vdGhlciBsb2NhdGlvbi5cbiAqIDUuIHJlc291cmNlLiBSZWdpc3RlcnMgdGhlIHNvdXJjZSBhcyBhIHJlc291cmNlIHJlc29sdmVyLlxuICogNi4gY29yZS4gR2VuZXJhdGVzIGEgY29yZSBwcm92aWRlciBmb3IgdGhlIHJlcXVlc3Rlci5cbiAqIDcuIGNsb3NlLiBUZWFycyBkb3duIHJvdXRlcyBpbnZvbGluZyB0aGUgcmVxdWVzdGluZyBwb3J0LlxuICogOC4gdW5saW5rLiBUZWFycyBkb3duIGEgcm91dGUgZnJvbSB0aGUgcmVxdWVzdGluZyBwb3J0LlxuICogQG1ldGhvZCBvbk1lc3NhZ2VcbiAqIEBwYXJhbSB7U3RyaW5nfSBmbG93IFRoZSBzb3VyY2UgaWRlbnRpZmllciBvZiB0aGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlIFRoZSByZWNlaXZlZCBtZXNzYWdlLlxuICovXG5NYW5hZ2VyLnByb3RvdHlwZS5vbk1lc3NhZ2UgPSBmdW5jdGlvbiAoZmxvdywgbWVzc2FnZSkge1xuICB2YXIgcmV2ZXJzZUZsb3cgPSB0aGlzLmNvbnRyb2xGbG93c1tmbG93XSwgb3JpZ2luO1xuICBpZiAoIXJldmVyc2VGbG93KSB7XG4gICAgdGhpcy5kZWJ1Zy53YXJuKFwiVW5rbm93biBtZXNzYWdlIHNvdXJjZTogXCIgKyBmbG93KTtcbiAgICByZXR1cm47XG4gIH1cbiAgb3JpZ2luID0gdGhpcy5odWIuZ2V0RGVzdGluYXRpb24ocmV2ZXJzZUZsb3cpO1xuXG4gIGlmICh0aGlzLmRlbGVnYXRlICYmIHJldmVyc2VGbG93ICE9PSB0aGlzLmRlbGVnYXRlICYmXG4gICAgICB0aGlzLnRvRGVsZWdhdGVbZmxvd10pIHtcbiAgICAvLyBTaGlwIG9mZiB0byB0aGUgZGVsZWdlZVxuICAgIHRoaXMuZW1pdCh0aGlzLmRlbGVnYXRlLCB7XG4gICAgICB0eXBlOiAnRGVsZWdhdGlvbicsXG4gICAgICByZXF1ZXN0OiAnaGFuZGxlJyxcbiAgICAgIHF1aWV0OiB0cnVlLFxuICAgICAgZmxvdzogZmxvdyxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAobWVzc2FnZS5yZXF1ZXN0ID09PSAnZGVidWcnKSB7XG4gICAgdGhpcy5kZWJ1Zy5wcmludChtZXNzYWdlKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAobWVzc2FnZS5yZXF1ZXN0ID09PSAnbGluaycpIHtcbiAgICB0aGlzLmNyZWF0ZUxpbmsob3JpZ2luLCBtZXNzYWdlLm5hbWUsIG1lc3NhZ2UudG8sIG1lc3NhZ2Uub3ZlcnJpZGVEZXN0KTtcbiAgfSBlbHNlIGlmIChtZXNzYWdlLnJlcXVlc3QgPT09ICdlbnZpcm9ubWVudCcpIHtcbiAgICB0aGlzLmNyZWF0ZUxpbmsob3JpZ2luLCBtZXNzYWdlLm5hbWUsIG5ldyBNb2R1bGVJbnRlcm5hbCh0aGlzKSk7XG4gIH0gZWxzZSBpZiAobWVzc2FnZS5yZXF1ZXN0ID09PSAnZGVsZWdhdGUnKSB7XG4gICAgLy8gSW5pdGF0ZSBEZWxlZ2F0aW9uLlxuICAgIGlmICh0aGlzLmRlbGVnYXRlID09PSBudWxsKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gcmV2ZXJzZUZsb3c7XG4gICAgfVxuICAgIHRoaXMudG9EZWxlZ2F0ZVttZXNzYWdlLmZsb3ddID0gdHJ1ZTtcbiAgICB0aGlzLmVtaXQoJ2RlbGVnYXRlJyk7XG4gIH0gZWxzZSBpZiAobWVzc2FnZS5yZXF1ZXN0ID09PSAncmVzb3VyY2UnKSB7XG4gICAgdGhpcy5yZXNvdXJjZS5hZGRSZXNvbHZlcihtZXNzYWdlLmFyZ3NbMF0pO1xuICAgIHRoaXMucmVzb3VyY2UuYWRkUmV0cmlldmVyKG1lc3NhZ2Uuc2VydmljZSwgbWVzc2FnZS5hcmdzWzFdKTtcbiAgfSBlbHNlIGlmIChtZXNzYWdlLnJlcXVlc3QgPT09ICdjb3JlJykge1xuICAgIGlmICh0aGlzLmNvcmUgJiYgcmV2ZXJzZUZsb3cgPT09IHRoaXMuZGVsZWdhdGUpIHtcbiAgICAgIChuZXcgdGhpcy5jb3JlKCkpLm9uTWVzc2FnZShvcmlnaW4sIG1lc3NhZ2UubWVzc2FnZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZ2V0Q29yZShmdW5jdGlvbiAodG8sIGNvcmUpIHtcbiAgICAgIHRoaXMuaHViLm9uTWVzc2FnZSh0bywge1xuICAgICAgICB0eXBlOiAnY29yZScsXG4gICAgICAgIGNvcmU6IGNvcmVcbiAgICAgIH0pO1xuICAgIH0uYmluZCh0aGlzLCByZXZlcnNlRmxvdykpO1xuICB9IGVsc2UgaWYgKG1lc3NhZ2UucmVxdWVzdCA9PT0gJ2Nsb3NlJykge1xuICAgIHRoaXMuZGVzdHJveShvcmlnaW4pO1xuICB9IGVsc2UgaWYgKG1lc3NhZ2UucmVxdWVzdCA9PT0gJ3VubGluaycpIHtcbiAgICB0aGlzLnJlbW92ZUxpbmsob3JpZ2luLCBtZXNzYWdlLnRvKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmRlYnVnLndhcm4oXCJVbmtub3duIGNvbnRyb2wgcmVxdWVzdDogXCIgKyBtZXNzYWdlLnJlcXVlc3QpO1xuICAgIHRoaXMuZGVidWcubG9nKEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpKTtcbiAgICByZXR1cm47XG4gIH1cbn07XG5cbi8qKlxuICogR2V0IHRoZSBwb3J0IG1lc3NhZ2VzIHdpbGwgYmUgcm91dGVkIHRvIGdpdmVuIGl0cyBpZC5cbiAqIEBtZXRob2QgZ2V0UG9ydFxuICogQHBhcmFtIHtTdHJpbmd9IHBvcnRJZCBUaGUgSUQgb2YgdGhlIHBvcnQuXG4gKiBAcmV0dXJucyB7ZmRvbS5Qb3J0fSBUaGUgcG9ydCB3aXRoIHRoYXQgSUQuXG4gKi9cbk1hbmFnZXIucHJvdG90eXBlLmdldFBvcnQgPSBmdW5jdGlvbiAocG9ydElkKSB7XG4gIHJldHVybiB0aGlzLmh1Yi5nZXREZXN0aW5hdGlvbih0aGlzLmNvbnRyb2xGbG93c1twb3J0SWRdKTtcbn07XG5cbi8qKlxuICogU2V0IHVwIGEgcG9ydCB3aXRoIHRoZSBodWIuXG4gKiBAbWV0aG9kIHNldHVwXG4gKiBAcGFyYW0ge1BvcnR9IHBvcnQgVGhlIHBvcnQgdG8gcmVnaXN0ZXIuXG4gKi9cbk1hbmFnZXIucHJvdG90eXBlLnNldHVwID0gZnVuY3Rpb24gKHBvcnQpIHtcbiAgaWYgKCFwb3J0LmlkKSB7XG4gICAgdGhpcy5kZWJ1Zy53YXJuKFwiUmVmdXNpbmcgdG8gc2V0dXAgdW5pZGVudGlmaWVkIHBvcnQgXCIpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh0aGlzLmNvbnRyb2xGbG93c1twb3J0LmlkXSkge1xuICAgIHRoaXMuZGVidWcud2FybihcIlJlZnVzaW5nIHRvIHJlLWluaXRpYWxpemUgcG9ydCBcIiArIHBvcnQuaWQpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghdGhpcy5jb25maWcuZ2xvYmFsKSB7XG4gICAgdGhpcy5vbmNlKCdjb25maWcnLCB0aGlzLnNldHVwLmJpbmQodGhpcywgcG9ydCkpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuaHViLnJlZ2lzdGVyKHBvcnQpO1xuICB2YXIgZmxvdyA9IHRoaXMuaHViLmluc3RhbGwodGhpcywgcG9ydC5pZCwgXCJjb250cm9sXCIpLFxuICAgIHJldmVyc2UgPSB0aGlzLmh1Yi5pbnN0YWxsKHBvcnQsIHRoaXMuaWQsIHBvcnQuaWQpO1xuICB0aGlzLmNvbnRyb2xGbG93c1twb3J0LmlkXSA9IGZsb3c7XG4gIHRoaXMuZGF0YUZsb3dzW3BvcnQuaWRdID0gW3JldmVyc2VdO1xuICB0aGlzLnJldmVyc2VGbG93TWFwW2Zsb3ddID0gcmV2ZXJzZTtcbiAgdGhpcy5yZXZlcnNlRmxvd01hcFtyZXZlcnNlXSA9IGZsb3c7XG5cbiAgaWYgKHBvcnQubGluZWFnZSkge1xuICAgIHRoaXMuZW1pdCgnbW9kdWxlQWRkJywge2lkOiBwb3J0LmlkLCBsaW5lYWdlOiBwb3J0LmxpbmVhZ2V9KTtcbiAgfVxuXG4gIHRoaXMuaHViLm9uTWVzc2FnZShmbG93LCB7XG4gICAgdHlwZTogJ3NldHVwJyxcbiAgICBjaGFubmVsOiByZXZlcnNlLFxuICAgIGNvbmZpZzogdGhpcy5jb25maWdcbiAgfSk7XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIFRlYXIgZG93biBhIHBvcnQgb24gdGhlIGh1Yiwgb3IgdGhlIGZ1bGwgbG9jYWwgaHViLlxuICogQG1ldGhvZCBkZXN0cm95XG4gKiBAYXByYW0ge1BvcnQ/fSBwb3J0IFRoZSBwb3J0IHRvIHVucmVnaXN0ZXIuXG4gKi9cbk1hbmFnZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAocG9ydCkge1xuICBpZiAoIXBvcnQpIHtcbiAgICAvLyBUZWFyIGRvd24gZXZlcnl0aGluZyFcbiAgICB1dGlsLmVhY2hQcm9wKHRoaXMuY29udHJvbEZsb3dzLCBmdW5jdGlvbiAoZmxvdykge1xuICAgICAgdGhpcy5odWIub25NZXNzYWdlKGZsb3csIHtcbiAgICAgICAgdHlwZTogJ2Nsb3NlJ1xuICAgICAgfSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmh1Yi50ZWFyZG93bigpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghcG9ydC5pZCkge1xuICAgIHRoaXMuZGVidWcud2FybihcIlVuYWJsZSB0byB0ZWFyIGRvd24gdW5pZGVudGlmaWVkIHBvcnRcIik7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHBvcnQubGluZWFnZSkge1xuICAgIHRoaXMuZW1pdCgnbW9kdWxlUmVtb3ZlJywge2lkOiBwb3J0LmlkLCBsaW5lYWdlOiBwb3J0LmxpbmVhZ2V9KTtcbiAgfVxuXG4gIC8vIFJlbW92ZSB0aGUgcG9ydC5cbiAgZGVsZXRlIHRoaXMuY29udHJvbEZsb3dzW3BvcnQuaWRdO1xuXG4gIC8vIFJlbW92ZSBhc3NvY2lhdGVkIGxpbmtzLlxuICB2YXIgaTtcbiAgZm9yIChpID0gdGhpcy5kYXRhRmxvd3NbcG9ydC5pZF0ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcbiAgICB0aGlzLnJlbW92ZUxpbmsocG9ydCwgdGhpcy5kYXRhRmxvd3NbcG9ydC5pZF1baV0pO1xuICB9XG5cbiAgLy8gUmVtb3ZlIHRoZSBwb3J0LlxuICBkZWxldGUgdGhpcy5kYXRhRmxvd3NbcG9ydC5pZF07XG4gIHRoaXMuaHViLmRlcmVnaXN0ZXIocG9ydCk7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIGxpbmsgYmV0d2VlbiB0d28gcG9ydHMuICBMaW5rcyBhcmUgY3JlYXRlZCBpbiBib3RoIGRpcmVjdGlvbnMsXG4gKiBhbmQgYSBtZXNzYWdlIHdpdGggdGhvc2UgY2FwYWJpbGl0aWVzIGlzIHNlbnQgdG8gdGhlIHNvdXJjZSBwb3J0LlxuICogQG1ldGhvZCBjcmVhdGVMaW5rXG4gKiBAcGFyYW0ge1BvcnR9IHBvcnQgVGhlIHNvdXJjZSBwb3J0LlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIGZsb3cgZm9yIG1lc3NhZ2VzIGZyb20gZGVzdGluYXRpb24gdG8gcG9ydC5cbiAqIEBwYXJhbSB7UG9ydH0gZGVzdGluYXRpb24gVGhlIGRlc3RpbmF0aW9uIHBvcnQuXG4gKiBAcGFyYW0ge1N0cmluZ30gW2Rlc3ROYW1lXSBUaGUgZmxvdyBuYW1lIGZvciBtZXNzYWdlcyB0byB0aGUgZGVzdGluYXRpb24uXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFt0b0Rlc3RdIFRlbGwgdGhlIGRlc3RpbmF0aW9uIGFib3V0IHRoZSBsaW5rLlxuICovXG5NYW5hZ2VyLnByb3RvdHlwZS5jcmVhdGVMaW5rID0gZnVuY3Rpb24gKHBvcnQsIG5hbWUsIGRlc3RpbmF0aW9uLCBkZXN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9EZXN0KSB7XG4gIGlmICghdGhpcy5jb25maWcuZ2xvYmFsKSB7XG4gICAgdGhpcy5vbmNlKCdjb25maWcnLFxuICAgICAgdGhpcy5jcmVhdGVMaW5rLmJpbmQodGhpcywgcG9ydCwgbmFtZSwgZGVzdGluYXRpb24sIGRlc3ROYW1lKSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCF0aGlzLmNvbnRyb2xGbG93c1twb3J0LmlkXSkge1xuICAgIHRoaXMuZGVidWcud2FybignVW53aWxsaW5nIHRvIGxpbmsgZnJvbSBub24tcmVnaXN0ZXJlZCBzb3VyY2UuJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCF0aGlzLmNvbnRyb2xGbG93c1tkZXN0aW5hdGlvbi5pZF0pIHtcbiAgICBpZiAodGhpcy5zZXR1cChkZXN0aW5hdGlvbikgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmRlYnVnLndhcm4oJ0NvdWxkIG5vdCBmaW5kIG9yIHNldHVwIGRlc3RpbmF0aW9uLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICB2YXIgcXVpZXQgPSBkZXN0aW5hdGlvbi5xdWlldCB8fCBmYWxzZSxcbiAgICBvdXRnb2luZ05hbWUgPSBkZXN0TmFtZSB8fCAnZGVmYXVsdCcsXG4gICAgb3V0Z29pbmcgPSB0aGlzLmh1Yi5pbnN0YWxsKHBvcnQsIGRlc3RpbmF0aW9uLmlkLCBvdXRnb2luZ05hbWUsIHF1aWV0KSxcbiAgICByZXZlcnNlO1xuXG4gIC8vIFJlY292ZXIgdGhlIHBvcnQgc28gdGhhdCBsaXN0ZW5lcnMgYXJlIGluc3RhbGxlZC5cbiAgZGVzdGluYXRpb24gPSB0aGlzLmh1Yi5nZXREZXN0aW5hdGlvbihvdXRnb2luZyk7XG4gIHJldmVyc2UgPSB0aGlzLmh1Yi5pbnN0YWxsKGRlc3RpbmF0aW9uLCBwb3J0LmlkLCBuYW1lLCBxdWlldCk7XG5cbiAgdGhpcy5yZXZlcnNlRmxvd01hcFtvdXRnb2luZ10gPSByZXZlcnNlO1xuICB0aGlzLmRhdGFGbG93c1twb3J0LmlkXS5wdXNoKG91dGdvaW5nKTtcbiAgdGhpcy5yZXZlcnNlRmxvd01hcFtyZXZlcnNlXSA9IG91dGdvaW5nO1xuICB0aGlzLmRhdGFGbG93c1tkZXN0aW5hdGlvbi5pZF0ucHVzaChyZXZlcnNlKTtcblxuICBpZiAodG9EZXN0KSB7XG4gICAgdGhpcy5odWIub25NZXNzYWdlKHRoaXMuY29udHJvbEZsb3dzW2Rlc3RpbmF0aW9uLmlkXSwge1xuICAgICAgdHlwZTogJ2NyZWF0ZUxpbmsnLFxuICAgICAgbmFtZTogb3V0Z29pbmdOYW1lLFxuICAgICAgY2hhbm5lbDogcmV2ZXJzZSxcbiAgICAgIHJldmVyc2U6IG91dGdvaW5nXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5odWIub25NZXNzYWdlKHRoaXMuY29udHJvbEZsb3dzW3BvcnQuaWRdLCB7XG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgdHlwZTogJ2NyZWF0ZUxpbmsnLFxuICAgICAgY2hhbm5lbDogb3V0Z29pbmcsXG4gICAgICByZXZlcnNlOiByZXZlcnNlXG4gICAgfSk7XG4gIH1cbn07XG5cbi8qKlxuICogUmVtb3ZlIGEgbGluayBiZXR3ZWVuIHRvIHBvcnRzLiBUaGUgcmV2ZXJzZSBsaW5rIHdpbGwgYWxzbyBiZSByZW1vdmVkLlxuICogQG1ldGhvZCByZW1vdmVMaW5rXG4gKiBAcGFyYW0ge1BvcnR9IHBvcnQgVGhlIHNvdXJjZSBwb3J0LlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIGZsb3cgdG8gYmUgcmVtb3ZlZC5cbiAqL1xuTWFuYWdlci5wcm90b3R5cGUucmVtb3ZlTGluayA9IGZ1bmN0aW9uIChwb3J0LCBuYW1lKSB7XG4gIHZhciByZXZlcnNlID0gdGhpcy5odWIuZ2V0RGVzdGluYXRpb24obmFtZSksXG4gICAgcmZsb3cgPSB0aGlzLnJldmVyc2VGbG93TWFwW25hbWVdLFxuICAgIGk7XG5cbiAgaWYgKCFyZXZlcnNlIHx8ICFyZmxvdykge1xuICAgIHRoaXMuZGVidWcud2FybihcIkNvdWxkIG5vdCBmaW5kIG1ldGFkYXRhIHRvIHJlbW92ZSBmbG93OiBcIiArIG5hbWUpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh0aGlzLmh1Yi5nZXREZXN0aW5hdGlvbihyZmxvdykuaWQgIT09IHBvcnQuaWQpIHtcbiAgICB0aGlzLmRlYnVnLndhcm4oXCJTb3VyY2UgcG9ydCBkb2VzIG5vdCBvd24gZmxvdyBcIiArIG5hbWUpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIE5vdGlmeSBwb3J0cyB0aGF0IGEgY2hhbm5lbCBpcyBjbG9zaW5nLlxuICBpID0gdGhpcy5jb250cm9sRmxvd3NbcG9ydC5pZF07XG4gIGlmIChpKSB7XG4gICAgdGhpcy5odWIub25NZXNzYWdlKGksIHtcbiAgICAgIHR5cGU6ICdjbG9zZScsXG4gICAgICBjaGFubmVsOiBuYW1lXG4gICAgfSk7XG4gIH1cbiAgaSA9IHRoaXMuY29udHJvbEZsb3dzW3JldmVyc2UuaWRdO1xuICBpZiAoaSkge1xuICAgIHRoaXMuaHViLm9uTWVzc2FnZShpLCB7XG4gICAgICB0eXBlOiAnY2xvc2UnLFxuICAgICAgY2hhbm5lbDogcmZsb3dcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFVuaW5zdGFsbCB0aGUgY2hhbm5lbC5cbiAgdGhpcy5odWIudW5pbnN0YWxsKHBvcnQsIG5hbWUpO1xuICB0aGlzLmh1Yi51bmluc3RhbGwocmV2ZXJzZSwgcmZsb3cpO1xuXG4gIGRlbGV0ZSB0aGlzLnJldmVyc2VGbG93TWFwW25hbWVdO1xuICBkZWxldGUgdGhpcy5yZXZlcnNlRmxvd01hcFtyZmxvd107XG4gIHRoaXMuZm9yZ2V0RmxvdyhyZXZlcnNlLmlkLCByZmxvdyk7XG4gIHRoaXMuZm9yZ2V0Rmxvdyhwb3J0LmlkLCBuYW1lKTtcbn07XG5cbi8qKlxuICogRm9yZ2V0IHRoZSBmbG93IGZyb20gaWQgd2l0aCBhIGdpdmVuIG5hbWUuXG4gKiBAbWV0aG9kIGZvcmdldEZsb3dcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgVGhlIHBvcnQgSUQgb2YgdGhlIHNvdXJjZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBmbG93IG5hbWUuXG4gKi9cbk1hbmFnZXIucHJvdG90eXBlLmZvcmdldEZsb3cgPSBmdW5jdGlvbiAoaWQsIG5hbWUpIHtcbiAgdmFyIGk7XG4gIGlmICh0aGlzLmRhdGFGbG93c1tpZF0pIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5kYXRhRmxvd3NbaWRdLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodGhpcy5kYXRhRmxvd3NbaWRdW2ldID09PSBuYW1lKSB7XG4gICAgICAgIHRoaXMuZGF0YUZsb3dzW2lkXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBHZXQgdGhlIGNvcmUgZnJlZWRvbS5qcyBBUEkgYWN0aXZlIG9uIHRoZSBjdXJyZW50IGh1Yi5cbiAqIEBtZXRob2QgZ2V0Q29yZVxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiIENhbGxiYWNrIHRvIGZpcmUgd2l0aCB0aGUgY29yZSBvYmplY3QuXG4gKi9cbk1hbmFnZXIucHJvdG90eXBlLmdldENvcmUgPSBmdW5jdGlvbiAoY2IpIHtcbiAgaWYgKHRoaXMuY29yZSkge1xuICAgIGNiKHRoaXMuY29yZSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5hcGkuZ2V0Q29yZSgnY29yZScsIHRoaXMpLnRoZW4oZnVuY3Rpb24gKGNvcmUpIHtcbiAgICAgIHRoaXMuY29yZSA9IGNvcmUuaW5zdDtcbiAgICAgIGNiKHRoaXMuY29yZSk7XG4gICAgfS5iaW5kKHRoaXMpLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjYih1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hbmFnZXI7XG4iLCIvKmpzbGludCBpbmRlbnQ6Mixub2RlOnRydWUsc2xvcHB5OnRydWUgKi9cbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG52YXIgUHJvdmlkZXIgPSByZXF1aXJlKCcuL3Byb3ZpZGVyJyk7XG5cbi8qKlxuICogVGhlIGV4dGVybmFsIFBvcnQgZmFjZSBvZiBhIG1vZHVsZSBvbiBhIGh1Yi5cbiAqIEBjbGFzcyBNb2R1bGVcbiAqIEBleHRlbmRzIFBvcnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBtYW5pZmVzdFVSTCBUaGUgbWFuaWZlc3QgdGhpcyBtb2R1bGUgbG9hZHMuXG4gKiBAcGFyYW0ge1N0cmluZ1tdfSBjcmVhdG9yIFRoZSBsaW5lYWdlIG9mIGNyZWF0aW9uIGZvciB0aGlzIG1vZHVsZS5cbiAqIEBwYXJhbSB7UG9saWN5fSBQb2xpY3kgVGhlIHBvbGljeSBsb2FkZXIgZm9yIGRlcGVuZGVuY2llcy5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG52YXIgTW9kdWxlID0gZnVuY3Rpb24gKG1hbmlmZXN0VVJMLCBtYW5pZmVzdCwgY3JlYXRvciwgcG9saWN5KSB7XG4gIHRoaXMuYXBpID0gcG9saWN5LmFwaTtcbiAgdGhpcy5wb2xpY3kgPSBwb2xpY3k7XG4gIHRoaXMucmVzb3VyY2UgPSBwb2xpY3kucmVzb3VyY2U7XG4gIHRoaXMuZGVidWcgPSBwb2xpY3kuZGVidWc7XG5cbiAgdGhpcy5jb25maWcgPSB7fTtcblxuICB0aGlzLmlkID0gbWFuaWZlc3RVUkwgKyBNYXRoLnJhbmRvbSgpO1xuICB0aGlzLm1hbmlmZXN0SWQgPSBtYW5pZmVzdFVSTDtcbiAgdGhpcy5tYW5pZmVzdCA9IG1hbmlmZXN0O1xuICB0aGlzLmxpbmVhZ2UgPSBbdGhpcy5tYW5pZmVzdElkXS5jb25jYXQoY3JlYXRvcik7XG5cbiAgdGhpcy5xdWlldCA9IHRoaXMubWFuaWZlc3QucXVpZXQgfHwgZmFsc2U7XG5cbiAgdGhpcy5leHRlcm5hbFBvcnRNYXAgPSB7fTtcbiAgdGhpcy5pbnRlcm5hbFBvcnRNYXAgPSB7fTtcbiAgdGhpcy5kZXBlbmRhbnRDaGFubmVscyA9IFtdO1xuICAvLyBNYXAgZnJvbSBkZXBlbmRlbmN5IG5hbWVzIHRvIHRhcmdldCBVUkxzLCBmcm9tIHRoaXMgbW9kdWxlJ3MgbWFuaWZlc3QuXG4gIHRoaXMuZGVwZW5kZW5jeVVybHMgPSB7fTtcbiAgLy8gTWFwIGZyb20gZGVwZW5lbmN5IG5hbWVzIHRvIGFycmF5cyBvZiBwZW5kaW5nIG1lc3NhZ2VzLiAgT25jZSBhXG4gIC8vIGRlcGVuZGVuY3kgaXMgZnVsbHkgc3RhcnRlZCwgdGhlIHBlbmRpbmcgbWVzc2FnZXMgd2lsbCBiZSBkcmFpbmVkIGFuZCBpdHNcbiAgLy8gZW50cnkgaW4gdGhpcyBtYXAgd2lsbCBiZSBkZWxldGVkLlxuICB0aGlzLnBlbmRpbmdNZXNzYWdlcyA9IHt9O1xuICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgdGhpcy5mYWlsZWQgPSBmYWxzZTtcblxuICB1dGlsLmhhbmRsZUV2ZW50cyh0aGlzKTtcbn07XG5cbi8qKlxuICogUmVjZWl2ZSBhIG1lc3NhZ2UgZm9yIHRoZSBNb2R1bGUuXG4gKiBAbWV0aG9kIG9uTWVzc2FnZVxuICogQHBhcmFtIHtTdHJpbmd9IGZsb3cgVGhlIG9yaWdpbiBvZiB0aGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlIFRoZSBtZXNzYWdlIHJlY2VpdmVkLlxuICovXG5Nb2R1bGUucHJvdG90eXBlLm9uTWVzc2FnZSA9IGZ1bmN0aW9uIChmbG93LCBtZXNzYWdlKSB7XG4gIGlmICh0aGlzLmZhaWxlZCAmJiBtZXNzYWdlLnRvKSB7XG4gICAgLy8gV2UndmUgYXR0ZW1wdGVkIHRvIGxvYWQgdGhlIG1vZHVsZSBhbmQgZmFpbGVkLCBzbyBzaG9ydC1jaXJjdWl0IGFueVxuICAgIC8vIG1lc3NhZ2VzIGJvdW5kIGZvciB0aGUgcHJvdmlkZXIsIGFuZCByZXNwb25kIHdpdGggYW4gZXJyb3IgcmVwbHkgaW5zdGVhZC5cbiAgICAvLyBUaGlzIGVycm9yIGlzIGhhbmRsZWQgaW4gQ29uc3VtZXIsIHJlc3VsdGluZyBpbiB0cmlnZ2VyaW5nIHRoZVxuICAgIC8vIGZyZWVkb21bJ21vZHVsZU5hbWUnXS5vbkVycm9yIGxpc3RlbmVycy5cbiAgICB0aGlzLmVtaXQodGhpcy5leHRlcm5hbFBvcnRNYXBbZmxvd10sIHtcbiAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChmbG93ID09PSAnY29udHJvbCcpIHtcbiAgICBpZiAobWVzc2FnZS50eXBlID09PSAnc2V0dXAnKSB7XG4gICAgICB0aGlzLmNvbnRyb2xDaGFubmVsID0gbWVzc2FnZS5jaGFubmVsO1xuICAgICAgdXRpbC5taXhpbih0aGlzLmNvbmZpZywgbWVzc2FnZS5jb25maWcpO1xuICAgICAgdGhpcy5lbWl0KHRoaXMuY29udHJvbENoYW5uZWwsIHtcbiAgICAgICAgdHlwZTogJ0NvcmUgUHJvdmlkZXInLFxuICAgICAgICByZXF1ZXN0OiAnY29yZSdcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zdGFydCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAobWVzc2FnZS50eXBlID09PSAnY3JlYXRlTGluaycgJiYgbWVzc2FnZS5jaGFubmVsKSB7XG4gICAgICB0aGlzLmRlYnVnLmRlYnVnKHRoaXMgKyAnZ290IGNyZWF0ZSBsaW5rIGZvciAnICsgbWVzc2FnZS5uYW1lKTtcbiAgICAgIHRoaXMuZXh0ZXJuYWxQb3J0TWFwW21lc3NhZ2UubmFtZV0gPSBtZXNzYWdlLmNoYW5uZWw7XG4gICAgICBpZiAodGhpcy5pbnRlcm5hbFBvcnRNYXBbbWVzc2FnZS5uYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuaW50ZXJuYWxQb3J0TWFwW21lc3NhZ2UubmFtZV0gPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHZhciBtc2cgPSB7XG4gICAgICAgIHR5cGU6ICdkZWZhdWx0IGNoYW5uZWwgYW5ub3VuY2VtZW50JyxcbiAgICAgICAgY2hhbm5lbDogbWVzc2FnZS5yZXZlcnNlXG4gICAgICB9O1xuICAgICAgaWYgKHRoaXMubWFuaWZlc3QuZGVwZW5kZW5jaWVzICYmXG4gICAgICAgICAgdGhpcy5tYW5pZmVzdC5kZXBlbmRlbmNpZXNbbWVzc2FnZS5uYW1lXSkge1xuICAgICAgICBtc2cuYXBpID0gdGhpcy5tYW5pZmVzdC5kZXBlbmRlbmNpZXNbbWVzc2FnZS5uYW1lXS5hcGk7XG4gICAgICB9XG4gICAgICB0aGlzLmVtaXQobWVzc2FnZS5jaGFubmVsLCBtc2cpO1xuICAgICAgdGhpcy5kcmFpblBlbmRpbmdNZXNzYWdlcyhtZXNzYWdlLm5hbWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAobWVzc2FnZS5jb3JlKSB7XG4gICAgICB0aGlzLmNvcmUgPSBuZXcgbWVzc2FnZS5jb3JlKCk7XG4gICAgICB0aGlzLmVtaXQoJ2NvcmUnLCBtZXNzYWdlLmNvcmUpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAobWVzc2FnZS50eXBlID09PSAnY2xvc2UnKSB7XG4gICAgICAvLyBDbG9zaW5nIGNoYW5uZWwuXG4gICAgICBpZiAoIW1lc3NhZ2UuY2hhbm5lbCB8fCBtZXNzYWdlLmNoYW5uZWwgPT09ICdjb250cm9sJykge1xuICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGVyZWdpc3RlckZsb3cobWVzc2FnZS5jaGFubmVsLCBmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucG9ydC5vbk1lc3NhZ2UoZmxvdywgbWVzc2FnZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmICgodGhpcy5leHRlcm5hbFBvcnRNYXBbZmxvd10gPT09IGZhbHNlIHx8XG4gICAgICAgICF0aGlzLmV4dGVybmFsUG9ydE1hcFtmbG93XSkgJiYgbWVzc2FnZS5jaGFubmVsKSB7XG4gICAgICB0aGlzLmRlYnVnLmRlYnVnKHRoaXMgKyAnaGFuZGxpbmcgY2hhbm5lbCBhbm5vdW5jZW1lbnQgZm9yICcgKyBmbG93KTtcbiAgICAgIHRoaXMuZXh0ZXJuYWxQb3J0TWFwW2Zsb3ddID0gbWVzc2FnZS5jaGFubmVsO1xuICAgICAgaWYgKHRoaXMuaW50ZXJuYWxQb3J0TWFwW2Zsb3ddID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5pbnRlcm5hbFBvcnRNYXBbZmxvd10gPSBmYWxzZTtcblxuICAgICAgICAvLyBOZXcgaW5jb21pbmcgY29ubmVjdGlvbiBhdHRlbXB0cyBzaG91bGQgZ2V0IHJvdXRlZCB0byBtb2RJbnRlcm5hbC5cbiAgICAgICAgaWYgKHRoaXMubWFuaWZlc3QucHJvdmlkZXMgJiYgdGhpcy5tb2RJbnRlcm5hbCkge1xuICAgICAgICAgIHRoaXMucG9ydC5vbk1lc3NhZ2UodGhpcy5tb2RJbnRlcm5hbCwge1xuICAgICAgICAgICAgdHlwZTogJ0Nvbm5lY3Rpb24nLFxuICAgICAgICAgICAgY2hhbm5lbDogZmxvdyxcbiAgICAgICAgICAgIGFwaTogbWVzc2FnZS5hcGlcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1hbmlmZXN0LnByb3ZpZGVzKSB7XG4gICAgICAgICAgdGhpcy5vbmNlKCdtb2RJbnRlcm5hbCcsIGZ1bmN0aW9uIChmbG93LCBhcGkpIHtcbiAgICAgICAgICAgIHRoaXMucG9ydC5vbk1lc3NhZ2UodGhpcy5tb2RJbnRlcm5hbCwge1xuICAgICAgICAgICAgICB0eXBlOiAnQ29ubmVjdGlvbicsXG4gICAgICAgICAgICAgIGNoYW5uZWw6IGZsb3csXG4gICAgICAgICAgICAgIGFwaTogYXBpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LmJpbmQodGhpcywgZmxvdywgbWVzc2FnZS5hcGkpKTtcbiAgICAgICAgLy8gRmlyc3QgY29ubmVjdGlvbiByZXRhaW5zIGxlZ2FjeSBtYXBwaW5nIGFzICdkZWZhdWx0Jy5cbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5leHRlcm5hbFBvcnRNYXBbJ2RlZmF1bHQnXSAmJiBtZXNzYWdlLmNoYW5uZWwpIHtcbiAgICAgICAgICB0aGlzLmV4dGVybmFsUG9ydE1hcFsnZGVmYXVsdCddID0gbWVzc2FnZS5jaGFubmVsO1xuICAgICAgICAgIHRoaXMub25jZSgnaW50ZXJuYWxDaGFubmVsUmVhZHknLCBmdW5jdGlvbiAoZmxvdykge1xuICAgICAgICAgICAgdGhpcy5pbnRlcm5hbFBvcnRNYXBbZmxvd10gPSB0aGlzLmludGVybmFsUG9ydE1hcFsnZGVmYXVsdCddO1xuICAgICAgICAgIH0uYmluZCh0aGlzLCBmbG93KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuZHJhaW5QZW5kaW5nTWVzc2FnZXMobWVzc2FnZS5uYW1lKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgIHRoaXMub25jZSgnc3RhcnQnLCB0aGlzLm9uTWVzc2FnZS5iaW5kKHRoaXMsIGZsb3csIG1lc3NhZ2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuaW50ZXJuYWxQb3J0TWFwW2Zsb3ddID09PSBmYWxzZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ3dhaXRpbmcgb24gaW50ZXJuYWwgY2hhbm5lbCBmb3IgbXNnJyk7XG4gICAgICAgIHRoaXMub25jZSgnaW50ZXJuYWxDaGFubmVsUmVhZHknLCB0aGlzLm9uTWVzc2FnZS5iaW5kKHRoaXMsIGZsb3csIG1lc3NhZ2UpKTtcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuaW50ZXJuYWxQb3J0TWFwW2Zsb3ddKSB7XG4gICAgICAgIHRoaXMuZGVidWcuZXJyb3IoJ1VuZXhwZWN0ZWQgbWVzc2FnZSBmcm9tICcgKyBmbG93KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wb3J0Lm9uTWVzc2FnZSh0aGlzLmludGVybmFsUG9ydE1hcFtmbG93XSwgbWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIFN0b3JlIGEgcGVuZGluZyBtZXNzYWdlIGZvciBhIGZsb3cgdGhhdCBpc24ndCByZWFkeSB5ZXQuICBUaGUgbWVzc2FnZSB3aWxsXG4gKiBiZSBzZW50IGluLW9yZGVyIGJ5IGRyYWluUGVuZGluZ01lc3NhZ2VzIHdoZW4gdGhlIGZsb3cgYmVjb21lcyByZWFkeS4gIFRoaXNcbiAqIGlzIHVzZWQgdG8gZW5zdXJlIG1lc3NhZ2VzIGFyZSBub3QgbG9zdCB3aGlsZSB0aGUgdGFyZ2V0IG1vZHVsZSBpcyBsb2FkaW5nLlxuICogQG1ldGhvZCBhZGRQZW5kaW5nTWVzc2FnZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgVGhlIGZsb3cgdG8gc3RvcmUgYSBtZXNzYWdlIGZvci5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHN0b3JlLlxuICogQHByaXZhdGVcbiAqL1xuTW9kdWxlLnByb3RvdHlwZS5hZGRQZW5kaW5nTWVzc2FnZSA9IGZ1bmN0aW9uIChuYW1lLCBtZXNzYWdlKSB7XG4gIGlmICghdGhpcy5wZW5kaW5nTWVzc2FnZXNbbmFtZV0pIHtcbiAgICB0aGlzLnBlbmRpbmdNZXNzYWdlc1tuYW1lXSA9IFtdO1xuICB9XG4gIHRoaXMucGVuZGluZ01lc3NhZ2VzW25hbWVdLnB1c2gobWVzc2FnZSk7XG59O1xuXG4vKipcbiAqIFNlbmQgYWxsIHBlbmRpbmcgbWVzc2FnZXMgZm9yIGEgZmxvdyB0aGF0IGlzIG5vdyByZWFkeS4gIFRoZSBtZXNzYWdlcyB3aWxsXG4gKiBiZSBzZW50IGluLW9yZGVyLiAgVGhpcyBpcyB1c2VkIHRvIGVuc3VyZSBtZXNzYWdlcyBhcmUgbm90IGxvc3Qgd2hpbGUgdGhlXG4gKiB0YXJnZXQgbW9kdWxlIGlzIGxvYWRpbmcuXG4gKiBAbWV0aG9kIGFkZFBlbmRpbmdNZXNzYWdlXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgZmxvdyB0byBzZW5kIHBlbmRpbmcgbWVzc2FnZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5Nb2R1bGUucHJvdG90eXBlLmRyYWluUGVuZGluZ01lc3NhZ2VzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgaWYgKCF0aGlzLnBlbmRpbmdNZXNzYWdlc1tuYW1lXSkge1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLnBlbmRpbmdNZXNzYWdlc1tuYW1lXS5mb3JFYWNoKFxuICAgICAgdGhpcy5lbWl0LmJpbmQodGhpcywgdGhpcy5leHRlcm5hbFBvcnRNYXBbbmFtZV0pKTtcbiAgZGVsZXRlIHRoaXMucGVuZGluZ01lc3NhZ2VzW25hbWVdO1xufTtcblxuLyoqXG4gKiBDbGVhbiB1cCBhZnRlciBhIGZsb3cgd2hpY2ggaXMgbm8gbG9uZ2VyIHVzZWQgLyBuZWVkZWQuXG4gKiBAbWV0aG9kIGRlcmVnaXN0ZXJGTG93XG4gKiBAcGFyYW0ge1N0cmluZ30gZmxvdyBUaGUgZmxvdyB0byByZW1vdmUgbWFwcGluZ3MgZm9yLlxuICogQHBhcmFtIHtCb29sZWFufSBpbnRlcm5hbCBJZiB0aGUgZmxvdyBuYW1lIGlzIHRoZSBpbnRlcm5hbCBpZGVudGlmaWVyLlxuICogQHJldHVybnMge0Jvb2xlYW59IFdoZXRoZXIgdGhlIGZsb3cgd2FzIHN1Y2Nlc3NmdWxseSBkZXJlZ2lzdGVyZWQuXG4gKiBAcHJpdmF0ZVxuICovXG5Nb2R1bGUucHJvdG90eXBlLmRlcmVnaXN0ZXJGbG93ID0gZnVuY3Rpb24gKGZsb3csIGludGVybmFsKSB7XG4gIHZhciBrZXksXG4gICAgbWFwID0gaW50ZXJuYWwgPyB0aGlzLmludGVybmFsUG9ydE1hcCA6IHRoaXMuZXh0ZXJuYWxQb3J0TWFwO1xuICAvLyBUT0RPOiB0aGlzIGlzIGluZWZmaWNpZW50LCBidXQgc2VlbXMgbGVzcyBjb25mdXNpbmcgdGhhbiBhIDNyZFxuICAvLyByZXZlcnNlIGxvb2t1cCBtYXAuXG4gIGZvciAoa2V5IGluIG1hcCkge1xuICAgIGlmIChtYXBba2V5XSA9PT0gZmxvdykge1xuICAgICAgaWYgKGludGVybmFsKSB7XG4gICAgICAgIHRoaXMuZW1pdCh0aGlzLmNvbnRyb2xDaGFubmVsLCB7XG4gICAgICAgICAgdHlwZTogJ0NoYW5uZWwgVGVhcmRvd24nLFxuICAgICAgICAgIHJlcXVlc3Q6ICd1bmxpbmsnLFxuICAgICAgICAgIHRvOiB0aGlzLmV4dGVybmFsUG9ydE1hcFtrZXldXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnBvcnQpIHtcbiAgICAgICAgdGhpcy5wb3J0Lm9uTWVzc2FnZSgnY29udHJvbCcsIHtcbiAgICAgICAgICB0eXBlOiAnY2xvc2UnLFxuICAgICAgICAgIGNoYW5uZWw6IHRoaXMuaW50ZXJuYWxQb3J0TWFwW2tleV1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBkZWxldGUgdGhpcy5leHRlcm5hbFBvcnRNYXBba2V5XTtcbiAgICAgIGRlbGV0ZSB0aGlzLmludGVybmFsUG9ydE1hcFtrZXldO1xuXG4gICAgICAvLyBXaGVuIHRoZXJlIGFyZSBzdGlsbCBub24tZGVwZW5kYW50IGNoYW5uZWxzLCBrZWVwIHJ1bm5pbmdcbiAgICAgIGZvciAoa2V5IGluIHRoaXMuZXh0ZXJuYWxQb3J0TWFwKSB7XG4gICAgICAgIGlmICh0aGlzLmV4dGVybmFsUG9ydE1hcC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZGVwZW5kYW50Q2hhbm5lbHMuaW5kZXhPZihrZXkpIDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBPdGhlcndpc2Ugc2h1dCBkb3duIHRoZSBtb2R1bGUuXG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIEF0dGVtcHQgdG8gc3RhcnQgdGhlIG1vZHVsZSBvbmNlIHRoZSByZW1vdGUgZnJlZWRvbSBjb250ZXh0XG4gKiBleGlzdHMuXG4gKiBAbWV0aG9kIHN0YXJ0XG4gKiBAcHJpdmF0ZVxuICovXG5Nb2R1bGUucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgUG9ydDtcbiAgaWYgKHRoaXMuc3RhcnRlZCB8fCB0aGlzLnBvcnQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHRoaXMuY29udHJvbENoYW5uZWwpIHtcbiAgICB0aGlzLmxvYWRMaW5rcygpO1xuICAgIFBvcnQgPSB0aGlzLmNvbmZpZy5wb3J0VHlwZTtcbiAgICB0aGlzLnBvcnQgPSBuZXcgUG9ydCh0aGlzLm1hbmlmZXN0Lm5hbWUsIHRoaXMucmVzb3VyY2UpO1xuICAgIC8vIExpc3RlbiB0byBhbGwgcG9ydCBtZXNzYWdlcy5cbiAgICB0aGlzLnBvcnQub24odGhpcy5lbWl0TWVzc2FnZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnBvcnQuYWRkRXJyb3JIYW5kbGVyKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIHRoaXMuZGVidWcud2FybignTW9kdWxlIEZhaWxlZCcsIGVycik7XG4gICAgICB0aGlzLmZhaWxlZCA9IHRydWU7XG4gICAgICB0aGlzLmVtaXQodGhpcy5jb250cm9sQ2hhbm5lbCwge1xuICAgICAgICByZXF1ZXN0OiAnY2xvc2UnXG4gICAgICB9KTtcbiAgICB9LmJpbmQodGhpcykpO1xuICAgIC8vIFRlbGwgdGhlIGxvY2FsIHBvcnQgdG8gYXNrIHVzIGZvciBoZWxwLlxuICAgIHRoaXMucG9ydC5vbk1lc3NhZ2UoJ2NvbnRyb2wnLCB7XG4gICAgICBjaGFubmVsOiAnY29udHJvbCcsXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnXG4gICAgfSk7XG5cbiAgICAvLyBUZWxsIHRoZSByZW1vdGUgbG9jYXRpb24gdG8gZGVsZWdhdGUgZGVidWdnaW5nLlxuICAgIHRoaXMucG9ydC5vbk1lc3NhZ2UoJ2NvbnRyb2wnLCB7XG4gICAgICB0eXBlOiAnUmVkaXJlY3QnLFxuICAgICAgcmVxdWVzdDogJ2RlbGVnYXRlJyxcbiAgICAgIGZsb3c6ICdkZWJ1ZydcbiAgICB9KTtcbiAgICB0aGlzLnBvcnQub25NZXNzYWdlKCdjb250cm9sJywge1xuICAgICAgdHlwZTogJ1JlZGlyZWN0JyxcbiAgICAgIHJlcXVlc3Q6ICdkZWxlZ2F0ZScsXG4gICAgICBmbG93OiAnY29yZSdcbiAgICB9KTtcblxuICAgIC8vIFRlbGwgdGhlIGNvbnRhaW5lciB0byBpbnN0YW50aWF0ZSB0aGUgY291bnRlcnBhcnQgdG8gdGhpcyBleHRlcm5hbCB2aWV3LlxuICAgIHRoaXMucG9ydC5vbk1lc3NhZ2UoJ2NvbnRyb2wnLCB7XG4gICAgICB0eXBlOiAnRW52aXJvbm1lbnQgQ29uZmlndXJhdGlvbicsXG4gICAgICByZXF1ZXN0OiAnZW52aXJvbm1lbnQnLFxuICAgICAgbmFtZTogJ01vZEludGVybmFsJ1xuICAgIH0pO1xuICB9XG59O1xuXG4vKipcbiAqIFN0b3AgdGhlIG1vZHVsZSB3aGVuIGl0IGlzIG5vIGxvbmdlciBuZWVkZWQsIGFuZCB0ZWFyLWRvd24gc3RhdGUuXG4gKiBAbWV0aG9kIHN0b3BcbiAqIEBwcml2YXRlXG4gKi9cbk1vZHVsZS5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCF0aGlzLnN0YXJ0ZWQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5lbWl0KCdjbG9zZScpO1xuICBpZiAodGhpcy5wb3J0KSB7XG4gICAgdGhpcy5wb3J0Lm9mZigpO1xuICAgIHRoaXMucG9ydC5vbk1lc3NhZ2UoJ2NvbnRyb2wnLCB7XG4gICAgICB0eXBlOiAnY2xvc2UnLFxuICAgICAgY2hhbm5lbDogJ2NvbnRyb2wnXG4gICAgfSk7XG4gICAgdGhpcy5wb3J0LnN0b3AoKTtcbiAgICBkZWxldGUgdGhpcy5wb3J0O1xuICB9XG4gIGRlbGV0ZSB0aGlzLnBvbGljeTtcbiAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG59O1xuXG4vKipcbiAqIFRleHR1YWwgRGVzY3JpcHRpb24gb2YgdGhlIFBvcnRcbiAqIEBtZXRob2QgdG9TdHJpbmdcbiAqIEByZXR1cm4ge1N0cmluZ30gVGhlIGRlc2NyaXB0aW9uIG9mIHRoaXMgUG9ydC5cbiAqL1xuTW9kdWxlLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFwiW01vZHVsZSBcIiArIHRoaXMubWFuaWZlc3QubmFtZSArIFwiXVwiO1xufTtcblxuLyoqXG4gKiBJbnRlcmNlcHQgbWVzc2FnZXMgYXMgdGhleSBhcnJpdmUgZnJvbSB0aGUgbW9kdWxlLFxuICogbWFwcGluZyB0aGVtIGJldHdlZW4gaW50ZXJuYWwgYW5kIGV4dGVybmFsIGZsb3cgbmFtZXMuXG4gKiBAbWV0aG9kIGVtaXRNZXNzYWdlXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgZGVzdGluYXRpb24gdGhlIG1vZHVsZSB3YW50cyB0byBzZW5kIHRvLlxuICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gc2VuZC5cbiAqIEBwcml2YXRlXG4gKi9cbk1vZHVsZS5wcm90b3R5cGUuZW1pdE1lc3NhZ2UgPSBmdW5jdGlvbiAobmFtZSwgbWVzc2FnZSkge1xuICBpZiAodGhpcy5pbnRlcm5hbFBvcnRNYXBbbmFtZV0gPT09IGZhbHNlICYmIG1lc3NhZ2UuY2hhbm5lbCkge1xuICAgIHRoaXMuaW50ZXJuYWxQb3J0TWFwW25hbWVdID0gbWVzc2FnZS5jaGFubmVsO1xuICAgIHRoaXMuZW1pdCgnaW50ZXJuYWxDaGFubmVsUmVhZHknKTtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gVGVybWluYXRlIGRlYnVnIHJlZGlyZWN0aW9uIHJlcXVlc3RlZCBpbiBzdGFydCgpLlxuICBpZiAobmFtZSA9PT0gJ2NvbnRyb2wnKSB7XG4gICAgaWYgKG1lc3NhZ2UuZmxvdyA9PT0gJ2RlYnVnJyAmJiBtZXNzYWdlLm1lc3NhZ2UpIHtcbiAgICAgIHRoaXMuZGVidWcuZm9ybWF0KG1lc3NhZ2UubWVzc2FnZS5zZXZlcml0eSxcbiAgICAgICAgICBtZXNzYWdlLm1lc3NhZ2Uuc291cmNlIHx8IHRoaXMudG9TdHJpbmcoKSxcbiAgICAgICAgICBtZXNzYWdlLm1lc3NhZ2UubXNnKTtcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2UuZmxvdyA9PT0gJ2NvcmUnICYmIG1lc3NhZ2UubWVzc2FnZSkge1xuICAgICAgaWYgKCF0aGlzLmNvcmUpIHtcbiAgICAgICAgdGhpcy5vbmNlKCdjb3JlJywgdGhpcy5lbWl0TWVzc2FnZS5iaW5kKHRoaXMsIG5hbWUsIG1lc3NhZ2UpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG1lc3NhZ2UubWVzc2FnZS50eXBlID09PSAncmVnaXN0ZXInIHx8XG4gICAgICAgICAgbWVzc2FnZS5tZXNzYWdlLnR5cGUgPT09ICdyZXF1aXJlJykge1xuICAgICAgICBtZXNzYWdlLm1lc3NhZ2UucmVwbHkgPSB0aGlzLnBvcnQub25NZXNzYWdlLmJpbmQodGhpcy5wb3J0LCAnY29udHJvbCcpO1xuICAgICAgICB0aGlzLmV4dGVybmFsUG9ydE1hcFttZXNzYWdlLm1lc3NhZ2UuaWRdID0gZmFsc2U7XG4gICAgICB9XG4gICAgICB0aGlzLmNvcmUub25NZXNzYWdlKHRoaXMsIG1lc3NhZ2UubWVzc2FnZSk7XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLm5hbWUgPT09ICdNb2RJbnRlcm5hbCcgJiYgIXRoaXMubW9kSW50ZXJuYWwpIHtcbiAgICAgIHRoaXMubW9kSW50ZXJuYWwgPSBtZXNzYWdlLmNoYW5uZWw7XG4gICAgICB0aGlzLnBvcnQub25NZXNzYWdlKHRoaXMubW9kSW50ZXJuYWwsIHtcbiAgICAgICAgdHlwZTogJ0luaXRpYWxpemF0aW9uJyxcbiAgICAgICAgaWQ6IHRoaXMubWFuaWZlc3RJZCxcbiAgICAgICAgYXBwSWQ6IHRoaXMuaWQsXG4gICAgICAgIG1hbmlmZXN0OiB0aGlzLm1hbmlmZXN0LFxuICAgICAgICBsaW5lYWdlOiB0aGlzLmxpbmVhZ2UsXG4gICAgICAgIGNoYW5uZWw6IG1lc3NhZ2UucmV2ZXJzZVxuICAgICAgfSk7XG4gICAgICB0aGlzLmVtaXQoJ21vZEludGVybmFsJyk7XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLnR5cGUgPT09ICdjcmVhdGVMaW5rJykge1xuICAgICAgdGhpcy5pbnRlcm5hbFBvcnRNYXBbbWVzc2FnZS5uYW1lXSA9IG1lc3NhZ2UuY2hhbm5lbDtcbiAgICAgIHRoaXMucG9ydC5vbk1lc3NhZ2UobWVzc2FnZS5jaGFubmVsLCB7XG4gICAgICAgIHR5cGU6ICdjaGFubmVsIGFubm91bmNlbWVudCcsXG4gICAgICAgIGNoYW5uZWw6IG1lc3NhZ2UucmV2ZXJzZVxuICAgICAgfSk7XG4gICAgICB0aGlzLmVtaXQoJ2ludGVybmFsQ2hhbm5lbFJlYWR5Jyk7XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLnR5cGUgPT09ICdjbG9zZScpIHtcbiAgICAgIHRoaXMuZGVyZWdpc3RlckZsb3cobWVzc2FnZS5jaGFubmVsLCB0cnVlKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAobmFtZSA9PT0gJ01vZEludGVybmFsJyAmJiBtZXNzYWdlLnR5cGUgPT09ICdyZWFkeScgJiYgIXRoaXMuc3RhcnRlZCkge1xuICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XG4gICAgdGhpcy5lbWl0KCdzdGFydCcpO1xuICB9IGVsc2UgaWYgKG5hbWUgPT09ICdNb2RJbnRlcm5hbCcgJiYgbWVzc2FnZS50eXBlID09PSAncmVzb2x2ZScpIHtcbiAgICB0aGlzLnJlc291cmNlLmdldCh0aGlzLm1hbmlmZXN0SWQsIG1lc3NhZ2UuZGF0YSkudGhlbihmdW5jdGlvbiAoaWQsIGRhdGEpIHtcbiAgICAgIHRoaXMucG9ydC5vbk1lc3NhZ2UodGhpcy5tb2RJbnRlcm5hbCwge1xuICAgICAgICB0eXBlOiAncmVzb2x2ZS5yZXNwb25zZScsXG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgZGF0YTogZGF0YVxuICAgICAgfSk7XG4gICAgfS5iaW5kKHRoaXMsIG1lc3NhZ2UuaWQpLCBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLmRlYnVnLndhcm4oJ0Vycm9yIFJlc29sdmluZyBVUkwgZm9yIE1vZHVsZS4nKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9IGVsc2UgaWYgKG5hbWUgPT09ICdNb2RJbnRlcm5hbCcgJiYgbWVzc2FnZS50eXBlID09PSAnZXJyb3InKSB7XG4gICAgdGhpcy5mYWlsZWQgPSB0cnVlO1xuICAgIC8vIFRoZSBzdGFydCBldmVudCBlbnN1cmVzIHRoYXQgd2UgcHJvY2VzcyBhbnkgcGVuZGluZyBtZXNzYWdlcywgaW4gY2FzZVxuICAgIC8vIG9uZSBvZiB0aGVtIHJlcXVpcmVzIGEgc2hvcnQtY2lyY3VpdCBlcnJvciByZXNwb25zZS5cbiAgICB0aGlzLmVtaXQoJ3N0YXJ0Jyk7XG4gIH0gZWxzZSBpZiAoIXRoaXMuZXh0ZXJuYWxQb3J0TWFwW25hbWVdKSB7XG4gICAgLy8gU3RvcmUgdGhpcyBtZXNzYWdlIHVudGlsIHdlIGhhdmUgYSBwb3J0IGZvciB0aGF0IG5hbWUuXG4gICAgdGhpcy5hZGRQZW5kaW5nTWVzc2FnZShuYW1lLCBtZXNzYWdlKTtcbiAgICAvLyBTdGFydCBhc3luY2hyb25vdXMgbG9hZGluZyBvZiB0aGUgdGFyZ2V0IG1vZHVsZSBpZiBpdCdzIGEgZGVwZW5kZW5jeVxuICAgIC8vIGFuZCBsb2FkaW5nIGhhc24ndCBzdGFydGVkLlxuICAgIGlmIChuYW1lIGluIHRoaXMuZGVwZW5kZW5jeVVybHMgJiZcbiAgICAgICAgdGhpcy5kZXBlbmRhbnRDaGFubmVscy5pbmRleE9mKG5hbWUpID09PSAtMSkge1xuICAgICAgdGhpcy5yZXF1aXJlKG5hbWUsIHRoaXMuZGVwZW5kZW5jeVVybHNbbmFtZV0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aGlzLmVtaXQodGhpcy5leHRlcm5hbFBvcnRNYXBbbmFtZV0sIG1lc3NhZ2UpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgZHluYW1pYyBkZXBlbmRlbmN5IG9uIGFub3RoZXIgbW9kdWxlLlxuICogQG1ldGhvZCByZXF1aXJlXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZGVwZW5kZW5jeS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBtYW5pZmVzdCBUaGUgVVJMIG9mIHRoZSBkZXBlbmRlbmN5IHRvIGFkZC5cbiAqL1xuTW9kdWxlLnByb3RvdHlwZS5yZXF1aXJlID0gZnVuY3Rpb24gKG5hbWUsIG1hbmlmZXN0KSB7XG4gIHRoaXMuZGVwZW5kYW50Q2hhbm5lbHMucHVzaChuYW1lKTtcbiAgdGhpcy5hZGREZXBlbmRlbmN5KG1hbmlmZXN0LCBuYW1lKS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgdGhpcy5wb3J0Lm9uTWVzc2FnZSh0aGlzLm1vZEludGVybmFsLCB7XG4gICAgICB0eXBlOiAncmVxdWlyZS5mYWlsdXJlJyxcbiAgICAgIGlkOiBuYW1lLFxuICAgICAgZXJyb3I6IGVyci5tZXNzYWdlXG4gICAgfSk7XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG4vKipcbiAqIEFkZCBhIGRlcGVuZGVuY3kgdG8gdGhlIG1vZHVsZSdzIGRlcGVuZGVuY3kgdHJlZVxuICogQG1ldGhvZCBhZGREZXBlbmRlbmN5XG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBtYW5pZmVzdCBVUkwgb2YgdGhlIGRlcGVuZGVuY3lcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBleHBvc2VkIG5hbWUgb2YgdGhlIG1vZHVsZS5cbiAqIEByZXR1cm5zIHtNb2R1bGV9IFRoZSBjcmVhdGVkIGRlcGVuZGVudCBtb2R1bGUuXG4gKiBAcHJpdmF0ZVxuICovXG5Nb2R1bGUucHJvdG90eXBlLmFkZERlcGVuZGVuY3kgPSBmdW5jdGlvbiAodXJsLCBuYW1lKSB7XG4gIHJldHVybiB0aGlzLnJlc291cmNlLmdldCh0aGlzLm1hbmlmZXN0SWQsIHVybClcbiAgICAudGhlbihmdW5jdGlvbiAodXJsKSB7XG4gICAgICByZXR1cm4gdGhpcy5wb2xpY3kuZ2V0KHRoaXMubGluZWFnZSwgdXJsKTtcbiAgICB9LmJpbmQodGhpcykpXG4gICAgLnRoZW4oZnVuY3Rpb24gKGRlcCkge1xuICAgICAgdGhpcy51cGRhdGVFbnYobmFtZSwgZGVwLm1hbmlmZXN0KTtcbiAgICAgIHRoaXMuZW1pdCh0aGlzLmNvbnRyb2xDaGFubmVsLCB7XG4gICAgICAgIHR5cGU6ICdMaW5rIHRvICcgKyBuYW1lLFxuICAgICAgICByZXF1ZXN0OiAnbGluaycsXG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIG92ZXJyaWRlRGVzdDogbmFtZSArICcuJyArIHRoaXMuaWQsXG4gICAgICAgIHRvOiBkZXBcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGRlcDtcbiAgICB9LmJpbmQodGhpcykpXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIHRoaXMuZGVidWcud2Fybih0aGlzLnRvU3RyaW5nKCkgKyAnIGZhaWxlZCB0byBsb2FkIGRlcDogJywgbmFtZSwgZXJyKTtcbiAgICAgIHRocm93IGVycjtcbiAgICB9LmJpbmQodGhpcykpO1xufTtcblxuLyoqXG4gKiBSZXF1ZXN0IHRoZSBleHRlcm5hbCByb3V0ZXMgdXNlZCBieSB0aGlzIG1vZHVsZS5cbiAqIEBtZXRob2QgbG9hZExpbmtzXG4gKiBAcHJpdmF0ZVxuICovXG5Nb2R1bGUucHJvdG90eXBlLmxvYWRMaW5rcyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGksIGNoYW5uZWxzID0gWydkZWZhdWx0J10sIG5hbWUsIGRlcDtcblxuICBpZiAodGhpcy5tYW5pZmVzdC5wZXJtaXNzaW9ucykge1xuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLm1hbmlmZXN0LnBlcm1pc3Npb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBuYW1lID0gdGhpcy5tYW5pZmVzdC5wZXJtaXNzaW9uc1tpXTtcbiAgICAgIGlmIChjaGFubmVscy5pbmRleE9mKG5hbWUpIDwgMCAmJiBuYW1lLmluZGV4T2YoJ2NvcmUuJykgPT09IDApIHtcbiAgICAgICAgY2hhbm5lbHMucHVzaChuYW1lKTtcbiAgICAgICAgdGhpcy5kZXBlbmRhbnRDaGFubmVscy5wdXNoKG5hbWUpO1xuICAgICAgICBkZXAgPSBuZXcgUHJvdmlkZXIodGhpcy5hcGkuZ2V0KG5hbWUpLmRlZmluaXRpb24sIHRoaXMuZGVidWcpO1xuICAgICAgICB0aGlzLmFwaS5wcm92aWRlQ29yZShuYW1lLCBkZXAsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMuZW1pdCh0aGlzLmNvbnRyb2xDaGFubmVsLCB7XG4gICAgICAgICAgdHlwZTogJ0NvcmUgTGluayB0byAnICsgbmFtZSxcbiAgICAgICAgICByZXF1ZXN0OiAnbGluaycsXG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICB0bzogZGVwXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAodGhpcy5tYW5pZmVzdC5kZXBlbmRlbmNpZXMpIHtcbiAgICB1dGlsLmVhY2hQcm9wKHRoaXMubWFuaWZlc3QuZGVwZW5kZW5jaWVzLCBmdW5jdGlvbiAoZGVzYywgbmFtZSkge1xuICAgICAgaWYgKGNoYW5uZWxzLmluZGV4T2YobmFtZSkgPCAwKSB7XG4gICAgICAgIGNoYW5uZWxzLnB1c2gobmFtZSk7XG4gICAgICB9XG4gICAgICB0aGlzLmRlcGVuZGVuY3lVcmxzW25hbWVdID0gZGVzYy51cmw7XG4gICAgICAvLyBUdXJuIHRoZSByZWxhdGl2ZSBVUkwgb2YgdGhlIGRlcGVuZGVuY3kncyBtYW5pZmVzdCBpbnRvIGFuIGFic29sdXRlXG4gICAgICAvLyBVUkwsIGxvYWQgaXQsIGFuZCBzZW5kIGEgbWVzc2FnZSB0byB0aGUgbW9kdWxlIGluZm9ybWluZyBpdCBvZiB0aGVcbiAgICAgIC8vIGRlcGVuZGVuY3kncyBBUEkuICBPbmNlIHRoZSBtb2R1bGUgaGFzIHJlY2VpdmVkIGFsbCBvZiB0aGVzZSB1cGRhdGVzLFxuICAgICAgLy8gaXQgd2lsbCBlbWl0IGEgJ3N0YXJ0JyBtZXNzYWdlLlxuICAgICAgdGhpcy5yZXNvdXJjZS5nZXQodGhpcy5tYW5pZmVzdElkLCBkZXNjLnVybClcbiAgICAgICAgICAudGhlbih0aGlzLnBvbGljeS5sb2FkTWFuaWZlc3QuYmluZCh0aGlzLnBvbGljeSkpXG4gICAgICAgICAgLnRoZW4odGhpcy51cGRhdGVFbnYuYmluZCh0aGlzLCBuYW1lKSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuICAvLyBOb3RlIHRoYXQgbWVzc2FnZXMgY2FuIGJlIHN5bmNocm9ub3VzLCBzbyBzb21lIHBvcnRzIG1heSBhbHJlYWR5IGJlIGJvdW5kLlxuICBmb3IgKGkgPSAwOyBpIDwgY2hhbm5lbHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0aGlzLmV4dGVybmFsUG9ydE1hcFtjaGFubmVsc1tpXV0gPSB0aGlzLmV4dGVybmFsUG9ydE1hcFtjaGFubmVsc1tpXV0gfHwgZmFsc2U7XG4gICAgdGhpcy5pbnRlcm5hbFBvcnRNYXBbY2hhbm5lbHNbaV1dID0gZmFsc2U7XG4gIH1cbn07XG5cbi8qKlxuICogVXBkYXRlIHRoZSBtb2R1bGUgZW52aXJvbm1lbnQgd2l0aCBpbmZvcm1hdGlvbiBhYm91dCBhIGRlcGVuZGVudCBtYW5pZmVzdC5cbiAqIEBtZXRob2QgdXBkYXRlRW52XG4gKiBAcGFyYW0ge1N0cmluZ30gZGVwIFRoZSBkZXBlbmRlbmN5XG4gKiBAcGFyYW0ge09iamVjdH0gbWFuaWZlc3QgVGhlIG1hbmlmZXN0IG9mIHRoZSBkZXBlbmRlbmN5XG4gKi9cbk1vZHVsZS5wcm90b3R5cGUudXBkYXRlRW52ID0gZnVuY3Rpb24gKGRlcCwgbWFuaWZlc3QpIHtcbiAgaWYgKCFtYW5pZmVzdCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoIXRoaXMubW9kSW50ZXJuYWwpIHtcbiAgICB0aGlzLm9uY2UoJ21vZEludGVybmFsJywgdGhpcy51cGRhdGVFbnYuYmluZCh0aGlzLCBkZXAsIG1hbmlmZXN0KSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIG1ldGFkYXRhO1xuXG4gIC8vIERlY2lkZSBpZi93aGF0IG90aGVyIHByb3BlcnRpZXMgc2hvdWxkIGJlIGV4cG9ydGVkLlxuICAvLyBLZWVwIGluIHN5bmMgd2l0aCBNb2R1bGVJbnRlcm5hbC51cGRhdGVFbnZcbiAgbWV0YWRhdGEgPSB7XG4gICAgbmFtZTogbWFuaWZlc3QubmFtZSxcbiAgICBpY29uOiBtYW5pZmVzdC5pY29uLFxuICAgIGRlc2NyaXB0aW9uOiBtYW5pZmVzdC5kZXNjcmlwdGlvbixcbiAgICBhcGk6IG1hbmlmZXN0LmFwaVxuICB9O1xuXG4gIHRoaXMucG9ydC5vbk1lc3NhZ2UodGhpcy5tb2RJbnRlcm5hbCwge1xuICAgIHR5cGU6ICdtYW5pZmVzdCcsXG4gICAgbmFtZTogZGVwLFxuICAgIG1hbmlmZXN0OiBtZXRhZGF0YVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTW9kdWxlO1xuIiwiLypqc2xpbnQgaW5kZW50OjIsIG5vZGU6dHJ1ZSxzbG9wcHk6dHJ1ZSAqL1xudmFyIFByb21pc2VDb21wYXQgPSByZXF1aXJlKCdlczYtcHJvbWlzZScpLlByb21pc2U7XG5cbnZhciBBcGlJbnRlcmZhY2UgPSByZXF1aXJlKCcuL3Byb3h5L2FwaUludGVyZmFjZScpO1xudmFyIFByb3ZpZGVyID0gcmVxdWlyZSgnLi9wcm92aWRlcicpO1xudmFyIFByb3h5QmluZGVyID0gcmVxdWlyZSgnLi9wcm94eWJpbmRlcicpO1xudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuLyoqXG4gKiBUaGUgaW50ZXJuYWwgbG9naWMgZm9yIG1vZHVsZSBzZXR1cCwgd2hpY2ggbWFrZXMgc3VyZSB0aGUgcHVibGljXG4gKiBmYWNpbmcgZXhwb3J0cyBoYXZlIGFwcHJvcHJpYXRlIHByb3BlcnRpZXMsIGFuZCBsb2FkIHVzZXIgc2NyaXB0cy5cbiAqIEBjbGFzcyBNb2R1bGVJbnRlcm5hbFxuICogQGV4dGVuZHMgUG9ydFxuICogQHBhcmFtIHtQb3J0fSBtYW5hZ2VyIFRoZSBtYW5hZ2VyIGluIHRoaXMgbW9kdWxlIHRvIHVzZSBmb3Igcm91dGluZyBzZXR1cC5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG52YXIgTW9kdWxlSW50ZXJuYWwgPSBmdW5jdGlvbiAobWFuYWdlcikge1xuICB0aGlzLmNvbmZpZyA9IHt9O1xuICB0aGlzLm1hbmFnZXIgPSBtYW5hZ2VyO1xuICB0aGlzLmRlYnVnID0gbWFuYWdlci5kZWJ1ZztcbiAgdGhpcy5iaW5kZXIgPSBuZXcgUHJveHlCaW5kZXIodGhpcy5tYW5hZ2VyKTtcbiAgdGhpcy5hcGkgPSB0aGlzLm1hbmFnZXIuYXBpO1xuICB0aGlzLm1hbmlmZXN0cyA9IHt9O1xuICB0aGlzLnByb3ZpZGVycyA9IHt9O1xuXG4gIHRoaXMuaWQgPSAnTW9kdWxlSW50ZXJuYWwnO1xuICB0aGlzLnBlbmRpbmdQb3J0cyA9IDA7XG4gIHRoaXMucmVxdWVzdHMgPSB7fTtcbiAgdGhpcy51bmJvdW5kUG9ydHMgPSB7fTtcblxuICB1dGlsLmhhbmRsZUV2ZW50cyh0aGlzKTtcbn07XG5cbi8qKlxuICogTWVzc2FnZSBoYW5kbGVyIGZvciB0aGlzIHBvcnQuXG4gKiBUaGlzIHBvcnQgb25seSBoYW5kbGVzIHR3byBtZXNzYWdlczpcbiAqIFRoZSBmaXJzdCBpcyBpdHMgc2V0dXAgZnJvbSB0aGUgbWFuYWdlciwgd2hpY2ggaXQgdXNlcyBmb3IgY29uZmlndXJhdGlvbi5cbiAqIFRoZSBzZWNvbmQgaXMgZnJvbSB0aGUgbW9kdWxlIGNvbnRyb2xsZXIgKGZkb20ucG9ydC5Nb2R1bGUpLCB3aGljaCBwcm92aWRlc1xuICogdGhlIG1hbmlmZXN0IGluZm8gZm9yIHRoZSBtb2R1bGUuXG4gKiBAbWV0aG9kIG9uTWVzc2FnZVxuICogQHBhcmFtIHtTdHJpbmd9IGZsb3cgVGhlIGRldGluYXRpb24gb2YgdGhlIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAqL1xuTW9kdWxlSW50ZXJuYWwucHJvdG90eXBlLm9uTWVzc2FnZSA9IGZ1bmN0aW9uIChmbG93LCBtZXNzYWdlKSB7XG4gIGlmIChmbG93ID09PSAnY29udHJvbCcpIHtcbiAgICBpZiAoIXRoaXMuY29udHJvbENoYW5uZWwgJiYgbWVzc2FnZS5jaGFubmVsKSB7XG4gICAgICB0aGlzLmNvbnRyb2xDaGFubmVsID0gbWVzc2FnZS5jaGFubmVsO1xuICAgICAgdXRpbC5taXhpbih0aGlzLmNvbmZpZywgbWVzc2FnZS5jb25maWcpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChmbG93ID09PSAnZGVmYXVsdCcgJiYgIXRoaXMuYXBwSWQpIHtcbiAgICAvLyBSZWNvdmVyIHRoZSBJRCBvZiB0aGlzIG1vZHVsZTpcbiAgICB0aGlzLnBvcnQgPSB0aGlzLm1hbmFnZXIuaHViLmdldERlc3RpbmF0aW9uKG1lc3NhZ2UuY2hhbm5lbCk7XG4gICAgdGhpcy5leHRlcm5hbENoYW5uZWwgPSBtZXNzYWdlLmNoYW5uZWw7XG4gICAgdGhpcy5hcHBJZCA9IG1lc3NhZ2UuYXBwSWQ7XG4gICAgdGhpcy5saW5lYWdlID0gbWVzc2FnZS5saW5lYWdlO1xuXG4gICAgdmFyIG9iamVjdHMgPSB0aGlzLm1hcFByb3hpZXMobWVzc2FnZS5tYW5pZmVzdCk7XG5cbiAgICB0aGlzLmdlbmVyYXRlRW52KG1lc3NhZ2UubWFuaWZlc3QsIG9iamVjdHMpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMubG9hZExpbmtzKG9iamVjdHMpO1xuICAgIH0uYmluZCh0aGlzKSkudGhlbih0aGlzLmxvYWRTY3JpcHRzLmJpbmQodGhpcywgbWVzc2FnZS5pZCxcbiAgICAgICAgbWVzc2FnZS5tYW5pZmVzdC5hcHAuc2NyaXB0KSkudGhlbihudWxsLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICB0aGlzLmRlYnVnLmVycm9yKCdDb3VsZCBub3Qgc2V0IHVwIG1vZHVsZSAnICsgdGhpcy5hcHBJZCArICc6ICcsIGVycik7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfSBlbHNlIGlmIChmbG93ID09PSAnZGVmYXVsdCcgJiYgbWVzc2FnZS50eXBlID09PSAncmVzb2x2ZS5yZXNwb25zZScgJiZcbiAgICAgICAgICAgICB0aGlzLnJlcXVlc3RzW21lc3NhZ2UuaWRdKSB7XG4gICAgdGhpcy5yZXF1ZXN0c1ttZXNzYWdlLmlkXShtZXNzYWdlLmRhdGEpO1xuICAgIGRlbGV0ZSB0aGlzLnJlcXVlc3RzW21lc3NhZ2UuaWRdO1xuICB9IGVsc2UgaWYgKGZsb3cgPT09ICdkZWZhdWx0JyAmJiBtZXNzYWdlLnR5cGUgPT09ICdyZXF1aXJlLmZhaWx1cmUnICYmXG4gICAgICAgICAgICAgdGhpcy51bmJvdW5kUG9ydHNbbWVzc2FnZS5pZF0pIHtcbiAgICB0aGlzLnVuYm91bmRQb3J0c1ttZXNzYWdlLmlkXS5jYWxsYmFjayh1bmRlZmluZWQsIG1lc3NhZ2UuZXJyb3IpO1xuICAgIGRlbGV0ZSB0aGlzLnVuYm91bmRQb3J0c1ttZXNzYWdlLmlkXTtcbiAgfSBlbHNlIGlmIChmbG93ID09PSAnZGVmYXVsdCcgJiYgbWVzc2FnZS50eXBlID09PSAnbWFuaWZlc3QnKSB7XG4gICAgdGhpcy5lbWl0KCdtYW5pZmVzdCcsIG1lc3NhZ2UpO1xuICAgIHRoaXMudXBkYXRlTWFuaWZlc3QobWVzc2FnZS5uYW1lLCBtZXNzYWdlLm1hbmlmZXN0KTtcbiAgfSBlbHNlIGlmIChmbG93ID09PSAnZGVmYXVsdCcgJiYgbWVzc2FnZS50eXBlID09PSAnQ29ubmVjdGlvbicpIHtcbiAgICAvLyBNdWx0aXBsZSBjb25uZWN0aW9ucyBjYW4gYmUgbWFkZSB0byB0aGUgZGVmYXVsdCBwcm92aWRlci5cbiAgICBpZiAobWVzc2FnZS5hcGkgJiYgdGhpcy5wcm92aWRlcnNbbWVzc2FnZS5hcGldKSB7XG4gICAgICB0aGlzLm1hbmFnZXIuY3JlYXRlTGluayh0aGlzLnByb3ZpZGVyc1ttZXNzYWdlLmFwaV0sIG1lc3NhZ2UuY2hhbm5lbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3J0LCBtZXNzYWdlLmNoYW5uZWwpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5kZWZhdWx0UG9ydCAmJlxuICAgICAgICAgICAgICAgKG1lc3NhZ2UuYXBpID09PSB0aGlzLmRlZmF1bHRQb3J0LmFwaSB8fCAhbWVzc2FnZS5hcGkpKSB7XG4gICAgICB0aGlzLm1hbmFnZXIuY3JlYXRlTGluayh0aGlzLmRlZmF1bHRQb3J0LCBtZXNzYWdlLmNoYW5uZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcnQsIG1lc3NhZ2UuY2hhbm5lbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25jZSgnc3RhcnQnLCB0aGlzLm9uTWVzc2FnZS5iaW5kKHRoaXMsIGZsb3csIG1lc3NhZ2UpKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogR2V0IGEgdGV4dHVhbCBkZXNjcmlwdGlvbiBvZiB0aGlzIFBvcnQuXG4gKiBAbWV0aG9kIHRvU3RyaW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9IGEgZGVzY3JpcHRpb24gb2YgdGhpcyBQb3J0LlxuICovXG5Nb2R1bGVJbnRlcm5hbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBcIltFbnZpcm9ubWVudCBIZWxwZXJdXCI7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlIGFuIGV4dGVybmFseSB2aXNpc2JsZSBuYW1lc3BhY2VcbiAqIEBtZXRob2QgZ2VuZXJhdGVFbnZcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYW5pZmVzdCBUaGUgbWFuaWZlc3Qgb2YgdGhlIG1vZHVsZS5cbiAqIEBwYXJhbSB7T2JqZWN0W119IGl0ZW1zIE90aGVyIGludGVyZmFjZXMgdG8gbG9hZC5cbiAqIEByZXR1cm5zIHtQcm9taXNlfSBBIHByb21pc2Ugd2hlbiB0aGUgZXh0ZXJuYWwgbmFtZXNwYWNlIGlzIHZpc2libGUuXG4gKiBAcHJpdmF0ZVxuICovXG5Nb2R1bGVJbnRlcm5hbC5wcm90b3R5cGUuZ2VuZXJhdGVFbnYgPSBmdW5jdGlvbiAobWFuaWZlc3QsIGl0ZW1zKSB7XG4gIHJldHVybiB0aGlzLmJpbmRlci5iaW5kRGVmYXVsdCh0aGlzLnBvcnQsIHRoaXMuYXBpLCBtYW5pZmVzdCwgdHJ1ZSkudGhlbihcbiAgICBmdW5jdGlvbiAoYmluZGluZykge1xuICAgICAgdmFyIGkgPSAwO1xuICAgICAgYmluZGluZy5wb3J0LmFwaSA9IGJpbmRpbmcuZXh0ZXJuYWwuYXBpO1xuICAgICAgdGhpcy5kZWZhdWx0UG9ydCA9IGJpbmRpbmcucG9ydDtcbiAgICAgIGlmIChiaW5kaW5nLmV4dGVybmFsLmFwaSkge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBpZiAoaXRlbXNbaV0ubmFtZSA9PT0gYmluZGluZy5leHRlcm5hbC5hcGkgJiYgaXRlbXNbaV0uZGVmLnByb3ZpZGVzKSB7XG4gICAgICAgICAgICBpdGVtcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuY29uZmlnLmdsb2JhbC5mcmVlZG9tID0gYmluZGluZy5leHRlcm5hbDtcbiAgICB9LmJpbmQodGhpcylcbiAgKTtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgYW4gdW51c2VkIGNoYW5uZWwgSUQgZm9yIGNhbGxiYWNrLCBhbmQgb25jZSBpbmZvcm1hdGlvblxuICogYWJvdXQgdGhlIGNoYW5uZWwgaXMga25vd24sIGNhbGwgdGhlIGhhbmRsZXIgd2l0aCB0aGF0IGluZm9ybWF0aW9uLlxuICogQG1ldGhvZCByZWdpc3RlcklkXG4gKiBAcGFyYW0ge1N0cmluZ30gYXBpIFRoZSBwcmVmZXJyZWQgQVBJIHRvIHVzZSBmb3IgdGhlIG5ldyBjaGFubmVsLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgRnVuY3Rpb24gdG8gY2FsbCBvbmNlIGNoYW5uZWwgcmVhZHlcbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBhbGxvY2F0ZWQgY2hhbm5lbCBuYW1lLlxuICovXG5Nb2R1bGVJbnRlcm5hbC5wcm90b3R5cGUucmVnaXN0ZXJJZCA9IGZ1bmN0aW9uIChhcGksIGNhbGxiYWNrKSB7XG4gIHZhciBpZCA9IHV0aWwuZ2V0SWQoKTtcbiAgdGhpcy51bmJvdW5kUG9ydHNbaWRdID0ge1xuICAgIG5hbWU6IGFwaSxcbiAgICBjYWxsYmFjazogY2FsbGJhY2tcbiAgfTtcbiAgcmV0dXJuIGlkO1xufTtcblxuLyoqXG4gKiBBdHRhY2ggYSBwcm94eSB0byB0aGUgZXh0ZXJuYWxseSB2aXNpYmxlIG5hbWVzcGFjZS5cbiAqIEBtZXRob2QgYXR0YWNoXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgcHJveHkuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHByb3ZpZGVzIElmIHRoaXMgcHJveHkgaXMgYSBwcm92aWRlci5cbiAqIEBwYXJhbSB7UHJveHlJbnRlcmZhY2V9IHByb3h5IFRoZSBwcm94eSB0byBhdHRhY2guXG4gKiBAcGFyYW0ge1N0cmluZ30gYXBpIFRoZSBBUEkgdGhlIHByb3h5IGltcGxlbWVudHMuXG4gKiBAcHJpdmF0ZS5cbiAqL1xuTW9kdWxlSW50ZXJuYWwucHJvdG90eXBlLmF0dGFjaCA9IGZ1bmN0aW9uIChuYW1lLCBwcm92aWRlcywgcHJveHkpIHtcbiAgdmFyIGV4cCA9IHRoaXMuY29uZmlnLmdsb2JhbC5mcmVlZG9tO1xuXG4gIGlmIChwcm92aWRlcykge1xuICAgIHRoaXMucHJvdmlkZXJzW25hbWVdID0gcHJveHkucG9ydDtcbiAgfVxuXG4gIGlmICghZXhwW25hbWVdKSB7XG4gICAgZXhwW25hbWVdID0gcHJveHkuZXh0ZXJuYWw7XG4gICAgaWYgKHRoaXMubWFuaWZlc3RzW25hbWVdKSB7XG4gICAgICBleHBbbmFtZV0ubWFuaWZlc3QgPSB0aGlzLm1hbmlmZXN0c1tuYW1lXTtcbiAgICB9XG4gIH1cblxuICB0aGlzLnBlbmRpbmdQb3J0cyAtPSAxO1xuICBpZiAodGhpcy5wZW5kaW5nUG9ydHMgPT09IDApIHtcbiAgICB0aGlzLmVtaXQoJ3N0YXJ0Jyk7XG4gIH1cblxuICByZXR1cm4gZXhwW25hbWVdO1xufTtcblxuLyoqXG4gKiBSZXF1ZXN0IGEgc2V0IG9mIHByb3h5IGludGVyZmFjZXMsIGFuZCBiaW5kIHRoZW0gdG8gdGhlIGV4dGVybmFsXG4gKiBuYW1lc3BhY2UuXG4gKiBAbWV0aG9kIGxvYWRMaW5rc1xuICogQHBhcmFtIHtPYmplY3RbXX0gaXRlbXMgRGVzY3JpcHRvcnMgb2YgdGhlIHByb3h5IHBvcnRzIHRvIGxvYWQuXG4gKiBAcHJpdmF0ZVxuICogQHJldHVybnMge1Byb21pc2V9IFByb21pc2UgZm9yIHdoZW4gYWxsIGxpbmtzIGFyZSBsb2FkZWQuXG4gKi9cbi8vVE9ETyh3aWxsc2NvdHQpOiBwcm9taXNlIHNob3VsZCBiZSBjaGFpbmVkLCByYXRoZXIgdGhhbiBnb2luZyB0aHJvdWdoIGV2ZW50cy5cbk1vZHVsZUludGVybmFsLnByb3RvdHlwZS5sb2FkTGlua3MgPSBmdW5jdGlvbiAoaXRlbXMpIHtcbiAgdmFyIGksIHByb3h5LCBwcm92aWRlciwgY29yZSxcbiAgICBtYW5pZmVzdFByZWRpY2F0ZSA9IGZ1bmN0aW9uIChuYW1lLCBmbG93LCBtc2cpIHtcbiAgICAgIHJldHVybiBmbG93ID09PSAnbWFuaWZlc3QnICYmIG1zZy5uYW1lID09PSBuYW1lO1xuICAgIH0sXG4gICAgb25NYW5pZmVzdCA9IGZ1bmN0aW9uIChpdGVtLCBtc2cpIHtcbiAgICAgIHZhciBkZWZpbml0aW9uID0ge1xuICAgICAgICBuYW1lOiBpdGVtLmFwaVxuICAgICAgfTtcbiAgICAgIGlmICghbXNnLm1hbmlmZXN0LmFwaSB8fCAhbXNnLm1hbmlmZXN0LmFwaVtpdGVtLmFwaV0pIHtcbiAgICAgICAgZGVmaW5pdGlvbi5kZWZpbml0aW9uID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlZmluaXRpb24uZGVmaW5pdGlvbiA9IG1zZy5tYW5pZmVzdC5hcGlbaXRlbS5hcGldO1xuICAgICAgfVxuICAgICAgdGhpcy5iaW5kZXIuZ2V0RXh0ZXJuYWwodGhpcy5wb3J0LCBpdGVtLm5hbWUsIGRlZmluaXRpb24pLnRoZW4oXG4gICAgICAgIHRoaXMuYXR0YWNoLmJpbmQodGhpcywgaXRlbS5uYW1lLCBmYWxzZSlcbiAgICAgICk7XG4gICAgfS5iaW5kKHRoaXMpLFxuICAgIHByb21pc2UgPSBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB0aGlzLm9uY2UoJ3N0YXJ0JywgcmVzb2x2ZSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcblxuICBmb3IgKGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoaXRlbXNbaV0uYXBpICYmICFpdGVtc1tpXS5kZWYpIHtcbiAgICAgIGlmICh0aGlzLm1hbmlmZXN0c1tpdGVtc1tpXS5uYW1lXSkge1xuICAgICAgICBvbk1hbmlmZXN0KGl0ZW1zW2ldLCB7XG4gICAgICAgICAgbWFuaWZlc3Q6IHRoaXMubWFuaWZlc3RzW2l0ZW1zW2ldLm5hbWVdXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vbmNlKG1hbmlmZXN0UHJlZGljYXRlLmJpbmQoe30sIGl0ZW1zW2ldLm5hbWUpLFxuICAgICAgICAgICAgICAgICAgb25NYW5pZmVzdC5iaW5kKHRoaXMsIGl0ZW1zW2ldKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYmluZGVyLmdldEV4dGVybmFsKHRoaXMucG9ydCwgaXRlbXNbaV0ubmFtZSwgaXRlbXNbaV0uZGVmKS50aGVuKFxuICAgICAgICB0aGlzLmF0dGFjaC5iaW5kKHRoaXMsIGl0ZW1zW2ldLm5hbWUsIGl0ZW1zW2ldLmRlZiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zW2ldLmRlZi5wcm92aWRlcylcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMucGVuZGluZ1BvcnRzICs9IDE7XG4gIH1cblxuICAvLyBBbGxvdyByZXNvbHV0aW9uIG9mIGZpbGVzIGJ5IHBhcmVudC5cbiAgdGhpcy5tYW5hZ2VyLnJlc291cmNlLmFkZFJlc29sdmVyKGZ1bmN0aW9uIChtYW5pZmVzdCwgdXJsLCByZXNvbHZlKSB7XG4gICAgdmFyIGlkID0gdXRpbC5nZXRJZCgpO1xuICAgIHRoaXMucmVxdWVzdHNbaWRdID0gcmVzb2x2ZTtcbiAgICB0aGlzLmVtaXQodGhpcy5leHRlcm5hbENoYW5uZWwsIHtcbiAgICAgIHR5cGU6ICdyZXNvbHZlJyxcbiAgICAgIGlkOiBpZCxcbiAgICAgIGRhdGE6IHVybFxuICAgIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9LmJpbmQodGhpcykpO1xuXG4gIC8vIEF0dGFjaCBDb3JlLlxuICB0aGlzLnBlbmRpbmdQb3J0cyArPSAxO1xuXG4gIGNvcmUgPSB0aGlzLmFwaS5nZXQoJ2NvcmUnKS5kZWZpbml0aW9uO1xuICBwcm92aWRlciA9IG5ldyBQcm92aWRlcihjb3JlLCB0aGlzLmRlYnVnKTtcbiAgdGhpcy5tYW5hZ2VyLmdldENvcmUoZnVuY3Rpb24gKENvcmVQcm92KSB7XG4gICAgbmV3IENvcmVQcm92KHRoaXMubWFuYWdlcikuc2V0SWQodGhpcy5saW5lYWdlLCB0aGlzKTtcbiAgICBwcm92aWRlci5nZXRJbnRlcmZhY2UoKS5wcm92aWRlQXN5bmNocm9ub3VzKENvcmVQcm92KTtcbiAgfS5iaW5kKHRoaXMpKTtcblxuICB0aGlzLmVtaXQodGhpcy5jb250cm9sQ2hhbm5lbCwge1xuICAgIHR5cGU6ICdMaW5rIHRvIGNvcmUnLFxuICAgIHJlcXVlc3Q6ICdsaW5rJyxcbiAgICBuYW1lOiAnY29yZScsXG4gICAgdG86IHByb3ZpZGVyXG4gIH0pO1xuXG4gIHRoaXMuYmluZGVyLmdldEV4dGVybmFsKHByb3ZpZGVyLCAnZGVmYXVsdCcsIHtcbiAgICBuYW1lOiAnY29yZScsXG4gICAgZGVmaW5pdGlvbjogY29yZVxuICB9KS50aGVuKGZ1bmN0aW9uIChjb3JlKSB7XG4gICAgY29yZS5leHRlcm5hbC5nZXRMb2dnZXJTeW5jID0gdGhpcy5kZWJ1Zy5nZXRMb2dnaW5nU2hpbShcbiAgICAgICAgY29yZS5leHRlcm5hbCgpLmdldExvZ2dlcik7XG4gICAgdGhpcy5hdHRhY2goJ2NvcmUnLCBmYWxzZSwgY29yZSk7XG4gIH0uYmluZCh0aGlzKSk7XG5cblxuICBpZiAodGhpcy5wZW5kaW5nUG9ydHMgPT09IDApIHtcbiAgICB0aGlzLmVtaXQoJ3N0YXJ0Jyk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbi8qKlxuICogVXBkYXRlIHRoZSBleHBvcnRlZCBtYW5pZmVzdCBvZiBhIGRlcGVuZGVuY3kuXG4gKiBTZXRzIGl0IGludGVybmFsbHkgaWYgbm90IHlldCBleHBvcnRlZCwgb3IgYXR0YWNoZXMgdGhlIHByb3BlcnR5IGlmIGl0XG4gKiBpcyBsb2FkZWQgYWZ0ZXIgdGhlIG1vZHVsZSBoYXMgc3RhcnRlZCAod2UgZG9uJ3QgZGVsYXkgc3RhcnQgdG8gcmV0cmVpdmVcbiAqIHRoZSBtYW5pZmVzdCBvZiB0aGUgZGVwZW5kZW5jeS4pXG4gKiBAbWV0aG9kIHVwZGF0ZU1hbmlmZXN0XG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgRGVwZW5kZW5jeVxuICogQHBhcmFtIHtPYmplY3R9IG1hbmlmZXN0IFRoZSBtYW5pZmVzdCBvZiB0aGUgZGVwZW5kZW5jeVxuICovXG5Nb2R1bGVJbnRlcm5hbC5wcm90b3R5cGUudXBkYXRlTWFuaWZlc3QgPSBmdW5jdGlvbiAobmFtZSwgbWFuaWZlc3QpIHtcbiAgdmFyIGV4cCA9IHRoaXMuY29uZmlnLmdsb2JhbC5mcmVlZG9tO1xuXG4gIGlmIChleHAgJiYgZXhwW25hbWVdKSB7XG4gICAgZXhwW25hbWVdLm1hbmlmZXN0ID0gbWFuaWZlc3Q7XG4gIC8vIEhhbmRsZSByZXF1aXJlKCkgZGVwZW5kZW5jeSByZXNvbHV0aW9uLlxuICB9IGVsc2UgaWYgKHRoaXMudW5ib3VuZFBvcnRzW25hbWVdKSB7XG4gICAgdGhpcy5iaW5kZXIuZ2V0RXh0ZXJuYWwodGhpcy5wb3J0LCBuYW1lLFxuICAgICAgICB0aGlzLmJpbmRlci5nZXRBUEkobWFuaWZlc3QsIHRoaXMuYXBpLCB0aGlzLnVuYm91bmRQb3J0c1tuYW1lXS5hcGkpKVxuICAgICAgLnRoZW4oXG4gICAgICAgIHRoaXMuYXR0YWNoLmJpbmQodGhpcywgbmFtZSwgZmFsc2UpXG4gICAgICApLnRoZW4oZnVuY3Rpb24ocHJveHkpIHtcbiAgICAgICAgdGhpcy51bmJvdW5kUG9ydHNbbmFtZV0uY2FsbGJhY2socHJveHkpO1xuICAgICAgICBkZWxldGUgdGhpcy51bmJvdW5kUG9ydHNbbmFtZV07XG4gICAgICB9LmJpbmQodGhpcykpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMubWFuaWZlc3RzW25hbWVdID0gbWFuaWZlc3Q7XG4gIH1cbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoaWNoIHByb3h5IHBvcnRzIHNob3VsZCBiZSBleHBvc2VkIGJ5IHRoaXMgbW9kdWxlLlxuICogQG1ldGhvZCBtYXBQcm94aWVzXG4gKiBAcGFyYW0ge09iamVjdH0gbWFuaWZlc3QgdGhlIG1vZHVsZSBKU09OIG1hbmlmZXN0LlxuICogQHJldHVybiB7T2JqZWN0W119IHByb3h5IGRlc2NyaXB0b3JzIGRlZmluZWQgaW4gdGhlIG1hbmlmZXN0LlxuICovXG5Nb2R1bGVJbnRlcm5hbC5wcm90b3R5cGUubWFwUHJveGllcyA9IGZ1bmN0aW9uIChtYW5pZmVzdCkge1xuICB2YXIgcHJveGllcyA9IFtdLCBzZWVuID0gWydjb3JlJ10sIGksIG9iajtcblxuICBpZiAobWFuaWZlc3QucGVybWlzc2lvbnMpIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbWFuaWZlc3QucGVybWlzc2lvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIG9iaiA9IHtcbiAgICAgICAgbmFtZTogbWFuaWZlc3QucGVybWlzc2lvbnNbaV0sXG4gICAgICAgIGRlZjogdW5kZWZpbmVkXG4gICAgICB9O1xuICAgICAgb2JqLmRlZiA9IHRoaXMuYXBpLmdldChvYmoubmFtZSk7XG4gICAgICBpZiAoc2Vlbi5pbmRleE9mKG9iai5uYW1lKSA8IDAgJiYgb2JqLmRlZikge1xuICAgICAgICBwcm94aWVzLnB1c2gob2JqKTtcbiAgICAgICAgc2Vlbi5wdXNoKG9iai5uYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAobWFuaWZlc3QuZGVwZW5kZW5jaWVzKSB7XG4gICAgdXRpbC5lYWNoUHJvcChtYW5pZmVzdC5kZXBlbmRlbmNpZXMsIGZ1bmN0aW9uIChkZXNjLCBuYW1lKSB7XG4gICAgICBvYmogPSB7XG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIGFwaTogZGVzYy5hcGlcbiAgICAgIH07XG4gICAgICBpZiAoc2Vlbi5pbmRleE9mKG5hbWUpIDwgMCkge1xuICAgICAgICBpZiAoZGVzYy5hcGkpIHtcbiAgICAgICAgICBvYmouZGVmID0gdGhpcy5hcGkuZ2V0KGRlc2MuYXBpKTtcbiAgICAgICAgfVxuICAgICAgICBwcm94aWVzLnB1c2gob2JqKTtcbiAgICAgICAgc2Vlbi5wdXNoKG5hbWUpO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBpZiAobWFuaWZlc3QucHJvdmlkZXMpIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbWFuaWZlc3QucHJvdmlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIG9iaiA9IHtcbiAgICAgICAgbmFtZTogbWFuaWZlc3QucHJvdmlkZXNbaV0sXG4gICAgICAgIGRlZjogdW5kZWZpbmVkXG4gICAgICB9O1xuICAgICAgb2JqLmRlZiA9IHRoaXMuYXBpLmdldChvYmoubmFtZSk7XG4gICAgICBpZiAob2JqLmRlZikge1xuICAgICAgICBvYmouZGVmLnByb3ZpZGVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAobWFuaWZlc3QuYXBpICYmIG1hbmlmZXN0LmFwaVtvYmoubmFtZV0pIHtcbiAgICAgICAgb2JqLmRlZiA9IHtcbiAgICAgICAgICBuYW1lOiBvYmoubmFtZSxcbiAgICAgICAgICBkZWZpbml0aW9uOiBtYW5pZmVzdC5hcGlbb2JqLm5hbWVdLFxuICAgICAgICAgIHByb3ZpZGVzOiB0cnVlXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRlYnVnLndhcm4oJ01vZHVsZSB3aWxsIG5vdCBwcm92aWRlIFwiJyArIG9iai5uYW1lICtcbiAgICAgICAgICAnXCIsIHNpbmNlIG5vIGRlY2xhcmF0aW9uIGNhbiBiZSBmb3VuZC4nKTtcbiAgICAgICAgLypqc2xpbnQgY29udGludWU6dHJ1ZSovXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgLypqc2xpbnQgY29udGludWU6ZmFsc2UqL1xuICAgICAgaWYgKHNlZW4uaW5kZXhPZihvYmoubmFtZSkgPCAwKSB7XG4gICAgICAgIHByb3hpZXMucHVzaChvYmopO1xuICAgICAgICBzZWVuLnB1c2gob2JqLm5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm94aWVzO1xufTtcblxuLyoqXG4gKiBMb2FkIGV4dGVybmFsIHNjcmlwdHMgaW50byB0aGlzIG5hbWVzcGFjZS5cbiAqIEBtZXRob2QgbG9hZFNjcmlwdHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBmcm9tIFRoZSBVUkwgb2YgdGhpcyBtb2R1bGVzJ3MgbWFuaWZlc3QuXG4gKiBAcGFyYW0ge1N0cmluZ1tdfSBzY3JpcHRzIFRoZSBVUkxzIG9mIHRoZSBzY3JpcHRzIHRvIGxvYWQuXG4gKi9cbk1vZHVsZUludGVybmFsLnByb3RvdHlwZS5sb2FkU2NyaXB0cyA9IGZ1bmN0aW9uIChmcm9tLCBzY3JpcHRzKSB7XG4gIHZhciBpbXBvcnRlciA9IGZ1bmN0aW9uIChzY3JpcHQsIHJlc29sdmUsIHJlamVjdCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmNvbmZpZy5nbG9iYWwuaW1wb3J0U2NyaXB0cyhzY3JpcHQpO1xuICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZWplY3QoZSk7XG4gICAgfVxuICB9LmJpbmQodGhpcyksXG4gICAgc2NyaXB0c19jb3VudCxcbiAgICBsb2FkO1xuICBpZiAodHlwZW9mIHNjcmlwdHMgPT09ICdzdHJpbmcnKSB7XG4gICAgc2NyaXB0c19jb3VudCA9IDE7XG4gIH0gZWxzZSB7XG4gICAgc2NyaXB0c19jb3VudCA9IHNjcmlwdHMubGVuZ3RoO1xuICB9XG5cbiAgbG9hZCA9IGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgaWYgKG5leHQgPT09IHNjcmlwdHNfY291bnQpIHtcbiAgICAgIHRoaXMuZW1pdCh0aGlzLmV4dGVybmFsQ2hhbm5lbCwge1xuICAgICAgICB0eXBlOiBcInJlYWR5XCJcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBzY3JpcHQ7XG4gICAgaWYgKHR5cGVvZiBzY3JpcHRzID09PSAnc3RyaW5nJykge1xuICAgICAgc2NyaXB0ID0gc2NyaXB0cztcbiAgICB9IGVsc2Uge1xuICAgICAgc2NyaXB0ID0gc2NyaXB0c1tuZXh0XTtcbiAgICB9XG5cbiAgICB0aGlzLm1hbmFnZXIucmVzb3VyY2UuZ2V0KGZyb20sIHNjcmlwdCkudGhlbihmdW5jdGlvbiAodXJsKSB7XG4gICAgICB0aGlzLnRyeUxvYWQoaW1wb3J0ZXIsIHVybCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxvYWQobmV4dCArIDEpO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9LmJpbmQodGhpcyk7XG5cblxuXG4gIGlmICghdGhpcy5jb25maWcuZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICBpbXBvcnRlciA9IGZ1bmN0aW9uICh1cmwsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHNjcmlwdCA9IHRoaXMuY29uZmlnLmdsb2JhbC5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIHNjcmlwdC5zcmMgPSB1cmw7XG4gICAgICBzY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHJlc29sdmUsIHRydWUpO1xuICAgICAgc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgcmVqZWN0LCB0cnVlKTtcbiAgICAgIHRoaXMuY29uZmlnLmdsb2JhbC5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgbG9hZCgwKTtcbn07XG5cbi8qKlxuICogQXR0ZW1wdCB0byBsb2FkIHJlc29sdmVkIHNjcmlwdHMgaW50byB0aGUgbmFtZXNwYWNlLlxuICogQG1ldGhvZCB0cnlMb2FkXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gaW1wb3J0ZXIgVGhlIGFjdHVhbCBpbXBvcnQgZnVuY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nW119IHVybHMgVGhlIHJlc292ZWQgVVJMcyB0byBsb2FkLlxuICogQHJldHVybnMge1Byb21pc2V9IGNvbXBsZXRpb24gb2YgbG9hZFxuICovXG5Nb2R1bGVJbnRlcm5hbC5wcm90b3R5cGUudHJ5TG9hZCA9IGZ1bmN0aW9uIChpbXBvcnRlciwgdXJsKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNvbXBhdChpbXBvcnRlci5iaW5kKHt9LCB1cmwpKS50aGVuKGZ1bmN0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gdmFsO1xuICB9LCBmdW5jdGlvbiAoZSkge1xuICAgIHRoaXMuZGVidWcud2FybihlLnN0YWNrKTtcbiAgICB0aGlzLmRlYnVnLmVycm9yKFwiRXJyb3IgbG9hZGluZyBcIiArIHVybCwgZSk7XG4gICAgdGhpcy5kZWJ1Zy5lcnJvcihcIklmIHRoZSBzdGFjayB0cmFjZSBpcyBub3QgdXNlZnVsLCBzZWUgaHR0cHM6Ly9cIiArXG4gICAgICAgIFwiZ2l0aHViLmNvbS9mcmVlZG9tanMvZnJlZWRvbS93aWtpL0RlYnVnZ2luZ1wiKTtcbiAgICAvLyBUaGlzIGV2ZW50IGlzIGNhdWdodCBpbiBNb2R1bGUsIHdoaWNoIHdpbGwgdGhlbiByZXNwb25kIHRvIGFueSBtZXNzYWdlc1xuICAgIC8vIGZvciB0aGUgcHJvdmlkZXIgd2l0aCBzaG9ydC1jaXJjdWl0IGVycm9ycy5cbiAgICB0aGlzLmVtaXQodGhpcy5leHRlcm5hbENoYW5uZWwsIHtcbiAgICAgIHR5cGU6ICdlcnJvcidcbiAgICB9KTtcbiAgICB0aHJvdyBlO1xuICB9LmJpbmQodGhpcykpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBNb2R1bGVJbnRlcm5hbDtcbiIsIi8qZ2xvYmFscyBYTUxIdHRwUmVxdWVzdCAqL1xuLypqc2xpbnQgaW5kZW50OjIsd2hpdGU6dHJ1ZSxub2RlOnRydWUsc2xvcHB5OnRydWUgKi9cbnZhciBQcm9taXNlQ29tcGF0ID0gcmVxdWlyZSgnZXM2LXByb21pc2UnKS5Qcm9taXNlO1xudmFyIE1vZHVsZSA9IHJlcXVpcmUoJy4vbW9kdWxlJyk7XG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG4vKipcbiAqIFRoZSBQb2xpY3kgcmVnaXN0cnkgZm9yIGZyZWVkb20uanMuICBVc2VkIHRvIGxvb2sgdXAgbW9kdWxlcyBhbmQgcHJvdmlkZVxuICogbWlncmF0aW9uIGFuZCBjb2FsbGVzaW5nIG9mIGV4ZWN1dGlvbi5cbiAqIEBDbGFzcyBQb2xpY3lcbiAqIEBwYXJhbSB7TWFuYWdlcn0gbWFuYWdlciBUaGUgbWFuYWdlciBvZiB0aGUgYWN0aXZlIHJ1bnRpbWUuXG4gKiBAcGFyYW0ge1Jlc291cmNlfSByZXNvdXJjZSBUaGUgcmVzb3VyY2UgbG9hZGVyIG9mIHRoZSBhY3RpdmUgcnVudGltZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGxvY2FsIGNvbmZpZy5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG52YXIgUG9saWN5ID0gZnVuY3Rpb24obWFuYWdlciwgcmVzb3VyY2UsIGNvbmZpZykge1xuICB0aGlzLmFwaSA9IG1hbmFnZXIuYXBpO1xuICB0aGlzLmRlYnVnID0gbWFuYWdlci5kZWJ1ZztcbiAgdGhpcy5sb2NhdGlvbiA9IGNvbmZpZy5sb2NhdGlvbjtcbiAgdGhpcy5yZXNvdXJjZSA9IHJlc291cmNlO1xuXG4gIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICB0aGlzLnJ1bnRpbWVzID0gW107XG4gIHRoaXMucG9saWNpZXMgPSBbXTtcbiAgdGhpcy5wZW5kaW5nID0ge307XG4gIHV0aWwuaGFuZGxlRXZlbnRzKHRoaXMpO1xuXG4gIHRoaXMuYWRkKG1hbmFnZXIsIGNvbmZpZy5wb2xpY3kpO1xuICB0aGlzLnJ1bnRpbWVzWzBdLmxvY2FsID0gdHJ1ZTtcbn07XG5cbi8qKlxuICogVGhlIHBvbGljeSBhIHJ1bnRpbWUgaXMgZXhwZWN0ZWQgdG8gaGF2ZSB1bmxlc3MgaXQgc3BlY2lmaWVzXG4gKiBvdGhlcndpc2UuXG4gKiBUT0RPOiBjb25zaWRlciBtYWtpbmcgc3RhdGljXG4gKiBAcHJvcGVydHkgZGVmYXVsdFBvbGljeVxuICovXG5Qb2xpY3kucHJvdG90eXBlLmRlZmF1bHRQb2xpY3kgPSB7XG4gIGJhY2tncm91bmQ6IGZhbHNlLCAvLyBDYW4gdGhpcyBydW50aW1lIHJ1biAnYmFja2dyb3VuZCcgbW9kdWxlcz9cbiAgaW50ZXJhY3RpdmU6IHRydWUgLy8gSXMgdGhlcmUgYSB2aWV3IGFzc29jaWF0ZWQgd2l0aCB0aGlzIHJ1bnRpbWU/XG4gIC8vIFRPRE86IHJlbWFpbmluZyBydW50aW1lIHBvbGljeS5cbn07XG5cbi8qKlxuICogVGhlIGNvbnN0cmFpbnRzIGEgY29kZSBtb2R1bGVzIGlzIGV4cGVjdGVkIHRvIGhhdmUgdW5sZXNzIGl0IHNwZWNpZmllc1xuICogb3RoZXJ3aXNlLlxuICogVE9ETzogY29uc2lkZXIgbWFraW5nIHN0YXRpY1xuICogQHByb3BlcnR5IGRlZmF1bHRDb25zdHJhaW50c1xuICovXG5Qb2xpY3kucHJvdG90eXBlLmRlZmF1bHRDb25zdHJhaW50cyA9IHtcbiAgaXNvbGF0aW9uOiBcImFsd2F5c1wiLCAvLyB2YWx1ZXM6IGFsd2F5cywgYXBwLCBuZXZlclxuICBwbGFjZW1lbnQ6IFwibG9jYWxcIiAvLyB2YWx1ZXM6IGxvY2FsLCBzdGFibGUsIHJlZHVuZGFudFxuICAvLyBUT0RPOiByZW1haW5pbmcgY29uc3RyYWludHMsIGV4cHJlc3MgcGxhdGZvcm0tc3BlY2lmaWMgZGVwZW5kZW5jaWVzLlxufTtcblxuLyoqXG4gKiBSZXNvbHZlIGEgbW9kdWxlIGZyb20gaXRzIGNhbm9uaWNhbCBVUkwuXG4gKiBSZXBvbmRzIHdpdGggdGhlIHByb21pc2Ugb2YgYSBwb3J0IHJlcHJlc2VudGluZyB0aGUgbW9kdWxlLCBcbiAqIEBtZXRob2QgZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ1tdfSBsaW5lYWdlIFRoZSBsaW5lYWdlIG9mIHRoZSByZXF1ZXN0aW5nIG1vZHVsZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBUaGUgY2Fub25pY2FsIElEIG9mIHRoZSBtb2R1bGUgdG8gZ2V0LlxuICogQHJldHVybnMge1Byb21pc2V9IEEgcHJvbWlzZSBmb3IgdGhlIGxvY2FsIHBvcnQgdG93YXJkcyB0aGUgbW9kdWxlLlxuICovXG5Qb2xpY3kucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKGxpbmVhZ2UsIGlkKSB7XG4gIFxuICAvLyBNYWtlIHN1cmUgdGhhdCBhIG1vZHVsZSBpc24ndCBnZXR0aW5nIGxvY2F0ZWQgdHdpY2UgYXQgdGhlIHNhbWUgdGltZS5cbiAgLy8gVGhpcyBpcyByZXNvbHZlZCBieSBkZWxheWluZyBpZiBpdCB1bnRpbCB3ZSBzZWUgaXQgaW4gYSAnbW9kdWxlQWRkJyBldmVudC5cbiAgaWYgKHRoaXMucGVuZGluZ1tpZF0pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2VDb21wYXQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdGhpcy5vbmNlKCdwbGFjZWQnLCBmdW5jdGlvbihsLCBpKSB7XG4gICAgICAgIHRoaXMuZ2V0KGwsIGkpLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0uYmluZCh0aGlzLCBsaW5lYWdlLCBpZCkpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5wZW5kaW5nW2lkXSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gdGhpcy5sb2FkTWFuaWZlc3QoaWQpLnRoZW4oZnVuY3Rpb24obWFuaWZlc3QpIHtcbiAgICB2YXIgY29uc3RyYWludHMgPSB0aGlzLm92ZXJsYXkodGhpcy5kZWZhdWx0Q29uc3RyYWludHMsIG1hbmlmZXN0LmNvbnN0cmFpbnRzKSxcbiAgICAgICAgcnVudGltZSA9IHRoaXMuZmluZERlc3RpbmF0aW9uKGxpbmVhZ2UsIGlkLCBjb25zdHJhaW50cyksXG4gICAgICAgIHBvcnRJZDtcbiAgICBpZiAocnVudGltZS5sb2NhbCkge1xuICAgICAgcG9ydElkID0gdGhpcy5pc1J1bm5pbmcocnVudGltZSwgaWQsIGxpbmVhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0cmFpbnRzLmlzb2xhdGlvbiAhPT0gJ25ldmVyJyk7XG4gICAgICBpZihjb25zdHJhaW50cy5pc29sYXRpb24gIT09ICdhbHdheXMnICYmIHBvcnRJZCkge1xuICAgICAgICB0aGlzLmRlYnVnLmluZm8oJ1JldXNlZCBwb3J0ICcgKyBwb3J0SWQpO1xuICAgICAgICBkZWxldGUgdGhpcy5wZW5kaW5nW2lkXTtcbiAgICAgICAgdGhpcy5lbWl0KCdwbGFjZWQnKTtcbiAgICAgICAgcmV0dXJuIHJ1bnRpbWUubWFuYWdlci5nZXRQb3J0KHBvcnRJZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IE1vZHVsZShpZCwgbWFuaWZlc3QsIGxpbmVhZ2UsIHRoaXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUT0RPOiBDcmVhdGUgYSBwb3J0IHRvIGdvIHRvIHRoZSByZW1vdGUgcnVudGltZS5cbiAgICAgIHRoaXMuZGVidWcuZXJyb3IoJ1VuZXhwZWN0ZWQgbG9jYXRpb24gc2VsZWN0ZWQgZm9yIG1vZHVsZSBwbGFjZW1lbnQnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgdGhpcy5kZWJ1Zy5lcnJvcignUG9saWN5IEVycm9yIFJlc29sdmluZyAnICsgaWQsIGVycik7XG4gICAgdGhyb3coZXJyKTtcbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cbi8qKlxuICogRmluZCB0aGUgcnVudGltZSBkZXN0aW5hdGlvbiBmb3IgYSBtb2R1bGUgZ2l2ZW4gaXRzIGNvbnN0cmFpbnRzIGFuZCB0aGVcbiAqIG1vZHVsZSBjcmVhdGluZyBpdC5cbiAqIEBtZXRob2QgZmluZERlc3RpbmF0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ1tdfSBsaW5lYWdlIFRoZSBpZGVudGl0eSBvZiB0aGUgbW9kdWxlIGNyZWF0aW5nIHRoaXMgbW9kdWxlLlxuICogQHBhcmFtIHtTdHJpbmddIGlkIFRoZSBjYW5vbmljYWwgdXJsIG9mIHRoZSBtb2R1bGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25zdHJhaW50cyBDb25zdHJhaW50cyBmb3IgdGhlIG1vZHVsZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBlbGVtZW50IG9mIHRoaXMucnVudGltZXMgd2hlcmUgdGhlIG1vZHVsZSBzaG91bGQgcnVuLlxuICovXG5Qb2xpY3kucHJvdG90eXBlLmZpbmREZXN0aW5hdGlvbiA9IGZ1bmN0aW9uKGxpbmVhZ2UsIGlkLCBjb25zdHJhaW50cykge1xuICB2YXIgaTtcblxuICAvLyBTdGVwIDE6IGlmIGFuIGluc3RhbmNlIGFscmVhZHkgZXhpc3RzLCB0aGUgbVxuICBpZiAoY29uc3RyYWludHMuaXNvbGF0aW9uICE9PSAnYWx3YXlzJykge1xuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnBvbGljaWVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodGhpcy5pc1J1bm5pbmcodGhpcy5ydW50aW1lc1tpXSwgaWQsIGxpbmVhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29uc3RyYWludHMuaXNvbGF0aW9uICE9PSAnbmV2ZXInKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5ydW50aW1lc1tpXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBTdGVwIDI6IGlmIHRoZSBtb2R1bGUgd2FudHMgc3RhYmlsaXR5LCBpdCBtYXkgbmVlZCB0byBiZSByZW1vdGUuXG4gIGlmIChjb25zdHJhaW50cy5wbGFjZW1lbnQgPT09ICdsb2NhbCcpIHtcbiAgICByZXR1cm4gdGhpcy5ydW50aW1lc1swXTtcbiAgfSBlbHNlIGlmIChjb25zdHJhaW50cy5wbGFjZW1lbnQgPT09ICdzdGFibGUnKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMucG9saWNpZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICh0aGlzLnBvbGljaWVzW2ldLmJhY2tncm91bmQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucnVudGltZXNbaV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gU3RlcCAzOiBpZiB0aGUgbW9kdWxlIG5lZWRzIGxvbmdldml0eSAvIGludGVyYWN0aXZpdHksIGl0IG1heSB3YW50IHRvIGJlIHJlbW90ZS5cbiAgcmV0dXJuIHRoaXMucnVudGltZXNbMF07XG59O1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIGtub3duIHJ1bnRpbWUgaXMgcnVubmluZyBhbiBhcHByb3ByaWF0ZSBpbnN0YW5jZSBvZiBhIG1vZHVsZS5cbiAqIEBtZXRob2QgaXNSdW5uaW5nXG4gKiBAcGFyYW0ge09iamVjdH0gcnVudGltZSBUaGUgcnVudGltZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBUaGUgbW9kdWxlIHRvIGxvb2sgZm9yLlxuICogQHBhcmFtIHtTdHJpbmdbXX0gZnJvbSBUaGUgaWRlbnRpZmllciBvZiB0aGUgcmVxdWVzdGluZyBtb2R1bGUuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGZ1bGxNYXRjaCBJZiB0aGUgbW9kdWxlIG5lZWRzIHRvIGJlIGluIHRoZSBzYW1lIGFwcC5cbiAqIEByZXR1cm5zIHtTdHJpbmd8Qm9vbGVhbn0gVGhlIE1vZHVsZSBpZCBpZiBpdCBpcyBydW5uaW5nLCBvciBmYWxzZSBpZiBub3QuXG4gKi9cblBvbGljeS5wcm90b3R5cGUuaXNSdW5uaW5nID0gZnVuY3Rpb24ocnVudGltZSwgaWQsIGZyb20sIGZ1bGxNYXRjaCkge1xuICB2YXIgaSA9IDAsIGogPSAwLCBva2F5O1xuICBmb3IgKGkgPSAwOyBpIDwgcnVudGltZS5tb2R1bGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGZ1bGxNYXRjaCAmJiBydW50aW1lLm1vZHVsZXNbaV0ubGVuZ3RoID09PSBmcm9tLmxlbmd0aCArIDEpIHtcbiAgICAgIG9rYXkgPSB0cnVlO1xuICAgICAgZm9yIChqID0gMDsgaiA8IGZyb20ubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgaWYgKHJ1bnRpbWUubW9kdWxlc1tpXVtqICsgMV0uaW5kZXhPZihmcm9tW2pdKSAhPT0gMCkge1xuICAgICAgICAgIG9rYXkgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHJ1bnRpbWUubW9kdWxlc1tpXVswXS5pbmRleE9mKGlkKSAhPT0gMCkge1xuICAgICAgICBva2F5ID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChva2F5KSB7XG4gICAgICAgIHJldHVybiBydW50aW1lLm1vZHVsZXNbaV1bMF07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghZnVsbE1hdGNoICYmIHJ1bnRpbWUubW9kdWxlc1tpXVswXS5pbmRleE9mKGlkKSA9PT0gMCkge1xuICAgICAgcmV0dXJuIHJ1bnRpbWUubW9kdWxlc1tpXVswXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBHZXQgYSBwcm9taXNlIG9mIHRoZSBtYW5pZmVzdCBmb3IgYSBtb2R1bGUgSUQuXG4gKiBAbWV0aG9kIGxvYWRNYW5pZmVzdFxuICogQHBhcmFtIHtTdHJpbmd9IG1hbmlmZXN0IFRoZSBjYW5vbmljYWwgSUQgb2YgdGhlIG1hbmlmZXN0XG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gUHJvbWlzZSBmb3IgdGhlIGpzb24gY29udGVudHMgb2YgdGhlIG1hbmlmZXN0LlxuICovXG5Qb2xpY3kucHJvdG90eXBlLmxvYWRNYW5pZmVzdCA9IGZ1bmN0aW9uKG1hbmlmZXN0KSB7XG4gIHJldHVybiB0aGlzLnJlc291cmNlLmdldENvbnRlbnRzKG1hbmlmZXN0KS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgcmVzcCA9IHt9O1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcbiAgICB9IGNhdGNoKGVycikge1xuICAgICAgdGhpcy5kZWJ1Zy5lcnJvcihcIkZhaWxlZCB0byBsb2FkIFwiICsgbWFuaWZlc3QgKyBcIjogXCIgKyBlcnIpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gTWFuaWZlc3QgQXZhaWxhYmxlXCIpO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cbi8qKlxuICogQWRkIGEgcnVudGltZSB0byBrZWVwIHRyYWNrIG9mIGluIHRoaXMgcG9saWN5LlxuICogQG1ldGhvZCBhZGRcbiAqIEBwYXJhbSB7ZmRvbS5wb3J0fSBwb3J0IFRoZSBwb3J0IHRvIHVzZSBmb3IgbW9kdWxlIGxpZmV0aW1lIGluZm9cbiAqIEBwYXJhbSB7T2JqZWN0fSBwb2xpY3kgVGhlIHBvbGljeSBvZiB0aGUgcnVudGltZS5cbiAqL1xuUG9saWN5LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihwb3J0LCBwb2xpY3kpIHtcbiAgdmFyIHJ1bnRpbWUgPSB7XG4gICAgbWFuYWdlcjogcG9ydCxcbiAgICBtb2R1bGVzOiBbXVxuICB9O1xuICB0aGlzLnJ1bnRpbWVzLnB1c2gocnVudGltZSk7XG4gIHRoaXMucG9saWNpZXMucHVzaCh0aGlzLm92ZXJsYXkodGhpcy5kZWZhdWx0UG9saWN5LCBwb2xpY3kpKTtcblxuICBwb3J0Lm9uKCdtb2R1bGVBZGQnLCBmdW5jdGlvbihydW50aW1lLCBpbmZvKSB7XG4gICAgdmFyIGxpbmVhZ2UgPSBbXTtcbiAgICBsaW5lYWdlID0gbGluZWFnZS5jb25jYXQoaW5mby5saW5lYWdlKTtcbiAgICBsaW5lYWdlWzBdID0gaW5mby5pZDtcbiAgICBydW50aW1lLm1vZHVsZXMucHVzaChsaW5lYWdlKTtcbiAgICBpZiAodGhpcy5wZW5kaW5nW2luZm8ubGluZWFnZVswXV0pIHtcbiAgICAgIGRlbGV0ZSB0aGlzLnBlbmRpbmdbaW5mby5saW5lYWdlWzBdXTtcbiAgICAgIHRoaXMuZW1pdCgncGxhY2VkJyk7XG4gICAgfVxuICB9LmJpbmQodGhpcywgcnVudGltZSkpO1xuICBwb3J0Lm9uKCdtb2R1bGVSZW1vdmUnLCBmdW5jdGlvbihydW50aW1lLCBpbmZvKSB7XG4gICAgdmFyIGxpbmVhZ2UgPSBbXSwgaSwgbW9kRmluZ2VycHJpbnQ7XG4gICAgbGluZWFnZSA9IGxpbmVhZ2UuY29uY2F0KGluZm8ubGluZWFnZSk7XG4gICAgbGluZWFnZVswXSA9IGluZm8uaWQ7XG4gICAgbW9kRmluZ2VycHJpbnQgPSBsaW5lYWdlLnRvU3RyaW5nKCk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgcnVudGltZS5tb2R1bGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAocnVudGltZS5tb2R1bGVzW2ldLnRvU3RyaW5nKCkgPT09IG1vZEZpbmdlcnByaW50KSB7XG4gICAgICAgIHJ1bnRpbWUubW9kdWxlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5kZWJ1Zy53YXJuKCdVbmtub3duIG1vZHVsZSB0byByZW1vdmU6ICcsIGluZm8uaWQpO1xuICB9LmJpbmQodGhpcywgcnVudGltZSkpO1xufTtcblxuLyoqXG4gKiBPdmVybGF5IGEgc3BlY2lmaWMgcG9saWN5IG9yIGNvbnN0cmFpbnQgaW5zdGFuY2Ugb24gZGVmYXVsdCBzZXR0aW5ncy5cbiAqIFRPRE86IGNvbnNpZGVyIG1ha2luZyBzdGF0aWMuXG4gKiBAbWV0aG9kIG92ZXJsYXlcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gYmFzZSBUaGUgZGVmYXVsdCBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvdmVybGF5IFRoZSBzdXBlcmNlZWRpbmcgb2JqZWN0XG4gKiBAcmV0dXJucyB7T2JqZWN0fSBBIG5ldyBvYmplY3Qgd2l0aCBiYXNlIHBhcmFtZXRlcnMgd2hlbiBub3Qgc2V0IGluIG92ZXJsYXkuXG4gKi9cblBvbGljeS5wcm90b3R5cGUub3ZlcmxheSA9IGZ1bmN0aW9uKGJhc2UsIG92ZXJsYXkpIHtcbiAgdmFyIHJldCA9IHt9O1xuXG4gIHV0aWwubWl4aW4ocmV0LCBiYXNlKTtcbiAgaWYgKG92ZXJsYXkpIHtcbiAgICB1dGlsLm1peGluKHJldCwgb3ZlcmxheSwgdHJ1ZSk7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUG9saWN5O1xuIiwiLypqc2xpbnQgaW5kZW50OjIsIG5vZGU6dHJ1ZSwgc2xvcHB5OnRydWUsIGJyb3dzZXI6dHJ1ZSAqL1xudmFyIENvbnN1bWVyID0gcmVxdWlyZSgnLi9jb25zdW1lcicpO1xudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuLyoqXG4gKiBBIGZyZWVkb20gcG9ydCBmb3IgYSB1c2VyLWFjY2Vzc2FibGUgcHJvdmlkZXIuXG4gKiBAY2xhc3MgUHJvdmlkZXJcbiAqIEBpbXBsZW1lbnRzIFBvcnRcbiAqIEB1c2VzIGhhbmRsZUV2ZW50c1xuICogQHBhcmFtIHtPYmplY3R9IGRlZiBUaGUgaW50ZXJmYWNlIG9mIHRoZSBwcm92aWRlci5cbiAqIEBwYXJhbSB7RGVidWd9IGRlYnVnIFRoZSBkZWJ1Z2dlciB0byB1c2UgZm9yIGxvZ2dpbmcuXG4gKiBAY29udHJ1Y3RvclxuICovXG52YXIgUHJvdmlkZXIgPSBmdW5jdGlvbiAoZGVmLCBkZWJ1Zykge1xuICB0aGlzLmlkID0gQ29uc3VtZXIubmV4dElkKCk7XG4gIHV0aWwuaGFuZGxlRXZlbnRzKHRoaXMpO1xuICB0aGlzLmRlYnVnID0gZGVidWc7XG5cbiAgdGhpcy5kZWZpbml0aW9uID0gZGVmO1xuICB0aGlzLm1vZGUgPSBQcm92aWRlci5tb2RlLnN5bmNocm9ub3VzO1xuICB0aGlzLmNoYW5uZWxzID0ge307XG4gIHRoaXMuaWZhY2UgPSBudWxsO1xuICB0aGlzLmNsb3NlSGFuZGxlcnMgPSB7fTtcbiAgdGhpcy5wcm92aWRlckNscyA9IG51bGw7XG5cbiAgdGhpcy5pZmFjZXMgPSB7fTtcbiAgdGhpcy5lbWl0cyA9IHt9O1xufTtcblxuLyoqXG4gKiBQcm92aWRlciBtb2RlcyBvZiBvcGVyYXRpb24uXG4gKiBAcHJvcGVydHkgbW9kZVxuICogQHN0YXRpY1xuICogQHR5cGUgbnVtYmVyXG4gKi9cblByb3ZpZGVyLm1vZGUgPSB7XG4gIHN5bmNocm9ub3VzOiAwLFxuICBhc3luY2hyb25vdXM6IDEsXG4gIHByb21pc2VzOiAyXG59O1xuXG4vKipcbiAqIFJlY2VpdmUgZXh0ZXJuYWwgbWVzc2FnZXMgZm9yIHRoZSBwcm92aWRlci5cbiAqIEBtZXRob2Qgb25NZXNzYWdlXG4gKiBAcGFyYW0ge1N0cmluZ30gc291cmNlIHRoZSBzb3VyY2UgaWRlbnRpZmllciBvZiB0aGUgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlIFRoZSByZWNlaXZlZCBtZXNzYWdlLlxuICovXG5Qcm92aWRlci5wcm90b3R5cGUub25NZXNzYWdlID0gZnVuY3Rpb24gKHNvdXJjZSwgbWVzc2FnZSkge1xuICBpZiAoc291cmNlID09PSAnY29udHJvbCcgJiYgbWVzc2FnZS5yZXZlcnNlKSB7XG4gICAgdGhpcy5jaGFubmVsc1ttZXNzYWdlLm5hbWVdID0gbWVzc2FnZS5jaGFubmVsO1xuICAgIHRoaXMuZW1pdChtZXNzYWdlLmNoYW5uZWwsIHtcbiAgICAgIHR5cGU6ICdjaGFubmVsIGFubm91bmNlbWVudCcsXG4gICAgICBjaGFubmVsOiBtZXNzYWdlLnJldmVyc2VcbiAgICB9KTtcbiAgICB0aGlzLmVtaXQoJ3N0YXJ0Jyk7XG4gIH0gZWxzZSBpZiAoc291cmNlID09PSAnY29udHJvbCcgJiYgbWVzc2FnZS50eXBlID09PSAnc2V0dXAnKSB7XG4gICAgdGhpcy5jb250cm9sQ2hhbm5lbCA9IG1lc3NhZ2UuY2hhbm5lbDtcbiAgfSBlbHNlIGlmIChzb3VyY2UgPT09ICdjb250cm9sJyAmJiBtZXNzYWdlLnR5cGUgPT09ICdjbG9zZScpIHtcbiAgICBpZiAobWVzc2FnZS5jaGFubmVsID09PSB0aGlzLmNvbnRyb2xDaGFubmVsKSB7XG4gICAgICBkZWxldGUgdGhpcy5jb250cm9sQ2hhbm5lbDtcbiAgICB9XG4gICAgdGhpcy5jbG9zZSgpO1xuICB9IGVsc2Uge1xuICAgIGlmICghdGhpcy5jaGFubmVsc1tzb3VyY2VdICYmIG1lc3NhZ2UuY2hhbm5lbCkge1xuICAgICAgdGhpcy5jaGFubmVsc1tzb3VyY2VdID0gbWVzc2FnZS5jaGFubmVsO1xuICAgICAgdGhpcy5lbWl0KCdzdGFydCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuY2hhbm5lbHNbc291cmNlXSkge1xuICAgICAgdGhpcy5kZWJ1Zy53YXJuKCdNZXNzYWdlIGZyb20gdW5jb25maWd1cmVkIHNvdXJjZTogJyArIHNvdXJjZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ2Nsb3NlJyAmJiBtZXNzYWdlLnRvKSB7XG4gICAgICB0aGlzLnRlYXJkb3duKHNvdXJjZSwgbWVzc2FnZS50byk7XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLnRvICYmIHRoaXMuZW1pdHNbc291cmNlXSAmJlxuICAgICAgICAgICAgICAgdGhpcy5lbWl0c1tzb3VyY2VdW21lc3NhZ2UudG9dKSB7XG4gICAgICBtZXNzYWdlLm1lc3NhZ2UudG8gPSBtZXNzYWdlLnRvO1xuICAgICAgdGhpcy5lbWl0c1tzb3VyY2VdW21lc3NhZ2UudG9dKG1lc3NhZ2UubWVzc2FnZSk7XG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLnRvICYmIG1lc3NhZ2UubWVzc2FnZSAmJlxuICAgICAgICBtZXNzYWdlLm1lc3NhZ2UudHlwZSA9PT0gJ2NvbnN0cnVjdCcpIHtcbiAgICAgIHZhciBhcmdzID0gQ29uc3VtZXIucG9ydGFibGVUb01lc3NhZ2UoXG4gICAgICAgICAgKHRoaXMuZGVmaW5pdGlvbi5jb25zdHJ1Y3RvciAmJiB0aGlzLmRlZmluaXRpb24uY29uc3RydWN0b3IudmFsdWUpID9cbiAgICAgICAgICAgICAgdGhpcy5kZWZpbml0aW9uLmNvbnN0cnVjdG9yLnZhbHVlIDogW10sXG4gICAgICAgICAgbWVzc2FnZS5tZXNzYWdlLFxuICAgICAgICAgIHRoaXMuZGVidWdcbiAgICAgICAgKSxcbiAgICAgICAgaW5zdGFuY2U7XG4gICAgICBpZiAoIXRoaXMuaWZhY2VzW3NvdXJjZV0pIHtcbiAgICAgICAgdGhpcy5pZmFjZXNbc291cmNlXSA9IHt9O1xuICAgICAgICB0aGlzLmVtaXRzW3NvdXJjZV0gPSB7fTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaWZhY2VzW3NvdXJjZV1bbWVzc2FnZS50b10gPSB0cnVlO1xuICAgICAgaW5zdGFuY2UgPSB0aGlzLmdldFByb3ZpZGVyKHNvdXJjZSwgbWVzc2FnZS50bywgYXJncyk7XG4gICAgICAvLyBkb24ndCBzYXZlIGEgcmVmZXJlbmNlIHRvIGluc3RhbmNlIGlmIGl0IGNsb3NlZCBpdHNlbGYgYWxyZWFkeS5cbiAgICAgIGlmICh0aGlzLmlmYWNlc1tzb3VyY2VdICYmXG4gICAgICAgICAgdGhpcy5pZmFjZXNbc291cmNlXVttZXNzYWdlLnRvXSkge1xuICAgICAgICB0aGlzLmlmYWNlc1tzb3VyY2VdW21lc3NhZ2UudG9dID0gaW5zdGFuY2UuaW5zdGFuY2U7XG4gICAgICAgIHRoaXMuZW1pdHNbc291cmNlXVttZXNzYWdlLnRvXSA9IGluc3RhbmNlLm9ubXNnO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlYnVnLndhcm4odGhpcy50b1N0cmluZygpICsgJyBkcm9wcGluZyBtZXNzYWdlICcgK1xuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQ2xvc2UgLyB0ZWFyZG93biB0aGUgZmxvdyB0aGlzIHByb3ZpZGVyIHRlcm1pbmF0ZXMuXG4gKiBAbWV0aG9kIGNsb3NlXG4gKi9cblByb3ZpZGVyLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuY29udHJvbENoYW5uZWwpIHtcbiAgICB0aGlzLmVtaXQodGhpcy5jb250cm9sQ2hhbm5lbCwge1xuICAgICAgdHlwZTogJ1Byb3ZpZGVyIENsb3NpbmcnLFxuICAgICAgcmVxdWVzdDogJ2Nsb3NlJ1xuICAgIH0pO1xuICAgIGRlbGV0ZSB0aGlzLmNvbnRyb2xDaGFubmVsO1xuICB9XG4gIHRoaXMuZW1pdCgnY2xvc2UnKTtcblxuICAvLyBSZWxlYXNlIHJlZmVyZW5jZXMuXG4gIGRlbGV0ZSB0aGlzLmlmYWNlO1xuICBkZWxldGUgdGhpcy5wcm92aWRlckNscztcbiAgdGhpcy5pZmFjZXMgPSB7fTtcbiAgdGhpcy5lbWl0cyA9IHt9O1xuICB0aGlzLmVtaXRDaGFubmVsID0gbnVsbDtcbn07XG5cbi8qKlxuICogVGVhcmRvd24gYSBzaW5nbGUgaW5zdGFuY2Ugb2YgYW4gb2JqZWN0IGZ1bGZpbGxpbmcgdGhpcyBwcm92aWRlci5cbiAqIEBtZXRob2QgdGVhcmRvd25cbiAqIEBwYXJhbSB7U3RyaW5nfSBzb3VyY2UgVGhlIGNvbnN1bWVyIHNvdXJjZSBvZiB0aGUgaW5zdGFuY2UuXG4gKiBAcGFyYW0ge1N0cmluZ30gaWQgVGhlIGlkIG9mIHRoZSBpbnN0YW5jZSB0byB0ZWFyIGRvd24uXG4gKi9cblByb3ZpZGVyLnByb3RvdHlwZS50ZWFyZG93biA9IGZ1bmN0aW9uIChzb3VyY2UsIGlkKSB7XG4gIC8vIElnbm9yZSB0ZWFyZG93biBvZiBub24tZXhpc3RhbnQgaWRzLlxuICBpZiAoIXRoaXMuaWZhY2VzW3NvdXJjZV0pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBkZWxldGUgdGhpcy5pZmFjZXNbc291cmNlXVtpZF07XG4gIGRlbGV0ZSB0aGlzLmVtaXRzW3NvdXJjZV1baWRdO1xuICBpZiAodGhpcy5jbG9zZUhhbmRsZXJzW3NvdXJjZV0gJiYgdGhpcy5jbG9zZUhhbmRsZXJzW3NvdXJjZV1baWRdKSB7XG4gICAgdXRpbC5lYWNoUHJvcCh0aGlzLmNsb3NlSGFuZGxlcnNbc291cmNlXVtpZF0sIGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICBwcm9wKCk7XG4gICAgfSk7XG4gICAgZGVsZXRlIHRoaXMuY2xvc2VIYW5kbGVyc1tzb3VyY2VdW2lkXTtcbiAgfVxufTtcblxuLyoqXG4gKiBHZXQgYW4gaW50ZXJmYWNlIHRvIGV4cG9zZSBleHRlcm5hbGx5IHJlcHJlc2VudGluZyB0aGlzIHBvcnQuXG4gKiBQcm92aWRlcnMgYXJlIHJlZ2lzdGVyZWQgd2l0aCB0aGUgcG9ydCB1c2luZyBlaXRoZXJcbiAqIHByb3ZpZGVTeW5jaHJvbm91cyBvciBwcm92aWRlQXN5bmNocm9ub3VzIGRlcGVuZGluZyBvbiB0aGUgZGVzaXJlZFxuICogcmV0dXJuIGludGVyZmFjZS5cbiAqIEBtZXRob2QgZ2V0SW50ZXJmYWNlXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBleHRlcm5hbCBpbnRlcmZhY2Ugb2YgdGhpcyBQcm92aWRlci5cbiAqL1xuUHJvdmlkZXIucHJvdG90eXBlLmdldEludGVyZmFjZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuaWZhY2UpIHtcbiAgICByZXR1cm4gdGhpcy5pZmFjZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgc2FuaXR5Q2hlY2sgPSBmdW5jdGlvbiAocHJvdmlkZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgcHJvdmlkZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQcm92aWRlciBcIiArIHRoaXMudG9TdHJpbmcoKSArXG4gICAgICAgICAgICBcIiBuZWVkcyB0byBiZSBpbXBsZW1lbnRlZCBieSBhIGZ1bmN0aW9uLlwiKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaWZhY2UgPSB7XG4gICAgICBwcm92aWRlU3luY2hyb25vdXM6IGZ1bmN0aW9uIChwcm92KSB7XG4gICAgICAgIHNhbml0eUNoZWNrKHByb3YpO1xuICAgICAgICB0aGlzLnByb3ZpZGVyQ2xzID0gcHJvdjtcbiAgICAgICAgdGhpcy5tb2RlID0gUHJvdmlkZXIubW9kZS5zeW5jaHJvbm91cztcbiAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgIHByb3ZpZGVBc3luY2hyb25vdXM6IGZ1bmN0aW9uIChwcm92KSB7XG4gICAgICAgIHNhbml0eUNoZWNrKHByb3YpO1xuICAgICAgICB0aGlzLnByb3ZpZGVyQ2xzID0gcHJvdjtcbiAgICAgICAgdGhpcy5tb2RlID0gUHJvdmlkZXIubW9kZS5hc3luY2hyb25vdXM7XG4gICAgICB9LmJpbmQodGhpcyksXG4gICAgICBwcm92aWRlUHJvbWlzZXM6IGZ1bmN0aW9uIChwcm92KSB7XG4gICAgICAgIHNhbml0eUNoZWNrKHByb3YpO1xuICAgICAgICB0aGlzLnByb3ZpZGVyQ2xzID0gcHJvdjtcbiAgICAgICAgdGhpcy5tb2RlID0gUHJvdmlkZXIubW9kZS5wcm9taXNlcztcbiAgICAgIH0uYmluZCh0aGlzKVxuICAgIH07XG5cbiAgICB1dGlsLmVhY2hQcm9wKHRoaXMuZGVmaW5pdGlvbiwgZnVuY3Rpb24gKHByb3AsIG5hbWUpIHtcbiAgICAgIHN3aXRjaCAocHJvcC50eXBlKSB7XG4gICAgICBjYXNlIFwiY29uc3RhbnRcIjpcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMuaWZhY2UsIG5hbWUsIHtcbiAgICAgICAgICB2YWx1ZTogQ29uc3VtZXIucmVjdXJzaXZlRnJlZXplT2JqZWN0KHByb3AudmFsdWUpLFxuICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIHJldHVybiB0aGlzLmlmYWNlO1xuICB9XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgdG8gZ2V0IGludGVyZmFjZXMgZnJvbSB0aGlzIHByb3ZpZGVyIGZyb21cbiAqIGEgdXNlci12aXNpYmxlIHBvaW50LlxuICogQG1ldGhvZCBnZXRQcm94eUludGVyZmFjZVxuICovXG5Qcm92aWRlci5wcm90b3R5cGUuZ2V0UHJveHlJbnRlcmZhY2UgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBmdW5jID0gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gcC5nZXRJbnRlcmZhY2UoKTtcbiAgfS5iaW5kKHt9LCB0aGlzKTtcblxuICBmdW5jLmNsb3NlID0gZnVuY3Rpb24gKGlmYWNlKSB7XG4gICAgaWYgKGlmYWNlKSB7XG4gICAgICB1dGlsLmVhY2hQcm9wKHRoaXMuaWZhY2VzLCBmdW5jdGlvbiAoaWRzLCBzb3VyY2UpIHtcbiAgICAgICAgdXRpbC5lYWNoUHJvcChpZHMsIGZ1bmN0aW9uIChjYW5kaWRhdGUsIGlkKSB7XG4gICAgICAgICAgaWYgKGNhbmRpZGF0ZSA9PT0gaWZhY2UpIHtcbiAgICAgICAgICAgIHRoaXMudGVhcmRvd24oc291cmNlLCBpZCk7XG4gICAgICAgICAgICB0aGlzLmVtaXQodGhpcy5jaGFubmVsc1tzb3VyY2VdLCB7XG4gICAgICAgICAgICAgIHR5cGU6ICdjbG9zZScsXG4gICAgICAgICAgICAgIHRvOiBpZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDbG9zZSB0aGUgY2hhbm5lbC5cbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKTtcblxuICBmdW5jLm9uQ2xvc2UgPSBmdW5jdGlvbiAoaWZhY2UsIGhhbmRsZXIpIHtcbiAgICAvLyBMaXN0ZW4gdG8gdGhlIGNoYW5uZWwgZGlyZWN0bHkuXG4gICAgaWYgKHR5cGVvZiBpZmFjZSA9PT0gJ2Z1bmN0aW9uJyAmJiBoYW5kbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMub25jZSgnY2xvc2UnLCBpZmFjZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdXRpbC5lYWNoUHJvcCh0aGlzLmlmYWNlcywgZnVuY3Rpb24gKGlkcywgc291cmNlKSB7XG4gICAgICB1dGlsLmVhY2hQcm9wKGlkcywgZnVuY3Rpb24gKGNhbmRpZGF0ZSwgaWQpIHtcbiAgICAgICAgaWYgKGNhbmRpZGF0ZSA9PT0gaWZhY2UpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuY2xvc2VIYW5kbGVyc1tzb3VyY2VdKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlSGFuZGxlcnNbc291cmNlXSA9IHt9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIXRoaXMuY2xvc2VIYW5kbGVyc1tzb3VyY2VdW2lkXSkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZUhhbmRsZXJzW3NvdXJjZV1baWRdID0gW107XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuY2xvc2VIYW5kbGVyc1tzb3VyY2VdW2lkXS5wdXNoKGhhbmRsZXIpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH0uYmluZCh0aGlzKTtcblxuICByZXR1cm4gZnVuYztcbn07XG5cbi8qKlxuICogR2V0IGEgbmV3IGluc3RhbmNlIG9mIHRoZSByZWdpc3RlcmVkIHByb3ZpZGVyLlxuICogQG1ldGhvZCBnZXRQcm92aWRlclxuICogQHBhcmFtIHtTdHJpbmd9IHNvdXJjZSBUaGUgcG9ydCB0aGlzIGluc3RhbmNlIGlzIGludGVyYWN0aWduIHdpdGguXG4gKiBAcGFyYW0ge1N0cmluZ30gaWRlbnRpZmllciB0aGUgbWVzc2FnYWJsZSBhZGRyZXNzIGZvciB0aGlzIHByb3ZpZGVyLlxuICogQHBhcmFtIHtBcnJheX0gYXJncyBDb25zdHJ1Y3RvciBhcmd1bWVudHMgZm9yIHRoZSBwcm92aWRlci5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBBIGZ1bmN0aW9uIHRvIHNlbmQgbWVzc2FnZXMgdG8gdGhlIHByb3ZpZGVyLlxuICovXG5Qcm92aWRlci5wcm90b3R5cGUuZ2V0UHJvdmlkZXIgPSBmdW5jdGlvbiAoc291cmNlLCBpZGVudGlmaWVyLCBhcmdzKSB7XG4gIGlmICghdGhpcy5wcm92aWRlckNscykge1xuICAgIHRoaXMuZGVidWcuZXJyb3IoJ0Nhbm5vdCBpbnN0YW50aWF0ZSBwcm92aWRlciwgc2luY2UgaXQgaXMgbm90IHByb3ZpZGVkJyk7XG4gICAgcmV0dXJuIHtpbnN0YW5jZTogdW5kZWZpbmVkLCBvbm1zZzogdW5kZWZpbmVkfTtcbiAgfVxuXG4gIHZhciBldmVudHMgPSB7fSxcbiAgICBkaXNwYXRjaEV2ZW50LFxuICAgIEJvdW5kQ2xhc3MsXG4gICAgaW5zdGFuY2U7XG5cbiAgdXRpbC5lYWNoUHJvcCh0aGlzLmRlZmluaXRpb24sIGZ1bmN0aW9uIChwcm9wLCBuYW1lKSB7XG4gICAgaWYgKHByb3AudHlwZSA9PT0gJ2V2ZW50Jykge1xuICAgICAgZXZlbnRzW25hbWVdID0gcHJvcDtcbiAgICB9XG4gIH0pO1xuXG4gIGRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbiAoc3JjLCBldiwgaWQsIG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKGV2W25hbWVdKSB7XG4gICAgICB2YXIgc3RyZWFtcyA9IENvbnN1bWVyLm1lc3NhZ2VUb1BvcnRhYmxlKGV2W25hbWVdLnZhbHVlLCB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVidWcpO1xuICAgICAgdGhpcy5lbWl0KHRoaXMuY2hhbm5lbHNbc3JjXSwge1xuICAgICAgICB0eXBlOiAnbWVzc2FnZScsXG4gICAgICAgIHRvOiBpZCxcbiAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgdHlwZTogJ2V2ZW50JyxcbiAgICAgICAgICB0ZXh0OiBzdHJlYW1zLnRleHQsXG4gICAgICAgICAgYmluYXJ5OiBzdHJlYW1zLmJpbmFyeVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0uYmluZCh0aGlzLCBzb3VyY2UsIGV2ZW50cywgaWRlbnRpZmllcik7XG5cbiAgLy8gdGhpcyBpcyBhbGwgdG8gc2F5OiBuZXcgcHJvdmlkZXJDbHMoZGlzcGF0Y2hFdmVudCwgYXJnc1swXSwgYXJnc1sxXSwuLi4pXG4gIEJvdW5kQ2xhc3MgPSB0aGlzLnByb3ZpZGVyQ2xzLmJpbmQuYXBwbHkodGhpcy5wcm92aWRlckNscyxcbiAgICAgIFt0aGlzLnByb3ZpZGVyQ2xzLCBkaXNwYXRjaEV2ZW50XS5jb25jYXQoYXJncyB8fCBbXSkpO1xuICBpbnN0YW5jZSA9IG5ldyBCb3VuZENsYXNzKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBpbnN0YW5jZTogaW5zdGFuY2UsXG4gICAgb25tc2c6IGZ1bmN0aW9uIChwb3J0LCBzcmMsIG1zZykge1xuICAgICAgdmFyIHByb3AsIGRlYnVnLCBhcmdzLCByZXR1cm5Qcm9taXNlLCByZXQ7XG4gICAgICBpZiAobXNnLmFjdGlvbiA9PT0gJ21ldGhvZCcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzW21zZy50eXBlXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHBvcnQuZGVidWcud2FybihcIlByb3ZpZGVyIGRvZXMgbm90IGltcGxlbWVudCBcIiArIG1zZy50eXBlICsgXCIoKSFcIik7XG4gICAgICAgICAgcG9ydC5lbWl0KHBvcnQuY2hhbm5lbHNbc3JjXSwge1xuICAgICAgICAgICAgdHlwZTogJ21ldGhvZCcsXG4gICAgICAgICAgICB0bzogbXNnLnRvLFxuICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICB0bzogbXNnLnRvLFxuICAgICAgICAgICAgICB0eXBlOiAnbWV0aG9kJyxcbiAgICAgICAgICAgICAgcmVxSWQ6IG1zZy5yZXFJZCxcbiAgICAgICAgICAgICAgbmFtZTogbXNnLnR5cGUsXG4gICAgICAgICAgICAgIGVycm9yOiAnUHJvdmlkZXIgZG9lcyBub3QgaW1wbGVtZW50ICcgKyBtc2cudHlwZSArICcoKSEnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHByb3AgPSBwb3J0LmRlZmluaXRpb25bbXNnLnR5cGVdO1xuICAgICAgICBkZWJ1ZyA9IHBvcnQuZGVidWc7XG4gICAgICAgIGFyZ3MgPSBDb25zdW1lci5wb3J0YWJsZVRvTWVzc2FnZShwcm9wLnZhbHVlLCBtc2csIGRlYnVnKTtcbiAgICAgICAgaWYgKG1zZy5yZXFJZCA9PT0gbnVsbCkge1xuICAgICAgICAgIC8vIFJlY2tsZXNzIGNhbGwuICBJZ25vcmUgcmV0dXJuIHZhbHVlLlxuICAgICAgICAgIHJldCA9IGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgaWYgKHJlamVjdCkge1xuICAgICAgICAgICAgICBkZWJ1Zy5lcnJvcihyZWplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0ID0gZnVuY3Rpb24gKHNyYywgbXNnLCBwcm9wLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciBzdHJlYW1zID0gQ29uc3VtZXIubWVzc2FnZVRvUG9ydGFibGUocHJvcC5yZXQsIHJlc29sdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWJ1Zyk7XG4gICAgICAgICAgICB0aGlzLmVtaXQodGhpcy5jaGFubmVsc1tzcmNdLCB7XG4gICAgICAgICAgICAgIHR5cGU6ICdtZXRob2QnLFxuICAgICAgICAgICAgICB0bzogbXNnLnRvLFxuICAgICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgdG86IG1zZy50byxcbiAgICAgICAgICAgICAgICB0eXBlOiAnbWV0aG9kJyxcbiAgICAgICAgICAgICAgICByZXFJZDogbXNnLnJlcUlkLFxuICAgICAgICAgICAgICAgIG5hbWU6IG1zZy50eXBlLFxuICAgICAgICAgICAgICAgIHRleHQ6IHN0cmVhbXMudGV4dCxcbiAgICAgICAgICAgICAgICBiaW5hcnk6IHN0cmVhbXMuYmluYXJ5LFxuICAgICAgICAgICAgICAgIGVycm9yOiByZWplY3RcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfS5iaW5kKHBvcnQsIHNyYywgbXNnLCBwcm9wKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJncykpIHtcbiAgICAgICAgICBhcmdzID0gW2FyZ3NdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3J0Lm1vZGUgPT09IFByb3ZpZGVyLm1vZGUuc3luY2hyb25vdXMpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0KHRoaXNbbXNnLnR5cGVdLmFwcGx5KHRoaXMsIGFyZ3MpKTtcbiAgICAgICAgICB9IGNhdGNoIChlMSkge1xuICAgICAgICAgICAgcmV0KHVuZGVmaW5lZCwgZTEubWVzc2FnZSArICcgJyArIGUxLnN0YWNrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocG9ydC5tb2RlID09PSBQcm92aWRlci5tb2RlLmFzeW5jaHJvbm91cykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzW21zZy50eXBlXS5hcHBseShpbnN0YW5jZSwgYXJncy5jb25jYXQocmV0KSk7XG4gICAgICAgICAgfSBjYXRjaCAoZTIpIHtcbiAgICAgICAgICAgIHJldCh1bmRlZmluZWQsIGUyLm1lc3NhZ2UgKyAnICcgKyBlMi5zdGFjayk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHBvcnQubW9kZSA9PT0gUHJvdmlkZXIubW9kZS5wcm9taXNlcykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm5Qcm9taXNlID0gdGhpc1ttc2cudHlwZV0uYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICBpZiAocmV0dXJuUHJvbWlzZSAmJiByZXR1cm5Qcm9taXNlLnRoZW4pIHtcbiAgICAgICAgICAgICAgcmV0dXJuUHJvbWlzZS50aGVuKHJldCwgcmV0LmJpbmQoe30sIHVuZGVmaW5lZCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0KHVuZGVmaW5lZCwgJ05vIHByb21pc2UgcmV0dXJuZWQgZnJvbSAnICtcbiAgICAgICAgICAgICAgICAgIG1zZy50eXBlICsgJzogJyArIHJldHVyblByb21pc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGUzKSB7XG4gICAgICAgICAgICByZXQodW5kZWZpbmVkLCBlMy5tZXNzYWdlICsgJyAnICsgZTMuc3RhY2spO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0uYmluZChpbnN0YW5jZSwgdGhpcywgc291cmNlKVxuICB9O1xufTtcblxuLyoqXG4gKiBHZXQgYSB0ZXh0dWFsIGRlc2NyaXB0aW9uIG9mIHRoaXMgcG9ydC5cbiAqIEBtZXRob2QgdG9TdHJpbmdcbiAqIEByZXR1cm4ge1N0cmluZ30gdGhlIGRlc2NyaXB0aW9uIG9mIHRoaXMgcG9ydC5cbiAqL1xuUHJvdmlkZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5lbWl0Q2hhbm5lbCkge1xuICAgIHJldHVybiBcIltQcm92aWRlciBcIiArIHRoaXMuZW1pdENoYW5uZWwgKyBcIl1cIjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJbdW5ib3VuZCBQcm92aWRlcl1cIjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm92aWRlcjtcbiIsIi8qanNsaW50IGluZGVudDoyLCB3aGl0ZTp0cnVlLCBub2RlOnRydWUsIHNsb3BweTp0cnVlLCBicm93c2VyOnRydWUgKi9cbnZhciBQcm9taXNlQ29tcGF0ID0gcmVxdWlyZSgnZXM2LXByb21pc2UnKS5Qcm9taXNlO1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWwnKTtcbnZhciBDb25zdW1lciA9IHJlcXVpcmUoJy4uL2NvbnN1bWVyJyk7XG5cbnZhciBBcGlJbnRlcmZhY2UgPSBmdW5jdGlvbihkZWYsIG9uTXNnLCBlbWl0LCBkZWJ1Zykge1xuICB2YXIgaW5mbGlnaHQgPSB7fSxcbiAgICAgIGV2ZW50cyA9IG51bGwsXG4gICAgICBlbWl0dGVyID0gbnVsbCxcbiAgICAgIHJlcUlkID0gMCxcbiAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgdXRpbC5lYWNoUHJvcChkZWYsIGZ1bmN0aW9uKHByb3AsIG5hbWUpIHtcbiAgICBzd2l0Y2gocHJvcC50eXBlKSB7XG4gICAgY2FzZSAnbWV0aG9kJzpcbiAgICAgIHRoaXNbbmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gTm90ZTogaW5mbGlnaHQgc2hvdWxkIGJlIHJlZ2lzdGVyZWQgYmVmb3JlIG1lc3NhZ2UgaXMgcGFzc2VkXG4gICAgICAgIC8vIGluIG9yZGVyIHRvIHByZXBhcmUgZm9yIHN5bmNocm9ub3VzIGluLXdpbmRvdyBwaXBlcy5cbiAgICAgICAgdmFyIHRoaXNSZXEgPSByZXFJZCxcbiAgICAgICAgICAgIHByb21pc2UgPSBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgaW5mbGlnaHRbdGhpc1JlcV0gPSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZTpyZXNvbHZlLFxuICAgICAgICAgICAgICAgIHJlamVjdDpyZWplY3QsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHByb3AucmV0XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHN0cmVhbXMgPSBDb25zdW1lci5tZXNzYWdlVG9Qb3J0YWJsZShwcm9wLnZhbHVlLFxuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCksXG4gICAgICAgICAgICAgICAgZGVidWcpO1xuICAgICAgICByZXFJZCArPSAxO1xuICAgICAgICBlbWl0KHtcbiAgICAgICAgICBhY3Rpb246ICdtZXRob2QnLFxuICAgICAgICAgIHR5cGU6IG5hbWUsXG4gICAgICAgICAgcmVxSWQ6IHRoaXNSZXEsXG4gICAgICAgICAgdGV4dDogc3RyZWFtcy50ZXh0LFxuICAgICAgICAgIGJpbmFyeTogc3RyZWFtcy5iaW5hcnlcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfTtcbiAgICAgIHRoaXNbbmFtZV0ucmVja2xlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzdHJlYW1zID0gQ29uc3VtZXIubWVzc2FnZVRvUG9ydGFibGUocHJvcC52YWx1ZSxcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApLFxuICAgICAgICAgICAgICAgIGRlYnVnKTtcbiAgICAgICAgZW1pdCh7XG4gICAgICAgICAgYWN0aW9uOiAnbWV0aG9kJyxcbiAgICAgICAgICB0eXBlOiBuYW1lLFxuICAgICAgICAgIHJlcUlkOiBudWxsLCAgLy8gTWFya3MgdGhpcyBhcyBhIHJlY2tsZXNzIGNhbGwuXG4gICAgICAgICAgdGV4dDogc3RyZWFtcy50ZXh0LFxuICAgICAgICAgIGJpbmFyeTogc3RyZWFtcy5iaW5hcnlcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFJldHVybiB0eXBlIGlzIHZvaWQuXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZXZlbnQnOlxuICAgICAgaWYoIWV2ZW50cykge1xuICAgICAgICB1dGlsLmhhbmRsZUV2ZW50cyh0aGlzKTtcbiAgICAgICAgZW1pdHRlciA9IHRoaXMuZW1pdDtcbiAgICAgICAgZGVsZXRlIHRoaXMuZW1pdDtcbiAgICAgICAgZXZlbnRzID0ge307XG4gICAgICB9XG4gICAgICBldmVudHNbbmFtZV0gPSBwcm9wO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnY29uc3RhbnQnOlxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIG5hbWUsIHtcbiAgICAgICAgdmFsdWU6IENvbnN1bWVyLnJlY3Vyc2l2ZUZyZWV6ZU9iamVjdChwcm9wLnZhbHVlKSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcblxuICBvbk1zZyh0aGlzLCBmdW5jdGlvbih0eXBlLCBtc2cpIHtcbiAgICBpZiAodHlwZSA9PT0gJ2Nsb3NlJykge1xuICAgICAgaWYgKHRoaXMub2ZmKSB7XG4gICAgICAgIHRoaXMub2ZmKCk7XG4gICAgICB9XG4gICAgICB1dGlsLmVhY2hQcm9wKGluZmxpZ2h0LCBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIG9iai5yZWplY3QoJ2Nsb3NlZCcpO1xuICAgICAgfSk7XG4gICAgICBpbmZsaWdodCA9IHt9O1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIW1zZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT09ICdtZXRob2QnKSB7XG4gICAgICBpZiAoaW5mbGlnaHRbbXNnLnJlcUlkXSkge1xuICAgICAgICB2YXIgcmVzb2x2ZXIgPSBpbmZsaWdodFttc2cucmVxSWRdLFxuICAgICAgICAgICAgdGVtcGxhdGUgPSByZXNvbHZlci50ZW1wbGF0ZTtcbiAgICAgICAgZGVsZXRlIGluZmxpZ2h0W21zZy5yZXFJZF07XG4gICAgICAgIGlmIChtc2cuZXJyb3IpIHtcbiAgICAgICAgICByZXNvbHZlci5yZWplY3QobXNnLmVycm9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlci5yZXNvbHZlKENvbnN1bWVyLnBvcnRhYmxlVG9NZXNzYWdlKHRlbXBsYXRlLCBtc2csIGRlYnVnKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlYnVnLmVycm9yKCdJbmNvbWluZyBtZXNzYWdlIGNsYWltZWQgdG8gYmUgYW4gUlBDICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICdyZXR1cm5pbmcgZm9yIHVucmVnaXN0ZXJlZCBjYWxsJywgbXNnLnJlcUlkKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG1zZy50eXBlID09PSAnZXZlbnQnKSB7XG4gICAgICBpZiAoZXZlbnRzW21zZy5uYW1lXSkge1xuICAgICAgICBlbWl0dGVyKG1zZy5uYW1lLCBDb25zdW1lci5wb3J0YWJsZVRvTWVzc2FnZShldmVudHNbbXNnLm5hbWVdLnZhbHVlLFxuICAgICAgICAgICAgICAgIG1zZywgZGVidWcpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0uYmluZCh0aGlzKSk7XG5cbiAgYXJncyA9IENvbnN1bWVyLm1lc3NhZ2VUb1BvcnRhYmxlKFxuICAgICAgKGRlZi5jb25zdHJ1Y3RvciAmJiBkZWYuY29uc3RydWN0b3IudmFsdWUpID8gZGVmLmNvbnN0cnVjdG9yLnZhbHVlIDogW10sXG4gICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmdzLCA0KSxcbiAgICAgIGRlYnVnKTtcblxuICBlbWl0KHtcbiAgICB0eXBlOiAnY29uc3RydWN0JyxcbiAgICB0ZXh0OiBhcmdzLnRleHQsXG4gICAgYmluYXJ5OiBhcmdzLmJpbmFyeVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQXBpSW50ZXJmYWNlO1xuIiwiLypqc2xpbnQgaW5kZW50OjIsIHdoaXRlOnRydWUsIG5vZGU6dHJ1ZSwgc2xvcHB5OnRydWUsIGJyb3dzZXI6dHJ1ZSAqL1xudmFyIHV0aWwgPSByZXF1aXJlKCcuLi91dGlsJyk7XG5cbnZhciBFdmVudEludGVyZmFjZSA9IGZ1bmN0aW9uKG9uTXNnLCBlbWl0LCBkZWJ1Zykge1xuICB1dGlsLmhhbmRsZUV2ZW50cyh0aGlzKTtcbiAgXG4gIG9uTXNnKHRoaXMsIGZ1bmN0aW9uKGVtaXQsIHR5cGUsIG1zZykge1xuICAgIGlmICh0eXBlID09PSAnY2xvc2UnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVtaXQobXNnLnR5cGUsIG1zZy5tZXNzYWdlKTtcbiAgfS5iaW5kKHRoaXMsIHRoaXMuZW1pdCkpO1xuXG4gIHRoaXMuZW1pdCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUsIG1zZykge1xuICAgIGVtaXR0ZXIoe3R5cGU6IHR5cGUsIG1lc3NhZ2U6IG1zZ30sIHRydWUpO1xuICB9LmJpbmQoe30sIGVtaXQpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEludGVyZmFjZTtcbiIsIi8qanNsaW50IGluZGVudDoyLCBub2RlOnRydWUgKi9cbnZhciBQcm9taXNlQ29tcGF0ID0gcmVxdWlyZSgnZXM2LXByb21pc2UnKS5Qcm9taXNlO1xuXG52YXIgQXBpSW50ZXJmYWNlID0gcmVxdWlyZSgnLi9wcm94eS9hcGlJbnRlcmZhY2UnKTtcbnZhciBFdmVudEludGVyZmFjZSA9IHJlcXVpcmUoJy4vcHJveHkvZXZlbnRJbnRlcmZhY2UnKTtcbnZhciBDb25zdW1lciA9IHJlcXVpcmUoJy4vY29uc3VtZXInKTtcbnZhciBQcm92aWRlciA9IHJlcXVpcmUoJy4vcHJvdmlkZXInKTtcblxuLyoqXG4gKiBBIFByb3h5IEJpbmRlciBtYW5hZ2VzIHRoZSBleHRlcm5hbCBpbnRlcmZhY2UsIGFuZCBjcmVhdGVzIG9uZSBvZlxuICogdGhlIGRpZmZlcmVudCB0eXBlcyBvZiBvYmplY3RzIGV4cG9zZWQgYnkgZnJlZWRvbSBlaXRoZXIgYXMgYSBnbG9iYWxcbiAqIHdpdGhpbiBhIHdvcmtlciAvIG1vZHVsZSBjb250ZXh0LCBvciByZXR1cm5lZCBieSBhbiBleHRlcm5hbCBjYWxsIHRvXG4gKiBjcmVhdGUgYSBmcmVlZG9tIHJ1bnRpbWUuXG4gKiBAQ2xhc3MgUHJveHlCaW5kZXJcbiAqIEBwYXJhbSB7TWFuYWdlcn0gbWFuYWdlciBUaGUgbWFuYWdlciBmb3IgdGhlIGFjdGl2ZSBydW50aW1lLlxuICovXG52YXIgUHJveHlCaW5kZXIgPSBmdW5jdGlvbiAobWFuYWdlcikge1xuICAndXNlIHN0cmljdCc7XG4gIHRoaXMubWFuYWdlciA9IG1hbmFnZXI7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIHByb3h5IGZvciBhIGZyZWVkb20gcG9ydCwgYW5kIHJldHVybiBpdCBvbmNlIGxvYWRlZC5cbiAqIEBtZXRob2QgZ2V0RXh0ZXJuYWxcbiAqIEBwYXJhbSB7UG9ydH0gcG9ydCBUaGUgcG9ydCBmb3IgdGhlIHByb3h5IHRvIGNvbW11bmljYXRlIHdpdGguXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgcHJveHkuXG4gKiBAcGFyYW0ge09iamVjdH0gW2RlZmluaXRpb25dIFRoZSBkZWZpbml0aW9uIG9mIHRoZSBBUEkgdG8gZXhwb3NlLlxuICogQHBhcmFtIHtTdHJpbmd9IGRlZmluaXRpb24ubmFtZSBUaGUgbmFtZSBvZiB0aGUgQVBJLlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmluaXRpb24uZGVmaW5pdGlvbiBUaGUgZGVmaW5pdGlvbiBvZiB0aGUgQVBJLlxuICogQHBhcmFtIHtCb29sZWFufSBkZWZpbml0aW9uLnByb3ZpZGVzIFdoZXRoZXIgdGhpcyBpcyBhIGNvbnN1bWVyIG9yIHByb3ZpZGVyLlxuICogQHJldHVybnMge1Byb21pc2V9IEEgcHJvbWlzZSBmb3IgdGhlIGFjdGl2ZSBwcm94eSBpbnRlcmZhY2UuXG4gKi9cblByb3h5QmluZGVyLnByb3RvdHlwZS5nZXRFeHRlcm5hbCA9IGZ1bmN0aW9uIChwb3J0LCBuYW1lLCBkZWZpbml0aW9uKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdmFyIHByb3h5LCBhcGk7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWYgKGRlZmluaXRpb24pIHtcbiAgICAgIGFwaSA9IGRlZmluaXRpb24ubmFtZTtcbiAgICAgIGlmIChkZWZpbml0aW9uLnByb3ZpZGVzKSB7XG4gICAgICAgIHByb3h5ID0gbmV3IFByb3ZpZGVyKGRlZmluaXRpb24uZGVmaW5pdGlvbiwgdGhpcy5tYW5hZ2VyLmRlYnVnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3h5ID0gbmV3IENvbnN1bWVyKEFwaUludGVyZmFjZS5iaW5kKHt9LFxuICAgICAgICAgICAgZGVmaW5pdGlvbi5kZWZpbml0aW9uKSxcbiAgICAgICAgICAgIHRoaXMubWFuYWdlci5kZWJ1Zyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3h5ID0gbmV3IENvbnN1bWVyKEV2ZW50SW50ZXJmYWNlLCB0aGlzLm1hbmFnZXIuZGVidWcpO1xuICAgIH1cblxuICAgIHByb3h5Lm9uY2UoJ3N0YXJ0JywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGlmYWNlID0gcHJveHkuZ2V0UHJveHlJbnRlcmZhY2UoKTtcbiAgICAgIGlmIChhcGkpIHtcbiAgICAgICAgaWZhY2UuYXBpID0gYXBpO1xuICAgICAgfVxuICAgICAgcmVzb2x2ZSh7XG4gICAgICAgIHBvcnQ6IHByb3h5LFxuICAgICAgICBleHRlcm5hbDogaWZhY2VcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5tYW5hZ2VyLmNyZWF0ZUxpbmsocG9ydCwgbmFtZSwgcHJveHkpO1xuICB9LmJpbmQodGhpcykpO1xufTtcblxuLyoqXG4gKiBCaW5kIHRoZSBkZWZhdWx0IHByb3h5IGZvciBhIGZyZWVkb20gcG9ydC5cbiAqIEBtZXRob2QgYmluZERlZmF1bHRcbiAqIEBwYXJhbSB7UG9ydH0gcG9ydCBUaGUgcG9ydCBmb3IgdGhlIHByb3h5IHRvIGNvbW11bmljYXRlIHdpdGguXG4gKiBAcGFyYW0ge0FwaX0gYXBpIFRoZSBBUEkgbG9hZGVyIHdpdGggQVBJIGRlZmluaXRpb25zLlxuICogQHBhcmFtIHtPYmplY3R9IG1hbmlmZXN0IFRoZSBtYW5pZmVzdCBvZiB0aGUgbW9kdWxlIHRvIGV4cG9zZS5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaW50ZXJuYWwgV2hldGhlciB0aGUgaW50ZXJmYWNlIGlzIGZvciBpbnNpZGUgdGhlIG1vZHVsZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlfSBBIHByb21pc2UgZm9yIGEgcHJveHkgaW50ZXJmYWNlLlxuICogQHByaXZhdGVcbiAqL1xuUHJveHlCaW5kZXIucHJvdG90eXBlLmJpbmREZWZhdWx0ID0gZnVuY3Rpb24gKHBvcnQsIGFwaSwgbWFuaWZlc3QsIGludGVybmFsKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdmFyIG1ldGFkYXRhID0ge1xuICAgIG5hbWU6IG1hbmlmZXN0Lm5hbWUsXG4gICAgaWNvbjogbWFuaWZlc3QuaWNvbixcbiAgICBkZXNjcmlwdGlvbjogbWFuaWZlc3QuZGVzY3JpcHRpb25cbiAgfSwgZGVmO1xuXG4gIGlmIChtYW5pZmVzdFsnZGVmYXVsdCddKSB7XG4gICAgZGVmID0gYXBpLmdldChtYW5pZmVzdFsnZGVmYXVsdCddKTtcbiAgICBpZiAoIWRlZiAmJiBtYW5pZmVzdC5hcGkgJiYgbWFuaWZlc3QuYXBpW21hbmlmZXN0WydkZWZhdWx0J11dKSB7XG4gICAgICBkZWYgPSB7XG4gICAgICAgIG5hbWU6IG1hbmlmZXN0WydkZWZhdWx0J10sXG4gICAgICAgIGRlZmluaXRpb246IG1hbmlmZXN0LmFwaVttYW5pZmVzdFsnZGVmYXVsdCddXVxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKGludGVybmFsICYmIG1hbmlmZXN0LnByb3ZpZGVzICYmXG4gICAgICAgIG1hbmlmZXN0LnByb3ZpZGVzLmluZGV4T2YobWFuaWZlc3RbJ2RlZmF1bHQnXSkgIT09IGZhbHNlKSB7XG4gICAgICBkZWYucHJvdmlkZXMgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoaW50ZXJuYWwpIHtcbiAgICAgIGFwaS5kZWJ1Zy53YXJuKFwiZGVmYXVsdCBBUEkgbm90IHByb3ZpZGVkLCBcIiArXG4gICAgICAgICAgICAgICAgICAgICBcImFyZSB5b3UgbWlzc2luZyBhIHByb3ZpZGVzIGtleSBpbiB5b3VyIG1hbmlmZXN0P1wiKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcy5nZXRFeHRlcm5hbChwb3J0LCAnZGVmYXVsdCcsIGRlZikudGhlbihcbiAgICBmdW5jdGlvbiAobWV0YWRhdGEsIGluZm8pIHtcbiAgICAgIGluZm8uZXh0ZXJuYWwubWFuaWZlc3QgPSBtZXRhZGF0YTtcbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH0uYmluZCh0aGlzLCBtZXRhZGF0YSlcbiAgKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBkZWZpbml0aW9uIGZvciBhIHByb3h5IGdpdmVuIGEgcmVxdWVzdGVkIEFQSSBhbmQgdGhlIG1hbmlmZXN0IG9mXG4gKiB0aGUgbW9kdWxlLlxuICogQG1ldGhvZCBnZXRBUElcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYW5pZmVzdCBUaGUgbWFuaWZlc3QgZm9yIHRoZSBwcm94eS5cbiAqIEBwYXJhbSB7QXBpfSBhcGlQcm92aWRlciBUaGUgcmVnaXN0cnkgb2Yga25vd24gQVBJcy5cbiAqIEBwYXJhbSB7U3RyaW5nfSBhcGkgVGhlIFJlcXVlc3RlZCBBUEkuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBkZWZpbml0aW9uIFRoZSBkZWZpbml0aW9uIHRvIHVzZSBmb3IgY2FsbHMgdG8gZ2V0RXh0ZXJuYWwuXG4gKi9cblByb3h5QmluZGVyLnByb3RvdHlwZS5nZXRBUEkgPSBmdW5jdGlvbiAobWFuaWZlc3QsIGFwaVByb3ZpZGVyLCBhcGkpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICBpZiAobWFuaWZlc3QuYXBpICYmIG1hbmlmZXN0LmFwaVthcGldKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IGFwaSxcbiAgICAgIGRlZmluaXRpb246IG1hbmlmZXN0LmFwaVthcGldXG4gICAgfTtcbiAgfSBlbHNlIGlmIChtYW5pZmVzdFsnZGVmYXVsdCddKSB7XG4gICAgdmFyIGRlZiA9IGFwaVByb3ZpZGVyLmdldChtYW5pZmVzdFsnZGVmYXVsdCddKTtcbiAgICBpZiAoIWRlZiAmJiBtYW5pZmVzdC5hcGkgJiYgbWFuaWZlc3QuYXBpW21hbmlmZXN0WydkZWZhdWx0J11dKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBtYW5pZmVzdFsnZGVmYXVsdCddLFxuICAgICAgICBkZWZpbml0aW9uOiBtYW5pZmVzdC5hcGlbbWFuaWZlc3RbJ2RlZmF1bHQnXV1cbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBkZWY7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gUHJveHlCaW5kZXI7XG4iLCIvKmdsb2JhbHMgWE1MSHR0cFJlcXVlc3QgKi9cbi8qanNsaW50IGluZGVudDoyLG5vZGU6dHJ1ZSxzbG9wcHk6dHJ1ZSAqL1xudmFyIFByb21pc2VDb21wYXQgPSByZXF1aXJlKCdlczYtcHJvbWlzZScpLlByb21pc2U7XG5cbnZhciB1dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbi8qKlxuICogVGhlIFJlc291cmNlIHJlZ2lzdHJ5IGZvciBGcmVlRE9NLiAgVXNlZCB0byBsb29rIHVwIHJlcXVlc3RlZCBSZXNvdXJjZXMsXG4gKiBhbmQgcHJvdmlkZSBsb29rdXAgYW5kIG1pZ3JhdGlvbiBvZiByZXNvdXJjZXMuXG4gKiBAQ2xhc3MgUmVzb3VyY2VcbiAqIEBwYXJhbSB7RGVidWd9IGRlYnVnIFRoZSBsb2dnZXIgdG8gdXNlIGZvciBkZWJ1Z2dpbmcuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xudmFyIFJlc291cmNlID0gZnVuY3Rpb24gKGRlYnVnKSB7XG4gIHRoaXMuZGVidWcgPSBkZWJ1ZztcbiAgdGhpcy5maWxlcyA9IHt9O1xuICB0aGlzLnJlc29sdmVycyA9IFt0aGlzLmh0dHBSZXNvbHZlciwgdGhpcy5udWxsUmVzb2x2ZXJdO1xuICB0aGlzLmNvbnRlbnRSZXRyaWV2ZXJzID0ge1xuICAgICdodHRwJzogdGhpcy54aHJSZXRyaWV2ZXIsXG4gICAgJ2h0dHBzJzogdGhpcy54aHJSZXRyaWV2ZXIsXG4gICAgJ2Nocm9tZS1leHRlbnNpb24nOiB0aGlzLnhoclJldHJpZXZlcixcbiAgICAncmVzb3VyY2UnOiB0aGlzLnhoclJldHJpZXZlcixcbiAgICAnY2hyb21lJzogdGhpcy54aHJSZXRyaWV2ZXIsXG4gICAgJ2FwcCc6IHRoaXMueGhyUmV0cmlldmVyLFxuICAgICdnb3BoZXInOiB0aGlzLnhoclJldHJpZXZlciwgIC8vIEZvciBDb3Jkb3ZhOyBzZWUgaHR0cDovL2NyYnVnLmNvbS81MTMzNTIgLlxuICAgICdtYW5pZmVzdCc6IHRoaXMubWFuaWZlc3RSZXRyaWV2ZXJcbiAgfTtcbn07XG5cbi8qKlxuICogUmVzb2x2ZSBhIHJlc3VyY2UgVVJMIHJlcXVlc3RlZCBmcm9tIGEgbW9kdWxlLlxuICogQG1ldGhvZCBnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBtYW5pZmVzdCBUaGUgY2Fub25pY2FsIGFkZHJlc3Mgb2YgdGhlIG1vZHVsZSByZXF1ZXN0aW5nLlxuICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgcmVzb3VyY2UgdG8gZ2V0LlxuICogQHJldHVybnMge1Byb21pc2V9IEEgcHJvbWlzZSBmb3IgdGhlIHJlc291cmNlIGFkZHJlc3MuXG4gKi9cblJlc291cmNlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAobWFuaWZlc3QsIHVybCkge1xuICB2YXIga2V5ID0gSlNPTi5zdHJpbmdpZnkoW21hbmlmZXN0LCB1cmxdKTtcbiAgXG4gIHJldHVybiBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWYgKHRoaXMuZmlsZXNba2V5XSkge1xuICAgICAgcmVzb2x2ZSh0aGlzLmZpbGVzW2tleV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlc29sdmUobWFuaWZlc3QsIHVybCkudGhlbihmdW5jdGlvbiAoa2V5LCByZXNvbHZlLCBhZGRyZXNzKSB7XG4gICAgICAgIHRoaXMuZmlsZXNba2V5XSA9IGFkZHJlc3M7XG4gICAgICAgIC8vZmRvbS5kZWJ1Zy5sb2coJ1Jlc29sdmVkICcgKyBrZXkgKyAnIHRvICcgKyBhZGRyZXNzKTtcbiAgICAgICAgcmVzb2x2ZShhZGRyZXNzKTtcbiAgICAgIH0uYmluZCh0aGlzLCBrZXksIHJlc29sdmUpLCByZWplY3QpO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBjb250ZW50cyBvZiBhIHJlc291cmNlLlxuICogQG1ldGhvZCBnZXRDb250ZW50c1xuICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgcmVzb3VyY2UgdG8gcmVhZC5cbiAqIEByZXR1cm5zIHtQcm9taXNlfSBBIHByb21pc2UgZm9yIHRoZSByZXNvdXJjZSBjb250ZW50cy5cbiAqL1xuUmVzb3VyY2UucHJvdG90eXBlLmdldENvbnRlbnRzID0gZnVuY3Rpb24gKHVybCkge1xuICByZXR1cm4gbmV3IFByb21pc2VDb21wYXQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciBwcm9wO1xuICAgIGlmICghdXJsKSB7XG4gICAgICB0aGlzLmRlYnVnLndhcm4oXCJBc2tlZCB0byBnZXQgY29udGVudHMgb2YgdW5kZWZpbmVkIFVSTC5cIik7XG4gICAgICByZXR1cm4gcmVqZWN0KCk7XG4gICAgfVxuICAgIGZvciAocHJvcCBpbiB0aGlzLmNvbnRlbnRSZXRyaWV2ZXJzKSB7XG4gICAgICBpZiAodGhpcy5jb250ZW50UmV0cmlldmVycy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICBpZiAodXJsLmluZGV4T2YocHJvcCArIFwiOi8vXCIpID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29udGVudFJldHJpZXZlcnNbcHJvcF0uY2FsbCh0aGlzLCB1cmwsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXJsLmluZGV4T2YoXCI6Ly9cIikgPT09IC0xICYmIHByb3AgPT09IFwibnVsbFwiKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29udGVudFJldHJpZXZlcnNbcHJvcF0uY2FsbCh0aGlzLCB1cmwsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVqZWN0KCk7XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG4vKipcbiAqIFJldHVybiBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBmaXJzdCBvZiBhbiBhcnJheSBvZiBwcm9taXNlc1xuICogcmVzb2x2ZXMsIG9yIHJlamVjdHMgYWZ0ZXIgYWxsIHByb21pc2VzIHJlamVjdC4gQ2FuIGJlIHRob3VnaHQgb2YgYXNcbiAqIHRoZSBtaXNzaW5nICdQcm9taXNlLmFueScgLSByYWNlIGlzIG5vIGdvb2QsIHNpbmNlIGVhcmx5IHJlamVjdGlvbnNcbiAqIHByZWVtcHQgYSBzdWJzZXF1ZW50IHJlc29sdXRpb24uXG4gKiBAcHJpdmF0ZVxuICogQHN0YXRpY1xuICogQG1ldGhvZCBGaXJzdFByb21pc2VcbiAqIEBwYXJhbSB7UHJvbWlzZVtdfSBQcm9taXNlcyB0byBzZWxlY3QgZnJvbVxuICogQHJldHVybnMge1Byb21pc2V9IFByb21pc2UgcmVzb2x2aW5nIHdpdGggYSB2YWx1ZSBmcm9tIGFyZ3VtZW50cy5cbiAqL1xudmFyIGZpcnN0UHJvbWlzZSA9IGZ1bmN0aW9uKHByb21pc2VzKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNvbXBhdChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgZXJyb3JzID0gW107XG4gICAgcHJvbWlzZXMuZm9yRWFjaChmdW5jdGlvbihwcm9taXNlKSB7XG4gICAgICBwcm9taXNlLnRoZW4ocmVzb2x2ZSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKGVycik7XG4gICAgICAgIGlmIChlcnJvcnMubGVuZ3RoID09PSBwcm9taXNlcy5sZW5ndGgpIHtcbiAgICAgICAgICByZWplY3QoZXJyb3JzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBSZXNvbHZlIGEgcmVzb3VyY2UgdXNpbmcga25vd24gcmVzb2x2ZXJzLiBVbmxpa2UgZ2V0LCByZXNvbHZlIGRvZXNcbiAqIG5vdCBjYWNoZSByZXNvbHZlZCByZXNvdXJjZXMuXG4gKiBAbWV0aG9kIHJlc29sdmVcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gbWFuaWZlc3QgVGhlIG1vZHVsZSByZXF1ZXN0aW5nIHRoZSByZXNvdXJjZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIHJlc291cmNlIHRvIHJlc29sdmU7XG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gQSBwcm9taXNlIGZvciB0aGUgcmVzb3VyY2UgYWRkcmVzcy5cbiAqL1xuUmVzb3VyY2UucHJvdG90eXBlLnJlc29sdmUgPSBmdW5jdGlvbiAobWFuaWZlc3QsIHVybCkge1xuICByZXR1cm4gbmV3IFByb21pc2VDb21wYXQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciBwcm9taXNlcyA9IFtdO1xuICAgIGlmICh1cmwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHJlamVjdCgpO1xuICAgIH1cbiAgICB1dGlsLmVhY2hSZXZlcnNlKHRoaXMucmVzb2x2ZXJzLCBmdW5jdGlvbiAocmVzb2x2ZXIpIHtcbiAgICAgIHByb21pc2VzLnB1c2gobmV3IFByb21pc2VDb21wYXQocmVzb2x2ZXIuYmluZCh7fSwgbWFuaWZlc3QsIHVybCkpKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICAgIGZpcnN0UHJvbWlzZShwcm9taXNlcykudGhlbihyZXNvbHZlLCBmdW5jdGlvbigpIHtcbiAgICAgIHJlamVjdCgnTm8gcmVzb2x2ZXJzIHRvIGhhbmRsZSB1cmw6ICcgKyBKU09OLnN0cmluZ2lmeShbbWFuaWZlc3QsIHVybF0pKTtcbiAgICB9KTtcbiAgfS5iaW5kKHRoaXMpKTtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgcmVzb2x2ZXJzOiBjb2RlIHRoYXQga25vd3MgaG93IHRvIGdldCByZXNvdXJjZXNcbiAqIG5lZWRlZCBieSB0aGUgcnVudGltZS4gQSByZXNvbHZlciB3aWxsIGJlIGNhbGxlZCB3aXRoIGZvdXJcbiAqIGFyZ3VtZW50czogdGhlIGFic29sdXRlIG1hbmlmZXN0IG9mIHRoZSByZXF1ZXN0ZXIsIHRoZVxuICogcmVzb3VyY2UgYmVpbmcgcmVxdWVzdGVkLCBhbmQgYSByZXNvbHZlIC8gcmVqZWN0IHBhaXIgdG9cbiAqIGZ1bGZpbGwgYSBwcm9taXNlLlxuICogQG1ldGhvZCBhZGRSZXNvbHZlclxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZXIgVGhlIHJlc29sdmVyIHRvIGFkZC5cbiAqL1xuUmVzb3VyY2UucHJvdG90eXBlLmFkZFJlc29sdmVyID0gZnVuY3Rpb24gKHJlc29sdmVyKSB7XG4gIHRoaXMucmVzb2x2ZXJzLnB1c2gocmVzb2x2ZXIpO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciByZXRyaWV2ZXJzOiBjb2RlIHRoYXQga25vd3MgaG93IHRvIGxvYWQgcmVzb3VyY2VzXG4gKiBuZWVkZWQgYnkgdGhlIHJ1bnRpbWUuIEEgcmV0cmlldmVyIHdpbGwgYmUgY2FsbGVkIHdpdGggYSBVUkxcbiAqIHRvIHJldHJpZXZlIHdpdGggYSBwcm90b2NvbCB0aGF0IGl0IGlzIGFibGUgdG8gaGFuZGxlLlxuICogQG1ldGhvZCBhZGRSZXRyaWV2ZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm90byBUaGUgcHJvdG9jb2wgdG8gcmVnaXN0ZXIgZm9yLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmV0cmlldmVyIFRoZSByZXRyaWV2ZXIgdG8gYWRkLlxuICovXG5SZXNvdXJjZS5wcm90b3R5cGUuYWRkUmV0cmlldmVyID0gZnVuY3Rpb24gKHByb3RvLCByZXRyaWV2ZXIpIHtcbiAgaWYgKHRoaXMuY29udGVudFJldHJpZXZlcnNbcHJvdG9dKSB7XG4gICAgdGhpcy5kZWJ1Zy53YXJuKFwiVW53aWxsaW5nIHRvIG92ZXJyaWRlIGZpbGUgcmV0cmlldmFsIGZvciBcIiArIHByb3RvKTtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5jb250ZW50UmV0cmlldmVyc1twcm90b10gPSByZXRyaWV2ZXI7XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIGV4dGVybmFsIHJlc29sdmVycyBhbmQgcmV0cmVhdmVyc1xuICogQG1ldGhvZCByZWdpc3RlclxuICogQHBhcmFtIHt7XCJwcm90b1wiOlN0cmluZywgXCJyZXNvbHZlclwiOkZ1bmN0aW9uLCBcInJldHJlYXZlclwiOkZ1bmN0aW9ufVtdfVxuICogICAgIHJlc29sdmVycyBUaGUgbGlzdCBvZiByZXRyZWl2ZXJzIGFuZCByZXNvbHZlcnMuXG4gKi9cblJlc291cmNlLnByb3RvdHlwZS5yZWdpc3RlciA9IGZ1bmN0aW9uIChyZXNvbHZlcnMpIHtcbiAgaWYgKCFyZXNvbHZlcnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmVzb2x2ZXJzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICBpZiAoaXRlbS5yZXNvbHZlcikge1xuICAgICAgdGhpcy5hZGRSZXNvbHZlcihpdGVtLnJlc29sdmVyKTtcbiAgICB9IGVsc2UgaWYgKGl0ZW0ucHJvdG8gJiYgaXRlbS5yZXRyaWV2ZXIpIHtcbiAgICAgIHRoaXMuYWRkUmV0cmlldmVyKGl0ZW0ucHJvdG8sIGl0ZW0ucmV0cmlldmVyKTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKSk7XG59O1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIFVSTCBpcyBhbiBhYnNvbHV0ZSBVUkwgb2YgYSBnaXZlbiBTY2hlbWUuXG4gKiBAbWV0aG9kIGhhc1NjaGVtZVxuICogQHN0YXRpY1xuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7U3RyaW5nW119IHByb3RvY29scyBXaGl0ZWxpc3RlZCBwcm90b2NvbHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBVUkwgdGhlIFVSTCB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBJZiB0aGUgVVJMIGlzIGFuIGFic29sdXRlIGV4YW1wbGUgb2Ygb25lIG9mIHRoZSBzY2hlbWVzLlxuICovXG5SZXNvdXJjZS5oYXNTY2hlbWUgPSBmdW5jdGlvbiAocHJvdG9jb2xzLCB1cmwpIHtcbiAgdmFyIGk7XG4gIGZvciAoaSA9IDA7IGkgPCBwcm90b2NvbHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodXJsLmluZGV4T2YocHJvdG9jb2xzW2ldICsgXCI6Ly9cIikgPT09IDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIFJlbW92ZSAnLi8nIGFuZCAnLi4vJyBmcm9tIGEgVVJMXG4gKiBSZXF1aXJlZCBiZWNhdXNlIENocm9tZSBBcHBzIGZvciBNb2JpbGUgKGNjYSkgZG9lc24ndCB1bmRlcnN0YW5kXG4gKiBYSFIgcGF0aHMgd2l0aCB0aGVzZSByZWxhdGl2ZSBjb21wb25lbnRzIGluIHRoZSBVUkwuXG4gKiBAbWV0aG9kIHJlbW92ZVJlbGF0aXZlUGF0aFxuICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIG1vZGlmeVxuICogQHJldHVybnMge1N0cmluZ30gdXJsIHdpdGhvdXQgJy4vJyBhbmQgJy4uLydcbiAqKi9cblJlc291cmNlLnJlbW92ZVJlbGF0aXZlUGF0aCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgdmFyIGlkeCA9IHVybC5pbmRleE9mKFwiOi8vXCIpICsgMyxcbiAgICBzdGFjayxcbiAgICB0b1JlbW92ZSxcbiAgICByZXN1bHQ7XG4gIC8vIFJlbW92ZSBhbGwgaW5zdGFuY2VzIG9mIC8uL1xuICB1cmwgPSB1cmwucmVwbGFjZSgvXFwvXFwuXFwvL2csIFwiL1wiKTtcbiAgLy9XZWlyZCBidWcgd2hlcmUgaW4gY2NhLCBtYW5pZmVzdCBzdGFydHMgd2l0aCAnY2hyb21lOi8vLy8nXG4gIC8vVGhpcyBmb3JjZXMgdGhlcmUgdG8gb25seSBiZSAyIHNsYXNoZXNcbiAgd2hpbGUgKHVybC5jaGFyQXQoaWR4KSA9PT0gXCIvXCIpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMCwgaWR4KSArIHVybC5zbGljZShpZHggKyAxLCB1cmwubGVuZ3RoKTtcbiAgfVxuXG4gIC8vIEFkdmFuY2UgdG8gbmV4dCAvXG4gIGlkeCA9IHVybC5pbmRleE9mKFwiL1wiLCBpZHgpO1xuICAvLyBSZW1vdmluZyAuLi9cbiAgc3RhY2sgPSB1cmwuc3Vic3RyKGlkeCArIDEpLnNwbGl0KFwiL1wiKTtcbiAgd2hpbGUgKHN0YWNrLmluZGV4T2YoXCIuLlwiKSAhPT0gLTEpIHtcbiAgICB0b1JlbW92ZSA9IHN0YWNrLmluZGV4T2YoXCIuLlwiKTtcbiAgICBpZiAodG9SZW1vdmUgPT09IDApIHtcbiAgICAgIHN0YWNrLnNoaWZ0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YWNrLnNwbGljZSgodG9SZW1vdmUgLSAxKSwgMik7XG4gICAgfVxuICB9XG4gIFxuICAvL1JlYnVpbGQgc3RyaW5nXG4gIHJlc3VsdCA9IHVybC5zdWJzdHIoMCwgaWR4KTtcbiAgZm9yIChpZHggPSAwOyBpZHggPCBzdGFjay5sZW5ndGg7IGlkeCArPSAxKSB7XG4gICAgcmVzdWx0ICs9IFwiL1wiICsgc3RhY2tbaWR4XTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBSZXNvbHZlIFVSTHMgd2hpY2ggY2FuIGJlIGFjY2Vzc2VkIHVzaW5nIHN0YW5kYXJkIEhUVFAgcmVxdWVzdHMuXG4gKiBAbWV0aG9kIGh0dHBSZXNvbHZlclxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBtYW5pZmVzdCBUaGUgTWFuaWZlc3QgVVJMLlxuICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIHJlc29sdmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIFRoZSBwcm9taXNlIHRvIGNvbXBsZXRlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IFRoZSBwcm9taXNlIHRvIHJlamVjdC5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSBVUkwgY291bGQgYmUgcmVzb2x2ZWQuXG4gKi9cblJlc291cmNlLnByb3RvdHlwZS5odHRwUmVzb2x2ZXIgPSBmdW5jdGlvbiAobWFuaWZlc3QsIHVybCwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gIHZhciBwcm90b2NvbHMgPSBbXCJodHRwXCIsIFwiaHR0cHNcIiwgXCJjaHJvbWVcIiwgXCJjaHJvbWUtZXh0ZW5zaW9uXCIsIFwicmVzb3VyY2VcIixcbiAgICAgICAgICAgICAgICAgICBcImFwcFwiLCBcImdvcGhlclwiXSxcbiAgICBkaXJuYW1lLFxuICAgIHByb3RvY29sSWR4LFxuICAgIHBhdGhJZHgsXG4gICAgcGF0aCxcbiAgICBiYXNlLFxuICAgIHJlc3VsdDtcblxuICBpZiAoUmVzb3VyY2UuaGFzU2NoZW1lKHByb3RvY29scywgdXJsKSkge1xuICAgIHJlc29sdmUoUmVzb3VyY2UucmVtb3ZlUmVsYXRpdmVQYXRoKHVybCkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIFxuICBpZiAoIW1hbmlmZXN0KSB7XG4gICAgcmVqZWN0KCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChSZXNvdXJjZS5oYXNTY2hlbWUocHJvdG9jb2xzLCBtYW5pZmVzdCkgJiZcbiAgICAgIHVybC5pbmRleE9mKFwiOi8vXCIpID09PSAtMSkge1xuICAgIGRpcm5hbWUgPSBtYW5pZmVzdC5zdWJzdHIoMCwgbWFuaWZlc3QubGFzdEluZGV4T2YoXCIvXCIpKTtcbiAgICBwcm90b2NvbElkeCA9IGRpcm5hbWUuaW5kZXhPZihcIjovL1wiKTtcbiAgICBwYXRoSWR4ID0gcHJvdG9jb2xJZHggKyAzICsgZGlybmFtZS5zdWJzdHIocHJvdG9jb2xJZHggKyAzKS5pbmRleE9mKFwiL1wiKTtcbiAgICBwYXRoID0gZGlybmFtZS5zdWJzdHIocGF0aElkeCk7XG4gICAgYmFzZSA9IGRpcm5hbWUuc3Vic3RyKDAsIHBhdGhJZHgpO1xuICAgIGlmICh1cmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcbiAgICAgIHJlc29sdmUoUmVzb3VyY2UucmVtb3ZlUmVsYXRpdmVQYXRoKGJhc2UgKyB1cmwpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzb2x2ZShSZXNvdXJjZS5yZW1vdmVSZWxhdGl2ZVBhdGgoYmFzZSArIHBhdGggKyBcIi9cIiArIHVybCkpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZWplY3QoKTtcbn07XG5cbi8qKlxuICogUmVzb2x2ZSBVUkxzIHdoaWNoIGFyZSBzZWxmLWRlc2NyaWJpbmcuXG4gKiBAbWV0aG9kIG51bGxSZXNvbHZlclxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBtYW5pZmVzdCBUaGUgTWFuaWZlc3QgVVJMLlxuICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIHJlc29sdmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIFRoZSBwcm9taXNlIHRvIGNvbXBsZXRlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IFRoZSBwcm9taXNlIHRvIHJlamVjdC5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSBVUkwgY291bGQgYmUgcmVzb2x2ZWQuXG4gKi9cblJlc291cmNlLnByb3RvdHlwZS5udWxsUmVzb2x2ZXIgPSBmdW5jdGlvbiAobWFuaWZlc3QsIHVybCwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gIHZhciBwcm90b2NvbHMgPSBbXCJtYW5pZmVzdFwiXTtcbiAgaWYgKFJlc291cmNlLmhhc1NjaGVtZShwcm90b2NvbHMsIHVybCkpIHtcbiAgICByZXNvbHZlKHVybCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAodXJsLmluZGV4T2YoJ2RhdGE6JykgPT09IDApIHtcbiAgICByZXNvbHZlKHVybCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmVqZWN0KCk7XG59O1xuXG4vKipcbiAqIFJldHJpZXZlIG1hbmlmZXN0IGNvbnRlbnQgZnJvbSBhIHNlbGYtZGVzY3JpcHRpdmUgbWFuaWZlc3QgdXJsLlxuICogVGhlc2UgdXJscyBhcmUgdXNlZCB0byByZWZlcmVuY2UgYSBtYW5pZmVzdCB3aXRob3V0IHJlcXVpcmluZyBzdWJzZXF1ZW50LFxuICogcG90ZW50aWFsbHkgbm9uLUNPUlMgcmVxdWVzdHMuXG4gKiBAbWV0aG9kIG1hbmlmZXN0UmV0cmlldmVyXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IG1hbmlmZXN0IFRoZSBNYW5pZmVzdCBVUkxcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgVGhlIHByb21pc2UgdG8gY29tcGxldGUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgVGhlIHByb21pc2UgdG8gcmVqZWN0LlxuICovXG5SZXNvdXJjZS5wcm90b3R5cGUubWFuaWZlc3RSZXRyaWV2ZXIgPSBmdW5jdGlvbiAobWFuaWZlc3QsIHJlc29sdmUsIHJlamVjdCkge1xuICB2YXIgZGF0YTtcbiAgdHJ5IHtcbiAgICBkYXRhID0gbWFuaWZlc3Quc3Vic3RyKDExKTtcbiAgICBKU09OLnBhcnNlKGRhdGEpO1xuICAgIHJlc29sdmUoZGF0YSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0aGlzLmRlYnVnLndhcm4oXCJJbnZhbGlkIG1hbmlmZXN0IFVSTCByZWZlcmVuY2VkOlwiICsgbWFuaWZlc3QpO1xuICAgIHJlamVjdCgpO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHJpZXZlIHJlc291cmNlIGNvbnRlbnRzIHVzaW5nIGFuIFhIUiByZXF1ZXN0LlxuICogQG1ldGhvZCB4aHJSZXRyaWV2ZXJcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSByZXNvdXJjZSB0byBmZXRjaC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgVGhlIHByb21pc2UgdG8gY29tcGxldGUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgVGhlIHByb21pc2UgdG8gcmVqZWN0LlxuICovXG5SZXNvdXJjZS5wcm90b3R5cGUueGhyUmV0cmlldmVyID0gZnVuY3Rpb24gKHVybCwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gIHZhciByZWYgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgcmVmLmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsIGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBpZiAocmVmLnJlYWR5U3RhdGUgPT09IDQgJiYgcmVmLnJlc3BvbnNlVGV4dCkge1xuICAgICAgcmVzb2x2ZShyZWYucmVzcG9uc2VUZXh0KTtcbiAgICB9IGVsc2UgaWYgKHJlZi5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICB0aGlzLmRlYnVnLndhcm4oXCJGYWlsZWQgdG8gbG9hZCBmaWxlIFwiICsgdXJsICsgXCI6IFwiICsgcmVmLnN0YXR1cyk7XG4gICAgICByZWplY3QocmVmLnN0YXR1cyk7XG4gICAgfVxuICB9LmJpbmQodGhpcywgcmVzb2x2ZSwgcmVqZWN0KSwgZmFsc2UpO1xuICByZWYub3ZlcnJpZGVNaW1lVHlwZShcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gIHJlZi5vcGVuKFwiR0VUXCIsIHVybCwgZmFsc2UpO1xuICByZWYuc2VuZCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZXNvdXJjZTtcbiIsIi8qZ2xvYmFscyBjcnlwdG8sIFdlYktpdEJsb2JCdWlsZGVyLCBCbG9iLCBVUkwgKi9cbi8qZ2xvYmFscyB3ZWJraXRVUkwsIFVpbnQ4QXJyYXksIFVpbnQxNkFycmF5LCBBcnJheUJ1ZmZlciAqL1xuLypqc2xpbnQgaW5kZW50OjIsd2hpdGU6dHJ1ZSxicm93c2VyOnRydWUsbm9kZTp0cnVlLHNsb3BweTp0cnVlICovXG5cbi8qKlxuICogVXRpbGl0eSBtZXRob2QgdXNlZCB3aXRoaW4gdGhlIGZyZWVkb20gTGlicmFyeS5cbiAqIEBjbGFzcyB1dGlsXG4gKiBAc3RhdGljXG4gKi9cbnZhciB1dGlsID0ge307XG5cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIGl0ZXJhdGluZyBvdmVyIGFuIGFycmF5IGJhY2t3YXJkcy4gSWYgdGhlIGZ1bmNcbiAqIHJldHVybnMgYSB0cnVlIHZhbHVlLCBpdCB3aWxsIGJyZWFrIG91dCBvZiB0aGUgbG9vcC5cbiAqIEBtZXRob2QgZWFjaFJldmVyc2VcbiAqIEBzdGF0aWNcbiAqL1xudXRpbC5lYWNoUmV2ZXJzZSA9IGZ1bmN0aW9uKGFyeSwgZnVuYykge1xuICBpZiAoYXJ5KSB7XG4gICAgdmFyIGk7XG4gICAgZm9yIChpID0gYXJ5Lmxlbmd0aCAtIDE7IGkgPiAtMTsgaSAtPSAxKSB7XG4gICAgICBpZiAoYXJ5W2ldICYmIGZ1bmMoYXJ5W2ldLCBpLCBhcnkpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBAbWV0aG9kIGhhc1Byb3BcbiAqIEBzdGF0aWNcbiAqL1xudXRpbC5oYXNQcm9wID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn07XG5cbi8qKlxuICogQ3ljbGVzIG92ZXIgcHJvcGVydGllcyBpbiBhbiBvYmplY3QgYW5kIGNhbGxzIGEgZnVuY3Rpb24gZm9yIGVhY2hcbiAqIHByb3BlcnR5IHZhbHVlLiBJZiB0aGUgZnVuY3Rpb24gcmV0dXJucyBhIHRydXRoeSB2YWx1ZSwgdGhlbiB0aGVcbiAqIGl0ZXJhdGlvbiBpcyBzdG9wcGVkLlxuICogQG1ldGhvZCBlYWNoUHJvcFxuICogQHN0YXRpY1xuICovXG51dGlsLmVhY2hQcm9wID0gZnVuY3Rpb24ob2JqLCBmdW5jKSB7XG4gIHZhciBwcm9wO1xuICBmb3IgKHByb3AgaW4gb2JqKSB7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgaWYgKGZ1bmMob2JqW3Byb3BdLCBwcm9wKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogU2ltcGxlIGZ1bmN0aW9uIHRvIG1peCBpbiBwcm9wZXJ0aWVzIGZyb20gc291cmNlIGludG8gdGFyZ2V0LFxuICogYnV0IG9ubHkgaWYgdGFyZ2V0IGRvZXMgbm90IGFscmVhZHkgaGF2ZSBhIHByb3BlcnR5IG9mIHRoZSBzYW1lIG5hbWUuXG4gKiBUaGlzIGlzIG5vdCByb2J1c3QgaW4gSUUgZm9yIHRyYW5zZmVycmluZyBtZXRob2RzIHRoYXQgbWF0Y2hcbiAqIE9iamVjdC5wcm90b3R5cGUgbmFtZXMsIGJ1dCB0aGUgdXNlcyBvZiBtaXhpbiBoZXJlIHNlZW0gdW5saWtlbHkgdG9cbiAqIHRyaWdnZXIgYSBwcm9ibGVtIHJlbGF0ZWQgdG8gdGhhdC5cbiAqIEBtZXRob2QgbWl4aW5cbiAqIEBzdGF0aWNcbiAqL1xudXRpbC5taXhpbiA9IGZ1bmN0aW9uKHRhcmdldCwgc291cmNlLCBmb3JjZSkge1xuICBpZiAoc291cmNlKSB7XG4gICAgdXRpbC5lYWNoUHJvcChzb3VyY2UsIGZ1bmN0aW9uICh2YWx1ZSwgcHJvcCkge1xuICAgICAgaWYgKGZvcmNlIHx8ICF1dGlsLmhhc1Byb3AodGFyZ2V0LCBwcm9wKSkge1xuICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuLyoqXG4gKiBHZXQgYSB1bmlxdWUgSUQuXG4gKiBAbWV0aG9kIGdldElkXG4gKiBAc3RhdGljXG4gKi9cbnV0aWwuZ2V0SWQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGd1aWQgPSAnZ3VpZCcsXG4gICAgICBkb21haW4gPSAxMixcbiAgICAgIGJ1ZmZlcjtcbiAgLy8gQ2hyb21lIC8gRmlyZWZveC5cbiAgaWYgKHR5cGVvZiBjcnlwdG8gPT09ICdvYmplY3QnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgICBidWZmZXIgPSBuZXcgVWludDhBcnJheShkb21haW4pO1xuICAgIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMoYnVmZmVyKTtcbiAgICB1dGlsLmVhY2hSZXZlcnNlKGJ1ZmZlciwgZnVuY3Rpb24obikge1xuICAgICAgZ3VpZCArPSAnLScgKyBuO1xuICAgIH0pO1xuICAvLyBOb2RlXG4gIH0gZWxzZSBpZiAodHlwZW9mIGNyeXB0byA9PT0gJ29iamVjdCcgJiYgY3J5cHRvLnJhbmRvbUJ5dGVzKSB7XG4gICAgYnVmZmVyID0gY3J5cHRvLnJhbmRvbUJ5dGVzKGRvbWFpbik7XG4gICAgdXRpbC5lYWNoUmV2ZXJzZShidWZmZXIsIGZ1bmN0aW9uKG4pIHtcbiAgICAgIGd1aWQgKz0gJy0nICsgbjtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoZG9tYWluID4gMCkge1xuICAgICAgZ3VpZCArPSAnLScgKyBNYXRoLmNlaWwoMjU1ICogTWF0aC5yYW5kb20oKSk7XG4gICAgICBkb21haW4gLT0gMTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ3VpZDtcbn07XG5cbi8qKlxuICogRW5jb2RlIGEgc3RyaW5nIGludG8gYSBiaW5hcnkgYXJyYXkgYnVmZmVyLCBieSB0cmVhdGluZyBlYWNoIGNoYXJhY3RlciBhcyBhXG4gKiB1dGYxNiBlbmNvZGVkIGNoYXJhY3RlciAtIHRoZSBuYXRpdmUgamF2YXNjcmlwdCBlbmNvZGluZy5cbiAqIEBtZXRob2Qgc3RyMmFiXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gZW5jb2RlLlxuICogQHJldHVybnMge0FycmF5QnVmZmVyfSBUaGUgZW5jb2RlZCBzdHJpbmcuXG4gKi9cbnV0aWwuc3RyMmFiID0gZnVuY3Rpb24oc3RyKSB7XG4gIHZhciBsZW5ndGggPSBzdHIubGVuZ3RoLFxuICAgICAgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGxlbmd0aCAqIDIpLCAvLyAyIGJ5dGVzIGZvciBlYWNoIGNoYXJcbiAgICAgIGJ1ZmZlclZpZXcgPSBuZXcgVWludDE2QXJyYXkoYnVmZmVyKSxcbiAgICAgIGk7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIGJ1ZmZlclZpZXdbaV0gPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgfVxuXG4gIHJldHVybiBidWZmZXI7XG59O1xuXG4vKipcbiAqIENvbnZlcnQgYW4gYXJyYXkgYnVmZmVyIGNvbnRhaW5pbmcgYW4gZW5jb2RlZCBzdHJpbmcgYmFjayBpbnRvIGEgc3RyaW5nLlxuICogQG1ldGhvZCBhYjJzdHJcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHRvIHVud3JhcC5cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBkZWNvZGVkIGJ1ZmZlci5cbiAqL1xudXRpbC5hYjJzdHIgPSBmdW5jdGlvbihidWZmZXIpIHtcbiAgdmFyIHN0ciA9ICcnO1xuICB2YXIgYSA9IG5ldyBVaW50MTZBcnJheShidWZmZXIpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICBzdHIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShhW2ldKTtcbiAgfVxuICByZXR1cm4gc3RyO1xufTtcblxuLyoqXG4gKiBBZGQgJ29uJyBhbmQgJ2VtaXQnIG1ldGhvZHMgdG8gYW4gb2JqZWN0LCB3aGljaCBhY3QgYXMgYSBsaWdodCB3ZWlnaHRcbiAqIGV2ZW50IGhhbmRsaW5nIHN0cnVjdHVyZS5cbiAqIEBjbGFzcyBoYW5kbGVFdmVudHNcbiAqIEBzdGF0aWNcbiAqL1xudXRpbC5oYW5kbGVFdmVudHMgPSBmdW5jdGlvbihvYmopIHtcbiAgdmFyIGV2ZW50U3RhdGUgPSB7XG4gICAgREVCVUdfQkFDS1JFRjogb2JqLFxuICAgIG11bHRpcGxlOiB7fSxcbiAgICBtYXliZW11bHRpcGxlOiBbXSxcbiAgICBzaW5nbGU6IHt9LFxuICAgIG1heWJlc2luZ2xlOiBbXVxuICB9LCBmaWx0ZXIsIHB1c2g7XG5cbiAgLyoqXG4gICAqIEZpbHRlciBhIGxpc3QgYmFzZWQgb24gYSBwcmVkaWNhdGUuIFRoZSBsaXN0IGlzIGZpbHRlcmVkIGluIHBsYWNlLCB3aXRoXG4gICAqIHNlbGVjdGVkIGl0ZW1zIHJlbW92ZWQgYW5kIHJldHVybmVkIGJ5IHRoZSBmdW5jdGlvbi5cbiAgICogQG1ldGhvZFxuICAgKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBsaXN0IHRvIGZpbHRlclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIG1ldGhvZCB0byBydW4gb24gZWFjaCBpdGVtLlxuICAgKiBAcmV0dXJucyB7QXJyYXl9IFNlbGVjdGVkIGl0ZW1zXG4gICAqL1xuICBmaWx0ZXIgPSBmdW5jdGlvbihsaXN0LCBwcmVkaWNhdGUpIHtcbiAgICB2YXIgcmV0ID0gW10sIGk7XG5cbiAgICBpZiAoIWxpc3QgfHwgIWxpc3QubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgZm9yIChpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGkgLT0gMSkge1xuICAgICAgaWYgKHByZWRpY2F0ZShsaXN0W2ldKSkge1xuICAgICAgICByZXQucHVzaChsaXN0LnNwbGljZShpLCAxKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEVucXVldWUgYSBoYW5kbGVyIGZvciBhIHNwZWNpZmljIHR5cGUuXG4gICAqIEBtZXRob2RcbiAgICogQHBhcmFtIHtTdHJpbmd9IHRvIFRoZSBxdWV1ZSAoJ3NpbmdsZScgb3IgJ211bHRpcGxlJykgdG8gcXVldWUgb24uXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIFRoZSB0eXBlIG9mIGV2ZW50IHRvIHdhaXQgZm9yLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIFRoZSBoYW5kbGVyIHRvIGVucXVldWUuXG4gICAqL1xuICBwdXNoID0gZnVuY3Rpb24odG8sIHR5cGUsIGhhbmRsZXIpIHtcbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXNbJ21heWJlJyArIHRvXS5wdXNoKFt0eXBlLCBoYW5kbGVyXSk7XG4gICAgfSBlbHNlIGlmICh0aGlzW3RvXVt0eXBlXSkge1xuICAgICAgdGhpc1t0b11bdHlwZV0ucHVzaChoYW5kbGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpc1t0b11bdHlwZV0gPSBbaGFuZGxlcl07XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIG1ldGhvZCB0byBiZSBleGVjdXRlZCB3aGVuIGFuIGV2ZW50IG9mIGEgc3BlY2lmaWMgdHlwZSBvY2N1cnMuXG4gICAqIEBtZXRob2Qgb25cbiAgICogQHBhcmFtIHtTdHJpbmd8RnVuY3Rpb259IHR5cGUgVGhlIHR5cGUgb2YgZXZlbnQgdG8gcmVnaXN0ZXIgYWdhaW5zdC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlciBUaGUgaGFuZGxlciB0byBydW4gd2hlbiB0aGUgZXZlbnQgb2NjdXJzLlxuICAgKi9cbiAgb2JqLm9uID0gcHVzaC5iaW5kKGV2ZW50U3RhdGUsICdtdWx0aXBsZScpO1xuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIG1ldGhvZCB0byBiZSBleGVjdXRlIHRoZSBuZXh0IHRpbWUgYW4gZXZlbnQgb2NjdXJzLlxuICAgKiBAbWV0aG9kIG9uY2VcbiAgICogQHBhcmFtIHtTdHJpbmd8RnVuY3Rpb259IHR5cGUgVGhlIHR5cGUgb2YgZXZlbnQgdG8gd2FpdCBmb3IuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXIgVGhlIGhhbmRsZXIgdG8gcnVuIHRoZSBuZXh0IHRpbWUgYSBtYXRjaGluZyBldmVudFxuICAgKiAgICAgaXMgcmFpc2VkLlxuICAgKi9cbiAgb2JqLm9uY2UgPSBwdXNoLmJpbmQoZXZlbnRTdGF0ZSwgJ3NpbmdsZScpO1xuXG4gIC8qKlxuICAgKiBFbWl0IGFuIGV2ZW50IG9uIHRoaXMgb2JqZWN0LlxuICAgKiBAbWV0aG9kIGVtaXRcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgVGhlIHR5cGUgb2YgZXZlbnQgdG8gcmFpc2UuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIFRoZSBwYXlsb2FkIG9mIHRoZSBldmVudC5cbiAgICovXG4gIG9iai5lbWl0ID0gZnVuY3Rpb24odHlwZSwgZGF0YSkge1xuICAgIHZhciBpLCBxdWV1ZTtcbiAgICAvLyBOb3RlIHRoYXQgcmVnaXN0ZXJlZCBoYW5kbGVycyBtYXkgc3RvcCBldmVudHMgb24gdGhlIG9iamVjdCwgYnkgY2FsbGluZ1xuICAgIC8vIHRoaXMub2ZmKCkuIEFzIHN1Y2gsIHRoZSBwcmVzZW5jZSBvZiB0aGVzZSBrZXlzIG11c3QgYmUgY2hlY2tlZCBvbiBlYWNoXG4gICAgLy8gaXRlcmF0aW9uIG9mIHRoZSByZWxldmFudCBsb29wcy5cbiAgICBmb3IgKGkgPSAwOyB0aGlzLm11bHRpcGxlW3R5cGVdICYmXG4gICAgICAgICBpIDwgdGhpcy5tdWx0aXBsZVt0eXBlXS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHRoaXMubXVsdGlwbGVbdHlwZV1baV0oZGF0YSkgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuc2luZ2xlW3R5cGVdKSB7XG4gICAgICBxdWV1ZSA9IHRoaXMuc2luZ2xlW3R5cGVdO1xuICAgICAgdGhpcy5zaW5nbGVbdHlwZV0gPSBbXTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBxdWV1ZVtpXShkYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMubWF5YmVtdWx0aXBsZS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHRoaXMubWF5YmVtdWx0aXBsZVtpXVswXSh0eXBlLCBkYXRhKSkge1xuICAgICAgICB0aGlzLm1heWJlbXVsdGlwbGVbaV1bMV0oZGF0YSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoaSA9IHRoaXMubWF5YmVzaW5nbGUubGVuZ3RoIC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcbiAgICAgIGlmICh0aGlzLm1heWJlc2luZ2xlW2ldWzBdKHR5cGUsIGRhdGEpKSB7XG4gICAgICAgIHF1ZXVlID0gdGhpcy5tYXliZXNpbmdsZS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIHF1ZXVlWzBdWzFdKGRhdGEpO1xuICAgICAgfVxuICAgIH1cbiAgfS5iaW5kKGV2ZW50U3RhdGUpO1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgYW4gZXZlbnQgaGFuZGxlclxuICAgKiBAbWV0aG9kIG9mZlxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBUaGUgdHlwZSBvZiBldmVudCB0byByZW1vdmUuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb24/fSBoYW5kbGVyIFRoZSBoYW5kbGVyIHRvIHJlbW92ZS5cbiAgICovXG4gIG9iai5vZmYgPSBmdW5jdGlvbih0eXBlLCBoYW5kbGVyKSB7XG4gICAgaWYgKCF0eXBlKSB7XG4gICAgICBkZWxldGUgdGhpcy5ERUJVR19CQUNLUkVGO1xuICAgICAgdGhpcy5tdWx0aXBsZSA9IHt9O1xuICAgICAgdGhpcy5tYXliZW11bHRpcGxlID0gW107XG4gICAgICB0aGlzLnNpbmdsZSA9IHt9O1xuICAgICAgdGhpcy5tYXliZXNpbmdsZSA9IFtdO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZmlsdGVyKHRoaXMubWF5YmVzaW5nbGUsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW1bMF0gPT09IHR5cGUgJiYgKCFoYW5kbGVyIHx8IGl0ZW1bMV0gPT09IGhhbmRsZXIpO1xuICAgICAgfSk7XG4gICAgICBmaWx0ZXIodGhpcy5tYXliZW11bHRpcGxlLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtWzBdID09PSB0eXBlICYmICghaGFuZGxlciB8fCBpdGVtWzFdID09PSBoYW5kbGVyKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICghaGFuZGxlcikge1xuICAgICAgZGVsZXRlIHRoaXMubXVsdGlwbGVbdHlwZV07XG4gICAgICBkZWxldGUgdGhpcy5zaW5nbGVbdHlwZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbHRlcih0aGlzLm11bHRpcGxlW3R5cGVdLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtID09PSBoYW5kbGVyO1xuICAgICAgfSk7XG4gICAgICBmaWx0ZXIodGhpcy5zaW5nbGVbdHlwZV0sIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0gPT09IGhhbmRsZXI7XG4gICAgICB9KTtcbiAgICB9XG4gIH0uYmluZChldmVudFN0YXRlKTtcbn07XG5cbi8qKlxuICogV2hlbiBydW4gd2l0aG91dCBhIHdpbmRvdywgb3Igc3BlY2lmaWNhbGx5IHJlcXVlc3RlZC5cbiAqIE5vdGU6IERlY2xhcmF0aW9uIGNhbiBiZSByZWRlZmluZWQgaW4gZm9yY2VNb2R1bGVDb250ZXh0IGJlbG93LlxuICogQG1ldGhvZCBpc01vZHVsZUNvbnRleHRcbiAqIEBmb3IgdXRpbFxuICogQHN0YXRpY1xuICovXG4vKiFAcHJlc2VydmUgU3RhcnRNb2R1bGVDb250ZXh0RGVjbGFyYXRpb24qL1xudXRpbC5pc01vZHVsZUNvbnRleHQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKTtcbn07XG5cbi8qKlxuICogR2V0IGEgQmxvYiBvYmplY3Qgb2YgYSBzdHJpbmcuXG4gKiBQb2x5ZmlsbHMgaW1wbGVtZW50YXRpb25zIHdoaWNoIGRvbid0IGhhdmUgYSBjdXJyZW50IEJsb2IgY29uc3RydWN0b3IsIGxpa2VcbiAqIHBoYW50b21qcy5cbiAqIEBtZXRob2QgZ2V0QmxvYlxuICogQHN0YXRpY1xuICovXG51dGlsLmdldEJsb2IgPSBmdW5jdGlvbihkYXRhLCB0eXBlKSB7XG4gIGlmICh0eXBlb2YgQmxvYiAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgV2ViS2l0QmxvYkJ1aWxkZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIGJ1aWxkZXIgPSBuZXcgV2ViS2l0QmxvYkJ1aWxkZXIoKTtcbiAgICBidWlsZGVyLmFwcGVuZChkYXRhKTtcbiAgICByZXR1cm4gYnVpbGRlci5nZXRCbG9iKHR5cGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgQmxvYihbZGF0YV0sIHt0eXBlOiB0eXBlfSk7XG4gIH1cbn07XG5cbi8qKlxuICogRmluZCBhbGwgc2NyaXB0cyBvbiB0aGUgZ2l2ZW4gcGFnZS5cbiAqIEBtZXRob2Qgc2NyaXB0c1xuICogQHN0YXRpY1xuICovXG51dGlsLnNjcmlwdHMgPSBmdW5jdGlvbihnbG9iYWwpIHtcbiAgcmV0dXJuIGdsb2JhbC5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0Jyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHV0aWw7XG4iLCIvKmpzbGludCBub2RlOnRydWUqL1xuXG52YXIgcHJvdmlkZXJzID0gW1xuICByZXF1aXJlKCcuLi8uLi9wcm92aWRlcnMvY29yZS9jb3JlLnVucHJpdmlsZWdlZCcpLFxuICByZXF1aXJlKCcuLi8uLi9wcm92aWRlcnMvY29yZS9jb3JlLmVjaG8nKSxcbiAgcmVxdWlyZSgnLi4vLi4vcHJvdmlkZXJzL2NvcmUvY29yZS5jb25zb2xlJyksXG4gIHJlcXVpcmUoJy4uLy4uL3Byb3ZpZGVycy9jb3JlL2NvcmUuY3J5cHRvJyksXG4gIHJlcXVpcmUoJy4uLy4uL3Byb3ZpZGVycy9jb3JlL2NvcmUucGVlcmNvbm5lY3Rpb24nKSxcbiAgcmVxdWlyZSgnLi4vLi4vcHJvdmlkZXJzL2NvcmUvY29yZS5ydGNwZWVyY29ubmVjdGlvbicpLFxuICByZXF1aXJlKCcuLi8uLi9wcm92aWRlcnMvY29yZS9jb3JlLnJ0Y2RhdGFjaGFubmVsJyksXG4gIHJlcXVpcmUoJy4uLy4uL3Byb3ZpZGVycy9jb3JlL2NvcmUuc3RvcmFnZScpLFxuICByZXF1aXJlKCcuLi8uLi9wcm92aWRlcnMvY29yZS9jb3JlLnZpZXcnKSxcbiAgcmVxdWlyZSgnLi4vLi4vcHJvdmlkZXJzL2NvcmUvY29yZS5vYXV0aCcpLFxuICByZXF1aXJlKCcuLi8uLi9wcm92aWRlcnMvY29yZS9jb3JlLndlYnNvY2tldCcpLFxuICByZXF1aXJlKCcuLi8uLi9wcm92aWRlcnMvY29yZS9jb3JlLnhocicpLFxuICByZXF1aXJlKCcuLi8uLi9wcm92aWRlcnMvY29yZS9jb3JlLmJhdHRlcnknKVxuXTtcblxuZnVuY3Rpb24gZ2V0RnJlZWRvbVNjcmlwdCgpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB2YXIgc2NyaXB0O1xuICBpZiAod2luZG93LmRvY3VtZW50LmN1cnJlbnRTY3JpcHQpIHtcbiAgICAvLyBOZXcgYnJvd3NlciBBUElcbiAgICBzY3JpcHQgPSB3aW5kb3cuZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG4gIH0gZWxzZSBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gXCJjb21wbGV0ZVwiICYmXG4gICAgICAgICAgICAgZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gXCJsb2FkZWRcIikge1xuICAgIC8vIEluY2x1ZGVkIGluIEhUTUwgb3IgdGhyb3VnaCBkb2N1bWVudC53cml0ZVxuICAgIHNjcmlwdCA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0Jyk7XG4gICAgc2NyaXB0ID0gc2NyaXB0W3NjcmlwdC5sZW5ndGggLSAxXS5zcmM7XG4gIH0gZWxzZSB7XG4gICAgLy8gTG9hZGVkIHRocm91Z2ggZG9tIG1hbmlwdWxhdGlvbiBvciBhc3luYy5cbiAgICBzY3JpcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCJzY3JpcHRbc3JjKj0nZnJlZWRvbS5qcyddLHNjcmlwdFtzcmMqPSdmcmVlZG9tLSddXCJcbiAgICApO1xuICAgIGlmIChzY3JpcHQubGVuZ3RoICE9PSAxKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiQ291bGQgbm90IGRldGVybWluZSBmcmVlZG9tLmpzIHNjcmlwdCB0YWcuXCIpO1xuICAgIH1cbiAgICBzY3JpcHQgPSBzY3JpcHRbMF0uc3JjO1xuICB9XG4gIHJldHVybiBzY3JpcHQ7XG59XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICB3aW5kb3cuZnJlZWRvbSA9IHJlcXVpcmUoJy4uL2VudHJ5JykuYmluZCh7fSwge1xuICAgIGxvY2F0aW9uOiB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICBwb3J0VHlwZTogcmVxdWlyZSgnLi4vbGluay93b3JrZXInKSxcbiAgICBzb3VyY2U6IGdldEZyZWVkb21TY3JpcHQoKSxcbiAgICBwcm92aWRlcnM6IHByb3ZpZGVycyxcbiAgICBvYXV0aDogW1xuICAgICAgcmVxdWlyZSgnLi4vLi4vcHJvdmlkZXJzL29hdXRoL29hdXRoLmxvY2FscGFnZWF1dGgnKSxcbiAgICAgIHJlcXVpcmUoJy4uLy4uL3Byb3ZpZGVycy9vYXV0aC9vYXV0aC5yZW1vdGVwYWdlYXV0aCcpXG4gICAgXVxuICB9KTtcbn0gZWxzZSB7XG4gIHJlcXVpcmUoJy4uL2VudHJ5Jykoe1xuICAgIGlzTW9kdWxlOiB0cnVlLFxuICAgIHBvcnRUeXBlOiByZXF1aXJlKCcuLi9saW5rL3dvcmtlcicpLFxuICAgIHByb3ZpZGVyczogcHJvdmlkZXJzLFxuICAgIGdsb2JhbDogZ2xvYmFsXG4gIH0pO1xufVxuIl19