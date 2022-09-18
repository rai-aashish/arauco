const BarcodeTypeSelect = document.getElementById("barcode-type");

BarcodeTypeSelect.style.display = "none";

const options = Array.apply(null, BarcodeTypeSelect.options).map((option) => {
  return {
    value: option.value,
    text: option.innerText,
  };
});

const CustomSelect = document
  .getElementById("custom-select")
  .content.cloneNode(true);

const CustomSelectOptions = CustomSelect.querySelector(".options");
//?  STATE VARIABLES
var selectedOption = null;

CustomSelect.querySelector(".selected-preview").onclick = () => {
  if (CustomSelectOptions.classList.contains("block")) hideCustomOptions();
  else showCustomOptions();
};

//? create all custom options
createCustomOptions();

//? to close slect on outside click
window.addEventListener("click", (e) => {
  if (!e.target.contains(CustomSelectOptions)) return;
  hideCustomOptions();
});

//? Append all data
BarcodeTypeSelect.after(CustomSelect);

//? HELPER FUNCTIONS
function hideCustomOptions() {
  CustomSelectOptions.classList.remove("block");
  CustomSelectOptions.classList.add("hidden");
}

function showCustomOptions() {
  CustomSelectOptions.classList.remove("hidden");
  CustomSelectOptions.classList.add("block");
}

function createCustomOptions() {
  CustomSelectOptions.innerHTML = "";
  options.map((option) => {
    const CustomOption = document.createElement("div");
    CustomOption.setAttribute(
      "class",
      "hover:bg-grey py-2 px-3.5 text-opacity-80 cursor-pointer"
    );
    CustomOption.innerHTML = `<div class="flex gap-5 items-center justify-between"><span>${
      option.text
    }</span> ${
      selectedOption?.value === option.value ? "<span>check</span>" : ""
    }</div>`;
    CustomOption.onclick = () => changeSelectedOption(option);
    CustomSelectOptions.appendChild(CustomOption);
  });
}

function changeSelectedOption(newOption) {
  selectedOption = newOption;
  // ? change option selected in original select
  BarcodeTypeSelect.innerHTML = "";
  BarcodeTypeSelect;
  createCustomOptions();
  hideCustomOptions();
}
