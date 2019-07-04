const inputGrid = document.querySelector("#jml-grid");
const submitGrid = document.querySelector("#submit-grid");
const colorBlack = document.querySelector("#btn-black");
const colorColorfull = document.querySelector("#btn-color");
const sketContainer = document.querySelector("#sket-container");
const crntColorText = document.querySelector("#crnt-color");
const resetGrid = document.querySelector("#reset-grid");
const BLACK = "black";
const COLORRFULL = "colorfull";


let jmlGrid;
let crntColor;

resetGrid.addEventListener("click", () =>{
    createGrid(jmlGrid);
});

submitGrid.addEventListener("click", () =>{
    if(isNumberValid(inputGrid.value)){
        if(inputGrid.value >= 100){
            return;
        }
        jmlGrid = +inputGrid.value;
        createGrid(jmlGrid);
    }
});

colorBlack.addEventListener("click", () =>{
    crntColor = BLACK;
    crntColorText.textContent = `Warna digunakan saat ini : ${crntColor}`;
});

colorColorfull.addEventListener("click", () =>{
    crntColor = COLORRFULL;
    crntColorText.textContent = `Warna digunakan saat ini : ${crntColor}`;
});

function createGrid(jumlahGrid){
    if(sketContainer.hasChildNodes()){
        removeChild(sketContainer);
    }
    sketContainer.style.gridTemplate =
    `repeat(${jumlahGrid}, 1fr) / repeat(${jumlahGrid}, 1fr)`;
    for(let j = 1; j <= jumlahGrid; j++){
        for(let i = 1; i <= jumlahGrid; i++){
            const divArea = document.createElement("div");
            divArea.style.gridArea = `${j} / ${i} / ${j + 1} / ${i + 1}`;
            divArea.addEventListener("mouseover", e => {
                if(crntColor === BLACK){
                    e.target.style.backgroundColor = "black";
                }else if(crntColor === COLORRFULL){
                    e.target.style.backgroundColor = randomColor();
                }
                
            });
            sketContainer.appendChild(divArea);
        }
    }
}

function init(){
    jmlGrid = 16;
    inputGrid.value = jmlGrid;
    crntColor = BLACK;
    crntColorText.textContent = `Warna digunakan saat ini : ${crntColor}`;
    createGrid(jmlGrid);
}

//Helper

function isNumberValid(input){
    let check = isNaN(input);
    if(check || input === "" || input === "0"){
        return false;
    }
    return true;
}

function removeChild(parent){
    if(parent !== null){
        while(parent.lastChild){
            parent.removeChild(parent.lastChild);
        }
    }
    return;
}

function randomColor(){
    let red = Math.floor((Math.random() * 225));
    let blue = Math.floor((Math.random() * 225));
    let green = Math.floor((Math.random() * 225));
    return `rgb(${red}, ${blue}, ${green})`;
}


init();