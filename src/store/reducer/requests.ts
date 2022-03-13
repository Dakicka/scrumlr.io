import {RequestsState} from "types/request";
import {Action, ReduxAction} from "../action";

// eslint-disable-next-line default-param-last
export const joinRequestReducer = (state: RequestsState = [], action: ReduxAction): RequestsState => {
  if (action.type === Action.InitializeBoard) {
    return action.requests;
  }

  if (action.type === Action.CreateJoinRequest) {
    return [action.joinRequest, ...state];
  }

  if (action.type === Action.UpdateJoinRequest) {
    const index = state.findIndex((r) => r.user === action.joinRequest.user);
    if (index >= 0) {
      const newState = state.slice();
      newState.splice(index, 1, action.joinRequest);
      return newState;
    }
  }

  return state;
};
