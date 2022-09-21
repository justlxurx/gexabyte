import styled from '@emotion/styled'
import { Grid, useMediaQuery } from '@mui/material'
import Image from 'next/image'
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
  { title: 'Orbeem', image: '/images/projects/орбим.png' },

]

export const AllProjectsConsulting = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <StyledWrapper>

      <Grid container columns={12} spacing={{ xs: '16px', md: '55px' }} rowSpacing={{ xs: '', md: '120px' }}>
        {!isMobile &&
          projectsDesktop.map((item, idx) => (
            <Grid item xs={6} md={FlexItem[idx]}>
              <img src={item.image} width='100%' height='100%' style={{ objectFit: 'fill' }} />
              <StyledFlex>
                <span className='title'>{item.title}</span>
                {/* <span className='action'>VIEW</span> */}
              </StyledFlex>
            </Grid>
          ))}
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

  .title {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 110%;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    color: #FFFFFF;
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