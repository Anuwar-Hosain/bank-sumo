// add click handler with the submit button
document.getElementById("submit-btn").addEventListener("click", function () {
  // email field
  const emailField = document.getElementById("email");
  const email = emailField.value;
  //   password field
  const passwordField = document.getElementById("password");
  const password = passwordField.value;
  console.log(email, password);

  //   validation check
  if (email === "sumo@gmail.com" && password === "525252") {
    window.location.href = "main.html";
  } else {
    alert("invalid user");
  }
});
