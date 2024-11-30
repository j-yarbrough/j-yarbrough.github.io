document.querySelector('#nav-btn').addEventListener('click',navAccordion);

function navAccordion() {
var navIndicator = this.querySelector('.accordion-indicator');
var navPanel = document.querySelector('#nav-links');
switch (this.ariaExpanded) {
    case 'true': this.ariaExpanded = false;
    navIndicator.innerHTML = '&rarr;';
    break;
    case "false": this.ariaExpanded = true;
    navAccordion.innerHTML='&darr;';
    break;
}
navPanel.classList.toggle('show-the-panel');
}