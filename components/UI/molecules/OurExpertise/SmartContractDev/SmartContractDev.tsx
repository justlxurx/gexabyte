import styled from '@emotion/styled'
import Image from 'next/image'
import React from 'react'
import { Networks } from '../../Networks/Networks'
import { Technologies } from '../../Technologies/Technologies'
import {closeTagIcon, closeTagOrangeIcon} from "@public/icons";

const DeFiApps = [
    'Decentralized and Centralized Wallets',
    'Crypto Exchange', 'Auction and Exchangers',
    'Tokens and Crypto Wallets',
    'NFT Marketplace',
    'GameFi'
]
const Products = [
    'NFT marketplace',
    'Mobile App with integration web3&smart contract',
    'Crypto Exchange',
    'Musical platform',
    'DeFI&CeFi Wallet',
    'Metaverse'
]
const SmartContract = [
    'Tokens and Crypto Wallets',
    'Staking', 'NFT Mint',
    'NFT Generation', 'IDO/ICO',
    'Farming'
]
const networks = [
    'bitcoin.svg',
    'etherium1.svg',
    'cosmos.svg',
    'fantom.svg',
    'avalanche.svg',
    'polkadot.svg',
    'atom.svg',
    'tron.svg',
    'polygon.svg',
    'arbitrum.svg',
    'solana.svg',
    'binanceSC.svg',
    'cardano.svg'
]
const technologies = [
    'bitcoin.svg',
    'etherium1.svg',
    'cosmos.svg',
    'fantom.svg',
    'avalanche.svg',
    'polkadot.svg',
    'atom.svg',
    'tron.svg',
    'polygon.svg',
    'arbitrum.svg',
    'solana.svg',
    'binanceSC.svg',
    'cardano.svg'
]


export const SmartContractDev = () => {
  return (
    <StyledWrapper>
      <StyledGridItemLeft>
        <div>
          <StyledTitle className={'orange'}>Products</StyledTitle>
          {Products.map((app, idx) => (
            <StyledLeftCard key={idx}>
              <StyledLeftTopIcon>
                <Image src={closeTagOrangeIcon} width={'31px'} height={'15px'} alt={'closeTagOrangeIcon'} />
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
                <Image src={closeTagIcon} width={'31px'} height={'15px'} alt={'closeTagIcon'} />
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
  grid-template-columns: 0.5fr 0.5fr;
  gap: 128px;
  margin-top: 60px;

  .orange {
    color: #F0B270;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`

const StyledGridItemLeft = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  gap: 20px;
`
const StyledTitle = styled.p`
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 137%;
  color: #FFFFFF;

  @media (max-width: 600px) {
    font-size: 18px;
  }
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
  padding: 35px 35px;
  margin-bottom: 20px;
  position: relative;

  @media (max-width: 600px) {
    width: 100%;
    height: 94px;
    font-size: 14px;
    padding: 15px 30px;
  }
`

const StyledLeftTopIcon = styled.span`
  color: #736AE4;
  position: absolute;
  top: 18px;
  left: 18px;
`
