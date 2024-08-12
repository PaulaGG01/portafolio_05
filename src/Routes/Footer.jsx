import React from 'react';
import { Link } from 'react-router-dom';
import logoinstagram from '../assets/imagenes/logoinstagram.png';
import logofacebook from '../assets/imagenes/logofacebook.png';

const Footer = () => {
  return (
    <div className="footer" style={{ padding: '18px', backgroundColor: '#6b4f6b', border: '0', marginTop: '0px', color: '#ffffff' }}>
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-6">
          <p style={{ fontSize: '14px', fontFamily: 'Poppins, sans-serif', textAlign: 'center' }}>
            +569 73810442 - pgarcia.fullstack@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}


export default Footer;




