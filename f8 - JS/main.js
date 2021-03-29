var element = document.querySelector(".box h1");

var a = 1,
  b = 100;
element.onmouseover = function () {
  var num = Math.floor(Math.random() * b) + a;
  if (num === 10) {
    alert("yes");
  }
  console.log(num);
};
