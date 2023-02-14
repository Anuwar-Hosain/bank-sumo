// deposit all action
document.getElementById("deposit-btn").addEventListener("click", function () {
  // deposit input field set
  const depositField = document.getElementById("deposit-field");
  const newDepositAmountSting = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountSting);
  depositField.value = "";

  //   get deposit total action
  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotalAmountString = depositTotalElement.innerText;
  const previousDepositTotalAmount = parseFloat(
    previousDepositTotalAmountString
  );
  //   sum section
  const newDepositTotal = previousDepositTotalAmount + newDepositAmount;
  depositTotalElement.innerText = newDepositTotal;

  //   balance section total
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);
  //   calculator
  const balanceTotal = previousBalanceTotal + newDepositAmount;
  //   set balance
  balanceTotalElement.innerText = balanceTotal;
});

// withdraw all action
document.getElementById("withdraw-btn").addEventListener("click", function () {
  // withdraw input field set
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);
  withdrawField.value = "";

  //   get withdraw total action
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalAmountString = withdrawTotalElement.innerText;
  const previousWithdrawTotalAmount = parseFloat(
    previousWithdrawTotalAmountString
  );

  //   sum action
  const newWithdrawTotal = previousWithdrawTotalAmount + newWithdrawAmount;
  withdrawTotalElement.innerText = newWithdrawTotal;

  //   balance section action
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  const balanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = balanceTotal;
  //   validation
  //   if (newWithdrawAmount > previousBalanceTotal) {
  //     alert("Not enough money");
  //     return;
  //   }
});
