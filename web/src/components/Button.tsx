import { useEffect, useState } from "react";
import { BContainer, BContent } from "../styles/components/button";

import { useSelectedGenres } from "../hooks/useSelectedGenres";

interface IGenre {
  id: number;
  name: string;
}

interface ButtonProps {
  genre: IGenre;
}

export function Button({ genre }: ButtonProps) {
  const [isActive, setIsActive] = useState<boolean>(false);

  const { selectedGenres, addSelectedGenres, removeSelectedGenres } = useSelectedGenres();

  function handleAddSelectedGenre() {
    addSelectedGenres(genre.id);
    setIsActive(true);
  }

  function handleRemoveSelectedGenre() {
    removeSelectedGenres(genre.id);
    setIsActive(false);
  }
  
  useEffect(() => {
    selectedGenres.forEach(selectedGenre => {
      if (genre.id === selectedGenre) {
        setIsActive(true);
        return;
      }
    })
  }, [])
  
  return (
    <>
      {isActive ? (
        <BContainer
          bgColor={'var(--selected-button)'}
          colorText={'#FFFFFF'}
          onClick={handleRemoveSelectedGenre}
        >
          <BContent>
            {genre.name}
            <img src="/svg/close-circle.svg" />
          </BContent>
        </BContainer>
      ) : (
        <BContainer
          bgColor={'#FFFFFF'}
          colorText={'var(--text-button)'}
          onClick={handleAddSelectedGenre}
        >
          {genre.name}
        </BContainer>
      )}
    </>
  )
}