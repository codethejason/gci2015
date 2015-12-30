window.onload = function () {
  var hangman = document.getElementById("hangman");
  var context = hangman.getContext("2d");
  context.strokeStyle = "#000";
  context.lineWidth = 3;

  var draw = function (x1, y1, x2, y2) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
  };

  var stand, hanger, head, body, arms, legs;
  
  stand = function () {
    draw(25,25, 25, 175);
    draw(25, 175, 175, 175);
    draw(25, 25, 175, 25);
  };

  hanger = function () {
    draw(150, 175, 150, 150);
  };

  
};