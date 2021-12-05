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
    var builderOutput = '';
    var h2 = document.querySelectorAll('main h2:not(#toc-header)');
    for (var i = 0; i < h2.length; i++) {
        var headingText = h2[i].textContent;
        var headingIdentifier = 'hid' + i;
        h2[i].setAttribute('id',headingIdentifier);
        h2[i].setAttribute('tabindex','-1');
        builderOutput += '<li><a href="#' + headingIdentifier + '">' + headingText + '</a></li>';
    };
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

//recaptcha required

window.onload = function() { 
    var el = document.getElementById('g-recaptcha-response'); 
    if (el) { 
      el.setAttribute('required', 'required'); 
    } 
  }