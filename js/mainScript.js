import {createHeader} from './DOMheader.js'
import {addFormSubmitEvent} from './addFormEvent.js'
import {createForm} from './createFormRegister.js'


if (!localStorage.getItem("isValidationRequired")) {
    createForm();
    addFormSubmitEvent();
  } else {
    alert("СИСТЕМА ВАС ЗАПОМНИЛА, ВХОД УСПЕШЕН");
    createHeader();
  }
