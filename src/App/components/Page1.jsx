import './Components.css';
import ArticleHeader from './ArticleHeader';
import Page1Content from './Page1Content';
import info from './data';

const Page1 = () => { return (
<div className="mx-auto page page1">

 <ArticleHeader 
   image={info[0].art} 
   title={info[0].title} 
   author={info[0].author} 
   art={info[0].clkImg}
   date={info[0].date} 
   />     
<Page1Content  info={info}  />

    <br/><br/><br/><br/>
    </div>);
 }

export default Page1; 