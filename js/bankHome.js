document.getElementById('depositBtn').addEventListener('click', function () {
    let depositAmount = document.getElementById('depositAmount');
    let depositInput = document.getElementById('depositInput');
    const inputNumber=parseInt(depositInput.value);
    if (inputNumber>=0) {
        
        calculateBalance(depositAmount, depositInput);
        // balance calculation is here
        const balance = document.getElementById('balance')
        const convertedBalance = parseInt(balance.innerText);
        balance.innerText = convertedBalance + inputNumber
    }
    else{
        alert("Type Integer Number")
    }
    // clear input value
    depositInput.value = "";
})
document.getElementById('withdrawBtn').addEventListener('click', () => {
    const withdrawAmount = document.getElementById('withdrawAmount')
    const withdrawInput = document.getElementById('withdrawInput')
    const balance = document.getElementById('balance')
    const convertedBalance = parseInt(balance.innerText);
    const inputNumber=parseInt(withdrawInput.value)
    if (convertedBalance>=inputNumber&& inputNumber>=0) {
        calculateBalance(withdrawAmount, withdrawInput)
    // balance calculation is here
    balance.innerText = convertedBalance - inputNumber
   } 
   else{
       alert("Money has finished. First Deposit then Withdraw.Or type integer number")
   }
   // clear input value
    withdrawInput.value = ""
    
})

function calculateBalance(previous, inputted) {
    const previousNum = parseInt(previous.innerText);
    const inputtedNum = parseInt(inputted.value);
    const add = previousNum + inputtedNum;
    previous.innerText = add
}




