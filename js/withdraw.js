// get the withdraw button and set event listener
document.getElementById("login-btn").addEventListener("click", function () {
  // get the withdraw amount from input field
  const withdrawfield = document.getElementById("withdraw-field");
  const newWithdrawAmount = parseFloat(withdrawfield.value);

  // clear input field
  withdrawfield.value = "";

  if (isNaN(newWithdrawAmount)) {
    alert("Enter a valid amount");
    return;
  }

  // get the current withdraw ammount
  const withdrawElement = document.getElementById("withdraw-amount");
  const currentWithdrawAmount = parseFloat(withdrawElement.innerText);

  // set the new withdraw amount

  //   set the new balance
  const totalBalance = document.getElementById("total-balance");

  //check if the withdraw amount is greater than the balance
  if (newWithdrawAmount > parseFloat(totalBalance.innerText)) {
    alert("Baap er bank e eto taka nai");
    return;
  }

  withdrawElement.innerText = newWithdrawAmount + currentWithdrawAmount;
  totalBalance.innerText =
    parseFloat(totalBalance.innerText) - newWithdrawAmount;

  //   console.log(typeof currentWithdrawAmount);
});
