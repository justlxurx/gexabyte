import styled from '@emotion/styled'
import Image from 'next/image'
import { FC } from 'react'

const networks = ['bitcoin.svg', 'etherium1.svg', 'cosmos.svg', 'fantom.svg', 'avalanche.svg', 'polkadot.svg', 'atom.svg', 'tron.svg', 'polygon.svg', 'arbitrum.svg', 'solana.svg', 'binanceSC.svg', 'cardano.svg']

export const Networks: FC = () => {
  return (
    <div>
      <StyledTitle>Using such networks:</StyledTitle>
      <StyledGridItemNetworks>
        {networks.map((icon, idx) => (
          <StyledNetworksCard>
            <Image src={`/icons/${icon}`} width='120px' height='52px' key={idx} />
          </StyledNetworksCard>
        ))}
      </StyledGridItemNetworks>
    </div>
  )
}

const StyledGridItemNetworks = styled.div`
  display: grid;
  grid-template-columns: 154px 154px 154px;
  gap: 30px;
  margin-bottom: 72px;
`

const StyledNetworksCard = styled.div`
  width: 154px;
  height: 64.13px;
  background: #171717;
  border-radius: 2px;
  padding: 21px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledTitle = styled.p`
font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 137%;
  color: #FFFFFF;
`