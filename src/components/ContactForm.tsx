import React from 'react'
import candles from '../images/candles.jpg'

function ContactForm() {
  return (
    <div id='contact'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h2 className='heading'>Contact</h2>
          </div>
        </div>
        <div className='row content'>
          <div className='col-12 col-md-7'>
            <form name='contact' method='POST' data-netlify='true'>
              <div className='control'>
                <label htmlFor='name'>
                  Naam <span className='marker'>(verplicht)</span>
                </label>
                <input id='name' type='text' name='name' required />
              </div>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='control'>
                    <label htmlFor='email'>
                      Emailadres <span className='marker'>(verplicht)</span>
                    </label>
                    <input id='email' type='email' name='email' required />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='control'>
                    <label htmlFor='phone'>
                      Telefoonnummer <span className='marker'>(verplicht)</span>
                    </label>
                    <input id='phone' type='text' name='phone' required />
                  </div>
                </div>
              </div>
              <div className='control'>
                <label htmlFor='address'>
                  Straat en huisnummer <span className='marker'>(optioneel)</span>
                </label>
                <input id='address' type='text' name='address' />
              </div>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='control'>
                    <label htmlFor='zip'>
                      Postcode <span className='marker'>(optioneel)</span>
                    </label>
                    <input id='zip' type='text' name='zip' />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='control'>
                    <label htmlFor='city'>
                      Gemeente <span className='marker'>(optioneel)</span>
                    </label>
                    <input id='city' type='text' name='city' />
                  </div>
                </div>
              </div>
              <div className='control'>
                <label htmlFor='message'>
                  Bericht <span className='marker'>(verplicht)</span>
                </label>
                <textarea id='message' rows={7} name='message' required />
              </div>
              <button type='submit' className='btn'>
                Verzenden
              </button>
            </form>
          </div>
          <div className='col-12 col-md-5 col-xl-4 offset-xl-1 d-flex justify-content-center'>
            <img
              src={candles}
              alt='Een witte vaas met gedroogde roze bloemen en twee brandende blauwe kaarsen op een zwarte tafel.'
              className='candles'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
