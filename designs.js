// Pick color
const color = document.getElementById("colorPicker");

// Input size
const pickSize = document.getElementById("sizePicker");
const canvas = document.getElementById("pixelCanvas");
const height = document.getElementById("inputHeight");
const width = document.getElementById("inputWidth");

// function creates grid
function makeGrid() {

// clears canvas
    canvas.innerHTML = '';

    let tr, td;

    for (let i = 0; i < height.value; i++) {
        tr = document.createElement('tr');
        canvas.appendChild(tr);
        for (let j = 0; j < width.value; j++) {
            td = document.createElement('td');
            tr.appendChild(td);

        }
    }
}

// function to choose color
canvas.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target.nodeName === 'TD') {
        event.target.style.backgroundColor = color.value;
    }
});

// function to pick grid size
pickSize.addEventListener("submit", function (mouseEvent) {
    mouseEvent.preventDefault();
    makeGrid();
});