//dialog event listeners

document.querySelectorAll('.modal-trigger').forEach((dialogTrigger) => {
    dialogTrigger.addEventListener('click', triggerDialog)
});
document.querySelectorAll('.modal-close').forEach((dialogCloseButton) => {
    dialogCloseButton.addEventListener('click',dialogClose)
});
//functions

function triggerDialog() {
document.getElementById(this.ariaControls).showModal();
}

function closeDialog() {
document.getElementById(this.ariaControls).close();
}