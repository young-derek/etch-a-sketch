const mainContainer = document.getElementsByClassName('container')[0];


for (let i = 0; i < 256; i++)
{
    console.log('lol');
    const div = document.createElement('div');
    div.classList.add('grid-tile');
    mainContainer.appendChild(div);
}