//About.jsx
//React Blog Assignment 
//Array Bootcamp Fall 2021
//Katie Greenwald 

import './Components.css';
import { Card, CardGroup } from 'react-bootstrap';
import { useState } from 'react';
import {  Link } from 'react-router-dom';
import info from './data';

//import {Container, Row, Col} from 'react-bootstrap';


const About = () => {
  const [author, setAuthor] = useState();
  const [bio, setBio] = useState();
  const [image, setImage] = useState();
  const [page, setPage] =useState(); 
  const handleClick = (blogAuthor, blogBio, blogImg, blogPage) => {
    setAuthor(blogAuthor);
    setBio(blogBio);
    setImage(blogImg); 
    setPage(blogPage); 
  }

  return (
    <div className="about mx-auto ">

      <br />
      <Card className="mx-auto aCard "
        style={{ height: '30rem', width: '18rem' }}>
          <div className="imgBox" style={{ height: '18rem', width: '18rem' }}>
         <Card.Img className="cardImg"variant="top" src={image}    style={{ height: '18rem', width: '18rem' }}   />
         </div>
        <Card.Body>
        <Link to= {page}> 
          <Card.Title>{author}</Card.Title>
          </Link>
          <Card.Text>
           {bio}
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <br />
   
  
      {/* <p className = "placeholdertext">this is about</p> */}

      <CardGroup className="card-group">
        {info.map((blog, i) => {

          return (
            <Card className="mx-auto cards"
              key={i}
              style={{ width: '15rem'}}
              onClick={ () =>  handleClick(blog.author, blog.bio, blog.clkImg, blog.link)}
            
              >

              <Card.Img className="cardsImg"variant="top" src={blog.img} style={{ height: '18rem', width: '18rem' }}/>
              <Card.Body >
                <Card.Title>{blog.author}</Card.Title>
                <Card.Text>
                  Author of  <Link to={blog.link}> "{blog.title}"</Link>
                </Card.Text>
           
              </Card.Body>
            </Card>
          );
        })}

      </CardGroup>

    </div>);
}

export default About;