let modal = document.getElementById("modal");
let open = document.getElementById("open-modal");
let close = document.getElementById("close");

open.addEventListener("click", function (e) {
  modal.style.display = "block";
});

close.addEventListener("click", function (e) {
  modal.style.display = "none";
});
