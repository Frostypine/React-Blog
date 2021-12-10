import React, {useState} from 'react';
import './Components.css';
import { Container, Button, Form, Accordion, Card } from 'react-bootstrap';
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addComments, selectComments } from '../../state/commentSlice';

const Comments = () => {
    //grab index from the url of the parent component don't need to pass it as it is already here
    const {index} = useParams();

    const dispatch = useDispatch(); 
    const commentList = useSelector(selectComments); // get list of comments from dedux
    const storeCommentList = () => dispatch(addComments([...commentList, comment]));
  // local state (component and children)
  const [comment, setComment] = useState({}); 

   const onSubmit = (e) => {
       e.preventDefault(); 

       //prevent empty comments 
       if (comment.name && comment.comment) {
           //or duplicate comment
           if (comment !== commentList[commentList.length -1]) {
               storeCommentList();
           }
       }
       //reset the form and component state 
       setComment({});
       e.target.reset(); 
   }

   const updateField = (e) => {
     setComment({
        ...comment,
        index: index,
        [e.target.name]: e.target.value
     })
   }

    return (
        <div>
        <Container className='commentForm'>
            <Accordion>
                
              <Accordion.Header>
                  Leave a comment: 
              </Accordion.Header>
              <Accordion.Item eventKey="e">
              <Form onSubmit={onSubmit}>
                <Form.Group className ="mb-3" controlId='exampleForm.ControlInput1'>
                      <Form.Control name="name" placeholder="name" onChange={updateField}/>   
               </Form.Group>   
                <Form.Group className ="mb-3" controlId='exampleForm.ControlInput2'>
                    <Form.Control as="textarea" name="comment" placeholder="comment" onChange={updateField}/>
                 </Form.Group>
                
                   <Button type="Submit">Submit</Button>
              </Form>
                </Accordion.Item>

 <Accordion.Item className="commentBox">
        {commentList.map((entry,i) => {
            return (
            // if (entry.index === index)// this is to make sure the comments only land on the correct blog
            // {
               
            <Card key={i} className="mt-2 comment">
                <Card.Header className="text-light bg-secondary d-flex"> {entry.name} says: </Card.Header>
                <Card.Text className="p-3 d-flex">{entry.comment}</Card.Text>
            </Card>
         
        //}
        )  }
        )}
 </Accordion.Item>            
 </Accordion>
    </Container>
        </div>
    )
}
export default Comments; 