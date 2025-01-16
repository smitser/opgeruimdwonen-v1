import React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import Header from '../components/Header'
import About from '../components/About'
import Reviews from '../components/Reviews'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import Promo from '../components/Promo'
import Offering from '../components/Offering'
import og_image from '../images/og_image.jpg'
import favIcon96 from '../favicon/favicon-96x96.png'
import favIconSVG from '../favicon/favicon.svg'
import favIconIco from '../favicon/favicon.ico'
import appleTouchIcon from '../favicon/apple-touch-icon.png'

import 'normalize.css'
import '../scss/style.scss'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />
      <Offering />
      <Promo />
      <Reviews />
      <About />
      <ContactForm />
      <Footer />
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => {
  return (
    <>
      <meta
        name='description'
        content='Creëer rust en ruimte, verkoop sneller en stijlvoller! Ik combineer opruimcoaching en vastgoedstyling om jouw woning verkoopklaar te maken. Samen zorgen we voor een frisse, aantrekkelijke uitstraling die kopers aantrekt!'
      />
      <meta name='robots' content='index, follow' />
      {/* Open Graph */}
      <meta property='og:locale' content='nl' />
      <meta property='og:title' content='Opgeruimd Wonen' />
      <meta
        property='og:description'
        content='Ik combineer opruimcoaching en vastgoedstyling om jouw woning verkoopklaar te maken. Samen zorgen we voor een frisse, aantrekkelijke uitstraling die kopers aantrekt!'
      />
      <meta property='og:url' content='https://www.opgeruimdwonen.be' />
      <meta property='og:image' content={og_image} />
      <meta property='og:type' content='website' />
      <title>Opgeruimd Wonen</title>
      <link rel='icon' type='image/png' sizes='96x96' href={favIcon96} />
      <link rel='icon' type='image/svg+xml' href={favIconSVG} />
      <link rel='shortcut icon' href={favIconIco} />
      <link rel='apple-touch-icon' sizes='180x180' href={appleTouchIcon} />
    </>
  )
}
