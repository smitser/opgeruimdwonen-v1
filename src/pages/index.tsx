import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import Header from '../components/Header'
import Services from '../components/Services'
import Intro from '../components/Intro'
import Workflow from '../components/Workflow'
import About from '../components/About'
import Reviews from '../components/Reviews'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Promo from '../components/Promo'

import 'normalize.css'
import '../scss/style.scss'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />
      <Intro />
      <Workflow />
      <Promo />
      {/* <Services /> */}
      <Reviews />
      <About />
      <Contact />
      <hr />
      <Footer />
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Opgeruimd wonen</title>
