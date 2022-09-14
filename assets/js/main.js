"use strict";

// ================= VARIABLES =================
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close"),
  header = document.querySelector("header.header"),
  navLinks = document.querySelectorAll("header .nav__item");

// ================= SHOW SHOW =================
navToggle.addEventListener("click", (e) => {
  header.classList.add("mobile-menu--active");
});

// ================= HIDE MENU =================
navClose.addEventListener("click", () => {
  header.classList.remove("mobile-menu--active");
});
// ================= REMOVE MOBILE MENU =================
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    header.classList.remove("mobile-menu--active");
  });
});
