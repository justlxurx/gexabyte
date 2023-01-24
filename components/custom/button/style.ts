import styled from '@emotion/styled'

export const ScrollButton = styled.div`
  margin: 16px;
  right: 0;
  bottom: 10%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 59px;
  z-index: 1000;
  height: 100px;
  background: linear-gradient(0deg, #191919, #191919), #D9D9D9;
  box-shadow: inset -5px -6px 14px #202020, inset 1px 1px 15px #000000;
  border-radius: 4px;
  cursor: pointer;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  transition: 0.2s;
  &:hover {
   opacity: 0.8;
  }
  &:active {
    //box-shadow:0 0 100px rgba(0, 0, 0, 0.79);
    box-shadow: 0 0 10px 3px #373737;
  }
`
