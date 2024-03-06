const header = document.querySelector("header")

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 120)
})


let menu = document.querySelector("#menu-icon")
let navlist = document.querySelector(".navlist")

menu.onclick = () => {
    menu.classList.toggle("bx-x")
    navlist.classList.toggle("active")
}

window.onscroll = () => {
    menu.classList.remove("bx-x")
    navlist.classList.remove("active")
}


/* mudando o icone modo escuro para claro a imagem de perfil*/
const modeToggle = document.getElementById("mode_toggle");
const body = document.body;
const aboutImg = document.getElementById("about-img");

modeToggle.addEventListener("click", function () {
    body.classList.toggle("light-mode");
    if (body.classList.contains("light-mode")) {
        modeToggle.innerHTML = '<i class="ri-moon-line"></i>';
        aboutImg.querySelector("img").src = aboutImg.querySelector("img").getAttribute("data-light");
    } else {
        modeToggle.innerHTML = '<i class="ri-sun-line"></i>';
        aboutImg.querySelector("img").src = aboutImg.querySelector("img").getAttribute("data-dark");
    }
});



/*Biblioteca de animaçao*/
var typingEffect = new Typed(".typedText", {
    strings: ["Plogr", "Progri", "Programador"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
})