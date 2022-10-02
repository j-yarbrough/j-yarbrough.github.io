//script that dynamically builds TOC

var toc = document.querySelector('#toc');
var headingsToIndex = document.querySelectorAll('h2');

//adds id attributes and tabindex to h2's

addIdAndTabIndex() ;

function addIdAndTabIndex() {
    for (var i = 0; i < headingsToIndex.length; i++) {
     headingsToIndex[i].setAttribute('tabindex','-1');
     headingsToIndex[i].setAttribute('id',headingsToIndex[i].textContent.replace(/[^A-Za-z0-9]+/g,'') + i);
    } //end loop
} //end function

//adds header to top and aria-labelledby

createTocHeader();

function createTocHeader() {
    var tocHeader = document.createElement('h2');
    tocHeader.textContent = 'On This Page';
    tocHeader.setAttribute('id','toc-header');
    toc.appendChild(tocHeader);
    toc.setAttribute('aria-labelledby',tocHeader.getAttribute('id'));
} //end function

//builds list

listBuilder();
function listBuilder() {
    var listElement = document.createElement('ol');
    listElement.setAttribute('id','toc-list');
    toc.appendChild(listElement);
    for (var i = 0; i < headingsToIndex.length; i++) {
        buildListElement(i);
    }
} //end function

//builds list elements

function buildListElement(elementNumber) {
    var listContainer = document.querySelector('#toc-list');
    var listElement = document.createElement('li');
    var listElementAnchor = document.createElement('a');
    listElementAnchor.setAttribute('href','#' + headingsToIndex[elementNumber].getAttribute('id'));
    listElementAnchor.textContent = headingsToIndex[elementNumber].textContent;
    listContainer.appendChild(listElement);
    listElement.appendChild(listElementAnchor);
}