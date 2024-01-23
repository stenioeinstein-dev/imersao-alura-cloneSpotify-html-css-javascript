var wAtual;
var xAtual;

var hAtual;
var yAtual;

document.getElementById("sidebar_navigation").addEventListener("click", e => {
    let element = e.target.parentNode;

    element.classList.add('redimensionavel');

    wAtual = element.clientWidth;
    xAtual = event.clientX;

    hAtual = element.clientHeight;
    yAtual = event.clientY;

});

document.addEventListener('mousemove', () => {
    if (document.getElementById('sidebar_navigation').parentNode.classList.contains
        ('redimensionavel'))
        redimencionar(wAtual, xAtual)
});

document.addEventListener('mousedown', () => {
    document.getElementsByClassName('redimensionavel')[0].classList.remove
        ('redimensionavel');
});

function redimencionar(wAtual, xAtual, hAtual, yAtual) {
    let x = wAtual + (event.clientX - xAtual) + 'px';

    document.getElementsByClassName('redimensionavel')[0].style.width = x;
}