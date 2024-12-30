import React from 'react'
import logo from '../images/logo.svg'
import { Link } from 'gatsby'

function Header() {
  return (
    <header id='header'>
      <nav id='primary-navigation' aria-label='Primary'>
        <div id='logo'>
          <a href='/'>
            <img src={logo} width={96} height={96} alt='Opgeruimd wonen' />
          </a>
        </div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <span>Mijn diensten</span>
            <ul>
              <li>
                <Link to='/mijn-diensten/vastgoedstyling'>Vastgoedstyling</Link>
              </li>
              <li>
                <Link to='/mijn-diensten/opruimcoach'>Opruimcoach</Link>
              </li>
            </ul>
          </li>
          <li>
            <a href='/'>Hoe gaan we te werk?</a>
          </li>
          <li>
            <a href='/'>Wie ben ik</a>
          </li>
          <li>
            <a href='/'>Realisaties</a>
          </li>
          <li>
            <a href='/'>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
