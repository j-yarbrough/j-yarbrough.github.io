buildTheTOC();

function buildTheTOC () {
    var headings = document.querySelectorAll('h2:not(#toc-heading)');
var listElement = document.createElement('ol');
    headings.forEach((headings) => {
        var headingText = headings.textContent
        var headingIDString = headingText.replaceAll(' ','-');
        headings.tabIndex = -1;
        headings.id = headingIDString;
        var listItemElement = document.createElement('li');
        var listItemElementLink = document.createElement('a');
        listItemElementLink.href = `#${headingIDString}`;
        listItemElementLink.textContent = headingText;
        listItemElement.appendChild(listItemElementLink);
        listElement.appendChild(listItemElement)
    });
    toc.appendChild(listElement);
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