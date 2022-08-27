import { Container } from '@mui/material'
import Accomplishments from 'components/custom/home-page/Accomplishments'
import ContactUs from 'components/custom/home-page/ContactUs'
import TechStack from 'components/custom/home-page/TechStack'
import FirstBlockLayout from 'components/layouts/FirstBlockLayout'
import type { NextPage } from 'next'
import Head from 'next/head'
import AllProjects from '../components/custom/home-page/AllProjects'
import Services from '../components/custom/home-page/Services'

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Home - TechCulture</title>
        <meta property="og:title" content="TechCulture" key="title" />
        <meta name="description" content="Free Web tutorials" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ minHeight: '100vh', marginBottom: '4rem' }}>
        <FirstBlockLayout
          title='Blockchain development & consulting company'
          subTitle='We create complex products using artificial intelligence, cloud solutions, blockchain and computer vision'
          bgAnimationSrc='/videos/klava.mp4'
        />
        <TechStack />
        <Services />
        <AllProjects />
        <Accomplishments />
        <ContactUs />
      </div>
    </>
  )
}

export default Home
