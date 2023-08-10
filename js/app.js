const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
const topLink = document.querySelector('.top-link');
const allSidebarLinks = document.querySelectorAll('.sidebar-links > *')
// add fixed class to navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
  if (window.pageYOffset > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});
// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
// hide sidebar after click
allSidebarLinks.forEach(function(link){
  link.addEventListener('click', function(e){
    sidebar.classList.remove('show-sidebar');
  })
})

// set year
date.innerHTML = new Date().getFullYear();

// clear a form after submission
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

