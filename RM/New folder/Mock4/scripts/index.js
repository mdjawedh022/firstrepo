let form = document.getElementById("registerform");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  if (form.pass.value == form.repeatpass.value) {
    let obj = {
      userName: form.username.value,
      email: form.remail.value,
      password: form.pass.value,
      repeatpassword: form.repeatpass.value,
    };

    console.log(obj, "my");

    fetch(`  https://json-to.onrender.com/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((res) => {
        //   window.location.href = "signin.html";
        console.log(res, "myd");
        alert(`Signup success`);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    alert("not matching password with your repeat Password");
  }
}

// -------------------------------------------------Register SEction End here=====================

let loginform = document.getElementById("loginform");

var UData;
let api = `https://json-to.onrender.com/users`;
let getFetch = async (UData) => {
  var res = await fetch(api);
  UData = await res.json();
  renderUserDom(UData);
};
// console.log(UData);
getFetch();

function renderUserDom(data) {
  console.log("renderUserDom", data);
  loginform.addEventListener("submit", (e) => {
    e.preventDefault();

    let loginObj = {
      email: loginform.email.value,
      password: loginform.password.value,
    };
    // ----for Admin Login function start-----

    if (email.value == "eve.holt@reqres.in" && password.value == "admin123") {
      alert("login successful");
      window.location.href = "admin.html";
    } else {
      alert("wrong Credentials for Admin");
    }
    // ----for Admin Login function start-----
    // ----for user Login function start-----
    if (email.value == "" || password.value == "") {
      alert("Fill all details");
    } else {
      let flag = false;
      data.forEach((el) => {
        if (el.email == loginObj.email && el.password == loginObj.password) {
          alert("Succes Login");
          window.location.href = "hotel.html";
          flag = true;
        }
      });
      if (flag == false) {
        alert("login failed");
      }
    }
    // ----for user Login function end-----
  });
}
