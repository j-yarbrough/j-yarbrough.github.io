// used to control a group of accordions

var accordionGroupButtons = document.querySelectorAll('.acc-group-collapse-btn, .acc-group-expand-btn');

accordionGroupButtons.forEach((accordionGroupButtons) => {
    accordionGroupButtons.addEventListener('click',accordionGroupAction);
});

addAccGroupIdentifier();

function addAccGroupIdentifier() {
    var accGroupContainer = document.querySelectorAll('.accordion-group-container');
    accGroupContainer.forEach((accGroupContainer) => {
        var containerIDValue = accGroupContainer.getAttribute('id');
        var groupButtons = accGroupContainer.querySelectorAll('.accordion-button')
        groupButtons.forEach((groupButtons) => {
            groupButtons.setAttribute('data-accgroup',containerIDValue)
        })
    })
}

function accordionGroupAction () {
    var accordionGroupContainer = this.parentElement.parentElement;
    var accordionGroupAccButtons = accordionGroupContainer.querySelectorAll('.accordion-button');
    var collapseOrExpand = this.getAttribute('class');
    var ariaExpandedValue;
    switch (collapseOrExpand) {
        case 'acc-group-expand-btn': ariaExpandedValue = 'true'; break;
        case 'acc-group-collapse-btn': ariaExpandedValue = 'false';
    }
    accordionGroupAccButtons.forEach((accordionGroupAccButtons) => {
        if ((accordionGroupAccButtons.getAttribute('aria-expanded')) != ariaExpandedValue) {
            accordionGroupAccButtons.click();
        }
    })
}