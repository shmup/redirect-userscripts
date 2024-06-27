// ==UserScript==
// @name         X to Twitter Redirect
// @namespace    https://github.com/shmup/redirect-userscripts
// @version      1.0
// @description  Redirect x.com to twitter.com
// @author       shmup
// @match        https://www.x.com/*
// @match        https://x.com/*
// @match        https://mobile.x.com/*
// @grant        none
// @run-at       document-start
// @license      Unlicense
// ==/UserScript==

(function () {
  "use strict";
  const newURL = new URL(window.location.href);
  newURL.hostname = "twitter.com";
  window.location.replace(newURL.toString());
})();
