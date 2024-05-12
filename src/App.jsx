import { useState, useEffect } from "react";

const App = () => {
  const [flightOffers, setFlightOffers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5173/Database.txt');
        const jsonData = await response.json();
        console.table(jsonData); // Just for debugging, remove this line in production
        setFlightOffers(jsonData.flightOffer);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Flight Offers</h1>
      <ul>
        {flightOffers.map((offer, index) => (
          <li key={index}>
            <h2>Price: {offer.price}</h2>
            <h3>Itinerary:</h3>
            <ul>
              {offer.itineraries.map((itinerary, i) => (
                <li className="flex gap-2" key={i}>
                  <p>Duration: {itinerary.duration}</p>
                  <ul className="flex gap-2">
                    {itinerary.segments.map((segment, j) => (
                      <li key={j}>
                        <p>Departure: {segment.departure.iataCode} at {segment.departure.at}</p>
                        <p>Arrival: {segment.arrival.iataCode} at {segment.arrival.at}</p>
                        <p>Carrier: {segment.marketingCarrier} {segment.flightNumber}</p>
                        <p>Aircraft: {segment.aircraft}</p>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
