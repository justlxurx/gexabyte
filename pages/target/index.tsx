import React from "react"
import { Box, Typography } from "@mui/material"
import bg_grad from "public/images/bg-gradient.png"
import tc from "public/images/tc_logo.png"
import tg from 'public/icons/tg.svg'
import hello from 'public/icons/hello.svg'
import Image from "next/image"
import { AboutUs } from "components/UI/molecules/Target/AboutUs"
import { ChannelProfit } from "components/UI/molecules/Target/ChannelProfit"
import { TelegramLink } from "components/UI/atoms/TelegramLink"


const Target = () => {


    return <Box padding={"56px 0 86px"}
            style={{
                backgroundImage: `url(${bg_grad.src})`,
                backgroundRepeat: 'repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}
        >
        <Box textAlign={"center"}>
            <Image src={tc.src} width="157" height="48" alt="Tech Culture"/>
        </Box>
        <Box
            margin={'89px auto 0'}
            textAlign={"center"}
            sx={{
                width: {
                    md: '100%',
                    lg: '60%'
                },
                padding: {
                    xs: '56px 16px',
                    lg: '0'
                },
                margin: {
                    lg: '89px auto 0',
                    xs: 0,
                }
            }}
        >
            <Typography
                fontFamily='Raleway'
                fontWeight={700}
                lineHeight={"120%"}
                sx={{
                    fontSize: {
                        md: '60px',
                        xs: '40px'
                    }
                }}
            >
                Blockchain community 
                by 
                <Typography
                    component="span" 
                    color={"#F0B270"}
                    fontFamily='Raleway'
                    fontWeight={700}
                    lineHeight={"120%"}
                    sx={{
                        fontSize: {
                            md: '60px',
                            xs: '40px'
                        }
                    }}    
                > 
                    Tech Culture
                </Typography>
            </Typography>
            <Typography
                fontFamily='Raleway'
                fontWeight={500}
                lineHeight={"120%"}
                marginTop={"32px"}
                sx={{
                    fontSize: {
                        md: '22px',
                        xs: '16px'
                    }
                }}
            >
                Одно из крупнейших блокчейн сообществ Центральной Азии
            </Typography>
            <Box
                paddingTop={"72px"}
                display={'flex'}
                gap={'32px'}
                justifyContent={'center'}
                sx={{
                    flexDirection: {
                        md: 'row',
                        xs: 'column'
                    },
                    alignItems: {
                        md: 'flex-start',
                        xs: 'center'
                    }
                }}
            >
                <TelegramLink/>
                <Box
                    bgcolor={"#363636"}
                    border={"1px solid #4A4A4A"}
                    borderRadius={"32px"}
                    padding={"10px 40px"}
                    display={"flex"}
                    gap={"8px"}
                    sx={{
                        fontSize: {
                            sm: '22px',
                            xs: '16px'
                        }
                    }}
                >
                    <Typography
                        color={"#fff"}
                        fontSize={"22px"}
                        fontFamily='Raleway'
                    >
                        Хочу стать спикером
                    </Typography>
                    <Image
                        src={hello}
                        width={30}
                        height={36}
                        alt="Hand Hello"
                    />
                </Box>
            </Box>
            <Box
                marginTop={'72px'}
                bgcolor={'#181616'}
                border={'1px solid #2F2D2D'}
                boxShadow={'0px 4px 25px rgba(255, 255, 255, 0.08)'}
                borderRadius={'12px'}
            >
                <Typography
                    fontFamily='Raleway'
                    fontStyle='normal'
                    fontWeight={500}
                    lineHeight={'140%'}
                    padding={'40px 32px'}
                    sx={{
                        fontSize: {
                            md: '24px',
                            xs: '16px'
                        }
                    }}
                >
                    В Телеграме мы рассказываем не только о новостях нашей компании, трендах Web3, криптовалютного рынка и блокчейн-технологий, но и проводим различные мероприятия.   
                </Typography>
            </Box>
        </Box>
        <AboutUs/>
        <ChannelProfit/>
    </Box>
}


export default Target