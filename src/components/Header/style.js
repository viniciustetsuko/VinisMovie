import styled from "styled-components";


export const Container = styled.header`
    height: 11.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem .8rem;
    border-bottom: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
    

    > h1 {
        color: ${({ theme }) => theme.COLORS.DARK_RED};
        font-size: 2.4rem; 
    }

`;



export const Search = styled.div`
    width: 63rem;
    height: 5.6rem;
    
`;