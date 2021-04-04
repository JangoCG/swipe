import {Action} from '@ngrx/store';

export enum UserActionTypes {
  UserAdded = "[Register] User added",
}

export class AddUserAction implements Action {
  readonly type = UserActionTypes.UserAdded

  constructor(readonly payload: string) {
  }
}

export const createAddUserAction = (user: string): UserAction =>
  new AddUserAction(user);

export type UserAction = AddUserAction;
