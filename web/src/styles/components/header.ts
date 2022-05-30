
import styled from "styled-components";

export const HContainer = styled.header`
  height: 5.6rem;
  max-width: 100vw;

  background-color: var(--primary-color);
`;

export const HContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    max-width: 14rem;
    height: auto;
  }
  
  @media (min-width: 1200px) {
    max-width: 99vw;
    justify-content: flex-start;
    margin-left: 11.2rem;

    > svg {
      max-width: 18.474rem;
    }
  }
`;