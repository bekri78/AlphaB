import React from 'react';
import './Marker.css';
/* comparer 2 valeurs 
1 : créer une props qui récupère une valeur unique 
2 : au click sur le marker, récupérer une autre props qui aura en paramètre l'id qui va servir de filtre*/

const Marker = (props: any) => {
  const { color, name, id, idSpecifique } = props;

  return (
    <div>
      <div
        className="pin bounce"
        style={{ backgroundColor: id === idSpecifique ? 'green' : 'blue', cursor: 'pointer' }}
        title={name}
        onClick={() => {
          props.idRecup(id);
        }}
      />
      <div className="pulse" />
    </div>
  );
};

export default Marker;
