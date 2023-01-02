var cart_data =JSON.parse(localStorage.getItem("cart")) || [];
var count= JSON.parse(localStorage.getItem("cart_value")) || 0
document.querySelector("#cart").innerHTML=count
function display(mensData){
  document.querySelector("#container").innerHTML=""
  mensData.map(function (elem, index, array) {
    var frame = document.createElement("div");
    frame.setAttribute("id","frame");
    var Image = document.createElement("img");
    Image.setAttribute("src", elem.image_url);
    var Name = document.createElement("h4");
    Name.innerText = elem.name;
    var Price = document.createElement("h2");
    Price.innerText = elem.price;
    var discount = document.createElement("p");
    discount.innerText = elem.strikedoffprice;
    var addcart = document.createElement("button")
    addcart.innerText="Add to cart";
    addcart.addEventListener("click",function(){
      cart(elem)
    })
    frame.append(Image, Name, Price, discount,addcart);
    document.querySelector("#container").append(frame);
  });
}
  //display(mensData)
  function cart(elem){
    count++
       elem.qnt = 1
      cart_data.push(elem)
      localStorage.setItem("cart",JSON.stringify(cart_data))

      var cart_value = document.querySelector("#cart").innerHTML=count;
      localStorage.setItem("cart_v",JSON.stringify(cart_value));
  }
  display(mensData)

  function sortItmes(){
    var sorting= document.querySelector("#sort").value;
    console.log(sorting)
    if(sorting==='h2l'){
      mensData.sort(function(a,b){
        return b.price-a.price;
      })
      //console.log(mensData)
      display(mensData);
    }
    else if(sorting==="l2h"){
      mensData.sort(function(a,b){
        return a.price-b.price
      })
      //console.log( womensData)
      display(mensData);
    }

  }

  function search(){
    var searchtext=document.querySelector("#search").value
    console.log(searchtext)
    var filterdata= mensData.filter(function(elem){
      return elem.name.includes(searchtext)
    });
    display(filterdata)
    document.querySelector("#SearchingResult").innerText= filterdata.length  
  } 