import {Container, Grid, Typography, useMediaQuery} from '@mui/material';
import Link from 'next/link';
import React, {useEffect, useMemo, useState} from 'react';
import styled from '@emotion/styled'
import {useRouter} from "next/router";
import {useTranslation} from "react-i18next";
import i18n from "i18next";

type ProjectWL = {
    title: string[],
    description: string,
    tags: string[],
    className?: string
}


interface ITabListProps {
    tabs: ProjectWL[],
    onTabChange: (event: React.MouseEvent<HTMLButtonElement>) => void,
    activeTabIndex: number
}

const WhiteLabelProjects = () => {
    const isMobileScreen = useMediaQuery('(max-width:768px)');
    const [isExtended, setExtended] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    const [reftp, setReftp] = React.useState<HTMLElement | null>(null)
    const { pathname } = useRouter()

    const {t, i18n } = useTranslation()

    React.useEffect(() => {
        if(isExtended) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'auto';
    }, [isExtended])

    React.useEffect(() => {
        if (typeof window !== "undefined") {
            setReftp(document.getElementById("contact-us"))
        }
    }, [pathname])

    const handleScroll = () => {
        setExtended(false)
        reftp?.scrollIntoView({ behavior: 'smooth' });
    }

    const projectsWL: ProjectWL[] = useMemo(() => {

        const arr: ProjectWL[] = t('whiteLabel.projects', {returnObjects: true})

        const newArr: ProjectWL[] = arr.map((el, idx) => {
            return {
                ...el,
                isActive: false,
                className: `project-${idx}`
            }
        })

        return newArr
    }, [t])


    const onTabChange = (e: React.MouseEvent<HTMLButtonElement>) => {
        !isExtended && setExtended(true)

        const value = parseInt((e.target as HTMLButtonElement).value, 10);

        setActiveTab(value)
    }

    return (
        <Container disableGutters sx={{
            mb: '6rem',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            padding: {xs: '0.75rem', md: 0}
        }}>
            <Typography variant='h2' sx={{
                fontSize: {
                    xs: '32px', md: '56px'
                },
                mb: '1.5rem',
                textAlign: {
                    xs: 'start',
                    md: 'left'
                },
                fontWeight: {
                    xs: '700'
                },
                fontFamily: i18n.language === 'en' ? 'Readex Pro' : 'Geometria, sans-serif'
            }}>
                {t('whiteLabel.projectTitle.0')} <br/> {t('whiteLabel.projectTitle.1')}
            </Typography>
            <Grid container gridTemplateColumns={'repeat(auto-fill, minmax(700px, 1fr))'} style={{margin: '0'}}>
                {!isExtended &&
                    projectsWL.map((el, idx) => (
                        <Grid item xs={12} md={6} key={idx} style={{padding: '4px', margin: '0'}}>
                            <ProjectWLWrapper className={el.className}>
                                <ProjectWLTitle className={i18n.language === 'en' ? '' : 'geometria'}>
                                    {el.title[0]}
                                    <br/>
                                    {el.title[1]}
                                </ProjectWLTitle>
                                <ProjectWLDesc className={i18n.language === 'en' ? '' : 'nunito'}>
                                    {el.description}
                                </ProjectWLDesc>
                                <ProjectWLButton className={i18n.language === 'en' ? '' : 'nunito'} value={idx} onClick={onTabChange}>
                                    {t('button.more')}
                                </ProjectWLButton>
                            </ProjectWLWrapper>
                        </Grid>
                    ))
                }
                {!isMobileScreen && isExtended &&
                    <ModalWrapper onClick={e => setExtended(false)}>
                        <Container disableGutters sx={{
                            mb: '6rem',
                            minHeight: '100vh',
                            display: 'flex',
                            flexDirection: 'column',
                            padding: {xs: '0.75rem', md: 0}
                        }}>
                            <Grid container gridTemplateColumns={'repeat(auto-fill, minmax(700px, 1fr))'} style={{margin: '0'}} spacing={1}>
                                <div style={{
                                    width: '100%',
                                    height: '100vh',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <ProjectWLTabWrapper onClick={e => e.stopPropagation()}>
                                        <TabList tabs={projectsWL} onTabChange={onTabChange} activeTabIndex={activeTab}/>
                                        <TabPanel role="tabpanel" className={projectsWL.at(activeTab)!.className!}>
                                            <TabPanelTitle className={i18n.language === 'en' ? '' : 'geometria'}>{projectsWL[activeTab]!.title[0]}<br/>{projectsWL[activeTab]!.title[1]}
                                            </TabPanelTitle>
                                            <TabPanelDescription className={i18n.language === 'en' ? '' : 'nunito'}>{projectsWL[activeTab]!.description}</TabPanelDescription>
                                            <ContactUsWrapper className={i18n.language === 'en' ? '' : 'nunito'}>
                                                <p>{t('whiteLabel.demonstration')}</p>
                                                <Link href={'#contact-us'}><ContactUsButton onClick={handleScroll}>
                                                    <img src="/images/projects/Arrow%2012.svg" alt="right arrow"
                                                         width={'42px'}/>
                                                    <p style={{textTransform: 'uppercase', fontFamily: i18n.language === 'en' ? 'Poppins' : 'Nunito, sans-serif'}}>{t('button.contactUs')}</p>
                                                </ContactUsButton></Link>
                                            </ContactUsWrapper>
                                            <TabPanelTags className={i18n.language === 'en' ? '' : 'nunito'}>
                                                {projectsWL[activeTab].tags.map((tag, idx) => (
                                                    <TabPanelTag key={idx}>{tag}</TabPanelTag>
                                                ))}
                                            </TabPanelTags>
                                        </TabPanel>
                                    </ProjectWLTabWrapper>
                                </div>
                            </Grid>
                        </Container>
                    </ModalWrapper>
                }
                {isMobileScreen && isExtended &&
                    <ModalWrapper>
                        <Container disableGutters sx={{
                            mb: '6rem',
                            minHeight: '100vh',
                            display: 'flex',
                            flexDirection: 'column',
                            padding: {xs: '0.75rem', md: 0}
                        }}>
                            <Grid item xs={12} md={12} style={{margin: '0'}}>
                                <div style={{
                                    width: '100%',
                                    height: '100vh',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    margin: '0'
                                }} onClick={e => setExtended(false)}>
                                    <ProjectWLMobileWrapper className={projectsWL.at(activeTab)!.className!} onClick={e => e.stopPropagation()}>
                                        <ProjectWLMobileTitleWrapper>
                                            <div style={{display: "flex", justifyContent: 'flex-start', alignItems: 'center', fontSize: 'inherit'}}>
                                                <TitleMark/>
                                                <p style={{margin: '0', fontSize: 'inherit', fontFamily: i18n.language === 'en' ? 'Readex Pro' : 'Geometria, sans-serif'}}>{projectsWL[activeTab].title.join(" ").toLowerCase()}</p>
                                            </div>
                                            <img src="/images/projects/mobile/close-btn.svg" width={'30px'} height={'30px'} alt="close button" onClick={e => setExtended(false)}/>
                                        </ProjectWLMobileTitleWrapper>
                                        <ProjectWLMobileTitle className={i18n.language === 'en' ? '' : 'geometria'}>{projectsWL[activeTab].title[0]}<br/>{projectsWL[activeTab].title[1]}</ProjectWLMobileTitle>
                                        <ProjectWLMobileDesc className={i18n.language === 'en' ? '' : 'nunito'}>{projectsWL[activeTab].description}</ProjectWLMobileDesc>
                                        <MobileContactUsWrapper className={i18n.language === 'en' ? '' : 'nunito'}>
                                            <p style={{margin: 0}}>{t('whiteLabel.demonstration')}</p>
                                            <Link href={'#contact-us'}><MobileContactUsButton onClick={handleScroll}>
                                                <img src="/images/projects/Arrow%2012.svg" alt="right arrow"
                                                     width={'42px'}/>
                                                <p style={{textTransform: "uppercase", fontFamily: i18n.language === 'en' ? 'Poppins' : 'Nunito, sans-serif'}}>{t('button.contactUs')}</p>
                                            </MobileContactUsButton></Link>
                                        </MobileContactUsWrapper>
                                        <ProjectWLMobileTags className={i18n.language === 'en' ? '' : 'nunito'}>
                                            {projectsWL[activeTab].tags.map((tag, idx) => (
                                                <ProjectWLMobileTag key={idx}>
                                                    {tag}
                                                </ProjectWLMobileTag>
                                            ))}
                                        </ProjectWLMobileTags>
                                    </ProjectWLMobileWrapper>
                                </div>
                            </Grid>
                        </Container>
                    </ModalWrapper>
                }
            </Grid>
        </Container>
    )
}

export default WhiteLabelProjects;


const TabList: React.FC<ITabListProps> = ({tabs, onTabChange, activeTabIndex}) => {
    return (
        <TabListUL role={'tablist'}>
            {tabs.map((tab, idx) => (
                <TabListLI className={i18n.language === 'en' ? '' : 'geometria'} key={idx}>
                    <TabListButton onClick={onTabChange} className={idx === activeTabIndex ? "active" : ""} value={idx}>
                        <TabListMark/>{tab.title.join(" ").toLowerCase()}
                    </TabListButton>
                </TabListLI>))}
        </TabListUL>
    )
}

const ProjectWLWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 20px 30px 100px;
  border-radius: 5px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  &.project-0{
    background: url("/images/projects/bg-crypto-cefi.svg");
  }
  
  &.project-1{
    background: url("/images/projects/nft-marketplace.svg");
  }
  
  &.project-2{
    background: url("/images/projects/defi-wallet.svg");
  }
  
  &.project-3{
    background: url("/images/projects/cefi-wallet.svg");
  }
  
  @media(max-width: 768px){
    padding-inline: 15px;
    padding-bottom: 50px;
  }
`

const TabListUL = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 10px;
  margin: 0;
`

const TabListLI = styled.li`
  width: 25%;
  
  font-family: 'Readex Pro';
  
  &.geometria{
    font-family: 'Geometria', sans-serif;
  }
`

const TabListMark = styled.span`
  width: 25px;
  height: 25px;
  background-color: #fff;
  display: block;
  border-radius: 5px;
  
  @media(max-width: 990px){
    width: 15px;
    height: 15px;
  }
`

const TitleMark = styled.span`
  width: 30px;
  height: 30px;
  background-color: #fff;
  display: block;
  border-radius: 5px;
  margin-right: 10px;
`

const TabListButton = styled.button`
  font-size: 23px;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 5px;
  background-color: transparent;
  padding: 20px 30px;
  border: none;
  border-radius: 6px 6px 0 0;
  cursor: pointer;
  font-family: inherit;

  &.active {
    background-color: #1F1F1F;
  }
  
  @media(max-width: 1250px){
    font-size: 18px;
  }

  @media(max-width: 1055px){
    font-size: 16px;
    padding: 20px 10px;
  }
`

const TabPanel = styled.div`
  width: 100%;
  height: calc(100% - 66px);
  background-repeat: no-repeat;
  background-color: #1F1F1F;
  background-position: right;
  overflow: hidden;
  background-size: cover; 
  padding: 10px 30px;
  
  &.project-0{
    background-image: url("/images/projects/extend-crypto-exchange.png");
  }

  &.project-1{
    background-image: url("/images/projects/extend-nft-marketplace.png");
  }

  &.project-2{
    background-image: url("/images/projects/extend-defi.png");
    position: relative;

    &:before{
      display: none;
      background-image: url("/images/projects/extend-defi.png");
      background-size: cover;
      background-position: right;
      background-repeat: no-repeat;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      content: '';
      opacity: 0.45;
      z-index: 1500;

      @media(max-width: 1320px){
        display: block;
      }
    }
    
    @media(max-width: 1320px){
      background-image: none;
    } 
  }

  &.project-3{
    background-image: url("/images/projects/extend-cefi.png");
  }
  
  @media(max-width: 1250px){
    height: calc(100% - 60px);
  }

  @media(max-width: 1000px){
    height: calc(100% - 50px);
  }
`

const TabPanelTitle = styled.p`
  margin: 0 0 10px;
  padding: 15px 0 0 20px;
  font-size: 30px;
  font-weight: 700;
  z-index: 2000;
  position: relative;
  font-family: 'Readex Pro';
  
  @media(max-width: 1140px){
    padding-top: 10px;
    font-size: 24px;
  }
  
  &.geometria{
    font-family: 'Geometria', sans-serif;
  }

  //@media(max-width: 1250px){
  //  font-size: 60px;
  //}

  //@media(max-width: 1255px){
  //  font-size: 32px;
  //}
  //
  //@media(max-width: 866px){
  //  font-size: 28px;
  //}
`

const TabPanelDescription = styled.p`
  font-size: 16px;
  margin: 0 0 20px;
  padding: 0 0 0 20px;
  max-width: 45%;
  color: rgba(255, 255, 255, 0.74);
  z-index: 2000;
  position: relative;
  font-family: 'Poppins';

  @media(max-width: 1140px){
    font-size: 14px;
    margin-bottom: 10px;
  }
  
  &.nunito{
    font-family: 'Nunito', sans-serif;
  }
  
  //@media(max-width: 1255px){
  //  font-size: 18px;
  //}
  //
  //@media(max-width: 866px){
  //  font-size: 16px;
  //}
  
  //@media(max-width: 1250px){
  //  font-size: 22px;
  //  margin-bottom: 20px;
  //}
  //
  //@media(max-width: 1000px){
  //  margin-bottom: 10px;
  //}
  //
  //@media(max-width: 800px){
  //  margin-bottom: 5px;
  //}

  //@media(max-width: 1150px){
  //  font-size: 19px;
  //  top: 170px;
  //}
  //
  //@media(max-width: 960px){
  //  font-size: 16px;
  //  top: 140px;
  //}
`

const ContactUsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 90px; 
  align-items: center; 
  font-size: 16px; 
  margin: 0 0 10px;
  padding: 0 0 0 20px;
  z-index: 2000;
  position: relative;
  font-family: 'Poppins';

  @media(max-width: 1140px){
    font-size: 14px;
  }
  
  &.nunito{
    font-family: 'Nunito', sans-serif;
  }

  //@media(max-width: 1255px){
  //  font-size: 18px;
  //}
  //
  //@media(max-width: 866px){
  //  font-size: 16px;
  //  margin-bottom: 5px;
  //}

  //@media(max-width: 1250px){
  //  font-size: 22px;
  //  margin-bottom: 20px;
  //}
  //
  //@media(max-width: 1160px){
  //  gap: 40px;
  //}
  //
  //@media(max-width: 1000px){
  //  padding-top: 10px;
  //}
  //
  //@media(max-width: 800px){
  //  padding-top: 5px;
  //  margin-bottom: 10px;
  //}

  //@media(max-width: 1150px){
  //  font-size: 17px;
  //  gap: 60px;
  //  top: 280px;
  //}
  //
  //@media(max-width: 960px){
  //  top: 210px;
  //  font-size: 16px;
  //  gap: 20px;
  //}
`

const ContactUsButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: inherit;
  background: transparent;
  border: none;
  cursor: pointer;
  font-weight: 700;

  &:hover, &:active{
    color: #736AE4;
  }
`

const TabPanelTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 0 0 0 20px;
  z-index: 2000;
  position: relative;
  font-family: 'Poppins';
  
  &.nunito{
    font-family: 'Nunito', sans-serif;
  }

  //@media(max-width: 1250px){
  //  top: 390px;
  //}
  //
  //@media(max-width: 1150px){
  //  top: 350px;
  //}
  //
  //@media(max-width: 960px){
  //  top: 280px;
  //}
`

const TabPanelTag = styled.span`
  background-color: #313030;
  padding: 10px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.74);
  font-weight: 700;
  font-family: inherit;

  @media(max-width: 1140px){
    font-size: 12px;
  }

  @media(max-width: 820px){
    font-size: 11px;
  }

  //@media(max-width: 1255px){
  //  font-size: 15px;
  //}
  //
  //@media(max-width: 866px){
  //  font-size: 14px;
  //  padding: 7px;
  //}

  //@media(max-width: 1250px){
  //  font-size: 18px;
  //}
  //
  //@media(max-width: 1000px){
  //  font-size: 16px;
  //}

  //@media(max-width: 1150px){
  //  font-size: 12px;
  //}
  //
  //@media(max-width: 960px){
  //  font-size: 10px;;
  //}
  //
  //@media(max-width: 837px){
  //  font-size: 8px;;
  //}

`


const ProjectWLButton = styled.button`
  text-transform: uppercase;
  border: none;
  width: 254px;
  height: 80px;
  background: #FFFFFF;
  border-radius: 4px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 110%;
  letter-spacing: -0.025em;
  color: #000000;
  margin: auto 0 0;
  position: absolute;
  bottom: 30px;

  &:hover {
    cursor: pointer;
  }
  
  @media(max-width: 768px){
    height: 50px;
    width: 170px;
    font-size: 18px;
    bottom: 20px;
  }
  
  &.nunito{
    font-family: 'Nunito', sans-serif;
  }
`

const ProjectWLTitle = styled.p`
  font-weight: 700;
  font-size: 40px;
  text-transform: uppercase;
  margin: 0 0 70px;
  max-width: 100%;
  font-family: 'Readex Pro';

  @media (max-width: 768px) {
    font-size: 30px;
  }
  
  &.geometria{
    font-family: 'Geometria', sans-serif;
  }
`

const ProjectWLDesc = styled.p`
  margin: 0 0 30px;
  font-size: 22px;
  max-width: 100%;
  font-family: 'Poppins';

  @media (max-width: 768px) {
    font-size: 18px;
  }
  
  &.nunito{
    font-family: 'Nunito', sans-serif;
  }
`

const ProjectWLTabWrapper = styled.div`
  width: 100%;
  height: 500px;
  background-color: #736AE4;
  border-radius: 12px 12px 0 0;
  padding-top: 15px;
  z-index: 1400;
  cursor: auto;
`
const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 1300;
  background-color: rgba(0,0,0,0.9);
  cursor: pointer;
`

const ProjectWLMobileWrapper = styled.div`
  width: 100%;
  max-height: 90vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;
  padding: 20px 15px;
  border-radius: 5px;
  border: #736AE4 2px solid;
  overflow: auto;
  
  &.project-0{
    background-image: url("/images/projects/mobile/mobile-crypto-exhange.png");
  }

  &.project-1{
    background-image: url("/images/projects/mobile/mobile-nft-marketplace.png");
  }

  &.project-2{
    background-image: url("/images/projects/mobile/mobile-defi.png");
  }

  &.project-3{
    background-image: url("/images/projects/mobile/mobile-cefi.png");
  }
`

const ProjectWLMobileTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.74);
  font-weight: 700;
  margin-bottom: 20px;
