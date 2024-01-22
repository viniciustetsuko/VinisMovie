import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerP = styled(Link)`
  display: flex;
  align-items: center;
  gap: 9px;

  > img {
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    line-height: 2.4rem;

    strong {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    button {
      font-size: 1.4rem;
      font-size: bold;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      text-align: right;
      background: none;
      border: none;
    }
  }
`;
