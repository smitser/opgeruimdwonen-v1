import React, { useEffect, useLayoutEffect, useState } from 'react'
import logo from '../images/logo.svg'
import { Link } from 'gatsby'
import { LogoOneLiner } from './Footer'
import BarsIcon from '../icons/Bars'
import classNames from 'classnames'

function Header() {
  const [openNav, setNavOpen] = useState(false)

  return (
    <header id='header'>
      <nav id='primary-navigation' aria-label='Primary' className='container-md container-fluid'>
        <a href='/' id='logo'>
          <span className='one-liner d-md-none'>
            <LogoOneLiner height={40} />
          </span>
          <img src={logo} width={120} height={120} alt='Opgeruimd wonen' className='d-none d-md-block' />
        </a>
        <button type='button' className='menu-toggle d-md-none' onClick={() => setNavOpen(!openNav)}>
          <BarsIcon />
        </button>
        <ul className={classNames('menu', { open: openNav })}>
          <li className='d-md-none'>
            <hr />
          </li>
          <li>
            <Link to='/'>Home</Link>
          </li>
          {/* <li>
                  <span>Mijn diensten</span>
                  <ul>
                    <li>
                      <Link to='/mijn-diensten/vastgoedstyling'>Vastgoedstyling</Link>
                    </li>
                    <li>
                      <Link to='/mijn-diensten/opruimcoach'>Opruimcoach</Link>
                    </li>
                  </ul>
                </li> */}
          <li>
            <a href='/'>Hoe gaan we te werk?</a>
          </li>
          <li>
            <a href='/over-mij'>Over mij</a>
          </li>
          <li>
            <a className='nav-contact' href='/contact'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className='container-fluid container-md'>
        <div className='row'>
          <div className='col-12'>
            <div className='hero'>
              <h1 className='heading'>Maak ruimte voor rust en verkoop met vertrouwen</h1>
              <button className='btn align-self-start'>Ontdek meer</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
