document.querySelectorAll('.modal-open, .modal-close').forEach((modalButton) => {
    modalButton.addEventListener('click',modalActivate);
});

function modalActivate() {
    var dialogContainer = document.querySelector('#' + this.getAttribute('aria-controls'));
    switch (this.classList.contains('modal-open')) {
        case true:  dialogContainer.showModal();break;
        case false: dialogContainer.close(); break;
    }
}