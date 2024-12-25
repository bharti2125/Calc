let inputValue = "";
let memoryValue = 0;

const display = document.getElementById("display");

const handleButtonClick = (value) => {
  inputValue += value;
  display.value = inputValue;
};

const handleDelete = () => {
  inputValue = inputValue.slice(0, -1);
  display.value = inputValue;
};

const handleReset = () => {
  inputValue = "";
  display.value = "";
};

const calculateResult = () => {
  let finalValue = inputValue;
  const lastChar = finalValue[finalValue.length - 1];
  if (["+", "-", "*", "/"].includes(lastChar)) {
    finalValue = finalValue.slice(0, -1);
  }
  try {
    display.value = eval(finalValue);
    inputValue = display.value;
  } catch {
    display.value = "Error";
    inputValue = "";
  }
};

const calculateSquareRoot = () => {
  display.value = Math.sqrt(eval(display.value));
  inputValue = display.Value;
};

const calculatePercentage = () => {
  display.value = eval(display.value) / 100;
  inputValue = display.value;
};

const memoryClear = () => {
  inputValue = 0;
};

const memoryRecall = () => {
  display.value = memoryValue;
};

const memoryAdd = () => {
  memoryValue += parseFloat(display.value) || 0;
};

memorySubtract = () => {
  memoryValue -= parseFloat(display.value) || 0;
};

document.getElementById("themeSwitch").addEventListener("change", function () {
  document.body.classList.toggle("dark-mode");
  document.querySelector(".advanced-group").classList.toggle("hidden");
});

document.addEventListener("keydown", (event) => {
  const allowedKeys = "0123456789+-*/.=%√";
  if (allowedKeys.includes(event.key)) {
    handleButtonClick(event.key);
  } else if (event.key === "Enter") {
    calculateResult();
  } else if (event.key === "Backspace") {
    handleDelete();
  }
});
