//App.js
//React Blog Assignment 
//Array Bootcamp Fall 2021
//Katie Greenwald 

import './App.css';
import Main from  './components/Main';
import ANav from  './components/ANav';
import ScrollToTop from "react-scroll-to-top";
import Footer from './components/Footer';
 //import {Container, Row, Col} from 'react-bootstrap'; 

const App = () => {

  
  return (
    <div className="App">

      <header className="App-header">
    <ANav/> 
    <h1 className="mx-auto blogTitle placeholdertext"> Magic Archive  </h1>  
    
      </header>  
      <ScrollToTop smooth />
       <Main/>
       <br/><br/><br/><br/>  <br />       <br/><br/><br/><br/>  <br />
            <br />  <br />
            <br />
       <Footer/>
    </div>
  );        


}

export default App;
 














