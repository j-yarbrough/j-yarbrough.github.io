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