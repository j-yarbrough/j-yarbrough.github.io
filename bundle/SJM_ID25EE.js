window.addEventListener('load',function() {
    document.querySelectorAll('.acc-header [aria-expanded]').forEach((accButton) => {
        accButton.addEventListener('click',triggerAccordion);
    })
});

function triggerAccordion()  {
    switch (this.ariaExpanded == 'true') {
        case true: this.ariaExpanded = 'false'; break;
        case false: this.ariaExpanded = 'true'; break;
    }
}