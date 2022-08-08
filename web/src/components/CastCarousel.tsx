import { CContainer, CContent, CItem } from "../styles/components/carousel";

import { Card } from "./Card";

interface CarouselProps {
  casts: Array<ICast>;
}

interface ICast {
  id: number;
  profile_path: string;
  name: string;
  character: string;
}

export function CastCarousel({ casts }: CarouselProps) {

  return (
    <CContainer>
      <CContent>
        {casts.map((cast) => (
          <CItem key={cast.id}>
            <Card image={cast.profile_path} title={cast.name} subtitle={cast.character} />
          </CItem>
        ))}
      </CContent>
    </CContainer>
  )
}