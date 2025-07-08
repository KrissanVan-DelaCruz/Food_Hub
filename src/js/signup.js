document.getElementById("signup-btn").addEventListener("click", function(event){
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password= document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (!email || !password || !confirmPassword) {
    alert("Please fill in all fields!");
    return;
  }

  if (!email.includes("@") || !email.includes(".com")){
    alert("Please enter a valid email address!");
    return;
  }

  if (confirmPassword !== password) {
    alert("Passwords do not match!");
    return;
  }

  window.location.href = "/src/pages/login.html";
});