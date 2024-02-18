function sendEmail() {
  let name = document.querySelectorAll(".name");
  let email = document.querySelectorAll(".email");
  let message = document.querySelectorAll(".message");
  alert("Hello" + name);
}

let submit = document.querySelectorAll("#submit");
submit.addEventListener("click", sendEmail);
