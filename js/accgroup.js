// used to control a group of accordions

var accordionGroupButtons = document.querySelectorAll('.acc-group-btn');
accordionGroupButtons.forEach((accordionGroupButtons) => {
    accordionGroupButtons.addEventListener('click',accordionGroupAction);
});

function accordionGroupAction () {
    var accordionGroupContainer = this.parentElement.parentElement;
    var accordionGroupLabel = accordionGroupContainer.getAttribute('data-label');
    var accordionGroupAccButtons = accordionGroupContainer.querySelectorAll('.accordion-button');
    var collapseOrExpand = this.getAttribute('data-coe');
    var ariaExpandedValue;
    // determines if loop later will be looking for expanded or collapsed accordions
    // false means we're expanding all
    // true means we're collapsing all
    switch (collapseOrExpand) {
        case 'c': ariaExpandedValue = 'true'; break;
        case 'e': ariaExpandedValue = 'false'; break;
    }
    accordionGroupAccButtons.forEach((accordionGroupAccButtons) => {
if((accordionGroupAccButtons.getAttribute('aria-expanded')) == ariaExpandedValue) {
    accordionGroupAccButtons.click();
}
    });
    switch(collapseOrExpand) {
        case 'c': ariaLiveHandler(`All accordions in ${accordionGroupLabel} group collapsed.`); break;
        case 'e': ariaLiveHandler(`All accordions in ${accordionGroupLabel} group expanded.`); break;
    }
}