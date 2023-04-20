let t_body = document.querySelector("#tbody");

let data_arr = JSON.parse(localStorage.getItem("leaveApplication")) || [];

const modal = document.querySelector(".modal");
const teamName = document.querySelector("#team-name");
const teamAbbreviation = document.querySelector("#team-abbreviation");
const teamConference = document.querySelector("#team-conference");
const teamDivision = document.querySelector("#team-division");
const teamCity = document.querySelector("#team-city");
const otp = document.querySelector("#otp");
const closeModal = document.querySelector("#close-modal");

function displayDOM(data) {
  t_body.innerHTML = null;

  data.forEach((el, i) => {
    console.log(el);

    let tr = document.createElement("tr");

    let unique_id = document.createElement("td");
    unique_id.innerText = el.uniqueid;

    let name = document.createElement("td");
    name.innerText = el.name;

    let description = document.createElement("td");
    description.innerText = el.reason;

    let employee = document.createElement("td");
    employee.innerText = el.employee;

    let student = document.createElement("td");
    student.innerText = el.student;

    let start_date = document.createElement("td");
    start_date.innerText = el.start_date;

    let end_date = document.createElement("td");
    end_date.innerText = el.end_date;

    let overseer = document.createElement("td");
    overseer.innerText = el.overseer;

    let otp = document.createElement("td");
    otp.innerText = Math.floor(Math.random().toFixed(4) * 10000);

    let reject = document.createElement("button");
    reject.innerText = "Reject Leave";
    reject.setAttribute("id", "reject");
    reject.addEventListener("click", function () {
      reject_fun(i);
    });

    let accept = document.createElement("button");
    accept.innerText = "Grant Leave";
    accept.setAttribute("id", "accept");
    accept.addEventListener("click", function () {
      teamName.innerText = el.name;
      teamAbbreviation.innerText = el.reason;
      teamConference.innerText = el.start_date;
      teamDivision.innerText = el.end_date;
      teamCity.innerText = el.overseer;
      // otp.innerText = otp
      modal.style.display = "block";
      let otpcon = +otp.innerHTML;
      localStorage.setItem("otpe", JSON.stringify(otpcon));
    });

    tr.append(
      unique_id,
      name,
      description,
      employee,
      student,
      start_date,
      end_date,
      overseer,
      otp,
      reject,
      accept
    );
    t_body.append(tr);

    //console.log(otpcon)
  });
}

displayDOM(data_arr);

function reject_fun(i) {
  data_arr.splice(i, 1);
  localStorage.setItem("apllications", JSON.stringify(data_arr));
  displayDOM(data_arr);
  alert("leave rejected");
}

closeModal.addEventListener("click", () => {
  let grant = JSON.parse(localStorage.getItem("otpe")) || {};
  let input_otp = document.querySelector("#one").value;
  console.log(grant);
  console.log(input_otp);
  if (grant == input_otp) {
    alert("Leave granted");
    modal.style.display = "none";
  } else {
    alert("wrong otp");
  }
});

let search = document.getElementById("search");

search.addEventListener("input", () => {
  let f = data_arr.filter(function (el) {
    return el.toLowerCase().includes(search.value.toLowerCase());
  });
  displayDOM(f);
});
