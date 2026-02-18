let bonusbtn = document.querySelector(".btn");

bonusbtn.addEventListener("click",() =>{
    // get bonus input
    let getbonus = document.querySelector(".bonus");
    let bonus = getbonus.value;
    if(bonus !== "007007"){
        alert("Invalid Cuppon Please enter valid Cuppon.")
        return;
    }

    // create cupon price
    let cuponprice = 500;

    // get current amount
    let currentamount = document.querySelector("#blance");
    let Cblance = currentamount.innerText;
    console.log(Cblance)

    // let join bonus with current price;
    let total = cuponprice + Number(Cblance)
    alert("Congutaliton You Got $500 As Bonus");
    currentamount.innerText = total
})