export default class Modal {
  constructor(openModal, closeModal, modalContainer) {
    this.openModal = document.querySelector(openModal);
    this.closeModal = document.querySelector(closeModal);
    this.modalContainer = document.querySelector(modalContainer);

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOutsideModal = this.clickOutsideModal.bind(this);
  }

  toggleModal() {
    this.modalContainer.classList.toggle("ativo");
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  clickOutsideModal(event) {
    if (event.target === this.modalContainer) {
      this.toggleModal();
    }
  }

  addModalEvent() {
    this.openModal.addEventListener("click", this.eventToggleModal);
    this.closeModal.addEventListener("click", this.eventToggleModal);
    this.modalContainer.addEventListener("click", this.clickOutsideModal);
  }

  init() {
    if (this.modalContainer && this.openModal && this.closeModal) {
      this.addModalEvent();
    }
    return this;
  }
}
