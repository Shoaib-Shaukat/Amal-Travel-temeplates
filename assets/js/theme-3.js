
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (window.scrollY == 0) {
        document.getElementById("header").style.background = "transparent";
        document.getElementById("header").style.position = "relative";
        document.getElementById("navbar_a1").style.color = "#fff";
        document.getElementById("navbar_a2").style.color = "#fff";
        document.getElementById("navbar_a3").style.color = "#fff";
        document.getElementById("navbar_a4").style.color = "#fff";
        document.getElementById("navbar_a5").style.color = "#fff";
        document.getElementById("navbar_i1").style.color = "#fff";
        document.getElementById("navbar_i2").style.color = "#fff";
        document.getElementById("navbar_i3").style.color = "#fff";
        document.getElementById("navbar_i4").style.color = "#fff";
        document.getElementById("navbar_i5").style.color = "#fff";
    }
    else {
        document.getElementById("header").style.background = "#fff";
        document.getElementById("header").style.position = "fixed";
        document.getElementById("navbar_a1").style.color = "#252525";
        document.getElementById("navbar_a2").style.color = "#252525";
        document.getElementById("navbar_a3").style.color = "#252525";
        document.getElementById("navbar_a4").style.color = "#252525";
        document.getElementById("navbar_a5").style.color = "#252525";
        document.getElementById("navbar_i1").style.color = "#252525";
        document.getElementById("navbar_i2").style.color = "#252525";
        document.getElementById("navbar_i3").style.color = "#252525";
        document.getElementById("navbar_i4").style.color = "#252525";
        document.getElementById("navbar_i5").style.color = "#252525";
    }
}