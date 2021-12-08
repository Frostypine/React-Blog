//PageIndex.jsx
//React Blog Assignment 
//Array Bootcamp Fall 2021
//Katie Greenwald 

import { useSelector } from 'react-redux';
import { selectContent } from '../../state/contentSlice';
//import info from './data';
import { Link } from 'react-router-dom';

const PageIndex = () => {
  const info = useSelector(selectContent);
  return (
  <div className="mx-auto pageIndex"> 
    
  
     <h3 className="mx-auto page-index"> Index:</h3>
        {info.map((blog, i) => { 
        return (
          <ul className="page-list">
                    <li key={i}><Link to={`/page/${i}`}>{blog.title}</Link></li>
          </ul>
        )
        })}
  
    
     </div>
);

}
export default PageIndex;
