//ACaro.jsx
//React Blog Assignment 
//Array Bootcamp Fall 2021
//Katie Greenwald 

import './Components.css';
import Carousel from 'react-bootstrap/Carousel'
import info from './data';
import img4 from '../Images/img4.jfif';

const ACaro = () => { 
  
    //  {info.map((blog, i) => {}
    return (


<div className="mx-auto caro  container-fluid "/*key={i}*/>
<Carousel className="mx-auto caro container-fluid" style={{ height: '40rem', width: '60rem' }} fluid>
  <Carousel.Item>
    <img
      className="d-block w-100 img-fluid fluid"
      src={info[0].art}
      alt="Holiday"
      style={{ height: '40rem', width: '60rem' }}
      fluid
    />
    <Carousel.Caption>
     {/* <h3></h3>
      <p></p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="img-fluid d-block w-100"
      src={info[1].art}
      alt="Magic Tools"
      style={{ height: '40rem', width: '60rem' }}
      fluid
    />

    <Carousel.Caption>
      {/* <h3></h3>
      <p></p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="img-fluid d-block w-100"
      src={info[2].art}
      alt="Magic Creature"
      style={{ height: '40rem', width: '60rem'  }}
      fluid
    />
    <Carousel.Caption>
      {/* <h3></h3>
      <p></p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="img-fluid d-block w-100"
      src={img4}
      alt="fire heart"
      style={{ height: '40rem', width: '60rem' }}
      fluid
    />
    <Carousel.Caption>
      {/* <h3></h3>
      <p></p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

</div>); }

export default ACaro; 