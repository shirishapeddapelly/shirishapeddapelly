import { ACTION_TYPES } from "../Action-types/ActionTypes";
export const Increment = (value) => {
  return { type: ACTION_TYPES.INCREMENT, payload: value };
};
export const Decrement = (value) => {
  return { type: ACTION_TYPES.DECREMENT, payload: value };
};
export const Reset = (value) => {
  return { type: ACTION_TYPES.RESET, payload: value };
};
