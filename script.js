const gridContainer = document.getElementById("grid-container");
let gridSize = 16;
const containerWidth = gridContainer.offsetWidth;
const cellSize = containerWidth / gridSize;

for(let i = 0;i<gridSize;i++){
    const newRow = document.createElement('div');
    newRow.classList.add('row');
    newRow.style.height = cellSize;
    gridContainer.appendChild(newRow);

    for(let i = 0;i<gridSize;i++){
        const newCell = document.createElement('div');
        newCell.classList.add('cell');
        newCell.style.width = gridSize;
        newRow.appendChild(newCell);
    }
}
