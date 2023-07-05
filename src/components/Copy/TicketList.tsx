import { useDispatch, useSelector } from "react-redux";
import { selectTicket } from "../Redux/Actions";

const TicketList: React.FC = () => {
  const buses = useSelector((state: any) => state.buses);
  const dispatch = useDispatch();

  const handleTicketSelect = (ticket: any) => {
    dispatch(selectTicket(ticket));
  };

  return (
    <>
      <h1>Available Buses</h1>
   
      <div className="text-3xl font-medium">Available Buses</div>
      <div className="container mx-auto mt-20 pb-12  " data-carousel="slide">
        <div className="grid lg:grid-cols-4 gap-5 ">
          {buses.map((bus: any) => (
            <div
              key={bus.id}
              className="rounded overflow-hidden shadow-lg flex justify-start pb-5 antialiased  font-medium cursor-pointer hover:font-bold text-base "
            >
              <div className=" pl-3 pr-3 mt-8 pb-8  ">
                <h3>{bus.name}</h3>
                <img src={bus.img} alt="img" className=" rounded-sm h-64" />
                <p>Price: ${bus.price}</p>
                <p>{bus.description}</p>
                <p>Vehicle Details: {bus.vehicle}</p>
                <div className=" mt-6">
                  <button
                    onClick={() => handleTicketSelect(bus)}
                    className=" text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Select Ticket
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TicketList;
