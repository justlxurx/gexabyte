import Link from 'next/link';
import React from 'react';
import styles from '../../styles/components/Dropdown.module.scss';
import DropdownIcon from '../../public/icons/sr-chevron-right.svg';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import Image from 'next/image';

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
        <StyledLink>
          {data.title}
        </StyledLink>
      </Link>
      {data.menu && <img src={DropdownIcon.src} />}
      <div className={styles.dropdown_content}>
        {data.items?.map((i, idx) => (
          <Link href={i.link} key={idx}>
            {i.title}
          </Link>
        ))}
      </div>
        <Image src={'/images/chevron.svg'} alt='logo' width={15} height={16} style={{ cursor: 'pointer' }} />
    </div>
  )
}

export default Dropdown

const StyledLink = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #FFFFFF;
`