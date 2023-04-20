let navbar_HTML =`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title> 
    <link rel="stylesheet" href="./styles/navbar.css">
    <script src="https://kit.fontawesome.com/8548f1160b.js" crossorigin="anonymous"></script>
</head>
<body>
    <div id="navbar">
        <h1>Bageri</h1>
        <div id="link-section">
            <a href="./index.html">Home</a>
            <a href="./cat.html">Cat</a>
            <a href="./favourites.html">Favourites</a>
        </div>
        <div class="hamburger">
            <i class="fa-solid fa-bars"></i>
        </div>
    </div>
</body>
</html>`
let navbar=document.querySelector("nav")
navbar.innerHTML=navbar_HTML;