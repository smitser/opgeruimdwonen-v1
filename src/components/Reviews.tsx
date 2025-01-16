import React from 'react'

function Reviews() {
  return (
    <div id='reviews'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h2 className='heading reviews-heading'>Klanten aan het woord</h2>
          </div>
        </div>
        <div className='row justify-content-center content g-sm-5'>
          <div className='col-lg-6 col-12'>
            <div className='review'>
              <p>
                Dankzij de persoonlijke tips van Sofie konden wij ons huis helemaal verkoopklaar maken. De tips hielden
                rekening met onze huidige woonsituatie en waren daardoor zeer vlot toepasbaar
              </p>
              <p className='author'>Lora V.</p>
            </div>
          </div>
          <div className='col-lg-6 col-12'>
            <div className='review'>
              <p className='mb-3'>
                Ik worstelde al heel lang met het organiseren van mijn huis, daardoor riep ik de hulp in van Sofie. Dit
                bleek een geweldige beslissing. Sofie bracht niet alleen in mijn huis, maar ook in mijn leven meer rust
                en overzicht.
              </p>
              <p className='mb-3'>
                Haar warme, geduldige aanpak gaf me direct vertrouwen. Ze luisterde, begreep mijn uitdagingen en brak
                alles op in beheersbare stappen. Sofie bood praktische oplossingen, hielp met sorteren en gaf
                strategieën om georganiseerd te blijven, op een manier die bij mij past.
              </p>
              <p>Het resultaat: een net huis én meer rust in mijn hoofd.</p>
              <p className='author'>Niels Vl.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews
