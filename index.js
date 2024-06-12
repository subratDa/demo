document.addEventListener("DOMContentLoaded", () => {
  const dropdownToggle = document.getElementById("dropdown-toggle");
  const dropdownMenu = document.getElementById("dropdown-menu");
  const cartButton = document.getElementById("cart-button");
  const orderButton = document.getElementById("order-button");

  dropdownToggle.addEventListener("click", (event) => {
    event.preventDefault();
    dropdownMenu.classList.toggle("show");

    if (dropdownMenu.classList.contains("show")) {
      dropdownMenu.appendChild(cartButton);
    } else {
      document.querySelector(".nav-list").appendChild(cartButton);
    }

    if (dropdownMenu.classList.contains("show")) {
      dropdownMenu.appendChild(orderButton);
    } else {
      document.querySelector(".nav-list").appendChild(orderButton);
    }
  });
});

document.getElementById("nav-check").addEventListener("change", function () {
  var navIcon = document.getElementById("nav-icon");
  if (this.checked) {
    navIcon.classList.add("open");
  } else {
    navIcon.classList.remove("open");
  }
});
