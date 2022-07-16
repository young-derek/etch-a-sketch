const mainContainer = document.getElementsByClassName('container')[0];

for (let i = 0; i < 256; i++) {
    const gridTile = document.createElement('div');
    gridTile.classList.add('grid-tile');
    mainContainer.appendChild(gridTile);
    gridTile.addEventListener('mouseover', () => {
        gridTile.classList.add('grid-hover');
    })
}

// Button prompt for a new grid size
const buttonResize = document.getElementById('button-resize');
buttonResize.addEventListener('click', event => {
    let newGridSize = parseInt(prompt('Enter a new size for the grid (up to 100):'));

    if (typeof newGridSize === "number"
        && newGridSize > 0
        && newGridSize <= 100) {
        while (mainContainer.firstChild) {
            mainContainer.removeChild(mainContainer.lastChild);
        }

        for (let i = 0; i < (newGridSize * newGridSize); i++) {
            const gridTile = document.createElement('div');
            gridTile.classList.add('grid-tile');
            mainContainer.appendChild(gridTile);
            gridTile.addEventListener('mouseover', () => {
                gridTile.classList.add('grid-hover');
            })
            gridTile.style.width = `calc(100% / ${newGridSize})`;
            gridTile.style.height = `calc(80vw / ${newGridSize})`;
            gridTile.style.maxHeight = `calc(600px / ${newGridSize})`;
        }
    }
    else {
        alert('Error - Enter a whole number between 1 and 100.');
    }
});