//Admin.jsx
//React Blog Assignment 
//Array Bootcamp Fall 2021
//Katie Greenwald 

import './Components.css';
import { Form, Modal, Container, Button, FloatingLabel } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContent, selectContent } from '../../state/contentSlice';

import info from './data';

const Admin = ({ defaultContent, setShow, show }) => {
    const dispatch = useDispatch();
    const content = useSelector(selectContent);
    //const info = useSelector(selectContent);

    const [response, setResponse] = useState({ title: "", author: "" }) //we use this to keep track of the form input , see handleSubmit
    

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
        if (response.author) {
            dispatch(addContent(updateContentArr));
            setResponse({});
        }
    }

//    const handleInput = (e) =>{
//         let { line } = e.target;
//         this.setState({ [line]: value });
//       }
    return (
        <Container>
            <Modal show={show} onHide={handleClose}width="100rem">
                <Modal.Title className="bg-dark text-secondary">Update Content</Modal.Title>
                
                <Form className="bg-secondary">
          <Form.Control className="mx-auto bg-light m-1 text-secondary"  
                size="lg" type="text" placeholder="Title:" name="title" onChange={updateField}/>
           <Form.Control className="mx-auto bg-light m-1 text-secondary"  
                size="lg" type="text" placeholder="Date:" name="date" onChange={updateField}/>
               
             
               <h3>Author:</h3>
               {/* <FloatingLabel controlId="floatingSelect" label="Authors:"> */}
                <Form.Select className="mx-auto bg-light m-1 text-secondary"  
                size="lg" type="text" placeholder="authors" name="author" 
                list="authors" onChange={updateField}>
                          {info.map((blog, i) => { 
        return (
            <option key = {i}>{blog.author} </option>
        )
        })}
                
                    </Form.Select>
                    <Button>new author</Button>
               {/* </FloatingLabel>  */}


                <h3>Paragraphs:</h3>
                <div className="par-box">
                <Form.Control className="mx-auto bg-light m-1 text-secondary"  
                size="lg" type="text" placeholder="1" name="par1" onChange={updateField}/>

                <Form.Control className="mx-auto bg-light m-1 text-secondary"  
                size="lg" type="text" placeholder="2" name="par2" onChange={updateField}/>
                
                 <Form.Control className="mx-auto bg-light m-1 text-secondary"  
                size="lg" type="text" placeholder="3" name="par3" onChange={updateField}/>
                <Form.Control className="mx-auto bg-light m-1 text-secondary"  
                size="lg" type="text" placeholder="4" name="par4" onChange={updateField}/>
                <Form.Control className="mx-auto bg-light m-1 text-secondary"  
                size="lg" type="text" placeholder="5" name="par5" onChange={updateField}/>
                 <Form.Control className="mx-auto bg-light m-1 text-secondary"  
                size="lg" type="text" placeholder="6" name="par6" onChange={updateField}/>
                <Form.Control className="mx-auto bg-light m-1 text-secondary"  
                size="lg" type="text" placeholder="7" name="par7" onChange={updateField}/>
                <Form.Control className="mx-auto bg-light m-1 text-secondary"  
                size="lg" type="text" placeholder="8" name="par8" onChange={updateField}/>
                 <Form.Control className="mx-auto bg-light m-1 text-secondary"  
                size="lg" type="text" placeholder="9" name="par9" onChange={updateField}/>
                        <Form.Control className="mx-auto bg-light m-1 text-secondary"  
                size="lg" type="text" placeholder="10" name="par10" onChange={updateField}/>
                 </div>
              <h3>Article Image:</h3>
              <Form.Control className="mx-auto" type="file" name="art" onChange={updateField}/>

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
   text     takes pars adn turns into array? 

   id     index 
   link   'page' + '/index'  `/page/${index}`

   img          make avatar transparent or somthing ? 
   clkImg     colored author avatar maybe 
   bio           author bio 

   

*/