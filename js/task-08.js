const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;
  if (emailInput.value === "" || passwordInput.value === "") {
    alert("Please Fill in all fields");
  } else {
    const loginData = {
      email: emailInput.value,
      password: passwordInput.value,
    };
    console.log(loginData);
    loginForm.reset();
  }
});
