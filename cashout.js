let cashoutbtn = document.querySelector("#cashout")

cashoutbtn.addEventListener("click",() => {
    // get agent numb
    let getagnumb = document.querySelector(".agent");

    // get ammount
    let getamnt = document.querySelector(".ammount");
    let amntconv = Number(getamnt.value)
    
    // get pin
    let getpin = document.querySelector(".pin");

    // get avablebel blance
    let a_blance = document.querySelector(".a-blance"); 
    let convblance = Number(a_blance.innerText)

    let cal = convblance - amntconv

    // current blance chalk
    if(cal < 0){
        alert("Insufficent Blance");
        return;   
    }

    // number or pin chalk
    if(getagnumb.value === "01712898695" && getpin.value === "1234"){
        a_blance.innerText = cal;
        alert("Successfull trx")
    }else{
        alert("Wrong Number or Pin")
        return;
    }
})