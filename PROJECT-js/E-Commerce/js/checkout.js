document.querySelector("#form").addEventListener("submit",submitfun);


function submitfun(event){
    event.preventDefault();
    var data={
        Card: document.querySelector("#card").value,
        exp: document.querySelector("#exp").value,
        date: document.querySelector("#date").value,
        name: document.querySelector("#name").value,
        cvv: document.querySelector("#cvv").value,
    };
    console.log(data);
   
   localStorage.setItem("signup" , JSON.stringify(data));


   document.querySelector("input[type='submit']").addEventListener("click",function(){
       var otp = document.createElement("h3")
       otp.innerText="Enter OTP"
       otp.setAttribute("id", "otp")
       var otpinput=document.createElement("input")
       otpinput.setAttribute("type","Number")
       otpinput.setAttribute("id","otpis")

       var paybtn= document.createElement("button")
       paybtn.innerText="pay"
       paybtn.setAttribute("id","pay")
       paybtn.addEventListener("click",function(){
           Payment();

       })
       document.querySelector("#otp").append(otp,paybtn,otpinput)

   })
    
}
function Payment(event){
    var otpis= document.querySelector("#otpis").value
    if(otpis==1234){
        alert("payments sucessful")
    }
    else{
        alert("wrong otp")
    }

}