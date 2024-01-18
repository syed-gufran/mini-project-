'use strict';

var qrcode = null;
function generateQRCode() {
  var textToEncode = document.getElementById('text').value;
    
  if(textToEncode === null){
    alert("pls put host name")
    return;
  }
  if (qrcode === null) {
    qrcode = new QRCode(document.getElementById("qrcode"), {
      text: textToEncode,
      width: 128,
      height: 128
    });
    scrollToSection('hehe')
  }
  else {
    alert("QR code is already generated")
  }

}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
  }
}






const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);




const searchBar = document.querySelector("[data-search-bar]");
const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleSearchBar = function () {
  searchBar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElem(searchTogglers, "click", toggleSearchBar);