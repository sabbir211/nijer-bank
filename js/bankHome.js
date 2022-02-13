document.getElementById('depositBtn').addEventListener('click', function () {
    let depositAmount = document.getElementById('depositAmount');
    let depositInput = document.getElementById('depositInput');
    const inputNumber=parseInt(depositInput.value);
    if (inputNumber>=0) {
        calculateBalance(depositAmount, depositInput,true);
    }
    else{
        alert("Type positive Number")
    }
})
document.getElementById('withdrawBtn').addEventListener('click', () => {
    const withdrawAmount = document.getElementById('withdrawAmount')
    const withdrawInput = document.getElementById('withdrawInput')
    const inputNumber=parseInt(withdrawInput.value)
    const balance = document.getElementById('balance')
    const convertedBalance = parseInt(balance.innerText);
    if (convertedBalance>=inputNumber&& inputNumber>=0) {
        calculateBalance(withdrawAmount, withdrawInput,false)
   } 
   else{
       alert("Money has finished. First Deposit then Withdraw.Or type integer number")
    }
})

function calculateBalance(previous, inputted,isIncrease) {
    const previousNum = parseInt(previous.innerText);
    const inputtedNum = parseInt(inputted.value);
    const add = previousNum + inputtedNum;
    previous.innerText = add;
    // balance update 
    const balance = document.getElementById('balance')
    const convertedBalance = parseInt(balance.innerText);
   if (isIncrease) {
    balance.innerText = convertedBalance + inputtedNum

   } else {
    balance.innerText = convertedBalance - inputtedNum     
   }
   inputted.value=""
}




