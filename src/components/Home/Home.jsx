import React from 'react';
import Avis from '../Avis/Avis';
import Footer from '../Footer/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import './Home.css';
import 'aos/dist/aos.css';
import Dyslexy from './Img/dyslexy.png';
import Dyslexy2 from './Img/dys2Img.png';
import Book from './Img/Aaa.svg';
import Tech from './Img/tecghh.png';
import Functionnality from '../Functionnality/Block'

function Home() {
  return (
    <div style={{ whith: 'auto', height: 'auto', margin: 0, backgroundColor: 'white' }}>
      <Container fluid style={{ height: '360px', backgroundColor: '#25a954', paddingTop: '2%' }} data-aos="fade-in" >
        <Row className="d-flex justify-content-center">
          {' '}
          <Col sm={12} xs={12} md={6} lg={6} className="d-inline-flex">
            <p id="titleHome" data-aos="fade-right"  data-aos-duration="1500">
              Alpha<span id="logoHome"  data-aos="fade-down"  data-aos-duration="1500"></span>
            </p>
            <p className="textHome" data-aos="fade-up"  data-aos-duration="1500">L’appli facilitateur de lecture</p>
          </Col>
          <Col sm={12} xs={12} md={6} lg={6}>
            <img style={{ width: '80%' }} src={Book} id="book" alt="book" data-aos="fade-in"  data-aos-duration="1000" />
          </Col>
        </Row>
      </Container>

      <div className="custom-shape-divider-top-1621515812" data-aos="fade-in" >
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 0L0 0 892.25 114.72 1200 0z" className="shape-fill"></path>
        </svg>
      </div>
      <div className="custom-shape-divider-bottom-1621514761"  >
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 0L0 0 892.25 114.72 1200 0z" className="shape-fill"></path>
        </svg>
      </div>
      <div
        style={{
          height: 'auto',
          width: '100%',
          backgroundColor: '#1b2437',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>
        <p className="textAlphaB" style={{ color: 'white', width: '50%' }}>
          8 à 12 % de la population mondiale est touchée par des troubles de la lecture et de l&apos;écriture spécifique selon l&apos;OMS. 
          Le plus connus etant la dyslexie. 
          La lecture est omniprésente dans notre quotiden.<br></br> Pour AlphaB, il est essentiel d’apporter une aide concrète à toutes personnes en
          difficulté.<br></br> AlphaB a créé une solution adaptée et efficace pour pour toutes les personnes nécessitant une assistance lors de la
          lecture.
        </p>
        <img src={Tech} alt="tech" style={{ width: '150px', height: '150px' }} data-aos="fade-down"  data-aos-duration="1000" />
      </div>

      <div
        style={{
          height: 'auto',
          width: '100%',
          backgroundColor: '#1b2437',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
        <img className="imgDys" src={Dyslexy} alt="dyslexy" data-aos="fade-in"  data-aos-duration="1000"/>
        <p className="dyslexiqueExplication" data-aos="fade-right"  data-aos-duration="1500">
          Comment pense un dyslexique ?<br></br> Ainsi, le dyslexique ne comprend que le sens partiel d&#39;un mot ou d&#39;une phrase, mais pas son
          sens global.<br></br> Le message d&#39;un texte peut lui échapper totalement ou partiellement.<br></br> De ce fait, il peut avoir des
          blocages dans la lecture et des difficultés dans différentes matières
        </p>
      </div>

      <div className="custom-shape-divider-top-1621291613">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
        </svg>
      </div>
       <Functionnality/>
      <div className="custom-shape-divider-bottom-1621292639">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
        </svg>
      </div>
      <div
        style={{
          height: 'auto',
          width: '100%',
          backgroundColor: '#ffcb36',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>
        <p style={{ color: 'black', fontFamily: 'Raleway', fontStyle: 'normal', fontWeight: 'normal', width: '50%' }}  data-aos="fade-left"  data-aos-duration="1800">
          Les facultés fondamentales (des dyslexiques), si elles ne sont pas réprimées ou détruites par les parents ou le système éducatif, peuvent se
          fondre en 2 traits caractéristiques :<br></br> une intelligence supérieure à la moyenne et une créativité exceptionnelle. Et de là peut
          émerger le talent véritable de la dyslexie : le don d’excellence. Comment pense un dyslexique ?<br></br> Ainsi, le dyslexique ne comprend
          que le sens partiel d&#39;un mot ou d&#39;une phrase, mais pas son sens global.<br></br> Le message d&#39;un texte peut lui échapper
          totalement ou partiellement.<br></br> De ce fait, il peut avoir des blocages dans la lecture et des difficultés dans différentes matières
        </p>
        <img className="imgDys" src={Dyslexy2} alt="dyslexy"  data-aos="fade-in"  data-aos-duration="1500"/>
      </div>
      <div className="custom-shape-divider-top-1621549109">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
        </svg>
      </div>

      <Avis />
      <Footer />
    </div>
  );
}

AOS.init();
export default Home;
