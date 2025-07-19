document.getElementById("user-profile").addEventListener("click", function(event){
  event.preventDefault();

  window.location.href = "/src/pages/profile.html";
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
  document.getElementById("popup-page").style.display = "none";
}

//help-popup
function helpOpenButton(){
  document.getElementById("help-popup").style.display = "Block"; 
}
function helpCloseButton(){
  document.getElementById("help-popup").style.display = "none";
}


