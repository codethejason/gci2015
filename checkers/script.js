window.onload = function() {    
  var gameBoard = [ 
    [  0,  1,  0,  1,  0,  1,  0,  1 ],
    [  1,  0,  1,  0,  1,  0,  1,  0 ],
    [  0,  1,  0,  1,  0,  1,  0,  1 ],
    [  0,  0,  0,  0,  0,  0,  0,  0 ],
    [  0,  0,  0,  0,  0,  0,  0,  0 ],
    [  2,  0,  2,  0,  2,  0,  2,  0 ],
    [  0,  2,  0,  2,  0,  2,  0,  2 ],
    [  2,  0,  2,  0,  2,  0,  2,  0 ]
  ];
  
  var dictionary = 
  
  function Piece (element, position) {
    this.element = element;
    this.position = position;
  }
  
  var Board = {
    board: gameBoard,
    element: $('div#board'),
    tilesElement: $('div.tiles'),
    dictionary: ["0vmin", "10vmin", "20vmin", "30vmin", "40vmin", "50vmin", "60vmin", "70vmin", "80vmin", "90vmin"],
    initalize: function () {
      this.clear();
      //8 by 8 board
      for (row in this.board) { //row is the index
        for (column in this.board[row]) { //column is the index
          if(row%2 == 1) {
            if(column%2 == 0)
              this.tilesElement.append("<div class='tile' style='top:"+this.dictionary[row]+";left:"+this.dictionary[column]+";'></div>");
          } else {
            if(column%2 == 1)
              this.tilesElement.append("<div class='tile' style='top:"+this.dictionary[row]+";left:"+this.dictionary[column]+";'></div>");
          }
        }
      }
    },
    clear: function () {
      console.log("Clearing");
    }
  }
  
  Board.initalize();
}