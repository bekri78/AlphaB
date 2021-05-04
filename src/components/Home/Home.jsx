import React from 'react';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from './img.png';
import svg from './iconSvg.svg';
import AlphaB from './alpha.png';
import Alpha from './alphaB.png';

function Home() {
  return (
    <>
      <div className="firstSection">
        <div className="bigcontainer">
          <div className="smallcontainer">
            <h1 className="title">ALPHA</h1>
            <img className="logo" src={AlphaB} alt="AlphaB" />
          </div>
          <h2 className="sstitle">L appli facilitateur de lecture</h2>
          <button className="button">Commencer</button>
        </div>
        <img className="bigImg" src={Alpha} alt="déco" />
      </div>
      <div className="home">
        <div className="design">
          <img id="img" src={img} alt="img" />
          <p className="textHome" data-aos="fade-up">
            AlphaB a créé une solution adaptée et efficace pour pour toutes les personnes nécessitant une assistance lors de la lecture.
          </p>
          <p className="textHome2" data-aos="fade-up">
            La lecture est omniprésente dans notre quotiden. Pour AlphaB, il est essentiel d’apporter une aide concrète à toutes personnes en
            difficulté.
          </p>
        </div>
      </div>
      <div className="presentation">
        <div className="home_bubble">
          <div className="bubble b_one"></div>
          <div className="bubble b_two"></div>
          <div className="bubble b_three"></div>
          <div className="bubble b_four"></div>
          <div className="bubble b_five"></div>
          <div className="bubble b_six"></div>
          <div className="bubble b_seven"></div>
          <div className="bubble b_height"></div>
        </div>
        <p className="textHome3" data-aos="fade-up">
          Découvrez des outils simples et pratiques qui vous redonneront confiance en vous.
        </p>
        <div className="conteneur4">
          <p className="textHome4" data-aos="fade-up">
            La lecture de vos textes adaptés à vos besoins n’aura jamais été aussi facile !!!
          </p>
        </div>
        <div className="conteneur5">
          <p className="textHome5" data-aos="fade-up">
            Une aide précieuse à destination de toutes les personnes atteintes de troubles de la lecture (dyslexie, dyspraxie, dysphasie...).
          </p>
        </div>
        <div className="conteneur6">
          <img id="imgGirl" src={svg} alt="img" />
        </div>
      </div>
    </>
  );
}
AOS.init();
export default Home;
