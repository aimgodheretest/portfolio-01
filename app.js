let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("ri-menu-line");
  menu.classList.toggle("ri-close-line");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.add("ri-menu-line");
  menu.classList.remove("ri-close-line");
  navbar.classList.remove("active");
};

//Used Types JS Library
const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Backend Developer", "Web Designer"],
  typeSpeed: 80,
  backSpeed: 80,
  backDelay: 1200,
  loop: true,
});
