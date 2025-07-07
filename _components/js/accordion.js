window.addEventListener('load',function() {
    this.document.querySelectorAll('.accordion-button').forEach((accButton) => {
        accButton.addEventListener('click',triggerAccordion);
    })
});

function triggerAccordion()  {
    switch (this.ariaExpanded == 'true') {
        case true: this.ariaExpanded = 'false'; break;
        case false: this.ariaExpanded = 'true'; break;
    }
}