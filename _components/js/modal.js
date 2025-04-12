// event listeners

document.querySelectorAll('.modal-trigger, .modal-close').forEach((triggerButton) => {
    triggerButton.addEventListener('click', modalActivate)
})

// function

function modalActivate () {
    var dialogContainer = this.closest('modal-dialog').querySelector('dialog');
    if (dialogContainer.hasAttribute('open')) {
dialogContainer.close();
    } else {
        dialogContainer.showDialog();
    }
}