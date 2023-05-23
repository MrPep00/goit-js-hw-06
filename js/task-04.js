const value = document.querySelector("#value");
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
let counterValue = 0;
const increaseValue = () => {
  counterValue += 1;
  value.textContent = counterValue;
};
const decreaseValue = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};
incrementBtn.addEventListener("click", increaseValue);
decrementBtn.addEventListener("click", decreaseValue);
