import { createStore } from "redux";
import { Provider } from "react-redux";
// import { ticketReducer } from "../Redux/Reducers";

type AppState = {
  buses: any[];
  selectedTickets: any[];
};

type Action = {
  type: string;
  payload: any;
};

const initialState: AppState = {
  buses: [],
  selectedTickets: [],
};

const reducer = (state: AppState = initialState, action: Action): AppState => {
  switch (action.type) {
    case "SET_BUSES":
      return { ...state, buses: action.payload };
    case "SELECT_TICKET":
      return {
        ...state,
        selectedTickets: [...state.selectedTickets, action.payload],
      };
    default:
      return state;
  }
};
export const ticketReducer = (
  state: { buses: any[]; selectedTickets: any[] } = initialState,
  action: any
) => {
  switch (action.type) {
    case "SELECT_TICKET":
      return {
        ...state,
        selectedTickets: [...state.selectedTickets, action.payload],
      };
    case "CLEAR_SELECTED_TICKETS":
      return {
        ...state,
        selectedTickets: [],
      };
    default:
      return state;
  }
};
export type RootState = ReturnType<typeof ticketReducer>;
export const store = createStore(reducer);
export { Provider };
