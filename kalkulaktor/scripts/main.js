// Class
let kalkulaktor = {
    crntValue : "0",
    assign : "",
    lastNumber : null,
    reset : false,
};
// Input & output
const display = document.querySelector("#dsply p");
const histori = document.querySelector("#histori p");
const button = document.querySelectorAll("button");

button.forEach(function(currentValue, currentIndex, listObj){
    button[currentIndex].addEventListener("click", e => {
        if(kalkulaktor.reset){
            reset();
            kalkulaktor.reset = false;
        }
        mulaiHitung(e.target.innerText);
        display.textContent = kalkulaktor.crntValue;
        histori.textContent = (kalkulaktor.lastNumber === null) ? "" : kalkulaktor.lastNumber;
    });
});

function mulaiHitung(kode){
    switch(kode){
        case "C":
            reset();
            break;
        case "Del":
            kalkulaktor.crntValue = delLastChar(kalkulaktor.crntValue);
            break;
        case "x": case "/": case "+": case "-": case "=":case "x2":
            setAssign(kode);
            break;
        case ".": default:
            kalkulaktor.crntValue = appendNumber(kalkulaktor.crntValue, kode);       
    }
}

// Henghapus angka terakhir
function delLastChar(kata){
    kata = kata.substring(0, kata.length - 1);
    return (kata.length === 0) ? "0" : kata;
}

// Melakukan perhintungan
function doMath(assign, value1, value2){
    switch(assign){
        case "x":
            return Number(value1) * Number(value2);
        case "/":
            return Number(value1) / Number(value2);
        case "+":
            return Number(value1) + Number(value2);
        case "-":
            return Number(value1) - Number(value2);
        case "x2":
            return Math.pow(Number(value1), Number(value2)); 
    }
}

// Menambahkan angka
function appendNumber(crntValue, kode){
    if(kode === ".") {
        if(crntValue.includes(".")){
            return crntValue;
        }else{
            return (crntValue === "0") ? "0." : crntValue + ".";
        }
    } 
    return (crntValue === "0") ? kode : crntValue += kode;
}


function setAssign(kode){
    if(kode !== "="){
        setAsign(kode);
    }else{
        sumAll();
    }   
}

function setAsign(kode){
    if(kalkulaktor.lastNumber !== null){
        kalkulaktor.lastNumber = doMath(kalkulaktor.assign, kalkulaktor.lastNumber, kalkulaktor.crntValue);
    }else{
        kalkulaktor.lastNumber = +kalkulaktor.crntValue;
    }
    kalkulaktor.assign = kode;
    kalkulaktor.crntValue = "0";
}

function sumAll(){
    kalkulaktor.lastNumber = doMath(kalkulaktor.assign, kalkulaktor.lastNumber, kalkulaktor.crntValue);
    kalkulaktor.reset = true;
    kalkulaktor.crntValue = "0";
}

function reset(){
    kalkulaktor.crntValue = "0";
    kalkulaktor.assign = "";
    kalkulaktor.lastNumber = null;
}
