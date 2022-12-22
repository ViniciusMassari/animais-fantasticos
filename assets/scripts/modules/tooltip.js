export default class ToolTip {
  constructor(toolTips) {
    this.toolTips = document.querySelectorAll(toolTips);

    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  onMouseMove({ pageY, pageX }) {
    this.toolTipBox.style.top = `${pageY + 20}px`;
    if (pageX + 240 > window.innerWidth) {
      this.toolTipBox.style.left = `${pageX - 190}px`;
    } else {
      this.toolTipBox.style.left = `${pageX + 20}px`;
    }
  }

  onMouseLeave({ currentTarget }) {
    this.toolTipBox.remove();
    currentTarget.removeEventListener("mousemove", this.onMouseMove);
    currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
  }

  createToolTipBox(element) {
    const toolTipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    toolTipBox.classList.add("toolTip");
    toolTipBox.innerText = text;
    document.body.appendChild(toolTipBox);
    this.toolTipBox = toolTipBox;
  }

  onMouseOver({ currentTarget }) {
    this.createToolTipBox(currentTarget);
    currentTarget.addEventListener("mousemove", this.onMouseMove);
    currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }

  addTooltipsEvent() {
    this.toolTips.forEach((toolTip) => {
      toolTip.addEventListener("mouseover", this.onMouseOver);
    });
  }

  init() {
    if (this.toolTips.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}
