document.getElementById("signin-btn").addEventListener("click", function(e){
  e.preventDefault();

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

  window.location.href = "/Frontend/src/pages/index.html";
});