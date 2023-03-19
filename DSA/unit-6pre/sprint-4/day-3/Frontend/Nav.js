
let navbar_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
    #nav{
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 80px;
        font-size: 30px;
        cursor: pointer;
        text-decoration: none;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
    #nav>a{
        color: black;
        text-decoration: none;
    }
</style>
<body>
    <div id="nav">
        <a href="./Login.html"><p>Login</p></a>
        <a href="./Signup.html"><p>Sign Up</p></a>
        <a href="./index.html"><p>Notes</p></a>
        <a href="./CreateNotes.html"><p>Create Notes</p></a>
    </div>
</body>
</html>
`;

let navbar = document.querySelector("nav");
navbar.innerHTML = navbar_HTML;
