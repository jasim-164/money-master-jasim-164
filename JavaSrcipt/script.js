//for income input
const inputIncome=document.getElementById("inputIncome");
//for expenses input
const inputFood=document.getElementById("inputFood");
const inputRent=document.getElementById("inputRent");
const inputClothes=document.getElementById("inputClothes");
const Expenses=document.getElementById("total_expenses");
//for calculte balance after expenses
const balance=document.getElementById("balance");
const inputSave=document.getElementById("inputSave");
// for saving amount
const savingAmount=document.getElementById("savingAmount");
const RemainingAmount=document.getElementById("RemainingAmount");



let totalExpenses;
let remainingBalance;
let totalIncome;

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

    var saveBalance=inputSave.innerText;

    document.getElementById("save-button").addEventListener("click",function(e) {
        var value=calculatePercentage(totalIncome,saveBalance);


    })
})

