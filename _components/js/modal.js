//dialog event listeners

document.querySelectorAll('.modal-trigger').forEach((dialogTrigger) => {
    dialogTrigger.addEventListener('click', triggerDialog)
});
document.querySelectorAll('.modal-close').forEach((dialogCloseBtn) => {
    dialogCloseBtn.addEventListener('click',closeDialog);
});
        
        //functions

function triggerDialog() {
this.parentElement.nextElementSibling.showModal();
}
function closeDialog() {
    this.parentElement.parentElement.close();
}