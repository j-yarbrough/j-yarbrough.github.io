window.addEventListener('load',function() {
    document.querySelectorAll('.acc-header [aria-expanded]').forEach((accButton) => {
        accButton.addEventListener('click',triggerAccordion);
    })
});

function triggerAccordion()  {
    this.ariaExpanded = this.getAttribute('aria-expanded') == 'true' ? 'false' : 'true';
}