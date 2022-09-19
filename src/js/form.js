const form = document.getElementById("barcode-module-form");
const sku = form.querySelector("[name='sku']");
const description = form.querySelector("[name='description']");
const upcPiece = form.querySelector("[name='upc-piece']");
const upcPieceQunatity = form.querySelector("[name='upc-piece-quantity']");
const upcSubUnit = form.querySelector("[name='upc-sub-unit']");
const upcSubUnitQuantity = form.querySelector("[name='upc-sub-unit-quantity']");
const upcUnit = form.querySelector("[name='upc-unit']");
const upcUnitQuantity = form.querySelector("[name='upc-unit-quantity']");
const barcodeIdtype = form.querySelector("[name='barcode-type-id']");

//?-----------------------------------------------------------------
//? ------------      SUBMIT FORM DATA             -----------------
//?-----------------------------------------------------------------
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const { data, isValidated, error } = validateForm();

  displayValidationError(error);
  //? submit data if validation success
  if (isValidated) {
    //? API LOGIC HERE
    console.log(data, isValidated, error);
  }
});
//?-----------------------------------------------------------------
//?-----------------------------------------------------------------

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

//? method assignments
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

//? get all data
function getAllData() {
  const sku = form.querySelector("[name='sku']").value;
  const description = form.querySelector("[name='description']").value;
  const upcPiece = form.querySelector("[name='upc-piece']").value;
  const upcPieceQunatity = form.querySelector(
    "[name='upc-piece-quantity']"
  ).value;
  const upcSubUnit = form.querySelector("[name='upc-sub-unit']").value;
  const upcSubUnitQuantity = form.querySelector(
    "[name='upc-sub-unit-quantity']"
  ).value;
  const upcUnit = form.querySelector("[name='upc-unit']").value;
  const upcUnitQuantity = form.querySelector(
    "[name='upc-unit-quantity']"
  ).value;
  const barcodeTypeId = form.querySelector("[name='barcode-type-id']").value;

  return {
    sku,
    description,
    upcPiece,
    upcPieceQunatity,
    upcSubUnit,
    upcSubUnitQuantity,
    upcUnit,
    upcUnitQuantity,
    barcodeTypeId,
  };
}

//? validate form data
function validateForm() {
  let error = {},
    isValidated = false;
  const data = getAllData();
  const {
    sku,
    description,
    upcPiece,
    upcPieceQunatity,
    upcSubUnit,
    upcSubUnitQuantity,
    upcUnit,
    upcUnitQuantity,
    barcodeTypeId,
  } = data;

  if (!sku) error.sku = "SKU is required";
  if (!description) error.description = "Description required";
  if (!upcPiece) error.upcPiece = "Upc piece required";
  if (!upcPieceQunatity) error.upcPieceQunatity = "Upc piece Quantity required";
  if (!upcSubUnit) error.upcSubUnit = "Upc Sub Unit required";
  if (!upcSubUnitQuantity)
    error.upcSubUnitQuantity = "Upc Sub Unit Quantity required";
  if (!upcUnit) error.upcUnit = "Upc Unit required";
  if (!upcUnitQuantity) error.upcUnitQuantity = "Upc Unit Quantity required";
  if (!barcodeTypeId) error.barcodeTypeId = "Barcode Type Id is required";

  //? for validation flag
  if (Object.keys(error).length === 0) isValidated = true;
  else isValidated = false;

  return { data, error, isValidated };
}

//? display validation error
function displayValidationError(error) {
  const skuField = form.querySelector(".sku-field");
  const barcodeTypeIdField = form.querySelector(".barcode-type-id-field");

  if (error?.sku) {
    skuField.querySelector("input").classList.add("border-error-base");
    skuField.querySelector(".error-field").innerText = error.sku;
  } else {
    skuField.querySelector("input").classList.remove("border-error-base");
    skuField.querySelector(".error-field").innerText = "";
  }

  if (error?.barcodeTypeId) {
    barcodeTypeIdField
      .querySelector(".selected-preview")
      .classList.add("border-error-base");
    barcodeTypeIdField.querySelector(".error-field").innerText =
      error.barcodeTypeId;
  } else {
    barcodeTypeIdField
      .querySelector(".selected-preview")
      .classList.remove("border-error-base");
    barcodeTypeIdField.querySelector(".error-field").innerText = "";
  }
}
