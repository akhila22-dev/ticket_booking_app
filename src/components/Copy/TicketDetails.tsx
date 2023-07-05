import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSelectedTickets } from "../Redux/Actions";

const TicketDetails: React.FC = () => {
  const selectedTickets = useSelector((state: any) => state.selectedTickets);
  const [ticketCount, setTicketCount] = useState(1);
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
      // Perform any necessary actions with the user details, such as storing them in the Redux store or making an API call
      console.log("User Details:", userDetails);
      console.log("Selected Tickets:", selectedTickets);
      dispatch(clearSelectedTickets());
    }
  };

  const totalPrice =
    selectedTickets.reduce(
      (total: number, ticket: any) => total + ticket.price,
      0
    ) * ticketCount;

  return (
    <div>
      {/* <h2>Selected Tickets</h2>
      <div>
        <label>
          Ticket Count:
          <input
            type="number"
            min="1"
            value={ticketCount}
            onChange={handleTicketCountChange}
          />
        </label>
      </div>
      {selectedTickets.map((ticket: any) => (
        <div key={ticket.id}>
          <h3>{ticket.name}</h3>
          <p>Price: ${ticket.price}</p>
          <p>{ticket.description}</p>
          <p>Vehicle Details: {ticket.vehicle}</p>
        </div>
      ))}
      <h3>Total Price: ${totalPrice}</h3>
      <h2>Enter User Details</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={userDetails.name}
            onChange={handleInputChange}
          />
          {errors.name && <span>{errors.name}</span>}
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userDetails.email}
            onChange={handleInputChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </label>
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={userDetails.phone}
            onChange={handleInputChange}
          />
          {errors.phone && <span>{errors.phone}</span>}
        </label>
        <button type="submit">Book Tickets</button>
      </form> */}

      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none  backdrop-blur-lg">
        <div className="relative  my-6 mx-auto w-2/6">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-violet-50 outline-none focus:outline-none">
            <div className="flex items-start justify-between pt-2  ">
              <label className="text-3xl font-bold not-italic pl-10 pt-3">
                {" "}
                Selected Tickect
              </label>
              <div>
                <label>
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
                  <div key={ticket.id}>
                    <h3>{ticket.name}</h3>
                    <p>Price: ${ticket.price}</p>
                    <p>{ticket.description}</p>
                    <p>Vehicle Details: {ticket.vehicle}</p>
                  </div>
                ))}
              </>
              <h3>Total Price: ${totalPrice}</h3>
              <h2>Enter User Details</h2>
              <div className="relative p-6 flex-auto">
                <form
                  onSubmit={handleFormSubmit}
                  className="px-5  pb-0 w-full "
                >
                  <label className="block text-black text-1xl font-bold mb-1 not-italic float-left">
                    Name:
                  </label>

                  <div>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-1  pb text-black"
                      type="text"
                      name="name"
                      value={userDetails.name}
                      onChange={handleInputChange}
                    />
                    {errors.name && (
                      <span className=" text-red-500">{errors.name}</span>
                    )}
                  </div>
                  <label className="block text-black text-1xl font-bold mb-1 not-italic float-left">
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

                  <label className="block text-black text-1xl font-bold mb-1 not-italic float-left">
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

                  <button type="submit">Book Tickets</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDetails;
