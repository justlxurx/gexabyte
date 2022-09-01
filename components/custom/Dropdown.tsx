import Link from 'next/link';
import React from 'react';
import styles from '../../styles/components/Dropdown.module.scss';
import DropdownIcon from '../../public/icons/sr-chevron-right.svg';
import { Typography } from '@mui/material';

interface DropdownProps {
  data: {
    title: string;
    menu: boolean;
    link: string;
    items?: {
      title: string;
      link: string
    }[];
  }
}

const Dropdown: React.FC<DropdownProps> = ({ data }) => {
  return (
    <div className={styles.dropdown}>
      <Link href={data.link}>
        <Typography sx={{fontSize: '16px', fontWeight: 500}}>
          {data.title}
        </Typography>
      </Link>
      {data.menu && <img src={DropdownIcon.src} />}
      <div className={styles.dropdown_content}>
        {data.items?.map((i, idx) => (
          <Link href={i.link} key={idx}>
            {i.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Dropdown