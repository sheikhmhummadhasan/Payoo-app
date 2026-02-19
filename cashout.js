let cashoutbtn = document.querySelector("#cashout")

cashoutbtn.addEventListener("click",() => {
    // get agent numb
    let getagnumb = document.querySelector(".agent");
    let agentnum = getagnumb.value;

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
        // return;
    }

     // get current time at this time
    let today = new Date()
    let date = today.toLocaleDateString()
    let time = today.toLocaleTimeString()

    let appendmsg = document.querySelector(".his");
    let creatpra = document.createElement("p");
    creatpra.style.marginBottom = "15px"
    creatpra.innerHTML=`Cash Out Tk ${amntconv} to ${agentnum} successful. Fee Tk 1.49. Balance $ ${cal}. TrxID ${Math.floor(10000 + Math.random() * 9999999)} at ${date} in ${time}. Cash Out from 2 Priyo Agents at 1.49%`
    appendmsg.prepend(creatpra)
})