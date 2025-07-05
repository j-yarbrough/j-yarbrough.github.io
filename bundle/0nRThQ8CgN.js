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
buildTheTOC();
function buildTheTOC () {
    var headings = document.querySelectorAll('h2:not(.accordion-header, .dialog-header)');
    var tocList = document.querySelector('#toc-list');
    headings.forEach((headings) => {
        var headingText = headings.textContent
        var headingIDString = headings.id;
        headings.tabIndex = -1;
        var listItemElement = document.createElement('li');
        var listItemElementLink = document.createElement('a');
        listItemElementLink.href = `#${headingIDString}`;
        listItemElementLink.textContent = headingText;
        listItemElement.appendChild(listItemElementLink);
        tocList.appendChild(listItemElement)
    });
}
// event listeners

document.querySelectorAll('.modal-trigger').forEach((triggerButton) => {
    triggerButton.addEventListener('click', modalOpen)
});
document.querySelectorAll('.modal-close').forEach((closeButton) => {
    closeButton.addEventListener('click',modalClose);
});

// functions

function modalOpen() {
    document.querySelector('#' + this.getAttribute('aria-controls')).showModal();
}
function modalClose() {
    document.querySelector('#' + this.getAttribute('aria-controls')).close();
}