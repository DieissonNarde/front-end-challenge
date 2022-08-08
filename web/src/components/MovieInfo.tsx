import Image from "next/image";
import { useEffect, useState } from "react";

import { DetailsDiv, InfoDiv, MovieContainer, MovieContent, PosterDiv, SinopseDiv } from "../styles/components/movieInfo";
import { Score } from "./Score";


interface MovieInfoProps {
  movie: IMovie | undefined;
  crews: Array<ICrew>;
}

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

interface IGenre {
  name: string;
}

interface ICrew {
  id: number;
  department: string;
  name: string;
  job: string;
}

const imageUrl = process.env.NEXT_PUBLIC_IMG_URL;

export function MovieInfo({ movie, crews }: MovieInfoProps) {
  const [genres, setGenres] = useState<Array<IGenre> | undefined>([]);

  useEffect(() => {
    setGenres(movie?.genres);
  }, [genres])

  return (
    <MovieContainer>
      <MovieContent>
        {movie && (
          <>
            <PosterDiv>
              <img src={`${imageUrl}${movie.poster_path}`} alt={movie.title} className={"image"} />
            </PosterDiv>

            <InfoDiv>
              <h1>{movie.title}</h1>

              <DetailsDiv>
                {movie.adult ? (
                  <span>18 anos</span>
                ) : (
                  <span>16 anos</span>
                )}
                <span>{movie.release_date}</span>
                <span>{genres?.map((genre: IGenre) => (
                  <>
                    {genre.name + ", "}
                  </>
                ))}</span>
                <span>{movie.runtime}</span>
              </DetailsDiv>

              <Score voteAverage={movie.vote_average} />

              <SinopseDiv>
                <h3>Sinopse</h3>
                <p>{movie.overview}</p>
              </SinopseDiv>

              <ul>
                {crews.map((crew: ICrew) => (
                  <li key={crew.id}>
                    <p>{crew.name}</p>
                    <p>{crew.job}</p>
                  </li>
                ))}
              </ul>
            </InfoDiv>
          </>
        )}
      </MovieContent>
    </MovieContainer>
  )
}