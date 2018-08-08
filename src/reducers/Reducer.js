import * as types from "../actions/types";

const initialState = {
  cryptocoins: [],
  convertResult: 0
};

export default function reduce(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${types.GET_CRYPTOCOINS}`:
      return {
        ...state,
        cryptocoins: payload
      };
    case `${types.CONVERT_CRYPTOCOINS}`:
      return {
        ...state,
        convertResult: payload
      };
    case `${types.CLEAN_CONVERT_CRYPTOCOINS}`:
      return {
        ...state,
        convertResult: payload
      };
    default:
      return state;
  }
}
