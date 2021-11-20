//App blog
import './App.css';
import Main from  './components/Main';
import ANav from  './components/ANav';
import ScrollToTop from "react-scroll-to-top";
import Footer from './components/Footer';
/* import {Container, Row, Col} from 'react-bootstrap'; 
<div className="content">
<Home info={info} />
</div> */

const App = () => {
  return (
    <div className="App">

      <header className="App-header">
      <ANav/> 
       <h1 className="mx-auto blogTitle"> Magic Archive</h1>
      </header>  
      <ScrollToTop smooth />
       <Main/>
    
       <Footer/>
    </div>
  );        


}

export default App;
 





{/* <div className="App"
style={{  width: 1000, padding: 30 }}
>
 <Container fluid>
        <Row>
          <Col></Col>
          <Col fluid xl>
             <ANav/> 
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col fluid xl>
         <header className="App-header">
       <h1> A Blog</h1>
      </header>   
       <Main/> 
          </Col>
          <Col></Col>
        </Row>
  </Container>  */}









