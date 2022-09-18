import styled from '@emotion/styled'
import Image from 'next/image'
import { FC } from 'react'

const technologies = ['jvscrpt.svg', 'vue.svg', 'react.svg', 'kotlin1.svg', 'angular.svg', 'java.svg', 'php.svg', 'git.svg', 'python.svg', 'swift1.svg', 'gitlab.svg', 'github.svg']
const technologiesName = ['JavaScpirt', 'Vue.js', 'React.js', 'Kotlin', 'Angular', 'Java', 'PHP', 'Git', 'Python', 'swift', 'GitLab', 'GitHub']

export const WebTechnologies: FC = () => {
  return (
    <div>
      <StyledTitle>Technology Stack</StyledTitle>
      <StyledSubTitle>programming languages & frameworks // source <br/> code repository & version control system</StyledSubTitle>
      <StyledGridItemTechnologies>
        {technologies.map((tech, idx) => (
          <StyledTechnologiesCard key={idx}>
            <Image src={`/icons/${tech}`} width='64px' height='64px' />
            <StyledTechnologyName>{technologiesName[idx]}</StyledTechnologyName>
          </StyledTechnologiesCard>
        ))}
      </StyledGridItemTechnologies>
    </div>
  )
}

const StyledGridItemTechnologies = styled.div`
  padding: 30px 50px 10px 50px;
  width: 522px;
  height: 441px;
  display: grid;
  grid-template-columns: 60px 60px 60px 60px;
  gap: 56px;
  row-gap: 20px;

  background: #171717;
  border-radius: 5px;

  @media (max-width: 600px) {
    padding: 30px 30px 10px 30px;
    width: 100%;
    height: 461.55px;
    gap: 56px;
    grid-template-columns: 50px 50px 50px 50px;
  }
`

const StyledTechnologiesCard = styled.div`
  width: 88px;
  height: 89px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledTechnologyName = styled.div`
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 140%;
    color: #2A303D;
    mix-blend-mode: luminosity;
`

const StyledTitle = styled.p`
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 400;
  line-height: 40%;
  font-size: 30px;
  color: #FFFFFF;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`
const StyledSubTitle = styled.p`
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 100%;
  margin-bottom: 40px;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`