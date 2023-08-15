// Deposit button 
document.getElementById('deposti-btn').addEventListener('click', function(){
  const depositInputField =  document.getElementById('deposit-input');
  const depositInputString = depositInputField.value;
    const depositInputValue = parseFloat(depositInputString);
 

    // depositAmonut 
    const depositBalanceData = document.getElementById('deposit-balance');
    const depositAmonutString = depositBalanceData.innerText;
    const depositBalanceValue = parseFloat(depositAmonutString);

      // balanceAmonut 
      const balanceBalanceData = document.getElementById('balance-balance');
      const balanceAmonutString = balanceBalanceData.innerText;
      const balanceBalanceValue = parseFloat(balanceAmonutString);

    // add input value and deposit amount 
    if(depositInputValue >= 0 ){
        const currentDepositAmonut = depositInputValue + depositBalanceValue;
        depositBalanceData.innerText = currentDepositAmonut;   

        balanceBalanceData.innerText = (depositInputValue + balanceBalanceValue);
    }else{
       alert('Please input possitive amount')
    }
    // clear depositInputData
    depositInputField.value = '';
})


// withdraw button 
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInputField =  document.getElementById('withdraw-input');
    const withdrawInputString = withdrawInputField.value;
      const withdrawInputValue = parseFloat(withdrawInputString);

      // withdrawAmonut 
      const withdrawBalanceData = document.getElementById('withdraw-balance');
      const withdrawAmonutString = withdrawBalanceData.innerText;
      const withdrawBalanceValue = parseFloat(withdrawAmonutString);
  
        // balanceAmonut 
        const balanceBalanceData = document.getElementById('balance-balance');
        const balanceAmonutString = balanceBalanceData.innerText;
        const balanceBalanceValue = parseFloat(balanceAmonutString);
  
      // add input value and deposit amount 
      if(withdrawInputValue >= 0 ){
          
            if(balanceBalanceValue > withdrawInputValue){
                const currentWithdrawAmonut = withdrawInputValue + withdrawBalanceValue;
                withdrawBalanceData.innerText = currentWithdrawAmonut;  
                balanceBalanceData.innerText = (balanceBalanceValue - withdrawInputValue);
            }else{
                alert('Sorry not a sufficient balance')
            }
         
      }else{
         alert('Please input possitive amount')
      }
      // clear depositInputData
      withdrawInputField.value = '';
  })

