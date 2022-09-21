const FormElement = document.getElementById("barcode-module-form");
const FormClearBtn = FormElement.querySelector(".form-clear-btn");

const SkuField = FormElement.querySelector(".sku-field");
const SkuInputField = SkuField.querySelector("[name='sku']");
const SkuErrorField = SkuField.querySelector(".error-field");

const DescriptionField = FormElement.querySelector(".description-field");
const DescriptionInputField = DescriptionField.querySelector(
  "[name='description']"
);
const DescriptionErrorField = DescriptionField.querySelector(".error-field");

const UpcPieceField = FormElement.querySelector(".upc-piece-field");
const UpcPieceInputField = UpcPieceField.querySelector("[name='upc-piece']");
const UpcPieceErrorField = UpcPieceField.querySelector(".error-field");
const UpcPieceQunatity = UpcPieceField.querySelector(
  "[name='upc-piece-quantity']"
);
const UpcPieceQunatityDisplay = document.getElementById(
  "upc-piece-quantity-display"
);
const IncreaseUpcPieceQuantityBtn = document.getElementById(
  "upc-piece-quantity-btn-increase"
);
const DecreaseUpcPieceQuantityBtn = document.getElementById(
  "upc-piece-quantity-btn-decrease"
);

const UpcSubUnitField = FormElement.querySelector(".upc-sub-unit-field");

const UpcSubUnitInputField = UpcSubUnitField.querySelector(
  "[name='upc-sub-unit']"
);
const UpcSubUnitErrorField = UpcSubUnitField.querySelector(".error-field");
const UpcSubUnitQuantity = UpcSubUnitField.querySelector(
  "[name='upc-sub-unit-quantity']"
);
const UpcSubUnitQuantityDisplay = document.getElementById(
  "upc-sub-quantity-display"
);
const IncreaseUpcSubUnitQuantityBtn = document.getElementById(
  "upc-sub-quantity-btn-increase"
);
const DecreaseUpcSubUnitQuantityBtn = document.getElementById(
  "upc-sub-quantity-btn-decrease"
);

const UpcUnitField = FormElement.querySelector(".upc-unit-field");
const UpcUnitInputField = UpcUnitField.querySelector("[name='upc-unit']");
const UpcUnitErrorField = UpcUnitField.querySelector(".error-field");
const UpcUnitQuantity = FormElement.querySelector("[name='upc-unit-quantity']");
const UpcUnitQuantityDisplay = document.getElementById(
  "upc-unit-quantity-display"
);
const IncreaseUpcUnitQuantityBtn = document.getElementById(
  "upc-unit-quantity-btn-increase"
);
const DecreaseUpcUnitQuantityBtn = document.getElementById(
  "upc-unit-quantity-btn-decrease"
);

const BarcodeIdTypeField = FormElement.querySelector(".barcode-type-id-field");
const BarcodeIdTypeSelectField = BarcodeIdTypeField.querySelector(
  "[name='barcode-type-id']"
);
const BarcodeIdTypeErrorField =
  BarcodeIdTypeField.querySelector(".error-field");
//? EXPORT THE ELEMENTS
export {
  FormElement,
  SkuField,
  SkuInputField,
  SkuErrorField,
  DescriptionField,
  DescriptionInputField,
  DescriptionErrorField,
  UpcPieceField,
  UpcPieceInputField,
  UpcPieceErrorField,
  UpcPieceQunatity,
  UpcSubUnitInputField,
  UpcSubUnitErrorField,
  UpcSubUnitQuantity,
  UpcUnitField,
  UpcUnitQuantity,
  UpcUnitInputField,
  UpcUnitErrorField,
  BarcodeIdTypeField,
  BarcodeIdTypeSelectField,
  BarcodeIdTypeErrorField,
  UpcPieceQunatityDisplay,
  IncreaseUpcPieceQuantityBtn,
  DecreaseUpcPieceQuantityBtn,
  UpcSubUnitQuantityDisplay,
  IncreaseUpcSubUnitQuantityBtn,
  DecreaseUpcSubUnitQuantityBtn,
  UpcUnitQuantityDisplay,
  IncreaseUpcUnitQuantityBtn,
  DecreaseUpcUnitQuantityBtn,
  FormClearBtn,
};
