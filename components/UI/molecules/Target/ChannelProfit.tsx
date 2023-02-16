import { Box, Typography } from "@mui/material";
import React from "react";
import code from 'public/icons/code.svg'
import startups from 'public/icons/startups.svg'
import pm from 'public/icons/pm.svg'
import student from 'public/icons/student.svg'
import investors from 'public/icons/investors.svg'
import others from 'public/icons/other people.svg'
import Image from "next/image";
import { TelegramLink } from "components/UI/atoms/TelegramLink";
import styled from '@emotion/styled'

const profits = [
    {
        id: '1',
        icon: code,
        title: 'Блокчейн-разработчикам и разработчикам др.специализаций',
        desc: 'Поделиться опытом и получить ответы на вопросы по темам разработки и блокчейна',
    },
    {
        id: '2',
        icon: startups,
        title: 'Представителям стартапов',
        desc: 'Найти новые кадры, рассказать о своих проектах'
    },
    {
        id: '3',
        icon: pm,
        title: 'Проджект-менеджерам в IT',
        desc: 'Узнать о применении блокчейн-технологии и ведению подобных проектов'
    },
    {
        id: '4',
        icon: student,
        title: 'IT студентам',
        desc: 'Податься на стажировки, прокачать навыки и знания, найти менторов'
    },
    {
        id: '5',
        icon: investors,
        title: 'Криптоинвесторам и криптоэнтузистам',
        desc: 'Быть в курсе новостей Web3'
    },
    {
        id: '6',
        icon: others,
        title: 'Всем остальным',
        desc: 'Узнать больше о возможностях Web3'
    }
]


const Gradient = styled.span`
  background-clip: text;
  color: transparent;
  background-image: linear-gradient(90.65deg, #FFBA73 3.52%, #6100FF 103.85%);
`
export const ChannelProfit = () => {
    return <Box
        sx={{
            padding: {
                lg: '256px 158px 0',
                xs: '88px 25px'
            }
        }}
    >
        <Box
            color={'transparent'}
        >
            <Typography
                fontFamily={'NeueMachina-Ultrabold'}
                fontStyle={'normal'}
                fontWeight={800}
                lineHeight={'120%'}
                textAlign={'center'}
                sx={{
                    fontSize: {
                        md: '48px',
                        xs: '26px'
                    }
                }}
            >
                <Gradient>
                    Канал будет полезен
                </Gradient>
            </Typography>
        </Box>
        <Box
            display={'flex'}
            flexWrap={'wrap'}
            gap={'110px'}
            justifyContent={'center'}
            padding={'96px 0 72px'}
            sx={{
                gap: {
                    lg: '110px',
                    sm: '70px',
                    xs: '40px'
                }
            }}
        >
            {
                profits.map((profit) => (
                    <Box key={profit.id}
                        textAlign={'center'}
                        sx={{
                            width: {
                                lg: '343px',
                                xs: '100%'
                            }
                        }}
                    >
                        <Box
                            bgcolor={'rgba(94, 94, 94, 0.4)'}
                            borderRadius={'50%'}
                            margin={'auto'}
                            width={'72px'}
                            height={'72px'}
                            display={'flex'}
                            justifyContent={'center'}
                        >
                            <Image
                                src={profit.icon}
                                width={40}
                                height={40}
                                alt=""
                            />
                        </Box>
                        <Typography
                            paddingTop={'24px'}
                            fontFamily={'Raleway'}
                            fontStyle={'normal'}
                            fontWeight={700}
                            fontSize={'18px'}
                            lineHeight={'120%'}
                            color={'#e4e4e4'}
                            margin={'0 auto'}
                            sx={{
                                fontSize: {
                                    md: '18px',
                                    xs: '16px'
                                },
                                maxWidth: {
                                    md: profit.id === '5' ? '185px' : '326px',
                                    xs: profit.id === '2' || profit.id === '6' ? '263px' : profit.id === '3' ? '315px' : '343px',
                                }
                            }}
                        >
                            {profit.title}
                        </Typography>
                        <Typography
                            paddingTop={'8px'}
                            fontFamily={'Raleway'}
                            fontStyle={'normal'}
                            fontWeight={500}
                            lineHeight={'120%'}
                            color={'#b1b1b1'}
                            margin={'0 auto'}
                            sx={{
                                fontSize: {
                                    md: '16px',
                                    xs: '14px'
                                },
                                maxWidth: {
                                    xs: profit.id === '2' || profit.id === '6' ? '263px' : profit.id === '3' ? '315px' : '343px',
                                }
                            }}
                        >
                            {profit.desc}
                        </Typography>
                    </Box>
                ))
            }
        </Box>
        <Box
            maxWidth={'462px'}
            height={'56px'}
            margin={'auto'}
        >
            <TelegramLink center mw={'349px'}/>
        </Box>
    </Box>
}