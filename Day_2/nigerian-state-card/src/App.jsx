import StateCard from "./StateCard";
import './App.css'

function App() {
  return (
    <div className="conts">
      <h1>Nigerian State Showcase</h1>
      <div className="parent-cont">
        <div className="container">
          <StateCard>
            <h2>Lagos State</h2>
            <h3>Capital: <span>Ikeja</span></h3>
            <h3>Region: <span>West</span></h3>
            <h3>Population: <span>21 million</span></h3>
            <p className="line">________________________</p>
            <h4>Famous Landmark:</h4>
            <p>Lekki Conservation Center</p>
          </StateCard>
        </div>
        <div className="container north">
          <StateCard>
            <h2>Kano State</h2>
            <h3>Capital: <span>Kano</span></h3>
            <h3>Region: <span>North</span></h3>
            <h3>Population: <span>14 million</span></h3>
            <p className="line">________________________</p>
            <h4>Famous Landmark:</h4>
            <p>Gidan Makama Museum</p>
          </StateCard>
        </div>
        <div className="container east">
          <StateCard>
            <h2>Enugu State</h2>
            <h3>Capital: <span>Enugu</span></h3>
            <h3>Region: <span>East</span></h3>
            <h3>Population: <span>4.4 million</span></h3>
            <p className="line">________________________</p>
            <h4>Famous Landmark:</h4>
            <p>Awhum Waterfall</p>
          </StateCard>
        </div>
        <div className="container south">
          <StateCard>
            <h2>Rivers State</h2>
            <h3>Capital: <span>Port Harcourt</span></h3>
            <h3>Region: <span>South</span></h3>
            <h3>Population: <span>7.4 million</span></h3>
            <p className="line">________________________</p>
            <h4>Famous Landmark:</h4>
            <p>Port Harcourt Tourist Beach</p>
          </StateCard>
        </div>
      </div>
    </div>
  );
}

export default App;