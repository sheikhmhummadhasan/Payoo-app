let addbtn = document.querySelector(".btn");

addbtn.addEventListener("click",()=>{
    // get slect bank
    let getslectbank = document.querySelector("#number");
    let bank = getslectbank.value;
    if(bank === "Select a Bank"){
        alert("Chose the Bank");
        return;
    }
    console.log(bank)

    // Bank account Number
    let getaccnumb = document.querySelector(".acc");
    let accountnumber = getaccnumb.value;
    if(accountnumber !== "01712898695"){
        alert("Enter A Valid Number");
        return;
    }
    console.log(accountnumber)

    // get Amount
    let getamount = document.querySelector(".amount");
    let amount = getamount.value;
    console.log(amount)

    // get pin
    let getpin = document.querySelector(".pin");
    let pin = getpin.value;
    if(pin !== "1234"){
        alert("Please Enter A valid pin")
        return;
    }
    console.log(pin)

    // Current Blance
    let getcurrentblance = document.querySelector("#blance");
    let Cblance = getcurrentblance.innerText;
    console.log(Cblance)

    let addA = Number(amount) + Number(Cblance)
    console.log(addA)

    // erace amount are shouldt to bighger
    // if(addA < 0){
    //     alert("Insufficent blance");
    //     return;
    // }

    // finaly add new blance
    alert("Add Mony is Successfull")
    getcurrentblance.innerText=(Number(addA))

    // get current time at this time
    let today = new Date()
    let date = today.toLocaleDateString()
    let time = today.toLocaleTimeString()

    let appendmsg = document.querySelector(".his");
    let creatpra = document.createElement("p");
    creatpra.style.marginBottom = "15px"
    creatpra.innerHTML= `You have received $${amount} from ${bank} ${accountnumber}. Fee Tk 0.00. Balance ${addA}. TrxID ${Math.floor(10000 + Math.random() * 9999999)} at ${date} in ${time}`
    appendmsg.prepend(creatpra)
})