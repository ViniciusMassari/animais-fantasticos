export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfWindow = window.innerHeight * 0.6;

    this.animaScroll = this.animaScroll.bind(this);
  }

  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionTop = sectionTop - this.halfWindow < 0;
      if (isSectionTop) section.classList.add("ativo");
      else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.animaScroll();
      window.addEventListener("scroll", this.animaScroll);
    }
    return this;
  }
}
