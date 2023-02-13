import React, {lazy} from 'react'
import { Box, Typography } from "@mui/material"
import Image from 'next/image'
import arrow from 'public/images/arrow.png'
import members from 'public/icons/members.svg'
import award from 'public/icons/award.svg'
import webinar from 'public/icons/webinar.svg'

const aboutUs = [
    {
        id: '1',
        img: members,
        text: 'Более 900 участников'
    },
    {
        id: '2',
        img: award,
        text: 'Топ-10 Телеграм-групп в разделе «Технологии» '
    },
    {
        id: '3',
        img: webinar,
        text: 'Еженедельные вебинары и AMA сессии'
    }
]


export const AboutUs = () => {

    return <Box
            display={'flex'}
            gap={"75px"}
            justifyContent={'center'}
            position={'relative'}
            sx={{
                flexDirection: {
                    lg: 'row',
                    xs: 'column'
                },
                margin: {
                    lg: '224px auto 0',
                    xs: 0
                },
                padding: {
                    lg: 0,
                    xs: '16px'
                },
                width: {
                    lg: '70%',
                    xs: '100%',
                }
            }}
        >
        <Box>
            <Typography
                fontFamily={'Raleway'}
                fontWeight={700}
                sx={{
                    textAlign: {
                        xs: 'center',
                        lg: 'left'
                    },
                    fontSize: {
                        md: '50px',
                        xs: '28px'
                    }
                }}
            >
                О нас
            </Typography>
            <Typography
                fontFamily={'Raleway'}
                fontWeight={500}
                sx={{
                    maxWidth: {
                        lg: '416px',
                        xs: '100%' 
                    },
                    padding: {
                        lg: '0',
                        xs: '0 14px'
                    },
                    fontSize: {
                        md: '20px',
                        xs: '16px'
                    }
                }}
            >
                Blockchain Community — это площадка для нетворкинга и обмена опытом профессионалам Web3 и тем, кому интересны новые технологии.
            </Typography>
            <Box
                position={'absolute'}
                left={"36%"}
                top={'70%'}
            >
                <img
                    src={arrow.src}
                    // width={84}
                    // height={39}
                    alt="Arrow"
                />
            </Box>
        </Box>
        <Box
            display={'flex'}
            flexDirection={'column'}
            gap={'20px'}
        >
            {
                aboutUs.map((item) => (
                    <Box 
                        key={item.id}
                        border={'1px solid #343434'}
                        borderRadius={'12px'}
                        bgcolor={'#232323'}
                        display={'flex'}
                        gap={'24px'}
                        padding={'16px 24px'}
                        minWidth={'600px'}
                        sx={{
                            minWidth: {
                                lg: '600px',
                                xs: '100%'
                            }
                        }}
                    >
                        <Image
                            src={item.img}
                            width={28}
                            height={28}
                            alt=""
                        />
                        <Typography
                            fontFamily='Raleway'
                            fontStyle='normal'
                            fontWeight={500}
                            sx={{
                                fontSize: {
                                    md: '18px',
                                    xs: '14px'
                                }
                            }}           
                        >
                            {item.text}
                        </Typography>
                    </Box>
                ))
            }
        </Box>
    </Box>
}