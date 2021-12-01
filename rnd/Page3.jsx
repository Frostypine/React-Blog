import './Components.css';
import ArticleHeader  from './ArticleHeader';
import info from './data';
import Page3Content from './Page3Content';

const Page3 = () => { return (
<div className="mx-auto page page3">

 <ArticleHeader  
   image={info[2].art} 
   title={info[2].title} 
   author={info[2].author} 
   art={info[2].clkImg}
   date={info[2].date} 
   />     
<Page3Content  
post={info[2].post} 
text={info[2].text} 
 />

    <br/><br/><br/><br/>
    </div>);
 }

export default Page3; 