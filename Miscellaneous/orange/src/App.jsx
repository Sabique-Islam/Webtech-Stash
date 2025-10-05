import { useState } from 'react'
import './App.css'
import Welcome from './components/Welcome'
import Location from './components/Location'
import Weather from './components/Weather'
import TravelPlan from './components/TravelPlan'
import XMLtoJSON from './components/XMLtoJSON'

function App() {
  const [coordinates, setCoordinates] = useState({ latitude: null, longitude: null });

  const handleLocationFetched = (coords) => {
    setCoordinates(coords);
  };

  return (
    <>
      <Welcome />
      <div className="location-weather-container">
        <Location onLocationFetched={handleLocationFetched} />
        <Weather latitude={coordinates.latitude} longitude={coordinates.longitude} />
      </div>
      <TravelPlan />
      <XMLtoJSON />
    </>
  )
}

export default App
