// Script for accordions

document.querySelectorAll('#nav-btn, .accordion-button').forEach((accordionButtons) => {
    accordionButtons.addEventListener('click',triggerAccordion)
});

function triggerAccordion() {
    var accordionIndicator = this.querySelector('.accordion-indicator');
    switch (this.ariaExpanded) {
        case 'true': this.ariaExpanded = false;
        accordionIndicator.innerHTML = '&rarr;';
        break;
        case 'false': this.ariaExpanded = true;
        accordionIndicator.innerHTML = '&darr;';
        break;
    };
}