/*globals freedom:true, fdom, WebSocket, console*/
/*jslint sloppy:true*/

/**
 * A WebSocket core provider.
 * @param {port.Module} module The Module requesting this provider
 * @param {Function} dispatchEvent Function to dispatch events.
 * @param {String} url The Remote URL to connect with.
 * @param {String[]} protocols SubProtocols to open.
 * @param {WebSocket?} socket An alternative socket class to use.
 */
var WS = function (module, dispatchEvent, url, protocols, socket) {
  var WSImplementation = socket || WebSocket;

  this.dispatchEvent = dispatchEvent;
  try {
    if (protocols) {
      this.websocket = new WSImplementation(url, protocols);
    } else {
      this.websocket = new WSImplementation(url);
    }
  } catch (e) {
    var error = {};
    if (e instanceof SyntaxError) {
      error.errcode = 'SYNTAX';
    } else {
      error.errcode = e.name;
    }
    error.message = e.message;
    dispatchEvent('onError', error);
    return;
  }

  this.websocket.onopen = this.onOpen.bind(this);
  this.websocket.onclose = this.onClose.bind(this);
  this.websocket.onmessage = this.onMessage.bind(this);
  this.websocket.onerror = this.onError.bind(this);
};

WS.prototype.send = function(data, continuation) {
  var toSend = data.text || data.binary || data.buffer;
  var errcode, message;

  if (toSend) {
    try {
      this.websocket.send(toSend);
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

WS.prototype.getReadyState = function(continuation) {
  continuation(this.websocket.readyState);
};

WS.prototype.getBufferedAmount = function(continuation) {
  continuation(this.websocket.bufferedAmount);
};

WS.prototype.close = function(code, reason, continuation) {
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
    continuation(undefined,{
      errcode: errorCode,
      message: e.message
    });
  }
};

WS.prototype.onOpen = function(event) {
  this.dispatchEvent('onOpen');
};

WS.prototype.onMessage = function(event) {
  var data = {};
  if (event.data instanceof ArrayBuffer) {
    data.buffer = data;
  } else if (event.data instanceof Blob) {
    data.binary = data;
  } else if (typeof event.data === 'string') {
    data.text = event.data;
  }
  this.dispatchEvent('onMessage', data);
};

WS.prototype.onError = function(event) {
  // Nothing to pass on
  // See: http://stackoverflow.com/a/18804298/300539
  this.dispatchEvent('onError');
};

WS.prototype.onClose = function(event) {
  this.dispatchEvent('onClose',
                     {code: event.code,
                      reason: event.reason,
                      wasClean: event.wasClean});
};

fdom.apis.register('core.websocket', WS);
