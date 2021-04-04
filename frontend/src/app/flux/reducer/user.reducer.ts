import {AddUserAction, UserActionTypes} from "../actions/user.actions";

export const initialState: State = {
  users: []
};

export interface State {
  users: [];
}

export function userReducer(state: State = initialState, action: AddUserAction) {
  switch (action.type) {
    case UserActionTypes.UserAdded:
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    default:
      return state;
  }
}
