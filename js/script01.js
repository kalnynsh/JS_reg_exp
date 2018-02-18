"use strict";

var sourceText = document.querySelector(".content .content__info1").innerHTML;

var reg = /(')(?=[\wа-яё]+?|\s*?)/gmi;
var outText = sourceText.replace(reg, '"');

document.querySelector(".content .content__info3").innerHTML = outText;