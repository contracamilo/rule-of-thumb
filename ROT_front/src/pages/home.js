import React, { useRef } from 'react';
import Header from '../components/Header';
import { texts } from '../utils/globalText';
import Hero from '../components/Hero';
import MainCard from '../components/MainCard';
import TimeLeft from '../components/TimeLeft';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Votes from '../components/Votes';
import BgImage from '../assets/images/Pope.jpg';
import Modal from '../components/Modal';
import EntryForm from '../components/forms/entryForm';

const Home = () => {
  const addNewCharacter = useRef(null);

  const { header, hero, time, footer, banner1, banner2, home } = texts;

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
        <Banner type="withButton" texts={banner2} action={() => addNewCharacter.current.open()} />
      </main>
      <div className="container">
        <Footer {...footer} />
      </div>
      <Modal ref={addNewCharacter}>
        <EntryForm title={home.modalTitle} />
      </Modal>
    </div>
  );
};

export default Home;
