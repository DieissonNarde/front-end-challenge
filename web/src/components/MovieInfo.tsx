import Image from "next/image";

import { DetailsDiv, InfoDiv, MovieContainer, MovieContent, PosterDiv, SinopseDiv } from "../styles/components/movieInfo";

import PosterMovie from '../assets/png/poster-movie.png';
import { Score } from "./Score";

export function MovieInfo() {

  return (
    <MovieContainer>
      <MovieContent>
        <PosterDiv>
          <Image src={PosterMovie} alt={'Imagem de capa do filme'} />
        </PosterDiv>

        <InfoDiv>
          <h1>Deadpool(2016)</h1>

          <DetailsDiv>
            <span>16 anos</span>
            <span>11/02/2016 (BR)</span>
            <span>Ação, Aventura, Comédia, Ficção científica</span>
            <span>1h 47m</span>
          </DetailsDiv>

          <Score />

          <SinopseDiv>
            <h3>Sinopse</h3>
            <p>
              Baseado no anti-herói não convencional da Marvel Comics,
              Deadpool conta a história da origem do ex-agente das Forças
              Especiais que se tornou o mercenário Wade Wilson.
              Depois de ser submetido a um desonesto experimento que o deixa
              com poderes de cura acelerada, Wade adota o alter ego de Deadpool.
              Armado com suas novas habilidades e um senso de humor negro e
              distorcido, Deadpool persegue o homem que quase destruiu sua vida.
            </p>
          </SinopseDiv>

          <ul>
            <li>
              <p>Rob Liefeld</p>
              <p>Characters</p>
            </li>
            <li>
              <p>Rob Liefeld</p>
              <p>Characters</p>
            </li>
            <li>
              <p>Rob Liefeld</p>
              <p>Characters</p>
            </li>
            <li>
              <p>Rob Liefeld</p>
              <p>Characters</p>
            </li>
            <li>
              <p>Rob Liefeld</p>
              <p>Characters</p>
            </li>
          </ul>
        </InfoDiv>
      </MovieContent>
    </MovieContainer>
  )
}