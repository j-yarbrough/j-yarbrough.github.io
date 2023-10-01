// builds table of contents

var tocContainer = document.querySelector('#toc');
tocContainer.innerHTML += buildTheTOC();

function buildTheTOC () {
    var headings = document.querySelectorAll('h2:not(#toc-heading)');
    var listString = '';
    headings.forEach((headings) => {
        var headingIDString = headings.textContent;
        headings.setAttribute('tabindex','-1');
        headingIDString = headingIDString.replaceAll(' ','-');
        headingIDString = headingIDString.replaceAll('?','');
        headings.setAttribute('id',headingIDString);
        listString += `<li><a href="${headingIDString}">${headings.textContent}</a></li>`;        
    });
    return `<ul>${listString}</ul>`
}