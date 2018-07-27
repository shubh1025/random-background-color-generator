

function randomColor() // return a random hexadecimal number
{
  return '#' + Math.random().toString(16).slice(2, 8);  // Random number converted to hexadecimal with toString(16) and then slice to make it a 6 digit number. like fe2e4d or f4e22e 
};



var change = document.getElementById('color_change'); // initialized a variable change to button with id 'color change'  

change.addEventListener('click', function() // anonymous function that changes the background color of body with each click event  
{
    document.getElementById('random_background').style.backgroundColor  = randomColor() ;  
});



