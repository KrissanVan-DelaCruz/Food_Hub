document.getElementById("signup-btn").addEventListener("click", function(e){
  e.preventDefault();
  
  const email = document.getElementById("email").value;
  const password= document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const termsAccepted = document.getElementById("terms").checked;

  if (!email || !password || !confirmPassword) {
    alert("Please fill in all fields!");
    return;
  }

  if (!email.includes("@") || !email.includes(".com")){
    alert("Please enter a valid email address!");
    return;
  }

  if (password.length < 8) {
    alert("Password must be at least 8 characters long!");
    return;
  }

  if (!/^[A-Za-z0-9]+$/.test(password)) {
    alert("Password must contain only letters and numbers!");
    return;
  }

  if (confirmPassword !== password) {
    alert("Passwords do not match!");
    return;
  }

  if (!termsAccepted) {
    alert("You must accept the terms and conditions!");
    return
  }

  window.location.href = "/Frontend/src/pages/login.html";
});

