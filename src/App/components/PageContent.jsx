import './Components.css';

const PageContent = ( post, text) => {
  return (
  
    <div className="page-text">
           <p>
        {post}
      </p>
      <p>
        {text[0]}
      </p>
 
      <p>
        {text[1]}
      </p>
      <p>
        {text[2]}
      </p>
      <p>
        {text[3]}
      </p>
      <p>
        {text[4]}
      </p>
      <p>
        {text[5]}
      </p>
      <p>
        {text[6]}
      </p>
      <p>
        {text[7]}
      </p>
      <p>
        {text[8]}
      </p>
     <p>
        {text[9]}
      </p>
      <p>
        {text[10]}
      </p>
    </div>

  );
}

export default PageContent;