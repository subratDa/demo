document.addEventListener("DOMContentLoaded", () => {
  const dropdownToggle = document.getElementById("dropdown-toggle");
  const dropdownMenu = document.getElementById("dropdown-menu");
  const navCheck = document.getElementById("nav-check");
  const mediaQuery = window.matchMedia("(max-width: 768px)");
  const navCartButton = document.getElementById("cart-button-nav");
  const navOrderButton = document.getElementById("order-button-nav");
  const rightCartButton = document.getElementById("cart-button");
  const rightOrderButton = document.getElementById("order-button");
  const hadderrightsection = document.getElementById("hadder-right-section");

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

  function handleScreenChange(e) {
    if (e.matches) {
      // Mobile screen
      navCartButton.style.display = "block";
      navOrderButton.style.display = "block";
      rightCartButton.style.display = "none";
      rightOrderButton.style.display = "none";
      hadderrightsection.style.display = "none";
    } else {
      // Normal screen
      navCartButton.style.display = "none";
      navOrderButton.style.display = "none";
      rightCartButton.style.display = "block";
      rightOrderButton.style.display = "block";
      hadderrightsection.style.display = "flex";
    }
  }

  // Initial check
  handleScreenChange(mediaQuery);

  // Listen for screen size changes
  mediaQuery.addListener(handleScreenChange);
});
