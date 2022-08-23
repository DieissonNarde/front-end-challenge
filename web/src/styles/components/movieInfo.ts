import styled from 'styled-components';

export const MovieContainer = styled.section`
  max-width: 100vw;
  height: 100%;
  background-color: #2D0C5E;
  padding-top: 3.4rem;
  padding-bottom: 7.1rem;

  @media (min-width: 1100px) {
    max-width: 100%;
    padding-top: 7.2rem;
    padding-bottom: 0;
  }
`;

export const MovieContent = styled.div`
  height: fit-content;
  padding: 0 4%;

  @media (min-width: 1100px) {
    margin: 0 auto;
    padding-inline: 11.2rem;

    display: flex;
    flex-wrap: nowrap;
  }
`;

export const PosterDiv = styled.div`
  width: 18.6rem;
  height: auto;
  border-radius: 8px;
  margin: 0 auto;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  .image {
    width: 100%;
    height: auto;
  }

  @media (min-width: 1100px) {
    min-width: 38.3rem;
    height: auto;
    margin-bottom: -4.6rem;
  }
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

  @media (min-width: 1100px) {
    margin-left: 3.3rem;

    h1 {
      margin: 0;
    }

    > ul {
      margin-top: 0;

      > li {
        margin-top: 2.3rem;
        margin-bottom: 0;
      }
    }
  }
`;

export const DetailsDiv = styled.div`
  margin-top: .3rem;

  > .detail-item {
    display: block;
    color: #FFFFFF;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.4rem;
  }

  @media (min-width: 1100px) {
    margin-top: .8rem;
    display: flex;
    flex-wrap: wrap;
    
    .detail-item {
      display: flex;
      align-items: center;
    }

    span+span::before {
      content: '';
      background: #FFFFFF;
      width: 6px;
      height: 6px;

      border-radius: 50%;
      margin: 0 1rem;
    }
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

  @media (min-width: 1100px) {
    > p {
      margin-top: .8rem;
    }
  }
`;