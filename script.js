// JavaScript for responsive menu
const menuIcon = document.querySelector(".menu-icon");
const navList = document.querySelector(".nav-items ul");

menuIcon.addEventListener("click", () => {
    navList.classList.add("active");
});

// Close the menu when clicking the close icon
const closeIcon = document.querySelector(".close-icon");

closeIcon.addEventListener("click", () => {
    navList.classList.remove("active");
});
