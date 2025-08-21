const textBox = document.getElementById("temp");
const tofahrenheit = document.getElementById("tofahrenheit");
const tocelsius = document.getElementById("tocelsius");
const result = document.getElementById("result");

let temp = 0;

function convert(){
if (tofahrenheit.checked) {
   temp = Number(textBox.value);
  temp = (temp * 9/5) + 32; //formula to convert Celsius to Fahrenheit
  result.textContent = temp.toFixed(1) + " °F";
}
else {
     temp = Number(textBox.value);
  temp = (temp - 32) * (5/9); //formula to convert Fahrenheit to celsius
  result.textContent = temp.toFixed(1) + " °C";
}
}