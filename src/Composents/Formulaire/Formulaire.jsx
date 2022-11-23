import "./Formulaire.css";
import React from "react";
import { Button, Col, Form } from "react-bootstrap";

function Formulaire() {
  return (
    <Col className='col-4 py-3 px-4 mt-5'>
      <Form className="bg-light p-3 rounded-2 text-start shadow"> 
      <h1 className="text-muted">Add New Users</h1>
      <Form.Group className="mb-3" controlId="formBasicNom">
        <Form.Label className="fw-bold">Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter nom"  className="w-75"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="fw-bold">Firt Name</Form.Label>
        <Form.Control type="text" placeholder="Enter prenom"  className="w-75"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="fw-bold">Username</Form.Label>
        <Form.Control type="text" placeholder="Enter nom d'utilisateur"  className="w-75"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="fw-bold">Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password"  className="w-75"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="fw-bold">User type</Form.Label>
        <Form.Select aria-label="Default select example" className="w-50">
          <option>Aucun</option>
          <option value="1">Homme</option>
          <option value="2">Femme</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary">Canced</Button>
      <Button variant="primary  ms-2">Add</Button>
    </Form>
    </Col>
  );
};

export default Formulaire;
