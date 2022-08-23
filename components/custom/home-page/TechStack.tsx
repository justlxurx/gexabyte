import React from "react";
// import useEmblaCarousel from "embla-carousel-react";
import Link from 'next/link'
import Image from "next/image";
import { Typography } from "@mui/material";

const TechStack = () => {
  // const [emblaRef] = useEmblaCarousel({ loop: true });

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
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1].map(() => (
            <div className="slide">
              <Image src='/icons/kotlin.svg' width='40px' height='40px' />
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

