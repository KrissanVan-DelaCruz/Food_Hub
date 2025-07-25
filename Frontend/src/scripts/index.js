document.getElementById("user-profile").addEventListener("click", function(e){
  e.preventDefault();

  window.location.href = "/Frontend/src/pages/profile.html";
});

//about-pop
function aboutOpenButton(){
  document.getElementById("about-popup").style.display = "Block"; 
}
function aboutCloseButton(){
  document.getElementById("about-popup").style.display = "none";
}

//contactpopup
function contactOpenButton(){
  document.getElementById("contact-popup").style.display = "Block"; 
}
function contactCloseButton(){
  document.getElementById("contact-popup").style.display = "none";
}

//settings-popup
function settingsOpenButton(){
  document.getElementById("settings-popup").style.display = "Block"; 
}
function settingsCloseButton(){
  document.getElementById("settings-popup").style.display = "none";
}

//settings-profile
document.getElementById("profile-settings").addEventListener('click', function(e){
  e.preventDefault();
  
  window.location.href = "/Frontend/src/pages/profile.html"
});

//help-popup
function helpOpenButton(){
  document.getElementById("help-popup").style.display = "Block"; 
}
function helpCloseButton(){
  document.getElementById("help-popup").style.display = "none";
}

//mobile-nav-btn
function mobileNavBtnOpen(){
  document.getElementById("mobile-nav-btn").style.display = "Block";
}
function mobileNavBtnClose(){
  document.getElementById("mobile-nav-btn").style.display = "none";
}
