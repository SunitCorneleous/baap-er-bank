document.getElementById("login-btn").addEventListener("click", function () {
  // get email and pass
  const emailField = document.getElementById("email");
  const email = emailField.value;
  const passwordField = document.getElementById("password");
  const password = passwordField.value;

  // verify user
  if (email === "admin@gmail.com" || password === "workhard") {
    window.location.href = "bank.html";
  } else {
    alert("invalid user");
  }
});
