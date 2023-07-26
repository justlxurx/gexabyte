import React from 'react';
import * as S from '../../components/UI/style/style'
import Head from "next/head";

const SitemapPage = () => {
    return (
        <S.Wrapper>
            <Head>
                <title>TechCompany / Sitemap</title>
                <meta name='description' content='Sitemap TechCulture' />
            </Head>
            <S.Title>Sitemap</S.Title>
            <S.StyledLink href={'https://techculture.tech'}>Main page</S.StyledLink>
            <S.LinkTitle>Solution</S.LinkTitle>
            <S.BlockLink>
                <S.StyledLink href={'https://techculture.tech/web3'}>Web3 Solution Development</S.StyledLink>
                <S.StyledLink href={'https://techculture.tech/cryptosystem'}>Cryptosystem Design</S.StyledLink>
                <S.StyledLink href={'https://techculture.tech/whitelabel'}>White Label Products</S.StyledLink>
            </S.BlockLink>
            {/*<S.LinkTitle>Project</S.LinkTitle>*/}
            {/*<S.BlockLink>*/}
            {/*    <S.StyledLink href={'https://techculture.tech/projects'}>Projects</S.StyledLink>*/}
            {/*</S.BlockLink>*/}
        </S.Wrapper>
    );
};

export default SitemapPage;
