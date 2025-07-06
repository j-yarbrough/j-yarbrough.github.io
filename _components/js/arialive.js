function ariaLiveHandler (messageToAnnounce) {
    var ariaRegion = document.querySelector('aria-live');
    ariaRegion.textContent = '';
    setTimeout(ariaRegion.textContent = messageToAnnounce, 200);
}