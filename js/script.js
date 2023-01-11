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
        let data = res.total;
        paragraph1.textContent += data;
    });
}


async function races() {
    sendRequest('https://catfact.ninja/breeds')
    .then(res => {
        let races = res.total;
        paragraph2.textContent += races;
        // let coat = res.data;
        // var tab = [];
        // coat.forEach(element => 
        //     tab.push(element.coat)
        // );
        // console.log(tab.toString());
    });
}