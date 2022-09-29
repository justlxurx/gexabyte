import styled from '@emotion/styled'
import { Box, Tab, Tabs } from '@mui/material'
import classNames from 'classnames'
import Image from 'next/image'
import { FC, useState } from 'react'
import styles from '../../../../styles/components/ConsultingDropdown.module.scss'
import { TechnicalTaskDev } from './TechnicalTaskDev/TechnicalTaskDev'
import { TokenomicsDev } from './TokenomicsDev/TokenomicsDev'
import { WhitepaperDev } from './WhitepaperDev/WhitepaperDev'


const tabs = ['Tokenomics development', 'Whitepaper development', 'Technical task development '];

interface IProps {
}

export const OurExpertiseConsulting: FC<IProps> = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [serviceIndex, setServiceIndex] = useState(0)

  const handleChangeTab = (tabIndex: number) => {
    setServiceIndex(tabIndex)
  }

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
        <StyledTabAreaMobile>
        <div className={styles.dropdown}>
          <StyledLabel>
            <button className={styles.dropbtn}>{tabs[serviceIndex]}</button>
            <Image src={'/icons/arrow down.svg'} alt='arrow' width={30} height={28} style={{ cursor: 'pointer'}} />
          </StyledLabel>
           <div className={styles.dropdowncontent}>
            {tabs.map((tabTitle, idx) => (
              <StyledTab
                onClick={() => handleChangeTab(idx)}
                className={classNames(`${idx === serviceIndex ? 'text text__active' : 'text'}`)}
                key={idx}
              >
                {tabTitle}
              </StyledTab>
            ))}
          </div>
        </div>
        </StyledTabAreaMobile>
      </StyledFlexArea>
      <TabDesktop>
        <TabPanel value={value} index={0}>
          <TokenomicsDev />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <WhitepaperDev />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <TechnicalTaskDev />
        </TabPanel>
      </TabDesktop>
      <TabMobile>
      {serviceIndex === 0 ?
        <TokenomicsDev />
        :
        serviceIndex === 1 ?
          <WhitepaperDev />
          :
          serviceIndex === 2 ?
            <TechnicalTaskDev />
            : null
      }
      </TabMobile>

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

const TabMobile = styled.div`
  display:none;
  @media (max-width: 600px) {
    display: flex;
  }
`

const TabDesktop = styled.div`
  @media (max-width: 600px) {
    display:none;
  }
`

const StyledWrapper = styled.div`
  padding: 76px;
  @media (max-width: 600px) {
    padding: 16px;
  }
`

const StyledFlexArea = styled.div`
  display: flex;
  @media (max-width: 600px){
    flex-direction: column;
  }
`

const StyledLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
const StyledTabAreaMobile = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: flex;
    align-items: center;
  }
`
const StyledTab = styled.span`
  &.text {
    font-family: 'Readex Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    padding-bottom: 15px;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
    &__active {
      color: #F0B270;
    }
  }
`

const StyledTitle = styled.p`
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 46px;
  line-height: 117.5%;
  color: #FFFFFF;
  width: 414px;
`
