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
//error message load
var x = document.getElementById('error-message');  
var y = document.getElementById('error-message2'); 
//variable declare
var totalExpenses;
var remainingBalance;
var totalIncome;
var saveBalance;
var amount;
//balance variable
var allErrors=[];

function calculatePercentage(totalIncome,saveBalance){
var percentage =(totalIncome*saveBalance) / (100);
return percentage;
}

function checkInput()
{
    //number check is this is number
    if(isNaN(inputRent.value))
    {
        allErrors.push("input is not number");
    }
    if(isNaN(inputClothes.value))
    {
        allErrors.push("input is not number");
    }
    if(isNaN(inputFood.value))
    {
        allErrors.push("input is not number");
    }
    //negative number check 
    if(parseInt(inputRent.value)<0 || parseInt(inputClothes.value)<0 ||parseInt(inputFood.value)<0 )
    {
        allErrors.push("input number is negative");
    }

    //for saving input valiadtion check
    if(remainingBalance<amount)
    {
        allErrors.push("negative current balance ");
    }
    if(isNaN(inputSave.value))
    {
        allErrors.push("input is not number");
    }
    if(inputSave.value<0)
    {
        allErrors.push("input is not number");
    }

}

document.getElementById("calculate").addEventListener("click",function(e) {
    checkInput(); 
    if(allErrors.length>0)
    {
        Expenses.innerText="Invalid";
        balance.innerText="Invalid";
           
        x.style.display = 'inline-block';//error message display
        allErrors=[];
       
    }
   
    else{
    x.style.display = 'none';//error hidden
    totalExpenses= parseInt(inputRent.value)+parseInt(inputClothes.value)+parseInt(inputFood.value);
    Expenses.innerText=totalExpenses;

    totalIncome=parseInt(inputIncome.value);
    remainingBalance=totalIncome-totalExpenses;
    balance.innerText=remainingBalance;
    }
})
allErrors=[];
document.getElementById("saveButton").addEventListener("click",function(e) {
    saveBalance=parseInt(inputSave.value);

    amount=calculatePercentage(totalIncome,saveBalance);

    checkInput(); //error function called

    // if(RemainingAmount.innerText<0)
    // {
    //     errors.push("Please give correct input thats why saving amount is not greater than current amount")
    // }

    if(allErrors.length>0)
    {
        y.style.display = 'inline-block';
        savingAmount.innerText="Invalid input";
        RemainingAmount.innerText="Invalid input";
        allErrors=[];
    }
    else
    {
        y.style.display = 'none';
        //console.log(amount);
        savingAmount.innerText=amount;
        RemainingAmount.innerText =remainingBalance-amount;
    }

})


