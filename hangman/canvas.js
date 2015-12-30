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
    draw(100, 25, 100, 50);
  };

  head = function () {
    context.beginPath();
    context.arc(100, 60, 10, 0, 2*Math.PI);
    context.stroke();
  };

  stick = function () {
    draw(100, 70, 100, 120);
  };

  arms = function () {
    draw(100, 90, 80, 80); 
    draw(100, 90, 120, 80);
  };

  legs = function () {
    draw(100, 120, 80, 140); 
    draw(100, 120, 120, 140);
  };
  
  stand();
  hanger();
  head();
  stick();
  arms();
  legs();
};