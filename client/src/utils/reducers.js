import { useReducer } from "react";
import {
  ADD_APPOINTMENT,
  CHANGE_APPOINTMENT,
  REMOVE_APPOINTMENT
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_APPOINTMENT:
      return {
        ...state,
        appointment: [...action.appointment],
      };

    case ADD_APPOINTMENT:
      return {
        ...state,
        appointment: [action.appointment],
      };

  
    case REMOVE_APPOINTMENT:
      return {
        ...state,
        appointment: []
      };

    default:
      return state;
  }
};

export function useAppointmentReducer(initialState) {
  return useReducer(reducer, initialState)
}