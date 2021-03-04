window.onload = oppstart;

var arstid = "jul"

function oppstart () {
    document.getElementById("ferievalg").onchange = ferie;
    document.getElementById("leiBoJul").onclick = leiBoJ;
    document.getElementById("leiBoVinter").onclick = leiBoV;
    document.getElementById("leiHaug").onclick = leiHaug;
    document.getElementById("leiStua").onclick = leiStua;
    document.getElementById("leiToppen").onclick = leiToppen;
}
function ferie () {
    arstid = document.getElementById("ferievalg").value;
    if (arstid === "jul") {
        document.getElementById("bo").style.display = "inline";
        document.getElementById("leiBoJul").style.display = "inline";
        document.getElementById("leiBoVinter").style.display = "none";
        document.getElementById("haug").style.display = "none";
        document.getElementById("stua").style.display = "none";
        document.getElementById("toppen").style.display = "none";
    }
    else if (arstid === "vinter") {
        document.getElementById("bo").style.display = "inline";
        document.getElementById("leiBoJul").style.display = "none";
        document.getElementById("leiBoVinter").style.display = "inline";
        document.getElementById("haug").style.display = "inline";
        document.getElementById("stua").style.display = "none";
        document.getElementById("toppen").style.display = "inline";
    }
    else if (arstid === "paske") {
        document.getElementById("bo").style.display = "none";
        document.getElementById("haug").style.display = "none";
        document.getElementById("stua").style.display = "inline";
        document.getElementById("toppen").style.display = "none";
    }
}
function leiBoJ () {
    document.getElementById("leiBoJul").innerHTML = "Utleid";
}
function leiBoV () {
    document.getElementById("leiBoVinter").innerHTML = "Utleid";
}
function leiHaug () {
    document.getElementById("leiHaug").innerHTML = "Utleid";
}
function leiStua () {
    document.getElementById("leiStua").innerHTML = "Utleid";
}
function leiToppen () {
    document.getElementById("leiToppen").innerHTML = "Utleid";
}