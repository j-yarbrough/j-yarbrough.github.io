// lazy loader for scripts
// Will load scripts only for components that are being used on pages.
// This script will check for certain selectors and append script tags to the end of the body element.

var pageURL = window.location.href;
var rootCheckerOutput = 'js/';

// Array for checks to be done
// Format for each check is [selector, filename]
// Note: Filename should not contain file extension

var indexOfChecks = [
    ['#nav-btn','nav-collapse'],
    ['#toc','toc'],
    ['.accordion-button','accordion'],
    ['#contact-form','contact']
    ]; //end index

// checks URL to see if it's a root or approved subfolder

if (pageURL.includes('alt-text')) {
    rootCheckerOutput = '../js/';
};

// Loop that does checks, runs function if check is true

for (var i = 0; i < indexOfChecks.length; i++) {
    if (document.querySelectorAll(indexOfChecks[i][0]).length >0) {
        createScriptElements(indexOfChecks[i][1]);
    }
} //end loop

//function that creates elements

function createScriptElements (scriptFileName) {
    var elementBeingCreated = document.createElement('script');
    elementBeingCreated.setAttribute('src',rootCheckerOutput + scriptFileName + '.js');
document.body.appendChild(elementBeingCreated);
}