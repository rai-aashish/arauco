import "./button-actions";
import { FormElement } from "../elements";
import validateForm from "./validate-form";

//?-----------------------------------------------------------------
//? ------------      SUBMIT FORM DATA             -----------------
//?-----------------------------------------------------------------
FormElement.addEventListener("submit", (e) => {
  e.preventDefault();

  const { data, isValidated } = validateForm();
  if (isValidated) {
    //? API LOGIC HERE
    alert(JSON.stringify(data));
  }
});
//?-----------------------------------------------------------------
//?-----------------------------------------------------------------
