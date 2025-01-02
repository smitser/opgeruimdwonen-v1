import React from 'react'

function Reviews() {
  return (
    <div id='reviews'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col col-lg-6 col-8 review'>
            <span className='ldquo'>&#10077;</span>
            <p>
              Dankzij de <span className='underline'>persoonlijke tips</span> van Sofie konden wij ons huis helemaal
              verkoopklaar maken. De tips hielden rekening met onze{' '}
              <span className='underline'>huidige woonsituatie</span> en waren daardoor zeer vlot toepasbaar
            </p>
            <p className='author'>Lora V.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews
