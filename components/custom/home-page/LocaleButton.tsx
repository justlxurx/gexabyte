import { Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface LocaleButtonProps {
  text: string;
  locale: string;
}

const LocaleButton: React.FC<LocaleButtonProps> = ({ text, locale }) => {
  const { locale: currentLocale, pathname } = useRouter();

  return (
    <Link href={pathname} locale={locale}>
      <Typography
        sx={{
          fontFamily: "Arial",
          fontSize: { sx: "14px", md: "12px" },
          fontWeight: 700,
          cursor: "pointer",
          color:
            currentLocale === locale
              ? { xs: "#F7931A", md: "#736AE4" }
              : "#16151E",
        }}
      >
        {text}
      </Typography>
    </Link>
  );
};

export default LocaleButton;
