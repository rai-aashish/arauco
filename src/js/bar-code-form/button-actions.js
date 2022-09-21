import {
  upcPieceQunatity,
  upcSubUnitQuantity,
  upcUnitQuantity,
  upcPieceQunatityDisplay,
  increaseUpcPieceQuantityBtn,
  decreaseUpcPieceQuantityBtn,
  upcSubUnitQuantityDisplay,
  increaseUpcSubUnitQuantityBtn,
  decreaseUpcSubUnitQuantityBtn,
  upcUnitQuantityDisplay,
  increaseUpcUnitQuantityBtn,
  decreaseUpcUnitQuantityBtn,
} from "../elements";

increaseUpcPieceQuantityBtn.onclick = () =>
  increaseQuantity(upcPieceQunatity, upcPieceQunatityDisplay);

decreaseUpcPieceQuantityBtn.onclick = () =>
  decreaseQuantity(upcPieceQunatity, upcPieceQunatityDisplay);

//? -- sub unit quantity ---
decreaseUpcSubUnitQuantityBtn.onclick = () =>
  decreaseQuantity(upcSubUnitQuantity, upcSubUnitQuantityDisplay);
increaseUpcSubUnitQuantityBtn.onclick = () =>
  increaseQuantity(upcSubUnitQuantity, upcSubUnitQuantityDisplay);

//? -- unit quantity ---
increaseUpcUnitQuantityBtn.onclick = () =>
  increaseQuantity(upcUnitQuantity, upcUnitQuantityDisplay);

decreaseUpcUnitQuantityBtn.onclick = () =>
  decreaseQuantity(upcUnitQuantity, upcUnitQuantityDisplay);

//? handler functions
function increaseQuantity(element, displayComponent) {
  let value = parseInt(element.value);
  if (element.value > 0) element.value = value + 1;
  displayComponent.innerText = element.value;
}

function decreaseQuantity(element, displayComponent) {
  let value = parseInt(element.value);
  if (element.value > 1) element.value = value - 1;
  displayComponent.innerText = element.value;
}
