/* eslint-disable no-console */
import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.specie}</h3> <span data-numero>${animal.total}</span>`;

    return div;
  }

  const numerosGrid = document.querySelector(target);
  function fillanimals(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

function animaAnimalsNumber() {
  const animaNumeros = new AnimaNumeros(
    "[data-numero]",
    ".numeros",
    "ativo"
  );
  animaNumeros.init();
}

  async function createAnimals() {
    try {
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();

      animaisJson.forEach((animal) => fillanimals(animal));
   animaAnimalsNumber();
    } catch (erro) {
      console.log(erro);
    }
  }

  return createAnimals();
}
