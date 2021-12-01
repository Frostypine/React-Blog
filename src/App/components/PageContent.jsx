//PageContent.jsx
//React Blog Assignment 
//Array Bootcamp Fall 2021
//Katie Greenwald 

import './Components.css';
import { useParams } from 'react-router';
import { useSelector} from 'react-redux';
import { selectContent } from '../../state/contentSlice';
//import {deleteContent } from '../../state/contentSlice';


const PageContent = ( post, text) => {

  const {index} = useParams(); 

  const info = useSelector(selectContent);
function createPosts() {
  for (let i =0; i <info[index].text.length; i++ ){
    <p>
    {info[index].text[i]}
  </p>
  }
}
  return (
  
    <div className="page-text">
           <p>
        {info[index].body}
      </p>

     <div onLoad ={createPosts} ></div>


      <p>
        {info[index].text[0]}
      </p>
 
      <p>
        {info[index].text[1]}
      </p>
      <p>
        {info[index].text[2]}
      </p>
      <p>
        {info[index].text[3]}
      </p>
      <p>
        {info[index].text[4]}
      </p>
      <p>
        {info[index].text[5]}
      </p>
      <p>
        {info[index].text[6]}
      </p>
      <p>
        {info[index].text[7]}
      </p>
      <p>
        {info[index].text[8]}
      </p>
     <p>
        {info[index].text[9]}
      </p>
      <p>
        {info[index].text[10]}
      </p> 


    </div>

  );
}

export default PageContent;