import { ACTION_TYPES } from "../Action-types/ActionTypes";
const initialState = {
  count: 0,
};

export const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT:
      return { ...state, count: state.count + 1 };

    case ACTION_TYPES.DECREMENT:
      return { ...state, count: state.count - 1 };
    case ACTION_TYPES.RESET:
      return { ...state, count: 0 };

    default:
      return state;
  }
  // if (ACTION_TYPES.INCREMENT) {
  //   return { ...state, count: state.count + 1 };
  // }
  // if (ACTION_TYPES.DECREMENT) {
  //   return { ...state, count: state.count - 1 };
  // }
  // if (ACTION_TYPES.RESET) {
  //   return { ...state, count: 0 };
  // } else {
  //   return state;
  // }
};
