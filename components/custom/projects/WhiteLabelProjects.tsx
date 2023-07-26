import {Container, Grid, Typography, useMediaQuery} from '@mui/material';
import Link from 'next/link';
import React, {useState} from 'react';
import styled from '@emotion/styled'
import {useRouter} from "next/router";

type ProjectWL = {
    title: string[],
    description: string,
    tags: string[],
    isActive: boolean,
    className: string
}

const initialProjectsWL: ProjectWL[] = [
    {
        title: ['Crypto', 'Exchange CeFi'],
        description: 'Centralized cryptocurrency exchange are platforms that allow users to trade cryptos.',
        tags: ['Feature list', 'Spot trading', 'Markup and Markdown', 'Referral program', 'Liquidity aggregator', 'Authorization using login and password', 'Creating wallets upon registration', 'Connecting fiat payment services', 'Connecting your own / third party KYC service', 'Connecting your own / third party support service', 'Connecting your own / third party crypto fiat exchange service', 'P2P exchange'],
        isActive: false,
        className: 'project-0'
    },
    {
        title: ['NFT', 'Marketplace'],
        description: 'NFT Marketplace is a blockchain-based online platform to sell and buy non-fungible tokens (NFTs).',
        tags: ['Creating NFT collections', 'Convenient category search system', 'Trade history by event, item name, price, buyer, seller, date', 'Creating and downloading NFTs for artists', 'Development of wallet or integration with MyEtherWallet, Coinbase Wallet, Metamask, TrustWallet', 'Operations for the sale and purchase of NFT products'],
        isActive: false,
        className: 'project-1'
    },
    {
        title: ['DeFi', 'Wallet'],
        description: 'DeFi wallet is non-custodial (only those with seed phrase or private key can access funds) wallet that stores your cryptocurrency assets.',
        tags: ['DeFi staking', 'DEX swap (exchange)', 'Add liquidity'],
        isActive: false,
        className: 'project-2'
    },
    {
        title: ['CeFi', 'Wallet'],
        description: 'CeFi wallet is a platform that stores your cryptocurrency assets. It owned and managed by a centralized third party.',
        tags: ['CeFi wallet', 'P2P exchange', 'Buy/Sell', 'Admin panel', 'KYC', 'History'],
        isActive: false,
        className: 'project-3'
    }
]


