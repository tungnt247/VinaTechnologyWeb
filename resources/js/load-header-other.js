document.addEventListener("DOMContentLoaded", function () {
  fetch("/resources/components/header-other.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-other").innerHTML = data;
    })
    .catch((error) => console.error("Error loading header:", error));
});
