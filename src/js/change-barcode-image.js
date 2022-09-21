import { BarcodeImage } from "./elements";

//?mock
import BarcodeFadedImg from "../assets/mock/barcode-faded.png";

function changeBarCodeImage(imgSrc, imgAltText) {
  if (!imgSrc) return;
  BarcodeImage.src = imgSrc;
  BarcodeImage.alt = imgAltText ?? "barcode-type-preview";
}

//? reset barcodeImage
function resetBarcodeImage() {
  BarcodeImage.src = BarcodeFadedImg;
  BarcodeImage.alt = "barcode-type-preview";
}

export { resetBarcodeImage };
export default changeBarCodeImage;
