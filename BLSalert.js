// ==UserScript==
// @name         BLS alert
// @namespace    http://tampermonkey.net/
// @version      2.0.4
// @description  bls aler  P|R|C Clean Refresh Alarm Notif
// @author       @Itsmaarouf
// @match        *://*.blsspainmorocco.com/*
// @grant        none
// ==/UserScript==

(function() {
    // Get the element that contains the appointment slots.
    var slotsElement = document.querySelector('.day.activeClass');

    // Check if there are any available appointment slots.
    if (slotsElement) {
      // Play an alarm sound.
    new Audio('https://www.soundjay.com/mechanical/sounds/smoke-detector-1.mp3').play();

      // Clear the interval that was checking for available slots.
    clearInterval(gun);
    }
})();