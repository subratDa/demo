document.addEventListener("DOMContentLoaded", () => {
  const dropdownToggle = document.getElementById("dropdown-toggle");
  const dropdownMenu = document.getElementById("dropdown-menu");
  const navCheck = document.getElementById("nav-check");

  dropdownToggle.addEventListener("click", (event) => {
    event.preventDefault();
    dropdownMenu.classList.toggle("open");
  });

  document.querySelectorAll(".nav-list a").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (event.target.id !== "dropdown-toggle") {
        navCheck.checked = false;
        document.getElementById("sidebar").classList.remove("open");
      }
    });
  });
});
