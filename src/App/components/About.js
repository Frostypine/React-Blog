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
    <div className="about">

      <br />
      <Card className="mx-auto blog-list "
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

      <CardGroup >
        {info.map((blog, i) => {

          return (
            <Card className="mx-auto blog-list "
              key={i}
              style={{ width: '12rem' }}
              onClick={ () =>  handleClick(blog.author, blog.bio, blog.clkImg, blog.link)}
            
              >

              <Card.Img className="cardImg"variant="top" src={blog.img} style={{ height: '18rem', width: '18rem' }}/>
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


      <br />
      <br />
      <br />
      <br />
    </div>);
}

export default About;