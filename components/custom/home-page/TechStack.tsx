import React from "react";
// import useEmblaCarousel from "embla-carousel-react";
import Link from 'next/link'
import Image from "next/image";
import { Typography } from "@mui/material";

const icons = [
  '/icons/kotlin.svg',
  '/icons/etherium.svg',
  '/icons/js.svg',
  '/icons/ruby.svg',
]

const TechStack = () => {

  return (
    <div className="stack-bar">
      <Typography sx={{
        fontSize: '32px',
        fontWeight: 700,
        fontFamily: 'Readex Pro',
        whiteSpace: 'nowrap'
      }}>
        Our Techstack
      </Typography>
      <div className="slider">
        <div className="slider-track">
          {icons.map((src, j) => (
            <div className="slide" key={j}>
              <Image src={src} width='40px' height='40px' />
            </div>
          ))}
          {icons.map((src, j) => (
            <div className="slide" key={j}>
              <Image src={src} width='40px' height='40px' />
            </div>
          ))}
          {icons.map((src, j) => (
            <div className="slide" key={j}>
              <Image src={src} width='40px' height='40px' />
            </div>
          ))}
          {icons.map((src, j) => (
            <div className="slide" key={j}>
              <Image src={src} width='40px' height='40px' />
            </div>
          ))}
        </div>
      </div>
      <Link href='/'>
        <Typography sx={{
          fontSize: '14px',
          fontWeight: 700,
          color: '#F0B270',
          whiteSpace: 'nowrap',
          cursor: 'pointer'
        }}>
          Show all {'>'}
        </Typography>
      </Link>
    </div>
  );
};

export default TechStack;

