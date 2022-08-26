import type { AppProps } from 'next/app';
import { SelectedGenresContextProvider } from '../contexts/SelectedGenresContext';

import GlobalStyle from '../styles/globalStyle';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SelectedGenresContextProvider>
        <Component {...pageProps} />
      </SelectedGenresContextProvider>
      
      <GlobalStyle />
    </>
  )
}

export default MyApp
