import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 6.4rem;

  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 64px 0;
    
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  overflow-y: scroll;

  max-height: 58rem;

  display: flex;
  flex-direction: column;

  > button {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.DARK_RED};
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 2.4rem;
    background: none;
    border: none;
  }

  > h1 {
    font-size: 36px;
    font-weight: 500;
    padding-top: 64px;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1.9rem;

    > svg {
      color: ${({ theme }) => theme.COLORS.DARK_RED};
      font-size: 2.6rem;
    }
   
  }

  > p {
    font-size: 16px;
    margin-top: 16px;
    text-align: justify;
  }
`;


export const Avatar = styled.div`
   img {
    width: 2.6rem;
    height: 2.6rem;
    border-radius: 50%;
    margin: 4rem 0;
  }

`;

