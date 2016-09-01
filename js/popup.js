var link = document.querySelector(".btn-aside");
var popup = document.querySelector(".write-us");
var close = document.querySelector(".write-us-close");
var login = popup.querySelector("[name=name]");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("write-us-show");
  login.focus();
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("write-us-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("write-us-show")){
      popup.classList.remove("write-us-show");
    }
  }
});
