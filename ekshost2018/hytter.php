<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="style.css">
    <script src="scripthytte.js"></script>
</head>
<body>
    <nav>
        <a href="index.html"><button>Hjem</button></a>
        <a href="heiskort.php"><button>Kjøp heiskort</button></a>
        <a href="hytter.php"><button>Se på hytter</button></a>
        <a href="leihytte.php"><button>Lei en hytte</button></a>
    </nav>

    <div>
        <div class="video">
            <video src="filer/hyttevideo.mp4" controls id="vid"></video>
        </div>
        <img alt="bilde over hytteområdet" src="filer/menybilde.jpg" id="hyttefelt">

    </div>

    <div id="uthev">
        <img src="filer/granbo.jpg" id="granbo" alt="Granbo">
        <img src="filer/granstua.jpg" id="granstua" alt="Granstua">
        <img src="filer/granhaug.jpg" id="granhaug" alt="Granhaug">
        <img src="filer/grantoppen.jpg" id="grantoppen" alt="Grantoppen">
    </div>
    <div id="cover">
        <button id="tilbake-knapp">Tilbake</button>
        <div class="mySlides fade">
            <div class="numbertext">1 / 3</div>
            <img src="filer/granbo01.jpg" class="hytte-bilde" id="hyttebilde1">
        </div>
        <div class="mySlides fade">
            <div class="numbertext">2 / 3</div>
            <img src="filer/granbo02.jpg" class="hytte-bilde" id="hyttebilde2">
        </div>
        <div class="mySlides fade">
            <div class="numbertext">3 / 3</div>
            <img src="filer/granbo03.jpg" class="hytte-bilde" id="hyttebilde3">
        </div>
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
        <br>
        <div class="dot-posisjon" >
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
        </div>


        <ul class="liste-posisjon">
            <li><span id="hyttenavn"></span></li>
            <li>Antall senger: <span id="antsenger"></span></li>
            <li>Standarder: <span id="standard"></span></li>
        </ul>
    </div>
</body>
</html>