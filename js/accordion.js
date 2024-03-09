// Script for accordions, nav collapse

var accordionButtons = document.querySelectorAll('.accordion-button');
accordionButtons.forEach((accordionButtons) => {
    accordionButtons.addEventListener('click',triggerAccordion)
});

function triggerAccordion() {
    var accordionPanel = this.parentElement.nextElementSibling;
    var accordionIndicator = this.firstElementChild;
    switch (this.getAttribute('aria-expanded')) {
        case 'true': this.setAttribute('aria-expanded',false);
        accordionIndicator.innerHTML = '&rarr;';
        break;
        case 'false': this.setAttribute('aria-expanded',true);
        accordionIndicator.innerHTML = '&darr;';
        break;
    };
    accordionPanel.classList.toggle('accordion-panel-show')
    accordionPanel.classList.toggle('accordion-panel-hide')
    if (this.hasAttribute('data-accgroup')) {accGroupTogglerChecker(this)}
}

function accGroupTogglerChecker(buttonClicked) {
    var GroupContainerIDValue = buttonClicked.getAttribute('data-accgroup');
    var groupContainerThingy = document.querySelector('#' + GroupContainerIDValue);
    var groupContainerThingyAccButtons = groupContainerThingy.querySelectorAll('.accordion-button');
    var collapsedAccCount = 0;
    var expandedAccCount = 0;
    var expandControl = groupContainerThingy.querySelector('.acc-group-expand-btn');
    var collapseControl = groupContainerThingy.querySelector('.acc-group-collapse-btn');
    groupContainerThingyAccButtons.forEach((groupContainerThingyAccButtons) => {
        if ((groupContainerThingyAccButtons.getAttribute('aria-expanded')) == 'true') {
            expandedAccCount++;
        } else {
            collapsedAccCount++;
        }
    });
    if(expandedAccCount == 0) {
        expandControl.setAttribute('aria-pressed','false');
        collapseControl.setAttribute('aria-pressed','true');
    } else if (collapsedAccCount== 0) {
        collapseControl.setAttribute('aria-pressed','false');
        expandControl.setAttribute('aria-pressed','true');
    } else {
        expandControl.setAttribute('aria-pressed','mixed');
        collapseControl.setAttribute('aria-pressed','mixed');
    }
}