import './Components.css';
import Carousel from 'react-bootstrap/Carousel'
import info from './data';

import img1 from '../Images/img1.jfif';
import img2 from '../Images/img2.jfif';
import img3 from '../Images/img3.jpg';

const ACaro = () => { 
  
    //  {info.map((blog, i) => {}
    return (


<div className="mx-auto caro" /*key={i}*/>
<Carousel className="mx-auto caro" style={{ height: '40rem', width: '60rem' }}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="Holiday"
      style={{ height: '40rem', width: '60rem' }}
      
    />
    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Magic Tools"
      style={{ height: '40rem', width: '60rem' }}
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Magic Creature"
      style={{ height: '40rem', width: '60rem' }}
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

</div>); }

export default ACaro; 