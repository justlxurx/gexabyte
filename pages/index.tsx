import { Container } from '@mui/material'
import Accomplishments from 'components/custom/home-page/Accomplishments'
import ContactUs from 'components/custom/home-page/ContactUs'
import { Stats } from 'components/custom/home-page/Stats'
import TechStack from 'components/custom/home-page/TechStack'
import BlockchainProjects from 'components/custom/projects/BlockchainProjects'
import WebProjects from 'components/custom/projects/WebProjects'
import FirstBlockLayout from 'components/layouts/FirstBlockLayout'
import { News } from 'components/UI/molecules/News/News'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'
import Services from '../components/custom/home-page/Services'

const Home: NextPage = () => {

  const { t } = useTranslation();

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
          // title='Blockchain development & consulting company'
          title={t('home.title')}
          subTitle='We create complex products using artificial intelligence, cloud solutions, blockchain and computer vision'
          bgAnimationSrc='/videos/klava.mp4'
        />
        <TechStack />
        <Stats />
        <Services />
        {/* <AllProjects /> */}
        <BlockchainProjects />
        <News />
        {/* <Accomplishments /> */}
        <ContactUs />
      </div>
    </>
  )
}

export default Home
