let api = 'https://api.thecatapi.com/v1/images/search?limit=10'


let favouritelist=JSON.parse(localStorage.getItem("favourite"))||[]

const getImages=async()=>{
    let res=await fetch(api)
    let data=await res.json()
    console.log(data)
    imagesRender(data);
}
getImages()
const imagesRender=(data)=>{
let container=document.getElementById('images');
container.innerHTML=null;
data.forEach((el)=>{
    let div=document.createElement("div");
    div.setAttribute("id","imagediv");

    let img=document.createElement('img');
    img.setAttribute("id","img");
    img.src=el.url;
    img.addEventListener("click",()=>{
        favouritelist.push(el);
        localStorage.setItem("favourite",JSON.stringify(favouritelist))

    })
    div.append(img)
    container.append(div)
})
}