import React from 'react'
import OtherHeader from '../../components/OtherHeader'
import Footer from '../../components/Footer'
import PrimaryNavigation from '../../components/PrimaryNavigation'
import { Link } from 'gatsby'

function Index() {
  return (
    <>
      <header id='services-header'>
        <PrimaryNavigation />
      </header>
      <div id='services-content'>
        <div className='container'>
          <div className='row gy-5'>
            <div className='col-12'>
              <h1 className='heading'>Mijn diensten</h1>
              <h2 className='subheading'>Rust, ruimte en een woning die verkoopt</h2>
              <p>
                Een succesvolle woningverkoop begint bij een goede eerste indruk. Als opruimcoach én vastgoedstyliste
                help ik u om uw woning niet alleen opgeruimd, maar ook verkoopklaar te maken. Door deze combinatie van
                diensten creëren we een omgeving die rust, ruimte en stijl uitstraalt – precies wat kopers zoeken.
              </p>
            </div>
            <div className='col-12 col-md-6'>
              <h2 className='subheading'>
                <span>Opruimcoaching:</span> de basis voor een frisse start
              </h2>
              <p>
                Een opgeruimd huis is de eerste stap naar een succesvolle presentatie. Samen halen we onnodige spullen
                weg, brengen we overzicht aan in elke ruimte en zorgen we voor een frisse, georganiseerde uitstraling.
                Dit niet alleen voor potentiële kopers, maar ook voor uzelf: een opgeruimd huis geeft rust in uw hoofd
                en energie voor de volgende stap.
              </p>
              <p className='mt-2'>
                <Link to='/mijn-diensten/opruimcoaching'>Ontdek opruimcoaching &gt;</Link>
              </p>
            </div>
            <div className='col-12 col-md-6'>
              <h2 className='subheading'>
                <span>Vastgoedstyling:</span> uw woning in de spotlights
              </h2>
              <p>
                Na het opruimen gaan we aan de slag met het stylen van uw woning. Door meubels slim te herplaatsen,
                neutrale kleuren te gebruiken en met sfeervolle details te werken, benadrukken we de sterke punten van
                uw huis. Of het nu gaat om een bewoonde woning of een leegstaande ruimte, ik zorg ervoor dat uw huis de
                aandacht trekt van potentiële kopers – online én tijdens bezichtigingen.
              </p>
              <p className='mt-2'>
                <Link to='/mijn-diensten/vastgoedstyling'>Ontdek vastgoedstyling &gt;</Link>
              </p>
            </div>
            <div className='col-12'>
              <h2 className='subheading'>Waarom kiezen voor deze combinatie?</h2>
              <ul>
                <li>
                  Een <b>frisse, opgeruimde basis</b> maakt uw woning aantrekkelijker voor kopers.
                </li>
                <li>
                  <b>Professionele styling</b> laat ruimtes groter, lichter en stijlvoller aanvoelen.
                </li>
                <li>
                  Het resultaat: een <b>snellere verkoop</b> en vaak een <b>hogere verkoopprijs</b>.
                </li>
              </ul>
            </div>
            <div className='col-12'>
              <h2 className='subheading'>Samen maken we het verschil</h2>
              <p>
                Of u nu verhuist, een woning verkoopt of gewoon rust en ruimte wilt creëren – met mijn dubbele expertise
                als opruimcoach en vastgoedstyliste help ik u om uw doelen te bereiken. Laten we samen aan de slag gaan
                en uw woning van zijn beste kant laten zien.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <Footer />
    </>
  )
}

export default Index
