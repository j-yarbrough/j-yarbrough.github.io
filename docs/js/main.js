//begin nav show/hide on mobile

var elShowHide = document.querySelector('#nav-btn'); //variable for collapser button
elShowHide.addEventListener('click',showHideNav); //event listener for above

function showHideNav() {
    var navLinks = document.querySelector('#nav-links');
    switch (this.getAttribute('aria-expanded')) {
        case 'false': this.setAttribute('aria-expanded','true');
        this.textContent = 'Hide Navigation';
        navLinks.setAttribute('data-show','show');
        break;
        case 'true': this.setAttribute('aria-expanded','false');
        this.textContent = 'Show Navigation';
        navLinks.removeAttribute('data-show');
        break;
    };
} //end function

//end show/hide nav on mobile

//begin toc

var toc = document.querySelectorAll('#toc'); //variable for TOC

//fires script to build TOC if called for on page, otherwise ignores.

if (toc.length > 0) {
    toc[0].innerHTML = tocBuilder();
};
//function that builds TOC from h2s on page.

function tocBuilder() {
    var builderOutput = '<h2 id="toc-header">On this Page</h2><ul>';
    var headingsToIndex;
    var tocContainer = document.querySelector('#toc');
    var headingIndex = { //index object
        text : [],
        headingTag: [],
        idValue: [],
    };
    switch(tocContainer.getAttribute('data-depth')) {
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
    for (var i = 0; i < headingsToIndex.length; i++) { //checks headings for tabindex and id values, adds them if they don't exist
switch (headingsToIndex[i].hasAttribute('id')) {
    case true: break;
    case false: headingsToIndex[i].setAttribute('id',headingsToIndex[i].textContent.split(' ').join('-') + i);
    break;
};
switch (headingsToIndex[i].hasAttribute('tabindex')) {
    case true: break;
    case false: headingsToIndex[i].setAttribute('tabindex','-1');
    break;
};
    }; //end loop
    for (var i = 0; i <headingsToIndex.length; i++) { //builds index object
headingIndex.text[i] = headingsToIndex[i].textContent;
headingIndex.idValue[i] = headingsToIndex[i].getAttribute('id');
headingIndex.headingTag[i] = headingsToIndex[i].tagName.substr(1,1);
    }; //end loop
    builderOutput += '<li><a href="#' + headingIndex.idValue[0] + '">' + headingIndex.text[0] + '</a>';
    for (var i = 1; i < headingsToIndex.length; i++) {
switch (headingIndex.headingTag[i] - headingIndex.headingTag[i - 1]) {
    case 0: builderOutput += '</li><li><a href="#' + headingIndex.idValue[i] + '">' + headingIndex.text[i] + '</a>';
    break;
    case 1: builderOutput += '<ul><li><a href="#' + headingIndex.idValue[i] + '">' + headingIndex.text[i] + '</a>';
    break;
    case -1: builderOutput += '</li></ul></li><li><a href="#' + headingIndex.idValue[i] + '">' + headingIndex.text[i] + '</a>';
    break;
    case -2: builderOutput += '</li></ul></li></ul></li><li><a href="#' + headingIndex.idValue[i] + '">' + headingIndex.text[i] + '</a>';
    break;
    case -3: builderOutput += '</li></ul></li></ul></li></ul></li><li><a href="#' + headingIndex.idValue[i] + '">' + headingIndex.text[i] + '</a>';
    break;
    case -4: builderOutput += '</li></ul></li></ul></li></ul></li></ul></li><li><a href="#' + headingIndex.idValue[i] + '">' + headingIndex.text[i] + '</a>';
    break;
} //end switch
    } //end loop
switch (headingIndex.headingTag[i]) {
    case 2: builderOutput += '</li></ul>';
    break;
    case 3: builderOutput += '</li></ul></li></ul>';
    break;
    case 4: builderOutput += '</li></ul></li></ul></li></ul>';
    break;
    case 5: builderOutput += '</li></ul></li></ul></li></ul></li></ul>';
    break;
    case 6: builderOutput += '</li></ul></li></ul></li></ul></li></ul></li></ul>';
} //end switch
    tocContainer.setAttribute('aria-labelledby','toc-header');
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
    var panel = this.parentElement.nextElementSibling;
    var header = this.parentElement;
    switch (this.getAttribute('aria-expanded')) {
        case 'true': this.setAttribute('aria-expanded',false);
        panel.removeAttribute('data-show');
        header.removeAttribute('data-show');
        break;
        case 'false': this.setAttribute('aria-expanded',true);
        header.setAttribute('data-show','show');
        panel.setAttribute('data-show','show');
        break;
    };
} //end function

//end accordion
