// Script for accordions

var accordionButtons = document.querySelectorAll('.accordion-button');
accordionButtons.forEach((accordionButtons) => {
    accordionButtons.addEventListener('click',triggerAccordion)
});

function triggerAccordion() {
    var accordionContainer = this.parentElement.parentElement;
    var accordionHeading = accordionContainer.querySelector('.accordion-header');
    var accordionPanel = accordionContainer.querySelector('.accordion-panel');
    var accordionIndicator = accordionContainer.querySelector('.accordion-indicator');
    switch (this.getAttribute('aria-expanded')) {
        case 'true': this.setAttribute('aria-expanded','false');
        accordionIndicator.innerHTML = '&rarr;';
        accordionHeading.removeAttribute('data-show');
        break;
        case 'false': this.setAttribute('aria-expanded',true);
        accordionIndicator.innerHTML = '&darr;';
        accordionHeading.setAttribute('data-show','show');
        break;
    };
    accordionPanel.classList.toggle('accordion-panel-show')
}