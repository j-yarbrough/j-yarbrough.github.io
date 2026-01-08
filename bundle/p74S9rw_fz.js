window.addEventListener('load',buildTheTOC);
function buildTheTOC () {
    var headings = document.querySelectorAll('h2:not(.accordion-header, .dialog-header, .toc-skip)');
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
window.addEventListener('load',function () {
    document.querySelectorAll('.modal-open, .modal-close').forEach((dialogButton) => {
        dialogButton.addEventListener('click',modalActivate);
    })
})
function modalActivate() {
    var dialogContainer = document.querySelector('#' + this.getAttribute('aria-controls'));
    switch (this.classList.contains('modal-open')) {
        case true:  dialogContainer.showModal();break;
        case false: dialogContainer.close(); break;
    }
}