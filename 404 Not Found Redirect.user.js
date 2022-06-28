// ==UserScript==
// @name         404 Not Found Redirect
// @version      1.0
// @description  This userscript detects "404 Not Found" errors on webpages and redirects to an work copy on the Wayback Machine if available.
// @author       Suvanth Erranki
// @include      *
// @exclude      https://archive.org/*
// @run-at       document-start
// ==/UserScript==

function redirect() {
    var errorStatuses = [404, 408, 410, 451, 500, 502, 503, 504, 509, 520, 521, 523, 524, 525, 526];
    fetch(location.href).then(function(status) {
        for (let i = 0; i < errorStatuses.length; i++) {
            if (status.status === errorStatuses[i]) {
                let apiUrl = "https://web.archive.org/wayback/available?url=" + location.href;
                fetch(apiUrl).then(function(response) {
                    response.text().then(function(text) {
                        var redirectUrl = JSON.parse(text).archived_snapshots.closest.url;
                        location.href = redirectUrl;
                    })
                }).catch(function(error) {
                    alert("Sorry, the website you are on currently is blocking the UserScript from making a request to the Wayback Machine.\n\nSee: https://github.com/Suvanth-Erranki/404-Not-Found-Redirect-UserScript/issues/1 for more information.")
                })
            }
        }
    })
}

redirect();

// Website you can test this UserScript on:
// https://www.whitehouse.gov/energy/climate-change
// https://stevereads.com/cache/ephemeral_web_pages.html
