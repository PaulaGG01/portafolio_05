import React from 'react';
import img012 from '../assets/imagenes/img012.jpg';
import imgpostre01 from '../assets/imagenes/imgpostre01.jpg'; // Importa la nueva imagen
import idea02 from '../assets/imagenes/idea02.jpg'
import ia_06 from '../assets/imagenes/ia_06.png'

const titleStyle = {
  fontFamily: 'roboto, sans-serif', // Cambia la fuente del texto
  color: '#eae6ea', // Cambia el color del texto
  fontWeight: 'bold', // Cambia el peso de la fuente a negrita
  lineHeight: '1.2', // Cambia la altura de la línea
};

const subtitleStyle = {
  fontFamily: 'roboto, sans-serif', // Cambia la fuente del texto
  color: '#d5cdd5', // Cambia el color del texto
  fontWeight: '', // Establece el peso de la fuente a normal
  lineHeight: '1.0', // Cambia la altura de la línea
};

export const Login = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-start">
          <h1 style={{ ...titleStyle, fontSize: '3.0rem' }}>Página en construcción</h1>
          <h3 style={{ ...subtitleStyle, fontSize: '1.4rem' }}>Pronto podrás ver este contenido!</h3>
        </div>
        <div className="col-md-6">
          <img src={ia_06} alt="" style={{ ia_06maxWidth: '100%', maxHeight: '600px' }} />
        </div>
      </div>
    </div>
  );
};