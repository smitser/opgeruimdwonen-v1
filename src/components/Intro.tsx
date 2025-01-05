import React from 'react'
import HouseIcon from '../icons/House'
import ShelvesIcon from '../icons/Shelves'
import MovingVanIcon from '../icons/MovingVan'

function Intro() {
  return (
    <div id='intro'>
      <div className='container text-center'>
        <div className='row'>
          <div className='col-12'>
            <h2 className='heading heading-with-line'>Mijn aanbod voor jou</h2>
          </div>
        </div>
        <div className='row content'>
          <div className='col-12 col-md-6 col-lg-4 d-flex'>
            <div className='intro'>
              <div className='icon'>
                <ShelvesIcon />
              </div>
              <h3 className='mb-2'>Opruimen en organiseren</h3>
              <p>
                Weet je niet waar je moet beginnen met opruimen? Raak je het overzicht kwijt in je overvolle kleerkast,
                puilen je kasten uit of lijkt je huis overspoeld met speelgoed? Droom je van meer rust in je hoofd en
                een overzichtelijke, opgeruimde omgeving? Ik help je graag om rust en overzicht terug te brengen – in je
                huis én in je hoofd.
              </p>
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-4 d-flex'>
            <div className='intro'>
              <div className='icon'>
                <HouseIcon />
              </div>
              <h3 className='mb-2'>Woning leeg of verkoopklaar maken</h3>
              <p>
                Door te starten met opruimen en organiseren, creëren we een opgeruimde, overzichtelijke basis.
                Vervolgens geef ik de woning een frisse, aantrekkelijke uitstraling die de sterke punten van je huis
                benadrukt. Dit verhoogt niet alleen de aantrekkingskracht, maar ook de kans op een succesvolle en snelle
                verkoop.
              </p>
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-4 d-flex'>
            <div className='intro'>
              <div className='icon'>
                <MovingVanIcon />
              </div>
              <h3 className='mb-2'>Georganiseerd verhuizen</h3>
              <p>
                Sta je voor een verhuizing en weet je niet waar te beginnen? Ik bied je georganiseerde hulp aan bij het
                verhuizen, van het inpakken en labelen van dozen tot het coördineren van de logistiek op de grote dag
                zelf, zodat het proces soepel en stressvrij verloopt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
