import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserControllerService} from "../../services/user-controller.service";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {createAddUserAction} from "../../flux/actions/user.actions";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private readonly userControllerService: UserControllerService,
    private readonly router: Router,
    private store: Store<{ test: string }>
  ) {

  }


  ngOnInit(): void {
    // setup the reactive form and assign the keys in the html template as formControlName
    this.userForm = this.fb.group({
      name: [''],
    });
  }

  onSubmit(): any {
    const {name} = this.userForm.value;
    // this.userControllerService.registerUser(email, password).pipe(tap
    // (item => console.log(item))).subscribe()
    this.store.dispatch(createAddUserAction(name));
    this.userControllerService.registerUser(name).subscribe();
    this.router.navigateByUrl("/room");
  }
}
