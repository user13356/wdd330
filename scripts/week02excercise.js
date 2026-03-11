const countDisplay = window.document.getElementById("countdown");
const button = window.document.getElementById("startbutton");

button.addEventListener("click",function(){

  let x = 10;

  const timer = setInterval(() => {

    countDisplay.innerHTML = x;

    x--;

    if (x < 0) {
      clearInterval(timer);
      countDisplay.innerHTML = "Time's up!";
    }

  }, 1000);

});




