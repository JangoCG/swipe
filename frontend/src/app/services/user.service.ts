import { Injectable } from '@angular/core';
import {UserControllerService} from "./user-controller.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly userControllerService: UserControllerService) { }

  registerUser(user: string, email: string) {
    return this.userControllerService.registerUser(user, email);

  }
}
