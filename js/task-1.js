"use strict";

const arrCategories = document.querySelector("#categories");

const items = arrCategories.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;
  const elements = item.querySelectorAll("ul li");

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${elements.length}`);
});
