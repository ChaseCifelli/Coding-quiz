//var counter = document.querySelector("#counter");
var startbutton = document.querySelector("#start");
var startpage = document.querySelector("#startpage");
var questionpage = document.querySelector("#questionpage");
var secondsLeft = 10;
var timeEl = document.querySelector("#time")
//var count = localStorage.getItem("count");

//counter.textContent = count;

startbutton.addEventListener("click", function() {
 startpage.style.display="none";
 questionpage.style.display="block";
 setTime();
});
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      ;
    }

  }, 1000);
}


