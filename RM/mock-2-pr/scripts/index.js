let getData=JSON.parse(localStorage.getItem("data"))||[];
document.querySelector("form").addEventListener("submit", leaveRequest);

let leaveArr = [];

function leaveRequest(e) {
  e.preventDefault();
  let id = document.querySelector("#id").value;
  let name = document.querySelector("#name").value;

  let description = document.querySelector("#description").value;
  let leavestart = document.querySelector("#leavestart").value;
  let leaveend = document.querySelector("#leaveend").value;
  let overseer = document.querySelector("#overseer").value;
  if (name.length<4) {
    alert("name should have only 4 lettler!");
    return;
  }
  let who = "";
  let employee = document.querySelector("#employee").checked;
  let student = document.querySelector("#student").checked;

  if (employee) {
    who = document.querySelector("#employee").value;
  }
  if (student) {
    who = document.querySelector("#student").value;
  }

  leaveobj = {
    id,
    name,
    description,
    leavestart,
    leaveend,
    overseer,
    who,
  };
  let arr=getData.filter((el)=>{
    return el.id===id
  })
  if (arr.length > 0) {
    console.log(arr);
    alert("ID already exists");
  }else  if (name.length<4) {
    alert("Name Should be at least 4 characters");
    return
  }{
  // console.log(leaveArr)
  leaveArr.push(leaveobj);
  localStorage.setItem("data", JSON.stringify(leaveArr));
  return
  }
}