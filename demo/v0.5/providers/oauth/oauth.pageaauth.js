/*globals OAuth, Promise */
/*jslint indent:2,browser:true */
(function () {
  'use strict';
  var oAuthRedirectId = 'freedom.oauth.redirect.handler',
    listeners = {};

  /**
   * Handler for storage events, which relays them to waiting clients.
   * @param {String} state State provided by the  
   */
  function storageListener(state, client, msg) {
    if (msg.url.indexOf(state) > -1) {
      client.dispatchEvent("oAuthEvent", msg.url);
      window.removeEventListener("storage", listeners[state], false);
      delete listeners[state];
    }
  }
  
  /**
   * If we have a local domain, and freedom.js is loaded at startup, we can use
   * the local page as a redirect URI.
   */
  if (typeof window !== 'undefined' && window && window.addEventListener) {
    window.addEventListener('load', function () {
      var here = window.location.protocol + "//" + window.location.host +
          window.location.pathname;

      OAuth.register(function (uris, provider) {
        if (uris.indexOf(here) > -1) {
          var id = oAuthRedirectId + Math.random(),
            listener = storageListener.bind({}, id, provider);
          listeners[id] = listener;
          window.addEventListener("storage", listener, false);
          return Promise.resolve(id);
        }
        return false;
      });
    }, false);
  }


  /**
   * If there is redirection back to the page, and oAuthRedirectID is set,
   * then report the auth and close the window.
   */
  if (typeof window !== 'undefined' && window && window.location &&
      window.localStorage &&
      window.location.href.indexOf(oAuthRedirectId) > 0) {
    window.localStorage.setItem(oAuthRedirectId, new Date());
    window.close();
  }
}());
