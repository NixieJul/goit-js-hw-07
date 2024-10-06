function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");

const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
let boxSize = 30;

const handleClick = () => createBoxes(Number(input.value));

btnCreate.addEventListener("click", handleClick);
btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let boxSize = 30;
  let box = '';
  if (amount > 100 || amount < 0) return;

  for (let i = 0; i < amount; i++) {
    box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.append(box);
    boxSize += 10;
  }
  
  input.value = "";
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

// function createMarcup() {
//   let count = 0;
//   if (count < 100 || count > 1) {
//     return createBoxes(input.value);
//   }
// }

// function createBoxes(amount) {
//   clearBox();

//   for (let i = 0; i < amount; i++) {
//     const box = document.createElement("div");
//     box.style.width = `${boxSize}px`;
//     box.style.height = `${boxSize}px`;
//     box.style.backgroundColor = getRandomHexColor();
//     boxes.append(box);
//     boxSize += 10;
//   }
// }

// btnDestroy.addEventListener("click", () => {
//   boxes.innerHTML = "";
//   input.value = "";
//   boxSize = 30;
// });

// function clearBox() {
//   boxes.innerHTML = "";
//   boxSize = 30;
// }
