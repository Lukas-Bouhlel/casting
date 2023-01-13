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
export { sendRequest };