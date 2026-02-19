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

    // get current time at this time
    let today = new Date()
    let date = today.toLocaleDateString()
    let time = today.toLocaleTimeString()

    let appendmsg = document.querySelector(".his");
    let creatpra = document.createElement("p");
    creatpra.style.marginBottom = "15px"
    creatpra.innerHTML=`You have received Tk ${cuponprice} for us best buyer successful. Fee Tk 1.49. Balance $ ${total}. TrxID ${Math.floor(10000 + Math.random() * 9999999)} at ${date} in ${time}. successfully`
    appendmsg.prepend(creatpra)
})