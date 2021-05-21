import React, { useState, useEffect } from 'react';
import Joy from './Img/joy.svg';
import firebase from '../../utils/firebaseConfig';
import UpdateDelete from '../UpdateDelete/UpdateDelete';
import { Carousel, Switch, Card } from 'antd';

import './Avis.css';
function Avis() {
  const [avisList, setAvisList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [affichage, setAffichage] = useState(false);
  const [affichageCardLoader, setAffichageCardLoader] = useState(true);

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

  const onChange = (checked) => {
    setLoading(!checked);
    setAffichage(!affichage);
    setAffichageCardLoader(!affichageCardLoader);
  };

  return (
    <div style={{ margin: 'auto' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '5%' }}>
        <h2 style={{ textAlign: 'center' }}>Ils sont conquis et vous ?</h2>
        <img style={{ width: '30%' }} src={Joy} alt="joy" />
      </div>
      <div className="custom-shape-divider-bottom-1621548384">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z" className="shape-fill"></path>
        </svg>
      </div>
      <div style={{ backgroundColor: '#553ab8', height: 'auto' }}>
        <p className="topAvis">Top commentaire</p>
        <Carousel style={{ backgroundColor: '#553ab8' }} autoplay>
          {avisList && avisList.map((item, index) => <UpdateDelete item={item} center={true} key={index} />)}
        </Carousel>
        <p className="allAvis">Decouvrire tous les avis</p>

        <Switch style={{ marginLeft: '20%' }} checked={!loading} onChange={onChange} />
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '2%' }}>
          <Card
            style={{ width: 300, margin: 16, display: affichageCardLoader ? 'block' : 'none', backgroundColor: '#553ab8' }}
            loading={loading}></Card>
          <Card
            style={{ width: 300, margin: 16, display: affichageCardLoader ? 'block' : 'none', backgroundColor: '#553ab8' }}
            loading={loading}></Card>
          <Card
            style={{ width: 300, margin: 16, display: affichageCardLoader ? 'block' : 'none', backgroundColor: '#553ab8' }}
            loading={loading}></Card>

          {avisList && affichage && avisList.map((item, index) => <UpdateDelete item={item} center={false} key={index} />)}
        </div>
      </div>
    </div>
  );
}

export default Avis;
