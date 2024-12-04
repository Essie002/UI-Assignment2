document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".menu-item");
  
    menuItems.forEach(item => {
      item.addEventListener("click", () => {
        alert(item.dataset.detail);
      });
    });
  });
  