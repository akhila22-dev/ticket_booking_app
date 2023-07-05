const initialState = {
  buses: [
    {
      id: 1,
      name: "Bus 1",
      price: 10,
      description: "Description of Bus 1",
      vehicle: "Vehicle 1",
    },
    {
      id: 2,
      name: "Bus 2",
      price: 15,
      description: "Description of Bus 2",
      vehicle: "Vehicle 2",
    },
    // Add more buses as needed
  ],
  selectedTickets: [],
};

export const ticketReducer = (state = initialState, action: any) => {
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
