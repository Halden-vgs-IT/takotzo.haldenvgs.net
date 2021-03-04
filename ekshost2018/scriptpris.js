window.onload = oppstart;
//Variabler//
var dager = 1;
var pris = 200;
var avslag = 0;
var sum = 200;
var nypris = 0;

function oppstart() {
    document.getElementById("voksen").onclick = skrivVoksen;
    document.getElementById("barn").onclick = skrivBarn;
    document.getElementById("antdager").onchange = visdag;
    document.getElementById("betal").onclick = betalt;
}

function skrivVoksen() {
    document.getElementById("alder").innerHTML = "voksen";
    pris = 200;
    sum = pris * dager;
    if (sum > 1000) {
        avslag = sum - 1000
        nypris = sum - avslag;
        document.getElementById("alderpris").innerHTML = nypris;
        document.getElementById("tilbud").innerHTML = "Gratulerer du har fått et avslag på " + avslag + " kroner";
    } else {
        document.getElementById("alderpris").innerHTML = sum;
        document.getElementById("tilbud").innerHTML = "Du har ingen avslag";
    }

}
function skrivBarn() {
    document.getElementById("alder").innerText = "barn";
    pris = 100;
    sum = pris * dager;
    if (sum > 500) {
        avslag = sum - 500
        nypris = sum - avslag;
        document.getElementById("alderpris").innerHTML = nypris;
        document.getElementById("tilbud").innerHTML = "Gratulerer du har fått et avslag på " + avslag + " kroner";
    } else {
        document.getElementById("alderpris").innerHTML = sum;
        document.getElementById("tilbud").innerHTML = "Du har ingen avslag";
    }
}
function visdag() {
    dager = document.getElementById("antdager").value;
    document.getElementById("valgtdag").innerHTML = dager;
    sum = pris * dager;
    if (pris === 200 && sum > 1000) {
        avslag = sum - 1000;
        nypris = sum - avslag;
        document.getElementById("alderpris").innerHTML = nypris;
        document.getElementById("tilbud").innerHTML = "Gratulerer du har fått et avslag på " + avslag + " kroner";
    } else if (pris === 100 && sum > 500) {
        avslag = sum - 500;
        nypris = sum - avslag;
        document.getElementById("alderpris").innerHTML = nypris;
        document.getElementById("tilbud").innerHTML = "Gratulerer du har fått et avslag på " + avslag + " kroner";
    } else {
        avslag = 0;
        document.getElementById("alderpris").innerHTML = sum;
        document.getElementById("tilbud").innerHTML = "Du har ingen avslag";
    }
}
function betalt() {
    if (avslag > 0) {
        document.getElementById("regning").innerHTML = "Du har nå betalt " + nypris + " kroner, " +
            "og du hadde et avslag på " + avslag + " kroner. God Tur";
    } else {
        document.getElementById("regning").innerHTML = "Du har nå betalt " + sum + " kroner. God Tur";
    }
}
