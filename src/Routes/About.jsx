import React from 'react';
import img012 from '../assets/imagenes/img012.jpg';
import imgpostre01 from '../assets/imagenes/imgpostre01.jpg'; // Importa la nueva imagen
import concepto02 from '../assets/imagenes/concepto02.jpg'
import ia_03 from '../assets/imagenes/ia_03.png'

const titleStyle = {
  fontFamily: 'roboto, sans-serif', // Cambia la fuente del texto
  color: '#eae6ea', // Cambia el color del texto
  fontWeight: 'bold', // Cambia el peso de la fuente a negrita
  lineHeight: '1.2', // Cambia la altura de la línea
};

const subtitleStyle = {
  fontFamily: 'Poppins, sans-serif', // Cambia la fuente del texto
  color: '#d5cdd5', // Cambia el color del texto
  fontWeight: '', // Establece el peso de la fuente a normal
  lineHeight: '1.5', // Cambia la altura de la línea
};

export const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-start">
          <h1 style={{ ...titleStyle, fontSize: '2.8rem' }}>Sobre mi</h1>
          <h2 style={{ ...subtitleStyle, fontSize: '1.2rem' }}>Soy Arquitecta, Desarrolladora Full stack y Diseñadora UX/UI, con formación en tecnologías como MongoDB, Express, React, Node.js y JavaScript. Estoy capacitada para crear aplicaciones web completas y combinar interfaces intuitivas con soluciones robustas y escalables.</h2>
        </div>
        <div className="col-md-6">
          <img src={ia_03} alt="ia_03" style={{ maxWidth: '100%', maxHeight: '600px' }} />
        </div>
      </div>
    </div>
  );
};
