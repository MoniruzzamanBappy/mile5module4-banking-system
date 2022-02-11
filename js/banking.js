function getInputValue(userInputId) {
    const depositField = document.getElementById(userInputId);
    let depositAmountInput = depositField.value;
    let newBalDip = parseFloat(depositAmountInput);

    depositField.value = '';

    return newBalDip;
}

// deposite button add event listener
document.getElementById('deposit-btn').addEventListener('click', function () {
    // const depositField = document.getElementById('user-deposit-input');
    // let depositAmountInput = depositField.value;
    const totalDeposit = document.getElementById('total-deposit');
    let perviousTotalDeposit = totalDeposit.innerText;
    let newDeposit = getInputValue('user-deposit-input');
    let totalDepositAmount = parseFloat(perviousTotalDeposit) + newDeposit;
    totalDeposit.innerText = totalDepositAmount;

    // depositField.value = '';

    const totalBalance = document.getElementById('total-balance');

    let previousTotalBalance = totalBalance.innerText;
    let newTotalBalance = parseFloat(previousTotalBalance) + newDeposit;
    totalBalance.innerText = newTotalBalance;

});


// withdraw button add event listener
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // const depositField = document.getElementById('user-withdraw-input');
    // let depositAmountInput = depositField.value;
    const totalDeposit = document.getElementById('total-withdraw');
    let perviousTotalDeposit = totalDeposit.innerText;
    let newWithdraw = getInputValue('user-withdraw-input');
    let totalDepositAmount = parseFloat(perviousTotalDeposit) + newWithdraw;
    totalDeposit.innerText = totalDepositAmount;

    // depositField.value = '';

    const totalBalance = document.getElementById('total-balance');

    let previousTotalBalance = totalBalance.innerText;

    let newTotalBalance = parseFloat(previousTotalBalance) - newWithdraw;
    totalBalance.innerText = newTotalBalance;

});