import type { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import api from '../../services/api';
import { formatDateBR } from "../../utils/formatDateBR";

import { Header } from '../../components/Header';
import { MovieInfo } from '../../components/MovieInfo';
import { CastCarousel } from '../../components/CastCarousel';
import { Card } from '../../components/Card';

import { CardWrapper, MovieContent, MovieSection } from '../../styles/pages/movie';
import Link from 'next/link';
import { format } from 'path';

interface IMovie {
  id: number;
  poster_path: string;
  title: string;
  overview: string;
  release_date: string;
  video: boolean;
  vote_average: number;
  adult: boolean;
  runtime: number;
  genres: Array<IGenre> | undefined;
}

interface IRecommends {
  results: Array<IRecommend>;
}

interface IRecommend {
  id: number;
  poster_path: string;
  title: string;
  release_date: string;
}

interface ICredits {
  cast: Array<ICast>;
  crew: Array<ICrew>;
}

interface ICast {
  id: number;
  cast_id: number;
  profile_path: string;
  name: string;
  character: string;
  known_for_department: string;
}

interface ICrew {
  id: number;
  credit_id: string;
  department: string;
  name: string;
  job: string;
}

interface IGenre {
  id: string;
  name: string;
}

interface IVideos {
  results: Array<IVideo>;
}

interface IVideo {
  id: string;
  key: string;
  name: string;
}

interface MoviePageProps {
  movie: IMovie;
  recommends: Array<IRecommend>;
  casts: Array<ICast>;
  crews: Array<ICrew>;
  videos: Array<IVideo>;
}

const Movie = ({ movie, recommends, casts, crews, videos }: MoviePageProps) => {

  function handleFormatDate(releaseDate : string) {
    const textMonth = true;
    return formatDateBR({releaseDate, textMonth});
  }

  return (
    <>
      <Head>
        <title>TMDB - {movie.title}</title>
      </Head>

      <main>
        <Header />
        <MovieInfo movie={movie} crews={crews} />

        <MovieSection>
          <MovieContent>
            <section>
              <h2>Elenco original</h2>
              <CastCarousel casts={casts} />
            </section>

            {videos?.map((video: IVideo) => (
              <section key={video.id}>
                <h2>Trailer</h2>
                <div className='box-video'>
                  <iframe
                    width="560"
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title={video.name}
                    allow="autoplay; clipboard-write; encrypted-media;"
                  ></iframe>
                </div>
              </section>
            ))}
            
            <section>
              <h2>Recomendações</h2>
              <CardWrapper>
                {recommends.map((recommend: IRecommend) => (
                  <div key={recommend.id}>
                    <Link href={`/movie/${recommend.id}`}>
                      <a>
                        <Card
                          key={recommend.id}
                          image={recommend.poster_path}
                          title={recommend.title}
                          subtitle={handleFormatDate(recommend.release_date)}
                        />
                      </a>
                    </Link>
                  </div>
                ))}
              </CardWrapper>
            </section>
          </MovieContent>
        </MovieSection>
      </main>
    </>
  )
}

export default Movie;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const id = context.query.id as string;

  const resMovie = await api.get<IMovie>(`/movie/${id}?api_key=${apiKey}&language=pt-BR`);
  const resRecommends = await api.get<IRecommends>(`/movie/${id}/recommendations?api_key=${apiKey}&language=pt-BR`);
  const resCredits = await api.get<ICredits>(`/movie/${id}/credits?api_key=${apiKey}&language=pt-BR`);
  const resVideos = await api.get<IVideos>(`/movie/${id}/videos?api_key=${apiKey}&language=pt-BR`);
  
  const movie = resMovie.data;
  const recommends = resRecommends.data.results;
  const credits = resCredits.data;
  const videosResults = resVideos.data.results;

  const filteredVideo = videosResults.filter(video => video.name === "Official Trailer");

  const filteredCasts = credits.cast.filter(creditCast => creditCast.known_for_department === "Acting");
  const filteredCrews = credits.crew.filter(creditCrew => creditCrew.department === "Writing");

  return {
    props: {
      movie: movie,
      recommends: recommends,
      casts: filteredCasts,
      crews: filteredCrews,
      videos: filteredVideo,
    }
  };
};