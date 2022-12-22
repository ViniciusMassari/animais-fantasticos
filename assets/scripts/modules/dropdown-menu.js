import outsideClick from "./outside-click.js";

export default class DropDownMenu {
  constructor(dropDownMenus, events) {
    this.dropDownMenus = document.querySelectorAll(dropDownMenus);

    if (events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;

    this.activeClass = "ativo";
    this.activeDropDownMenu = this.activeDropDownMenu.bind(this);
  }

  activeDropDownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;

    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  addEventDropDownMenu() {
    this.dropDownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropDownMenu);
      });
    });
  }

  init() {
    if (this.dropDownMenus.length) {
      this.addEventDropDownMenu();
    }
    return this;
  }
}
