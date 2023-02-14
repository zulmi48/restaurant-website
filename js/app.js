let menu = document.querySelector("#menu");
let navbar = document.querySelector(".navbar");
let darkmode = document.querySelector("#darkmode");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("open");
};
window.onscroll = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("open");
};
darkmode.onclick = () => {
    if (darkmode.classList.contains("bx-moon")) {
        darkmode.classList.replace("bx-moon", "bx-sun");
        document.body.classList.add("dark");
    } else {
        darkmode.classList.replace("bx-sun", "bx-moon");
        document.body.classList.remove("dark");
    }
};
