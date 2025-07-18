document.getElementById("user-profile").addEventListener("click", function(){
  window.location.href = "/src/pages/profile.html";
});

function aboutOpenButton(){
  document.getElementById("about-popup").style.display = "Block"; 
}
function aboutCloseButton(){
  document.getElementById("about-popup").style.display = "none";
}

