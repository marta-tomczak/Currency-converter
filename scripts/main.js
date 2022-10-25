const currencyElement = document.querySelector(".js-currency");
const amountElement = document.querySelector(".js-amount");
const formElement = document.querySelector(".js-form");
const resultElement = document.querySelector(".js-result");
const countCurrency = (event) => {
  event.preventDefault();

  const currency = Number(currencyElement.value);
  const amount = Number(amountElement.value);

  const result = amount * currency;

  resultElement.innerText = result.toFixed(2);
};
const resetResult = () => {
  resultElement.innerText = Number(0).toFixed(2);
};
const init = () => {
  console.log("Hello World!");
  formElement.addEventListener("submit", countCurrency);
  formElement.addEventListener("reset", resetResult);
};

init();
