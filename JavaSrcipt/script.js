
const inputIncome=document.getElementById("inputIncome");
const inputFood=document.getElementById("inputFood");
const inputRent=document.getElementById("inputRent");
const inputClothes=document.getElementById("inputClothes");
const Expenses=document.getElementById("total_expenses");
const balance=document.getElementById("balance");
const inputSave=document.getElementById("inputSave");
let totalExpenses;
let remainingBalance;
let totalIncome;

function calculatePercentage(){

}
document.getElementById("calculate").addEventListener("click",function(e) {
    totalExpenses= parseInt(inputRent.value)+parseInt(inputClothes.value)+parseInt(inputFood.value);
    Expenses.innerText=totalExpenses;
    totalIncome=parseInt(inputIncome.value);
    remainingBalance=totalIncome-totalExpenses;
    balance.innerText=remainingBalance;
    document.getElementById("save-button").addEventListener("click",function(e) {
        var value=calculatePercentage();

    })
})

