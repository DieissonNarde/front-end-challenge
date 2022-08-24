import styled from 'styled-components';

export const HomeSection = styled.section`
  width: 100%;
  margin-bottom: 12rem;
`;

export const HeaderContainer = styled.header`
  background-color: #2D0C5E;
  padding: 4rem 1.6rem 4.7rem;

  @media (min-width: 1024px) {
    padding-block: 8.5rem;
  }
`;

export const HeaderContent = styled.div`
  width: 100%;

  > h3 {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 2.8rem;
    color: #FFFFFF;
    margin-bottom: 3.6rem;
  }

  > p {
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 2rem;
    color: #FFFFFF;
    margin-bottom: .8rem;
  }

  @media (min-width: 1024px) {
    max-width: 100rem;
    margin: 0 auto;
    text-align: center;

    > h3 {
      font-size: 4.8rem;
      line-height: 5.6rem;
      letter-spacing: -0.005em;
      margin-bottom: 4rem;
      max-width: 80rem;
      margin-inline: auto;
    }

    > p {
      margin-bottom: 1.6rem;
    }
  }
`;

export const GenresWrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 1.2rem;

  @media (min-width: 1024px) {
    justify-content: center;
  }
`;

export const HomeContent = styled.div`
  padding: 3.2rem 1.6rem 10.4rem;

  @media (min-width: 1024px) {
    padding: 2.9rem 11.2rem 5.4rem;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;
  justify-content: center;

  > div {
    margin-bottom: 2.4rem;
  }

  @media (min-width: 1024px) {
    gap: 3.2rem;

    > div {
      margin-bottom: 1.6rem;
    }
  }
`;