let value = document.getElementById("value");
let increment = document.getElementById("increment");

let add = document.getElementById("add");
let sub = document.getElementById("sub");
let reset = document.getElementById("reset");
let incrementNum = 1;

increment.addEventListener("change", function (e) {
  incrementNum = parseInt(e.target.value);
});

add.addEventListener("click", function (e) {
  let total = parseInt(value.innerText) + incrementNum;
  value.innerText = total;
});

sub.addEventListener("click", function (e) {
  let total = parseInt(value.innerText) - incrementNum;
  if (total < 0) {
    total = 0;
  }
  value.innerText = total;
});

reset.addEventListener("click", function (e) {
  value.innerText = 0;
});
