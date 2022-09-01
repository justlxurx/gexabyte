import React from 'react';
import styles from '../../styles/components/RoundedCircle.module.scss';
import ArrowIcon from '../../public/icons/sr-arrow-upright-4x.svg';
import StarIcon from '../../public/icons/Star.svg';
import Image from 'next/image';

const RoundedAnimation = () => {
  return (
    <div className={styles.circle}>
      <div className={styles.center_icon}>
        <Image src={ArrowIcon.src} width={75} height={75} />
      </div>
      <div className={styles.text}>
        <p style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase' }}>
          <span style={{ transform: "rotate(-13deg)" }}>
            <img src={StarIcon.src} />
          </span>
          {'EXPLORE OUR PROJECTS'.split('').map((char, idx) => (
            <span key={idx} style={{ transform: `rotate(${(idx) * 6.5}deg)` }}>{char}</span>
          ))}
          <span style={{ transform: "rotate(136.5deg)" }}>
            <img src={StarIcon.src} />
          </span>
          {'EXPLORE OUR PROJECTS'.split('').map((char, idx) => (
            <span key={idx} style={{ transform: `rotate(${(idx + 24) * 6.5}deg)` }}>{char}</span>
          ))}
          <span style={{ transform: "rotate(287.5deg)" }}>
            <img src={StarIcon.src} />
          </span>
        </p>
      </div>
    </div>
  )
}

export default RoundedAnimation