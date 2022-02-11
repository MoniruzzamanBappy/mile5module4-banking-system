function getInputValue(userInputId) {
    const depositField = document.getElementById(userInputId);
    let depositAmountInput = depositField.value;
    let newBalDip = parseFloat(depositAmountInput);

    depositField.value = '';

    return newBalDip;
}

function newTotal(userInput, prevoiusTotal) {
    const totalDipWith = document.getElementById(prevoiusTotal);
    let perviousTotalDipWith = totalDipWith.innerText;
    let totalDipWithAmount = parseFloat(perviousTotalDipWith) + userInput;
    totalDipWith.innerText = totalDipWithAmount;
}

function getCurrentBalance() {
    const totalBalance = document.getElementById('total-balance');
    let previousTotalBalance = totalBalance.innerText;
    return parseFloat(previousTotalBalance);
}

function totalBalance(balance, isAdd) {
    const totalBalance = document.getElementById('total-balance');
    let currentBalance = getCurrentBalance();
    if (isAdd == true) {
        totalBalance.innerText = currentBalance + balance;
    }
    else {
        totalBalance.innerText = currentBalance - balance;
    }
}

// deposite button add event listener
document.getElementById('deposit-btn').addEventListener('click', function () {
    // const depositField = document.getElementById('user-deposit-input');
    // let depositAmountInput = depositField.value;
    // const totalDeposit = document.getElementById('total-deposit');
    // let perviousTotalDeposit = totalDeposit.innerText;
    // let totalDepositAmount = parseFloat(perviousTotalDeposit) + newDeposit;
    // totalDeposit.innerText = totalDepositAmount;

    // depositField.value = '';

    // const totalBalance = document.getElementById('total-balance');

    // let previousTotalBalance = totalBalance.innerText;
    // let newTotalBalance = parseFloat(previousTotalBalance) + newDepositValu;
    // totalBalance.innerText = newTotalBalance;
    let newDepositValu = getInputValue('user-deposit-input');
    if (newDepositValu > 0) {
        let newDeposit = newTotal(newDepositValu, 'total-deposit');
        totalBalance(newDepositValu, true);
    }
    else {
        alert("Enter a valid number");
    }

});




// withdraw button add event listener
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // const depositField = document.getElementById('user-withdraw-input');
    // let depositAmountInput = depositField.value;
    // const totalDeposit = document.getElementById('total-withdraw');
    // let perviousTotalDeposit = totalDeposit.innerText;
    // let newWithdraw = getInputValue('user-withdraw-input');
    // let totalDepositAmount = parseFloat(perviousTotalDeposit) + newWithdraw;
    // totalDeposit.innerText = totalDepositAmount;

    // depositField.value = '';


    // const totalBalance = document.getElementById('total-balance');

    // let previousTotalBalance = totalBalance.innerText;

    // let newTotalBalance = parseFloat(previousTotalBalance) - newWithdrawValu;
    // totalBalance.innerText = newTotalBalance;

    let newWithdrawValu = getInputValue('user-withdraw-input');
    let currentBalance = getCurrentBalance();
    if (newWithdrawValu > 0 && newWithdrawValu < currentBalance) {
        let newWithdraw = newTotal(newWithdrawValu, 'total-withdraw');
        totalBalance(newWithdrawValu, false);
    }
    else {
        alert("Enter a valid number");
    }

});