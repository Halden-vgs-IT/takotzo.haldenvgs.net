window.onload = oppstart;

function oppstart() {
    document.getElementById("box").onmouseover = pink;
    document.getElementById("box").onmouseleave = nonpink;
    document.getElementById("box2").onmouseover = gray;
    document.getElementById("box2").onmouseleave = nongray;
    document.getElementById("box3").onmouseover = blue;
    document.getElementById("box3").onmouseleave = nonblue;
    document.getElementById("box4").onmouseover = purple;
    document.getElementById("box4").onmouseleave = nonpurple;
}

function pink() {
    document.getElementById("box").style.backgroundColor = "pink";
}
function nonpink() {
    document.getElementById("box").style.backgroundColor = "lightyellow";
}
function gray() {
    document.getElementById("box2").style.backgroundColor = "gray";
}
function nongray() {
    document.getElementById("box2").style.backgroundColor = "lightyellow";
}
function blue() {
    document.getElementById("box3").style.backgroundColor = "cadetblue";
}
function nonblue() {
    document.getElementById("box3").style.backgroundColor = "lightyellow";
}
function purple() {
    document.getElementById("box4").style.backgroundColor = "darkorchid";
}
function nonpurple() {
    document.getElementById("box4").style.backgroundColor = "lightyellow";
}