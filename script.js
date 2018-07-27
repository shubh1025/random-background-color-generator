var color;

function randomColor() {
    color =  '#' + Math.random().toString(16).slice(2, 8);  // Random number converted to hexadecimal with toString(16) and then slice to make it a 6 digit number. like fe2e4d or f4e22e 
};



var change = document.getElementById('color_change');

change.addEventListener('çlick', function() {

    document.getElementById('random_background').style.backgroundColor  = "color" ; 

});



