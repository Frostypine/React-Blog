//ArticleHeader.jsx
//React Blog Assignment 
//Array Bootcamp Fall 2021
//Katie Greenwald 

import './Components.css';
import { useParams } from 'react-router';
import { useSelector} from 'react-redux';
import {  selectContent } from '../../state/contentSlice';
//import { deleteContent } from '../../state/contentSlice';

const ArticleHeader = () => {
    const {index} = useParams(); 

const info = useSelector(selectContent);

    return (
        <div className="mx-auto">
        
        <img
        className="mx-auto blog-image "
        src={info[index].art}
     
        alt="article art"
        fluid
        //style={{ height: '40rem', width: '60rem' }}
      />  
        {/* console.log({image});  */}
      <h1 className= "blog-title">
      {info[index].title}
      </h1>


      <h2 align="left" >
        
      <div className="container-fluid " style={{  width: '24rem',   }}>
    <div className="row " >
        <div className="col-12 mt-3">
            <div className="card">
                <div className="card-horizontal author-card">
                    <div className="img-square-wrapper">
                        <img className="" src={info[index].clkImg} alt="author avatar"
                        style={{ height: '9rem', width: '8rem' }}
                        />
                    </div>
                    <div className="card-body">
                        <p className="card-text">By {info[index].author} </p>
                        <h4 className="card-title">On {info[index].date}</h4>
                    </div>
                    
                </div>
  
        </div>
    </div>
</div>
 </div>     </h2> 
    
  
        </div>        
    );
            }

          

            export default ArticleHeader;

