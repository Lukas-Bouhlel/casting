import { sendRequest } from "./init.js";

let results = document.getElementById('results');
let selectCoat = document.querySelector("#filtre-pelage");
let selectCountry = document.querySelector("#filtre-country");
let racesCat = document.querySelector("#list-races");
let detailsCat = document.querySelector("#races");

async function loadAllFunction() {
    races();
}
loadAllFunction();

racesCat.addEventListener('click', displayCat);

async function races() {
    sendRequest('https://catfact.ninja/breeds?limit=1000')
    .then(res => {
        let total = res.total;
        results.textContent += total + " résultats";
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
            racesCat.appendChild(li);
        });
    });
}

async function displayCat(e) {
    sendRequest('https://catfact.ninja/breeds?limit=1000')
    .then(res => {
        let allCat = res.data;
        let itemsClick = e.target.textContent;
        allCat.forEach(item => {
            if (itemsClick === item.breed) {
                console.log(item);
                detailsCat.textContent = item.breed += item.country += item.origin += item.coat += item.pattern;
            }
        });
    });
}