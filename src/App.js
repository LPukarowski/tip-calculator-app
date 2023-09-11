import './App.scss';
import { useState } from 'react';
import Tip from './Components/Tip';
import dollarIcon from './images/icon-dollar.svg';
import personIcon from './images/icon-person.svg';
import logo from './images/logo.svg'

function App() {

const [bill, setBill] = useState(0);
const [tip, setTip] = useState(0);
const [group, setGroup] = useState(0);

const percent = [5, 10, 15, 25, 50, 'custom'];

const handleChange = (e) => {
  
}

  return (
    <div className="App">
      <img src={logo} className='title' alt='logo '/>
      <form className='form'>
        <div className='inputs'>
          <label>Bill</label>
          <div className='inputs__bill'>
            <img src={dollarIcon} alt='bill'/>
            <input className='input' value={bill}/>
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
            <img src={personIcon} alt='group'/>
            <input className='input' value={group}/>
          </div>
        </div>
        <div className='totals'>
            <div className='totals__tip'>
              <p className='totals__tip--title'>Tip Amount<br/><span className='totals__tip--sub'>/ person</span></p>
              <h2 className='totals__tip--amount'>${tip === 0? '0.00': {tip}}</h2>
            </div>
            <div className='totals__person'>
              <p className='totals__person--title'>Total<br/><span className='totals__person--sub'>/ person</span></p>
              <h2 className='totals__person--amount'>${bill === 0? '0.00': {bill}}</h2>
            </div>
            <button className='totals__button'>
              <p className='totals__button--text'>Reset</p>
            </button>
        </div>
      </form>


      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel='noreferrer'>Frontend Mentor</a>. 
        Coded by <a href="https://www.github.com/LPukarowski" target='_blank' rel='noreferrer'>Logan Pukarowski</a>.
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
