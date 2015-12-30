//initialize variables
var stand, hanger, head, stick, arms, legs;

//make a prototype to be used in script.js
Array.prototype.allValuesSame = function() {
  for(var i = 1; i < this.length; i++) {
      if(this[i] !== this[0])
          return false;
  }
  return true;
}