import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import landing from '../assets/imagenes/landing.jpg';
import restau from '../assets/imagenes/restau.jpg';
import crud from '../assets/imagenes/crud.jpg';
import portafolio01 from '../assets/imagenes/portafolio01.png'
import api01 from '../assets/imagenes/api01.png'
import crud01 from '../assets/imagenes/crud01.png'
import ayurveda01 from '../assets/imagenes/ayurveda01.jpg'

// Estilo para la tarjeta
const cardStyle = {
  width: '20rem', 
  height: '16rem', // Altura reducida en un 40%
  border: '0',
  marginTop: '50px',
  backgroundColor: '#9a9b9b',
  color: '#ffffff',
  fontFamily: 'Roboto, sans-serif'
};

// Estilo para el título y el texto de la tarjeta
const titleStyle = {
  fontSize: '1.1rem', // Ajusta este tamaño según lo que necesites
  fontWeight: 'regular'
};

const textStyle = {
  fontSize: '0.875rem', // Ajusta este tamaño según lo que necesites
  lineHeight: '1.4'
};

export const Product = () => {
  return (
    <div className="container">
      <div className="row justify-content-center text-center">
        {/* Primera fila de cards */}
        <div className="col-lg-4 mb-4">
          <Card style={cardStyle}>
            <Card.Img variant="top" src={landing} />
            <Card.Body>
              <Card.Title style={titleStyle}>Landing page</Card.Title>
              <Card.Text style={textStyle}>
                {/* Some quick example text to build on the card title and make up the
                bulk of the card's content. */}
              </Card.Text>
              <Link to="https://github.com/PaulaGG01/PROYECTO_01?tab=readme-ov-file">
                <Button variant="success" style={{ backgroundColor: '#3da63d', border: '0' }}>Ir a proyecto</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>

        <div className="col-lg-4 mb-4">
          <Card style={cardStyle}>
            <Card.Img variant="top" src={restau} />
            <Card.Body>
              <Card.Title style={titleStyle}>Página restaurante</Card.Title>
              <Card.Text style={textStyle}>
                {/* Some quick example text to build on the card title and make up the
                bulk of the card's content. */}
              </Card.Text>
              <Link to="https://github.com/PaulaGG01/restaurantepgg.github.io">
                <Button variant="success" style={{ backgroundColor: '#3da63d', border: '0' }}>Ir a proyecto</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        
        <div className="col-lg-4 mb-4">
          <Card style={cardStyle}>
            <Card.Img variant="top" src={crud01} />
            <Card.Body>
              <Card.Title style={titleStyle}>Crud con Javascript</Card.Title>
              <Card.Text style={textStyle}>
                {/* Some quick example text to build on the card title and make up the
                bulk of the card's content. */}
              </Card.Text>
              <Link to="https://github.com/PaulaGG01/CRUD02.github.io?tab=readme-ov-file">
                <Button variant="success" style={{ backgroundColor: '#3da63d', border: '0' }}>Ir a proyecto</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="row justify-content-center text-center">
        {/* Segunda fila de cards */}
        <div className="col-lg-4 mb-4">
          <Card style={cardStyle}>
            <Card.Img variant="top" src={portafolio01} />
            <Card.Body>
              <Card.Title style={titleStyle}>Página Portafolio</Card.Title>
              <Card.Text style={textStyle}>
                {/* Some quick example text to build on the card title and make up the
                bulk of the card's content. */}
              </Card.Text>
              <Link to="">
                <Button variant="success" style={{ backgroundColor: '#3da63d', border: '0' }}>Ir a proyecto</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>

        <div className="col-lg-4 mb-4">
          <Card style={cardStyle}>
            <Card.Img variant="top" src={ayurveda01} />
            <Card.Body>
              <Card.Title style={titleStyle}>E commerce: Planet Ayurveda</Card.Title>
              <Card.Text style={textStyle}>
                {/* Some quick example text to build on the card title and make up the
                bulk of the card's content. */}
              </Card.Text>
              <Link to="">
                <Button variant="success" style={{ backgroundColor: '#3da63d', border: '0' }}>Ir a proyecto</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>

        <div className="col-lg-4 mb-4">
          <Card style={cardStyle}>
            <Card.Img variant="top" src={api01} />
            <Card.Body>
              <Card.Title style={titleStyle}>Dashboard: información países</Card.Title>
              <Card.Text style={textStyle}>
                {/* Some quick example text to build on the card title and make up the
                bulk of the card's content. */}
              </Card.Text>
              <Link to="https://github.com/PaulaGG01/api_03pgg/tree/main">
                <Button variant="success" style={{ backgroundColor: '#3da63d', border: '0' }}>Ir a proyecto</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};





