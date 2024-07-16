const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector(".check-btn");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = ["2000", "500", "100", "20", "10", "5", "1"];

checkButton.addEventListener("click", function validateBillAmount() {
  if (billAmount.value > 0) {
    if (cashGiven.value > billAmount.value) {
      const returnAmount = cashGiven.value - billAmount.value;
      calculateReturn(returnAmount);
    } else {
      showMessage(" Cash amount should be greater than bill amount");
    }
  } else {
    showMessage("The Bill amount should be greater then 0.");
  }
});

function calculateReturn(returnAmount) {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(returnAmount / availableNotes[i]);
    returnAmount = returnAmount % availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}

function showMessage(msg) {
  message.innerHTML = msg;
}
