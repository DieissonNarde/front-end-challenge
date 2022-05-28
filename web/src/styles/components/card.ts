import styled from 'styled-components';

export const CardContainer = styled.div`
  display: inline-block;

  h2 {
    margin-top: 1rem;
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 2rem;
    color: #000000;
  }

  p {
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.8rem;
    color: #646464;
  }

  @media (min-width: 1024px) {
    h2 {
      margin-top: .8rem;
      font-size: 1.6rem;
      line-height: 2.4rem;
    }

    p {
      font-size: 1.4rem;
      line-height: 2.4rem;
    }
  }
`;

export const CardImg = styled.div`
  max-width: 15.467rem;
  height: auto;
  border-radius: 4px;
  border: 1px solid #E7E7E7;

  @media (min-width: 1024px) {
    max-width: 17.6rem;
  }
`;