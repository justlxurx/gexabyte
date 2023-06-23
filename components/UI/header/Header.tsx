import styled from '@emotion/styled'
import LocaleButton from 'components/custom/home-page/LocaleButton'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {logoRawIcon, logoTextIcon} from "@public/icons";

const links = [
  { link: '/solutions', title: 'solutions' },
  // { link: '/projects', title: 'projects' },
  { link: '/company', title: 'company' },
  { link: '/blog', title: 'blog' },
]

export const Header = () => {
  const reftp = document.getElementById("contact-us");

  const handleScroll = () => {
    reftp?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <StyledWrapper>
      <StyledLogo>
        <Image src={logoRawIcon} width={'34px'} height={'34px'} alt={logoRawIcon}/>
        <Image className={'logo'} src={logoTextIcon} width={'64px'} height={'34px'} alt={logoTextIcon}/>
      </StyledLogo>
      <StyledLinks>
        {links.map((item, idx) => (
          <Link href={item.link} key={idx}>
            <a className={'link'}>{item.title}</a>
          </Link>
        ))}
      </StyledLinks>
      <StyledLocaleButtons>
        <LocaleButton text={'ENG'} locale={'en'} />
        <LocaleButton text={'RUS'} locale={'ru'} />
      </StyledLocaleButtons>
      <StyledActionLink onClick={handleScroll}>get in touch</StyledActionLink>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 34px 80px;

  @media (max-width: 600px) {
    padding: 16px 16px;
  }
`

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  min-width: 120px;

  .logo {
    @media (max-width: 600px) {
      display: none;
    }
  }
  
`

const StyledLinks = styled(StyledWrapper)`
  padding: 0;
  margin-left: 110px;
  gap: 48px;

  @media (max-width: 600px) {
    display: none;
  }

  .link {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    color: #FFFFFF;
    text-transform: capitalize;
  }
`

const StyledLocaleButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto;
  @media (max-width: 600px) {
    display: none;
  }
`

const StyledActionLink = styled.button`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 115%;

  letter-spacing: -0.025em;
  text-transform: uppercase;

  color: #FFFFFF;
  background: none;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  text-align: center;
  margin-left: auto;
`
