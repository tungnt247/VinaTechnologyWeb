document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menu-item");
  const currentMenu = localStorage.getItem("activeMenu") || "/";

  menuItems.forEach((item) => {
    if (item.getAttribute("data-menu") === currentMenu) {
      item.classList.add("active");
    }

    item.addEventListener("click", function () {
      localStorage.setItem("activeMenu", this.getAttribute("data-menu"));
    });
  });
});
