let paragraph1 = document.getElementById('anecdotes-numbers');
let paragraph2 = document.getElementById('races-numbers');
let paragraph3 = document.getElementById('firstplace-name');

async function sendRequest(url) {
    return new Promise(resolve => {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', url, true);

        xhr.send();

        xhr.onload = function() {
            if (xhr.status == 200) {
                resolve(JSON.parse(xhr.response));
            } else {
                console.log("Une erreur s'est produite");
            }
        }
    })
}

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
    sendRequest('https://catfact.ninja/breeds')
    .then(res => {
        if (paragraph2 != null) {
            let races = res.total;
            paragraph2.textContent += races;            
        }
        let coat = res.data;
        let tab = [];
        coat.forEach(element => 
            tab.push(element.coat)
        );
        console.log(tab);
        tab2 = [];
        tab.forEach(element => 
            tab2.push(element.length)
        );
        console.log(tab2)
        console.log(Math.max(...tab2));
    });
}