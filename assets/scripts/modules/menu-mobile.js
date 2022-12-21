import outsideClick from "./outside-click.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector("[data-menu='button']");
  const menuList = document.querySelector("[data-menu='list']");
  const events = ["click", "touschstart"];

  function openMenu() {
    menuList.classList.add("ativo");
    this.classList.add("ativo");
    outsideClick(menuList, events, () => {
      menuList.classList.remove("ativo");
      this.classList.remove("ativo");
    });
  }

  if (menuButton) {
    events.forEach((event) => menuButton.addEventListener(event, openMenu));
  }
}
