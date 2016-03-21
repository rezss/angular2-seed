import {Control, ControlGroup, AbstractControl} from 'angular2/common';

export class PasswordValidator {
  static hasRequiredLength(control: Control) {
    if (control.value.length > 0 && control.value.length <= 4)
      return { toShort: true, minimumLength: 5 };
      
    return null;
  }
  
  static hasSamePassword(passwordKey: string, confirmPasswordKey: string) {
    return (group: ControlGroup) => {
      var password = group.controls[passwordKey],
          confirmPassword = group.controls[confirmPasswordKey];
      
      if (password.value != confirmPassword.value)
        return { doesNotMatch: true };
    }
  }
}