//CONVERT

async function getData() {
    let title = document.getElementById("movie").value
  try {
    let res = await fetch(`http://www.omdbapi.com/?t=${title}&apikey=d5306029`);

    let data = await res.json();
    console.log("data", data);
    appendMovies(data)
  } catch (err) {
    console.log("err", err);
  }
}

//WE NEED TO APPEND

function appendMovies(data){

    document.getElementById("main").innerHTML=null
//DATA -ARR OF OBJECT


    let div=document.createElement('div')

    let div1=document.createElement('div')
        div1.setAttribute("id","content")
    let img=document.createElement('img')
    img.src=data.Poster;

    let title=document.createElement('h3')
    title.innerText=`Title: ${data.Title}`
  

    let p1=document.createElement('p')
     p1.innerText=`Actor: ${data.Actors}`

     
    let p2=document.createElement('p')
    p2.innerText=`Director: ${data.Director}`

    
    let p3=document.createElement('p')
     p3.innerText=`Runtime: ${data.Runtime}`

     
    let p4=document.createElement('p')
    p4.innerText=`Language: ${data.Language}`

    
    let p5=document.createElement('p')
     p5.innerText=`ImdbRating: ${data.imdbRating}`

     let p6=document.createElement('p')
    p6.innerText=`ImdbVotes:${data.imdbVotes}`

    let resl=document.createElement('p')
    resl.innerText=`Released:${data.Released}`

    

    div.append(img)
    div1.append(title,p1,p2,p3,p4,p5,p6,resl)
document.getElementById("main").append(div,div1)
}

// function appendMovies(data){

//   document.getElementById("main").innerHTML=null

//   let div1=document.createElement('div')

//   let img=document.createElement('img')
//   img.src=data.Poster;

//   let title=document.createElement('h3')
//   title.innerText=`Title: ${data.Title}`

 
//   let resl=document.createElement('p')
//   resl.innerText=`Released:${data.Released}`

  

//   container.append(img,title,resl)
// 
// }