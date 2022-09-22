import React from "react";
// import useEmblaCarousel from "embla-carousel-react";
import Link from 'next/link'
import Image from "next/image";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import StackSlider from "./StackSlider";



const TechStack = () => {
  const isMobileScreen = useMediaQuery('(max-width:768px)');

  return (
    <div className="stack-bar">
      <Grid alignItems='center' columns={{ xs: 2, md: 12 }} justifyContent='space-between' container sx={{ p: 0, m: 0 }}>
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
        {/* <Grid item xs={1} md={1} order={1}>
          <Link href='/'>
            <Typography sx={{
              fontSize: '14px',
              fontWeight: 700,
              color: '#F0B270',
              whiteSpace: 'nowrap',
              cursor: 'pointer',
              textAlign: 'end',
            }}>
              Show all {'>'}
            </Typography>
          </Link>
        </Grid> */}
      </Grid>
    </div>
  );
};

export default TechStack;

