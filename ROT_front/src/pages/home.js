import React from 'react';
import Header from '../components/Header';
import { texts } from '../utils/globalText';
import Hero from '../components/Hero';
import MainCard from '../components/MainCard';
import TimeLeft from '../components/TimeLeft';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Votes from '../components/Votes';

const { header, hero, time, footer, banner1, banner2 } = texts;

function home() {
  return (
    <div className="container">
      <Header {...header} />
      <main className="home">
        <Hero>
          <MainCard {...hero} />
          <TimeLeft {...time} />
        </Hero>
        <Banner type="close" texts={banner1} />
        <Votes />
        <Banner type="withButton" texts={banner2} />
      </main>

      <Footer {...footer} />
    </div>
  );
}
// title={title} label={label} menuItems={navItems}
export default home;
