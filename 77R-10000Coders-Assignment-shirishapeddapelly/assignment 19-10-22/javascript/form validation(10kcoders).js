const validation = function () {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
  if (
    email.value === "" ||
    email.value.indexOf("@") === -1 ||
    !email.value.includes(".com" || ".in") ||
    !emailRegex.test(email.value)
  ) {
    emailErr.style.display = "block";
    emailErr.innerText = "Please enter valid Email";
    email.style.outlincolor = "1px solid red";
  } else {
    emailErr.style.display = "none";
    email.style.outlinecolor = "1px solid green";
  }
};
var phone_input = document.getElementById("number");

phone_input.addEventListener("input", () => {
  phone_input.setCustomValidity("");
  phone_input.checkValidity();
});

phone_input.addEventListener("invalid", () => {
  if (phone_input.value === "") {
    phone_input.setCustomValidity("Enter phone number!");
  } else {
    phone_input.setCustomValidity(
      "Enter phone number in this format: first number 7-9 range ,and remaining 9 numbers from 0-9 range"
    );
  }
});
