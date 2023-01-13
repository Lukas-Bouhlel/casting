import { sendRequest } from "./init.js";

let results = document.getElementById('results');

async function loadAllFunction() {
    races();
}
loadAllFunction();

async function races() {
    sendRequest('https://catfact.ninja/breeds')
    .then(res => {
        let data = res.total;
        results.textContent += data + " résultats";   
    });
}