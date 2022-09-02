import { Typography } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useTranslation } from 'react-i18next'

interface LocaleButtonProps {
  text: string,
  locale: string
}

const LocaleButton: React.FC<LocaleButtonProps> = ({ text, locale }) => {
  const { i18n } = useTranslation();
  const { locale: currentLocale } = useRouter();

  return (
    <Link href='/' locale={locale}>
      <Typography sx={{
        fontSize: '16px',
        fontWeight: currentLocale === locale ? 700 : 500,
        cursor: 'pointer',
        color: currentLocale === locale ? '#FFFFFF' : '#989898',
        borderBottom: currentLocale === locale ? '3px solid #736AE4' : '3px solid transparent'
      }}>{text}</Typography>
    </Link>
  )
}

export default LocaleButton