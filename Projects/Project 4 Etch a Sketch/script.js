function createGrid(numSquares) {
    const container = document.getElementById('container');
    container.innerHTML = '';

    for (let i = 0; i < numSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }

    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = getRandomColor();
        });
    });
}

function createNewGrid() {
    let numSquares = parseInt(prompt('Enter number of squares per side (max: 100):'));
    if (isNaN(numSquares) || numSquares <= 0 || numSquares > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return;
    }
    createGrid(numSquares * numSquares);
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

window.onload = function () {
    createGrid(256);
};
