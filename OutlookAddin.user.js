// ==UserScript==
// @name         Reload button OutlookAddin debug
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  adds a nice reload button for the outlook addin
// @author       Tom Prins
// @match        https://localhost/rooms4uAddin/dist/index.html*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
      $(document).ready(function(){
          setTimeout(function(){ $(".actions").append('<span class="fa fa-ambulance action" onclick="window.location.reload(true)" title="Reload Addin"></span>'); }, 2000);
    });

})();