const container = document.querySelector(".container");
const signupButton = document.querySelector(".signup-section header");
const loginButton = document.querySelector(".login-section header");

loginButton.addEventListener("click", () => {
  container.classList.add("active");
});
signupButton.addEventListener("click", () => {
  container.classList.remove("active");
});
// document.getElementById("loginform").addEventListener("submit", function(e) {
//     e.preventDefault();

//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;

// })
const Login = document.querySelectorAll(".login");

Login.forEach(function (Login) {
  Login.addEventListener("click", function (e) {
    alert("Sayfaya Yönlendiriliyorsunuz!");
    window.location.href = "/index.html";
  });
});
