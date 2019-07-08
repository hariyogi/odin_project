// Class
let kalkulaktor = {
    rumus : "",
    histori : "",
    setRumus(kode) {
        this.rumus += kode;
        
    }
};
// Input & output
const display = document.querySelector("#dsply p");
const button = document.querySelectorAll("button");

button.forEach(function(currentValue, currentIndex, listObj){
    button[currentIndex].addEventListener("click", e => {
        console.log(kalkulaktor.setRumus(e.target.innerText));
        display.textContent = kalkulaktor.rumus;
    });
});

