


function shuffle (){
    const img = document.querySelector("img");
    let random = Math.floor(Math.random() * 5)+1;
    img.setAttribute("src", `assets/${random}.png`)
    
}

function anim (){
    setTimeout( shuffle,500)
    const img = document.querySelector("img");
    img.setAttribute("src", "./assets/dice-rol.gif")
}

