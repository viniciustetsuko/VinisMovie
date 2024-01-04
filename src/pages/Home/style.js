import { Link } from "react-router-dom";
import styled from "styled-components";


export const Content = styled.div`
    grid-area:content;
    padding: 0 6.4rem;
    overflow-y: auto;
    
    
`;

export const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4rem 0;
    
`;


export const NewMovie = styled(Link)`
    background-color: ${({ theme }) => theme.COLORS.DARK_RED};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20.7rem;
    height: 4.8rem;
    border-radius: .8rem;
    

    > svg {
        margin-right: .8rem;
    }
`;