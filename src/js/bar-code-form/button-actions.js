import { resetCustomSelect } from "../custom-select";
import { clearError } from "./validate-form";
import {
  UpcPieceQunatity,
  UpcSubUnitQuantity,
  UpcUnitQuantity,
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
  UpcPieceInputField,
  UpcUnitInputField,
  SkuInputField,
  DescriptionInputField,
  UpcSubUnitInputField,
} from "../elements";

IncreaseUpcPieceQuantityBtn.onclick = () =>
  increaseQuantity(UpcPieceQunatity, UpcPieceQunatityDisplay);

DecreaseUpcPieceQuantityBtn.onclick = () =>
  decreaseQuantity(UpcPieceQunatity, UpcPieceQunatityDisplay);

//? -- sub unit quantity ---
DecreaseUpcSubUnitQuantityBtn.onclick = () =>
  decreaseQuantity(UpcSubUnitQuantity, UpcSubUnitQuantityDisplay);
IncreaseUpcSubUnitQuantityBtn.onclick = () =>
  increaseQuantity(UpcSubUnitQuantity, UpcSubUnitQuantityDisplay);

//? -- unit quantity ---
IncreaseUpcUnitQuantityBtn.onclick = () =>
  increaseQuantity(UpcUnitQuantity, UpcUnitQuantityDisplay);

DecreaseUpcUnitQuantityBtn.onclick = () =>
  decreaseQuantity(UpcUnitQuantity, UpcUnitQuantityDisplay);

FormClearBtn.onclick = () => clearForm();
//?-------------------------------------------------------
//?-------------- handler functions    -------------------
//?-------------------------------------------------------

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

function clearForm() {
  //? reset  sku field
  SkuInputField.value = "";
  DescriptionInputField.value = "";

  //? reset upc sub unit field
  UpcSubUnitQuantity.value = "";
  UpcSubUnitQuantityDisplay.innerText = "";
  UpcSubUnitInputField.value = "";

  //? reset upc piece field
  UpcPieceInputField.value = "";
  UpcPieceQunatity.value = 1;
  UpcPieceQunatityDisplay.innerText = 1;

  //? reset upc unit quantity field
  UpcUnitQuantity.value = 1;
  UpcUnitQuantityDisplay.innerText = 1;
  UpcUnitInputField.value = "";

  //? reset Barcode type id
  resetCustomSelect();

  //? clear error states
  clearError();
}
