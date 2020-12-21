import React from 'react';
import Header from '../components/Header';
import { texts } from '../utils/globalText';
import Hero from '../components/Hero';
import MainCard from '../components/MainCard';
import TimeLeft from '../components/TimeLeft';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Votes from '../components/Votes';
import BgImage from '../assets/images/Pope.jpg';

const Home = () => {
  const { header, hero, time, footer, banner1, banner2 } = texts;

  return (
    <div className="home">
      <Hero imageUrl={BgImage}>
        <div className="container">
          <Header {...header} />
          <MainCard {...hero} />
        </div>
        <TimeLeft {...time} />
      </Hero>
      <main className="home container">
        <Banner type="close" texts={banner1} />
        <Votes />
        <Banner type="withButton" texts={banner2} />
      </main>
      <div className="container">
        <Footer {...footer} />
      </div>
    </div>
  );
};

export default Home;
