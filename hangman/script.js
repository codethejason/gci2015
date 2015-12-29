$(document).ready(function () {
  $('.playCircle').on("click", function () {
    $('.introOverlay').css("top", "100%");
  });
  
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  var letters = {
    
  }
  
  var populate = function () {
    var lettersForGuessing = $('.lettersForGuessing');
    for(var i = 0; i < alphabet.length; i++) {
      lettersForGuessing.append("<span class='letter'>"+alphabet[i]+"</span>");
    }
  }
  
  populate();
});