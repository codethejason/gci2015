window.onload = function() {    
  var gameBoard = [
    [  0, -1,  0, -1,  0, -1,  0, -1 ],
    [ -1,  0, -1,  0, -1,  0, -1,  0 ],
    [  0, -1,  0, -1,  0, -1,  0, -1 ],
    [  0,  0,  0,  0,  0,  0,  0,  0 ],
    [  0,  0,  0,  0,  0,  0,  0,  0 ],
    [  1,  0,  1,  0,  1,  0,  1,  0 ],
    [  0,  1,  0,  1,  0,  1,  0,  1 ],
    [  1,  0,  1,  0,  1,  0,  1,  0 ]
  ];
  
  function Piece (element, position) {
    this.element = element;
    this.position = position;
  }
}