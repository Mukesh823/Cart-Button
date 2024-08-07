let itemsCountDiv = document.querySelector(".itemsCount");
let cartIcon = document.querySelector(".cartIcon");

let itemsCount = 1;

function displayItemsCount() {
  itemsCountDiv.style.display = "block";
  itemsCountDiv.classList.add("appear");
  cartIcon.classList.add("flicker");
  itemsCountDiv.innerHTML = itemsCount;

  setTimeout(() => {
    itemsCountDiv.classList.remove("appear");
    cartIcon.classList.remove("flicker");
  }, 250);

  itemsCount++;
}