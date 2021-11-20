import './Components.css';
 import {  Link } from 'react-router-dom';
 import {Card} from 'react-bootstrap'; 

const DataList = ( {props}) => {
    
    console.log(props)
    return (
        <div className="mx-auto blog-list">

 
            {props.map((data,i) => (
                <div key={i}>
                          
<Card style={{ width: '18rem' } }className="card">
  <Card.Body>
    <Card.Title>
 <Link to= {data.link}>   <div className="blog-preview"><h2>{data.title}</h2></div></Link> 
    </Card.Title>
    <Card.Subtitle className="mb-2 text-muted">post date</Card.Subtitle>
    <Card.Text>
  <div className="blog-preview"><p> {data.body}</p></div>
    </Card.Text>
    <Card.Link href="#">more</Card.Link>
  </Card.Body>
</Card>          
<br/>              
                </div>
   
            ))}    
        </div>        
    )
            }

            export default DataList;



            // import {  Link } from 'react-router-dom';


            // const DataList = ( {props}) => {
                
            //     console.log(props)
            //     return (
            //         <div className="blog-list">
            //             {props.map((data,i) => (
            //                 <div key={i}>
            //                   <Link to= {data.link}>
            //                 <div className="blog-preview"><h2>{data.title}</h2></div></Link> 
            //                 <div className="blog-preview"><p> {data.body}</p></div>
            //                 </div>
               
            //             ))}    
            //         </div>        
            //     )
            //             }
            
            //             export default DataList;