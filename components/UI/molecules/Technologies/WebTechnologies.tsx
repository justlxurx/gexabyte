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
      <StyledWebBackground>
        <StyledGridItemTechnologies>
          {technologies.map((tech, idx) => (
            <StyledTechnologiesCard key={idx}>
              <TechIcon>
                <Image src={`/icons/${tech}`} width={"100%"} height={"100%"} />
              </TechIcon>
              <StyledTechnologyName>{technologiesName[idx]}</StyledTechnologyName>
            </StyledTechnologiesCard>
          ))}
        </StyledGridItemTechnologies>
      </StyledWebBackground>
    </div>
  )
}
const StyledWebBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 1;
  background: #171717;
  border-radius: 5px;
  padding: 2vw;
`

const StyledGridItemTechnologies = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  gap: 6vh 0vh;
`

const StyledTechnologiesCard = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TechIcon = styled.div`
  width: 3.5vw;
  height: 3.5vw;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`

const StyledTechnologyName = styled.div`
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 600;
    font-size: 1.2vw;
    line-height: 140%;
    color: #2A303D;
    mix-blend-mode: luminosity;

    @media (max-width: 768px) {
      font-size: 14px;
    }
`

const StyledTitle = styled.p`
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 500;
  font-size: 1.7vw;
  line-height: 100%;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`
const StyledSubTitle = styled.p`
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 300;
  font-size: 0.8vw;
  line-height: 100%;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`