// ==UserScript==
// @name         Youtube to Invidious Redirector
// @namespace    https://github.com/shmup/redirect-userscripts
// @version      1.0
// @description  Redirect youtube to invidious, a free and open source alternative
// @author       shmup
// @match        https://www.youtube.com/*
// @match        https://youtube.com/*
// @grant        none
// @run-at       document-start
// @license      Unlicense
// ==/UserScript==

/**
 * Privacy focused. Ethically designed. No Accounts. Multilingual. No Ads.
 *
 * https://invidious.io/
 * https://github.com/iv-org/invidious
 **/

(function () {
  top.location.hostname = "yewtu.be";
})();

