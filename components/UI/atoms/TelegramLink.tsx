import React from 'react'
import { Box, Typography } from "@mui/material"
import Image from "next/image"
import tg from 'public/icons/tg.svg'


export const TelegramLink = () => (
    <Box
        bgcolor={"#2699D5"}
        border={"1px solid #000000"}
        borderRadius={"32px"}
        display={"flex"}
        gap={"16px"}
        sx={{
            padding: {
                sm: '12px 32px',
                xs: '16px 20px'
            }
        }}
    >
        <Image
            src={tg}
            width={25}
            height={20}
            alt="Telegram"
        />
        <Typography
            color={"#fff"}
            fontFamily='Raleway'
            sx={{
                fontSize: {
                    sm: '22px',
                    xs: '16px'
                }
            }}
        >
            Перейти в Blockchain Community
        </Typography>
    </Box>
)