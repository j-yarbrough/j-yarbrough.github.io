//dialog event listeners

document.querySelectorAll('.modal-trigger').forEach((dialogTrigger) => {
    dialogTrigger.addEventListener('click', triggerDialog)
});
document.querySelectorAll('.modal-close').forEach((dialogCloseButton) => {
    dialogClose.addEventListener('click',dialogClose)
});
//functions

function triggerDialog() {
this.nextElementSibling.showModal();
}

function closeDialog() {
this.parentElement.close();
}