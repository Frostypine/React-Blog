import './Components.css';
import { useParams } from 'react-router';
import { useSelector} from 'react-redux';
import { selectContent } from '../../state/contentSlice';
//import {deleteContent } from '../../state/contentSlice';
const PageContent = ( post, text) => {

  const {index} = useParams(); 

  const info = useSelector(selectContent);

  return (
  
    <div className="page-text">
           <p>
        {info[index].post}
      </p>
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