`

const ProjectWLMobileTitle = styled.p`
  width: 100%;
  font-weight: 700;
  font-size: 36px;
  margin: 0 0 10px 0;
  font-family: 'Readex Pro';
  
  &.geometria{
    font-family: 'Geometria', sans-serif;
  }
`

const ProjectWLMobileDesc = styled.p`
  width: 100%;
  color: rgba(255, 255, 255, 0.74);
  font-size: 17px;
  margin: 0 0 40px 0;
  font-family: 'Poppins';
  
  &.nunito{
    font-family: 'Nunito', sans-serif;
  }
`

const MobileContactUsWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: flex-start;
  font-size: 20px;
  margin: 0 0 20px;
  padding: 0;
  font-size: 17px;
  font-family: 'Poppins';
  
  &.nunito{
    font-family: 'Nunito', sans-serif;
  }
`

const MobileContactUsButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: inherit;
  background: #736AE4;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  width: 100%;
  
  &:active{
    background: #8F86FF;
  }
`

const ProjectWLMobileTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  font-family: 'Poppins';
  
  &.nunito{
    font-family: 'Nunito', sans-serif;
  }
`

const ProjectWLMobileTag = styled.p`
  background-color: #313030;
  padding: 10px;
  margin: 0;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.74);
  font-weight: 700;
  font-family: inherit;
`