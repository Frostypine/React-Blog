//PageContent.jsx
//React Blog Assignment 
//Array Bootcamp Fall 2021
//Katie Greenwald 

import './Components.css';
import { useParams } from 'react-router';
import { useSelector} from 'react-redux';
import { selectContent } from '../../state/contentSlice';
//import {deleteContent } from '../../state/contentSlice';


const PageContent = (post, text) => {

  const {index} = useParams(); 

   const info = useSelector(selectContent);

// function createPosts() {
//   for (let i =0; i <info[index].text.length; i++ ){
//     <p>
//     {info[index].text[i]}
//   </p>
//   }
// }


  return (

  
    <div className="page-text">
      {info[index].par.map((text, i) => {
                                
                                return (
                                    <h5 className="blog-author-info date-published-text">
                                        {text}
                                    </h5>
                                )
                            })}
    

    </div>

  );
}

export default PageContent;

