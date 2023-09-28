document.addEventListener('click', function() {
    var randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var heading = document.querySelector('h1');
heading.addEventListener('mouseover', function() {
    heading.classList.add('animated');
});

heading.addEventListener('animationend', function() {
    heading.classList.remove('animated');
});
