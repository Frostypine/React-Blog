import './Components.css';
import DataList from "./DataList";
import info from './data';
import ACaro  from './ACaro';

const Home = () => {
//console.log(info); 
  return (
    <div >    
    <ACaro/>
    <br/>
      {/* <p className = "placeholdertext">home</p> */}
        <DataList props={info} />    
        <br/>
        <br/>   
    </div>
  );
}
 
export default Home;