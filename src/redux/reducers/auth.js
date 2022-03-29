import * as types from "../types";

const initialState = {
  role: "superadmin",
  currentUser: {
  },
  loading: false,
  error: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
		case types.LOGIN.REQUEST:
      return { ...state, loading: true };
    case types.LOGIN.SUCCESS:
      return { ...state, loading: false, currentUser: payload };
    case types.LOGIN.FAILED:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

export default reducer;
