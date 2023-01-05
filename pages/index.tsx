import { Stats } from 'components/custom/home-page/Stats'
import TechStack from 'components/custom/home-page/TechStack'
import BlockchainProjects from 'components/custom/projects/BlockchainProjects'
import FirstBlockLayout from 'components/layouts/FirstBlockLayout'
import { News } from 'components/UI/molecules/News/News'
import type { NextPage } from 'next'
import { useTranslation } from 'react-i18next'
import Services from '../components/custom/home-page/Services'
import TestVideo from "../components/UI/TestVideo";

const Home: NextPage = () => {

  const { t } = useTranslation();

  return (
    <>
      <div style={{ minHeight: '100vh', marginBottom: '4rem', overflow: "hidden"}}>
        {/*<FirstBlockLayout*/}
        {/*  title={t('home.title')}*/}
        {/*  subTitle={t('home.subtitle')}*/}
        {/*  bgAnimationSrc='/videos/klava.mp4'*/}
        {/*/>*/}
        <TestVideo
            title={t('home.title')}
            subTitle={t('home.subtitle')}
        />
        <TechStack />
        <Stats />
        <Services />
        <BlockchainProjects />
        <News />
      </div>
    </>
  )
}

export default Home
