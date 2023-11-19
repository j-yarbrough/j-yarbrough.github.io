// Script for accordions, nav collapse

var wrapper = document.querySelector('#wrapper');
wrapper.addEventListener('click',triggerAccordion);

function triggerAccordion() {
    var accordionClicked = document.getElementById(event.target.id);
    var accordionHeader;
    var isNavigation;
    var accordionIndicator = accordionClicked.firstElementChild;
    if (event.target.id == 'nav-btn') {
        accordionHeader = null;
isNavigation = true;
    } else {
        isNavigation = false;
        accordionHeader = accordionClicked.parentElement;
    }
    switch (accordionClicked.getAttribute('aria-expanded')) {
        case 'true': accordionClicked.setAttribute('aria-expanded',false);
        if (isNavigation == false) {accordionHeader.removeAttribute('data-show')};
        accordionIndicator.innerHTML = '&rarr;';
        break;
        case 'false': accordionClicked.setAttribute('aria-expanded',true);
        if (isNavigation == false) {accordionHeader.setAttribute('data-show','show')};
        accordionIndicator.innerHTML = '&darr;';
        break;
    };
}