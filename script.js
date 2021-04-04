const gridContainer = document.querySelector('#container')
const clearButton = document.querySelector('#btn')
clearButton.addEventListener('click', setGrid);

window.addEventListener("load", setDefaultGrid);

function setDefaultGrid() {
    setGridSize(16);
    makeRows(16);
  }
  
  function setGridSize(rows) {
    gridContainer.style.gridTemplateColumns = `repeat(${rows}, 1fr)`;
  }

function makeRows(rows) {
    for (i=0; i < (rows * rows );i++){
    const cell = document.createElement('div');
    cell.classList = "grid";
    cell.addEventListener('mouseover', changeColor);
    gridContainer.appendChild(cell);
}
}

function changeColor (e) {
    e.target.style.backgroundColor = "black";
}

function clearGrid () {
    const gridArray = Array.from(gridContainer.childNodes);
    gridArray.forEach((element) => {
        gridContainer.removeChild(element);
    })
}

function changeSize (){
    let size = prompt("Entrez le nombre de case: ");
    size = parseInt(size)
    if (size > 1 && size < 64) {
        setGridSize(size)
        makeRows(size);}
    else if (size < 1 || size > 64){
        alert("Le nombre doit être comrpis entre 1 et 64");
    }
    else {
        return;
    }

    }

function setGrid(){
    clearGrid()
    changeSize()
}