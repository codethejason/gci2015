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
    this.king = false;
    //figure out player by piece id
    if(this.element.attr("id") < 12)
      this.player = 1;
    else
      this.player = 2;
    this.move = function (tile) { 
      this.element.removeClass('selected'); 
      if(!Board.isValidPlacetoMove(tile.position[0], tile.position[1])) return false;
      if(this.player == 1 && this.king == false) {
        if(tile.position[0] < this.position[0]) return false;
      } else if (this.player == 2 && this.king == false) {
        if(tile.position[0] > this.position[0]) return false;
      }
      Board.board[this.position[0]][this.position[1]] = 0;
      this.position = [tile.position[0], tile.position[1]];
      this.element.css('top', Board.dictionary[this.position[0]]);
      this.element.css('left', Board.dictionary[this.position[1]]);
      Board.board[this.position[0]][this.position[1]] = this.player;
      Board.changePlayerTurn();
      return true;
    };
    this.opponentJump = function (tile) {
      //what direction going to
      var dx = tile.position[1] - this.position[1];
      var dy = tile.position[0] - this.position[0];
      if(this.player == 1 && this.king == false) {
        if(tile.position[0] < this.position[0]) return false;
      } else if (this.player == 2 && this.king == false) {
        if(tile.position[0] > this.position[0]) return false;
      }
      var tileToCheckx = this.position[1] + dx/2;
      var tileToChecky = this.position[0] + dy/2;
      if(!Board.isValidPlacetoMove(tileToChecky, tileToCheckx)) {
        for(pieceIndex in pieces) {
          if(pieces[pieceIndex].position[0] == tileToChecky && pieces[pieceIndex].position[1] == tileToCheckx) {
            if(this.player != pieces[pieceIndex].player) {
              pieces[pieceIndex].remove();
              return true;
            }
          }
        }
        return false;
      }
        
      
      return false;
    };
    this.remove = function () {
      this.element.css("display", "none");
      if(this.player == 1) $('#player2').append("<div class='capturedPiece'></div>");
      if(this.player == 2) $('#player1').append("<div class='capturedPiece'></div>");
      Board.board[this.position[0]][this.position[1]] = 0;
    }
  }
  
  function Tile (element, position) {
    this.element = element;
    this.position = position;
    this.inRange = function(piece) {
      if(dist(this.position[0], this.position[1], piece.position[0], piece.position[1]) == Math.sqrt(2)) {
        return 'regular';
      } else if(dist(this.position[0], this.position[1], piece.position[0], piece.position[1]) == 2*Math.sqrt(2)) {
        return 'jump';
      }
    };
  }
  
  var pieces = [];
  var tiles = [];
  var Board = {
    board: gameBoard,
    playerTurn: 1,
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
    changePlayerTurn: function () {
      if(this.playerTurn == 1) {
        this.playerTurn = 2;
        return;
      }
      if(this.playerTurn == 2) this.playerTurn = 1;
    },
    clear: function () {
      location.reload(); 
    }
  }
  
  Board.initalize();
  
  $('.piece').on("click", function () {
    var selected;
    var isPlayersTurn = ($(this).parent().attr("class").split(' ')[0] == "player"+Board.playerTurn+"pieces");
    if(isPlayersTurn) {
      if($(this).hasClass('selected')) selected = true;
      $('.piece').each(function(index) {$('.piece').eq(index).removeClass('selected')});
      if(!selected) {
        $(this).addClass('selected');
      }
    }
  });
  
  $('#cleargame').on("click", function () {
    Board.clear();
  });
  
  $('.tile').on("click", function () {
    if($('.selected').length != 0) {
      var tileID = $(this).attr("id").replace(/tile/, '');
      var tile = tiles[tileID];
      var piece = pieces[$('.selected').attr("id")];
      var inRange = tile.inRange(piece);
      if(inRange) {
        if(inRange == 'jump') {
          if(piece.opponentJump(tile)) {
            piece.move(tile);
          } 
        } else if(inRange == 'regular') {
          piece.move(tile);
        }
      }
    }
  });
  
}