import React, { useMemo } from 'react';
import styles from '../../styles/components/RoundedCircle.module.scss';
import ArrowIcon from '../../public/icons/sr-arrow-upright-4x.svg';
import StarIcon from '../../public/icons/Star.svg';
import Image from 'next/image';
import styled from '@emotion/styled';
import { useMediaQuery } from '@mui/material';

const mobileDegree = 5;
const desktopDegree = 6.5;

const RoundedAnimation = () => {
  const isMobileScreen = useMediaQuery('(max-width:768px)');

  const memoizedWidth = useMemo(() => isMobileScreen ? 50 : 75, [isMobileScreen]);

  return (
    <div className={styles.circle}>
      {isMobileScreen 
      ? <MobileRotate>
          <div className={styles.center_icon} >
            <Image src={ArrowIcon.src} width={memoizedWidth} height={memoizedWidth} />
          </div>
        </MobileRotate>
      : <div className={styles.center_icon} >
          <Image src={ArrowIcon.src} width={memoizedWidth} height={memoizedWidth} />
        </div> 
      }
      <div className={styles.text}>
        <p style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase' }}>
          <span style={{ transform: 'rotate(-18deg)' }}>
            <img src={StarIcon.src} />
          </span>
          {'EXPLORE OUR PROJECTS'.split('').map((char, idx) => (
            <span key={idx} style={{ transform: `rotate(${(idx) * 7}deg)` }}>{char}</span>
          ))}
          <span style={{ transform: "rotate(147deg)" }}>
            <img src={StarIcon.src} />
          </span>
          {'EXPLORE OUR PROJECTS'.split('').map((char, idx) => (
            <span key={idx} style={{ transform: `rotate(${(idx + 24) * 7}deg)` }}>{char}</span>
          ))}
          <span style={{ transform: "rotate(310deg)" }}>
            <img src={StarIcon.src} />
          </span>
        </p>
      </div>
    </div>
  )
}

const MobileRotate = styled.div`
-webkit-transform: rotate(270deg);
-moz-transform: rotate(270deg);
-o-transform: rotate(270deg);
-ms-transform: rotate(270deg);
transform: rotate(270deg);
`

export default RoundedAnimation