import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import Header from '../components/Header'
import Services from '../components/Services'
import Intro from '../components/Intro'
import Workflow from '../components/Workflow'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

import 'normalize.css'
import '../scss/style.scss'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />
      <Intro />
      <Services />
      <Workflow />
      <About />
      <Portfolio />
      <Contact />
      <hr />
      <Footer />
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Opgeruimd wonen</title>
