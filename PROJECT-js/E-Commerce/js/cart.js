
var cart_data = JSON.parse(localStorage.getItem("cart")); []
var count= JSON.parse(localStorage.getItem("cart_value")) || 0;
function display(cart_data){
    //document.querySelector("#discountprice").innertext=discountprice
    document.querySelector("#container").innerHTML="";
    cart_data.map(function (elem, index, array) {
    var frame = document.createElement("div");
    frame.setAttribute("id","frame");
        
    var Image = document.createElement("img");
    Image.setAttribute("src", elem.image_url);  
        
    var Name = document.createElement("h4");
    Name.innerText = elem.name;
        
    var Price = document.createElement("h2");
    Price.innerText = elem.price+ "-" + elem.qnt;
        
    var discount = document.createElement("p");
    discount.innerText = elem.strikedoffprice;
        
     var total = cart_data.reduce(function(acc, elem){
        return acc += elem.price*elem.qnt;
    },0)

    document.querySelector("#displaytotal>h1").innerText=total
    var btn =document.createElement("button");
    btn.innerText="add + 1";
        
    btn.addEventListener("click",function(){
        increaseqnt(index)
     })
        
    var btn2 =document.createElement("button");
    btn2.innerText="add - 1";
        
    btn2.addEventListener("click",function(){
        decreaseqnt(index)
     })
    frame.append(Image, Name, Price, discount,btn,btn2);
     document.querySelector("#container").append(frame);
   });
}
display(cart_data)
function increaseqnt(index){
  cart_data[index].qnt++
  //console.log(cart_data);
  localStorage.setItem("cart", JSON.stringify(cart_data))
  display(cart_data);
  count++
  var cart_value= document.querySelector("#cart").innerText=count;
  localStorage.setItem("cart_v",JSON.stringify(cart_value));
}
function decreaseqnt(index){
   if(cart_data[index].qnt > 1){
    cart_data[index].qnt--;
   }
   else{
       cart_data[index].qnt=1;
   }
    localStorage.setItem("cart", JSON.stringify(cart_data))
    display(cart_data);
    if(count>1){
        count--;
    }
    else{
        count=0;
    }
    cart_value= document.querySelector("#cart").innerHTML=count;
    localStorage.setItem("cart_v", JSON.stringify(cart_value));
}

function apply(){
    var code= document.querySelector("#promo").value
    var total= Number(document.querySelector("#displaytotal>h1").innerText=total)
    if(code==="masai30"){
        var discountprice= (total*70)/100;
        document.querySelector("#discountprice").innerText= discountprice;
        alert("promo code apply");
    }
    else{
        alert("invaild promo code");
    }
}
