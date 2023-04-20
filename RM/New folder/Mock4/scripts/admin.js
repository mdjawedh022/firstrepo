let form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);
const modal = document.querySelector(".modal");
const closeModal = document.querySelector("#close-modal");
const close = document.getElementById("close");

function handleSubmit(e) {
  e.preventDefault();

  let Hobj = {
    category: form.category.value,
    image_url: form.image.value,
    type_of_room: form.en.value,
    bed_type: form.bed.value,
    no_of_persons: form.adults.value,
    capacity: form.capacity.value,
    cost: form.cost.value,
  };

  fetch(`https://json-to.onrender.com/hotels`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Hobj),
  })
    .then((res) => res.json())
    .then((res) => {
      alert(`Hotel add`);
    })
    .catch((err) => {
      console.log(err);
    });
}

let tbody = document.querySelector("tbody");

let fetchData;
let getFetch = async () => {
  var res = await fetch(`https://json-to.onrender.com/hotels`);
  let data = await res.json();
  fetchData = data;

  console.log(fetchData);
  renderDom(fetchData);
};
getFetch();

function renderDom(data) {
  tbody.innerHTML = null;
  console.log("gotit", data);
  data.forEach(function (ele) {
    let tr = document.createElement("tr");

    let id = document.createElement("td");
    id.innerText = ele.id;

    let category = document.createElement("td");
    category.innerText = ele.category;

    let image = document.createElement("img");
    image.src = ele.image_url;

    let type = document.createElement("td");
    type.innerText = ele.type_of_room;

    let bed = document.createElement("td");
    bed.innerText = ele.bed_type;

    let adult = document.createElement("td");
    adult.innerText = ele.no_of_persons;

    let capacity = document.createElement("td");
    capacity.innerText = ele.capacity;

    let cost = document.createElement("td");
    cost.innerText = ele.cost;

    let status = document.createElement("td");
    status.innerText = "Booked ";
    status.style.cursor = "pointer";
    status.addEventListener("click", function () {
      Toggle(index);
    });


    let btn = document.createElement("td");
    btn.innerText = "Delete ";
    btn.style.backgroundColor = "red";
    btn.style.cursor = "pointer";
    btn.addEventListener("click", function () {
      Delete(ele.id);
    });

    tr.append(
      id,
      category,
      image,
      type,
      bed,
      adult,
      capacity,
      cost,
      status,
     
      btn
    );
    tbody.append(tr);
  });
}

async function Delete(id) {
  try {
    let res = await fetch(`https://json-to.onrender.com/hotels/${id}`, {
      method: "DELETE",
    });
    getFetch();
  } catch (error) {
    console.log(error);
  }
}


closeModal.addEventListener("click", () => {
  e.preventDefault();

  let Hobj1 = {
    category: form.category.value,
    image_url: form.image.value,
    type_of_room: form.en.value,
    bed_type: form.bed.value,
    no_of_persons: form.adults.value,
    capacity: form.capacity.value,
    cost: form.cost.value,
  };

  fetch(`https://json-to.onrender.com/hotels/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Hobj1),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      handleSubmit(res);
      alert(`Posted success`);
      modal.style.display = "none";
    });
});

close.addEventListener("click", () => {
  modal.style.display = "none";
});



//  "category": "Family",
//     "image_url": "https://www.acaciahotelsmanila.com/wp-content/uploads/2020/09/room-deluxe_70df34c103b85ce7b2b5ff918ab8cf72.jpg",
//     "type_of_room": "AC",
//     "bed_type": "Double",
// 		"no_of_persons":"2",
// 		"capacity":"3".
// 		"cost":"4000",
// 		"booked":false,