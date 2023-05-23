const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  const inputLength = input.dataset.length;
  const inputValue = input.value.length;
  if (inputValue === Number(inputLength)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
