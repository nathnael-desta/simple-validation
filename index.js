const inputs = document.querySelectorAll("input");
const form = document.querySelector("form");

inputs.forEach((input) => {
  input.addEventListener("change", () => {
    if (input.id == "zipcode") {
      if (input.value == "") {
        input.nextElementSibling.textContent = `${input.id} is required`;
        input.nextElementSibling.classList.add("active");
        input.classList.add("active");
      } else if (input.value.length !== 5) {
        input.nextElementSibling.textContent = `Format should be 12345`;
        input.nextElementSibling.classList.add("active");
        input.classList.add("active");
      } else {
        input.nextElementSibling.classList.remove("active");
        input.classList.remove("active");
        input.nextElementSibling.textContent = "";
      }
    } else if (input.id == "password_confirmation") {
      if (input.value == "") {
        input.nextElementSibling.textContent = `${input.id} is required`;
        input.nextElementSibling.classList.add("active");
        input.classList.add("active");
      } else if (input.value != input.parentElement.previousElementSibling.children[1].value) {
        input.nextElementSibling.textContent = `Passwords must match`;
        input.nextElementSibling.classList.add("active");
        input.classList.add("active");
      } else {
        input.nextElementSibling.classList.remove("active");
        input.classList.remove("active");
        input.nextElementSibling.textContent = "";
      }
    } else if (input.validity.valid) {
      input.nextElementSibling.classList.remove("active");
      input.classList.remove("active");
      input.nextElementSibling.textContent = "";
    } else {
      showError(input);
      console.log("asdfaf");
    }
  });
});

function showError(myInput) {
  if (myInput.validity.valueMissing) {
    myInput.nextElementSibling.textContent = `${myInput.id} is required`;
    myInput.nextElementSibling.classList.add("active");
    myInput.classList.add("active");
  } else if (myInput.validity.typeMismatch) {
    myInput.nextElementSibling.textContent = `Not ${myInput.id} format`;
    myInput.nextElementSibling.classList.add("active");
    myInput.classList.add("active");
  }
}

form.addEventListener("submit", (event) => {
  console.log(inputs);
  inputs.forEach((input) => {
    if (input.id == "zipcode") {
      if (input.value == "") {
        input.nextElementSibling.textContent = `${input.id} is required`;
        input.nextElementSibling.classList.add("active");
        input.classList.add("active");
      } else if (input.value.length !== 5) {
        input.nextElementSibling.textContent = `Format should be 12345`;
        input.nextElementSibling.classList.add("active");
        input.classList.add("active");
      } else {
        input.nextElementSibling.classList.remove("active");
        input.classList.remove("active");
        input.nextElementSibling.textContent = "";
      }
    } else if (input.validity.valid) {
      input.nextElementSibling.classList.remove("active");
      input.classList.remove("active");
      input.nextElementSibling.textContent = "";
    } else {
      showError(input);
      console.log(input.validity.valueMissing);
    }
  });
  event.preventDefault();
});
