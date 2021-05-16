import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserDto} from "../models/UserDto";

@Injectable({
  providedIn: 'root'
})
export class UserControllerService {

  private baseURI = "/api/users";

  constructor(private readonly http: HttpClient) { }

  registerUser(email: string) {
    return this.http.post<UserDto>(this.baseURI, {
      email,
    })
  }
}
