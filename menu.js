const body = document.body;
const menuButton = document.querySelector(".menu-btn");
const siteMenu = document.querySelector(".site-menu");
const backdrop = document.querySelector(".menu-backdrop");

if (menuButton && siteMenu && backdrop) {
  const closeMenu = () => {
    body.classList.remove("menu-open");
    menuButton.setAttribute("aria-expanded", "false");
    siteMenu.setAttribute("aria-hidden", "true");
    backdrop.hidden = true;
  };

  const openMenu = () => {
    body.classList.add("menu-open");
    menuButton.setAttribute("aria-expanded", "true");
    siteMenu.setAttribute("aria-hidden", "false");
    backdrop.hidden = false;
  };

  menuButton.addEventListener("click", () => {
    const isOpen = body.classList.contains("menu-open");
    if (isOpen) {
      closeMenu();
      return;
    }

    openMenu();
  });

  backdrop.addEventListener("click", closeMenu);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  siteMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}
