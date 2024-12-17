const regForm = document.getElementById("registerForm");
regForm.addEventListener("submit", myFunction);
function myFunction(event){     
//document
  //.getElementById("registerForm")
 // .addEventListener("submit", function (event) {
    event.preventDefault(); //to cancel submitting the form;
    const name = document.getElementById("name").value;
    const username = document.getElementById("rusername").value;
    const password = document.getElementById("rpassword").value;
    const confirmPassword =
      document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const user = {
      name: name,
      username: username,
      password: password,
    };
    localStorage.setItem(username, JSON.stringify(user));
    alert("Registration successful! Please login.");
    window.location.href = "index.html";
  };