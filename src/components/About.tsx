import React from 'react'
import image from '../images/intro.jpg'

function About() {
  return (
    <div id='about'>
      <div className='container'>
        <div className='row content'>
          <div className='col-12 col-md-5 col-xl-4  d-flex justify-content-center justify-content-lg-start'>
            <img src={image} alt='TODO' className='about-img' />
          </div>
          <div className='col-12 col-md-7 offset-xl-1 col-xl-7'>
            <h2 className='heading heading-with-line'>Een beetje over mij</h2>
            <p className='lead'>
              <b>Hi! Ik ben Sofie en ik help je graag om rust en overzicht in je huis (en je leven) te brengen.</b>
            </p>
            <p>
              Mijn passie voor opruimen en organiseren zit er al van jongs af aan in. Als kind vond ik het heerlijk om
              mijn zus te helpen met het opruimen en opnieuw inrichten van haar kamer. Die liefde voor structuur en een
              nette omgeving is nooit verdwenen. Daarom besloot ik opleidingen te volgen tot
              <strong> professional organizer</strong> en <strong> lifecoach</strong>. Onlangs heb ik ook een cursus
              <strong> vastgoedstyling</strong> afgerond, zodat ik je nóg beter kan helpen.
            </p>
            <p>
              Toen ik zelf kinderen kreeg, merkte ik hoe snel spullen – zoals speelgoed – zich opstapelden. Het werd me
              duidelijk hoe een chaotisch huis onrust in je hoofd kan veroorzaken. Door op te ruimen, te minimaliseren
              en slimme structuren te creëren, ontdekte ik hoeveel rust en overzicht dat oplevert. En die ervaring wil
              ik nu met jou delen!
            </p>
            <p>
              Samen maken we van je huis een plek waar je weer écht kunt genieten. Of dat nu is om er zelf tot rust te
              komen, of om het zo aantrekkelijk mogelijk te maken voor een snelle verkoop. Ik kijk ernaar uit om samen
              aan de slag te gaan!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
