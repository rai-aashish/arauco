const form = document.getElementById("barcode-module-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const barcodeIdtype = form.querySelector("[name='barcode-type-id']");

  console.log(barcodeIdtype.value);
});
