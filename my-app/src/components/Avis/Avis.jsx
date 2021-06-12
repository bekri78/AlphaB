import React, { useState, useEffect } from 'react';
import Joy from './Img/joy.svg';
import firebase from '../../utils/firebaseConfig';
import UpdateDelete from '../UpdateDelete/UpdateDelete';
import Carousel from 'react-bootstrap/Carousel'
import Fade from 'react-bootstrap/Fade'
import Button from 'react-bootstrap/Button'
import { useTranslation } from "react-i18next";
import AOS from 'aos';
 
import 'aos/dist/aos.css';

import './Avis.css';
function Avis() {
  const [avisList, setAvisList] = useState([]);
  const [indexe, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [t] = useTranslation("global");
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const avisDB = firebase.database().ref('avisDB');
    avisDB.on('value', (snapshot) => {
      console.log(snapshot.val());
      let previousList = snapshot.val();
      let list = [];
      for (let id in previousList) {
        list.push({ id, ...previousList[id] });
      } // traite la donnée pour add a chaque object un id pour pouvoir travailler dessus
      setAvisList(list);
    });
  }, []);

   
  return (
    <div style={{ margin: 'auto' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '5%' }} data-aos="fade-up"  data-aos-duration="1000">
        <h2 style={{ textAlign: 'center' }}>{t("avis.avisTitle")}</h2>
        <img style={{ width: '30%' }} src={Joy} alt="joy" />
      </div>
      <div className="custom-shape-divider-bottom-1621548384">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z" className="shape-fill"></path>
        </svg>
      </div>
      <div style={{ backgroundColor: '#553ab8', height: 'auto' }}>
        <p className="topAvis">{t("avis.topComment")}</p>
        <Carousel style={{ backgroundColor: '#553ab8' }} activeIndex={indexe} onSelect={handleSelect}>
      
          {avisList && avisList.map((item, index) =>  (
            <Carousel.Item>
          <UpdateDelete item={item} center={true} key={index} />
            </Carousel.Item>)
          )
        }
        </Carousel>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto', height: 'auto' }}>
          <p className="allAvis">{t("avis.decouvrir")}</p>
          <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
      >
        {open ? t("avis.masquer"):t("avis.afficher")}
      </Button>
        </div>
        <Fade in={open}>
        <div style={{ display: open ? 'flex':'none', justifyContent: 'center', flexWrap: 'wrap', padding: '2%' }}>
           
          
           

          {avisList &&  avisList.map((item, index) => <UpdateDelete item={item} center={false} key={index} />)}
        </div>
        </Fade>
      </div>
    </div>
  );
}
AOS.init();
export default Avis;
