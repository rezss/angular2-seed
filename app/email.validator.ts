import {Control} from 'angular2/common';

export class EmailValidator {
  static isValidEmail(control: Control) {
    let emailRegEx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!emailRegEx.test(control.value))
      return { isNotValid: true };

    // return null if validation is valid
    return null;
  }
}