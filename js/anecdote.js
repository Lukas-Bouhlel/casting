let paragraph = document.getElementById('anecdotes');
let btnAnecdotes = document.querySelector(".button-anecdote");

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