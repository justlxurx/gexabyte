import { Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

interface LocaleButtonProps {
  text: string
  active: boolean
}

const LocaleButton: React.FC<LocaleButtonProps> = ({ text, active }) => {

  return (
    <Link href='/'>
      <Typography sx={{
        fontSize: '16px',
        fontWeight: 700,
        cursor: 'pointer',
        borderBottom: active ? '3px solid #736AE4' : '3px solid transparent'
      }}>{text}</Typography>
    </Link>
  )
}

export default LocaleButton