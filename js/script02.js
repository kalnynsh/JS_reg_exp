"use strict";

var form = document.forms.form01;
var inputName = form.elements.inputName;
var phone = form.elements.phone;
var email = form.elements.email;
// var button = form.elements.btnSubmit;

function iSnameValid(str) {
  var reg = /[a-zа-яё\D]{3,}\s*?/i;
  return reg.test(str);
}

function iSphoneValid(str) {
  var reg = /[+7]\(\d{3}\)\d{3}-\d{4}/;
  return reg.test(str);
}

function iSemailValid(str) {
  var reg = /\w+\.?-?\w+@mail\.ru/;
  return reg.test(str);
}
// Name validation begin
inputName.addEventListener("change", validateName);
inputName.addEventListener("focus", resetName);

/** 
 * validateName - function for validation name's input
 */
function validateName() {
  if (!iSnameValid(inputName.value)) {
    inputName.classList.add("error");
    var errorEl = document.getElementById("nameError");
    errorEl.classList.add("error");
    errorEl.textContent = "Name is not valid. Please correct it.";
  }
}

/**
 * resetName - function for reset input field with name
 * 
 */
function resetName() {
  if (inputName.classList.contains("error")) {
    // сбросить состояние "ошибка", если оно есть
    inputName.classList.remove("error");
    document.getElementById("nameError").textContent = "";
  }
}
// Name validation end

// Phone number validation begin
phone.addEventListener("change", validatePhone);
phone.addEventListener("focus", resetPhone);

/** 
 * validatePhone - function for validation phone number
 * 
 */
function validatePhone() {
  if (!iSphoneValid(phone.value)) {
    phone.classList.add("error");
    var errorEl = document.getElementById("phoneError");
    errorEl.classList.add("error");
    errorEl.textContent = "Phone number is not valid. Please correct it.";
  }
}

/**
 * resetPhone - function for reset input field with phone
 * 
 */
function resetPhone() {
  if (phone.classList.contains("error")) {
    // сбросить состояние "ошибка", если оно есть
    phone.classList.remove("error");
    document.getElementById("phoneError").textContent = "";
  }
}
// Phone number validation end

// Email input validation begin
email.addEventListener("change", validateEmail);
email.addEventListener("focus", resetEmail);

/** 
 * validateEmail - function for validation email input
 * 
 */
function validateEmail() {
  if (!iSemailValid(email.value)) {
    email.classList.add("error");
    var errorEl = document.getElementById("emailError");
    errorEl.classList.add("error");
    errorEl.textContent = "Email input is not valid. Please correct it.";
  }
}

/**
 * resetEmail - function
 * for reset input field with email
 * 
 */
function resetEmail() {
  if (email.classList.contains("error")) {
    // сбросить состояние "ошибка", если оно есть
    email.classList.remove("error");
    document.getElementById("emailError").textContent = "";
  }
}
// Email input validation end