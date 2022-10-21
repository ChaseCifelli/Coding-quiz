//var counter = document.querySelector("#counter");
var startbutton = document.querySelector("#start");
var startpage = document.querySelector("#startpage");
var questionpage = document.querySelector("#questionpage");
//var count = localStorage.getItem("count");

//counter.textContent = count;

startbutton.addEventListener("click", function() {
 startpage.style.display="none";
 questionpage.style.display="block";

});


