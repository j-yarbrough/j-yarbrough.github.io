// Script for accordions

var accordionButtons = document.querySelectorAll('.accordion-button');
accordionButtons.forEach((accordionButtons) => {
    accordionButtons.addEventListener('click',triggerAccordion)
});

function triggerAccordion() {
    var accordionContainer = this.parentElement.parentElement;
    var accordionPanel = accordionContainer.querySelector('.accordion-panel');
    var accordionIndicator = accordionContainer.querySelector('.accordion-indicator');
    switch (this.getAttribute('aria-expanded')) {
        case 'true': this.setAttribute('aria-expanded','false');
        accordionIndicator.innerHTML = '&rarr;';
        break;
        case 'false': this.setAttribute('aria-expanded',true);
        accordionIndicator.innerHTML = '&darr;';
        break;
    };
    accordionPanel.classList.toggle('accordion-panel-show')
}
