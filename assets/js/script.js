'use strict';



/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}





/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

//------form

var nameError= document.getElementById('name-error');
var phoneError= document.getElementById('phone-error');
var emailError= document.getElementById('email-error');
var messageError= document.getElementById('message-error');
var submitError= document.getElementById('submit-error');

function validateName(){
  var name=document.getElementById('contact-name').value;
  
    if(name.length==0)
    {
      nameError.innerHTML='Name is required';
      return false;
    }
    if(!name.match(/^[A-Za-z]/))
    {
      nameError.innerHTML='invalid name';
      return false;
    }
    nameError.innerHTML= "<span style='color:green;'>valid</span>";
    return true;
  
}
function validateEmail()
{
  var mail=document.getElementById('contact-email').value;
  if(mail.length==0)
    {
      emailError.innerHTML='Email is required';
      return false;
    }
    if(!mail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
    {
      emailError.innerHTML='invalid email';
      return false;
    }
    emailError.innerHTML="<span style='color:green;'>valid</span>";
    return true;
  }


function validatePhone()
{
  var phone=document.getElementById('contact-number').value;
  if(phone.length==0)
    {
      phoneError.innerHTML='Phone number is required';
      return false;
    }
    if(!phone.match(/[0-9]/))
    {
      phoneError.innerHTML='invalid phone number';
      return false;
    }
    phoneError.innerHTML="<span style='color:green;'>valid</span>";
    return true;
  }

 

  function validateMessage(){
    var message=document.getElementById('contact-message').value;
    if(message.length<=5)
      {
        messageError.innerHTML='Message is required';
        return false;
      }
      
      messageError.innerHTML="<span style='color:green;'>valid</span>";
      return true;
    
  }

  function validateForm(){
  if(!validateName()|| !validateEmail()||!validatePhone()||!validateMessage())

  {
    return false;
  }
}