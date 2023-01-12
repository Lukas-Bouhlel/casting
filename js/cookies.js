const cookieTheme = () =>{
    const change = document.querySelector("#change-theme");
    const body = document.querySelector("body");
    const btn = change.querySelector("img");
    let date = new Date(Date.now() + 86400000);
    date = date.toUTCString();    

    //Change le contenu du cookie par la class du body au click sur le bouton
    const changeImgSvg = (name1, name2) => {
        body.classList.remove(name1);
        body.classList.add(name2);
        btn.src = "../assets/" + name2 + ".svg";
    }

    const changeTheme = () => {
        change.addEventListener("click", () => {
            if(body.getAttribute("class") == "light") {
                changeImgSvg("light", "dark");
            }else {
                changeImgSvg("dark", "light");
            }
            document.cookie = `theme=${body.getAttribute("class")}; expires=${date}; path=/`;
        })
    }
    changeTheme();

    btn.src = "../assets/" + body.getAttribute("class") + ".svg";
    
    //récupérer le bon nom de cookie (theme=) et retourner le contenu correspondant
    const getCookie = (cname) => {
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

    const cookieTheme = getCookie("theme");

    const setCookie = () => {
        if(cookieTheme == "") {
            document.cookie = `theme=dark; expires=${date}; path=/`;
        } else if(body.getAttribute("class") !== cookieTheme) {
            body.classList.remove(body.getAttribute("class"));
            body.classList.add(cookieTheme);
            btn.src = "../assets/" + body.getAttribute("class") + ".svg";
        }
    }
    setCookie();
}
cookieTheme();