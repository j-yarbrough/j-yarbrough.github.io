buildTheTOC();
function buildTheTOC () {
    var headings = document.querySelectorAll('h2:not(#toc-heading)');
    var tocContainer = document.querySelector('auto-toc');
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