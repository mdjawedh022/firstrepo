let api =
  "https://api.thecatapi.com/v1/images/search?limit=5&page=${i || 1}&breed_ids=beng&api_key=live_MMBbHZJAPR21ulTEydtxR0vL6tiuyaD49Ul5iSoq2TPmmZKW8aSlcUHwrniJPoNX";

const getData = async (i) => {
  let res = await fetch(api);
  let data = await res.json();
  console.log(data);
  renderDOM(data);
};
getData();

const renderDOM = (data) => {
  let container = document.getElementById("container");
  container.innerHTML = null;
  data.forEach((el) => {
    let div = document.createElement("div");
    div.setAttribute("class", "items");

    let img = document.createElement("img");
    img.src = el.url;

    let name = document.createElement("h2");
    name.innerText = el.breeds[0].name;

    let desc = document.createElement("p");
    desc.innerText = el.breeds[0].description;

    let origin = document.createElement("p");
    origin.innerText = `Origin : ${el.breeds[0].origin}`;

    let temp = document.createElement("p");
    temp.innerText = `Temperment : ${el.breeds[0].temperament}`;

    let life = document.createElement("p");
    life.innerText = `Life Span : ${el.breeds[0].life_span}`;

    let url = document.createElement("a");
    url.textContent = `Read More : Wikipedia`;
    url.setAttribute("class", "wikipedia");
    url.addEventListener("click", () => {
      window.open(`${el.breeds[0].wikipedia_url}`);
    }); 

    let btn = document.createElement("button");
    btn.setAttribute("class", "view");
    btn.innerText = "View Images";
    btn.addEventListener("click", () => {
      window.location.href = "cat.html";
    });

    div.append(img, name, desc, origin, temp, life, url, btn);
    container.appendChild(div);
  });
};

const Pagination = () => {
  let totallData = 100,
    perPage = 5;
  for (let i = 1; i <= Math.ceil(totallData / perPage); i++) {
    let btn = document.createElement("button");
    btn.setAttribute("id", "paginatebtn");
    btn.innerText = i;
    btn.addEventListener("click", () => {
      getData(i);
    });
    document.getElementById("paginated").append(btn);
  }
};
Pagination();
