const container = document.querySelector(".container");
const GUNTING = "gunting";
const BATU = "batu";
const KERTAS = "kertas";
let crntWinner;
let ronde;
let crntRonde;
let playerScore;
let computerScore;

function setFirstPlay(){
    ronde = 0;
    crntRonde = 1;
    playerScore = 0;
    computerScore = 0;
    crntWinner = "";
    setFirstLayout();
}

function setFirstLayout(){
    const desk = document.createElement("h2");
    const scoreInput = document.createElement("input");
    const button = document.createElement("button");
    scoreInput.classList.add("score");
    desk.textContent = "Selamat datang di permainan suit, Ingin bermain berapa ronde";
    button.classList.add("btn_score");
    button.textContent = "Ayo Main !!"
    button.addEventListener("click", () => {
        if(checkScore(scoreInput.value)){
            ronde = scoreInput.value;
            hpsSemuaChild(container);
            setGameLayout();
        }else{
            scoreInput.classList.add("inputError");
        }
    });
    container.appendChild(desk);
    container.appendChild(scoreInput);
    container.appendChild(button);
}

function setGameLayout() {
    const desk = document.createElement("h2");
    const score = document.createElement("p");
    const gunting = document.createElement("button");
    const batu = document.createElement("button");
    const kertas = document.createElement("button");
    const kesimpulan = document.createElement("p");
    desk.setAttribute("id", "ronde");
    score.setAttribute("id", "crntScore");
    desk.textContent = `RONDE : ${crntRonde}`;
    score.textContent = `${playerScore} : ${computerScore}`;
    gunting.textContent = GUNTING;
    batu.textContent = BATU;
    kertas.textContent = KERTAS;
    gunting.classList.add("gunting");
    batu.classList.add ("batu");
    kertas.classList.add("kertas");
    gunting.addEventListener("click", e => {
        playGame(GUNTING, desk, score, kesimpulan);
    });
    kertas.addEventListener("click", e => {
        playGame(GUNTING, desk, score, kesimpulan);
    });
    batu.addEventListener("click", e => {
        playGame(GUNTING, desk, score, kesimpulan);
    });
    // Insert
    container.appendChild(desk);
    container.appendChild(score);
    container.appendChild(gunting);
    container.appendChild(batu);
    container.appendChild(kertas);
    container.appendChild(kesimpulan);
}

function setResult(){

}

function checkSuit(playerInput, computerInput){
    if(playerInput === computerInput){
        playerScore++;
        computerScore++;
        crntWinner = "draw";
    }
    switch(playerInput){
        case GUNTING : 
            if(computerInput === KERTAS){
                playerScore++;
                crntWinner = "player menang";
            }else if(computerInput === BATU){
                computerScore++;
                crntWinner = "player kalah";
            }
            break;
        case KERTAS : 
            if(computerInput === BATU){
                playerScore++;
                crntWinner = "player menang";
            }else if(computerInput === GUNTING){
                computerScore++;
                crntWinner = "player kalah";
            }
            break;
        case BATU : 
            if(computerInput === GUNTING){
                playerScore++;
                crntWinner = "player menang";
            }else if(computerInput === KERTAS){
                computerScore++;
                crntWinner = "player kalah";
            }
            break;
    }
    crntRonde++;
}

function playGame(playerInput, rondeGui, scoreGui, kesimpulanGui){
    checkSuit(playerInput, getComputerChoice());
    rondeGui.textContent = `RONDE : ${crntRonde}`;
    scoreGui.textContent = `${playerScore} : ${computerScore}`;
    kesimpulanGui.textContent = crntWinner;
    if(crntRonde > ronde){
        const mainLagi = document.createElement("button");
        mainLagi.textContent = "MAIN LAGI";
        mainLagi.setAttribute("id", "mainLagi");
        mainLagi.classList.add("btn_score");
        mainLagi.addEventListener("click", () => {
            hpsSemuaChild(container);
            setFirstPlay();
        });
        rondeGui.textContent="Permainan Selesai";
        container.replaceChild(mainLagi, kesimpulanGui);
    }
}

// Helper Method //

// Check inputan nomer valid. Return "true" jika valid
function checkScore(input){
    let check = isNaN(input);
    if(check || input === ""){
        return false;
    }
    return true;
}


function hpsSemuaChild(parentNode){
    if(parent !== null){
        while (parentNode.lastChild) {
            parentNode.removeChild(parentNode.lastChild);
        }
    }
}

function getComputerChoice(){
    const CHOICE = [BATU, GUNTING, KERTAS];
    return CHOICE[Math.floor((Math.random() * 3))];
}


// Game Start
setFirstPlay();
