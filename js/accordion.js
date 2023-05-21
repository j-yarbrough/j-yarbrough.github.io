// Script for accordions

var elAccordionButtons = document.querySelectorAll('.accordion-button');

//event listener

for(var i = 0; i < elAccordionButtons.length; i++) {
    elAccordionButtons[i].addEventListener('click',triggerAccordion);
    };

//functions

function triggerAccordion() {
    var accordionHeader = this.parentElement;
    var accordionIndicator = this.firstElementChild;
    switch (this.getAttribute('aria-expanded')) {
        case 'true': this.setAttribute('aria-expanded',false);
        accordionHeader.removeAttribute('data-show');
        accordionIndicator.innerHTML = '&rarr;';
        break;
        case 'false': this.setAttribute('aria-expanded',true);
        accordionHeader.setAttribute('data-show','show');
        accordionIndicator.innerHTML = '&darr;';
        break;
    };
} //end function