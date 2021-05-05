import React, { useEffect, useState } from 'react';
import Marker from './Marker/Marker.tsx';
import CardMaterialUi from '../Card/Card';
import FilterKm from './FilterKm';
import InpuPredictionsOnInputChangetSearch from '../AutoComplete/InputSearch';
import CustomizedDialogs from '../Modal/Modal';
import FilterNote from '../FilterNote/FilterNote';

import GoogleMapReact from 'google-map-react';
import './CardMaps.css';
import { Container, Row } from 'react-bootstrap';

const key = 'AIzaSyAURsom7c-jmbNERN0wVqb4OzVten2Hy24'; // clef google map api

function CardMaps() {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [error, setError] = useState('');
  const [dataPlace, setDataPlace] = useState([]);
  const [dataCard, setDataCard] = useState([]);
  const [idDetail, setIdDetail] = useState('');
  const [open, setOpen] = useState(false);
  const [radius, setRadius] = useState(10);
  const center = { lat: lat, lng: lng };
  const resultRadius = radius * 1000;

  console.log(`I am radius : ${radius}`);

  useEffect(() => {
    // a ne faire qu'une seule fois si localisation est presente
    if (navigator.geolocation && lat === null && lng === null) {
      navigator.geolocation.getCurrentPosition(location, errorLocation);
    }
  }, []);

  useEffect(() => {
    const presentLocation = lat !== null && lng !== null;
    // si mes state lat et lng sont different de nul appel ma function resquestApi
    if (presentLocation) {
      resquestApi();
    }
  }, [lat, lng]); // si lat et lng on une nouvelle attribution de valeurs relance le useEffect

  useEffect(() => {
    const presentRadius = radius !== null;
    if (presentRadius) {
      resquestApi();
    }
  }, [radius]);

  const location = (position) => {
    setLat(position.coords.latitude);
    setLng(position.coords.longitude);
  };

  const errorLocation = (error) => {
    setOpen(!open);
    switch (error.code) {
      case error.PERMISSION_DENIED:
        return setError('Géolocalisation refusée');
      case error.POSITION_UNAVAILABLE:
        return setError('Position inconnue');
      case error.TIMEOUT:
        return setError('Chargement de la positon expiré');
      case error.UNKNOWN_ERROR:
        return setError('Erreur inconnue');
      default:
        return setError('Erreur inconnue');
    }
  };

  const resquestApi = async () => {
    const cors = 'https://api.allorigins.win/get?url=';
    const endpoint = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=orthophoniste&location=${lat},${lng}&radius=${resultRadius}&keyword=cruise&key=${key}`;
    const encodedEndpoint = encodeURIComponent(endpoint);
    try {
      const resquest = await fetch(`${cors}${encodedEndpoint}`);
      const json = await resquest.json();
      const { results } = JSON.parse(json.contents);
      setDataPlace(results);
      setDataCard(results);
    } catch (e) {
      console.log(`Error : ${e}.`);
    }
  };

  const filterMarker = (id) => {
    {
      dataPlace
        .filter((el) => el.place_id.includes(id)) //filtre dataPlace au niveau de place_id qui contient (id)
        .map((filterName) => {
          setDataCard([filterName]); // assignation du nouveau tableau filtré a dataCard
          setIdDetail(filterName.place_id); // assignation de l'id de l'object filtré a idDetail
        });
    }
  };

  const ResetCardAndColor = () => {
    setIdDetail('');
    setDataCard(dataPlace);
  };

  const rating = (newRating) => {
    {
      dataPlace
        .filter((el) => el.rating === newRating)
        .map((filterRating) => {
          setDataPlace([filterRating]);
        });
    }
  };

  return (
    <Container>
      <h1>Map</h1>
      {/* appel du props et attribution des nouvelle lat et lnt setLat et setLng */}
      <InpuPredictionsOnInputChangetSearch newLat={(latInput) => setLat(latInput)} newLng={(lngInput) => setLng(lngInput)} />
      <div id="map">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyAURsom7c-jmbNERN0wVqb4OzVten2Hy24',
          }}
          center={center}
          zoom={12}>
          <Marker lat={lat} lng={lng} color="red" text="my-marker" />
          {dataPlace &&
            dataPlace.map((data) => (
              <Marker
                key={data.place_id}
                lat={data.geometry.location.lat}
                lng={data.geometry.location.lng}
                idSpecifique={idDetail}
                id={data.place_id}
                idRecup={(id) => filterMarker(id)} /* recuperation de l'id du markers pour filtre */
              />
            ))}
        </GoogleMapReact>
        {error && <CustomizedDialogs error={error} open={open} />}
      </div>
      <div className="container-filter">
        <FilterKm changeRadius={(radius) => setRadius(radius)} />
        <FilterNote changeRating={(newValue) => rating(newValue)} />
      </div>
      {idDetail && (
        <div className="btn-holder">
          <button className="btn btn-1 hover-filled-slide-left" onClick={ResetCardAndColor}>
            <span>Retour</span>
          </button>
        </div>
      )}
 
      <Row>
        {dataCard &&
          dataCard.map((data) => (
            <CardMaterialUi
              key={data.place_id}
              name={data.name}
              adress={data.formatted_address}
              initiale={data.name.charAt(0)}
              starsRating={data.rating}
              cardLat={data.geometry.location.lat}
              cardLng={data.geometry.location.lng}
            />
          ))}
      </Row>
    </Container>
  );
}
export default CardMaps;
