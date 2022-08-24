import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import api from '../services/api';
import { formatDateBR } from "../utils/formatDateBR";

import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Pagination } from '../components/Pagination';

import { CardWrapper, GenresWrapper, HeaderContainer, HeaderContent, HomeContent, HomeSection } from '../styles/pages/home';

interface IMovie {
  id: number;
  poster_path: string;
  title: string;
  release_date: string;
}

interface IGenre {
  id: number;
  name: string;
}

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

const Home: NextPage = () => {
  const [movies, setMovies] = useState<Array<IMovie>>([]);
  const [genres, setGenres] = useState<Array<IGenre>>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  function handleFormatDate(releaseDate : string) {
    const textMonth = true;
    return formatDateBR({releaseDate, textMonth});
  }

  useEffect(() => {
    async function getPopularMovies() {
      await api.get(`/movie/popular?api_key=${apiKey}&page=${currentPage}&language=pt-BR`)
        .then((response) => {
          const data = response.data.results;

          setMovies(data);
          setLoading(false);
        }, (error) => {
          console.error(error);
        });
    }

    async function getMovieGenres() {
      await api.get(`/genre/movie/list?api_key=${apiKey}&language=pt-BR`)
        .then((response) => {
          const data = response.data.genres;

          setGenres(data);
        }, (error) => {
          console.error(error);
        });
    }

    getPopularMovies();
    getMovieGenres();
  }, [currentPage])

  return (
    <>
      <Head>
        <title>TMDB</title>
      </Head>

      <main>
        <Header />
        <HomeSection>
          <HeaderContainer>
            <HeaderContent>
              <h3>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h3>
              <p>FILTRE POR:</p>
              <GenresWrapper>
                {genres.map(genre => (
                  <Button
                    key={genre.id}
                    id={genre.id}
                  >
                    {genre.name}
                  </Button>
                ))}
              </GenresWrapper>
            </HeaderContent>
          </HeaderContainer>

          <HomeContent>
            <CardWrapper>
              {loading ? (
                <p>Loading...</p>
              ) : (
                <>
                  {movies &&
                    movies.map(movie => (
                      <div key={movie.id}>
                        <Link href={`/movie/${movie.id}`}>
                          <a>
                            <Card
                              image={movie.poster_path}
                              title={movie.title}
                              subtitle={handleFormatDate(movie.release_date)}
                            />
                          </a>
                        </Link>
                      </div>
                    ))
                  }
                </>
              )}
            </CardWrapper>
          </HomeContent>

          <Pagination
            currentPage={currentPage}
            totalCount={400}
            pageSize={movies.length}
            siblingCount={1}
            onPageChange={(page: number) => setCurrentPage(page)}
          />
        </HomeSection>
      </main>
    </>
  )
}

export default Home;
