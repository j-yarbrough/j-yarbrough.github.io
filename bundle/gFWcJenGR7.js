window.addEventListener('load',function () {
    document.querySelectorAll('.modal-btn').forEach((dialogButton) => {
        dialogButton.addEventListener('click',modalActivate);
    })
})
function modalActivate() {
    var dialogContainer = document.getElementById(this.getAttribute('aria-controls'));;
    switch (this.hasAttribute('aria-haspopup')) {
        case true:  dialogContainer.showModal();break;
        case false: dialogContainer.close(); break;
    }
}
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