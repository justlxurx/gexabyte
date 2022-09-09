import styled from '@emotion/styled'
import Image from 'next/image'
import { FC } from 'react'

const technologies = ['solidity.svg', 'ts.svg', 'rust.svg', 'jvscrpt.svg', 'python.svg', 'kotlin1.svg', 'swift1.svg', 'php.svg']

export const Technologies: FC = () => {
  return (
    <div>
      <StyledTitle>Technologies:</StyledTitle>
      <StyledGridItemTechnologies>
        {technologies.map((tech, idx) => (
          <StyledTechnologiesCard>
            <Image src={`/icons/${tech}`} width='64px' height='64px' key={idx} />
          </StyledTechnologiesCard>
        ))}
      </StyledGridItemTechnologies>
    </div>
  )
}

const StyledGridItemTechnologies = styled.div`
  display: grid;
  grid-template-columns: 89px 89px 89px 89px;
  gap: 56px;
`

const StyledTechnologiesCard = styled.div`
  width: 88px;
  height: 89px;
  background: #1F1F1F;
  border-radius: 3px;
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