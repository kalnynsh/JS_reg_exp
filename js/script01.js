"use strict";

var sourceText = document.querySelector(".content .content__info1").innerHTML;
// Version 1 with lookahead
// var reg = /(')(?=[\wа-яё]+?|\s*?)/gim;
// var outText = sourceText.replace(reg, '"');

// Version 2 with captured group
var reg = /'([^']+(?:'[a-z][^']*?)*)'/gi;
var outText = sourceText.replace(reg, '"$1"');

document.querySelector(".content .content__info3").innerHTML = outText;
