"use strict";

const input = document.querySelector("#name-input");

const output = document.querySelector("#name-output");

input.addEventListener("input", handleInput);

function handleInput(event) {
  const nameInput = event.target.value.trim();
  if (nameInput === "") {
    return (output.textContent = "Anonymous");
  } else {
    output.textContent = nameInput;
  }
}
