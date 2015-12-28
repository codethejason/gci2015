window.onload = function() {    

  function light(element) {
    this.on = true;
    this.element = element;
  }
  
  function lightSwitch(element) {
    this.position = 'top';
    this.element = element;
  }
  
  var lights[];
  lights[1] = new light(document.getElementsByClassName('lightbulb')[0]);
  lights[2] = new light(document.getElementsByClassName('lightbulb')[0]);
}