import styled from '@emotion/styled'
import { Grid, useMediaQuery } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const FlexItem = [6, 6, 12, 6, 6, 7, 5, 12, 6, 6]
const projectsDesktop = [
  { title: 'Orbeem', image: '/images/projects/орбим.png' },
  { title: 'Gemstone mania', image: '/images/projects/гемстон.png' },
  { title: 'Rocki', image: '/images/projects/роки.png' },
  { title: 'NFT Congrats', image: '/images/projects/нфт конгратс.png' },
  { title: 'NFTime', image: '/images/projects/нфтайм.png' },
  { title: 'ignite', image: '/images/projects/игнайт.png' },
  { title: 'Dexoo', image: '/images/projects/дексу.png' },
  { title: 'Gambling platform', image: '/images/projects/гэмблинг платформ.png' },
  { title: 'Ton seed', image: '/images/projects/тон сид.png' },
  { title: 'Brat', image: '/images/projects/брат.png' },
]

const projectsMobile = [
  { title: 'Rocki', image: '/images/projects/mobile/роки моб блокчейн.png' },
  { title: 'Gemstone mania', image: '/images/projects/mobile/геймстоун мания моб блокчейн.png' },
  { title: 'Dexoo', image: '/images/projects/mobile/дексу моб блкчейн.png' },
  { title: 'Gambling platform', image: '/images/projects/mobile/гэмблинг платформа моб блокчейн.png' },
  { title: 'Orbeem', image: '/images/projects/mobile/орбим моб блокчейн.png' },
  { title: 'NFT Congrats', image: '/images/projects/mobile/нфт конгратс моб блокчейн.png' },
  { title: 'NFTime', image: '/images/projects/mobile/нфтайм моб блокчейн.png' },
  { title: 'ignite', image: '/images/projects/mobile/игнайт моб блокчейн.png' },
  { title: 'Ton seed', image: '/images/projects/mobile/тон сид моб блокчейн.png' },
  { title: 'Brat', image: '/images/projects/mobile/брат моб блокчейн.png' },
]

export const AllProjectsBlockchain = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <StyledWrapper>

      <Grid container columns={12} spacing={{ xs: '16px', md: '55px' }} rowSpacing={{ xs: '', md: '120px' }}>
        {!isMobile ?
          projectsDesktop.map((item, idx) => (
            <Grid item xs={FlexItem[idx]} key={idx}>
              <img src={item.image} width='100%' height='100%' />
              <StyledFlex>
                <span className='title'>{item.title}</span>
                {/* <span className='action'>VIEW</span> */}
              </StyledFlex>
            </Grid>
          ))
          :
          projectsMobile.map((item, idx) => (
            <Grid item xs={12} key={idx}>
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