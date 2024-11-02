let gridSize = 20;
const container = document.querySelector('#container');
document.documentElement.style.setProperty('--grid-size', gridSize);

for(let i = 1; i <= gridSize; i++) {
    let newRow = document.createElement('div');
    newRow.classList.add('row');

    for(let n = 1; n <= gridSize; n++) {
        let newBox = document.createElement('div');
        newBox.classList.add('box');
        newRow.appendChild(newBox);
    }

    container.appendChild(newRow);
}