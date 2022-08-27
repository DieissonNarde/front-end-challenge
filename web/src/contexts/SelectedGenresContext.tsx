import { createContext, ReactNode, useState } from "react";

interface SelectedGenresContextProviderProps {
  children: ReactNode;
}

interface ISelectedGenresContext {
  selectedGenres: Array<number>;
  addSelectedGenres: (genre: number) => void;
  removeSelectedGenres: (genre: number) => void;
}

export const SelectedGenresContext = createContext({} as ISelectedGenresContext);

export function SelectedGenresContextProvider({ children }: SelectedGenresContextProviderProps): JSX.Element {
  const [selectedGenres, setSelectedGenres] = useState<Array<number>>(() => {
    if (typeof window === "undefined") {
      return [];
    }
    try {
      const storagedSelectedGenres = window.localStorage.getItem('@TMDB:selectedGenres');

      if (storagedSelectedGenres) {
        return JSON.parse(storagedSelectedGenres);
      }
      
      return [];
    } catch(error) {
      console.error("Erro ao pegar dados de localStoraged", error);
      return [];
    }
    
  });

  async function addSelectedGenres(genre: number) {
    try {  
      if (typeof window !== "undefined") {
        setSelectedGenres([...selectedGenres, genre ])
        localStorage.setItem('@TMDB:selectedGenres', JSON.stringify([...selectedGenres, genre]))
      }
    } catch(error) {
      console.error('Erro ao setar item na lista de Gêneros Selecionados!', error);
    }
  }

  async function removeSelectedGenres(genreId: number) {
    try {  
      if (typeof window !== "undefined") {
        const updateSelectedGenres = selectedGenres.filter(genresItem => genresItem !== genreId);
        setSelectedGenres(updateSelectedGenres);
        localStorage.setItem('@TMDB:selectedGenres', JSON.stringify(updateSelectedGenres))
      }
    } catch(error) {
      console.error('Erro ao remover item da lista de Gêneros Selecionados!', error);
    }
  }

  return (
    <SelectedGenresContext.Provider value={{ selectedGenres, addSelectedGenres, removeSelectedGenres }}>
      {children}
    </SelectedGenresContext.Provider>
  );
}