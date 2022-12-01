// Add event listener to submit button
const submitBtn = document.querySelector('.submit-btn')
const table = document.querySelector('#pixelCanvas')
 
submitBtn.addEventListener('click', function(event) {
    event.preventDefault()
    // clear existing grid
    if (table.hasChildNodes()) {
        table.removeChild(table.childNodes[0])
    }
    //call makeGrid()
    makeGrid()
})


const heightInput = document.querySelector('#inputHeight')
const widthInput = document.querySelector('#inputWidth')

// create grid by looping through height and width selected
function makeGrid() {
    let gridHeight = heightInput.value
    let gridWidth = widthInput.value

    for (var h = 0; h < gridHeight; h++) {
        let row = table.insertRow()
        for (var w = 0; w < gridWidth; w++) {
            let cell = row.insertCell()
            cell.addEventListener('click', function (event) {
                let color = document.querySelector('#colorPicker').value
                event.target.style.background = color
            }) 
        }
    }
}

