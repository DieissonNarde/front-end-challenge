import styled from 'styled-components';

export const MovieContainer = styled.section`
  width: 100vw;
  height: 100%;
  background-color: #2D0C5E;
  padding-top: 3.4rem;
  padding-bottom: 7.1rem;
`;

export const MovieContent = styled.div`
  height: fit-content;
  padding: 0 4%;
`;

export const PosterDiv = styled.div`
  max-width: 18.6rem;
  height: auto;
  border-radius: 8px;
  margin: 0 auto;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const InfoDiv = styled.div`
  h1, p {
    color: #FFFFFF;
  }

  > h1 {
    margin-top: 4.2rem;
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 3.8rem;
    letter-spacing: -0.005em;
  }

  > ul {
    margin-top: 3.3rem;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    list-style: none;

    > li {
      width: 33%;
      margin-bottom: 2.3rem;

      > p:nth-child(1) {
        font-weight: 700;
        font-size: 1.6rem;
        line-height: 2.4rem;
      }

      > p:nth-child(2) {
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 2.0rem;
      }
    }
  }
`;

export const DetailsDiv = styled.div`
  margin-top: .3rem;

  > p {
    color: #FFFFFF;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.4rem;
  }
`;

export const ScoreDiv = styled.div`
  margin: 3.1rem 0;

  > span {
    margin-left: 1.16rem;
    color: #FFFFFF;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2rem;
  }
`;

export const SinopseDiv = styled.div`
  > h3 {
    color: #FFFFFF;
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.4rem;
  }

  > p {
    margin-top: 1.6rem;
    color: #DDDDDD;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.4rem;
    letter-spacing: -0.005em;
  }
`;