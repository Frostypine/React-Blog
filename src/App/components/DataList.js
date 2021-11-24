import './Components.css';
 import {  Link } from 'react-router-dom';
 import {Card} from 'react-bootstrap'; 

const DataList = ( {props}) => {
    
    console.log(props)
    return (
        <div className="mx-auto blog-list">

 
            {props.map((data,i) => (
                <div key={i}>
                          
<Card style={{ width: '25rem' } }className="cardi bg-dark ">
  <Card.Img  src= {data.art} alt="" />
  <Card.ImgOverlay>
  <Card.Body>
   <Link to= {data.link}>  
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


