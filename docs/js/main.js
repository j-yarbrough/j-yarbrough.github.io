//begin nav show/hide on mobile

var elShowHide = document.querySelector('#nav-btn'); //variable for collapser button
elShowHide.addEventListener('click',showHideNav); //event listener for above

function showHideNav() {
    switch (this.getAttribute('aria-expanded')) {
        case 'false': this.setAttribute('aria-expanded','true');
        this.textContent = 'Hide Navigation';
        break;
        case 'true': this.setAttribute('aria-expanded','false');
        this.textContent = 'Show Navigation';
        break;
    };
} //end function

//end show/hide nav on mobile

//begin toc

var toc = document.querySelectorAll('#toc'); //variable for TOC

//fires script to build TOC if called for on page, otherwise ignores.

if (toc.length > 0) {
    toc[0].innerHTML = tocBuilder(
        toc[0].getAttribute('data-depth'),
        toc[0].getAttribute('aria-label'),
        toc[0].getAttribute('data-list-type')
    )
};
//function that builds TOC from headings on page.

function tocBuilder(depth,headerText, listType) {
    //depth = how deep in the heading structure it should go. data-depth attribute, value between 2 and 6
    //headerText: set by aria-label attribute, controls text for h2 at start of TOC
    //list type: set by data-list-type attribute, should be 'ol' or 'ul'
    var builderOutput = '<h2 id="toc-header">' + headerText + '</h2><' + listType + '>';
    var headingsToIndex;
    var tocContainer = document.querySelector('#toc');
    var headingIndex = { //index object
        text : [],
        headingTag: [],
        idValue: [],
    };
    switch(depth) { //determines depth of headings for TOC, set by data-depth attribute on toc element
        case 2: headingsToIndex = document.querySelectorAll('main h2:not(#toc-header)');
        break;
        case 3: headingsToIndex = document.querySelectorAll('main h2:not(#toc-header), main h3');
        break;
        case 4: headingsToIndex = document.querySelectorAll('main h2:not(#toc-header), main h3, main h4');
        break;
        case 5: headingsToIndex = document.querySelectorAll('main h2:not(#toc-header), main h3, main h4, main h5');
        break;
        case 6: headingsToIndex = document.querySelectorAll('main h2:not(#toc-header), main h3, main h4, main h5, main h6');
        break;
        default: headingsToIndex = document.querySelectorAll('main h2:not(#toc-header)');
    } //end switch
    for (var i = 0; i < headingsToIndex.length; i++) { //checks if headings have id and tabindex, creates if they don't
        if (headingsToIndex[i].hasAttribute('tabindex') == false) {
            headingsToIndex[i].setAttribute('tabindex','-1');
        };
        if (headingsToIndex[i].hasAttribute('id') == false) {
            headingsToIndex[i].setAttribute('id',headingsToIndex[i].textContent.replace(/[^A-Z0-9]/ig,'') + i);
        };
    } //end loop
    for (var i = 0; i <headingsToIndex.length; i++) { //builds index object
headingIndex.text[i] = headingsToIndex[i].textContent;
headingIndex.idValue[i] = headingsToIndex[i].getAttribute('id');
headingIndex.headingTag[i] = headingsToIndex[i].tagName.substr(1,1);
    }; //end loop
    switch (headingIndex.headingTag[0] == 2) { //checks level of first heading, creates item if it's 2
        case true: builderOutput += '<li><a href="#' + headingIndex.idValue[0] + '">' + headingIndex.text[0] + '</a>';
        break;
        case false: return; //cancels if first heading is not correct level
        break;
    }
    for (var i = 1; i < headingsToIndex.length; i++) { //creates all other list items
switch (headingIndex.headingTag[i] - headingIndex.headingTag[i - 1]) { //determines list level relative to previous item, handles html appropriately
    case 0: builderOutput += '</li><li><a href="#' + headingIndex.idValue[i] + '">' + headingIndex.text[i] + '</a>';
    break;
    case 1: builderOutput += '<' + listType + '><li><a href="#' + headingIndex.idValue[i] + '">' + headingIndex.text[i] + '</a>';
    break;
    case -1: builderOutput += '</li></' + listType + '></li><li><a href="#' + headingIndex.idValue[i] + '">' + headingIndex.text[i] + '</a>';
    break;
    case -2: builderOutput += '</li></' + listType + '></li></' + listType + '></li><li><a href="#' + headingIndex.idValue[i] + '">' + headingIndex.text[i] + '</a>';
    break;
    case -3: builderOutput += '</li></' + listType + '></li></' + listType + '></li></' + listType + '></li><li><a href="#' + headingIndex.idValue[i] + '">' + headingIndex.text[i] + '</a>';
    break;
    case -4: builderOutput += '</li></' + listType + '></li></' + listType + '></li></' + listType + '></li></' + listType + '></li><li><a href="#' + headingIndex.idValue[i] + '">' + headingIndex.text[i] + '</a>';
    break;
    default: return; //cancels function if levels go deeper by more than 1
} //end switch
    } //end loop
switch (headingIndex.headingTag[i]) { //closes out the list or lists based on level of last heading
    case 2: builderOutput += '</li></' + listType + '>';
    break;
    case 3: builderOutput += '</li></' + listType + '></li></' + listType + '>';
    break;
    case 4: builderOutput += '</li></' + listType + '></li></' + listType + '></li></' + listType + '>';
    break;
    case 5: builderOutput += '</li></' + listType + '></li></' + listType + '></li></' + listType + '></li></' + listType + '>';
    break;
    case 6: builderOutput += '</li></' + listType + '></li></' + listType + '></li></' + listType + '></li></' + listType + '></li></' + listType + '>';
} //end switch
    return builderOutput;
} //end function
//end toc

//begin accordion

var elAccordionButtons = document.querySelectorAll('.accordion-button');

//event listener

if (elAccordionButtons.length > 0) {
    for(var i = 0; i < elAccordionButtons.length; i++) {
elAccordionButtons[i].addEventListener('click',triggerAccordion);
    };
}

//function

function triggerAccordion() {
    var header = this.parentElement;
    switch (this.getAttribute('aria-expanded')) {
        case 'true': this.setAttribute('aria-expanded',false);
        header.removeAttribute('data-show');
        break;
        case 'false': this.setAttribute('aria-expanded',true);
        header.setAttribute('data-show','show');
        break;
    };
} //end function

//end accordion