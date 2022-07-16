const mainContainer = document.getElementsByClassName('container')[0];
let gridSize = 16;

createGrid(gridSize);

function createGrid(gridSize)
{
    for (let i = 0; i < (gridSize * gridSize); i++) {
        const gridTile = document.createElement('div');
        gridTile.classList.add('grid-tile');
        mainContainer.appendChild(gridTile);
        gridTile.addEventListener('mouseover', () => {
            let randomColor = `${Math.floor(Math.random() * 255)},
            ${Math.floor(Math.random() * 255)},
            ${Math.floor(Math.random() * 255)}`
            gridTile.style.backgroundColor = `rgb(${randomColor})`;
        })
        gridTile.style.width = `calc(100% / ${gridSize})`;
        gridTile.style.height = `calc(80vw / ${gridSize})`;
        gridTile.style.maxHeight = `calc(600px / ${gridSize})`;
    }
}

const buttonResize = document.getElementById('button-resize');
buttonResize.addEventListener('click', event => {
    let newGridSize = parseInt(prompt('Enter a new size for the grid (up to 100):'));

    if (typeof newGridSize === "number"
        && newGridSize > 0
        && newGridSize <= 100) {

        mainContainer.textContent = "";

        createGrid(newGridSize);
    }
    else {
        alert('Error - Enter a whole number between 1 and 100.');
    }
});

