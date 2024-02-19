document.addEventListener("DOMContentLoaded", () => {
  // creating new arrays
  const numberBank = [];
  const oddNumbers = [];
  const evenNumbers = [];

  const numberInput = document.getElementById("numberInput");
  const addNumberBtn = document.getElementById("addNumberBtn");
  const sortOneBtn = document.getElementById("sortOneBtn");
  const sortAllBtn = document.getElementById("sortAllBtn");
  const numberBankOutput = document.getElementById("numberBankOutput");
  const oddNumbersOutput = document.getElementById("oddNumbersOutput");
  const evenNumbersOutput = document.getElementById("evenNumbersOutput");

  addNumberBtn.addEventListener("click", (e) => {
    // try to prevent default page from auto refreshing
    e.preventDefault();
    // converting a number into integer number
    const enteredNumber = parseInt(numberInput.value);
    // checking if entered number is not NaN and push to new array
    if (!isNaN(enteredNumber)) {
      numberBank.push(enteredNumber);
      // used display() Method that merge new array elements using ,
      updateDisplay();
    }
  });

  sortOneBtn.addEventListener("click", (e) => {
    // try to prevent default page from auto refreshing
    e.preventDefault();
    // checking that input number is more than 0
    if (numberBank.length > 0) {
      // shift() method used here to add new number at the bigining of the numberBank Array
      const currentNumber = numberBank.shift();
      //  checking new Array element is divided by 2
      currentNumber % 2 === 0
        ? evenNumbers.push(currentNumber)
        : oddNumbers.push(currentNumber);
      // used display() Method that merge new array elements using ,
      updateDisplay();
    }
  });

  sortAllBtn.addEventListener("click", (e) => {
    // try to prevent default page from auto refreshing
    e.preventDefault();
    // checking that input number is more than 0
    while (numberBank.length > 0) {
      // shift() method used here to add new number at the bigining of the numberBank Array
      const currentNumber = numberBank.shift();
      //  checking new Array element is divided by 2 and add to oddnumber array
      currentNumber % 2 === 0
        ? evenNumbers.push(currentNumber)
        : oddNumbers.push(currentNumber);
    }
    // used display() Method that merge new array elements using ,
    updateDisplay();
  });

  // display Function that renders new array in putput tag field
  function updateDisplay() {
    numberBankOutput.textContent = numberBank.join(", ");
    oddNumbersOutput.textContent = oddNumbers.join(", ");
    evenNumbersOutput.textContent = evenNumbers.join(", ");
  }
});
