import styled from "styled-components";


export const Container = styled.button`
    width: 100%;
    height: 5.6rem;
    border: 0;
    border-radius: 1rem;
    font-weight: 500;
    padding: 0 1.6rem;
    margin-top: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_RED};
    color: ${({ theme }) => theme.COLORS.BLACK};
    

    &:disabled {
        opacity: 0.5;
    }

`;