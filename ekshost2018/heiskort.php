<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="style.css">
    <script src="scriptpris.js"></script>
</head>
<body>
    <nav>
        <a href="index.html"><button>Hjem</button></a>
        <a href="heiskort.php"><button>Kjøp heiskort</button></a>
        <a href="hytter.php"><button>Se på hytter</button></a>
        <a href="leihytte.php"><button>Lei en hytte</button></a>
    </nav>
    <header>
        <h1>Velkommen, her kan du bestille heiskort for opptil 1 uke</h1>
    </header>
    <div id="paddingalder">
        <button id="voksen" class="button">Voksen</button>
        <button id="barn" class="button">Barn (0-12 år)</button>
        <p>Velg antall dager du skal ha heiskortet ditt</p>
        <label>
            <select class="flexbox numberfont" id="antdager">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
            </select>
        </label>
    </div>
    <p>Du har nå valgt <span id="alder">voksen</span> som skal stå på ski i <span id="valgtdag">1</span> dager. :)</p>
    <p>Dette vil koste <span id="alderpris">200</span> kroner</p>
    <p><span id="tilbud">Du har ingen avslag</span></p>
    <button id="betal">Betal</button>
    <p><span id="regning"></span></p>

</body>
</html>