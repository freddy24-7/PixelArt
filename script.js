// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

    // The three below variables are used to create the table
    let tableArea = document.getElementById('pixelCanvas');//the table area or the whole "canvas"
    const rows = document.getElementById('inputHeight').value;//will be used to define the number of rows or "height"
    const columns = document.getElementById('inputWidth').value;//will be used to define number of columns

    // If table-grid already present, the below while loop clears cells so that new table can be created
    while (tableArea.firstChild) {//defines pre-existing table area
        tableArea.removeChild(tableArea.firstChild);//removes pre-existing table
    }

    // Creates rows and cells through a for loop
    for (let i = 1; i <= rows; i++) {
        let row = document.createElement('tr');//creating rows
        tableArea.appendChild(row);//appending rows
        for (let j = 1; j <= columns; j++) {
            let cell = document.createElement('td');//creating columns/cells
            row.appendChild(cell);//appending columns/cells
        }
    }
}

const chooseSize = document.getElementById('sizePicker');//defining variable that allows user to submit/select table size
chooseSize.addEventListener('submit', function(event) {//event-listener defines size of table based on user input
    event.preventDefault(); // to prevent the 1x1 default in the table
    makeGrid(); // runs the earlier defined function and displays (still colorless) table grid
});

//tableArea variable declared here as well as it was earler declared only locally
let tableArea = document.getElementById('pixelCanvas');
tableArea.addEventListener('click', function(event) {// eventlistener added for click-events on table
    let cell = event.target;// defining the event target
    if (cell.tagName = 'TD') {// this condition holds for all cells in grid
        cell.style.backgroundColor = colorPicker.value;// allows the user to choose color

    }
});

