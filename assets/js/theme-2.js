
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (window.scrollY == 0) {
        document.getElementById("header").style.position = "relative";
    }
    else {
        document.getElementById("header").style.position = "fixed";
    }
}