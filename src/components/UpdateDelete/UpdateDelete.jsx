/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';

import firebase from '../../utils/firebaseConfig';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Modal, Rate } from 'antd';
import { UidContext } from '../UidContext';
import './UpdateDelete.css';
function UpdateDelete({ item }) {
  const [update, setUpdate] = useState(false);
  const [firstnameUpdate, setFirstNameUpdate] = useState(null);
  const [lastnameUpdate, setlastNameUpdate] = useState(null);
  const [jobUpdate, setJobUpdate] = useState(null);
  const [messageUpdate, setMessageUpdate] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [ratingUpdate, setRatingUpdate] = useState(null);
  const uid = useContext(UidContext);

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
  };

  const deleteItem = () => {
    let avisDelete = firebase.database().ref('avisDB').child(item.id);
    avisDelete.remove();
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    updateItem();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      {update === false && (
        <Card style={{ width: '18rem', margin: 'auto' }}>
          <Card.Body>
            <Card.Title>
              {item.firstname} {item.lastname}
            </Card.Title>
            <Card.Subtitle className="mb-1 text-muted">Metier : {item.job}</Card.Subtitle>
            Note:
            <Rate style={{ paddingLeft: '1.25rem' }} disabled value={item.rating} />
            <Card.Text> Avis: {item.message}</Card.Text>
            {authorCheck() && (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Button variant="primary" onClick={showModal}>
                  modifier
                </Button>
                <Button variant="warning" onClick={deleteItem}>
                  supprimer
                </Button>
              </div>
            )}
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
      )}

      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form>
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
      </Modal>
    </>
  );
}

export default UpdateDelete;
