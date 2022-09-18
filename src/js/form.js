const form = document.getElementById("barcode-module-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const { data, isValidated, error } = validateForm();

  console.log(data, isValidated, error);
});

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
  const barcodeIdtype = form.querySelector("[name='barcode-type-id']").value;

  return {
    sku,
    description,
    upcPiece,
    upcPieceQunatity,
    upcSubUnit,
    upcSubUnitQuantity,
    upcUnit,
    upcUnitQuantity,
    barcodeIdtype,
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
    barcodeIdtype,
  } = data;

  if (!sku) error.sku = "SKU required";
  if (!description) error.description = "Description required";
  if (!upcPiece) error.upcPiece = "Upc piece required";
  if (!upcPieceQunatity) error.upcPieceQunatity = "Upc piece Quantity required";
  if (!upcSubUnit) error.upcSubUnit = "Upc Sub Unit required";
  if (!upcSubUnitQuantity)
    error.upcSubUnitQuantity = "Upc Sub Unit Quantity required";
  if (!upcUnit) error.upcUnit = "Upc Unit required";
  if (!upcUnitQuantity) error.upcUnitQuantity = "Upc Unit Quantity required";
  if (!barcodeIdtype) error.barcodeIdtype = "barcodeIdtype required";

  //? for validation flag
  if (Object.keys(error).length === 0) isValidated = true;
  else isValidated = false;

  return { data, error, isValidated };
}
