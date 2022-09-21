import { form } from "../elements";

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

  // ? display validation error
  displayValidationError(error);

  return { data, error, isValidated };
}

//? display validation error
function displayValidationError(error) {
  const skuField = form.querySelector(".sku-field");
  const barcodeTypeIdField = form.querySelector(".barcode-type-id-field");
  const upcPieceField = form.querySelector(".upc-piece-field");
  const upcSubUnitField = form.querySelector(".upc-sub-unit-field");
  const upcUnitField = form.querySelector(".upc-unit-field");
  const descriptionField = form.querySelector(".description-field");

  //? SKU ERROR FIELD
  if (error?.sku) {
    skuField.querySelector("input").classList.add("border-error-base");
    skuField.querySelector(".error-field").innerText = error.sku;
  } else {
    skuField.querySelector("input").classList.remove("border-error-base");
    skuField.querySelector(".error-field").innerText = "";
  }

  //? BAR CODE TYPE ID ERROR FIELD
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

  //? UPC PIECE ERROR FIELD
  if (error?.upcPiece) {
    upcPieceField
      .querySelector("[name='upc-piece']")
      .classList.add("border-error-base");
    upcPieceField.querySelector(".error-field").innerText = error.upcPiece;
  } else {
    upcPieceField
      .querySelector("[name='upc-piece']")
      .classList.remove("border-error-base");
    upcPieceField.querySelector(".error-field").innerText = "";
  }

  //? UPC SUB UNIT ERROR FIELD
  if (error?.upcSubUnit) {
    upcSubUnitField
      .querySelector("[name='upc-sub-unit']")
      .classList.add("border-error-base");
    upcSubUnitField.querySelector(".error-field").innerText = error.upcSubUnit;
  } else {
    upcSubUnitField
      .querySelector("[name='upc-sub-unit']")
      .classList.remove("border-error-base");
    upcSubUnitField.querySelector(".error-field").innerText = "";
  }

  //? UPC UNIT ERROR FIELD
  if (error?.upcUnit) {
    upcUnitField
      .querySelector("[name='upc-unit']")
      .classList.add("border-error-base");
    upcUnitField.querySelector(".error-field").innerText = error.upcUnit;
  } else {
    upcUnitField
      .querySelector("[name='upc-unit']")
      .classList.remove("border-error-base");
    upcUnitField.querySelector(".error-field").innerText = "";
  }

  //? Description ERROR FIELD
  if (error?.description) {
    descriptionField
      .querySelector("[name='description']")
      .classList.add("border-error-base");
    descriptionField.querySelector(".error-field").innerText =
      error.description;
  } else {
    descriptionField
      .querySelector("[name='description']")
      .classList.remove("border-error-base");
    descriptionField.querySelector(".error-field").innerText = "";
  }
}

export default validateForm;
