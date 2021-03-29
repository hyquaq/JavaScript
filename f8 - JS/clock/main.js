var time = document.querySelector(".control .time");

setInterval(function () {
  time.innerHTML = new Date().toTimeString(0).substring(0, 8);
}, 1000);
