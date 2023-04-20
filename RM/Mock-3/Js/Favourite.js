let favourite = JSON.parse(localStorage.getItem("favourite")) || [];

let renderImages = (data,i) => {
    let container = document.getElementById('fav')
    data.forEach((el) => {
        let div = document.createElement('div');
        div.setAttribute('class', 'divimage')
    
        let img = document.createElement('img');
        img.setAttribute('class', 'cates')
        img.src = el.url
        
        let del = document.createElement("button")
        del.innerText= "Delete"
        del.addEventListener("click",function(){
          delet(i)
        })
    
        div.append(img,del)
        container.appendChild(div)
    })

}

function delet(i){
    favourite.splice(i,1)
        // localStorage.setItem("wishlist",JSON.stringify(favourite))
        renderImages(favourite)
        alert("deleted")
      }
renderImages(favourite)