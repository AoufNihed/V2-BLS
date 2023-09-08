onsole.log("code start");

var time = 1000;
const titles = ['504 Gateway Time-out', '403 Forbidden', 'Problem loading page', '503 Service Temporarily Unavailable', 'Service Unavailable', '500 Internal Server Error', 'Database error', 'FastCGI Error', 'The connection has timed out', 'Problemas al cargar la página', 'Error 502 (Server Error)!!1'];
const HeadingText = ['502 Bad Gateway', 'Service Unavailable', '403 ERROR', 'Error 503 Service Temporarily Unavailable', '404 Not Found', '504 Gateway Time-out', 'This page isn’t working'];
const myBody = ['Scheduled maintenance is under progress'];
var myTitle = document.title;

// Check if the page has any errors.
var hasError = titles.includes(myTitle) || HeadingText.includes(document.getElementsByTagName('h1')[0].innerText) || myBody.includes(document.body.textContent);

// If the page has an error, reload it after a delay.
if (hasError) {
    setTimeout(function() {
        window.location.reload(true);
    }, time);
}
