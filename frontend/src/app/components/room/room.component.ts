import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {UserService} from "../../services/user.service";
import {tap} from "rxjs/operators";
import {createAddUserAction} from "../../flux/actions/user.actions";
import {AppState} from "../../flux/app.state";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  users$: Observable<any>

  constructor(private readonly userService: UserService, private readonly store: Store<AppState>) {
  }

  ngOnInit(): void {
    // populate store with dummy data
    let dummyData = ["john doe", "doe john", "dieter demo", "francis ngannou", "mike tyson"]
    dummyData.forEach(user => this.store.dispatch(createAddUserAction(user)))

    this.users$ = this.userService.users$;
    this.users$.pipe(tap(item => console.log(item))).subscribe()

  }

}
