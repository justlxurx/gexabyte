import styled from '@emotion/styled'
import { Grid, useMediaQuery } from '@mui/material'
import React from 'react'

const FlexItem = [6, 6, 12, 6, 6, 7, 5]
const projectsDesktop = [
  { title: 'Crypto-Fiat Gateway', image: '/images/projects/крипто фиат.png' },
  { title: 'MyRig', image: '/images/projects/май риг.png' },
  { title: 'Gemstone', image: '/images/projects/геймстон.png' },
  { title: 'Сrypto bank', image: '/images/projects/крипто банк.png' },
  { title: 'Gambling platform', image: '/images/projects/гамблинг.png' },
  { title: 'Defi Wallet', image: '/images/projects/дефай валет.png' },
  { title: 'astana hub', image: '/images/projects/астана хаб.png' },
]

const projectsMobile = [
  { title: 'Crypto-Fiat Gateway', image: '/images/projects/mobile/крипто фиат.png' },
  { title: 'MyRig', image: '/images/projects/mobile/майриг.png' },
  { title: 'Gemstone', image: '/images/projects/mobile/гемстон консалтинг.png' },
  { title: 'Сrypto bank', image: '/images/projects/mobile/крипто банк.png' },
  { title: 'Gambling platform', image: '/images/projects/mobile/гэмблинг платформ.png' },
  { title: 'Defi Wallet', image: '/images/projects/mobile/дефай валлет.png' },
  { title: 'astana hub', image: '/images/projects/mobile/астана хаб.png' },
]

export const AllProjectsConsulting = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <StyledWrapper>

      <Grid container columns={12} spacing={{ xs: '16px', md: '55px' }} rowSpacing={{ xs: '60px', md: '120px' }}>
        {!isMobile ?
          projectsDesktop.map((item, idx) => (
            <Grid item xs={6} md={FlexItem[idx]} key={idx}>
              <img src={item.image} width={'100%'} height={'100%'} style={{ objectFit: 'fill' }} alt={item.title}/>
              <StyledFlex>
                <span className={'title'}>{item.title}</span>
              </StyledFlex>
            </Grid>
          ))
          :
          projectsMobile.map((item, idx) => (
            <Grid item xs={12} key={idx} mb='16px'>
              <img src={item.image} width={'100%'} height={'100%'} alt={item.title}/>
              <StyledFlex>
                <span className={'title'}>{item.title}</span>
              </StyledFlex>
            </Grid>
          ))
        }
      </Grid>

    </StyledWrapper >
  )
}

const StyledWrapper = styled.div`

`

const StyledFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 18px;

  @media (max-width: 600px) {
    margin-top: 0;
  }

  .title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 110%;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    color: #FFFFFF;
    @media (max-width: 600px) {
      font-size: 18px;
    }
  }

  .action {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 110%;
    letter-spacing: 0.025em;
    text-decoration-line: underline;
    text-transform: uppercase;
    color: #FFFFFF;

    &:hover {
      color: #F0B270;
      cursor: pointer;
    }
  }
`
