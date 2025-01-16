import React from 'react'

function Promo() {
  return (
    <div id='promo'>
      <svg
        id='visual'
        viewBox='0 0 900 600'
        width='900'
        height='600'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        version='1.1'
      >
        <g transform='translate(474.3324025653159 230.97102133850677)'>
          <path d='M287.4 -68.3C318.7 2.8 253.1 130.4 145.4 211.2C37.8 292.1 -111.9 326 -214.5 259.8C-317 193.7 -372.5 27.3 -328.9 -60.8C-285.3 -149 -142.7 -158.9 -7.3 -156.5C128.1 -154.1 256.2 -139.5 287.4 -68.3'></path>
        </g>
      </svg>
      <div className='container text-center'>
        <div className='row justify-content-center'>
          <div className='col-12'>
            <h2 className='heading'>
              Waarom kiezen <br />
              voor <span className='clr-green'>Opgeruimd Wonen</span>?
            </h2>
            <p className='mb-4'>
              Met mijn oog voor detail en passie voor organiseren, help ik jou om jouw woning om te toveren tot een plek
              waar je trots op bent. Ik werk gestructureerd, maar altijd met persoonlijke aandacht. Mijn doel? Jouw
              leven lichter maken door rust en stijl te creëren.
            </p>
            <a href='/#contact' className='btn btn--secondary'>
              Aan de slag
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Promo
