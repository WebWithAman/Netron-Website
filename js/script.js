/*********************************************************
 Get Toggle Button And Nav Links 
*********************************************************/
const toggleBtn = document.querySelector(".toggle-btn");
const navLinks = document.querySelector(".nav-links");

/*********************************************************
 Add Click Event On Toggle Button to Display Nav links On Mobiles
*********************************************************/
toggleBtn.onclick= function(){
    navLinks.classList.toggle("show");
}