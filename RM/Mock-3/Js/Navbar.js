const Navbar_HTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./CSS/Navbar.css">
</head>
<body>
    <div class="navbar">
        <a href="./index.html"><p>Home</p></a>
        <a href="./Cat.html"><p>Cat</p></a>
        <a href="./Favourites.html"><p>Favourites</p></a>
    </div>
</body>
</html>
`;

let navbar = document.querySelector("nav");
navbar.innerHTML = Navbar_HTML;