interface ITabListProps {
    tabs: ProjectWL[],
    onTabChange: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const WhiteLabelProjects = () => {
    const isMobileScreen = useMediaQuery('(max-width:768px)');
    const [isExtended, setExtended] = useState(false);
    const [projectsWL, setProjectsWl] = useState(initialProjectsWL);
    const [activeTab, setActiveTab] = useState(0);

    const [reftp, setReftp] = React.useState<HTMLElement | null>(null)
    const { pathname } = useRouter()

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

    const onTabChange = (e: React.MouseEvent<HTMLButtonElement>) => {
        !isExtended && setExtended(true)

        const value = parseInt((e.target as HTMLButtonElement).value, 10);

        const newState = projectsWL.map((project, idx) => {
            if(value === idx) project.isActive = true;
            else project.isActive = false;

            return project
        })

        setActiveTab(value)
        setProjectsWl(newState)
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
                }
            }}>
                White Label <br/> Projects
            </Typography>
            <Grid container gridTemplateColumns={'repeat(auto-fill, minmax(700px, 1fr))'} style={{margin: '0'}}>
                {!isExtended &&
                    projectsWL.map((el, idx) => (
                        <Grid item xs={12} md={6} key={idx} style={{padding: '4px', margin: '0'}}>
                            <ProjectWLWrapper className={el.className}>
                                <ProjectWLTitle>
                                    {el.title[0]}
                                    <br/>
                                    {el.title[1]}
                                </ProjectWLTitle>
                                <ProjectWLDesc>
                                    {el.description}
                                </ProjectWLDesc>
                                <ProjectWLButton value={idx} onClick={onTabChange}>
                                    MORE
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
                                        <TabList tabs={projectsWL} onTabChange={onTabChange}/>
                                        <TabPanel role="tabpanel" className={projectsWL.at(activeTab)!.className!}>
                                            <TabPanelTitle>{projectsWL[activeTab]!.title[0]}<br/>{projectsWL[activeTab]!.title[1]}
                                            </TabPanelTitle>
                                            <TabPanelDescription>{projectsWL[activeTab]!.description}</TabPanelDescription>
                                            <ContactUsWrapper>
                                                <p>WANT A DEMONSTRATION?</p>
                                                <Link href={'#contact-us'}><ContactUsButton onClick={handleScroll}>
                                                    <img src="/images/projects/Arrow%2012.svg" alt="right arrow"
                                                         width={'42px'}/>
                                                    <p>CONTACT US</p>
                                                </ContactUsButton></Link>
                                            </ContactUsWrapper>
                                            <TabPanelTags>
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
                                                <p style={{margin: '0', fontSize: 'inherit'}}>{projectsWL[activeTab].title.join(" ").toLowerCase()}</p>
                                            </div>
                                            <img src="/images/projects/mobile/close-btn.svg" width={'30px'} height={'30px'} alt="close button" onClick={e => setExtended(false)}/>
                                        </ProjectWLMobileTitleWrapper>
                                        <ProjectWLMobileTitle>{projectsWL[activeTab].title[0]}<br/>{projectsWL[activeTab].title[1]}</ProjectWLMobileTitle>
                                        <ProjectWLMobileDesc>{projectsWL[activeTab].description}</ProjectWLMobileDesc>
                                        <MobileContactUsWrapper>
                                            <p style={{margin: 0}}>WANT A DEMONSTRATION?</p>
                                            <Link href={'#contact-us'}><MobileContactUsButton onClick={handleScroll}>
                                                <img src="/images/projects/Arrow%2012.svg" alt="right arrow"
                                                     width={'42px'}/>
                                                <p>CONTACT US</p>
                                            </MobileContactUsButton></Link>
                                        </MobileContactUsWrapper>
                                        <ProjectWLMobileTags>
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


const TabList: React.FC<ITabListProps> = ({tabs, onTabChange}) => {
    return (
        <TabListUL role={'tablist'}>
            {tabs.map((tab, idx) => (
                <TabListLI key={idx}>
                    <TabListButton onClick={onTabChange} className={tab.isActive ? "active" : ""} value={idx}>
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
  font-size: 40px;
  font-weight: 700;
  z-index: 2000;
  position: relative;

  //@media(max-width: 1250px){
  //  font-size: 60px;
  //}

  @media(max-width: 1255px){
    font-size: 32px;
  }
  
  @media(max-width: 866px){
    font-size: 28px;
  }
`

const TabPanelDescription = styled.p`
  font-size: 20px;
  margin: 0 0 20px;
  padding: 0 0 0 20px;
  max-width: 45%;
  color: rgba(255, 255, 255, 0.74);
  z-index: 2000;
  position: relative;

  @media(max-width: 1255px){
    font-size: 18px;
  }

  @media(max-width: 866px){
    font-size: 16px;
  }
  
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
  font-size: 20px; 
  margin: 0 0 10px;
  padding: 0 0 0 20px;
  z-index: 2000;
  position: relative;

  @media(max-width: 1255px){
    font-size: 18px;
  }

  @media(max-width: 866px){
    font-size: 16px;
    margin-bottom: 5px;
  }

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
  font-size: 18px;
  color: rgba(255, 255, 255, 0.74);
  font-weight: 700;

  @media(max-width: 1255px){
    font-size: 15px;
  }

  @media(max-width: 866px){
    font-size: 14px;
    padding: 7px;
  }

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
  font-family: 'Readex Pro';
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
`

const ProjectWLTitle = styled.p`
  font-weight: 700;
  font-size: 40px;
  text-transform: uppercase;
  margin: 0 0 70px;
  max-width: 100%;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`

const ProjectWLDesc = styled.p`
  margin: 0 0 30px;
  font-size: 22px;
  max-width: 100%;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const ProjectWLTabWrapper = styled.div`
  width: 100%;
  height: min(80%, 840px);
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
`

const ProjectWLMobileDesc = styled.p`
  width: 100%;
  color: rgba(255, 255, 255, 0.74);
  font-size: 17px;
  margin: 0 0 40px 0;
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
`

const ProjectWLMobileTag = styled.p`
  background-color: #313030;
  padding: 10px;
  margin: 0;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.74);
  font-weight: 700;
`