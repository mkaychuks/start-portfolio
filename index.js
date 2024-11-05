// mobile menu
var menuIcon = document.getElementById("mobile-menu");
var menuItems = document.querySelector(".mobile-menu-items");

// toggle the menu flow
menuIcon.addEventListener("click", () => {
  if (menuItems.classList.contains("show")) {
    menuItems.classList.remove("show");
  } else {
    menuItems.classList.add("show");
  }
});
