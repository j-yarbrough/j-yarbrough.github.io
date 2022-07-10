// lazy loader for scripts
// Will load scripts only for components that are being used on pages.
// This script will check for certain selectors and append script tags to the end of the body element.

var bodyElement = document.querySelector('body');
var pageURL = window.location.href;
var scriptsToAdd = '';
var rootCheckerOutput = 'js/';
// checks URL to see if it's a root or approved subfolder

if (pageURL.includes('alt-text')) {
    rootCheckerOutput = '../js/';
};

// checks for nav collapse

if (document.querySelectorAll('#nav-btn').length > 0) {
    createScriptElements('nav-collapse');}

//checks for TOC

if (document.querySelectorAll('#toc').length > 0) {
    createScriptElements('toc');
};

//checks for accordions

if (document.querySelectorAll('.accordion-button').length > 0) {
    createScriptElements('accordion');
}

// checks for contact form validation

if (document.querySelectorAll('#contact-form').length > 0) {
    createScriptElements('contact');
};

//function that creates elements

function createScriptElements (scriptFileName) {
    var elementBeingCreated = document.createElement('script');
    elementBeingCreated.setAttribute('src',rootCheckerOutput + scriptFileName + '.js');
bodyElement.appendChild(elementBeingCreated);
}