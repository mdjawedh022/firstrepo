document.querySelector("#form").addEventListener("submit",submitfun);
var signup_data= JSON.parse(localStorage.getItem("signup")) || [];
function submitfun(event){
    event.preventDefault();
    var data= {
        email: document.querySelector("#email").value,
        mobil_no : document.querySelector("#mobile").value,
        password:document.querySelector("#pass").value 
    }
    //console.log(data)
    signup_data.push(data);
    localStorage.setItem("signup" , JSON.stringify(signup_data));
    document.querySelector("input[type='submit']").addEventListener("click",function(){
        window.location.href = "login.html"
    })
}