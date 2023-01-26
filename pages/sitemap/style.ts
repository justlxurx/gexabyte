import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1500px;
  margin: auto;
  padding: 15px;
`

export const Title = styled.h1 `
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 110%;
  letter-spacing: 0.025em;
  color: #FFFFFF;
  max-width: 40%;

  @media (max-width: 600px) {
    font-size: 32px;
  }
`

export const LinkTitle = styled.h2`
  padding: 5px 0 5px 0;
  margin: 0;
  font-size: 28px;
`

export const StyledLink = styled.a`
  cursor: pointer;
  padding: 0 0 3px 0;
  color: #F0B270;
  font-size: 20px;
  &:hover {
    text-decoration: underline;
  }
`

export const BlockLink = styled.div`
  padding-left: 15px;
  display: flex;
  flex-direction: column;
`
