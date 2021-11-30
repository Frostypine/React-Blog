import './Components.css';

const ArticleHeader = ({image, title,author, art, date}) => {
    return (
        <div className="mx-auto">
        
        <img
        className="mx-auto blog-image "
        src={image}
     
        alt=""
        fluid
        //style={{ height: '40rem', width: '60rem' }}
      />  
        {/* console.log({image});  */}
      <h1 className= "blog-title">
      {title}
      </h1>


      <h2 align="left" >
        
      <div className="container-fluid " style={{  width: '24rem',   }}>
    <div className="row " >
        <div className="col-12 mt-3">
            <div className="card">
                <div className="card-horizontal author-card">
                    <div className="img-square-wrapper">
                        <img className="" src={art} alt="Card image cap"
                        style={{ height: '9rem', width: '8rem' }}
                        />
                    </div>
                    <div className="card-body">
                        <p className="card-text">By {author} </p>
                        <h4 className="card-title">On {date}</h4>
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

