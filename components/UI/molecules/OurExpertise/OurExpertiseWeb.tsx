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
  @media (max-width: 600px) {
    padding: 16px;
  }
`

const StyledFlexArea = styled.div`
  display: flex;
`

const StyledTitle = styled.span`
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 46px;
  line-height: 117.5%;
  color: #FFFFFF;
  width: 414px;
  @media (max-width: 600px) {
    font-size: 28px;
    line-height: 0%;
  }
`