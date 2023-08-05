// Script for accordions, nav collapse

var elAccordionButtons = document.querySelectorAll('#nav-btn, .accordion-button');

//event listener

for(var i = 0; i < elAccordionButtons.length; i++) {
    elAccordionButtons[i].addEventListener('click',triggerAccordion);
    };

//functions

function triggerAccordion() {
    var accordionHeader;
    var isNavigation;
    var accordionIndicator = this.firstElementChild;
    if (this.getAttribute('id') == 'nav-btn') {
        accordionHeader = null;
isNavigation = true;
    } else {
        isNavigation = false;
        accordionHeader = this.parentElement;
    }
    switch (this.getAttribute('aria-expanded')) {
        case 'true': this.setAttribute('aria-expanded',false);
        if (isNavigation == false) {accordionHeader.removeAttribute('data-show')};
        accordionIndicator.innerHTML = '&rarr;';
        break;
        case 'false': this.setAttribute('aria-expanded',true);
        if (isNavigation == false) {accordionHeader.setAttribute('data-show','show')};
        accordionIndicator.innerHTML = '&darr;';
        break;
    };
} //end function