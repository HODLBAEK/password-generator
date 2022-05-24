let chars = [
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+~\\`|}{[]:;?><,./-=0123456789",
];

const btn = document.getElementById("btn");
let field1 = document.getElementById("top-left");
let field2 = document.getElementById("top-right");
let field3 = document.getElementById("bot-left");
let field4 = document.getElementById("bot-right");

function passwordGen() {
  let pass = "";
  let str = chars[0];
  for (let i = 0; i < 12; i++) {
    let char = Math.floor(Math.random() * str.length);
    pass += str.charAt(char);
  }
  return pass;
}
function password() {
  field1.value = passwordGen();
  field2.value = passwordGen();
  field3.value = passwordGen();
  field4.value = passwordGen();
}

btn.addEventListener("click", password);
