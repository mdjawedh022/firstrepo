let favourite=JSON.parse(localStorage.getItem("favourite"))||[];
console.log(favourite)
let renderImages=(favourite,i)=>{
    let container=document.getElementById("favourite");
    container.innerHTML=null;
    favourite.forEach((e)=>{
        let div=document.createElement("div");
        div.setAttribute("class","cates");

        let img=document.createElement('img');
        img.src=e.url;


        let delet=document.createElement("button");
        delet.innerText="Delete";
        delet.addEventListener("click",()=>{
            delFunction(i)
        })
        div.append(img,delet)
        container.append(div);
    })
}
function delFunction(i){
    favourite.splice(i,1)
    renderImages(favourite);
    alert("image should be delete")
}
renderImages(favourite)