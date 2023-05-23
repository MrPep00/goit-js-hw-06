const categoryList = document.querySelectorAll("li.item");
const categoryNumber = categoryList.length;
console.log(`Number of categories: ${categoryNumber}`);

categoryList.forEach((el) => {
  const categoryHeader = el.querySelector("h2").textContent;
  const numberOfElements = el.querySelectorAll("li").length;
  console.log(`Category: ${categoryHeader}`);
  console.log(`Elements: ${numberOfElements}`);
});
