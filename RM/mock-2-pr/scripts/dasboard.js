
let getData=JSON.parse(localStorage.getItem("data"))|| [];
// console.log(getData)
const modal = document.querySelector(".modal");
const teamName = document.querySelector("#team-name");
const teamAbbreviation = document.querySelector("#team-abbreviation");
const teamConference = document.querySelector("#team-conference");
const teamDivision = document.querySelector("#team-division");
const teamCity = document.querySelector("#team-city");
const otp = document.querySelector("#otp");
const closeModal = document.querySelector("#close-modal");

  displayTable(getData)
  function displayTable(getData){
   document.querySelector("tbody").innerHTML=""
getData.forEach(function(el,i){
let row=document.createElement("tr");
let Id=document.createElement("td");
Id.innerText=el.id

let Name=document.createElement("td");
Name.innerText=el.name;

let Des=document.createElement("td");
Des.innerText=el.description;

let Who=document.createElement("td")
Who.innerText=el.who;

let Start=document.createElement("td");
Start.innerText=el.leavestart;

let End=document.createElement("td");
End.innerText=el.leaveend;

let Overseer=document.createElement("td");
Overseer.innerText=el.overseer

let otp = document.createElement("td");
    otp.innerText = Math.floor(Math.random().toFixed(4) * 10000);

let reject =document.createElement("td");
reject.innerText="Reject leave";
reject.style.background="red"
reject.style.color="white"
reject.style.cursor="pointer"
reject.addEventListener("click",function (){
  deleteArr(i)
})
let grant =document.createElement("td");
grant.innerText="Granted";
grant.style.background="green"
grant.style.color="white"
grant.style.cursor="pointer"
grant.setAttribute("id", "accept");
grant.addEventListener("click", function () {
      teamName.innerText = el.name;
      teamAbbreviation.innerText = el.description;
      teamConference.innerText = el.leavestart;
      teamDivision.innerText = el.leaveend;
      teamCity.innerText = el.overseer;
      // otp.innerText = otp
      modal.style.display = "block";
      let otpcon = +otp.innerHTML;
      localStorage.setItem("otpe", JSON.stringify(otpcon));
    });

row.append(Id,Name,Des,Who,Start,End,Overseer,otp ,reject,grant);
document.querySelector("tbody").append(row);
})

  }

  function  deleteArr(i){
   getData.splice(i,1);
   localStorage.setItem("data",JSON.stringify(getData))
   displayTable(getData)
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
 