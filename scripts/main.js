const currencyElement = document.querySelector(".js-currency");
const amountElement = document.querySelector(".js-amount");
const formElement = document.querySelector(".js-form");
const resultElement = document.querySelector(".js-result");
const maxFixed = 2;
const countCurrency = (currency,amount)=>{
  return amount * currency;
};
const formSubmitHandler = (event) => {
  event.preventDefault();

  const currency = Number(currencyElement.value);
  const amount = Number(amountElement.value);

  resultElement.innerText = countCurrency(currency,amount).toFixed(maxFixed);
};
const resetResult = () => {
  resultElement.innerText = Number(0).toFixed(maxFixed);
};
const init = () => {
  console.log("Hello World!");
  formElement.addEventListener("submit", formSubmitHandler);
  formElement.addEventListener("reset", resetResult);
};

init();
