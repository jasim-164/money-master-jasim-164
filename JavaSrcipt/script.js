//for income input
const inputIncome=document.getElementById("inputIncome");
//for expenses input
const inputFood=document.getElementById("inputFood");
const inputRent=document.getElementById("inputRent");
const inputClothes=document.getElementById("inputClothes");
//for calculte balance after expenses
const Expenses=document.getElementById("total_expenses");
const balance=document.getElementById("balance");
// for saving amount
const inputSave=document.getElementById("inputSave");
const savingAmount=document.getElementById("savingAmount");
const RemainingAmount=document.getElementById("RemainingAmount");


//variable declare
var totalExpenses;
var remainingBalance;
var totalIncome;
var saveBalance
//balance variable


function calculatePercentage(totalIncome,saveBalance){
var percentage =(totalIncome*saveBalance) / (100);
return percentage;
}

document.getElementById("calculate").addEventListener("click",function(e) {
   
    totalExpenses= parseInt(inputRent.value)+parseInt(inputClothes.value)+parseInt(inputFood.value);
    Expenses.innerText=totalExpenses;

    totalIncome=parseInt(inputIncome.value);
    remainingBalance=totalIncome-totalExpenses;
    balance.innerText=remainingBalance;
})

document.getElementById("saveButton").addEventListener("click",function(e) {
    saveBalance=parseInt(inputSave.value);
    console.log("totalIncome",totalIncome);
    console.log("savebalance2", saveBalance);
    let val= (totalIncome*saveBalance) / (100);
    //var amount=calculatePercentage(totalIncome,saveBalance);
    console.log(val);
    savingAmount.innerText=val;
    RemainingAmount.innerText =remainingBalance-val;

})


