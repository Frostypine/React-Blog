//Home.jsx
//React Blog Assignment 
//Array Bootcamp Fall 2021
//Katie Greenwald 

import './Components.css';
import DataList from "./DataList";
import ACaro  from './ACaro';

const Home = () => {
//console.log(info); 
  return (
    <div >    
    <ACaro/>
    <br/>
        <DataList  />    
        <br/>
        <br/>   
    </div>
  );
}
 
export default Home;