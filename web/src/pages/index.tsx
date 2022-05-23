import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components/Header';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>TMDB</title>
      </Head>

      <main>
        <Header />
      </main>
    </>
  )
}

export default Home;
