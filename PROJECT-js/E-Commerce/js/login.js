var regdUsers = JSON.parse(localStorage.getItem("signup"));
  //console.log(regdUsers);
  document.querySelector("#form").addEventListener("submit", formSubmit);
  var form = document.querySelector("#form");
  //console.log(form.user.value);
  // form.id.value
  function formSubmit(event) {
     event.preventDefault();
    var email = form.email.value;
    var pass = form.pass.value;
    console.log(email, pass);

    var flag= false
    for (var i = 0; i < regdUsers.length; i++) {
      if (regdUsers[i].email == email && regdUsers[i].password == pass) {
        flag=true
        break;
      } 
      else {
        continue;
      }
    }
    if(flag){
      alert("login sucessful")
    }
    else{
      alert("login failed")
    }

  }