import React from "react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import StackSlider from "./StackSlider";
import {useTranslation} from "react-i18next";


const TechStack = () => {
  const isMobileScreen = useMediaQuery('(max-width:768px)');

  const {t, i18n} = useTranslation();

  return (
    <div className={"stack-bar"} id={"stack-bar"}>
      <Grid alignItems={'center'} columns={{ xs: 2, md: 12 }} justifyContent={'space-between'} container sx={{ p: 0, m: 0 }}>
        <Grid item xs={1} md={3} order={1}>
          <Typography sx={{
            fontSize: '32px',
            fontWeight: 700,
            fontFamily: i18n.language === 'en' ? 'Readex Pro' : 'Geometria, sans-serif',
            whiteSpace: 'nowrap'
          }}>
            {t('home.ourTechstack')}
          </Typography>
        </Grid>
        <Grid item xs={2} md={8} order={isMobileScreen ? 2 : 1}>
          <StackSlider />
        </Grid>
      </Grid>
    </div>
  );
};

export default TechStack;

