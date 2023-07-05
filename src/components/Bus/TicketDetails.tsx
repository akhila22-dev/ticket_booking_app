import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSelectedTickets } from "../Redux/Actions";
import BusList from "./BusList";

const TicketDetails: React.FC = () => {
  const selectedTickets = useSelector((state: any) => state.selectedTickets);
  const [ticketCount, setTicketCount] = useState(1);
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState<
    Partial<{ name: string; email: string; phone: string }>
  >({});

  const dispatch = useDispatch();

  const handleTicketCountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const count = parseInt(event.target.value, 10);
    setTicketCount(count);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors: Partial<{ name: string; email: string; phone: string }> =
      {};

    if (!userDetails.name.trim()) {
      newErrors.name = "*Name is required";
      valid = false;
    }

    if (!userDetails.email.trim()) {
      newErrors.email = "*Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(userDetails.email)) {
      newErrors.email = "*Invalid email format";
      valid = false;
    }

    if (!userDetails.phone.trim()) {
      newErrors.phone = "*Phone number is required";
      valid = false;
    } else if (!/^\d{10}$/.test(userDetails.phone)) {
      newErrors.phone = "*Phone number should be 10 digits";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      console.log("User Details:", userDetails);
      console.log("Selected Tickets:", selectedTickets);
      dispatch(clearSelectedTickets());
      setIsBookingConfirmed(true);
    }
  };

  const renderPopup = () => {
    if (isBookingConfirmed) {
      return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4">Booking Confirmed!</h2>
            <p>Your bus ticket has been successfully booked.</p>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-4 rounded"
              onClick={() => setIsBookingConfirmed(false)}
            >
              Close
            </button>
          </div>
        </div>
      );
    }
    return null;
  };

  const totalPrice =
    selectedTickets.reduce(
      (total: number, ticket: any) => total + ticket.price,
      0
    ) * ticketCount;

  return (
    <div>
      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none  backdrop-blur-lg">
        <div className="relative  my-6 mx-auto w-2/6">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-violet-50 outline-none focus:outline-none">
            <div className="flex items-start justify-between pt-2  ">
              <label className="text-3xl font-bold not-italic pl-10 pt-2">
                {" "}
                Selected Tickect
              </label>
            </div>
            <div>
              <label className="block text-black text-1xl font-bold mb-1 not-italic float-left ml-11 mt-4">
                Ticket Count:
                <input
                  type="number"
                  min="1"
                  value={ticketCount}
                  onChange={handleTicketCountChange}
                />
              </label>
            </div>
            <>
              {selectedTickets.map((ticket: any) => (
                <div
                  key={ticket.id}
                  className="block text-black text-1xl font-bold mb-1 antialiased  float-left ml-11"
                >
                  <div>{ticket.name}</div>
                  <div>Price: ${ticket.price}</div>
                  <div>{ticket.description}</div>
                  <div>Vehicle Details: {ticket.vehicle}</div>
                  <div>Total Price: ${totalPrice}</div>
                </div>
              ))}
            </>
            <div className=" text-sky-700  text-2xl ml-11 mt-4">
              Enter User Details
            </div>
            <div className="relative p-6 flex-auto">
              <form onSubmit={handleFormSubmit} className="px-5  pb-0 w-full ">
                <label className="block text-black text-1xl font-bold  not-italic float-left">
                  Name:
                </label>

                <div>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-1   text-black"
                    type="text"
                    name="name"
                    value={userDetails.name}
                    onChange={handleInputChange}
                  />
                  {errors.name && (
                    <span className=" text-red-500">{errors.name}</span>
                  )}
                </div>
                <label className="block text-black text-1xl font-bold  not-italic float-left">
                  Email:
                </label>
                <div>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    type="email"
                    name="email"
                    value={userDetails.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && (
                    <span className="text-red-500">{errors.email}</span>
                  )}
                </div>

                <label className="block text-black text-1xl font-bold  not-italic float-left">
                  Phone:
                </label>
                <div>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                    type="text"
                    name="phone"
                    value={userDetails.phone}
                    onChange={handleInputChange}
                  />
                  {errors.phone && (
                    <span className="text-red-500">{errors.phone}</span>
                  )}
                </div>

                <button
                  className=" text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-3"
                  type="submit"
                >
                  Book Tickets
                </button>
              </form>
              {renderPopup()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDetails;
