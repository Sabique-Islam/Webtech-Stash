import React, { useState } from 'react';
import './TravelPlan.css';

function TravelPlan() {
  const [travelData, setTravelData] = useState({
    trip_name: "European Adventure",
    duration: "10 days",
    destinations: [
      { city: "Paris", country: "France", days: 3, activities: ["Eiffel Tower", "Louvre Museum"] },
      { city: "Rome", country: "Italy", days: 4, activities: ["Colosseum", "Vatican City"] },
      { city: "Barcelona", country: "Spain", days: 3, activities: ["Sagrada Familia", "Park Güell"] }
    ],
    budget: "$3000",
    travelers: 2
  });

  const [newDestination, setNewDestination] = useState({
    city: '',
    country: '',
    days: 1,
    activities: []
  });

  const addDestination = () => {
    if (newDestination.city && newDestination.country) {
      setTravelData(prev => ({
        ...prev,
        destinations: [...prev.destinations, { ...newDestination }]
      }));
      setNewDestination({ city: '', country: '', days: 1, activities: [] });
    }
  };

  return (
    <div className="travel-plan-container">
      <h2 className="travel-title">Travel Plan</h2>
      
      <div className="travel-content">
        <div className="add-destination">
          <h3>Add New Destination</h3>
          <input
            type="text"
            placeholder="City"
            value={newDestination.city}
            onChange={(e) => setNewDestination({...newDestination, city: e.target.value})}
          />
          <input
            type="text"
            placeholder="Country"
            value={newDestination.country}
            onChange={(e) => setNewDestination({...newDestination, country: e.target.value})}
          />
          <input
            type="number"
            placeholder="Days"
            value={newDestination.days}
            onChange={(e) => setNewDestination({...newDestination, days: parseInt(e.target.value)})}
          />
          <button className="add-btn" onClick={addDestination}>
            Add Destination
          </button>
        </div>

        <div className="json-display">
          <h3>Current Travel Plan (JSON)</h3>
          <pre className="json-content">
            {JSON.stringify(travelData, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default TravelPlan
