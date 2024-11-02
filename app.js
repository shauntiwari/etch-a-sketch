const container = document.querySelector('#container');
let gridSize = 25;

const sizeButton = document.createElement('button');
sizeButton.textContent = 'Create New Grid';
sizeButton.classList.add('size-button');

sizeButton.addEventListener('click', function() {
    let newSize = prompt('Enter the new grid size (1-100):');
    newSize = parseInt(newSize);

    if (newSize > 0 && newSize <= 100) {
        gridSize = newSize;
        createGrid(gridSize);
    } else {
        alert('Please choose a number between 1 and 100');
    }
});

document.body.insertBefore(sizeButton, container);

createGrid(gridSize);

function createGrid(size) {
    container.innerHTML = '';
    document.documentElement.style.setProperty('--grid-size', size);
    
    for(let i = 1; i <= size; i++) {
        let newRow = document.createElement('div');
        newRow.classList.add('row');
    
        for(let n = 1; n <= size; n++) {
            let newBox = document.createElement('div');
            newBox.classList.add('box');
            newBox.addEventListener('mouseover', function() {
                this.style.backgroundColor = '#00008B';
            });
            newRow.appendChild(newBox);
        }
    
        container.appendChild(newRow);
    }
}