// Importando los estilos de la pagina
import './styles/main.css'

// Impriendo en consola
console.warn("🎉 VITE ⚡ + EXPRESS 🚂 Working!!")

const counter = document.querySelector('#counter');
const incrementButton = document.querySelector('#increment-counter');
const kisses = document.querySelector('#kisses');

if (!counter || !incrementButton || !kisses) {
  throw new Error('Counter elements are missing from the page.');
}

const storageKey = 'counter-clicks';
const savedCount = window.localStorage.getItem(storageKey);
let clickCount = savedCount === null ? 0 : Number(savedCount);

if (!Number.isSafeInteger(clickCount) || clickCount < 0) {
  throw new Error('The saved counter value is invalid.');
}

function addKiss() {
  const kiss = document.createElement('p');
  kiss.textContent = 'Te mando un 💋';
  kisses.append(kiss);
}

function incrementCounter() {
  const nextCount = clickCount + 1;
  if (!Number.isSafeInteger(nextCount)) {
    throw new Error('The counter has reached its maximum value.');
  }

  window.localStorage.setItem(storageKey, String(nextCount));
  clickCount = nextCount;
  counter.textContent = String(clickCount);
  addKiss();
}

counter.textContent = String(clickCount);
for (let index = 0; index < clickCount; index += 1) {
  addKiss();
}

incrementCounter();
incrementButton.addEventListener('click', incrementCounter);