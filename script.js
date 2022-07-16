const mainContainer = document.getElementsByClassName('container')[0];
const gridTile = document.createElement('div');
gridTile.classList.add('grid-tile');


for (let i = 0; i < 256; i++) {
    const gridTile = document.createElement('div');
    gridTile.classList.add('grid-tile');
    mainContainer.appendChild(gridTile);

}

const tiles = document.querySelectorAll('.grid-tile');
tiles.forEach(tile => {
    tile.addEventListener('mouseover', () =>
    {
        tile.classList.add('grid-hover');
    })
});

// Button prompt for a new grid size

const buttonResize = document.getElementById('button-resize');
buttonResize.addEventListener('click', event => {
    
});