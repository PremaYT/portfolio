function getDate() {
  document.write(new Date().getFullYear());
}

function openModal() {
  const navbars = document.getElementsByClassName("navbar");
  const closeIcons = document.getElementsByClassName("close-icon");
  const hamburger = document.getElementsByClassName("hamburger");

  document.querySelector("body").style.overflowY = "hidden";
  document.querySelector("html").style.overflowY = "hidden";

  navbars[0].classList.add("open");
  closeIcons[0].classList.add("show-element");
  hamburger[0].classList.add("hide-element");
}

function closeModal() {
  const navbars = document.getElementsByClassName("navbar");
  const closeIcons = document.getElementsByClassName("close-icon");
  const hamburger = document.getElementsByClassName("hamburger");

  document.querySelector("body").style.overflowY = "scroll";
  document.querySelector("html").style.overflowY = "scroll";

  navbars[0].classList.remove("open");
  closeIcons[0].classList.remove("show-element");
  hamburger[0].classList.remove("hide-element");
}
