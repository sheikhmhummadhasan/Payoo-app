let trnbtn = document.querySelector(".btn");

// add event listener
trnbtn.addEventListener("click",() =>{
    // get user account number
    let getusernumber = document.querySelector(".number");
    let user = getusernumber.value;
    if(user !== "01812898695"){
        alert("Provide Current Account Holder Number")
        return;
    }
    console.log(user)

    // get ammount
    let getuserammount = document.querySelector(".amount");
    let amount = getuserammount.value;
    console.log(amount)

    // get pin
    let getpin = document.querySelector(".pin");
    let pin = getpin.value;
    console.log(pin)

    // get current blance
    let getcurrentblance = document.querySelector("#Cblance");
    let Cblance = getcurrentblance.innerText;
    console.log(Cblance)

    // let calclute
    let trs = Number(Cblance) - Number(amount);
    
    // chalk current blance avableble or not
    if(trs < 0){
        alert("inncuficent blance")
        return;
    }
    // show right now blance after calclute
    getcurrentblance.innerText = trs;
    alert("Transfer Succcessful")

})