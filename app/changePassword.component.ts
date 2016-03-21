import {Component} from 'angular2/core';
import {ControlGroup, FormBuilder, Validators} from 'angular2/common';
import {PasswordValidator} from './password.validator';

@Component({
  selector: 'change-password',
  templateUrl: 'app/changePassword.template.html'
})
export class ChangePasswordComponent {
  form: ControlGroup;
  
  constructor (fb: FormBuilder) {
    this.form = fb.group({
      currentPassword: ['', Validators.compose([Validators.required])],
      newPassword: ['', Validators.compose([Validators.required, PasswordValidator.hasRequiredLength])],
      confirmPassword: ['', Validators.compose([Validators.required])]
    }, { validator: PasswordValidator.hasSamePassword('newPassword', 'confirmPassword')});
  }
  
  onSubmit () {
    console.log(this.form);
    
    if (this.form.value['currentPassword'] != "abc") {
      this.form.find('currentPassword').setErrors({
        invalidPassword: true
      })
      
      return;
    }
    
    alert("Password successfully changed");
  }
}