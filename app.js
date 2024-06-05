const content = document.querySelector(".content");
const increase = document.querySelector(".more");
const decrease = document.querySelector(".less");
let currentSize = document.querySelector(".current-size")

let gridCollection = undefined

let gridDim = 16
const gridSize = 450;

const draw = () => {
    let gridItem = document.querySelectorAll(".grid-item");
    gridItem.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = "black";
        });
    });
}

const generateTiles = () => {

    for (var i = 0; i < gridDim; i++) {
        for (var j = 0; j < gridDim; j++) {
            var gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            gridItem.style.width = gridItem.style.height = `${(gridSize / gridDim)}px`;
            content.appendChild(gridItem);
        }
    }
    draw()
}


generateTiles();


increase.addEventListener("click", function() {
    if (gridDim <= 29){
        gridDim++;
        currentSize.textContent = `${gridDim} X ${gridDim}`
        content.innerHTML = "";
        generateTiles();
    }
});


decrease.addEventListener("click", function() {
    if (3 <= gridDim){
        gridDim--;
        currentSize.textContent = `${gridDim} X ${gridDim}`
        content.innerHTML = "";
        generateTiles();
    }
});









