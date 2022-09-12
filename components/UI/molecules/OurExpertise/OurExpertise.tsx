import styled from '@emotion/styled'
import classNames from 'classnames'
import { FC, useState } from 'react'
import { BlockchainDev } from './BlockchainDev/BlockchainDev'
import { SmartContractDev } from './SmartContractDev/SmartContractDev'
import { TechnicalSupport } from './TechnicalSupport/TechnicalSupport'

const tabs = ['Smart contract development', 'Full-cycle Blokchain development', 'Technical support'];

interface IProps {
}

export const OurExpertise: FC<IProps> = () => {
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
        <SmartContractDev />
        :
        serviceIndex === 1 ?
          <BlockchainDev />
          :
          serviceIndex === 2 ?
            <TechnicalSupport />
            : null
      }

    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  padding: 76px;
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
`

const StyledTab = styled.span`
  &.text {
    font-family: 'Readex Pro';
    font-style: normal;
    font-weight: 600;
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

const StyledTitle = styled.span`
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 46px;
  line-height: 117.5%;
  color: #FFFFFF;
  width: 414px;
`