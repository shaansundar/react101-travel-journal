import logo from './logo.svg';
import './App.css';
import {FaGlobeAfrica} from "react-icons/fa";
import Card from "./Card"
import data from './Data';

function App() {
  const elements = data.map((data)=> 
  <Card 
    title={data.title}
    location={data.location}
    googleMapsUrl={data.googleMapsUrl}
    startDate={data.startDate}
    endDate={data.endDate}
    description={data.description}
    imageUrl={data.imageUrl}
    />)
  return (
    <div className="App">
      <div className='NavBar'>
        <FaGlobeAfrica/>
        <span/>
        <h2>Travel Journal</h2>
      </div>
      <div className="cards">
        {elements}
      </div>
    </div>
  );
}

export default App;
