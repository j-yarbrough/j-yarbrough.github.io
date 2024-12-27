// Script for accordions

var accordionButtons = document.querySelectorAll('.accordion-button');
accordionButtons.forEach((accordionButtons) => {
    accordionButtons.addEventListener('click',triggerAccordion)
});

function triggerAccordion() {
    var accordionContainer = this.parentElement.parentElement;
    var accordionHeading = accordionContainer.querySelector('.accordion-header');
    var accordionPanel = document.querySelector('#' + this.getAttribute('aria-controls'));
    var accordionIndicator = accordionContainer.querySelector('.accordion-indicator');
    switch (this.ariaExpanded) {
        case 'true': this.ariaExpanded = false;
        accordionIndicator.innerHTML = '&rarr;';
        accordionHeading.removeAttribute('data-show');
        break;
        case 'false': this.ariaExpanded = true;
        accordionIndicator.innerHTML = '&darr;';
        accordionHeading.setAttribute('data-show','show');
        break;
    };
    accordionPanel.classList.toggle('accordion-panel-show')
}