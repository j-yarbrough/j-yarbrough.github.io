window.addEventListener('load',function() {
    document.querySelectorAll('.acc-header [aria-expanded]').forEach((accButton) => {
        accButton.addEventListener('click',function() {
            this.ariaExpanded = this.ariaExpanded == 'true' ? 'false' : 'true';
        });
    })
});
function ariaLiveHandler (messageToAnnounce) {
    var ariaRegion = document.querySelector('#aria-live');
    ariaRegion.textContent = '';
    setTimeout(ariaRegion.textContent = messageToAnnounce, 200);
}