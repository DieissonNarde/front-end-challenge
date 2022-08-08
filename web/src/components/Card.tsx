
import { CardContainer, CardImg } from '../styles/components/card';

interface CardProps {
  image: string;
  title: string;
  subtitle: string;
}

const imageUrl = process.env.NEXT_PUBLIC_IMG_URL;

export function Card({ image, title, subtitle }: CardProps) {

  return (
    <CardContainer>
      <CardImg>
        <img src={`${imageUrl}${image}`} alt={title} className={"image"} />
      </CardImg>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </CardContainer>
  )
}