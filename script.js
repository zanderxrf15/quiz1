// Add event listener to change the background color on click
document.addEventListener('click', function() {
    var randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
});

// Add animation to the heading
var heading = document.querySelector('h1');
heading.addEventListener('mouseover', function() {
    heading.classList.add('animated');
});

heading.addEventListener('animationend', function() {
    heading.classList.remove('animated');
});
