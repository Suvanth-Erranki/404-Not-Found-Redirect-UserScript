// ==UserScript==
// @name         404 Not Found Redirect
// @version      1.0
// @description  This userscript detects "404 Not Found" errors on webpages and redirects to an work copy on the Wayback Machine if available.
// @author       Suvanth Erranki
// @include      *
// @run-at       document-start
// ==/UserScript==

function redirect() {
    var errorStatuses = [404, 408, 410, 451, 500, 502, 503, 504, 509, 520, 521, 523, 524, 525, 526]
    fetch(location.href).then(function(status) {
        for (let i = 0; i < errorStatuses.length; i++) {
            if (status.status === errorStatuses[i]) {
                let apiUrl = "https://web.archive.org/wayback/available?url=" + location.href
                fetch(apiUrl).then(function(response) {
                    response.text().then(function(text) {
                        var redirectUrl = JSON.parse(text).archived_snapshots.closest.url
                        location.href = redirectUrl
                    })
                })
            }
        }
    })
}

redirect()
