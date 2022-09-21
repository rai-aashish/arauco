import {
  FormElement,
  SkuInputField,
  SkuErrorField,
  DescriptionInputField,
  DescriptionErrorField,
  UpcPieceInputField,
  UpcPieceErrorField,
  UpcPieceQunatity,
  UpcUnitInputField,
  UpcUnitErrorField,
  UpcSubUnitQuantity,
  UpcUnitQuantity,
  UpcSubUnitInputField,
  UpcSubUnitErrorField,
  BarcodeIdTypeField,
  BarcodeIdTypeErrorField,
} from "../elements";

//? get all data
function getAllData() {
  const sku = SkuInputField.value;
  const description = DescriptionInputField.value;
  const upcPiece = UpcPieceInputField.value;
  const upcPieceQunatity = UpcPieceQunatity.value;
  const upcSubUnit = UpcSubUnitInputField.value;
  const upcSubUnitQuantity = UpcSubUnitQuantity.value;
  const upcUnit = UpcUnitInputField.value;
  const upcUnitQuantity = UpcUnitQuantity.value;
  const barcodeTypeId = FormElement.querySelector(
    "[name='barcode-type-id']"
  ).value;

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

//? validate FormElement data
function validateFormElement() {
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
  //? SKU ERROR FIELD
  if (error?.sku) {
    SkuInputField.classList.add("border-error-base");
    SkuErrorField.innerText = error.sku;
  } else {
    SkuInputField.classList.remove("border-error-base");
    SkuErrorField.innerText = "";
  }

  //? BAR CODE TYPE ID ERROR FIELD
  if (error?.barcodeTypeId) {
    BarcodeIdTypeField.querySelector(".selected-preview").classList.add(
      "border-error-base"
    );
    BarcodeIdTypeErrorField.innerText = error.barcodeTypeId;
  } else {
    BarcodeIdTypeField.querySelector(".selected-preview").classList.remove(
      "border-error-base"
    );
    BarcodeIdTypeErrorField.innerText = "";
  }

  //? UPC PIECE ERROR FIELD
  if (error?.upcPiece) {
    UpcPieceInputField.classList.add("border-error-base");
    UpcPieceErrorField.innerText = error.upcPiece;
  } else {
    UpcPieceInputField.classList.remove("border-error-base");
    UpcPieceErrorField.innerText = "";
  }

  //? UPC SUB UNIT ERROR FIELD
  if (error?.upcSubUnit) {
    UpcSubUnitInputField.classList.add("border-error-base");
    UpcSubUnitErrorField.innerText = error.upcSubUnit;
  } else {
    UpcSubUnitInputField.classList.remove("border-error-base");
    UpcSubUnitErrorField.innerText = "";
  }

  //? UPC UNIT ERROR FIELD
  if (error?.upcUnit) {
    UpcUnitInputField.classList.add("border-error-base");
    UpcUnitErrorField.innerText = error.upcUnit;
  } else {
    UpcUnitInputField.classList.remove("border-error-base");
    UpcUnitErrorField.innerText = "";
  }

  //? Description ERROR FIELD
  if (error?.description) {
    DescriptionInputField.classList.add("border-error-base");
    DescriptionErrorField.innerText = error.description;
  } else {
    DescriptionInputField.classList.remove("border-error-base");
    DescriptionErrorField.innerText = "";
  }
}

export function clearError() {
  displayValidationError({});
}
export default validateFormElement;
