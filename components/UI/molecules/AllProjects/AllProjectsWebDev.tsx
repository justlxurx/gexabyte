import styled from '@emotion/styled'
import { Grid, useMediaQuery } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const FlexItem = [6, 6, 12, 6, 6, 7, 5]
const projectsDesktop = [
  { title: 'Sanau saas', image: '/images/projects/санау саас.png' },
  { title: 'Cofi', image: '/images/projects/кофи.png' },
  { title: 'desktop app', image: '/images/projects/десктоп апп.png' },
  { title: 'smart home', image: '/images/projects/смарт хоум.png' },
  { title: 'factoring', image: '/images/projects/факторинг.png' },
  { title: 'online marketing', image: '/images/projects/онлайн маркетинг.png' },
  { title: 'Gemm', image: '/images/projects/гемм.png' },
]

const projectsMobile = [
  { title: 'Sanau saas', image: '/images/projects/mobile/sanau saas.png' },
  { title: 'Cofi', image: '/images/projects/mobile/cofi.png' },
  { title: 'desktop app', image: '/images/projects/mobile/desktop app.png' },
  { title: 'smart home', image: '/images/projects/mobile/smart home.png' },
  { title: 'factoring', image: '/images/projects/mobile/factoring.png' },
  { title: 'online marketing', image: '/images/projects/mobile/online marketing.png' },
  { title: 'Gemm', image: '/images/projects/mobile/gemm.png' },
]

export const AllProjectsWebDev = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <StyledWrapper>

      <Grid container columns={12} spacing={{ xs: '16px', md: '55px' }} rowSpacing={{ xs: '60px', md: '120px' }}>
        {!isMobile ?
          projectsDesktop.map((item, idx) => (
            <Grid item xs={6} md={FlexItem[idx]} key={idx}>
              <img src={item.image} width='100%' height='100%' />
              <StyledFlex>
                <span className='title'>{item.title}</span>
                {/* <span className='action'>VIEW</span> */}
              </StyledFlex>
            </Grid>
          ))
          :
          projectsMobile.map((item, idx) => (
            <Grid item xs={12} key={idx} mb='16px'>
              <img src={item.image} width='100%' height='100%' />
              <StyledFlex>
                <span className='title'>{item.title}</span>
                {/* <span className='action'>VIEW</span> */}
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