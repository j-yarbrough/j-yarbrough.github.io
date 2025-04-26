buildTheTOC();

function buildTheTOC () {
    var headings = document.querySelectorAll('h2:not(#toc-heading)');
    var tocContainer = document.querySelector('#toc');
var listElement = document.createElement('ol');
listElement.classList.add('more-line-height');
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