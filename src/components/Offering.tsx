import React from 'react'
import opruimcoaching from '../images/labeling-boxes.jpg'
import vastgoedstyling from '../images/dining-room.jpg'

function Offering() {
  return (
    <div id='offering'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h2 className='heading'>
              Dit kan ik voor <span className='clr-green'>jou</span> betekenen
            </h2>
          </div>
        </div>
        <div className='row content gx-sm-5'>
          <div className='col-12 col-md-6 d-flex'>
            <div className='offer'>
              <img
                src={opruimcoaching}
                alt='Sofie plaatst een kaart met een masker op een witte opbergdoos voor de verkleedkleren in op te bergen.'
              />
              <div className='content'>
                <h3 className='mb-2'>Opruimcoaching</h3>
                <p className='mb-4'>
                  Heb je het gevoel dat je huis je overweldigt? Samen maken we ruimte, overzicht en rust, zodat jij je
                  weer thuis voelt in je eigen woning.
                </p>
                <a href='/#contact'>Laten we praten &gt;</a>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6 d-flex'>
            <div className='offer'>
              <img
                src={vastgoedstyling}
                alt='Moderne eetkamer met een ronde houten tafel, vier groene stoelen en een kroonluchter. Grote ramen bieden uitzicht op een weelderige groene tuin.'
              />
              <div className='content'>
                <h3 className='mb-2'>Vastgoedstyling</h3>
                <p className='mb-4'>
                  Wil je jouw woning snel en voor een betere prijs verkopen? Ik zorg dat jouw huis aantrekkelijk wordt
                  gepresenteerd, zodat kopers meteen verliefd worden.
                </p>
                <a href='/#contact'>Laten we praten &gt;</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offering
