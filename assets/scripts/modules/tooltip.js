export default function initToolTip() {
  const toolTips = document.querySelectorAll("[data-tooltip]");

  const onMouseMove = {
    handleEvent(event) {
      this.toolTipBox.style.top = `${event.pageY + 20}px`;
      this.toolTipBox.style.left = `${event.pageX + 20}px`;
    },
  };

  const onMouseLeave = {
    handleEvent() {
      this.toolTipBox.remove();
      this.element.removeEventListener("mousemove", onMouseMove);
      this.element.removeEventListener("mouseleave", onMouseLeave);
    },
  };

  function criarToolTipBox(element) {
    const toolTipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    toolTipBox.classList.add("toolTip");
    toolTipBox.innerText = text;
    document.body.appendChild(toolTipBox);
    return toolTipBox;
  }
  function onMouseOver() {
    const toolTipBox = criarToolTipBox(this);

    onMouseMove.toolTipBox = toolTipBox;
    this.addEventListener("mousemove", onMouseMove);

    onMouseLeave.toolTipBox = toolTipBox;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);
  }

  toolTips.forEach((toolTip) => {
    toolTip.addEventListener("mouseover", onMouseOver);
  });
}
