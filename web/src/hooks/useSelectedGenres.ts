import { useContext } from 'react';
import { SelectedGenresContext } from "../contexts/SelectedGenresContext";


export function useSelectedGenres() {
  const value = useContext(SelectedGenresContext);

  return value;
}