// ==UserScript==
// @name         Twitter to Nitter Redirector
// @namespace    https://github.com/shmup/redirect-userscripts
// @version      1.1
// @description  Redirect Twitter to Nitter, a free and open source alternative
// @author       shmup
// @match        https://www.twitter.com/*
// @match        https://twitter.com/*
// @match        https://mobile.twitter.com/*
// @grant        none
// @run-at       document-start
// @license      Unlicense
// ==/UserScript==

/**
 * Nitter is a free and open source alternative Twitter front-end focused on privacy and performance.
 *
 * https://nitter.net/about
 * https://github.com/zedeus/nitter
 **/

(function () {
  'use strict';

  const preferredNitterInstance = 'nitter.net';

  const redirectToNitter = () => {
    const nitterURL = new URL(window.location.href);
    nitterURL.hostname = preferredNitterInstance;
    window.location.replace(nitterURL.toString());
  };

  redirectToNitter();
})();
