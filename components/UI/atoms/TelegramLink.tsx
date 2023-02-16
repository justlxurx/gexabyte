import React from 'react'
import { Box, Typography } from "@mui/material"
import Image from "next/image"
import tg from 'public/icons/tg.svg'

interface IProps {
    center?: boolean;
    mw?: string;
}

export const TelegramLink = ({center, mw}: IProps) => (
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
            },
            maxWidth: {
                md: 'unset',
                xs: mw ? mw : 'unset',
            },
            margin: {
                md: 'unset',
                xs: center ? 'auto' : 'unset'
            },
            justifyContent: {
                md: 'unset',
                xs: center ? 'center' : 'unset'
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
                    md: '22px',
                    xs: '16px'
                }
            }}
        >
            Перейти в Blockchain Community
        </Typography>
    </Box>
)