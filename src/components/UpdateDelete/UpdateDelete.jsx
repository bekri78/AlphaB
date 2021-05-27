/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import firebase from '../../utils/firebaseConfig';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Rating from '@material-ui/lab/Rating';
import Modal from 'react-bootstrap/Modal'
import { UidContext } from '../UidContext';
 
import './UpdateDelete.css';
function UpdateDelete({ item, center }) {
  const [update, setUpdate] = useState(false);
  const [firstnameUpdate, setFirstNameUpdate] = useState(null);
  const [lastnameUpdate, setlastNameUpdate] = useState(null);
  const [jobUpdate, setJobUpdate] = useState(null);
  const [messageUpdate, setMessageUpdate] = useState(null);
  const [ratingUpdate, setRatingUpdate] = useState(null);
  const uid = useContext(UidContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)

  const authorCheck = () => {
    return item.uid === uid ? true : false;
  };
  authorCheck();
  const updateItem = () => {
    let avis = firebase.database().ref('avisDB').child(item.id); // recup id
    if (firstnameUpdate !== null) {
      avis.update({
        firstname: firstnameUpdate,
      });
    }
    if (lastnameUpdate !== null) {
      avis.update({
        lastname: lastnameUpdate,
      });
    }
    if (jobUpdate !== null) {
      avis.update({
        job: jobUpdate,
      });
    }
    if (messageUpdate !== null) {
      avis.update({
        message: messageUpdate,
      });
    }
     
    if (ratingUpdate !== null) {
      avis.update({
        rating: ratingUpdate,
      });
    }
    setUpdate(false);
    handleClose()
  };

  const deleteItem = () => {
    let avisDelete = firebase.database().ref('avisDB').child(item.id);
    avisDelete.remove();
  };
  
  return (
    <>
      {update === false && (
      
        <Card style={{ width: '18rem', height: 'auto', margin: center ? 'auto' : '2%' }}>
          <Card.Body>
            <Card.Title>
              {item.firstname} {item.lastname}
            </Card.Title>
            <Card.Subtitle className="mb-1 text-muted">Metier : {item.job}</Card.Subtitle>
            <div style={{display:'flex'}}>
            Note: <Rating style={{ paddingLeft: '1.25rem' }} name="read-only" value={item.rating} readOnly />
          </div>
            <Card.Text> Avis: {item.message}</Card.Text>
            {authorCheck() && (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: 0, height: 'auto' }}>
                <Button variant="primary" size="sm" onClick={handleShow}>
                  modifier
                </Button>
                <Button variant="warning" size="sm" onClick={deleteItem}>
                  supprimer
                </Button>
              </div>
            )}
          </Card.Body>
          <Card.Footer className="text-muted">Le: { item.dateFormated}</Card.Footer>
        </Card>
      
      )}

<Modal show={show} onHide={handleClose}>
<Modal.Title style={{textAlign:'center'}}>Modification</Modal.Title>
        <Form style={{padding:'6%'}}>
          <Form.Group controlId="formnom">
            <Form.Label>nom</Form.Label>
            <Form.Control type="text" defaultValue={item.firstname} onChange={(e) => setFirstNameUpdate(e.target.value)} placeholder="nom" />
          </Form.Group>
          <Form.Group controlId="formprenom">
            <Form.Label>prenom</Form.Label>
            <Form.Control type="text" defaultValue={item.lastname} onChange={(e) => setlastNameUpdate(e.target.value)} placeholder="prenom" />
          </Form.Group>
          <Form.Group controlId="formjob">
            <Form.Label>job</Form.Label>
            <Form.Control type="text" defaultValue={item.job} onChange={(e) => setJobUpdate(e.target.value)} placeholder="job" />
          </Form.Group>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Note</Form.Label>
            <Form.Control as="select" defaultValue={item.rating} onChange={(e) => setRatingUpdate(parseInt(e.target.value))} custom>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="message">
            <Form.Label>Votre message </Form.Label>
            <Form.Control as="textarea" defaultValue={item.message} onChange={(e) => setMessageUpdate(e.target.value)} rows={3} />
          </Form.Group>
        </Form>
        <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>Close</Button>
    <Button variant="primary" onClick={updateItem}>Save changes</Button>
  </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateDelete;
