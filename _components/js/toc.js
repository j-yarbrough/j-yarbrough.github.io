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