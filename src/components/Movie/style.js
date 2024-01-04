import styled from "styled-components";


export const Container = styled.button`
    width: 100%;
    padding: 2.2rem;
    border: none;
    border-radius: 1rem;
    margin-bottom: 1.6rem;
    background-color: rgba(255, 133, 155, 0.05);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    > h1 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 2.4rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > p {
        
        flex: 1;
        text-align: left;
        font-weight: 400;
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > div > svg {
        color:  ${({ theme }) => theme.COLORS.DARK_RED};
    }


     > footer {
        width: 100%;
        display: flex;
        margin-top: 2.4rem;
     }
`;
