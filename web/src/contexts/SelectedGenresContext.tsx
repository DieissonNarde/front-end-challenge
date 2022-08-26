import { createContext, ReactNode, useState } from "react";


interface SelectedGenresContextProviderProps {
  children: ReactNode;
}

interface IGenre {
  id: number;
  name: string;
}

interface ISelectedGenresContext {
  selectedGenres: Array<IGenre>;
  addSelectedGenres: (genre: IGenre) => void;
  removeSelectedGenres: (genre: IGenre) => void;
}


export const SelectedGenresContext = createContext({} as ISelectedGenresContext);


export function SelectedGenresContextProvider({ children }: SelectedGenresContextProviderProps): JSX.Element {
  const [selectedGenres, setSelectedGenres] = useState<Array<IGenre>>(() => {
    if (typeof window === 'undefined') {
      return [];
    }
    try {
      const storagedSelectedGenres = window.localStorage.getItem('@TMDB:selectedGenres');
      console.log('Storagedd Genres', storagedSelectedGenres);

      if (storagedSelectedGenres) {
        return JSON.parse(storagedSelectedGenres);
      }
      
      return [];
    } catch(error) {
      console.error('Error storaged', error);
      return [];
    }
    
  });

  async function addSelectedGenres(genre: IGenre) {
    try {  
      if (typeof window !== "undefined") {
        setSelectedGenres([...selectedGenres, { ...genre } ])
        localStorage.setItem('@TMDB:selectedGenres', JSON.stringify([...selectedGenres, { ...genre }]))
      }
    } catch {
      console.log('Erro ao setar item na lista de Gêneros Selecionados!');
    }
  }

  async function removeSelectedGenres(genre: IGenre) {
    try {  
      if (typeof window !== "undefined") {
        const updateSelectedGenres = selectedGenres.filter(genresItem => genresItem.id !== genre.id);
        setSelectedGenres(updateSelectedGenres);
        localStorage.setItem('@TMDB:selectedGenres', JSON.stringify(updateSelectedGenres))
      }
    } catch {
      console.log('Erro ao remover item da lista de Gêneros Selecionados!');
    }
  }

  return (
    <SelectedGenresContext.Provider value={{ selectedGenres, addSelectedGenres, removeSelectedGenres }}>
      {children}
    </SelectedGenresContext.Provider>
  );
}