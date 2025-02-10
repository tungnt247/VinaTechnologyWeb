document.addEventListener("DOMContentLoaded", function () {
  fetch("/resources/components/header-homepage.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-homepage").innerHTML = data;
    })
    .catch((error) => console.error("Error loading header home page:", error));
});
