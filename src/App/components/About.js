import './Components.css';
import { Card, CardGroup } from 'react-bootstrap';
import { useState } from 'react';
import info from './data';

//import {Container, Row, Col} from 'react-bootstrap';


const About = () => {
  const [author, setAuthor] = useState();
  const [bio, setBio] = useState();
  const [image, setImage] = useState();

  const handleClick = (blogAuthor, blogBio, blogImg) => {
    setAuthor(blogAuthor);
    setBio(blogBio);
    setImage(blogImg); 
  }

  return (
    <div className="about">

      <br />
      <Card className="mx-auto blog-list "
        style={{ height: '27rem', width: '15rem' }}>
         <Card.Img variant="top" src={image}    style={{ height: '18rem', width: '15rem' }}   />
        <Card.Body>
          <Card.Title>{author}</Card.Title>
          <Card.Text>
           {bio}
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <br />
      <br />
      <br />
  
      {/* <p className = "placeholdertext">this is about</p> */}

      <CardGroup>
        {info.map((blog, i) => {

          return (
            <Card
              key={i}
              style={{ width: '10rem' }}
              onClick={ () =>  handleClick(blog.author, blog.bio, blog.clkImg)}>

              <Card.Img variant="top" src={blog.img} />
              <Card.Body >
                <Card.Title>{blog.author}</Card.Title>
                <Card.Text>
                  {blog.body}
                </Card.Text>
           
              </Card.Body>
            </Card>
          );
        })}

      </CardGroup>


      <br />
      <br />

    </div>);
}

export default About;