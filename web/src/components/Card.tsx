import Image from 'next/image';

import { CardContainer, CardImg } from '../styles/components/card';

interface CardProps {
  poster: string;
  title: string;
  date: string;
}

const imageUrl = process.env.NEXT_PUBLIC_IMG_URL;

export function Card({ poster, title, date }: CardProps) {

  return (
    <CardContainer>
      <CardImg>
        <img src={`${imageUrl}${poster}`} alt={title} className={"image"} />
      </CardImg>
      <h2>{title}</h2>
      <p>{date}</p>
    </CardContainer>
  )
}