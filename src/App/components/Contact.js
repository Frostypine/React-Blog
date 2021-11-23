import './Components.css';
import {  Modal, Container} from 'react-bootstrap'
import React, { useState, useEffect} from 'react'
  //for the modal


  const SubmitModal  = () => {
    const handleClose = () => setShow(false);

        //for the modal
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

    return (
    

        <Container >
        <Modal  show={show} onHide={handleClose}>
          <Modal.Header className="bg-dark text-white p-3" closeButton>
            <Modal.Title >Alert</Modal.Title>
           Thank you, your message was submitted successfully!  
          </Modal.Header>
            
        </Modal>
        </Container>

        ); 
  }

const Contact = () => { return (

  

<form className = "mx-auto form placeholdertext">
<h3 className = "placeholdertext">Contact </h3>
<label> 
    email:
<input className ="email-box"  />
</label>
<br />
<label> 
    message: 
<input className ="message-box bg-light m-1 text-secondary" size="lg" type="text" as="textarea" placeholder="description" name="description"  />
</label>
<br />
<button>Submit</button>

   <br/>
    <br/>
</form>

); }





export default Contact; 



