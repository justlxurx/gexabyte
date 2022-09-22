import styled from '@emotion/styled'
import Image from 'next/image'
import React from 'react'

const services = [
  'Project and technology market analytics',
  'Project and technology market analytics Description and development of business processes (BPMN, UML)',
  'Wireframe development',
  'Development of product requirements',
  'Development of technical architecture'
]

export const TechnicalTaskDev = () => {
  const reftp = document.getElementById("contact-us")

  const handleScroll = () => {
    reftp?.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <StyledWrapper>
      <div className='left'>
        <p className='title'>Services include:</p>
        {services.map((item, idx) => (
          <div className='list_item' key={idx}>
            <div className='bullet' />
            <p className='text'>{item}</p>
          </div>
        ))}
        <StyledButton onClick={handleScroll}>Resquest a service</StyledButton>
      </div>
      <div className='right'>
        <img src='/icons/quotes.svg' />
        <p className='text'>
          As a result, the client receives a
          <span className='orange'> fully developed </span>
          document, with the help of which the product will be delivered
          <span className='orange'> faster and with better quality. </span>
        </p>
        <img src='/logo.svg' className='logo' />
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.55fr 0.45fr;
  width: 1285px;
  height: 724px;
  background: #1F1F1F;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    background: transparent;
  }

  .left {
    padding: 54px;
    display: flex;
    flex-direction: column;

    .title {
      font-family: 'Readex Pro';
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 35px;
      text-transform: uppercase;
      color: #FFFFFF;
    }

    .text {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
      color: #FFFFFF;
      max-width: 440px;
    }

    .list_item {
        display: grid;
        grid-template-columns: 0.1fr 0.9fr;
        align-items: center;
        gap: 16px;
    }
  }

  .bullet {
    width: 15px;
    height: 15px;
    background: #736AE4;
  }

  .right {
    width: 100%;
    background: #292929;
    padding: 54px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .text {
      font-family: 'Readex Pro';
      font-style: normal;
      font-weight: 700;
      font-size: 31px;
      line-height: 134%;
      text-align: center;
      color: #FFFFFF;
      margin-top: 50px;

      .orange {
        color: #F0B270;
      }
    }
    
    .logo {
      margin-top: auto;
    }
  }
`

const StyledButton = styled.button`
  width: 340px;
  height: 80px;

  background: #736AE4;
  border: none;
  border-radius: 4px;
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 110%;
  letter-spacing: -0.025em;
  text-transform: uppercase;
  color: #FFFFFF;
  margin-top: auto;
  cursor: pointer;
`