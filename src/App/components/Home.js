import './Components.css';
import DataList from "./DataList";
import info from './data';

const Home = () => {
//console.log(info); 
  return (
    <div >    
      {/* <p className = "placeholdertext">home</p> */}
        <DataList props={info} />    
        <br/>
        <br/>   
    </div>
  );
}
 
export default Home;