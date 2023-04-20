let con = document.querySelector(".hotel_con");
let pagination_container = document.querySelector(".pagination");
let next_btn = pagination_container.querySelector("#next");
let current_btn = pagination_container.querySelector("#current");
let prev_btn = pagination_container.querySelector("#prev");
let current_page = Number(current_btn.textContent);

let fetchData;
let getHotel = async (current_page) => {
  let res = await fetch(
    ` https://json-to.onrender.com/hotels?_page=${current_page}&_limit=4`
  );
  let data = await res.json();
  fetchData = data;
  console.log("hotel", fetchData);
  renderHotel(fetchData);
};
const renderHotel = (data) => {
  con.innerHTML = null;
  data.forEach((el) => {
    let hotleCard = document.createElement("div");
    let himg = document.createElement("img");
    let familyRomm = document.createElement("p");
    let adult = document.createElement("p");
    let capa = document.createElement("p");
    let facility = document.createElement("p");
    let bedtype = document.createElement("p");
    let price = document.createElement("p");
    let bookNow = document.createElement("button");
    bookNow.setAttribute("class", "bookNow");
    bookNow.innerText = "Book Now";

    himg.src = el.image_url;
    familyRomm.textContent = el.category;
    adult.textContent = `Adults: ${el.no_of_persons}`;
    capa.textContent = `Capacity: ${el.capacity}`;
    facility.textContent = `Facilities: ${el.type_of_room}`;
    bedtype.textContent = `Bed type: ${el.bed_type}`;
    price.textContent = `Price : ₹${el.cost} /Per Night`;

    hotleCard.append(
      himg,
      familyRomm,
      adult,
      capa,
      facility,
      bedtype,
      price,
      bookNow
    );
    con.append(hotleCard);
  });
};

// pagination Section
next_btn.addEventListener("click", () => {
  if (current_btn == 1) {
    current_btn.disabled = true;
  } else if (current_btn > 1) {
    current_btn.disabled = false;
  }
  current_page++;
  current_btn.textContent = current_page;
  getHotel(current_page);
});

prev_btn.addEventListener("click", () => {
  if (current_page === 1) {
    current_btn.target.disabled = true;
    return;
  }
  current_page--;
  current_btn.textContent = current_page;
  getHotel(current_page);
});

// sort by category
let filterbycat = document.getElementById("filcate");

filterbycat.addEventListener("change", () => {
  console.log(filterbycat.value);
  if (filterbycat.value == "") {
    let getData = async () => {
      var res = await fetch(`https://json-to.onrender.com/hotels`);
      let data = await res.json();

      console.log("inside data", data);
      renderHotel(data);
    };
    getData();
    // getHotel();
  } else {
    let filteredData = fetchData.filter((el) => {
      return el.category == filterbycat.value;
    });
    renderHotel(filteredData);
  }
});

let sort = document.querySelector("#sort_by_cost");

sort.addEventListener("change", sortingfn);

function sortingfn() {
  let val = sort.value;
  if (val == "LowtoHigh") {
    fetchData.sort((x, y) => {
      return x.cost - y.cost;
    });
    renderHotel(fetchData);
  } else if (val == "HightoLow") {
    fetchData.sort((x, y) => {
      return y.cost - x.cost;
    });
    renderHotel(fetchData);
  } else {
    renderHotel(fetchData);
  }
}
getHotel();
