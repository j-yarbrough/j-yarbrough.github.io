// event listeners

document.querySelectorAll('.modal-trigger').forEach((triggerButton) => {
    triggerButton.addEventListener('click', modalOpen)
});
document.querySelectorAll('.modal-close').forEach((closeButton) => {
    closeButton.addEventListener('click',modalClose);
});

// functions

function modalOpen() {
    document.querySelector('#' + this.getAttribute('aria-controls')).showModal();
}
function modalClose() {
    document.querySelector('#' + this.getAttribute('aria-controls')).close();
}