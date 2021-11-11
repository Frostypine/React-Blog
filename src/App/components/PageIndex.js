
import {  Link } from 'react-router-dom';

const PageIndex = () => { return(
    <div className="mx-auto pageIndex">
  
    <ul> 
    <li> <h5> Index:</h5> </li>
    <li><Link to='/page1'>Magic Creature Types</Link></li>
    <li><Link to='/page2'>Magic Object Types</Link></li>
    <li><Link to='/page3'>Magic User Types</Link></li>
    <li><Link to='/page4'>Magic of Holidays</Link></li>
    </ul>
   </div>
   );
  
}

export default PageIndex; 