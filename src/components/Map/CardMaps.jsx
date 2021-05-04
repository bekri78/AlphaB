import React, { useEffect, useState } from 'react';
import Marker from './Marker/Marker.tsx';
import Marker2 from './Marker/Marker2.tsx';
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
  const [dataRating, setDataRating] = useState([]);
  const [idDetail, setIdDetail] = useState('');
  const [resetBtn, setResetBtn] = useState(false);
  const [open, setOpen] = useState(false);
  const [radius, setRadius] = useState(5);
  const center = { lat: lat, lng: lng };
  const resultRadius = radius * 1000;

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
      setDataRating(results);
    } catch (e) {
      console.log(`Error : ${e}.`);
    }
  };

  const filterMarker = (id) => {
    {
      dataPlace
        .filter((el) => el.place_id.includes(id)) //filtre dataPlace au niveau de place_id qui contient (id)
        .map((filterName) => {
          setDataRating([filterName]); // assignation du nouveau tableau filtré a dataCard
          setIdDetail(filterName.place_id); // assignation de l'id de l'object filtré a idDetail
          setResetBtn(true); // assignation de l'id de l'object filtré a idDetail
        });
    }
  };

  const ResetCardAndColor = () => {
    setIdDetail('');
    setDataCard(dataPlace);
    setDataRating(dataPlace);

    setResetBtn(false);
  };

  const rating = (newValue) => {
    console.log('rating', newValue);
    let arrayRating = [];
    {
      dataPlace
        .filter((el) => el.rating === newValue)
        .map((filterRating) => {
          arrayRating.push(filterRating);
          setDataCard(arrayRating);
          setDataRating(arrayRating);
          setResetBtn(true);
        });
    }
  };

  return (
    <Container>
      <h3>Les professionnels</h3>
      {/* appel du props et attribution des nouvelle lat et lnt setLat et setLng */}
      <div className="container-filter">
        <InpuPredictionsOnInputChangetSearch newLat={(latInput) => setLat(latInput)} newLng={(lngInput) => setLng(lngInput)} />
        <div style={{ display: 'flex' }}>
          <FilterKm changeRadius={(radius) => setRadius(radius)} />
          <FilterNote
            changeRating={(newValue) => {
              rating(newValue);
            }}
          />
        </div>
      </div>
      <div id="map">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyAURsom7c-jmbNERN0wVqb4OzVten2Hy24',
          }}
          center={center}
          zoom={12}>
          <Marker2 lat={lat} lng={lng} color="red" text="my-marker" />
          {dataCard &&
            dataCard.map((data) => (
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
      {resetBtn && (
        <div className="btn-holder">
          <button className="btne btn-1 hover-filled-slide-left" onClick={ResetCardAndColor}>
            <span>Retour</span>
          </button>
        </div>
      )}

      <Row>
        {dataRating &&
          dataRating.map((data) => (
            <CardMaterialUi
              key={data.place_id}
              placeId={data.place_id}
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
