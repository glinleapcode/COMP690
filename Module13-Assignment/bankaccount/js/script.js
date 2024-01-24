const bankAccount = function (ownerName) {
  let balance = 0;
  let name = ownerName;
  return {
    withdraw: function (withdrawalAmount) {
      if (withdrawalAmount > balance) {
        // console.log("Insufficient funds");
        // return null to indicate cannot complete transaction because of insufficient funds
        return null;
      }
      balance -= withdrawalAmount;
      return balance;
    },
    deposit: function (depositAmount) {
      balance += depositAmount;
      return balance;
    },
    getOwnerName: function () {
      return name;
    },
  };
};

const nameBtn = document.getElementById("name");
const depositBtn = document.getElementById("deposit");
const withdrawBtn = document.getElementById("withdraw");
const display = document.getElementById("display");

let account;
nameBtn.addEventListener("click", () => {
  const name = prompt("Enter your name");
  // console.log(name);
  display.innerHTML = `Welcome to your bank account: Name: ${name}`;
  account = bankAccount(name);
});

depositBtn.addEventListener("click", () => {
  const amount = parseFloat(prompt("Enter the amount to deposit"));
  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount");
    return;
  }
  const newBalance = account.deposit(amount);
  display.innerHTML = `Name: ${account.getOwnerName()} <br> New Balance: ${newBalance} <br>
   Recent Transaction: depositing ${amount} `;
  // console.log(amount, typeof amount);
});

withdrawBtn.addEventListener("click", () => {
  const amount = parseFloat(prompt("Enter the amount to withdraw"));
  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount");
    return;
  }
  const newBalance = account.withdraw(amount);
  // check if newBalance is null, if so, alert user of insufficient funds
  if (newBalance === null) {
    alert("Insufficient funds for withdrawal.");
    return;
  }
  display.innerHTML = `Name: ${account.getOwnerName()} <br> New Balance: ${newBalance} <br> Recent Transaction: withdrawing ${amount} `;
  console.log(amount, typeof amount);
});
