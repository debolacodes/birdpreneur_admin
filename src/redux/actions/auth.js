import * as types from "../types";

export const roleAsync = (role) => {
  return async (dispatch) => {
    dispatch({type: types.LOGIN.REQUEST})
    try {
      dispatch({type: types.LOGIN.SUCCESS, payload: role});
    } catch (err) {

    }
  }
}