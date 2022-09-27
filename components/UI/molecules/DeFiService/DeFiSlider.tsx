import Image from 'next/image'
import React from 'react'
import styled from '@emotion/styled'

const DeFiTechs = [
  { title: 'compund', icon: '/icons/compound.svg' },
  { title: 'aave', icon: '/icons/aave.svg' },
  { title: 'metamask', icon: '/icons/metamask.svg' },
  { title: 'uniswap', icon: '/icons/uniswap.svg' },
  { title: 'raydium', icon: '/icons/raydium.svg' },
  { title: 'pancakeswap', icon: '/icons/pancakeswap-cake-logo 1.svg' },
  { title: 'trust wallet', icon: '/icons/trust wallet.svg' },
  { title: '1inch ', icon: '/icons/1inch.svg' },
  { title: 'venus', icon: '/icons/venus.svg' },
  { title: 'infura', icon: '/icons/infura.svg' },
  { title: 'quicknode', icon: '/icons/quicknode.svg' },
  { title: 'balancer', icon: '/icons/balancer.svg' },
  { title: 'compund', icon: '/icons/compound.svg' },
  { title: 'aave', icon: '/icons/aave.svg' },
  { title: 'metamask', icon: '/icons/metamask.svg' },
  { title: 'uniswap', icon: '/icons/uniswap.svg' },
  { title: 'raydium', icon: '/icons/raydium.svg' },
  { title: 'pancakeswap', icon: '/icons/pancakeswap-cake-logo 1.svg' },
  { title: 'trust wallet', icon: '/icons/trust wallet.svg' },
]

const DeFiSlider = () => {
  return (
    <div className="slider">
      <div className="slider-track">
        <div className="slide-first">
          <Image src={'/icons/techstack/All.svg'} width='40px' height='40px' />
        </div>
        {DeFiTechs.map((item, idx) => (
            <StyledCard key={idx}>
              <StyledIconArea>
                <Image src={item.icon} width='74px' height='74px' className='icon' />
              </StyledIconArea>
              <StyledCardText>{item.title}</StyledCardText>
            </StyledCard>
          ))}
      </div>
    </div>
  )
}

export default DeFiSlider

const StyledCard = styled.div`
  width: 196px;
  height: 177px;
  background: #1F1F1F;
  border-radius: 7px;
  flex: 0 0 196px;
  margin-left: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    width: 121px;
    height: 108.72px;
    flex: 0 0 121px;
  }
`

const StyledIconArea = styled.div`
  width: 74px;
  height: 74px;
  // background: #141414;
  border-radius: 5px;
  padding: 10px;
  text-align: center;

  @media (max-width: 600px) {
    width: 64px;
    height: 64px;
  }
`

const StyledCardText = styled.p`
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 110%;
  text-transform: uppercase;
  color: #F0B270;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`