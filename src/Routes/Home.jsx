import React from 'react';
import img012 from '../assets/imagenes/img012.jpg';
import imgpostre01 from '../assets/imagenes/imgpostre01.jpg'; // Importa la nueva imagen
import idea02 from '../assets/imagenes/idea02.jpg'
import concepto02 from '../assets/imagenes/concepto02.jpg'
import ia_02 from '../assets/imagenes/ia_02.png'
import gi01 from '../assets/imagenes/gi01.png'
import in01 from '../assets/imagenes/in01.png'


const titleStyle = {
  fontFamily: 'Roboto, sans-serif', // Cambia la fuente del texto
  color: '#eae6ea', // Cambia el color del texto
  fontWeight: 'bold', // Cambia el peso de la fuente a negrita
  lineHeight: '1.2', // Cambia la altura de la línea
};

const subtitleStyle = {
  fontFamily: 'Roboto, sans-serif', // Cambia la fuente del texto
  color: '#d5cdd5', // Cambia el color del texto
  fontWeight: 'normal', // Establece el peso de la fuente a normal
  lineHeight: '1.5', // Cambia la altura de la línea
};

const socialIconStyle = {
  width: '45px', // Tamaño de los iconos
  height: '45px',
  margin: '0 12px', // Espaciado entre los iconos
};

export const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-start">
          <h2 style={{ ...titleStyle, fontSize: '2.8rem' }}>PAULA GARCIA GONZALEZ</h2>
          <h3 style={{ ...subtitleStyle, fontSize: '1.2rem' }}>Arquitecta</h3>
          <h3 style={{ ...subtitleStyle, fontSize: '1.2rem' }}>Desarrolladora Full Stack</h3>
          <h3 style={{ ...subtitleStyle, fontSize: '1.2rem' }}>Diseñadora UXUI</h3>
          <br></br>
          <div className="social-icons">
            <a href="https://github.com/PaulaGG01" target="_blank" rel="noopener noreferrer">
              <img src={gi01} alt="GitHub" style={socialIconStyle} />
            </a>
            <a href="https://www.linkedin.com/in/paula-garcia-472a3833/" target="_blank" rel="noopener noreferrer">
              <img src={in01} alt="LinkedIn" style={socialIconStyle} />
            </a>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img src={ia_02} alt="ia_02" style={{ maxWidth: '100%', maxHeight: '600px', border: '0' }} />
        </div>
      </div>
    </div>
  );
};








