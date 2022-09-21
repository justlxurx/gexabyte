import styled from '@emotion/styled'
import { Box, Button, Tab, Tabs, Typography } from '@mui/material'
import FirstBlockLayout from 'components/layouts/FirstBlockLayout'
import { AllProjectsBlockchain } from 'components/UI/molecules/AllProjects/AllProjectsBlockchain'
import { AllProjectsConsulting } from 'components/UI/molecules/AllProjects/AllProjectsConsulting'
import { AllProjectsWebDev } from 'components/UI/molecules/AllProjects/AllProjectsWebDev'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Projects = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <StyledWrapper>
        <StyledTitleArea>
          <StyledTitle>Projects</StyledTitle>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} textColor='secondary' indicatorColor="secondary">
              <Tab label="Blockchain" />
              <Tab label="Consulting" />
              <Tab label="Web & Mobile" />
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

      <Box sx={{ px: { xs: '16px', md: '76px' } }}>
        <Link href='/'>
          <StyledButton>
            <img src='/icons/left.svg' />
            <span className='text'>back to main page</span>
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