import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    // create the formgroup here with the group method of the form builder
    this.userForm = this.fb.group({
      emailKey: ['', [Validators.required]],
      passwordKey: ['', [Validators.required]],
    });
  }

  onSubmit(): any {
    this.userForm.valid ? console.log('User Form is Valid') : console.log('user form is not valid');
    console.log(this.userForm.value.emailKey);
    console.log(this.userForm.value.passwordKey);
  }
}
