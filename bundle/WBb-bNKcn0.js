buildTheTOC();

function buildTheTOC () {
    var headings = document.querySelectorAll('h2:not(#toc-heading)');
    var tocContainer = document.querySelector('#toc');
var listElement = document.createElement('ol');
    headings.forEach((headings) => {
        var headingText = headings.textContent
        var headingIDString = headings.id;
        headings.tabIndex = -1;
        var listItemElement = document.createElement('li');
        var listItemElementLink = document.createElement('a');
        listItemElementLink.href = `#${headingIDString}`;
        listItemElementLink.textContent = headingText;
        listItemElement.appendChild(listItemElementLink);
        listElement.appendChild(listItemElement)
    });
    tocContainer .appendChild(listElement);
}
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