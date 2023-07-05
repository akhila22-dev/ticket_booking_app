import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const BusList: React.FC = () => {
  const dispatch = useDispatch();
  const buses = useSelector((state: any) => state.buses);
  useEffect(() => {
    setTimeout(() => {
      const busesData = [
        {
          id: 1,
          img: "https://i.natgeofe.com/k/5b396b5e-59e7-43a6-9448-708125549aa1/new-york-statue-of-liberty.jpg",
          name: "Bus 1",
          price: 10,
          description: "Journey from City A to City B",
          vehicle: "Bus Type 1",
        },
        {
          id: 2,
          img: "https://media.cnn.com/api/v1/images/stellar/prod/230324090551-01-visiting-france-during-protests-what-to-know-top.jpg?c=16x9&q=h_720,w_1280,c_fill",
          name: "Bus 2",
          price: 15,
          description: "Journey from City C to City D",
          vehicle: "Bus Type 2",
        },
        {
          id: 3,
          img: "https://img.traveltriangle.com/blog/wp-content/uploads/2019/03/London-Bridge.jpg",
          name: "Bus 3",
          price: 20,
          description: "Journey from City E to City F",
          vehicle: "Bus Type 3",
        },
        {
          id: 4,
          img: "https://img.traveltriangle.com/blog/wp-content/uploads/2019/03/London-Bridge.jpg",
          name: "Bus 3",
          price: 20,
          description: "Journey from City E to City F",
          vehicle: "Bus Type 4",
        },
      ];
      dispatch({ type: "SET_BUSES", payload: busesData });
    }, 1000);
  }, []);



  return (
    <>
      <span className="text-5xl font-medium justify-center items-center pl-12">Available buses</span>
      <div className="container mx-auto p-10  " >
        <div className="grid lg:grid-cols-3 gap-5 ">
          {buses.map((bus: any) => (
            <div
              key={bus.id}
              className="rounded overflow-hidden shadow-lg flex justify-start pb-1 antialiased  font-medium cursor-pointer hover:font-bold text-base "
            >
              {/* <div className=" pl-3 pr-3 mt-8 pb-8 "> */}
              <div className="  p-2">
                <h3>{bus.name}</h3>
                <img src={bus.img} alt="img" className=" rounded-sm h-64" />
                <p>Price: ${bus.price}</p>
                <p>{bus.description}</p>
                <p>Vehicle: {bus.vehicle}</p>
                <div className=" mt-6">
                  <button
                    onClick={() =>
                      dispatch({ type: "SELECT_TICKET", payload: bus })
                    }
                    className=" text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Book Now
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

export default BusList;
