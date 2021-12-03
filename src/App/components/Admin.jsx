//Admin.jsx
//React Blog Assignment 
//Array Bootcamp Fall 2021
//Katie Greenwald 

import './Components.css';
import { Form, Modal, Container, Button, FloatingLabel } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContent, selectContent } from '../../state/contentSlice';
import DataList from './DataList';



const Admin = ({ defaultContent, setShow, show }) => {
    const dispatch = useDispatch();
    const content = useSelector(selectContent);

    const [response, setResponse] = useState({ title: "" }) //we use this to keep track of the form input , see handleSubmit

    //this function takes the form responses and makes them into a key value pair, then puts it into 'response'
    const updateField = (e) => {
        setResponse({
            ...response,
            [e.target.name]: e.target.value
        })
    }

    const handleClose = () => setShow(false);

    //reset site to original content 
    const resetSite = () => {
        handleClose();
        localStorage.setItem("storedContent", JSON.stringify(defaultContent));
        window.location.reload(false);
    }

    //send updated library to redux store
    const handleSubmit = (e) => {
        e.preventDefault();
        handleClose();
        const updateContentArr = [
            ...content, response];

        if (response.title) {
            dispatch(addContent(updateContentArr));
            setResponse({});
        }
    }
    return (
        <Container>
            <Modal show={show} onHide={handleClose}width="100rem">
                <Modal.Title className="bg-dark text-secondary">Update Content</Modal.Title>
                <Form className="bg-secondary">
          <Form.Control className="mx-auto bg-light m-1 text-secondary"  
                size="lg" type="text" placeholder="title" name="title" onChange={updateField}/>
           <Form.Control className="mx-auto bg-light m-1 text-secondary"  
                size="lg" type="text" placeholder="date" name="date" onChange={updateField}/>
               
               <FloatingLabel controlId="floatingSelect" label="authors">
                
                <Form.Select className="mx-auto bg-light m-1 text-secondary"  
                size="lg" type="text" placeholder="title" name="title" list="authors" onChange={updateField}>
                    <datalist id="authors"> 
                    <option>Frostypine    </option>
                    <option>Crazy Cauldron</option>
                    <option>Wise Wizard</option>
                    </datalist>
                    </Form.Select>
                    </FloatingLabel>
               <Button>new author</Button>

                <h3>Paragraphs:</h3>
                <div className="par-box">
                <Form.Control className="mx-auto bg-light m-1 text-secondary"  
                size="lg" type="text" placeholder="par1" name="par1" onChange={updateField}/>
                <Form.Control className="mx-auto bg-light m-1 text-secondary"  
                size="lg" type="text" placeholder="par2" name="par2" onChange={updateField}/>
                 <Form.Control className="mx-auto bg-light m-1 text-secondary"  
                size="lg" type="text" placeholder="par3" name="par3" onChange={updateField}/>
                <Form.Control className="mx-auto bg-light m-1 text-secondary"  
                size="lg" type="text" placeholder="par4" name="par4" onChange={updateField}/>
                <Form.Control className="mx-auto bg-light m-1 text-secondary"  
                size="lg" type="text" placeholder="par5" name="par5" onChange={updateField}/>
                 <Form.Control className="mx-auto bg-light m-1 text-secondary"  
                size="lg" type="text" placeholder="par6" name="par6" onChange={updateField}/>
                <Form.Control className="mx-auto bg-light m-1 text-secondary"  
                size="lg" type="text" placeholder="par7" name="par7" onChange={updateField}/>
                <Form.Control className="mx-auto bg-light m-1 text-secondary"  
                size="lg" type="text" placeholder="par8" name="par8" onChange={updateField}/>
                 <Form.Control className="mx-auto bg-light m-1 text-secondary"  
                size="lg" type="text" placeholder="par9" name="par9" onChange={updateField}/>
                        <Form.Control className="mx-auto bg-light m-1 text-secondary"  
                size="lg" type="text" placeholder="par10" name="par10" onChange={updateField}/>
                 </div>
              <h3>Article Image:</h3>
              <Form.Control type="file" />

                </Form>
                <Modal.Footer className="bg-dark">
                 <Button size="sm" variant="secondary" onClick={resetSite}>Reset Site</Button>
                 <Button onClick={handleSubmit}>Submit</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )

}

export default Admin; 

/*
   title  
   date
   author    author list/add through typing 
   body       article blurb 
   art         article art 

   id     index 
   link   'page' + '/index'

   img          make avatar transparent or somthing ? 
   clkImg     colored author avatar maybe 
   bio           author bio 
   text     takes pars adn turns into array? 

*/