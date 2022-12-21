export default function initModal() {
  const modalContainer = document.querySelector("[data-modal='container']");
  const openModal = document.querySelector("[data-modal='abrir']");
  const closeModal = document.querySelector("[data-modal='fechar']");
  const loginButton = document.querySelector(
    "[data-modal='container'] button[type='submit']"
  );

  function toggleModal(event) {
    event.preventDefault();
    modalContainer.classList.toggle("ativo");
  }

  function clickOutsideModal(event) {
    if (event.target === this) {
      toggleModal(event);
    }
  }
  if (modalContainer && openModal && closeModal) {
    loginButton.addEventListener("click", (event) => {
      event.preventDefault();
    });

    openModal.addEventListener("click", toggleModal);
    closeModal.addEventListener("click", toggleModal);
    modalContainer.addEventListener("click", clickOutsideModal);
  }
}
