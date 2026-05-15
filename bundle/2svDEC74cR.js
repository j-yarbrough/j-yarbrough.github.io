window.addEventListener('load',function() {
    document.querySelectorAll('.acc-header [aria-expanded]').forEach((accButton) => {
        accButton.addEventListener('click',triggerAccordion);
    })
});

function triggerAccordion()  {
    var setTo = this.getAttribute('aria-expanded') == 'true' ? 'false' : 'true';
    this.setAttribute('aria-expanded',setTo);
}
function ariaLiveHandler (messageToAnnounce) {
    var ariaRegion = document.querySelector('#aria-live');
    ariaRegion.textContent = '';
    setTimeout(ariaRegion.textContent = messageToAnnounce, 200);
}