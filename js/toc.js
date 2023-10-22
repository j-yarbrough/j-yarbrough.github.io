// builds table of contents

var tocContainer = document.querySelector('#toc');
buildTheTOC();

function buildTheTOC () {
    var headings = document.querySelectorAll('h2:not(#toc-heading)');
var listElement = document.createElement('ul');
    headings.forEach((headings) => {
        var headingText = headings.textContent
        var headingIDString = headingText.replaceAll(' ','-');
        headings.setAttribute('tabindex','-1');
        headings.setAttribute('id',headingIDString);
        var listItemElement = document.createElement('li');
        var listItemElementLink = document.createElement('a');
        listItemElementLink.setAttribute('href',`#${headingIDString}`);
        listItemElementLink.textContent = headingText;
        listItemElement.appendChild(listItemElementLink);
        listElement.appendChild(listItemElement)
    });
    tocContainer.appendChild(listElement);
}