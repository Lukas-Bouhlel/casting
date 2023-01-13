import { sendRequest } from "./init.js";

let paragraph = document.getElementById('anecdotes');
let btnAnecdotes = document.querySelector(".button-anecdote");

async function loadAllFunction() {
    anecdotes();
}
loadAllFunction();

async function anecdotes() {
    btnAnecdotes.addEventListener("click", () => {
        sendRequest('https://catfact.ninja/fact')
        .then(res => {
            if(paragraph != null){
                    let data = res.fact;
                    paragraph.innerHTML = data;         
            }
        });
    });
}