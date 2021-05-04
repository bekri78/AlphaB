import React from 'react';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  return (
    <>
      <div className="home">
        <p className="textHome" data-aos="fade-up">
          Découvrez des outils simples, pratiques et efficaces qui vous redonneront confiance en vous.{' '}
          <span className="lectureSpan">La lecture </span> de vos textes adaptés à vos besoins n’aura jamais été aussi facile !!!
        </p>
      </div>
      <div className="home2">
        <p className="textHome2" data-aos="fade-up">
          Parlez à votre outils, ils vous retranscira votre texte ou donnez lui un texte et il vous le lira pour vous !<br></br> Modifier la couleur
          du texte, de certaines lettres. <br></br> Changer la police, sa taille. Espacez les lettres, les mots, les lignes !
        </p>
      </div>
      <div className="home3">
        <p className="textHome3" data-aos="fade-up">
          Le plaisir de lire, plus rapidement et sans fatigue est à un click <br></br> Alors, c’est parti !!!
        </p>
      </div>
    </>
  );
}
AOS.init();
export default Home;
