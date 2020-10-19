import styled from 'styled-components'

export const PageContainer = styled.div`
  font: ${({ theme }) => theme.chineseFont};
  background-color: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.secondaryColor};
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font-size: 72px;
    display: block;
    margin: 0px;
  }
  ul.v-slides {
    font-size: 36px;
    font-weight: 800;
    list-style-type: none;
    transform: translateY(50px);
    padding: 0;
    font-family: ${({ theme }) => theme.secondaryFont};
  }
`
