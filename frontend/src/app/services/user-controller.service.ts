import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserDto} from "../model/UserDto";

@Injectable({
  providedIn: 'root'
})
export class UserControllerService {

  constructor(private readonly http: HttpClient) { }

  registerUser(userDto: UserDto) {
    return this.http.post("/api/users", {
      email,
      password
    })
  }
}
