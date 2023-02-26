// Countdown script

//Creates an auto-updating countdown for an upcoming event.

// Update the count down every 1 second
var x = setInterval(function() {
    var countdownContainers = document.querySelectorAll('.countdown-container');
    for (var i = 0; i < countdownContainers.length; i++) {
        //retrieve countdown target

        var countDownDate = new Date(countdownContainers[i].getAttribute('data-time')).getTime();

    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="demo"
    countdownContainers[i].innerHTML = days + " days, " + hours + " hours, "
    + minutes + " minutes, " + seconds + " seconds";
  
    // If the count down is finished, write some text
    if (distance < 0) {
      countdownContainers[i].innerHTML = "The event this is counting down to has passed.";
    }}
  }, 1000);
