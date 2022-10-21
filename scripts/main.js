console.log("Hello World!");

const currencyElement = document.querySelector(".js-currency");
const amountElement = document.querySelector(".js-amount");
const formElement = document.querySelector(".js-form");
const resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const currency = Number(currencyElement.value);
  const amount = Number(amountElement.value);

  const result = amount * currency;

  resultElement.innerText = result.toFixed(2);
});

formElement.addEventListener("reset", (event) => {
  resultElement.innerText = Number(0).toFixed(2);
});
