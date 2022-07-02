import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';


import { Header } from '../components/Header';
import { Pagination } from '../components/Pagination';

let PageSize = 6;

const Home: NextPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <Head>
        <title>TMDB</title>
      </Head>

      <main>
        <Header />
        <div>
          <Pagination
            currentPage={currentPage}
            totalCount={80}
            pageSize={PageSize}
            onPageChange={(page: number) => setCurrentPage(page)}
          />
        </div>

      </main>
    </>
  )
}

export default Home;
