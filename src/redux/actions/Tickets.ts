import { Dispatch } from "redux";

export const setFlight = (origin,destination,date) => async (dispatch: Dispatch) => {
  await dispatch({ type: "SET_LOADING", 
  payload: {
      origin:origin,
      destination:destination,
       date:date
} });
};
