const resetButton = document.createElement('button');
resetButton.innerText = "Reset!";
const container = document.getElementById("container");
//resetButton.add.className = "reset-button";
document.body.appendChild(resetButton);


let rowsCols = prompt("Enter the size you want.");
//let cols = prompt("Enter the number COLUMNS you want.");

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);


function setupGrid() {
    let rows = rowsCols;
    let cols = rowsCols;
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.addEventListener('mouseover', changeColor);
        cell.addEventListener('mousedown', changeColor);
        container.appendChild(cell).className = "grid-item";
  };
}

setupGrid(rowsCols);


function changeColor(e) {
    if (e.type === 'mouseover' && mouseDown) {
        e.target.style.backgroundColor = 'black'
    } else {
        return;
    }
}


function clearContainer() {
    container.innerText = '';
    setupGrid();
    return rowsCols;
}

resetButton.addEventListener('click', clearContainer)












