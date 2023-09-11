import './App.css';
import { useState } from 'react';


function App() {

const [bill, setBill] = useState(0);
const [tip, setTip] = useState(0);
const [group, setGroup] = useState(0);

  return (
    <div className="App">
      <h3>S P L I<br />T T E R</h3>
      <div>
        <div>
          <label>Bill</label>
          <input/>
          <label>Select Tip %</label>
          <input />
          <label>Number of People</label>
          <input />
        </div>
          <div>
            <div>
              <p>Tip Amount<span> / person</span></p>
              <h4>{}</h4>
            </div>
            <div>
              <p>Total<span> / person</span></p>
              <h4>{}</h4>
            </div>
            <button>
              <p>Reset</p>
            </button>
          </div>
      </div>
    </div>
  );
}

export default App;
