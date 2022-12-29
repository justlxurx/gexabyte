import styled from '@emotion/styled'
import { Box, Tab, Tabs } from '@mui/material'
import { AllProjectsBlockchain } from 'components/UI/molecules/AllProjects/AllProjectsBlockchain'
import { AllProjectsConsulting } from 'components/UI/molecules/AllProjects/AllProjectsConsulting'
import { AllProjectsWebDev } from 'components/UI/molecules/AllProjects/AllProjectsWebDev'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Image from 'next/image'
import {arrowLeftV2} from "@public/icons";

const Projects = () => {
  const [value, setValue] = React.useState(0)
  const { pathname, query } = useRouter()

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  };

  React.useEffect(() => {
    if (query.tab === 'blockchain') {
      setValue(0)
    } else if (query.tab === 'consulting') {
      setValue(1)
    } else if (query.tab === 'webdev') {
      setValue(2)
    }
  }, [query, pathname])

  return (
    <div>
      <StyledWrapper>
        <StyledTitleArea>
          <StyledTitle>Projects</StyledTitle>
          <Box sx={{ borderBottom: 1, borderColor: '#464646' }}>
            <Tabs value={value} onChange={handleChange} textColor={'secondary'} indicatorColor={"secondary"}>
              <Tab label={"Blockchain"} sx={{ fontWeight: 700 }} />
              <Tab label={"Consulting"} sx={{ fontWeight: 700 }} />
              <Tab label={"Web & Mobile"} sx={{ fontWeight: 700 }} />
            </Tabs>
          </Box>
        </StyledTitleArea>

        <TabPanel value={value} index={0}>
          <AllProjectsBlockchain />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <AllProjectsConsulting />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <AllProjectsWebDev />
        </TabPanel>
      </StyledWrapper>

      <Box sx={{ px: { xs: '16px', md: '76px' }, my: { xs: '74px', md: '94px' } }}>
        <Link href='/'>
          <StyledButton>
            <Image src={arrowLeftV2} alt={arrowLeftV2}/>
            <span className={'text'}>back to main page</span>
          </StyledButton>
        </Link>
      </Box>
    </div>

  )
}

export default Projects

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

const StyledWrapper = styled.div`
  padding: 76px;

  @media (max-width: 600px) {
    padding: 16px;
  }
`
const StyledTitle = styled.p`
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 110%;
  letter-spacing: 0.025em;
  color: #FFFFFF;
  max-width: 40%;

  @media (max-width: 600px) {
    font-size: 32px;
  }
`

const StyledTitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
  }
`

const StyledButton = styled.button`
  width: 442px;
  height: 103px;
  background: #262626;
  border-radius: 4px;
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  border: none;
  margin-top: 18px;
  margin-bottom: 36px;
  cursor: pointer;

  .text {
    font-family: 'Readex Pro';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 110%;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    color: #FFFFFF;

    @media (max-width: 600px) {
      font-size: 16px;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 71px;
  }
`
