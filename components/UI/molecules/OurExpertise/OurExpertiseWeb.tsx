import styled from '@emotion/styled'
import { Container } from '@mui/material';
import classNames from 'classnames'
import { FC, useState } from 'react'
import { BlockchainDev } from './BlockchainDev/BlockchainDev'
import { WebTechDev } from './WebTechDev/WebTechDev'
import { TechnicalSupport } from './TechnicalSupport/TechnicalSupport'

const tabs = ['Smart contract development', 'Full-cycle Blokchain development', 'Technical support'];

interface IProps {
}

export const OurExpertiseWeb: FC<IProps> = () => {
  const [serviceIndex, setServiceIndex] = useState(0)

  const handleChangeTab = (tabIndex: number) => {
    setServiceIndex(tabIndex)
  }

  return (
    <Container disableGutters sx={{
        ml: '0px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden'
      }}> <StyledWrapper>
      <StyledFlexArea>
        <StyledTitle>Our expertise\\</StyledTitle>
      </StyledFlexArea>
        <WebTechDev />
    </StyledWrapper></Container>
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