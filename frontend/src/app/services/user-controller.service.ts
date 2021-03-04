import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserControllerService {

  constructor(private readonly http: HttpClient) { }


  registerUser(user: string, email: string) {
    // return this.http.post("/users", {
    //   user,
    //   email
    // })
    return this.http.get("/users");

  }
}
