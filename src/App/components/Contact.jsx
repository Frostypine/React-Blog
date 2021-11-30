import './Components.css';
import { Modal, Container, Form } from 'react-bootstrap'
import React,  { useState, useEffect } from 'react'


const SubmitModal = () => {
  //for the modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>

      <Container >
        <Modal show={show} onHide={handleClose}>
          <Modal.Header className="bg-dark text-white p-3" closeButton>
          {/* <Modal.Title >Thank you. </Modal.Title>  */}
             <div className=""> Thank you. Your message was submitted successfully!  </div>
          </Modal.Header>

        </Modal>
      </Container>
      <button className="mx-auto form" onClick={handleShow} >Submit</button>
    </>
  );

}

const Contact = () => {

  return (
    <>
      <br />
      <br />
    <div className="contact-form">
<Form >
  <Form.Group className="mx-auto mb-3 message-box" controlId="exampleForm.ControlInput1">
    <Form.Label>
    <h3 className="mx-auto placeholdertext email-box"> Email: </h3>
      </Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mx-auto mb-3 message-box" controlId="exampleForm.ControlTextarea1">
    <Form.Label><h3 className="placeholdertext ">Message:</h3></Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
        <br />



    
      <SubmitModal />
      <br />
      <br />
 
      <br />
    </div>
    </>
  );
}





export default Contact;



