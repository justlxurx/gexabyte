import { Stack } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const SocialMedia = () => {
  return (
    <Stack direction='row' spacing={1}>
      <a href='https://instagram.com/tech.culture.it?igshid=YmMyMTA2M2Y='>
        <Image src='/icons/social-media/Instagram.svg' width='24px' height='24px' />
      </a>
      <a href='https://kz.linkedin.com/in/techculture'>
        <Image src='/icons/social-media/LinkdIn.svg' width='24px' height='24px' />
      </a>
      <a href='https://t.me/tech_culture_dev'>
        <Image src='/icons/social-media/Telegram.svg' width='24px' height='24px' />
      </a>
      <a href='https://www.facebook.com/tech.culture.it'>
        <Image src='/icons/social-media/Facebook.svg' width='24px' height='24px' />
      </a>
    </Stack>
  )
}

export default SocialMedia