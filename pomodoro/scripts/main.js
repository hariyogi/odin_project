const SESION = "sesion";
const BREAK = "break";
let sesionStart = 0;
let currentTime = 0;
let breakTime = 0;
let interval;
let isStop = false;
let giliran = "";

const sesionText = document.getElementById("sesion");
const breakText = document.getElementById("break");
const tambahSesion = document.getElementById("tmbh-sesion");
const kurangSesion = document.getElementById("krng-sesion");
const tambahBreak = document.getElementById("tmbh-break");
const kurangBreak = document.getElementById("krng-break");
const reset = document.getElementById("reset");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const stop = document.getElementById("stop");
const time = document.getElementById("time");

function init(){
    sesionStart = conMinuteToSecond(25);
    breakTime = conMinuteToSecond(5);
    currentTime = sesionStart;
    giliran = SESION;
    updateSesion();
    updateBreak();
    updateTime();
    eventHandler();
}

function eventHandler(){
    tambahBreak.addEventListener("click", () =>{
        resetInterval();
        updateBreak("+");
    });

    kurangBreak.addEventListener("click", () =>{
        resetInterval();
        updateBreak("-");
    });

    tambahSesion.addEventListener("click", () =>{
        resetInterval();
        updateSesion("+");
    });

    kurangSesion.addEventListener("click", () =>{
        resetInterval();
        updateSesion("-");
    });

    play.addEventListener("click", () =>{
        resetInterval();
        if(isStop){
            giliran = SESION;
            currentTime = sesionStart;
            isStop = false;
        }
        interval = setInterval(playTimer, 1000);
    });

    pause.addEventListener("click", () =>{
        if(interval !== null){
            clearInterval(interval);
        }
    });

    reset.addEventListener("click", () =>{
        resetAll();
    });

    stop.addEventListener("click", ()=>{
        resetInterval();
        isStop = true;
    });
}

// Update waktu sesion, command antara + dan -
function updateSesion(command){
    if(command === "+"){
        if(sesionStart < conMinuteToSecond(60)) {
            sesionStart += 60;
        } else alert("Maksimal 60 Menit");
    }else if(command === "-"){
        if(sesionStart > conMinuteToSecond(1)) {
            sesionStart -= 60;
        } else alert("Minimun 1 Menit");
    }
    sesionText.textContent = conSecondsToMinutes(sesionStart);
    currentTime = sesionStart;
    updateTime();
}

// Update waktu break, command anatara + dan -
function updateBreak(command){
    if(command === "+"){
        if(breakTime < conMinuteToSecond(15)) {
            breakTime += 60;
        } else alert("Maksimal 15 Menit");
    }else if(command === "-"){
        if(breakTime > conMinuteToSecond(1)) {
            breakTime -= 60;
        } else alert("Minimun 1 Menit");
    }
    breakText.textContent = conSecondsToMinutes(breakTime);
}

// Update waktu timer
function updateTime(){
    let minute = conSecondsToMinutes(currentTime);
    let seconds = currentTime - minute * 60;
    let minutesText = "";
    let secondsText = "";
    
    if(minute === 0){
        minutesText = "00";
    }else if(minute < 10 && minute > 0){
        minutesText = "0" + minute;
    }else minutesText = minute;

    if(seconds === 0){
        secondsText = "00";
    }else if(seconds < 10 && seconds > 0){
        secondsText = "0" + seconds;
    }else secondsText = seconds;
    
    time.textContent =  `${minutesText}.${secondsText}`;
}

// Mainkan Timer
function playTimer(){
    currentTime--;    
    updateTime();
    if(interval !== null && currentTime <= 0){
        if(giliran === SESION){
            currentTime = breakTime;
            giliran = BREAK;
            time.style.color = "#2ff22f";
        }else{
            currentTime = sesionStart;
            giliran = SESION;
            time.style.color = "white";
        }
    }
}

function resetAll(){
    resetInterval();
    sesionStart = conMinuteToSecond(25);
    breakTime = conMinuteToSecond(5);
    currentTime = sesionStart;
    giliran = SESION;
    updateSesion();
    updateBreak();
}


// Helper //

function conMinuteToSecond(minutes){
    return minutes * 60;
}

function conSecondsToMinutes(seconds){
    return Math.floor(seconds / 60);
}

function resetInterval(){
    if(interval !== null){
        clearInterval(interval);
    }
}

// Start
init();