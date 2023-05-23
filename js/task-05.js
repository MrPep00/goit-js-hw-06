const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", () => {
  const name = nameInput.value;
  if (name === "") {
    nameOutput.textContent = "Anonymus";
  } else {
    nameOutput.textContent = name;
  }
});
