import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserControllerService} from "../services/user-controller.service";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private readonly userControllerService: UserControllerService) {

  }

  ngOnInit(): void {
    // create the formgroup here with the group method of the form builder
    this.userForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  onSubmit(): any {
    this.userForm.valid ? console.log('User Form is Valid') : console.log('user form is not valid');
    const {email, password} = this.userForm.value;
    console.log(email);
    console.log(password);
     this.userControllerService.registerUser(email, password).pipe(tap
     (item => console.log(item))).subscribe()
  }
}
