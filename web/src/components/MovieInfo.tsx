
import { useEffect, useState } from "react";

import { DetailsDiv, InfoDiv, MovieContainer, MovieContent, PosterDiv, SinopseDiv } from "../styles/components/movieInfo";
import { Score } from "./Score";
import { formatDateBR } from "../utils/formatDateBR";

interface MovieInfoProps {
  movie: IMovie;
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
  id: string;
  name: string;
}

interface ICrew {
  id: number;
  credit_id: string;
  department: string;
  name: string;
  job: string;
}

const imageUrl = process.env.NEXT_PUBLIC_IMG_URL;

export function MovieInfo({ movie, crews }: MovieInfoProps) {
  const [genres, setGenres] = useState<Array<IGenre> | undefined>([]);

  function convertMinutesToHour(minutesRuntime : number) {
    const hours = Math.floor(minutesRuntime / 60);          
    const minutes = minutesRuntime % 60;
    const textHours= (`${hours}`).slice(-2);
    const textMinutes = (`${minutes}`).slice(-2);
    
    return `${textHours}h ${textMinutes}m`;
  }

  function handleFormatDate(releaseDate : string) {
    const textMonth = false;
    return formatDateBR({releaseDate, textMonth});
  }

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
                  <span className="detail-item">18 anos</span>
                ) : (
                  <span className="detail-item">16 anos</span>
                )}
                <span className="detail-item">{handleFormatDate(movie.release_date)}</span>
                <span className="detail-item">
                  {genres?.map((genre: IGenre) => (
                    <span key={genre.id}>
                      {genre.name + ", "}
                    </span>
                  ))}
                </span>
                <span className="detail-item">{convertMinutesToHour(movie.runtime)}</span>
              </DetailsDiv>

              <Score voteAverage={movie.vote_average} />

              <SinopseDiv>
                <h3>Sinopse</h3>
                <p>{movie.overview}</p>
              </SinopseDiv>

              <ul>
                {crews.map((crew: ICrew) => (
                  <li key={crew.credit_id}>
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