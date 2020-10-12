var menuBtn = document.getElementById("logoNav")
var sideNav = document.getElementById("sideNav")

sideNav.style.right = "-280px";
menuBtn.onclick = function() {
    if (sideNav.style.right == "-280px") {
        sideNav.style.right = "0";
    } else {
        sideNav.style.right = "-280px";

    }
}