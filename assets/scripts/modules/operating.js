export default class Operating {
  constructor(operating, activeClass) {
    this.operating = document.querySelector(operating);
    this.activeClass = activeClass;
  }

  operatingData() {
    this.daysWeek = this.operating.dataset.semana.split(",").map(Number);
    this.hoursWeek = this.operating.dataset.horario.split(",").map(Number);
  }

  dataNow() {
    this.dateNow = new Date();
    this.dayNow = this.dateNow.getDay();
    this.hourNow = this.dateNow.getUTCHours() - 3;
  }

  isOpen() {
    const openWeek = this.daysWeek.indexOf(this.dayNow) !== -1;
    const openHour =
      this.hourNow >= this.hoursWeek[0] && this.hourNow < this.hoursWeek[1];

    return openWeek && openHour;
  }

  activeOpen() {
    if (this.isOpen()) {
      this.operating.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.operating) {
      this.operatingData();
      this.dataNow();
      this.activeOpen();
    }
    return this;
  }
}
