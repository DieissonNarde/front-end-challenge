import styled from 'styled-components';

export const MovieSection = styled.section`
  width: 100%;
  margin-bottom: 12rem;
`;

export const MovieContent = styled.div`
  padding: 4.5rem 1.6rem 10.4rem;

  > section {
    margin-bottom: 4.5rem;

    > h2 {
      font-weight: 700;
      font-size: 2.8rem;
      line-height: 3.2rem;
      letter-spacing: -0.005em;
      color: #131313;
      margin-bottom: 1.4rem;
    }
  }

  @media (min-width: 1024px) {
    padding: 7.4rem 11.2rem 5.4rem;

    > section {
      margin-bottom: 6.4rem;

      > h2 {
        margin-bottom: 2.4rem;
      }
    }
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;
  justify-content: center;

  > div {
    margin-bottom: 2.2rem;
  }

  @media (min-width: 1024px) {
    gap: 3.2rem;
    justify-content: flex-start;

    > div {
      margin-bottom: 1.6rem;
    }
  }
`;