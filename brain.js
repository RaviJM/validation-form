// adding event listener to submit button
form = document
  .querySelector("#form1")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const emailField = document.querySelector("#email");
    const countryField = document.querySelector("#country");
    const zipField = document.querySelector("#zip");
    const passwordField = document.querySelector("#password");
    const passwordConfirmationField = document.querySelector(
      "#password-confirmation"
    );

    if (
      emailField.value === "" ||
      countryField.value === "" ||
      countryField.value === "select" ||
      passwordField.value !== passwordConfirmationField.value
    ) {
      if (emailField.value === "") {
        const emailError = document.querySelector("#emailError");
        emailError.textContent = "Email is a required field!";
      }
      if (countryField.value === "" || countryField.value === "select") {
        const countryError = document.querySelector("#countryError");
        countryError.textContent = "Select country!";
      }

      if (passwordField.value !== passwordConfirmationField.value) {
        const passwordConfirmationError = document.querySelector(
          "#passwordConfirmationError"
        );
        passwordConfirmationError.textContent =
          "Password Confirmation does not match the provided password!";
      }
    } else {
      const passwordConfirmationError = document.querySelector(
        "#passwordConfirmationError"
      );
      passwordConfirmationError.textContent = "";
      document.querySelector("#successMsg").textContent = "High Five!";
    }
  });

// adding event listener to email input [function to check email validity (called when email input is detected) and show error (if exists)]
const emailField = document.querySelector("#email");
emailField.addEventListener("input", (event) => {
  emailError = document.querySelector("#emailError");
  if (!emailField.validity.valid) {
    emailError.textContent = "Email format incorrect";
  } else {
    const emailError = document.querySelector("#emailError");
    emailError.textContent = "";
    emailError.textContent = "";
  }
});

// logic for disabling/ enabling zip code field until country is selected
const countryField = document.querySelector("#country");
countryField.addEventListener("change", (event) => {
  const zipField = document.querySelector("#zip");
  if (countryField.value === "select" || countryField.value === "") {
    zipField.disabled = true;
  } else {
    const countryError = document.querySelector("#countryError");
    countryError.textContent = "";
    zipField.disabled = false;
  }
});

// adding event listener to zip code input [function to check zip code validity (called when zip code input is detected) and show error (if exists)]
const zipField = document.querySelector("#zip");
zipField.addEventListener("input", (event) => {
  const zipValue = zipField.value;

  const zipError = document.querySelector("#zipError");

  const countryField = document.querySelector("#country");
  countryValue = countryField.value;
  let regex = "";

  if (countryValue === "india") {
    regex = "^[1-9][0-9]{5}$";
  } else {
    regex = "^\\d{5}(?:[-\\s]\\d{4})?$";
  }
  const constraintChecker = new RegExp(regex, "");
  if (constraintChecker.test(zipValue)) {
    zipError.textContent = "";
    zipField.setCustomValidity("");
  } else {
    zipError.textContent = "ZIP code invalid";
    zipField.setCustomValidity("Enter valid zip code");
  }
});
