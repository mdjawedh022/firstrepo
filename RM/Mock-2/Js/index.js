let form = document.querySelector("form");
// form.addEventListener("submit", Applyform);
start_date.min = new Date().toISOString().split("T")[0];
end_date.min = new Date().toISOString().split("T")[0];

let LSData = JSON.parse(localStorage.getItem("leaveApplication")) || [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let obj = {
    uniqueid: form.uniqueid.value,
    name: form.name.value,
    reason: form.reason.value,
    employee: form.employee.value,
    student: form.student.value,
    start_date: form.start_date.value,
    end_date: form.end_date.value,
    overseer: form.overseer.value,
  };
// console.log(obj)
  let arr = LSData.filter((el) => {
    return el.uniqueid == form.uniqueid.value;
  });
  if (arr.length > 0) {
    console.log(arr);
    alert("ID already exists");
  } else if (form.name.value.length < 4) {
    alert("Name Should be at least 4 characters");
  } else {
    if (
      obj.uniqueid == "" ||
      obj.name == "" ||
      obj.reason == "" ||
      obj.employee == "" ||
      obj.student == "" ||
      obj.start_date == "" ||
      obj.end_date == "" ||
      obj.overseer == ""
    ) {
      alert("fields are empty");
      window.location.reload();
      return;
    } else {
      LSData.push(obj);
      console.log(LSData);
      localStorage.setItem("leaveApplication", JSON.stringify(LSData));
      window.location.reload();
      window.location.href="./Dashboard.html"
      return;
    }
  }
})






function handleform(e) {
  e.preventDefault()
  let obj = {
      name: form.name.value,
      type: form.type.value,
      size: form.size.value,
      quantity: form.quantity.value,
      totalprice:0
  }
  let totalprice=1;
  if (type.value == "Americano" && size.value == "small") {
      totalprice *= (100*1*quantity.value)
  }
  else if (type.value == "Americano" && size.value == "medium") {
      totalprice *= (100*2*quantity.value)
  }
  if (type.value == "Americano" && size.value == "large") {
      totalprice *= (100*3*quantity.value)
  }
  console.log(obj, totalprice)
}