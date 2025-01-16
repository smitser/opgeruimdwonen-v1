import React, { useState } from 'react'
import classNames from 'classnames'
import logo from '../images/logo.svg'
import { LogoOneLiner } from './Footer'
import BarsIcon from '../icons/Bars'

function PrimaryNavigation() {
  const [openNav, setNavOpen] = useState(false)

  return (
    <div id='nav-wrapper'>
      <nav id='primary-navigation' aria-label='Primary' className='container-fluid container-md'>
        <a href='/' id='logo'>
          <span className='one-liner d-md-none'>
            <LogoOneLiner height={40} fill='#5d985d' />
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
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/#offering'>Aanbod</a>
          </li>
          <li>
            <a href='/#about'>Over mij</a>
          </li>
          <li>
            <a href='/#contact' className='nav-contact'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default PrimaryNavigation
