import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import img015 from '../assets/imagenes/img015.jpg'; // Importa la nueva imagen
import green from '../assets/imagenes/green.jpg'
import idea02 from '../assets/imagenes/idea02.jpg'
import ia_06 from '../assets/imagenes/ia_06.png'



export const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        {/* Columna del formulario */}
        <div className="col-md-6">
          <div className="mx-auto" style={{ width: "80%", marginTop: '40px' }}>
            <Form style={{ borderTop: '0px solid white', padding: '20px' }}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label className="text-white">Nombre</Form.Label>
                <Form.Control type="name" placeholder="Escribe tu nombre" style={{ borderColor:'#eae6ea'}} />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-white">Correo electrónico</Form.Label>
                <Form.Control type="email" placeholder="Escribe tu correo electrónico" style={{ borderColor:'#547d70'}} />
                <Form.Text className="text-muted">
                  {/* Nosotros nunca compartiremos esta información con nadie más. */}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="text-white">Consulta</Form.Label>
                <Form.Control type="Consulta" placeholder="Escriba tu consulta" style={{ borderColor:'#547d70'}} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check className="text-white" type="checkbox" label="Check me out" style={{ borderColor:'#547d70'}} />
              </Form.Group>

              <Button style={{ backgroundColor: '#3da63d', border: '0' }} type="submit">
                Enviar
              </Button>
            </Form>
          </div>
        </div>

        {/* Columna de la imagen */}
        <div className="col-md-6 d-flex align-items-end justify-content-end">
          <img src={ia_06} alt="ia_06" style={{ maxWidth: '100%', maxHeight: '600px' }} />
        </div>
      </div>
    </div>
  );
};




