const container = document.querySelector("div");

const content = document.createElement("div");
const parag = document.createElement("p");
const h3 = document.createElement("h3");
const borderContent = document.createElement("div");
const borderH1 = document.createElement("h1");
const borderParag = document.createElement("p");

content.classList.add("content");
content.textContent = "Susu Mbok darmin";
parag.textContent = "Hey aku merah";
parag.style.color = "red";
h3.style.color = "blue";
h3.textContent = "Hey aku biru";
borderContent.style.border = "3px solid red";
borderContent.style.backgroundColor = "pink";
borderH1.textContent = "Saya di di DIV";
borderParag.textContent = "Aku juga";

borderContent.appendChild(borderH1);
borderContent.appendChild(borderParag);

container.appendChild(content);
container.appendChild(borderContent);