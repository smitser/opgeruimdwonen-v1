import React from 'react'
import Candles from '../images/candles.jpg'

function Contact() {
  return (
    <div className='contact'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h2 className='contact-heading heading'>Contact</h2>
          </div>
        </div>
        <div className='row contact-bottom'>
          <div className='col-md-7'>
            <div className='control'>
              <label htmlFor='name'>
                Naam <span className='marker'>(verplicht)</span>
              </label>
              <input id='name' type='text' />
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <div className='control'>
                  <label htmlFor='email'>
                    Emailadres <span className='marker'>(verplicht)</span>
                  </label>
                  <input id='email' type='text' />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='control'>
                  <label htmlFor='phone'>
                    Telefoonnummer <span className='marker'>(verplicht)</span>
                  </label>
                  <input id='phone' type='text' />
                </div>
              </div>
            </div>
            <div className='control'>
              <label htmlFor='address'>
                Straat en huisnummer <span className='marker'>(optioneel)</span>
              </label>
              <input id='address' type='text' />
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <div className='control'>
                  <label htmlFor='zip'>
                    Postcode <span className='marker'>(optioneel)</span>
                  </label>
                  <input id='zip' type='text' />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='control'>
                  <label htmlFor='city'>
                    Gemeente <span className='marker'>(optioneel)</span>
                  </label>
                  <input id='city' type='text' />
                </div>
              </div>
            </div>
            <div className='control'>
              <label htmlFor='message'>
                Bericht <span className='marker'>(verplicht)</span>
              </label>
              <textarea id='message' rows={7} />
            </div>
            <button type='submit' className='submit-btn'>
              Verzenden
            </button>
          </div>
          <div className='offset-md-1 col-md-4 d-flex justify-content-center mt-3'>
            <img src={Candles} alt='' className='candles' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
