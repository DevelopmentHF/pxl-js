// Defines initial values of grid
let COLUMNS = 16; 
let ROWS = COLUMNS;
let isMouseDown = false;

const canvas = document.querySelector('#canvas');

// Generates a grid using default values
const generateGrid = function(rows, cols, location) {
    for(let j=0; j<rows; j++) {
        const newRow = document.createElement('div');
        newRow.classList.add("row");
        newRow.style.display = 'flex';
        newRow.style.flex = 1;
        
        for (let i=0; i <cols; i++) {
            const element = document.createElement('div');
            element.classList.add("pixel");
            element.classList.add("unpainted");
            element.classList.add("gridBorder");
            newRow.appendChild(element);
        }
        location.appendChild(newRow);
    }
} 

// add listener for grid toggle
const gridToggle = document.querySelector("#gridToggle");
gridToggle.addEventListener('click', () => {
    const pixels = document.querySelectorAll(".pixel"); // have to get updated pixel info
    pixels.forEach((pixel) => {
        pixel.classList.toggle("gridBorder");
    })
})

// Allows for draggable drawing
document.addEventListener('mousedown', () => isMouseDown = !isMouseDown);
document.addEventListener('mouseup', () => isMouseDown = !isMouseDown);

// Add eraser button listener
isEraserActive = false;
const eraser = document.querySelector("#eraser");
eraser.addEventListener('click', () => isEraserActive = !isEraserActive);

// Colours in pixel after being clicked
const paint = function(pixel) {
    if (isEraserActive) {
        pixel.classList.add("unpainted");
        pixel.classList.remove("painted");
    } else {
        pixel.classList.add("painted");
        pixel.classList.remove("unpainted");
    }
}

// Give functionality to change grid size button
const changeSize = document.querySelector("#gridSize");

changeSize.addEventListener('click', () => {
    canvas.innerHTML = "";
    ROWS = prompt("Enter a new side length:");
    COLUMNS = ROWS;
    generateGrid(ROWS, COLUMNS, canvas);

    // have to re-add the listeners for new pixel elements
    generatePixelListeners();
});

// Lets pixels listen for click and drag events on it
const generatePixelListeners = function() {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach((pixel) => {
        pixel.addEventListener('mousedown', () => {
            paint(pixel);
        })

        pixel.addEventListener('mouseenter', () => {
            if (isMouseDown) {
                paint(pixel);
            }
        })
    })
}

// Generate default grid to be shown
generateGrid(ROWS, COLUMNS, canvas);
generatePixelListeners();