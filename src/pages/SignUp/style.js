import styled from "styled-components";
import backgroundImg from '../../assets/imagemcinema1.png'


export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 13.6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    > h1 {
        font-size: 4.8rem;
        color: ${({ theme }) => theme.COLORS.DARK_RED};
    }

    > h2 {
        font-size: 2.4rem;
        margin: 4.8rem 0;
        
        
    }

    > p {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        
    }

    > a {
        margin-top: 124px;
        color: ${({ theme }) => theme.COLORS.DARK_RED};
        display: flex;
        align-items: center;
        gap: .5rem;

    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;