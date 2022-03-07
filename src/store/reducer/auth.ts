import {AuthState} from "types/auth";
import {ReduxAction} from "../action";
import {AuthAction} from "../action/auth";

export const authReducer = (state: AuthState = {user: undefined, initializationSucceeded: null}, action: ReduxAction): AuthState => {
  if (action.type === AuthAction.SignOut) {
    return {
      ...state,
      user: undefined,
    };
  }

  if (action.type === AuthAction.SignIn) {
    return {
      ...state,
      user: {
        id: action.id,
        name: action.name,
      },
    };
  }

  if (action.type === AuthAction.UserCheckCompleted) {
    return {
      ...state,
      initializationSucceeded: action.success,
    };
  }

  return state;
};
