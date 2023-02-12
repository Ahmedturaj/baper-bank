// 
document.getElementById('btn-deposit').addEventListener('click', function(){
//    get the deposit from the deposit field
const depositFelid = document.getElementById('deposit-felid');
const newDepositAmountString = depositFelid.value;
const newDepositAmount = parseFloat(newDepositAmountString);
const depositTotalElement = document.getElementById('deposit-total');
const PreviousDepositTotalString = depositTotalElement.innerText;
const depositTotal = parseFloat(PreviousDepositTotalString);
depositTotalElement.innerText=depositTotal + newDepositAmount;

// balance
const balanceFelid = document.getElementById('balance-total');
const previousBalanceTotalString = balanceFelid.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);
const totalBalance = previousBalanceTotal + newDepositAmount;
balanceFelid.innerText= totalBalance; 

depositFelid.value='';

})