import React from 'react';
import CarouselOpinions from './CarouselOpinions/CarouselOpinions';
import Footer from '../Footer/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';

import './home.css';
import 'aos/dist/aos.css';
import img from './img.png';
import svg from './iconSvg.svg';
import AlphaB from './alpha.png';
import Alpha from './alphaB.png';
import quoteLeft from './quoteLeft.svg';
import quoteRight from './quoteRight.svg';
import HomTop from './Design/home_top.svg';
import HomCenterLeft from './Design/home_center_left.svg';
import HomCenterRight from './Design/home_center_right.svg';
import HomCenterLeft2 from './Design/home_center_left2.svg';
import HomCenterRight2 from './Design/home_center_right2.svg';

function Home() {
  return (
    <>
      <Container fluid>
        <Row className="align-items-center" id="bb">
          <Col xs={12} sm={12} md={12} lg={6}>
            <div className="bigcontainer">
              <div className="smallcontainer">
                <h1 className="title">ALPHA</h1>
                <img className="logo" src={AlphaB} alt="AlphaB" />
              </div>
              <h2 className="sub-title">la lecture accessible pour tous</h2>
              <button className="button">
                <a href="/texte" id="button-link">
                  Commencer
                </a>
              </button>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <img className="bigImg" src={Alpha} alt="déco" />
          </Col>
        </Row>
        <Row>
          <div className="home">
            <div style={{ display: 'flex', justifyContent: 'space-evenly', padding: 5, width: '50%', margin: 'auto' }}>
              <img className="quotesLeft" src={quoteLeft} alt="quoteLeft" />
              <p className="quotes">
                {" En France, 6 à 8% de la population est concernée par des troubles appelés 'Dys': dyslexies, dyspraxie, dysphasie. "}
              </p>
              <img className="quotesRight" src={quoteRight} alt="quotesRight" />
            </div>
            <div className="quote">
              <p id="Abdou">Inserm</p>
            </div>
          </div>
        </Row>

        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <img src={HomTop} alt="img1" id="design-top" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={2}>
            <img src={HomCenterLeft} alt="img2" id="design-left-center" />
          </Col>
          <Col xs={12} sm={12} md={12} lg={4}>
            {' '}
            <p className="textHome" data-aos="fade-up">
              La lecture est omniprésente dans notre quotiden. <br></br>Pour AlphaB, il est essentiel d’apporter une aide concrète à toutes personnes
              en difficulté.
            </p>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <img src={HomCenterRight} alt="img3" id="design-right-center" />
          </Col>
        </Row>
        <Row>
          <Col xs={0} sm={0} md={6} lg={6}>
            <img src={HomCenterLeft2} alt="imgleft2" id="design-left2" />
          </Col>

          <Col xs={12} sm={12} md={12} lg={4}>
            <p className="textHome2" data-aos="fade-up">
              AlphaB a créé une solution adaptée et efficace pour toutes les personnes nécessitant une assistance lors de la lecture.
            </p>
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <img src={HomCenterRight2} alt="img4" id="design-right2" />
          </Col>
        </Row>
        <Row>
          {/* <div className="home_bubble">
              <div className="bubble b_one"></div>
              
              <div className="bubble b_three"></div>
              <div className="bubble b_four"></div>
              <div className="bubble b_five"></div>
              <div className="bubble b_six"></div>
              <div className="bubble b_seven"></div>
              <div className="bubble b_height"></div>
            </div> */}
          <Col xs={12} sm={12} md={12} lg={2}></Col>
          <Col xs={12} sm={12} md={12} lg={4}>
            <p className="textHome3" data-aos="fade-up">
              Découvrez des outils simples et pratiques qui vous redonneront confiance en vous.<br></br> La lecture de vos textes adaptés à vos
              besoins n’aura jamais été aussi facile !!!<br></br> Une aide précieuse à destination de toutes les personnes atteintes de troubles de la
              lecture (dyslexie, dyspraxie, dysphasie...).
            </p>
          </Col>

          <div className="conteneur4">
            <p className="textHome4" data-aos="fade-up"></p>
          </div>
          <div className="conteneur5">
            <p className="textHome5" data-aos="fade-up"></p>
          </div>
          <Col xs={12} sm={12} md={12} lg={6}>
            <div className="conteneur6">
              <img id="imgGirl" src={svg} alt="img" />
            </div>
          </Col>
        </Row>
        <Row>
          <div className="home">
            <div style={{ display: 'flex', justifyContent: 'space-evenly', padding: 5, width: '50%', margin: 'auto', paddingTop: '50px' }}>
              <img className="quotesLeft" src={quoteLeft} alt="quoteLeft" />
              <p className="quotes">
                {
                  "Depuis tout petit, je confonds certaines lettres entrainant des difficultés de lecture. Grâce à AlphaB, j'ai trouvé l'outil qui atténue mes gênes au quotidien. "
                }
              </p>
              <img className="quotesRightAbdu" src={quoteRight} alt="quotesRightAbdu" />
            </div>
            <div className="quote">
              <p id="Abdou">Abdou K.</p>
            </div>
          </div>
        </Row>
        <Row>
          <CarouselOpinions />
        </Row>
      </Container>
      <Footer />
    </>
  );
}
AOS.init();
export default Home;
