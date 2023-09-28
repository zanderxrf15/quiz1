// Add event listener to change the background color on click
document.addEventListener('click', function() {
    var randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
});

// Function to generate a random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Add animation to the heading
var heading = document.querySelector('h1');
heading.addEventListener('mouseover', function() {
    heading.classList.add('animated');
});

heading.addEventListener('animationend', function() {
    heading.classList.remove('animated');
});
