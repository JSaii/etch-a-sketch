const gridContainer = document.getElementById("grid-container");
const changeSizeBt = document.getElementById("change-size-bt")
const changeGridVisibilityBt = document.getElementById("toggle-grid-bt")

let leftMouseDown = false;

document.addEventListener("mousedown", e => {
  if (e.button === 0) leftMouseDown = true;
});
document.addEventListener("mouseup", e => {
  if (e.button === 0) leftMouseDown = false;
});

changeGridVisibilityBt.addEventListener("click", () => {
    const cells = document.querySelectorAll(".cell");
    const currentBorderColor = getComputedStyle(cells[0]).borderColor;

    if(currentBorderColor !== "rgba(0, 0, 0, 0)"){
        cells.forEach(cell => cell.style.borderColor = "rgb(0,0,0,0)");
        console.log(currentBorderColor);
    } else {
        cells.forEach(cell => cell.style.borderColor = "rgb(0,0,0,0.2)");
    }
})

changeSizeBt.addEventListener("click", () => {
    let newGridSize;
    while (true) {
        newGridSize = prompt("Enter a number between 10 - 100", 16);
        if (newGridSize === null) return;
        if (!newGridSize) continue;
        num = Number(newGridSize);
        if (isNaN(num) || num < 10 || num > 200) continue;
        break;
    }
    createGrid(newGridSize);
})

function createGrid(gridSize){
    const containerWidth = gridContainer.offsetWidth;
    const cellSize = containerWidth / gridSize;

    gridContainer.innerHTML = "";
    for(let i = 0;i<gridSize;i++){
        const newRow = document.createElement('div');
        newRow.classList.add('row');
        newRow.style.height = cellSize;
        gridContainer.appendChild(newRow);

        for(let i = 0;i<gridSize;i++){
            const newCell = document.createElement('div');
            newCell.classList.add('cell');
            newCell.style.width = gridSize;
            newCell.style.backgroundColor = "rgb(0,0,0,0)";
            newRow.appendChild(newCell);
        }
    }
    const cells = document.querySelectorAll(".cell");

    cells.forEach(cell => {
        cell.addEventListener("mouseover", ()=>{
            if (!leftMouseDown) return;
            let current_alpha = parseFloat(getComputedStyle(cell).backgroundColor.split(",")[3]);
            cell.style.backgroundColor = `rgb(0,0,0,${current_alpha + 0.1})`

        })
    })
}

createGrid(16);
