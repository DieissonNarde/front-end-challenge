import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
import api from '../services/api';
import { formatDateBR } from "../utils/formatDateBR";
import { useSelectedGenres } from '../hooks/useSelectedGenres';

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
  genre_ids: Array<number>;
}

interface IGenre {
  id: number;
  name: string;
}

const Home: NextPage = () => {
  const [movies, setMovies] = useState<Array<IMovie>>([]);
  const [genres, setGenres] = useState<Array<IGenre>>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(1);
  const [loading, setLoading] = useState(true);

  const { selectedGenres } = useSelectedGenres();

  function handleFormatDate(releaseDate : string) {
    const textMonth = true;
    return formatDateBR({releaseDate, textMonth});
  }

  async function getMovieGenres() {
    await api.get(`/genre/movie/list?api_key=${apiKey}&language=pt-BR`)
      .then((response) => {
        const data = response.data.genres;

        setGenres(data);
      }, (error) => {
        console.error("Erro em get movie genres api", error);
      });
  }

  async function getPopularMovies() {
    await api.get(`/movie/popular?api_key=${apiKey}&page=${currentPage}&language=pt-BR`)
      .then((response) => {
        const data = response.data;

        setMovies(data.results);
        data.total_results < 600 ? setTotalResults(data.total_results) : setTotalResults(600);
        setLoading(false);
      }, (error) => {
        console.error("Erro em get popular movies api", error);
      });
  }

  async function getMoviesWithGenres() {
    await api.get(`/discover/movie?with_genres=${encodeURI(selectedGenres.join(','))}&api_key=${apiKey}&page=${currentPage}&language=pt-BR`)
      .then((response) => {
        console.log("Response ", response)
        const data = response.data.results;

        setMovies(data);
        data.total_results < 600 ? setTotalResults(data.total_results) : setTotalResults(600);
        setLoading(false);
      }, (error) => {
        console.error("Erro em get movies with genres api", error);
      });
  }

  useEffect(() => {
    getMovieGenres();

    selectedGenres.length === 0 ? getPopularMovies() : getMoviesWithGenres();
  }, [currentPage, selectedGenres])

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
                    genre={genre}
                  />
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
            totalCount={totalResults}
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
