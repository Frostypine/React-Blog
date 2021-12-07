//DataList.jsx
//React Blog Assignment 
//Array Bootcamp Fall 2021
//Katie Greenwald 

import './Components.css';
import {  Link } from 'react-router-dom';
import {Card} from 'react-bootstrap'; 
import { useSelector, useDispatch } from 'react-redux';
import { deleteContent, selectContent } from '../../state/contentSlice';
import img4 from '../Images/img4.jfif';

//import { CardGroup} from 'react-bootstrap'; 
const DataList = () => {
    const dispatch = useDispatch();
    const blogInfo = useSelector(selectContent)
    // console.log(blogInfo)

    const deleteHandler = (index) => {
      // console.log(index)
      dispatch(deleteContent(index))
    }
    return (
        <div className="mx-auto blog-list">
            {blogInfo.map((data,index) => (
                <div key={index}>
                          
<Card style={{ width: '25rem' } }className="cardi bg-dark ">
  <Card.Img  src= {data.art} alt="image" fluid/> {/*alt={img4}   */}
  <Card.ImgOverlay>
  <Card.Body>
   <Link to={`/page/${index}`}>  
   <Card.Title className="cardTitle">
   <div className="blog-preview "><h2>{data.title}</h2></div>
    </Card.Title>
    <Card.Title className="blog-author ">by {data.author}</Card.Title>
    <Card.Subtitle className="mb-2 blog-date">{data.date}</Card.Subtitle>
    <Card.Text>
  <div className="blog-summary"><p> {data.body}</p></div>
    </Card.Text>
    </Link> 
    {/* <Card.Link href="#">more</Card.Link> */}
  </Card.Body>
  </Card.ImgOverlay>
</Card>          
<br/>              
                </div>
   
            ))}    
        </div>        
    )
            }

            export default DataList;


