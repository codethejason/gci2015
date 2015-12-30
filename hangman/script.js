$(document).ready(function () {
  $('.playCircle').on("click", function () {
    $('.introOverlay').css("top", "100%");
  });
  
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  var letters = {
    populate: populate
  }
  
  var populate = function () {
    var lettersForGuessing = $('.lettersForGuessing');
    for(var i = 0; i < alphabet.length; i++) {
      lettersForGuessing.append("<span id='"+alphabet[i]+"' class='letter'>"+alphabet[i].toUpperCase()+"</span>");
    }
  }
  
  var turnUsed = function (letter) {
    var index = alphabet.indexOf(letter);
    $(".letter:eq("+index+")").addClass('used');
  }
  
  var removeUsedAll = function () {
    var letters = $('.letter');
    for(var i = 0; i < alphabet.length; i++) {
      letters.removeClass('used');
    }
  }
  
  populate();
  $('.letter').on("click", function () {
    turnUsed($(this).attr('id'));
  });
  
  var word = {
    word: '',
    wordArray: [],
    get: getWord,
    generate: generateWord,
    fill: fillWord,
    guess: guess
  };
  
  var availableWords = {
    'animals': {"bear", "lion", "kangaroo", "tiger", "frog"},
    'animals': {"bear", "lion", "kangaroo", "tiger", "frog"},
    'animals': {"bear", "lion", "kangaroo", "tiger", "frog"},
    'animals': {"bear", "lion", "kangaroo", "tiger", "frog"},
    'animals': {"bear", "lion", "kangaroo", "tiger", "frog"}
  };
  var getWord = function (category, number) {
    return availableWords.category.number;
  }
  
  var generateWord = function (category) {
    i = Math.ceil(Math.random()*4);
    generatedWord = getWord(category, i);
    var wordArray = [];
    for(var i = 0; i < generatedWord.length; i++) {
        wordArray.push(generatedWord.charAt(i));
    }
    //call methods here
    return generatedWord;
  }

  var fillWord = function(wordArray) {
    var wordDiv = $('.word');
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    for(var i = 0; i < wordArray.length; i++) {
      if(vowels.indexOf(wordArray[i]) != -1) {
        wordDiv.append("<span class='letterInWord'>"+wordArray[i].toUpperCase()+"</span>");
        wordArray[i] = "+"; //to signify it has been replaced
      } else {
        wordDiv.append("<span class='letterInWord'>_</span>");
      }
    }
  }
  
  var guess = function(letter, wordArray) {
    var index, isValidGuess;
    console.log(index);
    //for multiple matches
    while(wordArray.indexOf(letter) != -1) {
      index = wordArray.indexOf(letter);
      console.log(".letterInWord:eq("+index+")");
      $(".letterInWord:eq("+index+")").html(wordArray[index].toUpperCase());
      wordArray[index] = "+"; //to signify it has been guessed
      isValidGuess = true;
    }
    if(isValidGuess) return true;
    return false;
  }
  
  fillWord(['h', 'i', 'v', 'h', 'h']);
  
  guess('h', ['h', 'i', 'v', 'h', 'h']);

});