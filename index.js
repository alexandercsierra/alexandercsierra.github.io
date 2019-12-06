let body = document.body;
let nav = document.querySelector("nav");
body.addEventListener("wheel", e => {
    nav.style.background = "rgba(0,0,0,.8)";
});