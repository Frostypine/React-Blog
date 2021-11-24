import './Components.css';
import {  Link } from 'react-router-dom';
import {Nav} from 'react-bootstrap'; 

const ANav = () => { return (
    <header className= "mx-auto linkIndex">
    <Nav variant="tabs" defaultActiveKey="/home" horizontal>
  <Nav.Item>
    <Nav.Link href="/home" ><Link to='/'>Home</Link></Nav.Link>
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
</Nav>

     
     {/* <nav> <Link to='/home'>Home|</Link>
      <Link to='/about'>About|</Link>
      <Link to='/contact'>Contact|</Link>
      <Link to='/index'>Index</Link>
    </nav> */}
            <br />
        
  </header>

); 

}

export default ANav; 