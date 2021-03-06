import './Components.css';
import ArticleHeader  from './ArticleHeader';
import info from './data';
import Page2Content from './Page2Content';

const Page2 = () => { return (
<div className="mx-auto page page2">

 <ArticleHeader 
   image={info[1].art} 
   title={info[1].title} 
   author={info[1].author} 
   art={info[1].clkImg}
   date={info[1].date} 
   />     
<Page2Content  
post={info[1].post} 
text={info[1].text} 
 />

    <br/><br/><br/><br/>
    </div>);
 }

export default Page2; 