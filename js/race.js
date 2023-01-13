import { sendRequest } from "./init.js";

let results = document.getElementById('results');
let selectCoat = document.querySelector("#filtre-pelage");
let selectCountry = document.querySelector("#filtre-country");
let racesCat = document.querySelector("#list-races");
let cat = document.getElementsByClassName("li-cat");
console.log(cat);

async function loadAllFunction() {
    races();
}
loadAllFunction();

async function races() {
    sendRequest('https://catfact.ninja/breeds?limit=1000')
    .then(res => {
        let data = res.total;
        results.textContent += data + " résultats";
        let coats = res.data;
        let coat = [];
        coats.forEach(element => 
            coat.push(element.coat)
        );
        coat = [...new Set(coat)];
        let country = [];
        coats.forEach(element => {
            country.push(element.country)
        })
        country = [...new Set(country)];
        coat.forEach(item => {
            let option = document.createElement('option');
            option.textContent = item;
            option.value = item;
            selectCoat.appendChild(option);
        });
        country.forEach(item => {
            let option = document.createElement('option');
            option.textContent = item;
            option.value = item;
            selectCountry.appendChild(option);
        });
        coats.forEach(item => {
            let li = document.createElement('li');
            li.textContent = item.breed;
            li.id = item.breed;
            li.classList.add("li-cat");
            racesCat.appendChild(li);
        });
    });
}

cat.addEventListener('click', displayCat);

function displayCat() {
    console.log(cat)
}