import React from 'react';
import './Marker.css';

const Marker = (props: any) => {
  const { name, id, idSpecifique } = props; // recuperation props
  // id : assignation d'une id pour chaques marqueurs
  //idSpecifique : recuperation de l'id au click dans l'object dans  tableau filtré cardMaps voir filterMarker()
  return (
    <div>
      <div
        className="pin bounce"
        style={{ backgroundColor: id === idSpecifique ? 'green' : 'blue', cursor: 'pointer' }}
        title={name}
        onClick={() => {
          props.idRecup(id); /* envoie de l'id du markers  a cardMaps pour filtre */
        }}
      />
      <div className="pulse" />
    </div>
  );
};

export default Marker;
