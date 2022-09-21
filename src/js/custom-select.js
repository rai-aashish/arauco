import changeBarCodeImage from "./change-barcode-image";
import { BarcodeIdTypeSelectField } from "./elements";

//? mock data
import BarcodeImg from "../assets/mock/barcode 1.jpg";

const CHECK_ICON_SVG = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17L4 12" stroke="#696158" stroke-opacity="0.8" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const BarcodeTypeSelect = document.getElementById("barcode-type");
BarcodeTypeSelect.style.display = "none";

const options = Array.apply(null, BarcodeTypeSelect.options).map((option) => {
  return {
    value: option.value,
    text: option.innerText,
  };
});

//?  STATE VARIABLES
var selectedOption = null;

export function createCustomOptions() {
  const CustomSelect = document
    .getElementById("custom-select")
    .content.cloneNode(true);

  const CustomSelectOptions = CustomSelect.querySelector(".options");
  const CustomSelectSelected = CustomSelect.querySelector(".selected-preview");
  CustomSelectSelected.onclick = () => {
    if (CustomSelectOptions.classList.contains("block")) hideCustomOptions();
    else showCustomOptions();
  };
  //? to close slect on outside click
  window.addEventListener("click", (e) => {
    if (e.target.contains(CustomSelectOptions)) hideCustomOptions();
  });

  //? HELPER FUNCTIONS
  function hideCustomOptions() {
    CustomSelectOptions.classList.remove("block");
    CustomSelectOptions.classList.add("hidden");
  }

  function showCustomOptions() {
    CustomSelectOptions.classList.remove("hidden");
    CustomSelectOptions.classList.add("block");
  }

  function changeSelectedOption(newOption) {
    selectedOption = newOption;
    // ? change option selected in original select
    BarcodeTypeSelect.innerHTML = options.map((option) => {
      return `<option value="${option.value}" ${
        newOption.value === option.value ? "selected" : ""
      }>${option.text}</option>`;
    });
    CustomSelectSelected.innerText = selectedOption.text;
    hideCustomOptions();
    //?---------------------------------------
    //? EXECUTE FUNCTION TO CHANGE BARCODE
    changeBarCodeImage(BarcodeImg);
    //? --------------------------------------
  }

  CustomSelectOptions.innerHTML = "";
  options.map((option) => {
    if (!option?.text || !option?.value) return;
    const CustomOption = document.createElement("div");
    CustomOption.setAttribute(
      "class",
      "hover:bg-grey py-2 px-3.5 text-opacity-80 cursor-pointer"
    );
    CustomOption.innerHTML = `<div class="flex gap-5 items-center justify-between"><span>${
      option.text
    }</span> ${
      selectedOption?.value === option.value ? CHECK_ICON_SVG : ""
    }</div>`;
    CustomOption.onclick = () => changeSelectedOption(option);
    CustomSelectOptions.appendChild(CustomOption);
  });
  document.getElementById("custom-select-render").innerHTML = "";
  document.getElementById("custom-select-render").appendChild(CustomSelect);
}

//? reset select
export function resetCustomSelect() {
  BarcodeIdTypeSelectField.value = "";
  selectedOption = null;
  createCustomOptions();
}

//? create all custom options
createCustomOptions();
