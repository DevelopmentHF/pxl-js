// make flex container flex col.
// make rows, which are flex containers going horizontal
// make 16 elems whcih slot into row containers
// make another row and add it to container
// repeat

const COLUMNS = 16; 
const ROWS = 16;

const canvas = document.querySelector('#canvas');

// give each element class for row and col
for(let j=0; j<ROWS; j++) {
    const newRow = document.createElement('div');
    newRow.style.display = 'flex';
    newRow.style.flex = 1;
    
    for (let i=0; i <COLUMNS; i++) {
        const element = document.createElement('div');
        element.style.minHeight = "20px";
        element.style.minWidth = "20px";
        element.style.flex = 1;
        // element.textContent = `${i}`;
        element.style.borderStyle = 'solid';
        element.style.borderWidth = '2px';
        element.style.backgroundColor = 'gray';
        newRow.appendChild(element);
    }

    canvas.appendChild(newRow);
}
