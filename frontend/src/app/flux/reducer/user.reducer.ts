import {AddUserAction, UserActionTypes} from "../actions/user.actions";
import {StateTemplate} from "../app.state";


export const initialState: StateTemplate = {
  users: []
};


export function userReducer(state: StateTemplate = initialState, action: AddUserAction) {
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
