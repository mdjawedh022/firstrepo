
let movies= [
    {
      name: "Doctor Strange ",
     release_data:2020,
      image:
      "https://www.mordeo.org/files/uploads/2022/02/Doctor-Strange-In-The-Multiverse-Of-Madness-Poster-4K-Ultra-HD-Mobile-Wallpaper-scaled.jpg",
     rating: 7.2,
        
    },
    {
      name: "Iron Man 3",
      release_data: 2017,
      image:
        "https://images8.alphacoders.com/378/thumb-1920-378546.jpg",
     rating:8.3
        ,
    },
  
    {
      name: "Captain America",
      release_data: 2016,
      image:
        "https://i.pinimg.com/originals/9a/a1/76/9aa176940c24fc8ee727f24e130de075.jpg",
      rating:7.9
        ,
    },
    {
      name: "Avengers:End Game",
      release_data: 2020,
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9",
        rating:8.9
    },
    {
      name: "Black Panther",
      release_data: 2019,
      image:
        "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg",
        rating:8.1,
    },
    {
        name: "Shazam!",
        release_data: 2018,
        image:
          "https://m.media-amazon.com/images/M/MV5BOWZhZjE4NGQtODg5Ni00MjQ1LWJmMzAtNzQ2N2M1NzYzMDJkXkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_FMjpg_UX1000_.jpg",
          rating:6.1,
    },
    {
      name: "Spider NO Way Home",
      release_data: 2021,
          image:"https://sportshub.cbsistatic.com/i/2021/11/15/4a9191dc-3957-4817-b3b0-78e40c152b31/spider-man-no-way-home-poster.jpg?auto=webp&width=1200&height=1778&crop=0.675:1,smart",
        rating:8.1,
    },
    {name: "FLASH",
    release_data: 2014,
    image:
      "https://m.media-amazon.com/images/M/MV5BMDIzNzYwNTctZWY4Mi00YjQ2LWI5YWYtMzdmNDgwMGI4Yzk1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    rating:6.9,
    },
    {
        name: "Antman",
        release_data: 2016,
        image:
          "https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_.jpg",
        rating:5.9 ,
    },
   
  ];
  let container = document.querySelector("#container");
    
function Movies(n,d,r,i) {
    this.name = n;
    this.date = d;
    this.rating = r;
    this.image = i;
    
}

  // let data=document.getElementById("container").innerHTML=""
  // let div=document.createElement("div");

  function display(movies){
    container.innerHTML=null
    movies.map(function(elem){
      // console.log(elem)
      let div = document.createElement("div")
      // <------- images here--------------->
        let image= document.createElement("img"); 
        image.setAttribute("src",elem.image);
    // <--------------------name ----------->
        let Name= document.createElement("h2");
        Name.setAttribute("id",'name')
        Name.innerText = elem.name
        
        // <--------------date--------------->
        let date=document.createElement("p");
        date.innerText=`Release Date: ${elem.release_data}`
        date.setAttribute("id","release_data")
    
        // <------------------rating----------------->
        let rat = document.createElement("p");
        rat.innerText=`Rating: ${elem.rating}`
        rat.setAttribute("id","rating")
  
        div.append(image,Name,date,rat);
        container.append(div)
    })
  }
  display(movies)

  function sortLH(){
   movies= movies.sort(function(a,b){
    
      return a.rating-b.rating
    })
    console.log("movies:",movies)
    display(movies)
  }
  
  function sortHL(){
    movies=movies.sort(function(a,b){
    
      return b.rating-a.rating
    })
    console.log("movies:",movies)
    display(movies)
  }