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