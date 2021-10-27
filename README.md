# What is a UserScript?
Check out: https://en.wikipedia.org/wiki/Userscript

# 404 Not Found Redirect UserScript
This UserScript detects "404 Not Found" Errors on webpages and redirects to an work copy on the Wayback Machine if available. Just install the [Tampermonkey](https://www.tampermonkey.net/) or [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) UserScript manager extensions, go to the ".user.js" file with the code, and click raw and your UserScript manager should prompt you to install it!

Website you can test this UserScript on:

https://www.whitehouse.gov/energy/climate-change

https://stevereads.com/cache/ephemeral_web_pages.html

### Notice:
Do not post an issue for because the UserScript is redirecting you to the Wayback Machine, even though the website is full functioning and is not giving an error. It is almost certainly not the UserScript's fault. It is likely the website is simply giving a 404 http error status to the UserScript, even though this is inaccurate. This is a mistake on the website's part, just exclude the site from the UserScript so it does not execute on the page.
