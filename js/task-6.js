function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const input = controls.querySelector("input");

const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

const handleClick = () => createBoxes(Number(input.value));

btnCreate.addEventListener("click", handleClick);
btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let boxSize = 30;
  let box = '';
  if (amount > 100 || amount <= 0) return;

  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();
    box += `<div style= 'width:${boxSize}px; height:${boxSize}px; background-color:${color};'></div>`;
    boxSize += 10;
  }
   boxes.innerHTML = box;
   input.value = "";
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

