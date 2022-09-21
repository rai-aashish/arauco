const form = document.getElementById("barcode-module-form");

const SkuField = form.querySelector(".sku-field");
const SkuInputField = SkuField.querySelector("[name='sku']");
const SkuErrorField = SkuField.querySelector(".error-field");

const description = form.querySelector("[name='description']");
const upcPiece = form.querySelector("[name='upc-piece']");
const upcPieceQunatity = form.querySelector("[name='upc-piece-quantity']");
const upcSubUnit = form.querySelector("[name='upc-sub-unit']");
const upcSubUnitQuantity = form.querySelector("[name='upc-sub-unit-quantity']");
const upcUnit = form.querySelector("[name='upc-unit']");
const upcUnitQuantity = form.querySelector("[name='upc-unit-quantity']");
const barcodeIdtype = form.querySelector("[name='barcode-type-id']");

//? upc piece quantity
const upcPieceQunatityDisplay = document.getElementById(
  "upc-piece-quantity-display"
);
const increaseUpcPieceQuantityBtn = document.getElementById(
  "upc-piece-quantity-btn-increase"
);
const decreaseUpcPieceQuantityBtn = document.getElementById(
  "upc-piece-quantity-btn-decrease"
);

//? upc sub unit quantity
const upcSubUnitQuantityDisplay = document.getElementById(
  "upc-sub-quantity-display"
);
const increaseUpcSubUnitQuantityBtn = document.getElementById(
  "upc-sub-quantity-btn-increase"
);
const decreaseUpcSubUnitQuantityBtn = document.getElementById(
  "upc-sub-quantity-btn-decrease"
);

//? upc per unit quantity
const upcUnitQuantityDisplay = document.getElementById(
  "upc-unit-quantity-display"
);
const increaseUpcUnitQuantityBtn = document.getElementById(
  "upc-unit-quantity-btn-increase"
);
const decreaseUpcUnitQuantityBtn = document.getElementById(
  "upc-unit-quantity-btn-decrease"
);
//? EXPORT THE ELEMENTS
export {
  form,
  SkuField,
  SkuInputField,
  SkuErrorField,
  description,
  upcPiece,
  upcPieceQunatity,
  upcSubUnit,
  upcSubUnitQuantity,
  upcUnit,
  upcUnitQuantity,
  barcodeIdtype,
  upcPieceQunatityDisplay,
  increaseUpcPieceQuantityBtn,
  decreaseUpcPieceQuantityBtn,
  upcSubUnitQuantityDisplay,
  increaseUpcSubUnitQuantityBtn,
  decreaseUpcSubUnitQuantityBtn,
  upcUnitQuantityDisplay,
  increaseUpcUnitQuantityBtn,
  decreaseUpcUnitQuantityBtn,
};
