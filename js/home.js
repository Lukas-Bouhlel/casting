import { sendRequest } from "./init.js";

let paragraph1 = document.getElementById('anecdotes-numbers');
let paragraph2 = document.getElementById('races-numbers');
let paragraph3 = document.getElementById('firstplace-name');

async function loadAllFunction() {
    anecdotes();
    races();
}
loadAllFunction();

async function anecdotes() {
    sendRequest('https://catfact.ninja/facts')
    .then(res => {
        if(paragraph1 != null){
            let data = res.total;
            paragraph1.textContent += data;            
        }
    });
}


async function races() {
    sendRequest('https://catfact.ninja/breeds?limit=100000')
    .then(res => {
        if (paragraph2 != null) {
            let races = res.total;
            paragraph2.textContent += races;            
        }
        let coats = res.data;
        let tab = [];
        coats.forEach(element => 
            tab.push(element.coat)
        );
        let coat = [...new Set(tab)];
        const newCoat = coat.map(pelage => {
            return {pelage, compteur: 0};
        });
        for(let i = 0; i < tab.length;i++){
            switch (true) {
                case newCoat[0].pelage === tab[i]:
                    newCoat[0].compteur++;
                    break;
                case newCoat[1].pelage === tab[i]:
                    newCoat[1].compteur++;
                    break;
                case newCoat[2].pelage === tab[i]:
                    newCoat[2].compteur++;
                    break;
                case newCoat[3].pelage === tab[i]:
                    newCoat[3].compteur++;
                    break;
                case newCoat[4].pelage === tab[i]:
                    newCoat[4].compteur++;
                    break;
                case newCoat[5].pelage === tab[i]:
                    newCoat[5].compteur++;
                    break;
                case newCoat[6].pelage === tab[i]:
                    newCoat[6].compteur++;
                    break;
                case newCoat[7].pelage === tab[i]:
                    newCoat[7].compteur++;
                    break;    
                case newCoat[8].pelage === tab[i]:
                    newCoat[8].compteur++;
                    break;    
                case newCoat[9].pelage === tab[i]:
                    newCoat[9].compteur++;
                    break;    
                case newCoat[10].pelage === tab[i]:
                    newCoat[10].compteur++;
                    break;    
                case newCoat[11].pelage === tab[i]:
                    newCoat[11].compteur++;
                    break;    
                case newCoat[12].pelage === tab[i]:
                    newCoat[12].compteur++;
                    break;    
                case newCoat[13].pelage === tab[i]:
                    newCoat[13].compteur++;
                    break;  
                case newCoat[14].pelage === tab[i]:
                    newCoat[14].compteur++;
                    break;  
                case newCoat[15].pelage === tab[i]:
                    newCoat[15].compteur++;
                    break;  
            }
        }
        const bestCoat= newCoat.reduce(
            (prev, current) => {
              return prev.compteur > current.compteur ? prev : current
            }
        );
        if (paragraph3 != null) {
            paragraph3.textContent += bestCoat.pelage;            
        }
    });
}