"use strict";

var form = document.forms.form01;
var inputName = form.elements.inputName;
var phone = form.elements.phone;
var email = form.elements.email;
var button = form.elements.btnSubmit;

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
    errorEl.textContent = "Name not valid. Please correct it.";
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