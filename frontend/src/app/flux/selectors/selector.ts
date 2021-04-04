import {AppState, StateTemplate} from "../app.state";
import {createSelector} from "@ngrx/store";

export const selectAppState = (state: AppState) => state.jangoHouse;

export const getUsers = createSelector(
  selectAppState,
  (state: StateTemplate) => state.users
);
