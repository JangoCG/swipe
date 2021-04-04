import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {UserService} from "../../services/user.service";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  users$: Observable<any>

  constructor(private readonly userService: UserService) {
  }

  ngOnInit(): void {
    this.users$ = this.userService.users$;
    this.users$.pipe(tap(item => console.log(item))).subscribe()
  }

}
