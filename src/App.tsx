import BusList from "../src/components/Bus/BusList";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./components/Redux/Store";
import TicketDetails from "./components/Bus/TicketDetails";
import Search from "./components/Bus/Search";

const App: React.FC = () => {
  // const [show, setShow] = useState(<BusList />);
  const selectedTickets = useSelector(
    (state: RootState) => state.selectedTickets
  );

  return (
    <div>
      <div className="text-5xl font-medium justify-center items-center pl-20 pt-8">Ticket Booking App</div>
      <Search />
      {selectedTickets.length === 0 ? <BusList /> : <TicketDetails />}
    </div>
  );
};
export default App;
