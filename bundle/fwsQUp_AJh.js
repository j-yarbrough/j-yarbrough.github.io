// Script for accordions

document.querySelectorAll('#nav-btn, .accordion-button').forEach((accordionButtons) => {
    accordionButtons.addEventListener('click',triggerAccordion)
});

function triggerAccordion() {
    if (this.ariaExpanded == 'true') {
        this.ariaExpanded = false;
    } else {
        this.ariaExpanded = true;
}
}