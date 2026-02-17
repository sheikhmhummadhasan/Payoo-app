let btn = document.querySelector(".btn");
let number = document.querySelector("#number");
let pin = document.querySelector("#pin");

btn.addEventListener("click", ()=>{
    let valnum = number.value.trim();
    let valpin = pin.value.trim();

    let numb = "01712898695"
    let pen = "1234"

    if(valnum === numb && valpin === pen){
        window.location.assign("home.html")
    }else{
        return alert("Wrong number or pin")
    }
})