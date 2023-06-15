const form = document.getElementById("form");
const name = document.getElementById("name");
const address = document.getElementById("address");
const EMAIL = document.getElementById("email");
const PHONE = document.getElementById("phonenumber");
const DETAILS = document.getElementById("details");
const DATE = document.getElementById("yearofpass");
const STATUS = document.getElementById("status");
const TEXTAREA = document.getElementById("textarea");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  validation();
});
const validation = function () {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
  const phoneregex = /^[0]?[6789]\d{9}$/;
  if (name.value === "") {
    nameErr.innerText = " please enter the valid name";
    nameErr.style.color = "red";
    name.style.border = " solid red";
  } else {
    nameErr.style.display = "none";
    name.style.border = "solid green";
  }

  if (address.value === "") {
    addressErr.innerText = "please enter the valid address";
    addressErr.style.color = "red";
    address.style.border = " solid red";
  } else {
    addressErr.style.display = "none";

    address.style.border = "solid green";
  }

  if (
    !emailRegex.test(email.value) ||
    email.value.indexOf("@") === -1 ||
    email.value === "" ||
    email.value.includes(".com" ^ ".in")
  ) {
    emailErr.style.display = "block";
    emailErr.innerText = "Please enter valid Email";
    emailErr.style.color = "red";
    email.style.border = " solid red";
  } else {
    emailErr.style.display = "none";
    email.style.border = " solid green";
  }
  if (phonenumber === "" || !phoneregex.test(phonenumber.value)) {
    phoneErr.style.display = "block";
    phoneErr.innerText = "please enter valid phone number";
    phoneErr.style.color = " red";
    phonenumber.style.border = "solid red";
  } else {
    phoneErr.style.display = "none";
    phonenumber.style.border = " solid green";
  }
  if (details.value === "-Select-") {
    detailsErr.innerText = "please select any value";
    detailsErr.style.color = "red";
    details.style.border = " solid red";
  } else {
    detailsErr.style.display = "none";
    details.style.border = "solid green";
  }

  if (yearofpass.value === "-select-") {
    yearErr.innerText = "please select the passout year";
    yearErr.style.color = "red";
    yearofpass.style.border = " solid red";
  } else {
    yearErr.style.display = "none";
    yearofpass.style.border = "solid green";
  }
  if (presentstatus.value === "select") {
    statusErr.innerText = "please enter the valid name";
    statusErr.style.color = "red";
    presentstatus.style.border = " solid red";
  } else {
    statusErr.style.display = "none";
    presentstatus.style.border = "solid green";
  }
  if (textarea.value === "") {
    textErr.innerText = "please share something";
    textErr.style.color = "red";
    textarea.style.border = " solid red";
  } else {
    textErr.style.display = "none";
    textarea.style.border = "solid green";
  }
};
