window.addEventListener('load',function() {
    document.querySelectorAll('.acc-header [aria-expanded]').forEach((accButton) => {
        accButton.addEventListener('click',function() {
            this.ariaExpanded = this.ariaExpanded == 'true' ? 'false' : 'true';
        });
    })
});