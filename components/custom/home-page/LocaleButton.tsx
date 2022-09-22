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
  const { locale: currentLocale, pathname } = useRouter();

  return (
    <Link href={pathname} locale={locale}>
      <Typography sx={{
        fontSize: '16px',
        fontWeight: currentLocale === locale ? 700 : 500,
        cursor: 'pointer',
        color: currentLocale === locale ? '#F0B270' : '#989898',
        borderBottom: currentLocale === locale ? '3px solid #F0B270' : '3px solid transparent'
      }}>{text}</Typography>
    </Link>
  )
}

export default LocaleButton