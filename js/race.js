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
        filter(coats, selectCountry);
        filter(coats, selectCoat);
        coats.forEach(item => {
            let li = document.createElement('li');
            li.textContent = item.breed;
            racesCat.appendChild(li);
        });
    });
}

async function filter(tab, classElementHtml) {
    let array = [];
    tab.forEach(element => {
        if(classElementHtml === selectCountry){
            array.push(element.country)
        } else if (classElementHtml === selectCoat) {
            array.push(element.coat)
        }
    })
    array = [...new Set(array)];
    array.forEach(item => {
        let option = document.createElement('option');
        option.textContent = item;
        option.value = item;
        classElementHtml.appendChild(option);
    });
}

async function displayCat(e) {
    sendRequest('https://catfact.ninja/breeds?limit=1000')
    .then(res => {
        let allCat = res.data;
        let itemsClick = e.target.textContent;
        allCat.forEach(item => {
            if (itemsClick === item.breed) {
                detailsCat.textContent = item.breed += item.country += item.origin += item.coat += item.pattern;
            }
        });
    });
}