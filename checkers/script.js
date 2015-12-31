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
    
  var dist = function (x1, y1, x2, y2) {
    return Math.sqrt(Math.pow((x1-x2),2)+Math.pow((y1-y2),2));
  }
  function Piece (element, position) {
    this.element = element;
    this.position = position; //row, column
    this.player = '';
    //figure out player by piece id
    if(this.element.attr("id") < 12)
      this.player = 1;
    else
      this.player = 2;
    this.move = function (where) { //where = 'tl' (top left), 'tr' (top right), 'bl' (bottom left), or 'br' (bottom right)
      this.element.removeClass('selected');
      switch(where) {
        case 'tl': 
          if(!Board.isValidPlacetoMove(this.position[0]-1, this.position[1]-1)) return false;
          Board.board[this.position[0]][this.position[1]] = 0;
          this.position = [this.position[0]-1, this.position[1]-1];
          break;
        case 'tr': 
          if(!Board.isValidPlacetoMove(this.position[0]-1, this.position[1]+1)) return false;
          Board.board[this.position[0]][this.position[1]] = 0;
          this.position = [this.position[0]-1, this.position[1]+1];
          break;
      }
      
      this.element.css('top', Board.dictionary[this.position[0]]);
      this.element.css('left', Board.dictionary[this.position[1]]);
      Board.board[this.position[0]][this.position[1]] = this.player;
      return true;
    };
  }
  
  function Tile (element, position) {
    this.element = element;
    this.position = position;
    this.inRange = function(piece) {
      if(dist(this.position[0], this.position[1], piece.position[0], piece.position[1]) == Math.sqrt(2)) {
        return true;
      }
    };
  }
  
  var pieces = [];
  var tiles = [];
  var Board = {
    board: gameBoard,
    piecesElement: $('div.pieces'),
    tilesElement: $('div.tiles'),
    dictionary: ["0vmin", "10vmin", "20vmin", "30vmin", "40vmin", "50vmin", "60vmin", "70vmin", "80vmin", "90vmin"],
    initalize: function () {
      //8 by 8 board setup tiles
      var countPieces = 0;
      var countTiles = 0;
      for (row in this.board) { //row is the index
        for (column in this.board[row]) { //column is the index
          if(row%2 == 1) {
            if(column%2 == 0) {
              this.tilesElement.append("<div class='tile' id='tile"+countTiles+"' style='top:"+this.dictionary[row]+";left:"+this.dictionary[column]+";'></div>");
              tiles[countTiles] = new Tile($("#tile"+countTiles), [parseInt(row), parseInt(column)]);
              countTiles += 1;
            }
          } else {
            if(column%2 == 1) {
              this.tilesElement.append("<div class='tile' id='tile"+countTiles+"' style='top:"+this.dictionary[row]+";left:"+this.dictionary[column]+";'></div>");
              tiles[countTiles] = new Tile($("#tile"+countTiles), [parseInt(row), parseInt(column)]);
              countTiles += 1;
            }
          }
          if(this.board[row][column] == 1) {
            $('.player1pieces').append("<div class='piece' id='"+countPieces+"' style='top:"+this.dictionary[row]+";left:"+this.dictionary[column]+";'></div>");
            pieces[countPieces] = new Piece($("#"+countPieces), [parseInt(row), parseInt(column)]);
            countPieces += 1;
          } else if(this.board[row][column] == 2) {
            $('.player2pieces').append("<div class='piece' id='"+countPieces+"' style='top:"+this.dictionary[row]+";left:"+this.dictionary[column]+";'></div>");
            pieces[countPieces] = new Piece($("#"+countPieces), [parseInt(row), parseInt(column)]);
            countPieces += 1;
          }
        }
      }
    },
    isValidPlacetoMove: function (row, column) {
      if(this.board[row][column] == 0) {
        return true;
      } return false;
    },
    clear: function () {
      location.reload(); 
    }
  }
  
  Board.initalize();
  
  $('.piece').on("click", function () {
    var selected;
    if($(this).hasClass('selected')) selected = true;
    $('.piece').each(function(index) {$('.piece').eq(index).removeClass('selected')});
    if(!selected) {
      $(this).addClass('selected');
    }
  });
  
  $('#cleargame').on("click", function () {
    Board.clear();
  });
  
  $('.tile').on("click", function () {
    var tileID = $(this).attr("id").replace(/tile/, '');
    var tile = tiles[tileID];
    console.log(tileID);
    var piece = pieces[$('.selected').attr("id")];
    if(tile.inRange(piece)) {
      piece.move(tile.position);
    }
  });
  
}