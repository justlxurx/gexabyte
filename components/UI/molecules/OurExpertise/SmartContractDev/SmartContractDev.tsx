import styled from '@emotion/styled'
import Image from 'next/image'
import React from 'react'
import { Networks } from '../../Networks/Networks'
import { Technologies } from '../../Technologies/Technologies'

const DeFiApps = ['Decentralized and Centralized Wallets', 'Crypto Exchange', 'Auction and Exchangers', 'Tokens and Crypto Wallets', 'NFT Marketplace', 'GameFi']
const SmartContract = ['Farming', 'Staking', 'NFT Mint', 'NFT Generation', 'IDO/ICO', 'Token']
const networks = ['bitcoin.svg', 'etherium1.svg', 'cosmos.svg', 'fantom.svg', 'avalanche.svg', 'polkadot.svg', 'atom.svg', 'tron.svg', 'polygon.svg', 'arbitrum.svg', 'solana.svg', 'binanceSC.svg', 'cardano.svg']
const technologies = ['bitcoin.svg', 'etherium1.svg', 'cosmos.svg', 'fantom.svg', 'avalanche.svg', 'polkadot.svg', 'atom.svg', 'tron.svg', 'polygon.svg', 'arbitrum.svg', 'solana.svg', 'binanceSC.svg', 'cardano.svg']


export const SmartContractDev = () => {
  return (
    <StyledWrapper>

      <StyledGridItemLeft>
        <div>
          <StyledTitle>DeFi App</StyledTitle>
          {DeFiApps.map((app, idx) => (
            <StyledLeftCard key={idx}>
              <StyledLeftTopIcon>
                <Image src='/icons/top-left-card.svg' width='31px' height='15px' />
              </StyledLeftTopIcon>
              {app}
            </StyledLeftCard>
          ))}
        </div>
        <div>
          <StyledTitle>Smart Contracts</StyledTitle>
          {SmartContract.map((contract, idx) => (
            <StyledLeftCard key={idx}>
              <StyledLeftTopIcon>
                <Image src='/icons/top-left-card.svg' width='31px' height='15px' />
              </StyledLeftTopIcon>
              {contract}
            </StyledLeftCard>
          ))}
        </div>
      </StyledGridItemLeft>

      <div>
        <Networks />
        <Technologies />
      </div>


    </StyledWrapper >
  )
}

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 128px;
  margin-top: 60px;
`

const StyledGridItemLeft = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 20px;
`
const StyledTitle = styled.p`
font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 137%;
  color: #FFFFFF;
`

const StyledLeftCard = styled.div`
  width: 305px;
  height: 119px;
  background: #171717;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 127%;
  color: #FFFFFF;
  padding: 35px 45px;
  margin-bottom: 20px;
  position: relative;
`

const StyledLeftTopIcon = styled.span`
  color: #736AE4;
  position: absolute;
  top: 18px;
  left: 18px;
`