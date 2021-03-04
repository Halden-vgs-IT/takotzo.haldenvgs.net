<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="style.css">
    <script src="scriptleie.js"></script>
</head>
<body>
<nav>
    <a href="index.html"><button>Hjem</button></a>
    <a href="heiskort.php"><button>Kjøp heiskort</button></a>
    <a href="hytter.php"><button>Se på hytter</button></a>
    <a href="leihytte.php"><button>Lei en hytte</button></a>
</nav>
<header>
    <h1>Velkommen, her kan du leie en av våre skihytter</h1>
    <label>
        <select id="ferievalg">
            <option value="jul">Juleferie</option>
            <option value="vinter">Vinterferie</option>
            <option value="paske">Påskeferie</option>
        </select>
    </label>
    <div class="flexcol">
        <div class="leihyttebox" id="stua">
            <img src="filer/granstua.jpg" id="stuabilde">
            <button id="leiStua">Lei Granstua</button>
            <ul>
                <li>Granstua</li>
                <li>Sengeplasser: 4</li>
                <li>Standard: Høy</li>
                <li>Har badstue</li>
                <li>12 000</li>
            </ul>
        </div>
        <div class="leihyttebox" id="bo">
            <img src="filer/granbo.jpg" id="bobilde">
            <button id="leiBoJul">Lei Granbo</button>
            <button id="leiBoVinter">Lei Granbo</button>
            <ul>
                <li>Granbo</li>
                <li>Sengeplasser: 6</li>
                <li>Standard: Middels</li>
                <li>15 000</li>
            </ul>
        </div>
        <div class="leihyttebox" id="toppen">
            <img src="filer/grantoppen.jpg" id="toppenbilde">
            <button id="leiToppen">Lei Grantoppen</button>
            <ul>
                <li>Grantoppen</li>
                <li>Sengeplasser: 8</li>
                <li>Standard: Lav</li>
                <li>16 000</li>
            </ul>
        </div>
        <div class="leihyttebox" id="haug">
            <img src="filer/granhaug.jpg" id="haugbilde">
            <button id="leiHaug">Lei Granhaug</button>
            <ul>
                <li>Granhaug</li>
                <li>Sengeplasser: 10</li>
                <li>Standard: Høy</li>
                <li>Har badstue</li>
                <li>30 000</li>
            </ul>
        </div>
    </div>
</header>
</body>
</html>