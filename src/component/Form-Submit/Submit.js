import React from 'react'
import { Link } from 'react-router-dom'
  
import Card from '../../image/credit card icon.png'
import Paypal from '../../image/paypal icon.jpg'
import './Submit.css'

function Submit() {
  return (
    <div className="submit">
      <div>
        <p className="billing">Is shipping adress same as billing adress ?</p>
        <div className="yes">
          <input type="radio" name="radio-choice"></input>
          <p>YES</p>
        </div>
        <div className="no">
          <input type="radio" name="radio-choice"></input>
          <p>NO</p>
        </div>
      </div>
      <div className="intructions-field">
        <p className="any">Any special Instuctions</p>
        <input className="instruction"></input>
      </div>
      <div className="payment">
        <p>Payment Methods</p>
        <div className='card'>
          <input type="radio" name="radio-choice"></input>
          <img src={Card} alt='card-icon' />
          <p className='debit'>Debit card</p>
        </div>
        <div className='paypal'>
          <input type="radio" name="radio-choice"></input>
          <img src={Paypal} alt='paypal' />
           <p>Paypal</p>
        </div>
      </div>
      <div>
        <Link to='/Thankyou'>
        <button>Submit</button>
        </Link>
      </div>
    </div>
  );
}

export default Submit