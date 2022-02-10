// deposite button add event listener
document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositField = document.getElementById('user-deposit-input');
    let depositAmountInput = depositField.value;
    const totalDeposit = document.getElementById('total-deposit');
    let perviousTotalDeposit = totalDeposit.innerText;
    let totalDepositAmount = parseFloat(perviousTotalDeposit) + parseFloat(depositAmountInput);
    totalDeposit.innerText = totalDepositAmount;

    depositField.value = '';

    const totalBalance = document.getElementById('total-balance');

    let previousTotalBalance = totalBalance.innerText;

    let newTotalBalance = parseFloat(previousTotalBalance) + parseFloat(depositAmountInput);
    totalBalance.innerText = newTotalBalance;

});

// withdraw button add event listener

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const depositField = document.getElementById('user-withdraw-input');
    let depositAmountInput = depositField.value;
    const totalDeposit = document.getElementById('total-withdraw');
    let perviousTotalDeposit = totalDeposit.innerText;
    let totalDepositAmount = parseFloat(perviousTotalDeposit) + parseFloat(depositAmountInput);
    totalDeposit.innerText = totalDepositAmount;

    depositField.value = '';

    const totalBalance = document.getElementById('total-balance');

    let previousTotalBalance = totalBalance.innerText;

    let newTotalBalance = parseFloat(previousTotalBalance) - parseFloat(depositAmountInput);
    totalBalance.innerText = newTotalBalance;

});