import styled from 'styled-components';

export const SContainer = styled.div`
  margin: 3.1rem 0;

  @media (min-width: 1100px) {
    margin-top: 1.6rem;
    margin-bottom: 3.2rem;
  }
`;

export const SContent = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  > span {
    color: #FFFFFF;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2rem;
  }
`;

export const SRing = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, .1);

  width: 60px;
  height: 60px;
  border-radius: 50%;

  padding: 4px;
  margin-right: 1.16rem;

  > span {
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 3.8rem;
    letter-spacing: -0.005em;
    color: #14FF00;
  }
`;