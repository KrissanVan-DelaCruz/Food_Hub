document.getElementById("signin-btn").addEventListener("click", function(event){
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please fill in all fields!");
    return;
  }

  if (!email.includes("@") || !email.includes(".com")) {
    alert("Please enter a valid email address!");
    return;
  }

  if (password.length < 10) {
    alert("Password must be at least 10 characters long!");
    return;
  }

  if (!/^[A-Za-z0-9]+$/.test(password)) {
    alert("Password must contain only letters and numbers!");
    return;
  }
  
  
  window.location.href = "/src/pages/index.html";
});