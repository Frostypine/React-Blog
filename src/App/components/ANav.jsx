//ANav.jsx
//React Blog Assignment 
//Array Bootcamp Fall 2021
//Katie Greenwald 

import './Components.css';
import {useState} from 'react'; 
import {  Link } from 'react-router-dom';
import {Nav, Button} from 'react-bootstrap'; 
import Admin from './Admin';
import data from '../components/data'; 

const ANav = () => {

  //these are to set up the modal 
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true); 
  }
  //this is to set the default content to the site content 
  const [content, setContent] = useState(data);

  return (
    <header className= "mx-auto linkIndex aNav">
    <Nav variant="tabs" defaultActiveKey="/" horizontal>
  <Nav.Item>
    <Nav.Link href="/" ><Link to='/'>Home</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="/about" ><Link to='/about'>About</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="/contact" href="/contact"><Link to='/contact'>
   Contact</Link>
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="/index"href="/index" >
    <Link to='/index'>Index</Link>
    </Nav.Link>
  </Nav.Item>

     <Button onClick = {handleShow} className="">Admin</Button> 
 <Admin defaultContent={data} setShow={setShow} show={show} />
</Nav>

   
   
            <br />
        
  </header>

); 

}

export default ANav; 