export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    this.handleMutation = this.handleMutation.bind(this);
  }

  static incrementNumber(number) {
    const total = +number.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;

    const timer = setInterval(() => {
      start += incremento;
      number.innerText = start;

      if (start > total) {
        number.innerText = total;
        clearInterval(timer);
      }
    }, 1000 * Math.random());
  }

  animaNumeros() {
    this.numeros.forEach((number) => {
      this.constructor.incrementNumber(number);
    });
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.observerTarget && this.numeros.length) {
      this.addMutationObserver();
    }

    return this;
  }
}
