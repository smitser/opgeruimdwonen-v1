import React from 'react'
import ClockIcon from '../icons/Clock'
import SaleIncreaseIcon from '../icons/SaleIncrease'
import ConsultationIcon from '../icons/Consultation'
import ForSaleIcon from '../icons/ForSale'

function Promo() {
  return (
    <div id='promo'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h2 className='heading heading-with-line'>Waarom kiezen voor Opgeruimd Wonen?</h2>
            <span>
              Wij bieden een unieke combinatie van opruimen en vastgoedstyling, waardoor je woning zich optimaal
              presenteert op de markt.
            </span>
            <div className='row promo-content'>
              <div className='col-12 col-md-6'>
                <div className='icon'>
                  <ClockIcon />
                </div>
                <h3>Verkoopklaar in minder tijd</h3>
                <p>Door het combineren van opruimen en styling kun je sneller de verkoop van je woning realiseren.</p>
              </div>
              <div className='col-12 col-md-6'>
                <div className='icon'>
                  <ConsultationIcon />
                </div>
                <h3>Professionele begeleiding</h3>
                <p>Je krijgt persoonlijke coaching en styling van experts die weten wat werkt.</p>
              </div>
              <div className='col-12 col-md-6'>
                <div className='icon'>
                  <SaleIncreaseIcon />
                </div>
                <h3>Verhoogde verkoopprijs</h3>
                <p>Een goed opgeruimd en stijlvol gepresenteerd huis kan de waarde van je woning verhogen.</p>
              </div>
              <div className='col-12 col-md-6'>
                <div className='icon'>
                  <ForSaleIcon />
                </div>
                <h3>Stressvrije verkoop</h3>
                <p> Wij nemen het werk uit handen en zorgen voor een vlotte, zorgeloze verkoop.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Promo
