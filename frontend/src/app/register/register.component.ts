import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserControllerService} from "../services/user-controller.service";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private readonly userService: UserService) {

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
    const {emailKey, passwordKey} = this.userForm.value;
    console.log(emailKey);
    console.log(passwordKey);
     this.userService.registerUser(emailKey, passwordKey);
  }
}
