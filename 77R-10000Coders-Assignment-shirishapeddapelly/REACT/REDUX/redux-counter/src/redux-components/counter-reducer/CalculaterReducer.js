import { ACTION_TYPES_FOR_CALCULATER } from "../Action-types/ActionTypesForcalculater";
const InitialValue = {
  Value: "",
};
export const CalculaterReducer = (state = InitialValue, action) => {
  switch (action.type) {
    case ACTION_TYPES_FOR_CALCULATER.ONE:
      return { ...state, Value: (state.Value += "1") };

    case ACTION_TYPES_FOR_CALCULATER.TWO:
      return { ...state, Value: (state.Value += "2") };

    case ACTION_TYPES_FOR_CALCULATER.THREE:
      return { ...state, Value: (state.Value += "3") };

    case ACTION_TYPES_FOR_CALCULATER.FOUR:
      return { ...state, Value: (state.Value += "4") };

    case ACTION_TYPES_FOR_CALCULATER.FIVE:
      return { ...state, Value: (state.Value += "5") };

    case ACTION_TYPES_FOR_CALCULATER.SIX:
      return { ...state, Value: (state.Value += "6") };

    case ACTION_TYPES_FOR_CALCULATER.SEVEN:
      return { ...state, Value: (state.Value += "7") };

    case ACTION_TYPES_FOR_CALCULATER.EIGHT:
      return { ...state, Value: (state.Value += "8") };

    case ACTION_TYPES_FOR_CALCULATER.NINE:
      return { ...state, Value: (state.Value += "9") };

    case ACTION_TYPES_FOR_CALCULATER.ZERO:
      return { ...state, Value: (state.Value += "0") };

    case ACTION_TYPES_FOR_CALCULATER.ADDITION:
      return { ...state, Value: state.Value + "+" };

    case ACTION_TYPES_FOR_CALCULATER.SUBTRACTION:
      return { ...state, Value: state.Value + "-" };
    case ACTION_TYPES_FOR_CALCULATER.MULTIPLICATION:
      return { ...state, Value: state.Value + "*" };
    case ACTION_TYPES_FOR_CALCULATER.DIVISION:
      return { ...state, Value: state.Value + "/" };
    case ACTION_TYPES_FOR_CALCULATER.MADULO:
      return { ...state, Value: state.Value + "%" };
    case ACTION_TYPES_FOR_CALCULATER.TOTAL:
      return { ...state, Value: eval(state.Value) };
    case ACTION_TYPES_FOR_CALCULATER.ALLCLEAR:
      return { ...state, Value: "" };

    default:
      return state;
  }
};
