import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CheckoutSteps(props) {
  return (
    <Row className='checkout-steps'>
      <Col className={props.step1 ? 'active' : ''}>Acceder</Col>
      <Col className={props.step2 ? 'active' : ''}>Envio</Col>
      <Col className={props.step3 ? 'active' : ''}>detalles de pago</Col>
      <Col className={props.step4 ? 'active' : ''}>Terminar Orden</Col>
    </Row>
  );
}
