import React, { useState, useEffect } from 'react';
import firebase from '../../utils/firebaseConfig';
import UpdateDelete from '../UpdateDelete/UpdateDelete';

function Avis() {
  const [avisList, setAvisList] = useState([]);

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
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {avisList && avisList.map((item, index) => <UpdateDelete item={item} key={index} />)}
    </div>
  );
}

export default Avis;
