 document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawFelid = document.getElementById('withdraw-felid');
    const newWithdrawFelidAmountString = withdrawFelid.value;
    const newWithdrawFelidAmount= parseFloat(newWithdrawFelidAmountString);
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawAmountString = withdrawTotalElement.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString); 
    withdrawTotalElement.innerText = previousWithdrawAmount + newWithdrawFelidAmount;

   const balanceTotalElement= document.getElementById('balance-total');
   const balanceTotalString = balanceTotalElement.innerText
   const previousBalanceTotal = parseFloat(balanceTotalString);
   balanceTotalElement.innerText = previousBalanceTotal - newWithdrawFelidAmount;

    withdrawFelid.value ='';
})