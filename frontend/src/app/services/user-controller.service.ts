import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserDto} from "../model/UserDto";

@Injectable({
  providedIn: 'root'
})
export class UserControllerService {

  private baseURI = "/api/users";

  constructor(private readonly http: HttpClient) { }

  registerUser(email: string, password: string) {
    return this.http.post<UserDto>(this.baseURI, {
      email,
      password
    })
  }
}
