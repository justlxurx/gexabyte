import React from 'react';
import styled from '@emotion/styled'
import { theme } from 'utils/theme'
import {Button} from "@mui/material";
import {useTranslation} from "react-i18next";
import {useRouter} from "next/router";

interface FirstBlockLayoutProps {
    title: string
    subTitle?: string
    bgAnimationSrc?: string
}

const TestVideo: React.FC<FirstBlockLayoutProps> = ({ title, subTitle }) => {
    const { t, i18n } = useTranslation()

    const { pathname } = useRouter()

    const [reftp, setReftp] = React.useState<HTMLElement | null>(null)

    React.useEffect(() => {
        if (typeof window !== "undefined") {
            setReftp(document.getElementById("contact-us"))
        }
    }, [pathname])

    const handleScroll = () => {
        reftp?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <Container id={'main-block'}>
            <BlockTitle>
                <Title className={i18n.language === 'en' ? '' : 'geometria'}>
                    {title}
                </Title>
                <SubTitle className={i18n.language === 'en' ? '' : 'nunito'}>
                    {subTitle}
                </SubTitle>
                <Button
                    onClick={handleScroll}
                    sx={{
                        width: { xs: '100%', md: '185px' },
                        bgcolor: theme.palette.primary.main,
                        color: '#FFFFFF', fontFamily: i18n.language === 'en' ? 'Poppins' : 'Nunito, sans-serif',
                        fontWeight: 700,
                        fontSize: '18px',
                        ':hover': { bgcolor: theme.palette.primary.main }
                    }}
                    size={'large'}
                >
                    {t('button.letstalk')}
                </Button>
            </BlockTitle>
            <BlockVideo autoPlay muted loop playsInline>
                <source src={"/videos/klava.mp4"} type={"video/mp4"} />
            </BlockVideo>
        </Container>
    );
};

export default TestVideo;

const Container = styled.div`
  margin: 16px 16px 0px 16px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  overflow: hidden;
  @media (min-width: 760px) { 
    padding: 76px;
    flex-wrap: nowrap;
    min-height: 578px;
  }
  @media (min-width: 1466px) {
    margin: 20px auto 100px auto;
    padding: 1rem 3rem;
    flex-wrap: nowrap;
    max-width: 1366px;
    height: 60vh;
    overflow: visible;
  }

`
const BlockVideo = styled.video`
  width: 100%;
  object-fit: cover;
  @media (min-width: 760px) {
    position: absolute;
    width: 100%;
    height: 578px;
    z-index: -1;
    left: 30%;
    top: 30px;
    object-fit: contain;
  }
  @media (min-width: 1366px) {
    height: 123%;
    top: -30px;
  }
`
const BlockTitle = styled.div`
  @media (min-width: 760px) {
    max-width: 692px;
  }
`

const Title = styled.h1`
  font-family: Readex Pro;
  font-size: 40px;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: 0.025em;
  text-align: left;
  @media (min-width: 760px) {
    font-size: 64px;
    line-height: 70px;
  }
  @media (min-width: 1366px) {
    font-family: Poppins;
    font-size: 64px;
    font-weight: 700;
    line-height: 110%;
    letter-spacing: 0.025rem;
    margin-bottom: 0;
  }
  
  &.geometria{
    font-family: 'Geometria', sans-serif;
  }
`
const SubTitle = styled.h2<{color?: string}>`
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0;
  text-align: left;
  color: ${theme.palette.text.secondary};
  max-width: 387px;
  margin-bottom: 16px;
  @media (min-width: 1366px) {
    font-size: 18px;
    max-width: 70%;
    line-height: 150%;
    margin-top: 2rem;
  }

  &.nunito{
    font-family: 'Nunito', sans-serif;
  }
`
