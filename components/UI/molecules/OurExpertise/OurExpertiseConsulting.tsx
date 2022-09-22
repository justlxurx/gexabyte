import styled from '@emotion/styled'
import classNames from 'classnames'
import { FC, useState } from 'react'
import { TechnicalTaskDev } from './TechnicalTaskDev/TechnicalTaskDev'
import { TokenomicsDev } from './TokenomicsDev/TokenomicsDev'
import { WhitepaperDev } from './WhitepaperDev/WhitepaperDev'

const tabs = ['Tokenomics development', 'Whitepaper development', 'Technical task development '];

interface IProps {
}

export const OurExpertiseConsulting: FC<IProps> = () => {
  const [serviceIndex, setServiceIndex] = useState(0)

  const handleChangeTab = (tabIndex: number) => {
    setServiceIndex(tabIndex)
  }

  return (
    <StyledWrapper>
      <StyledFlexArea>
        <StyledTitle>Our expertise\\</StyledTitle>
        <StyledTabArea>
          {tabs.map((tabTitle, idx) => (
            <StyledTab
              onClick={() => handleChangeTab(idx)}
              className={classNames(`${idx === serviceIndex ? 'text text__active' : 'text'}`)}
              key={idx}
            >
              {tabTitle}
            </StyledTab>
          ))}
        </StyledTabArea>
      </StyledFlexArea>

      {serviceIndex === 0 ?
        <TokenomicsDev />
        :
        serviceIndex === 1 ?
          <WhitepaperDev />
          :
          serviceIndex === 2 ?
            <TechnicalTaskDev />
            : null
      }

    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  padding: 76px;
  @media (max-width: 600px) {
    padding: 16px;
  }
`

const StyledFlexArea = styled.div`
  display: flex;
`

const StyledTabArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 46px;
  margin-left: auto;

  @media (max-width: 600px) {
    display: none;
  }
`

const StyledTab = styled.span`
  &.text {
    font-family: 'Readex Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }

    &__active {
      color: #F0B270;
    }
  }
`

const StyledTitle = styled.p`
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 110%;
  letter-spacing: 0.025em;
  text-transform: uppercase;
  color: #FFFFFF;

`