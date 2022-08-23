// ==UserScript==
// @name         Instagram to Bibliogram Redirector
// @namespace    https://github.com/shmup/redirect-userscripts
// @version      1.0
// @description  Redirect Instagram to Bibliogram, a free and open source alternative
// @author       shmup
// @match        https://www.instagram.com/*
// @match        https://instagram.com/*
// @grant        none
// @run-at       document-start
// @license      Unlicense
// ==/UserScript==

/**
 * Bibliogram is a website that takes data from Instagram's public profile views
 * and puts it into a friendlier page that loads faster, gives downloadable
 * images, eliminates ads, generates RSS feeds, and doesn't urge you to sign up.
 * See an example.

 * Bibliogram does not allow you to anonymously post, like, comment, follow, or
 * view private profiles. It does not preserve deleted posts.
 *
 * Mirrors are here, you'd have to update the URL below.
 * https://git.sr.ht/~cadence/bibliogram-docs/tree/master/docs/Instances.md
 *
 * https://bibliogram.art
 * https://github.com/bmrz2019/bibliogram
 **/

(function () {
  top.location.hostname = "bibliogram.art";
})();

