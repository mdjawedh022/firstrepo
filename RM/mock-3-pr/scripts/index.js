let api ="https://api.thecatapi.com/v1/images/search?limit=5&page=${i || 1}&breed_ids=beng&api_key=live_MMBbHZJAPR21ulTEydtxR0vL6tiuyaD49Ul5iSoq2TPmmZKW8aSlcUHwrniJPoNX";

const getData=async()=>{
    let res=await fetch(api);
    let data=await res.json();
    console.log(data);
   appendData(data)
}
getData()


const appendData=(data)=>{
    let container=document.getElementById("container")
    container.innerHTML=null;
    data.forEach((el)=>{
        let div=document.createElement("div");
        div.setAttribute("id","items");

        let btn_div=document.createElement("div")

        let img=document.createElement("img")
        img.setAttribute("id","image")
        img.src=el.url

        let name=document.createElement("h2")
        name.setAttribute("id","name")
        name.innerText=el.breeds[0].name

        let desc = document.createElement("p");
        desc.setAttribute("id","desc")
        desc.innerText = el.breeds[0].description;

    let origin = document.createElement("p");
    origin.setAttribute("id","origin")
    origin.innerText = `Origin : ${el.breeds[0].origin}`;

    let temp = document.createElement("p");
    temp.setAttribute("id","temp")
    temp.innerText = `Temperment : ${el.breeds[0].temperament}`;

    let life = document.createElement("p");
    life.setAttribute("id","life")
    life.innerText = `Life Span : ${el.breeds[0].life_span}`;

    let wikipedia=document.createElement("a");
    wikipedia.setAttribute("class","wikipedia");
    wikipedia.style.cursor="pointer"
    wikipedia.textContent=`Read More: Wikipedia`;
    wikipedia.addEventListener("click",()=>{
        window.open(`${el.breeds[0].wikipedia_url}`);
    })

    let btn=document.createElement("button");
    btn.setAttribute("class","btn");
    btn.innerText="View Images";
    btn.addEventListener("click",()=>{
      window.location.href="cat.html"
    })

     btn_div.append(btn)
    div.append(img,name, desc, origin, life,temp,wikipedia,btn_div)
    container.append(div)
    })
}


const pagination=()=>{
    let totalData=100,
    perPage=5;
    for(let i=1;i<=Math.ceil(totalData/perPage);i++){
        let btn=document.createElement("button");
        btn.setAttribute("id","paginationbtn");
        btn.innerText=i;
        btn.addEventListener("click",()=>{
            getData(i);
        })
        document.getElementById("pagination").append(btn)
    }
}
pagination()