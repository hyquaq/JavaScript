var btnStart = document.querySelector("#start");
var btnStop = document.querySelector("#pause");
var btnReset = document.querySelector("#reset");
var sSeconds = document.querySelector(".seconds");
var sMinutes = document.querySelector(".minutes");
var sTens = document.querySelector(".tens");

var increaseSecond;
var milliseconds = 0;
var seconds = 0;
var minutes = 0;

btnStart.onclick = function () {
  increaseSecond = setInterval(function show() {
    milliseconds++;
    // console.log(milliseconds);

    if (milliseconds <= 9) {
      sTens.innerText = "0" + milliseconds;
    } else {
      sTens.innerText = milliseconds;
    }

    if (milliseconds > 99) {
      seconds++;
      // sSeconds.innerText = "0" + seconds;
      milliseconds = 0;
      sTens.innerText = "00";
    }

    if (seconds <= 9) {
      sSeconds.innerText = "0" + seconds;
    } else {
      sSeconds.innerText = seconds;
    }

    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      sSeconds.innerText = "00";
    }

    if (minutes <= 9) {
      sMinutes.innerText = "0" + minutes;
    } else {
      sMinutes.innerText = minutes;
    }
  }, 10);
};

btnStop.onclick = function () {
  clearInterval(increaseSecond);
  console.log("stop");
};

btnReset.onclick = function () {
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  sMinutes.innerText = "00";
  sSeconds.innerText = "00";
  sTens.innerText = "00";
  clearInterval(increaseSecond);
  console.log("reset");
};
