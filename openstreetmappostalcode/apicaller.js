window.onload = function() {    
    getLocation = function(event) {
        event.preventDefault();
        
        var codeelement = document.getElementById('postalcode');
        var value = codeelement.value;
        console.log(value);
        var request = new XMLHttpRequest();
        var url = 'http://nominatim.openstreetmap.org/search?format=xml&postalcode='+value;
        
        request.onreadystatechange = function() {
            if (request.readyState == 4 && request.status == 200) { 
                
            }
        }
        
        request.open('GET', url, true)
    }
    
    submitbtn = document.getElementById('submit');
    submitbtn.addEventListener('click', getLocation, false);
}