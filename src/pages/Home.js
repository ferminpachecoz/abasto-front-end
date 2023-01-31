import React from 'react';
import Book from '../components/Book';
import MainBanner from '../components/MainBanner';
import SectionAbout from '../components/SectionAbout';
import SectionComents from '../components/SectionComents';
import SectionDiscover from '../components/SectionDiscover';
import SectionImages from '../components/SectionImages';
import SectionNumbers from '../components/SectionNumbers';
import SectionSellers from '../components/SectionSellers';
import SectionServices from '../components/SectionServices';
import Footer from '../layout/Footer';
import Header from '../layout/Header';

export default function Home() {
  return (
    <>
      <Header />
      <MainBanner />
      <Book />
      <SectionAbout />
      <SectionServices />
      <SectionDiscover />
      <SectionNumbers />
      <SectionSellers />
      <SectionImages />
      <SectionComents />
      <Footer />
    </>
  )
}
