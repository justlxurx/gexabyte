import Link from 'next/link';
import React from 'react';
import styles from '../../styles/components/Dropdown.module.scss';
import DropdownIcon from '@public/icons/arrowDownGray.svg';
import styled from '@emotion/styled';
import {useTranslation} from "react-i18next";

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

  const {i18n} = useTranslation()

  return (
    <div className={styles.dropdown}>
      <Link href={data.link}>
        <StyledLink className={i18n.language === 'en' ? '' : 'nunito'}>
          {data.title}
        </StyledLink>
      </Link>
      {/*{data.menu && <img src={DropdownIcon.src}  alt={'DropdownIcon'}/>}*/}
      {/*<div className={styles.dropdown_content}>*/}
      {/*  {data.items?.map((i, idx) => (*/}
      {/*    <Link href={i.link} key={idx}>*/}
      {/*      {i.title}*/}
      {/*    </Link>*/}
      {/*  ))}*/}
      {/*</div>*/}
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
  
  &.nunito{
    font-family: 'Nunito', sans-serif;
  }
`
