export const selectTicket = (ticket: any) => ({
  type: "SELECT_TICKET",
  payload: ticket,
});

export const clearSelectedTickets = () => ({
  type: "CLEAR_SELECTED_TICKETS",
});

export const confirmedTicket = (ticketConfirmed:any) => ({
  type:"Your_Ticket_Booked",
  payload: ticketConfirmed,
})
