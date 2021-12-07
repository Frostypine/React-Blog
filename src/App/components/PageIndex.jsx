//PageIndex.jsx
//React Blog Assignment 
//Array Bootcamp Fall 2021
//Katie Greenwald 
import info from './data';
import { Link } from 'react-router-dom';

const PageIndex = () => {

  return (
  <div className="mx-auto pageIndex"> 
    
  
     
        {info.map((blog, i) => { 
        return (
          <ul className="page-list">
                    <li> <h3> Index:</h3> </li>
                    <li key={i}><Link to={`/page/${i}`}>{blog.title}</Link></li>
          </ul>
        )
        })}
  
    
     </div>
);

}
export default PageIndex;
