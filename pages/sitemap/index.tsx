import React from 'react';
import * as S from '../../components/UI/style/style'
import Head from "next/head";

const SitemapPage = () => {
    return (
        <S.Wrapper>
            <Head>
                <title>TechCulture / Sitemap</title>
                <meta name='description' content='Sitemap TechCulture' />
            </Head>
            <S.Title>Sitemap</S.Title>
            <S.StyledLink href={'https://techculture.tech'}>Main page</S.StyledLink>
            <S.LinkTitle>Solution</S.LinkTitle>
            <S.BlockLink>
                <S.StyledLink href={'https://techculture.tech/blockchain'}>Blockchain development</S.StyledLink>
                <S.StyledLink href={'https://techculture.tech/consulting'}>Blockchain Consulting</S.StyledLink>
                <S.StyledLink href={'https://techculture.tech/webdev'}>Web & Mobile development</S.StyledLink>
            </S.BlockLink>
            <S.LinkTitle>Project</S.LinkTitle>
            <S.BlockLink>
                <S.StyledLink href={'https://techculture.tech/projects'}>Projects</S.StyledLink>
            </S.BlockLink>
        </S.Wrapper>
    );
};

export default SitemapPage;
