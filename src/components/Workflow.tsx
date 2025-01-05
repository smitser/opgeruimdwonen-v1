import React from 'react'

function Workflow() {
  return (
    <div id='workflow'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h2 className='heading heading-with-line workflow-heading'>Hoe gaan we te werk?</h2>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <div className='step'>
              <h3>Kennismakingsgesprek</h3>
              <p>
                Ben je nieuwsgierig naar wat ik voor jou kan betekenen? Plan nu een gratis kennismakingsgesprek van 15
                minuten. In dit gesprek bespreken we jouw wensen en doelen, en ontdek je of mijn aanpak bij jou past. We
                doen dit via Zoom of telefonisch.
              </p>
            </div>
            <div className='step'>
              <h3>Intakegesprek</h3>
              <p>
                <strong>Introductie:</strong> Ben je klaar om je huis of werkruimte eindelijk op orde te brengen, maar
                weet je niet waar je moet beginnen? Of voel je je overweldigd en heb je behoefte aan een frisse start?
                Dan is het intakegesprek precies wat je nodig hebt!
              </p>
              <p>Tijdens ons kennismakingsgesprek gaan we samen ontdekken:</p>
              <ul>
                <li>
                  <p>
                    <strong>&nbsp;Wat jouw wensen en uitdagingen zijn</strong>: We bespreken waar je tegenaan loopt en
                    wat je graag wilt bereiken. Dit helpt om een duidelijk beeld te krijgen van jouw unieke situatie.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Plan van aanpak opstellen:</strong> Samen maken we een plan dat past bij jouw levensstijl en
                    doelen. Of het nu gaat om kleine veranderingen of een complete make-over, we zorgen ervoor dat het
                    haalbaar en effectief is.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Vragen en antwoorden:</strong> Dit is ook het moment om al je vragen te stellen. Wil je
                    weten hoe het proces werkt, welke methodes ik gebruik, of wat de verwachte tijdslijn is. Hier geef
                    ik ook al enkele tips die je direct kan gebruiken.
                  </p>
                </li>
              </ul>
              <p>
                <strong>Praktische informatie:</strong> Het kennismakingsgesprek duurt ongeveer 90 minuten en kan
                plaatsvinden bij jou thuis, op je werkplek of via een online afspraak. Zo kun je in alle rust en op je
                gemak kennismaken met de mogelijkheden.
              </p>
            </div>
            <div className='step'>
              <h3>Persoonlijk plan van aanpak</h3>
              <p>
                Hier werken we samen aan jouw wensen en doelen, op jouw eigen tempo en volledig op maat. We stellen een
                concreet plan van aanpak op dat bij jou past.
              </p>
            </div>
            <div className='step'>
              <h3>Nazorg en ondersteuning</h3>
              <p>
                Na enkele weken neem ik opnieuw contact met je op om te zien hoe het met je gaat, dit is het ideale
                moment om eventuele vragen te stellen en om tips uit te wisselen hoe je de controle blijft houden.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Workflow
