import React from 'react'
import image from '../images/sofie.jpg'

function Intro() {
  return (
    <div id='intro'>
      <div className='container text-center'>
        <div className='row content'>
          <div className='col-12 col-md-6'>
            <h2 className='heading heading-intro'>Welkom! 👋</h2>
            <p>Fijn dat je mij hebt gevonden. Ik ben Sofie, opruimcoach en vastgoedstyliste.</p>
            <p className='mt-3'>Mijn doel is om rust, ruimte en harmonie te creëren in jouw huis én je hoofd. </p>
            <p className='mt-3'>
              Of je nu op zoek bent naar een opgeruimd huis, ondersteuning bij een verhuizing, of een frisse,
              aantrekkelijke uitstraling voor je woning, ik sta voor je klaar.
            </p>
            <p className='mt-3'>
              Samen maken we van jouw huis een plek waar je je echt thuis voelt – of die klaar is om een nieuwe eigenaar
              te verwelkomen. Neem gerust een kijkje op mijn website en ontdek wat ik voor je kan betekenen!
            </p>
          </div>
          <div className='col-12 col-md-6  d-flex justify-content-center'>
            <img src={image} alt='' className='photo' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
