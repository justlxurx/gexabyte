import styled from '@emotion/styled'
import { FC, useState } from 'react'
import { WebTechDev } from './WebTechDev/WebTechDev'

const tabs = ['Smart contract development', 'Full-cycle Blokchain development', 'Technical support'];

interface IProps {
}

export const OurExpertiseWeb: FC<IProps> = () => {
  const [serviceIndex, setServiceIndex] = useState(0)

  const handleChangeTab = (tabIndex: number) => {
    setServiceIndex(tabIndex)
  }

  return (
     <StyledWrapper>
      <StyledFlexArea>
        <StyledTitle>Our expertise\\</StyledTitle>
      </StyledFlexArea>
        <WebTechDev />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  padding-left: 76px;
  padding-right: 76px;
  margin-bottom: 20vh;
  @media (max-width: 768px) {
    padding: 16px;
    margin-bottom: 0;
  }
`

const StyledFlexArea = styled.div`
  display: flex;
`

const StyledTitle = styled.span`
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 110%;
  letter-spacing: 0.025em;
  text-transform: uppercase;
  color: #FFFFFF;

  @media (max-width: 600px) {
    font-size: 28px;
  }
`