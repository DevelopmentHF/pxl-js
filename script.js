// make the paint function draggable


const COLUMNS = 16; 
const ROWS = 16;

const canvas = document.querySelector('#canvas');

const generateGrid = function(rows, cols, location) {
    // give each element class for row and col
    for(let j=0; j<rows; j++) {
        const newRow = document.createElement('div');
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

generateGrid(ROWS, COLUMNS, canvas);

// Colours in pixel after being clicked
const paint = function(pixel) {
    pixel.classList.toggle("unpainted");
    pixel.classList.toggle("painted");
}

// add listener for paint to all pixels
const pixels = document.querySelectorAll(".pixel");

pixels.forEach((pixel) => {
    pixel.addEventListener('click', () => {
        paint(pixel);
    })
})

// add listener for grid toggle
const gridToggle = document.querySelector("#gridToggle");
gridToggle.addEventListener('click', () => {
    pixels.forEach((pixel) => {
        pixel.classList.toggle("gridBorder");
    })
})