import api from "./api";
import * as types from "./types";

export function getCryptocoins() {
  return async dispatch => {
    dispatch({
      type: types.GET_CRYPTOCOINS,
      payload: await api.getCryptocoins()
    });
  };
}

export function convertCryptocoins(inputValue, selectCoin) {
  return (dispatch, getState) => {
    let cryptocoins = getState().reducer.cryptocoins;
    let coin = cryptocoins.filter(item => {
      if (item.id === selectCoin) {
        return item;
      } else {
        return null;
      }
    });

    let result = inputValue / coin[0].price_brl;
    dispatch({
      type: types.CONVERT_CRYPTOCOINS,
      payload: result
    });
  };
}

export function cleanConvertCryptocoins() {
  return dispatch => {
    dispatch({
      type: types.CLEAN_CONVERT_CRYPTOCOINS,
      payload: 0
    });
  };
}
