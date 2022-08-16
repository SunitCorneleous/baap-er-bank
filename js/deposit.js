// add event listener to the deposit button
document.getElementById("deposit-btn").addEventListener("click", function () {
  // get the amount from the input field
  const depositField = document.getElementById("deposit-field");
  const newDepositAmount = parseFloat(depositField.value);

  // get the deposit display area
  const currentDeposit = document.getElementById("deposit-total");
  const previousDepositAmount = parseFloat(currentDeposit.innerText);

  // set the deposit value
  const totalDeposit = newDepositAmount + previousDepositAmount;
  currentDeposit.innerText = totalDeposit;

  // set total balance
  const totalBalance = document.getElementById("total-balance");
  totalBalance.innerText =
    parseFloat(totalBalance.innerText) + newDepositAmount;

  // clear input field
  depositField.value = "";
});
