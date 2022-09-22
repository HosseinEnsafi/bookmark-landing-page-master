"use strict";

// ================= VARIABLES =================
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close"),
  header = document.querySelector("header.header"),
  navLinks = document.querySelectorAll("header .nav__item"),
  tabs = document.querySelectorAll(".features__tab"),
  tabsContainer = document.querySelector(".features__tabs"),
  tabsContent = document.querySelectorAll(".features__content"),
  accItemHeaders = document.querySelectorAll(".accordion__header");

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

// =================  FEATURES SECTION  TABS  =================
tabsContainer.addEventListener("click", (e) => {
  const tabClicked = e.target.classList.contains("features__tab");
  if (!tabClicked) return;

  tabs.forEach((tab) => tab.classList.remove("features__tab--active"));
  tabsContent.forEach((tabC) =>
    tabC.classList.remove("features__content--active")
  );
  const tabId = e.target.attributes["data-tab"].value;

  e.target.classList.add("features__tab--active");

  document
    .querySelector(`.features__content--${tabId}`)
    .classList.add("features__content--active");
});

// =================  FAQ ACCORDION  =================
accItemHeaders.forEach((accHeader) => {
  accHeader.addEventListener("click", (e) => {
    const accItem = accHeader.closest(".accordion__item");
    const accContentContainer = accHeader.nextElementSibling;
    accItem.classList.toggle("active");

    if (accItem.classList.contains("active")) {
      accContentContainer.style.minHeight =
        accContentContainer.scrollHeight + "px";
    } else {
      accContentContainer.style.minHeight = 0;
    }
  });
});
