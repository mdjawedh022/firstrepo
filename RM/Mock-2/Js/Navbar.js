let navbar_HTML =`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./Styles/Navbar.css">
</head>
<body>
    
    <div id="navbar">
        <div id="nav1">
        <img src="https://scontent.fixr3-4.fna.fbcdn.net/v/t39.30808-6/278585597_3292003127686005_6223893951869428343_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=QiAHaDKwSgMAX937Luq&_nc_ht=scontent.fixr3-4.fna&oh=00_AfD04Fi6s_p47NXhsPWrydkMqHvfK3LUhavXX6zwEeb4Xw&oe=64115DEB" alt="">
        <a href="./index.html"><p>Leave Request</p></a>
        </div>
        <div id="nav2">
        <a href="./Dashboard.html"><p>Dashboard</p></a>
        <a href="./Status.html"><p>Status</p></a>
        </div>
    </div>
</body>
</html>

    `


let navbar = document.querySelector("nav");
navbar.innerHTML = navbar_HTML;