import "./button-actions";
import { form } from "../elements";
import validateForm from "./validate-form";

//?-----------------------------------------------------------------
//? ------------      SUBMIT FORM DATA             -----------------
//?-----------------------------------------------------------------
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const { data, isValidated } = validateForm();
  if (isValidated) {
    //? API LOGIC HERE
    alert(JSON.stringify(data));
  }
});
//?-----------------------------------------------------------------
//?-----------------------------------------------------------------
