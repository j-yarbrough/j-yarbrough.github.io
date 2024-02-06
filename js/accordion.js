// Script for accordions, nav collapse

var accordionButtons = document.querySelectorAll('.accordion-button');
accordionButtons.forEach((accordionButtons) => {
    accordionButtons.addEventListener('click',triggerAccordion)
});

function triggerAccordion() {
    var accordionPanel = this.parentElement.nextElementSibling;
    var accordionIndicator = this.firstElementChild;
    switch (this.getAttribute('aria-expanded')) {
        case 'true': this.setAttribute('aria-expanded',false);
        accordionIndicator.innerHTML = '&rarr;';
        break;
        case 'false': this.setAttribute('aria-expanded',true);
        accordionIndicator.innerHTML = '&darr;';
        break;
    };
    accordionPanel.classList.toggle('accordion-panel-show')
    accordionPanel.classList.toggle('accordion-panel-hide')
}