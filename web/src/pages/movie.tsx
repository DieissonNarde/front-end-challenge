
import type { NextPage } from 'next';
import Head from 'next/head';

import { Header } from '../components/Header';
import { MovieInfo } from '../components/MovieInfo';
import { Carousel } from '../components/Carousel';
import { Card } from '../components/Card';

import { CardWrapper, MovieContent, MovieSection } from '../styles/pages/movie';


const Movie: NextPage = () => {

  return (
    <>
      <Head>
        <title>TMDB - Movie</title>
      </Head>

      <main>
        <Header />
        <MovieInfo />
        <MovieSection>
          <MovieContent>
            <section>
              <h2>Elenco original</h2>
              <Carousel />
            </section>

            <section>
              <h2>Trailer</h2>
              <div></div>
            </section>

            <section>
              <h2>Recomendações</h2>
              <CardWrapper>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </CardWrapper>
            </section>
          </MovieContent>
        </MovieSection>
      </main>
    </>
  )
}

export default Movie;
