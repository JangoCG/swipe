import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserControllerService} from "../services/user-controller.service";

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
    // setup the reactive form and assign the keys in the html template as formControlName
    this.userForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  onSubmit(): any {
    const {email, password} = this.userForm.value;
     // this.userControllerService.registerUser(email, password).pipe(tap
     // (item => console.log(item))).subscribe()
    this.userControllerService.registerUser(email, password).subscribe();
  }
}
