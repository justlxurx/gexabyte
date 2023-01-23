import React from "react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import StackSlider from "./StackSlider";


const TechStack = () => {
  const isMobileScreen = useMediaQuery('(max-width:768px)');

  return (
    <div className={"stack-bar"} id={"stack-bar"}>
      <Grid alignItems={'center'} columns={{ xs: 2, md: 12 }} justifyContent={'space-between'} container sx={{ p: 0, m: 0 }}>
        <Grid item xs={1} md={3} order={1}>
          <Typography sx={{
            fontSize: '32px',
            fontWeight: 700,
            fontFamily: 'Readex Pro',
            whiteSpace: 'nowrap'
          }}>
            Our Techstack
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

