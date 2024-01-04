import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0 6.4rem;
    display: grid;
    grid-template-rows: 10.5rem auto;
    grid-template-areas:"header" "content"; 

    > main {
        grid-area: content;
        overflow-y: auto;
    }

    .tags {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: 2rem;
        background-color: ${({ theme }) => theme.COLORS.BLACK};
        padding: 1.6rem;
        border-radius: 2rem;
    }
`;

export const Form = styled.form`
    /* max-width: 115rem; */
    margin: 3.8rem auto;

    > header {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: space-between;
        margin-bottom: 3.6rem;
        gap: 2.4rem;

        a {
            font-size: 1.6rem;
            color: ${({ theme }) => theme.COLORS.DARK_RED};
            display: flex;
            align-items: center;
            gap: .8rem;
        }
    }
    

    .input {
        display: flex;
        gap: 2rem;
    }

    .buttons {
        display: flex;
        gap: 4rem;
        
    }


    button:first-child {
    
        background-color: ${({ theme }) => theme.COLORS.BLACK};
  }    


     

`;