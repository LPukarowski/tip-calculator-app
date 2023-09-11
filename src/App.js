import './App.scss';
import { useState } from 'react';
import Tip from './Components/Tip';
import dollarIcon from './images/icon-dollar.svg';
import personIcon from './images/icon-person.svg';

function App() {

const [bill, setBill] = useState(0);
const [tip, setTip] = useState(0);
const [group, setGroup] = useState(0);

const percent = [5, 10, 15, 25, 50, 'custom'];


  return (
    <div className="App">
      <h3 className='title'>S P L I<br/>T T E R</h3>
      <form className='form'>
        <div className='inputs'>
          <label>Bill</label>
          <div className='inputs__bill'>
            <img src={dollarIcon}/>
            <input className='input'/>
          </div>
          <div className=''>
            <label>Select Tip %</label><br/>
            {
              percent.map(num => {
                return (
                  (typeof num === "string")? 
                  <input type='text' className='tip__percent input' placeholder='Custom'/>:
                  <Tip key={num} num={num}/>
                )
              })
            }
          </div>
          <label>Number of People</label>
          <div className='inputs__people'>
            <img src={personIcon}/>
            <input className='input'/>
          </div>
        </div>
        <div className='totals'>
            <div className='totals__tip'>
              <p>Tip Amount<br/><span>/ person</span></p>
              <h2>${}</h2>
            </div>
            <div className='totals__person'>
              <p>Total<br/><span>/ person</span></p>
              <h2>${}</h2>
            </div>
            <button className='totals__button'>
              <p>Reset</p>
            </button>
        </div>
      </form>


      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://www.github.com/LPukarowski" target='_blank'>Logan Pukarowski</a>.
      </div>
      <div className='swatch'>
        <div className='s c'><p>s-cyan</p></div>
        <div className='vd c'><p>vd-cyan</p></div>
        <div className='dg c'><p>dg-cyan</p></div>
        <div className='g c'><p>g-cyan</p></div>
        <div className='lg c'><p>lg-cyan</p></div>
        <div className='vlg c'><p>vlg-cyan</p></div>
      </div>
    </div>
  );
}

export default App;
