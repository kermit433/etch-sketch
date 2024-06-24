const Box = document.querySelector(".Container .Box");
const sizeButton = document.querySelector("#dimensions")
let width = 16;
let height = 16;


for (let i = 0; i < 16; i++) {
    const newDiv = document.createElement("div");
    newDiv.layout = "flex";
    newDiv.classList.add("Rectangle");
    Box.appendChild(newDiv);

    for (let i = 0; i < 16; i++) {
        const square = document.createElement("span");
        square.classList.add("Square");
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "Black";

        })
        newDiv.appendChild(square);

    }
}

function makeGrid(width, height) {
    Box.innerHTML = "";
    for (let i = 0; i < height; i++) {
        const newDiv = document.createElement("div");
        newDiv.layout = "flex";
        newDiv.classList.add("Rectangle");
        Box.appendChild(newDiv);
    
        for (let i = 0; i < width; i++) {
            const square = document.createElement("span");
            square.classList.add("Square");
            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = "Black";
    
            })
            newDiv.appendChild(square);
    
        }
    }

}

sizeButton.addEventListener("click", () => {
    width = prompt("Enter grid squares across: ");
    height = prompt("Enter grid squares down");
    makeGrid(width, height);
})
