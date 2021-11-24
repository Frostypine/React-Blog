import './Components.css';

const Article = ({image, title,author,date}) => {
    return (
        <div className="mx-auto">
        
        <img
        className="mx-auto blog-image "
        src={image}
     
        alt=""
        //style={{ height: '40rem', width: '60rem' }}
      />  
        {/* console.log({image});  */}
      <h1 className= "blog-title">
      {title}
      </h1>
      <h2>
        by  {author} 
      </h2>
      <p>
          posted  {date} 
      </p>
  
        </div>        
    )
            }

          

            export default Article;

