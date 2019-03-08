function Rekenen() {
var a = parseInt(document.querySelector("#num1").value);
var b = parseInt(document.querySelector("#num2").value);
var select = document.querySelector("#kies").value;

var antw;


if (select == "plus"){
antw = a + b;
}
else if (select == "min") {
antw = a - b;
}
else if (select == "deel") {
antw = a / b;
}
else if (select == "keer") {
antw = a * b;
}

document.querySelector("#antwoord").innerHTML = antw;
}
