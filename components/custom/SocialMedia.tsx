import { Stack } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import {socialURL} from "./socialURL";
import {facebookIcon, instagramIcon, linkedInIcon, telegramIcon, BeIcon, GitIcon} from "@public/icons/social-media";

const SocialMedia = () => {
  return (
    <Stack direction={'row'} spacing={1}>
      <a href={socialURL.instagram}>
        <Image src={instagramIcon} width={'24px'} height={'24px'} alt={'instagramIcon'}/>
      </a>
      <a href={socialURL.linkedIn}>
        <Image src={linkedInIcon} width={'24px'} height={'24px'} alt={'linkedInIcon'}/>
      </a>
      <a href={socialURL.telegram}>
        <Image src={telegramIcon} width={'24px'} height={'24px'} alt={'telegramIcon'}/>
      </a>
    </Stack>
  )
}

export default SocialMedia
