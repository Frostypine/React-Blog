
import './Components.css';
import {Card, CardGroup} from 'react-bootstrap'; 
import cpine from '../Images/c-aur.png';
import cwiz from '../Images/c-aur1.png';
import ccal from '../Images/c-aur2.png';
import pine from '../Images/d-aur.png';
import wiz from '../Images/d-aur1.png';
import cal from '../Images/d-aur2.png';

import {Container, Row, Col} from 'react-bootstrap'; 
const About = () => { return (
<div className="about"> 
   <p className = "placeholdertext">this is about</p>
<CardGroup>
   <Card style={{ width: '11rem'}}>
  <Card.Img variant="top" src={pine} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      example text 
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '10rem'}}>
  <Card.Img variant="top" src={wiz} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      example text 
    </Card.Text>
  </Card.Body>
</Card>

<Card style={{ width: '11rem'}}>
  <Card.Img variant="top" src={cal} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      example text 
    </Card.Text>
  </Card.Body>
</Card>
</CardGroup>
   {/* 
     <img src={pine} alt = "pine icon" /> 
   <img src={wiz} alt = "wizard hat" />
   <img src={cal} alt = "witch cauldron" />
   
   <Container>
      <Row>
        <Col></Col>
        <Col>select target</Col>
        <Col></Col>
      </Row>
      <Row>
      <Col><img src={pine} alt = "pine icon" /> </Col>
        <Col><img src={wiz} alt = "wizard hat" /></Col>
        <Col><img src={cal} alt = "witch cauldron" /></Col>
      </Row>
   </Container> */}



</div>); }

export default About; 