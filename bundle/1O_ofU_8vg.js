// Script for accordions

document.querySelectorAll('#nav-btn, .accordion-button').forEach((accordionButtons) => {
    accordionButtons.addEventListener('click',triggerAccordion)
});

function triggerAccordion()  {
    switch (this.ariaExpanded == 'true') {
        case true: this.ariaExpanded = 'false'; break;
        case false: this.ariaExpanded = 'true'; break;
    }
}