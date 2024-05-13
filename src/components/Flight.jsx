import { useState, useEffect } from "react";

const App = () => {
  const [flightOffers, setFlightOffers] = useState([]);
  const [trip, setTrip] = useState('one way')
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5173/Database.txt');
        const jsonData = await response.json();
        console.table(jsonData);
        setFlightOffers(jsonData.flightOffer);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mx-[250px]">
      <div className="">
        <h1 className="text-3xl font-bold mb-4">Master Price</h1>
        <div className=" w-[300px]  flex my-5 mx-auto font-[600]">
          <button onClick={() => setTrip('round')}
            className={`border border-indigo-900 px-3 ${trip === 'round' ?
              "bg-indigo-900 text-white" : ""} `} >Round trip</button>
          <button onClick={() => setTrip('one way')}
            className={`border border-indigo-900 px-3 ${trip === 'one way' ?
              "bg-indigo-900 text-white" : ""} `}>One way</button>
          <button onClick={() => setTrip('multi')}
            className={`border border-indigo-900 px-3 ${trip === 'multi' ?
              "bg-indigo-900 text-white" : ""} `}>Multi city</button>
        </div>
        <hr className="border-blue-600 my-2" />
        <div>
          <form className="flex gap-2">
            <div className=" border border-black px-2 py-1 ">
              <input className=" w-[140px] outline-none"
                type="text" placeholder="From" />
            </div>
            <div className=" border border-black px-2 py-1 ">
              <input className=" w-[140px] outline-none"
                type="text" placeholder="To" />
            </div>
            <div className=" border border-black px-2 py-1 ">
              <input className=" w-[140px] outline-none"
                type="date" placeholder="Departure" />
            </div>
            <div className=" border border-black px-2 py-1 ">
              <input className=" w-[140px] outline-none"
                type="text" placeholder="Return" />
            </div>
            <div className=" border border-black px-2 py-1 ">
              <input className="w-[140px]  outline-none"
                type="text" placeholder="Day+" />
            </div>
            <div className=" border border-black px-2 py-1 ">
              <input className=" w-[140px] outline-none"
                type="text" placeholder="Anytime" />
            </div>
            <p>+</p>
            <div className=" border border-black px-2 py-1 ">
              <input className=" w-[140px] outline-none"
                type="text" placeholder="ADT" />
            </div>
            <div className=" border border-black px-2 py-1 ">
              <input className=" w-[140px] outline-none"
                type="text" placeholder="1" />
            </div>
            <p>+</p>
          </form>
          <hr className="border-blue-600 my-2" />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center font-[500] ">
            <input type="checkbox" className="w-5 h-5" />
            <h1 className="text-[20px]">Extra Options</h1>
          </div>
          <div className="flex gap-2 items-center font-[700]">
            <h1>Environment</h1>
            <input type="radio" className="rounded-full h-4 w-4"/>
            <span> Dummy</span>
            <input type="radio" className="rounded-full h-4 w-4"/>
            <spna>PDT</spna>
          </div>
          <button className="bg-indigo-900 text-white px-5 py-2 rounded uppercase font-[500]"> Search</button>
        </div>
        <hr className="border-blue-300 my-2" />
      </div>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th>Flight</th>
            <th>Aircraft</th>
            <th>Class</th>
            <th>Fare</th>
            <th>Route</th>
            <th>Departure</th>
            <th>Arrival</th>
            <th>Duration</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {flightOffers.map((item, index) => (
            <tr key={index} className="border-b border-red-500">
              <td>
                {item.itineraries[0].segments.map((data, i) => (
                  <h1 key={i} className="flex gap-1">
                    <p>{data.marketingCarrier}</p>
                    <p>{data.aircraft}</p>

                  </h1>
                ))}
              </td>
              <td >{item.itineraries[0].segments.map((data, i) => (
                <h1 key={i}>
                  {data.flightNumber}
                </h1>
              ))}
              </td>
              <td>
                {item.class[0].map((data, i) => (
                  <h1 key={i}>
                    {data}
                  </h1>
                ))}
              </td>
              <td >
                {item.fareBasis[0].map((data, i) => (
                  <h1 key={i}>
                    {data}
                  </h1>
                ))}
              </td>
              <td >{item.itineraries[0].segments.map((segment, i) => (
                <h1 key={i}>
                  {segment.departure.iataCode} - {segment.arrival.iataCode}
                </h1>
              ))}
              </td>
              <td>
                {item.itineraries[0].segments.map((data, i) => (
                  < h1 key={i}>{data.departure.at}</h1>
                ))}
              </td>
              <td>
                {item.itineraries[0].segments.map((data, i) => (
                  < h1 key={i}>{data.arrival.at}</h1>
                ))}
              </td>
              <td>
                <h1>...</h1>
                <h1>...</h1>
              </td>
              <td >
                <h1>{item.itineraries[0].duration}</h1>
                <h1></h1>
              </td>
              <td className="flex flex-col  items-center gap-1">
                <h1> {item.price} </h1>
                <button className="bg-indigo-900 text-[12px] font[700] text-white px-4 py-1 rounded">SELECT</button>
              </td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </div>

  );
}

export default App;
