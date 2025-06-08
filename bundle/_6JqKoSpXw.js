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

document.querySelectorAll('.modal-trigger, .modal-close').forEach((triggerButton) => {
    triggerButton.addEventListener('click', modalActivate)
})

// function

function modalActivate () {
    var dialogContainer = this.closest('modal-dialog').querySelector('dialog');
    if (dialogContainer.hasAttribute('open')) {
dialogContainer.close();
    } else {
        dialogContainer.showModal();
    }
}