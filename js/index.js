// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// the navbar
var navbar = document.getElementById("navbar");

// offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when it reaches scolling position. Remove "sticky" when it leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
//for the full page tab section//
function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color for the tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show tab content
  document.getElementById(pageName).style.display = "block";

  // Add the color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

