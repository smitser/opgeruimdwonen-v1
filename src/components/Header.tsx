import React from 'react'
import PrimaryNavigation from './PrimaryNavigation'
import { Link } from 'gatsby'

function Header() {
  return (
    <header id='header'>
      <PrimaryNavigation />
      <div className='container-fluid container-md'>
        <div className='row'>
          <div className='col-12'>
            <div className='hero'>
              <h1 className='heading'>Creëer rust en ruimte, verkoop sneller en stijlvoller!</h1>
              <p className='text'>
                Als opruimcoach en vastgoedstyliste help ik jou om overzicht te creëren in je huis én je huis klaar te
                maken voor een succesvolle verkoop.
              </p>
              <a href='/#offering' className='btn align-self-start'>
                Laat je huis stralen
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
