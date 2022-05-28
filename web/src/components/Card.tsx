import Image from 'next/image';

import { CardContainer, CardImg } from '../styles/components/card';
import MovieImg from '../assets/png/movie-img.png';

export function Card() {

  return (
    <CardContainer>
      <CardImg>
        <Image src={MovieImg} alt={"Imagem de capa do filme"} />
      </CardImg>
      <h2>Clifford</h2>
      <p>12 NOV 2021</p>
    </CardContainer>
  )
}