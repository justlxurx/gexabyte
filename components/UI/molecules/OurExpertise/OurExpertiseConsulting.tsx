import styled from '@emotion/styled'
import { Box, InputBase, Tab, Tabs } from '@mui/material'
import { FC, useState } from 'react'
import { TechnicalTaskDev } from './TechnicalTaskDev/TechnicalTaskDev'
import { TokenomicsDev } from './TokenomicsDev/TokenomicsDev'
import { WhitepaperDev } from './WhitepaperDev/WhitepaperDev'

const tabs = ['Tokenomics development', 'Whitepaper development', 'Technical task development '];

interface IProps {
}

export const OurExpertiseConsulting: FC<IProps> = () => {
  const [value, setValue] = useState(0);
  const [serviceIndex, setServiceIndex] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <StyledWrapper>
      <StyledFlexArea>
        <StyledTitle>Our expertise\\</StyledTitle>

        <StyledTabArea>
          <Box sx={{ borderBottom: 1, borderColor: '#464646' }}>
            <Tabs value={value} onChange={handleChange} textColor='secondary' indicatorColor="secondary" sx={{ fontWeight: 700 }}>
              {value === 0
                ? <Tab label="Tokenomics development" sx={{ fontWeight: 700 }} />
                : <Tab label="Tokenomics development" sx={{ fontWeight: 400 }} />
              }
              {value === 1
                ? <Tab label="Whitepaper development" sx={{ fontWeight: 700 }} />
                : <Tab label="Whitepaper development" sx={{ fontWeight: 400 }} />
              }
              {value === 2
                ? <Tab label="Technical task development" sx={{ fontWeight: 700 }} />
                : <Tab label="Technical task development" sx={{ fontWeight: 400 }} />
              }
            </Tabs>
          </Box>
        </StyledTabArea>
      </StyledFlexArea>

      <TabPanel value={value} index={0}>
        <TokenomicsDev />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <WhitepaperDev />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TechnicalTaskDev />
      </TabPanel>
    </StyledWrapper>
  )
}

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

const StyledFlexArea = styled.div`
  display: flex;

  @media (max-width: 600px) {
    display: block;
  }
`

const StyledTabArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 46px;
  margin-left: auto;

  @media (max-width: 600px) {
    display: none;
  }
`

const StyledTitle = styled.p`
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 110%;
  letter-spacing: 0.025em;
  text-transform: uppercase;
  color: #FFFFFF;

`

const StyledMobileSelectTab = styled.div`
  width: 100%;
  @media (min-width: 601px) {
    display: none;
  }
`
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    border: 'none',
    position: 'relative',
    backgroundColor: 'transparent',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    '&:focus': {
      borderRadius: 4,
      borderColor: 'transparent',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));