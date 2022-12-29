import Image from 'next/image'
import React from 'react'
import styled from '@emotion/styled'
import {
  aaveIcon, allIcon, balancerIcon,
  compoundIcon, infuraIcon,
  metaMaskIcon, oneInchIcon,
  pancakesWapIcon, quicknodeIcon,
  raydiumIcon,
  trustWalletIcon,
  uniswapIcon, venusIcon
} from "@public/icons";

const DeFiTechs = [
  { title: 'compund', icon: compoundIcon },
  { title: 'aave', icon: aaveIcon },
  { title: 'metamask', icon: metaMaskIcon },
  { title: 'uniswap', icon: uniswapIcon },
  { title: 'raydium', icon: raydiumIcon },
  { title: 'pancakeswap', icon: pancakesWapIcon },
  { title: 'trust wallet', icon: trustWalletIcon },
  { title: '1inch ', icon: oneInchIcon },
  { title: 'venus', icon: venusIcon },
  { title: 'infura', icon: infuraIcon },
  { title: 'quicknode', icon: quicknodeIcon },
  { title: 'balancer', icon: balancerIcon },
  { title: 'compund', icon: compoundIcon },
  { title: 'aave', icon: aaveIcon },
  { title: 'metamask', icon: metaMaskIcon },
  { title: 'uniswap', icon: uniswapIcon },
  { title: 'raydium', icon: raydiumIcon },
  { title: 'pancakeswap', icon: pancakesWapIcon },
  { title: 'trust wallet', icon: trustWalletIcon },
]

const DeFiSlider = () => {
  return (
    <div className={"slider"}>
      <div className={"slider-track"}>
        <div className={"slide-first"}>
          <Image src={allIcon} width={'40px'} height={'40px'} alt={'altIcon'}/>
        </div>
        {DeFiTechs.map((item, idx) => (
            <StyledCard key={idx}>
              <StyledIconArea>
                <Image src={item.icon} width={'74px'} height={'74px'} className={'icon'} alt={item.title}/>
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
