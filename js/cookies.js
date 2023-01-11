function changeClass(name1, name2){
    body.classList.remove(name1)
    body.classList.add(name2)
    btn.src = "icons/" + name2 + ".svg"
}

function getCookie(cname){
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length;i++){
        let c = ca[i];
        while(c.charAt(0) == " "){
            c = c.substring(1);
        }
        if(c.indexOf(name) == 0){
            return c.substring(name.length, c.length)
        }
    }
    return "";
}

if(getCookie("theme").length == 0){
    document.cookie = "theme=light";
}

const change = document.querySelector("#change-theme");
const body = document.querySelector("body");
const btn = change.querySelector("img");
const cookieTheme = getCookie("theme");

change.addEventListener("click", () => {
    if(body.getAttribute("class") == "light") {
        changeClass("light", "dark");
    }else {
        changeClass("dark", "light");
    }
    document.cookie = "theme=" + body.getAttribute("class");
})

if(body.getAttribute("class") == cookieTheme) {
    body.classList.remove(body.getAttribute("class"));
    body.classList.add(cookieTheme);
}

btn.src = "icons/" + body.getAttribute("class") + ".svg";