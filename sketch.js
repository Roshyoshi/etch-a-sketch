let mouseDown = false;

function createGrid(mainDiv, squares) {
  removeChildren(mainGrid);
  let row, square;
  for (let i = 0; i < squares; i++) {
    row = document.createElement("div");
    for (let j = 0; j < squares; j++) {
      square = document.createElement("div");
      square.classList.add("square");
      row.appendChild(square);
    }
    row.classList.add("row");
    mainDiv.appendChild(row);
  }
  return;
}

function removeChildren(parent) {
  while (parent.lastChild) {
    parent.removeChild(parent.lastChild);
  }
  return;
}

function toggleMouse(e) {
  e.stopPropagation();
  mouseDown = mouseDown ? false : true;
  fillSquare(e);
}

function fillSquare(e) {
  e.stopPropagation();
  if (e.target.getAttribute("class") !== "square") return;
  if (mouseDown === true) {
    e.target.classList.add("active");
  }
}
function handleInput(input, grid) {
  console.log("e");
  if (input === "") {
    createGrid(grid, 10);
  } else if (isNaN(input)) {
    errormessage.textContent = "Invalid grid size!";
    return;
  } else if (Number(input) < 1 || Number(input) > 100) {
    errormessage.textContent = "Grid size must be between 1 and 100.";
    return;
  } else {
    errormessage.textContent = "";
    createGrid(grid, Number(input));
  }
}

window.addEventListener("mousedown", toggleMouse);
window.addEventListener("mouseup", toggleMouse);
const mainGrid = document.getElementById("grid");
createGrid(mainGrid, 10);
const squares = document.querySelectorAll(".square");
squares.forEach(() => addEventListener("mouseover", fillSquare));

const changeSizeButton = document.getElementById("newgridbutton");
const changeSizeInput = document.getElementById("newgridinput");
const errormessage = document.getElementById("newgriderror");
changeSizeButton.addEventListener("click", (e) => {
  console.log(e);
  handleInput(changeSizeInput.value, mainGrid);
});
