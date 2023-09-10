import { Button } from '@mui/material';
import React from 'react';
import { theme } from '../../utils/theme';
import {useTranslation} from "react-i18next";

interface CustomButtonProps {
  title: string,
  bgcolor: string,
  handleClick?: () => void,
  rounded?: boolean,
  fullWidth?: boolean
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, handleClick, bgcolor, rounded = false, fullWidth = false }) => {

  const {i18n} = useTranslation()

  return (
    <Button
      onClick={handleClick}
      fullWidth={fullWidth}
      sx={{
        bgcolor,
        color: theme.palette.text.primary,
        borderRadius: rounded ? '4px' : '1px',
        padding: '10px 22px',
        fontSize: '16px',
        textTransform: 'none',
        fontWeight: 700,
        fontFamily: i18n.language === 'en' ? 'Poppins' : 'Nunito, sans-serif',
        '&:hover': {
          bgcolor
        }
      }}
    >
      {title}
    </Button>
  )
}

export default CustomButton
