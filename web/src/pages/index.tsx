import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Button } from '../components/Button';
import { Card } from '../components/Card';


import { Header } from '../components/Header';
import { Pagination } from '../components/Pagination';
import { CardWrapper, CategoryWrapper, HeaderContainer, HeaderContent, HomeContent, HomeSection } from '../styles/pages/home';

let PageSize = 10;

const Home: NextPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <Head>
        <title>TMDB</title>
      </Head>

      <main>
        <Header />
        <HomeSection>
          <HeaderContainer>
            <HeaderContent>
              <h3>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h3>
              <p>FILTRE POR:</p>
              <CategoryWrapper>
                <Button>Teste</Button>
              </CategoryWrapper>
            </HeaderContent>
          </HeaderContainer>

          <HomeContent>
            <CardWrapper>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </CardWrapper>
          </HomeContent>

          <Pagination
            currentPage={currentPage}
            totalCount={80}
            pageSize={PageSize}
            siblingCount={1}
            onPageChange={(page: number) => setCurrentPage(page)}
          />
        </HomeSection>
      </main>
    </>
  )
}

export default Home;
