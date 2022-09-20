import styled from '@emotion/styled'
import ContactUs from 'components/custom/home-page/ContactUs'
import ConsultingProjects from 'components/custom/projects/ConsultingProjects'
import { StatsConsulting } from 'components/custom/StatsConsulting'
import { OurExpertiseConsulting } from 'components/UI/molecules/OurExpertise/OurExpertiseConsulting'

const Consulting = () => {
  return (
    <Wrapper>
      <FirstBlock>
        <BlockChainLeftSide>
          <BlockchainTitle>Blockchain Consulting</BlockchainTitle>
          <BlockchainSubtitle>
            Web applications for automating processes and solving business problems using modern technologies.
          </BlockchainSubtitle>

          <StyledContainedButton>contact us</StyledContainedButton>
          <StyledTextButton>
            <OrangeText>&gt;&gt;</OrangeText>
            &nbsp;see all projects
          </StyledTextButton>

        </BlockChainLeftSide>
        
        <GraphicWrapper>
          <img src='/images/graphic 1.svg' className='graph'/>
        </GraphicWrapper>
        
      </FirstBlock>

      <StatsConsulting />

      <OurExpertiseConsulting />
      {/* <DeFiService /> */}
      <ConsultingProjects />
      <ContactUs />

    </Wrapper>

  )
}

export default Consulting;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const FirstBlock = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 10px;
  padding: 76px;
  position: relative;
  overflow: hidden;
  @media (max-width: 600px) {
    padding: 16px;
  }
`

const BlockChainLeftSide = styled.div`

`

const GraphicWrapper = styled.div`
  position: absolute;
  top: 96px;
  right: 80px;

  @media (max-width: 600px) {
    right: -30%;
  }

  .graph {
    @media (max-width: 600px) {
      width: 287px;
      height: 279px;
    }
  }

`

const BlockchainTitle = styled.p`
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 83px;
  line-height: 115%;
  letter-spacing: -0.025em;
  color: #FFFFFF;
  margin-bottom: 31px;

  @media (max-width: 600px) {
    font-size: 28px;
  }
`

const BlockchainSubtitle = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 133.5%;
  color: #FFFFFF;
  margin-bottom: 106px;
  @media (max-width: 600px) {
    font-size: 12px;
    margin-bottom: 31px;
  }
`

const StyledContainedButton = styled.button`
  border: none;
  width: 254px;
  height: 80px;
  left: 76px;
  top: 626px;
  background: #736AE4;
  border-radius: 4px;
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 110%;
  letter-spacing: -0.025em;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
  }
  margin-right: 40px;
  @media (max-width: 600px) {
    width: 152px;
    height: 50px;
    font-size: 14px;
  }
`

const StyledTextButton = styled.button`
  border: none;
  width: 254px;
  height: 80px;
  background: transparent;
  border-radius: 4px;
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 110%;
  letter-spacing: -0.025em;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 600px) {
    font-size: 14px;
    width: auto;
  }

`

const OrangeText = styled.span`
  color: #F0B270;
`
